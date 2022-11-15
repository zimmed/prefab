[@zimmed/prefab](../README.md) / [Exports](../modules.md) / decorators

# Namespace: decorators

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

[src/decorators.ts:3](https://github.com/zimmed/prefab/blob/2efd938/src/decorators.ts#L3)

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

[src/decorators.ts:38](https://github.com/zimmed/prefab/blob/2efd938/src/decorators.ts#L38)

___

### hidden

▸ **hidden**(`target`, `propertyKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1494

▸ **hidden**(`a`): `PropertyDecorator`

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

[src/decorators.ts:8](https://github.com/zimmed/prefab/blob/2efd938/src/decorators.ts#L8)

___

### readonly

▸ **readonly**(`target`, `propertyKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1494

▸ **readonly**(`a`): `PropertyDecorator`

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

[src/decorators.ts:8](https://github.com/zimmed/prefab/blob/2efd938/src/decorators.ts#L8)

___

### visible

▸ **visible**(`target`, `propertyKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1494

▸ **visible**(`a`): `PropertyDecorator`

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

[src/decorators.ts:8](https://github.com/zimmed/prefab/blob/2efd938/src/decorators.ts#L8)
