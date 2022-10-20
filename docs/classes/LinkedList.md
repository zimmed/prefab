[@zimmed/prefab](../README.md) / [Exports](../modules.md) / LinkedList

# Class: LinkedList<T, N\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

## Hierarchy

- **`LinkedList`**

  ↳ [`SizedLinkedList`](SizedLinkedList.md)

  ↳ [`LinkedSet`](LinkedSet.md)

  ↳ [`LinkedCollection`](LinkedCollection.md)

## Table of contents

### Constructors

- [constructor](LinkedList.md#constructor)

### Properties

- [\_head](LinkedList.md#_head)
- [\_tail](LinkedList.md#_tail)

### Accessors

- [head](LinkedList.md#head)
- [tail](LinkedList.md#tail)

### Methods

- [[iterator]](LinkedList.md#[iterator])
- [\_findNode](LinkedList.md#_findnode)
- [add](LinkedList.md#add)
- [addNode](LinkedList.md#addnode)
- [append](LinkedList.md#append)
- [clear](LinkedList.md#clear)
- [cycle](LinkedList.md#cycle)
- [delete](LinkedList.md#delete)
- [deleteNode](LinkedList.md#deletenode)
- [entries](LinkedList.md#entries)
- [filter](LinkedList.md#filter)
- [find](LinkedList.md#find)
- [forEach](LinkedList.md#foreach)
- [has](LinkedList.md#has)
- [headNode](LinkedList.md#headnode)
- [insert](LinkedList.md#insert)
- [insertNode](LinkedList.md#insertnode)
- [join](LinkedList.md#join)
- [keys](LinkedList.md#keys)
- [map](LinkedList.md#map)
- [pop](LinkedList.md#pop)
- [recycle](LinkedList.md#recycle)
- [reduce](LinkedList.md#reduce)
- [reverse](LinkedList.md#reverse)
- [shift](LinkedList.md#shift)
- [tailNode](LinkedList.md#tailnode)
- [toArray](LinkedList.md#toarray)
- [toJSON](LinkedList.md#tojson)
- [unshift](LinkedList.md#unshift)
- [values](LinkedList.md#values)
- [create](LinkedList.md#create)
- [from](LinkedList.md#from)

## Constructors

### constructor

• **new LinkedList**<`T`, `N`\>(`iterable?`, `init?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] | Optional iterable with which to initialize the list |
| `init?` | `object` | - |

#### Defined in

[src/LinkedList.ts:59](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L59)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L30)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Defined in

[src/LinkedList.ts:33](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L33)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:36](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L36)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:40](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:391](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L391)

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

[src/LinkedList.ts:395](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L395)

___

### add

▸ **add**(`item`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:122](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L122)

___

### addNode

▸ **addNode**(`node`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:367](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L367)

___

### append

▸ **append**(`item`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:107](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L107)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Defined in

[src/LinkedList.ts:168](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L168)

___

### cycle

▸ **cycle**(): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

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

#### Defined in

[src/LinkedList.ts:174](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L174)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

Removes specified node from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `N` |

#### Returns

`boolean`

#### Defined in

[src/LinkedList.ts:376](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L376)

___

### entries

▸ **entries**(): `IterableIterator`<[`T`, `T`]\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`IterableIterator`<[`T`, `T`]\>

#### Defined in

[src/LinkedList.ts:196](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L196)

___

### filter

▸ **filter**(`predicate`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedList`](LinkedList.md)<`T`, `N`\>, `boolean`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |

#### Returns

`T`[]

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:296](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L296)

___

### find

▸ **find**(`predicate`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedList`](LinkedList.md)<`T`, `N`\>, `boolean`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |

#### Returns

`undefined` \| `T`

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:270](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L270)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`LinkedList`](LinkedList.md)<`T`, `N`\>, `void`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |

#### Returns

`void`

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
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `thisArg?` | `ThisArg` |

#### Returns

`void`

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

#### Defined in

[src/LinkedList.ts:102](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L102)

___

### headNode

▸ **headNode**(`node`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:140](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L140)

___

### insert

▸ **insert**(`item`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Adds item to front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:112](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L112)

___

### insertNode

▸ **insertNode**(`node`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:355](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L355)

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

#### Defined in

[src/LinkedList.ts:347](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L347)

___

### keys

▸ **keys**(): `IterableIterator`<`T`\>

Alias for values() method

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:191](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L191)

___

### map

▸ **map**<`RT`\>(`cb`): `RT`[]

Maps list items into new array (same signature as Array.prototype.map)

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`LinkedList`](LinkedList.md)<`T`, `N`\>, `RT`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Defined in

[src/LinkedList.ts:322](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L322)

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[src/LinkedList.ts:323](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L323)

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes and returns the last element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:67](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L67)

___

### recycle

▸ **recycle**(): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

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
| `cb` | `Reducer`<`T`, [`LinkedList`](LinkedList.md)<`T`, `N`\>, `RT`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Defined in

[src/LinkedList.ts:249](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L249)

___

### reverse

▸ **reverse**(): `IterableIterator`<`T`\>

Iterates through list items in reverse

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:217](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L217)

___

### shift

▸ **shift**(): `undefined` \| `T`

Removes and returns the first element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:83](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L83)

___

### tailNode

▸ **tailNode**(`node`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:155](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L155)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:179](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L179)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:387](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L387)

___

### unshift

▸ **unshift**(`item`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:117](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L117)

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Iterates through list items

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:207](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L207)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`): [`LinkedList`](LinkedList.md)<`T`, `LNode`<`T`\>\>

Static factory method as alias for class constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `LNode`<`T`\>\>

#### Defined in

[src/LinkedList.ts:20](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L20)

___

### from

▸ `Static` **from**<`T`\>(`iterable`): [`LinkedList`](LinkedList.md)<`T`, `LNode`<`T`\>\>

Same as LinkedList.create() but requires constructor arg

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `LNode`<`T`\>\>

#### Defined in

[src/LinkedList.ts:25](https://github.com/zimmed/prefab/blob/a5ffdd1/src/LinkedList.ts#L25)
