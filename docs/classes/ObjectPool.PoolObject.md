[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [ObjectPool](../modules/ObjectPool.md) / PoolObject

# Class: PoolObject

[ObjectPool](../modules/ObjectPool.md).PoolObject

## Table of contents

### Constructors

- [constructor](ObjectPool.PoolObject.md#constructor)

### Properties

- [poolState](ObjectPool.PoolObject.md#poolstate)

### Methods

- [onClean](ObjectPool.PoolObject.md#onclean)
- [onInit](ObjectPool.PoolObject.md#oninit)

## Constructors

### constructor

• **new PoolObject**()

Constructor must take no arguments

#### Defined in

[ObjectPool.ts:26](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L26)

## Properties

### poolState

• `Readonly` **poolState**: [`PoolState`](../modules/ObjectPool.md#poolstate)<[`PoolObject`](ObjectPool.PoolObject.md)\>

#### Defined in

[ObjectPool.ts:17](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L17)

## Methods

### onClean

▸ `Abstract` **onClean**(): `void`

Deinitializer called when object is put back into the pool or freed from memory

#### Returns

`void`

#### Defined in

[ObjectPool.ts:32](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L32)

___

### onInit

▸ `Abstract` **onInit**(...`args`): `void`

Initializer for when object is spawned by the pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[ObjectPool.ts:29](https://github.com/zimmed/prefab/blob/5b06828/src/ObjectPool.ts#L29)
