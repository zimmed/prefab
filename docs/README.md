@zimmed/prefab / [Exports](modules.md)

# @zimmed/prefab

TypeScript library for optimized data structures (prefabs).

> [Typedocs](docs/modules.md)

![Jest Branch Coverage](coverage/badge-branches.svg)
![Jest Function Coverage](coverage/badge-functions.svg)
![Jest Line Coverage](coverage/badge-lines.svg)
![Jest Statement Coverage](coverage/badge-statements.svg)

## Installation

First, edit existing or create new .npmrc file in your project root, and add:

`@zimmed:registry=https://npm.pkg.github.com`

Then you can use:

`$ npm i --save @zimmed/prefab`

## iFAQ

### **Do I have to use TypeScript to use this library?**

Nope! You can import into any ES6 project using the same `import` syntax listed below, into Node.js using &nbsp; `const { LinkedList } = require('@zimmed/prefab')`, or directly into a modern browser environment using &nbsp;`<script src="prefab.umd.js" /><script>const list = new prefab.LinkedList();</script>`. If you want ES5 backward compatibility, you will need to bundle this library with your own transpilation process (see [babel](https://babeljs.io)).

### **Why are you reinventing the wheel?**

There are many JavaScript examples and libraries for various datastructures, but very few with full `typing` support, and even fewer that are optimized for raw performance. These prefabs take advantage of the highly-optimized ES5+ builtins, like Set and Map and extend their behavior to be
a bit more versatile, as in the case of the [LinkedSet](#user-content-linkedset-docs-src), which sparked this library because I wanted the performance advantages of the JavaScript `Set` object, but needed to be able to `pop` elements from it (which the `Set` does not do natively).

If you still need convincing, perhaps the performance benchmarks that will be published with the upcoming 0.2.0 release will help clarify. In preliminary tests on Node.js 16.4, the [LinkedSet](#user-content-linkedset-docs-src) maintained overall `Set` performance, while DRASTICALLY (to the tune of 60x) outperformed even the native `Array` on `unshift` and `shift` operations, thanks to the doubly-[LinkedList](#user-content-linkedlist-docs-src).

### **What tool are you using to benchmark?**

[@zimmed/bench](https://github.com/zimmed/bench)

### **How can I help?**

Report any bugs you come across on the issues page, or suggest enhancements.

### **Classical inheritance sucks!**

Not a question, but I completely agree. Object composition is a much better pattern. That said, because TypeScript is geared more towards the traditional (read: wrong) OOP opproach, it works much better for these kinds of libraries when you have a lot of generic types to use a hierarchical approach. It also makes the code very familiar for a larger set of developers.

I considered adding parallel factory patterns instead of instance-based structures, but this library is really about performance, which is optimized very well on any modern JavaScript engine for class instantiation, and switching to a more robust and testable stateless factory pattern would hurt that peformance. I may still do this anyway at some point, but it's not a priority.

## Prefabs

- [LinkedList](#user-content-linkedlist-docs-src)
- [SizedLinkedList](#user-content-sizedlinkedlist-docs-src)
- [LinkedSet](#user-content-linkedset-docs-src)
- [LinkedCollection](#user-content-linkedcollection-docs-src)
- [ObjectPool](#user-content-priorityqueue-docs-src)

### Inheritance Tree

```code
 LinkedList
 ┃
 ┣━ SizedLinkedList
 ┃  ┻━ Queue [Future]
 ┃
 ┣━ LinkedSet
 ┃  ┃
 ┃  ╋━ UniQueue [Future]
 ┃  ┃
 ┃  ╋━ SortedSet [Future]
 ┃  ╹  ┻━ PriorityQueue [Future]
 ┃
 ┣━ LinkedCollection
 ┃  ┃
 ╹  ┻━ SortedCollection [Future]

 ObjectPool < LinkedList
```

### LinkedList ([docs](docs/classes/LinkedList.md)) ([src](src/LinkedList.ts))

For all your linked-list needs!

```typescript
import { LinkedList } from '@zimmed/prefab';

const foo = new LinkedList<string>()
  .add('green')
  .add('eggs')
  .add('and')
  .cycle()
  .add('spam')
  .cycle()
  .join(' '); // -> "spam and green eggs"

const bar = LinkedList.from('green eggs and spam'.split(' ')); // -> LinkedList { 'green' 'eggs' 'and' 'spam' }

for (const s of bar) {
  // ... iteration
}
```

### SizedLinkedList ([docs](docs/classes/SizedLinkedList.md)) ([src](src/SizedLinkedList.ts))

##### (extends [LinkedList](#user-content-linkedlist-docs-src))

A very slight extension to the LinkedList prefab that tracks the size of the list.

```typescript
import { SizedLinkedList as LinkedList } from '@zimmed/prefab';

const baz = LinkedList.from('green eggs and spam'.split(' ')).size; // -> 4
```

### LinkedSet ([docs](docs/classes/LinkedSet.md)) ([src](src/LinkedSet.ts))

##### (extends [LinkedList](#user-content-linkedlist-docs-src))

Combines the optimized functionality of the builtin Set, with the versatility of
a linked list: Best of both worlds! Blazing fast unique list operations and lookups
while supporting additional functionality that the native Set does not support, such
as insert, pop, shift, and more.

```typescript
import { LinkedSet } from '@zimmed/prefab';

const set = new LinkedSet(['one', 'two', 'three', 'two', 'four', 'one']); // -> LinkedSet { 'one' 'two' 'three' 'four' }

set.add('five');
set.size; // -> 5

const obj = set.reduce(
  (
    accum,
    key,
    idx /** Note: 2nd param to callbacks is INDEX not the redundant key as it is in the builtin Set **/
  ) => ({
    ...accum,
    [key]: idx,
  }),
  {} as { [k: string]: number }
);

const five = set.pop(); // -> 'five'

set.size; // -> 4
```

<!-- ### SortedSet ([docs](docs/classes/SortedSet.md)) ([src](src/SortedSet.ts))

##### (extends [LinkedSet](#user-content-linkedset-docs-src))

Building upon the flexibility of the LinkedSet, the SortedSet prefab adds an additional
datastructure under the covers (BST) for maintaining a list in a specified sort order.

```typescript
import { SortedSet } from '@zimmed/prefab';

const numbers = SortedSet.from([4, 4, 8, 4, 1, 2, 10]) // -> SortedSet { 1, 2, 4, 8, 10 }
  .add(5); // -> SortedSet { 1, 2, 4, 5, 8, 10 }

const collection = new SortedSet<{ name: string }>(undefined, (a, b) => (a.name < b.name ? -1 : 1));

collection
  .add({ name: 'foo' }) // -> SortedSet { 'foo' }
  .add({ name: 'bar' }) // -> SortedSet { 'bar' 'foo' }
  .add({ name: 'baz' }) // -> SortedSet { 'bar' 'baz' 'foo' }
  .delete(collection.find((x) => x.name === 'bar')); // -> SortedSet { 'baz' 'foo' }
``` -->

<!-- ### Queue ([docs](docs/classes/Queue.md)) ([src](src/Queue.ts))

##### (extends [SizedLinkedList](#user-content-sizedlinkedlist-docs-src))

A simple FIFO or LIFO Queue datastructure, using the SizedLinkedList prefab.

```typescript
import { Queue } from '@zimmed/prefab';

const queue = Queue.from([1, 2, 3]);
const stack = Queue.from([1, 2, 3], Queue.Type.LIFO);

queue.enqueue(4).add(3); // -> Queue { 1 2 3 4 3 }
stack.enqueue(5).add(5); // -> Queue { 1 2 3 5 5 }

queue.dequeue(); // -> 1
queue.shift(); // -> 2
stack.dequeue(); // -> 5
stack.pop(); // -> 5

// fifo -> Queue { 3 4 3 }
// lifo -> Queue { 1 2 3 }
``` -->

<!-- ### UniQueue ([docs](docs/classes/UniQueue.md)) ([src](src/UniQueue.ts))

##### (extends [LinkedSet](#user-content-linkedset-docs-src))

Utilizing the uniform performance of head or tail pushing and popping of the LinkedList,
and the extended methods of the LinkedSet, the UniQueue prefab just extends it with the
common vocabulary one would expect for a Queue datastructure (unique elements only).

```typescript
import { UniQueue as Queue } from '@zimmed/prefab';

const q = Queue.from([1, 2, 3, 4, 4, 3]); // -> UniQueue { 1, 2, 3, 4 }

q.has(3); // -> Hashmap lookup time
``` -->

<!-- ### PriorityQueue ([docs](docs/classes/PriorityQueue.md)) ([src](src/PriorityQueue.ts))

##### (extends [SortedSet](#user-content-sortedset-docs-src))

Uses the BST-powered SortedSet prefab, the PriorityQueue prefab is an implicitly sorted
FIFO Queue with the ability to specify/override the sorting priority.

```typescript
import { PriorityQueue as Queue } from '@zimmed/prefab';

const q = Queue.from([1, 2, 3, 4, 4, 3]; // -> PriorityQueue { 1, 2, 3, 4 }

q.enqueue(5, 1)
  .enqueue(6, 1) // -> PriorityQueue { 5, 6, 1, 2, 3, 4 }
  .enqueue(10, -1) // -> PriorityQueue { 10, 5, 6, 1, 2, 3, 4 }
  .insert(100) // -> PriorityQueue { 100, 10, 5, 6, 1, 2, 3, 4 }
  .insert(200) // -> PriorityQueue { 200, 100 10, 5, 6, 1, 2, 3, 4 }
  .enqueue(31) // -> PriorityQueue { 200, 100 10, 5, 6, 1, 2, 3, 4, 31 }
  .dequeue(); // -> 200
``` -->

### LinkedCollection ([docs](docs/classes/LinkedCollection.md)) ([src](src/LinkedCollection.ts))

##### (extends [LinkedList](#user-content-linkedlist-docs-src))

Similar to the LinkedSet, but uses primary key lookups and identifiers, and requires items to be objects. Useful for keeping key -> value records with constant lookups, as well as linked list iterations.

```typescript
import { LinkedCollection } from '@zimmed/prefab';

class Item {
  constructor(
    public readonly id: string,
    public data?: any,
    public readonly cat: string = 'default'
  ) {}
}

const collection = new LinkedCollection('id', [
  new Item('one'),
  new Item('two'),
  new Item('three'),
  new Item('two'),
]); // -> LinkedCollection { Item('one'), Item('two'), Item('three') }

collection.add(new Item('four'));
collection.size; // -> 4

for (const item of collection) {
  // same as collection.values()
  // -> Item('one'), Item('two'), Item('three'), ...
}

for (const key of collection.keys()) {
  // -> 'one', 'two', 'three', ...
}

for (const [key, item] of collection.entries()) {
  // -> ['one', Item('one')], ...
}

// Respects same Set methods
const four = collection.pop(); // -> Item('four')
collection.size; // -> 4

// Introduces expected Map method and changes signatures to be key lookups instead of item lookups
collection.select('two'); // -> Item('two')
collection.has('one'); // -> true
collection.delete('three'); // -> true

// Upserting / Uppending
// Safely update existing item or add/insert new one
collection.uppend(new Item('seven')); // -> same as collection.add or collection.append
collection.uppend(new Item('seven', { foo: 'bar' })); // -> replaces existing Item('seven') with new Item('seven', { foo: 'bar' }) maintaining link position
collection.upsert(new Item('zero')); // -> same as collection.insert or collection.unshift
collection.upsert(new Item('zero', 14)); // -> updates existing Item('zero') with new Item('zero', 14) maintaining link position

// Additional groupBy Helper
// Groups items into arrays based on provided key
new LinkedCollection('id', [
  new Item('one'),
  new Item('two'),
  new Item('three', undefined, 'special'),
]).groupBy('cat'); // -> { default: [Item('one'), Item('two')], special: [Item('three')] }
// if key is the collection identifier key, returns a key->value object
new LinkedCollection('id', [new Item('one'), new Item('two')]).groupBy('id'); // -> { one: Item('one'), two: Item('two') }
```

<!--
### SortedCollection (Coming Soon...)

##### (extends [LinkedCollection](#user-content-linkedcollection-docs-src)) -->

### ObjectPool ([docs](docs/classes/ObjectPool.md)) ([src](src/ObjectPool.ts))

##### (uses [LinkedList](#user-content-linkedlist-docs-src))

A pooled object manager for consistent memory signatures.

```typescript
import { ObjectPool } from '@zimmed/prefab';

let counter = 0;

export class MyEntity extends ObjectPool.Object {
  id = 'entity:my';
  uid = ++counter;
  location = [-1, -1];
  health = 0;
  name = 'unnamed';

  get alive() {
    return this.health > 0;
  }

  distance([x, y]: [number, number]) {
    return Math.sqrt((x - this.location[0]) ** 2 + (y - this.location[1]) ** 2);
  }

  onInit(name: string, x: number, y: number, health = 100) {
    this.name = name;
    this.health = health;
    this.location[0] = x;
    this.location[1] = y;
  }

  // Be sure to free up any references that are no longer needed so they can be garbage collected.
  onClean() {
    this.health = 0;
    this.location[0] = -1;
    this.location[1] = -1;
  }
}

const entityPool = ObjectPool.create(MyEntity, 1000); // pre-allocates 1000 entities

entityPool.alloc(1000); // allocates 1000 more entities
entityPool.size; // -> 2000

// Take and initialize objects for use from pool
const dude = entityPool.spawn('Dude', 4, 5);
const body = entityPool.spawn('Dead Guy', 3, 3, 0);

Array(1998)
  .fill(0)
  .map(() => entityPool.spawn('Used Entity', 100, 100)); // Use up entire pool

let newEntity = entityPool.spawn('Another entity', 1, 1); // No entity created! Returns undefined when all objects used up.
newEntity = entityPool.forceSpawn('Another entity', 1, 1); // Entity created! Forces a creation when no objects available and increases the max size of the pool.

entityPool.size; // -> 2001

entityPool.realloc(1000); // No change to pool
// entityPool.reallocUnsafe(1000);
// This will release all entities over the new maximum, keeping the most recently allocated first.
// This would break the game loop, as `dude` and `body` would all be cleaned and orphaned objects.
// The same can also be achieved with `entityPool.dealloc(1001);`
// Alternatively, `entityPool.clear()` will free all pooled objects.
entityPool.realloc(1e6); // Set pool size to 1,000,000 (keeps existing entities)

function gameLoop(player) {
  if (body.distance(player.location) === 0) {
    entityPool.free(body); // Frees object back into pool for re-use later
    console.log(body.location); // -> [-1, -1];
  }
}
```

## Performance Benchmarks

(coming soon...)
