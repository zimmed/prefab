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

[PriorityQueue.ts:28](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L28)

## Properties

### \_cMap

• `Protected` `Readonly` **\_cMap**: `Map`<`T`, `number`\>

#### Defined in

[PriorityQueue.ts:26](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L26)

___

### \_count

• `Private` **\_count**: `number` = `0`

#### Defined in

[PriorityQueue.ts:20](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L20)

___

### \_head

• `Protected` `Optional` **\_head**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_head](SortedSet.SortedSet-1.md#_head)

#### Defined in

[LinkedList.ts:24](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L24)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `LNode`<`T`\>\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_map](SortedSet.SortedSet-1.md#_map)

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L7)

___

### \_pMap

• `Protected` `Readonly` **\_pMap**: `Map`<`T`, `number`\>

#### Defined in

[PriorityQueue.ts:23](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L23)

___

### \_rCount

• `Private` **\_rCount**: `number` = `0`

#### Defined in

[PriorityQueue.ts:17](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L17)

___

### \_tail

• `Protected` `Optional` **\_tail**: `LNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_tail](SortedSet.SortedSet-1.md#_tail)

#### Defined in

[LinkedList.ts:27](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L27)

___

### \_tree

• `Protected` `Optional` **\_tree**: `TNode`<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[_tree](SortedSet.SortedSet-1.md#_tree)

#### Defined in

[SortedSet.ts:26](https://github.com/zimmed/prefab/blob/26aef1e/src/SortedSet.ts#L26)

## Accessors

### head

• `get` **head**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:29](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L29)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[LinkedSet.ts:9](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L9)

___

### tail

• `get` **tail**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:32](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L32)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[[iterator]](SortedSet.SortedSet-1.md#[iterator])

#### Defined in

[LinkedList.ts:210](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L210)

___

### add

▸ **add**(`item`): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Overrides

[SortedSet](SortedSet.SortedSet-1.md).[add](SortedSet.SortedSet-1.md#add)

#### Defined in

[PriorityQueue.ts:32](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L32)

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

[LinkedSet.ts:44](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L44)

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

[PriorityQueue.ts:36](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L36)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[clear](SortedSet.SortedSet-1.md#clear)

#### Defined in

[SortedSet.ts:77](https://github.com/zimmed/prefab/blob/26aef1e/src/SortedSet.ts#L77)

___

### cycle

▸ **cycle**(): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[cycle](SortedSet.SortedSet-1.md#cycle)

#### Defined in

[LinkedList.ts:99](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L99)

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

[PriorityQueue.ts:61](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L61)

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

[LinkedList.ts:158](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L158)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[PriorityQueue.ts:51](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L51)

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

[PriorityQueue.ts:44](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L44)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[entries](SortedSet.SortedSet-1.md#entries)

#### Defined in

[LinkedList.ts:179](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L179)

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

[LinkedList.ts:267](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L267)

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

[LinkedList.ts:247](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L247)

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

[LinkedSet.ts:73](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L73)

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

[LinkedList.ts:214](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L214)

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

[LinkedSet.ts:27](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L27)

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

[LinkedList.ts:107](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L107)

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

[PriorityQueue.ts:40](https://github.com/zimmed/prefab/blob/26aef1e/src/PriorityQueue.ts#L40)

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

[LinkedSet.ts:39](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L39)

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

[LinkedList.ts:311](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L311)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[keys](SortedSet.SortedSet-1.md#keys)

#### Defined in

[LinkedList.ts:192](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L192)

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

[LinkedSet.ts:78](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L78)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[pop](SortedSet.SortedSet-1.md#pop)

#### Defined in

[SortedSet.ts:57](https://github.com/zimmed/prefab/blob/26aef1e/src/SortedSet.ts#L57)

___

### recycle

▸ **recycle**(): [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Returns

[`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)<`T`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[recycle](SortedSet.SortedSet-1.md#recycle)

#### Defined in

[LinkedList.ts:103](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L103)

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

[LinkedList.ts:229](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L229)

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

[LinkedSet.ts:64](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L64)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[reverse](SortedSet.SortedSet-1.md#reverse)

#### Defined in

[LinkedList.ts:201](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L201)

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

[LinkedSet.ts:83](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedSet.ts#L83)

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

[SortedSet.ts:38](https://github.com/zimmed/prefab/blob/26aef1e/src/SortedSet.ts#L38)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[shift](SortedSet.SortedSet-1.md#shift)

#### Defined in

[SortedSet.ts:67](https://github.com/zimmed/prefab/blob/26aef1e/src/SortedSet.ts#L67)

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

[LinkedList.ts:118](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L118)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[toArray](SortedSet.SortedSet-1.md#toarray)

#### Defined in

[LinkedList.ts:188](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L188)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[toJSON](SortedSet.SortedSet-1.md#tojson)

#### Defined in

[LinkedList.ts:307](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L307)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[values](SortedSet.SortedSet-1.md#values)

#### Defined in

[LinkedList.ts:175](https://github.com/zimmed/prefab/blob/26aef1e/src/LinkedList.ts#L175)

___

### from

▸ `Static` **from**<`T`\>(`iterable?`, `cmpFn?`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `LNode`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `cmpFn?` | [`Sort`](../modules/SortedSet.md#sort)<`T`, `any`\> |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `LNode`<`T`\>\>

#### Inherited from

[SortedSet](SortedSet.SortedSet-1.md).[from](SortedSet.SortedSet-1.md#from)

#### Defined in

[SortedSet.ts:18](https://github.com/zimmed/prefab/blob/26aef1e/src/SortedSet.ts#L18)
