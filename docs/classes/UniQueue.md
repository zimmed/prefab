[@zimmed/prefab](../README.md) / [Exports](../modules.md) / UniQueue

# Class: UniQueue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`LinkedSet`](LinkedSet.md)<`T`\>

  ↳ **`UniQueue`**

## Table of contents

### Constructors

- [constructor](UniQueue.md#constructor)

### Properties

- [\_head](UniQueue.md#_head)
- [\_map](UniQueue.md#_map)
- [\_tail](UniQueue.md#_tail)
- [\_type](UniQueue.md#_type)
- [Type](UniQueue.md#type)

### Accessors

- [head](UniQueue.md#head)
- [size](UniQueue.md#size)
- [tail](UniQueue.md#tail)

### Methods

- [[iterator]](UniQueue.md#[iterator])
- [add](UniQueue.md#add)
- [addNode](UniQueue.md#addnode)
- [append](UniQueue.md#append)
- [clear](UniQueue.md#clear)
- [cycle](UniQueue.md#cycle)
- [delete](UniQueue.md#delete)
- [deleteNode](UniQueue.md#deletenode)
- [dequeue](UniQueue.md#dequeue)
- [enqueue](UniQueue.md#enqueue)
- [entries](UniQueue.md#entries)
- [filter](UniQueue.md#filter)
- [find](UniQueue.md#find)
- [findRight](UniQueue.md#findright)
- [forEach](UniQueue.md#foreach)
- [has](UniQueue.md#has)
- [headNode](UniQueue.md#headnode)
- [insert](UniQueue.md#insert)
- [insertNode](UniQueue.md#insertnode)
- [join](UniQueue.md#join)
- [keys](UniQueue.md#keys)
- [map](UniQueue.md#map)
- [pop](UniQueue.md#pop)
- [recycle](UniQueue.md#recycle)
- [reduce](UniQueue.md#reduce)
- [reduceRight](UniQueue.md#reduceright)
- [reverse](UniQueue.md#reverse)
- [reverseMap](UniQueue.md#reversemap)
- [shift](UniQueue.md#shift)
- [tailNode](UniQueue.md#tailnode)
- [toArray](UniQueue.md#toarray)
- [toJSON](UniQueue.md#tojson)
- [unshift](UniQueue.md#unshift)
- [values](UniQueue.md#values)
- [create](UniQueue.md#create)
- [from](UniQueue.md#from)

## Constructors

### constructor

• **new UniQueue**<`T`\>(`iterable?`, `type?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> | `undefined` |
| `type` | `Type` | `Type.FIFO` |

#### Overrides

[LinkedSet](LinkedSet.md).[constructor](LinkedSet.md#constructor)

#### Defined in

[src/UniQueue.ts:31](https://github.com/zimmed/prefab/blob/c08eef0/src/UniQueue.ts#L31)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `LNode`<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[_head](LinkedSet.md#_head)

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `LNode`<`T`\>\>

#### Inherited from

[LinkedSet](LinkedSet.md).[_map](LinkedSet.md#_map)

#### Defined in

[src/LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `LNode`<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[_tail](LinkedSet.md#_tail)

#### Defined in

[src/LinkedList.ts:33](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L33)

___

### \_type

• `Protected` `Readonly` **\_type**: `Type`

#### Defined in

[src/UniQueue.ts:29](https://github.com/zimmed/prefab/blob/c08eef0/src/UniQueue.ts#L29)

___

### Type

▪ `Static` **Type**: typeof `Type` = `Type`

#### Defined in

[src/UniQueue.ts:10](https://github.com/zimmed/prefab/blob/c08eef0/src/UniQueue.ts#L10)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedSet.head

#### Defined in

[src/LinkedList.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L36)

___

### size

• `get` **size**(): `number`

Current size of set

#### Returns

`number`

#### Inherited from

LinkedSet.size

#### Defined in

[src/LinkedSet.ts:10](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L10)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedSet.tail

#### Defined in

[src/LinkedList.ts:40](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[[iterator]](LinkedSet.md#[iterator])

#### Defined in

[src/LinkedList.ts:393](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L393)

___

### add

▸ **add**(`item`): [`UniQueue`](UniQueue.md)<`T`\>

Appends unique item to end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[add](LinkedSet.md#add)

#### Defined in

[src/LinkedSet.ts:41](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L41)

___

### addNode

▸ **addNode**(`node`): [`UniQueue`](UniQueue.md)<`T`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[addNode](LinkedSet.md#addnode)

#### Defined in

[src/LinkedSet.ts:57](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L57)

___

### append

▸ **append**(`item`): [`UniQueue`](UniQueue.md)<`T`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[append](LinkedSet.md#append)

#### Defined in

[src/LinkedList.ts:110](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears set

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.md).[clear](LinkedSet.md#clear)

#### Defined in

[src/LinkedSet.ts:63](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L63)

___

### cycle

▸ **cycle**(): [`UniQueue`](UniQueue.md)<`T`\>

Moves element from end of list to the front

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[cycle](LinkedSet.md#cycle)

#### Defined in

[src/LinkedList.ts:130](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L130)

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

[LinkedSet](LinkedSet.md).[delete](LinkedSet.md#delete)

#### Defined in

[src/LinkedSet.ts:69](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L69)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

Removes specified node from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `LNode`<`T`\> |

#### Returns

`boolean`

#### Inherited from

[LinkedSet](LinkedSet.md).[deleteNode](LinkedSet.md#deletenode)

#### Defined in

[src/LinkedList.ts:378](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L378)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

Shift item from front of front of Queue if type is FIFO, otherwise pop from end of Queue (LIFO)

#### Returns

`undefined` \| `T`

#### Defined in

[src/UniQueue.ts:45](https://github.com/zimmed/prefab/blob/c08eef0/src/UniQueue.ts#L45)

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

[src/UniQueue.ts:40](https://github.com/zimmed/prefab/blob/c08eef0/src/UniQueue.ts#L40)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[entries](LinkedSet.md#entries)

#### Defined in

[src/LinkedList.ts:199](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L199)

___

### filter

▸ **filter**(`predicate`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `boolean`, [`UniQueue`](UniQueue.md)<`T`\>\> |

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[filter](LinkedSet.md#filter)

#### Defined in

[src/LinkedList.ts:297](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L297)

▸ **filter**<`This`\>(`predicate`, `thisArg`): `T`[]

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[filter](LinkedSet.md#filter)

#### Defined in

[src/LinkedList.ts:298](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L298)

___

### find

▸ **find**(`predicate`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `boolean`, [`UniQueue`](UniQueue.md)<`T`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[find](LinkedSet.md#find)

#### Defined in

[src/LinkedList.ts:271](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L271)

▸ **find**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[find](LinkedSet.md#find)

#### Defined in

[src/LinkedList.ts:272](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L272)

___

### findRight

▸ **findRight**(`predicate`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `boolean`, [`UniQueue`](UniQueue.md)<`T`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[findRight](LinkedSet.md#findright)

#### Defined in

[src/LinkedSet.ts:94](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L94)

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[findRight](LinkedSet.md#findright)

#### Defined in

[src/LinkedSet.ts:95](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L95)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `void`, [`UniQueue`](UniQueue.md)<`T`\>\> |

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.md).[forEach](LinkedSet.md#foreach)

#### Defined in

[src/LinkedList.ts:229](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L229)

▸ **forEach**<`ThisArg`\>(`cb`, `thisArg?`): `void`

#### Type parameters

| Name |
| :------ |
| `ThisArg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `thisArg?` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.md).[forEach](LinkedSet.md#foreach)

#### Defined in

[src/LinkedList.ts:230](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L230)

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

[LinkedSet](LinkedSet.md).[has](LinkedSet.md#has)

#### Defined in

[src/LinkedSet.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L36)

___

### headNode

▸ **headNode**(`node`): [`UniQueue`](UniQueue.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[headNode](LinkedSet.md#headnode)

#### Defined in

[src/LinkedList.ts:143](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L143)

___

### insert

▸ **insert**(`item`): [`UniQueue`](UniQueue.md)<`T`\>

Inserts unique item into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[insert](LinkedSet.md#insert)

#### Defined in

[src/LinkedSet.ts:46](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L46)

___

### insertNode

▸ **insertNode**(`node`): [`UniQueue`](UniQueue.md)<`T`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[insertNode](LinkedSet.md#insertnode)

#### Defined in

[src/LinkedSet.ts:51](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L51)

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

[LinkedSet](LinkedSet.md).[join](LinkedSet.md#join)

#### Defined in

[src/LinkedList.ts:349](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L349)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[keys](LinkedSet.md#keys)

#### Defined in

[src/LinkedList.ts:209](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L209)

___

### map

▸ **map**<`RT`\>(`cb`): `RT`[]

Maps set items into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[map](LinkedSet.md#map)

#### Defined in

[src/LinkedSet.ts:105](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L105)

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[map](LinkedSet.md#map)

#### Defined in

[src/LinkedSet.ts:106](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L106)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from the end of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[pop](LinkedSet.md#pop)

#### Defined in

[src/LinkedSet.ts:15](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L15)

___

### recycle

▸ **recycle**(): [`UniQueue`](UniQueue.md)<`T`\>

Moves element from front of list to the end

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[recycle](LinkedSet.md#recycle)

#### Defined in

[src/LinkedList.ts:135](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L135)

___

### reduce

▸ **reduce**<`RT`\>(`cb`, `initialValue`): `RT`

Reduces list into specified value (same signature as Array.prototype.reduce)

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduce](LinkedSet.md#reduce)

#### Defined in

[src/LinkedList.ts:250](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L250)

▸ **reduce**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduce](LinkedSet.md#reduce)

#### Defined in

[src/LinkedList.ts:251](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L251)

___

### reduceRight

▸ **reduceRight**<`RT`\>(`cb`, `initialValue`): `RT`

Reduces items from the end of the set to the front

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduceRight](LinkedSet.md#reduceright)

#### Defined in

[src/LinkedSet.ts:78](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L78)

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduceRight](LinkedSet.md#reduceright)

#### Defined in

[src/LinkedSet.ts:79](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L79)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[reverse](LinkedSet.md#reverse)

#### Defined in

[src/LinkedList.ts:219](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L219)

___

### reverseMap

▸ **reverseMap**<`RT`\>(`cb`): `RT`[]

Maps set items from the end of the set to the front into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`UniQueue`](UniQueue.md)<`T`\>, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[reverseMap](LinkedSet.md#reversemap)

#### Defined in

[src/LinkedSet.ts:113](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L113)

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`UniQueue`](UniQueue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[reverseMap](LinkedSet.md#reversemap)

#### Defined in

[src/LinkedSet.ts:114](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L114)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item off of the front of the set

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[shift](LinkedSet.md#shift)

#### Defined in

[src/LinkedSet.ts:26](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L26)

___

### tailNode

▸ **tailNode**(`node`): [`UniQueue`](UniQueue.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[tailNode](LinkedSet.md#tailnode)

#### Defined in

[src/LinkedList.ts:158](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L158)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[toArray](LinkedSet.md#toarray)

#### Defined in

[src/LinkedList.ts:182](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L182)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[toJSON](LinkedSet.md#tojson)

#### Defined in

[src/LinkedList.ts:389](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L389)

___

### unshift

▸ **unshift**(`item`): [`UniQueue`](UniQueue.md)<`T`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[unshift](LinkedSet.md#unshift)

#### Defined in

[src/LinkedList.ts:120](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L120)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[values](LinkedSet.md#values)

#### Defined in

[src/LinkedList.ts:194](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L194)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`, `type?`): [`UniQueue`](UniQueue.md)<`T`\>

Static factory method as alias for class constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type?` | `Type` |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Overrides

[LinkedSet](LinkedSet.md).[create](LinkedSet.md#create)

#### Defined in

[src/UniQueue.ts:13](https://github.com/zimmed/prefab/blob/c08eef0/src/UniQueue.ts#L13)

___

### from

▸ `Static` **from**<`T`\>(`iterable`, `type?`): [`UniQueue`](UniQueue.md)<`T`\>

Same as LinkedList.create() but requires constructor arg

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type?` | `Type` |

#### Returns

[`UniQueue`](UniQueue.md)<`T`\>

#### Overrides

[LinkedSet](LinkedSet.md).[from](LinkedSet.md#from)

#### Defined in

[src/UniQueue.ts:21](https://github.com/zimmed/prefab/blob/c08eef0/src/UniQueue.ts#L21)
