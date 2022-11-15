import { SizedLinkedList, LinkedList, LinkedCollection, LinkedSet } from '../src';

let count = 0;

class Obj {
  constructor(readonly id = count++) {}
}

describe('new LinkedCollection()', () => {
  it('should only allow elements with unique keys', () => {
    const a = new Obj(0);

    expect(new LinkedCollection('id', [a, a, a]).toArray()).toEqual([a]);
    expect(
      new LinkedCollection('k', [
        { k: 'foo', m: 1 },
        { k: 'bar', m: 3 },
        { k: 'foo', m: 2 },
      ]).toArray()
    ).toEqual([
      { k: 'foo', m: 1 },
      { k: 'bar', m: 3 },
    ]);
  });
});

describe('LinkedCollection instance', () => {
  beforeEach(() => {
    count = 0;
  });

  describe('size', () => {
    it('should have a size property', () => {
      expect(new LinkedCollection('id')).toHaveProperty('size', 0);
      expect(new LinkedCollection('id', [{ id: 'foo' }, { id: 'bar' }])).toHaveProperty('size', 2);
      expect(
        new LinkedCollection('id', [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }, { id: 2 }])
      ).toHaveProperty('size', 3);
    });
  });

  describe('select()', () => {
    const list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);

    it('should retrieve a collection item by key', () => {
      expect(list.select(7)).toEqual({ id: 7 });
      expect(list.select(3)).toEqual({ id: 3 });
    });
    it('should return undefined when collection does not contain key', () => {
      expect(list.select(-1)).toBeUndefined();
      expect(list.select(17)).toBeUndefined();
    });
  });

  describe('default()', () => {
    const list = new LinkedCollection('id', [
      { id: 3, foo: 'baz' },
      { id: 5 },
      { id: 7, foo: 'bar' },
      { id: 9 },
    ]);

    it('should retrieve a collection item by key', () => {
      expect(list.default({ id: 7, foo: 'foo' })).toEqual({ id: 7, foo: 'bar' });
      expect(list.default({ id: 3 })).toEqual({ id: 3, foo: 'baz' });
    });

    it('should add and return the provided item if no existing entry', () => {
      expect(list.default({ id: 10, foo: 'foobar' })).toEqual({ id: 10, foo: 'foobar' });
      expect(list.select(10)).toEqual({ id: 10, foo: 'foobar' });
      expect(list.default({ id: 10, foo: 'baz' })).toEqual({ id: 10, foo: 'foobar' });
      expect(list.select(10)).toEqual({ id: 10, foo: 'foobar' });
    });
  });

  describe('keys()', () => {
    const list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);

    it('should iterate through the collection keys', () => {
      const keys = [] as number[];

      for (const k of list.keys()) {
        keys.push(k);
      }

      expect(keys).toEqual([3, 5, 7, 9]);
      expect([...list.keys()]).toEqual(keys);
    });
  });

  describe('values()', () => {
    const list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);

    it('should iterate through the collection keys', () => {
      const values = [] as Obj[];

      for (const e of list.values()) {
        values.push(e);
      }

      expect(values).toEqual([{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);
      expect([...list.values()]).toEqual(values);
    });
  });

  describe('entries()', () => {
    const list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);

    it('should iterate through the collection keys', () => {
      const entries = [] as [number, Obj][];

      for (const [k, v] of list.entries()) {
        entries.push([k, v]);
      }

      expect(entries).toEqual([
        [3, { id: 3 }],
        [5, { id: 5 }],
        [7, { id: 7 }],
        [9, { id: 9 }],
      ]);
      expect([...list.entries()]).toEqual(entries);
    });
  });

  describe('pop()', () => {
    let list: LinkedCollection<'id', Obj>;
    let pop: jest.SpyInstance;

    beforeEach(() => {
      pop = jest.spyOn(LinkedList.prototype, 'pop');
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);
    });

    it('should call the super class pop and update the size', () => {
      expect(list.size).toBe(4);
      expect(list.pop()).toEqual({ id: 9 });
      expect(list.size).toBe(3);
      expect(pop).toHaveBeenCalledTimes(1);
    });
    it('should do nothing if list is empty', () => {
      list.clear();
      expect(list.size).toBe(0);
      expect(list.pop()).toBeUndefined();
      expect(list.size).toBe(0);
      expect(pop).not.toHaveBeenCalled();
    });
  });

  describe('shift()', () => {
    let list: LinkedCollection<'id', Obj>;
    let shift: jest.SpyInstance;

    beforeEach(() => {
      shift = jest.spyOn(LinkedList.prototype, 'shift');
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);
    });

    it('should call the super class shift and update the size', () => {
      expect(list.size).toBe(4);
      expect(list.shift()).toEqual({ id: 3 });
      expect(list.size).toBe(3);
      expect(shift).toHaveBeenCalledTimes(1);
    });
    it('should do nothing if list is empty', () => {
      list.clear();
      expect(list.size).toBe(0);
      expect(list.shift()).toBeUndefined();
      expect(list.size).toBe(0);
      expect(shift).not.toHaveBeenCalled();
    });
  });

  describe('has()', () => {
    const a = new Obj(0);
    let list: LinkedCollection<'id', Obj>;

    beforeEach(() => {
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }, a]);
    });

    it('should return true if the set has the element', () => {
      expect(list.has(7)).toBe(true);
      expect(list.has(a.id)).toBe(true);
    });
    it('should return false if the set does not have the element', () => {
      // @ts-expect-error
      expect(list.has('5')).toBe(false);
      expect(list.has(1)).toBe(false);
    });
  });

  describe('add()', () => {
    const a = new Obj(0);
    let list: LinkedCollection<'id', Obj>;
    let addNode: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }, a]);
      addNode = jest.spyOn(list, 'addNode');
    });

    it('should call the super class add method when set does not contain item', () => {
      expect(list.size).toBe(5);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.tail).toEqual(a);
      expect(list.add({ id: -1 })).toBe(list);
      expect(list.tail).toEqual({ id: -1 });
      expect(addNode).toHaveBeenCalledTimes(1);
      expect(addNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: -1 } }));
      expect(list.tail).toEqual({ id: -1 });
      expect(list.add({ id: 17 })).toBe(list);
      expect(list.tail).toEqual({ id: 17 });
      expect(addNode).toHaveBeenCalledTimes(2);
      expect(addNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: 17 } }));
      expect(list.tail).toEqual({ id: 17 });
      expect(list.size).toBe(7);
    });

    it('should not do anything if the set already contains the element', () => {
      expect(list.size).toBe(5);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.tail).toEqual(a);
      expect(list.add({ id: 3 })).toBe(list);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.tail).toEqual(a);
      expect(list.add(a)).toBe(list);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.tail).toEqual(a);
      expect(list.size).toBe(5);
    });
  });

  describe('insert()', () => {
    const a = new Obj(0);
    let list: LinkedCollection<'id', Obj>;
    let insertNode: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }, a]);
      insertNode = jest.spyOn(list, 'insertNode');
    });

    it('should call the super class insert method when set does not contain item', () => {
      expect(list.size).toBe(5);
      expect(list.head).toEqual({ id: 3 });
      expect(list.insert({ id: 17 })).toBe(list);
      expect(insertNode).toHaveBeenCalledTimes(1);
      expect(insertNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: 17 } }));
      expect(list.head).toEqual({ id: 17 });
      expect(list.insert({ id: -1 })).toBe(list);
      expect(insertNode).toHaveBeenCalledTimes(2);
      expect(insertNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: -1 } }));
      expect(list.head).toEqual({ id: -1 });
      expect(list.size).toBe(7);
    });
    it('should not do anything if the set already contains the element', () => {
      expect(list.size).toBe(5);
      expect(list.head).toEqual({ id: 3 });
      expect(list.insert({ id: 3 })).toBe(list);
      expect(insertNode).not.toHaveBeenCalled();
      expect(list.head).toEqual({ id: 3 });
      expect(list.insert(a)).toBe(list);
      expect(insertNode).not.toHaveBeenCalled();
      expect(list.head).toEqual({ id: 3 });
      expect(list.size).toBe(5);
    });
  });

  describe('update()', () => {
    const a = new Obj(0);
    const foo = new Obj(17);
    let list: LinkedCollection<'id', Obj & { data?: any }>;
    let addNode: jest.SpyInstance;
    let resolve: jest.Func;

    beforeEach(() => {
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }, a]);
      addNode = jest.spyOn(list, 'addNode');
      resolve = jest.fn(() => foo);
    });

    it('should return undefined if item doesnt exist', () => {
      expect(list.update(17, { data: 'data' })).toBeUndefined();
      expect(list.update(17, { data: 'data' }, resolve)).toBeUndefined();
      expect(list.update({ id: 17, data: 'data' })).toBeUndefined();
      expect(list.update({ id: 17, data: 'data' }, resolve)).toBeUndefined();
      expect(resolve).not.toHaveBeenCalled();
    });

    it('should return the updated item when it exists', () => {
      expect(list.update(5, { data: 'foo' })).toEqual({ id: 5, data: 'foo' });
      expect(list.select(5)).toEqual({ id: 5, data: 'foo' });
      expect(list.update({ id: 5, data: 17 })).toEqual({ id: 5, data: 17 });
      expect(list.select(5)).toEqual({ id: 5, data: 17 });
      expect(resolve).not.toHaveBeenCalled();
      expect(list.update(5, { data: 'foo' }, resolve)).toBe(foo);
      expect(list.select(5)).toBe(foo);
      expect(resolve).toHaveBeenCalledTimes(1);
      expect(resolve).toHaveBeenCalledWith({ id: 5, data: 17 }, { data: 'foo' });
      expect(list.update({ id: 9, data: 'foo' }, resolve)).toBe(foo);
      expect(list.select(9)).toBe(foo);
      expect(resolve).toHaveBeenCalledTimes(2);
      expect(resolve).toHaveBeenCalledWith({ id: 9 }, { id: 9, data: 'foo' });
    });
  });

  describe('apsert()', () => {
    const a = new Obj(0);
    const foo = new Obj(17);
    let list: LinkedCollection<'id', Obj & { data?: any }>;
    let addNode: jest.SpyInstance;
    let resolve: jest.Func;

    beforeEach(() => {
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }, a]);
      addNode = jest.spyOn(list, 'addNode');
      resolve = jest.fn(() => foo);
    });

    it('should append new elements', () => {
      expect(list.size).toBe(5);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.tail).toEqual(a);
      expect(list.apsert({ id: -1 }, resolve)).toBe(list);
      expect(resolve).not.toHaveBeenCalled();
      expect(addNode).toHaveBeenCalledTimes(1);
      expect(addNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: -1 } }));
      expect(list.tail).toEqual({ id: -1 });
      expect(list.apsert({ id: 17 })).toBe(list);
      expect(addNode).toHaveBeenCalledTimes(2);
      expect(addNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: 17 } }));
      expect(list.tail).toEqual({ id: 17 });
      expect(list.size).toBe(7);
    });

    it('should update existing elements', () => {
      expect(list.size).toBe(5);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.tail).toBe(a);
      expect(list.apsert({ ...a, data: 'bar' })).toBe(list);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.tail).not.toBe(a);
      expect(list.tail).not.toEqual(a);
      expect(list.tail).toEqual({ id: a.id, data: 'bar' });
      expect(list.apsert({ id: 5, data: 'foo' })).toBe(list);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.select(5)).toHaveProperty('data', 'foo');
      expect(list.size).toBe(5);
    });

    it('should update existing element with specified resolve fn', () => {
      expect(resolve).not.toHaveBeenCalled();
      expect(list.apsert({ ...a, data: 'bar' }, resolve)).toBe(list);
      expect(addNode).not.toHaveBeenCalled();
      expect(resolve).toHaveBeenCalledWith(a, { ...a, data: 'bar' });
      expect(list.tail).toBe(foo);
    });
  });

  describe('upsert()', () => {
    const a = new Obj(0);
    const foo = new Obj(17);
    let list: LinkedCollection<'id', Obj & { data?: any }>;
    let insertNode: jest.SpyInstance;
    let resolve: jest.Func;

    beforeEach(() => {
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }, a]);
      insertNode = jest.spyOn(list, 'insertNode');
      resolve = jest.fn(() => foo);
    });

    it('should append new elements', () => {
      expect(list.size).toBe(5);
      expect(insertNode).not.toHaveBeenCalled();
      expect(list.head).toEqual({ id: 3 });
      expect(list.upsert({ id: -1 }, resolve)).toBe(list);
      expect(resolve).not.toHaveBeenCalled();
      expect(insertNode).toHaveBeenCalledTimes(1);
      expect(insertNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: -1 } }));
      expect(list.head).toEqual({ id: -1 });
      expect(list.upsert({ id: 17 })).toBe(list);
      expect(insertNode).toHaveBeenCalledTimes(2);
      expect(insertNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: 17 } }));
      expect(list.head).toEqual({ id: 17 });
      expect(list.size).toBe(7);
    });

    it('should update existing elements', () => {
      expect(list.size).toBe(5);
      expect(insertNode).not.toHaveBeenCalled();
      expect(list.tail).toBe(a);
      expect(list.upsert({ ...a, data: 'bar' })).toBe(list);
      expect(insertNode).not.toHaveBeenCalled();
      expect(list.tail).not.toBe(a);
      expect(list.tail).not.toEqual(a);
      expect(list.tail).toEqual({ id: a.id, data: 'bar' });
      expect(list.upsert({ id: 5, data: 'foo' })).toBe(list);
      expect(insertNode).not.toHaveBeenCalled();
      // expect(list.get(5)).toHaveProperty('data', 'foo');
      expect(list.size).toBe(5);
    });

    it('should update existing element with specified resolve fn', () => {
      expect(resolve).not.toHaveBeenCalled();
      expect(list.upsert({ ...a, data: 'bar' }, resolve)).toBe(list);
      expect(insertNode).not.toHaveBeenCalled();
      expect(resolve).toHaveBeenCalledWith(a, { ...a, data: 'bar' });
      expect(list.tail).toBe(foo);
    });
  });

  describe('delete()', () => {
    const a = new Obj(0);
    let list: LinkedCollection<'id', Obj>;
    let deleteNode: jest.SpyInstance;

    beforeEach(() => {
      deleteNode = jest.spyOn(LinkedList.prototype, 'deleteNode');
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }, a]);
    });

    it('should return true when item exists', () => {
      deleteNode.mockReturnValue(true);
      expect(list.size).toBe(5);
      expect(list.delete(5)).toBe(true);
      expect(deleteNode).toHaveBeenCalledTimes(1);
      expect(deleteNode).toHaveBeenCalledWith(expect.objectContaining({ body: { id: 5 } }));
      expect(list.size).toBe(4);
      expect(list.delete(a.id)).toBe(true);
      expect(deleteNode).toHaveBeenCalledTimes(2);
      expect(deleteNode).toHaveBeenCalledWith(expect.objectContaining({ body: a }));
      expect(list.size).toBe(3);
    });
    it('should not do anything if the set does not contain item', () => {
      deleteNode.mockReturnValue(false);
      expect(list.size).toBe(5);
      expect(list.delete(-1)).toBe(false);
      expect(deleteNode).toHaveBeenCalledTimes(1);
      expect(deleteNode).toHaveBeenCalledWith(undefined);
      expect(list.size).toBe(5);
      expect(list.delete(1)).toBe(false);
      expect(deleteNode).toHaveBeenCalledTimes(2);
      expect(deleteNode).toHaveBeenCalledWith(undefined);
      expect(list.size).toBe(5);
    });
  });

  describe('clear()', () => {
    let list: LinkedCollection<'id', Obj>;

    beforeEach(() => {
      list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);
    });

    it('should completely set the size to 0', () => {
      expect(list.size).toBe(4);
      expect(list.head).toEqual({ id: 3 });
      expect(list.tail).toEqual({ id: 9 });
      list.clear();
      expect(list.head).toBeUndefined();
      expect(list.tail).toBeUndefined();
      expect(list.size).toBe(0);
    });
  });

  describe('toString()', () => {
    const list = new LinkedCollection('id', [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 9 }]);

    it('should show a string representation of the data structure', () => {
      expect(`${list}`).toEqual('[object Object(4)]');
      list.clear();
      expect(`${list}`).toEqual('[object Empty]');
    });
  });

  describe('map()', () => {
    interface I {
      x: string;
    }
    let list: LinkedCollection<'x', I>;
    let map: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      map = jest.spyOn(SizedLinkedList.prototype, 'map');
    });

    it('should call SizedLinkedList.prototype.map', () => {
      const foo = { my: 'foobar' };
      const arrow = (_: I, i: number) => i * 10;

      expect(list.map(arrow)).toEqual([0, 10, 20]);
      expect(map).toHaveBeenCalledTimes(1);
      expect(map).toHaveBeenCalledWith(arrow, list);
      expect(list.map(arrow, foo)).toEqual([0, 10, 20]);
      expect(map).toHaveBeenCalledTimes(2);
      expect(map).toHaveBeenCalledWith(arrow, foo);
    });
  });

  describe('reverseMap()', () => {
    interface I {
      x: string;
    }
    let list: LinkedCollection<'x', I>;
    let reverseMap: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      reverseMap = jest.spyOn(SizedLinkedList.prototype, 'reverseMap');
    });

    it('should call SizedLinkedList.prototype.reverseMap', () => {
      const foo = { my: 'foobar' };
      const arrow = (_: I, i: number) => i * 10;

      expect(list.reverseMap(arrow)).toEqual([20, 10, 0]);
      expect(reverseMap).toHaveBeenCalledTimes(1);
      expect(reverseMap).toHaveBeenCalledWith(arrow, list);
      expect(list.reverseMap(arrow, foo)).toEqual([20, 10, 0]);
      expect(reverseMap).toHaveBeenCalledTimes(2);
      expect(reverseMap).toHaveBeenCalledWith(arrow, foo);
    });
  });

  describe('reduceRight()', () => {
    let list: LinkedCollection<'x', { x: string }>;
    let reduceRight: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      reduceRight = jest.spyOn(SizedLinkedList.prototype, 'reduceRight');
    });

    it('should call SizedLinkedList.prototype.reduceRight', () => {
      const foo = { my: 'foobar' };
      const arrow = (sum: number) => sum + 1;

      expect(list.reduceRight(arrow, 0)).toEqual(3);
      expect(reduceRight).toHaveBeenCalledTimes(1);
      expect(reduceRight).toHaveBeenCalledWith(arrow, 0, list);
      expect(list.reduceRight(arrow, 0, foo)).toEqual(3);
      expect(reduceRight).toHaveBeenCalledTimes(2);
      expect(reduceRight).toHaveBeenCalledWith(arrow, 0, foo);
    });
  });

  describe('findRight()', () => {
    interface I {
      x: string;
    }
    let list: LinkedCollection<'x', I>;
    let findRight: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      findRight = jest.spyOn(SizedLinkedList.prototype, 'findRight');
    });

    it('should call SizedLinkedList.prototype.findRight', () => {
      const foo = { my: 'foobar' };
      const arrow = (e: I) => e.x.startsWith('b');

      expect(list.findRight(arrow)).toEqual({ x: 'baz' });
      expect(findRight).toHaveBeenCalledTimes(1);
      expect(findRight).toHaveBeenCalledWith(arrow, list);
      expect(list.findRight(arrow, foo)).toEqual({ x: 'baz' });
      expect(findRight).toHaveBeenCalledTimes(2);
      expect(findRight).toHaveBeenCalledWith(arrow, foo);
    });
  });

  describe('groupBy()', () => {
    interface I {
      x: string;
      cat: number;
    }
    let list: LinkedCollection<'x', I>;

    beforeEach(() => {
      list = new LinkedCollection('x', [
        { x: 'a', cat: 3 },
        { x: 'b', cat: -1 },
        { x: 'c', cat: -1 },
        { x: 'd', cat: 17 },
        { x: 'e', cat: 3 },
      ]);
    });

    it('should return item arrays grouped by the specified key', () => {
      expect(list.groupBy('cat')).toEqual({
        '3': [
          { x: 'a', cat: 3 },
          { x: 'e', cat: 3 },
        ],
        '-1': [
          { x: 'b', cat: -1 },
          { x: 'c', cat: -1 },
        ],
        '17': [{ x: 'd', cat: 17 }],
      });
    });

    it('should return an key -> item plain object map when the supplied key is the collection key', () => {
      expect(list.groupBy('x')).toEqual({
        a: { x: 'a', cat: 3 },
        b: { x: 'b', cat: -1 },
        c: { x: 'c', cat: -1 },
        d: { x: 'd', cat: 17 },
        e: { x: 'e', cat: 3 },
      });
    });
  });

  describe('toArray()', () => {
    interface I {
      x: string;
    }
    let list: LinkedCollection<'x', I>;
    let toArray: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      toArray = jest.spyOn(SizedLinkedList.prototype, 'toArray');
    });

    it('should call SizedLinkedList.prototype.toArray', () => {
      expect(list.toArray()).toEqual([{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      expect(toArray).toHaveBeenCalledTimes(1);
      expect(toArray).toHaveBeenCalledWith();
    });
  });

  describe('concatUnsafe()', () => {
    interface I {
      x: string;
    }
    let list: LinkedCollection<'x', I>;
    let list2: LinkedCollection<'x', I>;
    let add: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      list2 = new LinkedCollection('x', [{ x: 'spam' }, { x: 'bar' }, { x: 'eggs' }]);
      add = jest.spyOn(list, 'add');
    });

    it('should append the second list directly to the tail of the first', () => {
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list);
      expect(list2.tail).toBe(r.tail);
      expect(r.size).toBe(5);
      expect(add).toHaveBeenCalledTimes(3);
      expect(add).toHaveBeenCalledWith({ x: 'eggs' });
      expect(add).toHaveBeenCalledWith({ x: 'bar' });
      expect(add).toHaveBeenCalledWith({ x: 'eggs' });
      expect(r.toArray()).toEqual([
        { x: 'foo' },
        { x: 'bar' },
        { x: 'baz' },
        { x: 'spam' },
        { x: 'eggs' },
      ]);
      expect(list2.toArray()).toEqual([{ x: 'spam' }, { x: 'bar' }, { x: 'eggs' }]);
    });

    it('should return the second list if the first is empty', () => {
      list.clear();
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list2);
      expect(r).not.toBe(list);
      expect(add).not.toHaveBeenCalled();
      expect(r.toArray()).toEqual([{ x: 'spam' }, { x: 'bar' }, { x: 'eggs' }]);
      expect(list.toArray()).toEqual([]);
    });
  });

  describe('toArraySlice()', () => {
    interface I {
      x: string;
    }
    let list: LinkedCollection<'x', I>;
    let toArraySlice: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      toArraySlice = jest.spyOn(SizedLinkedList.prototype, 'toArraySlice');
    });

    it('should call SizedLinkedList.prototype.toArraySlice', () => {
      expect(list.toArraySlice()).toEqual([{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      expect(toArraySlice).toHaveBeenCalledTimes(1);
      expect(toArraySlice).toHaveBeenCalledWith(undefined, undefined);
      expect(list.toArraySlice(1)).toEqual([{ x: 'bar' }, { x: 'baz' }]);
      expect(toArraySlice).toHaveBeenCalledTimes(2);
      expect(toArraySlice).toHaveBeenCalledWith(1, undefined);
      expect(list.toArraySlice(0, -1)).toEqual([{ x: 'foo' }, { x: 'bar' }]);
      expect(toArraySlice).toHaveBeenCalledTimes(3);
      expect(toArraySlice).toHaveBeenCalledWith(0, -1);
      expect(list.toArraySlice(undefined, -10)).toEqual([]);
      expect(toArraySlice).toHaveBeenCalledTimes(4);
      expect(toArraySlice).toHaveBeenCalledWith(undefined, -10);
    });
  });

  describe('slice()', () => {
    interface I {
      x: string;
    }
    let list: LinkedCollection<'x', I>;
    let slice: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }, { x: 'baz' }]);
      slice = jest.spyOn(SizedLinkedList.prototype, 'slice');
    });

    it('should call SizedLinkedList.prototype.slice', () => {
      expect(list.slice()).toEqual(list);
      expect(list.slice()).not.toBe(list);
      expect(slice).toHaveBeenCalledTimes(2);
      expect(slice).toHaveBeenCalledWith(undefined, undefined);
      expect(list.slice(1).size).toEqual(2);
      expect(slice).toHaveBeenCalledTimes(3);
      expect(slice).toHaveBeenCalledWith(1, undefined);
      expect(list.slice(0, -1).size).toEqual(2);
      expect(slice).toHaveBeenCalledTimes(4);
      expect(slice).toHaveBeenCalledWith(0, -1);
      expect(list.slice(undefined, -10).size).toEqual(0);
      expect(slice).toHaveBeenCalledTimes(5);
      expect(slice).toHaveBeenCalledWith(undefined, -10);
    });
  });

  describe('new()', () => {
    it('should return a new empty collection of the same type', () => {
      const list = new LinkedCollection('x', [{ x: 'foo' }, { x: 'bar' }]);
      let list2 = list.new();

      expect(list).not.toBe(list2);
      expect(list.toArray()).toEqual([{ x: 'foo' }, { x: 'bar' }]);
      expect(list2.toArray()).toEqual([]);
      // @ts-expect-error
      expect(list2.keyBy).toBe(list.keyBy);
      let list3 = list2.new([{ x: 'barfoo' }]);
      expect(list3).not.toBe(list2);
      expect(list2.toArray()).toEqual([]);
      expect(list3.toArray()).toEqual([{ x: 'barfoo' }]);
    });
  });
});
