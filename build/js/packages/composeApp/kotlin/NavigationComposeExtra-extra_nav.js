(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-navigation-navigation-compose.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-navigation-navigation-compose.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
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
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'NavigationComposeExtra-extra_nav'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'NavigationComposeExtra-extra_nav'.");
    }
    globalThis['NavigationComposeExtra-extra_nav'] = factory(typeof globalThis['NavigationComposeExtra-extra_nav'] === 'undefined' ? {} : globalThis['NavigationComposeExtra-extra_nav'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-navigation-navigation-compose'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_androidx_navigation_navigation_compose, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var lazy = kotlin_kotlin.$_$.ql;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var emptySet = kotlin_kotlin.$_$.q8;
  var Long = kotlin_kotlin.$_$.hk;
  var ResourceItem = kotlin_components_resources_library.$_$.c;
  var setOf = kotlin_kotlin.$_$.bb;
  var DrawableResource = kotlin_components_resources_library.$_$.a;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var first = kotlin_kotlin.$_$.y8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var rememberNavController = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.d;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.w;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var Scaffold = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.oe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var equals = kotlin_kotlin.$_$.od;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v1;
  var get_safeDrawing = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var asPaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var composable = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.b;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var blur = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var NavHost = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yl;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var currentBackStackEntryAsState = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.c;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var receiveAsFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var debounce = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var hashCode = kotlin_kotlin.$_$.xd;
  var Unit = kotlin_kotlin.$_$.al;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var Surface = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.p;
  var BottomAppBarDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.x;
  var windowInsetsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l1;
  var stringResource = kotlin_components_resources_library.$_$.f;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var selectableGroup = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.s5;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var painterResource = kotlin_components_resources_library.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.da;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d4;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r1;
  var wrapContentWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o1;
  var calculateStartPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var PaddingValues_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.z;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var toString = kotlin_kotlin.$_$.jf;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var HorizontalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var VerticalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.t;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var SharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var MutableSharedFlow_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.xl;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForClass(Activity, 'Activity');
  initMetadataForObject(ComposableSingletons$ActivityScaffoldKt, 'ComposableSingletons$ActivityScaffoldKt');
  initMetadataForClass(Component, 'Component');
  initMetadataForObject(ComposableSingletons$ComponentKt, 'ComposableSingletons$ComponentKt');
  initMetadataForClass(Fragment, 'Fragment');
  initMetadataForObject(ComposableSingletons$FragmentKt, 'ComposableSingletons$FragmentKt');
  function navigateToActivity$default(activity, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.gor(activity, args);
      tmp = Unit_instance;
    } else {
      tmp = $super.gor.call(this, activity, args);
    }
    return tmp;
  }
  function navigateToActivitySingleTop$default(activity, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.ior(activity, args);
      tmp = Unit_instance;
    } else {
      tmp = $super.ior.call(this, activity, args);
    }
    return tmp;
  }
  initMetadataForInterface(AppNavHost, 'AppNavHost');
  initMetadataForClass(GlobalNavigator, 'GlobalNavigator');
  initMetadataForObject(GlobalAppNavigation, 'GlobalAppNavigation', VOID, VOID, [AppNavHost]);
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
      this.rot(component, args);
      tmp = Unit_instance;
    } else {
      tmp = $super.rot.call(this, component, args);
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
  function navigate$default_0(fragment, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.hov(fragment, args);
      tmp = Unit_instance;
    } else {
      tmp = $super.hov.call(this, fragment, args);
    }
    return tmp;
  }
  initMetadataForInterface(FragmentNavigator, 'FragmentNavigator');
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FragmentNavigateBackDebounce, 'FragmentNavigateBackDebounce', FragmentNavigateBackDebounce);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FragmentNavigationImpl, 'FragmentNavigationImpl', VOID, VOID, [FragmentNavigator]);
  initMetadataForObject(SimpleNavigationStyle, 'SimpleNavigationStyle');
  initMetadataForClass(NavigationStyle, 'NavigationStyle', NavigationStyle);
  initMetadataForClass(NavigationItemStyle, 'NavigationItemStyle', NavigationItemStyle);
  initMetadataForClass(LabelFontWeight, 'LabelFontWeight', LabelFontWeight);
  initMetadataForObject(ComposableSingletons$SimpleNavigationStyleKt, 'ComposableSingletons$SimpleNavigationStyleKt');
  initMetadataForObject(FragmentNavState, 'FragmentNavState');
  initMetadataForObject(ResultListener, 'ResultListener');
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(getResult$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(getResult$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function CommonMainDrawable0$component_placeholder_icon$delegate$lambda() {
    return init_component_placeholder_icon();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.lop_1 = lazy(CommonMainDrawable0$component_placeholder_icon$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).mop = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lop_1;
    component_placeholder_icon$factory();
    return this_0.c1();
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
    return CommonMainDrawable0_getInstance().mop();
  }
  function component_placeholder_icon$factory() {
    return getPropertyCallableRef('component_placeholder_icon', 1, KProperty1, function (receiver) {
      return receiver.mop();
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
  function Activity(route, components, activityScaffold, enterTransition, exitTransition, popEnterTransition, popExitTransition) {
    enterTransition = enterTransition === VOID ? null : enterTransition;
    exitTransition = exitTransition === VOID ? null : exitTransition;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    this.nop_1 = route;
    this.oop_1 = components;
    this.pop_1 = activityScaffold;
    this.qop_1 = enterTransition;
    this.rop_1 = exitTransition;
    this.sop_1 = popEnterTransition;
    this.top_1 = popExitTransition;
  }
  function ActivityScaffold(components, startComponent, bottomBar, topBar, navRail, dialogLayer, showNavRail, asBox, $composer, $changed, $default) {
    var startComponent_0 = {_v: startComponent};
    var bottomBar_0 = {_v: bottomBar};
    var topBar_0 = {_v: topBar};
    var navRail_0 = {_v: navRail};
    var dialogLayer_0 = {_v: dialogLayer};
    var showNavRail_0 = {_v: showNavRail};
    var asBox_0 = {_v: asBox};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(157214919);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.f32(startComponent_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(bottomBar_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(topBar_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(navRail_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(dialogLayer_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.g32(showNavRail_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.g32(asBox_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
        if (!(($default & 2) === 0)) {
          startComponent_0._v = first(components);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          bottomBar_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().uop_1;
        }
        if (!(($default & 8) === 0)) {
          topBar_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().vop_1;
        }
        if (!(($default & 16) === 0)) {
          navRail_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().wop_1;
        }
        if (!(($default & 32) === 0)) {
          dialogLayer_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().xop_1;
        }
        if (!(($default & 64) === 0)) {
          showNavRail_0._v = false;
        }
        if (!(($default & 128) === 0)) {
          asBox_0._v = false;
        }
      } else {
        $composer_0.c2u();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.e31();
      if (isTraceInProgress()) {
        traceEventStart(157214919, $dirty, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold (ActivityScaffold.kt:41)');
      }
      var navHostController = rememberNavController([], $composer_0, 0);
      $composer_0.a31(1005654641);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var value = new ComponentNavigationImpl(navHostController, startComponent_0._v);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var componentNavigator = tmp0_group;
      if (asBox_0._v) {
        $composer_0.a31(1111864078);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = fillMaxSize(Companion_instance);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_0().m7p_1;
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
        var localMap = $composer_2.u32();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().s9e_1;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.v30();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.o31();
        if ($composer_3.j31()) {
          $composer_3.p31(factory);
        } else {
          $composer_3.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var $changed_0 = 6 | 112 & 6 >> 6;
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(0);
        componentNavigator.coq(components, PaddingValues(tmp$ret$6), $composer_5, 48 | 14 & $dirty);
        var tmp_2 = dialogLayer_0._v;
        tmp_2(BoxScopeInstance_instance, (isInterface(componentNavigator, ComponentNav) ? componentNavigator : THROW_CCE()).doq(), $composer_5, 14 & $changed_0 | 896 & $dirty >> 9);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.c31();
      } else {
        $composer_0.a31(1112246432);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(866854447, true, ActivityScaffold$lambda(topBar_0, componentNavigator), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_6 = $composer_0;
        sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_6.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_6.w32();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
          $composer_6.h33(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_6);
        var tmp_5 = tmp0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(30059504, true, ActivityScaffold$lambda_0(showNavRail_0, bottomBar_0, componentNavigator), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_7 = $composer_0;
        sourceInformationMarkerStart($composer_7, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_7.f2r(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_7.w32();
        var tmp_6;
        if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_4(dispatchReceiver_0);
          $composer_7.h33(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_7);
        var tmp_8 = tmp0_0;
        var tmp_9 = _FabPosition___init__impl__9ib2hj(0);
        var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(532199994, true, ActivityScaffold$lambda_1(showNavRail_0, navRail_0, componentNavigator, components, dialogLayer_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_8 = $composer_0;
        sourceInformationMarkerStart($composer_8, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_8.f2r(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_8.w32();
        var tmp_12;
        if (invalid_1 || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_5(dispatchReceiver_1);
          $composer_8.h33(value_2);
          tmp_12 = value_2;
        } else {
          tmp_12 = it_2;
        }
        var tmp_13 = tmp_12;
        var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        sourceInformationMarkerEnd($composer_8);
        Scaffold(null, tmp_5, tmp_8, null, null, tmp_9, tmp_10, tmp_11, null, tmp0_1, $composer_0, 805306800, 505);
        $composer_0.c31();
      }
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
      tmp1_safe_receiver.n38(ActivityScaffold$lambda_2(components, startComponent_0, bottomBar_0, topBar_0, navRail_0, dialogLayer_0, showNavRail_0, asBox_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_1$lambda_3gzvnd(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1526269719, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-1.<anonymous> (ActivityScaffold.kt:33)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_2$lambda_wamcpk(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(190943629, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-2.<anonymous> (ActivityScaffold.kt:36)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_3$lambda_9wv87d(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1391275242, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-3.<anonymous> (ActivityScaffold.kt:37)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_4$lambda_iwr8uu(_this__u8e3s4, it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 129) === 128) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1691602113, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-4.<anonymous> (ActivityScaffold.kt:38)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ActivityScaffoldKt() {
    ComposableSingletons$ActivityScaffoldKt_instance = this;
    var tmp = this;
    tmp.uop_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1526269719, false, ComposableSingletons$ActivityScaffoldKt$lambda_1$lambda_3gzvnd));
    var tmp_0 = this;
    tmp_0.vop_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(190943629, false, ComposableSingletons$ActivityScaffoldKt$lambda_2$lambda_wamcpk));
    var tmp_1 = this;
    tmp_1.wop_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1391275242, false, ComposableSingletons$ActivityScaffoldKt$lambda_3$lambda_9wv87d));
    var tmp_2 = this;
    tmp_2.xop_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1691602113, false, ComposableSingletons$ActivityScaffoldKt$lambda_4$lambda_iwr8uu));
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
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(866854447, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:98)');
        }
        var tmp_0 = $topBar._v;
        tmp_0((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).doq(), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ActivityScaffold$lambda_0($showNavRail, $bottomBar, $componentNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(30059504, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:92)');
        }
        if (!$showNavRail._v) {
          var tmp_0 = $bottomBar._v;
          tmp_0((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).doq(), $composer_0, 0);
        }
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ActivityScaffold$lambda_1($showNavRail, $navRail, $componentNavigator, $components, $dialogLayer) {
    return function (paddingValues, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.f2r(paddingValues) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(532199994, $dirty, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:102)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = padding(fillMaxSize(Companion_instance), VOID, paddingValues.hc1());
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_0().m7p_1;
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
        var localMap = $composer_2.u32();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().s9e_1;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.v30();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.o31();
        if ($composer_3.j31()) {
          $composer_3.p31(factory);
        } else {
          $composer_3.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
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
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((7 & 4) === 0))
          verticalAlignment = Companion_getInstance_0().v7p_1;
        var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.u32();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_1().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_8.v30();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_8.o31();
        if ($composer_8.j31()) {
          $composer_8.p31(factory_0);
        } else {
          $composer_8.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        $composer_10.a31(1851665514);
        if ($showNavRail._v) {
          var tmp_3 = $navRail._v;
          tmp_3((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).doq(), $composer_10, 0);
        }
        $composer_10.c31();
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_4 = fillMaxSize(Companion_instance);
        var tmp_5;
        if (!$showNavRail._v) {
          $composer_10.a31(1567339552);
          var tmp1_bottom = paddingValues.ic1();
          var tmp2_start = asPaddingValues(get_safeDrawing(Companion_instance_0), $composer_10, 0).cc1(LayoutDirection_Ltr_getInstance());
          var tmp3_end = asPaddingValues(get_safeDrawing(Companion_instance_0), $composer_10, 0).bc1(LayoutDirection_Rtl_getInstance());
          var tmp0_group = padding(Companion_instance, tmp2_start, VOID, tmp3_end, tmp1_bottom);
          $composer_10.c31();
          tmp_5 = tmp0_group;
        } else {
          $composer_10.a31(1851689070);
          var tmp1_group = padding(Companion_instance, VOID, VOID, asPaddingValues(get_safeDrawing(Companion_instance_0), $composer_10, 0).bc1(LayoutDirection_Rtl_getInstance()));
          $composer_10.c31();
          tmp_5 = tmp1_group;
        }
        var modifier_3 = tmp_4.i7q(tmp_5);
        var contentAlignment_0 = null;
        var propagateMinConstraints_0 = false;
        var $composer_11 = $composer_10;
        sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_0().m7p_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_12 = $composer_11;
        sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_instance;
        var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
        var localMap_1 = $composer_12.u32();
        var materialized_1 = materialize($composer_12, modifier_4);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_1 = Companion_getInstance_1().s9e_1;
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_6 = $composer_13.v30();
        if (!isInterface(tmp_6, Applier)) {
          invalidApplier();
        }
        $composer_13.o31();
        if ($composer_13.j31()) {
          $composer_13.p31(factory_1);
        } else {
          $composer_13.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
          $this$with_1.h33(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $changed_0 = 6 | 112 & 0 >> 6;
        var $composer_15 = $composer_14;
        $componentNavigator.coq($components, paddingValues, $composer_15, 112 & $dirty << 3);
        var tmp_7 = $dialogLayer._v;
        tmp_7(BoxScopeInstance_instance, (isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).doq(), $composer_15, 14 & $changed_0);
        sourceInformationMarkerEnd($composer_14);
        $composer_13.u31();
        sourceInformationMarkerEnd($composer_13);
        sourceInformationMarkerEnd($composer_12);
        sourceInformationMarkerEnd($composer_11);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.u31();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp_0 = tmp_8;
      } else {
        $composer_0.c2u();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ActivityScaffold$lambda_2($components, $startComponent, $bottomBar, $topBar, $navRail, $dialogLayer, $showNavRail, $asBox, $$changed, $$default) {
    return function ($composer, $force) {
      ActivityScaffold($components, $startComponent._v, $bottomBar._v, $topBar._v, $navRail._v, $dialogLayer._v, $showNavRail._v, $asBox._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_component_component_of_activity_Component$stable;
  function Component$render$lambda($tmp0_rcvr, $navigator, $paddingValues, $key, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.noq($navigator, $paddingValues, $key, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Component(route, icon, label, fragments, renderComponent, enterTransition, exitTransition, popEnterTransition, popExitTransition) {
    icon = icon === VOID ? ComposableSingletons$ComponentKt_getInstance().ooq_1 : icon;
    label = label === VOID ? null : label;
    renderComponent = renderComponent === VOID ? ComposableSingletons$ComponentKt_getInstance().poq_1 : renderComponent;
    enterTransition = enterTransition === VOID ? null : enterTransition;
    exitTransition = exitTransition === VOID ? null : exitTransition;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    this.eoq_1 = route;
    this.foq_1 = icon;
    this.goq_1 = label;
    this.hoq_1 = fragments;
    this.ioq_1 = renderComponent;
    this.joq_1 = enterTransition;
    this.koq_1 = exitTransition;
    this.loq_1 = popEnterTransition;
    this.moq_1 = popExitTransition;
  }
  protoOf(Component).noq = function (navigator, paddingValues, key, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1676399191);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f2r(navigator) : $composer_0.f32(navigator)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(paddingValues) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(key) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1676399191, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.Component.render (Component.kt:51)');
      }
      this.ioq_1(navigator, this.hoq_1, paddingValues, key, $composer_0, 14 & $dirty | 896 & $dirty << 3 | 7168 & $dirty << 3);
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
      tmp1_safe_receiver.n38(Component$render$lambda(this, navigator, paddingValues, key, $changed));
    }
  };
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_1$lambda_vrbf2r(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(41042692, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-1.<anonymous> (Component.kt:32)');
      }
      SimpleNavIcon(selected, get_component_placeholder_icon(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2, p3, p4, p5) {
      return $boundThis.r40(p0, p1, p2, p3, p4, p5);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_2$lambda_ag65u6(componentNavigator, fragmentList, paddingValues, key, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1554974712, $changed, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-2.<anonymous> (Component.kt:37)');
    }
    RenderComponent(componentNavigator, key, fragmentList, paddingValues, $composer_0, 14 & $changed | 112 & $changed >> 6 | 896 & $changed << 3 | 7168 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_3$lambda_idgb81(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1335642811, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-3.<anonymous> (Component.kt:60)');
      }
      SimpleNavIcon(selected, get_component_placeholder_icon(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ComponentKt() {
    ComposableSingletons$ComponentKt_instance = this;
    var tmp = this;
    tmp.ooq_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(41042692, false, ComposableSingletons$ComponentKt$lambda_1$lambda_vrbf2r));
    var tmp_0 = this;
    tmp_0.poq_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1554974712, false, ComposableSingletons$ComponentKt$lambda_2$lambda_ag65u6));
    var tmp_1 = this;
    tmp_1.qoq_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1335642811, false, ComposableSingletons$ComponentKt$lambda_3$lambda_idgb81));
  }
  var ComposableSingletons$ComponentKt_instance;
  function ComposableSingletons$ComponentKt_getInstance() {
    if (ComposableSingletons$ComponentKt_instance == null)
      new ComposableSingletons$ComponentKt();
    return ComposableSingletons$ComponentKt_instance;
  }
  function RenderComponent(componentNavigator, key, fragments, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(532932550);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f2r(componentNavigator) : $composer_0.f32(componentNavigator)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(key) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(fragments) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(paddingValues) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(532932550, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.core.RenderComponent (RenderComponent.kt:20)');
      }
      var navController = rememberNavController([], $composer_0, 0);
      $composer_0.a31(482707055);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.component.component_of_activity.core.RenderComponent.<anonymous>' call
        var value = new FragmentNavigationImpl(navController);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var fragmentNavigation = tmp0_group;
      FragmentNavState_getInstance().soq(key, fragmentNavigation);
      fragmentNavigation.woq(fragments, null, componentNavigator, paddingValues, $composer_0, 14 & $dirty >> 6 | 896 & $dirty << 6 | 7168 & $dirty, 2);
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
      tmp1_safe_receiver.n38(RenderComponent$lambda(componentNavigator, key, fragments, paddingValues, $changed));
    }
  }
  function RenderComponent$lambda($componentNavigator, $key, $fragments, $paddingValues, $$changed) {
    return function ($composer, $force) {
      RenderComponent($componentNavigator, $key, $fragments, $paddingValues, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_component_fragment_component_Fragment$stable;
  function Fragment(route, tag, fragmentBox, enterTransition, exitTransition, popEnterTransition, popExitTransition) {
    tag = tag === VOID ? '' : tag;
    fragmentBox = fragmentBox === VOID ? ComposableSingletons$FragmentKt_getInstance().xoq_1 : fragmentBox;
    enterTransition = enterTransition === VOID ? null : enterTransition;
    exitTransition = exitTransition === VOID ? null : exitTransition;
    popEnterTransition = popEnterTransition === VOID ? enterTransition : popEnterTransition;
    popExitTransition = popExitTransition === VOID ? exitTransition : popExitTransition;
    this.zoq_1 = route;
    this.aor_1 = tag;
    this.bor_1 = fragmentBox;
    this.cor_1 = enterTransition;
    this.dor_1 = exitTransition;
    this.eor_1 = popEnterTransition;
    this.for_1 = popExitTransition;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$FragmentKt$lambda_1$lambda_qh2s9o(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 1025) === 1024) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-2071890279, $changed, -1, 'team.platforma.extra_nav.component.fragment_component.ComposableSingletons$FragmentKt.lambda-1.<anonymous> (Fragment.kt:31)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$FragmentKt$lambda_2$lambda_2cjosj(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1252625207, $changed, -1, 'team.platforma.extra_nav.component.fragment_component.ComposableSingletons$FragmentKt.lambda-2.<anonymous> (Fragment.kt:44)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$FragmentKt() {
    ComposableSingletons$FragmentKt_instance = this;
    var tmp = this;
    tmp.xoq_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-2071890279, false, ComposableSingletons$FragmentKt$lambda_1$lambda_qh2s9o));
    var tmp_0 = this;
    tmp_0.yoq_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1252625207, false, ComposableSingletons$FragmentKt$lambda_2$lambda_2cjosj));
  }
  var ComposableSingletons$FragmentKt_instance;
  function ComposableSingletons$FragmentKt_getInstance() {
    if (ComposableSingletons$FragmentKt_instance == null)
      new ComposableSingletons$FragmentKt();
    return ComposableSingletons$FragmentKt_instance;
  }
  function AppNavHost() {
  }
  var team_platforma_extra_nav_navigator_activity_GlobalNavigator$stable;
  var team_platforma_extra_nav_navigator_activity_GlobalAppNavigation$stable;
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function GlobalNavigator$setupNavHost$lambda$lambda($activity) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1025985448, $changed, -1, 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (GlobalNavigator.kt:75)');
      }
      $activity.pop_1($activity.oop_1, $composer_0, 0);
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
      var tmp0_iterator = $activities.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        composable($this$NavHost, element.nop_1, VOID, VOID, element.qop_1, element.rop_1, element.sop_1, element.top_1, VOID, ComposableLambda$invoke$ref_11(composableLambdaInstance(1025985448, true, GlobalNavigator$setupNavHost$lambda$lambda(element))));
      }
      return Unit_instance;
    };
  }
  function GlobalNavigator$setupNavHost$lambda_0($tmp0_rcvr, $modifier, $activities, $startActivity, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.nor($modifier._v, $activities, $startActivity._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function GlobalNavigator(navController, settings) {
    settings = settings === VOID ? new NavigationSettings() : settings;
    this.lor_1 = navController;
    this.mor_1 = settings;
    GlobalAppNavigation_getInstance().oor_1 = this.lor_1;
    // Inline function 'kotlin.apply' call
    var this_0 = GlobalNavigationSettings_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.<anonymous>' call
    this_0.sor_1 = this.mor_1.wor_1.uor_1;
    this_0.tor_1 = this.mor_1.wor_1.vor_1;
  }
  protoOf(GlobalNavigator).nor = function (modifier, activities, startActivity, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var startActivity_0 = {_v: startActivity};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-753832625);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(activities) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.f32(startActivity_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          startActivity_0._v = first(activities);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.c2u();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.e31();
      if (isTraceInProgress()) {
        traceEventStart(-753832625, $dirty, -1, 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost (GlobalNavigator.kt:53)');
      }
      var tmp = GlobalAppNavigation_getInstance().xor();
      var blur_0 = collectAsState(tmp, false, null, $composer_0, 48, 2);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp0_elvis_lhs = modifier_0._v;
      var tmp_0 = fillMaxSize(tmp0_elvis_lhs == null ? Companion_instance : tmp0_elvis_lhs);
      var tmp_1;
      if (blur_0.c1()) {
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(5);
        tmp_1 = blur(tmp_2, tmp$ret$0);
      } else {
        tmp_1 = Companion_instance;
      }
      var modifier_1 = tmp_0.i7q(tmp_1);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().m7p_1;
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
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_3 = $composer_3.v30();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_4 = startActivity_0._v.nop_1;
      $composer_5.a31(6018875);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.f32(activities);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.w32();
      var tmp_5;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>' call
        var value = GlobalNavigator$setupNavHost$lambda(activities);
        $composer_5.h33(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_5.c31();
      NavHost(this.lor_1, tmp_4, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener(this.lor_1, $composer_0, 0);
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
      tmp1_safe_receiver.n38(GlobalNavigator$setupNavHost$lambda_0(this, modifier_0, activities, startActivity_0, $changed, $default));
    }
  };
  function findNavHost() {
    return GlobalAppNavigation_getInstance();
  }
  function GlobalAppNavigation$navigateToActivitySingleTop$lambda($this$navigate) {
    $this$navigate.z59(0, GlobalAppNavigation$navigateToActivitySingleTop$lambda$lambda);
    $this$navigate.l52_1 = true;
    return Unit_instance;
  }
  function GlobalAppNavigation$navigateToActivitySingleTop$lambda$lambda($this$popUpTo) {
    $this$popUpTo.u52_1 = true;
    return Unit_instance;
  }
  function GlobalAppNavigation() {
    GlobalAppNavigation_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.por_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.qor_1 = LinkedHashMap_init_$Create$();
    this.ror_1 = 'nce_blur_key_flag_lib';
  }
  protoOf(GlobalAppNavigation).yor = function () {
    var tmp = this.oor_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('navController');
    }
  };
  protoOf(GlobalAppNavigation).gor = function (activity, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.por_1;
    var tmp0_safe_receiver = this.yor().t5c();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m53_1;
    this_0.k2(key, args);
    this.yor().k5d(activity.nop_1);
  };
  protoOf(GlobalAppNavigation).ior = function (activity, args) {
    // Inline function 'kotlin.collections.set' call
    this.por_1.k2(null, args);
    var tmp = this.yor();
    tmp.j5d(activity.nop_1, GlobalAppNavigation$navigateToActivitySingleTop$lambda);
  };
  protoOf(GlobalAppNavigation).xor = function () {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.qor_1;
    var key = 'nce_blur_key_flag_lib';
    var value = this_0.s2(key);
    var tmp;
    if (value == null) {
      // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalAppNavigation.blur.<anonymous>' call
      var answer = MutableStateFlow(false);
      this_0.k2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  protoOf(GlobalAppNavigation).kor = function () {
    GlobalNavigateBackDebounce_getInstance().bos();
  };
  var GlobalAppNavigation_instance;
  function GlobalAppNavigation_getInstance() {
    if (GlobalAppNavigation_instance == null)
      new GlobalAppNavigation();
    return GlobalAppNavigation_instance;
  }
  function SetupBackstackDebounceListener(navHostController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-953117147);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(navHostController) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-953117147, $dirty, -1, 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener (GlobalNavigator.kt:158)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.a31(-323919712);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.r5c().n56_1;
      var tmp_1 = SetupBackstackDebounceListener$lambda(backStackEntry$delegate);
      $composer_0.a31(-323912838);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.h33(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.a31(-323907715);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!($composer_0.f2r(backStackEntry$delegate) | $composer_0.f2r(startRoute)) | $composer_0.f2r(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = SetupBackstackDebounceListener$slambda_2(startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.h33(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
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
      tmp3_safe_receiver.n38(SetupBackstackDebounceListener$lambda_3(navHostController, $changed));
    }
  }
  function GlobalNavigateBackDebounce() {
    GlobalNavigateBackDebounce_instance = this;
    this.zor_1 = Channel(-1);
    this.aos_1 = debounce(receiveAsFlow(this.zor_1), GlobalNavigationSettings_getInstance().sor_1);
  }
  protoOf(GlobalNavigateBackDebounce).bos = function () {
    this.zor_1.a1o(Unit_instance);
  };
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
    return $backStackEntry$delegate.c1();
  }
  function SetupBackstackDebounceListener$lambda_0($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.c1();
  }
  function SetupBackstackDebounceListener$lambda_1($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function SetupBackstackDebounceListener$lambda_2($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.c1();
  }
  function SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.kos_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SetupBackstackDebounceListener$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            SetupBackstackDebounceListener$lambda_1(this.kos_1, false);
            this.s9_1 = 1;
            suspendResult = delay(GlobalNavigationSettings_getInstance().tor_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_1(this.kos_1, true);
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
  protoOf(SetupBackstackDebounceListener$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new SetupBackstackDebounceListener$slambda(this.kos_1, completion);
    i.los_1 = $this$LaunchedEffect;
    return i;
  };
  function SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.mos_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.mos_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.mos_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.vos_1 = $startRoute;
    this.wos_1 = $mayNavigateBack$delegate;
    this.xos_1 = $backStackEntry$delegate;
    this.yos_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda$slambda).aot = function (it, $completion) {
    var tmp = this.bot(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).ma = function (p1, $completion) {
    return this.aot(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_0(this.wos_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda(this.xos_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j55_1) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda(this.xos_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i53_1;
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.j55_1) == this.vos_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_1(this.wos_1, false);
            SetupBackstackDebounceListener$lambda_2(this.yos_1).h5d();
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
  protoOf(SetupBackstackDebounceListener$slambda$slambda).bot = function (it, completion) {
    var i = new SetupBackstackDebounceListener$slambda$slambda(this.vos_1, this.wos_1, this.xos_1, this.yos_1, completion);
    i.zos_1 = it;
    return i;
  };
  function SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.aot(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetupBackstackDebounceListener$slambda_1($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.kot_1 = $startRoute;
    this.lot_1 = $mayNavigateBack$delegate;
    this.mot_1 = $backStackEntry$delegate;
    this.not_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda_1).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = GlobalNavigateBackDebounce_getInstance().aos_1;
            var tmp_1 = SetupBackstackDebounceListener$slambda$slambda_0(this.kot_1, this.lot_1, this.mot_1, this.not_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(SetupBackstackDebounceListener$slambda_1).b20 = function ($this$LaunchedEffect, completion) {
    var i = new SetupBackstackDebounceListener$slambda_1(this.kot_1, this.lot_1, this.mot_1, this.not_1, completion);
    i.oot_1 = $this$LaunchedEffect;
    return i;
  };
  function SetupBackstackDebounceListener$slambda_2($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda_1($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
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
    this.sor_1 = new Long(500, 0);
    this.tor_1 = new Long(1300, 0);
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
    this.wor_1 = backNavigation;
  }
  protoOf(NavigationSettings).toString = function () {
    return 'NavigationSettings(backNavigation=' + this.wor_1.toString() + ')';
  };
  protoOf(NavigationSettings).hashCode = function () {
    return this.wor_1.hashCode();
  };
  protoOf(NavigationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationSettings))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationSettings ? other : THROW_CCE();
    if (!this.wor_1.equals(tmp0_other_with_cast.wor_1))
      return false;
    return true;
  };
  function BackNavigation(debounceTimeout, ignoreTimeout) {
    debounceTimeout = debounceTimeout === VOID ? new Long(500, 0) : debounceTimeout;
    ignoreTimeout = ignoreTimeout === VOID ? new Long(1300, 0) : ignoreTimeout;
    this.uor_1 = debounceTimeout;
    this.vor_1 = ignoreTimeout;
  }
  protoOf(BackNavigation).toString = function () {
    return 'BackNavigation(debounceTimeout=' + this.uor_1.toString() + ', ignoreTimeout=' + this.vor_1.toString() + ')';
  };
  protoOf(BackNavigation).hashCode = function () {
    var result = this.uor_1.hashCode();
    result = imul(result, 31) + this.vor_1.hashCode() | 0;
    return result;
  };
  protoOf(BackNavigation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackNavigation))
      return false;
    var tmp0_other_with_cast = other instanceof BackNavigation ? other : THROW_CCE();
    if (!this.uor_1.equals(tmp0_other_with_cast.uor_1))
      return false;
    if (!this.vor_1.equals(tmp0_other_with_cast.vor_1))
      return false;
    return true;
  };
  function ComponentNavigator() {
  }
  function ComponentNav() {
  }
  var team_platforma_extra_nav_navigator_component_core_ComponentNavigationImpl$stable;
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.bou_1 = $startRoute;
    this.cou_1 = $mayNavigateBack$delegate;
    this.dou_1 = $backStackEntry$delegate;
    this.eou_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).aot = function (it, $completion) {
    var tmp = this.bot(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).ma = function (p1, $completion) {
    return this.aot(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_5(this.cou_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda_4(this.dou_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j55_1) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda_4(this.dou_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i53_1;
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.j55_1) == this.bou_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_6(this.cou_1, false);
            SetupBackstackDebounceListener$lambda_7(this.eou_1).h5d();
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
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).bot = function (it, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda(this.bou_1, this.cou_1, this.dou_1, this.eou_1, completion);
    i.fou_1 = it;
    return i;
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.aot(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComponentNavigateBackDebounce() {
    this.gou_1 = Channel(-1);
    this.hou_1 = debounce(receiveAsFlow(this.gou_1), GlobalNavigationSettings_getInstance().sor_1);
  }
  function SetupBackstackDebounceListener_0($this, navHostController, componentNavigateBackDebounce, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-851672988);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(navHostController) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(componentNavigateBackDebounce) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-851672988, $dirty, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener (ComponentNavigationImpl.kt:150)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.a31(708000380);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.r5c().n56_1;
      var tmp_1 = SetupBackstackDebounceListener$lambda_4(backStackEntry$delegate);
      $composer_0.a31(708007654);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.h33(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.a31(708013452);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!(!!($composer_0.f32(componentNavigateBackDebounce) | $composer_0.f2r(backStackEntry$delegate)) | $composer_0.f2r(startRoute)) | $composer_0.f2r(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_2(componentNavigateBackDebounce, startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.h33(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp4_safe_receiver = $composer_0.w33();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.n38(ComponentNavigationImpl$SetupBackstackDebounceListener$lambda($this, navHostController, componentNavigateBackDebounce, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.iou_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).y1r = function (value, $completion) {
    return this.iou_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x3 = function () {
    return this.iou_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.x3());
  };
  function SetupBackstackDebounceListener$lambda_4($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.c1();
  }
  function SetupBackstackDebounceListener$lambda_5($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.c1();
  }
  function SetupBackstackDebounceListener$lambda_6($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function SetupBackstackDebounceListener$lambda_7($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.c1();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda$lambda($component, this$0, $paddingValues) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-806168988, $changed, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ComponentNavigationImpl.kt:64)');
      }
      $component.noq(this$0.doq(), $paddingValues, $component.eoq_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda($components, this$0, $paddingValues) {
    return function ($this$NavHost) {
      var tmp0_iterator = $components.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        composable($this$NavHost, element.eoq_1, VOID, VOID, element.joq_1, element.koq_1, element.loq_1, element.moq_1, VOID, ComposableLambda$invoke$ref_12(composableLambdaInstance(-806168988, true, ComponentNavigationImpl$setupNavHost$lambda$lambda(element, this$0, $paddingValues))));
      }
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda_0($tmp0_rcvr, $components, $paddingValues, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.coq($components, $paddingValues, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$navigate$lambda$lambda($this$popUpTo) {
    $this$popUpTo.v52_1 = true;
    return Unit_instance;
  }
  function ComponentNavigationImpl$navigate$lambda(this$0) {
    return function ($this$navigate) {
      $this$navigate.l52_1 = true;
      $this$navigate.m52_1 = true;
      $this$navigate.a5a(this$0.zop_1.eoq_1, ComponentNavigationImpl$navigate$lambda$lambda);
      return Unit_instance;
    };
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.rou_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            SetupBackstackDebounceListener$lambda_6(this.rou_1, false);
            this.s9_1 = 1;
            suspendResult = delay(GlobalNavigationSettings_getInstance().tor_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_6(this.rou_1, true);
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
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda(this.rou_1, completion);
    i.sou_1 = $this$LaunchedEffect;
    return i;
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.bov_1 = $componentNavigateBackDebounce;
    this.cov_1 = $startRoute;
    this.dov_1 = $mayNavigateBack$delegate;
    this.eov_1 = $backStackEntry$delegate;
    this.fov_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0(this.cov_1, this.dov_1, this.eov_1, this.fov_1, null);
            suspendResult = this.bov_1.hou_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).b20 = function ($this$LaunchedEffect, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1(this.bov_1, this.cov_1, this.dov_1, this.eov_1, this.fov_1, completion);
    i.gov_1 = $this$LaunchedEffect;
    return i;
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_2($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
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
  function ComponentNavigationImpl(navController, startComponent) {
    this.yop_1 = navController;
    this.zop_1 = startComponent;
    this.aoq_1 = new ComponentNavigateBackDebounce();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.boq_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComponentNavigationImpl).coq = function (components, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-951709421);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(paddingValues) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-951709421, $dirty, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost (ComponentNavigationImpl.kt:47)');
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
        contentAlignment = Companion_getInstance_0().m7p_1;
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
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.v30();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>' call
      var $composer_5 = $composer_4;
      $composer_5.a31(1985547393);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.f32(components) | $composer_0.f32(this)) | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>' call
        var value = ComponentNavigationImpl$setupNavHost$lambda(components, this, paddingValues);
        $composer_5.h33(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_5.c31();
      NavHost(this.yop_1, this.zop_1.eoq_1, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener_0(this, this.yop_1, this.aoq_1, $composer_0, 896 & $dirty);
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
      tmp1_safe_receiver.n38(ComponentNavigationImpl$setupNavHost$lambda_0(this, components, paddingValues, $changed));
    }
  };
  protoOf(ComponentNavigationImpl).doq = function () {
    return this;
  };
  protoOf(ComponentNavigationImpl).qot = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-1272317528);
    if (isTraceInProgress()) {
      traceEventStart(-1272317528, $changed, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.backStackEntry (ComponentNavigationImpl.kt:90)');
    }
    var tmp0 = currentBackStackEntryAsState(this.yop_1, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  protoOf(ComponentNavigationImpl).rot = function (component, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.boq_1;
    var tmp0_safe_receiver = this.yop_1.t5c();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m53_1;
    this_0.k2(key, args);
    var tmp1_safe_receiver = this.yop_1.t5c();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i53_1;
    var currentDestination = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j55_1;
    if (!(currentDestination === component.eoq_1)) {
      this.yop_1.j5d(component.eoq_1, ComponentNavigationImpl$navigate$lambda(this));
    }
  };
  protoOf(ComponentNavigationImpl).pot = function () {
    return this.yop_1;
  };
  var team_platforma_extra_nav_navigator_fragment_api_FragmentNavigation$stable;
  function FragmentNavigator() {
  }
  var team_platforma_extra_nav_navigator_fragment_core_FragmentNavigationImpl$stable;
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.sov_1 = $startRoute;
    this.tov_1 = $mayNavigateBack$delegate;
    this.uov_1 = $backStackEntry$delegate;
    this.vov_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).aot = function (it, $completion) {
    var tmp = this.bot(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).ma = function (p1, $completion) {
    return this.aot(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_9(this.tov_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda_8(this.uov_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j55_1) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda_8(this.uov_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i53_1;
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.j55_1) == this.sov_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_10(this.tov_1, false);
            SetupBackstackDebounceListener$lambda_11(this.vov_1).h5d();
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
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).bot = function (it, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda(this.sov_1, this.tov_1, this.uov_1, this.vov_1, completion);
    i.wov_1 = it;
    return i;
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.aot(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FragmentNavigateBackDebounce() {
    this.xov_1 = Channel(-1);
    this.yov_1 = debounce(receiveAsFlow(this.xov_1), GlobalNavigationSettings_getInstance().sor_1);
  }
  protoOf(FragmentNavigateBackDebounce).bos = function () {
    this.xov_1.a1o(Unit_instance);
  };
  function SetupBackstackDebounceListener_1($this, navHostController, fragmentNavigateBackDebounce, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1980077648);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(navHostController) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(fragmentNavigateBackDebounce) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1980077648, $dirty, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener (FragmentNavigationImpl.kt:117)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.a31(-482798502);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.r5c().n56_1;
      var tmp_1 = SetupBackstackDebounceListener$lambda_8(backStackEntry$delegate);
      $composer_0.a31(-482791164);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.h33(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.a31(-482785367);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!(!!($composer_0.f32(fragmentNavigateBackDebounce) | $composer_0.f2r(backStackEntry$delegate)) | $composer_0.f2r(startRoute)) | $composer_0.f2r(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_2(fragmentNavigateBackDebounce, startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.h33(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp4_safe_receiver = $composer_0.w33();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.n38(FragmentNavigationImpl$SetupBackstackDebounceListener$lambda($this, navHostController, fragmentNavigateBackDebounce, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.zov_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).y1r = function (value, $completion) {
    return this.zov_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).x3 = function () {
    return this.zov_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.x3());
  };
  function SetupBackstackDebounceListener$lambda_8($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.c1();
  }
  function SetupBackstackDebounceListener$lambda_9($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.c1();
  }
  function SetupBackstackDebounceListener$lambda_10($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function SetupBackstackDebounceListener$lambda_11($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.c1();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda$lambda($fragment, $componentNavigator, this$0, $paddingValues) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(214038084, $changed, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (FragmentNavigationImpl.kt:59)');
      }
      $fragment.bor_1($componentNavigator, this$0.aow(), $paddingValues, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda($fragments, $componentNavigator, this$0, $paddingValues) {
    return function ($this$NavHost) {
      var tmp0_iterator = $fragments.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        composable($this$NavHost, element.zoq_1, VOID, VOID, element.cor_1, element.dor_1, element.eor_1, element.for_1, VOID, ComposableLambda$invoke$ref_13(composableLambdaInstance(214038084, true, FragmentNavigationImpl$setupNavHost$lambda$lambda(element, $componentNavigator, this$0, $paddingValues))));
      }
      return Unit_instance;
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda_0($tmp0_rcvr, $fragments, $startFragment, $componentNavigator, $paddingValues, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.woq($fragments, $startFragment._v, $componentNavigator, $paddingValues, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.jow_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            SetupBackstackDebounceListener$lambda_10(this.jow_1, false);
            this.s9_1 = 1;
            suspendResult = delay(GlobalNavigationSettings_getInstance().tor_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_10(this.jow_1, true);
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
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda(this.jow_1, completion);
    i.kow_1 = $this$LaunchedEffect;
    return i;
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.tow_1 = $fragmentNavigateBackDebounce;
    this.uow_1 = $startRoute;
    this.vow_1 = $mayNavigateBack$delegate;
    this.wow_1 = $backStackEntry$delegate;
    this.xow_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0(this.uow_1, this.vow_1, this.wow_1, this.xow_1, null);
            suspendResult = this.tow_1.yov_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).b20 = function ($this$LaunchedEffect, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1(this.tow_1, this.uow_1, this.vow_1, this.wow_1, this.xow_1, completion);
    i.yow_1 = $this$LaunchedEffect;
    return i;
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_2($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
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
    this.toq_1 = navController;
    this.uoq_1 = new FragmentNavigateBackDebounce();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.voq_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(FragmentNavigationImpl).woq = function (fragments, startFragment, componentNavigator, paddingValues, $composer, $changed, $default) {
    var startFragment_0 = {_v: startFragment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-677331524);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(fragments) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.f2r(startFragment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.f2r(componentNavigator) : $composer_0.f32(componentNavigator)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(paddingValues) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
        if (!(($default & 2) === 0)) {
          startFragment_0._v = first(fragments);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.c2u();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.e31();
      if (isTraceInProgress()) {
        traceEventStart(-677331524, $dirty, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost (FragmentNavigationImpl.kt:43)');
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
        contentAlignment = Companion_getInstance_0().m7p_1;
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
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.v30();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_0 = startFragment_0._v.zoq_1;
      $composer_5.a31(1797183171);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.f32(fragments) | (($dirty & 896) === 256 || (!(($dirty & 512) === 0) && $composer_0.f32(componentNavigator)))) | $composer_0.f32(this)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.w32();
      var tmp_1;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>' call
        var value = FragmentNavigationImpl$setupNavHost$lambda(fragments, componentNavigator, this, paddingValues);
        $composer_5.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.c31();
      NavHost(this.toq_1, tmp_0, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener_1(this, this.toq_1, this.uoq_1, $composer_0, 896 & $dirty >> 6);
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
      tmp1_safe_receiver.n38(FragmentNavigationImpl$setupNavHost$lambda_0(this, fragments, startFragment_0, componentNavigator, paddingValues, $changed, $default));
    }
  };
  protoOf(FragmentNavigationImpl).aow = function () {
    return this;
  };
  protoOf(FragmentNavigationImpl).hov = function (fragment, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.voq_1;
    var tmp0_safe_receiver = this.toq_1.t5c();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m53_1;
    this_0.k2(key, args);
    this.toq_1.k5d(fragment.zoq_1);
  };
  protoOf(FragmentNavigationImpl).jov = function () {
    var tmp0_safe_receiver = this.toq_1.r5d();
    return this.voq_1.s2(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m53_1);
  };
  protoOf(FragmentNavigationImpl).kor = function () {
    this.uoq_1.bos();
  };
  function SimpleBottomNavigationBar(components, componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1550966436);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.f2r(componentNavigator) : $composer_0.f32(componentNavigator)) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1550966436, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar (SimpleBottomNavigation.kt:36)');
      }
      var backStackEntry$delegate = componentNavigator.qot($composer_0, 14 & $dirty >> 3);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1360940321, true, SimpleBottomNavigationBar$lambda_0(components, componentNavigator, backStackEntry$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.w32();
      var tmp;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.h33(value);
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
      $composer_0.c2u();
    }
    var tmp0_safe_receiver = $composer_0.w33();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n38(SimpleBottomNavigationBar$lambda_1(components, componentNavigator, $changed));
    }
  }
  function StandardBottomNavigationBar(modifier, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-829334370);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-829334370, $dirty, -1, 'team.platforma.extra_nav.ui.StandardBottomNavigationBar (SimpleBottomNavigation.kt:77)');
      }
      var tmp0_color = SimpleNavigationStyle_getInstance().pox($composer_0, 0).zow_1;
      var tmp1_contentColor = Companion_getInstance_2().k68_1;
      var tmp2_modifier = clip(padding_0(insertBottomPadding(modifier_0._v, SimpleNavigationStyle_getInstance().pox($composer_0, 0).iox_1, $composer_0, 14 & $dirty), SimpleNavigationStyle_getInstance().pox($composer_0, 0).dox_1, SimpleNavigationStyle_getInstance().pox($composer_0, 0).eox_1), SimpleNavigationStyle_getInstance().pox($composer_0, 0).fox_1);
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
      var invalid = $composer_1.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.w32();
      var tmp_1;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.h33(value);
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
      $composer_0.c2u();
    }
    var tmp0_safe_receiver = $composer_0.w33();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n38(StandardBottomNavigationBar$lambda_0(modifier_0, content, $changed, $default));
    }
  }
  function NavigationBarItem(_this__u8e3s4, modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(19819258);
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(icon) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(label) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(onClick) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.u30()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(19819258, $dirty, -1, 'team.platforma.extra_nav.ui.NavigationBarItem (SimpleBottomNavigation.kt:192)');
      }
      var tmp0_modifier = clickable(_this__u8e3s4.hc3(clip(modifier_0._v, SimpleNavigationStyle_getInstance().vox($composer_0, 0).uox_1), 1.0), VOID, VOID, VOID, onClick);
      var tmp1_horizontalAlignment = Companion_getInstance_0().z7p_1;
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = tmp.qbw(tmp$ret$0);
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_0().y7p_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_3.v30();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavigationBarItem.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_instance, SimpleNavigationStyle_getInstance().wox($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().m7p_1;
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
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_8.v30();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_8.o31();
      if ($composer_8.j31()) {
        $composer_8.p31(factory_0);
      } else {
        $composer_8.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavigationBarItem.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 15 | 112 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u31();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp0_style = SimpleNavigationStyle_getInstance().xox($composer_5, 0);
      var tmp_2;
      if (selected) {
        $composer_5.a31(1336757040);
        var tmp0_group = SimpleNavigationStyle_getInstance().aoy($composer_5, 0).yox_1;
        $composer_5.c31();
        tmp_2 = tmp0_group;
      } else {
        $composer_5.a31(1336842321);
        var tmp1_group = SimpleNavigationStyle_getInstance().aoy($composer_5, 0).zox_1;
        $composer_5.c31();
        tmp_2 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_2;
      var tmp_3;
      if (selected) {
        $composer_5.a31(1336956494);
        var tmp2_group = SimpleNavigationStyle_getInstance().vox($composer_5, 0).sox_1;
        $composer_5.c31();
        tmp_3 = tmp2_group;
      } else {
        $composer_5.a31(1337043759);
        var tmp3_group = SimpleNavigationStyle_getInstance().vox($composer_5, 0).tox_1;
        $composer_5.c31();
        tmp_3 = tmp3_group;
      }
      var tmp2_color = tmp_3;
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_4, null, tmp1_fontWeight, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 9, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.n38(NavigationBarItem$lambda(_this__u8e3s4, modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function insertBottomPadding(_this__u8e3s4, boolean, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(1096510681);
    if (isTraceInProgress()) {
      traceEventStart(1096510681, $changed, -1, 'team.platforma.extra_nav.ui.insertBottomPadding (SimpleBottomNavigation.kt:177)');
    }
    var tmp;
    if (boolean) {
      tmp = windowInsetsPadding(_this__u8e3s4, BottomAppBarDefaults_getInstance().qm6($composer_0, 0));
    } else {
      tmp = _this__u8e3s4;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function SimpleBottomNavigationBar$lambda($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.c1();
  }
  function SimpleBottomNavigationBar$lambda$lambda($componentNavigator, $component) {
    return function () {
      $componentNavigator.sot($component);
      return Unit_instance;
    };
  }
  function SimpleBottomNavigationBar$lambda_0($components, $componentNavigator, $backStackEntry$delegate) {
    return function ($this$StandardBottomNavigationBar, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.f2r($this$StandardBottomNavigationBar) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-1360940321, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous> (SimpleBottomNavigation.kt:41)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $components.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>' call
          $composer_0.a31(645960451);
          var tmp0_group = !(element.goq_1 == null) ? stringResource(element.goq_1, $composer_0, 0) : element.eoq_1;
          $composer_0.c31();
          $composer_0.a31(-1529051233);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.f32($componentNavigator) | $composer_0.f32(element));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.w32();
          var tmp_1;
          if (invalid || it === Companion_getInstance().l2u_1) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = SimpleBottomNavigationBar$lambda$lambda($componentNavigator, element);
            $composer_0.h33(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.c31();
          var tmp0_safe_receiver = SimpleBottomNavigationBar$lambda($backStackEntry$delegate);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
          NavigationBarItem($this$StandardBottomNavigationBar, null, element.foq_1, tmp0_group, tmp1_group, (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j55_1) === element.eoq_1, $composer_0, 14 & $dirty, 1);
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.c2u();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
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
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(165796643, $changed, -1, 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous> (SimpleBottomNavigation.kt:88)');
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
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((7 & 4) === 0))
          horizontalAlignment = Companion_getInstance_0().y7p_1;
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.u32();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().s9e_1;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.v30();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.o31();
        if ($composer_3.j31()) {
          $composer_3.p31(factory);
        } else {
          $composer_3.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        SimpleNavigationStyle_getInstance().pox($composer_5, 0).gox_1($composer_5, 0);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_1 = selectableGroup(heightIn(fillMaxWidth(padding_0(Companion_instance, SimpleNavigationStyle_getInstance().pox($composer_5, 0).aox_1, SimpleNavigationStyle_getInstance().pox($composer_5, 0).box_1)), SimpleNavigationStyle_getInstance().pox($composer_5, 0).cox_1));
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_0().w7p_1;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_0().v7p_1;
        var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 384 >> 3 | 112 & 384 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.u32();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_1().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_8.v30();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_8.o31();
        if ($composer_8.j31()) {
          $composer_8.p31(factory_0);
        } else {
          $composer_8.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_instance, $composer_9, 6 | 112 & 384 >> 6);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.u31();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        $composer_5.a31(2105220391);
        if (!SimpleNavigationStyle_getInstance().pox($composer_5, 0).iox_1) {
          var tmp_2 = Companion_instance;
          $composer_5.a31(2105224977);
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var this_0 = get_LocalDensity();
          var $composer_10 = $composer_5;
          sourceInformationMarkerStart($composer_10, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_10.n33(this_0);
          sourceInformationMarkerEnd($composer_10);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_group = tmp0.l5i(BottomAppBarDefaults_getInstance().qm6($composer_5, 0).xc8(tmp0));
          $composer_5.c31();
          Box(height(tmp_2, tmp0_group), $composer_5, 0);
        }
        $composer_5.c31();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
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
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
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
    $composer_0 = $composer_0.v33(1364812431);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(resource) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1364812431, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleNavIcon (SimpleNavIcon.kt:13)');
      }
      var tmp0_painter = painterResource(resource, $composer_0, 14 & $dirty >> 3);
      var tmp1_contentScale = Companion_getInstance_3().y7w_1;
      var tmp;
      if (selected) {
        $composer_0.a31(-2109029588);
        var tmp0_group = Companion_instance_1.x6c(SimpleNavigationStyle_getInstance().vox($composer_0, 0).qox_1);
        $composer_0.c31();
        tmp = tmp0_group;
      } else {
        $composer_0.a31(-2108933395);
        var tmp1_group = Companion_instance_1.x6c(SimpleNavigationStyle_getInstance().vox($composer_0, 0).rox_1);
        $composer_0.c31();
        tmp = tmp1_group;
      }
      var tmp2_colorFilter = tmp;
      var tmp3_modifier = fillMaxSize(Companion_instance);
      Image(tmp0_painter, null, tmp3_modifier, null, tmp1_contentScale, 0.0, tmp2_colorFilter, $composer_0, 25008, 40);
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
      tmp2_safe_receiver.n38(SimpleNavIcon$lambda(selected, resource, $changed));
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
    $composer_0 = $composer_0.v33(-1477788285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(components) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.f2r(componentNavigator) : $composer_0.f32(componentNavigator)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.g32(mobile_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (!(($default & 4) === 0)) {
        mobile_0._v = true;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1477788285, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleNavigationRail (SimpleNavigationRail.kt:40)');
      }
      var backStackEntry$delegate = componentNavigator.qot($composer_0, 14 & $dirty >> 3);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = padding_0(fillMaxHeight(Companion_instance));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().m7p_1;
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
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.v30();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = wrapContentWidth(fillMaxHeight(background(clip(Companion_instance, SimpleNavigationStyle_getInstance().boy($composer_5, 0).fox_1), SimpleNavigationStyle_getInstance().boy($composer_5, 0).zow_1)));
      var horizontalArrangement = null;
      var verticalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().ubv_1;
      if (!((6 & 4) === 0))
        verticalAlignment = Companion_getInstance_0().v7p_1;
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_8.v30();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_8.o31();
      if ($composer_8.j31()) {
        $composer_8.p31(factory_0);
      } else {
        $composer_8.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var tmp0_modifier = padding(wrapContentWidth(fillMaxHeight(Companion_instance)), calculateStartPadding(asPaddingValues(get_safeDrawing(Companion_instance_0), $composer_10, 0), LayoutDirection_Ltr_getInstance()));
      var tmp1_horizontalAlignment = Companion_getInstance_0().z7p_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(8);
      var tmp2_contentPadding = PaddingValues_0(VOID, tmp$ret$4);
      $composer_10.a31(-1326161269);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.f32(components) | ($dirty & 896) === 256) | (($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.f32(componentNavigator)))) | $composer_0.f2r(backStackEntry$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_10.w32();
      var tmp_1;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>' call
        var value = SimpleNavigationRail$lambda_0(components, mobile_0, componentNavigator, backStackEntry$delegate);
        $composer_10.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_10.c31();
      LazyColumn(tmp0_modifier, null, tmp2_contentPadding, false, null, tmp1_horizontalAlignment, null, false, tmp0_group, $composer_10, 196992, 218);
      SimpleNavigationStyle_getInstance().boy($composer_10, 0).hox_1($composer_10, 0);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u31();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.n38(SimpleNavigationRail$lambda_1(components, componentNavigator, mobile_0, $changed, $default));
    }
  }
  function NavRailItemMobile(modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1204497667);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(icon) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(label) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(onClick) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.u30()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1204497667, $dirty, -1, 'team.platforma.extra_nav.ui.NavRailItemMobile (SimpleNavigationRail.kt:112)');
      }
      var tmp0_modifier = clickable(clip(modifier_0._v, SimpleNavigationStyle_getInstance().vox($composer_0, 0).uox_1), VOID, VOID, VOID, onClick);
      var tmp1_horizontalAlignment = Companion_getInstance_0().z7p_1;
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = tmp.qbw(tmp$ret$0);
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_0().y7p_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_3.v30();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemMobile.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_instance, SimpleNavigationStyle_getInstance().wox($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().m7p_1;
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
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_8.v30();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_8.o31();
      if ($composer_8.j31()) {
        $composer_8.p31(factory_0);
      } else {
        $composer_8.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemMobile.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 12 | 112 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u31();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp0_style = SimpleNavigationStyle_getInstance().xox($composer_5, 0);
      var tmp_2;
      if (selected) {
        $composer_5.a31(730342744);
        var tmp0_group = SimpleNavigationStyle_getInstance().aoy($composer_5, 0).yox_1;
        $composer_5.c31();
        tmp_2 = tmp0_group;
      } else {
        $composer_5.a31(730428025);
        var tmp1_group = SimpleNavigationStyle_getInstance().aoy($composer_5, 0).zox_1;
        $composer_5.c31();
        tmp_2 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_2;
      var tmp_3;
      if (selected) {
        $composer_5.a31(730542198);
        var tmp2_group = SimpleNavigationStyle_getInstance().vox($composer_5, 0).sox_1;
        $composer_5.c31();
        tmp_3 = tmp2_group;
      } else {
        $composer_5.a31(730629463);
        var tmp3_group = SimpleNavigationStyle_getInstance().vox($composer_5, 0).tox_1;
        $composer_5.c31();
        tmp_3 = tmp3_group;
      }
      var tmp2_color = tmp_3;
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_4, null, tmp1_fontWeight, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 6, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.n38(NavRailItemMobile$lambda(modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function NavRailItemDesktop(modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-999866551);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(icon) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(label) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(onClick) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.u30()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-999866551, $dirty, -1, 'team.platforma.extra_nav.ui.NavRailItemDesktop (SimpleNavigationRail.kt:152)');
      }
      var tmp = modifier_0._v;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
      var tmp_0 = heightIn(tmp, tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(200);
      var tmp0_modifier = clickable(clip(width(tmp_0, tmp$ret$1), SimpleNavigationStyle_getInstance().vox($composer_0, 0).uox_1), VOID, VOID, VOID, onClick);
      var tmp1_verticalAlignment = Companion_getInstance_0().w7p_1;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = tmp0_modifier;
      var horizontalArrangement = Arrangement_getInstance().ubv_1;
      var verticalAlignment = tmp1_verticalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().ubv_1;
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_0().v7p_1;
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_3.v30();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemDesktop.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_instance, SimpleNavigationStyle_getInstance().wox($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_0().m7p_1;
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
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_1().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_8.v30();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.o31();
      if ($composer_8.j31()) {
        $composer_8.p31(factory_0);
      } else {
        $composer_8.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemDesktop.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 12 | 112 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u31();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_3 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$6 = _Dp___init__impl__ms3zkb(4);
      Spacer(width(tmp_3, tmp$ret$6), $composer_5, 6);
      var tmp0_style = SimpleNavigationStyle_getInstance().xox($composer_5, 0);
      var tmp_4;
      if (selected) {
        $composer_5.a31(-1039756624);
        var tmp0_group = SimpleNavigationStyle_getInstance().aoy($composer_5, 0).yox_1;
        $composer_5.c31();
        tmp_4 = tmp0_group;
      } else {
        $composer_5.a31(-1039671343);
        var tmp1_group = SimpleNavigationStyle_getInstance().aoy($composer_5, 0).zox_1;
        $composer_5.c31();
        tmp_4 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_4;
      var tmp_5;
      if (selected) {
        $composer_5.a31(-1039557170);
        var tmp2_group = SimpleNavigationStyle_getInstance().vox($composer_5, 0).sox_1;
        $composer_5.c31();
        tmp_5 = tmp2_group;
      } else {
        $composer_5.a31(-1039469905);
        var tmp3_group = SimpleNavigationStyle_getInstance().vox($composer_5, 0).tox_1;
        $composer_5.c31();
        tmp_5 = tmp3_group;
      }
      var tmp2_color = tmp_5;
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_6, null, tmp1_fontWeight, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 6, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.n38(NavRailItemDesktop$lambda(modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function SimpleNavigationRail$lambda($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.c1();
  }
  function SimpleNavigationRail$lambda$lambda(it) {
    return null;
  }
  function SimpleNavigationRail$lambda$lambda_0($key, $items) {
    return function (index) {
      return $key($items.u(index));
    };
  }
  function SimpleNavigationRail$lambda$lambda_1($contentType, $items) {
    return function (index) {
      return $contentType($items.u(index));
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function SimpleNavigationRail$lambda$lambda$lambda($componentNavigator, $item) {
    return function () {
      $componentNavigator.sot($item);
      return Unit_instance;
    };
  }
  function SimpleNavigationRail$lambda$lambda$lambda_0($componentNavigator, $item) {
    return function () {
      $componentNavigator.sot($item);
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
        $dirty = $dirty | ($composer_0.f2r($this$items) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (($changed & 48) === 0) {
        $dirty = $dirty | ($composer_0.j32(it) ? 32 : 16);
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-632812321, $dirty, -1, 'androidx.compose.foundation.lazy.items.<anonymous> (LazyDsl.kt:152)');
        }
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var item = $items.u(it);
        var $composer_1 = $composer_0;
        $composer_1.a31(-1353925027);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp1_vertical = _Dp___init__impl__ms3zkb(4);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp2_horizontal = _Dp___init__impl__ms3zkb(8);
        var modifier = padding_0(Companion_instance, tmp2_horizontal, tmp1_vertical);
        var contentAlignment = Companion_getInstance_0().m7p_1;
        var propagateMinConstraints = false;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_0().m7p_1;
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
        var localMap = $composer_3.u32();
        var materialized = materialize($composer_3, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().s9e_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_4.v30();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_4.o31();
        if ($composer_4.j31()) {
          $composer_4.p31(factory);
        } else {
          $composer_4.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        if ($mobile._v) {
          $composer_6.a31(76908938);
          $composer_6.a31(-1521535709);
          var tmp0_group = !(item.goq_1 == null) ? stringResource(item.goq_1, $composer_6, 0) : item.eoq_1;
          $composer_6.c31();
          $composer_6.a31(-1521532150);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_6.f32($componentNavigator) | $composer_6.f32(item));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_6.w32();
          var tmp_3;
          if (invalid || it_0 === Companion_getInstance().l2u_1) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = SimpleNavigationRail$lambda$lambda$lambda($componentNavigator, item);
            $composer_6.h33(value);
            tmp_3 = value;
          } else {
            tmp_3 = it_0;
          }
          var tmp_4 = tmp_3;
          var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_6.c31();
          var tmp0_safe_receiver = SimpleNavigationRail$lambda($backStackEntry$delegate);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i53_1;
          NavRailItemMobile(null, item.foq_1, tmp0_group, tmp1_group, (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j55_1) === item.eoq_1, $composer_6, 0, 1);
          $composer_6.c31();
        } else {
          $composer_6.a31(77413897);
          $composer_6.a31(-1521519389);
          var tmp2_group = !(item.goq_1 == null) ? stringResource(item.goq_1, $composer_6, 0) : item.eoq_1;
          $composer_6.c31();
          $composer_6.a31(-1521515830);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_6.f32($componentNavigator) | $composer_6.f32(item));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_6.w32();
          var tmp_5;
          if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = SimpleNavigationRail$lambda$lambda$lambda_0($componentNavigator, item);
            $composer_6.h33(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_1;
          }
          var tmp_6 = tmp_5;
          var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_6.c31();
          var tmp2_safe_receiver = SimpleNavigationRail$lambda($backStackEntry$delegate);
          var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i53_1;
          NavRailItemDesktop(null, item.foq_1, tmp2_group, tmp3_group, (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.j55_1) === item.eoq_1, $composer_6, 0, 1);
          $composer_6.c31();
        }
        sourceInformationMarkerEnd($composer_5);
        $composer_4.u31();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.c31();
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp_1 = tmp_7;
      } else {
        $composer_0.c2u();
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
      var tmp = items.p();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = SimpleNavigationRail$lambda$lambda_0(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = SimpleNavigationRail$lambda$lambda_1(contentType, items);
      $this$LazyColumn.af3(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_16(composableLambdaInstance(-632812321, true, SimpleNavigationRail$lambda$lambda_2(items, $mobile, $componentNavigator, $backStackEntry$delegate))));
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
      $tmp0_rcvr.coy($bottomNavStyle._v, $navRailStyle._v, $navigationItemStyle._v, $iconSize._v.u5i_1, $labelStyle._v, $labelFontWeight._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SimpleNavigationStyle() {
    SimpleNavigationStyle_instance = this;
    this.jox_1 = new NavigationStyle();
    this.kox_1 = new NavigationStyle();
    this.lox_1 = new NavigationItemStyle();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.mox_1 = _Dp___init__impl__ms3zkb(24);
    this.nox_1 = null;
    this.oox_1 = new LabelFontWeight(Companion_getInstance_4().z73_1, Companion_getInstance_4().x73_1);
  }
  protoOf(SimpleNavigationStyle).coy = function (bottomNavStyle, navRailStyle, navigationItemStyle, iconSize, labelStyle, labelFontWeight, $composer, $changed, $default) {
    var bottomNavStyle_0 = {_v: bottomNavStyle};
    var navRailStyle_0 = {_v: navRailStyle};
    var navigationItemStyle_0 = {_v: navigationItemStyle};
    var iconSize_0 = {_v: new Dp(iconSize)};
    var labelStyle_0 = {_v: labelStyle};
    var labelFontWeight_0 = {_v: labelFontWeight};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-221248638);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.f32(bottomNavStyle_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.f32(navRailStyle_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.f32(navigationItemStyle_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h32(_Dp___get_value__impl__geb1vb(iconSize_0._v.u5i_1)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.f2r(labelStyle_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.f32(labelFontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
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
          labelStyle_0._v = MaterialTheme_instance.pmh($composer_0, 0).kmh_1;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          labelFontWeight_0._v = new LabelFontWeight();
          $dirty = $dirty & -458753;
        }
      } else {
        $composer_0.c2u();
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
      $composer_0.e31();
      if (isTraceInProgress()) {
        traceEventStart(-221248638, $dirty, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.define (SimpleNavigationStyle.kt:38)');
      }
      this.jox_1 = bottomNavStyle_0._v;
      this.kox_1 = navRailStyle_0._v;
      this.lox_1 = navigationItemStyle_0._v;
      this.mox_1 = iconSize_0._v.u5i_1;
      this.nox_1 = labelStyle_0._v;
      this.oox_1 = labelFontWeight_0._v;
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
      tmp1_safe_receiver.n38(SimpleNavigationStyle$define$lambda(this, bottomNavStyle_0, navRailStyle_0, navigationItemStyle_0, iconSize_0, labelStyle_0, labelFontWeight_0, $changed, $default));
    }
  };
  protoOf(SimpleNavigationStyle).pox = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-456201860);
    if (isTraceInProgress()) {
      traceEventStart(-456201860, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.bottomNavStyle (SimpleNavigationStyle.kt:48)');
    }
    var tmp0 = this.jox_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).boy = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(1906768537);
    if (isTraceInProgress()) {
      traceEventStart(1906768537, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.navRailStyle (SimpleNavigationStyle.kt:53)');
    }
    var tmp0 = this.kox_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).vox = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(238428935);
    if (isTraceInProgress()) {
      traceEventStart(238428935, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.navItemStyle (SimpleNavigationStyle.kt:58)');
    }
    var tmp0 = this.lox_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).wox = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-580101220);
    if (isTraceInProgress()) {
      traceEventStart(-580101220, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.iconSize (SimpleNavigationStyle.kt:63)');
    }
    var tmp0 = this.mox_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).xox = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(341457151);
    if (isTraceInProgress()) {
      traceEventStart(341457151, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.labelStyle (SimpleNavigationStyle.kt:68)');
    }
    var global = this.nox_1;
    var default_0 = MaterialTheme_instance.pmh($composer_0, 0).omh_1;
    var tmp0 = global == null ? default_0 : global;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).aoy = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(761251380);
    if (isTraceInProgress()) {
      traceEventStart(761251380, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.labelFontWeight (SimpleNavigationStyle.kt:75)');
    }
    var tmp0 = this.oox_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  var SimpleNavigationStyle_instance;
  function SimpleNavigationStyle_getInstance() {
    if (SimpleNavigationStyle_instance == null)
      new SimpleNavigationStyle();
    return SimpleNavigationStyle_instance;
  }
  function NavigationStyle(background, horizontalPadding, verticalPadding, height, horizontalMargin, verticalMargin, shape, horizontalDivider, verticalDivider, insertBottomPadding) {
    background = background === VOID ? Companion_getInstance_2().d68_1 : background;
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
    horizontalDivider = horizontalDivider === VOID ? ComposableSingletons$SimpleNavigationStyleKt_getInstance().doy_1 : horizontalDivider;
    verticalDivider = verticalDivider === VOID ? ComposableSingletons$SimpleNavigationStyleKt_getInstance().eoy_1 : verticalDivider;
    insertBottomPadding = insertBottomPadding === VOID ? true : insertBottomPadding;
    this.zow_1 = background;
    this.aox_1 = horizontalPadding;
    this.box_1 = verticalPadding;
    this.cox_1 = height;
    this.dox_1 = horizontalMargin;
    this.eox_1 = verticalMargin;
    this.fox_1 = shape;
    this.gox_1 = horizontalDivider;
    this.hox_1 = verticalDivider;
    this.iox_1 = insertBottomPadding;
  }
  protoOf(NavigationStyle).toString = function () {
    return 'NavigationStyle(background=' + Color__toString_impl_hpzmaq(this.zow_1) + ', horizontalPadding=' + Dp__toString_impl_kcddez(this.aox_1) + ', verticalPadding=' + Dp__toString_impl_kcddez(this.box_1) + ', height=' + Dp__toString_impl_kcddez(this.cox_1) + ', horizontalMargin=' + Dp__toString_impl_kcddez(this.dox_1) + ', verticalMargin=' + Dp__toString_impl_kcddez(this.eox_1) + ', shape=' + toString(this.fox_1) + ', horizontalDivider=' + toString(this.gox_1) + ', verticalDivider=' + toString(this.hox_1) + ', insertBottomPadding=' + this.iox_1 + ')';
  };
  protoOf(NavigationStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.zow_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.aox_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.box_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.cox_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.dox_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.eox_1) | 0;
    result = imul(result, 31) + hashCode(this.fox_1) | 0;
    result = imul(result, 31) + hashCode(this.gox_1) | 0;
    result = imul(result, 31) + hashCode(this.hox_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.iox_1) | 0;
    return result;
  };
  protoOf(NavigationStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationStyle))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationStyle ? other : THROW_CCE();
    if (!equals(this.zow_1, tmp0_other_with_cast.zow_1))
      return false;
    if (!equals(this.aox_1, tmp0_other_with_cast.aox_1))
      return false;
    if (!equals(this.box_1, tmp0_other_with_cast.box_1))
      return false;
    if (!equals(this.cox_1, tmp0_other_with_cast.cox_1))
      return false;
    if (!equals(this.dox_1, tmp0_other_with_cast.dox_1))
      return false;
    if (!equals(this.eox_1, tmp0_other_with_cast.eox_1))
      return false;
    if (!equals(this.fox_1, tmp0_other_with_cast.fox_1))
      return false;
    if (!equals(this.gox_1, tmp0_other_with_cast.gox_1))
      return false;
    if (!equals(this.hox_1, tmp0_other_with_cast.hox_1))
      return false;
    if (!(this.iox_1 === tmp0_other_with_cast.iox_1))
      return false;
    return true;
  };
  function NavigationItemStyle(selectedIcon, defaultIcon, selectedLabel, defaultLabel, shape) {
    selectedIcon = selectedIcon === VOID ? Companion_getInstance_2().e68_1 : selectedIcon;
    defaultIcon = defaultIcon === VOID ? Companion_getInstance_2().l68_1 : defaultIcon;
    selectedLabel = selectedLabel === VOID ? Companion_getInstance_2().e68_1 : selectedLabel;
    defaultLabel = defaultLabel === VOID ? Companion_getInstance_2().l68_1 : defaultLabel;
    shape = shape === VOID ? RoundedCornerShape(100) : shape;
    this.qox_1 = selectedIcon;
    this.rox_1 = defaultIcon;
    this.sox_1 = selectedLabel;
    this.tox_1 = defaultLabel;
    this.uox_1 = shape;
  }
  protoOf(NavigationItemStyle).toString = function () {
    return 'NavigationItemStyle(selectedIcon=' + Color__toString_impl_hpzmaq(this.qox_1) + ', defaultIcon=' + Color__toString_impl_hpzmaq(this.rox_1) + ', selectedLabel=' + Color__toString_impl_hpzmaq(this.sox_1) + ', defaultLabel=' + Color__toString_impl_hpzmaq(this.tox_1) + ', shape=' + toString(this.uox_1) + ')';
  };
  protoOf(NavigationItemStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.qox_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.rox_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.sox_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.tox_1) | 0;
    result = imul(result, 31) + hashCode(this.uox_1) | 0;
    return result;
  };
  protoOf(NavigationItemStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationItemStyle))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationItemStyle ? other : THROW_CCE();
    if (!equals(this.qox_1, tmp0_other_with_cast.qox_1))
      return false;
    if (!equals(this.rox_1, tmp0_other_with_cast.rox_1))
      return false;
    if (!equals(this.sox_1, tmp0_other_with_cast.sox_1))
      return false;
    if (!equals(this.tox_1, tmp0_other_with_cast.tox_1))
      return false;
    if (!equals(this.uox_1, tmp0_other_with_cast.uox_1))
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
    selected = selected === VOID ? Companion_getInstance_4().z73_1 : selected;
    default_0 = default_0 === VOID ? Companion_getInstance_4().x73_1 : default_0;
    this.yox_1 = selected;
    this.zox_1 = default_0;
  }
  protoOf(LabelFontWeight).toString = function () {
    return 'LabelFontWeight(selected=' + this.yox_1.toString() + ', default=' + this.zox_1.toString() + ')';
  };
  protoOf(LabelFontWeight).hashCode = function () {
    var result = this.yox_1.hashCode();
    result = imul(result, 31) + this.zox_1.hashCode() | 0;
    return result;
  };
  protoOf(LabelFontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LabelFontWeight))
      return false;
    var tmp0_other_with_cast = other instanceof LabelFontWeight ? other : THROW_CCE();
    if (!this.yox_1.equals(tmp0_other_with_cast.yox_1))
      return false;
    if (!this.zox_1.equals(tmp0_other_with_cast.zox_1))
      return false;
    return true;
  };
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$SimpleNavigationStyleKt$lambda_1$lambda_wkfhfj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-2028585167, $changed, -1, 'team.platforma.extra_nav.ui.style.ComposableSingletons$SimpleNavigationStyleKt.lambda-1.<anonymous> (SimpleNavigationStyle.kt:90)');
      }
      var tmp = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var tmp_0 = height(tmp, tmp$ret$0);
      HorizontalDivider(tmp_0, _Dp___init__impl__ms3zkb(0.0), Color__copy$default_impl_ectz3s(MaterialTheme_instance.am8($composer_0, 0).cm9_1, 0.2), $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$SimpleNavigationStyleKt$lambda_2$lambda_3qt0dc($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1871129311, $changed, -1, 'team.platforma.extra_nav.ui.style.ComposableSingletons$SimpleNavigationStyleKt.lambda-2.<anonymous> (SimpleNavigationStyle.kt:98)');
      }
      var tmp = fillMaxHeight(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var tmp_0 = width(tmp, tmp$ret$0);
      VerticalDivider(tmp_0, _Dp___init__impl__ms3zkb(0.0), Color__copy$default_impl_ectz3s(MaterialTheme_instance.am8($composer_0, 0).cm9_1, 0.2), $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SimpleNavigationStyleKt() {
    ComposableSingletons$SimpleNavigationStyleKt_instance = this;
    var tmp = this;
    tmp.doy_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-2028585167, false, ComposableSingletons$SimpleNavigationStyleKt$lambda_1$lambda_wkfhfj));
    var tmp_0 = this;
    tmp_0.eoy_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(1871129311, false, ComposableSingletons$SimpleNavigationStyleKt$lambda_2$lambda_3qt0dc));
  }
  var ComposableSingletons$SimpleNavigationStyleKt_instance;
  function ComposableSingletons$SimpleNavigationStyleKt_getInstance() {
    if (ComposableSingletons$SimpleNavigationStyleKt_instance == null)
      new ComposableSingletons$SimpleNavigationStyleKt();
    return ComposableSingletons$SimpleNavigationStyleKt_instance;
  }
  var team_platforma_extra_nav_utils_FragmentNavState$stable;
  function FragmentNavState() {
    FragmentNavState_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.roq_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(FragmentNavState).soq = function (key, fragmentNavigator) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.roq_1;
    var value = this_0.s2(key);
    var tmp;
    if (value == null) {
      // Inline function 'team.platforma.extra_nav.utils.FragmentNavState.setNavigator.<anonymous>' call
      var answer = MutableSharedFlow(1);
      this_0.k2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var flow = tmp;
    flow.v1t(fragmentNavigator);
  };
  var FragmentNavState_instance;
  function FragmentNavState_getInstance() {
    if (FragmentNavState_instance == null)
      new FragmentNavState();
    return FragmentNavState_instance;
  }
  var team_platforma_extra_nav_utils_Screen$stable;
  function setResult(key, data) {
    ResultListener_getInstance().goy(key, data);
  }
  function getResult(key, onResult, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(80593434);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(key) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(onResult) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(80593434, $dirty, -1, 'team.platforma.extra_nav.utils.getResult (ResultListener.kt:34)');
      }
      $composer_0.a31(79126557);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.utils.getResult.<anonymous>' call
        var value = ResultListener_getInstance().hoy(key);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var flow = tmp0_group;
      $composer_0.a31(79129113);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid_0 = !!(!!($composer_0.f32(flow) | ($dirty & 112) === 32) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.extra_nav.utils.getResult.<anonymous>' call
        var value_0 = getResult$slambda_0(flow, onResult, key, null);
        this_1.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(key, tmp1_group, $composer_0, 14 & $dirty);
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
      tmp2_safe_receiver.n38(getResult$lambda(key, onResult, $changed));
    }
  }
  function ResultListener() {
    ResultListener_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.foy_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ResultListener).hoy = function (key) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.foy_1;
    var value = this_0.s2(key);
    var tmp;
    if (value == null) {
      // Inline function 'team.platforma.extra_nav.utils.ResultListener.getResult.<anonymous>' call
      var answer = MutableSharedFlow(1);
      this_0.k2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, SharedFlow) ? tmp_0 : THROW_CCE();
  };
  protoOf(ResultListener).ioy = function (key) {
    this.foy_1.l2(key);
  };
  protoOf(ResultListener).goy = function (key, data) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.foy_1;
    var value = this_0.s2(key);
    var tmp;
    if (value == null) {
      // Inline function 'team.platforma.extra_nav.utils.ResultListener.setResult.<anonymous>' call
      var answer = MutableSharedFlow(1);
      this_0.k2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var flow = tmp;
    (isInterface(flow, MutableSharedFlow_0) ? flow : THROW_CCE()).v1t(data);
  };
  var ResultListener_instance;
  function ResultListener_getInstance() {
    if (ResultListener_instance == null)
      new ResultListener();
    return ResultListener_instance;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.joy_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).y1r = function (value, $completion) {
    return this.joy_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).x3 = function () {
    return this.joy_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).hashCode = function () {
    return hashCode(this.x3());
  };
  function getResult$slambda$slambda($onResult, $key, resultContinuation) {
    this.soy_1 = $onResult;
    this.toy_1 = $key;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getResult$slambda$slambda).voy = function (data, $completion) {
    var tmp = this.woy(data, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(getResult$slambda$slambda).ma = function (p1, $completion) {
    return this.voy((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getResult$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          if (!(this.uoy_1 == null)) {
            this.soy_1(this.uoy_1);
            ResultListener_getInstance().ioy(this.toy_1);
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
  protoOf(getResult$slambda$slambda).woy = function (data, completion) {
    var i = new getResult$slambda$slambda(this.soy_1, this.toy_1, completion);
    i.uoy_1 = data;
    return i;
  };
  function getResult$slambda$slambda_0($onResult, $key, resultContinuation) {
    var i = new getResult$slambda$slambda($onResult, $key, resultContinuation);
    var l = function (data, $completion) {
      return i.voy(data, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getResult$slambda($flow, $onResult, $key, resultContinuation) {
    this.foz_1 = $flow;
    this.goz_1 = $onResult;
    this.hoz_1 = $key;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getResult$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(getResult$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getResult$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = getResult$slambda$slambda_0(this.goz_1, this.hoz_1, null);
            suspendResult = this.foz_1.y1t(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(getResult$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new getResult$slambda(this.foz_1, this.goz_1, this.hoz_1, completion);
    i.ioz_1 = $this$LaunchedEffect;
    return i;
  };
  function getResult$slambda_0($flow, $onResult, $key, resultContinuation) {
    var i = new getResult$slambda($flow, $onResult, $key, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getResult$lambda($key, $onResult, $$changed) {
    return function ($composer, $force) {
      getResult($key, $onResult, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var team_platforma_extra_nav_SystemPadding$stable;
  var team_platforma_extra_nav_utils_PlatformDeviceType$stable;
  var team_platforma_extra_nav_utils_PlatformScreenSize$stable;
  var team_platforma_extra_nav_utils_UiOrientation$stable;
  //region block: post-declaration
  protoOf(GlobalAppNavigation).hor = navigateToActivity$default;
  protoOf(GlobalAppNavigation).jor = navigateToActivitySingleTop$default;
  protoOf(ComponentNavigationImpl).sot = navigate$default;
  protoOf(FragmentNavigationImpl).iov = navigate$default_0;
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
  team_platforma_extra_nav_component_fragment_component_Fragment$stable = 0;
  team_platforma_extra_nav_navigator_activity_GlobalNavigator$stable = 8;
  team_platforma_extra_nav_navigator_activity_GlobalAppNavigation$stable = 8;
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
  team_platforma_extra_nav_utils_FragmentNavState$stable = 8;
  team_platforma_extra_nav_utils_Screen$stable = 0;
  team_platforma_extra_nav_SystemPadding$stable = 0;
  team_platforma_extra_nav_utils_PlatformDeviceType$stable = 8;
  team_platforma_extra_nav_utils_PlatformScreenSize$stable = 8;
  team_platforma_extra_nav_utils_UiOrientation$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SimpleNavigationStyle_getInstance;
  _.$_$.b = ActivityScaffold;
  _.$_$.c = Activity;
  _.$_$.d = Component;
  _.$_$.e = Fragment;
  _.$_$.f = GlobalNavigator;
  _.$_$.g = findNavHost;
  _.$_$.h = NavigationItemStyle;
  _.$_$.i = NavigationStyle;
  _.$_$.j = team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter;
  _.$_$.k = team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter;
  _.$_$.l = team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter;
  _.$_$.m = SimpleBottomNavigationBar;
  _.$_$.n = SimpleNavIcon;
  _.$_$.o = SimpleNavigationRail;
  _.$_$.p = getResult;
  _.$_$.q = setResult;
  //endregion
  return _;
}));

//# sourceMappingURL=NavigationComposeExtra-extra_nav.js.map
