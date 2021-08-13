import { hidden } from './decorators';
import LinkedSet from './LinkedSet';

export enum Type {
  LIFO = 'LIFO',
  FIFO = 'FIFO',
}

export class UniQueue<T> extends LinkedSet<T> {
  public static Type = Type;

  public static from<T>(
    iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    type?: Type
  ) {
    return new this(iterable, type);
  }

  @hidden
  protected readonly _type: Type;

  public constructor(
    iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    type: Type = Type.LIFO
  ) {
    super(iterable);
    this._type = type;
  }

  public enqueue(item: T) {
    this.add(item);
  }

  public dequeue() {
    return this._type === Type.LIFO ? this.pop() : this.shift();
  }
}

export default UniQueue;
