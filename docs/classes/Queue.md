[@zimmed/prefab](../README.md) / [Exports](../modules.md) / Queue

# Class: Queue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SizedLinkedList`](SizedLinkedList.md)<`T`\>

  ↳ **`Queue`**

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [\_head](Queue.md#_head)
- [\_size](Queue.md#_size)
- [\_tail](Queue.md#_tail)
- [\_type](Queue.md#_type)
- [Type](Queue.md#type)

### Accessors

- [head](Queue.md#head)
- [size](Queue.md#size)
- [tail](Queue.md#tail)

### Methods

- [[iterator]](Queue.md#[iterator])
- [add](Queue.md#add)
- [addNode](Queue.md#addnode)
- [append](Queue.md#append)
- [clear](Queue.md#clear)
- [cycle](Queue.md#cycle)
- [delete](Queue.md#delete)
- [deleteNode](Queue.md#deletenode)
- [dequeue](Queue.md#dequeue)
- [enqueue](Queue.md#enqueue)
- [entries](Queue.md#entries)
- [filter](Queue.md#filter)
- [find](Queue.md#find)
- [findRight](Queue.md#findright)
- [forEach](Queue.md#foreach)
- [has](Queue.md#has)
- [headNode](Queue.md#headnode)
- [insert](Queue.md#insert)
- [insertNode](Queue.md#insertnode)
- [join](Queue.md#join)
- [keys](Queue.md#keys)
- [map](Queue.md#map)
- [pop](Queue.md#pop)
- [recycle](Queue.md#recycle)
- [reduce](Queue.md#reduce)
- [reduceRight](Queue.md#reduceright)
- [reverse](Queue.md#reverse)
- [reverseMap](Queue.md#reversemap)
- [shift](Queue.md#shift)
- [tailNode](Queue.md#tailnode)
- [toArray](Queue.md#toarray)
- [toJSON](Queue.md#tojson)
- [unshift](Queue.md#unshift)
- [values](Queue.md#values)
- [create](Queue.md#create)
- [from](Queue.md#from)

## Constructors

### constructor

• **new Queue**<`T`\>(`iterable?`, `type?`)

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

[SizedLinkedList](SizedLinkedList.md).[constructor](SizedLinkedList.md#constructor)

#### Defined in

[src/Queue.ts:31](https://github.com/zimmed/prefab/blob/a5ffdd1/src/Queue.ts#L31)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `LNode`<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[_head](SizedLinkedList.md#_head)

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L30)

___

### \_size

• `Protected` **\_size**: `number`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[_size](SizedLinkedList.md#_size)

#### Defined in

[src/SizedLinkedList.ts:6](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L6)

___

### \_tail

• `Protected` `Optional` **\_tail**: `LNode`<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[_tail](SizedLinkedList.md#_tail)

#### Defined in

[src/LinkedList.ts:33](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L33)

___

### \_type

• `Protected` `Readonly` **\_type**: `Type`

#### Defined in

[src/Queue.ts:29](https://github.com/zimmed/prefab/blob/a5ffdd1/src/Queue.ts#L29)

___

### Type

▪ `Static` **Type**: typeof `Type` = `Type`

#### Defined in

[src/Queue.ts:10](https://github.com/zimmed/prefab/blob/a5ffdd1/src/Queue.ts#L10)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

SizedLinkedList.head

#### Defined in

[src/LinkedList.ts:36](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L36)

___

### size

• `get` **size**(): `number`

Current size of list

#### Returns

`number`

#### Inherited from

SizedLinkedList.size

#### Defined in

[src/SizedLinkedList.ts:9](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L9)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

SizedLinkedList.tail

#### Defined in

[src/LinkedList.ts:40](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[[iterator]](SizedLinkedList.md#[iterator])

#### Defined in

[src/LinkedList.ts:391](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L391)

___

### add

▸ **add**(`item`): [`Queue`](Queue.md)<`T`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[add](SizedLinkedList.md#add)

#### Defined in

[src/LinkedList.ts:122](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L122)

___

### addNode

▸ **addNode**(`node`): [`Queue`](Queue.md)<`T`\>

Appends Node onto the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[addNode](SizedLinkedList.md#addnode)

#### Defined in

[src/SizedLinkedList.ts:42](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L42)

___

### append

▸ **append**(`item`): [`Queue`](Queue.md)<`T`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[append](SizedLinkedList.md#append)

#### Defined in

[src/LinkedList.ts:107](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L107)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[clear](SizedLinkedList.md#clear)

#### Defined in

[src/SizedLinkedList.ts:48](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L48)

___

### cycle

▸ **cycle**(): [`Queue`](Queue.md)<`T`\>

Moves element from end of list to the front

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[cycle](SizedLinkedList.md#cycle)

#### Defined in

[src/LinkedList.ts:127](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L127)

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

[SizedLinkedList](SizedLinkedList.md).[delete](SizedLinkedList.md#delete)

#### Defined in

[src/LinkedList.ts:174](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L174)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

Deletes specified node from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `LNode`<`T`\> |

#### Returns

`boolean`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[deleteNode](SizedLinkedList.md#deletenode)

#### Defined in

[src/SizedLinkedList.ts:54](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L54)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

Shift item from front of front of Queue if type is FIFO, otherwise pop from end of Queue (LIFO)

#### Returns

`undefined` \| `T`

#### Defined in

[src/Queue.ts:45](https://github.com/zimmed/prefab/blob/a5ffdd1/src/Queue.ts#L45)

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

[src/Queue.ts:40](https://github.com/zimmed/prefab/blob/a5ffdd1/src/Queue.ts#L40)

___

### entries

▸ **entries**(): `IterableIterator`<[`T`, `T`]\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`IterableIterator`<[`T`, `T`]\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[entries](SizedLinkedList.md#entries)

#### Defined in

[src/LinkedList.ts:196](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L196)

___

### filter

▸ **filter**(`predicate`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`Queue`](Queue.md)<`T`\>, `boolean`, [`Queue`](Queue.md)<`T`\>\> |

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[filter](SizedLinkedList.md#filter)

#### Defined in

[src/LinkedList.ts:295](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L295)

▸ **filter**<`This`\>(`predicate`, `thisArg`): `T`[]

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`Queue`](Queue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[filter](SizedLinkedList.md#filter)

#### Defined in

[src/LinkedList.ts:296](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L296)

___

### find

▸ **find**(`predicate`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`Queue`](Queue.md)<`T`\>, `boolean`, [`Queue`](Queue.md)<`T`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[find](SizedLinkedList.md#find)

#### Defined in

[src/LinkedList.ts:269](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L269)

▸ **find**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`Queue`](Queue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[find](SizedLinkedList.md#find)

#### Defined in

[src/LinkedList.ts:270](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L270)

___

### findRight

▸ **findRight**(`predicate`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`Queue`](Queue.md)<`T`\>, `boolean`, [`Queue`](Queue.md)<`T`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[findRight](SizedLinkedList.md#findright)

#### Defined in

[src/SizedLinkedList.ts:84](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L84)

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`Queue`](Queue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[findRight](SizedLinkedList.md#findright)

#### Defined in

[src/SizedLinkedList.ts:85](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L85)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`Queue`](Queue.md)<`T`\>, `void`, [`Queue`](Queue.md)<`T`\>\> |

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[forEach](SizedLinkedList.md#foreach)

#### Defined in

[src/LinkedList.ts:227](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L227)

▸ **forEach**<`ThisArg`\>(`cb`, `thisArg?`): `void`

#### Type parameters

| Name |
| :------ |
| `ThisArg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`Queue`](Queue.md)<`T`\>\> |
| `thisArg?` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[forEach](SizedLinkedList.md#foreach)

#### Defined in

[src/LinkedList.ts:228](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L228)

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

[SizedLinkedList](SizedLinkedList.md).[has](SizedLinkedList.md#has)

#### Defined in

[src/LinkedList.ts:102](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L102)

___

### headNode

▸ **headNode**(`node`): [`Queue`](Queue.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[headNode](SizedLinkedList.md#headnode)

#### Defined in

[src/LinkedList.ts:140](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L140)

___

### insert

▸ **insert**(`item`): [`Queue`](Queue.md)<`T`\>

Adds item to front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[insert](SizedLinkedList.md#insert)

#### Defined in

[src/LinkedList.ts:112](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L112)

___

### insertNode

▸ **insertNode**(`node`): [`Queue`](Queue.md)<`T`\>

Inserts Node into the front the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[insertNode](SizedLinkedList.md#insertnode)

#### Defined in

[src/SizedLinkedList.ts:36](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L36)

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

[SizedLinkedList](SizedLinkedList.md).[join](SizedLinkedList.md#join)

#### Defined in

[src/LinkedList.ts:347](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L347)

___

### keys

▸ **keys**(): `IterableIterator`<`T`\>

Alias for values() method

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[keys](SizedLinkedList.md#keys)

#### Defined in

[src/LinkedList.ts:191](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L191)

___

### map

▸ **map**<`RT`\>(`cb`): `RT`[]

Maps list items into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`Queue`](Queue.md)<`T`\>, `RT`, [`Queue`](Queue.md)<`T`\>\> |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[map](SizedLinkedList.md#map)

#### Defined in

[src/SizedLinkedList.ts:110](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L110)

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`Queue`](Queue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[map](SizedLinkedList.md#map)

#### Defined in

[src/SizedLinkedList.ts:111](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L111)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from end of the list

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[pop](SizedLinkedList.md#pop)

#### Defined in

[src/SizedLinkedList.ts:14](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L14)

___

### recycle

▸ **recycle**(): [`Queue`](Queue.md)<`T`\>

Moves element from front of list to the end

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[recycle](SizedLinkedList.md#recycle)

#### Defined in

[src/LinkedList.ts:132](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L132)

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
| `cb` | `Reducer`<`T`, [`Queue`](Queue.md)<`T`\>, `RT`, [`Queue`](Queue.md)<`T`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[reduce](SizedLinkedList.md#reduce)

#### Defined in

[src/LinkedList.ts:248](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L248)

▸ **reduce**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`Queue`](Queue.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[reduce](SizedLinkedList.md#reduce)

#### Defined in

[src/LinkedList.ts:249](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L249)

___

### reduceRight

▸ **reduceRight**<`RT`\>(`cb`, `initialValue`): `RT`

Reduces items from the end of the list to the front

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, [`Queue`](Queue.md)<`T`\>, `RT`, [`Queue`](Queue.md)<`T`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[reduceRight](SizedLinkedList.md#reduceright)

#### Defined in

[src/SizedLinkedList.ts:63](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L63)

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`Queue`](Queue.md)<`T`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[reduceRight](SizedLinkedList.md#reduceright)

#### Defined in

[src/SizedLinkedList.ts:64](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L64)

___

### reverse

▸ **reverse**(): `IterableIterator`<`T`\>

Iterates through list items in reverse

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[reverse](SizedLinkedList.md#reverse)

#### Defined in

[src/LinkedList.ts:217](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L217)

___

### reverseMap

▸ **reverseMap**<`RT`\>(`cb`): `RT`[]

Maps list items from the end of the set to the front into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`Queue`](Queue.md)<`T`\>, `RT`, [`Queue`](Queue.md)<`T`\>\> |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[reverseMap](SizedLinkedList.md#reversemap)

#### Defined in

[src/SizedLinkedList.ts:133](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L133)

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`Queue`](Queue.md)<`T`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[reverseMap](SizedLinkedList.md#reversemap)

#### Defined in

[src/SizedLinkedList.ts:134](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L134)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the list

#### Returns

`undefined` \| `T`

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[shift](SizedLinkedList.md#shift)

#### Defined in

[src/SizedLinkedList.ts:25](https://github.com/zimmed/prefab/blob/a5ffdd1/src/SizedLinkedList.ts#L25)

___

### tailNode

▸ **tailNode**(`node`): [`Queue`](Queue.md)<`T`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `LNode`<`T`\> |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[tailNode](SizedLinkedList.md#tailnode)

#### Defined in

[src/LinkedList.ts:155](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L155)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[toArray](SizedLinkedList.md#toarray)

#### Defined in

[src/LinkedList.ts:179](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L179)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[toJSON](SizedLinkedList.md#tojson)

#### Defined in

[src/LinkedList.ts:387](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L387)

___

### unshift

▸ **unshift**(`item`): [`Queue`](Queue.md)<`T`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[unshift](SizedLinkedList.md#unshift)

#### Defined in

[src/LinkedList.ts:117](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L117)

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Iterates through list items

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[SizedLinkedList](SizedLinkedList.md).[values](SizedLinkedList.md#values)

#### Defined in

[src/LinkedList.ts:207](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L207)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`, `type?`): [`Queue`](Queue.md)<`T`\>

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

[`Queue`](Queue.md)<`T`\>

#### Overrides

[SizedLinkedList](SizedLinkedList.md).[create](SizedLinkedList.md#create)

#### Defined in

[src/Queue.ts:13](https://github.com/zimmed/prefab/blob/a5ffdd1/src/Queue.ts#L13)

___

### from

▸ `Static` **from**<`T`\>(`iterable`, `type?`): [`Queue`](Queue.md)<`T`\>

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

[`Queue`](Queue.md)<`T`\>

#### Overrides

[SizedLinkedList](SizedLinkedList.md).[from](SizedLinkedList.md#from)

#### Defined in

[src/Queue.ts:21](https://github.com/zimmed/prefab/blob/a5ffdd1/src/Queue.ts#L21)
