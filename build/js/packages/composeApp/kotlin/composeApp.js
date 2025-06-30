(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-navigation-navigation-compose.js', './NavigationComposeExtra-extra_nav.js', './MaterialExtension-multiplatform_material_extension.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js', './projects-compose-koin-compose-viewmodel.js', './projects-compose-koin-compose.js', './BreakingKMPApp-module_auth-presentation_auth.js', './BreakingKMPApp-module_main-presentation_main.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-material-material-icons-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-foundation-foundation.js', './coil-root-coil-compose.js', './projects-core-koin-core.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-animation-animation.js', './AvatarCropper-imagecropper2.js', './compose-multiplatform-core-core-core-bundle.js', './ImagePicker-image_picker_lib.js', './PlatformPermission-apppermissions.js', './MultyImageSample-multiimage.js', './BreakingKMPApp-module_main-di_main.js', './BreakingKMPApp-module_auth-di_auth.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './firebase-kotlin-sdk-firebase-app.js', './coil-root-coil-network-ktor3.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-navigation-navigation-compose.js'), require('./NavigationComposeExtra-extra_nav.js'), require('./MaterialExtension-multiplatform_material_extension.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose.js'), require('./projects-compose-koin-compose-viewmodel.js'), require('./projects-compose-koin-compose.js'), require('./BreakingKMPApp-module_auth-presentation_auth.js'), require('./BreakingKMPApp-module_main-presentation_main.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-material-material-icons-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./coil-root-coil-compose.js'), require('./projects-core-koin-core.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./AvatarCropper-imagecropper2.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./ImagePicker-image_picker_lib.js'), require('./PlatformPermission-apppermissions.js'), require('./MultyImageSample-multiimage.js'), require('./BreakingKMPApp-module_main-di_main.js'), require('./BreakingKMPApp-module_auth-di_auth.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./firebase-kotlin-sdk-firebase-app.js'), require('./coil-root-coil-network-ktor3.js'));
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
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['projects-compose-koin-compose-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'projects-compose-koin-compose-viewmodel' was not found. Please, check whether 'projects-compose-koin-compose-viewmodel' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['projects-compose-koin-compose'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'projects-compose-koin-compose' was not found. Please, check whether 'projects-compose-koin-compose' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_auth-presentation_auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'BreakingKMPApp-module_auth-presentation_auth' was not found. Please, check whether 'BreakingKMPApp-module_auth-presentation_auth' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-presentation_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'BreakingKMPApp-module_main-presentation_main' was not found. Please, check whether 'BreakingKMPApp-module_main-presentation_main' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material-material-icons-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-material-material-icons-core' was not found. Please, check whether 'compose-multiplatform-core-compose-material-material-icons-core' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['coil-root-coil-compose'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'coil-root-coil-compose' was not found. Please, check whether 'coil-root-coil-compose' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['AvatarCropper-imagecropper2'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'AvatarCropper-imagecropper2' was not found. Please, check whether 'AvatarCropper-imagecropper2' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['ImagePicker-image_picker_lib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'ImagePicker-image_picker_lib' was not found. Please, check whether 'ImagePicker-image_picker_lib' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['PlatformPermission-apppermissions'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'PlatformPermission-apppermissions' was not found. Please, check whether 'PlatformPermission-apppermissions' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['MultyImageSample-multiimage'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'MultyImageSample-multiimage' was not found. Please, check whether 'MultyImageSample-multiimage' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-di_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'BreakingKMPApp-module_main-di_main' was not found. Please, check whether 'BreakingKMPApp-module_main-di_main' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_auth-di_auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'BreakingKMPApp-module_auth-di_auth' was not found. Please, check whether 'BreakingKMPApp-module_auth-di_auth' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'firebase-kotlin-sdk-firebase-app' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-app' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    if (typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp:composeApp'. Its dependency 'coil-root-coil-network-ktor3' was not found. Please, check whether 'coil-root-coil-network-ktor3' is loaded prior to 'BreakingKMPApp:composeApp'.");
    }
    globalThis['BreakingKMPApp:composeApp'] = factory(typeof globalThis['BreakingKMPApp:composeApp'] === 'undefined' ? {} : globalThis['BreakingKMPApp:composeApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-navigation-navigation-compose'], globalThis['NavigationComposeExtra-extra_nav'], globalThis['MaterialExtension-multiplatform_material_extension'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'], globalThis['projects-compose-koin-compose-viewmodel'], globalThis['projects-compose-koin-compose'], globalThis['BreakingKMPApp-module_auth-presentation_auth'], globalThis['BreakingKMPApp-module_main-presentation_main'], globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-material-material-icons-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['coil-root-coil-compose'], globalThis['projects-core-koin-core'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['AvatarCropper-imagecropper2'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['ImagePicker-image_picker_lib'], globalThis['PlatformPermission-apppermissions'], globalThis['MultyImageSample-multiimage'], globalThis['BreakingKMPApp-module_main-di_main'], globalThis['BreakingKMPApp-module_auth-di_auth'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['firebase-kotlin-sdk-firebase-app'], globalThis['coil-root-coil-network-ktor3']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_androidx_navigation_navigation_compose, kotlin_NavigationComposeExtra_extra_nav, kotlin_MaterialExtension_multiplatform_material_extension, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose, kotlin_io_insert_koin_koin_compose_viewmodel, kotlin_io_insert_koin_koin_compose, kotlin_BreakingKMPApp_module_auth_presentation_auth, kotlin_BreakingKMPApp_module_main_presentation_main, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_material_material_icons_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_io_coil_kt_coil3_coil_compose, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_animation_animation, kotlin_AvatarCropper_imagecropper2, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_ImagePicker_image_picker_lib, kotlin_PlatformPermission_apppermissions, kotlin_MultyImageSample_multiimage, kotlin_BreakingKMPApp_module_main_di_main, kotlin_BreakingKMPApp_module_auth_di_auth, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_dev_gitlive_firebase_app, kotlin_io_coil_kt_coil3_coil_network_ktor3) {
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
  var StringResource = kotlin_components_resources_library.$_$.d;
  var LanguageQualifier = kotlin_components_resources_library.$_$.b;
  var setOf_0 = kotlin_kotlin.$_$.cb;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var rememberNavController = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.d;
  var GlobalNavigator = kotlin_NavigationComposeExtra_extra_nav.$_$.f;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var rememberTheme = kotlin_MaterialExtension_multiplatform_material_extension.$_$.g;
  var isDark = kotlin_MaterialExtension_multiplatform_material_extension.$_$.f;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.v;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var VOID = kotlin_kotlin.$_$.j;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.u;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var listOf = kotlin_kotlin.$_$.da;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Enum = kotlin_kotlin.$_$.bk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Activity = kotlin_NavigationComposeExtra_extra_nav.$_$.c;
  var listOf_0 = kotlin_kotlin.$_$.ca;
  var ActivityScaffold = kotlin_NavigationComposeExtra_extra_nav.$_$.b;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Component = kotlin_NavigationComposeExtra_extra_nav.$_$.d;
  var SimpleNavIcon = kotlin_NavigationComposeExtra_extra_nav.$_$.n;
  var Fragment = kotlin_NavigationComposeExtra_extra_nav.$_$.e;
  var LocalViewModelStoreOwner_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_compose.$_$.b;
  var toString = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var defaultExtras = kotlin_io_insert_koin_koin_compose_viewmodel.$_$.a;
  var currentKoinScope = kotlin_io_insert_koin_koin_compose.$_$.a;
  var AuthViewModel = kotlin_BreakingKMPApp_module_auth_presentation_auth.$_$.b;
  var getKClass = kotlin_kotlin.$_$.g;
  var resolveViewModel = kotlin_io_insert_koin_koin_compose_viewmodel.$_$.b;
  var MainViewModel = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.f;
  var rememberSaveable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.g;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var SnackbarHostState = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var Builder = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g3;
  var SpanStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x1;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.w;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var Scaffold = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.p;
  var Icons_getInstance = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.e;
  var get_Email = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.c;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var get_Edit = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var SnackbarHost = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var trim = kotlin_kotlin.$_$.nj;
  var findNavHost = kotlin_NavigationComposeExtra_extra_nav.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.oe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var equals = kotlin_kotlin.$_$.od;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t1;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y2;
  var KeyboardOptions = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var OutlinedTextField = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var PasswordVisualTransformation = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w1;
  var Text_0 = kotlin_org_jetbrains_compose_material3_material3.$_$.q;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var painterResource = kotlin_components_resources_library.$_$.e;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var TopAppBarColors = kotlin_org_jetbrains_compose_material3_material3.$_$.r;
  var stringResource = kotlin_components_resources_library.$_$.f;
  var TopAppBar = kotlin_org_jetbrains_compose_material3_material3.$_$.s;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u2;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.z;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r2;
  var padding_2 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f3;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t1;
  var border_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u1;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.da;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var AsyncImage = kotlin_io_coil_kt_coil3_coil_compose.$_$.a;
  var wrapContentSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n1;
  var get_em = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var drawWithCache = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var println = kotlin_kotlin.$_$.ad;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var currentBackStackEntryAsState = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.c;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var emptyParametersHolder = kotlin_io_insert_koin_koin_core.$_$.k;
  var SimpleBottomNavigationBar = kotlin_NavigationComposeExtra_extra_nav.$_$.m;
  var SimpleNavigationRail = kotlin_NavigationComposeExtra_extra_nav.$_$.o;
  var emptyList = kotlin_kotlin.$_$.o8;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var rememberInfiniteTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o1;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var infiniteRepeatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m1;
  var animateFloat = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var Fixed = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var LazyVerticalGrid = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var toInt = kotlin_kotlin.$_$.cj;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var drawBehind = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var aspectRatio = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var ElementsTab_FREEZE_getInstance = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.h;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var ImageWithText = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.c;
  var com_korchagin_presentation_viewModel_MainViewModel$stableprop_getter = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.g;
  var ElementsTab_STRETCH_getInstance = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.k;
  var ElementsTab_OFP_getInstance = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.i;
  var ElementsTab_POWER_getInstance = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.j;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var animateContentSize = kotlin_org_jetbrains_compose_animation_animation.$_$.g;
  var getElementRating = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.d;
  var HorizontalDivider = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var background_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r1;
  var Switch = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var collectAsState_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Icon_0 = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var AppFab = kotlin_MaterialExtension_multiplatform_material_extension.$_$.b;
  var CropperIcons = kotlin_AvatarCropper_imagecropper2.$_$.b;
  var CropperColors = kotlin_AvatarCropper_imagecropper2.$_$.a;
  var ImageCropper = kotlin_AvatarCropper_imagecropper2.$_$.c;
  var setResult = kotlin_NavigationComposeExtra_extra_nav.$_$.q;
  var IconButton = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var _StrokeCap___init__impl__kfgr27 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var CircularProgressIndicator = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var MediaPicker_getInstance = kotlin_ImagePicker_image_picker_lib.$_$.a;
  var PermissionX_instance = kotlin_PlatformPermission_apppermissions.$_$.a;
  var generateAvatar = kotlin_MultyImageSample_multiimage.$_$.b;
  var AsyncMultiImage = kotlin_MultyImageSample_multiimage.$_$.a;
  var offset = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var getResult = kotlin_NavigationComposeExtra_extra_nav.$_$.p;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Default_getInstance = kotlin_kotlin.$_$.s5;
  var random = kotlin_kotlin.$_$.sa;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.i;
  var AnimatedVisibility = kotlin_org_jetbrains_compose_animation_animation.$_$.b;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var startKoin = kotlin_io_insert_koin_koin_core.$_$.e;
  var getMainModules = kotlin_BreakingKMPApp_module_main_di_main.$_$.a;
  var getAuthModules = kotlin_BreakingKMPApp_module_auth_di_auth.$_$.a;
  var plus = kotlin_kotlin.$_$.qa;
  var Color_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var SimpleNavigationStyle_getInstance = kotlin_NavigationComposeExtra_extra_nav.$_$.a;
  var NavigationStyle = kotlin_NavigationComposeExtra_extra_nav.$_$.i;
  var NavigationItemStyle = kotlin_NavigationComposeExtra_extra_nav.$_$.h;
  var team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.k;
  var team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.j;
  var team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter = kotlin_NavigationComposeExtra_extra_nav.$_$.l;
  var ToolbarStyle_getInstance = kotlin_MaterialExtension_multiplatform_material_extension.$_$.a;
  var AppToolbarStyle = kotlin_MaterialExtension_multiplatform_material_extension.$_$.c;
  var team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter = kotlin_MaterialExtension_multiplatform_material_extension.$_$.d;
  var team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter = kotlin_MaterialExtension_multiplatform_material_extension.$_$.e;
  var rememberPagerState = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var TabRow = kotlin_org_jetbrains_compose_material3_material3.$_$.n;
  var HorizontalPager = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q1;
  var checkIndexOverflow = kotlin_kotlin.$_$.p7;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var Tab = kotlin_org_jetbrains_compose_material3_material3.$_$.o;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var setProgress = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.e;
  var Elements = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.b;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.h;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s4;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var RepeatMode_Reverse_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var to = kotlin_kotlin.$_$.dm;
  var mapOf = kotlin_kotlin.$_$.fa;
  var split = kotlin_kotlin.$_$.li;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var toIntOrNull = kotlin_kotlin.$_$.bj;
  var LocalDate_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var Companion_getInstance_11 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.n1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var charArrayOf = kotlin_kotlin.$_$.gd;
  var trimStart = kotlin_kotlin.$_$.mj;
  var firstOrNull = kotlin_kotlin.$_$.ph;
  var uppercaseChar = kotlin_kotlin.$_$.oj;
  var Char = kotlin_kotlin.$_$.xj;
  var toString_0 = kotlin_kotlin.$_$.v3;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Pair = kotlin_kotlin.$_$.mk;
  var isBlank = kotlin_kotlin.$_$.vh;
  var Firebase_instance = kotlin_dev_gitlive_firebase_app.$_$.e;
  var FirebaseOptions = kotlin_dev_gitlive_firebase_app.$_$.c;
  var initialize = kotlin_dev_gitlive_firebase_app.$_$.d;
  var CanvasBasedWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.m8;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(CommonMainString0, 'CommonMainString0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForClass(PlatformType, 'PlatformType', VOID, Enum);
  initMetadataForObject(AuthActivity, 'AuthActivity', VOID, Activity);
  initMetadataForObject(ComposableSingletons$AuthActivityKt, 'ComposableSingletons$AuthActivityKt');
  initMetadataForObject(AuthComponent, 'AuthComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$AuthComponentKt, 'ComposableSingletons$AuthComponentKt');
  initMetadataForObject(AuthFragment, 'AuthFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$AuthFragmentKt, 'ComposableSingletons$AuthFragmentKt');
  initMetadataForObject(ComposableSingletons$AuthScreenKt, 'ComposableSingletons$AuthScreenKt');
  initMetadataForLambda(AuthScreen$lambda$lambda$slambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AuthScreen$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(PasswordRecoveryFragment, 'PasswordRecoveryFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$PasswordRecoveryFragmentKt, 'ComposableSingletons$PasswordRecoveryFragmentKt');
  initMetadataForObject(ComposableSingletons$PasswordRecoveryScreenKt, 'ComposableSingletons$PasswordRecoveryScreenKt');
  initMetadataForLambda(PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(PasswordRecoveryScreen$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(RegistrationFragment, 'RegistrationFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$RegistrationFragmentKt, 'ComposableSingletons$RegistrationFragmentKt');
  initMetadataForObject(ComposableSingletons$RegistrationScreenKt, 'ComposableSingletons$RegistrationScreenKt');
  initMetadataForLambda(RegistrationScreen$lambda$lambda$slambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RegistrationScreen$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(BboysDetailsActivity, 'BboysDetailsActivity', VOID, Activity);
  initMetadataForObject(ComposableSingletons$BboysDetailsActivityKt, 'ComposableSingletons$BboysDetailsActivityKt');
  initMetadataForObject(BboysDetailsComponent, 'BboysDetailsComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$BboysDetailsComponentKt, 'ComposableSingletons$BboysDetailsComponentKt');
  initMetadataForObject(BboysDetailsFragment, 'BboysDetailsFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$BboysDetailsFragmentKt, 'ComposableSingletons$BboysDetailsFragmentKt');
  initMetadataForObject(ElementDetailsActivity, 'ElementDetailsActivity', VOID, Activity);
  initMetadataForObject(ComposableSingletons$ElementDetailsActivityKt, 'ComposableSingletons$ElementDetailsActivityKt');
  initMetadataForObject(ElementDetailsComponent, 'ElementDetailsComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$ElementDetailsComponentKt, 'ComposableSingletons$ElementDetailsComponentKt');
  initMetadataForObject(ElementDetailsFragment, 'ElementDetailsFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$ElementDetailsFragmentKt, 'ComposableSingletons$ElementDetailsFragmentKt');
  initMetadataForObject(MainActivity, 'MainActivity', VOID, Activity);
  initMetadataForLambda(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$MainActivityKt, 'ComposableSingletons$MainActivityKt');
  initMetadataForObject(BboysComponent, 'BboysComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$BboysComponentKt, 'ComposableSingletons$BboysComponentKt');
  initMetadataForObject(HomeComponent, 'HomeComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$HomeComponentKt, 'ComposableSingletons$HomeComponentKt');
  initMetadataForObject(RatingsComponent, 'RatingsComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$RatingsComponentKt, 'ComposableSingletons$RatingsComponentKt');
  initMetadataForObject(BboysFragment, 'BboysFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$BboysFragmentKt, 'ComposableSingletons$BboysFragmentKt');
  initMetadataForLambda(BboysScreen$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(HomeFragment, 'HomeFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$HomeFragmentKt, 'ComposableSingletons$HomeFragmentKt');
  initMetadataForLambda(PostSection$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(RatingsFragment, 'RatingsFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$RatingsFragmentKt, 'ComposableSingletons$RatingsFragmentKt');
  initMetadataForObject(ProfileActivity, 'ProfileActivity', VOID, Activity);
  initMetadataForObject(ComposableSingletons$ProfileActivityKt, 'ComposableSingletons$ProfileActivityKt');
  initMetadataForObject(ProfileComponent, 'ProfileComponent', VOID, Component);
  initMetadataForObject(ComposableSingletons$ProfileComponentKt, 'ComposableSingletons$ProfileComponentKt');
  initMetadataForObject(AvatarCropperFragment, 'AvatarCropperFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$AvatarCropperFragmentKt, 'ComposableSingletons$AvatarCropperFragmentKt');
  initMetadataForObject(ProfileFragment, 'ProfileFragment', VOID, Fragment);
  initMetadataForObject(ComposableSingletons$ProfileFragmentKt, 'ComposableSingletons$ProfileFragmentKt');
  initMetadataForObject(ComposableSingletons$ProfileActionKt, 'ComposableSingletons$ProfileActionKt');
  initMetadataForLambda(ProfileAction$lambda$slambda, CoroutineImpl, VOID, [1]);
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
  initMetadataForObject(Typography, 'Typography');
  initMetadataForClass(Text3XL, 'Text3XL', Text3XL);
  initMetadataForClass(Text2XL, 'Text2XL', Text2XL);
  initMetadataForClass(TextLG, 'TextLG', TextLG);
  initMetadataForClass(TextSM, 'TextSM', TextSM);
  initMetadataForClass(TextXS, 'TextXS', TextXS);
  initMetadataForClass(FontWeights, 'FontWeights', VOID, Enum);
  initMetadataForLambda(AnimatedTabWithHorizontalPager$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AnimatedTabWithHorizontalPager$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(CustomProgressBar$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RatingProgreesBar$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(StringUtils, 'StringUtils', StringUtils);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForLambda(ScreenSizeHandler$getScreenSize$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForObject(ScreenSizeHandler, 'ScreenSizeHandler');
  initMetadataForLambda(VideoPlayer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_1);
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function CommonMainDrawable0$airflare$delegate$lambda() {
    return init_airflare();
  }
  function CommonMainDrawable0$app_logo$delegate$lambda() {
    return init_app_logo();
  }
  function CommonMainDrawable0$arrow_down$delegate$lambda() {
    return init_arrow_down();
  }
  function CommonMainDrawable0$arrow_left_img$delegate$lambda() {
    return init_arrow_left_img();
  }
  function CommonMainDrawable0$baby$delegate$lambda() {
    return init_baby();
  }
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
  function CommonMainDrawable0$camera_img$delegate$lambda() {
    return init_camera_img();
  }
  function CommonMainDrawable0$click$delegate$lambda() {
    return init_click();
  }
  function CommonMainDrawable0$compose_multiplatform$delegate$lambda() {
    return init_compose_multiplatform();
  }
  function CommonMainDrawable0$heart$delegate$lambda() {
    return init_heart();
  }
  function CommonMainDrawable0$ic_launcher_background$delegate$lambda() {
    return init_ic_launcher_background();
  }
  function CommonMainDrawable0$ic_launcher_foreground$delegate$lambda() {
    return init_ic_launcher_foreground();
  }
  function CommonMainDrawable0$logout$delegate$lambda() {
    return init_logout();
  }
  function CommonMainDrawable0$main$delegate$lambda() {
    return init_main();
  }
  function CommonMainDrawable0$noposition_linear$delegate$lambda() {
    return init_noposition_linear();
  }
  function CommonMainDrawable0$norotation_linear$delegate$lambda() {
    return init_norotation_linear();
  }
  function CommonMainDrawable0$noscale_linear$delegate$lambda() {
    return init_noscale_linear();
  }
  function CommonMainDrawable0$people$delegate$lambda() {
    return init_people();
  }
  function CommonMainDrawable0$percent10$delegate$lambda() {
    return init_percent10();
  }
  function CommonMainDrawable0$percent100$delegate$lambda() {
    return init_percent100();
  }
  function CommonMainDrawable0$percent20$delegate$lambda() {
    return init_percent20();
  }
  function CommonMainDrawable0$percent30$delegate$lambda() {
    return init_percent30();
  }
  function CommonMainDrawable0$percent40$delegate$lambda() {
    return init_percent40();
  }
  function CommonMainDrawable0$percent50$delegate$lambda() {
    return init_percent50();
  }
  function CommonMainDrawable0$percent60$delegate$lambda() {
    return init_percent60();
  }
  function CommonMainDrawable0$percent70$delegate$lambda() {
    return init_percent70();
  }
  function CommonMainDrawable0$percent80$delegate$lambda() {
    return init_percent80();
  }
  function CommonMainDrawable0$percent90$delegate$lambda() {
    return init_percent90();
  }
  function CommonMainDrawable0$position_linear$delegate$lambda() {
    return init_position_linear();
  }
  function CommonMainDrawable0$pushups$delegate$lambda() {
    return init_pushups();
  }
  function CommonMainDrawable0$rating$delegate$lambda() {
    return init_rating();
  }
  function CommonMainDrawable0$rotation_linear$delegate$lambda() {
    return init_rotation_linear();
  }
  function CommonMainDrawable0$scale_linear$delegate$lambda() {
    return init_scale_linear();
  }
  function CommonMainDrawable0$star_default$delegate$lambda() {
    return init_star_default();
  }
  function CommonMainDrawable0$star_top_1$delegate$lambda() {
    return init_star_top_1();
  }
  function CommonMainDrawable0$star_top_2$delegate$lambda() {
    return init_star_top_2();
  }
  function CommonMainDrawable0$star_top_3$delegate$lambda() {
    return init_star_top_3();
  }
  function CommonMainDrawable0$twin$delegate$lambda() {
    return init_twin();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.zpd_1 = lazy(CommonMainDrawable0$airflare$delegate$lambda);
    var tmp_0 = this;
    tmp_0.ape_1 = lazy(CommonMainDrawable0$app_logo$delegate$lambda);
    var tmp_1 = this;
    tmp_1.bpe_1 = lazy(CommonMainDrawable0$arrow_down$delegate$lambda);
    var tmp_2 = this;
    tmp_2.cpe_1 = lazy(CommonMainDrawable0$arrow_left_img$delegate$lambda);
    var tmp_3 = this;
    tmp_3.dpe_1 = lazy(CommonMainDrawable0$baby$delegate$lambda);
    var tmp_4 = this;
    tmp_4.epe_1 = lazy(CommonMainDrawable0$break_splash1$delegate$lambda);
    var tmp_5 = this;
    tmp_5.fpe_1 = lazy(CommonMainDrawable0$break_splash2$delegate$lambda);
    var tmp_6 = this;
    tmp_6.gpe_1 = lazy(CommonMainDrawable0$break_splash3$delegate$lambda);
    var tmp_7 = this;
    tmp_7.hpe_1 = lazy(CommonMainDrawable0$break_splash4$delegate$lambda);
    var tmp_8 = this;
    tmp_8.ipe_1 = lazy(CommonMainDrawable0$break_splash5$delegate$lambda);
    var tmp_9 = this;
    tmp_9.jpe_1 = lazy(CommonMainDrawable0$camera_img$delegate$lambda);
    var tmp_10 = this;
    tmp_10.kpe_1 = lazy(CommonMainDrawable0$click$delegate$lambda);
    var tmp_11 = this;
    tmp_11.lpe_1 = lazy(CommonMainDrawable0$compose_multiplatform$delegate$lambda);
    var tmp_12 = this;
    tmp_12.mpe_1 = lazy(CommonMainDrawable0$heart$delegate$lambda);
    var tmp_13 = this;
    tmp_13.npe_1 = lazy(CommonMainDrawable0$ic_launcher_background$delegate$lambda);
    var tmp_14 = this;
    tmp_14.ope_1 = lazy(CommonMainDrawable0$ic_launcher_foreground$delegate$lambda);
    var tmp_15 = this;
    tmp_15.ppe_1 = lazy(CommonMainDrawable0$logout$delegate$lambda);
    var tmp_16 = this;
    tmp_16.qpe_1 = lazy(CommonMainDrawable0$main$delegate$lambda);
    var tmp_17 = this;
    tmp_17.rpe_1 = lazy(CommonMainDrawable0$noposition_linear$delegate$lambda);
    var tmp_18 = this;
    tmp_18.spe_1 = lazy(CommonMainDrawable0$norotation_linear$delegate$lambda);
    var tmp_19 = this;
    tmp_19.tpe_1 = lazy(CommonMainDrawable0$noscale_linear$delegate$lambda);
    var tmp_20 = this;
    tmp_20.upe_1 = lazy(CommonMainDrawable0$people$delegate$lambda);
    var tmp_21 = this;
    tmp_21.vpe_1 = lazy(CommonMainDrawable0$percent10$delegate$lambda);
    var tmp_22 = this;
    tmp_22.wpe_1 = lazy(CommonMainDrawable0$percent100$delegate$lambda);
    var tmp_23 = this;
    tmp_23.xpe_1 = lazy(CommonMainDrawable0$percent20$delegate$lambda);
    var tmp_24 = this;
    tmp_24.ype_1 = lazy(CommonMainDrawable0$percent30$delegate$lambda);
    var tmp_25 = this;
    tmp_25.zpe_1 = lazy(CommonMainDrawable0$percent40$delegate$lambda);
    var tmp_26 = this;
    tmp_26.apf_1 = lazy(CommonMainDrawable0$percent50$delegate$lambda);
    var tmp_27 = this;
    tmp_27.bpf_1 = lazy(CommonMainDrawable0$percent60$delegate$lambda);
    var tmp_28 = this;
    tmp_28.cpf_1 = lazy(CommonMainDrawable0$percent70$delegate$lambda);
    var tmp_29 = this;
    tmp_29.dpf_1 = lazy(CommonMainDrawable0$percent80$delegate$lambda);
    var tmp_30 = this;
    tmp_30.epf_1 = lazy(CommonMainDrawable0$percent90$delegate$lambda);
    var tmp_31 = this;
    tmp_31.fpf_1 = lazy(CommonMainDrawable0$position_linear$delegate$lambda);
    var tmp_32 = this;
    tmp_32.gpf_1 = lazy(CommonMainDrawable0$pushups$delegate$lambda);
    var tmp_33 = this;
    tmp_33.hpf_1 = lazy(CommonMainDrawable0$rating$delegate$lambda);
    var tmp_34 = this;
    tmp_34.ipf_1 = lazy(CommonMainDrawable0$rotation_linear$delegate$lambda);
    var tmp_35 = this;
    tmp_35.jpf_1 = lazy(CommonMainDrawable0$scale_linear$delegate$lambda);
    var tmp_36 = this;
    tmp_36.kpf_1 = lazy(CommonMainDrawable0$star_default$delegate$lambda);
    var tmp_37 = this;
    tmp_37.lpf_1 = lazy(CommonMainDrawable0$star_top_1$delegate$lambda);
    var tmp_38 = this;
    tmp_38.mpf_1 = lazy(CommonMainDrawable0$star_top_2$delegate$lambda);
    var tmp_39 = this;
    tmp_39.npf_1 = lazy(CommonMainDrawable0$star_top_3$delegate$lambda);
    var tmp_40 = this;
    tmp_40.opf_1 = lazy(CommonMainDrawable0$twin$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).ppf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.zpd_1;
    airflare$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).qpf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ape_1;
    app_logo$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).rpf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.bpe_1;
    arrow_down$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).spf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.cpe_1;
    arrow_left_img$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).tpf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.dpe_1;
    baby$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).upf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.jpe_1;
    camera_img$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).ppd = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lpe_1;
    compose_multiplatform$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).vpf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mpe_1;
    heart$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).wpf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ppe_1;
    logout$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).xpf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.qpe_1;
    main$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).ypf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.rpe_1;
    noposition_linear$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).zpf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.spe_1;
    norotation_linear$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).apg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.tpe_1;
    noscale_linear$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).bpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.upe_1;
    people$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).cpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.vpe_1;
    percent10$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).dpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.wpe_1;
    percent100$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).epg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.xpe_1;
    percent20$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).fpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ype_1;
    percent30$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).gpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.zpe_1;
    percent40$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).hpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.apf_1;
    percent50$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).ipg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.bpf_1;
    percent60$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).jpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.cpf_1;
    percent70$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).kpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.dpf_1;
    percent80$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).lpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.epf_1;
    percent90$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).mpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fpf_1;
    position_linear$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).npg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.gpf_1;
    pushups$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).opg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.hpf_1;
    rating$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).ppg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ipf_1;
    rotation_linear$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).qpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.jpf_1;
    scale_linear$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).rpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.kpf_1;
    star_default$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).spg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lpf_1;
    star_top_1$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).tpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mpf_1;
    star_top_2$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).upg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.npf_1;
    star_top_3$factory();
    return this_0.c1();
  };
  protoOf(CommonMainDrawable0).vpg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.opf_1;
    twin$factory();
    return this_0.c1();
  };
  var CommonMainDrawable0_instance;
  function CommonMainDrawable0_getInstance() {
    if (CommonMainDrawable0_instance == null)
      new CommonMainDrawable0();
    return CommonMainDrawable0_instance;
  }
  function get_airflare(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().ppf();
  }
  function init_airflare() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:airflare', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/airflare.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_app_logo(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().qpf();
  }
  function init_app_logo() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:app_logo', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/app_logo.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_arrow_down(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().rpf();
  }
  function init_arrow_down() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:arrow_down', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/arrow_down.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_arrow_left_img(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().spf();
  }
  function init_arrow_left_img() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:arrow_left_img', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/arrow_left_img.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_baby(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().tpf();
  }
  function init_baby() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:baby', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/baby.png', new Long(-1, -1), new Long(-1, -1))));
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
  function get_camera_img(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().upf();
  }
  function init_camera_img() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:camera_img', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/camera_img.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_click() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:click', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/click.gif', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_compose_multiplatform(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().ppd();
  }
  function init_compose_multiplatform() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_heart(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().vpf();
  }
  function init_heart() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:heart', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/heart.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_ic_launcher_background() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_launcher_background', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/ic_launcher_background.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_ic_launcher_foreground() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_launcher_foreground', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/ic_launcher_foreground.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_logout(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().wpf();
  }
  function init_logout() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:logout', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/logout.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_main(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().xpf();
  }
  function init_main() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:main', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/main.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_noposition_linear(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().ypf();
  }
  function init_noposition_linear() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:noposition_linear', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/noposition_linear.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_norotation_linear(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().zpf();
  }
  function init_norotation_linear() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:norotation_linear', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/norotation_linear.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_noscale_linear(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().apg();
  }
  function init_noscale_linear() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:noscale_linear', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/noscale_linear.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_people(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().bpg();
  }
  function init_people() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:people', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/people.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent10(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().cpg();
  }
  function init_percent10() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent10', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent10.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent100(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().dpg();
  }
  function init_percent100() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent100', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent100.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent20(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().epg();
  }
  function init_percent20() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent20', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent20.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent30(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().fpg();
  }
  function init_percent30() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent30', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent30.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent40(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().gpg();
  }
  function init_percent40() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent40', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent40.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent50(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().hpg();
  }
  function init_percent50() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent50', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent50.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent60(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().ipg();
  }
  function init_percent60() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent60', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent60.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent70(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().jpg();
  }
  function init_percent70() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent70', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent70.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent80(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().kpg();
  }
  function init_percent80() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent80', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent80.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_percent90(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().lpg();
  }
  function init_percent90() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:percent90', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/percent90.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_position_linear(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().mpg();
  }
  function init_position_linear() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:position_linear', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/position_linear.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_pushups(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().npg();
  }
  function init_pushups() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:pushups', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/pushups.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_rating(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().opg();
  }
  function init_rating() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:rating', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/rating.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_rotation_linear(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().ppg();
  }
  function init_rotation_linear() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:rotation_linear', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/rotation_linear.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_scale_linear(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().qpg();
  }
  function init_scale_linear() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:scale_linear', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/scale_linear.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_star_default(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().rpg();
  }
  function init_star_default() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:star_default', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/star_default.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_star_top_1(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().spg();
  }
  function init_star_top_1() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:star_top_1', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/star_top_1.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_star_top_2(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().tpg();
  }
  function init_star_top_2() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:star_top_2', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/star_top_2.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_star_top_3(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().upg();
  }
  function init_star_top_3() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:star_top_3', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/star_top_3.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_twin(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().vpg();
  }
  function init_twin() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:twin', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/drawable/twin.png', new Long(-1, -1), new Long(-1, -1))));
  }
  function airflare$factory() {
    return getPropertyCallableRef('airflare', 1, KProperty1, function (receiver) {
      return receiver.ppf();
    }, null);
  }
  function app_logo$factory() {
    return getPropertyCallableRef('app_logo', 1, KProperty1, function (receiver) {
      return receiver.qpf();
    }, null);
  }
  function arrow_down$factory() {
    return getPropertyCallableRef('arrow_down', 1, KProperty1, function (receiver) {
      return receiver.rpf();
    }, null);
  }
  function arrow_left_img$factory() {
    return getPropertyCallableRef('arrow_left_img', 1, KProperty1, function (receiver) {
      return receiver.spf();
    }, null);
  }
  function baby$factory() {
    return getPropertyCallableRef('baby', 1, KProperty1, function (receiver) {
      return receiver.tpf();
    }, null);
  }
  function camera_img$factory() {
    return getPropertyCallableRef('camera_img', 1, KProperty1, function (receiver) {
      return receiver.upf();
    }, null);
  }
  function compose_multiplatform$factory() {
    return getPropertyCallableRef('compose_multiplatform', 1, KProperty1, function (receiver) {
      return receiver.ppd();
    }, null);
  }
  function heart$factory() {
    return getPropertyCallableRef('heart', 1, KProperty1, function (receiver) {
      return receiver.vpf();
    }, null);
  }
  function logout$factory() {
    return getPropertyCallableRef('logout', 1, KProperty1, function (receiver) {
      return receiver.wpf();
    }, null);
  }
  function main$factory() {
    return getPropertyCallableRef('main', 1, KProperty1, function (receiver) {
      return receiver.xpf();
    }, null);
  }
  function noposition_linear$factory() {
    return getPropertyCallableRef('noposition_linear', 1, KProperty1, function (receiver) {
      return receiver.ypf();
    }, null);
  }
  function norotation_linear$factory() {
    return getPropertyCallableRef('norotation_linear', 1, KProperty1, function (receiver) {
      return receiver.zpf();
    }, null);
  }
  function noscale_linear$factory() {
    return getPropertyCallableRef('noscale_linear', 1, KProperty1, function (receiver) {
      return receiver.apg();
    }, null);
  }
  function people$factory() {
    return getPropertyCallableRef('people', 1, KProperty1, function (receiver) {
      return receiver.bpg();
    }, null);
  }
  function percent10$factory() {
    return getPropertyCallableRef('percent10', 1, KProperty1, function (receiver) {
      return receiver.cpg();
    }, null);
  }
  function percent100$factory() {
    return getPropertyCallableRef('percent100', 1, KProperty1, function (receiver) {
      return receiver.dpg();
    }, null);
  }
  function percent20$factory() {
    return getPropertyCallableRef('percent20', 1, KProperty1, function (receiver) {
      return receiver.epg();
    }, null);
  }
  function percent30$factory() {
    return getPropertyCallableRef('percent30', 1, KProperty1, function (receiver) {
      return receiver.fpg();
    }, null);
  }
  function percent40$factory() {
    return getPropertyCallableRef('percent40', 1, KProperty1, function (receiver) {
      return receiver.gpg();
    }, null);
  }
  function percent50$factory() {
    return getPropertyCallableRef('percent50', 1, KProperty1, function (receiver) {
      return receiver.hpg();
    }, null);
  }
  function percent60$factory() {
    return getPropertyCallableRef('percent60', 1, KProperty1, function (receiver) {
      return receiver.ipg();
    }, null);
  }
  function percent70$factory() {
    return getPropertyCallableRef('percent70', 1, KProperty1, function (receiver) {
      return receiver.jpg();
    }, null);
  }
  function percent80$factory() {
    return getPropertyCallableRef('percent80', 1, KProperty1, function (receiver) {
      return receiver.kpg();
    }, null);
  }
  function percent90$factory() {
    return getPropertyCallableRef('percent90', 1, KProperty1, function (receiver) {
      return receiver.lpg();
    }, null);
  }
  function position_linear$factory() {
    return getPropertyCallableRef('position_linear', 1, KProperty1, function (receiver) {
      return receiver.mpg();
    }, null);
  }
  function pushups$factory() {
    return getPropertyCallableRef('pushups', 1, KProperty1, function (receiver) {
      return receiver.npg();
    }, null);
  }
  function rating$factory() {
    return getPropertyCallableRef('rating', 1, KProperty1, function (receiver) {
      return receiver.opg();
    }, null);
  }
  function rotation_linear$factory() {
    return getPropertyCallableRef('rotation_linear', 1, KProperty1, function (receiver) {
      return receiver.ppg();
    }, null);
  }
  function scale_linear$factory() {
    return getPropertyCallableRef('scale_linear', 1, KProperty1, function (receiver) {
      return receiver.qpg();
    }, null);
  }
  function star_default$factory() {
    return getPropertyCallableRef('star_default', 1, KProperty1, function (receiver) {
      return receiver.rpg();
    }, null);
  }
  function star_top_1$factory() {
    return getPropertyCallableRef('star_top_1', 1, KProperty1, function (receiver) {
      return receiver.spg();
    }, null);
  }
  function star_top_2$factory() {
    return getPropertyCallableRef('star_top_2', 1, KProperty1, function (receiver) {
      return receiver.tpg();
    }, null);
  }
  function star_top_3$factory() {
    return getPropertyCallableRef('star_top_3', 1, KProperty1, function (receiver) {
      return receiver.upg();
    }, null);
  }
  function twin$factory() {
    return getPropertyCallableRef('twin', 1, KProperty1, function (receiver) {
      return receiver.vpg();
    }, null);
  }
  function CommonMainString0$app_name$delegate$lambda() {
    return init_app_name();
  }
  function CommonMainString0$bboys_title$delegate$lambda() {
    return init_bboys_title();
  }
  function CommonMainString0$freeze_title$delegate$lambda() {
    return init_freeze_title();
  }
  function CommonMainString0$hall_of_fame_title$delegate$lambda() {
    return init_hall_of_fame_title();
  }
  function CommonMainString0$home_title$delegate$lambda() {
    return init_home_title();
  }
  function CommonMainString0$ofp_title$delegate$lambda() {
    return init_ofp_title();
  }
  function CommonMainString0$power_move_title$delegate$lambda() {
    return init_power_move_title();
  }
  function CommonMainString0$profile_title$delegate$lambda() {
    return init_profile_title();
  }
  function CommonMainString0$ratings_title$delegate$lambda() {
    return init_ratings_title();
  }
  function CommonMainString0$stretch_title$delegate$lambda() {
    return init_stretch_title();
  }
  function CommonMainString0() {
    CommonMainString0_instance = this;
    var tmp = this;
    tmp.wpg_1 = lazy(CommonMainString0$app_name$delegate$lambda);
    var tmp_0 = this;
    tmp_0.xpg_1 = lazy(CommonMainString0$bboys_title$delegate$lambda);
    var tmp_1 = this;
    tmp_1.ypg_1 = lazy(CommonMainString0$freeze_title$delegate$lambda);
    var tmp_2 = this;
    tmp_2.zpg_1 = lazy(CommonMainString0$hall_of_fame_title$delegate$lambda);
    var tmp_3 = this;
    tmp_3.aph_1 = lazy(CommonMainString0$home_title$delegate$lambda);
    var tmp_4 = this;
    tmp_4.bph_1 = lazy(CommonMainString0$ofp_title$delegate$lambda);
    var tmp_5 = this;
    tmp_5.cph_1 = lazy(CommonMainString0$power_move_title$delegate$lambda);
    var tmp_6 = this;
    tmp_6.dph_1 = lazy(CommonMainString0$profile_title$delegate$lambda);
    var tmp_7 = this;
    tmp_7.eph_1 = lazy(CommonMainString0$ratings_title$delegate$lambda);
    var tmp_8 = this;
    tmp_8.fph_1 = lazy(CommonMainString0$stretch_title$delegate$lambda);
  }
  protoOf(CommonMainString0).gph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.wpg_1;
    app_name$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).hph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.xpg_1;
    bboys_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).iph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ypg_1;
    freeze_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).jph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.zpg_1;
    hall_of_fame_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).kph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.aph_1;
    home_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).lph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.bph_1;
    ofp_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).mph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.cph_1;
    power_move_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).nph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.dph_1;
    profile_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).oph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.eph_1;
    ratings_title$factory();
    return this_0.c1();
  };
  protoOf(CommonMainString0).pph = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fph_1;
    stretch_title$factory();
    return this_0.c1();
  };
  var CommonMainString0_instance;
  function CommonMainString0_getInstance() {
    if (CommonMainString0_instance == null)
      new CommonMainString0();
    return CommonMainString0_instance;
  }
  function get_app_name(_this__u8e3s4) {
    return CommonMainString0_getInstance().gph();
  }
  function init_app_name() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:app_name', 'app_name', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(10, 0), new Long(32, 0))));
  }
  function get_bboys_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().hph();
  }
  function init_bboys_title() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:bboys_title', 'bboys_title', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(43, 0), new Long(35, 0))));
  }
  function get_freeze_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().iph();
  }
  function init_freeze_title() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:freeze_title', 'freeze_title', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(79, 0), new Long(28, 0))));
  }
  function get_hall_of_fame_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().jph();
  }
  function init_hall_of_fame_title() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(10, 0), new Long(50, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:hall_of_fame_title', 'hall_of_fame_title', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(108, 0), new Long(42, 0))]));
  }
  function get_home_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().kph();
  }
  function init_home_title() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(61, 0), new Long(38, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:home_title', 'home_title', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(151, 0), new Long(26, 0))]));
  }
  function get_ofp_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().lph();
  }
  function init_ofp_title() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(100, 0), new Long(41, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:ofp_title', 'ofp_title', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(178, 0), new Long(29, 0))]));
  }
  function get_power_move_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().mph();
  }
  function init_power_move_title() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:power_move_title', 'power_move_title', setOf(new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(208, 0), new Long(32, 0))));
  }
  function get_profile_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().nph();
  }
  function init_profile_title() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(142, 0), new Long(41, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:profile_title', 'profile_title', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(241, 0), new Long(33, 0))]));
  }
  function get_ratings_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().oph();
  }
  function init_ratings_title() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(184, 0), new Long(45, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:ratings_title', 'ratings_title', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(275, 0), new Long(33, 0))]));
  }
  function get_stretch_title(_this__u8e3s4) {
    return CommonMainString0_getInstance().pph();
  }
  function init_stretch_title() {
    var tmp = new ResourceItem(setOf(new LanguageQualifier('ru')), 'composeResources/breakingkmpapp.composeapp.generated.resources/values-ru/strings.commonMain.cvr', new Long(230, 0), new Long(45, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:stretch_title', 'stretch_title', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/breakingkmpapp.composeapp.generated.resources/values/strings.commonMain.cvr', new Long(309, 0), new Long(33, 0))]));
  }
  function app_name$factory() {
    return getPropertyCallableRef('app_name', 1, KProperty1, function (receiver) {
      return receiver.gph();
    }, null);
  }
  function bboys_title$factory() {
    return getPropertyCallableRef('bboys_title', 1, KProperty1, function (receiver) {
      return receiver.hph();
    }, null);
  }
  function freeze_title$factory() {
    return getPropertyCallableRef('freeze_title', 1, KProperty1, function (receiver) {
      return receiver.iph();
    }, null);
  }
  function hall_of_fame_title$factory() {
    return getPropertyCallableRef('hall_of_fame_title', 1, KProperty1, function (receiver) {
      return receiver.jph();
    }, null);
  }
  function home_title$factory() {
    return getPropertyCallableRef('home_title', 1, KProperty1, function (receiver) {
      return receiver.kph();
    }, null);
  }
  function ofp_title$factory() {
    return getPropertyCallableRef('ofp_title', 1, KProperty1, function (receiver) {
      return receiver.lph();
    }, null);
  }
  function power_move_title$factory() {
    return getPropertyCallableRef('power_move_title', 1, KProperty1, function (receiver) {
      return receiver.mph();
    }, null);
  }
  function profile_title$factory() {
    return getPropertyCallableRef('profile_title', 1, KProperty1, function (receiver) {
      return receiver.nph();
    }, null);
  }
  function ratings_title$factory() {
    return getPropertyCallableRef('ratings_title', 1, KProperty1, function (receiver) {
      return receiver.oph();
    }, null);
  }
  function stretch_title$factory() {
    return getPropertyCallableRef('stretch_title', 1, KProperty1, function (receiver) {
      return receiver.pph();
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
    $composer_0 = $composer_0.v33(-1296636172);
    if (!($changed === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296636172, $changed, -1, 'org.korchagin.kmp.App (App.kt:27)');
      }
      var navHostController = rememberNavController([], $composer_0, 0);
      $composer_0.a31(-622325098);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.App.<anonymous>' call
        var value = new GlobalNavigator(navHostController);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var globalNavigator = tmp0_group;
      var theme = rememberTheme(true, $composer_0, 6, 0);
      var toolbarTheme = new ToolbarTheme();
      var navViewStyle = new NavViewStyle();
      var colors = new AppColorsTheme();
      if (isDark(theme, $composer_0, 0)) {
        $composer_0.a31(-2111973531);
        colors.yph();
        toolbarTheme.zph($composer_0, 0);
        navViewStyle.zph($composer_0, 0);
        Typography_getInstance().xph(true, $composer_0, 6);
        $composer_0.c31();
      } else {
        $composer_0.a31(-2111850430);
        colors.qph();
        toolbarTheme.rph($composer_0, 0);
        navViewStyle.rph($composer_0, 0);
        Typography_getInstance().xph(false, $composer_0, 6);
        $composer_0.c31();
      }
      var tmp_1 = isDark(theme, $composer_0, 0) ? darkColorScheme().rmh(Color(new Long(-12467004, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color(new Long(-16777216, 0))) : lightColorScheme().rmh(Color(new Long(-12467004, 0)), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color(new Long(-526345, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.App.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1477258040, true, App$lambda(globalNavigator), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.w32();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.App.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.h33(value_0);
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
      $composer_0.c2u();
    }
    var tmp1_safe_receiver = $composer_0.w33();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.n38(App$lambda_0($changed));
    }
  }
  function App$lambda($globalNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-1477258040, $changed, -1, 'org.korchagin.kmp.App.<anonymous> (App.kt:60)');
        }
        var activityList = listOf([MainActivity_getInstance(), SplashActivity_getInstance(), ProfileActivity_getInstance(), ElementDetailsActivity_getInstance(), BboysDetailsActivity_getInstance(), AuthActivity_getInstance()]);
        $globalNavigator.nor(null, activityList, SplashActivity_getInstance(), $composer_0, 432, 1);
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
  var org_korchagin_kmp_activity_auth_AuthActivity$stable;
  function AuthActivity() {
    AuthActivity_instance = this;
    Activity.call(this, 'auth_activity', listOf_0(AuthComponent_getInstance()), ComposableSingletons$AuthActivityKt_getInstance().api_1);
  }
  var AuthActivity_instance;
  function AuthActivity_getInstance() {
    if (AuthActivity_instance == null)
      new AuthActivity();
    return AuthActivity_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$AuthActivityKt$lambda_1$lambda_ogz0id(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1725122506, $changed, -1, 'org.korchagin.kmp.activity.auth.ComposableSingletons$AuthActivityKt.lambda-1.<anonymous> (AuthActivity.kt:13)');
    }
    ActivityScaffold(components, null, null, null, null, null, false, false, $composer_0, 14 & $changed, 254);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AuthActivityKt() {
    ComposableSingletons$AuthActivityKt_instance = this;
    var tmp = this;
    tmp.api_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1725122506, false, ComposableSingletons$AuthActivityKt$lambda_1$lambda_ogz0id));
  }
  var ComposableSingletons$AuthActivityKt_instance;
  function ComposableSingletons$AuthActivityKt_getInstance() {
    if (ComposableSingletons$AuthActivityKt_instance == null)
      new ComposableSingletons$AuthActivityKt();
    return ComposableSingletons$AuthActivityKt_instance;
  }
  var org_korchagin_kmp_activity_auth_component_AuthComponent$stable;
  function AuthComponent() {
    AuthComponent_instance = this;
    var tmp0_label = get_app_name(string_instance);
    var tmp1_fragments = listOf([AuthFragment_getInstance(), RegistrationFragment_getInstance(), PasswordRecoveryFragment_getInstance()]);
    Component.call(this, 'auth_component', ComposableSingletons$AuthComponentKt_getInstance().bpi_1, tmp0_label, tmp1_fragments);
  }
  var AuthComponent_instance;
  function AuthComponent_getInstance() {
    if (AuthComponent_instance == null)
      new AuthComponent();
    return AuthComponent_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$AuthComponentKt$lambda_1$lambda_h13j63(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(2007882620, $dirty, -1, 'org.korchagin.kmp.activity.auth.component.ComposableSingletons$AuthComponentKt.lambda-1.<anonymous> (AuthComponent.kt:17)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AuthComponentKt() {
    ComposableSingletons$AuthComponentKt_instance = this;
    var tmp = this;
    tmp.bpi_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(2007882620, false, ComposableSingletons$AuthComponentKt$lambda_1$lambda_h13j63));
  }
  var ComposableSingletons$AuthComponentKt_instance;
  function ComposableSingletons$AuthComponentKt_getInstance() {
    if (ComposableSingletons$AuthComponentKt_instance == null)
      new ComposableSingletons$AuthComponentKt();
    return ComposableSingletons$AuthComponentKt_instance;
  }
  var org_korchagin_kmp_activity_auth_component_authFragment_AuthFragment$stable;
  function AuthFragment() {
    AuthFragment_instance = this;
    Fragment.call(this, 'auth_fragment', VOID, ComposableSingletons$AuthFragmentKt_getInstance().cpi_1);
  }
  var AuthFragment_instance;
  function AuthFragment_getInstance() {
    if (AuthFragment_instance == null)
      new AuthFragment();
    return AuthFragment_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$AuthFragmentKt$lambda_1$lambda_fhqrtg(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1254514893, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.ComposableSingletons$AuthFragmentKt.lambda-1.<anonymous> (AuthFragment.kt:9)');
    }
    AuthScreen(componentNavigator, fragmentNavigator, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AuthFragmentKt() {
    ComposableSingletons$AuthFragmentKt_instance = this;
    var tmp = this;
    tmp.cpi_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1254514893, false, ComposableSingletons$AuthFragmentKt$lambda_1$lambda_fhqrtg));
  }
  var ComposableSingletons$AuthFragmentKt_instance;
  function ComposableSingletons$AuthFragmentKt_getInstance() {
    if (ComposableSingletons$AuthFragmentKt_instance == null)
      new ComposableSingletons$AuthFragmentKt();
    return ComposableSingletons$AuthFragmentKt_instance;
  }
  function AuthScreen(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-943398481);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(fragmentNavigator) ? 32 : 16);
    if (!(($dirty & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-943398481, $dirty, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen (AuthScreen.kt:56)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(AuthViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var authViewModel = tmp0;
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier_0 = null;
      var viewModelStoreOwner_0 = null;
      var key_0 = null;
      var extras_0 = null;
      var scope_0 = null;
      var parameters_0 = null;
      var $composer_2 = $composer_0;
      $composer_2.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier_0 = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.checkNotNull' call
          var value_0 = LocalViewModelStoreOwner_getInstance().nb1($composer_2, 0);
          // Inline function 'kotlin.contracts.contract' call
          if (value_0 == null) {
            // Inline function 'org.koin.compose.viewmodel.koinViewModel.<anonymous>' call
            var message_0 = 'No ViewModelStoreOwner was provided via LocalViewModelStoreOwner';
            throw IllegalStateException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$4 = value_0;
            break $l$block_0;
          }
        }
        viewModelStoreOwner_0 = tmp$ret$4;
      }
      if (!((63 & 4) === 0))
        key_0 = null;
      if (!((63 & 8) === 0))
        extras_0 = defaultExtras(viewModelStoreOwner_0, $composer_2, 8);
      if (!((63 & 16) === 0))
        scope_0 = currentKoinScope($composer_2, 0);
      if (!((63 & 32) === 0))
        parameters_0 = null;
      var tmp0_0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner_0.p4g(), key_0, extras_0, qualifier_0, scope_0, parameters_0);
      $composer_2.z30();
      var mainViewModel = tmp0_0;
      $composer_0.a31(78862984);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>' call
        var value_1 = AuthScreen$lambda_3;
        this_0.h33(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var email$delegate = rememberSaveable([], null, null, tmp0_group, $composer_0, 3072, 6);
      $composer_0.a31(78864904);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>' call
        var value_2 = AuthScreen$lambda_4;
        this_1.h33(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var password$delegate = rememberSaveable([], null, null, tmp1_group, $composer_0, 3072, 6);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = AuthScreen$lambda_5;
      }
      var composer = $composer_3;
      sourceInformationMarkerStart($composer_3, -954207516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.w32();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_3 = createCompositionCoroutineScope(getContext(), composer);
        $composer_3.h33(value_3);
        tmp_3 = value_3;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_3);
      var scope_1 = tmp1_group_0;
      $composer_0.a31(78867858);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_2.w32();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>' call
        var value_4 = new SnackbarHostState();
        this_2.h33(value_4);
        tmp_5 = value_4;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.c31();
      var snackbarHostState = tmp2_group;
      var registrationHyperlinkText = '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F';
      var forgetPasswordHyperlinkText = '\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?';
      // Inline function 'androidx.compose.ui.text.buildAnnotatedString' call
      // Inline function 'kotlin.apply' call
      var this_3 = new Builder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>' call
      this_3.v6v('\u0415\u0449\u0451 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?');
      this_3.v6v(' ');
      var start = this_3.a();
      var end = this_3.a() + registrationHyperlinkText.length | 0;
      this_3.c6w('terms', '', start, end);
      // Inline function 'androidx.compose.ui.text.withStyle' call
      var style = SpanStyle_init_$Create$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_0().x74_1);
      var index = this_3.d6w(style);
      var tmp_7;
      try {
        this_3.v6v(registrationHyperlinkText);
        tmp_7 = Unit_instance;
      }finally {
        this_3.f6w(index);
      }
      var registrationString = this_3.g6w();
      // Inline function 'androidx.compose.ui.text.buildAnnotatedString' call
      // Inline function 'kotlin.apply' call
      var this_4 = new Builder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>' call
      // Inline function 'androidx.compose.ui.text.withStyle' call
      var style_0 = SpanStyle_init_$Create$();
      var index_0 = this_4.d6w(style_0);
      var tmp_8;
      try {
        this_4.v6v(forgetPasswordHyperlinkText);
        tmp_8 = Unit_instance;
      }finally {
        this_4.f6w(index_0);
      }
      var passwordRecoveryString = this_4.g6w();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(116382069, true, AuthScreen$lambda_6(snackbarHostState), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_4.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_4.w32();
      var tmp_9;
      if (invalid || it_3 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>' call
        var value_5 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_4.h33(value_5);
        tmp_9 = value_5;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      var tmp_11 = tmp0_1;
      var tmp_12 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(964048574, true, AuthScreen$lambda_7(email$delegate, password$delegate, fragmentNavigator, passwordRecoveryString, scope_1, authViewModel, mainViewModel, registrationString, snackbarHostState), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_5 = $composer_0;
      sourceInformationMarkerStart($composer_5, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_5.f2r(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_5.w32();
      var tmp_15;
      if (invalid_0 || it_4 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>' call
        var value_6 = ComposableLambda$invoke$ref_11(dispatchReceiver_0);
        $composer_5.h33(value_6);
        tmp_15 = value_6;
      } else {
        tmp_15 = it_4;
      }
      var tmp_16 = tmp_15;
      var tmp0_2 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_5);
      Scaffold(null, null, null, tmp_11, null, tmp_12, tmp_13, tmp_14, null, tmp0_2, $composer_0, 805309440, 503);
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
      tmp3_safe_receiver.n38(AuthScreen$lambda_8(componentNavigator, fragmentNavigator, $changed));
    }
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$AuthScreenKt$lambda_1$lambda_m4xbaw($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-915965592, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.ComposableSingletons$AuthScreenKt.lambda-1.<anonymous> (AuthScreen.kt:128)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$AuthScreenKt$lambda_2$lambda_6op5rb($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-865280599, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.ComposableSingletons$AuthScreenKt.lambda-2.<anonymous> (AuthScreen.kt:129)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u0430\u0448\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$AuthScreenKt$lambda_3$lambda_zibmti($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-814595606, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.ComposableSingletons$AuthScreenKt.lambda-3.<anonymous> (AuthScreen.kt:119)');
      }
      var tmp = get_Email(Icons_getInstance().plp_1);
      Icon(tmp, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$AuthScreenKt$lambda_4$lambda_6p5y3f($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(487538833, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.ComposableSingletons$AuthScreenKt.lambda-4.<anonymous> (AuthScreen.kt:146)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u041F\u0430\u0440\u043E\u043B\u044C', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$AuthScreenKt$lambda_5$lambda_m4giys($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1951176850, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.ComposableSingletons$AuthScreenKt.lambda-5.<anonymous> (AuthScreen.kt:147)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$AuthScreenKt$lambda_6$lambda_k311y5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-880152429, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.ComposableSingletons$AuthScreenKt.lambda-6.<anonymous> (AuthScreen.kt:141)');
      }
      var tmp = get_Edit(Icons_getInstance().plp_1);
      Icon(tmp, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$AuthScreenKt$lambda_7$lambda_8qlf42($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1963321170, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.ComposableSingletons$AuthScreenKt.lambda-7.<anonymous> (AuthScreen.kt:182)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u043E\u0439\u0442\u0438', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_SemiBold_getInstance()), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AuthScreenKt() {
    ComposableSingletons$AuthScreenKt_instance = this;
    var tmp = this;
    tmp.epi_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-915965592, false, ComposableSingletons$AuthScreenKt$lambda_1$lambda_m4xbaw));
    var tmp_0 = this;
    tmp_0.fpi_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-865280599, false, ComposableSingletons$AuthScreenKt$lambda_2$lambda_6op5rb));
    var tmp_1 = this;
    tmp_1.gpi_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-814595606, false, ComposableSingletons$AuthScreenKt$lambda_3$lambda_zibmti));
    var tmp_2 = this;
    tmp_2.hpi_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(487538833, false, ComposableSingletons$AuthScreenKt$lambda_4$lambda_6p5y3f));
    var tmp_3 = this;
    tmp_3.ipi_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1951176850, false, ComposableSingletons$AuthScreenKt$lambda_5$lambda_m4giys));
    var tmp_4 = this;
    tmp_4.jpi_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-880152429, false, ComposableSingletons$AuthScreenKt$lambda_6$lambda_k311y5));
    var tmp_5 = this;
    tmp_5.kpi_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(1963321170, false, ComposableSingletons$AuthScreenKt$lambda_7$lambda_8qlf42));
  }
  var ComposableSingletons$AuthScreenKt_instance;
  function ComposableSingletons$AuthScreenKt_getInstance() {
    if (ComposableSingletons$AuthScreenKt_instance == null)
      new ComposableSingletons$AuthScreenKt();
    return ComposableSingletons$AuthScreenKt_instance;
  }
  function AuthScreen$lambda($email$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('email', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $email$delegate.c1();
  }
  function AuthScreen$lambda_0($email$delegate, _set____db54di) {
    getLocalDelegateReference('email', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $email$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function AuthScreen$lambda_1($password$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('password', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $password$delegate.c1();
  }
  function AuthScreen$lambda_2($password$delegate, _set____db54di) {
    getLocalDelegateReference('password', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $password$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function AuthScreen$lambda_3() {
    return mutableStateOf('');
  }
  function AuthScreen$lambda_4() {
    return mutableStateOf('');
  }
  function AuthScreen$lambda_5() {
    return EmptyCoroutineContext_getInstance();
  }
  function AuthScreen$lambda_6($snackbarHostState) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(116382069, $changed, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous> (AuthScreen.kt:93)');
        }
        SnackbarHost($snackbarHostState, null, null, $composer_0, 6, 6);
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
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function AuthScreen$lambda$lambda($email$delegate) {
    return function (it) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.text.trim' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString(trim(isCharSequence(it) ? it : THROW_CCE())).toLowerCase();
      AuthScreen$lambda_0($email$delegate, tmp$ret$2);
      return Unit_instance;
    };
  }
  function AuthScreen$lambda$lambda_0($password$delegate) {
    return function (it) {
      AuthScreen$lambda_2($password$delegate, it);
      return Unit_instance;
    };
  }
  function AuthScreen$lambda$lambda_1($fragmentNavigator) {
    return function () {
      $fragmentNavigator.iov(PasswordRecoveryFragment_getInstance());
      return Unit_instance;
    };
  }
  function AuthScreen$lambda$lambda$slambda$lambda($mainViewModel, $email$delegate) {
    return function () {
      $mainViewModel.koi(AuthScreen$lambda($email$delegate));
      findNavHost().jor(MainActivity_getInstance());
      return Unit_instance;
    };
  }
  function AuthScreen$lambda$lambda$slambda$lambda$slambda($snackbarHostState, resultContinuation) {
    this.tpi_1 = $snackbarHostState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AuthScreen$lambda$lambda$slambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AuthScreen$lambda$lambda$slambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AuthScreen$lambda$lambda$slambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.tpi_1.dn0('\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A! \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u0438 \u043F\u0430\u0440\u043E\u043B\u044C!', VOID, VOID, VOID, this);
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
  protoOf(AuthScreen$lambda$lambda$slambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new AuthScreen$lambda$lambda$slambda$lambda$slambda(this.tpi_1, completion);
    i.upi_1 = $this$launch;
    return i;
  };
  function AuthScreen$lambda$lambda$slambda$lambda$slambda_0($snackbarHostState, resultContinuation) {
    var i = new AuthScreen$lambda$lambda$slambda$lambda$slambda($snackbarHostState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AuthScreen$lambda$lambda$slambda$lambda_0($scope, $snackbarHostState) {
    return function (e) {
      launch($scope, VOID, VOID, AuthScreen$lambda$lambda$slambda$lambda$slambda_0($snackbarHostState, null));
      return Unit_instance;
    };
  }
  function AuthScreen$lambda$lambda$slambda($authViewModel, $email$delegate, $password$delegate, $mainViewModel, $scope, $snackbarHostState, resultContinuation) {
    this.dpj_1 = $authViewModel;
    this.epj_1 = $email$delegate;
    this.fpj_1 = $password$delegate;
    this.gpj_1 = $mainViewModel;
    this.hpj_1 = $scope;
    this.ipj_1 = $snackbarHostState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AuthScreen$lambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AuthScreen$lambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AuthScreen$lambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = AuthScreen$lambda(this.epj_1);
            var tmp_1 = AuthScreen$lambda_1(this.fpj_1);
            var tmp_2 = AuthScreen$lambda$lambda$slambda$lambda(this.gpj_1, this.epj_1);
            suspendResult = this.dpj_1.iop(tmp_0, tmp_1, tmp_2, AuthScreen$lambda$lambda$slambda$lambda_0(this.hpj_1, this.ipj_1), this);
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
  protoOf(AuthScreen$lambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new AuthScreen$lambda$lambda$slambda(this.dpj_1, this.epj_1, this.fpj_1, this.gpj_1, this.hpj_1, this.ipj_1, completion);
    i.jpj_1 = $this$launch;
    return i;
  };
  function AuthScreen$lambda$lambda$slambda_0($authViewModel, $email$delegate, $password$delegate, $mainViewModel, $scope, $snackbarHostState, resultContinuation) {
    var i = new AuthScreen$lambda$lambda$slambda($authViewModel, $email$delegate, $password$delegate, $mainViewModel, $scope, $snackbarHostState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AuthScreen$lambda$lambda_2($scope, $authViewModel, $email$delegate, $password$delegate, $mainViewModel, $snackbarHostState) {
    return function () {
      launch($scope, VOID, VOID, AuthScreen$lambda$lambda$slambda_0($authViewModel, $email$delegate, $password$delegate, $mainViewModel, $scope, $snackbarHostState, null));
      return Unit_instance;
    };
  }
  function AuthScreen$lambda$lambda_3($fragmentNavigator) {
    return function () {
      $fragmentNavigator.iov(RegistrationFragment_getInstance());
      return Unit_instance;
    };
  }
  function AuthScreen$lambda_7($email$delegate, $password$delegate, $fragmentNavigator, $passwordRecoveryString, $scope, $authViewModel, $mainViewModel, $registrationString, $snackbarHostState) {
    return function (padding_2, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.f2r(padding_2) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(964048574, $dirty, -1, 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous> (AuthScreen.kt:95)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = padding(fillMaxSize(Companion_instance), padding_2);
        var contentAlignment = Companion_getInstance_1().q7p_1;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m7p_1;
        if (!((4 & 4) === 0))
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$2 = _Dp___init__impl__ms3zkb(600);
        var modifier_1 = widthIn(tmp_2, VOID, tmp$ret$2);
        var verticalArrangement = Arrangement_getInstance().ybv_1;
        var horizontalAlignment = Companion_getInstance_1().z7p_1;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((0 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((0 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
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
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_8.v30();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text('\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 BreakingApp', null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_SemiBold_getInstance()), $composer_10, 6, 0, 65534);
        var tmp_9 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$5 = _Dp___init__impl__ms3zkb(20);
        Spacer(height(tmp_9, tmp$ret$5), $composer_10, 6);
        var tmp0_value = AuthScreen$lambda($email$delegate);
        var tmp_10 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(8);
        var tmp1_modifier = fillMaxWidth(padding_0(tmp_10, tmp$ret$6));
        var tmp2_keyboardOptions = new KeyboardOptions(VOID, VOID, Companion_getInstance_3().j7g_1);
        $composer_10.a31(44475228);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_10.f2r($email$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_10.w32();
        var tmp_11;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = AuthScreen$lambda$lambda($email$delegate);
          $composer_10.h33(value);
          tmp_11 = value;
        } else {
          tmp_11 = it;
        }
        var tmp_12 = tmp_11;
        var tmp0_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_10.c31();
        var tmp_13 = ComposableSingletons$AuthScreenKt_getInstance().epi_1;
        var tmp_14 = ComposableSingletons$AuthScreenKt_getInstance().fpi_1;
        var tmp_15 = ComposableSingletons$AuthScreenKt_getInstance().gpi_1;
        OutlinedTextField(tmp0_value, tmp0_group, tmp1_modifier, false, false, null, tmp_13, tmp_14, tmp_15, null, null, null, null, false, null, tmp2_keyboardOptions, null, false, 0, 0, null, null, null, $composer_10, 114819456, 196608, 0, 8355384);
        var tmp3_value = AuthScreen$lambda_1($password$delegate);
        var tmp_16 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$11 = _Dp___init__impl__ms3zkb(8);
        var tmp4_modifier = fillMaxWidth(padding_0(tmp_16, tmp$ret$11));
        var tmp5_visualTransformation = new PasswordVisualTransformation();
        var tmp6_keyboardOptions = new KeyboardOptions(VOID, VOID, Companion_getInstance_3().p7g_1);
        $composer_10.a31(44502092);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_10.f2r($password$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_10.w32();
        var tmp_17;
        if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = AuthScreen$lambda$lambda_0($password$delegate);
          $composer_10.h33(value_0);
          tmp_17 = value_0;
        } else {
          tmp_17 = it_0;
        }
        var tmp_18 = tmp_17;
        var tmp1_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        $composer_10.c31();
        var tmp_19 = ComposableSingletons$AuthScreenKt_getInstance().hpi_1;
        var tmp_20 = ComposableSingletons$AuthScreenKt_getInstance().ipi_1;
        var tmp_21 = ComposableSingletons$AuthScreenKt_getInstance().jpi_1;
        OutlinedTextField(tmp3_value, tmp1_group, tmp4_modifier, false, false, null, tmp_19, tmp_20, tmp_21, null, null, null, null, false, tmp5_visualTransformation, tmp6_keyboardOptions, null, false, 0, 0, null, null, null, $composer_10, 114819456, 196608, 0, 8339000);
        var tmp_22 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$16 = _Dp___init__impl__ms3zkb(20);
        Spacer(height(tmp_22, tmp$ret$16), $composer_10, 6);
        var tmp7_style = Typography_getInstance().kpj(FontWeights_Medium_getInstance());
        var tmp_23 = Companion_instance;
        $composer_10.a31(44514987);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_10.f32($fragmentNavigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_10.w32();
        var tmp_24;
        if (invalid_1 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = AuthScreen$lambda$lambda_1($fragmentNavigator);
          $composer_10.h33(value_1);
          tmp_24 = value_1;
        } else {
          tmp_24 = it_1;
        }
        var tmp_25 = tmp_24;
        var tmp2_group = (tmp_25 == null ? true : !(tmp_25 == null)) ? tmp_25 : THROW_CCE();
        $composer_10.c31();
        var tmp8_modifier = clickable(tmp_23, VOID, VOID, VOID, tmp2_group);
        var tmp_26 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_29 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_30 = _TextOverflow___init__impl__obguoe(0);
        Text_0($passwordRecoveryString, tmp8_modifier, tmp_26, tmp_27, null, null, null, tmp_28, null, null, tmp_29, tmp_30, false, 0, 0, null, null, tmp7_style, $composer_10, 0, 0, 131068);
        var tmp_31;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = AuthScreen$lambda($email$delegate);
        if (charSequenceLength(this_0) > 0) {
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_1 = AuthScreen$lambda_1($password$delegate);
          tmp_31 = charSequenceLength(this_1) > 0;
        } else {
          tmp_31 = false;
        }
        var tmp13_enabled = tmp_31;
        var tmp9_$receiver = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp10_top = _Dp___init__impl__ms3zkb(20);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp11_start = _Dp___init__impl__ms3zkb(30);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp12_end = _Dp___init__impl__ms3zkb(30);
        var tmp14_modifier = padding_1(tmp9_$receiver, tmp11_start, tmp10_top, tmp12_end);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$26 = _Dp___init__impl__ms3zkb(15);
        var tmp15_shape = RoundedCornerShape(tmp$ret$26);
        $composer_10.a31(44522694);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = !!(!!(!!(!!($composer_10.f32($scope) | $composer_10.f32($authViewModel)) | $composer_10.f2r($email$delegate)) | $composer_10.f2r($password$delegate)) | $composer_10.f32($mainViewModel));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_10.w32();
        var tmp_32;
        if (invalid_2 || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = AuthScreen$lambda$lambda_2($scope, $authViewModel, $email$delegate, $password$delegate, $mainViewModel, $snackbarHostState);
          $composer_10.h33(value_2);
          tmp_32 = value_2;
        } else {
          tmp_32 = it_2;
        }
        var tmp_33 = tmp_32;
        var tmp3_group = (tmp_33 == null ? true : !(tmp_33 == null)) ? tmp_33 : THROW_CCE();
        $composer_10.c31();
        Button(tmp3_group, tmp14_modifier, tmp13_enabled, tmp15_shape, null, null, null, null, null, ComposableSingletons$AuthScreenKt_getInstance().kpi_1, $composer_10, 805306368, 496);
        var tmp_34 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$31 = _Dp___init__impl__ms3zkb(20);
        Spacer(height(tmp_34, tmp$ret$31), $composer_10, 6);
        var tmp16_style = Typography_getInstance().kpj(FontWeights_Medium_getInstance());
        var tmp_35 = Companion_instance;
        $composer_10.a31(44562311);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_10.f32($fragmentNavigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_10.w32();
        var tmp_36;
        if (invalid_3 || it_3 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = AuthScreen$lambda$lambda_3($fragmentNavigator);
          $composer_10.h33(value_3);
          tmp_36 = value_3;
        } else {
          tmp_36 = it_3;
        }
        var tmp_37 = tmp_36;
        var tmp4_group = (tmp_37 == null ? true : !(tmp_37 == null)) ? tmp_37 : THROW_CCE();
        $composer_10.c31();
        var tmp17_modifier = clickable(tmp_35, VOID, VOID, VOID, tmp4_group);
        var tmp_38 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_39 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_40 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_41 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_42 = _TextOverflow___init__impl__obguoe(0);
        Text_0($registrationString, tmp17_modifier, tmp_38, tmp_39, null, null, null, tmp_40, null, null, tmp_41, tmp_42, false, 0, 0, null, null, tmp16_style, $composer_10, 0, 0, 131068);
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
        var tmp_43;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_43 = Unit_instance;
        }
        tmp_0 = tmp_43;
      } else {
        $composer_0.c2u();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function AuthScreen$lambda_8($componentNavigator, $fragmentNavigator, $$changed) {
    return function ($composer, $force) {
      AuthScreen($componentNavigator, $fragmentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_auth_component_passwordRecoveryFragment_PasswordRecoveryFragment$stable;
  function PasswordRecoveryFragment() {
    PasswordRecoveryFragment_instance = this;
    Fragment.call(this, 'password_recovery_fragment', VOID, ComposableSingletons$PasswordRecoveryFragmentKt_getInstance().lpj_1);
  }
  var PasswordRecoveryFragment_instance;
  function PasswordRecoveryFragment_getInstance() {
    if (PasswordRecoveryFragment_instance == null)
      new PasswordRecoveryFragment();
    return PasswordRecoveryFragment_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$PasswordRecoveryFragmentKt$lambda_1$lambda_reuw9g(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-400866523, $changed, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.ComposableSingletons$PasswordRecoveryFragmentKt.lambda-1.<anonymous> (PasswordRecoveryFragment.kt:9)');
    }
    PasswordRecoveryScreen(componentNavigator, fragmentNavigator, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PasswordRecoveryFragmentKt() {
    ComposableSingletons$PasswordRecoveryFragmentKt_instance = this;
    var tmp = this;
    tmp.lpj_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-400866523, false, ComposableSingletons$PasswordRecoveryFragmentKt$lambda_1$lambda_reuw9g));
  }
  var ComposableSingletons$PasswordRecoveryFragmentKt_instance;
  function ComposableSingletons$PasswordRecoveryFragmentKt_getInstance() {
    if (ComposableSingletons$PasswordRecoveryFragmentKt_instance == null)
      new ComposableSingletons$PasswordRecoveryFragmentKt();
    return ComposableSingletons$PasswordRecoveryFragmentKt_instance;
  }
  function PasswordRecoveryScreen(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-441413881);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(fragmentNavigator) ? 32 : 16);
    if (!(($dirty & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-441413881, $dirty, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen (PasswordRecoveryScreen.kt:48)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(AuthViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var authViewModel = tmp0;
      $composer_0.a31(1580628546);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>' call
        var value_0 = new SnackbarHostState();
        this_0.h33(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var snackbarHostState = tmp0_group;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = PasswordRecoveryScreen$lambda_1;
      }
      var composer = $composer_2;
      sourceInformationMarkerStart($composer_2, -954207516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.w32();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_1 = createCompositionCoroutineScope(getContext(), composer);
        $composer_2.h33(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_2);
      var coroutineScope = tmp1_group;
      $composer_0.a31(1580632312);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.w32();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>' call
        var value_2 = PasswordRecoveryScreen$lambda_2;
        this_1.h33(value_2);
        tmp_3 = value_2;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.c31();
      var email$delegate = rememberSaveable([], null, null, tmp1_group_0, $composer_0, 3072, 6);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(2025429965, true, PasswordRecoveryScreen$lambda_3(snackbarHostState), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_3.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_3.w32();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_3.h33(value_3);
        tmp_5 = value_3;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      var tmp_7 = tmp0_0;
      var tmp_8 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-219101034, true, PasswordRecoveryScreen$lambda_4(email$delegate, coroutineScope, authViewModel, fragmentNavigator, snackbarHostState), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_4.f2r(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_4.w32();
      var tmp_11;
      if (invalid_0 || it_3 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_19(dispatchReceiver_0);
        $composer_4.h33(value_4);
        tmp_11 = value_4;
      } else {
        tmp_11 = it_3;
      }
      var tmp_12 = tmp_11;
      var tmp0_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      Scaffold(null, null, null, tmp_7, null, tmp_8, tmp_9, tmp_10, null, tmp0_1, $composer_0, 805309440, 503);
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
      tmp2_safe_receiver.n38(PasswordRecoveryScreen$lambda_5(componentNavigator, fragmentNavigator, $changed));
    }
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$PasswordRecoveryScreenKt$lambda_1$lambda_2a77m8($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1885044288, $changed, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.ComposableSingletons$PasswordRecoveryScreenKt.lambda-1.<anonymous> (PasswordRecoveryScreen.kt:91)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u042D\u043B\u0435\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$PasswordRecoveryScreenKt$lambda_2$lambda_qjf9fz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1592027647, $changed, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.ComposableSingletons$PasswordRecoveryScreenKt.lambda-2.<anonymous> (PasswordRecoveryScreen.kt:92)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u0430\u0448\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$PasswordRecoveryScreenKt$lambda_3$lambda_fo2bgy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-774132286, $changed, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.ComposableSingletons$PasswordRecoveryScreenKt.lambda-3.<anonymous> (PasswordRecoveryScreen.kt:82)');
      }
      var tmp = get_Email(Icons_getInstance().plp_1);
      Icon(tmp, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$PasswordRecoveryScreenKt$lambda_4$lambda_d5k5l9($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1855013078, $changed, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.ComposableSingletons$PasswordRecoveryScreenKt.lambda-4.<anonymous> (PasswordRecoveryScreen.kt:117)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_Medium_getInstance()), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$PasswordRecoveryScreenKt$lambda_5$lambda_t1xfbo($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(18043731, $changed, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.ComposableSingletons$PasswordRecoveryScreenKt.lambda-5.<anonymous> (PasswordRecoveryScreen.kt:131)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u043E\u0438\u0306\u0442\u0438', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_SemiBold_getInstance()), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PasswordRecoveryScreenKt() {
    ComposableSingletons$PasswordRecoveryScreenKt_instance = this;
    var tmp = this;
    tmp.mpj_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(1885044288, false, ComposableSingletons$PasswordRecoveryScreenKt$lambda_1$lambda_2a77m8));
    var tmp_0 = this;
    tmp_0.npj_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-1592027647, false, ComposableSingletons$PasswordRecoveryScreenKt$lambda_2$lambda_qjf9fz));
    var tmp_1 = this;
    tmp_1.opj_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-774132286, false, ComposableSingletons$PasswordRecoveryScreenKt$lambda_3$lambda_fo2bgy));
    var tmp_2 = this;
    tmp_2.ppj_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-1855013078, false, ComposableSingletons$PasswordRecoveryScreenKt$lambda_4$lambda_d5k5l9));
    var tmp_3 = this;
    tmp_3.qpj_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(18043731, false, ComposableSingletons$PasswordRecoveryScreenKt$lambda_5$lambda_t1xfbo));
  }
  var ComposableSingletons$PasswordRecoveryScreenKt_instance;
  function ComposableSingletons$PasswordRecoveryScreenKt_getInstance() {
    if (ComposableSingletons$PasswordRecoveryScreenKt_instance == null)
      new ComposableSingletons$PasswordRecoveryScreenKt();
    return ComposableSingletons$PasswordRecoveryScreenKt_instance;
  }
  function PasswordRecoveryScreen$lambda($email$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('email', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $email$delegate.c1();
  }
  function PasswordRecoveryScreen$lambda_0($email$delegate, _set____db54di) {
    getLocalDelegateReference('email', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $email$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function PasswordRecoveryScreen$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function PasswordRecoveryScreen$lambda_2() {
    return mutableStateOf('');
  }
  function PasswordRecoveryScreen$lambda_3($snackbarHostState) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(2025429965, $changed, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous> (PasswordRecoveryScreen.kt:56)');
        }
        SnackbarHost($snackbarHostState, null, null, $composer_0, 6, 6);
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
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function PasswordRecoveryScreen$lambda$lambda($email$delegate) {
    return function (it) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.text.trim' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString(trim(isCharSequence(it) ? it : THROW_CCE())).toLowerCase();
      PasswordRecoveryScreen$lambda_0($email$delegate, tmp$ret$2);
      return Unit_instance;
    };
  }
  function PasswordRecoveryScreen$lambda$lambda$slambda$lambda($fragmentNavigator) {
    return function () {
      $fragmentNavigator.iov(AuthFragment_getInstance());
      return Unit_instance;
    };
  }
  function PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda($snackbarHostState, resultContinuation) {
    this.zpj_1 = $snackbarHostState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.zpj_1.dn0('\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A!', VOID, VOID, VOID, this);
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
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda(this.zpj_1, completion);
    i.apk_1 = $this$launch;
    return i;
  };
  function PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda_0($snackbarHostState, resultContinuation) {
    var i = new PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda($snackbarHostState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PasswordRecoveryScreen$lambda$lambda$slambda$lambda_0($coroutineScope, $snackbarHostState) {
    return function (e) {
      launch($coroutineScope, VOID, VOID, PasswordRecoveryScreen$lambda$lambda$slambda$lambda$slambda_0($snackbarHostState, null));
      return Unit_instance;
    };
  }
  function PasswordRecoveryScreen$lambda$lambda$slambda($authViewModel, $email$delegate, $fragmentNavigator, $coroutineScope, $snackbarHostState, resultContinuation) {
    this.jpk_1 = $authViewModel;
    this.kpk_1 = $email$delegate;
    this.lpk_1 = $fragmentNavigator;
    this.mpk_1 = $coroutineScope;
    this.npk_1 = $snackbarHostState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = PasswordRecoveryScreen$lambda(this.kpk_1);
            var tmp_1 = PasswordRecoveryScreen$lambda$lambda$slambda$lambda(this.lpk_1);
            suspendResult = this.jpk_1.kop(tmp_0, tmp_1, PasswordRecoveryScreen$lambda$lambda$slambda$lambda_0(this.mpk_1, this.npk_1), this);
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
  protoOf(PasswordRecoveryScreen$lambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new PasswordRecoveryScreen$lambda$lambda$slambda(this.jpk_1, this.kpk_1, this.lpk_1, this.mpk_1, this.npk_1, completion);
    i.opk_1 = $this$launch;
    return i;
  };
  function PasswordRecoveryScreen$lambda$lambda$slambda_0($authViewModel, $email$delegate, $fragmentNavigator, $coroutineScope, $snackbarHostState, resultContinuation) {
    var i = new PasswordRecoveryScreen$lambda$lambda$slambda($authViewModel, $email$delegate, $fragmentNavigator, $coroutineScope, $snackbarHostState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PasswordRecoveryScreen$lambda$lambda_0($coroutineScope, $authViewModel, $email$delegate, $fragmentNavigator, $snackbarHostState) {
    return function () {
      launch($coroutineScope, VOID, VOID, PasswordRecoveryScreen$lambda$lambda$slambda_0($authViewModel, $email$delegate, $fragmentNavigator, $coroutineScope, $snackbarHostState, null));
      return Unit_instance;
    };
  }
  function PasswordRecoveryScreen$lambda$lambda_1($fragmentNavigator) {
    return function () {
      $fragmentNavigator.kor();
      return Unit_instance;
    };
  }
  function PasswordRecoveryScreen$lambda_4($email$delegate, $coroutineScope, $authViewModel, $fragmentNavigator, $snackbarHostState) {
    return function (padding_2, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.f2r(padding_2) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-219101034, $dirty, -1, 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous> (PasswordRecoveryScreen.kt:58)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = padding(fillMaxSize(Companion_instance), padding_2);
        var contentAlignment = Companion_getInstance_1().q7p_1;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m7p_1;
        if (!((4 & 4) === 0))
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$2 = _Dp___init__impl__ms3zkb(600);
        var modifier_1 = widthIn(tmp_2, VOID, tmp$ret$2);
        var verticalArrangement = Arrangement_getInstance().ybv_1;
        var horizontalAlignment = Companion_getInstance_1().z7p_1;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((0 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((0 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
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
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_8.v30();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text('\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F', null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_SemiBold_getInstance()), $composer_10, 6, 0, 65534);
        var tmp_9 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$5 = _Dp___init__impl__ms3zkb(20);
        Spacer(height(tmp_9, tmp$ret$5), $composer_10, 6);
        var tmp0_value = PasswordRecoveryScreen$lambda($email$delegate);
        var tmp_10 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(8);
        var tmp1_modifier = fillMaxWidth(padding_0(tmp_10, tmp$ret$6));
        var tmp2_keyboardOptions = new KeyboardOptions(VOID, VOID, Companion_getInstance_3().j7g_1);
        $composer_10.a31(-1625434484);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_10.f2r($email$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_10.w32();
        var tmp_11;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = PasswordRecoveryScreen$lambda$lambda($email$delegate);
          $composer_10.h33(value);
          tmp_11 = value;
        } else {
          tmp_11 = it;
        }
        var tmp_12 = tmp_11;
        var tmp0_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_10.c31();
        var tmp_13 = ComposableSingletons$PasswordRecoveryScreenKt_getInstance().mpj_1;
        var tmp_14 = ComposableSingletons$PasswordRecoveryScreenKt_getInstance().npj_1;
        var tmp_15 = ComposableSingletons$PasswordRecoveryScreenKt_getInstance().opj_1;
        OutlinedTextField(tmp0_value, tmp0_group, tmp1_modifier, false, false, null, tmp_13, tmp_14, tmp_15, null, null, null, null, false, null, tmp2_keyboardOptions, null, false, 0, 0, null, null, null, $composer_10, 114819456, 196608, 0, 8355384);
        $composer_10.a31(-1625429143);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!(!!($composer_10.f32($coroutineScope) | $composer_10.f32($authViewModel)) | $composer_10.f2r($email$delegate)) | $composer_10.f32($fragmentNavigator));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_10.w32();
        var tmp_16;
        if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = PasswordRecoveryScreen$lambda$lambda_0($coroutineScope, $authViewModel, $email$delegate, $fragmentNavigator, $snackbarHostState);
          $composer_10.h33(value_0);
          tmp_16 = value_0;
        } else {
          tmp_16 = it_0;
        }
        var tmp_17 = tmp_16;
        var tmp1_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
        $composer_10.c31();
        var tmp3_$receiver = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp4_top = _Dp___init__impl__ms3zkb(20);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp5_start = _Dp___init__impl__ms3zkb(30);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp6_end = _Dp___init__impl__ms3zkb(30);
        var tmp_18 = padding_1(tmp3_$receiver, tmp5_start, tmp4_top, tmp6_end);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$18 = _Dp___init__impl__ms3zkb(15);
        var tmp_19 = RoundedCornerShape(tmp$ret$18);
        Button(tmp1_group, tmp_18, false, tmp_19, null, null, null, null, null, ComposableSingletons$PasswordRecoveryScreenKt_getInstance().ppj_1, $composer_10, 805306368, 500);
        $composer_10.a31(-1625397649);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_10.f32($fragmentNavigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_10.w32();
        var tmp_20;
        if (invalid_1 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = PasswordRecoveryScreen$lambda$lambda_1($fragmentNavigator);
          $composer_10.h33(value_1);
          tmp_20 = value_1;
        } else {
          tmp_20 = it_1;
        }
        var tmp_21 = tmp_20;
        var tmp2_group = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
        $composer_10.c31();
        var tmp7_$receiver = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp8_top = _Dp___init__impl__ms3zkb(20);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp9_start = _Dp___init__impl__ms3zkb(30);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp10_end = _Dp___init__impl__ms3zkb(30);
        var tmp_22 = padding_1(tmp7_$receiver, tmp9_start, tmp8_top, tmp10_end);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$26 = _Dp___init__impl__ms3zkb(15);
        var tmp_23 = RoundedCornerShape(tmp$ret$26);
        Button(tmp2_group, tmp_22, false, tmp_23, null, null, null, null, null, ComposableSingletons$PasswordRecoveryScreenKt_getInstance().qpj_1, $composer_10, 805306368, 500);
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
        var tmp_24;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_24 = Unit_instance;
        }
        tmp_0 = tmp_24;
      } else {
        $composer_0.c2u();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function PasswordRecoveryScreen$lambda_5($componentNavigator, $fragmentNavigator, $$changed) {
    return function ($composer, $force) {
      PasswordRecoveryScreen($componentNavigator, $fragmentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_auth_component_registrationFragment_RegistrationFragment$stable;
  function RegistrationFragment() {
    RegistrationFragment_instance = this;
    Fragment.call(this, 'registration_fragment', VOID, ComposableSingletons$RegistrationFragmentKt_getInstance().ppk_1);
  }
  var RegistrationFragment_instance;
  function RegistrationFragment_getInstance() {
    if (RegistrationFragment_instance == null)
      new RegistrationFragment();
    return RegistrationFragment_instance;
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$RegistrationFragmentKt$lambda_1$lambda_9f47sz(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1765825860, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.ComposableSingletons$RegistrationFragmentKt.lambda-1.<anonymous> (RegistrationFragment.kt:9)');
    }
    RegistrationScreen(componentNavigator, fragmentNavigator, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RegistrationFragmentKt() {
    ComposableSingletons$RegistrationFragmentKt_instance = this;
    var tmp = this;
    tmp.ppk_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-1765825860, false, ComposableSingletons$RegistrationFragmentKt$lambda_1$lambda_9f47sz));
  }
  var ComposableSingletons$RegistrationFragmentKt_instance;
  function ComposableSingletons$RegistrationFragmentKt_getInstance() {
    if (ComposableSingletons$RegistrationFragmentKt_instance == null)
      new ComposableSingletons$RegistrationFragmentKt();
    return ComposableSingletons$RegistrationFragmentKt_instance;
  }
  function RegistrationScreen(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(53779230);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(fragmentNavigator) ? 32 : 16);
    if (!(($dirty & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(53779230, $dirty, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen (RegistrationScreen.kt:52)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(AuthViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var authViewModel = tmp0;
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier_0 = null;
      var viewModelStoreOwner_0 = null;
      var key_0 = null;
      var extras_0 = null;
      var scope_0 = null;
      var parameters_0 = null;
      var $composer_2 = $composer_0;
      $composer_2.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier_0 = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.checkNotNull' call
          var value_0 = LocalViewModelStoreOwner_getInstance().nb1($composer_2, 0);
          // Inline function 'kotlin.contracts.contract' call
          if (value_0 == null) {
            // Inline function 'org.koin.compose.viewmodel.koinViewModel.<anonymous>' call
            var message_0 = 'No ViewModelStoreOwner was provided via LocalViewModelStoreOwner';
            throw IllegalStateException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$4 = value_0;
            break $l$block_0;
          }
        }
        viewModelStoreOwner_0 = tmp$ret$4;
      }
      if (!((63 & 4) === 0))
        key_0 = null;
      if (!((63 & 8) === 0))
        extras_0 = defaultExtras(viewModelStoreOwner_0, $composer_2, 8);
      if (!((63 & 16) === 0))
        scope_0 = currentKoinScope($composer_2, 0);
      if (!((63 & 32) === 0))
        parameters_0 = null;
      var tmp0_0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner_0.p4g(), key_0, extras_0, qualifier_0, scope_0, parameters_0);
      $composer_2.z30();
      var mainViewModel = tmp0_0;
      $composer_0.a31(1057388660);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>' call
        var value_1 = new SnackbarHostState();
        this_0.h33(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var snackbarHostState = tmp0_group;
      $composer_0.a31(1057390794);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>' call
        var value_2 = RegistrationScreen$lambda_5;
        this_1.h33(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var name$delegate = rememberSaveable([], null, null, tmp1_group, $composer_0, 3072, 6);
      $composer_0.a31(1057392618);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>' call
        var value_3 = RegistrationScreen$lambda_6;
        this_2.h33(value_3);
        tmp_3 = value_3;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.c31();
      var email$delegate = rememberSaveable([], null, null, tmp2_group, $composer_0, 3072, 6);
      $composer_0.a31(1057394538);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.w32();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>' call
        var value_4 = RegistrationScreen$lambda_7;
        this_3.h33(value_4);
        tmp_5 = value_4;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.c31();
      var password$delegate = rememberSaveable([], null, null, tmp3_group, $composer_0, 3072, 6);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = RegistrationScreen$lambda_8;
      }
      var composer = $composer_3;
      sourceInformationMarkerStart($composer_3, -954207516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_3.w32();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_5 = createCompositionCoroutineScope(getContext(), composer);
        $composer_3.h33(value_5);
        tmp_7 = value_5;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp1_group_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_3);
      var scope_1 = tmp1_group_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1140449052, true, RegistrationScreen$lambda_9(snackbarHostState), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_4.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_4.w32();
      var tmp_9;
      if (invalid || it_4 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>' call
        var value_6 = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_4.h33(value_6);
        tmp_9 = value_6;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      var tmp_11 = tmp0_1;
      var tmp_12 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(2051765037, true, RegistrationScreen$lambda_10(email$delegate, name$delegate, password$delegate, scope_1, authViewModel, mainViewModel, fragmentNavigator, snackbarHostState), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_5 = $composer_0;
      sourceInformationMarkerStart($composer_5, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_5.f2r(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_5.w32();
      var tmp_15;
      if (invalid_0 || it_5 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>' call
        var value_7 = ComposableLambda$invoke$ref_32(dispatchReceiver_0);
        $composer_5.h33(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_5;
      }
      var tmp_16 = tmp_15;
      var tmp0_2 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_5);
      Scaffold(null, null, null, tmp_11, null, tmp_12, tmp_13, tmp_14, null, tmp0_2, $composer_0, 805309440, 503);
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
      tmp4_safe_receiver.n38(RegistrationScreen$lambda_11(componentNavigator, fragmentNavigator, $changed));
    }
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_1$lambda_yh2dlz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1020667945, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-1.<anonymous> (RegistrationScreen.kt:98)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_2$lambda_5nfwjs($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1249457896, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-2.<anonymous> (RegistrationScreen.kt:99)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u0430\u0448\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_3$lambda_n66kif($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1478247847, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-3.<anonymous> (RegistrationScreen.kt:89)');
      }
      var tmp = get_Email(Icons_getInstance().plp_1);
      Icon(tmp, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_4$lambda_j1b0ei($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(157873152, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-4.<anonymous> (RegistrationScreen.kt:112)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0438 \u0438\u043C\u044F', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_5$lambda_9sbgnp($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-665937663, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-5.<anonymous> (RegistrationScreen.kt:113)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u0430\u0448\u0430 \u0444\u0430\u043C\u0438\u043B\u0438\u044F \u0438 \u0438\u043C\u044F', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_6$lambda_wf6498($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1729107935, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-6.<anonymous> (RegistrationScreen.kt:130)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u041F\u0430\u0440\u043E\u043B\u044C', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_7$lambda_3ljn71($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(905297120, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-7.<anonymous> (RegistrationScreen.kt:131)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_8$lambda_p82tv6($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(81486305, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-8.<anonymous> (RegistrationScreen.kt:125)');
      }
      var tmp = get_Edit(Icons_getInstance().plp_1);
      Icon(tmp, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_9$lambda_gzer1r($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1505208257, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-9.<anonymous> (RegistrationScreen.kt:161)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0421\u043E\u0437\u0434\u0430\u0442\u044C', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_SemiBold_getInstance()), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$RegistrationScreenKt$lambda_10$lambda_16s6vh($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(868381034, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.ComposableSingletons$RegistrationScreenKt.lambda-10.<anonymous> (RegistrationScreen.kt:175)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0412\u043E\u0438\u0306\u0442\u0438', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_SemiBold_getInstance()), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RegistrationScreenKt() {
    ComposableSingletons$RegistrationScreenKt_instance = this;
    var tmp = this;
    tmp.qpk_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-1020667945, false, ComposableSingletons$RegistrationScreenKt$lambda_1$lambda_yh2dlz));
    var tmp_0 = this;
    tmp_0.rpk_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-1249457896, false, ComposableSingletons$RegistrationScreenKt$lambda_2$lambda_5nfwjs));
    var tmp_1 = this;
    tmp_1.spk_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1478247847, false, ComposableSingletons$RegistrationScreenKt$lambda_3$lambda_n66kif));
    var tmp_2 = this;
    tmp_2.tpk_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(157873152, false, ComposableSingletons$RegistrationScreenKt$lambda_4$lambda_j1b0ei));
    var tmp_3 = this;
    tmp_3.upk_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-665937663, false, ComposableSingletons$RegistrationScreenKt$lambda_5$lambda_9sbgnp));
    var tmp_4 = this;
    tmp_4.vpk_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1729107935, false, ComposableSingletons$RegistrationScreenKt$lambda_6$lambda_wf6498));
    var tmp_5 = this;
    tmp_5.wpk_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(905297120, false, ComposableSingletons$RegistrationScreenKt$lambda_7$lambda_3ljn71));
    var tmp_6 = this;
    tmp_6.xpk_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(81486305, false, ComposableSingletons$RegistrationScreenKt$lambda_8$lambda_p82tv6));
    var tmp_7 = this;
    tmp_7.ypk_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1505208257, false, ComposableSingletons$RegistrationScreenKt$lambda_9$lambda_gzer1r));
    var tmp_8 = this;
    tmp_8.zpk_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(868381034, false, ComposableSingletons$RegistrationScreenKt$lambda_10$lambda_16s6vh));
  }
  var ComposableSingletons$RegistrationScreenKt_instance;
  function ComposableSingletons$RegistrationScreenKt_getInstance() {
    if (ComposableSingletons$RegistrationScreenKt_instance == null)
      new ComposableSingletons$RegistrationScreenKt();
    return ComposableSingletons$RegistrationScreenKt_instance;
  }
  function RegistrationScreen$lambda($name$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $name$delegate.c1();
  }
  function RegistrationScreen$lambda_0($name$delegate, _set____db54di) {
    getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $name$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function RegistrationScreen$lambda_1($email$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('email', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $email$delegate.c1();
  }
  function RegistrationScreen$lambda_2($email$delegate, _set____db54di) {
    getLocalDelegateReference('email', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $email$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function RegistrationScreen$lambda_3($password$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('password', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $password$delegate.c1();
  }
  function RegistrationScreen$lambda_4($password$delegate, _set____db54di) {
    getLocalDelegateReference('password', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $password$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function RegistrationScreen$lambda_5() {
    return mutableStateOf('');
  }
  function RegistrationScreen$lambda_6() {
    return mutableStateOf('');
  }
  function RegistrationScreen$lambda_7() {
    return mutableStateOf('');
  }
  function RegistrationScreen$lambda_8() {
    return EmptyCoroutineContext_getInstance();
  }
  function RegistrationScreen$lambda_9($snackbarHostState) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-1140449052, $changed, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous> (RegistrationScreen.kt:64)');
        }
        SnackbarHost($snackbarHostState, null, null, $composer_0, 6, 6);
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
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function RegistrationScreen$lambda$lambda($email$delegate) {
    return function (it) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.text.trim' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString(trim(isCharSequence(it) ? it : THROW_CCE())).toLowerCase();
      RegistrationScreen$lambda_2($email$delegate, tmp$ret$2);
      return Unit_instance;
    };
  }
  function RegistrationScreen$lambda$lambda_0($name$delegate) {
    return function (it) {
      RegistrationScreen$lambda_0($name$delegate, it);
      return Unit_instance;
    };
  }
  function RegistrationScreen$lambda$lambda_1($password$delegate) {
    return function (it) {
      RegistrationScreen$lambda_4($password$delegate, it);
      return Unit_instance;
    };
  }
  function RegistrationScreen$lambda$lambda$slambda$lambda($mainViewModel, $email$delegate) {
    return function () {
      $mainViewModel.koi(RegistrationScreen$lambda_1($email$delegate));
      findNavHost().jor(MainActivity_getInstance());
      return Unit_instance;
    };
  }
  function RegistrationScreen$lambda$lambda$slambda$lambda$slambda($snackbarHostState, resultContinuation) {
    this.ipl_1 = $snackbarHostState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RegistrationScreen$lambda$lambda$slambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RegistrationScreen$lambda$lambda$slambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RegistrationScreen$lambda$lambda$slambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.ipl_1.dn0('\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A!', VOID, VOID, VOID, this);
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
  protoOf(RegistrationScreen$lambda$lambda$slambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new RegistrationScreen$lambda$lambda$slambda$lambda$slambda(this.ipl_1, completion);
    i.jpl_1 = $this$launch;
    return i;
  };
  function RegistrationScreen$lambda$lambda$slambda$lambda$slambda_0($snackbarHostState, resultContinuation) {
    var i = new RegistrationScreen$lambda$lambda$slambda$lambda$slambda($snackbarHostState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RegistrationScreen$lambda$lambda$slambda$lambda_0($scope, $snackbarHostState) {
    return function (it) {
      launch($scope, VOID, VOID, RegistrationScreen$lambda$lambda$slambda$lambda$slambda_0($snackbarHostState, null));
      return Unit_instance;
    };
  }
  function RegistrationScreen$lambda$lambda$slambda($authViewModel, $email$delegate, $password$delegate, $name$delegate, $mainViewModel, $scope, $snackbarHostState, resultContinuation) {
    this.spl_1 = $authViewModel;
    this.tpl_1 = $email$delegate;
    this.upl_1 = $password$delegate;
    this.vpl_1 = $name$delegate;
    this.wpl_1 = $mainViewModel;
    this.xpl_1 = $scope;
    this.ypl_1 = $snackbarHostState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RegistrationScreen$lambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RegistrationScreen$lambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RegistrationScreen$lambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = RegistrationScreen$lambda_1(this.tpl_1);
            var tmp_1 = RegistrationScreen$lambda_3(this.upl_1);
            var tmp_2 = RegistrationScreen$lambda(this.vpl_1);
            var tmp_3 = RegistrationScreen$lambda$lambda$slambda$lambda(this.wpl_1, this.tpl_1);
            suspendResult = this.spl_1.jop(tmp_0, tmp_1, tmp_2, tmp_3, RegistrationScreen$lambda$lambda$slambda$lambda_0(this.xpl_1, this.ypl_1), this);
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
  protoOf(RegistrationScreen$lambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new RegistrationScreen$lambda$lambda$slambda(this.spl_1, this.tpl_1, this.upl_1, this.vpl_1, this.wpl_1, this.xpl_1, this.ypl_1, completion);
    i.zpl_1 = $this$launch;
    return i;
  };
  function RegistrationScreen$lambda$lambda$slambda_0($authViewModel, $email$delegate, $password$delegate, $name$delegate, $mainViewModel, $scope, $snackbarHostState, resultContinuation) {
    var i = new RegistrationScreen$lambda$lambda$slambda($authViewModel, $email$delegate, $password$delegate, $name$delegate, $mainViewModel, $scope, $snackbarHostState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RegistrationScreen$lambda$lambda_2($scope, $authViewModel, $email$delegate, $password$delegate, $name$delegate, $mainViewModel, $snackbarHostState) {
    return function () {
      launch($scope, VOID, VOID, RegistrationScreen$lambda$lambda$slambda_0($authViewModel, $email$delegate, $password$delegate, $name$delegate, $mainViewModel, $scope, $snackbarHostState, null));
      return Unit_instance;
    };
  }
  function RegistrationScreen$lambda$lambda_3($fragmentNavigator) {
    return function () {
      $fragmentNavigator.kor();
      return Unit_instance;
    };
  }
  function RegistrationScreen$lambda_10($email$delegate, $name$delegate, $password$delegate, $scope, $authViewModel, $mainViewModel, $fragmentNavigator, $snackbarHostState) {
    return function (padding_2, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.f2r(padding_2) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(2051765037, $dirty, -1, 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous> (RegistrationScreen.kt:66)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = padding(fillMaxSize(Companion_instance), padding_2);
        var contentAlignment = Companion_getInstance_1().q7p_1;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m7p_1;
        if (!((4 & 4) === 0))
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$2 = _Dp___init__impl__ms3zkb(600);
        var modifier_1 = widthIn(tmp_2, VOID, tmp$ret$2);
        var verticalArrangement = Arrangement_getInstance().ybv_1;
        var horizontalAlignment = Companion_getInstance_1().z7p_1;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((0 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((0 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
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
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_8.v30();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text('\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F', null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, Typography_getInstance().dpi(FontWeights_SemiBold_getInstance()), $composer_10, 6, 0, 65534);
        var tmp_9 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$5 = _Dp___init__impl__ms3zkb(20);
        Spacer(height(tmp_9, tmp$ret$5), $composer_10, 6);
        var tmp0_value = RegistrationScreen$lambda_1($email$delegate);
        var tmp_10 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(8);
        var tmp1_modifier = fillMaxWidth(padding_0(tmp_10, tmp$ret$6));
        var tmp2_keyboardOptions = new KeyboardOptions(VOID, VOID, Companion_getInstance_3().j7g_1);
        $composer_10.a31(-1312481698);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_10.f2r($email$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_10.w32();
        var tmp_11;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = RegistrationScreen$lambda$lambda($email$delegate);
          $composer_10.h33(value);
          tmp_11 = value;
        } else {
          tmp_11 = it;
        }
        var tmp_12 = tmp_11;
        var tmp0_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_10.c31();
        var tmp_13 = ComposableSingletons$RegistrationScreenKt_getInstance().qpk_1;
        var tmp_14 = ComposableSingletons$RegistrationScreenKt_getInstance().rpk_1;
        var tmp_15 = ComposableSingletons$RegistrationScreenKt_getInstance().spk_1;
        OutlinedTextField(tmp0_value, tmp0_group, tmp1_modifier, false, false, null, tmp_13, tmp_14, tmp_15, null, null, null, null, false, null, tmp2_keyboardOptions, null, false, 0, 0, null, null, null, $composer_10, 114819456, 196608, 0, 8355384);
        var tmp3_value = RegistrationScreen$lambda($name$delegate);
        var tmp_16 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$11 = _Dp___init__impl__ms3zkb(8);
        var tmp4_modifier = fillMaxWidth(padding_0(tmp_16, tmp$ret$11));
        var tmp5_keyboardOptions = new KeyboardOptions(VOID, VOID, Companion_getInstance_3().j7g_1);
        $composer_10.a31(-1312461558);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_10.f2r($name$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_10.w32();
        var tmp_17;
        if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = RegistrationScreen$lambda$lambda_0($name$delegate);
          $composer_10.h33(value_0);
          tmp_17 = value_0;
        } else {
          tmp_17 = it_0;
        }
        var tmp_18 = tmp_17;
        var tmp1_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        $composer_10.c31();
        var tmp_19 = ComposableSingletons$RegistrationScreenKt_getInstance().tpk_1;
        var tmp_20 = ComposableSingletons$RegistrationScreenKt_getInstance().upk_1;
        OutlinedTextField(tmp3_value, tmp1_group, tmp4_modifier, false, false, null, tmp_19, tmp_20, null, null, null, null, null, false, null, tmp5_keyboardOptions, null, false, 0, 0, null, null, null, $composer_10, 14156160, 196608, 0, 8355640);
        var tmp6_value = RegistrationScreen$lambda_3($password$delegate);
        var tmp_21 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$16 = _Dp___init__impl__ms3zkb(8);
        var tmp7_modifier = fillMaxWidth(padding_0(tmp_21, tmp$ret$16));
        var tmp8_visualTransformation = new PasswordVisualTransformation();
        var tmp9_keyboardOptions = new KeyboardOptions(VOID, VOID, Companion_getInstance_3().p7g_1);
        $composer_10.a31(-1312435314);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_10.f2r($password$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_10.w32();
        var tmp_22;
        if (invalid_1 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = RegistrationScreen$lambda$lambda_1($password$delegate);
          $composer_10.h33(value_1);
          tmp_22 = value_1;
        } else {
          tmp_22 = it_1;
        }
        var tmp_23 = tmp_22;
        var tmp2_group = (tmp_23 == null ? true : !(tmp_23 == null)) ? tmp_23 : THROW_CCE();
        $composer_10.c31();
        var tmp_24 = ComposableSingletons$RegistrationScreenKt_getInstance().vpk_1;
        var tmp_25 = ComposableSingletons$RegistrationScreenKt_getInstance().wpk_1;
        var tmp_26 = ComposableSingletons$RegistrationScreenKt_getInstance().xpk_1;
        OutlinedTextField(tmp6_value, tmp2_group, tmp7_modifier, false, false, null, tmp_24, tmp_25, tmp_26, null, null, null, null, false, tmp8_visualTransformation, tmp9_keyboardOptions, null, false, 0, 0, null, null, null, $composer_10, 114819456, 196608, 0, 8339000);
        var tmp_27 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$21 = _Dp___init__impl__ms3zkb(20);
        Spacer(height(tmp_27, tmp$ret$21), $composer_10, 6);
        $composer_10.a31(-1312425523);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = !!(!!(!!(!!(!!($composer_10.f32($scope) | $composer_10.f32($authViewModel)) | $composer_10.f2r($email$delegate)) | $composer_10.f2r($password$delegate)) | $composer_10.f2r($name$delegate)) | $composer_10.f32($mainViewModel));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_10.w32();
        var tmp_28;
        if (invalid_2 || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = RegistrationScreen$lambda$lambda_2($scope, $authViewModel, $email$delegate, $password$delegate, $name$delegate, $mainViewModel, $snackbarHostState);
          $composer_10.h33(value_2);
          tmp_28 = value_2;
        } else {
          tmp_28 = it_2;
        }
        var tmp_29 = tmp_28;
        var tmp3_group = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
        $composer_10.c31();
        var tmp10_$receiver = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp11_top = _Dp___init__impl__ms3zkb(20);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp12_start = _Dp___init__impl__ms3zkb(30);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp13_end = _Dp___init__impl__ms3zkb(30);
        var tmp_30 = padding_1(tmp10_$receiver, tmp12_start, tmp11_top, tmp13_end);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$29 = _Dp___init__impl__ms3zkb(15);
        var tmp_31 = RoundedCornerShape(tmp$ret$29);
        Button(tmp3_group, tmp_30, false, tmp_31, null, null, null, null, null, ComposableSingletons$RegistrationScreenKt_getInstance().ypk_1, $composer_10, 805306368, 500);
        $composer_10.a31(-1312389727);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_10.f32($fragmentNavigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_10.w32();
        var tmp_32;
        if (invalid_3 || it_3 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = RegistrationScreen$lambda$lambda_3($fragmentNavigator);
          $composer_10.h33(value_3);
          tmp_32 = value_3;
        } else {
          tmp_32 = it_3;
        }
        var tmp_33 = tmp_32;
        var tmp4_group = (tmp_33 == null ? true : !(tmp_33 == null)) ? tmp_33 : THROW_CCE();
        $composer_10.c31();
        var tmp14_$receiver = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp15_top = _Dp___init__impl__ms3zkb(20);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp16_start = _Dp___init__impl__ms3zkb(30);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp17_end = _Dp___init__impl__ms3zkb(30);
        var tmp_34 = padding_1(tmp14_$receiver, tmp16_start, tmp15_top, tmp17_end);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$37 = _Dp___init__impl__ms3zkb(15);
        var tmp_35 = RoundedCornerShape(tmp$ret$37);
        Button(tmp4_group, tmp_34, false, tmp_35, null, null, null, null, null, ComposableSingletons$RegistrationScreenKt_getInstance().zpk_1, $composer_10, 805306368, 500);
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
        var tmp_36;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_36 = Unit_instance;
        }
        tmp_0 = tmp_36;
      } else {
        $composer_0.c2u();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function RegistrationScreen$lambda_11($componentNavigator, $fragmentNavigator, $$changed) {
    return function ($composer, $force) {
      RegistrationScreen($componentNavigator, $fragmentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_bboysDetails_BboysDetailsActivity$stable;
  function BboysDetailsActivity() {
    BboysDetailsActivity_instance = this;
    Activity.call(this, 'bboys_details_activity', listOf_0(BboysDetailsComponent_getInstance()), ComposableSingletons$BboysDetailsActivityKt_getInstance().cpm_1);
  }
  var BboysDetailsActivity_instance;
  function BboysDetailsActivity_getInstance() {
    if (BboysDetailsActivity_instance == null)
      new BboysDetailsActivity();
    return BboysDetailsActivity_instance;
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$BboysDetailsActivityKt$lambda_1$lambda_fvkptw($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1861514686, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-1.<anonymous> (BboysDetailsActivity.kt:41)');
      }
      var tmp = painterResource(get_arrow_left_img(drawable_instance), $composer_0, 0);
      var tmp_0 = Companion_instance;
      $composer_0.a31(-1240000796);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_1;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$BboysDetailsActivityKt$lambda_1$lambda$lambda_ugxvzj;
        $composer_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var tmp_3 = clickable(tmp_0, VOID, VOID, VOID, tmp0_group);
      Image(tmp, null, tmp_3, null, null, 0.0, null, $composer_0, 48, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BboysDetailsActivityKt$lambda_1$lambda$lambda_ugxvzj() {
    findNavHost().kor();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$BboysDetailsActivityKt$lambda_2$lambda_cy1r8b($this$TopAppBar, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(531787189, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-2.<anonymous> (BboysDetailsActivity.kt:54)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$BboysDetailsActivityKt$lambda_3$lambda_t9ftom(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-654844701, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous> (BboysDetailsActivity.kt:28)');
    }
    var tmp0_containerColor = Companion_getInstance_4().g68_1;
    var tmp1_titleContentColor = Companion_getInstance_4().d68_1;
    var tmp2_actionIconContentColor = Companion_getInstance_4().d68_1;
    var tmp3_navigationIconContentColor = Companion_getInstance_4().d68_1;
    var tmp4_scrolledContainerColor = Companion_getInstance_4().e68_1;
    var topAppBarColors = new TopAppBarColors(tmp0_containerColor, tmp4_scrolledContainerColor, tmp3_navigationIconContentColor, tmp1_titleContentColor, tmp2_actionIconContentColor);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(1877169246, true, ComposableSingletons$BboysDetailsActivityKt$lambda_3$lambda$lambda_9axyup(components, topAppBarColors), $composer_0, 54);
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
      // Inline function 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_37(dispatchReceiver);
      $composer_1.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    var tmp_1 = tmp0;
    ActivityScaffold(components, null, null, tmp_1, null, null, false, false, $composer_0, 3072 | 14 & $changed, 246);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BboysDetailsActivityKt$lambda_3$lambda$lambda$lambda_prs10a($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-334708608, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous> (BboysDetailsActivity.kt:49)');
        }
        var tmp0_safe_receiver = $component.goq_1;
        $composer_0.a31(880937761);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp_0 = stringResource(tmp0_safe_receiver, $composer_0, 0);
        }
        var tmp1_group = tmp_0;
        $composer_0.c31();
        var tmp_1 = tmp1_group == null ? '' : tmp1_group;
        var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_1, null, tmp_2, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$BboysDetailsActivityKt$lambda_3$lambda$lambda_9axyup($components, $topAppBarColors) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1877169246, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous> (BboysDetailsActivity.kt:39)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $components.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-334708608, true, ComposableSingletons$BboysDetailsActivityKt$lambda_3$lambda$lambda$lambda_prs10a(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.w32();
        var tmp;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.bboysDetails.ComposableSingletons$BboysDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_36(dispatchReceiver);
          $composer_1.h33(value);
          tmp = value;
        } else {
          tmp = it_0;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var tmp_1 = tmp0;
        var tmp_2 = ComposableSingletons$BboysDetailsActivityKt_getInstance().apm_1;
        var tmp_3 = ComposableSingletons$BboysDetailsActivityKt_getInstance().bpm_1;
        var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
        TopAppBar(tmp_1, null, tmp_2, tmp_3, tmp_4, null, $topAppBarColors, null, $composer_0, 3462, 178);
      }
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$BboysDetailsActivityKt() {
    ComposableSingletons$BboysDetailsActivityKt_instance = this;
    var tmp = this;
    tmp.apm_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(1861514686, false, ComposableSingletons$BboysDetailsActivityKt$lambda_1$lambda_fvkptw));
    var tmp_0 = this;
    tmp_0.bpm_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(531787189, false, ComposableSingletons$BboysDetailsActivityKt$lambda_2$lambda_cy1r8b));
    var tmp_1 = this;
    tmp_1.cpm_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-654844701, false, ComposableSingletons$BboysDetailsActivityKt$lambda_3$lambda_t9ftom));
  }
  var ComposableSingletons$BboysDetailsActivityKt_instance;
  function ComposableSingletons$BboysDetailsActivityKt_getInstance() {
    if (ComposableSingletons$BboysDetailsActivityKt_instance == null)
      new ComposableSingletons$BboysDetailsActivityKt();
    return ComposableSingletons$BboysDetailsActivityKt_instance;
  }
  var org_korchagin_kmp_activity_bboysDetails_components_BboysDetailsComponent$stable;
  function BboysDetailsComponent() {
    BboysDetailsComponent_instance = this;
    var tmp0_label = get_bboys_title(string_instance);
    var tmp1_fragments = listOf_0(BboysDetailsFragment_getInstance());
    Component.call(this, 'bboys_details_component', ComposableSingletons$BboysDetailsComponentKt_getInstance().dpm_1, tmp0_label, tmp1_fragments);
  }
  var BboysDetailsComponent_instance;
  function BboysDetailsComponent_getInstance() {
    if (BboysDetailsComponent_instance == null)
      new BboysDetailsComponent();
    return BboysDetailsComponent_instance;
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$BboysDetailsComponentKt$lambda_1$lambda_o1hnq(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1370460144, $dirty, -1, 'org.korchagin.kmp.activity.bboysDetails.components.ComposableSingletons$BboysDetailsComponentKt.lambda-1.<anonymous> (BboysDetailsComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BboysDetailsComponentKt() {
    ComposableSingletons$BboysDetailsComponentKt_instance = this;
    var tmp = this;
    tmp.dpm_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(1370460144, false, ComposableSingletons$BboysDetailsComponentKt$lambda_1$lambda_o1hnq));
  }
  var ComposableSingletons$BboysDetailsComponentKt_instance;
  function ComposableSingletons$BboysDetailsComponentKt_getInstance() {
    if (ComposableSingletons$BboysDetailsComponentKt_instance == null)
      new ComposableSingletons$BboysDetailsComponentKt();
    return ComposableSingletons$BboysDetailsComponentKt_instance;
  }
  var org_korchagin_kmp_activity_bboysDetails_fragments_BboysDetailsFragment$stable;
  function BboysDetailsFragment() {
    BboysDetailsFragment_instance = this;
    Fragment.call(this, 'bboys_details_fragment', VOID, ComposableSingletons$BboysDetailsFragmentKt_getInstance().epm_1);
  }
  var BboysDetailsFragment_instance;
  function BboysDetailsFragment_getInstance() {
    if (BboysDetailsFragment_instance == null)
      new BboysDetailsFragment();
    return BboysDetailsFragment_instance;
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$BboysDetailsFragmentKt$lambda_1$lambda_6wch4z(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(113480494, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.fragments.ComposableSingletons$BboysDetailsFragmentKt.lambda-1.<anonymous> (BboysDetailsFragment.kt:9)');
    }
    BboysDetailScreen(componentNavigator, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BboysDetailsFragmentKt() {
    ComposableSingletons$BboysDetailsFragmentKt_instance = this;
    var tmp = this;
    tmp.epm_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(113480494, false, ComposableSingletons$BboysDetailsFragmentKt$lambda_1$lambda_6wch4z));
  }
  var ComposableSingletons$BboysDetailsFragmentKt_instance;
  function ComposableSingletons$BboysDetailsFragmentKt_getInstance() {
    if (ComposableSingletons$BboysDetailsFragmentKt_instance == null)
      new ComposableSingletons$BboysDetailsFragmentKt();
    return ComposableSingletons$BboysDetailsFragmentKt_instance;
  }
  function BboysDetailScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(66145447);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(66145447, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen (BboysDetailScreen.kt:65)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var bboy = mainViewModel.coi();
      $composer_0.a31(1742619360);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>' call
        var value_0 = mutableStateOf(true);
        this_0.h33(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var showShimmer = tmp0_group;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = Companion_getInstance_1().n7p_1;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_4.v30();
      if (!isInterface(tmp_1, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>' call
      var $composer_6 = $composer_5;
      var tmp_2 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$9 = _Dp___init__impl__ms3zkb(900);
      var tmp_3 = widthIn(tmp_2, VOID, tmp$ret$9);
      var tmp_4 = Companion_getInstance_1().z7p_1;
      $composer_6.a31(194080005);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_6.f32(bboy);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_6.w32();
      var tmp_5;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>' call
        var value_1 = BboysDetailScreen$lambda(bboy, showShimmer);
        $composer_6.h33(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_group_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_6.c31();
      LazyColumn(tmp_3, null, null, false, null, tmp_4, null, false, tmp0_group_0, $composer_6, 196614, 222);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.u31();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
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
      tmp1_safe_receiver.n38(BboysDetailScreen$lambda_0(componentNavigator, $changed));
    }
  }
  function ExpandableTextField(shortDescription, fullDescription, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1260910388);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(shortDescription) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(fullDescription) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1260910388, $dirty, -1, 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.ExpandableTextField (BboysDetailScreen.kt:189)');
      }
      $composer_0.a31(-1741669932);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.ExpandableTextField.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var expanded$delegate = tmp0_group;
      var tmp_1;
      if (ExpandableTextField$lambda(expanded$delegate)) {
        // Inline function 'androidx.compose.ui.text.buildAnnotatedString' call
        // Inline function 'kotlin.apply' call
        var this_1 = new Builder();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.ExpandableTextField.<anonymous>' call
        this_1.v6v(fullDescription + '\n');
        // Inline function 'androidx.compose.ui.text.withStyle' call
        var style = SpanStyle_init_$Create$(VOID, get_sp(10), Companion_getInstance_5().a74_1);
        var index = this_1.d6w(style);
        var tmp_2;
        try {
          this_1.v6v('\n     \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435.');
          tmp_2 = Unit_instance;
        }finally {
          this_1.f6w(index);
        }
        tmp_1 = this_1.g6w();
      } else {
        // Inline function 'androidx.compose.ui.text.buildAnnotatedString' call
        // Inline function 'kotlin.apply' call
        var this_2 = new Builder();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.ExpandableTextField.<anonymous>' call
        this_2.v6v(shortDescription + '\n');
        // Inline function 'androidx.compose.ui.text.withStyle' call
        var style_0 = SpanStyle_init_$Create$(VOID, get_sp(12), Companion_getInstance_5().a74_1);
        var index_0 = this_2.d6w(style_0);
        var tmp_3;
        try {
          this_2.v6v('\n     \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435.');
          tmp_3 = Unit_instance;
        }finally {
          this_2.f6w(index_0);
        }
        tmp_1 = this_2.g6w();
      }
      var text = tmp_1;
      var tmp_4;
      if (ExpandableTextField$lambda(expanded$delegate)) {
        tmp_4 = '\u041F\u043E\u043B\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435.';
      } else {
        tmp_4 = '\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435.';
      }
      var title = tmp_4;
      var tmp0_style = MaterialTheme_instance.pmh($composer_0, 0).gmh_1;
      var tmp1_fontFamily = Companion_getInstance_6().p74_1;
      var tmp2_textDecoration = Companion_getInstance_0().x74_1;
      var tmp_5 = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(8);
      var tmp3_modifier = padding_2(tmp_5, VOID, tmp$ret$10);
      var tmp4_textAlign = Companion_getInstance_7().i70_1;
      var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_10 = _TextOverflow___init__impl__obguoe(0);
      Text(title, tmp3_modifier, tmp_6, tmp_7, null, null, tmp1_fontFamily, tmp_8, tmp2_textDecoration, tmp4_textAlign, tmp_9, tmp_10, false, 0, 0, null, tmp0_style, $composer_0, 100663344, 0, 64700);
      var tmp_11 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_12 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(8);
      var tmp_13 = padding_2(tmp_11, tmp_12, tmp$ret$12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_14 = _Dp___init__impl__ms3zkb(2);
      var tmp_15 = Companion_instance_0.o67(listOf([new Color_0(AppColors_getInstance().ypn().dpn_1), new Color_0(AppColors_getInstance().ypn().npm_1)]));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(4);
      var tmp_16 = border(tmp_13, tmp_14, tmp_15, RoundedCornerShape(tmp$ret$14));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_17 = _Dp___init__impl__ms3zkb(2);
      var tmp_18 = Companion_getInstance_4().b68_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$16 = _Dp___init__impl__ms3zkb(4);
      var tmp_19 = border_0(tmp_16, tmp_17, tmp_18, RoundedCornerShape(tmp$ret$16));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(8);
      var tmp_20 = padding_0(tmp_19, tmp$ret$17);
      $composer_0.a31(-1741613878);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_3.w32();
      var tmp_21;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.ExpandableTextField.<anonymous>' call
        var value_0 = ExpandableTextField$lambda_1(expanded$delegate);
        this_3.h33(value_0);
        tmp_21 = value_0;
      } else {
        tmp_21 = it_0;
      }
      var tmp_22 = tmp_21;
      var tmp1_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      $composer_0.c31();
      var tmp5_modifier = clickable(tmp_20, VOID, VOID, VOID, tmp1_group);
      var tmp6_style = TextStyle_init_$Create$(VOID, ExpandableTextField$lambda(expanded$delegate) ? get_sp(14) : get_sp(18));
      var tmp_23 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_27 = _TextOverflow___init__impl__obguoe(0);
      Text_0(text, tmp5_modifier, tmp_23, tmp_24, null, null, null, tmp_25, null, null, tmp_26, tmp_27, false, 0, 0, null, null, tmp6_style, $composer_0, 0, 0, 131068);
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
      tmp2_safe_receiver.n38(ExpandableTextField$lambda_2(shortDescription, fullDescription, $changed));
    }
  }
  function ExpandableTextField$lambda($expanded$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('expanded', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $expanded$delegate.c1();
  }
  function ExpandableTextField$lambda_0($expanded$delegate, _set____db54di) {
    getLocalDelegateReference('expanded', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $expanded$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function BboysDetailScreen$lambda$lambda$lambda($showShimmer) {
    return function (it) {
      $showShimmer.a1y(false);
      return Unit_instance;
    };
  }
  function BboysDetailScreen$lambda$lambda$lambda_0($this$drawWithCache) {
    return $this$drawWithCache.y7s(BboysDetailScreen$lambda$lambda$lambda$lambda);
  }
  function BboysDetailScreen$lambda$lambda$lambda$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.s7s();
    $this$onDrawWithContent.y6k(Companion_instance_0.o67(listOf([new Color_0(AppColors_getInstance().ypn().dpn_1), new Color_0(AppColors_getInstance().ypn().npm_1)])), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_8().l66_1);
    return Unit_instance;
  }
  function BboysDetailScreen$lambda$lambda($bboy, $showShimmer) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(280448461, $changed, -1, 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous> (BboysDetailScreen.kt:89)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_0 = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding_2(tmp_0, VOID, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((6 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().v7p_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(8);
        Spacer(width(tmp_2, tmp$ret$3), $composer_5, 6);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_3 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(3);
        var modifier_1 = border(tmp_3, tmp$ret$4, Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().z67_1), new Color_0(AppColors_getInstance().ypn().lpm_1)])), RoundedCornerShape_0(50));
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m7p_1;
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
        var localMap_0 = $composer_7.u32();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_4 = $composer_8.v30();
        if (!isInterface(tmp_4, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        var tmp_5 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$7 = _Dp___init__impl__ms3zkb(150);
        var tmp_6 = clip(size(tmp_5, tmp$ret$7), get_CircleShape());
        var tmp0_showShimmer = $showShimmer.c1();
        var tmp_7 = background(tmp_6, ShimmerBrush(tmp0_showShimmer, 1300.0, $composer_10, 48, 0));
        $composer_10.a31(557249462);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_10.w32();
        var tmp_8;
        if (false || it === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = BboysDetailScreen$lambda$lambda$lambda($showShimmer);
          $composer_10.h33(value);
          tmp_8 = value;
        } else {
          tmp_8 = it;
        }
        var tmp_9 = tmp_8;
        var tmp0_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_10.c31();
        var tmp_10 = Companion_getInstance_9().y7w_1;
        var tmp_11 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage($bboy.eo6_1, 'default crossfade example', tmp_7, null, null, null, null, tmp0_group, null, null, tmp_10, 0.0, null, tmp_11, false, $composer_10, 12582960, 6, 31608);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.u31();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_3 = null;
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_11 = $composer_5;
        sourceInformationMarkerStart($composer_11, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((7 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((7 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy_1 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_11, 14 & 0 >> 3 | 112 & 0 >> 3);
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
        var factory_1 = Companion_getInstance_2().s9e_1;
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_12 = $composer_13.v30();
        if (!isInterface(tmp_12, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
          $this$with_1.h33(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_15 = $composer_14;
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_5 = wrapContentSize(fillMaxSize(Companion_instance), Companion_getInstance_1().q7p_1);
        var contentAlignment_0 = null;
        var propagateMinConstraints_0 = false;
        var $composer_16 = $composer_15;
        sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_5 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_1().m7p_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_17 = $composer_16;
        sourceInformationMarkerStart($composer_17, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_6 = Companion_instance;
        var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_17, 0);
        var localMap_2 = $composer_17.u32();
        var materialized_2 = materialize($composer_17, modifier_6);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_2 = Companion_getInstance_2().s9e_1;
        var $composer_18 = $composer_17;
        sourceInformationMarkerStart($composer_18, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_13 = $composer_18.v30();
        if (!isInterface(tmp_13, Applier)) {
          invalidApplier();
        }
        $composer_18.o31();
        if ($composer_18.j31()) {
          $composer_18.p31(factory_2);
        } else {
          $composer_18.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_2 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
        if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
          $this$with_2.h33(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_19 = $composer_18;
        sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_20 = $composer_19;
        var tmp3_text = $bboy.bo6_1;
        var tmp4_letterSpacing = get_em(0.1);
        var tmp5_fontFamily = Companion_getInstance_6().p74_1;
        var tmp0_textAlign = Companion_getInstance_7().i70_1;
        var tmp1_fontSize = get_sp(20);
        var tmp2_fontWeight = Companion_getInstance_5().a74_1;
        var tmp6_style = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_textAlign);
        var tmp7_textDecoration = Companion_getInstance_0().x74_1;
        var tmp_14 = graphicsLayer(Companion_instance, VOID, VOID, 0.99);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$16 = _Dp___init__impl__ms3zkb(8);
        var tmp_15 = padding_0(tmp_14, tmp$ret$16);
        $composer_20.a31(-1845564518);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_20.w32();
        var tmp_16;
        if (false || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = BboysDetailScreen$lambda$lambda$lambda_0;
          $composer_20.h33(value_0);
          tmp_16 = value_0;
        } else {
          tmp_16 = it_0;
        }
        var tmp_17 = tmp_16;
        var tmp0_group_0 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
        $composer_20.c31();
        var tmp8_modifier = drawWithCache(tmp_15, tmp0_group_0);
        var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp3_text, tmp8_modifier, tmp_18, tmp_19, null, null, tmp5_fontFamily, tmp4_letterSpacing, tmp7_textDecoration, null, tmp_20, tmp_21, false, 0, 0, null, tmp6_style, $composer_20, 113246208, 0, 65084);
        sourceInformationMarkerEnd($composer_19);
        $composer_18.u31();
        sourceInformationMarkerEnd($composer_18);
        sourceInformationMarkerEnd($composer_17);
        sourceInformationMarkerEnd($composer_16);
        var tmp_22;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $bboy.co6_1;
        if (charSequenceLength(this_0) > 0) {
          tmp_22 = calculateAge($bboy.co6_1).toString();
        } else {
          tmp_22 = '\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E';
        }
        StyledTextScreen('\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ', tmp_22, $composer_15, 6);
        StyledTextScreen('\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ', $bboy.co6_1, $composer_15, 6);
        StyledTextScreen('\u0421\u0442\u0440\u0430\u043D\u0430: ', $bboy.fo6_1, $composer_15, 6);
        sourceInformationMarkerEnd($composer_14);
        $composer_13.u31();
        sourceInformationMarkerEnd($composer_13);
        sourceInformationMarkerEnd($composer_12);
        sourceInformationMarkerEnd($composer_11);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.a31(64031509);
        if (get_currentPlatform().equals(PlatformType_JS_getInstance())) {
          var tmp_23 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$22 = _Dp___init__impl__ms3zkb(370);
          Spacer(height(tmp_23, tmp$ret$22), $composer_0, 6);
        }
        $composer_0.c31();
        VideoPlayer(get_currentPlatform().equals(PlatformType_JS_getInstance()) ? 250 : 0, $bboy.go6_1, $composer_0, 0);
        ExpandableTextField($bboy.io6_1, $bboy.ho6_1, $composer_0, 0);
        var tmp_24;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_24 = Unit_instance;
        }
        tmp = tmp_24;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BboysDetailScreen$lambda($bboy, $showShimmer) {
    return function ($this$LazyColumn) {
      $this$LazyColumn.zf2(VOID, VOID, ComposableLambda$invoke$ref_40(composableLambdaInstance(280448461, true, BboysDetailScreen$lambda$lambda($bboy, $showShimmer))));
      return Unit_instance;
    };
  }
  function BboysDetailScreen$lambda_0($componentNavigator, $$changed) {
    return function ($composer, $force) {
      BboysDetailScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExpandableTextField$lambda_1($expanded$delegate) {
    return function () {
      ExpandableTextField$lambda_0($expanded$delegate, !ExpandableTextField$lambda($expanded$delegate));
      return Unit_instance;
    };
  }
  function ExpandableTextField$lambda_2($shortDescription, $fullDescription, $$changed) {
    return function ($composer, $force) {
      ExpandableTextField($shortDescription, $fullDescription, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_elementDetails_ElementDetailsActivity$stable;
  function ElementDetailsActivity() {
    ElementDetailsActivity_instance = this;
    Activity.call(this, 'element_details_activity', listOf_0(ElementDetailsComponent_getInstance()), ComposableSingletons$ElementDetailsActivityKt_getInstance().bpo_1);
  }
  var ElementDetailsActivity_instance;
  function ElementDetailsActivity_getInstance() {
    if (ElementDetailsActivity_instance == null)
      new ElementDetailsActivity();
    return ElementDetailsActivity_instance;
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$ElementDetailsActivityKt$lambda_1$lambda_vkf5w7($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1402111849, $changed, -1, 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-1.<anonymous> (ElementDetailsActivity.kt:41)');
      }
      var tmp = painterResource(get_arrow_left_img(drawable_instance), $composer_0, 0);
      var tmp_0 = Companion_instance;
      $composer_0.a31(1848904906);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_1;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$ElementDetailsActivityKt$lambda_1$lambda$lambda_3gaz4y;
        $composer_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var tmp_3 = clickable(tmp_0, VOID, VOID, VOID, tmp0_group);
      Image(tmp, null, tmp_3, null, null, 0.0, null, $composer_0, 48, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ElementDetailsActivityKt$lambda_1$lambda$lambda_3gaz4y() {
    findNavHost().kor();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ElementDetailsActivityKt$lambda_2$lambda_2qsou0($this$TopAppBar, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1220107086, $changed, -1, 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-2.<anonymous> (ElementDetailsActivity.kt:54)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ElementDetailsActivityKt$lambda_3$lambda_q2ts87(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1890701316, $changed, -1, 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous> (ElementDetailsActivity.kt:28)');
    }
    var tmp0_containerColor = Companion_getInstance_4().g68_1;
    var tmp1_titleContentColor = Companion_getInstance_4().d68_1;
    var tmp2_actionIconContentColor = Companion_getInstance_4().d68_1;
    var tmp3_navigationIconContentColor = Companion_getInstance_4().d68_1;
    var tmp4_scrolledContainerColor = Companion_getInstance_4().e68_1;
    var topAppBarColors = new TopAppBarColors(tmp0_containerColor, tmp4_scrolledContainerColor, tmp3_navigationIconContentColor, tmp1_titleContentColor, tmp2_actionIconContentColor);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(2049105719, true, ComposableSingletons$ElementDetailsActivityKt$lambda_3$lambda$lambda_hpoxzw(components, topAppBarColors), $composer_0, 54);
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
      // Inline function 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
      $composer_1.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    var tmp_1 = tmp0;
    ActivityScaffold(components, null, null, tmp_1, null, null, false, false, $composer_0, 3072 | 14 & $changed, 246);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ElementDetailsActivityKt$lambda_3$lambda$lambda$lambda_lqo5mh($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-1692456487, $changed, -1, 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ElementDetailsActivity.kt:49)');
        }
        var tmp0_safe_receiver = $component.goq_1;
        $composer_0.a31(-653048313);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp_0 = stringResource(tmp0_safe_receiver, $composer_0, 0);
        }
        var tmp1_group = tmp_0;
        $composer_0.c31();
        var tmp_1 = tmp1_group == null ? '' : tmp1_group;
        var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_1, null, tmp_2, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$ElementDetailsActivityKt$lambda_3$lambda$lambda_hpoxzw($components, $topAppBarColors) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2049105719, $changed, -1, 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous> (ElementDetailsActivity.kt:39)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $components.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1692456487, true, ComposableSingletons$ElementDetailsActivityKt$lambda_3$lambda$lambda$lambda_lqo5mh(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.w32();
        var tmp;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.elementDetails.ComposableSingletons$ElementDetailsActivityKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_44(dispatchReceiver);
          $composer_1.h33(value);
          tmp = value;
        } else {
          tmp = it_0;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var tmp_1 = tmp0;
        var tmp_2 = ComposableSingletons$ElementDetailsActivityKt_getInstance().zpn_1;
        var tmp_3 = ComposableSingletons$ElementDetailsActivityKt_getInstance().apo_1;
        var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
        TopAppBar(tmp_1, null, tmp_2, tmp_3, tmp_4, null, $topAppBarColors, null, $composer_0, 3462, 178);
      }
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ElementDetailsActivityKt() {
    ComposableSingletons$ElementDetailsActivityKt_instance = this;
    var tmp = this;
    tmp.zpn_1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(-1402111849, false, ComposableSingletons$ElementDetailsActivityKt$lambda_1$lambda_vkf5w7));
    var tmp_0 = this;
    tmp_0.apo_1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(1220107086, false, ComposableSingletons$ElementDetailsActivityKt$lambda_2$lambda_2qsou0));
    var tmp_1 = this;
    tmp_1.bpo_1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(-1890701316, false, ComposableSingletons$ElementDetailsActivityKt$lambda_3$lambda_q2ts87));
  }
  var ComposableSingletons$ElementDetailsActivityKt_instance;
  function ComposableSingletons$ElementDetailsActivityKt_getInstance() {
    if (ComposableSingletons$ElementDetailsActivityKt_instance == null)
      new ComposableSingletons$ElementDetailsActivityKt();
    return ComposableSingletons$ElementDetailsActivityKt_instance;
  }
  var org_korchagin_kmp_activity_elementDetails_components_ElementDetailsComponent$stable;
  function ElementDetailsComponent() {
    ElementDetailsComponent_instance = this;
    var tmp0_label = get_app_name(string_instance);
    var tmp1_fragments = listOf_0(ElementDetailsFragment_getInstance());
    Component.call(this, 'element_details_component', ComposableSingletons$ElementDetailsComponentKt_getInstance().cpo_1, tmp0_label, tmp1_fragments);
  }
  var ElementDetailsComponent_instance;
  function ElementDetailsComponent_getInstance() {
    if (ElementDetailsComponent_instance == null)
      new ElementDetailsComponent();
    return ElementDetailsComponent_instance;
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ElementDetailsComponentKt$lambda_1$lambda_a5j26l(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(19216061, $dirty, -1, 'org.korchagin.kmp.activity.elementDetails.components.ComposableSingletons$ElementDetailsComponentKt.lambda-1.<anonymous> (ElementDetailsComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_compose_multiplatform(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ElementDetailsComponentKt() {
    ComposableSingletons$ElementDetailsComponentKt_instance = this;
    var tmp = this;
    tmp.cpo_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(19216061, false, ComposableSingletons$ElementDetailsComponentKt$lambda_1$lambda_a5j26l));
  }
  var ComposableSingletons$ElementDetailsComponentKt_instance;
  function ComposableSingletons$ElementDetailsComponentKt_getInstance() {
    if (ComposableSingletons$ElementDetailsComponentKt_instance == null)
      new ComposableSingletons$ElementDetailsComponentKt();
    return ComposableSingletons$ElementDetailsComponentKt_instance;
  }
  var org_korchagin_kmp_activity_profile_fragments_profile_ElementDetailsFragment$stable;
  function ElementDetailsFragment() {
    ElementDetailsFragment_instance = this;
    Fragment.call(this, 'event_details_fragment', VOID, ComposableSingletons$ElementDetailsFragmentKt_getInstance().dpo_1);
  }
  var ElementDetailsFragment_instance;
  function ElementDetailsFragment_getInstance() {
    if (ElementDetailsFragment_instance == null)
      new ElementDetailsFragment();
    return ElementDetailsFragment_instance;
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$ElementDetailsFragmentKt$lambda_1$lambda_ml6x7a(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1358640931, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.profile.ComposableSingletons$ElementDetailsFragmentKt.lambda-1.<anonymous> (ElementDetailsFragment.kt:9)');
    }
    ElementDetailsScreen(componentNavigator, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ElementDetailsFragmentKt() {
    ComposableSingletons$ElementDetailsFragmentKt_instance = this;
    var tmp = this;
    tmp.dpo_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(1358640931, false, ComposableSingletons$ElementDetailsFragmentKt$lambda_1$lambda_ml6x7a));
  }
  var ComposableSingletons$ElementDetailsFragmentKt_instance;
  function ComposableSingletons$ElementDetailsFragmentKt_getInstance() {
    if (ComposableSingletons$ElementDetailsFragmentKt_instance == null)
      new ComposableSingletons$ElementDetailsFragmentKt();
    return ComposableSingletons$ElementDetailsFragmentKt_instance;
  }
  function ElementDetailsScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1632860860);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1632860860, $changed, -1, 'org.korchagin.kmp.activity.elementDetails.fragments.screen.ElementDetailsScreen (ElementDetailsScreen.kt:43)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var element = mainViewModel.aoi();
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = Companion_getInstance_1().n7p_1;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp = $composer_4.v30();
      if (!isInterface(tmp, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.elementDetails.fragments.screen.ElementDetailsScreen.<anonymous>' call
      var $composer_6 = $composer_5;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var tmp_0 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(900);
      var modifier_1 = widthIn(tmp_0, VOID, tmp$ret$5);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().y7p_1;
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_7, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_8, 0);
      var localMap_0 = $composer_8.u32();
      var materialized_0 = materialize($composer_8, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().s9e_1;
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_9.v30();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_9.o31();
      if ($composer_9.j31()) {
        $composer_9.p31(factory_0);
      } else {
        $composer_9.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.elementDetails.fragments.screen.ElementDetailsScreen.<anonymous>.<anonymous>' call
      var $composer_11 = $composer_10;
      println('element = ' + element.toString());
      VideoPlayer(100, element.xo6_1, $composer_11, 6);
      $composer_11.a31(1642372054);
      if (get_currentPlatform().equals(PlatformType_JS_getInstance())) {
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(450);
        Spacer(height(tmp_2, tmp$ret$8), $composer_11, 6);
      }
      $composer_11.c31();
      var tmp_3 = mainViewModel.boi() / 10 | 0;
      DescriptionSection(element, tmp_3, null, $composer_11, 0, 4);
      sourceInformationMarkerEnd($composer_10);
      $composer_9.u31();
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.u31();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
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
      tmp0_safe_receiver.n38(ElementDetailsScreen$lambda(componentNavigator, $changed));
    }
  }
  function DescriptionSection(element, rating, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1220979804);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f2r(element) : $composer_0.f32(element)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j32(rating) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1220979804, $dirty, -1, 'org.korchagin.kmp.activity.elementDetails.fragments.screen.DescriptionSection (ElementDetailsScreen.kt:76)');
      }
      var tmp = fillMaxSize(modifier_0._v);
      $composer_0.a31(856024738);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(($dirty & 112) === 32 | (($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.f32(element))));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.elementDetails.fragments.screen.DescriptionSection.<anonymous>' call
        var value = DescriptionSection$lambda(rating, element);
        this_0.h33(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c31();
      LazyColumn(tmp, null, null, false, null, null, null, false, tmp0_group, $composer_0, 0, 254);
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
      tmp1_safe_receiver.n38(DescriptionSection$lambda_0(element, rating, modifier_0, $changed, $default));
    }
  }
  function ElementDetailsScreen$lambda($componentNavigator, $$changed) {
    return function ($composer, $force) {
      ElementDetailsScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function DescriptionSection$lambda$lambda($rating, $element) {
    return function ($this$items, index, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 48) === 0) {
        $dirty = $dirty | ($composer_0.j32(index) ? 32 : 16);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 145) === 144) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(492197633, $dirty, -1, 'org.korchagin.kmp.activity.elementDetails.fragments.screen.DescriptionSection.<anonymous>.<anonymous>.<anonymous> (ElementDetailsScreen.kt:82)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_1 = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
        var tmp_2 = background(padding_0(tmp_1, tmp$ret$0), $rating >= (index + 1 | 0) ? Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().d68_1), new Color_0(Companion_getInstance_4().f68_1)]), 350.0) : Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().d68_1), new Color_0(Companion_getInstance_4().c68_1)]), 350.0), get_CircleShape());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(3);
        var modifier = border_0(tmp_2, tmp$ret$1, Companion_getInstance_4().b68_1, get_CircleShape());
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_1().w7p_1;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((2 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().v7p_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.elementDetails.fragments.screen.DescriptionSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp_4 = painterResource(setDescriptionImage(index), $composer_5, 0);
        var tmp_5 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(80);
        var tmp_6 = width(tmp_5, tmp$ret$4);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$5 = _Dp___init__impl__ms3zkb(80);
        var tmp_7 = height(tmp_6, tmp$ret$5);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(10);
        var tmp_8 = padding_0(tmp_7, tmp$ret$6);
        Image(tmp_4, '', tmp_8, null, null, 0.0, null, $composer_5, 432, 120);
        var tmp_9 = fillMaxWidth(Companion_instance, 1.0);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$7 = _Dp___init__impl__ms3zkb(5);
        var tmp0_modifier = padding_0(tmp_9, tmp$ret$7);
        var tmp1_text = setDescriptionText(index, $element);
        var tmp2_color = Companion_getInstance_4().z67_1;
        var tmp3_fontSize = get_sp(16);
        var tmp4_letterSpacing = get_sp(1);
        var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_11 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp1_text, tmp0_modifier, tmp2_color, tmp3_fontSize, null, null, null, tmp4_letterSpacing, null, null, tmp_10, tmp_11, false, 0, 0, null, null, $composer_5, 12586416, 0, 130928);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_instance;
        }
        tmp_0 = tmp_12;
      } else {
        $composer_0.c2u();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function DescriptionSection$lambda($rating, $element) {
    return function ($this$LazyColumn) {
      $this$LazyColumn.bf3(10, VOID, VOID, ComposableLambda$invoke$ref_48(composableLambdaInstance(492197633, true, DescriptionSection$lambda$lambda($rating, $element))));
      return Unit_instance;
    };
  }
  function DescriptionSection$lambda_0($element, $rating, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      DescriptionSection($element, $rating, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_main_MainActivity$stable;
  function MainActivity() {
    MainActivity_instance = this;
    Activity.call(this, 'main_activity', listOf([HomeComponent_getInstance(), RatingsComponent_getInstance(), BboysComponent_getInstance()]), ComposableSingletons$MainActivityKt_getInstance().epo_1);
  }
  var MainActivity_instance;
  function MainActivity_getInstance() {
    if (MainActivity_instance == null)
      new MainActivity();
    return MainActivity_instance;
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda_wcf918(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1260934621, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous> (MainActivity.kt:51)');
    }
    $composer_0.a31(-342186723);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
      var value = mutableStateOf(null);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    var navigator$delegate = tmp0_group;
    $composer_0.a31(-342184163);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.c31();
    var backStack$delegate = tmp1_group;
    $composer_0.a31(-342182050);
    if (!(invoke$lambda(navigator$delegate) == null)) {
      var backStackEntry$delegate = currentBackStackEntryAsState(ensureNotNull(invoke$lambda(navigator$delegate)), $composer_0, 0);
      invoke$lambda_2(backStack$delegate, invoke$lambda_3(backStackEntry$delegate));
    }
    $composer_0.c31();
    var screenWidth = ScreenSizeHandler_instance.fpo($composer_0, 6).jb_1;
    var screenHeight = ScreenSizeHandler_instance.fpo($composer_0, 6).kb_1;
    var isLargeScreen = {_v: screenWidth > screenHeight};
    // Inline function 'org.koin.compose.koinInject' call
    var qualifier = null;
    var scope = null;
    var parameters = null;
    var $composer_1 = $composer_0;
    $composer_1.y30(414512006);
    if (!((7 & 1) === 0))
      qualifier = null;
    if (!((7 & 2) === 0))
      scope = currentKoinScope($composer_1, 0);
    if (!((7 & 4) === 0))
      parameters = null;
    var currentParameters$delegate = rememberUpdatedState(parameters, $composer_1, 14 & 0 >> 6);
    $composer_1.y30(855641119);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.f2r(qualifier) | $composer_1.f2r(scope));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_1.w32();
    var tmp_3;
    if (invalid || it_1 === Companion_getInstance().l2u_1) {
      // Inline function 'org.koin.compose.koinInject.<anonymous>' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var this_0 = scope;
      var qualifier_0 = qualifier;
      var parameters_0 = ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn(currentParameters$delegate);
      var value_1 = this_0.gu(getKClass(MainViewModel), qualifier_0, parameters_0);
      $composer_1.h33(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_1.z30();
    $composer_1.z30();
    var viewModel = tmp1_group_0;
    var tmp0_containerColor = Companion_getInstance_4().g68_1;
    var tmp1_titleContentColor = Companion_getInstance_4().d68_1;
    var tmp2_actionIconContentColor = Companion_getInstance_4().d68_1;
    var tmp3_navigationIconContentColor = Companion_getInstance_4().d68_1;
    var tmp4_scrolledContainerColor = Companion_getInstance_4().e68_1;
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
    var invalid_0 = $composer_2.f2r(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_2.w32();
    var tmp_5;
    if (invalid_0 || it_2 === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_2 = ComposableLambda$invoke$ref_50(dispatchReceiver);
      $composer_2.h33(value_2);
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
    var invalid_1 = $composer_3.f2r(dispatchReceiver_0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_3.w32();
    var tmp_8;
    if (invalid_1 || it_3 === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_3 = ComposableLambda$invoke$ref_53(dispatchReceiver_0);
      $composer_3.h33(value_3);
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
    var invalid_2 = $composer_4.f2r(dispatchReceiver_1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_4.w32();
    var tmp_11;
    if (invalid_2 || it_4 === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
      var value_4 = ComposableLambda$invoke$ref_54(dispatchReceiver_1);
      $composer_4.h33(value_4);
      tmp_11 = value_4;
    } else {
      tmp_11 = it_4;
    }
    var tmp_12 = tmp_11;
    var tmp0_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    sourceInformationMarkerEnd($composer_4);
    var tmp_13 = tmp0_1;
    var tmp_14 = isLargeScreen._v;
    ActivityScaffold(components, null, tmp_7, tmp_10, tmp_13, null, tmp_14, false, $composer_0, 28032 | 14 & $changed, 162);
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
    return $navigator$delegate.c1();
  }
  function invoke$lambda_0($navigator$delegate, _set____db54di) {
    getLocalDelegateReference('navigator', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $navigator$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_1($backStack$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $backStack$delegate.c1();
  }
  function invoke$lambda_2($backStack$delegate, _set____db54di) {
    getLocalDelegateReference('backStack', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $backStack$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_3($backStackEntry$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('backStackEntry', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $backStackEntry$delegate.c1();
  }
  function invoke$lambda_4($currentParameters$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentParameters', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentParameters$delegate.c1();
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn($currentParameters$delegate) {
    return function () {
      var tmp0_safe_receiver = invoke$lambda_4($currentParameters$delegate);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      return tmp1_elvis_lhs == null ? emptyParametersHolder() : tmp1_elvis_lhs;
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation) {
    this.opo_1 = $isLargeScreen;
    this.ppo_1 = $screenWidth;
    this.qpo_1 = $screenHeight;
    this.rpo_1 = $viewModel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          this.opo_1._v = this.ppo_1 > this.qpo_1;
          this.rpo_1.woh(this.ppo_1);
          this.rpo_1.xoh(this.qpo_1);
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
  protoOf(ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a).b20 = function ($this$LaunchedEffect, completion) {
    var i = new ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a(this.opo_1, this.ppo_1, this.qpo_1, this.rpo_1, completion);
    i.spo_1 = $this$LaunchedEffect;
    return i;
  };
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a_0($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation) {
    var i = new ComposableSingletons$MainActivityKt$lambda_1$lambda$slambda_vars2a($isLargeScreen, $screenWidth, $screenHeight, $viewModel, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_0($components, $navigator$delegate) {
    return function (componentNavigator, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(297781341, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:120)');
      }
      invoke$lambda_0($navigator$delegate, componentNavigator.pot());
      SimpleBottomNavigationBar($components, componentNavigator, $composer_0, 112 & $changed << 3);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(2128262390, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous> (MainActivity.kt:90)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = null;
        var horizontalArrangement = null;
        var verticalAlignment = Companion_getInstance_1().w7p_1;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((3 & 1) === 0))
          modifier = Companion_instance;
        if (!((3 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((3 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().v7p_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp_1 = painterResource(get_app_logo(drawable_instance), $composer_5, 0);
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$2 = _Dp___init__impl__ms3zkb(46);
        var tmp_3 = clip(size(tmp_2, tmp$ret$2), get_CircleShape());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(3);
        var tmp_4 = border_0(tmp_3, tmp$ret$3, Companion_getInstance_4().b68_1, get_CircleShape());
        Image(tmp_1, null, tmp_4, null, null, 0.0, null, $composer_5, 48, 120);
        var tmp_5 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(8);
        var tmp2_modifier = padding_1(tmp_5, tmp$ret$4);
        var tmp0_safe_receiver = $component.goq_1;
        $composer_5.a31(1067986590);
        var tmp_6;
        if (tmp0_safe_receiver == null) {
          tmp_6 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp_6 = stringResource(tmp0_safe_receiver, $composer_5, 0);
        }
        var tmp1_group = tmp_6;
        $composer_5.c31();
        var tmp3_text = tmp1_group == null ? '' : tmp1_group;
        var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_11 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp3_text, tmp2_modifier, tmp_7, tmp_8, null, null, null, tmp_9, null, null, tmp_10, tmp_11, false, 0, 0, null, null, $composer_5, 48, 0, 131068);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_instance;
        }
        tmp = tmp_12;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c_0($component) {
    return function ($this$TopAppBar, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(1080640683, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous> (MainActivity.kt:108)');
        }
        var tmp0_subject = $component;
        $composer_0.a31(714326351);
        if (equals(tmp0_subject, RatingsComponent_getInstance())) {
          TopBarRatingActions($composer_0, 0);
        }
        $composer_0.c31();
        ProfileIcon($composer_0, 0);
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
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_1($components, $topAppBarColors, $backStack$delegate) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1636425058, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:85)');
      }
      if (!(invoke$lambda_1($backStack$delegate) == null)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $components.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $composer_0.a31(-1517112988);
          if (element.eoq_1 === ensureNotNull(invoke$lambda_1($backStack$delegate)).i53_1.j55_1) {
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(2128262390, true, ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c(element), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_1 = $composer_0;
            sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = $composer_1.f2r(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_0 = $composer_1.w32();
            var tmp;
            if (invalid || it_0 === Companion_getInstance().l2u_1) {
              // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_51(dispatchReceiver);
              $composer_1.h33(value);
              tmp = value;
            } else {
              tmp = it_0;
            }
            var tmp_0 = tmp;
            var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            sourceInformationMarkerEnd($composer_1);
            var tmp_1 = tmp0;
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver_0 = rememberComposableLambda(1080640683, true, ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda$lambda_gkvl0c_0(element), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_0 = $composer_2.f2r(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_1 = $composer_2.w32();
            var tmp_2;
            if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
              // Inline function 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value_0 = ComposableLambda$invoke$ref_52(dispatchReceiver_0);
              $composer_2.h33(value_0);
              tmp_2 = value_0;
            } else {
              tmp_2 = it_1;
            }
            var tmp_3 = tmp_2;
            var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            var tmp_4 = tmp0_0;
            var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
            TopAppBar(tmp_1, null, null, tmp_4, tmp_5, null, $topAppBarColors, null, $composer_0, 3078, 182);
          }
          $composer_0.c31();
        }
      }
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt$lambda_1$lambda$lambda_mqjwmn_2($components, $navigator$delegate) {
    return function (componentNavigator, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(724335839, $changed, -1, 'org.korchagin.kmp.activity.main.ComposableSingletons$MainActivityKt.lambda-1.<anonymous>.<anonymous> (MainActivity.kt:127)');
      }
      invoke$lambda_0($navigator$delegate, componentNavigator.pot());
      SimpleNavigationRail($components, componentNavigator, false, $composer_0, 112 & $changed << 3, 4);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainActivityKt() {
    ComposableSingletons$MainActivityKt_instance = this;
    var tmp = this;
    tmp.epo_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(-1260934621, false, ComposableSingletons$MainActivityKt$lambda_1$lambda_wcf918));
  }
  var ComposableSingletons$MainActivityKt_instance;
  function ComposableSingletons$MainActivityKt_getInstance() {
    if (ComposableSingletons$MainActivityKt_instance == null)
      new ComposableSingletons$MainActivityKt();
    return ComposableSingletons$MainActivityKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_BboysComponent$stable;
  function BboysComponent() {
    BboysComponent_instance = this;
    var tmp0_label = get_hall_of_fame_title(string_instance);
    var tmp1_fragments = listOf_0(BboysFragment_getInstance());
    Component.call(this, 'bboys_component', ComposableSingletons$BboysComponentKt_getInstance().tpo_1, tmp0_label, tmp1_fragments);
  }
  var BboysComponent_instance;
  function BboysComponent_getInstance() {
    if (BboysComponent_instance == null)
      new BboysComponent();
    return BboysComponent_instance;
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$BboysComponentKt$lambda_1$lambda_hafj2g(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1350503048, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$BboysComponentKt.lambda-1.<anonymous> (BboysComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_heart(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BboysComponentKt() {
    ComposableSingletons$BboysComponentKt_instance = this;
    var tmp = this;
    tmp.tpo_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(1350503048, false, ComposableSingletons$BboysComponentKt$lambda_1$lambda_hafj2g));
  }
  var ComposableSingletons$BboysComponentKt_instance;
  function ComposableSingletons$BboysComponentKt_getInstance() {
    if (ComposableSingletons$BboysComponentKt_instance == null)
      new ComposableSingletons$BboysComponentKt();
    return ComposableSingletons$BboysComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_HomeComponent$stable;
  function HomeComponent() {
    HomeComponent_instance = this;
    var tmp0_label = get_home_title(string_instance);
    var tmp1_fragments = listOf_0(HomeFragment_getInstance());
    Component.call(this, 'home_component', ComposableSingletons$HomeComponentKt_getInstance().upo_1, tmp0_label, tmp1_fragments);
  }
  var HomeComponent_instance;
  function HomeComponent_getInstance() {
    if (HomeComponent_instance == null)
      new HomeComponent();
    return HomeComponent_instance;
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeComponentKt$lambda_1$lambda_b2x2h8(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-348734468, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$HomeComponentKt.lambda-1.<anonymous> (HomeComponent.kt:16)');
      }
      SimpleNavIcon(selected, get_main(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HomeComponentKt() {
    ComposableSingletons$HomeComponentKt_instance = this;
    var tmp = this;
    tmp.upo_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(-348734468, false, ComposableSingletons$HomeComponentKt$lambda_1$lambda_b2x2h8));
  }
  var ComposableSingletons$HomeComponentKt_instance;
  function ComposableSingletons$HomeComponentKt_getInstance() {
    if (ComposableSingletons$HomeComponentKt_instance == null)
      new ComposableSingletons$HomeComponentKt();
    return ComposableSingletons$HomeComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_components_RatingsComponent$stable;
  function RatingsComponent() {
    RatingsComponent_instance = this;
    var tmp0_label = get_ratings_title(string_instance);
    var tmp1_fragments = listOf_0(RatingsFragment_getInstance());
    Component.call(this, 'ratings_component', ComposableSingletons$RatingsComponentKt_getInstance().vpo_1, tmp0_label, tmp1_fragments);
  }
  var RatingsComponent_instance;
  function RatingsComponent_getInstance() {
    if (RatingsComponent_instance == null)
      new RatingsComponent();
    return RatingsComponent_instance;
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$RatingsComponentKt$lambda_1$lambda_9jiav9(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-905989336, $dirty, -1, 'org.korchagin.kmp.activity.main.components.ComposableSingletons$RatingsComponentKt.lambda-1.<anonymous> (RatingsComponent.kt:15)');
      }
      SimpleNavIcon(selected, get_rating(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RatingsComponentKt() {
    ComposableSingletons$RatingsComponentKt_instance = this;
    var tmp = this;
    tmp.vpo_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-905989336, false, ComposableSingletons$RatingsComponentKt$lambda_1$lambda_9jiav9));
  }
  var ComposableSingletons$RatingsComponentKt_instance;
  function ComposableSingletons$RatingsComponentKt_getInstance() {
    if (ComposableSingletons$RatingsComponentKt_instance == null)
      new ComposableSingletons$RatingsComponentKt();
    return ComposableSingletons$RatingsComponentKt_instance;
  }
  var org_korchagin_kmp_activity_main_fragments_bboys_BboysFragment$stable;
  function BboysFragment() {
    BboysFragment_instance = this;
    Fragment.call(this, 'bboys_fragment', VOID, ComposableSingletons$BboysFragmentKt_getInstance().wpo_1);
  }
  var BboysFragment_instance;
  function BboysFragment_getInstance() {
    if (BboysFragment_instance == null)
      new BboysFragment();
    return BboysFragment_instance;
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$BboysFragmentKt$lambda_1$lambda_8lza7l(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1897544731, $changed, -1, 'org.korchagin.kmp.activity.main.fragments.bboys.ComposableSingletons$BboysFragmentKt.lambda-1.<anonymous> (BboysFragment.kt:8)');
    }
    BboysScreen(componentNavigator, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BboysFragmentKt() {
    ComposableSingletons$BboysFragmentKt_instance = this;
    var tmp = this;
    tmp.wpo_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-1897544731, false, ComposableSingletons$BboysFragmentKt$lambda_1$lambda_8lza7l));
  }
  var ComposableSingletons$BboysFragmentKt_instance;
  function ComposableSingletons$BboysFragmentKt_getInstance() {
    if (ComposableSingletons$BboysFragmentKt_instance == null)
      new ComposableSingletons$BboysFragmentKt();
    return ComposableSingletons$BboysFragmentKt_instance;
  }
  function BboysScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1187815282);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1187815282, $changed, -1, 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen (BboysScreen.kt:54)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      $composer_0.a31(1982037908);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>' call
        var value_0 = mutableStateOf(true);
        this_0.h33(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var showShimmer = tmp0_group;
      var tmp_1 = emptyList();
      var bboysList$delegate = collectAsState(mainViewModel.qoa_1, tmp_1, null, $composer_0, 48, 2);
      var currentPupil$delegate = collectAsState(mainViewModel.soa_1, null, null, $composer_0, 48, 2);
      var tmp0_elvis_lhs = BboysScreen$lambda_0(currentPupil$delegate);
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp1_safe_receiver = $composer_0.w33();
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.n38(BboysScreen$lambda_1(componentNavigator, $changed));
        }
        return Unit_instance;
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      var pupil = tmp_2;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = BboysScreen$lambda_2;
      }
      var composer = $composer_2;
      sourceInformationMarkerStart($composer_2, -954207516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.w32();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_1 = createCompositionCoroutineScope(getContext(), composer);
        $composer_2.h33(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_2);
      var scope_0 = tmp1_group;
      var infiniteTransition = rememberInfiniteTransition(null, $composer_0, 0, 1);
      var tmp_5 = infiniteRepeatable(tween(1000, VOID, get_LinearEasing()));
      var rotationValue = animateFloat(infiniteTransition, 0.0, 360.0, tmp_5, null, $composer_0, 4536, 8);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = Companion_getInstance_1().n7p_1;
      var propagateMinConstraints = false;
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_4, 0);
      var localMap = $composer_4.u32();
      var materialized = materialize($composer_4, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_6 = $composer_5.v30();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_5.o31();
      if ($composer_5.j31()) {
        $composer_5.p31(factory);
      } else {
        $composer_5.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>' call
      var $composer_7 = $composer_6;
      var tmp_7 = new Fixed(3);
      var tmp_8 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(900);
      var tmp_9 = background(widthIn(tmp_8, VOID, tmp$ret$14), Companion_instance_0.q67(listOf([new Color_0(Companion_getInstance_4().d68_1), new Color_0(Companion_getInstance_4().c68_1)])));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0_start = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1_end = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp2_top = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp3_bottom = _Dp___init__impl__ms3zkb(90);
      var tmp_10 = PaddingValues(tmp0_start, tmp2_top, tmp1_end, tmp3_bottom);
      var tmp_11 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$19 = _Dp___init__impl__ms3zkb(8);
      var tmp_12 = tmp_11.qbw(tmp$ret$19);
      $composer_7.a31(-1821421237);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!($composer_7.f2r(bboysList$delegate) | $composer_7.f32(pupil)) | $composer_7.f2r(rotationValue)) | $composer_7.f32(scope_0)) | $composer_7.f32(mainViewModel));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_7.w32();
      var tmp_13;
      if (invalid || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>.<anonymous>' call
        var value_2 = BboysScreen$lambda_3(bboysList$delegate, pupil, rotationValue, showShimmer, scope_0, mainViewModel);
        $composer_7.h33(value_2);
        tmp_13 = value_2;
      } else {
        tmp_13 = it_1;
      }
      var tmp_14 = tmp_13;
      var tmp0_group_0 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_7.c31();
      LazyVerticalGrid(tmp_7, tmp_9, null, tmp_10, false, tmp_12, null, null, false, tmp0_group_0, $composer_7, 196656, 468);
      sourceInformationMarkerEnd($composer_6);
      $composer_5.u31();
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
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
      tmp2_safe_receiver.n38(BboysScreen$lambda_4(componentNavigator, $changed));
    }
  }
  function BboysScreen$lambda($bboysList$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bboysList', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $bboysList$delegate.c1();
  }
  function BboysScreen$lambda_0($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.c1();
  }
  function BboysScreen$lambda_1($componentNavigator, $$changed) {
    return function ($composer, $force) {
      BboysScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BboysScreen$lambda_2() {
    return EmptyCoroutineContext_getInstance();
  }
  function BboysScreen$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.u(index));
    };
  }
  function BboysScreen$lambda$lambda_0($span, $items) {
    return function ($this$null, it) {
      return $span($this$null, it, $items.u(it));
    };
  }
  function BboysScreen$lambda$lambda_1($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.grid.itemsIndexed.<anonymous>' call
      $items.u(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function BboysScreen$lambda$lambda$lambda($rotationValue) {
    return function ($this$drawBehind) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.rotate' call
      var degrees = $rotationValue.c1();
      var pivot = $this$drawBehind.l6l();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = $this$drawBehind.v6k();
      var previousSize = $this$with.z5g();
      $this$with.q5w().n69();
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.rotate.<anonymous>' call
        $this$with.p6k().p6l(degrees, pivot);
        // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $this$drawBehind.e6l(Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().d68_1), new Color_0(Companion_getInstance_4().c68_1)])), VOID, VOID, VOID, new Stroke(10.0));
      }finally {
        $this$with.q5w().o69();
        $this$with.o6k(previousSize);
      }
      return Unit_instance;
    };
  }
  function BboysScreen$lambda$lambda$lambda$slambda($mainViewModel, $bboy, resultContinuation) {
    this.fpp_1 = $mainViewModel;
    this.gpp_1 = $bboy;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BboysScreen$lambda$lambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(BboysScreen$lambda$lambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BboysScreen$lambda$lambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          this.fpp_1.doi(this.gpp_1);
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
  protoOf(BboysScreen$lambda$lambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new BboysScreen$lambda$lambda$lambda$slambda(this.fpp_1, this.gpp_1, completion);
    i.hpp_1 = $this$launch;
    return i;
  };
  function BboysScreen$lambda$lambda$lambda$slambda_0($mainViewModel, $bboy, resultContinuation) {
    var i = new BboysScreen$lambda$lambda$lambda$slambda($mainViewModel, $bboy, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BboysScreen$lambda$lambda$lambda_0($scope, $pupil, $bboy, $mainViewModel) {
    return function () {
      launch($scope, VOID, VOID, BboysScreen$lambda$lambda$lambda$slambda_0($mainViewModel, $bboy, null));
      var tmp;
      if (numberToInt($pupil.uo7_1) >= toInt($bboy.do6_1)) {
        findNavHost().hor(BboysDetailsActivity_getInstance());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BboysScreen$lambda$lambda$lambda_1($showShimmer) {
    return function (it) {
      $showShimmer.a1y(false);
      return Unit_instance;
    };
  }
  function BboysScreen$lambda$lambda_2($items, $pupil, $rotationValue, $showShimmer, $scope, $mainViewModel) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C498@21519L26:LazyGridDsl.kt#7791vq');
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
          traceEventStart(1229287273, $dirty, -1, 'androidx.compose.foundation.lazy.grid.itemsIndexed.<anonymous> (LazyGridDsl.kt:498)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var bboy = $items.u(it);
        var $changed_0 = 14 & $dirty | 112 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.a31(-1490866726);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
        var modifier = border(tmp_2, tmp$ret$0, Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().z67_1), new Color_0(Companion_getInstance_4().a68_1)])), RoundedCornerShape_0(50));
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m7p_1;
        if (!((6 & 4) === 0))
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
        var factory = Companion_getInstance_2().s9e_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.v30();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        var tmp_4 = numberToInt($pupil.uo7_1) >= toInt(bboy.do6_1) ? bboy.eo6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        var tmp_5 = Companion_instance;
        $composer_6.a31(906302613);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_6.f2r($rotationValue);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_6.w32();
        var tmp_6;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = BboysScreen$lambda$lambda$lambda($rotationValue);
          $composer_6.h33(value);
          tmp_6 = value;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_6.c31();
        var tmp_8 = aspectRatio(drawBehind(tmp_5, tmp0_group), 1.0);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$7 = _Dp___init__impl__ms3zkb(130);
        var tmp_9 = size(tmp_8, tmp$ret$7);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(2);
        var tmp_10 = clip(padding_0(tmp_9, tmp$ret$8), get_CircleShape());
        var tmp0_showShimmer = $showShimmer.c1();
        var tmp_11 = background(tmp_10, ShimmerBrush(tmp0_showShimmer, 1300.0, $composer_6, 48, 0));
        $composer_6.a31(906331885);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!(!!($composer_6.f32($scope) | $composer_6.f32($mainViewModel)) | (($changed_0 & 896 ^ 384) > 256 && $composer_6.f32(bboy) || ($changed_0 & 384) === 256)) | $composer_6.f32($pupil));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_6.w32();
        var tmp_12;
        if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = BboysScreen$lambda$lambda$lambda_0($scope, $pupil, bboy, $mainViewModel);
          $composer_6.h33(value_0);
          tmp_12 = value_0;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp1_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_6.c31();
        var tmp_14 = clickable(tmp_11, VOID, VOID, VOID, tmp1_group);
        $composer_6.a31(906345003);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_6.w32();
        var tmp_15;
        if (false || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = BboysScreen$lambda$lambda$lambda_1($showShimmer);
          $composer_6.h33(value_1);
          tmp_15 = value_1;
        } else {
          tmp_15 = it_2;
        }
        var tmp_16 = tmp_15;
        var tmp2_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        $composer_6.c31();
        var tmp_17 = Companion_getInstance_9().y7w_1;
        var tmp_18 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage(tmp_4, bboy.bo6_1, tmp_14, null, null, null, null, tmp2_group, null, null, tmp_17, 0.0, null, tmp_18, false, $composer_6, 12582912, 6, 31608);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.u31();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.c31();
        var tmp_19;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_19 = Unit_instance;
        }
        tmp_1 = tmp_19;
      } else {
        $composer_0.c2u();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BboysScreen$lambda_3($bboysList$delegate, $pupil, $rotationValue, $showShimmer, $scope, $mainViewModel) {
    return function ($this$LazyVerticalGrid) {
      // Inline function 'androidx.compose.foundation.lazy.grid.itemsIndexed' call
      var items = BboysScreen$lambda($bboysList$delegate);
      var tmp = items.p();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = BboysScreen$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2;
      if (!(null == null)) {
        tmp_2 = BboysScreen$lambda$lambda_0(null, items);
      } else {
        tmp_2 = null;
      }
      var tmp_3 = tmp_2;
      var tmp_4 = BboysScreen$lambda$lambda_1(items);
      $this$LazyVerticalGrid.sfh(tmp, tmp_1, tmp_3, tmp_4, ComposableLambda$invoke$ref_59(composableLambdaInstance(1229287273, true, BboysScreen$lambda$lambda_2(items, $pupil, $rotationValue, $showShimmer, $scope, $mainViewModel))));
      return Unit_instance;
    };
  }
  function BboysScreen$lambda_4($componentNavigator, $$changed) {
    return function ($composer, $force) {
      BboysScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_main_fragments_home_HomeFragment$stable;
  function HomeFragment() {
    HomeFragment_instance = this;
    Fragment.call(this, 'home_fragment', VOID, ComposableSingletons$HomeFragmentKt_getInstance().ipp_1);
  }
  var HomeFragment_instance;
  function HomeFragment_getInstance() {
    if (HomeFragment_instance == null)
      new HomeFragment();
    return HomeFragment_instance;
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$HomeFragmentKt$lambda_1$lambda_u5bbh9(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1261141821, $changed, -1, 'org.korchagin.kmp.activity.main.fragments.home.ComposableSingletons$HomeFragmentKt.lambda-1.<anonymous> (HomeFragment.kt:8)');
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
    tmp.ipp_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(1261141821, false, ComposableSingletons$HomeFragmentKt$lambda_1$lambda_u5bbh9));
  }
  var ComposableSingletons$HomeFragmentKt_instance;
  function ComposableSingletons$HomeFragmentKt_getInstance() {
    if (ComposableSingletons$HomeFragmentKt_instance == null)
      new ComposableSingletons$HomeFragmentKt();
    return ComposableSingletons$HomeFragmentKt_instance;
  }
  function HomeScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1047716758);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1047716758, $changed, -1, 'org.korchagin.kmp.activity.main.fragments.home.screen.HomeScreen (HomeScreen.kt:37)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var currentPupil$delegate = collectAsState(mainViewModel.soa_1, null, null, $composer_0, 48, 2);
      var freezeElements$delegate = collectAsState(mainViewModel.ioa_1, null, null, $composer_0, 48, 2);
      var powerElements$delegate = collectAsState(mainViewModel.koa_1, null, null, $composer_0, 48, 2);
      var ofpElements$delegate = collectAsState(mainViewModel.moa_1, null, null, $composer_0, 48, 2);
      var stretchElements$delegate = collectAsState(mainViewModel.ooa_1, null, null, $composer_0, 48, 2);
      var tmp0_elvis_lhs = HomeScreen$lambda(currentPupil$delegate);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp1_safe_receiver = $composer_0.w33();
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.n38(HomeScreen$lambda_6(componentNavigator, $changed));
        }
        return Unit_instance;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var pupil = tmp;
      var tmp1_elvis_lhs = HomeScreen$lambda_0(freezeElements$delegate);
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp2_safe_receiver = $composer_0.w33();
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.n38(HomeScreen$lambda_7(componentNavigator, $changed));
        }
        return Unit_instance;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var freezes = tmp_0;
      var tmp2_elvis_lhs = HomeScreen$lambda_1(powerElements$delegate);
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp3_safe_receiver = $composer_0.w33();
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.n38(HomeScreen$lambda_8(componentNavigator, $changed));
        }
        return Unit_instance;
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var powerMoves = tmp_1;
      var tmp3_elvis_lhs = HomeScreen$lambda_2(ofpElements$delegate);
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp4_safe_receiver = $composer_0.w33();
        if (tmp4_safe_receiver == null)
          null;
        else {
          tmp4_safe_receiver.n38(HomeScreen$lambda_9(componentNavigator, $changed));
        }
        return Unit_instance;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      var ofp = tmp_2;
      var tmp4_elvis_lhs = HomeScreen$lambda_3(stretchElements$delegate);
      var tmp_3;
      if (tmp4_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp5_safe_receiver = $composer_0.w33();
        if (tmp5_safe_receiver == null)
          null;
        else {
          tmp5_safe_receiver.n38(HomeScreen$lambda_10(componentNavigator, $changed));
        }
        return Unit_instance;
      } else {
        tmp_3 = tmp4_elvis_lhs;
      }
      var stretch = tmp_3;
      $composer_0.a31(-1365698785);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_4;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.HomeScreen.<anonymous>' call
        var value_0 = mutableIntStateOf(ElementsTab_FREEZE_getInstance().z2_1);
        this_0.h33(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.c31();
      var selectedTabIndex$delegate = tmp0_group;
      var imageWithTexts = listOf([new ImageWithText(painterResource(get_baby(drawable_instance), $composer_0, 0), stringResource(get_freeze_title(string_instance), $composer_0, 0)), new ImageWithText(painterResource(get_airflare(drawable_instance), $composer_0, 0), stringResource(get_power_move_title(string_instance), $composer_0, 0)), new ImageWithText(painterResource(get_pushups(drawable_instance), $composer_0, 0), stringResource(get_ofp_title(string_instance), $composer_0, 0)), new ImageWithText(painterResource(get_twin(drawable_instance), $composer_0, 0), stringResource(get_stretch_title(string_instance), $composer_0, 0))]);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = Companion_getInstance_1().n7p_1;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_6 = $composer_4.v30();
      if (!isInterface(tmp_6, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.HomeScreen.<anonymous>' call
      var $composer_6 = $composer_5;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var tmp_7 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$9 = _Dp___init__impl__ms3zkb(900);
      var modifier_1 = widthIn(tmp_7, VOID, tmp$ret$9);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().y7p_1;
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_7, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_8, 0);
      var localMap_0 = $composer_8.u32();
      var materialized_0 = materialize($composer_8, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().s9e_1;
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_8 = $composer_9.v30();
      if (!isInterface(tmp_8, Applier)) {
        invalidApplier();
      }
      $composer_9.o31();
      if ($composer_9.j31()) {
        $composer_9.p31(factory_0);
      } else {
        $composer_9.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.HomeScreen.<anonymous>.<anonymous>' call
      var $composer_11 = $composer_10;
      ProfileSection(pupil, mainViewModel, HomeScreen$lambda_4(selectedTabIndex$delegate), $composer_11, com_korchagin_presentation_viewModel_MainViewModel$stableprop_getter() << 3);
      $composer_11.a31(-130715280);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_11.w32();
      var tmp_9;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.HomeScreen.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = HomeScreen$lambda_11(selectedTabIndex$delegate);
        $composer_11.h33(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_group_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_11.c31();
      AnimatedTabWithHorizontalPager(imageWithTexts, tmp0_group_0, freezes, powerMoves, ofp, stretch, pupil, $composer_11, 48);
      sourceInformationMarkerEnd($composer_10);
      $composer_9.u31();
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.u31();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp6_safe_receiver = $composer_0.w33();
    if (tmp6_safe_receiver == null)
      null;
    else {
      tmp6_safe_receiver.n38(HomeScreen$lambda_12(componentNavigator, $changed));
    }
  }
  function HomeScreen$lambda($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.c1();
  }
  function HomeScreen$lambda_0($freezeElements$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('freezeElements', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $freezeElements$delegate.c1();
  }
  function HomeScreen$lambda_1($powerElements$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('powerElements', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $powerElements$delegate.c1();
  }
  function HomeScreen$lambda_2($ofpElements$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('ofpElements', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $ofpElements$delegate.c1();
  }
  function HomeScreen$lambda_3($stretchElements$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('stretchElements', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $stretchElements$delegate.c1();
  }
  function HomeScreen$lambda_4($selectedTabIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedTabIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedTabIndex$delegate.m3m();
  }
  function HomeScreen$lambda_5($selectedTabIndex$delegate, _set____db54di) {
    getLocalDelegateReference('selectedTabIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedTabIndex$delegate.l3m(_set____db54di);
    return Unit_instance;
  }
  function HomeScreen$lambda_6($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_7($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_8($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_9($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_10($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_11($selectedTabIndex$delegate) {
    return function (it) {
      HomeScreen$lambda_5($selectedTabIndex$delegate, it);
      return Unit_instance;
    };
  }
  function HomeScreen$lambda_12($componentNavigator, $$changed) {
    return function ($composer, $force) {
      HomeScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InfoSection(curPupil, selectedElementsTab, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(2020471007);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f2r(curPupil) : $composer_0.f32(curPupil)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j32(selectedElementsTab) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(2020471007, $dirty, -1, 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.InfoSection (InfoSection.kt:25)');
      }
      var text = '';
      var rating = 0;
      var tmp0_horizontalAlignment = Companion_getInstance_1().z7p_1;
      var tmp1_verticalArrangement = Arrangement_getInstance().bbw_1;
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
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().y7p_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
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
      var factory = Companion_getInstance_2().s9e_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.InfoSection.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_0 = curPupil.fo7_1;
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      var tmp0_textAlign = Companion_getInstance_7().i70_1;
      var tmp1_fontSize = get_sp(20);
      var tmp2_fontWeight = Companion_getInstance_5().a74_1;
      Text(tmp_0, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_textAlign), $composer_5, 0, 0, 65534);
      var tmp_6 = setLevel(numberToInt(curPupil.uo7_1));
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_11 = _TextOverflow___init__impl__obguoe(0);
      var tmp3_textAlign = Companion_getInstance_7().i70_1;
      var tmp4_fontSize = get_sp(16);
      var tmp5_fontWeight = Companion_getInstance_5().a74_1;
      Text(tmp_6, null, tmp_7, tmp_8, null, null, null, tmp_9, null, null, tmp_10, tmp_11, false, 0, 0, null, TextStyle_init_$Create$(VOID, tmp4_fontSize, tmp5_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_textAlign), $composer_5, 0, 0, 65534);
      if (selectedElementsTab === ElementsTab_FREEZE_getInstance().z2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0444\u0440\u0438\u0437\u0430\u043C: ';
        rating = numberToInt(curPupil.vo7_1);
      } else if (selectedElementsTab === ElementsTab_POWER_getInstance().z2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E PowerMoves: ';
        rating = numberToInt(curPupil.wo7_1);
      } else if (selectedElementsTab === ElementsTab_OFP_getInstance().z2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u041E\u0424\u041F: ';
        rating = numberToInt(curPupil.xo7_1);
      } else if (selectedElementsTab === ElementsTab_STRETCH_getInstance().z2_1) {
        text = '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0440\u0430\u0441\u0442\u044F\u0436\u043A\u0435: ';
        rating = numberToInt(curPupil.yo7_1);
      }
      var tmp10_modifier = animateContentSize(Companion_instance, tween(400, VOID, get_FastOutSlowInEasing()));
      var tmp11_text = text;
      var tmp7_textAlign = Companion_getInstance_7().i70_1;
      var tmp8_fontSize = get_sp(14);
      var tmp9_fontWeight = Companion_getInstance_5().a74_1;
      var tmp12_style = TextStyle_init_$Create$(VOID, tmp8_fontSize, tmp9_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp7_textAlign);
      var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp11_text, tmp10_modifier, tmp_12, tmp_13, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, tmp12_style, $composer_5, 0, 0, 65532);
      RatingProgreesBar(rating, $composer_5, 0);
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
      tmp0_safe_receiver.n38(InfoSection$lambda(curPupil, selectedElementsTab, modifier_0, $changed, $default));
    }
  }
  function InfoSection$lambda($curPupil, $selectedElementsTab, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoSection($curPupil, $selectedElementsTab, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function PostSection(posts, stateElement, modifier, pupil, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1003988184);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(posts) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(stateElement) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.f2r(pupil) : $composer_0.f32(pupil)) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.u30()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1003988184, $dirty, -1, 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection (PostSection.kt:59)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      $composer_0.a31(-981186658);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>' call
        var value_0 = mutableStateOf(true);
        this_0.h33(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var showShimmer = tmp0_group;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = PostSection$lambda;
      }
      var composer = $composer_2;
      sourceInformationMarkerStart($composer_2, -954207516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.w32();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_1 = createCompositionCoroutineScope(getContext(), composer);
        $composer_2.h33(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_2);
      var scope_0 = tmp1_group;
      var tmp_3 = fillMaxSize(modifier_0._v);
      $composer_0.a31(-981177466);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!(!!(!!(!!($composer_0.f32(posts) | $composer_0.f32(scope_0)) | $composer_0.f32(mainViewModel)) | $composer_0.f32(stateElement)) | (($dirty & 7168) === 2048 || (!(($dirty & 4096) === 0) && $composer_0.f32(pupil))));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.w32();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>' call
        var value_2 = PostSection$lambda_0(posts, showShimmer, scope_0, mainViewModel, stateElement, pupil);
        this_1.h33(value_2);
        tmp_4 = value_2;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.c31();
      LazyColumn(tmp_3, null, null, false, null, null, null, false, tmp1_group_0, $composer_0, 0, 254);
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
      tmp2_safe_receiver.n38(PostSection$lambda_1(posts, stateElement, modifier_0, pupil, $changed, $default));
    }
  }
  function PostSection$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function PostSection$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.u(index));
    };
  }
  function PostSection$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.u(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function PostSection$lambda$lambda$lambda$slambda($mainViewModel, $stateElement, $index, $pupil, resultContinuation) {
    this.rpp_1 = $mainViewModel;
    this.spp_1 = $stateElement;
    this.tpp_1 = $index;
    this.upp_1 = $pupil;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PostSection$lambda$lambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(PostSection$lambda$lambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PostSection$lambda$lambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          this.rpp_1.goi(this.spp_1.u(this.tpp_1));
          this.rpp_1.hoi(getElementRating(this.upp_1, this.spp_1.u(this.tpp_1).jo6_1));
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
  protoOf(PostSection$lambda$lambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new PostSection$lambda$lambda$lambda$slambda(this.rpp_1, this.spp_1, this.tpp_1, this.upp_1, completion);
    i.vpp_1 = $this$launch;
    return i;
  };
  function PostSection$lambda$lambda$lambda$slambda_0($mainViewModel, $stateElement, $index, $pupil, resultContinuation) {
    var i = new PostSection$lambda$lambda$lambda$slambda($mainViewModel, $stateElement, $index, $pupil, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PostSection$lambda$lambda$lambda($scope, $value, $mainViewModel, $stateElement, $index, $pupil) {
    return function () {
      launch($scope, VOID, VOID, PostSection$lambda$lambda$lambda$slambda_0($mainViewModel, $stateElement, $index, $pupil, null));
      var tmp;
      if (!($value.yo6_1 === 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883')) {
        findNavHost().hor(ElementDetailsActivity_getInstance());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PostSection$lambda$lambda$lambda_0($showShimmer) {
    return function (it) {
      $showShimmer.a1y(false);
      return Unit_instance;
    };
  }
  function PostSection$lambda$lambda_1($items, $showShimmer, $scope, $mainViewModel, $stateElement, $pupil, $posts) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>.<anonymous>.<anonymous>' call
        var value = $items.u(it);
        var $changed_0 = 14 & $dirty | 112 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.a31(1732508716);
        var startBackgroundColor = Companion_getInstance_4().d68_1;
        var endBackgroundColor = setElementColor(value.zo6_1);
        var tmp_2 = background(fillMaxWidth(Companion_instance), Companion_instance_0.o67(listOf([new Color_0(startBackgroundColor), new Color_0(endBackgroundColor)]), 300.0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(5);
        var tmp0_modifier = padding_0(tmp_2, tmp$ret$0);
        var tmp1_verticalAlignment = Companion_getInstance_1().w7p_1;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = tmp0_modifier;
        var horizontalArrangement = Arrangement_getInstance().zbv_1;
        var verticalAlignment = tmp1_verticalAlignment;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().v7p_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 432 >> 3 | 112 & 432 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.v30();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        var borderColor = setElementColor(value.zo6_1);
        var tmp_4 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(80);
        var tmp_5 = clip(size(tmp_4, tmp$ret$3), get_CircleShape());
        var tmp0_showShimmer = $showShimmer.c1();
        var tmp_6 = background(tmp_5, ShimmerBrush(tmp0_showShimmer, 1300.0, $composer_6, 48, 0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(3);
        var tmp_7 = border_0(tmp_6, tmp$ret$4, borderColor, get_CircleShape());
        $composer_6.a31(-1073119203);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!(!!(!!(!!($composer_6.f32($scope) | $composer_6.f32($mainViewModel)) | $composer_6.f32($stateElement)) | (($changed_0 & 112 ^ 48) > 32 && $composer_6.j32(it) || ($changed_0 & 48) === 32)) | $composer_6.f32($pupil)) | (($changed_0 & 896 ^ 384) > 256 && $composer_6.f32(value) || ($changed_0 & 384) === 256));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_6.w32();
        var tmp_8;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = PostSection$lambda$lambda$lambda($scope, value, $mainViewModel, $stateElement, it, $pupil);
          $composer_6.h33(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_6.c31();
        var tmp_10 = clickable(tmp_7, VOID, VOID, VOID, tmp0_group);
        $composer_6.a31(-1073099114);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_6.w32();
        var tmp_11;
        if (false || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = PostSection$lambda$lambda$lambda_0($showShimmer);
          $composer_6.h33(value_1);
          tmp_11 = value_1;
        } else {
          tmp_11 = it_1;
        }
        var tmp_12 = tmp_11;
        var tmp1_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_6.c31();
        var tmp_13 = Companion_getInstance_9().y7w_1;
        var tmp_14 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage(value.yo6_1, 'default crossfade example', tmp_10, null, null, null, null, tmp1_group, null, null, tmp_13, 0.0, null, tmp_14, false, $composer_6, 12582960, 6, 31608);
        var tmp_15 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$13 = _Dp___init__impl__ms3zkb(10);
        Spacer(width(tmp_15, tmp$ret$13), $composer_6, 6);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_1 = fillMaxWidth(Companion_instance);
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((6 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((6 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_7, 14 & 6 >> 3 | 112 & 6 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_8, 0);
        var localMap_0 = $composer_8.u32();
        var materialized_0 = materialize($composer_8, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_16 = $composer_9.v30();
        if (!isInterface(tmp_16, Applier)) {
          invalidApplier();
        }
        $composer_9.o31();
        if ($composer_9.j31()) {
          $composer_9.p31(factory_0);
        } else {
          $composer_9.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_11 = $composer_10;
        var tmp_17 = Companion_getInstance_4().z67_1;
        var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_19 = get_sp(1);
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextOverflow___init__impl__obguoe(0);
        Text(value.zo6_1, null, tmp_17, tmp_18, null, null, null, tmp_19, null, null, tmp_20, tmp_21, false, 0, 0, null, null, $composer_11, 12583296, 0, 130938);
        var tmp_22 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$16 = _Dp___init__impl__ms3zkb(5);
        Spacer(height(tmp_22, tmp$ret$16), $composer_11, 6);
        var tmp0_safe_receiver = value.bo7_1;
        $composer_11.a31(2116025403);
        var tmp_23;
        if (tmp0_safe_receiver == null) {
          tmp_23 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_24 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$17 = _Dp___init__impl__ms3zkb(5);
          var tmp_25 = clip(tmp_24, RoundedCornerShape(tmp$ret$17));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$18 = _Dp___init__impl__ms3zkb(25);
          var tmp_26 = height(tmp_25, tmp$ret$18);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_27 = _Dp___init__impl__ms3zkb(1);
          var tmp_28 = Companion_getInstance_4().b68_1;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$20 = _Dp___init__impl__ms3zkb(5);
          CustomProgressBar(border_0(tmp_26, tmp_27, tmp_28, RoundedCornerShape(tmp$ret$20)), Companion_getInstance_4().d68_1, Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().d68_1), new Color_0(AppColors_getInstance().ypn().kpm_1)])), numberToInt(tmp0_safe_receiver), true, $composer_11, 24624);
          tmp_23 = Unit_instance;
        }
        $composer_11.c31();
        var tmp_29 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$22 = _Dp___init__impl__ms3zkb(5);
        Spacer(height(tmp_29, tmp$ret$22), $composer_11, 6);
        var tmp_30 = Companion_getInstance_4().z67_1;
        var tmp_31 = get_sp(12);
        var tmp_32 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_33 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_34 = _TextOverflow___init__impl__obguoe(0);
        Text(value.ao7_1, null, tmp_30, tmp_31, null, null, null, tmp_32, null, null, tmp_33, tmp_34, false, 0, 0, null, null, $composer_11, 3456, 0, 131058);
        sourceInformationMarkerEnd($composer_10);
        $composer_9.u31();
        sourceInformationMarkerEnd($composer_9);
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.u31();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.a31(1302932779);
        if (it < ($posts.p() - 1 | 0)) {
          // Inline function 'androidx.compose.foundation.layout.Column' call
          var modifier_3 = fillMaxWidth(Companion_instance);
          var verticalArrangement_0 = null;
          var horizontalAlignment_0 = Companion_getInstance_1().a7q_1;
          var $composer_12 = $composer_1;
          sourceInformationMarkerStart($composer_12, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
          if (!((2 & 1) === 0))
            modifier_3 = Companion_instance;
          if (!((2 & 2) === 0))
            verticalArrangement_0 = Arrangement_getInstance().wbv_1;
          if (!((2 & 4) === 0))
            horizontalAlignment_0 = Companion_getInstance_1().y7p_1;
          var measurePolicy_1 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_12, 14 & 390 >> 3 | 112 & 390 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_4 = modifier_3;
          var $composer_13 = $composer_12;
          sourceInformationMarkerStart($composer_13, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_4 = Companion_instance;
          var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_13, 0);
          var localMap_1 = $composer_13.u32();
          var materialized_1 = materialize($composer_13, modifier_4);
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var factory_1 = Companion_getInstance_2().s9e_1;
          var $composer_14 = $composer_13;
          sourceInformationMarkerStart($composer_14, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
          var tmp_35 = $composer_14.v30();
          if (!isInterface(tmp_35, Applier)) {
            invalidApplier();
          }
          $composer_14.o31();
          if ($composer_14.j31()) {
            $composer_14.p31(factory_1);
          } else {
            $composer_14.s31();
          }
          // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
          var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_14);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().x9e_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().w9e_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block_1 = Companion_getInstance_2().a9f_1;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
          if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
            $this$with_1.h33(compositeKeyHash_1);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().u9e_1);
          // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
          var $composer_15 = $composer_14;
          sourceInformationMarkerStart($composer_15, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
          // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var $composer_16 = $composer_15;
          var tmp_36 = fillMaxWidth(Companion_instance, 0.78);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$25 = _Dp___init__impl__ms3zkb(1);
          HorizontalDivider(tmp_36, tmp$ret$25, Companion_getInstance_4().c68_1, $composer_16, 438, 0);
          sourceInformationMarkerEnd($composer_15);
          $composer_14.u31();
          sourceInformationMarkerEnd($composer_14);
          sourceInformationMarkerEnd($composer_13);
          sourceInformationMarkerEnd($composer_12);
        }
        $composer_1.c31();
        $composer_1.c31();
        var tmp_37;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_37 = Unit_instance;
        }
        tmp_1 = tmp_37;
      } else {
        $composer_0.c2u();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PostSection$lambda_0($posts, $showShimmer, $scope, $mainViewModel, $stateElement, $pupil) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = $posts;
      var tmp = items.p();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = PostSection$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = PostSection$lambda$lambda_0(items);
      $this$LazyColumn.af3(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_61(composableLambdaInstance(-1091073711, true, PostSection$lambda$lambda_1(items, $showShimmer, $scope, $mainViewModel, $stateElement, $pupil, $posts))));
      return Unit_instance;
    };
  }
  function PostSection$lambda_1($posts, $stateElement, $modifier, $pupil, $$changed, $$default) {
    return function ($composer, $force) {
      PostSection($posts, $stateElement, $modifier._v, $pupil, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ProfileSection(curPupil, viewModel, selectedTabIndex, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1218549649);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f2r(curPupil) : $composer_0.f32(curPupil)) ? 4 : 2);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.j32(selectedTabIndex) ? 256 : 128);
    if (!(($dirty & 131) === 130) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1218549649, $dirty, -1, 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection (ProfileSection.kt:43)');
      }
      var infiniteTransition = rememberInfiniteTransition(null, $composer_0, 0, 1);
      var tmp = infiniteRepeatable(tween(2000, VOID, get_LinearEasing()));
      var rotationValue = animateFloat(infiniteTransition, 0.0, 360.0, tmp, null, $composer_0, 4536, 8);
      $composer_0.a31(-1682722139);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_0;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection.<anonymous>' call
        var value = mutableStateOf(true);
        this_0.h33(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c31();
      var showShimmer = tmp0_group;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = fillMaxWidth(Companion_instance);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().y7p_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_3.v30();
      if (!isInterface(tmp_2, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var tmp_3 = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$6 = _Dp___init__impl__ms3zkb(10);
      var modifier_1 = padding_0(tmp_3, tmp$ret$6);
      var horizontalArrangement = null;
      var verticalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().ubv_1;
      if (!((6 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().v7p_1;
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 6 >> 3 | 112 & 6 >> 3);
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
      var factory_0 = Companion_getInstance_2().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_4 = $composer_8.v30();
      if (!isInterface(tmp_4, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var avatarBorderColor = setAvatarBorder(curPupil);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = null;
      var verticalArrangement_0 = Arrangement_getInstance().ybv_1;
      var horizontalAlignment_0 = null;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((5 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((5 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().wbv_1;
      if (!((5 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().y7p_1;
      var measurePolicy_1 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_11, 14 & 48 >> 3 | 112 & 48 >> 3);
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
      var factory_1 = Companion_getInstance_2().s9e_1;
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_5 = $composer_13.v30();
      if (!isInterface(tmp_5, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
        $this$with_1.h33(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_15 = $composer_14;
      // Inline function 'kotlin.text.isEmpty' call
      var this_1 = curPupil.ho7_1;
      if (charSequenceLength(this_1) === 0) {
        $composer_15.a31(-286167861);
        var tmp0_painter = painterResource(get_people(drawable_instance), $composer_15, 0);
        var tmp1_contentScale = Companion_getInstance_9().y7w_1;
        var tmp_6 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$12 = _Dp___init__impl__ms3zkb(64);
        var tmp_7 = clip(aspectRatio(width(tmp_6, tmp$ret$12), 1.0), get_CircleShape());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$13 = _Dp___init__impl__ms3zkb(3);
        var tmp2_modifier = border_0(tmp_7, tmp$ret$13, Companion_getInstance_4().b68_1, get_CircleShape());
        Image(tmp0_painter, null, tmp2_modifier, null, tmp1_contentScale, 0.0, null, $composer_15, 24624, 104);
        $composer_15.c31();
      } else {
        $composer_15.a31(-285703078);
        var tmp4_model = curPupil.ho7_1;
        var tmp5_contentScale = Companion_getInstance_9().y7w_1;
        var tmp_8 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$14 = _Dp___init__impl__ms3zkb(64);
        var tmp_9 = clip(aspectRatio(width(tmp_8, tmp$ret$14), 1.0), get_CircleShape());
        $composer_15.a31(406436277);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_15.f2r(rotationValue) | $composer_15.f32(avatarBorderColor));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_15.w32();
        var tmp_10;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ProfileSection$lambda(rotationValue, avatarBorderColor);
          $composer_15.h33(value_0);
          tmp_10 = value_0;
        } else {
          tmp_10 = it_0;
        }
        var tmp_11 = tmp_10;
        var tmp0_group_0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_15.c31();
        var tmp_12 = drawBehind(tmp_9, tmp0_group_0);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$19 = _Dp___init__impl__ms3zkb(1);
        var tmp_13 = border_0(tmp_12, tmp$ret$19, AppColors_getInstance().ypn().lpm_1, get_CircleShape());
        var tmp3_showShimmer = showShimmer.c1();
        var tmp6_modifier = background(tmp_13, ShimmerBrush(tmp3_showShimmer, 1300.0, $composer_15, 48, 0));
        $composer_15.a31(406461502);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_15.w32();
        var tmp_14;
        if (false || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ProfileSection$lambda_0(showShimmer);
          $composer_15.h33(value_1);
          tmp_14 = value_1;
        } else {
          tmp_14 = it_1;
        }
        var tmp_15 = tmp_14;
        var tmp1_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        $composer_15.c31();
        var tmp_16 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage(tmp4_model, null, tmp6_modifier, null, null, null, null, tmp1_group, null, null, tmp5_contentScale, 0.0, null, tmp_16, false, $composer_15, 12582960, 6, 31608);
        $composer_15.c31();
      }
      sourceInformationMarkerEnd($composer_14);
      $composer_13.u31();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      var tmp_17 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$24 = _Dp___init__impl__ms3zkb(8);
      Spacer(width(tmp_17, tmp$ret$24), $composer_10, 6);
      InfoSection(curPupil, selectedTabIndex, null, $composer_10, 14 & $dirty | 112 & $dirty >> 3, 4);
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
    var tmp1_safe_receiver = $composer_0.w33();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.n38(ProfileSection$lambda_1(curPupil, viewModel, selectedTabIndex, $changed));
    }
  }
  function ProfileSection$lambda($rotationValue, $avatarBorderColor) {
    return function ($this$drawBehind) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.rotate' call
      var degrees = $rotationValue.c1();
      var pivot = $this$drawBehind.l6l();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = $this$drawBehind.v6k();
      var previousSize = $this$with.z5g();
      $this$with.q5w().n69();
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.rotate.<anonymous>' call
        $this$with.p6k().p6l(degrees, pivot);
        // Inline function 'org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $this$drawBehind.e6l(Companion_instance_0.o67($avatarBorderColor), VOID, VOID, VOID, new Stroke(10.0));
      }finally {
        $this$with.q5w().o69();
        $this$with.o6k(previousSize);
      }
      return Unit_instance;
    };
  }
  function ProfileSection$lambda_0($showShimmer) {
    return function (it) {
      $showShimmer.a1y(false);
      return Unit_instance;
    };
  }
  function ProfileSection$lambda_1($curPupil, $viewModel, $selectedTabIndex, $$changed) {
    return function ($composer, $force) {
      ProfileSection($curPupil, $viewModel, $selectedTabIndex, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_main_fragments_ratings_RatingsFragment$stable;
  function RatingsFragment() {
    RatingsFragment_instance = this;
    Fragment.call(this, 'ratings_fragment', VOID, ComposableSingletons$RatingsFragmentKt_getInstance().wpp_1);
  }
  var RatingsFragment_instance;
  function RatingsFragment_getInstance() {
    if (RatingsFragment_instance == null)
      new RatingsFragment();
    return RatingsFragment_instance;
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$RatingsFragmentKt$lambda_1$lambda_n82bk4(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-757246542, $changed, -1, 'org.korchagin.kmp.activity.main.fragments.ratings.ComposableSingletons$RatingsFragmentKt.lambda-1.<anonymous> (RatingsFragment.kt:9)');
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
    tmp.wpp_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(-757246542, false, ComposableSingletons$RatingsFragmentKt$lambda_1$lambda_n82bk4));
  }
  var ComposableSingletons$RatingsFragmentKt_instance;
  function ComposableSingletons$RatingsFragmentKt_getInstance() {
    if (ComposableSingletons$RatingsFragmentKt_instance == null)
      new ComposableSingletons$RatingsFragmentKt();
    return ComposableSingletons$RatingsFragmentKt_instance;
  }
  function RatingsScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1599730791);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1599730791, $changed, -1, 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingsScreen (RatingsScreen.kt:45)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var tmp = emptyList();
      var pupilsList$delegate = collectAsState(mainViewModel.goa_1, tmp, null, $composer_0, 48, 2);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = Companion_getInstance_1().n7p_1;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_4.v30();
      if (!isInterface(tmp_0, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingsScreen.<anonymous>' call
      var $composer_6 = $composer_5;
      if (mainViewModel.eoi()) {
        $composer_6.a31(-701414328);
        var tmp_1 = RatingsScreen$lambda(pupilsList$delegate);
        NewRatingTable(tmp_1, mainViewModel, null, $composer_6, com_korchagin_presentation_viewModel_MainViewModel$stableprop_getter() << 3, 4);
        $composer_6.c31();
      } else {
        $composer_6.a31(-268842611);
        var tmp0_pupilsList = RatingsScreen$lambda(pupilsList$delegate);
        var tmp1_modifier = background_0(Companion_instance, Companion_getInstance_4().z67_1);
        RatingTable(tmp0_pupilsList, tmp1_modifier, mainViewModel, $composer_6, 48 | com_korchagin_presentation_viewModel_MainViewModel$stableprop_getter() << 6, 0);
        $composer_6.c31();
      }
      sourceInformationMarkerEnd($composer_5);
      $composer_4.u31();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
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
      tmp0_safe_receiver.n38(RatingsScreen$lambda_0(componentNavigator, $changed));
    }
  }
  function NewRatingTable(ratingList, mainViewModel, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-603053098);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(ratingList) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.f2r(mainViewModel) : $composer_0.f32(mainViewModel)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-603053098, $dirty, -1, 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable (RatingsScreen.kt:76)');
      }
      $composer_0.a31(-2015750751);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>' call
        var value = mutableStateOf(true);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var showShimmer = tmp0_group;
      var tmp_1 = modifier_0._v;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(900);
      var tmp_2 = widthIn(tmp_1, VOID, tmp$ret$4);
      $composer_0.a31(-2015742916);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.f32(ratingList) | (($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.f32(mainViewModel))));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>' call
        var value_0 = NewRatingTable$lambda(ratingList, mainViewModel, showShimmer);
        this_1.h33(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.c31();
      LazyColumn(tmp_2, null, null, false, null, null, null, false, tmp1_group, $composer_0, 0, 254);
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
      tmp2_safe_receiver.n38(NewRatingTable$lambda_0(ratingList, mainViewModel, modifier_0, $changed, $default));
    }
  }
  function RatingTable(pupilsList, modifier, mainViewModel, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(438456792);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(pupilsList) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.f2r(mainViewModel) : $composer_0.f32(mainViewModel)) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(438456792, $dirty, -1, 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable (RatingsScreen.kt:183)');
      }
      var tmp = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(900);
      var tmp0_modifier = background_0(widthIn(tmp, VOID, tmp$ret$0), Companion_getInstance_4().z67_1);
      var tmp1_horizontalAlignment = Companion_getInstance_1().z7p_1;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().ybv_1;
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().y7p_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 438 >> 3 | 112 & 438 >> 3);
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
      var factory = Companion_getInstance_2().s9e_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_1 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_2 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(10);
      var tmp0_modifier_0 = fillMaxWidth(background_0(padding_1(tmp_1, VOID, tmp_2, VOID, tmp$ret$4), Companion_getInstance_4().z67_1));
      var tmp1_verticalAlignment = Companion_getInstance_1().w7p_1;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = tmp0_modifier_0;
      var horizontalArrangement = Arrangement_getInstance().zbv_1;
      var verticalAlignment = tmp1_verticalAlignment;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().ubv_1;
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().v7p_1;
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
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
      var factory_0 = Companion_getInstance_2().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_3 = $composer_8.v30();
      if (!isInterface(tmp_3, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_4 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$7 = _Dp___init__impl__ms3zkb(80);
      var modifier_5 = width(tmp_4, tmp$ret$7);
      var contentAlignment = Companion_getInstance_1().q7p_1;
      var propagateMinConstraints = false;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_5 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_instance;
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.u32();
      var materialized_1 = materialize($composer_12, modifier_6);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_2().s9e_1;
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_5 = $composer_13.v30();
      if (!isInterface(tmp_5, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
        $this$with_1.h33(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_15 = $composer_14;
      var tmp0_fontSize = get_sp(14);
      var tmp1_color = AppColors_getInstance().ypn().dpn_1;
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextOverflow___init__impl__obguoe(0);
      Text('\u041F\u043E\u0437\u0438\u0446\u0438\u044F', null, tmp1_color, tmp0_fontSize, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, null, $composer_15, 3078, 0, 131058);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.u31();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_9 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_10 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$11 = _Dp___init__impl__ms3zkb(10);
      var modifier_7 = fillMaxWidth(padding_1(tmp_9, tmp_10, VOID, tmp$ret$11), 0.7);
      var contentAlignment_0 = Companion_getInstance_1().q7p_1;
      var propagateMinConstraints_0 = false;
      var $composer_16 = $composer_10;
      sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_7 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_1().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_17 = $composer_16;
      sourceInformationMarkerStart($composer_17, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_8 = Companion_instance;
      var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_17, 0);
      var localMap_2 = $composer_17.u32();
      var materialized_2 = materialize($composer_17, modifier_8);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_2 = Companion_getInstance_2().s9e_1;
      var $composer_18 = $composer_17;
      sourceInformationMarkerStart($composer_18, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_11 = $composer_18.v30();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_18.o31();
      if ($composer_18.j31()) {
        $composer_18.p31(factory_2);
      } else {
        $composer_18.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
        $this$with_2.h33(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_19 = $composer_18;
      sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_20 = $composer_19;
      var tmp0_fontSize_0 = get_sp(14);
      var tmp1_color_0 = AppColors_getInstance().ypn().dpn_1;
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0438 \u0438\u043C\u044F', null, tmp1_color_0, tmp0_fontSize_0, null, null, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, null, $composer_20, 3078, 0, 131058);
      sourceInformationMarkerEnd($composer_19);
      $composer_18.u31();
      sourceInformationMarkerEnd($composer_18);
      sourceInformationMarkerEnd($composer_17);
      sourceInformationMarkerEnd($composer_16);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_15 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(100);
      var modifier_9 = width(tmp_15, tmp$ret$14);
      var contentAlignment_1 = Companion_getInstance_1().q7p_1;
      var propagateMinConstraints_1 = false;
      var $composer_21 = $composer_10;
      sourceInformationMarkerStart($composer_21, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_9 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_1().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_3 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_22 = $composer_21;
      sourceInformationMarkerStart($composer_22, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_10 = Companion_instance;
      var compositeKeyHash_3 = get_currentCompositeKeyHash($composer_22, 0);
      var localMap_3 = $composer_22.u32();
      var materialized_3 = materialize($composer_22, modifier_10);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_3 = Companion_getInstance_2().s9e_1;
      var $composer_23 = $composer_22;
      sourceInformationMarkerStart($composer_23, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_16 = $composer_23.v30();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_23.o31();
      if ($composer_23.j31()) {
        $composer_23.p31(factory_3);
      } else {
        $composer_23.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_3 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_3 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3);
      if ($this$with_3.j31() || !equals($this$with_3.w32(), compositeKeyHash_3)) {
        $this$with_3.h33(compositeKeyHash_3);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3).z31(compositeKeyHash_3, block_3);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_24 = $composer_23;
      sourceInformationMarkerStart($composer_24, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_25 = $composer_24;
      var tmp0_fontSize_1 = get_sp(14);
      var tmp1_color_1 = AppColors_getInstance().ypn().dpn_1;
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_19 = _TextOverflow___init__impl__obguoe(0);
      Text('\u0420\u0435\u0439\u0442\u0438\u043D\u0433', null, tmp1_color_1, tmp0_fontSize_1, null, null, null, tmp_17, null, null, tmp_18, tmp_19, false, 0, 0, null, null, $composer_25, 3078, 0, 131058);
      sourceInformationMarkerEnd($composer_24);
      $composer_23.u31();
      sourceInformationMarkerEnd($composer_23);
      sourceInformationMarkerEnd($composer_22);
      sourceInformationMarkerEnd($composer_21);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u31();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_20 = modifier_0._v;
      $composer_5.a31(1185219049);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.f32(pupilsList) | (($dirty & 896) === 256 || (!(($dirty & 512) === 0) && $composer_0.f32(mainViewModel))));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.w32();
      var tmp_21;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>' call
        var value = RatingTable$lambda(pupilsList, mainViewModel);
        $composer_5.h33(value);
        tmp_21 = value;
      } else {
        tmp_21 = it;
      }
      var tmp_22 = tmp_21;
      var tmp0_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      $composer_5.c31();
      LazyColumn(tmp_20, null, null, false, null, null, null, false, tmp0_group, $composer_5, 14 & $dirty >> 3, 254);
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
      tmp0_safe_receiver.n38(RatingTable$lambda_0(pupilsList, modifier_0, mainViewModel, $changed, $default));
    }
  }
  function RatingsScreen$lambda($pupilsList$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('pupilsList', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $pupilsList$delegate.c1();
  }
  function RatingsScreen$lambda_0($componentNavigator, $$changed) {
    return function ($composer, $force) {
      RatingsScreen($componentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NewRatingTable$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.u(index));
    };
  }
  function NewRatingTable$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.u(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function NewRatingTable$lambda$lambda$lambda($mainViewModel, $pupil) {
    return function () {
      $mainViewModel.joi($pupil);
      findNavHost().hor(ProfileActivity_getInstance());
      return Unit_instance;
    };
  }
  function NewRatingTable$lambda$lambda$lambda_0($showShimmer) {
    return function (it) {
      $showShimmer.a1y(false);
      return Unit_instance;
    };
  }
  function NewRatingTable$lambda$lambda_1($items, $mainViewModel, $showShimmer, $ratingList) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>.<anonymous>.<anonymous>' call
        var pupil = $items.u(it);
        var $changed_0 = 14 & $dirty | 112 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.a31(496173691);
        var startBackgroundColor = Companion_getInstance_4().d68_1;
        var endBackgroundColor = setPositionBackgroundColor(it);
        var tmp_2 = background(fillMaxWidth(Companion_instance), Companion_instance_0.o67(listOf([new Color_0(startBackgroundColor), new Color_0(endBackgroundColor)]), 300.0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(5);
        var tmp_3 = padding_0(tmp_2, tmp$ret$0);
        $composer_1.a31(1262945723);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_1.f32($mainViewModel) | (($changed_0 & 896 ^ 384) > 256 && $composer_1.f32(pupil) || ($changed_0 & 384) === 256));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.w32();
        var tmp_4;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = NewRatingTable$lambda$lambda$lambda($mainViewModel, pupil);
          $composer_1.h33(value);
          tmp_4 = value;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.c31();
        var tmp0_modifier = clickable(tmp_3, VOID, VOID, VOID, tmp0_group);
        var tmp1_verticalAlignment = Companion_getInstance_1().w7p_1;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = tmp0_modifier;
        var horizontalArrangement = Arrangement_getInstance().zbv_1;
        var verticalAlignment = tmp1_verticalAlignment;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().v7p_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 432 >> 3 | 112 & 432 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_6 = $composer_4.v30();
        if (!isInterface(tmp_6, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        var tmp_7 = pupil.ho7_1;
        var tmp_8 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$7 = _Dp___init__impl__ms3zkb(80);
        var tmp_9 = clip(size(tmp_8, tmp$ret$7), get_CircleShape());
        var tmp0_showShimmer = $showShimmer.c1();
        var tmp_10 = background(tmp_9, ShimmerBrush(tmp0_showShimmer, 1300.0, $composer_6, 48, 0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(3);
        var tmp_11 = border_0(tmp_10, tmp$ret$8, Companion_getInstance_4().b68_1, get_CircleShape());
        $composer_6.a31(-1293661671);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_6.w32();
        var tmp_12;
        if (false || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NewRatingTable$lambda$lambda$lambda_0($showShimmer);
          $composer_6.h33(value_0);
          tmp_12 = value_0;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp0_group_0 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_6.c31();
        var tmp_14 = Companion_getInstance_9().y7w_1;
        var tmp_15 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage(tmp_7, 'default crossfade example', tmp_11, null, null, null, null, tmp0_group_0, null, null, tmp_14, 0.0, null, tmp_15, false, $composer_6, 12582960, 6, 31608);
        var tmp_16 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$13 = _Dp___init__impl__ms3zkb(10);
        Spacer(width(tmp_16, tmp$ret$13), $composer_6, 6);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_1 = fillMaxWidth(Companion_instance);
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((6 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((6 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_7, 14 & 6 >> 3 | 112 & 6 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_8, 0);
        var localMap_0 = $composer_8.u32();
        var materialized_0 = materialize($composer_8, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_17 = $composer_9.v30();
        if (!isInterface(tmp_17, Applier)) {
          invalidApplier();
        }
        $composer_9.o31();
        if ($composer_9.j31()) {
          $composer_9.p31(factory_0);
        } else {
          $composer_9.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_11 = $composer_10;
        var tmp0_text = pupil.fo7_1;
        var tmp1_letterSpacing = get_sp(1);
        var tmp2_color = Companion_getInstance_4().z67_1;
        var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text, null, tmp2_color, tmp_18, null, null, null, tmp1_letterSpacing, null, null, tmp_19, tmp_20, false, 0, 0, null, null, $composer_11, 12583296, 0, 130938);
        var tmp_21 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$16 = _Dp___init__impl__ms3zkb(5);
        Spacer(height(tmp_21, tmp$ret$16), $composer_11, 6);
        var tmp_22 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$17 = _Dp___init__impl__ms3zkb(5);
        var tmp_23 = clip(tmp_22, RoundedCornerShape(tmp$ret$17));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$18 = _Dp___init__impl__ms3zkb(25);
        var tmp_24 = height(tmp_23, tmp$ret$18);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_25 = _Dp___init__impl__ms3zkb(1);
        var tmp_26 = Companion_getInstance_4().b68_1;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$20 = _Dp___init__impl__ms3zkb(5);
        CustomProgressBar(border_0(tmp_24, tmp_25, tmp_26, RoundedCornerShape(tmp$ret$20)), Companion_getInstance_4().d68_1, Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().d68_1), new Color_0(AppColors_getInstance().ypn().kpm_1)])), numberToInt(pupil.uo7_1), true, $composer_11, 24624);
        var tmp_27 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$21 = _Dp___init__impl__ms3zkb(5);
        Spacer(height(tmp_27, tmp$ret$21), $composer_11, 6);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_3 = fillMaxSize(Companion_instance);
        var horizontalArrangement_0 = Arrangement_getInstance().ubv_1;
        var verticalAlignment_0 = Companion_getInstance_1().w7p_1;
        var $composer_12 = $composer_11;
        sourceInformationMarkerStart($composer_12, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement_0 = Arrangement_getInstance().ubv_1;
        if (!((0 & 4) === 0))
          verticalAlignment_0 = Companion_getInstance_1().v7p_1;
        var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_12, 14 & 438 >> 3 | 112 & 438 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_instance;
        var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_13, 0);
        var localMap_1 = $composer_13.u32();
        var materialized_1 = materialize($composer_13, modifier_4);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_1 = Companion_getInstance_2().s9e_1;
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_28 = $composer_14.v30();
        if (!isInterface(tmp_28, Applier)) {
          invalidApplier();
        }
        $composer_14.o31();
        if ($composer_14.j31()) {
          $composer_14.p31(factory_1);
        } else {
          $composer_14.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_14);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
          $this$with_1.h33(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_16 = $composer_15;
        var positionImage = setPositionStar(it);
        var positionSize = setPositionFontSize(it);
        var tmp_29 = painterResource(positionImage, $composer_16, 0);
        Image(tmp_29, null, null, null, null, 0.0, null, $composer_16, 48, 124);
        var tmp_30 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$24 = _Dp___init__impl__ms3zkb(5);
        Spacer(width(tmp_30, tmp$ret$24), $composer_16, 6);
        var tmp0_text_0 = '' + (it + 1 | 0) + ' - \u043C\u0435\u0441\u0442\u043E';
        var tmp1_fontSize = get_sp(positionSize);
        var tmp2_color_0 = Companion_getInstance_4().z67_1;
        var tmp_31 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_32 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_33 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text_0, null, tmp2_color_0, tmp1_fontSize, null, null, null, tmp_31, null, null, tmp_32, tmp_33, false, 0, 0, null, null, $composer_16, 384, 0, 131058);
        sourceInformationMarkerEnd($composer_15);
        $composer_14.u31();
        sourceInformationMarkerEnd($composer_14);
        sourceInformationMarkerEnd($composer_13);
        sourceInformationMarkerEnd($composer_12);
        sourceInformationMarkerEnd($composer_10);
        $composer_9.u31();
        sourceInformationMarkerEnd($composer_9);
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.u31();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.a31(1263041983);
        if (it < ($ratingList.p() - 1 | 0)) {
          // Inline function 'androidx.compose.foundation.layout.Column' call
          var modifier_5 = fillMaxWidth(Companion_instance);
          var verticalArrangement_0 = null;
          var horizontalAlignment_0 = Companion_getInstance_1().a7q_1;
          var $composer_17 = $composer_1;
          sourceInformationMarkerStart($composer_17, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
          if (!((2 & 1) === 0))
            modifier_5 = Companion_instance;
          if (!((2 & 2) === 0))
            verticalArrangement_0 = Arrangement_getInstance().wbv_1;
          if (!((2 & 4) === 0))
            horizontalAlignment_0 = Companion_getInstance_1().y7p_1;
          var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_17, 14 & 390 >> 3 | 112 & 390 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_6 = modifier_5;
          var $composer_18 = $composer_17;
          sourceInformationMarkerStart($composer_18, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_6 = Companion_instance;
          var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_18, 0);
          var localMap_2 = $composer_18.u32();
          var materialized_2 = materialize($composer_18, modifier_6);
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var factory_2 = Companion_getInstance_2().s9e_1;
          var $composer_19 = $composer_18;
          sourceInformationMarkerStart($composer_19, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
          var tmp_34 = $composer_19.v30();
          if (!isInterface(tmp_34, Applier)) {
            invalidApplier();
          }
          $composer_19.o31();
          if ($composer_19.j31()) {
            $composer_19.p31(factory_2);
          } else {
            $composer_19.s31();
          }
          // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
          var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_19);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().x9e_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().w9e_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block_2 = Companion_getInstance_2().a9f_1;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
          if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
            $this$with_2.h33(compositeKeyHash_2);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().u9e_1);
          // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
          var $composer_20 = $composer_19;
          sourceInformationMarkerStart($composer_20, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
          // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.NewRatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var $composer_21 = $composer_20;
          var tmp0_modifier_0 = fillMaxWidth(Companion_instance, 0.78);
          var tmp1_color = Companion_getInstance_4().c68_1;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp2_thickness = _Dp___init__impl__ms3zkb(1);
          HorizontalDivider(tmp0_modifier_0, tmp2_thickness, tmp1_color, $composer_21, 438, 0);
          sourceInformationMarkerEnd($composer_20);
          $composer_19.u31();
          sourceInformationMarkerEnd($composer_19);
          sourceInformationMarkerEnd($composer_18);
          sourceInformationMarkerEnd($composer_17);
        }
        $composer_1.c31();
        $composer_1.c31();
        var tmp_35;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_35 = Unit_instance;
        }
        tmp_1 = tmp_35;
      } else {
        $composer_0.c2u();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NewRatingTable$lambda($ratingList, $mainViewModel, $showShimmer) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = $ratingList;
      var tmp = items.p();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = NewRatingTable$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = NewRatingTable$lambda$lambda_0(items);
      $this$LazyColumn.af3(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_63(composableLambdaInstance(-1091073711, true, NewRatingTable$lambda$lambda_1(items, $mainViewModel, $showShimmer, $ratingList))));
      return Unit_instance;
    };
  }
  function NewRatingTable$lambda_0($ratingList, $mainViewModel, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NewRatingTable($ratingList, $mainViewModel, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function RatingTable$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items.u(index));
    };
  }
  function RatingTable$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous>' call
      $items.u(index);
      return null;
    };
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function RatingTable$lambda$lambda$lambda($mainViewModel, $pupil) {
    return function () {
      $mainViewModel.joi($pupil);
      findNavHost().hor(ProfileActivity_getInstance());
      return Unit_instance;
    };
  }
  function RatingTable$lambda$lambda_1($items, $mainViewModel) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C188@8866L26:LazyDsl.kt#428nma');
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
          traceEventStart(-1091073711, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed.<anonymous> (LazyDsl.kt:188)');
        }
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var pupil = $items.u(it);
        var $changed_0 = 14 & $dirty | 112 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.a31(-1828543490);
        var tmp_2 = fillMaxWidth(background_0(Companion_instance, Companion_getInstance_4().z67_1));
        $composer_1.a31(-1167359608);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_1.f32($mainViewModel) | (($changed_0 & 896 ^ 384) > 256 && $composer_1.f32(pupil) || ($changed_0 & 384) === 256));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.w32();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = RatingTable$lambda$lambda$lambda($mainViewModel, pupil);
          $composer_1.h33(value);
          tmp_3 = value;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.c31();
        var tmp0_modifier = clickable(tmp_2, VOID, VOID, VOID, tmp0_group);
        var tmp1_verticalAlignment = Companion_getInstance_1().w7p_1;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = tmp0_modifier;
        var horizontalArrangement = Arrangement_getInstance().zbv_1;
        var verticalAlignment = tmp1_verticalAlignment;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().v7p_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_2, 14 & 432 >> 3 | 112 & 432 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_5 = $composer_4.v30();
        if (!isInterface(tmp_5, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        var color = setPositionColor(it);
        var fontSize = setPositionFontSize(it);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_6 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$6 = _Dp___init__impl__ms3zkb(80);
        var modifier_1 = width(tmp_6, tmp$ret$6);
        var contentAlignment = Companion_getInstance_1().q7p_1;
        var propagateMinConstraints = false;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m7p_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_2 = modifier_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_8, 0);
        var localMap_0 = $composer_8.u32();
        var materialized_0 = materialize($composer_8, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_7 = $composer_9.v30();
        if (!isInterface(tmp_7, Applier)) {
          invalidApplier();
        }
        $composer_9.o31();
        if ($composer_9.j31()) {
          $composer_9.p31(factory_0);
        } else {
          $composer_9.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_11 = $composer_10;
        var tmp0_text = '' + (it + 1 | 0);
        var tmp1_fontSize = get_sp(fontSize);
        var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_10 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text, null, color, tmp1_fontSize, null, null, null, tmp_8, null, null, tmp_9, tmp_10, false, 0, 0, null, null, $composer_11, 0, 0, 131058);
        sourceInformationMarkerEnd($composer_10);
        $composer_9.u31();
        sourceInformationMarkerEnd($composer_9);
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_11 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_12 = _Dp___init__impl__ms3zkb(10);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$10 = _Dp___init__impl__ms3zkb(10);
        var modifier_3 = fillMaxWidth(padding_1(tmp_11, tmp_12, VOID, tmp$ret$10), 0.7);
        var contentAlignment_0 = Companion_getInstance_1().q7p_1;
        var propagateMinConstraints_0 = false;
        var $composer_12 = $composer_6;
        sourceInformationMarkerStart($composer_12, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_1().m7p_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_instance;
        var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_13, 0);
        var localMap_1 = $composer_13.u32();
        var materialized_1 = materialize($composer_13, modifier_4);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_1 = Companion_getInstance_2().s9e_1;
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_13 = $composer_14.v30();
        if (!isInterface(tmp_13, Applier)) {
          invalidApplier();
        }
        $composer_14.o31();
        if ($composer_14.j31()) {
          $composer_14.p31(factory_1);
        } else {
          $composer_14.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_14);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
          $this$with_1.h33(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_16 = $composer_15;
        var tmp0_text_0 = pupil.fo7_1;
        var tmp1_fontSize_0 = get_sp(fontSize);
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text_0, null, color, tmp1_fontSize_0, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_16, 0, 0, 131058);
        sourceInformationMarkerEnd($composer_15);
        $composer_14.u31();
        sourceInformationMarkerEnd($composer_14);
        sourceInformationMarkerEnd($composer_13);
        sourceInformationMarkerEnd($composer_12);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_17 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$13 = _Dp___init__impl__ms3zkb(100);
        var modifier_5 = width(tmp_17, tmp$ret$13);
        var contentAlignment_1 = Companion_getInstance_1().q7p_1;
        var propagateMinConstraints_1 = false;
        var $composer_17 = $composer_6;
        sourceInformationMarkerStart($composer_17, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_5 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment_1 = Companion_getInstance_1().m7p_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_18 = $composer_17;
        sourceInformationMarkerStart($composer_18, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_6 = Companion_instance;
        var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_18, 0);
        var localMap_2 = $composer_18.u32();
        var materialized_2 = materialize($composer_18, modifier_6);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_2 = Companion_getInstance_2().s9e_1;
        var $composer_19 = $composer_18;
        sourceInformationMarkerStart($composer_19, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_18 = $composer_19.v30();
        if (!isInterface(tmp_18, Applier)) {
          invalidApplier();
        }
        $composer_19.o31();
        if ($composer_19.j31()) {
          $composer_19.p31(factory_2);
        } else {
          $composer_19.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_19);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_2 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
        if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
          $this$with_2.h33(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_21 = $composer_20;
        var tmp0_text_1 = '' + pupil.uo7_1;
        var tmp1_fontSize_1 = get_sp(fontSize);
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text_1, null, color, tmp1_fontSize_1, null, null, null, tmp_19, null, null, tmp_20, tmp_21, false, 0, 0, null, null, $composer_21, 0, 0, 131058);
        sourceInformationMarkerEnd($composer_20);
        $composer_19.u31();
        sourceInformationMarkerEnd($composer_19);
        sourceInformationMarkerEnd($composer_18);
        sourceInformationMarkerEnd($composer_17);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.u31();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.c31();
        var tmp_22;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_22 = Unit_instance;
        }
        tmp_1 = tmp_22;
      } else {
        $composer_0.c2u();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function RatingTable$lambda($pupilsList, $mainViewModel) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed' call
      var items = $pupilsList;
      var tmp = items.p();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = RatingTable$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = RatingTable$lambda$lambda_0(items);
      $this$LazyColumn.af3(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_64(composableLambdaInstance(-1091073711, true, RatingTable$lambda$lambda_1(items, $mainViewModel))));
      return Unit_instance;
    };
  }
  function RatingTable$lambda_0($pupilsList, $modifier, $mainViewModel, $$changed, $$default) {
    return function ($composer, $force) {
      RatingTable($pupilsList, $modifier._v, $mainViewModel, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function TopBarRatingActions($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1784824961);
    if (!($changed === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1784824961, $changed, -1, 'org.korchagin.kmp.activity.main.fragments.ratings.topBar.TopBarRatingActions (TopBarRatingActions.kt:13)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var tmp = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(8);
      var tmp0_modifier = padding_2(tmp, tmp$ret$3);
      var tmp1_checked = mainViewModel.eoi();
      $composer_0.a31(-219131297);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.f32(mainViewModel);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.fragments.ratings.topBar.TopBarRatingActions.<anonymous>' call
        var value_0 = TopBarRatingActions$lambda(mainViewModel);
        this_0.h33(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c31();
      Switch(tmp1_checked, tmp0_group, tmp0_modifier, null, false, null, null, $composer_0, 384, 120);
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
      tmp1_safe_receiver.n38(TopBarRatingActions$lambda_0($changed));
    }
  }
  function TopBarRatingActions$lambda($mainViewModel) {
    return function (it) {
      $mainViewModel.foi();
      return Unit_instance;
    };
  }
  function TopBarRatingActions$lambda_0($$changed) {
    return function ($composer, $force) {
      TopBarRatingActions($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ProfileIcon($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1836995343);
    if (!($changed === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1836995343, $changed, -1, 'org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon (ProfileIcon.kt:33)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var currentPupil$delegate = collectAsState(mainViewModel.soa_1, null, null, $composer_0, 48, 2);
      var tmp0_elvis_lhs = ProfileIcon$lambda(currentPupil$delegate);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp4_safe_receiver = $composer_0.w33();
        if (tmp4_safe_receiver == null)
          null;
        else {
          tmp4_safe_receiver.n38(ProfileIcon$lambda_0($changed));
        }
        return Unit_instance;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var pupil = tmp;
      $composer_0.a31(139045828);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_0;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon.<anonymous>' call
        var value_0 = mutableStateOf(true);
        this_0.h33(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c31();
      var showShimmer = tmp0_group;
      // Inline function 'kotlin.text.isEmpty' call
      var this_1 = pupil.ho7_1;
      if (charSequenceLength(this_1) === 0) {
        $composer_0.a31(15533912);
        var tmp1_painter = painterResource(get_people(drawable_instance), $composer_0, 0);
        var tmp2_contentScale = Companion_getInstance_9().y7w_1;
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(46);
        var tmp_3 = clip(aspectRatio(width(tmp_2, tmp$ret$8), 1.0), get_CircleShape());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$9 = _Dp___init__impl__ms3zkb(3);
        var tmp_4 = border_0(tmp_3, tmp$ret$9, Companion_getInstance_4().b68_1, get_CircleShape());
        $composer_0.a31(139059012);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid = $composer_0.f32(mainViewModel);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_2.w32();
        var tmp_5;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon.<anonymous>' call
          var value_1 = ProfileIcon$lambda_1(mainViewModel);
          this_2.h33(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.c31();
        var tmp3_modifier = clickable(tmp_4, VOID, VOID, VOID, tmp1_group);
        Image(tmp1_painter, null, tmp3_modifier, null, tmp2_contentScale, 0.0, null, $composer_0, 24624, 104);
        $composer_0.c31();
      } else {
        $composer_0.a31(16027897);
        var tmp_7 = pupil.ho7_1;
        var tmp_8 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$14 = _Dp___init__impl__ms3zkb(46);
        var tmp_9 = clip(size(tmp_8, tmp$ret$14), get_CircleShape());
        var tmp4_showShimmer = showShimmer.c1();
        var tmp_10 = background(tmp_9, ShimmerBrush(tmp4_showShimmer, 1300.0, $composer_0, 48, 0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$15 = _Dp___init__impl__ms3zkb(3);
        var tmp_11 = border_0(tmp_10, tmp$ret$15, Companion_getInstance_4().b68_1, get_CircleShape());
        $composer_0.a31(139079000);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_3 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = this_3.w32();
        var tmp_12;
        if (false || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon.<anonymous>' call
          var value_2 = ProfileIcon$lambda_2;
          this_3.h33(value_2);
          tmp_12 = value_2;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp2_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_0.c31();
        var tmp_14 = clickable(tmp_11, VOID, VOID, VOID, tmp2_group);
        $composer_0.a31(139081504);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_4 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = this_4.w32();
        var tmp_15;
        if (false || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon.<anonymous>' call
          var value_3 = ProfileIcon$lambda_3(showShimmer);
          this_4.h33(value_3);
          tmp_15 = value_3;
        } else {
          tmp_15 = it_2;
        }
        var tmp_16 = tmp_15;
        var tmp3_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        $composer_0.c31();
        var tmp_17 = Companion_getInstance_9().y7w_1;
        var tmp_18 = _FilterQuality___init__impl__nv51aq(0);
        AsyncImage(tmp_7, 'default crossfade example', tmp_14, null, null, null, null, tmp3_group, null, null, tmp_17, 0.0, null, tmp_18, false, $composer_0, 12582960, 6, 31608);
        $composer_0.c31();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp5_safe_receiver = $composer_0.w33();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.n38(ProfileIcon$lambda_4($changed));
    }
  }
  function ProfileIcon$lambda($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.c1();
  }
  function ProfileIcon$lambda_0($$changed) {
    return function ($composer, $force) {
      ProfileIcon($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ProfileIcon$lambda_1($mainViewModel) {
    return function () {
      $mainViewModel.joi(null);
      findNavHost().hor(ProfileActivity_getInstance());
      return Unit_instance;
    };
  }
  function ProfileIcon$lambda_2() {
    findNavHost().hor(ProfileActivity_getInstance());
    return Unit_instance;
  }
  function ProfileIcon$lambda_3($showShimmer) {
    return function (it) {
      $showShimmer.a1y(false);
      return Unit_instance;
    };
  }
  function ProfileIcon$lambda_4($$changed) {
    return function ($composer, $force) {
      ProfileIcon($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_profile_ProfileActivity$stable;
  function ProfileActivity() {
    ProfileActivity_instance = this;
    Activity.call(this, 'profile_activity', listOf_0(ProfileComponent_getInstance()), ComposableSingletons$ProfileActivityKt_getInstance().ypp_1);
  }
  var ProfileActivity_instance;
  function ProfileActivity_getInstance() {
    if (ProfileActivity_instance == null)
      new ProfileActivity();
    return ProfileActivity_instance;
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$ProfileActivityKt$lambda_1$lambda_3c3a8i($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-294398922, $changed, -1, 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-1.<anonymous> (ProfileActivity.kt:52)');
      }
      var tmp = painterResource(get_arrow_left_img(drawable_instance), $composer_0, 0);
      var tmp_0 = Companion_instance;
      $composer_0.a31(-1162895264);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_1;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$ProfileActivityKt$lambda_1$lambda$lambda_t82tvh;
        $composer_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var tmp_3 = clickable(tmp_0, VOID, VOID, VOID, tmp0_group);
      Image(tmp, null, tmp_3, null, null, 0.0, null, $composer_0, 48, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ProfileActivityKt$lambda_1$lambda$lambda_t82tvh() {
    findNavHost().kor();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProfileActivityKt$lambda_2$lambda_phj6tp(components, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1018845263, $changed, -1, 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous> (ProfileActivity.kt:32)');
    }
    // Inline function 'org.koin.compose.koinInject' call
    var qualifier = null;
    var scope = null;
    var parameters = null;
    var $composer_1 = $composer_0;
    $composer_1.y30(414512006);
    if (!((7 & 1) === 0))
      qualifier = null;
    if (!((7 & 2) === 0))
      scope = currentKoinScope($composer_1, 0);
    if (!((7 & 4) === 0))
      parameters = null;
    var currentParameters$delegate = rememberUpdatedState(parameters, $composer_1, 14 & 0 >> 6);
    $composer_1.y30(855641119);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.f2r(qualifier) | $composer_1.f2r(scope));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.koin.compose.koinInject.<anonymous>' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var this_0 = scope;
      var qualifier_0 = qualifier;
      var parameters_0 = ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda_gvh5oi(currentParameters$delegate);
      var value = this_0.gu(getKClass(MainViewModel), qualifier_0, parameters_0);
      $composer_1.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.z30();
    $composer_1.z30();
    var mainViewModel = tmp1_group;
    var currentPupil = collectAsState_0(mainViewModel.soa_1, null, $composer_0, 0, 1).c1();
    var tmp_1 = mainViewModel.uoa_1;
    var clickedPupil = collectAsState_0(tmp_1, null, $composer_0, 0, 1).c1();
    var tmp_2;
    var tmp_3 = clickedPupil == null ? null : clickedPupil.eo7_1;
    if (tmp_3 == (currentPupil == null ? null : currentPupil.eo7_1)) {
      tmp_2 = true;
    } else {
      tmp_2 = clickedPupil == null;
    }
    var isOwnProfile = tmp_2;
    var tmp2_containerColor = Companion_getInstance_4().g68_1;
    var tmp3_titleContentColor = Companion_getInstance_4().d68_1;
    var tmp4_actionIconContentColor = Companion_getInstance_4().d68_1;
    var tmp5_navigationIconContentColor = Companion_getInstance_4().d68_1;
    var tmp6_scrolledContainerColor = Companion_getInstance_4().e68_1;
    var topAppBarColors = new TopAppBarColors(tmp2_containerColor, tmp6_scrolledContainerColor, tmp5_navigationIconContentColor, tmp3_titleContentColor, tmp4_actionIconContentColor);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(-1749579370, true, ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda_gvh5oi_0(components, topAppBarColors, isOwnProfile), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_2.f2r(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_2.w32();
    var tmp_4;
    if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref_69(dispatchReceiver);
      $composer_2.h33(value_0);
      tmp_4 = value_0;
    } else {
      tmp_4 = it_0;
    }
    var tmp_5 = tmp_4;
    var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    var tmp_6 = tmp0;
    ActivityScaffold(components, null, null, tmp_6, null, null, false, false, $composer_0, 3072 | 14 & $changed, 246);
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
    return $currentParameters$delegate.c1();
  }
  function ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda_gvh5oi($currentParameters$delegate) {
    return function () {
      var tmp0_safe_receiver = invoke$lambda_5($currentParameters$delegate);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      return tmp1_elvis_lhs == null ? emptyParametersHolder() : tmp1_elvis_lhs;
    };
  }
  function ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda$lambda_iwoe25($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-277111372, $changed, -1, 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ProfileActivity.kt:61)');
        }
        var tmp0_safe_receiver = $component.goq_1;
        $composer_0.a31(-1155370636);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp_0 = stringResource(tmp0_safe_receiver, $composer_0, 0);
        }
        var tmp1_group = tmp_0;
        $composer_0.c31();
        var tmp_1 = tmp1_group == null ? '' : tmp1_group;
        var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_1, null, tmp_2, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda$lambda_iwoe25_0($isOwnProfile) {
    return function ($this$TopAppBar, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-1513501409, $changed, -1, 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ProfileActivity.kt:66)');
        }
        if ($isOwnProfile) {
          ProfileAction($composer_0, 0);
        }
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
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda_gvh5oi_0($components, $topAppBarColors, $isOwnProfile) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1749579370, $changed, -1, 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous> (ProfileActivity.kt:49)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $components.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-277111372, true, ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda$lambda_iwoe25(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.w32();
        var tmp;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_67(dispatchReceiver);
          $composer_1.h33(value);
          tmp = value;
        } else {
          tmp = it_0;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var tmp_1 = tmp0;
        var tmp_2 = ComposableSingletons$ProfileActivityKt_getInstance().xpp_1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1513501409, true, ComposableSingletons$ProfileActivityKt$lambda_2$lambda$lambda$lambda_iwoe25_0($isOwnProfile), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.f2r(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_2.w32();
        var tmp_3;
        if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.profile.ComposableSingletons$ProfileActivityKt.lambda-2.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_68(dispatchReceiver_0);
          $composer_2.h33(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        var tmp_5 = tmp0_0;
        var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
        TopAppBar(tmp_1, null, tmp_2, tmp_5, tmp_6, null, $topAppBarColors, null, $composer_0, 3462, 178);
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProfileActivityKt() {
    ComposableSingletons$ProfileActivityKt_instance = this;
    var tmp = this;
    tmp.xpp_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(-294398922, false, ComposableSingletons$ProfileActivityKt$lambda_1$lambda_3c3a8i));
    var tmp_0 = this;
    tmp_0.ypp_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(-1018845263, false, ComposableSingletons$ProfileActivityKt$lambda_2$lambda_phj6tp));
  }
  var ComposableSingletons$ProfileActivityKt_instance;
  function ComposableSingletons$ProfileActivityKt_getInstance() {
    if (ComposableSingletons$ProfileActivityKt_instance == null)
      new ComposableSingletons$ProfileActivityKt();
    return ComposableSingletons$ProfileActivityKt_instance;
  }
  var org_korchagin_kmp_activity_profile_components_ProfileComponent$stable;
  function ProfileComponent() {
    ProfileComponent_instance = this;
    var tmp0_label = get_profile_title(string_instance);
    var tmp1_fragments = listOf([ProfileFragment_getInstance(), AvatarCropperFragment_getInstance()]);
    Component.call(this, 'profile_component', ComposableSingletons$ProfileComponentKt_getInstance().zpp_1, tmp0_label, tmp1_fragments);
  }
  var ProfileComponent_instance;
  function ProfileComponent_getInstance() {
    if (ProfileComponent_instance == null)
      new ProfileComponent();
    return ProfileComponent_instance;
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProfileComponentKt$lambda_1$lambda_wyenvs(selected, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(selected) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1494026900, $dirty, -1, 'org.korchagin.kmp.activity.profile.components.ComposableSingletons$ProfileComponentKt.lambda-1.<anonymous> (ProfileComponent.kt:16)');
      }
      SimpleNavIcon(selected, get_people(drawable_instance), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ProfileComponentKt() {
    ComposableSingletons$ProfileComponentKt_instance = this;
    var tmp = this;
    tmp.zpp_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(1494026900, false, ComposableSingletons$ProfileComponentKt$lambda_1$lambda_wyenvs));
  }
  var ComposableSingletons$ProfileComponentKt_instance;
  function ComposableSingletons$ProfileComponentKt_getInstance() {
    if (ComposableSingletons$ProfileComponentKt_instance == null)
      new ComposableSingletons$ProfileComponentKt();
    return ComposableSingletons$ProfileComponentKt_instance;
  }
  var org_korchagin_kmp_activity_profile_fragments_AvatarCropperFragment$stable;
  function AvatarCropperFragment() {
    AvatarCropperFragment_instance = this;
    Fragment.call(this, 'avatar_cropper_fragment', VOID, ComposableSingletons$AvatarCropperFragmentKt_getInstance().cpq_1);
  }
  var AvatarCropperFragment_instance;
  function AvatarCropperFragment_getInstance() {
    if (AvatarCropperFragment_instance == null)
      new AvatarCropperFragment();
    return AvatarCropperFragment_instance;
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$AvatarCropperFragmentKt$lambda_1$lambda_jh5ph6($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1961983347, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.ComposableSingletons$AvatarCropperFragmentKt.lambda-1.<anonymous> (AvatarCropperFragment.kt:37)');
      }
      var tmp = painterResource(get_camera_img(drawable_instance), $composer_0, 0);
      Icon_0(tmp, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$AvatarCropperFragmentKt$lambda_2$lambda_mqbvfr($this$ImageCropper, crop, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r($this$ImageCropper) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(crop) ? 32 : 16);
    if (!(($dirty & 147) === 146) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1351253701, $dirty, -1, 'org.korchagin.kmp.activity.profile.fragments.ComposableSingletons$AvatarCropperFragmentKt.lambda-2.<anonymous> (AvatarCropperFragment.kt:34)');
      }
      var tmp = $this$ImageCropper.kby(Companion_instance, Companion_getInstance_1().u7p_1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      var tmp0_modifier = padding_0(tmp, tmp$ret$0);
      var tmp_0 = ComposableSingletons$AvatarCropperFragmentKt_getInstance().apq_1;
      $composer_0.a31(-306955516);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_1;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.ComposableSingletons$AvatarCropperFragmentKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$AvatarCropperFragmentKt$lambda_2$lambda$lambda_6qssdu(crop);
        $composer_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      AppFab(false, tmp0_modifier, null, null, null, tmp_0, false, false, null, null, tmp0_group, null, null, null, null, $composer_0, 12779520, 0, 31581);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AvatarCropperFragmentKt$lambda_2$lambda$lambda_6qssdu($crop) {
    return function () {
      $crop();
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$AvatarCropperFragmentKt$lambda_3$lambda_63almg(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(924773932, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.ComposableSingletons$AvatarCropperFragmentKt.lambda-3.<anonymous> (AvatarCropperFragment.kt:29)');
    }
    var tmp0_safe_receiver = fragmentNavigator.jov();
    var image = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a4e('new_user_avatar');
    var tmp;
    if (image == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_icons = new CropperIcons(get_scale_linear(drawable_instance), get_noscale_linear(drawable_instance), get_position_linear(drawable_instance), get_noposition_linear(drawable_instance), get_rotation_linear(drawable_instance), get_norotation_linear(drawable_instance), get_arrow_down(drawable_instance));
      var tmp1_colors = new CropperColors(VOID, AppColors_getInstance().ypn().dpn_1);
      var tmp_0 = ComposableSingletons$AvatarCropperFragmentKt_getInstance().bpq_1;
      $composer_0.a31(-1052857707);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.f32(fragmentNavigator);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_1;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.ComposableSingletons$AvatarCropperFragmentKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$AvatarCropperFragmentKt$lambda_3$lambda$lambda_vocusz(fragmentNavigator);
        $composer_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      ImageCropper(image, 0.0, null, 0, 0.0, tmp0_icons, tmp1_colors, tmp_0, tmp0_group, $composer_0, 12582912, 30);
      tmp = Unit_instance;
    }
    if (tmp == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      fragmentNavigator.kor();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AvatarCropperFragmentKt$lambda_3$lambda$lambda_vocusz($fragmentNavigator) {
    return function (byteArray) {
      setResult('new_user_avatar', byteArray);
      $fragmentNavigator.kor();
      return Unit_instance;
    };
  }
  function ComposableSingletons$AvatarCropperFragmentKt() {
    ComposableSingletons$AvatarCropperFragmentKt_instance = this;
    var tmp = this;
    tmp.apq_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(1961983347, false, ComposableSingletons$AvatarCropperFragmentKt$lambda_1$lambda_jh5ph6));
    var tmp_0 = this;
    tmp_0.bpq_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(-1351253701, false, ComposableSingletons$AvatarCropperFragmentKt$lambda_2$lambda_mqbvfr));
    var tmp_1 = this;
    tmp_1.cpq_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(924773932, false, ComposableSingletons$AvatarCropperFragmentKt$lambda_3$lambda_63almg));
  }
  var ComposableSingletons$AvatarCropperFragmentKt_instance;
  function ComposableSingletons$AvatarCropperFragmentKt_getInstance() {
    if (ComposableSingletons$AvatarCropperFragmentKt_instance == null)
      new ComposableSingletons$AvatarCropperFragmentKt();
    return ComposableSingletons$AvatarCropperFragmentKt_instance;
  }
  var org_korchagin_kmp_activity_profile_fragments_ProfileFragment$stable;
  function ProfileFragment() {
    ProfileFragment_instance = this;
    Fragment.call(this, 'profile_fragment', VOID, ComposableSingletons$ProfileFragmentKt_getInstance().dpq_1);
  }
  var ProfileFragment_instance;
  function ProfileFragment_getInstance() {
    if (ProfileFragment_instance == null)
      new ProfileFragment();
    return ProfileFragment_instance;
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$ProfileFragmentKt$lambda_1$lambda_5n4ygf(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2034157950, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.ComposableSingletons$ProfileFragmentKt.lambda-1.<anonymous> (ProfileFragment.kt:9)');
    }
    ProfileScreen(componentNavigator, fragmentNavigator, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ProfileFragmentKt() {
    ComposableSingletons$ProfileFragmentKt_instance = this;
    var tmp = this;
    tmp.dpq_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(-2034157950, false, ComposableSingletons$ProfileFragmentKt$lambda_1$lambda_5n4ygf));
  }
  var ComposableSingletons$ProfileFragmentKt_instance;
  function ComposableSingletons$ProfileFragmentKt_getInstance() {
    if (ComposableSingletons$ProfileFragmentKt_instance == null)
      new ComposableSingletons$ProfileFragmentKt();
    return ComposableSingletons$ProfileFragmentKt_instance;
  }
  function ProfileAction($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-489105855);
    if (!($changed === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-489105855, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileAction (ProfileAction.kt:18)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(AuthViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var authViewModel = tmp0;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = ProfileAction$lambda;
      }
      var composer = $composer_2;
      sourceInformationMarkerStart($composer_2, -954207516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_2.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_0 = createCompositionCoroutineScope(getContext(), composer);
        $composer_2.h33(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_2);
      var scope_0 = tmp1_group;
      $composer_0.a31(566885377);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.f32(scope_0) | $composer_0.f32(authViewModel));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.w32();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileAction.<anonymous>' call
        var value_1 = ProfileAction$lambda_0(scope_0, authViewModel);
        this_0.h33(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      IconButton(tmp0_group, null, false, null, null, ComposableSingletons$ProfileActionKt_getInstance().epq_1, $composer_0, 196608, 30);
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
      tmp1_safe_receiver.n38(ProfileAction$lambda_1($changed));
    }
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$ProfileActionKt$lambda_1$lambda_d85k17($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(891452446, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.screen.ComposableSingletons$ProfileActionKt.lambda-1.<anonymous> (ProfileAction.kt:27)');
      }
      var tmp = painterResource(get_logout(drawable_instance), $composer_0, 0);
      Icon_0(tmp, '', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ProfileActionKt() {
    ComposableSingletons$ProfileActionKt_instance = this;
    var tmp = this;
    tmp.epq_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(891452446, false, ComposableSingletons$ProfileActionKt$lambda_1$lambda_d85k17));
  }
  var ComposableSingletons$ProfileActionKt_instance;
  function ComposableSingletons$ProfileActionKt_getInstance() {
    if (ComposableSingletons$ProfileActionKt_instance == null)
      new ComposableSingletons$ProfileActionKt();
    return ComposableSingletons$ProfileActionKt_instance;
  }
  function ProfileAction$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function ProfileAction$lambda$slambda($authViewModel, resultContinuation) {
    this.npq_1 = $authViewModel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ProfileAction$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ProfileAction$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ProfileAction$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.npq_1.mon(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            findNavHost().jor(AuthActivity_getInstance());
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
  protoOf(ProfileAction$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new ProfileAction$lambda$slambda(this.npq_1, completion);
    i.opq_1 = $this$launch;
    return i;
  };
  function ProfileAction$lambda$slambda_0($authViewModel, resultContinuation) {
    var i = new ProfileAction$lambda$slambda($authViewModel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ProfileAction$lambda_0($scope, $authViewModel) {
    return function () {
      launch($scope, VOID, VOID, ProfileAction$lambda$slambda_0($authViewModel, null));
      return Unit_instance;
    };
  }
  function ProfileAction$lambda_1($$changed) {
    return function ($composer, $force) {
      ProfileAction($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ProfileScreen(componentNavigator, fragmentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1560517452);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(fragmentNavigator) ? 32 : 16);
    if (!(($dirty & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1560517452, $dirty, -1, 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen (ProfileScreen.kt:75)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var currentPupil$delegate = collectAsState(mainViewModel.soa_1, null, null, $composer_0, 48, 2);
      var tmp = mainViewModel.uoa_1;
      var clickedPupil$delegate = collectAsState(tmp, null, null, $composer_0, 48, 2);
      var tmp0_elvis_lhs = ProfileScreen$lambda_0(clickedPupil$delegate);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? ProfileScreen$lambda(currentPupil$delegate) : tmp0_elvis_lhs;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp4_safe_receiver = $composer_0.w33();
        if (tmp4_safe_receiver == null)
          null;
        else {
          tmp4_safe_receiver.n38(ProfileScreen$lambda_4(componentNavigator, fragmentNavigator, $changed));
        }
        return Unit_instance;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var pupil = tmp_0;
      $composer_0.a31(1811545033);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_1;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>' call
        var value_0 = mutableStateOf(true);
        this_0.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var showShimmer = tmp0_group;
      var tmp_3;
      var tmp2_safe_receiver = ProfileScreen$lambda_0(clickedPupil$delegate);
      var tmp_4 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.eo7_1;
      var tmp3_safe_receiver = ProfileScreen$lambda(currentPupil$delegate);
      if (tmp_4 == (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.eo7_1)) {
        tmp_3 = true;
      } else {
        tmp_3 = ProfileScreen$lambda_0(clickedPupil$delegate) == null;
      }
      var isOwnProfile = tmp_3;
      var tmp1_remember$arg$0 = pupil.fo7_1;
      $composer_0.a31(1811549603);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.f2r(tmp1_remember$arg$0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_5;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>' call
        var value_1 = derivedStateOf(ProfileScreen$lambda_5(pupil));
        this_1.h33(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.c31();
      var initials$delegate = tmp2_group;
      var avatarOnLoading$delegate = collectAsState_0(mainViewModel.woa_1, null, $composer_0, 0, 1);
      $composer_0.a31(1811556725);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_7;
      if (false || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>' call
        var value_2 = mutableStateOf(null);
        this_2.h33(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp3_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.c31();
      var debugAvatar$delegate = tmp3_group;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = Companion_getInstance_1().n7p_1;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_9 = $composer_4.v30();
      if (!isInterface(tmp_9, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>' call
      var $composer_6 = $composer_5;
      var tmp_10 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(900);
      var tmp_11 = widthIn(tmp_10, VOID, tmp$ret$17);
      $composer_6.a31(319267474);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(!!(!!(!!($composer_0.f32(pupil) | $composer_0.f2r(initials$delegate)) | $composer_0.f2r(avatarOnLoading$delegate)) | $composer_0.f32(fragmentNavigator)) | $composer_0.f32(mainViewModel)) | $composer_0.g32(isOwnProfile));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_6.w32();
      var tmp_12;
      if (invalid_0 || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>' call
        var value_3 = ProfileScreen$lambda_6(pupil, fragmentNavigator, mainViewModel, isOwnProfile, initials$delegate, avatarOnLoading$delegate, debugAvatar$delegate);
        $composer_6.h33(value_3);
        tmp_12 = value_3;
      } else {
        tmp_12 = it_2;
      }
      var tmp_13 = tmp_12;
      var tmp0_group_0 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_6.c31();
      LazyColumn(tmp_11, null, null, false, null, null, null, false, tmp0_group_0, $composer_6, 6, 254);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.u31();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp5_safe_receiver = $composer_0.w33();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.n38(ProfileScreen$lambda_7(componentNavigator, fragmentNavigator, $changed));
    }
  }
  function ProfileScreen$lambda($currentPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentPupil$delegate.c1();
  }
  function ProfileScreen$lambda_0($clickedPupil$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('clickedPupil', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $clickedPupil$delegate.c1();
  }
  function ProfileScreen$lambda_1($initials$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('initials', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $initials$delegate.c1();
  }
  function ProfileScreen$lambda_2($avatarOnLoading$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('avatarOnLoading', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $avatarOnLoading$delegate.c1();
  }
  function ProfileScreen$lambda_3($debugAvatar$delegate, _set____db54di) {
    getLocalDelegateReference('debugAvatar', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $debugAvatar$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function ProfileScreen$lambda_4($componentNavigator, $fragmentNavigator, $$changed) {
    return function ($composer, $force) {
      ProfileScreen($componentNavigator, $fragmentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda_5($pupil) {
    return function () {
      return (new StringUtils()).ppq($pupil.fo7_1);
    };
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ProfileScreen$lambda$lambda$lambda($avatarOnLoading$delegate) {
    return function ($this$AsyncMultiImage, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-1809039867, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ProfileScreen.kt:122)');
        }
        if (ProfileScreen$lambda_2($avatarOnLoading$delegate)) {
          var tmp_0 = fillMaxSize(Companion_instance);
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          CircularProgressIndicator(tmp_0, tmp_1, tmp_2, tmp_3, _StrokeCap___init__impl__kfgr27(0), $composer_0, 6, 30);
        }
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
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ProfileScreen$lambda$lambda$lambda$lambda$lambda($fragmentNavigator) {
    return function (bytes) {
      var tmp = AvatarCropperFragment_getInstance();
      // Inline function 'kotlin.apply' call
      var this_0 = Bundle_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      this_0.j4d('new_user_avatar', bytes);
      $fragmentNavigator.hov(tmp, this_0);
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda$lambda$lambda$lambda($fragmentNavigator) {
    return function (_unused_var__etf5q3, granted) {
      var tmp;
      if (granted) {
        var tmp_0 = MediaPicker_getInstance();
        tmp_0.npd(ProfileScreen$lambda$lambda$lambda$lambda$lambda($fragmentNavigator));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda$lambda$lambda_0($fragmentNavigator) {
    return function () {
      var tmp = PermissionX_instance;
      tmp.kpd(ProfileScreen$lambda$lambda$lambda$lambda($fragmentNavigator));
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda$lambda$lambda_1($mainViewModel, $pupil, $debugAvatar$delegate) {
    return function (bytes) {
      ProfileScreen$lambda_3($debugAvatar$delegate, bytes);
      $mainViewModel.ioi($pupil.go7_1, bytes);
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda$lambda$lambda_2($this$drawWithCache) {
    return $this$drawWithCache.y7s(ProfileScreen$lambda$lambda$lambda$lambda_0);
  }
  function ProfileScreen$lambda$lambda$lambda$lambda_0($this$onDrawWithContent) {
    $this$onDrawWithContent.s7s();
    $this$onDrawWithContent.y6k(Companion_instance_0.o67(listOf([new Color_0(AppColors_getInstance().ypn().dpn_1), new Color_0(AppColors_getInstance().ypn().npm_1)])), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_8().l66_1);
    return Unit_instance;
  }
  function ProfileScreen$lambda$lambda($pupil, $fragmentNavigator, $mainViewModel, $isOwnProfile, $initials$delegate, $avatarOnLoading$delegate, $debugAvatar$delegate) {
    return function ($this$item, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(1370382822, $changed, -1, 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ProfileScreen.kt:101)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var tmp_0 = fillMaxWidth(Companion_instance);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var modifier = padding_2(tmp_0, VOID, tmp$ret$0);
        var horizontalArrangement = null;
        var verticalAlignment = null;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ubv_1;
        if (!((6 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().v7p_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(8);
        Spacer(width(tmp_2, tmp$ret$3), $composer_5, 6);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_3 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(16);
        var tmp_4 = padding_1(tmp_3, VOID, VOID, VOID, tmp$ret$4);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$5 = _Dp___init__impl__ms3zkb(100);
        var modifier_1 = size(tmp_4, tmp$ret$5);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_1().m7p_1;
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
        var localMap_0 = $composer_7.u32();
        var materialized_0 = materialize($composer_7, modifier_2);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_5 = $composer_8.v30();
        if (!isInterface(tmp_5, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        var tmp_6 = clip(fillMaxSize(Companion_instance), get_CircleShape());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(1);
        var tmp0_modifier = border_0(tmp_6, tmp$ret$8, AppColors_getInstance().ypn().lpm_1, get_CircleShape());
        var tmp1_image = $pupil.ho7_1;
        var tmp0_remember$arg$0 = ProfileScreen$lambda_1($initials$delegate);
        $composer_10.a31(-1711237583);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_10.f2r(tmp0_remember$arg$0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_10.w32();
        var tmp_7;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = generateAvatar(ProfileScreen$lambda_1($initials$delegate));
          $composer_10.h33(value);
          tmp_7 = value;
        } else {
          tmp_7 = it;
        }
        var tmp_8 = tmp_7;
        var tmp1_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_10.c31();
        var tmp3_contentScale = Companion_getInstance_9().y7w_1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1809039867, true, ProfileScreen$lambda$lambda$lambda($avatarOnLoading$delegate), $composer_10, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_11 = $composer_10;
        sourceInformationMarkerStart($composer_11, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_11.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_11.w32();
        var tmp_9;
        if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_77(dispatchReceiver);
          $composer_11.h33(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = it_0;
        }
        var tmp_10 = tmp_9;
        var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        sourceInformationMarkerEnd($composer_11);
        AsyncMultiImage(tmp0_modifier, tmp1_group, null, tmp1_image, false, tmp3_contentScale, false, tmp0, $composer_10, 12779520, 84);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_11 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$20 = _Dp___init__impl__ms3zkb(24);
        var tmp_12 = BoxScopeInstance_instance.kby(size(tmp_11, tmp$ret$20), Companion_getInstance_1().u7p_1);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$21 = _Dp___init__impl__ms3zkb(-8);
        var tmp_13 = background_0(clip(offset(tmp_12, VOID, tmp$ret$21), get_CircleShape()), AppColors_getInstance().ypn().ipn_1);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$22 = _Dp___init__impl__ms3zkb(1);
        var tmp_14 = border_0(tmp_13, tmp$ret$22, AppColors_getInstance().ypn().lpm_1, get_CircleShape());
        $composer_10.a31(-1711201027);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_10.f32($fragmentNavigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_10.w32();
        var tmp_15;
        if (invalid_1 || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ProfileScreen$lambda$lambda$lambda_0($fragmentNavigator);
          $composer_10.h33(value_1);
          tmp_15 = value_1;
        } else {
          tmp_15 = it_1;
        }
        var tmp_16 = tmp_15;
        var tmp2_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        $composer_10.c31();
        var modifier_3 = clickable(tmp_14, VOID, VOID, VOID, tmp2_group);
        var contentAlignment_0 = Companion_getInstance_1().q7p_1;
        var propagateMinConstraints_0 = false;
        var $composer_12 = $composer_10;
        sourceInformationMarkerStart($composer_12, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_1().m7p_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_instance;
        var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_13, 0);
        var localMap_1 = $composer_13.u32();
        var materialized_1 = materialize($composer_13, modifier_4);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_1 = Companion_getInstance_2().s9e_1;
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_17 = $composer_14.v30();
        if (!isInterface(tmp_17, Applier)) {
          invalidApplier();
        }
        $composer_14.o31();
        if ($composer_14.j31()) {
          $composer_14.p31(factory_1);
        } else {
          $composer_14.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_14);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
          $this$with_1.h33(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_16 = $composer_15;
        var tmp_18 = painterResource(get_camera_img(drawable_instance), $composer_16, 0);
        Icon_0(tmp_18, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_16, 48, 12);
        sourceInformationMarkerEnd($composer_15);
        $composer_14.u31();
        sourceInformationMarkerEnd($composer_14);
        sourceInformationMarkerEnd($composer_13);
        sourceInformationMarkerEnd($composer_12);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.u31();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        $composer_5.a31(923738600);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = !!($composer_5.f32($mainViewModel) | $composer_5.f32($pupil));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_5.w32();
        var tmp_19;
        if (invalid_2 || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ProfileScreen$lambda$lambda$lambda_1($mainViewModel, $pupil, $debugAvatar$delegate);
          $composer_5.h33(value_2);
          tmp_19 = value_2;
        } else {
          tmp_19 = it_2;
        }
        var tmp_20 = tmp_19;
        var tmp0_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
        $composer_5.c31();
        getResult('new_user_avatar', tmp0_group, $composer_5, 6);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_5 = null;
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_17 = $composer_5;
        sourceInformationMarkerStart($composer_17, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier_5 = Companion_instance;
        if (!((7 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((7 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy_2 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_17, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_18 = $composer_17;
        sourceInformationMarkerStart($composer_18, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_6 = Companion_instance;
        var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_18, 0);
        var localMap_2 = $composer_18.u32();
        var materialized_2 = materialize($composer_18, modifier_6);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_2 = Companion_getInstance_2().s9e_1;
        var $composer_19 = $composer_18;
        sourceInformationMarkerStart($composer_19, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_21 = $composer_19.v30();
        if (!isInterface(tmp_21, Applier)) {
          invalidApplier();
        }
        $composer_19.o31();
        if ($composer_19.j31()) {
          $composer_19.p31(factory_2);
        } else {
          $composer_19.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_19);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_2 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
        if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
          $this$with_2.h33(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_21 = $composer_20;
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_7 = wrapContentSize(fillMaxSize(Companion_instance), Companion_getInstance_1().q7p_1);
        var contentAlignment_1 = null;
        var propagateMinConstraints_1 = false;
        var $composer_22 = $composer_21;
        sourceInformationMarkerStart($composer_22, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_7 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_1 = Companion_getInstance_1().m7p_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_3 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_8 = modifier_7;
        var $composer_23 = $composer_22;
        sourceInformationMarkerStart($composer_23, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_8 = Companion_instance;
        var compositeKeyHash_3 = get_currentCompositeKeyHash($composer_23, 0);
        var localMap_3 = $composer_23.u32();
        var materialized_3 = materialize($composer_23, modifier_8);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_3 = Companion_getInstance_2().s9e_1;
        var $composer_24 = $composer_23;
        sourceInformationMarkerStart($composer_24, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_22 = $composer_24.v30();
        if (!isInterface(tmp_22, Applier)) {
          invalidApplier();
        }
        $composer_24.o31();
        if ($composer_24.j31()) {
          $composer_24.p31(factory_3);
        } else {
          $composer_24.s31();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_24);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_3 = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_3 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3);
        if ($this$with_3.j31() || !equals($this$with_3.w32(), compositeKeyHash_3)) {
          $this$with_3.h33(compositeKeyHash_3);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3).z31(compositeKeyHash_3, block_3);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_25 = $composer_24;
        sourceInformationMarkerStart($composer_25, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_26 = $composer_25;
        var tmp3_text = $pupil.fo7_1;
        var tmp4_letterSpacing = get_em(0.1);
        var tmp5_fontFamily = Companion_getInstance_6().p74_1;
        var tmp0_textAlign = Companion_getInstance_7().i70_1;
        var tmp1_fontSize = get_sp(20);
        var tmp2_fontWeight = Companion_getInstance_5().a74_1;
        var tmp6_style = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_textAlign);
        var tmp7_textDecoration = Companion_getInstance_0().x74_1;
        var tmp_23 = graphicsLayer(Companion_instance, VOID, VOID, 0.99);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$37 = _Dp___init__impl__ms3zkb(8);
        var tmp_24 = padding_0(tmp_23, tmp$ret$37);
        $composer_26.a31(-1212266365);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_26.w32();
        var tmp_25;
        if (false || it_3 === Companion_getInstance().l2u_1) {
          // Inline function 'org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ProfileScreen$lambda$lambda$lambda_2;
          $composer_26.h33(value_3);
          tmp_25 = value_3;
        } else {
          tmp_25 = it_3;
        }
        var tmp_26 = tmp_25;
        var tmp0_group_0 = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
        $composer_26.c31();
        var tmp8_modifier = drawWithCache(tmp_24, tmp0_group_0);
        var tmp_27 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_29 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_30 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp3_text, tmp8_modifier, tmp_27, tmp_28, null, null, tmp5_fontFamily, tmp4_letterSpacing, tmp7_textDecoration, null, tmp_29, tmp_30, false, 0, 0, null, tmp6_style, $composer_26, 113246208, 0, 65084);
        sourceInformationMarkerEnd($composer_25);
        $composer_24.u31();
        sourceInformationMarkerEnd($composer_24);
        sourceInformationMarkerEnd($composer_23);
        sourceInformationMarkerEnd($composer_22);
        var tmp_31;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $pupil.io7_1;
        if (charSequenceLength(this_0) > 0) {
          tmp_31 = calculateAge($pupil.io7_1).toString();
        } else {
          tmp_31 = '\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E';
        }
        StyledTextScreen('\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ', tmp_31, $composer_21, 6);
        StyledTextScreen('\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ', $pupil.io7_1, $composer_21, 6);
        StyledTextScreen('\u0421\u0442\u0440\u0430\u043D\u0430: ', $pupil.jo7_1, $composer_21, 6);
        StyledTextScreen('\u0413\u043E\u0440\u043E\u0434: ', $pupil.ko7_1, $composer_21, 6);
        sourceInformationMarkerEnd($composer_20);
        $composer_19.u31();
        sourceInformationMarkerEnd($composer_19);
        sourceInformationMarkerEnd($composer_18);
        sourceInformationMarkerEnd($composer_17);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.a31(-1223593026);
        if (get_currentPlatform().equals(PlatformType_JS_getInstance())) {
          var tmp_32 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$43 = _Dp___init__impl__ms3zkb(350);
          Spacer(height(tmp_32, tmp$ret$43), $composer_0, 6);
        }
        $composer_0.c31();
        VideoPlayer(250, $pupil.lo7_1, $composer_0, 6);
        var tmp_33 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$44 = _Dp___init__impl__ms3zkb(10);
        Spacer(height(tmp_33, tmp$ret$44), $composer_0, 6);
        if ($isOwnProfile) {
          var tmp0_modifier_0 = fillMaxWidth(Companion_instance);
          var tmp1_style = Typography_getInstance().dpi(FontWeights_SemiBold_getInstance());
          var tmp2_textAlign = Companion_getInstance_7().i70_1;
          var tmp_34 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_35 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_36 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_37 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_38 = _TextOverflow___init__impl__obguoe(0);
          Text('\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043E\u0442 \u0442\u0440\u0435\u043D\u0435\u0440\u0430', tmp0_modifier_0, tmp_34, tmp_35, null, null, null, tmp_36, null, tmp2_textAlign, tmp_37, tmp_38, false, 0, 0, null, tmp1_style, $composer_0, 54, 0, 65020);
          var tmp_39 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$45 = _Dp___init__impl__ms3zkb(16);
          var tmp_40 = fillMaxWidth(padding_0(tmp_39, tmp$ret$45));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_41 = _Dp___init__impl__ms3zkb(1);
          var tmp_42 = AppColors_getInstance().ypn().lpm_1;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$47 = _Dp___init__impl__ms3zkb(15);
          var tmp_43 = border_0(tmp_40, tmp_41, tmp_42, RoundedCornerShape(tmp$ret$47));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$48 = _Dp___init__impl__ms3zkb(12);
          var tmp3_modifier = padding_0(tmp_43, tmp$ret$48);
          var tmp4_text = $pupil.ro7_1;
          var tmp5_style = Typography_getInstance().kpj(FontWeights_SemiBold_getInstance());
          var tmp_44 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_45 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_46 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_47 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_48 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp4_text, tmp3_modifier, tmp_44, tmp_45, null, null, null, tmp_46, null, null, tmp_47, tmp_48, false, 0, 0, null, tmp5_style, $composer_0, 0, 0, 65532);
        }
        var tmp_49;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_49 = Unit_instance;
        }
        tmp = tmp_49;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda_6($pupil, $fragmentNavigator, $mainViewModel, $isOwnProfile, $initials$delegate, $avatarOnLoading$delegate, $debugAvatar$delegate) {
    return function ($this$LazyColumn) {
      $this$LazyColumn.zf2(VOID, VOID, ComposableLambda$invoke$ref_76(composableLambdaInstance(1370382822, true, ProfileScreen$lambda$lambda($pupil, $fragmentNavigator, $mainViewModel, $isOwnProfile, $initials$delegate, $avatarOnLoading$delegate, $debugAvatar$delegate))));
      return Unit_instance;
    };
  }
  function ProfileScreen$lambda_7($componentNavigator, $fragmentNavigator, $$changed) {
    return function ($composer, $force) {
      ProfileScreen($componentNavigator, $fragmentNavigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_activity_splash_SplashActivity$stable;
  function SplashActivity() {
    SplashActivity_instance = this;
    Activity.call(this, 'splash_activity', listOf_0(SplashComponent_getInstance()), ComposableSingletons$SplashActivityKt_getInstance().qpq_1);
  }
  var SplashActivity_instance;
  function SplashActivity_getInstance() {
    if (SplashActivity_instance == null)
      new SplashActivity();
    return SplashActivity_instance;
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
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
    $composer_1.y30(414512006);
    if (!((7 & 1) === 0))
      qualifier = null;
    if (!((7 & 2) === 0))
      scope = currentKoinScope($composer_1, 0);
    if (!((7 & 4) === 0))
      parameters = null;
    var currentParameters$delegate = rememberUpdatedState(parameters, $composer_1, 14 & 0 >> 6);
    $composer_1.y30(855641119);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.f2r(qualifier) | $composer_1.f2r(scope));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.koin.compose.koinInject.<anonymous>' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var this_0 = scope;
      var qualifier_0 = qualifier;
      var parameters_0 = ComposableSingletons$SplashActivityKt$lambda_1$lambda$lambda_rplcch(currentParameters$delegate);
      var value = this_0.gu(getKClass(MainViewModel), qualifier_0, parameters_0);
      $composer_1.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.z30();
    $composer_1.z30();
    var viewModel = tmp1_group;
    ActivityScaffold(components, null, null, null, null, null, false, false, $composer_0, 14 & $changed, 254);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function invoke$lambda_6($currentParameters$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentParameters', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentParameters$delegate.c1();
  }
  function ComposableSingletons$SplashActivityKt$lambda_1$lambda$lambda_rplcch($currentParameters$delegate) {
    return function () {
      var tmp0_safe_receiver = invoke$lambda_6($currentParameters$delegate);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      return tmp1_elvis_lhs == null ? emptyParametersHolder() : tmp1_elvis_lhs;
    };
  }
  function ComposableSingletons$SplashActivityKt() {
    ComposableSingletons$SplashActivityKt_instance = this;
    var tmp = this;
    tmp.qpq_1 = ComposableLambda$invoke$ref_78(composableLambdaInstance(1375845529, false, ComposableSingletons$SplashActivityKt$lambda_1$lambda_r7joq2));
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
    Fragment.call(this, 'splash_fragment', VOID, ComposableSingletons$SplashFragmentKt_getInstance().rpq_1);
  }
  var SplashFragment_instance;
  function SplashFragment_getInstance() {
    if (SplashFragment_instance == null)
      new SplashFragment();
    return SplashFragment_instance;
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.q40(p0, p1, p2, p3, p4);
    };
  }
  function ComposableSingletons$SplashFragmentKt$lambda_1$lambda_yuc4k5(componentNavigator, fragmentNavigator, paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1793043748, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.ComposableSingletons$SplashFragmentKt.lambda-1.<anonymous> (SplashFragment.kt:8)');
    }
    SplashScreen(componentNavigator, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SplashFragmentKt() {
    ComposableSingletons$SplashFragmentKt_instance = this;
    var tmp = this;
    tmp.rpq_1 = ComposableLambda$invoke$ref_79(composableLambdaInstance(1793043748, false, ComposableSingletons$SplashFragmentKt$lambda_1$lambda_yuc4k5));
  }
  var ComposableSingletons$SplashFragmentKt_instance;
  function ComposableSingletons$SplashFragmentKt_getInstance() {
    if (ComposableSingletons$SplashFragmentKt_instance == null)
      new ComposableSingletons$SplashFragmentKt();
    return ComposableSingletons$SplashFragmentKt_instance;
  }
  function SplashScreen(componentNavigator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-348898267);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-348898267, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen (SplashScreen.kt:31)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(AuthViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var authViewModel = tmp0;
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier_0 = null;
      var viewModelStoreOwner_0 = null;
      var key_0 = null;
      var extras_0 = null;
      var scope_0 = null;
      var parameters_0 = null;
      var $composer_2 = $composer_0;
      $composer_2.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier_0 = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.checkNotNull' call
          var value_0 = LocalViewModelStoreOwner_getInstance().nb1($composer_2, 0);
          // Inline function 'kotlin.contracts.contract' call
          if (value_0 == null) {
            // Inline function 'org.koin.compose.viewmodel.koinViewModel.<anonymous>' call
            var message_0 = 'No ViewModelStoreOwner was provided via LocalViewModelStoreOwner';
            throw IllegalStateException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$4 = value_0;
            break $l$block_0;
          }
        }
        viewModelStoreOwner_0 = tmp$ret$4;
      }
      if (!((63 & 4) === 0))
        key_0 = null;
      if (!((63 & 8) === 0))
        extras_0 = defaultExtras(viewModelStoreOwner_0, $composer_2, 8);
      if (!((63 & 16) === 0))
        scope_0 = currentKoinScope($composer_2, 0);
      if (!((63 & 32) === 0))
        parameters_0 = null;
      var tmp0_0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner_0.p4g(), key_0, extras_0, qualifier_0, scope_0, parameters_0);
      $composer_2.z30();
      var mainViewModel = tmp0_0;
      var currentUser$delegate = collectAsState_0(authViewModel.foo_1, null, $composer_0, 0, 1);
      $composer_0.a31(-195440631);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>' call
        var value_1 = mutableStateOf(true);
        this_0.h33(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var visible = tmp0_group;
      $composer_0.a31(-195438305);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.f2r(currentUser$delegate) | $composer_0.f32(mainViewModel));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>' call
        var value_2 = SplashScreen$slambda_0(visible, mainViewModel, currentUser$delegate, null);
        this_1.h33(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect_0(Unit_instance, tmp1_group, $composer_0, 6);
      var gifNames = listOf(['break_splash1', 'break_splash2', 'break_splash3', 'break_splash4', 'break_splash5']);
      // Inline function 'kotlin.collections.random' call
      var randomGifName = random(gifNames, Default_getInstance());
      var gifUrl = 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/Logo%2Fbreak_splash1.gif?alt=media&token=7086ff5c-a41e-4740-8358-f31a2d4c53b6';
      var tmp_3 = visible.c1();
      var tmp_4 = fadeOut(tween(1000));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1795430477, true, SplashScreen$lambda_0(gifUrl, randomGifName), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.w32();
      var tmp_5;
      if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_80(dispatchReceiver);
        $composer_3.h33(value_3);
        tmp_5 = value_3;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      AnimatedVisibility(tmp_3, null, null, tmp_4, null, tmp0_1, $composer_0, 199680, 22);
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
      tmp2_safe_receiver.n38(SplashScreen$lambda_1(componentNavigator, $changed));
    }
  }
  function SplashScreen$lambda($currentUser$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentUser', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentUser$delegate.c1();
  }
  function SplashScreen$slambda($visible, $mainViewModel, $currentUser$delegate, resultContinuation) {
    this.apr_1 = $visible;
    this.bpr_1 = $mainViewModel;
    this.cpr_1 = $currentUser$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SplashScreen$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SplashScreen$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SplashScreen$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = delay(new Long(3000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.apr_1.a1y(false);
            this.s9_1 = 2;
            suspendResult = delay(new Long(1000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!(SplashScreen$lambda(this.cpr_1) == null)) {
              println('currentUser: ' + ensureNotNull(SplashScreen$lambda(this.cpr_1)).sol());
              this.bpr_1.koi(ensureNotNull(ensureNotNull(SplashScreen$lambda(this.cpr_1)).sol()));
              findNavHost().jor(MainActivity_getInstance());
            } else {
              findNavHost().jor(AuthActivity_getInstance());
            }

            return Unit_instance;
          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 3) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SplashScreen$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new SplashScreen$slambda(this.apr_1, this.bpr_1, this.cpr_1, completion);
    i.dpr_1 = $this$LaunchedEffect;
    return i;
  };
  function SplashScreen$slambda_0($visible, $mainViewModel, $currentUser$delegate, resultContinuation) {
    var i = new SplashScreen$slambda($visible, $mainViewModel, $currentUser$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SplashScreen$lambda_0($gifUrl, $randomGifName) {
    return function ($this$AnimatedVisibility, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1795430477, $changed, -1, 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous> (SplashScreen.kt:59)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = background_0(fillMaxSize(Companion_instance), Companion_getInstance_4().d68_1);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var factory = Companion_getInstance_2().s9e_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_5 = $composer_4;
      if (get_currentPlatform().z2_1 === 1) {
        $composer_5.a31(1720793177);
        GifImage($gifUrl, $composer_5, 6);
        $composer_5.c31();
      } else {
        $composer_5.a31(1720884317);
        GifImage($randomGifName, $composer_5, 0);
        $composer_5.c31();
      }
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function SplashScreen$lambda_1($componentNavigator, $$changed) {
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
      $this$startKoin.kr(plus(getMainModules(), getAuthModules()));
      return Unit_instance;
    };
  }
  function setAvatarBorder(curPupil) {
    var tmp0_subject = numberToInt(curPupil.uo7_1);
    return (0 <= tmp0_subject ? tmp0_subject <= 9 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().ppm_1), new Color_0(AppColors_getInstance().ypn().opm_1)]) : (10 <= tmp0_subject ? tmp0_subject <= 19 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().ppm_1), new Color_0(AppColors_getInstance().ypn().opm_1)]) : (20 <= tmp0_subject ? tmp0_subject <= 29 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().ppm_1), new Color_0(AppColors_getInstance().ypn().opm_1)]) : (30 <= tmp0_subject ? tmp0_subject <= 39 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().rpm_1), new Color_0(AppColors_getInstance().ypn().npm_1)]) : (40 <= tmp0_subject ? tmp0_subject <= 49 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().rpm_1), new Color_0(AppColors_getInstance().ypn().npm_1)]) : (50 <= tmp0_subject ? tmp0_subject <= 59 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().rpm_1), new Color_0(AppColors_getInstance().ypn().npm_1)]) : (60 <= tmp0_subject ? tmp0_subject <= 69 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().ppm_1), new Color_0(AppColors_getInstance().ypn().lpm_1)]) : (70 <= tmp0_subject ? tmp0_subject <= 79 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().ppm_1), new Color_0(AppColors_getInstance().ypn().lpm_1)]) : (80 <= tmp0_subject ? tmp0_subject <= 89 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().qpm_1), new Color_0(AppColors_getInstance().ypn().mpm_1)]) : (90 <= tmp0_subject ? tmp0_subject <= 100 : false) ? listOf([new Color_0(AppColors_getInstance().ypn().qpm_1), new Color_0(AppColors_getInstance().ypn().mpm_1)]) : listOf([new Color_0(AppColors_getInstance().ypn().qpm_1), new Color_0(AppColors_getInstance().ypn().mpm_1)]);
  }
  function setDescriptionText(index, element) {
    switch (index) {
      case 0:
        return element.no6_1;
      case 1:
        return element.oo6_1;
      case 2:
        return element.po6_1;
      case 3:
        return element.qo6_1;
      case 4:
        return element.ro6_1;
      case 5:
        return element.so6_1;
      case 6:
        return element.to6_1;
      case 7:
        return element.uo6_1;
      case 8:
        return element.vo6_1;
      case 9:
        return element.wo6_1;
      default:
        return element.no6_1;
    }
  }
  function setDescriptionImage(index) {
    switch (index) {
      case 0:
        return get_percent10(drawable_instance);
      case 1:
        return get_percent20(drawable_instance);
      case 2:
        return get_percent30(drawable_instance);
      case 3:
        return get_percent40(drawable_instance);
      case 4:
        return get_percent50(drawable_instance);
      case 5:
        return get_percent60(drawable_instance);
      case 6:
        return get_percent70(drawable_instance);
      case 7:
        return get_percent80(drawable_instance);
      case 8:
        return get_percent90(drawable_instance);
      case 9:
        return get_percent100(drawable_instance);
      default:
        return get_percent10(drawable_instance);
    }
  }
  function setElementColor(elementTitle) {
    switch (elementTitle) {
      case 'Baby':
      case 'Shoulder':
      case 'Head':
      case 'Backspin':
      case 'TurtleMove':
      case 'HeadSpin':
      case 'Windmill':
      case 'Butterfly':
      case 'Fold':
      case 'Twine':
      case 'Shoulders':
      case 'PushUps':
      case 'SitUps':
      case 'Bridge':
        return AppColors_getInstance().ypn().hpm_1;
      case 'Turtle':
      case 'HeadHollowback':
      case 'Swipes':
      case 'Muchmill':
      case 'Web':
      case 'Wolf':
      case 'Cricket':
      case 'Flare':
      case 'Ninetynine':
      case 'Halo':
      case 'Handstand':
      case 'Fingers':
      case 'Angle':
        return AppColors_getInstance().ypn().ipm_1;
      case 'Chair':
      case 'OneHand':
      case 'Invert':
      case 'Hollowback':
      case 'Elbow':
      case 'ElbowAirflare':
      case 'Airflare':
      case 'Jackhammer':
      case 'Ufo':
      case 'Horizont':
      case 'PressToHandstand':
        return AppColors_getInstance().ypn().jpm_1;
      default:
        return Companion_getInstance_4().z67_1;
    }
  }
  function setElementImage(elementTitle, currentPupil, info) {
    var tmp;
    switch (elementTitle) {
      case 'Chair':
        tmp = currentPupil.eo8_1 >= 20 && currentPupil.no8_1 >= 20 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Elbow':
        tmp = currentPupil.eo8_1 >= 50 && currentPupil.no8_1 >= 40 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'HeadHollowback':
        tmp = currentPupil.ho8_1 >= 70 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'OneHand':
        tmp = currentPupil.ho9_1 >= 50 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Invert':
        tmp = currentPupil.eo8_1 >= 40 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Hollowback':
        tmp = currentPupil.ho9_1 >= 50 && currentPupil.fo9_1 >= 80 && currentPupil.io8_1 >= 60 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Airflare':
        tmp = currentPupil.ho9_1 >= 80 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Cricket':
        tmp = currentPupil.zo8_1 >= 65 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'ElbowAirflare':
        tmp = currentPupil.go8_1 >= 80 && currentPupil.ho9_1 >= 80 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Flare':
        tmp = currentPupil.ho9_1 >= 30 && currentPupil.io9_1 >= 45 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Halo':
        tmp = currentPupil.co9_1 >= 80 && currentPupil.fo8_1 >= 50 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'HeadSpin':
        tmp = currentPupil.ho8_1 >= 60 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Jackhammer':
        tmp = currentPupil.qo8_1 >= 90 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Muchmill':
        tmp = currentPupil.co9_1 >= 80 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Ninetynine':
        tmp = currentPupil.ho9_1 >= 80 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'TurtleMove':
        tmp = currentPupil.no8_1 >= 40 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Ufo':
        tmp = currentPupil.do9_1 >= 60 && currentPupil.io9_1 >= 70 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Web':
        tmp = currentPupil.co9_1 >= 80 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Windmill':
        tmp = currentPupil.eo8_1 >= 50 && currentPupil.no8_1 >= 40 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      case 'Wolf':
        tmp = currentPupil.io9_1 >= 55 ? info.ko6_1 : 'https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/FreezeImage%2Flock.png?alt=media&token=aba42aa7-e838-4185-a6be-87f151a75883';
        break;
      default:
        tmp = info.ko6_1;
        break;
    }
    return tmp;
  }
  function setLevel(rating) {
    return (0 <= rating ? rating <= 9 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 0' : (10 <= rating ? rating <= 19 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 1' : (20 <= rating ? rating <= 29 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 2' : (30 <= rating ? rating <= 39 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 3' : (40 <= rating ? rating <= 49 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 4' : (50 <= rating ? rating <= 59 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 5' : (60 <= rating ? rating <= 69 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 6' : (70 <= rating ? rating <= 79 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 7' : (80 <= rating ? rating <= 89 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 8' : (90 <= rating ? rating <= 99 : false) ? '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 9' : '\u0423\u0440\u043E\u0432\u0435\u043D\u044C - 10';
  }
  function setPositionBackgroundColor(index) {
    switch (index) {
      case 0:
        return AppColors_getInstance().ypn().spm_1;
      case 1:
        return AppColors_getInstance().ypn().tpm_1;
      case 2:
        return AppColors_getInstance().ypn().upm_1;
      case 3:
        return AppColors_getInstance().ypn().vpm_1;
      case 4:
        return AppColors_getInstance().ypn().wpm_1;
      case 6:
        return AppColors_getInstance().ypn().xpm_1;
      case 7:
        return AppColors_getInstance().ypn().ypm_1;
      case 8:
        return AppColors_getInstance().ypn().zpm_1;
      case 9:
        return AppColors_getInstance().ypn().apn_1;
      default:
        return Companion_getInstance_4().d68_1;
    }
  }
  function setPositionColor(index) {
    switch (index) {
      case 0:
        return AppColors_getInstance().ypn().spm_1;
      case 1:
        return AppColors_getInstance().ypn().tpm_1;
      case 2:
        return AppColors_getInstance().ypn().upm_1;
      case 3:
        return AppColors_getInstance().ypn().vpm_1;
      case 4:
        return AppColors_getInstance().ypn().wpm_1;
      case 5:
        return AppColors_getInstance().ypn().xpm_1;
      case 6:
        return AppColors_getInstance().ypn().ypm_1;
      case 7:
        return AppColors_getInstance().ypn().zpm_1;
      case 8:
        return AppColors_getInstance().ypn().apn_1;
      case 9:
        return AppColors_getInstance().ypn().bpn_1;
      default:
        return Companion_getInstance_4().d68_1;
    }
  }
  function setPositionFontSize(index) {
    return (0 <= index ? index <= 2 : false) ? 20 : (3 <= index ? index <= 5 : false) ? 18 : (6 <= index ? index <= 9 : false) ? 16 : (10 <= index ? index <= 19 : false) ? 15 : 14;
  }
  function setPositionStar(index) {
    switch (index) {
      case 0:
        return get_star_top_1(drawable_instance);
      case 1:
        return get_star_top_2(drawable_instance);
      case 2:
        return get_star_top_3(drawable_instance);
      default:
        return get_star_default(drawable_instance);
    }
  }
  var org_korchagin_kmp_theme_colors_AppColorsDefined_LightTheme$stable;
  var org_korchagin_kmp_theme_colors_AppColorsDefined_DarkTheme$stable;
  var org_korchagin_kmp_theme_colors_AppColors$stable;
  var org_korchagin_kmp_theme_colors_AppColorsTheme$stable;
  var org_korchagin_kmp_theme_colors_Colors$stable;
  function LightTheme() {
    LightTheme_instance = this;
    this.epr_1 = Color_1(0);
    this.fpr_1 = Color(new Long(-8880248, 0));
    this.gpr_1 = Color(new Long(-16524603, 0));
    this.hpr_1 = Color(new Long(-16670042, 0));
    this.ipr_1 = Color(new Long(-197480, 0));
    this.jpr_1 = Color(new Long(-204032, 0));
    this.kpr_1 = Color(new Long(-223488, 0));
    this.lpr_1 = Color(new Long(-16385498, 0));
    this.mpr_1 = Color(new Long(-4144960, 0));
    this.npr_1 = Color(new Long(-10496, 0));
    this.opr_1 = Color(new Long(-3309774, 0));
    this.ppr_1 = Color(new Long(-9211021, 0));
    this.qpr_1 = Color(new Long(-986638, 0));
    this.rpr_1 = Color(new Long(-394582, 0));
    this.spr_1 = Color(new Long(-1322844, 0));
    this.tpr_1 = Color(new Long(-2733048, 0));
    this.upr_1 = Color(new Long(-239872, 0));
    this.vpr_1 = Color(new Long(-232960, 0));
    this.wpr_1 = Color(new Long(-223488, 0));
    this.xpr_1 = Color(new Long(-217600, 0));
    this.ypr_1 = Color(new Long(-208896, 0));
    this.zpr_1 = Color(new Long(-204032, 0));
    this.aps_1 = Color(new Long(-198136, 0));
    this.bps_1 = Color(new Long(-198056, 0));
    this.cps_1 = Color(new Long(-197992, 0));
    this.dps_1 = Color(new Long(-14523986, 0));
    this.eps_1 = Color(new Long(-1, 0));
    this.fps_1 = Color(new Long(-1, 0));
    this.gps_1 = Color(new Long(-9013638, 0));
    this.hps_1 = Color(new Long(-9013638, 0));
    this.ips_1 = Color(new Long(-1, 0));
    this.jps_1 = Color(new Long(-14540252, 0));
    this.kps_1 = Color(new Long(-40093, 0));
    this.lps_1 = Color(new Long(-1069056, 0));
    this.mps_1 = Color(new Long(-14523986, 0));
    this.nps_1 = Color(new Long(-15353777, 0));
    this.ops_1 = Color(new Long(-40093, 0));
    this.pps_1 = Color(new Long(-1069056, 0));
    this.qps_1 = Color(new Long(-1, 0));
    this.rps_1 = Color(new Long(-1, 0));
    this.sps_1 = Color(new Long(-1, 0));
    this.tps_1 = Color(new Long(-1069056, 0));
    this.ups_1 = Color(new Long(-10393459, 0));
    this.vps_1 = Color(new Long(-3376054, 0));
  }
  var LightTheme_instance;
  function LightTheme_getInstance() {
    if (LightTheme_instance == null)
      new LightTheme();
    return LightTheme_instance;
  }
  function DarkTheme() {
    DarkTheme_instance = this;
    this.wps_1 = Color(new Long(-1, 0));
    this.xps_1 = Color(new Long(-11512484, 0));
    this.yps_1 = Color(new Long(-16524603, 0));
    this.zps_1 = Color(new Long(-16670042, 0));
    this.apt_1 = Color(new Long(-197480, 0));
    this.bpt_1 = Color(new Long(-204032, 0));
    this.cpt_1 = Color(new Long(-223488, 0));
    this.dpt_1 = Color(new Long(-16385498, 0));
    this.ept_1 = Color(new Long(-4144960, 0));
    this.fpt_1 = Color(new Long(-10496, 0));
    this.gpt_1 = Color(new Long(-3309774, 0));
    this.hpt_1 = Color(new Long(-9211021, 0));
    this.ipt_1 = Color(new Long(-986638, 0));
    this.jpt_1 = Color(new Long(-394582, 0));
    this.kpt_1 = Color(new Long(-1322844, 0));
    this.lpt_1 = Color(new Long(-2733048, 0));
    this.mpt_1 = Color(new Long(-239872, 0));
    this.npt_1 = Color(new Long(-232960, 0));
    this.opt_1 = Color(new Long(-223488, 0));
    this.ppt_1 = Color(new Long(-217600, 0));
    this.qpt_1 = Color(new Long(-208896, 0));
    this.rpt_1 = Color(new Long(-204032, 0));
    this.spt_1 = Color(new Long(-198136, 0));
    this.tpt_1 = Color(new Long(-198056, 0));
    this.upt_1 = Color(new Long(-197992, 0));
    this.vpt_1 = Color(new Long(-14523986, 0));
    this.wpt_1 = Color(new Long(-1, 0));
    this.xpt_1 = Color(new Long(-1, 0));
    this.ypt_1 = Color(new Long(-4408129, 0));
    this.zpt_1 = Color(new Long(-4408129, 0));
    this.apu_1 = Color(new Long(-14540252, 0));
    this.bpu_1 = Color(new Long(-1, 0));
    this.cpu_1 = Color(new Long(-40093, 0));
    this.dpu_1 = Color(new Long(-1069056, 0));
    this.epu_1 = Color(new Long(-14523986, 0));
    this.fpu_1 = Color(new Long(-15353777, 0));
    this.gpu_1 = Color(new Long(-40093, 0));
    this.hpu_1 = Color(new Long(-1069056, 0));
    this.ipu_1 = Color(new Long(-1, 0));
    this.jpu_1 = Color(new Long(-1, 0));
    this.kpu_1 = Color(new Long(-1, 0));
    this.lpu_1 = Color(new Long(-1069056, 0));
    this.mpu_1 = Color(new Long(-10393459, 0));
    this.npu_1 = Color(new Long(-3376054, 0));
  }
  var DarkTheme_instance;
  function DarkTheme_getInstance() {
    if (DarkTheme_instance == null)
      new DarkTheme();
    return DarkTheme_instance;
  }
  function AppColors() {
    AppColors_instance = this;
    this.xpn_1 = new Colors();
  }
  protoOf(AppColors).ypn = function () {
    return this.xpn_1;
  };
  protoOf(AppColors).opu = function (colors) {
    this.xpn_1 = colors;
  };
  var AppColors_instance;
  function AppColors_getInstance() {
    if (AppColors_instance == null)
      new AppColors();
    return AppColors_instance;
  }
  function AppColorsTheme() {
  }
  protoOf(AppColorsTheme).qph = function () {
    AppColors_getInstance().opu(new Colors(LightTheme_getInstance().gpr_1, LightTheme_getInstance().hpr_1, LightTheme_getInstance().ipr_1, LightTheme_getInstance().jpr_1, LightTheme_getInstance().kpr_1, LightTheme_getInstance().lpr_1, LightTheme_getInstance().mpr_1, LightTheme_getInstance().npr_1, LightTheme_getInstance().opr_1, LightTheme_getInstance().ppr_1, LightTheme_getInstance().qpr_1, LightTheme_getInstance().rpr_1, LightTheme_getInstance().spr_1, LightTheme_getInstance().tpr_1, LightTheme_getInstance().upr_1, LightTheme_getInstance().vpr_1, LightTheme_getInstance().wpr_1, LightTheme_getInstance().xpr_1, LightTheme_getInstance().ypr_1, LightTheme_getInstance().zpr_1, LightTheme_getInstance().aps_1, LightTheme_getInstance().bps_1, LightTheme_getInstance().cps_1, LightTheme_getInstance().dps_1, LightTheme_getInstance().epr_1, LightTheme_getInstance().fpr_1, LightTheme_getInstance().eps_1, LightTheme_getInstance().fps_1, LightTheme_getInstance().gps_1, LightTheme_getInstance().ips_1, LightTheme_getInstance().hps_1, LightTheme_getInstance().jps_1, LightTheme_getInstance().kps_1, LightTheme_getInstance().lps_1, LightTheme_getInstance().mps_1, LightTheme_getInstance().nps_1, LightTheme_getInstance().ops_1, LightTheme_getInstance().pps_1, LightTheme_getInstance().qps_1, LightTheme_getInstance().rps_1, LightTheme_getInstance().sps_1, LightTheme_getInstance().tps_1, LightTheme_getInstance().ups_1, LightTheme_getInstance().vps_1));
  };
  protoOf(AppColorsTheme).yph = function () {
    AppColors_getInstance().opu(new Colors(DarkTheme_getInstance().yps_1, DarkTheme_getInstance().zps_1, DarkTheme_getInstance().apt_1, DarkTheme_getInstance().bpt_1, DarkTheme_getInstance().cpt_1, DarkTheme_getInstance().dpt_1, DarkTheme_getInstance().ept_1, DarkTheme_getInstance().fpt_1, DarkTheme_getInstance().gpt_1, DarkTheme_getInstance().hpt_1, DarkTheme_getInstance().ipt_1, DarkTheme_getInstance().jpt_1, DarkTheme_getInstance().kpt_1, DarkTheme_getInstance().lpt_1, DarkTheme_getInstance().mpt_1, DarkTheme_getInstance().npt_1, DarkTheme_getInstance().opt_1, DarkTheme_getInstance().ppt_1, DarkTheme_getInstance().qpt_1, DarkTheme_getInstance().rpt_1, DarkTheme_getInstance().spt_1, DarkTheme_getInstance().tpt_1, DarkTheme_getInstance().upt_1, DarkTheme_getInstance().vpt_1, DarkTheme_getInstance().wps_1, DarkTheme_getInstance().xps_1, DarkTheme_getInstance().wpt_1, DarkTheme_getInstance().xpt_1, DarkTheme_getInstance().ypt_1, DarkTheme_getInstance().apu_1, DarkTheme_getInstance().zpt_1, DarkTheme_getInstance().bpu_1, DarkTheme_getInstance().cpu_1, DarkTheme_getInstance().dpu_1, DarkTheme_getInstance().epu_1, DarkTheme_getInstance().fpu_1, DarkTheme_getInstance().gpu_1, DarkTheme_getInstance().hpu_1, DarkTheme_getInstance().ipu_1, DarkTheme_getInstance().jpu_1, DarkTheme_getInstance().kpu_1, DarkTheme_getInstance().lpu_1, DarkTheme_getInstance().mpu_1, DarkTheme_getInstance().npu_1));
  };
  function Colors(teal200, mainGreen, easy, medium, hard, progress, silver, gold, bronze, default_0, startAvatar, startGold, startBronze, onePosition, twoPosition, threePosition, fourPosition, fivePosition, sixPosition, sevenPosition, eightPosition, ninePosition, tenPosition, primaryColor, textDefault, textDisabled, textOnPrimary, iconOnPrimary, textGrey, defaultBackground, iconGrey, defaultDividerColor, dislikeColor, shareColor, likeColor, reportStatusAcceptedColor, reportStatusRejectedColor, reportStatusModeratedColor, reportOnAcceptedTextColor, reportOnRejectedTextColor, reportOnModerationTextColor, ratingFistPlaceColor, ratingSecondPlaceColor, ratingThirdPlaceColor) {
    teal200 = teal200 === VOID ? Color(new Long(-1, 0)) : teal200;
    mainGreen = mainGreen === VOID ? Color(new Long(-1, 0)) : mainGreen;
    easy = easy === VOID ? Color(new Long(-1, 0)) : easy;
    medium = medium === VOID ? Color(new Long(-1, 0)) : medium;
    hard = hard === VOID ? Color(new Long(-1, 0)) : hard;
    progress = progress === VOID ? Color(new Long(-1, 0)) : progress;
    silver = silver === VOID ? Color(new Long(-1, 0)) : silver;
    gold = gold === VOID ? Color(new Long(-1, 0)) : gold;
    bronze = bronze === VOID ? Color(new Long(-1, 0)) : bronze;
    default_0 = default_0 === VOID ? Color(new Long(-1, 0)) : default_0;
    startAvatar = startAvatar === VOID ? Color(new Long(-1, 0)) : startAvatar;
    startGold = startGold === VOID ? Color(new Long(-1, 0)) : startGold;
    startBronze = startBronze === VOID ? Color(new Long(-1, 0)) : startBronze;
    onePosition = onePosition === VOID ? Color(new Long(-1, 0)) : onePosition;
    twoPosition = twoPosition === VOID ? Color(new Long(-1, 0)) : twoPosition;
    threePosition = threePosition === VOID ? Color(new Long(-1, 0)) : threePosition;
    fourPosition = fourPosition === VOID ? Color(new Long(-1, 0)) : fourPosition;
    fivePosition = fivePosition === VOID ? Color(new Long(-1, 0)) : fivePosition;
    sixPosition = sixPosition === VOID ? Color(new Long(-1, 0)) : sixPosition;
    sevenPosition = sevenPosition === VOID ? Color(new Long(-1, 0)) : sevenPosition;
    eightPosition = eightPosition === VOID ? Color(new Long(-1, 0)) : eightPosition;
    ninePosition = ninePosition === VOID ? Color(new Long(-1, 0)) : ninePosition;
    tenPosition = tenPosition === VOID ? Color(new Long(-1, 0)) : tenPosition;
    primaryColor = primaryColor === VOID ? Color(new Long(-1, 0)) : primaryColor;
    textDefault = textDefault === VOID ? Color(new Long(-1, 0)) : textDefault;
    textDisabled = textDisabled === VOID ? Color(new Long(-1, 0)) : textDisabled;
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
    this.fpm_1 = teal200;
    this.gpm_1 = mainGreen;
    this.hpm_1 = easy;
    this.ipm_1 = medium;
    this.jpm_1 = hard;
    this.kpm_1 = progress;
    this.lpm_1 = silver;
    this.mpm_1 = gold;
    this.npm_1 = bronze;
    this.opm_1 = default_0;
    this.ppm_1 = startAvatar;
    this.qpm_1 = startGold;
    this.rpm_1 = startBronze;
    this.spm_1 = onePosition;
    this.tpm_1 = twoPosition;
    this.upm_1 = threePosition;
    this.vpm_1 = fourPosition;
    this.wpm_1 = fivePosition;
    this.xpm_1 = sixPosition;
    this.ypm_1 = sevenPosition;
    this.zpm_1 = eightPosition;
    this.apn_1 = ninePosition;
    this.bpn_1 = tenPosition;
    this.cpn_1 = primaryColor;
    this.dpn_1 = textDefault;
    this.epn_1 = textDisabled;
    this.fpn_1 = textOnPrimary;
    this.gpn_1 = iconOnPrimary;
    this.hpn_1 = textGrey;
    this.ipn_1 = defaultBackground;
    this.jpn_1 = iconGrey;
    this.kpn_1 = defaultDividerColor;
    this.lpn_1 = dislikeColor;
    this.mpn_1 = shareColor;
    this.npn_1 = likeColor;
    this.opn_1 = reportStatusAcceptedColor;
    this.ppn_1 = reportStatusRejectedColor;
    this.qpn_1 = reportStatusModeratedColor;
    this.rpn_1 = reportOnAcceptedTextColor;
    this.spn_1 = reportOnRejectedTextColor;
    this.tpn_1 = reportOnModerationTextColor;
    this.upn_1 = ratingFistPlaceColor;
    this.vpn_1 = ratingSecondPlaceColor;
    this.wpn_1 = ratingThirdPlaceColor;
  }
  protoOf(Colors).toString = function () {
    return 'Colors(teal200=' + Color__toString_impl_hpzmaq(this.fpm_1) + ', mainGreen=' + Color__toString_impl_hpzmaq(this.gpm_1) + ', easy=' + Color__toString_impl_hpzmaq(this.hpm_1) + ', medium=' + Color__toString_impl_hpzmaq(this.ipm_1) + ', hard=' + Color__toString_impl_hpzmaq(this.jpm_1) + ', progress=' + Color__toString_impl_hpzmaq(this.kpm_1) + ', silver=' + Color__toString_impl_hpzmaq(this.lpm_1) + ', gold=' + Color__toString_impl_hpzmaq(this.mpm_1) + ', bronze=' + Color__toString_impl_hpzmaq(this.npm_1) + ', default=' + Color__toString_impl_hpzmaq(this.opm_1) + ', startAvatar=' + Color__toString_impl_hpzmaq(this.ppm_1) + ', startGold=' + Color__toString_impl_hpzmaq(this.qpm_1) + ', startBronze=' + Color__toString_impl_hpzmaq(this.rpm_1) + ', onePosition=' + Color__toString_impl_hpzmaq(this.spm_1) + ', twoPosition=' + Color__toString_impl_hpzmaq(this.tpm_1) + ', threePosition=' + Color__toString_impl_hpzmaq(this.upm_1) + ', fourPosition=' + Color__toString_impl_hpzmaq(this.vpm_1) + ', fivePosition=' + Color__toString_impl_hpzmaq(this.wpm_1) + ', sixPosition=' + Color__toString_impl_hpzmaq(this.xpm_1) + ', sevenPosition=' + Color__toString_impl_hpzmaq(this.ypm_1) + ', eightPosition=' + Color__toString_impl_hpzmaq(this.zpm_1) + ', ninePosition=' + Color__toString_impl_hpzmaq(this.apn_1) + ', tenPosition=' + Color__toString_impl_hpzmaq(this.bpn_1) + ', primaryColor=' + Color__toString_impl_hpzmaq(this.cpn_1) + ', textDefault=' + Color__toString_impl_hpzmaq(this.dpn_1) + ', textDisabled=' + Color__toString_impl_hpzmaq(this.epn_1) + ', textOnPrimary=' + Color__toString_impl_hpzmaq(this.fpn_1) + ', iconOnPrimary=' + Color__toString_impl_hpzmaq(this.gpn_1) + ', textGrey=' + Color__toString_impl_hpzmaq(this.hpn_1) + ', defaultBackground=' + Color__toString_impl_hpzmaq(this.ipn_1) + ', iconGrey=' + Color__toString_impl_hpzmaq(this.jpn_1) + ', defaultDividerColor=' + Color__toString_impl_hpzmaq(this.kpn_1) + ', dislikeColor=' + Color__toString_impl_hpzmaq(this.lpn_1) + ', shareColor=' + Color__toString_impl_hpzmaq(this.mpn_1) + ', likeColor=' + Color__toString_impl_hpzmaq(this.npn_1) + ', reportStatusAcceptedColor=' + Color__toString_impl_hpzmaq(this.opn_1) + ', reportStatusRejectedColor=' + Color__toString_impl_hpzmaq(this.ppn_1) + ', reportStatusModeratedColor=' + Color__toString_impl_hpzmaq(this.qpn_1) + ', reportOnAcceptedTextColor=' + Color__toString_impl_hpzmaq(this.rpn_1) + ', reportOnRejectedTextColor=' + Color__toString_impl_hpzmaq(this.spn_1) + ', reportOnModerationTextColor=' + Color__toString_impl_hpzmaq(this.tpn_1) + ', ratingFistPlaceColor=' + Color__toString_impl_hpzmaq(this.upn_1) + ', ratingSecondPlaceColor=' + Color__toString_impl_hpzmaq(this.vpn_1) + ', ratingThirdPlaceColor=' + Color__toString_impl_hpzmaq(this.wpn_1) + ')';
  };
  protoOf(Colors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.fpm_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.gpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.hpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ipm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.jpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.kpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.lpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.mpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.npm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.opm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ppm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.qpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.rpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.spm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.tpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.upm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.vpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.wpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.xpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ypm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.zpm_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.apn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.bpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.cpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.dpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.epn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.fpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.gpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.hpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ipn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.jpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.kpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.lpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.mpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.npn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.opn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.ppn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.qpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.rpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.spn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.tpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.upn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.vpn_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.wpn_1) | 0;
    return result;
  };
  protoOf(Colors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Colors))
      return false;
    var tmp0_other_with_cast = other instanceof Colors ? other : THROW_CCE();
    if (!equals(this.fpm_1, tmp0_other_with_cast.fpm_1))
      return false;
    if (!equals(this.gpm_1, tmp0_other_with_cast.gpm_1))
      return false;
    if (!equals(this.hpm_1, tmp0_other_with_cast.hpm_1))
      return false;
    if (!equals(this.ipm_1, tmp0_other_with_cast.ipm_1))
      return false;
    if (!equals(this.jpm_1, tmp0_other_with_cast.jpm_1))
      return false;
    if (!equals(this.kpm_1, tmp0_other_with_cast.kpm_1))
      return false;
    if (!equals(this.lpm_1, tmp0_other_with_cast.lpm_1))
      return false;
    if (!equals(this.mpm_1, tmp0_other_with_cast.mpm_1))
      return false;
    if (!equals(this.npm_1, tmp0_other_with_cast.npm_1))
      return false;
    if (!equals(this.opm_1, tmp0_other_with_cast.opm_1))
      return false;
    if (!equals(this.ppm_1, tmp0_other_with_cast.ppm_1))
      return false;
    if (!equals(this.qpm_1, tmp0_other_with_cast.qpm_1))
      return false;
    if (!equals(this.rpm_1, tmp0_other_with_cast.rpm_1))
      return false;
    if (!equals(this.spm_1, tmp0_other_with_cast.spm_1))
      return false;
    if (!equals(this.tpm_1, tmp0_other_with_cast.tpm_1))
      return false;
    if (!equals(this.upm_1, tmp0_other_with_cast.upm_1))
      return false;
    if (!equals(this.vpm_1, tmp0_other_with_cast.vpm_1))
      return false;
    if (!equals(this.wpm_1, tmp0_other_with_cast.wpm_1))
      return false;
    if (!equals(this.xpm_1, tmp0_other_with_cast.xpm_1))
      return false;
    if (!equals(this.ypm_1, tmp0_other_with_cast.ypm_1))
      return false;
    if (!equals(this.zpm_1, tmp0_other_with_cast.zpm_1))
      return false;
    if (!equals(this.apn_1, tmp0_other_with_cast.apn_1))
      return false;
    if (!equals(this.bpn_1, tmp0_other_with_cast.bpn_1))
      return false;
    if (!equals(this.cpn_1, tmp0_other_with_cast.cpn_1))
      return false;
    if (!equals(this.dpn_1, tmp0_other_with_cast.dpn_1))
      return false;
    if (!equals(this.epn_1, tmp0_other_with_cast.epn_1))
      return false;
    if (!equals(this.fpn_1, tmp0_other_with_cast.fpn_1))
      return false;
    if (!equals(this.gpn_1, tmp0_other_with_cast.gpn_1))
      return false;
    if (!equals(this.hpn_1, tmp0_other_with_cast.hpn_1))
      return false;
    if (!equals(this.ipn_1, tmp0_other_with_cast.ipn_1))
      return false;
    if (!equals(this.jpn_1, tmp0_other_with_cast.jpn_1))
      return false;
    if (!equals(this.kpn_1, tmp0_other_with_cast.kpn_1))
      return false;
    if (!equals(this.lpn_1, tmp0_other_with_cast.lpn_1))
      return false;
    if (!equals(this.mpn_1, tmp0_other_with_cast.mpn_1))
      return false;
    if (!equals(this.npn_1, tmp0_other_with_cast.npn_1))
      return false;
    if (!equals(this.opn_1, tmp0_other_with_cast.opn_1))
      return false;
    if (!equals(this.ppn_1, tmp0_other_with_cast.ppn_1))
      return false;
    if (!equals(this.qpn_1, tmp0_other_with_cast.qpn_1))
      return false;
    if (!equals(this.rpn_1, tmp0_other_with_cast.rpn_1))
      return false;
    if (!equals(this.spn_1, tmp0_other_with_cast.spn_1))
      return false;
    if (!equals(this.tpn_1, tmp0_other_with_cast.tpn_1))
      return false;
    if (!equals(this.upn_1, tmp0_other_with_cast.upn_1))
      return false;
    if (!equals(this.vpn_1, tmp0_other_with_cast.vpn_1))
      return false;
    if (!equals(this.wpn_1, tmp0_other_with_cast.wpn_1))
      return false;
    return true;
  };
  var org_korchagin_kmp_theme_global_NavViewStyle$stable;
  function NavViewStyle$light$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.rph($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavViewStyle$dark$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.zph($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavViewStyle() {
  }
  protoOf(NavViewStyle).rph = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(581841946);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
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
      tmp.coy(tmp_0, tmp_3, tmp_4, tmp_5, null, null, $composer_0, team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() | team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() << 3 | team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter() << 6 | team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter() << 18, 56);
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
      tmp1_safe_receiver.n38(NavViewStyle$light$lambda(this, $changed));
    }
  };
  protoOf(NavViewStyle).zph = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1851483102);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
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
      tmp.coy(tmp_0, tmp_3, tmp_4, tmp_5, null, null, $composer_0, team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() | team_platforma_extra_nav_ui_style_NavigationStyle$stableprop_getter() << 3 | team_platforma_extra_nav_ui_style_NavigationItemStyle$stableprop_getter() << 6 | team_platforma_extra_nav_ui_style_SimpleNavigationStyle$stableprop_getter() << 18, 56);
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
      tmp1_safe_receiver.n38(NavViewStyle$dark$lambda(this, $changed));
    }
  };
  var org_korchagin_kmp_theme_global_ToolbarTheme$stable;
  function ToolbarTheme$light$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.rph($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ToolbarTheme$dark$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.zph($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ToolbarTheme() {
  }
  protoOf(ToolbarTheme).rph = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1122133254);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1122133254, $changed, -1, 'org.korchagin.kmp.theme.global.ToolbarTheme.light (ToolbarTheme.kt:9)');
      }
      ToolbarStyle_getInstance().ip1(new AppToolbarStyle(AppColors_getInstance().ypn().cpn_1), $composer_0, team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter() | team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter() << 3);
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
      tmp1_safe_receiver.n38(ToolbarTheme$light$lambda(this, $changed));
    }
  };
  protoOf(ToolbarTheme).zph = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(147507902);
    if (!(($changed & 1) === 0) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(147507902, $changed, -1, 'org.korchagin.kmp.theme.global.ToolbarTheme.dark (ToolbarTheme.kt:18)');
      }
      ToolbarStyle_getInstance().ip1(new AppToolbarStyle(AppColors_getInstance().ypn().cpn_1), $composer_0, team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter() | team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter() << 3);
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
      tmp1_safe_receiver.n38(ToolbarTheme$dark$lambda(this, $changed));
    }
  };
  var team_platforma_infoteam_theme_typography_Typography$stable;
  var team_platforma_infoteam_theme_typography_Text3XL$stable;
  var team_platforma_infoteam_theme_typography_Text2XL$stable;
  var team_platforma_infoteam_theme_typography_TextLG$stable;
  var team_platforma_infoteam_theme_typography_TextSM$stable;
  var team_platforma_infoteam_theme_typography_TextXS$stable;
  function Typography$define$lambda($tmp0_rcvr, $isDark, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.xph($isDark, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Typography() {
    Typography_instance = this;
    this.sph_1 = new Text3XL();
    this.tph_1 = new Text2XL();
    this.uph_1 = new TextLG();
    this.vph_1 = new TextSM();
    this.wph_1 = new TextXS();
  }
  protoOf(Typography).dpi = function (weights) {
    return this.tph_1.ppu(weights);
  };
  protoOf(Typography).kpj = function (weights) {
    return this.uph_1.ppu(weights);
  };
  protoOf(Typography).xph = function (isDark, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-101330017);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(isDark) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-101330017, $dirty, -1, 'team.platforma.infoteam.theme.typography.Typography.define (TextStyles.kt:27)');
      }
      this.sph_1 = new Text3XL();
      this.tph_1 = new Text2XL();
      this.uph_1 = new TextLG();
      this.vph_1 = new TextSM();
      this.wph_1 = new TextXS();
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
      tmp1_safe_receiver.n38(Typography$define$lambda(this, isDark, $changed));
    }
  };
  var Typography_instance;
  function Typography_getInstance() {
    if (Typography_instance == null)
      new Typography();
    return Typography_instance;
  }
  function Text3XL() {
  }
  function Text2XL() {
  }
  protoOf(Text2XL).ppu = function (weights) {
    var tmp0_fontSize = get_sp(16);
    var tmp1_lineHeight = get_sp(24);
    var tmp2_fontWeight = weights.spu_1;
    return TextStyle_init_$Create$(VOID, tmp0_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp1_lineHeight);
  };
  function TextLG() {
  }
  protoOf(TextLG).ppu = function (weights) {
    var tmp0_fontSize = get_sp(14);
    var tmp1_lineHeight = get_sp(20);
    var tmp2_fontWeight = weights.spu_1;
    return TextStyle_init_$Create$(VOID, tmp0_fontSize, tmp2_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp1_lineHeight);
  };
  function TextSM() {
  }
  function TextXS() {
  }
  var FontWeights_Regular_instance;
  var FontWeights_Medium_instance;
  var FontWeights_SemiBold_instance;
  var FontWeights_entriesInitialized;
  function FontWeights_initEntries() {
    if (FontWeights_entriesInitialized)
      return Unit_instance;
    FontWeights_entriesInitialized = true;
    FontWeights_Regular_instance = new FontWeights('Regular', 0, Companion_getInstance_5().o73_1);
    FontWeights_Medium_instance = new FontWeights('Medium', 1, Companion_getInstance_5().p73_1);
    FontWeights_SemiBold_instance = new FontWeights('SemiBold', 2, Companion_getInstance_5().q73_1);
  }
  function FontWeights(name, ordinal, weight) {
    Enum.call(this, name, ordinal);
    this.spu_1 = weight;
  }
  function FontWeights_Medium_getInstance() {
    FontWeights_initEntries();
    return FontWeights_Medium_instance;
  }
  function FontWeights_SemiBold_getInstance() {
    FontWeights_initEntries();
    return FontWeights_SemiBold_instance;
  }
  function AnimatedTabWithHorizontalPager(tabs, onTabSelected, freeze, power, ofp, stretch, pupil, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1759747741);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(tabs) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(onTabSelected) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(freeze) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(power) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(ofp) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(stretch) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.f2r(pupil) : $composer_0.f32(pupil)) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1759747741, $dirty, -1, 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager (AnimatedTabWithHorizontalPager.kt:57)');
      }
      // Inline function 'org.koin.compose.viewmodel.koinViewModel' call
      var qualifier = null;
      var viewModelStoreOwner = null;
      var key = null;
      var extras = null;
      var scope = null;
      var parameters = null;
      var $composer_1 = $composer_0;
      $composer_1.y30(-924953623);
      if (!((63 & 1) === 0))
        qualifier = null;
      if (!((63 & 2) === 0)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          var value = LocalViewModelStoreOwner_getInstance().nb1($composer_1, 0);
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
      var tmp0 = resolveViewModel(getKClass(MainViewModel), viewModelStoreOwner.p4g(), key, extras, qualifier, scope, parameters);
      $composer_1.z30();
      var mainViewModel = tmp0;
      var tmp = mainViewModel.zoh();
      $composer_0.a31(-2010090679);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.f32(tabs);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>' call
        var value_0 = AnimatedTabWithHorizontalPager$lambda(tabs);
        this_0.h33(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c31();
      var pagerState = rememberPagerState(tmp, 0.0, tmp0_group, $composer_0, 0, 2);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = AnimatedTabWithHorizontalPager$lambda_0;
      }
      var composer = $composer_2;
      sourceInformationMarkerStart($composer_2, -954207516, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.w32();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_1 = createCompositionCoroutineScope(getContext(), composer);
        $composer_2.h33(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_2);
      var scope_0 = tmp1_group;
      var tmp_4 = pagerState.ufx();
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1078230069, true, AnimatedTabWithHorizontalPager$lambda_1(tabs, pagerState, onTabSelected, mainViewModel, scope_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.w32();
      var tmp_7;
      if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_82(dispatchReceiver);
        $composer_3.h33(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      TabRow(tmp_4, null, tmp_5, tmp_6, null, null, tmp0_0, $composer_0, 1572864, 62);
      var tmp_9 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1179295295, true, AnimatedTabWithHorizontalPager$lambda_2(pagerState, freeze, pupil, power, ofp, stretch), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_4.f2r(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_4.w32();
      var tmp_10;
      if (invalid_1 || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_84(dispatchReceiver_0);
        $composer_4.h33(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_2;
      }
      var tmp_11 = tmp_10;
      var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      HorizontalPager(pagerState, null, null, null, 0, tmp_9, null, null, false, false, null, null, null, tmp0_1, $composer_0, 0, 3072, 8190);
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
      tmp1_safe_receiver.n38(AnimatedTabWithHorizontalPager$lambda_3(tabs, onTabSelected, freeze, power, ofp, stretch, pupil, $changed));
    }
  }
  function AnimatedTabWithHorizontalPager$lambda($tabs) {
    return function () {
      return $tabs.p();
    };
  }
  function AnimatedTabWithHorizontalPager$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function AnimatedTabWithHorizontalPager$lambda$slambda($onTabSelected, $pagerState, $mainViewModel, $selected, $scale, resultContinuation) {
    this.bpv_1 = $onTabSelected;
    this.cpv_1 = $pagerState;
    this.dpv_1 = $mainViewModel;
    this.epv_1 = $selected;
    this.fpv_1 = $scale;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedTabWithHorizontalPager$lambda$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AnimatedTabWithHorizontalPager$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedTabWithHorizontalPager$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.bpv_1(this.cpv_1.ufx());
            this.dpv_1.yoh(this.cpv_1.ufx());
            if (this.epv_1) {
              this.s9_1 = 2;
              suspendResult = this.fpv_1.sb4(1.9, spring(), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = this.fpv_1.sb4(1.2, spring(), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.hpv_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.hpv_1 = suspendResult;
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
  protoOf(AnimatedTabWithHorizontalPager$lambda$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new AnimatedTabWithHorizontalPager$lambda$slambda(this.bpv_1, this.cpv_1, this.dpv_1, this.epv_1, this.fpv_1, completion);
    i.gpv_1 = $this$LaunchedEffect;
    return i;
  };
  function AnimatedTabWithHorizontalPager$lambda$slambda_0($onTabSelected, $pagerState, $mainViewModel, $selected, $scale, resultContinuation) {
    var i = new AnimatedTabWithHorizontalPager$lambda$slambda($onTabSelected, $pagerState, $mainViewModel, $selected, $scale, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedTabWithHorizontalPager$lambda$lambda$slambda($mainViewModel, $index, $onTabSelected, $pagerState, resultContinuation) {
    this.qpv_1 = $mainViewModel;
    this.rpv_1 = $index;
    this.spv_1 = $onTabSelected;
    this.tpv_1 = $pagerState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedTabWithHorizontalPager$lambda$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AnimatedTabWithHorizontalPager$lambda$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedTabWithHorizontalPager$lambda$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.qpv_1.yoh(this.rpv_1);
            this.spv_1(this.rpv_1);
            this.s9_1 = 1;
            suspendResult = this.tpv_1.xg4(this.rpv_1, VOID, spring(VOID, 200.0), this);
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
  protoOf(AnimatedTabWithHorizontalPager$lambda$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new AnimatedTabWithHorizontalPager$lambda$lambda$slambda(this.qpv_1, this.rpv_1, this.spv_1, this.tpv_1, completion);
    i.upv_1 = $this$launch;
    return i;
  };
  function AnimatedTabWithHorizontalPager$lambda$lambda$slambda_0($mainViewModel, $index, $onTabSelected, $pagerState, resultContinuation) {
    var i = new AnimatedTabWithHorizontalPager$lambda$lambda$slambda($mainViewModel, $index, $onTabSelected, $pagerState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedTabWithHorizontalPager$lambda$lambda($scope, $mainViewModel, $index, $onTabSelected, $pagerState) {
    return function () {
      launch($scope, VOID, VOID, AnimatedTabWithHorizontalPager$lambda$lambda$slambda_0($mainViewModel, $index, $onTabSelected, $pagerState, null));
      return Unit_instance;
    };
  }
  function AnimatedTabWithHorizontalPager$lambda$lambda_0($tab, $scale, $selected) {
    return function ($this$Tab, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(1652679963, $changed, -1, 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous> (AnimatedTabWithHorizontalPager.kt:95)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var tmp_0 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
        var modifier = padding_0(tmp_0, tmp$ret$0);
        var verticalArrangement = null;
        var horizontalAlignment = Companion_getInstance_1().z7p_1;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((2 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().y7p_1;
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 390 >> 3 | 112 & 390 >> 3);
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
        var factory = Companion_getInstance_2().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
          $this$with.h33(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(30);
        var tmp_3 = size(tmp_2, tmp$ret$3);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(5);
        var tmp_4 = graphicsLayer(padding_2(tmp_3, VOID, tmp$ret$4), $scale.c1(), $scale.c1());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$5 = _Dp___init__impl__ms3zkb(1);
        RoundImage($tab.co7_1, border_0(tmp_4, tmp$ret$5, $selected ? Companion_getInstance_4().z67_1 : Companion_getInstance_4().c68_1, get_CircleShape()), $composer_5, 0, 0);
        var tmp_5 = $selected ? AppColors_getInstance().ypn().dpn_1 : Companion_getInstance_4().b68_1;
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_9 = _TextOverflow___init__impl__obguoe(0);
        Text($tab.do7_1, null, tmp_5, tmp_6, null, null, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, null, $composer_5, 0, 0, 131066);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function AnimatedTabWithHorizontalPager$lambda_1($tabs, $pagerState, $onTabSelected, $mainViewModel, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(1078230069, $changed, -1, 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous> (AnimatedTabWithHorizontalPager.kt:67)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = $tabs.m();
        while (tmp0_iterator.n()) {
          var item = tmp0_iterator.o();
          // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var index_0 = checkIndexOverflow(tmp1);
          var selected = index_0 === $pagerState.ufx();
          $composer_0.a31(61882889);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.w32();
          var tmp_0;
          if (false || it === Companion_getInstance().l2u_1) {
            // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = Animatable(1.0);
            $composer_0.h33(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_0.c31();
          var scale = tmp0_group;
          $composer_0.a31(61885328);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!(!!(!!(!!($composer_0.f2r($onTabSelected) | $composer_0.f2r($pagerState)) | $composer_0.f32($mainViewModel)) | $composer_0.g32(selected)) | $composer_0.f32(scale));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.w32();
          var tmp_2;
          if (invalid || it_0 === Companion_getInstance().l2u_1) {
            // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = AnimatedTabWithHorizontalPager$lambda$slambda_0($onTabSelected, $pagerState, $mainViewModel, selected, scale, null);
            $composer_0.h33(value_0);
            tmp_2 = value_0;
          } else {
            tmp_2 = it_0;
          }
          var tmp_3 = tmp_2;
          var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_0.c31();
          LaunchedEffect_0(selected, tmp1_group, $composer_0, 0);
          var tmp0_modifier = background_0(Companion_instance, Companion_getInstance_4().d68_1);
          $composer_0.a31(61901905);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!(!!(!!(!!($composer_0.f32($scope) | $composer_0.f32($mainViewModel)) | $composer_0.j32(index_0)) | $composer_0.f2r($onTabSelected)) | $composer_0.f2r($pagerState));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_0.w32();
          var tmp_4;
          if (invalid_0 || it_1 === Companion_getInstance().l2u_1) {
            // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = AnimatedTabWithHorizontalPager$lambda$lambda($scope, $mainViewModel, index_0, $onTabSelected, $pagerState);
            $composer_0.h33(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_0.c31();
          var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var dispatchReceiver = rememberComposableLambda(1652679963, true, AnimatedTabWithHorizontalPager$lambda$lambda_0(item, scale, selected), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_1.f2r(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_2 = $composer_1.w32();
          var tmp_8;
          if (invalid_1 || it_2 === Companion_getInstance().l2u_1) {
            // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_2 = ComposableLambda$invoke$ref_81(dispatchReceiver);
            $composer_1.h33(value_2);
            tmp_8 = value_2;
          } else {
            tmp_8 = it_2;
          }
          var tmp_9 = tmp_8;
          var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          Tab(selected, tmp2_group, tmp0_modifier, false, tmp_6, tmp_7, null, tmp0, $composer_0, 12583296, 120);
        }
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function AnimatedTabWithHorizontalPager$lambda$lambda_1($page, $freeze, $pupil, $power, $ofp, $stretch) {
    return function ($this$AnimatedVisibility, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(517984023, $changed, -1, 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous> (AnimatedTabWithHorizontalPager.kt:129)');
      }
      var tmp0_contentAlignment = Companion_getInstance_1().q7p_1;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = fillMaxSize(Companion_instance);
      var contentAlignment = tmp0_contentAlignment;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
      if (!((4 & 4) === 0))
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
      var factory = Companion_getInstance_2().s9e_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_subject = $page;
      if (tmp0_subject === ElementsTab_FREEZE_getInstance().z2_1) {
        $composer_5.a31(-726520411);
        var posts = toMutableList(emptyList());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $freeze.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          posts.e(new Elements(setElementImage(element.jo6_1, $pupil, element), element.jo6_1, element.mo6_1, setProgress($pupil, element.jo6_1)));
        }
        PostSection(posts, $freeze, fillMaxWidth(Companion_instance), $pupil, $composer_5, 384, 0);
        $composer_5.c31();
      } else if (tmp0_subject === ElementsTab_POWER_getInstance().z2_1) {
        $composer_5.a31(-725216272);
        var posts_0 = toMutableList(emptyList());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = $power.m();
        while (tmp0_iterator_0.n()) {
          var element_0 = tmp0_iterator_0.o();
          // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          posts_0.e(new Elements(setElementImage(element_0.jo6_1, $pupil, element_0), element_0.jo6_1, element_0.mo6_1, setProgress($pupil, element_0.jo6_1)));
        }
        PostSection(posts_0, $power, fillMaxWidth(Companion_instance), $pupil, $composer_5, 384, 0);
        $composer_5.c31();
      } else if (tmp0_subject === ElementsTab_OFP_getInstance().z2_1) {
        $composer_5.a31(-723958292);
        var posts_1 = toMutableList(emptyList());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = $ofp.m();
        while (tmp0_iterator_1.n()) {
          var element_1 = tmp0_iterator_1.o();
          // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          posts_1.e(new Elements(setElementImage(element_1.jo6_1, $pupil, element_1), element_1.jo6_1, element_1.mo6_1, setProgress($pupil, element_1.jo6_1)));
        }
        PostSection(posts_1, $ofp, fillMaxWidth(Companion_instance), $pupil, $composer_5, 384, 0);
        $composer_5.c31();
      } else if (tmp0_subject === ElementsTab_STRETCH_getInstance().z2_1) {
        $composer_5.a31(-722753756);
        var posts_2 = toMutableList(emptyList());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_2 = $stretch.m();
        while (tmp0_iterator_2.n()) {
          var element_2 = tmp0_iterator_2.o();
          // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          posts_2.e(new Elements(setElementImage(element_2.jo6_1, $pupil, element_2), element_2.jo6_1, element_2.mo6_1, setProgress($pupil, element_2.jo6_1)));
        }
        PostSection(posts_2, $stretch, fillMaxWidth(Companion_instance), $pupil, $composer_5, 384, 0);
        $composer_5.c31();
      } else {
        $composer_5.a31(-721612491);
        $composer_5.c31();
      }
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function AnimatedTabWithHorizontalPager$lambda_2($pagerState, $freeze, $pupil, $power, $ofp, $stretch) {
    return function ($this$HorizontalPager, page, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1179295295, $changed, -1, 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous> (AnimatedTabWithHorizontalPager.kt:124)');
      }
      var tmp = $pagerState.ufx() === page;
      var tmp_0 = fadeIn(tween(1200));
      var tmp_1 = fadeOut(tween(1200));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(517984023, true, AnimatedTabWithHorizontalPager$lambda$lambda_1(page, $freeze, $pupil, $power, $ofp, $stretch), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.w32();
      var tmp_2;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_83(dispatchReceiver);
        $composer_1.h33(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AnimatedVisibility(tmp, null, tmp_0, tmp_1, null, tmp0, $composer_0, 200064, 18);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p40(p0, p1, p2, p3);
    };
  }
  function AnimatedTabWithHorizontalPager$lambda_3($tabs, $onTabSelected, $freeze, $power, $ofp, $stretch, $pupil, $$changed) {
    return function ($composer, $force) {
      AnimatedTabWithHorizontalPager($tabs, $onTabSelected, $freeze, $power, $ofp, $stretch, $pupil, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CustomProgressBar(modifier, backgroundColor, foregroundColor, percent, isShownText, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1423173992);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.i32(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor))) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(foregroundColor) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.j32(percent) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g32(isShownText) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1423173992, $dirty, -1, 'org.korchagin.kmp.uiElements.CustomProgressBar (CustomProgressBar.kt:21)');
      }
      $composer_0.a31(2145118087);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.CustomProgressBar.<anonymous>' call
        var value = Animatable(0.0);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var animatedProgress = tmp0_group;
      $composer_0.a31(2145120215);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.f32(animatedProgress) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.CustomProgressBar.<anonymous>' call
        var value_0 = CustomProgressBar$slambda_0(animatedProgress, percent, null);
        this_1.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect_0(percent, tmp1_group, $composer_0, 14 & $dirty >> 9);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_0 = fillMaxWidth(background_0(modifier, backgroundColor));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_0 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_1);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().s9e_1;
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.uiElements.CustomProgressBar.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_2 = fillMaxWidth(background(modifier, foregroundColor), animatedProgress.c1() / 100.0);
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_2 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_1().m7p_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_3 = modifier_2;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_3 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_3);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_4 = $composer_8.v30();
      if (!isInterface(tmp_4, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.uiElements.CustomProgressBar.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      $composer_10.a31(1902091155);
      if (isShownText && percent > 9) {
        var tmp0_text = '' + percent + '%';
        var tmp1_modifier = BoxScopeInstance_instance.kby(Companion_instance, Companion_getInstance_1().q7p_1);
        var tmp2_fontSize = get_sp(13);
        var tmp3_color = Companion_getInstance_4().z67_1;
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text, tmp1_modifier, tmp3_color, tmp2_fontSize, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, null, $composer_10, 3456, 0, 131056);
      }
      $composer_10.c31();
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
    var tmp2_safe_receiver = $composer_0.w33();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.n38(CustomProgressBar$lambda(modifier, backgroundColor, foregroundColor, percent, isShownText, $changed));
    }
  }
  function CustomProgressBar$slambda($animatedProgress, $percent, resultContinuation) {
    this.dpw_1 = $animatedProgress;
    this.epw_1 = $percent;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CustomProgressBar$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(CustomProgressBar$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CustomProgressBar$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.dpw_1.sb4(this.epw_1, tween(2000), VOID, VOID, this);
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
  protoOf(CustomProgressBar$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new CustomProgressBar$slambda(this.dpw_1, this.epw_1, completion);
    i.fpw_1 = $this$LaunchedEffect;
    return i;
  };
  function CustomProgressBar$slambda_0($animatedProgress, $percent, resultContinuation) {
    var i = new CustomProgressBar$slambda($animatedProgress, $percent, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CustomProgressBar$lambda($modifier, $backgroundColor, $foregroundColor, $percent, $isShownText, $$changed) {
    return function ($composer, $force) {
      CustomProgressBar($modifier, $backgroundColor, $foregroundColor, $percent, $isShownText, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function RatingProgreesBar(progress, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-824740537);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h32(progress) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-824740537, $dirty, -1, 'org.korchagin.kmp.uiElements.RatingProgreesBar (RatingProgreesBar.kt:27)');
      }
      $composer_0.a31(1194464301);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.RatingProgreesBar.<anonymous>' call
        var value = Animatable(0.0);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var animatedProgress = tmp0_group;
      $composer_0.a31(1194466452);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!($composer_0.f32(animatedProgress) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.uiElements.RatingProgreesBar.<anonymous>' call
        var value_0 = RatingProgreesBar$slambda_0(animatedProgress, progress, null);
        this_1.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect_0(progress, tmp1_group, $composer_0, 14 & $dirty);
      var tmp_3 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$8 = _Dp___init__impl__ms3zkb(4);
      var tmp_4 = padding_2(tmp_3, VOID, tmp$ret$8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_5 = _Dp___init__impl__ms3zkb(1);
      var tmp_6 = Companion_getInstance_4().b68_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(15);
      var tmp0_modifier = fillMaxWidth(border_0(tmp_4, tmp_5, tmp_6, RoundedCornerShape(tmp$ret$10)));
      var tmp1_horizontalAlignment = Companion_getInstance_1().z7p_1;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().ybv_1;
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().y7p_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_7 = $composer_3.v30();
      if (!isInterface(tmp_7, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.uiElements.RatingProgreesBar.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_8 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(15);
      var tmp_9 = clip(tmp_8, RoundedCornerShape(tmp$ret$13));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(30);
      var modifier_1 = fillMaxWidth(background_0(height(tmp_9, tmp$ret$14), Companion_getInstance_4().d68_1));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_10 = $composer_8.v30();
      if (!isInterface(tmp_10, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'org.korchagin.kmp.uiElements.RatingProgreesBar.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      var tmp_11 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(15);
      var tmp_12 = clip(tmp_11, RoundedCornerShape(tmp$ret$17));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(30);
      Box(fillMaxWidth(background(height(tmp_12, tmp$ret$18), Companion_instance_0.o67(listOf([new Color_0(Companion_getInstance_4().d68_1), new Color_0(Companion_getInstance_4().f68_1)]))), animatedProgress.c1() / 100.0), $composer_10, 0);
      var tmp0_text = '' + progress + ' %';
      var tmp1_modifier = BoxScopeInstance_instance.kby(Companion_instance, Companion_getInstance_1().q7p_1);
      var tmp2_fontSize = get_sp(15);
      var tmp3_fontWeight = Companion_getInstance_5().a74_1;
      var tmp4_color = Companion_getInstance_4().z67_1;
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp0_text, tmp1_modifier, tmp4_color, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_10, 200064, 0, 131024);
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
    var tmp2_safe_receiver = $composer_0.w33();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.n38(RatingProgreesBar$lambda(progress, $changed));
    }
  }
  function RatingProgreesBar$slambda($animatedProgress, $progress, resultContinuation) {
    this.opw_1 = $animatedProgress;
    this.ppw_1 = $progress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RatingProgreesBar$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RatingProgreesBar$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RatingProgreesBar$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.opw_1.sb4(this.ppw_1, tween(1500), VOID, VOID, this);
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
  protoOf(RatingProgreesBar$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new RatingProgreesBar$slambda(this.opw_1, this.ppw_1, completion);
    i.qpw_1 = $this$LaunchedEffect;
    return i;
  };
  function RatingProgreesBar$slambda_0($animatedProgress, $progress, resultContinuation) {
    var i = new RatingProgreesBar$slambda($animatedProgress, $progress, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RatingProgreesBar$lambda($progress, $$changed) {
    return function ($composer, $force) {
      RatingProgreesBar($progress, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function RoundImage(image, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(209662651);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(image) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(209662651, $dirty, -1, 'org.korchagin.kmp.uiElements.RoundImage (RoundImage.kt:18)');
      }
      var tmp = aspectRatio(modifier_0._v, 1.0, true);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var tmp_0 = border_0(tmp, tmp$ret$0, Companion_getInstance_4().c68_1, get_CircleShape());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(3);
      var tmp_1 = clip(padding_0(tmp_0, tmp$ret$1), get_CircleShape());
      Image(image, null, tmp_1, null, null, 0.0, null, $composer_0, 48 | 14 & $dirty, 120);
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
      tmp0_safe_receiver.n38(RoundImage$lambda(image, modifier_0, $changed, $default));
    }
  }
  function RoundImage$lambda($image, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      RoundImage($image, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ShimmerBrush(showShimmer, targetValue, $composer, $changed, $default) {
    var showShimmer_0 = showShimmer;
    var targetValue_0 = targetValue;
    var $composer_0 = $composer;
    $composer_0.a31(569557970);
    if (!(($default & 1) === 0))
      showShimmer_0 = true;
    if (!(($default & 2) === 0))
      targetValue_0 = 1000.0;
    if (isTraceInProgress()) {
      traceEventStart(569557970, $changed, -1, 'org.korchagin.kmp.uiElements.ShimmerBrush (ShimerBrush.kt:13)');
    }
    var tmp;
    if (showShimmer_0) {
      var shimmerColors = listOf([new Color_0(Color__copy$default_impl_ectz3s(Companion_getInstance_4().c68_1, 0.6)), new Color_0(Color__copy$default_impl_ectz3s(Companion_getInstance_4().c68_1, 0.2)), new Color_0(Color__copy$default_impl_ectz3s(Companion_getInstance_4().c68_1, 0.6))]);
      var transition = rememberInfiniteTransition(null, $composer_0, 0, 1);
      var tmp_0 = targetValue_0;
      var tmp_1 = infiniteRepeatable(tween(800), RepeatMode_Reverse_getInstance());
      var translateAnimation = animateFloat(transition, 0.0, tmp_0, tmp_1, null, $composer_0, 56 | 896 & $changed << 3 | 4096, 8);
      tmp = Companion_instance_0.i67(shimmerColors, Companion_getInstance_10().p5g_1, Offset(translateAnimation.c1(), translateAnimation.c1()));
    } else {
      tmp = Companion_instance_0.i67(listOf([new Color_0(Companion_getInstance_4().k68_1), new Color_0(Companion_getInstance_4().k68_1)]), Companion_getInstance_10().p5g_1, Companion_getInstance_10().p5g_1);
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function StyledTextScreen(title, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(707755651);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(description) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(707755651, $dirty, -1, 'org.korchagin.kmp.uiElements.StyledTextScreen (StyledTextScreen.kt:21)');
      }
      // Inline function 'androidx.compose.ui.text.buildAnnotatedString' call
      // Inline function 'kotlin.apply' call
      var this_0 = new Builder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.korchagin.kmp.uiElements.StyledTextScreen.<anonymous>' call
      // Inline function 'androidx.compose.ui.text.withStyle' call
      var style = SpanStyle_init_$Create$(AppColors_getInstance().ypn().dpn_1, get_sp(11));
      var index = this_0.d6w(style);
      var tmp;
      try {
        this_0.v6v(title);
        tmp = Unit_instance;
      }finally {
        this_0.f6w(index);
      }
      // Inline function 'androidx.compose.ui.text.withStyle' call
      var tmp0_color = AppColors_getInstance().ypn().dpn_1;
      var tmp1_fontWeight = Companion_getInstance_5().a74_1;
      var tmp2_fontSize = get_sp(14);
      var style_0 = SpanStyle_init_$Create$(tmp0_color, tmp2_fontSize, tmp1_fontWeight);
      var index_0 = this_0.d6w(style_0);
      var tmp_0;
      try {
        this_0.v6v(description);
        tmp_0 = Unit_instance;
      }finally {
        this_0.f6w(index_0);
      }
      var styledText = this_0.g6w();
      var tmp_1 = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(8);
      var tmp_2 = padding_2(tmp_1, tmp$ret$4);
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = Companion_getInstance_7().i70_1;
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextOverflow___init__impl__obguoe(0);
      Text_0(styledText, tmp_2, tmp_3, tmp_4, null, null, null, tmp_5, null, tmp_6, tmp_7, tmp_8, false, 0, 0, null, null, null, $composer_0, 48, 0, 261628);
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
      tmp0_safe_receiver.n38(StyledTextScreen$lambda(title, description, $changed));
    }
  }
  function calculateAge(dateOfBirthString) {
    var months = mapOf([to('\u044F\u043D\u0432\u0430\u0440\u044F', 1), to('\u0444\u0435\u0432\u0440\u0430\u043B\u044F', 2), to('\u043C\u0430\u0440\u0442\u0430', 3), to('\u0430\u043F\u0440\u0435\u043B\u044F', 4), to('\u043C\u0430\u044F', 5), to('\u0438\u044E\u043D\u044F', 6), to('\u0438\u044E\u043B\u044F', 7), to('\u0430\u0432\u0433\u0443\u0441\u0442\u0430', 8), to('\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F', 9), to('\u043E\u043A\u0442\u044F\u0431\u0440\u044F', 10), to('\u043D\u043E\u044F\u0431\u0440\u044F', 11), to('\u0434\u0435\u043A\u0430\u0431\u0440\u044F', 12)]);
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_0 = dateOfBirthString.toLowerCase();
    var tmp$ret$2 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    var parts = split(tmp$ret$2, [' ']);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(parts.p() === 3)) {
      // Inline function 'org.korchagin.kmp.uiElements.calculateAge.<anonymous>' call
      var message = "\u0414\u0430\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435: '1 \u044F\u043D\u0432\u0430\u0440\u044F 2000'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = toIntOrNull(parts.u(0));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message_0 = '\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0434\u0435\u043D\u044C: ' + parts.u(0);
      throw IllegalStateException_init_$Create$(toString(message_0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var day = tmp;
    var tmp1_elvis_lhs = months.s2(parts.u(1));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message_1 = '\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043C\u0435\u0441\u044F\u0446: ' + parts.u(1);
      throw IllegalStateException_init_$Create$(toString(message_1));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var month = tmp_0;
    var tmp2_elvis_lhs = toIntOrNull(parts.u(2));
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      var message_2 = '\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0433\u043E\u0434: ' + parts.u(2);
      throw IllegalStateException_init_$Create$(toString(message_2));
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var year = tmp_1;
    var birthDate = LocalDate_init_$Create$(year, month, day);
    var currentDate = toLocalDateTime(System_instance.qlp(), Companion_getInstance_11().im5());
    var age = currentDate.nlq() - birthDate.nlq() | 0;
    if (currentDate.llq() < birthDate.llq() || (currentDate.llq() === birthDate.llq() && currentDate.hlq() < birthDate.hlq())) {
      age = age - 1 | 0;
    }
    return age;
  }
  function StyledTextScreen$lambda($title, $description, $$changed) {
    return function ($composer, $force) {
      StyledTextScreen($title, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_korchagin_kmp_utils_StringUtils$stable;
  function StringUtils() {
  }
  protoOf(StringUtils).ppq = function (string) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.text.split' call
    // Inline function 'kotlin.text.trim' call
    var this_0 = toString(trim(isCharSequence(string) ? string : THROW_CCE()));
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_1 = Regex_init_$Create$('\\s+').ge(this_0, 0);
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_1.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'org.korchagin.kmp.utils.StringUtils.extractInitialsByName.<anonymous>' call
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        // Inline function 'kotlin.text.split' call
        var this_2 = trimStart(element, charArrayOf([_Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(39), _Char___init__impl__6a9atx(8217)]));
        var tmp0_iterator_0 = Regex_init_$Create$("[-'.\u2019]").ge(this_2, 0).m();
        while (tmp0_iterator_0.n()) {
          var element_0 = tmp0_iterator_0.o();
          // Inline function 'org.korchagin.kmp.utils.StringUtils.extractInitialsByName.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(element_0) > 0) {
            tmp$ret$5 = element_0;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var tmp0_safe_receiver = tmp$ret$5;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.e(tmp0_safe_receiver);
      }
    }
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = destination.m();
    while (tmp0_iterator_1.n()) {
      var element_1 = tmp0_iterator_1.o();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'org.korchagin.kmp.utils.StringUtils.extractInitialsByName.<anonymous>' call
      var tmp0_safe_receiver_0 = firstOrNull(element_1);
      var tmp;
      var tmp_0 = tmp0_safe_receiver_0;
      if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
        tmp = null;
      } else {
        tmp = uppercaseChar(tmp0_safe_receiver_0);
      }
      var tmp_1 = tmp;
      var tmp0_safe_receiver_1 = tmp_1 == null ? null : new Char(tmp_1);
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination_0.e(tmp0_safe_receiver_1);
      }
    }
    var cleanedWords = destination_0;
    return cleanedWords.p() >= 2 ? toString_0(cleanedWords.u(0).u1_1) + toString_0(cleanedWords.u(1).u1_1) : cleanedWords.p() === 1 ? toString_0(cleanedWords.u(0).u1_1) : '';
  };
  function GifImage(drawable, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(947552751);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(drawable) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(947552751, $dirty, -1, 'org.korchagin.kmp.GifImage (Platforma.js.kt:11)');
      }
      $composer_0.a31(-635400407);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'org.korchagin.kmp.GifImage.<anonymous>' call
        var value = GifImage$lambda(drawable);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      DisposableEffect(drawable, tmp0_group, $composer_0, 14 & $dirty);
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
      tmp1_safe_receiver.n38(GifImage$lambda_0(drawable, $changed));
    }
  }
  function get_currentPlatform() {
    return PlatformType_JS_getInstance();
  }
  function _no_name_provided__qut3iv($root, $img) {
    this.rpw_1 = $root;
    this.spw_1 = $img;
  }
  protoOf(_no_name_provided__qut3iv).v18 = function () {
    // Inline function 'org.korchagin.kmp.GifImage.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.rpw_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.removeChild(this.spw_1);
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
    this.bpx_1 = $screenSize;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScreenSizeHandler$getScreenSize$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ScreenSizeHandler$getScreenSize$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScreenSizeHandler$getScreenSize$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = delay(new Long(50, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bpx_1.a1y(new Pair(window.innerWidth, window.innerHeight));
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
  protoOf(ScreenSizeHandler$getScreenSize$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new ScreenSizeHandler$getScreenSize$slambda(this.bpx_1, completion);
    i.cpx_1 = $this$LaunchedEffect;
    return i;
  };
  function ScreenSizeHandler$getScreenSize$slambda_0($screenSize, resultContinuation) {
    var i = new ScreenSizeHandler$getScreenSize$slambda($screenSize, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScreenSizeHandler$getScreenSize$lambda$lambda($screenSize) {
    return function (it) {
      $screenSize.a1y(new Pair(window.innerWidth, window.innerHeight));
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0($listener) {
    this.dpx_1 = $listener;
  }
  protoOf(_no_name_provided__qut3iv_0).v18 = function () {
    // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>.<anonymous>.<anonymous>' call
    window.removeEventListener('resize', this.dpx_1);
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
  protoOf(ScreenSizeHandler).fpo = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-1772696338);
    if (isTraceInProgress()) {
      traceEventStart(-1772696338, $changed, -1, 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize (ScreenSizeHandler.js.kt:13)');
    }
    $composer_0.a31(-1191388129);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value = mutableStateOf(new Pair(0, 0));
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    var screenSize = tmp1_group;
    $composer_0.a31(-1191385852);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value_0 = ScreenSizeHandler$getScreenSize$slambda_0(screenSize, null);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.c31();
    LaunchedEffect_0(Unit_instance, tmp2_group, $composer_0, 6);
    $composer_0.a31(-1191381173);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.w32();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().l2u_1) {
      // Inline function 'org.korchagin.kmp.ScreenSizeHandler.getScreenSize.<anonymous>' call
      var value_1 = ScreenSizeHandler$getScreenSize$lambda(screenSize);
      $composer_0.h33(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.c31();
    DisposableEffect(Unit_instance, tmp3_group, $composer_0, 54);
    var tmp0 = screenSize.c1();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  var ScreenSizeHandler_instance;
  function ScreenSizeHandler_getInstance() {
    return ScreenSizeHandler_instance;
  }
  function VideoPlayer(topPadding, url, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-671812329);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j32(topPadding) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(url) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-671812329, $dirty, -1, 'VideoPlayer (YouTubePlayer.js.kt:10)');
      }
      var containerId = 'video-player-container';
      $composer_0.a31(-1883596336);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'VideoPlayer.<anonymous>' call
        var value = VideoPlayer$slambda_0(containerId, url, topPadding, null);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect_0(url, tmp0_group, $composer_0, 14 & $dirty >> 3);
      $composer_0.a31(-1883550084);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'VideoPlayer.<anonymous>' call
        var value_0 = VideoPlayer$lambda(containerId);
        this_1.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      DisposableEffect(url, tmp1_group, $composer_0, 48 | 14 & $dirty >> 3);
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
      tmp2_safe_receiver.n38(VideoPlayer$lambda_0(topPadding, url, $changed));
    }
  }
  function VideoPlayer$slambda($containerId, $url, $topPadding, resultContinuation) {
    this.mpx_1 = $containerId;
    this.npx_1 = $url;
    this.opx_1 = $topPadding;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(VideoPlayer$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(VideoPlayer$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(VideoPlayer$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp_0 = document.getElementById('root');
          var root = tmp_0 instanceof HTMLDivElement ? tmp_0 : null;
          if (root == null) {
            console.warn('Root not found');
            return Unit_instance;
          }
          var tmp0_safe_receiver = document.getElementById(this.mpx_1);
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.remove();
          }
          var this_0 = this.npx_1;
          if (!isBlank(this_0)) {
            var tmp_1 = document.createElement('div');
            var container = tmp_1 instanceof HTMLDivElement ? tmp_1 : THROW_CCE();
            container.id = this.mpx_1;
            var $this$apply = container.style;
            $this$apply.width = '95%';
            $this$apply.height = '360px';
            $this$apply.position = 'absolute';
            $this$apply.top = '' + this.opx_1 + 'px';
            $this$apply.left = '50%';
            $this$apply.transform = 'translateX(-50%)';
            $this$apply.zIndex = '1000';
            $this$apply.backgroundColor = 'black';
            var tmp_2 = document.createElement('iframe');
            var iframe = tmp_2 instanceof HTMLIFrameElement ? tmp_2 : THROW_CCE();
            iframe.src = 'https://www.youtube.com/embed/' + this.npx_1 + '?autoplay=1&mute=1';
            iframe.width = '100%';
            iframe.height = '360';
            iframe.style.border = 'none';
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            container.appendChild(iframe);
            root.appendChild(container);
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
  protoOf(VideoPlayer$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new VideoPlayer$slambda(this.mpx_1, this.npx_1, this.opx_1, completion);
    i.ppx_1 = $this$LaunchedEffect;
    return i;
  };
  function VideoPlayer$slambda_0($containerId, $url, $topPadding, resultContinuation) {
    var i = new VideoPlayer$slambda($containerId, $url, $topPadding, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_1($containerId) {
    this.qpx_1 = $containerId;
  }
  protoOf(_no_name_provided__qut3iv_1).v18 = function () {
    // Inline function 'VideoPlayer.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = document.getElementById(this.qpx_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.remove();
    }
  };
  function VideoPlayer$lambda($containerId) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1($containerId);
    };
  }
  function VideoPlayer$lambda_0($topPadding, $url, $$changed) {
    return function ($composer, $force) {
      VideoPlayer($topPadding, $url, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function main() {
    initialize(Firebase_instance, VOID, new FirebaseOptions('1:562023826894:web:673fcd6506381387ae579f', 'AIzaSyBfjWARdMqCo7UZXoY5dDafJFJOazqv-QE', 'https://goodfootbreaking.firebaseio.com', VOID, 'goodfootbreaking.appspot.com', 'goodfootbreaking'));
    var tmp = typeof window !== 'undefined' && 'serviceWorker' in navigator;
    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
      var tmp_0 = window.navigator.serviceWorker.register('/service-worker.js');
      var tmp_1 = tmp_0.then(main$lambda);
      tmp_1.catch(main$lambda_0);
    }
    onWasmReady(main$lambda_1);
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1510551301, $changed, -1, 'org.korchagin.kmp.ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:32)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.rpx_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(1510551301, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
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
    CanvasBasedWindow(VOID, 'ComposeTarget', VOID, VOID, ComposableSingletons$MainKt_getInstance().rpx_1);
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
  org_korchagin_kmp_activity_auth_AuthActivity$stable = 0;
  org_korchagin_kmp_activity_auth_component_AuthComponent$stable = 0;
  org_korchagin_kmp_activity_auth_component_authFragment_AuthFragment$stable = 0;
  org_korchagin_kmp_activity_auth_component_passwordRecoveryFragment_PasswordRecoveryFragment$stable = 0;
  org_korchagin_kmp_activity_auth_component_registrationFragment_RegistrationFragment$stable = 0;
  org_korchagin_kmp_activity_bboysDetails_BboysDetailsActivity$stable = 0;
  org_korchagin_kmp_activity_bboysDetails_components_BboysDetailsComponent$stable = 0;
  org_korchagin_kmp_activity_bboysDetails_fragments_BboysDetailsFragment$stable = 0;
  org_korchagin_kmp_activity_elementDetails_ElementDetailsActivity$stable = 0;
  org_korchagin_kmp_activity_elementDetails_components_ElementDetailsComponent$stable = 0;
  org_korchagin_kmp_activity_profile_fragments_profile_ElementDetailsFragment$stable = 0;
  org_korchagin_kmp_activity_main_MainActivity$stable = 0;
  org_korchagin_kmp_activity_main_components_BboysComponent$stable = 0;
  org_korchagin_kmp_activity_main_components_HomeComponent$stable = 0;
  org_korchagin_kmp_activity_main_components_RatingsComponent$stable = 0;
  org_korchagin_kmp_activity_main_fragments_bboys_BboysFragment$stable = 0;
  org_korchagin_kmp_activity_main_fragments_home_HomeFragment$stable = 0;
  org_korchagin_kmp_activity_main_fragments_ratings_RatingsFragment$stable = 0;
  org_korchagin_kmp_activity_profile_ProfileActivity$stable = 0;
  org_korchagin_kmp_activity_profile_components_ProfileComponent$stable = 0;
  org_korchagin_kmp_activity_profile_fragments_AvatarCropperFragment$stable = 0;
  org_korchagin_kmp_activity_profile_fragments_ProfileFragment$stable = 0;
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
  team_platforma_infoteam_theme_typography_Typography$stable = 8;
  team_platforma_infoteam_theme_typography_Text3XL$stable = 0;
  team_platforma_infoteam_theme_typography_Text2XL$stable = 0;
  team_platforma_infoteam_theme_typography_TextLG$stable = 0;
  team_platforma_infoteam_theme_typography_TextSM$stable = 0;
  team_platforma_infoteam_theme_typography_TextXS$stable = 0;
  org_korchagin_kmp_utils_StringUtils$stable = 0;
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
