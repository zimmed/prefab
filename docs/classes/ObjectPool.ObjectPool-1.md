[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [ObjectPool](../modules/ObjectPool.md) / ObjectPool

# Class: ObjectPool<O\>

[ObjectPool](../modules/ObjectPool.md).ObjectPool

## Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](ObjectPool.PoolObject.md) |

## Table of contents

### Constructors

- [constructor](ObjectPool.ObjectPool-1.md#constructor)

### Properties

- [\_Class](ObjectPool.ObjectPool-1.md#_class)
- [\_list](ObjectPool.ObjectPool-1.md#_list)
- [\_max](ObjectPool.ObjectPool-1.md#_max)
- [Object](ObjectPool.ObjectPool-1.md#object)

### Accessors

- [size](ObjectPool.ObjectPool-1.md#size)

### Methods

- [add](ObjectPool.ObjectPool-1.md#add)
- [alloc](ObjectPool.ObjectPool-1.md#alloc)
- [clear](ObjectPool.ObjectPool-1.md#clear)
- [create](ObjectPool.ObjectPool-1.md#create)
- [dealloc](ObjectPool.ObjectPool-1.md#dealloc)
- [deallocateObject](ObjectPool.ObjectPool-1.md#deallocateobject)
- [forceSpawn](ObjectPool.ObjectPool-1.md#forcespawn)
- [free](ObjectPool.ObjectPool-1.md#free)
- [insert](ObjectPool.ObjectPool-1.md#insert)
- [realloc](ObjectPool.ObjectPool-1.md#realloc)
- [reallocUnsafe](ObjectPool.ObjectPool-1.md#reallocunsafe)
- [spawn](ObjectPool.ObjectPool-1.md#spawn)
- [create](ObjectPool.ObjectPool-1.md#create)

## Constructors

### constructor

• **new ObjectPool**<`O`\>(`PoolObjectClass`, `allocSize?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](ObjectPool.PoolObject.md)<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `PoolObjectClass` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Defined in

[ObjectPool.ts:63](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L63)

## Properties

### \_Class

• `Protected` `Readonly` **\_Class**: () => `O`

#### Type declaration

• **new ObjectPool**()

#### Defined in

[ObjectPool.ts:48](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L48)

___

### \_list

• `Protected` `Readonly` **\_list**: [`LinkedList`](LinkedList.LinkedList-1.md)<`O`, [`PoolState`](../modules/ObjectPool.md#poolstate)<`O`\>\>

#### Defined in

[ObjectPool.ts:45](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L45)

___

### \_max

• `Private` **\_max**: `number` = `0`

#### Defined in

[ObjectPool.ts:51](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L51)

___

### Object

▪ `Static` **Object**: typeof [`PoolObject`](ObjectPool.PoolObject.md)

Objects within the pool must inherit from ObjectPool.Object

#### Defined in

[ObjectPool.ts:37](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L37)

## Accessors

### size

• `get` **size**(): `number`

The current (max) size of the object pool

#### Returns

`number`

#### Defined in

[ObjectPool.ts:54](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L54)

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

[ObjectPool.ts:179](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L179)

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

[ObjectPool.ts:125](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L125)

___

### clear

▸ **clear**(): `void`

Completely clear the pool, freeing all objects from memory

#### Returns

`void`

#### Defined in

[ObjectPool.ts:158](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L158)

___

### create

▸ `Protected` **create**(): `O`

Create and return new PoolObject

#### Returns

`O`

#### Defined in

[ObjectPool.ts:171](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L171)

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

[ObjectPool.ts:163](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L163)

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

[ObjectPool.ts:112](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L112)

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

[ObjectPool.ts:70](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L70)

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

[ObjectPool.ts:105](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L105)

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

[ObjectPool.ts:185](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L185)

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

[ObjectPool.ts:147](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L147)

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

[ObjectPool.ts:133](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L133)

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

[ObjectPool.ts:90](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L90)

___

### create

▸ `Static` **create**<`O`\>(`PoolObjectClass`, `allocSize?`): [`ObjectPool`](ObjectPool.ObjectPool-1.md)<`O`\>

Static factory method as alias for class constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](ObjectPool.PoolObject.md)<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `PoolObjectClass` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Returns

[`ObjectPool`](ObjectPool.ObjectPool-1.md)<`O`\>

#### Defined in

[ObjectPool.ts:40](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L40)
