import { SizedLinkedList, LinkedList } from '../src';

describe('SizedLinkedList instance', () => {
  describe('size', () => {
    it('should have a size property', () => {
      expect(new SizedLinkedList()).toHaveProperty('size', 0);
      expect(new SizedLinkedList(['foo', 'bar', 2])).toHaveProperty('size', 3);
      expect(new SizedLinkedList(undefined, {})).toHaveProperty('size', 0);
    });
  });

  describe('pop()', () => {
    let list: SizedLinkedList<number>;
    let pop: jest.SpyInstance;

    beforeEach(() => {
      pop = jest.spyOn(LinkedList.prototype, 'pop').mockReturnValue(0);
      list = new SizedLinkedList([3, 5, 7, 9]);
    });

    it('should call the super class pop and update the size', () => {
      expect(list.size).toBe(4);
      expect(list.pop()).toBe(0);
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
    let list: SizedLinkedList<number>;
    let shift: jest.SpyInstance;

    beforeEach(() => {
      shift = jest.spyOn(LinkedList.prototype, 'shift').mockReturnValue(0);
      list = new SizedLinkedList([3, 5, 7, 9]);
    });

    it('should call the super class shift and update the size', () => {
      expect(list.size).toBe(4);
      expect(list.shift()).toBe(0);
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

  describe('insertNode()', () => {
    let list: SizedLinkedList<number>;
    let insertNode: jest.SpyInstance;

    beforeEach(() => {
      insertNode = jest.spyOn(LinkedList.prototype, 'insertNode').mockReturnThis();
      list = new SizedLinkedList([3, 5, 7, 9]);
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
    let list: SizedLinkedList<number>;
    let addNode: jest.SpyInstance;

    beforeEach(() => {
      addNode = jest.spyOn(LinkedList.prototype, 'addNode').mockReturnThis();
      list = new SizedLinkedList([3, 5, 7, 9]);
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

  describe('deleteNode()', () => {
    let list: SizedLinkedList<number>;
    let deleteNode: jest.SpyInstance;

    beforeEach(() => {
      deleteNode = jest.spyOn(LinkedList.prototype, 'deleteNode');
      list = new SizedLinkedList([3, 5, 7, 9]);
    });

    it('should call the super class deleteNode and update the size', () => {
      // @ts-expect-error
      const node = list._head;

      deleteNode.mockReturnValue(true);
      expect(list.size).toBe(4);
      expect(list.deleteNode(node)).toBe(true);
      expect(list.size).toBe(3);
      expect(deleteNode).toHaveBeenCalledTimes(1);
      expect(deleteNode).toHaveBeenCalledWith(node);
    });

    it('should call the super class deleteNode and maintain same size if delete failed', () => {
      const node = { body: 17 };

      deleteNode.mockReturnValue(false);
      expect(list.size).toBe(4);
      expect(list.deleteNode(node)).toBe(false);
      expect(list.size).toBe(4);
      expect(deleteNode).toHaveBeenCalledTimes(1);
      expect(deleteNode).toHaveBeenCalledWith(node);
    });
  });

  describe('clear()', () => {
    let list: SizedLinkedList<number>;

    beforeEach(() => {
      list = new SizedLinkedList([3, 5, 7, 9]);
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
    const list = new SizedLinkedList<number | null>([3, 6, 9]);

    it('should show a string representation of the data structure', () => {
      expect(`${list}`).toEqual('[object Number(3)]');
      list.insert(null);
      expect(`${list}`).toEqual('[object unknown(4)]');
      list.clear();
      expect(`${list}`).toEqual('[object Empty]');
    });
  });

  describe('map()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new SizedLinkedList(arr);

    it('should respect the standard Array map signature', () => {
      const foo = { my: 'foobar' };
      let i = 0;

      expect(
        list.map(function each(item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
          return idx * 10;
        })
      ).toEqual([0, 10, 20]);
      expect(i).toEqual(3);

      i = 0;
      expect(
        list.map(function each(item, idx, l) {
          expect(this).toBe(foo);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
          return idx * 10;
        }, foo)
      ).toEqual([0, 10, 20]);
      expect(i).toEqual(3);
    });
  });

  describe('reverseMap()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new SizedLinkedList(arr);

    it('should respect the standard Array map signature but iterate in reverse', () => {
      const foo = { my: 'foobar' };
      let i = 2;

      expect(
        list.reverseMap(function each(item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i--]);
          expect(l).toBe(list);
          return idx * 10;
        })
      ).toEqual([20, 10, 0]);
      expect(i).toEqual(-1);

      i = 2;
      expect(
        list.reverseMap(function each(item, idx, l) {
          expect(this).toBe(foo);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i--]);
          expect(l).toBe(list);
          return idx * 10;
        }, foo)
      ).toEqual([20, 10, 0]);
      expect(i).toEqual(-1);
    });
  });

  describe('reduceRight()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new SizedLinkedList(arr);

    it('should respect the standard Array reduce signature but iterate in reverse', () => {
      const foo = { my: 'foobar' };
      let i = 2;

      expect(
        list.reduceRight(function each(acc, item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i--]);
          expect(l).toBe(list);
          return acc + 1;
        }, 0)
      ).toEqual(3);
      expect(i).toEqual(-1);

      i = 2;
      expect(
        list.reduceRight(
          function each(acc, item, idx, l) {
            expect(this).toBe(foo);
            expect(i).toEqual(idx);
            expect(item).toBe(arr[i--]);
            expect(l).toBe(list);
            return acc;
          },
          0,
          foo
        )
      ).toEqual(0);
      expect(i).toEqual(-1);
    });
  });

  describe('findRight()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new SizedLinkedList(arr);

    it('should respect the standard Array find signature but iterate in reverse', () => {
      const foo = { my: 'foobar' };
      let i = 2;

      expect(
        list.findRight(function each(item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i--]);
          expect(l).toBe(list);
          return false;
        })
      ).toEqual(undefined);
      expect(i).toEqual(-1);

      i = 2;
      expect(
        list.findRight(function each(item, idx, l) {
          expect(this).toBe(foo);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i--]);
          expect(l).toBe(list);
          return item === 'bar';
        }, foo)
      ).toEqual('bar');
      expect(i).toEqual(0);
    });
  });

  describe('concatUnsafe()', () => {
    let list = new SizedLinkedList(['foo', 'bar', 'baz']);
    let list2 = new SizedLinkedList(['eggs', 'spam']);

    beforeEach(() => {
      list = new SizedLinkedList(['foo', 'bar', 'baz']);
      list2 = new SizedLinkedList(['eggs', 'spam']);
    });

    it('should append the second list directly to the tail of the first', () => {
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list);
      expect(r.size).toBe(5);
      expect(list.tail).toBe(list2.tail);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz', 'eggs', 'spam']);
      expect(list2.toArray()).toEqual(['eggs', 'spam']);
    });
  });

  describe('toArray()', () => {
    const list = new SizedLinkedList(['foo', 'bar', 'baz']);

    it('should return an array representation of the list', () => {
      expect(list.toArray().constructor).toBe([].constructor);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      list.cycle();
      expect(list.toArray()).toEqual(['baz', 'foo', 'bar']);
      list.clear();
      expect(list.toArray()).toEqual([]);
    });
  });

  describe('toArraySlice()', () => {
    let list = new SizedLinkedList(['foo', 'bar', 'baz']);

    beforeEach(() => {
      list = new SizedLinkedList(['foo', 'bar', 'baz']);
    });

    it('should create a new slice of the original list', () => {
      let slice = list.toArraySlice();

      expect(list.toArray()).toEqual(slice);
      slice = list.toArraySlice(1, 1);
      expect(slice).toEqual([]);
      slice = list.toArraySlice(0, 1);
      expect(slice).toEqual(['foo']);
      slice = list.toArraySlice(1);
      expect(slice).toEqual(['bar', 'baz']);
      slice = list.toArraySlice(-1);
      expect(slice).toEqual(['baz']);
      slice = list.toArraySlice(-1, -1);
      expect(slice).toEqual([]);
      slice = list.toArraySlice(-2, -1);
      expect(slice).toEqual(['bar']);
      slice = list.toArraySlice(0, -1);
      expect(slice).toEqual(['foo', 'bar']);
      slice = list.toArraySlice(-10, 10);
      expect(slice).toEqual(['foo', 'bar', 'baz']);
      slice = list.toArraySlice(0, -10);
      expect(slice).toEqual([]);
    });
  });

  describe('slice()', () => {
    let list = new SizedLinkedList(['foo', 'bar', 'baz']);
    let slice: jest.SpyInstance;

    beforeEach(() => {
      list = new SizedLinkedList(['foo', 'bar', 'baz']);
      slice = jest.spyOn(LinkedList.prototype, 'slice');
    });

    it('should call super.slice accounting for negative values', () => {
      let next = list.slice();

      expect(slice).toHaveBeenCalledTimes(1);
      expect(slice).toHaveBeenCalledWith(0, 3);
      expect(next).not.toBe(list);
      expect(next.toArray()).toEqual(list.toArray());
      expect(list.size).toBe(next.size);
      slice.mockClear();
      next = list.slice(1, 2);
      expect(slice).toHaveBeenCalledTimes(1);
      expect(slice).toHaveBeenCalledWith(1, 2);
      expect(next.size).toBe(1);
      slice.mockClear();
      next = list.slice(-1);
      expect(slice).toHaveBeenCalledTimes(1);
      expect(slice).toHaveBeenCalledWith(2, 3);
      expect(next.size).toBe(1);
      slice.mockClear();
      next = list.slice(0, -1);
      expect(slice).toHaveBeenCalledTimes(1);
      expect(slice).toHaveBeenCalledWith(0, 2);
      expect(next.size).toBe(2);
      slice.mockClear();
      next = list.slice(-10);
      expect(slice).toHaveBeenCalledTimes(1);
      expect(slice).toHaveBeenCalledWith(0, 3);
      expect(next.size).toBe(3);
      slice.mockClear();
      next = list.slice(0, -10);
      expect(slice).toHaveBeenCalledTimes(1);
      expect(slice).toHaveBeenCalledWith(0, 0);
      expect(next.size).toBe(0);
    });
  });
});
