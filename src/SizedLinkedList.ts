import { hidden } from './decorators';
import LinkedList, { Callback, Reducer, LNode } from './LinkedList';

export class SizedLinkedList<T, N extends LNode<T> = LNode<T>> extends LinkedList<T, N> {
  @hidden
  private _size = 0;

  /** Current size of list */
  public get size() {
    return this._size;
  }

  /** Pops item from end of the list */
  public pop() {
    const item = super.pop();

    if (item) --this._size;
    return item;
  }

  /** Shifts item from the front of the list  */
  public shift() {
    const item = super.shift();

    if (item) --this._size;
    return item;
  }

  /** Inserts Node into the front the list */
  public insertNode(node: N) {
    ++this._size;
    return super.insertNode(node);
  }

  /** Appends Node onto the end of the list */
  public addNode(node: N) {
    ++this._size;
    return super.addNode(node);
  }

  /** Clears the list  */
  public clear() {
    super.clear();
    this._size = 0;
  }

  /** Deletes specified node from the list */
  public deleteNode(cur?: N) {
    if (super.deleteNode(cur)) {
      --this._size;
      return true;
    }
    return false;
  }

  /** Reduces items from the end of the list to the front */
  public reduceRight<RT, This>(
    cb: Reducer<T, This, RT, this>,
    initialValue: RT,
    thisArg: This
  ): RT {
    let cur = this._tail;
    let next = initialValue;
    let i = this.size;

    while (cur) {
      next = (cb as (this: This, accumulator: RT, value: T, index: number, set: this) => RT).call(
        thisArg,
        next,
        cur.body,
        --i,
        this
      );
      cur = cur.head as N | undefined;
    }
    return next;
  }

  /** Finds predicate-matching item, with iteration beginning at the end of the list */
  public findRight<This>(
    predicate: Callback<T, This, boolean, this>,
    thisArg: This
  ): T | undefined {
    let cur = this._tail;
    let i = this.size;

    while (cur) {
      if (
        (predicate as (this: This, value: T, index: number, list: this) => boolean).call(
          thisArg,
          cur.body,
          --i,
          this
        )
      ) {
        return cur.body;
      }
      cur = cur.head as N | undefined;
    }
    return undefined;
  }

  /** Maps list items into a new array */
  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[] {
    let cur = this._head;
    let i = -1;
    const arr = Array<RT>(this.size);

    while (cur) {
      arr[++i] = (cb as (this: This, value: T, index: number, set: this) => RT).call(
        thisArg,
        cur.body,
        i,
        this
      );
      cur = cur.tail as N | undefined;
    }
    return arr;
  }

  /** Maps list items from the end of the set to the front into a new array */
  public reverseMap<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[] {
    let cur = this._tail;
    let i = this.size;
    let j = -1;
    const arr = Array<RT>(i);

    while (cur) {
      arr[++j] = (cb as (this: This, value: T, index: number, set: this) => RT).call(
        thisArg,
        cur.body,
        --i,
        this
      );
      cur = cur.head as N | undefined;
    }
    return arr;
  }
}

export default SizedLinkedList;
