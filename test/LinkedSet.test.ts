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
    let add: jest.SpyInstance;

    beforeEach(() => {
      add = jest.spyOn(LinkedList.prototype, 'add');
      list = new LinkedSet([3, 5, 7, 9, a]);
      add.mockClear();
      add.mockReturnThis();
    });

    it('should call the super class add method when set does not contain item', () => {
      expect(add).not.toHaveBeenCalled();
      expect(list.add(0)).toBe(list);
      expect(add).toHaveBeenCalledTimes(1);
      expect(add).toHaveBeenCalledWith(0);
      expect(list.add({ foo: 'bar' })).toBe(list);
      expect(add).toHaveBeenCalledTimes(2);
      expect(add).toHaveBeenCalledWith({ foo: 'bar' });
    });
    it('should not do anything if the set already contains the element', () => {
      expect(add).not.toHaveBeenCalled();
      expect(list.add(3)).toBe(list);
      expect(add).not.toHaveBeenCalled();
      expect(list.add(a)).toBe(list);
      expect(add).not.toHaveBeenCalled();
    });
  });

  describe('insert()', () => {
    const a = { foo: 'bar' };
    let list: LinkedSet<number | typeof a>;
    let insert: jest.SpyInstance;

    beforeEach(() => {
      insert = jest.spyOn(LinkedList.prototype, 'insert');
      list = new LinkedSet([3, 5, 7, 9, a]);
    });

    it('should call the super class insert method when set does not contain item', () => {
      expect(list.size).toBe(5);
      expect(list.head).toBe(3);
      expect(list.insert(0)).toBe(list);
      expect(insert).toHaveBeenCalledTimes(1);
      expect(insert).toHaveBeenCalledWith(0);
      expect(list.head).toBe(0);
      expect(list.insert({ foo: 'bar' })).toBe(list);
      expect(insert).toHaveBeenCalledTimes(2);
      expect(insert).toHaveBeenCalledWith({ foo: 'bar' });
      expect(list.head).not.toBe(a);
      expect(list.head).toEqual({ foo: 'bar' });
      expect(list.size).toBe(7);
    });
    it('should not do anything if the set already contains the element', () => {
      expect(list.size).toBe(5);
      expect(list.head).toBe(3);
      expect(list.insert(3)).toBe(list);
      expect(insert).not.toHaveBeenCalled();
      expect(list.head).toBe(3);
      expect(list.insert(a)).toBe(list);
      expect(insert).not.toHaveBeenCalled();
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

  describe('insertNode()', () => {
    let list: LinkedSet<number>;
    let insertNode: jest.SpyInstance;

    beforeEach(() => {
      insertNode = jest.spyOn(LinkedList.prototype, 'insertNode').mockReturnThis();
      list = new LinkedSet([3, 5, 7, 9]);
    });

    it('should call the super class insertNode and update the size', () => {
      // @ts-expect-error
      const node = { body: 17, tail: list._head };

      expect(list.size).toBe(4);
      expect(list.insertNode(node)).toBe(list);
      expect(list.size).toBe(5);
      expect(insertNode).toHaveBeenCalledTimes(1);
      expect(insertNode).toHaveBeenCalledWith(node);
    });
  });

  describe('addNode()', () => {
    let list: LinkedSet<number>;
    let addNode: jest.SpyInstance;

    beforeEach(() => {
      addNode = jest.spyOn(LinkedList.prototype, 'addNode').mockReturnThis();
      list = new LinkedSet([3, 5, 7, 9]);
    });

    it('should call the super class addNode and update the size', () => {
      // @ts-expect-error
      const node = { body: 17, head: list._tail };

      expect(list.size).toBe(4);
      expect(list.addNode(node)).toBe(list);
      expect(list.size).toBe(5);
      expect(addNode).toHaveBeenCalledTimes(5); // 1 + 4 from constructor
      expect(addNode).toHaveBeenCalledWith(node);
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
});
