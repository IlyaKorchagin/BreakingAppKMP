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
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var arrayOf = kotlin_kotlin.$_$.sj;
  var createKType = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var VOID = kotlin_kotlin.$_$.i;
  var isBlank = kotlin_kotlin.$_$.vg;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var protoOf = kotlin_kotlin.$_$.he;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var equals = kotlin_kotlin.$_$.qc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var Entry = kotlin_kotlin.$_$.n6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var MutableEntry = kotlin_kotlin.$_$.r6;
  var charArray = kotlin_kotlin.$_$.jc;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var toString_1 = kotlin_kotlin.$_$.n3;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.nb;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Element = kotlin_kotlin.$_$.wb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var KtSet = kotlin_kotlin.$_$.u6;
  var KtMutableSet = kotlin_kotlin.$_$.t6;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var Enum = kotlin_kotlin.$_$.qi;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var addAll = kotlin_kotlin.$_$.v6;
  var emptyMap = kotlin_kotlin.$_$.b8;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var get_lastIndex = kotlin_kotlin.$_$.ah;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.k3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var equals_0 = kotlin_kotlin.$_$.og;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Long = kotlin_kotlin.$_$.wi;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var Comparable = kotlin_kotlin.$_$.oi;
  var enumEntries = kotlin_kotlin.$_$.bc;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var KtMutableList = kotlin_kotlin.$_$.q6;
  var toMutableList = kotlin_kotlin.$_$.ab;
  var ArrayList = kotlin_kotlin.$_$.g6;
  var emptyList = kotlin_kotlin.$_$.a8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.c9;
  var last = kotlin_kotlin.$_$.i9;
  var mutableListOf = kotlin_kotlin.$_$.t9;
  var anyToString = kotlin_kotlin.$_$.ec;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var extendThrowable = kotlin_kotlin.$_$.rc;
  var captureStack = kotlin_kotlin.$_$.hc;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var Companion_instance = kotlin_kotlin.$_$.s5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o3;
  var createFailure = kotlin_kotlin.$_$.xj;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.p3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q3;
  var Continuation = kotlin_kotlin.$_$.sb;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var intercepted = kotlin_kotlin.$_$.lb;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var lazy = kotlin_kotlin.$_$.fk;
  var isNaN_0 = kotlin_kotlin.$_$.dk;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var IllegalStateException = kotlin_kotlin.$_$.ui;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k2;
  var toList = kotlin_kotlin.$_$.wa;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AttributeKey, 'AttributeKey');
  function get(key) {
    var tmp0_elvis_lhs = this.ufe(key);
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
    var tmp0_safe_receiver = this.ifg(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_iterator = this.kfg().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.v();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w();
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
      var tmp_0 = PrimitiveClasses_getInstance().gc();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().gc(), arrayOf([]), false);
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
    this.rfe_1 = name;
    this.sfe_1 = type;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.rfe_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(this_0)) {
      // Inline function 'io.ktor.util.AttributeKey.<anonymous>' call
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.rfe_1;
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.rfe_1);
    result = imul(result, 31) + this.sfe_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    var tmp0_other_with_cast = other instanceof AttributeKey ? other : THROW_CCE();
    if (!(this.rfe_1 === tmp0_other_with_cast.rfe_1))
      return false;
    if (!this.sfe_1.equals(tmp0_other_with_cast.sfe_1))
      return false;
    return true;
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = other.zfe().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.wfe(element instanceof AttributeKey ? element : THROW_CCE(), other.tfe(element));
    }
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$DelegatingMutableSet) {
    return $this$DelegatingMutableSet.aff_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$DelegatingMutableSet) {
    return caseInsensitive($this$DelegatingMutableSet);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$DelegatingMutableSet) {
    return new Entry_0($this$DelegatingMutableSet.v().aff_1, $this$DelegatingMutableSet.w());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$DelegatingMutableSet) {
    return new Entry_0(caseInsensitive($this$DelegatingMutableSet.v()), $this$DelegatingMutableSet.w());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cff_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).j = function () {
    return this.cff_1.j();
  };
  protoOf(CaseInsensitiveMap).dff = function (key) {
    return this.cff_1.l2(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.dff((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).v48 = function (key) {
    return this.cff_1.n2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.v48((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).q = function () {
    return this.cff_1.q();
  };
  protoOf(CaseInsensitiveMap).i2 = function () {
    this.cff_1.i2();
  };
  protoOf(CaseInsensitiveMap).eff = function (key, value) {
    return this.cff_1.f2(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).f2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.eff(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).fff = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = from.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.v();
      // Inline function 'kotlin.collections.component2' call
      var value = element.w();
      this.eff(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).h2 = function (from) {
    return this.fff(from);
  };
  protoOf(CaseInsensitiveMap).gff = function (key) {
    return this.cff_1.g2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).g2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.gff((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).j2 = function () {
    var tmp = this.cff_1.j2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).u = function () {
    var tmp = this.cff_1.u();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).k2 = function () {
    return this.cff_1.k2();
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
    return equals(other.cff_1, this.cff_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.cff_1);
  };
  function Entry_0(key, value) {
    this.hff_1 = key;
    this.iff_1 = value;
  }
  protoOf(Entry_0).v = function () {
    return this.hff_1;
  };
  protoOf(Entry_0).w = function () {
    return this.iff_1;
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.hff_1)) | 0) + hashCode(ensureNotNull(this.iff_1)) | 0;
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
    return equals(other.v(), this.hff_1) && equals(other.w(), this.iff_1);
  };
  protoOf(Entry_0).toString = function () {
    return toString_0(this.hff_1) + '=' + toString_0(this.iff_1);
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
  protoOf(_no_name_provided__qut3iv).z1b = function (context, exception) {
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    return Unit_instance;
  };
  function DelegatingMutableSet$iterator$1(this$0) {
    this.lff_1 = this$0;
    this.kff_1 = this$0.mff_1.g();
  }
  protoOf(DelegatingMutableSet$iterator$1).h = function () {
    return this.kff_1.h();
  };
  protoOf(DelegatingMutableSet$iterator$1).i = function () {
    return this.lff_1.nff_1(this.kff_1.i());
  };
  protoOf(DelegatingMutableSet$iterator$1).o4 = function () {
    return this.kff_1.o4();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.mff_1 = delegate;
    this.nff_1 = convertTo;
    this.off_1 = convert;
    this.pff_1 = this.mff_1.j();
  }
  protoOf(DelegatingMutableSet).qff = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      var tmp$ret$0 = this.off_1(item);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).rff = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      var tmp$ret$0 = this.nff_1(item);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).j = function () {
    return this.pff_1;
  };
  protoOf(DelegatingMutableSet).sff = function (element) {
    return this.mff_1.e(this.off_1(element));
  };
  protoOf(DelegatingMutableSet).e = function (element) {
    return this.sff((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).tff = function (elements) {
    return this.mff_1.n(this.qff(elements));
  };
  protoOf(DelegatingMutableSet).n = function (elements) {
    return this.tff(elements);
  };
  protoOf(DelegatingMutableSet).i2 = function () {
    this.mff_1.i2();
  };
  protoOf(DelegatingMutableSet).uff = function (element) {
    return this.mff_1.o2(this.off_1(element));
  };
  protoOf(DelegatingMutableSet).o2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.uff((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).vff = function (element) {
    return this.mff_1.p(this.off_1(element));
  };
  protoOf(DelegatingMutableSet).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.vff((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).wff = function (elements) {
    return this.mff_1.a2(this.qff(elements));
  };
  protoOf(DelegatingMutableSet).a2 = function (elements) {
    return this.wff(elements);
  };
  protoOf(DelegatingMutableSet).q = function () {
    return this.mff_1.q();
  };
  protoOf(DelegatingMutableSet).g = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.mff_1);
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
    var elements = this.rff(this.mff_1);
    var tmp_0;
    if (other.a2(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.a2(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString(this.rff(this.mff_1));
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
    this.xff_1 = jsPlatform;
  }
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.xff_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.xff_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    var tmp0_other_with_cast = other instanceof Js ? other : THROW_CCE();
    if (!this.xff_1.equals(tmp0_other_with_cast.xff_1))
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
      tmp_0 = platform.xff_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.yff_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.zff_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.xff_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.yff_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.afg_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.bfg_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.cfg_1 = tmp_6 instanceof WasmJs;
    this.dfg_1 = equals(get_platform(this), Jvm_getInstance());
    this.efg_1 = equals(get_platform(this), Native_getInstance());
    this.ffg_1 = get_isDevelopmentMode(this);
    this.gfg_1 = get_isNewMemoryModel(this);
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
    var tmp0_elvis_lhs = $this.nfg_1.n2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.ofg(name);
      // Inline function 'kotlin.collections.set' call
      $this.nfg_1.f2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.pfg(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.mfg_1 = caseInsensitiveName;
    this.nfg_1 = this.mfg_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).hfg = function () {
    return this.mfg_1;
  };
  protoOf(StringValuesBuilderImpl).ifg = function (name) {
    return this.nfg_1.n2(name);
  };
  protoOf(StringValuesBuilderImpl).jfg = function () {
    return this.nfg_1.j2();
  };
  protoOf(StringValuesBuilderImpl).q = function () {
    return this.nfg_1.q();
  };
  protoOf(StringValuesBuilderImpl).kfg = function () {
    return unmodifiable(this.nfg_1.u());
  };
  protoOf(StringValuesBuilderImpl).qfg = function (name, value) {
    this.rfg(value);
    var list = ensureListForKey(this, name);
    list.i2();
    list.e(value);
  };
  protoOf(StringValuesBuilderImpl).v48 = function (name) {
    var tmp0_safe_receiver = this.ifg(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).sfg = function (name, value) {
    this.rfg(value);
    ensureListForKey(this, name).e(value);
  };
  protoOf(StringValuesBuilderImpl).tfg = function (stringValues) {
    stringValues.lfg(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).pfg = function (name, values) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = values.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.rfg(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).ufg = function (name) {
    this.nfg_1.g2(name);
  };
  protoOf(StringValuesBuilderImpl).i2 = function () {
    this.nfg_1.i2();
  };
  protoOf(StringValuesBuilderImpl).ofg = function (name) {
  };
  protoOf(StringValuesBuilderImpl).rfg = function (value) {
  };
  function listForKey($this, name) {
    return $this.wfg_1.n2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.vfg_1 = caseInsensitiveName;
    var tmp;
    if (this.vfg_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = values.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.v();
      // Inline function 'kotlin.collections.component2' call
      var value = element.w();
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.j();
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
          var tmp$ret$4 = value.o(index);
          list.e(tmp$ret$4);
        }
         while (inductionVariable < size);
      newMap.f2(key, list);
    }
    this.wfg_1 = newMap;
  }
  protoOf(StringValuesImpl).hfg = function () {
    return this.vfg_1;
  };
  protoOf(StringValuesImpl).v48 = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).ifg = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).jfg = function () {
    return unmodifiable(this.wfg_1.j2());
  };
  protoOf(StringValuesImpl).q = function () {
    return this.wfg_1.q();
  };
  protoOf(StringValuesImpl).kfg = function () {
    return unmodifiable(this.wfg_1.u());
  };
  protoOf(StringValuesImpl).lfg = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.wfg_1.u().g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.v();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.w();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.vfg_1 + ') ' + toString(this.kfg());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.vfg_1 === other.hfg()))
      return false;
    return entriesEquals(this.kfg(), other.kfg());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.kfg(), imul(31, getBooleanHashCode(this.vfg_1)));
  };
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = builder.kfg().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.v();
      // Inline function 'kotlin.collections.component2' call
      var values = element.w();
      _this__u8e3s4.pfg(name, values);
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
    this_0.bd(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.q8(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
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
    this.aff_1 = content;
    var temp = 0;
    var indexedObject = this.aff_1;
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
    this.bff_1 = temp;
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.aff_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.aff_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.bff_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.aff_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.xfg_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).yfg = function (key) {
    return this.xfg_1.kotlinx$atomicfu$value.n2(key);
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zfg_1 = [null, null, null, createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values()), null, null, createSimpleEnumSerializer('io.ktor.util.date.Month', values_0()), null, null];
    this.afh_1 = GMTDate_0(new Long(0, 0));
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
    tmp0_serialDesc.u4l('seconds', false);
    tmp0_serialDesc.u4l('minutes', false);
    tmp0_serialDesc.u4l('hours', false);
    tmp0_serialDesc.u4l('dayOfWeek', false);
    tmp0_serialDesc.u4l('dayOfMonth', false);
    tmp0_serialDesc.u4l('dayOfYear', false);
    tmp0_serialDesc.u4l('month', false);
    tmp0_serialDesc.u4l('year', false);
    tmp0_serialDesc.u4l('timestamp', false);
    this.bfh_1 = tmp0_serialDesc;
  }
  protoOf($serializer).cfh = function (encoder, value) {
    var tmp0_desc = this.bfh_1;
    var tmp1_output = encoder.e4e(tmp0_desc);
    var tmp2_cached = Companion_getInstance().zfg_1;
    tmp1_output.x4e(tmp0_desc, 0, value.dfh_1);
    tmp1_output.x4e(tmp0_desc, 1, value.efh_1);
    tmp1_output.x4e(tmp0_desc, 2, value.ffh_1);
    tmp1_output.e4f(tmp0_desc, 3, tmp2_cached[3], value.gfh_1);
    tmp1_output.x4e(tmp0_desc, 4, value.hfh_1);
    tmp1_output.x4e(tmp0_desc, 5, value.ifh_1);
    tmp1_output.e4f(tmp0_desc, 6, tmp2_cached[6], value.jfh_1);
    tmp1_output.x4e(tmp0_desc, 7, value.kfh_1);
    tmp1_output.y4e(tmp0_desc, 8, value.lfh_1);
    tmp1_output.f4e(tmp0_desc);
  };
  protoOf($serializer).z4b = function (encoder, value) {
    return this.cfh(encoder, value instanceof GMTDate ? value : THROW_CCE());
  };
  protoOf($serializer).a4c = function (decoder) {
    var tmp0_desc = this.bfh_1;
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
    var tmp13_input = decoder.e4e(tmp0_desc);
    var tmp14_cached = Companion_getInstance().zfg_1;
    if (tmp13_input.x4f()) {
      tmp4_local0 = tmp13_input.e4g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.e4g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.e4g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.k4g(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.e4g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.e4g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.k4g(tmp0_desc, 6, tmp14_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.e4g(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.f4g(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.y4f(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.e4g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.e4g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.e4g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.k4g(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.e4g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.e4g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.k4g(tmp0_desc, 6, tmp14_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.e4g(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.f4g(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.f4e(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).y4b = function () {
    return this.bfh_1;
  };
  protoOf($serializer).j4m = function () {
    var tmp0_cached = Companion_getInstance().zfg_1;
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
      throwMissingFieldException(seen0, 511, $serializer_getInstance().bfh_1);
    }
    $this.dfh_1 = seconds;
    $this.efh_1 = minutes;
    $this.ffh_1 = hours;
    $this.gfh_1 = dayOfWeek;
    $this.hfh_1 = dayOfMonth;
    $this.ifh_1 = dayOfYear;
    $this.jfh_1 = month;
    $this.kfh_1 = year;
    $this.lfh_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance();
    this.dfh_1 = seconds;
    this.efh_1 = minutes;
    this.ffh_1 = hours;
    this.gfh_1 = dayOfWeek;
    this.hfh_1 = dayOfMonth;
    this.ifh_1 = dayOfYear;
    this.jfh_1 = month;
    this.kfh_1 = year;
    this.lfh_1 = timestamp;
  }
  protoOf(GMTDate).mfh = function (other) {
    return this.lfh_1.b1(other.lfh_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.mfh(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.dfh_1 + ', minutes=' + this.efh_1 + ', hours=' + this.ffh_1 + ', dayOfWeek=' + this.gfh_1.toString() + ', dayOfMonth=' + this.hfh_1 + ', dayOfYear=' + this.ifh_1 + ', month=' + this.jfh_1.toString() + ', year=' + this.kfh_1 + ', timestamp=' + this.lfh_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.dfh_1;
    result = imul(result, 31) + this.efh_1 | 0;
    result = imul(result, 31) + this.ffh_1 | 0;
    result = imul(result, 31) + this.gfh_1.hashCode() | 0;
    result = imul(result, 31) + this.hfh_1 | 0;
    result = imul(result, 31) + this.ifh_1 | 0;
    result = imul(result, 31) + this.jfh_1.hashCode() | 0;
    result = imul(result, 31) + this.kfh_1 | 0;
    result = imul(result, 31) + this.lfh_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.dfh_1 === tmp0_other_with_cast.dfh_1))
      return false;
    if (!(this.efh_1 === tmp0_other_with_cast.efh_1))
      return false;
    if (!(this.ffh_1 === tmp0_other_with_cast.ffh_1))
      return false;
    if (!this.gfh_1.equals(tmp0_other_with_cast.gfh_1))
      return false;
    if (!(this.hfh_1 === tmp0_other_with_cast.hfh_1))
      return false;
    if (!(this.ifh_1 === tmp0_other_with_cast.ifh_1))
      return false;
    if (!this.jfh_1.equals(tmp0_other_with_cast.jfh_1))
      return false;
    if (!(this.kfh_1 === tmp0_other_with_cast.kfh_1))
      return false;
    if (!this.lfh_1.equals(tmp0_other_with_cast.lfh_1))
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
  protoOf(Companion_0).nfh = function (ordinal) {
    return get_entries().o(ordinal);
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
    this.qfh_1 = value;
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
  protoOf(Companion_1).nfh = function (ordinal) {
    return get_entries_0().o(ordinal);
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
    this.tfh_1 = value;
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
    this.ufh_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return this.ufh_1;
  };
  function LockFreeLinkedListNode() {
  }
  protoOf(LockFreeLinkedListNode).a1j = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.vfh_1;
    while (true) {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.<get-next>.<anonymous>' call
      var next = this_0.kotlinx$atomicfu$value;
      if (!(next instanceof OpDescriptor))
        return next;
      next.wfh(this);
    }
  };
  protoOf(LockFreeLinkedListNode).xfh = function () {
    return unwrap(this.a1j());
  };
  function Removed() {
  }
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yfh_1;
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $proceedLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hfi_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.ifi_1 = this.hfi_1.pfi_1;
            if (this.ifi_1 === -1) {
              this.n9_1 = 5;
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            this.jfi_1 = this.hfi_1.mfi_1;
            if (this.ifi_1 >= this.jfi_1.j()) {
              this.hfi_1.qfi();
              this.n9_1 = 5;
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            this.kfi_1 = this.jfi_1.o(this.ifi_1);
            this.hfi_1.pfi_1 = this.ifi_1 + 1 | 0;
            this.n9_1 = 4;
            suspendResult = this.kfi_1(this.hfi_1, this.hfi_1.ofi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n9_1 = 1;
            continue $sm;
          case 5:
            return this.hfi_1.ofi_1;
          case 6:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 6) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.mfi_1 = interceptors;
    this.nfi_1 = coroutineContext;
    this.ofi_1 = subject;
    this.pfi_1 = 0;
  }
  protoOf(DebugPipelineContext).b14 = function () {
    return this.nfi_1;
  };
  protoOf(DebugPipelineContext).rfi = function () {
    return this.ofi_1;
  };
  protoOf(DebugPipelineContext).qfi = function () {
    this.pfi_1 = -1;
  };
  protoOf(DebugPipelineContext).sfi = function (subject, $completion) {
    this.ofi_1 = subject;
    return this.tfi($completion);
  };
  protoOf(DebugPipelineContext).tfi = function ($completion) {
    var index = this.pfi_1;
    if (index < 0)
      return this.ofi_1;
    if (index >= this.mfi_1.j()) {
      this.qfi();
      return this.ofi_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).ufi = function (initial, $completion) {
    this.pfi_1 = 0;
    this.ofi_1 = initial;
    return this.tfi($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_2().vfi_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_2().vfi_1.q()) {
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
    return toMutableList($this.yfi_1);
  }
  function copyInterceptors($this) {
    $this.yfi_1 = copiedInterceptors($this);
    $this.zfi_1 = false;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.vfi_1 = ArrayList_init_$Create$_0();
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_2();
    this.wfi_1 = phase;
    this.xfi_1 = relation;
    this.yfi_1 = interceptors;
    this.zfi_1 = true;
  }
  protoOf(PhaseContent).k2q = function () {
    return this.yfi_1.q();
  };
  protoOf(PhaseContent).j = function () {
    return this.yfi_1.j();
  };
  protoOf(PhaseContent).afj = function (interceptor) {
    if (this.zfi_1) {
      copyInterceptors(this);
    }
    this.yfi_1.e(interceptor);
  };
  protoOf(PhaseContent).bfj = function (destination) {
    var interceptors = this.yfi_1;
    if (destination instanceof ArrayList) {
      destination.w5(destination.j() + interceptors.j() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.e(interceptors.o(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).cfj = function () {
    this.zfi_1 = true;
    return this.yfi_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.wfi_1.dfj_1 + '`, ' + this.j() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.ifj_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.ifj_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.lfj());
  }
  function findPhase($this, phase) {
    var phasesList = $this.gfj_1;
    var inductionVariable = 0;
    var last = phasesList.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.o(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.q2(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.wfi_1 === phase;
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
    var phasesList = $this.gfj_1;
    var inductionVariable = 0;
    var last = phasesList.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.o(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.wfi_1 === phase;
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
    var phasesList = $this.gfj_1;
    var inductionVariable = 0;
    var last = phasesList.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.o(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.wfi_1 === phase;
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
    var interceptorsQuantity = $this.hfj_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.gfj_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.o(phaseIndex);
          var tmp0_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.k2q())
            continue $l$loop_0;
          var interceptors = phaseContent.cfj();
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
        var tmp_1 = phases.o(phaseIndex_0);
        var tmp1_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        var phase = tmp_2;
        phase.bfj(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.jfj_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.jfj_1 = false;
    $this.kfj_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.jfj_1 = false;
    $this.kfj_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.cfj());
    $this.jfj_1 = false;
    $this.kfj_1 = phaseContent.wfi_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.gfj_1.q() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.jfj_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, KtMutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.kfj_1, phase)) {
      currentInterceptors.e(block);
      return true;
    }
    if (equals(phase, last($this.gfj_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.gfj_1)) {
      ensureNotNull(findPhase($this, phase)).afj(block);
      currentInterceptors.e(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.efj_1 = AttributesJsFn(true);
    this.ffj_1 = false;
    this.gfj_1 = mutableListOf(phases.slice());
    this.hfj_1 = 0;
    this.ifj_1 = atomic$ref$1(null);
    this.jfj_1 = false;
    this.kfj_1 = null;
  }
  protoOf(Pipeline).lfj = function () {
    return this.ffj_1;
  };
  protoOf(Pipeline).mfj = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.t9();
    return createContext(this, context, subject, tmp$ret$0).ufi(subject, $completion);
  };
  protoOf(Pipeline).ofj = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.gfj_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.gfj_1.o(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xfi_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.pfj_1;
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
    this.gfj_1.r2(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).qfj = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.gfj_1.r2(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).rfj = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.hfj_1 = this.hfj_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.afj(block);
    this.hfj_1 = this.hfj_1 + 1 | 0;
    resetInterceptorsList(this);
    this.sfj();
  };
  protoOf(Pipeline).sfj = function () {
  };
  protoOf(Pipeline).toString = function () {
    return anyToString(this);
  };
  function PipelineContext(context) {
    this.nfj_1 = context;
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
    this.dfj_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.dfj_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.pfj_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.tfj_1 = relativeTo;
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
      var currentIndex = $this.afk_1;
      if (currentIndex === $this.vfj_1.j()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.xfj_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.afk_1 = currentIndex + 1 | 0;
      var next = $this.vfj_1.o(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.xfj_1, $this.wfj_1);
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
    if ($this.zfj_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.yfj_1[$this.zfj_1]);
    var _unary__edvuaz = $this.zfj_1;
    $this.zfj_1 = _unary__edvuaz - 1 | 0;
    $this.yfj_1[_unary__edvuaz] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.y9(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.y9(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.zfj_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var _unary__edvuaz = $this.zfj_1;
    $this.zfj_1 = _unary__edvuaz - 1 | 0;
    $this.yfj_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.cfk_1 = this$0;
    this.bfk_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).t9 = function () {
    var continuation = this.cfk_1.yfj_1[this.cfk_1.zfj_1];
    if (!(continuation === this) && !(continuation == null))
      return continuation.t9();
    var index = this.cfk_1.zfj_1 - 1 | 0;
    while (index >= 0) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz - 1 | 0;
      var cont = this.cfk_1.yfj_1[_unary__edvuaz];
      if (!(cont === this) && !(cont == null))
        return cont.t9();
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
      resumeRootWith(this.cfk_1, tmp$ret$0);
      return Unit_instance;
    }
    loop(this.cfk_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).y9 = function (result) {
    return this.xh(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.vfj_1 = blocks;
    var tmp = this;
    tmp.wfj_1 = new SuspendFunctionGun$continuation$1(this);
    this.xfj_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.vfj_1.j();
    tmp_0.yfj_1 = fillArrayVal(Array(size), null);
    this.zfj_1 = -1;
    this.afk_1 = 0;
  }
  protoOf(SuspendFunctionGun).b14 = function () {
    return this.wfj_1.t9();
  };
  protoOf(SuspendFunctionGun).rfi = function () {
    return this.xfj_1;
  };
  protoOf(SuspendFunctionGun).tfi = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      if (this.afk_1 === this.vfj_1.j()) {
        tmp$ret$0 = this.xfj_1;
        break $l$block_0;
      }
      this.dfk(intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.xfj_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).sfi = function (subject, $completion) {
    this.xfj_1 = subject;
    return this.tfi($completion);
  };
  protoOf(SuspendFunctionGun).ufi = function (initial, $completion) {
    this.afk_1 = 0;
    if (this.afk_1 === this.vfj_1.j())
      return initial;
    this.xfj_1 = initial;
    if (this.zfj_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.tfi($completion);
  };
  protoOf(SuspendFunctionGun).dfk = function (continuation) {
    this.zfj_1 = this.zfj_1 + 1 | 0;
    this.yfj_1[this.zfj_1] = continuation;
  };
  function TypeInfo(type, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.efk_1 = type;
    this.ffk_1 = kotlinType;
  }
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.ffk_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? this.efk_1.hashCode() : tmp1_elvis_lhs;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp;
    if (!(this.ffk_1 == null) || !(other.ffk_1 == null)) {
      tmp = equals(this.ffk_1, other.ffk_1);
    } else {
      tmp = this.efk_1.equals(other.efk_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.ffk_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.efk_1 : tmp0_elvis_lhs) + ')';
  };
  function get_platform(_this__u8e3s4) {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    // Inline function 'kotlin.getValue' call
    var this_0 = platform$delegate;
    platform$factory();
    return this_0.w();
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
    var tmp1_safe_receiver = timestamp == null ? null : timestamp.r3();
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
    var dayOfWeek = Companion_instance_1.nfh((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_2.nfh(date.getUTCMonth());
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
    tmp.gfk_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).ufe = function (key) {
    var tmp = this.gfk_1.n2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).vfe = function (key) {
    return this.gfk_1.l2(key);
  };
  protoOf(AttributesJs).wfe = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.gfk_1.f2(key, value);
  };
  protoOf(AttributesJs).xfe = function (key) {
    this.gfk_1.g2(key);
  };
  protoOf(AttributesJs).yfe = function (key, block) {
    var tmp0_safe_receiver = this.gfk_1.n2(key);
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
    this.gfk_1.f2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).zfe = function () {
    return toList(this.gfk_1.j2());
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
    switch (PlatformUtils_getInstance().afg_1 || PlatformUtils_getInstance().zff_1) {
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
            var tmp0_iterator = get_entries_1().g();
            while (tmp0_iterator.h()) {
              var element = tmp0_iterator.i();
              // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>.<anonymous>' call
              if (element.t2_1 === tmp1_safe_receiver) {
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
    tmp.hfk_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).ifk = function (message) {
    if (this.hfk_1.v2(LogLevel_TRACE_getInstance()) > 0)
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
    return type.lb(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf($serializer).k4m = typeParametersSerializers;
  protoOf(AttributesJs).tfe = get;
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
