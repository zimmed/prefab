import { hidden } from './decorators';
import LinkedSet from './LinkedSet';

export enum Type {
  LIFO = 'LIFO',
  FIFO = 'FIFO',
}

export class UniQueue<T> extends LinkedSet<T> {
  public static Type = Type;

  /** Static factory method as alias for class constructor */
  static create<T>(
    iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    type?: Type
  ) {
    return new this(iterable, type);
  }

  /** Same as LinkedList.create() but requires constructor arg */
  static from<T>(
    iterable: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    type?: Type
  ) {
    return new this(iterable, type);
  }

  @hidden
  protected readonly _type: Type;

  public constructor(
    iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    type: Type = Type.FIFO
  ) {
    super(iterable);
    this._type = type;
  }

  /** Append item to Queue */
  public enqueue(item: T) {
    this.add(item);
  }

  /** Shift item from front of front of Queue if type is FIFO, otherwise pop from end of Queue (LIFO) */
  public dequeue() {
    return this._type === Type.LIFO ? this.pop() : this.shift();
  }
}

export default UniQueue;
