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
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var VOID = kotlin_kotlin.$_$.i;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i5;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var emptyList = kotlin_kotlin.$_$.a8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.m;
  var lazy = kotlin_kotlin.$_$.ek;
  var toString = kotlin_kotlin.$_$.le;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.c2;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var captureStack = kotlin_kotlin.$_$.hc;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.e2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.g2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ti;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var KClass = kotlin_kotlin.$_$.jf;
  var isInterface = kotlin_kotlin.$_$.qd;
  var Triple = kotlin_kotlin.$_$.gj;
  var getKClass = kotlin_kotlin.$_$.f;
  var Pair = kotlin_kotlin.$_$.bj;
  var Entry = kotlin_kotlin.$_$.n6;
  var KtMap = kotlin_kotlin.$_$.o6;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var LinkedHashMap = kotlin_kotlin.$_$.k6;
  var HashMap = kotlin_kotlin.$_$.i6;
  var KtSet = kotlin_kotlin.$_$.u6;
  var KtMutableSet = kotlin_kotlin.$_$.t6;
  var LinkedHashSet = kotlin_kotlin.$_$.l6;
  var HashSet = kotlin_kotlin.$_$.j6;
  var Collection = kotlin_kotlin.$_$.h6;
  var KtList = kotlin_kotlin.$_$.m6;
  var KtMutableList = kotlin_kotlin.$_$.q6;
  var ArrayList = kotlin_kotlin.$_$.g6;
  var copyToArray = kotlin_kotlin.$_$.y7;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q3;
  var Result = kotlin_kotlin.$_$.cj;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var equals = kotlin_kotlin.$_$.qc;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var isBlank = kotlin_kotlin.$_$.vg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var toList = kotlin_kotlin.$_$.xa;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var toHashSet = kotlin_kotlin.$_$.ta;
  var toBooleanArray = kotlin_kotlin.$_$.ra;
  var withIndex = kotlin_kotlin.$_$.eb;
  var to = kotlin_kotlin.$_$.sk;
  var toMap = kotlin_kotlin.$_$.za;
  var lazy_0 = kotlin_kotlin.$_$.fk;
  var contentEquals = kotlin_kotlin.$_$.h7;
  var until = kotlin_kotlin.$_$.if;
  var joinToString = kotlin_kotlin.$_$.y8;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var Char = kotlin_kotlin.$_$.mi;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.e3;
  var Duration = kotlin_kotlin.$_$.hi;
  var Companion_getInstance = kotlin_kotlin.$_$.n5;
  var Uuid = kotlin_kotlin.$_$.ki;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p5;
  var toIntOrNull = kotlin_kotlin.$_$.wh;
  var hashCode = kotlin_kotlin.$_$.zc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var isArray = kotlin_kotlin.$_$.id;
  var arrayIterator = kotlin_kotlin.$_$.fc;
  var asList = kotlin_kotlin.$_$.y6;
  var step = kotlin_kotlin.$_$.hf;
  var getValue = kotlin_kotlin.$_$.q8;
  var indexOf = kotlin_kotlin.$_$.r8;
  var contentToString = kotlin_kotlin.$_$.m7;
  var Enum = kotlin_kotlin.$_$.qi;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.y;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var KTypeParameter = kotlin_kotlin.$_$.of;
  var contentHashCode = kotlin_kotlin.$_$.k7;
  var booleanArray = kotlin_kotlin.$_$.gc;
  var emptyMap = kotlin_kotlin.$_$.b8;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q5;
  var isCharArray = kotlin_kotlin.$_$.ld;
  var charArray = kotlin_kotlin.$_$.jc;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.e5;
  var isDoubleArray = kotlin_kotlin.$_$.nd;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var isFloatArray = kotlin_kotlin.$_$.od;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.r5;
  var isLongArray = kotlin_kotlin.$_$.rd;
  var longArray = kotlin_kotlin.$_$.yd;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.v5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p4;
  var ULongArray = kotlin_kotlin.$_$.lj;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.g5;
  var isIntArray = kotlin_kotlin.$_$.pd;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.u5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g4;
  var UIntArray = kotlin_kotlin.$_$.jj;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a4;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.b4;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.h5;
  var isShortArray = kotlin_kotlin.$_$.td;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.w5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.x4;
  var UShortArray = kotlin_kotlin.$_$.nj;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.t4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.v4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s4;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.d5;
  var isByteArray = kotlin_kotlin.$_$.kd;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.t5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.y3;
  var UByteArray = kotlin_kotlin.$_$.hj;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.v3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.s3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.w3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.t3;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.c5;
  var isBooleanArray = kotlin_kotlin.$_$.jd;
  var coerceAtLeast = kotlin_kotlin.$_$.xe;
  var copyOf = kotlin_kotlin.$_$.s7;
  var copyOf_0 = kotlin_kotlin.$_$.u7;
  var copyOf_1 = kotlin_kotlin.$_$.v7;
  var copyOf_2 = kotlin_kotlin.$_$.q7;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o4;
  var copyOf_3 = kotlin_kotlin.$_$.x7;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d4;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f4;
  var copyOf_4 = kotlin_kotlin.$_$.p7;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.y4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.u4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.w4;
  var copyOf_5 = kotlin_kotlin.$_$.t7;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.z3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.u3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.x3;
  var copyOf_6 = kotlin_kotlin.$_$.r7;
  var Long = kotlin_kotlin.$_$.wi;
  var Unit = kotlin_kotlin.$_$.pj;
  var ULong = kotlin_kotlin.$_$.mj;
  var UInt = kotlin_kotlin.$_$.kj;
  var UShort = kotlin_kotlin.$_$.oj;
  var UByte = kotlin_kotlin.$_$.ij;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var mapOf = kotlin_kotlin.$_$.p9;
  var get_js = kotlin_kotlin.$_$.vd;
  var findAssociatedObject = kotlin_kotlin.$_$.d;
  var get_indices = kotlin_kotlin.$_$.v8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var get_indices_0 = kotlin_kotlin.$_$.t8;
  var Companion_instance = kotlin_kotlin.$_$.s5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o3;
  var createFailure = kotlin_kotlin.$_$.xj;
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
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(_no_name_provided__qut3iv_0);
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
    return this.e4e(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.z4b(this, value);
  }
  initMetadataForInterface(Encoder, 'Encoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder]);
  function decodeSerializableValue(deserializer) {
    return deserializer.a4c(this);
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
    return $super === VOID ? this.k4g(descriptor, index, deserializer, previousValue) : $super.k4g.call(this, descriptor, index, deserializer, previousValue);
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
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
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
      $this$buildSerialDescriptor.j4c('type', serializer_2(StringCompanionObject_instance).y4b());
      $this$buildSerialDescriptor.j4c('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.k4c_1.kb() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.d4c_1 = this$0.l4c_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.k4c_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.k4c_1 = baseClass;
    this.l4c_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m4c_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).n4c = function () {
    return this.k4c_1;
  };
  protoOf(PolymorphicSerializer).y4b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.m4c_1;
    descriptor$factory();
    return this_0.w();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.k4c_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.q4c(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.n4c());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.p4c(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.n4c());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.y4b();
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
    MissingFieldException.call($this, missingFields, missingFields.j() === 1 ? "Field '" + missingFields.o(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
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
    this.r4c_1 = missingFields;
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
      var tmp0_iterator = typeArguments.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.g();
      while (tmp0_iterator_0.h()) {
        var item_0 = tmp0_iterator_0.i();
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
      tmp = new ArrayListSerializer(serializers.o(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.o(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.o(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.o(0), serializers.o(1), serializers.o(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.o(0));
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
    var isNullable = type.bc();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.ac();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$0 = typeOrThrow(item);
      destination.e(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.q()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.t4c(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.s4c()) {
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
    if (typeArguments.q()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.t4c(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.u4c(rootClass, serializers) : tmp3_elvis_lhs;
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
      return $typeArguments.o(0).zb();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().v4c(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().v4c(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().w4c(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().w4c(clazz, types);
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
      return $types.o(0).zb();
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
      return $types.o(0).zb();
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
    if (_this__u8e3s4.y4b().x4c()) {
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
    this.y4c_1 = original;
    this.z4c_1 = kClass;
    this.a4d_1 = this.y4c_1.b4d() + '<' + this.z4c_1.kb() + '>';
  }
  protoOf(ContextDescriptor).b4d = function () {
    return this.a4d_1;
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
    return equals(this.y4c_1, another.y4c_1) && another.z4c_1.equals(this.z4c_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.z4c_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.a4d_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.z4c_1) + ', original: ' + toString(this.y4c_1) + ')';
  };
  protoOf(ContextDescriptor).c4d = function () {
    return this.y4c_1.c4d();
  };
  protoOf(ContextDescriptor).x4c = function () {
    return this.y4c_1.x4c();
  };
  protoOf(ContextDescriptor).d4d = function () {
    return this.y4c_1.d4d();
  };
  protoOf(ContextDescriptor).e4d = function () {
    return this.y4c_1.e4d();
  };
  protoOf(ContextDescriptor).f4d = function () {
    return this.y4c_1.f4d();
  };
  protoOf(ContextDescriptor).g4d = function (index) {
    return this.y4c_1.g4d(index);
  };
  protoOf(ContextDescriptor).h4d = function (name) {
    return this.y4c_1.h4d(name);
  };
  protoOf(ContextDescriptor).i4d = function (index) {
    return this.y4c_1.i4d(index);
  };
  protoOf(ContextDescriptor).j4d = function (index) {
    return this.y4c_1.j4d(index);
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
    this.l4d_1 = $this_elementDescriptors;
    this.k4d_1 = $this_elementDescriptors.e4d();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.k4d_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.l4d_1.e4d();
    var _unary__edvuaz = this.k4d_1;
    this.k4d_1 = _unary__edvuaz - 1 | 0;
    return this.l4d_1.i4d(tmp - _unary__edvuaz | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.m4d_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.m4d_1);
  };
  function elementNames$1($this_elementNames) {
    this.o4d_1 = $this_elementNames;
    this.n4d_1 = $this_elementNames.e4d();
  }
  protoOf(elementNames$1).h = function () {
    return this.n4d_1 > 0;
  };
  protoOf(elementNames$1).i = function () {
    var tmp = this.o4d_1.e4d();
    var _unary__edvuaz = this.n4d_1;
    this.n4d_1 = _unary__edvuaz - 1 | 0;
    return this.o4d_1.g4d(tmp - _unary__edvuaz | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.p4d_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.p4d_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.e4c_1.j(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.b4c_1 = serialName;
    this.c4c_1 = false;
    this.d4c_1 = emptyList();
    this.e4c_1 = ArrayList_init_$Create$_0();
    this.f4c_1 = HashSet_init_$Create$();
    this.g4c_1 = ArrayList_init_$Create$_0();
    this.h4c_1 = ArrayList_init_$Create$_0();
    this.i4c_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).q4d = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.f4c_1.e(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.b4c_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.e4c_1.e(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.g4c_1.e(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.h4c_1.e(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.i4c_1.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).j4c = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.q4d(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.q4d.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.c4e_1;
    _hashCode$factory();
    return this_0.w();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.b4e_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.g4d(it) + ': ' + this$0.i4d(it).b4d();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.r4d_1 = serialName;
    this.s4d_1 = kind;
    this.t4d_1 = elementsCount;
    this.u4d_1 = builder.d4c_1;
    this.v4d_1 = toHashSet(builder.e4c_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.e4c_1;
    tmp.w4d_1 = copyToArray(this_0);
    this.x4d_1 = compactArray(builder.g4c_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.h4c_1;
    tmp_0.y4d_1 = copyToArray(this_1);
    this.z4d_1 = toBooleanArray(builder.i4c_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.w4d_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.fh_1, item.eh_1);
      destination.e(tmp$ret$2);
    }
    tmp_1.a4e_1 = toMap(destination);
    this.b4e_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.c4e_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).b4d = function () {
    return this.r4d_1;
  };
  protoOf(SerialDescriptorImpl).c4d = function () {
    return this.s4d_1;
  };
  protoOf(SerialDescriptorImpl).e4d = function () {
    return this.t4d_1;
  };
  protoOf(SerialDescriptorImpl).f4d = function () {
    return this.u4d_1;
  };
  protoOf(SerialDescriptorImpl).d4e = function () {
    return this.v4d_1;
  };
  protoOf(SerialDescriptorImpl).g4d = function (index) {
    return getChecked(this.w4d_1, index);
  };
  protoOf(SerialDescriptorImpl).h4d = function (name) {
    var tmp0_elvis_lhs = this.a4e_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).i4d = function (index) {
    return getChecked(this.x4d_1, index);
  };
  protoOf(SerialDescriptorImpl).j4d = function (index) {
    return getChecked_0(this.z4d_1, index);
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
      if (!(this.b4d() === other.b4d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.b4e_1, other.b4e_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.e4d() === other.e4d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.e4d();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.i4d(index).b4d() === other.i4d(index).b4d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.i4d(index).c4d(), other.i4d(index).c4d())) {
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
    var tmp = until(0, this.t4d_1);
    var tmp_0 = this.r4d_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.e4c_1.j(), toList(typeParameters), sdBuilder);
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
    return ensureNotNull(getKClassFromExpression(this).kb());
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
  protoOf(AbstractEncoder).e4e = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).f4e = function (descriptor) {
  };
  protoOf(AbstractEncoder).g4e = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).h4e = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).i4e = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).j4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).k4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).l4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).m4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).n4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).o4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).p4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).q4e = function (value) {
    return this.h4e(new Char(value));
  };
  protoOf(AbstractEncoder).r4e = function (value) {
    return this.h4e(value);
  };
  protoOf(AbstractEncoder).s4e = function (enumDescriptor, index) {
    return this.h4e(index);
  };
  protoOf(AbstractEncoder).t4e = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).u4e = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.j4e(value);
    }
  };
  protoOf(AbstractEncoder).v4e = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.k4e(value);
    }
  };
  protoOf(AbstractEncoder).w4e = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.l4e(value);
    }
  };
  protoOf(AbstractEncoder).x4e = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.m4e(value);
    }
  };
  protoOf(AbstractEncoder).y4e = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.n4e(value);
    }
  };
  protoOf(AbstractEncoder).z4e = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.o4e(value);
    }
  };
  protoOf(AbstractEncoder).a4f = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.p4e(value);
    }
  };
  protoOf(AbstractEncoder).b4f = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.q4e(value);
    }
  };
  protoOf(AbstractEncoder).c4f = function (descriptor, index, value) {
    if (this.g4e(descriptor, index)) {
      this.r4e(value);
    }
  };
  protoOf(AbstractEncoder).d4f = function (descriptor, index) {
    return this.g4e(descriptor, index) ? this.t4e(descriptor.i4d(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).e4f = function (descriptor, index, serializer, value) {
    if (this.g4e(descriptor, index)) {
      this.f4f(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.i4g($this.y4b(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.l4g($this.y4b(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).o4c = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.y4b();
    var composite = encoder.e4e(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.c4f(this.y4b(), 0, actualSerializer.y4b().b4d());
    var tmp = this.y4b();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.e4f(tmp, 1, tmp$ret$0, value);
    composite.f4e(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).z4b = function (encoder, value) {
    return this.o4c(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).a4c = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.y4b();
    var composite = decoder.e4e(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.x4f()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.y4f(this.y4b());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.i4g(this.y4b(), index);
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
            value = composite.l4g(this.y4b(), index, serializer);
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
    composite.f4e(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).p4c = function (decoder, klassName) {
    return decoder.g4f().m4g(this.n4c(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).q4c = function (encoder, value) {
    return encoder.g4f().n4g(this.n4c(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.kb();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.kb() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.kb() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.o4g_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).y4b = function () {
    return this.o4g_1;
  };
  protoOf(NothingSerializer_0).p4g = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).z4b = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.p4g(encoder, tmp);
  };
  protoOf(NothingSerializer_0).a4c = function (decoder) {
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
    this.q4g_1 = new PrimitiveSerialDescriptor('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).y4b = function () {
    return this.q4g_1;
  };
  protoOf(DurationSerializer).r4g = function (encoder, value) {
    encoder.r4e(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).z4b = function (encoder, value) {
    return this.r4g(encoder, value instanceof Duration ? value.nf_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).s4g = function (decoder) {
    return Companion_getInstance().en(decoder.t4f());
  };
  protoOf(DurationSerializer).a4c = function (decoder) {
    return new Duration(this.s4g(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.t4g_1 = new PrimitiveSerialDescriptor('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).y4b = function () {
    return this.t4g_1;
  };
  protoOf(UuidSerializer).u4g = function (encoder, value) {
    encoder.r4e(value.toString());
  };
  protoOf(UuidSerializer).z4b = function (encoder, value) {
    return this.u4g(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).a4c = function (decoder) {
    return Companion_getInstance_0().yn(decoder.t4f());
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
  protoOf(ArrayListClassDesc).b4d = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).b4d = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).b4d = function () {
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
  protoOf(ArrayClassDesc).b4d = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.x4g_1 = elementDescriptor;
    this.y4g_1 = 1;
  }
  protoOf(ListLikeDescriptor).c4d = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).e4d = function () {
    return this.y4g_1;
  };
  protoOf(ListLikeDescriptor).g4d = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).h4d = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).j4d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.b4d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).i4d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.b4d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.x4g_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.x4g_1, other.x4g_1) && this.b4d() === other.b4d())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.x4g_1), 31) + getStringHashCode(this.b4d()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.b4d() + '(' + toString(this.x4g_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.d4h_1 = serialName;
    this.e4h_1 = keyDescriptor;
    this.f4h_1 = valueDescriptor;
    this.g4h_1 = 2;
  }
  protoOf(MapLikeDescriptor).b4d = function () {
    return this.d4h_1;
  };
  protoOf(MapLikeDescriptor).c4d = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).e4d = function () {
    return this.g4h_1;
  };
  protoOf(MapLikeDescriptor).g4d = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).h4d = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).j4d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.b4d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).i4d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.b4d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.e4h_1;
        break;
      case 1:
        tmp = this.f4h_1;
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
    if (!(this.b4d() === other.b4d()))
      return false;
    if (!equals(this.e4h_1, other.e4h_1))
      return false;
    if (!equals(this.f4h_1, other.f4h_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.b4d());
    result = imul(31, result) + hashCode(this.e4h_1) | 0;
    result = imul(31, result) + hashCode(this.f4h_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.b4d() + '(' + toString(this.e4h_1) + ', ' + toString(this.f4h_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.l4h_1 = primitive.b4d() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).b4d = function () {
    return this.l4h_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.n4h_1 = new ArrayListClassDesc(element.y4b());
  }
  protoOf(ArrayListSerializer).y4b = function () {
    return this.n4h_1;
  };
  protoOf(ArrayListSerializer).b2o = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).o4h = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(ArrayListSerializer).p4h = function (_this__u8e3s4) {
    return this.o4h(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).q4h = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).r4h = function (_this__u8e3s4) {
    return this.q4h(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).s4h = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).t4h = function (_this__u8e3s4) {
    return this.s4h((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).u4h = function (_this__u8e3s4, size) {
    return _this__u8e3s4.w5(size);
  };
  protoOf(ArrayListSerializer).v4h = function (_this__u8e3s4, size) {
    return this.u4h(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).w4h = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.r2(index, element);
  };
  protoOf(ArrayListSerializer).x4h = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.w4h(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.i4i_1 = new HashSetClassDesc(eSerializer.y4b());
  }
  protoOf(HashSetSerializer).y4b = function () {
    return this.i4i_1;
  };
  protoOf(HashSetSerializer).b2o = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).j4i = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(HashSetSerializer).p4h = function (_this__u8e3s4) {
    return this.j4i(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).k4i = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).r4h = function (_this__u8e3s4) {
    return this.k4i(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).l4i = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).t4h = function (_this__u8e3s4) {
    return this.l4i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).m4i = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).v4h = function (_this__u8e3s4, size) {
    return this.m4i(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).n4i = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(HashSetSerializer).x4h = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.n4i(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.p4i_1 = new LinkedHashSetClassDesc(eSerializer.y4b());
  }
  protoOf(LinkedHashSetSerializer).y4b = function () {
    return this.p4i_1;
  };
  protoOf(LinkedHashSetSerializer).b2o = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).q4i = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(LinkedHashSetSerializer).p4h = function (_this__u8e3s4) {
    return this.q4i(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).r4i = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).r4h = function (_this__u8e3s4) {
    return this.r4i(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).l4i = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).t4h = function (_this__u8e3s4) {
    return this.l4i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).s4i = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).v4h = function (_this__u8e3s4, size) {
    return this.s4i(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).t4i = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(LinkedHashSetSerializer).x4h = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.t4i(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.w4i_1 = new HashMapClassDesc(kSerializer.y4b(), vSerializer.y4b());
  }
  protoOf(HashMapSerializer).y4b = function () {
    return this.w4i_1;
  };
  protoOf(HashMapSerializer).x4i = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(HashMapSerializer).y4i = function (_this__u8e3s4) {
    return this.x4i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).z4i = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.u().g();
  };
  protoOf(HashMapSerializer).a4j = function (_this__u8e3s4) {
    return this.z4i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).b2o = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).b4j = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.j(), 2);
  };
  protoOf(HashMapSerializer).p4h = function (_this__u8e3s4) {
    return this.b4j(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).c4j = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).r4h = function (_this__u8e3s4) {
    return this.c4j(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).d4j = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).t4h = function (_this__u8e3s4) {
    return this.d4j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).e4j = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).v4h = function (_this__u8e3s4, size) {
    return this.e4j(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.l4j_1 = new LinkedHashMapClassDesc(kSerializer.y4b(), vSerializer.y4b());
  }
  protoOf(LinkedHashMapSerializer).y4b = function () {
    return this.l4j_1;
  };
  protoOf(LinkedHashMapSerializer).x4i = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(LinkedHashMapSerializer).y4i = function (_this__u8e3s4) {
    return this.x4i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).z4i = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.u().g();
  };
  protoOf(LinkedHashMapSerializer).a4j = function (_this__u8e3s4) {
    return this.z4i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).b2o = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).m4j = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.j(), 2);
  };
  protoOf(LinkedHashMapSerializer).p4h = function (_this__u8e3s4) {
    return this.m4j(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).n4j = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).r4h = function (_this__u8e3s4) {
    return this.n4j(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).d4j = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).t4h = function (_this__u8e3s4) {
    return this.d4j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).o4j = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).v4h = function (_this__u8e3s4, size) {
    return this.o4j(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.q4j_1 = kClass;
    this.r4j_1 = new ArrayClassDesc(eSerializer.y4b());
  }
  protoOf(ReferenceArraySerializer).y4b = function () {
    return this.r4j_1;
  };
  protoOf(ReferenceArraySerializer).s4j = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).y4i = function (_this__u8e3s4) {
    return this.s4j((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).t4j = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).a4j = function (_this__u8e3s4) {
    return this.t4j((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).b2o = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).u4j = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(ReferenceArraySerializer).p4h = function (_this__u8e3s4) {
    return this.u4j(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).v4j = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.q4j_1);
  };
  protoOf(ReferenceArraySerializer).r4h = function (_this__u8e3s4) {
    return this.v4j(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).w4j = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).t4h = function (_this__u8e3s4) {
    return this.w4j((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).x4j = function (_this__u8e3s4, size) {
    return _this__u8e3s4.w5(size);
  };
  protoOf(ReferenceArraySerializer).v4h = function (_this__u8e3s4, size) {
    return this.x4j(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).y4j = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.r2(index, element);
  };
  protoOf(ReferenceArraySerializer).x4h = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.y4j(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).z4h = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(CollectionSerializer).y4i = function (_this__u8e3s4) {
    return this.z4h((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).a4i = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).a4j = function (_this__u8e3s4) {
    return this.a4i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.f4j_1 = keySerializer;
    this.g4j_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).h4j = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.c1_1;
    var last = progression.d1_1;
    var step_0 = progression.e1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.i4j(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).d4i = function (decoder, builder, startIndex, size) {
    return this.h4j(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).i4j = function (decoder, index, builder, checkIndex) {
    var key = decoder.l4g(this.y4b(), index, this.f4j_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.y4f(this.y4b());
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
    if (builder.l2(key)) {
      var tmp_2 = this.g4j_1.y4b().c4d();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.k4g(this.y4b(), vIndex, this.g4j_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.l4g(this.y4b(), vIndex, this.g4j_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.f2(key, value);
  };
  protoOf(MapLikeSerializer).e4i = function (decoder, index, builder, checkIndex) {
    return this.i4j(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).c4i = function (encoder, value) {
    var size = this.y4i(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.y4b();
    var composite = encoder.i4f(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.a4j(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.v();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w();
      var tmp = this.y4b();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.e4f(tmp, _unary__edvuaz, this.f4j_1, k);
      var tmp_0 = this.y4b();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.e4f(tmp_0, _unary__edvuaz_0, this.g4j_1, v);
    }
    composite.f4e(descriptor);
  };
  protoOf(MapLikeSerializer).z4b = function (encoder, value) {
    return this.c4i(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.b4i_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).c4i = function (encoder, value) {
    var size = this.y4i(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.y4b();
    var composite = encoder.i4f(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.a4j(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.e4f(this.y4b(), index, this.b4i_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.f4e(descriptor);
  };
  protoOf(CollectionLikeSerializer).z4b = function (encoder, value) {
    return this.c4i(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).d4i = function (decoder, builder, startIndex, size) {
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
        this.e4i(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).e4i = function (decoder, index, builder, checkIndex) {
    this.x4h(builder, index, decoder.l4g(this.y4b(), index, this.b4i_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.z4f($this.y4b());
    $this.v4h(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).g4i = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.t4h(previous);
    var builder = tmp1_elvis_lhs == null ? this.b2o() : tmp1_elvis_lhs;
    var startIndex = this.p4h(builder);
    var compositeDecoder = decoder.e4e(this.y4b());
    if (compositeDecoder.x4f()) {
      this.d4i(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.y4f(this.y4b());
        if (index === -1)
          break $l$loop;
        this.f4i(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.f4e(this.y4b());
    return this.r4h(builder);
  };
  protoOf(AbstractCollectionSerializer).a4c = function (decoder) {
    return this.g4i(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).f4i = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.e4i(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.e4i.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.a4k_1 = new PrimitiveArrayDescriptor(primitiveSerializer.y4b());
  }
  protoOf(PrimitiveArraySerializer).y4b = function () {
    return this.a4k_1;
  };
  protoOf(PrimitiveArraySerializer).b4k = function (_this__u8e3s4) {
    return _this__u8e3s4.c4k();
  };
  protoOf(PrimitiveArraySerializer).p4h = function (_this__u8e3s4) {
    return this.b4k(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).d4k = function (_this__u8e3s4) {
    return _this__u8e3s4.e4k();
  };
  protoOf(PrimitiveArraySerializer).r4h = function (_this__u8e3s4) {
    return this.d4k(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).f4k = function (_this__u8e3s4, size) {
    return _this__u8e3s4.g4k(size);
  };
  protoOf(PrimitiveArraySerializer).v4h = function (_this__u8e3s4, size) {
    return this.f4k(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).h4k = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).a4j = function (_this__u8e3s4) {
    return this.h4k((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).i4k = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).x4h = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.i4k(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).b2o = function () {
    return this.t4h(this.j4k());
  };
  protoOf(PrimitiveArraySerializer).m4k = function (encoder, value) {
    var size = this.y4i(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.a4k_1;
    var composite = encoder.i4f(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.l4k(composite, value, size);
    composite.f4e(descriptor);
  };
  protoOf(PrimitiveArraySerializer).z4b = function (encoder, value) {
    return this.m4k(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).c4i = function (encoder, value) {
    return this.m4k(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).a4c = function (decoder) {
    return this.g4i(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).n4k = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.c4k() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.g4k(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.g4k.call(this, requiredCapacity);
    }
    return tmp;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.o4k_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.o4k_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.d4l(element.t2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.p4k_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.o4k_1 = values;
    this.p4k_1 = null;
    var tmp = this;
    tmp.q4k_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).y4b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.q4k_1;
    descriptor$factory_0();
    return this_0.w();
  };
  protoOf(EnumSerializer).e4l = function (encoder, value) {
    var index = indexOf(this.o4k_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.y4b().b4d() + ', ' + ('must be one of ' + contentToString(this.o4k_1)));
    }
    encoder.s4e(this.y4b(), index);
  };
  protoOf(EnumSerializer).z4b = function (encoder, value) {
    return this.e4l(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).a4c = function (decoder) {
    var index = decoder.u4f(this.y4b());
    if (!(0 <= index ? index <= (this.o4k_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.y4b().b4d() + ' enum values, ' + ('values size is ' + this.o4k_1.length));
    }
    return this.o4k_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.y4b().b4d() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.s4l_1;
    elementDescriptors$factory();
    return this_0.w();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.g4d(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.r4l_1 = ENUM_getInstance();
    var tmp = this;
    tmp.s4l_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).c4d = function () {
    return this.r4l_1;
  };
  protoOf(EnumDescriptor).i4d = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.c4d() === ENUM_getInstance()))
      return false;
    if (!(this.b4d() === other.b4d()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.b4d() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.b4d());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
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
      return receiver.y4b();
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
    this.h4m_1 = true;
  }
  protoOf(InlineClassDescriptor).d4d = function () {
    return this.h4m_1;
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
      if (!(this.b4d() === other.b4d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.h4m_1 && contentEquals(this.t4l(), other.t4l()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.e4d() === other.e4d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.e4d();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.i4d(index).b4d() === other.i4d(index).b4d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.i4d(index).c4d(), other.i4d(index).c4d())) {
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
    this.i4m_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).j4m = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.i4m_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).y4b = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).z4b = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).a4c = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.l4m_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).g4f = function () {
    return this.l4m_1;
  };
  protoOf(NoOpEncoder).h4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).i4e = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).j4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).k4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).l4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).m4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).n4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).o4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).p4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).q4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).r4e = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).s4e = function (enumDescriptor, index) {
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
    this.m4m_1 = OBJECT_getInstance();
    this.n4m_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).c4d = function () {
    return this.m4m_1;
  };
  protoOf(NothingSerialDescriptor).b4d = function () {
    return this.n4m_1;
  };
  protoOf(NothingSerialDescriptor).e4d = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).g4d = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).h4d = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).j4d = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).i4d = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.n4m_1) + imul(31, this.m4m_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.o4m_1 = serializer;
    this.p4m_1 = new SerialDescriptorForNullable(this.o4m_1.y4b());
  }
  protoOf(NullableSerializer).y4b = function () {
    return this.p4m_1;
  };
  protoOf(NullableSerializer).q4m = function (encoder, value) {
    if (!(value == null)) {
      encoder.h4f();
      encoder.f4f(this.o4m_1, value);
    } else {
      encoder.i4e();
    }
  };
  protoOf(NullableSerializer).z4b = function (encoder, value) {
    return this.q4m(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).a4c = function (decoder) {
    return decoder.j4f() ? decoder.w4f(this.o4m_1) : decoder.k4f();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.o4m_1, other.o4m_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.o4m_1);
  };
  function SerialDescriptorForNullable(original) {
    this.r4m_1 = original;
    this.s4m_1 = this.r4m_1.b4d() + '?';
    this.t4m_1 = cachedSerialNames(this.r4m_1);
  }
  protoOf(SerialDescriptorForNullable).b4d = function () {
    return this.s4m_1;
  };
  protoOf(SerialDescriptorForNullable).d4e = function () {
    return this.t4m_1;
  };
  protoOf(SerialDescriptorForNullable).x4c = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.r4m_1, other.r4m_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.r4m_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.r4m_1), 31);
  };
  protoOf(SerialDescriptorForNullable).c4d = function () {
    return this.r4m_1.c4d();
  };
  protoOf(SerialDescriptorForNullable).d4d = function () {
    return this.r4m_1.d4d();
  };
  protoOf(SerialDescriptorForNullable).e4d = function () {
    return this.r4m_1.e4d();
  };
  protoOf(SerialDescriptorForNullable).f4d = function () {
    return this.r4m_1.f4d();
  };
  protoOf(SerialDescriptorForNullable).g4d = function (index) {
    return this.r4m_1.g4d(index);
  };
  protoOf(SerialDescriptorForNullable).h4d = function (name) {
    return this.r4m_1.h4d(name);
  };
  protoOf(SerialDescriptorForNullable).i4d = function (index) {
    return this.r4m_1.i4d(index);
  };
  protoOf(SerialDescriptorForNullable).j4d = function (index) {
    return this.r4m_1.j4d(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.d4c_1 = this$0.v4m_1;
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
    this.u4m_1 = objectInstance;
    this.v4m_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w4m_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).y4b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.w4m_1;
    descriptor$factory_1();
    return this_0.w();
  };
  protoOf(ObjectSerializer).o4c = function (encoder, value) {
    encoder.e4e(this.y4b()).f4e(this.y4b());
  };
  protoOf(ObjectSerializer).z4b = function (encoder, value) {
    return this.o4c(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).a4c = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.y4b();
    var composite = decoder.e4e(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.x4f()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.y4f(this.y4b());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.f4e(descriptor);
    return this.u4m_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.y4b();
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
      return _this__u8e3s4.d4e();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.e4d());
    var inductionVariable = 0;
    var last = _this__u8e3s4.e4d();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.g4d(i);
        result.e(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.zb();
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
      var value = _this__u8e3s4.vl_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.vl_1);
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
    var tmp0_elvis_lhs = _this__u8e3s4.kb();
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
    if (!(_this__u8e3s4 == null || _this__u8e3s4.q())) {
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
                var element = descriptor.g4d(imul(maskSlot, 32) + i | 0);
                missingFields.e(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.b4d());
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
          var element = descriptor.g4d(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.b4d());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.b4d());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.b4d();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.c4d();
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
    var this_0 = $this.a4l_1;
    childSerializers$factory();
    return this_0.w();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.c4l_1;
    _hashCode$factory_0();
    return this_0.w();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.v4k_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.v4k_1[i];
        indices.f2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.s4k_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j4m();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.s4k_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k4m();
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
          var tmp$ret$0 = item.y4b();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.t4l());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.g4d(i) + ': ' + this$0.i4d(i).b4d();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.r4k_1 = serialName;
    this.s4k_1 = generatedSerializer;
    this.t4k_1 = elementsCount;
    this.u4k_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.t4k_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.v4k_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.t4k_1;
    tmp_3.w4k_1 = fillArrayVal(Array(size), null);
    this.x4k_1 = null;
    this.y4k_1 = booleanArray(this.t4k_1);
    this.z4k_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.a4l_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.b4l_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.c4l_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).b4d = function () {
    return this.r4k_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).e4d = function () {
    return this.t4k_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).c4d = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).f4d = function () {
    var tmp0_elvis_lhs = this.x4k_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).d4e = function () {
    return this.z4k_1.j2();
  };
  protoOf(PluginGeneratedSerialDescriptor).t4l = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.b4l_1;
    typeParameterDescriptors$factory();
    return this_0.w();
  };
  protoOf(PluginGeneratedSerialDescriptor).u4l = function (name, isOptional) {
    this.u4k_1 = this.u4k_1 + 1 | 0;
    this.v4k_1[this.u4k_1] = name;
    this.y4k_1[this.u4k_1] = isOptional;
    this.w4k_1[this.u4k_1] = null;
    if (this.u4k_1 === (this.t4k_1 - 1 | 0)) {
      this.z4k_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).d4l = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.u4l(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.u4l.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).i4d = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).y4b();
  };
  protoOf(PluginGeneratedSerialDescriptor).j4d = function (index) {
    return getChecked_0(this.y4k_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).g4d = function (index) {
    return getChecked(this.v4k_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).h4d = function (name) {
    var tmp0_elvis_lhs = this.z4k_1.n2(name);
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
      if (!(this.b4d() === other.b4d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.t4l(), other.t4l())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.e4d() === other.e4d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.e4d();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.i4d(index).b4d() === other.i4d(index).b4d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.i4d(index).c4d(), other.i4d(index).c4d())) {
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
    var tmp = until(0, this.t4k_1);
    var tmp_0 = this.b4d() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.t4l();
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
  protoOf(CharArraySerializer_0).a4n = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.a4n((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).b4n = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.b4n((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).j4k = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).c4n = function (decoder, index, builder, checkIndex) {
    builder.f4n(decoder.c4g(this.a4k_1, index));
  };
  protoOf(CharArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.c4n(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.c4n(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).g4n = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.b4f(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).l4k = function (encoder, content, size) {
    return this.g4n(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).j4n = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.j4n((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).k4n = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.k4n((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).j4k = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).l4n = function (decoder, index, builder, checkIndex) {
    builder.o4n(decoder.h4g(this.a4k_1, index));
  };
  protoOf(DoubleArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.l4n(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.l4n(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).p4n = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.a4f(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).l4k = function (encoder, content, size) {
    return this.p4n(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).s4n = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.s4n((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).t4n = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.t4n((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).j4k = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).u4n = function (decoder, index, builder, checkIndex) {
    builder.x4n(decoder.g4g(this.a4k_1, index));
  };
  protoOf(FloatArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.u4n(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.u4n(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).y4n = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.z4e(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).l4k = function (encoder, content, size) {
    return this.y4n(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).b4o = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.b4o((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).c4o = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.c4o((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).j4k = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).d4o = function (decoder, index, builder, checkIndex) {
    builder.g4o(decoder.f4g(this.a4k_1, index));
  };
  protoOf(LongArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.d4o(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.d4o(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).h4o = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.y4e(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).l4k = function (encoder, content, size) {
    return this.h4o(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).k4o = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.k4o(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.gp_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l4o = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.l4o(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.gp_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).m4o = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).j4k = function () {
    return new ULongArray(this.m4o());
  };
  protoOf(ULongArraySerializer_0).n4o = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.j4g(this.a4k_1, index).q4f();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.q4o(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.n4o(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.n4o(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).r4o = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.d4f(this.a4k_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.n4e(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).l4k = function (encoder, content, size) {
    return this.r4o(encoder, content instanceof ULongArray ? content.gp_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).u4o = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.u4o((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).v4o = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.v4o((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).j4k = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).w4o = function (decoder, index, builder, checkIndex) {
    builder.z4o(decoder.e4g(this.a4k_1, index));
  };
  protoOf(IntArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.w4o(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.w4o(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).a4p = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.x4e(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).l4k = function (encoder, content, size) {
    return this.a4p(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).d4p = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.d4p(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.uo_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e4p = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.e4p(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.uo_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).f4p = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).j4k = function () {
    return new UIntArray(this.f4p());
  };
  protoOf(UIntArraySerializer_0).g4p = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.j4g(this.a4k_1, index).p4f();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.j4p(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.g4p(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.g4p(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).k4p = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.d4f(this.a4k_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.m4e(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).l4k = function (encoder, content, size) {
    return this.k4p(encoder, content instanceof UIntArray ? content.uo_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).n4p = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.n4p((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).o4p = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.o4p((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).j4k = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).p4p = function (decoder, index, builder, checkIndex) {
    builder.s4p(decoder.d4g(this.a4k_1, index));
  };
  protoOf(ShortArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.p4p(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.p4p(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).t4p = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.w4e(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).l4k = function (encoder, content, size) {
    return this.t4p(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).w4p = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.w4p(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.sp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x4p = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.x4p(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.sp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).y4p = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).j4k = function () {
    return new UShortArray(this.y4p());
  };
  protoOf(UShortArraySerializer_0).z4p = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.j4g(this.a4k_1, index).n4f();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.c4q(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.z4p(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.z4p(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).d4q = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.d4f(this.a4k_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.l4e(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).l4k = function (encoder, content, size) {
    return this.d4q(encoder, content instanceof UShortArray ? content.sp_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).g4q = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.g4q((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).h4q = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.h4q((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).j4k = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).i4q = function (decoder, index, builder, checkIndex) {
    builder.l4q(decoder.b4g(this.a4k_1, index));
  };
  protoOf(ByteArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.i4q(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.i4q(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).m4q = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.v4e(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).l4k = function (encoder, content, size) {
    return this.m4q(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).p4q = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.p4q(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.io_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q4q = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.q4q(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.io_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).r4q = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).j4k = function () {
    return new UByteArray(this.r4q());
  };
  protoOf(UByteArraySerializer_0).s4q = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.j4g(this.a4k_1, index).m4f();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.v4q(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.s4q(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.s4q(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).w4q = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.d4f(this.a4k_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.k4e(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).l4k = function (encoder, content, size) {
    return this.w4q(encoder, content instanceof UByteArray ? content.io_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).z4q = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).y4i = function (_this__u8e3s4) {
    return this.z4q((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).a4r = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).t4h = function (_this__u8e3s4) {
    return this.a4r((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).j4k = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).b4r = function (decoder, index, builder, checkIndex) {
    builder.e4r(decoder.a4g(this.a4k_1, index));
  };
  protoOf(BooleanArraySerializer_0).e4i = function (decoder, index, builder, checkIndex) {
    return this.b4r(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).k4k = function (decoder, index, builder, checkIndex) {
    return this.b4r(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).f4r = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.u4e(this.a4k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).l4k = function (encoder, content, size) {
    return this.f4r(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d4n_1 = bufferWithData;
    this.e4n_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(CharArrayBuilder).c4k = function () {
    return this.e4n_1;
  };
  protoOf(CharArrayBuilder).g4k = function (requiredCapacity) {
    if (this.d4n_1.length < requiredCapacity)
      this.d4n_1 = copyOf(this.d4n_1, coerceAtLeast(requiredCapacity, imul(this.d4n_1.length, 2)));
  };
  protoOf(CharArrayBuilder).f4n = function (c) {
    this.n4k();
    var tmp = this.d4n_1;
    var _unary__edvuaz = this.e4n_1;
    this.e4n_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).e4k = function () {
    return copyOf(this.d4n_1, this.e4n_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m4n_1 = bufferWithData;
    this.n4n_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(DoubleArrayBuilder).c4k = function () {
    return this.n4n_1;
  };
  protoOf(DoubleArrayBuilder).g4k = function (requiredCapacity) {
    if (this.m4n_1.length < requiredCapacity)
      this.m4n_1 = copyOf_0(this.m4n_1, coerceAtLeast(requiredCapacity, imul(this.m4n_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).o4n = function (c) {
    this.n4k();
    var tmp = this.m4n_1;
    var _unary__edvuaz = this.n4n_1;
    this.n4n_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).e4k = function () {
    return copyOf_0(this.m4n_1, this.n4n_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v4n_1 = bufferWithData;
    this.w4n_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(FloatArrayBuilder).c4k = function () {
    return this.w4n_1;
  };
  protoOf(FloatArrayBuilder).g4k = function (requiredCapacity) {
    if (this.v4n_1.length < requiredCapacity)
      this.v4n_1 = copyOf_1(this.v4n_1, coerceAtLeast(requiredCapacity, imul(this.v4n_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).x4n = function (c) {
    this.n4k();
    var tmp = this.v4n_1;
    var _unary__edvuaz = this.w4n_1;
    this.w4n_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).e4k = function () {
    return copyOf_1(this.v4n_1, this.w4n_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e4o_1 = bufferWithData;
    this.f4o_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(LongArrayBuilder).c4k = function () {
    return this.f4o_1;
  };
  protoOf(LongArrayBuilder).g4k = function (requiredCapacity) {
    if (this.e4o_1.length < requiredCapacity)
      this.e4o_1 = copyOf_2(this.e4o_1, coerceAtLeast(requiredCapacity, imul(this.e4o_1.length, 2)));
  };
  protoOf(LongArrayBuilder).g4o = function (c) {
    this.n4k();
    var tmp = this.e4o_1;
    var _unary__edvuaz = this.f4o_1;
    this.f4o_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).e4k = function () {
    return copyOf_2(this.e4o_1, this.f4o_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o4o_1 = bufferWithData;
    this.p4o_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.g4k(10);
  }
  protoOf(ULongArrayBuilder).c4k = function () {
    return this.p4o_1;
  };
  protoOf(ULongArrayBuilder).g4k = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.o4o_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.o4o_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.o4o_1), 2));
      tmp.o4o_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).q4o = function (c) {
    this.n4k();
    var tmp = this.o4o_1;
    var _unary__edvuaz = this.p4o_1;
    this.p4o_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).g4r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.o4o_1;
    var newSize = this.p4o_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).e4k = function () {
    return new ULongArray(this.g4r());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x4o_1 = bufferWithData;
    this.y4o_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(IntArrayBuilder).c4k = function () {
    return this.y4o_1;
  };
  protoOf(IntArrayBuilder).g4k = function (requiredCapacity) {
    if (this.x4o_1.length < requiredCapacity)
      this.x4o_1 = copyOf_3(this.x4o_1, coerceAtLeast(requiredCapacity, imul(this.x4o_1.length, 2)));
  };
  protoOf(IntArrayBuilder).z4o = function (c) {
    this.n4k();
    var tmp = this.x4o_1;
    var _unary__edvuaz = this.y4o_1;
    this.y4o_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).e4k = function () {
    return copyOf_3(this.x4o_1, this.y4o_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h4p_1 = bufferWithData;
    this.i4p_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.g4k(10);
  }
  protoOf(UIntArrayBuilder).c4k = function () {
    return this.i4p_1;
  };
  protoOf(UIntArrayBuilder).g4k = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.h4p_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.h4p_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.h4p_1), 2));
      tmp.h4p_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).j4p = function (c) {
    this.n4k();
    var tmp = this.h4p_1;
    var _unary__edvuaz = this.i4p_1;
    this.i4p_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).h4r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.h4p_1;
    var newSize = this.i4p_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).e4k = function () {
    return new UIntArray(this.h4r());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q4p_1 = bufferWithData;
    this.r4p_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(ShortArrayBuilder).c4k = function () {
    return this.r4p_1;
  };
  protoOf(ShortArrayBuilder).g4k = function (requiredCapacity) {
    if (this.q4p_1.length < requiredCapacity)
      this.q4p_1 = copyOf_4(this.q4p_1, coerceAtLeast(requiredCapacity, imul(this.q4p_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).s4p = function (c) {
    this.n4k();
    var tmp = this.q4p_1;
    var _unary__edvuaz = this.r4p_1;
    this.r4p_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).e4k = function () {
    return copyOf_4(this.q4p_1, this.r4p_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a4q_1 = bufferWithData;
    this.b4q_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.g4k(10);
  }
  protoOf(UShortArrayBuilder).c4k = function () {
    return this.b4q_1;
  };
  protoOf(UShortArrayBuilder).g4k = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.a4q_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.a4q_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.a4q_1), 2));
      tmp.a4q_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).c4q = function (c) {
    this.n4k();
    var tmp = this.a4q_1;
    var _unary__edvuaz = this.b4q_1;
    this.b4q_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).i4r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.a4q_1;
    var newSize = this.b4q_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).e4k = function () {
    return new UShortArray(this.i4r());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j4q_1 = bufferWithData;
    this.k4q_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(ByteArrayBuilder).c4k = function () {
    return this.k4q_1;
  };
  protoOf(ByteArrayBuilder).g4k = function (requiredCapacity) {
    if (this.j4q_1.length < requiredCapacity)
      this.j4q_1 = copyOf_5(this.j4q_1, coerceAtLeast(requiredCapacity, imul(this.j4q_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).l4q = function (c) {
    this.n4k();
    var tmp = this.j4q_1;
    var _unary__edvuaz = this.k4q_1;
    this.k4q_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).e4k = function () {
    return copyOf_5(this.j4q_1, this.k4q_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t4q_1 = bufferWithData;
    this.u4q_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.g4k(10);
  }
  protoOf(UByteArrayBuilder).c4k = function () {
    return this.u4q_1;
  };
  protoOf(UByteArrayBuilder).g4k = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.t4q_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.t4q_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.t4q_1), 2));
      tmp.t4q_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).v4q = function (c) {
    this.n4k();
    var tmp = this.t4q_1;
    var _unary__edvuaz = this.u4q_1;
    this.u4q_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).j4r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.t4q_1;
    var newSize = this.u4q_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).e4k = function () {
    return new UByteArray(this.j4r());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c4r_1 = bufferWithData;
    this.d4r_1 = bufferWithData.length;
    this.g4k(10);
  }
  protoOf(BooleanArrayBuilder).c4k = function () {
    return this.d4r_1;
  };
  protoOf(BooleanArrayBuilder).g4k = function (requiredCapacity) {
    if (this.c4r_1.length < requiredCapacity)
      this.c4r_1 = copyOf_6(this.c4r_1, coerceAtLeast(requiredCapacity, imul(this.c4r_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).e4r = function (c) {
    this.n4k();
    var tmp = this.c4r_1;
    var _unary__edvuaz = this.d4r_1;
    this.d4r_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).e4k = function () {
    return copyOf_6(this.c4r_1, this.d4r_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().n2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.k4r_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).y4b = function () {
    return this.k4r_1;
  };
  protoOf(StringSerializer).l4r = function (encoder, value) {
    return encoder.r4e(value);
  };
  protoOf(StringSerializer).z4b = function (encoder, value) {
    return this.l4r(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).a4c = function (decoder) {
    return decoder.t4f();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.m4r_1 = new PrimitiveSerialDescriptor('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).y4b = function () {
    return this.m4r_1;
  };
  protoOf(CharSerializer).n4r = function (encoder, value) {
    return encoder.q4e(value);
  };
  protoOf(CharSerializer).z4b = function (encoder, value) {
    return this.n4r(encoder, value instanceof Char ? value.o1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).o4r = function (decoder) {
    return decoder.o4f();
  };
  protoOf(CharSerializer).a4c = function (decoder) {
    return new Char(this.o4r(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.p4r_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).y4b = function () {
    return this.p4r_1;
  };
  protoOf(DoubleSerializer).q4r = function (encoder, value) {
    return encoder.p4e(value);
  };
  protoOf(DoubleSerializer).z4b = function (encoder, value) {
    return this.q4r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).a4c = function (decoder) {
    return decoder.s4f();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.r4r_1 = new PrimitiveSerialDescriptor('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).y4b = function () {
    return this.r4r_1;
  };
  protoOf(FloatSerializer).s4r = function (encoder, value) {
    return encoder.o4e(value);
  };
  protoOf(FloatSerializer).z4b = function (encoder, value) {
    return this.s4r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).a4c = function (decoder) {
    return decoder.r4f();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.t4r_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).y4b = function () {
    return this.t4r_1;
  };
  protoOf(LongSerializer).u4r = function (encoder, value) {
    return encoder.n4e(value);
  };
  protoOf(LongSerializer).z4b = function (encoder, value) {
    return this.u4r(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).a4c = function (decoder) {
    return decoder.q4f();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.v4r_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).y4b = function () {
    return this.v4r_1;
  };
  protoOf(IntSerializer).w4r = function (encoder, value) {
    return encoder.m4e(value);
  };
  protoOf(IntSerializer).z4b = function (encoder, value) {
    return this.w4r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).a4c = function (decoder) {
    return decoder.p4f();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.x4r_1 = new PrimitiveSerialDescriptor('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).y4b = function () {
    return this.x4r_1;
  };
  protoOf(ShortSerializer).y4r = function (encoder, value) {
    return encoder.l4e(value);
  };
  protoOf(ShortSerializer).z4b = function (encoder, value) {
    return this.y4r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).a4c = function (decoder) {
    return decoder.n4f();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.z4r_1 = new PrimitiveSerialDescriptor('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).y4b = function () {
    return this.z4r_1;
  };
  protoOf(ByteSerializer).a4s = function (encoder, value) {
    return encoder.k4e(value);
  };
  protoOf(ByteSerializer).z4b = function (encoder, value) {
    return this.a4s(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).a4c = function (decoder) {
    return decoder.m4f();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.b4s_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).y4b = function () {
    return this.b4s_1;
  };
  protoOf(BooleanSerializer).c4s = function (encoder, value) {
    return encoder.j4e(value);
  };
  protoOf(BooleanSerializer).z4b = function (encoder, value) {
    return this.c4s(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).a4c = function (decoder) {
    return decoder.l4f();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.d4s_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).y4b = function () {
    return this.d4s_1.y4b();
  };
  protoOf(UnitSerializer).e4s = function (encoder, value) {
    this.d4s_1.o4c(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).z4b = function (encoder, value) {
    return this.e4s(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).f4s = function (decoder) {
    this.d4s_1.a4c(decoder);
  };
  protoOf(UnitSerializer).a4c = function (decoder) {
    this.f4s(decoder);
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
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.g4s_1 = serialName;
    this.h4s_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).b4d = function () {
    return this.g4s_1;
  };
  protoOf(PrimitiveSerialDescriptor).c4d = function () {
    return this.h4s_1;
  };
  protoOf(PrimitiveSerialDescriptor).e4d = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).g4d = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor).h4d = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor).j4d = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor).i4d = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.g4s_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.g4s_1 === other.g4s_1 && equals(this.h4s_1, other.h4s_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.g4s_1) + imul(31, this.h4s_1.hashCode()) | 0;
  };
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
    this.i4s_1 = key;
    this.j4s_1 = value;
  }
  protoOf(MapEntry).v = function () {
    return this.i4s_1;
  };
  protoOf(MapEntry).w = function () {
    return this.j4s_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.i4s_1) + ', value=' + toString_0(this.j4s_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.i4s_1 == null ? 0 : hashCode(this.i4s_1);
    result = imul(result, 31) + (this.j4s_1 == null ? 0 : hashCode(this.j4s_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.i4s_1, tmp0_other_with_cast.i4s_1))
      return false;
    if (!equals(this.j4s_1, tmp0_other_with_cast.j4s_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.j4c('key', $keySerializer.y4b());
      $this$buildSerialDescriptor.j4c('value', $valueSerializer.y4b());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.m4s_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).y4b = function () {
    return this.m4s_1;
  };
  protoOf(MapEntrySerializer_0).n4s = function (_this__u8e3s4) {
    return _this__u8e3s4.v();
  };
  protoOf(MapEntrySerializer_0).o4s = function (_this__u8e3s4) {
    return this.n4s((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).p4s = function (_this__u8e3s4) {
    return _this__u8e3s4.w();
  };
  protoOf(MapEntrySerializer_0).q4s = function (_this__u8e3s4) {
    return this.p4s((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).r4s = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.j4c('first', $keySerializer.y4b());
      $this$buildClassSerialDescriptor.j4c('second', $valueSerializer.y4b());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.x4s_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).y4b = function () {
    return this.x4s_1;
  };
  protoOf(PairSerializer_0).y4s = function (_this__u8e3s4) {
    return _this__u8e3s4.eb_1;
  };
  protoOf(PairSerializer_0).o4s = function (_this__u8e3s4) {
    return this.y4s(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).z4s = function (_this__u8e3s4) {
    return _this__u8e3s4.fb_1;
  };
  protoOf(PairSerializer_0).q4s = function (_this__u8e3s4) {
    return this.z4s(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).r4s = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.l4g($this.d4t_1, 0, $this.a4t_1);
    var b = composite.l4g($this.d4t_1, 1, $this.b4t_1);
    var c = composite.l4g($this.d4t_1, 2, $this.c4t_1);
    composite.f4e($this.d4t_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.y4f($this.d4t_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.l4g($this.d4t_1, 0, $this.a4t_1);
          break;
        case 1:
          b = composite.l4g($this.d4t_1, 1, $this.b4t_1);
          break;
        case 2:
          c = composite.l4g($this.d4t_1, 2, $this.c4t_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.f4e($this.d4t_1);
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
      $this$buildClassSerialDescriptor.j4c('first', this$0.a4t_1.y4b());
      $this$buildClassSerialDescriptor.j4c('second', this$0.b4t_1.y4b());
      $this$buildClassSerialDescriptor.j4c('third', this$0.c4t_1.y4b());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.a4t_1 = aSerializer;
    this.b4t_1 = bSerializer;
    this.c4t_1 = cSerializer;
    var tmp = this;
    tmp.d4t_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).y4b = function () {
    return this.d4t_1;
  };
  protoOf(TripleSerializer_0).e4t = function (encoder, value) {
    var structuredEncoder = encoder.e4e(this.d4t_1);
    structuredEncoder.e4f(this.d4t_1, 0, this.a4t_1, value.nn_1);
    structuredEncoder.e4f(this.d4t_1, 1, this.b4t_1, value.on_1);
    structuredEncoder.e4f(this.d4t_1, 2, this.c4t_1, value.pn_1);
    structuredEncoder.f4e(this.d4t_1);
  };
  protoOf(TripleSerializer_0).z4b = function (encoder, value) {
    return this.e4t(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).a4c = function (decoder) {
    var composite = decoder.e4e(this.d4t_1);
    if (composite.x4f()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.s4s_1 = keySerializer;
    this.t4s_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).u4s = function (encoder, value) {
    var structuredEncoder = encoder.e4e(this.y4b());
    structuredEncoder.e4f(this.y4b(), 0, this.s4s_1, this.o4s(value));
    structuredEncoder.e4f(this.y4b(), 1, this.t4s_1, this.q4s(value));
    structuredEncoder.f4e(this.y4b());
  };
  protoOf(KeyValueSerializer).z4b = function (encoder, value) {
    return this.u4s(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).a4c = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.y4b();
    var composite = decoder.e4e(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.x4f()) {
        var key = composite.l4g(this.y4b(), 0, this.s4s_1);
        var value = composite.l4g(this.y4b(), 1, this.t4s_1);
        tmp$ret$0 = this.r4s(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.y4f(this.y4b());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.l4g(this.y4b(), 0, this.s4s_1);
            break;
          case 1:
            value_0 = composite.l4g(this.y4b(), 1, this.t4s_1);
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
      tmp$ret$0 = this.r4s(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.f4e(descriptor);
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
    this.f4t_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).y4b = function () {
    return this.f4t_1;
  };
  protoOf(ULongSerializer).g4t = function (encoder, value) {
    var tmp = encoder.t4e(this.f4t_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.n4e(tmp$ret$0);
  };
  protoOf(ULongSerializer).z4b = function (encoder, value) {
    return this.g4t(encoder, value instanceof ULong ? value.bp_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).h4t = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.v4f(this.f4t_1).q4f();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).a4c = function (decoder) {
    return new ULong(this.h4t(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.i4t_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).y4b = function () {
    return this.i4t_1;
  };
  protoOf(UIntSerializer).j4t = function (encoder, value) {
    var tmp = encoder.t4e(this.i4t_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.m4e(tmp$ret$0);
  };
  protoOf(UIntSerializer).z4b = function (encoder, value) {
    return this.j4t(encoder, value instanceof UInt ? value.po_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).k4t = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.v4f(this.i4t_1).p4f();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).a4c = function (decoder) {
    return new UInt(this.k4t(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.l4t_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).y4b = function () {
    return this.l4t_1;
  };
  protoOf(UShortSerializer).m4t = function (encoder, value) {
    var tmp = encoder.t4e(this.l4t_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.l4e(tmp$ret$0);
  };
  protoOf(UShortSerializer).z4b = function (encoder, value) {
    return this.m4t(encoder, value instanceof UShort ? value.np_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).n4t = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.v4f(this.l4t_1).n4f();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).a4c = function (decoder) {
    return new UShort(this.n4t(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.o4t_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).y4b = function () {
    return this.o4t_1;
  };
  protoOf(UByteSerializer).p4t = function (encoder, value) {
    var tmp = encoder.t4e(this.o4t_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.k4e(tmp$ret$0);
  };
  protoOf(UByteSerializer).z4b = function (encoder, value) {
    return this.p4t(encoder, value instanceof UByte ? value.do_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).q4t = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.v4f(this.o4t_1).m4f();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).a4c = function (decoder) {
    return new UByte(this.q4t(decoder));
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
  protoOf(SerializersModule).t4c = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.u4c(kClass, typeArgumentsSerializers) : $super.u4c.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.r4t_1 = class2ContextualFactory;
    this.s4t_1 = polyBase2Serializers;
    this.t4t_1 = polyBase2DefaultSerializerProvider;
    this.u4t_1 = polyBase2NamedSerializers;
    this.v4t_1 = polyBase2DefaultDeserializerProvider;
    this.w4t_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).s4c = function () {
    return this.w4t_1;
  };
  protoOf(SerialModuleImpl).n4g = function (baseClass, value) {
    if (!baseClass.lb(value))
      return null;
    var tmp0_safe_receiver = this.s4t_1.n2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.t4t_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).m4g = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.u4t_1.n2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).n2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.v4t_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).u4c = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.r4t_1.n2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x4t(typeArgumentsSerializers);
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
    this.y4t_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.y4t_1.equals(tmp0_other_with_cast.y4t_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.y4t_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.y4t_1) + ')';
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
    return mapOf([to(PrimitiveClasses_getInstance().qc(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().tc(), CharArraySerializer()), to(PrimitiveClasses_getInstance().oc(), serializer_4(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().zc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().nc(), serializer_5(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().yc(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().xc(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().mc(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().wc(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().lc(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().vc(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().kc(), serializer_12(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().uc(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().jc(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().sc(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().ic(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance())), to(getKClass(Uuid), serializer_17(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().ic())
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ic()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().pc());
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
          var tmp_1 = assocObject.x4m(args.slice());
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
    this.z4t_1 = $factory;
  }
  protoOf(createCache$1).v4c = function (key) {
    return this.z4t_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.a4u_1 = $factory;
  }
  protoOf(createParametrizedCache$1).w4c = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.a4u_1(key, types);
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
  protoOf(SerialDescriptorImpl).x4c = get_isNullable;
  protoOf(SerialDescriptorImpl).d4d = get_isInline;
  protoOf(AbstractEncoder).h4f = encodeNotNullMark;
  protoOf(AbstractEncoder).i4f = beginCollection;
  protoOf(AbstractEncoder).f4f = encodeSerializableValue;
  protoOf(ListLikeDescriptor).x4c = get_isNullable;
  protoOf(ListLikeDescriptor).d4d = get_isInline;
  protoOf(ListLikeDescriptor).f4d = get_annotations;
  protoOf(MapLikeDescriptor).x4c = get_isNullable;
  protoOf(MapLikeDescriptor).d4d = get_isInline;
  protoOf(MapLikeDescriptor).f4d = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).x4c = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).d4d = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).k4m = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).x4c = get_isNullable;
  protoOf(NothingSerialDescriptor).d4d = get_isInline;
  protoOf(NothingSerialDescriptor).f4d = get_annotations;
  protoOf(PrimitiveSerialDescriptor).x4c = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).d4d = get_isInline;
  protoOf(PrimitiveSerialDescriptor).f4d = get_annotations;
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
  _.$_$.n = PolymorphicKind;
  _.$_$.o = AbstractEncoder;
  _.$_$.p = CompositeDecoder;
  _.$_$.q = Decoder;
  _.$_$.r = AbstractPolymorphicSerializer;
  _.$_$.s = typeParametersSerializers;
  _.$_$.t = GeneratedSerializer;
  _.$_$.u = PluginGeneratedSerialDescriptor;
  _.$_$.v = createSimpleEnumSerializer;
  _.$_$.w = throwArrayMissingFieldException;
  _.$_$.x = throwMissingFieldException;
  _.$_$.y = EmptySerializersModule_0;
  _.$_$.z = DeserializationStrategy;
  _.$_$.a1 = KSerializer;
  _.$_$.b1 = serializer_1;
  _.$_$.c1 = serializer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
