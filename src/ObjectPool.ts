import LinkedList, { LNode } from './LinkedList';
import { describe } from './decorators';

type InitArgs<T extends PoolObject> = T['onInit'] extends (...args: infer A) => any ? A : never;

export type PoolState<T extends PoolObject> = {
  pool?: ObjectPool<T>;
  inUse: boolean;
  readonly body: T;
  head?: LNode<T>;
  tail?: LNode<T>;
};

export abstract class PoolObject {
  @describe({ writable: false, enumerable: false })
  public readonly poolState = {
    pool: undefined,
    inUse: false,
    body: this,
    head: undefined,
    tail: undefined,
  } as PoolState<this>;

  /** Constructor must take no arguments */
  public constructor() {}

  /** Initializer for when object is spawned by the pool */
  public abstract onInit(...args: any[]): void;

  /** Deinitializer called when object is put back into the pool or freed from memory */
  public abstract onClean(): void;
}

export class ObjectPool<O extends PoolObject> {
  /** Objects within the pool must inherit from ObjectPool.Object */
  public static Object = PoolObject;

  @describe({ enumerable: false, writable: false })
  protected readonly _list = new LinkedList<O, PoolState<O>>();

  @describe({ enumerable: false, writable: false })
  protected readonly _Class: new () => O;

  @describe({ enumerable: false })
  private _max = 0;

  @describe({ enumerable: false })
  private _active = 0;

  /** The current (max) size of the object pool */
  public get size() {
    return this._max;
  }

  /** The current count of active objects in the pool */
  public get count() {
    return this._active;
  }

  public constructor(PoolObjectClass: new () => O, allocSize = 0) {
    this._Class = PoolObjectClass;

    if (allocSize > 0) this.alloc(allocSize);
  }

  public *items() {
    for (const item of this._list) {
      if (item.poolState.inUse) yield item;
      else break;
    }
  }

  public [Symbol.iterator]() {
    return this.items();
  }

  /** Spawns and initializes object from pool, or create new object and increase pool size if full */
  public forceSpawn(...args: InitArgs<O>): O {
    let item = this._list.tail;

    if (!item || item.poolState.inUse) {
      item = this.create();
      item.onInit(...args);
      item.poolState.inUse = true;
      ++this._max;
      this.insert(item);
    } else {
      item.onInit(...args);
      item.poolState.inUse = true;
      this._list.headNode(item.poolState);
    }
    ++this._active;
    return item;
  }

  /** Spawns and initializes object from pool (if any are free) */
  public spawn(...args: InitArgs<O>): O | undefined {
    const item = this._list.tail;

    if (item && !item.poolState.inUse) {
      this._list.headNode(item.poolState);
      item.poolState.inUse = true;
      item.onInit(...args);
      ++this._active;
      return item;
    }
    return undefined;
  }

  /** Returns object back to pool to be re-used later */
  public free(item: O) {
    this._list.tailNode(item.poolState);
    this.deallocateObject(item, false);
    return this;
  }

  /** Increases pool size and allocates new objects to fill it */
  public alloc(size = 1) {
    if (size > 0) {
      let i = -1;

      this._max += size;
      while (++i < size) this.add(this.create());
    }
    return this;
  }

  /** Overrides max pool size, deallocating any overflowing objects */
  public reallocUnsafe(size = this._max || 1) {
    if (size > this._max) {
      let i = this._max - 1;

      while (++i < size) this.add(this.create());
    } else {
      let i = this._max;

      while (--i >= size) this.deallocateObject(this._list.pop(), false);
    }
    this._max = size;
    return this;
  }

  /** Sets max pool size, but ignores call if provided size is smaller than current max */
  public realloc(size = this._max || 1) {
    if (size > this._max) {
      let i = this._max - 1;

      this._max = size;
      while (++i < size) this.add(this.create());
    }
    return this;
  }

  /** Completely clear the pool, freeing all objects from memory */
  public clear() {
    return this.dealloc(this._max);
  }

  /** Downsize pool by specified amount, deallocating overflowing objects */
  public dealloc(size = 1) {
    if (size > 0) {
      const m = Math.min(size, this._max);
      let i = -1;

      while (++i < m) this.deallocateObject(this._list.pop(), false);
      this._max -= m;
    }
    return this;
  }

  /** Create and return new PoolObject */
  protected create() {
    const obj = new this._Class() as O;

    obj.poolState.pool = this;
    return obj;
  }

  /** Append new object to end of the pool queue */
  protected add(obj: O) {
    obj.poolState.head = this._list.tail?.poolState;
    this._list.addNode(obj.poolState);
  }

  /** Insert new object into front of the pool queue */
  protected insert(obj: O) {
    obj.poolState.tail = this._list.head?.poolState;
    this._list.insertNode(obj.poolState);
  }

  /** Cleans and removes object from pool entirely */
  protected deallocateObject(obj?: O, del = true) {
    if (obj && (!del || this._list.deleteNode(obj.poolState))) {
      obj.onClean();
      obj.poolState.inUse = false;
      obj.poolState.pool = undefined;
      obj.poolState.tail = undefined;
      obj.poolState.head = undefined;
      --this._active;
      return true;
    }
    return false;
  }

  /** @hidden */
  get [Symbol.toStringTag]() {
    return `${this.constructor.name}<${this._Class.name}>(${this._max})`;
  }

  public toJSON() {
    return [...this.items()];
  }
}

export default ObjectPool;
