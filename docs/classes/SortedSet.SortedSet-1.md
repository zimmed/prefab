[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [SortedSet](../modules/SortedSet.md) / SortedSet

# Class: SortedSet<T, N\>

[SortedSet](../modules/SortedSet.md).SortedSet

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\>`LNode`<`T`\> |

## Hierarchy

- [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

  ↳ **`SortedSet`**

  ↳↳ [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)

## Table of contents

### Constructors

- [constructor](SortedSet.SortedSet-1.md#constructor)

### Properties

- [\_cmp](SortedSet.SortedSet-1.md#_cmp)
- [\_head](SortedSet.SortedSet-1.md#_head)
- [\_map](SortedSet.SortedSet-1.md#_map)
- [\_tail](SortedSet.SortedSet-1.md#_tail)
- [\_tree](SortedSet.SortedSet-1.md#_tree)

### Accessors

- [head](SortedSet.SortedSet-1.md#head)
- [size](SortedSet.SortedSet-1.md#size)
- [tail](SortedSet.SortedSet-1.md#tail)

### Methods

- [[iterator]](SortedSet.SortedSet-1.md#[iterator])
- [add](SortedSet.SortedSet-1.md#add)
- [addNode](SortedSet.SortedSet-1.md#addnode)
- [append](SortedSet.SortedSet-1.md#append)
- [clear](SortedSet.SortedSet-1.md#clear)
- [cycle](SortedSet.SortedSet-1.md#cycle)
- [delete](SortedSet.SortedSet-1.md#delete)
- [deleteNode](SortedSet.SortedSet-1.md#deletenode)
- [entries](SortedSet.SortedSet-1.md#entries)
- [filter](SortedSet.SortedSet-1.md#filter)
- [find](SortedSet.SortedSet-1.md#find)
- [findRight](SortedSet.SortedSet-1.md#findright)
- [forEach](SortedSet.SortedSet-1.md#foreach)
- [has](SortedSet.SortedSet-1.md#has)
- [headNode](SortedSet.SortedSet-1.md#headnode)
- [insert](SortedSet.SortedSet-1.md#insert)
- [insertNode](SortedSet.SortedSet-1.md#insertnode)
- [join](SortedSet.SortedSet-1.md#join)
- [keys](SortedSet.SortedSet-1.md#keys)
- [map](SortedSet.SortedSet-1.md#map)
- [pop](SortedSet.SortedSet-1.md#pop)
- [recycle](SortedSet.SortedSet-1.md#recycle)
- [reduce](SortedSet.SortedSet-1.md#reduce)
- [reduceRight](SortedSet.SortedSet-1.md#reduceright)
- [reverse](SortedSet.SortedSet-1.md#reverse)
- [reverseMap](SortedSet.SortedSet-1.md#reversemap)
- [search](SortedSet.SortedSet-1.md#search)
- [shift](SortedSet.SortedSet-1.md#shift)
- [tailNode](SortedSet.SortedSet-1.md#tailnode)
- [toArray](SortedSet.SortedSet-1.md#toarray)
- [toJSON](SortedSet.SortedSet-1.md#tojson)
- [values](SortedSet.SortedSet-1.md#values)
- [from](SortedSet.SortedSet-1.md#from)

## Constructors

### constructor

• **new SortedSet**<`T`, `N`\>(`iterable?`, `cmpFn?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\>`LNode`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `cmpFn` | [`Sort`](../modules/SortedSet.md#sort)<`T`, `any`\> |

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[constructor](LinkedSet.LinkedSet-1.md#constructor)

#### Defined in

[SortedSet.ts:31](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L31)

## Properties

### \_cmp

• `Private` `Readonly` **\_cmp**: [`Sort`](../modules/SortedSet.md#sort)<`T`, `any`\>

#### Defined in

[SortedSet.ts:29](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L29)

___

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_head](LinkedSet.LinkedSet-1.md#_head)

#### Defined in

[LinkedList.ts:24](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L24)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_map](LinkedSet.LinkedSet-1.md#_map)

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_tail](LinkedSet.LinkedSet-1.md#_tail)

#### Defined in

[LinkedList.ts:27](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L27)

___

### \_tree

• `Protected` `Optional` **\_tree**: `TNode`<`T`\>

#### Defined in

[SortedSet.ts:26](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L26)

## Accessors

### head

• `get` **head**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:29](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L29)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[LinkedSet.ts:9](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L9)

___

### tail

• `get` **tail**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:32](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L32)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[[iterator]](LinkedSet.LinkedSet-1.md#[iterator])

#### Defined in

[LinkedList.ts:210](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L210)

___

### add

▸ **add**(`item`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[add](LinkedSet.LinkedSet-1.md#add)

#### Defined in

[SortedSet.ts:85](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L85)

___

### addNode

▸ **addNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[addNode](LinkedSet.LinkedSet-1.md#addnode)

#### Defined in

[LinkedSet.ts:44](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L44)

___

### append

▸ **append**(`item`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[append](LinkedSet.LinkedSet-1.md#append)

#### Defined in

[LinkedList.ts:95](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L95)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[clear](LinkedSet.LinkedSet-1.md#clear)

#### Defined in

[SortedSet.ts:77](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L77)

___

### cycle

▸ **cycle**(): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[cycle](LinkedSet.LinkedSet-1.md#cycle)

#### Defined in

[LinkedList.ts:99](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L99)

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

[LinkedSet](LinkedSet.LinkedSet-1.md).[delete](LinkedSet.LinkedSet-1.md#delete)

#### Defined in

[SortedSet.ts:126](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L126)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `N` |

#### Returns

`boolean`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[deleteNode](LinkedSet.LinkedSet-1.md#deletenode)

#### Defined in

[LinkedList.ts:158](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L158)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[entries](LinkedSet.LinkedSet-1.md#entries)

#### Defined in

[LinkedList.ts:179](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L179)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[filter](LinkedSet.LinkedSet-1.md#filter)

#### Defined in

[LinkedList.ts:267](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L267)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[find](LinkedSet.LinkedSet-1.md#find)

#### Defined in

[LinkedList.ts:247](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L247)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[findRight](LinkedSet.LinkedSet-1.md#findright)

#### Defined in

[LinkedSet.ts:73](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L73)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[forEach](LinkedSet.LinkedSet-1.md#foreach)

#### Defined in

[LinkedList.ts:214](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L214)

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

[LinkedSet](LinkedSet.LinkedSet-1.md).[has](LinkedSet.LinkedSet-1.md#has)

#### Defined in

[LinkedSet.ts:27](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L27)

___

### headNode

▸ **headNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[headNode](LinkedSet.LinkedSet-1.md#headnode)

#### Defined in

[LinkedList.ts:107](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L107)

___

### insert

▸ **insert**(`item`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[insert](LinkedSet.LinkedSet-1.md#insert)

#### Defined in

[SortedSet.ts:81](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L81)

___

### insertNode

▸ **insertNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[insertNode](LinkedSet.LinkedSet-1.md#insertnode)

#### Defined in

[LinkedSet.ts:39](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L39)

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

[LinkedSet](LinkedSet.LinkedSet-1.md).[join](LinkedSet.LinkedSet-1.md#join)

#### Defined in

[LinkedList.ts:311](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L311)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[keys](LinkedSet.LinkedSet-1.md#keys)

#### Defined in

[LinkedList.ts:192](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L192)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[map](LinkedSet.LinkedSet-1.md#map)

#### Defined in

[LinkedSet.ts:78](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L78)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[pop](LinkedSet.LinkedSet-1.md#pop)

#### Defined in

[SortedSet.ts:57](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L57)

___

### recycle

▸ **recycle**(): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[recycle](LinkedSet.LinkedSet-1.md#recycle)

#### Defined in

[LinkedList.ts:103](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L103)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reduce](LinkedSet.LinkedSet-1.md#reduce)

#### Defined in

[LinkedList.ts:229](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L229)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reduceRight](LinkedSet.LinkedSet-1.md#reduceright)

#### Defined in

[LinkedSet.ts:64](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L64)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reverse](LinkedSet.LinkedSet-1.md#reverse)

#### Defined in

[LinkedList.ts:201](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L201)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reverseMap](LinkedSet.LinkedSet-1.md#reversemap)

#### Defined in

[LinkedSet.ts:83](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L83)

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

#### Defined in

[SortedSet.ts:38](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L38)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[shift](LinkedSet.LinkedSet-1.md#shift)

#### Defined in

[SortedSet.ts:67](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L67)

___

### tailNode

▸ **tailNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[tailNode](LinkedSet.LinkedSet-1.md#tailnode)

#### Defined in

[LinkedList.ts:118](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L118)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[toArray](LinkedSet.LinkedSet-1.md#toarray)

#### Defined in

[LinkedList.ts:188](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L188)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[toJSON](LinkedSet.LinkedSet-1.md#tojson)

#### Defined in

[LinkedList.ts:307](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L307)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[values](LinkedSet.LinkedSet-1.md#values)

#### Defined in

[LinkedList.ts:175](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L175)

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

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[from](LinkedSet.LinkedSet-1.md#from)

#### Defined in

[SortedSet.ts:18](https://github.com/zimmed/prefab/blob/db84beb/src/SortedSet.ts#L18)
