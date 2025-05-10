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
  var LanguageQualifier = kotlin_components_resources_library.$_$.b;
  var setOf_0 = kotlin_kotlin.$_$.la;
  var StringResource = kotlin_components_resources_library.$_$.d;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var rememberNavController = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.d;
  var GlobalNavigator = kotlin_NavigationComposeExtra_extra_nav.$_$.h;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var rememberTheme = kotlin_MaterialExtension_multiplatform_material_extension.$_$.f;
  var isDark = kotlin_MaterialExtension_multiplatform_material_extension.$_$.e;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var VOID = kotlin_kotlin.$_$.i;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var listOf = kotlin_kotlin.$_$.n9;
  var team_platforma_extra_nav_navigator_activity_GlobalNavigator$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.i;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Enum = kotlin_kotlin.$_$.qi;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var Activity = kotlin_NavigationComposeExtra_extra_nav.$_$.d;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var currentBackStackEntryAsState = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.c;
  var currentKoinScope = kotlin_io_insert_koin_koin_compose.$_$.a;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var MainViewModel = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.b;
  var getKClass = kotlin_kotlin.$_$.f;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var TopAppBarColors = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var ActivityScaffold = kotlin_NavigationComposeExtra_extra_nav.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.kf;
  var THROW_ISE = kotlin_kotlin.$_$.fj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.vc;
  var KProperty0 = kotlin_kotlin.$_$.mf;
  var emptyParametersHolder = kotlin_io_insert_koin_koin_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var isInterface = kotlin_kotlin.$_$.qd;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var SimpleBottomNavigationBar = kotlin_NavigationComposeExtra_extra_nav.$_$.o;
  var stringResource = kotlin_components_resources_library.$_$.f;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var painterResource = kotlin_components_resources_library.$_$.e;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var equals = kotlin_kotlin.$_$.qc;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var TopAppBar = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var SimpleNavigationRail = kotlin_NavigationComposeExtra_extra_nav.$_$.q;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Component = kotlin_NavigationComposeExtra_extra_nav.$_$.e;
  var listOf_0 = kotlin_kotlin.$_$.m9;
  var SimpleNavIcon = kotlin_NavigationComposeExtra_extra_nav.$_$.p;
  var Fragment = kotlin_NavigationComposeExtra_extra_nav.$_$.g;
  var LocalViewModelStoreOwner_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.b;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var defaultExtras = kotlin_io_insert_koin_koin_compose_viewmodel.$_$.a;
  var resolveViewModel = kotlin_io_insert_koin_koin_compose_viewmodel.$_$.b;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var emptyList = kotlin_kotlin.$_$.a8;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.f6;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.f7;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var aspectRatio = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var AsyncImage = kotlin_io_coil_kt_coil3_coil_compose.$_$.a;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f1;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var drawWithCache = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var numberToInt = kotlin_kotlin.$_$.de;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var animateContentSize = kotlin_org_jetbrains_compose_animation_animation.$_$.e;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var background_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var println = kotlin_kotlin.$_$.cc;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var FragmentBox = kotlin_NavigationComposeExtra_extra_nav.$_$.f;
  var Default_getInstance = kotlin_kotlin.$_$.j5;
  var random = kotlin_kotlin.$_$.ca;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var GlobalNavigation_getInstance = kotlin_NavigationComposeExtra_extra_nav.$_$.a;
  var startKoin = kotlin_io_insert_koin_koin_core.$_$.d;
  var getMainModules = kotlin_BreakingKMPApp_module_main_di_main.$_$.a;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
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
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Pair = kotlin_kotlin.$_$.bj;
  var Firebase_instance = kotlin_dev_gitlive_firebase_app.$_$.c;
  var FirebaseOptions = kotlin_dev_gitlive_firebase_app.$_$.a;
  var initialize = kotlin_dev_gitlive_firebase_app.$_$.b;
  var CanvasBasedWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.v5;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(CommonMainString0, 'CommonMainString0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForClass(PlatformType, 'PlatformType', VOID, Enum);
  initMetadataForObject(MainActivity, 'MainActivity', VOID, Activity);
  initMetadataForLambda(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a, CoroutineImpl, VOID, [1]);
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
  initMetadataForLambda(CustomProgressBar1$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ProfileFragment, 'ProfileFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$ProfileFragmentKt, 'ComposableSingletons$ProfileFragmentKt');
  initMetadataForObject(RatingsFragment, 'RatingsFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$RatingsFragmentKt, 'ComposableSingletons$RatingsFragmentKt');
  initMetadataForObject(SplashActivity, 'SplashActivity', VOID, Activity);
  initMetadataForObject(ComposableSingletons$SplashActivityKt, 'ComposableSingletons$SplashActivityKt');
  initMetadataForObject(SplashComponent, 'SplashComponent', VOID, Component);
  initMetadataForObject(SplashFragment, 'SplashFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$SplashFragmentKt, 'ComposableSingletons$SplashFragmentKt');
  initMetadataForLambda(SplashScreen$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(LightTheme, 'LightTheme');
  initMetadataForObject(DarkTheme, 'DarkTheme');
  initMetadataForObject(AppColors, 'AppColors');
  initMetadataForClass(AppColorsTheme, 'AppColorsTheme', AppColorsTheme);
  initMetadataForClass(Colors, 'Colors', Colors);
  initMetadataForClass(NavViewStyle, 'NavViewStyle', NavViewStyle);
  initMetadataForClass(ToolbarTheme, 'ToolbarTheme', ToolbarTheme);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForLambda(ScreenSizeHandler$getScreenSize$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0);
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
    tmp.pjs_1 = lazy(CommonMainDrawable0$break_splash1$delegate$lambda);
    var tmp_0 = this;
    tmp_0.qjs_1 = lazy(CommonMainDrawable0$break_splash2$delegate$lambda);
    var tmp_1 = this;
    tmp_1.rjs_1 = lazy(CommonMainDrawable0$break_splash3$delegate$lambda);
    var tmp_2 = this;
    tmp_2.sjs_1 = lazy(CommonMainDrawable0$break_splash4$delegate$lambda);
    var tmp_3 = this;
    tmp_3.tjs_1 = lazy(CommonMainDrawable0$break_splash5$delegate$lambda);
    var tmp_4 = this;
    tmp_4.ujs_1 = lazy(CommonMainDrawable0$compose_multiplatform$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).vjs = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ujs_1;
    compose_multiplatform$factory();
    return this_0.w();
  };
  var CommonMainDrawable0_instance;
  function CommonMainDrawable0_getInstance() {
    if (CommonMainDrawable0_instance == null)
      new CommonMainDrawable0();
    return CommonMainDrawable0_instance;
  }
  function init_break_splash1() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash1', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash1.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_break_splash2() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash2', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash2.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_break_splash3() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash3', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash3.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_break_splash4() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash4', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash4.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_break_splash5() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:break_splash5', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/break_splash5.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_compose_multiplatform(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().vjs();
  }
  function init_compose_multiplatform() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function compose_multiplatform$factory() {
    return getPropertyCallableRef('compose_multiplatform', 1, KProperty1, function (receiver) {
      return receiver.vjs();
    }, null);
  }
  function CommonMainString0$app_name$delegate$lambda() {
    return init_app_name();
  }
  function CommonMainString0() {
    CommonMainString0_instance = this;
    var tmp = this;
    tmp.wjs_1 = lazy(CommonMainString0$app_name$delegate$lambda);
  }
  protoOf(CommonMainString0).xjs = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.wjs_1;
    app_name$factory();
    return this_0.w();
  };
  var CommonMainString0_instance;
  function CommonMainString0_getInstance() {
    if (CommonMainString0_instance == null)
      new CommonMainString0();
    return CommonMainString0_instance;
  }
  function get_app_name(_this__u8e3s4) {
    return CommonMainString0_getInstance().xjs();
  }
  function init_app_name() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(10, 0), new Long(36, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:app_name', 'app_name', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(10, 0), new Long(28, 0))]));
  }
  function app_name$factory() {
    return getPropertyCallableRef('app_name', 1, KProperty1, function (receiver) {
      return receiver.xjs();
    }, null);
  }
  var breakingkmpapp_composeapp_generated_resources_Res_drawable$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_string$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_array$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_plurals$stable;
  var breakingkmpapp_composeapp_generated_resources_Res_font$stable;
  var breakingkmpapp_composeapp_generated_resources_Res$stable;
  function drawable() {
  }
  var drawable_instance;
  function drawable_getInstance() {
    return drawable_instance;
  }
  function string() {
  }
  var string_instance;
  function string_getInstance() {
    return string_instance;
  }
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1296636172);
    if (!($changed === 0) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296636172, $changed, -1, 'org.korchagin.kmp.App (App.kt:22)');
      }
      var navHostController = rememberNavController([], $composer_0, 0);
      $composer_0.c2v(-622334986);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.App.<anonymous>' call
        var value = new GlobalNavigator(navHostController);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      var globalNavigator = tmp0_group;
      var theme = rememberTheme(true, $composer_0, 6, 0);
      var toolbarTheme = new ToolbarTheme();
      var navViewStyle = new NavViewStyle();
      var colors = new AppColorsTheme();
      if (isDark(theme, $composer_0, 0)) {
        $composer_0.c2v(-2112281051);
        colors.ajt();
        toolbarTheme.bjt($composer_0, 0);
        navViewStyle.bjt($composer_0, 0);
        $composer_0.e2v();
      } else {
        $composer_0.c2v(-2112189725);
        colors.yjs();
        toolbarTheme.zjs($composer_0, 0);
        navViewStyle.zjs($composer_0, 0);
        $composer_0.e2v();
      }
      var tmp_1 = isDark(theme, $composer_0, 0) ? darkColorScheme().jip(Color(new Long(-12467004, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color(new Long(-16777216, 0))) : lightColorScheme().jip(Color(new Long(-12467004, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color(new Long(-526345, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.App.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1477258040, true, App$lambda(globalNavigator), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.h2l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.y2w();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.App.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.j2x(value_0);
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
      $composer_0.e2o();
    }
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(App$lambda_0($changed));
    }
  }
  function App$lambda($globalNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1477258040, $changed, -1, 'org.korchagin.kmp.App.<anonymous> (App.kt:53)');
        }
        var activityList = listOf([MainActivity_getInstance(), SplashActivity_getInstance()]);
        $globalNavigator.yjk(null, activityList, SplashActivity_getInstance(), $composer_0, 432 | team_platforma_extra_nav_navigator_activity_GlobalNavigator$stableprop_getter() << 9, 1);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function App$lambda_0($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var PlatformType_ANDROID_instance;
  var PlatformType_JS_instance;
  var PlatformType_IOS_instance;
  var PlatformType_entriesInitialized;
  function PlatformType_initEntries() {
    if (PlatformType_entriesInitialized)
      return Unit_instance;
    PlatformType_entriesInitialized = true;
    PlatformType_ANDROID_instance = new PlatformType('ANDROID', 0);
    PlatformType_JS_instance = new PlatformType('JS', 1);
    PlatformType_IOS_instance = new PlatformType('IOS', 2);
  }
  function PlatformType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlatformType_JS_getInstance() {
    PlatformType_initEntries();
    return PlatformType_JS_instance;
  }
  var org_korchagin_kmp_activity_main_MainActivity$stable;
  function MainActivity() {
    MainActivity_instance = this;
    Activity.call(this, 'main_activity', listOf([HomeComponent_getInstance(), RatingsComponent_getInstance(), ProfileComponent_getInstance()]), ComposableSingletons$MainActivityKt_getInstance().cjt_1);
  }
  var MainActivity_instance;
  function MainActivity_getInstance() {
    if (MainActivity_instance == null)
      new MainActivity();
    return MainActivity_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda_wcf918(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1260934621, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous> (MainActivity.kt:40)');
    }
    $composer_0.c2v(-342203267);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
      var value = mutableStateOf(null);
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    var navigator$delegate = tmp0_group;
    $composer_0.c2v(-342200707);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.j2x(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.e2v();
    var backStack$delegate = tmp1_group;
    $composer_0.c2v(-342198594);
    if (!(invoke$lambda(navigator$delegate) == null)) {
      var backStackEntry$delegate = currentBackStackEntryAsState(ensureNotNull(invoke$lambda(navigator$delegate)), $composer_0, 0);
      invoke$lambda_2(backStack$delegate, invoke$lambda_3(backStackEntry$delegate));
    }
    $composer_0.e2v();
    var screenWidth = ScreenSizeHandler_instance.djt($composer_0, 6).eb_1;
    var screenHeight = ScreenSizeHandler_instance.djt($composer_0, 6).fb_1;
    var isLargeScreen = {_v: screenWidth > screenHeight};
    // Inline function 'org.koin.compose.koinInject' call
    var qualifier = null;
    var scope = null;
    var parameters = null;
    var $composer_1 = $composer_0;
    $composer_1.a2v(414512006);
    if (!((7 & 1) === 0))
      qualifier = null;
    if (!((7 & 2) === 0))
      scope = currentKoinScope($composer_1, 0);
    if (!((7 & 4) === 0))
      parameters = null;
    var currentParameters$delegate = rememberUpdatedState(parameters, $composer_1, 14 & 0 >> 6);
    $composer_1.a2v(855641119);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.h2l(qualifier) | $composer_1.h2l(scope));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_1.y2w();
    var tmp_3;
    if (invalid || it_1 === Companion_getInstance().n2o_1) {
      // Inline function 'org.koin.compose.koinInject.<anonymous>' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var this_0 = scope;
      var qualifier_0 = qualifier;
      var parameters_0 = ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn(currentParameters$delegate);
      var value_1 = this_0.bu(getKClass(MainViewModel), qualifier_0, parameters_0);
      $composer_1.j2x(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_1.b2v();
    $composer_1.b2v();
    var viewModel = tmp1_group_0;
    var tmp0_containerColor = Companion_getInstance_0().k60_1;
    var tmp1_titleContentColor = Companion_getInstance_0().h60_1;
    var tmp2_actionIconContentColor = Companion_getInstance_0().h60_1;
    var tmp3_navigationIconContentColor = Companion_getInstance_0().h60_1;
    var tmp4_scrolledContainerColor = Companion_getInstance_0().i60_1;
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
    var invalid_0 = $composer_2.h2l(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_2.y2w();
    var tmp_5;
    if (invalid_0 || it_2 === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_2 = ComposableLambda$invoke$ref_1(dispatchReceiver);
      $composer_2.j2x(value_2);
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
    var invalid_1 = $composer_3.h2l(dispatchReceiver_0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_3.y2w();
    var tmp_8;
    if (invalid_1 || it_3 === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_3 = ComposableLambda$invoke$ref_3(dispatchReceiver_0);
      $composer_3.j2x(value_3);
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
    var invalid_2 = $composer_4.h2l(dispatchReceiver_1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_4.y2w();
    var tmp_11;
    if (invalid_2 || it_4 === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_4 = ComposableLambda$invoke$ref_4(dispatchReceiver_1);
      $composer_4.j2x(value_4);
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
    return Unit_instance;
  }
  function invoke$lambda($navigator$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('navigator', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $navigator$delegate.w();
  }
  function invoke$lambda_0($navigator$delegate, _set____db54di) {
    getLocalDelegateReference('navigator', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $navigator$delegate.n1v(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_1($backStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $backStack$delegate.w();
  }
  function invoke$lambda_2($backStack$delegate, _set____db54di) {
    getLocalDelegateReference('backStack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $backStack$delegate.n1v(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_3($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.w();
  }
  function invoke$lambda_4($currentParameters$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentParameters', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentParameters$delegate.w();
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn($currentParameters$delegate) {
    return function () {
      var tmp0_safe_receiver = invoke$lambda_4($currentParameters$delegate);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      return tmp1_elvis_lhs == null ? emptyParametersHolder() : tmp1_elvis_lhs;
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation) {
    this.mjt_1 = $isLargeScreen;
    this.njt_1 = $screenWidth;
    this.ojt_1 = $screenHeight;
    this.pjt_1 = $viewModel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          this.mjt_1._v = this.njt_1 > this.ojt_1;
          this.pjt_1.fjj(this.njt_1);
          this.pjt_1.gjj(this.ojt_1);
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
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).f1x = function ($this$LaunchedEffect, completion) {
    var i = new ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a(this.mjt_1, this.njt_1, this.ojt_1, this.pjt_1, completion);
    i.qjt_1 = $this$LaunchedEffect;
    return i;
  };
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a_0($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation) {
    var i = new ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
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
      invoke$lambda_0($navigator$delegate, componentNavigator.yjm());
      SimpleBottomNavigationBar($components, componentNavigator, $composer_0, 112 & $changed << 3);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(2128262390, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous> (MainActivity.kt:79)');
        }
        var tmp0_subject = $component;
        if (equals(tmp0_subject, HomeComponent_getInstance())) {
          $composer_0.c2v(667775384);
          var tmp_0 = painterResource(get_compose_multiplatform(drawable_instance), $composer_0, 0);
          Image(tmp_0, null, null, null, null, 0.0, null, $composer_0, 48, 124);
          $composer_0.e2v();
        } else {
          $composer_0.c2v(668143447);
          var tmp1_safe_receiver = $component.ajk_1;
          $composer_0.c2v(714291903);
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
          $composer_0.e2v();
          var tmp_2 = tmp1_group == null ? '' : tmp1_group;
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_7 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp_2, null, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
          $composer_0.e2v();
        }
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
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
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_1($components, $topAppBarColors, $backStack$delegate) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1636425058, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:74)');
      }
      if (!(invoke$lambda_1($backStack$delegate) == null)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $components.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $composer_0.c2v(-1517129481);
          if (element.yjj_1 === ensureNotNull(invoke$lambda_1($backStack$delegate)).s4w_1.t4y_1) {
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(2128262390, true, ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c(element), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_1 = $composer_0;
            sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = $composer_1.h2l(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_0 = $composer_1.y2w();
            var tmp;
            if (invalid || it_0 === Companion_getInstance().n2o_1) {
              // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
              $composer_1.j2x(value);
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
          $composer_0.e2v();
        }
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_2($components, $navigator$delegate) {
    return function (componentNavigator, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(724335839, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:117)');
      }
      invoke$lambda_0($navigator$delegate, componentNavigator.yjm());
      SimpleNavigationRail($components, componentNavigator, false, $composer_0, 112 & $changed << 3, 4);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt() {
    ComposableSingletons$MainActivityKt_instance = this;
    var tmp = this;
    tmp.cjt_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1260934621, false, ComposableSingletons$MainActivityKt$lambda_1$lambda_wcf918));
  }
  var ComposableSingletons$MainActivityKt_instance;
  function ComposableSingletons$MainActivityKt_getInstance() {
    if (ComposableSingletons$MainActivityKt_instance == null)
      new ComposableSingletons$MainActivityKt();
    return ComposableSingletons$MainActivityKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_HomeComponent$stable;
  function HomeComponent() {
    HomeComponent_instance = this;
    var tmp0_label = get_app_name(string_instance);
    var tmp1_fragments = listOf_0(HomeFragment_getInstance());
    Component.call(this, 'home_component', ComposableSingletons$HomeComponentKt_getInstance().rjt_1, tmp0_label, tmp1_fragments);
  }
  var HomeComponent_instance;
  function HomeComponent_getInstance() {
    if (HomeComponent_instance == null)
      new HomeComponent();
    return HomeComponent_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeComponentKt$lambda_1$lambda_b2x2h8(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-348734468, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$HomeComponentKt.lambda-1.<anonymous> (HomeComponent.kt:16)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HomeComponentKt() {
    ComposableSingletons$HomeComponentKt_instance = this;
    var tmp = this;
    tmp.rjt_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-348734468, false, ComposableSingletons$HomeComponentKt$lambda_1$lambda_b2x2h8));
  }
  var ComposableSingletons$HomeComponentKt_instance;
  function ComposableSingletons$HomeComponentKt_getInstance() {
    if (ComposableSingletons$HomeComponentKt_instance == null)
      new ComposableSingletons$HomeComponentKt();
    return ComposableSingletons$HomeComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_ProfileComponent$stable;
  function ProfileComponent() {
    ProfileComponent_instance = this;
    var tmp0_label = get_app_name(string_instance);
    var tmp1_fragments = listOf_0(ProfileFragment_getInstance());
    Component.call(this, 'profile_component', ComposableSingletons$ProfileComponentKt_getInstance().sjt_1, tmp0_label, tmp1_fragments);
  }
  var ProfileComponent_instance;
  function ProfileComponent_getInstance() {
    if (ProfileComponent_instance == null)
      new ProfileComponent();
    return ProfileComponent_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProfileComponentKt$lambda_1$lambda_wyenvs(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-12156152, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$ProfileComponentKt.lambda-1.<anonymous> (ProfileComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ProfileComponentKt() {
    ComposableSingletons$ProfileComponentKt_instance = this;
    var tmp = this;
    tmp.sjt_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-12156152, false, ComposableSingletons$ProfileComponentKt$lambda_1$lambda_wyenvs));
  }
  var ComposableSingletons$ProfileComponentKt_instance;
  function ComposableSingletons$ProfileComponentKt_getInstance() {
    if (ComposableSingletons$ProfileComponentKt_instance == null)
      new ComposableSingletons$ProfileComponentKt();
    return ComposableSingletons$ProfileComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_RatingsComponent$stable;
  function RatingsComponent() {
    RatingsComponent_instance = this;
    var tmp0_label = get_app_name(string_instance);
    var tmp1_fragments = listOf_0(RatingsFragment_getInstance());
    Component.call(this, 'ratings_component', ComposableSingletons$RatingsComponentKt_getInstance().tjt_1, tmp0_label, tmp1_fragments);
  }
  var RatingsComponent_instance;
  function RatingsComponent_getInstance() {
    if (RatingsComponent_instance == null)
      new RatingsComponent();
    return RatingsComponent_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$RatingsComponentKt$lambda_1$lambda_9jiav9(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.i2w(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-905989336, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$RatingsComponentKt.lambda-1.<anonymous> (RatingsComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RatingsComponentKt() {
    ComposableSingletons$RatingsComponentKt_instance = this;
    var tmp = this;
    tmp.tjt_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-905989336, false, ComposableSingletons$RatingsComponentKt$lambda_1$lambda_9jiav9));
  }
  var ComposableSingletons$RatingsComponentKt_instance;
  function ComposableSingletons$RatingsComponentKt_getInstance() {
    if (ComposableSingletons$RatingsComponentKt_instance == null)
      new ComposableSingletons$RatingsComponentKt();
    return ComposableSingletons$RatingsComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_frafments_home_HomeFragment$stable;
  function HomeFragment() {
    HomeFragment_instance = this;
    Fragment.call(this, 'home_fragment', VOID, ComposableSingletons$HomeFragmentKt_getInstance().ujt_1);
  }
  var HomeFragment_instance;
  function HomeFragment_getInstance() {
    if (HomeFragment_instance == null)
      new HomeFragment();
    return HomeFragment_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
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
    return Unit_instance;
  }
  function ComposableSingletons$HomeFragmentKt() {
    ComposableSingletons$HomeFragmentKt_instance = this;
    var tmp = this;
    tmp.ujt_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(58441559, false, ComposableSingletons$HomeFragmentKt$lambda_1$lambda_u5bbh9));
  }
  var ComposableSingletons$HomeFragmentKt_instance;
  function ComposableSingletons$HomeFragmentKt_getInstance() {
    if (ComposableSingletons$HomeFragmentKt_instance == null)
      new ComposableSingletons$HomeFragmentKt();
    return ComposableSingletons$HomeFragmentKt_instance;
  }
  function HomeScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(717950997);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
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
      $composer_1.a2v(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().rad($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.b4a(), key, extras, qualifier, scope, parameters);
      $composer_1.b2v();
      var mainViewModel = tmp0;
      var currentPupil$delegate = collectAsState(mainViewModel.cjh_1, null, null, $composer_0, 48, 2);
      var tmp0_safe_receiver = HomeScreen$lambda(currentPupil$delegate);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>' call
        tmp = listOf_0(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp;
      var users = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
      $composer_0.c2v(-1716487938);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp_0;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>' call
        var value_0 = mutableIntStateOf(ElementsTab_FREEZE_getInstance().u2_1);
        this_0.j2x(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.e2v();
      var selectedTabIndex$delegate = tmp0_group;
      $composer_0.c2v(-1716484093);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.h2w(users) | $composer_0.h2w(mainViewModel));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y2w();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>' call
        var value_1 = HomeScreen$lambda_1(users, mainViewModel, selectedTabIndex$delegate);
        this_1.j2x(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.e2v();
      LazyColumn(null, null, null, false, null, null, null, false, tmp1_group, $composer_0, 0, 255);
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
      tmp2_safe_receiver.r32(HomeScreen$lambda_2(componentNavigator, $changed));
    }
  }
  function ProfileSection(curPupil, viewModel, selectedTabIndex, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-493908985);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(curPupil) ? 4 : 2);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.l2w(selectedTabIndex) ? 256 : 128);
    if (!(($dirty & 131) === 130) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-493908985, $dirty, -1, 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection (HomeScreen.kt:96)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = fillMaxWidth(Companion_instance);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().ub1_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().j7b_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
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
      var factory = Companion_getInstance_2().i8t_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_verticalAlignment = Companion_getInstance_1().h7b_1;
      var tmp_0 = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = padding(tmp_0, tmp$ret$2);
      var horizontalArrangement = null;
      var verticalAlignment = tmp0_verticalAlignment;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((2 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().sb1_1;
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().g7b_1;
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 390 >> 3 | 112 & 390 >> 3);
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
      var factory_0 = Companion_getInstance_2().i8t_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
        $this$with_0.j2x(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = null;
      var verticalArrangement_0 = Arrangement_getInstance().wb1_1;
      var horizontalAlignment_0 = null;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((5 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((5 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().ub1_1;
      if (!((5 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().j7b_1;
      var measurePolicy_1 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_11, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.w2w();
      var materialized_1 = materialize($composer_12, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_2().i8t_1;
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_13.x2u();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_13.q2v();
      if ($composer_13.l2v()) {
        $composer_13.r2v(factory_1);
      } else {
        $composer_13.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.l2v() || !equals($this$with_1.y2w(), compositeKeyHash_1)) {
        $this$with_1.j2x(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).b2w(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.ProfileSection.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_15 = $composer_14;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = curPupil.bje_1;
      if (charSequenceLength(this_0) === 0) {
        $composer_15.c2v(1205585251);
        var tmp_3 = painterResource(get_compose_multiplatform(drawable_instance), $composer_15, 0);
        var tmp_4 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(64);
        var tmp_5 = aspectRatio(width(tmp_4, tmp$ret$8), 1.0);
        Image(tmp_3, null, tmp_5, null, null, 0.0, null, $composer_15, 432, 120);
        $composer_15.e2v();
      } else {
        $composer_15.c2v(1205868932);
        var tmp_6 = curPupil.bje_1;
        var tmp_7 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$9 = _Dp___init__impl__ms3zkb(64);
        var tmp_8 = aspectRatio(width(tmp_7, tmp$ret$9), 1.0);
        var tmp_9 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage(tmp_6, null, tmp_8, null, null, null, null, 0.0, null, tmp_9, false, $composer_15, 432, 0, 2040);
        $composer_15.e2v();
      }
      var tmp_10 = ColumnScopeInstance_instance.vb4(Companion_instance, Companion_getInstance_1().k7b_1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(5);
      var tmp3_modifier = padding_0(tmp_10, VOID, tmp$ret$10);
      var tmp4_fontFamily = Companion_getInstance_3().j6u_1;
      var tmp5_color = Companion_getInstance_0().f60_1;
      var tmp0_textAlign = Companion_getInstance_4().h6q_1;
      var tmp1_fontSize = get_sp(10);
      var tmp2_fontWeight = Companion_getInstance_5().x6t_1;
      var tmp6_style = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_textAlign);
      var tmp7_textDecoration = Companion_getInstance_6().s6u_1;
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440', tmp3_modifier, tmp5_color, tmp_11, null, null, tmp4_fontFamily, tmp_12, tmp7_textDecoration, null, tmp_13, tmp_14, false, 0, 0, null, tmp6_style, $composer_15, 100663686, 0, 65208);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.w2v();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      var tmp_15 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$11 = _Dp___init__impl__ms3zkb(4);
      Spacer(width(tmp_15, tmp$ret$11), $composer_10, 6);
      InfoSection(curPupil, selectedTabIndex, null, $composer_10, 14 & $dirty | 112 & $dirty >> 3, 4);
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
      tmp0_safe_receiver.r32(ProfileSection$lambda(curPupil, viewModel, selectedTabIndex, $changed));
    }
  }
  function InfoSection(curPupil, selectedElementsTab, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-530971342);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(curPupil) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.l2w(selectedElementsTab) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-530971342, $dirty, -1, 'org.korchagin.kmp.activity.main.frafments.home.screen.InfoSection (HomeScreen.kt:148)');
      }
      var text = '';
      var rating = 0;
      var tmp0_horizontalAlignment = Companion_getInstance_1().k7b_1;
      var tmp1_verticalArrangement = Arrangement_getInstance().zb1_1;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var $changed_0 = 432 | 14 & $dirty >> 6;
      var modifier_1 = modifier_0._v;
      var verticalArrangement = tmp1_verticalArrangement;
      var horizontalAlignment = tmp0_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().ub1_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().j7b_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
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
      var factory = Companion_getInstance_2().i8t_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.InfoSection.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp3_text = curPupil.zjd_1;
      var tmp0_textAlign = Companion_getInstance_4().h6q_1;
      var tmp1_fontSize = get_sp(20);
      var tmp2_fontWeight = Companion_getInstance_5().x6t_1;
      var tmp4_style = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_textAlign);
      var tmp_0 = graphicsLayer(Companion_instance, VOID, VOID, 0.8);
      $composer_5.c2v(471329245);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.y2w();
      var tmp_1;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.InfoSection.<anonymous>.<anonymous>' call
        var value = InfoSection$lambda;
        $composer_5.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_5.e2v();
      var tmp5_modifier = drawWithCache(tmp_0, tmp0_group);
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp3_text, tmp5_modifier, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, tmp4_style, $composer_5, 0, 0, 65532);
      var tmp_8 = setLevel(numberToInt(curPupil.oje_1));
      var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextOverflow___init__impl__obguoe(0);
      var tmp6_textAlign = Companion_getInstance_4().h6q_1;
      var tmp7_fontSize = get_sp(16);
      var tmp8_fontWeight = Companion_getInstance_5().x6t_1;
      Text(tmp_8, null, tmp_9, tmp_10, null, null, null, tmp_11, null, null, tmp_12, tmp_13, false, 0, 0, null, TextStyle_init_$Create$(VOID, tmp7_fontSize, tmp8_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp6_textAlign), $composer_5, 0, 0, 65534);
      if (selectedElementsTab === ElementsTab_FREEZE_getInstance().u2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0444\u0440\u0438\u0437\u0430\u043C: ';
        rating = numberToInt(curPupil.pje_1);
      } else if (selectedElementsTab === ElementsTab_POWER_getInstance().u2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E PowerMoves: ';
        rating = numberToInt(curPupil.qje_1);
      } else if (selectedElementsTab === ElementsTab_OFP_getInstance().u2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u041E\u0424\u041F: ';
        rating = numberToInt(curPupil.rje_1);
      } else if (selectedElementsTab === ElementsTab_STRETCH_getInstance().u2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0440\u0430\u0441\u0442\u044F\u0436\u043A\u0435: ';
        rating = numberToInt(curPupil.sje_1);
      }
      var tmp13_modifier = animateContentSize(Companion_instance, tween(400, VOID, get_FastOutSlowInEasing()));
      var tmp14_text = text;
      var tmp10_textAlign = Companion_getInstance_4().h6q_1;
      var tmp11_fontSize = get_sp(14);
      var tmp12_fontWeight = Companion_getInstance_5().x6t_1;
      var tmp15_style = TextStyle_init_$Create$(VOID, tmp11_fontSize, tmp12_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp10_textAlign);
      var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp14_text, tmp13_modifier, tmp_14, tmp_15, null, null, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, tmp15_style, $composer_5, 0, 0, 65532);
      CustomProgressBar1(rating, $composer_5, 0);
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
      tmp0_safe_receiver.r32(InfoSection$lambda_0(curPupil, selectedElementsTab, modifier_0, $changed, $default));
    }
  }
  function CustomProgressBar1(progress, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1082303434);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j2w(progress) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1082303434, $dirty, -1, 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1 (HomeScreen.kt:233)');
      }
      $composer_0.c2v(-374206940);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>' call
        var value = Animatable(0.0);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      var animatedProgress = tmp0_group;
      $composer_0.c2v(-374204789);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.h2w(animatedProgress) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y2w();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>' call
        var value_0 = CustomProgressBar1$slambda_0(animatedProgress, progress, null);
        this_1.j2x(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect_0(progress, tmp1_group, $composer_0, 14 & $dirty);
      var tmp_3 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$8 = _Dp___init__impl__ms3zkb(4);
      var tmp_4 = padding_0(tmp_3, VOID, tmp$ret$8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_5 = _Dp___init__impl__ms3zkb(1);
      var tmp_6 = Companion_getInstance_0().f60_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(15);
      var tmp0_modifier = fillMaxWidth(border(tmp_4, tmp_5, tmp_6, RoundedCornerShape(tmp$ret$10)));
      var tmp1_horizontalAlignment = Companion_getInstance_1().k7b_1;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().wb1_1;
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().ub1_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().j7b_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
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
      var factory = Companion_getInstance_2().i8t_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_7 = $composer_3.x2u();
      if (!isInterface(tmp_7, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_8 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(15);
      var tmp_9 = clip(tmp_8, RoundedCornerShape(tmp$ret$13));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(30);
      var tmp_10 = background(height(tmp_9, tmp$ret$14), Companion_getInstance_0().h60_1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(300);
      var modifier_1 = width(tmp_10, tmp$ret$15);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
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
      var factory_0 = Companion_getInstance_2().i8t_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_11 = $composer_8.x2u();
      if (!isInterface(tmp_11, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.l2v() || !equals($this$with_0.y2w(), compositeKeyHash_0)) {
        $this$with_0.j2x(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).b2w(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.CustomProgressBar1.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var tmp_12 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(15);
      var tmp_13 = clip(tmp_12, RoundedCornerShape(tmp$ret$18));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$19 = _Dp___init__impl__ms3zkb(30);
      Box(fillMaxWidth(background_0(height(tmp_13, tmp$ret$19), Companion_instance_0.q5z(listOf([new Color_0(Companion_getInstance_0().h60_1), new Color_0(Companion_getInstance_0().j60_1)]))), animatedProgress.w() / 100.0), $composer_10, 0);
      var tmp0_text = '' + progress + ' %';
      var tmp1_modifier = BoxScopeInstance_instance.bb4(Companion_instance, Companion_getInstance_1().b7b_1);
      var tmp2_fontSize = get_sp(15);
      var tmp3_fontWeight = Companion_getInstance_5().x6t_1;
      var tmp4_color = Companion_getInstance_0().d60_1;
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp0_text, tmp1_modifier, tmp4_color, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_10, 200064, 0, 131024);
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
    var tmp2_safe_receiver = $composer_0.y2x();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.r32(CustomProgressBar1$lambda(progress, $changed));
    }
  }
  function setLevel(rating) {
    return (0 <= rating ? rating <= 9 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 0' : (10 <= rating ? rating <= 19 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 1' : (20 <= rating ? rating <= 29 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 2' : (30 <= rating ? rating <= 39 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 3' : (40 <= rating ? rating <= 49 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 4' : (50 <= rating ? rating <= 59 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 5' : (60 <= rating ? rating <= 69 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 6' : (70 <= rating ? rating <= 79 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 7' : (80 <= rating ? rating <= 89 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 8' : (90 <= rating ? rating <= 99 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 9' : '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 10';
  }
  var ElementsTab_FREEZE_instance;
  var ElementsTab_POWER_instance;
  var ElementsTab_OFP_instance;
  var ElementsTab_STRETCH_instance;
  var ElementsTab_entriesInitialized;
  function ElementsTab_initEntries() {
    if (ElementsTab_entriesInitialized)
      return Unit_instance;
    ElementsTab_entriesInitialized = true;
    ElementsTab_FREEZE_instance = new ElementsTab('FREEZE', 0);
    ElementsTab_POWER_instance = new ElementsTab('POWER', 1);
    ElementsTab_OFP_instance = new ElementsTab('OFP', 2);
    ElementsTab_STRETCH_instance = new ElementsTab('STRETCH', 3);
  }
  function ElementsTab(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HomeScreen$lambda($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.w();
  }
  function HomeScreen$lambda_0($selectedTabIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedTabIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedTabIndex$delegate.f3g();
  }
  function HomeScreen$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.o(index));
    };
  }
  function HomeScreen$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.o(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function HomeScreen$lambda$lambda_1($items, $mainViewModel, $users, $selectedTabIndex$delegate) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>.<anonymous>.<anonymous>' call
        var user = $items.o(it);
        var $changed_0 = 14 & $dirty | 112 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.c2v(1505381646);
        ProfileSection(user, $mainViewModel, HomeScreen$lambda_0($selectedTabIndex$delegate), $composer_1, 14 & $changed_0 >> 6);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_2 = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding(tmp_2, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_1().h7b_1;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().sb1_1;
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().g7b_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 390 >> 3 | 112 & 390 >> 3);
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
        var factory = Companion_getInstance_2().i8t_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.x2u();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
          $this$with.j2x(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        println('avatar: ' + $users.o(it).bje_1);
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = $users.o(it).bje_1;
        if (charSequenceLength(this_0) === 0) {
          $composer_6.c2v(-892235083);
          var tmp_4 = painterResource(get_compose_multiplatform(drawable_instance), $composer_6, 0);
          var tmp_5 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(64);
          var tmp_6 = aspectRatio(width(tmp_5, tmp$ret$4), 1.0);
          Image(tmp_4, null, tmp_6, null, null, 0.0, null, $composer_6, 432, 120);
          $composer_6.e2v();
        } else {
          $composer_6.c2v(-891951278);
          var tmp_7 = $users.o(it).bje_1;
          var tmp_8 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(64);
          var tmp_9 = aspectRatio(width(tmp_8, tmp$ret$5), 1.0);
          var tmp_10 = _FilterQuality___init__impl__nv51aq(0);
          AsyncImage(tmp_7, null, tmp_9, null, null, null, null, 0.0, null, tmp_10, false, $composer_6, 432, 0, 2040);
          $composer_6.e2v();
        }
        var tmp_11 = $users.o(it).zjd_1;
        var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_11, null, tmp_12, tmp_13, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        var tmp_17 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(16);
        Spacer(width(tmp_17, tmp$ret$6), $composer_6, 6);
        var tmp_18 = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ' + $users.o(it).oje_1;
        var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_23 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_18, null, tmp_19, tmp_20, null, null, null, tmp_21, null, null, tmp_22, tmp_23, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.w2v();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.e2v();
        var tmp_24;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_24 = Unit_instance;
        }
        tmp_1 = tmp_24;
      } else {
        $composer_0.e2o();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_1($users, $mainViewModel, $selectedTabIndex$delegate) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = $users;
      var tmp = items.j();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = HomeScreen$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = HomeScreen$lambda$lambda_0(items);
      $this$LazyColumn.fdk(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_9(composableLambdaInstance(-1091073711, true, HomeScreen$lambda$lambda_1(items, $mainViewModel, $users, $selectedTabIndex$delegate))));
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_2($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ProfileSection$lambda($curPupil, $viewModel, $selectedTabIndex, $$changed) {
    return function ($composer, $force) {
      ProfileSection($curPupil, $viewModel, $selectedTabIndex, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InfoSection$lambda($this$drawWithCache) {
    return $this$drawWithCache.e7e(InfoSection$lambda$lambda);
  }
  function InfoSection$lambda$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.n7h();
    $this$onDrawWithContent.b6d(Companion_instance_0.q5z(listOf([new Color_0(Companion_getInstance_0().e60_1), new Color_0(Companion_getInstance_0().d60_1)])), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_7().s5y_1);
    return Unit_instance;
  }
  function InfoSection$lambda_0($curPupil, $selectedElementsTab, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoSection($curPupil, $selectedElementsTab, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function CustomProgressBar1$slambda($animatedProgress, $progress, resultContinuation) {
    this.dju_1 = $animatedProgress;
    this.eju_1 = $progress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CustomProgressBar1$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(CustomProgressBar1$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CustomProgressBar1$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.dju_1.wag(this.eju_1, tween(1500), VOID, VOID, this);
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
  protoOf(CustomProgressBar1$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new CustomProgressBar1$slambda(this.dju_1, this.eju_1, completion);
    i.fju_1 = $this$LaunchedEffect;
    return i;
  };
  function CustomProgressBar1$slambda_0($animatedProgress, $progress, resultContinuation) {
    var i = new CustomProgressBar1$slambda($animatedProgress, $progress, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CustomProgressBar1$lambda($progress, $$changed) {
    return function ($composer, $force) {
      CustomProgressBar1($progress, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    Fragment.call(this, 'profile_fragment', VOID, ComposableSingletons$ProfileFragmentKt_getInstance().gju_1);
  }
  var ProfileFragment_instance;
  function ProfileFragment_getInstance() {
    if (ProfileFragment_instance == null)
      new ProfileFragment();
    return ProfileFragment_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
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
    return Unit_instance;
  }
  function ComposableSingletons$ProfileFragmentKt() {
    ComposableSingletons$ProfileFragmentKt_instance = this;
    var tmp = this;
    tmp.gju_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-548716211, false, ComposableSingletons$ProfileFragmentKt$lambda_1$lambda_5n4ygf));
  }
  var ComposableSingletons$ProfileFragmentKt_instance;
  function ComposableSingletons$ProfileFragmentKt_getInstance() {
    if (ComposableSingletons$ProfileFragmentKt_instance == null)
      new ComposableSingletons$ProfileFragmentKt();
    return ComposableSingletons$ProfileFragmentKt_instance;
  }
  function ProfileScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1213627053);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
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
      $composer_1.a2v(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().rad($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.b4a(), key, extras, qualifier, scope, parameters);
      $composer_1.b2v();
      var mainViewModel = tmp0;
      var currentPupil$delegate = collectAsState(mainViewModel.cjh_1, null, null, $composer_0, 48, 2);
      var tmp0_safe_receiver = ProfileScreen$lambda(currentPupil$delegate);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>' call
        tmp = listOf_0(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp;
      var users = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
      $composer_0.c2v(-37690787);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.h2w(users);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>' call
        var value_0 = ProfileScreen$lambda_0(users);
        this_0.j2x(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.e2v();
      LazyColumn(null, null, null, false, null, null, null, false, tmp0_group, $composer_0, 0, 255);
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
      tmp1_safe_receiver.r32(ProfileScreen$lambda_1(componentNavigator, $changed));
    }
  }
  function ProfileScreen$lambda($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.w();
  }
  function ProfileScreen$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.o(index));
    };
  }
  function ProfileScreen$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.o(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function ProfileScreen$lambda$lambda_1($items, $users) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>' call
        $items.o(it);
        var $composer_1 = $composer_0;
        $composer_1.c2v(-592644427);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_2 = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding(tmp_2, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_1().h7b_1;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().sb1_1;
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().g7b_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 390 >> 3 | 112 & 390 >> 3);
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
        var factory = Companion_getInstance_2().i8t_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.x2u();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
          $this$with.j2x(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.frafments.profile.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        println('avatar: ' + $users.o(it).bje_1);
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = $users.o(it).bje_1;
        if (charSequenceLength(this_0) === 0) {
          $composer_6.c2v(715532187);
          var tmp_4 = painterResource(get_compose_multiplatform(drawable_instance), $composer_6, 0);
          var tmp_5 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(64);
          var tmp_6 = aspectRatio(width(tmp_5, tmp$ret$4), 1.0);
          Image(tmp_4, null, tmp_6, null, null, 0.0, null, $composer_6, 432, 120);
          $composer_6.e2v();
        } else {
          $composer_6.c2v(715817015);
          var tmp_7 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(64);
          var tmp_8 = aspectRatio(width(tmp_7, tmp$ret$5), 1.0);
          var tmp_9 = _FilterQuality___init__impl__nv51aq(0);
          AsyncImage('https://avatars.githubusercontent.com/u/583231?v=4', null, tmp_8, null, null, null, null, 0.0, null, tmp_9, false, $composer_6, 438, 0, 2040);
          $composer_6.e2v();
        }
        var tmp_10 = $users.o(it).zjd_1;
        var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_10, null, tmp_11, tmp_12, null, null, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        var tmp_16 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(16);
        Spacer(width(tmp_16, tmp$ret$6), $composer_6, 6);
        var tmp_17 = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ' + $users.o(it).oje_1;
        var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_17, null, tmp_18, tmp_19, null, null, null, tmp_20, null, null, tmp_21, tmp_22, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.w2v();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.e2v();
        var tmp_23;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_23 = Unit_instance;
        }
        tmp_1 = tmp_23;
      } else {
        $composer_0.e2o();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda_0($users) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = $users;
      var tmp = items.j();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = ProfileScreen$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = ProfileScreen$lambda$lambda_0(items);
      $this$LazyColumn.fdk(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_11(composableLambdaInstance(-1091073711, true, ProfileScreen$lambda$lambda_1(items, $users))));
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda_1($componentNavigator, $$changed) {
    return function ($composer, $force) {
      ProfileScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_main_frafments_ratings_RatingsFragment$stable;
  function RatingsFragment() {
    RatingsFragment_instance = this;
    Fragment.call(this, 'ratings_fragment', VOID, ComposableSingletons$RatingsFragmentKt_getInstance().hju_1);
  }
  var RatingsFragment_instance;
  function RatingsFragment_getInstance() {
    if (RatingsFragment_instance == null)
      new RatingsFragment();
    return RatingsFragment_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
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
    return Unit_instance;
  }
  function ComposableSingletons$RatingsFragmentKt() {
    ComposableSingletons$RatingsFragmentKt_instance = this;
    var tmp = this;
    tmp.hju_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-879222470, false, ComposableSingletons$RatingsFragmentKt$lambda_1$lambda_n82bk4));
  }
  var ComposableSingletons$RatingsFragmentKt_instance;
  function ComposableSingletons$RatingsFragmentKt_getInstance() {
    if (ComposableSingletons$RatingsFragmentKt_instance == null)
      new ComposableSingletons$RatingsFragmentKt();
    return ComposableSingletons$RatingsFragmentKt_instance;
  }
  function RatingsScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(2048427430);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
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
      $composer_1.a2v(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().rad($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.b4a(), key, extras, qualifier, scope, parameters);
      $composer_1.b2v();
      var mainViewModel = tmp0;
      var tmp = emptyList();
      var users$delegate = collectAsState(mainViewModel.ajh_1, tmp, null, $composer_0, 48, 2);
      $composer_0.c2v(-1885463204);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.h2l(users$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen.<anonymous>' call
        var value_0 = RatingsScreen$lambda_0(users$delegate);
        this_0.j2x(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.e2v();
      LazyColumn(null, null, null, false, null, null, null, false, tmp0_group, $composer_0, 0, 255);
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
      tmp1_safe_receiver.r32(RatingsScreen$lambda_1(componentNavigator, $changed));
    }
  }
  function RatingsScreen$lambda($users$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('users', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $users$delegate.w();
  }
  function RatingsScreen$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.o(index));
    };
  }
  function RatingsScreen$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.o(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
    };
  }
  function RatingsScreen$lambda$lambda_1($items, $users$delegate) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen.<anonymous>.<anonymous>.<anonymous>' call
        $items.o(it);
        var $composer_1 = $composer_0;
        $composer_1.c2v(644336534);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_2 = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding(tmp_2, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_1().h7b_1;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().sb1_1;
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().g7b_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 390 >> 3 | 112 & 390 >> 3);
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
        var factory = Companion_getInstance_2().i8t_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.x2u();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().n8t_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().m8t_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().q8t_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
          $this$with.j2x(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().k8t_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        println('avatar: ' + RatingsScreen$lambda($users$delegate).o(it).bje_1);
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = RatingsScreen$lambda($users$delegate).o(it).bje_1;
        if (charSequenceLength(this_0) === 0) {
          $composer_6.c2v(525766779);
          var tmp_4 = painterResource(get_compose_multiplatform(drawable_instance), $composer_6, 0);
          var tmp_5 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(64);
          var tmp_6 = aspectRatio(width(tmp_5, tmp$ret$4), 1.0);
          Image(tmp_4, null, tmp_6, null, null, 0.0, null, $composer_6, 432, 120);
          $composer_6.e2v();
        } else {
          $composer_6.c2v(526050584);
          var tmp_7 = RatingsScreen$lambda($users$delegate).o(it).bje_1;
          var tmp_8 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(64);
          var tmp_9 = aspectRatio(width(tmp_8, tmp$ret$5), 1.0);
          var tmp_10 = _FilterQuality___init__impl__nv51aq(0);
          AsyncImage(tmp_7, null, tmp_9, null, null, null, null, 0.0, null, tmp_10, false, $composer_6, 432, 0, 2040);
          $composer_6.e2v();
        }
        var tmp_11 = RatingsScreen$lambda($users$delegate).o(it).zjd_1;
        var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_11, null, tmp_12, tmp_13, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        var tmp_17 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(16);
        Spacer(width(tmp_17, tmp$ret$6), $composer_6, 6);
        var tmp_18 = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ' + RatingsScreen$lambda($users$delegate).o(it).oje_1;
        var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_23 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_18, null, tmp_19, tmp_20, null, null, null, tmp_21, null, null, tmp_22, tmp_23, false, 0, 0, null, null, $composer_6, 0, 0, 131070);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.w2v();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.e2v();
        var tmp_24;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_24 = Unit_instance;
        }
        tmp_1 = tmp_24;
      } else {
        $composer_0.e2o();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function RatingsScreen$lambda_0($users$delegate) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = RatingsScreen$lambda($users$delegate);
      var tmp = items.j();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = RatingsScreen$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = RatingsScreen$lambda$lambda_0(items);
      $this$LazyColumn.fdk(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_13(composableLambdaInstance(-1091073711, true, RatingsScreen$lambda$lambda_1(items, $users$delegate))));
      return Unit_instance;
    };
  }
  function RatingsScreen$lambda_1($componentNavigator, $$changed) {
    return function ($composer, $force) {
      RatingsScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_splash_SplashActivity$stable;
  function SplashActivity() {
    SplashActivity_instance = this;
    Activity.call(this, 'auth_activity', listOf_0(SplashComponent_getInstance()), ComposableSingletons$SplashActivityKt_getInstance().iju_1);
  }
  var SplashActivity_instance;
  function SplashActivity_getInstance() {
    if (SplashActivity_instance == null)
      new SplashActivity();
    return SplashActivity_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
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
    $composer_1.a2v(414512006);
    if (!((7 & 1) === 0))
      qualifier = null;
    if (!((7 & 2) === 0))
      scope = currentKoinScope($composer_1, 0);
    if (!((7 & 4) === 0))
      parameters = null;
    var currentParameters$delegate = rememberUpdatedState(parameters, $composer_1, 14 & 0 >> 6);
    $composer_1.a2v(855641119);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.h2l(qualifier) | $composer_1.h2l(scope));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.koin.compose.koinInject.<anonymous>' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var this_0 = scope;
      var qualifier_0 = qualifier;
      var parameters_0 = ComposableSingletons$SplashActivityKt$lambda_1$lambda$lambda_rplcch(currentParameters$delegate);
      var value = this_0.bu(getKClass(MainViewModel), qualifier_0, parameters_0);
      $composer_1.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.b2v();
    $composer_1.b2v();
    var viewModel = tmp1_group;
    ActivityScaffold(components, null, null, null, null, false, false, $composer_0, 14 & $changed, 126);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function invoke$lambda_5($currentParameters$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentParameters', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentParameters$delegate.w();
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
    tmp.iju_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1375845529, false, ComposableSingletons$SplashActivityKt$lambda_1$lambda_r7joq2));
  }
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
  var org_korchagin_kmp_activity_splash_fragments_SplashFragment$stable;
  function SplashFragment() {
    SplashFragment_instance = this;
    Fragment.call(this, 'splash_fragment', VOID, ComposableSingletons$SplashFragmentKt_getInstance().jju_1);
  }
  var SplashFragment_instance;
  function SplashFragment_getInstance() {
    if (SplashFragment_instance == null)
      new SplashFragment();
    return SplashFragment_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.d3u(p0, p1, p2, p3);
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
    var invalid = $composer_1.h2l(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.activity.splash.fragments.ComposableSingletons$SplashFragmentKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
      $composer_1.j2x(value);
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
    return Unit_instance;
  }
  function ComposableSingletons$SplashFragmentKt$lambda_1$lambda$lambda_n0e1y8($componentNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1766910279, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.ComposableSingletons$SplashFragmentKt.lambda-1.<anonymous>.<anonymous> (SplashFragment.kt:11)');
        }
        SplashScreen($componentNavigator, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$SplashFragmentKt() {
    ComposableSingletons$SplashFragmentKt_instance = this;
    var tmp = this;
    tmp.jju_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(980364363, false, ComposableSingletons$SplashFragmentKt$lambda_1$lambda_yuc4k5));
  }
  var ComposableSingletons$SplashFragmentKt_instance;
  function ComposableSingletons$SplashFragmentKt_getInstance() {
    if (ComposableSingletons$SplashFragmentKt_instance == null)
      new ComposableSingletons$SplashFragmentKt();
    return ComposableSingletons$SplashFragmentKt_instance;
  }
  function SplashScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-348898267);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-348898267, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen (SplashScreen.kt:16)');
      }
      $composer_0.c2v(-195468558);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>' call
        var value = SplashScreen$slambda_0(null);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect_0(Unit_instance, tmp0_group, $composer_0, 6);
      var gifNames = listOf(['break_splash1', 'break_splash2', 'break_splash3', 'break_splash4', 'break_splash5']);
      // Inline function 'kotlin.collections.random' call
      var randomGifName = random(gifNames, Default_getInstance());
      var gifUrl = 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/Logo%2Fbreak_splash1.gif?alt=media&token=7086ff5c-a41e-4740-8358-f31a2d4c53b6';
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().x7a_1;
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
      var factory = Companion_getInstance_2().i8t_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>' call
      var $composer_5 = $composer_4;
      if (get_currentPlatform().u2_1 === 1) {
        $composer_5.c2v(881706842);
        GifImage(gifUrl, $composer_5, 6);
        $composer_5.e2v();
      } else {
        $composer_5.c2v(881822596);
        GifImage(randomGifName, $composer_5, 0);
        $composer_5.e2v();
      }
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
    var tmp1_safe_receiver = $composer_0.y2x();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r32(SplashScreen$lambda(componentNavigator, $changed));
    }
  }
  function SplashScreen$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SplashScreen$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SplashScreen$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SplashScreen$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = delay(new Long(3000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            GlobalNavigation_getInstance().ijl(MainActivity_getInstance());
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
  protoOf(SplashScreen$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new SplashScreen$slambda(completion);
    i.sju_1 = $this$LaunchedEffect;
    return i;
  };
  function SplashScreen$slambda_0(resultContinuation) {
    var i = new SplashScreen$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SplashScreen$lambda($componentNavigator, $$changed) {
    return function ($composer, $force) {
      SplashScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
      $this$startKoin.gr(getMainModules());
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_theme_colors_AppColorsDefined_LightTheme$stable;
  var org_korchagin_kmp_theme_colors_AppColorsDefined_DarkTheme$stable;
  var org_korchagin_kmp_theme_colors_AppColors$stable;
  var org_korchagin_kmp_theme_colors_AppColorsTheme$stable;
  var org_korchagin_kmp_theme_colors_Colors$stable;
  function LightTheme() {
    LightTheme_instance = this;
    this.tju_1 = Color(new Long(-14523986, 0));
    this.uju_1 = Color(new Long(-14540252, 0));
    this.vju_1 = Color(new Long(-1, 0));
    this.wju_1 = Color(new Long(-1, 0));
    this.xju_1 = Color(new Long(-9013638, 0));
    this.yju_1 = Color(new Long(-9013638, 0));
    this.zju_1 = Color(new Long(-1, 0));
    this.ajv_1 = Color(new Long(-14540252, 0));
    this.bjv_1 = Color(new Long(-40093, 0));
    this.cjv_1 = Color(new Long(-1069056, 0));
    this.djv_1 = Color(new Long(-14523986, 0));
    this.ejv_1 = Color(new Long(-15353777, 0));
    this.fjv_1 = Color(new Long(-40093, 0));
    this.gjv_1 = Color(new Long(-1069056, 0));
    this.hjv_1 = Color(new Long(-1, 0));
    this.ijv_1 = Color(new Long(-1, 0));
    this.jjv_1 = Color(new Long(-1, 0));
    this.kjv_1 = Color(new Long(-1069056, 0));
    this.ljv_1 = Color(new Long(-10393459, 0));
    this.mjv_1 = Color(new Long(-3376054, 0));
  }
  var LightTheme_instance;
  function LightTheme_getInstance() {
    if (LightTheme_instance == null)
      new LightTheme();
    return LightTheme_instance;
  }
  function DarkTheme() {
    DarkTheme_instance = this;
    this.njv_1 = Color(new Long(-14523986, 0));
    this.ojv_1 = Color(new Long(-1, 0));
    this.pjv_1 = Color(new Long(-1, 0));
    this.qjv_1 = Color(new Long(-1, 0));
    this.rjv_1 = Color(new Long(-4408129, 0));
    this.sjv_1 = Color(new Long(-4408129, 0));
    this.tjv_1 = Color(new Long(-14540252, 0));
    this.ujv_1 = Color(new Long(-1, 0));
    this.vjv_1 = Color(new Long(-40093, 0));
    this.wjv_1 = Color(new Long(-1069056, 0));
    this.xjv_1 = Color(new Long(-14523986, 0));
    this.yjv_1 = Color(new Long(-15353777, 0));
    this.zjv_1 = Color(new Long(-40093, 0));
    this.ajw_1 = Color(new Long(-1069056, 0));
    this.bjw_1 = Color(new Long(-1, 0));
    this.cjw_1 = Color(new Long(-1, 0));
    this.djw_1 = Color(new Long(-1, 0));
    this.ejw_1 = Color(new Long(-1069056, 0));
    this.fjw_1 = Color(new Long(-10393459, 0));
    this.gjw_1 = Color(new Long(-3376054, 0));
  }
  var DarkTheme_instance;
  function DarkTheme_getInstance() {
    if (DarkTheme_instance == null)
      new DarkTheme();
    return DarkTheme_instance;
  }
  function AppColors() {
    AppColors_instance = this;
    this.hjw_1 = new Colors();
  }
  protoOf(AppColors).ijw = function () {
    return this.hjw_1;
  };
  protoOf(AppColors).jjw = function (colors) {
    this.hjw_1 = colors;
  };
  var AppColors_instance;
  function AppColors_getInstance() {
    if (AppColors_instance == null)
      new AppColors();
    return AppColors_instance;
  }
  function AppColorsTheme() {
  }
  protoOf(AppColorsTheme).yjs = function () {
    AppColors_getInstance().jjw(new Colors(LightTheme_getInstance().tju_1, LightTheme_getInstance().uju_1, LightTheme_getInstance().vju_1, LightTheme_getInstance().wju_1, LightTheme_getInstance().xju_1, LightTheme_getInstance().zju_1, LightTheme_getInstance().yju_1, LightTheme_getInstance().ajv_1, LightTheme_getInstance().bjv_1, LightTheme_getInstance().cjv_1, LightTheme_getInstance().djv_1, LightTheme_getInstance().ejv_1, LightTheme_getInstance().fjv_1, LightTheme_getInstance().gjv_1, LightTheme_getInstance().hjv_1, LightTheme_getInstance().ijv_1, LightTheme_getInstance().jjv_1, LightTheme_getInstance().kjv_1, LightTheme_getInstance().ljv_1, LightTheme_getInstance().mjv_1));
  };
  protoOf(AppColorsTheme).ajt = function () {
    AppColors_getInstance().jjw(new Colors(DarkTheme_getInstance().njv_1, DarkTheme_getInstance().ojv_1, DarkTheme_getInstance().pjv_1, DarkTheme_getInstance().qjv_1, DarkTheme_getInstance().rjv_1, DarkTheme_getInstance().tjv_1, DarkTheme_getInstance().sjv_1, DarkTheme_getInstance().ujv_1, DarkTheme_getInstance().vjv_1, DarkTheme_getInstance().wjv_1, DarkTheme_getInstance().xjv_1, DarkTheme_getInstance().yjv_1, DarkTheme_getInstance().zjv_1, DarkTheme_getInstance().ajw_1, DarkTheme_getInstance().bjw_1, DarkTheme_getInstance().cjw_1, DarkTheme_getInstance().djw_1, DarkTheme_getInstance().ejw_1, DarkTheme_getInstance().fjw_1, DarkTheme_getInstance().gjw_1));
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
    this.kjw_1 = primaryColor;
    this.ljw_1 = textDefault;
    this.mjw_1 = textOnPrimary;
    this.njw_1 = iconOnPrimary;
    this.ojw_1 = textGrey;
    this.pjw_1 = defaultBackground;
    this.qjw_1 = iconGrey;
    this.rjw_1 = defaultDividerColor;
    this.sjw_1 = dislikeColor;
    this.tjw_1 = shareColor;
    this.ujw_1 = likeColor;
    this.vjw_1 = reportStatusAcceptedColor;
    this.wjw_1 = reportStatusRejectedColor;
    this.xjw_1 = reportStatusModeratedColor;
    this.yjw_1 = reportOnAcceptedTextColor;
    this.zjw_1 = reportOnRejectedTextColor;
    this.ajx_1 = reportOnModerationTextColor;
    this.bjx_1 = ratingFistPlaceColor;
    this.cjx_1 = ratingSecondPlaceColor;
    this.djx_1 = ratingThirdPlaceColor;
  }
  protoOf(Colors).toString = function () {
    return 'Colors(primaryColor=' + Color__toString_impl_hpzmaq(this.kjw_1) + ', textDefault=' + Color__toString_impl_hpzmaq(this.ljw_1) + ', textOnPrimary=' + Color__toString_impl_hpzmaq(this.mjw_1) + ', iconOnPrimary=' + Color__toString_impl_hpzmaq(this.njw_1) + ', textGrey=' + Color__toString_impl_hpzmaq(this.ojw_1) + ', defaultBackground=' + Color__toString_impl_hpzmaq(this.pjw_1) + ', iconGrey=' + Color__toString_impl_hpzmaq(this.qjw_1) + ', defaultDividerColor=' + Color__toString_impl_hpzmaq(this.rjw_1) + ', dislikeColor=' + Color__toString_impl_hpzmaq(this.sjw_1) + ', shareColor=' + Color__toString_impl_hpzmaq(this.tjw_1) + ', likeColor=' + Color__toString_impl_hpzmaq(this.ujw_1) + ', reportStatusAcceptedColor=' + Color__toString_impl_hpzmaq(this.vjw_1) + ', reportStatusRejectedColor=' + Color__toString_impl_hpzmaq(this.wjw_1) + ', reportStatusModeratedColor=' + Color__toString_impl_hpzmaq(this.xjw_1) + ', reportOnAcceptedTextColor=' + Color__toString_impl_hpzmaq(this.yjw_1) + ', reportOnRejectedTextColor=' + Color__toString_impl_hpzmaq(this.zjw_1) + ', reportOnModerationTextColor=' + Color__toString_impl_hpzmaq(this.ajx_1) + ', ratingFistPlaceColor=' + Color__toString_impl_hpzmaq(this.bjx_1) + ', ratingSecondPlaceColor=' + Color__toString_impl_hpzmaq(this.cjx_1) + ', ratingThirdPlaceColor=' + Color__toString_impl_hpzmaq(this.djx_1) + ')';
  };
  protoOf(Colors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.kjw_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ljw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.mjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.njw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ojw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.pjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.qjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.rjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.sjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.tjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ujw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.vjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.wjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.xjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.yjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.zjw_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ajx_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.bjx_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.cjx_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.djx_1) | 0;
    return result;
  };
  protoOf(Colors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Colors))
      return false;
    var tmp0_other_with_cast = other instanceof Colors ? other : THROW_CCE();
    if (!equals(this.kjw_1, tmp0_other_with_cast.kjw_1))
      return false;
    if (!equals(this.ljw_1, tmp0_other_with_cast.ljw_1))
      return false;
    if (!equals(this.mjw_1, tmp0_other_with_cast.mjw_1))
      return false;
    if (!equals(this.njw_1, tmp0_other_with_cast.njw_1))
      return false;
    if (!equals(this.ojw_1, tmp0_other_with_cast.ojw_1))
      return false;
    if (!equals(this.pjw_1, tmp0_other_with_cast.pjw_1))
      return false;
    if (!equals(this.qjw_1, tmp0_other_with_cast.qjw_1))
      return false;
    if (!equals(this.rjw_1, tmp0_other_with_cast.rjw_1))
      return false;
    if (!equals(this.sjw_1, tmp0_other_with_cast.sjw_1))
      return false;
    if (!equals(this.tjw_1, tmp0_other_with_cast.tjw_1))
      return false;
    if (!equals(this.ujw_1, tmp0_other_with_cast.ujw_1))
      return false;
    if (!equals(this.vjw_1, tmp0_other_with_cast.vjw_1))
      return false;
    if (!equals(this.wjw_1, tmp0_other_with_cast.wjw_1))
      return false;
    if (!equals(this.xjw_1, tmp0_other_with_cast.xjw_1))
      return false;
    if (!equals(this.yjw_1, tmp0_other_with_cast.yjw_1))
      return false;
    if (!equals(this.zjw_1, tmp0_other_with_cast.zjw_1))
      return false;
    if (!equals(this.ajx_1, tmp0_other_with_cast.ajx_1))
      return false;
    if (!equals(this.bjx_1, tmp0_other_with_cast.bjx_1))
      return false;
    if (!equals(this.cjx_1, tmp0_other_with_cast.cjx_1))
      return false;
    if (!equals(this.djx_1, tmp0_other_with_cast.djx_1))
      return false;
    return true;
  };
  var org_korchagin_kmp_theme_global_NavViewStyle$stable;
  function NavViewStyle$light$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.zjs($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavViewStyle$dark$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.bjt($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavViewStyle() {
  }
  protoOf(NavViewStyle).zjs = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(581841946);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
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
      tmp.ijr(tmp_0, tmp_3, tmp_4, tmp_5, null, null, $composer_0, team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() | team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() << 3 | team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter() << 6 | team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter() << 18, 56);
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
      tmp1_safe_receiver.r32(NavViewStyle$light$lambda(this, $changed));
    }
  };
  protoOf(NavViewStyle).bjt = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1851483102);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
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
      tmp.ijr(tmp_0, tmp_3, tmp_4, tmp_5, null, null, $composer_0, team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() | team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() << 3 | team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter() << 6 | team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter() << 18, 56);
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
      tmp1_safe_receiver.r32(NavViewStyle$dark$lambda(this, $changed));
    }
  };
  var org_korchagin_kmp_theme_global_ToolbarTheme$stable;
  function ToolbarTheme$light$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.zjs($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ToolbarTheme$dark$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.bjt($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ToolbarTheme() {
  }
  protoOf(ToolbarTheme).zjs = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1122133254);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1122133254, $changed, -1, 'org.korchagin.kmp.theme.global.ToolbarTheme.light (ToolbarTheme.kt:9)');
      }
      ToolbarStyle_getInstance().mjr(new AppToolbarStyle(AppColors_getInstance().ijw().kjw_1), $composer_0, team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter() | team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter() << 3);
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
      tmp1_safe_receiver.r32(ToolbarTheme$light$lambda(this, $changed));
    }
  };
  protoOf(ToolbarTheme).bjt = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(147507902);
    if (!(($changed & 1) === 0) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(147507902, $changed, -1, 'org.korchagin.kmp.theme.global.ToolbarTheme.dark (ToolbarTheme.kt:18)');
      }
      ToolbarStyle_getInstance().mjr(new AppToolbarStyle(AppColors_getInstance().ijw().kjw_1), $composer_0, team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter() | team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter() << 3);
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
      tmp1_safe_receiver.r32(ToolbarTheme$dark$lambda(this, $changed));
    }
  };
  function GifImage(drawable, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(947552751);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(drawable) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(947552751, $dirty, -1, 'org.korchagin.kmp.GifImage (Platforma.js.kt:8)');
      }
      $composer_0.c2v(-635403799);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'org.korchagin.kmp.GifImage.<anonymous>' call
        var value = GifImage$lambda(drawable);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      DisposableEffect(drawable, tmp0_group, $composer_0, 14 & $dirty);
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
      tmp1_safe_receiver.r32(GifImage$lambda_0(drawable, $changed));
    }
  }
  function get_currentPlatform() {
    return PlatformType_JS_getInstance();
  }
  function _no_name_provided__qut3iv($root, $img) {
    this.ejx_1 = $root;
    this.fjx_1 = $img;
  }
  protoOf(_no_name_provided__qut3iv).n18 = function () {
    // Inline function 'org.korchagin.kmp.GifImage.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.ejx_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.removeChild(this.fjx_1);
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
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_ScreenSizeHandler$stable;
  function ScreenSizeHandler$getScreenSize$slambda($screenSize, resultContinuation) {
    this.ojx_1 = $screenSize;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScreenSizeHandler$getScreenSize$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ScreenSizeHandler$getScreenSize$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScreenSizeHandler$getScreenSize$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = delay(new Long(50, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ojx_1.n1v(new Pair(window.innerWidth, window.innerHeight));
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
  protoOf(ScreenSizeHandler$getScreenSize$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new ScreenSizeHandler$getScreenSize$slambda(this.ojx_1, completion);
    i.pjx_1 = $this$LaunchedEffect;
    return i;
  };
  function ScreenSizeHandler$getScreenSize$slambda_0($screenSize, resultContinuation) {
    var i = new ScreenSizeHandler$getScreenSize$slambda($screenSize, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScreenSizeHandler$getScreenSize$lambda$lambda($screenSize) {
    return function (it) {
      $screenSize.n1v(new Pair(window.innerWidth, window.innerHeight));
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0($listener) {
    this.qjx_1 = $listener;
  }
  protoOf(_no_name_provided__qut3iv_0).n18 = function () {
    // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>.<anonymous>.<anonymous>' call
    window.removeEventListener('resize', this.qjx_1);
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
  }
  protoOf(ScreenSizeHandler).djt = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-1772696338);
    if (isTraceInProgress()) {
      traceEventStart(-1772696338, $changed, -1, 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize (ScreenSizeHandler.js.kt:13)');
    }
    $composer_0.c2v(-1191388129);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value = mutableStateOf(new Pair(0, 0));
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    var screenSize = tmp1_group;
    $composer_0.c2v(-1191385852);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value_0 = ScreenSizeHandler$getScreenSize$slambda_0(screenSize, null);
      $composer_0.j2x(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.e2v();
    LaunchedEffect_0(Unit_instance, tmp2_group, $composer_0, 6);
    $composer_0.c2v(-1191381173);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.y2w();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().n2o_1) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value_1 = ScreenSizeHandler$getScreenSize$lambda(screenSize);
      $composer_0.j2x(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.e2v();
    DisposableEffect(Unit_instance, tmp3_group, $composer_0, 54);
    var tmp0 = screenSize.w();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  var ScreenSizeHandler_instance;
  function ScreenSizeHandler_getInstance() {
    return ScreenSizeHandler_instance;
  }
  function main() {
    initialize(Firebase_instance, VOID, new FirebaseOptions('1:562023826894:web:673fcd6506381387ae579f', 'AIzaSyBfjWARdMqCo7UZXoY5dDafJFJOazqv-QE', 'https://goodfootbreaking.firebaseio.com', VOID, VOID, 'goodfootbreaking'));
    println('Hello, PWA!');
    var tmp = typeof window !== 'undefined' && 'serviceWorker' in navigator;
    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
      var tmp_0 = window.navigator.serviceWorker.register('/service-worker.js');
      var tmp_1 = tmp_0.then(main$lambda);
      tmp_1.catch(main$lambda_0);
    }
    onWasmReady(main$lambda_1);
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1510551301, $changed, -1, 'org.korchagin.kmp.ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:35)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.rjx_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1510551301, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(it) {
    console.log('Service Worker registered');
    return Unit_instance;
  }
  function main$lambda_0(it) {
    console.error('Service Worker registration failed', it);
    return Unit_instance;
  }
  function main$lambda_1() {
    initKoin();
    CanvasBasedWindow(VOID, 'ComposeTarget', VOID, VOID, ComposableSingletons$MainKt_getInstance().rjx_1);
    return Unit_instance;
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
  drawable_instance = new drawable();
  string_instance = new string();
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
  ScreenSizeHandler_instance = new ScreenSizeHandler();
  //endregion
  //region block: exports
  kotlin_io_coil_kt_coil3_coil_network_ktor3.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=composeApp.js.map
