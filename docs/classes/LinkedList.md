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

• **new LinkedList**<`T`, `N`\>(`iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> | Optional iterable with which to initialize the list |

#### Defined in

[src/LinkedList.ts:59](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L59)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L30)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Defined in

[src/LinkedList.ts:33](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L33)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L36)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:40](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

[src/LinkedList.ts:393](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L393)

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

[src/LinkedList.ts:397](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L397)

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

[src/LinkedList.ts:125](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L125)

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

[src/LinkedList.ts:369](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L369)

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

[src/LinkedList.ts:110](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Defined in

[src/LinkedList.ts:171](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L171)

___

### cycle

▸ **cycle**(): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

#### Defined in

[src/LinkedList.ts:130](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L130)

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

[src/LinkedList.ts:177](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L177)

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

[src/LinkedList.ts:378](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L378)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Defined in

[src/LinkedList.ts:199](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L199)

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

[src/LinkedList.ts:297](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L297)

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

[src/LinkedList.ts:298](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L298)

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

[src/LinkedList.ts:271](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L271)

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

[src/LinkedList.ts:272](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L272)

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

[src/LinkedList.ts:229](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L229)

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

[src/LinkedList.ts:230](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L230)

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

[src/LinkedList.ts:105](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L105)

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

[src/LinkedList.ts:143](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L143)

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

[src/LinkedList.ts:115](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L115)

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

[src/LinkedList.ts:357](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L357)

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

[src/LinkedList.ts:349](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L349)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

[src/LinkedList.ts:209](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L209)

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

[src/LinkedList.ts:324](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L324)

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

[src/LinkedList.ts:325](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L325)

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes and returns the last element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:70](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L70)

___

### recycle

▸ **recycle**(): [`LinkedList`](LinkedList.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedList`](LinkedList.md)<`T`, `N`\>

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
| `cb` | `Reducer`<`T`, [`LinkedList`](LinkedList.md)<`T`, `N`\>, `RT`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedList`](LinkedList.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Defined in

[src/LinkedList.ts:251](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L251)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

[src/LinkedList.ts:219](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L219)

___

### shift

▸ **shift**(): `undefined` \| `T`

Removes and returns the first element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedList.ts:86](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L86)

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

[src/LinkedList.ts:158](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L158)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:182](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L182)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/LinkedList.ts:389](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L389)

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

[src/LinkedList.ts:120](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L120)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

[src/LinkedList.ts:194](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L194)

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

[src/LinkedList.ts:20](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L20)

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

[src/LinkedList.ts:25](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L25)
