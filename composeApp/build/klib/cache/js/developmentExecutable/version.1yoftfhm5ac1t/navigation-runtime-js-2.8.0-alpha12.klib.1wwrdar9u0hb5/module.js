(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-navigation-navigation-common.js', './compose-multiplatform-core-core-core-bundle.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-core-core-uri.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-navigation-navigation-common.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-core-core-uri.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-navigation-navigation-common' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
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
    globalThis['compose-multiplatform-core-navigation-navigation-runtime'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-core-core-uri'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_navigation_navigation_common, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_core_core_uri, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.j;
  var NavGraphBuilder_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.r;
  var protoOf = kotlin_kotlin.$_$.ki;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var Annotation = kotlin_kotlin.$_$.rn;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var objectCreate = kotlin_kotlin.$_$.ji;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dh;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.t;
  var toString = kotlin_kotlin.$_$.eq;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var hashCode = kotlin_kotlin.$_$.bh;
  var equals = kotlin_kotlin.$_$.sg;
  var NavigatorState = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.k;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var ensureNotNull = kotlin_kotlin.$_$.jp;
  var initMetadataForInterface = kotlin_kotlin.$_$.gh;
  var toString_0 = kotlin_kotlin.$_$.oi;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var println = kotlin_kotlin.$_$.dg;
  var toMutableList = kotlin_kotlin.$_$.le;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var Collection = kotlin_kotlin.$_$.d7;
  var isInterface = kotlin_kotlin.$_$.sh;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var reversed = kotlin_kotlin.$_$.yc;
  var Companion_getInstance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.v;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.s;
  var generateSequence = kotlin_kotlin.$_$.fk;
  var takeWhile = kotlin_kotlin.$_$.mk;
  var removeLast = kotlin_kotlin.$_$.wc;
  var navOptions = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.m;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.h;
  var checkCountOverflow = kotlin_kotlin.$_$.u8;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var generateHashCode = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var mapCapacity = kotlin_kotlin.$_$.zb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var generateRouteWithArgs = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.b;
  var listOf = kotlin_kotlin.$_$.xb;
  var Companion_getInstance_1 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.w;
  var map = kotlin_kotlin.$_$.jk;
  var toList = kotlin_kotlin.$_$.nk;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var get_lastIndex = kotlin_kotlin.$_$.mb;
  var NavBackStackEntry_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.n;
  var removeAll = kotlin_kotlin.$_$.qc;
  var KtMutableMap = kotlin_kotlin.$_$.x7;
  var lastOrNull = kotlin_kotlin.$_$.qb;
  var last = kotlin_kotlin.$_$.sb;
  var mutableListOf = kotlin_kotlin.$_$.gc;
  var first = kotlin_kotlin.$_$.ra;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.c;
  var plus = kotlin_kotlin.$_$.oc;
  var emptyList = kotlin_kotlin.$_$.ea;
  var FunctionAdapter = kotlin_kotlin.$_$.eg;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var NavigatorProvider = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.j;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.g;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var removeFirst = kotlin_kotlin.$_$.uc;
  var State_RESUMED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var firstOrNull = kotlin_kotlin.$_$.na;
  var addAll = kotlin_kotlin.$_$.e8;
  var asReversed = kotlin_kotlin.$_$.o8;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.w;
  var fillArrayVal = kotlin_kotlin.$_$.ug;
  var NavDeepLinkRequest = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.d;
  var Companion_getInstance_2 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.u;
  var UriUtils_getInstance = kotlin_org_jetbrains_androidx_core_core_uri.$_$.a;
  var checkIndexOverflow = kotlin_kotlin.$_$.v8;
  var filterNotNull = kotlin_kotlin.$_$.ma;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var asSequence = kotlin_kotlin.$_$.ak;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  var getKClass = kotlin_kotlin.$_$.g;
  var Companion_getInstance_3 = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.n;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var StringBuilder = kotlin_kotlin.$_$.qk;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a4;
  var NavViewModelStoreProvider = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.i;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.q1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavDeepLinkSaveStateControl, 'NavDeepLinkSaveStateControl', VOID, VOID, [Annotation]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavBackStackEntryState, 'NavBackStackEntryState');
  initMetadataForInterface(OnDestinationChangedListener, 'OnDestinationChangedListener');
  initMetadataForClass(NavControllerNavigatorState, 'NavControllerNavigatorState', VOID, NavigatorState);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(NavController, 'NavController', NavController);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(NavControllerViewModel, 'NavControllerViewModel', NavControllerViewModel, ViewModel, [ViewModel, NavViewModelStoreProvider]);
  initMetadataForClass(NavHostController, 'NavHostController', NavHostController, NavController);
  initMetadataForClass(AtomicInt, 'AtomicInt');
  //endregion
  function createGraph(_this__u8e3s4, startDestination, route, builder) {
    route = route === VOID ? null : route;
    // Inline function 'androidx.navigation.navigation' call
    var this_0 = _this__u8e3s4.get_navigatorProvider_9yxp35_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = NavGraphBuilder_init_$Create$(this_0, startDestination, route);
    // Inline function 'kotlin.contracts.contract' call
    builder(this_1);
    return this_1.build_1k0s4u_k$();
  }
  function NavDeepLinkSaveStateControl() {
  }
  protoOf(NavDeepLinkSaveStateControl).equals = function (other) {
    if (!(other instanceof NavDeepLinkSaveStateControl))
      return false;
    other instanceof NavDeepLinkSaveStateControl || THROW_CCE();
    return true;
  };
  protoOf(NavDeepLinkSaveStateControl).hashCode = function () {
    return 0;
  };
  protoOf(NavDeepLinkSaveStateControl).toString = function () {
    return '@androidx.navigation.NavDeepLinkSaveStateControl(' + ')';
  };
  function _get_KEY_ID__ytr2y8($this) {
    return $this.KEY_ID_1;
  }
  function _get_KEY_DESTINATION_ID__hq01z3($this) {
    return $this.KEY_DESTINATION_ID_1;
  }
  function _get_KEY_ARGS__cs13ea($this) {
    return $this.KEY_ARGS_1;
  }
  function _get_KEY_SAVED_STATE__1l02g($this) {
    return $this.KEY_SAVED_STATE_1;
  }
  function NavBackStackEntryState_init_$Init$(entry, $this) {
    NavBackStackEntryState.call($this, entry.get_id_kntnx8_k$(), entry.get_destination_9r3c63_k$().get_id_kntnx8_k$(), entry.get_arguments_p5ddub_k$(), Bundle_init_$Create$());
    entry.saveState_8an50n_k$($this.savedState_1);
    return $this;
  }
  function NavBackStackEntryState_init_$Create$(entry) {
    return NavBackStackEntryState_init_$Init$(entry, objectCreate(protoOf(NavBackStackEntryState)));
  }
  function Companion() {
    Companion_instance = this;
    this.KEY_ID_1 = 'NavBackStackEntryState.id';
    this.KEY_DESTINATION_ID_1 = 'NavBackStackEntryState.destinationId';
    this.KEY_ARGS_1 = 'NavBackStackEntryState.args';
    this.KEY_SAVED_STATE_1 = 'NavBackStackEntryState.savedState';
  }
  protoOf(Companion).fromBundle_93kj7a_k$ = function (bundle) {
    if (bundle == null)
      return null;
    var tmp0_elvis_lhs = bundle.getString_au6gao_k$('NavBackStackEntryState.id');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var id = tmp;
    var destinationId = bundle.getInt_lyy75e_k$('NavBackStackEntryState.destinationId');
    var args = bundle.getBundle_4qisc1_k$('NavBackStackEntryState.args');
    var tmp1_elvis_lhs = bundle.getBundle_4qisc1_k$('NavBackStackEntryState.savedState');
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var savedState = tmp_0;
    return new NavBackStackEntryState(id, destinationId, args, savedState);
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function NavBackStackEntryState(id, destinationId, args, savedState) {
    Companion_getInstance_4();
    this.id_1 = id;
    this.destinationId_1 = destinationId;
    this.args_1 = args;
    this.savedState_1 = savedState;
  }
  protoOf(NavBackStackEntryState).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBackStackEntryState).get_destinationId_3urg68_k$ = function () {
    return this.destinationId_1;
  };
  protoOf(NavBackStackEntryState).get_args_woj09y_k$ = function () {
    return this.args_1;
  };
  protoOf(NavBackStackEntryState).get_savedState_52fa37_k$ = function () {
    return this.savedState_1;
  };
  protoOf(NavBackStackEntryState).instantiate_jf2s9b_k$ = function (destination, hostLifecycleState, viewModel) {
    return Companion_getInstance().create_5hjegv_k$(destination, this.args_1, hostLifecycleState, viewModel, this.id_1, this.savedState_1);
  };
  protoOf(NavBackStackEntryState).toBundle_xlw0d9_k$ = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavBackStackEntryState.toBundle.<anonymous>' call
    this_0.putString_rtcuxu_k$('NavBackStackEntryState.id', this.id_1);
    this_0.putInt_bo1v9r_k$('NavBackStackEntryState.destinationId', this.destinationId_1);
    this_0.putBundle_yus54s_k$('NavBackStackEntryState.args', this.args_1);
    this_0.putBundle_yus54s_k$('NavBackStackEntryState.savedState', this.savedState_1);
    return this_0;
  };
  protoOf(NavBackStackEntryState).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBackStackEntryState).component2_7eebsb_k$ = function () {
    return this.destinationId_1;
  };
  protoOf(NavBackStackEntryState).component3_7eebsa_k$ = function () {
    return this.args_1;
  };
  protoOf(NavBackStackEntryState).component4_7eebs9_k$ = function () {
    return this.savedState_1;
  };
  protoOf(NavBackStackEntryState).copy_2n9odc_k$ = function (id, destinationId, args, savedState) {
    return new NavBackStackEntryState(id, destinationId, args, savedState);
  };
  protoOf(NavBackStackEntryState).copy$default_fxca90_k$ = function (id, destinationId, args, savedState, $super) {
    id = id === VOID ? this.id_1 : id;
    destinationId = destinationId === VOID ? this.destinationId_1 : destinationId;
    args = args === VOID ? this.args_1 : args;
    savedState = savedState === VOID ? this.savedState_1 : savedState;
    return $super === VOID ? this.copy_2n9odc_k$(id, destinationId, args, savedState) : $super.copy_2n9odc_k$.call(this, id, destinationId, args, savedState);
  };
  protoOf(NavBackStackEntryState).toString = function () {
    return 'NavBackStackEntryState(id=' + this.id_1 + ', destinationId=' + this.destinationId_1 + ', args=' + toString(this.args_1) + ', savedState=' + this.savedState_1.toString() + ')';
  };
  protoOf(NavBackStackEntryState).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + this.destinationId_1 | 0;
    result = imul(result, 31) + (this.args_1 == null ? 0 : hashCode(this.args_1)) | 0;
    result = imul(result, 31) + hashCode(this.savedState_1) | 0;
    return result;
  };
  protoOf(NavBackStackEntryState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBackStackEntryState))
      return false;
    var tmp0_other_with_cast = other instanceof NavBackStackEntryState ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.destinationId_1 === tmp0_other_with_cast.destinationId_1))
      return false;
    if (!equals(this.args_1, tmp0_other_with_cast.args_1))
      return false;
    if (!equals(this.savedState_1, tmp0_other_with_cast.savedState_1))
      return false;
    return true;
  };
  function NavController$NavControllerNavigatorState$pop$lambda(this$0, $popUpTo, $saveState) {
    return function () {
      protoOf(NavigatorState).pop_fb5htn_k$.call(this$0, $popUpTo, $saveState);
      return Unit_getInstance();
    };
  }
  function _get_KEY_NAVIGATOR_STATE__a5o6rs($this) {
    return $this.KEY_NAVIGATOR_STATE_1;
  }
  function _get_KEY_NAVIGATOR_STATE_NAMES__tqu30f($this) {
    return $this.KEY_NAVIGATOR_STATE_NAMES_1;
  }
  function _get_KEY_BACK_STACK__qs11qd($this) {
    return $this.KEY_BACK_STACK_1;
  }
  function _get_KEY_BACK_STACK_DEST_IDS__wrab9j($this) {
    return $this.KEY_BACK_STACK_DEST_IDS_1;
  }
  function _get_KEY_BACK_STACK_IDS__v6lz9e($this) {
    return $this.KEY_BACK_STACK_IDS_1;
  }
  function _get_KEY_BACK_STACK_STATES_IDS__z46yu1($this) {
    return $this.KEY_BACK_STACK_STATES_IDS_1;
  }
  function _get_KEY_BACK_STACK_STATES_PREFIX__q1s4i3($this) {
    return $this.KEY_BACK_STACK_STATES_PREFIX_1;
  }
  function _get_KEY_DEEP_LINK_HANDLED__ojsuf($this) {
    return $this.KEY_DEEP_LINK_HANDLED_1;
  }
  function _set_deepLinkSaveState__3metrd($this, _set____db54di) {
    $this.deepLinkSaveState_1 = _set____db54di;
  }
  function _get_deepLinkSaveState__pc7q1p($this) {
    return $this.deepLinkSaveState_1;
  }
  function _set__graph__ado314($this, _set____db54di) {
    $this._graph_1 = _set____db54di;
  }
  function _get__graph__8wxiec($this) {
    return $this._graph_1;
  }
  function _set_navigatorStateToRestore__e92oa4($this, _set____db54di) {
    $this.navigatorStateToRestore_1 = _set____db54di;
  }
  function _get_navigatorStateToRestore__682pzc($this) {
    return $this.navigatorStateToRestore_1;
  }
  function _set_backStackToRestore__1igf1h($this, _set____db54di) {
    $this.backStackToRestore_1 = _set____db54di;
  }
  function _get_backStackToRestore__wfew2v($this) {
    return $this.backStackToRestore_1;
  }
  function _set_deepLinkHandled__j7eaz5($this, _set____db54di) {
    $this.deepLinkHandled_1 = _set____db54di;
  }
  function _get_deepLinkHandled__93o3gl($this) {
    return $this.deepLinkHandled_1;
  }
  function _get_backQueue__gzto9z($this) {
    return $this.backQueue_1;
  }
  function _get__currentBackStack__mhl84q($this) {
    return $this._currentBackStack_1;
  }
  function _get__visibleEntries__maexbg($this) {
    return $this._visibleEntries_1;
  }
  function _get_childToParentEntries__ae7vtw($this) {
    return $this.childToParentEntries_1;
  }
  function _get_parentToChildCount__n0yr9v($this) {
    return $this.parentToChildCount_1;
  }
  function linkChildToParent($this, child, parent) {
    // Inline function 'kotlin.collections.set' call
    $this.childToParentEntries_1.put_4fpzoq_k$(child, parent);
    if ($this.parentToChildCount_1.get_wei43m_k$(parent) == null) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.parentToChildCount_1;
      var value = new AtomicInt(0);
      this_0.put_4fpzoq_k$(parent, value);
    }
    ensureNotNull($this.parentToChildCount_1.get_wei43m_k$(parent)).incrementAndGet_83mz02_k$();
  }
  function _get_backStackMap__kdwjdc($this) {
    return $this.backStackMap_1;
  }
  function _get_backStackStates__e9rt4e($this) {
    return $this.backStackStates_1;
  }
  function _set_lifecycleOwner__mwd35e($this, _set____db54di) {
    $this.lifecycleOwner_1 = _set____db54di;
  }
  function _get_lifecycleOwner__2mqcw2($this) {
    return $this.lifecycleOwner_1;
  }
  function _set_viewModel__dma3b3($this, _set____db54di) {
    $this.viewModel_1 = _set____db54di;
  }
  function _get_viewModel__fokd3h($this) {
    return $this.viewModel_1;
  }
  function _get_onDestinationChangedListeners__n909jr($this) {
    return $this.onDestinationChangedListeners_1;
  }
  function _get_lifecycleObserver__brifox($this) {
    return $this.lifecycleObserver_1;
  }
  function OnDestinationChangedListener() {
  }
  function _set__navigatorProvider__ylsuz2($this, _set____db54di) {
    $this._navigatorProvider_1 = _set____db54di;
  }
  function _get__navigatorProvider__nxjuq($this) {
    return $this._navigatorProvider_1;
  }
  function _get_navigatorState__6jegq7($this) {
    return $this.navigatorState_1;
  }
  function _set_addToBackStackHandler__as7xi8($this, _set____db54di) {
    $this.addToBackStackHandler_1 = _set____db54di;
  }
  function _get_addToBackStackHandler__gxu9xw($this) {
    return $this.addToBackStackHandler_1;
  }
  function _set_popFromBackStackHandler__semy3l($this, _set____db54di) {
    $this.popFromBackStackHandler_1 = _set____db54di;
  }
  function _get_popFromBackStackHandler__7xhju5($this) {
    return $this.popFromBackStackHandler_1;
  }
  function _get_entrySavedState__i8hgaz($this) {
    return $this.entrySavedState_1;
  }
  function navigateInternal(_this__u8e3s4, $this, entries, navOptions, navigatorExtras, handler) {
    $this.addToBackStackHandler_1 = handler;
    _this__u8e3s4.navigate_rlymw1_k$(entries, navOptions, navigatorExtras);
    $this.addToBackStackHandler_1 = null;
  }
  function navigateInternal$default(_this__u8e3s4, $this, entries, navOptions, navigatorExtras, handler, $super) {
    var tmp;
    if (handler === VOID) {
      tmp = NavController$navigateInternal$lambda;
    } else {
      tmp = handler;
    }
    handler = tmp;
    return navigateInternal(_this__u8e3s4, $this, entries, navOptions, navigatorExtras, handler);
  }
  function popBackStackInternal(_this__u8e3s4, $this, popUpTo, saveState, handler) {
    $this.popFromBackStackHandler_1 = handler;
    _this__u8e3s4.popBackStack_5zx69y_k$(popUpTo, saveState);
    $this.popFromBackStackHandler_1 = null;
  }
  function popBackStackInternal$default(_this__u8e3s4, $this, popUpTo, saveState, handler, $super) {
    var tmp;
    if (handler === VOID) {
      tmp = NavController$popBackStackInternal$lambda;
    } else {
      tmp = handler;
    }
    handler = tmp;
    return popBackStackInternal(_this__u8e3s4, $this, popUpTo, saveState, handler);
  }
  function NavControllerNavigatorState($outer, navigator) {
    this.$this_1 = $outer;
    NavigatorState.call(this);
    this.navigator_1 = navigator;
  }
  protoOf(NavControllerNavigatorState).get_navigator_kyqf1q_k$ = function () {
    return this.navigator_1;
  };
  protoOf(NavControllerNavigatorState).push_37rtb5_k$ = function (backStackEntry) {
    // Inline function 'androidx.navigation.get' call
    var this_0 = this.$this_1._navigatorProvider_1;
    var name = backStackEntry.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$();
    var destinationNavigator = this_0.getNavigator_ip43px_k$(name);
    if (equals(destinationNavigator, this.navigator_1)) {
      var handler = this.$this_1.addToBackStackHandler_1;
      if (!(handler == null)) {
        handler(backStackEntry);
        this.addInternal_2ye4ot_k$(backStackEntry);
      } else {
        println('Ignoring add of destination ' + backStackEntry.get_destination_9r3c63_k$().toString() + ' ' + 'outside of the call to navigate(). ');
      }
    } else {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var value = this.$this_1.navigatorState_1.get_wei43m_k$(destinationNavigator);
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.navigation.NavControllerNavigatorState.push.<anonymous>' call
          var message = 'NavigatorBackStack for ' + backStackEntry.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$() + ' should ' + 'already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$2 = value;
          break $l$block;
        }
      }
      var navigatorBackStack = tmp$ret$2;
      navigatorBackStack.push_37rtb5_k$(backStackEntry);
    }
  };
  protoOf(NavControllerNavigatorState).addInternal_2ye4ot_k$ = function (backStackEntry) {
    protoOf(NavigatorState).push_37rtb5_k$.call(this, backStackEntry);
  };
  protoOf(NavControllerNavigatorState).createBackStackEntry_vwwajp_k$ = function (destination, arguments_0) {
    return Companion_getInstance().create$default_lx1myn_k$(destination, arguments_0, this.$this_1.get_hostLifecycleState_ngy6c1_k$(), this.$this_1.viewModel_1);
  };
  protoOf(NavControllerNavigatorState).pop_fb5htn_k$ = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.get' call
    var this_0 = this.$this_1._navigatorProvider_1;
    var name = popUpTo.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$();
    var destinationNavigator = this_0.getNavigator_ip43px_k$(name);
    // Inline function 'kotlin.collections.set' call
    this.$this_1.entrySavedState_1.put_4fpzoq_k$(popUpTo, saveState);
    if (equals(destinationNavigator, this.navigator_1)) {
      var handler = this.$this_1.popFromBackStackHandler_1;
      if (!(handler == null)) {
        handler(popUpTo);
        protoOf(NavigatorState).pop_fb5htn_k$.call(this, popUpTo, saveState);
      } else {
        this.$this_1.popBackStackFromNavigator_u66i3j_k$(popUpTo, NavController$NavControllerNavigatorState$pop$lambda(this, popUpTo, saveState));
      }
    } else {
      ensureNotNull(this.$this_1.navigatorState_1.get_wei43m_k$(destinationNavigator)).pop_fb5htn_k$(popUpTo, saveState);
    }
  };
  protoOf(NavControllerNavigatorState).popWithTransition_rhyr6y_k$ = function (popUpTo, saveState) {
    protoOf(NavigatorState).popWithTransition_rhyr6y_k$.call(this, popUpTo, saveState);
  };
  protoOf(NavControllerNavigatorState).markTransitionComplete_lzljb4_k$ = function (entry) {
    var savedState = this.$this_1.entrySavedState_1.get_wei43m_k$(entry) === true;
    protoOf(NavigatorState).markTransitionComplete_lzljb4_k$.call(this, entry);
    this.$this_1.entrySavedState_1.remove_gppy8k_k$(entry);
    if (!this.$this_1.backQueue_1.contains_aljjnj_k$(entry)) {
      this.$this_1.unlinkChildFromParent_e0j5yh_k$(entry);
      if (entry.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().isAtLeast_pbz9hc_k$(State_CREATED_getInstance())) {
        entry.set_maxLifecycle_cmkd09_k$(State_DESTROYED_getInstance());
      }
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var this_0 = this.$this_1.backQueue_1;
        var tmp_0;
        if (isInterface(this_0, Collection)) {
          tmp_0 = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'androidx.navigation.NavControllerNavigatorState.markTransitionComplete.<anonymous>' call
          if (element.get_id_kntnx8_k$() === entry.get_id_kntnx8_k$()) {
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
        var tmp0_safe_receiver = this.$this_1.viewModel_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.clear_2ns5oj_k$(entry.get_id_kntnx8_k$());
        }
      }
      this.$this_1.updateBackStackLifecycle_dgukzd_k$();
      this.$this_1._visibleEntries_1.tryEmit_ru0jrz_k$(this.$this_1.populateVisibleEntries_7twqov_k$());
    } else if (!this.get_isNavigating_85k3l_k$()) {
      this.$this_1.updateBackStackLifecycle_dgukzd_k$();
      this.$this_1._currentBackStack_1.tryEmit_ru0jrz_k$(toMutableList(this.$this_1.backQueue_1));
      this.$this_1._visibleEntries_1.tryEmit_ru0jrz_k$(this.$this_1.populateVisibleEntries_7twqov_k$());
    }
  };
  protoOf(NavControllerNavigatorState).prepareForTransition_gt6e1w_k$ = function (entry) {
    protoOf(NavigatorState).prepareForTransition_gt6e1w_k$.call(this, entry);
    if (this.$this_1.backQueue_1.contains_aljjnj_k$(entry)) {
      entry.set_maxLifecycle_cmkd09_k$(State_STARTED_getInstance());
    } else {
      throw IllegalStateException_init_$Create$('Cannot transition entry that is not in the back stack');
    }
  };
  function popBackStack($this, destinationId, inclusive) {
    return $this.popBackStack_rgngjz_k$(destinationId, inclusive, false);
  }
  function popBackStackInternal_0($this, destinationId, inclusive, saveState) {
    if ($this.backQueue_1.isEmpty_y1axqb_k$()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var iterator = reversed($this.backQueue_1).iterator_jk1svi_k$();
    var foundDestination = null;
    $l$loop: while (iterator.hasNext_bitz1p_k$()) {
      var destination = iterator.next_20eer_k$().get_destination_9r3c63_k$();
      var navigator = $this._navigatorProvider_1.getNavigator_ip43px_k$(destination.get_navigatorName_2u2qav_k$());
      if (inclusive || !(destination.get_id_kntnx8_k$() === destinationId)) {
        popOperations.add_utx5q5_k$(navigator);
      }
      if (destination.get_id_kntnx8_k$() === destinationId) {
        foundDestination = destination;
        break $l$loop;
      }
    }
    if (foundDestination == null) {
      var destinationName = Companion_getInstance_0().getDisplayName_ut2bi7_k$(destinationId);
      println('Ignoring popBackStack to destination ' + destinationName + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function popBackStackInternal$default_0($this, destinationId, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return popBackStackInternal_0($this, destinationId, inclusive, saveState);
  }
  function popBackStackInternal_1($this, route, inclusive, saveState) {
    var finalRoute = generateRouteFilled($this, route);
    return popBackStackInternal_2($this, finalRoute, inclusive, saveState);
  }
  function popBackStackInternal$default_1($this, route, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return popBackStackInternal_1($this, route, inclusive, saveState);
  }
  function popBackStackInternal_2($this, route, inclusive, saveState) {
    if ($this.backQueue_1.isEmpty_y1axqb_k$()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_0 = $this.backQueue_1;
      var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element = iterator.previous_l2dfd5_k$();
        // Inline function 'androidx.navigation.NavController.popBackStackInternal.<anonymous>' call
        var hasRoute = element.get_destination_9r3c63_k$().hasRoute_h24xfv_k$(route, element.get_arguments_p5ddub_k$());
        if (inclusive || !hasRoute) {
          var navigator = $this._navigatorProvider_1.getNavigator_ip43px_k$(element.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$());
          popOperations.add_utx5q5_k$(navigator);
        }
        if (hasRoute) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var foundDestination = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
    if (foundDestination == null) {
      println('Ignoring popBackStack to route ' + route + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function executePopOperations($this, popOperations, foundDestination, inclusive, saveState) {
    var popped = {_v: false};
    var savedState = ArrayDeque_init_$Create$();
    var tmp0_iterator = popOperations.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var navigator = tmp0_iterator.next_20eer_k$();
      var receivedPop = {_v: false};
      var tmp = $this.backQueue_1.last_1z1cm_k$();
      popBackStackInternal(navigator, $this, tmp, saveState, NavController$executePopOperations$lambda(receivedPop, popped, $this, saveState, savedState));
      if (!receivedPop._v) {
        break $l$loop;
      }
    }
    if (saveState) {
      if (!inclusive) {
        // Inline function 'kotlin.sequences.forEach' call
        var tmp_0 = generateSequence(foundDestination, NavController$executePopOperations$lambda_0);
        var tmp0_iterator_0 = takeWhile(tmp_0, NavController$executePopOperations$lambda_1($this)).iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_0 = $this.backStackMap_1;
          var key = element.get_id_kntnx8_k$();
          var tmp0_safe_receiver = savedState.firstOrNull_j0zfvq_k$();
          var value = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_id_kntnx8_k$();
          this_0.put_4fpzoq_k$(key, value);
        }
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!savedState.isEmpty_y1axqb_k$()) {
        var firstState = savedState.first_1m0hio_k$();
        var firstStateDestination = $this.findDestination_a5t4gt_k$(firstState.get_destinationId_3urg68_k$());
        // Inline function 'kotlin.sequences.forEach' call
        var tmp_1 = generateSequence(firstStateDestination, NavController$executePopOperations$lambda_2);
        var tmp0_iterator_1 = takeWhile(tmp_1, NavController$executePopOperations$lambda_3($this)).iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_1 = $this.backStackMap_1;
          var key_0 = element_0.get_id_kntnx8_k$();
          var value_0 = firstState.get_id_kntnx8_k$();
          this_1.put_4fpzoq_k$(key_0, value_0);
        }
        if ($this.backStackMap_1.get_values_ksazhn_k$().contains_aljjnj_k$(firstState.get_id_kntnx8_k$())) {
          // Inline function 'kotlin.collections.set' call
          var this_2 = $this.backStackStates_1;
          var key_1 = firstState.get_id_kntnx8_k$();
          this_2.put_4fpzoq_k$(key_1, savedState);
        }
      }
    }
    return popped._v;
  }
  function popEntryFromBackStack($this, popUpTo, saveState, savedState) {
    var entry = $this.backQueue_1.last_1z1cm_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!entry.equals(popUpTo)) {
      // Inline function 'androidx.navigation.NavController.popEntryFromBackStack.<anonymous>' call
      var message = 'Attempted to pop ' + popUpTo.get_destination_9r3c63_k$().toString() + ', which is not the top of the back stack ' + ('(' + entry.get_destination_9r3c63_k$().toString() + ')');
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    removeLast($this.backQueue_1);
    var navigator = $this.get_navigatorProvider_9yxp35_k$().getNavigator_ip43px_k$(entry.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$());
    var state = $this.navigatorState_1.get_wei43m_k$(navigator);
    var tmp;
    var tmp1_safe_receiver = state == null ? null : state.get_transitionsInProgress_j2ad2f_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_value_j01efc_k$();
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.contains_aljjnj_k$(entry)) === true) {
      tmp = true;
    } else {
      tmp = $this.parentToChildCount_1.containsKey_aw81wo_k$(entry);
    }
    var transitioning = tmp;
    if (entry.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().isAtLeast_pbz9hc_k$(State_CREATED_getInstance())) {
      if (saveState) {
        entry.set_maxLifecycle_cmkd09_k$(State_CREATED_getInstance());
        savedState.addFirst_7io6zl_k$(NavBackStackEntryState_init_$Create$(entry));
      }
      if (!transitioning) {
        entry.set_maxLifecycle_cmkd09_k$(State_DESTROYED_getInstance());
        $this.unlinkChildFromParent_e0j5yh_k$(entry);
      } else {
        entry.set_maxLifecycle_cmkd09_k$(State_CREATED_getInstance());
      }
    }
    if (!saveState && !transitioning) {
      var tmp3_safe_receiver = $this.viewModel_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.clear_2ns5oj_k$(entry.get_id_kntnx8_k$());
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
    var tmp0_iterator = $this.navigatorState_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element.set_isNavigating_86yy9s_k$(true);
    }
    var restored = restoreStateInternal($this, destinationId, null, navOptions(NavController$clearBackStackInternal$lambda), null);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = $this.navigatorState_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element_0.set_isNavigating_86yy9s_k$(false);
    }
    return restored && popBackStackInternal_0($this, destinationId, true, false);
  }
  function clearBackStackInternal_0($this, route) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.navigatorState_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element.set_isNavigating_86yy9s_k$(true);
    }
    var restored = restoreStateInternal_0($this, route);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = $this.navigatorState_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element_0.set_isNavigating_86yy9s_k$(false);
    }
    return restored && popBackStackInternal_2($this, route, true, false);
  }
  function _get_destinationCountOnBackStack__uqfh68($this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = $this.backQueue_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavController.<get-destinationCountOnBackStack>.<anonymous>' call
        var tmp_0 = element.get_destination_9r3c63_k$();
        if (!(tmp_0 instanceof NavGraph)) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    return tmp$ret$0;
  }
  function _set_dispatchReentrantCount__6j2cud($this, _set____db54di) {
    $this.dispatchReentrantCount_1 = _set____db54di;
  }
  function _get_dispatchReentrantCount__fq13lb($this) {
    return $this.dispatchReentrantCount_1;
  }
  function _get_backStackEntriesToDispatch__ubh7af($this) {
    return $this.backStackEntriesToDispatch_1;
  }
  function dispatchOnDestinationChanged($this) {
    $l$loop: while (true) {
      var tmp;
      if (!$this.backQueue_1.isEmpty_y1axqb_k$()) {
        var tmp_0 = $this.backQueue_1.last_1z1cm_k$().get_destination_9r3c63_k$();
        tmp = tmp_0 instanceof NavGraph;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      popEntryFromBackStack$default($this, $this.backQueue_1.last_1z1cm_k$());
    }
    var lastBackStackEntry = $this.backQueue_1.lastOrNull_u4yjpc_k$();
    if (!(lastBackStackEntry == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      $this.backStackEntriesToDispatch_1.add_utx5q5_k$(lastBackStackEntry);
    }
    $this.dispatchReentrantCount_1 = $this.dispatchReentrantCount_1 + 1 | 0;
    $this.updateBackStackLifecycle_dgukzd_k$();
    $this.dispatchReentrantCount_1 = $this.dispatchReentrantCount_1 - 1 | 0;
    if ($this.dispatchReentrantCount_1 === 0) {
      var dispatchList = toMutableList($this.backStackEntriesToDispatch_1);
      $this.backStackEntriesToDispatch_1.clear_j9egeb_k$();
      var tmp5_iterator = dispatchList.iterator_jk1svi_k$();
      while (tmp5_iterator.hasNext_bitz1p_k$()) {
        var backStackEntry = tmp5_iterator.next_20eer_k$();
        var tmp6_iterator = $this.onDestinationChangedListeners_1.iterator_jk1svi_k$();
        while (tmp6_iterator.hasNext_bitz1p_k$()) {
          var listener = tmp6_iterator.next_20eer_k$();
          listener.onDestinationChanged_x452dr_k$($this, backStackEntry.get_destination_9r3c63_k$(), backStackEntry.get_arguments_p5ddub_k$());
        }
        $this._currentBackStackEntryFlow_1.tryEmit_ru0jrz_k$(backStackEntry);
      }
      $this._currentBackStack_1.tryEmit_ru0jrz_k$(toMutableList($this.backQueue_1));
      $this._visibleEntries_1.tryEmit_ru0jrz_k$($this.populateVisibleEntries_7twqov_k$());
    }
    return !(lastBackStackEntry == null);
  }
  function onGraphCreated($this, startDestinationArgs) {
    var tmp0_safe_receiver = $this.navigatorStateToRestore_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var navigatorNames = tmp0_safe_receiver.getStringArrayList_bu80fr_k$('multiplatform-support-nav:controller:navigatorState:names');
      if (!(navigatorNames == null)) {
        var tmp0_iterator = navigatorNames.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var name = tmp0_iterator.next_20eer_k$();
          var navigator = $this._navigatorProvider_1.getNavigator_ip43px_k$(ensureNotNull(name));
          var bundle = tmp0_safe_receiver.getBundle_4qisc1_k$(name);
          if (!(bundle == null)) {
            navigator.onRestoreState_v9wbnv_k$(bundle);
          }
        }
      }
    }
    var tmp1_safe_receiver = $this.backStackToRestore_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_iterator_0 = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var state = tmp0_iterator_0.next_20eer_k$();
        var node = $this.findDestination_a5t4gt_k$(state.get_destinationId_3urg68_k$());
        if (node == null) {
          var dest = Companion_getInstance_0().getDisplayName_ut2bi7_k$(state.get_destinationId_3urg68_k$());
          throw IllegalStateException_init_$Create$('Restoring the Navigation back stack failed: destination ' + dest + ' cannot be ' + ('found from the current destination ' + toString($this.get_currentDestination_a0gvj6_k$())));
        }
        var entry = state.instantiate_jf2s9b_k$(node, $this.get_hostLifecycleState_ngy6c1_k$(), $this.viewModel_1);
        var navigator_0 = $this._navigatorProvider_1.getNavigator_ip43px_k$(node.get_navigatorName_2u2qav_k$());
        // Inline function 'kotlin.collections.getOrPut' call
        var this_0 = $this.navigatorState_1;
        var value = this_0.get_wei43m_k$(navigator_0);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
          var answer = new NavControllerNavigatorState($this, navigator_0);
          this_0.put_4fpzoq_k$(navigator_0, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var navigatorBackStack = tmp;
        $this.backQueue_1.add_utx5q5_k$(entry);
        navigatorBackStack.addInternal_2ye4ot_k$(entry);
        var parent = entry.get_destination_9r3c63_k$().get_parent_hy4reb_k$();
        if (!(parent == null)) {
          linkChildToParent($this, entry, getBackStackEntry($this, parent.get_id_kntnx8_k$()));
        }
      }
      $this.backStackToRestore_1 = null;
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_1 = $this._navigatorProvider_1.get_navigators_amqgsl_k$().get_values_ksazhn_k$();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      if (!element.get_isAttached_odsl1l_k$()) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp0_iterator_2 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = $this.navigatorState_1;
      var value_0 = this_2.get_wei43m_k$(element_0);
      var tmp_0;
      if (value_0 == null) {
        // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
        var answer_0 = new NavControllerNavigatorState($this, element_0);
        this_2.put_4fpzoq_k$(element_0, answer_0);
        tmp_0 = answer_0;
      } else {
        tmp_0 = value_0;
      }
      var navigatorBackStack_0 = tmp_0;
      element_0.onAttach_c14cnd_k$(navigatorBackStack_0);
    }
    if (!($this._graph_1 == null) && $this.backQueue_1.isEmpty_y1axqb_k$()) {
      var deepLinked = false;
      if (!deepLinked) {
        navigate($this, ensureNotNull($this._graph_1), startDestinationArgs, null, null);
      }
    } else {
      dispatchOnDestinationChanged($this);
    }
  }
  function getTopGraph(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4.lastOrNull_u4yjpc_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull($this._graph_1) : tmp1_elvis_lhs;
    var tmp;
    if (currentNode instanceof NavGraph) {
      tmp = currentNode;
    } else {
      tmp = ensureNotNull(currentNode.get_parent_hy4reb_k$());
    }
    return tmp;
  }
  function generateRouteFilled($this, route) {
    var id = generateHashCode(serializer(getKClassFromExpression(route)));
    var destination = $this.findDestinationComprehensive_bhdfj2_k$($this.get_graph_is3411_k$(), id, true);
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (destination == null) {
        // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
        var message = 'Destination with route ' + getKClassFromExpression(route).get_simpleName_r6f8py_k$() + ' cannot be found ' + ('in navigation graph ' + toString($this._graph_1));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = destination.get_arguments_p5ddub_k$();
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(this_0.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.get_key_18j28a_k$();
      // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
      var tmp$ret$3 = element.get_value_j01efc_k$().get_type_wovaf7_k$();
      destination_0.put_4fpzoq_k$(tmp, tmp$ret$3);
    }
    return generateRouteWithArgs(route, destination_0);
  }
  function navigate($this, node, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.navigatorState_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element.set_isNavigating_86yy9s_k$(true);
    }
    var popped = false;
    var launchSingleTop = false;
    var navigated = {_v: false};
    if (!(navOptions == null)) {
      if (!(navOptions.get_popUpToRoute_oc07th_k$() == null))
        popped = popBackStackInternal_2($this, ensureNotNull(navOptions.get_popUpToRoute_oc07th_k$()), navOptions.isPopUpToInclusive_tm91f5_k$(), navOptions.shouldPopUpToSaveState_xmvb28_k$());
      else if (!(navOptions.get_popUpToRouteClass_71gh59_k$() == null))
        popped = popBackStackInternal_0($this, generateHashCode(serializer(ensureNotNull(navOptions.get_popUpToRouteClass_71gh59_k$()))), navOptions.isPopUpToInclusive_tm91f5_k$(), navOptions.shouldPopUpToSaveState_xmvb28_k$());
      else if (!(navOptions.get_popUpToRouteObject_ap1klm_k$() == null))
        popped = popBackStackInternal_1($this, ensureNotNull(navOptions.get_popUpToRouteObject_ap1klm_k$()), navOptions.isPopUpToInclusive_tm91f5_k$(), navOptions.shouldPopUpToSaveState_xmvb28_k$());
      else if (!(navOptions.get_popUpToId_gtrmx3_k$() === -1))
        popped = popBackStackInternal_0($this, navOptions.get_popUpToId_gtrmx3_k$(), navOptions.isPopUpToInclusive_tm91f5_k$(), navOptions.shouldPopUpToSaveState_xmvb28_k$());
    }
    var finalArgs = node.addInDefaultArgs_5c4oma_k$(args);
    var tmp;
    if ((navOptions == null ? null : navOptions.shouldRestoreState_cp3tai_k$()) === true) {
      tmp = $this.backStackMap_1.containsKey_aw81wo_k$(node.get_id_kntnx8_k$());
    } else {
      tmp = false;
    }
    if (tmp) {
      navigated._v = restoreStateInternal($this, node.get_id_kntnx8_k$(), finalArgs, navOptions, navigatorExtras);
    } else {
      var tmp_0;
      if ((navOptions == null ? null : navOptions.shouldLaunchSingleTop_ufl07b_k$()) === true) {
        tmp_0 = launchSingleTopInternal($this, node, args);
      } else {
        tmp_0 = false;
      }
      launchSingleTop = tmp_0;
      if (!launchSingleTop) {
        var backStackEntry = Companion_getInstance().create$default_lx1myn_k$(node, finalArgs, $this.get_hostLifecycleState_ngy6c1_k$(), $this.viewModel_1);
        var navigator = $this._navigatorProvider_1.getNavigator_ip43px_k$(node.get_navigatorName_2u2qav_k$());
        var tmp_1 = listOf(backStackEntry);
        navigateInternal(navigator, $this, tmp_1, navOptions, navigatorExtras, NavController$navigate$lambda(navigated, $this, node, finalArgs));
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = $this.navigatorState_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element_0.set_isNavigating_86yy9s_k$(false);
    }
    if (popped || navigated._v || launchSingleTop) {
      dispatchOnDestinationChanged($this);
    } else {
      $this.updateBackStackLifecycle_dgukzd_k$();
    }
  }
  function launchSingleTopInternal($this, node, args) {
    var currentBackStackEntry = $this.get_currentBackStackEntry_facmv5_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var this_0 = $this.backQueue_1;
      var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        if (iterator.previous_l2dfd5_k$().get_destination_9r3c63_k$() === node) {
          tmp$ret$1 = iterator.nextIndex_jshxun_k$();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    var nodeIndex = tmp$ret$1;
    if (nodeIndex === -1)
      return false;
    if (node instanceof NavGraph) {
      var tmp = Companion_getInstance_1().childHierarchy_uxwzx8_k$(node);
      var childHierarchyId = toList(map(tmp, NavController$launchSingleTopInternal$lambda));
      if (!(($this.backQueue_1.get_size_woubt6_k$() - nodeIndex | 0) === childHierarchyId.get_size_woubt6_k$()))
        return false;
      // Inline function 'kotlin.collections.map' call
      var this_1 = $this.backQueue_1.subList_xle3r2_k$(nodeIndex, $this.backQueue_1.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        var tmp$ret$2 = item.get_destination_9r3c63_k$().get_id_kntnx8_k$();
        destination.add_utx5q5_k$(tmp$ret$2);
      }
      var backQueueId = destination;
      if (!equals(backQueueId, childHierarchyId))
        return false;
    } else {
      var tmp_0 = node.get_id_kntnx8_k$();
      var tmp1_safe_receiver = currentBackStackEntry == null ? null : currentBackStackEntry.get_destination_9r3c63_k$();
      if (!(tmp_0 === (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_id_kntnx8_k$()))) {
        return false;
      }
    }
    var tempBackQueue = ArrayDeque_init_$Create$();
    while (get_lastIndex($this.backQueue_1) >= nodeIndex) {
      var oldEntry = removeLast($this.backQueue_1);
      $this.unlinkChildFromParent_e0j5yh_k$(oldEntry);
      var newEntry = NavBackStackEntry_init_$Create$(oldEntry, oldEntry.get_destination_9r3c63_k$().addInDefaultArgs_5c4oma_k$(args));
      tempBackQueue.addFirst_7io6zl_k$(newEntry);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = tempBackQueue.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var parent = element.get_destination_9r3c63_k$().get_parent_hy4reb_k$();
      if (!(parent == null)) {
        var newParent = getBackStackEntry($this, parent.get_id_kntnx8_k$());
        linkChildToParent($this, element, newParent);
      }
      $this.backQueue_1.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = tempBackQueue.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var navigator = $this._navigatorProvider_1.getNavigator_ip43px_k$(element_0.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$());
      navigator.onLaunchSingleTop_gcgugw_k$(element_0);
    }
    return true;
  }
  function restoreStateInternal($this, id, args, navOptions, navigatorExtras) {
    if (!$this.backStackMap_1.containsKey_aw81wo_k$(id)) {
      return false;
    }
    var backStackId = $this.backStackMap_1.get_wei43m_k$(id);
    var tmp = $this.backStackMap_1.get_values_ksazhn_k$();
    removeAll(tmp, NavController$restoreStateInternal$lambda(backStackId));
    // Inline function 'kotlin.collections.remove' call
    var this_0 = $this.backStackStates_1;
    var backStackState = (isInterface(this_0, KtMutableMap) ? this_0 : THROW_CCE()).remove_gppy8k_k$(backStackId);
    var entries = instantiateBackStack($this, backStackState);
    return executeRestoreState($this, entries, args, navOptions, navigatorExtras);
  }
  function restoreStateInternal_0($this, route) {
    var id = getStringHashCode(Companion_getInstance_0().createRoute_kxyyqi_k$(route));
    var tmp;
    if ($this.backStackMap_1.containsKey_aw81wo_k$(id)) {
      tmp = restoreStateInternal($this, id, null, null, null);
    } else {
      var matchingDestination = $this.findDestination_8mwv97_k$(route);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(matchingDestination == null)) {
        // Inline function 'androidx.navigation.NavController.restoreStateInternal.<anonymous>' call
        var message = 'Restore State failed: route ' + route + ' cannot be found from the current ' + ('destination ' + toString($this.get_currentDestination_a0gvj6_k$()));
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      id = matchingDestination.get_id_kntnx8_k$();
      var backStackId = $this.backStackMap_1.get_wei43m_k$(id);
      var tmp_0 = $this.backStackMap_1.get_values_ksazhn_k$();
      removeAll(tmp_0, NavController$restoreStateInternal$lambda_0(backStackId));
      // Inline function 'kotlin.collections.remove' call
      var this_0 = $this.backStackStates_1;
      var backStackState = (isInterface(this_0, KtMutableMap) ? this_0 : THROW_CCE()).remove_gppy8k_k$(backStackId);
      var matchingDeepLink = matchingDestination.matchDeepLink_pg8xpr_k$(route);
      var tmp_1 = ensureNotNull(matchingDeepLink);
      var tmp1_safe_receiver = backStackState == null ? null : backStackState.firstOrNull_j0zfvq_k$();
      var isCorrectStack = tmp_1.hasMatchingArgs_l2vfc2_k$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_args_woj09y_k$());
      if (!isCorrectStack)
        return false;
      var entries = instantiateBackStack($this, backStackState);
      tmp = executeRestoreState($this, entries, null, null, null);
    }
    return tmp;
  }
  function executeRestoreState($this, entries, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entriesGroupedByNavigator = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = entries.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var tmp = element.get_destination_9r3c63_k$();
      if (!(tmp instanceof NavGraph)) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var previousEntryList = lastOrNull(entriesGroupedByNavigator);
      var tmp1_safe_receiver = previousEntryList == null ? null : last(previousEntryList);
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_destination_9r3c63_k$();
      var previousNavigatorName = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_navigatorName_2u2qav_k$();
      if (previousNavigatorName === element_0.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$()) {
        // Inline function 'kotlin.collections.plusAssign' call
        previousEntryList.add_utx5q5_k$(element_0);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = mutableListOf([element_0]);
        entriesGroupedByNavigator.add_utx5q5_k$(element_1);
      }
    }
    var navigated = {_v: false};
    var tmp0_iterator_1 = entriesGroupedByNavigator.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var entryList = tmp0_iterator_1.next_20eer_k$();
      var navigator = $this._navigatorProvider_1.getNavigator_ip43px_k$(first(entryList).get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$());
      var lastNavigatedIndex = {_v: 0};
      navigateInternal(navigator, $this, entryList, navOptions, navigatorExtras, NavController$executeRestoreState$lambda(navigated, entries, lastNavigatedIndex, $this, args));
    }
    return navigated._v;
  }
  function instantiateBackStack($this, backStackState) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var backStack = ArrayList_init_$Create$();
    var tmp0_safe_receiver = $this.backQueue_1.lastOrNull_u4yjpc_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
    var currentDestination = tmp1_elvis_lhs == null ? $this.get_graph_is3411_k$() : tmp1_elvis_lhs;
    if (backStackState == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = backStackState.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>' call
        var node = $this.findDestinationComprehensive_bhdfj2_k$(currentDestination, element.get_destinationId_3urg68_k$(), true);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (node == null) {
            // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>.<anonymous>' call
            var dest = Companion_getInstance_0().getDisplayName_ut2bi7_k$(element.get_destinationId_3urg68_k$());
            var message = 'Restore State failed: destination ' + dest + ' cannot be found from the current ' + ('destination ' + currentDestination.toString());
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            break $l$block;
          }
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = element.instantiate_jf2s9b_k$(node, $this.get_hostLifecycleState_ngy6c1_k$(), $this.viewModel_1);
        backStack.add_utx5q5_k$(element_0);
        currentDestination = node;
      }
    }
    return backStack;
  }
  function addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries) {
    var newDest = backStackEntry.get_destination_9r3c63_k$();
    if (!isInterface(newDest, FloatingWindow)) {
      $l$loop: while (true) {
        var tmp;
        var tmp_0;
        if (!$this.backQueue_1.isEmpty_y1axqb_k$()) {
          var tmp_1 = $this.backQueue_1.last_1z1cm_k$().get_destination_9r3c63_k$();
          tmp_0 = isInterface(tmp_1, FloatingWindow);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = popBackStackInternal$default_0($this, $this.backQueue_1.last_1z1cm_k$().get_destination_9r3c63_k$().get_id_kntnx8_k$(), true);
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
        var parent = ensureNotNull(destination).get_parent_hy4reb_k$();
        if (!(parent == null)) {
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.lastOrNull' call
            var iterator = restoredEntries.listIterator_70e65o_k$(restoredEntries.get_size_woubt6_k$());
            while (iterator.hasPrevious_qh0629_k$()) {
              var element = iterator.previous_l2dfd5_k$();
              // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
              if (element.get_destination_9r3c63_k$().equals(parent)) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
            tmp$ret$1 = null;
          }
          var tmp0_elvis_lhs = tmp$ret$1;
          var entry = tmp0_elvis_lhs == null ? Companion_getInstance().create$default_lx1myn_k$(parent, finalArgs, $this.get_hostLifecycleState_ngy6c1_k$(), $this.viewModel_1) : tmp0_elvis_lhs;
          hierarchy.addFirst_7io6zl_k$(entry);
          var tmp_2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$this.backQueue_1.isEmpty_y1axqb_k$()) {
            tmp_2 = $this.backQueue_1.last_1z1cm_k$().get_destination_9r3c63_k$() === parent;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            popEntryFromBackStack$default($this, $this.backQueue_1.last_1z1cm_k$());
          }
        }
        destination = parent;
      }
       while (!(destination == null) && !(destination === node));
    }
    destination = hierarchy.isEmpty_y1axqb_k$() ? newDest : hierarchy.first_1m0hio_k$().get_destination_9r3c63_k$();
    while (!(destination == null) && !($this.findDestination_a5t4gt_k$(destination.get_id_kntnx8_k$()) === destination)) {
      var parent_0 = destination.get_parent_hy4reb_k$();
      if (!(parent_0 == null)) {
        var tmp_3;
        if ((finalArgs == null ? null : finalArgs.isEmpty_y1axqb_k$()) === true) {
          tmp_3 = null;
        } else {
          tmp_3 = finalArgs;
        }
        var args = tmp_3;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.collections.lastOrNull' call
          var iterator_0 = restoredEntries.listIterator_70e65o_k$(restoredEntries.get_size_woubt6_k$());
          while (iterator_0.hasPrevious_qh0629_k$()) {
            var element_0 = iterator_0.previous_l2dfd5_k$();
            // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
            if (element_0.get_destination_9r3c63_k$().equals(parent_0)) {
              tmp$ret$4 = element_0;
              break $l$block_0;
            }
          }
          tmp$ret$4 = null;
        }
        var tmp2_elvis_lhs = tmp$ret$4;
        var entry_0 = tmp2_elvis_lhs == null ? Companion_getInstance().create$default_lx1myn_k$(parent_0, parent_0.addInDefaultArgs_5c4oma_k$(args), $this.get_hostLifecycleState_ngy6c1_k$(), $this.viewModel_1) : tmp2_elvis_lhs;
        hierarchy.addFirst_7io6zl_k$(entry_0);
      }
      destination = parent_0;
    }
    var overlappingDestination = hierarchy.isEmpty_y1axqb_k$() ? newDest : hierarchy.first_1m0hio_k$().get_destination_9r3c63_k$();
    $l$loop_0: while (true) {
      var tmp_4;
      var tmp_5;
      if (!$this.backQueue_1.isEmpty_y1axqb_k$()) {
        var tmp_6 = $this.backQueue_1.last_1z1cm_k$().get_destination_9r3c63_k$();
        tmp_5 = tmp_6 instanceof NavGraph;
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        var tmp_7 = $this.backQueue_1.last_1z1cm_k$().get_destination_9r3c63_k$();
        tmp_4 = (tmp_7 instanceof NavGraph ? tmp_7 : THROW_CCE()).get_nodes_ivvt6w_k$().get_c1px32_k$(overlappingDestination.get_id_kntnx8_k$()) == null;
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_0;
      }
      popEntryFromBackStack$default($this, $this.backQueue_1.last_1z1cm_k$());
    }
    var tmp3_elvis_lhs = $this.backQueue_1.firstOrNull_j0zfvq_k$();
    var firstEntry = tmp3_elvis_lhs == null ? hierarchy.firstOrNull_j0zfvq_k$() : tmp3_elvis_lhs;
    if (!equals(firstEntry == null ? null : firstEntry.get_destination_9r3c63_k$(), $this._graph_1)) {
      var tmp$ret$6;
      $l$block_1: {
        // Inline function 'kotlin.collections.lastOrNull' call
        var iterator_1 = restoredEntries.listIterator_70e65o_k$(restoredEntries.get_size_woubt6_k$());
        while (iterator_1.hasPrevious_qh0629_k$()) {
          var element_1 = iterator_1.previous_l2dfd5_k$();
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
          if (element_1.get_destination_9r3c63_k$().equals(ensureNotNull($this._graph_1))) {
            tmp$ret$6 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$6 = null;
      }
      var tmp5_elvis_lhs = tmp$ret$6;
      var entry_1 = tmp5_elvis_lhs == null ? Companion_getInstance().create$default_lx1myn_k$(ensureNotNull($this._graph_1), ensureNotNull($this._graph_1).addInDefaultArgs_5c4oma_k$(finalArgs), $this.get_hostLifecycleState_ngy6c1_k$(), $this.viewModel_1) : tmp5_elvis_lhs;
      hierarchy.addFirst_7io6zl_k$(entry_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = hierarchy.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var navigator = $this._navigatorProvider_1.getNavigator_ip43px_k$(element_2.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$());
      var tmp$ret$8;
      $l$block_2: {
        // Inline function 'kotlin.checkNotNull' call
        var value = $this.navigatorState_1.get_wei43m_k$(navigator);
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>.<anonymous>' call
          var message = 'NavigatorBackStack for ' + node.get_navigatorName_2u2qav_k$() + ' should already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$8 = value;
          break $l$block_2;
        }
      }
      var navigatorBackStack = tmp$ret$8;
      navigatorBackStack.addInternal_2ye4ot_k$(element_2);
    }
    $this.backQueue_1.addAll_4lagoh_k$(hierarchy);
    $this.backQueue_1.add_utx5q5_k$(backStackEntry);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = plus(hierarchy, backStackEntry).iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_3 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var parent_1 = element_3.get_destination_9r3c63_k$().get_parent_hy4reb_k$();
      if (!(parent_1 == null)) {
        linkChildToParent($this, element_3, getBackStackEntry($this, parent_1.get_id_kntnx8_k$()));
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
      var this_0 = $this.backQueue_1;
      var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element = iterator.previous_l2dfd5_k$();
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        if (element.get_destination_9r3c63_k$().get_id_kntnx8_k$() === destinationId) {
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
        var message = 'No destination with ID ' + destinationId + " is on the NavController's back stack. The " + ('current destination is ' + toString($this.get_currentDestination_a0gvj6_k$()));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block_0;
      }
    }
    return lastFromBackStack;
  }
  function _get__currentBackStackEntryFlow__ejvh8u($this) {
    return $this._currentBackStackEntryFlow_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.KEY_NAVIGATOR_STATE_1 = 'multiplatform-support-nav:controller:navigatorState';
    this.KEY_NAVIGATOR_STATE_NAMES_1 = 'multiplatform-support-nav:controller:navigatorState:names';
    this.KEY_BACK_STACK_1 = 'multiplatform-support-nav:controller:backStack';
    this.KEY_BACK_STACK_DEST_IDS_1 = 'multiplatform-support-nav:controller:backStackDestIds';
    this.KEY_BACK_STACK_IDS_1 = 'multiplatform-support-nav:controller:backStackIds';
    this.KEY_BACK_STACK_STATES_IDS_1 = 'multiplatform-support-nav:controller:backStackStates';
    this.KEY_BACK_STACK_STATES_PREFIX_1 = 'multiplatform-support-nav:controller:backStackStates:';
    this.KEY_DEEP_LINK_HANDLED_1 = 'multiplatform-support-nav:controller:deepLinkHandled';
    this.deepLinkSaveState_1 = true;
  }
  protoOf(Companion_0).enableDeepLinkSaveState_wwbdx2_k$ = function (saveState) {
    this.deepLinkSaveState_1 = saveState;
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
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
  function NavController$lifecycleObserver$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      this$0.hostLifecycleState_1 = event.get_targetState_kri3mx_k$();
      var tmp;
      if (!(this$0._graph_1 == null)) {
        var tmp0_iterator = this$0.backQueue_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var entry = tmp0_iterator.next_20eer_k$();
          entry.handleLifecycleEvent_yoinvo_k$(event);
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NavController$navigateInternal$lambda(it) {
    return Unit_getInstance();
  }
  function NavController$popBackStackInternal$lambda(it) {
    return Unit_getInstance();
  }
  function NavController$executePopOperations$lambda($receivedPop, $popped, this$0, $saveState, $savedState) {
    return function (entry) {
      $receivedPop._v = true;
      $popped._v = true;
      popEntryFromBackStack(this$0, entry, $saveState, $savedState);
      return Unit_getInstance();
    };
  }
  function NavController$executePopOperations$lambda_0(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.get_parent_hy4reb_k$();
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_startDestinationId_mcy68g_k$()) === destination.get_id_kntnx8_k$()) {
      tmp = destination.get_parent_hy4reb_k$();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_1(this$0) {
    return function (destination) {
      return !this$0.backStackMap_1.containsKey_aw81wo_k$(destination.get_id_kntnx8_k$());
    };
  }
  function NavController$executePopOperations$lambda_2(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.get_parent_hy4reb_k$();
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_startDestinationId_mcy68g_k$()) === destination.get_id_kntnx8_k$()) {
      tmp = destination.get_parent_hy4reb_k$();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_3(this$0) {
    return function (destination) {
      return !this$0.backStackMap_1.containsKey_aw81wo_k$(destination.get_id_kntnx8_k$());
    };
  }
  function NavController$clearBackStackInternal$lambda($this$navOptions) {
    $this$navOptions.set_restoreState_tj53sl_k$(true);
    return Unit_getInstance();
  }
  function NavController$handleDeepLink$lambda$lambda($this$popUpTo) {
    $this$popUpTo.set_saveState_v4k43m_k$(true);
    return Unit_getInstance();
  }
  function NavController$handleDeepLink$lambda($node, this$0) {
    return function ($this$navOptions) {
      var tmp;
      if ($node instanceof NavGraph) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.sequences.none' call
          var tmp0_iterator = Companion_getInstance_0().get_hierarchy_lptggy_k$($node).iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'androidx.navigation.NavController.handleDeepLink.<anonymous>.<anonymous>' call
            var tmp0_safe_receiver = this$0.get_currentDestination_a0gvj6_k$();
            if (element.equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_parent_hy4reb_k$())) {
              tmp$ret$1 = false;
              break $l$block;
            }
          }
          tmp$ret$1 = true;
        }
        tmp = tmp$ret$1;
      } else {
        tmp = false;
      }
      var changingGraphs = tmp;
      var tmp_0;
      if (changingGraphs && Companion_getInstance_5().deepLinkSaveState_1) {
        var tmp_1 = Companion_getInstance_1().findStartDestination_enre8g_k$(this$0.get_graph_is3411_k$()).get_id_kntnx8_k$();
        $this$navOptions.popUpTo_po3odn_k$(tmp_1, NavController$handleDeepLink$lambda$lambda);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NavController$navigate$lambda($navigated, this$0, $node, $finalArgs) {
    return function (it) {
      $navigated._v = true;
      addEntryToBackStack$default(this$0, $node, $finalArgs, it);
      return Unit_getInstance();
    };
  }
  function NavController$launchSingleTopInternal$lambda(it) {
    return it.get_id_kntnx8_k$();
  }
  function NavController$restoreStateInternal$lambda($backStackId) {
    return function (it) {
      return it == $backStackId;
    };
  }
  function NavController$restoreStateInternal$lambda_0($backStackId) {
    return function (it) {
      return it == $backStackId;
    };
  }
  function NavController$executeRestoreState$lambda($navigated, $entries, $lastNavigatedIndex, this$0, $args) {
    return function (entry) {
      $navigated._v = true;
      var entryIndex = $entries.indexOf_si1fv9_k$(entry);
      var tmp;
      if (!(entryIndex === -1)) {
        // Inline function 'kotlin.also' call
        var this_0 = $entries.subList_xle3r2_k$($lastNavigatedIndex._v, entryIndex + 1 | 0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>.<anonymous>' call
        $lastNavigatedIndex._v = entryIndex + 1 | 0;
        tmp = this_0;
      } else {
        tmp = emptyList();
      }
      var restoredEntries = tmp;
      addEntryToBackStack(this$0, entry.get_destination_9r3c63_k$(), $args, entry, restoredEntries);
      return Unit_getInstance();
    };
  }
  function NavController() {
    Companion_getInstance_5();
    this._graph_1 = null;
    this.navigatorStateToRestore_1 = null;
    this.backStackToRestore_1 = null;
    this.deepLinkHandled_1 = false;
    this.backQueue_1 = ArrayDeque_init_$Create$();
    this._currentBackStack_1 = MutableStateFlow(emptyList());
    this.currentBackStack_1 = asStateFlow(this._currentBackStack_1);
    this._visibleEntries_1 = MutableStateFlow(emptyList());
    this.visibleEntries_1 = asStateFlow(this._visibleEntries_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.childToParentEntries_1 = LinkedHashMap_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.parentToChildCount_1 = LinkedHashMap_init_$Create$_0();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.backStackMap_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.backStackStates_1 = LinkedHashMap_init_$Create$_0();
    this.lifecycleOwner_1 = null;
    this.viewModel_1 = null;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.onDestinationChangedListeners_1 = ArrayList_init_$Create$();
    this.hostLifecycleState_1 = State_INITIALIZED_getInstance();
    var tmp_4 = this;
    var tmp_5 = NavController$lifecycleObserver$lambda(this);
    tmp_4.lifecycleObserver_1 = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_5);
    this._navigatorProvider_1 = new NavigatorProvider();
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.navigatorState_1 = LinkedHashMap_init_$Create$_0();
    this.addToBackStackHandler_1 = null;
    this.popFromBackStackHandler_1 = null;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.entrySavedState_1 = LinkedHashMap_init_$Create$_0();
    this._navigatorProvider_1.addNavigator_m2hk62_k$(new NavGraphNavigator(this._navigatorProvider_1));
    this.dispatchReentrantCount_1 = 0;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_8.backStackEntriesToDispatch_1 = ArrayList_init_$Create$();
    this._currentBackStackEntryFlow_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    this.currentBackStackEntryFlow_1 = asSharedFlow(this._currentBackStackEntryFlow_1);
  }
  protoOf(NavController).set_graph_ypaita_k$ = function (graph) {
    this.setGraph_vtzrwd_k$(graph, null);
  };
  protoOf(NavController).get_graph_is3411_k$ = function () {
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this._graph_1 == null) {
        // Inline function 'androidx.navigation.NavController.<get-graph>.<anonymous>' call
        var message = 'You must call setGraph() before calling getGraph()';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var tmp = this._graph_1;
    return tmp instanceof NavGraph ? tmp : THROW_CCE();
  };
  protoOf(NavController).get_currentBackStack_60zgen_k$ = function () {
    return this.currentBackStack_1;
  };
  protoOf(NavController).get_visibleEntries_4njt_k$ = function () {
    return this.visibleEntries_1;
  };
  protoOf(NavController).unlinkChildFromParent_e0j5yh_k$ = function (child) {
    var tmp0_elvis_lhs = this.childToParentEntries_1.remove_gppy8k_k$(child);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp1_safe_receiver = this.parentToChildCount_1.get_wei43m_k$(parent);
    var count = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.decrementAndGet_dinmnm_k$();
    if (count === 0) {
      // Inline function 'androidx.navigation.get' call
      var this_0 = this._navigatorProvider_1;
      var name = parent.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$();
      var navGraphNavigator = this_0.getNavigator_ip43px_k$(name);
      var tmp2_safe_receiver = this.navigatorState_1.get_wei43m_k$(navGraphNavigator);
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.markTransitionComplete_lzljb4_k$(parent);
      }
      this.parentToChildCount_1.remove_gppy8k_k$(parent);
    }
    return parent;
  };
  protoOf(NavController).set_hostLifecycleState_g9exgn_k$ = function (_set____db54di) {
    this.hostLifecycleState_1 = _set____db54di;
  };
  protoOf(NavController).get_hostLifecycleState_ngy6c1_k$ = function () {
    var tmp;
    if (this.lifecycleOwner_1 == null) {
      tmp = State_CREATED_getInstance();
    } else {
      tmp = this.hostLifecycleState_1;
    }
    return tmp;
  };
  protoOf(NavController).set_navigatorProvider_hkkdhw_k$ = function (navigatorProvider) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.backQueue_1.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.navigation.NavController.<set-navigatorProvider>.<anonymous>' call
      var message = 'NavigatorProvider must be set before setGraph call';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    this._navigatorProvider_1 = navigatorProvider;
  };
  protoOf(NavController).get_navigatorProvider_9yxp35_k$ = function () {
    return this._navigatorProvider_1;
  };
  protoOf(NavController).addOnDestinationChangedListener_4kb7qp_k$ = function (listener) {
    this.onDestinationChangedListeners_1.add_utx5q5_k$(listener);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.backQueue_1.isEmpty_y1axqb_k$()) {
      var backStackEntry = this.backQueue_1.last_1z1cm_k$();
      listener.onDestinationChanged_x452dr_k$(this, backStackEntry.get_destination_9r3c63_k$(), backStackEntry.get_arguments_p5ddub_k$());
    }
  };
  protoOf(NavController).removeOnDestinationChangedListener_s3cd4c_k$ = function (listener) {
    this.onDestinationChangedListeners_1.remove_cedx0m_k$(listener);
  };
  protoOf(NavController).popBackStack_u4z59s_k$ = function () {
    var tmp;
    if (this.backQueue_1.isEmpty_y1axqb_k$()) {
      tmp = false;
    } else {
      tmp = popBackStack(this, ensureNotNull(this.get_currentDestination_a0gvj6_k$()).get_id_kntnx8_k$(), true);
    }
    return tmp;
  };
  protoOf(NavController).popBackStack_rgngjz_k$ = function (destinationId, inclusive, saveState) {
    var popped = popBackStackInternal_0(this, destinationId, inclusive, saveState);
    return popped && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).popBackStack_xuewm_k$ = function (route, inclusive, saveState) {
    var popped = popBackStackInternal_2(this, route, inclusive, saveState);
    return popped && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).popBackStack$default_j8334v_k$ = function (route, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return $super === VOID ? this.popBackStack_xuewm_k$(route, inclusive, saveState) : $super.popBackStack_xuewm_k$.call(this, route, inclusive, saveState);
  };
  protoOf(NavController).popBackStack_753xoh_k$ = function (route, inclusive, saveState) {
    var popped = popBackStackInternal_1(this, route, inclusive, saveState);
    return popped && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).popBackStack$default_i6c7jo_k$ = function (route, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return $super === VOID ? this.popBackStack_753xoh_k$(route, inclusive, saveState) : $super.popBackStack_753xoh_k$.call(this, route, inclusive, saveState);
  };
  protoOf(NavController).popBackStackFromNavigator_u66i3j_k$ = function (popUpTo, onComplete) {
    var popIndex = this.backQueue_1.indexOf_si1fv9_k$(popUpTo);
    if (popIndex < 0) {
      println('Ignoring pop of ' + popUpTo.toString() + ' as it was not found on the current back stack');
      return Unit_getInstance();
    }
    if (!((popIndex + 1 | 0) === this.backQueue_1.get_size_woubt6_k$())) {
      popBackStackInternal_0(this, this.backQueue_1.get_c1px32_k$(popIndex + 1 | 0).get_destination_9r3c63_k$().get_id_kntnx8_k$(), true, false);
    }
    popEntryFromBackStack$default(this, popUpTo);
    onComplete();
    dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).clearBackStack_lod4wq_k$ = function (route) {
    var cleared = clearBackStackInternal_0(this, route);
    return cleared && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).clearBackStack_k11d18_k$ = function (destinationId) {
    var cleared = clearBackStackInternal(this, destinationId);
    return cleared && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).clearBackStack_4w2rz9_k$ = function (route) {
    var finalRoute = generateRouteFilled(this, route);
    var cleared = clearBackStackInternal_0(this, finalRoute);
    return cleared && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).navigateUp_uszbak_k$ = function () {
    if (_get_destinationCountOnBackStack__uqfh68(this) === 1) {
      return false;
    } else {
      return this.popBackStack_u4z59s_k$();
    }
  };
  protoOf(NavController).updateBackStackLifecycle_dgukzd_k$ = function () {
    var backStack = toMutableList(this.backQueue_1);
    if (backStack.isEmpty_y1axqb_k$()) {
      return Unit_getInstance();
    }
    var nextResumed = last(backStack).get_destination_9r3c63_k$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var nextStarted = ArrayList_init_$Create$();
    if (!(nextResumed == null) ? isInterface(nextResumed, FloatingWindow) : false) {
      var iterator = reversed(backStack).iterator_jk1svi_k$();
      $l$loop: while (iterator.hasNext_bitz1p_k$()) {
        var destination = iterator.next_20eer_k$().get_destination_9r3c63_k$();
        nextStarted.add_utx5q5_k$(destination);
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
    var iterator_0 = reversed(backStack).iterator_jk1svi_k$();
    while (iterator_0.hasNext_bitz1p_k$()) {
      var entry = iterator_0.next_20eer_k$();
      var currentMaxLifecycle = entry.get_maxLifecycle_nztmq9_k$();
      var destination_0 = entry.get_destination_9r3c63_k$();
      if (!(nextResumed == null) && destination_0.get_id_kntnx8_k$() === nextResumed.get_id_kntnx8_k$()) {
        if (!currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
          var navigator = this.get_navigatorProvider_9yxp35_k$().getNavigator_ip43px_k$(entry.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$());
          var state = this.navigatorState_1.get_wei43m_k$(navigator);
          var tmp1_safe_receiver = state == null ? null : state.get_transitionsInProgress_j2ad2f_k$();
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_value_j01efc_k$();
          var transitioning = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.contains_aljjnj_k$(entry);
          var tmp_0;
          if (!(transitioning === true)) {
            var tmp3_safe_receiver = this.parentToChildCount_1.get_wei43m_k$(entry);
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_26vq_k$()) === 0);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.set' call
            var value = State_RESUMED_getInstance();
            upwardStateTransitions.put_4fpzoq_k$(entry, value);
          } else {
            // Inline function 'kotlin.collections.set' call
            var value_0 = State_STARTED_getInstance();
            upwardStateTransitions.put_4fpzoq_k$(entry, value_0);
          }
        }
        var tmp4_safe_receiver = firstOrNull(nextStarted);
        if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_id_kntnx8_k$()) === destination_0.get_id_kntnx8_k$()) {
          removeFirst(nextStarted);
        }
        nextResumed = nextResumed.get_parent_hy4reb_k$();
      } else {
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!nextStarted.isEmpty_y1axqb_k$()) {
          tmp_1 = destination_0.get_id_kntnx8_k$() === first(nextStarted).get_id_kntnx8_k$();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var started = removeFirst(nextStarted);
          if (currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
            entry.set_maxLifecycle_cmkd09_k$(State_STARTED_getInstance());
          } else if (!currentMaxLifecycle.equals(State_STARTED_getInstance())) {
            // Inline function 'kotlin.collections.set' call
            var value_1 = State_STARTED_getInstance();
            upwardStateTransitions.put_4fpzoq_k$(entry, value_1);
          }
          var tmp5_safe_receiver = started.get_parent_hy4reb_k$();
          if (tmp5_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            if (!nextStarted.contains_aljjnj_k$(tmp5_safe_receiver)) {
              nextStarted.add_utx5q5_k$(tmp5_safe_receiver);
            }
          }
        } else {
          entry.set_maxLifecycle_cmkd09_k$(State_CREATED_getInstance());
        }
      }
    }
    iterator_0 = backStack.iterator_jk1svi_k$();
    while (iterator_0.hasNext_bitz1p_k$()) {
      var entry_0 = iterator_0.next_20eer_k$();
      var newState = upwardStateTransitions.get_wei43m_k$(entry_0);
      if (!(newState == null)) {
        entry_0.set_maxLifecycle_cmkd09_k$(newState);
      } else {
        entry_0.updateState_jtl854_k$();
      }
    }
  };
  protoOf(NavController).populateVisibleEntries_7twqov_k$ = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entries = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.navigatorState_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = element.get_transitionsInProgress_j2ad2f_k$().get_value_j01efc_k$();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>.<anonymous>' call
        if (!entries.contains_aljjnj_k$(element_0) && !element_0.get_maxLifecycle_nztmq9_k$().isAtLeast_pbz9hc_k$(State_STARTED_getInstance())) {
          destination.add_utx5q5_k$(element_0);
        }
      }
      addAll(entries, destination);
    }
    // Inline function 'kotlin.collections.plusAssign' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = this.backQueue_1;
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      if (!entries.contains_aljjnj_k$(element_1) && element_1.get_maxLifecycle_nztmq9_k$().isAtLeast_pbz9hc_k$(State_STARTED_getInstance())) {
        destination_0.add_utx5q5_k$(element_1);
      }
    }
    addAll(entries, destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_2 = entries.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      var tmp = element_2.get_destination_9r3c63_k$();
      if (!(tmp instanceof NavGraph)) {
        destination_1.add_utx5q5_k$(element_2);
      }
    }
    return destination_1;
  };
  protoOf(NavController).setGraph_vtzrwd_k$ = function (graph, startDestinationArgs) {
    if (!equals(this._graph_1, graph)) {
      var tmp0_safe_receiver = this._graph_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var savedBackStackIds = ArrayList_init_$Create$_1(this.backStackMap_1.get_keys_wop4xp_k$());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = savedBackStackIds.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          clearBackStackInternal(this, element);
        }
        popBackStackInternal$default_0(this, tmp0_safe_receiver.get_id_kntnx8_k$(), true);
      }
      this._graph_1 = graph;
      onGraphCreated(this, startDestinationArgs);
    } else {
      var inductionVariable = 0;
      var last = graph.get_nodes_ivvt6w_k$().size_23och_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var newDestination = graph.get_nodes_ivvt6w_k$().valueAt_sbdne4_k$(i);
          var key = ensureNotNull(this._graph_1).get_nodes_ivvt6w_k$().keyAt_v5apcq_k$(i);
          ensureNotNull(this._graph_1).get_nodes_ivvt6w_k$().replace_1guzne_k$(key, newDestination);
        }
         while (inductionVariable < last);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.backQueue_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var hierarchy = asReversed(toList(Companion_getInstance_0().get_hierarchy_lptggy_k$(element_0.get_destination_9r3c63_k$())));
        // Inline function 'kotlin.collections.fold' call
        var accumulator = ensureNotNull(this._graph_1);
        var tmp0_iterator_1 = hierarchy.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          var newDest = accumulator;
          var tmp;
          if (element_1.equals(this._graph_1) && newDest.equals(graph)) {
            tmp = newDest;
          } else {
            if (newDest instanceof NavGraph) {
              tmp = ensureNotNull(newDest.findNode_u34ja5_k$(element_1.get_id_kntnx8_k$()));
            } else {
              tmp = newDest;
            }
          }
          accumulator = tmp;
        }
        var newDestination_0 = accumulator;
        element_0.set_destination_qh5d5x_k$(newDestination_0);
      }
    }
  };
  protoOf(NavController).handleDeepLink_5jcyon_k$ = function (request) {
    var currGraph = getTopGraph(this.backQueue_1, this);
    var matchingDeepLink = currGraph.matchDeepLinkComprehensive_x7qz1m_k$(request, true, true, currGraph);
    if (!(matchingDeepLink == null)) {
      var destination = matchingDeepLink.get_destination_9r3c63_k$();
      var deepLinkNodes = destination.buildDeepLinkDestinations$default_1z6r75_k$();
      var tmp0_elvis_lhs = destination.addInDefaultArgs_5c4oma_k$(matchingDeepLink.get_matchingArgs_vawzb7_k$());
      var globalArgs = tmp0_elvis_lhs == null ? Bundle_init_$Create$() : tmp0_elvis_lhs;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = deepLinkNodes.get_size_woubt6_k$();
      var args = fillArrayVal(Array(size), null);
      var inductionVariable = 0;
      var last = args.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var arguments_0 = Bundle_init_$Create$();
          arguments_0.putAll_w596ud_k$(globalArgs);
          args[index] = arguments_0;
        }
         while (inductionVariable <= last);
      if (!this.backQueue_1.isEmpty_y1axqb_k$()) {
        popBackStackInternal$default_0(this, ensureNotNull(this._graph_1).get_id_kntnx8_k$(), true);
      }
      var inductionVariable_0 = 0;
      var last_0 = deepLinkNodes.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var node = deepLinkNodes.get_c1px32_k$(i);
          var arguments_1 = args[i];
          navigate(this, node, arguments_1, navOptions(NavController$handleDeepLink$lambda(node, this)), null);
        }
         while (inductionVariable_0 <= last_0);
      this.deepLinkHandled_1 = true;
      return true;
    } else {
      println('Navigation destination that matches route ' + request.toString() + ' cannot be found in the ' + ('navigation graph ' + toString(this._graph_1)));
      return false;
    }
  };
  protoOf(NavController).get_currentDestination_a0gvj6_k$ = function () {
    var tmp0_safe_receiver = this.get_currentBackStackEntry_facmv5_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
  };
  protoOf(NavController).findDestination_a5t4gt_k$ = function (destinationId) {
    if (this._graph_1 == null) {
      return null;
    }
    if (ensureNotNull(this._graph_1).get_id_kntnx8_k$() === destinationId) {
      return this._graph_1;
    }
    var tmp0_safe_receiver = this.backQueue_1.lastOrNull_u4yjpc_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull(this._graph_1) : tmp1_elvis_lhs;
    return this.findDestinationComprehensive_bhdfj2_k$(currentNode, destinationId, false);
  };
  protoOf(NavController).findDestinationComprehensive_bhdfj2_k$ = function (_this__u8e3s4, destinationId, searchChildren) {
    if (_this__u8e3s4.get_id_kntnx8_k$() === destinationId) {
      return _this__u8e3s4;
    }
    var tmp;
    if (_this__u8e3s4 instanceof NavGraph) {
      tmp = _this__u8e3s4;
    } else {
      tmp = ensureNotNull(_this__u8e3s4.get_parent_hy4reb_k$());
    }
    var currentGraph = tmp;
    return currentGraph.findNodeComprehensive_xe6rwh_k$(destinationId, currentGraph, searchChildren);
  };
  protoOf(NavController).findDestination_8mwv97_k$ = function (route) {
    if (this._graph_1 == null) {
      return null;
    }
    if (ensureNotNull(this._graph_1).get_route_iy3cio_k$() === route || !(ensureNotNull(this._graph_1).matchDeepLink_pg8xpr_k$(route) == null)) {
      return this._graph_1;
    }
    return getTopGraph(this.backQueue_1, this).findNode_dxx770_k$(route);
  };
  protoOf(NavController).navigate_83oksi_k$ = function (deepLink) {
    this.navigate_z3wzx2_k$(new NavDeepLinkRequest(deepLink, null, null));
  };
  protoOf(NavController).navigate_1dqqb5_k$ = function (deepLink, navOptions) {
    this.navigate_kdjw95_k$(new NavDeepLinkRequest(deepLink, null, null), navOptions, null);
  };
  protoOf(NavController).navigate_inekf3_k$ = function (deepLink, navOptions, navigatorExtras) {
    this.navigate_kdjw95_k$(new NavDeepLinkRequest(deepLink, null, null), navOptions, navigatorExtras);
  };
  protoOf(NavController).navigate_z3wzx2_k$ = function (request) {
    this.navigate_7wc9x3_k$(request, null);
  };
  protoOf(NavController).navigate_7wc9x3_k$ = function (request, navOptions) {
    this.navigate_kdjw95_k$(request, navOptions, null);
  };
  protoOf(NavController).navigate_kdjw95_k$ = function (request, navOptions, navigatorExtras) {
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this._graph_1 == null) {
        // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
        var message = 'Cannot navigate to ' + request.toString() + '. Navigation graph has not been set for ' + ('NavController ' + toString_0(this) + '.');
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var currGraph = getTopGraph(this.backQueue_1, this);
    var deepLinkMatch = currGraph.matchDeepLinkComprehensive_x7qz1m_k$(request, true, true, currGraph);
    if (!(deepLinkMatch == null)) {
      var destination = deepLinkMatch.get_destination_9r3c63_k$();
      var tmp0_elvis_lhs = destination.addInDefaultArgs_5c4oma_k$(deepLinkMatch.get_matchingArgs_vawzb7_k$());
      var args = tmp0_elvis_lhs == null ? Bundle_init_$Create$() : tmp0_elvis_lhs;
      var node = deepLinkMatch.get_destination_9r3c63_k$();
      navigate(this, node, args, navOptions, navigatorExtras);
    } else {
      throw IllegalArgumentException_init_$Create$('Navigation destination that matches route ' + request.toString() + ' cannot be found in the ' + ('navigation graph ' + toString(this._graph_1)));
    }
  };
  protoOf(NavController).navigate_n97lsf_k$ = function (route, builder) {
    this.navigate$default_m3ygrg_k$(route, navOptions(builder));
  };
  protoOf(NavController).navigate_ojobuw_k$ = function (route, navOptions, navigatorExtras) {
    this.navigate_kdjw95_k$(Companion_getInstance_2().fromUri_usevr5_k$(UriUtils_getInstance().parse_pc1q8p_k$(Companion_getInstance_0().createRoute_kxyyqi_k$(route))).build_1k0s4u_k$(), navOptions, navigatorExtras);
  };
  protoOf(NavController).navigate$default_m3ygrg_k$ = function (route, navOptions, navigatorExtras, $super) {
    navOptions = navOptions === VOID ? null : navOptions;
    navigatorExtras = navigatorExtras === VOID ? null : navigatorExtras;
    var tmp;
    if ($super === VOID) {
      this.navigate_ojobuw_k$(route, navOptions, navigatorExtras);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigate_ojobuw_k$.call(this, route, navOptions, navigatorExtras);
    }
    return tmp;
  };
  protoOf(NavController).navigate_4p0e6e_k$ = function (route, builder) {
    this.navigate$default_wj60ex_k$(route, navOptions(builder));
  };
  protoOf(NavController).navigate_4qp8pf_k$ = function (route, navOptions, navigatorExtras) {
    var finalRoute = generateRouteFilled(this, route);
    this.navigate_ojobuw_k$(finalRoute, navOptions, navigatorExtras);
  };
  protoOf(NavController).navigate$default_wj60ex_k$ = function (route, navOptions, navigatorExtras, $super) {
    navOptions = navOptions === VOID ? null : navOptions;
    navigatorExtras = navigatorExtras === VOID ? null : navigatorExtras;
    var tmp;
    if ($super === VOID) {
      this.navigate_4qp8pf_k$(route, navOptions, navigatorExtras);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigate_4qp8pf_k$.call(this, route, navOptions, navigatorExtras);
    }
    return tmp;
  };
  protoOf(NavController).saveState_2v0z6c_k$ = function () {
    var b = null;
    var navigatorNames = ArrayList_init_$Create$();
    var navigatorState = Bundle_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this._navigatorProvider_1.get_navigators_amqgsl_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var name = tmp1_loop_parameter.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.get_value_j01efc_k$();
      var savedState = value.onSaveState_2cp4ad_k$();
      if (!(savedState == null)) {
        navigatorNames.add_utx5q5_k$(name);
        navigatorState.putBundle_yus54s_k$(name, savedState);
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!navigatorNames.isEmpty_y1axqb_k$()) {
      b = Bundle_init_$Create$();
      navigatorState.putStringArrayList_fdygnr_k$('multiplatform-support-nav:controller:navigatorState:names', navigatorNames);
      b.putBundle_yus54s_k$('multiplatform-support-nav:controller:navigatorState', navigatorState);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.backQueue_1.isEmpty_y1axqb_k$()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.backQueue_1.get_size_woubt6_k$();
      var backStack = fillArrayVal(Array(size), null);
      var index = 0;
      var tmp2_iterator = this.backQueue_1.iterator_jk1svi_k$();
      while (tmp2_iterator.hasNext_bitz1p_k$()) {
        var backStackEntry = tmp2_iterator.next_20eer_k$();
        var tmp3 = index;
        index = tmp3 + 1 | 0;
        backStack[tmp3] = NavBackStackEntryState_init_$Create$(backStackEntry).toBundle_xlw0d9_k$();
      }
      b.putBundleArray_ji4i8m_k$('multiplatform-support-nav:controller:backStack', backStack);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.backStackMap_1.isEmpty_y1axqb_k$()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackDestIds = new Int32Array(this.backStackMap_1.get_size_woubt6_k$());
      var backStackIds = ArrayList_init_$Create$();
      var index_0 = 0;
      // Inline function 'kotlin.collections.iterator' call
      var tmp4_iterator = this.backStackMap_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp4_iterator.hasNext_bitz1p_k$()) {
        var tmp5_loop_parameter = tmp4_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var destId = tmp5_loop_parameter.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var id = tmp5_loop_parameter.get_value_j01efc_k$();
        var tmp6 = index_0;
        index_0 = tmp6 + 1 | 0;
        backStackDestIds[tmp6] = destId;
        // Inline function 'kotlin.collections.plusAssign' call
        backStackIds.add_utx5q5_k$(id);
      }
      b.putIntArray_mue24i_k$('multiplatform-support-nav:controller:backStackDestIds', backStackDestIds);
      b.putStringArrayList_fdygnr_k$('multiplatform-support-nav:controller:backStackIds', backStackIds);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.backStackStates_1.isEmpty_y1axqb_k$()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackStateIds = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp7_iterator = this.backStackStates_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp7_iterator.hasNext_bitz1p_k$()) {
        var tmp8_loop_parameter = tmp7_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var id_0 = tmp8_loop_parameter.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var backStackStates = tmp8_loop_parameter.get_value_j01efc_k$();
        // Inline function 'kotlin.collections.plusAssign' call
        backStackStateIds.add_utx5q5_k$(id_0);
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = backStackStates.get_size_woubt6_k$();
        var states = fillArrayVal(Array(size_0), null);
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index_1 = 0;
        var tmp0_iterator_0 = backStackStates.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'androidx.navigation.NavController.saveState.<anonymous>' call
          var tmp1 = index_1;
          index_1 = tmp1 + 1 | 0;
          states[checkIndexOverflow(tmp1)] = item.toBundle_xlw0d9_k$();
        }
        b.putBundleArray_ji4i8m_k$('multiplatform-support-nav:controller:backStackStates:' + id_0, states);
      }
      b.putStringArrayList_fdygnr_k$('multiplatform-support-nav:controller:backStackStates', backStackStateIds);
    }
    if (this.deepLinkHandled_1) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      b.putBoolean_kf6y2l_k$('multiplatform-support-nav:controller:deepLinkHandled', this.deepLinkHandled_1);
    }
    return b;
  };
  protoOf(NavController).restoreState_xctpdv_k$ = function (navState) {
    if (navState == null) {
      return Unit_getInstance();
    }
    this.navigatorStateToRestore_1 = navState.getBundle_4qisc1_k$('multiplatform-support-nav:controller:navigatorState');
    var tmp = this;
    var tmp0_safe_receiver = navState.getBundleArray_wsisai_k$('multiplatform-support-nav:controller:backStack');
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
        var tmp0_safe_receiver_0 = Companion_getInstance_4().fromBundle_93kj7a_k$(element);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination.add_utx5q5_k$(tmp0_safe_receiver_0);
        }
      }
      tmp_0 = destination;
    }
    tmp.backStackToRestore_1 = tmp_0;
    this.backStackStates_1.clear_j9egeb_k$();
    var backStackDestIds = navState.getIntArray_12era1_k$('multiplatform-support-nav:controller:backStackDestIds');
    var backStackIds = navState.getStringArrayList_bu80fr_k$('multiplatform-support-nav:controller:backStackIds');
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
        var this_0 = this.backStackMap_1;
        var value = backStackIds.get_c1px32_k$(tmp1);
        this_0.put_4fpzoq_k$(item, value);
      }
    }
    var backStackStateIds = navState.getStringArrayList_bu80fr_k$('multiplatform-support-nav:controller:backStackStates');
    var tmp2_safe_receiver = backStackStateIds == null ? null : filterNotNull(backStackStateIds);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp2_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp0_safe_receiver_1 = navState.getBundleArray_wsisai_k$('multiplatform-support-nav:controller:backStackStates:' + element_0);
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
            var tmp0_safe_receiver_2 = Companion_getInstance_4().fromBundle_93kj7a_k$(element_1);
            if (tmp0_safe_receiver_2 == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              destination_0.add_utx5q5_k$(tmp0_safe_receiver_2);
            }
          }
          tmp_1 = destination_0;
        }
        var backStackState = tmp_1;
        if (!(backStackState == null)) {
          // Inline function 'kotlin.collections.set' call
          var this_1 = this.backStackStates_1;
          // Inline function 'kotlin.apply' call
          var this_2 = ArrayDeque_init_$Create$_0(backStackState.get_size_woubt6_k$());
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>.<anonymous>' call
          var tmp0_iterator_0 = backStackState.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var i = tmp0_iterator_0.next_20eer_k$();
            this_2.add_utx5q5_k$(i);
          }
          this_1.put_4fpzoq_k$(element_0, this_2);
        }
      }
    }
    this.deepLinkHandled_1 = navState.getBoolean_es67bp_k$('multiplatform-support-nav:controller:deepLinkHandled');
  };
  protoOf(NavController).setLifecycleOwner_6u4qel_k$ = function (owner) {
    if (equals(owner, this.lifecycleOwner_1)) {
      return Unit_getInstance();
    }
    var tmp0_safe_receiver = this.lifecycleOwner_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_lifecycle_3iiym9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.removeObserver_thdcdj_k$(this.lifecycleObserver_1);
    }
    this.lifecycleOwner_1 = owner;
    owner.get_lifecycle_3iiym9_k$().addObserver_xhlg3u_k$(this.lifecycleObserver_1);
  };
  protoOf(NavController).setViewModelStore_uweamt_k$ = function (viewModelStore) {
    if (equals(this.viewModel_1, Companion_getInstance_6().getInstance_dzsvqn_k$(viewModelStore))) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.backQueue_1.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.navigation.NavController.setViewModelStore.<anonymous>' call
      var message = 'ViewModelStore should be set before setGraph call';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    this.viewModel_1 = Companion_getInstance_6().getInstance_dzsvqn_k$(viewModelStore);
  };
  protoOf(NavController).getBackStackEntry_qt8s19_k$ = function (route) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_0 = this.backQueue_1;
      var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element = iterator.previous_l2dfd5_k$();
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        if (element.get_destination_9r3c63_k$().hasRoute_h24xfv_k$(route, element.get_arguments_p5ddub_k$())) {
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
        var message = 'No destination with route ' + route + " is on the NavController's back stack. The " + ('current destination is ' + toString(this.get_currentDestination_a0gvj6_k$()));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block_0;
      }
    }
    return lastFromBackStack;
  };
  protoOf(NavController).getBackStackEntry_4g9xag_k$ = function (route) {
    var finalRoute = generateRouteFilled(this, route);
    return this.getBackStackEntry_qt8s19_k$(finalRoute);
  };
  protoOf(NavController).get_currentBackStackEntry_facmv5_k$ = function () {
    return this.backQueue_1.lastOrNull_u4yjpc_k$();
  };
  protoOf(NavController).get_currentBackStackEntryFlow_yqrt69_k$ = function () {
    return this.currentBackStackEntryFlow_1;
  };
  protoOf(NavController).get_previousBackStackEntry_51wa9d_k$ = function () {
    var iterator = reversed(this.backQueue_1).iterator_jk1svi_k$();
    if (iterator.hasNext_bitz1p_k$()) {
      iterator.next_20eer_k$();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = asSequence(iterator).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavController.<get-previousBackStackEntry>.<anonymous>' call
        var tmp = element.get_destination_9r3c63_k$();
        if (!(tmp instanceof NavGraph)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function _get_FACTORY__egxcbd($this) {
    return $this.FACTORY_1;
  }
  function NavControllerViewModel$Companion$FACTORY$lambda($this$initializer) {
    return new NavControllerViewModel();
  }
  function _get_viewModelStores__5u0txh($this) {
    return $this.viewModelStores_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.viewModelFactory' call
    // Inline function 'kotlin.apply' call
    var this_0 = new InitializerViewModelFactoryBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.Companion.FACTORY.<anonymous>' call
    // Inline function 'androidx.lifecycle.viewmodel.initializer' call
    var initializer = NavControllerViewModel$Companion$FACTORY$lambda;
    this_0.addInitializer_s9nycr_k$(getKClass(NavControllerViewModel), initializer);
    tmp.FACTORY_1 = this_0.build_1k0s4u_k$();
  }
  protoOf(Companion_1).getInstance_dzsvqn_k$ = function (viewModelStore) {
    var viewModelProvider = Companion_getInstance_3().create$default_y5m4ly_k$(viewModelStore, this.FACTORY_1);
    // Inline function 'androidx.lifecycle.get' call
    return viewModelProvider.get_1zxqo7_k$(getKClass(NavControllerViewModel));
  };
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function NavControllerViewModel() {
    Companion_getInstance_6();
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.viewModelStores_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(NavControllerViewModel).clear_2ns5oj_k$ = function (backStackEntryId) {
    var viewModelStore = this.viewModelStores_1.remove_gppy8k_k$(backStackEntryId);
    if (viewModelStore == null)
      null;
    else {
      viewModelStore.clear_j9egeb_k$();
    }
  };
  protoOf(NavControllerViewModel).onCleared_hwiuwz_k$ = function () {
    var tmp0_iterator = this.viewModelStores_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var store = tmp0_iterator.next_20eer_k$();
      store.clear_j9egeb_k$();
    }
    this.viewModelStores_1.clear_j9egeb_k$();
  };
  protoOf(NavControllerViewModel).getViewModelStore_jsqiop_k$ = function (backStackEntryId) {
    var viewModelStore = this.viewModelStores_1.get_wei43m_k$(backStackEntryId);
    if (viewModelStore == null) {
      viewModelStore = new ViewModelStore();
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.viewModelStores_1;
      var value = viewModelStore;
      this_0.put_4fpzoq_k$(backStackEntryId, value);
    }
    return viewModelStore;
  };
  protoOf(NavControllerViewModel).toString = function () {
    var sb = new StringBuilder('NavControllerViewModel{');
    sb.append_uppzia_k$(hashCode(this));
    sb.append_22ad7x_k$('} ViewModelStores (');
    var viewModelStoreIterator = this.viewModelStores_1.get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (viewModelStoreIterator.hasNext_bitz1p_k$()) {
      sb.append_22ad7x_k$(viewModelStoreIterator.next_20eer_k$());
      if (viewModelStoreIterator.hasNext_bitz1p_k$()) {
        sb.append_22ad7x_k$(', ');
      }
    }
    sb.append_am5a4z_k$(_Char___init__impl__6a9atx(41));
    return sb.toString();
  };
  function NavHostController() {
    NavController.call(this);
  }
  protoOf(NavHostController).setLifecycleOwner_6u4qel_k$ = function (owner) {
    protoOf(NavController).setLifecycleOwner_6u4qel_k$.call(this, owner);
  };
  protoOf(NavHostController).setViewModelStore_uweamt_k$ = function (viewModelStore) {
    protoOf(NavController).setViewModelStore_uweamt_k$.call(this, viewModelStore);
  };
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function AtomicInt(initialValue) {
    this.delegate_1 = atomic$int$1(initialValue);
  }
  protoOf(AtomicInt).incrementAndGet_83mz02_k$ = function () {
    return this.delegate_1.atomicfu$incrementAndGet();
  };
  protoOf(AtomicInt).decrementAndGet_dinmnm_k$ = function () {
    return this.delegate_1.atomicfu$decrementAndGet();
  };
  protoOf(AtomicInt).get_26vq_k$ = function () {
    return this.delegate_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  function get_argPlaceholder() {
    _init_properties_BrowserHistory_kt__capbqk();
    return argPlaceholder;
  }
  var argPlaceholder;
  var properties_initialized_BrowserHistory_kt_vyr642;
  function _init_properties_BrowserHistory_kt__capbqk() {
    if (!properties_initialized_BrowserHistory_kt_vyr642) {
      properties_initialized_BrowserHistory_kt_vyr642 = true;
      argPlaceholder = Regex_init_$Create$('\\{.*?\\}');
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavHostController;
  //endregion
  return _;
}));
