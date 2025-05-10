(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-core-core-bundle.js', './compose-multiplatform-core-savedstate-savedstate.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./compose-multiplatform-core-savedstate-savedstate.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-savedstate-savedstate' was not found. Please, check whether 'compose-multiplatform-core-savedstate-savedstate' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_androidx_savedstate_savedstate, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.m;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var toString = kotlin_kotlin.$_$.ci;
  var lazy = kotlin_kotlin.$_$.bp;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var protoOf = kotlin_kotlin.$_$.yh;
  var SavedStateProvider = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var VOID = kotlin_kotlin.$_$.i;
  var Event_ON_CREATE_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var getKClass = kotlin_kotlin.$_$.f;
  var Key = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.hj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ng;
  var Companion_getInstance_0 = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var objectCreate = kotlin_kotlin.$_$.xh;
  var NotImplementedError = kotlin_kotlin.$_$.rn;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var Char = kotlin_kotlin.$_$.fn;
  var Long = kotlin_kotlin.$_$.pn;
  var Bundle = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.a;
  var isCharSequence = kotlin_kotlin.$_$.ch;
  var isByteArray = kotlin_kotlin.$_$.ah;
  var isBooleanArray = kotlin_kotlin.$_$.zg;
  var isCharArray = kotlin_kotlin.$_$.bh;
  var isDoubleArray = kotlin_kotlin.$_$.dh;
  var isFloatArray = kotlin_kotlin.$_$.eh;
  var isIntArray = kotlin_kotlin.$_$.fh;
  var isLongArray = kotlin_kotlin.$_$.hh;
  var isShortArray = kotlin_kotlin.$_$.jh;
  var firstOrNull = kotlin_kotlin.$_$.ia;
  var KtList = kotlin_kotlin.$_$.j7;
  var isInterface = kotlin_kotlin.$_$.gh;
  var firstOrNull_0 = kotlin_kotlin.$_$.la;
  var isArray = kotlin_kotlin.$_$.yg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.rg;
  var equals = kotlin_kotlin.$_$.gg;
  var FunctionAdapter = kotlin_kotlin.$_$.sf;
  var hashCode = kotlin_kotlin.$_$.pg;
  var toMap = kotlin_kotlin.$_$.yd;
  var toList = kotlin_kotlin.$_$.rd;
  var copyToArray = kotlin_kotlin.$_$.v9;
  var bundleOf = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.b;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var StateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var plus = kotlin_kotlin.$_$.dc;
  var ClassCastException = kotlin_kotlin.$_$.gn;
  var ensureNotNull = kotlin_kotlin.$_$.to;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SavedStateHandlesProvider, 'SavedStateHandlesProvider', VOID, VOID, [SavedStateProvider]);
  initMetadataForClass(SavedStateHandleAttacher, 'SavedStateHandleAttacher', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForClass(SavedStateHandlesVM, 'SavedStateHandlesVM', SavedStateHandlesVM, ViewModel);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Key]);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, [Key]);
  initMetadataForClass(_no_name_provided__qut3iv_1, VOID, VOID, VOID, [Key]);
  initMetadataForClass(savedStateHandlesVM$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(AbstractSavedStateViewModelFactory, 'AbstractSavedStateViewModelFactory', VOID, VOID, [Factory]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0, 'sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0', VOID, VOID, [SavedStateProvider, FunctionAdapter]);
  initMetadataForClass(SavedStateHandle, 'SavedStateHandle', SavedStateHandle_init_$Create$_0);
  //endregion
  function get_SAVED_STATE_REGISTRY_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return SAVED_STATE_REGISTRY_OWNER_KEY;
  }
  var SAVED_STATE_REGISTRY_OWNER_KEY;
  function get_VIEW_MODEL_STORE_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return VIEW_MODEL_STORE_OWNER_KEY;
  }
  var VIEW_MODEL_STORE_OWNER_KEY;
  function get_DEFAULT_ARGS_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return DEFAULT_ARGS_KEY;
  }
  var DEFAULT_ARGS_KEY;
  function createSavedStateHandle(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp0_elvis_lhs = _this__u8e3s4.get_etdm8f_k$(get_SAVED_STATE_REGISTRY_OWNER_KEY());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `SAVED_STATE_REGISTRY_OWNER_KEY`');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var savedStateRegistryOwner = tmp;
    var tmp1_elvis_lhs = _this__u8e3s4.get_etdm8f_k$(get_VIEW_MODEL_STORE_OWNER_KEY());
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `VIEW_MODEL_STORE_OWNER_KEY`');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var viewModelStateRegistryOwner = tmp_0;
    var defaultArgs = _this__u8e3s4.get_etdm8f_k$(get_DEFAULT_ARGS_KEY());
    var tmp2_elvis_lhs = _this__u8e3s4.get_etdm8f_k$(Companion_getInstance().get_VIEW_MODEL_KEY_9crjt4_k$());
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `VIEW_MODEL_KEY`');
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var key = tmp_1;
    return createSavedStateHandle_0(savedStateRegistryOwner, viewModelStateRegistryOwner, key, defaultArgs);
  }
  function enableSavedStateHandles(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var currentState = _this__u8e3s4.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentState.equals(State_INITIALIZED_getInstance()) || currentState.equals(State_CREATED_getInstance()))) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.get_savedStateRegistry_c47b5c_k$().getSavedStateProvider_j42zqv_k$('androidx.lifecycle.internal.SavedStateHandlesProvider') == null) {
      var provider = new SavedStateHandlesProvider(_this__u8e3s4.get_savedStateRegistry_c47b5c_k$(), _this__u8e3s4);
      _this__u8e3s4.get_savedStateRegistry_c47b5c_k$().registerSavedStateProvider_k3a9pp_k$('androidx.lifecycle.internal.SavedStateHandlesProvider', provider);
      _this__u8e3s4.get_lifecycle_3iiym9_k$().addObserver_xhlg3u_k$(new SavedStateHandleAttacher(provider));
    }
  }
  function createSavedStateHandle_0(savedStateRegistryOwner, viewModelStoreOwner, key, defaultArgs) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var provider = get_savedStateHandlesProvider(savedStateRegistryOwner);
    var viewModel = get_savedStateHandlesVM(viewModelStoreOwner);
    var tmp0_elvis_lhs = viewModel.handles_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_getInstance_1().createHandle_td6uw8_k$(provider.consumeRestoredStateForKey_hbgcbf_k$(key), defaultArgs);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.createSavedStateHandle.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      viewModel.handles_1.put_4fpzoq_k$(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_SAVED_STATE_KEY() {
    return SAVED_STATE_KEY;
  }
  var SAVED_STATE_KEY;
  function _get_savedStateRegistry__7wsyx0($this) {
    return $this.savedStateRegistry_1;
  }
  function _set_restored__6segw1($this, _set____db54di) {
    $this.restored_1 = _set____db54di;
  }
  function _get_restored__60hukr($this) {
    return $this.restored_1;
  }
  function _set_restoredState__84y6tm($this, _set____db54di) {
    $this.restoredState_1 = _set____db54di;
  }
  function _get_restoredState__72tboq($this) {
    return $this.restoredState_1;
  }
  function _get_viewModel__fokd3h($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.viewModel$delegate_1;
    viewModel$factory();
    return this_0.get_value_j01efc_k$();
  }
  function SavedStateHandlesProvider$viewModel$delegate$lambda($viewModelStoreOwner) {
    return function () {
      return get_savedStateHandlesVM($viewModelStoreOwner);
    };
  }
  function SavedStateHandlesProvider(savedStateRegistry, viewModelStoreOwner) {
    this.savedStateRegistry_1 = savedStateRegistry;
    this.restored_1 = false;
    this.restoredState_1 = null;
    var tmp = this;
    tmp.viewModel$delegate_1 = lazy(SavedStateHandlesProvider$viewModel$delegate$lambda(viewModelStoreOwner));
  }
  protoOf(SavedStateHandlesProvider).saveState_2v0z6c_k$ = function () {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>' call
    var tmp0_safe_receiver = this.restoredState_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this_0.putAll_w596ud_k$(tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _get_viewModel__fokd3h(this).handles_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var handle = element.get_value_j01efc_k$();
      var savedState = handle.savedStateProvider_jcu205_k$().saveState_2v0z6c_k$();
      if (!savedState.isEmpty_y1axqb_k$()) {
        this_0.putBundle_yus54s_k$(key, savedState);
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>' call
    this.restored_1 = false;
    return this_0;
  };
  protoOf(SavedStateHandlesProvider).performRestore_fnhj4t_k$ = function () {
    if (!this.restored_1) {
      var newState = this.savedStateRegistry_1.consumeRestoredStateForKey_hbgcbf_k$('androidx.lifecycle.internal.SavedStateHandlesProvider');
      var tmp = this;
      // Inline function 'kotlin.apply' call
      var this_0 = Bundle_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.performRestore.<anonymous>' call
      var tmp0_safe_receiver = this.restoredState_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this_0.putAll_w596ud_k$(tmp0_safe_receiver);
      }
      if (newState == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this_0.putAll_w596ud_k$(newState);
      }
      tmp.restoredState_1 = this_0;
      this.restored_1 = true;
      _get_viewModel__fokd3h(this);
    }
  };
  protoOf(SavedStateHandlesProvider).consumeRestoredStateForKey_hbgcbf_k$ = function (key) {
    this.performRestore_fnhj4t_k$();
    // Inline function 'kotlin.also' call
    var tmp0_safe_receiver = this.restoredState_1;
    var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getBundle_4qisc1_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.consumeRestoredStateForKey.<anonymous>' call
    var tmp0_safe_receiver_0 = this.restoredState_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.remove_ewgslv_k$(key);
    }
    var tmp1_safe_receiver = this.restoredState_1;
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.isEmpty_y1axqb_k$()) === true) {
      this.restoredState_1 = null;
    }
    return this_0;
  };
  function _get_provider__fg8hru($this) {
    return $this.provider_1;
  }
  function SavedStateHandleAttacher(provider) {
    this.provider_1 = provider;
  }
  protoOf(SavedStateHandleAttacher).onStateChanged_3qr65s_k$ = function (source, event) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!event.equals(Event_ON_CREATE_getInstance())) {
      // Inline function 'androidx.lifecycle.SavedStateHandleAttacher.onStateChanged.<anonymous>' call
      var message = 'Next event must be ON_CREATE, it was ' + event.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    source.get_lifecycle_3iiym9_k$().removeObserver_thdcdj_k$(this);
    this.provider_1.performRestore_fnhj4t_k$();
  };
  function get_savedStateHandlesProvider(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = _this__u8e3s4.get_savedStateRegistry_c47b5c_k$().getSavedStateProvider_j42zqv_k$('androidx.lifecycle.internal.SavedStateHandlesProvider');
    var tmp0_elvis_lhs = tmp instanceof SavedStateHandlesProvider ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("enableSavedStateHandles() wasn't called prior to createSavedStateHandle() call");
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateHandlesVM() {
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.handles_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SavedStateHandlesVM).get_handles_cq14ki_k$ = function () {
    return this.handles_1;
  };
  function get_savedStateHandlesVM(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = Companion_getInstance();
    return tmp.create$default_kyfkyv_k$(_this__u8e3s4, new savedStateHandlesVM$1()).get_2zg3lp_k$('androidx.lifecycle.internal.SavedStateHandlesVM', getKClass(SavedStateHandlesVM));
  }
  function get_VIEWMODEL_KEY() {
    return VIEWMODEL_KEY;
  }
  var VIEWMODEL_KEY;
  function _no_name_provided__qut3iv() {
  }
  function _no_name_provided__qut3iv_0() {
  }
  function _no_name_provided__qut3iv_1() {
  }
  function savedStateHandlesVM$1() {
  }
  protoOf(savedStateHandlesVM$1).create_jhkoyr_k$ = function (modelClass, extras) {
    var tmp = new SavedStateHandlesVM();
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  function viewModel$factory() {
    return getPropertyCallableRef('viewModel', 1, KProperty1, function (receiver) {
      return _get_viewModel__fokd3h(receiver);
    }, null);
  }
  var properties_initialized_SavedStateHandleSupport_kt_6hqgvh;
  function _init_properties_SavedStateHandleSupport_kt__nxqisr() {
    if (!properties_initialized_SavedStateHandleSupport_kt_6hqgvh) {
      properties_initialized_SavedStateHandleSupport_kt_6hqgvh = true;
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance_0();
      SAVED_STATE_REGISTRY_OWNER_KEY = new _no_name_provided__qut3iv();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance_0();
      VIEW_MODEL_STORE_OWNER_KEY = new _no_name_provided__qut3iv_0();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance_0();
      DEFAULT_ARGS_KEY = new _no_name_provided__qut3iv_1();
    }
  }
  function _set_lifecycle__76087v($this, _set____db54di) {
    $this.lifecycle_1 = _set____db54di;
  }
  function _get_lifecycle__yk9dcp($this) {
    return $this.lifecycle_1;
  }
  function _set_defaultArgs__e57pq1($this, _set____db54di) {
    $this.defaultArgs_1 = _set____db54di;
  }
  function _get_defaultArgs__g56glv($this) {
    return $this.defaultArgs_1;
  }
  function AbstractSavedStateViewModelFactory_init_$Init$($this) {
    AbstractSavedStateViewModelFactory.call($this);
    return $this;
  }
  function AbstractSavedStateViewModelFactory_init_$Create$() {
    return AbstractSavedStateViewModelFactory_init_$Init$(objectCreate(protoOf(AbstractSavedStateViewModelFactory)));
  }
  function AbstractSavedStateViewModelFactory_init_$Init$_0(owner, defaultArgs, $this) {
    AbstractSavedStateViewModelFactory.call($this);
    $this.lifecycle_1 = owner.get_lifecycle_3iiym9_k$();
    $this.defaultArgs_1 = defaultArgs;
    return $this;
  }
  function AbstractSavedStateViewModelFactory_init_$Create$_0(owner, defaultArgs) {
    return AbstractSavedStateViewModelFactory_init_$Init$_0(owner, defaultArgs, objectCreate(protoOf(AbstractSavedStateViewModelFactory)));
  }
  protoOf(AbstractSavedStateViewModelFactory).create_jhkoyr_k$ = function (modelClass, extras) {
    var tmp0_elvis_lhs = extras.get_etdm8f_k$(Companion_getInstance().get_VIEW_MODEL_KEY_9crjt4_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('VIEW_MODEL_KEY must always be provided by ViewModelProvider');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    return this.create_xim7zc_k$(key, modelClass, createSavedStateHandle(extras));
  };
  protoOf(AbstractSavedStateViewModelFactory).create_xim7zc_k$ = function (key, modelClass, handle) {
    throw new NotImplementedError();
  };
  function AbstractSavedStateViewModelFactory() {
    this.lifecycle_1 = null;
    this.defaultArgs_1 = null;
  }
  function _get_regular__nxat4l($this) {
    return $this.regular_1;
  }
  function _get_savedStateProviders__4kacx3($this) {
    return $this.savedStateProviders_1;
  }
  function _get_flows__hips44($this) {
    return $this.flows_1;
  }
  function _get_savedStateProvider__2fsc4w($this) {
    return $this.savedStateProvider_1;
  }
  function SavedStateHandle_init_$Init$(initialState, $this) {
    SavedStateHandle.call($this);
    $this.regular_1.putAll_wgg6cj_k$(initialState);
    return $this;
  }
  function SavedStateHandle_init_$Create$(initialState) {
    return SavedStateHandle_init_$Init$(initialState, objectCreate(protoOf(SavedStateHandle)));
  }
  function SavedStateHandle_init_$Init$_0($this) {
    SavedStateHandle.call($this);
    return $this;
  }
  function SavedStateHandle_init_$Create$_0() {
    return SavedStateHandle_init_$Init$_0(objectCreate(protoOf(SavedStateHandle)));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).createHandle_td6uw8_k$ = function (restoredState, defaultState) {
    if (restoredState == null) {
      var tmp;
      if (defaultState == null) {
        tmp = SavedStateHandle_init_$Create$_0();
      } else {
        var state = HashMap_init_$Create$();
        var tmp0_iterator = defaultState.keySet_irk8e5_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var key = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlin.collections.set' call
          var key_0 = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
          var value = defaultState.get_jl1mi9_k$(key);
          state.put_4fpzoq_k$(key_0, value);
        }
        tmp = SavedStateHandle_init_$Create$(state);
      }
      return tmp;
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var state_0 = LinkedHashMap_init_$Create$();
    var tmp1_iterator = restoredState.keySet_irk8e5_k$().iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var key_1 = tmp1_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.set' call
      var key_2 = (!(key_1 == null) ? typeof key_1 === 'string' : false) ? key_1 : THROW_CCE();
      var value_0 = restoredState.get_jl1mi9_k$(key_1);
      state_0.put_4fpzoq_k$(key_2, value_0);
    }
    return SavedStateHandle_init_$Create$(state_0);
  };
  protoOf(Companion).validateValue_t94490_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      var tmp_3;
      var tmp_4;
      var tmp_5;
      var tmp_6;
      if (!(value == null) ? typeof value === 'boolean' : false) {
        tmp_6 = true;
      } else {
        tmp_6 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_6) {
        tmp_5 = true;
      } else {
        tmp_5 = value instanceof Char;
      }
      if (tmp_5) {
        tmp_4 = true;
      } else {
        tmp_4 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_4) {
        tmp_3 = true;
      } else {
        tmp_3 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_3) {
        tmp_2 = true;
      } else {
        tmp_2 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_2) {
        tmp_1 = true;
      } else {
        tmp_1 = value instanceof Long;
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        tmp_0 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        var tmp_7;
        var tmp_8;
        if (value instanceof Bundle) {
          tmp_8 = true;
        } else {
          tmp_8 = !(value == null) ? typeof value === 'string' : false;
        }
        if (tmp_8) {
          tmp_7 = true;
        } else {
          tmp_7 = !(value == null) ? isCharSequence(value) : false;
        }
        if (tmp_7) {
          tmp = true;
        } else {
          var tmp_9;
          var tmp_10;
          var tmp_11;
          var tmp_12;
          var tmp_13;
          var tmp_14;
          var tmp_15;
          if (!(value == null) ? isBooleanArray(value) : false) {
            tmp_15 = true;
          } else {
            tmp_15 = !(value == null) ? isByteArray(value) : false;
          }
          if (tmp_15) {
            tmp_14 = true;
          } else {
            tmp_14 = !(value == null) ? isCharArray(value) : false;
          }
          if (tmp_14) {
            tmp_13 = true;
          } else {
            tmp_13 = !(value == null) ? isDoubleArray(value) : false;
          }
          if (tmp_13) {
            tmp_12 = true;
          } else {
            tmp_12 = !(value == null) ? isFloatArray(value) : false;
          }
          if (tmp_12) {
            tmp_11 = true;
          } else {
            tmp_11 = !(value == null) ? isIntArray(value) : false;
          }
          if (tmp_11) {
            tmp_10 = true;
          } else {
            tmp_10 = !(value == null) ? isLongArray(value) : false;
          }
          if (tmp_10) {
            tmp_9 = true;
          } else {
            tmp_9 = !(value == null) ? isShortArray(value) : false;
          }
          if (tmp_9) {
            tmp = true;
          } else {
            if (!(value == null) ? isArray(value) : false) {
              var tmp1_subject = firstOrNull_0(value);
              var tmp_16;
              var tmp_17;
              if (!(tmp1_subject == null) ? typeof tmp1_subject === 'string' : false) {
                tmp_17 = true;
              } else {
                tmp_17 = !(tmp1_subject == null) ? isCharSequence(tmp1_subject) : false;
              }
              if (tmp_17) {
                tmp_16 = true;
              } else {
                if (tmp1_subject instanceof Bundle) {
                  tmp_16 = true;
                } else {
                  // Inline function 'kotlin.collections.isEmpty' call
                  tmp_16 = value.length === 0;
                }
              }
              tmp = tmp_16;
            } else {
              if (!(value == null) ? isInterface(value, KtList) : false) {
                var tmp2_subject = firstOrNull(value);
                var tmp_18;
                var tmp_19;
                if (!(tmp2_subject == null) ? typeof tmp2_subject === 'number' : false) {
                  tmp_19 = true;
                } else {
                  tmp_19 = !(tmp2_subject == null) ? typeof tmp2_subject === 'string' : false;
                }
                if (tmp_19) {
                  tmp_18 = true;
                } else {
                  tmp_18 = value.isEmpty_y1axqb_k$();
                }
                tmp = tmp_18;
              } else {
                tmp = false;
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).saveState_2v0z6c_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SavedStateProvider) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SavedStateHandle$savedStateProvider$lambda(this$0) {
    return function () {
      var map = toMap(this$0.savedStateProviders_1);
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key = tmp1_loop_parameter.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = tmp1_loop_parameter.get_value_j01efc_k$();
        var savedState = value.saveState_2v0z6c_k$();
        this$0.set_2ioqze_k$(key, savedState);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = toList(this$0.regular_1);
      var tmp$ret$3 = copyToArray(this_0);
      return bundleOf(tmp$ret$3.slice());
    };
  }
  protoOf(SavedStateHandle).savedStateProvider_jcu205_k$ = function () {
    return this.savedStateProvider_1;
  };
  protoOf(SavedStateHandle).contains_zh0gsb_k$ = function (key) {
    return this.regular_1.containsKey_aw81wo_k$(key);
  };
  protoOf(SavedStateHandle).getStateFlow_6p79dg_k$ = function (key, initialValue) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.flows_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.lifecycle.SavedStateHandle.getStateFlow.<anonymous>' call
      if (!this.regular_1.containsKey_aw81wo_k$(key)) {
        // Inline function 'kotlin.collections.set' call
        this.regular_1.put_4fpzoq_k$(key, initialValue);
      }
      // Inline function 'kotlin.apply' call
      var this_1 = MutableStateFlow(this.regular_1.get_wei43m_k$(key));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.SavedStateHandle.getStateFlow.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      this.flows_1.put_4fpzoq_k$(key, this_1);
      var answer = this_1;
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp$ret$2 = tmp;
    var tmp_0 = asStateFlow(tmp$ret$2);
    return isInterface(tmp_0, StateFlow) ? tmp_0 : THROW_CCE();
  };
  protoOf(SavedStateHandle).keys_1yhh0_k$ = function () {
    return plus(this.regular_1.get_keys_wop4xp_k$(), this.savedStateProviders_1.get_keys_wop4xp_k$());
  };
  protoOf(SavedStateHandle).get_1z5p00_k$ = function (key) {
    var tmp;
    try {
      var tmp_0 = this.regular_1.get_wei43m_k$(key);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ClassCastException) {
        var e = $p;
        this.remove_kwgu_k$(key);
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(SavedStateHandle).set_2ioqze_k$ = function (key, value) {
    if (!Companion_getInstance_1().validateValue_t94490_k$(value)) {
      throw IllegalArgumentException_init_$Create$("Can't put value with type " + toString(getKClassFromExpression(ensureNotNull(value))) + ' into saved state');
    }
    // Inline function 'kotlin.collections.set' call
    this.regular_1.put_4fpzoq_k$(key, value);
    var tmp0_safe_receiver = this.flows_1.get_wei43m_k$(key);
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.set_value_v1vabv_k$(value);
    }
  };
  protoOf(SavedStateHandle).remove_kwgu_k$ = function (key) {
    var tmp = this.regular_1.remove_gppy8k_k$(key);
    var latestValue = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.flows_1.remove_gppy8k_k$(key);
    return latestValue;
  };
  protoOf(SavedStateHandle).setSavedStateProvider_kcymr2_k$ = function (key, provider) {
    // Inline function 'kotlin.collections.set' call
    this.savedStateProviders_1.put_4fpzoq_k$(key, provider);
  };
  protoOf(SavedStateHandle).clearSavedStateProvider_1yfuw2_k$ = function (key) {
    this.savedStateProviders_1.remove_gppy8k_k$(key);
  };
  function SavedStateHandle() {
    Companion_getInstance_1();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.regular_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.savedStateProviders_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.flows_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    var tmp_3 = SavedStateHandle$savedStateProvider$lambda(this);
    tmp_2.savedStateProvider_1 = new sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(tmp_3);
  }
  //region block: init
  SAVED_STATE_KEY = 'androidx.lifecycle.internal.SavedStateHandlesProvider';
  VIEWMODEL_KEY = 'androidx.lifecycle.internal.SavedStateHandlesVM';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AbstractSavedStateViewModelFactory;
  _.$_$.b = get_DEFAULT_ARGS_KEY;
  _.$_$.c = get_SAVED_STATE_REGISTRY_OWNER_KEY;
  _.$_$.d = get_VIEW_MODEL_STORE_OWNER_KEY;
  _.$_$.e = createSavedStateHandle;
  _.$_$.f = enableSavedStateHandles;
  _.$_$.g = AbstractSavedStateViewModelFactory_init_$Init$_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js.map
