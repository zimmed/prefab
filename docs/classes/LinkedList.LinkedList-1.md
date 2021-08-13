[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [LinkedList](../modules/LinkedList.md) / LinkedList

# Class: LinkedList<T, N\>

[LinkedList](../modules/LinkedList.md).LinkedList

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

## Hierarchy

- **`LinkedList`**

  ↳ [`LinkedSet`](LinkedSet.LinkedSet-1.md)

  ↳ [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)

## Table of contents

### Constructors

- [constructor](LinkedList.LinkedList-1.md#constructor)

### Properties

- [\_head](LinkedList.LinkedList-1.md#_head)
- [\_tail](LinkedList.LinkedList-1.md#_tail)

### Accessors

- [head](LinkedList.LinkedList-1.md#head)
- [tail](LinkedList.LinkedList-1.md#tail)

### Methods

- [[iterator]](LinkedList.LinkedList-1.md#[iterator])
- [\_findNode](LinkedList.LinkedList-1.md#_findnode)
- [add](LinkedList.LinkedList-1.md#add)
- [addNode](LinkedList.LinkedList-1.md#addnode)
- [append](LinkedList.LinkedList-1.md#append)
- [clear](LinkedList.LinkedList-1.md#clear)
- [cycle](LinkedList.LinkedList-1.md#cycle)
- [delete](LinkedList.LinkedList-1.md#delete)
- [deleteNode](LinkedList.LinkedList-1.md#deletenode)
- [entries](LinkedList.LinkedList-1.md#entries)
- [filter](LinkedList.LinkedList-1.md#filter)
- [find](LinkedList.LinkedList-1.md#find)
- [forEach](LinkedList.LinkedList-1.md#foreach)
- [has](LinkedList.LinkedList-1.md#has)
- [headNode](LinkedList.LinkedList-1.md#headnode)
- [insert](LinkedList.LinkedList-1.md#insert)
- [insertNode](LinkedList.LinkedList-1.md#insertnode)
- [join](LinkedList.LinkedList-1.md#join)
- [keys](LinkedList.LinkedList-1.md#keys)
- [map](LinkedList.LinkedList-1.md#map)
- [pop](LinkedList.LinkedList-1.md#pop)
- [recycle](LinkedList.LinkedList-1.md#recycle)
- [reduce](LinkedList.LinkedList-1.md#reduce)
- [reverse](LinkedList.LinkedList-1.md#reverse)
- [shift](LinkedList.LinkedList-1.md#shift)
- [tailNode](LinkedList.LinkedList-1.md#tailnode)
- [toArray](LinkedList.LinkedList-1.md#toarray)
- [toJSON](LinkedList.LinkedList-1.md#tojson)
- [values](LinkedList.LinkedList-1.md#values)
- [from](LinkedList.LinkedList-1.md#from)

## Constructors

### constructor

• **new LinkedList**<`T`, `N`\>(`iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Defined in

LinkedList.ts:37

## Properties

### \_head

• `Optional` `Private` **\_head**: `N`

#### Defined in

LinkedList.ts:22

___

### \_tail

• `Optional` `Private` **\_tail**: `N`

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

#### Defined in

LinkedList.ts:291

___

### add

▸ **add**(`item`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

LinkedList.ts:124

___

### addNode

▸ **addNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

LinkedList.ts:112

___

### append

▸ **append**(`item`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

LinkedList.ts:74

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

LinkedList.ts:128

___

### cycle

▸ **cycle**(): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

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

#### Defined in

LinkedList.ts:133

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Defined in

LinkedList.ts:222

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

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

#### Defined in

LinkedList.ts:70

___

### headNode

▸ **headNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

LinkedList.ts:86

___

### insert

▸ **insert**(`item`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

LinkedList.ts:120

___

### insertNode

▸ **insertNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

LinkedList.ts:104

___

### join

▸ **join**(`separator?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `separator?` | `string` |

#### Returns

`string`

#### Defined in

LinkedList.ts:286

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

LinkedList.ts:263

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

LinkedList.ts:43

___

### recycle

▸ **recycle**(): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Defined in

LinkedList.ts:204

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

LinkedList.ts:176

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

LinkedList.ts:55

___

### tailNode

▸ **tailNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

LinkedList.ts:95

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

LinkedList.ts:163

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Defined in

LinkedList.ts:282

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

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

#### Defined in

LinkedList.ts:17
