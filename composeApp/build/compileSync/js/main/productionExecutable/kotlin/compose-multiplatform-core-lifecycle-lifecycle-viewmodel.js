(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var equals = kotlin_kotlin.$_$.qc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var toString = kotlin_kotlin.$_$.le;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var KtMap = kotlin_kotlin.$_$.o6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var Exception = kotlin_kotlin.$_$.si;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var copyToArray = kotlin_kotlin.$_$.y7;
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
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModelProviderImpl, 'ViewModelProviderImpl');
  initMetadataForObject(ViewModelProviders, 'ViewModelProviders');
  initMetadataForClass(ViewModel, 'ViewModel');
  initMetadataForClass(_no_name_provided__qut3iv);
  function create(modelClass, extras) {
    return ViewModelProviders_instance.s49();
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
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r48_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).s48 = function (key, viewModel) {
    var oldViewModel = this.r48_1.f2(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.u48();
    }
  };
  protoOf(ViewModelStore).v48 = function (key) {
    return this.r48_1.n2(key);
  };
  protoOf(ViewModelStore).i2 = function () {
    var tmp0_iterator = this.r48_1.k2().g();
    while (tmp0_iterator.h()) {
      var vm = tmp0_iterator.i();
      vm.u48();
    }
    this.r48_1.i2();
  };
  function Empty() {
    Empty_instance = this;
    CreationExtras.call(this);
  }
  protoOf(Empty).x48 = function (key) {
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
    tmp.y48_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CreationExtras).equals = function (other) {
    var tmp;
    if (other instanceof CreationExtras) {
      tmp = equals(this.y48_1, other.y48_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CreationExtras).hashCode = function () {
    return hashCode(this.y48_1);
  };
  protoOf(CreationExtras).toString = function () {
    return 'CreationExtras(extras=' + toString(this.y48_1) + ')';
  };
  function MutableCreationExtras_init_$Init$(initialExtras, $this) {
    initialExtras = initialExtras === VOID ? Empty_getInstance() : initialExtras;
    MutableCreationExtras.call($this, initialExtras.y48_1);
    return $this;
  }
  function MutableCreationExtras_init_$Create$(initialExtras) {
    return MutableCreationExtras_init_$Init$(initialExtras, objectCreate(protoOf(MutableCreationExtras)));
  }
  function MutableCreationExtras(initialExtras) {
    CreationExtras.call(this);
    // Inline function 'kotlin.collections.plusAssign' call
    this.y48_1.h2(initialExtras);
  }
  protoOf(MutableCreationExtras).a49 = function (key, t) {
    // Inline function 'kotlin.collections.set' call
    this.y48_1.f2(key, t);
  };
  protoOf(MutableCreationExtras).x48 = function (key) {
    var tmp = this.y48_1.n2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function InitializerViewModelFactoryBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b49_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(InitializerViewModelFactoryBuilder).c49 = function (clazz, initializer) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.b49_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(clazz)) {
      // Inline function 'androidx.lifecycle.viewmodel.InitializerViewModelFactoryBuilder.addInitializer.<anonymous>' call
      var message = 'A `initializer` with the same `clazz` has already been added: ' + get_canonicalName(clazz) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.b49_1;
    var value = new ViewModelInitializer(clazz, initializer);
    this_1.f2(clazz, value);
  };
  protoOf(InitializerViewModelFactoryBuilder).c2o = function () {
    return ViewModelProviders_instance.e49(this.b49_1.k2());
  };
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
        closeable.l4();
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
  protoOf(ViewModelImpl).i2 = function () {
    if (this.i49_1)
      return Unit_instance;
    this.i49_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.f49_1;
    var tmp0_iterator = this.g49_1.k2().g();
    while (tmp0_iterator.h()) {
      var closeable = tmp0_iterator.i();
      closeWithRuntimeException(this, closeable);
    }
    var tmp1_iterator = this.h49_1.g();
    while (tmp1_iterator.h()) {
      var closeable_0 = tmp1_iterator.i();
      closeWithRuntimeException(this, closeable_0);
    }
    this.h49_1.i2();
  };
  function ViewModelImpl() {
    this.f49_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g49_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.h49_1 = LinkedHashSet_init_$Create$();
    this.i49_1 = false;
  }
  function ViewModelProviderImpl(store, factory, defaultExtras) {
    this.j49_1 = store;
    this.k49_1 = factory;
    this.l49_1 = defaultExtras;
    this.m49_1 = new SynchronizedObject();
  }
  protoOf(ViewModelProviderImpl).n49 = function (modelClass, key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.m49_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>' call
      var viewModel = this.j49_1.v48(key);
      if (modelClass.lb(viewModel)) {
        var tmp = this.k49_1;
        if (tmp instanceof OnRequeryFactory) {
          this.k49_1.o49(ensureNotNull(viewModel));
        }
        tmp$ret$0 = viewModel instanceof ViewModel ? viewModel : THROW_CCE();
        break $l$block;
      }
      var modelExtras = MutableCreationExtras_init_$Create$(this.l49_1);
      modelExtras.a49(Companion_getInstance_0().p49_1, key);
      // Inline function 'kotlin.also' call
      var this_0 = createViewModel(this.k49_1, modelClass, modelExtras);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>.<anonymous>' call
      this.j49_1.s48(key, this_0);
      tmp$ret$0 = this_0;
    }
    return tmp$ret$0;
  };
  protoOf(ViewModelProviderImpl).q49 = function (modelClass, key, $super) {
    key = key === VOID ? ViewModelProviders_instance.r49(modelClass) : key;
    return $super === VOID ? this.n49(modelClass, key) : $super.n49.call(this, modelClass, key);
  };
  function ViewModelProviders() {
    this.d49_1 = 'androidx.lifecycle.ViewModelProvider.DefaultKey';
  }
  protoOf(ViewModelProviders).r49 = function (modelClass) {
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
  protoOf(ViewModelProviders).s49 = function () {
    throw UnsupportedOperationException_init_$Create$('`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.');
  };
  protoOf(ViewModelProviders).e49 = function (initializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(initializers);
    return new InitializerViewModelFactory(tmp$ret$0.slice());
  };
  protoOf(ViewModelProviders).t49 = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.p48();
    } else {
      tmp = DefaultViewModelProviderFactory_instance;
    }
    return tmp;
  };
  protoOf(ViewModelProviders).u49 = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.q48();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  };
  protoOf(ViewModelProviders).v49 = function (modelClass, extras, initializers) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = initializers.length;
      while (inductionVariable < last) {
        var element = initializers[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        if (element.w49_1.equals(modelClass)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x49_1;
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
    $this.t48_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  protoOf(ViewModel).y49 = function () {
  };
  protoOf(ViewModel).u48 = function () {
    this.t48_1.i2();
    this.y49();
  };
  function ViewModel() {
  }
  function _no_name_provided__qut3iv() {
  }
  function Factory() {
  }
  function OnRequeryFactory() {
  }
  protoOf(OnRequeryFactory).o49 = function (viewModel) {
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
    tmp.p49_1 = new _no_name_provided__qut3iv();
  }
  protoOf(Companion_0).a4a = function (owner, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(owner.b4a(), factory, extras));
  };
  protoOf(Companion_0).c4a = function (owner, factory, extras, $super) {
    factory = factory === VOID ? ViewModelProviders_instance.t49(owner) : factory;
    extras = extras === VOID ? ViewModelProviders_instance.u49(owner) : extras;
    return $super === VOID ? this.a4a(owner, factory, extras) : $super.a4a.call(this, owner, factory, extras);
  };
  protoOf(Companion_0).d4a = function (store, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(store, factory, extras));
  };
  protoOf(Companion_0).e4a = function (store, factory, extras, $super) {
    factory = factory === VOID ? DefaultViewModelProviderFactory_instance : factory;
    extras = extras === VOID ? Empty_getInstance() : extras;
    return $super === VOID ? this.d4a(store, factory, extras) : $super.d4a.call(this, store, factory, extras);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ViewModelProvider(impl) {
    Companion_getInstance_0();
    this.f4a_1 = impl;
  }
  protoOf(ViewModelProvider).g4a = function (modelClass) {
    return this.f4a_1.q49(modelClass);
  };
  protoOf(ViewModelProvider).h4a = function (key, modelClass) {
    return this.f4a_1.n49(modelClass, key);
  };
  function ViewModelInitializer(clazz, initializer) {
    this.w49_1 = clazz;
    this.x49_1 = initializer;
  }
  function InitializerViewModelFactory(initializers) {
    this.i4a_1 = initializers;
  }
  protoOf(InitializerViewModelFactory).z49 = function (modelClass, extras) {
    return ViewModelProviders_instance.v49(modelClass, extras, this.i4a_1.slice());
  };
  function DefaultViewModelProviderFactory() {
  }
  protoOf(DefaultViewModelProviderFactory).z49 = function (modelClass, extras) {
    return ViewModelProviders_instance.s49();
  };
  var DefaultViewModelProviderFactory_instance;
  function DefaultViewModelProviderFactory_getInstance() {
    return DefaultViewModelProviderFactory_instance;
  }
  function createViewModel(factory, modelClass, extras) {
    return factory.z49(modelClass, extras);
  }
  function SynchronizedObject() {
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.kb();
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
  _.$_$.g = MutableCreationExtras_init_$Create$;
  _.$_$.h = ViewModel_init_$Init$;
  _.$_$.i = Companion_instance;
  _.$_$.j = Empty_getInstance;
  _.$_$.k = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js.map
