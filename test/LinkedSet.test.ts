import { SizedLinkedList, LinkedList, LinkedSet } from '../src';

describe('LinkedSet', () => {
  it('should only allow unique elements', () => {
    const a = { foo: 'bar' };

    expect(new LinkedSet([a, a, a]).toArray()).toEqual([a]);
    expect(new LinkedSet([1, 2, 3, 1, 2, 3, 4]).toArray()).toEqual([1, 2, 3, 4]);
  });
});

describe('LinkedSet instance', () => {
  describe('size', () => {
    it('should have a size property', () => {
      expect(new LinkedSet()).toHaveProperty('size', 0);
      expect(new LinkedSet(['foo', 'bar'])).toHaveProperty('size', 2);
      expect(new LinkedSet([1, 2, 3, 1, 2, 3])).toHaveProperty('size', 3);
    });
  });

  describe('pop()', () => {
    let list: LinkedSet<number>;
    let pop: jest.SpyInstance;

    beforeEach(() => {
      pop = jest.spyOn(LinkedList.prototype, 'pop');
      list = new LinkedSet([3, 5, 7, 9]);
    });

    it('should call the super class pop and update the size', () => {
      expect(list.size).toBe(4);
      expect(list.pop()).toBe(9);
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
    let list: LinkedSet<number>;
    let shift: jest.SpyInstance;

    beforeEach(() => {
      shift = jest.spyOn(LinkedList.prototype, 'shift');
      list = new LinkedSet([3, 5, 7, 9]);
    });

    it('should call the super class shift and update the size', () => {
      expect(list.size).toBe(4);
      expect(list.shift()).toBe(3);
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
    const a = { foo: 'bar' };
    let list: LinkedSet<number | typeof a>;

    beforeEach(() => {
      list = new LinkedSet([3, 5, 7, 9, a]);
    });

    it('should return true if the set has the element', () => {
      expect(list.has(7)).toBe(true);
      expect(list.has(a)).toBe(true);
    });
    it('should return false if the set does not have the element', () => {
      // @ts-expect-error
      expect(list.has('5')).toBe(false);
      expect(list.has(1)).toBe(false);
      expect(list.has({ foo: 'bar' })).toBe(false);
    });
  });

  describe('add()', () => {
    const a = { foo: 'bar' };
    let list: LinkedSet<number | typeof a>;
    let addNode: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet([3, 5, 7, 9, a]);
      addNode = jest.spyOn(list, 'addNode');
    });

    it('should call the super class add method when set does not contain item', () => {
      expect(list.size).toBe(5);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.add(0)).toBe(list);
      expect(list.tail).toEqual(0);
      expect(addNode).toHaveBeenCalledTimes(1);
      expect(addNode).toHaveBeenCalledWith(expect.objectContaining({ body: 0 }));
      expect(list.add({ foo: 'bar' })).toBe(list);
      expect(list.tail).toEqual({ foo: 'bar' });
      expect(addNode).toHaveBeenCalledTimes(2);
      expect(addNode).toHaveBeenCalledWith(expect.objectContaining({ body: { foo: 'bar' } }));
      expect(list.size).toBe(7);
    });
    it('should not do anything if the set already contains the element', () => {
      expect(list.size).toBe(5);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.add(3)).toBe(list);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.add(a)).toBe(list);
      expect(addNode).not.toHaveBeenCalled();
      expect(list.size).toBe(5);
    });
  });

  describe('insert()', () => {
    const a = { foo: 'bar' };
    let list: LinkedSet<number | typeof a>;
    let insertNode: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet([3, 5, 7, 9, a]);
      insertNode = jest.spyOn(list, 'insertNode');
    });

    it('should call the super class insert method when set does not contain item', () => {
      expect(list.size).toBe(5);
      expect(list.head).toBe(3);
      expect(list.insert(0)).toBe(list);
      expect(insertNode).toHaveBeenCalledTimes(1);
      expect(insertNode).toHaveBeenCalledWith(expect.objectContaining({ body: 0 }));
      expect(list.head).toBe(0);
      expect(list.insert({ foo: 'bar' })).toBe(list);
      expect(insertNode).toHaveBeenCalledTimes(2);
      expect(insertNode).toHaveBeenCalledWith(expect.objectContaining({ body: { foo: 'bar' } }));
      expect(list.head).not.toBe(a);
      expect(list.head).toEqual({ foo: 'bar' });
      expect(list.size).toBe(7);
    });
    it('should not do anything if the set already contains the element', () => {
      expect(list.size).toBe(5);
      expect(list.head).toBe(3);
      expect(list.insert(3)).toBe(list);
      expect(insertNode).not.toHaveBeenCalled();
      expect(list.head).toBe(3);
      expect(list.insert(a)).toBe(list);
      expect(insertNode).not.toHaveBeenCalled();
      expect(list.head).toBe(3);
      expect(list.size).toBe(5);
    });
  });

  describe('delete()', () => {
    const a = { foo: 'bar' };
    let list: LinkedSet<number | typeof a>;
    let deleteNode: jest.SpyInstance;

    beforeEach(() => {
      deleteNode = jest.spyOn(LinkedList.prototype, 'deleteNode');
      list = new LinkedSet([3, 5, 7, 9, a]);
    });

    it('should return true when item exists', () => {
      deleteNode.mockReturnValue(true);
      expect(list.size).toBe(5);
      expect(list.delete(5)).toBe(true);
      expect(deleteNode).toHaveBeenCalledTimes(1);
      expect(deleteNode).toHaveBeenCalledWith(expect.objectContaining({ body: 5 }));
      expect(list.size).toBe(4);
      expect(list.delete(a)).toBe(true);
      expect(deleteNode).toHaveBeenCalledTimes(2);
      expect(deleteNode).toHaveBeenCalledWith(expect.objectContaining({ body: a }));
      expect(list.size).toBe(3);
    });
    it('should not do anything if the set does not contain item', () => {
      deleteNode.mockReturnValue(false);
      expect(list.size).toBe(5);
      expect(list.delete({ foo: 'bar' })).toBe(false);
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
    let list: LinkedSet<number>;

    beforeEach(() => {
      list = new LinkedSet([3, 5, 7, 9]);
    });

    it('should completely set the size to 0', () => {
      expect(list.size).toBe(4);
      expect(list.head).toBe(3);
      expect(list.tail).toBe(9);
      list.clear();
      expect(list.head).toBeUndefined();
      expect(list.tail).toBeUndefined();
      expect(list.size).toBe(0);
    });
  });

  describe('toString()', () => {
    const list = new LinkedSet<number | null>([3, 6, 9]);

    it('should show a string representation of the data structure', () => {
      expect(`${list}`).toEqual('[object Number(3)]');
      list.insert(null);
      expect(`${list}`).toEqual('[object unknown(4)]');
      list.clear();
      expect(`${list}`).toEqual('[object Empty]');
    });
  });

  describe('map()', () => {
    let list: LinkedSet<string>;
    let map: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
      map = jest.spyOn(SizedLinkedList.prototype, 'map');
    });

    it('should call SizedLinkedList.prototype.map', () => {
      const foo = { my: 'foobar' };
      const arrow = (_: string, i: number) => i * 10;

      expect(list.map(arrow)).toEqual([0, 10, 20]);
      expect(map).toHaveBeenCalledTimes(1);
      expect(map).toHaveBeenCalledWith(arrow, list);
      expect(list.map(arrow, foo)).toEqual([0, 10, 20]);
      expect(map).toHaveBeenCalledTimes(2);
      expect(map).toHaveBeenCalledWith(arrow, foo);
    });
  });

  describe('reverseMap()', () => {
    let list: LinkedSet<string>;
    let reverseMap: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
      reverseMap = jest.spyOn(SizedLinkedList.prototype, 'reverseMap');
    });

    it('should call SizedLinkedList.prototype.reverseMap', () => {
      const foo = { my: 'foobar' };
      const arrow = (_: string, i: number) => i * 10;

      expect(list.reverseMap(arrow)).toEqual([20, 10, 0]);
      expect(reverseMap).toHaveBeenCalledTimes(1);
      expect(reverseMap).toHaveBeenCalledWith(arrow, list);
      expect(list.reverseMap(arrow, foo)).toEqual([20, 10, 0]);
      expect(reverseMap).toHaveBeenCalledTimes(2);
      expect(reverseMap).toHaveBeenCalledWith(arrow, foo);
    });
  });

  describe('reduceRight()', () => {
    let list: LinkedSet<string>;
    let reduceRight: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
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
    let list: LinkedSet<string>;
    let findRight: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
      findRight = jest.spyOn(SizedLinkedList.prototype, 'findRight');
    });

    it('should call SizedLinkedList.prototype.findRight', () => {
      const foo = { my: 'foobar' };
      const arrow = (e: string) => e.startsWith('b');

      expect(list.findRight(arrow)).toEqual('baz');
      expect(findRight).toHaveBeenCalledTimes(1);
      expect(findRight).toHaveBeenCalledWith(arrow, list);
      expect(list.findRight(arrow, foo)).toEqual('baz');
      expect(findRight).toHaveBeenCalledTimes(2);
      expect(findRight).toHaveBeenCalledWith(arrow, foo);
    });
  });

  describe('toArray()', () => {
    let list: LinkedSet<string>;
    let toArray: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
      toArray = jest.spyOn(SizedLinkedList.prototype, 'toArray');
    });

    it('should call SizedLinkedList.prototype.toArray', () => {
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      expect(toArray).toHaveBeenCalledTimes(1);
      expect(toArray).toHaveBeenCalledWith();
    });
  });

  describe('toArraySlice()', () => {
    let list: LinkedSet<string>;
    let toArraySlice: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
      toArraySlice = jest.spyOn(SizedLinkedList.prototype, 'toArraySlice');
    });

    it('should call SizedLinkedList.prototype.toArraySlice', () => {
      expect(list.toArraySlice()).toEqual(['foo', 'bar', 'baz']);
      expect(toArraySlice).toHaveBeenCalledTimes(1);
      expect(toArraySlice).toHaveBeenCalledWith(undefined, undefined);
      expect(list.toArraySlice(1)).toEqual(['bar', 'baz']);
      expect(toArraySlice).toHaveBeenCalledTimes(2);
      expect(toArraySlice).toHaveBeenCalledWith(1, undefined);
      expect(list.toArraySlice(0, -1)).toEqual(['foo', 'bar']);
      expect(toArraySlice).toHaveBeenCalledTimes(3);
      expect(toArraySlice).toHaveBeenCalledWith(0, -1);
      expect(list.toArraySlice(undefined, -10)).toEqual([]);
      expect(toArraySlice).toHaveBeenCalledTimes(4);
      expect(toArraySlice).toHaveBeenCalledWith(undefined, -10);
    });
  });

  describe('slice()', () => {
    let list: LinkedSet<string>;
    let slice: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
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

  describe('concatUnsafe()', () => {
    let list = new LinkedSet(['foo', 'bar', 'baz']);
    let list2 = new LinkedSet(['eggs', 'spam']);
    let add: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedSet(['foo', 'bar', 'baz']);
      list2 = new LinkedSet(['eggs', 'bar', 'spam']);
      add = jest.spyOn(list, 'add');
    });

    it('should append the second list directly to the tail of the first', () => {
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list);
      expect(list2.tail).toBe(r.tail);
      expect(r.size).toBe(5);
      expect(add).toHaveBeenCalledTimes(3);
      expect(add).toHaveBeenCalledWith('eggs');
      expect(add).toHaveBeenCalledWith('bar');
      expect(add).toHaveBeenCalledWith('spam');
      expect(r.toArray()).toEqual(['foo', 'bar', 'baz', 'eggs', 'spam']);
      expect(list2.toArray()).toEqual(['eggs', 'bar', 'spam']);
    });

    it('should return the second list if the first is empty', () => {
      list.clear();
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list2);
      expect(r).not.toBe(list);
      expect(add).not.toHaveBeenCalled();
      expect(r.toArray()).toEqual(['eggs', 'bar', 'spam']);
      expect(list.toArray()).toEqual([]);
    });
  });
});
