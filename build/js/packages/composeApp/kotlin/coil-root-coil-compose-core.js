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
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.e7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var _FilterQuality___get_value__impl__vmx58a = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.f6;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.f7;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.qd;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var equals = kotlin_kotlin.$_$.qc;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var protoOf = kotlin_kotlin.$_$.he;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var hashCode = kotlin_kotlin.$_$.zc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var toString = kotlin_kotlin.$_$.rk;
  var toString_0 = kotlin_kotlin.$_$.le;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.dd;
  var Companion_getInstance_4 = kotlin_io_coil_kt_coil3_coil_core.$_$.d1;
  var Precision_INEXACT_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.x;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var ErrorResult = kotlin_io_coil_kt_coil3_coil_core.$_$.e;
  var SuccessResult = kotlin_io_coil_kt_coil3_coil_core.$_$.h;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var transformLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var mapLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Target = kotlin_io_coil_kt_coil3_coil_core.$_$.m;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nk;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var ImageVector = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var Builder = kotlin_io_coil_kt_coil3_coil_core.$_$.f;
  var get_LocalInspectionMode = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var KMutableProperty1 = kotlin_kotlin.$_$.lf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var _Constraints___get_isZero__impl__fm0efw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.z5;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.y5;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.b6;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var ImageRequest = kotlin_io_coil_kt_coil3_coil_core.$_$.g;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var ImageLoader = kotlin_io_coil_kt_coil3_coil_core.$_$.q;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Long = kotlin_kotlin.$_$.wi;
  var isFinite = kotlin_kotlin.$_$.ak;
  var _ScaleFactor___get_scaleX__impl__u0r14l = kotlin_org_jetbrains_compose_ui_ui.$_$.s6;
  var _ScaleFactor___get_scaleY__impl__174k2e = kotlin_org_jetbrains_compose_ui_ui.$_$.t6;
  var times = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var roundToInt = kotlin_kotlin.$_$.re;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var times_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Monotonic_instance = kotlin_kotlin.$_$.o5;
  var ValueTimeMark = kotlin_kotlin.$_$.ii;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.f3;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.c3;
  var coerceIn = kotlin_kotlin.$_$.df;
  var Scale_FILL_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.y;
  var Scale_FIT_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.z;
  var Builder_init_$Create$ = kotlin_io_coil_kt_coil3_coil_core.$_$.a1;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.p5;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var UnsupportedOperationException = kotlin_kotlin.$_$.qj;
  var MainCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Size_1 = kotlin_io_coil_kt_coil3_coil_core.$_$.l;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Undefined_instance = kotlin_io_coil_kt_coil3_coil_core.$_$.c1;
  var Dimension = kotlin_io_coil_kt_coil3_coil_core.$_$.k;
  var Pixels = kotlin_io_coil_kt_coil3_coil_core.$_$.j;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.y4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.h7;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.k5;
  var DataSource_MEMORY_CACHE_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.v;
  var get_crossfadeMillis = kotlin_io_coil_kt_coil3_coil_core.$_$.i;
  var toBitmap = kotlin_io_coil_kt_coil3_coil_core.$_$.t;
  var asComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var BitmapImage = kotlin_io_coil_kt_coil3_coil_core.$_$.o;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var Companion_getInstance_8 = kotlin_io_coil_kt_coil3_coil_core.$_$.g1;
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
  function AsyncImage(model, contentDescription, imageLoader, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $composer, $changed, $changed1, $default) {
    var modifier_0 = modifier;
    var transform_0 = transform;
    var onState_0 = onState;
    var alignment_0 = alignment;
    var contentScale_0 = contentScale;
    var alpha_0 = alpha;
    var colorFilter_0 = colorFilter;
    var filterQuality_0 = filterQuality;
    var clipToBounds_0 = clipToBounds;
    var $composer_0 = $composer;
    $composer_0.a2v(40041566);
    if (!(($default & 8) === 0))
      modifier_0 = Companion_instance;
    if (!(($default & 16) === 0))
      transform_0 = Companion_getInstance_9().ri0_1;
    if (!(($default & 32) === 0))
      onState_0 = null;
    if (!(($default & 64) === 0))
      alignment_0 = Companion_getInstance().b7b_1;
    if (!(($default & 128) === 0))
      contentScale_0 = Companion_getInstance_0().p7h_1;
    if (!(($default & 256) === 0))
      alpha_0 = 1.0;
    if (!(($default & 512) === 0))
      colorFilter_0 = null;
    if (!(($default & 1024) === 0))
      filterQuality_0 = Companion_getInstance_1().k66_1;
    if (!(($default & 2048) === 0))
      clipToBounds_0 = true;
    if (isTraceInProgress()) {
      traceEventStart(40041566, $changed, $changed1, 'coil3.compose.AsyncImage (AsyncImage.kt:124)');
    }
    AsyncImage_0(AsyncImageState_0(model, imageLoader, $composer_0, 14 & $changed | 112 & $changed >> 3), contentDescription, modifier_0, transform_0, onState_0, alignment_0, contentScale_0, alpha_0, colorFilter_0, filterQuality_0, clipToBounds_0, $composer_0, 112 & $changed | 896 & $changed >> 3 | 7168 & $changed >> 3 | 57344 & $changed >> 3 | 458752 & $changed >> 3 | 3670016 & $changed >> 3 | 29360128 & $changed >> 3 | 234881024 & $changed >> 3 | 1879048192 & $changed1 << 27, 14 & $changed1 >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b2v();
  }
  function AsyncImage_0(state, contentDescription, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $composer, $changed, $changed1) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(1236588022);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(state) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(contentDescription) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(transform) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2w(onState) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h2l(alignment) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.h2l(contentScale) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.j2w(alpha) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.h2l(colorFilter) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.l2w(_FilterQuality___get_value__impl__vmx58a(filterQuality)) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.i2w(clipToBounds) ? 4 : 2);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1236588022, $dirty, $dirty1, 'coil3.compose.AsyncImage (AsyncImage.kt:151)');
      }
      var request = requestOfWithSizeResolver(state.si0_1, contentScale, $composer_0, 112 & $dirty >> 15);
      var painter = rememberAsyncImagePainter(request, state.ui0_1, transform, onState, contentScale, filterQuality, $composer_0, 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 6 | 458752 & $dirty >> 12, 0);
      var sizeResolver = request.ph7_1;
      var tmp;
      if (sizeResolver instanceof ConstraintsSizeResolver) {
        tmp = modifier.t7b(sizeResolver);
      } else {
        tmp = modifier;
      }
      Content(tmp, painter, contentDescription, alignment, contentScale, alpha, colorFilter, clipToBounds, $composer_0, 896 & $dirty << 3 | 7168 & $dirty >> 6 | 57344 & $dirty >> 6 | 458752 & $dirty >> 6 | 3670016 & $dirty >> 6 | 29360128 & $dirty1 << 21);
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
      tmp0_safe_receiver.r32(AsyncImage$lambda(state, contentDescription, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $changed, $changed1));
    }
  }
  function Content(modifier, painter, contentDescription_0, alignment, contentScale, alpha, colorFilter, clipToBounds_0, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-237738007);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(painter) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2l(contentDescription_0) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2l(alignment) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2l(contentScale) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.j2w(alpha) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.h2l(colorFilter) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.i2w(clipToBounds_0) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-237738007, $dirty, -1, 'coil3.compose.Content (AsyncImage.kt:196)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout' call
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.Content.<anonymous>' call
      var $this$run = contentDescription(modifier, contentDescription_0);
      var modifier_0 = (clipToBounds_0 ? clipToBounds($this$run) : $this$run).t7b(new ContentPainterElement(painter, alignment, contentScale, alpha, colorFilter));
      $composer_0.a2v(687221771);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance_2().n2o_1) {
        // Inline function 'coil3.compose.Content.<anonymous>' call
        var tmp_0 = Content$lambda;
        var value = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_0);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_1 = tmp;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.b2v();
      var modifier_1 = modifier_0;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_1);
      var localMap = $composer_1.w2w();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().i8t_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp_2 = $composer_2.x2u();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_2.q2v();
      if ($composer_2.l2v()) {
        $composer_2.r2v(factory);
      } else {
        $composer_2.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp0_group, Companion_getInstance_3().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().m8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().k8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      $composer_2.w2v();
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
      tmp1_safe_receiver.r32(Content$lambda_0(modifier, painter, contentDescription_0, alignment, contentScale, alpha, colorFilter, clipToBounds_0, $changed));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.vi0_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).p8l = function (_this__u8e3s4, measurables, constraints) {
    return this.vi0_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).s3 = function () {
    return this.vi0_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function AsyncImage$lambda($state, $contentDescription, $modifier, $transform, $onState, $alignment, $contentScale, $alpha, $colorFilter, $filterQuality, $clipToBounds, $$changed, $$changed1) {
    return function ($composer, $force) {
      AsyncImage_0($state, $contentDescription, $modifier, $transform, $onState, $alignment, $contentScale, $alpha, $colorFilter, $filterQuality, $clipToBounds, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  function Content$lambda($this$Layout, _unused_var__etf5q3, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.a5b_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.a5b_1);
    return $this$Layout.g7j(tmp, tmp_0, VOID, Content$lambda$lambda);
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
  protoOf(Empty).wi0 = function () {
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
    this.xi0_1 = painter;
  }
  protoOf(Loading).wi0 = function () {
    return this.xi0_1;
  };
  protoOf(Loading).toString = function () {
    return 'Loading(painter=' + toString(this.xi0_1) + ')';
  };
  protoOf(Loading).hashCode = function () {
    return this.xi0_1 == null ? 0 : hashCode(this.xi0_1);
  };
  protoOf(Loading).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Loading))
      return false;
    var tmp0_other_with_cast = other instanceof Loading ? other : THROW_CCE();
    if (!equals(this.xi0_1, tmp0_other_with_cast.xi0_1))
      return false;
    return true;
  };
  function Success(painter, result) {
    this.yi0_1 = painter;
    this.zi0_1 = result;
  }
  protoOf(Success).wi0 = function () {
    return this.yi0_1;
  };
  protoOf(Success).toString = function () {
    return 'Success(painter=' + toString_0(this.yi0_1) + ', result=' + this.zi0_1.toString() + ')';
  };
  protoOf(Success).hashCode = function () {
    var result = hashCode(this.yi0_1);
    result = imul(result, 31) + this.zi0_1.hashCode() | 0;
    return result;
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.yi0_1, tmp0_other_with_cast.yi0_1))
      return false;
    if (!this.zi0_1.equals(tmp0_other_with_cast.zi0_1))
      return false;
    return true;
  };
  function Error_0(painter, result) {
    this.ai1_1 = painter;
    this.bi1_1 = result;
  }
  protoOf(Error_0).wi0 = function () {
    return this.ai1_1;
  };
  protoOf(Error_0).toString = function () {
    return 'Error(painter=' + toString(this.ai1_1) + ', result=' + this.bi1_1.toString() + ')';
  };
  protoOf(Error_0).hashCode = function () {
    var result = this.ai1_1 == null ? 0 : hashCode(this.ai1_1);
    result = imul(result, 31) + this.bi1_1.hashCode() | 0;
    return result;
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.ai1_1, tmp0_other_with_cast.ai1_1))
      return false;
    if (!this.bi1_1.equals(tmp0_other_with_cast.bi1_1))
      return false;
    return true;
  };
  function AsyncImagePainter$Companion$DefaultTransform$lambda(it) {
    return it;
  }
  function AsyncImagePainter$onRemembered$slambda$slambda(this$0, resultContinuation) {
    this.ki1_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).ni1 = function ($this$transformLatest, it, $completion) {
    var tmp = this.oi1($this$transformLatest, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.ni1(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            this.mi1_1;
            suspendResult = emitAll(this.li1_1, this.ki1_1.hi2_1, this);
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
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda).oi1 = function ($this$transformLatest, it, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda(this.ki1_1, completion);
    i.li1_1 = $this$transformLatest;
    i.mi1_1 = it;
    return i;
  };
  function AsyncImagePainter$onRemembered$slambda$slambda_0(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.ni1($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AsyncImagePainter$onRemembered$slambda$slambda_1(this$0, resultContinuation) {
    this.ti2_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).zi2 = function (input, $completion) {
    var tmp = this.ai3(input, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).ha = function (p1, $completion) {
    return this.zi2(p1 instanceof Input ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.vi2_1 = this.ti2_1.gi2_1;
            if (!(this.vi2_1 == null)) {
              this.xi2_1 = updateRequest(this.ti2_1, this.ui2_1.ci3_1, true);
              this.n9_1 = 2;
              suspendResult = this.vi2_1.ei3(this.ui2_1.bi3_1, this.xi2_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.yi2_1 = updateRequest(this.ti2_1, this.ui2_1.ci3_1, false);
              this.n9_1 = 1;
              suspendResult = this.ui2_1.bi3_1.ch9(this.yi2_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.wi2_1 = toState(ARGUMENT, this.ti2_1);
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.wi2_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.wi2_1;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda$slambda_1).ai3 = function (input, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda_1(this.ti2_1, completion);
    i.ui2_1 = input;
    return i;
  };
  function AsyncImagePainter$onRemembered$slambda$slambda_2(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda$slambda_1(this$0, resultContinuation);
    var l = function (input, $completion) {
      return i.zi2(input, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k($boundThis) {
    this.fi3_1 = $boundThis;
  }
  protoOf(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k).gi3 = function (p0, $completion) {
    return onRemembered$_anonymous_$_anonymous_$updateState_isg8pr(this.fi3_1, p0, $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k).ha = function (p1, $completion) {
    return this.gi3((!(p1 == null) ? isInterface(p1, State) : false) ? p1 : THROW_CCE(), $completion);
  };
  function AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k_0($boundThis) {
    var i = new AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k($boundThis);
    var l = function (p0, $completion) {
      return i.gi3(p0, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_painter__526xy2($this, _set____db54di) {
    var this_0 = $this.xi1_1;
    painter$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_painter__kk1cey($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.xi1_1;
    painter$factory_0();
    return this_0.w();
  }
  function _set_alpha__c56vtz($this, _set____db54di) {
    var this_0 = $this.yi1_1;
    alpha$factory();
    this_0.g3d(_set____db54di);
    return Unit_instance;
  }
  function _get_alpha__jvxknh($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.yi1_1;
    alpha$factory_0();
    return this_0.h3d();
  }
  function _set_colorFilter__ke9voq($this, _set____db54di) {
    var this_0 = $this.zi1_1;
    colorFilter$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_colorFilter__kcfzyi($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.zi1_1;
    colorFilter$factory_0();
    return this_0.w();
  }
  function _set_rememberJob__d3by0b($this, value) {
    var tmp0_safe_receiver = $this.ai2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m15();
    }
    $this.ai2_1 = value;
  }
  function updateRequest($this, request, isPreview) {
    var sizeResolver = request.ph7_1;
    if (isInterface(sizeResolver, DrawScopeSizeResolver)) {
      sizeResolver.hi3($this.vi1_1);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'coil3.request.Builder.target' call
    var this_0 = request.ehq().vhp(new _no_name_provided__qut3iv(request, $this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.AsyncImagePainter.updateRequest.<anonymous>' call
    if (request.th7_1.php_1 == null) {
      this_0.xhp(Companion_getInstance_4().shp_1);
    }
    if (request.th7_1.qhp_1 == null) {
      this_0.yhp(toScale($this.ei2_1));
    }
    if (request.th7_1.rhp_1 == null) {
      this_0.zhp(Precision_INEXACT_getInstance());
    }
    if (isPreview) {
      this_0.whp(EmptyCoroutineContext_getInstance());
    }
    return this_0.c2o();
  }
  function updateState($this, state) {
    var previous = $this.ji2_1.w();
    var current = $this.ci2_1(state);
    $this.ji2_1.n1v(current);
    var tmp0_elvis_lhs = maybeNewCrossfadePainter(previous, current, $this.ei2_1);
    _set_painter__526xy2($this, tmp0_elvis_lhs == null ? current.wi0() : tmp0_elvis_lhs);
    if (!(previous.wi0() === current.wi0())) {
      var tmp = previous.wi0();
      var tmp1_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.z2t();
      }
      var tmp_0 = current.wi0();
      var tmp2_safe_receiver = (!(tmp_0 == null) ? isInterface(tmp_0, RememberObserver) : false) ? tmp_0 : null;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.x2t();
      }
    }
    var tmp3_safe_receiver = $this.di2_1;
    if (tmp3_safe_receiver == null)
      null;
    else
      tmp3_safe_receiver(current);
  }
  function toState(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof SuccessResult) {
      tmp = new Success(asPainter(_this__u8e3s4.iha_1, _this__u8e3s4.jha_1.vh6_1, $this.fi2_1), _this__u8e3s4);
    } else {
      if (_this__u8e3s4 instanceof ErrorResult) {
        var tmp1_safe_receiver = _this__u8e3s4.ihb_1;
        tmp = new Error_0(tmp1_safe_receiver == null ? null : asPainter(tmp1_safe_receiver, _this__u8e3s4.jhb_1.vh6_1, $this.fi2_1), _this__u8e3s4);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function Input(imageLoader, request, modelEqualityDelegate) {
    this.bi3_1 = imageLoader;
    this.ci3_1 = request;
    this.di3_1 = modelEqualityDelegate;
  }
  protoOf(Input).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof Input) {
      tmp_1 = equals(this.bi3_1, other.bi3_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.di3_1, other.di3_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.di3_1.ii3(this.ci3_1, other.ci3_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Input).hashCode = function () {
    var result = hashCode(this.bi3_1);
    result = imul(31, result) + hashCode(this.di3_1) | 0;
    result = imul(31, result) + this.di3_1.ji3(this.ci3_1) | 0;
    return result;
  };
  protoOf(Input).toString = function () {
    return 'Input(imageLoader=' + toString_0(this.bi3_1) + ', request=' + this.ci3_1.toString() + ', modelEqualityDelegate=' + toString_0(this.di3_1) + ')';
  };
  function State() {
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.ri0_1 = AsyncImagePainter$Companion$DefaultTransform$lambda;
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.ki3_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1r = function (value, $completion) {
    return this.ki3_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.ki3_1;
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
  function onRemembered$_anonymous_$_anonymous_$updateState_isg8pr(receiver, p0, $completion) {
    updateState(receiver, p0);
    return Unit_instance;
  }
  function AsyncImagePainter$onRemembered$slambda(this$0, resultContinuation) {
    this.ti3_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePainter$onRemembered$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncImagePainter$onRemembered$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePainter$onRemembered$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var this_0 = this.ti3_1.wi1_1;
            var tmp_0 = transformLatest(this_0, AsyncImagePainter$onRemembered$slambda$slambda_0(this.ti3_1, null));
            var tmp_1 = mapLatest(tmp_0, AsyncImagePainter$onRemembered$slambda$slambda_2(this.ti3_1, null));
            var tmp_2 = AsyncImagePainter$onRemembered$_anonymous_$_anonymous_$updateState$ref_mnj29k_0(this.ti3_1);
            suspendResult = tmp_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
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
  protoOf(AsyncImagePainter$onRemembered$slambda).f1x = function ($this$launch, completion) {
    var i = new AsyncImagePainter$onRemembered$slambda(this.ti3_1, completion);
    i.ui3_1 = $this$launch;
    return i;
  };
  function AsyncImagePainter$onRemembered$slambda_0(this$0, resultContinuation) {
    var i = new AsyncImagePainter$onRemembered$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv($request, this$0) {
    this.vi3_1 = $request;
    this.wi3_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv).phd = function (placeholder) {
    var painter = placeholder == null ? null : asPainter(placeholder, this.vi3_1.vh6_1, this.wi3_1.fi2_1);
    updateState(this.wi3_1, new Loading(painter));
    return Unit_instance;
  };
  protoOf(_no_name_provided__qut3iv).lhb = function (error) {
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    return Unit_instance;
  };
  protoOf(_no_name_provided__qut3iv).ghb = function (result) {
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    return Unit_instance;
  };
  function AsyncImagePainter(input) {
    Companion_getInstance_9();
    Painter.call(this);
    this.vi1_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.AsyncImagePainter.restartSignal.<anonymous>' call
    this_0.g1u(Unit_instance);
    tmp.wi1_1 = this_0;
    this.xi1_1 = mutableStateOf(null);
    this.yi1_1 = mutableFloatStateOf(1.0);
    this.zi1_1 = mutableStateOf(null);
    this.ai2_1 = null;
    this.ci2_1 = Companion_getInstance_9().ri0_1;
    this.di2_1 = null;
    this.ei2_1 = Companion_getInstance_0().p7h_1;
    this.fi2_1 = Companion_getInstance_1().k66_1;
    this.gi2_1 = null;
    this.hi2_1 = MutableStateFlow(input);
    this.ii2_1 = asStateFlow(this.hi2_1);
    this.ji2_1 = MutableStateFlow(Empty_instance);
    this.ki2_1 = asStateFlow(this.ji2_1);
  }
  protoOf(AsyncImagePainter).xi3 = function () {
    var tmp = this.bi2_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('scope');
    }
  };
  protoOf(AsyncImagePainter).g6g = function () {
    var tmp0_safe_receiver = _get_painter__kk1cey(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g6g();
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new Size(tmp_0)) == null) {
      tmp = Companion_getInstance_5().y5a_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AsyncImagePainter).f6g = function (_this__u8e3s4) {
    this.vi1_1.g1u(new Size(_this__u8e3s4.h5a()));
    var tmp0_safe_receiver = _get_painter__kk1cey(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.AsyncImagePainter.onDraw.<anonymous>' call
      tmp0_safe_receiver.q6g(_this__u8e3s4, _this__u8e3s4.h5a(), _get_alpha__jvxknh(this), _get_colorFilter__kcfzyi(this));
    }
  };
  protoOf(AsyncImagePainter).h6g = function (alpha) {
    _set_alpha__c56vtz(this, alpha);
    return true;
  };
  protoOf(AsyncImagePainter).i6g = function (colorFilter) {
    _set_colorFilter__ke9voq(this, colorFilter);
    return true;
  };
  protoOf(AsyncImagePainter).x2t = function () {
    // Inline function 'androidx.compose.ui.util.trace' call
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x2t();
    }
    var tmp_0 = this.xi3();
    _set_rememberJob__d3by0b(this, launch(tmp_0, VOID, VOID, AsyncImagePainter$onRemembered$slambda_0(this, null)));
    return Unit_instance;
  };
  protoOf(AsyncImagePainter).z2t = function () {
    _set_rememberJob__d3by0b(this, null);
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z2t();
    }
  };
  protoOf(AsyncImagePainter).y2t = function () {
    _set_rememberJob__d3by0b(this, null);
    var tmp = _get_painter__kk1cey(this);
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, RememberObserver) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y2t();
    }
  };
  function rememberAsyncImagePainter(model, imageLoader, transform, onState, contentScale, filterQuality, $composer, $changed, $default) {
    var transform_0 = transform;
    var onState_0 = onState;
    var contentScale_0 = contentScale;
    var filterQuality_0 = filterQuality;
    var $composer_0 = $composer;
    $composer_0.a2v(1066092719);
    if (!(($default & 4) === 0))
      transform_0 = Companion_getInstance_9().ri0_1;
    if (!(($default & 8) === 0))
      onState_0 = null;
    if (!(($default & 16) === 0))
      contentScale_0 = Companion_getInstance_0().p7h_1;
    if (!(($default & 32) === 0))
      filterQuality_0 = Companion_getInstance_1().k66_1;
    if (isTraceInProgress()) {
      traceEventStart(1066092719, $changed, -1, 'coil3.compose.rememberAsyncImagePainter (AsyncImagePainter.kt:118)');
    }
    var tmp0 = rememberAsyncImagePainter_0(AsyncImageState_0(model, imageLoader, $composer_0, 14 & $changed | 112 & $changed), transform_0, onState_0, contentScale_0, filterQuality_0, $composer_0, 112 & $changed >> 3 | 896 & $changed >> 3 | 7168 & $changed >> 3 | 57344 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b2v();
    return tmp0;
  }
  function rememberAsyncImagePainter_0(state, transform, onState, contentScale, filterQuality, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a2v(-1242991349);
    if (isTraceInProgress()) {
      traceEventStart(-1242991349, $changed, -1, 'coil3.compose.rememberAsyncImagePainter (AsyncImagePainter.kt:133)');
    }
    // Inline function 'androidx.compose.ui.util.trace' call
    var request = requestOf(state.si0_1, $composer_0, 0);
    validateRequest(request);
    var input = new Input(state.ui0_1, request, state.ti0_1);
    $composer_0.a2v(1596902301);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance_2().n2o_1) {
      // Inline function 'coil3.compose.rememberAsyncImagePainter.<anonymous>.<anonymous>' call
      var value = new AsyncImagePainter(input);
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b2v();
    var painter = tmp0_group;
    painter.bi2_1 = rememberImmediateCoroutineScope($composer_0, 0);
    painter.ci2_1 = transform;
    painter.di2_1 = onState;
    painter.ei2_1 = contentScale;
    painter.fi2_1 = filterQuality;
    painter.gi2_1 = previewHandler($composer_0, 0);
    painter.hi2_1.n1v(input);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b2v();
    return painter;
  }
  function validateRequest(request) {
    var tmp0_subject = request.wh6_1;
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
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      $composer_0.a2v(-924922939);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalAsyncImagePreviewHandler();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.p2x(this_1);
      sourceInformationMarkerEnd($composer_2);
      $composer_0.b2v();
      tmp = tmp0_0;
    } else {
      $composer_0.a2v(-924865434);
      $composer_0.b2v();
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
  protoOf(ConstraintsSizeResolver$size$slambda).hi4 = function (it, $completion) {
    var tmp = this.ii4(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ConstraintsSizeResolver$size$slambda).ha = function (p1, $completion) {
    return this.hi4(p1 instanceof Constraints ? p1.a5b_1 : THROW_CCE(), $completion);
  };
  protoOf(ConstraintsSizeResolver$size$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return !_Constraints___get_isZero__impl__fm0efw(this.gi4_1);
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ConstraintsSizeResolver$size$slambda).ii4 = function (it, completion) {
    var i = new ConstraintsSizeResolver$size$slambda(completion);
    i.gi4_1 = it;
    return i;
  };
  function ConstraintsSizeResolver$size$slambda_0(resultContinuation) {
    var i = new ConstraintsSizeResolver$size$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.hi4(it.a5b_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ConstraintsSizeResolver$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.e8m($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function $sizeCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ri4_1 = _this__u8e3s4;
  }
  protoOf($sizeCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = first(this.ri4_1.si4_1, ConstraintsSizeResolver$size$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult.a5b_1;
            return toSize(ARGUMENT);
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
  function ConstraintsSizeResolver() {
    this.si4_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
  }
  protoOf(ConstraintsSizeResolver).shd = function ($completion) {
    var tmp = new $sizeCOROUTINE$0(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ConstraintsSizeResolver).z7i = function (_this__u8e3s4, measurable, constraints) {
    this.si4_1.g1u(new Constraints(constraints));
    var placeable = measurable.a7j(constraints);
    var tmp = placeable.b7j_1;
    var tmp_0 = placeable.c7j_1;
    return _this__u8e3s4.g7j(tmp, tmp_0, VOID, ConstraintsSizeResolver$measure$lambda(placeable));
  };
  function rememberConstraintsSizeResolver($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a2v(-34261202);
    if (isTraceInProgress()) {
      traceEventStart(-34261202, $changed, -1, 'coil3.compose.rememberConstraintsSizeResolver (ConstraintsSizeResolver.kt:21)');
    }
    $composer_0.a2v(-1474440112);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance_2().n2o_1) {
      // Inline function 'coil3.compose.rememberConstraintsSizeResolver.<anonymous>' call
      var value = new ConstraintsSizeResolver();
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b2v();
    return tmp1_group;
  }
  function DrawScopeSizeResolver() {
  }
  var coil3_compose_ImagePainter$stable;
  function ImagePainter(image) {
    Painter.call(this);
    this.zi4_1 = image;
  }
  protoOf(ImagePainter).g6g = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.<get-intrinsicSize>.<anonymous>' call
    var it = this.zi4_1.f5a();
    var tmp = it > 0 ? it : NaN;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.<get-intrinsicSize>.<anonymous>' call
    var it_0 = this.zi4_1.g5a();
    var tmp$ret$3 = it_0 > 0 ? it_0 : NaN;
    return Size_0(tmp, tmp$ret$3);
  };
  protoOf(ImagePainter).f6g = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
    var it = this.zi4_1.f5a();
    var scaleX = it > 0 ? _Size___get_width__impl__58y75t(_this__u8e3s4.h5a()) / it : 1.0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
    var it_0 = this.zi4_1.g5a();
    var scaleY = it_0 > 0 ? _Size___get_height__impl__a04p02(_this__u8e3s4.h5a()) / it_0 : 1.0;
    var pivot = Companion_getInstance_6().x59_1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _this__u8e3s4.y6c();
    var previousSize = $this$with.h5a();
    $this$with.h5p().r61();
    try {
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      $this$with.s6c().o6d(scaleX, scaleY, pivot);
      // Inline function 'coil3.compose.ImagePainter.onDraw.<anonymous>' call
      this.zi4_1.mhq(get_nativeCanvas_0(_this__u8e3s4.y6c().h5p()));
    }finally {
      $this$with.h5p().s61();
      $this$with.r6c(previousSize);
    }
  };
  function get_LocalAsyncImageModelEqualityDelegate() {
    _init_properties_LocalAsyncImageModelEqualityDelegate_kt__he9roi();
    return LocalAsyncImageModelEqualityDelegate;
  }
  var LocalAsyncImageModelEqualityDelegate;
  function AsyncImageModelEqualityDelegate$Companion$Default$1() {
  }
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).ii3 = function (self_0, other) {
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
    return equals(self_0.vh6_1, other.vh6_1) && equals(self_0.wh6_1, other.wh6_1) && self_0.zh6_1 == other.zh6_1 && equals(self_0.ah7_1, other.ah7_1) && self_0.bh7_1 == other.bh7_1 && equals(self_0.ph7_1, other.ph7_1) && self_0.qh7_1.equals(other.qh7_1) && self_0.rh7_1.equals(other.rh7_1);
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).ji3 = function (self_0) {
    if (!(self_0 instanceof ImageRequest)) {
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = self_0 == null ? null : hashCode(self_0);
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var result = hashCode(self_0.vh6_1);
    result = imul(31, result) + hashCode(self_0.wh6_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = self_0.zh6_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    result = imul(31, result) + hashCode(self_0.ah7_1) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = self_0.bh7_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    result = imul(31, result) + hashCode(self_0.ph7_1) | 0;
    result = imul(31, result) + self_0.qh7_1.hashCode() | 0;
    result = imul(31, result) + self_0.rh7_1.hashCode() | 0;
    return result;
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$Default$1).toString = function () {
    return 'AsyncImageModelEqualityDelegate.Default';
  };
  function AsyncImageModelEqualityDelegate$Companion$AllProperties$1() {
  }
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).ii3 = function (self_0, other) {
    return equals(self_0, other);
  };
  protoOf(AsyncImageModelEqualityDelegate$Companion$AllProperties$1).ji3 = function (self_0) {
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
    tmp.ai5_1 = new AsyncImageModelEqualityDelegate$Companion$Default$1();
    var tmp_0 = this;
    tmp_0.bi5_1 = new AsyncImageModelEqualityDelegate$Companion$AllProperties$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function LocalAsyncImageModelEqualityDelegate$lambda() {
    _init_properties_LocalAsyncImageModelEqualityDelegate_kt__he9roi();
    return Companion_getInstance_10().ai5_1;
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
    this.ci5_1 = function_0;
  }
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).ei3 = function (imageLoader, request, $completion) {
    return this.ci5_1(imageLoader, request, $completion);
  };
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).s3 = function () {
    return this.ci5_1;
  };
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, AsyncImagePreviewHandler) : false) {
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
  protoOf(sam$coil3_compose_AsyncImagePreviewHandler$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function AsyncImagePreviewHandler$Companion$Default$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).ni5 = function (imageLoader, request, $completion) {
    var tmp = this.oi5(imageLoader, request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, ImageLoader) : false) ? p1 : THROW_CCE();
    return this.ni5(tmp, p2 instanceof ImageRequest ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.li5_1.ch9(this.mi5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_0;
            if (result instanceof SuccessResult) {
              tmp_0 = new Success(asPainter(result.iha_1, this.mi5_1.vh6_1), result);
            } else {
              if (result instanceof ErrorResult) {
                var tmp0_safe_receiver = result.ihb_1;
                tmp_0 = new Error_0(tmp0_safe_receiver == null ? null : asPainter(tmp0_safe_receiver, this.mi5_1.vh6_1), result);
              } else {
                noWhenBranchMatchedException();
              }
            }

            return tmp_0;
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
  protoOf(AsyncImagePreviewHandler$Companion$Default$slambda).oi5 = function (imageLoader, request, completion) {
    var i = new AsyncImagePreviewHandler$Companion$Default$slambda(completion);
    i.li5_1 = imageLoader;
    i.mi5_1 = request;
    return i;
  };
  function AsyncImagePreviewHandler$Companion$Default$slambda_0(resultContinuation) {
    var i = new AsyncImagePreviewHandler$Companion$Default$slambda(resultContinuation);
    var l = function (imageLoader, request, $completion) {
      return i.ni5(imageLoader, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = AsyncImagePreviewHandler$Companion$Default$slambda_0(null);
    tmp.pi5_1 = new sam$coil3_compose_AsyncImagePreviewHandler$0(tmp_0);
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
    return Companion_getInstance_11().pi5_1;
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
    this.ri5_1 = painter;
    this.si5_1 = alignment;
    this.ti5_1 = contentScale;
    this.ui5_1 = alpha;
    this.vi5_1 = colorFilter;
  }
  protoOf(ContentPainterElement).o33 = function () {
    return new ContentPainterNode(this.ri5_1, this.si5_1, this.ti5_1, this.ui5_1, this.vi5_1);
  };
  protoOf(ContentPainterElement).wi5 = function (node) {
    var intrinsicsChanged = !equals(node.ki6_1.g6g(), this.ri5_1.g6g());
    node.ki6_1 = this.ri5_1;
    node.li6_1 = this.si5_1;
    node.mi6_1 = this.ti5_1;
    node.ni6_1 = this.ui5_1;
    node.oi6_1 = this.vi5_1;
    if (intrinsicsChanged) {
      invalidateMeasurement(node);
    }
    invalidateDraw(node);
  };
  protoOf(ContentPainterElement).b7f = function (node) {
    return this.wi5(node instanceof ContentPainterNode ? node : THROW_CCE());
  };
  protoOf(ContentPainterElement).toString = function () {
    return 'ContentPainterElement(painter=' + toString_0(this.ri5_1) + ', alignment=' + toString_0(this.si5_1) + ', contentScale=' + toString_0(this.ti5_1) + ', alpha=' + this.ui5_1 + ', colorFilter=' + toString(this.vi5_1) + ')';
  };
  protoOf(ContentPainterElement).hashCode = function () {
    var result = hashCode(this.ri5_1);
    result = imul(result, 31) + hashCode(this.si5_1) | 0;
    result = imul(result, 31) + hashCode(this.ti5_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ui5_1) | 0;
    result = imul(result, 31) + (this.vi5_1 == null ? 0 : hashCode(this.vi5_1)) | 0;
    return result;
  };
  protoOf(ContentPainterElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContentPainterElement))
      return false;
    var tmp0_other_with_cast = other instanceof ContentPainterElement ? other : THROW_CCE();
    if (!equals(this.ri5_1, tmp0_other_with_cast.ri5_1))
      return false;
    if (!equals(this.si5_1, tmp0_other_with_cast.si5_1))
      return false;
    if (!equals(this.ti5_1, tmp0_other_with_cast.ti5_1))
      return false;
    if (!equals(this.ui5_1, tmp0_other_with_cast.ui5_1))
      return false;
    if (!equals(this.vi5_1, tmp0_other_with_cast.vi5_1))
      return false;
    return true;
  };
  function calculateScaledSize($this, dstSize) {
    if (Size__isEmpty_impl_o9ye97(dstSize)) {
      return Companion_getInstance_5().x5a_1;
    }
    var intrinsicSize = $this.ki6_1.g6g();
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
    var scaleFactor = $this.mi6_1.w7i(srcSize, dstSize);
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
    var painter = $this.ki6_1;
    var hasBoundedSize = _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && _Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints);
    var intrinsicSize = painter.g6g();
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(intrinsicSize).equals(new Long(2143289344, 2143289344))) {
      var tmp;
      if (!hasBoundedSize) {
        tmp = true;
      } else {
        var tmp_0;
        if (painter instanceof AsyncImagePainter) {
          tmp_0 = painter.ki2_1.w().wi0() == null;
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
      $this$layout.y7i($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function ContentPainterNode(painter, alignment, contentScale, alpha, colorFilter) {
    Node.call(this);
    this.ki6_1 = painter;
    this.li6_1 = alignment;
    this.mi6_1 = contentScale;
    this.ni6_1 = alpha;
    this.oi6_1 = colorFilter;
  }
  protoOf(ContentPainterNode).o7c = function () {
    return false;
  };
  protoOf(ContentPainterNode).z7i = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.a7j(modifyConstraints(this, constraints));
    var tmp = placeable.b7j_1;
    var tmp_0 = placeable.c7j_1;
    return _this__u8e3s4.g7j(tmp, tmp_0, VOID, ContentPainterNode$measure$lambda(placeable));
  };
  protoOf(ContentPainterNode).y7d = function (_this__u8e3s4) {
    var scaledSize = calculateScaledSize(this, _this__u8e3s4.h5a());
    var _destruct__k2r9zo = this.li6_1.s7b(toIntSize(scaledSize), toIntSize(_this__u8e3s4.h5a()), _this__u8e3s4.u6c());
    // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
    var dx = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
    var dy = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
    _this__u8e3s4.y6c().s6c().u61(dx, dy);
    try {
      // Inline function 'coil3.compose.internal.ContentPainterNode.draw.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      this.ki6_1.q6g(_this__u8e3s4, scaledSize, this.ni6_1, this.oi6_1);
    }finally {
      _this__u8e3s4.y6c().s6c().u61(-dx, -dy);
    }
    _this__u8e3s4.n7h();
  };
  var coil3_compose_internal_CrossfadePainter$stable;
  function _set_invalidateTick__a7eowv($this, _set____db54di) {
    var this_0 = $this.bi7_1;
    invalidateTick$factory();
    this_0.e3g(_set____db54di);
    return Unit_instance;
  }
  function _get_invalidateTick__zalx0t($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.bi7_1;
    invalidateTick$factory_0();
    return this_0.f3g();
  }
  function _set_maxAlpha__j4cq0t($this, _set____db54di) {
    var this_0 = $this.ei7_1;
    maxAlpha$factory();
    this_0.g3d(_set____db54di);
    return Unit_instance;
  }
  function _get_maxAlpha__6bgek1($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.ei7_1;
    maxAlpha$factory_0();
    return this_0.h3d();
  }
  function _set_colorFilter__ke9voq_0($this, _set____db54di) {
    var this_0 = $this.fi7_1;
    colorFilter$factory_1();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_colorFilter__kcfzyi_0($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.fi7_1;
    colorFilter$factory_2();
    return this_0.w();
  }
  function computeIntrinsicSize($this) {
    var tmp0_safe_receiver = $this.vi6_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g6g();
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new Size(tmp_0)) == null) {
      tmp = Companion_getInstance_5().x5a_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var startSize = tmp;
    var tmp2_safe_receiver = $this.wi6_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.g6g();
    var tmp_1;
    var tmp_2 = tmp3_elvis_lhs;
    if ((tmp_2 == null ? null : new Size(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_5().x5a_1;
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
    if ($this.ai7_1) {
      if (isStartSpecified)
        return startSize;
      if (isEndSpecified)
        return endSize;
    }
    return Companion_getInstance_5().y5a_1;
  }
  function drawPainter(_this__u8e3s4, $this, painter, alpha) {
    if (painter == null || alpha <= 0)
      return Unit_instance;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var size = _this__u8e3s4.h5a();
    var drawSize = computeDrawSize($this, painter.g6g(), size);
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (_Size___get_packedValue__impl__7rlt1o(size).equals(new Long(2143289344, 2143289344))) {
      tmp = true;
    } else {
      tmp = Size__isEmpty_impl_o9ye97(size);
    }
    if (tmp) {
      painter.q6g(_this__u8e3s4, drawSize, alpha, _get_colorFilter__kcfzyi_0($this));
    } else {
      // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
      var horizontal = (_Size___get_width__impl__58y75t(size) - _Size___get_width__impl__58y75t(drawSize)) / 2;
      var vertical = (_Size___get_height__impl__a04p02(size) - _Size___get_height__impl__a04p02(drawSize)) / 2;
      _this__u8e3s4.y6c().s6c().m6d(horizontal, vertical, horizontal, vertical);
      var tmp_0;
      try {
        painter.q6g(_this__u8e3s4, drawSize, alpha, _get_colorFilter__kcfzyi_0($this));
        tmp_0 = Unit_instance;
      }finally {
        _this__u8e3s4.y6c().s6c().m6d(-horizontal, -vertical, -horizontal, -vertical);
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
    return times_0(srcSize, $this.xi6_1.w7i(srcSize, dstSize));
  }
  function CrossfadePainter(start, end, contentScale, durationMillis, fadeStart, preferExactIntrinsicSize) {
    Painter.call(this);
    this.vi6_1 = start;
    this.wi6_1 = end;
    this.xi6_1 = contentScale;
    this.yi6_1 = durationMillis;
    this.zi6_1 = fadeStart;
    this.ai7_1 = preferExactIntrinsicSize;
    this.bi7_1 = mutableIntStateOf(0);
    this.ci7_1 = null;
    this.di7_1 = false;
    this.ei7_1 = mutableFloatStateOf(1.0);
    this.fi7_1 = mutableStateOf(null);
  }
  protoOf(CrossfadePainter).g6g = function () {
    return computeIntrinsicSize(this);
  };
  protoOf(CrossfadePainter).f6g = function (_this__u8e3s4) {
    if (this.di7_1) {
      drawPainter(_this__u8e3s4, this, this.wi6_1, _get_maxAlpha__6bgek1(this));
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.ci7_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new ValueTimeMark(tmp_0)) == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ValueTimeMark(Monotonic_instance.hf());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.compose.internal.CrossfadePainter.onDraw.<anonymous>' call
      this.ci7_1 = this_0.gn_1;
      tmp = this_0.gn_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var startTime = tmp;
    // Inline function 'kotlin.Long.div' call
    var this_1 = _Duration___get_inWholeMilliseconds__impl__msfiry(ValueTimeMark__elapsedNow_impl_eonqvs(startTime));
    var other = this.yi6_1;
    var percent = this_1.q3() / other;
    var endAlpha = coerceIn(percent, 0.0, 1.0) * _get_maxAlpha__6bgek1(this);
    var startAlpha = this.zi6_1 ? _get_maxAlpha__6bgek1(this) - endAlpha : _get_maxAlpha__6bgek1(this);
    this.di7_1 = percent >= 1.0;
    drawPainter(_this__u8e3s4, this, this.vi6_1, startAlpha);
    drawPainter(_this__u8e3s4, this, this.wi6_1, endAlpha);
    if (this.di7_1) {
      this.vi6_1 = null;
    } else {
      var _unary__edvuaz = _get_invalidateTick__zalx0t(this);
      _set_invalidateTick__a7eowv(this, _unary__edvuaz + 1 | 0);
    }
  };
  protoOf(CrossfadePainter).h6g = function (alpha) {
    _set_maxAlpha__j4cq0t(this, alpha);
    return true;
  };
  protoOf(CrossfadePainter).i6g = function (colorFilter) {
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
    return equals(_this__u8e3s4, Companion_getInstance_0().p7h_1) || equals(_this__u8e3s4, Companion_getInstance_0().s7h_1) ? Scale_FIT_getInstance() : Scale_FILL_getInstance();
  }
  function AsyncImageState(model, modelEqualityDelegate, imageLoader) {
    this.si0_1 = model;
    this.ti0_1 = modelEqualityDelegate;
    this.ui0_1 = imageLoader;
  }
  protoOf(AsyncImageState).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AsyncImageState) {
      tmp_1 = equals(this.ti0_1, other.ti0_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.ti0_1.ii3(this.si0_1, other.si0_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.ui0_1, other.ui0_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AsyncImageState).hashCode = function () {
    var result = hashCode(this.ti0_1);
    result = imul(31, result) + this.ti0_1.ji3(this.si0_1) | 0;
    result = imul(31, result) + hashCode(this.ui0_1) | 0;
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
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = new AsyncImageState(model, tmp0, imageLoader);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  }
  function requestOfWithSizeResolver(model, contentScale, $composer, $changed) {
    _init_properties_utils_kt__i7zv1b();
    var $composer_0 = $composer;
    $composer_0.a2v(-329318062);
    if (isTraceInProgress()) {
      traceEventStart(-329318062, $changed, -1, 'coil3.compose.internal.requestOfWithSizeResolver (utils.kt:64)');
    }
    var tmp;
    if (model instanceof ImageRequest) {
      tmp = !(model.th7_1.php_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b2v();
      return model;
    }
    var tmp_0;
    if (equals(contentScale, Companion_getInstance_0().t7h_1)) {
      $composer_0.a2v(-858313867);
      $composer_0.b2v();
      tmp_0 = Companion_getInstance_4().shp_1;
    } else {
      $composer_0.a2v(-858270839);
      var tmp1_group = rememberConstraintsSizeResolver($composer_0, 0);
      $composer_0.b2v();
      tmp_0 = tmp1_group;
    }
    var sizeResolver = tmp_0;
    if (model instanceof ImageRequest) {
      $composer_0.a2v(-858186178);
      $composer_0.a2v(1219243085);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.h2l(model) | $composer_0.h2l(sizeResolver));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y2w();
      var tmp_1;
      if (invalid || it === Companion_getInstance_2().n2o_1) {
        // Inline function 'coil3.compose.internal.requestOfWithSizeResolver.<anonymous>' call
        var value = model.ehq().xhp(sizeResolver).c2o();
        $composer_0.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp3_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b2v();
      $composer_0.b2v();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b2v();
      return tmp3_group;
    } else {
      $composer_0.a2v(-858022374);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalPlatformContext();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.p2x(this_0);
      sourceInformationMarkerEnd($composer_1);
      var context = tmp0;
      $composer_0.a2v(1219249950);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!($composer_0.h2l(context) | $composer_0.h2l(model)) | $composer_0.h2l(sizeResolver));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.y2w();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_2().n2o_1) {
        // Inline function 'coil3.compose.internal.requestOfWithSizeResolver.<anonymous>' call
        var value_0 = Builder_init_$Create$(context).uhp(model).xhp(sizeResolver).c2o();
        $composer_0.j2x(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp5_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b2v();
      $composer_0.b2v();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b2v();
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
    $composer_0.a2v(1319639034);
    if (isTraceInProgress()) {
      traceEventStart(1319639034, $changed, -1, 'coil3.compose.internal.requestOf (utils.kt:45)');
    }
    if (model instanceof ImageRequest) {
      $composer_0.a2v(-72322677);
      $composer_0.b2v();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b2v();
      return model;
    } else {
      $composer_0.a2v(-72283431);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalPlatformContext();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.p2x(this_0);
      sourceInformationMarkerEnd($composer_1);
      var context = tmp0;
      $composer_0.a2v(690407039);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.h2l(context) | $composer_0.h2l(model));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y2w();
      var tmp;
      if (invalid || it === Companion_getInstance_2().n2o_1) {
        // Inline function 'coil3.compose.internal.requestOf.<anonymous>' call
        var value = Builder_init_$Create$(context).uhp(model).c2o();
        $composer_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b2v();
      $composer_0.b2v();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b2v();
      return tmp1_group;
    }
  }
  function rememberImmediateCoroutineScope($composer, $changed) {
    _init_properties_utils_kt__i7zv1b();
    var $composer_0 = $composer;
    $composer_0.a2v(357321100);
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
    var it = $composer_1.y2w();
    var tmp;
    if (false || it === Companion_getInstance_2().n2o_1) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_1.j2x(value);
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
    var tmp0 = $composer_2.p2x(this_0);
    sourceInformationMarkerEnd($composer_2);
    var isPreview = tmp0;
    $composer_0.a2v(-497161116);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.h2l(scope) | $composer_0.i2w(isPreview));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_2().n2o_1) {
      // Inline function 'coil3.compose.internal.rememberImmediateCoroutineScope.<anonymous>' call
      var tmp_2;
      if (isPreview) {
        tmp_2 = scope.b14().hj(Dispatchers_getInstance().k1g_1);
      } else {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.compose.internal.rememberImmediateCoroutineScope.<anonymous>.<anonymous>' call
        var $this$run = scope.b14();
        tmp_2 = $this$run.hj(resolveImmediateDispatcher($this$run));
      }
      var context = tmp_2;
      var value_0 = CoroutineScope_0(context);
      $composer_0.j2x(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.b2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b2v();
    return tmp1_group_0;
  }
  function resolveImmediateDispatcher(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var dispatcher = _this__u8e3s4.aa(Key_getInstance());
    if (dispatcher instanceof MainCoroutineDispatcher) {
      try {
        return dispatcher.h1g();
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
  function contentDescription$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_7().r9j_1);
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
        var this_0 = Dispatchers_getInstance().n1g().h1g();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.compose.internal.immediateDispatcher.<anonymous>' call
        this_0.v1b(EmptyCoroutineContext_getInstance());
        tmp = this_0;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_0 = Dispatchers_getInstance().k1g_1;
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
      tmp = current.zi0_1;
    } else {
      if (current instanceof Error_0) {
        tmp = current.bi1_1;
      } else {
        return null;
      }
    }
    var result = tmp;
    if (!(result instanceof SuccessResult)) {
      return null;
    }
    if (result.kha_1.equals(DataSource_MEMORY_CACHE_getInstance())) {
      return null;
    }
    var crossfadeMillis = get_crossfadeMillis(result.jha_1);
    if (crossfadeMillis > 0) {
      // Inline function 'kotlin.takeIf' call
      var this_0 = previous.wi0();
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'coil3.compose.maybeNewCrossfadePainter.<anonymous>' call
      if (previous instanceof Loading) {
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      return new CrossfadePainter(tmp$ret$1, current.wi0(), contentScale, crossfadeMillis, !result.oha_1, false);
    } else {
      return null;
    }
  }
  function validateRequestProperties(request) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.xh6_1 == null)) {
      // Inline function 'coil3.compose.validateRequestProperties.<anonymous>' call
      var message = 'request.target must be null.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  function asPainter(_this__u8e3s4, context, filterQuality) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_1().k66_1 : filterQuality;
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
    return Companion_getInstance_8().nhq_1;
  }
  var properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9;
  function _init_properties_LocalPlatformContext_nonAndroid_kt__ocy165() {
    if (!properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9) {
      properties_initialized_LocalPlatformContext_nonAndroid_kt_iyqeq9 = true;
      LocalPlatformContext = staticCompositionLocalOf(LocalPlatformContext$lambda);
    }
  }
  //region block: post-declaration
  protoOf(ConstraintsSizeResolver).x7b = foldIn;
  protoOf(ConstraintsSizeResolver).y7b = all;
  protoOf(ConstraintsSizeResolver).t7b = then;
  protoOf(ContentPainterNode).u7g = onMeasureResultChanged;
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
  _.$_$.c = Companion_getInstance_9;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-compose-core.js.map
