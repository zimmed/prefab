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

- [[toStringTag]](Queue.Queue-1.md#[tostringtag])
- [\_head](Queue.Queue-1.md#_head)
- [\_size](Queue.Queue-1.md#_size)
- [\_tail](Queue.Queue-1.md#_tail)
- [\_type](Queue.Queue-1.md#_type)
- [Type](Queue.Queue-1.md#type)

### Accessors

- [head](Queue.Queue-1.md#head)
- [size](Queue.Queue-1.md#size)
- [tail](Queue.Queue-1.md#tail)

### Methods

- [[iterator]](Queue.Queue-1.md#[iterator])
- [\_findNode](Queue.Queue-1.md#_findnode)
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

Queue.ts:22

## Properties

### [toStringTag]

• **[toStringTag]**: `string` = `'Queue'`

#### Overrides

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[[toStringTag]](SizedLinkedList.SizedLinkedList-1.md#[tostringtag])

#### Defined in

Queue.ts:20

___

### \_head

• `Optional` `Private` **\_head**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_head](SizedLinkedList.SizedLinkedList-1.md#_head)

#### Defined in

LinkedList.ts:22

___

### \_size

• **\_size**: `number` = `0`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_size](SizedLinkedList.SizedLinkedList-1.md#_size)

#### Defined in

SizedLinkedList.ts:4

___

### \_tail

• `Optional` `Private` **\_tail**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_tail](SizedLinkedList.SizedLinkedList-1.md#_tail)

#### Defined in

LinkedList.ts:24

___

### \_type

• **\_type**: [`Type`](../enums/Queue.Type.md)

#### Defined in

Queue.ts:18

___

### Type

▪ `Static` **Type**: typeof [`Type`](../enums/Queue.Type.md)

#### Defined in

Queue.ts:9

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[[iterator]](SizedLinkedList.SizedLinkedList-1.md#[iterator])

#### Defined in

LinkedList.ts:185

___

### \_findNode

▸ `Private` **_findNode**(`item`): `undefined` \| [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`undefined` \| [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_findNode](SizedLinkedList.SizedLinkedList-1.md#_findnode)

#### Defined in

LinkedList.ts:291

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

LinkedList.ts:124

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

SizedLinkedList.ts:31

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

LinkedList.ts:74

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[clear](SizedLinkedList.SizedLinkedList-1.md#clear)

#### Defined in

SizedLinkedList.ts:36

___

### cycle

▸ **cycle**(): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[cycle](SizedLinkedList.SizedLinkedList-1.md#cycle)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[delete](SizedLinkedList.SizedLinkedList-1.md#delete)

#### Defined in

LinkedList.ts:146

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

SizedLinkedList.ts:41

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

Queue.ts:34

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

Queue.ts:30

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[entries](SizedLinkedList.SizedLinkedList-1.md#entries)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[filter](SizedLinkedList.SizedLinkedList-1.md#filter)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[find](SizedLinkedList.SizedLinkedList-1.md#find)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[findRight](SizedLinkedList.SizedLinkedList-1.md#findright)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[forEach](SizedLinkedList.SizedLinkedList-1.md#foreach)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[has](SizedLinkedList.SizedLinkedList-1.md#has)

#### Defined in

LinkedList.ts:70

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

LinkedList.ts:86

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

LinkedList.ts:120

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[join](SizedLinkedList.SizedLinkedList-1.md#join)

#### Defined in

LinkedList.ts:286

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[keys](SizedLinkedList.SizedLinkedList-1.md#keys)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[map](SizedLinkedList.SizedLinkedList-1.md#map)

#### Defined in

SizedLinkedList.ts:87

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[pop](SizedLinkedList.SizedLinkedList-1.md#pop)

#### Defined in

SizedLinkedList.ts:12

___

### recycle

▸ **recycle**(): [`Queue`](Queue.Queue-1.md)<`T`\>

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[recycle](SizedLinkedList.SizedLinkedList-1.md#recycle)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reduce](SizedLinkedList.SizedLinkedList-1.md#reduce)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reduceRight](SizedLinkedList.SizedLinkedList-1.md#reduceright)

#### Defined in

SizedLinkedList.ts:49

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reverse](SizedLinkedList.SizedLinkedList-1.md#reverse)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reverseMap](SizedLinkedList.SizedLinkedList-1.md#reversemap)

#### Defined in

SizedLinkedList.ts:104

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[shift](SizedLinkedList.SizedLinkedList-1.md#shift)

#### Defined in

SizedLinkedList.ts:19

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

LinkedList.ts:95

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[toArray](SizedLinkedList.SizedLinkedList-1.md#toarray)

#### Defined in

LinkedList.ts:163

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[toJSON](SizedLinkedList.SizedLinkedList-1.md#tojson)

#### Defined in

LinkedList.ts:282

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[values](SizedLinkedList.SizedLinkedList-1.md#values)

#### Defined in

LinkedList.ts:150

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

Queue.ts:11
