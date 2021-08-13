[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [SizedLinkedList](../modules/SizedLinkedList.md) / SizedLinkedList

# Class: SizedLinkedList<T, N\>

[SizedLinkedList](../modules/SizedLinkedList.md).SizedLinkedList

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

## Hierarchy

- [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

  ↳ **`SizedLinkedList`**

  ↳↳ [`Queue`](Queue.Queue-1.md)

## Table of contents

### Constructors

- [constructor](SizedLinkedList.SizedLinkedList-1.md#constructor)

### Properties

- [[toStringTag]](SizedLinkedList.SizedLinkedList-1.md#[tostringtag])
- [\_head](SizedLinkedList.SizedLinkedList-1.md#_head)
- [\_size](SizedLinkedList.SizedLinkedList-1.md#_size)
- [\_tail](SizedLinkedList.SizedLinkedList-1.md#_tail)

### Accessors

- [head](SizedLinkedList.SizedLinkedList-1.md#head)
- [size](SizedLinkedList.SizedLinkedList-1.md#size)
- [tail](SizedLinkedList.SizedLinkedList-1.md#tail)

### Methods

- [[iterator]](SizedLinkedList.SizedLinkedList-1.md#[iterator])
- [\_findNode](SizedLinkedList.SizedLinkedList-1.md#_findnode)
- [add](SizedLinkedList.SizedLinkedList-1.md#add)
- [addNode](SizedLinkedList.SizedLinkedList-1.md#addnode)
- [append](SizedLinkedList.SizedLinkedList-1.md#append)
- [clear](SizedLinkedList.SizedLinkedList-1.md#clear)
- [cycle](SizedLinkedList.SizedLinkedList-1.md#cycle)
- [delete](SizedLinkedList.SizedLinkedList-1.md#delete)
- [deleteNode](SizedLinkedList.SizedLinkedList-1.md#deletenode)
- [entries](SizedLinkedList.SizedLinkedList-1.md#entries)
- [filter](SizedLinkedList.SizedLinkedList-1.md#filter)
- [find](SizedLinkedList.SizedLinkedList-1.md#find)
- [findRight](SizedLinkedList.SizedLinkedList-1.md#findright)
- [forEach](SizedLinkedList.SizedLinkedList-1.md#foreach)
- [has](SizedLinkedList.SizedLinkedList-1.md#has)
- [headNode](SizedLinkedList.SizedLinkedList-1.md#headnode)
- [insert](SizedLinkedList.SizedLinkedList-1.md#insert)
- [insertNode](SizedLinkedList.SizedLinkedList-1.md#insertnode)
- [join](SizedLinkedList.SizedLinkedList-1.md#join)
- [keys](SizedLinkedList.SizedLinkedList-1.md#keys)
- [map](SizedLinkedList.SizedLinkedList-1.md#map)
- [pop](SizedLinkedList.SizedLinkedList-1.md#pop)
- [recycle](SizedLinkedList.SizedLinkedList-1.md#recycle)
- [reduce](SizedLinkedList.SizedLinkedList-1.md#reduce)
- [reduceRight](SizedLinkedList.SizedLinkedList-1.md#reduceright)
- [reverse](SizedLinkedList.SizedLinkedList-1.md#reverse)
- [reverseMap](SizedLinkedList.SizedLinkedList-1.md#reversemap)
- [shift](SizedLinkedList.SizedLinkedList-1.md#shift)
- [tailNode](SizedLinkedList.SizedLinkedList-1.md#tailnode)
- [toArray](SizedLinkedList.SizedLinkedList-1.md#toarray)
- [toJSON](SizedLinkedList.SizedLinkedList-1.md#tojson)
- [values](SizedLinkedList.SizedLinkedList-1.md#values)
- [from](SizedLinkedList.SizedLinkedList-1.md#from)

## Constructors

### constructor

• **new SizedLinkedList**<`T`, `N`\>(`iterable?`)

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

• **[toStringTag]**: `string` = `'SizedLinkedList'`

#### Overrides

LinkedList.\_\_@toStringTag@24

#### Defined in

SizedLinkedList.ts:10

___

### \_head

• `Optional` `Private` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[_head](LinkedList.LinkedList-1.md#_head)

#### Defined in

LinkedList.ts:22

___

### \_size

• **\_size**: `number` = `0`

#### Defined in

SizedLinkedList.ts:4

___

### \_tail

• `Optional` `Private` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[_tail](LinkedList.LinkedList-1.md#_tail)

#### Defined in

LinkedList.ts:24

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

SizedLinkedList.ts:6

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

▸ **add**(`item`): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[add](LinkedList.LinkedList-1.md#add)

#### Defined in

LinkedList.ts:124

___

### addNode

▸ **addNode**(`node`): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[addNode](LinkedList.LinkedList-1.md#addnode)

#### Defined in

SizedLinkedList.ts:31

___

### append

▸ **append**(`item`): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

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

SizedLinkedList.ts:36

___

### cycle

▸ **cycle**(): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

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

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[delete](LinkedList.LinkedList-1.md#delete)

#### Defined in

LinkedList.ts:146

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `N` |

#### Returns

`boolean`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[deleteNode](LinkedList.LinkedList-1.md#deletenode)

#### Defined in

SizedLinkedList.ts:41

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[find](LinkedList.LinkedList-1.md#find)

#### Defined in

LinkedList.ts:222

___

### findRight

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Defined in

SizedLinkedList.ts:67

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
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

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[has](LinkedList.LinkedList-1.md#has)

#### Defined in

LinkedList.ts:70

___

### headNode

▸ **headNode**(`node`): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[headNode](LinkedList.LinkedList-1.md#headnode)

#### Defined in

LinkedList.ts:86

___

### insert

▸ **insert**(`item`): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[insert](LinkedList.LinkedList-1.md#insert)

#### Defined in

LinkedList.ts:120

___

### insertNode

▸ **insertNode**(`node`): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[insertNode](LinkedList.LinkedList-1.md#insertnode)

#### Defined in

SizedLinkedList.ts:26

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[map](LinkedList.LinkedList-1.md#map)

#### Defined in

SizedLinkedList.ts:87

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[pop](LinkedList.LinkedList-1.md#pop)

#### Defined in

SizedLinkedList.ts:12

___

### recycle

▸ **recycle**(): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Defined in

SizedLinkedList.ts:49

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

SizedLinkedList.ts:104

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[shift](LinkedList.LinkedList-1.md#shift)

#### Defined in

SizedLinkedList.ts:19

___

### tailNode

▸ **tailNode**(`node`): [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`, `N`\>

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

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[toJSON](LinkedList.LinkedList-1.md#tojson)

#### Defined in

LinkedList.ts:282

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
