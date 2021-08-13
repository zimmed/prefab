[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [Queue](../modules/Queue.md) / Queue

# Class: Queue<T\>

[Queue](../modules/Queue.md).Queue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)<`T`\>

  ↳ **`Queue`**

## Table of contents

### Constructors

- [constructor](Queue.Queue-1.md#constructor)

### Properties

- [\_head](Queue.Queue-1.md#_head)
- [\_tail](Queue.Queue-1.md#_tail)
- [\_type](Queue.Queue-1.md#_type)
- [Type](Queue.Queue-1.md#type)

### Accessors

- [head](Queue.Queue-1.md#head)
- [size](Queue.Queue-1.md#size)
- [tail](Queue.Queue-1.md#tail)

### Methods

- [[iterator]](Queue.Queue-1.md#[iterator])
- [add](Queue.Queue-1.md#add)
- [addNode](Queue.Queue-1.md#addnode)
- [append](Queue.Queue-1.md#append)
- [clear](Queue.Queue-1.md#clear)
- [cycle](Queue.Queue-1.md#cycle)
- [delete](Queue.Queue-1.md#delete)
- [deleteNode](Queue.Queue-1.md#deletenode)
- [dequeue](Queue.Queue-1.md#dequeue)
- [enqueue](Queue.Queue-1.md#enqueue)
- [entries](Queue.Queue-1.md#entries)
- [filter](Queue.Queue-1.md#filter)
- [find](Queue.Queue-1.md#find)
- [findRight](Queue.Queue-1.md#findright)
- [forEach](Queue.Queue-1.md#foreach)
- [has](Queue.Queue-1.md#has)
- [headNode](Queue.Queue-1.md#headnode)
- [insert](Queue.Queue-1.md#insert)
- [insertNode](Queue.Queue-1.md#insertnode)
- [join](Queue.Queue-1.md#join)
- [keys](Queue.Queue-1.md#keys)
- [map](Queue.Queue-1.md#map)
- [pop](Queue.Queue-1.md#pop)
- [recycle](Queue.Queue-1.md#recycle)
- [reduce](Queue.Queue-1.md#reduce)
- [reduceRight](Queue.Queue-1.md#reduceright)
- [reverse](Queue.Queue-1.md#reverse)
- [reverseMap](Queue.Queue-1.md#reversemap)
- [shift](Queue.Queue-1.md#shift)
- [tailNode](Queue.Queue-1.md#tailnode)
- [toArray](Queue.Queue-1.md#toarray)
- [toJSON](Queue.Queue-1.md#tojson)
- [values](Queue.Queue-1.md#values)
- [from](Queue.Queue-1.md#from)

## Constructors

### constructor

• **new Queue**<`T`\>(`iterable?`, `type?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type` | [`Type`](../enums/Queue.Type.md) |

#### Overrides

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[constructor](SizedLinkedList.SizedLinkedList-1.md#constructor)

#### Defined in

[Queue.ts:22](https://github.com/zimmed/prefab/blob/db84beb/src/Queue.ts#L22)

## Properties

### \_head

• `Protected` `Optional` **\_head**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_head](SizedLinkedList.SizedLinkedList-1.md#_head)

#### Defined in

[LinkedList.ts:24](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L24)

___

### \_tail

• `Protected` `Optional` **\_tail**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_tail](SizedLinkedList.SizedLinkedList-1.md#_tail)

#### Defined in

[LinkedList.ts:27](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L27)

___

### \_type

• `Protected` `Readonly` **\_type**: [`Type`](../enums/Queue.Type.md)

#### Defined in

[Queue.ts:20](https://github.com/zimmed/prefab/blob/db84beb/src/Queue.ts#L20)

___

### Type

▪ `Static` **Type**: typeof [`Type`](../enums/Queue.Type.md)

#### Defined in

[Queue.ts:10](https://github.com/zimmed/prefab/blob/db84beb/src/Queue.ts#L10)

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

[SizedLinkedList.ts:8](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L8)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[[iterator]](SizedLinkedList.SizedLinkedList-1.md#[iterator])

#### Defined in

[LinkedList.ts:210](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L210)

___

### add

▸ **add**(`item`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[add](SizedLinkedList.SizedLinkedList-1.md#add)

#### Defined in

[LinkedList.ts:149](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L149)

___

### addNode

▸ **addNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[addNode](SizedLinkedList.SizedLinkedList-1.md#addnode)

#### Defined in

[SizedLinkedList.ts:31](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L31)

___

### append

▸ **append**(`item`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[append](SizedLinkedList.SizedLinkedList-1.md#append)

#### Defined in

[LinkedList.ts:95](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L95)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[clear](SizedLinkedList.SizedLinkedList-1.md#clear)

#### Defined in

[SizedLinkedList.ts:36](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L36)

___

### cycle

▸ **cycle**(): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[cycle](SizedLinkedList.SizedLinkedList-1.md#cycle)

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

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[delete](SizedLinkedList.SizedLinkedList-1.md#delete)

#### Defined in

[LinkedList.ts:171](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L171)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[deleteNode](SizedLinkedList.SizedLinkedList-1.md#deletenode)

#### Defined in

[SizedLinkedList.ts:41](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L41)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[Queue.ts:34](https://github.com/zimmed/prefab/blob/db84beb/src/Queue.ts#L34)

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

[Queue.ts:30](https://github.com/zimmed/prefab/blob/db84beb/src/Queue.ts#L30)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[entries](SizedLinkedList.SizedLinkedList-1.md#entries)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[filter](SizedLinkedList.SizedLinkedList-1.md#filter)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[find](SizedLinkedList.SizedLinkedList-1.md#find)

#### Defined in

[LinkedList.ts:247](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L247)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[findRight](SizedLinkedList.SizedLinkedList-1.md#findright)

#### Defined in

[SizedLinkedList.ts:71](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L71)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[forEach](SizedLinkedList.SizedLinkedList-1.md#foreach)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[has](SizedLinkedList.SizedLinkedList-1.md#has)

#### Defined in

[LinkedList.ts:91](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L91)

___

### headNode

▸ **headNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[headNode](SizedLinkedList.SizedLinkedList-1.md#headnode)

#### Defined in

[LinkedList.ts:107](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L107)

___

### insert

▸ **insert**(`item`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[insert](SizedLinkedList.SizedLinkedList-1.md#insert)

#### Defined in

[LinkedList.ts:145](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L145)

___

### insertNode

▸ **insertNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[insertNode](SizedLinkedList.SizedLinkedList-1.md#insertnode)

#### Defined in

[SizedLinkedList.ts:26](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L26)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[join](SizedLinkedList.SizedLinkedList-1.md#join)

#### Defined in

[LinkedList.ts:311](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L311)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[keys](SizedLinkedList.SizedLinkedList-1.md#keys)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[map](SizedLinkedList.SizedLinkedList-1.md#map)

#### Defined in

[SizedLinkedList.ts:94](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L94)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[pop](SizedLinkedList.SizedLinkedList-1.md#pop)

#### Defined in

[SizedLinkedList.ts:12](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L12)

___

### recycle

▸ **recycle**(): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[recycle](SizedLinkedList.SizedLinkedList-1.md#recycle)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reduce](SizedLinkedList.SizedLinkedList-1.md#reduce)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reduceRight](SizedLinkedList.SizedLinkedList-1.md#reduceright)

#### Defined in

[SizedLinkedList.ts:49](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L49)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reverse](SizedLinkedList.SizedLinkedList-1.md#reverse)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reverseMap](SizedLinkedList.SizedLinkedList-1.md#reversemap)

#### Defined in

[SizedLinkedList.ts:111](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L111)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[shift](SizedLinkedList.SizedLinkedList-1.md#shift)

#### Defined in

[SizedLinkedList.ts:19](https://github.com/zimmed/prefab/blob/db84beb/src/SizedLinkedList.ts#L19)

___

### tailNode

▸ **tailNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[tailNode](SizedLinkedList.SizedLinkedList-1.md#tailnode)

#### Defined in

[LinkedList.ts:118](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L118)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[toArray](SizedLinkedList.SizedLinkedList-1.md#toarray)

#### Defined in

[LinkedList.ts:188](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L188)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[toJSON](SizedLinkedList.SizedLinkedList-1.md#tojson)

#### Defined in

[LinkedList.ts:307](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L307)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[values](SizedLinkedList.SizedLinkedList-1.md#values)

#### Defined in

[LinkedList.ts:175](https://github.com/zimmed/prefab/blob/db84beb/src/LinkedList.ts#L175)

___

### from

▸ `Static` **from**<`T`\>(`iterable?`, `type?`): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type?` | [`Type`](../enums/Queue.Type.md) |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Overrides

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[from](SizedLinkedList.SizedLinkedList-1.md#from)

#### Defined in

[Queue.ts:12](https://github.com/zimmed/prefab/blob/db84beb/src/Queue.ts#L12)
