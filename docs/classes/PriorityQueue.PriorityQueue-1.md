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

- [[toStringTag]](PriorityQueue.PriorityQueue-1.md#[tostringtag])
- [\_cMap](PriorityQueue.PriorityQueue-1.md#_cmap)
- [\_cmp](PriorityQueue.PriorityQueue-1.md#_cmp)
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
- [\_findNode](PriorityQueue.PriorityQueue-1.md#_findnode)
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

PriorityQueue.ts:15

## Properties

### [toStringTag]

• **[toStringTag]**: `string` = `'PriorityQueue'`

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[[toStringTag]](SortedSet.SortedSet-1.md#[tostringtag])

#### Defined in

PriorityQueue.ts:13

___

### \_cMap

• **\_cMap**: `Map`<`T`, `number`\>

#### Defined in

PriorityQueue.ts:11

___

### \_cmp

• **\_cmp**: [`Sort`](../modules/SortedSet.md#sort)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_cmp](SortedSet.SortedSet-1.md#_cmp)

#### Defined in

SortedSet.ts:22

___

### \_count

• **\_count**: `number` = `0`

#### Defined in

PriorityQueue.ts:9

___

### \_head

• `Optional` **\_head**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_head](SortedSet.SortedSet-1.md#_head)

#### Defined in

SortedSet.ts:23

___

### \_map

• **\_map**: `Map`<`T`, `LNode`<`T`\>\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_map](SortedSet.SortedSet-1.md#_map)

#### Defined in

SortedSet.ts:25

___

### \_pMap

• **\_pMap**: `Map`<`T`, `number`\>

#### Defined in

PriorityQueue.ts:10

___

### \_rCount

• **\_rCount**: `number` = `0`

#### Defined in

PriorityQueue.ts:8

___

### \_tail

• `Optional` **\_tail**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_tail](SortedSet.SortedSet-1.md#_tail)

#### Defined in

SortedSet.ts:24

___

### \_tree

• `Optional` **\_tree**: `TNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_tree](SortedSet.SortedSet-1.md#_tree)

#### Defined in

SortedSet.ts:21

## Accessors

### head

• `get` **head**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

LinkedList.ts:26

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

LinkedSet.ts:11

___

### tail

• `get` **tail**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

LinkedList.ts:30

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[[iterator]](SortedSet.SortedSet-1.md#[iterator])

#### Defined in

LinkedList.ts:185

___

### \_findNode

▸ `Private` **_findNode**(`item`): `undefined` \| `LNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`undefined` \| `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_findNode](SortedSet.SortedSet-1.md#_findnode)

#### Defined in

LinkedList.ts:291

___

### add

▸ **add**(`item`, `priority?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `10` |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[add](SortedSet.SortedSet-1.md#add)

#### Defined in

PriorityQueue.ts:25

___

### addNode

▸ **addNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[addNode](SortedSet.SortedSet-1.md#addnode)

#### Defined in

LinkedSet.ts:46

___

### append

▸ **append**(`item`, `priority?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

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

PriorityQueue.ts:29

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[clear](SortedSet.SortedSet-1.md#clear)

#### Defined in

SortedSet.ts:76

___

### cycle

▸ **cycle**(): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[cycle](SortedSet.SortedSet-1.md#cycle)

#### Defined in

LinkedList.ts:78

___

### delete

▸ **delete**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[delete](SortedSet.SortedSet-1.md#delete)

#### Defined in

PriorityQueue.ts:54

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `LNode`<`T`\> |

#### Returns

`boolean`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[deleteNode](SortedSet.SortedSet-1.md#deletenode)

#### Defined in

LinkedList.ts:133

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

PriorityQueue.ts:44

___

### enqueue

▸ **enqueue**(`item`, `priority?`, `c?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `priority` | `number` | `5` |
| `c` | `number` | `++this._count` |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Defined in

PriorityQueue.ts:37

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[entries](SortedSet.SortedSet-1.md#entries)

#### Defined in

LinkedList.ts:154

___

### filter

▸ **filter**<`This`\>(`predicate`, `thisArg`): `T`[]

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

LinkedList.ts:242

___

### find

▸ **find**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

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

LinkedList.ts:222

___

### findRight

▸ **findRight**<`This`\>(`cb`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `boolean`, [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[findRight](SortedSet.SortedSet-1.md#findright)

#### Defined in

LinkedSet.ts:71

___

### forEach

▸ **forEach**<`ThisArg`\>(`cb`, `thisArg`): `void`

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

LinkedList.ts:189

___

### has

▸ **has**(`item`): `boolean`

Careful -- O(n)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[has](SortedSet.SortedSet-1.md#has)

#### Defined in

LinkedSet.ts:29

___

### headNode

▸ **headNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[headNode](SortedSet.SortedSet-1.md#headnode)

#### Defined in

LinkedList.ts:86

___

### insert

▸ **insert**(`item`, `priority?`, `c?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

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

PriorityQueue.ts:33

___

### insertNode

▸ **insertNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[insertNode](SortedSet.SortedSet-1.md#insertnode)

#### Defined in

LinkedSet.ts:41

___

### join

▸ **join**(`separator?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `separator?` | `string` |

#### Returns

`string`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[join](SortedSet.SortedSet-1.md#join)

#### Defined in

LinkedList.ts:286

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[keys](SortedSet.SortedSet-1.md#keys)

#### Defined in

LinkedList.ts:167

___

### map

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

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

LinkedSet.ts:76

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[pop](SortedSet.SortedSet-1.md#pop)

#### Defined in

SortedSet.ts:56

___

### recycle

▸ **recycle**(): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[recycle](SortedSet.SortedSet-1.md#recycle)

#### Defined in

LinkedList.ts:82

___

### reduce

▸ **reduce**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

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

LinkedList.ts:204

___

### reduceRight

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

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

LinkedSet.ts:66

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[reverse](SortedSet.SortedSet-1.md#reverse)

#### Defined in

LinkedList.ts:176

___

### reverseMap

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

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

LinkedSet.ts:81

___

### search

▸ **search**(`compareFn`, `node?`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFn` | (`a`: `T`) => `number` |
| `node` | `undefined` \| `TNode`<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[search](SortedSet.SortedSet-1.md#search)

#### Defined in

SortedSet.ts:37

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[shift](SortedSet.SortedSet-1.md#shift)

#### Defined in

SortedSet.ts:66

___

### tailNode

▸ **tailNode**(`node`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[tailNode](SortedSet.SortedSet-1.md#tailnode)

#### Defined in

LinkedList.ts:95

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[toArray](SortedSet.SortedSet-1.md#toarray)

#### Defined in

LinkedList.ts:163

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[toJSON](SortedSet.SortedSet-1.md#tojson)

#### Defined in

LinkedSet.ts:86

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[values](SortedSet.SortedSet-1.md#values)

#### Defined in

LinkedList.ts:150

___

### from

▸ `Static` **from**<`T`\>(`iterable?`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

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

[SortedSet](SortedSet.SortedSet-1.md).[from](SortedSet.SortedSet-1.md#from)

#### Defined in

PriorityQueue.ts:4
