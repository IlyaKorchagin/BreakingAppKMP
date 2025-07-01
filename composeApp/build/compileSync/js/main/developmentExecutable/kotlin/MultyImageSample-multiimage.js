(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-foundation-foundation.js', './kotlinx-coroutines-core.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'MultyImageSample-multiimage'.");
    }
    globalThis['MultyImageSample-multiimage'] = factory(typeof globalThis['MultyImageSample-multiimage'] === 'undefined' ? {} : globalThis['MultyImageSample-multiimage'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['kotlinx-coroutines-core'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var KProperty1 = kotlin_kotlin.$_$.uj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zg;
  var lazy = kotlin_kotlin.$_$.rp;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.tb;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.mb;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.sb;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.aa;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.nb;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.sh;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var equals = kotlin_kotlin.$_$.sg;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x1;
  var ensureNotNull = kotlin_kotlin.$_$.jp;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var println = kotlin_kotlin.$_$.dg;
  var KProperty0 = kotlin_kotlin.$_$.tj;
  var THROW_ISE = kotlin_kotlin.$_$.po;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xg;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var Exception = kotlin_kotlin.$_$.bo;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var printStackTrace = kotlin_kotlin.$_$.up;
  var toString = kotlin_kotlin.$_$.eq;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sp;
  var isByteArray = kotlin_kotlin.$_$.mh;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  var THROW_IAE = kotlin_kotlin.$_$.oo;
  var enumEntries = kotlin_kotlin.$_$.cg;
  var Enum = kotlin_kotlin.$_$.zn;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dh;
  var withIndex = kotlin_kotlin.$_$.ye;
  var Collection = kotlin_kotlin.$_$.d7;
  var getOrNull = kotlin_kotlin.$_$.wa;
  var toByte = kotlin_kotlin.$_$.li;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a4;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.h4;
  var numberRangeToNumber = kotlin_kotlin.$_$.ci;
  var sliceArray = kotlin_kotlin.$_$.ed;
  var decodeToString = kotlin_kotlin.$_$.wk;
  var to = kotlin_kotlin.$_$.fq;
  var mapOf = kotlin_kotlin.$_$.bc;
  var isCharSequence = kotlin_kotlin.$_$.oh;
  var trim = kotlin_kotlin.$_$.jn;
  var toString_0 = kotlin_kotlin.$_$.oi;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w4;
  var toString_1 = kotlin_kotlin.$_$.cn;
  var padStart = kotlin_kotlin.$_$.sl;
  var isBlank = kotlin_kotlin.$_$.jl;
  var numberToInt = kotlin_kotlin.$_$.gi;
  var substringAfter = kotlin_kotlin.$_$.im;
  var charSequenceLength = kotlin_kotlin.$_$.ng;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var charSequenceGet = kotlin_kotlin.$_$.mg;
  var toByteArray = kotlin_kotlin.$_$.ud;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.o6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j4;
  var contains = kotlin_kotlin.$_$.a9;
  var intercepted = kotlin_kotlin.$_$.gf;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var returnIfSuspended = kotlin_kotlin.$_$.q;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var startsWith = kotlin_kotlin.$_$.dm;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Exception_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var defineProp = kotlin_kotlin.$_$.qg;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForObject(ComposableSingletons$MultiImageKt, 'ComposableSingletons$MultiImageKt');
  initMetadataForLambda(AsyncMultiImage$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncMultiImage$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_5, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_7, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_9, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncMultiImage$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(ContentType, 'ContentType', VOID, Enum);
  initMetadataForClass(ReceivedFile, 'ReceivedFile');
  initMetadataForClass(FileType, 'FileType', VOID, Enum);
  initMetadataForClass(IsoFormat, 'IsoFormat', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ByteArrayFormat, 'ByteArrayFormat', ByteArrayFormat);
  initMetadataForLambda(ImageCache$suspendPut$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(ImageCache$suspendGet$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ImageCache, 'ImageCache', VOID, VOID, VOID, [2, 1]);
  initMetadataForLambda(Network$contentType$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(Network$loadImage$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(Network$loadVideoFrame$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($frameByteArrayCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(Network, 'Network', Network, VOID, VOID, [1]);
  initMetadataForClass(FrameExtractor$extractFrame$2$videoBlob$1);
  initMetadataForLambda(FrameExtractor$extractFrame$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($frameByteArrayCOROUTINE$1, CoroutineImpl);
  initMetadataForObject(FrameExtractor, 'FrameExtractor', VOID, VOID, VOID, [2, 1]);
  //endregion
  var multyimagesample_multiimage_generated_resources_Res_drawable$stable;
  var multyimagesample_multiimage_generated_resources_Res_string$stable;
  var multyimagesample_multiimage_generated_resources_Res_array$stable;
  var multyimagesample_multiimage_generated_resources_Res_plurals$stable;
  var multyimagesample_multiimage_generated_resources_Res_font$stable;
  var multyimagesample_multiimage_generated_resources_Res$stable;
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
    return readResourceBytes('composeResources/multyimagesample.multiimage.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/multyimagesample.multiimage.generated.resources/' + path);
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
  function AsyncMultiImage(modifier, placeholder, composablePlaceholder, image, cacheEnabled, contentScale, logEnabled, foreground, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var placeholder_0 = {_v: placeholder};
    var composablePlaceholder_0 = {_v: composablePlaceholder};
    var cacheEnabled_0 = {_v: cacheEnabled};
    var contentScale_0 = {_v: contentScale};
    var logEnabled_0 = {_v: logEnabled};
    var foreground_0 = {_v: foreground};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-580286484);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(placeholder_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(composablePlaceholder_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(image) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(cacheEnabled_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentScale_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(logEnabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(foreground_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        placeholder_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        composablePlaceholder_0._v = ComposableSingletons$MultiImageKt_getInstance().lambda_1_r8sbbp_1;
      }
      if (!(($default & 16) === 0)) {
        cacheEnabled_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        contentScale_0._v = Companion_getInstance_0().get_Fit_18jtko_k$();
      }
      if (!(($default & 64) === 0)) {
        logEnabled_0._v = false;
      }
      if (!(($default & 128) === 0)) {
        foreground_0._v = ComposableSingletons$MultiImageKt_getInstance().lambda_2_r8sbbo_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(-580286484, $dirty, -1, 'team.platforma.multiimage.AsyncMultiImage (MultiImage.kt:38)');
      }
      var tag = 'AsyncMultiImageLog';
      var cache = ImageCache_getInstance();
      $composer_0.startReplaceGroup_5hh8aj_k$(2092981023);
      if (cacheEnabled_0._v) {
        cache.initCacheDirectory_3cimn3_k$($composer_0, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      var extractor = FrameExtractor_getInstance().initialize_laxhhz_k$($composer_0, 6);
      var tmp = placeholder_0._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(2092987631);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changedInstance_s1wkiy_k$(placeholder_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
        var value = AsyncMultiImage$slambda_0(placeholder_0, null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mPlaceholder$delegate = produceState(null, tmp, tmp0_group, $composer_0, 6 | 112 & $dirty);
      $composer_0.startReplaceGroup_5hh8aj_k$(2092994610);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
        var value_0 = mutableStateOf(null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mImage = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(2093003763);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_0 = !!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(image) | ($dirty & 3670016) === 1048576) | $composer_0.changed_ga7h3f_k$(extractor)) | $composer_0.changedInstance_s1wkiy_k$(cache)) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
        var value_1 = AsyncMultiImage$slambda_2(image, tag, logEnabled_0, extractor, cache, cacheEnabled_0, mImage, null);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(image, tmp2_group, $composer_0, 14 & $dirty >> 9);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var $changed_0 = 14 & $dirty;
      var modifier_1 = modifier_0._v;
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_2().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_6 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
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
      // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
      var $this$Box = BoxScopeInstance_getInstance();
      var $changed_1 = 6 | 112 & $changed_0 >> 6;
      var $composer_5 = $composer_4;
      if (!(mImage.get_value_j01efc_k$() == null)) {
        $composer_5.startReplaceGroup_5hh8aj_k$(1935271717);
        var tmp0_bitmap = ensureNotNull(mImage.get_value_j01efc_k$());
        var tmp1_modifier = fillMaxSize(Companion_getInstance());
        var tmp_7 = contentScale_0._v;
        Image(tmp0_bitmap, null, tmp1_modifier, null, tmp_7, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_5, 432 | 57344 & $dirty >> 3, 232);
        $composer_5.endReplaceGroup_ek144q_k$();
      } else if (!(AsyncMultiImage$lambda(mPlaceholder$delegate) == null)) {
        $composer_5.startReplaceGroup_5hh8aj_k$(1309363260);
        var tmp_8 = ensureNotNull(AsyncMultiImage$lambda(mPlaceholder$delegate));
        var tmp_9 = fillMaxSize(Companion_getInstance());
        Image(tmp_8, null, tmp_9, null, null, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_5, 432, 248);
        $composer_5.endReplaceGroup_ek144q_k$();
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(1309368761);
        composablePlaceholder_0._v($this$Box, $composer_5, 14 & $changed_1 | 112 & $dirty >> 3);
        $composer_5.endReplaceGroup_ek144q_k$();
      }
      foreground_0._v($this$Box, $composer_5, 14 & $changed_1 | 112 & $dirty >> 18);
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
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(AsyncMultiImage$lambda_0(modifier_0, placeholder_0, composablePlaceholder_0, image, cacheEnabled_0, contentScale_0, logEnabled_0, foreground_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MultiImageKt$lambda_1$lambda_legei(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1842735843, $changed, -1, 'team.platforma.multiimage.ComposableSingletons$MultiImageKt.lambda-1.<anonymous> (MultiImage.kt:29)');
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
  function ComposableSingletons$MultiImageKt$lambda_2$lambda_s880np(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2141139450, $changed, -1, 'team.platforma.multiimage.ComposableSingletons$MultiImageKt.lambda-2.<anonymous> (MultiImage.kt:37)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MultiImageKt() {
    ComposableSingletons$MultiImageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1842735843, false, ComposableSingletons$MultiImageKt$lambda_1$lambda_legei));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-2141139450, false, ComposableSingletons$MultiImageKt$lambda_2$lambda_s880np));
  }
  protoOf(ComposableSingletons$MultiImageKt).get_lambda_1_4f6cy9_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MultiImageKt).get_lambda_2_cjdhqm_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MultiImageKt_instance;
  function ComposableSingletons$MultiImageKt_getInstance() {
    if (ComposableSingletons$MultiImageKt_instance == null)
      new ComposableSingletons$MultiImageKt();
    return ComposableSingletons$MultiImageKt_instance;
  }
  function logMultiImage(tag, msg, enabled) {
    if (enabled) {
      println('[' + tag + '] : ' + msg);
    }
  }
  function AsyncMultiImage$lambda($mPlaceholder$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mPlaceholder', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $mPlaceholder$delegate.get_value_j01efc_k$();
  }
  function AsyncMultiImage$slambda$slambda($placeholder, resultContinuation) {
    this.$placeholder_1 = $placeholder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda).invoke_4p01qk_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_4p01qk_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0;
          try {
            var tmp0_safe_receiver = this.$placeholder_1._v;
            tmp_0 = tmp0_safe_receiver == null ? null : toImageBitmap(tmp0_safe_receiver);
          } catch ($p) {
            var tmp_1;
            if ($p instanceof Exception) {
              var e = $p;
              tmp_1 = null;
            } else {
              throw $p;
            }
            tmp_0 = tmp_1;
          }
          return tmp_0;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda(this.$placeholder_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(AsyncMultiImage$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda$slambda_0($placeholder, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda($placeholder, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_4p01qk_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda($placeholder, resultContinuation) {
    this.$placeholder_1 = $placeholder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda).invoke_zakteh_k$ = function ($this$produceState, $completion) {
    var tmp = this.create_8wggm5_k$($this$produceState, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_zakteh_k$((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = Dispatchers_getInstance().get_Default_goqax4_k$();
            suspendResult = withContext(tmp_0, AsyncMultiImage$slambda$slambda_0(this.$placeholder_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$this$produceState_1.set_value_v1vabv_k$(ARGUMENT);
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
  protoOf(AsyncMultiImage$slambda).create_8wggm5_k$ = function ($this$produceState, completion) {
    var i = new AsyncMultiImage$slambda(this.$placeholder_1, completion);
    i.$this$produceState_1 = $this$produceState;
    return i;
  };
  protoOf(AsyncMultiImage$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8wggm5_k$((!(value == null) ? isInterface(value, ProduceStateScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda_0($placeholder, resultContinuation) {
    var i = new AsyncMultiImage$slambda($placeholder, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.invoke_zakteh_k$($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_1($tag, $logEnabled, $mImage, $image, resultContinuation) {
    this.$tag_1 = $tag;
    this.$logEnabled_1 = $logEnabled;
    this.$mImage_1 = $mImage;
    this.$image_1 = $image;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_1).invoke_d9fzmj_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          logMultiImage(this.$tag_1, 'Image ByteArray Load', this.$logEnabled_1._v);
          try {
            this.$mImage_1.set_value_v1vabv_k$(toImageBitmap(this.$image_1));
            logMultiImage(this.$tag_1, 'Image ByteArray Setup', this.$logEnabled_1._v);
          } catch ($p) {
            if ($p instanceof Exception) {
              var e = $p;
              printStackTrace(e);
              logMultiImage(this.$tag_1, 'Image ByteArray ' + Unit_getInstance().toString(), this.$logEnabled_1._v);
            } else {
              throw $p;
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda$slambda_1).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_1(this.$tag_1, this.$logEnabled_1, this.$mImage_1, this.$image_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(AsyncMultiImage$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda$slambda_2($tag, $logEnabled, $mImage, $image, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_1($tag, $logEnabled, $mImage, $image, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d9fzmj_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_3($mImage, $bytes, $tag, $logEnabled, resultContinuation) {
    this.$mImage_1 = $mImage;
    this.$bytes_1 = $bytes;
    this.$tag_1 = $tag;
    this.$logEnabled_1 = $logEnabled;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_3).invoke_d9fzmj_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$mImage_1.set_value_v1vabv_k$(toImageBitmap(this.$bytes_1));
          logMultiImage(this.$tag_1, 'Video ByteArray Frame Setup', this.$logEnabled_1._v);
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
  protoOf(AsyncMultiImage$slambda$slambda_3).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_3(this.$mImage_1, this.$bytes_1, this.$tag_1, this.$logEnabled_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(AsyncMultiImage$slambda$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda$slambda_4($mImage, $bytes, $tag, $logEnabled, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_3($mImage, $bytes, $tag, $logEnabled, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d9fzmj_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_5($tag, $image, $logEnabled, $mImage, $cacheBytes, resultContinuation) {
    this.$tag_1 = $tag;
    this.$image_1 = $image;
    this.$logEnabled_1 = $logEnabled;
    this.$mImage_1 = $mImage;
    this.$cacheBytes_1 = $cacheBytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_5).invoke_d9fzmj_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda$slambda_5).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          logMultiImage(this.$tag_1, 'Setup Image = [' + this.$image_1 + ']', this.$logEnabled_1._v);
          try {
            this.$mImage_1.set_value_v1vabv_k$(toImageBitmap(this.$cacheBytes_1));
          } catch ($p) {
            if ($p instanceof Exception) {
              var e = $p;
              printStackTrace(e);
              logMultiImage(this.$tag_1, 'Setup Image Exception ' + Unit_getInstance().toString(), this.$logEnabled_1._v);
            } else {
              throw $p;
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda$slambda_5).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_5(this.$tag_1, this.$image_1, this.$logEnabled_1, this.$mImage_1, this.$cacheBytes_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(AsyncMultiImage$slambda$slambda_5).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda$slambda_6($tag, $image, $logEnabled, $mImage, $cacheBytes, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_5($tag, $image, $logEnabled, $mImage, $cacheBytes, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d9fzmj_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_7($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    this.$tag_1 = $tag;
    this.$image_1 = $image;
    this.$logEnabled_1 = $logEnabled;
    this.$mImage_1 = $mImage;
    this.$bytes_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_7).invoke_d9fzmj_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda$slambda_7).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          logMultiImage(this.$tag_1, 'Setup Image = [' + this.$image_1 + ']', this.$logEnabled_1._v);
          this.$mImage_1.set_value_v1vabv_k$(toImageBitmap(this.$bytes_1));
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
  protoOf(AsyncMultiImage$slambda$slambda_7).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_7(this.$tag_1, this.$image_1, this.$logEnabled_1, this.$mImage_1, this.$bytes_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(AsyncMultiImage$slambda$slambda_7).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda$slambda_8($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_7($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d9fzmj_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_9($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    this.$tag_1 = $tag;
    this.$image_1 = $image;
    this.$logEnabled_1 = $logEnabled;
    this.$mImage_1 = $mImage;
    this.$bytes_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_9).invoke_d9fzmj_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda$slambda_9).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          logMultiImage(this.$tag_1, 'Setup Video Frame = [' + this.$image_1 + ']', this.$logEnabled_1._v);
          this.$mImage_1.set_value_v1vabv_k$(toImageBitmap(this.$bytes_1));
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
  protoOf(AsyncMultiImage$slambda$slambda_9).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_9(this.$tag_1, this.$image_1, this.$logEnabled_1, this.$mImage_1, this.$bytes_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(AsyncMultiImage$slambda$slambda_9).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda$slambda_10($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_9($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d9fzmj_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda_1($image, $tag, $logEnabled, $extractor, $cache, $cacheEnabled, $mImage, resultContinuation) {
    this.$image_1 = $image;
    this.$tag_1 = $tag;
    this.$logEnabled_1 = $logEnabled;
    this.$extractor_1 = $extractor;
    this.$cache_1 = $cache;
    this.$cacheEnabled_1 = $cacheEnabled;
    this.$mImage_1 = $mImage;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncMultiImage$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(28);
            this.tmp0_subject0__1 = this.$image_1;
            var tmp_0 = this.tmp0_subject0__1;
            if (!(tmp_0 == null) ? isByteArray(tmp_0) : false) {
              this.file1__1 = (new ByteArrayFormat()).detect_veyadf_k$(this.$image_1);
              var tmp1_safe_receiver = this.file1__1;
              var tmp_1 = toString(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_fileType_r29kf3_k$());
              var tmp2_safe_receiver = this.file1__1;
              logMultiImage(this.$tag_1, 'Received file: [type=' + tmp_1 + ' ext=' + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_ext_18j688_k$()) + ']', this.$logEnabled_1._v);
              var tmp_2 = this;
              var tmp3_safe_receiver = this.file1__1;
              tmp_2.tmp4_subject2__1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_fileType_r29kf3_k$();
              this.tmp03__1 = this.tmp4_subject2__1 == null ? -1 : this.tmp4_subject2__1.get_ordinal_ip24qg_k$();
              if (this.tmp03__1 === 0) {
                this.set_state_rjd8d0_k$(25);
                var tmp_3 = Dispatchers_getInstance().get_Default_goqax4_k$();
                suspendResult = withContext(tmp_3, AsyncMultiImage$slambda$slambda_2(this.$tag_1, this.$logEnabled_1, this.$mImage_1, this.$image_1, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.tmp03__1 === 1) {
                  logMultiImage(this.$tag_1, 'Video ByteArray Frame Load', this.$logEnabled_1._v);
                  this.set_exceptionState_fex74n_k$(23);
                  this.set_state_rjd8d0_k$(20);
                  suspendResult = this.$extractor_1.extractFrame_onaodq_k$(this.$image_1, this.file1__1.get_ext_18j688_k$(), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.tmp03__1 === 2) {
                    var tmp_4 = this;
                    logMultiImage(this.$tag_1, 'Unsupported file: [' + this.file1__1.get_fileType_r29kf3_k$().toString() + ']', this.$logEnabled_1._v);
                    tmp_4.WHEN_RESULT4__1 = Unit_getInstance();
                    this.set_state_rjd8d0_k$(26);
                    continue $sm;
                  } else {
                    if (this.tmp03__1 === 3) {
                      var tmp_5 = this;
                      logMultiImage(this.$tag_1, 'Unsupported file: [' + this.file1__1.get_fileType_r29kf3_k$().toString() + ']', this.$logEnabled_1._v);
                      tmp_5.WHEN_RESULT4__1 = Unit_getInstance();
                      this.set_state_rjd8d0_k$(26);
                      continue $sm;
                    } else {
                      if (this.tmp03__1 === 4) {
                        var tmp_6 = this;
                        logMultiImage(this.$tag_1, 'Unsupported file: [' + this.file1__1.get_fileType_r29kf3_k$().toString() + ']', this.$logEnabled_1._v);
                        tmp_6.WHEN_RESULT4__1 = Unit_getInstance();
                        this.set_state_rjd8d0_k$(26);
                        continue $sm;
                      } else {
                        if (this.tmp03__1 === -1) {
                          var tmp_7 = this;
                          logMultiImage(this.$tag_1, 'Unsupported file', this.$logEnabled_1._v);
                          tmp_7.WHEN_RESULT4__1 = Unit_getInstance();
                          this.set_state_rjd8d0_k$(26);
                          continue $sm;
                        } else {
                          var tmp_8 = this;
                          noWhenBranchMatchedException();
                        }
                      }
                    }
                  }
                }
              }
            } else {
              var tmp_9 = this.tmp0_subject0__1;
              if (!(tmp_9 == null) ? typeof tmp_9 === 'string' : false) {
                this.set_state_rjd8d0_k$(1);
                suspendResult = this.$cache_1.suspendGet_bdvte9_k$(this.$image_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(27);
                continue $sm;
              }
            }

            break;
          case 1:
            this.cacheBytes6__1 = suspendResult;
            if (!(this.cacheBytes6__1 == null)) {
              logMultiImage(this.$tag_1, 'Take image from cache = [' + this.$image_1 + ']', this.$logEnabled_1._v);
              this.set_state_rjd8d0_k$(18);
              var tmp_10 = Dispatchers_getInstance().get_Default_goqax4_k$();
              suspendResult = withContext(tmp_10, AsyncMultiImage$slambda$slambda_6(this.$tag_1, this.$image_1, this.$logEnabled_1, this.$mImage_1, this.cacheBytes6__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.network8__1 = new Network();
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.network8__1.contentType_t0zz8t_k$(this.$image_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.tmp6_subject9__1 = suspendResult;
            this.tmp010__1 = this.tmp6_subject9__1 == null ? -1 : this.tmp6_subject9__1.get_ordinal_ip24qg_k$();
            if (this.tmp010__1 === 0) {
              logMultiImage(this.$tag_1, 'Start upload Image = [' + this.$image_1 + ']', this.$logEnabled_1._v);
              this.set_state_rjd8d0_k$(10);
              suspendResult = this.network8__1.loadImage_n38nc5_k$(this.$image_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tmp010__1 === 1) {
                logMultiImage(this.$tag_1, 'Start upload Video = [' + this.$image_1 + ']', this.$logEnabled_1._v);
                this.set_state_rjd8d0_k$(3);
                suspendResult = this.network8__1.loadVideoFrame_nytwji_k$(this.$image_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.tmp010__1 === -1) {
                  var tmp_11 = this;
                  logMultiImage(this.$tag_1, 'Unsupported Content-Type [' + this.$image_1 + ']', this.$logEnabled_1._v);
                  tmp_11.WHEN_RESULT11__1 = Unit_getInstance();
                  this.set_state_rjd8d0_k$(17);
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  noWhenBranchMatchedException();
                }
              }
            }

            break;
          case 3:
            this.frame12__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(8);
            this.tmp8_safe_receiver14__1 = this.frame12__1;
            if (this.tmp8_safe_receiver14__1 == null) {
              this.WHEN_RESULT15__1 = null;
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            } else {
              var tmp_13 = this;
              tmp_13.this16__1 = this.tmp8_safe_receiver14__1;
              var tmp_14 = this;
              tmp_14.bytes17__1 = this.this16__1;
              if (this.$cacheEnabled_1._v) {
                logMultiImage(this.$tag_1, 'Cache Video Frame = [' + this.$image_1 + ']', this.$logEnabled_1._v);
                this.set_state_rjd8d0_k$(4);
                suspendResult = this.$cache_1.suspendPut_n95fn7_k$(this.$image_1, this.bytes17__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(5);
                continue $sm;
              }
            }

          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            var tmp_15 = Dispatchers_getInstance().get_Default_goqax4_k$();
            suspendResult = withContext(tmp_15, AsyncMultiImage$slambda$slambda_10(this.$tag_1, this.$image_1, this.$logEnabled_1, this.$mImage_1, this.bytes17__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_16 = this;
            tmp_16.WHEN_RESULT15__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.TRY_RESULT13__1 = this.WHEN_RESULT15__1;
            this.set_exceptionState_fex74n_k$(28);
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(28);
            var tmp_17 = this.get_exception_x0n6w6_k$();
            if (tmp_17 instanceof Exception) {
              this.e18__1 = this.get_exception_x0n6w6_k$();
              var tmp_18 = this;
              printStackTrace(this.e18__1);
              logMultiImage(this.$tag_1, 'Setup Video Exception ' + Unit_getInstance().toString(), this.$logEnabled_1._v);
              tmp_18.TRY_RESULT13__1 = Unit_getInstance();
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 9:
            this.set_exceptionState_fex74n_k$(28);
            this.WHEN_RESULT11__1 = this.TRY_RESULT13__1;
            this.set_state_rjd8d0_k$(17);
            continue $sm;
          case 10:
            this.loadImage19__1 = suspendResult;
            this.tmp7_safe_receiver20__1 = this.loadImage19__1;
            if (this.tmp7_safe_receiver20__1 == null) {
              this.WHEN_RESULT21__1 = null;
              this.set_state_rjd8d0_k$(16);
              continue $sm;
            } else {
              var tmp_19 = this;
              tmp_19.this22__1 = this.tmp7_safe_receiver20__1;
              var tmp_20 = this;
              tmp_20.bytes23__1 = this.this22__1;
              this.set_exceptionState_fex74n_k$(14);
              if (this.$cacheEnabled_1._v) {
                logMultiImage(this.$tag_1, 'Cache Image = [' + this.$image_1 + ']', this.$logEnabled_1._v);
                this.set_state_rjd8d0_k$(11);
                suspendResult = this.$cache_1.suspendPut_n95fn7_k$(this.$image_1, this.bytes23__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(12);
                continue $sm;
              }
            }

          case 11:
            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 12:
            this.set_state_rjd8d0_k$(13);
            var tmp_21 = Dispatchers_getInstance().get_Default_goqax4_k$();
            suspendResult = withContext(tmp_21, AsyncMultiImage$slambda$slambda_8(this.$tag_1, this.$image_1, this.$logEnabled_1, this.$mImage_1, this.bytes23__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.set_exceptionState_fex74n_k$(28);
            this.set_state_rjd8d0_k$(15);
            continue $sm;
          case 14:
            this.set_exceptionState_fex74n_k$(28);
            var tmp_22 = this.get_exception_x0n6w6_k$();
            if (tmp_22 instanceof Exception) {
              this.e24__1 = this.get_exception_x0n6w6_k$();
              printStackTrace(this.e24__1);
              logMultiImage(this.$tag_1, 'Setup Image Exception ' + Unit_getInstance().toString(), this.$logEnabled_1._v);
              this.set_state_rjd8d0_k$(15);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 15:
            var tmp_23 = this;
            this.set_exceptionState_fex74n_k$(28);
            tmp_23.WHEN_RESULT21__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(16);
            continue $sm;
          case 16:
            this.WHEN_RESULT11__1 = this.WHEN_RESULT21__1;
            this.set_state_rjd8d0_k$(17);
            continue $sm;
          case 17:
            this.WHEN_RESULT7__1 = this.WHEN_RESULT11__1;
            this.set_state_rjd8d0_k$(19);
            continue $sm;
          case 18:
            var tmp_24 = this;
            tmp_24.WHEN_RESULT7__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(19);
            continue $sm;
          case 19:
            this.set_state_rjd8d0_k$(27);
            continue $sm;
          case 20:
            this.frame25__1 = suspendResult;
            this.tmp5_safe_receiver26__1 = this.frame25__1;
            if (this.tmp5_safe_receiver26__1 == null) {
              this.WHEN_RESULT27__1 = null;
              this.set_state_rjd8d0_k$(22);
              continue $sm;
            } else {
              var tmp_25 = this;
              tmp_25.this28__1 = this.tmp5_safe_receiver26__1;
              var tmp_26 = this;
              tmp_26.bytes29__1 = this.this28__1;
              this.set_state_rjd8d0_k$(21);
              var tmp_27 = Dispatchers_getInstance().get_Default_goqax4_k$();
              suspendResult = withContext(tmp_27, AsyncMultiImage$slambda$slambda_4(this.$mImage_1, this.bytes29__1, this.$tag_1, this.$logEnabled_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 21:
            var tmp_28 = this;
            tmp_28.WHEN_RESULT27__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(22);
            continue $sm;
          case 22:
            this.TRY_RESULT5__1 = this.WHEN_RESULT27__1;
            this.set_exceptionState_fex74n_k$(28);
            this.set_state_rjd8d0_k$(24);
            continue $sm;
          case 23:
            this.set_exceptionState_fex74n_k$(28);
            var tmp_29 = this.get_exception_x0n6w6_k$();
            if (tmp_29 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_30 = this;
              printStackTrace(e);
              logMultiImage(this.$tag_1, 'Video ByteArray Frame ' + Unit_getInstance().toString(), this.$logEnabled_1._v);
              tmp_30.TRY_RESULT5__1 = Unit_getInstance();
              this.set_state_rjd8d0_k$(24);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 24:
            this.set_exceptionState_fex74n_k$(28);
            this.WHEN_RESULT4__1 = this.TRY_RESULT5__1;
            this.set_state_rjd8d0_k$(26);
            continue $sm;
          case 25:
            var tmp_31 = this;
            tmp_31.WHEN_RESULT4__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(26);
            continue $sm;
          case 26:
            this.set_state_rjd8d0_k$(27);
            continue $sm;
          case 27:
            return Unit_getInstance();
          case 28:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 28) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AsyncMultiImage$slambda_1(this.$image_1, this.$tag_1, this.$logEnabled_1, this.$extractor_1, this.$cache_1, this.$cacheEnabled_1, this.$mImage_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AsyncMultiImage$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncMultiImage$slambda_2($image, $tag, $logEnabled, $extractor, $cache, $cacheEnabled, $mImage, resultContinuation) {
    var i = new AsyncMultiImage$slambda_1($image, $tag, $logEnabled, $extractor, $cache, $cacheEnabled, $mImage, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$lambda_0($modifier, $placeholder, $composablePlaceholder, $image, $cacheEnabled, $contentScale, $logEnabled, $foreground, $$changed, $$default) {
    return function ($composer, $force) {
      AsyncMultiImage($modifier._v, $placeholder._v, $composablePlaceholder._v, $image, $cacheEnabled._v, $contentScale._v, $logEnabled._v, $foreground._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var ContentType_Image_instance;
  var ContentType_Video_instance;
  function values() {
    return [ContentType_Image_getInstance(), ContentType_Video_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Image':
        return ContentType_Image_getInstance();
      case 'Video':
        return ContentType_Video_getInstance();
      default:
        ContentType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ContentType_entriesInitialized;
  function ContentType_initEntries() {
    if (ContentType_entriesInitialized)
      return Unit_getInstance();
    ContentType_entriesInitialized = true;
    ContentType_Image_instance = new ContentType('Image', 0);
    ContentType_Video_instance = new ContentType('Video', 1);
  }
  var $ENTRIES;
  function ContentType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ContentType_Image_getInstance() {
    ContentType_initEntries();
    return ContentType_Image_instance;
  }
  function ContentType_Video_getInstance() {
    ContentType_initEntries();
    return ContentType_Video_instance;
  }
  var team_platforma_multiimage_utils_ByteArrayFormat_Companion_ReceivedFile$stable;
  var team_platforma_multiimage_utils_ByteArrayFormat$stable;
  var FileType_Image_instance;
  var FileType_Video_instance;
  var FileType_Doc_instance;
  var FileType_Archive_instance;
  var FileType_Audio_instance;
  function values_0() {
    return [FileType_Image_getInstance(), FileType_Video_getInstance(), FileType_Doc_getInstance(), FileType_Archive_getInstance(), FileType_Audio_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Image':
        return FileType_Image_getInstance();
      case 'Video':
        return FileType_Video_getInstance();
      case 'Doc':
        return FileType_Doc_getInstance();
      case 'Archive':
        return FileType_Archive_getInstance();
      case 'Audio':
        return FileType_Audio_getInstance();
      default:
        FileType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var FileType_entriesInitialized;
  function FileType_initEntries() {
    if (FileType_entriesInitialized)
      return Unit_getInstance();
    FileType_entriesInitialized = true;
    FileType_Image_instance = new FileType('Image', 0);
    FileType_Video_instance = new FileType('Video', 1);
    FileType_Doc_instance = new FileType('Doc', 2);
    FileType_Archive_instance = new FileType('Archive', 3);
    FileType_Audio_instance = new FileType('Audio', 4);
  }
  var $ENTRIES_0;
  var IsoFormat_MP4_instance;
  var IsoFormat_M4A_instance;
  var IsoFormat_M4V_instance;
  var IsoFormat_MOV_instance;
  var IsoFormat_M3GP_instance;
  var IsoFormat_HEIC_HEIF_instance;
  function values_1() {
    return [IsoFormat_MP4_getInstance(), IsoFormat_M4A_getInstance(), IsoFormat_M4V_getInstance(), IsoFormat_MOV_getInstance(), IsoFormat_M3GP_getInstance(), IsoFormat_HEIC_HEIF_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'MP4':
        return IsoFormat_MP4_getInstance();
      case 'M4A':
        return IsoFormat_M4A_getInstance();
      case 'M4V':
        return IsoFormat_M4V_getInstance();
      case 'MOV':
        return IsoFormat_MOV_getInstance();
      case 'M3GP':
        return IsoFormat_M3GP_getInstance();
      case 'HEIC_HEIF':
        return IsoFormat_HEIC_HEIF_getInstance();
      default:
        IsoFormat_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var IsoFormat_entriesInitialized;
  function IsoFormat_initEntries() {
    if (IsoFormat_entriesInitialized)
      return Unit_getInstance();
    IsoFormat_entriesInitialized = true;
    IsoFormat_MP4_instance = new IsoFormat('MP4', 0);
    IsoFormat_M4A_instance = new IsoFormat('M4A', 1);
    IsoFormat_M4V_instance = new IsoFormat('M4V', 2);
    IsoFormat_MOV_instance = new IsoFormat('MOV', 3);
    IsoFormat_M3GP_instance = new IsoFormat('M3GP', 4);
    IsoFormat_HEIC_HEIF_instance = new IsoFormat('HEIC_HEIF', 5);
  }
  var $ENTRIES_1;
  function ReceivedFile(fileType, ext) {
    this.fileType_1 = fileType;
    this.ext_1 = ext;
  }
  protoOf(ReceivedFile).get_fileType_r29kf3_k$ = function () {
    return this.fileType_1;
  };
  protoOf(ReceivedFile).get_ext_18j688_k$ = function () {
    return this.ext_1;
  };
  protoOf(ReceivedFile).component1_7eebsc_k$ = function () {
    return this.fileType_1;
  };
  protoOf(ReceivedFile).component2_7eebsb_k$ = function () {
    return this.ext_1;
  };
  protoOf(ReceivedFile).copy_eo3jp9_k$ = function (fileType, ext) {
    return new ReceivedFile(fileType, ext);
  };
  protoOf(ReceivedFile).copy$default_rsl8gm_k$ = function (fileType, ext, $super) {
    fileType = fileType === VOID ? this.fileType_1 : fileType;
    ext = ext === VOID ? this.ext_1 : ext;
    return $super === VOID ? this.copy_eo3jp9_k$(fileType, ext) : $super.copy_eo3jp9_k$.call(this, fileType, ext);
  };
  protoOf(ReceivedFile).toString = function () {
    return 'ReceivedFile(fileType=' + this.fileType_1.toString() + ', ext=' + this.ext_1 + ')';
  };
  protoOf(ReceivedFile).hashCode = function () {
    var result = this.fileType_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.ext_1) | 0;
    return result;
  };
  protoOf(ReceivedFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReceivedFile))
      return false;
    var tmp0_other_with_cast = other instanceof ReceivedFile ? other : THROW_CCE();
    if (!this.fileType_1.equals(tmp0_other_with_cast.fileType_1))
      return false;
    if (!(this.ext_1 === tmp0_other_with_cast.ext_1))
      return false;
    return true;
  };
  function FileType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function IsoFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FileType_Image_getInstance() {
    FileType_initEntries();
    return FileType_Image_instance;
  }
  function FileType_Video_getInstance() {
    FileType_initEntries();
    return FileType_Video_instance;
  }
  function FileType_Doc_getInstance() {
    FileType_initEntries();
    return FileType_Doc_instance;
  }
  function FileType_Archive_getInstance() {
    FileType_initEntries();
    return FileType_Archive_instance;
  }
  function FileType_Audio_getInstance() {
    FileType_initEntries();
    return FileType_Audio_instance;
  }
  function IsoFormat_MP4_getInstance() {
    IsoFormat_initEntries();
    return IsoFormat_MP4_instance;
  }
  function IsoFormat_M4A_getInstance() {
    IsoFormat_initEntries();
    return IsoFormat_M4A_instance;
  }
  function IsoFormat_M4V_getInstance() {
    IsoFormat_initEntries();
    return IsoFormat_M4V_instance;
  }
  function IsoFormat_MOV_getInstance() {
    IsoFormat_initEntries();
    return IsoFormat_MOV_instance;
  }
  function IsoFormat_M3GP_getInstance() {
    IsoFormat_initEntries();
    return IsoFormat_M3GP_instance;
  }
  function IsoFormat_HEIC_HEIF_getInstance() {
    IsoFormat_initEntries();
    return IsoFormat_HEIC_HEIF_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_6() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function detect$match($bytes, sig) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = withIndex(sig);
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'team.platforma.multiimage.utils.ByteArrayFormat.detect.match.<anonymous>' call
        var i = element.component1_7eebsc_k$();
        var b = element.component2_7eebsb_k$();
        var tmp0_safe_receiver = getOrNull($bytes, i);
        if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver) === toByte(b))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function ByteArrayFormat() {
    Companion_getInstance_6();
  }
  protoOf(ByteArrayFormat).detect_veyadf_k$ = function (bytes) {
    if (bytes.length < 12)
      return null;
    if (detect$match(bytes, new Int32Array([255, 216, 255])))
      return new ReceivedFile(FileType_Image_getInstance(), 'jpeg');
    if (detect$match(bytes, new Int32Array([137, 80, 78, 71, 13, 10, 26, 10])))
      return new ReceivedFile(FileType_Image_getInstance(), 'png');
    if (detect$match(bytes, new Int32Array([71, 73, 70, 56, 55, 97])) || detect$match(bytes, new Int32Array([71, 73, 70, 56, 57, 97])))
      return new ReceivedFile(FileType_Image_getInstance(), 'gif');
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(37);
    var tmp = Char__toInt_impl_vasixd(this_0);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(80);
    var tmp_0 = Char__toInt_impl_vasixd(this_1);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(68);
    var tmp_1 = Char__toInt_impl_vasixd(this_2);
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(70);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
    if (detect$match(bytes, new Int32Array([tmp, tmp_0, tmp_1, tmp$ret$3])))
      return new ReceivedFile(FileType_Doc_getInstance(), 'pdf');
    if (detect$match(bytes, new Int32Array([80, 75, 3, 4])))
      return new ReceivedFile(FileType_Archive_getInstance(), 'zip');
    if (detect$match(bytes, new Int32Array([73, 68, 51])))
      return new ReceivedFile(FileType_Audio_getInstance(), 'mp3');
    if (detect$match(bytes, new Int32Array([255, 251])))
      return new ReceivedFile(FileType_Audio_getInstance(), 'mp3');
    if (detect$match(bytes, new Int32Array([82, 73, 70, 70])) && decodeToString(sliceArray(bytes, numberRangeToNumber(8, 11))) === 'WEBP')
      return new ReceivedFile(FileType_Image_getInstance(), 'webp');
    if (decodeToString(sliceArray(bytes, numberRangeToNumber(4, 7))) === 'ftyp') {
      var brand = decodeToString(sliceArray(bytes, numberRangeToNumber(8, 11)));
      var isoFormats = mapOf([to('isom', IsoFormat_MP4_getInstance()), to('mp42', IsoFormat_MP4_getInstance()), to('mp41', IsoFormat_MP4_getInstance()), to('iso2', IsoFormat_MP4_getInstance()), to('M4A', IsoFormat_M4A_getInstance()), to('M4V', IsoFormat_M4V_getInstance()), to('qt', IsoFormat_MOV_getInstance()), to('3gp4', IsoFormat_M3GP_getInstance()), to('heic', IsoFormat_HEIC_HEIF_getInstance()), to('heix', IsoFormat_HEIC_HEIF_getInstance()), to('mif1', IsoFormat_HEIC_HEIF_getInstance()), to('msf1', IsoFormat_HEIC_HEIF_getInstance())]);
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$4 = toString_0(trim(isCharSequence(brand) ? brand : THROW_CCE()));
      var tmp0_elvis_lhs = isoFormats.get_wei43m_k$(tmp$ret$4);
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      var isoFormat = tmp_2;
      switch (isoFormat.get_ordinal_ip24qg_k$()) {
        case 0:
          return new ReceivedFile(FileType_Video_getInstance(), 'mp4');
        case 1:
          return new ReceivedFile(FileType_Audio_getInstance(), 'm4a');
        case 2:
          return new ReceivedFile(FileType_Video_getInstance(), 'm4v');
        case 3:
          return new ReceivedFile(FileType_Video_getInstance(), 'mov');
        case 4:
          return new ReceivedFile(FileType_Video_getInstance(), '3gp');
        case 5:
          return new ReceivedFile(FileType_Video_getInstance(), 'mp4');
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
    return null;
  };
  function generateAvatar(text, textFraction) {
    textFraction = textFraction === VOID ? 2.0 : textFraction;
    var size = 512;
    // Inline function 'kotlin.toUInt' call
    var this_0 = getStringHashCode(text);
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    var backgroundColor = '#' + padStart(toString_1(tmp$ret$0, 16), 6, _Char___init__impl__6a9atx(48));
    var tmp = document.createElement('canvas');
    var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    canvas.width = size;
    canvas.height = size;
    var tmp_0 = canvas.getContext('2d');
    var ctx = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(text)) {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0.0, 0.0, size, size);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '' + numberToInt(size / textFraction) + 'px sans-serif';
      // Inline function 'org.w3c.dom.CENTER' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      ctx.textAlign = 'center';
      // Inline function 'org.w3c.dom.MIDDLE' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      ctx.textBaseline = 'middle';
      ctx.fillText(text, size / 2 | 0, size / 2 | 0);
    }
    return toByteArray_0(canvas);
  }
  function toByteArray_0(_this__u8e3s4) {
    var dataUrl = _this__u8e3s4.toDataURL('image/png', 1);
    var base64 = substringAfter(dataUrl, 'base64,');
    return decodeBase64(base64);
  }
  function decodeBase64(base64) {
    // Inline function 'kotlin.text.map' call
    // Inline function 'kotlin.js.unsafeCast' call
    var this_0 = atob(base64);
    // Inline function 'kotlin.text.mapTo' call
    var destination = ArrayList_init_$Create$(charSequenceLength(this_0));
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(this_0)) {
      var item = charSequenceGet(this_0, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'team.platforma.multiimage.decodeBase64.<anonymous>' call
      // Inline function 'kotlin.code' call
      var tmp$ret$1 = Char__toInt_impl_vasixd(item);
      var tmp$ret$2 = toByte(tmp$ret$1);
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    return toByteArray(destination);
  }
  var team_platforma_multiimage_cache_ImageCache$stable;
  function ImageCache$suspendPut$slambda$lambda($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function ImageCache$suspendPut$slambda$lambda_0($transaction) {
    return function (it) {
      $transaction.abort();
      return Unit_getInstance();
    };
  }
  function ImageCache$suspendGet$slambda$lambda($request, $continuation) {
    return function (it) {
      var tmp = $request.result;
      var result = tmp instanceof Uint8Array ? tmp : null;
      var tmp_0;
      if (!(result == null)) {
        var tmp_1 = 0;
        var tmp_2 = result.length;
        var tmp_3 = new Int8Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_3[tmp_4] = result[tmp_4];
          tmp_1 = tmp_1 + 1 | 0;
        }
        var byteArray = tmp_3;
        // Inline function 'kotlin.coroutines.resume' call
        var this_0 = $continuation;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance_4();
        var tmp$ret$3 = _Result___init__impl__xyqfz8(byteArray);
        this_0.resumeWith_dtxwbr_k$(tmp$ret$3);
        tmp_0 = Unit_getInstance();
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var this_1 = $continuation;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance_4();
        var tmp$ret$5 = _Result___init__impl__xyqfz8(null);
        this_1.resumeWith_dtxwbr_k$(tmp$ret$5);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ImageCache$suspendGet$slambda$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(null);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function ImageCache$suspendGet$slambda$lambda_1($transaction) {
    return function (it) {
      $transaction.abort();
      return Unit_getInstance();
    };
  }
  function _get_DB_NAME__qr1n8l($this) {
    return $this.DB_NAME_1;
  }
  function _get_STORE_NAME__53ezdq($this) {
    return $this.STORE_NAME_1;
  }
  function _get_DB_VERSION__bxrjws($this) {
    return $this.DB_VERSION_1;
  }
  function _set_database__vc48fw($this, _set____db54di) {
    $this.database_1 = _set____db54di;
  }
  function _get_database__ij7wz4($this) {
    return $this.database_1;
  }
  function openDatabase($this) {
    if (!($this.database_1 == null))
      return Unit_getInstance();
    var request = get_indexedDB().open('MultiImageCacheDB', 1);
    request.onupgradeneeded = ImageCache$openDatabase$lambda;
    request.onsuccess = ImageCache$openDatabase$lambda_0;
    request.onerror = ImageCache$openDatabase$lambda_1;
  }
  function ImageCache$initCacheDirectory$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.initCacheDirectory_3cimn3_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ImageCache$openDatabase$lambda(event) {
    var tmp = event.target;
    var database = (tmp instanceof IDBOpenDBRequest ? tmp : THROW_CCE()).result;
    if (!contains(database.objectStoreNames, 'cache_images')) {
      database.createObjectStore('cache_images');
    }
    return Unit_getInstance();
  }
  function ImageCache$openDatabase$lambda_0(event) {
    var tmp = ImageCache_getInstance();
    var tmp_0 = event.target;
    tmp.database_1 = (tmp_0 instanceof IDBRequest ? tmp_0 : THROW_CCE()).result;
    return Unit_getInstance();
  }
  function ImageCache$openDatabase$lambda_1(event) {
    return Unit_getInstance();
  }
  function ImageCache$suspendPut$slambda($data, $url, resultContinuation) {
    this.$data_1 = $data;
    this.$url_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ImageCache$suspendPut$slambda).invoke_d9fzmj_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ImageCache$suspendPut$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ImageCache$suspendPut$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.tmp0_safe_receiver0__1 = ImageCache_getInstance().database_1;
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.this2__1 = this.tmp0_safe_receiver0__1;
              var tmp_1 = this;
              tmp_1.db3__1 = this.this2__1;
              this.set_state_rjd8d0_k$(1);
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.initCancellability_shqc60_k$();
              var transaction = this.db3__1.transaction('cache_images', 'readwrite');
              var store = transaction.objectStore('cache_images');
              var buffer = new Uint8Array(this.$data_1.length);
              var index = 0;
              var indexedObject = this.$data_1;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var item = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tmp1 = index;
                index = tmp1 + 1 | 0;
                buffer[tmp1] = item;
              }
              var request = store.put(buffer, getStringHashCode(this.$url_1).toString());
              request.onsuccess = ImageCache$suspendPut$slambda$lambda(cancellable);
              cancellable.invokeOnCancellation_kffkqp_k$(ImageCache$suspendPut$slambda$lambda_0(transaction));
              suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ImageCache$suspendPut$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new ImageCache$suspendPut$slambda(this.$data_1, this.$url_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(ImageCache$suspendPut$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ImageCache$suspendPut$slambda_0($data, $url, resultContinuation) {
    var i = new ImageCache$suspendPut$slambda($data, $url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_d9fzmj_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ImageCache$suspendGet$slambda($url, resultContinuation) {
    this.$url_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ImageCache$suspendGet$slambda).invoke_ri931u_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ImageCache$suspendGet$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri931u_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ImageCache$suspendGet$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.tmp0_safe_receiver0__1 = ImageCache_getInstance().database_1;
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.this2__1 = this.tmp0_safe_receiver0__1;
              var tmp_1 = this;
              tmp_1.db3__1 = this.this2__1;
              this.set_state_rjd8d0_k$(1);
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.initCancellability_shqc60_k$();
              var transaction = this.db3__1.transaction('cache_images', 'readonly');
              var store = transaction.objectStore('cache_images');
              var request = store.get(getStringHashCode(this.$url_1).toString());
              request.onsuccess = ImageCache$suspendGet$slambda$lambda(request, cancellable);
              request.onerror = ImageCache$suspendGet$slambda$lambda_0(cancellable);
              cancellable.invokeOnCancellation_kffkqp_k$(ImageCache$suspendGet$slambda$lambda_1(transaction));
              suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var tmp1_elvis_lhs = this.WHEN_RESULT1__1;
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              this.$this$withContext_1;
              tmp_2 = null;
            } else {
              tmp_2 = tmp1_elvis_lhs;
            }

            return tmp_2;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ImageCache$suspendGet$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new ImageCache$suspendGet$slambda(this.$url_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(ImageCache$suspendGet$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ImageCache$suspendGet$slambda_0($url, resultContinuation) {
    var i = new ImageCache$suspendGet$slambda($url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_ri931u_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ImageCache() {
    ImageCache_instance = this;
    this.DB_NAME_1 = 'MultiImageCacheDB';
    this.STORE_NAME_1 = 'cache_images';
    this.DB_VERSION_1 = 1;
    this.database_1 = null;
  }
  protoOf(ImageCache).initCacheDirectory_3cimn3_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1928429626);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1928429626, $dirty, -1, 'team.platforma.multiimage.cache.ImageCache.initCacheDirectory (ImageCache.kt:21)');
      }
      openDatabase(this);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ImageCache$initCacheDirectory$lambda(this, $changed));
    }
  };
  protoOf(ImageCache).suspendPut_n95fn7_k$ = function (url, data, $completion) {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return withContext(tmp, ImageCache$suspendPut$slambda_0(data, url, null), $completion);
  };
  protoOf(ImageCache).suspendGet_bdvte9_k$ = function (url, $completion) {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return withContext(tmp, ImageCache$suspendGet$slambda_0(url, null), $completion);
  };
  var ImageCache_instance;
  function ImageCache_getInstance() {
    if (ImageCache_instance == null)
      new ImageCache();
    return ImageCache_instance;
  }
  var team_platforma_multiimage_cache_IDBDatabase$stable;
  var team_platforma_multiimage_cache_IDBTransaction$stable;
  var team_platforma_multiimage_cache_IDBObjectStore$stable;
  var team_platforma_multiimage_cache_IDBRequest$stable;
  var team_platforma_multiimage_cache_IDBOpenDBRequest$stable;
  function get_indexedDB() {
    var tmp0_elvis_lhs = window.indexedDB;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? window.mozIndexedDB : tmp0_elvis_lhs;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? window.webkitIndexedDB : tmp1_elvis_lhs;
    return tmp2_elvis_lhs == null ? window.msIndexedDB : tmp2_elvis_lhs;
  }
  var team_platforma_multiimage_network_Network$stable;
  function Network$loadImage$slambda$lambda($controller) {
    return function () {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function Network$loadVideoFrame$slambda$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function Network$loadVideoFrame$slambda$lambda_0($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function Network$loadVideoFrame$slambda$lambda_1($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function Network$loadVideoFrame$slambda$lambda_2($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function _get_timeout__tg4wg($this) {
    return $this.timeout_1;
  }
  function arrayBufferToByteArray($this, buffer) {
    var byteArray = new Int8Array(buffer.byteLength);
    var view = new Uint8Array(buffer);
    var inductionVariable = 0;
    var last = buffer.byteLength;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        byteArray[i] = view[i];
      }
       while (inductionVariable < last);
    return byteArray;
  }
  function createAbortController($this) {
    var tmp = new AbortController();
    return (!(tmp == null) ? !(tmp == null) : false) ? tmp : THROW_CCE();
  }
  function createRequestInitWithSignal($this, signal) {
    var obj = {};
    obj.signal = signal;
    return (!(obj == null) ? !(obj == null) : false) ? obj : THROW_CCE();
  }
  function frameByteArray($this, uri, $completion) {
    var tmp = new $frameByteArrayCOROUTINE$0($this, uri, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function decodeBase64_0($this, base64) {
    return new Promise(Network$decodeBase64$lambda(base64));
  }
  function Network$contentType$slambda($url, resultContinuation) {
    this.$url_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Network$contentType$slambda).invoke_octzge_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Network$contentType$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_octzge_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Network$contentType$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = window;
            var headers = undefined;
            var body = undefined;
            var referrer = undefined;
            var referrerPolicy = undefined;
            var mode = undefined;
            var credentials = undefined;
            var cache = undefined;
            var redirect = undefined;
            var integrity = undefined;
            var keepalive = undefined;
            var window_0 = undefined;
            var o = {};
            o['method'] = 'HEAD';
            o['headers'] = headers;
            o['body'] = body;
            o['referrer'] = referrer;
            o['referrerPolicy'] = referrerPolicy;
            o['mode'] = mode;
            o['credentials'] = credentials;
            o['cache'] = cache;
            o['redirect'] = redirect;
            o['integrity'] = integrity;
            o['keepalive'] = keepalive;
            o['window'] = window_0;
            suspendResult = await_0(tmp_0.fetch(this.$url_1, o), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp_1;
            if (!response.ok) {
              tmp_1 = true;
            } else {
              var tmp_2 = response.type;
              tmp_1 = equals(tmp_2, 'opaque');
            }

            if (tmp_1) {
              return null;
            }

            var tmp0_elvis_lhs = response.headers.get('Content-Type');
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            var mContentType = tmp_3;
            var tmp_4 = this;
            return startsWith(mContentType, 'image/') ? ContentType_Image_getInstance() : startsWith(mContentType, 'video/') ? ContentType_Video_getInstance() : null;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_6 = this;
              tmp_6.TRY_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(Network$contentType$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new Network$contentType$slambda(this.$url_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(Network$contentType$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Network$contentType$slambda_0($url, resultContinuation) {
    var i = new Network$contentType$slambda($url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_octzge_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Network$loadImage$slambda(this$0, $url, resultContinuation) {
    this.this$0__1 = this$0;
    this.$url_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Network$loadImage$slambda).invoke_ri931u_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Network$loadImage$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri931u_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Network$loadImage$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.controller0__1 = createAbortController(this.this$0__1);
            var tmp_0 = this;
            tmp_0.timeoutId1__1 = setTimeout(Network$loadImage$slambda$lambda(this.controller0__1), this.this$0__1.timeout_1);
            this.set_exceptionState_fex74n_k$(4);
            this.requestInit3__1 = createRequestInitWithSignal(this.this$0__1, this.controller0__1.signal);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(window.fetch(this.$url_1, this.requestInit3__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response4__1 = suspendResult;
            clearTimeout(this.timeoutId1__1);
            if (this.response4__1.ok) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = await_0(this.response4__1.arrayBuffer(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              return null;
            }

          case 2:
            this.TRY_RESULT2__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 3:
            var arrayBuffer = suspendResult;
            return arrayBufferToByteArray(this.this$0__1, arrayBuffer);
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              tmp_2.TRY_RESULT2__1 = null;
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            this.set_exceptionState_fex74n_k$(5);
            return this.TRY_RESULT2__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(Network$loadImage$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new Network$loadImage$slambda(this.this$0__1, this.$url_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(Network$loadImage$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Network$loadImage$slambda_0(this$0, $url, resultContinuation) {
    var i = new Network$loadImage$slambda(this$0, $url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_ri931u_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Network$loadVideoFrame$slambda($url, this$0, resultContinuation) {
    this.$url_1 = $url;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Network$loadVideoFrame$slambda).invoke_ri931u_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Network$loadVideoFrame$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri931u_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Network$loadVideoFrame$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(10);
            var tmp_0 = this;
            var tmp_1 = document.createElement('video');
            tmp_0.videoElement0__1 = tmp_1 instanceof HTMLVideoElement ? tmp_1 : THROW_CCE();
            var tmp_2 = this;
            var tmp_3 = document.createElement('canvas');
            tmp_2.canvas1__1 = tmp_3 instanceof HTMLCanvasElement ? tmp_3 : THROW_CCE();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(9);
            this.set_exceptionState_fex74n_k$(8);
            this.videoElement0__1.src = this.$url_1;
            this.videoElement0__1.crossOrigin = 'Anonymous';
            var tmp_4 = this;
            var tmp_5 = this.canvas1__1.getContext('2d');
            tmp_4.tmp0_elvis_lhs4__1 = tmp_5 instanceof CanvasRenderingContext2D ? tmp_5 : THROW_CCE();
            if (this.tmp0_elvis_lhs4__1 == null) {
              this.tmp$ret$03__1 = null;
              this.set_exceptionState_fex74n_k$(10);
              this.set_state_rjd8d0_k$(7);
              var tmp_6 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT5__1 = this.tmp0_elvis_lhs4__1;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.context6__1 = this.WHEN_RESULT5__1;
            this.set_state_rjd8d0_k$(4);
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            this.videoElement0__1.onloadedmetadata = Network$loadVideoFrame$slambda$lambda(safe);
            this.videoElement0__1.onerror = Network$loadVideoFrame$slambda$lambda_0(safe);
            suspendResult = returnIfSuspended(safe.getOrThrow_23gqzp_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.canvas1__1.width = this.videoElement0__1.videoWidth;
            this.canvas1__1.height = this.videoElement0__1.videoHeight;
            this.duration7__1 = this.videoElement0__1.duration;
            this.timeScale8__1 = 600.0;
            this.middle9__1 = this.duration7__1 / 2.0;
            var tmp_7 = this;
            var x = this.middle9__1 * this.timeScale8__1;
            tmp_7.roundedMiddle10__1 = Math.floor(x) / this.timeScale8__1;
            this.videoElement0__1.currentTime = this.roundedMiddle10__1;
            this.set_state_rjd8d0_k$(5);
            var safe_0 = SafeContinuation_init_$Create$(intercepted(this));
            this.videoElement0__1.onseeked = Network$loadVideoFrame$slambda$lambda_1(safe_0);
            this.videoElement0__1.onerror = Network$loadVideoFrame$slambda$lambda_2(safe_0);
            suspendResult = returnIfSuspended(safe_0.getOrThrow_23gqzp_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.context6__1.drawImage(this.videoElement0__1, 0.0, 0.0, this.canvas1__1.width, this.canvas1__1.height);
            this.frameDataUri11__1 = this.canvas1__1.toDataURL('image/jpeg', 0.85);
            this.set_state_rjd8d0_k$(6);
            suspendResult = frameByteArray(this.this$0__1, this.frameDataUri11__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.tmp$ret$03__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(10);
            this.set_state_rjd8d0_k$(7);
            var tmp_8 = this;
            continue $sm;
          case 7:
            var tmp_9 = this.tmp$ret$03__1;
            this.set_exceptionState_fex74n_k$(10);
            this.videoElement0__1.remove();
            this.canvas1__1.remove();
            var tmp_10 = this;
            return tmp_9;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_11 = this.get_exception_x0n6w6_k$();
            if (tmp_11 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_12 = this;
              tmp_12.tmp$ret$22__1 = null;
              this.set_exceptionState_fex74n_k$(10);
              this.set_state_rjd8d0_k$(11);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 9:
            this.set_exceptionState_fex74n_k$(10);
            var t = this.get_exception_x0n6w6_k$();
            this.videoElement0__1.remove();
            this.canvas1__1.remove();
            throw t;
          case 10:
            throw this.get_exception_x0n6w6_k$();
          case 11:
            var tmp_13 = this.tmp$ret$22__1;
            this.set_exceptionState_fex74n_k$(10);
            this.videoElement0__1.remove();
            this.canvas1__1.remove();
            return tmp_13;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(Network$loadVideoFrame$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new Network$loadVideoFrame$slambda(this.$url_1, this.this$0__1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(Network$loadVideoFrame$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Network$loadVideoFrame$slambda_0($url, this$0, resultContinuation) {
    var i = new Network$loadVideoFrame$slambda($url, this$0, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_ri931u_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Network$decodeBase64$lambda($base64) {
    return function (resolve, reject) {
      var tmp;
      try {
        var tmp_0 = window.atob($base64);
        var binaryString = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
        var byteArray = new Uint8Array(binaryString.length);
        var inductionVariable = 0;
        var last = charSequenceLength(binaryString) - 1 | 0;
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'kotlin.code' call
            var this_0 = charSequenceGet(binaryString, i);
            var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
            // Inline function 'kotlin.js.asDynamic' call
            byteArray[i] = toByte(tmp$ret$0);
          }
           while (inductionVariable <= last);
        tmp = resolve(byteArray);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          tmp_1 = reject(e);
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function $frameByteArrayCOROUTINE$0(_this__u8e3s4, uri, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.uri_1 = uri;
  }
  protoOf($frameByteArrayCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.base64Data1__1 = substringAfter(this.uri_1, 'base64,', '');
            if (isBlank(this.base64Data1__1))
              throw Exception_init_$Create$('Invalid Base64 data');
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(decodeBase64_0(this._this__u8e3s4__1, this.base64Data1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var binary = suspendResult;
            var tmp_0 = this;
            var tmp_1 = 0;
            var tmp_2 = binary.length;
            var tmp_3 = new Int8Array(tmp_2);
            while (tmp_1 < tmp_2) {
              var tmp_4 = tmp_1;
              tmp_3[tmp_4] = binary[tmp_4];
              tmp_1 = tmp_1 + 1 | 0;
            }

            tmp_0.TRY_RESULT0__1 = tmp_3;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_6 = this;
              throw Exception_init_$Create$_0('Failed to decode Base64 data: ' + e.message, e);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function Network() {
    this.timeout_1 = 5000.0;
  }
  protoOf(Network).contentType_t0zz8t_k$ = function (url, $completion) {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return withContext(tmp, Network$contentType$slambda_0(url, null), $completion);
  };
  protoOf(Network).loadImage_n38nc5_k$ = function (url, $completion) {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return withContext(tmp, Network$loadImage$slambda_0(this, url, null), $completion);
  };
  protoOf(Network).loadVideoFrame_nytwji_k$ = function (url, $completion) {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return withContext(tmp, Network$loadVideoFrame$slambda_0(url, this, null), $completion);
  };
  function toImageBitmap(_this__u8e3s4) {
    return toComposeImageBitmap(Companion_getInstance_5().makeFromEncoded_99p5hy_k$(_this__u8e3s4));
  }
  var team_platforma_multiimage_utils_FrameExtractor$stable;
  function FrameExtractor$extractFrame$2$videoBlob$1($ext) {
    this.type_1 = 'video/' + $ext;
  }
  protoOf(FrameExtractor$extractFrame$2$videoBlob$1).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(FrameExtractor$extractFrame$2$videoBlob$1).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  function FrameExtractor$extractFrame$slambda$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function FrameExtractor$extractFrame$slambda$lambda_0($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function FrameExtractor$extractFrame$slambda$lambda_1($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function FrameExtractor$extractFrame$slambda$lambda_2($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_4();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function frameByteArray_0($this, uri, $completion) {
    var tmp = new $frameByteArrayCOROUTINE$1($this, uri, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function decodeBase64_1($this, base64) {
    return new Promise(FrameExtractor$decodeBase64$lambda(base64));
  }
  function FrameExtractor$extractFrame$slambda($byteArray, $ext, resultContinuation) {
    this.$byteArray_1 = $byteArray;
    this.$ext_1 = $ext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FrameExtractor$extractFrame$slambda).invoke_ri931u_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FrameExtractor$extractFrame$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri931u_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FrameExtractor$extractFrame$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_0 = this;
            var tmp_1 = document.createElement('video');
            tmp_0.videoElement0__1 = tmp_1 instanceof HTMLVideoElement ? tmp_1 : THROW_CCE();
            var tmp_2 = this;
            var tmp_3 = document.createElement('canvas');
            tmp_2.canvas1__1 = tmp_3 instanceof HTMLCanvasElement ? tmp_3 : THROW_CCE();
            this.url2__1 = null;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(8);
            this.set_exceptionState_fex74n_k$(7);
            var tmp_4 = this;
            var this_0 = [this.$byteArray_1];
            tmp_4.videoBlob5__1 = new Blob(this_0, new FrameExtractor$extractFrame$2$videoBlob$1(this.$ext_1));
            this.url2__1 = URL.createObjectURL(this.videoBlob5__1);
            this.videoElement0__1.src = this.url2__1;
            this.videoElement0__1.crossOrigin = 'Anonymous';
            var tmp_5 = this;
            var tmp_6 = this.canvas1__1.getContext('2d');
            tmp_5.context6__1 = tmp_6 instanceof CanvasRenderingContext2D ? tmp_6 : THROW_CCE();
            this.set_state_rjd8d0_k$(3);
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            this.videoElement0__1.onloadedmetadata = FrameExtractor$extractFrame$slambda$lambda(safe);
            this.videoElement0__1.onerror = FrameExtractor$extractFrame$slambda$lambda_0(safe);
            suspendResult = returnIfSuspended(safe.getOrThrow_23gqzp_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.canvas1__1.width = this.videoElement0__1.videoWidth;
            this.canvas1__1.height = this.videoElement0__1.videoHeight;
            this.duration7__1 = this.videoElement0__1.duration;
            this.timeScale8__1 = 600.0;
            this.middle9__1 = this.duration7__1 / 2.0;
            var tmp_7 = this;
            var x = this.middle9__1 * this.timeScale8__1;
            tmp_7.roundedMiddle10__1 = Math.floor(x) / this.timeScale8__1;
            this.videoElement0__1.currentTime = this.roundedMiddle10__1;
            this.set_state_rjd8d0_k$(4);
            var safe_0 = SafeContinuation_init_$Create$(intercepted(this));
            this.videoElement0__1.onseeked = FrameExtractor$extractFrame$slambda$lambda_1(safe_0);
            this.videoElement0__1.onerror = FrameExtractor$extractFrame$slambda$lambda_2(safe_0);
            suspendResult = returnIfSuspended(safe_0.getOrThrow_23gqzp_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.context6__1.drawImage(this.videoElement0__1, 0.0, 0.0, this.canvas1__1.width, this.canvas1__1.height);
            this.frameDataUri11__1 = this.canvas1__1.toDataURL('image/jpeg', 0.85);
            this.set_state_rjd8d0_k$(5);
            suspendResult = frameByteArray_0(FrameExtractor_getInstance(), this.frameDataUri11__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.tmp$ret$04__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            var tmp_8 = this;
            continue $sm;
          case 6:
            var tmp_9 = this.tmp$ret$04__1;
            this.set_exceptionState_fex74n_k$(9);
            var tmp0_safe_receiver = this.url2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              URL.revokeObjectURL(tmp0_safe_receiver);
            }

            this.videoElement0__1.remove();
            this.canvas1__1.remove();
            var tmp_10 = this;
            return tmp_9;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_11 = this.get_exception_x0n6w6_k$();
            if (tmp_11 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_12 = this;
              tmp_12.tmp$ret$23__1 = null;
              this.set_exceptionState_fex74n_k$(9);
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t = this.get_exception_x0n6w6_k$();
            var tmp0_safe_receiver_0 = this.url2__1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              URL.revokeObjectURL(tmp0_safe_receiver_0);
            }

            this.videoElement0__1.remove();
            this.canvas1__1.remove();
            throw t;
          case 9:
            throw this.get_exception_x0n6w6_k$();
          case 10:
            var tmp_13 = this.tmp$ret$23__1;
            this.set_exceptionState_fex74n_k$(9);
            var tmp0_safe_receiver_1 = this.url2__1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              URL.revokeObjectURL(tmp0_safe_receiver_1);
            }

            this.videoElement0__1.remove();
            this.canvas1__1.remove();
            return tmp_13;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(FrameExtractor$extractFrame$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new FrameExtractor$extractFrame$slambda(this.$byteArray_1, this.$ext_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(FrameExtractor$extractFrame$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FrameExtractor$extractFrame$slambda_0($byteArray, $ext, resultContinuation) {
    var i = new FrameExtractor$extractFrame$slambda($byteArray, $ext, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_ri931u_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FrameExtractor$decodeBase64$lambda($base64) {
    return function (resolve, reject) {
      var tmp;
      try {
        var tmp_0 = window.atob($base64);
        var binaryString = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
        var byteArray = new Uint8Array(binaryString.length);
        var inductionVariable = 0;
        var last = charSequenceLength(binaryString) - 1 | 0;
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'kotlin.code' call
            var this_0 = charSequenceGet(binaryString, i);
            var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
            // Inline function 'kotlin.js.asDynamic' call
            byteArray[i] = toByte(tmp$ret$0);
          }
           while (inductionVariable <= last);
        tmp = resolve(byteArray);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          tmp_1 = reject(e);
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function $frameByteArrayCOROUTINE$1(_this__u8e3s4, uri, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.uri_1 = uri;
  }
  protoOf($frameByteArrayCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.base64Data1__1 = substringAfter(this.uri_1, 'base64,', '');
            if (isBlank(this.base64Data1__1))
              throw Exception_init_$Create$('Invalid Base64 data');
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(decodeBase64_1(this._this__u8e3s4__1, this.base64Data1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var binary = suspendResult;
            var tmp_0 = this;
            var tmp_1 = 0;
            var tmp_2 = binary.length;
            var tmp_3 = new Int8Array(tmp_2);
            while (tmp_1 < tmp_2) {
              var tmp_4 = tmp_1;
              tmp_3[tmp_4] = binary[tmp_4];
              tmp_1 = tmp_1 + 1 | 0;
            }

            tmp_0.TRY_RESULT0__1 = tmp_3;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_6 = this;
              throw Exception_init_$Create$_0('Failed to decode Base64 data: ' + e.message, e);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function FrameExtractor() {
    FrameExtractor_instance = this;
  }
  protoOf(FrameExtractor).initialize_laxhhz_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(66051603);
    if (isTraceInProgress()) {
      traceEventStart(66051603, $changed, -1, 'team.platforma.multiimage.utils.FrameExtractor.initialize (FrameExtractor.kt:23)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return this;
  };
  protoOf(FrameExtractor).extractFrame_onaodq_k$ = function (byteArray, ext, $completion) {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return withContext(tmp, FrameExtractor$extractFrame$slambda_0(byteArray, ext, null), $completion);
  };
  var FrameExtractor_instance;
  function FrameExtractor_getInstance() {
    if (FrameExtractor_instance == null)
      new FrameExtractor();
    return FrameExtractor_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(FrameExtractor$extractFrame$2$videoBlob$1), 'type', function () {
    return this.get_type_wovaf7_k$();
  }, function (value) {
    this.set_type_4507og_k$(value);
  });
  //endregion
  //region block: init
  multyimagesample_multiimage_generated_resources_Res_drawable$stable = 0;
  multyimagesample_multiimage_generated_resources_Res_string$stable = 0;
  multyimagesample_multiimage_generated_resources_Res_array$stable = 0;
  multyimagesample_multiimage_generated_resources_Res_plurals$stable = 0;
  multyimagesample_multiimage_generated_resources_Res_font$stable = 0;
  multyimagesample_multiimage_generated_resources_Res$stable = 0;
  team_platforma_multiimage_utils_ByteArrayFormat_Companion_ReceivedFile$stable = 0;
  team_platforma_multiimage_utils_ByteArrayFormat$stable = 0;
  team_platforma_multiimage_cache_ImageCache$stable = 8;
  team_platforma_multiimage_cache_IDBDatabase$stable = 8;
  team_platforma_multiimage_cache_IDBTransaction$stable = 8;
  team_platforma_multiimage_cache_IDBObjectStore$stable = 0;
  team_platforma_multiimage_cache_IDBRequest$stable = 8;
  team_platforma_multiimage_cache_IDBOpenDBRequest$stable = 8;
  team_platforma_multiimage_network_Network$stable = 0;
  team_platforma_multiimage_utils_FrameExtractor$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AsyncMultiImage;
  _.$_$.b = generateAvatar;
  //endregion
  return _;
}));

//# sourceMappingURL=MultyImageSample-multiimage.js.map
