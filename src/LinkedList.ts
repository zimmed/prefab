import { hidden } from './decorators';

export type Callback<T, This, RT, Self> =
  | ((this: This) => RT)
  | ((this: This, value: T) => RT)
  | ((this: This, value: T, index: number) => RT)
  | ((this: This, value: T, index: number, set: Self) => RT);

export type Reducer<T, This, RT, Self> =
  | ((this: This) => RT)
  | ((this: This, accumulator: RT) => RT)
  | ((this: This, accumulator: RT, value: T) => RT)
  | ((this: This, accumulator: RT, value: T, index: number) => RT)
  | ((this: This, accumulator: RT, value: T, index: number, set: Self) => RT);

export type LNode<T> = { head?: LNode<T>; body: T; tail?: LNode<T> };

export class LinkedList<T, N extends LNode<T> = LNode<T>> {
  static from<T>(iterable: IterableIterator<T> | Array<T> | Generator<T, void, unknown>) {
    return new this(iterable);
  }

  @hidden
  protected _head?: N;

  @hidden
  protected _tail?: N;

  public get head() {
    return this._head;
  }
  public get tail() {
    return this._tail;
  }

  /** @hidden */
  get [Symbol.toStringTag]() {
    const size = 'size' in this ? (this as unknown as { size: number }).size : '?';
    const type = !this._head
      ? 'Empty'
      : this._head?.body == null
      ? 'unknown'
      : (this._head.body as unknown as object).constructor.name;

    return `${type}${this._head ? `(${size})` : ''}`;
  }

  public constructor(
    iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    init?: object
  ) {
    if (init) Object.assign(this, init);
    if (iterable) {
      for (const item of iterable) this.add(item);
    }
  }

  public pop() {
    let item;

    if (this._tail) {
      item = this._tail.body;
      if (this._tail === this._head) this._tail = this._head = undefined;
      else {
        this._tail = this._tail.head as N | undefined;
        if (this._tail) this._tail.tail = undefined;
      }
    }

    return item;
  }

  public shift() {
    let item;

    if (this._head) {
      item = this._head.body;
      if (this._tail === this._head) this._tail = this._head = undefined;
      else {
        this._head = this._head.tail as N | undefined;
        if (this._head) this._head.head = undefined;
      }
    }

    return item;
  }

  /**
   * Careful -- O(n)
   */
  public has(item: T) {
    return !!this._findNode(item);
  }

  public append(item: T) {
    return this.add(item);
  }

  public cycle() {
    return this._tail ? this.headNode(this._tail) : this;
  }

  public recycle() {
    return this._head ? this.tailNode(this._head) : this;
  }

  public headNode(node: N) {
    if (node === this._head) return this;
    if (node === this._tail) this._tail = node.head as N;
    if (node.head) node.head.tail = node.tail;
    if (node.tail) node.tail.head = node.head;
    node.head = undefined;
    node.tail = this.head;
    this._head = node;
    return this;
  }

  public tailNode(node: N) {
    if (node === this._tail) return this;
    if (node === this._head) this._head = node.tail as N;
    if (node.head) node.head.tail = node.tail;
    if (node.tail) node.tail.head = node.head;
    node.tail = undefined;
    node.head = this._tail;
    this._tail = node;
    return this;
  }

  public insertNode(node: N) {
    const h = (this._head = node as N);

    if (h.tail) h.tail.head = h;
    this._tail ??= h;
    return this;
  }

  public addNode(node: N) {
    const t = (this._tail = node as N);

    if (t.head) t.head.tail = t;
    this._head ??= t;
    return this;
  }

  public insert(item: T) {
    return this.insertNode({ body: item, tail: this._head } as N);
  }

  public add(item: T) {
    return this.addNode({ head: this._tail, body: item } as N);
  }

  public clear() {
    this._head = undefined;
    this._tail = undefined;
  }

  public deleteNode(cur?: N) {
    if (cur) {
      if (this._head === cur) this._head = cur.tail as N | undefined;
      else if (this._tail === cur) this._tail = cur.head as N | undefined;
      else {
        if (cur.head) cur.head.tail = cur.tail;
        if (cur.tail) cur.tail.head = cur.head;
      }
      return true;
    }
    return false;
  }

  public delete(item: T) {
    return this.deleteNode(this._findNode(item));
  }

  public values() {
    return this.keys();
  }

  public *entries(): Generator<[T, T]> {
    let cur = this._head;

    while (cur) {
      yield [cur.body, cur.body];
      cur = cur.tail as N | undefined;
    }
  }

  public toArray(): T[] {
    return Array.from(this.keys());
  }

  public *keys() {
    let cur = this._head;

    while (cur) {
      yield cur.body;
      cur = cur.tail as N | undefined;
    }
  }

  public *reverse() {
    let cur = this._tail;

    while (cur) {
      yield cur.body;
      cur = cur.head as N | undefined;
    }
  }

  public [Symbol.iterator]() {
    return this.keys();
  }

  public forEach<ThisArg>(cb: Callback<T, ThisArg, void, this>, thisArg: ThisArg) {
    let cur = this._head;
    let i = -1;

    while (cur) {
      (cb as (this: ThisArg, value: T, index: number, list: this) => void).call(
        thisArg,
        cur.body,
        ++i,
        this
      );
      cur = cur.tail as N | undefined;
    }
  }

  public reduce<RT, This>(cb: Reducer<T, This, RT, this>, initialValue: RT, thisArg: This): RT {
    let cur = this._head;
    let i = -1;
    let next = initialValue;

    while (cur) {
      next = (cb as (this: This, accumulator: RT, value: T, index: number, list: this) => RT).call(
        thisArg,
        next,
        cur.body,
        ++i,
        this
      );
      cur = cur.tail as N | undefined;
    }
    return next;
  }

  public find<This>(predicate: Callback<T, This, boolean, this>, thisArg: This): T | undefined {
    let cur = this._head;
    let i = -1;

    while (cur) {
      if (
        (predicate as (this: This, value: T, index: number, list: this) => boolean).call(
          thisArg,
          cur.body,
          ++i,
          this
        )
      ) {
        return cur.body;
      }
      cur = cur.tail as N | undefined;
    }
    return undefined;
  }

  public filter<This>(predicate: Callback<T, This, boolean, this>, thisArg: This): T[] {
    let cur = this._head;
    let i = -1;
    const arr = [];

    while (cur) {
      if (
        (predicate as (this: This, value: T, index: number, list: this) => boolean).call(
          thisArg,
          cur.body,
          ++i,
          this
        )
      ) {
        arr.push(cur.body);
      }
      cur = cur.tail as N | undefined;
    }
    return arr;
  }

  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[] {
    let cur = this._head;
    let i = -1;
    const arr = [] as RT[];

    while (cur) {
      arr.push(
        (cb as (this: This, value: T, index: number, set: this) => RT).call(
          thisArg,
          cur.body,
          ++i,
          this
        )
      );
      cur = cur.tail as N | undefined;
    }
    return arr;
  }

  public toJSON() {
    return this.toArray();
  }

  public join(separator?: string) {
    return this.toArray().join(separator);
  }

  private _findNode(item: T) {
    let cur = this._head;

    while (cur) {
      if (cur.body === item) return cur;
      cur = cur.tail as N | undefined;
    }
    return undefined;
  }
}

export default LinkedList;
