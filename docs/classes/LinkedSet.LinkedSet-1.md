[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [LinkedSet](../modules/LinkedSet.md) / LinkedSet

# Class: LinkedSet<T, N\>

[LinkedSet](../modules/LinkedSet.md).LinkedSet

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

## Hierarchy

- [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

  ↳ **`LinkedSet`**

  ↳↳ [`SortedSet`](SortedSet.SortedSet-1.md)

  ↳↳ [`UniQueue`](UniQueue.UniQueue-1.md)

## Table of contents

### Constructors

- [constructor](LinkedSet.LinkedSet-1.md#constructor)

### Properties

- [\_head](LinkedSet.LinkedSet-1.md#_head)
- [\_map](LinkedSet.LinkedSet-1.md#_map)
- [\_tail](LinkedSet.LinkedSet-1.md#_tail)

### Accessors

- [head](LinkedSet.LinkedSet-1.md#head)
- [size](LinkedSet.LinkedSet-1.md#size)
- [tail](LinkedSet.LinkedSet-1.md#tail)

### Methods

- [[iterator]](LinkedSet.LinkedSet-1.md#[iterator])
- [add](LinkedSet.LinkedSet-1.md#add)
- [addNode](LinkedSet.LinkedSet-1.md#addnode)
- [append](LinkedSet.LinkedSet-1.md#append)
- [clear](LinkedSet.LinkedSet-1.md#clear)
- [cycle](LinkedSet.LinkedSet-1.md#cycle)
- [delete](LinkedSet.LinkedSet-1.md#delete)
- [deleteNode](LinkedSet.LinkedSet-1.md#deletenode)
- [entries](LinkedSet.LinkedSet-1.md#entries)
- [filter](LinkedSet.LinkedSet-1.md#filter)
- [find](LinkedSet.LinkedSet-1.md#find)
- [findRight](LinkedSet.LinkedSet-1.md#findright)
- [forEach](LinkedSet.LinkedSet-1.md#foreach)
- [has](LinkedSet.LinkedSet-1.md#has)
- [headNode](LinkedSet.LinkedSet-1.md#headnode)
- [insert](LinkedSet.LinkedSet-1.md#insert)
- [insertNode](LinkedSet.LinkedSet-1.md#insertnode)
- [join](LinkedSet.LinkedSet-1.md#join)
- [keys](LinkedSet.LinkedSet-1.md#keys)
- [map](LinkedSet.LinkedSet-1.md#map)
- [pop](LinkedSet.LinkedSet-1.md#pop)
- [recycle](LinkedSet.LinkedSet-1.md#recycle)
- [reduce](LinkedSet.LinkedSet-1.md#reduce)
- [reduceRight](LinkedSet.LinkedSet-1.md#reduceright)
- [reverse](LinkedSet.LinkedSet-1.md#reverse)
- [reverseMap](LinkedSet.LinkedSet-1.md#reversemap)
- [shift](LinkedSet.LinkedSet-1.md#shift)
- [tailNode](LinkedSet.LinkedSet-1.md#tailnode)
- [toArray](LinkedSet.LinkedSet-1.md#toarray)
- [toJSON](LinkedSet.LinkedSet-1.md#tojson)
- [values](LinkedSet.LinkedSet-1.md#values)
- [from](LinkedSet.LinkedSet-1.md#from)

## Constructors

### constructor

• **new LinkedSet**<`T`, `N`\>(`iterable?`, `init?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `init?` | `object` |

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[constructor](LinkedList.LinkedList-1.md#constructor)

#### Defined in

[LinkedList.ts:48](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L48)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[_head](LinkedList.LinkedList-1.md#_head)

#### Defined in

[LinkedList.ts:24](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L24)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `N`\>

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[_tail](LinkedList.LinkedList-1.md#_tail)

#### Defined in

[LinkedList.ts:27](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L27)

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

[LinkedList](LinkedList.LinkedList-1.md).[[iterator]](LinkedList.LinkedList-1.md#[iterator])

#### Defined in

[LinkedList.ts:210](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L210)

___

### add

▸ **add**(`item`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[add](LinkedList.LinkedList-1.md#add)

#### Defined in

[LinkedSet.ts:31](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L31)

___

### addNode

▸ **addNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[addNode](LinkedList.LinkedList-1.md#addnode)

#### Defined in

[LinkedSet.ts:44](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L44)

___

### append

▸ **append**(`item`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[append](LinkedList.LinkedList-1.md#append)

#### Defined in

[LinkedList.ts:95](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L95)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[clear](LinkedList.LinkedList-1.md#clear)

#### Defined in

[LinkedSet.ts:49](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L49)

___

### cycle

▸ **cycle**(): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[cycle](LinkedList.LinkedList-1.md#cycle)

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

[LinkedList](LinkedList.LinkedList-1.md).[delete](LinkedList.LinkedList-1.md#delete)

#### Defined in

[LinkedSet.ts:54](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L54)

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

[LinkedList](LinkedList.LinkedList-1.md).[deleteNode](LinkedList.LinkedList-1.md#deletenode)

#### Defined in

[LinkedList.ts:158](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L158)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[entries](LinkedList.LinkedList-1.md#entries)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[filter](LinkedList.LinkedList-1.md#filter)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[find](LinkedList.LinkedList-1.md#find)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[forEach](LinkedList.LinkedList-1.md#foreach)

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

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[has](LinkedList.LinkedList-1.md#has)

#### Defined in

[LinkedSet.ts:27](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L27)

___

### headNode

▸ **headNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[headNode](LinkedList.LinkedList-1.md#headnode)

#### Defined in

[LinkedList.ts:107](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L107)

___

### insert

▸ **insert**(`item`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[insert](LinkedList.LinkedList-1.md#insert)

#### Defined in

[LinkedSet.ts:35](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L35)

___

### insertNode

▸ **insertNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[insertNode](LinkedList.LinkedList-1.md#insertnode)

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

[LinkedList](LinkedList.LinkedList-1.md).[join](LinkedList.LinkedList-1.md#join)

#### Defined in

[LinkedList.ts:311](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L311)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[keys](LinkedList.LinkedList-1.md#keys)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[map](LinkedList.LinkedList-1.md#map)

#### Defined in

[LinkedSet.ts:78](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L78)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[pop](LinkedList.LinkedList-1.md#pop)

#### Defined in

[LinkedSet.ts:13](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L13)

___

### recycle

▸ **recycle**(): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[recycle](LinkedList.LinkedList-1.md#recycle)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[reduce](LinkedList.LinkedList-1.md#reduce)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Defined in

[LinkedSet.ts:64](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L64)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[reverse](LinkedList.LinkedList-1.md#reverse)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[LinkedSet.ts:83](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L83)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[shift](LinkedList.LinkedList-1.md#shift)

#### Defined in

[LinkedSet.ts:20](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedSet.ts#L20)

___

### tailNode

▸ **tailNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[tailNode](LinkedList.LinkedList-1.md#tailnode)

#### Defined in

[LinkedList.ts:118](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L118)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[toArray](LinkedList.LinkedList-1.md#toarray)

#### Defined in

[LinkedList.ts:188](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L188)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[toJSON](LinkedList.LinkedList-1.md#tojson)

#### Defined in

[LinkedList.ts:307](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L307)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[values](LinkedList.LinkedList-1.md#values)

#### Defined in

[LinkedList.ts:175](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L175)

___

### from

▸ `Static` **from**<`T`\>(`iterable`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[from](LinkedList.LinkedList-1.md#from)

#### Defined in

[LinkedList.ts:19](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L19)
