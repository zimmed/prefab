[@zimmed/prefab](../README.md) / [Exports](../modules.md) / LinkedList

# Module: LinkedList

## Table of contents

### References

- [default](LinkedList.md#default)

### Classes

- [LinkedList](../classes/LinkedList.LinkedList-1.md)

### Type aliases

- [Callback](LinkedList.md#callback)
- [LNode](LinkedList.md#lnode)
- [Reducer](LinkedList.md#reducer)

## References

### default

Renames and exports: [LinkedList](../classes/LinkedList.LinkedList-1.md)

## Type aliases

### Callback

Ƭ **Callback**<`T`, `This`, `RT`, `Self`\>: (`this`: `This`) => `RT` \| (`this`: `This`, `value`: `T`) => `RT` \| (`this`: `This`, `value`: `T`, `index`: `number`) => `RT` \| (`this`: `This`, `value`: `T`, `index`: `number`, `set`: `Self`) => `RT`

#### Type parameters

| Name |
| :------ |
| `T` |
| `This` |
| `RT` |
| `Self` |

#### Defined in

[LinkedList.ts:3](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L3)

___

### LNode

Ƭ **LNode**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | `T` |
| `head?` | [`LNode`](LinkedList.md#lnode)<`T`\> |
| `tail?` | [`LNode`](LinkedList.md#lnode)<`T`\> |

#### Defined in

[LinkedList.ts:16](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L16)

___

### Reducer

Ƭ **Reducer**<`T`, `This`, `RT`, `Self`\>: (`this`: `This`) => `RT` \| (`this`: `This`, `accumulator`: `RT`) => `RT` \| (`this`: `This`, `accumulator`: `RT`, `value`: `T`) => `RT` \| (`this`: `This`, `accumulator`: `RT`, `value`: `T`, `index`: `number`) => `RT` \| (`this`: `This`, `accumulator`: `RT`, `value`: `T`, `index`: `number`, `set`: `Self`) => `RT`

#### Type parameters

| Name |
| :------ |
| `T` |
| `This` |
| `RT` |
| `Self` |

#### Defined in

[LinkedList.ts:9](https://github.com/zimmed/prefab/blob/8710d36/src/LinkedList.ts#L9)
