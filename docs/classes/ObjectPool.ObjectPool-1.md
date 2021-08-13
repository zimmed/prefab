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

[ObjectPool.ts:157](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L157)

## Properties

### \_Class

• `Protected` `Readonly` **\_Class**: () => `O`

#### Type declaration

• **new ObjectPool**()

#### Defined in

[ObjectPool.ts:44](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L44)

___

### \_list

• `Protected` `Readonly` **\_list**: [`LinkedList`](LinkedList.LinkedList-1.md)<`O`, [`PoolState`](../modules/ObjectPool.md#poolstate)<`O`\>\>

#### Defined in

[ObjectPool.ts:41](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L41)

___

### \_max

• `Private` **\_max**: `number` = `0`

#### Defined in

[ObjectPool.ts:47](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L47)

___

### Object

▪ `Static` **Object**: typeof [`PoolObject`](ObjectPool.PoolObject.md)

#### Defined in

[ObjectPool.ts:34](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L34)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[ObjectPool.ts:49](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L49)

## Methods

### add

▸ `Private` **add**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `O` |

#### Returns

`void`

#### Defined in

[ObjectPool.ts:163](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L163)

___

### alloc

▸ **alloc**(`size?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `1` |

#### Returns

`void`

#### Defined in

[ObjectPool.ts:116](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L116)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[ObjectPool.ts:146](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L146)

___

### create

▸ **create**(): `O`

#### Returns

`O`

#### Defined in

[ObjectPool.ts:58](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L58)

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

[ObjectPool.ts:150](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L150)

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

[ObjectPool.ts:104](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L104)

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

[ObjectPool.ts:65](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L65)

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

[ObjectPool.ts:98](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L98)

___

### insert

▸ `Private` **insert**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `O` |

#### Returns

`void`

#### Defined in

[ObjectPool.ts:168](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L168)

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

[ObjectPool.ts:136](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L136)

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

[ObjectPool.ts:123](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L123)

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

[ObjectPool.ts:84](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L84)

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

[ObjectPool.ts:36](https://github.com/zimmed/prefab/blob/8710d36/src/ObjectPool.ts#L36)
