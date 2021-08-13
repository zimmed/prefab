[@zimmed/prefab](../README.md) / [Exports](../modules.md) / ObjectPool

# Module: ObjectPool

## Table of contents

### References

- [default](ObjectPool.md#default)

### Classes

- [ObjectPool](../classes/ObjectPool.ObjectPool-1.md)
- [PoolObject](../classes/ObjectPool.PoolObject.md)

### Type aliases

- [PoolState](ObjectPool.md#poolstate)

## References

### default

Renames and exports: [ObjectPool](../classes/ObjectPool.ObjectPool-1.md)

## Type aliases

### PoolState

Ƭ **PoolState**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PoolObject`](../classes/ObjectPool.PoolObject.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | `T` |
| `head?` | [`LNode`](LinkedList.md#lnode)<`T`\> |
| `inUse` | `boolean` |
| `pool?` | [`ObjectPool`](../classes/ObjectPool.ObjectPool-1.md)<`T`\> |
| `tail?` | [`LNode`](LinkedList.md#lnode)<`T`\> |

#### Defined in

[ObjectPool.ts:7](https://github.com/zimmed/prefab/blob/26aef1e/src/ObjectPool.ts#L7)
