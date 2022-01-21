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

goog.provide('proto.highway.v1.ListenBucketResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.sonrio.sonr.object.ObjectDoc');
goog.require('proto.sonrio.sonr.registry.Did');

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
proto.highway.v1.ListenBucketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.highway.v1.ListenBucketResponse.repeatedFields_, null);
};
goog.inherits(proto.highway.v1.ListenBucketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.highway.v1.ListenBucketResponse.displayName = 'proto.highway.v1.ListenBucketResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.highway.v1.ListenBucketResponse.repeatedFields_ = [4];



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
proto.highway.v1.ListenBucketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.highway.v1.ListenBucketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.highway.v1.ListenBucketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.highway.v1.ListenBucketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    did: (f = msg.getDid()) && proto.sonrio.sonr.registry.Did.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    objectsList: jspb.Message.toObjectList(msg.getObjectsList(),
    proto.sonrio.sonr.object.ObjectDoc.toObject, includeInstance)
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
 * @return {!proto.highway.v1.ListenBucketResponse}
 */
proto.highway.v1.ListenBucketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.highway.v1.ListenBucketResponse;
  return proto.highway.v1.ListenBucketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.highway.v1.ListenBucketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.highway.v1.ListenBucketResponse}
 */
proto.highway.v1.ListenBucketResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.sonrio.sonr.registry.Did;
      reader.readMessage(value,proto.sonrio.sonr.registry.Did.deserializeBinaryFromReader);
      msg.setDid(value);
      break;
    case 3:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = new proto.sonrio.sonr.object.ObjectDoc;
      reader.readMessage(value,proto.sonrio.sonr.object.ObjectDoc.deserializeBinaryFromReader);
      msg.addObjects(value);
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
proto.highway.v1.ListenBucketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.highway.v1.ListenBucketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.highway.v1.ListenBucketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.highway.v1.ListenBucketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sonrio.sonr.registry.Did.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sonrio.sonr.object.ObjectDoc.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.highway.v1.ListenBucketResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.highway.v1.ListenBucketResponse} returns this
 */
proto.highway.v1.ListenBucketResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional sonrio.sonr.registry.Did did = 2;
 * @return {?proto.sonrio.sonr.registry.Did}
 */
proto.highway.v1.ListenBucketResponse.prototype.getDid = function() {
  return /** @type{?proto.sonrio.sonr.registry.Did} */ (
    jspb.Message.getWrapperField(this, proto.sonrio.sonr.registry.Did, 2));
};


/**
 * @param {?proto.sonrio.sonr.registry.Did|undefined} value
 * @return {!proto.highway.v1.ListenBucketResponse} returns this
*/
proto.highway.v1.ListenBucketResponse.prototype.setDid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.highway.v1.ListenBucketResponse} returns this
 */
proto.highway.v1.ListenBucketResponse.prototype.clearDid = function() {
  return this.setDid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.highway.v1.ListenBucketResponse.prototype.hasDid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> metadata = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.highway.v1.ListenBucketResponse.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.highway.v1.ListenBucketResponse} returns this
 */
proto.highway.v1.ListenBucketResponse.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * repeated sonrio.sonr.object.ObjectDoc objects = 4;
 * @return {!Array<!proto.sonrio.sonr.object.ObjectDoc>}
 */
proto.highway.v1.ListenBucketResponse.prototype.getObjectsList = function() {
  return /** @type{!Array<!proto.sonrio.sonr.object.ObjectDoc>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sonrio.sonr.object.ObjectDoc, 4));
};


/**
 * @param {!Array<!proto.sonrio.sonr.object.ObjectDoc>} value
 * @return {!proto.highway.v1.ListenBucketResponse} returns this
*/
proto.highway.v1.ListenBucketResponse.prototype.setObjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sonrio.sonr.object.ObjectDoc=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sonrio.sonr.object.ObjectDoc}
 */
proto.highway.v1.ListenBucketResponse.prototype.addObjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sonrio.sonr.object.ObjectDoc, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.highway.v1.ListenBucketResponse} returns this
 */
proto.highway.v1.ListenBucketResponse.prototype.clearObjectsList = function() {
  return this.setObjectsList([]);
};


