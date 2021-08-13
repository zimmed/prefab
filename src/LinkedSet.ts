import LinkedList, { Callback, Reducer, LNode } from './LinkedList';
import SizedLinkedList from './SizedLinkedList';
import { forceInit } from './decorators';

export class LinkedSet<T, N extends LNode<T> = LNode<T>> extends LinkedList<T, N> {
  @forceInit(() => new Map<T, N>(), { enumerable: false, writable: false })
  protected readonly _map!: Map<T, N>;

  public get size() {
    return this._map.size;
  }

  public pop() {
    const item = super.pop();

    if (item) this._map.delete(item);
    return item;
  }

  public shift() {
    const item = super.shift();

    if (item) this._map.delete(item);
    return item;
  }

  public has(item: T) {
    return this._map.has(item);
  }

  public add(item: T) {
    return !this._map.has(item) ? super.add(item) : this;
  }

  public insert(item: T) {
    return !this._map.has(item) ? super.insert(item) : this;
  }

  public insertNode(node: N) {
    this._map.set(node.body, node);
    return super.insertNode(node);
  }

  public addNode(node: N) {
    this._map.set(node.body, node);
    return super.addNode(node);
  }

  public clear() {
    super.clear();
    this._map.clear();
  }

  public delete(item: T) {
    const map = this._map;

    if (this.deleteNode(map.get(item))) {
      map.delete(item);
      return true;
    }
    return false;
  }

  public reduceRight<RT, This>(
    cb: Reducer<T, This, RT, this>,
    initialValue: RT,
    thisArg: This
  ): RT {
    // @ts-ignore
    return SizedLinkedList.prototype.reduceRight.call(this, cb, initialValue, thisArg) as RT;
  }

  public findRight<This>(cb: Reducer<T, This, boolean, this>, thisArg: This): T | undefined {
    // @ts-ignore
    return SizedLinkedList.prototype.findRight.call(this, cb, thisArg) as T | undefined;
  }

  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.map.call(this, cb, thisArg) as RT[];
  }

  public reverseMap<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.reverseMap.call(this, cb, thisArg) as RT[];
  }
}

export default LinkedSet;
