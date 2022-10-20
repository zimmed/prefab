[@zimmed/prefab](../README.md) / [Exports](../modules.md) / ObjectPool

# Class: ObjectPool<O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `PoolObject` |

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

- [add](ObjectPool.md#add)
- [alloc](ObjectPool.md#alloc)
- [clear](ObjectPool.md#clear)
- [create](ObjectPool.md#create)
- [dealloc](ObjectPool.md#dealloc)
- [deallocateObject](ObjectPool.md#deallocateobject)
- [forceSpawn](ObjectPool.md#forcespawn)
- [free](ObjectPool.md#free)
- [insert](ObjectPool.md#insert)
- [realloc](ObjectPool.md#realloc)
- [reallocUnsafe](ObjectPool.md#reallocunsafe)
- [spawn](ObjectPool.md#spawn)
- [create](ObjectPool.md#create-1)

## Constructors

### constructor

• **new ObjectPool**<`O`\>(`PoolObjectClass`, `allocSize?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `PoolObject`<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `PoolObjectClass` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Defined in

[src/ObjectPool.ts:63](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L63)

## Properties

### \_Class

• `Protected` `Readonly` **\_Class**: () => `O`

#### Type declaration

• **new ObjectPool**()

#### Defined in

[src/ObjectPool.ts:48](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L48)

___

### \_list

• `Protected` `Readonly` **\_list**: [`LinkedList`](LinkedList.md)<`O`, `PoolState`<`O`\>\>

#### Defined in

[src/ObjectPool.ts:45](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L45)

___

### \_max

• `Private` **\_max**: `number` = `0`

#### Defined in

[src/ObjectPool.ts:51](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L51)

___

### Object

▪ `Static` **Object**: typeof `PoolObject` = `PoolObject`

Objects within the pool must inherit from ObjectPool.Object

#### Defined in

[src/ObjectPool.ts:37](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L37)

## Accessors

### size

• `get` **size**(): `number`

The current (max) size of the object pool

#### Returns

`number`

#### Defined in

[src/ObjectPool.ts:54](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L54)

## Methods

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

[src/ObjectPool.ts:175](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L175)

___

### alloc

▸ **alloc**(`size?`): `void`

Increases pool size and allocates new objects to fill it

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:121](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L121)

___

### clear

▸ **clear**(): `void`

Completely clear the pool, freeing all objects from memory

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:154](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L154)

___

### create

▸ `Protected` **create**(): `O`

Create and return new PoolObject

#### Returns

`O`

#### Defined in

[src/ObjectPool.ts:167](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L167)

___

### dealloc

▸ **dealloc**(`size?`): `void`

Downsize pool by specified amount, deallocating overflowing objects

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:159](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L159)

___

### deallocateObject

▸ **deallocateObject**(`obj?`, `del?`): `boolean`

Cleans and removes object from pool entirely

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj?` | `O` | `undefined` |
| `del` | `boolean` | `true` |

#### Returns

`boolean`

#### Defined in

[src/ObjectPool.ts:108](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L108)

___

### forceSpawn

▸ **forceSpawn**(...`args`): `O`

Spawns and initializes object from pool, or create new object and increase pool size if full

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `InitArgs`<`O`, `O`[``"onInit"``]\> |

#### Returns

`O`

#### Defined in

[src/ObjectPool.ts:70](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L70)

___

### free

▸ **free**(`item`): `void`

Returns object back to pool to be re-used later

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `O` |

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:101](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L101)

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

[src/ObjectPool.ts:181](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L181)

___

### realloc

▸ **realloc**(`size?`): `void`

Sets max pool size, but ignores call if provided size is smaller than current max

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:143](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L143)

___

### reallocUnsafe

▸ **reallocUnsafe**(`size?`): `void`

Overrides max pool size, deallocating any overflowing objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:129](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L129)

___

### spawn

▸ **spawn**(...`args`): `undefined` \| `O`

Spawns and initializes object from pool (if any are free)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `InitArgs`<`O`, `O`[``"onInit"``]\> |

#### Returns

`undefined` \| `O`

#### Defined in

[src/ObjectPool.ts:88](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L88)

___

### create

▸ `Static` **create**<`O`\>(`PoolObjectClass`, `allocSize?`): [`ObjectPool`](ObjectPool.md)<`O`\>

Static factory method as alias for class constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `PoolObject`<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `PoolObjectClass` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Returns

[`ObjectPool`](ObjectPool.md)<`O`\>

#### Defined in

[src/ObjectPool.ts:40](https://github.com/zimmed/prefab/blob/a5ffdd1/src/ObjectPool.ts#L40)
