import { forceInit, hidden } from './decorators';
import LinkedList, { Callback, Reducer, LNode } from './LinkedList';

export class SizedLinkedList<T, N extends LNode<T> = LNode<T>> extends LinkedList<T, N> {
  @forceInit(() => 0, { enumerable: false })
  protected _size!: number;

  /** Current size of list */
  public get size() {
    return this._size;
  }

  /** Pops item from end of the list */
  public pop() {
    if (this._size) {
      const item = super.pop();

      --this._size;
      return item;
    }
    return undefined;
  }

  /** Shifts item from the front of the list  */
  public shift() {
    if (this._size) {
      const item = super.shift();

      --this._size;
      return item;
    }
    return undefined;
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

  /** appends the specified list directly onto the tail of the second list */
  public concatUnsafe(list: typeof this) {
    const r = super.concatUnsafe(list);

    if (r === this) {
      r._size += list._size;
    }
    return r;
  }

  /** Creates a new slice of the linked list */
  public slice(start: number = 0, end: number = this.size): typeof this {
    const s = start < 0 ? this.size + start : start;
    const e = end < 0 ? this.size + end : end;

    return super.slice(s < 0 ? 0 : s, e < 0 ? 0 : e);
  }

  /** Converts list to an array slice */
  public toArraySlice(start: number = 0, end: number = this.size): T[] {
    let s = start < 0 ? this.size + start : start;
    let e = end < 0 ? this.size + end : end;
    if (s < 0) s = 0;
    if (e < 0) e = 0;
    else if (e > this.size) e = this.size;
    const arr = Array(e - s) as T[];
    let cur = this._head as N;
    let i = -1;
    let j = -1;

    while (cur && ++i < s) cur = cur.tail as N;
    while (cur && i++ < e) {
      arr[++j] = cur.body;
      cur = cur.tail as N;
    }
    return arr;
  }

  /** Converts list to native Array */
  public toArray(): T[] {
    // Faster to preallocate array when size is known than to use push()
    const arr = Array(this.size) as T[];
    let cur = this._head;
    let i = -1;

    while (cur) {
      arr[++i] = cur.body;
      cur = cur.tail as N;
    }
    return arr;
  }

  /** Reduces items from the end of the list to the front */
  public reduceRight<RT>(cb: Reducer<T, this, RT, this>, initialValue: RT): RT;
  public reduceRight<RT, This>(cb: Reducer<T, This, RT, this>, initialValue: RT, thisArg: This): RT;
  public reduceRight<RT, This = this>(
    cb: Reducer<T, This | this, RT, this>,
    initialValue: RT,
    thisArg: This | this = this
  ): RT {
    let cur = this._tail;
    let next = initialValue;
    let i = this.size;

    while (cur) {
      next = (
        cb as (this: This | this, accumulator: RT, value: T, index: number, set: this) => RT
      ).call(thisArg, next, cur.body, --i, this);
      cur = cur.head as N | undefined;
    }
    return next;
  }

  /** Finds predicate-matching item, with iteration beginning at the end of the list */
  public findRight(predicate: Callback<T, this, boolean, this>): T | undefined;
  public findRight<This>(predicate: Callback<T, This, boolean, this>, thisArg: This): T | undefined;
  public findRight<This = this>(
    predicate: Callback<T, This | this, boolean, this>,
    thisArg: This | this = this
  ): T | undefined {
    let cur = this._tail;
    let i = this.size;

    while (cur) {
      if (
        (predicate as (this: This | this, value: T, index: number, list: this) => boolean).call(
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
  public map<RT>(cb: Callback<T, this, RT, this>): RT[];
  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[];
  public map<RT, This = this>(
    cb: Callback<T, This | this, RT, this>,
    thisArg: This | this = this
  ): RT[] {
    let cur = this._head;
    let i = -1;
    const arr = Array<RT>(this.size);

    while (cur) {
      arr[++i] = (cb as (this: This | this, value: T, index: number, set: this) => RT).call(
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
  public reverseMap<RT>(cb: Callback<T, this, RT, this>): RT[];
  public reverseMap<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[];
  public reverseMap<RT, This = this>(
    cb: Callback<T, This | this, RT, this>,
    thisArg: This | this = this
  ): RT[] {
    let cur = this._tail;
    let i = this.size;
    let j = -1;
    const arr = Array<RT>(i);

    while (cur) {
      arr[++j] = (cb as (this: This | this, value: T, index: number, set: this) => RT).call(
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
