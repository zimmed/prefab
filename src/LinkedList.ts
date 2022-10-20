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
  /** Static factory method as alias for class constructor */
  static create<T>(iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>) {
    return new this(iterable);
  }

  /** Same as LinkedList.create() but requires constructor arg */
  static from<T>(iterable: IterableIterator<T> | Array<T> | Generator<T, void, unknown>) {
    return new this(iterable);
  }

  @hidden
  protected _head?: N;

  @hidden
  protected _tail?: N;

  /** Item at head of the list */
  public get head() {
    return this._head?.body;
  }
  /** Item at tail of the list */
  public get tail() {
    return this._tail?.body;
  }

  /** @hidden */
  get [Symbol.toStringTag]() {
    const size = 'size' in this ? (this as unknown as { size: number }).size : '?';
    const type = !this._head
      ? 'Empty'
      : this._head.body == null
      ? 'unknown'
      : (this._head.body as unknown as object).constructor.name;

    return `${type}${this._head ? `(${size})` : ''}`;
  }

  /**
   * @param iterable Optional iterable with which to initialize the list
   */
  public constructor(iterable?: IterableIterator<T> | Array<T>, /** @hidden **/ init?: object) {
    if (init) Object.assign(this, init);
    if (iterable) {
      for (const item of iterable) this.add(item);
    }
  }

  /** Removes and returns the last element of the list (or undefined if list is empty) */
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

  /** Removes and returns the first element of the list (or undefined if list is empty) */
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
   * Careful! O(n)
   * Checks to see if item exists in list
   */
  public has(item: T) {
    return !!this._findNode(item);
  }

  /** Adds item to end of the list */
  public append(item: T) {
    return this.add(item);
  }

  /** Adds item to front of the list */
  public insert(item: T) {
    return this.insertNode({ body: item, tail: this._head } as N);
  }

  /** Alias for insert */
  public unshift(item: T) {
    return this.insert(item);
  }

  /** Adds item to end of the list */
  public add(item: T) {
    return this.addNode({ head: this._tail, body: item } as N);
  }

  /** Moves element from end of list to the front */
  public cycle() {
    return this._tail ? this.headNode(this._tail) : this;
  }

  /** Moves element from front of list to the end */
  public recycle() {
    return this._head ? this.tailNode(this._head) : this;
  }

  /**
   * Caution: Assumes node is already part of linked list
   * Moves node to the front of the list
   */
  public headNode(node: N) {
    if (node === this._head) return this;
    if (node === this._tail) this._tail = node.head as N;
    if (node.head) node.head.tail = node.tail;
    if (node.tail) node.tail.head = node.head;
    node.head = undefined;
    node.tail = this._head;
    this._head = node;
    return this;
  }

  /**
   * Caution: Assumes node is already part of linked list
   * Moves node to the end of the list
   */
  public tailNode(node: N) {
    if (node === this._tail) return this;
    if (node === this._head) this._head = node.tail as N;
    if (node.head) node.head.tail = node.tail;
    if (node.tail) node.tail.head = node.head;
    node.tail = undefined;
    node.head = this._tail;
    if (this._tail) this._tail.tail = node;
    this._tail = node;
    return this;
  }

  /** Clears the list */
  public clear() {
    this._head = undefined;
    this._tail = undefined;
  }

  /** Removes item from the list */
  public delete(item: T) {
    return this.deleteNode(this._findNode(item));
  }

  /** Converts list to native Array */
  public toArray(): T[] {
    const arr = [] as T[];
    let cur = this._head;

    while (cur) {
      arr.push(cur.body);
      cur = cur.tail as N;
    }
    return arr;
  }

  /** Alias for values() method */
  public keys() {
    return this.values();
  }

  /** Kind of pointless, but needed for parity with builtin Set object */
  public entries(): IterableIterator<[T, T]>;
  public *entries(): IterableIterator<[any, T]> {
    let cur = this._head;

    while (cur) {
      yield [cur.body, cur.body];
      cur = cur.tail as N | undefined;
    }
  }

  /** Iterates through list items */
  public *values(): IterableIterator<T> {
    let cur = this._head;

    while (cur) {
      yield cur.body;
      cur = cur.tail as N | undefined;
    }
  }

  /** Iterates through list items in reverse */
  public *reverse(): IterableIterator<T> {
    let cur = this._tail;

    while (cur) {
      yield cur.body;
      cur = cur.head as N | undefined;
    }
  }

  /** Operates on each element of the list in a callback method (same signature as Array.prototype.forEach) */
  public forEach(cb: Callback<T, this, void, this>): void;
  public forEach<ThisArg>(cb: Callback<T, ThisArg, void, this>, thisArg?: ThisArg): void;
  public forEach<ThisArg = this>(
    cb: Callback<T, ThisArg | this, void, this>,
    thisArg: ThisArg | this = this
  ) {
    let cur = this._head;
    let i = -1;

    while (cur) {
      (cb as (this: ThisArg | this, value: T, index: number, list: this) => void).call(
        thisArg,
        cur.body,
        ++i,
        this
      );
      cur = cur.tail as N | undefined;
    }
  }

  /** Reduces list into specified value (same signature as Array.prototype.reduce) */
  public reduce<RT>(cb: Reducer<T, this, RT, this>, initialValue: RT): RT;
  public reduce<RT, This>(cb: Reducer<T, This, RT, this>, initialValue: RT, thisArg?: This): RT;
  public reduce<RT, This = this>(
    cb: Reducer<T, This | this, RT, this>,
    initialValue: RT,
    thisArg: This | this = this
  ): RT {
    let cur = this._head;
    let i = -1;
    let next = initialValue;

    while (cur) {
      next = (
        cb as (this: This | this, accumulator: RT, value: T, index: number, list: this) => RT
      ).call(thisArg, next, cur.body, ++i, this);
      cur = cur.tail as N | undefined;
    }
    return next;
  }

  /** Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find) */
  public find(predicate: Callback<T, this, boolean, this>): T | undefined;
  public find<This>(predicate: Callback<T, This, boolean, this>, thisArg: This): T | undefined;
  public find<This = this>(
    predicate: Callback<T, This | this, boolean, this>,
    thisArg: This | this = this
  ): T | undefined {
    let cur = this._head;
    let i = -1;

    while (cur) {
      if (
        (predicate as (this: This | this, value: T, index: number, list: this) => boolean).call(
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

  /** Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter) */
  public filter(predicate: Callback<T, this, boolean, this>): T[];
  public filter<This>(predicate: Callback<T, This, boolean, this>, thisArg: This): T[];
  public filter<This = this>(
    predicate: Callback<T, This | this, boolean, this>,
    thisArg: This | this = this
  ): T[] {
    let cur = this._head;
    let i = -1;
    const arr = [];

    while (cur) {
      if (
        (predicate as (this: This | this, value: T, index: number, list: this) => boolean).call(
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

  /** Maps list items into new array (same signature as Array.prototype.map) */
  public map<RT>(cb: Callback<T, this, RT, this>): RT[];
  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[];
  public map<RT, This = this>(
    cb: Callback<T, This | this, RT, this>,
    thisArg: This | this = this
  ): RT[] {
    let cur = this._head;
    let i = -1;
    const arr = [] as RT[];

    while (cur) {
      arr.push(
        (cb as (this: This | this, value: T, index: number, set: this) => RT).call(
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

  /** Joins list elements into one string (same signature as Array.prototype.join) */
  public join(separator?: string) {
    return this.toArray().join(separator);
  }

  /**
   * Caution: Assumes node already has correct head and tail set
   * Adds node to the front of the list
   */
  public insertNode(node: N) {
    const h = (this._head = node as N);

    if (h.tail) h.tail.head = h;
    if (!this._tail) this._tail = h;
    return this;
  }

  /**
   * Caution: Assumes node already has correct head and tail set
   * Adds node to the end of the list
   */
  public addNode(node: N) {
    const t = (this._tail = node as N);

    if (t.head) t.head.tail = t;
    if (!this._head) this._head = t;
    return this;
  }

  /** Removes specified node from the list */
  public deleteNode(cur?: N) {
    if (cur) {
      if (cur.head) cur.head.tail = cur.tail;
      if (cur.tail) cur.tail.head = cur.head;
      if (this._head === cur) this._head = cur.tail as N | undefined;
      if (this._tail === cur) this._tail = cur.head as N | undefined;
      return true;
    }
    return false;
  }

  public toJSON() {
    return this.toArray();
  }

  public [Symbol.iterator]() {
    return this.values();
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
