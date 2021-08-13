[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [UniQueue](../modules/UniQueue.md) / UniQueue

# Class: UniQueue<T\>

[UniQueue](../modules/UniQueue.md).UniQueue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`\>

  ↳ **`UniQueue`**

## Table of contents

### Constructors

- [constructor](UniQueue.UniQueue-1.md#constructor)

### Properties

- [\_head](UniQueue.UniQueue-1.md#_head)
- [\_map](UniQueue.UniQueue-1.md#_map)
- [\_tail](UniQueue.UniQueue-1.md#_tail)
- [\_type](UniQueue.UniQueue-1.md#_type)
- [Type](UniQueue.UniQueue-1.md#type)

### Accessors

- [head](UniQueue.UniQueue-1.md#head)
- [size](UniQueue.UniQueue-1.md#size)
- [tail](UniQueue.UniQueue-1.md#tail)

### Methods

- [[iterator]](UniQueue.UniQueue-1.md#[iterator])
- [add](UniQueue.UniQueue-1.md#add)
- [addNode](UniQueue.UniQueue-1.md#addnode)
- [append](UniQueue.UniQueue-1.md#append)
- [clear](UniQueue.UniQueue-1.md#clear)
- [cycle](UniQueue.UniQueue-1.md#cycle)
- [delete](UniQueue.UniQueue-1.md#delete)
- [deleteNode](UniQueue.UniQueue-1.md#deletenode)
- [dequeue](UniQueue.UniQueue-1.md#dequeue)
- [enqueue](UniQueue.UniQueue-1.md#enqueue)
- [entries](UniQueue.UniQueue-1.md#entries)
- [filter](UniQueue.UniQueue-1.md#filter)
- [find](UniQueue.UniQueue-1.md#find)
- [findRight](UniQueue.UniQueue-1.md#findright)
- [forEach](UniQueue.UniQueue-1.md#foreach)
- [has](UniQueue.UniQueue-1.md#has)
- [headNode](UniQueue.UniQueue-1.md#headnode)
- [insert](UniQueue.UniQueue-1.md#insert)
- [insertNode](UniQueue.UniQueue-1.md#insertnode)
- [join](UniQueue.UniQueue-1.md#join)
- [keys](UniQueue.UniQueue-1.md#keys)
- [map](UniQueue.UniQueue-1.md#map)
- [pop](UniQueue.UniQueue-1.md#pop)
- [recycle](UniQueue.UniQueue-1.md#recycle)
- [reduce](UniQueue.UniQueue-1.md#reduce)
- [reduceRight](UniQueue.UniQueue-1.md#reduceright)
- [reverse](UniQueue.UniQueue-1.md#reverse)
- [reverseMap](UniQueue.UniQueue-1.md#reversemap)
- [shift](UniQueue.UniQueue-1.md#shift)
- [tailNode](UniQueue.UniQueue-1.md#tailnode)
- [toArray](UniQueue.UniQueue-1.md#toarray)
- [toJSON](UniQueue.UniQueue-1.md#tojson)
- [values](UniQueue.UniQueue-1.md#values)
- [from](UniQueue.UniQueue-1.md#from)

## Constructors

### constructor

• **new UniQueue**<`T`\>(`iterable?`, `type?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type` | [`Type`](../enums/UniQueue.Type.md) |

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[constructor](LinkedSet.LinkedSet-1.md#constructor)

#### Defined in

[UniQueue.ts:22](https://github.com/zimmed/prefab/blob/8710d36/src/UniQueue.ts#L22)

## Properties

### \_head

• `Protected` `Optional` **\_head**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_head](LinkedSet.LinkedSet-1.md#_head)

#### Defined in

[LinkedList.ts:24](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L24)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_map](LinkedSet.LinkedSet-1.md#_map)

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_tail](LinkedSet.LinkedSet-1.md#_tail)

#### Defined in

[LinkedList.ts:27](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L27)

___

### \_type

• `Protected` `Readonly` **\_type**: [`Type`](../enums/UniQueue.Type.md)

#### Defined in

[UniQueue.ts:20](https://github.com/zimmed/prefab/blob/8710d36/src/UniQueue.ts#L20)

___

### Type

▪ `Static` **Type**: typeof [`Type`](../enums/UniQueue.Type.md)

#### Defined in

[UniQueue.ts:10](https://github.com/zimmed/prefab/blob/8710d36/src/UniQueue.ts#L10)

## Accessors

### head

• `get` **head**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:29](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L29)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[LinkedSet.ts:9](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L9)

___

### tail

• `get` **tail**(): `undefined` \| `N`

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:32](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L32)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[[iterator]](LinkedSet.LinkedSet-1.md#[iterator])

#### Defined in

[LinkedList.ts:210](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L210)

___

### add

▸ **add**(`item`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[add](LinkedSet.LinkedSet-1.md#add)

#### Defined in

[LinkedSet.ts:31](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L31)

___

### addNode

▸ **addNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[addNode](LinkedSet.LinkedSet-1.md#addnode)

#### Defined in

[LinkedSet.ts:44](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L44)

___

### append

▸ **append**(`item`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[append](LinkedSet.LinkedSet-1.md#append)

#### Defined in

[LinkedList.ts:95](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L95)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[clear](LinkedSet.LinkedSet-1.md#clear)

#### Defined in

[LinkedSet.ts:49](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L49)

___

### cycle

▸ **cycle**(): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[cycle](LinkedSet.LinkedSet-1.md#cycle)

#### Defined in

[LinkedList.ts:99](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L99)

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

[LinkedSet](LinkedSet.LinkedSet-1.md).[delete](LinkedSet.LinkedSet-1.md#delete)

#### Defined in

[LinkedSet.ts:54](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L54)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

`boolean`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[deleteNode](LinkedSet.LinkedSet-1.md#deletenode)

#### Defined in

[LinkedList.ts:158](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L158)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[UniQueue.ts:34](https://github.com/zimmed/prefab/blob/8710d36/src/UniQueue.ts#L34)

___

### enqueue

▸ **enqueue**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`void`

#### Defined in

[UniQueue.ts:30](https://github.com/zimmed/prefab/blob/8710d36/src/UniQueue.ts#L30)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[entries](LinkedSet.LinkedSet-1.md#entries)

#### Defined in

[LinkedList.ts:179](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L179)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[filter](LinkedSet.LinkedSet-1.md#filter)

#### Defined in

[LinkedList.ts:267](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L267)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[find](LinkedSet.LinkedSet-1.md#find)

#### Defined in

[LinkedList.ts:247](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L247)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `boolean`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[findRight](LinkedSet.LinkedSet-1.md#findright)

#### Defined in

[LinkedSet.ts:73](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L73)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[forEach](LinkedSet.LinkedSet-1.md#foreach)

#### Defined in

[LinkedList.ts:214](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L214)

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

[LinkedSet.ts:27](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L27)

___

### headNode

▸ **headNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[headNode](LinkedSet.LinkedSet-1.md#headnode)

#### Defined in

[LinkedList.ts:107](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L107)

___

### insert

▸ **insert**(`item`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[insert](LinkedSet.LinkedSet-1.md#insert)

#### Defined in

[LinkedSet.ts:35](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L35)

___

### insertNode

▸ **insertNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[insertNode](LinkedSet.LinkedSet-1.md#insertnode)

#### Defined in

[LinkedSet.ts:39](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L39)

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

[LinkedList.ts:311](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L311)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[keys](LinkedSet.LinkedSet-1.md#keys)

#### Defined in

[LinkedList.ts:192](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L192)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[map](LinkedSet.LinkedSet-1.md#map)

#### Defined in

[LinkedSet.ts:78](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L78)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[pop](LinkedSet.LinkedSet-1.md#pop)

#### Defined in

[LinkedSet.ts:13](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L13)

___

### recycle

▸ **recycle**(): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[recycle](LinkedSet.LinkedSet-1.md#recycle)

#### Defined in

[LinkedList.ts:103](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L103)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reduce](LinkedSet.LinkedSet-1.md#reduce)

#### Defined in

[LinkedList.ts:229](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L229)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reduceRight](LinkedSet.LinkedSet-1.md#reduceright)

#### Defined in

[LinkedSet.ts:64](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L64)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reverse](LinkedSet.LinkedSet-1.md#reverse)

#### Defined in

[LinkedList.ts:201](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L201)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reverseMap](LinkedSet.LinkedSet-1.md#reversemap)

#### Defined in

[LinkedSet.ts:83](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L83)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[shift](LinkedSet.LinkedSet-1.md#shift)

#### Defined in

[LinkedSet.ts:20](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedSet.ts#L20)

___

### tailNode

▸ **tailNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[tailNode](LinkedSet.LinkedSet-1.md#tailnode)

#### Defined in

[LinkedList.ts:118](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L118)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[toArray](LinkedSet.LinkedSet-1.md#toarray)

#### Defined in

[LinkedList.ts:188](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L188)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[toJSON](LinkedSet.LinkedSet-1.md#tojson)

#### Defined in

[LinkedList.ts:307](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L307)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[values](LinkedSet.LinkedSet-1.md#values)

#### Defined in

[LinkedList.ts:175](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L175)

___

### from

▸ `Static` **from**<`T`\>(`iterable?`, `type?`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type?` | [`Type`](../enums/UniQueue.Type.md) |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[from](LinkedSet.LinkedSet-1.md#from)

#### Defined in

[UniQueue.ts:12](https://github.com/zimmed/prefab/blob/8710d36/src/UniQueue.ts#L12)
