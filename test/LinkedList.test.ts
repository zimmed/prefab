import { LinkedList } from '../src';

describe('new LinkedList()', () => {
  it('should create a new empty instance of LinkedList without args', () => {
    const list = new LinkedList();

    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeUndefined();
    expect(list.tail).toBeUndefined();
  });
  it('should create a new instance of LinkedList with args', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);

    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toEqual('foo');
    expect(list.tail).toEqual('baz');
  });
});

describe('LinkedList instance', () => {
  describe('pop()', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList([1, 2, 3, 4, 5]);
    });
    it('should pop the end of a list and return the item', () => {
      expect(list.pop()).toEqual(5);
      expect(list.tail).toEqual(4);
    });
    it('should return undefined when list is empty', () => {
      expect(list.pop()).toEqual(5);
      expect(list.pop()).toEqual(4);
      expect(list.pop()).toEqual(3);
      expect(list.pop()).toEqual(2);
      expect(list.pop()).toEqual(1);
      expect(list.head).toBeUndefined();
      expect(list.tail).toBeUndefined();
      expect(list.pop()).toEqual(undefined);
      expect(list.pop()).toEqual(undefined);
    });
  });

  describe('unshift()', () => {
    let list: LinkedList<number>;
    let insert: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedList([1, 2, 3, 4, 5]);
      insert = jest.spyOn(list, 'insert').mockReturnThis();
    });

    it('should alias insert()', () => {
      expect(list.unshift(0)).toBe(list);
      expect(insert).toHaveBeenCalledWith(0);
    });
  });

  describe('shift()', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList([1, 2, 3, 4, 5]);
    });
    it('should pop the end of a list and return the item', () => {
      expect(list.shift()).toEqual(1);
      expect(list.head).toEqual(2);
    });
    it('should return undefined when list is empty', () => {
      expect(list.shift()).toEqual(1);
      expect(list.shift()).toEqual(2);
      expect(list.shift()).toEqual(3);
      expect(list.shift()).toEqual(4);
      expect(list.shift()).toEqual(5);
      expect(list.head).toBeUndefined();
      expect(list.tail).toBeUndefined();
      expect(list.shift()).toEqual(undefined);
      expect(list.shift()).toEqual(undefined);
    });
  });

  describe('has()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);

    it('should return true when the list contains the specified item', () => {
      expect(list.has('foo')).toBe(true);
      expect(list.has('bar')).toBe(true);
      expect(list.has('baz')).toBe(true);
    });
    it('should return false when the list does not contain the specified item', () => {
      expect(list.has('foobar')).toBe(false);
    });
  });

  describe('append()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);
    let add: jest.SpyInstance;

    beforeEach(() => {
      add = jest.spyOn(list, 'add');
    });
    it('should call and return add()', () => {
      expect(list.append('foobar')).toBe(list);
      expect(add).toHaveBeenCalledTimes(1);
      expect(add).toHaveBeenCalledWith('foobar');
    });
  });

  describe('insert()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);
    let insertNode: jest.SpyInstance;

    beforeEach(() => {
      insertNode = jest.spyOn(list, 'insertNode');
    });
    it('should call and return insertNode() with new node value', () => {
      // @ts-expect-error
      const head = list._head;

      expect(list.insert('foobar')).toBe(list);
      expect(insertNode).toHaveBeenCalledTimes(1);
      expect(insertNode).toHaveBeenCalledWith({
        body: 'foobar',
        tail: head,
      });
      expect(list.toArray()).toEqual(['foobar', 'foo', 'bar', 'baz']);
      list.clear();
      expect(list.insert('bar')).toBe(list);
      expect(insertNode).toHaveBeenCalledTimes(2);
      expect(insertNode).toHaveBeenCalledWith({
        body: 'bar',
      });
      expect(list.toArray()).toEqual(['bar']);
    });
  });

  describe('add()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);
    let addNode: jest.SpyInstance;

    beforeEach(() => {
      addNode = jest.spyOn(list, 'addNode');
    });
    it('should call and return addNode() with new node value', () => {
      // @ts-expect-error
      const tail = list._tail;

      expect(list.add('foobar')).toBe(list);
      expect(addNode).toHaveBeenCalledTimes(1);
      expect(addNode).toHaveBeenCalledWith({
        body: 'foobar',
        head: tail,
      });
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz', 'foobar']);
      list.clear();
      expect(list.add('bar')).toBe(list);
      expect(addNode).toHaveBeenCalledTimes(2);
      expect(addNode).toHaveBeenCalledWith({
        body: 'bar',
      });
      expect(list.toArray()).toEqual(['bar']);
    });
  });

  describe('cycle()', () => {
    let list = new LinkedList<string>();
    let headNode: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedList(['foo', 'bar', 'baz']);
      headNode = jest.spyOn(list, 'headNode').mockReturnThis();
    });

    it('should call headNode() with the current tail node', () => {
      expect(list.cycle()).toBe(list);
      expect(headNode).toHaveBeenCalledTimes(1);
      // @ts-expect-error
      expect(headNode).toHaveBeenCalledWith(list._tail);
    });
    it('should do nothing when list is empty', () => {
      list.clear();
      expect(list.cycle()).toBe(list);
      expect(headNode).not.toHaveBeenCalled();
    });
  });

  describe('recycle()', () => {
    let list = new LinkedList<string>();
    let tailNode: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedList(['foo', 'bar', 'baz']);
      tailNode = jest.spyOn(list, 'tailNode').mockReturnThis();
    });
    it('should call and return tailNode() with the current head node', () => {
      expect(list.recycle()).toBe(list);
      expect(tailNode).toHaveBeenCalledTimes(1);
      // @ts-expect-error
      expect(tailNode).toHaveBeenCalledWith(list._head);
    });
    it('should do nothing when list is empty', () => {
      list.clear();
      expect(list.recycle()).toBe(list);
      expect(tailNode).not.toHaveBeenCalled();
    });
  });

  describe('headNode()', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList([3, 5, 7, 9]);
    });
    it('should move the specified node to the head of the list', () => {
      // @ts-expect-error
      const node = list._tail?.head;

      expect(node?.body).toBe(7);
      // @ts-expect-error
      expect(node!.tail).toBe(list._tail);
      expect(node!.tail!.body).toBe(9);
      expect(list.headNode(node!)).toBe(list);
      expect(node!.head).toBeUndefined();
      expect(node!.tail!.body).toBe(3);
      // @ts-expect-error
      expect(list._tail.head).not.toBe(node);
      // @ts-expect-error
      expect(list._tail.head.body).toBe(5);
      // @ts-expect-error
      expect(list._head).toBe(node);
    });
    it('should do nothing when the requested node is already the head', () => {
      // @ts-expect-error
      expect(list.headNode(list._head)).toBe(list);
      expect(list.toArray()).toEqual([3, 5, 7, 9]);
    });
  });

  describe('tailNode()', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList([3, 5, 7, 9]);
    });
    it('should tail the node', () => {
      // @ts-expect-error
      expect(list.tailNode(list._head)).toBe(list);
      expect(list.toArray()).toEqual([5, 7, 9, 3]);
      // @ts-expect-error
      list.tailNode(list._head.tail);
      expect(list.toArray()).toEqual([5, 9, 3, 7]);
      expect([...list.reverse()]).toEqual([7, 3, 9, 5]);
    });

    it('should move the specified node to the tail of the list', () => {
      // @ts-expect-error
      const node = list._tail?.head;

      expect(node?.body).toBe(7);
      // @ts-expect-error
      expect(node.tail).toBe(list._tail);
      expect(node!.tail!.body).toBe(9);
      expect(list.tailNode(node!)).toBe(list);
      expect(node!.tail).toBeUndefined();
      expect(node!.head!.body).toBe(9);
      // @ts-expect-error
      expect(list._tail.head).not.toBe(node);
      // @ts-expect-error
      expect(list._tail).toBe(node);
    });
    it('should move the head node to the tail of the list when supplied', () => {
      // @ts-expect-error
      const node = list._head;

      expect(node?.body).toBe(3);
      expect(list.tailNode(node!)).toBe(list);
      expect(list.toArray()).toEqual([5, 7, 9, 3]);
    });
    it('should do nothing when the requested node is already the tail', () => {
      // @ts-expect-error
      expect(list.tailNode(list._tail)).toBe(list);
      expect(list.toArray()).toEqual([3, 5, 7, 9]);
    });
  });

  describe('clear()', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList([3, 5, 7, 9]);
    });
    it('should completely empty a list', () => {
      expect(list.head).toBeDefined();
      expect(list.tail).toBeDefined();
      list.clear();
      expect(list.head).toBeUndefined();
      expect(list.tail).toBeUndefined();
    });
  });

  describe('delete()', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList([3, 5, 1, 8, 7, 9]);
    });
    it('should delete the node containing the specified item and return true', () => {
      expect(list.delete(9)).toBe(true);
      expect(list.tail).toBe(7);
      expect(list.delete(5)).toBe(true);
      expect(list.head).toBe(3);
      expect(list.delete(3)).toBe(true);
      expect(list.head).toBe(1);
      expect(list.delete(8)).toBe(true);
      expect(list.tail).toBe(7);
      expect(list.delete(7)).toBe(true);
      expect(list.tail).toBe(1);
      expect(list.head).toBe(list.tail);
      expect(list.delete(1)).toBe(true);
      expect(list.head).not.toBeDefined();
      expect(list.tail).toBe(list.head);
    });
    it('should return false if node does not exist', () => {
      expect(list.delete(4)).toBe(false);
      expect(list.tail).toBe(9);
      expect(list.head).toBe(3);
    });
  });

  describe('toArray()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);

    it('should return an array representation of the list', () => {
      expect(list.toArray().constructor).toBe([].constructor);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      list.cycle();
      expect(list.toArray()).toEqual(['baz', 'foo', 'bar']);
      list.clear();
      expect(list.toArray()).toEqual([]);
    });
  });

  describe('values()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

    it('should return a generator that yields each item in the list', () => {
      let i = 0;

      for (const item of list.values()) {
        expect(item).toEqual(arr[i++]);
      }
    });
  });

  describe('reverse()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

    it('should return a generator that yields each item in the list in reverse order', () => {
      let i = 2;

      for (const item of list.reverse()) {
        expect(item).toEqual(arr[i--]);
      }
    });
  });

  describe('keys()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);
    let values: jest.SpyInstance;

    beforeEach(() => {
      values = jest
        .spyOn(list, 'values')
        .mockReturnValue([] as unknown as Generator<string, void, unknown>);
    });
    it('should call and return values()', () => {
      expect(Array.from(list.keys())).toEqual([]);
      expect(values).toHaveBeenCalledTimes(1);
    });
  });

  describe('entries()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

    it('should return a generator that yields an [item, item] tuple for each item in the list', () => {
      let i = 0;
      for (const [k, v] of list.entries()) {
        expect(k).toEqual(v);
        expect(k).toEqual(arr[i++]);
      }
    });
  });

  describe('toString()', () => {
    const list = new LinkedList<number | null>([3, 6, 9]);

    it('should show a string representation of the data structure', () => {
      expect(`${list}`).toEqual('[object Number(?)]');
      list.insert(null);
      expect(`${list}`).toEqual('[object unknown(?)]');
      list.clear();
      expect(`${list}`).toEqual('[object Empty]');
    });
  });

  describe('forEach()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

    it('should respect the standard Array forEach signature', () => {
      const foo = { my: 'foobar' };
      let i = 0;

      expect(
        list.forEach(function each(item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
        })
      ).not.toBeDefined();
      expect(i).toEqual(3);

      i = 0;
      expect(
        list.forEach(function each(item, idx, l) {
          expect(this).toBe(foo);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
        }, foo)
      ).not.toBeDefined();
      expect(i).toEqual(3);
    });
  });

  describe('map()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

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

  describe('reduce()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

    it('should respect the standard Array reduce signature', () => {
      const foo = { my: 'foobar' };
      let i = 0;

      expect(
        list.reduce(function each(acc, item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
          return acc + 1;
        }, 0)
      ).toEqual(3);
      expect(i).toEqual(3);

      i = 0;
      expect(
        list.reduce(
          function each(acc, item, idx, l) {
            expect(this).toBe(foo);
            expect(i).toEqual(idx);
            expect(item).toBe(arr[i++]);
            expect(l).toBe(list);
            return acc;
          },
          0,
          foo
        )
      ).toEqual(0);
      expect(i).toEqual(3);
    });
  });

  describe('filter()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

    it('should respect the standard Array filter signature', () => {
      const foo = { my: 'foobar' };
      let i = 0;

      expect(
        list.filter(function each(item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
          return idx > 1;
        })
      ).toEqual(['baz']);
      expect(i).toEqual(3);

      i = 0;
      expect(
        list.filter(function each(item, idx, l) {
          expect(this).toBe(foo);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
          return idx <= 1;
        }, foo)
      ).toEqual(['foo', 'bar']);
      expect(i).toEqual(3);
    });
  });

  describe('find()', () => {
    const arr = ['foo', 'bar', 'baz'];
    const list = new LinkedList(arr);

    it('should respect the standard Array find signature', () => {
      const foo = { my: 'foobar' };
      let i = 0;

      expect(
        list.find(function each(item, idx, l) {
          expect(this).toBe(list);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
          return false;
        })
      ).toEqual(undefined);
      expect(i).toEqual(3);

      i = 0;
      expect(
        list.find(function each(item, idx, l) {
          expect(this).toBe(foo);
          expect(i).toEqual(idx);
          expect(item).toBe(arr[i++]);
          expect(l).toBe(list);
          return item === 'bar';
        }, foo)
      ).toEqual('bar');
      expect(i).toEqual(2);
    });
  });

  describe('join()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);
    let res = ['fake', 'bake'];
    let toArray: jest.SpyInstance;

    beforeEach(() => {
      toArray = jest.spyOn(list, 'toArray').mockReturnValue(res);
    });

    it('should call join method on result of toArray()', () => {
      expect(list.join('-')).toEqual('fake-bake');
      expect(toArray).toHaveBeenCalledTimes(1);
    });
  });

  describe('toJSON()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);
    let toArray: jest.SpyInstance;

    beforeEach(() => {
      toArray = jest.spyOn(list, 'toArray').mockReturnValue(['fake', 'bake']);
    });

    it('should call and return toArray()', () => {
      expect(list.toJSON()).toEqual(['fake', 'bake']);
      expect(toArray).toHaveBeenCalledTimes(1);
      expect(JSON.stringify(list)).toEqual('["fake","bake"]');
      expect(toArray).toHaveBeenCalledTimes(2);
    });
  });

  describe('[Symbol.iterator]()', () => {
    const list = new LinkedList(['foo', 'bar', 'baz']);
    let values: jest.SpyInstance;

    beforeEach(() => {
      values = jest.spyOn(list, 'values');
    });

    it('should call and return values() generator', () => {
      const a = [];

      for (const e of list) {
        a.push(e);
      }

      expect(values).toHaveBeenCalledTimes(1);
      expect(a).toEqual(['foo', 'bar', 'baz']);
    });
  });

  describe('concat()', () => {
    let list = new LinkedList(['foo', 'bar', 'baz']);
    let list2 = new LinkedList(['eggs', 'spam']);
    let add: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedList(['foo', 'bar', 'baz']);
      list2 = new LinkedList(['eggs', 'spam']);
      add = jest.spyOn(LinkedList.prototype, 'add');
    });

    it('should create a new concatenated list', () => {
      const r = list.concat(list2, ['bazbaz'], [], 'foobar');

      expect(r).not.toBe(list);
      expect(add).toHaveBeenCalledWith('foo');
      expect(add).toHaveBeenCalledWith('bar');
      expect(add).toHaveBeenCalledWith('baz');
      expect(add).toHaveBeenCalledWith('eggs');
      expect(add).toHaveBeenCalledWith('spam');
      expect(add).toHaveBeenCalledWith('bazbaz');
      expect(add).toHaveBeenCalledWith('foobar');
      expect(add).toHaveBeenCalledTimes(7);
      expect(r.toArray()).toEqual(['foo', 'bar', 'baz', 'eggs', 'spam', 'bazbaz', 'foobar']);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      expect(list2.toArray()).toEqual(['eggs', 'spam']);
    });
  });

  describe('concatUnsafe()', () => {
    let list = new LinkedList(['foo', 'bar', 'baz']);
    let list2 = new LinkedList(['eggs', 'spam']);

    beforeEach(() => {
      list = new LinkedList(['foo', 'bar', 'baz']);
      list2 = new LinkedList(['eggs', 'spam']);
    });

    it('should append the second list directly to the tail of the first', () => {
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list);
      expect(list.tail).toBe(list2.tail);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz', 'eggs', 'spam']);
      expect(list2.toArray()).toEqual(['eggs', 'spam']);
    });

    it('should return the second list if the first is empty', () => {
      list.clear();
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list2);
      expect(r).not.toBe(list);
      expect(list.toArray()).toEqual([]);
      expect(list2.toArray()).toEqual(['eggs', 'spam']);
    });

    it('should just return the list if concat called on itself', () => {
      const r = list.concatUnsafe(list);

      expect(r).toBe(list);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
    });

    it('should just return the list if second list is empty', () => {
      list2.clear();
      const r = list.concatUnsafe(list2);

      expect(r).toBe(list);
      expect(r).not.toBe(list2);
      expect(list2.toArray()).toEqual([]);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
    });
  });

  describe('new()', () => {
    it('should return a new empty LinkedList of the same type', () => {
      const list = new LinkedList(['foo', 'bar']);
      let list2 = list.new();

      expect(list).not.toBe(list2);
      expect(list.toArray()).toEqual(['foo', 'bar']);
      expect(list2.toArray()).toEqual([]);
      // @ts-expect-error
      expect(list2.keyBy).toBe(list.keyBy);
      let list3 = list2.new(['barfoo']);
      expect(list3).not.toBe(list2);
      expect(list2.toArray()).toEqual([]);
      expect(list3.toArray()).toEqual(['barfoo']);
    });
  });

  describe('toArraySlice()', () => {
    let list = new LinkedList(['foo', 'bar', 'baz']);

    beforeEach(() => {
      list = new LinkedList(['foo', 'bar', 'baz']);
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
    });

    it('should throw an error if a negative index is provided', () => {
      expect(() => list.toArraySlice(-1)).toThrow(RangeError);
      expect(() => list.toArraySlice(0, -1)).toThrow(RangeError);
      expect(() => list.toArraySlice(-2, -1)).toThrowError(RangeError);
    });
  });

  describe('slice()', () => {
    let list = new LinkedList(['foo', 'bar', 'baz']);
    let add: jest.SpyInstance;

    beforeEach(() => {
      list = new LinkedList(['foo', 'bar', 'baz']);
      add = jest.spyOn(LinkedList.prototype, 'add');
    });

    it('should create a new slice of the original list', () => {
      let slice = list.slice();

      expect(add).toHaveBeenCalledTimes(3);
      expect(add).toHaveBeenCalledWith('foo');
      expect(add).toHaveBeenCalledWith('bar');
      expect(add).toHaveBeenCalledWith('baz');
      expect(slice).not.toBe(list);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      expect(slice.toArray()).toEqual(list.toArray());
      add.mockClear();
      slice = list.slice(1, 1);
      expect(slice).not.toBe(list);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      expect(add).not.toHaveBeenCalled();
      expect(slice.toArray()).toEqual([]);
      add.mockClear();
      slice = list.slice(0, 1);
      expect(slice).not.toBe(list);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      expect(add).toHaveBeenCalledTimes(1);
      expect(add).toHaveBeenCalledWith('foo');
      expect(slice.toArray()).toEqual(['foo']);
      add.mockClear();
      slice = list.slice(1);
      expect(slice).not.toBe(list);
      expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
      expect(add).toHaveBeenCalledTimes(2);
      expect(add).toHaveBeenCalledWith('bar');
      expect(add).toHaveBeenCalledWith('baz');
      expect(slice.toArray()).toEqual(['bar', 'baz']);
    });

    it('should throw an error if a negative index is provided', () => {
      expect(() => list.slice(-1)).toThrow(RangeError);
      expect(() => list.slice(0, -1)).toThrow(RangeError);
      expect(() => list.slice(-2, -1)).toThrowError(RangeError);
    });
  });
});
