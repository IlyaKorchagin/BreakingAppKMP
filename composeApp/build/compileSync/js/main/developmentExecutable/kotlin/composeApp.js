(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-navigation-navigation-compose.js', './NavigationComposeExtra-extra_nav.js', './MaterialExtension-multiplatform_material_extension.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './projects-compose-koin-compose.js', './BreakingKMPApp-module_main-presentation_main.js', './projects-core-koin-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js', './projects-compose-koin-compose-viewmodel.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './coil-root-coil-compose.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-animation-animation.js', './BreakingKMPApp-module_main-di_main.js', './firebase-kotlin-sdk-firebase-app.js', './coil-root-coil-network-ktor3.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-navigation-navigation-compose.js'), require('./NavigationComposeExtra-extra_nav.js'), require('./MaterialExtension-multiplatform_material_extension.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./projects-compose-koin-compose.js'), require('./BreakingKMPApp-module_main-presentation_main.js'), require('./projects-core-koin-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js'), require('./projects-compose-koin-compose-viewmodel.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./coil-root-coil-compose.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./BreakingKMPApp-module_main-di_main.js'), require('./firebase-kotlin-sdk-firebase-app.js'), require('./coil-root-coil-network-ktor3.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-compose'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-navigation-navigation-compose' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-compose' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['NavigationComposeExtra-extra_nav'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'NavigationComposeExtra-extra_nav' was not found. Please, check whether 'NavigationComposeExtra-extra_nav' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['MaterialExtension-multiplatform_material_extension'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'MaterialExtension-multiplatform_material_extension' was not found. Please, check whether 'MaterialExtension-multiplatform_material_extension' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['projects-compose-koin-compose'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'projects-compose-koin-compose' was not found. Please, check whether 'projects-compose-koin-compose' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-presentation_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'BreakingKMPApp-module_main-presentation_main' was not found. Please, check whether 'BreakingKMPApp-module_main-presentation_main' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['projects-compose-koin-compose-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'projects-compose-koin-compose-viewmodel' was not found. Please, check whether 'projects-compose-koin-compose-viewmodel' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['coil-root-coil-compose'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'coil-root-coil-compose' was not found. Please, check whether 'coil-root-coil-compose' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-di_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'BreakingKMPApp-module_main-di_main' was not found. Please, check whether 'BreakingKMPApp-module_main-di_main' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'firebase-kotlin-sdk-firebase-app' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-app' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'coil-root-coil-network-ktor3' was not found. Please, check whether 'coil-root-coil-network-ktor3' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    globalThis['BreakingKMPApp:composeApp'] = factory(typeof globalThis['BreakingKMPApp:composeApp'] === 'undefined' ? {} : globalThis['BreakingKMPApp:composeApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-navigation-navigation-compose'], globalThis['NavigationComposeExtra-extra_nav'], globalThis['MaterialExtension-multiplatform_material_extension'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['projects-compose-koin-compose'], globalThis['BreakingKMPApp-module_main-presentation_main'], globalThis['projects-core-koin-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'], globalThis['projects-compose-koin-compose-viewmodel'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['coil-root-coil-compose'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['BreakingKMPApp-module_main-di_main'], globalThis['firebase-kotlin-sdk-firebase-app'], globalThis['coil-root-coil-network-ktor3']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_androidx_navigation_navigation_compose, kotlin_NavigationComposeExtra_extra_nav, kotlin_MaterialExtension_multiplatform_material_extension, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_io_insert_koin_koin_compose, kotlin_BreakingKMPApp_module_main_presentation_main, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose, kotlin_io_insert_koin_koin_compose_viewmodel, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_io_coil_kt_coil3_coil_compose, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_animation_animation, kotlin_BreakingKMPApp_module_main_di_main, kotlin_dev_gitlive_firebase_app, kotlin_io_coil_kt_coil3_coil_network_ktor3) {
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
  var LanguageQualifier = kotlin_components_resources_library.$_$.c;
  var setOf_0 = kotlin_kotlin.$_$.tc;
  var StringResource = kotlin_components_resources_library.$_$.f;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var rememberNavController = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.d;
  var GlobalNavigator = kotlin_NavigationComposeExtra_extra_nav.$_$.h;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var rememberTheme = kotlin_MaterialExtension_multiplatform_material_extension.$_$.f;
  var isDark = kotlin_MaterialExtension_multiplatform_material_extension.$_$.e;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var listOf = kotlin_kotlin.$_$.rb;
  var team_platforma_extra_nav_navigator_activity_GlobalNavigator$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.i;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var THROW_IAE = kotlin_kotlin.$_$.yn;
  var enumEntries = kotlin_kotlin.$_$.qf;
  var Enum = kotlin_kotlin.$_$.jn;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var Activity = kotlin_NavigationComposeExtra_extra_nav.$_$.d;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.to;
  var currentBackStackEntryAsState = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.c;
  var currentKoinScope = kotlin_io_insert_koin_koin_compose.$_$.a;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var MainViewModel = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.b;
  var getKClass = kotlin_kotlin.$_$.f;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o4;
  var TopAppBarColors = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var ActivityScaffold = kotlin_NavigationComposeExtra_extra_nav.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.ej;
  var THROW_ISE = kotlin_kotlin.$_$.zn;
  var getLocalDelegateReference = kotlin_kotlin.$_$.lg;
  var KProperty0 = kotlin_kotlin.$_$.gj;
  var emptyParametersHolder = kotlin_io_insert_koin_koin_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.if;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.gh;
  var initMetadataForLambda = kotlin_kotlin.$_$.vg;
  var SimpleBottomNavigationBar = kotlin_NavigationComposeExtra_extra_nav.$_$.o;
  var stringResource = kotlin_components_resources_library.$_$.i;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b5;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var painterResource = kotlin_components_resources_library.$_$.h;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var equals = kotlin_kotlin.$_$.gg;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var TopAppBar = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var SimpleNavigationRail = kotlin_NavigationComposeExtra_extra_nav.$_$.q;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var SuspendFunction1 = kotlin_kotlin.$_$.kf;
  var Component = kotlin_NavigationComposeExtra_extra_nav.$_$.e;
  var listOf_0 = kotlin_kotlin.$_$.qb;
  var SimpleNavIcon = kotlin_NavigationComposeExtra_extra_nav.$_$.p;
  var Fragment = kotlin_NavigationComposeExtra_extra_nav.$_$.g;
  var LocalViewModelStoreOwner_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.b;
  var toString = kotlin_kotlin.$_$.ci;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var defaultExtras = kotlin_io_insert_koin_koin_compose_viewmodel.$_$.a;
  var resolveViewModel = kotlin_io_insert_koin_koin_compose_viewmodel.$_$.b;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var emptyList = kotlin_kotlin.$_$.z9;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.wa;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.va;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.g9;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.sa;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o1;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p1;
  var charSequenceLength = kotlin_kotlin.$_$.bg;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var aspectRatio = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var AsyncImage = kotlin_io_coil_kt_coil3_coil_compose.$_$.a;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u2;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g3;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var drawWithCache = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var numberToInt = kotlin_kotlin.$_$.uh;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n1;
  var animateContentSize = kotlin_org_jetbrains_compose_animation_animation.$_$.f;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n1;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m4;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var background_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var println = kotlin_kotlin.$_$.rf;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.re;
  var FragmentBox = kotlin_NavigationComposeExtra_extra_nav.$_$.f;
  var Default_getInstance = kotlin_kotlin.$_$.c6;
  var random = kotlin_kotlin.$_$.ic;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var GlobalNavigation_getInstance = kotlin_NavigationComposeExtra_extra_nav.$_$.a;
  var startKoin = kotlin_io_insert_koin_koin_core.$_$.d;
  var getMainModules = kotlin_BreakingKMPApp_module_main_di_main.$_$.a;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var SimpleNavigationStyle_getInstance = kotlin_NavigationComposeExtra_extra_nav.$_$.b;
  var NavigationStyle = kotlin_NavigationComposeExtra_extra_nav.$_$.k;
  var NavigationItemStyle = kotlin_NavigationComposeExtra_extra_nav.$_$.j;
  var team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.m;
  var team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.l;
  var team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.n;
  var ToolbarStyle_getInstance = kotlin_MaterialExtension_multiplatform_material_extension.$_$.a;
  var AppToolbarStyle = kotlin_MaterialExtension_multiplatform_material_extension.$_$.b;
  var team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter = kotlin_MaterialExtension_multiplatform_material_extension.$_$.c;
  var team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter = kotlin_MaterialExtension_multiplatform_material_extension.$_$.d;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Pair = kotlin_kotlin.$_$.un;
  var Firebase_getInstance = kotlin_dev_gitlive_firebase_app.$_$.c;
  var FirebaseOptions = kotlin_dev_gitlive_firebase_app.$_$.a;
  var initialize = kotlin_dev_gitlive_firebase_app.$_$.b;
  var CanvasBasedWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(CommonMainString0, 'CommonMainString0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForClass(PlatformType, 'PlatformType', VOID, Enum);
  initMetadataForObject(MainActivity, 'MainActivity', VOID, Activity);
  initMetadataForLambda(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$MainActivityKt, 'ComposableSingletons$MainActivityKt');
  initMetadataForObject(HomeComponent, 'HomeComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$HomeComponentKt, 'ComposableSingletons$HomeComponentKt');
  initMetadataForObject(ProfileComponent, 'ProfileComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$ProfileComponentKt, 'ComposableSingletons$ProfileComponentKt');
  initMetadataForObject(RatingsComponent, 'RatingsComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$RatingsComponentKt, 'ComposableSingletons$RatingsComponentKt');
  initMetadataForObject(HomeFragment, 'HomeFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$HomeFragmentKt, 'ComposableSingletons$HomeFragmentKt');
  initMetadataForClass(ElementsTab, 'ElementsTab', VOID, Enum);
  initMetadataForLambda(CustomProgressBar1$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ProfileFragment, 'ProfileFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$ProfileFragmentKt, 'ComposableSingletons$ProfileFragmentKt');
  initMetadataForObject(RatingsFragment, 'RatingsFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$RatingsFragmentKt, 'ComposableSingletons$RatingsFragmentKt');
  initMetadataForObject(SplashActivity, 'SplashActivity', VOID, Activity);
  initMetadataForObject(ComposableSingletons$SplashActivityKt, 'ComposableSingletons$SplashActivityKt');
  initMetadataForObject(SplashComponent, 'SplashComponent', VOID, Component);
  initMetadataForObject(SplashFragment, 'SplashFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$SplashFragmentKt, 'ComposableSingletons$SplashFragmentKt');
  initMetadataForLambda(SplashScreen$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(LightTheme, 'LightTheme');
  initMetadataForObject(DarkTheme, 'DarkTheme');
  initMetadataForObject(AppColorsDefined, 'AppColorsDefined');
  initMetadataForObject(AppColors, 'AppColors');
  initMetadataForClass(AppColorsTheme, 'AppColorsTheme', AppColorsTheme);
  initMetadataForClass(Colors, 'Colors', Colors);
  initMetadataForClass(NavViewStyle, 'NavViewStyle', NavViewStyle);
  initMetadataForClass(ToolbarTheme, 'ToolbarTheme', ToolbarTheme);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForLambda(ScreenSizeHandler$getScreenSize$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForObject(ScreenSizeHandler, 'ScreenSizeHandler');
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function CommonMainDrawable0$break_splash1$delegate$lambda() {
    return init_break_splash1();
  }
  function CommonMainDrawable0$break_splash2$delegate$lambda() {
    return init_break_splash2();
  }
  function CommonMainDrawable0$break_splash3$delegate$lambda() {
    return init_break_splash3();
  }
  function CommonMainDrawable0$break_splash4$delegate$lambda() {
    return init_break_splash4();
  }
  function CommonMainDrawable0$break_splash5$delegate$lambda() {
    return init_break_splash5();
  }
  function CommonMainDrawable0$compose_multiplatform$delegate$lambda() {
    return init_compose_multiplatform();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.break_splash1$delegate_1 = lazy(CommonMainDrawable0$break_splash1$delegate$lambda);
    var tmp_0 = this;
    tmp_0.break_splash2$delegate_1 = lazy(CommonMainDrawable0$break_splash2$delegate$lambda);
    var tmp_1 = this;
    tmp_1.break_splash3$delegate_1 = lazy(CommonMainDrawable0$break_splash3$delegate$lambda);
    var tmp_2 = this;
    tmp_2.break_splash4$delegate_1 = lazy(CommonMainDrawable0$break_splash4$delegate$lambda);
    var tmp_3 = this;
    tmp_3.break_splash5$delegate_1 = lazy(CommonMainDrawable0$break_splash5$delegate$lambda);
    var tmp_4 = this;
    tmp_4.compose_multiplatform$delegate_1 = lazy(CommonMainDrawable0$compose_multiplatform$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).get_break_splash1_57jjup_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.break_splash1$delegate_1;
    break_splash1$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_break_splash2_57jjuq_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.break_splash2$delegate_1;
    break_splash2$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_break_splash3_57jjur_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.break_splash3$delegate_1;
    break_splash3$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_break_splash4_57jjus_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.break_splash4$delegate_1;
    break_splash4$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_break_splash5_57jjut_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.break_splash5$delegate_1;
    break_splash5$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_compose_multiplatform_u35ml2_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.compose_multiplatform$delegate_1;
    compose_multiplatform$factory();
    return this_0.get_value_j01efc_k$();
  };
  var CommonMainDrawable0_instance;
  function CommonMainDrawable0_getInstance() {
    if (CommonMainDrawable0_instance == null)
      new CommonMainDrawable0();
    return CommonMainDrawable0_instance;
  }
  function _collectCommonMainDrawable0Resources(map) {
    map.put_4fpzoq_k$('break_splash1', CommonMainDrawable0_getInstance().get_break_splash1_57jjup_k$());
    map.put_4fpzoq_k$('break_splash2', CommonMainDrawable0_getInstance().get_break_splash2_57jjuq_k$());
    map.put_4fpzoq_k$('break_splash3', CommonMainDrawable0_getInstance().get_break_splash3_57jjur_k$());
    map.put_4fpzoq_k$('break_splash4', CommonMainDrawable0_getInstance().get_break_splash4_57jjus_k$());
    map.put_4fpzoq_k$('break_splash5', CommonMainDrawable0_getInstance().get_break_splash5_57jjut_k$());
    map.put_4fpzoq_k$('compose_multiplatform', CommonMainDrawable0_getInstance().get_compose_multiplatform_u35ml2_k$());
  }
  function get_break_splash1(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().get_break_splash1_57jjup_k$();
  }
  function init_break_splash1() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash1', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash1.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_break_splash2(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().get_break_splash2_57jjuq_k$();
  }
  function init_break_splash2() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash2', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash2.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_break_splash3(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().get_break_splash3_57jjur_k$();
  }
  function init_break_splash3() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash3', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash3.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_break_splash4(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().get_break_splash4_57jjus_k$();
  }
  function init_break_splash4() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash4', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash4.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_break_splash5(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().get_break_splash5_57jjut_k$();
  }
  function init_break_splash5() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash5', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash5.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_compose_multiplatform(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().get_compose_multiplatform_u35ml2_k$();
  }
  function init_compose_multiplatform() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function break_splash1$factory() {
    return getPropertyCallableRef('break_splash1', 1, KProperty1, function (receiver) {
      return receiver.get_break_splash1_57jjup_k$();
    }, null);
  }
  function break_splash2$factory() {
    return getPropertyCallableRef('break_splash2', 1, KProperty1, function (receiver) {
      return receiver.get_break_splash2_57jjuq_k$();
    }, null);
  }
  function break_splash3$factory() {
    return getPropertyCallableRef('break_splash3', 1, KProperty1, function (receiver) {
      return receiver.get_break_splash3_57jjur_k$();
    }, null);
  }
  function break_splash4$factory() {
    return getPropertyCallableRef('break_splash4', 1, KProperty1, function (receiver) {
      return receiver.get_break_splash4_57jjus_k$();
    }, null);
  }
  function break_splash5$factory() {
    return getPropertyCallableRef('break_splash5', 1, KProperty1, function (receiver) {
      return receiver.get_break_splash5_57jjut_k$();
    }, null);
  }
  function compose_multiplatform$factory() {
    return getPropertyCallableRef('compose_multiplatform', 1, KProperty1, function (receiver) {
      return receiver.get_compose_multiplatform_u35ml2_k$();
    }, null);
  }
  function CommonMainString0$app_name$delegate$lambda() {
    return init_app_name();
  }
  function CommonMainString0() {
    CommonMainString0_instance = this;
    var tmp = this;
    tmp.app_name$delegate_1 = lazy(CommonMainString0$app_name$delegate$lambda);
  }
  protoOf(CommonMainString0).get_app_name_chqzim_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.app_name$delegate_1;
    app_name$factory();
    return this_0.get_value_j01efc_k$();
  };
  var CommonMainString0_instance;
  function CommonMainString0_getInstance() {
    if (CommonMainString0_instance == null)
      new CommonMainString0();
    return CommonMainString0_instance;
  }
  function _collectCommonMainString0Resources(map) {
    map.put_4fpzoq_k$('app_name', CommonMainString0_getInstance().get_app_name_chqzim_k$());
  }
  function get_app_name(_this__u8e3s4) {
    return CommonMainString0_getInstance().get_app_name_chqzim_k$();
  }
  function init_app_name() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(10, 0), new Long(36, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:app_name', 'app_name', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(10, 0), new Long(28, 0))]));
  }
  function app_name$factory() {
    return getPropertyCallableRef('app_name', 1, KProperty1, function (receiver) {
      return receiver.get_app_name_chqzim_k$();
    }, null);
  }
  var breakingkmpapp_composeapp_generated_resources_Res_drawable$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_string$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_array$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_plurals$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_font$stable;
  var breakingkmpapp_composeapp_generated_resources_Res$stable;
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
    return readResourceBytes('composeResources/breakingkmpapp.composeapp.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/breakingkmpapp.composeapp.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function breakingkmpapp_composeapp_generated_resources_Res_drawable$stableprop_getter() {
    return breakingkmpapp_composeapp_generated_resources_Res_drawable$stable;
  }
  function breakingkmpapp_composeapp_generated_resources_Res_string$stableprop_getter() {
    return breakingkmpapp_composeapp_generated_resources_Res_string$stable;
  }
  function breakingkmpapp_composeapp_generated_resources_Res_array$stableprop_getter() {
    return breakingkmpapp_composeapp_generated_resources_Res_array$stable;
  }
  function breakingkmpapp_composeapp_generated_resources_Res_plurals$stableprop_getter() {
    return breakingkmpapp_composeapp_generated_resources_Res_plurals$stable;
  }
  function breakingkmpapp_composeapp_generated_resources_Res_font$stableprop_getter() {
    return breakingkmpapp_composeapp_generated_resources_Res_font$stable;
  }
  function breakingkmpapp_composeapp_generated_resources_Res$stableprop_getter() {
    return breakingkmpapp_composeapp_generated_resources_Res$stable;
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
    _collectCommonMainString0Resources(map);
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
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1296636172);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296636172, $changed, -1, 'org.korchagin.kmp.App (App.kt:22)');
      }
      var navHostController = rememberNavController([], $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-622334986);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.App.<anonymous>' call
        var value = new GlobalNavigator(navHostController);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var globalNavigator = tmp0_group;
      var theme = rememberTheme(true, $composer_0, 6, 0);
      var toolbarTheme = new ToolbarTheme();
      var navViewStyle = new NavViewStyle();
      var colors = new AppColorsTheme();
      if (isDark(theme, $composer_0, 0)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-2112281051);
        colors.dark_hysmna_k$();
        toolbarTheme.dark_1s9jxv_k$($composer_0, 0);
        navViewStyle.dark_1s9jxv_k$($composer_0, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-2112189725);
        colors.light_4wwaiu_k$();
        toolbarTheme.light_ncm55f_k$($composer_0, 0);
        navViewStyle.light_ncm55f_k$($composer_0, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_1 = isDark(theme, $composer_0, 0) ? darkColorScheme().copy$default_5s5z0t_k$(Color(new Long(-12467004, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color(new Long(-16777216, 0))) : lightColorScheme().copy$default_5s5z0t_k$(Color(new Long(-12467004, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color(new Long(-526345, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.App.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1477258040, true, App$lambda(globalNavigator), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.App.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      MaterialTheme(tmp_1, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(App$lambda_0($changed));
    }
  }
  function App$lambda($globalNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1477258040, $changed, -1, 'org.korchagin.kmp.App.<anonymous> (App.kt:53)');
        }
        var activityList = listOf([MainActivity_getInstance(), SplashActivity_getInstance()]);
        $globalNavigator.setupNavHost_tc1rgs_k$(null, activityList, SplashActivity_getInstance(), $composer_0, 432 | team_platforma_extra_nav_navigator_activity_GlobalNavigator$stableprop_getter() << 9, 1);
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
  function App$lambda_0($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var PlatformType_ANDROID_instance;
  var PlatformType_JS_instance;
  var PlatformType_IOS_instance;
  function values() {
    return [PlatformType_ANDROID_getInstance(), PlatformType_JS_getInstance(), PlatformType_IOS_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ANDROID':
        return PlatformType_ANDROID_getInstance();
      case 'JS':
        return PlatformType_JS_getInstance();
      case 'IOS':
        return PlatformType_IOS_getInstance();
      default:
        PlatformType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var PlatformType_entriesInitialized;
  function PlatformType_initEntries() {
    if (PlatformType_entriesInitialized)
      return Unit_getInstance();
    PlatformType_entriesInitialized = true;
    PlatformType_ANDROID_instance = new PlatformType('ANDROID', 0);
    PlatformType_JS_instance = new PlatformType('JS', 1);
    PlatformType_IOS_instance = new PlatformType('IOS', 2);
  }
  var $ENTRIES;
  function PlatformType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlatformType_ANDROID_getInstance() {
    PlatformType_initEntries();
    return PlatformType_ANDROID_instance;
  }
  function PlatformType_JS_getInstance() {
    PlatformType_initEntries();
    return PlatformType_JS_instance;
  }
  function PlatformType_IOS_getInstance() {
    PlatformType_initEntries();
    return PlatformType_IOS_instance;
  }
  var org_korchagin_kmp_activity_main_MainActivity$stable;
  function MainActivity() {
    MainActivity_instance = this;
    Activity.call(this, 'main_activity', listOf([HomeComponent_getInstance(), RatingsComponent_getInstance(), ProfileComponent_getInstance()]), ComposableSingletons$MainActivityKt_getInstance().lambda_1_r8sbbp_1);
  }
  var MainActivity_instance;
  function MainActivity_getInstance() {
    if (MainActivity_instance == null)
      new MainActivity();
    return MainActivity_instance;
  }
  function org_korchagin_kmp_activity_main_MainActivity$stableprop_getter() {
    return org_korchagin_kmp_activity_main_MainActivity$stable;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda_wcf918(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1260934621, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous> (MainActivity.kt:40)');
    }
    $composer_0.startReplaceGroup_5hh8aj_k$(-342203267);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
      var value = mutableStateOf(null);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    var navigator$delegate = tmp0_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(-342200707);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    var backStack$delegate = tmp1_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(-342198594);
    if (!(invoke$lambda(navigator$delegate) == null)) {
      var backStackEntry$delegate = currentBackStackEntryAsState(ensureNotNull(invoke$lambda(navigator$delegate)), $composer_0, 0);
      invoke$lambda_2(backStack$delegate, invoke$lambda_3(backStackEntry$delegate));
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    var screenWidth = ScreenSizeHandler_getInstance().getScreenSize_rvow7q_k$($composer_0, 6).get_first_irdx8n_k$();
    var screenHeight = ScreenSizeHandler_getInstance().getScreenSize_rvow7q_k$($composer_0, 6).get_second_jf7fjx_k$();
    var isLargeScreen = {_v: screenWidth > screenHeight};
    // Inline function 'org.koin.compose.koinInject' call
    var qualifier = null;
    var scope = null;
    var parameters = null;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(414512006);
    if (!((7 & 1) === 0))
      qualifier = null;
    if (!((7 & 2) === 0))
      scope = currentKoinScope($composer_1, 0);
    if (!((7 & 4) === 0))
      parameters = null;
    var currentParameters$delegate = rememberUpdatedState(parameters, $composer_1, 14 & 0 >> 6);
    $composer_1.startReplaceableGroup_ip860b_k$(855641119);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(qualifier) | $composer_1.changed_ga7h3f_k$(scope));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.koin.compose.koinInject.<anonymous>' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var this_0 = scope;
      var qualifier_0 = qualifier;
      var parameters_0 = ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn(currentParameters$delegate);
      var value_1 = this_0.get_80ko8d_k$(getKClass(MainViewModel), qualifier_0, parameters_0);
      $composer_1.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var viewModel = tmp1_group_0;
    var tmp0_containerColor = Companion_getInstance_0().get_Blue_kx9ene_k$();
    var tmp1_titleContentColor = Companion_getInstance_0().get_White_xpp3qf_k$();
    var tmp2_actionIconContentColor = Companion_getInstance_0().get_White_xpp3qf_k$();
    var tmp3_navigationIconContentColor = Companion_getInstance_0().get_White_xpp3qf_k$();
    var tmp4_scrolledContainerColor = Companion_getInstance_0().get_Red_6k64b3_k$();
    var topAppBarColors = new TopAppBarColors(tmp0_containerColor, tmp4_scrolledContainerColor, tmp3_navigationIconContentColor, tmp1_titleContentColor, tmp2_actionIconContentColor);
    LaunchedEffect(screenWidth, screenHeight, ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a_0(isLargeScreen, screenWidth, screenHeight, viewModel, null), $composer_0, 0);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(297781341, true, ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_0(components, navigator$delegate), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_2.rememberedValue_4dg93v_k$();
    var tmp_5;
    if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_2 = ComposableLambda$invoke$ref_1(dispatchReceiver);
      $composer_2.updateRememberedValue_l1wh71_k$(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    var tmp_7 = tmp0;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
    var dispatchReceiver_0 = rememberComposableLambda(-1636425058, true, ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_1(components, topAppBarColors, backStack$delegate), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_3 = $composer_0;
    sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_3.rememberedValue_4dg93v_k$();
    var tmp_8;
    if (invalid_1 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_3 = ComposableLambda$invoke$ref_3(dispatchReceiver_0);
      $composer_3.updateRememberedValue_l1wh71_k$(value_3);
      tmp_8 = value_3;
    } else {
      tmp_8 = it_3;
    }
    var tmp_9 = tmp_8;
    var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    sourceInformationMarkerEnd($composer_3);
    var tmp_10 = tmp0_0;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
    var dispatchReceiver_1 = rememberComposableLambda(724335839, true, ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_2(components, navigator$delegate), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_4 = $composer_0;
    sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_2 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_4.rememberedValue_4dg93v_k$();
    var tmp_11;
    if (invalid_2 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_4 = ComposableLambda$invoke$ref_4(dispatchReceiver_1);
      $composer_4.updateRememberedValue_l1wh71_k$(value_4);
      tmp_11 = value_4;
    } else {
      tmp_11 = it_4;
    }
    var tmp_12 = tmp_11;
    var tmp0_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    sourceInformationMarkerEnd($composer_4);
    var tmp_13 = tmp0_1;
    var tmp_14 = isLargeScreen._v;
    ActivityScaffold(components, null, tmp_7, tmp_10, tmp_13, tmp_14, false, $composer_0, 28032 | 14 & $changed, 66);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function invoke$lambda($navigator$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('navigator', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $navigator$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($navigator$delegate, _set____db54di) {
    getLocalDelegateReference('navigator', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $navigator$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function invoke$lambda_1($backStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $backStack$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_2($backStack$delegate, _set____db54di) {
    getLocalDelegateReference('backStack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $backStack$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function invoke$lambda_3($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_4($currentParameters$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentParameters', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentParameters$delegate.get_value_j01efc_k$();
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn($currentParameters$delegate) {
    return function () {
      var tmp0_safe_receiver = invoke$lambda_4($currentParameters$delegate);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      return tmp1_elvis_lhs == null ? emptyParametersHolder() : tmp1_elvis_lhs;
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation) {
    this.$isLargeScreen_1 = $isLargeScreen;
    this.$screenWidth_1 = $screenWidth;
    this.$screenHeight_1 = $screenHeight;
    this.$viewModel_1 = $viewModel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$isLargeScreen_1._v = this.$screenWidth_1 > this.$screenHeight_1;
          this.$viewModel_1.setScreenWidth_p97c0g_k$(this.$screenWidth_1);
          this.$viewModel_1.setScreenHeight_x3nr1v_k$(this.$screenHeight_1);
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
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a(this.$isLargeScreen_1, this.$screenWidth_1, this.$screenHeight_1, this.$viewModel_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a_0($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation) {
    var i = new ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_0($components, $navigator$delegate) {
    return function (componentNavigator, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(297781341, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:110)');
      }
      invoke$lambda_0($navigator$delegate, componentNavigator.host_1wrs8_k$());
      SimpleBottomNavigationBar($components, componentNavigator, $composer_0, 112 & $changed << 3);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2128262390, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous> (MainActivity.kt:79)');
        }
        var tmp0_subject = $component;
        if (equals(tmp0_subject, HomeComponent_getInstance())) {
          $composer_0.startReplaceGroup_5hh8aj_k$(667775384);
          var tmp_0 = painterResource(get_compose_multiplatform(drawable_getInstance()), $composer_0, 0);
          Image(tmp_0, null, null, null, null, 0.0, null, $composer_0, 48, 124);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(668143447);
          var tmp1_safe_receiver = $component.get_label_iuj8p7_k$();
          $composer_0.startReplaceGroup_5hh8aj_k$(714291903);
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp_1 = stringResource(tmp1_safe_receiver, $composer_0, 0);
          }
          var tmp1_group = tmp_1;
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_2 = tmp1_group == null ? '' : tmp1_group;
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_7 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp_2, null, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
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
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_1($components, $topAppBarColors, $backStack$delegate) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1636425058, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:74)');
      }
      if (!(invoke$lambda_1($backStack$delegate) == null)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $components.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $composer_0.startReplaceGroup_5hh8aj_k$(-1517129481);
          if (element.get_route_iy3cio_k$() === ensureNotNull(invoke$lambda_1($backStack$delegate)).get_destination_9r3c63_k$().get_route_iy3cio_k$()) {
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(2128262390, true, ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c(element), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_1 = $composer_0;
            sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_0 = $composer_1.rememberedValue_4dg93v_k$();
            var tmp;
            if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
              // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
              $composer_1.updateRememberedValue_l1wh71_k$(value);
              tmp = value;
            } else {
              tmp = it_0;
            }
            var tmp_0 = tmp;
            var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            sourceInformationMarkerEnd($composer_1);
            var tmp_1 = tmp0;
            var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
            TopAppBar(tmp_1, null, null, null, tmp_2, null, $topAppBarColors, null, $composer_0, 6, 190);
          }
          $composer_0.endReplaceGroup_ek144q_k$();
        }
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_2($components, $navigator$delegate) {
    return function (componentNavigator, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(724335839, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:117)');
      }
      invoke$lambda_0($navigator$delegate, componentNavigator.host_1wrs8_k$());
      SimpleNavigationRail($components, componentNavigator, false, $composer_0, 112 & $changed << 3, 4);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt() {
    ComposableSingletons$MainActivityKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1260934621, false, ComposableSingletons$MainActivityKt$lambda_1$lambda_wcf918));
  }
  protoOf(ComposableSingletons$MainActivityKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainActivityKt_instance;
  function ComposableSingletons$MainActivityKt_getInstance() {
    if (ComposableSingletons$MainActivityKt_instance == null)
      new ComposableSingletons$MainActivityKt();
    return ComposableSingletons$MainActivityKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_HomeComponent$stable;
  function HomeComponent() {
    HomeComponent_instance = this;
    var tmp0_label = get_app_name(string_getInstance());
    var tmp1_fragments = listOf_0(HomeFragment_getInstance());
    Component.call(this, 'home_component', ComposableSingletons$HomeComponentKt_getInstance().lambda_1_r8sbbp_1, tmp0_label, tmp1_fragments);
  }
  var HomeComponent_instance;
  function HomeComponent_getInstance() {
    if (HomeComponent_instance == null)
      new HomeComponent();
    return HomeComponent_instance;
  }
  function org_korchagin_kmp_activity_main_components_HomeComponent$stableprop_getter() {
    return org_korchagin_kmp_activity_main_components_HomeComponent$stable;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeComponentKt$lambda_1$lambda_b2x2h8(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-348734468, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$HomeComponentKt.lambda-1.<anonymous> (HomeComponent.kt:16)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_getInstance()), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HomeComponentKt() {
    ComposableSingletons$HomeComponentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-348734468, false, ComposableSingletons$HomeComponentKt$lambda_1$lambda_b2x2h8));
  }
  protoOf(ComposableSingletons$HomeComponentKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$HomeComponentKt_instance;
  function ComposableSingletons$HomeComponentKt_getInstance() {
    if (ComposableSingletons$HomeComponentKt_instance == null)
      new ComposableSingletons$HomeComponentKt();
    return ComposableSingletons$HomeComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_ProfileComponent$stable;
  function ProfileComponent() {
    ProfileComponent_instance = this;
    var tmp0_label = get_app_name(string_getInstance());
    var tmp1_fragments = listOf_0(ProfileFragment_getInstance());
    Component.call(this, 'profile_component', ComposableSingletons$ProfileComponentKt_getInstance().lambda_1_r8sbbp_1, tmp0_label, tmp1_fragments);
  }
  var ProfileComponent_instance;
  function ProfileComponent_getInstance() {
    if (ProfileComponent_instance == null)
      new ProfileComponent();
    return ProfileComponent_instance;
  }
  function org_korchagin_kmp_activity_main_components_ProfileComponent$stableprop_getter() {
    return org_korchagin_kmp_activity_main_components_ProfileComponent$stable;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProfileComponentKt$lambda_1$lambda_wyenvs(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-12156152, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$ProfileComponentKt.lambda-1.<anonymous> (ProfileComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_getInstance()), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ProfileComponentKt() {
    ComposableSingletons$ProfileComponentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-12156152, false, ComposableSingletons$ProfileComponentKt$lambda_1$lambda_wyenvs));
  }
  protoOf(ComposableSingletons$ProfileComponentKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ProfileComponentKt_instance;
  function ComposableSingletons$ProfileComponentKt_getInstance() {
    if (ComposableSingletons$ProfileComponentKt_instance == null)
      new ComposableSingletons$ProfileComponentKt();
    return ComposableSingletons$ProfileComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_RatingsComponent$stable;
  function RatingsComponent() {
    RatingsComponent_instance = this;
    var tmp0_label = get_app_name(string_getInstance());
    var tmp1_fragments = listOf_0(RatingsFragment_getInstance());
    Component.call(this, 'ratings_component', ComposableSingletons$RatingsComponentKt_getInstance().lambda_1_r8sbbp_1, tmp0_label, tmp1_fragments);
  }
  var RatingsComponent_instance;
  function RatingsComponent_getInstance() {
    if (RatingsComponent_instance == null)
      new RatingsComponent();
    return RatingsComponent_instance;
  }
  function org_korchagin_kmp_activity_main_components_RatingsComponent$stableprop_getter() {
    return org_korchagin_kmp_activity_main_components_RatingsComponent$stable;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RatingsComponentKt$lambda_1$lambda_9jiav9(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-905989336, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$RatingsComponentKt.lambda-1.<anonymous> (RatingsComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_getInstance()), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RatingsComponentKt() {
    ComposableSingletons$RatingsComponentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-905989336, false, ComposableSingletons$RatingsComponentKt$lambda_1$lambda_9jiav9));
  }
  protoOf(ComposableSingletons$RatingsComponentKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RatingsComponentKt_instance;
  function ComposableSingletons$RatingsComponentKt_getInstance() {
    if (ComposableSingletons$RatingsComponentKt_instance == null)
      new ComposableSingletons$RatingsComponentKt();
    return ComposableSingletons$RatingsComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_frafments_home_HomeFragment$stable;
  function HomeFragment() {
    HomeFragment_instance = this;
    Fragment.call(this, 'home_fragment', VOID, ComposableSingletons$HomeFragmentKt_getInstance().lambda_1_r8sbbp_1);
  }
  var HomeFragment_instance;
  function HomeFragment_getInstance() {
    if (HomeFragment_instance == null)
      new HomeFragment();
    return HomeFragment_instance;
  }
  function org_korchagin_kmp_activity_main_frafments_home_HomeFragment$stableprop_getter() {
    return org_korchagin_kmp_activity_main_frafments_home_HomeFragment$stable;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$HomeFragmentKt$lambda_1$lambda_u5bbh9(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(58441559, $changed, -1, 'org.korchagin.kmp.activity.main.frafments.home.ComposableSingletons$HomeFragmentKt.lambda-1.<anonymous> (HomeFragment.kt:8)');
    }
    HomeScreen(componentNavigator, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HomeFragmentKt() {
    ComposableSingletons$HomeFragmentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(58441559, false, ComposableSingletons$HomeFragmentKt$lambda_1$lambda_u5bbh9));
  }
  protoOf(ComposableSingletons$HomeFragmentKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$HomeFragmentKt_instance;
  function ComposableSingletons$HomeFragmentKt_getInstance() {
    if (ComposableSingletons$HomeFragmentKt_instance == null)
      new ComposableSingletons$HomeFragmentKt();
    return ComposableSingletons$HomeFragmentKt_instance;
  }
  function HomeScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(717950997);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(717950997, $changed, -1, 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen (HomeScreen.kt:57)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().get_current_2iudd5_k$($composer_1, 0);
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'org.koin.compose.viewmodel.koinViewModel.<anonymous>' call
            var message = 'No ViewModelStoreOwner was provided via LocalViewModelStoreOwner';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            tmp$ret$1 = value;
            break $l$block;
          }
        }
        viewModelStoreOwner = tmp$ret$1;
      }
      if (!((63 & 4) === 0))
        key = null;
      if (!((63 & 8) === 0))
        extras = defaultExtras(viewModelStoreOwner, $composer_1, 8);
      if (!((63 & 16) === 0))
        scope = currentKoinScope($composer_1, 0);
      if (!((63 & 32) === 0))
        parameters = null;
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.get_viewModelStore_ryk6ka_k$(), key, extras, qualifier, scope, parameters);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var mainViewModel = tmp0;
      var tmp = mainViewModel.get_currentPupil_slw1q6_k$();
      var currentPupil$delegate = collectAsState(tmp, null, null, $composer_0, 48, 2);
      var tmp0_safe_receiver = HomeScreen$lambda(currentPupil$delegate);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>' call
        tmp_0 = listOf_0(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_0;
      var users = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1716487938);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>' call
        var value_0 = mutableIntStateOf(ElementsTab_FREEZE_getInstance().get_ordinal_ip24qg_k$());
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var selectedTabIndex$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1716484093);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(users) | $composer_0.changedInstance_s1wkiy_k$(mainViewModel));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>' call
        var value_1 = HomeScreen$lambda_2(users, mainViewModel, selectedTabIndex$delegate);
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LazyColumn(null, null, null, false, null, null, null, false, tmp1_group, $composer_0, 0, 255);
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(HomeScreen$lambda_3(componentNavigator, $changed));
    }
  }
  function ProfileSection(curPupil, viewModel, selectedTabIndex, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-493908985);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(curPupil) ? 4 : 2);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(selectedTabIndex) ? 256 : 128);
    if (!(($dirty & 131) === 130) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-493908985, $dirty, -1, 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection (HomeScreen.kt:96)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = fillMaxWidth(Companion_getInstance_1());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_1();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp0_verticalAlignment = Companion_getInstance_2().get_CenterVertically_dmkbbz_k$();
      var tmp_0 = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = padding(tmp_0, tmp$ret$2);
      var horizontalArrangement = null;
      var verticalAlignment = tmp0_verticalAlignment;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((2 & 1) === 0))
        modifier_1 = Companion_getInstance_1();
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_2().get_Top_18jj1w_k$();
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 390 >> 3 | 112 & 390 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_1();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_3().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection.<anonymous>.<anonymous>' call
      RowScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = null;
      var verticalArrangement_0 = Arrangement_getInstance().get_Center_3arb0i_k$();
      var horizontalAlignment_0 = null;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((5 & 1) === 0))
        modifier_3 = Companion_getInstance_1();
      if (!((5 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((5 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy_1 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_11, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_1();
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(factory_1);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.get_inserting_25mlsw_k$() || !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
        $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_3().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection.<anonymous>.<anonymous>.<anonymous>' call
      var $this$Column = ColumnScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = curPupil.get_avatar_b5pjz6_k$();
      if (charSequenceLength(this_0) === 0) {
        $composer_15.startReplaceGroup_5hh8aj_k$(1205585251);
        var tmp_3 = painterResource(get_compose_multiplatform(drawable_getInstance()), $composer_15, 0);
        var tmp_4 = Companion_getInstance_1();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(64);
        var tmp_5 = aspectRatio(width(tmp_4, tmp$ret$8), 1.0);
        Image(tmp_3, null, tmp_5, null, null, 0.0, null, $composer_15, 432, 120);
        $composer_15.endReplaceGroup_ek144q_k$();
      } else {
        $composer_15.startReplaceGroup_5hh8aj_k$(1205868932);
        var tmp_6 = curPupil.get_avatar_b5pjz6_k$();
        var tmp_7 = Companion_getInstance_1();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$9 = _Dp___init__impl__ms3zkb(64);
        var tmp_8 = aspectRatio(width(tmp_7, tmp$ret$9), 1.0);
        var tmp_9 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage(tmp_6, null, tmp_8, null, null, null, null, 0.0, null, tmp_9, false, $composer_15, 432, 0, 2040);
        $composer_15.endReplaceGroup_ek144q_k$();
      }
      var tmp_10 = $this$Column.align_92hj17_k$(Companion_getInstance_1(), Companion_getInstance_2().get_CenterHorizontally_97ab0v_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(5);
      var tmp3_modifier = padding_0(tmp_10, VOID, tmp$ret$10);
      var tmp4_fontFamily = Companion_getInstance_4().get_Serif_igv9ro_k$();
      var tmp5_color = Companion_getInstance_0().get_Gray_ci51t9_k$();
      var tmp0_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
      var tmp1_fontSize = get_sp(10);
      var tmp2_fontWeight = Companion_getInstance_6().get_Bold_wnz5ke_k$();
      var tmp6_style = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_textAlign);
      var tmp7_textDecoration = Companion_getInstance_7().get_Underline_oo7egz_k$();
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440', tmp3_modifier, tmp5_color, tmp_11, null, null, tmp4_fontFamily, tmp_12, tmp7_textDecoration, null, tmp_13, tmp_14, false, 0, 0, null, tmp6_style, $composer_15, 100663686, 0, 65208);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      var tmp_15 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$11 = _Dp___init__impl__ms3zkb(4);
      Spacer(width(tmp_15, tmp$ret$11), $composer_10, 6);
      InfoSection(curPupil, selectedTabIndex, null, $composer_10, 14 & $dirty | 112 & $dirty >> 3, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProfileSection$lambda(curPupil, viewModel, selectedTabIndex, $changed));
    }
  }
  function InfoSection(curPupil, selectedElementsTab, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-530971342);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(curPupil) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(selectedElementsTab) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-530971342, $dirty, -1, 'org.korchagin.kmp.activity.main.frafments.home.screen.InfoSection (HomeScreen.kt:148)');
      }
      var text = '';
      var rating = 0;
      var tmp0_horizontalAlignment = Companion_getInstance_2().get_CenterHorizontally_97ab0v_k$();
      var tmp1_verticalArrangement = Arrangement_getInstance().get_SpaceAround_1tvu22_k$();
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var $changed_0 = 432 | 14 & $dirty >> 6;
      var modifier_1 = modifier_0._v;
      var verticalArrangement = tmp1_verticalArrangement;
      var horizontalAlignment = tmp0_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_1();
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_1();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.InfoSection.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp3_text = curPupil.get_name_woqyms_k$();
      var tmp0_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
      var tmp1_fontSize = get_sp(20);
      var tmp2_fontWeight = Companion_getInstance_6().get_Bold_wnz5ke_k$();
      var tmp4_style = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_textAlign);
      var tmp_0 = graphicsLayer(Companion_getInstance_1(), VOID, VOID, 0.8);
      $composer_5.startReplaceGroup_5hh8aj_k$(471329245);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.InfoSection.<anonymous>.<anonymous>' call
        var value = InfoSection$lambda;
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      var tmp5_modifier = drawWithCache(tmp_0, tmp0_group);
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp3_text, tmp5_modifier, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp4_style, $composer_5, 0, 0, 65532);
      var tmp_8 = setLevel(numberToInt(curPupil.get_rating_iw9d46_k$()));
      var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextOverflow___init__impl__obguoe(0);
      var tmp6_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
      var tmp7_fontSize = get_sp(16);
      var tmp8_fontWeight = Companion_getInstance_6().get_Bold_wnz5ke_k$();
      Text(tmp_8, null, tmp_9, tmp_10, null, null, null, tmp_11, null, null, tmp_12, tmp_13, false, 0, 0, null, TextStyle_init_$Create$(VOID, tmp7_fontSize, tmp8_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp6_textAlign), $composer_5, 0, 0, 65534);
      if (selectedElementsTab === ElementsTab_FREEZE_getInstance().get_ordinal_ip24qg_k$()) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0444\u0440\u0438\u0437\u0430\u043C: ';
        rating = numberToInt(curPupil.get_freezeRating_hx7vq5_k$());
      } else if (selectedElementsTab === ElementsTab_POWER_getInstance().get_ordinal_ip24qg_k$()) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E PowerMoves: ';
        rating = numberToInt(curPupil.get_powermoveRating_pqg11y_k$());
      } else if (selectedElementsTab === ElementsTab_OFP_getInstance().get_ordinal_ip24qg_k$()) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u041E\u0424\u041F: ';
        rating = numberToInt(curPupil.get_ofpRating_yvr5tf_k$());
      } else if (selectedElementsTab === ElementsTab_STRETCH_getInstance().get_ordinal_ip24qg_k$()) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0440\u0430\u0441\u0442\u044F\u0436\u043A\u0435: ';
        rating = numberToInt(curPupil.get_strechingRating_pjs2g3_k$());
      }
      var tmp13_modifier = animateContentSize(Companion_getInstance_1(), tween(400, VOID, get_FastOutSlowInEasing()));
      var tmp14_text = text;
      var tmp10_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
      var tmp11_fontSize = get_sp(14);
      var tmp12_fontWeight = Companion_getInstance_6().get_Bold_wnz5ke_k$();
      var tmp15_style = TextStyle_init_$Create$(VOID, tmp11_fontSize, tmp12_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp10_textAlign);
      var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp14_text, tmp13_modifier, tmp_14, tmp_15, null, null, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, tmp15_style, $composer_5, 0, 0, 65532);
      CustomProgressBar1(rating, $composer_5, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(InfoSection$lambda_0(curPupil, selectedElementsTab, modifier_0, $changed, $default));
    }
  }
  function CustomProgressBar1(progress, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1082303434);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(progress) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1082303434, $dirty, -1, 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1 (HomeScreen.kt:233)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-374206940);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>' call
        var value = Animatable(0.0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var animatedProgress = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-374204789);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(animatedProgress) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>' call
        var value_0 = CustomProgressBar1$slambda_0(animatedProgress, progress, null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect_0(progress, tmp1_group, $composer_0, 14 & $dirty);
      var tmp_3 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$8 = _Dp___init__impl__ms3zkb(4);
      var tmp_4 = padding_0(tmp_3, VOID, tmp$ret$8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_5 = _Dp___init__impl__ms3zkb(1);
      var tmp_6 = Companion_getInstance_0().get_Gray_ci51t9_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(15);
      var tmp0_modifier = fillMaxWidth(border(tmp_4, tmp_5, tmp_6, RoundedCornerShape(tmp$ret$10)));
      var tmp1_horizontalAlignment = Companion_getInstance_2().get_CenterHorizontally_97ab0v_k$();
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().get_Center_3arb0i_k$();
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_1();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_7 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_7, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_8 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(15);
      var tmp_9 = clip(tmp_8, RoundedCornerShape(tmp$ret$13));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(30);
      var tmp_10 = background(height(tmp_9, tmp$ret$14), Companion_getInstance_0().get_White_xpp3qf_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(300);
      var modifier_1 = width(tmp_10, tmp$ret$15);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_2().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_1();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_11 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_11, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_3().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>.<anonymous>' call
      var $this$Box = BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      var tmp_12 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(15);
      var tmp_13 = clip(tmp_12, RoundedCornerShape(tmp$ret$18));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$19 = _Dp___init__impl__ms3zkb(30);
      Box(fillMaxWidth(background_0(height(tmp_13, tmp$ret$19), Companion_getInstance_8().horizontalGradient$default_bgcgs7_k$(listOf([new Color_0(Companion_getInstance_0().get_White_xpp3qf_k$()), new Color_0(Companion_getInstance_0().get_Green_dkzwf_k$())]))), animatedProgress.get_value_j01efc_k$() / 100.0), $composer_10, 0);
      var tmp0_text = '' + progress + ' %';
      var tmp1_modifier = $this$Box.align_uxv7cf_k$(Companion_getInstance_1(), Companion_getInstance_2().get_Center_3arb0i_k$());
      var tmp2_fontSize = get_sp(15);
      var tmp3_fontWeight = Companion_getInstance_6().get_Bold_wnz5ke_k$();
      var tmp4_color = Companion_getInstance_0().get_Black_t4k9fh_k$();
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp0_text, tmp1_modifier, tmp4_color, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_10, 200064, 0, 131024);
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
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(CustomProgressBar1$lambda(progress, $changed));
    }
  }
  function setLevel(rating) {
    return (0 <= rating ? rating <= 9 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 0' : (10 <= rating ? rating <= 19 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 1' : (20 <= rating ? rating <= 29 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 2' : (30 <= rating ? rating <= 39 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 3' : (40 <= rating ? rating <= 49 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 4' : (50 <= rating ? rating <= 59 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 5' : (60 <= rating ? rating <= 69 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 6' : (70 <= rating ? rating <= 79 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 7' : (80 <= rating ? rating <= 89 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 8' : (90 <= rating ? rating <= 99 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 9' : '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 10';
  }
  var ElementsTab_FREEZE_instance;
  var ElementsTab_POWER_instance;
  var ElementsTab_OFP_instance;
  var ElementsTab_STRETCH_instance;
  function values_0() {
    return [ElementsTab_FREEZE_getInstance(), ElementsTab_POWER_getInstance(), ElementsTab_OFP_getInstance(), ElementsTab_STRETCH_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'FREEZE':
        return ElementsTab_FREEZE_getInstance();
      case 'POWER':
        return ElementsTab_POWER_getInstance();
      case 'OFP':
        return ElementsTab_OFP_getInstance();
      case 'STRETCH':
        return ElementsTab_STRETCH_getInstance();
      default:
        ElementsTab_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ElementsTab_entriesInitialized;
  function ElementsTab_initEntries() {
    if (ElementsTab_entriesInitialized)
      return Unit_getInstance();
    ElementsTab_entriesInitialized = true;
    ElementsTab_FREEZE_instance = new ElementsTab('FREEZE', 0);
    ElementsTab_POWER_instance = new ElementsTab('POWER', 1);
    ElementsTab_OFP_instance = new ElementsTab('OFP', 2);
    ElementsTab_STRETCH_instance = new ElementsTab('STRETCH', 3);
  }
  var $ENTRIES_0;
  function ElementsTab(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HomeScreen$lambda($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.get_value_j01efc_k$();
  }
  function HomeScreen$lambda_0($selectedTabIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedTabIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedTabIndex$delegate.get_intValue_mlvnn9_k$();
  }
  function HomeScreen$lambda_1($selectedTabIndex$delegate, _set____db54di) {
    getLocalDelegateReference('selectedTabIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedTabIndex$delegate.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function HomeScreen$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.get_c1px32_k$(index));
    };
  }
  function HomeScreen$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.get_c1px32_k$(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function HomeScreen$lambda$lambda_1($items, $mainViewModel, $users, $selectedTabIndex$delegate) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>.<anonymous>.<anonymous>' call
        var user = $items.get_c1px32_k$(it);
        var $changed_0 = 14 & $dirty | 112 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceGroup_5hh8aj_k$(1505381646);
        ProfileSection(user, $mainViewModel, HomeScreen$lambda_0($selectedTabIndex$delegate), $composer_1, 14 & $changed_0 >> 6);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_2 = fillMaxWidth(Companion_getInstance_1());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding(tmp_2, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_2().get_CenterVertically_dmkbbz_k$();
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_getInstance_1();
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_2().get_Top_18jj1w_k$();
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 390 >> 3 | 112 & 390 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance_1();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_3, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.get_applier_bupu8u_k$();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        RowScopeInstance_getInstance();
        var $composer_6 = $composer_5;
        println('avatar: ' + $users.get_c1px32_k$(it).get_avatar_b5pjz6_k$());
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = $users.get_c1px32_k$(it).get_avatar_b5pjz6_k$();
        if (charSequenceLength(this_0) === 0) {
          $composer_6.startReplaceGroup_5hh8aj_k$(-892235083);
          var tmp_4 = painterResource(get_compose_multiplatform(drawable_getInstance()), $composer_6, 0);
          var tmp_5 = Companion_getInstance_1();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(64);
          var tmp_6 = aspectRatio(width(tmp_5, tmp$ret$4), 1.0);
          Image(tmp_4, null, tmp_6, null, null, 0.0, null, $composer_6, 432, 120);
          $composer_6.endReplaceGroup_ek144q_k$();
        } else {
          $composer_6.startReplaceGroup_5hh8aj_k$(-891951278);
          var tmp_7 = $users.get_c1px32_k$(it).get_avatar_b5pjz6_k$();
          var tmp_8 = Companion_getInstance_1();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(64);
          var tmp_9 = aspectRatio(width(tmp_8, tmp$ret$5), 1.0);
          var tmp_10 = _FilterQuality___init__impl__nv51aq(0);
          AsyncImage(tmp_7, null, tmp_9, null, null, null, null, 0.0, null, tmp_10, false, $composer_6, 432, 0, 2040);
          $composer_6.endReplaceGroup_ek144q_k$();
        }
        var tmp_11 = $users.get_c1px32_k$(it).get_name_woqyms_k$();
        var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_11, null, tmp_12, tmp_13, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        var tmp_17 = Companion_getInstance_1();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(16);
        Spacer(width(tmp_17, tmp$ret$6), $composer_6, 6);
        var tmp_18 = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ' + $users.get_c1px32_k$(it).get_rating_iw9d46_k$();
        var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_23 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_18, null, tmp_19, tmp_20, null, null, null, tmp_21, null, null, tmp_22, tmp_23, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.endReplaceGroup_ek144q_k$();
        var tmp_24;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_24 = Unit_getInstance();
        }
        tmp_1 = tmp_24;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HomeScreen$lambda_2($users, $mainViewModel, $selectedTabIndex$delegate) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = $users;
      var tmp = items.get_size_woubt6_k$();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = HomeScreen$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = HomeScreen$lambda$lambda_0(items);
      $this$LazyColumn.items_m6orkv_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_9(composableLambdaInstance(-1091073711, true, HomeScreen$lambda$lambda_1(items, $mainViewModel, $users, $selectedTabIndex$delegate))));
      return Unit_getInstance();
    };
  }
  function HomeScreen$lambda_3($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProfileSection$lambda($curPupil, $viewModel, $selectedTabIndex, $$changed) {
    return function ($composer, $force) {
      ProfileSection($curPupil, $viewModel, $selectedTabIndex, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function InfoSection$lambda($this$drawWithCache) {
    return $this$drawWithCache.onDrawWithContent_9a7tsh_k$(InfoSection$lambda$lambda);
  }
  function InfoSection$lambda$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.drawContent_m0wwjp_k$();
    $this$onDrawWithContent.drawRect$default_rrw2w5_k$(Companion_getInstance_8().horizontalGradient$default_bgcgs7_k$(listOf([new Color_0(Companion_getInstance_0().get_DarkGray_6zzecp_k$()), new Color_0(Companion_getInstance_0().get_Black_t4k9fh_k$())])), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_9().get_SrcAtop_z2kmd7_k$());
    return Unit_getInstance();
  }
  function InfoSection$lambda_0($curPupil, $selectedElementsTab, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoSection($curPupil, $selectedElementsTab, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CustomProgressBar1$slambda($animatedProgress, $progress, resultContinuation) {
    this.$animatedProgress_1 = $animatedProgress;
    this.$progress_1 = $progress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CustomProgressBar1$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CustomProgressBar1$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CustomProgressBar1$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$animatedProgress_1.animateTo$default_71hueo_k$(this.$progress_1, tween(1500), VOID, VOID, this);
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
  protoOf(CustomProgressBar1$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new CustomProgressBar1$slambda(this.$animatedProgress_1, this.$progress_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(CustomProgressBar1$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function CustomProgressBar1$slambda_0($animatedProgress, $progress, resultContinuation) {
    var i = new CustomProgressBar1$slambda($animatedProgress, $progress, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CustomProgressBar1$lambda($progress, $$changed) {
    return function ($composer, $force) {
      CustomProgressBar1($progress, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ElementsTab_FREEZE_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_FREEZE_instance;
  }
  function ElementsTab_POWER_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_POWER_instance;
  }
  function ElementsTab_OFP_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_OFP_instance;
  }
  function ElementsTab_STRETCH_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_STRETCH_instance;
  }
  var org_korchagin_kmp_activity_main_frafments_profile_ProfileFragment$stable;
  function ProfileFragment() {
    ProfileFragment_instance = this;
    Fragment.call(this, 'profile_fragment', VOID, ComposableSingletons$ProfileFragmentKt_getInstance().lambda_1_r8sbbp_1);
  }
  var ProfileFragment_instance;
  function ProfileFragment_getInstance() {
    if (ProfileFragment_instance == null)
      new ProfileFragment();
    return ProfileFragment_instance;
  }
  function org_korchagin_kmp_activity_main_frafments_profile_ProfileFragment$stableprop_getter() {
    return org_korchagin_kmp_activity_main_frafments_profile_ProfileFragment$stable;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$ProfileFragmentKt$lambda_1$lambda_5n4ygf(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-548716211, $changed, -1, 'org.korchagin.kmp.activity.main.frafments.profile.ComposableSingletons$ProfileFragmentKt.lambda-1.<anonymous> (ProfileFragment.kt:9)');
    }
    ProfileScreen(componentNavigator, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ProfileFragmentKt() {
    ComposableSingletons$ProfileFragmentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-548716211, false, ComposableSingletons$ProfileFragmentKt$lambda_1$lambda_5n4ygf));
  }
  protoOf(ComposableSingletons$ProfileFragmentKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ProfileFragmentKt_instance;
  function ComposableSingletons$ProfileFragmentKt_getInstance() {
    if (ComposableSingletons$ProfileFragmentKt_instance == null)
      new ComposableSingletons$ProfileFragmentKt();
    return ComposableSingletons$ProfileFragmentKt_instance;
  }
  function ProfileScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1213627053);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1213627053, $changed, -1, 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen (ProfileScreen.kt:30)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().get_current_2iudd5_k$($composer_1, 0);
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'org.koin.compose.viewmodel.koinViewModel.<anonymous>' call
            var message = 'No ViewModelStoreOwner was provided via LocalViewModelStoreOwner';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            tmp$ret$1 = value;
            break $l$block;
          }
        }
        viewModelStoreOwner = tmp$ret$1;
      }
      if (!((63 & 4) === 0))
        key = null;
      if (!((63 & 8) === 0))
        extras = defaultExtras(viewModelStoreOwner, $composer_1, 8);
      if (!((63 & 16) === 0))
        scope = currentKoinScope($composer_1, 0);
      if (!((63 & 32) === 0))
        parameters = null;
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.get_viewModelStore_ryk6ka_k$(), key, extras, qualifier, scope, parameters);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var mainViewModel = tmp0;
      var tmp = mainViewModel.get_currentPupil_slw1q6_k$();
      var currentPupil$delegate = collectAsState(tmp, null, null, $composer_0, 48, 2);
      var tmp0_safe_receiver = ProfileScreen$lambda(currentPupil$delegate);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>' call
        tmp_0 = listOf_0(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_0;
      var users = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
      $composer_0.startReplaceGroup_5hh8aj_k$(-37690787);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changedInstance_s1wkiy_k$(users);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>' call
        var value_0 = ProfileScreen$lambda_0(users);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LazyColumn(null, null, null, false, null, null, null, false, tmp0_group, $composer_0, 0, 255);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ProfileScreen$lambda_1(componentNavigator, $changed));
    }
  }
  function ProfileScreen$lambda($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.get_value_j01efc_k$();
  }
  function ProfileScreen$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.get_c1px32_k$(index));
    };
  }
  function ProfileScreen$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.get_c1px32_k$(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ProfileScreen$lambda$lambda_1($items, $users) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>' call
        $items.get_c1px32_k$(it);
        var $composer_1 = $composer_0;
        $composer_1.startReplaceGroup_5hh8aj_k$(-592644427);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_2 = fillMaxWidth(Companion_getInstance_1());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding(tmp_2, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_2().get_CenterVertically_dmkbbz_k$();
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_getInstance_1();
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_2().get_Top_18jj1w_k$();
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 390 >> 3 | 112 & 390 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance_1();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_3, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.get_applier_bupu8u_k$();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        RowScopeInstance_getInstance();
        var $composer_6 = $composer_5;
        println('avatar: ' + $users.get_c1px32_k$(it).get_avatar_b5pjz6_k$());
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = $users.get_c1px32_k$(it).get_avatar_b5pjz6_k$();
        if (charSequenceLength(this_0) === 0) {
          $composer_6.startReplaceGroup_5hh8aj_k$(715532187);
          var tmp_4 = painterResource(get_compose_multiplatform(drawable_getInstance()), $composer_6, 0);
          var tmp_5 = Companion_getInstance_1();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(64);
          var tmp_6 = aspectRatio(width(tmp_5, tmp$ret$4), 1.0);
          Image(tmp_4, null, tmp_6, null, null, 0.0, null, $composer_6, 432, 120);
          $composer_6.endReplaceGroup_ek144q_k$();
        } else {
          $composer_6.startReplaceGroup_5hh8aj_k$(715817015);
          var tmp_7 = Companion_getInstance_1();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(64);
          var tmp_8 = aspectRatio(width(tmp_7, tmp$ret$5), 1.0);
          var tmp_9 = _FilterQuality___init__impl__nv51aq(0);
          AsyncImage('https://avatars.githubusercontent.com/u/583231?v=4', null, tmp_8, null, null, null, null, 0.0, null, tmp_9, false, $composer_6, 438, 0, 2040);
          $composer_6.endReplaceGroup_ek144q_k$();
        }
        var tmp_10 = $users.get_c1px32_k$(it).get_name_woqyms_k$();
        var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_10, null, tmp_11, tmp_12, null, null, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        var tmp_16 = Companion_getInstance_1();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(16);
        Spacer(width(tmp_16, tmp$ret$6), $composer_6, 6);
        var tmp_17 = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ' + $users.get_c1px32_k$(it).get_rating_iw9d46_k$();
        var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_17, null, tmp_18, tmp_19, null, null, null, tmp_20, null, null, tmp_21, tmp_22, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.endReplaceGroup_ek144q_k$();
        var tmp_23;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_23 = Unit_getInstance();
        }
        tmp_1 = tmp_23;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ProfileScreen$lambda_0($users) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = $users;
      var tmp = items.get_size_woubt6_k$();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = ProfileScreen$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = ProfileScreen$lambda$lambda_0(items);
      $this$LazyColumn.items_m6orkv_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_11(composableLambdaInstance(-1091073711, true, ProfileScreen$lambda$lambda_1(items, $users))));
      return Unit_getInstance();
    };
  }
  function ProfileScreen$lambda_1($componentNavigator, $$changed) {
    return function ($composer, $force) {
      ProfileScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var org_korchagin_kmp_activity_main_frafments_ratings_RatingsFragment$stable;
  function RatingsFragment() {
    RatingsFragment_instance = this;
    Fragment.call(this, 'ratings_fragment', VOID, ComposableSingletons$RatingsFragmentKt_getInstance().lambda_1_r8sbbp_1);
  }
  var RatingsFragment_instance;
  function RatingsFragment_getInstance() {
    if (RatingsFragment_instance == null)
      new RatingsFragment();
    return RatingsFragment_instance;
  }
  function org_korchagin_kmp_activity_main_frafments_ratings_RatingsFragment$stableprop_getter() {
    return org_korchagin_kmp_activity_main_frafments_ratings_RatingsFragment$stable;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$RatingsFragmentKt$lambda_1$lambda_n82bk4(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-879222470, $changed, -1, 'org.korchagin.kmp.activity.main.frafments.ratings.ComposableSingletons$RatingsFragmentKt.lambda-1.<anonymous> (RatingsFragment.kt:9)');
    }
    RatingsScreen(componentNavigator, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RatingsFragmentKt() {
    ComposableSingletons$RatingsFragmentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-879222470, false, ComposableSingletons$RatingsFragmentKt$lambda_1$lambda_n82bk4));
  }
  protoOf(ComposableSingletons$RatingsFragmentKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RatingsFragmentKt_instance;
  function ComposableSingletons$RatingsFragmentKt_getInstance() {
    if (ComposableSingletons$RatingsFragmentKt_instance == null)
      new ComposableSingletons$RatingsFragmentKt();
    return ComposableSingletons$RatingsFragmentKt_instance;
  }
  function RatingsScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2048427430);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2048427430, $changed, -1, 'org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen (RatingsScreen.kt:29)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().get_current_2iudd5_k$($composer_1, 0);
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'org.koin.compose.viewmodel.koinViewModel.<anonymous>' call
            var message = 'No ViewModelStoreOwner was provided via LocalViewModelStoreOwner';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            tmp$ret$1 = value;
            break $l$block;
          }
        }
        viewModelStoreOwner = tmp$ret$1;
      }
      if (!((63 & 4) === 0))
        key = null;
      if (!((63 & 8) === 0))
        extras = defaultExtras(viewModelStoreOwner, $composer_1, 8);
      if (!((63 & 16) === 0))
        scope = currentKoinScope($composer_1, 0);
      if (!((63 & 32) === 0))
        parameters = null;
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.get_viewModelStore_ryk6ka_k$(), key, extras, qualifier, scope, parameters);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var mainViewModel = tmp0;
      var tmp = mainViewModel.get_pupils_i93g7i_k$();
      var tmp_0 = emptyList();
      var users$delegate = collectAsState(tmp, tmp_0, null, $composer_0, 48, 2);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1885463204);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(users$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen.<anonymous>' call
        var value_0 = RatingsScreen$lambda_0(users$delegate);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LazyColumn(null, null, null, false, null, null, null, false, tmp0_group, $composer_0, 0, 255);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(RatingsScreen$lambda_1(componentNavigator, $changed));
    }
  }
  function RatingsScreen$lambda($users$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('users', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $users$delegate.get_value_j01efc_k$();
  }
  function RatingsScreen$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.get_c1px32_k$(index));
    };
  }
  function RatingsScreen$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.get_c1px32_k$(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function RatingsScreen$lambda$lambda_1($items, $users$delegate) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen.<anonymous>.<anonymous>.<anonymous>' call
        $items.get_c1px32_k$(it);
        var $composer_1 = $composer_0;
        $composer_1.startReplaceGroup_5hh8aj_k$(644336534);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_2 = fillMaxWidth(Companion_getInstance_1());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding(tmp_2, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_2().get_CenterVertically_dmkbbz_k$();
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_getInstance_1();
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_2().get_Top_18jj1w_k$();
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 390 >> 3 | 112 & 390 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_getInstance_1();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_3, modifier_0);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.get_applier_bupu8u_k$();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        RowScopeInstance_getInstance();
        var $composer_6 = $composer_5;
        println('avatar: ' + RatingsScreen$lambda($users$delegate).get_c1px32_k$(it).get_avatar_b5pjz6_k$());
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = RatingsScreen$lambda($users$delegate).get_c1px32_k$(it).get_avatar_b5pjz6_k$();
        if (charSequenceLength(this_0) === 0) {
          $composer_6.startReplaceGroup_5hh8aj_k$(525766779);
          var tmp_4 = painterResource(get_compose_multiplatform(drawable_getInstance()), $composer_6, 0);
          var tmp_5 = Companion_getInstance_1();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(64);
          var tmp_6 = aspectRatio(width(tmp_5, tmp$ret$4), 1.0);
          Image(tmp_4, null, tmp_6, null, null, 0.0, null, $composer_6, 432, 120);
          $composer_6.endReplaceGroup_ek144q_k$();
        } else {
          $composer_6.startReplaceGroup_5hh8aj_k$(526050584);
          var tmp_7 = RatingsScreen$lambda($users$delegate).get_c1px32_k$(it).get_avatar_b5pjz6_k$();
          var tmp_8 = Companion_getInstance_1();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(64);
          var tmp_9 = aspectRatio(width(tmp_8, tmp$ret$5), 1.0);
          var tmp_10 = _FilterQuality___init__impl__nv51aq(0);
          AsyncImage(tmp_7, null, tmp_9, null, null, null, null, 0.0, null, tmp_10, false, $composer_6, 432, 0, 2040);
          $composer_6.endReplaceGroup_ek144q_k$();
        }
        var tmp_11 = RatingsScreen$lambda($users$delegate).get_c1px32_k$(it).get_name_woqyms_k$();
        var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_11, null, tmp_12, tmp_13, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        var tmp_17 = Companion_getInstance_1();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(16);
        Spacer(width(tmp_17, tmp$ret$6), $composer_6, 6);
        var tmp_18 = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ' + RatingsScreen$lambda($users$delegate).get_c1px32_k$(it).get_rating_iw9d46_k$();
        var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_23 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_18, null, tmp_19, tmp_20, null, null, null, tmp_21, null, null, tmp_22, tmp_23, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.endReplaceGroup_ek144q_k$();
        var tmp_24;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_24 = Unit_getInstance();
        }
        tmp_1 = tmp_24;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function RatingsScreen$lambda_0($users$delegate) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = RatingsScreen$lambda($users$delegate);
      var tmp = items.get_size_woubt6_k$();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = RatingsScreen$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = RatingsScreen$lambda$lambda_0(items);
      $this$LazyColumn.items_m6orkv_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_13(composableLambdaInstance(-1091073711, true, RatingsScreen$lambda$lambda_1(items, $users$delegate))));
      return Unit_getInstance();
    };
  }
  function RatingsScreen$lambda_1($componentNavigator, $$changed) {
    return function ($composer, $force) {
      RatingsScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var org_korchagin_kmp_activity_splash_SplashActivity$stable;
  function SplashActivity() {
    SplashActivity_instance = this;
    Activity.call(this, 'auth_activity', listOf_0(SplashComponent_getInstance()), ComposableSingletons$SplashActivityKt_getInstance().lambda_1_r8sbbp_1);
  }
  var SplashActivity_instance;
  function SplashActivity_getInstance() {
    if (SplashActivity_instance == null)
      new SplashActivity();
    return SplashActivity_instance;
  }
  function org_korchagin_kmp_activity_splash_SplashActivity$stableprop_getter() {
    return org_korchagin_kmp_activity_splash_SplashActivity$stable;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SplashActivityKt$lambda_1$lambda_r7joq2(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1375845529, $changed, -1, 'org.korchagin.kmp.activity.splash.ComposableSingletons$SplashActivityKt.lambda-1.<anonymous> (SplashActivity.kt:12)');
    }
    // Inline function 'org.koin.compose.koinInject' call
    var qualifier = null;
    var scope = null;
    var parameters = null;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(414512006);
    if (!((7 & 1) === 0))
      qualifier = null;
    if (!((7 & 2) === 0))
      scope = currentKoinScope($composer_1, 0);
    if (!((7 & 4) === 0))
      parameters = null;
    var currentParameters$delegate = rememberUpdatedState(parameters, $composer_1, 14 & 0 >> 6);
    $composer_1.startReplaceableGroup_ip860b_k$(855641119);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(qualifier) | $composer_1.changed_ga7h3f_k$(scope));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.koin.compose.koinInject.<anonymous>' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var this_0 = scope;
      var qualifier_0 = qualifier;
      var parameters_0 = ComposableSingletons$SplashActivityKt$lambda_1$lambda$lambda_rplcch(currentParameters$delegate);
      var value = this_0.get_80ko8d_k$(getKClass(MainViewModel), qualifier_0, parameters_0);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var viewModel = tmp1_group;
    ActivityScaffold(components, null, null, null, null, false, false, $composer_0, 14 & $changed, 126);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function invoke$lambda_5($currentParameters$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentParameters', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentParameters$delegate.get_value_j01efc_k$();
  }
  function ComposableSingletons$SplashActivityKt$lambda_1$lambda$lambda_rplcch($currentParameters$delegate) {
    return function () {
      var tmp0_safe_receiver = invoke$lambda_5($currentParameters$delegate);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      return tmp1_elvis_lhs == null ? emptyParametersHolder() : tmp1_elvis_lhs;
    };
  }
  function ComposableSingletons$SplashActivityKt() {
    ComposableSingletons$SplashActivityKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1375845529, false, ComposableSingletons$SplashActivityKt$lambda_1$lambda_r7joq2));
  }
  protoOf(ComposableSingletons$SplashActivityKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$SplashActivityKt_instance;
  function ComposableSingletons$SplashActivityKt_getInstance() {
    if (ComposableSingletons$SplashActivityKt_instance == null)
      new ComposableSingletons$SplashActivityKt();
    return ComposableSingletons$SplashActivityKt_instance;
  }
  var org_korchagin_kmp_activity_splash_components_SplashComponent$stable;
  function SplashComponent() {
    SplashComponent_instance = this;
    Component.call(this, 'splash_component', VOID, VOID, listOf_0(SplashFragment_getInstance()));
  }
  var SplashComponent_instance;
  function SplashComponent_getInstance() {
    if (SplashComponent_instance == null)
      new SplashComponent();
    return SplashComponent_instance;
  }
  function org_korchagin_kmp_activity_splash_components_SplashComponent$stableprop_getter() {
    return org_korchagin_kmp_activity_splash_components_SplashComponent$stable;
  }
  var org_korchagin_kmp_activity_splash_fragments_SplashFragment$stable;
  function SplashFragment() {
    SplashFragment_instance = this;
    Fragment.call(this, 'splash_fragment', VOID, ComposableSingletons$SplashFragmentKt_getInstance().lambda_1_r8sbbp_1);
  }
  var SplashFragment_instance;
  function SplashFragment_getInstance() {
    if (SplashFragment_instance == null)
      new SplashFragment();
    return SplashFragment_instance;
  }
  function org_korchagin_kmp_activity_splash_fragments_SplashFragment$stableprop_getter() {
    return org_korchagin_kmp_activity_splash_fragments_SplashFragment$stable;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$SplashFragmentKt$lambda_1$lambda_yuc4k5(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(980364363, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.ComposableSingletons$SplashFragmentKt.lambda-1.<anonymous> (SplashFragment.kt:10)');
    }
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.korchagin.kmp.activity.splash.fragments.ComposableSingletons$SplashFragmentKt.lambda-1.<anonymous>.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(-1766910279, true, ComposableSingletons$SplashFragmentKt$lambda_1$lambda$lambda_n0e1y8(componentNavigator), $composer_0, 54);
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
      // Inline function 'org.korchagin.kmp.activity.splash.fragments.ComposableSingletons$SplashFragmentKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    FragmentBox(null, null, tmp0, $composer_0, 384, 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SplashFragmentKt$lambda_1$lambda$lambda_n0e1y8($componentNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1766910279, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.ComposableSingletons$SplashFragmentKt.lambda-1.<anonymous>.<anonymous> (SplashFragment.kt:11)');
        }
        SplashScreen($componentNavigator, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SplashFragmentKt() {
    ComposableSingletons$SplashFragmentKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(980364363, false, ComposableSingletons$SplashFragmentKt$lambda_1$lambda_yuc4k5));
  }
  protoOf(ComposableSingletons$SplashFragmentKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$SplashFragmentKt_instance;
  function ComposableSingletons$SplashFragmentKt_getInstance() {
    if (ComposableSingletons$SplashFragmentKt_instance == null)
      new ComposableSingletons$SplashFragmentKt();
    return ComposableSingletons$SplashFragmentKt_instance;
  }
  function SplashScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-348898267);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-348898267, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen (SplashScreen.kt:16)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-195468558);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>' call
        var value = SplashScreen$slambda_0(null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect_0(Unit_getInstance(), tmp0_group, $composer_0, 6);
      var gifNames = listOf(['break_splash1', 'break_splash2', 'break_splash3', 'break_splash4', 'break_splash5']);
      // Inline function 'kotlin.collections.random' call
      var randomGifName = random(gifNames, Default_getInstance());
      var gifUrl = 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/Logo%2Fbreak_splash1.gif?alt=media&token=7086ff5c-a41e-4740-8358-f31a2d4c53b6';
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_getInstance_1());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_2().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_1();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      if (get_currentPlatform().get_ordinal_ip24qg_k$() === 1) {
        $composer_5.startReplaceGroup_5hh8aj_k$(881706842);
        GifImage(gifUrl, $composer_5, 6);
        $composer_5.endReplaceGroup_ek144q_k$();
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(881822596);
        GifImage(randomGifName, $composer_5, 0);
        $composer_5.endReplaceGroup_ek144q_k$();
      }
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
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SplashScreen$lambda(componentNavigator, $changed));
    }
  }
  function SplashScreen$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SplashScreen$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SplashScreen$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SplashScreen$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(3000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            GlobalNavigation_getInstance().navigateToActivity$default_aks31i_k$(MainActivity_getInstance());
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
  protoOf(SplashScreen$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new SplashScreen$slambda(completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(SplashScreen$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SplashScreen$slambda_0(resultContinuation) {
    var i = new SplashScreen$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SplashScreen$lambda($componentNavigator, $$changed) {
    return function ($composer, $force) {
      SplashScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function initKoin(config) {
    config = config === VOID ? null : config;
    startKoin(initKoin$lambda(config));
  }
  function initKoin$lambda($config) {
    return function ($this$startKoin) {
      var tmp0_safe_receiver = $config;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$startKoin);
      $this$startKoin.modules_r3qc1t_k$(getMainModules());
      return Unit_getInstance();
    };
  }
  var org_korchagin_kmp_theme_colors_AppColorsDefined_LightTheme$stable;
  var org_korchagin_kmp_theme_colors_AppColorsDefined_DarkTheme$stable;
  var org_korchagin_kmp_theme_colors_AppColors$stable;
  var org_korchagin_kmp_theme_colors_AppColorsTheme$stable;
  var org_korchagin_kmp_theme_colors_Colors$stable;
  function LightTheme() {
    LightTheme_instance = this;
    this.primaryColor_1 = Color(new Long(-14523986, 0));
    this.textDefault_1 = Color(new Long(-14540252, 0));
    this.textOnPrimary_1 = Color(new Long(-1, 0));
    this.iconOnPrimary_1 = Color(new Long(-1, 0));
    this.textGrey_1 = Color(new Long(-9013638, 0));
    this.iconGrey_1 = Color(new Long(-9013638, 0));
    this.defaultBackground_1 = Color(new Long(-1, 0));
    this.defaultDividerColor_1 = Color(new Long(-14540252, 0));
    this.dislikeColor_1 = Color(new Long(-40093, 0));
    this.shareColor_1 = Color(new Long(-1069056, 0));
    this.likeColor_1 = Color(new Long(-14523986, 0));
    this.reportStatusAcceptedColor_1 = Color(new Long(-15353777, 0));
    this.reportStatusRejectedColor_1 = Color(new Long(-40093, 0));
    this.reportStatusModeratedColor_1 = Color(new Long(-1069056, 0));
    this.reportOnAcceptedTextColor_1 = Color(new Long(-1, 0));
    this.reportOnRejectedTextColor_1 = Color(new Long(-1, 0));
    this.reportOnModerationTextColor_1 = Color(new Long(-1, 0));
    this.ratingFistPlaceColor_1 = Color(new Long(-1069056, 0));
    this.ratingSecondPlaceColor_1 = Color(new Long(-10393459, 0));
    this.ratingThirdPlaceColor_1 = Color(new Long(-3376054, 0));
  }
  protoOf(LightTheme).get_primaryColor_167x67_k$ = function () {
    return this.primaryColor_1;
  };
  protoOf(LightTheme).get_textDefault_m5fl3m_k$ = function () {
    return this.textDefault_1;
  };
  protoOf(LightTheme).get_textOnPrimary_d1cto4_k$ = function () {
    return this.textOnPrimary_1;
  };
  protoOf(LightTheme).get_iconOnPrimary_bt8lbc_k$ = function () {
    return this.iconOnPrimary_1;
  };
  protoOf(LightTheme).get_textGrey_zhapgc_k$ = function () {
    return this.textGrey_1;
  };
  protoOf(LightTheme).get_iconGrey_2hlwo_k$ = function () {
    return this.iconGrey_1;
  };
  protoOf(LightTheme).get_defaultBackground_vi5m4z_k$ = function () {
    return this.defaultBackground_1;
  };
  protoOf(LightTheme).get_defaultDividerColor_fl95iv_k$ = function () {
    return this.defaultDividerColor_1;
  };
  protoOf(LightTheme).get_dislikeColor_q9sl9q_k$ = function () {
    return this.dislikeColor_1;
  };
  protoOf(LightTheme).get_shareColor_8bt5x0_k$ = function () {
    return this.shareColor_1;
  };
  protoOf(LightTheme).get_likeColor_cjkm4q_k$ = function () {
    return this.likeColor_1;
  };
  protoOf(LightTheme).get_reportStatusAcceptedColor_pdctqs_k$ = function () {
    return this.reportStatusAcceptedColor_1;
  };
  protoOf(LightTheme).get_reportStatusRejectedColor_7xvakd_k$ = function () {
    return this.reportStatusRejectedColor_1;
  };
  protoOf(LightTheme).get_reportStatusModeratedColor_v383d4_k$ = function () {
    return this.reportStatusModeratedColor_1;
  };
  protoOf(LightTheme).get_reportOnAcceptedTextColor_8o478m_k$ = function () {
    return this.reportOnAcceptedTextColor_1;
  };
  protoOf(LightTheme).get_reportOnRejectedTextColor_6b3537_k$ = function () {
    return this.reportOnRejectedTextColor_1;
  };
  protoOf(LightTheme).get_reportOnModerationTextColor_elrwh1_k$ = function () {
    return this.reportOnModerationTextColor_1;
  };
  protoOf(LightTheme).get_ratingFistPlaceColor_8b24bx_k$ = function () {
    return this.ratingFistPlaceColor_1;
  };
  protoOf(LightTheme).get_ratingSecondPlaceColor_h2ozk3_k$ = function () {
    return this.ratingSecondPlaceColor_1;
  };
  protoOf(LightTheme).get_ratingThirdPlaceColor_i3d9l0_k$ = function () {
    return this.ratingThirdPlaceColor_1;
  };
  var LightTheme_instance;
  function LightTheme_getInstance() {
    if (LightTheme_instance == null)
      new LightTheme();
    return LightTheme_instance;
  }
  function DarkTheme() {
    DarkTheme_instance = this;
    this.primaryColor_1 = Color(new Long(-14523986, 0));
    this.textDefault_1 = Color(new Long(-1, 0));
    this.textOnPrimary_1 = Color(new Long(-1, 0));
    this.iconOnPrimary_1 = Color(new Long(-1, 0));
    this.textGrey_1 = Color(new Long(-4408129, 0));
    this.iconGrey_1 = Color(new Long(-4408129, 0));
    this.defaultBackground_1 = Color(new Long(-14540252, 0));
    this.defaultDividerColor_1 = Color(new Long(-1, 0));
    this.dislikeColor_1 = Color(new Long(-40093, 0));
    this.shareColor_1 = Color(new Long(-1069056, 0));
    this.likeColor_1 = Color(new Long(-14523986, 0));
    this.reportStatusAcceptedColor_1 = Color(new Long(-15353777, 0));
    this.reportStatusRejectedColor_1 = Color(new Long(-40093, 0));
    this.reportStatusModeratedColor_1 = Color(new Long(-1069056, 0));
    this.reportOnAcceptedTextColor_1 = Color(new Long(-1, 0));
    this.reportOnRejectedTextColor_1 = Color(new Long(-1, 0));
    this.reportOnModerationTextColor_1 = Color(new Long(-1, 0));
    this.ratingFistPlaceColor_1 = Color(new Long(-1069056, 0));
    this.ratingSecondPlaceColor_1 = Color(new Long(-10393459, 0));
    this.ratingThirdPlaceColor_1 = Color(new Long(-3376054, 0));
  }
  protoOf(DarkTheme).get_primaryColor_167x67_k$ = function () {
    return this.primaryColor_1;
  };
  protoOf(DarkTheme).get_textDefault_m5fl3m_k$ = function () {
    return this.textDefault_1;
  };
  protoOf(DarkTheme).get_textOnPrimary_d1cto4_k$ = function () {
    return this.textOnPrimary_1;
  };
  protoOf(DarkTheme).get_iconOnPrimary_bt8lbc_k$ = function () {
    return this.iconOnPrimary_1;
  };
  protoOf(DarkTheme).get_textGrey_zhapgc_k$ = function () {
    return this.textGrey_1;
  };
  protoOf(DarkTheme).get_iconGrey_2hlwo_k$ = function () {
    return this.iconGrey_1;
  };
  protoOf(DarkTheme).get_defaultBackground_vi5m4z_k$ = function () {
    return this.defaultBackground_1;
  };
  protoOf(DarkTheme).get_defaultDividerColor_fl95iv_k$ = function () {
    return this.defaultDividerColor_1;
  };
  protoOf(DarkTheme).get_dislikeColor_q9sl9q_k$ = function () {
    return this.dislikeColor_1;
  };
  protoOf(DarkTheme).get_shareColor_8bt5x0_k$ = function () {
    return this.shareColor_1;
  };
  protoOf(DarkTheme).get_likeColor_cjkm4q_k$ = function () {
    return this.likeColor_1;
  };
  protoOf(DarkTheme).get_reportStatusAcceptedColor_pdctqs_k$ = function () {
    return this.reportStatusAcceptedColor_1;
  };
  protoOf(DarkTheme).get_reportStatusRejectedColor_7xvakd_k$ = function () {
    return this.reportStatusRejectedColor_1;
  };
  protoOf(DarkTheme).get_reportStatusModeratedColor_v383d4_k$ = function () {
    return this.reportStatusModeratedColor_1;
  };
  protoOf(DarkTheme).get_reportOnAcceptedTextColor_8o478m_k$ = function () {
    return this.reportOnAcceptedTextColor_1;
  };
  protoOf(DarkTheme).get_reportOnRejectedTextColor_6b3537_k$ = function () {
    return this.reportOnRejectedTextColor_1;
  };
  protoOf(DarkTheme).get_reportOnModerationTextColor_elrwh1_k$ = function () {
    return this.reportOnModerationTextColor_1;
  };
  protoOf(DarkTheme).get_ratingFistPlaceColor_8b24bx_k$ = function () {
    return this.ratingFistPlaceColor_1;
  };
  protoOf(DarkTheme).get_ratingSecondPlaceColor_h2ozk3_k$ = function () {
    return this.ratingSecondPlaceColor_1;
  };
  protoOf(DarkTheme).get_ratingThirdPlaceColor_i3d9l0_k$ = function () {
    return this.ratingThirdPlaceColor_1;
  };
  var DarkTheme_instance;
  function DarkTheme_getInstance() {
    if (DarkTheme_instance == null)
      new DarkTheme();
    return DarkTheme_instance;
  }
  function AppColorsDefined() {
    AppColorsDefined_instance = this;
  }
  var AppColorsDefined_instance;
  function AppColorsDefined_getInstance() {
    if (AppColorsDefined_instance == null)
      new AppColorsDefined();
    return AppColorsDefined_instance;
  }
  function _set_mColors__lppe6w($this, _set____db54di) {
    $this.mColors_1 = _set____db54di;
  }
  function _get_mColors__np6df8($this) {
    return $this.mColors_1;
  }
  function AppColors() {
    AppColors_instance = this;
    this.mColors_1 = new Colors();
  }
  protoOf(AppColors).colors_memzdc_k$ = function () {
    return this.mColors_1;
  };
  protoOf(AppColors).define_bdp5hx_k$ = function (colors) {
    this.mColors_1 = colors;
  };
  var AppColors_instance;
  function AppColors_getInstance() {
    if (AppColors_instance == null)
      new AppColors();
    return AppColors_instance;
  }
  function AppColorsTheme() {
  }
  protoOf(AppColorsTheme).light_4wwaiu_k$ = function () {
    AppColors_getInstance().define_bdp5hx_k$(new Colors(LightTheme_getInstance().primaryColor_1, LightTheme_getInstance().textDefault_1, LightTheme_getInstance().textOnPrimary_1, LightTheme_getInstance().iconOnPrimary_1, LightTheme_getInstance().textGrey_1, LightTheme_getInstance().defaultBackground_1, LightTheme_getInstance().iconGrey_1, LightTheme_getInstance().defaultDividerColor_1, LightTheme_getInstance().dislikeColor_1, LightTheme_getInstance().shareColor_1, LightTheme_getInstance().likeColor_1, LightTheme_getInstance().reportStatusAcceptedColor_1, LightTheme_getInstance().reportStatusRejectedColor_1, LightTheme_getInstance().reportStatusModeratedColor_1, LightTheme_getInstance().reportOnAcceptedTextColor_1, LightTheme_getInstance().reportOnRejectedTextColor_1, LightTheme_getInstance().reportOnModerationTextColor_1, LightTheme_getInstance().ratingFistPlaceColor_1, LightTheme_getInstance().ratingSecondPlaceColor_1, LightTheme_getInstance().ratingThirdPlaceColor_1));
  };
  protoOf(AppColorsTheme).dark_hysmna_k$ = function () {
    AppColors_getInstance().define_bdp5hx_k$(new Colors(DarkTheme_getInstance().primaryColor_1, DarkTheme_getInstance().textDefault_1, DarkTheme_getInstance().textOnPrimary_1, DarkTheme_getInstance().iconOnPrimary_1, DarkTheme_getInstance().textGrey_1, DarkTheme_getInstance().defaultBackground_1, DarkTheme_getInstance().iconGrey_1, DarkTheme_getInstance().defaultDividerColor_1, DarkTheme_getInstance().dislikeColor_1, DarkTheme_getInstance().shareColor_1, DarkTheme_getInstance().likeColor_1, DarkTheme_getInstance().reportStatusAcceptedColor_1, DarkTheme_getInstance().reportStatusRejectedColor_1, DarkTheme_getInstance().reportStatusModeratedColor_1, DarkTheme_getInstance().reportOnAcceptedTextColor_1, DarkTheme_getInstance().reportOnRejectedTextColor_1, DarkTheme_getInstance().reportOnModerationTextColor_1, DarkTheme_getInstance().ratingFistPlaceColor_1, DarkTheme_getInstance().ratingSecondPlaceColor_1, DarkTheme_getInstance().ratingThirdPlaceColor_1));
  };
  function Colors(primaryColor, textDefault, textOnPrimary, iconOnPrimary, textGrey, defaultBackground, iconGrey, defaultDividerColor, dislikeColor, shareColor, likeColor, reportStatusAcceptedColor, reportStatusRejectedColor, reportStatusModeratedColor, reportOnAcceptedTextColor, reportOnRejectedTextColor, reportOnModerationTextColor, ratingFistPlaceColor, ratingSecondPlaceColor, ratingThirdPlaceColor) {
    primaryColor = primaryColor === VOID ? Color(new Long(-1, 0)) : primaryColor;
    textDefault = textDefault === VOID ? Color(new Long(-1, 0)) : textDefault;
    textOnPrimary = textOnPrimary === VOID ? Color(new Long(-1, 0)) : textOnPrimary;
    iconOnPrimary = iconOnPrimary === VOID ? Color(new Long(-1, 0)) : iconOnPrimary;
    textGrey = textGrey === VOID ? Color(new Long(-1, 0)) : textGrey;
    defaultBackground = defaultBackground === VOID ? Color(new Long(-1, 0)) : defaultBackground;
    iconGrey = iconGrey === VOID ? Color(new Long(-1, 0)) : iconGrey;
    defaultDividerColor = defaultDividerColor === VOID ? Color(new Long(-1, 0)) : defaultDividerColor;
    dislikeColor = dislikeColor === VOID ? Color(new Long(-1, 0)) : dislikeColor;
    shareColor = shareColor === VOID ? Color(new Long(-1, 0)) : shareColor;
    likeColor = likeColor === VOID ? Color(new Long(-1, 0)) : likeColor;
    reportStatusAcceptedColor = reportStatusAcceptedColor === VOID ? Color(new Long(-1, 0)) : reportStatusAcceptedColor;
    reportStatusRejectedColor = reportStatusRejectedColor === VOID ? Color(new Long(-1, 0)) : reportStatusRejectedColor;
    reportStatusModeratedColor = reportStatusModeratedColor === VOID ? Color(new Long(-1, 0)) : reportStatusModeratedColor;
    reportOnAcceptedTextColor = reportOnAcceptedTextColor === VOID ? Color(new Long(-1, 0)) : reportOnAcceptedTextColor;
    reportOnRejectedTextColor = reportOnRejectedTextColor === VOID ? Color(new Long(-1, 0)) : reportOnRejectedTextColor;
    reportOnModerationTextColor = reportOnModerationTextColor === VOID ? Color(new Long(-1, 0)) : reportOnModerationTextColor;
    ratingFistPlaceColor = ratingFistPlaceColor === VOID ? Color(new Long(-1, 0)) : ratingFistPlaceColor;
    ratingSecondPlaceColor = ratingSecondPlaceColor === VOID ? Color(new Long(-1, 0)) : ratingSecondPlaceColor;
    ratingThirdPlaceColor = ratingThirdPlaceColor === VOID ? Color(new Long(-1, 0)) : ratingThirdPlaceColor;
    this.primaryColor_1 = primaryColor;
    this.textDefault_1 = textDefault;
    this.textOnPrimary_1 = textOnPrimary;
    this.iconOnPrimary_1 = iconOnPrimary;
    this.textGrey_1 = textGrey;
    this.defaultBackground_1 = defaultBackground;
    this.iconGrey_1 = iconGrey;
    this.defaultDividerColor_1 = defaultDividerColor;
    this.dislikeColor_1 = dislikeColor;
    this.shareColor_1 = shareColor;
    this.likeColor_1 = likeColor;
    this.reportStatusAcceptedColor_1 = reportStatusAcceptedColor;
    this.reportStatusRejectedColor_1 = reportStatusRejectedColor;
    this.reportStatusModeratedColor_1 = reportStatusModeratedColor;
    this.reportOnAcceptedTextColor_1 = reportOnAcceptedTextColor;
    this.reportOnRejectedTextColor_1 = reportOnRejectedTextColor;
    this.reportOnModerationTextColor_1 = reportOnModerationTextColor;
    this.ratingFistPlaceColor_1 = ratingFistPlaceColor;
    this.ratingSecondPlaceColor_1 = ratingSecondPlaceColor;
    this.ratingThirdPlaceColor_1 = ratingThirdPlaceColor;
  }
  protoOf(Colors).get_primaryColor_167x67_k$ = function () {
    return this.primaryColor_1;
  };
  protoOf(Colors).get_textDefault_m5fl3m_k$ = function () {
    return this.textDefault_1;
  };
  protoOf(Colors).get_textOnPrimary_d1cto4_k$ = function () {
    return this.textOnPrimary_1;
  };
  protoOf(Colors).get_iconOnPrimary_bt8lbc_k$ = function () {
    return this.iconOnPrimary_1;
  };
  protoOf(Colors).get_textGrey_zhapgc_k$ = function () {
    return this.textGrey_1;
  };
  protoOf(Colors).get_defaultBackground_vi5m4z_k$ = function () {
    return this.defaultBackground_1;
  };
  protoOf(Colors).get_iconGrey_2hlwo_k$ = function () {
    return this.iconGrey_1;
  };
  protoOf(Colors).get_defaultDividerColor_fl95iv_k$ = function () {
    return this.defaultDividerColor_1;
  };
  protoOf(Colors).get_dislikeColor_q9sl9q_k$ = function () {
    return this.dislikeColor_1;
  };
  protoOf(Colors).get_shareColor_8bt5x0_k$ = function () {
    return this.shareColor_1;
  };
  protoOf(Colors).get_likeColor_cjkm4q_k$ = function () {
    return this.likeColor_1;
  };
  protoOf(Colors).get_reportStatusAcceptedColor_pdctqs_k$ = function () {
    return this.reportStatusAcceptedColor_1;
  };
  protoOf(Colors).get_reportStatusRejectedColor_7xvakd_k$ = function () {
    return this.reportStatusRejectedColor_1;
  };
  protoOf(Colors).get_reportStatusModeratedColor_v383d4_k$ = function () {
    return this.reportStatusModeratedColor_1;
  };
  protoOf(Colors).get_reportOnAcceptedTextColor_8o478m_k$ = function () {
    return this.reportOnAcceptedTextColor_1;
  };
  protoOf(Colors).get_reportOnRejectedTextColor_6b3537_k$ = function () {
    return this.reportOnRejectedTextColor_1;
  };
  protoOf(Colors).get_reportOnModerationTextColor_elrwh1_k$ = function () {
    return this.reportOnModerationTextColor_1;
  };
  protoOf(Colors).get_ratingFistPlaceColor_8b24bx_k$ = function () {
    return this.ratingFistPlaceColor_1;
  };
  protoOf(Colors).get_ratingSecondPlaceColor_h2ozk3_k$ = function () {
    return this.ratingSecondPlaceColor_1;
  };
  protoOf(Colors).get_ratingThirdPlaceColor_i3d9l0_k$ = function () {
    return this.ratingThirdPlaceColor_1;
  };
  protoOf(Colors).component1_9lkot7_k$ = function () {
    return this.primaryColor_1;
  };
  protoOf(Colors).component2_ekm1j8_k$ = function () {
    return this.textDefault_1;
  };
  protoOf(Colors).component3_waba3h_k$ = function () {
    return this.textOnPrimary_1;
  };
  protoOf(Colors).component4_844jr2_k$ = function () {
    return this.iconOnPrimary_1;
  };
  protoOf(Colors).component5_g226ld_k$ = function () {
    return this.textGrey_1;
  };
  protoOf(Colors).component6_usv51c_k$ = function () {
    return this.defaultBackground_1;
  };
  protoOf(Colors).component7_6moeox_k$ = function () {
    return this.iconGrey_1;
  };
  protoOf(Colors).component8_hjibni_k$ = function () {
    return this.defaultDividerColor_1;
  };
  protoOf(Colors).component9_tbezz7_k$ = function () {
    return this.dislikeColor_1;
  };
  protoOf(Colors).component10_9b09ct_k$ = function () {
    return this.shareColor_1;
  };
  protoOf(Colors).component11_xh6zp8_k$ = function () {
    return this.likeColor_1;
  };
  protoOf(Colors).component12_ddqbxh_k$ = function () {
    return this.reportStatusAcceptedColor_1;
  };
  protoOf(Colors).component13_asgeey_k$ = function () {
    return this.reportStatusRejectedColor_1;
  };
  protoOf(Colors).component14_yyn4rd_k$ = function () {
    return this.reportStatusModeratedColor_1;
  };
  protoOf(Colors).component15_bwa6vc_k$ = function () {
    return this.reportOnAcceptedTextColor_1;
  };
  protoOf(Colors).component16_c9wjh3_k$ = function () {
    return this.reportOnRejectedTextColor_1;
  };
  protoOf(Colors).component17_yl0s5m_k$ = function () {
    return this.reportOnModerationTextColor_1;
  };
  protoOf(Colors).component18_aeu1t7_k$ = function () {
    return this.ratingFistPlaceColor_1;
  };
  protoOf(Colors).component19_drcoj8_k$ = function () {
    return this.ratingSecondPlaceColor_1;
  };
  protoOf(Colors).component20_mpfnoi_k$ = function () {
    return this.ratingThirdPlaceColor_1;
  };
  protoOf(Colors).copy_dhye87_k$ = function (primaryColor, textDefault, textOnPrimary, iconOnPrimary, textGrey, defaultBackground, iconGrey, defaultDividerColor, dislikeColor, shareColor, likeColor, reportStatusAcceptedColor, reportStatusRejectedColor, reportStatusModeratedColor, reportOnAcceptedTextColor, reportOnRejectedTextColor, reportOnModerationTextColor, ratingFistPlaceColor, ratingSecondPlaceColor, ratingThirdPlaceColor) {
    return new Colors(primaryColor, textDefault, textOnPrimary, iconOnPrimary, textGrey, defaultBackground, iconGrey, defaultDividerColor, dislikeColor, shareColor, likeColor, reportStatusAcceptedColor, reportStatusRejectedColor, reportStatusModeratedColor, reportOnAcceptedTextColor, reportOnRejectedTextColor, reportOnModerationTextColor, ratingFistPlaceColor, ratingSecondPlaceColor, ratingThirdPlaceColor);
  };
  protoOf(Colors).copy$default_pwfv0j_k$ = function (primaryColor, textDefault, textOnPrimary, iconOnPrimary, textGrey, defaultBackground, iconGrey, defaultDividerColor, dislikeColor, shareColor, likeColor, reportStatusAcceptedColor, reportStatusRejectedColor, reportStatusModeratedColor, reportOnAcceptedTextColor, reportOnRejectedTextColor, reportOnModerationTextColor, ratingFistPlaceColor, ratingSecondPlaceColor, ratingThirdPlaceColor, $super) {
    primaryColor = primaryColor === VOID ? this.primaryColor_1 : primaryColor;
    textDefault = textDefault === VOID ? this.textDefault_1 : textDefault;
    textOnPrimary = textOnPrimary === VOID ? this.textOnPrimary_1 : textOnPrimary;
    iconOnPrimary = iconOnPrimary === VOID ? this.iconOnPrimary_1 : iconOnPrimary;
    textGrey = textGrey === VOID ? this.textGrey_1 : textGrey;
    defaultBackground = defaultBackground === VOID ? this.defaultBackground_1 : defaultBackground;
    iconGrey = iconGrey === VOID ? this.iconGrey_1 : iconGrey;
    defaultDividerColor = defaultDividerColor === VOID ? this.defaultDividerColor_1 : defaultDividerColor;
    dislikeColor = dislikeColor === VOID ? this.dislikeColor_1 : dislikeColor;
    shareColor = shareColor === VOID ? this.shareColor_1 : shareColor;
    likeColor = likeColor === VOID ? this.likeColor_1 : likeColor;
    reportStatusAcceptedColor = reportStatusAcceptedColor === VOID ? this.reportStatusAcceptedColor_1 : reportStatusAcceptedColor;
    reportStatusRejectedColor = reportStatusRejectedColor === VOID ? this.reportStatusRejectedColor_1 : reportStatusRejectedColor;
    reportStatusModeratedColor = reportStatusModeratedColor === VOID ? this.reportStatusModeratedColor_1 : reportStatusModeratedColor;
    reportOnAcceptedTextColor = reportOnAcceptedTextColor === VOID ? this.reportOnAcceptedTextColor_1 : reportOnAcceptedTextColor;
    reportOnRejectedTextColor = reportOnRejectedTextColor === VOID ? this.reportOnRejectedTextColor_1 : reportOnRejectedTextColor;
    reportOnModerationTextColor = reportOnModerationTextColor === VOID ? this.reportOnModerationTextColor_1 : reportOnModerationTextColor;
    ratingFistPlaceColor = ratingFistPlaceColor === VOID ? this.ratingFistPlaceColor_1 : ratingFistPlaceColor;
    ratingSecondPlaceColor = ratingSecondPlaceColor === VOID ? this.ratingSecondPlaceColor_1 : ratingSecondPlaceColor;
    ratingThirdPlaceColor = ratingThirdPlaceColor === VOID ? this.ratingThirdPlaceColor_1 : ratingThirdPlaceColor;
    return $super === VOID ? this.copy_dhye87_k$(primaryColor, textDefault, textOnPrimary, iconOnPrimary, textGrey, defaultBackground, iconGrey, defaultDividerColor, dislikeColor, shareColor, likeColor, reportStatusAcceptedColor, reportStatusRejectedColor, reportStatusModeratedColor, reportOnAcceptedTextColor, reportOnRejectedTextColor, reportOnModerationTextColor, ratingFistPlaceColor, ratingSecondPlaceColor, ratingThirdPlaceColor) : $super.copy_dhye87_k$.call(this, new Color_0(primaryColor), new Color_0(textDefault), new Color_0(textOnPrimary), new Color_0(iconOnPrimary), new Color_0(textGrey), new Color_0(defaultBackground), new Color_0(iconGrey), new Color_0(defaultDividerColor), new Color_0(dislikeColor), new Color_0(shareColor), new Color_0(likeColor), new Color_0(reportStatusAcceptedColor), new Color_0(reportStatusRejectedColor), new Color_0(reportStatusModeratedColor), new Color_0(reportOnAcceptedTextColor), new Color_0(reportOnRejectedTextColor), new Color_0(reportOnModerationTextColor), new Color_0(ratingFistPlaceColor), new Color_0(ratingSecondPlaceColor), new Color_0(ratingThirdPlaceColor));
  };
  protoOf(Colors).toString = function () {
    return 'Colors(primaryColor=' + Color__toString_impl_hpzmaq(this.primaryColor_1) + ', textDefault=' + Color__toString_impl_hpzmaq(this.textDefault_1) + ', textOnPrimary=' + Color__toString_impl_hpzmaq(this.textOnPrimary_1) + ', iconOnPrimary=' + Color__toString_impl_hpzmaq(this.iconOnPrimary_1) + ', textGrey=' + Color__toString_impl_hpzmaq(this.textGrey_1) + ', defaultBackground=' + Color__toString_impl_hpzmaq(this.defaultBackground_1) + ', iconGrey=' + Color__toString_impl_hpzmaq(this.iconGrey_1) + ', defaultDividerColor=' + Color__toString_impl_hpzmaq(this.defaultDividerColor_1) + ', dislikeColor=' + Color__toString_impl_hpzmaq(this.dislikeColor_1) + ', shareColor=' + Color__toString_impl_hpzmaq(this.shareColor_1) + ', likeColor=' + Color__toString_impl_hpzmaq(this.likeColor_1) + ', reportStatusAcceptedColor=' + Color__toString_impl_hpzmaq(this.reportStatusAcceptedColor_1) + ', reportStatusRejectedColor=' + Color__toString_impl_hpzmaq(this.reportStatusRejectedColor_1) + ', reportStatusModeratedColor=' + Color__toString_impl_hpzmaq(this.reportStatusModeratedColor_1) + ', reportOnAcceptedTextColor=' + Color__toString_impl_hpzmaq(this.reportOnAcceptedTextColor_1) + ', reportOnRejectedTextColor=' + Color__toString_impl_hpzmaq(this.reportOnRejectedTextColor_1) + ', reportOnModerationTextColor=' + Color__toString_impl_hpzmaq(this.reportOnModerationTextColor_1) + ', ratingFistPlaceColor=' + Color__toString_impl_hpzmaq(this.ratingFistPlaceColor_1) + ', ratingSecondPlaceColor=' + Color__toString_impl_hpzmaq(this.ratingSecondPlaceColor_1) + ', ratingThirdPlaceColor=' + Color__toString_impl_hpzmaq(this.ratingThirdPlaceColor_1) + ')';
  };
  protoOf(Colors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.primaryColor_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.textDefault_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.textOnPrimary_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.iconOnPrimary_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.textGrey_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultBackground_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.iconGrey_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultDividerColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.dislikeColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.shareColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.likeColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.reportStatusAcceptedColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.reportStatusRejectedColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.reportStatusModeratedColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.reportOnAcceptedTextColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.reportOnRejectedTextColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.reportOnModerationTextColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ratingFistPlaceColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ratingSecondPlaceColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ratingThirdPlaceColor_1) | 0;
    return result;
  };
  protoOf(Colors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Colors))
      return false;
    var tmp0_other_with_cast = other instanceof Colors ? other : THROW_CCE();
    if (!equals(this.primaryColor_1, tmp0_other_with_cast.primaryColor_1))
      return false;
    if (!equals(this.textDefault_1, tmp0_other_with_cast.textDefault_1))
      return false;
    if (!equals(this.textOnPrimary_1, tmp0_other_with_cast.textOnPrimary_1))
      return false;
    if (!equals(this.iconOnPrimary_1, tmp0_other_with_cast.iconOnPrimary_1))
      return false;
    if (!equals(this.textGrey_1, tmp0_other_with_cast.textGrey_1))
      return false;
    if (!equals(this.defaultBackground_1, tmp0_other_with_cast.defaultBackground_1))
      return false;
    if (!equals(this.iconGrey_1, tmp0_other_with_cast.iconGrey_1))
      return false;
    if (!equals(this.defaultDividerColor_1, tmp0_other_with_cast.defaultDividerColor_1))
      return false;
    if (!equals(this.dislikeColor_1, tmp0_other_with_cast.dislikeColor_1))
      return false;
    if (!equals(this.shareColor_1, tmp0_other_with_cast.shareColor_1))
      return false;
    if (!equals(this.likeColor_1, tmp0_other_with_cast.likeColor_1))
      return false;
    if (!equals(this.reportStatusAcceptedColor_1, tmp0_other_with_cast.reportStatusAcceptedColor_1))
      return false;
    if (!equals(this.reportStatusRejectedColor_1, tmp0_other_with_cast.reportStatusRejectedColor_1))
      return false;
    if (!equals(this.reportStatusModeratedColor_1, tmp0_other_with_cast.reportStatusModeratedColor_1))
      return false;
    if (!equals(this.reportOnAcceptedTextColor_1, tmp0_other_with_cast.reportOnAcceptedTextColor_1))
      return false;
    if (!equals(this.reportOnRejectedTextColor_1, tmp0_other_with_cast.reportOnRejectedTextColor_1))
      return false;
    if (!equals(this.reportOnModerationTextColor_1, tmp0_other_with_cast.reportOnModerationTextColor_1))
      return false;
    if (!equals(this.ratingFistPlaceColor_1, tmp0_other_with_cast.ratingFistPlaceColor_1))
      return false;
    if (!equals(this.ratingSecondPlaceColor_1, tmp0_other_with_cast.ratingSecondPlaceColor_1))
      return false;
    if (!equals(this.ratingThirdPlaceColor_1, tmp0_other_with_cast.ratingThirdPlaceColor_1))
      return false;
    return true;
  };
  function org_korchagin_kmp_theme_colors_AppColorsDefined_LightTheme$stableprop_getter() {
    return org_korchagin_kmp_theme_colors_AppColorsDefined_LightTheme$stable;
  }
  function org_korchagin_kmp_theme_colors_AppColorsDefined_DarkTheme$stableprop_getter() {
    return org_korchagin_kmp_theme_colors_AppColorsDefined_DarkTheme$stable;
  }
  function org_korchagin_kmp_theme_colors_AppColors$stableprop_getter() {
    return org_korchagin_kmp_theme_colors_AppColors$stable;
  }
  function org_korchagin_kmp_theme_colors_AppColorsTheme$stableprop_getter() {
    return org_korchagin_kmp_theme_colors_AppColorsTheme$stable;
  }
  function org_korchagin_kmp_theme_colors_Colors$stableprop_getter() {
    return org_korchagin_kmp_theme_colors_Colors$stable;
  }
  var org_korchagin_kmp_theme_global_NavViewStyle$stable;
  function NavViewStyle$light$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.light_ncm55f_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavViewStyle$dark$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.dark_1s9jxv_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavViewStyle() {
  }
  protoOf(NavViewStyle).light_ncm55f_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(581841946);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(581841946, $changed, -1, 'org.korchagin.kmp.theme.global.NavViewStyle.light (NavViewStyle.kt:12)');
      }
      var tmp = SimpleNavigationStyle_getInstance();
      var tmp_0 = new NavigationStyle(Color(new Long(-1, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false);
      var tmp_1 = Color(new Long(-1, 0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_2 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      var tmp_3 = new NavigationStyle(tmp_1, VOID, VOID, VOID, VOID, tmp_2, RoundedCornerShape(tmp$ret$1));
      var tmp0_selectedIcon = Color(new Long(-12467004, 0));
      var tmp1_selectedLabel = Color(new Long(-12467004, 0));
      var tmp2_defaultIcon = Color(new Long(-9013638, 0));
      var tmp3_defaultLabel = Color(new Long(-9013638, 0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
      var tmp4_shape = RoundedCornerShape(tmp$ret$2);
      var tmp_4 = new NavigationItemStyle(tmp0_selectedIcon, tmp2_defaultIcon, tmp1_selectedLabel, tmp3_defaultLabel, tmp4_shape);
      var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
      tmp.define_yy5nc9_k$(tmp_0, tmp_3, tmp_4, tmp_5, null, null, $composer_0, team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() | team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() << 3 | team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter() << 6 | team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter() << 18, 56);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(NavViewStyle$light$lambda(this, $changed));
    }
  };
  protoOf(NavViewStyle).dark_1s9jxv_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1851483102);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1851483102, $changed, -1, 'org.korchagin.kmp.theme.global.NavViewStyle.dark (NavViewStyle.kt:34)');
      }
      var tmp = SimpleNavigationStyle_getInstance();
      var tmp_0 = new NavigationStyle(Color(new Long(-14540252, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false);
      var tmp_1 = Color(new Long(-14540252, 0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_2 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      var tmp_3 = new NavigationStyle(tmp_1, VOID, VOID, VOID, VOID, tmp_2, RoundedCornerShape(tmp$ret$1));
      var tmp0_selectedIcon = Color(new Long(-12467004, 0));
      var tmp1_selectedLabel = Color(new Long(-12467004, 0));
      var tmp2_defaultIcon = Color(new Long(-4408129, 0));
      var tmp3_defaultLabel = Color(new Long(-4408129, 0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
      var tmp4_shape = RoundedCornerShape(tmp$ret$2);
      var tmp_4 = new NavigationItemStyle(tmp0_selectedIcon, tmp2_defaultIcon, tmp1_selectedLabel, tmp3_defaultLabel, tmp4_shape);
      var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
      tmp.define_yy5nc9_k$(tmp_0, tmp_3, tmp_4, tmp_5, null, null, $composer_0, team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() | team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() << 3 | team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter() << 6 | team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter() << 18, 56);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(NavViewStyle$dark$lambda(this, $changed));
    }
  };
  function org_korchagin_kmp_theme_global_NavViewStyle$stableprop_getter() {
    return org_korchagin_kmp_theme_global_NavViewStyle$stable;
  }
  var org_korchagin_kmp_theme_global_ToolbarTheme$stable;
  function ToolbarTheme$light$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.light_ncm55f_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ToolbarTheme$dark$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.dark_1s9jxv_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ToolbarTheme() {
  }
  protoOf(ToolbarTheme).light_ncm55f_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1122133254);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1122133254, $changed, -1, 'org.korchagin.kmp.theme.global.ToolbarTheme.light (ToolbarTheme.kt:9)');
      }
      ToolbarStyle_getInstance().define_cir3z7_k$(new AppToolbarStyle(AppColors_getInstance().colors_memzdc_k$().get_primaryColor_167x67_k$()), $composer_0, team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter() | team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter() << 3);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ToolbarTheme$light$lambda(this, $changed));
    }
  };
  protoOf(ToolbarTheme).dark_1s9jxv_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(147507902);
    if (!(($changed & 1) === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(147507902, $changed, -1, 'org.korchagin.kmp.theme.global.ToolbarTheme.dark (ToolbarTheme.kt:18)');
      }
      ToolbarStyle_getInstance().define_cir3z7_k$(new AppToolbarStyle(AppColors_getInstance().colors_memzdc_k$().get_primaryColor_167x67_k$()), $composer_0, team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter() | team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter() << 3);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ToolbarTheme$dark$lambda(this, $changed));
    }
  };
  function org_korchagin_kmp_theme_global_ToolbarTheme$stableprop_getter() {
    return org_korchagin_kmp_theme_global_ToolbarTheme$stable;
  }
  function GifImage(drawable, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(947552751);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(drawable) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(947552751, $dirty, -1, 'org.korchagin.kmp.GifImage (Platforma.js.kt:8)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-635403799);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.korchagin.kmp.GifImage.<anonymous>' call
        var value = GifImage$lambda(drawable);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      DisposableEffect(drawable, tmp0_group, $composer_0, 14 & $dirty);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(GifImage$lambda_0(drawable, $changed));
    }
  }
  function get_currentPlatform() {
    return PlatformType_JS_getInstance();
  }
  function _no_name_provided__qut3iv($root, $img) {
    this.$root_1 = $root;
    this.$img_1 = $img;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.korchagin.kmp.GifImage.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$root_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.removeChild(this.$img_1);
  };
  function GifImage$lambda($drawable) {
    return function ($this$DisposableEffect) {
      var tmp = document.createElement('img');
      var img = tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
      img.src = $drawable;
      img.style.width = '50%';
      img.style.height = '50%';
      img.style.position = 'absolute';
      img.style.top = '50%';
      img.style.left = '50%';
      img.style.transform = 'translate(-50%, -50%)';
      img.style.zIndex = '999';
      var root = document.getElementById('root');
      if (root == null)
        null;
      else
        root.appendChild(img);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(root, img);
    };
  }
  function GifImage$lambda_0($drawable, $$changed) {
    return function ($composer, $force) {
      GifImage($drawable, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var org_korchagin_kmp_ScreenSizeHandler$stable;
  function ScreenSizeHandler$getScreenSize$slambda($screenSize, resultContinuation) {
    this.$screenSize_1 = $screenSize;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScreenSizeHandler$getScreenSize$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ScreenSizeHandler$getScreenSize$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScreenSizeHandler$getScreenSize$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(50, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$screenSize_1.set_value_v1vabv_k$(new Pair(window.innerWidth, window.innerHeight));
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
  protoOf(ScreenSizeHandler$getScreenSize$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ScreenSizeHandler$getScreenSize$slambda(this.$screenSize_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ScreenSizeHandler$getScreenSize$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ScreenSizeHandler$getScreenSize$slambda_0($screenSize, resultContinuation) {
    var i = new ScreenSizeHandler$getScreenSize$slambda($screenSize, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScreenSizeHandler$getScreenSize$lambda$lambda($screenSize) {
    return function (it) {
      $screenSize.set_value_v1vabv_k$(new Pair(window.innerWidth, window.innerHeight));
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0($listener) {
    this.$listener_1 = $listener;
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>.<anonymous>.<anonymous>' call
    window.removeEventListener('resize', this.$listener_1);
  };
  function ScreenSizeHandler$getScreenSize$lambda($screenSize) {
    return function ($this$DisposableEffect) {
      var listener = ScreenSizeHandler$getScreenSize$lambda$lambda($screenSize);
      window.addEventListener('resize', listener);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0(listener);
    };
  }
  function ScreenSizeHandler() {
    ScreenSizeHandler_instance = this;
  }
  protoOf(ScreenSizeHandler).getScreenSize_rvow7q_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1772696338);
    if (isTraceInProgress()) {
      traceEventStart(-1772696338, $changed, -1, 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize (ScreenSizeHandler.js.kt:13)');
    }
    $composer_0.startReplaceGroup_5hh8aj_k$(-1191388129);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value = mutableStateOf(new Pair(0, 0));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    var screenSize = tmp1_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1191385852);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value_0 = ScreenSizeHandler$getScreenSize$slambda_0(screenSize, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    LaunchedEffect_0(Unit_getInstance(), tmp2_group, $composer_0, 6);
    $composer_0.startReplaceGroup_5hh8aj_k$(-1191381173);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value_1 = ScreenSizeHandler$getScreenSize$lambda(screenSize);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    DisposableEffect(Unit_getInstance(), tmp3_group, $composer_0, 54);
    var tmp0 = screenSize.get_value_j01efc_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  var ScreenSizeHandler_instance;
  function ScreenSizeHandler_getInstance() {
    if (ScreenSizeHandler_instance == null)
      new ScreenSizeHandler();
    return ScreenSizeHandler_instance;
  }
  function org_korchagin_kmp_ScreenSizeHandler$stableprop_getter() {
    return org_korchagin_kmp_ScreenSizeHandler$stable;
  }
  function main() {
    initialize(Firebase_getInstance(), VOID, new FirebaseOptions('1:562023826894:web:673fcd6506381387ae579f', 'AIzaSyBfjWARdMqCo7UZXoY5dDafJFJOazqv-QE', 'https://goodfootbreaking.firebaseio.com', VOID, VOID, 'goodfootbreaking'));
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1510551301, $changed, -1, 'org.korchagin.kmp.ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:26)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1510551301, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_4kq1wk_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    initKoin();
    CanvasBasedWindow(VOID, 'ComposeTarget', VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  breakingkmpapp_composeapp_generated_resources_Res_drawable$stable = 0;
  breakingkmpapp_composeapp_generated_resources_Res_string$stable = 0;
  breakingkmpapp_composeapp_generated_resources_Res_array$stable = 0;
  breakingkmpapp_composeapp_generated_resources_Res_plurals$stable = 0;
  breakingkmpapp_composeapp_generated_resources_Res_font$stable = 0;
  breakingkmpapp_composeapp_generated_resources_Res$stable = 0;
  org_korchagin_kmp_activity_main_MainActivity$stable = 0;
  org_korchagin_kmp_activity_main_components_HomeComponent$stable = 0;
  org_korchagin_kmp_activity_main_components_ProfileComponent$stable = 0;
  org_korchagin_kmp_activity_main_components_RatingsComponent$stable = 0;
  org_korchagin_kmp_activity_main_frafments_home_HomeFragment$stable = 0;
  org_korchagin_kmp_activity_main_frafments_profile_ProfileFragment$stable = 0;
  org_korchagin_kmp_activity_main_frafments_ratings_RatingsFragment$stable = 0;
  org_korchagin_kmp_activity_splash_SplashActivity$stable = 0;
  org_korchagin_kmp_activity_splash_components_SplashComponent$stable = 0;
  org_korchagin_kmp_activity_splash_fragments_SplashFragment$stable = 0;
  org_korchagin_kmp_theme_colors_AppColorsDefined_LightTheme$stable = 0;
  org_korchagin_kmp_theme_colors_AppColorsDefined_DarkTheme$stable = 0;
  org_korchagin_kmp_theme_colors_AppColors$stable = 8;
  org_korchagin_kmp_theme_colors_AppColorsTheme$stable = 0;
  org_korchagin_kmp_theme_colors_Colors$stable = 0;
  org_korchagin_kmp_theme_global_NavViewStyle$stable = 0;
  org_korchagin_kmp_theme_global_ToolbarTheme$stable = 0;
  org_korchagin_kmp_ScreenSizeHandler$stable = 0;
  //endregion
  //region block: exports
  kotlin_io_coil_kt_coil3_coil_network_ktor3.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=composeApp.js.map
