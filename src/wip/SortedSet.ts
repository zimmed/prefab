// import SizedLinkedSet from './LinkedSet';
// import { hidden } from './decorators';

// const LEFT = 'left' as const;
// const RIGHT = 'right' as const;

// type LNode<T> = { head?: LNode<T>; body: T; tree: TNode<T>; tail?: LNode<T> };

// type TNode<T> = { left?: TNode<T>; root?: TNode<T>; leaf: LNode<T>; right?: TNode<T> };

// export type Sort<T, S extends SortedSet<T, LNode<T>>> =
//   | ((a: T, b: T) => number)
//   | ((a: T, b: T, s: S) => number);

// const DEFAULT_SORT: Sort<any, any> = <T>(a: T, b: T) => (a < b ? -1 : a > b ? 1 : 0);

// export class SortedSet<T, N extends LNode<T> = LNode<T>> extends SizedLinkedSet<T, N> {
//   @hidden
//   protected _tree?: TNode<T>;

//   @hidden({ writable: false })
//   private readonly _cmp!: Sort<T, any>;

//   public constructor(
//     iterable?: IterableIterator<T> | Array<T> | Generator<T, void, unknown>,
//     compareFunction: Sort<T, any> = DEFAULT_SORT
//   ) {
//     super(iterable, { _cmp: compareFunction });
//   }

//   /** Searches set using compare function to find first match
//    * @param compareFunction Takes an item from the set and returns 0 if a match, -1 (<0)
//    * if the desired match is lower in the sort order (closer to the front of the list),
//    * or 1 (>0) if the desired match is higher (towards the end of the list)
//    */
//   public search(compareFunction: (a: T) => number, node = this._tree): T | undefined {
//     if (!node) return undefined;
//     let cmp = compareFunction(node.leaf.body);

//     while (cmp < 0) {
//       node = (node as TNode<T>).left;
//       cmp = node ? compareFunction(node.leaf.body) : 0;
//     }
//     while (cmp > 0) {
//       node = (node as TNode<T>).right;
//       cmp = node ? compareFunction(node.leaf.body) : 0;
//     }
//     if (cmp === 0) {
//       if (node) return node.leaf.body;
//       else return undefined;
//     }
//     return this.search(compareFunction, node);
//   }

//   /** Pops item from end of the set */
//   public pop() {
//     if (this._tail) {
//       const tnode = this._tail.tree;

//       if (tnode.root) tnode.root.right = tnode.left;
//       else this._tree = tnode.left;
//     }
//     return super.pop();
//   }

//   /** Shifts item from the front of the set */
//   public shift() {
//     if (this._head) {
//       const tnode = this._head.tree;

//       if (tnode.root) tnode.root.left = tnode.right;
//       else this._tree = tnode.right;
//     }
//     return super.shift();
//   }

//   /** Clears the set */
//   public clear() {
//     this._tree = undefined;
//     super.clear();
//   }

//   /** Inserts item into the front the set */
//   public insert(item: T) {
//     return this.add(item);
//   }

//   /** Appends item onto the end of the set */
//   public add(item: T) {
//     const map = this._map;

//     if (!map.has(item)) {
//       let lnode: Partial<N>;
//       let tnode: TNode<T>;

//       if (!map.size) {
//         lnode = { body: item } as Partial<N>;
//         tnode = { leaf: lnode as N };
//         lnode.tree = tnode;
//         this._tree = tnode;
//         this._head = this._tail = lnode as N;
//       } else {
//         const cmp = this._cmp;
//         let nextNode: typeof LEFT | typeof RIGHT;
//         let sibling: N;

//         tnode = this._tree as TNode<T>;
//         nextNode = cmp(item, tnode.leaf.body, this) < 0 ? LEFT : RIGHT;
//         while (tnode[nextNode]) {
//           tnode = tnode[nextNode] as TNode<T>;
//           nextNode = cmp(item, tnode.leaf.body, this) < 0 ? LEFT : RIGHT;
//         }
//         sibling = tnode.leaf as N;
//         lnode =
//           nextNode === LEFT
//             ? ({ head: sibling.head, body: item, tail: sibling } as unknown as Partial<N>)
//             : ({ head: sibling, body: item, tail: sibling.tail } as unknown as Partial<N>);
//         if (lnode.head) lnode.head.tail = lnode as N;
//         if (lnode.tail) lnode.tail.head = lnode as N;
//         tnode[nextNode] = { leaf: lnode as N, root: tnode };
//         lnode.tree = tnode[nextNode];
//         if (nextNode === LEFT && sibling === this._head) this._head = lnode as N;
//         else if (nextNode === RIGHT && sibling === this._tail) this._tail = lnode as N;
//       }
//       map.set(item, lnode as N);
//     }
//     return this;
//   }

//   /** Deletes specified item from the set */
//   public delete(item: T) {
//     const map = this._map;
//     let cur = map.get(item);
//     let t: TNode<T>;

//     if (cur) {
//       t = cur.tree;
//       map.delete(item);
//       if (this._head === cur) this._head = cur.tail as N;
//       else if (this._tail === cur) this._tail = cur.head as N;
//       else {
//         if (cur.head) cur.head.tail = cur.tail;
//         if (cur.tail) cur.tail.head = cur.head;
//       }
//       if (!t.left) {
//         if (t.root) t.root[t === t.root.left ? LEFT : RIGHT] = t.right;
//         else this._tree = t.right;
//       } else if (!t.right) {
//         if (t.root) t.root[t === t.root.left ? LEFT : RIGHT] = t.left;
//         else this._tree = t.left;
//       } else {
//         let parent = t;
//         let child = t.right;

//         while (child.left) {
//           parent = child;
//           child = child.left;
//         }
//         if (parent === t) {
//         } else {
//           parent.left = child.right;
//         }
//         if (t.root) t.root[t === t.root.left ? LEFT : RIGHT] = child;
//         else this._tree = child;
//         child.right = t.right;
//         child.left = t.left;
//       }
//       return true;
//     }
//     return false;
//   }
// }

// export default SortedSet;
