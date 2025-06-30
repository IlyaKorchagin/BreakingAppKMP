(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.j;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.r5;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var emptyList = kotlin_kotlin.$_$.o8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.n;
  var lazy = kotlin_kotlin.$_$.pl;
  var toString = kotlin_kotlin.$_$.jf;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.h2;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var captureStack = kotlin_kotlin.$_$.fd;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.j2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.l2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ek;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var KClass = kotlin_kotlin.$_$.jg;
  var isInterface = kotlin_kotlin.$_$.oe;
  var Triple = kotlin_kotlin.$_$.rk;
  var getKClass = kotlin_kotlin.$_$.g;
  var Pair = kotlin_kotlin.$_$.mk;
  var Entry = kotlin_kotlin.$_$.x6;
  var KtMap = kotlin_kotlin.$_$.y6;
  var KtMutableMap = kotlin_kotlin.$_$.c7;
  var LinkedHashMap = kotlin_kotlin.$_$.u6;
  var HashMap = kotlin_kotlin.$_$.r6;
  var KtSet = kotlin_kotlin.$_$.f7;
  var KtMutableSet = kotlin_kotlin.$_$.d7;
  var LinkedHashSet = kotlin_kotlin.$_$.v6;
  var HashSet = kotlin_kotlin.$_$.s6;
  var Collection = kotlin_kotlin.$_$.q6;
  var KtList = kotlin_kotlin.$_$.w6;
  var KtMutableList = kotlin_kotlin.$_$.a7;
  var ArrayList = kotlin_kotlin.$_$.p6;
  var copyToArray = kotlin_kotlin.$_$.k8;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.a4;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var Result = kotlin_kotlin.$_$.nk;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var equals = kotlin_kotlin.$_$.od;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var Iterable = kotlin_kotlin.$_$.t6;
  var isBlank = kotlin_kotlin.$_$.vh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var toList = kotlin_kotlin.$_$.sb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.a1;
  var toHashSet = kotlin_kotlin.$_$.ob;
  var toBooleanArray = kotlin_kotlin.$_$.lb;
  var withIndex = kotlin_kotlin.$_$.ac;
  var to = kotlin_kotlin.$_$.dm;
  var toMap = kotlin_kotlin.$_$.vb;
  var lazy_0 = kotlin_kotlin.$_$.ql;
  var contentEquals = kotlin_kotlin.$_$.t7;
  var until = kotlin_kotlin.$_$.ig;
  var joinToString = kotlin_kotlin.$_$.n9;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var Char = kotlin_kotlin.$_$.xj;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.l3;
  var Duration = kotlin_kotlin.$_$.pj;
  var Companion_getInstance = kotlin_kotlin.$_$.w5;
  var Uuid = kotlin_kotlin.$_$.tj;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.y5;
  var toIntOrNull = kotlin_kotlin.$_$.bj;
  var hashCode = kotlin_kotlin.$_$.xd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.u;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var isArray = kotlin_kotlin.$_$.ge;
  var arrayIterator = kotlin_kotlin.$_$.dd;
  var asList = kotlin_kotlin.$_$.j7;
  var step = kotlin_kotlin.$_$.hg;
  var getValue = kotlin_kotlin.$_$.f9;
  var indexOf = kotlin_kotlin.$_$.g9;
  var contentToString = kotlin_kotlin.$_$.y7;
  var Enum = kotlin_kotlin.$_$.bk;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.z;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var KTypeParameter = kotlin_kotlin.$_$.og;
  var contentHashCode = kotlin_kotlin.$_$.w7;
  var booleanArray = kotlin_kotlin.$_$.ed;
  var emptyMap = kotlin_kotlin.$_$.p8;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.z5;
  var isCharArray = kotlin_kotlin.$_$.je;
  var charArray = kotlin_kotlin.$_$.hd;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.n5;
  var isDoubleArray = kotlin_kotlin.$_$.le;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var isFloatArray = kotlin_kotlin.$_$.me;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.a6;
  var isLongArray = kotlin_kotlin.$_$.pe;
  var longArray = kotlin_kotlin.$_$.we;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.e6;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.y4;
  var ULongArray = kotlin_kotlin.$_$.wk;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.u4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.w4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.p5;
  var isIntArray = kotlin_kotlin.$_$.ne;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.d6;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.p4;
  var UIntArray = kotlin_kotlin.$_$.uk;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.l4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.j4;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.n4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.k4;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.q5;
  var isShortArray = kotlin_kotlin.$_$.re;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.f6;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.g5;
  var UShortArray = kotlin_kotlin.$_$.yk;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.c5;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.a5;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.e5;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.b5;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.m5;
  var isByteArray = kotlin_kotlin.$_$.ie;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.c6;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.h4;
  var UByteArray = kotlin_kotlin.$_$.sk;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.e4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.b4;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.f4;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.c4;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.l5;
  var isBooleanArray = kotlin_kotlin.$_$.he;
  var coerceAtLeast = kotlin_kotlin.$_$.vf;
  var copyOf = kotlin_kotlin.$_$.e8;
  var copyOf_0 = kotlin_kotlin.$_$.g8;
  var copyOf_1 = kotlin_kotlin.$_$.h8;
  var copyOf_2 = kotlin_kotlin.$_$.c8;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.z4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.v4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.x4;
  var copyOf_3 = kotlin_kotlin.$_$.j8;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.q4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.m4;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.o4;
  var copyOf_4 = kotlin_kotlin.$_$.b8;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.h5;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.d5;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.f5;
  var copyOf_5 = kotlin_kotlin.$_$.f8;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.i4;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.d4;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.g4;
  var copyOf_6 = kotlin_kotlin.$_$.d8;
  var Long = kotlin_kotlin.$_$.hk;
  var Unit = kotlin_kotlin.$_$.al;
  var trimIndent = kotlin_kotlin.$_$.kj;
  var ULong = kotlin_kotlin.$_$.xk;
  var UInt = kotlin_kotlin.$_$.vk;
  var UShort = kotlin_kotlin.$_$.zk;
  var UByte = kotlin_kotlin.$_$.tk;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var mapOf = kotlin_kotlin.$_$.fa;
  var get_js = kotlin_kotlin.$_$.te;
  var findAssociatedObject = kotlin_kotlin.$_$.e;
  var get_indices = kotlin_kotlin.$_$.k9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var get_indices_0 = kotlin_kotlin.$_$.i9;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.il;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Iterable]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, [Iterable]);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.s4k(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.n4i(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.m4i().l4j();
    if (isNullabilitySupported) {
      return this.t4l(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.w4k();
    } else {
      this.x4l();
      this.t4l(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder]);
  function decodeSerializableValue(deserializer) {
    return deserializer.o4i(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.a4n(descriptor, index, deserializer, previousValue) : $super.a4n.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.x4i('type', serializer_2(StringCompanionObject_instance).m4i());
      $this$buildSerialDescriptor.x4i('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.y4i_1.pb() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.r4i_1 = this$0.z4i_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.y4i_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.y4i_1 = baseClass;
    this.z4i_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.a4j_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).b4j = function () {
    return this.y4i_1;
  };
  protoOf(PolymorphicSerializer).m4i = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.a4j_1;
    descriptor$factory();
    return this_0.c1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.y4i_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.e4j(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.b4j());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.d4j(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.b4j());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.m4i();
    }, null);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_1(message, cause) {
    var tmp = SerializationException_init_$Init$_1(message, cause, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_1);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.p() === 1 ? "Field '" + missingFields.u(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.f4j_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.m();
      while (tmp0_iterator.n()) {
        var item = tmp0_iterator.o();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.m();
      while (tmp0_iterator_0.n()) {
        var item_0 = tmp0_iterator_0.o();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.e(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.u(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.u(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.u(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.u(0), serializers.u(1), serializers.u(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.u(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.gc();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.fc();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      var tmp$ret$0 = typeOrThrow(item);
      destination.e(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.j()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.h4j(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.g4j()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.j()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.h4j(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.i4j(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializer_1(type) {
    return serializer(EmptySerializersModule_0(), type);
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.u(0).ec();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().j4j(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().j4j(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().k4j(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().k4j(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.u(0).ec();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.u(0).ec();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.m4i().l4j()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_17(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.m4j_1 = original;
    this.n4j_1 = kClass;
    this.o4j_1 = this.m4j_1.p4j() + '<' + this.n4j_1.pb() + '>';
  }
  protoOf(ContextDescriptor).p4j = function () {
    return this.o4j_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.m4j_1, another.m4j_1) && another.n4j_1.equals(this.n4j_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.n4j_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.o4j_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.n4j_1) + ', original: ' + toString(this.m4j_1) + ')';
  };
  protoOf(ContextDescriptor).q4j = function () {
    return this.m4j_1.q4j();
  };
  protoOf(ContextDescriptor).l4j = function () {
    return this.m4j_1.l4j();
  };
  protoOf(ContextDescriptor).r4j = function () {
    return this.m4j_1.r4j();
  };
  protoOf(ContextDescriptor).s4j = function () {
    return this.m4j_1.s4j();
  };
  protoOf(ContextDescriptor).t4j = function () {
    return this.m4j_1.t4j();
  };
  protoOf(ContextDescriptor).u4j = function (index) {
    return this.m4j_1.u4j(index);
  };
  protoOf(ContextDescriptor).v4j = function (name) {
    return this.m4j_1.v4j(name);
  };
  protoOf(ContextDescriptor).w4j = function (index) {
    return this.m4j_1.w4j(index);
  };
  protoOf(ContextDescriptor).x4j = function (index) {
    return this.m4j_1.x4j(index);
  };
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.z4j_1 = $this_elementDescriptors;
    this.y4j_1 = $this_elementDescriptors.s4j();
  }
  protoOf(elementDescriptors$1).n = function () {
    return this.y4j_1 > 0;
  };
  protoOf(elementDescriptors$1).o = function () {
    var tmp = this.z4j_1.s4j();
    var _unary__edvuaz = this.y4j_1;
    this.y4j_1 = _unary__edvuaz - 1 | 0;
    return this.z4j_1.w4j(tmp - _unary__edvuaz | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.a4k_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).m = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.a4k_1);
  };
  function elementNames$1($this_elementNames) {
    this.c4k_1 = $this_elementNames;
    this.b4k_1 = $this_elementNames.s4j();
  }
  protoOf(elementNames$1).n = function () {
    return this.b4k_1 > 0;
  };
  protoOf(elementNames$1).o = function () {
    var tmp = this.c4k_1.s4j();
    var _unary__edvuaz = this.b4k_1;
    this.b4k_1 = _unary__edvuaz - 1 | 0;
    return this.c4k_1.u4j(tmp - _unary__edvuaz | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.d4k_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).m = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.d4k_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.s4i_1.p(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.p4i_1 = serialName;
    this.q4i_1 = false;
    this.r4i_1 = emptyList();
    this.s4i_1 = ArrayList_init_$Create$_0();
    this.t4i_1 = HashSet_init_$Create$();
    this.u4i_1 = ArrayList_init_$Create$_0();
    this.v4i_1 = ArrayList_init_$Create$_0();
    this.w4i_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).e4k = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.t4i_1.e(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.p4i_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.s4i_1.e(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.u4i_1.e(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.v4i_1.e(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.w4i_1.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).x4i = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.e4k(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.e4k.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.q4k_1;
    _hashCode$factory();
    return this_0.c1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.p4k_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.u4j(it) + ': ' + this$0.w4j(it).p4j();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.f4k_1 = serialName;
    this.g4k_1 = kind;
    this.h4k_1 = elementsCount;
    this.i4k_1 = builder.r4i_1;
    this.j4k_1 = toHashSet(builder.s4i_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.s4i_1;
    tmp.k4k_1 = copyToArray(this_0);
    this.l4k_1 = compactArray(builder.u4i_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.v4i_1;
    tmp_0.m4k_1 = copyToArray(this_1);
    this.n4k_1 = toBooleanArray(builder.w4i_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.k4k_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.fh_1, item.eh_1);
      destination.e(tmp$ret$2);
    }
    tmp_1.o4k_1 = toMap(destination);
    this.p4k_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.q4k_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).p4j = function () {
    return this.f4k_1;
  };
  protoOf(SerialDescriptorImpl).q4j = function () {
    return this.g4k_1;
  };
  protoOf(SerialDescriptorImpl).s4j = function () {
    return this.h4k_1;
  };
  protoOf(SerialDescriptorImpl).t4j = function () {
    return this.i4k_1;
  };
  protoOf(SerialDescriptorImpl).r4k = function () {
    return this.j4k_1;
  };
  protoOf(SerialDescriptorImpl).u4j = function (index) {
    return getChecked(this.k4k_1, index);
  };
  protoOf(SerialDescriptorImpl).v4j = function (name) {
    var tmp0_elvis_lhs = this.o4k_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).w4j = function (index) {
    return getChecked(this.l4k_1, index);
  };
  protoOf(SerialDescriptorImpl).x4j = function (index) {
    return getChecked_0(this.n4k_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.p4j() === other.p4j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.p4k_1, other.p4k_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.s4j() === other.s4j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.s4j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.w4j(index).p4j() === other.w4j(index).p4j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.w4j(index).q4j(), other.w4j(index).q4j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.h4k_1);
    var tmp_0 = this.f4k_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.s4i_1.p(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).pb());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).s4k = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).t4k = function (descriptor) {
  };
  protoOf(AbstractEncoder).u4k = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).v4k = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).w4k = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).x4k = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).y4k = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).z4k = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).a4l = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).b4l = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).c4l = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).d4l = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).e4l = function (value) {
    return this.v4k(new Char(value));
  };
  protoOf(AbstractEncoder).f4l = function (value) {
    return this.v4k(value);
  };
  protoOf(AbstractEncoder).g4l = function (enumDescriptor, index) {
    return this.v4k(index);
  };
  protoOf(AbstractEncoder).h4l = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).i4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.x4k(value);
    }
  };
  protoOf(AbstractEncoder).j4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.y4k(value);
    }
  };
  protoOf(AbstractEncoder).k4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.z4k(value);
    }
  };
  protoOf(AbstractEncoder).l4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.a4l(value);
    }
  };
  protoOf(AbstractEncoder).m4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.b4l(value);
    }
  };
  protoOf(AbstractEncoder).n4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.c4l(value);
    }
  };
  protoOf(AbstractEncoder).o4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.d4l(value);
    }
  };
  protoOf(AbstractEncoder).p4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.e4l(value);
    }
  };
  protoOf(AbstractEncoder).q4l = function (descriptor, index, value) {
    if (this.u4k(descriptor, index)) {
      this.f4l(value);
    }
  };
  protoOf(AbstractEncoder).r4l = function (descriptor, index) {
    return this.u4k(descriptor, index) ? this.h4l(descriptor.w4j(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).s4l = function (descriptor, index, serializer, value) {
    if (this.u4k(descriptor, index)) {
      this.t4l(serializer, value);
    }
  };
  protoOf(AbstractEncoder).u4l = function (descriptor, index, serializer, value) {
    if (this.u4k(descriptor, index)) {
      this.v4l(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.y4m($this.m4i(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.b4n($this.m4i(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).c4j = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.m4i();
    var composite = encoder.s4k(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.q4l(this.m4i(), 0, actualSerializer.m4i().p4j());
    var tmp = this.m4i();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.s4l(tmp, 1, tmp$ret$0, value);
    composite.t4k(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).n4i = function (encoder, value) {
    return this.c4j(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).o4i = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.m4i();
    var composite = decoder.s4k(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.n4m()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.o4m(this.m4i());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.y4m(this.m4i(), index);
            break;
          case 1:
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              var value_0 = klassName;
              // Inline function 'kotlin.contracts.contract' call
              if (value_0 == null) {
                // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = value_0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.b4n(this.m4i(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.t4k(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).d4j = function (decoder, klassName) {
    return decoder.w4l().c4n(this.b4j(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).e4j = function (encoder, value) {
    return encoder.w4l().d4n(this.b4j(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.pb();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.pb() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.pb() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.e4n_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).m4i = function () {
    return this.e4n_1;
  };
  protoOf(NothingSerializer_0).f4n = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).n4i = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.f4n(encoder, tmp);
  };
  protoOf(NothingSerializer_0).o4i = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.g4n_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).m4i = function () {
    return this.g4n_1;
  };
  protoOf(DurationSerializer).h4n = function (encoder, value) {
    encoder.f4l(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).n4i = function (encoder, value) {
    return this.h4n(encoder, value instanceof Duration ? value.nf_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).i4n = function (decoder) {
    return Companion_getInstance().hn(decoder.j4m());
  };
  protoOf(DurationSerializer).o4i = function (decoder) {
    return new Duration(this.i4n(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.j4n_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).m4i = function () {
    return this.j4n_1;
  };
  protoOf(UuidSerializer).k4n = function (encoder, value) {
    encoder.f4l(value.toString());
  };
  protoOf(UuidSerializer).n4i = function (encoder, value) {
    return this.k4n(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).o4i = function (decoder) {
    return Companion_getInstance_0().co(decoder.j4m());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).p4j = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).p4j = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).p4j = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).p4j = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.n4n_1 = elementDescriptor;
    this.o4n_1 = 1;
  }
  protoOf(ListLikeDescriptor).q4j = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).s4j = function () {
    return this.o4n_1;
  };
  protoOf(ListLikeDescriptor).u4j = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).v4j = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).x4j = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.p4j() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).w4j = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.p4j() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.n4n_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.n4n_1, other.n4n_1) && this.p4j() === other.p4j())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.n4n_1), 31) + getStringHashCode(this.p4j()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.p4j() + '(' + toString(this.n4n_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.t4n_1 = serialName;
    this.u4n_1 = keyDescriptor;
    this.v4n_1 = valueDescriptor;
    this.w4n_1 = 2;
  }
  protoOf(MapLikeDescriptor).p4j = function () {
    return this.t4n_1;
  };
  protoOf(MapLikeDescriptor).q4j = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).s4j = function () {
    return this.w4n_1;
  };
  protoOf(MapLikeDescriptor).u4j = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).v4j = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).x4j = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.p4j() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).w4j = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.p4j() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.u4n_1;
        break;
      case 1:
        tmp = this.v4n_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.p4j() === other.p4j()))
      return false;
    if (!equals(this.u4n_1, other.u4n_1))
      return false;
    if (!equals(this.v4n_1, other.v4n_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.p4j());
    result = imul(31, result) + hashCode(this.u4n_1) | 0;
    result = imul(31, result) + hashCode(this.v4n_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.p4j() + '(' + toString(this.u4n_1) + ', ' + toString(this.v4n_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.b4o_1 = primitive.p4j() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).p4j = function () {
    return this.b4o_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.d4o_1 = new ArrayListClassDesc(element.m4i());
  }
  protoOf(ArrayListSerializer).m4i = function () {
    return this.d4o_1;
  };
  protoOf(ArrayListSerializer).z2t = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).e4o = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(ArrayListSerializer).f4o = function (_this__u8e3s4) {
    return this.e4o(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).g4o = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).h4o = function (_this__u8e3s4) {
    return this.g4o(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).i4o = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).j4o = function (_this__u8e3s4) {
    return this.i4o((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).k4o = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c6(size);
  };
  protoOf(ArrayListSerializer).l4o = function (_this__u8e3s4, size) {
    return this.k4o(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).m4o = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.w2(index, element);
  };
  protoOf(ArrayListSerializer).n4o = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.m4o(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.y4o_1 = new HashSetClassDesc(eSerializer.m4i());
  }
  protoOf(HashSetSerializer).m4i = function () {
    return this.y4o_1;
  };
  protoOf(HashSetSerializer).z2t = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).z4o = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(HashSetSerializer).f4o = function (_this__u8e3s4) {
    return this.z4o(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).a4p = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).h4o = function (_this__u8e3s4) {
    return this.a4p(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).b4p = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).j4o = function (_this__u8e3s4) {
    return this.b4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).c4p = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).l4o = function (_this__u8e3s4, size) {
    return this.c4p(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).d4p = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(HashSetSerializer).n4o = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.d4p(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.f4p_1 = new LinkedHashSetClassDesc(eSerializer.m4i());
  }
  protoOf(LinkedHashSetSerializer).m4i = function () {
    return this.f4p_1;
  };
  protoOf(LinkedHashSetSerializer).z2t = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).g4p = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(LinkedHashSetSerializer).f4o = function (_this__u8e3s4) {
    return this.g4p(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).h4p = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).h4o = function (_this__u8e3s4) {
    return this.h4p(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).b4p = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).j4o = function (_this__u8e3s4) {
    return this.b4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).i4p = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).l4o = function (_this__u8e3s4, size) {
    return this.i4p(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).j4p = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(LinkedHashSetSerializer).n4o = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.j4p(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.m4p_1 = new HashMapClassDesc(kSerializer.m4i(), vSerializer.m4i());
  }
  protoOf(HashMapSerializer).m4i = function () {
    return this.m4p_1;
  };
  protoOf(HashMapSerializer).n4p = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(HashMapSerializer).o4p = function (_this__u8e3s4) {
    return this.n4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).p4p = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.a1().m();
  };
  protoOf(HashMapSerializer).q4p = function (_this__u8e3s4) {
    return this.p4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).z2t = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).r4p = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.p(), 2);
  };
  protoOf(HashMapSerializer).f4o = function (_this__u8e3s4) {
    return this.r4p(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).s4p = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).h4o = function (_this__u8e3s4) {
    return this.s4p(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).t4p = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).j4o = function (_this__u8e3s4) {
    return this.t4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).u4p = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).l4o = function (_this__u8e3s4, size) {
    return this.u4p(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.b4q_1 = new LinkedHashMapClassDesc(kSerializer.m4i(), vSerializer.m4i());
  }
  protoOf(LinkedHashMapSerializer).m4i = function () {
    return this.b4q_1;
  };
  protoOf(LinkedHashMapSerializer).n4p = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(LinkedHashMapSerializer).o4p = function (_this__u8e3s4) {
    return this.n4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).p4p = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.a1().m();
  };
  protoOf(LinkedHashMapSerializer).q4p = function (_this__u8e3s4) {
    return this.p4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).z2t = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).c4q = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.p(), 2);
  };
  protoOf(LinkedHashMapSerializer).f4o = function (_this__u8e3s4) {
    return this.c4q(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).d4q = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).h4o = function (_this__u8e3s4) {
    return this.d4q(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).t4p = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).j4o = function (_this__u8e3s4) {
    return this.t4p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).e4q = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).l4o = function (_this__u8e3s4, size) {
    return this.e4q(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.g4q_1 = kClass;
    this.h4q_1 = new ArrayClassDesc(eSerializer.m4i());
  }
  protoOf(ReferenceArraySerializer).m4i = function () {
    return this.h4q_1;
  };
  protoOf(ReferenceArraySerializer).i4q = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).o4p = function (_this__u8e3s4) {
    return this.i4q((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).j4q = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).q4p = function (_this__u8e3s4) {
    return this.j4q((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).z2t = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).k4q = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(ReferenceArraySerializer).f4o = function (_this__u8e3s4) {
    return this.k4q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).l4q = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.g4q_1);
  };
  protoOf(ReferenceArraySerializer).h4o = function (_this__u8e3s4) {
    return this.l4q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).m4q = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).j4o = function (_this__u8e3s4) {
    return this.m4q((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).n4q = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c6(size);
  };
  protoOf(ReferenceArraySerializer).l4o = function (_this__u8e3s4, size) {
    return this.n4q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).o4q = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.w2(index, element);
  };
  protoOf(ReferenceArraySerializer).n4o = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.o4q(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).p4o = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(CollectionSerializer).o4p = function (_this__u8e3s4) {
    return this.p4o((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).q4o = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(CollectionSerializer).q4p = function (_this__u8e3s4) {
    return this.q4o((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.v4p_1 = keySerializer;
    this.w4p_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).x4p = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    var step_0 = progression.k1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.y4p(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).t4o = function (decoder, builder, startIndex, size) {
    return this.x4p(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).y4p = function (decoder, index, builder, checkIndex) {
    var key = decoder.b4n(this.m4i(), index, this.v4p_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.o4m(this.m4i());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.q2(key)) {
      var tmp_2 = this.w4p_1.m4i().q4j();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.a4n(this.m4i(), vIndex, this.w4p_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.b4n(this.m4i(), vIndex, this.w4p_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.k2(key, value);
  };
  protoOf(MapLikeSerializer).u4o = function (decoder, index, builder, checkIndex) {
    return this.y4p(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).s4o = function (encoder, value) {
    var size = this.o4p(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.m4i();
    var composite = encoder.y4l(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q4p(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.c1();
      var tmp = this.m4i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.s4l(tmp, _unary__edvuaz, this.v4p_1, k);
      var tmp_0 = this.m4i();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.s4l(tmp_0, _unary__edvuaz_0, this.w4p_1, v);
    }
    composite.t4k(descriptor);
  };
  protoOf(MapLikeSerializer).n4i = function (encoder, value) {
    return this.s4o(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.r4o_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).s4o = function (encoder, value) {
    var size = this.o4p(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.m4i();
    var composite = encoder.y4l(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q4p(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.s4l(this.m4i(), index, this.r4o_1, iterator.o());
      }
       while (inductionVariable < size);
    composite.t4k(descriptor);
  };
  protoOf(CollectionLikeSerializer).n4i = function (encoder, value) {
    return this.s4o(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).t4o = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.u4o(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).u4o = function (decoder, index, builder, checkIndex) {
    this.n4o(builder, index, decoder.b4n(this.m4i(), index, this.r4o_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.p4m($this.m4i());
    $this.l4o(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).w4o = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.j4o(previous);
    var builder = tmp1_elvis_lhs == null ? this.z2t() : tmp1_elvis_lhs;
    var startIndex = this.f4o(builder);
    var compositeDecoder = decoder.s4k(this.m4i());
    if (compositeDecoder.n4m()) {
      this.t4o(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.o4m(this.m4i());
        if (index === -1)
          break $l$loop;
        this.v4o(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.t4k(this.m4i());
    return this.h4o(builder);
  };
  protoOf(AbstractCollectionSerializer).o4i = function (decoder) {
    return this.w4o(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).v4o = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.u4o(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.u4o.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.q4q_1 = new PrimitiveArrayDescriptor(primitiveSerializer.m4i());
  }
  protoOf(PrimitiveArraySerializer).m4i = function () {
    return this.q4q_1;
  };
  protoOf(PrimitiveArraySerializer).r4q = function (_this__u8e3s4) {
    return _this__u8e3s4.s4q();
  };
  protoOf(PrimitiveArraySerializer).f4o = function (_this__u8e3s4) {
    return this.r4q(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).t4q = function (_this__u8e3s4) {
    return _this__u8e3s4.u4q();
  };
  protoOf(PrimitiveArraySerializer).h4o = function (_this__u8e3s4) {
    return this.t4q(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).v4q = function (_this__u8e3s4, size) {
    return _this__u8e3s4.w4q(size);
  };
  protoOf(PrimitiveArraySerializer).l4o = function (_this__u8e3s4, size) {
    return this.v4q(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).x4q = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).q4p = function (_this__u8e3s4) {
    return this.x4q((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).y4q = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).n4o = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.y4q(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).z2t = function () {
    return this.j4o(this.z4q());
  };
  protoOf(PrimitiveArraySerializer).c4r = function (encoder, value) {
    var size = this.o4p(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.q4q_1;
    var composite = encoder.y4l(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.b4r(composite, value, size);
    composite.t4k(descriptor);
  };
  protoOf(PrimitiveArraySerializer).n4i = function (encoder, value) {
    return this.c4r(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).s4o = function (encoder, value) {
    return this.c4r(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).o4i = function (decoder) {
    return this.w4o(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).d4r = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.s4q() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.w4q(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.w4q.call(this, requiredCapacity);
    }
    return tmp;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.e4r_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.e4r_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.t4r(element.y2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.f4r_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.e4r_1 = values;
    this.f4r_1 = null;
    var tmp = this;
    tmp.g4r_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).m4i = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.g4r_1;
    descriptor$factory_0();
    return this_0.c1();
  };
  protoOf(EnumSerializer).u4r = function (encoder, value) {
    var index = indexOf(this.e4r_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.m4i().p4j() + ', ' + ('must be one of ' + contentToString(this.e4r_1)));
    }
    encoder.g4l(this.m4i(), index);
  };
  protoOf(EnumSerializer).n4i = function (encoder, value) {
    return this.u4r(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).o4i = function (decoder) {
    var index = decoder.k4m(this.m4i());
    if (!(0 <= index ? index <= (this.e4r_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.m4i().p4j() + ' enum values, ' + ('values size is ' + this.e4r_1.length));
    }
    return this.e4r_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.m4i().p4j() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.i4s_1;
    elementDescriptors$factory();
    return this_0.c1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.u4j(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.h4s_1 = ENUM_getInstance();
    var tmp = this;
    tmp.i4s_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).q4j = function () {
    return this.h4s_1;
  };
  protoOf(EnumDescriptor).w4j = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.q4j() === ENUM_getInstance()))
      return false;
    if (!(this.p4j() === other.p4j()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.p4j() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.p4j());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.m4i();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.x4s_1 = true;
  }
  protoOf(InlineClassDescriptor).r4j = function () {
    return this.x4s_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.p4j() === other.p4j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.x4s_1 && contentEquals(this.j4s(), other.j4s()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.s4j() === other.s4j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.s4j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.w4j(index).p4j() === other.w4j(index).p4j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.w4j(index).q4j(), other.w4j(index).q4j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.y4s_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).z4s = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.y4s_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).m4i = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).n4i = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).o4i = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.b4t_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).w4l = function () {
    return this.b4t_1;
  };
  protoOf(NoOpEncoder).v4k = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).w4k = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).x4k = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).y4k = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).z4k = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).a4l = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).b4l = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).c4l = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).d4l = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).e4l = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).f4l = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).g4l = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.c4t_1 = OBJECT_getInstance();
    this.d4t_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).q4j = function () {
    return this.c4t_1;
  };
  protoOf(NothingSerialDescriptor).p4j = function () {
    return this.d4t_1;
  };
  protoOf(NothingSerialDescriptor).s4j = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).u4j = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).v4j = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).x4j = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).w4j = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.d4t_1) + imul(31, this.c4t_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.e4t_1 = serializer;
    this.f4t_1 = new SerialDescriptorForNullable(this.e4t_1.m4i());
  }
  protoOf(NullableSerializer).m4i = function () {
    return this.f4t_1;
  };
  protoOf(NullableSerializer).g4t = function (encoder, value) {
    if (!(value == null)) {
      encoder.x4l();
      encoder.t4l(this.e4t_1, value);
    } else {
      encoder.w4k();
    }
  };
  protoOf(NullableSerializer).n4i = function (encoder, value) {
    return this.g4t(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).o4i = function (decoder) {
    return decoder.z4l() ? decoder.m4m(this.e4t_1) : decoder.a4m();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.e4t_1, other.e4t_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.e4t_1);
  };
  function SerialDescriptorForNullable(original) {
    this.h4t_1 = original;
    this.i4t_1 = this.h4t_1.p4j() + '?';
    this.j4t_1 = cachedSerialNames(this.h4t_1);
  }
  protoOf(SerialDescriptorForNullable).p4j = function () {
    return this.i4t_1;
  };
  protoOf(SerialDescriptorForNullable).r4k = function () {
    return this.j4t_1;
  };
  protoOf(SerialDescriptorForNullable).l4j = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.h4t_1, other.h4t_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.h4t_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.h4t_1), 31);
  };
  protoOf(SerialDescriptorForNullable).q4j = function () {
    return this.h4t_1.q4j();
  };
  protoOf(SerialDescriptorForNullable).r4j = function () {
    return this.h4t_1.r4j();
  };
  protoOf(SerialDescriptorForNullable).s4j = function () {
    return this.h4t_1.s4j();
  };
  protoOf(SerialDescriptorForNullable).t4j = function () {
    return this.h4t_1.t4j();
  };
  protoOf(SerialDescriptorForNullable).u4j = function (index) {
    return this.h4t_1.u4j(index);
  };
  protoOf(SerialDescriptorForNullable).v4j = function (name) {
    return this.h4t_1.v4j(name);
  };
  protoOf(SerialDescriptorForNullable).w4j = function (index) {
    return this.h4t_1.w4j(index);
  };
  protoOf(SerialDescriptorForNullable).x4j = function (index) {
    return this.h4t_1.x4j(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.r4i_1 = this$0.l4t_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.k4t_1 = objectInstance;
    this.l4t_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m4t_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).m4i = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.m4t_1;
    descriptor$factory_1();
    return this_0.c1();
  };
  protoOf(ObjectSerializer).c4j = function (encoder, value) {
    encoder.s4k(this.m4i()).t4k(this.m4i());
  };
  protoOf(ObjectSerializer).n4i = function (encoder, value) {
    return this.c4j(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).o4i = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.m4i();
    var composite = decoder.s4k(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.n4m()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.o4m(this.m4i());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.t4k(descriptor);
    return this.k4t_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.m4i();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.r4k();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.s4j());
    var inductionVariable = 0;
    var last = _this__u8e3s4.s4j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.u4j(i);
        result.e(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.ec();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = _this__u8e3s4.yl_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.yl_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.pb();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.j())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwArrayMissingFieldException(seenArray, goldenMaskArray, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = goldenMaskArray.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var maskSlot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var missingFieldsBits = goldenMaskArray[maskSlot] & ~seenArray[maskSlot];
        if (!(missingFieldsBits === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 32)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!((missingFieldsBits & 1) === 0)) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element = descriptor.u4j(imul(maskSlot, 32) + i | 0);
                missingFields.e(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.p4j());
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.u4j(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.p4j());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.p4j());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.p4j();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.q4j();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.q4r_1;
    childSerializers$factory();
    return this_0.c1();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.s4r_1;
    _hashCode$factory_0();
    return this_0.c1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.l4r_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.l4r_1[i];
        indices.k2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.i4r_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z4s();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.i4r_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a4t();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.m4i();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.j4s());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.u4j(i) + ': ' + this$0.w4j(i).p4j();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.h4r_1 = serialName;
    this.i4r_1 = generatedSerializer;
    this.j4r_1 = elementsCount;
    this.k4r_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.j4r_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.l4r_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.j4r_1;
    tmp_3.m4r_1 = fillArrayVal(Array(size), null);
    this.n4r_1 = null;
    this.o4r_1 = booleanArray(this.j4r_1);
    this.p4r_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.q4r_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.r4r_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.s4r_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).p4j = function () {
    return this.h4r_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).s4j = function () {
    return this.j4r_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).q4j = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).t4j = function () {
    var tmp0_elvis_lhs = this.n4r_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).r4k = function () {
    return this.p4r_1.o2();
  };
  protoOf(PluginGeneratedSerialDescriptor).j4s = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.r4r_1;
    typeParameterDescriptors$factory();
    return this_0.c1();
  };
  protoOf(PluginGeneratedSerialDescriptor).k4s = function (name, isOptional) {
    this.k4r_1 = this.k4r_1 + 1 | 0;
    this.l4r_1[this.k4r_1] = name;
    this.o4r_1[this.k4r_1] = isOptional;
    this.m4r_1[this.k4r_1] = null;
    if (this.k4r_1 === (this.j4r_1 - 1 | 0)) {
      this.p4r_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).t4r = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.k4s(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.k4s.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).w4j = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).m4i();
  };
  protoOf(PluginGeneratedSerialDescriptor).x4j = function (index) {
    return getChecked_0(this.o4r_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).u4j = function (index) {
    return getChecked(this.l4r_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).v4j = function (name) {
    var tmp0_elvis_lhs = this.p4r_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.p4j() === other.p4j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.j4s(), other.j4s())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.s4j() === other.s4j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.s4j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.w4j(index).p4j() === other.w4j(index).p4j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.w4j(index).q4j(), other.w4j(index).q4j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.j4r_1);
    var tmp_0 = this.p4j() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.j4s();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).q4t = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.q4t((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).r4t = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.r4t((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).z4q = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).s4t = function (decoder, index, builder, checkIndex) {
    builder.v4t(decoder.s4m(this.q4q_1, index));
  };
  protoOf(CharArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.s4t(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.s4t(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).w4t = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).b4r = function (encoder, content, size) {
    return this.w4t(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).z4t = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.z4t((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).a4u = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.a4u((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).z4q = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).b4u = function (decoder, index, builder, checkIndex) {
    builder.e4u(decoder.x4m(this.q4q_1, index));
  };
  protoOf(DoubleArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.b4u(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.b4u(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).f4u = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).b4r = function (encoder, content, size) {
    return this.f4u(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).i4u = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.i4u((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).j4u = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.j4u((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).z4q = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).k4u = function (decoder, index, builder, checkIndex) {
    builder.n4u(decoder.w4m(this.q4q_1, index));
  };
  protoOf(FloatArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.k4u(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.k4u(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).o4u = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).b4r = function (encoder, content, size) {
    return this.o4u(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  protoOf(LongArraySerializer_0).r4u = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.r4u((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).s4u = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.s4u((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).z4q = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).t4u = function (decoder, index, builder, checkIndex) {
    builder.w4u(decoder.v4m(this.q4q_1, index));
  };
  protoOf(LongArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.t4u(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.t4u(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).x4u = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.m4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).b4r = function (encoder, content, size) {
    return this.x4u(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).a4v = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.a4v(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.kp_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).b4v = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.b4v(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.kp_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).c4v = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).z4q = function () {
    return new ULongArray(this.c4v());
  };
  protoOf(ULongArraySerializer_0).d4v = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.z4m(this.q4q_1, index).g4m();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.g4v(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.d4v(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.d4v(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).h4v = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.r4l(this.q4q_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.b4l(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).b4r = function (encoder, content, size) {
    return this.h4v(encoder, content instanceof ULongArray ? content.kp_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).k4v = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.k4v((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).l4v = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.l4v((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).z4q = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).m4v = function (decoder, index, builder, checkIndex) {
    builder.p4v(decoder.u4m(this.q4q_1, index));
  };
  protoOf(IntArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.m4v(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.m4v(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).q4v = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.l4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).b4r = function (encoder, content, size) {
    return this.q4v(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).t4v = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.t4v(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.yo_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).u4v = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.u4v(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.yo_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).v4v = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).z4q = function () {
    return new UIntArray(this.v4v());
  };
  protoOf(UIntArraySerializer_0).w4v = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.z4m(this.q4q_1, index).f4m();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.z4v(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.w4v(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.w4v(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).a4w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.r4l(this.q4q_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.a4l(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).b4r = function (encoder, content, size) {
    return this.a4w(encoder, content instanceof UIntArray ? content.yo_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).d4w = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.d4w((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).e4w = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.e4w((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).z4q = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).f4w = function (decoder, index, builder, checkIndex) {
    builder.i4w(decoder.t4m(this.q4q_1, index));
  };
  protoOf(ShortArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.f4w(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.f4w(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).j4w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.k4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).b4r = function (encoder, content, size) {
    return this.j4w(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).m4w = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.m4w(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.wp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).n4w = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.n4w(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.wp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).o4w = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).z4q = function () {
    return new UShortArray(this.o4w());
  };
  protoOf(UShortArraySerializer_0).p4w = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.z4m(this.q4q_1, index).d4m();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.s4w(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.p4w(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.p4w(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).t4w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.r4l(this.q4q_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.z4k(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).b4r = function (encoder, content, size) {
    return this.t4w(encoder, content instanceof UShortArray ? content.wp_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).w4w = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.w4w((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).x4w = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.x4w((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).z4q = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).y4w = function (decoder, index, builder, checkIndex) {
    builder.b4x(decoder.r4m(this.q4q_1, index));
  };
  protoOf(ByteArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.y4w(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.y4w(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).c4x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.j4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).b4r = function (encoder, content, size) {
    return this.c4x(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).f4x = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.f4x(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.mo_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).g4x = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.g4x(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.mo_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).h4x = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).z4q = function () {
    return new UByteArray(this.h4x());
  };
  protoOf(UByteArraySerializer_0).i4x = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.z4m(this.q4q_1, index).c4m();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.l4x(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.i4x(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.i4x(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).m4x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.r4l(this.q4q_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.y4k(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).b4r = function (encoder, content, size) {
    return this.m4x(encoder, content instanceof UByteArray ? content.mo_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_14(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).p4x = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).o4p = function (_this__u8e3s4) {
    return this.p4x((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).q4x = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).j4o = function (_this__u8e3s4) {
    return this.q4x((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).z4q = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).r4x = function (decoder, index, builder, checkIndex) {
    builder.u4x(decoder.q4m(this.q4q_1, index));
  };
  protoOf(BooleanArraySerializer_0).u4o = function (decoder, index, builder, checkIndex) {
    return this.r4x(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).a4r = function (decoder, index, builder, checkIndex) {
    return this.r4x(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).v4x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.i4l(this.q4q_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).b4r = function (encoder, content, size) {
    return this.v4x(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t4t_1 = bufferWithData;
    this.u4t_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(CharArrayBuilder).s4q = function () {
    return this.u4t_1;
  };
  protoOf(CharArrayBuilder).w4q = function (requiredCapacity) {
    if (this.t4t_1.length < requiredCapacity)
      this.t4t_1 = copyOf(this.t4t_1, coerceAtLeast(requiredCapacity, imul(this.t4t_1.length, 2)));
  };
  protoOf(CharArrayBuilder).v4t = function (c) {
    this.d4r();
    var tmp = this.t4t_1;
    var _unary__edvuaz = this.u4t_1;
    this.u4t_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).u4q = function () {
    return copyOf(this.t4t_1, this.u4t_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c4u_1 = bufferWithData;
    this.d4u_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(DoubleArrayBuilder).s4q = function () {
    return this.d4u_1;
  };
  protoOf(DoubleArrayBuilder).w4q = function (requiredCapacity) {
    if (this.c4u_1.length < requiredCapacity)
      this.c4u_1 = copyOf_0(this.c4u_1, coerceAtLeast(requiredCapacity, imul(this.c4u_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).e4u = function (c) {
    this.d4r();
    var tmp = this.c4u_1;
    var _unary__edvuaz = this.d4u_1;
    this.d4u_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).u4q = function () {
    return copyOf_0(this.c4u_1, this.d4u_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l4u_1 = bufferWithData;
    this.m4u_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(FloatArrayBuilder).s4q = function () {
    return this.m4u_1;
  };
  protoOf(FloatArrayBuilder).w4q = function (requiredCapacity) {
    if (this.l4u_1.length < requiredCapacity)
      this.l4u_1 = copyOf_1(this.l4u_1, coerceAtLeast(requiredCapacity, imul(this.l4u_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).n4u = function (c) {
    this.d4r();
    var tmp = this.l4u_1;
    var _unary__edvuaz = this.m4u_1;
    this.m4u_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).u4q = function () {
    return copyOf_1(this.l4u_1, this.m4u_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u4u_1 = bufferWithData;
    this.v4u_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(LongArrayBuilder).s4q = function () {
    return this.v4u_1;
  };
  protoOf(LongArrayBuilder).w4q = function (requiredCapacity) {
    if (this.u4u_1.length < requiredCapacity)
      this.u4u_1 = copyOf_2(this.u4u_1, coerceAtLeast(requiredCapacity, imul(this.u4u_1.length, 2)));
  };
  protoOf(LongArrayBuilder).w4u = function (c) {
    this.d4r();
    var tmp = this.u4u_1;
    var _unary__edvuaz = this.v4u_1;
    this.v4u_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).u4q = function () {
    return copyOf_2(this.u4u_1, this.v4u_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e4v_1 = bufferWithData;
    this.f4v_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.w4q(10);
  }
  protoOf(ULongArrayBuilder).s4q = function () {
    return this.f4v_1;
  };
  protoOf(ULongArrayBuilder).w4q = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.e4v_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.e4v_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.e4v_1), 2));
      tmp.e4v_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).g4v = function (c) {
    this.d4r();
    var tmp = this.e4v_1;
    var _unary__edvuaz = this.f4v_1;
    this.f4v_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).w4x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.e4v_1;
    var newSize = this.f4v_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).u4q = function () {
    return new ULongArray(this.w4x());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n4v_1 = bufferWithData;
    this.o4v_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(IntArrayBuilder).s4q = function () {
    return this.o4v_1;
  };
  protoOf(IntArrayBuilder).w4q = function (requiredCapacity) {
    if (this.n4v_1.length < requiredCapacity)
      this.n4v_1 = copyOf_3(this.n4v_1, coerceAtLeast(requiredCapacity, imul(this.n4v_1.length, 2)));
  };
  protoOf(IntArrayBuilder).p4v = function (c) {
    this.d4r();
    var tmp = this.n4v_1;
    var _unary__edvuaz = this.o4v_1;
    this.o4v_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).u4q = function () {
    return copyOf_3(this.n4v_1, this.o4v_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x4v_1 = bufferWithData;
    this.y4v_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.w4q(10);
  }
  protoOf(UIntArrayBuilder).s4q = function () {
    return this.y4v_1;
  };
  protoOf(UIntArrayBuilder).w4q = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.x4v_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.x4v_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.x4v_1), 2));
      tmp.x4v_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).z4v = function (c) {
    this.d4r();
    var tmp = this.x4v_1;
    var _unary__edvuaz = this.y4v_1;
    this.y4v_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).x4x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.x4v_1;
    var newSize = this.y4v_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).u4q = function () {
    return new UIntArray(this.x4x());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g4w_1 = bufferWithData;
    this.h4w_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(ShortArrayBuilder).s4q = function () {
    return this.h4w_1;
  };
  protoOf(ShortArrayBuilder).w4q = function (requiredCapacity) {
    if (this.g4w_1.length < requiredCapacity)
      this.g4w_1 = copyOf_4(this.g4w_1, coerceAtLeast(requiredCapacity, imul(this.g4w_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).i4w = function (c) {
    this.d4r();
    var tmp = this.g4w_1;
    var _unary__edvuaz = this.h4w_1;
    this.h4w_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).u4q = function () {
    return copyOf_4(this.g4w_1, this.h4w_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q4w_1 = bufferWithData;
    this.r4w_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.w4q(10);
  }
  protoOf(UShortArrayBuilder).s4q = function () {
    return this.r4w_1;
  };
  protoOf(UShortArrayBuilder).w4q = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.q4w_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.q4w_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.q4w_1), 2));
      tmp.q4w_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).s4w = function (c) {
    this.d4r();
    var tmp = this.q4w_1;
    var _unary__edvuaz = this.r4w_1;
    this.r4w_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).y4x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.q4w_1;
    var newSize = this.r4w_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).u4q = function () {
    return new UShortArray(this.y4x());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z4w_1 = bufferWithData;
    this.a4x_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(ByteArrayBuilder).s4q = function () {
    return this.a4x_1;
  };
  protoOf(ByteArrayBuilder).w4q = function (requiredCapacity) {
    if (this.z4w_1.length < requiredCapacity)
      this.z4w_1 = copyOf_5(this.z4w_1, coerceAtLeast(requiredCapacity, imul(this.z4w_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).b4x = function (c) {
    this.d4r();
    var tmp = this.z4w_1;
    var _unary__edvuaz = this.a4x_1;
    this.a4x_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).u4q = function () {
    return copyOf_5(this.z4w_1, this.a4x_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j4x_1 = bufferWithData;
    this.k4x_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.w4q(10);
  }
  protoOf(UByteArrayBuilder).s4q = function () {
    return this.k4x_1;
  };
  protoOf(UByteArrayBuilder).w4q = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.j4x_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.j4x_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.j4x_1), 2));
      tmp.j4x_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).l4x = function (c) {
    this.d4r();
    var tmp = this.j4x_1;
    var _unary__edvuaz = this.k4x_1;
    this.k4x_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).z4x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.j4x_1;
    var newSize = this.k4x_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).u4q = function () {
    return new UByteArray(this.z4x());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s4x_1 = bufferWithData;
    this.t4x_1 = bufferWithData.length;
    this.w4q(10);
  }
  protoOf(BooleanArrayBuilder).s4q = function () {
    return this.t4x_1;
  };
  protoOf(BooleanArrayBuilder).w4q = function (requiredCapacity) {
    if (this.s4x_1.length < requiredCapacity)
      this.s4x_1 = copyOf_6(this.s4x_1, coerceAtLeast(requiredCapacity, imul(this.s4x_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).u4x = function (c) {
    this.d4r();
    var tmp = this.s4x_1;
    var _unary__edvuaz = this.t4x_1;
    this.t4x_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).u4q = function () {
    return copyOf_6(this.s4x_1, this.t4x_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().s2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.a4y_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).m4i = function () {
    return this.a4y_1;
  };
  protoOf(StringSerializer).b4y = function (encoder, value) {
    return encoder.f4l(value);
  };
  protoOf(StringSerializer).n4i = function (encoder, value) {
    return this.b4y(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).o4i = function (decoder) {
    return decoder.j4m();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.c4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).m4i = function () {
    return this.c4y_1;
  };
  protoOf(CharSerializer).d4y = function (encoder, value) {
    return encoder.e4l(value);
  };
  protoOf(CharSerializer).n4i = function (encoder, value) {
    return this.d4y(encoder, value instanceof Char ? value.u1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).e4y = function (decoder) {
    return decoder.e4m();
  };
  protoOf(CharSerializer).o4i = function (decoder) {
    return new Char(this.e4y(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.f4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).m4i = function () {
    return this.f4y_1;
  };
  protoOf(DoubleSerializer).g4y = function (encoder, value) {
    return encoder.d4l(value);
  };
  protoOf(DoubleSerializer).n4i = function (encoder, value) {
    return this.g4y(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).o4i = function (decoder) {
    return decoder.i4m();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.h4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).m4i = function () {
    return this.h4y_1;
  };
  protoOf(FloatSerializer).i4y = function (encoder, value) {
    return encoder.c4l(value);
  };
  protoOf(FloatSerializer).n4i = function (encoder, value) {
    return this.i4y(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).o4i = function (decoder) {
    return decoder.h4m();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.j4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).m4i = function () {
    return this.j4y_1;
  };
  protoOf(LongSerializer).k4y = function (encoder, value) {
    return encoder.b4l(value);
  };
  protoOf(LongSerializer).n4i = function (encoder, value) {
    return this.k4y(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).o4i = function (decoder) {
    return decoder.g4m();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.l4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).m4i = function () {
    return this.l4y_1;
  };
  protoOf(IntSerializer).m4y = function (encoder, value) {
    return encoder.a4l(value);
  };
  protoOf(IntSerializer).n4i = function (encoder, value) {
    return this.m4y(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).o4i = function (decoder) {
    return decoder.f4m();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.n4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).m4i = function () {
    return this.n4y_1;
  };
  protoOf(ShortSerializer).o4y = function (encoder, value) {
    return encoder.z4k(value);
  };
  protoOf(ShortSerializer).n4i = function (encoder, value) {
    return this.o4y(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).o4i = function (decoder) {
    return decoder.d4m();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.p4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).m4i = function () {
    return this.p4y_1;
  };
  protoOf(ByteSerializer).q4y = function (encoder, value) {
    return encoder.y4k(value);
  };
  protoOf(ByteSerializer).n4i = function (encoder, value) {
    return this.q4y(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).o4i = function (decoder) {
    return decoder.c4m();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.r4y_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).m4i = function () {
    return this.r4y_1;
  };
  protoOf(BooleanSerializer).s4y = function (encoder, value) {
    return encoder.x4k(value);
  };
  protoOf(BooleanSerializer).n4i = function (encoder, value) {
    return this.s4y(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).o4i = function (decoder) {
    return decoder.b4m();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.t4y_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).m4i = function () {
    return this.t4y_1.m4i();
  };
  protoOf(UnitSerializer).u4y = function (encoder, value) {
    this.t4y_1.c4j(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).n4i = function (encoder, value) {
    return this.u4y(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).v4y = function (decoder) {
    this.t4y_1.o4i(decoder);
  };
  protoOf(UnitSerializer).o4i = function (decoder) {
    this.v4y(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.w4y_1 = serialName;
    this.x4y_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).p4j = function () {
    return this.w4y_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).q4j = function () {
    return this.x4y_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).s4j = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).u4j = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).v4j = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).x4j = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).w4j = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.w4y_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.w4y_1 === other.w4y_1 && equals(this.x4y_1, other.x4y_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.w4y_1) + imul(31, this.x4y_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().p2();
    var _iterator__ex2g4s = values.m();
    while (_iterator__ex2g4s.n()) {
      var primitive = _iterator__ex2g4s.o();
      var primitiveName = primitive.m4i().p4j();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).pb() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.y4y_1 = key;
    this.z4y_1 = value;
  }
  protoOf(MapEntry).b1 = function () {
    return this.y4y_1;
  };
  protoOf(MapEntry).c1 = function () {
    return this.z4y_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.y4y_1) + ', value=' + toString_0(this.z4y_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.y4y_1 == null ? 0 : hashCode(this.y4y_1);
    result = imul(result, 31) + (this.z4y_1 == null ? 0 : hashCode(this.z4y_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.y4y_1, tmp0_other_with_cast.y4y_1))
      return false;
    if (!equals(this.z4y_1, tmp0_other_with_cast.z4y_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.x4i('key', $keySerializer.m4i());
      $this$buildSerialDescriptor.x4i('value', $valueSerializer.m4i());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.c4z_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).m4i = function () {
    return this.c4z_1;
  };
  protoOf(MapEntrySerializer_0).d4z = function (_this__u8e3s4) {
    return _this__u8e3s4.b1();
  };
  protoOf(MapEntrySerializer_0).e4z = function (_this__u8e3s4) {
    return this.d4z((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).f4z = function (_this__u8e3s4) {
    return _this__u8e3s4.c1();
  };
  protoOf(MapEntrySerializer_0).g4z = function (_this__u8e3s4) {
    return this.f4z((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).h4z = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.x4i('first', $keySerializer.m4i());
      $this$buildClassSerialDescriptor.x4i('second', $valueSerializer.m4i());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.n4z_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).m4i = function () {
    return this.n4z_1;
  };
  protoOf(PairSerializer_0).o4z = function (_this__u8e3s4) {
    return _this__u8e3s4.jb_1;
  };
  protoOf(PairSerializer_0).e4z = function (_this__u8e3s4) {
    return this.o4z(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).p4z = function (_this__u8e3s4) {
    return _this__u8e3s4.kb_1;
  };
  protoOf(PairSerializer_0).g4z = function (_this__u8e3s4) {
    return this.p4z(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).h4z = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.b4n($this.t4z_1, 0, $this.q4z_1);
    var b = composite.b4n($this.t4z_1, 1, $this.r4z_1);
    var c = composite.b4n($this.t4z_1, 2, $this.s4z_1);
    composite.t4k($this.t4z_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.o4m($this.t4z_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.b4n($this.t4z_1, 0, $this.q4z_1);
          break;
        case 1:
          b = composite.b4n($this.t4z_1, 1, $this.r4z_1);
          break;
        case 2:
          c = composite.b4n($this.t4z_1, 2, $this.s4z_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.t4k($this.t4z_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.x4i('first', this$0.q4z_1.m4i());
      $this$buildClassSerialDescriptor.x4i('second', this$0.r4z_1.m4i());
      $this$buildClassSerialDescriptor.x4i('third', this$0.s4z_1.m4i());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.q4z_1 = aSerializer;
    this.r4z_1 = bSerializer;
    this.s4z_1 = cSerializer;
    var tmp = this;
    tmp.t4z_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).m4i = function () {
    return this.t4z_1;
  };
  protoOf(TripleSerializer_0).u4z = function (encoder, value) {
    var structuredEncoder = encoder.s4k(this.t4z_1);
    structuredEncoder.s4l(this.t4z_1, 0, this.q4z_1, value.qn_1);
    structuredEncoder.s4l(this.t4z_1, 1, this.r4z_1, value.rn_1);
    structuredEncoder.s4l(this.t4z_1, 2, this.s4z_1, value.sn_1);
    structuredEncoder.t4k(this.t4z_1);
  };
  protoOf(TripleSerializer_0).n4i = function (encoder, value) {
    return this.u4z(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).o4i = function (decoder) {
    var composite = decoder.s4k(this.t4z_1);
    if (composite.n4m()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.i4z_1 = keySerializer;
    this.j4z_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).k4z = function (encoder, value) {
    var structuredEncoder = encoder.s4k(this.m4i());
    structuredEncoder.s4l(this.m4i(), 0, this.i4z_1, this.e4z(value));
    structuredEncoder.s4l(this.m4i(), 1, this.j4z_1, this.g4z(value));
    structuredEncoder.t4k(this.m4i());
  };
  protoOf(KeyValueSerializer).n4i = function (encoder, value) {
    return this.k4z(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).o4i = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.m4i();
    var composite = decoder.s4k(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.n4m()) {
        var key = composite.b4n(this.m4i(), 0, this.i4z_1);
        var value = composite.b4n(this.m4i(), 1, this.j4z_1);
        tmp$ret$0 = this.h4z(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.o4m(this.m4i());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.b4n(this.m4i(), 0, this.i4z_1);
            break;
          case 1:
            value_0 = composite.b4n(this.m4i(), 1, this.j4z_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.h4z(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.t4k(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.v4z_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).m4i = function () {
    return this.v4z_1;
  };
  protoOf(ULongSerializer).w4z = function (encoder, value) {
    var tmp = encoder.h4l(this.v4z_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.b4l(tmp$ret$0);
  };
  protoOf(ULongSerializer).n4i = function (encoder, value) {
    return this.w4z(encoder, value instanceof ULong ? value.fp_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).x4z = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.l4m(this.v4z_1).g4m();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).o4i = function (decoder) {
    return new ULong(this.x4z(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.y4z_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).m4i = function () {
    return this.y4z_1;
  };
  protoOf(UIntSerializer).z4z = function (encoder, value) {
    var tmp = encoder.h4l(this.y4z_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.a4l(tmp$ret$0);
  };
  protoOf(UIntSerializer).n4i = function (encoder, value) {
    return this.z4z(encoder, value instanceof UInt ? value.to_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).a50 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.l4m(this.y4z_1).f4m();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).o4i = function (decoder) {
    return new UInt(this.a50(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.b50_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).m4i = function () {
    return this.b50_1;
  };
  protoOf(UShortSerializer).c50 = function (encoder, value) {
    var tmp = encoder.h4l(this.b50_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.z4k(tmp$ret$0);
  };
  protoOf(UShortSerializer).n4i = function (encoder, value) {
    return this.c50(encoder, value instanceof UShort ? value.rp_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).d50 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.l4m(this.b50_1).d4m();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).o4i = function (decoder) {
    return new UShort(this.d50(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.e50_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).m4i = function () {
    return this.e50_1;
  };
  protoOf(UByteSerializer).f50 = function (encoder, value) {
    var tmp = encoder.h4l(this.e50_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.y4k(tmp$ret$0);
  };
  protoOf(UByteSerializer).n4i = function (encoder, value) {
    return this.f50(encoder, value instanceof UByte ? value.ho_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).g50 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.l4m(this.e50_1).c4m();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).o4i = function (decoder) {
    return new UByte(this.g50(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).h4j = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.i4j(kClass, typeArgumentsSerializers) : $super.i4j.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.h50_1 = class2ContextualFactory;
    this.i50_1 = polyBase2Serializers;
    this.j50_1 = polyBase2DefaultSerializerProvider;
    this.k50_1 = polyBase2NamedSerializers;
    this.l50_1 = polyBase2DefaultDeserializerProvider;
    this.m50_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).g4j = function () {
    return this.m50_1;
  };
  protoOf(SerialModuleImpl).d4n = function (baseClass, value) {
    if (!baseClass.qb(value))
      return null;
    var tmp0_safe_receiver = this.i50_1.s2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.j50_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).c4n = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.k50_1.s2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).s2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.l50_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).i4j = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.h50_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n50(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith(serializer) {
    this.o50_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.o50_1.equals(tmp0_other_with_cast.o50_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.o50_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.o50_1) + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterface(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().vc(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().yc(), CharArraySerializer()), to(PrimitiveClasses_getInstance().tc(), serializer_4(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().ed(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().sc(), serializer_5(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().dd(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().cd(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().rc(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().bd(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().qc(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().ad(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().pc(), serializer_12(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().zc(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().oc(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().xc(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().nc(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance())), to(getKClass(Uuid), serializer_17(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().nc())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().nc()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().uc());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.n4t(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.p50_1 = $factory;
  }
  protoOf(createCache$1).j4j = function (key) {
    return this.p50_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.q50_1 = $factory;
  }
  protoOf(createParametrizedCache$1).k4j = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.q50_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).l4j = get_isNullable;
  protoOf(SerialDescriptorImpl).r4j = get_isInline;
  protoOf(AbstractEncoder).x4l = encodeNotNullMark;
  protoOf(AbstractEncoder).y4l = beginCollection;
  protoOf(AbstractEncoder).t4l = encodeSerializableValue;
  protoOf(AbstractEncoder).v4l = encodeNullableSerializableValue;
  protoOf(ListLikeDescriptor).l4j = get_isNullable;
  protoOf(ListLikeDescriptor).r4j = get_isInline;
  protoOf(ListLikeDescriptor).t4j = get_annotations;
  protoOf(MapLikeDescriptor).l4j = get_isNullable;
  protoOf(MapLikeDescriptor).r4j = get_isInline;
  protoOf(MapLikeDescriptor).t4j = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).l4j = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).r4j = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).a4t = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).l4j = get_isNullable;
  protoOf(NothingSerialDescriptor).r4j = get_isInline;
  protoOf(NothingSerialDescriptor).t4j = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).l4j = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).r4j = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).t4j = get_annotations;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = decodeSerializableElement$default;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = SerializationException_init_$Create$_1;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CLASS_getInstance;
  _.$_$.g = LIST_getInstance;
  _.$_$.h = MAP_getInstance;
  _.$_$.i = OBJECT_getInstance;
  _.$_$.j = DoubleSerializer_getInstance;
  _.$_$.k = IntSerializer_getInstance;
  _.$_$.l = LongSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = serializer_2;
  _.$_$.o = serializer_15;
  _.$_$.p = PolymorphicKind;
  _.$_$.q = PrimitiveSerialDescriptor;
  _.$_$.r = get_annotations;
  _.$_$.s = get_isInline;
  _.$_$.t = get_isNullable;
  _.$_$.u = SerialDescriptor;
  _.$_$.v = AbstractEncoder;
  _.$_$.w = CompositeDecoder;
  _.$_$.x = Decoder;
  _.$_$.y = beginCollection;
  _.$_$.z = Encoder;
  _.$_$.a1 = AbstractPolymorphicSerializer;
  _.$_$.b1 = typeParametersSerializers;
  _.$_$.c1 = GeneratedSerializer;
  _.$_$.d1 = PluginGeneratedSerialDescriptor;
  _.$_$.e1 = createSimpleEnumSerializer;
  _.$_$.f1 = throwArrayMissingFieldException;
  _.$_$.g1 = throwMissingFieldException;
  _.$_$.h1 = EmptySerializersModule_0;
  _.$_$.i1 = DeserializationStrategy;
  _.$_$.j1 = KSerializer;
  _.$_$.k1 = SerializationStrategy;
  _.$_$.l1 = findPolymorphicSerializer;
  _.$_$.m1 = serializer_1;
  _.$_$.n1 = serializer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
