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
- [create](UniQueue.UniQueue-1.md#create)
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

[UniQueue.ts:31](https://github.com/zimmed/prefab/blob/5b06828/src/UniQueue.ts#L31)

## Properties

### \_head

• `Protected` `Optional` **\_head**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_head](LinkedSet.LinkedSet-1.md#_head)

#### Defined in

[LinkedList.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_map](LinkedSet.LinkedSet-1.md#_map)

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_tail](LinkedSet.LinkedSet-1.md#_tail)

#### Defined in

[LinkedList.ts:33](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L33)

___

### \_type

• `Protected` `Readonly` **\_type**: [`Type`](../enums/UniQueue.Type.md)

#### Defined in

[UniQueue.ts:29](https://github.com/zimmed/prefab/blob/5b06828/src/UniQueue.ts#L29)

___

### Type

▪ `Static` **Type**: typeof [`Type`](../enums/UniQueue.Type.md)

#### Defined in

[UniQueue.ts:10](https://github.com/zimmed/prefab/blob/5b06828/src/UniQueue.ts#L10)

## Accessors

### head

• `get` **head**(): `undefined` \| `N`

Head of the list

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:36](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L36)

___

### size

• `get` **size**(): `number`

Current size of set

#### Returns

`number`

#### Defined in

[LinkedSet.ts:10](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L10)

___

### tail

• `get` **tail**(): `undefined` \| `N`

Tail of the list

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:40](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[[iterator]](LinkedSet.LinkedSet-1.md#[iterator])

#### Defined in

[LinkedList.ts:360](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L360)

___

### add

▸ **add**(`item`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Appends unique item to end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[add](LinkedSet.LinkedSet-1.md#add)

#### Defined in

[LinkedSet.ts:36](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L36)

___

### addNode

▸ **addNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[addNode](LinkedSet.LinkedSet-1.md#addnode)

#### Defined in

[LinkedSet.ts:52](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L52)

___

### append

▸ **append**(`item`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[append](LinkedSet.LinkedSet-1.md#append)

#### Defined in

[LinkedList.ts:110](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears set

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[clear](LinkedSet.LinkedSet-1.md#clear)

#### Defined in

[LinkedSet.ts:58](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L58)

___

### cycle

▸ **cycle**(): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Moves element from end of list to the front

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[cycle](LinkedSet.LinkedSet-1.md#cycle)

#### Defined in

[LinkedList.ts:125](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L125)

___

### delete

▸ **delete**(`item`): `boolean`

Removes specified item from the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[delete](LinkedSet.LinkedSet-1.md#delete)

#### Defined in

[LinkedSet.ts:64](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L64)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

Removes specified node from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

`boolean`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[deleteNode](LinkedSet.LinkedSet-1.md#deletenode)

#### Defined in

[LinkedList.ts:343](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L343)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

Shift item from front of front of Queue if type is FIFO, otherwise pop from end of Queue (LIFO)

#### Returns

`undefined` \| `T`

#### Defined in

[UniQueue.ts:45](https://github.com/zimmed/prefab/blob/5b06828/src/UniQueue.ts#L45)

___

### enqueue

▸ **enqueue**(`item`): `void`

Append item to Queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`void`

#### Defined in

[UniQueue.ts:40](https://github.com/zimmed/prefab/blob/5b06828/src/UniQueue.ts#L40)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[entries](LinkedSet.LinkedSet-1.md#entries)

#### Defined in

[LinkedList.ts:186](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L186)

___

### filter

▸ **filter**<`This`\>(`predicate`, `thisArg`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

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

[LinkedList.ts:272](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L272)

___

### find

▸ **find**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

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

[LinkedList.ts:251](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L251)

___

### findRight

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the set

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

[LinkedSet](LinkedSet.LinkedSet-1.md).[findRight](LinkedSet.LinkedSet-1.md#findright)

#### Defined in

[LinkedSet.ts:85](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L85)

___

### forEach

▸ **forEach**<`ThisArg`\>(`cb`, `thisArg`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

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

[LinkedList.ts:216](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L216)

___

### has

▸ **has**(`item`): `boolean`

Determines if set contains specified item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[has](LinkedSet.LinkedSet-1.md#has)

#### Defined in

[LinkedSet.ts:31](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L31)

___

### headNode

▸ **headNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[headNode](LinkedSet.LinkedSet-1.md#headnode)

#### Defined in

[LinkedList.ts:138](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L138)

___

### insert

▸ **insert**(`item`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Inserts unique item into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[insert](LinkedSet.LinkedSet-1.md#insert)

#### Defined in

[LinkedSet.ts:41](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L41)

___

### insertNode

▸ **insertNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[insertNode](LinkedSet.LinkedSet-1.md#insertnode)

#### Defined in

[LinkedSet.ts:46](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L46)

___

### join

▸ **join**(`separator?`): `string`

Joins list elements into one string (same signature as Array.prototype.join)

#### Parameters

| Name | Type |
| :------ | :------ |
| `separator?` | `string` |

#### Returns

`string`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[join](LinkedSet.LinkedSet-1.md#join)

#### Defined in

[LinkedList.ts:314](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L314)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[keys](LinkedSet.LinkedSet-1.md#keys)

#### Defined in

[LinkedList.ts:196](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L196)

___

### map

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

Maps set items into a new array

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

[LinkedSet.ts:94](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L94)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from the end of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[pop](LinkedSet.LinkedSet-1.md#pop)

#### Defined in

[LinkedSet.ts:15](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L15)

___

### recycle

▸ **recycle**(): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Moves element from front of list to the end

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[recycle](LinkedSet.LinkedSet-1.md#recycle)

#### Defined in

[LinkedList.ts:130](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L130)

___

### reduce

▸ **reduce**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

Reduces list into specified value (same signature as Array.prototype.reduce)

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

[LinkedList.ts:232](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L232)

___

### reduceRight

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

Reduces items from the end of the set to the front

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

[LinkedSet.ts:75](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L75)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reverse](LinkedSet.LinkedSet-1.md#reverse)

#### Defined in

[LinkedList.ts:206](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L206)

___

### reverseMap

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

Maps set items from the end of the set to the front into a new array

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

[LinkedSet.ts:100](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L100)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item off of the front of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[shift](LinkedSet.LinkedSet-1.md#shift)

#### Defined in

[LinkedSet.ts:23](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L23)

___

### tailNode

▸ **tailNode**(`node`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[tailNode](LinkedSet.LinkedSet-1.md#tailnode)

#### Defined in

[LinkedList.ts:153](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L153)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[toArray](LinkedSet.LinkedSet-1.md#toarray)

#### Defined in

[LinkedList.ts:176](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L176)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[toJSON](LinkedSet.LinkedSet-1.md#tojson)

#### Defined in

[LinkedList.ts:356](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L356)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[values](LinkedSet.LinkedSet-1.md#values)

#### Defined in

[LinkedList.ts:181](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L181)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`, `type?`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Static factory method as alias for class constructor

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

[LinkedSet](LinkedSet.LinkedSet-1.md).[create](LinkedSet.LinkedSet-1.md#create)

#### Defined in

[UniQueue.ts:13](https://github.com/zimmed/prefab/blob/5b06828/src/UniQueue.ts#L13)

___

### from

▸ `Static` **from**<`T`\>(`iterable`, `type?`): [`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

Same as LinkedList.create() but requires constructor arg

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type?` | [`Type`](../enums/UniQueue.Type.md) |

#### Returns

[`UniQueue`](UniQueue.UniQueue-1.md)<`T`\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[from](LinkedSet.LinkedSet-1.md#from)

#### Defined in

[UniQueue.ts:21](https://github.com/zimmed/prefab/blob/5b06828/src/UniQueue.ts#L21)
