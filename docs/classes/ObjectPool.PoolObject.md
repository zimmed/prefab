[@zimmed/prefab](../README.md) / [Exports](../modules.md) / [ObjectPool](../modules/ObjectPool.md) / PoolObject

# Class: PoolObject

[ObjectPool](../modules/ObjectPool.md).PoolObject

## Table of contents

### Constructors

- [constructor](ObjectPool.PoolObject.md#constructor)

### Properties

- [poolState](ObjectPool.PoolObject.md#poolstate)

### Methods

- [poolClean](ObjectPool.PoolObject.md#poolclean)
- [poolInit](ObjectPool.PoolObject.md#poolinit)

## Constructors

### constructor

• **new PoolObject**()

Constructor must take no arguments

#### Defined in

[ObjectPool.ts:26](https://github.com/zimmed/prefab/blob/db84beb/src/ObjectPool.ts#L26)

## Properties

### poolState

• `Readonly` **poolState**: [`PoolState`](../modules/ObjectPool.md#poolstate)<[`PoolObject`](ObjectPool.PoolObject.md)\>

#### Defined in

[ObjectPool.ts:17](https://github.com/zimmed/prefab/blob/db84beb/src/ObjectPool.ts#L17)

## Methods

### poolClean

▸ `Abstract` **poolClean**(): `void`

#### Returns

`void`

#### Defined in

[ObjectPool.ts:30](https://github.com/zimmed/prefab/blob/db84beb/src/ObjectPool.ts#L30)

___

### poolInit

▸ `Abstract` **poolInit**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[ObjectPool.ts:28](https://github.com/zimmed/prefab/blob/db84beb/src/ObjectPool.ts#L28)
