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
- [create](ObjectPool.md#create-1)

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

[src/ObjectPool.ts:57](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L57)

## Properties

### \_Class

• `Protected` `Readonly` **\_Class**: () => `O`

#### Type declaration

• **new ObjectPool**()

#### Defined in

[src/ObjectPool.ts:47](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L47)

___

### \_list

• `Protected` `Readonly` **\_list**: [`LinkedList`](LinkedList.md)<`O`, `PoolState`<`O`\>\>

#### Defined in

[src/ObjectPool.ts:44](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L44)

___

### \_max

• `Private` **\_max**: `number` = `0`

#### Defined in

[src/ObjectPool.ts:50](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L50)

___

### Object

▪ `Static` **Object**: typeof [`PoolObject`](PoolObject.md) = `PoolObject`

Objects within the pool must inherit from ObjectPool.Object

#### Defined in

[src/ObjectPool.ts:36](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L36)

## Accessors

### size

• `get` **size**(): `number`

The current (max) size of the object pool

#### Returns

`number`

#### Defined in

[src/ObjectPool.ts:53](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L53)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`O`, `void`, `unknown`\>

#### Returns

`Generator`<`O`, `void`, `unknown`\>

#### Defined in

[src/ObjectPool.ts:70](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L70)

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

[src/ObjectPool.ts:175](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L175)

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

[src/ObjectPool.ts:113](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L113)

___

### clear

▸ **clear**(): [`ObjectPool`](ObjectPool.md)<`O`\>

Completely clear the pool, freeing all objects from memory

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:150](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L150)

___

### create

▸ `Protected` **create**(): `O`

Create and return new PoolObject

#### Returns

`O`

#### Defined in

[src/ObjectPool.ts:167](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L167)

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

[src/ObjectPool.ts:155](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L155)

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

[src/ObjectPool.ts:187](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L187)

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

[src/ObjectPool.ts:75](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L75)

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

[src/ObjectPool.ts:106](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L106)

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

[src/ObjectPool.ts:181](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L181)

___

### items

▸ **items**(): `Generator`<`O`, `void`, `unknown`\>

#### Returns

`Generator`<`O`, `void`, `unknown`\>

#### Defined in

[src/ObjectPool.ts:63](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L63)

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

[src/ObjectPool.ts:139](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L139)

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

[src/ObjectPool.ts:124](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L124)

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

[src/ObjectPool.ts:93](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L93)

___

### toJSON

▸ **toJSON**(): `O`[]

#### Returns

`O`[]

#### Defined in

[src/ObjectPool.ts:204](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L204)

___

### create

▸ `Static` **create**<`O`\>(`PoolObjectClass`, `allocSize?`): [`ObjectPool`](ObjectPool.md)<`O`\>

Static factory method as alias for class constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](PoolObject.md)<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `PoolObjectClass` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:39](https://github.com/zimmed/prefab/blob/83cd828/src/ObjectPool.ts#L39)
