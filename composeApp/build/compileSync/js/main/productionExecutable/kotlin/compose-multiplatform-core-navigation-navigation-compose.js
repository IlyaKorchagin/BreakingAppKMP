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
  var NavDestinationBuilder_init_$Init$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.n;
  var protoOf = kotlin_kotlin.$_$.ff;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var NavDestinationBuilder = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var rememberSaveableStateHolder = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Dialog = kotlin_org_jetbrains_compose_ui_ui.$_$.n8;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var get_LocalInspectionMode = kotlin_org_jetbrains_compose_ui_ui.$_$.y5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.oe;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var equals = kotlin_kotlin.$_$.od;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.xd;
  var Event_ON_START_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.f;
  var Event_ON_STOP_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.g;
  var emptyList = kotlin_kotlin.$_$.o8;
  var getKClass = kotlin_kotlin.$_$.g;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var NavGraphBuilder_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.o;
  var get_LocalLifecycleOwner = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime_compose.$_$.a;
  var LocalViewModelStoreOwner_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.b;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var lastOrNull = kotlin_kotlin.$_$.v9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var SeekableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var rememberTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p1;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var AnimatedContent = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.h;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.i;
  var Companion_instance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.s;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var toLong = kotlin_kotlin.$_$.hf;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var animate = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_animation_animation.$_$.m;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_animation_animation.$_$.n;
  var togetherWith = kotlin_org_jetbrains_compose_animation_animation.$_$.l;
  var ContentTransform = kotlin_org_jetbrains_compose_animation_animation.$_$.c;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.g;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.f;
  var NavDestination = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.e;
  var NavDestination_init_$Init$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.m;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var Navigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.j;
  var Navigator_init_$Init$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.p;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var DialogProperties_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui.$_$.g9;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.c;
  var indexOf = kotlin_kotlin.$_$.h9;
  var checkIndexOverflow = kotlin_kotlin.$_$.p7;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var viewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.a;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var Companion_instance_1 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.q;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yl;
  var createSavedStateHandle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.e;
  var rememberSaveable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.g;
  var collectAsState_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.c;
  var NavHostController = kotlin_org_jetbrains_androidx_navigation_navigation_runtime.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComposeNavigatorDestinationBuilder, 'ComposeNavigatorDestinationBuilder', VOID, NavDestinationBuilder);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForLambda(DialogHost$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(ComposeViewModelStoreOwner, 'ComposeViewModelStoreOwner', ComposeViewModelStoreOwner);
  initMetadataForClass(_no_name_provided__qut3iv_1);
  initMetadataForClass(_no_name_provided__qut3iv_2);
  initMetadataForLambda(NavHost$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(NavHost$slambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(NavHost$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(NavHost$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_3);
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
  function ComposeNavigatorDestinationBuilder_init_$Init$(navigator, route, content, $this) {
    NavDestinationBuilder_init_$Init$(navigator, route, $this);
    ComposeNavigatorDestinationBuilder.call($this);
    $this.ych_1 = navigator;
    $this.zch_1 = content;
    return $this;
  }
  function ComposeNavigatorDestinationBuilder_init_$Create$(navigator, route, content) {
    return ComposeNavigatorDestinationBuilder_init_$Init$(navigator, route, content, objectCreate(protoOf(ComposeNavigatorDestinationBuilder)));
  }
  protoOf(ComposeNavigatorDestinationBuilder).c57 = function () {
    return new Destination(this.ych_1, this.zch_1);
  };
  protoOf(ComposeNavigatorDestinationBuilder).a2u = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(NavDestinationBuilder).a2u.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.ComposeNavigatorDestinationBuilder.build.<anonymous>' call
    this_0.nci_1 = this.aci_1;
    this_0.oci_1 = this.bci_1;
    this_0.pci_1 = this.cci_1;
    this_0.qci_1 = this.dci_1;
    this_0.rci_1 = this.eci_1;
    return this_0;
  };
  function ComposeNavigatorDestinationBuilder() {
    this.aci_1 = null;
    this.bci_1 = null;
    this.cci_1 = null;
    this.dci_1 = null;
    this.eci_1 = null;
  }
  function DialogHost(dialogNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(294589392);
    sourceInformation($composer_0, 'C(DialogHost)41@1668L29,42@1751L16,43@1795L36,44@1853L36,46@1960L16,47@2004L52,73@3243L294,73@3188L349:DialogHost.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(dialogNavigator) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(294589392, $dirty, -1, 'androidx.navigation.compose.DialogHost (DialogHost.kt:40)');
      }
      var saveableStateHolder = rememberSaveableStateHolder($composer_0, 0);
      var tmp = dialogNavigator.vci();
      var dialogBackStack$delegate = collectAsState(tmp, null, $composer_0, 0, 1);
      var visibleBackStack = rememberVisibleList(DialogHost$lambda(dialogBackStack$delegate), $composer_0, 0);
      PopulateVisibleList(visibleBackStack, DialogHost$lambda(dialogBackStack$delegate), $composer_0, 0);
      var tmp_0 = dialogNavigator.wci();
      var transitionInProgress$delegate = collectAsState(tmp_0, null, $composer_0, 0, 1);
      sourceInformationMarkerStart($composer_0, 1361033813, 'CC(remember):DialogHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_1;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var value = mutableStateListOf();
        this_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var dialogsToDispose = tmp0_group;
      $composer_0.a31(1361037007);
      sourceInformation($composer_0, '*52@2222L43,54@2331L588,51@2183L736');
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = visibleBackStack.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var tmp_3 = element.i53_1;
        var destination = tmp_3 instanceof Destination_0 ? tmp_3 : THROW_CCE();
        sourceInformationMarkerStart($composer_0, -1136022005, 'CC(remember):DialogHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        var invalid = !!(($dirty & 14) === 4 | $composer_0.f32(element));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_1.w32();
        var tmp_4;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>' call
          var value_0 = DialogHost$lambda_1(dialogNavigator, element);
          this_1.h33(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1129586364, true, DialogHost$lambda_2(element, dialogNavigator, saveableStateHolder, dialogsToDispose, destination), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.w32();
        var tmp_6;
        if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_1.h33(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Dialog(tmp0_group_0, destination.ecj_1, tmp0, $composer_0, 384, 0);
      }
      $composer_0.c31();
      var tmp_8 = DialogHost$lambda_0(transitionInProgress$delegate);
      sourceInformationMarkerStart($composer_0, 1361073703, 'CC(remember):DialogHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_1 = !!($composer_0.f2r(transitionInProgress$delegate) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_2.w32();
      var tmp_9;
      if (invalid_1 || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>' call
        var value_2 = DialogHost$slambda_0(dialogNavigator, dialogsToDispose, transitionInProgress$delegate, null);
        this_2.h33(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp1_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect(tmp_8, dialogsToDispose, tmp1_group, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp2_safe_receiver = $composer_0.w33();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.n38(DialogHost$lambda_3(dialogNavigator, $changed));
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
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var isInspecting = tmp0;
    sourceInformationMarkerStart($composer_0, -393426303, 'CC(remember):DialogHost.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.f2r(backStack);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_1 = mutableStateListOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = backStack.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.compose.rememberVisibleList.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0;
        if (isInspecting) {
          tmp_0 = true;
        } else {
          tmp_0 = element.j4e().w4b().s4b(State_STARTED_getInstance());
        }
        if (tmp_0) {
          destination.e(element);
        }
      }
      this_1.n3n(destination);
      var value = this_1;
      $composer_0.h33(value);
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
    $composer_0 = $composer_0.v33(1537894851);
    sourceInformation($composer_0, 'C(PopulateVisibleList)89@3710L7,*91@3793L961,91@3759L995:DialogHost.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(backStack) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1537894851, $dirty, -1, 'androidx.navigation.compose.PopulateVisibleList (DialogHost.kt:88)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalInspectionMode();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.n33(this_0);
      sourceInformationMarkerEnd($composer_1);
      var isInspecting = tmp0;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = backStack.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>' call
        var tmp = element.j4e();
        sourceInformationMarkerStart($composer_0, -788103595, 'CC(remember):DialogHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        var invalid = !!(!!($composer_0.g32(isInspecting) | $composer_0.f32(_this__u8e3s4)) | $composer_0.f32(element));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_1.w32();
        var tmp_0;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>.<anonymous>' call
          var value = PopulateVisibleList$lambda(element, isInspecting, _this__u8e3s4);
          this_1.h33(value);
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
      $composer_0.c2u();
    }
    var tmp0_safe_receiver = $composer_0.w33();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n38(PopulateVisibleList$lambda_0(_this__u8e3s4, backStack, $changed));
    }
  }
  function DialogHost$lambda($dialogBackStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('dialogBackStack', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $dialogBackStack$delegate.c1();
  }
  function DialogHost$lambda_0($transitionInProgress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('transitionInProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $transitionInProgress$delegate.c1();
  }
  function DialogHost$lambda_1($dialogNavigator, $backStackEntry) {
    return function () {
      $dialogNavigator.gcj($backStackEntry);
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($dialogNavigator, $backStackEntry, $dialogsToDispose) {
    this.hcj_1 = $dialogNavigator;
    this.icj_1 = $backStackEntry;
    this.jcj_1 = $dialogsToDispose;
  }
  protoOf(_no_name_provided__qut3iv).v18 = function () {
    // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.hcj_1.kcj(this.icj_1);
    this.jcj_1.n3g(this.icj_1);
  };
  function DialogHost$lambda$lambda($dialogsToDispose, $backStackEntry, $dialogNavigator) {
    return function ($this$DisposableEffect) {
      $dialogsToDispose.j2y($backStackEntry);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($dialogNavigator, $backStackEntry, $dialogsToDispose);
    };
  }
  function DialogHost$lambda$lambda_0($destination, $backStackEntry) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C66@2872L23:DialogHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-497631156, $changed, -1, 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous> (DialogHost.kt:66)');
        }
        $destination.fcj_1($backStackEntry, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function DialogHost$lambda_2($backStackEntry, $dialogNavigator, $saveableStateHolder, $dialogsToDispose, $destination) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C55@2378L247,55@2345L280,65@2842L67,65@2801L108:DialogHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(1129586364, $changed, -1, 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous> (DialogHost.kt:55)');
        }
        sourceInformationMarkerStart($composer_0, -1838164906, 'CC(remember):DialogHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.f32($backStackEntry) | $composer_0.f2r($dialogNavigator));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.w32();
        var tmp_0;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = DialogHost$lambda$lambda($dialogsToDispose, $backStackEntry, $dialogNavigator);
          $composer_0.h33(value);
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
        var invalid_0 = $composer_1.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.w32();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.DialogHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.h33(value_0);
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
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function DialogHost$slambda($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation) {
    this.tcj_1 = $dialogNavigator;
    this.ucj_1 = $dialogsToDispose;
    this.vcj_1 = $transitionInProgress$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DialogHost$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(DialogHost$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DialogHost$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp0_iterator = DialogHost$lambda_0(this.vcj_1).m();
          while (tmp0_iterator.n()) {
            var element = tmp0_iterator.o();
            if (!this.tcj_1.vci().c1().v(element) && !this.ucj_1.ch(element)) {
              this.tcj_1.kcj(element);
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DialogHost$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new DialogHost$slambda(this.tcj_1, this.ucj_1, this.vcj_1, completion);
    i.wcj_1 = $this$LaunchedEffect;
    return i;
  };
  function DialogHost$slambda_0($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation) {
    var i = new DialogHost$slambda($dialogNavigator, $dialogsToDispose, $transitionInProgress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DialogHost$lambda_3($dialogNavigator, $$changed) {
    return function ($composer, $force) {
      DialogHost($dialogNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.xcj_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).k4b = function (source, event) {
    return this.xcj_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).x3 = function () {
    return this.xcj_1;
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
  function PopulateVisibleList$lambda$lambda($isInspecting, $this_PopulateVisibleList, $entry) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if ($isInspecting && !$this_PopulateVisibleList.v($entry)) {
        $this_PopulateVisibleList.e($entry);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (event.equals(Event_ON_START_getInstance())) {
        var tmp_1;
        if (!$this_PopulateVisibleList.v($entry)) {
          $this_PopulateVisibleList.e($entry);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      var tmp_2;
      if (event.equals(Event_ON_STOP_getInstance())) {
        $this_PopulateVisibleList.t2($entry);
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0($entry, $observer) {
    this.ycj_1 = $entry;
    this.zcj_1 = $observer;
  }
  protoOf(_no_name_provided__qut3iv_0).v18 = function () {
    // Inline function 'androidx.navigation.compose.PopulateVisibleList.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.ycj_1.j4e().v4b(this.zcj_1);
  };
  function PopulateVisibleList$lambda($entry, $isInspecting, $this_PopulateVisibleList) {
    return function ($this$DisposableEffect) {
      var tmp = PopulateVisibleList$lambda$lambda($isInspecting, $this_PopulateVisibleList, $entry);
      var observer = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp);
      $entry.j4e().u4b(observer);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($entry, observer);
    };
  }
  function PopulateVisibleList$lambda_0($this_PopulateVisibleList, $backStack, $$changed) {
    return function ($composer, $force) {
      PopulateVisibleList($this_PopulateVisibleList, $backStack, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    var this_0 = _this__u8e3s4.d58_1;
    var clazz = getKClass(ComposeNavigator);
    var tmp$ret$0 = this_0.w57(clazz);
    var this_1 = ComposeNavigatorDestinationBuilder_init_$Create$(tmp$ret$0, route, content);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.composable.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = arguments_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.compose.composable.<anonymous>.<anonymous>' call
      var argumentName = element.lb();
      var argument = element.mb();
      this_1.a57(argumentName, argument);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = deepLinks.m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.compose.composable.<anonymous>.<anonymous>' call
      this_1.b57(element_0);
    }
    this_1.aci_1 = enterTransition;
    this_1.bci_1 = exitTransition;
    this_1.cci_1 = popEnterTransition;
    this_1.dci_1 = popExitTransition;
    this_1.eci_1 = sizeTransform;
    _this__u8e3s4.j58(this_1);
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
    $composer_0 = $composer_0.v33(1840250294);
    sourceInformation($composer_0, 'C(NavHost)P(5,10,4,1,8,2,3,6,7,9)207@8453L58,213@8654L59,232@9273L126,230@9233L343:NavHost.kt#opm8kd');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(navController) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(startDestination) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f2r(route_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(enterTransition_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.f32(exitTransition_0._v) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | (($default & 128) === 0 && $composer_0.f32(popEnterTransition_0._v) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | (($default & 256) === 0 && $composer_0.f32(popExitTransition_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.f32(sizeTransform_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.f32(builder) ? 4 : 2);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 3) === 2) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = Companion_getInstance_0().m7p_1;
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
          var it = this_0.w32();
          var tmp;
          if (false || it === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value = NavHost$lambda_4;
            this_0.h33(value);
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
          var it_0 = this_1.w32();
          var tmp_1;
          if (false || it_0 === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_0 = NavHost$lambda_5;
            this_1.h33(value_0);
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
        $composer_0.c2u();
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.e31();
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
      var it_1 = this_2.w32();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        // Inline function 'androidx.navigation.createGraph' call
        var route_1 = route_0._v;
        // Inline function 'androidx.navigation.navigation' call
        var this_3 = navController.o5c();
        // Inline function 'kotlin.apply' call
        var this_4 = NavGraphBuilder_init_$Create$(this_3, startDestination, route_1);
        // Inline function 'kotlin.contracts.contract' call
        builder(this_4);
        var value_1 = this_4.a2u();
        this_2.h33(value_1);
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
      $composer_0.c2u();
    }
    var tmp3_safe_receiver = $composer_0.w33();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.n38(NavHost$lambda_6(navController, startDestination, modifier_0, contentAlignment_0, route_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, builder, $changed, $changed1, $default));
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
    $composer_0 = $composer_0.v33(-1964664536);
    sourceInformation($composer_0, 'C(NavHost)P(5,3,4)486@19396L58,492@19597L59,509@20177L7,510@20240L7,523@20768L16,525@20806L36,526@20871L34,547@21717L138,547@21684L171,553@21887L29,555@21976L16,558@22081L186,568@22362L42,730@30068L27:NavHost.kt#opm8kd');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(navController) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(graph) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(enterTransition_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(exitTransition_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.f32(popEnterTransition_0._v) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | (($default & 128) === 0 && $composer_0.f32(popExitTransition_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.f32(sizeTransform_0._v) ? 67108864 : 33554432);
    if (!(($dirty & 38347923) === 38347922) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = Companion_getInstance_0().m7p_1;
        }
        if (!(($default & 16) === 0)) {
          sourceInformationMarkerStart($composer_0, 653263988, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.w32();
          var tmp;
          if (false || it === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value = NavHost$lambda_7;
            this_0.h33(value);
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
          var it_0 = this_1.w32();
          var tmp_1;
          if (false || it_0 === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_0 = NavHost$lambda_8;
            this_1.h33(value_0);
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
        $composer_0.c2u();
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
      }
      $composer_0.e31();
      if (isTraceInProgress()) {
        traceEventStart(-1964664536, $dirty, -1, 'androidx.navigation.compose.NavHost (NavHost.kt:507)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_2 = get_LocalLifecycleOwner();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.n33(this_2);
      sourceInformationMarkerEnd($composer_1);
      var lifecycleOwner = tmp0;
      var tmp0_elvis_lhs = LocalViewModelStoreOwner_getInstance().nb1($composer_0, 0);
      $composer_0.a31(653290203);
      sourceInformation($composer_0, '510@20251L29');
      var tmp2_group = tmp0_elvis_lhs == null ? rememberViewModelStoreOwner($composer_0, 0) : tmp0_elvis_lhs;
      $composer_0.c31();
      var viewModelStoreOwner = tmp2_group;
      navController.o5d(viewModelStoreOwner.p4g());
      navController.e5d(graph);
      // Inline function 'androidx.navigation.get' call
      var this_3 = navController.o5c();
      var name = 'composable';
      var tmp_3 = this_3.o58(name);
      var tmp1_elvis_lhs = tmp_3 instanceof ComposeNavigator ? tmp_3 : null;
      var tmp_4;
      if (tmp1_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp18_safe_receiver = $composer_0.w33();
        if (tmp18_safe_receiver == null)
          null;
        else {
          tmp18_safe_receiver.n38(NavHost$lambda_9(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, $changed, $default));
        }
        return Unit_instance;
      } else {
        tmp_4 = tmp1_elvis_lhs;
      }
      var composeNavigator = tmp_4;
      var tmp_5 = composeNavigator.gck();
      var currentBackStack$delegate = collectAsState(tmp_5, null, $composer_0, 0, 1);
      sourceInformationMarkerStart($composer_0, 653309086, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_4.w32();
      var tmp_6;
      if (false || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_1 = mutableFloatStateOf(0.0);
        this_4.h33(value_1);
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
      var it_2 = this_5.w32();
      var tmp_8;
      if (false || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_2 = mutableStateOf(false);
        this_5.h33(value_2);
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
      var invalid = !!($composer_0.f32(navController) | $composer_0.f32(lifecycleOwner));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_6.w32();
      var tmp_10;
      if (invalid || it_3 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_3 = NavHost$lambda_10(navController, lifecycleOwner);
        this_6.h33(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp5_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      DisposableEffect(lifecycleOwner, tmp5_group, $composer_0, 0);
      var saveableStateHolder = rememberSaveableStateHolder($composer_0, 0);
      var allVisibleEntries$delegate = collectAsState(navController.a5b_1, null, $composer_0, 0, 1);
      sourceInformationMarkerStart($composer_0, 653350036, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_7.w32();
      var tmp_12;
      if (false || it_4 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var value_4 = derivedStateOf(NavHost$lambda_11(allVisibleEntries$delegate));
        this_7.h33(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp6_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var visibleEntries$delegate = tmp6_group;
      var backStackEntry = lastOrNull(NavHost$lambda_3(visibleEntries$delegate));
      sourceInformationMarkerStart($composer_0, 653358884, 'CC(remember):NavHost.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_8.w32();
      var tmp_14;
      if (false || it_5 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        // Inline function 'kotlin.collections.mutableMapOf' call
        var value_5 = LinkedHashMap_init_$Create$();
        this_8.h33(value_5);
        tmp_14 = value_5;
      } else {
        tmp_14 = it_5;
      }
      var tmp_15 = tmp_14;
      var tmp7_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var zIndices = tmp7_group;
      $composer_0.a31(653367828);
      sourceInformation($composer_0, '571@22538L597,585@23233L597,601@23961L301,609@24295L146,609@24272L169,615@24473L348,622@24848L52,663@26822L1208,688@28087L9,689@28107L1333,661@26754L2686,715@29513L341,715@29449L405');
      if (!(backStackEntry == null)) {
        sourceInformationMarkerStart($composer_0, 653365071, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_9 = $composer_0;
        var invalid_0 = !!(!!($composer_0.f2r(composeNavigator) | (($dirty & 3670016 ^ 1572864) > 1048576 && $composer_0.f2r(popEnterTransition_0._v) || ($dirty & 1572864) === 1048576)) | ($dirty & 57344) === 16384);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = this_9.w32();
        var tmp_16;
        if (invalid_0 || it_6 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_6 = NavHost$lambda_12(composeNavigator, popEnterTransition_0, enterTransition_0, inPredictiveBack$delegate);
          this_9.h33(value_6);
          tmp_16 = value_6;
        } else {
          tmp_16 = it_6;
        }
        var tmp_17 = tmp_16;
        var tmp8_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var finalEnter = tmp8_group;
        sourceInformationMarkerStart($composer_0, 653387311, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_10 = $composer_0;
        var invalid_1 = !!(!!($composer_0.f2r(composeNavigator) | (($dirty & 29360128 ^ 12582912) > 8388608 && $composer_0.f2r(popExitTransition_0._v) || ($dirty & 12582912) === 8388608)) | ($dirty & 458752) === 131072);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_7 = this_10.w32();
        var tmp_18;
        if (invalid_1 || it_7 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_7 = NavHost$lambda_13(composeNavigator, popExitTransition_0, exitTransition_0, inPredictiveBack$delegate);
          this_10.h33(value_7);
          tmp_18 = value_7;
        } else {
          tmp_18 = it_7;
        }
        var tmp_19 = tmp_18;
        var tmp9_group = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var finalExit = tmp9_group;
        sourceInformationMarkerStart($composer_0, 653410311, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_11 = $composer_0;
        var invalid_2 = ($dirty & 234881024) === 67108864;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_8 = this_11.w32();
        var tmp_20;
        if (invalid_2 || it_8 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_8 = NavHost$lambda_14(sizeTransform_0);
          this_11.h33(value_8);
          tmp_20 = value_8;
        } else {
          tmp_20 = it_8;
        }
        var tmp_21 = tmp_20;
        var tmp10_group = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var finalSizeTransform = tmp10_group;
        sourceInformationMarkerStart($composer_0, 653420844, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_12 = $composer_0;
        var invalid_3 = $composer_0.f2r(composeNavigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_9 = this_12.w32();
        var tmp_22;
        if (invalid_3 || it_9 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_9 = NavHost$lambda_15(composeNavigator, visibleEntries$delegate);
          this_12.h33(value_9);
          tmp_22 = value_9;
        } else {
          tmp_22 = it_9;
        }
        var tmp_23 = tmp_22;
        var tmp11_group = (tmp_23 == null ? true : !(tmp_23 == null)) ? tmp_23 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect(true, tmp11_group, $composer_0, 6);
        sourceInformationMarkerStart($composer_0, 653426742, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_13 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_10 = this_13.w32();
        var tmp_24;
        if (false || it_10 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_10 = new SeekableTransitionState(backStackEntry);
          this_13.h33(value_10);
          tmp_24 = value_10;
        } else {
          tmp_24 = it_10;
        }
        var tmp_25 = tmp_24;
        var tmp12_group = (tmp_25 == null ? true : !(tmp_25 == null)) ? tmp_25 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var transitionState = tmp12_group;
        var transition = rememberTransition(transitionState, 'entry', $composer_0, 56, 0);
        if (NavHost$lambda_1(inPredictiveBack$delegate)) {
          $composer_0.a31(-1218156488);
          sourceInformation($composer_0, '625@24971L159,625@24946L184');
          var tmp_26 = NavHost$lambda_0(progress$delegate);
          sourceInformationMarkerStart($composer_0, 653442489, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_14 = $composer_0;
          var invalid_4 = !!($composer_0.f2r(currentBackStack$delegate) | $composer_0.f32(transitionState));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_11 = this_14.w32();
          var tmp_27;
          if (invalid_4 || it_11 === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_11 = NavHost$slambda_0(transitionState, currentBackStack$delegate, progress$delegate, null);
            this_14.h33(value_11);
            tmp_27 = value_11;
          } else {
            tmp_27 = it_11;
          }
          var tmp_28 = tmp_27;
          var tmp13_group = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          LaunchedEffect_0(tmp_26, tmp13_group, $composer_0, 0);
          $composer_0.c31();
        } else {
          $composer_0.a31(-1217901451);
          sourceInformation($composer_0, '630@25191L1532,630@25160L1563');
          sourceInformationMarkerStart($composer_0, 653450902, 'CC(remember):NavHost.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_15 = $composer_0;
          var invalid_5 = !!(!!($composer_0.f32(transitionState) | $composer_0.f32(backStackEntry)) | $composer_0.f2r(transition));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_12 = this_15.w32();
          var tmp_29;
          if (invalid_5 || it_12 === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
            var value_12 = NavHost$slambda_2(transitionState, backStackEntry, transition, null);
            this_15.h33(value_12);
            tmp_29 = value_12;
          } else {
            tmp_29 = it_12;
          }
          var tmp_30 = tmp_29;
          var tmp14_group = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          LaunchedEffect_0(backStackEntry, tmp14_group, $composer_0, 0);
          $composer_0.c31();
        }
        var tmp_31 = modifier_0._v;
        sourceInformationMarkerStart($composer_0, 653502770, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_16 = $composer_0;
        var invalid_6 = !!(!!(!!(!!($composer_0.f32(zIndices) | $composer_0.f2r(composeNavigator)) | $composer_0.f2r(finalEnter)) | $composer_0.f2r(finalExit)) | $composer_0.f2r(finalSizeTransform));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_13 = this_16.w32();
        var tmp_32;
        if (invalid_6 || it_13 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_13 = NavHost$lambda_16(zIndices, composeNavigator, finalEnter, finalExit, finalSizeTransform, visibleEntries$delegate, inPredictiveBack$delegate);
          this_16.h33(value_13);
          tmp_32 = value_13;
        } else {
          tmp_32 = it_13;
        }
        var tmp_33 = tmp_32;
        var tmp15_group = (tmp_33 == null ? true : !(tmp_33 == null)) ? tmp_33 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_34 = contentAlignment_0._v;
        sourceInformationMarkerStart($composer_0, 653542051, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_17 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_14 = this_17.w32();
        var tmp_35;
        if (false || it_14 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_14 = NavHost$lambda_17;
          this_17.h33(value_14);
          tmp_35 = value_14;
        } else {
          tmp_35 = it_14;
        }
        var tmp_36 = tmp_35;
        var tmp16_group = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(820763100, true, NavHost$lambda_18(saveableStateHolder, inPredictiveBack$delegate, visibleEntries$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_7 = $composer_2.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_15 = $composer_2.w32();
        var tmp_37;
        if (invalid_7 || it_15 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>' call
          var value_15 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_2.h33(value_15);
          tmp_37 = value_15;
        } else {
          tmp_37 = it_15;
        }
        var tmp_38 = tmp_37;
        var tmp0_0 = (tmp_38 == null ? true : !(tmp_38 == null)) ? tmp_38 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        AnimatedContent(transition, tmp_31, tmp15_group, tmp_34, tmp16_group, tmp0_0, $composer_0, 221184 | 112 & $dirty >> 3 | 7168 & $dirty, 0);
        var tmp_39 = transition.w4b();
        var tmp_40 = transition.p4b();
        sourceInformationMarkerStart($composer_0, 653588015, 'CC(remember):NavHost.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_18 = $composer_0;
        var invalid_8 = !!(!!($composer_0.f2r(transition) | $composer_0.f2r(composeNavigator)) | $composer_0.f32(zIndices));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_16 = this_18.w32();
        var tmp_41;
        if (invalid_8 || it_16 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>' call
          var value_16 = NavHost$slambda_4(transition, composeNavigator, zIndices, visibleEntries$delegate, null);
          this_18.h33(value_16);
          tmp_41 = value_16;
        } else {
          tmp_41 = it_16;
        }
        var tmp_42 = tmp_41;
        var tmp17_group = (tmp_42 == null ? true : !(tmp_42 == null)) ? tmp_42 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(tmp_39, tmp_40, tmp17_group, $composer_0, 0);
      }
      $composer_0.c31();
      // Inline function 'androidx.navigation.get' call
      var tmp_43 = navController.o5c().o58('dialog');
      var tmp2_elvis_lhs = tmp_43 instanceof DialogNavigator ? tmp_43 : null;
      var tmp_44;
      if (tmp2_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp19_safe_receiver = $composer_0.w33();
        if (tmp19_safe_receiver == null)
          null;
        else {
          tmp19_safe_receiver.n38(NavHost$lambda_19(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, $changed, $default));
        }
        return Unit_instance;
      } else {
        tmp_44 = tmp2_elvis_lhs;
      }
      var dialogNavigator = tmp_44;
      DialogHost(dialogNavigator, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp20_safe_receiver = $composer_0.w33();
    if (tmp20_safe_receiver == null)
      null;
    else {
      tmp20_safe_receiver.n38(NavHost$lambda_20(navController, graph, modifier_0, contentAlignment_0, enterTransition_0, exitTransition_0, popEnterTransition_0, popExitTransition_0, sizeTransform_0, $changed, $default));
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
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>' call
      var value = new ComposeViewModelStoreOwner();
      $composer_0.h33(value);
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
    var invalid = $composer_0.f32(viewModelStoreOwner);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>' call
      var value_0 = rememberViewModelStoreOwner$lambda(viewModelStoreOwner);
      $composer_0.h33(value_0);
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
      var tmp1_safe_receiver = _this__u8e3s4.pci_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.uck_1;
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
      var tmp1_safe_receiver = _this__u8e3s4.nci_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.sck_1;
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
      var tmp1_safe_receiver = _this__u8e3s4.qci_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.vck_1;
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
      var tmp1_safe_receiver = _this__u8e3s4.oci_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.tck_1;
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
      var tmp1_safe_receiver = _this__u8e3s4.rci_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(scope);
    } else {
      if (_this__u8e3s4 instanceof ComposeNavGraph) {
        var tmp2_safe_receiver = _this__u8e3s4.wck_1;
        tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(scope);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ComposeViewModelStoreOwner() {
    this.xck_1 = new ViewModelStore();
  }
  protoOf(ComposeViewModelStoreOwner).p4g = function () {
    return this.xck_1;
  };
  protoOf(ComposeViewModelStoreOwner).v18 = function () {
    this.xck_1.n2();
  };
  function NavHost$lambda($currentBackStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentBackStack', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentBackStack$delegate.c1();
  }
  function NavHost$lambda_0($progress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('progress', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $progress$delegate.o3j();
  }
  function NavHost$lambda_1($inPredictiveBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('inPredictiveBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inPredictiveBack$delegate.c1();
  }
  function NavHost$lambda_2($allVisibleEntries$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('allVisibleEntries', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $allVisibleEntries$delegate.c1();
  }
  function NavHost$lambda_3($visibleEntries$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('visibleEntries', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $visibleEntries$delegate.c1();
  }
  function NavHost$lambda_4($this$null) {
    return fadeIn(tween(700));
  }
  function NavHost$lambda_5($this$null) {
    return fadeOut(tween(700));
  }
  function NavHost$lambda_6($navController, $startDestination, $modifier, $contentAlignment, $route, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $builder, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      NavHost($navController, $startDestination, $modifier._v, $contentAlignment._v, $route._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $builder, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function NavHost$lambda_7($this$null) {
    return fadeIn(tween(700));
  }
  function NavHost$lambda_8($this$null) {
    return fadeOut(tween(700));
  }
  function NavHost$lambda_9($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).v18 = function () {
    // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
  };
  function NavHost$lambda_10($navController, $lifecycleOwner) {
    return function ($this$DisposableEffect) {
      $navController.n5d($lifecycleOwner);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1();
    };
  }
  function NavHost$lambda_11($allVisibleEntries$delegate) {
    return function () {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = NavHost$lambda_2($allVisibleEntries$delegate);
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
        if (element.i53_1.d55_1 === 'composable') {
          destination.e(element);
        }
      }
      return destination;
    };
  }
  function NavHost$lambda_12($composeNavigator, $popEnterTransition, $enterTransition, $inPredictiveBack$delegate) {
    return function ($this$null) {
      var tmp = $this$null.p4b().i53_1;
      var targetDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp_0;
      if ($composeNavigator.fck_1.c1() || NavHost$lambda_1($inPredictiveBack$delegate)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var tmp0_iterator = Companion_instance_0.w55(targetDestination).m();
          while (tmp0_iterator.n()) {
            var element = tmp0_iterator.o();
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
          var tmp0_iterator_0 = Companion_instance_0.w55(targetDestination).m();
          while (tmp0_iterator_0.n()) {
            var element_0 = tmp0_iterator_0.o();
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
  function NavHost$lambda_13($composeNavigator, $popExitTransition, $exitTransition, $inPredictiveBack$delegate) {
    return function ($this$null) {
      var tmp = $this$null.sbp().i53_1;
      var initialDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp_0;
      if ($composeNavigator.fck_1.c1() || NavHost$lambda_1($inPredictiveBack$delegate)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
          var tmp0_iterator = Companion_instance_0.w55(initialDestination).m();
          while (tmp0_iterator.n()) {
            var element = tmp0_iterator.o();
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
          var tmp0_iterator_0 = Companion_instance_0.w55(initialDestination).m();
          while (tmp0_iterator_0.n()) {
            var element_0 = tmp0_iterator_0.o();
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
  function NavHost$lambda_14($sizeTransform) {
    return function ($this$null) {
      var tmp = $this$null.p4b().i53_1;
      var targetDestination = tmp instanceof Destination ? tmp : THROW_CCE();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
        var tmp0_iterator = Companion_instance_0.w55(targetDestination).m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
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
    this.yck_1 = $composeNavigator;
    this.zck_1 = $visibleEntries$delegate;
  }
  protoOf(_no_name_provided__qut3iv_2).v18 = function () {
    // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = NavHost$lambda_3(this.zck_1).m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      this.yck_1.acl(element);
    }
  };
  function NavHost$lambda_15($composeNavigator, $visibleEntries$delegate) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2($composeNavigator, $visibleEntries$delegate);
    };
  }
  function NavHost$slambda($transitionState, $currentBackStack$delegate, $progress$delegate, resultContinuation) {
    this.jcl_1 = $transitionState;
    this.kcl_1 = $currentBackStack$delegate;
    this.lcl_1 = $progress$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NavHost$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.ncl_1 = NavHost$lambda(this.kcl_1).u(NavHost$lambda(this.kcl_1).p() - 2 | 0);
            this.s9_1 = 1;
            suspendResult = this.jcl_1.hbo(NavHost$lambda_0(this.lcl_1), this.ncl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(NavHost$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new NavHost$slambda(this.jcl_1, this.kcl_1, this.lcl_1, completion);
    i.mcl_1 = $this$LaunchedEffect;
    return i;
  };
  function NavHost$slambda_0($transitionState, $currentBackStack$delegate, $progress$delegate, resultContinuation) {
    var i = new NavHost$slambda($transitionState, $currentBackStack$delegate, $progress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$slambda$lambda$slambda($value, $transitionState, $backStackEntry, resultContinuation) {
    this.wcl_1 = $value;
    this.xcl_1 = $transitionState;
    this.ycl_1 = $backStackEntry;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NavHost$slambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            if (this.wcl_1 > 0) {
              this.s9_1 = 1;
              suspendResult = this.xcl_1.ibo(this.wcl_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (this.wcl_1 === 0.0) {
              this.s9_1 = 3;
              suspendResult = this.xcl_1.gbo(this.ycl_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 4;
              continue $sm;
            }

          case 3:
            this.s9_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 5) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(NavHost$slambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new NavHost$slambda$lambda$slambda(this.wcl_1, this.xcl_1, this.ycl_1, completion);
    i.zcl_1 = $this$launch;
    return i;
  };
  function NavHost$slambda$lambda$slambda_0($value, $transitionState, $backStackEntry, resultContinuation) {
    var i = new NavHost$slambda$lambda$slambda($value, $transitionState, $backStackEntry, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$slambda$lambda($this_LaunchedEffect, $transitionState, $backStackEntry) {
    return function (value, _anonymous_parameter_1__qggqgd) {
      launch($this_LaunchedEffect, VOID, VOID, NavHost$slambda$lambda$slambda_0(value, $transitionState, $backStackEntry, null));
      return Unit_instance;
    };
  }
  function NavHost$slambda_1($transitionState, $backStackEntry, $transition, resultContinuation) {
    this.icm_1 = $transitionState;
    this.jcm_1 = $backStackEntry;
    this.kcm_1 = $transition;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda_1).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NavHost$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            if (!this.icm_1.w4b().equals(this.jcm_1)) {
              this.s9_1 = 2;
              suspendResult = this.icm_1.kbo(this.jcm_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.mcm_1 = this.kcm_1.rbm().i3(toLong(1000000));
              this.s9_1 = 1;
              var tmp_1 = this.icm_1.sbk();
              var tmp_2 = tween(numberToInt(this.icm_1.sbk() * this.mcm_1.v3()));
              suspendResult = animate(tmp_1, 0.0, VOID, tmp_2, NavHost$slambda$lambda(this.lcm_1, this.icm_1, this.jcm_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 4) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(NavHost$slambda_1).b20 = function ($this$LaunchedEffect, completion) {
    var i = new NavHost$slambda_1(this.icm_1, this.jcm_1, this.kcm_1, completion);
    i.lcm_1 = $this$LaunchedEffect;
    return i;
  };
  function NavHost$slambda_2($transitionState, $backStackEntry, $transition, resultContinuation) {
    var i = new NavHost$slambda_1($transitionState, $backStackEntry, $transition, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$lambda_16($zIndices, $composeNavigator, $finalEnter, $finalExit, $finalSizeTransform, $visibleEntries$delegate, $inPredictiveBack$delegate) {
    return function ($this$AnimatedContent) {
      var tmp;
      if (NavHost$lambda_3($visibleEntries$delegate).v($this$AnimatedContent.sbp())) {
        var tmp0_elvis_lhs = $zIndices.s2($this$AnimatedContent.sbp().m53_1);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var this_0 = $zIndices;
          var key = $this$AnimatedContent.sbp().m53_1;
          this_0.k2(key, 0.0);
          tmp_0 = 0.0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var initialZIndex = tmp_0;
        // Inline function 'kotlin.also' call
        var this_1 = $this$AnimatedContent.p4b().m53_1 === $this$AnimatedContent.sbp().m53_1 ? initialZIndex : $composeNavigator.fck_1.c1() || NavHost$lambda_1($inPredictiveBack$delegate) ? initialZIndex - 1.0 : initialZIndex + 1.0;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var this_2 = $zIndices;
        var key_0 = $this$AnimatedContent.p4b().m53_1;
        this_2.k2(key_0, this_1);
        var targetZIndex = this_1;
        tmp = new ContentTransform($finalEnter($this$AnimatedContent), $finalExit($this$AnimatedContent), targetZIndex, $finalSizeTransform($this$AnimatedContent));
      } else {
        tmp = togetherWith(Companion_getInstance_1().wce_1, Companion_getInstance_2().lcb_1);
      }
      return tmp;
    };
  }
  function NavHost$lambda_17(it) {
    return it.m53_1;
  }
  function NavHost$lambda$lambda($currentEntry, $this_AnimatedContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C709@29331L85:NavHost.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-1263531443, $changed, -1, 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous> (NavHost.kt:709)');
        }
        var tmp_0 = $currentEntry.i53_1;
        (tmp_0 instanceof Destination ? tmp_0 : THROW_CCE()).mci_1($this_AnimatedContent, $currentEntry, $composer_0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function NavHost$lambda_18($saveableStateHolder, $inPredictiveBack$delegate, $visibleEntries$delegate) {
    return function ($this$AnimatedContent, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C708@29254L176,708@29213L217:NavHost.kt#opm8kd');
      if (isTraceInProgress()) {
        traceEventStart(820763100, $changed, -1, 'androidx.navigation.compose.NavHost.<anonymous> (NavHost.kt:696)');
      }
      var tmp;
      if (NavHost$lambda_1($inPredictiveBack$delegate)) {
        tmp = it;
      } else {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.lastOrNull' call
          var this_0 = NavHost$lambda_3($visibleEntries$delegate);
          var iterator = this_0.w(this_0.p());
          while (iterator.d5()) {
            var element = iterator.f5();
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
        var invalid = $composer_1.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.w32();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.navigation.compose.NavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.h33(value);
          tmp_1 = value;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        LocalOwnersProvider(currentEntry, $saveableStateHolder, tmp0, $composer_0, 384);
        tmp_0 = Unit_instance;
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function NavHost$slambda_3($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation) {
    this.vcm_1 = $transition;
    this.wcm_1 = $composeNavigator;
    this.xcm_1 = $zIndices;
    this.ycm_1 = $visibleEntries$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHost$slambda_3).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NavHost$slambda_3).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHost$slambda_3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          if (this.vcm_1.w4b().equals(this.vcm_1.p4b())) {
            var tmp0_iterator = NavHost$lambda_3(this.ycm_1).m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              this.wcm_1.acl(element);
            }
            var this_0 = this.xcm_1;
            var destination = LinkedHashMap_init_$Create$();
            var tmp0_iterator_0 = this_0.a1().m();
            while (tmp0_iterator_0.n()) {
              var element_0 = tmp0_iterator_0.o();
              if (!(element_0.b1() === this.vcm_1.p4b().m53_1)) {
                destination.k2(element_0.b1(), element_0.c1());
              }
            }
            var tmp0_iterator_1 = destination.a1().m();
            while (tmp0_iterator_1.n()) {
              var element_1 = tmp0_iterator_1.o();
              this.xcm_1.l2(element_1.b1());
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NavHost$slambda_3).b20 = function ($this$LaunchedEffect, completion) {
    var i = new NavHost$slambda_3(this.vcm_1, this.wcm_1, this.xcm_1, this.ycm_1, completion);
    i.zcm_1 = $this$LaunchedEffect;
    return i;
  };
  function NavHost$slambda_4($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation) {
    var i = new NavHost$slambda_3($transition, $composeNavigator, $zIndices, $visibleEntries$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHost$lambda_19($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavHost$lambda_20($navController, $graph, $modifier, $contentAlignment, $enterTransition, $exitTransition, $popEnterTransition, $popExitTransition, $sizeTransform, $$changed, $$default) {
    return function ($composer, $force) {
      NavHost_0($navController, $graph, $modifier._v, $contentAlignment._v, $enterTransition._v, $exitTransition._v, $popEnterTransition._v, $popExitTransition._v, $sizeTransform._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_3($viewModelStoreOwner) {
    this.acn_1 = $viewModelStoreOwner;
  }
  protoOf(_no_name_provided__qut3iv_3).v18 = function () {
    // Inline function 'androidx.navigation.compose.rememberViewModelStoreOwner.<anonymous>.<anonymous>.<anonymous>' call
    this.acn_1.v18();
  };
  function rememberViewModelStoreOwner$lambda($viewModelStoreOwner) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_3($viewModelStoreOwner);
    };
  }
  function ComposeNavGraph(navGraphNavigator) {
    NavGraph.call(this, navGraphNavigator);
    this.sck_1 = null;
    this.tck_1 = null;
    this.uck_1 = null;
    this.vck_1 = null;
    this.wck_1 = null;
  }
  function ComposeNavGraphNavigator(navigatorProvider) {
    NavGraphNavigator.call(this, navigatorProvider);
  }
  protoOf(ComposeNavGraphNavigator).d57 = function () {
    return new ComposeNavGraph(this);
  };
  function Destination(navigator, content) {
    NavDestination_init_$Init$(navigator, this);
    this.mci_1 = content;
    this.nci_1 = null;
    this.oci_1 = null;
    this.pci_1 = null;
    this.qci_1 = null;
    this.rci_1 = null;
  }
  function Companion() {
    this.fcn_1 = 'composable';
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function ComposeNavigator() {
    Navigator_init_$Init$('composable', this);
    this.fck_1 = mutableStateOf(false);
  }
  protoOf(ComposeNavigator).gck = function () {
    return this.p58().a53_1;
  };
  protoOf(ComposeNavigator).q58 = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = entries.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.compose.ComposeNavigator.navigate.<anonymous>' call
      this.p58().d53(element);
    }
    this.fck_1.a1y(false);
  };
  protoOf(ComposeNavigator).d57 = function () {
    return new Destination(this, ComposableSingletons$ComposeNavigator_jbKt_getInstance().gcn_1);
  };
  protoOf(ComposeNavigator).u58 = function (popUpTo, savedState) {
    this.p58().g53(popUpTo, savedState);
    this.fck_1.a1y(true);
  };
  protoOf(ComposeNavigator).acl = function (entry) {
    this.p58().u53(entry);
  };
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
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
    return Unit_instance;
  }
  function ComposableSingletons$ComposeNavigator_jbKt() {
    ComposableSingletons$ComposeNavigator_jbKt_instance = this;
    var tmp = this;
    tmp.gcn_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(78959129, false, ComposableSingletons$ComposeNavigator_jbKt$lambda_1$lambda_nvfgq0));
  }
  var ComposableSingletons$ComposeNavigator_jbKt_instance;
  function ComposableSingletons$ComposeNavigator_jbKt_getInstance() {
    if (ComposableSingletons$ComposeNavigator_jbKt_instance == null)
      new ComposableSingletons$ComposeNavigator_jbKt();
    return ComposableSingletons$ComposeNavigator_jbKt_instance;
  }
  function Destination_0(navigator, dialogProperties, content) {
    dialogProperties = dialogProperties === VOID ? DialogProperties_init_$Create$() : dialogProperties;
    NavDestination_init_$Init$(navigator, this);
    this.ecj_1 = dialogProperties;
    this.fcj_1 = content;
  }
  function Companion_0() {
    this.hcn_1 = 'dialog';
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function DialogNavigator() {
    Navigator_init_$Init$('dialog', this);
  }
  protoOf(DialogNavigator).vci = function () {
    return this.p58().a53_1;
  };
  protoOf(DialogNavigator).wci = function () {
    return this.p58().b53_1;
  };
  protoOf(DialogNavigator).gcj = function (backStackEntry) {
    this.u58(backStackEntry, false);
  };
  protoOf(DialogNavigator).q58 = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = entries.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.compose.DialogNavigator.navigate.<anonymous>' call
      this.p58().c53(element);
    }
  };
  protoOf(DialogNavigator).d57 = function () {
    return new Destination_0(this, VOID, ComposableSingletons$DialogNavigator_jbKt_getInstance().icn_1);
  };
  protoOf(DialogNavigator).u58 = function (popUpTo, savedState) {
    this.p58().g53(popUpTo, savedState);
    var popIndex = indexOf(this.p58().b53_1.c1(), popUpTo);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.p58().b53_1.c1().m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'androidx.navigation.compose.DialogNavigator.popBackStack.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (checkIndexOverflow(tmp1) > popIndex) {
        this.kcj(item);
      }
    }
  };
  protoOf(DialogNavigator).kcj = function (entry) {
    this.p58().u53(entry);
  };
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableSingletons$DialogNavigator_jbKt() {
    ComposableSingletons$DialogNavigator_jbKt_instance = this;
    var tmp = this;
    tmp.icn_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-527180194, false, ComposableSingletons$DialogNavigator_jbKt$lambda_1$lambda_d2lq70));
  }
  var ComposableSingletons$DialogNavigator_jbKt_instance;
  function ComposableSingletons$DialogNavigator_jbKt_getInstance() {
    if (ComposableSingletons$DialogNavigator_jbKt_instance == null)
      new ComposableSingletons$DialogNavigator_jbKt();
    return ComposableSingletons$DialogNavigator_jbKt_instance;
  }
  function LocalOwnersProvider(_this__u8e3s4, saveableStateHolder, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(625339480);
    sourceInformation($composer_0, 'C(LocalOwnersProvider)P(1)40@1609L66,36@1426L249:NavBackStackEntryProvider.jb.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(saveableStateHolder) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(625339480, $dirty, -1, 'androidx.navigation.compose.LocalOwnersProvider (NavBackStackEntryProvider.jb.kt:35)');
      }
      var tmp = [LocalViewModelStoreOwner_getInstance().ob1(_this__u8e3s4), get_LocalLifecycleOwner().g38(_this__u8e3s4)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.compose.LocalOwnersProvider.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-535518952, true, LocalOwnersProvider$lambda(saveableStateHolder, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.LocalOwnersProvider.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.h33(value);
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
      $composer_0.c2u();
    }
    var tmp0_safe_receiver = $composer_0.w33();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n38(LocalOwnersProvider$lambda_0(_this__u8e3s4, saveableStateHolder, content, $changed));
    }
  }
  function SaveableStateProvider(_this__u8e3s4, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1802448993);
    sourceInformation($composer_0, 'C(SaveableStateProvider)47@1800L386,62@2661L44:NavBackStackEntryProvider.jb.kt#opm8kd');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1802448993, $dirty, -1, 'androidx.navigation.compose.SaveableStateProvider (NavBackStackEntryProvider.jb.kt:46)');
      }
      var tmp = getKClass(BackStackEntryIdViewModel);
      $composer_0.a31(-48567802);
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
      var it = this_1.w32();
      var tmp_0;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.navigation.compose.SaveableStateProvider.<anonymous>.<anonymous>' call
        var value = SaveableStateProvider$lambda;
        this_1.h33(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      this_0.p4f(getKClass(BackStackEntryIdViewModel), tmp0_group);
      var tmp0_group_0 = this_0.a2u();
      $composer_0.c31();
      var viewModel_0 = viewModel(tmp, null, null, tmp0_group_0, null, $composer_0, 0, 22);
      viewModel_0.mcn_1 = new WeakReference(_this__u8e3s4);
      _this__u8e3s4.v5f(viewModel_0.lcn_1, content, $composer_0, 112 & $dirty | 896 & $dirty << 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp1_safe_receiver = $composer_0.w33();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.n38(SaveableStateProvider$lambda_0(_this__u8e3s4, content, $changed));
    }
  }
  function BackStackEntryIdViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.kcn_1 = 'SaveableStateHolder_BackStackEntryKey';
    var tmp = this;
    var tmp0_elvis_lhs = handle.s4h(this.kcn_1);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_1.k54();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.compose.BackStackEntryIdViewModel.id.<anonymous>' call
      handle.r4h(this.kcn_1, this_0);
      tmp_0 = this_0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.lcn_1 = tmp_0;
  }
  protoOf(BackStackEntryIdViewModel).ncn = function () {
    var tmp = this.mcn_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('saveableStateHolderRef');
    }
  };
  protoOf(BackStackEntryIdViewModel).m4g = function () {
    protoOf(ViewModel).m4g.call(this);
    var tmp0_safe_receiver = this.ncn().dq();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w5f(this.lcn_1);
    }
    this.ncn().n2();
  };
  function LocalOwnersProvider$lambda($saveableStateHolder, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C41@1639L30:NavBackStackEntryProvider.jb.kt#opm8kd');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-535518952, $changed, -1, 'androidx.navigation.compose.LocalOwnersProvider.<anonymous> (NavBackStackEntryProvider.jb.kt:41)');
        }
        SaveableStateProvider($saveableStateHolder, $content, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function LocalOwnersProvider$lambda_0($this_LocalOwnersProvider, $saveableStateHolder, $content, $$changed) {
    return function ($composer, $force) {
      LocalOwnersProvider($this_LocalOwnersProvider, $saveableStateHolder, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SaveableStateProvider$lambda($this$initializer) {
    return new BackStackEntryIdViewModel(createSavedStateHandle($this$initializer));
  }
  function SaveableStateProvider$lambda_0($this_SaveableStateProvider, $content, $$changed) {
    return function ($composer, $force) {
      SaveableStateProvider($this_SaveableStateProvider, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    var it = $composer_0.w32();
    var tmp_1;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.navigation.compose.rememberNavController.<anonymous>' call
      var value = rememberNavController$lambda;
      $composer_0.h33(value);
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
      this_0.o5c().f5a(navigator);
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
    var tmp0 = collectAsState_0(_this__u8e3s4.s5b_1, null, null, $composer_0, 48, 2);
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
    this_0.o5c().f5a(new ComposeNavGraphNavigator(this_0.o5c()));
    this_0.o5c().f5a(new ComposeNavigator());
    this_0.o5c().f5a(new DialogNavigator());
    return this_0;
  }
  function rememberNavController$lambda() {
    return createNavController();
  }
  function NavControllerSaver$lambda($this$Saver, it) {
    return it.u4e();
  }
  function NavControllerSaver$lambda_0(it) {
    // Inline function 'kotlin.apply' call
    var this_0 = createNavController();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.compose.NavControllerSaver.<anonymous>.<anonymous>' call
    this_0.m5d(it);
    return this_0;
  }
  function WeakReference(reference) {
    this.ocn_1 = reference;
  }
  protoOf(WeakReference).dq = function () {
    return this.ocn_1;
  };
  protoOf(WeakReference).n2 = function () {
    this.ocn_1 = null;
  };
  //region block: init
  Companion_instance_2 = new Companion();
  Companion_instance_3 = new Companion_0();
  //endregion
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
