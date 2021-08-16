[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [PriorityQueue](../modules/PriorityQueue.md) / PriorityQueue

# Class: PriorityQueue<T\>

[PriorityQueue](../modules/PriorityQueue.md).PriorityQueue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SortedSet`](SortedSet.SortedSet-1.md)<`T`\>

  ↳ **`PriorityQueue`**

## Table of contents

### Constructors

- [constructor](PriorityQueue.PriorityQueue-1.md#constructor)

### Properties

- [\_cMap](PriorityQueue.PriorityQueue-1.md#_cmap)
- [\_count](PriorityQueue.PriorityQueue-1.md#_count)
- [\_head](PriorityQueue.PriorityQueue-1.md#_head)
- [\_map](PriorityQueue.PriorityQueue-1.md#_map)
- [\_pMap](PriorityQueue.PriorityQueue-1.md#_pmap)
- [\_rCount](PriorityQueue.PriorityQueue-1.md#_rcount)
- [\_tail](PriorityQueue.PriorityQueue-1.md#_tail)
- [\_tree](PriorityQueue.PriorityQueue-1.md#_tree)

### Accessors

- [head](PriorityQueue.PriorityQueue-1.md#head)
- [size](PriorityQueue.PriorityQueue-1.md#size)
- [tail](PriorityQueue.PriorityQueue-1.md#tail)

### Methods

- [[iterator]](PriorityQueue.PriorityQueue-1.md#[iterator])
- [add](PriorityQueue.PriorityQueue-1.md#add)
- [addNode](PriorityQueue.PriorityQueue-1.md#addnode)
- [append](PriorityQueue.PriorityQueue-1.md#append)
- [clear](PriorityQueue.PriorityQueue-1.md#clear)
- [cycle](PriorityQueue.PriorityQueue-1.md#cycle)
- [delete](PriorityQueue.PriorityQueue-1.md#delete)
- [deleteNode](PriorityQueue.PriorityQueue-1.md#deletenode)
- [dequeue](PriorityQueue.PriorityQueue-1.md#dequeue)
- [enqueue](PriorityQueue.PriorityQueue-1.md#enqueue)
- [entries](PriorityQueue.PriorityQueue-1.md#entries)
- [filter](PriorityQueue.PriorityQueue-1.md#filter)
- [find](PriorityQueue.PriorityQueue-1.md#find)
- [findRight](PriorityQueue.PriorityQueue-1.md#findright)
- [forEach](PriorityQueue.PriorityQueue-1.md#foreach)
- [has](PriorityQueue.PriorityQueue-1.md#has)
- [headNode](PriorityQueue.PriorityQueue-1.md#headnode)
- [insert](PriorityQueue.PriorityQueue-1.md#insert)
- [insertNode](PriorityQueue.PriorityQueue-1.md#insertnode)
- [join](PriorityQueue.PriorityQueue-1.md#join)
- [keys](PriorityQueue.PriorityQueue-1.md#keys)
- [map](PriorityQueue.PriorityQueue-1.md#map)
- [pop](PriorityQueue.PriorityQueue-1.md#pop)
- [recycle](PriorityQueue.PriorityQueue-1.md#recycle)
- [reduce](PriorityQueue.PriorityQueue-1.md#reduce)
- [reduceRight](PriorityQueue.PriorityQueue-1.md#reduceright)
- [reverse](PriorityQueue.PriorityQueue-1.md#reverse)
- [reverseMap](PriorityQueue.PriorityQueue-1.md#reversemap)
- [search](PriorityQueue.PriorityQueue-1.md#search)
- [shift](PriorityQueue.PriorityQueue-1.md#shift)
- [tailNode](PriorityQueue.PriorityQueue-1.md#tailnode)
- [toArray](PriorityQueue.PriorityQueue-1.md#toarray)
- [toJSON](PriorityQueue.PriorityQueue-1.md#tojson)
- [values](PriorityQueue.PriorityQueue-1.md#values)
- [create](PriorityQueue.PriorityQueue-1.md#create)
- [from](PriorityQueue.PriorityQueue-1.md#from)

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

[SortedSet](SortedSet.SortedSet-1.md).[constructor](SortedSet.SortedSet-1.md#constructor)

#### Defined in

[PriorityQueue.ts:38](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L38)

## Properties

### \_cMap

• `Protected` `Readonly` **\_cMap**: `Map`<`T`, `number`\>

#### Defined in

[PriorityQueue.ts:36](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L36)

___

### \_count

• `Private` **\_count**: `number` = `0`

#### Defined in

[PriorityQueue.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L30)

___

### \_head

• `Protected` `Optional` **\_head**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_head](SortedSet.SortedSet-1.md#_head)

#### Defined in

[LinkedList.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `LNode`<`T`\>\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_map](SortedSet.SortedSet-1.md#_map)

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L7)

___

### \_pMap

• `Protected` `Readonly` **\_pMap**: `Map`<`T`, `number`\>

#### Defined in

[PriorityQueue.ts:33](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L33)

___

### \_rCount

• `Private` **\_rCount**: `number` = `0`

#### Defined in

[PriorityQueue.ts:27](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L27)

___

### \_tail

• `Protected` `Optional` **\_tail**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_tail](SortedSet.SortedSet-1.md#_tail)

#### Defined in

[LinkedList.ts:33](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L33)

___

### \_tree

• `Protected` `Optional` **\_tree**: `TNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_tree](SortedSet.SortedSet-1.md#_tree)

#### Defined in

[SortedSet.ts:35](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L35)

## Accessors

### head

• `get` **head**(): `undefined` \| `N`

Head of the list

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:36](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L36)

___

### size

• `get` **size**(): `number`

Current size of set

#### Returns

`number`

#### Defined in

[LinkedSet.ts:10](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L10)

___

### tail

• `get` **tail**(): `undefined` \| `N`

Tail of the list

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:40](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[[iterator]](SortedSet.SortedSet-1.md#[iterator])

#### Defined in

[LinkedList.ts:360](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L360)

___

### add

▸ **add**(`item`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Adds item into the Queue with priority=5

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[add](SortedSet.SortedSet-1.md#add)

#### Defined in

[PriorityQueue.ts:43](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L43)

___

### addNode

▸ **addNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[addNode](SortedSet.SortedSet-1.md#addnode)

#### Defined in

[LinkedSet.ts:52](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L52)

___

### append

▸ **append**(`item`, `priority?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Appends item onto the Queue with priority=10

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `10` |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[append](SortedSet.SortedSet-1.md#append)

#### Defined in

[PriorityQueue.ts:48](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L48)

___

### clear

▸ **clear**(): `void`

Clears the set

#### Returns

`void`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[clear](SortedSet.SortedSet-1.md#clear)

#### Defined in

[SortedSet.ts:94](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L94)

___

### cycle

▸ **cycle**(): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Moves element from end of list to the front

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[cycle](SortedSet.SortedSet-1.md#cycle)

#### Defined in

[LinkedList.ts:125](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L125)

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

[SortedSet](SortedSet.SortedSet-1.md).[delete](SortedSet.SortedSet-1.md#delete)

#### Defined in

[PriorityQueue.ts:77](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L77)

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

[SortedSet](SortedSet.SortedSet-1.md).[deleteNode](SortedSet.SortedSet-1.md#deletenode)

#### Defined in

[LinkedList.ts:343](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L343)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

Takes item from the front of the Queue

#### Returns

`undefined` \| `T`

#### Defined in

[PriorityQueue.ts:66](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L66)

___

### enqueue

▸ **enqueue**(`item`, `priority?`, `c?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Appends item onto the Queue at the specified priority

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `5` |
| `c` | `number` | `++this._count` |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Defined in

[PriorityQueue.ts:58](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L58)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[entries](SortedSet.SortedSet-1.md#entries)

#### Defined in

[LinkedList.ts:186](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L186)

___

### filter

▸ **filter**<`This`\>(`predicate`, `thisArg`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[filter](SortedSet.SortedSet-1.md#filter)

#### Defined in

[LinkedList.ts:272](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L272)

___

### find

▸ **find**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[find](SortedSet.SortedSet-1.md#find)

#### Defined in

[LinkedList.ts:251](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L251)

___

### findRight

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the set

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[findRight](SortedSet.SortedSet-1.md#findright)

#### Defined in

[LinkedSet.ts:85](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L85)

___

### forEach

▸ **forEach**<`ThisArg`\>(`cb`, `thisArg`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Type parameters

| Name |
| :------ |
| `ThisArg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[forEach](SortedSet.SortedSet-1.md#foreach)

#### Defined in

[LinkedList.ts:216](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L216)

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

[SortedSet](SortedSet.SortedSet-1.md).[has](SortedSet.SortedSet-1.md#has)

#### Defined in

[LinkedSet.ts:31](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L31)

___

### headNode

▸ **headNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[headNode](SortedSet.SortedSet-1.md#headnode)

#### Defined in

[LinkedList.ts:138](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L138)

___

### insert

▸ **insert**(`item`, `priority?`, `c?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Inserts item into the front of the specified priority order

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `-1` |
| `c` | `number` | `--this._rCount` |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[insert](SortedSet.SortedSet-1.md#insert)

#### Defined in

[PriorityQueue.ts:53](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L53)

___

### insertNode

▸ **insertNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[insertNode](SortedSet.SortedSet-1.md#insertnode)

#### Defined in

[LinkedSet.ts:46](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L46)

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

[SortedSet](SortedSet.SortedSet-1.md).[join](SortedSet.SortedSet-1.md#join)

#### Defined in

[LinkedList.ts:314](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L314)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[keys](SortedSet.SortedSet-1.md#keys)

#### Defined in

[LinkedList.ts:196](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L196)

___

### map

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

Maps set items into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[map](SortedSet.SortedSet-1.md#map)

#### Defined in

[LinkedSet.ts:94](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L94)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from end of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[pop](SortedSet.SortedSet-1.md#pop)

#### Defined in

[SortedSet.ts:72](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L72)

___

### recycle

▸ **recycle**(): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Moves element from front of list to the end

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[recycle](SortedSet.SortedSet-1.md#recycle)

#### Defined in

[LinkedList.ts:130](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L130)

___

### reduce

▸ **reduce**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

Reduces list into specified value (same signature as Array.prototype.reduce)

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[reduce](SortedSet.SortedSet-1.md#reduce)

#### Defined in

[LinkedList.ts:232](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L232)

___

### reduceRight

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

Reduces items from the end of the set to the front

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[reduceRight](SortedSet.SortedSet-1.md#reduceright)

#### Defined in

[LinkedSet.ts:75](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L75)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[reverse](SortedSet.SortedSet-1.md#reverse)

#### Defined in

[LinkedList.ts:206](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L206)

___

### reverseMap

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

Maps set items from the end of the set to the front into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[reverseMap](SortedSet.SortedSet-1.md#reversemap)

#### Defined in

[LinkedSet.ts:100](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L100)

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

[SortedSet](SortedSet.SortedSet-1.md).[search](SortedSet.SortedSet-1.md#search)

#### Defined in

[SortedSet.ts:52](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L52)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[shift](SortedSet.SortedSet-1.md#shift)

#### Defined in

[SortedSet.ts:83](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L83)

___

### tailNode

▸ **tailNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[tailNode](SortedSet.SortedSet-1.md#tailnode)

#### Defined in

[LinkedList.ts:153](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L153)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[toArray](SortedSet.SortedSet-1.md#toarray)

#### Defined in

[LinkedList.ts:176](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L176)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[toJSON](SortedSet.SortedSet-1.md#tojson)

#### Defined in

[LinkedList.ts:356](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L356)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[values](SortedSet.SortedSet-1.md#values)

#### Defined in

[LinkedList.ts:181](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L181)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

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

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[create](SortedSet.SortedSet-1.md#create)

#### Defined in

[PriorityQueue.ts:17](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L17)

___

### from

▸ `Static` **from**<`T`\>(`iterable`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

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

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[from](SortedSet.SortedSet-1.md#from)

#### Defined in

[PriorityQueue.ts:22](https://github.com/zimmed/prefab/blob/5b06828/src/PriorityQueue.ts#L22)
