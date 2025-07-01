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
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForInterface = kotlin_kotlin.$_$.gh;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dh;
  var equals = kotlin_kotlin.$_$.sg;
  var hashCode = kotlin_kotlin.$_$.bh;
  var toString = kotlin_kotlin.$_$.oi;
  var objectCreate = kotlin_kotlin.$_$.ji;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var KtMap = kotlin_kotlin.$_$.p7;
  var isInterface = kotlin_kotlin.$_$.sh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var Annotation = kotlin_kotlin.$_$.rn;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f3;
  var AutoCloseable = kotlin_kotlin.$_$.tn;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.w5;
  var IllegalStateException = kotlin_kotlin.$_$.do;
  var NotImplementedError = kotlin_kotlin.$_$.ho;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b3;
  var addAll = kotlin_kotlin.$_$.d8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.f3;
  var Exception = kotlin_kotlin.$_$.bo;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.i1;
  var ensureNotNull = kotlin_kotlin.$_$.jp;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n3;
  var copyToArray = kotlin_kotlin.$_$.aa;
  //endregion
  //region block: pre-declaration
  function get_defaultViewModelCreationExtras() {
    return Empty_getInstance();
  }
  initMetadataForInterface(HasDefaultViewModelProviderFactory, 'HasDefaultViewModelProviderFactory');
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  initMetadataForInterface(ViewModelStoreOwner, 'ViewModelStoreOwner');
  initMetadataForInterface(Key, 'Key');
  initMetadataForClass(CreationExtras, 'CreationExtras');
  initMetadataForObject(Empty, 'Empty', VOID, CreationExtras);
  initMetadataForCompanion(Companion);
  initMetadataForClass(MutableCreationExtras, 'MutableCreationExtras', MutableCreationExtras_init_$Create$, CreationExtras);
  initMetadataForClass(InitializerViewModelFactoryBuilder, 'InitializerViewModelFactoryBuilder', InitializerViewModelFactoryBuilder);
  initMetadataForClass(ViewModelFactoryDsl, 'ViewModelFactoryDsl', VOID, VOID, [Annotation]);
  initMetadataForClass(CloseableCoroutineScope, 'CloseableCoroutineScope', VOID, VOID, [AutoCloseable, CoroutineScope]);
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModelProviderImpl, 'ViewModelProviderImpl');
  initMetadataForObject(ViewModelProviders, 'ViewModelProviders');
  initMetadataForClass(ViewModel, 'ViewModel');
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Key]);
  function create(modelClass, extras) {
    return ViewModelProviders_getInstance().unsupportedCreateViewModel_8nxknc_k$();
  }
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForClass(OnRequeryFactory, 'OnRequeryFactory', OnRequeryFactory);
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
    var tmp0_elvis_lhs = _this__u8e3s4.getCloseable_7djixj_k$('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createViewModelScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.<get-viewModelScope>.<anonymous>.<anonymous>' call
      _this__u8e3s4.addCloseable_9zbqrc_k$('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY', this_0);
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
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.map_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).put_abao7a_k$ = function (key, viewModel) {
    var oldViewModel = this.map_1.put_4fpzoq_k$(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.clear_nvby1k_k$();
    }
  };
  protoOf(ViewModelStore).get_6bo4tg_k$ = function (key) {
    return this.map_1.get_wei43m_k$(key);
  };
  protoOf(ViewModelStore).keys_1yhh0_k$ = function () {
    return HashSet_init_$Create$(this.map_1.get_keys_wop4xp_k$());
  };
  protoOf(ViewModelStore).clear_j9egeb_k$ = function () {
    var tmp0_iterator = this.map_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var vm = tmp0_iterator.next_20eer_k$();
      vm.clear_nvby1k_k$();
    }
    this.map_1.clear_j9egeb_k$();
  };
  function ViewModelStoreOwner() {
  }
  function Key() {
  }
  function Empty() {
    Empty_instance = this;
    CreationExtras.call(this);
  }
  protoOf(Empty).get_etdm8f_k$ = function (key) {
    return null;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CreationExtras() {
    Companion_getInstance();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.extras_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CreationExtras).get_extras_qf3o5z_k$ = function () {
    return this.extras_1;
  };
  protoOf(CreationExtras).equals = function (other) {
    var tmp;
    if (other instanceof CreationExtras) {
      tmp = equals(this.extras_1, other.extras_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CreationExtras).hashCode = function () {
    return hashCode(this.extras_1);
  };
  protoOf(CreationExtras).toString = function () {
    return 'CreationExtras(extras=' + toString(this.extras_1) + ')';
  };
  function MutableCreationExtras_init_$Init$(initialExtras, $this) {
    initialExtras = initialExtras === VOID ? Empty_getInstance() : initialExtras;
    MutableCreationExtras.call($this, initialExtras.extras_1);
    return $this;
  }
  function MutableCreationExtras_init_$Create$(initialExtras) {
    return MutableCreationExtras_init_$Init$(initialExtras, objectCreate(protoOf(MutableCreationExtras)));
  }
  function MutableCreationExtras(initialExtras) {
    CreationExtras.call(this);
    // Inline function 'kotlin.collections.plusAssign' call
    this.extras_1.putAll_wgg6cj_k$(initialExtras);
  }
  protoOf(MutableCreationExtras).set_ccm2re_k$ = function (key, t) {
    // Inline function 'kotlin.collections.set' call
    this.extras_1.put_4fpzoq_k$(key, t);
  };
  protoOf(MutableCreationExtras).get_etdm8f_k$ = function (key) {
    var tmp = this.extras_1.get_wei43m_k$(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function viewModelFactory(builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new InitializerViewModelFactoryBuilder();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function _get_initializers__3o9r4q($this) {
    return $this.initializers_1;
  }
  function InitializerViewModelFactoryBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.initializers_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(InitializerViewModelFactoryBuilder).addInitializer_s9nycr_k$ = function (clazz, initializer) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.initializers_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(clazz)) {
      // Inline function 'androidx.lifecycle.viewmodel.InitializerViewModelFactoryBuilder.addInitializer.<anonymous>' call
      var message = 'A `initializer` with the same `clazz` has already been added: ' + get_canonicalName(clazz) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.initializers_1;
    var value = new ViewModelInitializer(clazz, initializer);
    this_1.put_4fpzoq_k$(clazz, value);
  };
  protoOf(InitializerViewModelFactoryBuilder).build_1k0s4u_k$ = function () {
    return ViewModelProviders_getInstance().createInitializerFactory_e70fer_k$(this.initializers_1.get_values_ksazhn_k$());
  };
  function ViewModelFactoryDsl() {
  }
  protoOf(ViewModelFactoryDsl).equals = function (other) {
    if (!(other instanceof ViewModelFactoryDsl))
      return false;
    other instanceof ViewModelFactoryDsl || THROW_CCE();
    return true;
  };
  protoOf(ViewModelFactoryDsl).hashCode = function () {
    return 0;
  };
  protoOf(ViewModelFactoryDsl).toString = function () {
    return '@androidx.lifecycle.viewmodel.ViewModelFactoryDsl(' + ')';
  };
  function CloseableCoroutineScope_init_$Init$(coroutineScope, $this) {
    CloseableCoroutineScope.call($this, coroutineScope.get_coroutineContext_115oqo_k$());
    return $this;
  }
  function CloseableCoroutineScope_init_$Create$(coroutineScope) {
    return CloseableCoroutineScope_init_$Init$(coroutineScope, objectCreate(protoOf(CloseableCoroutineScope)));
  }
  function CloseableCoroutineScope(coroutineContext) {
    this.coroutineContext_1 = coroutineContext;
  }
  protoOf(CloseableCoroutineScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(CloseableCoroutineScope).close_yn9xrc_k$ = function () {
    return cancel(this.coroutineContext_1);
  };
  function get_VIEW_MODEL_SCOPE_KEY() {
    return VIEW_MODEL_SCOPE_KEY;
  }
  var VIEW_MODEL_SCOPE_KEY;
  function createViewModelScope() {
    var tmp;
    try {
      tmp = Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$();
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
    return new CloseableCoroutineScope(dispatcher.plus_s13ygv_k$(SupervisorJob()));
  }
  function asCloseable(_this__u8e3s4) {
    return CloseableCoroutineScope_init_$Create$(_this__u8e3s4);
  }
  function synchronized(lock, action) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    return action();
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _get_keyToCloseables__ab09iu($this) {
    return $this.keyToCloseables_1;
  }
  function _get_closeables__lzfg6u($this) {
    return $this.closeables_1;
  }
  function _set_isCleared__k1vuub($this, _set____db54di) {
    $this.isCleared_1 = _set____db54di;
  }
  function _get_isCleared__lodqq9($this) {
    return $this.isCleared_1;
  }
  function ViewModelImpl_init_$Init$($this) {
    ViewModelImpl.call($this);
    return $this;
  }
  function ViewModelImpl_init_$Create$() {
    return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
  }
  function ViewModelImpl_init_$Init$_0(viewModelScope, $this) {
    ViewModelImpl.call($this);
    $this.addCloseable_9zbqrc_k$('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY', asCloseable(viewModelScope));
    return $this;
  }
  function ViewModelImpl_init_$Create$_0(viewModelScope) {
    return ViewModelImpl_init_$Init$_0(viewModelScope, objectCreate(protoOf(ViewModelImpl)));
  }
  function ViewModelImpl_init_$Init$_1(closeables, $this) {
    ViewModelImpl.call($this);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = $this.closeables_1;
    addAll(this_0, closeables);
    return $this;
  }
  function ViewModelImpl_init_$Create$_1(closeables) {
    return ViewModelImpl_init_$Init$_1(closeables, objectCreate(protoOf(ViewModelImpl)));
  }
  function ViewModelImpl_init_$Init$_2(viewModelScope, closeables, $this) {
    ViewModelImpl.call($this);
    $this.addCloseable_9zbqrc_k$('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY', asCloseable(viewModelScope));
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = $this.closeables_1;
    addAll(this_0, closeables);
    return $this;
  }
  function ViewModelImpl_init_$Create$_2(viewModelScope, closeables) {
    return ViewModelImpl_init_$Init$_2(viewModelScope, closeables, objectCreate(protoOf(ViewModelImpl)));
  }
  function closeWithRuntimeException($this, closeable) {
    try {
      if (closeable == null)
        null;
      else {
        closeable.close_yn9xrc_k$();
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
  protoOf(ViewModelImpl).clear_j9egeb_k$ = function () {
    if (this.isCleared_1)
      return Unit_getInstance();
    this.isCleared_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    var tmp0_iterator = this.keyToCloseables_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var closeable = tmp0_iterator.next_20eer_k$();
      closeWithRuntimeException(this, closeable);
    }
    var tmp1_iterator = this.closeables_1.iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var closeable_0 = tmp1_iterator.next_20eer_k$();
      closeWithRuntimeException(this, closeable_0);
    }
    this.closeables_1.clear_j9egeb_k$();
  };
  protoOf(ViewModelImpl).addCloseable_9zbqrc_k$ = function (key, closeable) {
    if (this.isCleared_1) {
      closeWithRuntimeException(this, closeable);
      return Unit_getInstance();
    }
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelImpl.addCloseable.<anonymous>' call
    var oldCloseable = this.keyToCloseables_1.put_4fpzoq_k$(key, closeable);
    closeWithRuntimeException(this, oldCloseable);
  };
  protoOf(ViewModelImpl).addCloseable_68h1o0_k$ = function (closeable) {
    if (this.isCleared_1) {
      closeWithRuntimeException(this, closeable);
      return Unit_getInstance();
    }
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    this.closeables_1.add_utx5q5_k$(closeable);
  };
  protoOf(ViewModelImpl).getCloseable_7djixj_k$ = function (key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelImpl.getCloseable.<anonymous>' call
    var tmp = this.keyToCloseables_1.get_wei43m_k$(key);
    return (tmp == null ? true : isInterface(tmp, AutoCloseable)) ? tmp : THROW_CCE();
  };
  function ViewModelImpl() {
    this.lock_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.keyToCloseables_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.closeables_1 = LinkedHashSet_init_$Create$();
    this.isCleared_1 = false;
  }
  function _get_store__b8qga8($this) {
    return $this.store_1;
  }
  function _get_factory__revr21($this) {
    return $this.factory_1;
  }
  function _get_defaultExtras__k8tnpp($this) {
    return $this.defaultExtras_1;
  }
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function ViewModelProviderImpl(store, factory, defaultExtras) {
    this.store_1 = store;
    this.factory_1 = factory;
    this.defaultExtras_1 = defaultExtras;
    this.lock_1 = new SynchronizedObject();
  }
  protoOf(ViewModelProviderImpl).getViewModel_9ewtio_k$ = function (modelClass, key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.lock_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>' call
      var viewModel = this.store_1.get_6bo4tg_k$(key);
      if (modelClass.isInstance_6tn68w_k$(viewModel)) {
        var tmp = this.factory_1;
        if (tmp instanceof OnRequeryFactory) {
          this.factory_1.onRequery_pnw9ld_k$(ensureNotNull(viewModel));
        }
        tmp$ret$0 = viewModel instanceof ViewModel ? viewModel : THROW_CCE();
        break $l$block;
      }
      var modelExtras = MutableCreationExtras_init_$Create$(this.defaultExtras_1);
      modelExtras.set_ccm2re_k$(Companion_getInstance_0().get_VIEW_MODEL_KEY_9crjt4_k$(), key);
      // Inline function 'kotlin.also' call
      var this_0 = createViewModel(this.factory_1, modelClass, modelExtras);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>.<anonymous>' call
      this.store_1.put_abao7a_k$(key, this_0);
      tmp$ret$0 = this_0;
    }
    return tmp$ret$0;
  };
  protoOf(ViewModelProviderImpl).getViewModel$default_j2a4cf_k$ = function (modelClass, key, $super) {
    key = key === VOID ? ViewModelProviders_getInstance().getDefaultKey_drmcpc_k$(modelClass) : key;
    return $super === VOID ? this.getViewModel_9ewtio_k$(modelClass, key) : $super.getViewModel_9ewtio_k$.call(this, modelClass, key);
  };
  function _get_VIEW_MODEL_PROVIDER_DEFAULT_KEY__7thz1u($this) {
    return $this.VIEW_MODEL_PROVIDER_DEFAULT_KEY_1;
  }
  function ViewModelProviders() {
    ViewModelProviders_instance = this;
    this.VIEW_MODEL_PROVIDER_DEFAULT_KEY_1 = 'androidx.lifecycle.ViewModelProvider.DefaultKey';
  }
  protoOf(ViewModelProviders).getDefaultKey_drmcpc_k$ = function (modelClass) {
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
  protoOf(ViewModelProviders).unsupportedCreateViewModel_8nxknc_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.');
  };
  protoOf(ViewModelProviders).createInitializerFactory_e70fer_k$ = function (initializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(initializers);
    return new InitializerViewModelFactory(tmp$ret$0.slice());
  };
  protoOf(ViewModelProviders).createInitializerFactory_an6mst_k$ = function (initializers) {
    return new InitializerViewModelFactory(initializers.slice());
  };
  protoOf(ViewModelProviders).getDefaultFactory_61n6df_k$ = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.get_defaultViewModelProviderFactory_kajob7_k$();
    } else {
      tmp = DefaultViewModelProviderFactory_getInstance();
    }
    return tmp;
  };
  protoOf(ViewModelProviders).getDefaultCreationExtras_oy5g8f_k$ = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.get_defaultViewModelCreationExtras_x8sur6_k$();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  };
  protoOf(ViewModelProviders).createViewModelFromInitializers_cy74rj_k$ = function (modelClass, extras, initializers) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = initializers.length;
      while (inductionVariable < last) {
        var element = initializers[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        if (element.get_clazz_s0687u_k$().equals(modelClass)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_initializer_jj4bh8_k$();
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
    if (ViewModelProviders_instance == null)
      new ViewModelProviders();
    return ViewModelProviders_instance;
  }
  function _get_impl__d88w17($this) {
    return $this.impl_1;
  }
  function ViewModel_init_$Init$($this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  function ViewModel_init_$Create$() {
    return ViewModel_init_$Init$(objectCreate(protoOf(ViewModel)));
  }
  function ViewModel_init_$Init$_0(viewModelScope, $this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$_0(viewModelScope);
    return $this;
  }
  function ViewModel_init_$Create$_0(viewModelScope) {
    return ViewModel_init_$Init$_0(viewModelScope, objectCreate(protoOf(ViewModel)));
  }
  function ViewModel_init_$Init$_1(closeables, $this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$_1(closeables.slice());
    return $this;
  }
  function ViewModel_init_$Create$_1(closeables) {
    return ViewModel_init_$Init$_1(closeables, objectCreate(protoOf(ViewModel)));
  }
  function ViewModel_init_$Init$_2(viewModelScope, closeables, $this) {
    ViewModel.call($this);
    $this.impl_1 = ViewModelImpl_init_$Create$_2(viewModelScope, closeables.slice());
    return $this;
  }
  function ViewModel_init_$Create$_2(viewModelScope, closeables) {
    return ViewModel_init_$Init$_2(viewModelScope, closeables, objectCreate(protoOf(ViewModel)));
  }
  protoOf(ViewModel).onCleared_hwiuwz_k$ = function () {
  };
  protoOf(ViewModel).clear_nvby1k_k$ = function () {
    this.impl_1.clear_j9egeb_k$();
    this.onCleared_hwiuwz_k$();
  };
  protoOf(ViewModel).addCloseable_9zbqrc_k$ = function (key, closeable) {
    this.impl_1.addCloseable_9zbqrc_k$(key, closeable);
  };
  protoOf(ViewModel).addCloseable_68h1o0_k$ = function (closeable) {
    this.impl_1.addCloseable_68h1o0_k$(closeable);
  };
  protoOf(ViewModel).getCloseable_7djixj_k$ = function (key) {
    return this.impl_1.getCloseable_7djixj_k$(key);
  };
  function ViewModel() {
  }
  function _no_name_provided__qut3iv() {
  }
  function _get_impl__d88w17_0($this) {
    return $this.impl_1;
  }
  function Factory() {
  }
  function OnRequeryFactory() {
  }
  protoOf(OnRequeryFactory).onRequery_pnw9ld_k$ = function (viewModel) {
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
    Companion_getInstance();
    tmp.VIEW_MODEL_KEY_1 = new _no_name_provided__qut3iv();
  }
  protoOf(Companion_0).create_a7bx5j_k$ = function (owner, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(owner.get_viewModelStore_ryk6ka_k$(), factory, extras));
  };
  protoOf(Companion_0).create$default_kyfkyv_k$ = function (owner, factory, extras, $super) {
    factory = factory === VOID ? ViewModelProviders_getInstance().getDefaultFactory_61n6df_k$(owner) : factory;
    extras = extras === VOID ? ViewModelProviders_getInstance().getDefaultCreationExtras_oy5g8f_k$(owner) : extras;
    return $super === VOID ? this.create_a7bx5j_k$(owner, factory, extras) : $super.create_a7bx5j_k$.call(this, owner, factory, extras);
  };
  protoOf(Companion_0).create_ltba36_k$ = function (store, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(store, factory, extras));
  };
  protoOf(Companion_0).create$default_y5m4ly_k$ = function (store, factory, extras, $super) {
    factory = factory === VOID ? DefaultViewModelProviderFactory_getInstance() : factory;
    extras = extras === VOID ? Empty_getInstance() : extras;
    return $super === VOID ? this.create_ltba36_k$(store, factory, extras) : $super.create_ltba36_k$.call(this, store, factory, extras);
  };
  protoOf(Companion_0).get_VIEW_MODEL_KEY_9crjt4_k$ = function () {
    return this.VIEW_MODEL_KEY_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ViewModelProvider(impl) {
    Companion_getInstance_0();
    this.impl_1 = impl;
  }
  protoOf(ViewModelProvider).get_1zxqo7_k$ = function (modelClass) {
    return this.impl_1.getViewModel$default_j2a4cf_k$(modelClass);
  };
  protoOf(ViewModelProvider).get_2zg3lp_k$ = function (key, modelClass) {
    return this.impl_1.getViewModel_9ewtio_k$(modelClass, key);
  };
  function ViewModelInitializer(clazz, initializer) {
    this.clazz_1 = clazz;
    this.initializer_1 = initializer;
  }
  protoOf(ViewModelInitializer).get_clazz_s0687u_k$ = function () {
    return this.clazz_1;
  };
  protoOf(ViewModelInitializer).get_initializer_jj4bh8_k$ = function () {
    return this.initializer_1;
  };
  function _get_initializers__3o9r4q_0($this) {
    return $this.initializers_1;
  }
  function InitializerViewModelFactory(initializers) {
    this.initializers_1 = initializers;
  }
  protoOf(InitializerViewModelFactory).create_jhkoyr_k$ = function (modelClass, extras) {
    return ViewModelProviders_getInstance().createViewModelFromInitializers_cy74rj_k$(modelClass, extras, this.initializers_1.slice());
  };
  function DefaultViewModelProviderFactory() {
    DefaultViewModelProviderFactory_instance = this;
  }
  protoOf(DefaultViewModelProviderFactory).create_jhkoyr_k$ = function (modelClass, extras) {
    return ViewModelProviders_getInstance().unsupportedCreateViewModel_8nxknc_k$();
  };
  var DefaultViewModelProviderFactory_instance;
  function DefaultViewModelProviderFactory_getInstance() {
    if (DefaultViewModelProviderFactory_instance == null)
      new DefaultViewModelProviderFactory();
    return DefaultViewModelProviderFactory_instance;
  }
  function createViewModel(factory, modelClass, extras) {
    return factory.create_jhkoyr_k$(modelClass, extras);
  }
  function SynchronizedObject() {
  }
  function synchronizedImpl(lock, action) {
    return action();
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.get_simpleName_r6f8py_k$();
  }
  //region block: init
  VIEW_MODEL_SCOPE_KEY = 'androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Key;
  _.$_$.b = InitializerViewModelFactoryBuilder;
  _.$_$.c = HasDefaultViewModelProviderFactory;
  _.$_$.d = create;
  _.$_$.e = Factory;
  _.$_$.f = ViewModelStoreOwner;
  _.$_$.g = ViewModelStore;
  _.$_$.h = ViewModel;
  _.$_$.i = get_viewModelScope;
  _.$_$.j = MutableCreationExtras_init_$Create$;
  _.$_$.k = ViewModel_init_$Init$;
  _.$_$.l = Companion_getInstance;
  _.$_$.m = Empty_getInstance;
  _.$_$.n = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js.map
