(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-navigation-navigation-compose.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-navigation-navigation-compose.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-compose'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-navigation-navigation-compose' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-compose' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    globalThis['NavigationComposeExtra-extra_nav'] = factory(typeof globalThis['NavigationComposeExtra-extra_nav'] === 'undefined' ? {} : globalThis['NavigationComposeExtra-extra_nav'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-navigation-navigation-compose'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_androidx_navigation_navigation_compose, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var lazy = kotlin_kotlin.$_$.fk;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var emptySet = kotlin_kotlin.$_$.c8;
  var Long = kotlin_kotlin.$_$.wi;
  var ResourceItem = kotlin_components_resources_library.$_$.c;
  var setOf = kotlin_kotlin.$_$.ka;
  var DrawableResource = kotlin_components_resources_library.$_$.a;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.f;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.g;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var first = kotlin_kotlin.$_$.k8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var rememberNavController = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.d;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var Scaffold = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.f6;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.f7;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.qd;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var equals = kotlin_kotlin.$_$.qc;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var composable = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.b;
  var NavHost = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nk;
  var currentBackStackEntryAsState = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.c;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var receiveAsFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var debounce = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var KProperty0 = kotlin_kotlin.$_$.mf;
  var THROW_ISE = kotlin_kotlin.$_$.fj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.vc;
  var KMutableProperty0 = kotlin_kotlin.$_$.kf;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var hashCode = kotlin_kotlin.$_$.zc;
  var Unit = kotlin_kotlin.$_$.pj;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Surface = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var BottomAppBarDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var windowInsetsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var stringResource = kotlin_components_resources_library.$_$.f;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var selectableGroup = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var painterResource = kotlin_components_resources_library.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.e7;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var wrapContentWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var toString = kotlin_kotlin.$_$.le;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var HorizontalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var VerticalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForClass(Activity, 'Activity');
  initMetadataForObject(ComposableSingletons$ActivityScaffoldKt, 'ComposableSingletons$ActivityScaffoldKt');
  initMetadataForClass(Component, 'Component');
  initMetadataForObject(ComposableSingletons$ComponentKt, 'ComposableSingletons$ComponentKt');
  initMetadataForClass(Fragment, 'Fragment');
  initMetadataForClass(GlobalNavigator, 'GlobalNavigator');
  initMetadataForObject(GlobalNavigation, 'GlobalNavigation');
  initMetadataForObject(GlobalNavigateBackDebounce, 'GlobalNavigateBackDebounce');
  initMetadataForLambda(SetupBackstackDebounceListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(SetupBackstackDebounceListener$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SetupBackstackDebounceListener$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalNavigationSettings, 'GlobalNavigationSettings');
  initMetadataForClass(NavigationSettings, 'NavigationSettings', NavigationSettings);
  initMetadataForClass(BackNavigation, 'BackNavigation', BackNavigation);
  function navigate$default(component, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.ajn(component, args);
      tmp = Unit_instance;
    } else {
      tmp = $super.ajn.call(this, component, args);
    }
    return tmp;
  }
  initMetadataForInterface(ComponentNavigator, 'ComponentNavigator');
  initMetadataForInterface(ComponentNav, 'ComponentNav');
  initMetadataForLambda(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ComponentNavigateBackDebounce, 'ComponentNavigateBackDebounce', ComponentNavigateBackDebounce);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ComponentNavigationImpl, 'ComponentNavigationImpl', VOID, VOID, [ComponentNav, ComponentNavigator]);
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FragmentNavigateBackDebounce, 'FragmentNavigateBackDebounce', FragmentNavigateBackDebounce);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FragmentNavigationImpl, 'FragmentNavigationImpl');
  initMetadataForObject(SimpleNavigationStyle, 'SimpleNavigationStyle');
  initMetadataForClass(NavigationStyle, 'NavigationStyle', NavigationStyle);
  initMetadataForClass(NavigationItemStyle, 'NavigationItemStyle', NavigationItemStyle);
  initMetadataForClass(LabelFontWeight, 'LabelFontWeight', LabelFontWeight);
  initMetadataForObject(ComposableSingletons$SimpleNavigationStyleKt, 'ComposableSingletons$SimpleNavigationStyleKt');
  //endregion
  function CommonMainDrawable0$component_placeholder_icon$delegate$lambda() {
    return init_component_placeholder_icon();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.hjj_1 = lazy(CommonMainDrawable0$component_placeholder_icon$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).ijj = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.hjj_1;
    component_placeholder_icon$factory();
    return this_0.w();
  };
  var CommonMainDrawable0_instance;
  function CommonMainDrawable0_getInstance() {
    if (CommonMainDrawable0_instance == null)
      new CommonMainDrawable0();
    return CommonMainDrawable0_instance;
  }
  function init_component_placeholder_icon() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:component_placeholder_icon', setOf(new ResourceItem(tmp$ret$0, 'composeResources/navigationcomposeextra.extra_nav.generated.resources/drawable/component-placeholder-icon.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_component_placeholder_icon(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().ijj();
  }
  function component_placeholder_icon$factory() {
    return getPropertyCallableRef('component_placeholder_icon', 1, KProperty1, function (receiver) {
      return receiver.ijj();
    }, null);
  }
  var navigationcomposeextra_extra_nav_generated_resources_Res_drawable$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_string$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_array$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_plurals$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_font$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res$stable;
  function drawable() {
  }
  var drawable_instance;
  function drawable_getInstance() {
    return drawable_instance;
  }
  var team_platforma_extra_nav_component_activity_component_Activity$stable;
  function Activity$_init_$lambda_gcsuis(_this__u8e3s4) {
    return fadeIn(tween(0));
  }
  function Activity$_init_$lambda_gcsuis_0(_this__u8e3s4) {
    return fadeOut(tween(0));
  }
  function Activity(route, components, activityScaffold, enterTransition, exitTransition, popEnterTransition, popExitTransition) {
    var tmp;
    if (enterTransition === VOID) {
      tmp = Activity$_init_$lambda_gcsuis;
    } else {
      tmp = enterTransition;
    }
    enterTransition = tmp;
    var tmp_0;
    if (exitTransition === VOID) {
      tmp_0 = Activity$_init_$lambda_gcsuis_0;
    } else {
      tmp_0 = exitTransition;
    }
    exitTransition = tmp_0;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    this.jjj_1 = route;
    this.kjj_1 = components;
    this.ljj_1 = activityScaffold;
    this.mjj_1 = enterTransition;
    this.njj_1 = exitTransition;
    this.ojj_1 = popEnterTransition;
    this.pjj_1 = popExitTransition;
  }
  function ActivityScaffold(components, startComponent, bottomBar, topBar, navRail, showNavRail, asBox, $composer, $changed, $default) {
    var startComponent_0 = {_v: startComponent};
    var bottomBar_0 = {_v: bottomBar};
    var topBar_0 = {_v: topBar};
    var navRail_0 = {_v: navRail};
    var showNavRail_0 = {_v: showNavRail};
    var asBox_0 = {_v: asBox};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1491127610);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.h2w(startComponent_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(bottomBar_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(topBar_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2w(navRail_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.i2w(showNavRail_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.i2w(asBox_0._v) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 2) === 0)) {
          startComponent_0._v = first(components);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          bottomBar_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().qjj_1;
        }
        if (!(($default & 8) === 0)) {
          topBar_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().rjj_1;
        }
        if (!(($default & 16) === 0)) {
          navRail_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().sjj_1;
        }
        if (!(($default & 32) === 0)) {
          showNavRail_0._v = false;
        }
        if (!(($default & 64) === 0)) {
          asBox_0._v = false;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-1491127610, $dirty, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold (ActivityScaffold.kt:25)');
      }
      var navHostController = rememberNavController([], $composer_0, 0);
      $composer_0.c2v(1005628577);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var value = new ComponentNavigationImpl(navHostController);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      var componentNavigator = tmp0_group;
      if (asBox_0._v) {
        $composer_0.c2v(1109792100);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = fillMaxSize(Companion_instance);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_0().x7a_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.w2w();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().i8t_1;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.x2u();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.q2v();
        if ($composer_3.l2v()) {
          $composer_3.r2v(factory);
        } else {
          $composer_3.u2v();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
          $this$with.j2x(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var $composer_5 = $composer_4;
        componentNavigator.wjj(components, startComponent_0._v, $composer_5, 14 & $dirty | 112 & $dirty);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.w2v();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.e2v();
      } else {
        $composer_0.c2v(1110060343);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1909601326, true, ActivityScaffold$lambda(topBar_0, componentNavigator), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_6 = $composer_0;
        sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_6.h2l(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_6.y2w();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().n2o_1) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_6.j2x(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_6);
        var tmp_4 = tmp0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-913087377, true, ActivityScaffold$lambda_0(showNavRail_0, bottomBar_0, componentNavigator), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_7 = $composer_0;
        sourceInformationMarkerStart($composer_7, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_7.h2l(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_7.y2w();
        var tmp_5;
        if (invalid_0 || it_1 === Companion_getInstance().n2o_1) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_3(dispatchReceiver_0);
          $composer_7.j2x(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_7);
        var tmp_7 = tmp0_0;
        var tmp_8 = _FabPosition___init__impl__9ib2hj(0);
        var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(-1904477255, true, ActivityScaffold$lambda_1(showNavRail_0, navRail_0, componentNavigator, components, startComponent_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_8 = $composer_0;
        sourceInformationMarkerStart($composer_8, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_8.h2l(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_8.y2w();
        var tmp_11;
        if (invalid_1 || it_2 === Companion_getInstance().n2o_1) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_4(dispatchReceiver_1);
          $composer_8.j2x(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = it_2;
        }
        var tmp_12 = tmp_11;
        var tmp0_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_8);
        Scaffold(null, tmp_4, tmp_7, null, null, tmp_8, tmp_9, tmp_10, null, tmp0_1, $composer_0, 805306800, 505);
        $composer_0.e2v();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(ActivityScaffold$lambda_2(components, startComponent_0, bottomBar_0, topBar_0, navRail_0, showNavRail_0, asBox_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_1$lambda_3gzvnd(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(50538472, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-1.<anonymous> (ActivityScaffold.kt:20)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_2$lambda_wamcpk(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-105022836, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-2.<anonymous> (ActivityScaffold.kt:21)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_3$lambda_9wv87d(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1063380331, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-3.<anonymous> (ActivityScaffold.kt:22)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ActivityScaffoldKt() {
    ComposableSingletons$ActivityScaffoldKt_instance = this;
    var tmp = this;
    tmp.qjj_1 = ComposableLambda$invoke$ref(composableLambdaInstance(50538472, false, ComposableSingletons$ActivityScaffoldKt$lambda_1$lambda_3gzvnd));
    var tmp_0 = this;
    tmp_0.rjj_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-105022836, false, ComposableSingletons$ActivityScaffoldKt$lambda_2$lambda_wamcpk));
    var tmp_1 = this;
    tmp_1.sjj_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1063380331, false, ComposableSingletons$ActivityScaffoldKt$lambda_3$lambda_9wv87d));
  }
  var ComposableSingletons$ActivityScaffoldKt_instance;
  function ComposableSingletons$ActivityScaffoldKt_getInstance() {
    if (ComposableSingletons$ActivityScaffoldKt_instance == null)
      new ComposableSingletons$ActivityScaffoldKt();
    return ComposableSingletons$ActivityScaffoldKt_instance;
  }
  function ActivityScaffold$lambda($topBar, $componentNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(1909601326, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:46)');
        }
        var tmp_0 = $topBar._v;
        tmp_0((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).xjj(), $composer_0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ActivityScaffold$lambda_0($showNavRail, $bottomBar, $componentNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-913087377, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:40)');
        }
        if (!$showNavRail._v) {
          var tmp_0 = $bottomBar._v;
          tmp_0((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).xjj(), $composer_0, 0);
        }
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ActivityScaffold$lambda_1($showNavRail, $navRail, $componentNavigator, $components, $startComponent) {
    return function (paddingValues, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.h2l(paddingValues) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1904477255, $dirty, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:49)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = padding(fillMaxSize(Companion_instance), paddingValues);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_0().x7a_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.w2w();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().i8t_1;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.x2u();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.q2v();
        if ($composer_3.l2v()) {
          $composer_3.r2v(factory);
        } else {
          $composer_3.u2v();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
          $this$with.j2x(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_1 = null;
        var horizontalArrangement = null;
        var verticalAlignment = null;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((7 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().sb1_1;
        if (!((7 & 4) === 0))
          verticalAlignment = Companion_getInstance_0().g7b_1;
        var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.w2w();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_1().i8t_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_8.x2u();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_8.q2v();
        if ($composer_8.l2v()) {
          $composer_8.r2v(factory_0);
        } else {
          $composer_8.u2v();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_1().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
          $this$with_0.j2x(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        $composer_10.c2v(1851595082);
        if ($showNavRail._v) {
          var tmp_3 = $navRail._v;
          tmp_3((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).xjj(), $composer_10, 0);
        }
        $composer_10.e2v();
        $componentNavigator.wjj($components, $startComponent._v, $composer_10, 0);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.w2v();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.w2v();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.e2o();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ActivityScaffold$lambda_2($components, $startComponent, $bottomBar, $topBar, $navRail, $showNavRail, $asBox, $$changed, $$default) {
    return function ($composer, $force) {
      ActivityScaffold($components, $startComponent._v, $bottomBar._v, $topBar._v, $navRail._v, $showNavRail._v, $asBox._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_component_component_of_activity_Component$stable;
  function Component$_init_$lambda_4ulg36(_this__u8e3s4) {
    return fadeIn(tween(0));
  }
  function Component$_init_$lambda_4ulg36_0(_this__u8e3s4) {
    return fadeOut(tween(0));
  }
  function Component$render$lambda($tmp0_rcvr, $navigator, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.hjk($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Component(route, icon, label, fragments, renderComponent, enterTransition, exitTransition, popEnterTransition, popExitTransition) {
    icon = icon === VOID ? ComposableSingletons$ComponentKt_getInstance().ijk_1 : icon;
    label = label === VOID ? null : label;
    renderComponent = renderComponent === VOID ? ComposableSingletons$ComponentKt_getInstance().jjk_1 : renderComponent;
    var tmp;
    if (enterTransition === VOID) {
      tmp = Component$_init_$lambda_4ulg36;
    } else {
      tmp = enterTransition;
    }
    enterTransition = tmp;
    var tmp_0;
    if (exitTransition === VOID) {
      tmp_0 = Component$_init_$lambda_4ulg36_0;
    } else {
      tmp_0 = exitTransition;
    }
    exitTransition = tmp_0;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    this.yjj_1 = route;
    this.zjj_1 = icon;
    this.ajk_1 = label;
    this.bjk_1 = fragments;
    this.cjk_1 = renderComponent;
    this.djk_1 = enterTransition;
    this.ejk_1 = exitTransition;
    this.fjk_1 = popEnterTransition;
    this.gjk_1 = popExitTransition;
  }
  protoOf(Component).hjk = function (navigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1704215843);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.h2l(navigator) : $composer_0.h2w(navigator)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1704215843, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.Component.render (Component.kt:43)');
      }
      this.cjk_1(navigator, this.bjk_1, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(Component$render$lambda(this, navigator, $changed));
    }
  };
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_1$lambda_vrbf2r(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(41042692, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-1.<anonymous> (Component.kt:29)');
      }
      SimpleNavIcon(selected, get_component_placeholder_icon(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_2$lambda_ag65u6(componentNavigator, fragmentList, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1028673180, $changed, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-2.<anonymous> (Component.kt:34)');
    }
    RenderComponent(componentNavigator, fragmentList, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_3$lambda_idgb81(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1335642811, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-3.<anonymous> (Component.kt:52)');
      }
      SimpleNavIcon(selected, get_component_placeholder_icon(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ComponentKt() {
    ComposableSingletons$ComponentKt_instance = this;
    var tmp = this;
    tmp.ijk_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(41042692, false, ComposableSingletons$ComponentKt$lambda_1$lambda_vrbf2r));
    var tmp_0 = this;
    tmp_0.jjk_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(1028673180, false, ComposableSingletons$ComponentKt$lambda_2$lambda_ag65u6));
    var tmp_1 = this;
    tmp_1.kjk_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1335642811, false, ComposableSingletons$ComponentKt$lambda_3$lambda_idgb81));
  }
  var ComposableSingletons$ComponentKt_instance;
  function ComposableSingletons$ComponentKt_getInstance() {
    if (ComposableSingletons$ComponentKt_instance == null)
      new ComposableSingletons$ComponentKt();
    return ComposableSingletons$ComponentKt_instance;
  }
  function RenderComponent(componentNavigator, fragments, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1007606782);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.h2l(componentNavigator) : $composer_0.h2w(componentNavigator)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(fragments) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1007606782, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.core.RenderComponent (RenderComponent.kt:14)');
      }
      var navController = rememberNavController([], $composer_0, 0);
      $composer_0.c2v(482698703);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.component.component_of_activity.core.RenderComponent.<anonymous>' call
        var value = new FragmentNavigationImpl(navController);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      var fragmentNavigation = tmp0_group;
      fragmentNavigation.ojk(fragments, null, componentNavigator, $composer_0, 14 & $dirty >> 3 | 896 & $dirty << 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(RenderComponent$lambda(componentNavigator, fragments, $changed));
    }
  }
  function RenderComponent$lambda($componentNavigator, $fragments, $$changed) {
    return function ($composer, $force) {
      RenderComponent($componentNavigator, $fragments, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_component_fragment_component_Fragment$stable;
  function Fragment$_init_$lambda_thvxmj(_this__u8e3s4) {
    return fadeIn(tween(0));
  }
  function Fragment$_init_$lambda_thvxmj_0(_this__u8e3s4) {
    return fadeOut(tween(0));
  }
  function Fragment(route, tag, fragmentBox, enterTransition, exitTransition, popEnterTransition, popExitTransition) {
    tag = tag === VOID ? '' : tag;
    var tmp;
    if (enterTransition === VOID) {
      tmp = Fragment$_init_$lambda_thvxmj;
    } else {
      tmp = enterTransition;
    }
    enterTransition = tmp;
    var tmp_0;
    if (exitTransition === VOID) {
      tmp_0 = Fragment$_init_$lambda_thvxmj_0;
    } else {
      tmp_0 = exitTransition;
    }
    exitTransition = tmp_0;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    this.pjk_1 = route;
    this.qjk_1 = tag;
    this.rjk_1 = fragmentBox;
    this.sjk_1 = enterTransition;
    this.tjk_1 = exitTransition;
    this.ujk_1 = popEnterTransition;
    this.vjk_1 = popExitTransition;
  }
  function FragmentBox(modifier, contentAlignment, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1893277341);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = Companion_getInstance_0().b7b_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(1893277341, $dirty, -1, 'team.platforma.extra_nav.component.fragment_component.FragmentBox (FragmentBox.kt:13)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = fillMaxSize(modifier_0._v);
      var contentAlignment_1 = contentAlignment_0._v;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_0().x7a_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.x2u();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.component.fragment_component.FragmentBox.<anonymous>' call
      var $composer_5 = $composer_4;
      content($composer_5, 14 & $dirty >> 6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(FragmentBox$lambda(modifier_0, contentAlignment_0, content, $changed, $default));
    }
  }
  function FragmentBox$lambda($modifier, $contentAlignment, $content, $$changed, $$default) {
    return function ($composer, $force) {
      FragmentBox($modifier._v, $contentAlignment._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_navigator_activity_GlobalNavigator$stable;
  var team_platforma_extra_nav_navigator_activity_GlobalNavigation$stable;
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function GlobalNavigator$setupNavHost$lambda$lambda($activity) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1025985448, $changed, -1, 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (GlobalNavigator.kt:67)');
      }
      $activity.ljj_1($activity.kjj_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalNavigator$setupNavHost$lambda($activities) {
    return function ($this$NavHost) {
      var tmp0_iterator = $activities.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = element.mjj_1;
        var tmp_0 = element.njj_1;
        var tmp_1 = element.ojj_1;
        var tmp_2 = element.pjj_1;
        composable($this$NavHost, element.jjj_1, VOID, VOID, tmp, tmp_0, tmp_1, tmp_2, VOID, ComposableLambda$invoke$ref_8(composableLambdaInstance(1025985448, true, GlobalNavigator$setupNavHost$lambda$lambda(element))));
      }
      return Unit_instance;
    };
  }
  function GlobalNavigator$setupNavHost$lambda_0($tmp0_rcvr, $modifier, $activities, $startActivity, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.yjk($modifier._v, $activities, $startActivity._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function GlobalNavigator(navController, settings) {
    settings = settings === VOID ? new NavigationSettings() : settings;
    this.wjk_1 = navController;
    this.xjk_1 = settings;
    GlobalNavigation_getInstance().zjk_1 = this.wjk_1;
    // Inline function 'kotlin.apply' call
    var this_0 = GlobalNavigationSettings_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.<anonymous>' call
    this_0.bjl_1 = this.xjk_1.fjl_1.djl_1;
    this_0.cjl_1 = this.xjk_1.fjl_1.ejl_1;
  }
  protoOf(GlobalNavigator).yjk = function (modifier, activities, startActivity, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var startActivity_0 = {_v: startActivity};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-753832625);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(activities) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.h2w(startActivity_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(this) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          startActivity_0._v = first(activities);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-753832625, $dirty, -1, 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost (GlobalNavigator.kt:49)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp0_elvis_lhs = modifier_0._v;
      var modifier_1 = fillMaxSize(tmp0_elvis_lhs == null ? Companion_instance : tmp0_elvis_lhs);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.x2u();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_0 = startActivity_0._v.jjj_1;
      $composer_5.c2v(6007419);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.h2w(activities);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.y2w();
      var tmp_1;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>' call
        var value = GlobalNavigator$setupNavHost$lambda(activities);
        $composer_5.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.e2v();
      NavHost(this.wjk_1, tmp_0, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener(this.wjk_1, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(GlobalNavigator$setupNavHost$lambda_0(this, modifier_0, activities, startActivity_0, $changed, $default));
    }
  };
  function team_platforma_extra_nav_navigator_activity_GlobalNavigator$stableprop_getter() {
    return team_platforma_extra_nav_navigator_activity_GlobalNavigator$stable;
  }
  function GlobalNavigation() {
    GlobalNavigation_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ajl_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(GlobalNavigation).gjl = function () {
    var tmp = this.zjk_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('navController');
    }
  };
  protoOf(GlobalNavigation).hjl = function (activity, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.ajl_1;
    var tmp0_safe_receiver = this.gjl().c56();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w4w_1;
    this_0.f2(key, args);
    this.gjl().t56(activity.jjj_1);
  };
  protoOf(GlobalNavigation).ijl = function (activity, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.hjl(activity, args);
      tmp = Unit_instance;
    } else {
      tmp = $super.hjl.call(this, activity, args);
    }
    return tmp;
  };
  var GlobalNavigation_instance;
  function GlobalNavigation_getInstance() {
    if (GlobalNavigation_instance == null)
      new GlobalNavigation();
    return GlobalNavigation_instance;
  }
  function SetupBackstackDebounceListener(navHostController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-953117147);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(navHostController) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-953117147, $dirty, -1, 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener (GlobalNavigator.kt:122)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.c2v(-323952384);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.a56().x4z_1;
      var tmp_1 = SetupBackstackDebounceListener$lambda(backStackEntry$delegate);
      $composer_0.c2v(-323945510);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y2w();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.j2x(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.c2v(-323940387);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!($composer_0.h2l(backStackEntry$delegate) | $composer_0.h2l(startRoute)) | $composer_0.h2l(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y2w();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = SetupBackstackDebounceListener$slambda_2(startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.j2x(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp3_safe_receiver = $composer_0.y2x();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.r32(SetupBackstackDebounceListener$lambda_3(navHostController, $changed));
    }
  }
  function GlobalNavigateBackDebounce() {
    GlobalNavigateBackDebounce_instance = this;
    this.jjl_1 = Channel(-1);
    this.kjl_1 = debounce(receiveAsFlow(this.jjl_1), GlobalNavigationSettings_getInstance().bjl_1);
  }
  var GlobalNavigateBackDebounce_instance;
  function GlobalNavigateBackDebounce_getInstance() {
    if (GlobalNavigateBackDebounce_instance == null)
      new GlobalNavigateBackDebounce();
    return GlobalNavigateBackDebounce_instance;
  }
  function SetupBackstackDebounceListener$lambda($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.w();
  }
  function SetupBackstackDebounceListener$lambda_0($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.w();
  }
  function SetupBackstackDebounceListener$lambda_1($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.n1v(_set____db54di);
    return Unit_instance;
  }
  function SetupBackstackDebounceListener$lambda_2($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.w();
  }
  function SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.tjl_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SetupBackstackDebounceListener$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            SetupBackstackDebounceListener$lambda_1(this.tjl_1, false);
            this.n9_1 = 1;
            suspendResult = delay(GlobalNavigationSettings_getInstance().cjl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_1(this.tjl_1, true);
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetupBackstackDebounceListener$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new SetupBackstackDebounceListener$slambda(this.tjl_1, completion);
    i.ujl_1 = $this$LaunchedEffect;
    return i;
  };
  function SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.vjl_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1r = function (value, $completion) {
    return this.vjl_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.vjl_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.ejm_1 = $startRoute;
    this.fjm_1 = $mayNavigateBack$delegate;
    this.gjm_1 = $backStackEntry$delegate;
    this.hjm_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda$slambda).jjm = function (it, $completion) {
    var tmp = this.kjm(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).ha = function (p1, $completion) {
    return this.jjm(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_0(this.fjm_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda(this.gjm_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t4y_1) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda(this.gjm_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s4w_1;
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.t4y_1) == this.ejm_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_1(this.fjm_1, false);
            SetupBackstackDebounceListener$lambda_2(this.hjm_1).q56();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).kjm = function (it, completion) {
    var i = new SetupBackstackDebounceListener$slambda$slambda(this.ejm_1, this.fjm_1, this.gjm_1, this.hjm_1, completion);
    i.ijm_1 = it;
    return i;
  };
  function SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.jjm(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetupBackstackDebounceListener$slambda_1($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.tjm_1 = $startRoute;
    this.ujm_1 = $mayNavigateBack$delegate;
    this.vjm_1 = $backStackEntry$delegate;
    this.wjm_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda_1).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = GlobalNavigateBackDebounce_getInstance().kjl_1;
            var tmp_1 = SetupBackstackDebounceListener$slambda$slambda_0(this.tjm_1, this.ujm_1, this.vjm_1, this.wjm_1, null);
            suspendResult = tmp_0.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).f1x = function ($this$LaunchedEffect, completion) {
    var i = new SetupBackstackDebounceListener$slambda_1(this.tjm_1, this.ujm_1, this.vjm_1, this.wjm_1, completion);
    i.xjm_1 = $this$LaunchedEffect;
    return i;
  };
  function SetupBackstackDebounceListener$slambda_2($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda_1($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetupBackstackDebounceListener$lambda_3($navHostController, $$changed) {
    return function ($composer, $force) {
      SetupBackstackDebounceListener($navHostController, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_navigator_activity_settings_GlobalNavigationSettings$stable;
  function GlobalNavigationSettings() {
    GlobalNavigationSettings_instance = this;
    this.bjl_1 = new Long(500, 0);
    this.cjl_1 = new Long(1300, 0);
  }
  var GlobalNavigationSettings_instance;
  function GlobalNavigationSettings_getInstance() {
    if (GlobalNavigationSettings_instance == null)
      new GlobalNavigationSettings();
    return GlobalNavigationSettings_instance;
  }
  var team_platforma_extra_nav_navigator_activity_settings_NavigationSettings$stable;
  var team_platforma_extra_nav_navigator_activity_settings_BackNavigation$stable;
  function NavigationSettings(backNavigation) {
    backNavigation = backNavigation === VOID ? new BackNavigation() : backNavigation;
    this.fjl_1 = backNavigation;
  }
  protoOf(NavigationSettings).toString = function () {
    return 'NavigationSettings(backNavigation=' + this.fjl_1.toString() + ')';
  };
  protoOf(NavigationSettings).hashCode = function () {
    return this.fjl_1.hashCode();
  };
  protoOf(NavigationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationSettings))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationSettings ? other : THROW_CCE();
    if (!this.fjl_1.equals(tmp0_other_with_cast.fjl_1))
      return false;
    return true;
  };
  function BackNavigation(debounceTimeout, ignoreTimeout) {
    debounceTimeout = debounceTimeout === VOID ? new Long(500, 0) : debounceTimeout;
    ignoreTimeout = ignoreTimeout === VOID ? new Long(1300, 0) : ignoreTimeout;
    this.djl_1 = debounceTimeout;
    this.ejl_1 = ignoreTimeout;
  }
  protoOf(BackNavigation).toString = function () {
    return 'BackNavigation(debounceTimeout=' + this.djl_1.toString() + ', ignoreTimeout=' + this.ejl_1.toString() + ')';
  };
  protoOf(BackNavigation).hashCode = function () {
    var result = this.djl_1.hashCode();
    result = imul(result, 31) + this.ejl_1.hashCode() | 0;
    return result;
  };
  protoOf(BackNavigation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackNavigation))
      return false;
    var tmp0_other_with_cast = other instanceof BackNavigation ? other : THROW_CCE();
    if (!this.djl_1.equals(tmp0_other_with_cast.djl_1))
      return false;
    if (!this.ejl_1.equals(tmp0_other_with_cast.ejl_1))
      return false;
    return true;
  };
  function ComponentNavigator() {
  }
  function ComponentNav() {
  }
  var team_platforma_extra_nav_navigator_component_core_ComponentNavigationImpl$stable;
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.kjn_1 = $startRoute;
    this.ljn_1 = $mayNavigateBack$delegate;
    this.mjn_1 = $backStackEntry$delegate;
    this.njn_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).jjm = function (it, $completion) {
    var tmp = this.kjm(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).ha = function (p1, $completion) {
    return this.jjm(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_5(this.ljn_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda_4(this.mjn_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t4y_1) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda_4(this.mjn_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s4w_1;
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.t4y_1) == this.kjn_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_6(this.ljn_1, false);
            SetupBackstackDebounceListener$lambda_7(this.njn_1).q56();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).kjm = function (it, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda(this.kjn_1, this.ljn_1, this.mjn_1, this.njn_1, completion);
    i.ojn_1 = it;
    return i;
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.jjm(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComponentNavigateBackDebounce() {
    this.pjn_1 = Channel(-1);
    this.qjn_1 = debounce(receiveAsFlow(this.pjn_1), GlobalNavigationSettings_getInstance().bjl_1);
  }
  function SetupBackstackDebounceListener_0($this, navHostController, componentNavigateBackDebounce, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-851672988);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(navHostController) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(componentNavigateBackDebounce) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-851672988, $dirty, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener (ComponentNavigationImpl.kt:123)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.c2v(707965788);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.a56().x4z_1;
      var tmp_1 = SetupBackstackDebounceListener$lambda_4(backStackEntry$delegate);
      $composer_0.c2v(707973062);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y2w();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.j2x(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.c2v(707978860);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!(!!($composer_0.h2w(componentNavigateBackDebounce) | $composer_0.h2l(backStackEntry$delegate)) | $composer_0.h2l(startRoute)) | $composer_0.h2l(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y2w();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_2(componentNavigateBackDebounce, startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.j2x(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp4_safe_receiver = $composer_0.y2x();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.r32(ComponentNavigationImpl$SetupBackstackDebounceListener$lambda($this, navHostController, componentNavigateBackDebounce, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.rjn_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x1r = function (value, $completion) {
    return this.rjn_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).s3 = function () {
    return this.rjn_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function SetupBackstackDebounceListener$lambda_4($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.w();
  }
  function SetupBackstackDebounceListener$lambda_5($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.w();
  }
  function SetupBackstackDebounceListener$lambda_6($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.n1v(_set____db54di);
    return Unit_instance;
  }
  function SetupBackstackDebounceListener$lambda_7($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.w();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda$lambda($component, this$0) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-414276934, $changed, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ComponentNavigationImpl.kt:56)');
      }
      $component.hjk(this$0.xjj(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda($components, this$0) {
    return function ($this$NavHost) {
      var tmp0_iterator = $components.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = element.djk_1;
        var tmp_0 = element.ejk_1;
        var tmp_1 = element.fjk_1;
        var tmp_2 = element.gjk_1;
        composable($this$NavHost, element.yjj_1, VOID, VOID, tmp, tmp_0, tmp_1, tmp_2, VOID, ComposableLambda$invoke$ref_9(composableLambdaInstance(-414276934, true, ComponentNavigationImpl$setupNavHost$lambda$lambda(element, this$0))));
      }
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda_0($tmp0_rcvr, $components, $startComponent, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.wjj($components, $startComponent, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$navigate$lambda$lambda($this$popUpTo) {
    $this$popUpTo.e4w_1 = true;
    return Unit_instance;
  }
  function ComponentNavigationImpl$navigate$lambda($component) {
    return function ($this$navigate) {
      $this$navigate.j53($component.yjj_1, ComponentNavigationImpl$navigate$lambda$lambda);
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.ajo_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            SetupBackstackDebounceListener$lambda_6(this.ajo_1, false);
            this.n9_1 = 1;
            suspendResult = delay(GlobalNavigationSettings_getInstance().cjl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_6(this.ajo_1, true);
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda(this.ajo_1, completion);
    i.bjo_1 = $this$LaunchedEffect;
    return i;
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.kjo_1 = $componentNavigateBackDebounce;
    this.ljo_1 = $startRoute;
    this.mjo_1 = $mayNavigateBack$delegate;
    this.njo_1 = $backStackEntry$delegate;
    this.ojo_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0(this.ljo_1, this.mjo_1, this.njo_1, this.ojo_1, null);
            suspendResult = this.kjo_1.qjn_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).f1x = function ($this$LaunchedEffect, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1(this.kjo_1, this.ljo_1, this.mjo_1, this.njo_1, this.ojo_1, completion);
    i.pjo_1 = $this$LaunchedEffect;
    return i;
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_2($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$lambda($tmp3_rcvr, $navHostController, $componentNavigateBackDebounce, $$changed) {
    return function ($composer, $force) {
      SetupBackstackDebounceListener_0($tmp3_rcvr, $navHostController, $componentNavigateBackDebounce, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl(navController) {
    this.tjj_1 = navController;
    this.ujj_1 = new ComponentNavigateBackDebounce();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.vjj_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComponentNavigationImpl).wjj = function (components, startComponent, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1022325527);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(startComponent) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(this) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1022325527, $dirty, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost (ComponentNavigationImpl.kt:39)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.x2u();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>' call
      var $composer_5 = $composer_4;
      $composer_5.c2v(1985532754);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.h2w(components) | $composer_0.h2w(this));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>' call
        var value = ComponentNavigationImpl$setupNavHost$lambda(components, this);
        $composer_5.j2x(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_5.e2v();
      NavHost(this.tjj_1, startComponent.yjj_1, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener_0(this, this.tjj_1, this.ujj_1, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(ComponentNavigationImpl$setupNavHost$lambda_0(this, components, startComponent, $changed));
    }
  };
  protoOf(ComponentNavigationImpl).xjj = function () {
    return this;
  };
  protoOf(ComponentNavigationImpl).zjm = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-1272317528);
    if (isTraceInProgress()) {
      traceEventStart(-1272317528, $changed, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.backStackEntry (ComponentNavigationImpl.kt:80)');
    }
    var tmp0 = currentBackStackEntryAsState(this.tjj_1, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  protoOf(ComponentNavigationImpl).ajn = function (component, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.vjj_1;
    var tmp0_safe_receiver = this.tjj_1.c56();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w4w_1;
    this_0.f2(key, args);
    var tmp1_safe_receiver = this.tjj_1.c56();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s4w_1;
    var currentDestination = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.t4y_1;
    if (!(currentDestination === component.yjj_1)) {
      this.tjj_1.s56(component.yjj_1, ComponentNavigationImpl$navigate$lambda(component));
    }
  };
  protoOf(ComponentNavigationImpl).yjm = function () {
    return this.tjj_1;
  };
  var team_platforma_extra_nav_navigator_fragment_api_FragmentNavigation$stable;
  var team_platforma_extra_nav_navigator_fragment_core_FragmentNavigationImpl$stable;
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.yjo_1 = $startRoute;
    this.zjo_1 = $mayNavigateBack$delegate;
    this.ajp_1 = $backStackEntry$delegate;
    this.bjp_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).jjm = function (it, $completion) {
    var tmp = this.kjm(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).ha = function (p1, $completion) {
    return this.jjm(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_9(this.zjo_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda_8(this.ajp_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t4y_1) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda_8(this.ajp_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s4w_1;
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.t4y_1) == this.yjo_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_10(this.zjo_1, false);
            SetupBackstackDebounceListener$lambda_11(this.bjp_1).q56();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).kjm = function (it, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda(this.yjo_1, this.zjo_1, this.ajp_1, this.bjp_1, completion);
    i.cjp_1 = it;
    return i;
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.jjm(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FragmentNavigateBackDebounce() {
    this.djp_1 = Channel(-1);
    this.ejp_1 = debounce(receiveAsFlow(this.djp_1), GlobalNavigationSettings_getInstance().bjl_1);
  }
  function SetupBackstackDebounceListener_1($this, navHostController, fragmentNavigateBackDebounce, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1980077648);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(navHostController) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(fragmentNavigateBackDebounce) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1980077648, $dirty, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener (FragmentNavigationImpl.kt:111)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.c2v(-482805414);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.a56().x4z_1;
      var tmp_1 = SetupBackstackDebounceListener$lambda_8(backStackEntry$delegate);
      $composer_0.c2v(-482798076);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y2w();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.j2x(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.c2v(-482792279);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!(!!($composer_0.h2w(fragmentNavigateBackDebounce) | $composer_0.h2l(backStackEntry$delegate)) | $composer_0.h2l(startRoute)) | $composer_0.h2l(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y2w();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_2(fragmentNavigateBackDebounce, startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.j2x(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp4_safe_receiver = $composer_0.y2x();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.r32(FragmentNavigationImpl$SetupBackstackDebounceListener$lambda($this, navHostController, fragmentNavigateBackDebounce, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.fjp_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).x1r = function (value, $completion) {
    return this.fjp_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).s3 = function () {
    return this.fjp_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.s3());
  };
  function SetupBackstackDebounceListener$lambda_8($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.w();
  }
  function SetupBackstackDebounceListener$lambda_9($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.w();
  }
  function SetupBackstackDebounceListener$lambda_10($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.n1v(_set____db54di);
    return Unit_instance;
  }
  function SetupBackstackDebounceListener$lambda_11($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.w();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda$lambda($fragment, $componentNavigator, this$0) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-726059331, $changed, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (FragmentNavigationImpl.kt:57)');
      }
      $fragment.rjk_1($componentNavigator, this$0.gjp(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda($fragments, $componentNavigator, this$0) {
    return function ($this$NavHost) {
      var tmp0_iterator = $fragments.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = element.sjk_1;
        var tmp_0 = element.tjk_1;
        var tmp_1 = element.ujk_1;
        var tmp_2 = element.vjk_1;
        composable($this$NavHost, element.pjk_1, VOID, VOID, tmp, tmp_0, tmp_1, tmp_2, VOID, ComposableLambda$invoke$ref_10(composableLambdaInstance(-726059331, true, FragmentNavigationImpl$setupNavHost$lambda$lambda(element, $componentNavigator, this$0))));
      }
      return Unit_instance;
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda_0($tmp0_rcvr, $fragments, $startFragment, $componentNavigator, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.ojk($fragments, $startFragment._v, $componentNavigator, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.pjp_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            SetupBackstackDebounceListener$lambda_10(this.pjp_1, false);
            this.n9_1 = 1;
            suspendResult = delay(GlobalNavigationSettings_getInstance().cjl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_10(this.pjp_1, true);
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda(this.pjp_1, completion);
    i.qjp_1 = $this$LaunchedEffect;
    return i;
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.zjp_1 = $fragmentNavigateBackDebounce;
    this.ajq_1 = $startRoute;
    this.bjq_1 = $mayNavigateBack$delegate;
    this.cjq_1 = $backStackEntry$delegate;
    this.djq_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0(this.ajq_1, this.bjq_1, this.cjq_1, this.djq_1, null);
            suspendResult = this.zjp_1.ejp_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).f1x = function ($this$LaunchedEffect, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1(this.zjp_1, this.ajq_1, this.bjq_1, this.cjq_1, this.djq_1, completion);
    i.ejq_1 = $this$LaunchedEffect;
    return i;
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_2($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$lambda($tmp3_rcvr, $navHostController, $fragmentNavigateBackDebounce, $$changed) {
    return function ($composer, $force) {
      SetupBackstackDebounceListener_1($tmp3_rcvr, $navHostController, $fragmentNavigateBackDebounce, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function FragmentNavigationImpl(navController) {
    this.ljk_1 = navController;
    this.mjk_1 = new FragmentNavigateBackDebounce();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.njk_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(FragmentNavigationImpl).ojk = function (fragments, startFragment, componentNavigator, $composer, $changed, $default) {
    var startFragment_0 = {_v: startFragment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-906629067);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(fragments) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.h2w(startFragment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.h2l(componentNavigator) : $composer_0.h2w(componentNavigator)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(this) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 2) === 0)) {
          startFragment_0._v = first(fragments);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-906629067, $dirty, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost (FragmentNavigationImpl.kt:41)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.x2u();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_0 = startFragment_0._v.pjk_1;
      $composer_5.c2v(1797180120);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.h2w(fragments) | (($dirty & 896) === 256 || (!(($dirty & 512) === 0) && $composer_0.h2w(componentNavigator)))) | $composer_0.h2w(this));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.y2w();
      var tmp_1;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>' call
        var value = FragmentNavigationImpl$setupNavHost$lambda(fragments, componentNavigator, this);
        $composer_5.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.e2v();
      NavHost(this.ljk_1, tmp_0, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener_1(this, this.ljk_1, this.mjk_1, $composer_0, 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(FragmentNavigationImpl$setupNavHost$lambda_0(this, fragments, startFragment_0, componentNavigator, $changed, $default));
    }
  };
  protoOf(FragmentNavigationImpl).gjp = function () {
    return this;
  };
  function SimpleBottomNavigationBar(components, componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1550966436);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.h2l(componentNavigator) : $composer_0.h2w(componentNavigator)) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1550966436, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar (SimpleBottomNavigation.kt:33)');
      }
      var backStackEntry$delegate = componentNavigator.zjm($composer_0, 14 & $dirty >> 3);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1360940321, true, SimpleBottomNavigationBar$lambda_0(components, componentNavigator, backStackEntry$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.h2l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.y2w();
      var tmp;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      StandardBottomNavigationBar(null, tmp0, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(SimpleBottomNavigationBar$lambda_1(components, componentNavigator, $changed));
    }
  }
  function StandardBottomNavigationBar(modifier, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-829334370);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-829334370, $dirty, -1, 'team.platforma.extra_nav.ui.StandardBottomNavigationBar (SimpleBottomNavigation.kt:56)');
      }
      var tmp0_color = SimpleNavigationStyle_getInstance().vjq($composer_0, 0).fjq_1;
      var tmp1_contentColor = Companion_getInstance_2().o60_1;
      var tmp2_modifier = clip(padding_0(insertBottomPadding(modifier_0._v, SimpleNavigationStyle_getInstance().vjq($composer_0, 0).ojq_1, $composer_0, 14 & $dirty), SimpleNavigationStyle_getInstance().vjq($composer_0, 0).jjq_1, SimpleNavigationStyle_getInstance().vjq($composer_0, 0).kjq_1), SimpleNavigationStyle_getInstance().vjq($composer_0, 0).ljq_1);
      var tmp = _Dp___init__impl__ms3zkb(0.0);
      var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(165796643, true, StandardBottomNavigationBar$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.h2l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.y2w();
      var tmp_1;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Surface(tmp2_modifier, null, tmp0_color, tmp1_contentColor, tmp, tmp_0, null, tmp0, $composer_0, 12585984, 114);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(StandardBottomNavigationBar$lambda_0(modifier_0, content, $changed, $default));
    }
  }
  function NavigationBarItem(_this__u8e3s4, modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(19819258);
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(icon) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2l(label) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2w(onClick) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.w2u()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(19819258, $dirty, -1, 'team.platforma.extra_nav.ui.NavigationBarItem (SimpleBottomNavigation.kt:109)');
      }
      var tmp0_modifier = clickable(_this__u8e3s4.zb6(clip(modifier_0._v, SimpleNavigationStyle_getInstance().bjr($composer_0, 0).ajr_1), 1.0), VOID, VOID, VOID, onClick);
      var tmp1_horizontalAlignment = Companion_getInstance_0().k7b_1;
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = tmp.kb2(tmp$ret$0);
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().ub1_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_0().j7b_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_3.x2u();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavigationBarItem.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_instance, SimpleNavigationStyle_getInstance().cjr($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.w2w();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().i8t_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_8.x2u();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_8.q2v();
      if ($composer_8.l2v()) {
        $composer_8.r2v(factory_0);
      } else {
        $composer_8.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
        $this$with_0.j2x(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavigationBarItem.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 15 | 112 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.w2v();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp0_style = SimpleNavigationStyle_getInstance().djr($composer_5, 0);
      var tmp_2;
      if (selected) {
        $composer_5.c2v(1333886192);
        var tmp0_group = SimpleNavigationStyle_getInstance().gjr($composer_5, 0).ejr_1;
        $composer_5.e2v();
        tmp_2 = tmp0_group;
      } else {
        $composer_5.c2v(1333971473);
        var tmp1_group = SimpleNavigationStyle_getInstance().gjr($composer_5, 0).fjr_1;
        $composer_5.e2v();
        tmp_2 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_2;
      var tmp_3;
      if (selected) {
        $composer_5.c2v(1334085646);
        var tmp2_group = SimpleNavigationStyle_getInstance().bjr($composer_5, 0).yjq_1;
        $composer_5.e2v();
        tmp_3 = tmp2_group;
      } else {
        $composer_5.c2v(1334172911);
        var tmp3_group = SimpleNavigationStyle_getInstance().bjr($composer_5, 0).zjq_1;
        $composer_5.e2v();
        tmp_3 = tmp3_group;
      }
      var tmp2_color = tmp_3;
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_4, null, tmp1_fontWeight, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 9, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(NavigationBarItem$lambda(_this__u8e3s4, modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function insertBottomPadding(_this__u8e3s4, boolean, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(1096510681);
    if (isTraceInProgress()) {
      traceEventStart(1096510681, $changed, -1, 'team.platforma.extra_nav.ui.insertBottomPadding (SimpleBottomNavigation.kt:94)');
    }
    var tmp;
    if (boolean) {
      tmp = windowInsetsPadding(_this__u8e3s4, BottomAppBarDefaults_getInstance().fij($composer_0, 0));
    } else {
      tmp = _this__u8e3s4;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  }
  function SimpleBottomNavigationBar$lambda($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.w();
  }
  function SimpleBottomNavigationBar$lambda$lambda($componentNavigator, $component) {
    return function () {
      $componentNavigator.bjn($component);
      return Unit_instance;
    };
  }
  function SimpleBottomNavigationBar$lambda_0($components, $componentNavigator, $backStackEntry$delegate) {
    return function ($this$StandardBottomNavigationBar, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.h2l($this$StandardBottomNavigationBar) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1360940321, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous> (SimpleBottomNavigation.kt:38)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $components.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>' call
          $composer_0.c2v(645955587);
          var tmp0_group = !(element.ajk_1 == null) ? stringResource(element.ajk_1, $composer_0, 0) : element.yjj_1;
          $composer_0.e2v();
          $composer_0.c2v(-1529056097);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.h2w($componentNavigator) | $composer_0.h2w(element));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.y2w();
          var tmp_1;
          if (invalid || it === Companion_getInstance().n2o_1) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = SimpleBottomNavigationBar$lambda$lambda($componentNavigator, element);
            $composer_0.j2x(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.e2v();
          var tmp0_safe_receiver = SimpleBottomNavigationBar$lambda($backStackEntry$delegate);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
          NavigationBarItem($this$StandardBottomNavigationBar, null, element.zjj_1, tmp0_group, tmp1_group, (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t4y_1) === element.yjj_1, $composer_0, 14 & $dirty, 1);
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.e2o();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function SimpleBottomNavigationBar$lambda_1($components, $componentNavigator, $$changed) {
    return function ($composer, $force) {
      SimpleBottomNavigationBar($components, $componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function StandardBottomNavigationBar$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(165796643, $changed, -1, 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous> (SimpleBottomNavigation.kt:67)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier = null;
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_instance;
        if (!((7 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().ub1_1;
        if (!((7 & 4) === 0))
          horizontalAlignment = Companion_getInstance_0().j7b_1;
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.w2w();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().i8t_1;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.x2u();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.q2v();
        if ($composer_3.l2v()) {
          $composer_3.r2v(factory);
        } else {
          $composer_3.u2v();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
          $this$with.j2x(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        SimpleNavigationStyle_getInstance().vjq($composer_5, 0).mjq_1($composer_5, 0);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_1 = selectableGroup(heightIn(fillMaxWidth(padding_0(Companion_instance, SimpleNavigationStyle_getInstance().vjq($composer_5, 0).gjq_1, SimpleNavigationStyle_getInstance().vjq($composer_5, 0).hjq_1)), SimpleNavigationStyle_getInstance().vjq($composer_5, 0).ijq_1));
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_0().h7b_1;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().sb1_1;
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_0().g7b_1;
        var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 384 >> 3 | 112 & 384 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.w2w();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_1().i8t_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_8.x2u();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_8.q2v();
        if ($composer_8.l2v()) {
          $composer_8.r2v(factory_0);
        } else {
          $composer_8.u2v();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_1().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
          $this$with_0.j2x(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_instance, $composer_9, 6 | 112 & 384 >> 6);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.w2v();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        $composer_5.c2v(2105194983);
        if (!SimpleNavigationStyle_getInstance().vjq($composer_5, 0).ojq_1) {
          var tmp_2 = Companion_instance;
          $composer_5.c2v(2105199569);
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var this_0 = get_LocalDensity();
          var $composer_10 = $composer_5;
          sourceInformationMarkerStart($composer_10, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_10.p2x(this_0);
          sourceInformationMarkerEnd($composer_10);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_group = tmp0.o5b(BottomAppBarDefaults_getInstance().fij($composer_5, 0).wbb(tmp0));
          $composer_5.e2v();
          Box(height(tmp_2, tmp0_group), $composer_5, 0);
        }
        $composer_5.e2v();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.w2v();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function StandardBottomNavigationBar$lambda_0($modifier, $content, $$changed, $$default) {
    return function ($composer, $force) {
      StandardBottomNavigationBar($modifier._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavigationBarItem$lambda($this_NavigationBarItem, $modifier, $icon, $label, $onClick, $selected, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationBarItem($this_NavigationBarItem, $modifier._v, $icon, $label, $onClick, $selected, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SimpleNavIcon(selected, resource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1364812431);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(resource) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1364812431, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleNavIcon (SimpleNavIcon.kt:13)');
      }
      var tmp0_painter = painterResource(resource, $composer_0, 14 & $dirty >> 3);
      var tmp1_contentScale = Companion_getInstance_3().o7h_1;
      var tmp;
      if (selected) {
        $composer_0.c2v(-2109029588);
        var tmp0_group = Companion_instance_0.z64(SimpleNavigationStyle_getInstance().bjr($composer_0, 0).wjq_1);
        $composer_0.e2v();
        tmp = tmp0_group;
      } else {
        $composer_0.c2v(-2108933395);
        var tmp1_group = Companion_instance_0.z64(SimpleNavigationStyle_getInstance().bjr($composer_0, 0).xjq_1);
        $composer_0.e2v();
        tmp = tmp1_group;
      }
      var tmp2_colorFilter = tmp;
      var tmp3_modifier = fillMaxSize(Companion_instance);
      Image(tmp0_painter, null, tmp3_modifier, null, tmp1_contentScale, 0.0, tmp2_colorFilter, $composer_0, 25008, 40);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp2_safe_receiver = $composer_0.y2x();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.r32(SimpleNavIcon$lambda(selected, resource, $changed));
    }
  }
  function SimpleNavIcon$lambda($selected, $resource, $$changed) {
    return function ($composer, $force) {
      SimpleNavIcon($selected, $resource, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SimpleNavigationRail(components, componentNavigator, mobile, $composer, $changed, $default) {
    var mobile_0 = {_v: mobile};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1477788285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(components) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.h2l(componentNavigator) : $composer_0.h2w(componentNavigator)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.i2w(mobile_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
      if (!(($default & 4) === 0)) {
        mobile_0._v = true;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1477788285, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleNavigationRail (SimpleNavigationRail.kt:35)');
      }
      var backStackEntry$delegate = componentNavigator.zjm($composer_0, 14 & $dirty >> 3);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp0_$receiver = fillMaxHeight(Companion_instance);
      var tmp1_vertical = SimpleNavigationStyle_getInstance().hjr($composer_0, 0).kjq_1;
      var tmp2_horizontal = SimpleNavigationStyle_getInstance().hjr($composer_0, 0).jjq_1;
      var modifier = padding_0(tmp0_$receiver, tmp2_horizontal, tmp1_vertical);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.x2u();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = wrapContentWidth(fillMaxHeight(background(clip(Companion_instance, SimpleNavigationStyle_getInstance().hjr($composer_5, 0).ljq_1), SimpleNavigationStyle_getInstance().hjr($composer_5, 0).fjq_1)));
      var horizontalArrangement = null;
      var verticalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().sb1_1;
      if (!((6 & 4) === 0))
        verticalAlignment = Companion_getInstance_0().g7b_1;
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.w2w();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().i8t_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_8.x2u();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_8.q2v();
      if ($composer_8.l2v()) {
        $composer_8.r2v(factory_0);
      } else {
        $composer_8.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
        $this$with_0.j2x(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var tmp0_modifier = wrapContentWidth(fillMaxHeight(Companion_instance));
      var tmp1_horizontalAlignment = Companion_getInstance_0().k7b_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(8);
      var tmp2_contentPadding = PaddingValues(VOID, tmp$ret$4);
      $composer_10.c2v(-1326188789);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.h2w(components) | ($dirty & 896) === 256) | (($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.h2w(componentNavigator)))) | $composer_0.h2l(backStackEntry$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_10.y2w();
      var tmp_1;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>' call
        var value = SimpleNavigationRail$lambda_0(components, mobile_0, componentNavigator, backStackEntry$delegate);
        $composer_10.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_10.e2v();
      LazyColumn(tmp0_modifier, null, tmp2_contentPadding, false, null, tmp1_horizontalAlignment, null, false, tmp0_group, $composer_10, 196998, 218);
      SimpleNavigationStyle_getInstance().hjr($composer_10, 0).njq_1($composer_10, 0);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.w2v();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(SimpleNavigationRail$lambda_1(components, componentNavigator, mobile_0, $changed, $default));
    }
  }
  function NavRailItemMobile(modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1204497667);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(icon) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2l(label) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(onClick) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.w2u()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1204497667, $dirty, -1, 'team.platforma.extra_nav.ui.NavRailItemMobile (SimpleNavigationRail.kt:98)');
      }
      var tmp0_modifier = clickable(clip(modifier_0._v, SimpleNavigationStyle_getInstance().bjr($composer_0, 0).ajr_1), VOID, VOID, VOID, onClick);
      var tmp1_horizontalAlignment = Companion_getInstance_0().k7b_1;
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = tmp.kb2(tmp$ret$0);
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().ub1_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_0().j7b_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_3.x2u();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemMobile.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_instance, SimpleNavigationStyle_getInstance().cjr($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.w2w();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().i8t_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_8.x2u();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_8.q2v();
      if ($composer_8.l2v()) {
        $composer_8.r2v(factory_0);
      } else {
        $composer_8.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
        $this$with_0.j2x(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemMobile.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 12 | 112 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.w2v();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp0_style = SimpleNavigationStyle_getInstance().djr($composer_5, 0);
      var tmp_2;
      if (selected) {
        $composer_5.c2v(729489624);
        var tmp0_group = SimpleNavigationStyle_getInstance().gjr($composer_5, 0).ejr_1;
        $composer_5.e2v();
        tmp_2 = tmp0_group;
      } else {
        $composer_5.c2v(729574905);
        var tmp1_group = SimpleNavigationStyle_getInstance().gjr($composer_5, 0).fjr_1;
        $composer_5.e2v();
        tmp_2 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_2;
      var tmp_3;
      if (selected) {
        $composer_5.c2v(729689078);
        var tmp2_group = SimpleNavigationStyle_getInstance().bjr($composer_5, 0).yjq_1;
        $composer_5.e2v();
        tmp_3 = tmp2_group;
      } else {
        $composer_5.c2v(729776343);
        var tmp3_group = SimpleNavigationStyle_getInstance().bjr($composer_5, 0).zjq_1;
        $composer_5.e2v();
        tmp_3 = tmp3_group;
      }
      var tmp2_color = tmp_3;
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_4, null, tmp1_fontWeight, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 6, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(NavRailItemMobile$lambda(modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function NavRailItemDesktop(modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-999866551);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(icon) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2l(label) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(onClick) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.w2u()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-999866551, $dirty, -1, 'team.platforma.extra_nav.ui.NavRailItemDesktop (SimpleNavigationRail.kt:138)');
      }
      var tmp = modifier_0._v;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
      var tmp_0 = heightIn(tmp, tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(200);
      var tmp0_modifier = clickable(clip(width(tmp_0, tmp$ret$1), SimpleNavigationStyle_getInstance().bjr($composer_0, 0).ajr_1), VOID, VOID, VOID, onClick);
      var tmp1_verticalAlignment = Companion_getInstance_0().h7b_1;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = tmp0_modifier;
      var horizontalArrangement = Arrangement_getInstance().sb1_1;
      var verticalAlignment = tmp1_verticalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().sb1_1;
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_0().g7b_1;
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.w2w();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_3.x2u();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.q2v();
      if ($composer_3.l2v()) {
        $composer_3.r2v(factory);
      } else {
        $composer_3.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemDesktop.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_instance, SimpleNavigationStyle_getInstance().cjr($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.w2w();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().i8t_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_8.x2u();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.q2v();
      if ($composer_8.l2v()) {
        $composer_8.r2v(factory_0);
      } else {
        $composer_8.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
        $this$with_0.j2x(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemDesktop.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 12 | 112 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.w2v();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_3 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$6 = _Dp___init__impl__ms3zkb(4);
      Spacer(width(tmp_3, tmp$ret$6), $composer_5, 6);
      var tmp0_style = SimpleNavigationStyle_getInstance().djr($composer_5, 0);
      var tmp_4;
      if (selected) {
        $composer_5.c2v(-1040609744);
        var tmp0_group = SimpleNavigationStyle_getInstance().gjr($composer_5, 0).ejr_1;
        $composer_5.e2v();
        tmp_4 = tmp0_group;
      } else {
        $composer_5.c2v(-1040524463);
        var tmp1_group = SimpleNavigationStyle_getInstance().gjr($composer_5, 0).fjr_1;
        $composer_5.e2v();
        tmp_4 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_4;
      var tmp_5;
      if (selected) {
        $composer_5.c2v(-1040410290);
        var tmp2_group = SimpleNavigationStyle_getInstance().bjr($composer_5, 0).yjq_1;
        $composer_5.e2v();
        tmp_5 = tmp2_group;
      } else {
        $composer_5.c2v(-1040323025);
        var tmp3_group = SimpleNavigationStyle_getInstance().bjr($composer_5, 0).zjq_1;
        $composer_5.e2v();
        tmp_5 = tmp3_group;
      }
      var tmp2_color = tmp_5;
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_6, null, tmp1_fontWeight, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 6, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.w2v();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(NavRailItemDesktop$lambda(modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function SimpleNavigationRail$lambda($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.w();
  }
  function SimpleNavigationRail$lambda$lambda(it) {
    return null;
  }
  function SimpleNavigationRail$lambda$lambda_0($key, $items) {
    return function (index) {
      return $key($items.o(index));
    };
  }
  function SimpleNavigationRail$lambda$lambda_1($contentType, $items) {
    return function (index) {
      return $contentType($items.o(index));
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function SimpleNavigationRail$lambda$lambda$lambda($componentNavigator, $item) {
    return function () {
      $componentNavigator.bjn($item);
      return Unit_instance;
    };
  }
  function SimpleNavigationRail$lambda$lambda$lambda_0($componentNavigator, $item) {
    return function () {
      $componentNavigator.bjn($item);
      return Unit_instance;
    };
  }
  function SimpleNavigationRail$lambda$lambda_2($items, $mobile, $componentNavigator, $backStackEntry$delegate) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C152@7074L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.h2l($this$items) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (($changed & 48) === 0) {
        $dirty = $dirty | ($composer_0.l2w(it) ? 32 : 16);
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-632812321, $dirty, -1, 'androidx.compose.foundation.lazy.items.<anonymous> (LazyDsl.kt:152)');
        }
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var item = $items.o(it);
        var $composer_1 = $composer_0;
        $composer_1.c2v(-1354778147);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp1_vertical = _Dp___init__impl__ms3zkb(4);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp2_horizontal = _Dp___init__impl__ms3zkb(8);
        var modifier = padding_0(Companion_instance, tmp2_horizontal, tmp1_vertical);
        var contentAlignment = Companion_getInstance_0().x7a_1;
        var propagateMinConstraints = false;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_0().x7a_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.w2w();
        var materialized = materialize($composer_3, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().i8t_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_4.x2u();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_4.q2v();
        if ($composer_4.l2v()) {
          $composer_4.r2v(factory);
        } else {
          $composer_4.u2v();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
          $this$with.j2x(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        if ($mobile._v) {
          $composer_6.c2v(76055818);
          $composer_6.c2v(-1521563229);
          var tmp0_group = !(item.ajk_1 == null) ? stringResource(item.ajk_1, $composer_6, 0) : item.yjj_1;
          $composer_6.e2v();
          $composer_6.c2v(-1521559670);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_6.h2w($componentNavigator) | $composer_6.h2w(item));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_6.y2w();
          var tmp_3;
          if (invalid || it_0 === Companion_getInstance().n2o_1) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = SimpleNavigationRail$lambda$lambda$lambda($componentNavigator, item);
            $composer_6.j2x(value);
            tmp_3 = value;
          } else {
            tmp_3 = it_0;
          }
          var tmp_4 = tmp_3;
          var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_6.e2v();
          var tmp0_safe_receiver = SimpleNavigationRail$lambda($backStackEntry$delegate);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4w_1;
          NavRailItemMobile(null, item.zjj_1, tmp0_group, tmp1_group, (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t4y_1) === item.yjj_1, $composer_6, 0, 1);
          $composer_6.e2v();
        } else {
          $composer_6.c2v(76560777);
          $composer_6.c2v(-1521546909);
          var tmp2_group = !(item.ajk_1 == null) ? stringResource(item.ajk_1, $composer_6, 0) : item.yjj_1;
          $composer_6.e2v();
          $composer_6.c2v(-1521543350);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_6.h2w($componentNavigator) | $composer_6.h2w(item));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_6.y2w();
          var tmp_5;
          if (invalid_0 || it_1 === Companion_getInstance().n2o_1) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = SimpleNavigationRail$lambda$lambda$lambda_0($componentNavigator, item);
            $composer_6.j2x(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_1;
          }
          var tmp_6 = tmp_5;
          var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_6.e2v();
          var tmp2_safe_receiver = SimpleNavigationRail$lambda($backStackEntry$delegate);
          var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s4w_1;
          NavRailItemDesktop(null, item.zjj_1, tmp2_group, tmp3_group, (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.t4y_1) === item.yjj_1, $composer_6, 0, 1);
          $composer_6.e2v();
        }
        sourceInformationMarkerEnd($composer_5);
        $composer_4.w2v();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.e2v();
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp_1 = tmp_7;
      } else {
        $composer_0.e2o();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SimpleNavigationRail$lambda_0($components, $mobile, $componentNavigator, $backStackEntry$delegate) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.items' call
      var items = $components;
      var contentType = SimpleNavigationRail$lambda$lambda;
      var tmp = items.j();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = SimpleNavigationRail$lambda$lambda_0(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = SimpleNavigationRail$lambda$lambda_1(contentType, items);
      $this$LazyColumn.fdk(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_13(composableLambdaInstance(-632812321, true, SimpleNavigationRail$lambda$lambda_2(items, $mobile, $componentNavigator, $backStackEntry$delegate))));
      return Unit_instance;
    };
  }
  function SimpleNavigationRail$lambda_1($components, $componentNavigator, $mobile, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleNavigationRail($components, $componentNavigator, $mobile._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavRailItemMobile$lambda($modifier, $icon, $label, $onClick, $selected, $$changed, $$default) {
    return function ($composer, $force) {
      NavRailItemMobile($modifier._v, $icon, $label, $onClick, $selected, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavRailItemDesktop$lambda($modifier, $icon, $label, $onClick, $selected, $$changed, $$default) {
    return function ($composer, $force) {
      NavRailItemDesktop($modifier._v, $icon, $label, $onClick, $selected, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stable;
  var team_platforma_extra_nav_ui_style_NavigationStyle$stable;
  var team_platforma_extra_nav_ui_style_NavigationItemStyle$stable;
  var team_platforma_extra_nav_ui_style_LabelFontWeight$stable;
  function SimpleNavigationStyle$define$lambda($tmp0_rcvr, $bottomNavStyle, $navRailStyle, $navigationItemStyle, $iconSize, $labelStyle, $labelFontWeight, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.ijr($bottomNavStyle._v, $navRailStyle._v, $navigationItemStyle._v, $iconSize._v.w5b_1, $labelStyle._v, $labelFontWeight._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SimpleNavigationStyle() {
    SimpleNavigationStyle_instance = this;
    this.pjq_1 = new NavigationStyle();
    this.qjq_1 = new NavigationStyle();
    this.rjq_1 = new NavigationItemStyle();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.sjq_1 = _Dp___init__impl__ms3zkb(24);
    this.tjq_1 = null;
    this.ujq_1 = new LabelFontWeight(Companion_getInstance_4().w6t_1, Companion_getInstance_4().u6t_1);
  }
  protoOf(SimpleNavigationStyle).ijr = function (bottomNavStyle, navRailStyle, navigationItemStyle, iconSize, labelStyle, labelFontWeight, $composer, $changed, $default) {
    var bottomNavStyle_0 = {_v: bottomNavStyle};
    var navRailStyle_0 = {_v: navRailStyle};
    var navigationItemStyle_0 = {_v: navigationItemStyle};
    var iconSize_0 = {_v: new Dp(iconSize)};
    var labelStyle_0 = {_v: labelStyle};
    var labelFontWeight_0 = {_v: labelFontWeight};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-221248638);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.h2w(bottomNavStyle_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.h2w(navRailStyle_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.h2w(navigationItemStyle_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.j2w(_Dp___get_value__impl__geb1vb(iconSize_0._v.w5b_1)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.h2l(labelStyle_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.h2w(labelFontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.h2w(this) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 1) === 0)) {
          bottomNavStyle_0._v = new NavigationStyle();
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          navRailStyle_0._v = new NavigationStyle();
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          navigationItemStyle_0._v = new NavigationItemStyle();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
          iconSize_0._v = new Dp(tmp$ret$0);
        }
        if (!(($default & 16) === 0)) {
          labelStyle_0._v = MaterialTheme_instance.git($composer_0, 0).sit_1;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          labelFontWeight_0._v = new LabelFontWeight();
          $dirty = $dirty & -458753;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-221248638, $dirty, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.define (SimpleNavigationStyle.kt:38)');
      }
      this.pjq_1 = bottomNavStyle_0._v;
      this.qjq_1 = navRailStyle_0._v;
      this.rjq_1 = navigationItemStyle_0._v;
      this.sjq_1 = iconSize_0._v.w5b_1;
      this.tjq_1 = labelStyle_0._v;
      this.ujq_1 = labelFontWeight_0._v;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(SimpleNavigationStyle$define$lambda(this, bottomNavStyle_0, navRailStyle_0, navigationItemStyle_0, iconSize_0, labelStyle_0, labelFontWeight_0, $changed, $default));
    }
  };
  protoOf(SimpleNavigationStyle).vjq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-456201860);
    if (isTraceInProgress()) {
      traceEventStart(-456201860, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.bottomNavStyle (SimpleNavigationStyle.kt:48)');
    }
    var tmp0 = this.pjq_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).hjr = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(1906768537);
    if (isTraceInProgress()) {
      traceEventStart(1906768537, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.navRailStyle (SimpleNavigationStyle.kt:53)');
    }
    var tmp0 = this.qjq_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).bjr = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(238428935);
    if (isTraceInProgress()) {
      traceEventStart(238428935, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.navItemStyle (SimpleNavigationStyle.kt:58)');
    }
    var tmp0 = this.rjq_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).cjr = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-580101220);
    if (isTraceInProgress()) {
      traceEventStart(-580101220, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.iconSize (SimpleNavigationStyle.kt:63)');
    }
    var tmp0 = this.sjq_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).djr = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(341457151);
    if (isTraceInProgress()) {
      traceEventStart(341457151, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.labelStyle (SimpleNavigationStyle.kt:68)');
    }
    var global = this.tjq_1;
    var default_0 = MaterialTheme_instance.git($composer_0, 0).sit_1;
    var tmp0 = global == null ? default_0 : global;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).gjr = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(761251380);
    if (isTraceInProgress()) {
      traceEventStart(761251380, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.labelFontWeight (SimpleNavigationStyle.kt:75)');
    }
    var tmp0 = this.ujq_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  var SimpleNavigationStyle_instance;
  function SimpleNavigationStyle_getInstance() {
    if (SimpleNavigationStyle_instance == null)
      new SimpleNavigationStyle();
    return SimpleNavigationStyle_instance;
  }
  function NavigationStyle(background, horizontalPadding, verticalPadding, height, horizontalMargin, verticalMargin, shape, horizontalDivider, verticalDivider, insertBottomPadding) {
    background = background === VOID ? Companion_getInstance_2().h60_1 : background;
    var tmp;
    if (horizontalPadding === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(16);
    } else {
      tmp = horizontalPadding;
    }
    horizontalPadding = tmp;
    var tmp_0;
    if (verticalPadding === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = verticalPadding;
    }
    verticalPadding = tmp_0;
    var tmp_1;
    if (height === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(65);
    } else {
      tmp_1 = height;
    }
    height = tmp_1;
    var tmp_2;
    if (horizontalMargin === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = horizontalMargin;
    }
    horizontalMargin = tmp_2;
    var tmp_3;
    if (verticalMargin === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_3 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_3 = verticalMargin;
    }
    verticalMargin = tmp_3;
    shape = shape === VOID ? RoundedCornerShape(0) : shape;
    horizontalDivider = horizontalDivider === VOID ? ComposableSingletons$SimpleNavigationStyleKt_getInstance().jjr_1 : horizontalDivider;
    verticalDivider = verticalDivider === VOID ? ComposableSingletons$SimpleNavigationStyleKt_getInstance().kjr_1 : verticalDivider;
    insertBottomPadding = insertBottomPadding === VOID ? true : insertBottomPadding;
    this.fjq_1 = background;
    this.gjq_1 = horizontalPadding;
    this.hjq_1 = verticalPadding;
    this.ijq_1 = height;
    this.jjq_1 = horizontalMargin;
    this.kjq_1 = verticalMargin;
    this.ljq_1 = shape;
    this.mjq_1 = horizontalDivider;
    this.njq_1 = verticalDivider;
    this.ojq_1 = insertBottomPadding;
  }
  protoOf(NavigationStyle).toString = function () {
    return 'NavigationStyle(background=' + Color__toString_impl_hpzmaq(this.fjq_1) + ', horizontalPadding=' + Dp__toString_impl_kcddez(this.gjq_1) + ', verticalPadding=' + Dp__toString_impl_kcddez(this.hjq_1) + ', height=' + Dp__toString_impl_kcddez(this.ijq_1) + ', horizontalMargin=' + Dp__toString_impl_kcddez(this.jjq_1) + ', verticalMargin=' + Dp__toString_impl_kcddez(this.kjq_1) + ', shape=' + toString(this.ljq_1) + ', horizontalDivider=' + toString(this.mjq_1) + ', verticalDivider=' + toString(this.njq_1) + ', insertBottomPadding=' + this.ojq_1 + ')';
  };
  protoOf(NavigationStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.fjq_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.gjq_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.hjq_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.ijq_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.jjq_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.kjq_1) | 0;
    result = imul(result, 31) + hashCode(this.ljq_1) | 0;
    result = imul(result, 31) + hashCode(this.mjq_1) | 0;
    result = imul(result, 31) + hashCode(this.njq_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.ojq_1) | 0;
    return result;
  };
  protoOf(NavigationStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationStyle))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationStyle ? other : THROW_CCE();
    if (!equals(this.fjq_1, tmp0_other_with_cast.fjq_1))
      return false;
    if (!equals(this.gjq_1, tmp0_other_with_cast.gjq_1))
      return false;
    if (!equals(this.hjq_1, tmp0_other_with_cast.hjq_1))
      return false;
    if (!equals(this.ijq_1, tmp0_other_with_cast.ijq_1))
      return false;
    if (!equals(this.jjq_1, tmp0_other_with_cast.jjq_1))
      return false;
    if (!equals(this.kjq_1, tmp0_other_with_cast.kjq_1))
      return false;
    if (!equals(this.ljq_1, tmp0_other_with_cast.ljq_1))
      return false;
    if (!equals(this.mjq_1, tmp0_other_with_cast.mjq_1))
      return false;
    if (!equals(this.njq_1, tmp0_other_with_cast.njq_1))
      return false;
    if (!(this.ojq_1 === tmp0_other_with_cast.ojq_1))
      return false;
    return true;
  };
  function NavigationItemStyle(selectedIcon, defaultIcon, selectedLabel, defaultLabel, shape) {
    selectedIcon = selectedIcon === VOID ? Companion_getInstance_2().i60_1 : selectedIcon;
    defaultIcon = defaultIcon === VOID ? Companion_getInstance_2().p60_1 : defaultIcon;
    selectedLabel = selectedLabel === VOID ? Companion_getInstance_2().i60_1 : selectedLabel;
    defaultLabel = defaultLabel === VOID ? Companion_getInstance_2().p60_1 : defaultLabel;
    shape = shape === VOID ? RoundedCornerShape(100) : shape;
    this.wjq_1 = selectedIcon;
    this.xjq_1 = defaultIcon;
    this.yjq_1 = selectedLabel;
    this.zjq_1 = defaultLabel;
    this.ajr_1 = shape;
  }
  protoOf(NavigationItemStyle).toString = function () {
    return 'NavigationItemStyle(selectedIcon=' + Color__toString_impl_hpzmaq(this.wjq_1) + ', defaultIcon=' + Color__toString_impl_hpzmaq(this.xjq_1) + ', selectedLabel=' + Color__toString_impl_hpzmaq(this.yjq_1) + ', defaultLabel=' + Color__toString_impl_hpzmaq(this.zjq_1) + ', shape=' + toString(this.ajr_1) + ')';
  };
  protoOf(NavigationItemStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.wjq_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.xjq_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.yjq_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.zjq_1) | 0;
    result = imul(result, 31) + hashCode(this.ajr_1) | 0;
    return result;
  };
  protoOf(NavigationItemStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationItemStyle))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationItemStyle ? other : THROW_CCE();
    if (!equals(this.wjq_1, tmp0_other_with_cast.wjq_1))
      return false;
    if (!equals(this.xjq_1, tmp0_other_with_cast.xjq_1))
      return false;
    if (!equals(this.yjq_1, tmp0_other_with_cast.yjq_1))
      return false;
    if (!equals(this.zjq_1, tmp0_other_with_cast.zjq_1))
      return false;
    if (!equals(this.ajr_1, tmp0_other_with_cast.ajr_1))
      return false;
    return true;
  };
  function team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter() {
    return team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stable;
  }
  function team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter() {
    return team_platforma_extra_nav_ui_style_NavigationItemStyle$stable;
  }
  function team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() {
    return team_platforma_extra_nav_ui_style_NavigationStyle$stable;
  }
  function LabelFontWeight(selected, default_0) {
    selected = selected === VOID ? Companion_getInstance_4().w6t_1 : selected;
    default_0 = default_0 === VOID ? Companion_getInstance_4().u6t_1 : default_0;
    this.ejr_1 = selected;
    this.fjr_1 = default_0;
  }
  protoOf(LabelFontWeight).toString = function () {
    return 'LabelFontWeight(selected=' + this.ejr_1.toString() + ', default=' + this.fjr_1.toString() + ')';
  };
  protoOf(LabelFontWeight).hashCode = function () {
    var result = this.ejr_1.hashCode();
    result = imul(result, 31) + this.fjr_1.hashCode() | 0;
    return result;
  };
  protoOf(LabelFontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LabelFontWeight))
      return false;
    var tmp0_other_with_cast = other instanceof LabelFontWeight ? other : THROW_CCE();
    if (!this.ejr_1.equals(tmp0_other_with_cast.ejr_1))
      return false;
    if (!this.fjr_1.equals(tmp0_other_with_cast.fjr_1))
      return false;
    return true;
  };
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$SimpleNavigationStyleKt$lambda_1$lambda_wkfhfj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-2028585167, $changed, -1, 'team.platforma.extra_nav.ui.style.ComposableSingletons$SimpleNavigationStyleKt.lambda-1.<anonymous> (SimpleNavigationStyle.kt:90)');
      }
      var tmp = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var tmp_0 = height(tmp, tmp$ret$0);
      HorizontalDivider(tmp_0, _Dp___init__impl__ms3zkb(0.0), Color__copy$default_impl_ectz3s(MaterialTheme_instance.pik($composer_0, 0).ril_1, 0.2), $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$SimpleNavigationStyleKt$lambda_2$lambda_3qt0dc($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1871129311, $changed, -1, 'team.platforma.extra_nav.ui.style.ComposableSingletons$SimpleNavigationStyleKt.lambda-2.<anonymous> (SimpleNavigationStyle.kt:98)');
      }
      var tmp = fillMaxHeight(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var tmp_0 = width(tmp, tmp$ret$0);
      VerticalDivider(tmp_0, _Dp___init__impl__ms3zkb(0.0), Color__copy$default_impl_ectz3s(MaterialTheme_instance.pik($composer_0, 0).ril_1, 0.2), $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SimpleNavigationStyleKt() {
    ComposableSingletons$SimpleNavigationStyleKt_instance = this;
    var tmp = this;
    tmp.jjr_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-2028585167, false, ComposableSingletons$SimpleNavigationStyleKt$lambda_1$lambda_wkfhfj));
    var tmp_0 = this;
    tmp_0.kjr_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(1871129311, false, ComposableSingletons$SimpleNavigationStyleKt$lambda_2$lambda_3qt0dc));
  }
  var ComposableSingletons$SimpleNavigationStyleKt_instance;
  function ComposableSingletons$SimpleNavigationStyleKt_getInstance() {
    if (ComposableSingletons$SimpleNavigationStyleKt_instance == null)
      new ComposableSingletons$SimpleNavigationStyleKt();
    return ComposableSingletons$SimpleNavigationStyleKt_instance;
  }
  //region block: post-declaration
  protoOf(ComponentNavigationImpl).bjn = navigate$default;
  //endregion
  //region block: init
  navigationcomposeextra_extra_nav_generated_resources_Res_drawable$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_string$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_array$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_plurals$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_font$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res$stable = 0;
  drawable_instance = new drawable();
  team_platforma_extra_nav_component_activity_component_Activity$stable = 8;
  team_platforma_extra_nav_component_component_of_activity_Component$stable = 8;
  team_platforma_extra_nav_component_fragment_component_Fragment$stable = 8;
  team_platforma_extra_nav_navigator_activity_GlobalNavigator$stable = 8;
  team_platforma_extra_nav_navigator_activity_GlobalNavigation$stable = 8;
  team_platforma_extra_nav_navigator_activity_settings_GlobalNavigationSettings$stable = 8;
  team_platforma_extra_nav_navigator_activity_settings_NavigationSettings$stable = 8;
  team_platforma_extra_nav_navigator_activity_settings_BackNavigation$stable = 8;
  team_platforma_extra_nav_navigator_component_core_ComponentNavigationImpl$stable = 8;
  team_platforma_extra_nav_navigator_fragment_api_FragmentNavigation$stable = 0;
  team_platforma_extra_nav_navigator_fragment_core_FragmentNavigationImpl$stable = 8;
  team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stable = 8;
  team_platforma_extra_nav_ui_style_NavigationStyle$stable = 8;
  team_platforma_extra_nav_ui_style_NavigationItemStyle$stable = 8;
  team_platforma_extra_nav_ui_style_LabelFontWeight$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = GlobalNavigation_getInstance;
  _.$_$.b = SimpleNavigationStyle_getInstance;
  _.$_$.c = ActivityScaffold;
  _.$_$.d = Activity;
  _.$_$.e = Component;
  _.$_$.f = FragmentBox;
  _.$_$.g = Fragment;
  _.$_$.h = GlobalNavigator;
  _.$_$.i = team_platforma_extra_nav_navigator_activity_GlobalNavigator$stableprop_getter;
  _.$_$.j = NavigationItemStyle;
  _.$_$.k = NavigationStyle;
  _.$_$.l = team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter;
  _.$_$.m = team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter;
  _.$_$.n = team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter;
  _.$_$.o = SimpleBottomNavigationBar;
  _.$_$.p = SimpleNavIcon;
  _.$_$.q = SimpleNavigationRail;
  //endregion
  return _;
}));

//# sourceMappingURL=NavigationComposeExtra-extra_nav.js.map
