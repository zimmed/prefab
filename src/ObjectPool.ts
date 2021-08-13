import LinkedList, { LNode } from './LinkedList';
import { hidden } from './decorators';

type InitArgs<T extends PoolObject, K = T['poolInit']> = K extends (...args: infer A) => T
  ? A
  : never;
export type PoolState<T extends PoolObject> = {
  pool?: ObjectPool<T>;
  inUse: boolean;
  body: T;
  head?: LNode<T>;
  tail?: LNode<T>;
};

export abstract class PoolObject {
  @hidden({ writable: false })
  public readonly poolState = {
    pool: undefined,
    inUse: false,
    body: this,
    head: undefined,
    tail: undefined,
  } as PoolState<this>;

  /** Constructor must take no arguments */
  public constructor() {}

  public abstract poolInit(...args: any[]): void;

  public abstract poolClean(): void;
}

export class ObjectPool<O extends PoolObject> {
  public static Object = PoolObject;

  public static create<O extends PoolObject>(Class: new () => O, allocSize = 0) {
    return new this(Class, allocSize);
  }

  @hidden({ writable: false })
  protected readonly _list = new LinkedList<O, PoolState<O>>();

  @hidden({ writable: false })
  protected readonly _Class: new () => O;

  @hidden
  private _max = 0;

  public get size() {
    return this._max;
  }

  /** @hidden */
  get [Symbol.toStringTag]() {
    return `${this.constructor.name}<${this._Class.name}>(${this._max})`;
  }

  public create() {
    const obj = new this._Class() as O;

    obj.poolState.pool = this;
    return obj;
  }

  public forceSpawn(...args: InitArgs<O>): O {
    let node = this._list.tail;
    let item: O;

    if (node?.inUse || !node) {
      item = this.create();
      item.poolInit(...args);
      item.poolState.inUse = true;
      ++this._max;
      this.insert(item);
    } else {
      item = node.body;
      item.poolInit(...args);
      item.poolState.inUse = true;
      this._list.headNode(node);
    }
    return item;
  }

  public spawn(...args: InitArgs<O>): O | undefined {
    const node = this._list.tail;

    if (node && !node?.inUse) {
      const item = node?.body;

      this._list.headNode(node);
      item.poolState.inUse = true;
      item.poolInit(...args);
      return item;
    }
    return undefined;
  }

  public free(item: O) {
    item.poolClean();
    item.poolState.inUse = false;
    this._list.tailNode(item.poolState);
  }

  public deallocateObject(obj?: O, del = true) {
    if (obj && (!del || this._list.deleteNode(obj.poolState))) {
      obj.poolClean();
      obj.poolState.inUse = false;
      obj.poolState.pool = undefined;
      obj.poolState.tail = undefined;
      obj.poolState.head = undefined;
      return true;
    }
    return false;
  }

  public alloc(size = 1) {
    let i = -1;

    this._max += size;
    while (++i < size) this.add(this.create());
  }

  public reallocUnsafe(size = this._max || 1) {
    if (size > this._max) {
      let i = this._max - 1;

      while (++i < size) this.add(this.create());
    } else {
      let i = this._max;

      while (--i >= size) this.deallocateObject(this._list.pop(), false);
    }
    this._max = size;
  }

  public realloc(size = this._max || 1) {
    if (size > this._max) {
      let i = this._max - 1;

      while (++i < size) this.add(this.create());
    } else {
      this._max = size;
    }
  }

  public clear() {
    this.dealloc(this.size);
  }

  public dealloc(size = 1) {
    let i = -1;

    while (++i < size) this.deallocateObject(this._list.pop(), false);
    this._max -= size;
  }

  public constructor(Class: new () => O, allocSize = 0) {
    this._Class = Class;

    if (allocSize) this.alloc(allocSize);
  }

  private add(obj: O) {
    obj.poolState.head = this._list.tail;
    this._list.addNode(obj.poolState);
  }

  private insert(obj: O) {
    obj.poolState.tail = this._list.head;
    this._list.insertNode(obj.poolState);
  }
}

export default ObjectPool;
