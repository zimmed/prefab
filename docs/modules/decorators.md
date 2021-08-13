[@zimmed/prefab](../README.md) / [Exports](../modules.md) / decorators

# Module: decorators

## Table of contents

### Functions

- [describe](decorators.md#describe)
- [forceInit](decorators.md#forceinit)
- [hidden](decorators.md#hidden)
- [readonly](decorators.md#readonly)
- [visible](decorators.md#visible)

## Functions

### describe

▸ **describe**(`__namedParameters?`): `PropertyDecorator` & (`a`: { `configurable?`: `boolean` ; `enumerable?`: `boolean` ; `writable?`: `boolean`  }) => `PropertyDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Partial`<`PropertyDescriptor`\> |

#### Returns

`PropertyDecorator` & (`a`: { `configurable?`: `boolean` ; `enumerable?`: `boolean` ; `writable?`: `boolean`  }) => `PropertyDecorator`

#### Defined in

[decorators.ts:3](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L3)

___

### forceInit

▸ **forceInit**<`T`, `V`\>(`factory`, `__namedParameters?`): `PropertyDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | (`t`: `T`) => `V` |
| `__namedParameters` | `Partial`<`PropertyDescriptor`\> |

#### Returns

`PropertyDecorator`

#### Defined in

[decorators.ts:39](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L39)

___

### hidden

▸ `Const` **hidden**(`target`, `propertyKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

#### Returns

`void`

#### Defined in

[decorators.ts:63](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L63)

▸ `Const` **hidden**(`a`): `PropertyDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Object` |
| `a.configurable?` | `boolean` |
| `a.enumerable?` | `boolean` |
| `a.writable?` | `boolean` |

#### Returns

`PropertyDecorator`

#### Defined in

[decorators.ts:63](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L63)

___

### readonly

▸ `Const` **readonly**(`target`, `propertyKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

#### Returns

`void`

#### Defined in

[decorators.ts:65](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L65)

▸ `Const` **readonly**(`a`): `PropertyDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Object` |
| `a.configurable?` | `boolean` |
| `a.enumerable?` | `boolean` |
| `a.writable?` | `boolean` |

#### Returns

`PropertyDecorator`

#### Defined in

[decorators.ts:65](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L65)

___

### visible

▸ `Const` **visible**(`target`, `propertyKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

#### Returns

`void`

#### Defined in

[decorators.ts:67](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L67)

▸ `Const` **visible**(`a`): `PropertyDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Object` |
| `a.configurable?` | `boolean` |
| `a.enumerable?` | `boolean` |
| `a.writable?` | `boolean` |

#### Returns

`PropertyDecorator`

#### Defined in

[decorators.ts:67](https://github.com/zimmed/prefab/blob/26aef1e/src/decorators.ts#L67)
