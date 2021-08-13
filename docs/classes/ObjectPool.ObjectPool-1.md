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

### Methods

- [alloc](ObjectPool.ObjectPool-1.md#alloc)
- [create](ObjectPool.ObjectPool-1.md#create)
- [dealloc](ObjectPool.ObjectPool-1.md#dealloc)
- [deallocateObject](ObjectPool.ObjectPool-1.md#deallocateobject)
- [forceSpawn](ObjectPool.ObjectPool-1.md#forcespawn)
- [free](ObjectPool.ObjectPool-1.md#free)
- [realloc](ObjectPool.ObjectPool-1.md#realloc)
- [reallocUnsafe](ObjectPool.ObjectPool-1.md#reallocunsafe)
- [spawn](ObjectPool.ObjectPool-1.md#spawn)
- [create](ObjectPool.ObjectPool-1.md#create)

## Constructors

### constructor

• **new ObjectPool**<`O`\>(`Class`, `allocSize?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](ObjectPool.PoolObject.md)<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `Class` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Defined in

ObjectPool.ts:134

## Properties

### \_Class

• `Readonly` **\_Class**: () => `O`

#### Type declaration

• **new ObjectPool**()

#### Defined in

ObjectPool.ts:44

___

### \_list

• `Readonly` **\_list**: [`LinkedList`](LinkedList.LinkedList-1.md)<`O`, [`PoolState`](../modules/ObjectPool.md#poolstate)<`O`\>\>

#### Defined in

ObjectPool.ts:43

___

### \_max

• **\_max**: `number` = `0`

#### Defined in

ObjectPool.ts:45

___

### Object

▪ `Static` **Object**: typeof [`PoolObject`](ObjectPool.PoolObject.md)

#### Defined in

ObjectPool.ts:37

## Methods

### alloc

▸ **alloc**(`size?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `1` |

#### Returns

`void`

#### Defined in

ObjectPool.ts:97

___

### create

▸ **create**(): `O`

#### Returns

`O`

#### Defined in

ObjectPool.ts:47

___

### dealloc

▸ **dealloc**(`size?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `1` |

#### Returns

`void`

#### Defined in

ObjectPool.ts:127

___

### deallocateObject

▸ **deallocateObject**(`obj?`, `del?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj?` | `O` | `undefined` |
| `del` | `boolean` | `true` |

#### Returns

`boolean`

#### Defined in

ObjectPool.ts:86

___

### forceSpawn

▸ **forceSpawn**(...`args`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `InitArgs`<`O`, `O`[``"poolInit"``]\> |

#### Returns

`O`

#### Defined in

ObjectPool.ts:54

___

### free

▸ **free**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `O` |

#### Returns

`void`

#### Defined in

ObjectPool.ts:81

___

### realloc

▸ **realloc**(`size?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

ObjectPool.ts:117

___

### reallocUnsafe

▸ **reallocUnsafe**(`size?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

ObjectPool.ts:104

___

### spawn

▸ **spawn**(...`args`): `undefined` \| `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `InitArgs`<`O`, `O`[``"poolInit"``]\> |

#### Returns

`undefined` \| `O`

#### Defined in

ObjectPool.ts:69

___

### create

▸ `Static` **create**<`O`\>(`Class`, `allocSize?`): [`ObjectPool`](ObjectPool.ObjectPool-1.md)<`O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`PoolObject`](ObjectPool.PoolObject.md)<`O`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `Class` | () => `O` | `undefined` |
| `allocSize` | `number` | `0` |

#### Returns

[`ObjectPool`](ObjectPool.ObjectPool-1.md)<`O`\>

#### Defined in

ObjectPool.ts:39
