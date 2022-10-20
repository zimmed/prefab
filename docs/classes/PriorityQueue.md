[@zimmed/prefab](../README.md) / [Exports](../modules.md) / PriorityQueue

# Class: PriorityQueue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SortedSet`](SortedSet.md)<`T`\>

  ↳ **`PriorityQueue`**

## Table of contents

### Constructors

- [constructor](PriorityQueue.md#constructor)

### Properties

- [\_cMap](PriorityQueue.md#_cmap)
- [\_count](PriorityQueue.md#_count)
- [\_head](PriorityQueue.md#_head)
- [\_map](PriorityQueue.md#_map)
- [\_pMap](PriorityQueue.md#_pmap)
- [\_rCount](PriorityQueue.md#_rcount)
- [\_tail](PriorityQueue.md#_tail)
- [\_tree](PriorityQueue.md#_tree)

### Accessors

- [head](PriorityQueue.md#head)
- [size](PriorityQueue.md#size)
- [tail](PriorityQueue.md#tail)

### Methods

- [[iterator]](PriorityQueue.md#[iterator])
- [add](PriorityQueue.md#add)
- [addNode](PriorityQueue.md#addnode)
- [append](PriorityQueue.md#append)
- [clear](PriorityQueue.md#clear)
- [cycle](PriorityQueue.md#cycle)
- [delete](PriorityQueue.md#delete)
- [deleteNode](PriorityQueue.md#deletenode)
- [dequeue](PriorityQueue.md#dequeue)
- [enqueue](PriorityQueue.md#enqueue)
- [entries](PriorityQueue.md#entries)
- [filter](PriorityQueue.md#filter)
- [find](PriorityQueue.md#find)
- [findRight](PriorityQueue.md#findright)
- [forEach](PriorityQueue.md#foreach)
- [has](PriorityQueue.md#has)
- [headNode](PriorityQueue.md#headnode)
- [insert](PriorityQueue.md#insert)
- [insertNode](PriorityQueue.md#insertnode)
- [join](PriorityQueue.md#join)
- [keys](PriorityQueue.md#keys)
- [map](PriorityQueue.md#map)
- [pop](PriorityQueue.md#pop)
- [recycle](PriorityQueue.md#recycle)
- [reduce](PriorityQueue.md#reduce)
- [reduceRight](PriorityQueue.md#reduceright)
- [reverse](PriorityQueue.md#reverse)
- [reverseMap](PriorityQueue.md#reversemap)
- [search](PriorityQueue.md#search)
- [shift](PriorityQueue.md#shift)
- [tailNode](PriorityQueue.md#tailnode)
- [toArray](PriorityQueue.md#toarray)
- [toJSON](PriorityQueue.md#tojson)
- [unshift](PriorityQueue.md#unshift)
- [values](PriorityQueue.md#values)
- [create](PriorityQueue.md#create)
- [from](PriorityQueue.md#from)

## Constructors

### constructor

• **new PriorityQueue**<`T`\>(`iterable?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Overrides

[SortedSet](SortedSet.md).[constructor](SortedSet.md#constructor)

#### Defined in

[src/PriorityQueue.ts:38](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L38)

## Properties

### \_cMap

• `Protected` `Readonly` **\_cMap**: `Map`<`T`, `number`\>

#### Defined in

[src/PriorityQueue.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L36)

___

### \_count

• `Private` **\_count**: `number` = `0`

#### Defined in

[src/PriorityQueue.ts:30](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L30)

___

### \_head

• `Protected` `Optional` **\_head**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[_head](SortedSet.md#_head)

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `LNode`<`T`\>\>

#### Inherited from

[SortedSet](SortedSet.md).[_map](SortedSet.md#_map)

#### Defined in

[src/LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L7)

___

### \_pMap

• `Protected` `Readonly` **\_pMap**: `Map`<`T`, `number`\>

#### Defined in

[src/PriorityQueue.ts:33](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L33)

___

### \_rCount

• `Private` **\_rCount**: `number` = `0`

#### Defined in

[src/PriorityQueue.ts:27](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L27)

___

### \_tail

• `Protected` `Optional` **\_tail**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[_tail](SortedSet.md#_tail)

#### Defined in

[src/LinkedList.ts:33](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L33)

___

### \_tree

• `Protected` `Optional` **\_tree**: `TNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[_tree](SortedSet.md#_tree)

#### Defined in

[src/SortedSet.ts:35](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L35)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

SortedSet.head

#### Defined in

[src/LinkedList.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L36)

___

### size

• `get` **size**(): `number`

Current size of set

#### Returns

`number`

#### Inherited from

SortedSet.size

#### Defined in

[src/LinkedSet.ts:10](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L10)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

SortedSet.tail

#### Defined in

[src/LinkedList.ts:40](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.md).[[iterator]](SortedSet.md#[iterator])

#### Defined in

[src/LinkedList.ts:393](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L393)

___

### add

▸ **add**(`item`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Adds item into the Queue with priority=5

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.md).[add](SortedSet.md#add)

#### Defined in

[src/PriorityQueue.ts:43](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L43)

___

### addNode

▸ **addNode**(`node`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[addNode](SortedSet.md#addnode)

#### Defined in

[src/LinkedSet.ts:57](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L57)

___

### append

▸ **append**(`item`, `priority?`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Appends item onto the Queue with priority=10

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `10` |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.md).[append](SortedSet.md#append)

#### Defined in

[src/PriorityQueue.ts:48](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L48)

___

### clear

▸ **clear**(): `void`

Clears the set

#### Returns

`void`

#### Inherited from

[SortedSet](SortedSet.md).[clear](SortedSet.md#clear)

#### Defined in

[src/SortedSet.ts:94](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L94)

___

### cycle

▸ **cycle**(): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Moves element from end of list to the front

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[cycle](SortedSet.md#cycle)

#### Defined in

[src/LinkedList.ts:130](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L130)

___

### delete

▸ **delete**(`item`): `boolean`

Deletes specified item from the Queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Overrides

[SortedSet](SortedSet.md).[delete](SortedSet.md#delete)

#### Defined in

[src/PriorityQueue.ts:77](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L77)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

Removes specified node from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `LNode`<`T`\> |

#### Returns

`boolean`

#### Inherited from

[SortedSet](SortedSet.md).[deleteNode](SortedSet.md#deletenode)

#### Defined in

[src/LinkedList.ts:378](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L378)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

Takes item from the front of the Queue

#### Returns

`undefined` \| `T`

#### Defined in

[src/PriorityQueue.ts:66](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L66)

___

### enqueue

▸ **enqueue**(`item`, `priority?`, `c?`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Appends item onto the Queue at the specified priority

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `5` |
| `c` | `number` | `++this._count` |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Defined in

[src/PriorityQueue.ts:58](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L58)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.md).[entries](SortedSet.md#entries)

#### Defined in

[src/LinkedList.ts:199](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L199)

___

### filter

▸ **filter**(`predicate`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `boolean`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.md).[filter](SortedSet.md#filter)

#### Defined in

[src/LinkedList.ts:297](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L297)

▸ **filter**<`This`\>(`predicate`, `thisArg`): `T`[]

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.md).[filter](SortedSet.md#filter)

#### Defined in

[src/LinkedList.ts:298](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L298)

___

### find

▸ **find**(`predicate`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `boolean`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.md).[find](SortedSet.md#find)

#### Defined in

[src/LinkedList.ts:271](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L271)

▸ **find**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.md).[find](SortedSet.md#find)

#### Defined in

[src/LinkedList.ts:272](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L272)

___

### findRight

▸ **findRight**(`predicate`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `boolean`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.md).[findRight](SortedSet.md#findright)

#### Defined in

[src/LinkedSet.ts:94](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L94)

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.md).[findRight](SortedSet.md#findright)

#### Defined in

[src/LinkedSet.ts:95](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L95)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `void`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |

#### Returns

`void`

#### Inherited from

[SortedSet](SortedSet.md).[forEach](SortedSet.md#foreach)

#### Defined in

[src/LinkedList.ts:229](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L229)

▸ **forEach**<`ThisArg`\>(`cb`, `thisArg?`): `void`

#### Type parameters

| Name |
| :------ |
| `ThisArg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `thisArg?` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[SortedSet](SortedSet.md).[forEach](SortedSet.md#foreach)

#### Defined in

[src/LinkedList.ts:230](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L230)

___

### has

▸ **has**(`item`): `boolean`

Determines if set contains specified item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Inherited from

[SortedSet](SortedSet.md).[has](SortedSet.md#has)

#### Defined in

[src/LinkedSet.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L36)

___

### headNode

▸ **headNode**(`node`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[headNode](SortedSet.md#headnode)

#### Defined in

[src/LinkedList.ts:143](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L143)

___

### insert

▸ **insert**(`item`, `priority?`, `c?`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Inserts item into the front of the specified priority order

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `-1` |
| `c` | `number` | `--this._rCount` |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.md).[insert](SortedSet.md#insert)

#### Defined in

[src/PriorityQueue.ts:53](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L53)

___

### insertNode

▸ **insertNode**(`node`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[insertNode](SortedSet.md#insertnode)

#### Defined in

[src/LinkedSet.ts:51](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L51)

___

### join

▸ **join**(`separator?`): `string`

Joins list elements into one string (same signature as Array.prototype.join)

#### Parameters

| Name | Type |
| :------ | :------ |
| `separator?` | `string` |

#### Returns

`string`

#### Inherited from

[SortedSet](SortedSet.md).[join](SortedSet.md#join)

#### Defined in

[src/LinkedList.ts:349](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L349)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.md).[keys](SortedSet.md#keys)

#### Defined in

[src/LinkedList.ts:209](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L209)

___

### map

▸ **map**<`RT`\>(`cb`): `RT`[]

Maps set items into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |

#### Returns

`RT`[]

#### Inherited from

[SortedSet](SortedSet.md).[map](SortedSet.md#map)

#### Defined in

[src/LinkedSet.ts:105](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L105)

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SortedSet](SortedSet.md).[map](SortedSet.md#map)

#### Defined in

[src/LinkedSet.ts:106](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L106)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from end of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.md).[pop](SortedSet.md#pop)

#### Defined in

[src/SortedSet.ts:72](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L72)

___

### recycle

▸ **recycle**(): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Moves element from front of list to the end

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[recycle](SortedSet.md#recycle)

#### Defined in

[src/LinkedList.ts:135](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L135)

___

### reduce

▸ **reduce**<`RT`\>(`cb`, `initialValue`): `RT`

Reduces list into specified value (same signature as Array.prototype.reduce)

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[SortedSet](SortedSet.md).[reduce](SortedSet.md#reduce)

#### Defined in

[src/LinkedList.ts:250](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L250)

▸ **reduce**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[SortedSet](SortedSet.md).[reduce](SortedSet.md#reduce)

#### Defined in

[src/LinkedList.ts:251](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L251)

___

### reduceRight

▸ **reduceRight**<`RT`\>(`cb`, `initialValue`): `RT`

Reduces items from the end of the set to the front

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[SortedSet](SortedSet.md).[reduceRight](SortedSet.md#reduceright)

#### Defined in

[src/LinkedSet.ts:78](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L78)

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[SortedSet](SortedSet.md).[reduceRight](SortedSet.md#reduceright)

#### Defined in

[src/LinkedSet.ts:79](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L79)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.md).[reverse](SortedSet.md#reverse)

#### Defined in

[src/LinkedList.ts:219](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L219)

___

### reverseMap

▸ **reverseMap**<`RT`\>(`cb`): `RT`[]

Maps set items from the end of the set to the front into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`PriorityQueue`](PriorityQueue.md)<`T`\>, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |

#### Returns

`RT`[]

#### Inherited from

[SortedSet](SortedSet.md).[reverseMap](SortedSet.md#reversemap)

#### Defined in

[src/LinkedSet.ts:113](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L113)

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SortedSet](SortedSet.md).[reverseMap](SortedSet.md#reversemap)

#### Defined in

[src/LinkedSet.ts:114](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L114)

___

### search

▸ **search**(`compareFunction`, `node?`): `undefined` \| `T`

Searches set using compare function to find first match

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFunction` | (`a`: `T`) => `number` | Takes an item from the set and returns 0 if a match, -1 (<0) if the desired match is lower in the sort order (closer to the front of the list), or 1 (>0) if the desired match is higher (towards the end of the list) |
| `node` | `undefined` \| `TNode`<`T`\> | - |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.md).[search](SortedSet.md#search)

#### Defined in

[src/SortedSet.ts:52](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L52)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.md).[shift](SortedSet.md#shift)

#### Defined in

[src/SortedSet.ts:83](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L83)

___

### tailNode

▸ **tailNode**(`node`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[tailNode](SortedSet.md#tailnode)

#### Defined in

[src/LinkedList.ts:158](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L158)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.md).[toArray](SortedSet.md#toarray)

#### Defined in

[src/LinkedList.ts:182](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L182)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.md).[toJSON](SortedSet.md#tojson)

#### Defined in

[src/LinkedList.ts:389](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L389)

___

### unshift

▸ **unshift**(`item`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.md).[unshift](SortedSet.md#unshift)

#### Defined in

[src/LinkedList.ts:120](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L120)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.md).[values](SortedSet.md#values)

#### Defined in

[src/LinkedList.ts:194](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L194)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Static factory method as alias for class constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.md).[create](SortedSet.md#create)

#### Defined in

[src/PriorityQueue.ts:17](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L17)

___

### from

▸ `Static` **from**<`T`\>(`iterable`): [`PriorityQueue`](PriorityQueue.md)<`T`\>

Same as LinkedList.create() but requires constructor arg

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.md).[from](SortedSet.md#from)

#### Defined in

[src/PriorityQueue.ts:22](https://github.com/zimmed/prefab/blob/c08eef0/src/PriorityQueue.ts#L22)
