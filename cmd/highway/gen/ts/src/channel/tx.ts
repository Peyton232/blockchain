// @generated by protobuf-ts 2.2.1 with parameter long_type_string,generate_dependencies
// @generated from protobuf file "channel/tx.proto" (package "sonrio.sonr.channel", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgCreateChannel
 */
export interface MsgCreateChannel {
    /**
     * @generated from protobuf field: string creator = 1;
     */
    creator: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * @generated from protobuf field: string object_did = 4;
     */
    objectDid: string;
    /**
     * @generated from protobuf field: int64 ttl = 5;
     */
    ttl: string;
    /**
     * @generated from protobuf field: int64 max_size = 6;
     */
    maxSize: string;
}
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgCreateChannelResponse
 */
export interface MsgCreateChannelResponse {
}
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgReadChannel
 */
export interface MsgReadChannel {
    /**
     * @generated from protobuf field: string creator = 1;
     */
    creator: string;
    /**
     * @generated from protobuf field: string did = 2;
     */
    did: string;
}
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgReadChannelResponse
 */
export interface MsgReadChannelResponse {
}
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgDeleteChannel
 */
export interface MsgDeleteChannel {
    /**
     * @generated from protobuf field: string creator = 1;
     */
    creator: string;
    /**
     * @generated from protobuf field: string did = 2;
     */
    did: string;
    /**
     * @generated from protobuf field: string publicKey = 3;
     */
    publicKey: string;
}
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgDeleteChannelResponse
 */
export interface MsgDeleteChannelResponse {
}
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgUpdateChannel
 */
export interface MsgUpdateChannel {
    /**
     * @generated from protobuf field: string creator = 1;
     */
    creator: string;
    /**
     * @generated from protobuf field: string did = 2;
     */
    did: string;
}
/**
 * @generated from protobuf message sonrio.sonr.channel.MsgUpdateChannelResponse
 */
export interface MsgUpdateChannelResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class MsgCreateChannel$Type extends MessageType<MsgCreateChannel> {
    constructor() {
        super("sonrio.sonr.channel.MsgCreateChannel", [
            { no: 1, name: "creator", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "object_did", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "ttl", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 6, name: "max_size", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value?: PartialMessage<MsgCreateChannel>): MsgCreateChannel {
        const message = { creator: "", name: "", description: "", objectDid: "", ttl: "0", maxSize: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgCreateChannel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgCreateChannel): MsgCreateChannel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string creator */ 1:
                    message.creator = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string description */ 3:
                    message.description = reader.string();
                    break;
                case /* string object_did */ 4:
                    message.objectDid = reader.string();
                    break;
                case /* int64 ttl */ 5:
                    message.ttl = reader.int64().toString();
                    break;
                case /* int64 max_size */ 6:
                    message.maxSize = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MsgCreateChannel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string creator = 1; */
        if (message.creator !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.creator);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string description = 3; */
        if (message.description !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.description);
        /* string object_did = 4; */
        if (message.objectDid !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.objectDid);
        /* int64 ttl = 5; */
        if (message.ttl !== "0")
            writer.tag(5, WireType.Varint).int64(message.ttl);
        /* int64 max_size = 6; */
        if (message.maxSize !== "0")
            writer.tag(6, WireType.Varint).int64(message.maxSize);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgCreateChannel
 */
export const MsgCreateChannel = new MsgCreateChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgCreateChannelResponse$Type extends MessageType<MsgCreateChannelResponse> {
    constructor() {
        super("sonrio.sonr.channel.MsgCreateChannelResponse", []);
    }
    create(value?: PartialMessage<MsgCreateChannelResponse>): MsgCreateChannelResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgCreateChannelResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgCreateChannelResponse): MsgCreateChannelResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgCreateChannelResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgCreateChannelResponse
 */
export const MsgCreateChannelResponse = new MsgCreateChannelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgReadChannel$Type extends MessageType<MsgReadChannel> {
    constructor() {
        super("sonrio.sonr.channel.MsgReadChannel", [
            { no: 1, name: "creator", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "did", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<MsgReadChannel>): MsgReadChannel {
        const message = { creator: "", did: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgReadChannel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgReadChannel): MsgReadChannel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string creator */ 1:
                    message.creator = reader.string();
                    break;
                case /* string did */ 2:
                    message.did = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MsgReadChannel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string creator = 1; */
        if (message.creator !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.creator);
        /* string did = 2; */
        if (message.did !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.did);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgReadChannel
 */
export const MsgReadChannel = new MsgReadChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgReadChannelResponse$Type extends MessageType<MsgReadChannelResponse> {
    constructor() {
        super("sonrio.sonr.channel.MsgReadChannelResponse", []);
    }
    create(value?: PartialMessage<MsgReadChannelResponse>): MsgReadChannelResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgReadChannelResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgReadChannelResponse): MsgReadChannelResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgReadChannelResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgReadChannelResponse
 */
export const MsgReadChannelResponse = new MsgReadChannelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgDeleteChannel$Type extends MessageType<MsgDeleteChannel> {
    constructor() {
        super("sonrio.sonr.channel.MsgDeleteChannel", [
            { no: 1, name: "creator", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "did", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "publicKey", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<MsgDeleteChannel>): MsgDeleteChannel {
        const message = { creator: "", did: "", publicKey: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgDeleteChannel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgDeleteChannel): MsgDeleteChannel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string creator */ 1:
                    message.creator = reader.string();
                    break;
                case /* string did */ 2:
                    message.did = reader.string();
                    break;
                case /* string publicKey */ 3:
                    message.publicKey = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MsgDeleteChannel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string creator = 1; */
        if (message.creator !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.creator);
        /* string did = 2; */
        if (message.did !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.did);
        /* string publicKey = 3; */
        if (message.publicKey !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.publicKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgDeleteChannel
 */
export const MsgDeleteChannel = new MsgDeleteChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgDeleteChannelResponse$Type extends MessageType<MsgDeleteChannelResponse> {
    constructor() {
        super("sonrio.sonr.channel.MsgDeleteChannelResponse", []);
    }
    create(value?: PartialMessage<MsgDeleteChannelResponse>): MsgDeleteChannelResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgDeleteChannelResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgDeleteChannelResponse): MsgDeleteChannelResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgDeleteChannelResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgDeleteChannelResponse
 */
export const MsgDeleteChannelResponse = new MsgDeleteChannelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgUpdateChannel$Type extends MessageType<MsgUpdateChannel> {
    constructor() {
        super("sonrio.sonr.channel.MsgUpdateChannel", [
            { no: 1, name: "creator", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "did", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<MsgUpdateChannel>): MsgUpdateChannel {
        const message = { creator: "", did: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgUpdateChannel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUpdateChannel): MsgUpdateChannel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string creator */ 1:
                    message.creator = reader.string();
                    break;
                case /* string did */ 2:
                    message.did = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MsgUpdateChannel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string creator = 1; */
        if (message.creator !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.creator);
        /* string did = 2; */
        if (message.did !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.did);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgUpdateChannel
 */
export const MsgUpdateChannel = new MsgUpdateChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgUpdateChannelResponse$Type extends MessageType<MsgUpdateChannelResponse> {
    constructor() {
        super("sonrio.sonr.channel.MsgUpdateChannelResponse", []);
    }
    create(value?: PartialMessage<MsgUpdateChannelResponse>): MsgUpdateChannelResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgUpdateChannelResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUpdateChannelResponse): MsgUpdateChannelResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgUpdateChannelResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sonrio.sonr.channel.MsgUpdateChannelResponse
 */
export const MsgUpdateChannelResponse = new MsgUpdateChannelResponse$Type();
/**
 * @generated ServiceType for protobuf service sonrio.sonr.channel.Msg
 */
export const Msg = new ServiceType("sonrio.sonr.channel.Msg", [
    { name: "CreateChannel", options: {}, I: MsgCreateChannel, O: MsgCreateChannelResponse },
    { name: "ReadChannel", options: {}, I: MsgReadChannel, O: MsgReadChannelResponse },
    { name: "DeleteChannel", options: {}, I: MsgDeleteChannel, O: MsgDeleteChannelResponse },
    { name: "UpdateChannel", options: {}, I: MsgUpdateChannel, O: MsgUpdateChannelResponse }
]);
