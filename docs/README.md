@zimmed/prefab / [Exports](modules.md)

# @zimmed/prefab

TypeScript library for optimized data structures (prefabs).

> [Typedocs](docs/modules.md)

## Installation

First, edit existing or create new .npmrc file in your project root, and add:

`@zimmed:registry=https://npm.pkg.github.com`

Then you can use:

`$ npm i --save @zimmed/prefab`

## Prefabs

- [LinkedList](#user-content-linkedlist-docs-src)
- [SizedLinkedList](#user-content-sizedlinkedlist-docs-src)
- [LinkedSet](#user-content-linkedset-docs-src)
- [SortedSet](#user-content-sortedset-docs-src)
- [Queue](#user-content-queue-docs-src)
- [UniQueue](#user-content-uniqueue-docs-src)
- [PriorityQueue](#user-content-priorityqueue-docs-src)
- [ObjectPool](#user-content-priorityqueue-docs-src)

### Inheritance Tree

```code
 LinkedList
 ┃
 ┣━ SizedLinkedList
 ┃  ┻━ Queue
 ┃
 ┣━ LinkedSet
 ┃  ┃
 ┃  ╋━ UniQueue
 ┃  ┃
 ┃  ╋━ SortedSet
 ╹  ╹  ┻━ PriorityQueue

 ObjectPool < LinkedList
```

### LinkedList ([docs](docs/classes/LinkedList.LinkedList-1.md)) ([src](src/LinkedList.ts))

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

### SizedLinkedList ([docs](docs/classes/SizedLinkedList.SizedLinkedList-1.md)) ([src](src/SizedLinkedList.ts))

##### (extends [LinkedList](#user-content-linkedlist-docs-src))

A very slight extension to the LinkedList prefab that tracks the size of the list.

```typescript
import { SizedLinkedList as LinkedList } from '@zimmed/prefab';

const baz = LinkedList.from('green eggs and spam'.split(' ')).size; // -> 4
```

### LinkedSet ([docs](docs/classes/LinkedSet.LinkedSet-1.md)) ([src](src/LinkedSet.ts))

##### (extends [LinkedList](#user-content-linkedlist-docs-src))

Combines the optimized functionality of the builtin Set, with the versatility of
a linked list: Best of both worlds! Blazing fast unique list operations and lookups
while supporting additional functionality that the native Set does not support, such
as insert, pop, shift, and more.

```typescript
import { SortedSet } from '@zimmed/prefab';

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

### SortedSet ([docs](docs/classes/SortedSet.SortedSet-1.md)) ([src](src/SortedSet.ts))

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
```

### Queue ([docs](docs/classes/Queue.Queue-1.md)) ([src](src/Queue.ts))

##### (extends [SizedLinkedList](#user-content-sizedlinkedlist-docs-src))

A simple FIFO or LIFO Queue datastructure, using the SizedLinkedList prefab.

```typescript
import { Queue } from '@zimmed/prefab';

const queue = Queue.from([1, 2, 3], Queue.Type.FIFO);
const stack = Queue.from([1, 2, 3], Queue.Type.LIFO);

queue.enqueue(4).add(3); // -> Queue { 1 2 3 4 3 }
stack.enqueue(5).add(5); // -> Queue { 1 2 3 5 5 }

queue.dequeue(); // -> 1
queue.shift(); // -> 2
stack.dequeue(); // -> 5
stack.pop(); // -> 5

// fifo -> Queue { 3 4 3 }
// lifo -> Queue { 1 2 3 }
```

### UniQueue ([docs](docs/classes/UniQueue.UniQueue-1.md)) ([src](src/UniQueue.ts))

##### (extends [LinkedSet](#user-content-linkedset-docs-src))

Utilizing the uniform performance of head or tail pushing and popping of the LinkedList,
and the extended methods of the LinkedSet, the UniQueue prefab just extends it with the
common vocabulary one would expect for a Queue datastructure (unique elements only).

```typescript
import { UniQueue as Queue } from '@zimmed/prefab';

const q = Queue.from([1, 2, 3, 4, 4, 3], Queue.Type.FIFO); // -> UniQueue { 1, 2, 3, 4 }

q.has(3); // -> Hashmap lookup time
```

### PriorityQueue ([docs](docs/classes/PriorityQueue.PriorityQueue-1.md)) ([src](src/PriorityQueue.ts))

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
```

### ObjectPool ([docs](docs/classes/ObjectPool.ObjectPool-1.md)) ([src](src/ObjectPool.ts))

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

  poolInit(name: string, x: number, y: number, health = 100) {
    this.name = name;
    this.health = health;
    this.location[0] = x;
    this.location[1] = y;
  }

  // Be sure to free up any references that are no longer needed so they can be garbage collected.
  poolClean() {
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
