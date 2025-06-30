(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js', './firebase-kotlin-sdk-firebase-common.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./firebase-kotlin-sdk-firebase-common.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-common-internal'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'firebase-kotlin-sdk-firebase-common-internal'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-common-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'firebase-kotlin-sdk-firebase-common-internal'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-common'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-common-internal'. Its dependency 'firebase-kotlin-sdk-firebase-common' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-common' is loaded prior to 'firebase-kotlin-sdk-firebase-common-internal'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-common-internal'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-common-internal'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-common-internal'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['firebase-kotlin-sdk-firebase-common']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin, kotlin_dev_gitlive_firebase_common) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var toString = kotlin_kotlin.$_$.jf;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var hashCode = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.oe;
  var FirebaseClassDiscriminator = kotlin_dev_gitlive_firebase_common.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var toDouble = kotlin_kotlin.$_$.zi;
  var numberToDouble = kotlin_kotlin.$_$.af;
  var isNumber = kotlin_kotlin.$_$.qe;
  var toLong = kotlin_kotlin.$_$.fj;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var toByte = kotlin_kotlin.$_$.wi;
  var numberToByte = kotlin_kotlin.$_$.ye;
  var toInt = kotlin_kotlin.$_$.cj;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var toShort = kotlin_kotlin.$_$.gj;
  var numberToShort = kotlin_kotlin.$_$.df;
  var toBoolean = kotlin_kotlin.$_$.vi;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var numberToChar = kotlin_kotlin.$_$.ze;
  var SerializationException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var Exception = kotlin_kotlin.$_$.dk;
  var Char = kotlin_kotlin.$_$.xj;
  var NotImplementedError = kotlin_kotlin.$_$.jk;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var until = kotlin_kotlin.$_$.ig;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yl;
  var toList = kotlin_kotlin.$_$.rb;
  var checkIndexOverflow = kotlin_kotlin.$_$.p7;
  var getValue = kotlin_kotlin.$_$.f9;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var arrayOf = kotlin_kotlin.$_$.dl;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.il;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.x3;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var KtSet = kotlin_kotlin.$_$.f7;
  var KtList = kotlin_kotlin.$_$.w6;
  var KtMap = kotlin_kotlin.$_$.y6;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.a4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.r5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var step = kotlin_kotlin.$_$.hg;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var Iterable = kotlin_kotlin.$_$.t6;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var isArray = kotlin_kotlin.$_$.ge;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var json = kotlin_kotlin.$_$.ue;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(EncodeSettingsImpl, 'EncodeSettingsImpl');
  initMetadataForClass(Builder_0, 'Builder', Builder_0);
  initMetadataForClass(DecodeSettingsImpl, 'DecodeSettingsImpl');
  initMetadataForClass(FirebaseDecoder, 'FirebaseDecoder', VOID, VOID, [Decoder]);
  initMetadataForClass(FirebaseCompositeDecoder, 'FirebaseCompositeDecoder', VOID, VOID, [CompositeDecoder]);
  initMetadataForClass(FirebaseClassDecoder, 'FirebaseClassDecoder', VOID, FirebaseCompositeDecoder);
  initMetadataForClass(FirebaseEncoder, 'FirebaseEncoder', VOID, VOID, [Encoder]);
  initMetadataForClass(ValueWithSerializer, 'ValueWithSerializer');
  initMetadataForClass(FirebaseCompositeEncoder, 'FirebaseCompositeEncoder');
  initMetadataForClass(FirebaseMapSerializer$descriptor$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(FirebaseMapSerializer, 'FirebaseMapSerializer', FirebaseMapSerializer, VOID, [KSerializer]);
  initMetadataForClass(FirebaseListSerializer$descriptor$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(FirebaseListSerializer, 'FirebaseListSerializer', FirebaseListSerializer, VOID, [KSerializer]);
  //endregion
  function buildEncodeSettings(_this__u8e3s4) {
    return new EncodeSettingsImpl(_this__u8e3s4.ji3(), _this__u8e3s4.w4l());
  }
  function Builder() {
    this.ki3_1 = true;
    this.li3_1 = EmptySerializersModule();
  }
  protoOf(Builder).ji3 = function () {
    return this.ki3_1;
  };
  protoOf(Builder).w4l = function () {
    return this.li3_1;
  };
  function EncodeSettingsImpl(encodeDefaults, serializersModule) {
    this.mi3_1 = encodeDefaults;
    this.ni3_1 = serializersModule;
  }
  protoOf(EncodeSettingsImpl).w4l = function () {
    return this.ni3_1;
  };
  protoOf(EncodeSettingsImpl).toString = function () {
    return 'EncodeSettingsImpl(encodeDefaults=' + this.mi3_1 + ', serializersModule=' + toString(this.ni3_1) + ')';
  };
  protoOf(EncodeSettingsImpl).hashCode = function () {
    var result = getBooleanHashCode(this.mi3_1);
    result = imul(result, 31) + hashCode(this.ni3_1) | 0;
    return result;
  };
  protoOf(EncodeSettingsImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EncodeSettingsImpl))
      return false;
    var tmp0_other_with_cast = other instanceof EncodeSettingsImpl ? other : THROW_CCE();
    if (!(this.mi3_1 === tmp0_other_with_cast.mi3_1))
      return false;
    if (!equals(this.ni3_1, tmp0_other_with_cast.ni3_1))
      return false;
    return true;
  };
  function buildDecodeSettings(_this__u8e3s4) {
    return new DecodeSettingsImpl(_this__u8e3s4.w4l());
  }
  function Builder_0() {
    this.oi3_1 = EmptySerializersModule();
  }
  protoOf(Builder_0).w4l = function () {
    return this.oi3_1;
  };
  function DecodeSettingsImpl(serializersModule) {
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    this.pi3_1 = serializersModule;
  }
  protoOf(DecodeSettingsImpl).w4l = function () {
    return this.pi3_1;
  };
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      serializer.n4i(_this__u8e3s4, value);
      return Unit_instance;
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.m4i());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, !(value == null) ? value : THROW_CCE());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.n4i(_this__u8e3s4, value);
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, value, deserializer) {
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      return deserializer.o4i(_this__u8e3s4);
    }
    var casted = deserializer instanceof AbstractPolymorphicSerializer ? deserializer : THROW_CCE();
    var discriminator = classDiscriminator(deserializer.m4i());
    var type = getPolymorphicType(value, discriminator);
    var tmp = casted.d4j(structureDecoder(_this__u8e3s4, deserializer.m4i(), false), type);
    var actualDeserializer = (!(tmp == null) ? isInterface(tmp, DeserializationStrategy) : false) ? tmp : THROW_CCE();
    return actualDeserializer.o4i(_this__u8e3s4);
  }
  function classDiscriminator(_this__u8e3s4) {
    var _iterator__ex2g4s = _this__u8e3s4.t4j().m();
    while (_iterator__ex2g4s.n()) {
      var annotation = _iterator__ex2g4s.o();
      if (annotation instanceof FirebaseClassDiscriminator)
        return annotation.qi3_1;
    }
    return 'type';
  }
  function decode(strategy, value, decodeSettings) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(value == null) || strategy.m4i().l4j())) {
      // Inline function 'dev.gitlive.firebase.internal.decode.<anonymous>' call
      var message = 'Value was null for non-nullable type ' + strategy.m4i().p4j();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return (new FirebaseDecoder(value, decodeSettings)).m4m(strategy);
  }
  function FirebaseDecoder(value, settings) {
    this.ri3_1 = value;
    this.si3_1 = settings;
    this.ti3_1 = this.si3_1.w4l();
  }
  protoOf(FirebaseDecoder).s4k = function (descriptor) {
    return structureDecoder(this, descriptor, true);
  };
  protoOf(FirebaseDecoder).j4m = function () {
    return decodeString(this.ri3_1);
  };
  protoOf(FirebaseDecoder).i4m = function () {
    return decodeDouble(this.ri3_1);
  };
  protoOf(FirebaseDecoder).g4m = function () {
    return decodeLong(this.ri3_1);
  };
  protoOf(FirebaseDecoder).c4m = function () {
    return decodeByte(this.ri3_1);
  };
  protoOf(FirebaseDecoder).h4m = function () {
    return decodeFloat(this.ri3_1);
  };
  protoOf(FirebaseDecoder).f4m = function () {
    return decodeInt(this.ri3_1);
  };
  protoOf(FirebaseDecoder).d4m = function () {
    return decodeShort(this.ri3_1);
  };
  protoOf(FirebaseDecoder).b4m = function () {
    return decodeBoolean(this.ri3_1);
  };
  protoOf(FirebaseDecoder).e4m = function () {
    return decodeChar(this.ri3_1);
  };
  protoOf(FirebaseDecoder).k4m = function (enumDescriptor) {
    return decodeEnum(this.ri3_1, enumDescriptor);
  };
  protoOf(FirebaseDecoder).z4l = function () {
    return decodeNotNullMark(this.ri3_1);
  };
  protoOf(FirebaseDecoder).a4m = function () {
    return decodeNull(this.ri3_1);
  };
  protoOf(FirebaseDecoder).l4m = function (descriptor) {
    return new FirebaseDecoder(this.ri3_1, this.si3_1);
  };
  protoOf(FirebaseDecoder).m4m = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, this.ri3_1, deserializer);
  };
  function decodeString(value) {
    return toString_0(value);
  }
  function decodeDouble(value) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToDouble(value);
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = toDouble(value);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be double');
      }
    }
    return tmp;
  }
  function decodeLong(value) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToLong(value);
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = toLong(value);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be long');
      }
    }
    return tmp;
  }
  function decodeByte(value) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToByte(value);
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = toByte(value);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be byte');
      }
    }
    return tmp;
  }
  function decodeFloat(value) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToDouble(value);
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = toDouble(value);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be float');
      }
    }
    return tmp;
  }
  function decodeInt(value) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToInt(value);
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = toInt(value);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be int');
      }
    }
    return tmp;
  }
  function decodeShort(value) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToShort(value);
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = toShort(value);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be short');
      }
    }
    return tmp;
  }
  function decodeBoolean(value) {
    var tmp;
    if (!(value == null) ? typeof value === 'boolean' : false) {
      tmp = value;
    } else {
      if (isNumber(value)) {
        tmp = !(numberToInt(value) === 0);
      } else {
        if (!(value == null) ? typeof value === 'string' : false) {
          tmp = toBoolean(value);
        } else {
          throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be boolean');
        }
      }
    }
    return tmp;
  }
  function decodeChar(value) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToChar(numberToInt(value));
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = charSequenceGet(value, 0);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be char');
      }
    }
    return tmp;
  }
  function decodeEnum(value, enumDescriptor) {
    var tmp;
    if (isNumber(value)) {
      tmp = numberToInt(value);
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = getElementIndexOrThrow(enumDescriptor, value);
      } else {
        throw SerializationException_init_$Create$('Expected ' + toString_0(value) + ' to be enum');
      }
    }
    return tmp;
  }
  function decodeNotNullMark(value) {
    return !(value == null);
  }
  function decodeNull(value) {
    var tmp;
    var tmp_0;
    if (value == null) {
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return tmp;
  }
  function getElementIndexOrThrow(_this__u8e3s4, name) {
    var index = _this__u8e3s4.v4j(name);
    if (index === -3) {
      throw SerializationException_init_$Create$(_this__u8e3s4.p4j() + " does not contain element with name '" + name + "'");
    }
    return index;
  }
  function decodeElement($this, descriptor, index, decoder) {
    var tmp;
    try {
      tmp = decoder($this.wi3_1(descriptor, index));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        throw SerializationException_init_$Create$_0('Exception during decoding ' + descriptor.p4j() + ' ' + descriptor.u4j(index), e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function FirebaseCompositeDecoder$decodeSerializableElement$lambda($deserializer, this$0) {
    return function (it) {
      return $deserializer.o4i(new FirebaseDecoder(it, this$0.vi3_1));
    };
  }
  function decodeBoolean$ref() {
    var l = function (p0) {
      return decodeBoolean(p0);
    };
    l.callableName = 'decodeBoolean';
    return l;
  }
  function decodeByte$ref() {
    var l = function (p0) {
      return decodeByte(p0);
    };
    l.callableName = 'decodeByte';
    return l;
  }
  function decodeChar$ref() {
    var l = function (p0) {
      return new Char(decodeChar(p0));
    };
    l.callableName = 'decodeChar';
    return l;
  }
  function decodeDouble$ref() {
    var l = function (p0) {
      return decodeDouble(p0);
    };
    l.callableName = 'decodeDouble';
    return l;
  }
  function decodeFloat$ref() {
    var l = function (p0) {
      return decodeFloat(p0);
    };
    l.callableName = 'decodeFloat';
    return l;
  }
  function decodeInt$ref() {
    var l = function (p0) {
      return decodeInt(p0);
    };
    l.callableName = 'decodeInt';
    return l;
  }
  function decodeLong$ref() {
    var l = function (p0) {
      return decodeLong(p0);
    };
    l.callableName = 'decodeLong';
    return l;
  }
  function decodeShort$ref() {
    var l = function (p0) {
      return decodeShort(p0);
    };
    l.callableName = 'decodeShort';
    return l;
  }
  function decodeString$ref() {
    var l = function (p0) {
      return decodeString(p0);
    };
    l.callableName = 'decodeString';
    return l;
  }
  function FirebaseCompositeDecoder$decodeInlineElement$lambda(this$0) {
    return function (it) {
      return new FirebaseDecoder(it, this$0.vi3_1);
    };
  }
  function FirebaseCompositeDecoder(size, settings, get) {
    this.ui3_1 = size;
    this.vi3_1 = settings;
    this.wi3_1 = get;
    this.xi3_1 = this.vi3_1.w4l();
  }
  protoOf(FirebaseCompositeDecoder).w4l = function () {
    return this.xi3_1;
  };
  protoOf(FirebaseCompositeDecoder).n4m = function () {
    return true;
  };
  protoOf(FirebaseCompositeDecoder).o4m = function (descriptor) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseCompositeDecoder).p4m = function (descriptor) {
    return this.ui3_1;
  };
  protoOf(FirebaseCompositeDecoder).a4n = function (descriptor, index, deserializer, previousValue) {
    return decodeElement(this, descriptor, index, FirebaseCompositeDecoder$decodeSerializableElement$lambda(deserializer, this));
  };
  protoOf(FirebaseCompositeDecoder).q4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeBoolean$ref());
  };
  protoOf(FirebaseCompositeDecoder).r4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeByte$ref());
  };
  protoOf(FirebaseCompositeDecoder).s4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeChar$ref()).u1_1;
  };
  protoOf(FirebaseCompositeDecoder).x4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeDouble$ref());
  };
  protoOf(FirebaseCompositeDecoder).w4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeFloat$ref());
  };
  protoOf(FirebaseCompositeDecoder).u4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeInt$ref());
  };
  protoOf(FirebaseCompositeDecoder).v4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeLong$ref());
  };
  protoOf(FirebaseCompositeDecoder).t4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeShort$ref());
  };
  protoOf(FirebaseCompositeDecoder).y4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeString$ref());
  };
  protoOf(FirebaseCompositeDecoder).t4k = function (descriptor) {
  };
  protoOf(FirebaseCompositeDecoder).z4m = function (descriptor, index) {
    return decodeElement(this, descriptor, index, FirebaseCompositeDecoder$decodeInlineElement$lambda(this));
  };
  function FirebaseClassDecoder(size, settings, containsKey, get) {
    FirebaseCompositeDecoder.call(this, size, settings, get);
    this.ci4_1 = containsKey;
    this.di4_1 = 0;
  }
  protoOf(FirebaseClassDecoder).n4m = function () {
    return false;
  };
  protoOf(FirebaseClassDecoder).o4m = function (descriptor) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var progression = until(this.di4_1, descriptor.s4j());
      var inductionVariable = progression.i1_1;
      var last = progression.j1_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.gitlive.firebase.internal.FirebaseClassDecoder.decodeElementIndex.<anonymous>' call
          var it = element;
          if (!descriptor.x4j(it) || this.ci4_1(descriptor.u4j(it))) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
         while (!(element === last));
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.FirebaseClassDecoder.decodeElementIndex.<anonymous>' call
      this.di4_1 = tmp0_safe_receiver + 1 | 0;
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  function FirebaseEncoder$encodeSerializableValue$lambda(this$0) {
    return function (it) {
      this$0.hi4_1 = it;
      return Unit_instance;
    };
  }
  function FirebaseEncoder(settings) {
    this.ei4_1 = settings;
    this.fi4_1 = null;
    this.gi4_1 = this.ei4_1.w4l();
    this.hi4_1 = null;
  }
  protoOf(FirebaseEncoder).w4l = function () {
    return this.gi4_1;
  };
  protoOf(FirebaseEncoder).s4k = function (descriptor) {
    var encoder = structureEncoder(this, descriptor);
    if (!(this.hi4_1 == null)) {
      encoder.ni4(ensureNotNull(this.hi4_1), descriptor.p4j());
      this.hi4_1 = null;
    }
    return encoder;
  };
  protoOf(FirebaseEncoder).x4k = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).y4k = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).e4l = function (value) {
    this.fi4_1 = new Char(value);
  };
  protoOf(FirebaseEncoder).d4l = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).g4l = function (enumDescriptor, index) {
    this.fi4_1 = enumDescriptor.u4j(index);
  };
  protoOf(FirebaseEncoder).c4l = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).a4l = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).b4l = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).x4l = function () {
  };
  protoOf(FirebaseEncoder).w4k = function () {
    this.fi4_1 = null;
  };
  protoOf(FirebaseEncoder).z4k = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).f4l = function (value) {
    this.fi4_1 = value;
  };
  protoOf(FirebaseEncoder).h4l = function (descriptor) {
    return this;
  };
  protoOf(FirebaseEncoder).t4l = function (serializer, value) {
    encodePolymorphically(this, serializer, value, FirebaseEncoder$encodeSerializableValue$lambda(this));
  };
  function ValueWithSerializer() {
  }
  function FirebaseCompositeEncoder$_init_$lambda_dbtx81() {
    return Unit_instance;
  }
  function FirebaseCompositeEncoder$_init_$lambda_dbtx81_0(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return Unit_instance;
  }
  function FirebaseCompositeEncoder(settings, end, setPolymorphicType, set) {
    var tmp;
    if (end === VOID) {
      tmp = FirebaseCompositeEncoder$_init_$lambda_dbtx81;
    } else {
      tmp = end;
    }
    end = tmp;
    var tmp_0;
    if (setPolymorphicType === VOID) {
      tmp_0 = FirebaseCompositeEncoder$_init_$lambda_dbtx81_0;
    } else {
      tmp_0 = setPolymorphicType;
    }
    setPolymorphicType = tmp_0;
    this.ii4_1 = settings;
    this.ji4_1 = end;
    this.ki4_1 = setPolymorphicType;
    this.li4_1 = set;
    this.mi4_1 = this.ii4_1.w4l();
  }
  protoOf(FirebaseCompositeEncoder).t4k = function (descriptor) {
    return this.ji4_1();
  };
  protoOf(FirebaseCompositeEncoder).u4l = function (descriptor, index, serializer, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.FirebaseCompositeEncoder.encodeNullableSerializableElement.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new FirebaseEncoder(this.ii4_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.FirebaseCompositeEncoder.encodeNullableSerializableElement.<anonymous>.<anonymous>' call
      this_0.t4l(serializer, value);
      tmp = this_0.fi4_1;
    }
    return this.li4_1(descriptor, index, tmp);
  };
  protoOf(FirebaseCompositeEncoder).s4l = function (descriptor, index, serializer, value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new FirebaseEncoder(this.ii4_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.FirebaseCompositeEncoder.encodeSerializableElement.<anonymous>' call
    this_0.t4l(serializer, value);
    return this.li4_1(descriptor, index, this_0.fi4_1);
  };
  protoOf(FirebaseCompositeEncoder).i4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).j4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).p4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, new Char(value));
  };
  protoOf(FirebaseCompositeEncoder).o4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).n4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).l4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).m4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).k4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).q4l = function (descriptor, index, value) {
    return this.li4_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).r4l = function (descriptor, index) {
    return new FirebaseEncoder(this.ii4_1);
  };
  protoOf(FirebaseCompositeEncoder).ni4 = function (discriminator, type) {
    this.ki4_1(discriminator, type);
  };
  function FirebaseMapSerializer$descriptor$1(this$0) {
    this.qi4_1 = this$0;
    this.oi4_1 = MAP_getInstance();
    this.pi4_1 = 'kotlin.Map<String, Any>';
  }
  protoOf(FirebaseMapSerializer$descriptor$1).q4j = function () {
    return this.oi4_1;
  };
  protoOf(FirebaseMapSerializer$descriptor$1).p4j = function () {
    return this.pi4_1;
  };
  protoOf(FirebaseMapSerializer$descriptor$1).s4j = function () {
    return this.qi4_1.ui4().p();
  };
  protoOf(FirebaseMapSerializer$descriptor$1).v4j = function (name) {
    return this.qi4_1.o2().x(name);
  };
  protoOf(FirebaseMapSerializer$descriptor$1).u4j = function (index) {
    return this.qi4_1.o2().u(index);
  };
  protoOf(FirebaseMapSerializer$descriptor$1).w4j = function (index) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseMapSerializer$descriptor$1).x4j = function (index) {
    return false;
  };
  function FirebaseMapSerializer() {
    var tmp = this;
    tmp.ti4_1 = new FirebaseMapSerializer$descriptor$1(this);
  }
  protoOf(FirebaseMapSerializer).o2 = function () {
    var tmp = this.ri4_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('keys');
    }
  };
  protoOf(FirebaseMapSerializer).ui4 = function () {
    var tmp = this.si4_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('map');
    }
  };
  protoOf(FirebaseMapSerializer).m4i = function () {
    return this.ti4_1;
  };
  protoOf(FirebaseMapSerializer).vi4 = function (encoder, value) {
    this.si4_1 = value;
    this.ri4_1 = toList(value.o2());
    var collectionEncoder = encoder.y4l(this.ti4_1, value.p());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.o2().m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'dev.gitlive.firebase.internal.FirebaseMapSerializer.serialize.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var listValue = getValue(this.ui4(), item);
      var tmp;
      if (listValue == null) {
        tmp = null;
      } else {
        // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer' call
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.runCatching' call
        var tmp_0;
        try {
          // Inline function 'kotlin.Companion.success' call
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          // Inline function 'kotlinx.serialization.serializer' call
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_0 = serializer(createKType(PrimitiveClasses_getInstance().lc(), arrayOf([]), false));
          var value_0 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
          tmp_0 = _Result___init__impl__xyqfz8(value_0);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_0 = tmp_1;
        }
        var this_1 = tmp_0;
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(this_1);
        var tmp_2;
        if (exception == null) {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        } else {
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          var tmp_4;
          if (isInterface(listValue, KtMap)) {
            tmp_4 = new FirebaseMapSerializer();
          } else {
            if (isInterface(listValue, KtList)) {
              tmp_4 = new FirebaseListSerializer();
            } else {
              if (isInterface(listValue, KtSet)) {
                tmp_4 = new FirebaseListSerializer();
              } else {
                tmp_4 = serializer_0(getKClassFromExpression(listValue));
              }
            }
          }
          var tmp_5 = tmp_4;
          tmp_2 = isInterface(tmp_5, SerializationStrategy) ? tmp_5 : THROW_CCE();
        }
        tmp = tmp_2;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_6 = tmp1_elvis_lhs == null ? serializer_1(Unit_instance) : tmp1_elvis_lhs;
      var serializer_3 = isInterface(tmp_6, KSerializer) ? tmp_6 : THROW_CCE();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var it = serializer_2(StringCompanionObject_instance);
      collectionEncoder.s4l(it.m4i(), imul(index_0, 2), it, item);
      collectionEncoder.u4l(serializer_3.m4i(), imul(index_0, 2) + 1 | 0, serializer_3, listValue);
    }
    collectionEncoder.t4k(this.ti4_1);
  };
  protoOf(FirebaseMapSerializer).n4i = function (encoder, value) {
    return this.vi4(encoder, (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE());
  };
  protoOf(FirebaseMapSerializer).o4i = function (decoder) {
    var tmp = decoder.s4k(this.ti4_1);
    var collectionDecoder = tmp instanceof FirebaseCompositeDecoder ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    var progression = step(until(0, imul(collectionDecoder.p4m(this.ti4_1), 2)), 2);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    var step_0 = progression.k1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
      }
       while (!(index === last));
    return map;
  };
  function FirebaseListSerializer$descriptor$1(this$0) {
    this.yi4_1 = this$0;
    this.wi4_1 = LIST_getInstance();
    this.xi4_1 = 'kotlin.List<Any>';
  }
  protoOf(FirebaseListSerializer$descriptor$1).q4j = function () {
    return this.wi4_1;
  };
  protoOf(FirebaseListSerializer$descriptor$1).p4j = function () {
    return this.xi4_1;
  };
  protoOf(FirebaseListSerializer$descriptor$1).s4j = function () {
    return this.yi4_1.f1b().p();
  };
  protoOf(FirebaseListSerializer$descriptor$1).v4j = function (name) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseListSerializer$descriptor$1).u4j = function (index) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseListSerializer$descriptor$1).w4j = function (index) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseListSerializer$descriptor$1).x4j = function (index) {
    return false;
  };
  function FirebaseListSerializer() {
    var tmp = this;
    tmp.ai5_1 = new FirebaseListSerializer$descriptor$1(this);
  }
  protoOf(FirebaseListSerializer).f1b = function () {
    var tmp = this.zi4_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('list');
    }
  };
  protoOf(FirebaseListSerializer).m4i = function () {
    return this.ai5_1;
  };
  protoOf(FirebaseListSerializer).bi5 = function (encoder, value) {
    this.zi4_1 = toList(value);
    var collectionEncoder = encoder.y4l(this.ai5_1, this.f1b().p());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.f1b().m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'dev.gitlive.firebase.internal.FirebaseListSerializer.serialize.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp;
      if (item == null) {
        tmp = null;
      } else {
        // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer' call
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.runCatching' call
        var tmp_0;
        try {
          // Inline function 'kotlin.Companion.success' call
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          // Inline function 'kotlinx.serialization.serializer' call
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_0 = serializer(createKType(PrimitiveClasses_getInstance().lc(), arrayOf([]), false));
          var value_0 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
          tmp_0 = _Result___init__impl__xyqfz8(value_0);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_0 = tmp_1;
        }
        var this_1 = tmp_0;
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(this_1);
        var tmp_2;
        if (exception == null) {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        } else {
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          var tmp_4;
          if (isInterface(item, KtMap)) {
            tmp_4 = new FirebaseMapSerializer();
          } else {
            if (isInterface(item, KtList)) {
              tmp_4 = new FirebaseListSerializer();
            } else {
              if (isInterface(item, KtSet)) {
                tmp_4 = new FirebaseListSerializer();
              } else {
                tmp_4 = serializer_0(getKClassFromExpression(item));
              }
            }
          }
          var tmp_5 = tmp_4;
          tmp_2 = isInterface(tmp_5, SerializationStrategy) ? tmp_5 : THROW_CCE();
        }
        tmp = tmp_2;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_6 = tmp1_elvis_lhs == null ? serializer_1(Unit_instance) : tmp1_elvis_lhs;
      var serializer_2 = isInterface(tmp_6, KSerializer) ? tmp_6 : THROW_CCE();
      collectionEncoder.u4l(serializer_2.m4i(), index_0, serializer_2, item);
    }
    collectionEncoder.t4k(this.ai5_1);
  };
  protoOf(FirebaseListSerializer).n4i = function (encoder, value) {
    return this.bi5(encoder, (!(value == null) ? isInterface(value, Iterable) : false) ? value : THROW_CCE());
  };
  protoOf(FirebaseListSerializer).o4i = function (decoder) {
    throw new NotImplementedError();
  };
  function structureDecoder(_this__u8e3s4, descriptor, polymorphicIsNested) {
    var tmp0_subject = descriptor.q4j();
    var tmp;
    if (equals(tmp0_subject, CLASS_getInstance()) || equals(tmp0_subject, OBJECT_getInstance())) {
      tmp = decodeAsMap(_this__u8e3s4, false);
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = decodeAsList(_this__u8e3s4);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlin.let' call
          var tmp_0 = Object.entries(_this__u8e3s4.ri3_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.internal.structureDecoder.<anonymous>' call
          var it = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
          var tmp_1 = it.length;
          tmp = new FirebaseCompositeDecoder(tmp_1, _this__u8e3s4.si3_1, structureDecoder$lambda(it));
        } else {
          if (tmp0_subject instanceof PolymorphicKind) {
            tmp = decodeAsMap(_this__u8e3s4, polymorphicIsNested);
          } else {
            var reason = 'The firebase-kotlin-sdk does not support ' + toString(descriptor) + ' for serialization yet';
            throw new NotImplementedError('An operation is not implemented: ' + reason);
          }
        }
      }
    }
    return tmp;
  }
  function getPolymorphicType(value, discriminator) {
    var tmp = ((!(value == null) ? !(value == null) : false) ? value : THROW_CCE())[discriminator];
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function decodeAsMap(_this__u8e3s4, isNestedPolymorphic) {
    // Inline function 'kotlin.let' call
    var tmp = _this__u8e3s4.ri3_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.decodeAsMap.<anonymous>' call
    var json = (!(tmp == null) ? !(tmp == null) : false) ? tmp : THROW_CCE();
    var tmp_0 = Object.keys(_this__u8e3s4.ri3_1).length;
    var tmp_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_2 = decodeAsMap$lambda(json);
    return new FirebaseClassDecoder(tmp_1, _this__u8e3s4.si3_1, tmp_2, decodeAsMap$lambda_0(isNestedPolymorphic, json));
  }
  function decodeAsList(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    var tmp = _this__u8e3s4.ri3_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.decodeAsList.<anonymous>' call
    var it = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp_0 = it.length;
    return new FirebaseCompositeDecoder(tmp_0, _this__u8e3s4.si3_1, decodeAsList$lambda(it));
  }
  function structureDecoder$lambda($it) {
    return function (desc, index) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.structureDecoder.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = $it[index / 2 | 0];
      var tmp;
      if ((index % 2 | 0) === 0) {
        var tmp_0 = $this$run[0];
        var key = typeof tmp_0 === 'string' ? tmp_0 : THROW_CCE();
        var tmp_1;
        if (equals(desc.w4j(index).q4j(), STRING_getInstance())) {
          tmp_1 = key;
        } else {
          tmp_1 = JSON.parse(key);
        }
        tmp = tmp_1;
      } else {
        tmp = $this$run[1];
      }
      return tmp;
    };
  }
  function decodeAsMap$lambda($json) {
    return function (it) {
      return !equals($json[it], undefined);
    };
  }
  function decodeAsMap$lambda_0($isNestedPolymorphic, $json) {
    return function (desc, index) {
      var tmp;
      if ($isNestedPolymorphic) {
        var tmp_0;
        if (desc.u4j(index) === 'value') {
          tmp_0 = $json;
        } else {
          tmp_0 = $json[desc.u4j(index)];
        }
        tmp = tmp_0;
      } else {
        tmp = $json[desc.u4j(index)];
      }
      return tmp;
    };
  }
  function decodeAsList$lambda($it) {
    return function (_unused_var__etf5q3, index) {
      return $it[index];
    };
  }
  function structureEncoder(_this__u8e3s4, descriptor) {
    var tmp0_subject = descriptor.q4j();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = encodeAsList(_this__u8e3s4, descriptor);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var map = json([]);
        var lastKey = {_v: ''};
        _this__u8e3s4.fi4_1 = map;
        tmp = new FirebaseCompositeEncoder(_this__u8e3s4.ei4_1, VOID, VOID, structureEncoder$lambda(lastKey, map));
      } else {
        if (equals(tmp0_subject, CLASS_getInstance()) || equals(tmp0_subject, OBJECT_getInstance())) {
          tmp = encodeAsMap(_this__u8e3s4, descriptor);
        } else {
          if (tmp0_subject instanceof PolymorphicKind) {
            tmp = encodeAsMap(_this__u8e3s4, descriptor);
          } else {
            var reason = 'The firebase-kotlin-sdk does not support ' + toString(descriptor) + ' for serialization yet';
            throw new NotImplementedError('An operation is not implemented: ' + reason);
          }
        }
      }
    }
    return tmp;
  }
  function encodeAsList(_this__u8e3s4, descriptor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.also' call
    var tmp = 0;
    var tmp_0 = descriptor.s4j();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = null;
      tmp = tmp + 1 | 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsList.<anonymous>' call
    _this__u8e3s4.fi4_1 = tmp_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsList.<anonymous>' call
    return new FirebaseCompositeEncoder(_this__u8e3s4.ei4_1, VOID, VOID, encodeAsList$lambda(tmp_1));
  }
  function encodeAsMap(_this__u8e3s4, descriptor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.also' call
    var this_0 = json([]);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsMap.<anonymous>' call
    _this__u8e3s4.fi4_1 = this_0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsMap.<anonymous>' call
    var tmp = encodeAsMap$lambda(this_0);
    return new FirebaseCompositeEncoder(_this__u8e3s4.ei4_1, VOID, tmp, encodeAsMap$lambda_0(this_0, descriptor));
  }
  function structureEncoder$lambda($lastKey, $map) {
    return function (_unused_var__etf5q3, index, value) {
      var tmp;
      if ((index % 2 | 0) === 0) {
        var tmp0_elvis_lhs = (!(value == null) ? typeof value === 'string' : false) ? value : null;
        $lastKey._v = tmp0_elvis_lhs == null ? JSON.stringify(value) : tmp0_elvis_lhs;
        tmp = Unit_instance;
      } else {
        $map[$lastKey._v] = value;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function encodeAsList$lambda($it) {
    return function (_unused_var__etf5q3, index, value) {
      $it[index] = value;
      return Unit_instance;
    };
  }
  function encodeAsMap$lambda($it) {
    return function (discriminator, type) {
      $it[discriminator] = type;
      return Unit_instance;
    };
  }
  function encodeAsMap$lambda_0($it, $descriptor) {
    return function (_unused_var__etf5q3, index, value) {
      $it[$descriptor.u4j(index)] = value;
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(FirebaseCompositeDecoder).b4n = decodeSerializableElement$default;
  protoOf(FirebaseEncoder).y4l = beginCollection;
  protoOf(FirebaseMapSerializer$descriptor$1).l4j = get_isNullable;
  protoOf(FirebaseMapSerializer$descriptor$1).r4j = get_isInline;
  protoOf(FirebaseMapSerializer$descriptor$1).t4j = get_annotations;
  protoOf(FirebaseListSerializer$descriptor$1).l4j = get_isNullable;
  protoOf(FirebaseListSerializer$descriptor$1).r4j = get_isInline;
  protoOf(FirebaseListSerializer$descriptor$1).t4j = get_annotations;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Builder_0;
  _.$_$.b = Builder;
  _.$_$.c = FirebaseEncoder;
  _.$_$.d = FirebaseListSerializer;
  _.$_$.e = FirebaseMapSerializer;
  _.$_$.f = ValueWithSerializer;
  _.$_$.g = buildDecodeSettings;
  _.$_$.h = buildEncodeSettings;
  _.$_$.i = decode;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-common-internal.js.map
