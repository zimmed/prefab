import LinkedList, { Callback, Reducer, LNode } from './LinkedList';
import SizedLinkedList from './SizedLinkedList';
import { forceInit } from './decorators';
import { resolveSoa } from 'dns';

export class LinkedCollection<
  K extends string | number | symbol,
  T extends { readonly [k in K]: any },
  N extends LNode<T> = LNode<T>
> extends LinkedList<T, N> {
  @forceInit(() => new Map<T[K], N>(), { enumerable: false, writable: false })
  protected readonly _map!: Map<T[K], N>;
  protected readonly keyBy!: K;

  /** Current size of collection */
  public get size() {
    return this._map.size;
  }

  public constructor(
    keyBy: K,
    iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    /** @hidden **/ init?: object
  ) {
    super(iterable, { ...init, keyBy });
  }

  /** Pops item from the end of the collection */
  public pop() {
    if (this._map.size) {
      const item = super.pop();

      this._map.delete(item![this.keyBy]);
      return item;
    }
    return undefined;
  }

  /** Shifts item off of the front of the collection */
  public shift() {
    if (this._map.size) {
      const item = super.shift();

      this._map.delete(item![this.keyBy]);
      return item;
    }
  }

  /** Iterates through collection keys */
  public keys() {
    return this._map.keys();
  }

  /** Iterates through collection key-value pairs */
  public *entries(): Generator<[T[K], T]> {
    const { keyBy } = this;
    let cur = this._head;

    while (cur) {
      yield [cur.body[keyBy], cur.body];
      cur = cur.tail as N | undefined;
    }
  }

  /** Determines if collection contains specified key */
  public has(key: T[K]) {
    return this._map.has(key);
  }

  /** Get an item in the collection by its key */
  public select(key: T[K]) {
    return this._map.get(key)?.body;
  }

  /** Get an existing item in the collection or add the provided one */
  public default(defaultItem: T): T {
    const existing = this._map.get(defaultItem[this.keyBy]);

    if (!existing) {
      this.add(defaultItem);
      return defaultItem;
    }

    return existing.body;
  }

  /** Update an existing item by key (default resolver mutates original item) */
  public update(
    item: Partial<T> & { readonly [k in K]: T[K] },
    resolve?: (existing: T, update: Partial<T>) => T
  ): T;
  public update(key: T[K], item: Partial<T>, resolve?: (existing: T, update: Partial<T>) => T): T;
  public update(
    itemOrKey: T[K] | (Partial<T> & { readonly [k in K]: T[K] }),
    itemOrResolve?: Partial<T> | ((existing: T, update: Partial<T>) => T),
    resolve: (existing: T, update: Partial<T>) => T = (x, y) => Object.assign(x, y)
  ) {
    const update = (typeof itemOrResolve === 'object' ? itemOrResolve : itemOrKey) as Partial<T>;
    const k = (
      typeof itemOrResolve === 'object'
        ? itemOrKey
        : (itemOrKey as unknown as { readonly [k in K]: T[K] })[this.keyBy]
    ) as T[K];
    const fn = typeof itemOrResolve === 'function' ? itemOrResolve : resolve;
    const node = this._map.get(k);

    if (node) {
      node.body = fn(node.body, update);
      return node.body;
    }
    return undefined;
  }

  /** Append unique item to the end of the collection or update exiting item */
  public apsert(item: T, resolve: (existing: T, update: T) => T = (_, x) => x) {
    let node = this._map.get(item[this.keyBy]);

    if (node) {
      node.body = resolve(node.body, item);
      return this;
    }
    node = { body: item, head: this._tail } as N;
    this._map.set(item[this.keyBy], node);
    return this.addNode(node);
  }

  /** Insert unique item to the front of the collection or update exiting item */
  public upsert(item: T, resolve: (existing: T, update: T) => T = (_, x) => x) {
    let node = this._map.get(item[this.keyBy]);

    if (node) {
      node.body = resolve(node.body, item);
      return this;
    }
    node = { body: item, tail: this._head } as N;
    this._map.set(item[this.keyBy], node);
    return this.insertNode(node);
  }

  /** Appends unique item to end of the collection */
  public add(item: T) {
    if (this._map.has(item[this.keyBy])) return this;

    const node = { body: item, head: this._tail } as N;

    this._map.set(item[this.keyBy], node);
    return this.addNode(node);
  }

  /** Inserts unique item into the front of the collection */
  public insert(item: T) {
    if (this._map.has(item[this.keyBy])) return this;

    const node = { body: item, tail: this._head } as N;

    this._map.set(item[this.keyBy], node);
    return this.insertNode(node);
  }

  /** Removes specified item by key from the collection */
  public delete(key: T[K]) {
    if (this.deleteNode(this._map.get(key))) {
      this._map.delete(key);
      return true;
    }
    return false;
  }

  /** Clears collection */
  public clear() {
    super.clear();
    this._map.clear();
  }

  /** Reduces items from the end of the collection to the front */
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

  /** Finds predicate-matching item, with iteration beginning at the end of the collection */
  public findRight(predicate: Callback<T, this, boolean, this>): T | undefined;
  public findRight<This>(predicate: Callback<T, This, boolean, this>, thisArg: This): T | undefined;
  public findRight<This = this>(
    predicate: Callback<T, This, boolean, this>,
    thisArg: This | this = this
  ): T | undefined {
    // @ts-ignore
    return SizedLinkedList.prototype.findRight.call(this, predicate, thisArg) as T | undefined;
  }

  /** Maps collection items into a new array */
  public map<RT>(cb: Callback<T, this, RT, this>): RT[];
  public map<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[];
  public map<RT, This = this>(cb: Callback<T, This, RT, this>, thisArg: This | this = this): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.map.call(this, cb, thisArg) as RT[];
  }

  /** Maps collection items from the end of the collection to the front into a new array */
  public reverseMap<RT>(cb: Callback<T, this, RT, this>): RT[];
  public reverseMap<RT, This>(cb: Callback<T, This, RT, this>, thisArg: This): RT[];
  public reverseMap<RT, This = this>(
    cb: Callback<T, This, RT, this>,
    thisArg: This | this = this
  ): RT[] {
    // @ts-ignore
    return SizedLinkedList.prototype.reverseMap.call(this, cb, thisArg) as RT[];
  }

  /** Group collection by specified key */
  public groupBy(key: K): Record<K, T>;
  public groupBy<X extends keyof T>(key: X): Record<X, T[]>;
  public groupBy<X extends keyof T>(key: X): Record<X, T[]> | Record<K, T> {
    if ((key as unknown as K) === this.keyBy) return Object.fromEntries(this.entries());

    const groups = {} as Record<X, T[]>;

    for (const item of this) {
      if (!groups[item[key]]) groups[item[key]] = [] as T[];
      groups[item[key]].push(item);
    }

    return groups;
  }
}

export default LinkedCollection;
