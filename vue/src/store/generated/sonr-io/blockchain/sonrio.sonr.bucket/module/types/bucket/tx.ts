/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.bucket";

export interface MsgCreateBucket {
  creator: string;
  label: string;
  description: string;
  kind: string;
}

export interface MsgCreateBucketResponse {}

export interface MsgReadBucket {
  creator: string;
  did: string;
}

export interface MsgReadBucketResponse {}

export interface MsgUpdateBucket {
  creator: string;
  did: string;
  label: string;
  description: string;
}

export interface MsgUpdateBucketResponse {}

export interface MsgDeleteBucket {
  creator: string;
  did: string;
  publicKey: string;
}

export interface MsgDeleteBucketResponse {}

export interface MsgCreateWhichIs {
  creator: string;
  index: string;
  did: string;
  documentJson: string;
}

export interface MsgCreateWhichIsResponse {}

export interface MsgUpdateWhichIs {
  creator: string;
  index: string;
  did: string;
  documentJson: string;
}

export interface MsgUpdateWhichIsResponse {}

export interface MsgDeleteWhichIs {
  creator: string;
  index: string;
}

export interface MsgDeleteWhichIsResponse {}

const baseMsgCreateBucket: object = {
  creator: "",
  label: "",
  description: "",
  kind: "",
};

export const MsgCreateBucket = {
  encode(message: MsgCreateBucket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.kind !== "") {
      writer.uint32(34).string(message.kind);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBucket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBucket } as MsgCreateBucket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.kind = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBucket {
    const message = { ...baseMsgCreateBucket } as MsgCreateBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = String(object.kind);
    } else {
      message.kind = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.description !== undefined &&
      (obj.description = message.description);
    message.kind !== undefined && (obj.kind = message.kind);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBucket>): MsgCreateBucket {
    const message = { ...baseMsgCreateBucket } as MsgCreateBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    } else {
      message.kind = "";
    }
    return message;
  },
};

const baseMsgCreateBucketResponse: object = {};

export const MsgCreateBucketResponse = {
  encode(_: MsgCreateBucketResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBucketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBucketResponse,
    } as MsgCreateBucketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateBucketResponse {
    const message = {
      ...baseMsgCreateBucketResponse,
    } as MsgCreateBucketResponse;
    return message;
  },

  toJSON(_: MsgCreateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBucketResponse>
  ): MsgCreateBucketResponse {
    const message = {
      ...baseMsgCreateBucketResponse,
    } as MsgCreateBucketResponse;
    return message;
  },
};

const baseMsgReadBucket: object = { creator: "", did: "" };

export const MsgReadBucket = {
  encode(message: MsgReadBucket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadBucket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadBucket } as MsgReadBucket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReadBucket {
    const message = { ...baseMsgReadBucket } as MsgReadBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgReadBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReadBucket>): MsgReadBucket {
    const message = { ...baseMsgReadBucket } as MsgReadBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseMsgReadBucketResponse: object = {};

export const MsgReadBucketResponse = {
  encode(_: MsgReadBucketResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadBucketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadBucketResponse } as MsgReadBucketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgReadBucketResponse {
    const message = { ...baseMsgReadBucketResponse } as MsgReadBucketResponse;
    return message;
  },

  toJSON(_: MsgReadBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgReadBucketResponse>): MsgReadBucketResponse {
    const message = { ...baseMsgReadBucketResponse } as MsgReadBucketResponse;
    return message;
  },
};

const baseMsgUpdateBucket: object = {
  creator: "",
  did: "",
  label: "",
  description: "",
};

export const MsgUpdateBucket = {
  encode(message: MsgUpdateBucket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBucket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBucket } as MsgUpdateBucket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBucket {
    const message = { ...baseMsgUpdateBucket } as MsgUpdateBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.label !== undefined && (obj.label = message.label);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBucket>): MsgUpdateBucket {
    const message = { ...baseMsgUpdateBucket } as MsgUpdateBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgUpdateBucketResponse: object = {};

export const MsgUpdateBucketResponse = {
  encode(_: MsgUpdateBucketResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBucketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBucketResponse,
    } as MsgUpdateBucketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateBucketResponse {
    const message = {
      ...baseMsgUpdateBucketResponse,
    } as MsgUpdateBucketResponse;
    return message;
  },

  toJSON(_: MsgUpdateBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBucketResponse>
  ): MsgUpdateBucketResponse {
    const message = {
      ...baseMsgUpdateBucketResponse,
    } as MsgUpdateBucketResponse;
    return message;
  },
};

const baseMsgDeleteBucket: object = { creator: "", did: "", publicKey: "" };

export const MsgDeleteBucket = {
  encode(message: MsgDeleteBucket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.publicKey !== "") {
      writer.uint32(26).string(message.publicKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBucket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBucket } as MsgDeleteBucket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.publicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBucket {
    const message = { ...baseMsgDeleteBucket } as MsgDeleteBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteBucket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBucket>): MsgDeleteBucket {
    const message = { ...baseMsgDeleteBucket } as MsgDeleteBucket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    return message;
  },
};

const baseMsgDeleteBucketResponse: object = {};

export const MsgDeleteBucketResponse = {
  encode(_: MsgDeleteBucketResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBucketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBucketResponse,
    } as MsgDeleteBucketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteBucketResponse {
    const message = {
      ...baseMsgDeleteBucketResponse,
    } as MsgDeleteBucketResponse;
    return message;
  },

  toJSON(_: MsgDeleteBucketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBucketResponse>
  ): MsgDeleteBucketResponse {
    const message = {
      ...baseMsgDeleteBucketResponse,
    } as MsgDeleteBucketResponse;
    return message;
  },
};

const baseMsgCreateWhichIs: object = {
  creator: "",
  index: "",
  did: "",
  documentJson: "",
};

export const MsgCreateWhichIs = {
  encode(message: MsgCreateWhichIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.documentJson !== "") {
      writer.uint32(34).string(message.documentJson);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWhichIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWhichIs } as MsgCreateWhichIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.did = reader.string();
          break;
        case 4:
          message.documentJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWhichIs {
    const message = { ...baseMsgCreateWhichIs } as MsgCreateWhichIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = String(object.documentJson);
    } else {
      message.documentJson = "";
    }
    return message;
  },

  toJSON(message: MsgCreateWhichIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.documentJson !== undefined &&
      (obj.documentJson = message.documentJson);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWhichIs>): MsgCreateWhichIs {
    const message = { ...baseMsgCreateWhichIs } as MsgCreateWhichIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = object.documentJson;
    } else {
      message.documentJson = "";
    }
    return message;
  },
};

const baseMsgCreateWhichIsResponse: object = {};

export const MsgCreateWhichIsResponse = {
  encode(
    _: MsgCreateWhichIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateWhichIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateWhichIsResponse,
    } as MsgCreateWhichIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateWhichIsResponse {
    const message = {
      ...baseMsgCreateWhichIsResponse,
    } as MsgCreateWhichIsResponse;
    return message;
  },

  toJSON(_: MsgCreateWhichIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateWhichIsResponse>
  ): MsgCreateWhichIsResponse {
    const message = {
      ...baseMsgCreateWhichIsResponse,
    } as MsgCreateWhichIsResponse;
    return message;
  },
};

const baseMsgUpdateWhichIs: object = {
  creator: "",
  index: "",
  did: "",
  documentJson: "",
};

export const MsgUpdateWhichIs = {
  encode(message: MsgUpdateWhichIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.documentJson !== "") {
      writer.uint32(34).string(message.documentJson);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateWhichIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateWhichIs } as MsgUpdateWhichIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.did = reader.string();
          break;
        case 4:
          message.documentJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWhichIs {
    const message = { ...baseMsgUpdateWhichIs } as MsgUpdateWhichIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = String(object.documentJson);
    } else {
      message.documentJson = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateWhichIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.documentJson !== undefined &&
      (obj.documentJson = message.documentJson);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateWhichIs>): MsgUpdateWhichIs {
    const message = { ...baseMsgUpdateWhichIs } as MsgUpdateWhichIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = object.documentJson;
    } else {
      message.documentJson = "";
    }
    return message;
  },
};

const baseMsgUpdateWhichIsResponse: object = {};

export const MsgUpdateWhichIsResponse = {
  encode(
    _: MsgUpdateWhichIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateWhichIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateWhichIsResponse,
    } as MsgUpdateWhichIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateWhichIsResponse {
    const message = {
      ...baseMsgUpdateWhichIsResponse,
    } as MsgUpdateWhichIsResponse;
    return message;
  },

  toJSON(_: MsgUpdateWhichIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateWhichIsResponse>
  ): MsgUpdateWhichIsResponse {
    const message = {
      ...baseMsgUpdateWhichIsResponse,
    } as MsgUpdateWhichIsResponse;
    return message;
  },
};

const baseMsgDeleteWhichIs: object = { creator: "", index: "" };

export const MsgDeleteWhichIs = {
  encode(message: MsgDeleteWhichIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteWhichIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteWhichIs } as MsgDeleteWhichIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteWhichIs {
    const message = { ...baseMsgDeleteWhichIs } as MsgDeleteWhichIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteWhichIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteWhichIs>): MsgDeleteWhichIs {
    const message = { ...baseMsgDeleteWhichIs } as MsgDeleteWhichIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteWhichIsResponse: object = {};

export const MsgDeleteWhichIsResponse = {
  encode(
    _: MsgDeleteWhichIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteWhichIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteWhichIsResponse,
    } as MsgDeleteWhichIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteWhichIsResponse {
    const message = {
      ...baseMsgDeleteWhichIsResponse,
    } as MsgDeleteWhichIsResponse;
    return message;
  },

  toJSON(_: MsgDeleteWhichIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteWhichIsResponse>
  ): MsgDeleteWhichIsResponse {
    const message = {
      ...baseMsgDeleteWhichIsResponse,
    } as MsgDeleteWhichIsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBucket(request: MsgCreateBucket): Promise<MsgCreateBucketResponse>;
  ReadBucket(request: MsgReadBucket): Promise<MsgReadBucketResponse>;
  UpdateBucket(request: MsgUpdateBucket): Promise<MsgUpdateBucketResponse>;
  DeleteBucket(request: MsgDeleteBucket): Promise<MsgDeleteBucketResponse>;
  CreateWhichIs(request: MsgCreateWhichIs): Promise<MsgCreateWhichIsResponse>;
  UpdateWhichIs(request: MsgUpdateWhichIs): Promise<MsgUpdateWhichIsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteWhichIs(request: MsgDeleteWhichIs): Promise<MsgDeleteWhichIsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBucket(request: MsgCreateBucket): Promise<MsgCreateBucketResponse> {
    const data = MsgCreateBucket.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Msg",
      "CreateBucket",
      data
    );
    return promise.then((data) =>
      MsgCreateBucketResponse.decode(new Reader(data))
    );
  }

  ReadBucket(request: MsgReadBucket): Promise<MsgReadBucketResponse> {
    const data = MsgReadBucket.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Msg",
      "ReadBucket",
      data
    );
    return promise.then((data) =>
      MsgReadBucketResponse.decode(new Reader(data))
    );
  }

  UpdateBucket(request: MsgUpdateBucket): Promise<MsgUpdateBucketResponse> {
    const data = MsgUpdateBucket.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Msg",
      "UpdateBucket",
      data
    );
    return promise.then((data) =>
      MsgUpdateBucketResponse.decode(new Reader(data))
    );
  }

  DeleteBucket(request: MsgDeleteBucket): Promise<MsgDeleteBucketResponse> {
    const data = MsgDeleteBucket.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Msg",
      "DeleteBucket",
      data
    );
    return promise.then((data) =>
      MsgDeleteBucketResponse.decode(new Reader(data))
    );
  }

  CreateWhichIs(request: MsgCreateWhichIs): Promise<MsgCreateWhichIsResponse> {
    const data = MsgCreateWhichIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Msg",
      "CreateWhichIs",
      data
    );
    return promise.then((data) =>
      MsgCreateWhichIsResponse.decode(new Reader(data))
    );
  }

  UpdateWhichIs(request: MsgUpdateWhichIs): Promise<MsgUpdateWhichIsResponse> {
    const data = MsgUpdateWhichIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Msg",
      "UpdateWhichIs",
      data
    );
    return promise.then((data) =>
      MsgUpdateWhichIsResponse.decode(new Reader(data))
    );
  }

  DeleteWhichIs(request: MsgDeleteWhichIs): Promise<MsgDeleteWhichIsResponse> {
    const data = MsgDeleteWhichIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Msg",
      "DeleteWhichIs",
      data
    );
    return promise.then((data) =>
      MsgDeleteWhichIsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
