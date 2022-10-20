[@zimmed/prefab](../README.md) / [Exports](../modules.md) / SortedSet

# Class: SortedSet<T, N\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

## Hierarchy

- [`LinkedSet`](LinkedSet.md)<`T`, `N`\>

  ↳ **`SortedSet`**

  ↳↳ [`PriorityQueue`](PriorityQueue.md)

## Table of contents

### Constructors

- [constructor](SortedSet.md#constructor)

### Properties

- [\_cmp](SortedSet.md#_cmp)
- [\_head](SortedSet.md#_head)
- [\_map](SortedSet.md#_map)
- [\_tail](SortedSet.md#_tail)
- [\_tree](SortedSet.md#_tree)

### Accessors

- [head](SortedSet.md#head)
- [size](SortedSet.md#size)
- [tail](SortedSet.md#tail)

### Methods

- [[iterator]](SortedSet.md#[iterator])
- [add](SortedSet.md#add)
- [addNode](SortedSet.md#addnode)
- [append](SortedSet.md#append)
- [clear](SortedSet.md#clear)
- [cycle](SortedSet.md#cycle)
- [delete](SortedSet.md#delete)
- [deleteNode](SortedSet.md#deletenode)
- [entries](SortedSet.md#entries)
- [filter](SortedSet.md#filter)
- [find](SortedSet.md#find)
- [findRight](SortedSet.md#findright)
- [forEach](SortedSet.md#foreach)
- [has](SortedSet.md#has)
- [headNode](SortedSet.md#headnode)
- [insert](SortedSet.md#insert)
- [insertNode](SortedSet.md#insertnode)
- [join](SortedSet.md#join)
- [keys](SortedSet.md#keys)
- [map](SortedSet.md#map)
- [pop](SortedSet.md#pop)
- [recycle](SortedSet.md#recycle)
- [reduce](SortedSet.md#reduce)
- [reduceRight](SortedSet.md#reduceright)
- [reverse](SortedSet.md#reverse)
- [reverseMap](SortedSet.md#reversemap)
- [search](SortedSet.md#search)
- [shift](SortedSet.md#shift)
- [tailNode](SortedSet.md#tailnode)
- [toArray](SortedSet.md#toarray)
- [toJSON](SortedSet.md#tojson)
- [unshift](SortedSet.md#unshift)
- [values](SortedSet.md#values)
- [create](SortedSet.md#create)
- [from](SortedSet.md#from)

## Constructors

### constructor

• **new SortedSet**<`T`, `N`\>(`iterable?`, `compareFunction?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> | `undefined` |
| `compareFunction` | `Sort`<`T`, `any`\> | `DEFAULT_SORT` |

#### Overrides

[LinkedSet](LinkedSet.md).[constructor](LinkedSet.md#constructor)

#### Defined in

[src/SortedSet.ts:40](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L40)

## Properties

### \_cmp

• `Private` `Readonly` **\_cmp**: `Sort`<`T`, `any`\>

#### Defined in

[src/SortedSet.ts:38](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L38)

___

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedSet](LinkedSet.md).[_head](LinkedSet.md#_head)

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L30)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[_map](LinkedSet.md#_map)

#### Defined in

[src/LinkedSet.ts:7](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L7)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedSet](LinkedSet.md).[_tail](LinkedSet.md#_tail)

#### Defined in

[src/LinkedList.ts:33](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L33)

___

### \_tree

• `Protected` `Optional` **\_tree**: `TNode`<`T`\>

#### Defined in

[src/SortedSet.ts:35](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L35)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedSet.head

#### Defined in

[src/LinkedList.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L36)

___

### size

• `get` **size**(): `number`

Current size of set

#### Returns

`number`

#### Inherited from

LinkedSet.size

#### Defined in

[src/LinkedSet.ts:10](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L10)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedSet.tail

#### Defined in

[src/LinkedList.ts:40](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`T`, `void`, `unknown`\>

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[[iterator]](LinkedSet.md#[iterator])

#### Defined in

[src/LinkedList.ts:393](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L393)

___

### add

▸ **add**(`item`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Appends item onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Overrides

[LinkedSet](LinkedSet.md).[add](LinkedSet.md#add)

#### Defined in

[src/SortedSet.ts:105](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L105)

___

### addNode

▸ **addNode**(`node`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Appends LinkedList Node onto the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[addNode](LinkedSet.md#addnode)

#### Defined in

[src/LinkedSet.ts:57](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L57)

___

### append

▸ **append**(`item`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[append](LinkedSet.md#append)

#### Defined in

[src/LinkedList.ts:110](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L110)

___

### clear

▸ **clear**(): `void`

Clears the set

#### Returns

`void`

#### Overrides

[LinkedSet](LinkedSet.md).[clear](LinkedSet.md#clear)

#### Defined in

[src/SortedSet.ts:94](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L94)

___

### cycle

▸ **cycle**(): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[cycle](LinkedSet.md#cycle)

#### Defined in

[src/LinkedList.ts:130](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L130)

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

[LinkedSet](LinkedSet.md).[delete](LinkedSet.md#delete)

#### Defined in

[src/SortedSet.ts:147](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L147)

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

[LinkedSet](LinkedSet.md).[deleteNode](LinkedSet.md#deletenode)

#### Defined in

[src/LinkedList.ts:378](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L378)

___

### entries

▸ **entries**(): `Generator`<[`T`, `T`], `any`, `unknown`\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`Generator`<[`T`, `T`], `any`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[entries](LinkedSet.md#entries)

#### Defined in

[src/LinkedList.ts:199](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L199)

___

### filter

▸ **filter**(`predicate`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `boolean`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[filter](LinkedSet.md#filter)

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[filter](LinkedSet.md#filter)

#### Defined in

[src/LinkedList.ts:298](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L298)

___

### find

▸ **find**(`predicate`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `boolean`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[find](LinkedSet.md#find)

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[find](LinkedSet.md#find)

#### Defined in

[src/LinkedList.ts:272](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L272)

___

### findRight

▸ **findRight**(`predicate`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `boolean`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[findRight](LinkedSet.md#findright)

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedSet](LinkedSet.md).[findRight](LinkedSet.md#findright)

#### Defined in

[src/LinkedSet.ts:95](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L95)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `void`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.md).[forEach](LinkedSet.md#foreach)

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
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `thisArg?` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedSet](LinkedSet.md).[forEach](LinkedSet.md#foreach)

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

#### Inherited from

[LinkedSet](LinkedSet.md).[has](LinkedSet.md#has)

#### Defined in

[src/LinkedSet.ts:36](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L36)

___

### headNode

▸ **headNode**(`node`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[headNode](LinkedSet.md#headnode)

#### Defined in

[src/LinkedList.ts:143](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L143)

___

### insert

▸ **insert**(`item`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Inserts item into the front the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Overrides

[LinkedSet](LinkedSet.md).[insert](LinkedSet.md#insert)

#### Defined in

[src/SortedSet.ts:100](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L100)

___

### insertNode

▸ **insertNode**(`node`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Inserts LinkedList Node into the front of the set

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[insertNode](LinkedSet.md#insertnode)

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

[LinkedSet](LinkedSet.md).[join](LinkedSet.md#join)

#### Defined in

[src/LinkedList.ts:349](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L349)

___

### keys

▸ **keys**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[keys](LinkedSet.md#keys)

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
| `cb` | `Callback`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[map](LinkedSet.md#map)

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
| `cb` | `Callback`<`T`, `This`, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[map](LinkedSet.md#map)

#### Defined in

[src/LinkedSet.ts:106](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L106)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from end of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedSet](LinkedSet.md).[pop](LinkedSet.md#pop)

#### Defined in

[src/SortedSet.ts:72](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L72)

___

### recycle

▸ **recycle**(): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[recycle](LinkedSet.md#recycle)

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
| `cb` | `Reducer`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduce](LinkedSet.md#reduce)

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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduce](LinkedSet.md#reduce)

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
| `cb` | `Reducer`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduceRight](LinkedSet.md#reduceright)

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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedSet](LinkedSet.md).[reduceRight](LinkedSet.md#reduceright)

#### Defined in

[src/LinkedSet.ts:79](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L79)

___

### reverse

▸ **reverse**(): `Generator`<`T`, `void`, `unknown`\>

Iterates through list items in reverse

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[reverse](LinkedSet.md#reverse)

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
| `cb` | `Callback`<`T`, [`SortedSet`](SortedSet.md)<`T`, `N`\>, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[reverseMap](LinkedSet.md#reversemap)

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
| `cb` | `Callback`<`T`, `This`, `RT`, [`SortedSet`](SortedSet.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[reverseMap](LinkedSet.md#reversemap)

#### Defined in

[src/LinkedSet.ts:114](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedSet.ts#L114)

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

[src/SortedSet.ts:52](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L52)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the set

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedSet](LinkedSet.md).[shift](LinkedSet.md#shift)

#### Defined in

[src/SortedSet.ts:83](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L83)

___

### tailNode

▸ **tailNode**(`node`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[tailNode](LinkedSet.md#tailnode)

#### Defined in

[src/LinkedList.ts:158](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L158)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[toArray](LinkedSet.md#toarray)

#### Defined in

[src/LinkedList.ts:182](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L182)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedSet](LinkedSet.md).[toJSON](LinkedSet.md#tojson)

#### Defined in

[src/LinkedList.ts:389](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L389)

___

### unshift

▸ **unshift**(`item`): [`SortedSet`](SortedSet.md)<`T`, `N`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `N`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[unshift](LinkedSet.md#unshift)

#### Defined in

[src/LinkedList.ts:120](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L120)

___

### values

▸ **values**(): `Generator`<`T`, `void`, `unknown`\>

Alias for keys() method

#### Returns

`Generator`<`T`, `void`, `unknown`\>

#### Inherited from

[LinkedSet](LinkedSet.md).[values](LinkedSet.md#values)

#### Defined in

[src/LinkedList.ts:194](https://github.com/zimmed/prefab/blob/c08eef0/src/LinkedList.ts#L194)

___

### create

▸ `Static` **create**<`T`\>(`iterable?`, `compareFunction?`): [`SortedSet`](SortedSet.md)<`T`, `LNode`<`T`\>\>

Static factory method as alias for class constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `compareFunction?` | `Sort`<`T`, `any`\> |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `LNode`<`T`\>\>

#### Overrides

[LinkedSet](LinkedSet.md).[create](LinkedSet.md#create)

#### Defined in

[src/SortedSet.ts:19](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L19)

___

### from

▸ `Static` **from**<`T`\>(`iterable`, `compareFunction?`): [`SortedSet`](SortedSet.md)<`T`, `LNode`<`T`\>\>

Same as LinkedList.create() but requires constructor arg

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |
| `compareFunction?` | `Sort`<`T`, `any`\> |

#### Returns

[`SortedSet`](SortedSet.md)<`T`, `LNode`<`T`\>\>

#### Overrides

[LinkedSet](LinkedSet.md).[from](LinkedSet.md#from)

#### Defined in

[src/SortedSet.ts:27](https://github.com/zimmed/prefab/blob/c08eef0/src/SortedSet.ts#L27)
