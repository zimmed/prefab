[@zimmed/prefab](../README.md) / [Exports](../modules.md) / LinkedSet

# Class: LinkedSet<T, N\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

## Hierarchy

- [`LinkedList`](LinkedList.md)<`T`, `N`\>

  ↳ **`LinkedSet`**

## Table of contents

### Constructors

- [constructor](LinkedSet.md#constructor)

### Properties

- [\_head](LinkedSet.md#_head)
- [\_map](LinkedSet.md#_map)
- [\_tail](LinkedSet.md#_tail)

### Accessors

- [head](LinkedSet.md#head)
- [size](LinkedSet.md#size)
- [tail](LinkedSet.md#tail)

### Methods

- [[iterator]](LinkedSet.md#[iterator])
- [add](LinkedSet.md#add)
- [addNode](LinkedSet.md#addnode)
- [append](LinkedSet.md#append)
- [clear](LinkedSet.md#clear)
- [concat](LinkedSet.md#concat)
- [concatUnsafe](LinkedSet.md#concatunsafe)
- [cycle](LinkedSet.md#cycle)
- [delete](LinkedSet.md#delete)
- [deleteNode](LinkedSet.md#deletenode)
- [entries](LinkedSet.md#entries)
- [filter](LinkedSet.md#filter)
- [find](LinkedSet.md#find)
- [findRight](LinkedSet.md#findright)
- [forEach](LinkedSet.md#foreach)
- [has](LinkedSet.md#has)
- [headNode](LinkedSet.md#headnode)
- [insert](LinkedSet.md#insert)
- [insertNode](LinkedSet.md#insertnode)
- [join](LinkedSet.md#join)
- [keys](LinkedSet.md#keys)
- [map](LinkedSet.md#map)
- [new](LinkedSet.md#new)
- [pop](LinkedSet.md#pop)
- [recycle](LinkedSet.md#recycle)
- [reduce](LinkedSet.md#reduce)
- [reduceRight](LinkedSet.md#reduceright)
- [reverse](LinkedSet.md#reverse)
- [reverseMap](LinkedSet.md#reversemap)
- [shift](LinkedSet.md#shift)
- [slice](LinkedSet.md#slice)
- [tailNode](LinkedSet.md#tailnode)
- [toArray](LinkedSet.md#toarray)
- [toArraySlice](LinkedSet.md#toarrayslice)
- [toJSON](LinkedSet.md#tojson)
- [unshift](LinkedSet.md#unshift)
- [values](LinkedSet.md#values)

## Constructors

### constructor

• **new LinkedSet**<`T`, `N`\>(`iterable?`, `init?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable?` | `T`[] \| `IterableIterator`<`T`\> | Optional iterable with which to initialize the list |
| `init?` | `object` | - |

#### Inherited from

[LinkedList](LinkedList.md).[constructor](LinkedList.md#constructor)

#### Defined in

[src/LinkedList.ts:49](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L49)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_head](LinkedList.md#_head)

#### Defined in

[src/LinkedList.ts:20](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L20)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `N`\>

#### Defined in

[src/LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_tail](LinkedList.md#_tail)

#### Defined in

[src/LinkedList.ts:23](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L23)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.head

#### Defined in

[src/LinkedList.ts:26](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L26)

___

### size

• `get` **size**(): `number`

Current size of set

#### Returns

`number`

#### Defined in

[src/LinkedSet.ts:10](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L10)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.tail

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L30)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[[iterator]](LinkedList.md#[iterator])

#### Defined in

[src/LinkedList.ts:464](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L464)

___

### add

▸ **add**(`item`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Appends unique item to end of the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[add](LinkedList.md#add)

#### Defined in

[src/LinkedSet.ts:41](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L41)

___

### addNode

▸ **addNode**(`node`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[addNode](LinkedList.md#addnode)

#### Defined in

[src/LinkedList.ts:440](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L440)

___

### append

▸ **append**(`item`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[append](LinkedList.md#append)

#### Defined in

[src/LinkedList.ts:101](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L101)

___

### clear

▸ **clear**(): `void`

Clears set

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.md).[clear](LinkedList.md#clear)

#### Defined in

[src/LinkedSet.ts:70](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L70)

___

### concat

▸ **concat**(...`lists`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Concatenates the the lists into a new list

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | readonly (`T` \| [`LinkedList`](LinkedList.md)<`T`, `N`\> \| `T`[])[] |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[concat](LinkedList.md#concat)

#### Defined in

[src/LinkedList.ts:174](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L174)

___

### concatUnsafe

▸ **concatUnsafe**(`list`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Concatenates the head of the provided list to the tail of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`LinkedSet`](LinkedSet.md)<`T`, `N`\> |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[concatUnsafe](LinkedList.md#concatunsafe)

#### Defined in

[src/LinkedSet.ts:76](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L76)

___

### cycle

▸ **cycle**(): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[cycle](LinkedList.md#cycle)

#### Defined in

[src/LinkedList.ts:121](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L121)

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

[LinkedList](LinkedList.md).[delete](LinkedList.md#delete)

#### Defined in

[src/LinkedSet.ts:61](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L61)

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

[LinkedList](LinkedList.md).[deleteNode](LinkedList.md#deletenode)

#### Defined in

[src/LinkedList.ts:449](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L449)

___

### entries

▸ **entries**(): `IterableIterator`<[`T`, `T`]\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`IterableIterator`<[`T`, `T`]\>

#### Inherited from

[LinkedList](LinkedList.md).[entries](LinkedList.md#entries)

#### Defined in

[src/LinkedList.ts:269](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L269)

___

### filter

▸ **filter**(`predicate`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `boolean`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[filter](LinkedList.md#filter)

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[filter](LinkedList.md#filter)

#### Defined in

[src/LinkedList.ts:369](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L369)

___

### find

▸ **find**(`predicate`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `boolean`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.md).[find](LinkedList.md#find)

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.md).[find](LinkedList.md#find)

#### Defined in

[src/LinkedList.ts:343](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L343)

___

### findRight

▸ **findRight**(`predicate`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `boolean`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedSet.ts:119](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L119)

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedSet.ts:120](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L120)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `void`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`void`

#### Inherited from

[LinkedList](LinkedList.md).[forEach](LinkedList.md#foreach)

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
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg?` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedList](LinkedList.md).[forEach](LinkedList.md#foreach)

#### Defined in

[src/LinkedList.ts:301](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L301)

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

[LinkedList](LinkedList.md).[has](LinkedList.md#has)

#### Defined in

[src/LinkedSet.ts:36](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L36)

___

### headNode

▸ **headNode**(`node`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[headNode](LinkedList.md#headnode)

#### Defined in

[src/LinkedList.ts:134](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L134)

___

### insert

▸ **insert**(`item`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Inserts unique item into the front of the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[insert](LinkedList.md#insert)

#### Defined in

[src/LinkedSet.ts:51](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L51)

___

### insertNode

▸ **insertNode**(`node`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[insertNode](LinkedList.md#insertnode)

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

#### Inherited from

[LinkedList](LinkedList.md).[join](LinkedList.md#join)

#### Defined in

[src/LinkedList.ts:420](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L420)

___

### keys

▸ **keys**(): `IterableIterator`<`T`\>

Alias for values() method

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[keys](LinkedList.md#keys)

#### Defined in

[src/LinkedList.ts:264](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L264)

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
| `cb` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

#### Defined in

[src/LinkedSet.ts:130](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L130)

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

#### Defined in

[src/LinkedSet.ts:131](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L131)

___

### new

▸ **new**(`iterable?`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `T`[] \| `IterableIterator`<`T`\> |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[new](LinkedList.md#new)

#### Defined in

[src/LinkedList.ts:56](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L56)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from the end of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[pop](LinkedList.md#pop)

#### Defined in

[src/LinkedSet.ts:15](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L15)

___

### recycle

▸ **recycle**(): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[recycle](LinkedList.md#recycle)

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
| `cb` | `Reducer`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.md).[reduce](LinkedList.md#reduce)

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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.md).[reduce](LinkedList.md#reduce)

#### Defined in

[src/LinkedList.ts:322](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L322)

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
| `cb` | `Reducer`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Defined in

[src/LinkedSet.ts:103](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L103)

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Defined in

[src/LinkedSet.ts:104](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L104)

___

### reverse

▸ **reverse**(): `IterableIterator`<`T`\>

Iterates through list items in reverse

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[reverse](LinkedList.md#reverse)

#### Defined in

[src/LinkedList.ts:290](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L290)

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
| `cb` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Defined in

[src/LinkedSet.ts:138](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L138)

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[src/LinkedSet.ts:139](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L139)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item off of the front of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[shift](LinkedList.md#shift)

#### Defined in

[src/LinkedSet.ts:26](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L26)

___

### slice

▸ **slice**(`start?`, `end?`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Converts list to native Array

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[slice](LinkedList.md#slice)

#### Defined in

[src/LinkedSet.ts:88](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L88)

___

### tailNode

▸ **tailNode**(`node`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[tailNode](LinkedList.md#tailnode)

#### Defined in

[src/LinkedList.ts:150](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L150)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Overrides

[LinkedList](LinkedList.md).[toArray](LinkedList.md#toarray)

#### Defined in

[src/LinkedSet.ts:98](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L98)

___

### toArraySlice

▸ **toArraySlice**(`start?`, `end?`): `T`[]

Converts list to native Array

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

`T`[]

#### Overrides

[LinkedList](LinkedList.md).[toArraySlice](LinkedList.md#toarrayslice)

#### Defined in

[src/LinkedSet.ts:93](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedSet.ts#L93)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[toJSON](LinkedList.md#tojson)

#### Defined in

[src/LinkedList.ts:460](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L460)

___

### unshift

▸ **unshift**(`item`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[unshift](LinkedList.md#unshift)

#### Defined in

[src/LinkedList.ts:111](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L111)

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Iterates through list items

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[values](LinkedList.md#values)

#### Defined in

[src/LinkedList.ts:280](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L280)
