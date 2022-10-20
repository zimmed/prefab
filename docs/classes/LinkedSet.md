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

  ↳↳ [`UniQueue`](UniQueue.md)

  ↳↳ [`SortedSet`](SortedSet.md)

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
- [pop](LinkedSet.md#pop)
- [recycle](LinkedSet.md#recycle)
- [reduce](LinkedSet.md#reduce)
- [reduceRight](LinkedSet.md#reduceright)
- [reverse](LinkedSet.md#reverse)
- [reverseMap](LinkedSet.md#reversemap)
- [shift](LinkedSet.md#shift)
- [tailNode](LinkedSet.md#tailnode)
- [toArray](LinkedSet.md#toarray)
- [toJSON](LinkedSet.md#tojson)
- [unshift](LinkedSet.md#unshift)
- [values](LinkedSet.md#values)
- [create](LinkedSet.md#create)
- [from](LinkedSet.md#from)

## Constructors

### constructor

• **new LinkedSet**<`T`, `N`\>(`iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> | Optional iterable with which to initialize the list |

#### Inherited from

[LinkedList](LinkedList.md).[constructor](LinkedList.md#constructor)

#### Defined in

[src/LinkedList.ts:59](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L59)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_head](LinkedList.md#_head)

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `N`\>

#### Defined in

[src/LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_tail](LinkedList.md#_tail)

#### Defined in

[src/LinkedList.ts:33](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L33)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.head

#### Defined in

[src/LinkedList.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L36)

___

### size

• `get` **size**(): `number`

Current size of set

#### Returns

`number`

#### Defined in

[src/LinkedSet.ts:10](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L10)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.tail

#### Defined in

[src/LinkedList.ts:40](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.md).[[iterator]](LinkedList.md#[iterator])

#### Defined in

[src/LinkedList.ts:393](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L393)

___

### add

▸ **add**(`item`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Appends unique item to end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[add](LinkedList.md#add)

#### Defined in

[src/LinkedSet.ts:41](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L41)

___

### addNode

▸ **addNode**(`node`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[addNode](LinkedList.md#addnode)

#### Defined in

[src/LinkedSet.ts:57](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L57)

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

[src/LinkedList.ts:110](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears set

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.md).[clear](LinkedList.md#clear)

#### Defined in

[src/LinkedSet.ts:63](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L63)

___

### cycle

▸ **cycle**(): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[cycle](LinkedList.md#cycle)

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

#### Overrides

[LinkedList](LinkedList.md).[delete](LinkedList.md#delete)

#### Defined in

[src/LinkedSet.ts:69](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L69)

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

[src/LinkedList.ts:378](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L378)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.md).[entries](LinkedList.md#entries)

#### Defined in

[src/LinkedList.ts:199](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L199)

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

[src/LinkedList.ts:297](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L297)

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

[src/LinkedList.ts:298](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L298)

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

[src/LinkedList.ts:271](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L271)

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

[src/LinkedList.ts:272](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L272)

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

[src/LinkedSet.ts:94](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L94)

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

[src/LinkedSet.ts:95](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L95)

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

[src/LinkedList.ts:229](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L229)

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

#### Overrides

[LinkedList](LinkedList.md).[has](LinkedList.md#has)

#### Defined in

[src/LinkedSet.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L36)

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

[src/LinkedList.ts:143](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L143)

___

### insert

▸ **insert**(`item`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Inserts unique item into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[insert](LinkedList.md#insert)

#### Defined in

[src/LinkedSet.ts:46](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L46)

___

### insertNode

▸ **insertNode**(`node`): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[insertNode](LinkedList.md#insertnode)

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

[LinkedList](LinkedList.md).[join](LinkedList.md#join)

#### Defined in

[src/LinkedList.ts:349](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L349)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.md).[keys](LinkedList.md#keys)

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
| `cb` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

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
| `cb` | `Callback`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

#### Defined in

[src/LinkedSet.ts:106](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L106)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from the end of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[pop](LinkedList.md#pop)

#### Defined in

[src/LinkedSet.ts:15](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L15)

___

### recycle

▸ **recycle**(): [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedSet`](LinkedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[recycle](LinkedList.md#recycle)

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
| `cb` | `Reducer`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.md).[reduce](LinkedList.md#reduce)

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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.md).[reduce](LinkedList.md#reduce)

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
| `cb` | `Reducer`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Defined in

[src/LinkedSet.ts:79](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L79)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.md).[reverse](LinkedList.md#reverse)

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
| `cb` | `Callback`<`T`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

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
| `cb` | `Callback`<`T`, `This`, `RT`, [`LinkedSet`](LinkedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[src/LinkedSet.ts:114](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L114)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item off of the front of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[shift](LinkedList.md#shift)

#### Defined in

[src/LinkedSet.ts:26](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L26)

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

[src/LinkedList.ts:158](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L158)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[toArray](LinkedList.md#toarray)

#### Defined in

[src/LinkedList.ts:182](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L182)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[toJSON](LinkedList.md#tojson)

#### Defined in

[src/LinkedList.ts:389](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L389)

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

[src/LinkedList.ts:120](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L120)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedList](LinkedList.md).[values](LinkedList.md#values)

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

#### Inherited from

[LinkedList](LinkedList.md).[create](LinkedList.md#create)

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

#### Inherited from

[LinkedList](LinkedList.md).[from](LinkedList.md#from)

#### Defined in

[src/LinkedList.ts:25](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L25)
