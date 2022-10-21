[@zimmed/prefab](../README.md) / [Exports](../modules.md) / ObjectPool

# Class: ObjectPool<O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](PoolObject.md) |

## Table of contents

### Constructors

- [constructor](ObjectPool.md#constructor)

### Properties

- [\_Class](ObjectPool.md#_class)
- [\_list](ObjectPool.md#_list)
- [\_max](ObjectPool.md#_max)
- [Object](ObjectPool.md#object)

### Accessors

- [size](ObjectPool.md#size)

### Methods

- [[iterator]](ObjectPool.md#[iterator])
- [add](ObjectPool.md#add)
- [alloc](ObjectPool.md#alloc)
- [clear](ObjectPool.md#clear)
- [create](ObjectPool.md#create)
- [dealloc](ObjectPool.md#dealloc)
- [deallocateObject](ObjectPool.md#deallocateobject)
- [forceSpawn](ObjectPool.md#forcespawn)
- [free](ObjectPool.md#free)
- [insert](ObjectPool.md#insert)
- [items](ObjectPool.md#items)
- [realloc](ObjectPool.md#realloc)
- [reallocUnsafe](ObjectPool.md#reallocunsafe)
- [spawn](ObjectPool.md#spawn)
- [toJSON](ObjectPool.md#tojson)

## Constructors

### constructor

• **new ObjectPool**<`O`\>(`PoolObjectClass`, `allocSize?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](PoolObject.md)<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `PoolObjectClass` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Defined in

[src/ObjectPool.ts:52](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L52)

## Properties

### \_Class

• `Protected` `Readonly` **\_Class**: () => `O`

#### Type declaration

• **new ObjectPool**()

#### Defined in

[src/ObjectPool.ts:42](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L42)

___

### \_list

• `Protected` `Readonly` **\_list**: [`LinkedList`](LinkedList.md)<`O`, `PoolState`<`O`\>\>

#### Defined in

[src/ObjectPool.ts:39](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L39)

___

### \_max

• `Private` **\_max**: `number` = `0`

#### Defined in

[src/ObjectPool.ts:45](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L45)

___

### Object

▪ `Static` **Object**: typeof [`PoolObject`](PoolObject.md) = `PoolObject`

Objects within the pool must inherit from ObjectPool.Object

#### Defined in

[src/ObjectPool.ts:36](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L36)

## Accessors

### size

• `get` **size**(): `number`

The current (max) size of the object pool

#### Returns

`number`

#### Defined in

[src/ObjectPool.ts:48](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L48)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`O`, `void`, `unknown`\>

#### Returns

`Generator`<`O`, `void`, `unknown`\>

#### Defined in

[src/ObjectPool.ts:65](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L65)

___

### add

▸ `Protected` **add**(`obj`): `void`

Append new object to end of the pool queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `O` |

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:170](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L170)

___

### alloc

▸ **alloc**(`size?`): [`ObjectPool`](ObjectPool.md)<`O`\>

Increases pool size and allocates new objects to fill it

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `1` |

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:108](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L108)

___

### clear

▸ **clear**(): [`ObjectPool`](ObjectPool.md)<`O`\>

Completely clear the pool, freeing all objects from memory

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:145](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L145)

___

### create

▸ `Protected` **create**(): `O`

Create and return new PoolObject

#### Returns

`O`

#### Defined in

[src/ObjectPool.ts:162](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L162)

___

### dealloc

▸ **dealloc**(`size?`): [`ObjectPool`](ObjectPool.md)<`O`\>

Downsize pool by specified amount, deallocating overflowing objects

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `1` |

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:150](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L150)

___

### deallocateObject

▸ `Protected` **deallocateObject**(`obj?`, `del?`): `boolean`

Cleans and removes object from pool entirely

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj?` | `O` | `undefined` |
| `del` | `boolean` | `true` |

#### Returns

`boolean`

#### Defined in

[src/ObjectPool.ts:182](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L182)

___

### forceSpawn

▸ **forceSpawn**(...`args`): `O`

Spawns and initializes object from pool, or create new object and increase pool size if full

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `InitArgs`<`O`\> |

#### Returns

`O`

#### Defined in

[src/ObjectPool.ts:70](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L70)

___

### free

▸ **free**(`item`): [`ObjectPool`](ObjectPool.md)<`O`\>

Returns object back to pool to be re-used later

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `O` |

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:101](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L101)

___

### insert

▸ `Protected` **insert**(`obj`): `void`

Insert new object into front of the pool queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `O` |

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:176](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L176)

___

### items

▸ **items**(): `Generator`<`O`, `void`, `unknown`\>

#### Returns

`Generator`<`O`, `void`, `unknown`\>

#### Defined in

[src/ObjectPool.ts:58](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L58)

___

### realloc

▸ **realloc**(`size?`): [`ObjectPool`](ObjectPool.md)<`O`\>

Sets max pool size, but ignores call if provided size is smaller than current max

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:134](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L134)

___

### reallocUnsafe

▸ **reallocUnsafe**(`size?`): [`ObjectPool`](ObjectPool.md)<`O`\>

Overrides max pool size, deallocating any overflowing objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:119](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L119)

___

### spawn

▸ **spawn**(...`args`): `undefined` \| `O`

Spawns and initializes object from pool (if any are free)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `InitArgs`<`O`\> |

#### Returns

`undefined` \| `O`

#### Defined in

[src/ObjectPool.ts:88](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L88)

___

### toJSON

▸ **toJSON**(): `O`[]

#### Returns

`O`[]

#### Defined in

[src/ObjectPool.ts:199](https://github.com/zimmed/prefab/blob/cecae0e/src/ObjectPool.ts#L199)
