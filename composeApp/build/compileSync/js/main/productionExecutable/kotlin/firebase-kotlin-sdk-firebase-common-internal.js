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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var isInterface = kotlin_kotlin.$_$.qd;
  var FirebaseClassDiscriminator = kotlin_dev_gitlive_firebase_common.$_$.a;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var toDouble = kotlin_kotlin.$_$.uh;
  var numberToDouble = kotlin_kotlin.$_$.ce;
  var isNumber = kotlin_kotlin.$_$.sd;
  var toLong = kotlin_kotlin.$_$.ai;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var toByte = kotlin_kotlin.$_$.rh;
  var numberToByte = kotlin_kotlin.$_$.ae;
  var toInt = kotlin_kotlin.$_$.xh;
  var numberToInt = kotlin_kotlin.$_$.de;
  var toShort = kotlin_kotlin.$_$.bi;
  var numberToShort = kotlin_kotlin.$_$.fe;
  var toBoolean = kotlin_kotlin.$_$.qh;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var numberToChar = kotlin_kotlin.$_$.be;
  var SerializationException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var Exception = kotlin_kotlin.$_$.si;
  var Char = kotlin_kotlin.$_$.mi;
  var NotImplementedError = kotlin_kotlin.$_$.yi;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var until = kotlin_kotlin.$_$.if;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var isArray = kotlin_kotlin.$_$.id;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var equals = kotlin_kotlin.$_$.qc;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(DecodeSettingsImpl, 'DecodeSettingsImpl');
  initMetadataForClass(FirebaseDecoder, 'FirebaseDecoder', VOID, VOID, [Decoder]);
  initMetadataForClass(FirebaseCompositeDecoder, 'FirebaseCompositeDecoder', VOID, VOID, [CompositeDecoder]);
  initMetadataForClass(FirebaseClassDecoder, 'FirebaseClassDecoder', VOID, FirebaseCompositeDecoder);
  //endregion
  function buildDecodeSettings(_this__u8e3s4) {
    return new DecodeSettingsImpl(_this__u8e3s4.g4f());
  }
  function Builder() {
    this.mf1_1 = EmptySerializersModule();
  }
  protoOf(Builder).g4f = function () {
    return this.mf1_1;
  };
  function DecodeSettingsImpl(serializersModule) {
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    this.nf1_1 = serializersModule;
  }
  protoOf(DecodeSettingsImpl).g4f = function () {
    return this.nf1_1;
  };
  function decodeSerializableValuePolymorphic(_this__u8e3s4, value, deserializer) {
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      return deserializer.a4c(_this__u8e3s4);
    }
    var casted = deserializer instanceof AbstractPolymorphicSerializer ? deserializer : THROW_CCE();
    var discriminator = classDiscriminator(deserializer.y4b());
    var type = getPolymorphicType(value, discriminator);
    var tmp = casted.p4c(structureDecoder(_this__u8e3s4, deserializer.y4b(), false), type);
    var actualDeserializer = (!(tmp == null) ? isInterface(tmp, DeserializationStrategy) : false) ? tmp : THROW_CCE();
    return actualDeserializer.a4c(_this__u8e3s4);
  }
  function classDiscriminator(_this__u8e3s4) {
    var _iterator__ex2g4s = _this__u8e3s4.f4d().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof FirebaseClassDiscriminator)
        return annotation.of1_1;
    }
    return 'type';
  }
  function decode(strategy, value, decodeSettings) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(value == null) || strategy.y4b().x4c())) {
      // Inline function 'dev.gitlive.firebase.internal.decode.<anonymous>' call
      var message = 'Value was null for non-nullable type ' + strategy.y4b().b4d();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return (new FirebaseDecoder(value, decodeSettings)).w4f(strategy);
  }
  function FirebaseDecoder(value, settings) {
    this.pf1_1 = value;
    this.qf1_1 = settings;
    this.rf1_1 = this.qf1_1.g4f();
  }
  protoOf(FirebaseDecoder).e4e = function (descriptor) {
    return structureDecoder(this, descriptor, true);
  };
  protoOf(FirebaseDecoder).t4f = function () {
    return decodeString(this.pf1_1);
  };
  protoOf(FirebaseDecoder).s4f = function () {
    return decodeDouble(this.pf1_1);
  };
  protoOf(FirebaseDecoder).q4f = function () {
    return decodeLong(this.pf1_1);
  };
  protoOf(FirebaseDecoder).m4f = function () {
    return decodeByte(this.pf1_1);
  };
  protoOf(FirebaseDecoder).r4f = function () {
    return decodeFloat(this.pf1_1);
  };
  protoOf(FirebaseDecoder).p4f = function () {
    return decodeInt(this.pf1_1);
  };
  protoOf(FirebaseDecoder).n4f = function () {
    return decodeShort(this.pf1_1);
  };
  protoOf(FirebaseDecoder).l4f = function () {
    return decodeBoolean(this.pf1_1);
  };
  protoOf(FirebaseDecoder).o4f = function () {
    return decodeChar(this.pf1_1);
  };
  protoOf(FirebaseDecoder).u4f = function (enumDescriptor) {
    return decodeEnum(this.pf1_1, enumDescriptor);
  };
  protoOf(FirebaseDecoder).j4f = function () {
    return decodeNotNullMark(this.pf1_1);
  };
  protoOf(FirebaseDecoder).k4f = function () {
    return decodeNull(this.pf1_1);
  };
  protoOf(FirebaseDecoder).v4f = function (descriptor) {
    return new FirebaseDecoder(this.pf1_1, this.qf1_1);
  };
  protoOf(FirebaseDecoder).w4f = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, this.pf1_1, deserializer);
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
    var index = _this__u8e3s4.h4d(name);
    if (index === -3) {
      throw SerializationException_init_$Create$(_this__u8e3s4.b4d() + " does not contain element with name '" + name + "'");
    }
    return index;
  }
  function decodeElement($this, descriptor, index, decoder) {
    var tmp;
    try {
      tmp = decoder($this.uf1_1(descriptor, index));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        throw SerializationException_init_$Create$_0('Exception during decoding ' + descriptor.b4d() + ' ' + descriptor.g4d(index), e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function FirebaseCompositeDecoder$decodeSerializableElement$lambda($deserializer, this$0) {
    return function (it) {
      return $deserializer.a4c(new FirebaseDecoder(it, this$0.tf1_1));
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
      return new FirebaseDecoder(it, this$0.tf1_1);
    };
  }
  function FirebaseCompositeDecoder(size, settings, get) {
    this.sf1_1 = size;
    this.tf1_1 = settings;
    this.uf1_1 = get;
    this.vf1_1 = this.tf1_1.g4f();
  }
  protoOf(FirebaseCompositeDecoder).g4f = function () {
    return this.vf1_1;
  };
  protoOf(FirebaseCompositeDecoder).x4f = function () {
    return true;
  };
  protoOf(FirebaseCompositeDecoder).y4f = function (descriptor) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseCompositeDecoder).z4f = function (descriptor) {
    return this.sf1_1;
  };
  protoOf(FirebaseCompositeDecoder).k4g = function (descriptor, index, deserializer, previousValue) {
    return decodeElement(this, descriptor, index, FirebaseCompositeDecoder$decodeSerializableElement$lambda(deserializer, this));
  };
  protoOf(FirebaseCompositeDecoder).a4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeBoolean$ref());
  };
  protoOf(FirebaseCompositeDecoder).b4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeByte$ref());
  };
  protoOf(FirebaseCompositeDecoder).c4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeChar$ref()).o1_1;
  };
  protoOf(FirebaseCompositeDecoder).h4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeDouble$ref());
  };
  protoOf(FirebaseCompositeDecoder).g4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeFloat$ref());
  };
  protoOf(FirebaseCompositeDecoder).e4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeInt$ref());
  };
  protoOf(FirebaseCompositeDecoder).f4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeLong$ref());
  };
  protoOf(FirebaseCompositeDecoder).d4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeShort$ref());
  };
  protoOf(FirebaseCompositeDecoder).i4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeString$ref());
  };
  protoOf(FirebaseCompositeDecoder).f4e = function (descriptor) {
  };
  protoOf(FirebaseCompositeDecoder).j4g = function (descriptor, index) {
    return decodeElement(this, descriptor, index, FirebaseCompositeDecoder$decodeInlineElement$lambda(this));
  };
  function FirebaseClassDecoder(size, settings, containsKey, get) {
    FirebaseCompositeDecoder.call(this, size, settings, get);
    this.af2_1 = containsKey;
    this.bf2_1 = 0;
  }
  protoOf(FirebaseClassDecoder).x4f = function () {
    return false;
  };
  protoOf(FirebaseClassDecoder).y4f = function (descriptor) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var progression = until(this.bf2_1, descriptor.e4d());
      var inductionVariable = progression.c1_1;
      var last = progression.d1_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.gitlive.firebase.internal.FirebaseClassDecoder.decodeElementIndex.<anonymous>' call
          var it = element;
          if (!descriptor.j4d(it) || this.af2_1(descriptor.g4d(it))) {
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
      this.bf2_1 = tmp0_safe_receiver + 1 | 0;
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  function structureDecoder(_this__u8e3s4, descriptor, polymorphicIsNested) {
    var tmp0_subject = descriptor.c4d();
    var tmp;
    if (equals(tmp0_subject, CLASS_getInstance()) || equals(tmp0_subject, OBJECT_getInstance())) {
      tmp = decodeAsMap(_this__u8e3s4, false);
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = decodeAsList(_this__u8e3s4);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlin.let' call
          var tmp_0 = Object.entries(_this__u8e3s4.pf1_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.internal.structureDecoder.<anonymous>' call
          var it = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
          var tmp_1 = it.length;
          tmp = new FirebaseCompositeDecoder(tmp_1, _this__u8e3s4.qf1_1, structureDecoder$lambda(it));
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
    var tmp = _this__u8e3s4.pf1_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.decodeAsMap.<anonymous>' call
    var json = (!(tmp == null) ? !(tmp == null) : false) ? tmp : THROW_CCE();
    var tmp_0 = Object.keys(_this__u8e3s4.pf1_1).length;
    var tmp_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_2 = decodeAsMap$lambda(json);
    return new FirebaseClassDecoder(tmp_1, _this__u8e3s4.qf1_1, tmp_2, decodeAsMap$lambda_0(isNestedPolymorphic, json));
  }
  function decodeAsList(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    var tmp = _this__u8e3s4.pf1_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.decodeAsList.<anonymous>' call
    var it = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp_0 = it.length;
    return new FirebaseCompositeDecoder(tmp_0, _this__u8e3s4.qf1_1, decodeAsList$lambda(it));
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
        if (equals(desc.i4d(index).c4d(), STRING_getInstance())) {
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
        if (desc.g4d(index) === 'value') {
          tmp_0 = $json;
        } else {
          tmp_0 = $json[desc.g4d(index)];
        }
        tmp = tmp_0;
      } else {
        tmp = $json[desc.g4d(index)];
      }
      return tmp;
    };
  }
  function decodeAsList$lambda($it) {
    return function (_unused_var__etf5q3, index) {
      return $it[index];
    };
  }
  //region block: post-declaration
  protoOf(FirebaseCompositeDecoder).l4g = decodeSerializableElement$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Builder;
  _.$_$.b = buildDecodeSettings;
  _.$_$.c = decode;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-common-internal.js.map
