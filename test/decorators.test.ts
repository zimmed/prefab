import { decorators } from '../src';

describe('describe', () => {
  it('should allow currying descriptors', () => {
    const desc1 = decorators.describe({ configurable: false })({ writable: false });
    const desc2 = decorators.describe;

    class MyClass {
      @desc1
      public readonly foo = 'bar';

      @desc2()
      public readonly bar = 10;
    }

    const c = new MyClass();

    expect(Object.getOwnPropertyDescriptor(c, 'foo')).toEqual({
      configurable: false,
      writable: false,
      enumerable: true,
      value: 'bar',
    });
    expect(Object.getOwnPropertyDescriptor(c, 'bar')).toEqual({
      configurable: true,
      writable: true,
      enumerable: true,
      value: 10,
    });
  });
});

describe('forceInit', () => {
  it('should allow value access during instantiation', () => {
    class MyClass {
      @decorators.forceInit(() => 'foobar')
      public readonly baz!: string;

      constructor() {
        expect(Object.getOwnPropertyDescriptor(this, 'baz')).toBeUndefined();
        expect(this.baz).toBe('foobar');
        expect(Object.getOwnPropertyDescriptor(this, 'baz')).toBeDefined();
      }
    }

    const c = new MyClass();

    expect(c.baz).toBe('foobar');
  });
  it('should allow setting descriptors', () => {
    class MyClass {
      @decorators.forceInit(() => 42, { writable: false, configurable: false, enumerable: false })
      public readonly baz!: number;
    }

    const c = new MyClass();

    expect(c.baz).toBe(42);
    expect(Object.getOwnPropertyDescriptor(c, 'baz')).toEqual({
      configurable: false,
      writable: false,
      enumerable: false,
      value: 42,
    });
  });
});
