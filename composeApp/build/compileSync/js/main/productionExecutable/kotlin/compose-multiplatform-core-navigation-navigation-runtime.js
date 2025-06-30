(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-core-core-bundle.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-navigation-navigation-common.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-core-core-uri.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-core-core-bundle.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-navigation-navigation-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-core-core-uri.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-navigation-navigation-common' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-uri'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-core-core-uri' was not found. Please, check whether 'compose-multiplatform-core-core-core-uri' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-runtime'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-runtime'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-core-core-uri'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_kotlin, kotlin_org_jetbrains_androidx_navigation_navigation_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_core_core_uri, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var protoOf = kotlin_kotlin.$_$.ff;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var Companion_instance = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.q;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var toString = kotlin_kotlin.$_$.cm;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var hashCode = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var NavigatorState = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var println = kotlin_kotlin.$_$.ad;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var Collection = kotlin_kotlin.$_$.q6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var VOID = kotlin_kotlin.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var reversed = kotlin_kotlin.$_$.za;
  var Companion_instance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.s;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.q;
  var generateSequence = kotlin_kotlin.$_$.vg;
  var takeWhile = kotlin_kotlin.$_$.bh;
  var removeLast = kotlin_kotlin.$_$.ya;
  var navOptions = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.k;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.g;
  var checkCountOverflow = kotlin_kotlin.$_$.o7;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var generateHashCode = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var mapCapacity = kotlin_kotlin.$_$.ea;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var generateRouteWithArgs = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.b;
  var listOf = kotlin_kotlin.$_$.ca;
  var Companion_instance_1 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.t;
  var map = kotlin_kotlin.$_$.yg;
  var toList = kotlin_kotlin.$_$.ch;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var get_lastIndex = kotlin_kotlin.$_$.r9;
  var NavBackStackEntry_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.l;
  var removeAll = kotlin_kotlin.$_$.ta;
  var KtMutableMap = kotlin_kotlin.$_$.c7;
  var lastOrNull = kotlin_kotlin.$_$.v9;
  var last = kotlin_kotlin.$_$.x9;
  var mutableListOf = kotlin_kotlin.$_$.ja;
  var first = kotlin_kotlin.$_$.y8;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.c;
  var plus = kotlin_kotlin.$_$.ra;
  var emptyList = kotlin_kotlin.$_$.o8;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var NavigatorProvider = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.h;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.f;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var removeFirst = kotlin_kotlin.$_$.wa;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_RESUMED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var firstOrNull = kotlin_kotlin.$_$.v8;
  var addAll = kotlin_kotlin.$_$.g7;
  var asReversed = kotlin_kotlin.$_$.k7;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.u;
  var Companion_instance_2 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.r;
  var UriUtils_instance = kotlin_org_jetbrains_androidx_core_core_uri.$_$.a;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var checkIndexOverflow = kotlin_kotlin.$_$.p7;
  var filterNotNull = kotlin_kotlin.$_$.u8;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var asSequence = kotlin_kotlin.$_$.rg;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.l;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var StringBuilder = kotlin_kotlin.$_$.eh;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavBackStackEntryState, 'NavBackStackEntryState');
  initMetadataForClass(NavControllerNavigatorState, 'NavControllerNavigatorState', VOID, NavigatorState);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(NavController, 'NavController', NavController);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(NavControllerViewModel, 'NavControllerViewModel', NavControllerViewModel, ViewModel);
  initMetadataForClass(NavHostController, 'NavHostController', NavHostController, NavController);
  initMetadataForClass(AtomicInt, 'AtomicInt');
  //endregion
  function NavBackStackEntryState_init_$Init$(entry, $this) {
    NavBackStackEntryState.call($this, entry.m53_1, entry.i53_1.i55_1, entry.fc(), Bundle_init_$Create$());
    entry.r54($this.k5a_1);
    return $this;
  }
  function NavBackStackEntryState_init_$Create$(entry) {
    return NavBackStackEntryState_init_$Init$(entry, objectCreate(protoOf(NavBackStackEntryState)));
  }
  function Companion() {
    this.l5a_1 = 'NavBackStackEntryState.id';
    this.m5a_1 = 'NavBackStackEntryState.destinationId';
    this.n5a_1 = 'NavBackStackEntryState.args';
    this.o5a_1 = 'NavBackStackEntryState.savedState';
  }
  protoOf(Companion).p5a = function (bundle) {
    if (bundle == null)
      return null;
    var tmp0_elvis_lhs = bundle.x4d('NavBackStackEntryState.id');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var id = tmp;
    var destinationId = bundle.v4d('NavBackStackEntryState.destinationId');
    var args = bundle.y4d('NavBackStackEntryState.args');
    var tmp1_elvis_lhs = bundle.y4d('NavBackStackEntryState.savedState');
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var savedState = tmp_0;
    return new NavBackStackEntryState(id, destinationId, args, savedState);
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  function NavBackStackEntryState(id, destinationId, args, savedState) {
    this.h5a_1 = id;
    this.i5a_1 = destinationId;
    this.j5a_1 = args;
    this.k5a_1 = savedState;
  }
  protoOf(NavBackStackEntryState).q5a = function (destination, hostLifecycleState, viewModel) {
    return Companion_instance.i54(destination, this.j5a_1, hostLifecycleState, viewModel, this.h5a_1, this.k5a_1);
  };
  protoOf(NavBackStackEntryState).r5a = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavBackStackEntryState.toBundle.<anonymous>' call
    this_0.d4d('NavBackStackEntryState.id', this.h5a_1);
    this_0.z4c('NavBackStackEntryState.destinationId', this.i5a_1);
    this_0.f4d('NavBackStackEntryState.args', this.j5a_1);
    this_0.f4d('NavBackStackEntryState.savedState', this.k5a_1);
    return this_0;
  };
  protoOf(NavBackStackEntryState).toString = function () {
    return 'NavBackStackEntryState(id=' + this.h5a_1 + ', destinationId=' + this.i5a_1 + ', args=' + toString(this.j5a_1) + ', savedState=' + this.k5a_1.toString() + ')';
  };
  protoOf(NavBackStackEntryState).hashCode = function () {
    var result = getStringHashCode(this.h5a_1);
    result = imul(result, 31) + this.i5a_1 | 0;
    result = imul(result, 31) + (this.j5a_1 == null ? 0 : hashCode(this.j5a_1)) | 0;
    result = imul(result, 31) + hashCode(this.k5a_1) | 0;
    return result;
  };
  protoOf(NavBackStackEntryState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBackStackEntryState))
      return false;
    var tmp0_other_with_cast = other instanceof NavBackStackEntryState ? other : THROW_CCE();
    if (!(this.h5a_1 === tmp0_other_with_cast.h5a_1))
      return false;
    if (!(this.i5a_1 === tmp0_other_with_cast.i5a_1))
      return false;
    if (!equals(this.j5a_1, tmp0_other_with_cast.j5a_1))
      return false;
    if (!equals(this.k5a_1, tmp0_other_with_cast.k5a_1))
      return false;
    return true;
  };
  function NavController$NavControllerNavigatorState$pop$lambda(this$0, $popUpTo, $saveState) {
    return function () {
      protoOf(NavigatorState).f53.call(this$0, $popUpTo, $saveState);
      return Unit_instance;
    };
  }
  function linkChildToParent($this, child, parent) {
    // Inline function 'kotlin.collections.set' call
    $this.b5b_1.k2(child, parent);
    if ($this.c5b_1.s2(parent) == null) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.c5b_1;
      var value = new AtomicInt(0);
      this_0.k2(parent, value);
    }
    ensureNotNull($this.c5b_1.s2(parent)).u5b();
  }
  function navigateInternal(_this__u8e3s4, $this, entries, navOptions, navigatorExtras, handler) {
    $this.m5b_1 = handler;
    _this__u8e3s4.q58(entries, navOptions, navigatorExtras);
    $this.m5b_1 = null;
  }
  function popBackStackInternal(_this__u8e3s4, $this, popUpTo, saveState, handler) {
    $this.n5b_1 = handler;
    _this__u8e3s4.u58(popUpTo, saveState);
    $this.n5b_1 = null;
  }
  function NavControllerNavigatorState($outer, navigator) {
    this.c5c_1 = $outer;
    NavigatorState.call(this);
    this.b5c_1 = navigator;
  }
  protoOf(NavControllerNavigatorState).c53 = function (backStackEntry) {
    // Inline function 'androidx.navigation.get' call
    var this_0 = this.c5c_1.k5b_1;
    var name = backStackEntry.i53_1.d55_1;
    var destinationNavigator = this_0.o58(name);
    if (equals(destinationNavigator, this.b5c_1)) {
      var handler = this.c5c_1.m5b_1;
      if (!(handler == null)) {
        handler(backStackEntry);
        this.d5c(backStackEntry);
      } else {
        println('Ignoring add of destination ' + backStackEntry.i53_1.toString() + ' ' + 'outside of the call to navigate(). ');
      }
    } else {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var value = this.c5c_1.l5b_1.s2(destinationNavigator);
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.navigation.NavControllerNavigatorState.push.<anonymous>' call
          var message = 'NavigatorBackStack for ' + backStackEntry.i53_1.d55_1 + ' should ' + 'already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$2 = value;
          break $l$block;
        }
      }
      var navigatorBackStack = tmp$ret$2;
      navigatorBackStack.c53(backStackEntry);
    }
  };
  protoOf(NavControllerNavigatorState).d5c = function (backStackEntry) {
    protoOf(NavigatorState).c53.call(this, backStackEntry);
  };
  protoOf(NavControllerNavigatorState).e53 = function (destination, arguments_0) {
    return Companion_instance.j54(destination, arguments_0, this.c5c_1.e5c(), this.c5c_1.g5b_1);
  };
  protoOf(NavControllerNavigatorState).f53 = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.get' call
    var this_0 = this.c5c_1.k5b_1;
    var name = popUpTo.i53_1.d55_1;
    var destinationNavigator = this_0.o58(name);
    // Inline function 'kotlin.collections.set' call
    this.c5c_1.o5b_1.k2(popUpTo, saveState);
    if (equals(destinationNavigator, this.b5c_1)) {
      var handler = this.c5c_1.n5b_1;
      if (!(handler == null)) {
        handler(popUpTo);
        protoOf(NavigatorState).f53.call(this, popUpTo, saveState);
      } else {
        this.c5c_1.f5c(popUpTo, NavController$NavControllerNavigatorState$pop$lambda(this, popUpTo, saveState));
      }
    } else {
      ensureNotNull(this.c5c_1.l5b_1.s2(destinationNavigator)).f53(popUpTo, saveState);
    }
  };
  protoOf(NavControllerNavigatorState).g53 = function (popUpTo, saveState) {
    protoOf(NavigatorState).g53.call(this, popUpTo, saveState);
  };
  protoOf(NavControllerNavigatorState).u53 = function (entry) {
    var savedState = this.c5c_1.o5b_1.s2(entry) === true;
    protoOf(NavigatorState).u53.call(this, entry);
    this.c5c_1.o5b_1.l2(entry);
    if (!this.c5c_1.w5a_1.v(entry)) {
      this.c5c_1.i5c(entry);
      if (entry.j4e().w4b().s4b(State_CREATED_getInstance())) {
        entry.h54(State_DESTROYED_getInstance());
      }
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var this_0 = this.c5c_1.w5a_1;
        var tmp_0;
        if (isInterface(this_0, Collection)) {
          tmp_0 = this_0.j();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'androidx.navigation.NavControllerNavigatorState.markTransitionComplete.<anonymous>' call
          if (element.m53_1 === entry.m53_1) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0) {
        tmp = !savedState;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp0_safe_receiver = this.c5c_1.g5b_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.l5c(entry.m53_1);
        }
      }
      this.c5c_1.g5c();
      this.c5c_1.z5a_1.v1t(this.c5c_1.h5c());
    } else if (!this.z52_1) {
      this.c5c_1.g5c();
      this.c5c_1.x5a_1.v1t(toMutableList(this.c5c_1.w5a_1));
      this.c5c_1.z5a_1.v1t(this.c5c_1.h5c());
    }
  };
  function popBackStack($this, destinationId, inclusive) {
    return $this.m5c(destinationId, inclusive, false);
  }
  function popBackStackInternal_0($this, destinationId, inclusive, saveState) {
    if ($this.w5a_1.j()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var iterator = reversed($this.w5a_1).m();
    var foundDestination = null;
    $l$loop: while (iterator.n()) {
      var destination = iterator.o().i53_1;
      var navigator = $this.k5b_1.o58(destination.d55_1);
      if (inclusive || !(destination.i55_1 === destinationId)) {
        popOperations.e(navigator);
      }
      if (destination.i55_1 === destinationId) {
        foundDestination = destination;
        break $l$loop;
      }
    }
    if (foundDestination == null) {
      var destinationName = Companion_instance_0.u55(destinationId);
      println('Ignoring popBackStack to destination ' + destinationName + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function popBackStackInternal$default($this, destinationId, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return popBackStackInternal_0($this, destinationId, inclusive, saveState);
  }
  function popBackStackInternal_1($this, route, inclusive, saveState) {
    var finalRoute = generateRouteFilled($this, route);
    return popBackStackInternal_2($this, finalRoute, inclusive, saveState);
  }
  function popBackStackInternal_2($this, route, inclusive, saveState) {
    if ($this.w5a_1.j()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_0 = $this.w5a_1;
      var iterator = this_0.w(this_0.p());
      while (iterator.d5()) {
        var element = iterator.f5();
        // Inline function 'androidx.navigation.NavController.popBackStackInternal.<anonymous>' call
        var hasRoute = element.i53_1.p56(route, element.fc());
        if (inclusive || !hasRoute) {
          var navigator = $this.k5b_1.o58(element.i53_1.d55_1);
          popOperations.e(navigator);
        }
        if (hasRoute) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var foundDestination = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
    if (foundDestination == null) {
      println('Ignoring popBackStack to route ' + route + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function executePopOperations($this, popOperations, foundDestination, inclusive, saveState) {
    var popped = {_v: false};
    var savedState = ArrayDeque_init_$Create$();
    var tmp0_iterator = popOperations.m();
    $l$loop: while (tmp0_iterator.n()) {
      var navigator = tmp0_iterator.o();
      var receivedPop = {_v: false};
      var tmp = $this.w5a_1.ng();
      popBackStackInternal(navigator, $this, tmp, saveState, NavController$executePopOperations$lambda(receivedPop, popped, $this, saveState, savedState));
      if (!receivedPop._v) {
        break $l$loop;
      }
    }
    if (saveState) {
      if (!inclusive) {
        // Inline function 'kotlin.sequences.forEach' call
        var tmp_0 = generateSequence(foundDestination, NavController$executePopOperations$lambda_0);
        var tmp0_iterator_0 = takeWhile(tmp_0, NavController$executePopOperations$lambda_1($this)).m();
        while (tmp0_iterator_0.n()) {
          var element = tmp0_iterator_0.o();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_0 = $this.d5b_1;
          var key = element.i55_1;
          var tmp0_safe_receiver = savedState.mg();
          var value = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h5a_1;
          this_0.k2(key, value);
        }
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!savedState.j()) {
        var firstState = savedState.lg();
        var firstStateDestination = $this.n5c(firstState.i5a_1);
        // Inline function 'kotlin.sequences.forEach' call
        var tmp_1 = generateSequence(firstStateDestination, NavController$executePopOperations$lambda_2);
        var tmp0_iterator_1 = takeWhile(tmp_1, NavController$executePopOperations$lambda_3($this)).m();
        while (tmp0_iterator_1.n()) {
          var element_0 = tmp0_iterator_1.o();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_1 = $this.d5b_1;
          var key_0 = element_0.i55_1;
          var value_0 = firstState.h5a_1;
          this_1.k2(key_0, value_0);
        }
        if ($this.d5b_1.p2().v(firstState.h5a_1)) {
          // Inline function 'kotlin.collections.set' call
          var this_2 = $this.e5b_1;
          var key_1 = firstState.h5a_1;
          this_2.k2(key_1, savedState);
        }
      }
    }
    return popped._v;
  }
  function popEntryFromBackStack($this, popUpTo, saveState, savedState) {
    var entry = $this.w5a_1.ng();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!entry.equals(popUpTo)) {
      // Inline function 'androidx.navigation.NavController.popEntryFromBackStack.<anonymous>' call
      var message = 'Attempted to pop ' + popUpTo.i53_1.toString() + ', which is not the top of the back stack ' + ('(' + entry.i53_1.toString() + ')');
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    removeLast($this.w5a_1);
    var navigator = $this.o5c().o58(entry.i53_1.d55_1);
    var state = $this.l5b_1.s2(navigator);
    var tmp;
    var tmp1_safe_receiver = state == null ? null : state.b53_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c1();
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v(entry)) === true) {
      tmp = true;
    } else {
      tmp = $this.c5b_1.q2(entry);
    }
    var transitioning = tmp;
    if (entry.j4e().w4b().s4b(State_CREATED_getInstance())) {
      if (saveState) {
        entry.h54(State_CREATED_getInstance());
        savedState.pg(NavBackStackEntryState_init_$Create$(entry));
      }
      if (!transitioning) {
        entry.h54(State_DESTROYED_getInstance());
        $this.i5c(entry);
      } else {
        entry.h54(State_CREATED_getInstance());
      }
    }
    if (!saveState && !transitioning) {
      var tmp3_safe_receiver = $this.g5b_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.l5c(entry.m53_1);
      }
    }
  }
  function popEntryFromBackStack$default($this, popUpTo, saveState, savedState, $super) {
    saveState = saveState === VOID ? false : saveState;
    savedState = savedState === VOID ? ArrayDeque_init_$Create$() : savedState;
    return popEntryFromBackStack($this, popUpTo, saveState, savedState);
  }
  function clearBackStackInternal($this, destinationId) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.l5b_1.p2().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element.z52_1 = true;
    }
    var restored = restoreStateInternal($this, destinationId, null, navOptions(NavController$clearBackStackInternal$lambda), null);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = $this.l5b_1.p2().m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element_0.z52_1 = false;
    }
    return restored && popBackStackInternal_0($this, destinationId, true, false);
  }
  function _get_destinationCountOnBackStack__uqfh68($this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = $this.w5a_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavController.<get-destinationCountOnBackStack>.<anonymous>' call
        var tmp_0 = element.i53_1;
        if (!(tmp_0 instanceof NavGraph)) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    return tmp$ret$0;
  }
  function dispatchOnDestinationChanged($this) {
    $l$loop: while (true) {
      var tmp;
      if (!$this.w5a_1.j()) {
        var tmp_0 = $this.w5a_1.ng().i53_1;
        tmp = tmp_0 instanceof NavGraph;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      popEntryFromBackStack$default($this, $this.w5a_1.ng());
    }
    var lastBackStackEntry = $this.w5a_1.og();
    if (!(lastBackStackEntry == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      $this.q5b_1.e(lastBackStackEntry);
    }
    $this.p5b_1 = $this.p5b_1 + 1 | 0;
    $this.g5c();
    $this.p5b_1 = $this.p5b_1 - 1 | 0;
    if ($this.p5b_1 === 0) {
      var dispatchList = toMutableList($this.q5b_1);
      $this.q5b_1.n2();
      var tmp5_iterator = dispatchList.m();
      while (tmp5_iterator.n()) {
        var backStackEntry = tmp5_iterator.o();
        var tmp6_iterator = $this.h5b_1.m();
        while (tmp6_iterator.n()) {
          var listener = tmp6_iterator.o();
          listener.p5c($this, backStackEntry.i53_1, backStackEntry.fc());
        }
        $this.r5b_1.v1t(backStackEntry);
      }
      $this.x5a_1.v1t(toMutableList($this.w5a_1));
      $this.z5a_1.v1t($this.h5c());
    }
    return !(lastBackStackEntry == null);
  }
  function onGraphCreated($this, startDestinationArgs) {
    var tmp0_safe_receiver = $this.t5a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var navigatorNames = tmp0_safe_receiver.z4d('multiplatform-support-nav:controller:navigatorState:names');
      if (!(navigatorNames == null)) {
        var tmp0_iterator = navigatorNames.m();
        while (tmp0_iterator.n()) {
          var name = tmp0_iterator.o();
          var navigator = $this.k5b_1.o58(ensureNotNull(name));
          var bundle = tmp0_safe_receiver.y4d(name);
          if (!(bundle == null)) {
            navigator.x58(bundle);
          }
        }
      }
    }
    var tmp1_safe_receiver = $this.u5a_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_iterator_0 = tmp1_safe_receiver.m();
      while (tmp0_iterator_0.n()) {
        var state = tmp0_iterator_0.o();
        var node = $this.n5c(state.i5a_1);
        if (node == null) {
          var dest = Companion_instance_0.u55(state.i5a_1);
          throw IllegalStateException_init_$Create$('Restoring the Navigation back stack failed: destination ' + dest + ' cannot be ' + ('found from the current destination ' + toString($this.q5c())));
        }
        var entry = state.q5a(node, $this.e5c(), $this.g5b_1);
        var navigator_0 = $this.k5b_1.o58(node.d55_1);
        // Inline function 'kotlin.collections.getOrPut' call
        var this_0 = $this.l5b_1;
        var value = this_0.s2(navigator_0);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
          var answer = new NavControllerNavigatorState($this, navigator_0);
          this_0.k2(navigator_0, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var navigatorBackStack = tmp;
        $this.w5a_1.e(entry);
        navigatorBackStack.d5c(entry);
        var parent = entry.i53_1.e55_1;
        if (!(parent == null)) {
          linkChildToParent($this, entry, getBackStackEntry($this, parent.i55_1));
        }
      }
      $this.u5a_1 = null;
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_1 = $this.k5b_1.e5a().p2();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_1.m();
    while (tmp0_iterator_1.n()) {
      var element = tmp0_iterator_1.o();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      if (!element.s55_1) {
        destination.e(element);
      }
    }
    var tmp0_iterator_2 = destination.m();
    while (tmp0_iterator_2.n()) {
      var element_0 = tmp0_iterator_2.o();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = $this.l5b_1;
      var value_0 = this_2.s2(element_0);
      var tmp_0;
      if (value_0 == null) {
        // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
        var answer_0 = new NavControllerNavigatorState($this, element_0);
        this_2.k2(element_0, answer_0);
        tmp_0 = answer_0;
      } else {
        tmp_0 = value_0;
      }
      var navigatorBackStack_0 = tmp_0;
      element_0.s58(navigatorBackStack_0);
    }
    if (!($this.s5a_1 == null) && $this.w5a_1.j()) {
      var deepLinked = false;
      if (!deepLinked) {
        navigate($this, ensureNotNull($this.s5a_1), startDestinationArgs, null, null);
      }
    } else {
      dispatchOnDestinationChanged($this);
    }
  }
  function getTopGraph(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4.og();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull($this.s5a_1) : tmp1_elvis_lhs;
    var tmp;
    if (currentNode instanceof NavGraph) {
      tmp = currentNode;
    } else {
      tmp = ensureNotNull(currentNode.e55_1);
    }
    return tmp;
  }
  function generateRouteFilled($this, route) {
    var id = generateHashCode(serializer(getKClassFromExpression(route)));
    var destination = $this.s5c($this.r5c(), id, true);
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (destination == null) {
        // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
        var message = 'Destination with route ' + getKClassFromExpression(route).pb() + ' cannot be found ' + ('in navigation graph ' + toString($this.s5a_1));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = destination.fc();
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(this_0.p()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.b1();
      // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
      var tmp$ret$3 = element.c1().u50_1;
      destination_0.k2(tmp, tmp$ret$3);
    }
    return generateRouteWithArgs(route, destination_0);
  }
  function navigate($this, node, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.l5b_1.p2().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element.z52_1 = true;
    }
    var popped = false;
    var launchSingleTop = false;
    var navigated = {_v: false};
    if (!(navOptions == null)) {
      if (!(navOptions.d59_1 == null))
        popped = popBackStackInternal_2($this, ensureNotNull(navOptions.d59_1), navOptions.w59(), navOptions.x59());
      else if (!(navOptions.e59_1 == null))
        popped = popBackStackInternal_0($this, generateHashCode(serializer(ensureNotNull(navOptions.e59_1))), navOptions.w59(), navOptions.x59());
      else if (!(navOptions.f59_1 == null))
        popped = popBackStackInternal_1($this, ensureNotNull(navOptions.f59_1), navOptions.w59(), navOptions.x59());
      else if (!(navOptions.a59_1 === -1))
        popped = popBackStackInternal_0($this, navOptions.a59_1, navOptions.w59(), navOptions.x59());
    }
    var finalArgs = node.r56(args);
    var tmp;
    if ((navOptions == null ? null : navOptions.v59()) === true) {
      tmp = $this.d5b_1.q2(node.i55_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      navigated._v = restoreStateInternal($this, node.i55_1, finalArgs, navOptions, navigatorExtras);
    } else {
      var tmp_0;
      if ((navOptions == null ? null : navOptions.u59()) === true) {
        tmp_0 = launchSingleTopInternal($this, node, args);
      } else {
        tmp_0 = false;
      }
      launchSingleTop = tmp_0;
      if (!launchSingleTop) {
        var backStackEntry = Companion_instance.j54(node, finalArgs, $this.e5c(), $this.g5b_1);
        var navigator = $this.k5b_1.o58(node.d55_1);
        var tmp_1 = listOf(backStackEntry);
        navigateInternal(navigator, $this, tmp_1, navOptions, navigatorExtras, NavController$navigate$lambda(navigated, $this, node, finalArgs));
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = $this.l5b_1.p2().m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element_0.z52_1 = false;
    }
    if (popped || navigated._v || launchSingleTop) {
      dispatchOnDestinationChanged($this);
    } else {
      $this.g5c();
    }
  }
  function launchSingleTopInternal($this, node, args) {
    var currentBackStackEntry = $this.t5c();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var this_0 = $this.w5a_1;
      var iterator = this_0.w(this_0.p());
      while (iterator.d5()) {
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        if (iterator.f5().i53_1 === node) {
          tmp$ret$1 = iterator.e5();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    var nodeIndex = tmp$ret$1;
    if (nodeIndex === -1)
      return false;
    if (node instanceof NavGraph) {
      var tmp = Companion_instance_1.g57(node);
      var childHierarchyId = toList(map(tmp, NavController$launchSingleTopInternal$lambda));
      if (!(($this.w5a_1.kg_1 - nodeIndex | 0) === childHierarchyId.p()))
        return false;
      // Inline function 'kotlin.collections.map' call
      var this_1 = $this.w5a_1.j2(nodeIndex, $this.w5a_1.kg_1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator = this_1.m();
      while (tmp0_iterator.n()) {
        var item = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        var tmp$ret$2 = item.i53_1.i55_1;
        destination.e(tmp$ret$2);
      }
      var backQueueId = destination;
      if (!equals(backQueueId, childHierarchyId))
        return false;
    } else {
      var tmp_0 = node.i55_1;
      var tmp1_safe_receiver = currentBackStackEntry == null ? null : currentBackStackEntry.i53_1;
      if (!(tmp_0 === (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i55_1))) {
        return false;
      }
    }
    var tempBackQueue = ArrayDeque_init_$Create$();
    while (get_lastIndex($this.w5a_1) >= nodeIndex) {
      var oldEntry = removeLast($this.w5a_1);
      $this.i5c(oldEntry);
      var newEntry = NavBackStackEntry_init_$Create$(oldEntry, oldEntry.i53_1.r56(args));
      tempBackQueue.pg(newEntry);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = tempBackQueue.m();
    while (tmp0_iterator_0.n()) {
      var element = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var parent = element.i53_1.e55_1;
      if (!(parent == null)) {
        var newParent = getBackStackEntry($this, parent.i55_1);
        linkChildToParent($this, element, newParent);
      }
      $this.w5a_1.e(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = tempBackQueue.m();
    while (tmp0_iterator_1.n()) {
      var element_0 = tmp0_iterator_1.o();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var navigator = $this.k5b_1.o58(element_0.i53_1.d55_1);
      navigator.h53(element_0);
    }
    return true;
  }
  function restoreStateInternal($this, id, args, navOptions, navigatorExtras) {
    if (!$this.d5b_1.q2(id)) {
      return false;
    }
    var backStackId = $this.d5b_1.s2(id);
    var tmp = $this.d5b_1.p2();
    removeAll(tmp, NavController$restoreStateInternal$lambda(backStackId));
    // Inline function 'kotlin.collections.remove' call
    var this_0 = $this.e5b_1;
    var backStackState = (isInterface(this_0, KtMutableMap) ? this_0 : THROW_CCE()).l2(backStackId);
    var entries = instantiateBackStack($this, backStackState);
    return executeRestoreState($this, entries, args, navOptions, navigatorExtras);
  }
  function executeRestoreState($this, entries, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entriesGroupedByNavigator = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = entries.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var tmp = element.i53_1;
      if (!(tmp instanceof NavGraph)) {
        destination.e(element);
      }
    }
    var tmp0_iterator_0 = destination.m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var previousEntryList = lastOrNull(entriesGroupedByNavigator);
      var tmp1_safe_receiver = previousEntryList == null ? null : last(previousEntryList);
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i53_1;
      var previousNavigatorName = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.d55_1;
      if (previousNavigatorName === element_0.i53_1.d55_1) {
        // Inline function 'kotlin.collections.plusAssign' call
        previousEntryList.e(element_0);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = mutableListOf([element_0]);
        entriesGroupedByNavigator.e(element_1);
      }
    }
    var navigated = {_v: false};
    var tmp0_iterator_1 = entriesGroupedByNavigator.m();
    while (tmp0_iterator_1.n()) {
      var entryList = tmp0_iterator_1.o();
      var navigator = $this.k5b_1.o58(first(entryList).i53_1.d55_1);
      var lastNavigatedIndex = {_v: 0};
      navigateInternal(navigator, $this, entryList, navOptions, navigatorExtras, NavController$executeRestoreState$lambda(navigated, entries, lastNavigatedIndex, $this, args));
    }
    return navigated._v;
  }
  function instantiateBackStack($this, backStackState) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var backStack = ArrayList_init_$Create$();
    var tmp0_safe_receiver = $this.w5a_1.og();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
    var currentDestination = tmp1_elvis_lhs == null ? $this.r5c() : tmp1_elvis_lhs;
    if (backStackState == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = backStackState.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>' call
        var node = $this.s5c(currentDestination, element.i5a_1, true);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (node == null) {
            // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>.<anonymous>' call
            var dest = Companion_instance_0.u55(element.i5a_1);
            var message = 'Restore State failed: destination ' + dest + ' cannot be found from the current ' + ('destination ' + currentDestination.toString());
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            break $l$block;
          }
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = element.q5a(node, $this.e5c(), $this.g5b_1);
        backStack.e(element_0);
        currentDestination = node;
      }
    }
    return backStack;
  }
  function addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries) {
    var newDest = backStackEntry.i53_1;
    if (!isInterface(newDest, FloatingWindow)) {
      $l$loop: while (true) {
        var tmp;
        var tmp_0;
        if (!$this.w5a_1.j()) {
          var tmp_1 = $this.w5a_1.ng().i53_1;
          tmp_0 = isInterface(tmp_1, FloatingWindow);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = popBackStackInternal$default($this, $this.w5a_1.ng().i53_1.i55_1, true);
        } else {
          tmp = false;
        }
        if (!tmp) {
          break $l$loop;
        }
      }
    }
    var hierarchy = ArrayDeque_init_$Create$();
    var destination = newDest;
    if (node instanceof NavGraph) {
      do {
        var parent = ensureNotNull(destination).e55_1;
        if (!(parent == null)) {
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.lastOrNull' call
            var iterator = restoredEntries.w(restoredEntries.p());
            while (iterator.d5()) {
              var element = iterator.f5();
              // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
              if (element.i53_1.equals(parent)) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
            tmp$ret$1 = null;
          }
          var tmp0_elvis_lhs = tmp$ret$1;
          var entry = tmp0_elvis_lhs == null ? Companion_instance.j54(parent, finalArgs, $this.e5c(), $this.g5b_1) : tmp0_elvis_lhs;
          hierarchy.pg(entry);
          var tmp_2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$this.w5a_1.j()) {
            tmp_2 = $this.w5a_1.ng().i53_1 === parent;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            popEntryFromBackStack$default($this, $this.w5a_1.ng());
          }
        }
        destination = parent;
      }
       while (!(destination == null) && !(destination === node));
    }
    destination = hierarchy.j() ? newDest : hierarchy.lg().i53_1;
    while (!(destination == null) && !($this.n5c(destination.i55_1) === destination)) {
      var parent_0 = destination.e55_1;
      if (!(parent_0 == null)) {
        var tmp_3;
        if ((finalArgs == null ? null : finalArgs.j()) === true) {
          tmp_3 = null;
        } else {
          tmp_3 = finalArgs;
        }
        var args = tmp_3;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.collections.lastOrNull' call
          var iterator_0 = restoredEntries.w(restoredEntries.p());
          while (iterator_0.d5()) {
            var element_0 = iterator_0.f5();
            // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
            if (element_0.i53_1.equals(parent_0)) {
              tmp$ret$4 = element_0;
              break $l$block_0;
            }
          }
          tmp$ret$4 = null;
        }
        var tmp2_elvis_lhs = tmp$ret$4;
        var entry_0 = tmp2_elvis_lhs == null ? Companion_instance.j54(parent_0, parent_0.r56(args), $this.e5c(), $this.g5b_1) : tmp2_elvis_lhs;
        hierarchy.pg(entry_0);
      }
      destination = parent_0;
    }
    var overlappingDestination = hierarchy.j() ? newDest : hierarchy.lg().i53_1;
    $l$loop_0: while (true) {
      var tmp_4;
      var tmp_5;
      if (!$this.w5a_1.j()) {
        var tmp_6 = $this.w5a_1.ng().i53_1;
        tmp_5 = tmp_6 instanceof NavGraph;
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        var tmp_7 = $this.w5a_1.ng().i53_1;
        tmp_4 = (tmp_7 instanceof NavGraph ? tmp_7 : THROW_CCE()).k56_1.u(overlappingDestination.i55_1) == null;
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_0;
      }
      popEntryFromBackStack$default($this, $this.w5a_1.ng());
    }
    var tmp3_elvis_lhs = $this.w5a_1.mg();
    var firstEntry = tmp3_elvis_lhs == null ? hierarchy.mg() : tmp3_elvis_lhs;
    if (!equals(firstEntry == null ? null : firstEntry.i53_1, $this.s5a_1)) {
      var tmp$ret$6;
      $l$block_1: {
        // Inline function 'kotlin.collections.lastOrNull' call
        var iterator_1 = restoredEntries.w(restoredEntries.p());
        while (iterator_1.d5()) {
          var element_1 = iterator_1.f5();
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
          if (element_1.i53_1.equals(ensureNotNull($this.s5a_1))) {
            tmp$ret$6 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$6 = null;
      }
      var tmp5_elvis_lhs = tmp$ret$6;
      var entry_1 = tmp5_elvis_lhs == null ? Companion_instance.j54(ensureNotNull($this.s5a_1), ensureNotNull($this.s5a_1).r56(finalArgs), $this.e5c(), $this.g5b_1) : tmp5_elvis_lhs;
      hierarchy.pg(entry_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = hierarchy.m();
    while (tmp0_iterator.n()) {
      var element_2 = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var navigator = $this.k5b_1.o58(element_2.i53_1.d55_1);
      var tmp$ret$8;
      $l$block_2: {
        // Inline function 'kotlin.checkNotNull' call
        var value = $this.l5b_1.s2(navigator);
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>.<anonymous>' call
          var message = 'NavigatorBackStack for ' + node.d55_1 + ' should already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$8 = value;
          break $l$block_2;
        }
      }
      var navigatorBackStack = tmp$ret$8;
      navigatorBackStack.d5c(element_2);
    }
    $this.w5a_1.t(hierarchy);
    $this.w5a_1.e(backStackEntry);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = plus(hierarchy, backStackEntry).m();
    while (tmp0_iterator_0.n()) {
      var element_3 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var parent_1 = element_3.i53_1.e55_1;
      if (!(parent_1 == null)) {
        linkChildToParent($this, element_3, getBackStackEntry($this, parent_1.i55_1));
      }
    }
  }
  function addEntryToBackStack$default($this, node, finalArgs, backStackEntry, restoredEntries, $super) {
    restoredEntries = restoredEntries === VOID ? emptyList() : restoredEntries;
    return addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries);
  }
  function getBackStackEntry($this, destinationId) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_0 = $this.w5a_1;
      var iterator = this_0.w(this_0.p());
      while (iterator.d5()) {
        var element = iterator.f5();
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        if (element.i53_1.i55_1 === destinationId) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var lastFromBackStack = tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (lastFromBackStack == null) {
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        var message = 'No destination with ID ' + destinationId + " is on the NavController's back stack. The " + ('current destination is ' + toString($this.q5c()));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block_0;
      }
    }
    return lastFromBackStack;
  }
  function Companion_0() {
    this.u5c_1 = 'multiplatform-support-nav:controller:navigatorState';
    this.v5c_1 = 'multiplatform-support-nav:controller:navigatorState:names';
    this.w5c_1 = 'multiplatform-support-nav:controller:backStack';
    this.x5c_1 = 'multiplatform-support-nav:controller:backStackDestIds';
    this.y5c_1 = 'multiplatform-support-nav:controller:backStackIds';
    this.z5c_1 = 'multiplatform-support-nav:controller:backStackStates';
    this.a5d_1 = 'multiplatform-support-nav:controller:backStackStates:';
    this.b5d_1 = 'multiplatform-support-nav:controller:deepLinkHandled';
    this.c5d_1 = true;
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.d5d_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).k4b = function (source, event) {
    return this.d5d_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).x3 = function () {
    return this.d5d_1;
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
  function NavController$lifecycleObserver$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      this$0.i5b_1 = event.p4b();
      var tmp;
      if (!(this$0.s5a_1 == null)) {
        var tmp0_iterator = this$0.w5a_1.m();
        while (tmp0_iterator.n()) {
          var entry = tmp0_iterator.o();
          entry.p4c(event);
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NavController$executePopOperations$lambda($receivedPop, $popped, this$0, $saveState, $savedState) {
    return function (entry) {
      $receivedPop._v = true;
      $popped._v = true;
      popEntryFromBackStack(this$0, entry, $saveState, $savedState);
      return Unit_instance;
    };
  }
  function NavController$executePopOperations$lambda_0(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.e55_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e57()) === destination.i55_1) {
      tmp = destination.e55_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_1(this$0) {
    return function (destination) {
      return !this$0.d5b_1.q2(destination.i55_1);
    };
  }
  function NavController$executePopOperations$lambda_2(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.e55_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e57()) === destination.i55_1) {
      tmp = destination.e55_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_3(this$0) {
    return function (destination) {
      return !this$0.d5b_1.q2(destination.i55_1);
    };
  }
  function NavController$clearBackStackInternal$lambda($this$navOptions) {
    $this$navOptions.m52_1 = true;
    return Unit_instance;
  }
  function NavController$navigate$lambda($navigated, this$0, $node, $finalArgs) {
    return function (it) {
      $navigated._v = true;
      addEntryToBackStack$default(this$0, $node, $finalArgs, it);
      return Unit_instance;
    };
  }
  function NavController$launchSingleTopInternal$lambda(it) {
    return it.i55_1;
  }
  function NavController$restoreStateInternal$lambda($backStackId) {
    return function (it) {
      return it == $backStackId;
    };
  }
  function NavController$executeRestoreState$lambda($navigated, $entries, $lastNavigatedIndex, this$0, $args) {
    return function (entry) {
      $navigated._v = true;
      var entryIndex = $entries.x(entry);
      var tmp;
      if (!(entryIndex === -1)) {
        // Inline function 'kotlin.also' call
        var this_0 = $entries.j2($lastNavigatedIndex._v, entryIndex + 1 | 0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>.<anonymous>' call
        $lastNavigatedIndex._v = entryIndex + 1 | 0;
        tmp = this_0;
      } else {
        tmp = emptyList();
      }
      var restoredEntries = tmp;
      addEntryToBackStack(this$0, entry.i53_1, $args, entry, restoredEntries);
      return Unit_instance;
    };
  }
  function NavController() {
    this.s5a_1 = null;
    this.t5a_1 = null;
    this.u5a_1 = null;
    this.v5a_1 = false;
    this.w5a_1 = ArrayDeque_init_$Create$();
    this.x5a_1 = MutableStateFlow(emptyList());
    this.y5a_1 = asStateFlow(this.x5a_1);
    this.z5a_1 = MutableStateFlow(emptyList());
    this.a5b_1 = asStateFlow(this.z5a_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b5b_1 = LinkedHashMap_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.c5b_1 = LinkedHashMap_init_$Create$_0();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.d5b_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.e5b_1 = LinkedHashMap_init_$Create$_0();
    this.f5b_1 = null;
    this.g5b_1 = null;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.h5b_1 = ArrayList_init_$Create$();
    this.i5b_1 = State_INITIALIZED_getInstance();
    var tmp_4 = this;
    var tmp_5 = NavController$lifecycleObserver$lambda(this);
    tmp_4.j5b_1 = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_5);
    this.k5b_1 = new NavigatorProvider();
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.l5b_1 = LinkedHashMap_init_$Create$_0();
    this.m5b_1 = null;
    this.n5b_1 = null;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.o5b_1 = LinkedHashMap_init_$Create$_0();
    this.k5b_1.f5a(new NavGraphNavigator(this.k5b_1));
    this.p5b_1 = 0;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_8.q5b_1 = ArrayList_init_$Create$();
    this.r5b_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    this.s5b_1 = asSharedFlow(this.r5b_1);
  }
  protoOf(NavController).e5d = function (graph) {
    this.f5d(graph, null);
  };
  protoOf(NavController).r5c = function () {
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.s5a_1 == null) {
        // Inline function 'androidx.navigation.NavController.<get-graph>.<anonymous>' call
        var message = 'You must call setGraph() before calling getGraph()';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var tmp = this.s5a_1;
    return tmp instanceof NavGraph ? tmp : THROW_CCE();
  };
  protoOf(NavController).i5c = function (child) {
    var tmp0_elvis_lhs = this.b5b_1.l2(child);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp1_safe_receiver = this.c5b_1.s2(parent);
    var count = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g5d();
    if (count === 0) {
      // Inline function 'androidx.navigation.get' call
      var this_0 = this.k5b_1;
      var name = parent.i53_1.d55_1;
      var navGraphNavigator = this_0.o58(name);
      var tmp2_safe_receiver = this.l5b_1.s2(navGraphNavigator);
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.u53(parent);
      }
      this.c5b_1.l2(parent);
    }
    return parent;
  };
  protoOf(NavController).e5c = function () {
    var tmp;
    if (this.f5b_1 == null) {
      tmp = State_CREATED_getInstance();
    } else {
      tmp = this.i5b_1;
    }
    return tmp;
  };
  protoOf(NavController).o5c = function () {
    return this.k5b_1;
  };
  protoOf(NavController).v58 = function () {
    var tmp;
    if (this.w5a_1.j()) {
      tmp = false;
    } else {
      tmp = popBackStack(this, ensureNotNull(this.q5c()).i55_1, true);
    }
    return tmp;
  };
  protoOf(NavController).m5c = function (destinationId, inclusive, saveState) {
    var popped = popBackStackInternal_0(this, destinationId, inclusive, saveState);
    return popped && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).f5c = function (popUpTo, onComplete) {
    var popIndex = this.w5a_1.x(popUpTo);
    if (popIndex < 0) {
      println('Ignoring pop of ' + popUpTo.toString() + ' as it was not found on the current back stack');
      return Unit_instance;
    }
    if (!((popIndex + 1 | 0) === this.w5a_1.kg_1)) {
      popBackStackInternal_0(this, this.w5a_1.u(popIndex + 1 | 0).i53_1.i55_1, true, false);
    }
    popEntryFromBackStack$default(this, popUpTo);
    onComplete();
    dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).h5d = function () {
    if (_get_destinationCountOnBackStack__uqfh68(this) === 1) {
      return false;
    } else {
      return this.v58();
    }
  };
  protoOf(NavController).g5c = function () {
    var backStack = toMutableList(this.w5a_1);
    if (backStack.j()) {
      return Unit_instance;
    }
    var nextResumed = last(backStack).i53_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var nextStarted = ArrayList_init_$Create$();
    if (!(nextResumed == null) ? isInterface(nextResumed, FloatingWindow) : false) {
      var iterator = reversed(backStack).m();
      $l$loop: while (iterator.n()) {
        var destination = iterator.o().i53_1;
        nextStarted.e(destination);
        var tmp;
        if (!isInterface(destination, FloatingWindow)) {
          tmp = !(destination instanceof NavGraph);
        } else {
          tmp = false;
        }
        if (tmp) {
          break $l$loop;
        }
      }
    }
    var upwardStateTransitions = HashMap_init_$Create$();
    var iterator_0 = reversed(backStack).m();
    while (iterator_0.n()) {
      var entry = iterator_0.o();
      var currentMaxLifecycle = entry.s53_1;
      var destination_0 = entry.i53_1;
      if (!(nextResumed == null) && destination_0.i55_1 === nextResumed.i55_1) {
        if (!currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
          var navigator = this.o5c().o58(entry.i53_1.d55_1);
          var state = this.l5b_1.s2(navigator);
          var tmp1_safe_receiver = state == null ? null : state.b53_1;
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c1();
          var transitioning = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v(entry);
          var tmp_0;
          if (!(transitioning === true)) {
            var tmp3_safe_receiver = this.c5b_1.s2(entry);
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.dq()) === 0);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.set' call
            var value = State_RESUMED_getInstance();
            upwardStateTransitions.k2(entry, value);
          } else {
            // Inline function 'kotlin.collections.set' call
            var value_0 = State_STARTED_getInstance();
            upwardStateTransitions.k2(entry, value_0);
          }
        }
        var tmp4_safe_receiver = firstOrNull(nextStarted);
        if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.i55_1) === destination_0.i55_1) {
          removeFirst(nextStarted);
        }
        nextResumed = nextResumed.e55_1;
      } else {
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!nextStarted.j()) {
          tmp_1 = destination_0.i55_1 === first(nextStarted).i55_1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var started = removeFirst(nextStarted);
          if (currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
            entry.h54(State_STARTED_getInstance());
          } else if (!currentMaxLifecycle.equals(State_STARTED_getInstance())) {
            // Inline function 'kotlin.collections.set' call
            var value_1 = State_STARTED_getInstance();
            upwardStateTransitions.k2(entry, value_1);
          }
          var tmp5_safe_receiver = started.e55_1;
          if (tmp5_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            if (!nextStarted.v(tmp5_safe_receiver)) {
              nextStarted.e(tmp5_safe_receiver);
            }
          }
        } else {
          entry.h54(State_CREATED_getInstance());
        }
      }
    }
    iterator_0 = backStack.m();
    while (iterator_0.n()) {
      var entry_0 = iterator_0.o();
      var newState = upwardStateTransitions.s2(entry_0);
      if (!(newState == null)) {
        entry_0.h54(newState);
      } else {
        entry_0.p54();
      }
    }
  };
  protoOf(NavController).h5c = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entries = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.l5b_1.p2().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = element.b53_1.c1();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_0.m();
      while (tmp0_iterator_0.n()) {
        var element_0 = tmp0_iterator_0.o();
        // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>.<anonymous>' call
        if (!entries.v(element_0) && !element_0.s53_1.s4b(State_STARTED_getInstance())) {
          destination.e(element_0);
        }
      }
      addAll(entries, destination);
    }
    // Inline function 'kotlin.collections.plusAssign' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = this.w5a_1;
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_1.m();
    while (tmp0_iterator_1.n()) {
      var element_1 = tmp0_iterator_1.o();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      if (!entries.v(element_1) && element_1.s53_1.s4b(State_STARTED_getInstance())) {
        destination_0.e(element_1);
      }
    }
    addAll(entries, destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_2 = entries.m();
    while (tmp0_iterator_2.n()) {
      var element_2 = tmp0_iterator_2.o();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      var tmp = element_2.i53_1;
      if (!(tmp instanceof NavGraph)) {
        destination_1.e(element_2);
      }
    }
    return destination_1;
  };
  protoOf(NavController).f5d = function (graph, startDestinationArgs) {
    if (!equals(this.s5a_1, graph)) {
      var tmp0_safe_receiver = this.s5a_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var savedBackStackIds = ArrayList_init_$Create$_1(this.d5b_1.o2());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = savedBackStackIds.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          clearBackStackInternal(this, element);
        }
        popBackStackInternal$default(this, tmp0_safe_receiver.i55_1, true);
      }
      this.s5a_1 = graph;
      onGraphCreated(this, startDestinationArgs);
    } else {
      var inductionVariable = 0;
      var last = graph.k56_1.lr();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var newDestination = graph.k56_1.o13(i);
          var key = ensureNotNull(this.s5a_1).k56_1.v13(i);
          ensureNotNull(this.s5a_1).k56_1.y13(key, newDestination);
        }
         while (inductionVariable < last);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.w5a_1.m();
      while (tmp0_iterator_0.n()) {
        var element_0 = tmp0_iterator_0.o();
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var hierarchy = asReversed(toList(Companion_instance_0.w55(element_0.i53_1)));
        // Inline function 'kotlin.collections.fold' call
        var accumulator = ensureNotNull(this.s5a_1);
        var tmp0_iterator_1 = hierarchy.m();
        while (tmp0_iterator_1.n()) {
          var element_1 = tmp0_iterator_1.o();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          var newDest = accumulator;
          var tmp;
          if (element_1.equals(this.s5a_1) && newDest.equals(graph)) {
            tmp = newDest;
          } else {
            if (newDest instanceof NavGraph) {
              tmp = ensureNotNull(newDest.f57(element_1.i55_1));
            } else {
              tmp = newDest;
            }
          }
          accumulator = tmp;
        }
        var newDestination_0 = accumulator;
        element_0.i53_1 = newDestination_0;
      }
    }
  };
  protoOf(NavController).q5c = function () {
    var tmp0_safe_receiver = this.t5c();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
  };
  protoOf(NavController).n5c = function (destinationId) {
    if (this.s5a_1 == null) {
      return null;
    }
    if (ensureNotNull(this.s5a_1).i55_1 === destinationId) {
      return this.s5a_1;
    }
    var tmp0_safe_receiver = this.w5a_1.og();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull(this.s5a_1) : tmp1_elvis_lhs;
    return this.s5c(currentNode, destinationId, false);
  };
  protoOf(NavController).s5c = function (_this__u8e3s4, destinationId, searchChildren) {
    if (_this__u8e3s4.i55_1 === destinationId) {
      return _this__u8e3s4;
    }
    var tmp;
    if (_this__u8e3s4 instanceof NavGraph) {
      tmp = _this__u8e3s4;
    } else {
      tmp = ensureNotNull(_this__u8e3s4.e55_1);
    }
    var currentGraph = tmp;
    return currentGraph.m57(destinationId, currentGraph, searchChildren);
  };
  protoOf(NavController).i5d = function (request, navOptions, navigatorExtras) {
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.s5a_1 == null) {
        // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
        var message = 'Cannot navigate to ' + request.toString() + '. Navigation graph has not been set for ' + ('NavController ' + toString_0(this) + '.');
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var currGraph = getTopGraph(this.w5a_1, this);
    var deepLinkMatch = currGraph.o56(request, true, true, currGraph);
    if (!(deepLinkMatch == null)) {
      var destination = deepLinkMatch.k55_1;
      var tmp0_elvis_lhs = destination.r56(deepLinkMatch.l55_1);
      var args = tmp0_elvis_lhs == null ? Bundle_init_$Create$() : tmp0_elvis_lhs;
      var node = deepLinkMatch.k55_1;
      navigate(this, node, args, navOptions, navigatorExtras);
    } else {
      throw IllegalArgumentException_init_$Create$('Navigation destination that matches route ' + request.toString() + ' cannot be found in the ' + ('navigation graph ' + toString(this.s5a_1)));
    }
  };
  protoOf(NavController).j5d = function (route, builder) {
    this.k5d(route, navOptions(builder));
  };
  protoOf(NavController).l5d = function (route, navOptions, navigatorExtras) {
    this.i5d(Companion_instance_2.s54(UriUtils_instance.co(Companion_instance_0.v55(route))).a2u(), navOptions, navigatorExtras);
  };
  protoOf(NavController).k5d = function (route, navOptions, navigatorExtras, $super) {
    navOptions = navOptions === VOID ? null : navOptions;
    navigatorExtras = navigatorExtras === VOID ? null : navigatorExtras;
    var tmp;
    if ($super === VOID) {
      this.l5d(route, navOptions, navigatorExtras);
      tmp = Unit_instance;
    } else {
      tmp = $super.l5d.call(this, route, navOptions, navigatorExtras);
    }
    return tmp;
  };
  protoOf(NavController).u4e = function () {
    var b = null;
    var navigatorNames = ArrayList_init_$Create$();
    var navigatorState = Bundle_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.k5b_1.e5a().a1().m();
    while (tmp0_iterator.n()) {
      var tmp1_loop_parameter = tmp0_iterator.o();
      // Inline function 'kotlin.collections.component1' call
      var name = tmp1_loop_parameter.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.c1();
      var savedState = value.w58();
      if (!(savedState == null)) {
        navigatorNames.e(name);
        navigatorState.f4d(name, savedState);
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!navigatorNames.j()) {
      b = Bundle_init_$Create$();
      navigatorState.h4d('multiplatform-support-nav:controller:navigatorState:names', navigatorNames);
      b.f4d('multiplatform-support-nav:controller:navigatorState', navigatorState);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.w5a_1.j()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.w5a_1.kg_1;
      var backStack = fillArrayVal(Array(size), null);
      var index = 0;
      var tmp2_iterator = this.w5a_1.m();
      while (tmp2_iterator.n()) {
        var backStackEntry = tmp2_iterator.o();
        var tmp3 = index;
        index = tmp3 + 1 | 0;
        backStack[tmp3] = NavBackStackEntryState_init_$Create$(backStackEntry).r5a();
      }
      b.s4d('multiplatform-support-nav:controller:backStack', backStack);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.d5b_1.j()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackDestIds = new Int32Array(this.d5b_1.p());
      var backStackIds = ArrayList_init_$Create$();
      var index_0 = 0;
      // Inline function 'kotlin.collections.iterator' call
      var tmp4_iterator = this.d5b_1.a1().m();
      while (tmp4_iterator.n()) {
        var tmp5_loop_parameter = tmp4_iterator.o();
        // Inline function 'kotlin.collections.component1' call
        var destId = tmp5_loop_parameter.b1();
        // Inline function 'kotlin.collections.component2' call
        var id = tmp5_loop_parameter.c1();
        var tmp6 = index_0;
        index_0 = tmp6 + 1 | 0;
        backStackDestIds[tmp6] = destId;
        // Inline function 'kotlin.collections.plusAssign' call
        backStackIds.e(id);
      }
      b.m4d('multiplatform-support-nav:controller:backStackDestIds', backStackDestIds);
      b.h4d('multiplatform-support-nav:controller:backStackIds', backStackIds);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.e5b_1.j()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackStateIds = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp7_iterator = this.e5b_1.a1().m();
      while (tmp7_iterator.n()) {
        var tmp8_loop_parameter = tmp7_iterator.o();
        // Inline function 'kotlin.collections.component1' call
        var id_0 = tmp8_loop_parameter.b1();
        // Inline function 'kotlin.collections.component2' call
        var backStackStates = tmp8_loop_parameter.c1();
        // Inline function 'kotlin.collections.plusAssign' call
        backStackStateIds.e(id_0);
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = backStackStates.kg_1;
        var states = fillArrayVal(Array(size_0), null);
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index_1 = 0;
        var tmp0_iterator_0 = backStackStates.m();
        while (tmp0_iterator_0.n()) {
          var item = tmp0_iterator_0.o();
          // Inline function 'androidx.navigation.NavController.saveState.<anonymous>' call
          var tmp1 = index_1;
          index_1 = tmp1 + 1 | 0;
          states[checkIndexOverflow(tmp1)] = item.r5a();
        }
        b.s4d('multiplatform-support-nav:controller:backStackStates:' + id_0, states);
      }
      b.h4d('multiplatform-support-nav:controller:backStackStates', backStackStateIds);
    }
    if (this.v5a_1) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      b.v4c('multiplatform-support-nav:controller:deepLinkHandled', this.v5a_1);
    }
    return b;
  };
  protoOf(NavController).m5d = function (navState) {
    if (navState == null) {
      return Unit_instance;
    }
    this.t5a_1 = navState.y4d('multiplatform-support-nav:controller:navigatorState');
    var tmp = this;
    var tmp0_safe_receiver = navState.c4e('multiplatform-support-nav:controller:backStack');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.length;
      while (inductionVariable < last) {
        var element = tmp0_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp0_safe_receiver_0 = Companion_instance_3.p5a(element);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination.e(tmp0_safe_receiver_0);
        }
      }
      tmp_0 = destination;
    }
    tmp.u5a_1 = tmp_0;
    this.e5b_1.n2();
    var backStackDestIds = navState.b4e('multiplatform-support-nav:controller:backStackDestIds');
    var backStackIds = navState.z4d('multiplatform-support-nav:controller:backStackIds');
    if (!(backStackDestIds == null) && !(backStackIds == null)) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = backStackDestIds.length;
      while (inductionVariable_0 < last_0) {
        var item = backStackDestIds[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var this_0 = this.d5b_1;
        var value = backStackIds.u(tmp1);
        this_0.k2(item, value);
      }
    }
    var backStackStateIds = navState.z4d('multiplatform-support-nav:controller:backStackStates');
    var tmp2_safe_receiver = backStackStateIds == null ? null : filterNotNull(backStackStateIds);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp2_safe_receiver.m();
      while (tmp0_iterator.n()) {
        var element_0 = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp0_safe_receiver_1 = navState.c4e('multiplatform-support-nav:controller:backStackStates:' + element_0);
        var tmp_1;
        if (tmp0_safe_receiver_1 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.collections.mapNotNull' call
          // Inline function 'kotlin.collections.mapNotNullTo' call
          var destination_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_1 = 0;
          var last_1 = tmp0_safe_receiver_1.length;
          while (inductionVariable_1 < last_1) {
            var element_1 = tmp0_safe_receiver_1[inductionVariable_1];
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
            // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>.<anonymous>' call
            var tmp0_safe_receiver_2 = Companion_instance_3.p5a(element_1);
            if (tmp0_safe_receiver_2 == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              destination_0.e(tmp0_safe_receiver_2);
            }
          }
          tmp_1 = destination_0;
        }
        var backStackState = tmp_1;
        if (!(backStackState == null)) {
          // Inline function 'kotlin.collections.set' call
          var this_1 = this.e5b_1;
          // Inline function 'kotlin.apply' call
          var this_2 = ArrayDeque_init_$Create$_0(backStackState.p());
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>.<anonymous>' call
          var tmp0_iterator_0 = backStackState.m();
          while (tmp0_iterator_0.n()) {
            var i = tmp0_iterator_0.o();
            this_2.e(i);
          }
          this_1.k2(element_0, this_2);
        }
      }
    }
    this.v5a_1 = navState.t4d('multiplatform-support-nav:controller:deepLinkHandled');
  };
  protoOf(NavController).n5d = function (owner) {
    if (equals(owner, this.f5b_1)) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.f5b_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j4e();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.v4b(this.j5b_1);
    }
    this.f5b_1 = owner;
    owner.j4e().u4b(this.j5b_1);
  };
  protoOf(NavController).o5d = function (viewModelStore) {
    if (equals(this.g5b_1, Companion_getInstance_2().q5d(viewModelStore))) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.w5a_1.j()) {
      // Inline function 'androidx.navigation.NavController.setViewModelStore.<anonymous>' call
      var message = 'ViewModelStore should be set before setGraph call';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    this.g5b_1 = Companion_getInstance_2().q5d(viewModelStore);
  };
  protoOf(NavController).t5c = function () {
    return this.w5a_1.og();
  };
  protoOf(NavController).r5d = function () {
    var iterator = reversed(this.w5a_1).m();
    if (iterator.n()) {
      iterator.o();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = asSequence(iterator).m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavController.<get-previousBackStackEntry>.<anonymous>' call
        var tmp = element.i53_1;
        if (!(tmp instanceof NavGraph)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function NavControllerViewModel$Companion$FACTORY$lambda($this$initializer) {
    return new NavControllerViewModel();
  }
  function Companion_1() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.viewModelFactory' call
    // Inline function 'kotlin.apply' call
    var this_0 = new InitializerViewModelFactoryBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.Companion.FACTORY.<anonymous>' call
    // Inline function 'androidx.lifecycle.viewmodel.initializer' call
    var initializer = NavControllerViewModel$Companion$FACTORY$lambda;
    this_0.p4f(getKClass(NavControllerViewModel), initializer);
    tmp.p5d_1 = this_0.a2u();
  }
  protoOf(Companion_1).q5d = function (viewModelStore) {
    var viewModelProvider = Companion_getInstance().s4g(viewModelStore, this.p5d_1);
    // Inline function 'androidx.lifecycle.get' call
    return viewModelProvider.u4g(getKClass(NavControllerViewModel));
  };
  var Companion_instance_5;
  function Companion_getInstance_2() {
    if (Companion_instance_5 == null)
      new Companion_1();
    return Companion_instance_5;
  }
  function NavControllerViewModel() {
    Companion_getInstance_2();
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k5c_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(NavControllerViewModel).l5c = function (backStackEntryId) {
    var viewModelStore = this.k5c_1.l2(backStackEntryId);
    if (viewModelStore == null)
      null;
    else {
      viewModelStore.n2();
    }
  };
  protoOf(NavControllerViewModel).m4g = function () {
    var tmp0_iterator = this.k5c_1.p2().m();
    while (tmp0_iterator.n()) {
      var store = tmp0_iterator.o();
      store.n2();
    }
    this.k5c_1.n2();
  };
  protoOf(NavControllerViewModel).q54 = function (backStackEntryId) {
    var viewModelStore = this.k5c_1.s2(backStackEntryId);
    if (viewModelStore == null) {
      viewModelStore = new ViewModelStore();
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.k5c_1;
      var value = viewModelStore;
      this_0.k2(backStackEntryId, value);
    }
    return viewModelStore;
  };
  protoOf(NavControllerViewModel).toString = function () {
    var sb = new StringBuilder('NavControllerViewModel{');
    sb.jd(hashCode(this));
    sb.v8('} ViewModelStores (');
    var viewModelStoreIterator = this.k5c_1.o2().m();
    while (viewModelStoreIterator.n()) {
      sb.v8(viewModelStoreIterator.o());
      if (viewModelStoreIterator.n()) {
        sb.v8(', ');
      }
    }
    sb.w8(_Char___init__impl__6a9atx(41));
    return sb.toString();
  };
  function NavHostController() {
    NavController.call(this);
  }
  protoOf(NavHostController).n5d = function (owner) {
    protoOf(NavController).n5d.call(this, owner);
  };
  protoOf(NavHostController).o5d = function (viewModelStore) {
    protoOf(NavController).o5d.call(this, viewModelStore);
  };
  function AtomicInt(initialValue) {
    this.t5b_1 = atomic$int$1(initialValue);
  }
  protoOf(AtomicInt).u5b = function () {
    return this.t5b_1.atomicfu$incrementAndGet();
  };
  protoOf(AtomicInt).g5d = function () {
    return this.t5b_1.atomicfu$decrementAndGet();
  };
  protoOf(AtomicInt).dq = function () {
    return this.t5b_1.kotlinx$atomicfu$value;
  };
  //region block: init
  Companion_instance_3 = new Companion();
  Companion_instance_4 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavHostController;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-runtime.js.map
