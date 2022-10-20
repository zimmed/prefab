import { ObjectPool, LinkedList, PoolObject } from '../src';

class Obj extends PoolObject {
  public foo: string = '';

  public onInit({ foo }: { foo: string }) {
    this.foo = foo;
  }

  public onClean() {
    this.foo = '';
  }
}

describe('PoolObject', () => {
  it('should be extendable and add pool state', () => {
    const obj = new Obj();

    expect(obj).toHaveProperty('poolState');
    expect(obj.poolState.pool).toBeUndefined();
    expect(obj.poolState.head).toBeUndefined();
    expect(obj.poolState.tail).toBeUndefined();
    expect(obj.poolState.body).toBe(obj);
    expect(obj.poolState.inUse).toBe(false);
    expect(obj.foo).toBe('');
  });
});

describe('ObjectPool.create', () => {
  it('should alias the constructor', () => {
    expect(ObjectPool.create(Obj)).toEqual(new ObjectPool(Obj));
    expect(ObjectPool.create(Obj, 100)).toEqual(new ObjectPool(Obj, 100));
  });
});

describe('new ObjectPool()', () => {
  it('should instantiate with an empty pool', () => {
    let pool: ObjectPool<Obj>;

    expect(() => (pool = new ObjectPool(Obj))).not.toThrowError();
    expect(pool!.size).toBe(0);
  });

  it('should instantiate with a specified pool size', () => {
    let pool: ObjectPool<Obj>;

    expect(() => (pool = new ObjectPool(Obj, 200))).not.toThrowError();
    expect(pool!.size).toBe(200);
  });
});

describe('ObjectPool', () => {
  describe('items()', () => {
    it('should have nothing to iterate when empty', () => {
      const pool = new ObjectPool(Obj);

      expect([...pool.items()]).toEqual([]);
    });
    it('should have nothing to iterate when no objects are active', () => {
      const pool = new ObjectPool(Obj, 10);

      expect([...pool.items()]).toEqual([]);
    });
    it('should iterate spawned/active items', () => {
      const pool = new ObjectPool(Obj, 10);
      const a = pool.spawn({ foo: 'bar' })!;
      const b = pool.spawn({ foo: 'baz' })!;
      const c = pool.spawn({ foo: 'foobar' })!;

      expect([...pool.items()]).toEqual([c, b, a]);
      pool.free(b);
      expect([...pool.items()]).toEqual([c, a]);
    });
    it('should iterate using the Symbol.iterator', () => {
      const pool = new ObjectPool(Obj, 10);
      const a = pool.spawn({ foo: 'bar' });
      const b = pool.spawn({ foo: 'baz' });
      const c = pool.spawn({ foo: 'foobar' });
      const res: Obj[] = [];

      for (const e of pool) {
        res.push(e);
      }
      expect(res).toEqual([c, b, a]);
    });
  });

  describe('toString()', () => {
    it('should provide a string represenation', () => {
      expect(new ObjectPool(Obj).toString()).toEqual(`[object ObjectPool<Obj>(0)]`);
      expect(new ObjectPool(Obj, 42).toString()).toEqual(`[object ObjectPool<Obj>(42)]`);
      expect(`${new ObjectPool(Obj, 100)}`).toEqual(`[object ObjectPool<Obj>(100)]`);
    });
  });

  describe('spawn()', () => {
    it('should spawn an entity when the pool has space', () => {
      const pool = new ObjectPool(Obj, 10);
      const a = pool.spawn({ foo: 'bar' });
      const b = pool.spawn({ foo: 'baz' });
      const c = pool.spawn({ foo: 'foobar' });

      expect(a).toEqual({ foo: 'bar' });
      expect(b).toEqual({ foo: 'baz' });
      expect(c).toEqual({ foo: 'foobar' });
      expect([...pool]).toEqual([c, b, a]);
    });

    it('should not spawn an entity when the pool has no space', () => {
      const pool = new ObjectPool(Obj, 2);
      const a = pool.spawn({ foo: 'bar' });
      const b = pool.spawn({ foo: 'baz' });
      const c = pool.spawn({ foo: 'foobar' });

      expect(a).toEqual({ foo: 'bar' });
      expect(b).toEqual({ foo: 'baz' });
      expect(c).toBeUndefined();
      expect([...pool]).toEqual([b, a]);
    });

    it('should not spawn an entity when the pool is empty', () => {
      const pool = new ObjectPool(Obj);
      const a = pool.spawn({ foo: 'bar' });

      expect(a).toBeUndefined();
      expect([...pool]).toEqual([]);
    });
  });

  describe('forceSpawn()', () => {
    it('should spawn an item normally if pool is not full', () => {
      const pool = new ObjectPool(Obj, 10);
      const a = pool.forceSpawn({ foo: 'bar' });
      const b = pool.forceSpawn({ foo: 'baz' });
      const c = pool.forceSpawn({ foo: 'foobar' });

      expect(a).toEqual({ foo: 'bar' });
      expect(b).toEqual({ foo: 'baz' });
      expect(c).toEqual({ foo: 'foobar' });
      expect([...pool]).toEqual([c, b, a]);
    });
    it('should expand and spawn when pool is empty', () => {
      const pool = new ObjectPool(Obj);
      const a = pool.forceSpawn({ foo: 'bar' });

      expect(pool.size).toBe(1);
      expect(a).toEqual({ foo: 'bar' });
      expect(a.poolState.inUse).toBe(true);
      // @ts-expect-error
      expect(pool._list.tail).toBe(a);

      const b = pool.forceSpawn({ foo: 'baz' });

      expect(pool.size).toBe(2);
      expect(b).toEqual({ foo: 'baz' });
      expect([...pool]).toEqual([b, a]);
    });
    it('should expand and spawn when pool is full', () => {
      const pool = new ObjectPool(Obj, 3);
      pool.spawn({ foo: 'a' });
      pool.spawn({ foo: 'b' });
      pool.spawn({ foo: 'c' });

      expect(pool.size).toBe(3);
      const a = pool.forceSpawn({ foo: 'bar' });

      expect(pool.size).toBe(4);
      expect(a).toEqual({ foo: 'bar' });

      const b = pool.forceSpawn({ foo: 'baz' });

      expect(pool.size).toBe(5);
      expect(b).toEqual({ foo: 'baz' });
      expect([...pool]).toEqual([b, a, { foo: 'c' }, { foo: 'b' }, { foo: 'a' }]);
    });
  });

  describe('free()', () => {
    it('should free up the specified object and move it to the end of the pool', () => {
      const pool = new ObjectPool(Obj, 5);
      const a = pool.spawn({ foo: 'a' })!;
      const b = pool.spawn({ foo: 'b' })!;
      const c = pool.spawn({ foo: 'c' })!;

      expect(pool.size).toBe(5);
      expect([...pool]).toEqual([c, b, a]);
      expect(pool.free(b)).toBe(pool);
      expect(b).toEqual({ foo: '' });
      expect([...pool]).toEqual([c, a]);
      // @ts-expect-error
      expect(pool._list.tail).toBe(b);
      expect(pool.free(a)).toBe(pool);
      expect(a).toEqual(b);
      expect([...pool]).toEqual([c]);
      // @ts-expect-error
      expect(pool._list.tail).toBe(a);
      expect(pool.free(c)).toBe(pool);
      expect(c).toEqual(b);
      expect([...pool]).toEqual([]);
      // @ts-expect-error
      expect(pool._list.tail).toBe(c);
    });
  });

  describe('alloc()', () => {
    it('should increase the pool size with empty objects', () => {
      const pool = new ObjectPool(Obj, 5);

      expect(pool.size).toBe(5);
      expect(pool.alloc(5)).toBe(pool);
      expect(pool.size).toBe(10);
      // @ts-expect-error
      expect(pool._list.tail).toEqual({ foo: '' });
      expect(new ObjectPool(Obj).alloc().size).toBe(1);
    });
    it('should not do anything when alloc size is <= 0', () => {
      const pool = new ObjectPool(Obj, 5);

      expect(pool.size).toBe(5);
      expect(pool.alloc(0)).toBe(pool);
      expect(pool.size).toBe(5);
      expect(pool.alloc(-100)).toBe(pool);
      expect(pool.size).toBe(5);
    });
  });

  describe('reallocUnsafe()', () => {
    it('should alloc if specified size is larger than current pool size', () => {
      const pool = new ObjectPool(Obj, 5);

      expect(pool.size).toBe(5);
      expect(pool.reallocUnsafe(10)).toBe(pool);
      expect(pool.size).toBe(10);
      // @ts-expect-error
      expect(pool._list.tail).toEqual({ foo: '' });
      expect(new ObjectPool(Obj, 0).reallocUnsafe().size).toBe(1);
    });
    it('should remove objects and clamp list when pool size larger than specified size', () => {
      const pool = new ObjectPool(Obj, 10);
      const items = Array(10)
        .fill(0)
        .map((_, i) => pool.spawn({ foo: `${i}` }));

      expect(pool.size).toBe(10);
      expect(pool.reallocUnsafe(5)).toBe(pool);
      expect(pool.size).toBe(5);
      expect([...pool]).toEqual([
        { foo: '9' },
        { foo: '8' },
        { foo: '7' },
        { foo: '6' },
        { foo: '5' },
      ]);
      expect(items[4]).toEqual({ foo: '' });
      expect(pool.reallocUnsafe().size).toBe(5);
    });
  });

  describe('realloc()', () => {
    it('should alloc if specified size is larger than current pool size', () => {
      const pool = new ObjectPool(Obj, 5);

      expect(pool.size).toBe(5);
      expect(pool.realloc(10)).toBe(pool);
      expect(pool.size).toBe(10);
      // @ts-expect-error
      expect(pool._list.tail).toEqual({ foo: '' });
      expect(new ObjectPool(Obj, 0).realloc().size).toBe(1);
    });
    it('should do nothing if the new size is smaller than the current size', () => {
      const pool = new ObjectPool(Obj, 10);
      const items = Array(10)
        .fill(0)
        .map((_, i) => pool.spawn({ foo: `${i}` }));

      expect(pool.size).toBe(10);
      expect(pool.realloc(5)).toBe(pool);
      expect(pool.size).toBe(10);
      expect([...pool]).toEqual(items.reverse());
      expect(pool.realloc().size).toBe(10);
    });
  });

  describe('dealloc()', () => {
    it('should reduce max size and pool objects by specified amount', () => {
      const pool = new ObjectPool(Obj, 10);
      const items = Array(10)
        .fill(0)
        .map((_, i) => pool.spawn({ foo: `${i}` }));

      expect(pool.size).toBe(10);
      expect(pool.dealloc(6)).toBe(pool);
      expect(pool.size).toBe(4);
      expect([...pool]).toEqual([{ foo: '9' }, { foo: '8' }, { foo: '7' }, { foo: '6' }]);
      expect(items[5]).toEqual({ foo: '' });
      expect(pool.dealloc().size).toBe(3);
      expect([...pool]).toEqual([{ foo: '9' }, { foo: '8' }, { foo: '7' }]);
      expect(pool.dealloc(10).size).toBe(0);
      expect([...pool]).toEqual([]);
    });
    it('should do nothing if the specified amount is <= 0', () => {
      const pool = new ObjectPool(Obj, 10);

      expect(pool.size).toBe(10);
      expect(pool.dealloc(0)).toBe(pool);
      expect(pool.size).toBe(10);
      expect(pool.dealloc(-5)).toBe(pool);
      expect(pool.size).toBe(10);
    });
    it('should do nothing if the pool is empty', () => {
      const pool = new ObjectPool(Obj);

      expect(pool.size).toBe(0);
      expect(pool.dealloc(1)).toBe(pool);
      expect(pool.size).toBe(0);
    });
  });

  describe('clear()', () => {
    const pool = new ObjectPool(Obj, 10);
    let dealloc: jest.SpyInstance;

    beforeEach(() => {
      dealloc = jest.spyOn(pool, 'dealloc');
    });
    it('should call dealloc with the current pool size', () => {
      expect(pool.clear()).toBe(pool);
      expect(pool.size).toBe(0);
      expect(dealloc).toHaveBeenCalledTimes(1);
      expect(dealloc).toHaveBeenCalledWith(10);
      expect(pool.clear()).toBe(pool);
      expect(dealloc).toHaveBeenCalledTimes(2);
      expect(dealloc).toHaveBeenCalledWith(0);
    });
  });

  describe('toJSON()', () => {
    it('should return an array of active entities', () => {
      const pool = new ObjectPool(Obj, 100);

      expect(JSON.stringify(pool)).toEqual('[]');
      pool.spawn({ foo: 'foo' });
      pool.spawn({ foo: 'bar' });
      expect(JSON.stringify(pool)).toEqual('[{"foo":"bar"},{"foo":"foo"}]');
    });
  });

  describe('deallocateObject', () => {
    it('should return false if no or bad object is provided', () => {
      const pool = new ObjectPool(Obj, 10);

      // @ts-expect-error
      expect(pool.deallocateObject(null)).toBe(false);
      // @ts-expect-error
      expect(pool.deallocateObject({ foo: 'foo' })).toBe(false);
    });
  });
});
