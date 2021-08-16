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
- [create](Queue.Queue-1.md#create)
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

[Queue.ts:31](https://github.com/zimmed/prefab/blob/5b06828/src/Queue.ts#L31)

## Properties

### \_head

• `Protected` `Optional` **\_head**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_head](SizedLinkedList.SizedLinkedList-1.md#_head)

#### Defined in

[LinkedList.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L30)

___

### \_tail

• `Protected` `Optional` **\_tail**: [`LNode`](../modules/LinkedList.md#lnode)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[_tail](SizedLinkedList.SizedLinkedList-1.md#_tail)

#### Defined in

[LinkedList.ts:33](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L33)

___

### \_type

• `Protected` `Readonly` **\_type**: [`Type`](../enums/Queue.Type.md)

#### Defined in

[Queue.ts:29](https://github.com/zimmed/prefab/blob/5b06828/src/Queue.ts#L29)

___

### Type

▪ `Static` **Type**: typeof [`Type`](../enums/Queue.Type.md)

#### Defined in

[Queue.ts:10](https://github.com/zimmed/prefab/blob/5b06828/src/Queue.ts#L10)

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

Current size of list

#### Returns

`number`

#### Defined in

[SizedLinkedList.ts:9](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L9)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[[iterator]](SizedLinkedList.SizedLinkedList-1.md#[iterator])

#### Defined in

[LinkedList.ts:360](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L360)

___

### add

▸ **add**(`item`): [`Queue`](Queue.Queue-1.md)<`T`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[add](SizedLinkedList.SizedLinkedList-1.md#add)

#### Defined in

[LinkedList.ts:120](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L120)

___

### addNode

▸ **addNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

Appends Node onto the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[addNode](SizedLinkedList.SizedLinkedList-1.md#addnode)

#### Defined in

[SizedLinkedList.ts:36](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L36)

___

### append

▸ **append**(`item`): [`Queue`](Queue.Queue-1.md)<`T`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[append](SizedLinkedList.SizedLinkedList-1.md#append)

#### Defined in

[LinkedList.ts:110](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[clear](SizedLinkedList.SizedLinkedList-1.md#clear)

#### Defined in

[SizedLinkedList.ts:42](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L42)

___

### cycle

▸ **cycle**(): [`Queue`](Queue.Queue-1.md)<`T`\>

Moves element from end of list to the front

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[cycle](SizedLinkedList.SizedLinkedList-1.md#cycle)

#### Defined in

[LinkedList.ts:125](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L125)

___

### delete

▸ **delete**(`item`): `boolean`

Removes item from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[delete](SizedLinkedList.SizedLinkedList-1.md#delete)

#### Defined in

[LinkedList.ts:171](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L171)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

Deletes specified node from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

`boolean`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[deleteNode](SizedLinkedList.SizedLinkedList-1.md#deletenode)

#### Defined in

[SizedLinkedList.ts:48](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L48)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

Shift item from front of front of Queue if type is FIFO, otherwise pop from end of Queue (LIFO)

#### Returns

`undefined` \| `T`

#### Defined in

[Queue.ts:45](https://github.com/zimmed/prefab/blob/5b06828/src/Queue.ts#L45)

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

[Queue.ts:40](https://github.com/zimmed/prefab/blob/5b06828/src/Queue.ts#L40)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[entries](SizedLinkedList.SizedLinkedList-1.md#entries)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[filter](SizedLinkedList.SizedLinkedList-1.md#filter)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[find](SizedLinkedList.SizedLinkedList-1.md#find)

#### Defined in

[LinkedList.ts:251](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L251)

___

### findRight

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the list

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

[SizedLinkedList.ts:80](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L80)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[forEach](SizedLinkedList.SizedLinkedList-1.md#foreach)

#### Defined in

[LinkedList.ts:216](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L216)

___

### has

▸ **has**(`item`): `boolean`

Careful! O(n)
Checks to see if item exists in list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[has](SizedLinkedList.SizedLinkedList-1.md#has)

#### Defined in

[LinkedList.ts:105](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L105)

___

### headNode

▸ **headNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[headNode](SizedLinkedList.SizedLinkedList-1.md#headnode)

#### Defined in

[LinkedList.ts:138](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L138)

___

### insert

▸ **insert**(`item`): [`Queue`](Queue.Queue-1.md)<`T`\>

Adds item to front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[insert](SizedLinkedList.SizedLinkedList-1.md#insert)

#### Defined in

[LinkedList.ts:115](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L115)

___

### insertNode

▸ **insertNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

Inserts Node into the front the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[insertNode](SizedLinkedList.SizedLinkedList-1.md#insertnode)

#### Defined in

[SizedLinkedList.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L30)

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[join](SizedLinkedList.SizedLinkedList-1.md#join)

#### Defined in

[LinkedList.ts:314](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L314)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[keys](SizedLinkedList.SizedLinkedList-1.md#keys)

#### Defined in

[LinkedList.ts:196](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L196)

___

### map

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

Maps list items into a new array

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

[SizedLinkedList.ts:104](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L104)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from end of the list

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[pop](SizedLinkedList.SizedLinkedList-1.md#pop)

#### Defined in

[SizedLinkedList.ts:14](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L14)

___

### recycle

▸ **recycle**(): [`Queue`](Queue.Queue-1.md)<`T`\>

Moves element from front of list to the end

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[recycle](SizedLinkedList.SizedLinkedList-1.md#recycle)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`Queue`](Queue.Queue-1.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reduce](SizedLinkedList.SizedLinkedList-1.md#reduce)

#### Defined in

[LinkedList.ts:232](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L232)

___

### reduceRight

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

Reduces items from the end of the list to the front

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

[SizedLinkedList.ts:57](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L57)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[reverse](SizedLinkedList.SizedLinkedList-1.md#reverse)

#### Defined in

[LinkedList.ts:206](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L206)

___

### reverseMap

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

Maps list items from the end of the set to the front into a new array

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

[SizedLinkedList.ts:122](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L122)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the list

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[shift](SizedLinkedList.SizedLinkedList-1.md#shift)

#### Defined in

[SizedLinkedList.ts:22](https://github.com/zimmed/prefab/blob/5b06828/src/SizedLinkedList.ts#L22)

___

### tailNode

▸ **tailNode**(`node`): [`Queue`](Queue.Queue-1.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[tailNode](SizedLinkedList.SizedLinkedList-1.md#tailnode)

#### Defined in

[LinkedList.ts:153](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L153)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[toArray](SizedLinkedList.SizedLinkedList-1.md#toarray)

#### Defined in

[LinkedList.ts:176](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L176)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[toJSON](SizedLinkedList.SizedLinkedList-1.md#tojson)

#### Defined in

[LinkedList.ts:356](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L356)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[values](SizedLinkedList.SizedLinkedList-1.md#values)

#### Defined in

[LinkedList.ts:181](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L181)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`, `type?`): [`Queue`](Queue.Queue-1.md)<`T`\>

Static factory method as alias for class constructor

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

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[create](SizedLinkedList.SizedLinkedList-1.md#create)

#### Defined in

[Queue.ts:13](https://github.com/zimmed/prefab/blob/5b06828/src/Queue.ts#L13)

___

### from

▸ `Static` **from**<`T`\>(`iterable`, `type?`): [`Queue`](Queue.Queue-1.md)<`T`\>

Same as LinkedList.create() but requires constructor arg

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `type?` | [`Type`](../enums/Queue.Type.md) |

#### Returns

[`Queue`](Queue.Queue-1.md)<`T`\>

#### Overrides

[SizedLinkedList](SizedLinkedList.SizedLinkedList-1.md).[from](SizedLinkedList.SizedLinkedList-1.md#from)

#### Defined in

[Queue.ts:21](https://github.com/zimmed/prefab/blob/5b06828/src/Queue.ts#L21)
