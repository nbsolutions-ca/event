[@nbsolutions/event - v0.0.1](../README.md) / [Exports](../modules.md) / EventEmitter

# Class: EventEmitter

## Hierarchy

- `NBSObject`

  ↳ **`EventEmitter`**

## Table of contents

### Constructors

- [constructor](EventEmitter.md#constructor)

### Methods

- [\_emit](EventEmitter.md#_emit)
- [\_excludeNBSObjectAutoBindingsFor](EventEmitter.md#_excludenbsobjectautobindingsfor)
- [\_off](EventEmitter.md#_off)
- [\_on](EventEmitter.md#_on)
- [\_skipNBSObjectAutoBind](EventEmitter.md#_skipnbsobjectautobind)
- [getClassName](EventEmitter.md#getclassname)
- [getClassName](EventEmitter.md#getclassname)
- [isVoid](EventEmitter.md#isvoid)

## Constructors

### constructor

• **new EventEmitter**()

#### Overrides

NBSObject.constructor

#### Defined in

[src/EventEmitter.ts:8](https://github.com/nbsolutions-ca/event/blob/aa0ae28/src/EventEmitter.ts#L8)

## Methods

### \_emit

▸ `Protected` **_emit**(`event`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/EventEmitter.ts:30](https://github.com/nbsolutions-ca/event/blob/aa0ae28/src/EventEmitter.ts#L30)

___

### \_excludeNBSObjectAutoBindingsFor

▸ `Protected` **_excludeNBSObjectAutoBindingsFor**(): `string`[]

#### Returns

`string`[]

#### Inherited from

NBSObject.\_excludeNBSObjectAutoBindingsFor

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:36

___

### \_off

▸ `Protected` **_off**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/EventEmitter.ts:21](https://github.com/nbsolutions-ca/event/blob/aa0ae28/src/EventEmitter.ts#L21)

___

### \_on

▸ `Protected` **_on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/EventEmitter.ts:13](https://github.com/nbsolutions-ca/event/blob/aa0ae28/src/EventEmitter.ts#L13)

___

### \_skipNBSObjectAutoBind

▸ `Protected` **_skipNBSObjectAutoBind**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NBSObject.\_skipNBSObjectAutoBind

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:34

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:26

___

### getClassName

▸ `Static` **getClassName**(`o`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:37

___

### isVoid

▸ `Static` **isVoid**<`T`\>(`o`): `boolean`

Returns true if the given value is `null` or `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Any value |

#### Returns

`boolean`

#### Inherited from

NBSObject.isVoid

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:33
