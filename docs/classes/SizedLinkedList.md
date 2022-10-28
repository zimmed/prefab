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
- [pop](SizedLinkedList.md#pop)
- [recycle](SizedLinkedList.md#recycle)
- [reduce](SizedLinkedList.md#reduce)
- [reduceRight](SizedLinkedList.md#reduceright)
- [reverse](SizedLinkedList.md#reverse)
- [reverseMap](SizedLinkedList.md#reversemap)
- [shift](SizedLinkedList.md#shift)
- [tailNode](SizedLinkedList.md#tailnode)
- [toArray](SizedLinkedList.md#toarray)
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
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] | Optional iterable with which to initialize the list |
| `init?` | `object` | - |

#### Inherited from

[LinkedList](LinkedList.md).[constructor](LinkedList.md#constructor)

#### Defined in

[src/LinkedList.ts:49](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L49)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_head](LinkedList.md#_head)

#### Defined in

[src/LinkedList.ts:20](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L20)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/SizedLinkedList.ts:6](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L6)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_tail](LinkedList.md#_tail)

#### Defined in

[src/LinkedList.ts:23](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L23)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.head

#### Defined in

[src/LinkedList.ts:26](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L26)

___

### size

• `get` **size**(): `number`

Current size of list

#### Returns

`number`

#### Defined in

[src/SizedLinkedList.ts:9](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L9)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.tail

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L30)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[[iterator]](LinkedList.md#[iterator])

#### Defined in

[src/LinkedList.ts:382](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L382)

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

[src/LinkedList.ts:112](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L112)

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

[src/SizedLinkedList.ts:42](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L42)

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

[src/LinkedList.ts:97](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L97)

___

### clear

▸ **clear**(): `void`

Clears the list

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.md).[clear](LinkedList.md#clear)

#### Defined in

[src/SizedLinkedList.ts:48](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L48)

___

### cycle

▸ **cycle**(): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Moves element from end of list to the front

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[cycle](LinkedList.md#cycle)

#### Defined in

[src/LinkedList.ts:117](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L117)

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

[src/LinkedList.ts:165](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L165)

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

[src/SizedLinkedList.ts:54](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L54)

___

### entries

▸ **entries**(): `IterableIterator`<[`T`, `T`]\>

Kind of pointless, but needed for parity with builtin Set object

#### Returns

`IterableIterator`<[`T`, `T`]\>

#### Inherited from

[LinkedList](LinkedList.md).[entries](LinkedList.md#entries)

#### Defined in

[src/LinkedList.ts:187](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L187)

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

[src/LinkedList.ts:286](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L286)

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

[src/LinkedList.ts:287](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L287)

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

[src/LinkedList.ts:260](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L260)

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

[src/LinkedList.ts:261](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L261)

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

[src/SizedLinkedList.ts:84](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L84)

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

[src/SizedLinkedList.ts:85](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L85)

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

[src/LinkedList.ts:218](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L218)

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

[src/LinkedList.ts:219](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L219)

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

[src/LinkedList.ts:92](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L92)

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

[src/LinkedList.ts:130](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L130)

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

[src/LinkedList.ts:102](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L102)

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

[src/SizedLinkedList.ts:36](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L36)

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

[src/LinkedList.ts:338](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L338)

___

### keys

▸ **keys**(): `IterableIterator`<`T`\>

Alias for values() method

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[keys](LinkedList.md#keys)

#### Defined in

[src/LinkedList.ts:182](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L182)

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

[src/SizedLinkedList.ts:110](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L110)

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

[src/SizedLinkedList.ts:111](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L111)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from end of the list

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[pop](LinkedList.md#pop)

#### Defined in

[src/SizedLinkedList.ts:14](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L14)

___

### recycle

▸ **recycle**(): [`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

Moves element from front of list to the end

#### Returns

[`SizedLinkedList`](SizedLinkedList.md)<`T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[recycle](LinkedList.md#recycle)

#### Defined in

[src/LinkedList.ts:122](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L122)

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

[src/LinkedList.ts:239](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L239)

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

[src/LinkedList.ts:240](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L240)

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

[src/SizedLinkedList.ts:63](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L63)

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

[src/SizedLinkedList.ts:64](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L64)

___

### reverse

▸ **reverse**(): `IterableIterator`<`T`\>

Iterates through list items in reverse

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[reverse](LinkedList.md#reverse)

#### Defined in

[src/LinkedList.ts:208](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L208)

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

[src/SizedLinkedList.ts:133](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L133)

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

[src/SizedLinkedList.ts:134](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L134)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item from the front of the list

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[shift](LinkedList.md#shift)

#### Defined in

[src/SizedLinkedList.ts:25](https://github.com/zimmed/prefab/blob/5aea9cc/src/SizedLinkedList.ts#L25)

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

[src/LinkedList.ts:146](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L146)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[toArray](LinkedList.md#toarray)

#### Defined in

[src/LinkedList.ts:170](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L170)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[toJSON](LinkedList.md#tojson)

#### Defined in

[src/LinkedList.ts:378](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L378)

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

[src/LinkedList.ts:107](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L107)

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Iterates through list items

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[values](LinkedList.md#values)

#### Defined in

[src/LinkedList.ts:198](https://github.com/zimmed/prefab/blob/5aea9cc/src/LinkedList.ts#L198)
