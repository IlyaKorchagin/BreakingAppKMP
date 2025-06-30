(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    globalThis['ktor-ktor-utils'] = factory(typeof globalThis['ktor-ktor-utils'] === 'undefined' ? {} : globalThis['ktor-ktor-utils'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var arrayOf = kotlin_kotlin.$_$.dl;
  var createKType = kotlin_kotlin.$_$.d;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.j;
  var isBlank = kotlin_kotlin.$_$.vh;
  var toString = kotlin_kotlin.$_$.jf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var protoOf = kotlin_kotlin.$_$.ff;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var equals = kotlin_kotlin.$_$.od;
  var hashCode = kotlin_kotlin.$_$.xd;
  var KtMutableMap = kotlin_kotlin.$_$.c7;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var Entry = kotlin_kotlin.$_$.x6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var MutableEntry = kotlin_kotlin.$_$.b7;
  var charArray = kotlin_kotlin.$_$.hd;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var toString_1 = kotlin_kotlin.$_$.v3;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.lc;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Element = kotlin_kotlin.$_$.uc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var KtSet = kotlin_kotlin.$_$.f7;
  var KtMutableSet = kotlin_kotlin.$_$.d7;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var Enum = kotlin_kotlin.$_$.bk;
  var firstOrNull = kotlin_kotlin.$_$.v8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var addAll = kotlin_kotlin.$_$.g7;
  var emptyMap = kotlin_kotlin.$_$.p8;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var get_lastIndex = kotlin_kotlin.$_$.ai;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.s3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var equals_0 = kotlin_kotlin.$_$.oh;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var Long = kotlin_kotlin.$_$.hk;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var Comparable = kotlin_kotlin.$_$.zj;
  var enumEntries = kotlin_kotlin.$_$.zc;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var KtMutableList = kotlin_kotlin.$_$.a7;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var ArrayList = kotlin_kotlin.$_$.p6;
  var emptyList = kotlin_kotlin.$_$.o8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.r9;
  var last = kotlin_kotlin.$_$.x9;
  var mutableListOf = kotlin_kotlin.$_$.ja;
  var anyToString = kotlin_kotlin.$_$.cd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var extendThrowable = kotlin_kotlin.$_$.pd;
  var captureStack = kotlin_kotlin.$_$.fd;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.il;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.x3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var Continuation = kotlin_kotlin.$_$.qc;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var intercepted = kotlin_kotlin.$_$.jc;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var lazy = kotlin_kotlin.$_$.ql;
  var isNaN_0 = kotlin_kotlin.$_$.ol;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var IllegalStateException = kotlin_kotlin.$_$.fk;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var toList = kotlin_kotlin.$_$.rb;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.a4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AttributeKey, 'AttributeKey');
  function get(key) {
    var tmp0_elvis_lhs = this.vik(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Attributes, 'Attributes');
  initMetadataForClass(CaseInsensitiveMap, 'CaseInsensitiveMap', CaseInsensitiveMap, VOID, [KtMutableMap]);
  initMetadataForClass(Entry_0, 'Entry', VOID, VOID, [MutableEntry]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  initMetadataForClass(DelegatingMutableSet$iterator$1);
  initMetadataForClass(DelegatingMutableSet, 'DelegatingMutableSet', VOID, VOID, [KtMutableSet]);
  initMetadataForClass(Platform, 'Platform');
  initMetadataForObject(Jvm, 'Jvm', VOID, Platform);
  initMetadataForObject(Native, 'Native', VOID, Platform);
  initMetadataForClass(Js, 'Js', VOID, Platform);
  initMetadataForClass(WasmJs, 'WasmJs', VOID, Platform);
  initMetadataForClass(JsPlatform, 'JsPlatform', VOID, Enum);
  initMetadataForObject(PlatformUtils, 'PlatformUtils');
  function get_0(name) {
    var tmp0_safe_receiver = this.jim(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_iterator = this.lim().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.c1();
      body(k, v);
    }
    return Unit_instance;
  }
  initMetadataForInterface(StringValues, 'StringValues');
  initMetadataForClass(StringValuesBuilderImpl, 'StringValuesBuilderImpl', StringValuesBuilderImpl);
  initMetadataForClass(StringValuesImpl, 'StringValuesImpl', StringValuesImpl, VOID, [StringValues]);
  initMetadataForClass(CaseInsensitiveString, 'CaseInsensitiveString');
  initMetadataForClass(CopyOnWriteHashMap, 'CopyOnWriteHashMap', CopyOnWriteHashMap);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GMTDate, 'GMTDate', VOID, VOID, [Comparable], VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(WeekDay, 'WeekDay', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Month, 'Month', VOID, Enum);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode');
  initMetadataForClass(Removed, 'Removed');
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForCoroutine($proceedLoopCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(PipelineContext, 'PipelineContext', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForClass(DebugPipelineContext, 'DebugPipelineContext', VOID, PipelineContext, VOID, [1, 0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(PhaseContent, 'PhaseContent');
  initMetadataForClass(Pipeline, 'Pipeline', VOID, VOID, VOID, [2]);
  initMetadataForClass(PipelinePhase, 'PipelinePhase');
  initMetadataForClass(InvalidPhaseException, 'InvalidPhaseException', VOID, Error);
  initMetadataForClass(PipelinePhaseRelation, 'PipelinePhaseRelation');
  initMetadataForClass(After, 'After', VOID, PipelinePhaseRelation);
  initMetadataForClass(Before, 'Before', VOID, PipelinePhaseRelation);
  initMetadataForObject(Last, 'Last', VOID, PipelinePhaseRelation);
  initMetadataForClass(SuspendFunctionGun$continuation$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForClass(SuspendFunctionGun, 'SuspendFunctionGun', VOID, PipelineContext, VOID, [0, 1]);
  initMetadataForClass(TypeInfo, 'TypeInfo');
  initMetadataForClass(InvalidTimestampException, 'InvalidTimestampException', VOID, IllegalStateException);
  initMetadataForClass(AttributesJs, 'AttributesJs', AttributesJs, VOID, [Attributes]);
  initMetadataForClass(KtorSimpleLogger$1);
  initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
  //endregion
  function AttributeKey(name, type) {
    var tmp;
    if (type === VOID) {
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().lc();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().lc(), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$0 = tmp_1;
      tmp = new TypeInfo(tmp_0, tmp$ret$0);
    } else {
      tmp = type;
    }
    type = tmp;
    this.sik_1 = name;
    this.tik_1 = type;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.sik_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(this_0)) {
      // Inline function 'io.ktor.util.AttributeKey.<anonymous>' call
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.sik_1;
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.sik_1);
    result = imul(result, 31) + this.tik_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    var tmp0_other_with_cast = other instanceof AttributeKey ? other : THROW_CCE();
    if (!(this.sik_1 === tmp0_other_with_cast.sik_1))
      return false;
    if (!this.tik_1.equals(tmp0_other_with_cast.tik_1))
      return false;
    return true;
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = other.ail().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.xik(element instanceof AttributeKey ? element : THROW_CCE(), other.uik(element));
    }
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$DelegatingMutableSet) {
    return $this$DelegatingMutableSet.bil_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$DelegatingMutableSet) {
    return caseInsensitive($this$DelegatingMutableSet);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$DelegatingMutableSet) {
    return new Entry_0($this$DelegatingMutableSet.b1().bil_1, $this$DelegatingMutableSet.c1());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$DelegatingMutableSet) {
    return new Entry_0(caseInsensitive($this$DelegatingMutableSet.b1()), $this$DelegatingMutableSet.c1());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.dil_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).p = function () {
    return this.dil_1.p();
  };
  protoOf(CaseInsensitiveMap).eil = function (key) {
    return this.dil_1.q2(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.eil((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).i4f = function (key) {
    return this.dil_1.s2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i4f((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).j = function () {
    return this.dil_1.j();
  };
  protoOf(CaseInsensitiveMap).n2 = function () {
    this.dil_1.n2();
  };
  protoOf(CaseInsensitiveMap).fil = function (key, value) {
    return this.dil_1.k2(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).k2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.fil(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).gil = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = from.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.c1();
      this.fil(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).m2 = function (from) {
    return this.gil(from);
  };
  protoOf(CaseInsensitiveMap).hil = function (key) {
    return this.dil_1.l2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.hil((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).o2 = function () {
    var tmp = this.dil_1.o2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).a1 = function () {
    var tmp = this.dil_1.a1();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).p2 = function () {
    return this.dil_1.p2();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.dil_1, this.dil_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.dil_1);
  };
  function Entry_0(key, value) {
    this.iil_1 = key;
    this.jil_1 = value;
  }
  protoOf(Entry_0).b1 = function () {
    return this.iil_1;
  };
  protoOf(Entry_0).c1 = function () {
    return this.jil_1;
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.iil_1)) | 0) + hashCode(ensureNotNull(this.jil_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.b1(), this.iil_1) && equals(other.c1(), this.jil_1);
  };
  protoOf(Entry_0).toString = function () {
    return toString_0(this.iil_1) + '=' + toString_0(this.jil_1);
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = toString_1(_this__u8e3s4).toLowerCase();
    return charSequenceGet(tmp$ret$2, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.hj(tmp$ret$0);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).h1c = function (context, exception) {
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    return Unit_instance;
  };
  function DelegatingMutableSet$iterator$1(this$0) {
    this.mil_1 = this$0;
    this.lil_1 = this$0.nil_1.m();
  }
  protoOf(DelegatingMutableSet$iterator$1).n = function () {
    return this.lil_1.n();
  };
  protoOf(DelegatingMutableSet$iterator$1).o = function () {
    return this.mil_1.oil_1(this.lil_1.o());
  };
  protoOf(DelegatingMutableSet$iterator$1).t4 = function () {
    return this.lil_1.t4();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.nil_1 = delegate;
    this.oil_1 = convertTo;
    this.pil_1 = convert;
    this.qil_1 = this.nil_1.p();
  }
  protoOf(DelegatingMutableSet).ril = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      var tmp$ret$0 = this.pil_1(item);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).sil = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      var tmp$ret$0 = this.oil_1(item);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).p = function () {
    return this.qil_1;
  };
  protoOf(DelegatingMutableSet).til = function (element) {
    return this.nil_1.e(this.pil_1(element));
  };
  protoOf(DelegatingMutableSet).e = function (element) {
    return this.til((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).uil = function (elements) {
    return this.nil_1.t(this.ril(elements));
  };
  protoOf(DelegatingMutableSet).t = function (elements) {
    return this.uil(elements);
  };
  protoOf(DelegatingMutableSet).n2 = function () {
    this.nil_1.n2();
  };
  protoOf(DelegatingMutableSet).vil = function (element) {
    return this.nil_1.t2(this.pil_1(element));
  };
  protoOf(DelegatingMutableSet).t2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.vil((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).wil = function (element) {
    return this.nil_1.v(this.pil_1(element));
  };
  protoOf(DelegatingMutableSet).v = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.wil((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).xil = function (elements) {
    return this.nil_1.g2(this.ril(elements));
  };
  protoOf(DelegatingMutableSet).g2 = function (elements) {
    return this.xil(elements);
  };
  protoOf(DelegatingMutableSet).j = function () {
    return this.nil_1.j();
  };
  protoOf(DelegatingMutableSet).m = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.nil_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, KtSet) : false);
    }
    if (tmp)
      return false;
    var elements = this.sil(this.nil_1);
    var tmp_0;
    if (other.g2(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.g2(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString(this.sil(this.nil_1));
  };
  var JsPlatform_Browser_instance;
  var JsPlatform_Node_instance;
  var JsPlatform_entriesInitialized;
  function JsPlatform_initEntries() {
    if (JsPlatform_entriesInitialized)
      return Unit_instance;
    JsPlatform_entriesInitialized = true;
    JsPlatform_Browser_instance = new JsPlatform('Browser', 0);
    JsPlatform_Node_instance = new JsPlatform('Node', 1);
  }
  function Jvm() {
    Jvm_instance = this;
    Platform.call(this);
  }
  protoOf(Jvm).toString = function () {
    return 'Jvm';
  };
  protoOf(Jvm).hashCode = function () {
    return 1051825272;
  };
  protoOf(Jvm).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Jvm))
      return false;
    other instanceof Jvm || THROW_CCE();
    return true;
  };
  var Jvm_instance;
  function Jvm_getInstance() {
    if (Jvm_instance == null)
      new Jvm();
    return Jvm_instance;
  }
  function Native() {
    Native_instance = this;
    Platform.call(this);
  }
  protoOf(Native).toString = function () {
    return 'Native';
  };
  protoOf(Native).hashCode = function () {
    return -1059277600;
  };
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Native))
      return false;
    other instanceof Native || THROW_CCE();
    return true;
  };
  var Native_instance;
  function Native_getInstance() {
    if (Native_instance == null)
      new Native();
    return Native_instance;
  }
  function Js(jsPlatform) {
    Platform.call(this);
    this.yil_1 = jsPlatform;
  }
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.yil_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.yil_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    var tmp0_other_with_cast = other instanceof Js ? other : THROW_CCE();
    if (!this.yil_1.equals(tmp0_other_with_cast.yil_1))
      return false;
    return true;
  };
  function WasmJs() {
  }
  function JsPlatform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JsPlatform_Browser_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Browser_instance;
  }
  function JsPlatform_Node_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Node_instance;
  }
  function Platform() {
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var platform = get_platform(this);
    var tmp_0;
    if (platform instanceof Js) {
      tmp_0 = platform.yil_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.zil_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.aim_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.yil_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.zil_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.bim_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.cim_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.dim_1 = tmp_6 instanceof WasmJs;
    this.eim_1 = equals(get_platform(this), Jvm_getInstance());
    this.fim_1 = equals(get_platform(this), Native_getInstance());
    this.gim_1 = get_isDevelopmentMode(this);
    this.him_1 = get_isNewMemoryModel(this);
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.oim_1.s2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.pim(name);
      // Inline function 'kotlin.collections.set' call
      $this.oim_1.k2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.qim(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.nim_1 = caseInsensitiveName;
    this.oim_1 = this.nim_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).iim = function () {
    return this.nim_1;
  };
  protoOf(StringValuesBuilderImpl).jim = function (name) {
    return this.oim_1.s2(name);
  };
  protoOf(StringValuesBuilderImpl).kim = function () {
    return this.oim_1.o2();
  };
  protoOf(StringValuesBuilderImpl).j = function () {
    return this.oim_1.j();
  };
  protoOf(StringValuesBuilderImpl).lim = function () {
    return unmodifiable(this.oim_1.a1());
  };
  protoOf(StringValuesBuilderImpl).rim = function (name, value) {
    this.sim(value);
    var list = ensureListForKey(this, name);
    list.n2();
    list.e(value);
  };
  protoOf(StringValuesBuilderImpl).i4f = function (name) {
    var tmp0_safe_receiver = this.jim(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).tim = function (name, value) {
    this.sim(value);
    ensureListForKey(this, name).e(value);
  };
  protoOf(StringValuesBuilderImpl).uim = function (stringValues) {
    stringValues.mim(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).qim = function (name, values) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = values.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.sim(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).vim = function (name) {
    this.oim_1.l2(name);
  };
  protoOf(StringValuesBuilderImpl).n2 = function () {
    this.oim_1.n2();
  };
  protoOf(StringValuesBuilderImpl).pim = function (name) {
  };
  protoOf(StringValuesBuilderImpl).sim = function (value) {
  };
  function listForKey($this, name) {
    return $this.xim_1.s2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.wim_1 = caseInsensitiveName;
    var tmp;
    if (this.wim_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = values.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.c1();
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.p();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          var tmp$ret$4 = value.u(index);
          list.e(tmp$ret$4);
        }
         while (inductionVariable < size);
      newMap.k2(key, list);
    }
    this.xim_1 = newMap;
  }
  protoOf(StringValuesImpl).iim = function () {
    return this.wim_1;
  };
  protoOf(StringValuesImpl).i4f = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).jim = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).kim = function () {
    return unmodifiable(this.xim_1.o2());
  };
  protoOf(StringValuesImpl).j = function () {
    return this.xim_1.j();
  };
  protoOf(StringValuesImpl).lim = function () {
    return unmodifiable(this.xim_1.a1());
  };
  protoOf(StringValuesImpl).mim = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.xim_1.a1().m();
    while (_iterator__ex2g4s.n()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.o();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.c1();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.wim_1 + ') ' + toString(this.lim());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.wim_1 === other.iim()))
      return false;
    return entriesEquals(this.lim(), other.lim());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.lim(), imul(31, getBooleanHashCode(this.wim_1)));
  };
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = builder.lim().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.c1();
      _this__u8e3s4.qim(name, values);
    }
    return _this__u8e3s4;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    this_0.gd(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.w8(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString_1(ch).toLowerCase();
      tmp = charSequenceGet(tmp$ret$2, 0);
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.bil_1 = content;
    var temp = 0;
    var indexedObject = this.bil_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = imul(temp, 31);
      // Inline function 'kotlin.code' call
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString_1(element).toLowerCase();
      var this_0 = charSequenceGet(tmp$ret$2, 0);
      temp = tmp + Char__toInt_impl_vasixd(this_0) | 0;
    }
    this.cil_1 = temp;
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bil_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.bil_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.cil_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.bil_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.yim_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).zim = function (key) {
    return this.yim_1.kotlinx$atomicfu$value.s2(key);
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ain_1 = [null, null, null, createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values()), null, null, createSimpleEnumSerializer('io.ktor.util.date.Month', values_0()), null, null];
    this.bin_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.ktor.util.date.GMTDate', this, 9);
    tmp0_serialDesc.k4s('seconds', false);
    tmp0_serialDesc.k4s('minutes', false);
    tmp0_serialDesc.k4s('hours', false);
    tmp0_serialDesc.k4s('dayOfWeek', false);
    tmp0_serialDesc.k4s('dayOfMonth', false);
    tmp0_serialDesc.k4s('dayOfYear', false);
    tmp0_serialDesc.k4s('month', false);
    tmp0_serialDesc.k4s('year', false);
    tmp0_serialDesc.k4s('timestamp', false);
    this.cin_1 = tmp0_serialDesc;
  }
  protoOf($serializer).din = function (encoder, value) {
    var tmp0_desc = this.cin_1;
    var tmp1_output = encoder.s4k(tmp0_desc);
    var tmp2_cached = Companion_getInstance().ain_1;
    tmp1_output.l4l(tmp0_desc, 0, value.ein_1);
    tmp1_output.l4l(tmp0_desc, 1, value.fin_1);
    tmp1_output.l4l(tmp0_desc, 2, value.gin_1);
    tmp1_output.s4l(tmp0_desc, 3, tmp2_cached[3], value.hin_1);
    tmp1_output.l4l(tmp0_desc, 4, value.iin_1);
    tmp1_output.l4l(tmp0_desc, 5, value.jin_1);
    tmp1_output.s4l(tmp0_desc, 6, tmp2_cached[6], value.kin_1);
    tmp1_output.l4l(tmp0_desc, 7, value.lin_1);
    tmp1_output.m4l(tmp0_desc, 8, value.min_1);
    tmp1_output.t4k(tmp0_desc);
  };
  protoOf($serializer).n4i = function (encoder, value) {
    return this.din(encoder, value instanceof GMTDate ? value : THROW_CCE());
  };
  protoOf($serializer).o4i = function (decoder) {
    var tmp0_desc = this.cin_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = 0;
    var tmp12_local8 = new Long(0, 0);
    var tmp13_input = decoder.s4k(tmp0_desc);
    var tmp14_cached = Companion_getInstance().ain_1;
    if (tmp13_input.n4m()) {
      tmp4_local0 = tmp13_input.u4m(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.u4m(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.u4m(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.a4n(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.u4m(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.u4m(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.a4n(tmp0_desc, 6, tmp14_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.u4m(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.v4m(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.o4m(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.u4m(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.u4m(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.u4m(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.a4n(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.u4m(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.u4m(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.a4n(tmp0_desc, 6, tmp14_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.u4m(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.v4m(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.t4k(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).m4i = function () {
    return this.cin_1;
  };
  protoOf($serializer).z4s = function () {
    var tmp0_cached = Companion_getInstance().ain_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3], IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[6], IntSerializer_getInstance(), LongSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, $this) {
    if (!(511 === (511 & seen0))) {
      throwMissingFieldException(seen0, 511, $serializer_getInstance().cin_1);
    }
    $this.ein_1 = seconds;
    $this.fin_1 = minutes;
    $this.gin_1 = hours;
    $this.hin_1 = dayOfWeek;
    $this.iin_1 = dayOfMonth;
    $this.jin_1 = dayOfYear;
    $this.kin_1 = month;
    $this.lin_1 = year;
    $this.min_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance();
    this.ein_1 = seconds;
    this.fin_1 = minutes;
    this.gin_1 = hours;
    this.hin_1 = dayOfWeek;
    this.iin_1 = dayOfMonth;
    this.jin_1 = dayOfYear;
    this.kin_1 = month;
    this.lin_1 = year;
    this.min_1 = timestamp;
  }
  protoOf(GMTDate).nin = function (other) {
    return this.min_1.h1(other.min_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.nin(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.ein_1 + ', minutes=' + this.fin_1 + ', hours=' + this.gin_1 + ', dayOfWeek=' + this.hin_1.toString() + ', dayOfMonth=' + this.iin_1 + ', dayOfYear=' + this.jin_1 + ', month=' + this.kin_1.toString() + ', year=' + this.lin_1 + ', timestamp=' + this.min_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.ein_1;
    result = imul(result, 31) + this.fin_1 | 0;
    result = imul(result, 31) + this.gin_1 | 0;
    result = imul(result, 31) + this.hin_1.hashCode() | 0;
    result = imul(result, 31) + this.iin_1 | 0;
    result = imul(result, 31) + this.jin_1 | 0;
    result = imul(result, 31) + this.kin_1.hashCode() | 0;
    result = imul(result, 31) + this.lin_1 | 0;
    result = imul(result, 31) + this.min_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.ein_1 === tmp0_other_with_cast.ein_1))
      return false;
    if (!(this.fin_1 === tmp0_other_with_cast.fin_1))
      return false;
    if (!(this.gin_1 === tmp0_other_with_cast.gin_1))
      return false;
    if (!this.hin_1.equals(tmp0_other_with_cast.hin_1))
      return false;
    if (!(this.iin_1 === tmp0_other_with_cast.iin_1))
      return false;
    if (!(this.jin_1 === tmp0_other_with_cast.jin_1))
      return false;
    if (!this.kin_1.equals(tmp0_other_with_cast.kin_1))
      return false;
    if (!(this.lin_1 === tmp0_other_with_cast.lin_1))
      return false;
    if (!this.min_1.equals(tmp0_other_with_cast.min_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).oin = function (ordinal) {
    return get_entries().u(ordinal);
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_instance;
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
  }
  var $ENTRIES;
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.rin_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
  }
  protoOf(Companion_1).oin = function (ordinal) {
    return get_entries_0().u(ordinal);
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
  }
  var $ENTRIES_0;
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.uin_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  var CONDITION_FALSE;
  var ALREADY_REMOVED;
  var LIST_EMPTY;
  var REMOVE_PREPARED;
  var NO_DECISION;
  function Symbol(symbol) {
    this.vin_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return this.vin_1;
  };
  function LockFreeLinkedListNode() {
  }
  protoOf(LockFreeLinkedListNode).r1j = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.win_1;
    while (true) {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.<get-next>.<anonymous>' call
      var next = this_0.kotlinx$atomicfu$value;
      if (!(next instanceof OpDescriptor))
        return next;
      next.xin(this);
    }
  };
  protoOf(LockFreeLinkedListNode).yin = function () {
    return unwrap(this.r1j());
  };
  function Removed() {
  }
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zin_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = _this__u8e3s4 instanceof LockFreeLinkedListNode ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_LockFreeLinkedList_kt_lnmdgw;
  function _init_properties_LockFreeLinkedList_kt__wekxce() {
    if (!properties_initialized_LockFreeLinkedList_kt_lnmdgw) {
      properties_initialized_LockFreeLinkedList_kt_lnmdgw = true;
      CONDITION_FALSE = new Symbol('CONDITION_FALSE');
      ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
      LIST_EMPTY = new Symbol('LIST_EMPTY');
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$0($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function $proceedLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iio_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 6;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.jio_1 = this.iio_1.qio_1;
            if (this.jio_1 === -1) {
              this.s9_1 = 5;
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 2:
            this.kio_1 = this.iio_1.nio_1;
            if (this.jio_1 >= this.kio_1.p()) {
              this.iio_1.rio();
              this.s9_1 = 5;
              continue $sm;
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 3:
            this.lio_1 = this.kio_1.u(this.jio_1);
            this.iio_1.qio_1 = this.jio_1 + 1 | 0;
            this.s9_1 = 4;
            suspendResult = this.lio_1(this.iio_1, this.iio_1.pio_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.s9_1 = 1;
            continue $sm;
          case 5:
            return this.iio_1.pio_1;
          case 6:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 6) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.nio_1 = interceptors;
    this.oio_1 = coroutineContext;
    this.pio_1 = subject;
    this.qio_1 = 0;
  }
  protoOf(DebugPipelineContext).h14 = function () {
    return this.oio_1;
  };
  protoOf(DebugPipelineContext).sio = function () {
    return this.pio_1;
  };
  protoOf(DebugPipelineContext).rio = function () {
    this.qio_1 = -1;
  };
  protoOf(DebugPipelineContext).tio = function (subject, $completion) {
    this.pio_1 = subject;
    return this.uio($completion);
  };
  protoOf(DebugPipelineContext).uio = function ($completion) {
    var index = this.qio_1;
    if (index < 0)
      return this.pio_1;
    if (index >= this.nio_1.p()) {
      this.rio();
      return this.pio_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).vio = function (initial, $completion) {
    this.qio_1 = 0;
    this.pio_1 = initial;
    return this.uio($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_2().wio_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_2().wio_1.j()) {
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copiedInterceptors($this) {
    return toMutableList($this.zio_1);
  }
  function copyInterceptors($this) {
    $this.zio_1 = copiedInterceptors($this);
    $this.aip_1 = false;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.wio_1 = ArrayList_init_$Create$_0();
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_2();
    this.xio_1 = phase;
    this.yio_1 = relation;
    this.zio_1 = interceptors;
    this.aip_1 = true;
  }
  protoOf(PhaseContent).i2w = function () {
    return this.zio_1.j();
  };
  protoOf(PhaseContent).p = function () {
    return this.zio_1.p();
  };
  protoOf(PhaseContent).bip = function (interceptor) {
    if (this.aip_1) {
      copyInterceptors(this);
    }
    this.zio_1.e(interceptor);
  };
  protoOf(PhaseContent).cip = function (destination) {
    var interceptors = this.zio_1;
    if (destination instanceof ArrayList) {
      destination.c6(destination.p() + interceptors.p() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.p();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.e(interceptors.u(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).dip = function () {
    this.aip_1 = true;
    return this.zio_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.xio_1.eip_1 + '`, ' + this.p() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.jip_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.jip_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.mip());
  }
  function findPhase($this, phase) {
    var phasesList = $this.hip_1;
    var inductionVariable = 0;
    var last = phasesList.p();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.u(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.v2(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.xio_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.hip_1;
    var inductionVariable = 0;
    var last = phasesList.p();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.u(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.xio_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.hip_1;
    var inductionVariable = 0;
    var last = phasesList.p();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.u(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.xio_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.iip_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.hip_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.u(phaseIndex);
          var tmp0_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.i2w())
            continue $l$loop_0;
          var interceptors = phaseContent.dip();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.u(phaseIndex_0);
        var tmp1_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        var phase = tmp_2;
        phase.cip(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.kip_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.kip_1 = false;
    $this.lip_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.kip_1 = false;
    $this.lip_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.dip());
    $this.kip_1 = false;
    $this.lip_1 = phaseContent.xio_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.hip_1.j() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.kip_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, KtMutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.lip_1, phase)) {
      currentInterceptors.e(block);
      return true;
    }
    if (equals(phase, last($this.hip_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.hip_1)) {
      ensureNotNull(findPhase($this, phase)).bip(block);
      currentInterceptors.e(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.fip_1 = AttributesJsFn(true);
    this.gip_1 = false;
    this.hip_1 = mutableListOf(phases.slice());
    this.iip_1 = 0;
    this.jip_1 = atomic$ref$1(null);
    this.kip_1 = false;
    this.lip_1 = null;
  }
  protoOf(Pipeline).mip = function () {
    return this.gip_1;
  };
  protoOf(Pipeline).nip = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.y9();
    return createContext(this, context, subject, tmp$ret$0).vio(subject, $completion);
  };
  protoOf(Pipeline).pip = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.hip_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.hip_1.u(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yio_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.qip_1;
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.hip_1.w2(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).rip = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.hip_1.w2(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).sip = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.iip_1 = this.iip_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.bip(block);
    this.iip_1 = this.iip_1 + 1 | 0;
    resetInterceptorsList(this);
    this.tip();
  };
  protoOf(Pipeline).tip = function () {
  };
  protoOf(Pipeline).toString = function () {
    return anyToString(this);
  };
  function PipelineContext(context) {
    this.oip_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() || debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.eip_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.eip_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.qip_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.uip_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  protoOf(Last).toString = function () {
    return 'Last';
  };
  protoOf(Last).hashCode = function () {
    return 967869129;
  };
  protoOf(Last).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Last))
      return false;
    other instanceof Last || THROW_CCE();
    return true;
  };
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.biq_1;
      if (currentIndex === $this.wip_1.p()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.yip_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.biq_1 = currentIndex + 1 | 0;
      var next = $this.wip_1.u(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.yip_1, $this.xip_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.aiq_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.zip_1[$this.aiq_1]);
    var _unary__edvuaz = $this.aiq_1;
    $this.aiq_1 = _unary__edvuaz - 1 | 0;
    $this.zip_1[_unary__edvuaz] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.da(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.da(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.aiq_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var _unary__edvuaz = $this.aiq_1;
    $this.aiq_1 = _unary__edvuaz - 1 | 0;
    $this.zip_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.diq_1 = this$0;
    this.ciq_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).y9 = function () {
    var continuation = this.diq_1.zip_1[this.diq_1.aiq_1];
    if (!(continuation === this) && !(continuation == null))
      return continuation.y9();
    var index = this.diq_1.aiq_1 - 1 | 0;
    while (index >= 0) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz - 1 | 0;
      var cont = this.diq_1.zip_1[_unary__edvuaz];
      if (!(cont === this) && !(cont == null))
        return cont.y9();
    }
    // Inline function 'kotlin.error' call
    var message = 'Not started';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(SuspendFunctionGun$continuation$1).xh = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      resumeRootWith(this.diq_1, tmp$ret$0);
      return Unit_instance;
    }
    loop(this.diq_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).da = function (result) {
    return this.xh(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.wip_1 = blocks;
    var tmp = this;
    tmp.xip_1 = new SuspendFunctionGun$continuation$1(this);
    this.yip_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.wip_1.p();
    tmp_0.zip_1 = fillArrayVal(Array(size), null);
    this.aiq_1 = -1;
    this.biq_1 = 0;
  }
  protoOf(SuspendFunctionGun).h14 = function () {
    return this.xip_1.y9();
  };
  protoOf(SuspendFunctionGun).sio = function () {
    return this.yip_1;
  };
  protoOf(SuspendFunctionGun).uio = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      if (this.biq_1 === this.wip_1.p()) {
        tmp$ret$0 = this.yip_1;
        break $l$block_0;
      }
      this.eiq(intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.yip_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).tio = function (subject, $completion) {
    this.yip_1 = subject;
    return this.uio($completion);
  };
  protoOf(SuspendFunctionGun).vio = function (initial, $completion) {
    this.biq_1 = 0;
    if (this.biq_1 === this.wip_1.p())
      return initial;
    this.yip_1 = initial;
    if (this.aiq_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.uio($completion);
  };
  protoOf(SuspendFunctionGun).eiq = function (continuation) {
    this.aiq_1 = this.aiq_1 + 1 | 0;
    this.zip_1[this.aiq_1] = continuation;
  };
  function TypeInfo(type, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.fiq_1 = type;
    this.giq_1 = kotlinType;
  }
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.giq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? this.fiq_1.hashCode() : tmp1_elvis_lhs;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp;
    if (!(this.giq_1 == null) || !(other.giq_1 == null)) {
      tmp = equals(this.giq_1, other.giq_1);
    } else {
      tmp = this.fiq_1.equals(other.fiq_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.giq_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.fiq_1 : tmp0_elvis_lhs) + ')';
  };
  function get_platform(_this__u8e3s4) {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    // Inline function 'kotlin.getValue' call
    var this_0 = platform$delegate;
    platform$factory();
    return this_0.c1();
  }
  var platform$delegate;
  function platform$delegate$lambda() {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    return new Js(hasNodeApi() ? JsPlatform_Node_getInstance() : JsPlatform_Browser_getInstance());
  }
  function platform$factory() {
    return getPropertyCallableRef('platform', 1, KProperty1, function (receiver) {
      return get_platform(receiver);
    }, null);
  }
  var properties_initialized_PlatformUtils_js_kt_8g036j;
  function _init_properties_PlatformUtils_js_kt__7rxm8p() {
    if (!properties_initialized_PlatformUtils_js_kt_8g036j) {
      properties_initialized_PlatformUtils_js_kt_8g036j = true;
      platform$delegate = lazy(platform$delegate$lambda);
    }
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : timestamp.w3();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_instance_1.oin((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_2.oin(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function pipelineStartCoroutineUninterceptedOrReturn(interceptor, context, subject, continuation) {
    return (typeof interceptor === 'function' ? interceptor : THROW_CCE())(context, subject, continuation);
  }
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.hiq_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).vik = function (key) {
    var tmp = this.hiq_1.s2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).wik = function (key) {
    return this.hiq_1.q2(key);
  };
  protoOf(AttributesJs).xik = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.hiq_1.k2(key, value);
  };
  protoOf(AttributesJs).yik = function (key) {
    this.hiq_1.l2(key);
  };
  protoOf(AttributesJs).zik = function (key, block) {
    var tmp0_safe_receiver = this.hiq_1.s2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.hiq_1.k2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).ail = function () {
    return toList(this.hiq_1.o2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function hasNodeApi() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function get_isNewMemoryModel(_this__u8e3s4) {
    return true;
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function getKtorLogLevel() {
    return process.env.KTOR_LOG_LEVEL;
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().bim_1 || PlatformUtils_getInstance().aim_1) {
      case true:
        // Inline function 'kotlin.Result.getOrNull' call

        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var value = getKtorLogLevel();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }

        var this_0 = tmp_1;
        var tmp_3;
        if (_Result___get_isFailure__impl__jpiriv(this_0)) {
          tmp_3 = null;
        } else {
          var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
          tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        }

        var tmp1_safe_receiver = tmp_3;
        var tmp_5;
        if (tmp1_safe_receiver == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator = get_entries_1().m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>.<anonymous>' call
              if (element.y2_1 === tmp1_safe_receiver) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          tmp_5 = tmp$ret$6;
        }

        var tmp2_elvis_lhs = tmp_5;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.iiq_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).jiq = function (message) {
    if (this.iiq_1.a3(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  var $ENTRIES_1;
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.qb(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf($serializer).a4t = typeParametersSerializers;
  protoOf(AttributesJs).uik = get;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PlatformUtils_getInstance;
  _.$_$.b = CopyOnWriteHashMap;
  _.$_$.c = GMTDate_0;
  _.$_$.d = LockFreeLinkedListNode;
  _.$_$.e = KtorSimpleLogger;
  _.$_$.f = PipelineContext;
  _.$_$.g = PipelinePhase;
  _.$_$.h = Pipeline;
  _.$_$.i = TypeInfo;
  _.$_$.j = instanceOf;
  _.$_$.k = AttributeKey;
  _.$_$.l = AttributesJsFn;
  _.$_$.m = Attributes;
  _.$_$.n = SilentSupervisor;
  _.$_$.o = forEach;
  _.$_$.p = get_0;
  _.$_$.q = StringValuesBuilderImpl;
  _.$_$.r = StringValuesImpl;
  _.$_$.s = StringValues;
  _.$_$.t = appendAll;
  _.$_$.u = isLowerCase;
  _.$_$.v = putAll;
  _.$_$.w = toCharArray;
  _.$_$.x = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
