[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [LinkedSet](../modules/LinkedSet.md) / LinkedSet

# Class: LinkedSet<T, N\>

[LinkedSet](../modules/LinkedSet.md).LinkedSet

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends [`LNode`](../modules/LinkedList.md#lnode)<`T`\>[`LNode`](../modules/LinkedList.md#lnode)<`T`\> |

## Hierarchy

- [`LinkedList`](LinkedList.LinkedList-1.md)<`T`, `N`\>

  ↳ **`LinkedSet`**

  ↳↳ [`SortedSet`](SortedSet.SortedSet-1.md)

  ↳↳ [`UniQueue`](UniQueue.UniQueue-1.md)

## Table of contents

### Constructors

- [constructor](LinkedSet.LinkedSet-1.md#constructor)

### Properties

- [\_head](LinkedSet.LinkedSet-1.md#_head)
- [\_map](LinkedSet.LinkedSet-1.md#_map)
- [\_tail](LinkedSet.LinkedSet-1.md#_tail)

### Accessors

- [head](LinkedSet.LinkedSet-1.md#head)
- [size](LinkedSet.LinkedSet-1.md#size)
- [tail](LinkedSet.LinkedSet-1.md#tail)

### Methods

- [[iterator]](LinkedSet.LinkedSet-1.md#[iterator])
- [add](LinkedSet.LinkedSet-1.md#add)
- [addNode](LinkedSet.LinkedSet-1.md#addnode)
- [append](LinkedSet.LinkedSet-1.md#append)
- [clear](LinkedSet.LinkedSet-1.md#clear)
- [cycle](LinkedSet.LinkedSet-1.md#cycle)
- [delete](LinkedSet.LinkedSet-1.md#delete)
- [deleteNode](LinkedSet.LinkedSet-1.md#deletenode)
- [entries](LinkedSet.LinkedSet-1.md#entries)
- [filter](LinkedSet.LinkedSet-1.md#filter)
- [find](LinkedSet.LinkedSet-1.md#find)
- [findRight](LinkedSet.LinkedSet-1.md#findright)
- [forEach](LinkedSet.LinkedSet-1.md#foreach)
- [has](LinkedSet.LinkedSet-1.md#has)
- [headNode](LinkedSet.LinkedSet-1.md#headnode)
- [insert](LinkedSet.LinkedSet-1.md#insert)
- [insertNode](LinkedSet.LinkedSet-1.md#insertnode)
- [join](LinkedSet.LinkedSet-1.md#join)
- [keys](LinkedSet.LinkedSet-1.md#keys)
- [map](LinkedSet.LinkedSet-1.md#map)
- [pop](LinkedSet.LinkedSet-1.md#pop)
- [recycle](LinkedSet.LinkedSet-1.md#recycle)
- [reduce](LinkedSet.LinkedSet-1.md#reduce)
- [reduceRight](LinkedSet.LinkedSet-1.md#reduceright)
- [reverse](LinkedSet.LinkedSet-1.md#reverse)
- [reverseMap](LinkedSet.LinkedSet-1.md#reversemap)
- [shift](LinkedSet.LinkedSet-1.md#shift)
- [tailNode](LinkedSet.LinkedSet-1.md#tailnode)
- [toArray](LinkedSet.LinkedSet-1.md#toarray)
- [toJSON](LinkedSet.LinkedSet-1.md#tojson)
- [values](LinkedSet.LinkedSet-1.md#values)
- [create](LinkedSet.LinkedSet-1.md#create)
- [from](LinkedSet.LinkedSet-1.md#from)

## Constructors

### constructor

• **new LinkedSet**<`T`, `N`\>(`iterable?`, `init?`)

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

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[constructor](LinkedList.LinkedList-1.md#constructor)

#### Defined in

[LinkedList.ts:59](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L59)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[_head](LinkedList.LinkedList-1.md#_head)

#### Defined in

[LinkedList.ts:30](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `N`\>

#### Defined in

[LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[_tail](LinkedList.LinkedList-1.md#_tail)

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

[LinkedList](LinkedList.LinkedList-1.md).[[iterator]](LinkedList.LinkedList-1.md#[iterator])

#### Defined in

[LinkedList.ts:360](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L360)

___

### add

▸ **add**(`item`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Appends unique item to end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[add](LinkedList.LinkedList-1.md#add)

#### Defined in

[LinkedSet.ts:36](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L36)

___

### addNode

▸ **addNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[addNode](LinkedList.LinkedList-1.md#addnode)

#### Defined in

[LinkedSet.ts:52](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L52)

___

### append

▸ **append**(`item`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[append](LinkedList.LinkedList-1.md#append)

#### Defined in

[LinkedList.ts:110](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears set

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[clear](LinkedList.LinkedList-1.md#clear)

#### Defined in

[LinkedSet.ts:58](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L58)

___

### cycle

▸ **cycle**(): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[cycle](LinkedList.LinkedList-1.md#cycle)

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

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[delete](LinkedList.LinkedList-1.md#delete)

#### Defined in

[LinkedSet.ts:64](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L64)

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

[LinkedList](LinkedList.LinkedList-1.md).[deleteNode](LinkedList.LinkedList-1.md#deletenode)

#### Defined in

[LinkedList.ts:343](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L343)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[entries](LinkedList.LinkedList-1.md#entries)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[filter](LinkedList.LinkedList-1.md#filter)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[find](LinkedList.LinkedList-1.md#find)

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
| `predicate` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `ThisArg`, `void`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[forEach](LinkedList.LinkedList-1.md#foreach)

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

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[has](LinkedList.LinkedList-1.md#has)

#### Defined in

[LinkedSet.ts:31](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L31)

___

### headNode

▸ **headNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[headNode](LinkedList.LinkedList-1.md#headnode)

#### Defined in

[LinkedList.ts:138](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L138)

___

### insert

▸ **insert**(`item`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Inserts unique item into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[insert](LinkedList.LinkedList-1.md#insert)

#### Defined in

[LinkedSet.ts:41](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L41)

___

### insertNode

▸ **insertNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[insertNode](LinkedList.LinkedList-1.md#insertnode)

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

[LinkedList](LinkedList.LinkedList-1.md).[join](LinkedList.LinkedList-1.md#join)

#### Defined in

[LinkedList.ts:314](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L314)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[keys](LinkedList.LinkedList-1.md#keys)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[map](LinkedList.LinkedList-1.md#map)

#### Defined in

[LinkedSet.ts:94](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L94)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from the end of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[pop](LinkedList.LinkedList-1.md#pop)

#### Defined in

[LinkedSet.ts:15](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L15)

___

### recycle

▸ **recycle**(): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[recycle](LinkedList.LinkedList-1.md#recycle)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[reduce](LinkedList.LinkedList-1.md#reduce)

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
| `cb` | [`Reducer`](../modules/LinkedList.md#reducer)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Defined in

[LinkedSet.ts:75](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L75)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[reverse](LinkedList.LinkedList-1.md#reverse)

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
| `cb` | [`Callback`](../modules/LinkedList.md#callback)<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[LinkedSet.ts:100](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L100)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item off of the front of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.LinkedList-1.md).[shift](LinkedList.LinkedList-1.md#shift)

#### Defined in

[LinkedSet.ts:23](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedSet.ts#L23)

___

### tailNode

▸ **tailNode**(`node`): [`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.LinkedSet-1.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[tailNode](LinkedList.LinkedList-1.md#tailnode)

#### Defined in

[LinkedList.ts:153](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L153)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[toArray](LinkedList.LinkedList-1.md#toarray)

#### Defined in

[LinkedList.ts:176](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L176)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[toJSON](LinkedList.LinkedList-1.md#tojson)

#### Defined in

[LinkedList.ts:356](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L356)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[values](LinkedList.LinkedList-1.md#values)

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

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[create](LinkedList.LinkedList-1.md#create)

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

#### Inherited from

[LinkedList](LinkedList.LinkedList-1.md).[from](LinkedList.LinkedList-1.md#from)

#### Defined in

[LinkedList.ts:25](https://github.com/zimmed/prefab/blob/5b06828/src/LinkedList.ts#L25)
