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
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var protoOf = kotlin_kotlin.$_$.ff;
  var Pair = kotlin_kotlin.$_$.mk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.j;
  var emptyList = kotlin_kotlin.$_$.o8;
  var toString = kotlin_kotlin.$_$.cm;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var equals = kotlin_kotlin.$_$.od;
  var joinToString = kotlin_kotlin.$_$.n9;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var hashCode = kotlin_kotlin.$_$.xd;
  var Enum = kotlin_kotlin.$_$.bk;
  var Exception = kotlin_kotlin.$_$.dk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b2;
  var captureStack = kotlin_kotlin.$_$.fd;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.d2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.a1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var asReversed = kotlin_kotlin.$_$.k7;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.r;
  var get_lastIndex = kotlin_kotlin.$_$.r9;
  var toList = kotlin_kotlin.$_$.rb;
  var copyToArray = kotlin_kotlin.$_$.k8;
  var arrayListOf = kotlin_kotlin.$_$.i7;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var ThreadLocalRef = kotlin_co_touchlab_stately_concurrency.$_$.a;
  var plus = kotlin_kotlin.$_$.ra;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var Monotonic_instance = kotlin_kotlin.$_$.x5;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.m3;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.k3;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.a2;
  var split = kotlin_kotlin.$_$.li;
  var Default_getInstance = kotlin_kotlin.$_$.s5;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
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
  initMetadataForClass(InstanceFactory, 'InstanceFactory');
  initMetadataForClass(FactoryInstanceFactory, 'FactoryInstanceFactory', VOID, InstanceFactory);
  initMetadataForClass(InstanceContext, 'InstanceContext');
  initMetadataForCompanion(Companion_0);
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
    this.nq_1 = new ScopeRegistry(this);
    this.oq_1 = new InstanceRegistry(this);
    this.pq_1 = new PropertyRegistry(this);
    this.qq_1 = new ExtensionManager(this);
    this.rq_1 = new EmptyLogger();
  }
  protoOf(Koin).sq = function (modules, allowOverride, createEagerInstances) {
    var flattedModules = flatten(modules);
    this.oq_1.wq(flattedModules, allowOverride);
    this.nq_1.br(flattedModules);
    if (createEagerInstances) {
      this.cr();
    }
  };
  protoOf(Koin).cr = function () {
    this.rq_1.er('Create eager instances ...');
    // Inline function 'org.koin.core.time.measureDuration' call
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_instance.fr();
    this.oq_1.gr();
    var value = Unit_instance;
    var stop = KoinPlatformTimeTools_instance.fr();
    // Inline function 'kotlin.Long.div' call
    var tmp$ret$0 = stop.g3(start).w3() / 1000000.0;
    var duration = (new Pair(value, tmp$ret$0)).kb_1;
    this.rq_1.er('Created eager instances in ' + duration + ' ms');
  };
  function loadModules($this, modules) {
    $this.hr_1.sq(modules, $this.ir_1, false);
  }
  function Companion() {
  }
  protoOf(Companion).jr = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function KoinApplication() {
    this.hr_1 = new Koin();
    this.ir_1 = true;
  }
  protoOf(KoinApplication).kr = function (modules) {
    if (this.hr_1.rq_1.nr(Level_INFO_getInstance())) {
      // Inline function 'org.koin.core.time.measureDuration' call
      // Inline function 'org.koin.core.time.measureTimedValue' call
      var start = KoinPlatformTimeTools_instance.fr();
      loadModules(this, modules);
      var value = Unit_instance;
      var stop = KoinPlatformTimeTools_instance.fr();
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = stop.g3(start).w3() / 1000000.0;
      var duration = (new Pair(value, tmp$ret$0)).kb_1;
      var count = this.hr_1.oq_1.lr();
      this.hr_1.rq_1.mr(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + duration + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  function startKoin(appDeclaration) {
    return KoinPlatformTools_instance.or().pr(appDeclaration);
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
    this.qr_1 = scopeQualifier;
    this.rr_1 = primaryType;
    this.sr_1 = qualifier;
    this.tr_1 = definition;
    this.ur_1 = kind;
    this.vr_1 = secondaryTypes;
    this.wr_1 = new Callbacks();
    this.xr_1 = false;
  }
  protoOf(BeanDefinition).toString = function () {
    var defKind = this.ur_1.toString();
    var defType = "'" + getFullName(this.rr_1) + "'";
    var tmp;
    if (this.sr_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
      tmp = ',qualifier:' + toString(this.sr_1);
    }
    var tmp1_elvis_lhs = tmp;
    var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    var it = this.qr_1;
    var defScope = equals(it, Companion_getInstance_1().zr_1) ? '' : ',scope:' + toString_0(this.qr_1);
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.vr_1.j()) {
      var tmp_1 = this.vr_1;
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
    if (!this.rr_1.equals(other.rr_1))
      return false;
    if (!equals(this.sr_1, other.sr_1))
      return false;
    if (!equals(this.qr_1, other.qr_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.sr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.rr_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.qr_1) | 0;
    return result;
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.c1();
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
  function Kind_Factory_getInstance() {
    Kind_initEntries();
    return Kind_Factory_instance;
  }
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.as_1 = onClose;
  }
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + toString(this.as_1) + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.as_1 == null ? 0 : hashCode(this.as_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.as_1, tmp0_other_with_cast.as_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.bs_1 = module_0;
    this.cs_1 = factory;
  }
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + toString_0(this.bs_1) + ', factory=' + toString_0(this.cs_1) + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.bs_1.hashCode();
    result = imul(result, 31) + this.cs_1.hashCode() | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.bs_1.equals(tmp0_other_with_cast.bs_1))
      return false;
    if (!this.cs_1.equals(tmp0_other_with_cast.cs_1))
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
    this.ds_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.es_1 = HashMap_init_$Create$();
  }
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  protoOf(FactoryInstanceFactory).gs = function (context) {
    return this.is(context);
  };
  function InstanceContext(logger, scope, parameters) {
    parameters = parameters === VOID ? null : parameters;
    this.js_1 = logger;
    this.ks_1 = scope;
    this.ls_1 = parameters;
  }
  function Companion_0() {
    this.ms_1 = '\n\t';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    this.hs_1 = beanDefinition;
  }
  protoOf(InstanceFactory).is = function (context) {
    context.js_1.er("| (+) '" + this.hs_1.toString() + "'");
    try {
      var tmp0_elvis_lhs = context.ls_1;
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.hs_1.tr_1(context.ks_1, parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_instance.ns(e);
        context.js_1.os("* Instance creation error : could not create instance for '" + this.hs_1.toString() + "': " + stack);
        throw new InstanceCreationException("Could not create instance for '" + this.hs_1.toString() + "'", e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(InstanceFactory).equals = function (other) {
    var tmp0_safe_receiver = other instanceof InstanceFactory ? other : null;
    var other_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hs_1;
    return this.hs_1.equals(other_0);
  };
  protoOf(InstanceFactory).hashCode = function () {
    return this.hs_1.hashCode();
  };
  function getValue($this) {
    var tmp0_elvis_lhs = $this.qs_1;
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
      if (!this$0.rs($context)) {
        this$0.qs_1 = this$0.is($context);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.qs_1 = null;
  }
  protoOf(SingleInstanceFactory).rs = function (context) {
    return !(this.qs_1 == null);
  };
  protoOf(SingleInstanceFactory).is = function (context) {
    var tmp;
    if (this.qs_1 == null) {
      tmp = protoOf(InstanceFactory).is.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  protoOf(SingleInstanceFactory).gs = function (context) {
    var tmp = KoinPlatformTools_instance;
    tmp.ss(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).mr = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.dr_1 = level;
  }
  protoOf(Logger).er = function (msg) {
    this.ws(Level_DEBUG_getInstance(), msg);
  };
  protoOf(Logger).us = function (msg) {
    this.ws(Level_INFO_getInstance(), msg);
  };
  protoOf(Logger).vs = function (msg) {
    this.ws(Level_WARNING_getInstance(), msg);
  };
  protoOf(Logger).os = function (msg) {
    this.ws(Level_ERROR_getInstance(), msg);
  };
  protoOf(Logger).nr = function (lvl) {
    return this.dr_1.a3(lvl) <= 0;
  };
  protoOf(Logger).ws = function (lvl, msg) {
    if (this.nr(lvl)) {
      this.mr(lvl, msg);
    }
  };
  protoOf(Logger).xs = function (lvl, msg) {
    if (this.nr(lvl)) {
      this.mr(lvl, msg());
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
    this.ys_1 = _createdAtStart;
    this.zs_1 = KoinPlatformTools_instance.et();
    var tmp = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp.at_1 = HashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.bt_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp_1.ct_1 = HashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.dt_1 = ArrayList_init_$Create$();
  }
  protoOf(Module).ft = function (instanceFactory) {
    var def = instanceFactory.hs_1;
    var mapping = indexKey(def.rr_1, def.sr_1, def.qr_1);
    this.gt(mapping, instanceFactory);
  };
  protoOf(Module).ht = function (instanceFactory) {
    var def = instanceFactory.hs_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = def.vr_1.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.koin.core.module.Module.indexSecondaryTypes.<anonymous>' call
      var mapping = indexKey(element, def.sr_1, def.qr_1);
      this.gt(mapping, instanceFactory);
    }
  };
  protoOf(Module).it = function (instanceFactory) {
    this.at_1.e(instanceFactory);
  };
  protoOf(Module).gt = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.bt_1.k2(mapping, factory);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Module))
      THROW_CCE();
    if (!(this.zs_1 === other.zs_1))
      return false;
    return true;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.zs_1);
  };
  function flatten(modules) {
    // Inline function 'kotlin.collections.linkedSetOf' call
    var flatten = LinkedHashSet_init_$Create$();
    var stack = ArrayDeque_init_$Create$(asReversed(modules));
    $l$loop_0: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!stack.j()) {
        break $l$loop_0;
      }
      var current = stack.tg();
      if (!flatten.e(current)) {
        continue $l$loop_0;
      }
      var tmp0_iterator = current.dt_1.m();
      while (tmp0_iterator.n()) {
        var module_0 = tmp0_iterator.o();
        if (!flatten.v(module_0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          stack.e(module_0);
        }
      }
    }
    return flatten;
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.hs_1.toString() + ' at ' + mapping);
  }
  function onOptions(_this__u8e3s4, options) {
    options = options === VOID ? null : options;
    if (!(options == null)) {
      // Inline function 'org.koin.core.module.dsl.withOptions' call
      var def = _this__u8e3s4.cs_1.hs_1;
      var primary = def.sr_1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      options(def);
      if (!equals(def.sr_1, primary)) {
        _this__u8e3s4.bs_1.ft(_this__u8e3s4.cs_1);
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!def.vr_1.j()) {
        _this__u8e3s4.bs_1.ht(_this__u8e3s4.cs_1);
      }
      var tmp;
      if (def.xr_1) {
        var tmp_0 = _this__u8e3s4.cs_1;
        tmp = tmp_0 instanceof SingleInstanceFactory;
      } else {
        tmp = false;
      }
      if (tmp) {
        _this__u8e3s4.bs_1.it(_this__u8e3s4.cs_1);
      }
    }
    return _this__u8e3s4;
  }
  function getFirstValue($this, clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = $this.jt_1.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
        if (clazz.qb(element)) {
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
    var this_0 = $this.jt_1.u($this.lt_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
    if (clazz.qb(this_0)) {
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
      $this.mt();
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
    this.jt_1 = _values;
    this.kt_1 = useIndexedValues;
    this.lt_1 = 0;
  }
  protoOf(ParametersHolder).nt = function (clazz) {
    var tmp;
    if (this.jt_1.j()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.kt_1) {
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
  protoOf(ParametersHolder).mt = function () {
    if (this.lt_1 < get_lastIndex(this.jt_1)) {
      this.lt_1 = this.lt_1 + 1 | 0;
    }
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toString_0(toList(this.jt_1));
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.ot_1 = value;
  }
  protoOf(StringQualifier).c1 = function () {
    return this.ot_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.ot_1;
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.ot_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.ot_1 === tmp0_other_with_cast.ot_1))
      return false;
    return true;
  };
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = module_0.at_1.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.vq_1;
      var key = element.hashCode();
      this_0.k2(key, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = module_0.bt_1.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var mapping = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.c1();
      $this.pt(allowOverride, mapping, factory);
    }
  }
  function createEagerInstances($this, instances) {
    var defaultContext = new InstanceContext($this.tq_1.rq_1, $this.tq_1.nq_1.ar_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = instances.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
      element.gs(defaultContext);
    }
  }
  function InstanceRegistry(_koin) {
    this.tq_1 = _koin;
    this.uq_1 = KoinPlatformTools_instance.qt();
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.vq_1 = HashMap_init_$Create$();
  }
  protoOf(InstanceRegistry).wq = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).gr = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.vq_1.p2();
    var tmp$ret$0 = copyToArray(this_0);
    var instances = arrayListOf(tmp$ret$0.slice());
    this.vq_1.n2();
    createEagerInstances(this, instances);
  };
  protoOf(InstanceRegistry).rt = function (allowOverride, mapping, factory, logWarning) {
    if (this.uq_1.q2(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning) {
          this.tq_1.rq_1.vs("(+) override index '" + mapping + "' -> '" + factory.hs_1.toString() + "'");
        }
      }
    }
    this.tq_1.rq_1.er("(+) index '" + mapping + "' -> '" + factory.hs_1.toString() + "'");
    // Inline function 'kotlin.collections.set' call
    this.uq_1.k2(mapping, factory);
  };
  protoOf(InstanceRegistry).pt = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.rt(allowOverride, mapping, factory, logWarning);
      tmp = Unit_instance;
    } else {
      tmp = $super.rt.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).st = function (clazz, qualifier, scopeQualifier) {
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return this.uq_1.s2(indexKey_0);
  };
  protoOf(InstanceRegistry).tt = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.st(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gs(instanceContext);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(InstanceRegistry).lr = function () {
    return this.uq_1.p();
  };
  function PropertyRegistry(_koin) {
    this.ut_1 = _koin;
    this.vt_1 = KoinPlatformTools_instance.qt();
  }
  function loadModule_0($this, module_0) {
    $this.yq_1.t(module_0.ct_1);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.yr_1 = '_root_';
    this.zr_1 = _q('_root_');
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_1();
    this.xq_1 = _koin;
    this.yq_1 = HashSet_init_$Create$();
    this.zq_1 = KoinPlatformTools_instance.qt();
    this.ar_1 = new Scope(Companion_getInstance_1().zr_1, '_root_', true, this.xq_1);
    this.yq_1.e(this.ar_1.wt_1);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.zq_1;
    var key = this.ar_1.xt_1;
    var value = this.ar_1;
    this_0.k2(key, value);
  }
  protoOf(ScopeRegistry).br = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this.eu_1) {
      throw new ClosedScopeException("Scope '" + $this.xt_1 + "' is closed");
    }
    var parameters = parameterDef == null ? null : parameterDef();
    var localDeque = null;
    if (!(parameters == null)) {
      var tmp = $this.zt_1.rq_1;
      var tmp_0 = Level_DEBUG_getInstance();
      tmp.xs(tmp_0, Scope$resolveInstance$lambda(parameters));
      var tmp1_elvis_lhs = $this.du_1.dq();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = ArrayDeque_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call
        $this.du_1.cq(this_0);
        tmp_1 = this_0;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      localDeque = tmp_1;
      localDeque.pg(parameters);
    }
    var instanceContext = new InstanceContext($this.zt_1.rq_1, $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(localDeque == null)) {
      $this.zt_1.rq_1.er('| << parameters');
      localDeque.sg();
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this.zt_1.oq_1.tt(qualifier, clazz, $this.wt_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      $this.zt_1.rq_1.er("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look in injected parameters");
      var tmp0_safe_receiver = $this.du_1.dq();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mg();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nt(clazz);
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
      if (!$this.yt_1) {
        $this.zt_1.rq_1.er("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look at scope source");
        var tmp0_safe_receiver_0 = $this.bu_1;
        var tmp_2;
        if (tmp0_safe_receiver_0 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>.<anonymous>' call
          var tmp_3;
          if (clazz.qb(tmp0_safe_receiver_0) && qualifier == null) {
            var tmp_4 = $this.bu_1;
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
      $this.zt_1.rq_1.er("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look in other scopes");
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
        $this.du_1.t4();
        $this.zt_1.rq_1.er('|- << parameters');
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
    var tmp0_iterator = $this.au_1.m();
    $l$loop: while (tmp0_iterator.n()) {
      var scope = tmp0_iterator.o();
      instance = scope.fu(clazz, qualifier, parameters);
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
    this.wt_1 = scopeQualifier;
    this.xt_1 = id;
    this.yt_1 = isRoot;
    this.zt_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.au_1 = ArrayList_init_$Create$();
    this.bu_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_0.cu_1 = ArrayList_init_$Create$();
    this.du_1 = new ThreadLocalRef();
    this.eu_1 = false;
  }
  protoOf(Scope).fu = function (clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.gu(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this.zt_1.rq_1.er('* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoBeanDefFoundException) {
          var e_0 = $p;
          this.zt_1.rq_1.er("* No instance found for type '" + getFullName(clazz) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).gu = function (clazz, qualifier, parameters) {
    var tmp;
    if (this.zt_1.rq_1.nr(Level_DEBUG_getInstance())) {
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
      var scopeId = this.yt_1 ? '' : "- scope:'" + this.xt_1;
      this.zt_1.rq_1.mr(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + ' ' + scopeId + '...');
      var start = KoinPlatformTimeTools_instance.fr();
      var instance = resolveInstance(this, qualifier, clazz, parameters);
      var stop = KoinPlatformTimeTools_instance.fr();
      // Inline function 'kotlin.Long.div' call
      var duration = stop.g3(start).w3() / 1000000.0;
      this.zt_1.rq_1.mr(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      tmp = instance;
    } else {
      tmp = resolveInstance(this, qualifier, clazz, parameters);
    }
    return tmp;
  };
  protoOf(Scope).toString = function () {
    return "['" + this.xt_1 + "']";
  };
  function Companion_2() {
    this.hu_1 = 1000000.0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function bind(_this__u8e3s4, clazz) {
    _this__u8e3s4.cs_1.hs_1.vr_1 = plus(_this__u8e3s4.cs_1.hs_1.vr_1, clazz);
    var mapping = indexKey(clazz, _this__u8e3s4.cs_1.hs_1.sr_1, _this__u8e3s4.cs_1.hs_1.qr_1);
    _this__u8e3s4.bs_1.gt(mapping, _this__u8e3s4.cs_1);
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
    var tmp0_elvis_lhs = get_classNames().s2(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_instance.iu(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    get_classNames().k2(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (!properties_initialized_KClassExt_kt_dizwhw) {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_instance.qt();
    }
  }
  function register($this, koinApplication) {
    if (!($this.ju_1 == null)) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }
    $this.ju_1 = koinApplication.hr_1;
  }
  function GlobalContext() {
    this.ju_1 = null;
  }
  protoOf(GlobalContext).dq = function () {
    var tmp0_elvis_lhs = this.ju_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'KoinApplication has not been started';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(GlobalContext).pr = function (appDeclaration) {
    var koinApplication = Companion_instance.jr();
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
  protoOf(KoinPlatformTimeTools).fr = function () {
    return _Duration___get_inWholeNanoseconds__impl__r5x4mr(ValueTimeMark__elapsedNow_impl_eonqvs(Monotonic_instance.hf()));
  };
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
  }
  protoOf(KoinPlatformTools).ns = function (e) {
    return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
  };
  protoOf(KoinPlatformTools).iu = function (kClass) {
    var tmp0_elvis_lhs = kClass.pb();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).et = function () {
    return getNumberHashCode(Default_getInstance().qk()).toString();
  };
  protoOf(KoinPlatformTools).or = function () {
    return GlobalContext_instance;
  };
  protoOf(KoinPlatformTools).ss = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).qt = function () {
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
  _.$_$.a = Kind_Factory_getInstance;
  _.$_$.b = Kind_Singleton_getInstance;
  _.$_$.c = Companion_getInstance_1;
  _.$_$.d = KoinPlatformTools_instance;
  _.$_$.e = startKoin;
  _.$_$.f = BeanDefinition;
  _.$_$.g = KoinDefinition;
  _.$_$.h = FactoryInstanceFactory;
  _.$_$.i = SingleInstanceFactory;
  _.$_$.j = onOptions;
  _.$_$.k = emptyParametersHolder;
  _.$_$.l = bind;
  _.$_$.m = module_0;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-core-koin-core.js.map
