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
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var toString = kotlin_kotlin.$_$.rk;
  var toString_0 = kotlin_kotlin.$_$.le;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var first = kotlin_kotlin.$_$.l8;
  var last = kotlin_kotlin.$_$.j9;
  var toList = kotlin_kotlin.$_$.wa;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var KtMap = kotlin_kotlin.$_$.o6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var Companion_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var reversed = kotlin_kotlin.$_$.ia;
  var lastOrNull = kotlin_kotlin.$_$.f9;
  var Lifecycling_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var Lifecycle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.b;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var VOID = kotlin_kotlin.$_$.i;
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
    if ($this.s45_1.equals(next)) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!($this.s45_1.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance()))) {
      // Inline function 'androidx.lifecycle.LifecycleRegistry.moveToState.<anonymous>' call
      var message = 'State must be at least CREATED to move to ' + next.toString() + ', but was ' + $this.s45_1.toString() + ' in component ' + toString($this.t45_1.zp());
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    $this.s45_1 = next;
    if ($this.v45_1 || !($this.u45_1 === 0)) {
      $this.w45_1 = true;
      return Unit_instance;
    }
    $this.v45_1 = true;
    sync($this);
    $this.v45_1 = false;
    if ($this.s45_1.equals(State_DESTROYED_getInstance())) {
      var tmp = $this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.r45_1 = LinkedHashMap_init_$Create$();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.r45_1.q()) {
      return true;
    }
    var eldestObserverState = first($this.r45_1.k2()).a46_1;
    var newestObserverState = last($this.r45_1.k2()).a46_1;
    return eldestObserverState.equals(newestObserverState) && $this.s45_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.LifecycleRegistry.calculateTargetState.<anonymous>' call
    var it = toList($this.r45_1.j2());
    var index = it.r(observer);
    var tmp;
    if (index > 0) {
      var tmp0_safe_receiver = $this.r45_1.n2(it.o(index - 1 | 0));
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a46_1;
    } else {
      tmp = null;
    }
    var siblingState = tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.x45_1.q()) {
      tmp_0 = $this.x45_1.o($this.x45_1.j() - 1 | 0);
    } else {
      tmp_0 = null;
    }
    var parentState = tmp_0;
    return Companion_instance_0.c46(Companion_instance_0.c46($this.s45_1, siblingState), parentState);
  }
  function popParentState($this) {
    $this.x45_1.s2($this.x45_1.j() - 1 | 0);
  }
  function pushParentState($this, state) {
    $this.x45_1.e(state);
  }
  function forwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.w45_1) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = $this.r45_1.j2();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.p(element)) {
          destination.e(element);
        }
      }
      var keys = destination;
      if (keys.q()) {
        break $l$loop;
      }
      var tmp0_iterator_0 = keys.g();
      $l$loop_1: while (tmp0_iterator_0.h()) {
        var key = tmp0_iterator_0.i();
        if ($this.w45_1) {
          break $l$loop_1;
        }
        var tmp1_elvis_lhs = $this.r45_1.n2(key);
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
          if (value.a46_1.v2($this.s45_1) < 0 && !$this.w45_1) {
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_1 = $this.r45_1;
            tmp_0 = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).l2(key);
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop_2;
          }
          pushParentState($this, value.a46_1);
          var tmp0_elvis_lhs = Companion_instance.c45(value.a46_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('no event up from ' + value.a46_1.toString());
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          var event = tmp_1;
          value.d46(lifecycleOwner, event);
          popParentState($this);
        }
        visited.e(key);
      }
    }
  }
  function backwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverReversed' call
    var keys = reversed($this.r45_1.j2());
    var tmp0_iterator = keys.g();
    $l$loop_0: while (tmp0_iterator.h()) {
      var key = tmp0_iterator.i();
      if ($this.w45_1) {
        break $l$loop_0;
      }
      var tmp1_elvis_lhs = $this.r45_1.n2(key);
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
        if (value.a46_1.v2($this.s45_1) > 0 && !$this.w45_1) {
          // Inline function 'kotlin.collections.contains' call
          // Inline function 'kotlin.collections.containsKey' call
          var this_0 = $this.r45_1;
          tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(key);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs = Companion_instance.b45(value.a46_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('no event down from ' + value.a46_1.toString());
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var event = tmp_1;
        pushParentState($this, event.f45());
        value.d46(lifecycleOwner, event);
        popParentState($this);
      }
    }
  }
  function sync($this) {
    var tmp0_elvis_lhs = $this.t45_1.zp();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.w45_1 = false;
      if ($this.s45_1.v2(first($this.r45_1.k2()).a46_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = lastOrNull($this.r45_1.k2());
      if (!$this.w45_1 && !(newest == null) && $this.s45_1.v2(newest.a46_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.w45_1 = false;
    $this.y45_1.n1v($this.m45());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.q45_1) {
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
    this.b46_1 = Lifecycling_instance.o45(ensureNotNull(observer));
    this.a46_1 = initialState;
  }
  protoOf(ObserverWithState).d46 = function (owner, event) {
    var newState = event.f45();
    this.a46_1 = Companion_instance_0.c46(this.a46_1, newState);
    this.b46_1.a45(ensureNotNull(owner), event);
    this.a46_1 = newState;
  };
  function Companion() {
  }
  protoOf(Companion).c46 = function (state1, state2) {
    return !(state2 == null) && state2.v2(state1) < 0 ? state2 : state1;
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Lifecycle.call(this);
    this.q45_1 = enforceMainThread;
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.r45_1 = LinkedHashMap_init_$Create$();
    this.s45_1 = State_INITIALIZED_getInstance();
    this.u45_1 = 0;
    this.v45_1 = false;
    this.w45_1 = false;
    this.x45_1 = ArrayList_init_$Create$();
    this.t45_1 = new WeakReference(provider);
    this.y45_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(LifecycleRegistry).e46 = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).m45 = function () {
    return this.s45_1;
  };
  protoOf(LifecycleRegistry).f46 = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.f45());
  };
  protoOf(LifecycleRegistry).k45 = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.s45_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.r45_1.f2(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.t45_1.zp();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.u45_1 === 0) || this.v45_1;
    var targetState = calculateTargetState(this, observer);
    this.u45_1 = this.u45_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp_0;
      if (statefulObserver.a46_1.v2(targetState) < 0) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.r45_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(observer);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      pushParentState(this, statefulObserver.a46_1);
      var tmp3_elvis_lhs = Companion_instance.c45(statefulObserver.a46_1);
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.a46_1.toString());
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
      var event = tmp_1;
      statefulObserver.d46(lifecycleOwner, event);
      popParentState(this);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.u45_1 = this.u45_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).l45 = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.r45_1.g2(observer);
  };
  function isMainThread() {
    return true;
  }
  function WeakReference(reference) {
    this.z45_1 = reference;
  }
  protoOf(WeakReference).zp = function () {
    return this.z45_1;
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
