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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var protoOf = kotlin_kotlin.$_$.yh;
  var Builder = kotlin_dev_gitlive_firebase_common.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var VOID = kotlin_kotlin.$_$.i;
  var toString = kotlin_kotlin.$_$.ci;
  var getBooleanHashCode = kotlin_kotlin.$_$.kg;
  var hashCode = kotlin_kotlin.$_$.pg;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var equals = kotlin_kotlin.$_$.gg;
  var EncodeSettings = kotlin_dev_gitlive_firebase_common.$_$.e;
  var Builder_0 = kotlin_dev_gitlive_firebase_common.$_$.a;
  var DecodeSettings = kotlin_dev_gitlive_firebase_common.$_$.b;
  var EncodeDecodeSettingsBuilder = kotlin_dev_gitlive_firebase_common.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.ug;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var toString_0 = kotlin_kotlin.$_$.op;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var to = kotlin_kotlin.$_$.pp;
  var toMap = kotlin_kotlin.$_$.zd;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cp;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var isInterface = kotlin_kotlin.$_$.gh;
  var FirebaseClassDiscriminator = kotlin_dev_gitlive_firebase_common.$_$.f;
  var objectCreate = kotlin_kotlin.$_$.xh;
  var decodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var toDouble = kotlin_kotlin.$_$.gm;
  var numberToDouble = kotlin_kotlin.$_$.th;
  var isNumber = kotlin_kotlin.$_$.ih;
  var toLong = kotlin_kotlin.$_$.mm;
  var numberToLong = kotlin_kotlin.$_$.vh;
  var toByte = kotlin_kotlin.$_$.dm;
  var numberToByte = kotlin_kotlin.$_$.rh;
  var toInt = kotlin_kotlin.$_$.jm;
  var numberToInt = kotlin_kotlin.$_$.uh;
  var toShort = kotlin_kotlin.$_$.om;
  var numberToShort = kotlin_kotlin.$_$.wh;
  var toBoolean = kotlin_kotlin.$_$.cm;
  var charSequenceGet = kotlin_kotlin.$_$.ag;
  var numberToChar = kotlin_kotlin.$_$.sh;
  var SerializationException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var Exception = kotlin_kotlin.$_$.ln;
  var Char = kotlin_kotlin.$_$.fn;
  var NotImplementedError = kotlin_kotlin.$_$.rn;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var decodeNullableSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var until = kotlin_kotlin.$_$.cj;
  var ensureNotNull = kotlin_kotlin.$_$.to;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var emptyList = kotlin_kotlin.$_$.z9;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.kp;
  var toList = kotlin_kotlin.$_$.ud;
  var checkIndexOverflow = kotlin_kotlin.$_$.r8;
  var getValue = kotlin_kotlin.$_$.ta;
  var Companion_getInstance = kotlin_kotlin.$_$.l6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.e6;
  var arrayOf = kotlin_kotlin.$_$.mo;
  var createKType = kotlin_kotlin.$_$.c;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.h4;
  var createFailure = kotlin_kotlin.$_$.so;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.i4;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var KtSet = kotlin_kotlin.$_$.z7;
  var KtList = kotlin_kotlin.$_$.j7;
  var KtMap = kotlin_kotlin.$_$.m7;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.b6;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var step = kotlin_kotlin.$_$.bj;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var Iterable = kotlin_kotlin.$_$.d7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t8;
  var copyToArray = kotlin_kotlin.$_$.v9;
  var json = kotlin_kotlin.$_$.nh;
  var isArray = kotlin_kotlin.$_$.yg;
  var Collection = kotlin_kotlin.$_$.a7;
  var mapCapacity = kotlin_kotlin.$_$.sb;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var toList_0 = kotlin_kotlin.$_$.rd;
  var iterator = kotlin_kotlin.$_$.lh;
  var toMap_0 = kotlin_kotlin.$_$.yd;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var fillArrayVal = kotlin_kotlin.$_$.ig;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Builder_1, 'Builder', Builder_1, VOID, [Builder]);
  initMetadataForClass(EncodeSettingsImpl, 'EncodeSettingsImpl', VOID, VOID, [EncodeSettings]);
  initMetadataForClass(Builder_2, 'Builder', Builder_2, VOID, [Builder_0]);
  initMetadataForClass(DecodeSettingsImpl, 'DecodeSettingsImpl', VOID, VOID, [DecodeSettings]);
  initMetadataForClass(EncodeDecodeSettingsBuilderImpl, 'EncodeDecodeSettingsBuilderImpl', EncodeDecodeSettingsBuilderImpl, VOID, [EncodeDecodeSettingsBuilder]);
  initMetadataForInterface(EncodedObject, 'EncodedObject');
  initMetadataForClass(EncodedObjectImpl, 'EncodedObjectImpl', VOID, VOID, [EncodedObject]);
  initMetadataForClass(FirebaseDecoder, 'FirebaseDecoder', VOID, VOID, [Decoder]);
  initMetadataForClass(FirebaseCompositeDecoder, 'FirebaseCompositeDecoder', VOID, VOID, [CompositeDecoder]);
  initMetadataForClass(FirebaseClassDecoder, 'FirebaseClassDecoder', VOID, FirebaseCompositeDecoder);
  initMetadataForClass(FirebaseEncoder, 'FirebaseEncoder', VOID, VOID, [Encoder]);
  initMetadataForClass(ValueWithSerializer, 'ValueWithSerializer');
  initMetadataForClass(FirebaseCompositeEncoder, 'FirebaseCompositeEncoder', VOID, VOID, [CompositeEncoder]);
  initMetadataForClass(FirebaseMapSerializer$descriptor$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(FirebaseMapSerializer, 'FirebaseMapSerializer', FirebaseMapSerializer, VOID, [KSerializer]);
  initMetadataForClass(FirebaseListSerializer$descriptor$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(FirebaseListSerializer, 'FirebaseListSerializer', FirebaseListSerializer, VOID, [KSerializer]);
  //endregion
  function buildEncodeSettings(_this__u8e3s4) {
    return new EncodeSettingsImpl(_this__u8e3s4.get_encodeDefaults_m8plkf_k$(), _this__u8e3s4.get_serializersModule_piitvg_k$());
  }
  function Builder_1() {
    this.encodeDefaults_1 = true;
    this.serializersModule_1 = EmptySerializersModule();
  }
  protoOf(Builder_1).set_encodeDefaults_c5evsg_k$ = function (_set____db54di) {
    this.encodeDefaults_1 = _set____db54di;
  };
  protoOf(Builder_1).get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  protoOf(Builder_1).set_serializersModule_6xge6s_k$ = function (_set____db54di) {
    this.serializersModule_1 = _set____db54di;
  };
  protoOf(Builder_1).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  function EncodeSettingsImpl(encodeDefaults, serializersModule) {
    this.encodeDefaults_1 = encodeDefaults;
    this.serializersModule_1 = serializersModule;
  }
  protoOf(EncodeSettingsImpl).get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  protoOf(EncodeSettingsImpl).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(EncodeSettingsImpl).component1_7eebsc_k$ = function () {
    return this.encodeDefaults_1;
  };
  protoOf(EncodeSettingsImpl).component2_7eebsb_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(EncodeSettingsImpl).copy_4dovn5_k$ = function (encodeDefaults, serializersModule) {
    return new EncodeSettingsImpl(encodeDefaults, serializersModule);
  };
  protoOf(EncodeSettingsImpl).copy$default_rltcmz_k$ = function (encodeDefaults, serializersModule, $super) {
    encodeDefaults = encodeDefaults === VOID ? this.encodeDefaults_1 : encodeDefaults;
    serializersModule = serializersModule === VOID ? this.serializersModule_1 : serializersModule;
    return $super === VOID ? this.copy_4dovn5_k$(encodeDefaults, serializersModule) : $super.copy_4dovn5_k$.call(this, encodeDefaults, serializersModule);
  };
  protoOf(EncodeSettingsImpl).toString = function () {
    return 'EncodeSettingsImpl(encodeDefaults=' + this.encodeDefaults_1 + ', serializersModule=' + toString(this.serializersModule_1) + ')';
  };
  protoOf(EncodeSettingsImpl).hashCode = function () {
    var result = getBooleanHashCode(this.encodeDefaults_1);
    result = imul(result, 31) + hashCode(this.serializersModule_1) | 0;
    return result;
  };
  protoOf(EncodeSettingsImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EncodeSettingsImpl))
      return false;
    var tmp0_other_with_cast = other instanceof EncodeSettingsImpl ? other : THROW_CCE();
    if (!(this.encodeDefaults_1 === tmp0_other_with_cast.encodeDefaults_1))
      return false;
    if (!equals(this.serializersModule_1, tmp0_other_with_cast.serializersModule_1))
      return false;
    return true;
  };
  function buildDecodeSettings(_this__u8e3s4) {
    return new DecodeSettingsImpl(_this__u8e3s4.get_serializersModule_piitvg_k$());
  }
  function Builder_2() {
    this.serializersModule_1 = EmptySerializersModule();
  }
  protoOf(Builder_2).set_serializersModule_6xge6s_k$ = function (_set____db54di) {
    this.serializersModule_1 = _set____db54di;
  };
  protoOf(Builder_2).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  function DecodeSettingsImpl(serializersModule) {
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    this.serializersModule_1 = serializersModule;
  }
  protoOf(DecodeSettingsImpl).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  function EncodeDecodeSettingsBuilderImpl() {
    this.encodeDefaults_1 = true;
    this.serializersModule_1 = EmptySerializersModule();
  }
  protoOf(EncodeDecodeSettingsBuilderImpl).set_encodeDefaults_c5evsg_k$ = function (_set____db54di) {
    this.encodeDefaults_1 = _set____db54di;
  };
  protoOf(EncodeDecodeSettingsBuilderImpl).get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  protoOf(EncodeDecodeSettingsBuilderImpl).set_serializersModule_6xge6s_k$ = function (_set____db54di) {
    this.serializersModule_1 = _set____db54di;
  };
  protoOf(EncodeDecodeSettingsBuilderImpl).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  function EncodedObject() {
  }
  function asEncodedObject(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.gitlive.firebase.internal.asEncodedObject.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = item.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = item.get_value_j01efc_k$();
      var tmp;
      if (!(key == null) ? typeof key === 'string' : false) {
        tmp = to(key, value);
      } else {
        throw IllegalArgumentException_init_$Create$('Expected a String key but received ' + toString_0(key));
      }
      var tmp$ret$3 = tmp;
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    var p0 = toMap(destination);
    var tmp$ret$7 = _EncodedObjectImpl___init__impl__fkicy4(p0);
    return new EncodedObjectImpl(tmp$ret$7);
  }
  function _EncodedObjectImpl___init__impl__fkicy4(raw) {
    return raw;
  }
  function _EncodedObjectImpl___get_raw__impl__4l7ay1($this) {
    return $this;
  }
  function EncodedObjectImpl__toString_impl_vr6wbw($this) {
    return 'EncodedObjectImpl(raw=' + toString($this) + ')';
  }
  function EncodedObjectImpl__hashCode_impl_hir8ud($this) {
    return hashCode($this);
  }
  function EncodedObjectImpl__equals_impl_qcpm8v($this, other) {
    if (!(other instanceof EncodedObjectImpl))
      return false;
    var tmp0_other_with_cast = other instanceof EncodedObjectImpl ? other.raw_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function EncodedObjectImpl(raw) {
    this.raw_1 = raw;
  }
  protoOf(EncodedObjectImpl).toString = function () {
    return EncodedObjectImpl__toString_impl_vr6wbw(this.raw_1);
  };
  protoOf(EncodedObjectImpl).hashCode = function () {
    return EncodedObjectImpl__hashCode_impl_hir8ud(this.raw_1);
  };
  protoOf(EncodedObjectImpl).equals = function (other) {
    return EncodedObjectImpl__equals_impl_qcpm8v(this.raw_1, other);
  };
  function getRaw(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof EncodedObjectImpl) {
      tmp = _EncodedObjectImpl___get_raw__impl__4l7ay1(_this__u8e3s4.raw_1);
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      serializer.serialize_5ase3y_k$(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.get_descriptor_wjt6a0_k$());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, !(value == null) ? value : THROW_CCE());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.serialize_5ase3y_k$(_this__u8e3s4, value);
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, value, deserializer) {
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      return deserializer.deserialize_sy6x50_k$(_this__u8e3s4);
    }
    var casted = deserializer instanceof AbstractPolymorphicSerializer ? deserializer : THROW_CCE();
    var discriminator = classDiscriminator(deserializer.get_descriptor_wjt6a0_k$());
    var type = getPolymorphicType(value, discriminator);
    var tmp = casted.findPolymorphicSerializerOrNull_o3cszk_k$(structureDecoder(_this__u8e3s4, deserializer.get_descriptor_wjt6a0_k$(), false), type);
    var actualDeserializer = (!(tmp == null) ? isInterface(tmp, DeserializationStrategy) : false) ? tmp : THROW_CCE();
    return actualDeserializer.deserialize_sy6x50_k$(_this__u8e3s4);
  }
  function classDiscriminator(_this__u8e3s4) {
    var _iterator__ex2g4s = _this__u8e3s4.get_annotations_20dirp_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var annotation = _iterator__ex2g4s.next_20eer_k$();
      if (annotation instanceof FirebaseClassDiscriminator)
        return annotation.get_discriminator_wfz2j1_k$();
    }
    return 'type';
  }
  function decode(strategy, value, buildSettings) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder_2();
    // Inline function 'kotlin.contracts.contract' call
    buildSettings(this_0);
    return decode_0(strategy, value, buildDecodeSettings(this_0));
  }
  function decode_0(strategy, value, decodeSettings) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(value == null) || strategy.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$())) {
      // Inline function 'dev.gitlive.firebase.internal.decode.<anonymous>' call
      var message = 'Value was null for non-nullable type ' + strategy.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return (new FirebaseDecoder(value, decodeSettings)).decodeSerializableValue_xpnpad_k$(strategy);
  }
  function FirebaseDecoder_init_$Init$(value, $this) {
    FirebaseDecoder.call($this, value, new DecodeSettingsImpl());
    return $this;
  }
  function FirebaseDecoder_init_$Create$(value) {
    return FirebaseDecoder_init_$Init$(value, objectCreate(protoOf(FirebaseDecoder)));
  }
  function FirebaseDecoder(value, settings) {
    this.value_1 = value;
    this.settings_1 = settings;
    this.serializersModule_1 = this.settings_1.get_serializersModule_piitvg_k$();
  }
  protoOf(FirebaseDecoder).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(FirebaseDecoder).get_settings_6ur9ef_k$ = function () {
    return this.settings_1;
  };
  protoOf(FirebaseDecoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(FirebaseDecoder).beginStructure_yljocp_k$ = function (descriptor) {
    return structureDecoder(this, descriptor, true);
  };
  protoOf(FirebaseDecoder).decodeString_x3hxsx_k$ = function () {
    return decodeString(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeDouble_ur8l0f_k$ = function () {
    return decodeDouble(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeLong_jzt186_k$ = function () {
    return decodeLong(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeByte_jzz7je_k$ = function () {
    return decodeByte(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeFloat_jcnrwu_k$ = function () {
    return decodeFloat(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeInt_8iq8f5_k$ = function () {
    return decodeInt(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeShort_jjqk32_k$ = function () {
    return decodeShort(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeBoolean_m0aca_k$ = function () {
    return decodeBoolean(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeChar_dcmcfa_k$ = function () {
    return decodeChar(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeEnum_slg6lu_k$ = function (enumDescriptor) {
    return decodeEnum(this.value_1, enumDescriptor);
  };
  protoOf(FirebaseDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    return decodeNotNullMark(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeNull_jzrmuj_k$ = function () {
    return decodeNull(this.value_1);
  };
  protoOf(FirebaseDecoder).decodeInline_ux3vza_k$ = function (descriptor) {
    return new FirebaseDecoder(this.value_1, this.settings_1);
  };
  protoOf(FirebaseDecoder).decodeSerializableValue_xpnpad_k$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, this.value_1, deserializer);
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
    var index = _this__u8e3s4.getElementIndex_utfbym_k$(name);
    if (index === -3) {
      throw SerializationException_init_$Create$(_this__u8e3s4.get_serialName_u2rqhk_k$() + " does not contain element with name '" + name + "'");
    }
    return index;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _get_get__e68x6j($this) {
    return $this.get_1;
  }
  function decodeElement($this, descriptor, index, decoder) {
    var tmp;
    try {
      tmp = decoder($this.get_1(descriptor, index));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        throw SerializationException_init_$Create$_0('Exception during decoding ' + descriptor.get_serialName_u2rqhk_k$() + ' ' + descriptor.getElementName_u4sqmf_k$(index), e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function FirebaseCompositeDecoder$decodeSerializableElement$lambda($deserializer, this$0) {
    return function (it) {
      return $deserializer.deserialize_sy6x50_k$(new FirebaseDecoder(it, this$0.settings_1));
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
  function decodeNotNullMark$ref() {
    var l = function (p0) {
      return decodeNotNullMark(p0);
    };
    l.callableName = 'decodeNotNullMark';
    return l;
  }
  function decodeNull$ref() {
    var l = function (p0) {
      return decodeNull(p0);
    };
    l.callableName = 'decodeNull';
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
      return new FirebaseDecoder(it, this$0.settings_1);
    };
  }
  function FirebaseCompositeDecoder(size, settings, get) {
    this.size_1 = size;
    this.settings_1 = settings;
    this.get_1 = get;
    this.serializersModule_1 = this.settings_1.get_serializersModule_piitvg_k$();
  }
  protoOf(FirebaseCompositeDecoder).get_settings_6ur9ef_k$ = function () {
    return this.settings_1;
  };
  protoOf(FirebaseCompositeDecoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(FirebaseCompositeDecoder).decodeSequentially_xlblqy_k$ = function () {
    return true;
  };
  protoOf(FirebaseCompositeDecoder).decodeElementIndex_bstkhp_k$ = function (descriptor) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseCompositeDecoder).decodeCollectionSize_l3mlkk_k$ = function (descriptor) {
    return this.size_1;
  };
  protoOf(FirebaseCompositeDecoder).decodeSerializableElement_uahnnv_k$ = function (descriptor, index, deserializer, previousValue) {
    return decodeElement(this, descriptor, index, FirebaseCompositeDecoder$decodeSerializableElement$lambda(deserializer, this));
  };
  protoOf(FirebaseCompositeDecoder).decodeBooleanElement_vuyhtj_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeBoolean$ref());
  };
  protoOf(FirebaseCompositeDecoder).decodeByteElement_c1pisz_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeByte$ref());
  };
  protoOf(FirebaseCompositeDecoder).decodeCharElement_frbao3_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeChar$ref()).value_1;
  };
  protoOf(FirebaseCompositeDecoder).decodeDoubleElement_isei84_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeDouble$ref());
  };
  protoOf(FirebaseCompositeDecoder).decodeFloatElement_p2q55h_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeFloat$ref());
  };
  protoOf(FirebaseCompositeDecoder).decodeIntElement_941u6a_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeInt$ref());
  };
  protoOf(FirebaseCompositeDecoder).decodeLongElement_994anb_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeLong$ref());
  };
  protoOf(FirebaseCompositeDecoder).decodeNullableSerializableElement_k2y6ab_k$ = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    var tmp;
    var tmp_0;
    if (isNullabilitySupported) {
      tmp_0 = true;
    } else {
      tmp_0 = decodeElement(this, descriptor, index, decodeNotNullMark$ref());
    }
    if (tmp_0) {
      tmp = this.decodeSerializableElement_uahnnv_k$(descriptor, index, deserializer, previousValue);
    } else {
      tmp = decodeElement(this, descriptor, index, decodeNull$ref());
    }
    return tmp;
  };
  protoOf(FirebaseCompositeDecoder).decodeShortElement_pzg12t_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeShort$ref());
  };
  protoOf(FirebaseCompositeDecoder).decodeStringElement_3oenpg_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, decodeString$ref());
  };
  protoOf(FirebaseCompositeDecoder).endStructure_1xqz0n_k$ = function (descriptor) {
  };
  protoOf(FirebaseCompositeDecoder).decodeInlineElement_s8883o_k$ = function (descriptor, index) {
    return decodeElement(this, descriptor, index, FirebaseCompositeDecoder$decodeInlineElement$lambda(this));
  };
  function _get_containsKey__825jxr($this) {
    return $this.containsKey_1;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function FirebaseClassDecoder(size, settings, containsKey, get) {
    FirebaseCompositeDecoder.call(this, size, settings, get);
    this.containsKey_1 = containsKey;
    this.index_1 = 0;
  }
  protoOf(FirebaseClassDecoder).decodeSequentially_xlblqy_k$ = function () {
    return false;
  };
  protoOf(FirebaseClassDecoder).decodeElementIndex_bstkhp_k$ = function (descriptor) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var progression = until(this.index_1, descriptor.get_elementsCount_288r0x_k$());
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.gitlive.firebase.internal.FirebaseClassDecoder.decodeElementIndex.<anonymous>' call
          var it = element;
          if (!descriptor.isElementOptional_heqq56_k$(it) || this.containsKey_1(descriptor.getElementName_u4sqmf_k$(it))) {
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
      this.index_1 = tmp0_safe_receiver + 1 | 0;
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  function encode(strategy, value, buildSettings) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder_1();
    // Inline function 'kotlin.contracts.contract' call
    buildSettings(this_0);
    return encode_0(strategy, value, buildEncodeSettings(this_0));
  }
  function encode_0(strategy, value, encodeSettings) {
    // Inline function 'kotlin.apply' call
    var this_0 = new FirebaseEncoder(encodeSettings);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encode.<anonymous>' call
    this_0.encodeSerializableValue_3uuzip_k$(strategy, value);
    return this_0.value_1;
  }
  function FirebaseEncoder_init_$Init$(shouldEncodeElementDefault, $this) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder_1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.FirebaseEncoder.<init>.<anonymous>' call
    this_0.set_encodeDefaults_c5evsg_k$(shouldEncodeElementDefault);
    FirebaseEncoder.call($this, buildEncodeSettings(this_0));
    return $this;
  }
  function FirebaseEncoder_init_$Create$(shouldEncodeElementDefault) {
    return FirebaseEncoder_init_$Init$(shouldEncodeElementDefault, objectCreate(protoOf(FirebaseEncoder)));
  }
  function _set_polymorphicDiscriminator__uwj3yn($this, _set____db54di) {
    $this.polymorphicDiscriminator_1 = _set____db54di;
  }
  function _get_polymorphicDiscriminator__qe5wbf($this) {
    return $this.polymorphicDiscriminator_1;
  }
  function FirebaseEncoder$encodeSerializableValue$lambda(this$0) {
    return function (it) {
      this$0.polymorphicDiscriminator_1 = it;
      return Unit_getInstance();
    };
  }
  function FirebaseEncoder(settings) {
    this.settings_1 = settings;
    this.value_1 = null;
    this.serializersModule_1 = this.settings_1.get_serializersModule_piitvg_k$();
    this.polymorphicDiscriminator_1 = null;
  }
  protoOf(FirebaseEncoder).get_settings_6ur9ef_k$ = function () {
    return this.settings_1;
  };
  protoOf(FirebaseEncoder).set_value_rjqr2d_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(FirebaseEncoder).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(FirebaseEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(FirebaseEncoder).beginStructure_yljocp_k$ = function (descriptor) {
    var encoder = structureEncoder(this, descriptor);
    if (!(this.polymorphicDiscriminator_1 == null)) {
      encoder.encodePolymorphicClassDiscriminator_wtoaus_k$(ensureNotNull(this.polymorphicDiscriminator_1), descriptor.get_serialName_u2rqhk_k$());
      this.polymorphicDiscriminator_1 = null;
    }
    return encoder;
  };
  protoOf(FirebaseEncoder).encodeBoolean_tu2e59_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeByte_6txfee_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeChar_oxoup_k$ = function (value) {
    this.value_1 = new Char(value);
  };
  protoOf(FirebaseEncoder).encodeDouble_n270q9_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeEnum_2qin0y_k$ = function (enumDescriptor, index) {
    this.value_1 = enumDescriptor.getElementName_u4sqmf_k$(index);
  };
  protoOf(FirebaseEncoder).encodeFloat_b8b85a_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeInt_y5zi3z_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeLong_3didw_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeNotNullMark_415a1t_k$ = function () {
  };
  protoOf(FirebaseEncoder).encodeNull_ejiosz_k$ = function () {
    this.value_1 = null;
  };
  protoOf(FirebaseEncoder).encodeShort_gza6si_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeString_424b5v_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(FirebaseEncoder).encodeInline_wxp5pu_k$ = function (descriptor) {
    return this;
  };
  protoOf(FirebaseEncoder).encodeSerializableValue_3uuzip_k$ = function (serializer, value) {
    encodePolymorphically(this, serializer, value, FirebaseEncoder$encodeSerializableValue$lambda(this));
  };
  function ValueWithSerializer(value, serializer) {
    this.value_1 = value;
    this.serializer_1 = serializer;
  }
  protoOf(ValueWithSerializer).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(ValueWithSerializer).get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  protoOf(ValueWithSerializer).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(ValueWithSerializer).component2_7eebsb_k$ = function () {
    return this.serializer_1;
  };
  protoOf(ValueWithSerializer).copy_4wnnow_k$ = function (value, serializer) {
    return new ValueWithSerializer(value, serializer);
  };
  protoOf(ValueWithSerializer).copy$default_q5e22a_k$ = function (value, serializer, $super) {
    value = value === VOID ? this.value_1 : value;
    serializer = serializer === VOID ? this.serializer_1 : serializer;
    return $super === VOID ? this.copy_4wnnow_k$(value, serializer) : $super.copy_4wnnow_k$.call(this, value, serializer);
  };
  protoOf(ValueWithSerializer).toString = function () {
    return 'ValueWithSerializer(value=' + toString_0(this.value_1) + ', serializer=' + toString(this.serializer_1) + ')';
  };
  protoOf(ValueWithSerializer).hashCode = function () {
    var result = this.value_1 == null ? 0 : hashCode(this.value_1);
    result = imul(result, 31) + hashCode(this.serializer_1) | 0;
    return result;
  };
  protoOf(ValueWithSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ValueWithSerializer))
      return false;
    var tmp0_other_with_cast = other instanceof ValueWithSerializer ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.serializer_1, tmp0_other_with_cast.serializer_1))
      return false;
    return true;
  };
  function _get_settings__lbkut4($this) {
    return $this.settings_1;
  }
  function _get_end__e67thy($this) {
    return $this.end_1;
  }
  function _get_setPolymorphicType__vfa5st($this) {
    return $this.setPolymorphicType_1;
  }
  function _get_set__e6gl0v($this) {
    return $this.set_1;
  }
  function FirebaseCompositeEncoder$_init_$lambda_dbtx81() {
    return Unit_getInstance();
  }
  function FirebaseCompositeEncoder$_init_$lambda_dbtx81_0(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return Unit_getInstance();
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
    this.settings_1 = settings;
    this.end_1 = end;
    this.setPolymorphicType_1 = setPolymorphicType;
    this.set_1 = set;
    this.serializersModule_1 = this.settings_1.get_serializersModule_piitvg_k$();
  }
  protoOf(FirebaseCompositeEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(FirebaseCompositeEncoder).endStructure_1xqz0n_k$ = function (descriptor) {
    return this.end_1();
  };
  protoOf(FirebaseCompositeEncoder).shouldEncodeElementDefault_x8eyid_k$ = function (descriptor, index) {
    return this.settings_1.get_encodeDefaults_m8plkf_k$();
  };
  protoOf(FirebaseCompositeEncoder).encodeNullableSerializableElement_5lquiv_k$ = function (descriptor, index, serializer, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.FirebaseCompositeEncoder.encodeNullableSerializableElement.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new FirebaseEncoder(this.settings_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.FirebaseCompositeEncoder.encodeNullableSerializableElement.<anonymous>.<anonymous>' call
      this_0.encodeSerializableValue_3uuzip_k$(serializer, value);
      tmp = this_0.value_1;
    }
    return this.set_1(descriptor, index, tmp);
  };
  protoOf(FirebaseCompositeEncoder).encodeSerializableElement_isqxcl_k$ = function (descriptor, index, serializer, value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new FirebaseEncoder(this.settings_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.FirebaseCompositeEncoder.encodeSerializableElement.<anonymous>' call
    this_0.encodeSerializableValue_3uuzip_k$(serializer, value);
    return this.set_1(descriptor, index, this_0.value_1);
  };
  protoOf(FirebaseCompositeEncoder).encodeObject_p3t3lb_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeBooleanElement_ydht7q_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeByteElement_kft2ib_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeCharElement_fmv250_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, new Char(value));
  };
  protoOf(FirebaseCompositeEncoder).encodeDoubleElement_a6rqhe_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeFloatElement_oe8hn_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeIntElement_krhhce_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeLongElement_cega27_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeShortElement_4bcdph_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeStringElement_1n5wu2_k$ = function (descriptor, index, value) {
    return this.set_1(descriptor, index, value);
  };
  protoOf(FirebaseCompositeEncoder).encodeInlineElement_69jjkk_k$ = function (descriptor, index) {
    return new FirebaseEncoder(this.settings_1);
  };
  protoOf(FirebaseCompositeEncoder).encodePolymorphicClassDiscriminator_wtoaus_k$ = function (discriminator, type) {
    this.setPolymorphicType_1(discriminator, type);
  };
  function reencodeTransformation(strategy, value, builder, transform) {
    var tmp;
    if (builder === VOID) {
      tmp = reencodeTransformation$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new EncodeDecodeSettingsBuilderImpl();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    var encodeDecodeSettingsBuilder = this_0;
    var oldValue = decode_0(strategy, value, buildDecodeSettings(encodeDecodeSettingsBuilder));
    return encode_0(strategy, transform(oldValue), buildEncodeSettings(encodeDecodeSettingsBuilder));
  }
  function reencodeTransformation$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function FirebaseMapSerializer$descriptor$1(this$0) {
    this.this$0__1 = this$0;
    this.kind_1 = MAP_getInstance();
    this.serialName_1 = 'kotlin.Map<String, Any>';
  }
  protoOf(FirebaseMapSerializer$descriptor$1).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(FirebaseMapSerializer$descriptor$1).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(FirebaseMapSerializer$descriptor$1).get_elementsCount_288r0x_k$ = function () {
    return this.this$0__1.get_map_18j0ul_k$().get_size_woubt6_k$();
  };
  protoOf(FirebaseMapSerializer$descriptor$1).getElementIndex_utfbym_k$ = function (name) {
    return this.this$0__1.get_keys_wop4xp_k$().indexOf_si1fv9_k$(name);
  };
  protoOf(FirebaseMapSerializer$descriptor$1).getElementName_u4sqmf_k$ = function (index) {
    return this.this$0__1.get_keys_wop4xp_k$().get_c1px32_k$(index);
  };
  protoOf(FirebaseMapSerializer$descriptor$1).getElementAnnotations_omrjs6_k$ = function (index) {
    return emptyList();
  };
  protoOf(FirebaseMapSerializer$descriptor$1).getElementDescriptor_ncda77_k$ = function (index) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseMapSerializer$descriptor$1).isElementOptional_heqq56_k$ = function (index) {
    return false;
  };
  function FirebaseMapSerializer() {
    var tmp = this;
    tmp.descriptor_1 = new FirebaseMapSerializer$descriptor$1(this);
  }
  protoOf(FirebaseMapSerializer).set_keys_ueljxd_k$ = function (_set____db54di) {
    this.keys_1 = _set____db54di;
  };
  protoOf(FirebaseMapSerializer).get_keys_wop4xp_k$ = function () {
    var tmp = this.keys_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('keys');
    }
  };
  protoOf(FirebaseMapSerializer).set_map_fmfznl_k$ = function (_set____db54di) {
    this.map_1 = _set____db54di;
  };
  protoOf(FirebaseMapSerializer).get_map_18j0ul_k$ = function () {
    var tmp = this.map_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('map');
    }
  };
  protoOf(FirebaseMapSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(FirebaseMapSerializer).serialize_gjxfxt_k$ = function (encoder, value) {
    this.map_1 = value;
    this.keys_1 = toList(value.get_keys_wop4xp_k$());
    var collectionEncoder = encoder.beginCollection_9edss2_k$(this.descriptor_1, value.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.gitlive.firebase.internal.FirebaseMapSerializer.serialize.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var listValue = getValue(this.get_map_18j0ul_k$(), item);
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
          Companion_getInstance();
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          // Inline function 'kotlinx.serialization.serializer' call
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_0 = serializer(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), false));
          var value_0 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
          tmp_0 = _Result___init__impl__xyqfz8(value_0);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
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
      var tmp_6 = tmp1_elvis_lhs == null ? serializer_1(Unit_getInstance()) : tmp1_elvis_lhs;
      var serializer_3 = isInterface(tmp_6, KSerializer) ? tmp_6 : THROW_CCE();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var it = serializer_2(StringCompanionObject_getInstance());
      collectionEncoder.encodeSerializableElement_isqxcl_k$(it.get_descriptor_wjt6a0_k$(), imul(index_0, 2), it, item);
      collectionEncoder.encodeNullableSerializableElement_5lquiv_k$(serializer_3.get_descriptor_wjt6a0_k$(), imul(index_0, 2) + 1 | 0, serializer_3, listValue);
    }
    collectionEncoder.endStructure_1xqz0n_k$(this.descriptor_1);
  };
  protoOf(FirebaseMapSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_gjxfxt_k$(encoder, (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE());
  };
  protoOf(FirebaseMapSerializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp = decoder.beginStructure_yljocp_k$(this.descriptor_1);
    var collectionDecoder = tmp instanceof FirebaseCompositeDecoder ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    var progression = step(until(0, imul(collectionDecoder.decodeCollectionSize_l3mlkk_k$(this.descriptor_1), 2)), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
      }
       while (!(index === last));
    return map;
  };
  function FirebaseListSerializer$descriptor$1(this$0) {
    this.this$0__1 = this$0;
    this.kind_1 = LIST_getInstance();
    this.serialName_1 = 'kotlin.List<Any>';
  }
  protoOf(FirebaseListSerializer$descriptor$1).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(FirebaseListSerializer$descriptor$1).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(FirebaseListSerializer$descriptor$1).get_elementsCount_288r0x_k$ = function () {
    return this.this$0__1.get_list_wopuqv_k$().get_size_woubt6_k$();
  };
  protoOf(FirebaseListSerializer$descriptor$1).getElementIndex_utfbym_k$ = function (name) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseListSerializer$descriptor$1).getElementName_u4sqmf_k$ = function (index) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseListSerializer$descriptor$1).getElementAnnotations_omrjs6_k$ = function (index) {
    return emptyList();
  };
  protoOf(FirebaseListSerializer$descriptor$1).getElementDescriptor_ncda77_k$ = function (index) {
    throw new NotImplementedError();
  };
  protoOf(FirebaseListSerializer$descriptor$1).isElementOptional_heqq56_k$ = function (index) {
    return false;
  };
  function FirebaseListSerializer() {
    var tmp = this;
    tmp.descriptor_1 = new FirebaseListSerializer$descriptor$1(this);
  }
  protoOf(FirebaseListSerializer).set_list_x101vv_k$ = function (_set____db54di) {
    this.list_1 = _set____db54di;
  };
  protoOf(FirebaseListSerializer).get_list_wopuqv_k$ = function () {
    var tmp = this.list_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('list');
    }
  };
  protoOf(FirebaseListSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(FirebaseListSerializer).serialize_vyo4dd_k$ = function (encoder, value) {
    this.list_1 = toList(value);
    var collectionEncoder = encoder.beginCollection_9edss2_k$(this.descriptor_1, this.get_list_wopuqv_k$().get_size_woubt6_k$());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.get_list_wopuqv_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
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
          Companion_getInstance();
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          // Inline function 'kotlinx.serialization.serializer' call
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_0 = serializer(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), false));
          var value_0 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
          tmp_0 = _Result___init__impl__xyqfz8(value_0);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
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
      var tmp_6 = tmp1_elvis_lhs == null ? serializer_1(Unit_getInstance()) : tmp1_elvis_lhs;
      var serializer_2 = isInterface(tmp_6, KSerializer) ? tmp_6 : THROW_CCE();
      collectionEncoder.encodeNullableSerializableElement_5lquiv_k$(serializer_2.get_descriptor_wjt6a0_k$(), index_0, serializer_2, item);
    }
    collectionEncoder.endStructure_1xqz0n_k$(this.descriptor_1);
  };
  protoOf(FirebaseListSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_vyo4dd_k$(encoder, (!(value == null) ? isInterface(value, Iterable) : false) ? value : THROW_CCE());
  };
  protoOf(FirebaseListSerializer).deserialize_sy6x50_k$ = function (decoder) {
    throw new NotImplementedError();
  };
  function get_js(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = getRaw(_this__u8e3s4).get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.gitlive.firebase.internal.<get-js>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = item.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = item.get_value_j01efc_k$();
      var tmp$ret$2 = to(key, value);
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    var tmp$ret$5 = copyToArray(destination);
    return json(tmp$ret$5.slice());
  }
  function asNativeMap(_this__u8e3s4) {
    var tmp;
    if (isNumber(_this__u8e3s4)) {
      tmp = null;
    } else {
      if (typeof _this__u8e3s4 === 'boolean') {
        tmp = null;
      } else {
        if (typeof _this__u8e3s4 === 'string') {
          tmp = null;
        } else {
          if (isInterface(_this__u8e3s4, KtMap)) {
            var tmp_0;
            var tmp$ret$0;
            $l$block_0: {
              // Inline function 'kotlin.collections.all' call
              var this_0 = _this__u8e3s4.get_keys_wop4xp_k$();
              var tmp_1;
              if (isInterface(this_0, Collection)) {
                tmp_1 = this_0.isEmpty_y1axqb_k$();
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
              var tmp0_iterator = this_0.iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'dev.gitlive.firebase.internal.asNativeMap.<anonymous>' call
                if (!(!(element == null) ? typeof element === 'string' : false)) {
                  tmp$ret$0 = false;
                  break $l$block_0;
                }
              }
              tmp$ret$0 = true;
            }
            if (tmp$ret$0) {
              // Inline function 'kotlin.collections.toTypedArray' call
              // Inline function 'kotlin.collections.mapKeys' call
              // Inline function 'kotlin.collections.mapKeysTo' call
              var destination = LinkedHashMap_init_$Create$_0(mapCapacity(_this__u8e3s4.get_size_woubt6_k$()));
              // Inline function 'kotlin.collections.associateByTo' call
              var tmp0_iterator_0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var element_0 = tmp0_iterator_0.next_20eer_k$();
                // Inline function 'dev.gitlive.firebase.internal.asNativeMap.<anonymous>' call
                // Inline function 'kotlin.collections.component1' call
                var key = element_0.get_key_18j28a_k$();
                var tmp_2 = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
                // Inline function 'kotlin.collections.mapKeysTo.<anonymous>' call
                var tmp$ret$4 = element_0.get_value_j01efc_k$();
                destination.put_4fpzoq_k$(tmp_2, tmp$ret$4);
              }
              var this_1 = toList_0(destination);
              var tmp$ret$8 = copyToArray(this_1);
              tmp_0 = json(tmp$ret$8.slice());
            } else {
              tmp_0 = null;
            }
            tmp = tmp_0;
          } else {
            if (isInterface(_this__u8e3s4, Collection)) {
              tmp = null;
            } else {
              if (isArray(_this__u8e3s4)) {
                tmp = null;
              } else {
                tmp = !(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE();
              }
            }
          }
        }
      }
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_3;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    var json_0 = tmp_3;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var mutableMap = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = iterator(Object.keys(json_0));
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var key_0 = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      var value = json_0[key_0];
      mutableMap.put_4fpzoq_k$(key_0, value);
    }
    return toMap_0(mutableMap);
  }
  function structureDecoder(_this__u8e3s4, descriptor, polymorphicIsNested) {
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    if (equals(tmp0_subject, CLASS_getInstance()) || equals(tmp0_subject, OBJECT_getInstance())) {
      tmp = decodeAsMap(_this__u8e3s4, false);
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = decodeAsList(_this__u8e3s4);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlin.let' call
          var tmp_0 = Object.entries(_this__u8e3s4.get_value_j01efc_k$());
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.internal.structureDecoder.<anonymous>' call
          var it = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
          var tmp_1 = it.length;
          var tmp_2 = _this__u8e3s4.get_settings_6ur9ef_k$();
          tmp = new FirebaseCompositeDecoder(tmp_1, tmp_2, structureDecoder$lambda(it));
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
    var tmp = _this__u8e3s4.get_value_j01efc_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.decodeAsMap.<anonymous>' call
    var json = (!(tmp == null) ? !(tmp == null) : false) ? tmp : THROW_CCE();
    var tmp_0 = Object.keys(_this__u8e3s4.get_value_j01efc_k$()).length;
    var tmp_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_2 = _this__u8e3s4.get_settings_6ur9ef_k$();
    var tmp_3 = decodeAsMap$lambda(json);
    return new FirebaseClassDecoder(tmp_1, tmp_2, tmp_3, decodeAsMap$lambda_0(isNestedPolymorphic, json));
  }
  function decodeAsList(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    var tmp = _this__u8e3s4.get_value_j01efc_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.decodeAsList.<anonymous>' call
    var it = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp_0 = it.length;
    var tmp_1 = _this__u8e3s4.get_settings_6ur9ef_k$();
    return new FirebaseCompositeDecoder(tmp_0, tmp_1, decodeAsList$lambda(it));
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
        if (equals(desc.getElementDescriptor_ncda77_k$(index).get_kind_wop7ml_k$(), STRING_getInstance())) {
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
        if (desc.getElementName_u4sqmf_k$(index) === 'value') {
          tmp_0 = $json;
        } else {
          tmp_0 = $json[desc.getElementName_u4sqmf_k$(index)];
        }
        tmp = tmp_0;
      } else {
        tmp = $json[desc.getElementName_u4sqmf_k$(index)];
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
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = encodeAsList(_this__u8e3s4, descriptor);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var map = json([]);
        var lastKey = {_v: ''};
        _this__u8e3s4.set_value_rjqr2d_k$(map);
        var tmp_0 = _this__u8e3s4.get_settings_6ur9ef_k$();
        tmp = new FirebaseCompositeEncoder(tmp_0, VOID, VOID, structureEncoder$lambda(lastKey, map));
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
    var tmp_0 = descriptor.get_elementsCount_288r0x_k$();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = null;
      tmp = tmp + 1 | 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsList.<anonymous>' call
    _this__u8e3s4.set_value_rjqr2d_k$(tmp_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsList.<anonymous>' call
    var tmp_2 = _this__u8e3s4.get_settings_6ur9ef_k$();
    return new FirebaseCompositeEncoder(tmp_2, VOID, VOID, encodeAsList$lambda(tmp_1));
  }
  function encodeAsMap(_this__u8e3s4, descriptor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.also' call
    var this_0 = json([]);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsMap.<anonymous>' call
    _this__u8e3s4.set_value_rjqr2d_k$(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.internal.encodeAsMap.<anonymous>' call
    var tmp = _this__u8e3s4.get_settings_6ur9ef_k$();
    var tmp_0 = encodeAsMap$lambda(this_0);
    return new FirebaseCompositeEncoder(tmp, VOID, tmp_0, encodeAsMap$lambda_0(this_0, descriptor));
  }
  function structureEncoder$lambda($lastKey, $map) {
    return function (_unused_var__etf5q3, index, value) {
      var tmp;
      if ((index % 2 | 0) === 0) {
        var tmp0_elvis_lhs = (!(value == null) ? typeof value === 'string' : false) ? value : null;
        $lastKey._v = tmp0_elvis_lhs == null ? JSON.stringify(value) : tmp0_elvis_lhs;
        tmp = Unit_getInstance();
      } else {
        $map[$lastKey._v] = value;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function encodeAsList$lambda($it) {
    return function (_unused_var__etf5q3, index, value) {
      $it[index] = value;
      return Unit_getInstance();
    };
  }
  function encodeAsMap$lambda($it) {
    return function (discriminator, type) {
      $it[discriminator] = type;
      return Unit_getInstance();
    };
  }
  function encodeAsMap$lambda_0($it, $descriptor) {
    return function (_unused_var__etf5q3, index, value) {
      $it[$descriptor.getElementName_u4sqmf_k$(index)] = value;
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(FirebaseDecoder).decodeNullableSerializableValue_sc8iki_k$ = decodeNullableSerializableValue;
  protoOf(FirebaseCompositeDecoder).decodeSerializableElement$default_j0zaoi_k$ = decodeSerializableElement$default;
  protoOf(FirebaseCompositeDecoder).decodeNullableSerializableElement$default_q1b6sc_k$ = decodeNullableSerializableElement$default;
  protoOf(FirebaseEncoder).beginCollection_9edss2_k$ = beginCollection;
  protoOf(FirebaseEncoder).encodeNullableSerializableValue_ibrab1_k$ = encodeNullableSerializableValue;
  protoOf(FirebaseMapSerializer$descriptor$1).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(FirebaseMapSerializer$descriptor$1).get_isInline_usk17w_k$ = get_isInline;
  protoOf(FirebaseMapSerializer$descriptor$1).get_annotations_20dirp_k$ = get_annotations;
  protoOf(FirebaseListSerializer$descriptor$1).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(FirebaseListSerializer$descriptor$1).get_isInline_usk17w_k$ = get_isInline;
  protoOf(FirebaseListSerializer$descriptor$1).get_annotations_20dirp_k$ = get_annotations;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Builder_2;
  _.$_$.b = EncodeDecodeSettingsBuilderImpl;
  _.$_$.c = Builder_1;
  _.$_$.d = FirebaseEncoder;
  _.$_$.e = FirebaseListSerializer;
  _.$_$.f = FirebaseMapSerializer;
  _.$_$.g = ValueWithSerializer;
  _.$_$.h = asEncodedObject;
  _.$_$.i = asNativeMap;
  _.$_$.j = buildDecodeSettings;
  _.$_$.k = buildEncodeSettings;
  _.$_$.l = decode_0;
  _.$_$.m = encode_0;
  _.$_$.n = get_js;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-common-internal.js.map
