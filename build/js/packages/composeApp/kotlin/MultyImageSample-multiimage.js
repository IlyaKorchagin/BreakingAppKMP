(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-foundation-foundation.js', './kotlinx-coroutines-core.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MultyImageSample-multiimage'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MultyImageSample-multiimage'.");
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
    globalThis['MultyImageSample-multiimage'] = factory(typeof globalThis['MultyImageSample-multiimage'] === 'undefined' ? {} : globalThis['MultyImageSample-multiimage'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['kotlinx-coroutines-core'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.da;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.oe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var equals = kotlin_kotlin.$_$.od;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var println = kotlin_kotlin.$_$.ad;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var protoOf = kotlin_kotlin.$_$.ff;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var Exception = kotlin_kotlin.$_$.dk;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var VOID = kotlin_kotlin.$_$.j;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var printStackTrace = kotlin_kotlin.$_$.tl;
  var toString = kotlin_kotlin.$_$.cm;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var isByteArray = kotlin_kotlin.$_$.ie;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Enum = kotlin_kotlin.$_$.bk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var withIndex = kotlin_kotlin.$_$.bc;
  var Collection = kotlin_kotlin.$_$.q6;
  var getOrNull = kotlin_kotlin.$_$.d9;
  var toByte = kotlin_kotlin.$_$.gf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var numberRangeToNumber = kotlin_kotlin.$_$.xe;
  var sliceArray = kotlin_kotlin.$_$.fb;
  var decodeToString = kotlin_kotlin.$_$.jh;
  var to = kotlin_kotlin.$_$.dm;
  var mapOf = kotlin_kotlin.$_$.fa;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var trim = kotlin_kotlin.$_$.nj;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.j4;
  var toString_1 = kotlin_kotlin.$_$.hj;
  var padStart = kotlin_kotlin.$_$.ci;
  var isBlank = kotlin_kotlin.$_$.vh;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var substringAfter = kotlin_kotlin.$_$.ri;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var toByteArray = kotlin_kotlin.$_$.mb;
  var Companion_instance_0 = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var contains = kotlin_kotlin.$_$.s7;
  var intercepted = kotlin_kotlin.$_$.jc;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var returnIfSuspended = kotlin_kotlin.$_$.o;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var startsWith = kotlin_kotlin.$_$.mi;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Exception_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var defineProp = kotlin_kotlin.$_$.md;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MultiImageKt, 'ComposableSingletons$MultiImageKt');
  initMetadataForLambda(AsyncMultiImage$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncMultiImage$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_7, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncMultiImage$slambda$slambda_9, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncMultiImage$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ContentType, 'ContentType', VOID, Enum);
  initMetadataForClass(ReceivedFile, 'ReceivedFile');
  initMetadataForClass(FileType, 'FileType', VOID, Enum);
  initMetadataForClass(IsoFormat, 'IsoFormat', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ByteArrayFormat, 'ByteArrayFormat', ByteArrayFormat);
  initMetadataForLambda(ImageCache$suspendPut$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ImageCache$suspendGet$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ImageCache, 'ImageCache', VOID, VOID, VOID, [2, 1]);
  initMetadataForLambda(Network$contentType$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Network$loadImage$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Network$loadVideoFrame$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($frameByteArrayCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(Network, 'Network', Network, VOID, VOID, [1]);
  initMetadataForClass(FrameExtractor$extractFrame$2$videoBlob$1);
  initMetadataForLambda(FrameExtractor$extractFrame$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($frameByteArrayCOROUTINE$1, CoroutineImpl);
  initMetadataForObject(FrameExtractor, 'FrameExtractor', VOID, VOID, VOID, [2, 1]);
  //endregion
  var multyimagesample_multiimage_generated_resources_Res_drawable$stable;
  var multyimagesample_multiimage_generated_resources_Res_string$stable;
  var multyimagesample_multiimage_generated_resources_Res_array$stable;
  var multyimagesample_multiimage_generated_resources_Res_plurals$stable;
  var multyimagesample_multiimage_generated_resources_Res_font$stable;
  var multyimagesample_multiimage_generated_resources_Res$stable;
  function AsyncMultiImage(modifier, placeholder, composablePlaceholder, image, cacheEnabled, contentScale, logEnabled, foreground, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var placeholder_0 = {_v: placeholder};
    var composablePlaceholder_0 = {_v: composablePlaceholder};
    var cacheEnabled_0 = {_v: cacheEnabled};
    var contentScale_0 = {_v: contentScale};
    var logEnabled_0 = {_v: logEnabled};
    var foreground_0 = {_v: foreground};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-580286484);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(placeholder_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(composablePlaceholder_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(image) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g32(cacheEnabled_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentScale_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.g32(logEnabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.f32(foreground_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.u30()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        placeholder_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        composablePlaceholder_0._v = ComposableSingletons$MultiImageKt_getInstance().lp2_1;
      }
      if (!(($default & 16) === 0)) {
        cacheEnabled_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        contentScale_0._v = Companion_getInstance().z7w_1;
      }
      if (!(($default & 64) === 0)) {
        logEnabled_0._v = false;
      }
      if (!(($default & 128) === 0)) {
        foreground_0._v = ComposableSingletons$MultiImageKt_getInstance().mp2_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(-580286484, $dirty, -1, 'team.platforma.multiimage.AsyncMultiImage (MultiImage.kt:38)');
      }
      var tag = 'AsyncMultiImageLog';
      var cache = ImageCache_instance;
      $composer_0.a31(2092981023);
      if (cacheEnabled_0._v) {
        cache.rp2($composer_0, 0);
      }
      $composer_0.c31();
      var extractor = FrameExtractor_instance.sp2($composer_0, 6);
      var tmp = placeholder_0._v;
      $composer_0.a31(2092987631);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.f32(placeholder_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
        var value = AsyncMultiImage$slambda_0(placeholder_0, null);
        this_0.h33(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c31();
      var mPlaceholder$delegate = produceState(null, tmp, tmp0_group, $composer_0, 6 | 112 & $dirty);
      $composer_0.a31(2092994610);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
        var value_0 = mutableStateOf(null);
        this_1.h33(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.c31();
      var mImage = tmp1_group;
      $composer_0.a31(2093003763);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_0 = !!(!!(!!(!!($composer_0.f32(image) | ($dirty & 3670016) === 1048576) | $composer_0.f2r(extractor)) | $composer_0.f32(cache)) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
        var value_1 = AsyncMultiImage$slambda_2(image, tag, logEnabled_0, extractor, cache, cacheEnabled_0, mImage, null);
        this_2.h33(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(image, tmp2_group, $composer_0, 14 & $dirty >> 9);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var $changed_0 = 14 & $dirty;
      var modifier_1 = modifier_0._v;
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().m7p_1;
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
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_6 = $composer_3.v30();
      if (!isInterface(tmp_6, Applier)) {
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
      // Inline function 'team.platforma.multiimage.AsyncMultiImage.<anonymous>' call
      var $changed_1 = 6 | 112 & $changed_0 >> 6;
      var $composer_5 = $composer_4;
      if (!(mImage.c1() == null)) {
        $composer_5.a31(1935271717);
        var tmp0_bitmap = ensureNotNull(mImage.c1());
        var tmp1_modifier = fillMaxSize(Companion_instance);
        var tmp_7 = contentScale_0._v;
        Image(tmp0_bitmap, null, tmp1_modifier, null, tmp_7, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_5, 432 | 57344 & $dirty >> 3, 232);
        $composer_5.c31();
      } else if (!(AsyncMultiImage$lambda(mPlaceholder$delegate) == null)) {
        $composer_5.a31(1309363260);
        var tmp_8 = ensureNotNull(AsyncMultiImage$lambda(mPlaceholder$delegate));
        var tmp_9 = fillMaxSize(Companion_instance);
        Image(tmp_8, null, tmp_9, null, null, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_5, 432, 248);
        $composer_5.c31();
      } else {
        $composer_5.a31(1309368761);
        composablePlaceholder_0._v(BoxScopeInstance_instance, $composer_5, 14 & $changed_1 | 112 & $dirty >> 3);
        $composer_5.c31();
      }
      foreground_0._v(BoxScopeInstance_instance, $composer_5, 14 & $changed_1 | 112 & $dirty >> 18);
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
    var tmp3_safe_receiver = $composer_0.w33();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.n38(AsyncMultiImage$lambda_0(modifier_0, placeholder_0, composablePlaceholder_0, image, cacheEnabled_0, contentScale_0, logEnabled_0, foreground_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function ComposableSingletons$MultiImageKt$lambda_1$lambda_legei(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1842735843, $changed, -1, 'team.platforma.multiimage.ComposableSingletons$MultiImageKt.lambda-1.<anonymous> (MultiImage.kt:29)');
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
  function ComposableSingletons$MultiImageKt$lambda_2$lambda_s880np(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-2141139450, $changed, -1, 'team.platforma.multiimage.ComposableSingletons$MultiImageKt.lambda-2.<anonymous> (MultiImage.kt:37)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MultiImageKt() {
    ComposableSingletons$MultiImageKt_instance = this;
    var tmp = this;
    tmp.lp2_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1842735843, false, ComposableSingletons$MultiImageKt$lambda_1$lambda_legei));
    var tmp_0 = this;
    tmp_0.mp2_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-2141139450, false, ComposableSingletons$MultiImageKt$lambda_2$lambda_s880np));
  }
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
    return $mPlaceholder$delegate.c1();
  }
  function AsyncMultiImage$slambda$slambda($placeholder, resultContinuation) {
    this.bp3_1 = $placeholder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda).dp3 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda$slambda).ma = function (p1, $completion) {
    return this.dp3((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp_0;
          try {
            var tmp0_safe_receiver = this.bp3_1._v;
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
          throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda$slambda).b20 = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda(this.bp3_1, completion);
    i.cp3_1 = $this$withContext;
    return i;
  };
  function AsyncMultiImage$slambda$slambda_0($placeholder, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda($placeholder, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.dp3($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda($placeholder, resultContinuation) {
    this.mp3_1 = $placeholder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda).op3 = function ($this$produceState, $completion) {
    var tmp = this.pp3($this$produceState, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda).ma = function (p1, $completion) {
    return this.op3((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = Dispatchers_getInstance().a1h_1;
            suspendResult = withContext(tmp_0, AsyncMultiImage$slambda$slambda_0(this.mp3_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.np3_1.a1y(ARGUMENT);
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
  protoOf(AsyncMultiImage$slambda).pp3 = function ($this$produceState, completion) {
    var i = new AsyncMultiImage$slambda(this.mp3_1, completion);
    i.np3_1 = $this$produceState;
    return i;
  };
  function AsyncMultiImage$slambda_0($placeholder, resultContinuation) {
    var i = new AsyncMultiImage$slambda($placeholder, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.op3($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_1($tag, $logEnabled, $mImage, $image, resultContinuation) {
    this.yp3_1 = $tag;
    this.zp3_1 = $logEnabled;
    this.ap4_1 = $mImage;
    this.bp4_1 = $image;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_1).a20 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          logMultiImage(this.yp3_1, 'Image ByteArray Load', this.zp3_1._v);
          try {
            this.ap4_1.a1y(toImageBitmap(this.bp4_1));
            logMultiImage(this.yp3_1, 'Image ByteArray Setup', this.zp3_1._v);
          } catch ($p) {
            if ($p instanceof Exception) {
              var e = $p;
              printStackTrace(e);
              logMultiImage(this.yp3_1, 'Image ByteArray ' + Unit_instance.toString(), this.zp3_1._v);
            } else {
              throw $p;
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda$slambda_1).b20 = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_1(this.yp3_1, this.zp3_1, this.ap4_1, this.bp4_1, completion);
    i.cp4_1 = $this$withContext;
    return i;
  };
  function AsyncMultiImage$slambda$slambda_2($tag, $logEnabled, $mImage, $image, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_1($tag, $logEnabled, $mImage, $image, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.a20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_3($mImage, $bytes, $tag, $logEnabled, resultContinuation) {
    this.lp4_1 = $mImage;
    this.mp4_1 = $bytes;
    this.np4_1 = $tag;
    this.op4_1 = $logEnabled;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_3).a20 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda$slambda_3).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          this.lp4_1.a1y(toImageBitmap(this.mp4_1));
          logMultiImage(this.np4_1, 'Video ByteArray Frame Setup', this.op4_1._v);
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
  protoOf(AsyncMultiImage$slambda$slambda_3).b20 = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_3(this.lp4_1, this.mp4_1, this.np4_1, this.op4_1, completion);
    i.pp4_1 = $this$withContext;
    return i;
  };
  function AsyncMultiImage$slambda$slambda_4($mImage, $bytes, $tag, $logEnabled, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_3($mImage, $bytes, $tag, $logEnabled, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.a20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_5($tag, $image, $logEnabled, $mImage, $cacheBytes, resultContinuation) {
    this.yp4_1 = $tag;
    this.zp4_1 = $image;
    this.ap5_1 = $logEnabled;
    this.bp5_1 = $mImage;
    this.cp5_1 = $cacheBytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_5).a20 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda$slambda_5).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          logMultiImage(this.yp4_1, 'Setup Image = [' + this.zp4_1 + ']', this.ap5_1._v);
          try {
            this.bp5_1.a1y(toImageBitmap(this.cp5_1));
          } catch ($p) {
            if ($p instanceof Exception) {
              var e = $p;
              printStackTrace(e);
              logMultiImage(this.yp4_1, 'Setup Image Exception ' + Unit_instance.toString(), this.ap5_1._v);
            } else {
              throw $p;
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda$slambda_5).b20 = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_5(this.yp4_1, this.zp4_1, this.ap5_1, this.bp5_1, this.cp5_1, completion);
    i.dp5_1 = $this$withContext;
    return i;
  };
  function AsyncMultiImage$slambda$slambda_6($tag, $image, $logEnabled, $mImage, $cacheBytes, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_5($tag, $image, $logEnabled, $mImage, $cacheBytes, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.a20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_7($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    this.mp5_1 = $tag;
    this.np5_1 = $image;
    this.op5_1 = $logEnabled;
    this.pp5_1 = $mImage;
    this.qp5_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_7).a20 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda$slambda_7).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_7).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          logMultiImage(this.mp5_1, 'Setup Image = [' + this.np5_1 + ']', this.op5_1._v);
          this.pp5_1.a1y(toImageBitmap(this.qp5_1));
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
  protoOf(AsyncMultiImage$slambda$slambda_7).b20 = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_7(this.mp5_1, this.np5_1, this.op5_1, this.pp5_1, this.qp5_1, completion);
    i.rp5_1 = $this$withContext;
    return i;
  };
  function AsyncMultiImage$slambda$slambda_8($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_7($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.a20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda$slambda_9($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    this.ap6_1 = $tag;
    this.bp6_1 = $image;
    this.cp6_1 = $logEnabled;
    this.dp6_1 = $mImage;
    this.ep6_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda$slambda_9).a20 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda$slambda_9).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda$slambda_9).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          logMultiImage(this.ap6_1, 'Setup Video Frame = [' + this.bp6_1 + ']', this.cp6_1._v);
          this.dp6_1.a1y(toImageBitmap(this.ep6_1));
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
  protoOf(AsyncMultiImage$slambda$slambda_9).b20 = function ($this$withContext, completion) {
    var i = new AsyncMultiImage$slambda$slambda_9(this.ap6_1, this.bp6_1, this.cp6_1, this.dp6_1, this.ep6_1, completion);
    i.fp6_1 = $this$withContext;
    return i;
  };
  function AsyncMultiImage$slambda$slambda_10($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation) {
    var i = new AsyncMultiImage$slambda$slambda_9($tag, $image, $logEnabled, $mImage, $bytes, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.a20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$slambda_1($image, $tag, $logEnabled, $extractor, $cache, $cacheEnabled, $mImage, resultContinuation) {
    this.op6_1 = $image;
    this.pp6_1 = $tag;
    this.qp6_1 = $logEnabled;
    this.rp6_1 = $extractor;
    this.sp6_1 = $cache;
    this.tp6_1 = $cacheEnabled;
    this.up6_1 = $mImage;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncMultiImage$slambda_1).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncMultiImage$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncMultiImage$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 28;
            this.wp6_1 = this.op6_1;
            var tmp_0 = this.wp6_1;
            if (!(tmp_0 == null) ? isByteArray(tmp_0) : false) {
              this.xp6_1 = (new ByteArrayFormat()).bp8(this.op6_1);
              var tmp1_safe_receiver = this.xp6_1;
              var tmp_1 = toString(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cp8_1);
              var tmp2_safe_receiver = this.xp6_1;
              logMultiImage(this.pp6_1, 'Received file: [type=' + tmp_1 + ' ext=' + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.dp8_1) + ']', this.qp6_1._v);
              var tmp_2 = this;
              var tmp3_safe_receiver = this.xp6_1;
              tmp_2.yp6_1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.cp8_1;
              this.zp6_1 = this.yp6_1 == null ? -1 : this.yp6_1.z2_1;
              if (this.zp6_1 === 0) {
                this.s9_1 = 25;
                var tmp_3 = Dispatchers_getInstance().a1h_1;
                suspendResult = withContext(tmp_3, AsyncMultiImage$slambda$slambda_2(this.pp6_1, this.qp6_1, this.up6_1, this.op6_1, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.zp6_1 === 1) {
                  logMultiImage(this.pp6_1, 'Video ByteArray Frame Load', this.qp6_1._v);
                  this.t9_1 = 23;
                  this.s9_1 = 20;
                  suspendResult = this.rp6_1.ep8(this.op6_1, this.xp6_1.dp8_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.zp6_1 === 2) {
                    var tmp_4 = this;
                    logMultiImage(this.pp6_1, 'Unsupported file: [' + this.xp6_1.cp8_1.toString() + ']', this.qp6_1._v);
                    tmp_4.ap7_1 = Unit_instance;
                    this.s9_1 = 26;
                    continue $sm;
                  } else {
                    if (this.zp6_1 === 3) {
                      var tmp_5 = this;
                      logMultiImage(this.pp6_1, 'Unsupported file: [' + this.xp6_1.cp8_1.toString() + ']', this.qp6_1._v);
                      tmp_5.ap7_1 = Unit_instance;
                      this.s9_1 = 26;
                      continue $sm;
                    } else {
                      if (this.zp6_1 === 4) {
                        var tmp_6 = this;
                        logMultiImage(this.pp6_1, 'Unsupported file: [' + this.xp6_1.cp8_1.toString() + ']', this.qp6_1._v);
                        tmp_6.ap7_1 = Unit_instance;
                        this.s9_1 = 26;
                        continue $sm;
                      } else {
                        if (this.zp6_1 === -1) {
                          var tmp_7 = this;
                          logMultiImage(this.pp6_1, 'Unsupported file', this.qp6_1._v);
                          tmp_7.ap7_1 = Unit_instance;
                          this.s9_1 = 26;
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
              var tmp_9 = this.wp6_1;
              if (!(tmp_9 == null) ? typeof tmp_9 === 'string' : false) {
                this.s9_1 = 1;
                suspendResult = this.sp6_1.ap8(this.op6_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.s9_1 = 27;
                continue $sm;
              }
            }

            break;
          case 1:
            this.cp7_1 = suspendResult;
            if (!(this.cp7_1 == null)) {
              logMultiImage(this.pp6_1, 'Take image from cache = [' + this.op6_1 + ']', this.qp6_1._v);
              this.s9_1 = 18;
              var tmp_10 = Dispatchers_getInstance().a1h_1;
              suspendResult = withContext(tmp_10, AsyncMultiImage$slambda$slambda_6(this.pp6_1, this.op6_1, this.qp6_1, this.up6_1, this.cp7_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ep7_1 = new Network();
              this.s9_1 = 2;
              suspendResult = this.ep7_1.gp8(this.op6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.fp7_1 = suspendResult;
            this.gp7_1 = this.fp7_1 == null ? -1 : this.fp7_1.z2_1;
            if (this.gp7_1 === 0) {
              logMultiImage(this.pp6_1, 'Start upload Image = [' + this.op6_1 + ']', this.qp6_1._v);
              this.s9_1 = 10;
              suspendResult = this.ep7_1.ip8(this.op6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.gp7_1 === 1) {
                logMultiImage(this.pp6_1, 'Start upload Video = [' + this.op6_1 + ']', this.qp6_1._v);
                this.s9_1 = 3;
                suspendResult = this.ep7_1.hp8(this.op6_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.gp7_1 === -1) {
                  var tmp_11 = this;
                  logMultiImage(this.pp6_1, 'Unsupported Content-Type [' + this.op6_1 + ']', this.qp6_1._v);
                  tmp_11.hp7_1 = Unit_instance;
                  this.s9_1 = 17;
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  noWhenBranchMatchedException();
                }
              }
            }

            break;
          case 3:
            this.ip7_1 = suspendResult;
            this.t9_1 = 8;
            this.kp7_1 = this.ip7_1;
            if (this.kp7_1 == null) {
              this.lp7_1 = null;
              this.s9_1 = 7;
              continue $sm;
            } else {
              var tmp_13 = this;
              tmp_13.mp7_1 = this.kp7_1;
              var tmp_14 = this;
              tmp_14.np7_1 = this.mp7_1;
              if (this.tp6_1._v) {
                logMultiImage(this.pp6_1, 'Cache Video Frame = [' + this.op6_1 + ']', this.qp6_1._v);
                this.s9_1 = 4;
                suspendResult = this.sp6_1.jp8(this.op6_1, this.np7_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.s9_1 = 5;
                continue $sm;
              }
            }

          case 4:
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.s9_1 = 6;
            var tmp_15 = Dispatchers_getInstance().a1h_1;
            suspendResult = withContext(tmp_15, AsyncMultiImage$slambda$slambda_10(this.pp6_1, this.op6_1, this.qp6_1, this.up6_1, this.np7_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_16 = this;
            tmp_16.lp7_1 = Unit_instance;
            this.s9_1 = 7;
            continue $sm;
          case 7:
            this.jp7_1 = this.lp7_1;
            this.t9_1 = 28;
            this.s9_1 = 9;
            continue $sm;
          case 8:
            this.t9_1 = 28;
            var tmp_17 = this.v9_1;
            if (tmp_17 instanceof Exception) {
              this.op7_1 = this.v9_1;
              var tmp_18 = this;
              printStackTrace(this.op7_1);
              logMultiImage(this.pp6_1, 'Setup Video Exception ' + Unit_instance.toString(), this.qp6_1._v);
              tmp_18.jp7_1 = Unit_instance;
              this.s9_1 = 9;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 9:
            this.t9_1 = 28;
            this.hp7_1 = this.jp7_1;
            this.s9_1 = 17;
            continue $sm;
          case 10:
            this.pp7_1 = suspendResult;
            this.qp7_1 = this.pp7_1;
            if (this.qp7_1 == null) {
              this.rp7_1 = null;
              this.s9_1 = 16;
              continue $sm;
            } else {
              var tmp_19 = this;
              tmp_19.sp7_1 = this.qp7_1;
              var tmp_20 = this;
              tmp_20.tp7_1 = this.sp7_1;
              this.t9_1 = 14;
              if (this.tp6_1._v) {
                logMultiImage(this.pp6_1, 'Cache Image = [' + this.op6_1 + ']', this.qp6_1._v);
                this.s9_1 = 11;
                suspendResult = this.sp6_1.jp8(this.op6_1, this.tp7_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.s9_1 = 12;
                continue $sm;
              }
            }

          case 11:
            this.s9_1 = 12;
            continue $sm;
          case 12:
            this.s9_1 = 13;
            var tmp_21 = Dispatchers_getInstance().a1h_1;
            suspendResult = withContext(tmp_21, AsyncMultiImage$slambda$slambda_8(this.pp6_1, this.op6_1, this.qp6_1, this.up6_1, this.tp7_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.t9_1 = 28;
            this.s9_1 = 15;
            continue $sm;
          case 14:
            this.t9_1 = 28;
            var tmp_22 = this.v9_1;
            if (tmp_22 instanceof Exception) {
              this.up7_1 = this.v9_1;
              printStackTrace(this.up7_1);
              logMultiImage(this.pp6_1, 'Setup Image Exception ' + Unit_instance.toString(), this.qp6_1._v);
              this.s9_1 = 15;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 15:
            var tmp_23 = this;
            this.t9_1 = 28;
            tmp_23.rp7_1 = Unit_instance;
            this.s9_1 = 16;
            continue $sm;
          case 16:
            this.hp7_1 = this.rp7_1;
            this.s9_1 = 17;
            continue $sm;
          case 17:
            this.dp7_1 = this.hp7_1;
            this.s9_1 = 19;
            continue $sm;
          case 18:
            var tmp_24 = this;
            tmp_24.dp7_1 = Unit_instance;
            this.s9_1 = 19;
            continue $sm;
          case 19:
            this.s9_1 = 27;
            continue $sm;
          case 20:
            this.vp7_1 = suspendResult;
            this.wp7_1 = this.vp7_1;
            if (this.wp7_1 == null) {
              this.xp7_1 = null;
              this.s9_1 = 22;
              continue $sm;
            } else {
              var tmp_25 = this;
              tmp_25.yp7_1 = this.wp7_1;
              var tmp_26 = this;
              tmp_26.zp7_1 = this.yp7_1;
              this.s9_1 = 21;
              var tmp_27 = Dispatchers_getInstance().a1h_1;
              suspendResult = withContext(tmp_27, AsyncMultiImage$slambda$slambda_4(this.up6_1, this.zp7_1, this.pp6_1, this.qp6_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 21:
            var tmp_28 = this;
            tmp_28.xp7_1 = Unit_instance;
            this.s9_1 = 22;
            continue $sm;
          case 22:
            this.bp7_1 = this.xp7_1;
            this.t9_1 = 28;
            this.s9_1 = 24;
            continue $sm;
          case 23:
            this.t9_1 = 28;
            var tmp_29 = this.v9_1;
            if (tmp_29 instanceof Exception) {
              var e = this.v9_1;
              var tmp_30 = this;
              printStackTrace(e);
              logMultiImage(this.pp6_1, 'Video ByteArray Frame ' + Unit_instance.toString(), this.qp6_1._v);
              tmp_30.bp7_1 = Unit_instance;
              this.s9_1 = 24;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 24:
            this.t9_1 = 28;
            this.ap7_1 = this.bp7_1;
            this.s9_1 = 26;
            continue $sm;
          case 25:
            var tmp_31 = this;
            tmp_31.ap7_1 = Unit_instance;
            this.s9_1 = 26;
            continue $sm;
          case 26:
            this.s9_1 = 27;
            continue $sm;
          case 27:
            return Unit_instance;
          case 28:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 28) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(AsyncMultiImage$slambda_1).b20 = function ($this$LaunchedEffect, completion) {
    var i = new AsyncMultiImage$slambda_1(this.op6_1, this.pp6_1, this.qp6_1, this.rp6_1, this.sp6_1, this.tp6_1, this.up6_1, completion);
    i.vp6_1 = $this$LaunchedEffect;
    return i;
  };
  function AsyncMultiImage$slambda_2($image, $tag, $logEnabled, $extractor, $cache, $cacheEnabled, $mImage, resultContinuation) {
    var i = new AsyncMultiImage$slambda_1($image, $tag, $logEnabled, $extractor, $cache, $cacheEnabled, $mImage, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncMultiImage$lambda_0($modifier, $placeholder, $composablePlaceholder, $image, $cacheEnabled, $contentScale, $logEnabled, $foreground, $$changed, $$default) {
    return function ($composer, $force) {
      AsyncMultiImage($modifier._v, $placeholder._v, $composablePlaceholder._v, $image, $cacheEnabled._v, $contentScale._v, $logEnabled._v, $foreground._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var ContentType_Image_instance;
  var ContentType_Video_instance;
  var ContentType_entriesInitialized;
  function ContentType_initEntries() {
    if (ContentType_entriesInitialized)
      return Unit_instance;
    ContentType_entriesInitialized = true;
    ContentType_Image_instance = new ContentType('Image', 0);
    ContentType_Video_instance = new ContentType('Video', 1);
  }
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
  var FileType_entriesInitialized;
  function FileType_initEntries() {
    if (FileType_entriesInitialized)
      return Unit_instance;
    FileType_entriesInitialized = true;
    FileType_Image_instance = new FileType('Image', 0);
    FileType_Video_instance = new FileType('Video', 1);
    FileType_Doc_instance = new FileType('Doc', 2);
    FileType_Archive_instance = new FileType('Archive', 3);
    FileType_Audio_instance = new FileType('Audio', 4);
  }
  var IsoFormat_MP4_instance;
  var IsoFormat_M4A_instance;
  var IsoFormat_M4V_instance;
  var IsoFormat_MOV_instance;
  var IsoFormat_M3GP_instance;
  var IsoFormat_HEIC_HEIF_instance;
  var IsoFormat_entriesInitialized;
  function IsoFormat_initEntries() {
    if (IsoFormat_entriesInitialized)
      return Unit_instance;
    IsoFormat_entriesInitialized = true;
    IsoFormat_MP4_instance = new IsoFormat('MP4', 0);
    IsoFormat_M4A_instance = new IsoFormat('M4A', 1);
    IsoFormat_M4V_instance = new IsoFormat('M4V', 2);
    IsoFormat_MOV_instance = new IsoFormat('MOV', 3);
    IsoFormat_M3GP_instance = new IsoFormat('M3GP', 4);
    IsoFormat_HEIC_HEIF_instance = new IsoFormat('HEIC_HEIF', 5);
  }
  function ReceivedFile(fileType, ext) {
    this.cp8_1 = fileType;
    this.dp8_1 = ext;
  }
  protoOf(ReceivedFile).toString = function () {
    return 'ReceivedFile(fileType=' + this.cp8_1.toString() + ', ext=' + this.dp8_1 + ')';
  };
  protoOf(ReceivedFile).hashCode = function () {
    var result = this.cp8_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.dp8_1) | 0;
    return result;
  };
  protoOf(ReceivedFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReceivedFile))
      return false;
    var tmp0_other_with_cast = other instanceof ReceivedFile ? other : THROW_CCE();
    if (!this.cp8_1.equals(tmp0_other_with_cast.cp8_1))
      return false;
    if (!(this.dp8_1 === tmp0_other_with_cast.dp8_1))
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
  }
  var Companion_instance_1;
  function Companion_getInstance_4() {
    return Companion_instance_1;
  }
  function detect$match($bytes, sig) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = withIndex(sig);
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'team.platforma.multiimage.utils.ByteArrayFormat.detect.match.<anonymous>' call
        var i = element.lb();
        var b = element.mb();
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
  }
  protoOf(ByteArrayFormat).bp8 = function (bytes) {
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
      var tmp0_elvis_lhs = isoFormats.s2(tmp$ret$4);
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      var isoFormat = tmp_2;
      switch (isoFormat.z2_1) {
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
      destination.e(tmp$ret$2);
    }
    return toByteArray(destination);
  }
  var team_platforma_multiimage_cache_ImageCache$stable;
  function ImageCache$suspendPut$slambda$lambda($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function ImageCache$suspendPut$slambda$lambda_0($transaction) {
    return function (it) {
      $transaction.abort();
      return Unit_instance;
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
        var tmp$ret$3 = _Result___init__impl__xyqfz8(byteArray);
        this_0.da(tmp$ret$3);
        tmp_0 = Unit_instance;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var this_1 = $continuation;
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(null);
        this_1.da(tmp$ret$5);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ImageCache$suspendGet$slambda$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(null);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function ImageCache$suspendGet$slambda$lambda_1($transaction) {
    return function (it) {
      $transaction.abort();
      return Unit_instance;
    };
  }
  function openDatabase($this) {
    if (!($this.qp2_1 == null))
      return Unit_instance;
    var request = get_indexedDB().open('MultiImageCacheDB', 1);
    request.onupgradeneeded = ImageCache$openDatabase$lambda;
    request.onsuccess = ImageCache$openDatabase$lambda_0;
    request.onerror = ImageCache$openDatabase$lambda_1;
  }
  function ImageCache$initCacheDirectory$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.rp2($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ImageCache$openDatabase$lambda(event) {
    var tmp = event.target;
    var database = (tmp instanceof IDBOpenDBRequest ? tmp : THROW_CCE()).result;
    if (!contains(database.objectStoreNames, 'cache_images')) {
      database.createObjectStore('cache_images');
    }
    return Unit_instance;
  }
  function ImageCache$openDatabase$lambda_0(event) {
    var tmp = ImageCache_instance;
    var tmp_0 = event.target;
    tmp.qp2_1 = (tmp_0 instanceof IDBRequest ? tmp_0 : THROW_CCE()).result;
    return Unit_instance;
  }
  function ImageCache$openDatabase$lambda_1(event) {
    return Unit_instance;
  }
  function ImageCache$suspendPut$slambda($data, $url, resultContinuation) {
    this.sp8_1 = $data;
    this.tp8_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ImageCache$suspendPut$slambda).a20 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ImageCache$suspendPut$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ImageCache$suspendPut$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.vp8_1 = ImageCache_instance.qp2_1;
            if (this.vp8_1 == null) {
              this.wp8_1 = null;
              this.s9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.xp8_1 = this.vp8_1;
              var tmp_1 = this;
              tmp_1.yp8_1 = this.xp8_1;
              this.s9_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.x19();
              var transaction = this.yp8_1.transaction('cache_images', 'readwrite');
              var store = transaction.objectStore('cache_images');
              var buffer = new Uint8Array(this.sp8_1.length);
              var index = 0;
              var indexedObject = this.sp8_1;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var item = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tmp1 = index;
                index = tmp1 + 1 | 0;
                buffer[tmp1] = item;
              }
              var request = store.put(buffer, getStringHashCode(this.tp8_1).toString());
              request.onsuccess = ImageCache$suspendPut$slambda$lambda(cancellable);
              cancellable.i18(ImageCache$suspendPut$slambda$lambda_0(transaction));
              suspendResult = returnIfSuspended(cancellable.a17(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.wp8_1 = suspendResult;
            this.s9_1 = 2;
            continue $sm;
          case 2:
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
  protoOf(ImageCache$suspendPut$slambda).b20 = function ($this$withContext, completion) {
    var i = new ImageCache$suspendPut$slambda(this.sp8_1, this.tp8_1, completion);
    i.up8_1 = $this$withContext;
    return i;
  };
  function ImageCache$suspendPut$slambda_0($data, $url, resultContinuation) {
    var i = new ImageCache$suspendPut$slambda($data, $url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.a20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ImageCache$suspendGet$slambda($url, resultContinuation) {
    this.hp9_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ImageCache$suspendGet$slambda).np9 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ImageCache$suspendGet$slambda).ma = function (p1, $completion) {
    return this.np9((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ImageCache$suspendGet$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.jp9_1 = ImageCache_instance.qp2_1;
            if (this.jp9_1 == null) {
              this.kp9_1 = null;
              this.s9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.lp9_1 = this.jp9_1;
              var tmp_1 = this;
              tmp_1.mp9_1 = this.lp9_1;
              this.s9_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.x19();
              var transaction = this.mp9_1.transaction('cache_images', 'readonly');
              var store = transaction.objectStore('cache_images');
              var request = store.get(getStringHashCode(this.hp9_1).toString());
              request.onsuccess = ImageCache$suspendGet$slambda$lambda(request, cancellable);
              request.onerror = ImageCache$suspendGet$slambda$lambda_0(cancellable);
              cancellable.i18(ImageCache$suspendGet$slambda$lambda_1(transaction));
              suspendResult = returnIfSuspended(cancellable.a17(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.kp9_1 = suspendResult;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            var tmp1_elvis_lhs = this.kp9_1;
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              this.ip9_1;
              tmp_2 = null;
            } else {
              tmp_2 = tmp1_elvis_lhs;
            }

            return tmp_2;
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
  protoOf(ImageCache$suspendGet$slambda).b20 = function ($this$withContext, completion) {
    var i = new ImageCache$suspendGet$slambda(this.hp9_1, completion);
    i.ip9_1 = $this$withContext;
    return i;
  };
  function ImageCache$suspendGet$slambda_0($url, resultContinuation) {
    var i = new ImageCache$suspendGet$slambda($url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.np9($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ImageCache() {
    this.np2_1 = 'MultiImageCacheDB';
    this.op2_1 = 'cache_images';
    this.pp2_1 = 1;
    this.qp2_1 = null;
  }
  protoOf(ImageCache).rp2 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1928429626);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1928429626, $dirty, -1, 'team.platforma.multiimage.cache.ImageCache.initCacheDirectory (ImageCache.kt:21)');
      }
      openDatabase(this);
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
      tmp1_safe_receiver.n38(ImageCache$initCacheDirectory$lambda(this, $changed));
    }
  };
  protoOf(ImageCache).jp8 = function (url, data, $completion) {
    var tmp = Dispatchers_getInstance().a1h_1;
    return withContext(tmp, ImageCache$suspendPut$slambda_0(data, url, null), $completion);
  };
  protoOf(ImageCache).ap8 = function (url, $completion) {
    var tmp = Dispatchers_getInstance().a1h_1;
    return withContext(tmp, ImageCache$suspendGet$slambda_0(url, null), $completion);
  };
  var ImageCache_instance;
  function ImageCache_getInstance() {
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
      return Unit_instance;
    };
  }
  function Network$loadVideoFrame$slambda$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function Network$loadVideoFrame$slambda$lambda_0($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function Network$loadVideoFrame$slambda$lambda_1($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function Network$loadVideoFrame$slambda$lambda_2($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
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
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function decodeBase64_0($this, base64) {
    return new Promise(Network$decodeBase64$lambda(base64));
  }
  function Network$contentType$slambda($url, resultContinuation) {
    this.ipa_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Network$contentType$slambda).lpa = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Network$contentType$slambda).ma = function (p1, $completion) {
    return this.lpa((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Network$contentType$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.s9_1 = 1;
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
            suspendResult = await_0(tmp_0.fetch(this.ipa_1, o), this);
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
            this.t9_1 = 3;
            var tmp_5 = this.v9_1;
            if (tmp_5 instanceof Error) {
              var t = this.v9_1;
              var tmp_6 = this;
              tmp_6.kpa_1 = null;
              this.s9_1 = 4;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return this.kpa_1;
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
  protoOf(Network$contentType$slambda).b20 = function ($this$withContext, completion) {
    var i = new Network$contentType$slambda(this.ipa_1, completion);
    i.jpa_1 = $this$withContext;
    return i;
  };
  function Network$contentType$slambda_0($url, resultContinuation) {
    var i = new Network$contentType$slambda($url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.lpa($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Network$loadImage$slambda(this$0, $url, resultContinuation) {
    this.upa_1 = this$0;
    this.vpa_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Network$loadImage$slambda).np9 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Network$loadImage$slambda).ma = function (p1, $completion) {
    return this.np9((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Network$loadImage$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.xpa_1 = createAbortController(this.upa_1);
            var tmp_0 = this;
            tmp_0.ypa_1 = setTimeout(Network$loadImage$slambda$lambda(this.xpa_1), this.upa_1.fp8_1);
            this.t9_1 = 4;
            this.apb_1 = createRequestInitWithSignal(this.upa_1, this.xpa_1.signal);
            this.s9_1 = 1;
            suspendResult = await_0(window.fetch(this.vpa_1, this.apb_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bpb_1 = suspendResult;
            clearTimeout(this.ypa_1);
            if (this.bpb_1.ok) {
              this.s9_1 = 3;
              suspendResult = await_0(this.bpb_1.arrayBuffer(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              return null;
            }

          case 2:
            this.zpa_1 = Unit_instance;
            this.t9_1 = 5;
            this.s9_1 = 6;
            continue $sm;
          case 3:
            var arrayBuffer = suspendResult;
            return arrayBufferToByteArray(this.upa_1, arrayBuffer);
          case 4:
            this.t9_1 = 5;
            var tmp_1 = this.v9_1;
            if (tmp_1 instanceof Exception) {
              var e = this.v9_1;
              var tmp_2 = this;
              tmp_2.zpa_1 = null;
              this.s9_1 = 6;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 5:
            throw this.v9_1;
          case 6:
            this.t9_1 = 5;
            return this.zpa_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 5) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Network$loadImage$slambda).b20 = function ($this$withContext, completion) {
    var i = new Network$loadImage$slambda(this.upa_1, this.vpa_1, completion);
    i.wpa_1 = $this$withContext;
    return i;
  };
  function Network$loadImage$slambda_0(this$0, $url, resultContinuation) {
    var i = new Network$loadImage$slambda(this$0, $url, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.np9($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Network$loadVideoFrame$slambda($url, this$0, resultContinuation) {
    this.kpb_1 = $url;
    this.lpb_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Network$loadVideoFrame$slambda).np9 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Network$loadVideoFrame$slambda).ma = function (p1, $completion) {
    return this.np9((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Network$loadVideoFrame$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 10;
            var tmp_0 = this;
            var tmp_1 = document.createElement('video');
            tmp_0.npb_1 = tmp_1 instanceof HTMLVideoElement ? tmp_1 : THROW_CCE();
            var tmp_2 = this;
            var tmp_3 = document.createElement('canvas');
            tmp_2.opb_1 = tmp_3 instanceof HTMLCanvasElement ? tmp_3 : THROW_CCE();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.t9_1 = 9;
            this.t9_1 = 8;
            this.npb_1.src = this.kpb_1;
            this.npb_1.crossOrigin = 'Anonymous';
            var tmp_4 = this;
            var tmp_5 = this.opb_1.getContext('2d');
            tmp_4.rpb_1 = tmp_5 instanceof CanvasRenderingContext2D ? tmp_5 : THROW_CCE();
            if (this.rpb_1 == null) {
              this.qpb_1 = null;
              this.t9_1 = 10;
              this.s9_1 = 7;
              var tmp_6 = this;
              continue $sm;
            } else {
              this.spb_1 = this.rpb_1;
              this.s9_1 = 3;
              continue $sm;
            }

          case 3:
            this.tpb_1 = this.spb_1;
            this.s9_1 = 4;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            this.npb_1.onloadedmetadata = Network$loadVideoFrame$slambda$lambda(safe);
            this.npb_1.onerror = Network$loadVideoFrame$slambda$lambda_0(safe);
            suspendResult = returnIfSuspended(safe.ka(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.opb_1.width = this.npb_1.videoWidth;
            this.opb_1.height = this.npb_1.videoHeight;
            this.upb_1 = this.npb_1.duration;
            this.vpb_1 = 600.0;
            this.wpb_1 = this.upb_1 / 2.0;
            var tmp_7 = this;
            var x = this.wpb_1 * this.vpb_1;
            tmp_7.xpb_1 = Math.floor(x) / this.vpb_1;
            this.npb_1.currentTime = this.xpb_1;
            this.s9_1 = 5;
            var safe_0 = SafeContinuation_init_$Create$(intercepted(this));
            this.npb_1.onseeked = Network$loadVideoFrame$slambda$lambda_1(safe_0);
            this.npb_1.onerror = Network$loadVideoFrame$slambda$lambda_2(safe_0);
            suspendResult = returnIfSuspended(safe_0.ka(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.tpb_1.drawImage(this.npb_1, 0.0, 0.0, this.opb_1.width, this.opb_1.height);
            this.ypb_1 = this.opb_1.toDataURL('image/jpeg', 0.85);
            this.s9_1 = 6;
            suspendResult = frameByteArray(this.lpb_1, this.ypb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.qpb_1 = suspendResult;
            this.t9_1 = 10;
            this.s9_1 = 7;
            var tmp_8 = this;
            continue $sm;
          case 7:
            var tmp_9 = this.qpb_1;
            this.t9_1 = 10;
            this.npb_1.remove();
            this.opb_1.remove();
            var tmp_10 = this;
            return tmp_9;
          case 8:
            this.t9_1 = 9;
            var tmp_11 = this.v9_1;
            if (tmp_11 instanceof Exception) {
              var e = this.v9_1;
              var tmp_12 = this;
              tmp_12.ppb_1 = null;
              this.t9_1 = 10;
              this.s9_1 = 11;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 9:
            this.t9_1 = 10;
            var t = this.v9_1;
            this.npb_1.remove();
            this.opb_1.remove();
            throw t;
          case 10:
            throw this.v9_1;
          case 11:
            var tmp_13 = this.ppb_1;
            this.t9_1 = 10;
            this.npb_1.remove();
            this.opb_1.remove();
            return tmp_13;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 10) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Network$loadVideoFrame$slambda).b20 = function ($this$withContext, completion) {
    var i = new Network$loadVideoFrame$slambda(this.kpb_1, this.lpb_1, completion);
    i.mpb_1 = $this$withContext;
    return i;
  };
  function Network$loadVideoFrame$slambda_0($url, this$0, resultContinuation) {
    var i = new Network$loadVideoFrame$slambda($url, this$0, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.np9($this$withContext, $completion);
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
      return Unit_instance;
    };
  }
  function $frameByteArrayCOROUTINE$0(_this__u8e3s4, uri, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wp9_1 = _this__u8e3s4;
    this.xp9_1 = uri;
  }
  protoOf($frameByteArrayCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.zp9_1 = substringAfter(this.xp9_1, 'base64,', '');
            if (isBlank(this.zp9_1))
              throw Exception_init_$Create$('Invalid Base64 data');
            this.s9_1 = 1;
            suspendResult = await_0(decodeBase64_0(this.wp9_1, this.zp9_1), this);
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

            tmp_0.yp9_1 = tmp_3;
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_5 = this.v9_1;
            if (tmp_5 instanceof Error) {
              var e = this.v9_1;
              var tmp_6 = this;
              throw Exception_init_$Create$_0('Failed to decode Base64 data: ' + e.message, e);
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return this.yp9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function Network() {
    this.fp8_1 = 5000.0;
  }
  protoOf(Network).gp8 = function (url, $completion) {
    var tmp = Dispatchers_getInstance().a1h_1;
    return withContext(tmp, Network$contentType$slambda_0(url, null), $completion);
  };
  protoOf(Network).ip8 = function (url, $completion) {
    var tmp = Dispatchers_getInstance().a1h_1;
    return withContext(tmp, Network$loadImage$slambda_0(this, url, null), $completion);
  };
  protoOf(Network).hp8 = function (url, $completion) {
    var tmp = Dispatchers_getInstance().a1h_1;
    return withContext(tmp, Network$loadVideoFrame$slambda_0(url, this, null), $completion);
  };
  function toImageBitmap(_this__u8e3s4) {
    return toComposeImageBitmap(Companion_getInstance_3().w5r(_this__u8e3s4));
  }
  var team_platforma_multiimage_utils_FrameExtractor$stable;
  function FrameExtractor$extractFrame$2$videoBlob$1($ext) {
    this.zpb_1 = 'video/' + $ext;
  }
  protoOf(FrameExtractor$extractFrame$2$videoBlob$1).apc = function (_set____db54di) {
    this.zpb_1 = _set____db54di;
  };
  protoOf(FrameExtractor$extractFrame$2$videoBlob$1).ff8 = function () {
    return this.zpb_1;
  };
  function FrameExtractor$extractFrame$slambda$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function FrameExtractor$extractFrame$slambda$lambda_0($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function FrameExtractor$extractFrame$slambda$lambda_1($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function FrameExtractor$extractFrame$slambda$lambda_2($cont) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1, _unused_var__etf5q3_2, _unused_var__etf5q3_3) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function frameByteArray_0($this, uri, $completion) {
    var tmp = new $frameByteArrayCOROUTINE$1($this, uri, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function decodeBase64_1($this, base64) {
    return new Promise(FrameExtractor$decodeBase64$lambda(base64));
  }
  function FrameExtractor$extractFrame$slambda($byteArray, $ext, resultContinuation) {
    this.vpc_1 = $byteArray;
    this.wpc_1 = $ext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FrameExtractor$extractFrame$slambda).np9 = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FrameExtractor$extractFrame$slambda).ma = function (p1, $completion) {
    return this.np9((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FrameExtractor$extractFrame$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 9;
            var tmp_0 = this;
            var tmp_1 = document.createElement('video');
            tmp_0.ypc_1 = tmp_1 instanceof HTMLVideoElement ? tmp_1 : THROW_CCE();
            var tmp_2 = this;
            var tmp_3 = document.createElement('canvas');
            tmp_2.zpc_1 = tmp_3 instanceof HTMLCanvasElement ? tmp_3 : THROW_CCE();
            this.apd_1 = null;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.t9_1 = 8;
            this.t9_1 = 7;
            var tmp_4 = this;
            var this_0 = [this.vpc_1];
            tmp_4.dpd_1 = new Blob(this_0, new FrameExtractor$extractFrame$2$videoBlob$1(this.wpc_1));
            this.apd_1 = URL.createObjectURL(this.dpd_1);
            this.ypc_1.src = this.apd_1;
            this.ypc_1.crossOrigin = 'Anonymous';
            var tmp_5 = this;
            var tmp_6 = this.zpc_1.getContext('2d');
            tmp_5.epd_1 = tmp_6 instanceof CanvasRenderingContext2D ? tmp_6 : THROW_CCE();
            this.s9_1 = 3;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            this.ypc_1.onloadedmetadata = FrameExtractor$extractFrame$slambda$lambda(safe);
            this.ypc_1.onerror = FrameExtractor$extractFrame$slambda$lambda_0(safe);
            suspendResult = returnIfSuspended(safe.ka(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.zpc_1.width = this.ypc_1.videoWidth;
            this.zpc_1.height = this.ypc_1.videoHeight;
            this.fpd_1 = this.ypc_1.duration;
            this.gpd_1 = 600.0;
            this.hpd_1 = this.fpd_1 / 2.0;
            var tmp_7 = this;
            var x = this.hpd_1 * this.gpd_1;
            tmp_7.ipd_1 = Math.floor(x) / this.gpd_1;
            this.ypc_1.currentTime = this.ipd_1;
            this.s9_1 = 4;
            var safe_0 = SafeContinuation_init_$Create$(intercepted(this));
            this.ypc_1.onseeked = FrameExtractor$extractFrame$slambda$lambda_1(safe_0);
            this.ypc_1.onerror = FrameExtractor$extractFrame$slambda$lambda_2(safe_0);
            suspendResult = returnIfSuspended(safe_0.ka(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.epd_1.drawImage(this.ypc_1, 0.0, 0.0, this.zpc_1.width, this.zpc_1.height);
            this.jpd_1 = this.zpc_1.toDataURL('image/jpeg', 0.85);
            this.s9_1 = 5;
            suspendResult = frameByteArray_0(FrameExtractor_instance, this.jpd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.cpd_1 = suspendResult;
            this.t9_1 = 9;
            this.s9_1 = 6;
            var tmp_8 = this;
            continue $sm;
          case 6:
            var tmp_9 = this.cpd_1;
            this.t9_1 = 9;
            var tmp0_safe_receiver = this.apd_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              URL.revokeObjectURL(tmp0_safe_receiver);
            }

            this.ypc_1.remove();
            this.zpc_1.remove();
            var tmp_10 = this;
            return tmp_9;
          case 7:
            this.t9_1 = 8;
            var tmp_11 = this.v9_1;
            if (tmp_11 instanceof Exception) {
              var e = this.v9_1;
              var tmp_12 = this;
              tmp_12.bpd_1 = null;
              this.t9_1 = 9;
              this.s9_1 = 10;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 8:
            this.t9_1 = 9;
            var t = this.v9_1;
            var tmp0_safe_receiver_0 = this.apd_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              URL.revokeObjectURL(tmp0_safe_receiver_0);
            }

            this.ypc_1.remove();
            this.zpc_1.remove();
            throw t;
          case 9:
            throw this.v9_1;
          case 10:
            var tmp_13 = this.bpd_1;
            this.t9_1 = 9;
            var tmp0_safe_receiver_1 = this.apd_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              URL.revokeObjectURL(tmp0_safe_receiver_1);
            }

            this.ypc_1.remove();
            this.zpc_1.remove();
            return tmp_13;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 9) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(FrameExtractor$extractFrame$slambda).b20 = function ($this$withContext, completion) {
    var i = new FrameExtractor$extractFrame$slambda(this.vpc_1, this.wpc_1, completion);
    i.xpc_1 = $this$withContext;
    return i;
  };
  function FrameExtractor$extractFrame$slambda_0($byteArray, $ext, resultContinuation) {
    var i = new FrameExtractor$extractFrame$slambda($byteArray, $ext, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.np9($this$withContext, $completion);
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
      return Unit_instance;
    };
  }
  function $frameByteArrayCOROUTINE$1(_this__u8e3s4, uri, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jpc_1 = _this__u8e3s4;
    this.kpc_1 = uri;
  }
  protoOf($frameByteArrayCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.mpc_1 = substringAfter(this.kpc_1, 'base64,', '');
            if (isBlank(this.mpc_1))
              throw Exception_init_$Create$('Invalid Base64 data');
            this.s9_1 = 1;
            suspendResult = await_0(decodeBase64_1(this.jpc_1, this.mpc_1), this);
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

            tmp_0.lpc_1 = tmp_3;
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_5 = this.v9_1;
            if (tmp_5 instanceof Error) {
              var e = this.v9_1;
              var tmp_6 = this;
              throw Exception_init_$Create$_0('Failed to decode Base64 data: ' + e.message, e);
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return this.lpc_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function FrameExtractor() {
  }
  protoOf(FrameExtractor).sp2 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(66051603);
    if (isTraceInProgress()) {
      traceEventStart(66051603, $changed, -1, 'team.platforma.multiimage.utils.FrameExtractor.initialize (FrameExtractor.kt:23)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return this;
  };
  protoOf(FrameExtractor).ep8 = function (byteArray, ext, $completion) {
    var tmp = Dispatchers_getInstance().a1h_1;
    return withContext(tmp, FrameExtractor$extractFrame$slambda_0(byteArray, ext, null), $completion);
  };
  var FrameExtractor_instance;
  function FrameExtractor_getInstance() {
    return FrameExtractor_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(FrameExtractor$extractFrame$2$videoBlob$1), 'type', function () {
    return this.ff8();
  }, function (value) {
    this.apc(value);
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
  Companion_instance_1 = new Companion();
  team_platforma_multiimage_cache_ImageCache$stable = 8;
  ImageCache_instance = new ImageCache();
  team_platforma_multiimage_cache_IDBDatabase$stable = 8;
  team_platforma_multiimage_cache_IDBTransaction$stable = 8;
  team_platforma_multiimage_cache_IDBObjectStore$stable = 0;
  team_platforma_multiimage_cache_IDBRequest$stable = 8;
  team_platforma_multiimage_cache_IDBOpenDBRequest$stable = 8;
  team_platforma_multiimage_network_Network$stable = 0;
  team_platforma_multiimage_utils_FrameExtractor$stable = 0;
  FrameExtractor_instance = new FrameExtractor();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AsyncMultiImage;
  _.$_$.b = generateAvatar;
  //endregion
  return _;
}));

//# sourceMappingURL=MultyImageSample-multiimage.js.map
