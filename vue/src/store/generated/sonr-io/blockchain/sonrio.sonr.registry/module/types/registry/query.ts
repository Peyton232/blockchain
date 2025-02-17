/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../registry/params";
import { WhoIs } from "../registry/who_is";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "sonrio.sonr.registry";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhoIsRequest {
  index: string;
}

export interface QueryGetWhoIsResponse {
  whoIs: WhoIs | undefined;
}

export interface QueryAllWhoIsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhoIsResponse {
  whoIs: WhoIs[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetWhoIsRequest: object = { index: "" };

export const QueryGetWhoIsRequest = {
  encode(
    message: QueryGetWhoIsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhoIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhoIsRequest } as QueryGetWhoIsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoIsRequest {
    const message = { ...baseQueryGetWhoIsRequest } as QueryGetWhoIsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetWhoIsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetWhoIsRequest>): QueryGetWhoIsRequest {
    const message = { ...baseQueryGetWhoIsRequest } as QueryGetWhoIsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetWhoIsResponse: object = {};

export const QueryGetWhoIsResponse = {
  encode(
    message: QueryGetWhoIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whoIs !== undefined) {
      WhoIs.encode(message.whoIs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhoIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhoIsResponse } as QueryGetWhoIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whoIs = WhoIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoIsResponse {
    const message = { ...baseQueryGetWhoIsResponse } as QueryGetWhoIsResponse;
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromJSON(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhoIsResponse): unknown {
    const obj: any = {};
    message.whoIs !== undefined &&
      (obj.whoIs = message.whoIs ? WhoIs.toJSON(message.whoIs) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhoIsResponse>
  ): QueryGetWhoIsResponse {
    const message = { ...baseQueryGetWhoIsResponse } as QueryGetWhoIsResponse;
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromPartial(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },
};

const baseQueryAllWhoIsRequest: object = {};

export const QueryAllWhoIsRequest = {
  encode(
    message: QueryAllWhoIsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhoIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhoIsRequest } as QueryAllWhoIsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoIsRequest {
    const message = { ...baseQueryAllWhoIsRequest } as QueryAllWhoIsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhoIsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllWhoIsRequest>): QueryAllWhoIsRequest {
    const message = { ...baseQueryAllWhoIsRequest } as QueryAllWhoIsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWhoIsResponse: object = {};

export const QueryAllWhoIsResponse = {
  encode(
    message: QueryAllWhoIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whoIs) {
      WhoIs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhoIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhoIsResponse } as QueryAllWhoIsResponse;
    message.whoIs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whoIs.push(WhoIs.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoIsResponse {
    const message = { ...baseQueryAllWhoIsResponse } as QueryAllWhoIsResponse;
    message.whoIs = [];
    if (object.whoIs !== undefined && object.whoIs !== null) {
      for (const e of object.whoIs) {
        message.whoIs.push(WhoIs.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhoIsResponse): unknown {
    const obj: any = {};
    if (message.whoIs) {
      obj.whoIs = message.whoIs.map((e) => (e ? WhoIs.toJSON(e) : undefined));
    } else {
      obj.whoIs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhoIsResponse>
  ): QueryAllWhoIsResponse {
    const message = { ...baseQueryAllWhoIsResponse } as QueryAllWhoIsResponse;
    message.whoIs = [];
    if (object.whoIs !== undefined && object.whoIs !== null) {
      for (const e of object.whoIs) {
        message.whoIs.push(WhoIs.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a WhoIs by index. */
  WhoIs(request: QueryGetWhoIsRequest): Promise<QueryGetWhoIsResponse>;
  /** Queries a list of WhoIs items. */
  WhoIsAll(request: QueryAllWhoIsRequest): Promise<QueryAllWhoIsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  WhoIs(request: QueryGetWhoIsRequest): Promise<QueryGetWhoIsResponse> {
    const data = QueryGetWhoIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Query",
      "WhoIs",
      data
    );
    return promise.then((data) =>
      QueryGetWhoIsResponse.decode(new Reader(data))
    );
  }

  WhoIsAll(request: QueryAllWhoIsRequest): Promise<QueryAllWhoIsResponse> {
    const data = QueryAllWhoIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Query",
      "WhoIsAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhoIsResponse.decode(new Reader(data))
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
