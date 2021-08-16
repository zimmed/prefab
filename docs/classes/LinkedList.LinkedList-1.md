[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [LinkedList](../modules/LinkedList.md) / LinkedList

# Class: LinkedList<T, N\>

[LinkedList](../modules/LinkedList.md).LinkedList

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

## Hierarchy

- **`LinkedList`**

  ↳ [`LinkedSet`](LinkedSet.LinkedSet-1.md)

  ↳ [`SizedLinkedList`](SizedLinkedList.SizedLinkedList-1.md)

## Table of contents

### Constructors

- [constructor](LinkedList.LinkedList-1.md#constructor)

### Properties

- [\_head](LinkedList.LinkedList-1.md#_head)
- [\_tail](LinkedList.LinkedList-1.md#_tail)

### Accessors

- [head](LinkedList.LinkedList-1.md#head)
- [tail](LinkedList.LinkedList-1.md#tail)

### Methods

- [[iterator]](LinkedList.LinkedList-1.md#[iterator])
- [\_findNode](LinkedList.LinkedList-1.md#_findnode)
- [add](LinkedList.LinkedList-1.md#add)
- [addNode](LinkedList.LinkedList-1.md#addnode)
- [append](LinkedList.LinkedList-1.md#append)
- [clear](LinkedList.LinkedList-1.md#clear)
- [cycle](LinkedList.LinkedList-1.md#cycle)
- [delete](LinkedList.LinkedList-1.md#delete)
- [deleteNode](LinkedList.LinkedList-1.md#deletenode)
- [entries](LinkedList.LinkedList-1.md#entries)
- [filter](LinkedList.LinkedList-1.md#filter)
- [find](LinkedList.LinkedList-1.md#find)
- [forEach](LinkedList.LinkedList-1.md#foreach)
- [has](LinkedList.LinkedList-1.md#has)
- [headNode](LinkedList.LinkedList-1.md#headnode)
- [insert](LinkedList.LinkedList-1.md#insert)
- [insertNode](LinkedList.LinkedList-1.md#insertnode)
- [join](LinkedList.LinkedList-1.md#join)
- [keys](LinkedList.LinkedList-1.md#keys)
- [map](LinkedList.LinkedList-1.md#map)
- [pop](LinkedList.LinkedList-1.md#pop)
- [recycle](LinkedList.LinkedList-1.md#recycle)
- [reduce](LinkedList.LinkedList-1.md#reduce)
- [reverse](LinkedList.LinkedList-1.md#reverse)
- [shift](LinkedList.LinkedList-1.md#shift)
- [tailNode](LinkedList.LinkedList-1.md#tailnode)
- [toArray](LinkedList.LinkedList-1.md#toarray)
- [toJSON](LinkedList.LinkedList-1.md#tojson)
- [values](LinkedList.LinkedList-1.md#values)
- [create](LinkedList.LinkedList-1.md#create)
- [from](LinkedList.LinkedList-1.md#from)

## Constructors

### constructor

• **new LinkedList**<`T`, `N`\>(`iterable?`, `init?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> | Optional iterable with which to initialize the list |
| `init?` | `object` | - |

#### Defined in

[LinkedList.ts:59](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L59)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Defined in

[LinkedList.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L30)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Defined in

[LinkedList.ts:33](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L33)

## Accessors

### head

• `get` **head**(): `undefined` \| `N`

Head of the list

#### Returns

`undefined` \| `N`

#### Defined in

[LinkedList.ts:36](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L36)

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

#### Defined in

[LinkedList.ts:360](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L360)

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

[LinkedList.ts:364](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L364)

___

### add

▸ **add**(`item`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

[LinkedList.ts:120](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L120)

___

### addNode

▸ **addNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

[LinkedList.ts:334](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L334)

___

### append

▸ **append**(`item`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

[LinkedList.ts:110](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Defined in

[LinkedList.ts:165](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L165)

___

### cycle

▸ **cycle**(): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

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

#### Defined in

[LinkedList.ts:171](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L171)

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

[LinkedList.ts:343](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L343)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Defined in

[LinkedList.ts:251](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L251)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

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

#### Defined in

[LinkedList.ts:105](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L105)

___

### headNode

▸ **headNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

[LinkedList.ts:138](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L138)

___

### insert

▸ **insert**(`item`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Adds item to front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

[LinkedList.ts:115](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L115)

___

### insertNode

▸ **insertNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

[LinkedList.ts:322](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L322)

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

[LinkedList.ts:314](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L314)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

[LinkedList.ts:196](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L196)

___

### map

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

Maps list items into new array (same signature as Array.prototype.map)

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[LinkedList.ts:294](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L294)

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes and returns the last element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[LinkedList.ts:70](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L70)

___

### recycle

▸ **recycle**(): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Defined in

[LinkedList.ts:232](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L232)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

[LinkedList.ts:206](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L206)

___

### shift

▸ **shift**(): `undefined` \| `T`

Removes and returns the first element of the list (or undefined if list is empty)

#### Returns

`undefined` \| `T`

#### Defined in

[LinkedList.ts:86](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L86)

___

### tailNode

▸ **tailNode**(`node`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

#### Defined in

[LinkedList.ts:153](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L153)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Defined in

[LinkedList.ts:176](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L176)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Defined in

[LinkedList.ts:356](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L356)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Defined in

[LinkedList.ts:181](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L181)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

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

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

#### Defined in

[LinkedList.ts:20](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L20)

___

### from

▸ `Static` **from**<`T`\>(`iterable`): [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

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

[`LinkedList`](LinkedList.LinkedList-1.md)<`T`, [`LNode`](../modules/LinkedList.md#lnode)<`T`\>\>

#### Defined in

[LinkedList.ts:25](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L25)
