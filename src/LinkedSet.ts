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

  /** Appends unique item to end of the set */
  public add(item: T) {
    return this._map.has(item) ? this : super.add(item);
  }

  /** Inserts unique item into the front of the set */
  public insert(item: T) {
    return this._map.has(item) ? this : super.insert(item);
  }

  /** Inserts LinkedList Node into the front of the set */
  public insertNode(node: N) {
    this._map.set(node.body, node);
    return super.insertNode(node);
  }

  /** Appends LinkedList Node onto the end of the set */
  public addNode(node: N) {
    this._map.set(node.body, node);
    return super.addNode(node);
  }

  /** Clears set */
  public clear() {
    super.clear();
    this._map.clear();
  }

  /** Removes specified item from the set */
  public delete(item: T) {
    if (this.deleteNode(this._map.get(item))) {
      this._map.delete(item);
      return true;
    }
    return false;
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
