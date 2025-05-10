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
  var lazy = kotlin_kotlin.$_$.bp;
  var protoOf = kotlin_kotlin.$_$.yh;
  var initMetadataForObject = kotlin_kotlin.$_$.wg;
  var emptySet = kotlin_kotlin.$_$.ba;
  var Long = kotlin_kotlin.$_$.pn;
  var ResourceItem = kotlin_components_resources_library.$_$.e;
  var setOf = kotlin_kotlin.$_$.sc;
  var DrawableResource = kotlin_components_resources_library.$_$.b;
  var KProperty1 = kotlin_kotlin.$_$.hj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ng;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n1;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.i;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.j;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var first = kotlin_kotlin.$_$.ma;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var rememberNavController = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.d;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b5;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var Scaffold = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.wa;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.va;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.g9;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.sa;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.gh;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var equals = kotlin_kotlin.$_$.gg;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var composable = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.b;
  var NavHost = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.a;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.kp;
  var currentBackStackEntryAsState = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.c;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var receiveAsFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var debounce = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var KProperty0 = kotlin_kotlin.$_$.gj;
  var THROW_ISE = kotlin_kotlin.$_$.zn;
  var getLocalDelegateReference = kotlin_kotlin.$_$.lg;
  var KMutableProperty0 = kotlin_kotlin.$_$.ej;
  var CoroutineImpl = kotlin_kotlin.$_$.if;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.re;
  var initMetadataForLambda = kotlin_kotlin.$_$.vg;
  var FunctionAdapter = kotlin_kotlin.$_$.sf;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var hashCode = kotlin_kotlin.$_$.pg;
  var Unit = kotlin_kotlin.$_$.jo;
  var SuspendFunction1 = kotlin_kotlin.$_$.kf;
  var initMetadataForInterface = kotlin_kotlin.$_$.ug;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o4;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var Surface = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var BottomAppBarDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var windowInsetsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var stringResource = kotlin_components_resources_library.$_$.i;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var selectableGroup = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.j6;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var painterResource = kotlin_components_resources_library.$_$.h;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.ra;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p4;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var wrapContentWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var toString = kotlin_kotlin.$_$.ci;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var getBooleanHashCode = kotlin_kotlin.$_$.kg;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f4;
  var HorizontalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var VerticalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForClass(Activity, 'Activity');
  initMetadataForObject(ComposableSingletons$ActivityScaffoldKt, 'ComposableSingletons$ActivityScaffoldKt');
  initMetadataForClass(Component, 'Component');
  initMetadataForObject(ComposableSingletons$ComponentKt, 'ComposableSingletons$ComponentKt');
  initMetadataForClass(Fragment, 'Fragment');
  initMetadataForClass(GlobalNavigator, 'GlobalNavigator');
  initMetadataForObject(GlobalNavigation, 'GlobalNavigation');
  initMetadataForObject(GlobalNavigateBackDebounce, 'GlobalNavigateBackDebounce');
  initMetadataForLambda(SetupBackstackDebounceListener$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(SetupBackstackDebounceListener$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(SetupBackstackDebounceListener$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(GlobalNavigationSettings, 'GlobalNavigationSettings');
  initMetadataForClass(NavigationSettings, 'NavigationSettings', NavigationSettings);
  initMetadataForClass(BackNavigation, 'BackNavigation', BackNavigation);
  function navigate$default(component, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.navigate_yvkqic_k$(component, args);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigate_yvkqic_k$.call(this, component, args);
    }
    return tmp;
  }
  initMetadataForInterface(ComponentNavigator, 'ComponentNavigator');
  initMetadataForInterface(ComponentNav, 'ComponentNav');
  initMetadataForLambda(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(ComponentNavigateBackDebounce, 'ComponentNavigateBackDebounce', ComponentNavigateBackDebounce);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(ComponentNavigationImpl, 'ComponentNavigationImpl', VOID, VOID, [ComponentNav, ComponentNavigator]);
  function navigate$default_0(fragment, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.navigate_tpplha_k$(fragment, args);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigate_tpplha_k$.call(this, fragment, args);
    }
    return tmp;
  }
  initMetadataForInterface(FragmentNavigator, 'FragmentNavigator');
  initMetadataForInterface(FragmentNav, 'FragmentNav');
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(FragmentNavigateBackDebounce, 'FragmentNavigateBackDebounce', FragmentNavigateBackDebounce);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(FragmentNavigationImpl, 'FragmentNavigationImpl', VOID, VOID, [FragmentNav, FragmentNavigator]);
  initMetadataForObject(SimpleNavigationStyle, 'SimpleNavigationStyle');
  initMetadataForClass(NavigationStyle, 'NavigationStyle', NavigationStyle);
  initMetadataForClass(NavigationItemStyle, 'NavigationItemStyle', NavigationItemStyle);
  initMetadataForClass(LabelFontWeight, 'LabelFontWeight', LabelFontWeight);
  initMetadataForObject(ComposableSingletons$SimpleNavigationStyleKt, 'ComposableSingletons$SimpleNavigationStyleKt');
  //endregion
  function _collectCommonMainDrawable0Resources(map) {
    map.put_4fpzoq_k$('component_placeholder_icon', CommonMainDrawable0_getInstance().get_component_placeholder_icon_7lpvw0_k$());
  }
  function CommonMainDrawable0$component_placeholder_icon$delegate$lambda() {
    return init_component_placeholder_icon();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.component_placeholder_icon$delegate_1 = lazy(CommonMainDrawable0$component_placeholder_icon$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).get_component_placeholder_icon_7lpvw0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.component_placeholder_icon$delegate_1;
    component_placeholder_icon$factory();
    return this_0.get_value_j01efc_k$();
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
    return CommonMainDrawable0_getInstance().get_component_placeholder_icon_7lpvw0_k$();
  }
  function component_placeholder_icon$factory() {
    return getPropertyCallableRef('component_placeholder_icon', 1, KProperty1, function (receiver) {
      return receiver.get_component_placeholder_icon_7lpvw0_k$();
    }, null);
  }
  var navigationcomposeextra_extra_nav_generated_resources_Res_drawable$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_string$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_array$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_plurals$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res_font$stable;
  var navigationcomposeextra_extra_nav_generated_resources_Res$stable;
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function array() {
    array_instance = this;
  }
  var array_instance;
  function array_getInstance() {
    if (array_instance == null)
      new array();
    return array_instance;
  }
  function plurals() {
    plurals_instance = this;
  }
  var plurals_instance;
  function plurals_getInstance() {
    if (plurals_instance == null)
      new plurals();
    return plurals_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes('composeResources/navigationcomposeextra.extra_nav.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/navigationcomposeextra.extra_nav.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function get_allDrawableResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allDrawableResources$delegate;
    allDrawableResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allDrawableResources$delegate;
  function get_allStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringResources$delegate;
    allStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringResources$delegate;
  function get_allStringArrayResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringArrayResources$delegate;
    allStringArrayResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringArrayResources$delegate;
  function get_allPluralStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allPluralStringResources$delegate;
    allPluralStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allPluralStringResources$delegate;
  function get_allFontResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allFontResources$delegate;
    allFontResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allFontResources$delegate;
  function allDrawableResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    _collectCommonMainDrawable0Resources(map);
    return map;
  }
  function allStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allStringArrayResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allPluralStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allFontResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allDrawableResources$factory() {
    return getPropertyCallableRef('allDrawableResources', 1, KProperty1, function (receiver) {
      return get_allDrawableResources(receiver);
    }, null);
  }
  function allStringResources$factory() {
    return getPropertyCallableRef('allStringResources', 1, KProperty1, function (receiver) {
      return get_allStringResources(receiver);
    }, null);
  }
  function allStringArrayResources$factory() {
    return getPropertyCallableRef('allStringArrayResources', 1, KProperty1, function (receiver) {
      return get_allStringArrayResources(receiver);
    }, null);
  }
  function allPluralStringResources$factory() {
    return getPropertyCallableRef('allPluralStringResources', 1, KProperty1, function (receiver) {
      return get_allPluralStringResources(receiver);
    }, null);
  }
  function allFontResources$factory() {
    return getPropertyCallableRef('allFontResources', 1, KProperty1, function (receiver) {
      return get_allFontResources(receiver);
    }, null);
  }
  var properties_initialized_ActualResourceCollectors_kt_vf8u04;
  function _init_properties_ActualResourceCollectors_kt__u9rwji() {
    if (!properties_initialized_ActualResourceCollectors_kt_vf8u04) {
      properties_initialized_ActualResourceCollectors_kt_vf8u04 = true;
      allDrawableResources$delegate = lazy(allDrawableResources$delegate$lambda);
      allStringResources$delegate = lazy(allStringResources$delegate$lambda);
      allStringArrayResources$delegate = lazy(allStringArrayResources$delegate$lambda);
      allPluralStringResources$delegate = lazy(allPluralStringResources$delegate$lambda);
      allFontResources$delegate = lazy(allFontResources$delegate$lambda);
    }
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
    this.route_1 = route;
    this.components_1 = components;
    this.activityScaffold_1 = activityScaffold;
    this.enterTransition_1 = enterTransition;
    this.exitTransition_1 = exitTransition;
    this.popEnterTransition_1 = popEnterTransition;
    this.popExitTransition_1 = popExitTransition;
  }
  protoOf(Activity).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  protoOf(Activity).get_components_rknech_k$ = function () {
    return this.components_1;
  };
  protoOf(Activity).get_activityScaffold_54o6c2_k$ = function () {
    return this.activityScaffold_1;
  };
  protoOf(Activity).set_enterTransition_hgs3p4_k$ = function (_set____db54di) {
    this.enterTransition_1 = _set____db54di;
  };
  protoOf(Activity).get_enterTransition_wmetuk_k$ = function () {
    return this.enterTransition_1;
  };
  protoOf(Activity).set_exitTransition_vdt24o_k$ = function (_set____db54di) {
    this.exitTransition_1 = _set____db54di;
  };
  protoOf(Activity).get_exitTransition_4wrgnw_k$ = function () {
    return this.exitTransition_1;
  };
  protoOf(Activity).set_popEnterTransition_n74b6p_k$ = function (_set____db54di) {
    this.popEnterTransition_1 = _set____db54di;
  };
  protoOf(Activity).get_popEnterTransition_fberaz_k$ = function () {
    return this.popEnterTransition_1;
  };
  protoOf(Activity).set_popExitTransition_ymo6an_k$ = function (_set____db54di) {
    this.popExitTransition_1 = _set____db54di;
  };
  protoOf(Activity).get_popExitTransition_q38wez_k$ = function () {
    return this.popExitTransition_1;
  };
  function ActivityScaffold(components, startComponent, bottomBar, topBar, navRail, showNavRail, asBox, $composer, $changed, $default) {
    var startComponent_0 = {_v: startComponent};
    var bottomBar_0 = {_v: bottomBar};
    var topBar_0 = {_v: topBar};
    var navRail_0 = {_v: navRail};
    var showNavRail_0 = {_v: showNavRail};
    var asBox_0 = {_v: asBox};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1491127610);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.changedInstance_s1wkiy_k$(startComponent_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(bottomBar_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(topBar_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(navRail_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(showNavRail_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(asBox_0._v) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          startComponent_0._v = first(components);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          bottomBar_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().lambda_1_r8sbbp_1;
        }
        if (!(($default & 8) === 0)) {
          topBar_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().lambda_2_r8sbbo_1;
        }
        if (!(($default & 16) === 0)) {
          navRail_0._v = ComposableSingletons$ActivityScaffoldKt_getInstance().lambda_3_r8sbbn_1;
        }
        if (!(($default & 32) === 0)) {
          showNavRail_0._v = false;
        }
        if (!(($default & 64) === 0)) {
          asBox_0._v = false;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1491127610, $dirty, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold (ActivityScaffold.kt:25)');
      }
      var navHostController = rememberNavController([], $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(1005628577);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var value = new ComponentNavigationImpl(navHostController);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var componentNavigator = tmp0_group;
      if (asBox_0._v) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1109792100);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = fillMaxSize(Companion_getInstance_0());
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_getInstance_0();
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance_0();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        componentNavigator.setupNavHost_6w6hex_k$(components, startComponent_0._v, $composer_5, 14 & $dirty | 112 & $dirty);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1110060343);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1909601326, true, ActivityScaffold$lambda(topBar_0, componentNavigator), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_6 = $composer_0;
        sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_6.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_6.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_6.updateRememberedValue_l1wh71_k$(value_0);
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
        var invalid_0 = $composer_7.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_7.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_3(dispatchReceiver_0);
          $composer_7.updateRememberedValue_l1wh71_k$(value_1);
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
        var invalid_1 = $composer_8.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_8.rememberedValue_4dg93v_k$();
        var tmp_11;
        if (invalid_1 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_4(dispatchReceiver_1);
          $composer_8.updateRememberedValue_l1wh71_k$(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = it_2;
        }
        var tmp_12 = tmp_11;
        var tmp0_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_8);
        Scaffold(null, tmp_4, tmp_7, null, null, tmp_8, tmp_9, tmp_10, null, tmp0_1, $composer_0, 805306800, 505);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ActivityScaffold$lambda_2(components, startComponent_0, bottomBar_0, topBar_0, navRail_0, showNavRail_0, asBox_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_1$lambda_3gzvnd(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(50538472, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-1.<anonymous> (ActivityScaffold.kt:20)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_2$lambda_wamcpk(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-105022836, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-2.<anonymous> (ActivityScaffold.kt:21)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ActivityScaffoldKt$lambda_3$lambda_9wv87d(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1063380331, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ComposableSingletons$ActivityScaffoldKt.lambda-3.<anonymous> (ActivityScaffold.kt:22)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ActivityScaffoldKt() {
    ComposableSingletons$ActivityScaffoldKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(50538472, false, ComposableSingletons$ActivityScaffoldKt$lambda_1$lambda_3gzvnd));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-105022836, false, ComposableSingletons$ActivityScaffoldKt$lambda_2$lambda_wamcpk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1063380331, false, ComposableSingletons$ActivityScaffoldKt$lambda_3$lambda_9wv87d));
  }
  protoOf(ComposableSingletons$ActivityScaffoldKt).get_lambda_1_pdligx_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ActivityScaffoldKt).get_lambda_2_a4979e_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ActivityScaffoldKt).get_lambda_3_5533y5_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
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
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1909601326, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:46)');
        }
        var tmp_0 = $topBar._v;
        tmp_0((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).componentNavigator_87jlcq_k$(), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ActivityScaffold$lambda_0($showNavRail, $bottomBar, $componentNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-913087377, $changed, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:40)');
        }
        if (!$showNavRail._v) {
          var tmp_0 = $bottomBar._v;
          tmp_0((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).componentNavigator_87jlcq_k$(), $composer_0, 0);
        }
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ActivityScaffold$lambda_1($showNavRail, $navRail, $componentNavigator, $components, $startComponent) {
    return function (paddingValues, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(paddingValues) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1904477255, $dirty, -1, 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous> (ActivityScaffold.kt:49)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = padding(fillMaxSize(Companion_getInstance_0()), paddingValues);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_getInstance_0();
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance_0();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_1 = null;
        var horizontalArrangement = null;
        var verticalAlignment = null;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier_1 = Companion_getInstance_0();
        if (!((7 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((7 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_getInstance_0();
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jjgeyp_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_ahrd54_k$(factory_0);
        } else {
          $composer_8.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
          $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.component.activity_component.ActivityScaffold.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        RowScopeInstance_getInstance();
        var $composer_10 = $composer_9;
        $composer_10.startReplaceGroup_5hh8aj_k$(1851595082);
        if ($showNavRail._v) {
          var tmp_3 = $navRail._v;
          tmp_3((isInterface($componentNavigator, ComponentNav) ? $componentNavigator : THROW_CCE()).componentNavigator_87jlcq_k$(), $composer_10, 0);
        }
        $composer_10.endReplaceGroup_ek144q_k$();
        $componentNavigator.setupNavHost_6w6hex_k$($components, $startComponent._v, $composer_10, 0);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ActivityScaffold$lambda_2($components, $startComponent, $bottomBar, $topBar, $navRail, $showNavRail, $asBox, $$changed, $$default) {
    return function ($composer, $force) {
      ActivityScaffold($components, $startComponent._v, $bottomBar._v, $topBar._v, $navRail._v, $showNavRail._v, $asBox._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
      $tmp0_rcvr.render_b3syz5_k$($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Component(route, icon, label, fragments, renderComponent, enterTransition, exitTransition, popEnterTransition, popExitTransition) {
    icon = icon === VOID ? ComposableSingletons$ComponentKt_getInstance().lambda_1_r8sbbp_1 : icon;
    label = label === VOID ? null : label;
    renderComponent = renderComponent === VOID ? ComposableSingletons$ComponentKt_getInstance().lambda_2_r8sbbo_1 : renderComponent;
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
    this.route_1 = route;
    this.icon_1 = icon;
    this.label_1 = label;
    this.fragments_1 = fragments;
    this.renderComponent_1 = renderComponent;
    this.enterTransition_1 = enterTransition;
    this.exitTransition_1 = exitTransition;
    this.popEnterTransition_1 = popEnterTransition;
    this.popExitTransition_1 = popExitTransition;
  }
  protoOf(Component).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  protoOf(Component).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(Component).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Component).get_fragments_etib96_k$ = function () {
    return this.fragments_1;
  };
  protoOf(Component).get_renderComponent_b31ote_k$ = function () {
    return this.renderComponent_1;
  };
  protoOf(Component).set_enterTransition_hgs3p4_k$ = function (_set____db54di) {
    this.enterTransition_1 = _set____db54di;
  };
  protoOf(Component).get_enterTransition_wmetuk_k$ = function () {
    return this.enterTransition_1;
  };
  protoOf(Component).set_exitTransition_vdt24o_k$ = function (_set____db54di) {
    this.exitTransition_1 = _set____db54di;
  };
  protoOf(Component).get_exitTransition_4wrgnw_k$ = function () {
    return this.exitTransition_1;
  };
  protoOf(Component).set_popEnterTransition_n74b6p_k$ = function (_set____db54di) {
    this.popEnterTransition_1 = _set____db54di;
  };
  protoOf(Component).get_popEnterTransition_fberaz_k$ = function () {
    return this.popEnterTransition_1;
  };
  protoOf(Component).set_popExitTransition_ymo6an_k$ = function (_set____db54di) {
    this.popExitTransition_1 = _set____db54di;
  };
  protoOf(Component).get_popExitTransition_q38wez_k$ = function () {
    return this.popExitTransition_1;
  };
  protoOf(Component).render_b3syz5_k$ = function (navigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1704215843);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(navigator) : $composer_0.changedInstance_s1wkiy_k$(navigator)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1704215843, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.Component.render (Component.kt:43)');
      }
      this.renderComponent_1(navigator, this.fragments_1, $composer_0, 14 & $dirty);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(Component$render$lambda(this, navigator, $changed));
    }
  };
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_1$lambda_vrbf2r(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(41042692, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-1.<anonymous> (Component.kt:29)');
      }
      SimpleNavIcon(selected, get_component_placeholder_icon(drawable_getInstance()), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
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
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComponentKt$lambda_3$lambda_idgb81(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1335642811, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.ComposableSingletons$ComponentKt.lambda-3.<anonymous> (Component.kt:52)');
      }
      SimpleNavIcon(selected, get_component_placeholder_icon(drawable_getInstance()), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ComponentKt() {
    ComposableSingletons$ComponentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(41042692, false, ComposableSingletons$ComponentKt$lambda_1$lambda_vrbf2r));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(1028673180, false, ComposableSingletons$ComponentKt$lambda_2$lambda_ag65u6));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1335642811, false, ComposableSingletons$ComponentKt$lambda_3$lambda_idgb81));
  }
  protoOf(ComposableSingletons$ComponentKt).get_lambda_1_pdligx_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ComponentKt).get_lambda_2_a4979e_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ComponentKt).get_lambda_3_5533y5_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$ComponentKt_instance;
  function ComposableSingletons$ComponentKt_getInstance() {
    if (ComposableSingletons$ComponentKt_instance == null)
      new ComposableSingletons$ComponentKt();
    return ComposableSingletons$ComponentKt_instance;
  }
  function RenderComponent(componentNavigator, fragments, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1007606782);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(componentNavigator) : $composer_0.changedInstance_s1wkiy_k$(componentNavigator)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(fragments) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1007606782, $dirty, -1, 'team.platforma.extra_nav.component.component_of_activity.core.RenderComponent (RenderComponent.kt:14)');
      }
      var navController = rememberNavController([], $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(482698703);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.component.component_of_activity.core.RenderComponent.<anonymous>' call
        var value = new FragmentNavigationImpl(navController);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var fragmentNavigation = tmp0_group;
      fragmentNavigation.setupNavHost_xjzjbx_k$(fragments, null, componentNavigator, $composer_0, 14 & $dirty >> 3 | 896 & $dirty << 6, 2);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(RenderComponent$lambda(componentNavigator, fragments, $changed));
    }
  }
  function RenderComponent$lambda($componentNavigator, $fragments, $$changed) {
    return function ($composer, $force) {
      RenderComponent($componentNavigator, $fragments, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
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
    this.route_1 = route;
    this.tag_1 = tag;
    this.fragmentBox_1 = fragmentBox;
    this.enterTransition_1 = enterTransition;
    this.exitTransition_1 = exitTransition;
    this.popEnterTransition_1 = popEnterTransition;
    this.popExitTransition_1 = popExitTransition;
  }
  protoOf(Fragment).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  protoOf(Fragment).get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  protoOf(Fragment).get_fragmentBox_zhtixa_k$ = function () {
    return this.fragmentBox_1;
  };
  protoOf(Fragment).set_enterTransition_hgs3p4_k$ = function (_set____db54di) {
    this.enterTransition_1 = _set____db54di;
  };
  protoOf(Fragment).get_enterTransition_wmetuk_k$ = function () {
    return this.enterTransition_1;
  };
  protoOf(Fragment).set_exitTransition_vdt24o_k$ = function (_set____db54di) {
    this.exitTransition_1 = _set____db54di;
  };
  protoOf(Fragment).get_exitTransition_4wrgnw_k$ = function () {
    return this.exitTransition_1;
  };
  protoOf(Fragment).set_popEnterTransition_n74b6p_k$ = function (_set____db54di) {
    this.popEnterTransition_1 = _set____db54di;
  };
  protoOf(Fragment).get_popEnterTransition_fberaz_k$ = function () {
    return this.popEnterTransition_1;
  };
  protoOf(Fragment).set_popExitTransition_ymo6an_k$ = function (_set____db54di) {
    this.popExitTransition_1 = _set____db54di;
  };
  protoOf(Fragment).get_popExitTransition_q38wez_k$ = function () {
    return this.popExitTransition_1;
  };
  function FragmentBox(modifier, contentAlignment, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1893277341);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = Companion_getInstance_1().get_Center_3arb0i_k$();
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
        modifier_1 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.component.fragment_component.FragmentBox.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      content($composer_5, 14 & $dirty >> 6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(FragmentBox$lambda(modifier_0, contentAlignment_0, content, $changed, $default));
    }
  }
  function FragmentBox$lambda($modifier, $contentAlignment, $content, $$changed, $$default) {
    return function ($composer, $force) {
      FragmentBox($modifier._v, $contentAlignment._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var team_platforma_extra_nav_navigator_activity_GlobalNavigator$stable;
  var team_platforma_extra_nav_navigator_activity_GlobalNavigation$stable;
  function team_platforma_extra_nav_navigator_activity_GlobalNavigator$stableprop_getter() {
    return team_platforma_extra_nav_navigator_activity_GlobalNavigator$stable;
  }
  function _get_navController__5xcbrm($this) {
    return $this.navController_1;
  }
  function _get_settings__lbkut4($this) {
    return $this.settings_1;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function GlobalNavigator$setupNavHost$lambda$lambda($activity) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1025985448, $changed, -1, 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (GlobalNavigator.kt:67)');
      }
      $activity.get_activityScaffold_54o6c2_k$()($activity.get_components_rknech_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalNavigator$setupNavHost$lambda($activities) {
    return function ($this$NavHost) {
      var tmp0_iterator = $activities.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = element.get_route_iy3cio_k$();
        var tmp_0 = element.get_enterTransition_wmetuk_k$();
        var tmp_1 = element.get_exitTransition_4wrgnw_k$();
        var tmp_2 = element.get_popEnterTransition_fberaz_k$();
        var tmp_3 = element.get_popExitTransition_q38wez_k$();
        composable($this$NavHost, tmp, VOID, VOID, tmp_0, tmp_1, tmp_2, tmp_3, VOID, ComposableLambda$invoke$ref_8(composableLambdaInstance(1025985448, true, GlobalNavigator$setupNavHost$lambda$lambda(element))));
      }
      return Unit_getInstance();
    };
  }
  function GlobalNavigator$setupNavHost$lambda_0($tmp0_rcvr, $modifier, $activities, $startActivity, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.setupNavHost_tc1rgs_k$($modifier._v, $activities, $startActivity._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function GlobalNavigator(navController, settings) {
    settings = settings === VOID ? new NavigationSettings() : settings;
    this.navController_1 = navController;
    this.settings_1 = settings;
    GlobalNavigation_getInstance().navController_1 = this.navController_1;
    // Inline function 'kotlin.apply' call
    var this_0 = GlobalNavigationSettings_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.<anonymous>' call
    this_0.set_debounceTimeout_44kku5_k$(this.settings_1.get_backNavigation_tdxp44_k$().get_debounceTimeout_byl3pt_k$());
    this_0.set_ignoreTimeout_y7ikz8_k$(this.settings_1.get_backNavigation_tdxp44_k$().get_ignoreTimeout_7g0r96_k$());
  }
  protoOf(GlobalNavigator).setupNavHost_tc1rgs_k$ = function (modifier, activities, startActivity, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var startActivity_0 = {_v: startActivity};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-753832625);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(activities) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.changedInstance_s1wkiy_k$(startActivity_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          startActivity_0._v = first(activities);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-753832625, $dirty, -1, 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost (GlobalNavigator.kt:49)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp0_elvis_lhs = modifier_0._v;
      var modifier_1 = fillMaxSize(tmp0_elvis_lhs == null ? Companion_getInstance_0() : tmp0_elvis_lhs);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_0 = startActivity_0._v.get_route_iy3cio_k$();
      $composer_5.startReplaceGroup_5hh8aj_k$(6007419);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(activities);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.GlobalNavigator.setupNavHost.<anonymous>.<anonymous>' call
        var value = GlobalNavigator$setupNavHost$lambda(activities);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      NavHost(this.navController_1, tmp_0, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener(this.navController_1, $composer_0, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(GlobalNavigator$setupNavHost$lambda_0(this, modifier_0, activities, startActivity_0, $changed, $default));
    }
  };
  function _get_activityArgsMap__2kdv6n($this) {
    return $this.activityArgsMap_1;
  }
  function GlobalNavigation$navigateToActivitySingleTop$lambda($this$navigate) {
    $this$navigate.popUpTo_po3odn_k$(0, GlobalNavigation$navigateToActivitySingleTop$lambda$lambda);
    $this$navigate.set_launchSingleTop_e6b38o_k$(true);
    return Unit_getInstance();
  }
  function GlobalNavigation$navigateToActivitySingleTop$lambda$lambda($this$popUpTo) {
    $this$popUpTo.set_inclusive_s1r61y_k$(true);
    return Unit_getInstance();
  }
  function GlobalNavigation() {
    GlobalNavigation_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.activityArgsMap_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(GlobalNavigation).set_navController_s3mpu0_k$ = function (_set____db54di) {
    this.navController_1 = _set____db54di;
  };
  protoOf(GlobalNavigation).get_navController_pch6bh_k$ = function () {
    var tmp = this.navController_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('navController');
    }
  };
  protoOf(GlobalNavigation).navigateToActivity_f9yueg_k$ = function (activity, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.activityArgsMap_1;
    var tmp0_safe_receiver = this.get_navController_pch6bh_k$().get_currentBackStackEntry_facmv5_k$();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_id_kntnx8_k$();
    this_0.put_4fpzoq_k$(key, args);
    this.get_navController_pch6bh_k$().navigate$default_m3ygrg_k$(activity.get_route_iy3cio_k$());
  };
  protoOf(GlobalNavigation).navigateToActivity$default_aks31i_k$ = function (activity, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.navigateToActivity_f9yueg_k$(activity, args);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigateToActivity_f9yueg_k$.call(this, activity, args);
    }
    return tmp;
  };
  protoOf(GlobalNavigation).navigateToActivitySingleTop_6jfg2p_k$ = function (activity, args) {
    // Inline function 'kotlin.collections.set' call
    this.activityArgsMap_1.put_4fpzoq_k$(null, args);
    var tmp = this.get_navController_pch6bh_k$();
    var tmp_0 = activity.get_route_iy3cio_k$();
    tmp.navigate_n97lsf_k$(tmp_0, GlobalNavigation$navigateToActivitySingleTop$lambda);
  };
  protoOf(GlobalNavigation).navigateToActivitySingleTop$default_skr70x_k$ = function (activity, args, $super) {
    args = args === VOID ? null : args;
    var tmp;
    if ($super === VOID) {
      this.navigateToActivitySingleTop_6jfg2p_k$(activity, args);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigateToActivitySingleTop_6jfg2p_k$.call(this, activity, args);
    }
    return tmp;
  };
  protoOf(GlobalNavigation).args_1sct9_k$ = function () {
    var tmp0_safe_receiver = this.get_navController_pch6bh_k$().get_previousBackStackEntry_51wa9d_k$();
    return this.activityArgsMap_1.get_wei43m_k$(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_id_kntnx8_k$());
  };
  protoOf(GlobalNavigation).backStackEntry_tvqzzs_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(926853008);
    if (isTraceInProgress()) {
      traceEventStart(926853008, $changed, -1, 'team.platforma.extra_nav.navigator.activity.GlobalNavigation.backStackEntry (GlobalNavigator.kt:100)');
    }
    var tmp0 = currentBackStackEntryAsState(this.get_navController_pch6bh_k$(), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(GlobalNavigation).navigateBack_np4ixk_k$ = function () {
    GlobalNavigateBackDebounce_getInstance().navigateDebounceBack_ommi27_k$();
  };
  var GlobalNavigation_instance;
  function GlobalNavigation_getInstance() {
    if (GlobalNavigation_instance == null)
      new GlobalNavigation();
    return GlobalNavigation_instance;
  }
  function SetupBackstackDebounceListener(navHostController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-953117147);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(navHostController) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-953117147, $dirty, -1, 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener (GlobalNavigator.kt:122)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.startReplaceGroup_5hh8aj_k$(-323952384);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.get_graph_is3411_k$().get_startDestinationRoute_9ttmmk_k$();
      var tmp_1 = SetupBackstackDebounceListener$lambda(backStackEntry$delegate);
      $composer_0.startReplaceGroup_5hh8aj_k$(-323945510);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-323940387);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!($composer_0.changed_ga7h3f_k$(backStackEntry$delegate) | $composer_0.changed_ga7h3f_k$(startRoute)) | $composer_0.changed_ga7h3f_k$(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.activity.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = SetupBackstackDebounceListener$slambda_2(startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp2_group, $composer_0, 6);
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
      tmp3_safe_receiver.updateScope_t8jcf_k$(SetupBackstackDebounceListener$lambda_3(navHostController, $changed));
    }
  }
  function GlobalNavigateBackDebounce() {
    GlobalNavigateBackDebounce_instance = this;
    this.clickChannel_1 = Channel(-1);
    this.flow_1 = debounce(receiveAsFlow(this.clickChannel_1), GlobalNavigationSettings_getInstance().get_debounceTimeout_byl3pt_k$());
  }
  protoOf(GlobalNavigateBackDebounce).get_clickChannel_py75b8_k$ = function () {
    return this.clickChannel_1;
  };
  protoOf(GlobalNavigateBackDebounce).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(GlobalNavigateBackDebounce).navigateDebounceBack_ommi27_k$ = function () {
    this.clickChannel_1.trySend_62dpg8_k$(Unit_getInstance());
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
    return $backStackEntry$delegate.get_value_j01efc_k$();
  }
  function SetupBackstackDebounceListener$lambda_0($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.get_value_j01efc_k$();
  }
  function SetupBackstackDebounceListener$lambda_1($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SetupBackstackDebounceListener$lambda_2($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.get_value_j01efc_k$();
  }
  function SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SetupBackstackDebounceListener$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            SetupBackstackDebounceListener$lambda_1(this.$mayNavigateBack$delegate_1, false);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(GlobalNavigationSettings_getInstance().get_ignoreTimeout_7g0r96_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_1(this.$mayNavigateBack$delegate_1, true);
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
  protoOf(SetupBackstackDebounceListener$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new SetupBackstackDebounceListener$slambda(this.$mayNavigateBack$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(SetupBackstackDebounceListener$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.$startRoute_1 = $startRoute;
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    this.$backStackEntry$delegate_1 = $backStackEntry$delegate;
    this.$currentNavController$delegate_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda$slambda).invoke_buf84h_k$ = function (it, $completion) {
    var tmp = this.create_owyqcb_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_buf84h_k$(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_0(this.$mayNavigateBack$delegate_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda(this.$backStackEntry$delegate_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_route_iy3cio_k$()) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda(this.$backStackEntry$delegate_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_destination_9r3c63_k$();
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_route_iy3cio_k$()) == this.$startRoute_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_1(this.$mayNavigateBack$delegate_1, false);
            SetupBackstackDebounceListener$lambda_2(this.$currentNavController$delegate_1).navigateUp_uszbak_k$();
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
  protoOf(SetupBackstackDebounceListener$slambda$slambda).create_owyqcb_k$ = function (it, completion) {
    var i = new SetupBackstackDebounceListener$slambda$slambda(this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(SetupBackstackDebounceListener$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_owyqcb_k$(value instanceof Unit ? value : THROW_CCE(), completion);
  };
  function SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_buf84h_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetupBackstackDebounceListener$slambda_1($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.$startRoute_1 = $startRoute;
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    this.$backStackEntry$delegate_1 = $backStackEntry$delegate;
    this.$currentNavController$delegate_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupBackstackDebounceListener$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = GlobalNavigateBackDebounce_getInstance().flow_1;
            var tmp_1 = SetupBackstackDebounceListener$slambda$slambda_0(this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(SetupBackstackDebounceListener$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new SetupBackstackDebounceListener$slambda_1(this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(SetupBackstackDebounceListener$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SetupBackstackDebounceListener$slambda_2($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new SetupBackstackDebounceListener$slambda_1($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetupBackstackDebounceListener$lambda_3($navHostController, $$changed) {
    return function ($composer, $force) {
      SetupBackstackDebounceListener($navHostController, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var team_platforma_extra_nav_navigator_activity_settings_GlobalNavigationSettings$stable;
  function GlobalNavigationSettings() {
    GlobalNavigationSettings_instance = this;
    this.debounceTimeout_1 = new Long(500, 0);
    this.ignoreTimeout_1 = new Long(1300, 0);
  }
  protoOf(GlobalNavigationSettings).set_debounceTimeout_44kku5_k$ = function (_set____db54di) {
    this.debounceTimeout_1 = _set____db54di;
  };
  protoOf(GlobalNavigationSettings).get_debounceTimeout_byl3pt_k$ = function () {
    return this.debounceTimeout_1;
  };
  protoOf(GlobalNavigationSettings).set_ignoreTimeout_y7ikz8_k$ = function (_set____db54di) {
    this.ignoreTimeout_1 = _set____db54di;
  };
  protoOf(GlobalNavigationSettings).get_ignoreTimeout_7g0r96_k$ = function () {
    return this.ignoreTimeout_1;
  };
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
    this.backNavigation_1 = backNavigation;
  }
  protoOf(NavigationSettings).set_backNavigation_5twpm5_k$ = function (_set____db54di) {
    this.backNavigation_1 = _set____db54di;
  };
  protoOf(NavigationSettings).get_backNavigation_tdxp44_k$ = function () {
    return this.backNavigation_1;
  };
  protoOf(NavigationSettings).component1_7eebsc_k$ = function () {
    return this.backNavigation_1;
  };
  protoOf(NavigationSettings).copy_cl19s0_k$ = function (backNavigation) {
    return new NavigationSettings(backNavigation);
  };
  protoOf(NavigationSettings).copy$default_3v3el2_k$ = function (backNavigation, $super) {
    backNavigation = backNavigation === VOID ? this.backNavigation_1 : backNavigation;
    return $super === VOID ? this.copy_cl19s0_k$(backNavigation) : $super.copy_cl19s0_k$.call(this, backNavigation);
  };
  protoOf(NavigationSettings).toString = function () {
    return 'NavigationSettings(backNavigation=' + this.backNavigation_1.toString() + ')';
  };
  protoOf(NavigationSettings).hashCode = function () {
    return this.backNavigation_1.hashCode();
  };
  protoOf(NavigationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationSettings))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationSettings ? other : THROW_CCE();
    if (!this.backNavigation_1.equals(tmp0_other_with_cast.backNavigation_1))
      return false;
    return true;
  };
  function BackNavigation(debounceTimeout, ignoreTimeout) {
    debounceTimeout = debounceTimeout === VOID ? new Long(500, 0) : debounceTimeout;
    ignoreTimeout = ignoreTimeout === VOID ? new Long(1300, 0) : ignoreTimeout;
    this.debounceTimeout_1 = debounceTimeout;
    this.ignoreTimeout_1 = ignoreTimeout;
  }
  protoOf(BackNavigation).set_debounceTimeout_44kku5_k$ = function (_set____db54di) {
    this.debounceTimeout_1 = _set____db54di;
  };
  protoOf(BackNavigation).get_debounceTimeout_byl3pt_k$ = function () {
    return this.debounceTimeout_1;
  };
  protoOf(BackNavigation).set_ignoreTimeout_y7ikz8_k$ = function (_set____db54di) {
    this.ignoreTimeout_1 = _set____db54di;
  };
  protoOf(BackNavigation).get_ignoreTimeout_7g0r96_k$ = function () {
    return this.ignoreTimeout_1;
  };
  protoOf(BackNavigation).component1_7eebsc_k$ = function () {
    return this.debounceTimeout_1;
  };
  protoOf(BackNavigation).component2_7eebsb_k$ = function () {
    return this.ignoreTimeout_1;
  };
  protoOf(BackNavigation).copy_cwfd3f_k$ = function (debounceTimeout, ignoreTimeout) {
    return new BackNavigation(debounceTimeout, ignoreTimeout);
  };
  protoOf(BackNavigation).copy$default_oy53a_k$ = function (debounceTimeout, ignoreTimeout, $super) {
    debounceTimeout = debounceTimeout === VOID ? this.debounceTimeout_1 : debounceTimeout;
    ignoreTimeout = ignoreTimeout === VOID ? this.ignoreTimeout_1 : ignoreTimeout;
    return $super === VOID ? this.copy_cwfd3f_k$(debounceTimeout, ignoreTimeout) : $super.copy_cwfd3f_k$.call(this, debounceTimeout, ignoreTimeout);
  };
  protoOf(BackNavigation).toString = function () {
    return 'BackNavigation(debounceTimeout=' + this.debounceTimeout_1.toString() + ', ignoreTimeout=' + this.ignoreTimeout_1.toString() + ')';
  };
  protoOf(BackNavigation).hashCode = function () {
    var result = this.debounceTimeout_1.hashCode();
    result = imul(result, 31) + this.ignoreTimeout_1.hashCode() | 0;
    return result;
  };
  protoOf(BackNavigation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackNavigation))
      return false;
    var tmp0_other_with_cast = other instanceof BackNavigation ? other : THROW_CCE();
    if (!this.debounceTimeout_1.equals(tmp0_other_with_cast.debounceTimeout_1))
      return false;
    if (!this.ignoreTimeout_1.equals(tmp0_other_with_cast.ignoreTimeout_1))
      return false;
    return true;
  };
  function ComponentNavigator() {
  }
  function ComponentNav() {
  }
  var team_platforma_extra_nav_navigator_component_core_ComponentNavigationImpl$stable;
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.$startRoute_1 = $startRoute;
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    this.$backStackEntry$delegate_1 = $backStackEntry$delegate;
    this.$currentNavController$delegate_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).invoke_buf84h_k$ = function (it, $completion) {
    var tmp = this.create_owyqcb_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_buf84h_k$(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_5(this.$mayNavigateBack$delegate_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda_4(this.$backStackEntry$delegate_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_route_iy3cio_k$()) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda_4(this.$backStackEntry$delegate_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_destination_9r3c63_k$();
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_route_iy3cio_k$()) == this.$startRoute_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_6(this.$mayNavigateBack$delegate_1, false);
            SetupBackstackDebounceListener$lambda_7(this.$currentNavController$delegate_1).navigateUp_uszbak_k$();
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
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).create_owyqcb_k$ = function (it, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda(this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_owyqcb_k$(value instanceof Unit ? value : THROW_CCE(), completion);
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_buf84h_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_navController__5xcbrm_0($this) {
    return $this.navController_1;
  }
  function _get_backDebounce__g6fh8b($this) {
    return $this.backDebounce_1;
  }
  function _get_componentArgsMap__4oa7bd($this) {
    return $this.componentArgsMap_1;
  }
  function ComponentNavigateBackDebounce() {
    this.clickChannel_1 = Channel(-1);
    this.flow_1 = debounce(receiveAsFlow(this.clickChannel_1), GlobalNavigationSettings_getInstance().get_debounceTimeout_byl3pt_k$());
  }
  protoOf(ComponentNavigateBackDebounce).get_clickChannel_py75b8_k$ = function () {
    return this.clickChannel_1;
  };
  protoOf(ComponentNavigateBackDebounce).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(ComponentNavigateBackDebounce).navigateDebounceBack_ommi27_k$ = function () {
    this.clickChannel_1.trySend_62dpg8_k$(Unit_getInstance());
  };
  function SetupBackstackDebounceListener_0($this, navHostController, componentNavigateBackDebounce, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-851672988);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(navHostController) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(componentNavigateBackDebounce) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-851672988, $dirty, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener (ComponentNavigationImpl.kt:123)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.startReplaceGroup_5hh8aj_k$(707965788);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.get_graph_is3411_k$().get_startDestinationRoute_9ttmmk_k$();
      var tmp_1 = SetupBackstackDebounceListener$lambda_4(backStackEntry$delegate);
      $composer_0.startReplaceGroup_5hh8aj_k$(707973062);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(707978860);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(componentNavigateBackDebounce) | $composer_0.changed_ga7h3f_k$(backStackEntry$delegate)) | $composer_0.changed_ga7h3f_k$(startRoute)) | $composer_0.changed_ga7h3f_k$(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_2(componentNavigateBackDebounce, startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp2_group, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(ComponentNavigationImpl$SetupBackstackDebounceListener$lambda($this, navHostController, componentNavigateBackDebounce, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SetupBackstackDebounceListener$lambda_4($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.get_value_j01efc_k$();
  }
  function SetupBackstackDebounceListener$lambda_5($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.get_value_j01efc_k$();
  }
  function SetupBackstackDebounceListener$lambda_6($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SetupBackstackDebounceListener$lambda_7($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.get_value_j01efc_k$();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda$lambda($component, this$0) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-414276934, $changed, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ComponentNavigationImpl.kt:56)');
      }
      $component.render_b3syz5_k$(this$0.componentNavigator_87jlcq_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda($components, this$0) {
    return function ($this$NavHost) {
      var tmp0_iterator = $components.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = element.get_route_iy3cio_k$();
        var tmp_0 = element.get_enterTransition_wmetuk_k$();
        var tmp_1 = element.get_exitTransition_4wrgnw_k$();
        var tmp_2 = element.get_popEnterTransition_fberaz_k$();
        var tmp_3 = element.get_popExitTransition_q38wez_k$();
        composable($this$NavHost, tmp, VOID, VOID, tmp_0, tmp_1, tmp_2, tmp_3, VOID, ComposableLambda$invoke$ref_9(composableLambdaInstance(-414276934, true, ComponentNavigationImpl$setupNavHost$lambda$lambda(element, this$0))));
      }
      return Unit_getInstance();
    };
  }
  function ComponentNavigationImpl$setupNavHost$lambda_0($tmp0_rcvr, $components, $startComponent, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.setupNavHost_6w6hex_k$($components, $startComponent, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComponentNavigationImpl$navigate$lambda$lambda($this$popUpTo) {
    $this$popUpTo.set_inclusive_s1r61y_k$(true);
    return Unit_getInstance();
  }
  function ComponentNavigationImpl$navigate$lambda($component) {
    return function ($this$navigate) {
      var tmp = $component.get_route_iy3cio_k$();
      $this$navigate.popUpTo_j2bdir_k$(tmp, ComponentNavigationImpl$navigate$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            SetupBackstackDebounceListener$lambda_6(this.$mayNavigateBack$delegate_1, false);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(GlobalNavigationSettings_getInstance().get_ignoreTimeout_7g0r96_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_6(this.$mayNavigateBack$delegate_1, true);
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
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda(this.$mayNavigateBack$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.$componentNavigateBackDebounce_1 = $componentNavigateBackDebounce;
    this.$startRoute_1 = $startRoute;
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    this.$backStackEntry$delegate_1 = $backStackEntry$delegate;
    this.$currentNavController$delegate_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = ComponentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0(this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, null);
            suspendResult = this.$componentNavigateBackDebounce_1.flow_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1(this.$componentNavigateBackDebounce_1, this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_2($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new ComponentNavigationImpl$SetupBackstackDebounceListener$slambda_1($componentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComponentNavigationImpl$SetupBackstackDebounceListener$lambda($tmp3_rcvr, $navHostController, $componentNavigateBackDebounce, $$changed) {
    return function ($composer, $force) {
      SetupBackstackDebounceListener_0($tmp3_rcvr, $navHostController, $componentNavigateBackDebounce, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComponentNavigationImpl(navController) {
    this.navController_1 = navController;
    this.backDebounce_1 = new ComponentNavigateBackDebounce();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.componentArgsMap_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComponentNavigationImpl).setupNavHost_6w6hex_k$ = function (components, startComponent, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1022325527);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(startComponent) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1022325527, $dirty, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost (ComponentNavigationImpl.kt:39)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_getInstance_0());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_0 = startComponent.get_route_iy3cio_k$();
      $composer_5.startReplaceGroup_5hh8aj_k$(1985532754);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(components) | $composer_0.changedInstance_s1wkiy_k$(this));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.setupNavHost.<anonymous>.<anonymous>' call
        var value = ComponentNavigationImpl$setupNavHost$lambda(components, this);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      NavHost(this.navController_1, tmp_0, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener_0(this, this.navController_1, this.backDebounce_1, $composer_0, 896 & $dirty);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ComponentNavigationImpl$setupNavHost$lambda_0(this, components, startComponent, $changed));
    }
  };
  protoOf(ComponentNavigationImpl).componentNavigator_87jlcq_k$ = function () {
    return this;
  };
  protoOf(ComponentNavigationImpl).backStackEntry_tvqzzs_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1272317528);
    if (isTraceInProgress()) {
      traceEventStart(-1272317528, $changed, -1, 'team.platforma.extra_nav.navigator.component.core.ComponentNavigationImpl.backStackEntry (ComponentNavigationImpl.kt:80)');
    }
    var tmp0 = currentBackStackEntryAsState(this.navController_1, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(ComponentNavigationImpl).navigate_yvkqic_k$ = function (component, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.componentArgsMap_1;
    var tmp0_safe_receiver = this.navController_1.get_currentBackStackEntry_facmv5_k$();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_id_kntnx8_k$();
    this_0.put_4fpzoq_k$(key, args);
    var tmp1_safe_receiver = this.navController_1.get_currentBackStackEntry_facmv5_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_destination_9r3c63_k$();
    var currentDestination = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_route_iy3cio_k$();
    if (!(currentDestination === component.get_route_iy3cio_k$())) {
      var tmp = component.get_route_iy3cio_k$();
      this.navController_1.navigate_n97lsf_k$(tmp, ComponentNavigationImpl$navigate$lambda(component));
    }
  };
  protoOf(ComponentNavigationImpl).args_1sct9_k$ = function () {
    var tmp0_safe_receiver = this.navController_1.get_previousBackStackEntry_51wa9d_k$();
    return this.componentArgsMap_1.get_wei43m_k$(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_id_kntnx8_k$());
  };
  protoOf(ComponentNavigationImpl).navigateBack_np4ixk_k$ = function () {
    this.backDebounce_1.navigateDebounceBack_ommi27_k$();
  };
  protoOf(ComponentNavigationImpl).host_1wrs8_k$ = function () {
    return this.navController_1;
  };
  var team_platforma_extra_nav_navigator_fragment_api_FragmentNavigation$stable;
  function FragmentNavigator() {
  }
  function FragmentNav() {
  }
  var team_platforma_extra_nav_navigator_fragment_core_FragmentNavigationImpl$stable;
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.$startRoute_1 = $startRoute;
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    this.$backStackEntry$delegate_1 = $backStackEntry$delegate;
    this.$currentNavController$delegate_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).invoke_buf84h_k$ = function (it, $completion) {
    var tmp = this.create_owyqcb_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_buf84h_k$(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0;
          var tmp_1;
          if (SetupBackstackDebounceListener$lambda_9(this.$mayNavigateBack$delegate_1)) {
            var tmp0_safe_receiver = SetupBackstackDebounceListener$lambda_8(this.$backStackEntry$delegate_1);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
            tmp_1 = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_route_iy3cio_k$()) == null);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            var tmp2_safe_receiver = SetupBackstackDebounceListener$lambda_8(this.$backStackEntry$delegate_1);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_destination_9r3c63_k$();
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_route_iy3cio_k$()) == this.$startRoute_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            SetupBackstackDebounceListener$lambda_10(this.$mayNavigateBack$delegate_1, false);
            SetupBackstackDebounceListener$lambda_11(this.$currentNavController$delegate_1).navigateUp_uszbak_k$();
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
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).create_owyqcb_k$ = function (it, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda(this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_owyqcb_k$(value instanceof Unit ? value : THROW_CCE(), completion);
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda($startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_buf84h_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_navController__5xcbrm_1($this) {
    return $this.navController_1;
  }
  function _get_backDebounce__g6fh8b_0($this) {
    return $this.backDebounce_1;
  }
  function _get_fragmentArgsMap__eyftge($this) {
    return $this.fragmentArgsMap_1;
  }
  function FragmentNavigateBackDebounce() {
    this.clickChannel_1 = Channel(-1);
    this.flow_1 = debounce(receiveAsFlow(this.clickChannel_1), GlobalNavigationSettings_getInstance().get_debounceTimeout_byl3pt_k$());
  }
  protoOf(FragmentNavigateBackDebounce).get_clickChannel_py75b8_k$ = function () {
    return this.clickChannel_1;
  };
  protoOf(FragmentNavigateBackDebounce).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(FragmentNavigateBackDebounce).navigateDebounceBack_ommi27_k$ = function () {
    this.clickChannel_1.trySend_62dpg8_k$(Unit_getInstance());
  };
  function SetupBackstackDebounceListener_1($this, navHostController, fragmentNavigateBackDebounce, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1980077648);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(navHostController) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(fragmentNavigateBackDebounce) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1980077648, $dirty, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener (FragmentNavigationImpl.kt:111)');
      }
      var backStackEntry$delegate = currentBackStackEntryAsState(navHostController, $composer_0, 14 & $dirty);
      $composer_0.startReplaceGroup_5hh8aj_k$(-482805414);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mayNavigateBack$delegate = tmp0_group;
      var currentNavController$delegate = rememberUpdatedState(navHostController, $composer_0, 14 & $dirty);
      var startRoute = navHostController.get_graph_is3411_k$().get_startDestinationRoute_9ttmmk_k$();
      var tmp_1 = SetupBackstackDebounceListener$lambda_8(backStackEntry$delegate);
      $composer_0.startReplaceGroup_5hh8aj_k$(-482798076);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_0 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_0(mayNavigateBack$delegate, null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(tmp_1, tmp1_group, $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-482792279);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(fragmentNavigateBackDebounce) | $composer_0.changed_ga7h3f_k$(backStackEntry$delegate)) | $composer_0.changed_ga7h3f_k$(startRoute)) | $composer_0.changed_ga7h3f_k$(currentNavController$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.SetupBackstackDebounceListener.<anonymous>' call
        var value_1 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_2(fragmentNavigateBackDebounce, startRoute, mayNavigateBack$delegate, backStackEntry$delegate, currentNavController$delegate, null);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp2_group, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(FragmentNavigationImpl$SetupBackstackDebounceListener$lambda($this, navHostController, fragmentNavigateBackDebounce, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SetupBackstackDebounceListener$lambda_8($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.get_value_j01efc_k$();
  }
  function SetupBackstackDebounceListener$lambda_9($mayNavigateBack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mayNavigateBack$delegate.get_value_j01efc_k$();
  }
  function SetupBackstackDebounceListener$lambda_10($mayNavigateBack$delegate, _set____db54di) {
    getLocalDelegateReference('mayNavigateBack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mayNavigateBack$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SetupBackstackDebounceListener$lambda_11($currentNavController$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentNavController', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentNavController$delegate.get_value_j01efc_k$();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda$lambda($fragment, $componentNavigator, this$0) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-726059331, $changed, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (FragmentNavigationImpl.kt:57)');
      }
      $fragment.get_fragmentBox_zhtixa_k$()($componentNavigator, this$0.fragmentNavigator_tcb2lj_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda($fragments, $componentNavigator, this$0) {
    return function ($this$NavHost) {
      var tmp0_iterator = $fragments.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = element.get_route_iy3cio_k$();
        var tmp_0 = element.get_enterTransition_wmetuk_k$();
        var tmp_1 = element.get_exitTransition_4wrgnw_k$();
        var tmp_2 = element.get_popEnterTransition_fberaz_k$();
        var tmp_3 = element.get_popExitTransition_q38wez_k$();
        composable($this$NavHost, tmp, VOID, VOID, tmp_0, tmp_1, tmp_2, tmp_3, VOID, ComposableLambda$invoke$ref_10(composableLambdaInstance(-726059331, true, FragmentNavigationImpl$setupNavHost$lambda$lambda(element, $componentNavigator, this$0))));
      }
      return Unit_getInstance();
    };
  }
  function FragmentNavigationImpl$setupNavHost$lambda_0($tmp0_rcvr, $fragments, $startFragment, $componentNavigator, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.setupNavHost_xjzjbx_k$($fragments, $startFragment._v, $componentNavigator, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation) {
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            SetupBackstackDebounceListener$lambda_10(this.$mayNavigateBack$delegate_1, false);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(GlobalNavigationSettings_getInstance().get_ignoreTimeout_7g0r96_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            SetupBackstackDebounceListener$lambda_10(this.$mayNavigateBack$delegate_1, true);
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
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda(this.$mayNavigateBack$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_0($mayNavigateBack$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda($mayNavigateBack$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    this.$fragmentNavigateBackDebounce_1 = $fragmentNavigateBackDebounce;
    this.$startRoute_1 = $startRoute;
    this.$mayNavigateBack$delegate_1 = $mayNavigateBack$delegate;
    this.$backStackEntry$delegate_1 = $backStackEntry$delegate;
    this.$currentNavController$delegate_1 = $currentNavController$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = FragmentNavigationImpl$SetupBackstackDebounceListener$slambda$slambda_0(this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, null);
            suspendResult = this.$fragmentNavigateBackDebounce_1.flow_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1(this.$fragmentNavigateBackDebounce_1, this.$startRoute_1, this.$mayNavigateBack$delegate_1, this.$backStackEntry$delegate_1, this.$currentNavController$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_2($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation) {
    var i = new FragmentNavigationImpl$SetupBackstackDebounceListener$slambda_1($fragmentNavigateBackDebounce, $startRoute, $mayNavigateBack$delegate, $backStackEntry$delegate, $currentNavController$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FragmentNavigationImpl$SetupBackstackDebounceListener$lambda($tmp3_rcvr, $navHostController, $fragmentNavigateBackDebounce, $$changed) {
    return function ($composer, $force) {
      SetupBackstackDebounceListener_1($tmp3_rcvr, $navHostController, $fragmentNavigateBackDebounce, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FragmentNavigationImpl(navController) {
    this.navController_1 = navController;
    this.backDebounce_1 = new FragmentNavigateBackDebounce();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.fragmentArgsMap_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(FragmentNavigationImpl).setupNavHost_xjzjbx_k$ = function (fragments, startFragment, componentNavigator, $composer, $changed, $default) {
    var startFragment_0 = {_v: startFragment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-906629067);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(fragments) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.changedInstance_s1wkiy_k$(startFragment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(componentNavigator) : $composer_0.changedInstance_s1wkiy_k$(componentNavigator)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          startFragment_0._v = first(fragments);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-906629067, $dirty, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost (FragmentNavigationImpl.kt:41)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_getInstance_0());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_0 = startFragment_0._v.get_route_iy3cio_k$();
      $composer_5.startReplaceGroup_5hh8aj_k$(1797180120);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changedInstance_s1wkiy_k$(fragments) | (($dirty & 896) === 256 || (!(($dirty & 512) === 0) && $composer_0.changedInstance_s1wkiy_k$(componentNavigator)))) | $composer_0.changedInstance_s1wkiy_k$(this));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.setupNavHost.<anonymous>.<anonymous>' call
        var value = FragmentNavigationImpl$setupNavHost$lambda(fragments, componentNavigator, this);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      NavHost(this.navController_1, tmp_0, null, null, null, null, null, null, null, null, tmp0_group, $composer_5, 0, 0, 1020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      SetupBackstackDebounceListener_1(this, this.navController_1, this.backDebounce_1, $composer_0, 896 & $dirty >> 3);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(FragmentNavigationImpl$setupNavHost$lambda_0(this, fragments, startFragment_0, componentNavigator, $changed, $default));
    }
  };
  protoOf(FragmentNavigationImpl).fragmentNavigator_tcb2lj_k$ = function () {
    return this;
  };
  protoOf(FragmentNavigationImpl).navigate_tpplha_k$ = function (fragment, args) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.fragmentArgsMap_1;
    var tmp0_safe_receiver = this.navController_1.get_currentBackStackEntry_facmv5_k$();
    var key = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_id_kntnx8_k$();
    this_0.put_4fpzoq_k$(key, args);
    this.navController_1.navigate$default_m3ygrg_k$(fragment.get_route_iy3cio_k$());
  };
  protoOf(FragmentNavigationImpl).args_1sct9_k$ = function () {
    var tmp0_safe_receiver = this.navController_1.get_previousBackStackEntry_51wa9d_k$();
    return this.fragmentArgsMap_1.get_wei43m_k$(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_id_kntnx8_k$());
  };
  protoOf(FragmentNavigationImpl).backStackEntry_tvqzzs_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1129868739);
    if (isTraceInProgress()) {
      traceEventStart(-1129868739, $changed, -1, 'team.platforma.extra_nav.navigator.fragment.core.FragmentNavigationImpl.backStackEntry (FragmentNavigationImpl.kt:89)');
    }
    var tmp0 = currentBackStackEntryAsState(this.navController_1, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(FragmentNavigationImpl).navigateBack_np4ixk_k$ = function () {
    this.backDebounce_1.navigateDebounceBack_ommi27_k$();
  };
  function SimpleBottomNavigationBar(components, componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1550966436);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(components) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(componentNavigator) : $composer_0.changedInstance_s1wkiy_k$(componentNavigator)) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1550966436, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar (SimpleBottomNavigation.kt:33)');
      }
      var backStackEntry$delegate = componentNavigator.backStackEntry_tvqzzs_k$($composer_0, 14 & $dirty >> 3);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1360940321, true, SimpleBottomNavigationBar$lambda_0(components, componentNavigator, backStackEntry$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SimpleBottomNavigationBar$lambda_1(components, componentNavigator, $changed));
    }
  }
  function StandardBottomNavigationBar(modifier, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-829334370);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(-829334370, $dirty, -1, 'team.platforma.extra_nav.ui.StandardBottomNavigationBar (SimpleBottomNavigation.kt:56)');
      }
      var tmp0_color = SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_0, 0).get_background_8l4942_k$();
      var tmp1_contentColor = Companion_getInstance_3().get_Transparent_if5ln4_k$();
      var tmp2_modifier = clip(padding_0(insertBottomPadding(modifier_0._v, SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_0, 0).get_insertBottomPadding_l1tet8_k$(), $composer_0, 14 & $dirty), SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_0, 0).get_horizontalMargin_e3t71k_k$(), SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_0, 0).get_verticalMargin_cju1wq_k$()), SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_0, 0).get_shape_iyi9a0_k$());
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
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(StandardBottomNavigationBar$lambda_0(modifier_0, content, $changed, $default));
    }
  }
  function NavigationBarItem(_this__u8e3s4, modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(19819258);
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(icon) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(19819258, $dirty, -1, 'team.platforma.extra_nav.ui.NavigationBarItem (SimpleBottomNavigation.kt:109)');
      }
      var tmp0_modifier = clickable(_this__u8e3s4.weight$default_yewrvp_k$(clip(modifier_0._v, SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_0, 0).get_shape_iyi9a0_k$()), 1.0), VOID, VOID, VOID, onClick);
      var tmp1_horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = tmp.spacedBy_wt7oji_k$(tmp$ret$0);
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavigationBarItem.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_getInstance_0(), SimpleNavigationStyle_getInstance().iconSize_ekvemc_k$($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavigationBarItem.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 15 | 112 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp0_style = SimpleNavigationStyle_getInstance().labelStyle_5ixvlw_k$($composer_5, 0);
      var tmp_2;
      if (selected) {
        $composer_5.startReplaceGroup_5hh8aj_k$(1333886192);
        var tmp0_group = SimpleNavigationStyle_getInstance().labelFontWeight_urz0gy_k$($composer_5, 0).get_selected_c3i7q4_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp0_group;
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(1333971473);
        var tmp1_group = SimpleNavigationStyle_getInstance().labelFontWeight_urz0gy_k$($composer_5, 0).get_default_qtagd4_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_2;
      var tmp_3;
      if (selected) {
        $composer_5.startReplaceGroup_5hh8aj_k$(1334085646);
        var tmp2_group = SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_5, 0).get_selectedLabel_2gxmf_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_3 = tmp2_group;
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(1334172911);
        var tmp3_group = SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_5, 0).get_defaultLabel_clic3h_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_3 = tmp3_group;
      }
      var tmp2_color = tmp_3;
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_4, null, tmp1_fontWeight, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 9, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavigationBarItem$lambda(_this__u8e3s4, modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function insertBottomPadding(_this__u8e3s4, boolean, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1096510681);
    if (isTraceInProgress()) {
      traceEventStart(1096510681, $changed, -1, 'team.platforma.extra_nav.ui.insertBottomPadding (SimpleBottomNavigation.kt:94)');
    }
    var tmp;
    if (boolean) {
      tmp = windowInsetsPadding(_this__u8e3s4, BottomAppBarDefaults_getInstance().get_windowInsets_ypqhmy_k$($composer_0, 0));
    } else {
      tmp = _this__u8e3s4;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function SimpleBottomNavigationBar$lambda($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.get_value_j01efc_k$();
  }
  function SimpleBottomNavigationBar$lambda$lambda($componentNavigator, $component) {
    return function () {
      $componentNavigator.navigate$default_1xd8te_k$($component);
      return Unit_getInstance();
    };
  }
  function SimpleBottomNavigationBar$lambda_0($components, $componentNavigator, $backStackEntry$delegate) {
    return function ($this$StandardBottomNavigationBar, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$StandardBottomNavigationBar) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1360940321, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous> (SimpleBottomNavigation.kt:38)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $components.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = element.get_icon_wont8i_k$();
          $composer_0.startReplaceGroup_5hh8aj_k$(645955587);
          var tmp0_group = !(element.get_label_iuj8p7_k$() == null) ? stringResource(element.get_label_iuj8p7_k$(), $composer_0, 0) : element.get_route_iy3cio_k$();
          $composer_0.endReplaceGroup_ek144q_k$();
          $composer_0.startReplaceGroup_5hh8aj_k$(-1529056097);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.changedInstance_s1wkiy_k$($componentNavigator) | $composer_0.changedInstance_s1wkiy_k$(element));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_2;
          if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = SimpleBottomNavigationBar$lambda$lambda($componentNavigator, element);
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp0_safe_receiver = SimpleBottomNavigationBar$lambda($backStackEntry$delegate);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
          NavigationBarItem($this$StandardBottomNavigationBar, null, tmp_1, tmp0_group, tmp1_group, (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_route_iy3cio_k$()) === element.get_route_iy3cio_k$(), $composer_0, 14 & $dirty, 1);
        }
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SimpleBottomNavigationBar$lambda_1($components, $componentNavigator, $$changed) {
    return function ($composer, $force) {
      SimpleBottomNavigationBar($components, $componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function StandardBottomNavigationBar$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
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
          modifier = Companion_getInstance_0();
        if (!((7 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((7 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance_0();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>' call
        ColumnScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_5, 0).get_horizontalDivider_jlflws_k$()($composer_5, 0);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_1 = selectableGroup(heightIn(fillMaxWidth(padding_0(Companion_getInstance_0(), SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_5, 0).get_horizontalPadding_ohbbwh_k$(), SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_5, 0).get_verticalPadding_1j0ma9_k$())), SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_5, 0).get_height_nxe2r7_k$()));
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier_1 = Companion_getInstance_0();
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 384 >> 3 | 112 & 384 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_getInstance_0();
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jjgeyp_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_ahrd54_k$(factory_0);
        } else {
          $composer_8.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
          $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_getInstance(), $composer_9, 6 | 112 & 384 >> 6);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        $composer_5.startReplaceGroup_5hh8aj_k$(2105194983);
        if (!SimpleNavigationStyle_getInstance().bottomNavStyle_jogzb4_k$($composer_5, 0).get_insertBottomPadding_l1tet8_k$()) {
          var tmp_2 = Companion_getInstance_0();
          $composer_5.startReplaceGroup_5hh8aj_k$(2105199569);
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var this_0 = get_LocalDensity();
          var $composer_10 = $composer_5;
          sourceInformationMarkerStart($composer_10, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_10.consume_ebzcrh_k$(this_0);
          sourceInformationMarkerEnd($composer_10);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'team.platforma.extra_nav.ui.StandardBottomNavigationBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_group = tmp0.toDp_fjakf4_k$(BottomAppBarDefaults_getInstance().get_windowInsets_ypqhmy_k$($composer_5, 0).getBottom_4od39h_k$(tmp0));
          $composer_5.endReplaceGroup_ek144q_k$();
          Box(height(tmp_2, tmp0_group), $composer_5, 0);
        }
        $composer_5.endReplaceGroup_ek144q_k$();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function StandardBottomNavigationBar$lambda_0($modifier, $content, $$changed, $$default) {
    return function ($composer, $force) {
      StandardBottomNavigationBar($modifier._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NavigationBarItem$lambda($this_NavigationBarItem, $modifier, $icon, $label, $onClick, $selected, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationBarItem($this_NavigationBarItem, $modifier._v, $icon, $label, $onClick, $selected, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SimpleNavIcon(selected, resource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1364812431);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(resource) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1364812431, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleNavIcon (SimpleNavIcon.kt:13)');
      }
      var tmp0_painter = painterResource(resource, $composer_0, 14 & $dirty >> 3);
      var tmp1_contentScale = Companion_getInstance_4().get_Crop_wnzuux_k$();
      var tmp;
      if (selected) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-2109029588);
        var tmp0_group = Companion_getInstance_5().tint$default_jnxvki_k$(SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_0, 0).get_selectedIcon_ykgyl8_k$());
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp = tmp0_group;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-2108933395);
        var tmp1_group = Companion_getInstance_5().tint$default_jnxvki_k$(SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_0, 0).get_defaultIcon_ffjm8o_k$());
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp = tmp1_group;
      }
      var tmp2_colorFilter = tmp;
      var tmp3_modifier = fillMaxSize(Companion_getInstance_0());
      Image(tmp0_painter, null, tmp3_modifier, null, tmp1_contentScale, 0.0, tmp2_colorFilter, $composer_0, 25008, 40);
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(SimpleNavIcon$lambda(selected, resource, $changed));
    }
  }
  function SimpleNavIcon$lambda($selected, $resource, $$changed) {
    return function ($composer, $force) {
      SimpleNavIcon($selected, $resource, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SimpleNavigationRail(components, componentNavigator, mobile, $composer, $changed, $default) {
    var mobile_0 = {_v: mobile};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1477788285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(components) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(componentNavigator) : $composer_0.changedInstance_s1wkiy_k$(componentNavigator)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(mobile_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        mobile_0._v = true;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1477788285, $dirty, -1, 'team.platforma.extra_nav.ui.SimpleNavigationRail (SimpleNavigationRail.kt:35)');
      }
      var backStackEntry$delegate = componentNavigator.backStackEntry_tvqzzs_k$($composer_0, 14 & $dirty >> 3);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp0_$receiver = fillMaxHeight(Companion_getInstance_0());
      var tmp1_vertical = SimpleNavigationStyle_getInstance().navRailStyle_9csh0j_k$($composer_0, 0).get_verticalMargin_cju1wq_k$();
      var tmp2_horizontal = SimpleNavigationStyle_getInstance().navRailStyle_9csh0j_k$($composer_0, 0).get_horizontalMargin_e3t71k_k$();
      var modifier = padding_0(tmp0_$receiver, tmp2_horizontal, tmp1_vertical);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = wrapContentWidth(fillMaxHeight(background(clip(Companion_getInstance_0(), SimpleNavigationStyle_getInstance().navRailStyle_9csh0j_k$($composer_5, 0).get_shape_iyi9a0_k$()), SimpleNavigationStyle_getInstance().navRailStyle_9csh0j_k$($composer_5, 0).get_background_8l4942_k$())));
      var horizontalArrangement = null;
      var verticalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((6 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>' call
      RowScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      var tmp0_modifier = wrapContentWidth(fillMaxHeight(Companion_getInstance_0()));
      var tmp1_horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(8);
      var tmp2_contentPadding = PaddingValues(VOID, tmp$ret$4);
      $composer_10.startReplaceGroup_5hh8aj_k$(-1326188789);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(components) | ($dirty & 896) === 256) | (($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.changedInstance_s1wkiy_k$(componentNavigator)))) | $composer_0.changed_ga7h3f_k$(backStackEntry$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>' call
        var value = SimpleNavigationRail$lambda_0(components, mobile_0, componentNavigator, backStackEntry$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_10.endReplaceGroup_ek144q_k$();
      LazyColumn(tmp0_modifier, null, tmp2_contentPadding, false, null, tmp1_horizontalAlignment, null, false, tmp0_group, $composer_10, 196998, 218);
      SimpleNavigationStyle_getInstance().navRailStyle_9csh0j_k$($composer_10, 0).get_verticalDivider_7q2ehm_k$()($composer_10, 0);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SimpleNavigationRail$lambda_1(components, componentNavigator, mobile_0, $changed, $default));
    }
  }
  function NavRailItemMobile(modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1204497667);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(icon) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(1204497667, $dirty, -1, 'team.platforma.extra_nav.ui.NavRailItemMobile (SimpleNavigationRail.kt:98)');
      }
      var tmp0_modifier = clickable(clip(modifier_0._v, SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_0, 0).get_shape_iyi9a0_k$()), VOID, VOID, VOID, onClick);
      var tmp1_horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = tmp.spacedBy_wt7oji_k$(tmp$ret$0);
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemMobile.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_getInstance_0(), SimpleNavigationStyle_getInstance().iconSize_ekvemc_k$($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemMobile.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 12 | 112 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp0_style = SimpleNavigationStyle_getInstance().labelStyle_5ixvlw_k$($composer_5, 0);
      var tmp_2;
      if (selected) {
        $composer_5.startReplaceGroup_5hh8aj_k$(729489624);
        var tmp0_group = SimpleNavigationStyle_getInstance().labelFontWeight_urz0gy_k$($composer_5, 0).get_selected_c3i7q4_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp0_group;
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(729574905);
        var tmp1_group = SimpleNavigationStyle_getInstance().labelFontWeight_urz0gy_k$($composer_5, 0).get_default_qtagd4_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_2;
      var tmp_3;
      if (selected) {
        $composer_5.startReplaceGroup_5hh8aj_k$(729689078);
        var tmp2_group = SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_5, 0).get_selectedLabel_2gxmf_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_3 = tmp2_group;
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(729776343);
        var tmp3_group = SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_5, 0).get_defaultLabel_clic3h_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_3 = tmp3_group;
      }
      var tmp2_color = tmp_3;
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_4, null, tmp1_fontWeight, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 6, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavRailItemMobile$lambda(modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function NavRailItemDesktop(modifier, icon, label, onClick, selected, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-999866551);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(icon) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
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
      var tmp0_modifier = clickable(clip(width(tmp_0, tmp$ret$1), SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_0, 0).get_shape_iyi9a0_k$()), VOID, VOID, VOID, onClick);
      var tmp1_verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = tmp0_modifier;
      var horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      var verticalAlignment = tmp1_verticalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemDesktop.<anonymous>' call
      RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = size(Companion_getInstance_0(), SimpleNavigationStyle_getInstance().iconSize_ekvemc_k$($composer_5, 0));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.extra_nav.ui.NavRailItemDesktop.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      icon(selected, $composer_10, 14 & $dirty >> 12 | 112 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_3 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$6 = _Dp___init__impl__ms3zkb(4);
      Spacer(width(tmp_3, tmp$ret$6), $composer_5, 6);
      var tmp0_style = SimpleNavigationStyle_getInstance().labelStyle_5ixvlw_k$($composer_5, 0);
      var tmp_4;
      if (selected) {
        $composer_5.startReplaceGroup_5hh8aj_k$(-1040609744);
        var tmp0_group = SimpleNavigationStyle_getInstance().labelFontWeight_urz0gy_k$($composer_5, 0).get_selected_c3i7q4_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_4 = tmp0_group;
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(-1040524463);
        var tmp1_group = SimpleNavigationStyle_getInstance().labelFontWeight_urz0gy_k$($composer_5, 0).get_default_qtagd4_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_4 = tmp1_group;
      }
      var tmp1_fontWeight = tmp_4;
      var tmp_5;
      if (selected) {
        $composer_5.startReplaceGroup_5hh8aj_k$(-1040410290);
        var tmp2_group = SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_5, 0).get_selectedLabel_2gxmf_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_5 = tmp2_group;
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(-1040323025);
        var tmp3_group = SimpleNavigationStyle_getInstance().navItemStyle_xn4y72_k$($composer_5, 0).get_defaultLabel_clic3h_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
        tmp_5 = tmp3_group;
      }
      var tmp2_color = tmp_5;
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp2_color, tmp_6, null, tmp1_fontWeight, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, tmp0_style, $composer_5, 14 & $dirty >> 6, 0, 65498);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavRailItemDesktop$lambda(modifier_0, icon, label, onClick, selected, $changed, $default));
    }
  }
  function SimpleNavigationRail$lambda($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.get_value_j01efc_k$();
  }
  function SimpleNavigationRail$lambda$lambda(it) {
    return null;
  }
  function SimpleNavigationRail$lambda$lambda_0($key, $items) {
    return function (index) {
      return $key($items.get_c1px32_k$(index));
    };
  }
  function SimpleNavigationRail$lambda$lambda_1($contentType, $items) {
    return function (index) {
      return $contentType($items.get_c1px32_k$(index));
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function SimpleNavigationRail$lambda$lambda$lambda($componentNavigator, $item) {
    return function () {
      $componentNavigator.navigate$default_1xd8te_k$($item);
      return Unit_getInstance();
    };
  }
  function SimpleNavigationRail$lambda$lambda$lambda_0($componentNavigator, $item) {
    return function () {
      $componentNavigator.navigate$default_1xd8te_k$($item);
      return Unit_getInstance();
    };
  }
  function SimpleNavigationRail$lambda$lambda_2($items, $mobile, $componentNavigator, $backStackEntry$delegate) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C152@7074L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 48) === 0) {
        $dirty = $dirty | ($composer_0.changed_kpusro_k$(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-632812321, $dirty, -1, 'androidx.compose.foundation.lazy.items.<anonymous> (LazyDsl.kt:152)');
        }
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var item = $items.get_c1px32_k$(it);
        var $composer_1 = $composer_0;
        $composer_1.startReplaceGroup_5hh8aj_k$(-1354778147);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp0_$receiver = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp1_vertical = _Dp___init__impl__ms3zkb(4);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp2_horizontal = _Dp___init__impl__ms3zkb(8);
        var modifier = padding_0(tmp0_$receiver, tmp2_horizontal, tmp1_vertical);
        var contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        var propagateMinConstraints = false;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance_0();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_3, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_4.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_4.startReusableNode_jjgeyp_k$();
        if ($composer_4.get_inserting_25mlsw_k$()) {
          $composer_4.createNode_ahrd54_k$(factory);
        } else {
          $composer_4.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_6 = $composer_5;
        if ($mobile._v) {
          $composer_6.startReplaceGroup_5hh8aj_k$(76055818);
          var tmp_3 = item.get_icon_wont8i_k$();
          $composer_6.startReplaceGroup_5hh8aj_k$(-1521563229);
          var tmp0_group = !(item.get_label_iuj8p7_k$() == null) ? stringResource(item.get_label_iuj8p7_k$(), $composer_6, 0) : item.get_route_iy3cio_k$();
          $composer_6.endReplaceGroup_ek144q_k$();
          $composer_6.startReplaceGroup_5hh8aj_k$(-1521559670);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_6.changedInstance_s1wkiy_k$($componentNavigator) | $composer_6.changedInstance_s1wkiy_k$(item));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_6.rememberedValue_4dg93v_k$();
          var tmp_4;
          if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = SimpleNavigationRail$lambda$lambda$lambda($componentNavigator, item);
            $composer_6.updateRememberedValue_l1wh71_k$(value);
            tmp_4 = value;
          } else {
            tmp_4 = it_0;
          }
          var tmp_5 = tmp_4;
          var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_6.endReplaceGroup_ek144q_k$();
          var tmp0_safe_receiver = SimpleNavigationRail$lambda($backStackEntry$delegate);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_destination_9r3c63_k$();
          NavRailItemMobile(null, tmp_3, tmp0_group, tmp1_group, (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_route_iy3cio_k$()) === item.get_route_iy3cio_k$(), $composer_6, 0, 1);
          $composer_6.endReplaceGroup_ek144q_k$();
        } else {
          $composer_6.startReplaceGroup_5hh8aj_k$(76560777);
          var tmp_6 = item.get_icon_wont8i_k$();
          $composer_6.startReplaceGroup_5hh8aj_k$(-1521546909);
          var tmp2_group = !(item.get_label_iuj8p7_k$() == null) ? stringResource(item.get_label_iuj8p7_k$(), $composer_6, 0) : item.get_route_iy3cio_k$();
          $composer_6.endReplaceGroup_ek144q_k$();
          $composer_6.startReplaceGroup_5hh8aj_k$(-1521543350);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_6.changedInstance_s1wkiy_k$($componentNavigator) | $composer_6.changedInstance_s1wkiy_k$(item));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_6.rememberedValue_4dg93v_k$();
          var tmp_7;
          if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'team.platforma.extra_nav.ui.SimpleNavigationRail.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = SimpleNavigationRail$lambda$lambda$lambda_0($componentNavigator, item);
            $composer_6.updateRememberedValue_l1wh71_k$(value_0);
            tmp_7 = value_0;
          } else {
            tmp_7 = it_1;
          }
          var tmp_8 = tmp_7;
          var tmp3_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          $composer_6.endReplaceGroup_ek144q_k$();
          var tmp2_safe_receiver = SimpleNavigationRail$lambda($backStackEntry$delegate);
          var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_destination_9r3c63_k$();
          NavRailItemDesktop(null, tmp_6, tmp2_group, tmp3_group, (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_route_iy3cio_k$()) === item.get_route_iy3cio_k$(), $composer_6, 0, 1);
          $composer_6.endReplaceGroup_ek144q_k$();
        }
        sourceInformationMarkerEnd($composer_5);
        $composer_4.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.endReplaceGroup_ek144q_k$();
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp_1 = tmp_9;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SimpleNavigationRail$lambda_0($components, $mobile, $componentNavigator, $backStackEntry$delegate) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.items' call
      var items = $components;
      var contentType = SimpleNavigationRail$lambda$lambda;
      var tmp = items.get_size_woubt6_k$();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = SimpleNavigationRail$lambda$lambda_0(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = SimpleNavigationRail$lambda$lambda_1(contentType, items);
      $this$LazyColumn.items_m6orkv_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_13(composableLambdaInstance(-632812321, true, SimpleNavigationRail$lambda$lambda_2(items, $mobile, $componentNavigator, $backStackEntry$delegate))));
      return Unit_getInstance();
    };
  }
  function SimpleNavigationRail$lambda_1($components, $componentNavigator, $mobile, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleNavigationRail($components, $componentNavigator, $mobile._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NavRailItemMobile$lambda($modifier, $icon, $label, $onClick, $selected, $$changed, $$default) {
    return function ($composer, $force) {
      NavRailItemMobile($modifier._v, $icon, $label, $onClick, $selected, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NavRailItemDesktop$lambda($modifier, $icon, $label, $onClick, $selected, $$changed, $$default) {
    return function ($composer, $force) {
      NavRailItemDesktop($modifier._v, $icon, $label, $onClick, $selected, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stable;
  var team_platforma_extra_nav_ui_style_NavigationStyle$stable;
  var team_platforma_extra_nav_ui_style_NavigationItemStyle$stable;
  var team_platforma_extra_nav_ui_style_LabelFontWeight$stable;
  function _set_mBottomNavStyle__cbkr8f($this, _set____db54di) {
    $this.mBottomNavStyle_1 = _set____db54di;
  }
  function _get_mBottomNavStyle__mfayqz($this) {
    return $this.mBottomNavStyle_1;
  }
  function _set_mNavRailStyle__okvtvo($this, _set____db54di) {
    $this.mNavRailStyle_1 = _set____db54di;
  }
  function _get_mNavRailStyle__v8gpl4($this) {
    return $this.mNavRailStyle_1;
  }
  function _set_mNavItemStyle__om3o03($this, _set____db54di) {
    $this.mNavItemStyle_1 = _set____db54di;
  }
  function _get_mNavItemStyle__v78vgp($this) {
    return $this.mNavItemStyle_1;
  }
  function _set_mIconSize__uyte66($this, _set____db54di) {
    $this.mIconSize_1 = _set____db54di;
  }
  function _get_mIconSize__arg7ee($this) {
    return $this.mIconSize_1;
  }
  function _set_mLabelTextStyle__hrpswo($this, _set____db54di) {
    $this.mLabelTextStyle_1 = _set____db54di;
  }
  function _get_mLabelTextStyle__7nzle4($this) {
    return $this.mLabelTextStyle_1;
  }
  function _set_mLabelFontWeight__u4dud3($this, _set____db54di) {
    $this.mLabelFontWeight_1 = _set____db54di;
  }
  function _get_mLabelFontWeight__119lab($this) {
    return $this.mLabelFontWeight_1;
  }
  function SimpleNavigationStyle$define$lambda($tmp0_rcvr, $bottomNavStyle, $navRailStyle, $navigationItemStyle, $iconSize, $labelStyle, $labelFontWeight, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.define_yy5nc9_k$($bottomNavStyle._v, $navRailStyle._v, $navigationItemStyle._v, $iconSize._v.value_1, $labelStyle._v, $labelFontWeight._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SimpleNavigationStyle() {
    SimpleNavigationStyle_instance = this;
    this.mBottomNavStyle_1 = new NavigationStyle();
    this.mNavRailStyle_1 = new NavigationStyle();
    this.mNavItemStyle_1 = new NavigationItemStyle();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.mIconSize_1 = _Dp___init__impl__ms3zkb(24);
    this.mLabelTextStyle_1 = null;
    this.mLabelFontWeight_1 = new LabelFontWeight(Companion_getInstance_6().get_SemiBold_aid1c4_k$(), Companion_getInstance_6().get_Normal_22avww_k$());
  }
  protoOf(SimpleNavigationStyle).define_yy5nc9_k$ = function (bottomNavStyle, navRailStyle, navigationItemStyle, iconSize, labelStyle, labelFontWeight, $composer, $changed, $default) {
    var bottomNavStyle_0 = {_v: bottomNavStyle};
    var navRailStyle_0 = {_v: navRailStyle};
    var navigationItemStyle_0 = {_v: navigationItemStyle};
    var iconSize_0 = {_v: new Dp(iconSize)};
    var labelStyle_0 = {_v: labelStyle};
    var labelFontWeight_0 = {_v: labelFontWeight};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-221248638);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.changedInstance_s1wkiy_k$(bottomNavStyle_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.changedInstance_s1wkiy_k$(navRailStyle_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.changedInstance_s1wkiy_k$(navigationItemStyle_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(iconSize_0._v.value_1)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.changed_ga7h3f_k$(labelStyle_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.changedInstance_s1wkiy_k$(labelFontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
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
          labelStyle_0._v = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_0, 0).get_bodyMedium_psz2kg_k$();
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          labelFontWeight_0._v = new LabelFontWeight();
          $dirty = $dirty & -458753;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
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
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-221248638, $dirty, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.define (SimpleNavigationStyle.kt:38)');
      }
      this.mBottomNavStyle_1 = bottomNavStyle_0._v;
      this.mNavRailStyle_1 = navRailStyle_0._v;
      this.mNavItemStyle_1 = navigationItemStyle_0._v;
      this.mIconSize_1 = iconSize_0._v.value_1;
      this.mLabelTextStyle_1 = labelStyle_0._v;
      this.mLabelFontWeight_1 = labelFontWeight_0._v;
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(SimpleNavigationStyle$define$lambda(this, bottomNavStyle_0, navRailStyle_0, navigationItemStyle_0, iconSize_0, labelStyle_0, labelFontWeight_0, $changed, $default));
    }
  };
  protoOf(SimpleNavigationStyle).bottomNavStyle_jogzb4_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-456201860);
    if (isTraceInProgress()) {
      traceEventStart(-456201860, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.bottomNavStyle (SimpleNavigationStyle.kt:48)');
    }
    var tmp0 = this.mBottomNavStyle_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).navRailStyle_9csh0j_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1906768537);
    if (isTraceInProgress()) {
      traceEventStart(1906768537, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.navRailStyle (SimpleNavigationStyle.kt:53)');
    }
    var tmp0 = this.mNavRailStyle_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).navItemStyle_xn4y72_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(238428935);
    if (isTraceInProgress()) {
      traceEventStart(238428935, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.navItemStyle (SimpleNavigationStyle.kt:58)');
    }
    var tmp0 = this.mNavItemStyle_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).iconSize_ekvemc_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-580101220);
    if (isTraceInProgress()) {
      traceEventStart(-580101220, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.iconSize (SimpleNavigationStyle.kt:63)');
    }
    var tmp0 = this.mIconSize_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).labelStyle_5ixvlw_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(341457151);
    if (isTraceInProgress()) {
      traceEventStart(341457151, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.labelStyle (SimpleNavigationStyle.kt:68)');
    }
    var global = this.mLabelTextStyle_1;
    var default_0 = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_0, 0).get_bodyMedium_psz2kg_k$();
    var tmp0 = global == null ? default_0 : global;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(SimpleNavigationStyle).labelFontWeight_urz0gy_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(761251380);
    if (isTraceInProgress()) {
      traceEventStart(761251380, $changed, -1, 'team.platforma.extra_nav.ui.style.SimpleNavigationStyle.labelFontWeight (SimpleNavigationStyle.kt:75)');
    }
    var tmp0 = this.mLabelFontWeight_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  var SimpleNavigationStyle_instance;
  function SimpleNavigationStyle_getInstance() {
    if (SimpleNavigationStyle_instance == null)
      new SimpleNavigationStyle();
    return SimpleNavigationStyle_instance;
  }
  function NavigationStyle(background, horizontalPadding, verticalPadding, height, horizontalMargin, verticalMargin, shape, horizontalDivider, verticalDivider, insertBottomPadding) {
    background = background === VOID ? Companion_getInstance_3().get_White_xpp3qf_k$() : background;
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
    horizontalDivider = horizontalDivider === VOID ? ComposableSingletons$SimpleNavigationStyleKt_getInstance().lambda_1_r8sbbp_1 : horizontalDivider;
    verticalDivider = verticalDivider === VOID ? ComposableSingletons$SimpleNavigationStyleKt_getInstance().lambda_2_r8sbbo_1 : verticalDivider;
    insertBottomPadding = insertBottomPadding === VOID ? true : insertBottomPadding;
    this.background_1 = background;
    this.horizontalPadding_1 = horizontalPadding;
    this.verticalPadding_1 = verticalPadding;
    this.height_1 = height;
    this.horizontalMargin_1 = horizontalMargin;
    this.verticalMargin_1 = verticalMargin;
    this.shape_1 = shape;
    this.horizontalDivider_1 = horizontalDivider;
    this.verticalDivider_1 = verticalDivider;
    this.insertBottomPadding_1 = insertBottomPadding;
  }
  protoOf(NavigationStyle).set_background_jj6oi0_k$ = function (_set____db54di) {
    this.background_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_background_8l4942_k$ = function () {
    return this.background_1;
  };
  protoOf(NavigationStyle).set_horizontalPadding_6hyki1_k$ = function (_set____db54di) {
    this.horizontalPadding_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_horizontalPadding_ohbbwh_k$ = function () {
    return this.horizontalPadding_1;
  };
  protoOf(NavigationStyle).set_verticalPadding_59cn2h_k$ = function (_set____db54di) {
    this.verticalPadding_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_verticalPadding_1j0ma9_k$ = function () {
    return this.verticalPadding_1;
  };
  protoOf(NavigationStyle).set_height_bh9dtv_k$ = function (_set____db54di) {
    this.height_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_height_nxe2r7_k$ = function () {
    return this.height_1;
  };
  protoOf(NavigationStyle).set_horizontalMargin_x6o5aw_k$ = function (_set____db54di) {
    this.horizontalMargin_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_horizontalMargin_e3t71k_k$ = function () {
    return this.horizontalMargin_1;
  };
  protoOf(NavigationStyle).set_verticalMargin_f8fc06_k$ = function (_set____db54di) {
    this.verticalMargin_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_verticalMargin_cju1wq_k$ = function () {
    return this.verticalMargin_1;
  };
  protoOf(NavigationStyle).set_shape_ak8aoz_k$ = function (_set____db54di) {
    this.shape_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(NavigationStyle).set_horizontalDivider_85t8t8_k$ = function (_set____db54di) {
    this.horizontalDivider_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_horizontalDivider_jlflws_k$ = function () {
    return this.horizontalDivider_1;
  };
  protoOf(NavigationStyle).set_verticalDivider_xz9hfu_k$ = function (_set____db54di) {
    this.verticalDivider_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_verticalDivider_7q2ehm_k$ = function () {
    return this.verticalDivider_1;
  };
  protoOf(NavigationStyle).set_insertBottomPadding_36kwsl_k$ = function (_set____db54di) {
    this.insertBottomPadding_1 = _set____db54di;
  };
  protoOf(NavigationStyle).get_insertBottomPadding_l1tet8_k$ = function () {
    return this.insertBottomPadding_1;
  };
  protoOf(NavigationStyle).component1_9lkot7_k$ = function () {
    return this.background_1;
  };
  protoOf(NavigationStyle).component2_fwtwi6_k$ = function () {
    return this.horizontalPadding_1;
  };
  protoOf(NavigationStyle).component3_j06dkj_k$ = function () {
    return this.verticalPadding_1;
  };
  protoOf(NavigationStyle).component4_h3xebw_k$ = function () {
    return this.height_1;
  };
  protoOf(NavigationStyle).component5_ht2vqt_k$ = function () {
    return this.horizontalMargin_1;
  };
  protoOf(NavigationStyle).component6_ib0w5m_k$ = function () {
    return this.verticalMargin_1;
  };
  protoOf(NavigationStyle).component7_7eebs6_k$ = function () {
    return this.shape_1;
  };
  protoOf(NavigationStyle).component8_7eebs5_k$ = function () {
    return this.horizontalDivider_1;
  };
  protoOf(NavigationStyle).component9_7eebs4_k$ = function () {
    return this.verticalDivider_1;
  };
  protoOf(NavigationStyle).component10_gazzfo_k$ = function () {
    return this.insertBottomPadding_1;
  };
  protoOf(NavigationStyle).copy_lkjy7t_k$ = function (background, horizontalPadding, verticalPadding, height, horizontalMargin, verticalMargin, shape, horizontalDivider, verticalDivider, insertBottomPadding) {
    return new NavigationStyle(background, horizontalPadding, verticalPadding, height, horizontalMargin, verticalMargin, shape, horizontalDivider, verticalDivider, insertBottomPadding);
  };
  protoOf(NavigationStyle).copy$default_nzzhcp_k$ = function (background, horizontalPadding, verticalPadding, height, horizontalMargin, verticalMargin, shape, horizontalDivider, verticalDivider, insertBottomPadding, $super) {
    background = background === VOID ? this.background_1 : background;
    horizontalPadding = horizontalPadding === VOID ? this.horizontalPadding_1 : horizontalPadding;
    verticalPadding = verticalPadding === VOID ? this.verticalPadding_1 : verticalPadding;
    height = height === VOID ? this.height_1 : height;
    horizontalMargin = horizontalMargin === VOID ? this.horizontalMargin_1 : horizontalMargin;
    verticalMargin = verticalMargin === VOID ? this.verticalMargin_1 : verticalMargin;
    shape = shape === VOID ? this.shape_1 : shape;
    horizontalDivider = horizontalDivider === VOID ? this.horizontalDivider_1 : horizontalDivider;
    verticalDivider = verticalDivider === VOID ? this.verticalDivider_1 : verticalDivider;
    insertBottomPadding = insertBottomPadding === VOID ? this.insertBottomPadding_1 : insertBottomPadding;
    return $super === VOID ? this.copy_lkjy7t_k$(background, horizontalPadding, verticalPadding, height, horizontalMargin, verticalMargin, shape, horizontalDivider, verticalDivider, insertBottomPadding) : $super.copy_lkjy7t_k$.call(this, new Color(background), new Dp(horizontalPadding), new Dp(verticalPadding), new Dp(height), new Dp(horizontalMargin), new Dp(verticalMargin), shape, horizontalDivider, verticalDivider, insertBottomPadding);
  };
  protoOf(NavigationStyle).toString = function () {
    return 'NavigationStyle(background=' + Color__toString_impl_hpzmaq(this.background_1) + ', horizontalPadding=' + Dp__toString_impl_kcddez(this.horizontalPadding_1) + ', verticalPadding=' + Dp__toString_impl_kcddez(this.verticalPadding_1) + ', height=' + Dp__toString_impl_kcddez(this.height_1) + ', horizontalMargin=' + Dp__toString_impl_kcddez(this.horizontalMargin_1) + ', verticalMargin=' + Dp__toString_impl_kcddez(this.verticalMargin_1) + ', shape=' + toString(this.shape_1) + ', horizontalDivider=' + toString(this.horizontalDivider_1) + ', verticalDivider=' + toString(this.verticalDivider_1) + ', insertBottomPadding=' + this.insertBottomPadding_1 + ')';
  };
  protoOf(NavigationStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.background_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.horizontalPadding_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.verticalPadding_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.height_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.horizontalMargin_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.verticalMargin_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    result = imul(result, 31) + hashCode(this.horizontalDivider_1) | 0;
    result = imul(result, 31) + hashCode(this.verticalDivider_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.insertBottomPadding_1) | 0;
    return result;
  };
  protoOf(NavigationStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationStyle))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationStyle ? other : THROW_CCE();
    if (!equals(this.background_1, tmp0_other_with_cast.background_1))
      return false;
    if (!equals(this.horizontalPadding_1, tmp0_other_with_cast.horizontalPadding_1))
      return false;
    if (!equals(this.verticalPadding_1, tmp0_other_with_cast.verticalPadding_1))
      return false;
    if (!equals(this.height_1, tmp0_other_with_cast.height_1))
      return false;
    if (!equals(this.horizontalMargin_1, tmp0_other_with_cast.horizontalMargin_1))
      return false;
    if (!equals(this.verticalMargin_1, tmp0_other_with_cast.verticalMargin_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!equals(this.horizontalDivider_1, tmp0_other_with_cast.horizontalDivider_1))
      return false;
    if (!equals(this.verticalDivider_1, tmp0_other_with_cast.verticalDivider_1))
      return false;
    if (!(this.insertBottomPadding_1 === tmp0_other_with_cast.insertBottomPadding_1))
      return false;
    return true;
  };
  function NavigationItemStyle(selectedIcon, defaultIcon, selectedLabel, defaultLabel, shape) {
    selectedIcon = selectedIcon === VOID ? Companion_getInstance_3().get_Red_6k64b3_k$() : selectedIcon;
    defaultIcon = defaultIcon === VOID ? Companion_getInstance_3().get_Unspecified_j397pn_k$() : defaultIcon;
    selectedLabel = selectedLabel === VOID ? Companion_getInstance_3().get_Red_6k64b3_k$() : selectedLabel;
    defaultLabel = defaultLabel === VOID ? Companion_getInstance_3().get_Unspecified_j397pn_k$() : defaultLabel;
    shape = shape === VOID ? RoundedCornerShape(100) : shape;
    this.selectedIcon_1 = selectedIcon;
    this.defaultIcon_1 = defaultIcon;
    this.selectedLabel_1 = selectedLabel;
    this.defaultLabel_1 = defaultLabel;
    this.shape_1 = shape;
  }
  protoOf(NavigationItemStyle).set_selectedIcon_6vpwem_k$ = function (_set____db54di) {
    this.selectedIcon_1 = _set____db54di;
  };
  protoOf(NavigationItemStyle).get_selectedIcon_ykgyl8_k$ = function () {
    return this.selectedIcon_1;
  };
  protoOf(NavigationItemStyle).set_defaultIcon_iyqehm_k$ = function (_set____db54di) {
    this.defaultIcon_1 = _set____db54di;
  };
  protoOf(NavigationItemStyle).get_defaultIcon_ffjm8o_k$ = function () {
    return this.defaultIcon_1;
  };
  protoOf(NavigationItemStyle).set_selectedLabel_z8gf3b_k$ = function (_set____db54di) {
    this.selectedLabel_1 = _set____db54di;
  };
  protoOf(NavigationItemStyle).get_selectedLabel_2gxmf_k$ = function () {
    return this.selectedLabel_1;
  };
  protoOf(NavigationItemStyle).get_defaultLabel_clic3h_k$ = function () {
    return this.defaultLabel_1;
  };
  protoOf(NavigationItemStyle).set_shape_ak8aoz_k$ = function (_set____db54di) {
    this.shape_1 = _set____db54di;
  };
  protoOf(NavigationItemStyle).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(NavigationItemStyle).component1_9lkot7_k$ = function () {
    return this.selectedIcon_1;
  };
  protoOf(NavigationItemStyle).component2_ekm1j8_k$ = function () {
    return this.defaultIcon_1;
  };
  protoOf(NavigationItemStyle).component3_waba3h_k$ = function () {
    return this.selectedLabel_1;
  };
  protoOf(NavigationItemStyle).component4_844jr2_k$ = function () {
    return this.defaultLabel_1;
  };
  protoOf(NavigationItemStyle).component5_7eebs8_k$ = function () {
    return this.shape_1;
  };
  protoOf(NavigationItemStyle).copy_a952l4_k$ = function (selectedIcon, defaultIcon, selectedLabel, defaultLabel, shape) {
    return new NavigationItemStyle(selectedIcon, defaultIcon, selectedLabel, defaultLabel, shape);
  };
  protoOf(NavigationItemStyle).copy$default_my3d8i_k$ = function (selectedIcon, defaultIcon, selectedLabel, defaultLabel, shape, $super) {
    selectedIcon = selectedIcon === VOID ? this.selectedIcon_1 : selectedIcon;
    defaultIcon = defaultIcon === VOID ? this.defaultIcon_1 : defaultIcon;
    selectedLabel = selectedLabel === VOID ? this.selectedLabel_1 : selectedLabel;
    defaultLabel = defaultLabel === VOID ? this.defaultLabel_1 : defaultLabel;
    shape = shape === VOID ? this.shape_1 : shape;
    return $super === VOID ? this.copy_a952l4_k$(selectedIcon, defaultIcon, selectedLabel, defaultLabel, shape) : $super.copy_a952l4_k$.call(this, new Color(selectedIcon), new Color(defaultIcon), new Color(selectedLabel), new Color(defaultLabel), shape);
  };
  protoOf(NavigationItemStyle).toString = function () {
    return 'NavigationItemStyle(selectedIcon=' + Color__toString_impl_hpzmaq(this.selectedIcon_1) + ', defaultIcon=' + Color__toString_impl_hpzmaq(this.defaultIcon_1) + ', selectedLabel=' + Color__toString_impl_hpzmaq(this.selectedLabel_1) + ', defaultLabel=' + Color__toString_impl_hpzmaq(this.defaultLabel_1) + ', shape=' + toString(this.shape_1) + ')';
  };
  protoOf(NavigationItemStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.selectedIcon_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultIcon_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.selectedLabel_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultLabel_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    return result;
  };
  protoOf(NavigationItemStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationItemStyle))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationItemStyle ? other : THROW_CCE();
    if (!equals(this.selectedIcon_1, tmp0_other_with_cast.selectedIcon_1))
      return false;
    if (!equals(this.defaultIcon_1, tmp0_other_with_cast.defaultIcon_1))
      return false;
    if (!equals(this.selectedLabel_1, tmp0_other_with_cast.selectedLabel_1))
      return false;
    if (!equals(this.defaultLabel_1, tmp0_other_with_cast.defaultLabel_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
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
    selected = selected === VOID ? Companion_getInstance_6().get_SemiBold_aid1c4_k$() : selected;
    default_0 = default_0 === VOID ? Companion_getInstance_6().get_Normal_22avww_k$() : default_0;
    this.selected_1 = selected;
    this.default_1 = default_0;
  }
  protoOf(LabelFontWeight).set_selected_ddrls3_k$ = function (_set____db54di) {
    this.selected_1 = _set____db54di;
  };
  protoOf(LabelFontWeight).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(LabelFontWeight).set_default_pw0du7_k$ = function (_set____db54di) {
    this.default_1 = _set____db54di;
  };
  protoOf(LabelFontWeight).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(LabelFontWeight).component1_7eebsc_k$ = function () {
    return this.selected_1;
  };
  protoOf(LabelFontWeight).component2_7eebsb_k$ = function () {
    return this.default_1;
  };
  protoOf(LabelFontWeight).copy_i01179_k$ = function (selected, default_0) {
    return new LabelFontWeight(selected, default_0);
  };
  protoOf(LabelFontWeight).copy$default_s56r9h_k$ = function (selected, default_0, $super) {
    selected = selected === VOID ? this.selected_1 : selected;
    default_0 = default_0 === VOID ? this.default_1 : default_0;
    return $super === VOID ? this.copy_i01179_k$(selected, default_0) : $super.copy_i01179_k$.call(this, selected, default_0);
  };
  protoOf(LabelFontWeight).toString = function () {
    return 'LabelFontWeight(selected=' + this.selected_1.toString() + ', default=' + this.default_1.toString() + ')';
  };
  protoOf(LabelFontWeight).hashCode = function () {
    var result = this.selected_1.hashCode();
    result = imul(result, 31) + this.default_1.hashCode() | 0;
    return result;
  };
  protoOf(LabelFontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LabelFontWeight))
      return false;
    var tmp0_other_with_cast = other instanceof LabelFontWeight ? other : THROW_CCE();
    if (!this.selected_1.equals(tmp0_other_with_cast.selected_1))
      return false;
    if (!this.default_1.equals(tmp0_other_with_cast.default_1))
      return false;
    return true;
  };
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SimpleNavigationStyleKt$lambda_1$lambda_wkfhfj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2028585167, $changed, -1, 'team.platforma.extra_nav.ui.style.ComposableSingletons$SimpleNavigationStyleKt.lambda-1.<anonymous> (SimpleNavigationStyle.kt:90)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var tmp_0 = height(tmp, tmp$ret$0);
      HorizontalDivider(tmp_0, _Dp___init__impl__ms3zkb(0.0), Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_outline_ezfrnk_k$(), 0.2), $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SimpleNavigationStyleKt$lambda_2$lambda_3qt0dc($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1871129311, $changed, -1, 'team.platforma.extra_nav.ui.style.ComposableSingletons$SimpleNavigationStyleKt.lambda-2.<anonymous> (SimpleNavigationStyle.kt:98)');
      }
      var tmp = fillMaxHeight(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var tmp_0 = width(tmp, tmp$ret$0);
      VerticalDivider(tmp_0, _Dp___init__impl__ms3zkb(0.0), Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_outline_ezfrnk_k$(), 0.2), $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SimpleNavigationStyleKt() {
    ComposableSingletons$SimpleNavigationStyleKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-2028585167, false, ComposableSingletons$SimpleNavigationStyleKt$lambda_1$lambda_wkfhfj));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(1871129311, false, ComposableSingletons$SimpleNavigationStyleKt$lambda_2$lambda_3qt0dc));
  }
  protoOf(ComposableSingletons$SimpleNavigationStyleKt).get_lambda_1_pdligx_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$SimpleNavigationStyleKt).get_lambda_2_a4979e_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$SimpleNavigationStyleKt_instance;
  function ComposableSingletons$SimpleNavigationStyleKt_getInstance() {
    if (ComposableSingletons$SimpleNavigationStyleKt_instance == null)
      new ComposableSingletons$SimpleNavigationStyleKt();
    return ComposableSingletons$SimpleNavigationStyleKt_instance;
  }
  //region block: post-declaration
  protoOf(ComponentNavigationImpl).navigate$default_1xd8te_k$ = navigate$default;
  protoOf(FragmentNavigationImpl).navigate$default_pj6wyq_k$ = navigate$default_0;
  //endregion
  //region block: init
  navigationcomposeextra_extra_nav_generated_resources_Res_drawable$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_string$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_array$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_plurals$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res_font$stable = 0;
  navigationcomposeextra_extra_nav_generated_resources_Res$stable = 0;
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
