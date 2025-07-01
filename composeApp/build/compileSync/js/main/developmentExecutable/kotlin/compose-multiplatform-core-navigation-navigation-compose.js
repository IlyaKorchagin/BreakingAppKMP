(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-navigation-navigation-common.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-runtime-compose.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js', './compose-multiplatform-core-navigation-navigation-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-navigation-navigation-common.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-runtime-compose.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'), require('./compose-multiplatform-core-navigation-navigation-runtime.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-navigation-navigation-common' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-runtime-compose' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-compose'. Its dependency 'compose-multiplatform-core-navigation-navigation-runtime' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-runtime' is loaded prior to 'compose-multiplatform-core-navigation-navigation-compose'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-compose'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-compose'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-compose'], globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['compose-multiplatform-core-navigation-navigation-runtime']);
  }
}(function (_, kotlin_org_jetbrains_androidx_navigation_navigation_common, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime_compose, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate, kotlin_org_jetbrains_androidx_navigation_navigation_runtime) {
  'use strict';
  //region block: imports
  var NavDestinationBuilder_init_$Init$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.q;
  var protoOf = kotlin_kotlin.$_$.ki;
  var objectCreate = kotlin_kotlin.$_$.ji;
  var NavDestinationBuilder_init_$Init$_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.p;
  var NavDestinationBuilder = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var VOID = kotlin_kotlin.$_$.j;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var rememberSaveableStateHolder = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.h;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Dialog = kotlin_org_jetbrains_compose_ui_ui.$_$.n9;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var get_LocalInspectionMode = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.n;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var KProperty0 = kotlin_kotlin.$_$.tj;
  var THROW_ISE = kotlin_kotlin.$_$.po;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xg;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var isInterface = kotlin_kotlin.$_$.sh;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var equals = kotlin_kotlin.$_$.sg;
  var FunctionAdapter = kotlin_kotlin.$_$.eg;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.bh;
  var Event_ON_START_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var Event_ON_STOP_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  var emptyList = kotlin_kotlin.$_$.ea;
  var getKClass = kotlin_kotlin.$_$.g;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.tb;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.sb;
  var NavGraphBuilder_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.r;
  var get_LocalLifecycleOwner = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime_compose.$_$.a;
  var LocalViewModelStoreOwner_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.b;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var lastOrNull = kotlin_kotlin.$_$.qb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var SeekableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var rememberTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t1;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var AnimatedContent = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModelStoreOwner = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var KMutableProperty0 = kotlin_kotlin.$_$.rj;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v1;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.j;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.k;
  var Companion_getInstance_2 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.v;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l3;
  var toLong = kotlin_kotlin.$_$.mi;
  var numberToInt = kotlin_kotlin.$_$.gi;
  var animate = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_animation_animation.$_$.q;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_animation_animation.$_$.r;
  var togetherWith = kotlin_org_jetbrains_compose_animation_animation.$_$.p;
  var ContentTransform = kotlin_org_jetbrains_compose_animation_animation.$_$.c;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.h;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.g;
  var NavDestination = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.f;
  var NavDestination_init_$Init$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.o;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dh;
  var Navigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.l;
  var Navigator_init_$Init$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.s;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var DialogProperties_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui.$_$.pa;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.c;
  var indexOf = kotlin_kotlin.$_$.bb;
  var checkIndexOverflow = kotlin_kotlin.$_$.v8;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  var viewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.a;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var Companion_getInstance_5 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.t;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.aq;
  var createSavedStateHandle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.e;
  var rememberSaveable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.i;
  var collectAsState_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.e;
  var NavHostController = kotlin_org_jetbrains_androidx_navigation_navigation_runtime.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComposeNavigatorDestinationBuilder, 'ComposeNavigatorDestinationBuilder', VOID, NavDestinationBuilder);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForLambda(DialogHost$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(ComposeViewModelStoreOwner, 'ComposeViewModelStoreOwner', ComposeViewModelStoreOwner, VOID, [ViewModelStoreOwner]);
  initMetadataForClass(_no_name_provided__qut3iv_1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(_no_name_provided__qut3iv_2, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForLambda(NavHost$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(NavHost$slambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(NavHost$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(NavHost$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_3, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(ComposeNavGraph, 'ComposeNavGraph', VOID, NavGraph);
  initMetadataForClass(ComposeNavGraphNavigator, 'ComposeNavGraphNavigator', VOID, NavGraphNavigator);
  initMetadataForClass(Destination, 'Destination', VOID, NavDestination);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ComposeNavigator, 'ComposeNavigator', ComposeNavigator, Navigator);
  initMetadataForObject(ComposableSingletons$ComposeNavigator_jbKt, 'ComposableSingletons$ComposeNavigator_jbKt');
  initMetadataForClass(Destination_0, 'Destination', VOID, NavDestination, [NavDestination, FloatingWindow]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DialogNavigator, 'DialogNavigator', DialogNavigator, Navigator);
  initMetadataForObject(ComposableSingletons$DialogNavigator_jbKt, 'ComposableSingletons$DialogNavigator_jbKt');
  initMetadataForClass(BackStackEntryIdViewModel, 'BackStackEntryIdViewModel', VOID, ViewModel);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function _get_composeNavigator__mnov46($this) {
    return $this.composeNavigator_1;
  }
  function _get_content__ps04ag($this) {
    return $this.content_1;
  }
  function ComposeNavigatorDestinationBuilder_init_$Init$(navigator, route, content, $this) {
    NavDestinationBuilder_init_$Init$(navigator, route, $this);
    ComposeNavigatorDestinationBuilder.call($this);
    $this.composeNavigator_1 = navigator;
    $this.content_1 = content;
    return $this;
  }
  function ComposeNavigatorDestinationBuilder_init_$Create$(navigator, route, content) {
    return ComposeNavigatorDestinationBuilder_init_$Init$(navigator, route, content, objectCreate(protoOf(ComposeNavigatorDestinationBuilder)));
  }
  function ComposeNavigatorDestinationBuilder_init_$Init$_0(navigator, route, typeMap, content, $this) {
    NavDestinationBuilder_init_$Init$_0(navigator, route, typeMap, $this);
    ComposeNavigatorDestinationBuilder.call($this);
    $this.composeNavigator_1 = navigator;
    $this.content_1 = content;
    return $this;
  }
  function ComposeNavigatorDestinationBuilder_init_$Create$_0(navigator, route, typeMap, content) {
    return ComposeNavigatorDestinationBuilder_init_$Init$_0(navigator, route, typeMap, content, objectCreate(protoOf(ComposeNavigatorDestinationBuilder)));
  }
  protoOf(ComposeNavigatorDestinationBuilder).set_enterTransition_hgs3p4_k$ = function (_set____db54di) {
    this.enterTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavigatorDestinationBuilder).get_enterTransition_wmetuk_k$ = function () {
    return this.enterTransition_1;
  };
  protoOf(ComposeNavigatorDestinationBuilder).set_exitTransition_vdt24o_k$ = function (_set____db54di) {
    this.exitTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavigatorDestinationBuilder).get_exitTransition_4wrgnw_k$ = function () {
    return this.exitTransition_1;
  };
  protoOf(ComposeNavigatorDestinationBuilder).set_popEnterTransition_n74b6p_k$ = function (_set____db54di) {
    this.popEnterTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavigatorDestinationBuilder).get_popEnterTransition_fberaz_k$ = function () {
    return this.popEnterTransition_1;
  };
  protoOf(ComposeNavigatorDestinationBuilder).set_popExitTransition_ymo6an_k$ = function (_set____db54di) {
    this.popExitTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavigatorDestinationBuilder).get_popExitTransition_q38wez_k$ = function () {
    return this.popExitTransition_1;
  };
  protoOf(ComposeNavigatorDestinationBuilder).set_sizeTransform_kwuhak_k$ = function (_set____db54di) {
    this.sizeTransform_1 = _set____db54di;
  };
  protoOf(ComposeNavigatorDestinationBuilder).get_sizeTransform_ng06yq_k$ = function () {
    return this.sizeTransform_1;
  };
  protoOf(ComposeNavigatorDestinationBuilder).instantiateDestination_eu87cs_k$ = function () {
    return new Destination(this.composeNavigator_1, this.content_1);
  };
  protoOf(ComposeNavigatorDestinationBuilder).build_1k0s4u_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(NavDestinationBuilder).build_1k0s4u_k$.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.ComposeNavigatorDestinationBuilder.build.<anonymous>' call
    this_0.set_enterTransition_kt37sl_k$(this.enterTransition_1);
    this_0.set_exitTransition_245o9x_k$(this.exitTransition_1);
    this_0.set_popEnterTransition_1gw3s2_k$(this.popEnterTransition_1);
    this_0.set_popExitTransition_tfykk_k$(this.popExitTransition_1);
    this_0.set_sizeTransform_7auwun_k$(this.sizeTransform_1);
    return this_0;
  };
  function ComposeNavigatorDestinationBuilder() {
    this.enterTransition_1 = null;
    this.exitTransition_1 = null;
    this.popEnterTransition_1 = null;
    this.popExitTransition_1 = null;
    this.sizeTransform_1 = null;
  }
  function DialogHost(dialogNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(294589392);
    sourceInformation($composer_0, 'C(DialogHost)41@1668L29,42@1751L16,43@1795L36,44@1853L36,46@1960L16,47@2004L52,73@3243L294,73@3188L349:DialogHost.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(dialogNavigator) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(294589392, $dirty, -1, 'androidx.navigation.compose.DialogHost (DialogHost.kt:40)');
      }
      var saveableStateHolder = rememberSaveableStateHolder($composer_0, 0);
      var tmp = dialogNavigator.get_backStack_5tqhrf_k$();
      var dialogBackStack$delegate = collectAsState(tmp, null, $composer_0, 0, 1);
      var visibleBackStack = rememberVisibleList(DialogHost$lambda(dialogBackStack$delegate), $composer_0, 0);
      PopulateVisibleList(visibleBackStack, DialogHost$lambda(dialogBackStack$delegate), $composer_0, 0);
      var tmp_0 = dialogNavigator.get_transitionInProgress_orey4t_k$();
      var transitionInProgress$delegate = collectAsState(tmp_0, null, $composer_0, 0, 1);
      sourceInformationMarkerStart($composer_0, 1361033813, 'CC(remember):DialogHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var value = mutableStateListOf();
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var dialogsToDispose = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1361037007);
      sourceInformation($composer_0, '*52@2222L43,54@2331L588,51@2183L736');
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = visibleBackStack.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var tmp_3 = element.get_destination_9r3c63_k$();
        var destination = tmp_3 instanceof Destination_0 ? tmp_3 : THROW_CCE();
        sourceInformationMarkerStart($composer_0, -1136022005, 'CC(remember):DialogHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        var invalid = !!(($dirty & 14) === 4 | $composer_0.changedInstance_s1wkiy_k$(element));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>' call
          var value_0 = DialogHost$lambda_1(dialogNavigator, element);
          this_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_6 = destination.get_dialogProperties_tiqn5t_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1129586364, true, DialogHost$lambda_2(element, dialogNavigator, saveableStateHolder, dialogsToDispose, destination), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Dialog(tmp0_group_0, tmp_6, tmp0, $composer_0, 384, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_9 = DialogHost$lambda_0(transitionInProgress$delegate);
      sourceInformationMarkerStart($composer_0, 1361073703, 'CC(remember):DialogHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_1 = !!($composer_0.changed_ga7h3f_k$(transitionInProgress$delegate) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_2.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid_1 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var value_2 = DialogHost$slambda_0(dialogNavigator, dialogsToDispose, transitionInProgress$delegate, null);
        this_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_2;
      }
      var tmp_11 = tmp_10;
      var tmp1_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect(tmp_9, dialogsToDispose, tmp1_group, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(DialogHost$lambda_3(dialogNavigator, $changed));
    }
  }
  function rememberVisibleList(backStack, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 467378629, 'C(rememberVisibleList)121@4970L7,122@4989L399:DialogHost.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(467378629, $changed, -1, 'androidx.navigation.compose.rememberVisibleList (DialogHost.kt:119)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalInspectionMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var isInspecting = tmp0;
    sourceInformationMarkerStart($composer_0, -393426303, 'CC(remember):DialogHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(backStack);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_1 = mutableStateListOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = backStack.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0;
        if (isInspecting) {
          tmp_0 = true;
        } else {
          tmp_0 = element.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().isAtLeast_pbz9hc_k$(State_STARTED_getInstance());
        }
        if (tmp_0) {
          destination.add_utx5q5_k$(element);
        }
      }
      this_1.addAll_v4m9z4_k$(destination);
      var value = this_1;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function PopulateVisibleList(_this__u8e3s4, backStack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1537894851);
    sourceInformation($composer_0, 'C(PopulateVisibleList)89@3710L7,*91@3793L961,91@3759L995:DialogHost.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(backStack) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1537894851, $dirty, -1, 'androidx.navigation.compose.PopulateVisibleList (DialogHost.kt:88)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalInspectionMode();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var isInspecting = tmp0;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = backStack.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>' call
        var tmp = element.get_lifecycle_3iiym9_k$();
        sourceInformationMarkerStart($composer_0, -788103595, 'CC(remember):DialogHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        var invalid = !!(!!($composer_0.changed_jpyyrz_k$(isInspecting) | $composer_0.changedInstance_s1wkiy_k$(_this__u8e3s4)) | $composer_0.changedInstance_s1wkiy_k$(element));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>.<anonymous>' call
          var value = PopulateVisibleList$lambda(element, isInspecting, _this__u8e3s4);
          this_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect(tmp, tmp0_group, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PopulateVisibleList$lambda_0(_this__u8e3s4, backStack, $changed));
    }
  }
  function DialogHost$lambda($dialogBackStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('dialogBackStack', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $dialogBackStack$delegate.get_value_j01efc_k$();
  }
  function DialogHost$lambda_0($transitionInProgress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('transitionInProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $transitionInProgress$delegate.get_value_j01efc_k$();
  }
  function DialogHost$lambda_1($dialogNavigator, $backStackEntry) {
    return function () {
      $dialogNavigator.dismiss_8yz2j0_k$($backStackEntry);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($dialogNavigator, $backStackEntry, $dialogsToDispose) {
    this.$dialogNavigator_1 = $dialogNavigator;
    this.$backStackEntry_1 = $backStackEntry;
    this.$dialogsToDispose_1 = $dialogsToDispose;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.$dialogNavigator_1.onTransitionComplete_byyjht_k$(this.$backStackEntry_1);
    this.$dialogsToDispose_1.remove_an8aut_k$(this.$backStackEntry_1);
  };
  function DialogHost$lambda$lambda($dialogsToDispose, $backStackEntry, $dialogNavigator) {
    return function ($this$DisposableEffect) {
      $dialogsToDispose.add_wl2rvy_k$($backStackEntry);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($dialogNavigator, $backStackEntry, $dialogsToDispose);
    };
  }
  function DialogHost$lambda$lambda_0($destination, $backStackEntry) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C66@2872L23:DialogHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-497631156, $changed, -1, 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous> (DialogHost.kt:66)');
        }
        $destination.get_content_x4jwgj_k$()($backStackEntry, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function DialogHost$lambda_2($backStackEntry, $dialogNavigator, $saveableStateHolder, $dialogsToDispose, $destination) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C55@2378L247,55@2345L280,65@2842L67,65@2801L108:DialogHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1129586364, $changed, -1, 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous> (DialogHost.kt:55)');
        }
        sourceInformationMarkerStart($composer_0, -1838164906, 'CC(remember):DialogHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changedInstance_s1wkiy_k$($backStackEntry) | $composer_0.changed_ga7h3f_k$($dialogNavigator));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = DialogHost$lambda$lambda($dialogsToDispose, $backStackEntry, $dialogNavigator);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect($backStackEntry, tmp0_group, $composer_0, 0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-497631156, true, DialogHost$lambda$lambda_0($destination, $backStackEntry), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        LocalOwnersProvider($backStackEntry, $saveableStateHolder, tmp0, $composer_0, 384);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function DialogHost$slambda($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation) {
    this.$dialogNavigator_1 = $dialogNavigator;
    this.$dialogsToDispose_1 = $dialogsToDispose;
    this.$transitionInProgress$delegate_1 = $transitionInProgress$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DialogHost$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DialogHost$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DialogHost$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_iterator = DialogHost$lambda_0(this.$transitionInProgress$delegate_1).iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            if (!this.$dialogNavigator_1.get_backStack_5tqhrf_k$().get_value_j01efc_k$().contains_aljjnj_k$(element) && !this.$dialogsToDispose_1.contains_ccp5tc_k$(element)) {
              this.$dialogNavigator_1.onTransitionComplete_byyjht_k$(element);
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DialogHost$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new DialogHost$slambda(this.$dialogNavigator_1, this.$dialogsToDispose_1, this.$transitionInProgress$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(DialogHost$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DialogHost$slambda_0($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation) {
    var i = new DialogHost$slambda($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DialogHost$lambda_3($dialogNavigator, $$changed) {
    return function ($composer, $force) {
      DialogHost($dialogNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
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
  function PopulateVisibleList$lambda$lambda($isInspecting, $this_PopulateVisibleList, $entry) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if ($isInspecting && !$this_PopulateVisibleList.contains_aljjnj_k$($entry)) {
        $this_PopulateVisibleList.add_utx5q5_k$($entry);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (event.equals(Event_ON_START_getInstance())) {
        var tmp_1;
        if (!$this_PopulateVisibleList.contains_aljjnj_k$($entry)) {
          $this_PopulateVisibleList.add_utx5q5_k$($entry);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      var tmp_2;
      if (event.equals(Event_ON_STOP_getInstance())) {
        $this_PopulateVisibleList.remove_cedx0m_k$($entry);
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0($entry, $observer) {
    this.$entry_1 = $entry;
    this.$observer_1 = $observer;
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.$entry_1.get_lifecycle_3iiym9_k$().removeObserver_thdcdj_k$(this.$observer_1);
  };
  function PopulateVisibleList$lambda($entry, $isInspecting, $this_PopulateVisibleList) {
    return function ($this$DisposableEffect) {
      var tmp = PopulateVisibleList$lambda$lambda($isInspecting, $this_PopulateVisibleList, $entry);
      var observer = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp);
      $entry.get_lifecycle_3iiym9_k$().addObserver_xhlg3u_k$(observer);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($entry, observer);
    };
  }
  function PopulateVisibleList$lambda_0($this_PopulateVisibleList, $backStack, $$changed) {
    return function ($composer, $force) {
      PopulateVisibleList($this_PopulateVisibleList, $backStack, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function composable(_this__u8e3s4, route, arguments_0, deepLinks, enterTransition, exitTransition, popEnterTransition, popExitTransition, sizeTransform, content) {
    arguments_0 = arguments_0 === VOID ? emptyList() : arguments_0;
    deepLinks = deepLinks === VOID ? emptyList() : deepLinks;
    enterTransition = enterTransition === VOID ? null : enterTransition;
    exitTransition = exitTransition === VOID ? null : exitTransition;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    sizeTransform = sizeTransform === VOID ? null : sizeTransform;
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.navigation.get' call
    var this_0 = _this__u8e3s4.get_provider_mw8vcq_k$();
    var clazz = getKClass(ComposeNavigator);
    var tmp$ret$0 = this_0.getNavigator_zialjt_k$(clazz);
    var this_1 = ComposeNavigatorDestinationBuilder_init_$Create$(tmp$ret$0, route, content);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.composable.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = arguments_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.compose.composable.<anonymous>.<anonymous>' call
      var argumentName = element.component1_7eebsc_k$();
      var argument = element.component2_7eebsb_k$();
      this_1.argument_wnm9au_k$(argumentName, argument);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = deepLinks.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.compose.composable.<anonymous>.<anonymous>' call
      this_1.deepLink_31mcg8_k$(element_0);
    }
    this_1.set_enterTransition_hgs3p4_k$(enterTransition);
    this_1.set_exitTransition_vdt24o_k$(exitTransition);
    this_1.set_popEnterTransition_n74b6p_k$(popEnterTransition);
    this_1.set_popExitTransition_ymo6an_k$(popExitTransition);
    this_1.set_sizeTransform_kwuhak_k$(sizeTransform);
    _this__u8e3s4.destination_z5tf93_k$(this_1);
  }
  function NavHost(navController, startDestination, modifier, contentAlignment, route, enterTransition, exitTransition, popEnterTransition, popExitTransition, sizeTransform, builder, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var route_0 = {_v: route};
    var enterTransition_0 = {_v: enterTransition};
    var exitTransition_0 = {_v: exitTransition};
    var popEnterTransition_0 = {_v: popEnterTransition};
    var popExitTransition_0 = {_v: popExitTransition};
    var sizeTransform_0 = {_v: sizeTransform};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1840250294);
    sourceInformation($composer_0, 'C(NavHost)P(5,10,4,1,8,2,3,6,7,9)207@8453L58,213@8654L59,232@9273L126,230@9233L343:NavHost.kt#opm8kd');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(navController) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(startDestination) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(route_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(enterTransition_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(exitTransition_0._v) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | (($default & 128) === 0 && $composer_0.changedInstance_s1wkiy_k$(popEnterTransition_0._v) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | (($default & 256) === 0 && $composer_0.changedInstance_s1wkiy_k$(popExitTransition_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(sizeTransform_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(builder) ? 4 : 2);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance_0();
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = Companion_getInstance_1().get_TopStart_o4x792_k$();
        }
        if (!(($default & 16) === 0)) {
          route_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          sourceInformationMarkerStart($composer_0, 652913812, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.rememberedValue_4dg93v_k$();
          var tmp;
          if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value = NavHost$lambda_6;
            this_0.updateRememberedValue_l1wh71_k$(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          enterTransition_0._v = tmp0_group;
        }
        if (!(($default & 64) === 0)) {
          sourceInformationMarkerStart($composer_0, 652920245, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_1 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = this_1.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_0 = NavHost$lambda_7;
            this_1.updateRememberedValue_l1wh71_k$(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          exitTransition_0._v = tmp1_group;
        }
        if (!(($default & 128) === 0)) {
          popEnterTransition_0._v = enterTransition_0._v;
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          popExitTransition_0._v = exitTransition_0._v;
          $dirty = $dirty & -234881025;
        }
        if (!(($default & 512) === 0)) {
          sizeTransform_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(1840250294, $dirty, $dirty1, 'androidx.navigation.compose.NavHost (NavHost.kt:229)');
      }
      sourceInformationMarkerStart($composer_0, 652940120, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!(($dirty & 57344) === 16384 | ($dirty & 112) === 32) | ($dirty1 & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        // Inline function 'androidx.navigation.createGraph' call
        var route_1 = route_0._v;
        // Inline function 'androidx.navigation.navigation' call
        var this_3 = navController.get_navigatorProvider_9yxp35_k$();
        // Inline function 'kotlin.apply' call
        var this_4 = NavGraphBuilder_init_$Create$(this_3, startDestination, route_1);
        // Inline function 'kotlin.contracts.contract' call
        builder(this_4);
        var value_1 = this_4.build_1k0s4u_k$();
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      NavHost_0(navController, tmp2_group, modifier_0._v, contentAlignment_0._v, enterTransition_0._v, exitTransition_0._v, popEnterTransition_0._v, popExitTransition_0._v, sizeTransform_0._v, $composer_0, 14 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(NavHost$lambda_8(navController, startDestination, modifier_0, contentAlignment_0, route_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, builder, $changed, $changed1, $default));
    }
  }
  function NavHost_0(navController, graph, modifier, contentAlignment, enterTransition, exitTransition, popEnterTransition, popExitTransition, sizeTransform, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var enterTransition_0 = {_v: enterTransition};
    var exitTransition_0 = {_v: exitTransition};
    var popEnterTransition_0 = {_v: popEnterTransition};
    var popExitTransition_0 = {_v: popExitTransition};
    var sizeTransform_0 = {_v: sizeTransform};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1964664536);
    sourceInformation($composer_0, 'C(NavHost)P(5,3,4)486@19396L58,492@19597L59,509@20177L7,510@20240L7,523@20768L16,525@20806L36,526@20871L34,547@21717L138,547@21684L171,553@21887L29,555@21976L16,558@22081L186,568@22362L42,730@30068L27:NavHost.kt#opm8kd');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(navController) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(graph) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(enterTransition_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(exitTransition_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.changedInstance_s1wkiy_k$(popEnterTransition_0._v) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | (($default & 128) === 0 && $composer_0.changedInstance_s1wkiy_k$(popExitTransition_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(sizeTransform_0._v) ? 67108864 : 33554432);
    if (!(($dirty & 38347923) === 38347922) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance_0();
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = Companion_getInstance_1().get_TopStart_o4x792_k$();
        }
        if (!(($default & 16) === 0)) {
          sourceInformationMarkerStart($composer_0, 653263988, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.rememberedValue_4dg93v_k$();
          var tmp;
          if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value = NavHost$lambda_9;
            this_0.updateRememberedValue_l1wh71_k$(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          enterTransition_0._v = tmp0_group;
        }
        if (!(($default & 32) === 0)) {
          sourceInformationMarkerStart($composer_0, 653270421, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_1 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = this_1.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_0 = NavHost$lambda_10;
            this_1.updateRememberedValue_l1wh71_k$(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          exitTransition_0._v = tmp1_group;
        }
        if (!(($default & 64) === 0)) {
          popEnterTransition_0._v = enterTransition_0._v;
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          popExitTransition_0._v = exitTransition_0._v;
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          sizeTransform_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1964664536, $dirty, -1, 'androidx.navigation.compose.NavHost (NavHost.kt:507)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_2 = get_LocalLifecycleOwner();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_2);
      sourceInformationMarkerEnd($composer_1);
      var lifecycleOwner = tmp0;
      var tmp0_elvis_lhs = LocalViewModelStoreOwner_getInstance().get_current_2iudd5_k$($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(653290203);
      sourceInformation($composer_0, '510@20251L29');
      var tmp2_group = tmp0_elvis_lhs == null ? rememberViewModelStoreOwner($composer_0, 0) : tmp0_elvis_lhs;
      $composer_0.endReplaceGroup_ek144q_k$();
      var viewModelStoreOwner = tmp2_group;
      navController.setViewModelStore_uweamt_k$(viewModelStoreOwner.get_viewModelStore_ryk6ka_k$());
      navController.set_graph_ypaita_k$(graph);
      // Inline function 'androidx.navigation.get' call
      var this_3 = navController.get_navigatorProvider_9yxp35_k$();
      var name = 'composable';
      var tmp_3 = this_3.getNavigator_ip43px_k$(name);
      var tmp1_elvis_lhs = tmp_3 instanceof ComposeNavigator ? tmp_3 : null;
      var tmp_4;
      if (tmp1_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp18_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
        if (tmp18_safe_receiver == null)
          null;
        else {
          tmp18_safe_receiver.updateScope_t8jcf_k$(NavHost$lambda_11(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, $changed, $default));
        }
        return Unit_getInstance();
      } else {
        tmp_4 = tmp1_elvis_lhs;
      }
      var composeNavigator = tmp_4;
      var tmp_5 = composeNavigator.get_backStack_ueublk_k$();
      var currentBackStack$delegate = collectAsState(tmp_5, null, $composer_0, 0, 1);
      sourceInformationMarkerStart($composer_0, 653309086, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_4.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_1 = mutableFloatStateOf(0.0);
        this_4.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var progress$delegate = tmp3_group;
      sourceInformationMarkerStart($composer_0, 653311164, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_5.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_2 = mutableStateOf(false);
        this_5.updateRememberedValue_l1wh71_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var inPredictiveBack$delegate = tmp4_group;
      sourceInformationMarkerStart($composer_0, 653338340, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(navController) | $composer_0.changedInstance_s1wkiy_k$(lifecycleOwner));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_6.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_3 = NavHost$lambda_12(navController, lifecycleOwner);
        this_6.updateRememberedValue_l1wh71_k$(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp5_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DisposableEffect(lifecycleOwner, tmp5_group, $composer_0, 0);
      var saveableStateHolder = rememberSaveableStateHolder($composer_0, 0);
      var tmp_12 = navController.get_visibleEntries_4njt_k$();
      var allVisibleEntries$delegate = collectAsState(tmp_12, null, $composer_0, 0, 1);
      sourceInformationMarkerStart($composer_0, 653350036, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_7.rememberedValue_4dg93v_k$();
      var tmp_13;
      if (false || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_4 = derivedStateOf(NavHost$lambda_13(allVisibleEntries$delegate));
        this_7.updateRememberedValue_l1wh71_k$(value_4);
        tmp_13 = value_4;
      } else {
        tmp_13 = it_4;
      }
      var tmp_14 = tmp_13;
      var tmp6_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var visibleEntries$delegate = tmp6_group;
      var backStackEntry = lastOrNull(NavHost$lambda_5(visibleEntries$delegate));
      sourceInformationMarkerStart($composer_0, 653358884, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_8.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (false || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        // Inline function 'kotlin.collections.mutableMapOf' call
        var value_5 = LinkedHashMap_init_$Create$();
        this_8.updateRememberedValue_l1wh71_k$(value_5);
        tmp_15 = value_5;
      } else {
        tmp_15 = it_5;
      }
      var tmp_16 = tmp_15;
      var tmp7_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var zIndices = tmp7_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(653367828);
      sourceInformation($composer_0, '571@22538L597,585@23233L597,601@23961L301,609@24295L146,609@24272L169,615@24473L348,622@24848L52,663@26822L1208,688@28087L9,689@28107L1333,661@26754L2686,715@29513L341,715@29449L405');
      if (!(backStackEntry == null)) {
        sourceInformationMarkerStart($composer_0, 653365071, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_9 = $composer_0;
        var invalid_0 = !!(!!($composer_0.changed_ga7h3f_k$(composeNavigator) | (($dirty & 3670016 ^ 1572864) > 1048576 && $composer_0.changed_ga7h3f_k$(popEnterTransition_0._v) || ($dirty & 1572864) === 1048576)) | ($dirty & 57344) === 16384);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = this_9.rememberedValue_4dg93v_k$();
        var tmp_17;
        if (invalid_0 || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_6 = NavHost$lambda_14(composeNavigator, popEnterTransition_0, enterTransition_0, inPredictiveBack$delegate);
          this_9.updateRememberedValue_l1wh71_k$(value_6);
          tmp_17 = value_6;
        } else {
          tmp_17 = it_6;
        }
        var tmp_18 = tmp_17;
        var tmp8_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var finalEnter = tmp8_group;
        sourceInformationMarkerStart($composer_0, 653387311, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_10 = $composer_0;
        var invalid_1 = !!(!!($composer_0.changed_ga7h3f_k$(composeNavigator) | (($dirty & 29360128 ^ 12582912) > 8388608 && $composer_0.changed_ga7h3f_k$(popExitTransition_0._v) || ($dirty & 12582912) === 8388608)) | ($dirty & 458752) === 131072);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_7 = this_10.rememberedValue_4dg93v_k$();
        var tmp_19;
        if (invalid_1 || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_7 = NavHost$lambda_15(composeNavigator, popExitTransition_0, exitTransition_0, inPredictiveBack$delegate);
          this_10.updateRememberedValue_l1wh71_k$(value_7);
          tmp_19 = value_7;
        } else {
          tmp_19 = it_7;
        }
        var tmp_20 = tmp_19;
        var tmp9_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var finalExit = tmp9_group;
        sourceInformationMarkerStart($composer_0, 653410311, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_11 = $composer_0;
        var invalid_2 = ($dirty & 234881024) === 67108864;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_8 = this_11.rememberedValue_4dg93v_k$();
        var tmp_21;
        if (invalid_2 || it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_8 = NavHost$lambda_16(sizeTransform_0);
          this_11.updateRememberedValue_l1wh71_k$(value_8);
          tmp_21 = value_8;
        } else {
          tmp_21 = it_8;
        }
        var tmp_22 = tmp_21;
        var tmp10_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var finalSizeTransform = tmp10_group;
        sourceInformationMarkerStart($composer_0, 653420844, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_12 = $composer_0;
        var invalid_3 = $composer_0.changed_ga7h3f_k$(composeNavigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_9 = this_12.rememberedValue_4dg93v_k$();
        var tmp_23;
        if (invalid_3 || it_9 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_9 = NavHost$lambda_17(composeNavigator, visibleEntries$delegate);
          this_12.updateRememberedValue_l1wh71_k$(value_9);
          tmp_23 = value_9;
        } else {
          tmp_23 = it_9;
        }
        var tmp_24 = tmp_23;
        var tmp11_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect(true, tmp11_group, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, 653426742, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_13 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_10 = this_13.rememberedValue_4dg93v_k$();
        var tmp_25;
        if (false || it_10 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_10 = new SeekableTransitionState(backStackEntry);
          this_13.updateRememberedValue_l1wh71_k$(value_10);
          tmp_25 = value_10;
        } else {
          tmp_25 = it_10;
        }
        var tmp_26 = tmp_25;
        var tmp12_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var transitionState = tmp12_group;
        var transition = rememberTransition(transitionState, 'entry', $composer_0, 56, 0);
        if (NavHost$lambda_2(inPredictiveBack$delegate)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1218156488);
          sourceInformation($composer_0, '625@24971L159,625@24946L184');
          var tmp_27 = NavHost$lambda_0(progress$delegate);
          sourceInformationMarkerStart($composer_0, 653442489, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_14 = $composer_0;
          var invalid_4 = !!($composer_0.changed_ga7h3f_k$(currentBackStack$delegate) | $composer_0.changedInstance_s1wkiy_k$(transitionState));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_11 = this_14.rememberedValue_4dg93v_k$();
          var tmp_28;
          if (invalid_4 || it_11 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_11 = NavHost$slambda_0(transitionState, currentBackStack$delegate, progress$delegate, null);
            this_14.updateRememberedValue_l1wh71_k$(value_11);
            tmp_28 = value_11;
          } else {
            tmp_28 = it_11;
          }
          var tmp_29 = tmp_28;
          var tmp13_group = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          LaunchedEffect_0(tmp_27, tmp13_group, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1217901451);
          sourceInformation($composer_0, '630@25191L1532,630@25160L1563');
          sourceInformationMarkerStart($composer_0, 653450902, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_15 = $composer_0;
          var invalid_5 = !!(!!($composer_0.changedInstance_s1wkiy_k$(transitionState) | $composer_0.changedInstance_s1wkiy_k$(backStackEntry)) | $composer_0.changed_ga7h3f_k$(transition));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_12 = this_15.rememberedValue_4dg93v_k$();
          var tmp_30;
          if (invalid_5 || it_12 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_12 = NavHost$slambda_2(transitionState, backStackEntry, transition, null);
            this_15.updateRememberedValue_l1wh71_k$(value_12);
            tmp_30 = value_12;
          } else {
            tmp_30 = it_12;
          }
          var tmp_31 = tmp_30;
          var tmp14_group = (tmp_31 == null ? true : !(tmp_31 == null)) ? tmp_31 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          LaunchedEffect_0(backStackEntry, tmp14_group, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        var tmp_32 = modifier_0._v;
        sourceInformationMarkerStart($composer_0, 653502770, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_16 = $composer_0;
        var invalid_6 = !!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(zIndices) | $composer_0.changed_ga7h3f_k$(composeNavigator)) | $composer_0.changed_ga7h3f_k$(finalEnter)) | $composer_0.changed_ga7h3f_k$(finalExit)) | $composer_0.changed_ga7h3f_k$(finalSizeTransform));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_13 = this_16.rememberedValue_4dg93v_k$();
        var tmp_33;
        if (invalid_6 || it_13 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_13 = NavHost$lambda_18(zIndices, composeNavigator, finalEnter, finalExit, finalSizeTransform, visibleEntries$delegate, inPredictiveBack$delegate);
          this_16.updateRememberedValue_l1wh71_k$(value_13);
          tmp_33 = value_13;
        } else {
          tmp_33 = it_13;
        }
        var tmp_34 = tmp_33;
        var tmp15_group = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_35 = contentAlignment_0._v;
        sourceInformationMarkerStart($composer_0, 653542051, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_17 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_14 = this_17.rememberedValue_4dg93v_k$();
        var tmp_36;
        if (false || it_14 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_14 = NavHost$lambda_19;
          this_17.updateRememberedValue_l1wh71_k$(value_14);
          tmp_36 = value_14;
        } else {
          tmp_36 = it_14;
        }
        var tmp_37 = tmp_36;
        var tmp16_group = (tmp_37 == null ? true : !(tmp_37 == null)) ? tmp_37 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(820763100, true, NavHost$lambda_20(saveableStateHolder, inPredictiveBack$delegate, visibleEntries$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_7 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_15 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_38;
        if (invalid_7 || it_15 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>' call
          var value_15 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_2.updateRememberedValue_l1wh71_k$(value_15);
          tmp_38 = value_15;
        } else {
          tmp_38 = it_15;
        }
        var tmp_39 = tmp_38;
        var tmp0_0 = (tmp_39 == null ? true : !(tmp_39 == null)) ? tmp_39 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        AnimatedContent(transition, tmp_32, tmp15_group, tmp_35, tmp16_group, tmp0_0, $composer_0, 221184 | 112 & $dirty >> 3 | 7168 & $dirty, 0);
        var tmp_40 = transition.get_currentState_snihnl_k$();
        var tmp_41 = transition.get_targetState_kri3mx_k$();
        sourceInformationMarkerStart($composer_0, 653588015, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_18 = $composer_0;
        var invalid_8 = !!(!!($composer_0.changed_ga7h3f_k$(transition) | $composer_0.changed_ga7h3f_k$(composeNavigator)) | $composer_0.changedInstance_s1wkiy_k$(zIndices));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_16 = this_18.rememberedValue_4dg93v_k$();
        var tmp_42;
        if (invalid_8 || it_16 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_16 = NavHost$slambda_4(transition, composeNavigator, zIndices, visibleEntries$delegate, null);
          this_18.updateRememberedValue_l1wh71_k$(value_16);
          tmp_42 = value_16;
        } else {
          tmp_42 = it_16;
        }
        var tmp_43 = tmp_42;
        var tmp17_group = (tmp_43 == null ? true : !(tmp_43 == null)) ? tmp_43 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(tmp_40, tmp_41, tmp17_group, $composer_0, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'androidx.navigation.get' call
      var tmp_44 = navController.get_navigatorProvider_9yxp35_k$().getNavigator_ip43px_k$('dialog');
      var tmp2_elvis_lhs = tmp_44 instanceof DialogNavigator ? tmp_44 : null;
      var tmp_45;
      if (tmp2_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp19_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
        if (tmp19_safe_receiver == null)
          null;
        else {
          tmp19_safe_receiver.updateScope_t8jcf_k$(NavHost$lambda_21(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, $changed, $default));
        }
        return Unit_getInstance();
      } else {
        tmp_45 = tmp2_elvis_lhs;
      }
      var dialogNavigator = tmp_45;
      DialogHost(dialogNavigator, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp20_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp20_safe_receiver == null)
      null;
    else {
      tmp20_safe_receiver.updateScope_t8jcf_k$(NavHost$lambda_22(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, $changed, $default));
    }
  }
  function rememberViewModelStoreOwner($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1057015211, 'C(rememberViewModelStoreOwner)75@3129L41,76@3213L59,76@3175L97:NavHost.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(-1057015211, $changed, -1, 'androidx.navigation.compose.rememberViewModelStoreOwner (NavHost.kt:74)');
    }
    sourceInformationMarkerStart($composer_0, 723672545, 'CC(remember):NavHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>' call
      var value = new ComposeViewModelStoreOwner();
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var viewModelStoreOwner = tmp1_group;
    sourceInformationMarkerStart($composer_0, 723675251, 'CC(remember):NavHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changedInstance_s1wkiy_k$(viewModelStoreOwner);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>' call
      var value_0 = rememberViewModelStoreOwner$lambda(viewModelStoreOwner);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(viewModelStoreOwner, tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return viewModelStoreOwner;
  }
  function createPopEnterTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.get_popEnterTransition_rixtuq_k$();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.get_popEnterTransition_rixtuq_k$();
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function createEnterTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.get_enterTransition_hv7dfl_k$();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.get_enterTransition_hv7dfl_k$();
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function createPopExitTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.get_popExitTransition_of6md4_k$();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.get_popExitTransition_of6md4_k$();
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function createExitTransition(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.get_exitTransition_o09r47_k$();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.get_exitTransition_o09r47_k$();
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function createSizeTransform(_this__u8e3s4, scope) {
    var tmp;
    if (_this__u8e3s4 instanceof Destination) {
      var tmp1_safe_receiver = _this__u8e3s4.get_sizeTransform_xgwefz_k$();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.get_sizeTransform_xgwefz_k$();
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ComposeViewModelStoreOwner() {
    this.viewModelStore_1 = new ViewModelStore();
  }
  protoOf(ComposeViewModelStoreOwner).get_viewModelStore_ryk6ka_k$ = function () {
    return this.viewModelStore_1;
  };
  protoOf(ComposeViewModelStoreOwner).dispose_3nnxhr_k$ = function () {
    this.viewModelStore_1.clear_j9egeb_k$();
  };
  function NavHost$lambda($currentBackStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentBackStack', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentBackStack$delegate.get_value_j01efc_k$();
  }
  function NavHost$lambda_0($progress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('progress', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $progress$delegate.get_floatValue_xw60ou_k$();
  }
  function NavHost$lambda_1($progress$delegate, value) {
    getLocalDelegateReference('progress', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $progress$delegate.set_floatValue_qaujgq_k$(value);
    return Unit_getInstance();
  }
  function NavHost$lambda_2($inPredictiveBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('inPredictiveBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inPredictiveBack$delegate.get_value_j01efc_k$();
  }
  function NavHost$lambda_3($inPredictiveBack$delegate, value) {
    getLocalDelegateReference('inPredictiveBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $inPredictiveBack$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function NavHost$lambda_4($allVisibleEntries$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('allVisibleEntries', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $allVisibleEntries$delegate.get_value_j01efc_k$();
  }
  function NavHost$lambda_5($visibleEntries$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('visibleEntries', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $visibleEntries$delegate.get_value_j01efc_k$();
  }
  function NavHost$lambda_6($this$null) {
    return fadeIn(tween(700));
  }
  function NavHost$lambda_7($this$null) {
    return fadeOut(tween(700));
  }
  function NavHost$lambda_8($navController, $startDestination, $modifier, $contentAlignment, $route, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $builder, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      NavHost($navController, $startDestination, $modifier._v, $contentAlignment._v, $route._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $builder, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function NavHost$lambda_9($this$null) {
    return fadeIn(tween(700));
  }
  function NavHost$lambda_10($this$null) {
    return fadeOut(tween(700));
  }
  function NavHost$lambda_11($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
  };
  function NavHost$lambda_12($navController, $lifecycleOwner) {
    return function ($this$DisposableEffect) {
      $navController.setLifecycleOwner_6u4qel_k$($lifecycleOwner);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1();
    };
  }
  function NavHost$lambda_13($allVisibleEntries$delegate) {
    return function () {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = NavHost$lambda_4($allVisibleEntries$delegate);
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
        if (element.get_destination_9r3c63_k$().get_navigatorName_2u2qav_k$() === 'composable') {
          destination.add_utx5q5_k$(element);
        }
      }
      return destination;
    };
  }
  function NavHost$lambda_14($composeNavigator, $popEnterTransition, $enterTransition, $inPredictiveBack$delegate) {
    return function ($this$null) {
      var tmp = $this$null.get_targetState_kri3mx_k$().get_destination_9r3c63_k$();
      var targetDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp_0;
      if ($composeNavigator.get_isPop_vuwkfv_k$().get_value_j01efc_k$() || NavHost$lambda_2($inPredictiveBack$delegate)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var tmp0_iterator = Companion_getInstance_2().get_hierarchy_lptggy_k$(targetDestination).iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result = createPopEnterTransition(element, $this$null);
            if (!(result == null)) {
              tmp$ret$1 = result;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var tmp0_elvis_lhs = tmp$ret$1;
        tmp_0 = tmp0_elvis_lhs == null ? $popEnterTransition._v($this$null) : tmp0_elvis_lhs;
      } else {
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var tmp0_iterator_0 = Companion_getInstance_2().get_hierarchy_lptggy_k$(targetDestination).iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result_0 = createEnterTransition(element_0, $this$null);
            if (!(result_0 == null)) {
              tmp$ret$3 = result_0;
              break $l$block_0;
            }
          }
          tmp$ret$3 = null;
        }
        var tmp1_elvis_lhs = tmp$ret$3;
        tmp_0 = tmp1_elvis_lhs == null ? $enterTransition._v($this$null) : tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function NavHost$lambda_15($composeNavigator, $popExitTransition, $exitTransition, $inPredictiveBack$delegate) {
    return function ($this$null) {
      var tmp = $this$null.get_initialState_2eu9l6_k$().get_destination_9r3c63_k$();
      var initialDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp_0;
      if ($composeNavigator.get_isPop_vuwkfv_k$().get_value_j01efc_k$() || NavHost$lambda_2($inPredictiveBack$delegate)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var tmp0_iterator = Companion_getInstance_2().get_hierarchy_lptggy_k$(initialDestination).iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result = createPopExitTransition(element, $this$null);
            if (!(result == null)) {
              tmp$ret$1 = result;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var tmp0_elvis_lhs = tmp$ret$1;
        tmp_0 = tmp0_elvis_lhs == null ? $popExitTransition._v($this$null) : tmp0_elvis_lhs;
      } else {
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var tmp0_iterator_0 = Companion_getInstance_2().get_hierarchy_lptggy_k$(initialDestination).iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            var result_0 = createExitTransition(element_0, $this$null);
            if (!(result_0 == null)) {
              tmp$ret$3 = result_0;
              break $l$block_0;
            }
          }
          tmp$ret$3 = null;
        }
        var tmp1_elvis_lhs = tmp$ret$3;
        tmp_0 = tmp1_elvis_lhs == null ? $exitTransition._v($this$null) : tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function NavHost$lambda_16($sizeTransform) {
    return function ($this$null) {
      var tmp = $this$null.get_targetState_kri3mx_k$().get_destination_9r3c63_k$();
      var targetDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
        var tmp0_iterator = Companion_getInstance_2().get_hierarchy_lptggy_k$(targetDestination).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
          var result = createSizeTransform(element, $this$null);
          if (!(result == null)) {
            tmp$ret$1 = result;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp1_elvis_lhs = tmp$ret$1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_safe_receiver = $sizeTransform._v;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver($this$null);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function _no_name_provided__qut3iv_2($composeNavigator, $visibleEntries$delegate) {
    this.$composeNavigator_1 = $composeNavigator;
    this.$visibleEntries$delegate_1 = $visibleEntries$delegate;
  }
  protoOf(_no_name_provided__qut3iv_2).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = NavHost$lambda_5(this.$visibleEntries$delegate_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      this.$composeNavigator_1.onTransitionComplete_jtakku_k$(element);
    }
  };
  function NavHost$lambda_17($composeNavigator, $visibleEntries$delegate) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2($composeNavigator, $visibleEntries$delegate);
    };
  }
  function NavHost$slambda($transitionState, $currentBackStack$delegate, $progress$delegate, resultContinuation) {
    this.$transitionState_1 = $transitionState;
    this.$currentBackStack$delegate_1 = $currentBackStack$delegate;
    this.$progress$delegate_1 = $progress$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NavHost$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.previousEntry0__1 = NavHost$lambda(this.$currentBackStack$delegate_1).get_c1px32_k$(NavHost$lambda(this.$currentBackStack$delegate_1).get_size_woubt6_k$() - 2 | 0);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$transitionState_1.seekTo_yhdqgu_k$(NavHost$lambda_0(this.$progress$delegate_1), this.previousEntry0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(NavHost$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new NavHost$slambda(this.$transitionState_1, this.$currentBackStack$delegate_1, this.$progress$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(NavHost$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function NavHost$slambda_0($transitionState, $currentBackStack$delegate, $progress$delegate, resultContinuation) {
    var i = new NavHost$slambda($transitionState, $currentBackStack$delegate, $progress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$slambda$lambda$slambda($value, $transitionState, $backStackEntry, resultContinuation) {
    this.$value_1 = $value;
    this.$transitionState_1 = $transitionState;
    this.$backStackEntry_1 = $backStackEntry;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NavHost$slambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            if (this.$value_1 > 0) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$transitionState_1.seekTo$default_sdpbbk_k$(this.$value_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (this.$value_1 === 0.0) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.$transitionState_1.snapTo_3gvjhe_k$(this.$backStackEntry_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(NavHost$slambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new NavHost$slambda$lambda$slambda(this.$value_1, this.$transitionState_1, this.$backStackEntry_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(NavHost$slambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function NavHost$slambda$lambda$slambda_0($value, $transitionState, $backStackEntry, resultContinuation) {
    var i = new NavHost$slambda$lambda$slambda($value, $transitionState, $backStackEntry, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$slambda$lambda($this_LaunchedEffect, $transitionState, $backStackEntry) {
    return function (value, _anonymous_parameter_1__qggqgd) {
      launch($this_LaunchedEffect, VOID, VOID, NavHost$slambda$lambda$slambda_0(value, $transitionState, $backStackEntry, null));
      return Unit_getInstance();
    };
  }
  function NavHost$slambda_1($transitionState, $backStackEntry, $transition, resultContinuation) {
    this.$transitionState_1 = $transitionState;
    this.$backStackEntry_1 = $backStackEntry;
    this.$transition_1 = $transition;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NavHost$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (!this.$transitionState_1.get_currentState_snihnl_k$().equals(this.$backStackEntry_1)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.$transitionState_1.animateTo$default_ogxp94_k$(this.$backStackEntry_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.totalDuration0__1 = this.$transition_1.get_totalDurationNanos_cuj0z4_k$().div_jun7gj_k$(toLong(1000000));
              this.set_state_rjd8d0_k$(1);
              var tmp_1 = this.$transitionState_1.get_fraction_bvkonf_k$();
              var tmp_2 = tween(numberToInt(this.$transitionState_1.get_fraction_bvkonf_k$() * this.totalDuration0__1.toFloat_jhbgwv_k$()));
              suspendResult = animate(tmp_1, 0.0, VOID, tmp_2, NavHost$slambda$lambda(this.$this$LaunchedEffect_1, this.$transitionState_1, this.$backStackEntry_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(NavHost$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new NavHost$slambda_1(this.$transitionState_1, this.$backStackEntry_1, this.$transition_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(NavHost$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function NavHost$slambda_2($transitionState, $backStackEntry, $transition, resultContinuation) {
    var i = new NavHost$slambda_1($transitionState, $backStackEntry, $transition, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$lambda_18($zIndices, $composeNavigator, $finalEnter, $finalExit, $finalSizeTransform, $visibleEntries$delegate, $inPredictiveBack$delegate) {
    return function ($this$AnimatedContent) {
      var tmp;
      if (NavHost$lambda_5($visibleEntries$delegate).contains_aljjnj_k$($this$AnimatedContent.get_initialState_2eu9l6_k$())) {
        var tmp0_elvis_lhs = $zIndices.get_wei43m_k$($this$AnimatedContent.get_initialState_2eu9l6_k$().get_id_kntnx8_k$());
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_0 = $zIndices;
          var key = $this$AnimatedContent.get_initialState_2eu9l6_k$().get_id_kntnx8_k$();
          this_0.put_4fpzoq_k$(key, 0.0);
          tmp_0 = 0.0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var initialZIndex = tmp_0;
        // Inline function 'kotlin.also' call
        var this_1 = $this$AnimatedContent.get_targetState_kri3mx_k$().get_id_kntnx8_k$() === $this$AnimatedContent.get_initialState_2eu9l6_k$().get_id_kntnx8_k$() ? initialZIndex : $composeNavigator.get_isPop_vuwkfv_k$().get_value_j01efc_k$() || NavHost$lambda_2($inPredictiveBack$delegate) ? initialZIndex - 1.0 : initialZIndex + 1.0;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var this_2 = $zIndices;
        var key_0 = $this$AnimatedContent.get_targetState_kri3mx_k$().get_id_kntnx8_k$();
        this_2.put_4fpzoq_k$(key_0, this_1);
        var targetZIndex = this_1;
        tmp = new ContentTransform($finalEnter($this$AnimatedContent), $finalExit($this$AnimatedContent), targetZIndex, $finalSizeTransform($this$AnimatedContent));
      } else {
        tmp = togetherWith(Companion_getInstance_3().get_None_wo6tgh_k$(), Companion_getInstance_4().get_None_wo6tgh_k$());
      }
      return tmp;
    };
  }
  function NavHost$lambda_19(it) {
    return it.get_id_kntnx8_k$();
  }
  function NavHost$lambda$lambda($currentEntry, $this_AnimatedContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C709@29331L85:NavHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1263531443, $changed, -1, 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous> (NavHost.kt:709)');
        }
        var tmp_0 = $currentEntry.get_destination_9r3c63_k$();
        (tmp_0 instanceof Destination ? tmp_0 : THROW_CCE()).get_content_x4jwgj_k$()($this_AnimatedContent, $currentEntry, $composer_0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function NavHost$lambda_20($saveableStateHolder, $inPredictiveBack$delegate, $visibleEntries$delegate) {
    return function ($this$AnimatedContent, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C708@29254L176,708@29213L217:NavHost.kt#opm8kd');
      if (isTraceInProgress()) {
        traceEventStart(820763100, $changed, -1, 'androidx.navigation.compose.NavHost.<anonymous> (NavHost.kt:696)');
      }
      var tmp;
      if (NavHost$lambda_2($inPredictiveBack$delegate)) {
        tmp = it;
      } else {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.lastOrNull' call
          var this_0 = NavHost$lambda_5($visibleEntries$delegate);
          var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
          while (iterator.hasPrevious_qh0629_k$()) {
            var element = iterator.previous_l2dfd5_k$();
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
            if (it.equals(element)) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        tmp = tmp$ret$1;
      }
      var currentEntry = tmp;
      var tmp_0;
      if (currentEntry == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1263531443, true, NavHost$lambda$lambda(currentEntry, $this$AnimatedContent), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        LocalOwnersProvider(currentEntry, $saveableStateHolder, tmp0, $composer_0, 384);
        tmp_0 = Unit_getInstance();
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function NavHost$slambda_3($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation) {
    this.$transition_1 = $transition;
    this.$composeNavigator_1 = $composeNavigator;
    this.$zIndices_1 = $zIndices;
    this.$visibleEntries$delegate_1 = $visibleEntries$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda_3).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NavHost$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (this.$transition_1.get_currentState_snihnl_k$().equals(this.$transition_1.get_targetState_kri3mx_k$())) {
            var tmp0_iterator = NavHost$lambda_5(this.$visibleEntries$delegate_1).iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              this.$composeNavigator_1.onTransitionComplete_jtakku_k$(element);
            }
            var this_0 = this.$zIndices_1;
            var destination = LinkedHashMap_init_$Create$();
            var tmp0_iterator_0 = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
              var element_0 = tmp0_iterator_0.next_20eer_k$();
              if (!(element_0.get_key_18j28a_k$() === this.$transition_1.get_targetState_kri3mx_k$().get_id_kntnx8_k$())) {
                destination.put_4fpzoq_k$(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
              }
            }
            var tmp0_iterator_1 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_1 = tmp0_iterator_1.next_20eer_k$();
              this.$zIndices_1.remove_gppy8k_k$(element_1.get_key_18j28a_k$());
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NavHost$slambda_3).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new NavHost$slambda_3(this.$transition_1, this.$composeNavigator_1, this.$zIndices_1, this.$visibleEntries$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(NavHost$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function NavHost$slambda_4($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation) {
    var i = new NavHost$slambda_3($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$lambda_21($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NavHost$lambda_22($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_3($viewModelStoreOwner) {
    this.$viewModelStoreOwner_1 = $viewModelStoreOwner;
  }
  protoOf(_no_name_provided__qut3iv_3).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>.<anonymous>.<anonymous>' call
    this.$viewModelStoreOwner_1.dispose_3nnxhr_k$();
  };
  function rememberViewModelStoreOwner$lambda($viewModelStoreOwner) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_3($viewModelStoreOwner);
    };
  }
  function ComposeNavGraph(navGraphNavigator) {
    NavGraph.call(this, navGraphNavigator);
    this.enterTransition_1 = null;
    this.exitTransition_1 = null;
    this.popEnterTransition_1 = null;
    this.popExitTransition_1 = null;
    this.sizeTransform_1 = null;
  }
  protoOf(ComposeNavGraph).set_enterTransition_kt37sl_k$ = function (_set____db54di) {
    this.enterTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavGraph).get_enterTransition_hv7dfl_k$ = function () {
    return this.enterTransition_1;
  };
  protoOf(ComposeNavGraph).set_exitTransition_245o9x_k$ = function (_set____db54di) {
    this.exitTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavGraph).get_exitTransition_o09r47_k$ = function () {
    return this.exitTransition_1;
  };
  protoOf(ComposeNavGraph).set_popEnterTransition_1gw3s2_k$ = function (_set____db54di) {
    this.popEnterTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavGraph).get_popEnterTransition_rixtuq_k$ = function () {
    return this.popEnterTransition_1;
  };
  protoOf(ComposeNavGraph).set_popExitTransition_tfykk_k$ = function (_set____db54di) {
    this.popExitTransition_1 = _set____db54di;
  };
  protoOf(ComposeNavGraph).get_popExitTransition_of6md4_k$ = function () {
    return this.popExitTransition_1;
  };
  protoOf(ComposeNavGraph).set_sizeTransform_7auwun_k$ = function (_set____db54di) {
    this.sizeTransform_1 = _set____db54di;
  };
  protoOf(ComposeNavGraph).get_sizeTransform_xgwefz_k$ = function () {
    return this.sizeTransform_1;
  };
  function ComposeNavGraphNavigator(navigatorProvider) {
    NavGraphNavigator.call(this, navigatorProvider);
  }
  protoOf(ComposeNavGraphNavigator).createDestination_b4lkem_k$ = function () {
    return new ComposeNavGraph(this);
  };
  function Destination(navigator, content) {
    NavDestination_init_$Init$(navigator, this);
    this.content_1 = content;
    this.enterTransition_1 = null;
    this.exitTransition_1 = null;
    this.popEnterTransition_1 = null;
    this.popExitTransition_1 = null;
    this.sizeTransform_1 = null;
  }
  protoOf(Destination).get_content_x4jwgj_k$ = function () {
    return this.content_1;
  };
  protoOf(Destination).set_enterTransition_kt37sl_k$ = function (_set____db54di) {
    this.enterTransition_1 = _set____db54di;
  };
  protoOf(Destination).get_enterTransition_hv7dfl_k$ = function () {
    return this.enterTransition_1;
  };
  protoOf(Destination).set_exitTransition_245o9x_k$ = function (_set____db54di) {
    this.exitTransition_1 = _set____db54di;
  };
  protoOf(Destination).get_exitTransition_o09r47_k$ = function () {
    return this.exitTransition_1;
  };
  protoOf(Destination).set_popEnterTransition_1gw3s2_k$ = function (_set____db54di) {
    this.popEnterTransition_1 = _set____db54di;
  };
  protoOf(Destination).get_popEnterTransition_rixtuq_k$ = function () {
    return this.popEnterTransition_1;
  };
  protoOf(Destination).set_popExitTransition_tfykk_k$ = function (_set____db54di) {
    this.popExitTransition_1 = _set____db54di;
  };
  protoOf(Destination).get_popExitTransition_of6md4_k$ = function () {
    return this.popExitTransition_1;
  };
  protoOf(Destination).set_sizeTransform_7auwun_k$ = function (_set____db54di) {
    this.sizeTransform_1 = _set____db54di;
  };
  protoOf(Destination).get_sizeTransform_xgwefz_k$ = function () {
    return this.sizeTransform_1;
  };
  function Companion() {
    Companion_instance = this;
    this.NAME_1 = 'composable';
  }
  protoOf(Companion).get_NAME_eammgh_k$ = function () {
    return this.NAME_1;
  };
  var Companion_instance;
  function Companion_getInstance_6() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ComposeNavigator() {
    Companion_getInstance_6();
    Navigator_init_$Init$('composable', this);
    this.isPop_1 = mutableStateOf(false);
  }
  protoOf(ComposeNavigator).get_transitionsInProgress_halz98_k$ = function () {
    return this.get_state_iypx7s_k$().get_transitionsInProgress_j2ad2f_k$();
  };
  protoOf(ComposeNavigator).get_backStack_ueublk_k$ = function () {
    return this.get_state_iypx7s_k$().get_backStack_ueublk_k$();
  };
  protoOf(ComposeNavigator).get_isPop_vuwkfv_k$ = function () {
    return this.isPop_1;
  };
  protoOf(ComposeNavigator).navigate_rlymw1_k$ = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = entries.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.compose.ComposeNavigator.navigate.<anonymous>' call
      this.get_state_iypx7s_k$().pushWithTransition_nh5tju_k$(element);
    }
    this.isPop_1.set_value_v1vabv_k$(false);
  };
  protoOf(ComposeNavigator).createDestination_b4lkem_k$ = function () {
    return new Destination(this, ComposableSingletons$ComposeNavigator_jbKt_getInstance().lambda_1_r8sbbp_1);
  };
  protoOf(ComposeNavigator).popBackStack_5zx69y_k$ = function (popUpTo, savedState) {
    this.get_state_iypx7s_k$().popWithTransition_rhyr6y_k$(popUpTo, savedState);
    this.isPop_1.set_value_v1vabv_k$(true);
  };
  protoOf(ComposeNavigator).prepareForTransition_gt6e1w_k$ = function (entry) {
    this.get_state_iypx7s_k$().prepareForTransition_gt6e1w_k$(entry);
  };
  protoOf(ComposeNavigator).onTransitionComplete_jtakku_k$ = function (entry) {
    this.get_state_iypx7s_k$().markTransitionComplete_lzljb4_k$(entry);
  };
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$ComposeNavigator_jbKt$lambda_1$lambda_nvfgq0($this$$receiver, it, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:ComposeNavigator.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(78959129, $changed, -1, 'androidx.navigation.compose.ComposableSingletons$ComposeNavigator_jbKt.lambda-1.<anonymous> (ComposeNavigator.jb.kt:52)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ComposeNavigator_jbKt() {
    ComposableSingletons$ComposeNavigator_jbKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(78959129, false, ComposableSingletons$ComposeNavigator_jbKt$lambda_1$lambda_nvfgq0));
  }
  protoOf(ComposableSingletons$ComposeNavigator_jbKt).get_lambda_1_1y7ju7_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ComposeNavigator_jbKt_instance;
  function ComposableSingletons$ComposeNavigator_jbKt_getInstance() {
    if (ComposableSingletons$ComposeNavigator_jbKt_instance == null)
      new ComposableSingletons$ComposeNavigator_jbKt();
    return ComposableSingletons$ComposeNavigator_jbKt_instance;
  }
  function Destination_0(navigator, dialogProperties, content) {
    dialogProperties = dialogProperties === VOID ? DialogProperties_init_$Create$() : dialogProperties;
    NavDestination_init_$Init$(navigator, this);
    this.dialogProperties_1 = dialogProperties;
    this.content_1 = content;
  }
  protoOf(Destination_0).get_dialogProperties_tiqn5t_k$ = function () {
    return this.dialogProperties_1;
  };
  protoOf(Destination_0).get_content_x4jwgj_k$ = function () {
    return this.content_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.NAME_1 = 'dialog';
  }
  protoOf(Companion_0).get_NAME_eammgh_k$ = function () {
    return this.NAME_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DialogNavigator() {
    Companion_getInstance_7();
    Navigator_init_$Init$('dialog', this);
  }
  protoOf(DialogNavigator).get_backStack_5tqhrf_k$ = function () {
    return this.get_state_iypx7s_k$().get_backStack_ueublk_k$();
  };
  protoOf(DialogNavigator).get_transitionInProgress_orey4t_k$ = function () {
    return this.get_state_iypx7s_k$().get_transitionsInProgress_j2ad2f_k$();
  };
  protoOf(DialogNavigator).dismiss_8yz2j0_k$ = function (backStackEntry) {
    this.popBackStack_5zx69y_k$(backStackEntry, false);
  };
  protoOf(DialogNavigator).navigate_rlymw1_k$ = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = entries.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.compose.DialogNavigator.navigate.<anonymous>' call
      this.get_state_iypx7s_k$().push_37rtb5_k$(element);
    }
  };
  protoOf(DialogNavigator).createDestination_b4lkem_k$ = function () {
    return new Destination_0(this, VOID, ComposableSingletons$DialogNavigator_jbKt_getInstance().lambda_1_r8sbbp_1);
  };
  protoOf(DialogNavigator).popBackStack_5zx69y_k$ = function (popUpTo, savedState) {
    this.get_state_iypx7s_k$().popWithTransition_rhyr6y_k$(popUpTo, savedState);
    var popIndex = indexOf(this.get_state_iypx7s_k$().get_transitionsInProgress_j2ad2f_k$().get_value_j01efc_k$(), popUpTo);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.get_state_iypx7s_k$().get_transitionsInProgress_j2ad2f_k$().get_value_j01efc_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.compose.DialogNavigator.popBackStack.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (checkIndexOverflow(tmp1) > popIndex) {
        this.onTransitionComplete_byyjht_k$(item);
      }
    }
  };
  protoOf(DialogNavigator).onTransitionComplete_byyjht_k$ = function (entry) {
    this.get_state_iypx7s_k$().markTransitionComplete_lzljb4_k$(entry);
  };
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$DialogNavigator_jbKt$lambda_1$lambda_d2lq70(it, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:DialogNavigator.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(-527180194, $changed, -1, 'androidx.navigation.compose.ComposableSingletons$DialogNavigator_jbKt.lambda-1.<anonymous> (DialogNavigator.jb.kt:48)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DialogNavigator_jbKt() {
    ComposableSingletons$DialogNavigator_jbKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-527180194, false, ComposableSingletons$DialogNavigator_jbKt$lambda_1$lambda_d2lq70));
  }
  protoOf(ComposableSingletons$DialogNavigator_jbKt).get_lambda_1_1y7ju7_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$DialogNavigator_jbKt_instance;
  function ComposableSingletons$DialogNavigator_jbKt_getInstance() {
    if (ComposableSingletons$DialogNavigator_jbKt_instance == null)
      new ComposableSingletons$DialogNavigator_jbKt();
    return ComposableSingletons$DialogNavigator_jbKt_instance;
  }
  function LocalOwnersProvider(_this__u8e3s4, saveableStateHolder, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(625339480);
    sourceInformation($composer_0, 'C(LocalOwnersProvider)P(1)40@1609L66,36@1426L249:NavBackStackEntryProvider.jb.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(saveableStateHolder) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(625339480, $dirty, -1, 'androidx.navigation.compose.LocalOwnersProvider (NavBackStackEntryProvider.jb.kt:35)');
      }
      var tmp = [LocalViewModelStoreOwner_getInstance().provides_p68z91_k$(_this__u8e3s4), get_LocalLifecycleOwner().provides_3agxel_k$(_this__u8e3s4)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.compose.LocalOwnersProvider.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-535518952, true, LocalOwnersProvider$lambda(saveableStateHolder, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.LocalOwnersProvider.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LocalOwnersProvider$lambda_0(_this__u8e3s4, saveableStateHolder, content, $changed));
    }
  }
  function SaveableStateProvider(_this__u8e3s4, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1802448993);
    sourceInformation($composer_0, 'C(SaveableStateProvider)47@1800L386,62@2661L44:NavBackStackEntryProvider.jb.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1802448993, $dirty, -1, 'androidx.navigation.compose.SaveableStateProvider (NavBackStackEntryProvider.jb.kt:46)');
      }
      var tmp = getKClass(BackStackEntryIdViewModel);
      $composer_0.startReplaceGroup_5hh8aj_k$(-48567802);
      sourceInformation($composer_0, '*53@2115L55');
      // Inline function 'androidx.lifecycle.viewmodel.viewModelFactory' call
      // Inline function 'kotlin.apply' call
      var this_0 = new InitializerViewModelFactoryBuilder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.compose.SaveableStateProvider.<anonymous>' call
      // Inline function 'androidx.lifecycle.viewmodel.initializer' call
      sourceInformationMarkerStart($composer_0, -1205003728, 'CC(remember):NavBackStackEntryProvider.jb.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.navigation.compose.SaveableStateProvider.<anonymous>.<anonymous>' call
        var value = SaveableStateProvider$lambda;
        this_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      this_0.addInitializer_s9nycr_k$(getKClass(BackStackEntryIdViewModel), tmp0_group);
      var tmp0_group_0 = this_0.build_1k0s4u_k$();
      $composer_0.endReplaceGroup_ek144q_k$();
      var viewModel_0 = viewModel(tmp, null, null, tmp0_group_0, null, $composer_0, 0, 22);
      viewModel_0.saveableStateHolderRef_1 = new WeakReference(_this__u8e3s4);
      _this__u8e3s4.SaveableStateProvider_3h7wny_k$(viewModel_0.id_1, content, $composer_0, 112 & $dirty | 896 & $dirty << 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SaveableStateProvider$lambda_0(_this__u8e3s4, content, $changed));
    }
  }
  function _get_IdKey__ve2j0z($this) {
    return $this.IdKey_1;
  }
  function BackStackEntryIdViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.IdKey_1 = 'SaveableStateHolder_BackStackEntryKey';
    var tmp = this;
    var tmp0_elvis_lhs = handle.get_1z5p00_k$(this.IdKey_1);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_getInstance_5().randomId_452x4u_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.compose.BackStackEntryIdViewModel.id.<anonymous>' call
      handle.set_2ioqze_k$(this.IdKey_1, this_0);
      tmp_0 = this_0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.id_1 = tmp_0;
  }
  protoOf(BackStackEntryIdViewModel).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(BackStackEntryIdViewModel).set_saveableStateHolderRef_5hnjpv_k$ = function (_set____db54di) {
    this.saveableStateHolderRef_1 = _set____db54di;
  };
  protoOf(BackStackEntryIdViewModel).get_saveableStateHolderRef_xzujuy_k$ = function () {
    var tmp = this.saveableStateHolderRef_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('saveableStateHolderRef');
    }
  };
  protoOf(BackStackEntryIdViewModel).onCleared_hwiuwz_k$ = function () {
    protoOf(ViewModel).onCleared_hwiuwz_k$.call(this);
    var tmp0_safe_receiver = this.get_saveableStateHolderRef_xzujuy_k$().get_26vq_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.removeState_5wfli9_k$(this.id_1);
    }
    this.get_saveableStateHolderRef_xzujuy_k$().clear_j9egeb_k$();
  };
  function LocalOwnersProvider$lambda($saveableStateHolder, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C41@1639L30:NavBackStackEntryProvider.jb.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-535518952, $changed, -1, 'androidx.navigation.compose.LocalOwnersProvider.<anonymous> (NavBackStackEntryProvider.jb.kt:41)');
        }
        SaveableStateProvider($saveableStateHolder, $content, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function LocalOwnersProvider$lambda_0($this_LocalOwnersProvider, $saveableStateHolder, $content, $$changed) {
    return function ($composer, $force) {
      LocalOwnersProvider($this_LocalOwnersProvider, $saveableStateHolder, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SaveableStateProvider$lambda($this$initializer) {
    return new BackStackEntryIdViewModel(createSavedStateHandle($this$initializer));
  }
  function SaveableStateProvider$lambda_0($this_SaveableStateProvider, $content, $$changed) {
    return function ($composer, $force) {
      SaveableStateProvider($this_SaveableStateProvider, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function rememberNavController(navigators, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1683824310, 'C(rememberNavController)*56@2304L45,56@2236L113:NavHostController.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(1683824310, $changed, -1, 'androidx.navigation.compose.rememberNavController (NavHostController.jb.kt:55)');
    }
    // Inline function 'kotlin.apply' call
    var tmp = navigators.slice();
    var tmp_0 = NavControllerSaver();
    sourceInformationMarkerStart($composer_0, 2106377774, 'CC(remember):NavHostController.jb.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.navigation.compose.rememberNavController.<anonymous>' call
      var value = rememberNavController$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var this_0 = rememberSaveable(tmp, tmp_0, null, tmp1_group, $composer_0, 3072, 4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.rememberNavController.<anonymous>' call
    var inductionVariable = 0;
    var last = navigators.length;
    while (inductionVariable < last) {
      var navigator = navigators[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this_0.get_navigatorProvider_9yxp35_k$().addNavigator_m2hk62_k$(navigator);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return this_0;
  }
  function currentBackStackEntryAsState(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 198607467, 'C(currentBackStackEntryAsState)40@1656L20:NavHostController.jb.kt#opm8kd');
    if (isTraceInProgress()) {
      traceEventStart(198607467, $changed, -1, 'androidx.navigation.compose.currentBackStackEntryAsState (NavHostController.jb.kt:39)');
    }
    var tmp = _this__u8e3s4.get_currentBackStackEntryFlow_yqrt69_k$();
    var tmp0 = collectAsState_0(tmp, null, null, $composer_0, 48, 2);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function NavControllerSaver() {
    var tmp = NavControllerSaver$lambda;
    return Saver(tmp, NavControllerSaver$lambda_0);
  }
  function createNavController() {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavHostController();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.createNavController.<anonymous>' call
    this_0.get_navigatorProvider_9yxp35_k$().addNavigator_m2hk62_k$(new ComposeNavGraphNavigator(this_0.get_navigatorProvider_9yxp35_k$()));
    this_0.get_navigatorProvider_9yxp35_k$().addNavigator_m2hk62_k$(new ComposeNavigator());
    this_0.get_navigatorProvider_9yxp35_k$().addNavigator_m2hk62_k$(new DialogNavigator());
    return this_0;
  }
  function rememberNavController$lambda() {
    return createNavController();
  }
  function NavControllerSaver$lambda($this$Saver, it) {
    return it.saveState_2v0z6c_k$();
  }
  function NavControllerSaver$lambda_0(it) {
    // Inline function 'kotlin.apply' call
    var this_0 = createNavController();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.NavControllerSaver.<anonymous>.<anonymous>' call
    this_0.restoreState_xctpdv_k$(it);
    return this_0;
  }
  function _set_reference__s0wb3a($this, _set____db54di) {
    $this.reference_1 = _set____db54di;
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
  protoOf(WeakReference).clear_j9egeb_k$ = function () {
    this.reference_1 = null;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavHost;
  _.$_$.b = composable;
  _.$_$.c = currentBackStackEntryAsState;
  _.$_$.d = rememberNavController;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-compose.js.map
