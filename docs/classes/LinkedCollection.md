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
- [apsert](LinkedCollection.md#apsert)
- [clear](LinkedCollection.md#clear)
- [concat](LinkedCollection.md#concat)
- [concatUnsafe](LinkedCollection.md#concatunsafe)
- [cycle](LinkedCollection.md#cycle)
- [default](LinkedCollection.md#default)
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
- [new](LinkedCollection.md#new)
- [pop](LinkedCollection.md#pop)
- [recycle](LinkedCollection.md#recycle)
- [reduce](LinkedCollection.md#reduce)
- [reduceRight](LinkedCollection.md#reduceright)
- [reverse](LinkedCollection.md#reverse)
- [reverseMap](LinkedCollection.md#reversemap)
- [select](LinkedCollection.md#select)
- [shift](LinkedCollection.md#shift)
- [slice](LinkedCollection.md#slice)
- [tailNode](LinkedCollection.md#tailnode)
- [toArray](LinkedCollection.md#toarray)
- [toArraySlice](LinkedCollection.md#toarrayslice)
- [toJSON](LinkedCollection.md#tojson)
- [unshift](LinkedCollection.md#unshift)
- [update](LinkedCollection.md#update)
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

[src/LinkedCollection.ts:21](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L21)

## Properties

### \_head

• `Protected` `Optional` **\_head**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_head](LinkedList.md#_head)

#### Defined in

[src/LinkedList.ts:20](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L20)

___

### \_map

• `Protected` `Readonly` **\_map**: `Map`<`T`[`K`], `N`\>

#### Defined in

[src/LinkedCollection.ts:13](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L13)

___

### \_tail

• `Protected` `Optional` **\_tail**: `N`

#### Inherited from

[LinkedList](LinkedList.md).[_tail](LinkedList.md#_tail)

#### Defined in

[src/LinkedList.ts:23](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L23)

___

### keyBy

• `Protected` `Readonly` **keyBy**: `K`

#### Defined in

[src/LinkedCollection.ts:14](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L14)

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

Current size of collection

#### Returns

`number`

#### Defined in

[src/LinkedCollection.ts:17](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L17)

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

[src/LinkedCollection.ts:158](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L158)

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

[src/LinkedList.ts:440](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L440)

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

[src/LinkedList.ts:101](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L101)

___

### apsert

▸ **apsert**(`item`, `resolve?`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Append unique item to the end of the collection or update exiting item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |
| `resolve` | (`existing`: `T`, `update`: `T`) => `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Defined in

[src/LinkedCollection.ts:132](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L132)

___

### clear

▸ **clear**(): `void`

Clears collection

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.md).[clear](LinkedList.md#clear)

#### Defined in

[src/LinkedCollection.ts:187](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L187)

___

### concat

▸ **concat**(...`lists`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Concatenates the the lists into a new list

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | readonly (`T` \| [`LinkedList`](LinkedList.md)<`T`, `N`\> \| `T`[])[] |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[concat](LinkedList.md#concat)

#### Defined in

[src/LinkedList.ts:174](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L174)

___

### concatUnsafe

▸ **concatUnsafe**(`list`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Concatenates the head of the provided list to the tail of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\> |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[concatUnsafe](LinkedList.md#concatunsafe)

#### Defined in

[src/LinkedCollection.ts:120](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L120)

___

### cycle

▸ **cycle**(): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Moves element from end of list to the front

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Inherited from

[LinkedList](LinkedList.md).[cycle](LinkedList.md#cycle)

#### Defined in

[src/LinkedList.ts:121](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L121)

___

### default

▸ **default**(`defaultItem`): `T`

Get an existing item in the collection or add the provided one

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultItem` | `T` |

#### Returns

`T`

#### Defined in

[src/LinkedCollection.ts:81](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L81)

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

[src/LinkedCollection.ts:178](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L178)

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

▸ **entries**(): `Generator`<[`T`[`K`], `T`], `any`, `unknown`\>

Iterates through collection key-value pairs

#### Returns

`Generator`<[`T`[`K`], `T`], `any`, `unknown`\>

#### Overrides

[LinkedList](LinkedList.md).[entries](LinkedList.md#entries)

#### Defined in

[src/LinkedCollection.ts:60](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L60)

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

[src/LinkedList.ts:368](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L368)

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

[src/LinkedList.ts:369](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L369)

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

[src/LinkedList.ts:342](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L342)

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

[src/LinkedList.ts:343](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L343)

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

[src/LinkedCollection.ts:224](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L224)

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

[src/LinkedCollection.ts:225](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L225)

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

[src/LinkedList.ts:300](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L300)

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

[src/LinkedList.ts:301](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L301)

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

[src/LinkedCollection.ts:254](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L254)

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

[src/LinkedCollection.ts:255](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L255)

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

[src/LinkedCollection.ts:71](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L71)

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

[src/LinkedList.ts:134](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L134)

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

[src/LinkedCollection.ts:168](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L168)

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

▸ **keys**(): `IterableIterator`<`T`[`K`]\>

Iterates through collection keys

#### Returns

`IterableIterator`<`T`[`K`]\>

#### Overrides

[LinkedList](LinkedList.md).[keys](LinkedList.md#keys)

#### Defined in

[src/LinkedCollection.ts:55](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L55)

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

[src/LinkedCollection.ts:235](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L235)

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

[src/LinkedCollection.ts:236](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L236)

___

### new

▸ **new**(`iterable?`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `IterableIterator`<`T`\> \| `T`[] \| `Generator`<`T`, `void`, `unknown`\> |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[new](LinkedList.md#new)

#### Defined in

[src/LinkedCollection.ts:29](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L29)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops item from the end of the collection

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[pop](LinkedList.md#pop)

#### Defined in

[src/LinkedCollection.ts:34](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L34)

___

### recycle

▸ **recycle**(): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Moves element from front of list to the end

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

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
| `cb` | `Reducer`<`T`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
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
| `cb` | `Reducer`<`T`, `This`, `RT`, [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>\> |
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

[src/LinkedCollection.ts:208](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L208)

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

[src/LinkedCollection.ts:209](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L209)

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

[src/LinkedCollection.ts:243](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L243)

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

[src/LinkedCollection.ts:244](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L244)

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

[src/LinkedCollection.ts:76](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L76)

___

### shift

▸ **shift**(): `undefined` \| `T`

Shifts item off of the front of the collection

#### Returns

`undefined` \| `T`

#### Overrides

[LinkedList](LinkedList.md).[shift](LinkedList.md#shift)

#### Defined in

[src/LinkedCollection.ts:45](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L45)

___

### slice

▸ **slice**(`start?`, `end?`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Converts list to native Array

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Overrides

[LinkedList](LinkedList.md).[slice](LinkedList.md#slice)

#### Defined in

[src/LinkedCollection.ts:193](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L193)

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

[src/LinkedCollection.ts:203](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L203)

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

[src/LinkedCollection.ts:198](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L198)

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

[src/LinkedList.ts:111](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedList.ts#L111)

___

### update

▸ **update**(`item`, `resolve?`): `T`

Update an existing item by key (default resolver mutates original item)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Partial`<`T`\> & { readonly [k in string \| number \| symbol]: T[K] } |
| `resolve?` | (`existing`: `T`, `update`: `Partial`<`T`\>) => `T` |

#### Returns

`T`

#### Defined in

[src/LinkedCollection.ts:93](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L93)

▸ **update**(`key`, `item`, `resolve?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T`[`K`] |
| `item` | `Partial`<`T`\> |
| `resolve?` | (`existing`: `T`, `update`: `Partial`<`T`\>) => `T` |

#### Returns

`T`

#### Defined in

[src/LinkedCollection.ts:97](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L97)

___

### upsert

▸ **upsert**(`item`, `resolve?`): [`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

Insert unique item to the front of the collection or update exiting item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |
| `resolve` | (`existing`: `T`, `update`: `T`) => `T` |

#### Returns

[`LinkedCollection`](LinkedCollection.md)<`K`, `T`, `N`\>

#### Defined in

[src/LinkedCollection.ts:145](https://github.com/zimmed/prefab/blob/2efd938/src/LinkedCollection.ts#L145)

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
