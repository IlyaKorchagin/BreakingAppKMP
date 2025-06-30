(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var equals = kotlin_kotlin.$_$.od;
  var hashCode = kotlin_kotlin.$_$.xd;
  var toString = kotlin_kotlin.$_$.jf;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var KtMap = kotlin_kotlin.$_$.y6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s2;
  var AutoCloseable = kotlin_kotlin.$_$.vj;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var IllegalStateException = kotlin_kotlin.$_$.fk;
  var NotImplementedError = kotlin_kotlin.$_$.jk;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.a3;
  var Exception = kotlin_kotlin.$_$.dk;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i3;
  var copyToArray = kotlin_kotlin.$_$.k8;
  //endregion
  //region block: pre-declaration
  function get_defaultViewModelCreationExtras() {
    return Empty_getInstance();
  }
  initMetadataForInterface(HasDefaultViewModelProviderFactory, 'HasDefaultViewModelProviderFactory');
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  initMetadataForClass(CreationExtras, 'CreationExtras');
  initMetadataForObject(Empty, 'Empty', VOID, CreationExtras);
  initMetadataForCompanion(Companion);
  initMetadataForClass(MutableCreationExtras, 'MutableCreationExtras', MutableCreationExtras_init_$Create$, CreationExtras);
  initMetadataForClass(InitializerViewModelFactoryBuilder, 'InitializerViewModelFactoryBuilder', InitializerViewModelFactoryBuilder);
  initMetadataForClass(CloseableCoroutineScope, 'CloseableCoroutineScope', VOID, VOID, [AutoCloseable, CoroutineScope]);
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModelProviderImpl, 'ViewModelProviderImpl');
  initMetadataForObject(ViewModelProviders, 'ViewModelProviders');
  initMetadataForClass(ViewModel, 'ViewModel');
  initMetadataForClass(_no_name_provided__qut3iv);
  function create(modelClass, extras) {
    return ViewModelProviders_instance.g4g();
  }
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForClass(OnRequeryFactory, 'OnRequeryFactory');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ViewModelProvider, 'ViewModelProvider');
  initMetadataForClass(ViewModelInitializer, 'ViewModelInitializer');
  initMetadataForClass(InitializerViewModelFactory, 'InitializerViewModelFactory', VOID, VOID, [Factory]);
  initMetadataForObject(DefaultViewModelProviderFactory, 'DefaultViewModelProviderFactory', VOID, VOID, [Factory]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function HasDefaultViewModelProviderFactory() {
  }
  function get_VIEW_MODEL_SCOPE_LOCK() {
    _init_properties_ViewModel_kt__8pkmem();
    return VIEW_MODEL_SCOPE_LOCK;
  }
  var VIEW_MODEL_SCOPE_LOCK;
  function get_viewModelScope(_this__u8e3s4) {
    _init_properties_ViewModel_kt__8pkmem();
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    get_VIEW_MODEL_SCOPE_LOCK();
    // Inline function 'androidx.lifecycle.<get-viewModelScope>.<anonymous>' call
    var tmp0_elvis_lhs = _this__u8e3s4.d4f('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createViewModelScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.<get-viewModelScope>.<anonymous>.<anonymous>' call
      _this__u8e3s4.e4f('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY', this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_ViewModel_kt_igete4;
  function _init_properties_ViewModel_kt__8pkmem() {
    if (!properties_initialized_ViewModel_kt_igete4) {
      properties_initialized_ViewModel_kt_igete4 = true;
      VIEW_MODEL_SCOPE_LOCK = new SynchronizedObject();
    }
  }
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f4f_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).g4f = function (key, viewModel) {
    var oldViewModel = this.f4f_1.k2(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.h4f();
    }
  };
  protoOf(ViewModelStore).i4f = function (key) {
    return this.f4f_1.s2(key);
  };
  protoOf(ViewModelStore).n2 = function () {
    var tmp0_iterator = this.f4f_1.p2().m();
    while (tmp0_iterator.n()) {
      var vm = tmp0_iterator.o();
      vm.h4f();
    }
    this.f4f_1.n2();
  };
  function Empty() {
    Empty_instance = this;
    CreationExtras.call(this);
  }
  protoOf(Empty).k4f = function (key) {
    return null;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function CreationExtras() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.l4f_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CreationExtras).equals = function (other) {
    var tmp;
    if (other instanceof CreationExtras) {
      tmp = equals(this.l4f_1, other.l4f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CreationExtras).hashCode = function () {
    return hashCode(this.l4f_1);
  };
  protoOf(CreationExtras).toString = function () {
    return 'CreationExtras(extras=' + toString(this.l4f_1) + ')';
  };
  function MutableCreationExtras_init_$Init$(initialExtras, $this) {
    initialExtras = initialExtras === VOID ? Empty_getInstance() : initialExtras;
    MutableCreationExtras.call($this, initialExtras.l4f_1);
    return $this;
  }
  function MutableCreationExtras_init_$Create$(initialExtras) {
    return MutableCreationExtras_init_$Init$(initialExtras, objectCreate(protoOf(MutableCreationExtras)));
  }
  function MutableCreationExtras(initialExtras) {
    CreationExtras.call(this);
    // Inline function 'kotlin.collections.plusAssign' call
    this.l4f_1.m2(initialExtras);
  }
  protoOf(MutableCreationExtras).n4f = function (key, t) {
    // Inline function 'kotlin.collections.set' call
    this.l4f_1.k2(key, t);
  };
  protoOf(MutableCreationExtras).k4f = function (key) {
    var tmp = this.l4f_1.s2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function InitializerViewModelFactoryBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o4f_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(InitializerViewModelFactoryBuilder).p4f = function (clazz, initializer) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.o4f_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q2(clazz)) {
      // Inline function 'androidx.lifecycle.viewmodel.InitializerViewModelFactoryBuilder.addInitializer.<anonymous>' call
      var message = 'A `initializer` with the same `clazz` has already been added: ' + get_canonicalName(clazz) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.o4f_1;
    var value = new ViewModelInitializer(clazz, initializer);
    this_1.k2(clazz, value);
  };
  protoOf(InitializerViewModelFactoryBuilder).a2u = function () {
    return ViewModelProviders_instance.r4f(this.o4f_1.p2());
  };
  function CloseableCoroutineScope(coroutineContext) {
    this.s4f_1 = coroutineContext;
  }
  protoOf(CloseableCoroutineScope).h14 = function () {
    return this.s4f_1;
  };
  protoOf(CloseableCoroutineScope).q4 = function () {
    return cancel(this.s4f_1);
  };
  function createViewModelScope() {
    var tmp;
    try {
      tmp = Dispatchers_getInstance().e1h().y1g();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof NotImplementedError) {
        var _ = $p;
        tmp_0 = EmptyCoroutineContext_getInstance();
      } else {
        if ($p instanceof IllegalStateException) {
          var __0 = $p;
          tmp_0 = EmptyCoroutineContext_getInstance();
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var dispatcher = tmp;
    return new CloseableCoroutineScope(dispatcher.hj(SupervisorJob()));
  }
  function ViewModelImpl_init_$Init$($this) {
    ViewModelImpl.call($this);
    return $this;
  }
  function ViewModelImpl_init_$Create$() {
    return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
  }
  function closeWithRuntimeException($this, closeable) {
    try {
      if (closeable == null)
        null;
      else {
        closeable.q4();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
  }
  protoOf(ViewModelImpl).n2 = function () {
    if (this.w4f_1)
      return Unit_instance;
    this.w4f_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.t4f_1;
    var tmp0_iterator = this.u4f_1.p2().m();
    while (tmp0_iterator.n()) {
      var closeable = tmp0_iterator.o();
      closeWithRuntimeException(this, closeable);
    }
    var tmp1_iterator = this.v4f_1.m();
    while (tmp1_iterator.n()) {
      var closeable_0 = tmp1_iterator.o();
      closeWithRuntimeException(this, closeable_0);
    }
    this.v4f_1.n2();
  };
  protoOf(ViewModelImpl).e4f = function (key, closeable) {
    if (this.w4f_1) {
      closeWithRuntimeException(this, closeable);
      return Unit_instance;
    }
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.t4f_1;
    // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelImpl.addCloseable.<anonymous>' call
    var oldCloseable = this.u4f_1.k2(key, closeable);
    closeWithRuntimeException(this, oldCloseable);
  };
  protoOf(ViewModelImpl).d4f = function (key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.t4f_1;
    // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelImpl.getCloseable.<anonymous>' call
    var tmp = this.u4f_1.s2(key);
    return (tmp == null ? true : isInterface(tmp, AutoCloseable)) ? tmp : THROW_CCE();
  };
  function ViewModelImpl() {
    this.t4f_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u4f_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.v4f_1 = LinkedHashSet_init_$Create$();
    this.w4f_1 = false;
  }
  function ViewModelProviderImpl(store, factory, defaultExtras) {
    this.x4f_1 = store;
    this.y4f_1 = factory;
    this.z4f_1 = defaultExtras;
    this.a4g_1 = new SynchronizedObject();
  }
  protoOf(ViewModelProviderImpl).b4g = function (modelClass, key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.a4g_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>' call
      var viewModel = this.x4f_1.i4f(key);
      if (modelClass.qb(viewModel)) {
        var tmp = this.y4f_1;
        if (tmp instanceof OnRequeryFactory) {
          this.y4f_1.c4g(ensureNotNull(viewModel));
        }
        tmp$ret$0 = viewModel instanceof ViewModel ? viewModel : THROW_CCE();
        break $l$block;
      }
      var modelExtras = MutableCreationExtras_init_$Create$(this.z4f_1);
      modelExtras.n4f(Companion_getInstance_0().d4g_1, key);
      // Inline function 'kotlin.also' call
      var this_0 = createViewModel(this.y4f_1, modelClass, modelExtras);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>.<anonymous>' call
      this.x4f_1.g4f(key, this_0);
      tmp$ret$0 = this_0;
    }
    return tmp$ret$0;
  };
  protoOf(ViewModelProviderImpl).e4g = function (modelClass, key, $super) {
    key = key === VOID ? ViewModelProviders_instance.f4g(modelClass) : key;
    return $super === VOID ? this.b4g(modelClass, key) : $super.b4g.call(this, modelClass, key);
  };
  function ViewModelProviders() {
    this.q4f_1 = 'androidx.lifecycle.ViewModelProvider.DefaultKey';
  }
  protoOf(ViewModelProviders).f4g = function (modelClass) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = get_canonicalName(modelClass);
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.getDefaultKey.<anonymous>' call
        var message = 'Local and anonymous classes can not be ViewModels';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var canonicalName = tmp$ret$1;
    return 'androidx.lifecycle.ViewModelProvider.DefaultKey:' + canonicalName;
  };
  protoOf(ViewModelProviders).g4g = function () {
    throw UnsupportedOperationException_init_$Create$('`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.');
  };
  protoOf(ViewModelProviders).r4f = function (initializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(initializers);
    return new InitializerViewModelFactory(tmp$ret$0.slice());
  };
  protoOf(ViewModelProviders).h4g = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.a4f();
    } else {
      tmp = DefaultViewModelProviderFactory_instance;
    }
    return tmp;
  };
  protoOf(ViewModelProviders).i4g = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.b4f();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  };
  protoOf(ViewModelProviders).j4g = function (modelClass, extras, initializers) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = initializers.length;
      while (inductionVariable < last) {
        var element = initializers[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        if (element.k4g_1.equals(modelClass)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l4g_1;
    var tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(extras);
    var viewModel = (tmp == null ? true : tmp instanceof ViewModel) ? tmp : THROW_CCE();
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (viewModel == null) {
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        var message = 'No initializer set for given class ' + get_canonicalName(modelClass);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$3 = viewModel;
        break $l$block_0;
      }
    }
    return tmp$ret$3;
  };
  var ViewModelProviders_instance;
  function ViewModelProviders_getInstance() {
    return ViewModelProviders_instance;
  }
  function ViewModel_init_$Init$($this) {
    ViewModel.call($this);
    $this.c4f_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  protoOf(ViewModel).m4g = function () {
  };
  protoOf(ViewModel).h4f = function () {
    this.c4f_1.n2();
    this.m4g();
  };
  protoOf(ViewModel).e4f = function (key, closeable) {
    this.c4f_1.e4f(key, closeable);
  };
  protoOf(ViewModel).d4f = function (key) {
    return this.c4f_1.d4f(key);
  };
  function ViewModel() {
  }
  function _no_name_provided__qut3iv() {
  }
  function Factory() {
  }
  function OnRequeryFactory() {
  }
  protoOf(OnRequeryFactory).c4g = function (viewModel) {
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
    tmp.d4g_1 = new _no_name_provided__qut3iv();
  }
  protoOf(Companion_0).o4g = function (owner, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(owner.p4g(), factory, extras));
  };
  protoOf(Companion_0).q4g = function (owner, factory, extras, $super) {
    factory = factory === VOID ? ViewModelProviders_instance.h4g(owner) : factory;
    extras = extras === VOID ? ViewModelProviders_instance.i4g(owner) : extras;
    return $super === VOID ? this.o4g(owner, factory, extras) : $super.o4g.call(this, owner, factory, extras);
  };
  protoOf(Companion_0).r4g = function (store, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(store, factory, extras));
  };
  protoOf(Companion_0).s4g = function (store, factory, extras, $super) {
    factory = factory === VOID ? DefaultViewModelProviderFactory_instance : factory;
    extras = extras === VOID ? Empty_getInstance() : extras;
    return $super === VOID ? this.r4g(store, factory, extras) : $super.r4g.call(this, store, factory, extras);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ViewModelProvider(impl) {
    Companion_getInstance_0();
    this.t4g_1 = impl;
  }
  protoOf(ViewModelProvider).u4g = function (modelClass) {
    return this.t4g_1.e4g(modelClass);
  };
  protoOf(ViewModelProvider).v4g = function (key, modelClass) {
    return this.t4g_1.b4g(modelClass, key);
  };
  function ViewModelInitializer(clazz, initializer) {
    this.k4g_1 = clazz;
    this.l4g_1 = initializer;
  }
  function InitializerViewModelFactory(initializers) {
    this.w4g_1 = initializers;
  }
  protoOf(InitializerViewModelFactory).n4g = function (modelClass, extras) {
    return ViewModelProviders_instance.j4g(modelClass, extras, this.w4g_1.slice());
  };
  function DefaultViewModelProviderFactory() {
  }
  protoOf(DefaultViewModelProviderFactory).n4g = function (modelClass, extras) {
    return ViewModelProviders_instance.g4g();
  };
  var DefaultViewModelProviderFactory_instance;
  function DefaultViewModelProviderFactory_getInstance() {
    return DefaultViewModelProviderFactory_instance;
  }
  function createViewModel(factory, modelClass, extras) {
    return factory.n4g(modelClass, extras);
  }
  function SynchronizedObject() {
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.pb();
  }
  //region block: init
  Companion_instance = new Companion();
  ViewModelProviders_instance = new ViewModelProviders();
  DefaultViewModelProviderFactory_instance = new DefaultViewModelProviderFactory();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InitializerViewModelFactoryBuilder;
  _.$_$.b = HasDefaultViewModelProviderFactory;
  _.$_$.c = create;
  _.$_$.d = Factory;
  _.$_$.e = ViewModelStore;
  _.$_$.f = ViewModel;
  _.$_$.g = get_viewModelScope;
  _.$_$.h = MutableCreationExtras_init_$Create$;
  _.$_$.i = ViewModel_init_$Init$;
  _.$_$.j = Companion_instance;
  _.$_$.k = Empty_getInstance;
  _.$_$.l = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js.map
