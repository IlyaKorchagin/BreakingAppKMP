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
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var toString = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var equals = kotlin_kotlin.$_$.od;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var isInterface = kotlin_kotlin.$_$.oe;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.xd;
  var VOID = kotlin_kotlin.$_$.j;
  var Event_ON_STOP_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.g;
  var Event_ON_START_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForInterface(SavedStateProvider, 'SavedStateProvider');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  //endregion
  function Companion() {
  }
  protoOf(Companion).e4e = function (owner) {
    return new SavedStateRegistryController(owner);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function SavedStateRegistryController(owner) {
    this.f4e_1 = owner;
    this.g4e_1 = new SavedStateRegistry();
    this.h4e_1 = false;
  }
  protoOf(SavedStateRegistryController).i4e = function () {
    var lifecycle = this.f4e_1.j4e();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!lifecycle.w4b().equals(State_INITIALIZED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performAttach.<anonymous>' call
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    platformPerformAttach(this.f4e_1);
    this.g4e_1.p4e(lifecycle);
    this.h4e_1 = true;
  };
  protoOf(SavedStateRegistryController).q4e = function (savedState) {
    if (!this.h4e_1) {
      this.i4e();
    }
    var lifecycle = this.f4e_1.j4e();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!lifecycle.w4b().s4b(State_STARTED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performRestore.<anonymous>' call
      var message = 'performRestore cannot be called when owner is ' + lifecycle.w4b().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.g4e_1.r4e(savedState);
  };
  protoOf(SavedStateRegistryController).s4e = function (outBundle) {
    this.g4e_1.t4e(outBundle);
  };
  function SavedStateProvider() {
  }
  function Companion_0() {
    this.v4e_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.w4e_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).k4b = function (source, event) {
    return this.w4e_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).x3 = function () {
    return this.w4e_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
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
    return hashCode(this.x3());
  };
  function SavedStateRegistry$performAttach$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.o4e_1 = true;
        tmp = Unit_instance;
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.o4e_1 = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SavedStateRegistry() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.k4e_1 = LinkedHashMap_init_$Create$();
    this.l4e_1 = false;
    this.m4e_1 = null;
    this.n4e_1 = false;
    this.o4e_1 = true;
  }
  protoOf(SavedStateRegistry).x4e = function (key) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.n4e_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.consumeRestoredStateForKey.<anonymous>' call
      var message = 'You can consumeRestoredStateForKey only after super.onCreate of corresponding component';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!(this.m4e_1 == null)) {
      var tmp0_safe_receiver = this.m4e_1;
      var result = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y4d(key);
      var tmp1_safe_receiver = this.m4e_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.s4c(key);
      }
      var tmp2_safe_receiver = this.m4e_1;
      if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j()) === false)) {
        this.m4e_1 = null;
      }
      return result;
    }
    return null;
  };
  protoOf(SavedStateRegistry).y4e = function (key, provider) {
    var previous = this.k4e_1.k2(key, provider);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(previous == null)) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.registerSavedStateProvider.<anonymous>' call
      var message = 'SavedStateProvider with the given key is already registered';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(SavedStateRegistry).z4e = function (key) {
    var provider = null;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.k4e_1.a1().m();
    $l$loop: while (tmp0_iterator.n()) {
      var tmp1_loop_parameter = tmp0_iterator.o();
      // Inline function 'kotlin.collections.component1' call
      var k = tmp1_loop_parameter.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.c1();
      if (k === key) {
        provider = value;
        break $l$loop;
      }
    }
    return provider;
  };
  protoOf(SavedStateRegistry).p4e = function (lifecycle) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.l4e_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performAttach.<anonymous>' call
      var message = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = SavedStateRegistry$performAttach$lambda(this);
    lifecycle.u4b(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp));
    this.l4e_1 = true;
  };
  protoOf(SavedStateRegistry).r4e = function (savedState) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.l4e_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message = 'You must call performAttach() before calling performRestore(Bundle).';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.n4e_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message_0 = 'SavedStateRegistry was already restored.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    tmp.m4e_1 = savedState == null ? null : savedState.y4d('androidx.lifecycle.BundlableSavedStateRegistry.key');
    this.n4e_1 = true;
  };
  protoOf(SavedStateRegistry).t4e = function (outBundle) {
    var components = Bundle_init_$Create$();
    var tmp0_safe_receiver = this.m4e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      components.u4c(tmp0_safe_receiver);
    }
    // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = this.k4e_1.o2();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.v(element)) {
          destination.e(element);
        }
      }
      var keys = destination;
      if (keys.j()) {
        break $l$loop;
      }
      var tmp0_iterator_0 = keys.m();
      $l$loop_0: while (tmp0_iterator_0.n()) {
        var key = tmp0_iterator_0.o();
        var tmp1_elvis_lhs = this.k4e_1.s2(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        // Inline function 'androidx.savedstate.SavedStateRegistry.performSave.<anonymous>' call
        components.f4d(key, value.u4e());
        visited.e(key);
      }
    }
    if (!components.j()) {
      outBundle.f4d('androidx.lifecycle.BundlableSavedStateRegistry.key', components);
    }
  };
  function platformPerformAttach(owner) {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedStateProvider;
  _.$_$.b = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-savedstate-savedstate.js.map
