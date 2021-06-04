[@nbsolutions/event - v0.0.0](../README.md) / [Exports](../modules.md) / [EventEmitter](../modules/eventemitter.md) / EventEmitter

# Class: EventEmitter

[EventEmitter](../modules/eventemitter.md).EventEmitter

## Hierarchy

- `NBSObject`

  ↳ **EventEmitter**

## Table of contents

### Constructors

- [constructor](eventemitter.eventemitter-1.md#constructor)

### Methods

- [\_emit](eventemitter.eventemitter-1.md#_emit)
- [\_excludeNBSObjectAutoBindingsFor](eventemitter.eventemitter-1.md#_excludenbsobjectautobindingsfor)
- [\_off](eventemitter.eventemitter-1.md#_off)
- [\_on](eventemitter.eventemitter-1.md#_on)
- [\_skipNBSObjectAutoBind](eventemitter.eventemitter-1.md#_skipnbsobjectautobind)
- [getClassName](eventemitter.eventemitter-1.md#getclassname)
- [testBind](eventemitter.eventemitter-1.md#testbind)
- [getClassName](eventemitter.eventemitter-1.md#getclassname)
- [isVoid](eventemitter.eventemitter-1.md#isvoid)

## Constructors

### constructor

• **new EventEmitter**()

#### Overrides

NBSObject.constructor

#### Defined in

src/EventEmitter.ts:6

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

src/EventEmitter.ts:30

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

src/EventEmitter.ts:21

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

src/EventEmitter.ts:13

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

### testBind

▸ **testBind**(): `NBSObject`

#### Returns

`NBSObject`

#### Inherited from

NBSObject.testBind

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:25

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

▸ `Static` **isVoid**<T\>(`o`): `boolean`

Returns true if the given value is `null` or `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

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
