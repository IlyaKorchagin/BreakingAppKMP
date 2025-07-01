(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './coil-root-coil-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./coil-root-coil-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    if (typeof globalThis['coil-root-coil-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'coil-root-coil-core' was not found. Please, check whether 'coil-root-coil-core' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'coil-root-coil-compose-core'.");
    }
    globalThis['coil-root-coil-compose-core'] = factory(typeof globalThis['coil-root-coil-compose-core'] === 'undefined' ? {} : globalThis['coil-root-coil-compose-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['coil-root-coil-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_coil_kt_coil3_coil_core, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.tb;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.sb;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.mb;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var _FilterQuality___get_value__impl__vmx58a = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.aa;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.nb;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.sh;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var equals = kotlin_kotlin.$_$.sg;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ki;
  var FunctionAdapter = kotlin_kotlin.$_$.eg;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var hashCode = kotlin_kotlin.$_$.bh;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.r3;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var VOID = kotlin_kotlin.$_$.j;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var toString = kotlin_kotlin.$_$.eq;
  var toString_0 = kotlin_kotlin.$_$.oi;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.fh;
  var Companion_getInstance_5 = kotlin_io_coil_kt_coil3_coil_core.$_$.g1;
  var Precision_INEXACT_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.a1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.w5;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sp;
  var ErrorResult = kotlin_io_coil_kt_coil3_coil_core.$_$.f;
  var SuccessResult = kotlin_io_coil_kt_coil3_coil_core.$_$.j;
  var initMetadataForInterface = kotlin_kotlin.$_$.gh;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dh;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var transformLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var mapLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var Target = kotlin_io_coil_kt_coil3_coil_core.$_$.p;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.aq;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l3;
  var ImageVector = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var Builder = kotlin_io_coil_kt_coil3_coil_core.$_$.g;
  var get_LocalInspectionMode = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var KMutableProperty1 = kotlin_kotlin.$_$.sj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zg;
  var SuspendFunction2 = kotlin_kotlin.$_$.xf;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  var _Constraints___get_isZero__impl__fm0efw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.t9;
  var foldOut = kotlin_org_jetbrains_compose_ui_ui.$_$.u9;
  var any = kotlin_org_jetbrains_compose_ui_ui.$_$.s9;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.r9;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.w9;
  var SizeResolver = kotlin_io_coil_kt_coil3_coil_core.$_$.n;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w1;
  var ImageRequest = kotlin_io_coil_kt_coil3_coil_core.$_$.h;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var ImageLoader = kotlin_io_coil_kt_coil3_coil_core.$_$.t;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.d6;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.b6;
  var getNumberHashCode = kotlin_kotlin.$_$.yg;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var Long = kotlin_kotlin.$_$.fo;
  var isFinite = kotlin_kotlin.$_$.lp;
  var _ScaleFactor___get_scaleX__impl__u0r14l = kotlin_org_jetbrains_compose_ui_ui.$_$.xa;
  var _ScaleFactor___get_scaleY__impl__174k2e = kotlin_org_jetbrains_compose_ui_ui.$_$.ya;
  var times = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e4;
  var roundToInt = kotlin_kotlin.$_$.ui;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.v9;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.b5;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c5;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var times_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var Monotonic_getInstance = kotlin_kotlin.$_$.k6;
  var ValueTimeMark = kotlin_kotlin.$_$.mn;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.z3;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.p3;
  var coerceIn = kotlin_kotlin.$_$.jj;
  var Scale_FILL_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.b1;
  var Scale_FIT_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.c1;
  var Builder_init_$Create$ = kotlin_io_coil_kt_coil3_coil_core.$_$.d1;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s2;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ap;
  var MainCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var Size_1 = kotlin_io_coil_kt_coil3_coil_core.$_$.o;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var Undefined_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.f1;
  var Dimension = kotlin_io_coil_kt_coil3_coil_core.$_$.m;
  var Pixels = kotlin_io_coil_kt_coil3_coil_core.$_$.l;
  var NullRequestDataException = kotlin_io_coil_kt_coil3_coil_core.$_$.i;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.q7;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.rb;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.u8;
  var DataSource_MEMORY_CACHE_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.y;
  var get_crossfadeMillis = kotlin_io_coil_kt_coil3_coil_core.$_$.k;
  var toBitmap = kotlin_io_coil_kt_coil3_coil_core.$_$.w;
  var asComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var BitmapImage = kotlin_io_coil_kt_coil3_coil_core.$_$.r;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var Companion_getInstance_9 = kotlin_io_coil_kt_coil3_coil_core.$_$.j1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  initMetadataForInterface(State, 'State');
  initMetadataForObject(Empty, 'Empty', VOID, VOID, [State]);
  initMetadataForClass(Loading, 'Loading', VOID, VOID, [State]);
  initMetadataForClass(Success, 'Success', VOID, VOID, [State]);
  initMetadataForClass(Error_0, 'Error', VOID, VOID, [State]);
  initMetadataForLambda(AsyncImagePainter$onRemembered$slambda$slambda, CoroutineImpl, [CoroutineImpl], [2]);
  initMetadataForLambda(AsyncImagePainter$onRemembered$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForFunctionReference(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k, VOID, VOID, [1]);
  initMetadataForClass(Input, 'Input');
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AsyncImagePainter$onRemembered$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Target]);
  initMetadataForClass(AsyncImagePainter, 'AsyncImagePainter', VOID, Painter, [Painter, RememberObserver], [1]);
  initMetadataForLambda(ConstraintsSizeResolver$size$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($sizeCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(ConstraintsSizeResolver, 'ConstraintsSizeResolver', ConstraintsSizeResolver, VOID, [SizeResolver, LayoutModifier], [0]);
  initMetadataForInterface(DrawScopeSizeResolver, 'DrawScopeSizeResolver', VOID, VOID, [SizeResolver], [0]);
  initMetadataForClass(ImagePainter, 'ImagePainter', VOID, Painter);
  initMetadataForInterface(AsyncImageModelEqualityDelegate, 'AsyncImageModelEqualityDelegate');
  initMetadataForClass(AsyncImageModelEqualityDelegate$Companion$Default$1, VOID, VOID, VOID, [AsyncImageModelEqualityDelegate]);
  initMetadataForClass(AsyncImageModelEqualityDelegate$Companion$AllProperties$1, VOID, VOID, VOID, [AsyncImageModelEqualityDelegate]);
  initMetadataForCompanion(Companion_0);
  initMetadataForInterface(AsyncImagePreviewHandler, 'AsyncImagePreviewHandler', VOID, VOID, VOID, [2]);
  initMetadataForClass(sam$coil3_compose_AsyncImagePreviewHandler$0, 'sam$coil3_compose_AsyncImagePreviewHandler$0', VOID, VOID, [AsyncImagePreviewHandler, FunctionAdapter], [2]);
  initMetadataForLambda(AsyncImagePreviewHandler$Companion$Default$slambda, CoroutineImpl, [CoroutineImpl], [2]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ContentPainterElement, 'ContentPainterElement', VOID, ModifierNodeElement);
  initMetadataForClass(ContentPainterNode, 'ContentPainterNode', VOID, Node, [Node, DrawModifierNode, LayoutModifierNode]);
  initMetadataForClass(CrossfadePainter, 'CrossfadePainter', VOID, Painter);
  initMetadataForClass(AsyncImageState, 'AsyncImageState');
  //endregion
  function AsyncImage(model, contentDescription, imageLoader, modifier, placeholder, error, fallback, onLoading, onSuccess, onError, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $composer, $changed, $changed1, $default) {
    var modifier_0 = modifier;
    var placeholder_0 = placeholder;
    var error_0 = error;
    var fallback_0 = fallback;
    var onLoading_0 = onLoading;
    var onSuccess_0 = onSuccess;
    var onError_0 = onError;
    var alignment_0 = alignment;
    var contentScale_0 = contentScale;
    var alpha_0 = alpha;
    var colorFilter_0 = colorFilter;
    var filterQuality_0 = filterQuality;
    var clipToBounds_0 = clipToBounds;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1128374444);
    if (!(($default & 8) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 16) === 0))
      placeholder_0 = null;
    if (!(($default & 32) === 0))
      error_0 = null;
    if (!(($default & 64) === 0))
      fallback_0 = error_0;
    if (!(($default & 128) === 0))
      onLoading_0 = null;
    if (!(($default & 256) === 0))
      onSuccess_0 = null;
    if (!(($default & 512) === 0))
      onError_0 = null;
    if (!(($default & 1024) === 0))
      alignment_0 = Companion_getInstance_0().get_Center_3arb0i_k$();
    if (!(($default & 2048) === 0))
      contentScale_0 = Companion_getInstance_1().get_Fit_18jtko_k$();
    if (!(($default & 4096) === 0))
      alpha_0 = 1.0;
    if (!(($default & 8192) === 0))
      colorFilter_0 = null;
    if (!(($default & 16384) === 0))
      filterQuality_0 = Companion_getInstance_2().get_DefaultFilterQuality_7zsczy_k$();
    if (!(($default & 32768) === 0))
      clipToBounds_0 = true;
    if (isTraceInProgress()) {
      traceEventStart(-1128374444, $changed, $changed1, 'coil3.compose.AsyncImage (AsyncImage.kt:71)');
    }
    AsyncImage_0(AsyncImageState_0(model, imageLoader, $composer_0, 14 & $changed | 112 & $changed >> 3), contentDescription, modifier_0, transformOf(placeholder_0, error_0, fallback_0), onStateOf(onLoading_0, onSuccess_0, onError_0), alignment_0, contentScale_0, alpha_0, colorFilter_0, filterQuality_0, clipToBounds_0, $composer_0, 112 & $changed | 896 & $changed >> 3 | 458752 & $changed1 << 15 | 3670016 & $changed1 << 15 | 29360128 & $changed1 << 15 | 234881024 & $changed1 << 15 | 1879048192 & $changed1 << 15, 14 & $changed1 >> 15);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function AsyncImage_0(state, contentDescription, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $composer, $changed, $changed1) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1236588022);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentDescription) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(transform) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onState) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alignment) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentScale) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(alpha) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorFilter) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(_FilterQuality___get_value__impl__vmx58a(filterQuality)) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_jpyyrz_k$(clipToBounds) ? 4 : 2);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1236588022, $dirty, $dirty1, 'coil3.compose.AsyncImage (AsyncImage.kt:151)');
      }
      var request = requestOfWithSizeResolver(state.get_model_ivc0lc_k$(), contentScale, $composer_0, 112 & $dirty >> 15);
      var painter = rememberAsyncImagePainter(request, state.get_imageLoader_ok4pi3_k$(), transform, onState, contentScale, filterQuality, $composer_0, 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 6 | 458752 & $dirty >> 12, 0);
      var sizeResolver = request.get_sizeResolver_v7l9bk_k$();
      var tmp;
      if (sizeResolver instanceof ConstraintsSizeResolver) {
        tmp = modifier.then_g5qrxq_k$(sizeResolver);
      } else {
        tmp = modifier;
      }
      Content(tmp, painter, contentDescription, alignment, contentScale, alpha, colorFilter, clipToBounds, $composer_0, 896 & $dirty << 3 | 7168 & $dirty >> 6 | 57344 & $dirty >> 6 | 458752 & $dirty >> 6 | 3670016 & $dirty >> 6 | 29360128 & $dirty1 << 21);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AsyncImage$lambda(state, contentDescription, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $changed, $changed1));
    }
  }
  function Content(modifier, painter, contentDescription_0, alignment, contentScale, alpha, colorFilter, clipToBounds_0, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-237738007);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(painter) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentDescription_0) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alignment) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentScale) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(alpha) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorFilter) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(clipToBounds_0) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-237738007, $dirty, -1, 'coil3.compose.Content (AsyncImage.kt:196)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout' call
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.Content.<anonymous>' call
      var $this$run = contentDescription(modifier, contentDescription_0);
      var modifier_0 = (clipToBounds_0 ? clipToBounds($this$run) : $this$run).then_g5qrxq_k$(new ContentPainterElement(painter, alignment, contentScale, alpha, colorFilter));
      $composer_0.startReplaceableGroup_ip860b_k$(687221771);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        // Inline function 'coil3.compose.Content.<anonymous>' call
        var tmp_0 = Content$lambda;
        var value = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_1 = tmp;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var modifier_1 = modifier_0;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_1);
      var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp_2 = $composer_2.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_2.startReusableNode_jjgeyp_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        $composer_2.createNode_ahrd54_k$(factory);
      } else {
        $composer_2.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp0_group, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      $composer_2.endNode_3m0yfn_k$();
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(Content$lambda_0(modifier, painter, contentDescription_0, alignment, contentScale, alpha, colorFilter, clipToBounds_0, $changed));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function AsyncImage$lambda($state, $contentDescription, $modifier, $transform, $onState, $alignment, $contentScale, $alpha, $colorFilter, $filterQuality, $clipToBounds, $$changed, $$changed1) {
    return function ($composer, $force) {
      AsyncImage_0($state, $contentDescription, $modifier, $transform, $onState, $alignment, $contentScale, $alpha, $colorFilter, $filterQuality, $clipToBounds, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_getInstance();
    };
  }
  function Content$lambda($this$Layout, _unused_var__etf5q3, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
    return $this$Layout.layout$default_n19e5l_k$(tmp, tmp_0, VOID, Content$lambda$lambda);
  }
  function Content$lambda$lambda($this$layout) {
    return Unit_getInstance();
  }
  function Content$lambda_0($modifier, $painter, $contentDescription, $alignment, $contentScale, $alpha, $colorFilter, $clipToBounds, $$changed) {
    return function ($composer, $force) {
      Content($modifier, $painter, $contentDescription, $alignment, $contentScale, $alpha, $colorFilter, $clipToBounds, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var coil3_compose_AsyncImagePainter_Input$stable;
  var coil3_compose_AsyncImagePainter_State_Empty$stable;
  var coil3_compose_AsyncImagePainter_State_Loading$stable;
  var coil3_compose_AsyncImagePainter_State_Success$stable;
  var coil3_compose_AsyncImagePainter_State_Error$stable;
  var coil3_compose_AsyncImagePainter$stable;
  function Empty() {
    Empty_instance = this;
  }
  protoOf(Empty).get_painter_bzl4ri_k$ = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -1625786264;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    other instanceof Empty || THROW_CCE();
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function Loading(painter) {
    this.painter_1 = painter;
  }
  protoOf(Loading).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(Loading).component1_7eebsc_k$ = function () {
    return this.painter_1;
  };
  protoOf(Loading).copy_fcxbcn_k$ = function (painter) {
    return new Loading(painter);
  };
  protoOf(Loading).copy$default_iiurzb_k$ = function (painter, $super) {
    painter = painter === VOID ? this.painter_1 : painter;
    return $super === VOID ? this.copy_fcxbcn_k$(painter) : $super.copy_fcxbcn_k$.call(this, painter);
  };
  protoOf(Loading).toString = function () {
    return 'Loading(painter=' + toString(this.painter_1) + ')';
  };
  protoOf(Loading).hashCode = function () {
    return this.painter_1 == null ? 0 : hashCode(this.painter_1);
  };
  protoOf(Loading).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Loading))
      return false;
    var tmp0_other_with_cast = other instanceof Loading ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    return true;
  };
  function Success(painter, result) {
    this.painter_1 = painter;
    this.result_1 = result;
  }
  protoOf(Success).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(Success).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(Success).component1_7eebsc_k$ = function () {
    return this.painter_1;
  };
  protoOf(Success).component2_7eebsb_k$ = function () {
    return this.result_1;
  };
  protoOf(Success).copy_3kuk9v_k$ = function (painter, result) {
    return new Success(painter, result);
  };
  protoOf(Success).copy$default_os7saf_k$ = function (painter, result, $super) {
    painter = painter === VOID ? this.painter_1 : painter;
    result = result === VOID ? this.result_1 : result;
    return $super === VOID ? this.copy_3kuk9v_k$(painter, result) : $super.copy_3kuk9v_k$.call(this, painter, result);
  };
  protoOf(Success).toString = function () {
    return 'Success(painter=' + toString_0(this.painter_1) + ', result=' + this.result_1.toString() + ')';
  };
  protoOf(Success).hashCode = function () {
    var result = hashCode(this.painter_1);
    result = imul(result, 31) + this.result_1.hashCode() | 0;
    return result;
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    if (!this.result_1.equals(tmp0_other_with_cast.result_1))
      return false;
    return true;
  };
  function Error_0(painter, result) {
    this.painter_1 = painter;
    this.result_1 = result;
  }
  protoOf(Error_0).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(Error_0).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(Error_0).component1_7eebsc_k$ = function () {
    return this.painter_1;
  };
  protoOf(Error_0).component2_7eebsb_k$ = function () {
    return this.result_1;
  };
  protoOf(Error_0).copy_jotr8t_k$ = function (painter, result) {
    return new Error_0(painter, result);
  };
  protoOf(Error_0).copy$default_ey7jyw_k$ = function (painter, result, $super) {
    painter = painter === VOID ? this.painter_1 : painter;
    result = result === VOID ? this.result_1 : result;
    return $super === VOID ? this.copy_jotr8t_k$(painter, result) : $super.copy_jotr8t_k$.call(this, painter, result);
  };
  protoOf(Error_0).toString = function () {
    return 'Error(painter=' + toString(this.painter_1) + ', result=' + this.result_1.toString() + ')';
  };
  protoOf(Error_0).hashCode = function () {
    var result = this.painter_1 == null ? 0 : hashCode(this.painter_1);
    result = imul(result, 31) + this.result_1.hashCode() | 0;
    return result;
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    if (!this.result_1.equals(tmp0_other_with_cast.result_1))
      return false;
    return true;
  };
  function AsyncImagePainter$Companion$DefaultTransform$lambda(it) {
    return it;
  }
  function AsyncImagePainter$onRemembered$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).invoke_oxiwqi_k$ = function ($this$transformLatest, it, $completion) {
    var tmp = this.create_tlgdzm_k$($this$transformLatest, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_oxiwqi_k$(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            this.it_1;
            suspendResult = emitAll(this.$this$transformLatest_1, this.this$0__1._input_1, this);
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
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).create_tlgdzm_k$ = function ($this$transformLatest, it, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda(this.this$0__1, completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.it_1 = it;
    return i;
  };
  function AsyncImagePainter$onRemembered$slambda$slambda_0(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.invoke_oxiwqi_k$($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AsyncImagePainter$onRemembered$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).invoke_mjdreq_k$ = function (input, $completion) {
    var tmp = this.create_30sqvd_k$(input, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_mjdreq_k$(p1 instanceof Input ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.previewHandler0__1 = this.this$0__1.previewHandler_1;
            if (!(this.previewHandler0__1 == null)) {
              this.request2__1 = updateRequest(this.this$0__1, this.input_1.request_1, true);
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.previewHandler0__1.handle_x2pp74_k$(this.input_1.imageLoader_1, this.request2__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.request3__1 = updateRequest(this.this$0__1, this.input_1.request_1, false);
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.input_1.imageLoader_1.execute_ncrliw_k$(this.request3__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.WHEN_RESULT1__1 = toState(ARGUMENT, this.this$0__1);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
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
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).create_30sqvd_k$ = function (input, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda_1(this.this$0__1, completion);
    i.input_1 = input;
    return i;
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_30sqvd_k$(value instanceof Input ? value : THROW_CCE(), completion);
  };
  function AsyncImagePainter$onRemembered$slambda$slambda_2(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda_1(this$0, resultContinuation);
    var l = function (input, $completion) {
      return i.invoke_mjdreq_k$(input, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k($boundThis) {
    this.$boundThis_1 = $boundThis;
  }
  protoOf(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k).invoke_79ek7o_k$ = function (p0, $completion) {
    return onRemembered$_anonymous_$_anonymous_$updateState_isg8pr(this.$boundThis_1, p0, $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_79ek7o_k$((!(p1 == null) ? isInterface(p1, State) : false) ? p1 : THROW_CCE(), $completion);
  };
  function AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k_0($boundThis) {
    var i = new AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k($boundThis);
    var l = function (p0, $completion) {
      return i.invoke_79ek7o_k$(p0, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_drawSize__qqufpi($this) {
    return $this.drawSize_1;
  }
  function _get_restartSignal__idilga($this) {
    return $this.restartSignal_1;
  }
  function _set_painter__526xy2($this, _set____db54di) {
    var this_0 = $this.painter$delegate_1;
    painter$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_painter__kk1cey($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.painter$delegate_1;
    painter$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _set_alpha__c56vtz($this, _set____db54di) {
    var this_0 = $this.alpha$delegate_1;
    alpha$factory();
    this_0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_alpha__jvxknh($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.alpha$delegate_1;
    alpha$factory_0();
    return this_0.get_floatValue_xw60ou_k$();
  }
  function _set_colorFilter__ke9voq($this, _set____db54di) {
    var this_0 = $this.colorFilter$delegate_1;
    colorFilter$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_colorFilter__kcfzyi($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.colorFilter$delegate_1;
    colorFilter$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _set_rememberJob__d3by0b($this, value) {
    var tmp0_safe_receiver = $this.rememberJob_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_8haxne_k$();
    }
    $this.rememberJob_1 = value;
  }
  function _get_rememberJob__h728bl($this) {
    return $this.rememberJob_1;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function updateRequest($this, request, isPreview) {
    var sizeResolver = request.get_sizeResolver_v7l9bk_k$();
    if (isInterface(sizeResolver, DrawScopeSizeResolver)) {
      sizeResolver.connect_1kacfb_k$($this.drawSize_1);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'coil3.request.Builder.target' call
    var this_0 = request.newBuilder$default_dz3r4s_k$().target_x9a50a_k$(new _no_name_provided__qut3iv(request, $this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.AsyncImagePainter.updateRequest.<anonymous>' call
    if (request.get_defined_qtfew0_k$().get_sizeResolver_v7l9bk_k$() == null) {
      this_0.size_jl2d87_k$(Companion_getInstance_5().get_ORIGINAL_3y2d22_k$());
    }
    if (request.get_defined_qtfew0_k$().get_scale_iyf28x_k$() == null) {
      this_0.scale_wf5gzi_k$(toScale($this.contentScale_1));
    }
    if (request.get_defined_qtfew0_k$().get_precision_e8tfsb_k$() == null) {
      this_0.precision_s919ji_k$(Precision_INEXACT_getInstance());
    }
    if (isPreview) {
      this_0.coroutineContext_ygypem_k$(EmptyCoroutineContext_getInstance());
    }
    return this_0.build_1k0s4u_k$();
  }
  function updateState($this, state) {
    var previous = $this._state_1.get_value_j01efc_k$();
    var current = $this.transform_1(state);
    $this._state_1.set_value_v1vabv_k$(current);
    var tmp0_elvis_lhs = maybeNewCrossfadePainter(previous, current, $this.contentScale_1);
    _set_painter__526xy2($this, tmp0_elvis_lhs == null ? current.get_painter_bzl4ri_k$() : tmp0_elvis_lhs);
    if (!(previous.get_painter_bzl4ri_k$() === current.get_painter_bzl4ri_k$())) {
      var tmp = previous.get_painter_bzl4ri_k$();
      var tmp1_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.onForgotten_pbqifp_k$();
      }
      var tmp_0 = current.get_painter_bzl4ri_k$();
      var tmp2_safe_receiver = (!(tmp_0 == null) ? isInterface(tmp_0, RememberObserver) : false) ? tmp_0 : null;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.onRemembered_68t2e3_k$();
      }
    }
    var tmp3_safe_receiver = $this.onState_1;
    if (tmp3_safe_receiver == null)
      null;
    else
      tmp3_safe_receiver(current);
  }
  function toState(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof SuccessResult) {
      tmp = new Success(asPainter(_this__u8e3s4.get_image_it3i2a_k$(), _this__u8e3s4.get_request_jdwg4m_k$().get_context_h02k06_k$(), $this.filterQuality_1), _this__u8e3s4);
    } else {
      if (_this__u8e3s4 instanceof ErrorResult) {
        var tmp1_safe_receiver = _this__u8e3s4.get_image_it3i2a_k$();
        tmp = new Error_0(tmp1_safe_receiver == null ? null : asPainter(tmp1_safe_receiver, _this__u8e3s4.get_request_jdwg4m_k$().get_context_h02k06_k$(), $this.filterQuality_1), _this__u8e3s4);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function Input(imageLoader, request, modelEqualityDelegate) {
    this.imageLoader_1 = imageLoader;
    this.request_1 = request;
    this.modelEqualityDelegate_1 = modelEqualityDelegate;
  }
  protoOf(Input).get_imageLoader_ok4pi3_k$ = function () {
    return this.imageLoader_1;
  };
  protoOf(Input).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(Input).get_modelEqualityDelegate_fxx58f_k$ = function () {
    return this.modelEqualityDelegate_1;
  };
  protoOf(Input).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof Input) {
      tmp_1 = equals(this.imageLoader_1, other.imageLoader_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.modelEqualityDelegate_1, other.modelEqualityDelegate_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.modelEqualityDelegate_1.equals_bs7q9r_k$(this.request_1, other.request_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Input).hashCode = function () {
    var result = hashCode(this.imageLoader_1);
    result = imul(31, result) + hashCode(this.modelEqualityDelegate_1) | 0;
    result = imul(31, result) + this.modelEqualityDelegate_1.hashCode_858oys_k$(this.request_1) | 0;
    return result;
  };
  protoOf(Input).toString = function () {
    return 'Input(imageLoader=' + toString_0(this.imageLoader_1) + ', request=' + this.request_1.toString() + ', modelEqualityDelegate=' + toString_0(this.modelEqualityDelegate_1) + ')';
  };
  function State() {
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.DefaultTransform_1 = AsyncImagePainter$Companion$DefaultTransform$lambda;
  }
  protoOf(Companion).get_DefaultTransform_dc1fcc_k$ = function () {
    return this.DefaultTransform_1;
  };
  var Companion_instance;
  function Companion_getInstance_10() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
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
  function onRemembered$_anonymous_$_anonymous_$updateState_isg8pr(receiver, p0, $completion) {
    updateState(receiver, p0);
    return Unit_getInstance();
  }
  function AsyncImagePainter$onRemembered$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = this.this$0__1.restartSignal_1;
            var tmp_0 = transformLatest(this_0, AsyncImagePainter$onRemembered$slambda$slambda_0(this.this$0__1, null));
            var tmp_1 = mapLatest(tmp_0, AsyncImagePainter$onRemembered$slambda$slambda_2(this.this$0__1, null));
            var tmp_2 = AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k_0(this.this$0__1);
            suspendResult = tmp_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
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
  protoOf(AsyncImagePainter$onRemembered$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AsyncImagePainter$onRemembered$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncImagePainter$onRemembered$slambda_0(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv($request, this$0) {
    this.$request_1 = $request;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv).onStart_5harg8_k$ = function (placeholder) {
    var painter = placeholder == null ? null : asPainter(placeholder, this.$request_1.get_context_h02k06_k$(), this.this$0__1.filterQuality_1);
    updateState(this.this$0__1, new Loading(painter));
    return Unit_getInstance();
  };
  protoOf(_no_name_provided__qut3iv).onError_18s0r6_k$ = function (error) {
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    return Unit_getInstance();
  };
  protoOf(_no_name_provided__qut3iv).onSuccess_u2d2o2_k$ = function (result) {
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    return Unit_getInstance();
  };
  function AsyncImagePainter(input) {
    Companion_getInstance_10();
    Painter.call(this);
    this.drawSize_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.AsyncImagePainter.restartSignal.<anonymous>' call
    this_0.tryEmit_ru0jrz_k$(Unit_getInstance());
    tmp.restartSignal_1 = this_0;
    this.painter$delegate_1 = mutableStateOf(null);
    this.alpha$delegate_1 = mutableFloatStateOf(1.0);
    this.colorFilter$delegate_1 = mutableStateOf(null);
    this.rememberJob_1 = null;
    this.transform_1 = Companion_getInstance_10().DefaultTransform_1;
    this.onState_1 = null;
    this.contentScale_1 = Companion_getInstance_1().get_Fit_18jtko_k$();
    this.filterQuality_1 = Companion_getInstance_2().get_DefaultFilterQuality_7zsczy_k$();
    this.previewHandler_1 = null;
    this._input_1 = MutableStateFlow(input);
    this.input_1 = asStateFlow(this._input_1);
    this._state_1 = MutableStateFlow(Empty_getInstance());
    this.state_1 = asStateFlow(this._state_1);
  }
  protoOf(AsyncImagePainter).set_scope_mhmyfx_k$ = function (_set____db54di) {
    this.scope_1 = _set____db54di;
  };
  protoOf(AsyncImagePainter).get_scope_euyejz_k$ = function () {
    var tmp = this.scope_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('scope');
    }
  };
  protoOf(AsyncImagePainter).set_transform_x59id0_k$ = function (_set____db54di) {
    this.transform_1 = _set____db54di;
  };
  protoOf(AsyncImagePainter).get_transform_fgggbb_k$ = function () {
    return this.transform_1;
  };
  protoOf(AsyncImagePainter).set_onState_lxa1dy_k$ = function (_set____db54di) {
    this.onState_1 = _set____db54di;
  };
  protoOf(AsyncImagePainter).get_onState_lezuq9_k$ = function () {
    return this.onState_1;
  };
  protoOf(AsyncImagePainter).set_contentScale_7va4o0_k$ = function (_set____db54di) {
    this.contentScale_1 = _set____db54di;
  };
  protoOf(AsyncImagePainter).get_contentScale_9kb22o_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(AsyncImagePainter).set_filterQuality_hgpt6f_k$ = function (_set____db54di) {
    this.filterQuality_1 = _set____db54di;
  };
  protoOf(AsyncImagePainter).get_filterQuality_8qqkih_k$ = function () {
    return this.filterQuality_1;
  };
  protoOf(AsyncImagePainter).set_previewHandler_d7txvt_k$ = function (_set____db54di) {
    this.previewHandler_1 = _set____db54di;
  };
  protoOf(AsyncImagePainter).get_previewHandler_49rjtd_k$ = function () {
    return this.previewHandler_1;
  };
  protoOf(AsyncImagePainter).get__input_rqmd8a_k$ = function () {
    return this._input_1;
  };
  protoOf(AsyncImagePainter).get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  protoOf(AsyncImagePainter).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(AsyncImagePainter).get_intrinsicSize_culx5t_k$ = function () {
    var tmp0_safe_receiver = _get_painter__kk1cey(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_intrinsicSize_culx5t_k$();
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new Size(tmp_0)) == null) {
      tmp = Companion_getInstance_6().get_Unspecified_3ttj0y_k$();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AsyncImagePainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    this.drawSize_1.tryEmit_ru0jrz_k$(new Size(_this__u8e3s4.get_size_cxx1ym_k$()));
    var tmp0_safe_receiver = _get_painter__kk1cey(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.AsyncImagePainter.onDraw.<anonymous>' call
      tmp0_safe_receiver.draw_zf0527_k$(_this__u8e3s4, _this__u8e3s4.get_size_cxx1ym_k$(), _get_alpha__jvxknh(this), _get_colorFilter__kcfzyi(this));
    }
  };
  protoOf(AsyncImagePainter).applyAlpha_eeyl20_k$ = function (alpha) {
    _set_alpha__c56vtz(this, alpha);
    return true;
  };
  protoOf(AsyncImagePainter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    _set_colorFilter__ke9voq(this, colorFilter);
    return true;
  };
  protoOf(AsyncImagePainter).onRemembered_68t2e3_k$ = function () {
    // Inline function 'androidx.compose.ui.util.trace' call
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.onRemembered_68t2e3_k$();
    }
    var tmp_0 = this.get_scope_euyejz_k$();
    _set_rememberJob__d3by0b(this, launch(tmp_0, VOID, VOID, AsyncImagePainter$onRemembered$slambda_0(this, null)));
    return Unit_getInstance();
  };
  protoOf(AsyncImagePainter).onForgotten_pbqifp_k$ = function () {
    _set_rememberJob__d3by0b(this, null);
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.onForgotten_pbqifp_k$();
    }
  };
  protoOf(AsyncImagePainter).onAbandoned_1gx7a3_k$ = function () {
    _set_rememberJob__d3by0b(this, null);
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.onAbandoned_1gx7a3_k$();
    }
  };
  protoOf(AsyncImagePainter).restart_nz0dof_k$ = function () {
    this.restartSignal_1.tryEmit_ru0jrz_k$(Unit_getInstance());
  };
  function rememberAsyncImagePainter(model, imageLoader, transform, onState, contentScale, filterQuality, $composer, $changed, $default) {
    var transform_0 = transform;
    var onState_0 = onState;
    var contentScale_0 = contentScale;
    var filterQuality_0 = filterQuality;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1066092719);
    if (!(($default & 4) === 0))
      transform_0 = Companion_getInstance_10().DefaultTransform_1;
    if (!(($default & 8) === 0))
      onState_0 = null;
    if (!(($default & 16) === 0))
      contentScale_0 = Companion_getInstance_1().get_Fit_18jtko_k$();
    if (!(($default & 32) === 0))
      filterQuality_0 = Companion_getInstance_2().get_DefaultFilterQuality_7zsczy_k$();
    if (isTraceInProgress()) {
      traceEventStart(1066092719, $changed, -1, 'coil3.compose.rememberAsyncImagePainter (AsyncImagePainter.kt:118)');
    }
    var tmp0 = rememberAsyncImagePainter_0(AsyncImageState_0(model, imageLoader, $composer_0, 14 & $changed | 112 & $changed), transform_0, onState_0, contentScale_0, filterQuality_0, $composer_0, 112 & $changed >> 3 | 896 & $changed >> 3 | 7168 & $changed >> 3 | 57344 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function rememberAsyncImagePainter_0(state, transform, onState, contentScale, filterQuality, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1242991349);
    if (isTraceInProgress()) {
      traceEventStart(-1242991349, $changed, -1, 'coil3.compose.rememberAsyncImagePainter (AsyncImagePainter.kt:133)');
    }
    // Inline function 'androidx.compose.ui.util.trace' call
    var request = requestOf(state.get_model_ivc0lc_k$(), $composer_0, 0);
    validateRequest(request);
    var input = new Input(state.get_imageLoader_ok4pi3_k$(), request, state.get_modelEqualityDelegate_fxx58f_k$());
    $composer_0.startReplaceableGroup_ip860b_k$(1596902301);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'coil3.compose.rememberAsyncImagePainter.<anonymous>.<anonymous>' call
      var value = new AsyncImagePainter(input);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var painter = tmp0_group;
    painter.scope_1 = rememberImmediateCoroutineScope($composer_0, 0);
    painter.transform_1 = transform;
    painter.onState_1 = onState;
    painter.contentScale_1 = contentScale;
    painter.filterQuality_1 = filterQuality;
    painter.previewHandler_1 = previewHandler($composer_0, 0);
    painter._input_1.set_value_v1vabv_k$(input);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return painter;
  }
  function validateRequest(request) {
    var tmp0_subject = request.get_data_wokkxf_k$();
    if (tmp0_subject instanceof Builder) {
      unsupportedData('ImageRequest.Builder', 'Did you forget to call ImageRequest.Builder.build()?');
    } else {
      if (isInterface(tmp0_subject, ImageBitmap)) {
        unsupportedData('ImageBitmap');
      } else {
        if (tmp0_subject instanceof ImageVector) {
          unsupportedData('ImageVector');
        } else {
          if (tmp0_subject instanceof Painter) {
            unsupportedData('Painter');
          }
        }
      }
    }
    validateRequestProperties(request);
  }
  function previewHandler($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-793376393, $changed, -1, 'coil3.compose.previewHandler (AsyncImagePainter.kt:384)');
    }
    var tmp;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalInspectionMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      $composer_0.startReplaceableGroup_ip860b_k$(-924922939);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalAsyncImagePreviewHandler();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_ebzcrh_k$(this_1);
      sourceInformationMarkerEnd($composer_2);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp0_0;
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(-924865434);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = null;
    }
    var tmp0_1 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_1;
  }
  function unsupportedData(name, description) {
    description = description === VOID ? 'If you wish to display this ' + name + ', use androidx.compose.foundation.Image.' : description;
    throw IllegalArgumentException_init_$Create$('Unsupported type: ' + name + '. ' + description);
  }
  function painter$factory() {
    return getPropertyCallableRef('painter', 1, KMutableProperty1, function (receiver) {
      return _get_painter__kk1cey(receiver);
    }, function (receiver, value) {
      return _set_painter__526xy2(receiver, value);
    });
  }
  function painter$factory_0() {
    return getPropertyCallableRef('painter', 1, KMutableProperty1, function (receiver) {
      return _get_painter__kk1cey(receiver);
    }, function (receiver, value) {
      return _set_painter__526xy2(receiver, value);
    });
  }
  function alpha$factory() {
    return getPropertyCallableRef('alpha', 1, KMutableProperty1, function (receiver) {
      return _get_alpha__jvxknh(receiver);
    }, function (receiver, value) {
      return _set_alpha__c56vtz(receiver, value);
    });
  }
  function alpha$factory_0() {
    return getPropertyCallableRef('alpha', 1, KMutableProperty1, function (receiver) {
      return _get_alpha__jvxknh(receiver);
    }, function (receiver, value) {
      return _set_alpha__c56vtz(receiver, value);
    });
  }
  function colorFilter$factory() {
    return getPropertyCallableRef('colorFilter', 1, KMutableProperty1, function (receiver) {
      return _get_colorFilter__kcfzyi(receiver);
    }, function (receiver, value) {
      return _set_colorFilter__ke9voq(receiver, value);
    });
  }
  function colorFilter$factory_0() {
    return getPropertyCallableRef('colorFilter', 1, KMutableProperty1, function (receiver) {
      return _get_colorFilter__kcfzyi(receiver);
    }, function (receiver, value) {
      return _set_colorFilter__ke9voq(receiver, value);
    });
  }
  var coil3_compose_ConstraintsSizeResolver$stable;
  function _get_latestConstraints__j8q7zy($this) {
    return $this.latestConstraints_1;
  }
  function ConstraintsSizeResolver$size$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ConstraintsSizeResolver$size$slambda).invoke_dlzlk7_k$ = function (it, $completion) {
    var tmp = this.create_8kik1a_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ConstraintsSizeResolver$size$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_dlzlk7_k$(p1 instanceof Constraints ? p1.value_1 : THROW_CCE(), $completion);
  };
  protoOf(ConstraintsSizeResolver$size$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return !_Constraints___get_isZero__impl__fm0efw(this.it_1);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ConstraintsSizeResolver$size$slambda).create_8kik1a_k$ = function (it, completion) {
    var i = new ConstraintsSizeResolver$size$slambda(completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ConstraintsSizeResolver$size$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8kik1a_k$(value instanceof Constraints ? value.value_1 : THROW_CCE(), completion);
  };
  function ConstraintsSizeResolver$size$slambda_0(resultContinuation) {
    var i = new ConstraintsSizeResolver$size$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_dlzlk7_k$(it.value_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ConstraintsSizeResolver$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function $sizeCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($sizeCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = first(this._this__u8e3s4__1.latestConstraints_1, ConstraintsSizeResolver$size$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult.value_1;
            return toSize(ARGUMENT);
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
  function ConstraintsSizeResolver() {
    this.latestConstraints_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
  }
  protoOf(ConstraintsSizeResolver).size_87lmu0_k$ = function ($completion) {
    var tmp = new $sizeCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ConstraintsSizeResolver).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    this.latestConstraints_1.tryEmit_ru0jrz_k$(new Constraints(constraints));
    var placeable = measurable.measure_4dmfk1_k$(constraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, ConstraintsSizeResolver$measure$lambda(placeable));
  };
  protoOf(ConstraintsSizeResolver).setConstraints_w24mz_k$ = function (constraints) {
    this.latestConstraints_1.tryEmit_ru0jrz_k$(new Constraints(constraints));
  };
  function rememberConstraintsSizeResolver($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-34261202);
    if (isTraceInProgress()) {
      traceEventStart(-34261202, $changed, -1, 'coil3.compose.rememberConstraintsSizeResolver (ConstraintsSizeResolver.kt:21)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(-1474440112);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'coil3.compose.rememberConstraintsSizeResolver.<anonymous>' call
      var value = new ConstraintsSizeResolver();
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp1_group;
  }
  function DrawScopeSizeResolver() {
  }
  var coil3_compose_ImagePainter$stable;
  function ImagePainter(image) {
    Painter.call(this);
    this.image_1 = image;
  }
  protoOf(ImagePainter).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(ImagePainter).get_intrinsicSize_culx5t_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.<get-intrinsicSize>.<anonymous>' call
    var it = this.image_1.get_width_j0q4yl_k$();
    var tmp = it > 0 ? it : NaN;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.<get-intrinsicSize>.<anonymous>' call
    var it_0 = this.image_1.get_height_e7t92o_k$();
    var tmp$ret$3 = it_0 > 0 ? it_0 : NaN;
    return Size_0(tmp, tmp$ret$3);
  };
  protoOf(ImagePainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
    var it = this.image_1.get_width_j0q4yl_k$();
    var scaleX = it > 0 ? _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$()) / it : 1.0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
    var it_0 = this.image_1.get_height_e7t92o_k$();
    var scaleY = it_0 > 0 ? _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$()) / it_0 : 1.0;
    var pivot = Companion_getInstance_7().get_Zero_k6n73t_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    try {
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      $this$with.get_transform_px941v_k$().scale_rbtyk0_k$(scaleX, scaleY, pivot);
      // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
      this.image_1.draw_uyhr5d_k$(get_nativeCanvas_0(_this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$()));
    }finally {
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
    }
  };
  function get_LocalAsyncImageModelEqualityDelegate() {
    _init_properties_LocalAsyncImageModelEqualityDelegate_kt__he9roi();
    return LocalAsyncImageModelEqualityDelegate;
  }
  var LocalAsyncImageModelEqualityDelegate;
  function AsyncImageModelEqualityDelegate$Companion$Default$1() {
  }
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).equals_bs7q9r_k$ = function (self_0, other) {
    if (this === other)
      return true;
    var tmp;
    if (!(self_0 instanceof ImageRequest)) {
      tmp = true;
    } else {
      tmp = !(other instanceof ImageRequest);
    }
    if (tmp)
      return equals(self_0, other);
    return equals(self_0.get_context_h02k06_k$(), other.get_context_h02k06_k$()) && equals(self_0.get_data_wokkxf_k$(), other.get_data_wokkxf_k$()) && self_0.get_memoryCacheKey_p17wyv_k$() == other.get_memoryCacheKey_p17wyv_k$() && equals(self_0.get_memoryCacheKeyExtras_7l3w9i_k$(), other.get_memoryCacheKeyExtras_7l3w9i_k$()) && self_0.get_diskCacheKey_gvj33x_k$() == other.get_diskCacheKey_gvj33x_k$() && equals(self_0.get_sizeResolver_v7l9bk_k$(), other.get_sizeResolver_v7l9bk_k$()) && self_0.get_scale_iyf28x_k$().equals(other.get_scale_iyf28x_k$()) && self_0.get_precision_e8tfsb_k$().equals(other.get_precision_e8tfsb_k$());
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).hashCode_858oys_k$ = function (self_0) {
    if (!(self_0 instanceof ImageRequest)) {
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = self_0 == null ? null : hashCode(self_0);
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var result = hashCode(self_0.get_context_h02k06_k$());
    result = imul(31, result) + hashCode(self_0.get_data_wokkxf_k$()) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = self_0.get_memoryCacheKey_p17wyv_k$();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    result = imul(31, result) + hashCode(self_0.get_memoryCacheKeyExtras_7l3w9i_k$()) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = self_0.get_diskCacheKey_gvj33x_k$();
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    result = imul(31, result) + hashCode(self_0.get_sizeResolver_v7l9bk_k$()) | 0;
    result = imul(31, result) + self_0.get_scale_iyf28x_k$().hashCode() | 0;
    result = imul(31, result) + self_0.get_precision_e8tfsb_k$().hashCode() | 0;
    return result;
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).toString = function () {
    return 'AsyncImageModelEqualityDelegate.Default';
  };
  function AsyncImageModelEqualityDelegate$Companion$AllProperties$1() {
  }
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).equals_bs7q9r_k$ = function (self_0, other) {
    return equals(self_0, other);
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).hashCode_858oys_k$ = function (self_0) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = self_0 == null ? null : hashCode(self_0);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).toString = function () {
    return 'AsyncImageModelEqualityDelegate.AllProperties';
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.Default_1 = new AsyncImageModelEqualityDelegate$Companion$Default$1();
    var tmp_0 = this;
    tmp_0.AllProperties_1 = new AsyncImageModelEqualityDelegate$Companion$AllProperties$1();
  }
  protoOf(Companion_0).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Companion_0).get_AllProperties_ak6ydx_k$ = function () {
    return this.AllProperties_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_11() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AsyncImageModelEqualityDelegate() {
  }
  function LocalAsyncImageModelEqualityDelegate$lambda() {
    _init_properties_LocalAsyncImageModelEqualityDelegate_kt__he9roi();
    return Companion_getInstance_11().Default_1;
  }
  var properties_initialized_LocalAsyncImageModelEqualityDelegate_kt_fgi3r4;
  function _init_properties_LocalAsyncImageModelEqualityDelegate_kt__he9roi() {
    if (!properties_initialized_LocalAsyncImageModelEqualityDelegate_kt_fgi3r4) {
      properties_initialized_LocalAsyncImageModelEqualityDelegate_kt_fgi3r4 = true;
      LocalAsyncImageModelEqualityDelegate = staticCompositionLocalOf(LocalAsyncImageModelEqualityDelegate$lambda);
    }
  }
  function get_LocalAsyncImagePreviewHandler() {
    _init_properties_LocalAsyncImagePreviewHandler_kt__hcje6y();
    return LocalAsyncImagePreviewHandler;
  }
  var LocalAsyncImagePreviewHandler;
  function sam$coil3_compose_AsyncImagePreviewHandler$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).handle_x2pp74_k$ = function (imageLoader, request, $completion) {
    return this.function_1(imageLoader, request, $completion);
  };
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, AsyncImagePreviewHandler) : false) {
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
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function AsyncImagePreviewHandler$Companion$Default$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).invoke_v79nr4_k$ = function (imageLoader, request, $completion) {
    var tmp = this.create_wvahl3_k$(imageLoader, request, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, ImageLoader) : false) ? p1 : THROW_CCE();
    return this.invoke_v79nr4_k$(tmp, p2 instanceof ImageRequest ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.imageLoader_1.execute_ncrliw_k$(this.request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_0;
            if (result instanceof SuccessResult) {
              tmp_0 = new Success(asPainter(result.get_image_it3i2a_k$(), this.request_1.get_context_h02k06_k$()), result);
            } else {
              if (result instanceof ErrorResult) {
                var tmp0_safe_receiver = result.get_image_it3i2a_k$();
                tmp_0 = new Error_0(tmp0_safe_receiver == null ? null : asPainter(tmp0_safe_receiver, this.request_1.get_context_h02k06_k$()), result);
              } else {
                noWhenBranchMatchedException();
              }
            }

            return tmp_0;
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
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).create_wvahl3_k$ = function (imageLoader, request, completion) {
    var i = new AsyncImagePreviewHandler$Companion$Default$slambda(completion);
    i.imageLoader_1 = imageLoader;
    i.request_1 = request;
    return i;
  };
  function AsyncImagePreviewHandler$Companion$Default$slambda_0(resultContinuation) {
    var i = new AsyncImagePreviewHandler$Companion$Default$slambda(resultContinuation);
    var l = function (imageLoader, request, $completion) {
      return i.invoke_v79nr4_k$(imageLoader, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = AsyncImagePreviewHandler$Companion$Default$slambda_0(null);
    tmp.Default_1 = new sam$coil3_compose_AsyncImagePreviewHandler$0(tmp_0);
  }
  protoOf(Companion_1).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_12() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AsyncImagePreviewHandler() {
  }
  function LocalAsyncImagePreviewHandler$lambda() {
    _init_properties_LocalAsyncImagePreviewHandler_kt__hcje6y();
    return Companion_getInstance_12().Default_1;
  }
  var properties_initialized_LocalAsyncImagePreviewHandler_kt_tg49j8;
  function _init_properties_LocalAsyncImagePreviewHandler_kt__hcje6y() {
    if (!properties_initialized_LocalAsyncImagePreviewHandler_kt_tg49j8) {
      properties_initialized_LocalAsyncImagePreviewHandler_kt_tg49j8 = true;
      LocalAsyncImagePreviewHandler = staticCompositionLocalOf(LocalAsyncImagePreviewHandler$lambda);
    }
  }
  var coil3_compose_internal_ContentPainterElement$stable;
  var coil3_compose_internal_ContentPainterNode$stable;
  function _get_painter__kk1cey_0($this) {
    return $this.painter_1;
  }
  function _get_alignment__wcztn2($this) {
    return $this.alignment_1;
  }
  function _get_contentScale__9ytply($this) {
    return $this.contentScale_1;
  }
  function _get_alpha__jvxknh_0($this) {
    return $this.alpha_1;
  }
  function _get_colorFilter__kcfzyi_0($this) {
    return $this.colorFilter_1;
  }
  function component1($this) {
    return $this.painter_1;
  }
  function component2($this) {
    return $this.alignment_1;
  }
  function component3($this) {
    return $this.contentScale_1;
  }
  function component4($this) {
    return $this.alpha_1;
  }
  function component5($this) {
    return $this.colorFilter_1;
  }
  function ContentPainterElement(painter, alignment, contentScale, alpha, colorFilter) {
    ModifierNodeElement.call(this);
    this.painter_1 = painter;
    this.alignment_1 = alignment;
    this.contentScale_1 = contentScale;
    this.alpha_1 = alpha;
    this.colorFilter_1 = colorFilter;
  }
  protoOf(ContentPainterElement).create_md4cuc_k$ = function () {
    return new ContentPainterNode(this.painter_1, this.alignment_1, this.contentScale_1, this.alpha_1, this.colorFilter_1);
  };
  protoOf(ContentPainterElement).update_fzck95_k$ = function (node) {
    var intrinsicsChanged = !equals(node.painter_1.get_intrinsicSize_culx5t_k$(), this.painter_1.get_intrinsicSize_culx5t_k$());
    node.painter_1 = this.painter_1;
    node.alignment_1 = this.alignment_1;
    node.contentScale_1 = this.contentScale_1;
    node.alpha_1 = this.alpha_1;
    node.colorFilter_1 = this.colorFilter_1;
    if (intrinsicsChanged) {
      invalidateMeasurement(node);
    }
    invalidateDraw(node);
  };
  protoOf(ContentPainterElement).update_9wd57p_k$ = function (node) {
    return this.update_fzck95_k$(node instanceof ContentPainterNode ? node : THROW_CCE());
  };
  protoOf(ContentPainterElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('content');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('painter', this.painter_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('alignment', this.alignment_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('contentScale', this.contentScale_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('alpha', this.alpha_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('colorFilter', this.colorFilter_1);
  };
  protoOf(ContentPainterElement).copy_dihpt1_k$ = function (painter, alignment, contentScale, alpha, colorFilter) {
    return new ContentPainterElement(painter, alignment, contentScale, alpha, colorFilter);
  };
  protoOf(ContentPainterElement).copy$default_dcgncr_k$ = function (painter, alignment, contentScale, alpha, colorFilter, $super) {
    painter = painter === VOID ? this.painter_1 : painter;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    contentScale = contentScale === VOID ? this.contentScale_1 : contentScale;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    colorFilter = colorFilter === VOID ? this.colorFilter_1 : colorFilter;
    return $super === VOID ? this.copy_dihpt1_k$(painter, alignment, contentScale, alpha, colorFilter) : $super.copy_dihpt1_k$.call(this, painter, alignment, contentScale, alpha, colorFilter);
  };
  protoOf(ContentPainterElement).toString = function () {
    return 'ContentPainterElement(painter=' + toString_0(this.painter_1) + ', alignment=' + toString_0(this.alignment_1) + ', contentScale=' + toString_0(this.contentScale_1) + ', alpha=' + this.alpha_1 + ', colorFilter=' + toString(this.colorFilter_1) + ')';
  };
  protoOf(ContentPainterElement).hashCode = function () {
    var result = hashCode(this.painter_1);
    result = imul(result, 31) + hashCode(this.alignment_1) | 0;
    result = imul(result, 31) + hashCode(this.contentScale_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.alpha_1) | 0;
    result = imul(result, 31) + (this.colorFilter_1 == null ? 0 : hashCode(this.colorFilter_1)) | 0;
    return result;
  };
  protoOf(ContentPainterElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContentPainterElement))
      return false;
    var tmp0_other_with_cast = other instanceof ContentPainterElement ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!equals(this.contentScale_1, tmp0_other_with_cast.contentScale_1))
      return false;
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    if (!equals(this.colorFilter_1, tmp0_other_with_cast.colorFilter_1))
      return false;
    return true;
  };
  function calculateScaledSize($this, dstSize) {
    if (Size__isEmpty_impl_o9ye97(dstSize)) {
      return Companion_getInstance_6().get_Zero_rugywl_k$();
    }
    var intrinsicSize = $this.painter_1.get_intrinsicSize_culx5t_k$();
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(intrinsicSize).equals(new Long(2143289344, 2143289344))) {
      return dstSize;
    }
    // Inline function 'coil3.compose.internal.takeOrElse' call
    var this_0 = _Size___get_width__impl__58y75t(intrinsicSize);
    var tmp;
    if (isFinite(this_0)) {
      tmp = this_0;
    } else {
      // Inline function 'coil3.compose.internal.ContentPainterNode.calculateScaledSize.<anonymous>' call
      tmp = _Size___get_width__impl__58y75t(dstSize);
    }
    var tmp_0 = tmp;
    // Inline function 'coil3.compose.internal.takeOrElse' call
    var this_1 = _Size___get_height__impl__a04p02(intrinsicSize);
    var tmp_1;
    if (isFinite(this_1)) {
      tmp_1 = this_1;
    } else {
      // Inline function 'coil3.compose.internal.ContentPainterNode.calculateScaledSize.<anonymous>' call
      tmp_1 = _Size___get_height__impl__a04p02(dstSize);
    }
    var tmp$ret$4 = tmp_1;
    var srcSize = Size_0(tmp_0, tmp$ret$4);
    var scaleFactor = $this.contentScale_1.computeScaleFactor_swd2p8_k$(srcSize, dstSize);
    if (!isFinite(_ScaleFactor___get_scaleX__impl__u0r14l(scaleFactor)) || !isFinite(_ScaleFactor___get_scaleY__impl__174k2e(scaleFactor))) {
      return dstSize;
    }
    return times(scaleFactor, srcSize);
  }
  function modifyConstraints($this, constraints) {
    var hasFixedWidth = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints);
    var hasFixedHeight = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints);
    if (hasFixedWidth && hasFixedHeight) {
      return constraints;
    }
    var painter = $this.painter_1;
    var hasBoundedSize = _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && _Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints);
    var intrinsicSize = painter.get_intrinsicSize_culx5t_k$();
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(intrinsicSize).equals(new Long(2143289344, 2143289344))) {
      var tmp;
      if (!hasBoundedSize) {
        tmp = true;
      } else {
        var tmp_0;
        if (painter instanceof AsyncImagePainter) {
          tmp_0 = painter.get_state_iypx7s_k$().get_value_j01efc_k$().get_painter_bzl4ri_k$() == null;
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return constraints;
      } else {
        return Constraints__copy$default_impl_f452rp(constraints, _Constraints___get_maxWidth__impl__uuyqc(constraints), VOID, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      }
    }
    var dstWidth;
    var dstHeight;
    if (hasBoundedSize && (hasFixedWidth || hasFixedHeight)) {
      dstWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      dstHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size.component1' call
      var intrinsicWidth = _Size___get_width__impl__58y75t(intrinsicSize);
      // Inline function 'androidx.compose.ui.geometry.Size.component2' call
      var intrinsicHeight = _Size___get_height__impl__a04p02(intrinsicSize);
      dstWidth = isFinite(intrinsicWidth) ? constrainWidth_0(constraints, intrinsicWidth) : _Constraints___get_minWidth__impl__hi9lfi(constraints);
      dstHeight = isFinite(intrinsicHeight) ? constrainHeight_0(constraints, intrinsicHeight) : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var _destruct__k2r9zo = calculateScaledSize($this, Size_0(dstWidth, dstHeight));
    // Inline function 'androidx.compose.ui.geometry.Size.component1' call
    var scaledWidth = _Size___get_width__impl__58y75t(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.geometry.Size.component2' call
    var scaledHeight = _Size___get_height__impl__a04p02(_destruct__k2r9zo);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$5 = roundToInt(scaledWidth);
    var tmp_1 = constrainWidth(constraints, tmp$ret$5);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$6 = roundToInt(scaledHeight);
    return Constraints__copy$default_impl_f452rp(constraints, tmp_1, VOID, constrainHeight(constraints, tmp$ret$6));
  }
  function ContentPainterNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_yv6dex_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function ContentPainterNode(painter, alignment, contentScale, alpha, colorFilter) {
    Node.call(this);
    this.painter_1 = painter;
    this.alignment_1 = alignment;
    this.contentScale_1 = contentScale;
    this.alpha_1 = alpha;
    this.colorFilter_1 = colorFilter;
  }
  protoOf(ContentPainterNode).set_painter_8cyjh5_k$ = function (_set____db54di) {
    this.painter_1 = _set____db54di;
  };
  protoOf(ContentPainterNode).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(ContentPainterNode).set_alignment_b4ulsx_k$ = function (_set____db54di) {
    this.alignment_1 = _set____db54di;
  };
  protoOf(ContentPainterNode).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ContentPainterNode).set_contentScale_kbts6_k$ = function (_set____db54di) {
    this.contentScale_1 = _set____db54di;
  };
  protoOf(ContentPainterNode).get_contentScale_i3wrkq_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ContentPainterNode).set_alpha_tvzcqh_k$ = function (_set____db54di) {
    this.alpha_1 = _set____db54di;
  };
  protoOf(ContentPainterNode).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(ContentPainterNode).set_colorFilter_dtpxr0_k$ = function (_set____db54di) {
    this.colorFilter_1 = _set____db54di;
  };
  protoOf(ContentPainterNode).get_colorFilter_nt8pqq_k$ = function () {
    return this.colorFilter_1;
  };
  protoOf(ContentPainterNode).get_shouldAutoInvalidate_lc75y2_k$ = function () {
    return false;
  };
  protoOf(ContentPainterNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_4dmfk1_k$(modifyConstraints(this, constraints));
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, ContentPainterNode$measure$lambda(placeable));
  };
  protoOf(ContentPainterNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.painter_1.get_intrinsicSize_culx5t_k$();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, VOID, VOID, height));
      var layoutWidth = measurable.minIntrinsicWidth_jyhjuj_k$(height);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      tmp = Math.max(a, layoutWidth);
    } else {
      tmp = measurable.minIntrinsicWidth_jyhjuj_k$(height);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.painter_1.get_intrinsicSize_culx5t_k$();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, VOID, VOID, height));
      var layoutWidth = measurable.maxIntrinsicWidth_b8umbx_k$(height);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      tmp = Math.max(a, layoutWidth);
    } else {
      tmp = measurable.maxIntrinsicWidth_b8umbx_k$(height);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.painter_1.get_intrinsicSize_culx5t_k$();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, width));
      var layoutHeight = measurable.minIntrinsicHeight_p2a4ou_k$(width);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      tmp = Math.max(a, layoutHeight);
    } else {
      tmp = measurable.minIntrinsicHeight_p2a4ou_k$(width);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.painter_1.get_intrinsicSize_culx5t_k$();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, width));
      var layoutHeight = measurable.maxIntrinsicHeight_b0krtc_k$(width);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      tmp = Math.max(a, layoutHeight);
    } else {
      tmp = measurable.maxIntrinsicHeight_b0krtc_k$(width);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var scaledSize = calculateScaledSize(this, _this__u8e3s4.get_size_cxx1ym_k$());
    var _destruct__k2r9zo = this.alignment_1.align_mb8mzc_k$(toIntSize(scaledSize), toIntSize(_this__u8e3s4.get_size_cxx1ym_k$()), _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
    var dx = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
    var dy = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(dx, dy);
    try {
      // Inline function 'coil3.compose.internal.ContentPainterNode.draw.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      this.painter_1.draw_zf0527_k$(_this__u8e3s4, scaledSize, this.alpha_1, this.colorFilter_1);
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-dx, -dy);
    }
    _this__u8e3s4.drawContent_m0wwjp_k$();
  };
  var coil3_compose_internal_CrossfadePainter$stable;
  function _set_start__ks52qr($this, _set____db54di) {
    $this.start_1 = _set____db54di;
  }
  function _get_start__b8zdqp($this) {
    return $this.start_1;
  }
  function _get_end__e67thy($this) {
    return $this.end_1;
  }
  function _get_contentScale__9ytply_0($this) {
    return $this.contentScale_1;
  }
  function _get_durationMillis__xbx64x($this) {
    return $this.durationMillis_1;
  }
  function _get_fadeStart__gpnh6z($this) {
    return $this.fadeStart_1;
  }
  function _get_preferExactIntrinsicSize__b0ixrg($this) {
    return $this.preferExactIntrinsicSize_1;
  }
  function _set_invalidateTick__a7eowv($this, _set____db54di) {
    var this_0 = $this.invalidateTick$delegate_1;
    invalidateTick$factory();
    this_0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_invalidateTick__zalx0t($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.invalidateTick$delegate_1;
    invalidateTick$factory_0();
    return this_0.get_intValue_mlvnn9_k$();
  }
  function _set_startTime__63773e($this, _set____db54di) {
    $this.startTime_1 = _set____db54di;
  }
  function _get_startTime__n7n9b6($this) {
    return $this.startTime_1;
  }
  function _set_isDone__ofj1x($this, _set____db54di) {
    $this.isDone_1 = _set____db54di;
  }
  function _get_isDone__sb1kv($this) {
    return $this.isDone_1;
  }
  function _set_maxAlpha__j4cq0t($this, _set____db54di) {
    var this_0 = $this.maxAlpha$delegate_1;
    maxAlpha$factory();
    this_0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_maxAlpha__6bgek1($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.maxAlpha$delegate_1;
    maxAlpha$factory_0();
    return this_0.get_floatValue_xw60ou_k$();
  }
  function _set_colorFilter__ke9voq_0($this, _set____db54di) {
    var this_0 = $this.colorFilter$delegate_1;
    colorFilter$factory_1();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_colorFilter__kcfzyi_1($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.colorFilter$delegate_1;
    colorFilter$factory_2();
    return this_0.get_value_j01efc_k$();
  }
  function computeIntrinsicSize($this) {
    var tmp0_safe_receiver = $this.start_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_intrinsicSize_culx5t_k$();
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new Size(tmp_0)) == null) {
      tmp = Companion_getInstance_6().get_Zero_rugywl_k$();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var startSize = tmp;
    var tmp2_safe_receiver = $this.end_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_intrinsicSize_culx5t_k$();
    var tmp_1;
    var tmp_2 = tmp3_elvis_lhs;
    if ((tmp_2 == null ? null : new Size(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_6().get_Zero_rugywl_k$();
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var endSize = tmp_1;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var isStartSpecified = !_Size___get_packedValue__impl__7rlt1o(startSize).equals(new Long(2143289344, 2143289344));
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var isEndSpecified = !_Size___get_packedValue__impl__7rlt1o(endSize).equals(new Long(2143289344, 2143289344));
    if (isStartSpecified && isEndSpecified) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = _Size___get_width__impl__58y75t(startSize);
      var b = _Size___get_width__impl__58y75t(endSize);
      var tmp_3 = Math.max(a, b);
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = _Size___get_height__impl__a04p02(startSize);
      var b_0 = _Size___get_height__impl__a04p02(endSize);
      var tmp$ret$3 = Math.max(a_0, b_0);
      return Size_0(tmp_3, tmp$ret$3);
    }
    if ($this.preferExactIntrinsicSize_1) {
      if (isStartSpecified)
        return startSize;
      if (isEndSpecified)
        return endSize;
    }
    return Companion_getInstance_6().get_Unspecified_3ttj0y_k$();
  }
  function drawPainter(_this__u8e3s4, $this, painter, alpha) {
    if (painter == null || alpha <= 0)
      return Unit_getInstance();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var size = _this__u8e3s4.get_size_cxx1ym_k$();
    var drawSize = computeDrawSize($this, painter.get_intrinsicSize_culx5t_k$(), size);
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(size).equals(new Long(2143289344, 2143289344))) {
      tmp = true;
    } else {
      tmp = Size__isEmpty_impl_o9ye97(size);
    }
    if (tmp) {
      painter.draw_zf0527_k$(_this__u8e3s4, drawSize, alpha, _get_colorFilter__kcfzyi_1($this));
    } else {
      // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
      var horizontal = (_Size___get_width__impl__58y75t(size) - _Size___get_width__impl__58y75t(drawSize)) / 2;
      var vertical = (_Size___get_height__impl__a04p02(size) - _Size___get_height__impl__a04p02(drawSize)) / 2;
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_ja77zn_k$(horizontal, vertical, horizontal, vertical);
      var tmp_0;
      try {
        painter.draw_zf0527_k$(_this__u8e3s4, drawSize, alpha, _get_colorFilter__kcfzyi_1($this));
        tmp_0 = Unit_getInstance();
      }finally {
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_ja77zn_k$(-horizontal, -vertical, -horizontal, -vertical);
      }
    }
  }
  function computeDrawSize($this, srcSize, dstSize) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(srcSize).equals(new Long(2143289344, 2143289344))) {
      tmp = true;
    } else {
      tmp = Size__isEmpty_impl_o9ye97(srcSize);
    }
    if (tmp)
      return dstSize;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(dstSize).equals(new Long(2143289344, 2143289344))) {
      tmp_0 = true;
    } else {
      tmp_0 = Size__isEmpty_impl_o9ye97(dstSize);
    }
    if (tmp_0)
      return dstSize;
    return times_0(srcSize, $this.contentScale_1.computeScaleFactor_swd2p8_k$(srcSize, dstSize));
  }
  function CrossfadePainter(start, end, contentScale, durationMillis, fadeStart, preferExactIntrinsicSize) {
    Painter.call(this);
    this.start_1 = start;
    this.end_1 = end;
    this.contentScale_1 = contentScale;
    this.durationMillis_1 = durationMillis;
    this.fadeStart_1 = fadeStart;
    this.preferExactIntrinsicSize_1 = preferExactIntrinsicSize;
    this.invalidateTick$delegate_1 = mutableIntStateOf(0);
    this.startTime_1 = null;
    this.isDone_1 = false;
    this.maxAlpha$delegate_1 = mutableFloatStateOf(1.0);
    this.colorFilter$delegate_1 = mutableStateOf(null);
  }
  protoOf(CrossfadePainter).get_intrinsicSize_culx5t_k$ = function () {
    return computeIntrinsicSize(this);
  };
  protoOf(CrossfadePainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    if (this.isDone_1) {
      drawPainter(_this__u8e3s4, this, this.end_1, _get_maxAlpha__6bgek1(this));
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.startTime_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new ValueTimeMark(tmp_0)) == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ValueTimeMark(Monotonic_getInstance().markNow_ns2ype_k$());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.internal.CrossfadePainter.onDraw.<anonymous>' call
      this.startTime_1 = this_0.reading_1;
      tmp = this_0.reading_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var startTime = tmp;
    // Inline function 'kotlin.Long.div' call
    var this_1 = _Duration___get_inWholeMilliseconds__impl__msfiry(ValueTimeMark__elapsedNow_impl_eonqvs(startTime));
    var other = this.durationMillis_1;
    var percent = this_1.toFloat_jhbgwv_k$() / other;
    var endAlpha = coerceIn(percent, 0.0, 1.0) * _get_maxAlpha__6bgek1(this);
    var startAlpha = this.fadeStart_1 ? _get_maxAlpha__6bgek1(this) - endAlpha : _get_maxAlpha__6bgek1(this);
    this.isDone_1 = percent >= 1.0;
    drawPainter(_this__u8e3s4, this, this.start_1, startAlpha);
    drawPainter(_this__u8e3s4, this, this.end_1, endAlpha);
    if (this.isDone_1) {
      this.start_1 = null;
    } else {
      var _unary__edvuaz = _get_invalidateTick__zalx0t(this);
      _set_invalidateTick__a7eowv(this, _unary__edvuaz + 1 | 0);
    }
  };
  protoOf(CrossfadePainter).applyAlpha_eeyl20_k$ = function (alpha) {
    _set_maxAlpha__j4cq0t(this, alpha);
    return true;
  };
  protoOf(CrossfadePainter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    _set_colorFilter__ke9voq_0(this, colorFilter);
    return true;
  };
  function invalidateTick$factory() {
    return getPropertyCallableRef('invalidateTick', 1, KMutableProperty1, function (receiver) {
      return _get_invalidateTick__zalx0t(receiver);
    }, function (receiver, value) {
      return _set_invalidateTick__a7eowv(receiver, value);
    });
  }
  function invalidateTick$factory_0() {
    return getPropertyCallableRef('invalidateTick', 1, KMutableProperty1, function (receiver) {
      return _get_invalidateTick__zalx0t(receiver);
    }, function (receiver, value) {
      return _set_invalidateTick__a7eowv(receiver, value);
    });
  }
  function maxAlpha$factory() {
    return getPropertyCallableRef('maxAlpha', 1, KMutableProperty1, function (receiver) {
      return _get_maxAlpha__6bgek1(receiver);
    }, function (receiver, value) {
      return _set_maxAlpha__j4cq0t(receiver, value);
    });
  }
  function maxAlpha$factory_0() {
    return getPropertyCallableRef('maxAlpha', 1, KMutableProperty1, function (receiver) {
      return _get_maxAlpha__6bgek1(receiver);
    }, function (receiver, value) {
      return _set_maxAlpha__j4cq0t(receiver, value);
    });
  }
  function colorFilter$factory_1() {
    return getPropertyCallableRef('colorFilter', 1, KMutableProperty1, function (receiver) {
      return _get_colorFilter__kcfzyi_1(receiver);
    }, function (receiver, value) {
      return _set_colorFilter__ke9voq_0(receiver, value);
    });
  }
  function colorFilter$factory_2() {
    return getPropertyCallableRef('colorFilter', 1, KMutableProperty1, function (receiver) {
      return _get_colorFilter__kcfzyi_1(receiver);
    }, function (receiver, value) {
      return _set_colorFilter__ke9voq_0(receiver, value);
    });
  }
  function get_immediateDispatcher() {
    _init_properties_utils_kt__i7zv1b();
    return immediateDispatcher;
  }
  var immediateDispatcher;
  var coil3_compose_internal_AsyncImageState$stable;
  function toScale(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    return equals(_this__u8e3s4, Companion_getInstance_1().get_Fit_18jtko_k$()) || equals(_this__u8e3s4, Companion_getInstance_1().get_Inside_bggkb_k$()) ? Scale_FIT_getInstance() : Scale_FILL_getInstance();
  }
  function AsyncImageState(model, modelEqualityDelegate, imageLoader) {
    this.model_1 = model;
    this.modelEqualityDelegate_1 = modelEqualityDelegate;
    this.imageLoader_1 = imageLoader;
  }
  protoOf(AsyncImageState).get_model_ivc0lc_k$ = function () {
    return this.model_1;
  };
  protoOf(AsyncImageState).get_modelEqualityDelegate_fxx58f_k$ = function () {
    return this.modelEqualityDelegate_1;
  };
  protoOf(AsyncImageState).get_imageLoader_ok4pi3_k$ = function () {
    return this.imageLoader_1;
  };
  protoOf(AsyncImageState).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AsyncImageState) {
      tmp_1 = equals(this.modelEqualityDelegate_1, other.modelEqualityDelegate_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.modelEqualityDelegate_1.equals_bs7q9r_k$(this.model_1, other.model_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.imageLoader_1, other.imageLoader_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AsyncImageState).hashCode = function () {
    var result = hashCode(this.modelEqualityDelegate_1);
    result = imul(31, result) + this.modelEqualityDelegate_1.hashCode_858oys_k$(this.model_1) | 0;
    result = imul(31, result) + hashCode(this.imageLoader_1) | 0;
    return result;
  };
  function AsyncImageState_0(model, imageLoader, $composer, $changed) {
    _init_properties_utils_kt__i7zv1b();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1014878424, $changed, -1, 'coil3.compose.internal.AsyncImageState (utils.kt:143)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAsyncImageModelEqualityDelegate();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = new AsyncImageState(model, tmp0, imageLoader);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  }
  function transformOf(placeholder, error, fallback) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    if (!(placeholder == null) || !(error == null) || !(fallback == null)) {
      tmp = transformOf$lambda(placeholder, fallback, error);
    } else {
      tmp = Companion_getInstance_10().get_DefaultTransform_dc1fcc_k$();
    }
    return tmp;
  }
  function onStateOf(onLoading, onSuccess, onError) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    if (!(onLoading == null) || !(onSuccess == null) || !(onError == null)) {
      tmp = onStateOf$lambda(onLoading, onSuccess, onError);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function requestOfWithSizeResolver(model, contentScale, $composer, $changed) {
    _init_properties_utils_kt__i7zv1b();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-329318062);
    if (isTraceInProgress()) {
      traceEventStart(-329318062, $changed, -1, 'coil3.compose.internal.requestOfWithSizeResolver (utils.kt:64)');
    }
    var tmp;
    if (model instanceof ImageRequest) {
      tmp = !(model.get_defined_qtfew0_k$().get_sizeResolver_v7l9bk_k$() == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return model;
    }
    var tmp_0;
    if (equals(contentScale, Companion_getInstance_1().get_None_wo6tgh_k$())) {
      $composer_0.startReplaceableGroup_ip860b_k$(-858313867);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp_0 = Companion_getInstance_5().get_ORIGINAL_3y2d22_k$();
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(-858270839);
      var tmp1_group = rememberConstraintsSizeResolver($composer_0, 0);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp_0 = tmp1_group;
    }
    var sizeResolver = tmp_0;
    if (model instanceof ImageRequest) {
      $composer_0.startReplaceableGroup_ip860b_k$(-858186178);
      $composer_0.startReplaceableGroup_ip860b_k$(1219243085);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$(model) | $composer_0.changed_ga7h3f_k$(sizeResolver));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        // Inline function 'coil3.compose.internal.requestOfWithSizeResolver.<anonymous>' call
        var value = model.newBuilder$default_dz3r4s_k$().size_jl2d87_k$(sizeResolver).build_1k0s4u_k$();
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp3_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp3_group;
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(-858022374);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalPlatformContext();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var context = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(1219249950);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!($composer_0.changed_ga7h3f_k$(context) | $composer_0.changed_ga7h3f_k$(model)) | $composer_0.changed_ga7h3f_k$(sizeResolver));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        // Inline function 'coil3.compose.internal.requestOfWithSizeResolver.<anonymous>' call
        var value_0 = Builder_init_$Create$(context).data_nz5vvv_k$(model).size_jl2d87_k$(sizeResolver).build_1k0s4u_k$();
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp5_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp5_group;
    }
  }
  function contentDescription(_this__u8e3s4, contentDescription) {
    _init_properties_utils_kt__i7zv1b();
    if (!(contentDescription == null)) {
      return semantics(_this__u8e3s4, VOID, contentDescription$lambda(contentDescription));
    } else {
      return _this__u8e3s4;
    }
  }
  function requestOf(model, $composer, $changed) {
    _init_properties_utils_kt__i7zv1b();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1319639034);
    if (isTraceInProgress()) {
      traceEventStart(1319639034, $changed, -1, 'coil3.compose.internal.requestOf (utils.kt:45)');
    }
    if (model instanceof ImageRequest) {
      $composer_0.startReplaceableGroup_ip860b_k$(-72322677);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return model;
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(-72283431);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalPlatformContext();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var context = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(690407039);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$(context) | $composer_0.changed_ga7h3f_k$(model));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        // Inline function 'coil3.compose.internal.requestOf.<anonymous>' call
        var value = Builder_init_$Create$(context).data_nz5vvv_k$(model).build_1k0s4u_k$();
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp1_group;
    }
  }
  function rememberImmediateCoroutineScope($composer, $changed) {
    _init_properties_utils_kt__i7zv1b();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(357321100);
    if (isTraceInProgress()) {
      traceEventStart(357321100, $changed, -1, 'coil3.compose.internal.rememberImmediateCoroutineScope (utils.kt:247)');
    }
    // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
    var getContext = null;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
    if (!((1 & 1) === 0)) {
      getContext = rememberImmediateCoroutineScope$lambda;
    }
    var composer = $composer_1;
    sourceInformationMarkerStart($composer_1, -954207516, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_1);
    var scope = tmp1_group;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalInspectionMode();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_2);
    var isPreview = tmp0;
    $composer_0.startReplaceableGroup_ip860b_k$(-497161116);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.changed_ga7h3f_k$(scope) | $composer_0.changed_jpyyrz_k$(isPreview));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'coil3.compose.internal.rememberImmediateCoroutineScope.<anonymous>' call
      var tmp_2;
      if (isPreview) {
        tmp_2 = scope.get_coroutineContext_115oqo_k$().plus_s13ygv_k$(Dispatchers_getInstance().get_Unconfined_sfvx0q_k$());
      } else {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.compose.internal.rememberImmediateCoroutineScope.<anonymous>.<anonymous>' call
        var $this$run = scope.get_coroutineContext_115oqo_k$();
        tmp_2 = $this$run.plus_s13ygv_k$(resolveImmediateDispatcher($this$run));
      }
      var context = tmp_2;
      var value_0 = CoroutineScope_0(context);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp1_group_0;
  }
  function resolveImmediateDispatcher(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var dispatcher = _this__u8e3s4.get_y2st91_k$(Key_getInstance());
    if (dispatcher instanceof MainCoroutineDispatcher) {
      try {
        return dispatcher.get_immediate_r3y8eg_k$();
      } catch ($p) {
        if ($p instanceof UnsupportedOperationException) {
          var _unused_var__etf5q3 = $p;
        } else {
          throw $p;
        }
      }
    }
    return get_immediateDispatcher();
  }
  function toSize(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    return new Size_1(toDimension(_Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), toDimension(_Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function takeOrElse(_this__u8e3s4, block) {
    _init_properties_utils_kt__i7zv1b();
    return isFinite(_this__u8e3s4) ? _this__u8e3s4 : block();
  }
  function constrainWidth_0(_this__u8e3s4, width) {
    _init_properties_utils_kt__i7zv1b();
    return coerceIn(width, _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4));
  }
  function constrainHeight_0(_this__u8e3s4, height) {
    _init_properties_utils_kt__i7zv1b();
    return coerceIn(height, _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4));
  }
  function toIntSize(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _Size___get_width__impl__58y75t(_this__u8e3s4);
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = _Size___get_height__impl__a04p02(_this__u8e3s4);
    var tmp$ret$1 = roundToInt(this_1);
    return IntSize(tmp, tmp$ret$1);
  }
  function toDimension(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    return !(_this__u8e3s4 === 2147483647) ? new Pixels(Dimension(_this__u8e3s4)) : Undefined_getInstance();
  }
  function transformOf$lambda($placeholder, $fallback, $error) {
    return function (state) {
      var tmp;
      if (state instanceof Loading) {
        tmp = !($placeholder == null) ? state.copy_fcxbcn_k$($placeholder) : state;
      } else {
        if (state instanceof Error_0) {
          var tmp_0;
          var tmp_1 = state.get_result_iyg5d2_k$().get_throwable_c93gq1_k$();
          if (tmp_1 instanceof NullRequestDataException) {
            tmp_0 = !($fallback == null) ? state.copy$default_ey7jyw_k$($fallback) : state;
          } else {
            tmp_0 = !($error == null) ? state.copy$default_ey7jyw_k$($error) : state;
          }
          tmp = tmp_0;
        } else {
          tmp = state;
        }
      }
      return tmp;
    };
  }
  function onStateOf$lambda($onLoading, $onSuccess, $onError) {
    return function (state) {
      if (state instanceof Loading) {
        var tmp1_safe_receiver = $onLoading;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(state);
      } else {
        if (state instanceof Success) {
          var tmp2_safe_receiver = $onSuccess;
          if (tmp2_safe_receiver == null)
            null;
          else
            tmp2_safe_receiver(state);
        } else {
          if (state instanceof Error_0) {
            var tmp3_safe_receiver = $onError;
            if (tmp3_safe_receiver == null)
              null;
            else
              tmp3_safe_receiver(state);
          } else {
            if (!(state instanceof Empty)) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      return Unit_getInstance();
    };
  }
  function contentDescription$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_8().get_Image_hasgv4_k$());
      return Unit_getInstance();
    };
  }
  function rememberImmediateCoroutineScope$lambda() {
    _init_properties_utils_kt__i7zv1b();
    return EmptyCoroutineContext_getInstance();
  }
  var properties_initialized_utils_kt_wt0odb;
  function _init_properties_utils_kt__i7zv1b() {
    if (!properties_initialized_utils_kt_wt0odb) {
      properties_initialized_utils_kt_wt0odb = true;
      var tmp;
      try {
        // Inline function 'kotlin.also' call
        var this_0 = Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.compose.internal.immediateDispatcher.<anonymous>' call
        this_0.isDispatchNeeded_ft82v4_k$(EmptyCoroutineContext_getInstance());
        tmp = this_0;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_0 = Dispatchers_getInstance().get_Unconfined_sfvx0q_k$();
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      immediateDispatcher = tmp;
      coil3_compose_internal_AsyncImageState$stable = 0;
    }
  }
  function maybeNewCrossfadePainter(previous, current, contentScale) {
    var tmp;
    if (current instanceof Success) {
      tmp = current.get_result_iyg5d2_k$();
    } else {
      if (current instanceof Error_0) {
        tmp = current.get_result_iyg5d2_k$();
      } else {
        return null;
      }
    }
    var result = tmp;
    if (!(result instanceof SuccessResult)) {
      return null;
    }
    if (result.get_dataSource_vce0e_k$().equals(DataSource_MEMORY_CACHE_getInstance())) {
      return null;
    }
    var crossfadeMillis = get_crossfadeMillis(result.get_request_jdwg4m_k$());
    if (crossfadeMillis > 0) {
      // Inline function 'kotlin.takeIf' call
      var this_0 = previous.get_painter_bzl4ri_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'coil3.compose.maybeNewCrossfadePainter.<anonymous>' call
      if (previous instanceof Loading) {
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      return new CrossfadePainter(tmp$ret$1, current.get_painter_bzl4ri_k$(), contentScale, crossfadeMillis, !result.get_isPlaceholderCached_fjjhfi_k$(), false);
    } else {
      return null;
    }
  }
  function validateRequestProperties(request) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.get_target_juba8q_k$() == null)) {
      // Inline function 'coil3.compose.validateRequestProperties.<anonymous>' call
      var message = 'request.target must be null.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  function asPainter(_this__u8e3s4, context, filterQuality) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_2().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    var tmp;
    if (_this__u8e3s4 instanceof BitmapImage) {
      tmp = BitmapPainter(asComposeImageBitmap(toBitmap(_this__u8e3s4)), VOID, VOID, filterQuality);
    } else {
      tmp = new ImagePainter(_this__u8e3s4);
    }
    return tmp;
  }
  function get_nativeCanvas_0(_this__u8e3s4) {
    return get_nativeCanvas(_this__u8e3s4);
  }
  function get_LocalPlatformContext() {
    _init_properties_LocalPlatformContext_nonAndroid_kt__ocy165();
    return LocalPlatformContext;
  }
  var LocalPlatformContext;
  function LocalPlatformContext$lambda() {
    _init_properties_LocalPlatformContext_nonAndroid_kt__ocy165();
    return Companion_getInstance_9().get_INSTANCE_9oh0gy_k$();
  }
  var properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9;
  function _init_properties_LocalPlatformContext_nonAndroid_kt__ocy165() {
    if (!properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9) {
      properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9 = true;
      LocalPlatformContext = staticCompositionLocalOf(LocalPlatformContext$lambda);
    }
  }
  //region block: post-declaration
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(ConstraintsSizeResolver).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(ConstraintsSizeResolver).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(ConstraintsSizeResolver).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(ConstraintsSizeResolver).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(ConstraintsSizeResolver).foldIn_h4qjtu_k$ = foldIn;
  protoOf(ConstraintsSizeResolver).foldOut_911h31_k$ = foldOut;
  protoOf(ConstraintsSizeResolver).any_6c0yej_k$ = any;
  protoOf(ConstraintsSizeResolver).all_xyjayo_k$ = all;
  protoOf(ConstraintsSizeResolver).then_g5qrxq_k$ = then;
  protoOf(ContentPainterNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  //endregion
  //region block: init
  coil3_compose_AsyncImagePainter_Input$stable = 0;
  coil3_compose_AsyncImagePainter_State_Empty$stable = 0;
  coil3_compose_AsyncImagePainter_State_Loading$stable = 8;
  coil3_compose_AsyncImagePainter_State_Success$stable = 8;
  coil3_compose_AsyncImagePainter_State_Error$stable = 8;
  coil3_compose_AsyncImagePainter$stable = 0;
  coil3_compose_ConstraintsSizeResolver$stable = 0;
  coil3_compose_ImagePainter$stable = 8;
  coil3_compose_internal_ContentPainterElement$stable = 0;
  coil3_compose_internal_ContentPainterNode$stable = 8;
  coil3_compose_internal_CrossfadePainter$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AsyncImage;
  _.$_$.b = get_LocalPlatformContext;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-compose-core.js.map
