import { hidden } from './decorators';
import SizedLinkedList from './SizedLinkedList';

export enum Type {
  LIFO = 'LIFO',
  FIFO = 'FIFO',
}

export class Queue<T> extends SizedLinkedList<T> {
  public static Type = Type;

  public static from<T>(
    iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
    type?: Type
  ) {
    return new this(iterable, type);
  }

  @hidden({ writable: false })
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

export default Queue;
