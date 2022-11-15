import LinkedList, { Callback, Reducer, LNode } from './LinkedList';
import SizedLinkedList from './SizedLinkedList';
import { forceInit } from './decorators';

export class LinkedSet<T, N extends LNode<T> = LNode<T>> extends LinkedList<T, N> {
  @forceInit(() => new Map<T, N>(), { enumerable: false, writable: false })
  protected readonly _map!: Map<T, N>;

  /** Current size of set */
  public get size() {
    return this._map.size;
  }

  /** Pops item from the end of the set */
  public pop() {
    if (this._map.size) {
      const item = super.pop();

      this._map.delete(item!);
      return item;
    }
    return undefined;
  }

  /** Shifts item off of the front of the set */
  public shift() {
    if (this._map.size) {
      const item = super.shift();

      this._map.delete(item!);
      return item;
    }
  }

  /** Determines if set contains specified item */
  public has(item: T) {
    return this._map.has(item);
  }

  /** Appends unique item to end of the collection */
  public add(item: T) {
    if (this._map.has(item)) return this;

    const node = { body: item, head: this._tail } as N;

    this._map.set(item, node);
    return this.addNode(node);
  }

  /** Inserts unique item into the front of the collection */
  public insert(item: T) {
    if (this._map.has(item)) return this;

    const node = { body: item, tail: this._head } as N;

    this._map.set(item, node);
    return this.insertNode(node);
  }

  /** Removes specified item from the set */
  public delete(item: T) {
    if (this.deleteNode(this._map.get(item))) {
      this._map.delete(item);
      return true;
    }
    return false;
  }

  /** Clears set */
  public clear() {
    super.clear();
    this._map.clear();
  }

  /** Concatenates the head of the provided list to the tail of the list */
  public concatUnsafe(list: typeof this): typeof this {
    if (!this._head) return list;
    let cur = list._head;

    while (cur) {
      this.add(cur.body);
      cur = cur.tail as N;
    }
    return this;
  }

  /** Converts list to native Array */
  public slice(start?: number, end?: number): typeof this {
    return SizedLinkedList.prototype.slice.call(this, start, end) as unknown as typeof this;
  }

  /** Converts list to native Array */
  public toArraySlice(start?: number, end?: number): T[] {
    return SizedLinkedList.prototype.toArraySlice.call(this, start, end);
  }

  /** Converts list to native Array */
  public toArray(): T[] {
    return SizedLinkedList.prototype.toArray.call(this);
  }

  /** Reduces items from the end of the set to the front */
  public reduceRight<RT>(cb: Reducer<T, this, RT, this>, initialValue: RT): RT;
  public reduceRight<RT, This>(
    cb: Reducer<T, This, RT, this>,
    initialValue: RT,
    thisArg?: This
  ): RT;
  public reduceRight<RT, This = this>(
    cb: Reducer<T, This, RT, this>,
    initialValue: RT,
    thisArg: This | this = this
  ): RT {
    // @ts-ignore
    return SizedLinkedList.prototype.reduceRight.call(this, cb, initialValue, thisArg) as RT;
  }

  /** Finds predicate-matching item, with iteration beginning at the end of the set */
  public findRight(predicate: Callback<T, this, boolean, this>): T | undefined;
  public findRight<This>(predicate: Callback<T, This, boolean, this>, thisArg: This): T | undefined;
  public findRight<This = this>(
    predicate: Callback<T, This, boolean, this>,
    thisArg: This | this = this
  ): T | undefined {
    // @ts-ignore
    return SizedLinkedList.prototype.findRight.call(this, predicate, thisArg) as T | undefined;
  }

  /** Maps set items into a new array */
  public map<RT>(cb: Callback<T, this, RT, this>): RT[];
  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[];
  public map<RT, This = this>(cb: Callback<T, This, RT, this>, thisArg: This | this = this): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.map.call(this, cb, thisArg) as RT[];
  }

  /** Maps set items from the end of the set to the front into a new array */
  public reverseMap<RT>(cb: Callback<T, this, RT, this>): RT[];
  public reverseMap<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[];
  public reverseMap<RT, This = this>(
    cb: Callback<T, This, RT, this>,
    thisArg: This | this = this
  ): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.reverseMap.call(this, cb, thisArg) as RT[];
  }
}

export default LinkedSet;
