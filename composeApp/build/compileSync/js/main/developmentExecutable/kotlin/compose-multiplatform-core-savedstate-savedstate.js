(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-core-core-bundle.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-core-core-bundle.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    globalThis['compose-multiplatform-core-savedstate-savedstate'] = factory(typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-core-core-bundle']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_core_core_bundle) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yh;
  var initMetadataForCompanion = kotlin_kotlin.$_$.rg;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var toString = kotlin_kotlin.$_$.ci;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.n;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var LifecycleOwner = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.b;
  var initMetadataForInterface = kotlin_kotlin.$_$.ug;
  var VOID = kotlin_kotlin.$_$.i;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var equals = kotlin_kotlin.$_$.gg;
  var FunctionAdapter = kotlin_kotlin.$_$.sf;
  var isInterface = kotlin_kotlin.$_$.gh;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.pg;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var Event_ON_STOP_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var Event_ON_START_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForInterface(SavedStateRegistryOwner, 'SavedStateRegistryOwner', VOID, VOID, [LifecycleOwner]);
  initMetadataForInterface(SavedStateProvider, 'SavedStateProvider');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  //endregion
  function _get_owner__d3agea($this) {
    return $this.owner_1;
  }
  function _set_attached__tdysab($this, _set____db54di) {
    $this.attached_1 = _set____db54di;
  }
  function _get_attached__gl2gtj($this) {
    return $this.attached_1;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).create_vgrzy2_k$ = function (owner) {
    return new SavedStateRegistryController(owner);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SavedStateRegistryController(owner) {
    Companion_getInstance();
    this.owner_1 = owner;
    this.savedStateRegistry_1 = new SavedStateRegistry();
    this.attached_1 = false;
  }
  protoOf(SavedStateRegistryController).get_savedStateRegistry_c47b5c_k$ = function () {
    return this.savedStateRegistry_1;
  };
  protoOf(SavedStateRegistryController).performAttach_s69gp6_k$ = function () {
    var lifecycle = this.owner_1.get_lifecycle_3iiym9_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!lifecycle.get_currentState_snihnl_k$().equals(State_INITIALIZED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performAttach.<anonymous>' call
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    platformPerformAttach(this.owner_1);
    this.savedStateRegistry_1.performAttach_uagsv1_k$(lifecycle);
    this.attached_1 = true;
  };
  protoOf(SavedStateRegistryController).performRestore_70bz3t_k$ = function (savedState) {
    if (!this.attached_1) {
      this.performAttach_s69gp6_k$();
    }
    var lifecycle = this.owner_1.get_lifecycle_3iiym9_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!lifecycle.get_currentState_snihnl_k$().isAtLeast_pbz9hc_k$(State_STARTED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performRestore.<anonymous>' call
      var message = 'performRestore cannot be called when owner is ' + lifecycle.get_currentState_snihnl_k$().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.savedStateRegistry_1.performRestore_ofzwqf_k$(savedState);
  };
  protoOf(SavedStateRegistryController).performSave_vf2er3_k$ = function (outBundle) {
    this.savedStateRegistry_1.performSave_f96ujx_k$(outBundle);
  };
  function SavedStateRegistryOwner() {
  }
  function _get_SAVED_COMPONENTS_KEY__lf4wgz($this) {
    return $this.SAVED_COMPONENTS_KEY_1;
  }
  function _get_components__nj2439($this) {
    return $this.components_1;
  }
  function _set_attached__tdysab_0($this, _set____db54di) {
    $this.attached_1 = _set____db54di;
  }
  function _get_attached__gl2gtj_0($this) {
    return $this.attached_1;
  }
  function _set_restoredState__84y6tm($this, _set____db54di) {
    $this.restoredState_1 = _set____db54di;
  }
  function _get_restoredState__72tboq($this) {
    return $this.restoredState_1;
  }
  function _set_isRestored__r5yhqh($this, _set____db54di) {
    $this.isRestored_1 = _set____db54di;
  }
  function _set_isAllowingSavingState__ykhbjj($this, _set____db54di) {
    $this.isAllowingSavingState_1 = _set____db54di;
  }
  function _get_isAllowingSavingState__ub0dzx($this) {
    return $this.isAllowingSavingState_1;
  }
  function forEachObserverWithAdditions($this, block) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = $this.components_1.get_keys_wop4xp_k$();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.contains_aljjnj_k$(element)) {
          destination.add_utx5q5_k$(element);
        }
      }
      var keys = destination;
      if (keys.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var tmp0_iterator_0 = keys.iterator_jk1svi_k$();
      $l$loop_0: while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var key = tmp0_iterator_0.next_20eer_k$();
        var tmp1_elvis_lhs = $this.components_1.get_wei43m_k$(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        block(key, value);
        visited.add_utx5q5_k$(key);
      }
    }
  }
  function SavedStateProvider() {
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.SAVED_COMPONENTS_KEY_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).onStateChanged_3qr65s_k$ = function (source, event) {
    return this.function_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
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
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SavedStateRegistry$performAttach$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.isAllowingSavingState_1 = true;
        tmp = Unit_getInstance();
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.isAllowingSavingState_1 = false;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SavedStateRegistry() {
    Companion_getInstance_0();
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.components_1 = LinkedHashMap_init_$Create$();
    this.attached_1 = false;
    this.restoredState_1 = null;
    this.isRestored_1 = false;
    this.isAllowingSavingState_1 = true;
  }
  protoOf(SavedStateRegistry).get_isRestored_w65dux_k$ = function () {
    return this.isRestored_1;
  };
  protoOf(SavedStateRegistry).consumeRestoredStateForKey_hbgcbf_k$ = function (key) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.isRestored_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.consumeRestoredStateForKey.<anonymous>' call
      var message = 'You can consumeRestoredStateForKey only after super.onCreate of corresponding component';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!(this.restoredState_1 == null)) {
      var tmp0_safe_receiver = this.restoredState_1;
      var result = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getBundle_4qisc1_k$(key);
      var tmp1_safe_receiver = this.restoredState_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.remove_ewgslv_k$(key);
      }
      var tmp2_safe_receiver = this.restoredState_1;
      if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.isEmpty_y1axqb_k$()) === false)) {
        this.restoredState_1 = null;
      }
      return result;
    }
    return null;
  };
  protoOf(SavedStateRegistry).registerSavedStateProvider_k3a9pp_k$ = function (key, provider) {
    var previous = this.components_1.put_4fpzoq_k$(key, provider);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(previous == null)) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.registerSavedStateProvider.<anonymous>' call
      var message = 'SavedStateProvider with the given key is already registered';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(SavedStateRegistry).getSavedStateProvider_j42zqv_k$ = function (key) {
    var provider = null;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.components_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = tmp1_loop_parameter.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.get_value_j01efc_k$();
      if (k === key) {
        provider = value;
        break $l$loop;
      }
    }
    return provider;
  };
  protoOf(SavedStateRegistry).unregisterSavedStateProvider_j6i07n_k$ = function (key) {
    this.components_1.remove_gppy8k_k$(key);
  };
  protoOf(SavedStateRegistry).performAttach_uagsv1_k$ = function (lifecycle) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.attached_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performAttach.<anonymous>' call
      var message = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = SavedStateRegistry$performAttach$lambda(this);
    lifecycle.addObserver_xhlg3u_k$(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp));
    this.attached_1 = true;
  };
  protoOf(SavedStateRegistry).performRestore_ofzwqf_k$ = function (savedState) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.attached_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message = 'You must call performAttach() before calling performRestore(Bundle).';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.isRestored_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message_0 = 'SavedStateRegistry was already restored.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    tmp.restoredState_1 = savedState == null ? null : savedState.getBundle_4qisc1_k$('androidx.lifecycle.BundlableSavedStateRegistry.key');
    this.isRestored_1 = true;
  };
  protoOf(SavedStateRegistry).performSave_f96ujx_k$ = function (outBundle) {
    var components = Bundle_init_$Create$();
    var tmp0_safe_receiver = this.restoredState_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      components.putAll_w596ud_k$(tmp0_safe_receiver);
    }
    // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = this.components_1.get_keys_wop4xp_k$();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.contains_aljjnj_k$(element)) {
          destination.add_utx5q5_k$(element);
        }
      }
      var keys = destination;
      if (keys.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var tmp0_iterator_0 = keys.iterator_jk1svi_k$();
      $l$loop_0: while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var key = tmp0_iterator_0.next_20eer_k$();
        var tmp1_elvis_lhs = this.components_1.get_wei43m_k$(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        // Inline function 'androidx.savedstate.SavedStateRegistry.performSave.<anonymous>' call
        components.putBundle_yus54s_k$(key, value.saveState_2v0z6c_k$());
        visited.add_utx5q5_k$(key);
      }
    }
    if (!components.isEmpty_y1axqb_k$()) {
      outBundle.putBundle_yus54s_k$('androidx.lifecycle.BundlableSavedStateRegistry.key', components);
    }
  };
  function platformPerformAttach(owner) {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedStateProvider;
  _.$_$.b = SavedStateRegistryOwner;
  _.$_$.c = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-savedstate-savedstate.js.map
