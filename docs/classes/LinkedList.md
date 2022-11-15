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
- [concat](LinkedList.md#concat)
- [concatUnsafe](LinkedList.md#concatunsafe)
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
- [new](LinkedList.md#new)
- [pop](LinkedList.md#pop)
- [recycle](LinkedList.md#recycle)
- [reduce](LinkedList.md#reduce)
- [reverse](LinkedList.md#reverse)
- [shift](LinkedList.md#shift)
- [slice](LinkedList.md#slice)
- [tailNode](LinkedList.md#tailnode)
- [toArray](LinkedList.md#toarray)
- [toArraySlice](LinkedList.md#toarrayslice)
- [toJSON](LinkedList.md#tojson)
- [unshift](LinkedList.md#unshift)
- [values](LinkedList.md#values)

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

[src/LinkedList.ts:49](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L49)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Defined in

[src/LinkedList.ts:20](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L20)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Defined in

[src/LinkedList.ts:23](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L23)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:26](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L26)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L30)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:464](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L464)

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

[src/LinkedList.ts:468](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L468)

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

[src/LinkedList.ts:116](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L116)

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

[src/LinkedList.ts:440](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L440)

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

[src/LinkedList.ts:101](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L101)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Defined in

[src/LinkedList.ts:163](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L163)

___

### concat

▸ **concat**(...`lists`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Concatenates the the lists into a new list

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | readonly (`T` \| [`LinkedList`](LinkedList.md)<`T`, `N`\> \| `T`[])[] |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:174](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L174)

___

### concatUnsafe

▸ **concatUnsafe**(`list`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

appends the specified list directly onto the tail of the second list

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`LinkedList`](LinkedList.md)<`T`, `N`\> |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:208](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L208)

___

### cycle

▸ **cycle**(): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:121](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L121)

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

[src/LinkedList.ts:169](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L169)

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

[src/LinkedList.ts:449](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L449)

___

### entries

▸ **entries**(): `IterableIterator`<[`T`, `T`]\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`IterableIterator`<[`T`, `T`]\>

#### Defined in

[src/LinkedList.ts:269](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L269)

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

[src/LinkedList.ts:368](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L368)

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

[src/LinkedList.ts:369](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L369)

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

[src/LinkedList.ts:342](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L342)

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

[src/LinkedList.ts:343](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L343)

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

[src/LinkedList.ts:300](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L300)

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

[src/LinkedList.ts:301](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L301)

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

[src/LinkedList.ts:96](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L96)

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

[src/LinkedList.ts:134](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L134)

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

[src/LinkedList.ts:106](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L106)

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

[src/LinkedList.ts:428](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L428)

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

[src/LinkedList.ts:420](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L420)

___

### keys

▸ **keys**(): `IterableIterator`<`T`\>

Alias for values() method

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:264](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L264)

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

[src/LinkedList.ts:395](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L395)

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

[src/LinkedList.ts:396](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L396)

___

### new

▸ **new**(`iterable?`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:56](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L56)

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes and returns the last element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:61](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L61)

___

### recycle

▸ **recycle**(): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:126](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L126)

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

[src/LinkedList.ts:321](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L321)

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

[src/LinkedList.ts:322](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L322)

___

### reverse

▸ **reverse**(): `IterableIterator`<`T`\>

Iterates through list items in reverse

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:290](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L290)

___

### shift

▸ **shift**(): `undefined` \| `T`

Removes and returns the first element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:77](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L77)

___

### slice

▸ **slice**(`start?`, `end?`): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Creates a new slice of the linked list

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `0` |
| `end` | `number` | `Infinity` |

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:218](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L218)

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

[src/LinkedList.ts:150](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L150)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:252](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L252)

___

### toArraySlice

▸ **toArraySlice**(`start?`, `end?`): `T`[]

Converts list to an array slice

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `0` |
| `end` | `number` | `Infinity` |

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:235](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L235)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:460](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L460)

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

[src/LinkedList.ts:111](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L111)

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Iterates through list items

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/LinkedList.ts:280](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L280)
