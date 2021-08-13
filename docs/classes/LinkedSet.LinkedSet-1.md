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

- [[toStringTag]](LinkedSet.LinkedSet-1.md#[tostringtag])
- [\_head](LinkedSet.LinkedSet-1.md#_head)
- [\_map](LinkedSet.LinkedSet-1.md#_map)
- [\_tail](LinkedSet.LinkedSet-1.md#_tail)

### Accessors

- [head](LinkedSet.LinkedSet-1.md#head)
- [size](LinkedSet.LinkedSet-1.md#size)
- [tail](LinkedSet.LinkedSet-1.md#tail)

### Methods

- [[iterator]](LinkedSet.LinkedSet-1.md#[iterator])
- [\_findNode](LinkedSet.LinkedSet-1.md#_findnode)
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

• **new LinkedSet**<`T`, `N`\>(`iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[constructor](LinkedList.LinkedList-1.md#constructor)

#### Defined in

LinkedList.ts:37

## Properties

### [toStringTag]

• **[toStringTag]**: `string` = `'LinkedSet'`

#### Overrides

LinkedList.\_\_@toStringTag@24

#### Defined in

LinkedSet.ts:9

___

### \_head

• `Optional` **\_head**: `N`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[_head](LinkedList.LinkedList-1.md#_head)

#### Defined in

LinkedSet.ts:5

___

### \_map

• **\_map**: `Map`<`T`, `N`\>

#### Defined in

LinkedSet.ts:7

___

### \_tail

• `Optional` **\_tail**: `N`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[_tail](LinkedList.LinkedList-1.md#_tail)

#### Defined in

LinkedSet.ts:6

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

[LinkedList](LinkedList.LinkedList-1.md).[[iterator]](LinkedList.LinkedList-1.md#[iterator])

#### Defined in

LinkedList.ts:185

___

### \_findNode

▸ `Private` **_findNode**(`item`): `undefined` \| `N`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`undefined` \| `N`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[_findNode](LinkedList.LinkedList-1.md#_findnode)

#### Defined in

LinkedList.ts:291

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

LinkedSet.ts:33

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

LinkedSet.ts:46

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

LinkedList.ts:74

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[clear](LinkedList.LinkedList-1.md#clear)

#### Defined in

LinkedSet.ts:51

___

### cycle

▸ **cycle**(): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[cycle](LinkedList.LinkedList-1.md#cycle)

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

[LinkedList](LinkedList.LinkedList-1.md).[delete](LinkedList.LinkedList-1.md#delete)

#### Defined in

LinkedSet.ts:56

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

LinkedList.ts:133

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[entries](LinkedList.LinkedList-1.md#entries)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[filter](LinkedList.LinkedList-1.md#filter)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[find](LinkedList.LinkedList-1.md#find)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[forEach](LinkedList.LinkedList-1.md#foreach)

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

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[has](LinkedList.LinkedList-1.md#has)

#### Defined in

LinkedSet.ts:29

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

LinkedList.ts:86

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

LinkedSet.ts:37

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

[LinkedList](LinkedList.LinkedList-1.md).[join](LinkedList.LinkedList-1.md#join)

#### Defined in

LinkedList.ts:286

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[keys](LinkedList.LinkedList-1.md#keys)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[map](LinkedList.LinkedList-1.md#map)

#### Defined in

LinkedSet.ts:76

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[pop](LinkedList.LinkedList-1.md#pop)

#### Defined in

LinkedSet.ts:15

___

### recycle

▸ **recycle**(): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[recycle](LinkedList.LinkedList-1.md#recycle)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[reduce](LinkedList.LinkedList-1.md#reduce)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Defined in

LinkedSet.ts:66

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[reverse](LinkedList.LinkedList-1.md#reverse)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

LinkedSet.ts:81

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[shift](LinkedList.LinkedList-1.md#shift)

#### Defined in

LinkedSet.ts:22

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

LinkedList.ts:95

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[toArray](LinkedList.LinkedList-1.md#toarray)

#### Defined in

LinkedList.ts:163

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[toJSON](LinkedList.LinkedList-1.md#tojson)

#### Defined in

LinkedSet.ts:86

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[values](LinkedList.LinkedList-1.md#values)

#### Defined in

LinkedList.ts:150

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

LinkedList.ts:17
