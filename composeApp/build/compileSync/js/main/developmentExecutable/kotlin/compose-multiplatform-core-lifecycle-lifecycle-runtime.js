(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yh;
  var objectCreate = kotlin_kotlin.$_$.xh;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var toString = kotlin_kotlin.$_$.op;
  var toString_0 = kotlin_kotlin.$_$.ci;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var first = kotlin_kotlin.$_$.na;
  var last = kotlin_kotlin.$_$.nb;
  var toList = kotlin_kotlin.$_$.ud;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var KtMap = kotlin_kotlin.$_$.m7;
  var isInterface = kotlin_kotlin.$_$.gh;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.o;
  var reversed = kotlin_kotlin.$_$.qc;
  var lastOrNull = kotlin_kotlin.$_$.jb;
  var Lifecycling_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.p;
  var ensureNotNull = kotlin_kotlin.$_$.to;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.rg;
  var Lifecycle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.c;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var VOID = kotlin_kotlin.$_$.i;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function _set_lifecycleObserver__xhbbz9($this, _set____db54di) {
    $this.lifecycleObserver_1 = _set____db54di;
  }
  function _get_lifecycleObserver__brifox($this) {
    return $this.lifecycleObserver_1;
  }
  function _get_enforceMainThread__q5vxos($this) {
    return $this.enforceMainThread_1;
  }
  function _set_observerMap__9dzsv5($this, _set____db54di) {
    $this.observerMap_1 = _set____db54di;
  }
  function _get_observerMap__kwedgr($this) {
    return $this.observerMap_1;
  }
  function _set_state__ks53v8($this, _set____db54di) {
    $this.state_1 = _set____db54di;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get_lifecycleOwner__2mqcw2($this) {
    return $this.lifecycleOwner_1;
  }
  function _set_addingObserverCounter__i7ol1c($this, _set____db54di) {
    $this.addingObserverCounter_1 = _set____db54di;
  }
  function _get_addingObserverCounter__c228lo($this) {
    return $this.addingObserverCounter_1;
  }
  function _set_handlingEvent__f3o6y8($this, _set____db54di) {
    $this.handlingEvent_1 = _set____db54di;
  }
  function _get_handlingEvent__43bk4($this) {
    return $this.handlingEvent_1;
  }
  function _set_newEventOccurred__wbal5k($this, _set____db54di) {
    $this.newEventOccurred_1 = _set____db54di;
  }
  function _get_newEventOccurred__9mp7qs($this) {
    return $this.newEventOccurred_1;
  }
  function _set_parentStates__rvr72j($this, _set____db54di) {
    $this.parentStates_1 = _set____db54di;
  }
  function _get_parentStates__rlm4ch($this) {
    return $this.parentStates_1;
  }
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function _get__currentStateFlow__l7oor8($this) {
    return $this._currentStateFlow_1;
  }
  function moveToState($this, next) {
    if ($this.state_1.equals(next)) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!($this.state_1.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance()))) {
      // Inline function 'androidx.lifecycle.LifecycleRegistry.moveToState.<anonymous>' call
      var message = 'State must be at least CREATED to move to ' + next.toString() + ', but was ' + $this.state_1.toString() + ' in component ' + toString($this.lifecycleOwner_1.get_26vq_k$());
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    $this.state_1 = next;
    if ($this.handlingEvent_1 || !($this.addingObserverCounter_1 === 0)) {
      $this.newEventOccurred_1 = true;
      return Unit_getInstance();
    }
    $this.handlingEvent_1 = true;
    sync($this);
    $this.handlingEvent_1 = false;
    if ($this.state_1.equals(State_DESTROYED_getInstance())) {
      var tmp = $this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.observerMap_1 = LinkedHashMap_init_$Create$();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.observerMap_1.isEmpty_y1axqb_k$()) {
      return true;
    }
    var eldestObserverState = first($this.observerMap_1.get_values_ksazhn_k$()).state_1;
    var newestObserverState = last($this.observerMap_1.get_values_ksazhn_k$()).state_1;
    return eldestObserverState.equals(newestObserverState) && $this.state_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.LifecycleRegistry.calculateTargetState.<anonymous>' call
    var it = toList($this.observerMap_1.get_keys_wop4xp_k$());
    var index = it.indexOf_si1fv9_k$(observer);
    var tmp;
    if (index > 0) {
      var tmp0_safe_receiver = $this.observerMap_1.get_wei43m_k$(it.get_c1px32_k$(index - 1 | 0));
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    } else {
      tmp = null;
    }
    var siblingState = tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.parentStates_1.isEmpty_y1axqb_k$()) {
      tmp_0 = $this.parentStates_1.get_c1px32_k$($this.parentStates_1.get_size_woubt6_k$() - 1 | 0);
    } else {
      tmp_0 = null;
    }
    var parentState = tmp_0;
    return Companion_getInstance_0().min_7dbt4k_k$(Companion_getInstance_0().min_7dbt4k_k$($this.state_1, siblingState), parentState);
  }
  function popParentState($this) {
    $this.parentStates_1.removeAt_6niowx_k$($this.parentStates_1.get_size_woubt6_k$() - 1 | 0);
  }
  function pushParentState($this, state) {
    $this.parentStates_1.add_utx5q5_k$(state);
  }
  function forwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.newEventOccurred_1) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = $this.observerMap_1.get_keys_wop4xp_k$();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.contains_aljjnj_k$(element)) {
          destination.add_utx5q5_k$(element);
        }
      }
      var keys = destination;
      if (keys.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var tmp0_iterator_0 = keys.iterator_jk1svi_k$();
      $l$loop_1: while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var key = tmp0_iterator_0.next_20eer_k$();
        if ($this.newEventOccurred_1) {
          break $l$loop_1;
        }
        var tmp1_elvis_lhs = $this.observerMap_1.get_wei43m_k$(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forwardPass.<anonymous>' call
        $l$loop_2: while (true) {
          var tmp_0;
          if (value.state_1.compareTo_30rs7w_k$($this.state_1) < 0 && !$this.newEventOccurred_1) {
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_1 = $this.observerMap_1;
            tmp_0 = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$(key);
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop_2;
          }
          pushParentState($this, value.state_1);
          var tmp0_elvis_lhs = Companion_getInstance().upFrom_qzigd5_k$(value.state_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('no event up from ' + value.state_1.toString());
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          var event = tmp_1;
          value.dispatchEvent_khas59_k$(lifecycleOwner, event);
          popParentState($this);
        }
        visited.add_utx5q5_k$(key);
      }
    }
  }
  function backwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverReversed' call
    var keys = reversed($this.observerMap_1.get_keys_wop4xp_k$());
    var tmp0_iterator = keys.iterator_jk1svi_k$();
    $l$loop_0: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var key = tmp0_iterator.next_20eer_k$();
      if ($this.newEventOccurred_1) {
        break $l$loop_0;
      }
      var tmp1_elvis_lhs = $this.observerMap_1.get_wei43m_k$(key);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var value = tmp;
      // Inline function 'androidx.lifecycle.LifecycleRegistry.backwardPass.<anonymous>' call
      $l$loop_1: while (true) {
        var tmp_0;
        if (value.state_1.compareTo_30rs7w_k$($this.state_1) > 0 && !$this.newEventOccurred_1) {
          // Inline function 'kotlin.collections.contains' call
          // Inline function 'kotlin.collections.containsKey' call
          var this_0 = $this.observerMap_1;
          tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs = Companion_getInstance().downFrom_nwe7y8_k$(value.state_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('no event down from ' + value.state_1.toString());
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var event = tmp_1;
        pushParentState($this, event.get_targetState_kri3mx_k$());
        value.dispatchEvent_khas59_k$(lifecycleOwner, event);
        popParentState($this);
      }
    }
  }
  function forEachObserverWithAdditions($this, block) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.newEventOccurred_1) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = $this.observerMap_1.get_keys_wop4xp_k$();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.contains_aljjnj_k$(element)) {
          destination.add_utx5q5_k$(element);
        }
      }
      var keys = destination;
      if (keys.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var tmp0_iterator_0 = keys.iterator_jk1svi_k$();
      $l$loop_1: while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var key = tmp0_iterator_0.next_20eer_k$();
        if ($this.newEventOccurred_1) {
          break $l$loop_1;
        }
        var tmp1_elvis_lhs = $this.observerMap_1.get_wei43m_k$(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        block(key, value);
        visited.add_utx5q5_k$(key);
      }
    }
  }
  function forEachObserverReversed($this, block) {
    var keys = reversed($this.observerMap_1.get_keys_wop4xp_k$());
    var tmp0_iterator = keys.iterator_jk1svi_k$();
    $l$loop_0: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var key = tmp0_iterator.next_20eer_k$();
      if ($this.newEventOccurred_1) {
        break $l$loop_0;
      }
      var tmp1_elvis_lhs = $this.observerMap_1.get_wei43m_k$(key);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var value = tmp;
      block(key, value);
    }
  }
  function sync($this) {
    var tmp0_elvis_lhs = $this.lifecycleOwner_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.newEventOccurred_1 = false;
      if ($this.state_1.compareTo_30rs7w_k$(first($this.observerMap_1.get_values_ksazhn_k$()).state_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = lastOrNull($this.observerMap_1.get_values_ksazhn_k$());
      if (!$this.newEventOccurred_1 && !(newest == null) && $this.state_1.compareTo_30rs7w_k$(newest.state_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.newEventOccurred_1 = false;
    $this._currentStateFlow_1.set_value_v1vabv_k$($this.get_currentState_snihnl_k$());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.enforceMainThread_1) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isMainThread()) {
        // Inline function 'androidx.lifecycle.LifecycleRegistry.enforceMainThreadIfNeeded.<anonymous>' call
        var message = 'Method ' + methodName + ' must be called on the main thread';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
  }
  function ObserverWithState(observer, initialState) {
    this.lifecycleObserver_1 = Lifecycling_getInstance().lifecycleEventObserver_pvwem0_k$(ensureNotNull(observer));
    this.state_1 = initialState;
  }
  protoOf(ObserverWithState).set_state_m4vg9k_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(ObserverWithState).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(ObserverWithState).dispatchEvent_khas59_k$ = function (owner, event) {
    var newState = event.get_targetState_kri3mx_k$();
    this.state_1 = Companion_getInstance_0().min_7dbt4k_k$(this.state_1, newState);
    this.lifecycleObserver_1.onStateChanged_3qr65s_k$(ensureNotNull(owner), event);
    this.state_1 = newState;
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).createUnsafe_8zlsyc_k$ = function (owner) {
    return new LifecycleRegistry(owner, false);
  };
  protoOf(Companion).min_7dbt4k_k$ = function (state1, state2) {
    return !(state2 == null) && state2.compareTo_30rs7w_k$(state1) < 0 ? state2 : state1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Companion_getInstance_0();
    Lifecycle.call(this);
    this.enforceMainThread_1 = enforceMainThread;
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.observerMap_1 = LinkedHashMap_init_$Create$();
    this.state_1 = State_INITIALIZED_getInstance();
    this.addingObserverCounter_1 = 0;
    this.handlingEvent_1 = false;
    this.newEventOccurred_1 = false;
    this.parentStates_1 = ArrayList_init_$Create$();
    this.lifecycleOwner_1 = new WeakReference(provider);
    this._currentStateFlow_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(LifecycleRegistry).set_currentState_4q36uf_k$ = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).get_currentState_snihnl_k$ = function () {
    return this.state_1;
  };
  protoOf(LifecycleRegistry).get_currentStateFlow_8lod67_k$ = function () {
    return asStateFlow(this._currentStateFlow_1);
  };
  protoOf(LifecycleRegistry).handleLifecycleEvent_yoinvo_k$ = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.get_targetState_kri3mx_k$());
  };
  protoOf(LifecycleRegistry).addObserver_xhlg3u_k$ = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.state_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.observerMap_1.put_4fpzoq_k$(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.lifecycleOwner_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.addingObserverCounter_1 === 0) || this.handlingEvent_1;
    var targetState = calculateTargetState(this, observer);
    this.addingObserverCounter_1 = this.addingObserverCounter_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp_0;
      if (statefulObserver.state_1.compareTo_30rs7w_k$(targetState) < 0) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.observerMap_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(observer);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      pushParentState(this, statefulObserver.state_1);
      var tmp3_elvis_lhs = Companion_getInstance().upFrom_qzigd5_k$(statefulObserver.state_1);
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.state_1.toString());
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
      var event = tmp_1;
      statefulObserver.dispatchEvent_khas59_k$(lifecycleOwner, event);
      popParentState(this);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.addingObserverCounter_1 = this.addingObserverCounter_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).removeObserver_thdcdj_k$ = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.observerMap_1.remove_gppy8k_k$(observer);
  };
  protoOf(LifecycleRegistry).get_observerCount_bk9968_k$ = function () {
    enforceMainThreadIfNeeded(this, 'getObserverCount');
    return this.observerMap_1.get_size_woubt6_k$();
  };
  function isMainThread() {
    return true;
  }
  function _get_reference__19y5ba($this) {
    return $this.reference_1;
  }
  function WeakReference(reference) {
    this.reference_1 = reference;
  }
  protoOf(WeakReference).get_26vq_k$ = function () {
    return this.reference_1;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LifecycleRegistry_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime.js.map
