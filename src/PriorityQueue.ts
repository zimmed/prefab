import SortedSet from './SortedSet';
import { hidden, forceInit } from './decorators';

function compare<T, S extends PriorityQueue<T>>(a: T, b: T, q: S) {
  // @ts-expect-error
  const x = q._pMap.get(a) as number;
  // @ts-expect-error
  const y = q._pMap.get(b) as number;

  // @ts-expect-error
  if (x === y) return (q._cMap.get(a) as number) < (q._cMap.get(b) as number) ? -1 : 1;
  return x < y ? -1 : 1;
}

export class PriorityQueue<T> extends SortedSet<T> {
  @hidden
  private _rCount = 0;

  @hidden
  private _count = 0;

  @forceInit(() => new Map<T, number>(), { enumerable: false, writable: false })
  protected readonly _pMap!: Map<T, number>;

  @forceInit(() => new Map<T, number>(), { enumerable: false, writable: false })
  protected readonly _cMap!: Map<T, number>;

  public constructor(iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>) {
    super(iterable, compare);
  }

  public add(item: T) {
    return this.enqueue(item);
  }

  public append(item: T, priority = 10) {
    return this.enqueue(item, priority);
  }

  public insert(item: T, priority = -1, c = --this._rCount) {
    return this.enqueue(item, priority, c);
  }

  public enqueue(item: T, priority = 5, c = ++this._count) {
    if (this._pMap.has(item)) return this;
    this._pMap.set(item, priority);
    this._cMap.set(item, c);
    return super.add(item);
  }

  public dequeue() {
    const item = this.shift();

    if (typeof item !== 'undefined') {
      this._pMap.delete(item);
      this._cMap.delete(item);
    }
    return item;
  }

  public delete(item: T) {
    const r = super.delete(item);

    if (r) {
      this._pMap.delete(item);
      this._cMap.delete(item);
    }
    return r;
  }
}

export default PriorityQueue;
