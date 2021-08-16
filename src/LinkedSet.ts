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
    const item = super.pop();

    if (item) this._map.delete(item);
    return item;
  }

  /** Shifts item off of the front of the set */
  public shift() {
    const item = super.shift();

    if (item) this._map.delete(item);
    return item;
  }

  /** Determines if set contains specified item */
  public has(item: T) {
    return this._map.has(item);
  }

  /** Appends unique item to end of the set */
  public add(item: T) {
    return !this._map.has(item) ? super.add(item) : this;
  }

  /** Inserts unique item into the front of the set */
  public insert(item: T) {
    return !this._map.has(item) ? super.insert(item) : this;
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
    const map = this._map;

    if (this.deleteNode(map.get(item))) {
      map.delete(item);
      return true;
    }
    return false;
  }

  /** Reduces items from the end of the set to the front */
  public reduceRight<RT, This>(
    cb: Reducer<T, This, RT, this>,
    initialValue: RT,
    thisArg: This
  ): RT {
    // @ts-ignore
    return SizedLinkedList.prototype.reduceRight.call(this, cb, initialValue, thisArg) as RT;
  }

  /** Finds predicate-matching item, with iteration beginning at the end of the set */
  public findRight<This>(
    predicate: Callback<T, This, boolean, this>,
    thisArg: This
  ): T | undefined {
    // @ts-ignore
    return SizedLinkedList.prototype.findRight.call(this, predicate, thisArg) as T | undefined;
  }

  /** Maps set items into a new array */
  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.map.call(this, cb, thisArg) as RT[];
  }

  /** Maps set items from the end of the set to the front into a new array */
  public reverseMap<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.reverseMap.call(this, cb, thisArg) as RT[];
  }
}

export default LinkedSet;
