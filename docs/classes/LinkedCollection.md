[@zimmed/prefab](../README.md) / [Exports](../modules.md) / LinkedCollection

# Class: LinkedCollection<K, T, N\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `T` | extends { readonly [k in K]: any } |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

## Hierarchy

- [`LinkedList`](LinkedList.md)<`T`, `N`\>

  ↳ **`LinkedCollection`**

## Table of contents

### Constructors

- [constructor](LinkedCollection.md#constructor)

### Properties

- [\_head](LinkedCollection.md#_head)
- [\_map](LinkedCollection.md#_map)
- [\_tail](LinkedCollection.md#_tail)
- [keyBy](LinkedCollection.md#keyby)

### Accessors

- [head](LinkedCollection.md#head)
- [size](LinkedCollection.md#size)
- [tail](LinkedCollection.md#tail)

### Methods

- [[iterator]](LinkedCollection.md#[iterator])
- [add](LinkedCollection.md#add)
- [addNode](LinkedCollection.md#addnode)
- [append](LinkedCollection.md#append)
- [clear](LinkedCollection.md#clear)
- [cycle](LinkedCollection.md#cycle)
- [delete](LinkedCollection.md#delete)
- [deleteNode](LinkedCollection.md#deletenode)
- [entries](LinkedCollection.md#entries)
- [filter](LinkedCollection.md#filter)
- [find](LinkedCollection.md#find)
- [findRight](LinkedCollection.md#findright)
- [forEach](LinkedCollection.md#foreach)
- [groupBy](LinkedCollection.md#groupby)
- [has](LinkedCollection.md#has)
- [headNode](LinkedCollection.md#headnode)
- [insert](LinkedCollection.md#insert)
- [insertNode](LinkedCollection.md#insertnode)
- [join](LinkedCollection.md#join)
- [keys](LinkedCollection.md#keys)
- [map](LinkedCollection.md#map)
- [pop](LinkedCollection.md#pop)
- [recycle](LinkedCollection.md#recycle)
- [reduce](LinkedCollection.md#reduce)
- [reduceRight](LinkedCollection.md#reduceright)
- [reverse](LinkedCollection.md#reverse)
- [reverseMap](LinkedCollection.md#reversemap)
- [select](LinkedCollection.md#select)
- [shift](LinkedCollection.md#shift)
- [tailNode](LinkedCollection.md#tailnode)
- [toArray](LinkedCollection.md#toarray)
- [toJSON](LinkedCollection.md#tojson)
- [unshift](LinkedCollection.md#unshift)
- [uppend](LinkedCollection.md#uppend)
- [upsert](LinkedCollection.md#upsert)
- [values](LinkedCollection.md#values)

## Constructors

### constructor

• **new LinkedCollection**<`K`, `T`, `N`\>(`keyBy`, `iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `T` | extends { readonly [k in string \| number \| symbol]: any } |
| `N` | extends `LNode`<`T`\> = `LNode`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyBy` | `K` |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Overrides

[LinkedList](LinkedList.md).[constructor](LinkedList.md#constructor)

#### Defined in

[src/LinkedCollection.ts:19](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L19)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_head](LinkedList.md#_head)

#### Defined in

[src/LinkedList.ts:20](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L20)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`[`K`], `N`\>

#### Defined in

[src/LinkedCollection.ts:11](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L11)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_tail](LinkedList.md#_tail)

#### Defined in

[src/LinkedList.ts:23](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L23)

___

### keyBy

• `Protected` `Readonly` **keyBy**: `K`

#### Defined in

[src/LinkedCollection.ts:12](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L12)

## Accessors

### head

• `get` **head**(): `undefined` \| `T`

Item at head of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.head

#### Defined in

[src/LinkedList.ts:26](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L26)

___

### size

• `get` **size**(): `number`

Current size of collection

#### Returns

`number`

#### Defined in

[src/LinkedCollection.ts:15](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L15)

___

### tail

• `get` **tail**(): `undefined` \| `T`

Item at tail of the list

#### Returns

`undefined` \| `T`

#### Inherited from

LinkedList.tail

#### Defined in

[src/LinkedList.ts:30](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L30)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[[iterator]](LinkedList.md#[iterator])

#### Defined in

[src/LinkedList.ts:382](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L382)

___

### add

▸ **add**(`item`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Appends unique item to end of the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[add](LinkedList.md#add)

#### Defined in

[src/LinkedCollection.ts:101](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L101)

___

### addNode

▸ **addNode**(`node`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[addNode](LinkedList.md#addnode)

#### Defined in

[src/LinkedList.ts:358](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L358)

___

### append

▸ **append**(`item`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Adds item to end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[append](LinkedList.md#append)

#### Defined in

[src/LinkedList.ts:97](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L97)

___

### clear

▸ **clear**(): `void`

Clears collection

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.md).[clear](LinkedList.md#clear)

#### Defined in

[src/LinkedCollection.ts:130](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L130)

___

### cycle

▸ **cycle**(): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[cycle](LinkedList.md#cycle)

#### Defined in

[src/LinkedList.ts:117](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L117)

___

### delete

▸ **delete**(`key`): `boolean`

Removes specified item by key from the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T`[`K`] |

#### Returns

`boolean`

#### Overrides

[LinkedList](LinkedList.md).[delete](LinkedList.md#delete)

#### Defined in

[src/LinkedCollection.ts:121](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L121)

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

[src/LinkedList.ts:367](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L367)

___

### entries

▸ **entries**(): `Generator`<[`T`[`K`], `T`], `any`, `unknown`\>

Iterates through collection key-value pairs

#### Returns

`Generator`<[`T`[`K`], `T`], `any`, `unknown`\>

#### Overrides

[LinkedList](LinkedList.md).[entries](LinkedList.md#entries)

#### Defined in

[src/LinkedCollection.ts:54](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L54)

___

### filter

▸ **filter**(`predicate`): `T`[]

Uses predicate to return a new array of all matching items (same signature is Array.protoype.filter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `boolean`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[filter](LinkedList.md#filter)

#### Defined in

[src/LinkedList.ts:286](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L286)

▸ **filter**<`This`\>(`predicate`, `thisArg`): `T`[]

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[filter](LinkedList.md#filter)

#### Defined in

[src/LinkedList.ts:287](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L287)

___

### find

▸ **find**(`predicate`): `undefined` \| `T`

Uses predicate to return first matching item or undefined if no matches (same signature as Array.prototype.find)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `boolean`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.md).[find](LinkedList.md#find)

#### Defined in

[src/LinkedList.ts:260](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L260)

▸ **find**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Inherited from

[LinkedList](LinkedList.md).[find](LinkedList.md#find)

#### Defined in

[src/LinkedList.ts:261](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L261)

___

### findRight

▸ **findRight**(`predicate`): `undefined` \| `T`

Finds predicate-matching item, with iteration beginning at the end of the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `boolean`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedCollection.ts:152](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L152)

▸ **findRight**<`This`\>(`predicate`, `thisArg`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `Callback`<`T`, `This`, `boolean`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedCollection.ts:153](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L153)

___

### forEach

▸ **forEach**(`cb`): `void`

Operates on each element of the list in a callback method (same signature as Array.prototype.forEach)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `void`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |

#### Returns

`void`

#### Inherited from

[LinkedList](LinkedList.md).[forEach](LinkedList.md#foreach)

#### Defined in

[src/LinkedList.ts:218](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L218)

▸ **forEach**<`ThisArg`\>(`cb`, `thisArg?`): `void`

#### Type parameters

| Name |
| :------ |
| `ThisArg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `ThisArg`, `void`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `thisArg?` | `ThisArg` |

#### Returns

`void`

#### Inherited from

[LinkedList](LinkedList.md).[forEach](LinkedList.md#foreach)

#### Defined in

[src/LinkedList.ts:219](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L219)

___

### groupBy

▸ **groupBy**(`key`): `Record`<`K`, `T`\>

Group collection by specified key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`Record`<`K`, `T`\>

#### Defined in

[src/LinkedCollection.ts:182](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L182)

▸ **groupBy**<`X`\>(`key`): `Record`<`X`, `T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `X` |

#### Returns

`Record`<`X`, `T`[]\>

#### Defined in

[src/LinkedCollection.ts:183](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L183)

___

### has

▸ **has**(`key`): `boolean`

Determines if collection contains specified key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T`[`K`] |

#### Returns

`boolean`

#### Overrides

[LinkedList](LinkedList.md).[has](LinkedList.md#has)

#### Defined in

[src/LinkedCollection.ts:65](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L65)

___

### headNode

▸ **headNode**(`node`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[headNode](LinkedList.md#headnode)

#### Defined in

[src/LinkedList.ts:130](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L130)

___

### insert

▸ **insert**(`item`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Inserts unique item into the front of the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[insert](LinkedList.md#insert)

#### Defined in

[src/LinkedCollection.ts:111](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L111)

___

### insertNode

▸ **insertNode**(`node`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Caution: Assumes node already has correct head and tail set
Adds node to the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[insertNode](LinkedList.md#insertnode)

#### Defined in

[src/LinkedList.ts:346](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L346)

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

[src/LinkedList.ts:338](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L338)

___

### keys

▸ **keys**(): `IterableIterator`<`T`[`K`]\>

Iterates through collection keys

#### Returns

`IterableIterator`<`T`[`K`]\>

#### Overrides

[LinkedList](LinkedList.md).[keys](LinkedList.md#keys)

#### Defined in

[src/LinkedCollection.ts:49](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L49)

___

### map

▸ **map**<`RT`\>(`cb`): `RT`[]

Maps collection items into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

#### Defined in

[src/LinkedCollection.ts:163](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L163)

▸ **map**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Overrides

[LinkedList](LinkedList.md).[map](LinkedList.md#map)

#### Defined in

[src/LinkedCollection.ts:164](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L164)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from the end of the collection

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[pop](LinkedList.md#pop)

#### Defined in

[src/LinkedCollection.ts:28](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L28)

___

### recycle

▸ **recycle**(): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[recycle](LinkedList.md#recycle)

#### Defined in

[src/LinkedList.ts:122](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L122)

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
| `cb` | `Reducer`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.md).[reduce](LinkedList.md#reduce)

#### Defined in

[src/LinkedList.ts:239](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L239)

▸ **reduce**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Inherited from

[LinkedList](LinkedList.md).[reduce](LinkedList.md#reduce)

#### Defined in

[src/LinkedList.ts:240](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L240)

___

### reduceRight

▸ **reduceRight**<`RT`\>(`cb`, `initialValue`): `RT`

Reduces items from the end of the collection to the front

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `initialValue` | `RT` |

#### Returns

`RT`

#### Defined in

[src/LinkedCollection.ts:136](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L136)

▸ **reduceRight**<`RT`, `This`\>(`cb`, `initialValue`, `thisArg?`): `RT`

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `initialValue` | `RT` |
| `thisArg?` | `This` |

#### Returns

`RT`

#### Defined in

[src/LinkedCollection.ts:137](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L137)

___

### reverse

▸ **reverse**(): `IterableIterator`<`T`\>

Iterates through list items in reverse

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[reverse](LinkedList.md#reverse)

#### Defined in

[src/LinkedList.ts:208](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L208)

___

### reverseMap

▸ **reverseMap**<`RT`\>(`cb`): `RT`[]

Maps collection items from the end of the collection to the front into a new array

#### Type parameters

| Name |
| :------ |
| `RT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |

#### Returns

`RT`[]

#### Defined in

[src/LinkedCollection.ts:171](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L171)

▸ **reverseMap**<`RT`, `This`\>(`cb`, `thisArg`): `RT`[]

#### Type parameters

| Name |
| :------ |
| `RT` |
| `This` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`T`, `This`, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
| `thisArg` | `This` |

#### Returns

`RT`[]

#### Defined in

[src/LinkedCollection.ts:172](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L172)

___

### select

▸ **select**(`key`): `undefined` \| `T`

Get an item in the collection by its key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T`[`K`] |

#### Returns

`undefined` \| `T`

#### Defined in

[src/LinkedCollection.ts:70](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L70)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item off of the front of the collection

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[shift](LinkedList.md#shift)

#### Defined in

[src/LinkedCollection.ts:39](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L39)

___

### tailNode

▸ **tailNode**(`node`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Caution: Assumes node is already part of linked list
Moves node to the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[tailNode](LinkedList.md#tailnode)

#### Defined in

[src/LinkedList.ts:146](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L146)

___

### toArray

▸ **toArray**(): `T`[]

Converts list to native Array

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[toArray](LinkedList.md#toarray)

#### Defined in

[src/LinkedList.ts:170](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L170)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[LinkedList](LinkedList.md).[toJSON](LinkedList.md#tojson)

#### Defined in

[src/LinkedList.ts:378](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L378)

___

### unshift

▸ **unshift**(`item`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Alias for insert

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[unshift](LinkedList.md#unshift)

#### Defined in

[src/LinkedList.ts:107](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L107)

___

### uppend

▸ **uppend**(`item`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Append unique item to the end of the collection or update exiting item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Defined in

[src/LinkedCollection.ts:75](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L75)

___

### upsert

▸ **upsert**(`item`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Insert unique item to the front of the collection or update exiting item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Defined in

[src/LinkedCollection.ts:88](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedCollection.ts#L88)

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Iterates through list items

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

[LinkedList](LinkedList.md).[values](LinkedList.md#values)

#### Defined in

[src/LinkedList.ts:198](https://github.com/zimmed/prefab/blob/cecae0e/src/LinkedList.ts#L198)
