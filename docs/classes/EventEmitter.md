[@nbsolutions/event - v0.0.2](../README.md) / [Exports](../modules.md) / EventEmitter

# Class: EventEmitter

## Hierarchy

- `NBSObject`

  ↳ **`EventEmitter`**

## Implements

- `IEventEmitter`

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
- [getClassName](EventEmitter.md#getclassname-1)
- [isVoid](EventEmitter.md#isvoid)

## Constructors

### constructor

• **new EventEmitter**()

#### Overrides

NBSObject.constructor

#### Defined in

[src/EventEmitter.ts:9](https://github.com/nbsolutions-ca/event-js/blob/6f39d2a/src/EventEmitter.ts#L9)

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

[src/EventEmitter.ts:31](https://github.com/nbsolutions-ca/event-js/blob/6f39d2a/src/EventEmitter.ts#L31)

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

[src/EventEmitter.ts:22](https://github.com/nbsolutions-ca/event-js/blob/6f39d2a/src/EventEmitter.ts#L22)

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

[src/EventEmitter.ts:14](https://github.com/nbsolutions-ca/event-js/blob/6f39d2a/src/EventEmitter.ts#L14)

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

#### Implementation of

IEventEmitter.getClassName

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
