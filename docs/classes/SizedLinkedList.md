[@zimmed/prefab](../README.md) / [Exports](../modules.md) / SizedLinkedList

# Class: SizedLinkedList<T, N\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

## Hierarchy

- [`LinkedList`](LinkedList.md)<`T`, `N`\>

  ↳ **`SizedLinkedList`**

## Table of contents

### Constructors

- [constructor](SizedLinkedList.md#constructor)

### Properties

- [\_head](SizedLinkedList.md#_head)
- [\_size](SizedLinkedList.md#_size)
- [\_tail](SizedLinkedList.md#_tail)

### Accessors

- [head](SizedLinkedList.md#head)
- [size](SizedLinkedList.md#size)
- [tail](SizedLinkedList.md#tail)

### Methods

- [[iterator]](SizedLinkedList.md#[iterator])
- [add](SizedLinkedList.md#add)
- [addNode](SizedLinkedList.md#addnode)
- [append](SizedLinkedList.md#append)
- [clear](SizedLinkedList.md#clear)
- [concat](SizedLinkedList.md#concat)
- [concatUnsafe](SizedLinkedList.md#concatunsafe)
- [cycle](SizedLinkedList.md#cycle)
- [delete](SizedLinkedList.md#delete)
- [deleteNode](SizedLinkedList.md#deletenode)
- [entries](SizedLinkedList.md#entries)
- [filter](SizedLinkedList.md#filter)
- [find](SizedLinkedList.md#find)
- [findRight](SizedLinkedList.md#findright)
- [forEach](SizedLinkedList.md#foreach)
- [has](SizedLinkedList.md#has)
- [headNode](SizedLinkedList.md#headnode)
- [insert](SizedLinkedList.md#insert)
- [insertNode](SizedLinkedList.md#insertnode)
- [join](SizedLinkedList.md#join)
- [keys](SizedLinkedList.md#keys)
- [map](SizedLinkedList.md#map)
- [new](SizedLinkedList.md#new)
- [pop](SizedLinkedList.md#pop)
- [recycle](SizedLinkedList.md#recycle)
- [reduce](SizedLinkedList.md#reduce)
- [reduceRight](SizedLinkedList.md#reduceright)
- [reverse](SizedLinkedList.md#reverse)
- [reverseMap](SizedLinkedList.md#reversemap)
- [shift](SizedLinkedList.md#shift)
- [slice](SizedLinkedList.md#slice)
- [tailNode](SizedLinkedList.md#tailnode)
- [toArray](SizedLinkedList.md#toarray)
- [toArraySlice](SizedLinkedList.md#toarrayslice)
- [toJSON](SizedLinkedList.md#tojson)
- [unshift](SizedLinkedList.md#unshift)
- [values](SizedLinkedList.md#values)

## Constructors

### constructor

• **new SizedLinkedList**<`T`, `N`\>(`iterable?`, `init?`)

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

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/SizedLinkedList.ts:6](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L6)

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

Current size of list

#### Returns

`number`

#### Defined in

[src/SizedLinkedList.ts:9](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L9)

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

▸ **add**(`item`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[add](LinkedList.md#add)

#### Defined in

[src/LinkedList.ts:116](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L116)

___

### addNode

▸ **addNode**(`node`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Appends Node onto the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[addNode](LinkedList.md#addnode)

#### Defined in

[src/SizedLinkedList.ts:42](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L42)

___

### append

▸ **append**(`item`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[append](LinkedList.md#append)

#### Defined in

[src/LinkedList.ts:101](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L101)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.md).[clear](LinkedList.md#clear)

#### Defined in

[src/SizedLinkedList.ts:48](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L48)

___

### concat

▸ **concat**(...`lists`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Concatenates the the lists into a new list

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | readonly (`T` \| [`LinkedList`](LinkedList.md)<`T`, `N`\> \| `T`[])[] |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[concat](LinkedList.md#concat)

#### Defined in

[src/LinkedList.ts:174](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L174)

___

### concatUnsafe

▸ **concatUnsafe**(`list`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

appends the specified list directly onto the tail of the second list

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\> |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[concatUnsafe](LinkedList.md#concatunsafe)

#### Defined in

[src/SizedLinkedList.ts:63](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L63)

___

### cycle

▸ **cycle**(): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[cycle](LinkedList.md#cycle)

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

#### Inherited from

[LinkedList](LinkedList.md).[delete](LinkedList.md#delete)

#### Defined in

[src/LinkedList.ts:169](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L169)

___

### deleteNode

▸ **deleteNode**(`cur?`): `boolean`

Deletes specified node from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `cur?` | `N` |

#### Returns

`boolean`

#### Overrides

[LinkedList](LinkedList.md).[deleteNode](LinkedList.md#deletenode)

#### Defined in

[src/SizedLinkedList.ts:54](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L54)

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
| `predicate` | `Callback`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `boolean`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
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
| `predicate` | `Callback`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `boolean`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |

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
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
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

Finds predicate-matching item, with iteration beginning at the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `boolean`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |

#### Returns

`undefined` \| `T`

#### Defined in

[src/SizedLinkedList.ts:136](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L136)

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/SizedLinkedList.ts:137](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L137)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `void`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |

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
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
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

Careful! O(n)
Checks to see if item exists in list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Inherited from

[LinkedList](LinkedList.md).[has](LinkedList.md#has)

#### Defined in

[src/LinkedList.ts:96](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L96)

___

### headNode

▸ **headNode**(`node`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[headNode](LinkedList.md#headnode)

#### Defined in

[src/LinkedList.ts:134](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L134)

___

### insert

▸ **insert**(`item`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Adds item to front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[insert](LinkedList.md#insert)

#### Defined in

[src/LinkedList.ts:106](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L106)

___

### insertNode

▸ **insertNode**(`node`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Inserts Node into the front the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[insertNode](LinkedList.md#insertnode)

#### Defined in

[src/SizedLinkedList.ts:36](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L36)

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

Maps list items into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

#### Defined in

[src/SizedLinkedList.ts:162](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L162)

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

#### Defined in

[src/SizedLinkedList.ts:163](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L163)

___

### new

▸ **new**(`iterable?`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `T`[] \| `IterableIterator`<`T`\> |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[new](LinkedList.md#new)

#### Defined in

[src/LinkedList.ts:56](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L56)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from end of the list

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[pop](LinkedList.md#pop)

#### Defined in

[src/SizedLinkedList.ts:14](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L14)

___

### recycle

▸ **recycle**(): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

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
| `cb` | `Reducer`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
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

Reduces items from the end of the list to the front

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Defined in

[src/SizedLinkedList.ts:115](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L115)

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg` | `This` |

#### Returns

`RT`

#### Defined in

[src/SizedLinkedList.ts:116](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L116)

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

Maps list items from the end of the set to the front into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |

#### Returns

`RT`[]

#### Defined in

[src/SizedLinkedList.ts:185](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L185)

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[src/SizedLinkedList.ts:186](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L186)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the list

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[shift](LinkedList.md#shift)

#### Defined in

[src/SizedLinkedList.ts:25](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L25)

___

### slice

▸ **slice**(`start?`, `end?`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Creates a new slice of the linked list

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `0` |
| `end` | `number` | `undefined` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[slice](LinkedList.md#slice)

#### Defined in

[src/SizedLinkedList.ts:73](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L73)

___

### tailNode

▸ **tailNode**(`node`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

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

[src/SizedLinkedList.ts:101](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L101)

___

### toArraySlice

▸ **toArraySlice**(`start?`, `end?`): `T`[]

Converts list to an array slice

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `0` |
| `end` | `number` | `undefined` |

#### Returns

`T`[]

#### Overrides

[LinkedList](LinkedList.md).[toArraySlice](LinkedList.md#toarrayslice)

#### Defined in

[src/SizedLinkedList.ts:81](https://github.com/zimmed/prefab/blob/2efd938/src/SizedLinkedList.ts#L81)

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

▸ **unshift**(`item`): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

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
