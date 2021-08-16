[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [SortedSet](../modules/SortedSet.md) / SortedSet

# Class: SortedSet<T, N\>

[SortedSet](../modules/SortedSet.md).SortedSet

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\>`LNode`<`T`\> |

## Hierarchy

- [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

  ↳ **`SortedSet`**

  ↳↳ [`PriorityQueue`](PriorityQueue.PriorityQueue-1.md)

## Table of contents

### Constructors

- [constructor](SortedSet.SortedSet-1.md#constructor)

### Properties

- [\_cmp](SortedSet.SortedSet-1.md#_cmp)
- [\_head](SortedSet.SortedSet-1.md#_head)
- [\_map](SortedSet.SortedSet-1.md#_map)
- [\_tail](SortedSet.SortedSet-1.md#_tail)
- [\_tree](SortedSet.SortedSet-1.md#_tree)

### Accessors

- [head](SortedSet.SortedSet-1.md#head)
- [size](SortedSet.SortedSet-1.md#size)
- [tail](SortedSet.SortedSet-1.md#tail)

### Methods

- [[iterator]](SortedSet.SortedSet-1.md#[iterator])
- [add](SortedSet.SortedSet-1.md#add)
- [addNode](SortedSet.SortedSet-1.md#addnode)
- [append](SortedSet.SortedSet-1.md#append)
- [clear](SortedSet.SortedSet-1.md#clear)
- [cycle](SortedSet.SortedSet-1.md#cycle)
- [delete](SortedSet.SortedSet-1.md#delete)
- [deleteNode](SortedSet.SortedSet-1.md#deletenode)
- [entries](SortedSet.SortedSet-1.md#entries)
- [filter](SortedSet.SortedSet-1.md#filter)
- [find](SortedSet.SortedSet-1.md#find)
- [findRight](SortedSet.SortedSet-1.md#findright)
- [forEach](SortedSet.SortedSet-1.md#foreach)
- [has](SortedSet.SortedSet-1.md#has)
- [headNode](SortedSet.SortedSet-1.md#headnode)
- [insert](SortedSet.SortedSet-1.md#insert)
- [insertNode](SortedSet.SortedSet-1.md#insertnode)
- [join](SortedSet.SortedSet-1.md#join)
- [keys](SortedSet.SortedSet-1.md#keys)
- [map](SortedSet.SortedSet-1.md#map)
- [pop](SortedSet.SortedSet-1.md#pop)
- [recycle](SortedSet.SortedSet-1.md#recycle)
- [reduce](SortedSet.SortedSet-1.md#reduce)
- [reduceRight](SortedSet.SortedSet-1.md#reduceright)
- [reverse](SortedSet.SortedSet-1.md#reverse)
- [reverseMap](SortedSet.SortedSet-1.md#reversemap)
- [search](SortedSet.SortedSet-1.md#search)
- [shift](SortedSet.SortedSet-1.md#shift)
- [tailNode](SortedSet.SortedSet-1.md#tailnode)
- [toArray](SortedSet.SortedSet-1.md#toarray)
- [toJSON](SortedSet.SortedSet-1.md#tojson)
- [values](SortedSet.SortedSet-1.md#values)
- [create](SortedSet.SortedSet-1.md#create)
- [from](SortedSet.SortedSet-1.md#from)

## Constructors

### constructor

• **new SortedSet**<`T`, `N`\>(`iterable?`, `compareFunction?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\>`LNode`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `compareFunction` | [`Sort`](../modules/SortedSet.md#sort)<`T`, `any`\> |

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[constructor](LinkedSet.LinkedSet-1.md#constructor)

#### Defined in

[SortedSet.ts:40](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L40)

## Properties

### \_cmp

• `Private` `Readonly` **\_cmp**: [`Sort`](../modules/SortedSet.md#sort)<`T`, `any`\>

#### Defined in

[SortedSet.ts:38](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L38)

___

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_head](LinkedSet.LinkedSet-1.md#_head)

#### Defined in

[LinkedList.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_map](LinkedSet.LinkedSet-1.md#_map)

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[_tail](LinkedSet.LinkedSet-1.md#_tail)

#### Defined in

[LinkedList.ts:33](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L33)

___

### \_tree

• `Protected` `Optional` **\_tree**: `TNode`<`T`\>

#### Defined in

[SortedSet.ts:35](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L35)

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

▸ **add**(`item`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Appends item onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[add](LinkedSet.LinkedSet-1.md#add)

#### Defined in

[SortedSet.ts:105](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L105)

___

### addNode

▸ **addNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[addNode](LinkedSet.LinkedSet-1.md#addnode)

#### Defined in

[LinkedSet.ts:52](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L52)

___

### append

▸ **append**(`item`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[append](LinkedSet.LinkedSet-1.md#append)

#### Defined in

[LinkedList.ts:110](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears the set

#### Returns

`void`

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[clear](LinkedSet.LinkedSet-1.md#clear)

#### Defined in

[SortedSet.ts:94](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L94)

___

### cycle

▸ **cycle**(): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[cycle](LinkedSet.LinkedSet-1.md#cycle)

#### Defined in

[LinkedList.ts:125](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L125)

___

### delete

▸ **delete**(`item`): `boolean`

Deletes specified item from the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[delete](LinkedSet.LinkedSet-1.md#delete)

#### Defined in

[SortedSet.ts:147](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L147)

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

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[deleteNode](LinkedSet.LinkedSet-1.md#deletenode)

#### Defined in

[LinkedList.ts:343](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L343)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
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

▸ **headNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[headNode](LinkedSet.LinkedSet-1.md#headnode)

#### Defined in

[LinkedList.ts:138](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L138)

___

### insert

▸ **insert**(`item`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Inserts item into the front the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[insert](LinkedSet.LinkedSet-1.md#insert)

#### Defined in

[SortedSet.ts:100](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L100)

___

### insertNode

▸ **insertNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
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

Pops item from end of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[pop](LinkedSet.LinkedSet-1.md#pop)

#### Defined in

[SortedSet.ts:72](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L72)

___

### recycle

▸ **recycle**(): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.LinkedSet-1.md).[reverseMap](LinkedSet.LinkedSet-1.md#reversemap)

#### Defined in

[LinkedSet.ts:100](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L100)

___

### search

▸ **search**(`compareFunction`, `node?`): `undefined` \| `T`

Searches set using compare function to find first match

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFunction` | (`a`: `T`) => `number` | Takes an item from the set and returns 0 if a match, -1 (<0) if the desired match is lower in the sort order (closer to the front of the list), or 1 (>0) if the desired match is higher (towards the end of the list) |
| `node` | `undefined` \| `TNode`<`T`\> | - |

#### Returns

`undefined` \| `T`

#### Defined in

[SortedSet.ts:52](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L52)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[shift](LinkedSet.LinkedSet-1.md#shift)

#### Defined in

[SortedSet.ts:83](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L83)

___

### tailNode

▸ **tailNode**(`node`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `N`\>

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

▸ `Static` **create**<`T`\>(`iterable?`, `compareFunction?`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `LNode`<`T`\>\>

Static factory method as alias for class constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `compareFunction?` | [`Sort`](../modules/SortedSet.md#sort)<`T`, `any`\> |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `LNode`<`T`\>\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[create](LinkedSet.LinkedSet-1.md#create)

#### Defined in

[SortedSet.ts:19](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L19)

___

### from

▸ `Static` **from**<`T`\>(`iterable`, `compareFunction?`): [`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `LNode`<`T`\>\>

Same as LinkedList.create() but requires constructor arg

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `compareFunction?` | [`Sort`](../modules/SortedSet.md#sort)<`T`, `any`\> |

#### Returns

[`SortedSet`](SortedSet.SortedSet-1.md)<`T`, `LNode`<`T`\>\>

#### Overrides

[LinkedSet](LinkedSet.LinkedSet-1.md).[from](LinkedSet.LinkedSet-1.md#from)

#### Defined in

[SortedSet.ts:27](https://github.com/zimmed/prefab/blob/5b06828/src/SortedSet.ts#L27)
