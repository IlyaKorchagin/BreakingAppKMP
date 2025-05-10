(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './Stately-stately-concurrency.js', './Stately-stately-concurrent-collections.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./Stately-stately-concurrency.js'), require('./Stately-stately-concurrent-collections.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-core-koin-core'.");
    }
    if (typeof globalThis['Stately-stately-concurrency'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'Stately-stately-concurrency' was not found. Please, check whether 'Stately-stately-concurrency' is loaded prior to 'projects-core-koin-core'.");
    }
    if (typeof globalThis['Stately-stately-concurrent-collections'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'Stately-stately-concurrent-collections' was not found. Please, check whether 'Stately-stately-concurrent-collections' is loaded prior to 'projects-core-koin-core'.");
    }
    globalThis['projects-core-koin-core'] = factory(typeof globalThis['projects-core-koin-core'] === 'undefined' ? {} : globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['Stately-stately-concurrency'], globalThis['Stately-stately-concurrent-collections']);
  }
}(function (_, kotlin_kotlin, kotlin_co_touchlab_stately_concurrency, kotlin_co_touchlab_stately_concurrent_collections) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var protoOf = kotlin_kotlin.$_$.he;
  var Pair = kotlin_kotlin.$_$.bj;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var VOID = kotlin_kotlin.$_$.i;
  var emptyList = kotlin_kotlin.$_$.a8;
  var toString = kotlin_kotlin.$_$.rk;
  var toString_0 = kotlin_kotlin.$_$.le;
  var equals = kotlin_kotlin.$_$.qc;
  var joinToString = kotlin_kotlin.$_$.y8;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var hashCode = kotlin_kotlin.$_$.zc;
  var Enum = kotlin_kotlin.$_$.qi;
  var Exception = kotlin_kotlin.$_$.si;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.hc;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.a2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var asReversed = kotlin_kotlin.$_$.z6;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.q;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var toList = kotlin_kotlin.$_$.wa;
  var copyToArray = kotlin_kotlin.$_$.y7;
  var arrayListOf = kotlin_kotlin.$_$.x6;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var ThreadLocalRef = kotlin_co_touchlab_stately_concurrency.$_$.a;
  var plus = kotlin_kotlin.$_$.ba;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var Monotonic_instance = kotlin_kotlin.$_$.o5;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.f3;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.d3;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.y1;
  var split = kotlin_kotlin.$_$.ih;
  var Default_getInstance = kotlin_kotlin.$_$.j5;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var ConcurrentMutableMap_init_$Create$ = kotlin_co_touchlab_stately_concurrent_collections.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Koin, 'Koin', Koin);
  initMetadataForCompanion(Companion);
  initMetadataForClass(KoinApplication, 'KoinApplication');
  initMetadataForClass(BeanDefinition, 'BeanDefinition');
  initMetadataForClass(Kind, 'Kind', VOID, Enum);
  initMetadataForClass(Callbacks, 'Callbacks', Callbacks);
  initMetadataForClass(KoinDefinition, 'KoinDefinition');
  initMetadataForClass(ClosedScopeException, 'ClosedScopeException', VOID, Exception);
  initMetadataForClass(DefinitionOverrideException, 'DefinitionOverrideException', VOID, Exception);
  initMetadataForClass(InstanceCreationException, 'InstanceCreationException', VOID, Exception);
  initMetadataForClass(KoinAppAlreadyStartedException, 'KoinAppAlreadyStartedException', VOID, Exception);
  initMetadataForClass(NoBeanDefFoundException, 'NoBeanDefFoundException', VOID, Exception);
  initMetadataForClass(ExtensionManager, 'ExtensionManager');
  initMetadataForClass(InstanceContext, 'InstanceContext');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(InstanceFactory, 'InstanceFactory');
  initMetadataForClass(SingleInstanceFactory, 'SingleInstanceFactory', VOID, InstanceFactory);
  initMetadataForClass(Logger, 'Logger');
  initMetadataForClass(EmptyLogger, 'EmptyLogger', EmptyLogger, Logger);
  initMetadataForClass(Level, 'Level', VOID, Enum);
  initMetadataForClass(Module, 'Module', Module);
  initMetadataForClass(ParametersHolder, 'ParametersHolder', ParametersHolder);
  initMetadataForClass(StringQualifier, 'StringQualifier');
  initMetadataForClass(InstanceRegistry, 'InstanceRegistry');
  initMetadataForClass(PropertyRegistry, 'PropertyRegistry');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ScopeRegistry, 'ScopeRegistry');
  initMetadataForClass(Scope, 'Scope');
  initMetadataForCompanion(Companion_2);
  initMetadataForObject(GlobalContext, 'GlobalContext');
  initMetadataForObject(KoinPlatformTimeTools, 'KoinPlatformTimeTools');
  initMetadataForObject(KoinPlatformTools, 'KoinPlatformTools');
  //endregion
  function Koin() {
    this.jq_1 = new ScopeRegistry(this);
    this.kq_1 = new InstanceRegistry(this);
    this.lq_1 = new PropertyRegistry(this);
    this.mq_1 = new ExtensionManager(this);
    this.nq_1 = new EmptyLogger();
  }
  protoOf(Koin).oq = function (modules, allowOverride, createEagerInstances) {
    var flattedModules = flatten(modules);
    this.kq_1.sq(flattedModules, allowOverride);
    this.jq_1.xq(flattedModules);
    if (createEagerInstances) {
      this.yq();
    }
  };
  protoOf(Koin).yq = function () {
    this.nq_1.ar('Create eager instances ...');
    // Inline function 'org.koin.core.time.measureDuration' call
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_instance.br();
    this.kq_1.cr();
    var value = Unit_instance;
    var stop = KoinPlatformTimeTools_instance.br();
    // Inline function 'kotlin.Long.div' call
    var tmp$ret$0 = stop.b3(start).r3() / 1000000.0;
    var duration = (new Pair(value, tmp$ret$0)).fb_1;
    this.nq_1.ar('Created eager instances in ' + duration + ' ms');
  };
  function loadModules($this, modules) {
    $this.dr_1.oq(modules, $this.er_1, false);
  }
  function Companion() {
  }
  protoOf(Companion).fr = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function KoinApplication() {
    this.dr_1 = new Koin();
    this.er_1 = true;
  }
  protoOf(KoinApplication).gr = function (modules) {
    if (this.dr_1.nq_1.jr(Level_INFO_getInstance())) {
      // Inline function 'org.koin.core.time.measureDuration' call
      // Inline function 'org.koin.core.time.measureTimedValue' call
      var start = KoinPlatformTimeTools_instance.br();
      loadModules(this, modules);
      var value = Unit_instance;
      var stop = KoinPlatformTimeTools_instance.br();
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = stop.b3(start).r3() / 1000000.0;
      var duration = (new Pair(value, tmp$ret$0)).fb_1;
      var count = this.dr_1.kq_1.hr();
      this.dr_1.nq_1.ir(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + duration + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  function startKoin(appDeclaration) {
    return KoinPlatformTools_instance.kr().lr(appDeclaration);
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    qualifier = qualifier === VOID ? null : qualifier;
    var tmp;
    if (secondaryTypes === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = secondaryTypes;
    }
    secondaryTypes = tmp;
    this.mr_1 = scopeQualifier;
    this.nr_1 = primaryType;
    this.or_1 = qualifier;
    this.pr_1 = definition;
    this.qr_1 = kind;
    this.rr_1 = secondaryTypes;
    this.sr_1 = new Callbacks();
    this.tr_1 = false;
  }
  protoOf(BeanDefinition).toString = function () {
    var defKind = this.qr_1.toString();
    var defType = "'" + getFullName(this.nr_1) + "'";
    var tmp;
    if (this.or_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
      tmp = ',qualifier:' + toString(this.or_1);
    }
    var tmp1_elvis_lhs = tmp;
    var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    var it = this.mr_1;
    var defScope = equals(it, Companion_getInstance_1().vr_1) ? '' : ',scope:' + toString_0(this.mr_1);
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.rr_1.q()) {
      var tmp_1 = this.rr_1;
      var typesAsString = joinToString(tmp_1, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
      tmp_0 = ',binds:' + typesAsString;
    } else {
      tmp_0 = '';
    }
    var defOtherTypes = tmp_0;
    return '[' + defKind + ':' + defType + defName + defScope + defOtherTypes + ']';
  };
  protoOf(BeanDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BeanDefinition))
      THROW_CCE();
    if (!this.nr_1.equals(other.nr_1))
      return false;
    if (!equals(this.or_1, other.or_1))
      return false;
    if (!equals(this.mr_1, other.mr_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.or_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.nr_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.mr_1) | 0;
    return result;
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.w();
    var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return getFullName(clazz) + ':' + tq + ':' + toString_0(scopeQualifier);
  }
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_instance;
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Kind_Singleton_getInstance() {
    Kind_initEntries();
    return Kind_Singleton_instance;
  }
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.wr_1 = onClose;
  }
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + toString(this.wr_1) + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.wr_1 == null ? 0 : hashCode(this.wr_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.wr_1, tmp0_other_with_cast.wr_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.xr_1 = module_0;
    this.yr_1 = factory;
  }
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + toString_0(this.xr_1) + ', factory=' + toString_0(this.yr_1) + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.xr_1.hashCode();
    result = imul(result, 31) + this.yr_1.hashCode() | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.xr_1.equals(tmp0_other_with_cast.xr_1))
      return false;
    if (!this.yr_1.equals(tmp0_other_with_cast.yr_1))
      return false;
    return true;
  };
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  function DefinitionOverrideException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, DefinitionOverrideException);
  }
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinAppAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinAppAlreadyStartedException);
  }
  function NoBeanDefFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoBeanDefFoundException);
  }
  function ExtensionManager(_koin) {
    this.zr_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.as_1 = HashMap_init_$Create$();
  }
  function InstanceContext(logger, scope, parameters) {
    parameters = parameters === VOID ? null : parameters;
    this.bs_1 = logger;
    this.cs_1 = scope;
    this.ds_1 = parameters;
  }
  function Companion_0() {
    this.es_1 = '\n\t';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    this.fs_1 = beanDefinition;
  }
  protoOf(InstanceFactory).hs = function (context) {
    context.bs_1.ar("| (+) '" + this.fs_1.toString() + "'");
    try {
      var tmp0_elvis_lhs = context.ds_1;
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.fs_1.pr_1(context.cs_1, parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_instance.is(e);
        context.bs_1.js("* Instance creation error : could not create instance for '" + this.fs_1.toString() + "': " + stack);
        throw new InstanceCreationException("Could not create instance for '" + this.fs_1.toString() + "'", e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(InstanceFactory).equals = function (other) {
    var tmp0_safe_receiver = other instanceof InstanceFactory ? other : null;
    var other_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fs_1;
    return this.fs_1.equals(other_0);
  };
  protoOf(InstanceFactory).hashCode = function () {
    return this.fs_1.hashCode();
  };
  function getValue($this) {
    var tmp0_elvis_lhs = $this.ls_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Single instance created couldn't return value";
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SingleInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.ms($context)) {
        this$0.ls_1 = this$0.hs($context);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.ls_1 = null;
  }
  protoOf(SingleInstanceFactory).ms = function (context) {
    return !(this.ls_1 == null);
  };
  protoOf(SingleInstanceFactory).hs = function (context) {
    var tmp;
    if (this.ls_1 == null) {
      tmp = protoOf(InstanceFactory).hs.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  protoOf(SingleInstanceFactory).gs = function (context) {
    var tmp = KoinPlatformTools_instance;
    tmp.ns(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).ir = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.zq_1 = level;
  }
  protoOf(Logger).ar = function (msg) {
    this.rs(Level_DEBUG_getInstance(), msg);
  };
  protoOf(Logger).ps = function (msg) {
    this.rs(Level_INFO_getInstance(), msg);
  };
  protoOf(Logger).qs = function (msg) {
    this.rs(Level_WARNING_getInstance(), msg);
  };
  protoOf(Logger).js = function (msg) {
    this.rs(Level_ERROR_getInstance(), msg);
  };
  protoOf(Logger).jr = function (lvl) {
    return this.zq_1.v2(lvl) <= 0;
  };
  protoOf(Logger).rs = function (lvl, msg) {
    if (this.jr(lvl)) {
      this.ir(lvl, msg);
    }
  };
  protoOf(Logger).ss = function (lvl, msg) {
    if (this.jr(lvl)) {
      this.ir(lvl, msg());
    }
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_WARNING_instance = new Level('WARNING', 2);
    Level_ERROR_instance = new Level('ERROR', 3);
    Level_NONE_instance = new Level('NONE', 4);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function Module(_createdAtStart) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    this.ts_1 = _createdAtStart;
    this.us_1 = KoinPlatformTools_instance.zs();
    var tmp = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp.vs_1 = HashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.ws_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp_1.xs_1 = HashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.ys_1 = ArrayList_init_$Create$();
  }
  protoOf(Module).at = function (instanceFactory) {
    var def = instanceFactory.fs_1;
    var mapping = indexKey(def.nr_1, def.or_1, def.mr_1);
    this.bt(mapping, instanceFactory);
  };
  protoOf(Module).ct = function (instanceFactory) {
    var def = instanceFactory.fs_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = def.rr_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.koin.core.module.Module.indexSecondaryTypes.<anonymous>' call
      var mapping = indexKey(element, def.or_1, def.mr_1);
      this.bt(mapping, instanceFactory);
    }
  };
  protoOf(Module).dt = function (instanceFactory) {
    this.vs_1.e(instanceFactory);
  };
  protoOf(Module).bt = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.ws_1.f2(mapping, factory);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Module))
      THROW_CCE();
    if (!(this.us_1 === other.us_1))
      return false;
    return true;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.us_1);
  };
  function flatten(modules) {
    // Inline function 'kotlin.collections.linkedSetOf' call
    var flatten = LinkedHashSet_init_$Create$();
    var stack = ArrayDeque_init_$Create$(asReversed(modules));
    $l$loop_0: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!stack.q()) {
        break $l$loop_0;
      }
      var current = stack.tg();
      if (!flatten.e(current)) {
        continue $l$loop_0;
      }
      var tmp0_iterator = current.ys_1.g();
      while (tmp0_iterator.h()) {
        var module_0 = tmp0_iterator.i();
        if (!flatten.p(module_0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          stack.e(module_0);
        }
      }
    }
    return flatten;
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.fs_1.toString() + ' at ' + mapping);
  }
  function onOptions(_this__u8e3s4, options) {
    options = options === VOID ? null : options;
    if (!(options == null)) {
      // Inline function 'org.koin.core.module.dsl.withOptions' call
      var def = _this__u8e3s4.yr_1.fs_1;
      var primary = def.or_1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      options(def);
      if (!equals(def.or_1, primary)) {
        _this__u8e3s4.xr_1.at(_this__u8e3s4.yr_1);
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!def.rr_1.q()) {
        _this__u8e3s4.xr_1.ct(_this__u8e3s4.yr_1);
      }
      var tmp;
      if (def.tr_1) {
        var tmp_0 = _this__u8e3s4.yr_1;
        tmp = tmp_0 instanceof SingleInstanceFactory;
      } else {
        tmp = false;
      }
      if (tmp) {
        _this__u8e3s4.xr_1.dt(_this__u8e3s4.yr_1);
      }
    }
    return _this__u8e3s4;
  }
  function getFirstValue($this, clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = $this.et_1.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
        if (clazz.lb(element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
      tmp = !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function getIndexedValue($this, clazz) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = $this.et_1.o($this.gt_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
    if (clazz.lb(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
      tmp_0 = !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    var currentValue = tmp_0;
    if (!(currentValue == null)) {
      $this.ht();
    }
    return currentValue;
  }
  function ParametersHolder(_values, useIndexedValues) {
    var tmp;
    if (_values === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = _values;
    }
    _values = tmp;
    useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
    this.et_1 = _values;
    this.ft_1 = useIndexedValues;
    this.gt_1 = 0;
  }
  protoOf(ParametersHolder).it = function (clazz) {
    var tmp;
    if (this.et_1.q()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.ft_1) {
        case null:
          var tmp1_elvis_lhs = getIndexedValue(this, clazz);
          tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
          break;
        case true:
          tmp_0 = getIndexedValue(this, clazz);
          break;
        default:
          tmp_0 = getFirstValue(this, clazz);
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ParametersHolder).ht = function () {
    if (this.gt_1 < get_lastIndex(this.et_1)) {
      this.gt_1 = this.gt_1 + 1 | 0;
    }
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toString_0(toList(this.et_1));
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.jt_1 = value;
  }
  protoOf(StringQualifier).w = function () {
    return this.jt_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.jt_1;
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.jt_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.jt_1 === tmp0_other_with_cast.jt_1))
      return false;
    return true;
  };
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = module_0.vs_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.rq_1;
      var key = element.hashCode();
      this_0.f2(key, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = module_0.ws_1.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var mapping = element.v();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.w();
      $this.kt(allowOverride, mapping, factory);
    }
  }
  function createEagerInstances($this, instances) {
    var defaultContext = new InstanceContext($this.pq_1.nq_1, $this.pq_1.jq_1.wq_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = instances.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
      element.gs(defaultContext);
    }
  }
  function InstanceRegistry(_koin) {
    this.pq_1 = _koin;
    this.qq_1 = KoinPlatformTools_instance.lt();
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.rq_1 = HashMap_init_$Create$();
  }
  protoOf(InstanceRegistry).sq = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).cr = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.rq_1.k2();
    var tmp$ret$0 = copyToArray(this_0);
    var instances = arrayListOf(tmp$ret$0.slice());
    this.rq_1.i2();
    createEagerInstances(this, instances);
  };
  protoOf(InstanceRegistry).mt = function (allowOverride, mapping, factory, logWarning) {
    if (this.qq_1.l2(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning) {
          this.pq_1.nq_1.qs("(+) override index '" + mapping + "' -> '" + factory.fs_1.toString() + "'");
        }
      }
    }
    this.pq_1.nq_1.ar("(+) index '" + mapping + "' -> '" + factory.fs_1.toString() + "'");
    // Inline function 'kotlin.collections.set' call
    this.qq_1.f2(mapping, factory);
  };
  protoOf(InstanceRegistry).kt = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.mt(allowOverride, mapping, factory, logWarning);
      tmp = Unit_instance;
    } else {
      tmp = $super.mt.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).nt = function (clazz, qualifier, scopeQualifier) {
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return this.qq_1.n2(indexKey_0);
  };
  protoOf(InstanceRegistry).ot = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.nt(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gs(instanceContext);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(InstanceRegistry).hr = function () {
    return this.qq_1.j();
  };
  function PropertyRegistry(_koin) {
    this.pt_1 = _koin;
    this.qt_1 = KoinPlatformTools_instance.lt();
  }
  function loadModule_0($this, module_0) {
    $this.uq_1.n(module_0.xs_1);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.ur_1 = '_root_';
    this.vr_1 = _q('_root_');
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_1();
    this.tq_1 = _koin;
    this.uq_1 = HashSet_init_$Create$();
    this.vq_1 = KoinPlatformTools_instance.lt();
    this.wq_1 = new Scope(Companion_getInstance_1().vr_1, '_root_', true, this.tq_1);
    this.uq_1.e(this.wq_1.rt_1);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.vq_1;
    var key = this.wq_1.st_1;
    var value = this.wq_1;
    this_0.f2(key, value);
  }
  protoOf(ScopeRegistry).xq = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this.zt_1) {
      throw new ClosedScopeException("Scope '" + $this.st_1 + "' is closed");
    }
    var parameters = parameterDef == null ? null : parameterDef();
    var localDeque = null;
    if (!(parameters == null)) {
      var tmp = $this.ut_1.nq_1;
      var tmp_0 = Level_DEBUG_getInstance();
      tmp.ss(tmp_0, Scope$resolveInstance$lambda(parameters));
      var tmp1_elvis_lhs = $this.yt_1.zp();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = ArrayDeque_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call
        $this.yt_1.yp(this_0);
        tmp_1 = this_0;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      localDeque = tmp_1;
      localDeque.pg(parameters);
    }
    var instanceContext = new InstanceContext($this.ut_1.nq_1, $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(localDeque == null)) {
      $this.ut_1.nq_1.ar('| << parameters');
      localDeque.sg();
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this.ut_1.kq_1.ot(qualifier, clazz, $this.rt_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      $this.ut_1.nq_1.ar("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look in injected parameters");
      var tmp0_safe_receiver = $this.yt_1.zp();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mg();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.it(clazz);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      var tmp_1;
      if (!$this.tt_1) {
        $this.ut_1.nq_1.ar("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look at scope source");
        var tmp0_safe_receiver_0 = $this.wt_1;
        var tmp_2;
        if (tmp0_safe_receiver_0 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>.<anonymous>' call
          var tmp_3;
          if (clazz.lb(tmp0_safe_receiver_0) && qualifier == null) {
            var tmp_4 = $this.wt_1;
            tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : null;
          } else {
            tmp_3 = null;
          }
          tmp_2 = tmp_3;
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_5;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      $this.ut_1.nq_1.ar("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look in other scopes");
      tmp_5 = findInOtherScope($this, clazz, qualifier, parameterDef);
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var tmp_6;
    if (tmp3_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      if (!(parameterDef == null)) {
        $this.yt_1.o4();
        $this.ut_1.nq_1.ar('|- << parameters');
      }
      throwDefinitionNotFound($this, qualifier, clazz);
      tmp_6 = tmp$ret$8;
    } else {
      tmp_6 = tmp3_elvis_lhs;
    }
    return tmp_6;
  }
  function findInOtherScope($this, clazz, qualifier, parameters) {
    var instance = null;
    var tmp0_iterator = $this.vt_1.g();
    $l$loop: while (tmp0_iterator.h()) {
      var scope = tmp0_iterator.i();
      instance = scope.au(clazz, qualifier, parameters);
      if (!(instance == null))
        break $l$loop;
    }
    return instance;
  }
  function throwDefinitionNotFound($this, qualifier, clazz) {
    var tmp;
    if (qualifier == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound.<anonymous>' call
      tmp = " and qualifier '" + toString(qualifier) + "'";
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    throw new NoBeanDefFoundException("No definition found for type '" + getFullName(clazz) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
  }
  function Scope$resolveInstance$lambda($parameters) {
    return function () {
      return '| >> parameters ' + toString($parameters) + ' ';
    };
  }
  function Scope(scopeQualifier, id, isRoot, _koin) {
    isRoot = isRoot === VOID ? false : isRoot;
    this.rt_1 = scopeQualifier;
    this.st_1 = id;
    this.tt_1 = isRoot;
    this.ut_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.vt_1 = ArrayList_init_$Create$();
    this.wt_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_0.xt_1 = ArrayList_init_$Create$();
    this.yt_1 = new ThreadLocalRef();
    this.zt_1 = false;
  }
  protoOf(Scope).au = function (clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.bu(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this.ut_1.nq_1.ar('* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoBeanDefFoundException) {
          var e_0 = $p;
          this.ut_1.nq_1.ar("* No instance found for type '" + getFullName(clazz) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).bu = function (clazz, qualifier, parameters) {
    var tmp;
    if (this.ut_1.nq_1.jr(Level_DEBUG_getInstance())) {
      var tmp_0;
      if (qualifier == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.koin.core.scope.Scope.get.<anonymous>' call
        tmp_0 = " with qualifier '" + toString(qualifier) + "'";
      }
      var tmp1_elvis_lhs = tmp_0;
      var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var scopeId = this.tt_1 ? '' : "- scope:'" + this.st_1;
      this.ut_1.nq_1.ir(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + ' ' + scopeId + '...');
      var start = KoinPlatformTimeTools_instance.br();
      var instance = resolveInstance(this, qualifier, clazz, parameters);
      var stop = KoinPlatformTimeTools_instance.br();
      // Inline function 'kotlin.Long.div' call
      var duration = stop.b3(start).r3() / 1000000.0;
      this.ut_1.nq_1.ir(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      tmp = instance;
    } else {
      tmp = resolveInstance(this, qualifier, clazz, parameters);
    }
    return tmp;
  };
  protoOf(Scope).toString = function () {
    return "['" + this.st_1 + "']";
  };
  function Companion_2() {
    this.cu_1 = 1000000.0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function bind(_this__u8e3s4, clazz) {
    _this__u8e3s4.yr_1.fs_1.rr_1 = plus(_this__u8e3s4.yr_1.fs_1.rr_1, clazz);
    var mapping = indexKey(clazz, _this__u8e3s4.yr_1.fs_1.or_1, _this__u8e3s4.yr_1.fs_1.mr_1);
    _this__u8e3s4.xr_1.bt(mapping, _this__u8e3s4.yr_1);
    return _this__u8e3s4;
  }
  function module_0(createdAtStart, moduleDeclaration) {
    createdAtStart = createdAtStart === VOID ? false : createdAtStart;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function get_classNames() {
    _init_properties_KClassExt_kt__5ro5b2();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var tmp0_elvis_lhs = get_classNames().n2(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_instance.du(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    get_classNames().f2(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (!properties_initialized_KClassExt_kt_dizwhw) {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_instance.lt();
    }
  }
  function register($this, koinApplication) {
    if (!($this.eu_1 == null)) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }
    $this.eu_1 = koinApplication.dr_1;
  }
  function GlobalContext() {
    this.eu_1 = null;
  }
  protoOf(GlobalContext).zp = function () {
    var tmp0_elvis_lhs = this.eu_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'KoinApplication has not been started';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(GlobalContext).lr = function (appDeclaration) {
    var koinApplication = Companion_instance.fr();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    return GlobalContext_instance;
  }
  function KoinPlatformTimeTools() {
  }
  protoOf(KoinPlatformTimeTools).br = function () {
    return _Duration___get_inWholeNanoseconds__impl__r5x4mr(ValueTimeMark__elapsedNow_impl_eonqvs(Monotonic_instance.hf()));
  };
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
  }
  protoOf(KoinPlatformTools).is = function (e) {
    return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
  };
  protoOf(KoinPlatformTools).du = function (kClass) {
    var tmp0_elvis_lhs = kClass.kb();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).zs = function () {
    return getNumberHashCode(Default_getInstance().qk()).toString();
  };
  protoOf(KoinPlatformTools).kr = function () {
    return GlobalContext_instance;
  };
  protoOf(KoinPlatformTools).ns = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).lt = function () {
    return ConcurrentMutableMap_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    return KoinPlatformTools_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_2 = new Companion_2();
  GlobalContext_instance = new GlobalContext();
  KoinPlatformTimeTools_instance = new KoinPlatformTimeTools();
  KoinPlatformTools_instance = new KoinPlatformTools();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Kind_Singleton_getInstance;
  _.$_$.b = Companion_getInstance_1;
  _.$_$.c = KoinPlatformTools_instance;
  _.$_$.d = startKoin;
  _.$_$.e = BeanDefinition;
  _.$_$.f = KoinDefinition;
  _.$_$.g = SingleInstanceFactory;
  _.$_$.h = onOptions;
  _.$_$.i = emptyParametersHolder;
  _.$_$.j = bind;
  _.$_$.k = module_0;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-core-koin-core.js.map
