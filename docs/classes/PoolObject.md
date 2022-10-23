[@zimmed/prefab](../README.md) / [Exports](../modules.md) / PoolObject

# Class: PoolObject

## Table of contents

### Constructors

- [constructor](PoolObject.md#constructor)

### Properties

- [poolState](PoolObject.md#poolstate)

### Methods

- [onClean](PoolObject.md#onclean)
- [onInit](PoolObject.md#oninit)

## Constructors

### constructor

• **new PoolObject**()

Constructor must take no arguments

#### Defined in

[src/ObjectPool.ts:25](https://github.com/zimmed/prefab/blob/bcf9898/src/ObjectPool.ts#L25)

## Properties

### poolState

• `Readonly` **poolState**: `PoolState`<[`PoolObject`](PoolObject.md)\>

#### Defined in

[src/ObjectPool.ts:16](https://github.com/zimmed/prefab/blob/bcf9898/src/ObjectPool.ts#L16)

## Methods

### onClean

▸ `Abstract` **onClean**(): `void`

Deinitializer called when object is put back into the pool or freed from memory

#### Returns

`void`

#### Defined in

[src/ObjectPool.ts:31](https://github.com/zimmed/prefab/blob/bcf9898/src/ObjectPool.ts#L31)

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

[src/ObjectPool.ts:28](https://github.com/zimmed/prefab/blob/bcf9898/src/ObjectPool.ts#L28)
