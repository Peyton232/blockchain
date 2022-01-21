// source: v1/response.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.highway.v1.ResolveDidResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.sonrio.sonr.registry.DidDocument');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.highway.v1.ResolveDidResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.highway.v1.ResolveDidResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.highway.v1.ResolveDidResponse.displayName = 'proto.highway.v1.ResolveDidResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.highway.v1.ResolveDidResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.highway.v1.ResolveDidResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.highway.v1.ResolveDidResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.highway.v1.ResolveDidResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    didDocument: (f = msg.getDidDocument()) && proto.sonrio.sonr.registry.DidDocument.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.highway.v1.ResolveDidResponse}
 */
proto.highway.v1.ResolveDidResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.highway.v1.ResolveDidResponse;
  return proto.highway.v1.ResolveDidResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.highway.v1.ResolveDidResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.highway.v1.ResolveDidResponse}
 */
proto.highway.v1.ResolveDidResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.sonrio.sonr.registry.DidDocument;
      reader.readMessage(value,proto.sonrio.sonr.registry.DidDocument.deserializeBinaryFromReader);
      msg.setDidDocument(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.highway.v1.ResolveDidResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.highway.v1.ResolveDidResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.highway.v1.ResolveDidResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.highway.v1.ResolveDidResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDidDocument();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sonrio.sonr.registry.DidDocument.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.highway.v1.ResolveDidResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.highway.v1.ResolveDidResponse} returns this
 */
proto.highway.v1.ResolveDidResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.highway.v1.ResolveDidResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.highway.v1.ResolveDidResponse} returns this
 */
proto.highway.v1.ResolveDidResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional sonrio.sonr.registry.DidDocument did_document = 3;
 * @return {?proto.sonrio.sonr.registry.DidDocument}
 */
proto.highway.v1.ResolveDidResponse.prototype.getDidDocument = function() {
  return /** @type{?proto.sonrio.sonr.registry.DidDocument} */ (
    jspb.Message.getWrapperField(this, proto.sonrio.sonr.registry.DidDocument, 3));
};


/**
 * @param {?proto.sonrio.sonr.registry.DidDocument|undefined} value
 * @return {!proto.highway.v1.ResolveDidResponse} returns this
*/
proto.highway.v1.ResolveDidResponse.prototype.setDidDocument = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.highway.v1.ResolveDidResponse} returns this
 */
proto.highway.v1.ResolveDidResponse.prototype.clearDidDocument = function() {
  return this.setDidDocument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.highway.v1.ResolveDidResponse.prototype.hasDidDocument = function() {
  return jspb.Message.getField(this, 3) != null;
};


