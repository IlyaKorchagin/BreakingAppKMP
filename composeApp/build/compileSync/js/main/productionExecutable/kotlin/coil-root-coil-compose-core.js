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
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.da;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _FilterQuality___get_value__impl__vmx58a = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g3;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.oe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var equals = kotlin_kotlin.$_$.od;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ff;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var hashCode = kotlin_kotlin.$_$.xd;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var toString = kotlin_kotlin.$_$.cm;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.be;
  var Companion_getInstance_4 = kotlin_io_coil_kt_coil3_coil_core.$_$.e1;
  var Precision_INEXACT_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.y;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var ErrorResult = kotlin_io_coil_kt_coil3_coil_core.$_$.e;
  var SuccessResult = kotlin_io_coil_kt_coil3_coil_core.$_$.i;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var transformLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var mapLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var Target = kotlin_io_coil_kt_coil3_coil_core.$_$.n;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yl;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var ImageVector = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var Builder = kotlin_io_coil_kt_coil3_coil_core.$_$.f;
  var get_LocalInspectionMode = kotlin_org_jetbrains_compose_ui_ui.$_$.y5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var _Constraints___get_isZero__impl__fm0efw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.q8;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var ImageRequest = kotlin_io_coil_kt_coil3_coil_core.$_$.g;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var ImageLoader = kotlin_io_coil_kt_coil3_coil_core.$_$.r;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var Long = kotlin_kotlin.$_$.hk;
  var isFinite = kotlin_kotlin.$_$.ll;
  var _ScaleFactor___get_scaleX__impl__u0r14l = kotlin_org_jetbrains_compose_ui_ui.$_$.o9;
  var _ScaleFactor___get_scaleY__impl__174k2e = kotlin_org_jetbrains_compose_ui_ui.$_$.p9;
  var times = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var roundToInt = kotlin_kotlin.$_$.pf;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var times_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Monotonic_instance = kotlin_kotlin.$_$.x5;
  var ValueTimeMark = kotlin_kotlin.$_$.qj;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.m3;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.j3;
  var coerceIn = kotlin_kotlin.$_$.cg;
  var Scale_FILL_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.z;
  var Scale_FIT_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.a1;
  var Builder_init_$Create$ = kotlin_io_coil_kt_coil3_coil_core.$_$.b1;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.b8;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var UnsupportedOperationException = kotlin_kotlin.$_$.bl;
  var MainCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m2;
  var Size_1 = kotlin_io_coil_kt_coil3_coil_core.$_$.m;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Undefined_instance = kotlin_io_coil_kt_coil3_coil_core.$_$.d1;
  var Dimension = kotlin_io_coil_kt_coil3_coil_core.$_$.l;
  var Pixels = kotlin_io_coil_kt_coil3_coil_core.$_$.k;
  var NullRequestDataException = kotlin_io_coil_kt_coil3_coil_core.$_$.h;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.r6;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.ia;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.v7;
  var DataSource_MEMORY_CACHE_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.w;
  var get_crossfadeMillis = kotlin_io_coil_kt_coil3_coil_core.$_$.j;
  var toBitmap = kotlin_io_coil_kt_coil3_coil_core.$_$.u;
  var asComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var BitmapImage = kotlin_io_coil_kt_coil3_coil_core.$_$.p;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var Companion_getInstance_8 = kotlin_io_coil_kt_coil3_coil_core.$_$.h1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  initMetadataForInterface(State, 'State');
  initMetadataForObject(Empty, 'Empty', VOID, VOID, [State]);
  initMetadataForClass(Loading, 'Loading', VOID, VOID, [State]);
  initMetadataForClass(Success, 'Success', VOID, VOID, [State]);
  initMetadataForClass(Error_0, 'Error', VOID, VOID, [State]);
  initMetadataForLambda(AsyncImagePainter$onRemembered$slambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(AsyncImagePainter$onRemembered$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForFunctionReference(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k, VOID, VOID, [1]);
  initMetadataForClass(Input, 'Input');
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AsyncImagePainter$onRemembered$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Target]);
  initMetadataForClass(AsyncImagePainter, 'AsyncImagePainter', VOID, Painter, [Painter, RememberObserver], [1]);
  initMetadataForLambda(ConstraintsSizeResolver$size$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($sizeCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(ConstraintsSizeResolver, 'ConstraintsSizeResolver', ConstraintsSizeResolver, VOID, [LayoutModifier], [0]);
  initMetadataForInterface(DrawScopeSizeResolver, 'DrawScopeSizeResolver', VOID, VOID, VOID, [0]);
  initMetadataForClass(ImagePainter, 'ImagePainter', VOID, Painter);
  initMetadataForClass(AsyncImageModelEqualityDelegate$Companion$Default$1);
  initMetadataForClass(AsyncImageModelEqualityDelegate$Companion$AllProperties$1);
  initMetadataForCompanion(Companion_0);
  initMetadataForInterface(AsyncImagePreviewHandler, 'AsyncImagePreviewHandler', VOID, VOID, VOID, [2]);
  initMetadataForClass(sam$coil3_compose_AsyncImagePreviewHandler$0, 'sam$coil3_compose_AsyncImagePreviewHandler$0', VOID, VOID, [AsyncImagePreviewHandler, FunctionAdapter], [2]);
  initMetadataForLambda(AsyncImagePreviewHandler$Companion$Default$slambda, CoroutineImpl, VOID, [2]);
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
    $composer_0.y30(-1128374444);
    if (!(($default & 8) === 0))
      modifier_0 = Companion_instance;
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
      alignment_0 = Companion_getInstance().q7p_1;
    if (!(($default & 2048) === 0))
      contentScale_0 = Companion_getInstance_0().z7w_1;
    if (!(($default & 4096) === 0))
      alpha_0 = 1.0;
    if (!(($default & 8192) === 0))
      colorFilter_0 = null;
    if (!(($default & 16384) === 0))
      filterQuality_0 = Companion_getInstance_1().i6e_1;
    if (!(($default & 32768) === 0))
      clipToBounds_0 = true;
    if (isTraceInProgress()) {
      traceEventStart(-1128374444, $changed, $changed1, 'coil3.compose.AsyncImage (AsyncImage.kt:71)');
    }
    AsyncImage_0(AsyncImageState_0(model, imageLoader, $composer_0, 14 & $changed | 112 & $changed >> 3), contentDescription, modifier_0, transformOf(placeholder_0, error_0, fallback_0), onStateOf(onLoading_0, onSuccess_0, onError_0), alignment_0, contentScale_0, alpha_0, colorFilter_0, filterQuality_0, clipToBounds_0, $composer_0, 112 & $changed | 896 & $changed >> 3 | 458752 & $changed1 << 15 | 3670016 & $changed1 << 15 | 29360128 & $changed1 << 15 | 234881024 & $changed1 << 15 | 1879048192 & $changed1 << 15, 14 & $changed1 >> 15);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z30();
  }
  function AsyncImage_0(state, contentDescription, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $composer, $changed, $changed1) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(1236588022);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(state) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentDescription) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(transform) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(onState) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f2r(alignment) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentScale) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.h32(alpha) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.f2r(colorFilter) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.j32(_FilterQuality___get_value__impl__vmx58a(filterQuality)) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.g32(clipToBounds) ? 4 : 2);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(1236588022, $dirty, $dirty1, 'coil3.compose.AsyncImage (AsyncImage.kt:151)');
      }
      var request = requestOfWithSizeResolver(state.rl6_1, contentScale, $composer_0, 112 & $dirty >> 15);
      var painter = rememberAsyncImagePainter(request, state.tl6_1, transform, onState, contentScale, filterQuality, $composer_0, 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 6 | 458752 & $dirty >> 12, 0);
      var sizeResolver = request.pkd_1;
      var tmp;
      if (sizeResolver instanceof ConstraintsSizeResolver) {
        tmp = modifier.i7q(sizeResolver);
      } else {
        tmp = modifier;
      }
      Content(tmp, painter, contentDescription, alignment, contentScale, alpha, colorFilter, clipToBounds, $composer_0, 896 & $dirty << 3 | 7168 & $dirty >> 6 | 57344 & $dirty >> 6 | 458752 & $dirty >> 6 | 3670016 & $dirty >> 6 | 29360128 & $dirty1 << 21);
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
      tmp0_safe_receiver.n38(AsyncImage$lambda(state, contentDescription, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $changed, $changed1));
    }
  }
  function Content(modifier, painter, contentDescription_0, alignment, contentScale, alpha, colorFilter, clipToBounds_0, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-237738007);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(painter) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentDescription_0) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(alignment) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentScale) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h32(alpha) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.f2r(colorFilter) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.g32(clipToBounds_0) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-237738007, $dirty, -1, 'coil3.compose.Content (AsyncImage.kt:196)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout' call
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.Content.<anonymous>' call
      var $this$run = contentDescription(modifier, contentDescription_0);
      var modifier_0 = (clipToBounds_0 ? clipToBounds($this$run) : $this$run).i7q(new ContentPainterElement(painter, alignment, contentScale, alpha, colorFilter));
      $composer_0.y30(687221771);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance_2().l2u_1) {
        // Inline function 'coil3.compose.Content.<anonymous>' call
        var tmp_0 = Content$lambda;
        var value = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_0);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_1 = tmp;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.z30();
      var modifier_1 = modifier_0;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_1);
      var localMap = $composer_1.u32();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().s9e_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp_2 = $composer_2.v30();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_2.o31();
      if ($composer_2.j31()) {
        $composer_2.p31(factory);
      } else {
        $composer_2.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp0_group, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().w9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      $composer_2.u31();
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
      tmp1_safe_receiver.n38(Content$lambda_0(modifier, painter, contentDescription_0, alignment, contentScale, alpha, colorFilter, clipToBounds_0, $changed));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.ul6_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).g96 = function (_this__u8e3s4, measurables, constraints) {
    return this.ul6_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).x3 = function () {
    return this.ul6_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function AsyncImage$lambda($state, $contentDescription, $modifier, $transform, $onState, $alignment, $contentScale, $alpha, $colorFilter, $filterQuality, $clipToBounds, $$changed, $$changed1) {
    return function ($composer, $force) {
      AsyncImage_0($state, $contentDescription, $modifier, $transform, $onState, $alignment, $contentScale, $alpha, $colorFilter, $filterQuality, $clipToBounds, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  function Content$lambda($this$Layout, _unused_var__etf5q3, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.v5h_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.v5h_1);
    return $this$Layout.q7y(tmp, tmp_0, VOID, Content$lambda$lambda);
  }
  function Content$lambda$lambda($this$layout) {
    return Unit_instance;
  }
  function Content$lambda_0($modifier, $painter, $contentDescription, $alignment, $contentScale, $alpha, $colorFilter, $clipToBounds, $$changed) {
    return function ($composer, $force) {
      Content($modifier, $painter, $contentDescription, $alignment, $contentScale, $alpha, $colorFilter, $clipToBounds, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var coil3_compose_AsyncImagePainter_Input$stable;
  var coil3_compose_AsyncImagePainter_State_Empty$stable;
  var coil3_compose_AsyncImagePainter_State_Loading$stable;
  var coil3_compose_AsyncImagePainter_State_Success$stable;
  var coil3_compose_AsyncImagePainter_State_Error$stable;
  var coil3_compose_AsyncImagePainter$stable;
  function Empty() {
  }
  protoOf(Empty).vl6 = function () {
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
    return Empty_instance;
  }
  function Loading(painter) {
    this.wl6_1 = painter;
  }
  protoOf(Loading).vl6 = function () {
    return this.wl6_1;
  };
  protoOf(Loading).xl6 = function (painter) {
    return new Loading(painter);
  };
  protoOf(Loading).toString = function () {
    return 'Loading(painter=' + toString(this.wl6_1) + ')';
  };
  protoOf(Loading).hashCode = function () {
    return this.wl6_1 == null ? 0 : hashCode(this.wl6_1);
  };
  protoOf(Loading).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Loading))
      return false;
    var tmp0_other_with_cast = other instanceof Loading ? other : THROW_CCE();
    if (!equals(this.wl6_1, tmp0_other_with_cast.wl6_1))
      return false;
    return true;
  };
  function Success(painter, result) {
    this.yl6_1 = painter;
    this.zl6_1 = result;
  }
  protoOf(Success).vl6 = function () {
    return this.yl6_1;
  };
  protoOf(Success).toString = function () {
    return 'Success(painter=' + toString_0(this.yl6_1) + ', result=' + this.zl6_1.toString() + ')';
  };
  protoOf(Success).hashCode = function () {
    var result = hashCode(this.yl6_1);
    result = imul(result, 31) + this.zl6_1.hashCode() | 0;
    return result;
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.yl6_1, tmp0_other_with_cast.yl6_1))
      return false;
    if (!this.zl6_1.equals(tmp0_other_with_cast.zl6_1))
      return false;
    return true;
  };
  function Error_0(painter, result) {
    this.al7_1 = painter;
    this.bl7_1 = result;
  }
  protoOf(Error_0).vl6 = function () {
    return this.al7_1;
  };
  protoOf(Error_0).cl7 = function (painter, result) {
    return new Error_0(painter, result);
  };
  protoOf(Error_0).dl7 = function (painter, result, $super) {
    painter = painter === VOID ? this.al7_1 : painter;
    result = result === VOID ? this.bl7_1 : result;
    return $super === VOID ? this.cl7(painter, result) : $super.cl7.call(this, painter, result);
  };
  protoOf(Error_0).toString = function () {
    return 'Error(painter=' + toString(this.al7_1) + ', result=' + this.bl7_1.toString() + ')';
  };
  protoOf(Error_0).hashCode = function () {
    var result = this.al7_1 == null ? 0 : hashCode(this.al7_1);
    result = imul(result, 31) + this.bl7_1.hashCode() | 0;
    return result;
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.al7_1, tmp0_other_with_cast.al7_1))
      return false;
    if (!this.bl7_1.equals(tmp0_other_with_cast.bl7_1))
      return false;
    return true;
  };
  function AsyncImagePainter$Companion$DefaultTransform$lambda(it) {
    return it;
  }
  function AsyncImagePainter$onRemembered$slambda$slambda(this$0, resultContinuation) {
    this.ml7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).pl7 = function ($this$transformLatest, it, $completion) {
    var tmp = this.ql7($this$transformLatest, it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).i27 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.pl7(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            this.ol7_1;
            suspendResult = emitAll(this.nl7_1, this.ml7_1.jl8_1, this);
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
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).ql7 = function ($this$transformLatest, it, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda(this.ml7_1, completion);
    i.nl7_1 = $this$transformLatest;
    i.ol7_1 = it;
    return i;
  };
  function AsyncImagePainter$onRemembered$slambda$slambda_0(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.pl7($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AsyncImagePainter$onRemembered$slambda$slambda_1(this$0, resultContinuation) {
    this.vl8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).bl9 = function (input, $completion) {
    var tmp = this.cl9(input, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).ma = function (p1, $completion) {
    return this.bl9(p1 instanceof Input ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.xl8_1 = this.vl8_1.il8_1;
            if (!(this.xl8_1 == null)) {
              this.zl8_1 = updateRequest(this.vl8_1, this.wl8_1.el9_1, true);
              this.s9_1 = 2;
              suspendResult = this.xl8_1.gl9(this.wl8_1.dl9_1, this.zl8_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.al9_1 = updateRequest(this.vl8_1, this.wl8_1.el9_1, false);
              this.s9_1 = 1;
              suspendResult = this.wl8_1.dl9_1.ckf(this.al9_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.yl8_1 = toState(ARGUMENT, this.vl8_1);
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.yl8_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.yl8_1;
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
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).cl9 = function (input, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda_1(this.vl8_1, completion);
    i.wl8_1 = input;
    return i;
  };
  function AsyncImagePainter$onRemembered$slambda$slambda_2(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda_1(this$0, resultContinuation);
    var l = function (input, $completion) {
      return i.bl9(input, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k($boundThis) {
    this.hl9_1 = $boundThis;
  }
  protoOf(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k).il9 = function (p0, $completion) {
    return onRemembered$_anonymous_$_anonymous_$updateState_isg8pr(this.hl9_1, p0, $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k).ma = function (p1, $completion) {
    return this.il9((!(p1 == null) ? isInterface(p1, State) : false) ? p1 : THROW_CCE(), $completion);
  };
  function AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k_0($boundThis) {
    var i = new AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k($boundThis);
    var l = function (p0, $completion) {
      return i.il9(p0, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_painter__526xy2($this, _set____db54di) {
    var this_0 = $this.zl7_1;
    painter$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_painter__kk1cey($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.zl7_1;
    painter$factory_0();
    return this_0.c1();
  }
  function _set_alpha__c56vtz($this, _set____db54di) {
    var this_0 = $this.al8_1;
    alpha$factory();
    this_0.n3j(_set____db54di);
    return Unit_instance;
  }
  function _get_alpha__jvxknh($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.al8_1;
    alpha$factory_0();
    return this_0.o3j();
  }
  function _set_colorFilter__ke9voq($this, _set____db54di) {
    var this_0 = $this.bl8_1;
    colorFilter$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_colorFilter__kcfzyi($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.bl8_1;
    colorFilter$factory_0();
    return this_0.c1();
  }
  function _set_rememberJob__d3by0b($this, value) {
    var tmp0_safe_receiver = $this.cl8_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s15();
    }
    $this.cl8_1 = value;
  }
  function updateRequest($this, request, isPreview) {
    var sizeResolver = request.pkd_1;
    if (isInterface(sizeResolver, DrawScopeSizeResolver)) {
      sizeResolver.jl9($this.xl7_1);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'coil3.request.Builder.target' call
    var this_0 = request.ekw().vkv(new _no_name_provided__qut3iv(request, $this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.AsyncImagePainter.updateRequest.<anonymous>' call
    if (request.tkd_1.pkv_1 == null) {
      this_0.xkv(Companion_getInstance_4().skv_1);
    }
    if (request.tkd_1.qkv_1 == null) {
      this_0.ykv(toScale($this.gl8_1));
    }
    if (request.tkd_1.rkv_1 == null) {
      this_0.zkv(Precision_INEXACT_getInstance());
    }
    if (isPreview) {
      this_0.wkv(EmptyCoroutineContext_getInstance());
    }
    return this_0.a2u();
  }
  function updateState($this, state) {
    var previous = $this.ll8_1.c1();
    var current = $this.el8_1(state);
    $this.ll8_1.a1y(current);
    var tmp0_elvis_lhs = maybeNewCrossfadePainter(previous, current, $this.gl8_1);
    _set_painter__526xy2($this, tmp0_elvis_lhs == null ? current.vl6() : tmp0_elvis_lhs);
    if (!(previous.vl6() === current.vl6())) {
      var tmp = previous.vl6();
      var tmp1_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.x2z();
      }
      var tmp_0 = current.vl6();
      var tmp2_safe_receiver = (!(tmp_0 == null) ? isInterface(tmp_0, RememberObserver) : false) ? tmp_0 : null;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.v2z();
      }
    }
    var tmp3_safe_receiver = $this.fl8_1;
    if (tmp3_safe_receiver == null)
      null;
    else
      tmp3_safe_receiver(current);
  }
  function toState(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof SuccessResult) {
      tmp = new Success(asPainter(_this__u8e3s4.ikg_1, _this__u8e3s4.jkg_1.vkc_1, $this.hl8_1), _this__u8e3s4);
    } else {
      if (_this__u8e3s4 instanceof ErrorResult) {
        var tmp1_safe_receiver = _this__u8e3s4.ikh_1;
        tmp = new Error_0(tmp1_safe_receiver == null ? null : asPainter(tmp1_safe_receiver, _this__u8e3s4.jkh_1.vkc_1, $this.hl8_1), _this__u8e3s4);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function Input(imageLoader, request, modelEqualityDelegate) {
    this.dl9_1 = imageLoader;
    this.el9_1 = request;
    this.fl9_1 = modelEqualityDelegate;
  }
  protoOf(Input).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof Input) {
      tmp_1 = equals(this.dl9_1, other.dl9_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.fl9_1, other.fl9_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.fl9_1.kl9(this.el9_1, other.el9_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Input).hashCode = function () {
    var result = hashCode(this.dl9_1);
    result = imul(31, result) + hashCode(this.fl9_1) | 0;
    result = imul(31, result) + this.fl9_1.ll9(this.el9_1) | 0;
    return result;
  };
  protoOf(Input).toString = function () {
    return 'Input(imageLoader=' + toString_0(this.dl9_1) + ', request=' + this.el9_1.toString() + ', modelEqualityDelegate=' + toString_0(this.fl9_1) + ')';
  };
  function State() {
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.ml9_1 = AsyncImagePainter$Companion$DefaultTransform$lambda;
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.nl9_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.nl9_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.nl9_1;
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
  function onRemembered$_anonymous_$_anonymous_$updateState_isg8pr(receiver, p0, $completion) {
    updateState(receiver, p0);
    return Unit_instance;
  }
  function AsyncImagePainter$onRemembered$slambda(this$0, resultContinuation) {
    this.wl9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var this_0 = this.wl9_1.yl7_1;
            var tmp_0 = transformLatest(this_0, AsyncImagePainter$onRemembered$slambda$slambda_0(this.wl9_1, null));
            var tmp_1 = mapLatest(tmp_0, AsyncImagePainter$onRemembered$slambda$slambda_2(this.wl9_1, null));
            var tmp_2 = AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k_0(this.wl9_1);
            suspendResult = tmp_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
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
  protoOf(AsyncImagePainter$onRemembered$slambda).b20 = function ($this$launch, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda(this.wl9_1, completion);
    i.xl9_1 = $this$launch;
    return i;
  };
  function AsyncImagePainter$onRemembered$slambda_0(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv($request, this$0) {
    this.yl9_1 = $request;
    this.zl9_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv).pkj = function (placeholder) {
    var painter = placeholder == null ? null : asPainter(placeholder, this.yl9_1.vkc_1, this.zl9_1.hl8_1);
    updateState(this.zl9_1, new Loading(painter));
    return Unit_instance;
  };
  protoOf(_no_name_provided__qut3iv).lkh = function (error) {
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    return Unit_instance;
  };
  protoOf(_no_name_provided__qut3iv).gkh = function (result) {
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    return Unit_instance;
  };
  function AsyncImagePainter(input) {
    Companion_getInstance_9();
    Painter.call(this);
    this.xl7_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.AsyncImagePainter.restartSignal.<anonymous>' call
    this_0.v1t(Unit_instance);
    tmp.yl7_1 = this_0;
    this.zl7_1 = mutableStateOf(null);
    this.al8_1 = mutableFloatStateOf(1.0);
    this.bl8_1 = mutableStateOf(null);
    this.cl8_1 = null;
    this.el8_1 = Companion_getInstance_9().ml9_1;
    this.fl8_1 = null;
    this.gl8_1 = Companion_getInstance_0().z7w_1;
    this.hl8_1 = Companion_getInstance_1().i6e_1;
    this.il8_1 = null;
    this.jl8_1 = MutableStateFlow(input);
    this.kl8_1 = asStateFlow(this.jl8_1);
    this.ll8_1 = MutableStateFlow(Empty_instance);
    this.ml8_1 = asStateFlow(this.ll8_1);
  }
  protoOf(AsyncImagePainter).ala = function () {
    var tmp = this.dl8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('scope');
    }
  };
  protoOf(AsyncImagePainter).i6o = function () {
    var tmp0_safe_receiver = _get_painter__kk1cey(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i6o();
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new Size(tmp_0)) == null) {
      tmp = Companion_getInstance_5().t5h_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AsyncImagePainter).h6o = function (_this__u8e3s4) {
    this.xl7_1.v1t(new Size(_this__u8e3s4.z5g()));
    var tmp0_safe_receiver = _get_painter__kk1cey(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.AsyncImagePainter.onDraw.<anonymous>' call
      tmp0_safe_receiver.s6o(_this__u8e3s4, _this__u8e3s4.z5g(), _get_alpha__jvxknh(this), _get_colorFilter__kcfzyi(this));
    }
  };
  protoOf(AsyncImagePainter).j6o = function (alpha) {
    _set_alpha__c56vtz(this, alpha);
    return true;
  };
  protoOf(AsyncImagePainter).k6o = function (colorFilter) {
    _set_colorFilter__ke9voq(this, colorFilter);
    return true;
  };
  protoOf(AsyncImagePainter).v2z = function () {
    // Inline function 'androidx.compose.ui.util.trace' call
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v2z();
    }
    var tmp_0 = this.ala();
    _set_rememberJob__d3by0b(this, launch(tmp_0, VOID, VOID, AsyncImagePainter$onRemembered$slambda_0(this, null)));
    return Unit_instance;
  };
  protoOf(AsyncImagePainter).x2z = function () {
    _set_rememberJob__d3by0b(this, null);
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x2z();
    }
  };
  protoOf(AsyncImagePainter).w2z = function () {
    _set_rememberJob__d3by0b(this, null);
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2z();
    }
  };
  function rememberAsyncImagePainter(model, imageLoader, transform, onState, contentScale, filterQuality, $composer, $changed, $default) {
    var transform_0 = transform;
    var onState_0 = onState;
    var contentScale_0 = contentScale;
    var filterQuality_0 = filterQuality;
    var $composer_0 = $composer;
    $composer_0.y30(1066092719);
    if (!(($default & 4) === 0))
      transform_0 = Companion_getInstance_9().ml9_1;
    if (!(($default & 8) === 0))
      onState_0 = null;
    if (!(($default & 16) === 0))
      contentScale_0 = Companion_getInstance_0().z7w_1;
    if (!(($default & 32) === 0))
      filterQuality_0 = Companion_getInstance_1().i6e_1;
    if (isTraceInProgress()) {
      traceEventStart(1066092719, $changed, -1, 'coil3.compose.rememberAsyncImagePainter (AsyncImagePainter.kt:118)');
    }
    var tmp0 = rememberAsyncImagePainter_0(AsyncImageState_0(model, imageLoader, $composer_0, 14 & $changed | 112 & $changed), transform_0, onState_0, contentScale_0, filterQuality_0, $composer_0, 112 & $changed >> 3 | 896 & $changed >> 3 | 7168 & $changed >> 3 | 57344 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z30();
    return tmp0;
  }
  function rememberAsyncImagePainter_0(state, transform, onState, contentScale, filterQuality, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y30(-1242991349);
    if (isTraceInProgress()) {
      traceEventStart(-1242991349, $changed, -1, 'coil3.compose.rememberAsyncImagePainter (AsyncImagePainter.kt:133)');
    }
    // Inline function 'androidx.compose.ui.util.trace' call
    var request = requestOf(state.rl6_1, $composer_0, 0);
    validateRequest(request);
    var input = new Input(state.tl6_1, request, state.sl6_1);
    $composer_0.y30(1596902301);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance_2().l2u_1) {
      // Inline function 'coil3.compose.rememberAsyncImagePainter.<anonymous>.<anonymous>' call
      var value = new AsyncImagePainter(input);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.z30();
    var painter = tmp0_group;
    painter.dl8_1 = rememberImmediateCoroutineScope($composer_0, 0);
    painter.el8_1 = transform;
    painter.fl8_1 = onState;
    painter.gl8_1 = contentScale;
    painter.hl8_1 = filterQuality;
    painter.il8_1 = previewHandler($composer_0, 0);
    painter.jl8_1.a1y(input);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z30();
    return painter;
  }
  function validateRequest(request) {
    var tmp0_subject = request.wkc_1;
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
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      $composer_0.y30(-924922939);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalAsyncImagePreviewHandler();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.n33(this_1);
      sourceInformationMarkerEnd($composer_2);
      $composer_0.z30();
      tmp = tmp0_0;
    } else {
      $composer_0.y30(-924865434);
      $composer_0.z30();
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
  function ConstraintsSizeResolver$size$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ConstraintsSizeResolver$size$slambda).kla = function (it, $completion) {
    var tmp = this.lla(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ConstraintsSizeResolver$size$slambda).ma = function (p1, $completion) {
    return this.kla(p1 instanceof Constraints ? p1.v5h_1 : THROW_CCE(), $completion);
  };
  protoOf(ConstraintsSizeResolver$size$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          return !_Constraints___get_isZero__impl__fm0efw(this.jla_1);
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ConstraintsSizeResolver$size$slambda).lla = function (it, completion) {
    var i = new ConstraintsSizeResolver$size$slambda(completion);
    i.jla_1 = it;
    return i;
  };
  function ConstraintsSizeResolver$size$slambda_0(resultContinuation) {
    var i = new ConstraintsSizeResolver$size$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.kla(it.v5h_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ConstraintsSizeResolver$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.z96($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function $sizeCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ula_1 = _this__u8e3s4;
  }
  protoOf($sizeCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = first(this.ula_1.vla_1, ConstraintsSizeResolver$size$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult.v5h_1;
            return toSize(ARGUMENT);
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
  function ConstraintsSizeResolver() {
    this.vla_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
  }
  protoOf(ConstraintsSizeResolver).skj = function ($completion) {
    var tmp = new $sizeCOROUTINE$0(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ConstraintsSizeResolver).j7y = function (_this__u8e3s4, measurable, constraints) {
    this.vla_1.v1t(new Constraints(constraints));
    var placeable = measurable.k7y(constraints);
    var tmp = placeable.l7y_1;
    var tmp_0 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp, tmp_0, VOID, ConstraintsSizeResolver$measure$lambda(placeable));
  };
  function rememberConstraintsSizeResolver($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y30(-34261202);
    if (isTraceInProgress()) {
      traceEventStart(-34261202, $changed, -1, 'coil3.compose.rememberConstraintsSizeResolver (ConstraintsSizeResolver.kt:21)');
    }
    $composer_0.y30(-1474440112);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance_2().l2u_1) {
      // Inline function 'coil3.compose.rememberConstraintsSizeResolver.<anonymous>' call
      var value = new ConstraintsSizeResolver();
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.z30();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z30();
    return tmp1_group;
  }
  function DrawScopeSizeResolver() {
  }
  var coil3_compose_ImagePainter$stable;
  function ImagePainter(image) {
    Painter.call(this);
    this.clb_1 = image;
  }
  protoOf(ImagePainter).i6o = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.<get-intrinsicSize>.<anonymous>' call
    var it = this.clb_1.x5g();
    var tmp = it > 0 ? it : NaN;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.<get-intrinsicSize>.<anonymous>' call
    var it_0 = this.clb_1.y5g();
    var tmp$ret$3 = it_0 > 0 ? it_0 : NaN;
    return Size_0(tmp, tmp$ret$3);
  };
  protoOf(ImagePainter).h6o = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
    var it = this.clb_1.x5g();
    var scaleX = it > 0 ? _Size___get_width__impl__58y75t(_this__u8e3s4.z5g()) / it : 1.0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
    var it_0 = this.clb_1.y5g();
    var scaleY = it_0 > 0 ? _Size___get_height__impl__a04p02(_this__u8e3s4.z5g()) / it_0 : 1.0;
    var pivot = Companion_getInstance_6().p5g_1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _this__u8e3s4.v6k();
    var previousSize = $this$with.z5g();
    $this$with.q5w().n69();
    try {
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      $this$with.p6k().q6l(scaleX, scaleY, pivot);
      // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
      this.clb_1.mkw(get_nativeCanvas_0(_this__u8e3s4.v6k().q5w()));
    }finally {
      $this$with.q5w().o69();
      $this$with.o6k(previousSize);
    }
  };
  function get_LocalAsyncImageModelEqualityDelegate() {
    _init_properties_LocalAsyncImageModelEqualityDelegate_kt__he9roi();
    return LocalAsyncImageModelEqualityDelegate;
  }
  var LocalAsyncImageModelEqualityDelegate;
  function AsyncImageModelEqualityDelegate$Companion$Default$1() {
  }
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).kl9 = function (self_0, other) {
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
    return equals(self_0.vkc_1, other.vkc_1) && equals(self_0.wkc_1, other.wkc_1) && self_0.zkc_1 == other.zkc_1 && equals(self_0.akd_1, other.akd_1) && self_0.bkd_1 == other.bkd_1 && equals(self_0.pkd_1, other.pkd_1) && self_0.qkd_1.equals(other.qkd_1) && self_0.rkd_1.equals(other.rkd_1);
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).ll9 = function (self_0) {
    if (!(self_0 instanceof ImageRequest)) {
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = self_0 == null ? null : hashCode(self_0);
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var result = hashCode(self_0.vkc_1);
    result = imul(31, result) + hashCode(self_0.wkc_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = self_0.zkc_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    result = imul(31, result) + hashCode(self_0.akd_1) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = self_0.bkd_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    result = imul(31, result) + hashCode(self_0.pkd_1) | 0;
    result = imul(31, result) + self_0.qkd_1.hashCode() | 0;
    result = imul(31, result) + self_0.rkd_1.hashCode() | 0;
    return result;
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).toString = function () {
    return 'AsyncImageModelEqualityDelegate.Default';
  };
  function AsyncImageModelEqualityDelegate$Companion$AllProperties$1() {
  }
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).kl9 = function (self_0, other) {
    return equals(self_0, other);
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).ll9 = function (self_0) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = self_0 == null ? null : hashCode(self_0);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).toString = function () {
    return 'AsyncImageModelEqualityDelegate.AllProperties';
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.dlb_1 = new AsyncImageModelEqualityDelegate$Companion$Default$1();
    var tmp_0 = this;
    tmp_0.elb_1 = new AsyncImageModelEqualityDelegate$Companion$AllProperties$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function LocalAsyncImageModelEqualityDelegate$lambda() {
    _init_properties_LocalAsyncImageModelEqualityDelegate_kt__he9roi();
    return Companion_getInstance_10().dlb_1;
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
    this.flb_1 = function_0;
  }
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).gl9 = function (imageLoader, request, $completion) {
    return this.flb_1(imageLoader, request, $completion);
  };
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).x3 = function () {
    return this.flb_1;
  };
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, AsyncImagePreviewHandler) : false) {
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
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function AsyncImagePreviewHandler$Companion$Default$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).qlb = function (imageLoader, request, $completion) {
    var tmp = this.rlb(imageLoader, request, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).i27 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, ImageLoader) : false) ? p1 : THROW_CCE();
    return this.qlb(tmp, p2 instanceof ImageRequest ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.olb_1.ckf(this.plb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_0;
            if (result instanceof SuccessResult) {
              tmp_0 = new Success(asPainter(result.ikg_1, this.plb_1.vkc_1), result);
            } else {
              if (result instanceof ErrorResult) {
                var tmp0_safe_receiver = result.ikh_1;
                tmp_0 = new Error_0(tmp0_safe_receiver == null ? null : asPainter(tmp0_safe_receiver, this.plb_1.vkc_1), result);
              } else {
                noWhenBranchMatchedException();
              }
            }

            return tmp_0;
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
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).rlb = function (imageLoader, request, completion) {
    var i = new AsyncImagePreviewHandler$Companion$Default$slambda(completion);
    i.olb_1 = imageLoader;
    i.plb_1 = request;
    return i;
  };
  function AsyncImagePreviewHandler$Companion$Default$slambda_0(resultContinuation) {
    var i = new AsyncImagePreviewHandler$Companion$Default$slambda(resultContinuation);
    var l = function (imageLoader, request, $completion) {
      return i.qlb(imageLoader, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = AsyncImagePreviewHandler$Companion$Default$slambda_0(null);
    tmp.slb_1 = new sam$coil3_compose_AsyncImagePreviewHandler$0(tmp_0);
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function AsyncImagePreviewHandler() {
  }
  function LocalAsyncImagePreviewHandler$lambda() {
    _init_properties_LocalAsyncImagePreviewHandler_kt__hcje6y();
    return Companion_getInstance_11().slb_1;
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
  function ContentPainterElement(painter, alignment, contentScale, alpha, colorFilter) {
    ModifierNodeElement.call(this);
    this.ulb_1 = painter;
    this.vlb_1 = alignment;
    this.wlb_1 = contentScale;
    this.xlb_1 = alpha;
    this.ylb_1 = colorFilter;
  }
  protoOf(ContentPainterElement).k39 = function () {
    return new ContentPainterNode(this.ulb_1, this.vlb_1, this.wlb_1, this.xlb_1, this.ylb_1);
  };
  protoOf(ContentPainterElement).zlb = function (node) {
    var intrinsicsChanged = !equals(node.nlc_1.i6o(), this.ulb_1.i6o());
    node.nlc_1 = this.ulb_1;
    node.olc_1 = this.vlb_1;
    node.plc_1 = this.wlb_1;
    node.qlc_1 = this.xlb_1;
    node.rlc_1 = this.ylb_1;
    if (intrinsicsChanged) {
      invalidateMeasurement(node);
    }
    invalidateDraw(node);
  };
  protoOf(ContentPainterElement).v7t = function (node) {
    return this.zlb(node instanceof ContentPainterNode ? node : THROW_CCE());
  };
  protoOf(ContentPainterElement).toString = function () {
    return 'ContentPainterElement(painter=' + toString_0(this.ulb_1) + ', alignment=' + toString_0(this.vlb_1) + ', contentScale=' + toString_0(this.wlb_1) + ', alpha=' + this.xlb_1 + ', colorFilter=' + toString(this.ylb_1) + ')';
  };
  protoOf(ContentPainterElement).hashCode = function () {
    var result = hashCode(this.ulb_1);
    result = imul(result, 31) + hashCode(this.vlb_1) | 0;
    result = imul(result, 31) + hashCode(this.wlb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.xlb_1) | 0;
    result = imul(result, 31) + (this.ylb_1 == null ? 0 : hashCode(this.ylb_1)) | 0;
    return result;
  };
  protoOf(ContentPainterElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContentPainterElement))
      return false;
    var tmp0_other_with_cast = other instanceof ContentPainterElement ? other : THROW_CCE();
    if (!equals(this.ulb_1, tmp0_other_with_cast.ulb_1))
      return false;
    if (!equals(this.vlb_1, tmp0_other_with_cast.vlb_1))
      return false;
    if (!equals(this.wlb_1, tmp0_other_with_cast.wlb_1))
      return false;
    if (!equals(this.xlb_1, tmp0_other_with_cast.xlb_1))
      return false;
    if (!equals(this.ylb_1, tmp0_other_with_cast.ylb_1))
      return false;
    return true;
  };
  function calculateScaledSize($this, dstSize) {
    if (Size__isEmpty_impl_o9ye97(dstSize)) {
      return Companion_getInstance_5().s5h_1;
    }
    var intrinsicSize = $this.nlc_1.i6o();
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
    var scaleFactor = $this.plc_1.g7y(srcSize, dstSize);
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
    var painter = $this.nlc_1;
    var hasBoundedSize = _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && _Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints);
    var intrinsicSize = painter.i6o();
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(intrinsicSize).equals(new Long(2143289344, 2143289344))) {
      var tmp;
      if (!hasBoundedSize) {
        tmp = true;
      } else {
        var tmp_0;
        if (painter instanceof AsyncImagePainter) {
          tmp_0 = painter.ml8_1.c1().vl6() == null;
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
      $this$layout.i7y($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function ContentPainterNode(painter, alignment, contentScale, alpha, colorFilter) {
    Node.call(this);
    this.nlc_1 = painter;
    this.olc_1 = alignment;
    this.plc_1 = contentScale;
    this.qlc_1 = alpha;
    this.rlc_1 = colorFilter;
  }
  protoOf(ContentPainterNode).d7r = function () {
    return false;
  };
  protoOf(ContentPainterNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.k7y(modifyConstraints(this, constraints));
    var tmp = placeable.l7y_1;
    var tmp_0 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp, tmp_0, VOID, ContentPainterNode$measure$lambda(placeable));
  };
  protoOf(ContentPainterNode).r7y = function (_this__u8e3s4, measurable, height) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.nlc_1.i6o();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, VOID, VOID, height));
      var layoutWidth = measurable.s7y(height);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      tmp = Math.max(a, layoutWidth);
    } else {
      tmp = measurable.s7y(height);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).t7y = function (_this__u8e3s4, measurable, height) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.nlc_1.i6o();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, VOID, VOID, height));
      var layoutWidth = measurable.u7y(height);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      tmp = Math.max(a, layoutWidth);
    } else {
      tmp = measurable.u7y(height);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).v7y = function (_this__u8e3s4, measurable, width) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.nlc_1.i6o();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, width));
      var layoutHeight = measurable.w7y(width);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      tmp = Math.max(a, layoutHeight);
    } else {
      tmp = measurable.w7y(width);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).x7y = function (_this__u8e3s4, measurable, width) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.nlc_1.i6o();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      var constraints = modifyConstraints(this, Constraints_0(VOID, width));
      var layoutHeight = measurable.y7y(width);
      // Inline function 'kotlin.math.max' call
      var a = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      tmp = Math.max(a, layoutHeight);
    } else {
      tmp = measurable.y7y(width);
    }
    return tmp;
  };
  protoOf(ContentPainterNode).q7s = function (_this__u8e3s4) {
    var scaledSize = calculateScaledSize(this, _this__u8e3s4.z5g());
    var _destruct__k2r9zo = this.olc_1.h7q(toIntSize(scaledSize), toIntSize(_this__u8e3s4.z5g()), _this__u8e3s4.r6k());
    // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
    var dx = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
    var dy = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
    _this__u8e3s4.v6k().p6k().q69(dx, dy);
    try {
      // Inline function 'coil3.compose.internal.ContentPainterNode.draw.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      this.nlc_1.s6o(_this__u8e3s4, scaledSize, this.qlc_1, this.rlc_1);
    }finally {
      _this__u8e3s4.v6k().p6k().q69(-dx, -dy);
    }
    _this__u8e3s4.s7s();
  };
  var coil3_compose_internal_CrossfadePainter$stable;
  function _set_invalidateTick__a7eowv($this, _set____db54di) {
    var this_0 = $this.eld_1;
    invalidateTick$factory();
    this_0.l3m(_set____db54di);
    return Unit_instance;
  }
  function _get_invalidateTick__zalx0t($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.eld_1;
    invalidateTick$factory_0();
    return this_0.m3m();
  }
  function _set_maxAlpha__j4cq0t($this, _set____db54di) {
    var this_0 = $this.hld_1;
    maxAlpha$factory();
    this_0.n3j(_set____db54di);
    return Unit_instance;
  }
  function _get_maxAlpha__6bgek1($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.hld_1;
    maxAlpha$factory_0();
    return this_0.o3j();
  }
  function _set_colorFilter__ke9voq_0($this, _set____db54di) {
    var this_0 = $this.ild_1;
    colorFilter$factory_1();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_colorFilter__kcfzyi_0($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.ild_1;
    colorFilter$factory_2();
    return this_0.c1();
  }
  function computeIntrinsicSize($this) {
    var tmp0_safe_receiver = $this.ylc_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i6o();
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new Size(tmp_0)) == null) {
      tmp = Companion_getInstance_5().s5h_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var startSize = tmp;
    var tmp2_safe_receiver = $this.zlc_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i6o();
    var tmp_1;
    var tmp_2 = tmp3_elvis_lhs;
    if ((tmp_2 == null ? null : new Size(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_5().s5h_1;
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
    if ($this.dld_1) {
      if (isStartSpecified)
        return startSize;
      if (isEndSpecified)
        return endSize;
    }
    return Companion_getInstance_5().t5h_1;
  }
  function drawPainter(_this__u8e3s4, $this, painter, alpha) {
    if (painter == null || alpha <= 0)
      return Unit_instance;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var size = _this__u8e3s4.z5g();
    var drawSize = computeDrawSize($this, painter.i6o(), size);
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(size).equals(new Long(2143289344, 2143289344))) {
      tmp = true;
    } else {
      tmp = Size__isEmpty_impl_o9ye97(size);
    }
    if (tmp) {
      painter.s6o(_this__u8e3s4, drawSize, alpha, _get_colorFilter__kcfzyi_0($this));
    } else {
      // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
      var horizontal = (_Size___get_width__impl__58y75t(size) - _Size___get_width__impl__58y75t(drawSize)) / 2;
      var vertical = (_Size___get_height__impl__a04p02(size) - _Size___get_height__impl__a04p02(drawSize)) / 2;
      _this__u8e3s4.v6k().p6k().n6l(horizontal, vertical, horizontal, vertical);
      var tmp_0;
      try {
        painter.s6o(_this__u8e3s4, drawSize, alpha, _get_colorFilter__kcfzyi_0($this));
        tmp_0 = Unit_instance;
      }finally {
        _this__u8e3s4.v6k().p6k().n6l(-horizontal, -vertical, -horizontal, -vertical);
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
    return times_0(srcSize, $this.ald_1.g7y(srcSize, dstSize));
  }
  function CrossfadePainter(start, end, contentScale, durationMillis, fadeStart, preferExactIntrinsicSize) {
    Painter.call(this);
    this.ylc_1 = start;
    this.zlc_1 = end;
    this.ald_1 = contentScale;
    this.bld_1 = durationMillis;
    this.cld_1 = fadeStart;
    this.dld_1 = preferExactIntrinsicSize;
    this.eld_1 = mutableIntStateOf(0);
    this.fld_1 = null;
    this.gld_1 = false;
    this.hld_1 = mutableFloatStateOf(1.0);
    this.ild_1 = mutableStateOf(null);
  }
  protoOf(CrossfadePainter).i6o = function () {
    return computeIntrinsicSize(this);
  };
  protoOf(CrossfadePainter).h6o = function (_this__u8e3s4) {
    if (this.gld_1) {
      drawPainter(_this__u8e3s4, this, this.zlc_1, _get_maxAlpha__6bgek1(this));
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.fld_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new ValueTimeMark(tmp_0)) == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ValueTimeMark(Monotonic_instance.hf());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.internal.CrossfadePainter.onDraw.<anonymous>' call
      this.fld_1 = this_0.jn_1;
      tmp = this_0.jn_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var startTime = tmp;
    // Inline function 'kotlin.Long.div' call
    var this_1 = _Duration___get_inWholeMilliseconds__impl__msfiry(ValueTimeMark__elapsedNow_impl_eonqvs(startTime));
    var other = this.bld_1;
    var percent = this_1.v3() / other;
    var endAlpha = coerceIn(percent, 0.0, 1.0) * _get_maxAlpha__6bgek1(this);
    var startAlpha = this.cld_1 ? _get_maxAlpha__6bgek1(this) - endAlpha : _get_maxAlpha__6bgek1(this);
    this.gld_1 = percent >= 1.0;
    drawPainter(_this__u8e3s4, this, this.ylc_1, startAlpha);
    drawPainter(_this__u8e3s4, this, this.zlc_1, endAlpha);
    if (this.gld_1) {
      this.ylc_1 = null;
    } else {
      var _unary__edvuaz = _get_invalidateTick__zalx0t(this);
      _set_invalidateTick__a7eowv(this, _unary__edvuaz + 1 | 0);
    }
  };
  protoOf(CrossfadePainter).j6o = function (alpha) {
    _set_maxAlpha__j4cq0t(this, alpha);
    return true;
  };
  protoOf(CrossfadePainter).k6o = function (colorFilter) {
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
      return _get_colorFilter__kcfzyi_0(receiver);
    }, function (receiver, value) {
      return _set_colorFilter__ke9voq_0(receiver, value);
    });
  }
  function colorFilter$factory_2() {
    return getPropertyCallableRef('colorFilter', 1, KMutableProperty1, function (receiver) {
      return _get_colorFilter__kcfzyi_0(receiver);
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
    return equals(_this__u8e3s4, Companion_getInstance_0().z7w_1) || equals(_this__u8e3s4, Companion_getInstance_0().c7x_1) ? Scale_FIT_getInstance() : Scale_FILL_getInstance();
  }
  function AsyncImageState(model, modelEqualityDelegate, imageLoader) {
    this.rl6_1 = model;
    this.sl6_1 = modelEqualityDelegate;
    this.tl6_1 = imageLoader;
  }
  protoOf(AsyncImageState).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AsyncImageState) {
      tmp_1 = equals(this.sl6_1, other.sl6_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.sl6_1.kl9(this.rl6_1, other.rl6_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.tl6_1, other.tl6_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AsyncImageState).hashCode = function () {
    var result = hashCode(this.sl6_1);
    result = imul(31, result) + this.sl6_1.ll9(this.rl6_1) | 0;
    result = imul(31, result) + hashCode(this.tl6_1) | 0;
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
    var tmp0 = $composer_1.n33(this_0);
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
      tmp = Companion_getInstance_9().ml9_1;
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
    $composer_0.y30(-329318062);
    if (isTraceInProgress()) {
      traceEventStart(-329318062, $changed, -1, 'coil3.compose.internal.requestOfWithSizeResolver (utils.kt:64)');
    }
    var tmp;
    if (model instanceof ImageRequest) {
      tmp = !(model.tkd_1.pkv_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.z30();
      return model;
    }
    var tmp_0;
    if (equals(contentScale, Companion_getInstance_0().d7x_1)) {
      $composer_0.y30(-858313867);
      $composer_0.z30();
      tmp_0 = Companion_getInstance_4().skv_1;
    } else {
      $composer_0.y30(-858270839);
      var tmp1_group = rememberConstraintsSizeResolver($composer_0, 0);
      $composer_0.z30();
      tmp_0 = tmp1_group;
    }
    var sizeResolver = tmp_0;
    if (model instanceof ImageRequest) {
      $composer_0.y30(-858186178);
      $composer_0.y30(1219243085);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.f2r(model) | $composer_0.f2r(sizeResolver));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_1;
      if (invalid || it === Companion_getInstance_2().l2u_1) {
        // Inline function 'coil3.compose.internal.requestOfWithSizeResolver.<anonymous>' call
        var value = model.ekw().xkv(sizeResolver).a2u();
        $composer_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp3_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.z30();
      $composer_0.z30();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.z30();
      return tmp3_group;
    } else {
      $composer_0.y30(-858022374);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalPlatformContext();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.n33(this_0);
      sourceInformationMarkerEnd($composer_1);
      var context = tmp0;
      $composer_0.y30(1219249950);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!($composer_0.f2r(context) | $composer_0.f2r(model)) | $composer_0.f2r(sizeResolver));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.w32();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_2().l2u_1) {
        // Inline function 'coil3.compose.internal.requestOfWithSizeResolver.<anonymous>' call
        var value_0 = Builder_init_$Create$(context).ukv(model).xkv(sizeResolver).a2u();
        $composer_0.h33(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp5_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.z30();
      $composer_0.z30();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.z30();
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
    $composer_0.y30(1319639034);
    if (isTraceInProgress()) {
      traceEventStart(1319639034, $changed, -1, 'coil3.compose.internal.requestOf (utils.kt:45)');
    }
    if (model instanceof ImageRequest) {
      $composer_0.y30(-72322677);
      $composer_0.z30();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.z30();
      return model;
    } else {
      $composer_0.y30(-72283431);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalPlatformContext();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.n33(this_0);
      sourceInformationMarkerEnd($composer_1);
      var context = tmp0;
      $composer_0.y30(690407039);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.f2r(context) | $composer_0.f2r(model));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp;
      if (invalid || it === Companion_getInstance_2().l2u_1) {
        // Inline function 'coil3.compose.internal.requestOf.<anonymous>' call
        var value = Builder_init_$Create$(context).ukv(model).a2u();
        $composer_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.z30();
      $composer_0.z30();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.z30();
      return tmp1_group;
    }
  }
  function rememberImmediateCoroutineScope($composer, $changed) {
    _init_properties_utils_kt__i7zv1b();
    var $composer_0 = $composer;
    $composer_0.y30(357321100);
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
    var it = $composer_1.w32();
    var tmp;
    if (false || it === Companion_getInstance_2().l2u_1) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_1.h33(value);
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
    var tmp0 = $composer_2.n33(this_0);
    sourceInformationMarkerEnd($composer_2);
    var isPreview = tmp0;
    $composer_0.y30(-497161116);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.f2r(scope) | $composer_0.g32(isPreview));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_2().l2u_1) {
      // Inline function 'coil3.compose.internal.rememberImmediateCoroutineScope.<anonymous>' call
      var tmp_2;
      if (isPreview) {
        tmp_2 = scope.h14().hj(Dispatchers_getInstance().b1h_1);
      } else {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.compose.internal.rememberImmediateCoroutineScope.<anonymous>.<anonymous>' call
        var $this$run = scope.h14();
        tmp_2 = $this$run.hj(resolveImmediateDispatcher($this$run));
      }
      var context = tmp_2;
      var value_0 = CoroutineScope_0(context);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.z30();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z30();
    return tmp1_group_0;
  }
  function resolveImmediateDispatcher(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var dispatcher = _this__u8e3s4.fa(Key_getInstance());
    if (dispatcher instanceof MainCoroutineDispatcher) {
      try {
        return dispatcher.y1g();
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
    return !(_this__u8e3s4 === 2147483647) ? new Pixels(Dimension(_this__u8e3s4)) : Undefined_instance;
  }
  function transformOf$lambda($placeholder, $fallback, $error) {
    return function (state) {
      var tmp;
      if (state instanceof Loading) {
        tmp = !($placeholder == null) ? state.xl6($placeholder) : state;
      } else {
        if (state instanceof Error_0) {
          var tmp_0;
          var tmp_1 = state.bl7_1.kkh_1;
          if (tmp_1 instanceof NullRequestDataException) {
            tmp_0 = !($fallback == null) ? state.dl7($fallback) : state;
          } else {
            tmp_0 = !($error == null) ? state.dl7($error) : state;
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
      return Unit_instance;
    };
  }
  function contentDescription$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_7().na6_1);
      return Unit_instance;
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
        var this_0 = Dispatchers_getInstance().e1h().y1g();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.compose.internal.immediateDispatcher.<anonymous>' call
        this_0.d1c(EmptyCoroutineContext_getInstance());
        tmp = this_0;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_0 = Dispatchers_getInstance().b1h_1;
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
      tmp = current.zl6_1;
    } else {
      if (current instanceof Error_0) {
        tmp = current.bl7_1;
      } else {
        return null;
      }
    }
    var result = tmp;
    if (!(result instanceof SuccessResult)) {
      return null;
    }
    if (result.kkg_1.equals(DataSource_MEMORY_CACHE_getInstance())) {
      return null;
    }
    var crossfadeMillis = get_crossfadeMillis(result.jkg_1);
    if (crossfadeMillis > 0) {
      // Inline function 'kotlin.takeIf' call
      var this_0 = previous.vl6();
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'coil3.compose.maybeNewCrossfadePainter.<anonymous>' call
      if (previous instanceof Loading) {
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      return new CrossfadePainter(tmp$ret$1, current.vl6(), contentScale, crossfadeMillis, !result.okg_1, false);
    } else {
      return null;
    }
  }
  function validateRequestProperties(request) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.xkc_1 == null)) {
      // Inline function 'coil3.compose.validateRequestProperties.<anonymous>' call
      var message = 'request.target must be null.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  function asPainter(_this__u8e3s4, context, filterQuality) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_1().i6e_1 : filterQuality;
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
    return Companion_getInstance_8().nkw_1;
  }
  var properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9;
  function _init_properties_LocalPlatformContext_nonAndroid_kt__ocy165() {
    if (!properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9) {
      properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9 = true;
      LocalPlatformContext = staticCompositionLocalOf(LocalPlatformContext$lambda);
    }
  }
  //region block: post-declaration
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).h96 = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).i96 = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).j96 = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).k96 = maxIntrinsicHeight;
  protoOf(ConstraintsSizeResolver).r7y = minIntrinsicWidth_0;
  protoOf(ConstraintsSizeResolver).v7y = minIntrinsicHeight_0;
  protoOf(ConstraintsSizeResolver).t7y = maxIntrinsicWidth_0;
  protoOf(ConstraintsSizeResolver).x7y = maxIntrinsicHeight_0;
  protoOf(ConstraintsSizeResolver).m7q = foldIn;
  protoOf(ConstraintsSizeResolver).n7q = all;
  protoOf(ConstraintsSizeResolver).i7q = then;
  protoOf(ContentPainterNode).w7w = onMeasureResultChanged;
  //endregion
  //region block: init
  coil3_compose_AsyncImagePainter_Input$stable = 0;
  coil3_compose_AsyncImagePainter_State_Empty$stable = 0;
  coil3_compose_AsyncImagePainter_State_Loading$stable = 8;
  coil3_compose_AsyncImagePainter_State_Success$stable = 8;
  coil3_compose_AsyncImagePainter_State_Error$stable = 8;
  coil3_compose_AsyncImagePainter$stable = 0;
  Empty_instance = new Empty();
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
