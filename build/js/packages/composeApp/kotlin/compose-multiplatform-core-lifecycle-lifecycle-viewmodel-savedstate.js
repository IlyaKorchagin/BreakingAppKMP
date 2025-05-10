(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-core-core-bundle.js', './compose-multiplatform-core-savedstate-savedstate.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./compose-multiplatform-core-savedstate-savedstate.js'));
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
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['compose-multiplatform-core-savedstate-savedstate']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_androidx_savedstate_savedstate) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var toString = kotlin_kotlin.$_$.le;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var lazy = kotlin_kotlin.$_$.fk;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var protoOf = kotlin_kotlin.$_$.he;
  var SavedStateProvider = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var Event_ON_CREATE_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.c;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var getKClass = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var Companion_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var NotImplementedError = kotlin_kotlin.$_$.yi;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Char = kotlin_kotlin.$_$.mi;
  var Long = kotlin_kotlin.$_$.wi;
  var Bundle = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.a;
  var isCharSequence = kotlin_kotlin.$_$.md;
  var isByteArray = kotlin_kotlin.$_$.kd;
  var isBooleanArray = kotlin_kotlin.$_$.jd;
  var isCharArray = kotlin_kotlin.$_$.ld;
  var isDoubleArray = kotlin_kotlin.$_$.nd;
  var isFloatArray = kotlin_kotlin.$_$.od;
  var isIntArray = kotlin_kotlin.$_$.pd;
  var isLongArray = kotlin_kotlin.$_$.rd;
  var isShortArray = kotlin_kotlin.$_$.td;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var KtList = kotlin_kotlin.$_$.m6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var firstOrNull_0 = kotlin_kotlin.$_$.j8;
  var isArray = kotlin_kotlin.$_$.id;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var equals = kotlin_kotlin.$_$.qc;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var toMap = kotlin_kotlin.$_$.ya;
  var toList = kotlin_kotlin.$_$.va;
  var copyToArray = kotlin_kotlin.$_$.y7;
  var bundleOf = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.b;
  var ClassCastException = kotlin_kotlin.$_$.ni;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SavedStateHandlesProvider, 'SavedStateHandlesProvider', VOID, VOID, [SavedStateProvider]);
  initMetadataForClass(SavedStateHandleAttacher, 'SavedStateHandleAttacher', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForClass(SavedStateHandlesVM, 'SavedStateHandlesVM', SavedStateHandlesVM, ViewModel);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(_no_name_provided__qut3iv_1);
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
    var tmp0_elvis_lhs = _this__u8e3s4.x48(get_SAVED_STATE_REGISTRY_OWNER_KEY());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `SAVED_STATE_REGISTRY_OWNER_KEY`');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var savedStateRegistryOwner = tmp;
    var tmp1_elvis_lhs = _this__u8e3s4.x48(get_VIEW_MODEL_STORE_OWNER_KEY());
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `VIEW_MODEL_STORE_OWNER_KEY`');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var viewModelStateRegistryOwner = tmp_0;
    var defaultArgs = _this__u8e3s4.x48(get_DEFAULT_ARGS_KEY());
    var tmp2_elvis_lhs = _this__u8e3s4.x48(Companion_getInstance().p49_1);
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
    var currentState = _this__u8e3s4.y47().m45();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentState.equals(State_INITIALIZED_getInstance()) || currentState.equals(State_CREATED_getInstance()))) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.j4a().o48('androidx.lifecycle.internal.SavedStateHandlesProvider') == null) {
      var provider = new SavedStateHandlesProvider(_this__u8e3s4.j4a(), _this__u8e3s4);
      _this__u8e3s4.j4a().n48('androidx.lifecycle.internal.SavedStateHandlesProvider', provider);
      _this__u8e3s4.y47().k45(new SavedStateHandleAttacher(provider));
    }
  }
  function createSavedStateHandle_0(savedStateRegistryOwner, viewModelStoreOwner, key, defaultArgs) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var provider = get_savedStateHandlesProvider(savedStateRegistryOwner);
    var viewModel = get_savedStateHandlesVM(viewModelStoreOwner);
    var tmp0_elvis_lhs = viewModel.l4a_1.n2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_0.q4a(provider.m48(key), defaultArgs);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.createSavedStateHandle.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      viewModel.l4a_1.f2(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_viewModel__fokd3h($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.p4a_1;
    viewModel$factory();
    return this_0.w();
  }
  function SavedStateHandlesProvider$viewModel$delegate$lambda($viewModelStoreOwner) {
    return function () {
      return get_savedStateHandlesVM($viewModelStoreOwner);
    };
  }
  function SavedStateHandlesProvider(savedStateRegistry, viewModelStoreOwner) {
    this.m4a_1 = savedStateRegistry;
    this.n4a_1 = false;
    this.o4a_1 = null;
    var tmp = this;
    tmp.p4a_1 = lazy(SavedStateHandlesProvider$viewModel$delegate$lambda(viewModelStoreOwner));
  }
  protoOf(SavedStateHandlesProvider).j48 = function () {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>' call
    var tmp0_safe_receiver = this.o4a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this_0.k46(tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _get_viewModel__fokd3h(this).l4a_1.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.v();
      // Inline function 'kotlin.collections.component2' call
      var handle = element.w();
      var savedState = handle.v4a().j48();
      if (!savedState.q()) {
        this_0.v46(key, savedState);
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>' call
    this.n4a_1 = false;
    return this_0;
  };
  protoOf(SavedStateHandlesProvider).w4a = function () {
    if (!this.n4a_1) {
      var newState = this.m4a_1.m48('androidx.lifecycle.internal.SavedStateHandlesProvider');
      var tmp = this;
      // Inline function 'kotlin.apply' call
      var this_0 = Bundle_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.performRestore.<anonymous>' call
      var tmp0_safe_receiver = this.o4a_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this_0.k46(tmp0_safe_receiver);
      }
      if (newState == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this_0.k46(newState);
      }
      tmp.o4a_1 = this_0;
      this.n4a_1 = true;
      _get_viewModel__fokd3h(this);
    }
  };
  protoOf(SavedStateHandlesProvider).m48 = function (key) {
    this.w4a();
    // Inline function 'kotlin.also' call
    var tmp0_safe_receiver = this.o4a_1;
    var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o47(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.consumeRestoredStateForKey.<anonymous>' call
    var tmp0_safe_receiver_0 = this.o4a_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.i46(key);
    }
    var tmp1_safe_receiver = this.o4a_1;
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q()) === true) {
      this.o4a_1 = null;
    }
    return this_0;
  };
  function SavedStateHandleAttacher(provider) {
    this.x4a_1 = provider;
  }
  protoOf(SavedStateHandleAttacher).a45 = function (source, event) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!event.equals(Event_ON_CREATE_getInstance())) {
      // Inline function 'androidx.lifecycle.SavedStateHandleAttacher.onStateChanged.<anonymous>' call
      var message = 'Next event must be ON_CREATE, it was ' + event.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    source.y47().l45(this);
    this.x4a_1.w4a();
  };
  function get_savedStateHandlesProvider(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = _this__u8e3s4.j4a().o48('androidx.lifecycle.internal.SavedStateHandlesProvider');
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
    tmp.l4a_1 = LinkedHashMap_init_$Create$();
  }
  function get_savedStateHandlesVM(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = Companion_getInstance();
    return tmp.c4a(_this__u8e3s4, new savedStateHandlesVM$1()).h4a('androidx.lifecycle.internal.SavedStateHandlesVM', getKClass(SavedStateHandlesVM));
  }
  function _no_name_provided__qut3iv() {
  }
  function _no_name_provided__qut3iv_0() {
  }
  function _no_name_provided__qut3iv_1() {
  }
  function savedStateHandlesVM$1() {
  }
  protoOf(savedStateHandlesVM$1).z49 = function (modelClass, extras) {
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
      SAVED_STATE_REGISTRY_OWNER_KEY = new _no_name_provided__qut3iv();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      VIEW_MODEL_STORE_OWNER_KEY = new _no_name_provided__qut3iv_0();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      DEFAULT_ARGS_KEY = new _no_name_provided__qut3iv_1();
    }
  }
  function AbstractSavedStateViewModelFactory_init_$Init$(owner, defaultArgs, $this) {
    AbstractSavedStateViewModelFactory.call($this);
    $this.y4a_1 = owner.y47();
    $this.z4a_1 = defaultArgs;
    return $this;
  }
  protoOf(AbstractSavedStateViewModelFactory).z49 = function (modelClass, extras) {
    var tmp0_elvis_lhs = extras.x48(Companion_getInstance().p49_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('VIEW_MODEL_KEY must always be provided by ViewModelProvider');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    return this.a4b(key, modelClass, createSavedStateHandle(extras));
  };
  protoOf(AbstractSavedStateViewModelFactory).a4b = function (key, modelClass, handle) {
    throw new NotImplementedError();
  };
  function AbstractSavedStateViewModelFactory() {
    this.y4a_1 = null;
    this.z4a_1 = null;
  }
  function SavedStateHandle_init_$Init$(initialState, $this) {
    SavedStateHandle.call($this);
    $this.r4a_1.h2(initialState);
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
  }
  protoOf(Companion).q4a = function (restoredState, defaultState) {
    if (restoredState == null) {
      var tmp;
      if (defaultState == null) {
        tmp = SavedStateHandle_init_$Create$_0();
      } else {
        var state = HashMap_init_$Create$();
        var tmp0_iterator = defaultState.j46().g();
        while (tmp0_iterator.h()) {
          var key = tmp0_iterator.i();
          // Inline function 'kotlin.collections.set' call
          var key_0 = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
          var value = defaultState.s47(key);
          state.f2(key_0, value);
        }
        tmp = SavedStateHandle_init_$Create$(state);
      }
      return tmp;
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var state_0 = LinkedHashMap_init_$Create$();
    var tmp1_iterator = restoredState.j46().g();
    while (tmp1_iterator.h()) {
      var key_1 = tmp1_iterator.i();
      // Inline function 'kotlin.collections.set' call
      var key_2 = (!(key_1 == null) ? typeof key_1 === 'string' : false) ? key_1 : THROW_CCE();
      var value_0 = restoredState.s47(key_1);
      state_0.f2(key_2, value_0);
    }
    return SavedStateHandle_init_$Create$(state_0);
  };
  protoOf(Companion).b4b = function (value) {
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
                  tmp_18 = value.q();
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
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(function_0) {
    this.c4b_1 = function_0;
  }
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).j48 = function () {
    return this.c4b_1();
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).s3 = function () {
    return this.c4b_1;
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SavedStateProvider) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.s3(), other.s3());
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
    return hashCode(this.s3());
  };
  function SavedStateHandle$savedStateProvider$lambda(this$0) {
    return function () {
      var map = toMap(this$0.s4a_1);
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = map.u().g();
      while (tmp0_iterator.h()) {
        var tmp1_loop_parameter = tmp0_iterator.i();
        // Inline function 'kotlin.collections.component1' call
        var key = tmp1_loop_parameter.v();
        // Inline function 'kotlin.collections.component2' call
        var value = tmp1_loop_parameter.w();
        var savedState = value.j48();
        this$0.d4b(key, savedState);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = toList(this$0.r4a_1);
      var tmp$ret$3 = copyToArray(this_0);
      return bundleOf(tmp$ret$3.slice());
    };
  }
  protoOf(SavedStateHandle).v4a = function () {
    return this.u4a_1;
  };
  protoOf(SavedStateHandle).e4b = function (key) {
    var tmp;
    try {
      var tmp_0 = this.r4a_1.n2(key);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ClassCastException) {
        var e = $p;
        this.f4b(key);
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(SavedStateHandle).d4b = function (key, value) {
    if (!Companion_instance_0.b4b(value)) {
      throw IllegalArgumentException_init_$Create$("Can't put value with type " + toString(getKClassFromExpression(ensureNotNull(value))) + ' into saved state');
    }
    // Inline function 'kotlin.collections.set' call
    this.r4a_1.f2(key, value);
    var tmp0_safe_receiver = this.t4a_1.n2(key);
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.n1v(value);
    }
  };
  protoOf(SavedStateHandle).f4b = function (key) {
    var tmp = this.r4a_1.g2(key);
    var latestValue = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.t4a_1.g2(key);
    return latestValue;
  };
  function SavedStateHandle() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r4a_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.s4a_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.t4a_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    var tmp_3 = SavedStateHandle$savedStateProvider$lambda(this);
    tmp_2.u4a_1 = new sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(tmp_3);
  }
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AbstractSavedStateViewModelFactory;
  _.$_$.b = get_DEFAULT_ARGS_KEY;
  _.$_$.c = get_SAVED_STATE_REGISTRY_OWNER_KEY;
  _.$_$.d = get_VIEW_MODEL_STORE_OWNER_KEY;
  _.$_$.e = createSavedStateHandle;
  _.$_$.f = enableSavedStateHandles;
  _.$_$.g = AbstractSavedStateViewModelFactory_init_$Init$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js.map
