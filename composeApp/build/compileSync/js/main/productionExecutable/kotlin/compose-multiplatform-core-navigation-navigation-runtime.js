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
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var Companion_instance = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.q;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var toString = kotlin_kotlin.$_$.rk;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var NavigatorState = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var toString_0 = kotlin_kotlin.$_$.le;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var println = kotlin_kotlin.$_$.cc;
  var toMutableList = kotlin_kotlin.$_$.ab;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var Collection = kotlin_kotlin.$_$.h6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var VOID = kotlin_kotlin.$_$.i;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var reversed = kotlin_kotlin.$_$.ia;
  var Companion_instance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.s;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.p;
  var generateSequence = kotlin_kotlin.$_$.vf;
  var takeWhile = kotlin_kotlin.$_$.bg;
  var removeLast = kotlin_kotlin.$_$.ha;
  var navOptions = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.k;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.g;
  var checkCountOverflow = kotlin_kotlin.$_$.d7;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var generateHashCode = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var mapCapacity = kotlin_kotlin.$_$.o9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var generateRouteWithArgs = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.b;
  var listOf = kotlin_kotlin.$_$.m9;
  var Companion_instance_1 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.t;
  var map = kotlin_kotlin.$_$.yf;
  var toList = kotlin_kotlin.$_$.cg;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var NavBackStackEntry_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.l;
  var removeAll = kotlin_kotlin.$_$.da;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var lastOrNull = kotlin_kotlin.$_$.g9;
  var last = kotlin_kotlin.$_$.i9;
  var mutableListOf = kotlin_kotlin.$_$.t9;
  var first = kotlin_kotlin.$_$.k8;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.c;
  var plus = kotlin_kotlin.$_$.ba;
  var emptyList = kotlin_kotlin.$_$.a8;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var NavigatorProvider = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.h;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.f;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var removeFirst = kotlin_kotlin.$_$.fa;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_RESUMED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var addAll = kotlin_kotlin.$_$.v6;
  var asReversed = kotlin_kotlin.$_$.z6;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var Companion_instance_2 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.r;
  var UriUtils_instance = kotlin_org_jetbrains_androidx_core_core_uri.$_$.a;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var checkIndexOverflow = kotlin_kotlin.$_$.e7;
  var filterNotNull = kotlin_kotlin.$_$.g8;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var getKClass = kotlin_kotlin.$_$.f;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var StringBuilder = kotlin_kotlin.$_$.eg;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
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
    NavBackStackEntryState.call($this, entry.w4w_1, entry.s4w_1.s4y_1, entry.ac(), Bundle_init_$Create$());
    entry.b4y($this.t53_1);
    return $this;
  }
  function NavBackStackEntryState_init_$Create$(entry) {
    return NavBackStackEntryState_init_$Init$(entry, objectCreate(protoOf(NavBackStackEntryState)));
  }
  function Companion() {
    this.u53_1 = 'NavBackStackEntryState.id';
    this.v53_1 = 'NavBackStackEntryState.destinationId';
    this.w53_1 = 'NavBackStackEntryState.args';
    this.x53_1 = 'NavBackStackEntryState.savedState';
  }
  protoOf(Companion).y53 = function (bundle) {
    if (bundle == null)
      return null;
    var tmp0_elvis_lhs = bundle.n47('NavBackStackEntryState.id');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var id = tmp;
    var destinationId = bundle.l47('NavBackStackEntryState.destinationId');
    var args = bundle.o47('NavBackStackEntryState.args');
    var tmp1_elvis_lhs = bundle.o47('NavBackStackEntryState.savedState');
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
    this.q53_1 = id;
    this.r53_1 = destinationId;
    this.s53_1 = args;
    this.t53_1 = savedState;
  }
  protoOf(NavBackStackEntryState).z53 = function (destination, hostLifecycleState, viewModel) {
    return Companion_instance.s4x(destination, this.s53_1, hostLifecycleState, viewModel, this.q53_1, this.t53_1);
  };
  protoOf(NavBackStackEntryState).a54 = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavBackStackEntryState.toBundle.<anonymous>' call
    this_0.t46('NavBackStackEntryState.id', this.q53_1);
    this_0.p46('NavBackStackEntryState.destinationId', this.r53_1);
    this_0.v46('NavBackStackEntryState.args', this.s53_1);
    this_0.v46('NavBackStackEntryState.savedState', this.t53_1);
    return this_0;
  };
  protoOf(NavBackStackEntryState).toString = function () {
    return 'NavBackStackEntryState(id=' + this.q53_1 + ', destinationId=' + this.r53_1 + ', args=' + toString(this.s53_1) + ', savedState=' + this.t53_1.toString() + ')';
  };
  protoOf(NavBackStackEntryState).hashCode = function () {
    var result = getStringHashCode(this.q53_1);
    result = imul(result, 31) + this.r53_1 | 0;
    result = imul(result, 31) + (this.s53_1 == null ? 0 : hashCode(this.s53_1)) | 0;
    result = imul(result, 31) + hashCode(this.t53_1) | 0;
    return result;
  };
  protoOf(NavBackStackEntryState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBackStackEntryState))
      return false;
    var tmp0_other_with_cast = other instanceof NavBackStackEntryState ? other : THROW_CCE();
    if (!(this.q53_1 === tmp0_other_with_cast.q53_1))
      return false;
    if (!(this.r53_1 === tmp0_other_with_cast.r53_1))
      return false;
    if (!equals(this.s53_1, tmp0_other_with_cast.s53_1))
      return false;
    if (!equals(this.t53_1, tmp0_other_with_cast.t53_1))
      return false;
    return true;
  };
  function NavController$NavControllerNavigatorState$pop$lambda(this$0, $popUpTo, $saveState) {
    return function () {
      protoOf(NavigatorState).p4w.call(this$0, $popUpTo, $saveState);
      return Unit_instance;
    };
  }
  function linkChildToParent($this, child, parent) {
    // Inline function 'kotlin.collections.set' call
    $this.k54_1.f2(child, parent);
    if ($this.l54_1.n2(parent) == null) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.l54_1;
      var value = new AtomicInt(0);
      this_0.f2(parent, value);
    }
    ensureNotNull($this.l54_1.n2(parent)).d55();
  }
  function navigateInternal(_this__u8e3s4, $this, entries, navOptions, navigatorExtras, handler) {
    $this.v54_1 = handler;
    _this__u8e3s4.a52(entries, navOptions, navigatorExtras);
    $this.v54_1 = null;
  }
  function popBackStackInternal(_this__u8e3s4, $this, popUpTo, saveState, handler) {
    $this.w54_1 = handler;
    _this__u8e3s4.e52(popUpTo, saveState);
    $this.w54_1 = null;
  }
  function NavControllerNavigatorState($outer, navigator) {
    this.l55_1 = $outer;
    NavigatorState.call(this);
    this.k55_1 = navigator;
  }
  protoOf(NavControllerNavigatorState).m4w = function (backStackEntry) {
    // Inline function 'androidx.navigation.get' call
    var this_0 = this.l55_1.t54_1;
    var name = backStackEntry.s4w_1.n4y_1;
    var destinationNavigator = this_0.y51(name);
    if (equals(destinationNavigator, this.k55_1)) {
      var handler = this.l55_1.v54_1;
      if (!(handler == null)) {
        handler(backStackEntry);
        this.m55(backStackEntry);
      } else {
        println('Ignoring add of destination ' + backStackEntry.s4w_1.toString() + ' ' + 'outside of the call to navigate(). ');
      }
    } else {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var value = this.l55_1.u54_1.n2(destinationNavigator);
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.navigation.NavControllerNavigatorState.push.<anonymous>' call
          var message = 'NavigatorBackStack for ' + backStackEntry.s4w_1.n4y_1 + ' should ' + 'already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$2 = value;
          break $l$block;
        }
      }
      var navigatorBackStack = tmp$ret$2;
      navigatorBackStack.m4w(backStackEntry);
    }
  };
  protoOf(NavControllerNavigatorState).m55 = function (backStackEntry) {
    protoOf(NavigatorState).m4w.call(this, backStackEntry);
  };
  protoOf(NavControllerNavigatorState).o4w = function (destination, arguments_0) {
    return Companion_instance.t4x(destination, arguments_0, this.l55_1.n55(), this.l55_1.p54_1);
  };
  protoOf(NavControllerNavigatorState).p4w = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.get' call
    var this_0 = this.l55_1.t54_1;
    var name = popUpTo.s4w_1.n4y_1;
    var destinationNavigator = this_0.y51(name);
    // Inline function 'kotlin.collections.set' call
    this.l55_1.x54_1.f2(popUpTo, saveState);
    if (equals(destinationNavigator, this.k55_1)) {
      var handler = this.l55_1.w54_1;
      if (!(handler == null)) {
        handler(popUpTo);
        protoOf(NavigatorState).p4w.call(this, popUpTo, saveState);
      } else {
        this.l55_1.o55(popUpTo, NavController$NavControllerNavigatorState$pop$lambda(this, popUpTo, saveState));
      }
    } else {
      ensureNotNull(this.l55_1.u54_1.n2(destinationNavigator)).p4w(popUpTo, saveState);
    }
  };
  protoOf(NavControllerNavigatorState).q4w = function (popUpTo, saveState) {
    protoOf(NavigatorState).q4w.call(this, popUpTo, saveState);
  };
  protoOf(NavControllerNavigatorState).e4x = function (entry) {
    var savedState = this.l55_1.x54_1.n2(entry) === true;
    protoOf(NavigatorState).e4x.call(this, entry);
    this.l55_1.x54_1.g2(entry);
    if (!this.l55_1.f54_1.p(entry)) {
      this.l55_1.r55(entry);
      if (entry.y47().m45().i45(State_CREATED_getInstance())) {
        entry.r4x(State_DESTROYED_getInstance());
      }
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var this_0 = this.l55_1.f54_1;
        var tmp_0;
        if (isInterface(this_0, Collection)) {
          tmp_0 = this_0.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.navigation.NavControllerNavigatorState.markTransitionComplete.<anonymous>' call
          if (element.w4w_1 === entry.w4w_1) {
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
        var tmp0_safe_receiver = this.l55_1.p54_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.u55(entry.w4w_1);
        }
      }
      this.l55_1.p55();
      this.l55_1.i54_1.g1u(this.l55_1.q55());
    } else if (!this.j4w_1) {
      this.l55_1.p55();
      this.l55_1.g54_1.g1u(toMutableList(this.l55_1.f54_1));
      this.l55_1.i54_1.g1u(this.l55_1.q55());
    }
  };
  function popBackStack($this, destinationId, inclusive) {
    return $this.v55(destinationId, inclusive, false);
  }
  function popBackStackInternal_0($this, destinationId, inclusive, saveState) {
    if ($this.f54_1.q()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var iterator = reversed($this.f54_1).g();
    var foundDestination = null;
    $l$loop: while (iterator.h()) {
      var destination = iterator.i().s4w_1;
      var navigator = $this.t54_1.y51(destination.n4y_1);
      if (inclusive || !(destination.s4y_1 === destinationId)) {
        popOperations.e(navigator);
      }
      if (destination.s4y_1 === destinationId) {
        foundDestination = destination;
        break $l$loop;
      }
    }
    if (foundDestination == null) {
      var destinationName = Companion_instance_0.e4z(destinationId);
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
    if ($this.f54_1.q()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_0 = $this.f54_1;
      var iterator = this_0.d2(this_0.j());
      while (iterator.y4()) {
        var element = iterator.a5();
        // Inline function 'androidx.navigation.NavController.popBackStackInternal.<anonymous>' call
        var hasRoute = element.s4w_1.z4z(route, element.ac());
        if (inclusive || !hasRoute) {
          var navigator = $this.t54_1.y51(element.s4w_1.n4y_1);
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
    var foundDestination = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
    if (foundDestination == null) {
      println('Ignoring popBackStack to route ' + route + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function executePopOperations($this, popOperations, foundDestination, inclusive, saveState) {
    var popped = {_v: false};
    var savedState = ArrayDeque_init_$Create$();
    var tmp0_iterator = popOperations.g();
    $l$loop: while (tmp0_iterator.h()) {
      var navigator = tmp0_iterator.i();
      var receivedPop = {_v: false};
      var tmp = $this.f54_1.ng();
      popBackStackInternal(navigator, $this, tmp, saveState, NavController$executePopOperations$lambda(receivedPop, popped, $this, saveState, savedState));
      if (!receivedPop._v) {
        break $l$loop;
      }
    }
    if (saveState) {
      if (!inclusive) {
        // Inline function 'kotlin.sequences.forEach' call
        var tmp_0 = generateSequence(foundDestination, NavController$executePopOperations$lambda_0);
        var tmp0_iterator_0 = takeWhile(tmp_0, NavController$executePopOperations$lambda_1($this)).g();
        while (tmp0_iterator_0.h()) {
          var element = tmp0_iterator_0.i();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_0 = $this.m54_1;
          var key = element.s4y_1;
          var tmp0_safe_receiver = savedState.mg();
          var value = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q53_1;
          this_0.f2(key, value);
        }
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!savedState.q()) {
        var firstState = savedState.lg();
        var firstStateDestination = $this.w55(firstState.r53_1);
        // Inline function 'kotlin.sequences.forEach' call
        var tmp_1 = generateSequence(firstStateDestination, NavController$executePopOperations$lambda_2);
        var tmp0_iterator_1 = takeWhile(tmp_1, NavController$executePopOperations$lambda_3($this)).g();
        while (tmp0_iterator_1.h()) {
          var element_0 = tmp0_iterator_1.i();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_1 = $this.m54_1;
          var key_0 = element_0.s4y_1;
          var value_0 = firstState.q53_1;
          this_1.f2(key_0, value_0);
        }
        if ($this.m54_1.k2().p(firstState.q53_1)) {
          // Inline function 'kotlin.collections.set' call
          var this_2 = $this.n54_1;
          var key_1 = firstState.q53_1;
          this_2.f2(key_1, savedState);
        }
      }
    }
    return popped._v;
  }
  function popEntryFromBackStack($this, popUpTo, saveState, savedState) {
    var entry = $this.f54_1.ng();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!entry.equals(popUpTo)) {
      // Inline function 'androidx.navigation.NavController.popEntryFromBackStack.<anonymous>' call
      var message = 'Attempted to pop ' + popUpTo.s4w_1.toString() + ', which is not the top of the back stack ' + ('(' + entry.s4w_1.toString() + ')');
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    removeLast($this.f54_1);
    var navigator = $this.x55().y51(entry.s4w_1.n4y_1);
    var state = $this.u54_1.n2(navigator);
    var tmp;
    var tmp1_safe_receiver = state == null ? null : state.l4w_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w();
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p(entry)) === true) {
      tmp = true;
    } else {
      tmp = $this.l54_1.l2(entry);
    }
    var transitioning = tmp;
    if (entry.y47().m45().i45(State_CREATED_getInstance())) {
      if (saveState) {
        entry.r4x(State_CREATED_getInstance());
        savedState.pg(NavBackStackEntryState_init_$Create$(entry));
      }
      if (!transitioning) {
        entry.r4x(State_DESTROYED_getInstance());
        $this.r55(entry);
      } else {
        entry.r4x(State_CREATED_getInstance());
      }
    }
    if (!saveState && !transitioning) {
      var tmp3_safe_receiver = $this.p54_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.u55(entry.w4w_1);
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
    var tmp0_iterator = $this.u54_1.k2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element.j4w_1 = true;
    }
    var restored = restoreStateInternal($this, destinationId, null, navOptions(NavController$clearBackStackInternal$lambda), null);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = $this.u54_1.k2().g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element_0.j4w_1 = false;
    }
    return restored && popBackStackInternal_0($this, destinationId, true, false);
  }
  function _get_destinationCountOnBackStack__uqfh68($this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = $this.f54_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.navigation.NavController.<get-destinationCountOnBackStack>.<anonymous>' call
        var tmp_0 = element.s4w_1;
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
      if (!$this.f54_1.q()) {
        var tmp_0 = $this.f54_1.ng().s4w_1;
        tmp = tmp_0 instanceof NavGraph;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      popEntryFromBackStack$default($this, $this.f54_1.ng());
    }
    var lastBackStackEntry = $this.f54_1.og();
    if (!(lastBackStackEntry == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      $this.z54_1.e(lastBackStackEntry);
    }
    $this.y54_1 = $this.y54_1 + 1 | 0;
    $this.p55();
    $this.y54_1 = $this.y54_1 - 1 | 0;
    if ($this.y54_1 === 0) {
      var dispatchList = toMutableList($this.z54_1);
      $this.z54_1.i2();
      var tmp5_iterator = dispatchList.g();
      while (tmp5_iterator.h()) {
        var backStackEntry = tmp5_iterator.i();
        var tmp6_iterator = $this.q54_1.g();
        while (tmp6_iterator.h()) {
          var listener = tmp6_iterator.i();
          listener.y55($this, backStackEntry.s4w_1, backStackEntry.ac());
        }
        $this.a55_1.g1u(backStackEntry);
      }
      $this.g54_1.g1u(toMutableList($this.f54_1));
      $this.i54_1.g1u($this.q55());
    }
    return !(lastBackStackEntry == null);
  }
  function onGraphCreated($this, startDestinationArgs) {
    var tmp0_safe_receiver = $this.c54_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var navigatorNames = tmp0_safe_receiver.p47('multiplatform-support-nav:controller:navigatorState:names');
      if (!(navigatorNames == null)) {
        var tmp0_iterator = navigatorNames.g();
        while (tmp0_iterator.h()) {
          var name = tmp0_iterator.i();
          var navigator = $this.t54_1.y51(ensureNotNull(name));
          var bundle = tmp0_safe_receiver.o47(name);
          if (!(bundle == null)) {
            navigator.h52(bundle);
          }
        }
      }
    }
    var tmp1_safe_receiver = $this.d54_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_iterator_0 = tmp1_safe_receiver.g();
      while (tmp0_iterator_0.h()) {
        var state = tmp0_iterator_0.i();
        var node = $this.w55(state.r53_1);
        if (node == null) {
          var dest = Companion_instance_0.e4z(state.r53_1);
          throw IllegalStateException_init_$Create$('Restoring the Navigation back stack failed: destination ' + dest + ' cannot be ' + ('found from the current destination ' + toString($this.z55())));
        }
        var entry = state.z53(node, $this.n55(), $this.p54_1);
        var navigator_0 = $this.t54_1.y51(node.n4y_1);
        // Inline function 'kotlin.collections.getOrPut' call
        var this_0 = $this.u54_1;
        var value = this_0.n2(navigator_0);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
          var answer = new NavControllerNavigatorState($this, navigator_0);
          this_0.f2(navigator_0, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var navigatorBackStack = tmp;
        $this.f54_1.e(entry);
        navigatorBackStack.m55(entry);
        var parent = entry.s4w_1.o4y_1;
        if (!(parent == null)) {
          linkChildToParent($this, entry, getBackStackEntry($this, parent.s4y_1));
        }
      }
      $this.d54_1 = null;
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_1 = $this.t54_1.n53().k2();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_1.g();
    while (tmp0_iterator_1.h()) {
      var element = tmp0_iterator_1.i();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      if (!element.c4z_1) {
        destination.e(element);
      }
    }
    var tmp0_iterator_2 = destination.g();
    while (tmp0_iterator_2.h()) {
      var element_0 = tmp0_iterator_2.i();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = $this.u54_1;
      var value_0 = this_2.n2(element_0);
      var tmp_0;
      if (value_0 == null) {
        // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
        var answer_0 = new NavControllerNavigatorState($this, element_0);
        this_2.f2(element_0, answer_0);
        tmp_0 = answer_0;
      } else {
        tmp_0 = value_0;
      }
      var navigatorBackStack_0 = tmp_0;
      element_0.c52(navigatorBackStack_0);
    }
    if (!($this.b54_1 == null) && $this.f54_1.q()) {
      var deepLinked = false;
      if (!deepLinked) {
        navigate($this, ensureNotNull($this.b54_1), startDestinationArgs, null, null);
      }
    } else {
      dispatchOnDestinationChanged($this);
    }
  }
  function getTopGraph(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4.og();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull($this.b54_1) : tmp1_elvis_lhs;
    var tmp;
    if (currentNode instanceof NavGraph) {
      tmp = currentNode;
    } else {
      tmp = ensureNotNull(currentNode.o4y_1);
    }
    return tmp;
  }
  function generateRouteFilled($this, route) {
    var id = generateHashCode(serializer(getKClassFromExpression(route)));
    var destination = $this.b56($this.a56(), id, true);
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (destination == null) {
        // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
        var message = 'Destination with route ' + getKClassFromExpression(route).kb() + ' cannot be found ' + ('in navigation graph ' + toString($this.b54_1));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = destination.ac();
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(this_0.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.v();
      // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
      var tmp$ret$3 = element.w().e4u_1;
      destination_0.f2(tmp, tmp$ret$3);
    }
    return generateRouteWithArgs(route, destination_0);
  }
  function navigate($this, node, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.u54_1.k2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element.j4w_1 = true;
    }
    var popped = false;
    var launchSingleTop = false;
    var navigated = {_v: false};
    if (!(navOptions == null)) {
      if (!(navOptions.n52_1 == null))
        popped = popBackStackInternal_2($this, ensureNotNull(navOptions.n52_1), navOptions.g53(), navOptions.h53());
      else if (!(navOptions.o52_1 == null))
        popped = popBackStackInternal_0($this, generateHashCode(serializer(ensureNotNull(navOptions.o52_1))), navOptions.g53(), navOptions.h53());
      else if (!(navOptions.p52_1 == null))
        popped = popBackStackInternal_1($this, ensureNotNull(navOptions.p52_1), navOptions.g53(), navOptions.h53());
      else if (!(navOptions.k52_1 === -1))
        popped = popBackStackInternal_0($this, navOptions.k52_1, navOptions.g53(), navOptions.h53());
    }
    var finalArgs = node.b50(args);
    var tmp;
    if ((navOptions == null ? null : navOptions.f53()) === true) {
      tmp = $this.m54_1.l2(node.s4y_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      navigated._v = restoreStateInternal($this, node.s4y_1, finalArgs, navOptions, navigatorExtras);
    } else {
      var tmp_0;
      if ((navOptions == null ? null : navOptions.e53()) === true) {
        tmp_0 = launchSingleTopInternal($this, node, args);
      } else {
        tmp_0 = false;
      }
      launchSingleTop = tmp_0;
      if (!launchSingleTop) {
        var backStackEntry = Companion_instance.t4x(node, finalArgs, $this.n55(), $this.p54_1);
        var navigator = $this.t54_1.y51(node.n4y_1);
        var tmp_1 = listOf(backStackEntry);
        navigateInternal(navigator, $this, tmp_1, navOptions, navigatorExtras, NavController$navigate$lambda(navigated, $this, node, finalArgs));
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = $this.u54_1.k2().g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element_0.j4w_1 = false;
    }
    if (popped || navigated._v || launchSingleTop) {
      dispatchOnDestinationChanged($this);
    } else {
      $this.p55();
    }
  }
  function launchSingleTopInternal($this, node, args) {
    var currentBackStackEntry = $this.c56();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var this_0 = $this.f54_1;
      var iterator = this_0.d2(this_0.j());
      while (iterator.y4()) {
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        if (iterator.a5().s4w_1 === node) {
          tmp$ret$1 = iterator.z4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    var nodeIndex = tmp$ret$1;
    if (nodeIndex === -1)
      return false;
    if (node instanceof NavGraph) {
      var tmp = Companion_instance_1.q50(node);
      var childHierarchyId = toList(map(tmp, NavController$launchSingleTopInternal$lambda));
      if (!(($this.f54_1.kg_1 - nodeIndex | 0) === childHierarchyId.j()))
        return false;
      // Inline function 'kotlin.collections.map' call
      var this_1 = $this.f54_1.e2(nodeIndex, $this.f54_1.kg_1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator = this_1.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i();
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        var tmp$ret$2 = item.s4w_1.s4y_1;
        destination.e(tmp$ret$2);
      }
      var backQueueId = destination;
      if (!equals(backQueueId, childHierarchyId))
        return false;
    } else {
      var tmp_0 = node.s4y_1;
      var tmp1_safe_receiver = currentBackStackEntry == null ? null : currentBackStackEntry.s4w_1;
      if (!(tmp_0 === (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s4y_1))) {
        return false;
      }
    }
    var tempBackQueue = ArrayDeque_init_$Create$();
    while (get_lastIndex($this.f54_1) >= nodeIndex) {
      var oldEntry = removeLast($this.f54_1);
      $this.r55(oldEntry);
      var newEntry = NavBackStackEntry_init_$Create$(oldEntry, oldEntry.s4w_1.b50(args));
      tempBackQueue.pg(newEntry);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = tempBackQueue.g();
    while (tmp0_iterator_0.h()) {
      var element = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var parent = element.s4w_1.o4y_1;
      if (!(parent == null)) {
        var newParent = getBackStackEntry($this, parent.s4y_1);
        linkChildToParent($this, element, newParent);
      }
      $this.f54_1.e(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = tempBackQueue.g();
    while (tmp0_iterator_1.h()) {
      var element_0 = tmp0_iterator_1.i();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var navigator = $this.t54_1.y51(element_0.s4w_1.n4y_1);
      navigator.r4w(element_0);
    }
    return true;
  }
  function restoreStateInternal($this, id, args, navOptions, navigatorExtras) {
    if (!$this.m54_1.l2(id)) {
      return false;
    }
    var backStackId = $this.m54_1.n2(id);
    var tmp = $this.m54_1.k2();
    removeAll(tmp, NavController$restoreStateInternal$lambda(backStackId));
    // Inline function 'kotlin.collections.remove' call
    var this_0 = $this.n54_1;
    var backStackState = (isInterface(this_0, KtMutableMap) ? this_0 : THROW_CCE()).g2(backStackId);
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
    var tmp0_iterator = entries.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var tmp = element.s4w_1;
      if (!(tmp instanceof NavGraph)) {
        destination.e(element);
      }
    }
    var tmp0_iterator_0 = destination.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var previousEntryList = lastOrNull(entriesGroupedByNavigator);
      var tmp1_safe_receiver = previousEntryList == null ? null : last(previousEntryList);
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s4w_1;
      var previousNavigatorName = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.n4y_1;
      if (previousNavigatorName === element_0.s4w_1.n4y_1) {
        // Inline function 'kotlin.collections.plusAssign' call
        previousEntryList.e(element_0);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = mutableListOf([element_0]);
        entriesGroupedByNavigator.e(element_1);
      }
    }
    var navigated = {_v: false};
    var tmp0_iterator_1 = entriesGroupedByNavigator.g();
    while (tmp0_iterator_1.h()) {
      var entryList = tmp0_iterator_1.i();
      var navigator = $this.t54_1.y51(first(entryList).s4w_1.n4y_1);
      var lastNavigatedIndex = {_v: 0};
      navigateInternal(navigator, $this, entryList, navOptions, navigatorExtras, NavController$executeRestoreState$lambda(navigated, entries, lastNavigatedIndex, $this, args));
    }
    return navigated._v;
  }
  function instantiateBackStack($this, backStackState) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var backStack = ArrayList_init_$Create$();
    var tmp0_safe_receiver = $this.f54_1.og();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
    var currentDestination = tmp1_elvis_lhs == null ? $this.a56() : tmp1_elvis_lhs;
    if (backStackState == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = backStackState.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>' call
        var node = $this.b56(currentDestination, element.r53_1, true);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (node == null) {
            // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>.<anonymous>' call
            var dest = Companion_instance_0.e4z(element.r53_1);
            var message = 'Restore State failed: destination ' + dest + ' cannot be found from the current ' + ('destination ' + currentDestination.toString());
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            break $l$block;
          }
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = element.z53(node, $this.n55(), $this.p54_1);
        backStack.e(element_0);
        currentDestination = node;
      }
    }
    return backStack;
  }
  function addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries) {
    var newDest = backStackEntry.s4w_1;
    if (!isInterface(newDest, FloatingWindow)) {
      $l$loop: while (true) {
        var tmp;
        var tmp_0;
        if (!$this.f54_1.q()) {
          var tmp_1 = $this.f54_1.ng().s4w_1;
          tmp_0 = isInterface(tmp_1, FloatingWindow);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = popBackStackInternal$default($this, $this.f54_1.ng().s4w_1.s4y_1, true);
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
        var parent = ensureNotNull(destination).o4y_1;
        if (!(parent == null)) {
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.lastOrNull' call
            var iterator = restoredEntries.d2(restoredEntries.j());
            while (iterator.y4()) {
              var element = iterator.a5();
              // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
              if (element.s4w_1.equals(parent)) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
            tmp$ret$1 = null;
          }
          var tmp0_elvis_lhs = tmp$ret$1;
          var entry = tmp0_elvis_lhs == null ? Companion_instance.t4x(parent, finalArgs, $this.n55(), $this.p54_1) : tmp0_elvis_lhs;
          hierarchy.pg(entry);
          var tmp_2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$this.f54_1.q()) {
            tmp_2 = $this.f54_1.ng().s4w_1 === parent;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            popEntryFromBackStack$default($this, $this.f54_1.ng());
          }
        }
        destination = parent;
      }
       while (!(destination == null) && !(destination === node));
    }
    destination = hierarchy.q() ? newDest : hierarchy.lg().s4w_1;
    while (!(destination == null) && !($this.w55(destination.s4y_1) === destination)) {
      var parent_0 = destination.o4y_1;
      if (!(parent_0 == null)) {
        var tmp_3;
        if ((finalArgs == null ? null : finalArgs.q()) === true) {
          tmp_3 = null;
        } else {
          tmp_3 = finalArgs;
        }
        var args = tmp_3;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.collections.lastOrNull' call
          var iterator_0 = restoredEntries.d2(restoredEntries.j());
          while (iterator_0.y4()) {
            var element_0 = iterator_0.a5();
            // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
            if (element_0.s4w_1.equals(parent_0)) {
              tmp$ret$4 = element_0;
              break $l$block_0;
            }
          }
          tmp$ret$4 = null;
        }
        var tmp2_elvis_lhs = tmp$ret$4;
        var entry_0 = tmp2_elvis_lhs == null ? Companion_instance.t4x(parent_0, parent_0.b50(args), $this.n55(), $this.p54_1) : tmp2_elvis_lhs;
        hierarchy.pg(entry_0);
      }
      destination = parent_0;
    }
    var overlappingDestination = hierarchy.q() ? newDest : hierarchy.lg().s4w_1;
    $l$loop_0: while (true) {
      var tmp_4;
      var tmp_5;
      if (!$this.f54_1.q()) {
        var tmp_6 = $this.f54_1.ng().s4w_1;
        tmp_5 = tmp_6 instanceof NavGraph;
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        var tmp_7 = $this.f54_1.ng().s4w_1;
        tmp_4 = (tmp_7 instanceof NavGraph ? tmp_7 : THROW_CCE()).u4z_1.o(overlappingDestination.s4y_1) == null;
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_0;
      }
      popEntryFromBackStack$default($this, $this.f54_1.ng());
    }
    var tmp3_elvis_lhs = $this.f54_1.mg();
    var firstEntry = tmp3_elvis_lhs == null ? hierarchy.mg() : tmp3_elvis_lhs;
    if (!equals(firstEntry == null ? null : firstEntry.s4w_1, $this.b54_1)) {
      var tmp$ret$6;
      $l$block_1: {
        // Inline function 'kotlin.collections.lastOrNull' call
        var iterator_1 = restoredEntries.d2(restoredEntries.j());
        while (iterator_1.y4()) {
          var element_1 = iterator_1.a5();
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
          if (element_1.s4w_1.equals(ensureNotNull($this.b54_1))) {
            tmp$ret$6 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$6 = null;
      }
      var tmp5_elvis_lhs = tmp$ret$6;
      var entry_1 = tmp5_elvis_lhs == null ? Companion_instance.t4x(ensureNotNull($this.b54_1), ensureNotNull($this.b54_1).b50(finalArgs), $this.n55(), $this.p54_1) : tmp5_elvis_lhs;
      hierarchy.pg(entry_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = hierarchy.g();
    while (tmp0_iterator.h()) {
      var element_2 = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var navigator = $this.t54_1.y51(element_2.s4w_1.n4y_1);
      var tmp$ret$8;
      $l$block_2: {
        // Inline function 'kotlin.checkNotNull' call
        var value = $this.u54_1.n2(navigator);
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>.<anonymous>' call
          var message = 'NavigatorBackStack for ' + node.n4y_1 + ' should already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$8 = value;
          break $l$block_2;
        }
      }
      var navigatorBackStack = tmp$ret$8;
      navigatorBackStack.m55(element_2);
    }
    $this.f54_1.n(hierarchy);
    $this.f54_1.e(backStackEntry);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = plus(hierarchy, backStackEntry).g();
    while (tmp0_iterator_0.h()) {
      var element_3 = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var parent_1 = element_3.s4w_1.o4y_1;
      if (!(parent_1 == null)) {
        linkChildToParent($this, element_3, getBackStackEntry($this, parent_1.s4y_1));
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
      var this_0 = $this.f54_1;
      var iterator = this_0.d2(this_0.j());
      while (iterator.y4()) {
        var element = iterator.a5();
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        if (element.s4w_1.s4y_1 === destinationId) {
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
        var message = 'No destination with ID ' + destinationId + " is on the NavController's back stack. The " + ('current destination is ' + toString($this.z55()));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block_0;
      }
    }
    return lastFromBackStack;
  }
  function Companion_0() {
    this.d56_1 = 'multiplatform-support-nav:controller:navigatorState';
    this.e56_1 = 'multiplatform-support-nav:controller:navigatorState:names';
    this.f56_1 = 'multiplatform-support-nav:controller:backStack';
    this.g56_1 = 'multiplatform-support-nav:controller:backStackDestIds';
    this.h56_1 = 'multiplatform-support-nav:controller:backStackIds';
    this.i56_1 = 'multiplatform-support-nav:controller:backStackStates';
    this.j56_1 = 'multiplatform-support-nav:controller:backStackStates:';
    this.k56_1 = 'multiplatform-support-nav:controller:deepLinkHandled';
    this.l56_1 = true;
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.m56_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).a45 = function (source, event) {
    return this.m56_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).s3 = function () {
    return this.m56_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
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
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function NavController$lifecycleObserver$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      this$0.r54_1 = event.f45();
      var tmp;
      if (!(this$0.b54_1 == null)) {
        var tmp0_iterator = this$0.f54_1.g();
        while (tmp0_iterator.h()) {
          var entry = tmp0_iterator.i();
          entry.f46(event);
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
    var tmp0_safe_receiver = destination.o4y_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o50()) === destination.s4y_1) {
      tmp = destination.o4y_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_1(this$0) {
    return function (destination) {
      return !this$0.m54_1.l2(destination.s4y_1);
    };
  }
  function NavController$executePopOperations$lambda_2(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.o4y_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o50()) === destination.s4y_1) {
      tmp = destination.o4y_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_3(this$0) {
    return function (destination) {
      return !this$0.m54_1.l2(destination.s4y_1);
    };
  }
  function NavController$clearBackStackInternal$lambda($this$navOptions) {
    $this$navOptions.w4v_1 = true;
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
    return it.s4y_1;
  }
  function NavController$restoreStateInternal$lambda($backStackId) {
    return function (it) {
      return it == $backStackId;
    };
  }
  function NavController$executeRestoreState$lambda($navigated, $entries, $lastNavigatedIndex, this$0, $args) {
    return function (entry) {
      $navigated._v = true;
      var entryIndex = $entries.r(entry);
      var tmp;
      if (!(entryIndex === -1)) {
        // Inline function 'kotlin.also' call
        var this_0 = $entries.e2($lastNavigatedIndex._v, entryIndex + 1 | 0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>.<anonymous>' call
        $lastNavigatedIndex._v = entryIndex + 1 | 0;
        tmp = this_0;
      } else {
        tmp = emptyList();
      }
      var restoredEntries = tmp;
      addEntryToBackStack(this$0, entry.s4w_1, $args, entry, restoredEntries);
      return Unit_instance;
    };
  }
  function NavController() {
    this.b54_1 = null;
    this.c54_1 = null;
    this.d54_1 = null;
    this.e54_1 = false;
    this.f54_1 = ArrayDeque_init_$Create$();
    this.g54_1 = MutableStateFlow(emptyList());
    this.h54_1 = asStateFlow(this.g54_1);
    this.i54_1 = MutableStateFlow(emptyList());
    this.j54_1 = asStateFlow(this.i54_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k54_1 = LinkedHashMap_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.l54_1 = LinkedHashMap_init_$Create$_0();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.m54_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.n54_1 = LinkedHashMap_init_$Create$_0();
    this.o54_1 = null;
    this.p54_1 = null;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.q54_1 = ArrayList_init_$Create$();
    this.r54_1 = State_INITIALIZED_getInstance();
    var tmp_4 = this;
    var tmp_5 = NavController$lifecycleObserver$lambda(this);
    tmp_4.s54_1 = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_5);
    this.t54_1 = new NavigatorProvider();
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.u54_1 = LinkedHashMap_init_$Create$_0();
    this.v54_1 = null;
    this.w54_1 = null;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.x54_1 = LinkedHashMap_init_$Create$_0();
    this.t54_1.o53(new NavGraphNavigator(this.t54_1));
    this.y54_1 = 0;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_8.z54_1 = ArrayList_init_$Create$();
    this.a55_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    this.b55_1 = asSharedFlow(this.a55_1);
  }
  protoOf(NavController).n56 = function (graph) {
    this.o56(graph, null);
  };
  protoOf(NavController).a56 = function () {
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.b54_1 == null) {
        // Inline function 'androidx.navigation.NavController.<get-graph>.<anonymous>' call
        var message = 'You must call setGraph() before calling getGraph()';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var tmp = this.b54_1;
    return tmp instanceof NavGraph ? tmp : THROW_CCE();
  };
  protoOf(NavController).r55 = function (child) {
    var tmp0_elvis_lhs = this.k54_1.g2(child);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp1_safe_receiver = this.l54_1.n2(parent);
    var count = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p56();
    if (count === 0) {
      // Inline function 'androidx.navigation.get' call
      var this_0 = this.t54_1;
      var name = parent.s4w_1.n4y_1;
      var navGraphNavigator = this_0.y51(name);
      var tmp2_safe_receiver = this.u54_1.n2(navGraphNavigator);
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.e4x(parent);
      }
      this.l54_1.g2(parent);
    }
    return parent;
  };
  protoOf(NavController).n55 = function () {
    var tmp;
    if (this.o54_1 == null) {
      tmp = State_CREATED_getInstance();
    } else {
      tmp = this.r54_1;
    }
    return tmp;
  };
  protoOf(NavController).x55 = function () {
    return this.t54_1;
  };
  protoOf(NavController).f52 = function () {
    var tmp;
    if (this.f54_1.q()) {
      tmp = false;
    } else {
      tmp = popBackStack(this, ensureNotNull(this.z55()).s4y_1, true);
    }
    return tmp;
  };
  protoOf(NavController).v55 = function (destinationId, inclusive, saveState) {
    var popped = popBackStackInternal_0(this, destinationId, inclusive, saveState);
    return popped && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).o55 = function (popUpTo, onComplete) {
    var popIndex = this.f54_1.r(popUpTo);
    if (popIndex < 0) {
      println('Ignoring pop of ' + popUpTo.toString() + ' as it was not found on the current back stack');
      return Unit_instance;
    }
    if (!((popIndex + 1 | 0) === this.f54_1.kg_1)) {
      popBackStackInternal_0(this, this.f54_1.o(popIndex + 1 | 0).s4w_1.s4y_1, true, false);
    }
    popEntryFromBackStack$default(this, popUpTo);
    onComplete();
    dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).q56 = function () {
    if (_get_destinationCountOnBackStack__uqfh68(this) === 1) {
      return false;
    } else {
      return this.f52();
    }
  };
  protoOf(NavController).p55 = function () {
    var backStack = toMutableList(this.f54_1);
    if (backStack.q()) {
      return Unit_instance;
    }
    var nextResumed = last(backStack).s4w_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var nextStarted = ArrayList_init_$Create$();
    if (!(nextResumed == null) ? isInterface(nextResumed, FloatingWindow) : false) {
      var iterator = reversed(backStack).g();
      $l$loop: while (iterator.h()) {
        var destination = iterator.i().s4w_1;
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
    var iterator_0 = reversed(backStack).g();
    while (iterator_0.h()) {
      var entry = iterator_0.i();
      var currentMaxLifecycle = entry.c4x_1;
      var destination_0 = entry.s4w_1;
      if (!(nextResumed == null) && destination_0.s4y_1 === nextResumed.s4y_1) {
        if (!currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
          var navigator = this.x55().y51(entry.s4w_1.n4y_1);
          var state = this.u54_1.n2(navigator);
          var tmp1_safe_receiver = state == null ? null : state.l4w_1;
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w();
          var transitioning = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p(entry);
          var tmp_0;
          if (!(transitioning === true)) {
            var tmp3_safe_receiver = this.l54_1.n2(entry);
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.zp()) === 0);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.set' call
            var value = State_RESUMED_getInstance();
            upwardStateTransitions.f2(entry, value);
          } else {
            // Inline function 'kotlin.collections.set' call
            var value_0 = State_STARTED_getInstance();
            upwardStateTransitions.f2(entry, value_0);
          }
        }
        var tmp4_safe_receiver = firstOrNull(nextStarted);
        if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.s4y_1) === destination_0.s4y_1) {
          removeFirst(nextStarted);
        }
        nextResumed = nextResumed.o4y_1;
      } else {
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!nextStarted.q()) {
          tmp_1 = destination_0.s4y_1 === first(nextStarted).s4y_1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var started = removeFirst(nextStarted);
          if (currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
            entry.r4x(State_STARTED_getInstance());
          } else if (!currentMaxLifecycle.equals(State_STARTED_getInstance())) {
            // Inline function 'kotlin.collections.set' call
            var value_1 = State_STARTED_getInstance();
            upwardStateTransitions.f2(entry, value_1);
          }
          var tmp5_safe_receiver = started.o4y_1;
          if (tmp5_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            if (!nextStarted.p(tmp5_safe_receiver)) {
              nextStarted.e(tmp5_safe_receiver);
            }
          }
        } else {
          entry.r4x(State_CREATED_getInstance());
        }
      }
    }
    iterator_0 = backStack.g();
    while (iterator_0.h()) {
      var entry_0 = iterator_0.i();
      var newState = upwardStateTransitions.n2(entry_0);
      if (!(newState == null)) {
        entry_0.r4x(newState);
      } else {
        entry_0.z4x();
      }
    }
  };
  protoOf(NavController).q55 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entries = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.u54_1.k2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = element.l4w_1.w();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_0.g();
      while (tmp0_iterator_0.h()) {
        var element_0 = tmp0_iterator_0.i();
        // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>.<anonymous>' call
        if (!entries.p(element_0) && !element_0.c4x_1.i45(State_STARTED_getInstance())) {
          destination.e(element_0);
        }
      }
      addAll(entries, destination);
    }
    // Inline function 'kotlin.collections.plusAssign' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = this.f54_1;
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_1.g();
    while (tmp0_iterator_1.h()) {
      var element_1 = tmp0_iterator_1.i();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      if (!entries.p(element_1) && element_1.c4x_1.i45(State_STARTED_getInstance())) {
        destination_0.e(element_1);
      }
    }
    addAll(entries, destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_2 = entries.g();
    while (tmp0_iterator_2.h()) {
      var element_2 = tmp0_iterator_2.i();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      var tmp = element_2.s4w_1;
      if (!(tmp instanceof NavGraph)) {
        destination_1.e(element_2);
      }
    }
    return destination_1;
  };
  protoOf(NavController).o56 = function (graph, startDestinationArgs) {
    if (!equals(this.b54_1, graph)) {
      var tmp0_safe_receiver = this.b54_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var savedBackStackIds = ArrayList_init_$Create$_1(this.m54_1.j2());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = savedBackStackIds.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          clearBackStackInternal(this, element);
        }
        popBackStackInternal$default(this, tmp0_safe_receiver.s4y_1, true);
      }
      this.b54_1 = graph;
      onGraphCreated(this, startDestinationArgs);
    } else {
      var inductionVariable = 0;
      var last = graph.u4z_1.hr();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var newDestination = graph.u4z_1.i13(i);
          var key = ensureNotNull(this.b54_1).u4z_1.p13(i);
          ensureNotNull(this.b54_1).u4z_1.s13(key, newDestination);
        }
         while (inductionVariable < last);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.f54_1.g();
      while (tmp0_iterator_0.h()) {
        var element_0 = tmp0_iterator_0.i();
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var hierarchy = asReversed(toList(Companion_instance_0.g4z(element_0.s4w_1)));
        // Inline function 'kotlin.collections.fold' call
        var accumulator = ensureNotNull(this.b54_1);
        var tmp0_iterator_1 = hierarchy.g();
        while (tmp0_iterator_1.h()) {
          var element_1 = tmp0_iterator_1.i();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          var newDest = accumulator;
          var tmp;
          if (element_1.equals(this.b54_1) && newDest.equals(graph)) {
            tmp = newDest;
          } else {
            if (newDest instanceof NavGraph) {
              tmp = ensureNotNull(newDest.p50(element_1.s4y_1));
            } else {
              tmp = newDest;
            }
          }
          accumulator = tmp;
        }
        var newDestination_0 = accumulator;
        element_0.s4w_1 = newDestination_0;
      }
    }
  };
  protoOf(NavController).z55 = function () {
    var tmp0_safe_receiver = this.c56();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
  };
  protoOf(NavController).w55 = function (destinationId) {
    if (this.b54_1 == null) {
      return null;
    }
    if (ensureNotNull(this.b54_1).s4y_1 === destinationId) {
      return this.b54_1;
    }
    var tmp0_safe_receiver = this.f54_1.og();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull(this.b54_1) : tmp1_elvis_lhs;
    return this.b56(currentNode, destinationId, false);
  };
  protoOf(NavController).b56 = function (_this__u8e3s4, destinationId, searchChildren) {
    if (_this__u8e3s4.s4y_1 === destinationId) {
      return _this__u8e3s4;
    }
    var tmp;
    if (_this__u8e3s4 instanceof NavGraph) {
      tmp = _this__u8e3s4;
    } else {
      tmp = ensureNotNull(_this__u8e3s4.o4y_1);
    }
    var currentGraph = tmp;
    return currentGraph.w50(destinationId, currentGraph, searchChildren);
  };
  protoOf(NavController).r56 = function (request, navOptions, navigatorExtras) {
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.b54_1 == null) {
        // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
        var message = 'Cannot navigate to ' + request.toString() + '. Navigation graph has not been set for ' + ('NavController ' + toString_0(this) + '.');
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var currGraph = getTopGraph(this.f54_1, this);
    var deepLinkMatch = currGraph.y4z(request, true, true, currGraph);
    if (!(deepLinkMatch == null)) {
      var destination = deepLinkMatch.u4y_1;
      var tmp0_elvis_lhs = destination.b50(deepLinkMatch.v4y_1);
      var args = tmp0_elvis_lhs == null ? Bundle_init_$Create$() : tmp0_elvis_lhs;
      var node = deepLinkMatch.u4y_1;
      navigate(this, node, args, navOptions, navigatorExtras);
    } else {
      throw IllegalArgumentException_init_$Create$('Navigation destination that matches route ' + request.toString() + ' cannot be found in the ' + ('navigation graph ' + toString(this.b54_1)));
    }
  };
  protoOf(NavController).s56 = function (route, builder) {
    this.t56(route, navOptions(builder));
  };
  protoOf(NavController).u56 = function (route, navOptions, navigatorExtras) {
    this.r56(Companion_instance_2.c4y(UriUtils_instance.yn(Companion_instance_0.f4z(route))).c2o(), navOptions, navigatorExtras);
  };
  protoOf(NavController).t56 = function (route, navOptions, navigatorExtras, $super) {
    navOptions = navOptions === VOID ? null : navOptions;
    navigatorExtras = navigatorExtras === VOID ? null : navigatorExtras;
    var tmp;
    if ($super === VOID) {
      this.u56(route, navOptions, navigatorExtras);
      tmp = Unit_instance;
    } else {
      tmp = $super.u56.call(this, route, navOptions, navigatorExtras);
    }
    return tmp;
  };
  protoOf(NavController).j48 = function () {
    var b = null;
    var navigatorNames = ArrayList_init_$Create$();
    var navigatorState = Bundle_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.t54_1.n53().u().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var name = tmp1_loop_parameter.v();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.w();
      var savedState = value.g52();
      if (!(savedState == null)) {
        navigatorNames.e(name);
        navigatorState.v46(name, savedState);
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!navigatorNames.q()) {
      b = Bundle_init_$Create$();
      navigatorState.x46('multiplatform-support-nav:controller:navigatorState:names', navigatorNames);
      b.v46('multiplatform-support-nav:controller:navigatorState', navigatorState);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.f54_1.q()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.f54_1.kg_1;
      var backStack = fillArrayVal(Array(size), null);
      var index = 0;
      var tmp2_iterator = this.f54_1.g();
      while (tmp2_iterator.h()) {
        var backStackEntry = tmp2_iterator.i();
        var tmp3 = index;
        index = tmp3 + 1 | 0;
        backStack[tmp3] = NavBackStackEntryState_init_$Create$(backStackEntry).a54();
      }
      b.i47('multiplatform-support-nav:controller:backStack', backStack);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m54_1.q()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackDestIds = new Int32Array(this.m54_1.j());
      var backStackIds = ArrayList_init_$Create$();
      var index_0 = 0;
      // Inline function 'kotlin.collections.iterator' call
      var tmp4_iterator = this.m54_1.u().g();
      while (tmp4_iterator.h()) {
        var tmp5_loop_parameter = tmp4_iterator.i();
        // Inline function 'kotlin.collections.component1' call
        var destId = tmp5_loop_parameter.v();
        // Inline function 'kotlin.collections.component2' call
        var id = tmp5_loop_parameter.w();
        var tmp6 = index_0;
        index_0 = tmp6 + 1 | 0;
        backStackDestIds[tmp6] = destId;
        // Inline function 'kotlin.collections.plusAssign' call
        backStackIds.e(id);
      }
      b.c47('multiplatform-support-nav:controller:backStackDestIds', backStackDestIds);
      b.x46('multiplatform-support-nav:controller:backStackIds', backStackIds);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n54_1.q()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackStateIds = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp7_iterator = this.n54_1.u().g();
      while (tmp7_iterator.h()) {
        var tmp8_loop_parameter = tmp7_iterator.i();
        // Inline function 'kotlin.collections.component1' call
        var id_0 = tmp8_loop_parameter.v();
        // Inline function 'kotlin.collections.component2' call
        var backStackStates = tmp8_loop_parameter.w();
        // Inline function 'kotlin.collections.plusAssign' call
        backStackStateIds.e(id_0);
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = backStackStates.kg_1;
        var states = fillArrayVal(Array(size_0), null);
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index_1 = 0;
        var tmp0_iterator_0 = backStackStates.g();
        while (tmp0_iterator_0.h()) {
          var item = tmp0_iterator_0.i();
          // Inline function 'androidx.navigation.NavController.saveState.<anonymous>' call
          var tmp1 = index_1;
          index_1 = tmp1 + 1 | 0;
          states[checkIndexOverflow(tmp1)] = item.a54();
        }
        b.i47('multiplatform-support-nav:controller:backStackStates:' + id_0, states);
      }
      b.x46('multiplatform-support-nav:controller:backStackStates', backStackStateIds);
    }
    if (this.e54_1) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      b.l46('multiplatform-support-nav:controller:deepLinkHandled', this.e54_1);
    }
    return b;
  };
  protoOf(NavController).v56 = function (navState) {
    if (navState == null) {
      return Unit_instance;
    }
    this.c54_1 = navState.o47('multiplatform-support-nav:controller:navigatorState');
    var tmp = this;
    var tmp0_safe_receiver = navState.r47('multiplatform-support-nav:controller:backStack');
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
        var tmp0_safe_receiver_0 = Companion_instance_3.y53(element);
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
    tmp.d54_1 = tmp_0;
    this.n54_1.i2();
    var backStackDestIds = navState.q47('multiplatform-support-nav:controller:backStackDestIds');
    var backStackIds = navState.p47('multiplatform-support-nav:controller:backStackIds');
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
        var this_0 = this.m54_1;
        var value = backStackIds.o(tmp1);
        this_0.f2(item, value);
      }
    }
    var backStackStateIds = navState.p47('multiplatform-support-nav:controller:backStackStates');
    var tmp2_safe_receiver = backStackStateIds == null ? null : filterNotNull(backStackStateIds);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp2_safe_receiver.g();
      while (tmp0_iterator.h()) {
        var element_0 = tmp0_iterator.i();
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp0_safe_receiver_1 = navState.r47('multiplatform-support-nav:controller:backStackStates:' + element_0);
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
            var tmp0_safe_receiver_2 = Companion_instance_3.y53(element_1);
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
          var this_1 = this.n54_1;
          // Inline function 'kotlin.apply' call
          var this_2 = ArrayDeque_init_$Create$_0(backStackState.j());
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>.<anonymous>' call
          var tmp0_iterator_0 = backStackState.g();
          while (tmp0_iterator_0.h()) {
            var i = tmp0_iterator_0.i();
            this_2.e(i);
          }
          this_1.f2(element_0, this_2);
        }
      }
    }
    this.e54_1 = navState.j47('multiplatform-support-nav:controller:deepLinkHandled');
  };
  protoOf(NavController).w56 = function (owner) {
    if (equals(owner, this.o54_1)) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.o54_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y47();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l45(this.s54_1);
    }
    this.o54_1 = owner;
    owner.y47().k45(this.s54_1);
  };
  protoOf(NavController).x56 = function (viewModelStore) {
    if (equals(this.p54_1, Companion_getInstance_2().z56(viewModelStore))) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.f54_1.q()) {
      // Inline function 'androidx.navigation.NavController.setViewModelStore.<anonymous>' call
      var message = 'ViewModelStore should be set before setGraph call';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    this.p54_1 = Companion_getInstance_2().z56(viewModelStore);
  };
  protoOf(NavController).c56 = function () {
    return this.f54_1.og();
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
    this_0.c49(getKClass(NavControllerViewModel), initializer);
    tmp.y56_1 = this_0.c2o();
  }
  protoOf(Companion_1).z56 = function (viewModelStore) {
    var viewModelProvider = Companion_getInstance().e4a(viewModelStore, this.y56_1);
    // Inline function 'androidx.lifecycle.get' call
    return viewModelProvider.g4a(getKClass(NavControllerViewModel));
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
    tmp.t55_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(NavControllerViewModel).u55 = function (backStackEntryId) {
    var viewModelStore = this.t55_1.g2(backStackEntryId);
    if (viewModelStore == null)
      null;
    else {
      viewModelStore.i2();
    }
  };
  protoOf(NavControllerViewModel).y49 = function () {
    var tmp0_iterator = this.t55_1.k2().g();
    while (tmp0_iterator.h()) {
      var store = tmp0_iterator.i();
      store.i2();
    }
    this.t55_1.i2();
  };
  protoOf(NavControllerViewModel).a4y = function (backStackEntryId) {
    var viewModelStore = this.t55_1.n2(backStackEntryId);
    if (viewModelStore == null) {
      viewModelStore = new ViewModelStore();
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.t55_1;
      var value = viewModelStore;
      this_0.f2(backStackEntryId, value);
    }
    return viewModelStore;
  };
  protoOf(NavControllerViewModel).toString = function () {
    var sb = new StringBuilder('NavControllerViewModel{');
    sb.ed(hashCode(this));
    sb.p8('} ViewModelStores (');
    var viewModelStoreIterator = this.t55_1.j2().g();
    while (viewModelStoreIterator.h()) {
      sb.p8(viewModelStoreIterator.i());
      if (viewModelStoreIterator.h()) {
        sb.p8(', ');
      }
    }
    sb.q8(_Char___init__impl__6a9atx(41));
    return sb.toString();
  };
  function NavHostController() {
    NavController.call(this);
  }
  protoOf(NavHostController).w56 = function (owner) {
    protoOf(NavController).w56.call(this, owner);
  };
  protoOf(NavHostController).x56 = function (viewModelStore) {
    protoOf(NavController).x56.call(this, viewModelStore);
  };
  function AtomicInt(initialValue) {
    this.c55_1 = atomic$int$1(initialValue);
  }
  protoOf(AtomicInt).d55 = function () {
    return this.c55_1.atomicfu$incrementAndGet();
  };
  protoOf(AtomicInt).p56 = function () {
    return this.c55_1.atomicfu$decrementAndGet();
  };
  protoOf(AtomicInt).zp = function () {
    return this.c55_1.kotlinx$atomicfu$value;
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
