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
  var protoOf = kotlin_kotlin.$_$.ff;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var toString = kotlin_kotlin.$_$.cm;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var first = kotlin_kotlin.$_$.z8;
  var last = kotlin_kotlin.$_$.y9;
  var toList = kotlin_kotlin.$_$.rb;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var KtMap = kotlin_kotlin.$_$.y6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var Companion_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var reversed = kotlin_kotlin.$_$.za;
  var lastOrNull = kotlin_kotlin.$_$.u9;
  var Lifecycling_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var Lifecycle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.b;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var VOID = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function moveToState($this, next) {
    if ($this.c4c_1.equals(next)) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!($this.c4c_1.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance()))) {
      // Inline function 'androidx.lifecycle.LifecycleRegistry.moveToState.<anonymous>' call
      var message = 'State must be at least CREATED to move to ' + next.toString() + ', but was ' + $this.c4c_1.toString() + ' in component ' + toString($this.d4c_1.dq());
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    $this.c4c_1 = next;
    if ($this.f4c_1 || !($this.e4c_1 === 0)) {
      $this.g4c_1 = true;
      return Unit_instance;
    }
    $this.f4c_1 = true;
    sync($this);
    $this.f4c_1 = false;
    if ($this.c4c_1.equals(State_DESTROYED_getInstance())) {
      var tmp = $this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.b4c_1 = LinkedHashMap_init_$Create$();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.b4c_1.j()) {
      return true;
    }
    var eldestObserverState = first($this.b4c_1.p2()).k4c_1;
    var newestObserverState = last($this.b4c_1.p2()).k4c_1;
    return eldestObserverState.equals(newestObserverState) && $this.c4c_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.LifecycleRegistry.calculateTargetState.<anonymous>' call
    var it = toList($this.b4c_1.o2());
    var index = it.x(observer);
    var tmp;
    if (index > 0) {
      var tmp0_safe_receiver = $this.b4c_1.s2(it.u(index - 1 | 0));
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k4c_1;
    } else {
      tmp = null;
    }
    var siblingState = tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.h4c_1.j()) {
      tmp_0 = $this.h4c_1.u($this.h4c_1.p() - 1 | 0);
    } else {
      tmp_0 = null;
    }
    var parentState = tmp_0;
    return Companion_instance_0.m4c(Companion_instance_0.m4c($this.c4c_1, siblingState), parentState);
  }
  function popParentState($this) {
    $this.h4c_1.x2($this.h4c_1.p() - 1 | 0);
  }
  function pushParentState($this, state) {
    $this.h4c_1.e(state);
  }
  function forwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.g4c_1) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = $this.b4c_1.o2();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.v(element)) {
          destination.e(element);
        }
      }
      var keys = destination;
      if (keys.j()) {
        break $l$loop;
      }
      var tmp0_iterator_0 = keys.m();
      $l$loop_1: while (tmp0_iterator_0.n()) {
        var key = tmp0_iterator_0.o();
        if ($this.g4c_1) {
          break $l$loop_1;
        }
        var tmp1_elvis_lhs = $this.b4c_1.s2(key);
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
          if (value.k4c_1.a3($this.c4c_1) < 0 && !$this.g4c_1) {
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_1 = $this.b4c_1;
            tmp_0 = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).q2(key);
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop_2;
          }
          pushParentState($this, value.k4c_1);
          var tmp0_elvis_lhs = Companion_instance.m4b(value.k4c_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('no event up from ' + value.k4c_1.toString());
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          var event = tmp_1;
          value.n4c(lifecycleOwner, event);
          popParentState($this);
        }
        visited.e(key);
      }
    }
  }
  function backwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverReversed' call
    var keys = reversed($this.b4c_1.o2());
    var tmp0_iterator = keys.m();
    $l$loop_0: while (tmp0_iterator.n()) {
      var key = tmp0_iterator.o();
      if ($this.g4c_1) {
        break $l$loop_0;
      }
      var tmp1_elvis_lhs = $this.b4c_1.s2(key);
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
        if (value.k4c_1.a3($this.c4c_1) > 0 && !$this.g4c_1) {
          // Inline function 'kotlin.collections.contains' call
          // Inline function 'kotlin.collections.containsKey' call
          var this_0 = $this.b4c_1;
          tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q2(key);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs = Companion_instance.l4b(value.k4c_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('no event down from ' + value.k4c_1.toString());
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var event = tmp_1;
        pushParentState($this, event.p4b());
        value.n4c(lifecycleOwner, event);
        popParentState($this);
      }
    }
  }
  function sync($this) {
    var tmp0_elvis_lhs = $this.d4c_1.dq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.g4c_1 = false;
      if ($this.c4c_1.a3(first($this.b4c_1.p2()).k4c_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = lastOrNull($this.b4c_1.p2());
      if (!$this.g4c_1 && !(newest == null) && $this.c4c_1.a3(newest.k4c_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.g4c_1 = false;
    $this.i4c_1.a1y($this.w4b());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.a4c_1) {
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
    this.l4c_1 = Lifecycling_instance.y4b(ensureNotNull(observer));
    this.k4c_1 = initialState;
  }
  protoOf(ObserverWithState).n4c = function (owner, event) {
    var newState = event.p4b();
    this.k4c_1 = Companion_instance_0.m4c(this.k4c_1, newState);
    this.l4c_1.k4b(ensureNotNull(owner), event);
    this.k4c_1 = newState;
  };
  function Companion() {
  }
  protoOf(Companion).m4c = function (state1, state2) {
    return !(state2 == null) && state2.a3(state1) < 0 ? state2 : state1;
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Lifecycle.call(this);
    this.a4c_1 = enforceMainThread;
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.b4c_1 = LinkedHashMap_init_$Create$();
    this.c4c_1 = State_INITIALIZED_getInstance();
    this.e4c_1 = 0;
    this.f4c_1 = false;
    this.g4c_1 = false;
    this.h4c_1 = ArrayList_init_$Create$();
    this.d4c_1 = new WeakReference(provider);
    this.i4c_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(LifecycleRegistry).o4c = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).w4b = function () {
    return this.c4c_1;
  };
  protoOf(LifecycleRegistry).p4c = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.p4b());
  };
  protoOf(LifecycleRegistry).u4b = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.c4c_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.b4c_1.k2(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.d4c_1.dq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.e4c_1 === 0) || this.f4c_1;
    var targetState = calculateTargetState(this, observer);
    this.e4c_1 = this.e4c_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp_0;
      if (statefulObserver.k4c_1.a3(targetState) < 0) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.b4c_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q2(observer);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      pushParentState(this, statefulObserver.k4c_1);
      var tmp3_elvis_lhs = Companion_instance.m4b(statefulObserver.k4c_1);
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.k4c_1.toString());
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
      var event = tmp_1;
      statefulObserver.n4c(lifecycleOwner, event);
      popParentState(this);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.e4c_1 = this.e4c_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).v4b = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.b4c_1.l2(observer);
  };
  function isMainThread() {
    return true;
  }
  function WeakReference(reference) {
    this.j4c_1 = reference;
  }
  protoOf(WeakReference).dq = function () {
    return this.j4c_1;
  };
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LifecycleRegistry_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime.js.map
