(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var equals = kotlin_kotlin.$_$.od;
  var VOID = kotlin_kotlin.$_$.j;
  var coerceIn = kotlin_kotlin.$_$.cg;
  var Long = kotlin_kotlin.$_$.hk;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var protoOf = kotlin_kotlin.$_$.ff;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var CancellationException = kotlin_kotlin.$_$.fc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.oe;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.p5;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b4;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var isNaN_0 = kotlin_kotlin.$_$.nl;
  var toString = kotlin_kotlin.$_$.jf;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var Enum = kotlin_kotlin.$_$.bk;
  var hashCode = kotlin_kotlin.$_$.xd;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var toLong = kotlin_kotlin.$_$.hf;
  var mutableIntObjectMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.q;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var get_PI = kotlin_kotlin.$_$.kf;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yl;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.z;
  var floatFromBits = kotlin_kotlin.$_$.rd;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var coerceIn_0 = kotlin_kotlin.$_$.eg;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.fa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var isArray = kotlin_kotlin.$_$.ge;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var MutableVector = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var captureStack = kotlin_kotlin.$_$.fd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var isFinite = kotlin_kotlin.$_$.kl;
  var isNaN_1 = kotlin_kotlin.$_$.ol;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.n5;
  var toRawBits = kotlin_kotlin.$_$.bm;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.la;
  var roundToLong = kotlin_kotlin.$_$.qf;
  var until = kotlin_kotlin.$_$.ig;
  var fill = kotlin_kotlin.$_$.t8;
  var intercepted = kotlin_kotlin.$_$.jc;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var returnIfSuspended = kotlin_kotlin.$_$.o;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w2;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.m;
  var lazy = kotlin_kotlin.$_$.pl;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var roundToInt = kotlin_kotlin.$_$.pf;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var coerceAtLeast = kotlin_kotlin.$_$.vf;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var to = kotlin_kotlin.$_$.dm;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x3;
  var mapOf = kotlin_kotlin.$_$.fa;
  var compareTo = kotlin_kotlin.$_$.ld;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.i1;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$stop$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  initMetadataForLambda(animateValueAsState$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(animateValueAsState$slambda, CoroutineImpl, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.h1(this.vb6()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(DecayAnimation, 'DecayAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec);
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec');
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.yb6(this.wb6(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(InfiniteRepeatableSpec, 'InfiniteRepeatableSpec');
  initMetadataForClass(KeyframesSpecBaseConfig, 'KeyframesSpecBaseConfig');
  initMetadataForClass(KeyframesSpecConfig, 'KeyframesSpecConfig', KeyframesSpecConfig, KeyframesSpecBaseConfig);
  initMetadataForClass(KeyframeBaseEntity, 'KeyframeBaseEntity');
  initMetadataForClass(KeyframeEntity, 'KeyframeEntity', VOID, KeyframeBaseEntity);
  initMetadataForClass(KeyframesSpec, 'KeyframesSpec');
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec);
  initMetadataForClass(SnapSpec, 'SnapSpec', SnapSpec);
  initMetadataForClass(RepeatMode, 'RepeatMode', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(AnimationState, 'AnimationState');
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector_3, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector_3);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Arc, 'Arc');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ArcSpline, 'ArcSpline');
  initMetadataForClass(ComplexDouble, 'ComplexDouble');
  initMetadataForClass(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl');
  initMetadataForClass(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec');
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.wbb(this.ybb(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec');
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$0, CoroutineImpl);
  initMetadataForLambda(InfiniteTransition$run$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState');
  initMetadataForLambda(InfiniteTransition$run$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(InfiniteTransition, 'InfiniteTransition');
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForCoroutine($animateCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$2, CoroutineImpl);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SeekingAnimationState, 'SeekingAnimationState', SeekingAnimationState);
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(SeekableTransitionState$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($runAnimationsCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($doOneFrameCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($animateOneFrameCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionAfterTargetStateChangeCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionCOROUTINE$7, CoroutineImpl);
  initMetadataForClass(TransitionState, 'TransitionState');
  initMetadataForClass(SeekableTransitionState, 'SeekableTransitionState', VOID, TransitionState, VOID, [0, 1, 2]);
  initMetadataForClass(DeferredAnimationData, 'DeferredAnimationData');
  initMetadataForClass(TransitionAnimationState_0, 'TransitionAnimationState');
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.sbp()) && equals(targetState, this.p4b());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForClass(DeferredAnimation, 'DeferredAnimation');
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForLambda(rememberTransition$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_1);
  initMetadataForClass(_no_name_provided__qut3iv_2);
  initMetadataForClass(_no_name_provided__qut3iv_3);
  initMetadataForClass(_no_name_provided__qut3iv_4);
  initMetadataForClass(_no_name_provided__qut3iv_5);
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl');
  initMetadataForObject(Spring, 'Spring');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedFloatAnimationSpec$1);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedInfiniteRepeatableSpec, 'VectorizedInfiniteRepeatableSpec', VOID, VOID, [VectorizedAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.qbt() + this.rbt() | 0).h3(new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ArcMode, 'ArcMode');
  initMetadataForClass(VectorizedKeyframesSpec, 'VectorizedKeyframesSpec', VOID, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedKeyframeSpecElementInfo, 'VectorizedKeyframeSpecElementInfo');
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedSnapSpec, 'VectorizedSnapSpec', VectorizedSnapSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(createSpringAnimations$1);
  initMetadataForClass(createSpringAnimations$2);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.sb1_1);
      var clamped = clampToBounds(this$0, $this$animate.c1());
      var tmp;
      if (!equals(clamped, $this$animate.c1())) {
        this$0.sb1_1.sb2(clamped);
        $endState.sb2(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.tb2();
        $clampingNeeded._v = true;
        tmp = Unit_instance;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var this_0 = $this.tb1_1;
    isRunning$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var this_0 = $this.ub1_1;
    targetValue$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.sb1_1.pb2_1;
    return $this.xb1_1.wb2(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.bb2_1, $this.zb1_1) && equals($this.cb2_1, $this.ab2_1)) {
      return value;
    }
    var valueVector = $this.pb1_1.xb2()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.zb2(i) < $this.bb2_1.zb2(i) || valueVector.zb2(i) > $this.cb2_1.zb2(i)) {
          clamped = true;
          valueVector.ab3(i, coerceIn(valueVector.zb2(i), $this.bb2_1.zb2(i), $this.cb2_1.zb2(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.pb1_1.bb3()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.sb1_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    this_0.ob2_1.cb3();
    this_0.pb2_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.lb3_1 = this$0;
    this.mb3_1 = $initialVelocity;
    this.nb3_1 = $animation;
    this.ob3_1 = $startTime;
    this.pb3_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).tb3 = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Animatable$runAnimation$slambda).ib = function ($completion) {
    return this.tb3($completion);
  };
  protoOf(Animatable$runAnimation$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.lb3_1.sb1_1.ob2_1 = this.lb3_1.pb1_1.xb2()(this.mb3_1);
            _set_targetValue__aqsk0r(this.lb3_1, this.nb3_1.ub3());
            _set_isRunning__kpbg34(this.lb3_1, true);
            this.rb3_1 = copy_0(this.lb3_1.sb1_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.sb3_1 = {_v: false};
            this.s9_1 = 1;
            suspendResult = animate(this.rb3_1, this.nb3_1, this.ob3_1, Animatable$runAnimation$slambda$lambda(this.lb3_1, this.rb3_1, this.pb3_1, this.sb3_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.sb3_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.lb3_1);
            this.qb3_1 = new AnimationResult(this.rb3_1, endReason);
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_0 = this.v9_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.v9_1;
              var tmp_1 = this;
              endAnimation(this.lb3_1);
              throw e;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return this.qb3_1;
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
  protoOf(Animatable$runAnimation$slambda).z25 = function (completion) {
    return new Animatable$runAnimation$slambda(this.lb3_1, this.mb3_1, this.nb3_1, this.ob3_1, this.pb3_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.tb3($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.db4_1 = this$0;
    this.eb4_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).y25 = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Animatable$snapTo$slambda).ib = function ($completion) {
    return this.y25($completion);
  };
  protoOf(Animatable$snapTo$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          endAnimation(this.db4_1);
          var clampedValue = clampToBounds(this.db4_1, this.eb4_1);
          this.db4_1.sb1_1.sb2(clampedValue);
          _set_targetValue__aqsk0r(this.db4_1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).z25 = function (completion) {
    return new Animatable$snapTo$slambda(this.db4_1, this.eb4_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.y25($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.nb4_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).y25 = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Animatable$stop$slambda).ib = function ($completion) {
    return this.y25($completion);
  };
  protoOf(Animatable$stop$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          endAnimation(this.nb4_1);
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
  protoOf(Animatable$stop$slambda).z25 = function (completion) {
    return new Animatable$stop$slambda(this.nb4_1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.y25($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.pb1_1 = typeConverter;
    this.qb1_1 = visibilityThreshold;
    this.rb1_1 = label;
    this.sb1_1 = new AnimationState(this.pb1_1, initialValue);
    this.tb1_1 = mutableStateOf(false);
    this.ub1_1 = mutableStateOf(initialValue);
    this.vb1_1 = null;
    this.wb1_1 = null;
    this.xb1_1 = new MutatorMutex();
    this.yb1_1 = new SpringSpec(VOID, VOID, this.qb1_1);
    var tmp = this;
    var tmp0_subject = this.ob4();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.zb1_1 = tmp_1 instanceof AnimationVector_3 ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.ob4();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.ab2_1 = tmp_4 instanceof AnimationVector_3 ? tmp_4 : THROW_CCE();
    this.bb2_1 = this.zb1_1;
    this.cb2_1 = this.ab2_1;
  }
  protoOf(Animatable).c1 = function () {
    return this.sb1_1.c1();
  };
  protoOf(Animatable).ob4 = function () {
    return this.sb1_1.ob2_1;
  };
  protoOf(Animatable).pb4 = function () {
    return this.pb1_1.bb3()(this.ob4());
  };
  protoOf(Animatable).qb4 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.tb1_1;
    isRunning$factory_0();
    return this_0.c1();
  };
  protoOf(Animatable).ub3 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ub1_1;
    targetValue$factory_0();
    return this_0.c1();
  };
  protoOf(Animatable).rb4 = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.c1();
    var tmp1_typeConverter = this.pb1_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).sb4 = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.yb1_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.pb4() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.rb4(targetValue, animationSpec, initialVelocity, block, $completion) : $super.rb4.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).tb4 = function (targetValue, $completion) {
    return this.xb1_1.wb2(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).ub4 = function ($completion) {
    return this.xb1_1.wb2(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).vb4 = function () {
    return this.sb1_1;
  };
  function AnimationResult(endState, endReason) {
    this.wb4_1 = endState;
    this.xb4_1 = endReason;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.xb4_1.toString() + ', endState=' + this.wb4_1.toString() + ')';
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    var tmp;
    if (visibilityThreshold === VOID) {
      tmp = 0.01;
    } else {
      tmp = visibilityThreshold;
    }
    visibilityThreshold = tmp;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter(FloatCompanionObject_instance), visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.qb4();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.qb4();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.ub3();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.ub3();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector(Infinity);
      positiveInfinityBounds2D = AnimationVector_0(Infinity, Infinity);
      positiveInfinityBounds3D = AnimationVector_1(Infinity, Infinity, Infinity);
      positiveInfinityBounds4D = AnimationVector_2(Infinity, Infinity, Infinity, Infinity);
      negativeInfinityBounds1D = AnimationVector(-Infinity);
      negativeInfinityBounds2D = AnimationVector_0(-Infinity, -Infinity);
      negativeInfinityBounds3D = AnimationVector_1(-Infinity, -Infinity, -Infinity);
      negativeInfinityBounds4D = AnimationVector_2(-Infinity, -Infinity, -Infinity, -Infinity);
    }
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateDpAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1407150062, 'C(animateDpAsState)P(3:c#ui.unit.Dp!1,2)114@5081L165:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1407150062, $changed, -1, 'androidx.compose.animation.core.animateDpAsState (AnimateAsState.kt:113)');
    }
    var tmp = get_VectorConverter_6(Companion_getInstance());
    var tmp_0 = animationSpec_0;
    var tmp0 = animateValueAsState(new Dp(targetValue), tmp, tmp_0, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateValueAsState(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1994373980, 'C(animateValueAsState)P(3,4!1,5,2)393@18031L21,399@18213L44,400@18279L79,401@18379L38,402@18456L339,413@18814L42,414@18872L44,414@18861L55,417@18945L697,417@18921L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, 728506592, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp;
      if (false || it === Companion_getInstance_0().l2u_1) {
        // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
        var value = spring();
        $composer_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      animationSpec_0 = tmp0_group;
    }
    if (!(($default & 8) === 0))
      visibilityThreshold_0 = null;
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1994373980, $changed, -1, 'androidx.compose.animation.core.animateValueAsState (AnimateAsState.kt:397)');
    }
    sourceInformationMarkerStart($composer_0, 728512439, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var toolingOverride = tmp2_group;
    sourceInformationMarkerStart($composer_0, 728514586, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.w32();
    var tmp_3;
    if (false || it_1 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.h33(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var animatable = tmp3_group;
    var listener$delegate = rememberUpdatedState(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
    var $this$run = animationSpec_0;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0 == null)) {
      tmp_7 = $this$run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals($this$run.ab5_1, visibilityThreshold_0);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring($this$run.yb4_1, $this$run.zb4_1, visibilityThreshold_0);
    } else {
      tmp_5 = $this$run;
    }
    var tmp$ret$13 = tmp_5;
    var animSpec$delegate = rememberUpdatedState(tmp$ret$13, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 728531669, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.w32();
    var tmp_8;
    if (false || it_2 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_2 = Channel(-1);
      $composer_0.h33(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = it_2;
    }
    var tmp_9 = tmp_8;
    var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var channel = tmp4_group;
    sourceInformationMarkerStart($composer_0, 728533527, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.f32(channel) | (($changed & 14 ^ 6) > 4 && $composer_0.f32(targetValue) || ($changed & 6) === 4));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.w32();
    var tmp_10;
    if (invalid || it_3 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_3 = animateValueAsState$lambda_1(channel, targetValue);
      $composer_0.h33(value_3);
      tmp_10 = value_3;
    } else {
      tmp_10 = it_3;
    }
    var tmp_11 = tmp_10;
    var tmp5_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp5_group, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 728536516, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!($composer_0.f32(channel) | $composer_0.f32(animatable)) | $composer_0.f2r(animSpec$delegate)) | $composer_0.f2r(listener$delegate));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.w32();
    var tmp_12;
    if (invalid_0 || it_4 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_4 = animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null);
      $composer_0.h33(value_4);
      tmp_12 = value_4;
    } else {
      tmp_12 = it_4;
    }
    var tmp_13 = tmp_12;
    var tmp6_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(channel, tmp6_group, $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.c1();
    var tmp1 = tmp0_elvis_lhs == null ? animatable.vb4() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function animateFloatAsState(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 668842840, 'C(animateFloatAsState)P(3!1,4,2)75@3368L173:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0))
      visibilityThreshold_0 = 0.01;
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(668842840, $changed, -1, 'androidx.compose.animation.core.animateFloatAsState (AnimateAsState.kt:68)');
    }
    $composer_0.a31(313403102);
    sourceInformation($composer_0, '71@3220L83');
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      sourceInformationMarkerStart($composer_0, 313404723, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($changed & 896 ^ 384) > 256 && $composer_0.h32(visibilityThreshold_0) || ($changed & 384) === 256;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().l2u_1) {
        // Inline function 'androidx.compose.animation.core.animateFloatAsState.<anonymous>' call
        var value = spring(VOID, VOID, visibilityThreshold_0);
        $composer_0.h33(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    } else {
      tmp = animationSpec_0;
    }
    var tmp2_group = tmp;
    $composer_0.c31();
    var resolvedAnimSpec = tmp2_group;
    var tmp0 = animateValueAsState(targetValue, get_VectorConverter(FloatCompanionObject_instance), resolvedAnimSpec, visibilityThreshold_0, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $listener$delegate.c1();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animSpec$delegate.c1();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.a1o($targetValue);
      return Unit_instance;
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.jb5_1 = $newTarget;
    this.kb5_1 = $animatable;
    this.lb5_1 = $animSpec$delegate;
    this.mb5_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(animateValueAsState$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            if (!equals(this.jb5_1, this.kb5_1.ub3())) {
              this.s9_1 = 1;
              suspendResult = this.kb5_1.sb4(this.jb5_1, animateValueAsState$lambda_0(this.lb5_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.mb5_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.kb5_1.c1());
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
  protoOf(animateValueAsState$slambda$slambda).b20 = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.jb5_1, this.kb5_1, this.lb5_1, this.mb5_1, completion);
    i.nb5_1 = $this$launch;
    return i;
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.wb5_1 = $channel;
    this.xb5_1 = $animatable;
    this.yb5_1 = $animSpec$delegate;
    this.zb5_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(animateValueAsState$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.bb6_1 = this.wb5_1.m();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.s9_1 = 2;
            suspendResult = this.bb6_1.t1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.s9_1 = 3;
              continue $sm;
            }

            var target = this.bb6_1.o();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.wb5_1.e1o());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.ab6_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.xb5_1, this.yb5_1, this.zb5_1, null));
            this.s9_1 = 1;
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
  protoOf(animateValueAsState$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.wb5_1, this.xb5_1, this.yb5_1, this.zb5_1, completion);
    i.ab6_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_instance));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.cb6(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this.lb6_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.db6_1.mb6($this.hb6_1, $this.ib6_1, $this.jb6_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.<get-endVelocity>.<anonymous>' call
      $this.lb6_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.db6_1 = animationSpec;
    this.eb6_1 = typeConverter;
    this.fb6_1 = targetValue;
    this.gb6_1 = initialValue;
    this.hb6_1 = this.eb6_1.xb2()(initialValue);
    this.ib6_1 = this.eb6_1.xb2()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.jb6_1 = tmp1_elvis_lhs == null ? newInstance(this.eb6_1.xb2()(initialValue)) : tmp1_elvis_lhs;
    this.kb6_1 = new Long(-1, -1);
    this.lb6_1 = null;
  }
  protoOf(TargetBasedAnimation).nb6 = function () {
    return this.eb6_1;
  };
  protoOf(TargetBasedAnimation).ob6 = function (value) {
    if (!equals(this.fb6_1, value)) {
      this.fb6_1 = value;
      this.ib6_1 = this.eb6_1.xb2()(value);
      this.lb6_1 = null;
      this.kb6_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).pb6 = function (value) {
    if (!equals(value, this.gb6_1)) {
      this.gb6_1 = value;
      this.hb6_1 = this.eb6_1.xb2()(value);
      this.lb6_1 = null;
      this.kb6_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).qb6 = function () {
    return this.gb6_1;
  };
  protoOf(TargetBasedAnimation).ub3 = function () {
    return this.fb6_1;
  };
  protoOf(TargetBasedAnimation).rb6 = function () {
    return this.db6_1.rb6();
  };
  protoOf(TargetBasedAnimation).sb6 = function (playTimeNanos) {
    var tmp;
    if (!this.ub6(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var it = this.db6_1.tb6(playTimeNanos, this.hb6_1, this.ib6_1, this.jb6_1);
      var inductionVariable = 0;
      var last = it.yb2();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(it.zb2(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$0);
          }
        }
         while (inductionVariable < last);
      tmp = this.eb6_1.bb3()(it);
    } else {
      tmp = this.ub3();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).vb6 = function () {
    if (this.kb6_1.h1(new Long(0, 0)) < 0) {
      this.kb6_1 = this.db6_1.wb6(this.hb6_1, this.ib6_1, this.jb6_1);
    }
    return this.kb6_1;
  };
  protoOf(TargetBasedAnimation).xb6 = function (playTimeNanos) {
    var tmp;
    if (!this.ub6(playTimeNanos)) {
      tmp = this.db6_1.yb6(playTimeNanos, this.hb6_1, this.ib6_1, this.jb6_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.qb6()) + ' -> ' + toString_0(this.ub3()) + ',' + ('initial velocity: ' + toString(this.jb6_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.db6_1));
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.vb6().i3(new Long(1000000, 0));
  }
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.xb2()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.cb6(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.zb6_1 = animationSpec;
    this.ab7_1 = typeConverter;
    this.bb7_1 = initialValue;
    this.cb7_1 = this.ab7_1.xb2()(this.bb7_1);
    this.db7_1 = copy_1(initialVelocityVector);
    this.fb7_1 = this.ab7_1.bb3()(this.zb6_1.ib7(this.cb7_1, initialVelocityVector));
    this.hb7_1 = false;
    this.gb7_1 = this.zb6_1.jb7(this.cb7_1, initialVelocityVector);
    this.eb7_1 = copy_1(this.zb6_1.kb7(this.gb7_1, this.cb7_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.eb7_1.yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.eb7_1.ab3(i, coerceIn(this.eb7_1.zb2(i), -this.zb6_1.lb7(), this.zb6_1.lb7()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).nb6 = function () {
    return this.ab7_1;
  };
  protoOf(DecayAnimation).ub3 = function () {
    return this.fb7_1;
  };
  protoOf(DecayAnimation).vb6 = function () {
    return this.gb7_1;
  };
  protoOf(DecayAnimation).rb6 = function () {
    return this.hb7_1;
  };
  protoOf(DecayAnimation).sb6 = function (playTimeNanos) {
    if (!this.ub6(playTimeNanos)) {
      return this.ab7_1.bb3()(this.zb6_1.mb7(playTimeNanos, this.cb7_1, this.db7_1));
    } else {
      return this.fb7_1;
    }
  };
  protoOf(DecayAnimation).xb6 = function (playTimeNanos) {
    if (!this.ub6(playTimeNanos)) {
      return this.zb6_1.kb7(playTimeNanos, this.cb7_1, this.db7_1);
    } else {
      return this.eb7_1;
    }
  };
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_instance;
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.yb4_1 = dampingRatio;
    this.zb4_1 = stiffness;
    this.ab5_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).cb6 = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.yb4_1, this.zb4_1, convert(converter, this.ab5_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.yb4_1 === this.yb4_1 && other.zb4_1 === this.zb4_1 && equals(other.ab5_1, this.ab5_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.ab5_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.yb4_1) | 0, 31) + getNumberHashCode(this.zb4_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.xb2()(data);
    }
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.nb7_1 = animationSpec;
    this.ob7_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).cb6 = function (converter) {
    var vecSpec = this.nb7_1.cb6(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.ob7_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.nb7_1)) + this.ob7_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return other.ob7_1.equals(this.ob7_1) && equals(other.nb7_1, this.nb7_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.pb7_1 = vectorizedAnimationSpec;
    this.qb7_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).rb6 = function () {
    return this.pb7_1.rb6();
  };
  protoOf(StartDelayVectorizedAnimationSpec).wb6 = function (initialValue, targetValue, initialVelocity) {
    return this.pb7_1.wb6(initialValue, targetValue, initialVelocity).f3(this.qb7_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).yb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.h1(this.qb7_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.pb7_1.yb6(playTimeNanos.g3(this.qb7_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).tb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.h1(this.qb7_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.pb7_1.tb6(playTimeNanos.g3(this.qb7_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.pb7_1)) + this.qb7_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return other.qb7_1.equals(this.qb7_1) && equals(other.pb7_1, this.pb7_1);
  };
  function InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.rb7_1 = animation;
    this.sb7_1 = repeatMode;
    this.tb7_1 = initialStartOffset;
  }
  protoOf(InfiniteRepeatableSpec).cb6 = function (converter) {
    return new VectorizedInfiniteRepeatableSpec(this.rb7_1.cb6(converter), this.sb7_1, this.tb7_1);
  };
  protoOf(InfiniteRepeatableSpec).equals = function (other) {
    var tmp;
    if (other instanceof InfiniteRepeatableSpec) {
      tmp = (equals(other.rb7_1, this.rb7_1) && other.sb7_1.equals(this.sb7_1) && equals(other.tb7_1, this.tb7_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(InfiniteRepeatableSpec).hashCode = function () {
    return imul(imul(hashCode(this.rb7_1), 31) + this.sb7_1.hashCode() | 0, 31) + StartOffset__hashCode_impl_ith3z7(this.tb7_1) | 0;
  };
  function infiniteRepeatable(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    return new InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset);
  }
  function KeyframesSpecConfig() {
    KeyframesSpecBaseConfig.call(this);
  }
  protoOf(KeyframesSpecConfig).xb7 = function (_this__u8e3s4, timeStamp) {
    // Inline function 'kotlin.also' call
    var this_0 = new KeyframeEntity(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.KeyframesSpecConfig.at.<anonymous>' call
    this.ab8_1.ow(timeStamp, this_0);
    return this_0;
  };
  function KeyframeEntity(value, easing, arcMode) {
    easing = easing === VOID ? get_LinearEasing() : easing;
    arcMode = arcMode === VOID ? Companion_getInstance_11().eb8_1 : arcMode;
    KeyframeBaseEntity.call(this, value, easing);
    this.hb8_1 = arcMode;
  }
  protoOf(KeyframeEntity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof KeyframeEntity))
      return false;
    return equals(other.ib8_1, this.ib8_1) && equals(other.jb8_1, this.jb8_1) && other.hb8_1 === this.hb8_1;
  };
  protoOf(KeyframeEntity).hashCode = function () {
    var tmp0_safe_receiver = this.ib8_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + ArcMode__hashCode_impl_ghaz31(this.hb8_1) | 0;
    result = imul(31, result) + hashCode(this.jb8_1) | 0;
    return result;
  };
  function KeyframesSpec(config) {
    this.kb8_1 = config;
  }
  protoOf(KeyframesSpec).cb6 = function (converter) {
    var timestamps = new MutableIntList(this.kb8_1.ab8_1.p() + 2 | 0);
    var timeToInfoMap = new MutableIntObjectMap(this.kb8_1.ab8_1.p());
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var this_0 = this.kb8_1.ab8_1;
    var k = this_0.ew_1;
    var v = this_0.fw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this_0.dw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.r3(this_1.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.animation.core.KeyframesSpec.vectorize.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  timestamps.zv(key);
                  timeToInfoMap.ow(key, new VectorizedKeyframeSpecElementInfo(converter.xb2()(value.ib8_1), value.jb8_1, value.hb8_1));
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    if (!this.kb8_1.ab8_1.sv(0)) {
      timestamps.aw(0, 0);
    }
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    var this_2 = this.kb8_1.ab8_1;
    var key_0 = this.kb8_1.yb7_1;
    if (!this_2.sv(key_0)) {
      timestamps.zv(this.kb8_1.yb7_1);
    }
    // Inline function 'androidx.collection.IntList.isNotEmpty' call
    if (!(timestamps.vv_1 === 0)) {
      timestamps.cw();
    }
    return new VectorizedKeyframesSpec(timestamps, timeToInfoMap, this.kb8_1.yb7_1, this.kb8_1.zb7_1, get_LinearEasing(), Companion_getInstance_11().eb8_1);
  };
  function keyframes(init) {
    // Inline function 'kotlin.apply' call
    var this_0 = new KeyframesSpecConfig();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return new KeyframesSpec(this_0);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.lb8_1 = durationMillis;
    this.mb8_1 = delay;
    this.nb8_1 = easing;
  }
  protoOf(TweenSpec).cb6 = function (converter) {
    return new VectorizedTweenSpec(this.lb8_1, this.mb8_1, this.nb8_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.lb8_1 === this.lb8_1 && other.mb8_1 === this.mb8_1 && equals(other.nb8_1, this.nb8_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.lb8_1, 31) + hashCode(this.nb8_1) | 0, 31) + this.mb8_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function SnapSpec(delay) {
    delay = delay === VOID ? 0 : delay;
    this.ob8_1 = delay;
  }
  protoOf(SnapSpec).cb6 = function (converter) {
    return new VectorizedSnapSpec(this.ob8_1);
  };
  protoOf(SnapSpec).equals = function (other) {
    var tmp;
    if (other instanceof SnapSpec) {
      tmp = other.ob8_1 === this.ob8_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SnapSpec).hashCode = function () {
    return this.ob8_1;
  };
  var RepeatMode_Restart_instance;
  var RepeatMode_Reverse_instance;
  var RepeatMode_entriesInitialized;
  function RepeatMode_initEntries() {
    if (RepeatMode_entriesInitialized)
      return Unit_instance;
    RepeatMode_entriesInitialized = true;
    RepeatMode_Restart_instance = new RepeatMode('Restart', 0);
    RepeatMode_Reverse_instance = new RepeatMode('Reverse', 1);
  }
  function RepeatMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _StartOffset___init__impl__615djw(value) {
    return value;
  }
  function _StartOffset___get_value__impl__8sikig($this) {
    return $this;
  }
  function _StartOffset___init__impl__615djw_0(offsetMillis, offsetType) {
    offsetType = offsetType === VOID ? Companion_getInstance_7().pb8_1 : offsetType;
    return _StartOffset___init__impl__615djw(toLong(imul(offsetMillis, _StartOffsetType___get_value__impl__i1pfem(offsetType))));
  }
  function StartOffset__hashCode_impl_ith3z7($this) {
    return $this.hashCode();
  }
  function KeyframesSpecBaseConfig() {
    this.yb7_1 = 300;
    this.zb7_1 = 0;
    this.ab8_1 = mutableIntObjectMapOf();
  }
  protoOf(KeyframesSpecBaseConfig).bb8 = function (_this__u8e3s4, easing) {
    _this__u8e3s4.jb8_1 = easing;
    return _this__u8e3s4;
  };
  function KeyframeBaseEntity(value, easing) {
    this.ib8_1 = value;
    this.jb8_1 = easing;
  }
  function _StartOffsetType___init__impl__g1ur7a(value) {
    return value;
  }
  function _StartOffsetType___get_value__impl__i1pfem($this) {
    return $this;
  }
  function Companion() {
    Companion_instance_0 = this;
    this.pb8_1 = _StartOffsetType___init__impl__g1ur7a(-1);
    this.qb8_1 = _StartOffsetType___init__impl__g1ur7a(1);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function RepeatMode_Restart_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Restart_instance;
  }
  function RepeatMode_Reverse_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Reverse_instance;
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.xb2()(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.createZeroVectorFrom.<anonymous>' call
    this_0.cb3();
    return this_0;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.mb2_1 = typeConverter;
    this.nb2_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.ob2_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.mb2_1, initialValue) : tmp1_elvis_lhs;
    this.pb2_1 = lastFrameTimeNanos;
    this.qb2_1 = finishedTimeNanos;
    this.rb2_1 = isRunning;
  }
  protoOf(AnimationState).sb2 = function (_set____db54di) {
    var this_0 = this.nb2_1;
    value$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).c1 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.nb2_1;
    value$factory_0();
    return this_0.c1();
  };
  protoOf(AnimationState).pb4 = function () {
    return this.mb2_1.bb3()(this.ob2_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.c1()) + ', ') + ('velocity=' + toString_0(this.pb4()) + ', ') + ('isRunning=' + this.rb2_1 + ', ') + ('lastFrameTimeNanos=' + this.pb2_1.toString() + ', ') + ('finishedTimeNanos=' + this.qb2_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter(FloatCompanionObject_instance), initialValue, AnimationVector(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.c1() : value;
    velocity = velocity === VOID ? _this__u8e3s4.ob2_1.rb8_1 : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.pb2_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.qb2_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.rb2_1 : isRunning;
    return new AnimationState(_this__u8e3s4.mb2_1, value, AnimationVector(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.db2_1 = typeConverter;
    this.eb2_1 = targetValue;
    this.fb2_1 = startTimeNanos;
    this.gb2_1 = onCancel;
    this.hb2_1 = mutableStateOf(initialValue);
    this.ib2_1 = copy_1(initialVelocityVector);
    this.jb2_1 = lastFrameTimeNanos;
    this.kb2_1 = new Long(0, -2147483648);
    this.lb2_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).sb2 = function (_set____db54di) {
    var this_0 = this.hb2_1;
    value$factory_1();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).c1 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.hb2_1;
    value$factory_2();
    return this_0.c1();
  };
  protoOf(AnimationScope).tb8 = function (_set____db54di) {
    var this_0 = this.lb2_1;
    isRunning$factory_1();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).qb4 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.lb2_1;
    isRunning$factory_2();
    return this_0.c1();
  };
  protoOf(AnimationScope).pb4 = function () {
    return this.db2_1.bb3()(this.ib2_1);
  };
  protoOf(AnimationScope).tb2 = function () {
    this.tb8(false);
    this.gb2_1();
  };
  function copy_0(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.c1() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.ob2_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.pb2_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.qb2_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.rb2_1 : isRunning;
    return new AnimationState(_this__u8e3s4.mb2_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState_1(typeConverter, initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(typeConverter, initialValue, typeConverter.xb2()(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.qb4();
    }, function (receiver, value) {
      return receiver.tb8(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.qb4();
    }, function (receiver, value) {
      return receiver.tb8(value);
    });
  }
  function AnimationVector1D(initVal) {
    AnimationVector_3.call(this);
    this.rb8_1 = initVal;
    this.sb8_1 = 1;
  }
  protoOf(AnimationVector1D).cb3 = function () {
    this.rb8_1 = 0.0;
  };
  protoOf(AnimationVector1D).ub8 = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).zb2 = function (index) {
    if (index === 0) {
      return this.rb8_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).ab3 = function (index, value) {
    if (index === 0) {
      this.rb8_1 = value;
    }
  };
  protoOf(AnimationVector1D).yb2 = function () {
    return this.sb8_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.rb8_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.rb8_1 === this.rb8_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.rb8_1);
  };
  function AnimationVector(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector_3.call(this);
    this.vb8_1 = v1;
    this.wb8_1 = v2;
    this.xb8_1 = 2;
  }
  protoOf(AnimationVector2D).cb3 = function () {
    this.vb8_1 = 0.0;
    this.wb8_1 = 0.0;
  };
  protoOf(AnimationVector2D).ub8 = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).zb2 = function (index) {
    switch (index) {
      case 0:
        return this.vb8_1;
      case 1:
        return this.wb8_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).ab3 = function (index, value) {
    if (index === 0)
      this.vb8_1 = value;
    else if (index === 1)
      this.wb8_1 = value;
  };
  protoOf(AnimationVector2D).yb2 = function () {
    return this.xb8_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.vb8_1 + ', v2 = ' + this.wb8_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.vb8_1 === this.vb8_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.wb8_1 === this.wb8_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.vb8_1), 31) + getNumberHashCode(this.wb8_1) | 0;
  };
  function AnimationVector_0(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector_3.call(this);
    this.yb8_1 = v1;
    this.zb8_1 = v2;
    this.ab9_1 = v3;
    this.bb9_1 = 3;
  }
  protoOf(AnimationVector3D).cb3 = function () {
    this.yb8_1 = 0.0;
    this.zb8_1 = 0.0;
    this.ab9_1 = 0.0;
  };
  protoOf(AnimationVector3D).ub8 = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).zb2 = function (index) {
    switch (index) {
      case 0:
        return this.yb8_1;
      case 1:
        return this.zb8_1;
      case 2:
        return this.ab9_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).ab3 = function (index, value) {
    switch (index) {
      case 0:
        this.yb8_1 = value;
        break;
      case 1:
        this.zb8_1 = value;
        break;
      case 2:
        this.ab9_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).yb2 = function () {
    return this.bb9_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.yb8_1 + ', v2 = ' + this.zb8_1 + ', v3 = ' + this.ab9_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.yb8_1 === this.yb8_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.zb8_1 === this.zb8_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.ab9_1 === this.ab9_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.yb8_1), 31) + getNumberHashCode(this.zb8_1) | 0, 31) + getNumberHashCode(this.ab9_1) | 0;
  };
  function AnimationVector_1(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector_3.call(this);
    this.cb9_1 = v1;
    this.db9_1 = v2;
    this.eb9_1 = v3;
    this.fb9_1 = v4;
    this.gb9_1 = 4;
  }
  protoOf(AnimationVector4D).cb3 = function () {
    this.cb9_1 = 0.0;
    this.db9_1 = 0.0;
    this.eb9_1 = 0.0;
    this.fb9_1 = 0.0;
  };
  protoOf(AnimationVector4D).ub8 = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).zb2 = function (index) {
    switch (index) {
      case 0:
        return this.cb9_1;
      case 1:
        return this.db9_1;
      case 2:
        return this.eb9_1;
      case 3:
        return this.fb9_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).ab3 = function (index, value) {
    switch (index) {
      case 0:
        this.cb9_1 = value;
        break;
      case 1:
        this.db9_1 = value;
        break;
      case 2:
        this.eb9_1 = value;
        break;
      case 3:
        this.fb9_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).yb2 = function () {
    return this.gb9_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.cb9_1 + ', v2 = ' + this.db9_1 + ', v3 = ' + this.eb9_1 + ', v4 = ' + this.fb9_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.cb9_1 === this.cb9_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.db9_1 === this.db9_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.eb9_1 === this.eb9_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.fb9_1 === this.fb9_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.cb9_1), 31) + getNumberHashCode(this.db9_1) | 0, 31) + getNumberHashCode(this.eb9_1) | 0, 31) + getNumberHashCode(this.fb9_1) | 0;
  };
  function AnimationVector_2(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function AnimationVector_3() {
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.ub8();
    return tmp instanceof AnimationVector_3 ? tmp : THROW_CCE();
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.ab3(i, _this__u8e3s4.zb2(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.ab3(i, source.zb2(i));
      }
       while (inductionVariable < last);
  }
  function _get_ourPercent__6mcer2($this) {
    if (!($this.hb9_1 == null)) {
      return ensureNotNull($this.hb9_1);
    }
    $this.hb9_1 = new Float32Array(91);
    return ensureNotNull($this.hb9_1);
  }
  function lookup($this, v) {
    if (v <= 0) {
      return 0.0;
    }
    if (v >= 1) {
      return 1.0;
    }
    var pos = v * ($this.sb9_1.length - 1 | 0);
    var iv = numberToInt(pos);
    var off = pos - numberToInt(pos);
    return $this.sb9_1[iv] + off * ($this.sb9_1[iv + 1 | 0] - $this.sb9_1[iv]);
  }
  function buildTable($this, x1, y1, x2, y2) {
    var a = x2 - x1;
    var b = y1 - y2;
    var lx = 0.0;
    var ly = 0.0;
    var dist = 0.0;
    var inductionVariable = 0;
    var last = _get_ourPercent__6mcer2(Companion_instance_1).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.toRadians' call
        var angle = 90.0 * i / (_get_ourPercent__6mcer2(Companion_instance_1).length - 1 | 0) / 180 * get_PI();
        // Inline function 'kotlin.math.sin' call
        var s = Math.sin(angle);
        // Inline function 'kotlin.math.cos' call
        var c = Math.cos(angle);
        var px = a * s;
        var py = b * c;
        if (i > 0) {
          var tmp = dist;
          // Inline function 'kotlin.math.hypot' call
          var x = px - lx;
          var y = py - ly;
          dist = tmp + hypot(x, y);
          _get_ourPercent__6mcer2(Companion_instance_1)[i] = dist;
        }
        lx = px;
        ly = py;
      }
       while (inductionVariable <= last);
    $this.pb9_1 = dist;
    var inductionVariable_0 = 0;
    var last_0 = _get_ourPercent__6mcer2(Companion_instance_1).length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = _get_ourPercent__6mcer2(Companion_instance_1);
        tmp2_array[i_0] = tmp2_array[i_0] / dist;
      }
       while (inductionVariable_0 <= last_0);
    var inductionVariable_1 = 0;
    var last_1 = $this.sb9_1.length - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var pos = i_1 / ($this.sb9_1.length - 1 | 0);
        var index = binarySearch_0(_get_ourPercent__6mcer2(Companion_instance_1), pos);
        if (index >= 0) {
          $this.sb9_1[i_1] = index / (_get_ourPercent__6mcer2(Companion_instance_1).length - 1 | 0);
        } else if (index === -1) {
          $this.sb9_1[i_1] = 0.0;
        } else {
          var p1 = (-index | 0) - 2 | 0;
          var p2 = (-index | 0) - 1 | 0;
          var ans = (p1 + (pos - _get_ourPercent__6mcer2(Companion_instance_1)[p1]) / (_get_ourPercent__6mcer2(Companion_instance_1)[p2] - _get_ourPercent__6mcer2(Companion_instance_1)[p1])) / (_get_ourPercent__6mcer2(Companion_instance_1).length - 1 | 0);
          $this.sb9_1[i_1] = ans;
        }
      }
       while (inductionVariable_1 <= last_1);
  }
  function Companion_0() {
    this.hb9_1 = null;
    this.ib9_1 = 0.001;
  }
  var Companion_instance_1;
  function Companion_getInstance_8() {
    return Companion_instance_1;
  }
  function Arc(mode, time1, time2, x1, y1, x2, y2) {
    this.jb9_1 = time1;
    this.kb9_1 = time2;
    this.lb9_1 = x1;
    this.mb9_1 = y1;
    this.nb9_1 = x2;
    this.ob9_1 = y2;
    this.pb9_1 = 0.0;
    this.qb9_1 = 0.0;
    this.rb9_1 = 0.0;
    var dx = this.nb9_1 - this.lb9_1;
    var dy = this.ob9_1 - this.mb9_1;
    var tmp = this;
    switch (mode) {
      case 1:
        tmp.zb9_1 = true;
        break;
      case 5:
        tmp.zb9_1 = dy < 0;
        break;
      case 4:
        tmp.zb9_1 = dy > 0;
        break;
      default:
        tmp.zb9_1 = false;
        break;
    }
    this.tb9_1 = 1 / (this.kb9_1 - this.jb9_1);
    var isLinear = false;
    if (3 === mode) {
      isLinear = true;
    }
    var tmp_0;
    var tmp_1;
    if (isLinear) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      var tmp_2 = Math.abs(dx);
      tmp_1 = tmp_2 < 0.001;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      var tmp_3 = Math.abs(dy);
      tmp_0 = tmp_3 < 0.001;
    }
    if (tmp_0) {
      isLinear = true;
      var tmp_4 = this;
      // Inline function 'kotlin.math.hypot' call
      tmp_4.pb9_1 = hypot(dy, dx);
      this.yb9_1 = this.pb9_1 * this.tb9_1;
      this.wb9_1 = dx / (this.kb9_1 - this.jb9_1);
      this.xb9_1 = dy / (this.kb9_1 - this.jb9_1);
      this.sb9_1 = new Float32Array(101);
      var tmp_5 = this;
      tmp_5.ub9_1 = NaN;
      var tmp_6 = this;
      tmp_6.vb9_1 = NaN;
    } else {
      this.sb9_1 = new Float32Array(101);
      this.ub9_1 = dx * (this.zb9_1 ? -1 : 1);
      this.vb9_1 = dy * (this.zb9_1 ? 1 : -1);
      this.wb9_1 = this.zb9_1 ? this.nb9_1 : this.lb9_1;
      this.xb9_1 = this.zb9_1 ? this.mb9_1 : this.ob9_1;
      buildTable(this, this.lb9_1, this.mb9_1, this.nb9_1, this.ob9_1);
      this.yb9_1 = this.pb9_1 * this.tb9_1;
    }
    this.aba_1 = isLinear;
  }
  protoOf(Arc).bba = function (time) {
    var percent = (this.zb9_1 ? this.kb9_1 - time : time - this.jb9_1) * this.tb9_1;
    var angle = get_PI() * 0.5 * lookup(this, percent);
    var tmp = this;
    // Inline function 'kotlin.math.sin' call
    tmp.qb9_1 = Math.sin(angle);
    var tmp_0 = this;
    // Inline function 'kotlin.math.cos' call
    tmp_0.rb9_1 = Math.cos(angle);
  };
  protoOf(Arc).cba = function () {
    return this.wb9_1 + this.ub9_1 * this.qb9_1;
  };
  protoOf(Arc).dba = function () {
    return this.xb9_1 + this.vb9_1 * this.rb9_1;
  };
  protoOf(Arc).eba = function () {
    var vx = this.ub9_1 * this.rb9_1;
    var vy = -this.vb9_1 * this.qb9_1;
    // Inline function 'kotlin.math.hypot' call
    var tmp$ret$0 = hypot(vx, vy);
    var norm = this.yb9_1 / tmp$ret$0;
    return this.zb9_1 ? -vx * norm : vx * norm;
  };
  protoOf(Arc).fba = function () {
    var vx = this.ub9_1 * this.rb9_1;
    var vy = -this.vb9_1 * this.qb9_1;
    // Inline function 'kotlin.math.hypot' call
    var tmp$ret$0 = hypot(vx, vy);
    var norm = this.yb9_1 / tmp$ret$0;
    return this.zb9_1 ? -vy * norm : vy * norm;
  };
  protoOf(Arc).gba = function (time) {
    var t = time;
    t = (t - this.jb9_1) * this.tb9_1;
    return this.lb9_1 + t * (this.nb9_1 - this.lb9_1);
  };
  protoOf(Arc).hba = function (time) {
    var t = time;
    t = (t - this.jb9_1) * this.tb9_1;
    return this.mb9_1 + t * (this.ob9_1 - this.mb9_1);
  };
  protoOf(Arc).iba = function () {
    return this.wb9_1;
  };
  protoOf(Arc).jba = function () {
    return this.xb9_1;
  };
  function Companion_1() {
    this.kba_1 = 1;
    this.lba_1 = 2;
    this.mba_1 = 3;
    this.nba_1 = 4;
    this.oba_1 = 5;
    this.pba_1 = 0;
    this.qba_1 = 1;
    this.rba_1 = 2;
    this.sba_1 = 3;
    this.tba_1 = 4;
    this.uba_1 = 5;
  }
  var Companion_instance_2;
  function Companion_getInstance_9() {
    return Companion_instance_2;
  }
  function ArcSpline(arcModes, timePoints, y) {
    this.wba_1 = true;
    var mode = {_v: 1};
    var last = {_v: 1};
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = timePoints.length - 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      switch (arcModes[tmp_3]) {
        case 1:
          mode._v = 1;
          last._v = mode._v;
          break;
        case 2:
          mode._v = 2;
          last._v = mode._v;
          break;
        case 3:
          mode._v = last._v === 1 ? 2 : 1;
          last._v = mode._v;
          break;
        case 0:
          mode._v = 3;
          break;
        case 5:
          mode._v = 5;
          break;
        case 4:
          mode._v = 4;
          break;
      }
      var dim = (y[tmp_3].length / 2 | 0) + (y[tmp_3].length % 2 | 0) | 0;
      var tmp_4 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_5 = fillArrayVal(Array(dim), null);
      while (tmp_4 < dim) {
        var tmp_6 = tmp_4;
        var k = imul(tmp_6, 2);
        tmp_5[tmp_6] = new Arc(mode._v, timePoints[tmp_3], timePoints[tmp_3 + 1 | 0], y[tmp_3][k], y[tmp_3][k + 1 | 0], y[tmp_3 + 1 | 0][k], y[tmp_3 + 1 | 0][k + 1 | 0]);
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp_2[tmp_3] = tmp_5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.vba_1 = tmp_2;
  }
  protoOf(ArcSpline).xba = function (time, v) {
    var t = time;
    if (this.wba_1) {
      if (t < this.vba_1[0][0].jb9_1 || t > this.vba_1[this.vba_1.length - 1 | 0][0].kb9_1) {
        var p;
        var t0;
        if (t > this.vba_1[this.vba_1.length - 1 | 0][0].kb9_1) {
          p = this.vba_1.length - 1 | 0;
          t0 = this.vba_1[this.vba_1.length - 1 | 0][0].kb9_1;
        } else {
          p = 0;
          t0 = this.vba_1[0][0].jb9_1;
        }
        var dt = t - t0;
        var i = 0;
        var j = 0;
        while (i < v.length) {
          if (this.vba_1[p][j].aba_1) {
            v[i] = this.vba_1[p][j].gba(t0) + dt * this.vba_1[p][j].iba();
            v[i + 1 | 0] = this.vba_1[p][j].hba(t0) + dt * this.vba_1[p][j].jba();
          } else {
            this.vba_1[p][j].bba(t0);
            v[i] = this.vba_1[p][j].cba() + dt * this.vba_1[p][j].eba();
            v[i + 1 | 0] = this.vba_1[p][j].dba() + dt * this.vba_1[p][j].fba();
          }
          i = i + 2 | 0;
          j = j + 1 | 0;
        }
        return Unit_instance;
      }
    } else {
      if (t < this.vba_1[0][0].jb9_1) {
        t = this.vba_1[0][0].jb9_1;
      }
      if (t > this.vba_1[this.vba_1.length - 1 | 0][0].kb9_1) {
        t = this.vba_1[this.vba_1.length - 1 | 0][0].kb9_1;
      }
    }
    var populated = false;
    var inductionVariable = 0;
    var last = this.vba_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = 0;
        var j_0 = 0;
        while (j_0 < v.length) {
          if (t <= this.vba_1[i_0][k].kb9_1) {
            if (this.vba_1[i_0][k].aba_1) {
              v[j_0] = this.vba_1[i_0][k].gba(t);
              v[j_0 + 1 | 0] = this.vba_1[i_0][k].hba(t);
              populated = true;
            } else {
              this.vba_1[i_0][k].bba(t);
              v[j_0] = this.vba_1[i_0][k].cba();
              v[j_0 + 1 | 0] = this.vba_1[i_0][k].dba();
              populated = true;
            }
          }
          j_0 = j_0 + 2 | 0;
          k = k + 1 | 0;
        }
        if (populated) {
          return Unit_instance;
        }
      }
       while (inductionVariable <= last);
  };
  protoOf(ArcSpline).yba = function (time, v) {
    var t = time;
    if (t < this.vba_1[0][0].jb9_1) {
      t = this.vba_1[0][0].jb9_1;
    } else if (t > this.vba_1[this.vba_1.length - 1 | 0][0].kb9_1) {
      t = this.vba_1[this.vba_1.length - 1 | 0][0].kb9_1;
    }
    var populated = false;
    var inductionVariable = 0;
    var last = this.vba_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var j = 0;
        var k = 0;
        while (j < v.length) {
          if (t <= this.vba_1[i][k].kb9_1) {
            if (this.vba_1[i][k].aba_1) {
              v[j] = this.vba_1[i][k].iba();
              v[j + 1 | 0] = this.vba_1[i][k].jba();
              populated = true;
            } else {
              this.vba_1[i][k].bba(t);
              v[j] = this.vba_1[i][k].eba();
              v[j + 1 | 0] = this.vba_1[i][k].fba();
              populated = true;
            }
          }
          j = j + 2 | 0;
          k = k + 1 | 0;
        }
        if (populated) {
          return Unit_instance;
        }
      }
       while (inductionVariable <= last);
  };
  function ComplexDouble(_real, _imaginary) {
    this.zba_1 = _real;
    this.abb_1 = _imaginary;
  }
  protoOf(ComplexDouble).bbb = function () {
    return this.zba_1;
  };
  protoOf(ComplexDouble).cbb = function () {
    return this.abb_1;
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this.zba_1 + ', _imaginary=' + this.abb_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this.zba_1);
    result = imul(result, 31) + getNumberHashCode(this.abb_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.zba_1, tmp0_other_with_cast.zba_1))
      return false;
    if (!equals(this.abb_1, tmp0_other_with_cast.abb_1))
      return false;
    return true;
  };
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.abs' call
      var x = Math.abs(num);
      var tmp$ret$1 = Math.sqrt(x);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function calculateTargetValue(_this__u8e3s4, initialValue, initialVelocity) {
    var vectorizedSpec = _this__u8e3s4.cb6(get_VectorConverter(FloatCompanionObject_instance));
    var targetVector = vectorizedSpec.ib7(AnimationVector(initialValue), AnimationVector(initialVelocity));
    return targetVector.rb8_1;
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.dbb_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).cb6 = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.dbb_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.fbb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.gbb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.hbb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.ebb_1 = floatDecaySpec;
    this.ibb_1 = this.ebb_1.lb7();
  }
  protoOf(VectorizedFloatDecaySpec).lb7 = function () {
    return this.ibb_1;
  };
  protoOf(VectorizedFloatDecaySpec).mb7 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.fbb_1 == null)) {
      this.fbb_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).ab3(i, this.ebb_1.jbb(playTimeNanos, initialValue.zb2(i), initialVelocity.zb2(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).jb7 = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.gbb_1 == null)) {
      this.gbb_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxDuration;
        var b = this.ebb_1.kbb(initialValue.zb2(i), initialVelocity.zb2(i));
        maxDuration = a.h1(b) >= 0 ? a : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).kb7 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.gbb_1 == null)) {
      this.gbb_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).ab3(i, this.ebb_1.lbb(playTimeNanos, initialValue.zb2(i), initialVelocity.zb2(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).ib7 = function (initialValue, initialVelocity) {
    if (!!(this.hbb_1 == null)) {
      this.hbb_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).ab3(i, this.ebb_1.mbb(initialValue.zb2(i), initialVelocity.zb2(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  var LinearOutSlowInEasing;
  function get_FastOutLinearInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.obb_1 + ', ' + $this.pbb_1 + ', ' + $this.qbb_1 + ', ' + $this.rbb_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.obb_1 = a;
    this.pbb_1 = b;
    this.qbb_1 = c;
    this.rbb_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!isNaN_0(this.obb_1) && !isNaN_0(this.pbb_1) && !isNaN_0(this.qbb_1) && !isNaN_0(this.rbb_1))) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.obb_1 + ', ' + this.pbb_1 + ', ' + this.qbb_1 + ', ' + this.rbb_1 + '.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.pbb_1, this.rbb_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).p3(32).m1();
    tmp.sbb_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).r3(new Long(-1, 0)).m1();
    tmp_0.tbb_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).nbb = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      var t = findFirstCubicRoot(0.0 - fraction, this.obb_1 - fraction, this.qbb_1 - fraction, 1.0 - fraction);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var this_0 = evaluateCubic(this.pbb_1, this.rbb_1, t);
      var minimumValue = this.sbb_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_1 = this_0 < minimumValue ? minimumValue : this_0;
      var maximumValue = this.tbb_1;
      tmp = this_1 > maximumValue ? maximumValue : this_1;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.obb_1 === other.obb_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.pbb_1 === other.pbb_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.qbb_1 === other.qbb_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.rbb_1 === other.rbb_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.obb_1), 31) + getNumberHashCode(this.pbb_1) | 0, 31) + getNumberHashCode(this.qbb_1) | 0, 31) + getNumberHashCode(this.rbb_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.obb_1 + ', b=' + this.pbb_1 + ', c=' + this.qbb_1 + ', d=' + this.rbb_1 + ')';
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.ubb_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).nbb = function (fraction) {
    return this.ubb_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).x3 = function () {
    return this.ubb_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    var tmp_1;
    if (visibilityThreshold === VOID) {
      tmp_1 = 0.01;
    } else {
      tmp_1 = visibilityThreshold;
    }
    visibilityThreshold = tmp_1;
    this.abc_1 = dampingRatio;
    this.bbc_1 = stiffness;
    this.cbc_1 = visibilityThreshold;
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    this_0.lbc(this.abc_1);
    this_0.mbc(this.bbc_1);
    tmp_2.dbc_1 = this_0;
  }
  protoOf(FloatSpringSpec).vbb = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.i3(new Long(1000000, 0));
    this.dbc_1.ebc_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.dbc_1.nbc(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).wbb = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.i3(new Long(1000000, 0));
    this.dbc_1.ebc_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.dbc_1.nbc(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).xbb = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).ybb = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.dbc_1.obc();
    var tmp1_dampingRatio = this.dbc_1.kbc_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.cbc_1;
    var tmp3_initialVelocity = initialVelocity / this.cbc_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).h3(new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).cb6 = function (converter) {
    return this.zbb(converter);
  };
  function clampPlayTimeNanos($this, playTimeNanos) {
    return coerceIn_0(playTimeNanos.g3($this.tbc_1), new Long(0, 0), $this.sbc_1);
  }
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.pbc_1 = duration;
    this.qbc_1 = delay;
    this.rbc_1 = easing;
    this.sbc_1 = numberToLong(this.pbc_1).h3(new Long(1000000, 0));
    this.tbc_1 = numberToLong(this.qbc_1).h3(new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).vbb = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    var tmp;
    if (this.pbc_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = this.sbc_1.v3();
      tmp = clampedPlayTimeNanos.v3() / other;
    }
    var rawFraction = tmp;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = rawFraction < 0.0 ? 0.0 : rawFraction;
    var tmp$ret$3 = this_0 > 1.0 ? 1.0 : this_0;
    var fraction = this.rbc_1.nbb(tmp$ret$3);
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).ybb = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.qbc_1 + this.pbc_1 | 0).h3(new Long(1000000, 0));
  };
  protoOf(FloatTweenSpec).wbb = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    if (clampedPlayTimeNanos.h1(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTimeNanos.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.vbb(clampedPlayTimeNanos.g3(new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.vbb(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).cb6 = function (converter) {
    return this.zbb(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.nbd_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).ib = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = withFrameNanos(this.nbd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).z25 = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.nbd_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.ib($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cbd_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            var tmp_0 = this;
            tmp_0.dbd_1 = this.y9().fa(Key_instance);
            if (this.dbd_1 == null) {
              this.s9_1 = 2;
              suspendResult = withFrameNanos(this.cbd_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = this.dbd_1.obd(withInfiniteAnimationFrameNanos$slambda_0(this.cbd_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.ebd_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.ebd_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.ebd_1;
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
  function InfiniteTransition$run$slambda$lambda($toolingOverride, this$0, $durationScale, $this_LaunchedEffect) {
    return function (it) {
      var tmp0_safe_receiver = $toolingOverride.c1();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1();
      var currentTimeNanos = tmp1_elvis_lhs == null ? it : tmp1_elvis_lhs;
      var tmp;
      if (this$0.sbd_1.equals(new Long(0, -2147483648)) || !($durationScale._v === get_durationScale($this_LaunchedEffect.h14()))) {
        this$0.sbd_1 = it;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        var this_0 = this$0.qbd_1;
        // Inline function 'kotlin.contracts.contract' call
        var size = this_0.i2y_1;
        if (size > 0) {
          var i = 0;
          var tmp_0 = this_0.g2y_1;
          var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            content[i].cb3();
            i = i + 1 | 0;
          }
           while (i < size);
        }
        $durationScale._v = get_durationScale($this_LaunchedEffect.h14());
        tmp = Unit_instance;
      }
      var tmp_1;
      if ($durationScale._v === 0.0) {
        var this_1 = this$0.qbd_1;
        // Inline function 'kotlin.contracts.contract' call
        var size_0 = this_1.i2y_1;
        var tmp_2;
        if (size_0 > 0) {
          var i_0 = 0;
          var tmp_3 = this_1.g2y_1;
          var content_0 = isArray(tmp_3) ? tmp_3 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            content_0[i_0].fbe();
            i_0 = i_0 + 1 | 0;
          }
           while (i_0 < size_0);
          tmp_2 = Unit_instance;
        }
        tmp_1 = tmp_2;
      } else {
        // Inline function 'kotlin.Long.div' call
        var this_2 = currentTimeNanos.g3(this$0.sbd_1);
        var other = $durationScale._v;
        var tmp$ret$0 = this_2.v3() / other;
        var playTimeNanos = numberToLong(tmp$ret$0);
        onFrame(this$0, playTimeNanos);
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function InfiniteTransition$run$slambda$lambda_0($this_LaunchedEffect) {
    return function () {
      return get_durationScale($this_LaunchedEffect.h14());
    };
  }
  function InfiniteTransition$run$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InfiniteTransition$run$slambda$slambda).pbe = function (it, $completion) {
    var tmp = this.qbe(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(InfiniteTransition$run$slambda$slambda).ma = function (p1, $completion) {
    return this.pbe((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InfiniteTransition$run$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          return this.obe_1 > 0.0;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(InfiniteTransition$run$slambda$slambda).qbe = function (it, completion) {
    var i = new InfiniteTransition$run$slambda$slambda(completion);
    i.obe_1 = it;
    return i;
  };
  function InfiniteTransition$run$slambda$slambda_0(resultContinuation) {
    var i = new InfiniteTransition$run$slambda$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.pbe(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function TransitionAnimationState($outer, initialValue, targetValue, typeConverter, animationSpec, label) {
    this.ebe_1 = $outer;
    this.ubd_1 = initialValue;
    this.vbd_1 = targetValue;
    this.wbd_1 = typeConverter;
    this.xbd_1 = label;
    this.ybd_1 = mutableStateOf(this.ubd_1);
    this.zbd_1 = animationSpec;
    this.abe_1 = TargetBasedAnimation_init_$Create$(this.zbd_1, this.wbd_1, this.ubd_1, this.vbd_1);
    this.bbe_1 = false;
    this.cbe_1 = false;
    this.dbe_1 = new Long(0, 0);
  }
  protoOf(TransitionAnimationState).sb2 = function (_set____db54di) {
    var this_0 = this.ybd_1;
    value$factory_3();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).c1 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ybd_1;
    value$factory_4();
    return this_0.c1();
  };
  protoOf(TransitionAnimationState).rbe = function (initialValue, targetValue, animationSpec) {
    this.ubd_1 = initialValue;
    this.vbd_1 = targetValue;
    this.zbd_1 = animationSpec;
    this.abe_1 = TargetBasedAnimation_init_$Create$(animationSpec, this.wbd_1, initialValue, targetValue);
    _set_refreshChildNeeded__4sbmm9(this.ebe_1, true);
    this.bbe_1 = false;
    this.cbe_1 = true;
  };
  protoOf(TransitionAnimationState).sbe = function (playTimeNanos) {
    _set_refreshChildNeeded__4sbmm9(this.ebe_1, false);
    if (this.cbe_1) {
      this.cbe_1 = false;
      this.dbe_1 = playTimeNanos;
    }
    var playTime = playTimeNanos.g3(this.dbe_1);
    this.sb2(this.abe_1.sb6(playTime));
    this.bbe_1 = this.abe_1.ub6(playTime);
  };
  protoOf(TransitionAnimationState).fbe = function () {
    this.sb2(this.abe_1.ub3());
    this.cbe_1 = true;
  };
  protoOf(TransitionAnimationState).cb3 = function () {
    this.cbe_1 = true;
  };
  function _set_refreshChildNeeded__4sbmm9($this, _set____db54di) {
    var this_0 = $this.rbd_1;
    refreshChildNeeded$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_refreshChildNeeded__t5joi3($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.rbd_1;
    refreshChildNeeded$factory_0();
    return this_0.c1();
  }
  function _set_isRunning__kpbg34_0($this, _set____db54di) {
    var this_0 = $this.tbd_1;
    isRunning$factory_3();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_isRunning__l0y5hg($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.tbd_1;
    isRunning$factory_4();
    return this_0.c1();
  }
  function onFrame($this, playTimeNanos) {
    var allFinished = true;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    var this_0 = $this.qbd_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = this_0.i2y_1;
    if (size > 0) {
      var i = 0;
      var tmp = this_0.g2y_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        // Inline function 'androidx.compose.animation.core.InfiniteTransition.onFrame.<anonymous>' call
        var it = content[i];
        if (!it.bbe_1) {
          it.sbe(playTimeNanos);
        }
        if (!it.bbe_1) {
          allFinished = false;
        }
        i = i + 1 | 0;
      }
       while (i < size);
    }
    _set_isRunning__kpbg34_0($this, !allFinished);
  }
  function InfiniteTransition$run$slambda($toolingOverride, this$0, resultContinuation) {
    this.bbf_1 = $toolingOverride;
    this.cbf_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InfiniteTransition$run$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(InfiniteTransition$run$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InfiniteTransition$run$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.ebf_1 = {_v: 1.0};
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.s9_1 = 6;
              continue $sm;
            }

            this.s9_1 = 2;
            suspendResult = withInfiniteAnimationFrameNanos(InfiniteTransition$run$slambda$lambda(this.bbf_1, this.cbf_1, this.ebf_1, this.dbf_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (this.ebf_1._v === 0.0) {
              this.s9_1 = 3;
              var tmp_0 = snapshotFlow(InfiniteTransition$run$slambda$lambda_0(this.dbf_1));
              suspendResult = first(tmp_0, InfiniteTransition$run$slambda$slambda_0(null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 4;
              continue $sm;
            }

          case 3:
            this.s9_1 = 4;
            continue $sm;
          case 4:
            this.s9_1 = 1;
            continue $sm;
          case 5:
            throw this.v9_1;
          case 6:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 5) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(InfiniteTransition$run$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new InfiniteTransition$run$slambda(this.bbf_1, this.cbf_1, completion);
    i.dbf_1 = $this$LaunchedEffect;
    return i;
  };
  function InfiniteTransition$run$slambda_0($toolingOverride, this$0, resultContinuation) {
    var i = new InfiniteTransition$run$slambda($toolingOverride, this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function InfiniteTransition$run$lambda($tmp2_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp2_rcvr.fbf($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InfiniteTransition(label) {
    this.pbd_1 = label;
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.qbd_1 = new MutableVector(tmp$ret$0, 0);
    this.rbd_1 = mutableStateOf(false);
    this.sbd_1 = new Long(0, -2147483648);
    this.tbd_1 = mutableStateOf(true);
  }
  protoOf(InfiniteTransition).gbf = function (animation) {
    this.qbd_1.j2y(animation);
    _set_refreshChildNeeded__4sbmm9(this, true);
  };
  protoOf(InfiniteTransition).hbf = function (animation) {
    this.qbd_1.n3g(animation);
  };
  protoOf(InfiniteTransition).fbf = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-318043801);
    sourceInformation($composer_0, 'C(run)172@7001L67,176@7149L1537,176@7128L1558:InfiniteTransition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-318043801, $dirty, -1, 'androidx.compose.animation.core.InfiniteTransition.run (InfiniteTransition.kt:171)');
      }
      sourceInformationMarkerStart($composer_0, 748212685, 'CC(remember):InfiniteTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance_0().l2u_1) {
        // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var toolingOverride = tmp0_group;
      if (_get_isRunning__l0y5hg(this) || _get_refreshChildNeeded__t5joi3(this)) {
        sourceInformationMarkerStart($composer_0, 748218891, 'CC(remember):InfiniteTransition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        var invalid = $composer_0.f32(this);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_1.w32();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance_0().l2u_1) {
          // Inline function 'androidx.compose.animation.core.InfiniteTransition.run.<anonymous>' call
          var value_0 = InfiniteTransition$run$slambda_0(toolingOverride, this, null);
          this_1.h33(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        LaunchedEffect(this, tmp1_group, $composer_0, 14 & $dirty);
      }
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
      tmp3_safe_receiver.n38(InfiniteTransition$run$lambda(this, $changed));
    }
  };
  function rememberInfiniteTransition(label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1013651573, 'C(rememberInfiniteTransition)45@1981L38,46@2043L5:InfiniteTransition.kt#pdpnli');
    if (!(($default & 1) === 0))
      label_0 = 'InfiniteTransition';
    if (isTraceInProgress()) {
      traceEventStart(1013651573, $changed, -1, 'androidx.compose.animation.core.rememberInfiniteTransition (InfiniteTransition.kt:44)');
    }
    sourceInformationMarkerStart($composer_0, -1916602784, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.rememberInfiniteTransition.<anonymous>' call
      var value = new InfiniteTransition(label_0);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var infiniteTransition = tmp1_group;
    infiniteTransition.fbf($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return infiniteTransition;
  }
  function animateFloat(_this__u8e3s4, initialValue, targetValue, animationSpec, label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -644770905, 'C(animateFloat)P(1,3)316@12588L84:InfiniteTransition.kt#pdpnli');
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-644770905, $changed, -1, 'androidx.compose.animation.core.animateFloat (InfiniteTransition.kt:316)');
    }
    var tmp0 = animateValue(_this__u8e3s4, initialValue, targetValue, get_VectorConverter(FloatCompanionObject_instance), animationSpec, label_0, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateValue(_this__u8e3s4, initialValue, targetValue, typeConverter, animationSpec, label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1062847727, 'C(animateValue)P(1,3,4)262@10743L151,268@10911L346,268@10900L357,280@11301L128,280@11263L166:InfiniteTransition.kt#pdpnli');
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-1062847727, $changed, -1, 'androidx.compose.animation.core.animateValue (InfiniteTransition.kt:260)');
    }
    sourceInformationMarkerStart($composer_0, 1444224427, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>' call
      var value = new TransitionAnimationState(_this__u8e3s4, initialValue, targetValue, typeConverter, animationSpec, label_0);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transitionAnimation = tmp1_group;
    sourceInformationMarkerStart($composer_0, 1444229998, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 112 ^ 48) > 32 && $composer_0.f32(initialValue) || ($changed & 48) === 32) | (($changed & 896 ^ 384) > 256 && $composer_0.f32(targetValue) || ($changed & 384) === 256)) | (($changed & 57344 ^ 24576) > 16384 && $composer_0.f32(animationSpec) || ($changed & 24576) === 16384));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>' call
      var value_0 = animateValue$lambda(initialValue, transitionAnimation, targetValue, animationSpec);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp2_group, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, 1444242260, 'CC(remember):InfiniteTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_0.f32(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.w32();
    var tmp_3;
    if (invalid_0 || it_1 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>' call
      var value_1 = animateValue$lambda_0(_this__u8e3s4, transitionAnimation);
      $composer_0.h33(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transitionAnimation, tmp3_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transitionAnimation;
  }
  function animateValue$lambda($initialValue, $transitionAnimation, $targetValue, $animationSpec) {
    return function () {
      var tmp;
      if (!equals($initialValue, $transitionAnimation.ubd_1) || !equals($targetValue, $transitionAnimation.vbd_1)) {
        $transitionAnimation.rbe($initialValue, $targetValue, $animationSpec);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($this_animateValue, $transitionAnimation) {
    this.ibf_1 = $this_animateValue;
    this.jbf_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv).v18 = function () {
    // Inline function 'androidx.compose.animation.core.animateValue.<anonymous>.<anonymous>.<anonymous>' call
    this.ibf_1.hbf(this.jbf_1);
  };
  function animateValue$lambda_0($this_animateValue, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_animateValue.gbf($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($this_animateValue, $transitionAnimation);
    };
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function refreshChildNeeded$factory() {
    return getPropertyCallableRef('refreshChildNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_refreshChildNeeded__t5joi3(receiver);
    }, function (receiver, value) {
      return _set_refreshChildNeeded__4sbmm9(receiver, value);
    });
  }
  function refreshChildNeeded$factory_0() {
    return getPropertyCallableRef('refreshChildNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_refreshChildNeeded__t5joi3(receiver);
    }, function (receiver, value) {
      return _set_refreshChildNeeded__4sbmm9(receiver, value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return _get_isRunning__l0y5hg(receiver);
    }, function (receiver, value) {
      return _set_isRunning__kpbg34_0(receiver, value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return _get_isRunning__l0y5hg(receiver);
    }, function (receiver, value) {
      return _set_isRunning__kpbg34_0(receiver, value);
    });
  }
  function binarySearch(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    var tmp;
    if (toIndex === VOID) {
      // Inline function 'androidx.collection.IntList.size' call
      tmp = _this__u8e3s4.vv_1;
    } else {
      tmp = toIndex;
    }
    toIndex = tmp;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(fromIndex <= toIndex)) {
      // Inline function 'androidx.compose.animation.core.binarySearch.<anonymous>' call
      var tmp$ret$1 = 'fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (fromIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$('Index out of range: ' + fromIndex);
    }
    // Inline function 'androidx.collection.IntList.size' call
    if (toIndex > _this__u8e3s4.vv_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index out of range: ' + toIndex);
    }
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.u(mid);
      if (midVal < element) {
        low = mid + 1 | 0;
      } else if (midVal > element) {
        high = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function Mutator(priority, job) {
    this.kbf_1 = priority;
    this.lbf_1 = job;
  }
  protoOf(Mutator).mbf = function (other) {
    return this.kbf_1.a3(other.kbf_1) >= 0;
  };
  protoOf(Mutator).nbf = function () {
    return this.lbf_1.r15(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.ub2_1.dq();
      if (oldMutator == null || mutator.mbf(oldMutator)) {
        if ($this.ub2_1.f1y(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.nbf();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.xbf_1 = $priority;
    this.ybf_1 = this$0;
    this.zbf_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).gbg = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MutatorMutex$mutate$slambda).ma = function (p1, $completion) {
    return this.gbg((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 9;
            this.bbg_1 = new Mutator(this.xbf_1, ensureNotNull(this.abg_1.h14().fa(Key_instance_0)));
            tryMutateOrCancel(this.ybf_1, this.bbg_1);
            var tmp_0 = this;
            tmp_0.cbg_1 = this.ybf_1.vb2_1;
            var tmp_1 = this;
            tmp_1.dbg_1 = null;
            this.s9_1 = 1;
            suspendResult = this.cbg_1.i2i(this.dbg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ebg_1 = Unit_instance;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.t9_1 = 8;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.t9_1 = 7;
            this.s9_1 = 4;
            suspendResult = this.zbf_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.fbg_1 = suspendResult;
            this.s9_1 = 5;
            continue $sm;
          case 5:
            var tmp_2 = this.fbg_1;
            this.t9_1 = 8;
            this.ybf_1.ub2_1.f1y(this.bbg_1, null);
            this.ebg_1 = tmp_2;
            this.t9_1 = 9;
            this.s9_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this.ebg_1;
            this.t9_1 = 9;
            this.cbg_1.k2i(this.dbg_1);
            return tmp_3;
          case 7:
            this.t9_1 = 8;
            var t = this.v9_1;
            this.ybf_1.ub2_1.f1y(this.bbg_1, null);
            throw t;
          case 8:
            this.t9_1 = 9;
            var t_0 = this.v9_1;
            this.cbg_1.k2i(this.dbg_1);
            throw t_0;
          case 9:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 9) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.xbf_1, this.ybf_1, this.zbf_1, completion);
    i.abg_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.gbg($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.ub2_1 = new AtomicReference(null);
    this.vb2_1 = Mutex();
  }
  protoOf(MutatorMutex).hbg = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).wb2 = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.hbg(priority, block, $completion) : $super.hbg.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_instance;
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.plus' call
    var this_0 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var this_1 = complexSqrt(partialRoot);
    this_1.zba_1 = this_1.zba_1 + this_0;
    this_1.zba_1 = this_1.zba_1 * 0.5;
    this_1.abb_1 = this_1.abb_1 * 0.5;
    var firstRoot = this_1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.minus' call
    var this_2 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var this_3 = complexSqrt(partialRoot);
    this_3.zba_1 = this_3.zba_1 * -1;
    this_3.abb_1 = this_3.abb_1 * -1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    this_3.zba_1 = this_3.zba_1 + this_2;
    this_3.zba_1 = this_3.zba_1 * 0.5;
    this_3.abb_1 = this_3.abb_1 * 0.5;
    var secondRoot = this_3;
    return estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRoot, p0, v0, delta) : estimateCriticallyDamped(firstRoot, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) {
    var r1 = firstRoot.bbb();
    var r2 = secondRoot.bbb();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    // Inline function 'kotlin.math.abs' call
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.bbb();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.cbb();
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.bbb();
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.ln' call
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var UNSET;
  function init($this) {
    if ($this.gbc_1) {
      return Unit_instance;
    }
    if ($this.ebc_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.kbc_1 * $this.kbc_1;
    if ($this.kbc_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.kbc_1 * $this.fbc_1;
      var tmp_1 = $this.fbc_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      tmp.hbc_1 = tmp_0 + tmp_1 * Math.sqrt(x);
      var tmp_2 = $this;
      var tmp_3 = -$this.kbc_1 * $this.fbc_1;
      var tmp_4 = $this.fbc_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = dampingRatioSquared - 1;
      tmp_2.ibc_1 = tmp_3 - tmp_4 * Math.sqrt(x_0);
    } else if ($this.kbc_1 >= 0 && $this.kbc_1 < 1) {
      var tmp_5 = $this;
      var tmp_6 = $this.fbc_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = 1 - dampingRatioSquared;
      tmp_5.jbc_1 = tmp_6 * Math.sqrt(x_1);
    }
    $this.gbc_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.ebc_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.fbc_1 = Math.sqrt(50.0);
    this.gbc_1 = false;
    this.hbc_1 = 0.0;
    this.ibc_1 = 0.0;
    this.jbc_1 = 0.0;
    var tmp_0 = this;
    tmp_0.kbc_1 = 1.0;
  }
  protoOf(SpringSimulation).mbc = function (value) {
    if (this.obc() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.fbc_1 = Math.sqrt(value);
    this.gbc_1 = false;
  };
  protoOf(SpringSimulation).obc = function () {
    return this.fbc_1 * this.fbc_1;
  };
  protoOf(SpringSimulation).lbc = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.kbc_1 = value;
    this.gbc_1 = false;
  };
  protoOf(SpringSimulation).nbc = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.ebc_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.w3() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.kbc_1 > 1) {
      var coeffA = adjustedDisplacement - (this.ibc_1 * adjustedDisplacement - lastVelocity) / (this.ibc_1 - this.hbc_1);
      var coeffB = (this.ibc_1 * adjustedDisplacement - lastVelocity) / (this.ibc_1 - this.hbc_1);
      // Inline function 'kotlin.math.exp' call
      var x = this.ibc_1 * deltaT;
      var tmp = coeffA * Math.exp(x);
      // Inline function 'kotlin.math.exp' call
      var x_0 = this.hbc_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(x_0);
      var tmp_0 = coeffA * this.ibc_1;
      // Inline function 'kotlin.math.exp' call
      var x_1 = this.ibc_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(x_1);
      var tmp_2 = coeffB * this.hbc_1;
      // Inline function 'kotlin.math.exp' call
      var x_2 = this.hbc_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(x_2);
    } else if (this.kbc_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.fbc_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -this.fbc_1 * deltaT;
      displacement = tmp_3 * Math.exp(x_3);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_4 = -this.fbc_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(x_4) * -this.fbc_1;
      // Inline function 'kotlin.math.exp' call
      var x_5 = -this.fbc_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(x_5);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.jbc_1 * (this.kbc_1 * this.fbc_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var x_6 = -this.kbc_1 * this.fbc_1 * deltaT;
      var tmp_6 = Math.exp(x_6);
      // Inline function 'kotlin.math.cos' call
      var x_7 = this.jbc_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(x_7);
      // Inline function 'kotlin.math.sin' call
      var x_8 = this.jbc_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(x_8));
      var tmp_8 = displacement * -this.fbc_1 * this.kbc_1;
      // Inline function 'kotlin.math.exp' call
      var x_9 = -this.kbc_1 * this.fbc_1 * deltaT;
      var tmp_9 = Math.exp(x_9);
      var tmp_10 = -this.jbc_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var x_10 = this.jbc_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(x_10);
      var tmp_12 = this.jbc_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var x_11 = this.jbc_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(x_11));
    }
    var newValue = displacement + this.ebc_1;
    var newVelocity = currentVelocity;
    return Motion(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).p3(32).m1();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).r3(new Long(-1, 0)).m1();
    return floatFromBits(bits);
  }
  function Motion(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(value));
    var v2 = toLong(toRawBits(velocity));
    var tmp$ret$0 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.fa(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r7r();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(scale >= 0.0)) {
      // Inline function 'androidx.compose.animation.core.<get-durationScale>.<anonymous>' call
      var tmp$ret$0 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$0);
    }
    return scale;
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.c1();
    var tmp1_typeConverter = _this__u8e3s4.mb2_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.ob2_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.pb2_1 : new Long(0, -2147483648), block, $completion);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.u9_1 = Unit_instance;
    tmp_0.v9_1 = null;
    return tmp_0.aa();
  }
  function updateState(_this__u8e3s4, state) {
    state.sb2(_this__u8e3s4.c1());
    copyFrom(state.ob2_1, _this__u8e3s4.ib2_1);
    state.qb2_1 = _this__u8e3s4.kb2_1;
    state.pb2_1 = _this__u8e3s4.jb2_1;
    state.rb2_1 = _this__u8e3s4.qb4();
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.vb6();
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = frameTimeNanos.g3(_this__u8e3s4.fb2_1).v3() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.jb2_1 = frameTimeNanos;
    _this__u8e3s4.sb2(anim.sb6(playTimeNanos));
    _this__u8e3s4.ib2_1 = anim.xb6(playTimeNanos);
    var isLastFrame = anim.ub6(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.kb2_1 = _this__u8e3s4.jb2_1;
      _this__u8e3s4.tb8(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter(FloatCompanionObject_instance), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.c1();
    var tmp1_initialVelocityVector = _this__u8e3s4.ob2_1;
    var tmp2_typeConverter = _this__u8e3s4.mb2_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.pb2_1 : new Long(0, -2147483648), block, $completion);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>' call
      tmp = typeConverter.xb2()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.xb2()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function animateTo$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.rb2_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      // Inline function 'kotlin.apply' call
      var tmp = $animation.nb6();
      var tmp_0 = $animation.ub3();
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_instance;
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.rb2_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_instance;
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = it.i3(toLong(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function animateDecay$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.c1(), $typeConverter.bb3()($this$animate.ib2_1));
      return Unit_instance;
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qbg_1 = _this__u8e3s4;
    this.rbg_1 = animation;
    this.sbg_1 = startTimeNanos;
    this.tbg_1 = block;
  }
  protoOf($animateCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 7;
            this.ubg_1 = this.rbg_1.sb6(new Long(0, 0));
            this.vbg_1 = this.rbg_1.xb6(new Long(0, 0));
            this.wbg_1 = {_v: null};
            this.t9_1 = 6;
            if (this.sbg_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.xbg_1 = get_durationScale(this.y9());
              this.s9_1 = 1;
              suspendResult = callWithFrameNanos(this.rbg_1, animate$lambda_0(this.wbg_1, this.ubg_1, this.rbg_1, this.vbg_1, this.xbg_1, this.qbg_1, this.tbg_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.rbg_1.nb6();
              var tmp_2 = this.rbg_1.ub3();
              var this_0 = new AnimationScope(this.ubg_1, tmp_1, this.vbg_1, this.sbg_1, tmp_2, this.sbg_1, true, animate$lambda_1(this.qbg_1));
              doAnimationFrameWithScale(this_0, this.sbg_1, get_durationScale(this.y9()), this.rbg_1, this.qbg_1, this.tbg_1);
              this.wbg_1._v = this_0;
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.wbg_1._v).qb4()) {
              this.s9_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.ybg_1 = get_durationScale(this.y9());
            this.s9_1 = 4;
            suspendResult = callWithFrameNanos(this.rbg_1, animate$lambda_2(this.wbg_1, this.ybg_1, this.rbg_1, this.qbg_1, this.tbg_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.s9_1 = 3;
            continue $sm;
          case 5:
            this.t9_1 = 7;
            this.s9_1 = 8;
            continue $sm;
          case 6:
            this.t9_1 = 7;
            var tmp_4 = this.v9_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.v9_1;
              var tmp0_safe_receiver = this.wbg_1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.tb8(false);
              }
              var tmp1_safe_receiver = this.wbg_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.jb2_1, this.qbg_1.pb2_1)) {
                this.qbg_1.rb2_1 = false;
              }
              throw e;
            } else {
              throw this.v9_1;
            }

          case 7:
            throw this.v9_1;
          case 8:
            this.t9_1 = 7;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 7) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hbh_1 = _this__u8e3s4;
    this.ibh_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            if (this.hbh_1.rb6()) {
              this.s9_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.ibh_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.ibh_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.jbh_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.jbh_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.jbh_1;
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
  function get_SeekableTransitionStateTotalDurationChanged() {
    _init_properties_Transition_kt__s6zoln();
    return SeekableTransitionStateTotalDurationChanged;
  }
  var SeekableTransitionStateTotalDurationChanged;
  function get_SeekableStateObserver() {
    _init_properties_Transition_kt__s6zoln();
    // Inline function 'kotlin.getValue' call
    var this_0 = SeekableStateObserver$delegate;
    SeekableStateObserver$factory();
    return this_0.c1();
  }
  var SeekableStateObserver$delegate;
  function SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation) {
    this.sbh_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = runAnimations(this.sbh_1, this);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).b20 = function ($this$launch, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this.sbh_1, completion);
    i.tbh_1 = $this$launch;
    return i;
  };
  function SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.cbi_1 = $targetState;
    this.dbi_1 = $oldTargetState;
    this.ebi_1 = this$0;
    this.fbi_1 = $transition;
    this.gbi_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).a20 = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            if (!equals(this.cbi_1, this.dbi_1)) {
              moveAnimationToInitialState(this.ebi_1);
            } else {
              this.ebi_1.vbi_1 = null;
              if (equals(this.ebi_1.w4b(), this.cbi_1)) {
                return Unit_instance;
              }
            }

            if (!equals(this.cbi_1, this.dbi_1)) {
              this.fbi_1.mbj(this.cbi_1);
              this.fbi_1.nbj(new Long(0, 0));
              this.ebi_1.obj(this.cbi_1);
              this.fbi_1.pbj(this.gbi_1);
            }

            _set_fraction__t78qnf(this.ebi_1, this.gbi_1);
            if (this.ebi_1.ubi_1.fz()) {
              launch(this.hbi_1, VOID, VOID, SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this.ebi_1, null));
            } else {
              this.ebi_1.tbi_1 = new Long(0, -2147483648);
            }

            this.s9_1 = 1;
            suspendResult = waitForCompositionAfterTargetStateChange(this.ebi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            seekToFraction(this.ebi_1);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda(this.cbi_1, this.dbi_1, this.ebi_1, this.fbi_1, this.gbi_1, completion);
    i.hbi_1 = $this$coroutineScope;
    return i;
  };
  function SeekableTransitionState$seekTo$slambda$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.a20($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    this.ybj_1 = this$0;
    this.zbj_1 = $targetState;
    this.abk_1 = $transition;
    this.bbk_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).a20 = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 8;
            this.dbk_1 = this.ybj_1.p4b();
            if (!equals(this.zbj_1, this.dbk_1)) {
              moveAnimationToInitialState(this.ybj_1);
              _set_fraction__t78qnf(this.ybj_1, 0.0);
              this.abk_1.mbj(this.zbj_1);
              this.abk_1.nbj(new Long(0, 0));
              this.ybj_1.hbk(this.dbk_1);
              this.ybj_1.obj(this.zbj_1);
            }

            var tmp_0 = this;
            tmp_0.ebk_1 = this.ybj_1.rbi_1;
            var tmp_1 = this;
            tmp_1.fbk_1 = null;
            this.s9_1 = 1;
            suspendResult = this.ebk_1.i2i(this.fbk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_2 = this;
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              var tmp_3;
              try {
                tmp$ret$0 = this.ybj_1.lbi_1;
                break l$ret$1;
              } catch ($p) {
                var tmp_4;
                var t = $p;
                this.ebk_1.k2i(this.fbk_1);
                throw t;
              }
            }
             while (false);
            var tmp_5 = tmp$ret$0;
            this.ebk_1.k2i(this.fbk_1);
            tmp_2.gbk_1 = tmp_5;
            if (!equals(this.zbj_1, this.gbk_1)) {
              this.s9_1 = 2;
              suspendResult = doOneFrame(this.ybj_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 4;
              continue $sm;
            }

          case 2:
            this.s9_1 = 3;
            suspendResult = waitForCompositionAfterTargetStateChange(this.ybj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.s9_1 = 4;
            continue $sm;
          case 4:
            if (!equals(this.ybj_1.w4b(), this.zbj_1)) {
              if (this.ybj_1.sbk() < 1.0) {
                var runningAnimation = this.ybj_1.vbi_1;
                var tmp0_safe_receiver = this.bbk_1;
                var newSpec = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cb6(get_VectorConverter(FloatCompanionObject_instance));
                if (runningAnimation == null || !equals(newSpec, runningAnimation.jbk_1)) {
                  var oldSpec = runningAnimation == null ? null : runningAnimation.jbk_1;
                  var oldVelocity;
                  if (!(oldSpec == null)) {
                    var tmp_6 = runningAnimation.ibk_1;
                    var tmp_7 = runningAnimation.mbk_1;
                    var tmp_8 = Companion_getInstance_10().rbk_1;
                    var tmp2_elvis_lhs = runningAnimation.nbk_1;
                    oldVelocity = oldSpec.yb6(tmp_6, tmp_7, tmp_8, tmp2_elvis_lhs == null ? Companion_getInstance_10().qbk_1 : tmp2_elvis_lhs);
                  } else if (runningAnimation == null || runningAnimation.ibk_1.equals(new Long(0, 0))) {
                    oldVelocity = Companion_getInstance_10().qbk_1;
                  } else {
                    var oldDurationNanos = runningAnimation.obk_1;
                    var tmp_9;
                    if (oldDurationNanos.equals(new Long(0, -2147483648))) {
                      tmp_9 = this.ybj_1.nbi_1;
                    } else {
                      tmp_9 = oldDurationNanos;
                    }
                    var this_0 = tmp_9;
                    var other = 1000.0 * (new Long(1000000, 0)).v3();
                    var oldDuration = this_0.v3() / other;
                    if (oldDuration <= (new Long(0, 0)).v3()) {
                      oldVelocity = Companion_getInstance_10().qbk_1;
                    } else {
                      oldVelocity = new AnimationVector1D(1.0 / oldDuration);
                    }
                  }
                  var newAnimation = runningAnimation == null ? new SeekingAnimationState() : runningAnimation;
                  newAnimation.jbk_1 = newSpec;
                  newAnimation.kbk_1 = false;
                  newAnimation.lbk_1 = this.ybj_1.sbk();
                  newAnimation.mbk_1.ab3(0, this.ybj_1.sbk());
                  newAnimation.obk_1 = this.ybj_1.nbi_1;
                  newAnimation.ibk_1 = new Long(0, 0);
                  newAnimation.nbk_1 = oldVelocity;
                  var tmp_10 = newAnimation;
                  var tmp5_elvis_lhs = newSpec == null ? null : newSpec.wb6(newAnimation.mbk_1, Companion_getInstance_10().rbk_1, oldVelocity);
                  var tmp_11;
                  if (tmp5_elvis_lhs == null) {
                    var this_1 = this.ybj_1.nbi_1;
                    var other_0 = 1.0 - this.ybj_1.sbk();
                    tmp_11 = roundToLong(this_1.w3() * other_0);
                  } else {
                    tmp_11 = tmp5_elvis_lhs;
                  }
                  tmp_10.pbk_1 = tmp_11;
                  this.ybj_1.vbi_1 = newAnimation;
                }
              }
              this.s9_1 = 5;
              suspendResult = runAnimations(this.ybj_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 7;
              continue $sm;
            }

          case 5:
            this.ybj_1.hbk(this.zbj_1);
            this.s9_1 = 6;
            suspendResult = waitForComposition(this.ybj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            _set_fraction__t78qnf(this.ybj_1, 0.0);
            this.s9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 8) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this.ybj_1, this.zbj_1, this.abk_1, this.bbk_1, completion);
    i.cbk_1 = $this$coroutineScope;
    return i;
  };
  function SeekableTransitionState$animateTo$slambda$slambda_0(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.a20($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_fraction__t78qnf($this, _set____db54di) {
    var this_0 = $this.pbi_1;
    fraction$factory();
    this_0.n3j(_set____db54di);
    return Unit_instance;
  }
  function endAllAnimations($this) {
    var tmp0_safe_receiver = $this.mbi_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.tbk();
    }
    $this.ubi_1.n2();
    var current = $this.vbi_1;
    if (!(current == null)) {
      $this.vbi_1 = null;
      _set_fraction__t78qnf($this, 1.0);
      seekToFraction($this);
    }
  }
  function runAnimations($this, $completion) {
    var tmp = new $runAnimationsCOROUTINE$3($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function doOneFrame($this, $completion) {
    var tmp = new $doOneFrameCOROUTINE$4($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function animateOneFrame($this, $completion) {
    var tmp = new $animateOneFrameCOROUTINE$5($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function recalculateAnimationValue($this, animation, deltaPlayTimeNanos) {
    var playTimeNanos = animation.ibk_1.f3(deltaPlayTimeNanos);
    animation.ibk_1 = playTimeNanos;
    var durationNanos = animation.pbk_1;
    if (playTimeNanos.h1(durationNanos) >= 0) {
      animation.lbk_1 = 1.0;
    } else {
      var animationSpec = animation.jbk_1;
      if (!(animationSpec == null)) {
        var tmp = animation;
        var tmp_0 = animation.mbk_1;
        var tmp_1 = Companion_getInstance_10().rbk_1;
        var tmp0_elvis_lhs = animation.nbk_1;
        tmp.lbk_1 = coerceIn(animationSpec.tb6(playTimeNanos, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Companion_getInstance_10().qbk_1 : tmp0_elvis_lhs).zb2(0), 0.0, 1.0);
      } else {
        animation.lbk_1 = lerp(animation.mbk_1.zb2(0), 1.0, playTimeNanos.v3() / durationNanos.v3());
      }
    }
  }
  function waitForCompositionAfterTargetStateChange($this, $completion) {
    var tmp = new $waitForCompositionAfterTargetStateChangeCOROUTINE$6($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function waitForComposition($this, $completion) {
    var tmp = new $waitForCompositionCOROUTINE$7($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function moveAnimationToInitialState($this) {
    var tmp0_elvis_lhs = $this.mbi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var tmp1_elvis_lhs = $this.vbi_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp_1;
      if ($this.nbi_1.h1(new Long(0, 0)) <= 0 || $this.sbk() === 1.0 || equals($this.w4b(), $this.p4b())) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = new SeekingAnimationState();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.animation.core.SeekableTransitionState.moveAnimationToInitialState.<anonymous>' call
        this_0.lbk_1 = $this.sbk();
        var totalDurationNanos = $this.nbi_1;
        this_0.obk_1 = totalDurationNanos;
        var tmp_2 = this_0;
        // Inline function 'kotlin.Long.times' call
        var other = 1.0 - $this.sbk();
        var tmp$ret$0 = totalDurationNanos.w3() * other;
        tmp_2.pbk_1 = roundToLong(tmp$ret$0);
        this_0.mbk_1.ab3(0, $this.sbk());
        tmp_1 = this_0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    if (!(animation == null)) {
      animation.obk_1 = $this.nbi_1;
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      $this.ubi_1.e(animation);
      transition.qbm(animation);
    }
    $this.vbi_1 = null;
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.mbi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.sbk() * transition.rbm().w3());
    transition.sbm(playTimeNanos);
  }
  function SeekingAnimationState() {
    this.ibk_1 = new Long(0, 0);
    this.jbk_1 = null;
    this.kbk_1 = false;
    this.lbk_1 = 0.0;
    this.mbk_1 = new AnimationVector1D(0.0);
    this.nbk_1 = null;
    this.obk_1 = new Long(0, 0);
    this.pbk_1 = new Long(0, 0);
  }
  protoOf(SeekingAnimationState).toString = function () {
    return 'progress nanos: ' + this.ibk_1.toString() + ', animationSpec: ' + toString_0(this.jbk_1) + ',' + (' isComplete: ' + this.kbk_1 + ', value: ' + this.lbk_1 + ', start: ' + this.mbk_1.toString() + ',') + (' initialVelocity: ' + toString_0(this.nbk_1) + ', durationNanos: ' + this.obk_1.toString() + ',') + (' animationSpecDuration: ' + this.pbk_1.toString());
  };
  function Companion_2() {
    Companion_instance_3 = this;
    this.qbk_1 = new AnimationVector1D(0.0);
    this.rbk_1 = new AnimationVector1D(1.0);
  }
  var Companion_instance_3;
  function Companion_getInstance_10() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function SeekableTransitionState$recalculateTotalDurationNanos$lambda(this$0) {
    return function () {
      var tmp = this$0;
      var tmp0_safe_receiver = this$0.mbi_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rbm();
      tmp.nbi_1 = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
      return Unit_instance;
    };
  }
  function SeekableTransitionState$firstFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      this$0.tbi_1 = frameTimeNanos;
      return Unit_instance;
    };
  }
  function SeekableTransitionState$animateOneFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      var delta = frameTimeNanos.g3(this$0.tbi_1);
      this$0.tbi_1 = frameTimeNanos;
      // Inline function 'kotlin.Long.div' call
      var other = this$0.xbi_1;
      var tmp$ret$0 = delta.w3() / other;
      var deltaPlayTimeNanos = roundToLong(tmp$ret$0);
      var tmp;
      if (this$0.ubi_1.fz()) {
        // Inline function 'androidx.collection.ObjectList.forEach' call
        var this_0 = this$0.ubi_1;
        // Inline function 'kotlin.contracts.contract' call
        var content = this_0.hz_1;
        var inductionVariable = 0;
        var last = this_0.iz_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            var tmp_0 = content[i];
            var animation = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            recalculateAnimationValue(this$0, animation, deltaPlayTimeNanos);
            animation.kbk_1 = true;
          }
           while (inductionVariable < last);
        var tmp0_safe_receiver = this$0.mbi_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.tbm();
        }
        var this_1 = this$0.ubi_1;
        var gap = 0;
        var size = this_1.iz_1;
        var content_0 = this_1.hz_1;
        // Inline function 'androidx.collection.ObjectList.indices' call
        var progression = until(0, this_1.iz_1);
        var inductionVariable_0 = progression.i1_1;
        var last_0 = progression.j1_1;
        if (inductionVariable_0 <= last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            content_0[i_0 - gap | 0] = content_0[i_0];
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            var tmp_1 = content_0[i_0];
            if (((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE()).kbk_1) {
              gap = gap + 1 | 0;
            }
          }
           while (!(i_0 === last_0));
        fill(content_0, null, size - gap | 0, size);
        this_1.iz_1 = this_1.iz_1 - gap | 0;
        tmp = Unit_instance;
      }
      var currentAnimation = this$0.vbi_1;
      var tmp_2;
      if (!(currentAnimation == null)) {
        currentAnimation.obk_1 = this$0.nbi_1;
        recalculateAnimationValue(this$0, currentAnimation, deltaPlayTimeNanos);
        _set_fraction__t78qnf(this$0, currentAnimation.lbk_1);
        if (currentAnimation.lbk_1 === 1.0) {
          this$0.vbi_1 = null;
        }
        seekToFraction(this$0);
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation) {
    this.cbn_1 = this$0;
    this.dbn_1 = $targetState;
    this.ebn_1 = $transition;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$snapTo$slambda).y25 = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SeekableTransitionState$snapTo$slambda).ib = function ($completion) {
    return this.y25($completion);
  };
  protoOf(SeekableTransitionState$snapTo$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            endAllAnimations(this.cbn_1);
            this.cbn_1.tbi_1 = new Long(0, -2147483648);
            _set_fraction__t78qnf(this.cbn_1, 0.0);
            var tmp_0 = this;
            var tmp0_subject = this.dbn_1;
            tmp_0.fbn_1 = equals(tmp0_subject, this.cbn_1.w4b()) ? -4.0 : equals(tmp0_subject, this.cbn_1.p4b()) ? -5.0 : -3.0;
            this.ebn_1.mbj(this.dbn_1);
            this.ebn_1.nbj(new Long(0, 0));
            this.cbn_1.obj(this.dbn_1);
            _set_fraction__t78qnf(this.cbn_1, 0.0);
            this.cbn_1.hbk(this.dbn_1);
            this.ebn_1.pbj(this.fbn_1);
            if (this.fbn_1 === -3.0) {
              this.s9_1 = 1;
              suspendResult = waitForCompositionAfterTargetStateChange(this.cbn_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.ebn_1.gbn();
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
  protoOf(SeekableTransitionState$snapTo$slambda).z25 = function (completion) {
    return new SeekableTransitionState$snapTo$slambda(this.cbn_1, this.dbn_1, this.ebn_1, completion);
  };
  function SeekableTransitionState$snapTo$slambda_0(this$0, $targetState, $transition, resultContinuation) {
    var i = new SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation);
    var l = function ($completion) {
      return i.y25($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.pbn_1 = $targetState;
    this.qbn_1 = $oldTargetState;
    this.rbn_1 = this$0;
    this.sbn_1 = $transition;
    this.tbn_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda).y25 = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SeekableTransitionState$seekTo$slambda).ib = function ($completion) {
    return this.y25($completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = coroutineScope(SeekableTransitionState$seekTo$slambda$slambda_0(this.pbn_1, this.qbn_1, this.rbn_1, this.sbn_1, this.tbn_1, null), this);
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
  protoOf(SeekableTransitionState$seekTo$slambda).z25 = function (completion) {
    return new SeekableTransitionState$seekTo$slambda(this.pbn_1, this.qbn_1, this.rbn_1, this.sbn_1, this.tbn_1, completion);
  };
  function SeekableTransitionState$seekTo$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($completion) {
      return i.y25($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    this.cbo_1 = $transition;
    this.dbo_1 = this$0;
    this.ebo_1 = $targetState;
    this.fbo_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda).y25 = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SeekableTransitionState$animateTo$slambda).ib = function ($completion) {
    return this.y25($completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = coroutineScope(SeekableTransitionState$animateTo$slambda$slambda_0(this.dbo_1, this.ebo_1, this.cbo_1, this.fbo_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cbo_1.gbn();
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
  protoOf(SeekableTransitionState$animateTo$slambda).z25 = function (completion) {
    return new SeekableTransitionState$animateTo$slambda(this.cbo_1, this.dbo_1, this.ebo_1, this.fbo_1, completion);
  };
  function SeekableTransitionState$animateTo$slambda_0($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation);
    var l = function ($completion) {
      return i.y25($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $runAnimationsCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cbl_1 = _this__u8e3s4;
  }
  protoOf($runAnimationsCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 6;
            if (this.cbl_1.ubi_1.j() && this.cbl_1.vbi_1 == null) {
              return Unit_instance;
            }

            if (get_durationScale(this.y9()) === 0.0) {
              endAllAnimations(this.cbl_1);
              this.cbl_1.tbi_1 = new Long(0, -2147483648);
              return Unit_instance;
            }

            if (this.cbl_1.tbi_1.equals(new Long(0, -2147483648))) {
              this.s9_1 = 1;
              suspendResult = withFrameNanos(this.cbl_1.wbi_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            if (!(this.cbl_1.ubi_1.fz() || !(this.cbl_1.vbi_1 == null))) {
              this.s9_1 = 5;
              continue $sm;
            }

            this.s9_1 = 4;
            suspendResult = animateOneFrame(this.cbl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.s9_1 = 3;
            continue $sm;
          case 5:
            this.cbl_1.tbi_1 = new Long(0, -2147483648);
            return Unit_instance;
          case 6:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 6) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $doOneFrameCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lbl_1 = _this__u8e3s4;
  }
  protoOf($doOneFrameCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            if (this.lbl_1.tbi_1.equals(new Long(0, -2147483648))) {
              this.s9_1 = 2;
              suspendResult = withFrameNanos(this.lbl_1.wbi_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = animateOneFrame(this.lbl_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s9_1 = 3;
            continue $sm;
          case 2:
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
  function $animateOneFrameCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ubl_1 = _this__u8e3s4;
  }
  protoOf($animateOneFrameCOROUTINE$5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            var tmp_0 = this;
            tmp_0.vbl_1 = get_durationScale(this.y9());
            if (this.vbl_1 <= 0.0) {
              endAllAnimations(this.ubl_1);
              this.s9_1 = 2;
              continue $sm;
            } else {
              this.ubl_1.xbi_1 = this.vbl_1;
              this.s9_1 = 1;
              suspendResult = withFrameNanos(this.ubl_1.ybi_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
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
  function $waitForCompositionAfterTargetStateChangeCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ebm_1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionAfterTargetStateChangeCOROUTINE$6).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.fbm_1 = this.ebm_1.p4b();
            this.s9_1 = 1;
            suspendResult = this.ebm_1.rbi_1.j2i(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (equals(this.fbm_1, this.ebm_1.lbi_1)) {
              this.ebm_1.rbi_1.l2i();
              this.s9_1 = 3;
              continue $sm;
            } else {
              this.s9_1 = 2;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.x19();
              this.ebm_1.qbi_1 = cancellable;
              this.ebm_1.rbi_1.l2i();
              suspendResult = returnIfSuspended(cancellable.a17(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var state = suspendResult;
            if (!equals(state, this.fbm_1)) {
              this.ebm_1.tbi_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('snapTo() was canceled because state was changed to ' + (toString_0(state) + ' instead of ' + toString_0(this.fbm_1)));
            }

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
  function $waitForCompositionCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.obm_1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionCOROUTINE$7).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.pbm_1 = this.obm_1.p4b();
            this.s9_1 = 1;
            suspendResult = this.obm_1.rbi_1.j2i(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.x19();
            this.obm_1.qbi_1 = cancellable;
            this.obm_1.rbi_1.l2i();
            suspendResult = returnIfSuspended(cancellable.a17(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var state = suspendResult;
            if (!equals(state, this.pbm_1)) {
              this.obm_1.tbi_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('targetState while waiting for composition');
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
  function SeekableTransitionState(initialState) {
    Companion_getInstance_10();
    TransitionState.call(this);
    this.jbi_1 = mutableStateOf(initialState);
    this.kbi_1 = mutableStateOf(initialState);
    this.lbi_1 = initialState;
    this.mbi_1 = null;
    this.nbi_1 = new Long(0, 0);
    var tmp = this;
    tmp.obi_1 = SeekableTransitionState$recalculateTotalDurationNanos$lambda(this);
    this.pbi_1 = mutableFloatStateOf(0.0);
    this.qbi_1 = null;
    this.rbi_1 = Mutex();
    this.sbi_1 = new MutatorMutex();
    this.tbi_1 = new Long(0, -2147483648);
    this.ubi_1 = new MutableObjectList();
    this.vbi_1 = null;
    var tmp_0 = this;
    tmp_0.wbi_1 = SeekableTransitionState$firstFrameLambda$lambda(this);
    this.xbi_1 = 0.0;
    var tmp_1 = this;
    tmp_1.ybi_1 = SeekableTransitionState$animateOneFrameLambda$lambda(this);
  }
  protoOf(SeekableTransitionState).obj = function (_set____db54di) {
    var this_0 = this.jbi_1;
    targetState$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(SeekableTransitionState).p4b = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.jbi_1;
    targetState$factory_0();
    return this_0.c1();
  };
  protoOf(SeekableTransitionState).hbk = function (_set____db54di) {
    var this_0 = this.kbi_1;
    currentState$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(SeekableTransitionState).w4b = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.kbi_1;
    currentState$factory_0();
    return this_0.c1();
  };
  protoOf(SeekableTransitionState).sbk = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.pbi_1;
    fraction$factory_0();
    return this_0.o3j();
  };
  protoOf(SeekableTransitionState).gbo = function (targetState, $completion) {
    var tmp0_elvis_lhs = this.mbi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    if (equals(this.w4b(), targetState) && equals(this.p4b(), targetState)) {
      return Unit_instance;
    }
    return this.sbi_1.wb2(VOID, SeekableTransitionState$snapTo$slambda_0(this, targetState, transition, null), $completion);
  };
  protoOf(SeekableTransitionState).hbo = function (fraction, targetState, $completion) {
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= fraction ? fraction <= 1.0 : false)) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.seekTo.<anonymous>' call
      var tmp$ret$0 = 'Expecting fraction between 0 and 1. Got ' + fraction;
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp0_elvis_lhs = this.mbi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var oldTargetState = this.p4b();
    return this.sbi_1.wb2(VOID, SeekableTransitionState$seekTo$slambda_0(targetState, oldTargetState, this, transition, fraction, null), $completion);
  };
  protoOf(SeekableTransitionState).ibo = function (fraction, targetState, $completion, $super) {
    targetState = targetState === VOID ? this.p4b() : targetState;
    return $super === VOID ? this.hbo(fraction, targetState, $completion) : $super.hbo.call(this, fraction, targetState, $completion);
  };
  protoOf(SeekableTransitionState).jbo = function (targetState, animationSpec, $completion) {
    var tmp0_elvis_lhs = this.mbi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    return this.sbi_1.wb2(VOID, SeekableTransitionState$animateTo$slambda_0(transition, this, targetState, animationSpec, null), $completion);
  };
  protoOf(SeekableTransitionState).kbo = function (targetState, animationSpec, $completion, $super) {
    targetState = targetState === VOID ? this.p4b() : targetState;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    return $super === VOID ? this.jbo(targetState, animationSpec, $completion) : $super.jbo.call(this, targetState, animationSpec, $completion);
  };
  protoOf(SeekableTransitionState).lbo = function (transition) {
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.mbi_1 == null || equals(transition, this.mbi_1))) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.transitionConfigured.<anonymous>' call
      var tmp$ret$0 = 'An instance of SeekableTransitionState has been used in different Transitions. ' + ('Previous instance: ' + toString_0(this.mbi_1) + ', new instance: ' + transition.toString());
      throwIllegalStateException(tmp$ret$0);
    }
    this.mbi_1 = transition;
  };
  protoOf(SeekableTransitionState).mbo = function () {
    this.mbi_1 = null;
    get_SeekableStateObserver().t4a(this);
  };
  protoOf(SeekableTransitionState).nbo = function () {
    get_SeekableStateObserver().s4a(this, get_SeekableTransitionStateTotalDurationChanged(), this.obi_1);
  };
  protoOf(SeekableTransitionState).obo = function () {
    var previousTotalDurationNanos = this.nbi_1;
    this.nbo();
    if (!previousTotalDurationNanos.equals(this.nbi_1)) {
      var animation = this.vbi_1;
      if (!(animation == null)) {
        animation.obk_1 = this.nbi_1;
        if (animation.jbk_1 == null) {
          animation.pbk_1 = roundToLong((1.0 - animation.mbk_1.zb2(0)) * this.nbi_1.w3());
        }
      } else if (!this.nbi_1.equals(new Long(0, 0))) {
        seekToFraction(this);
      }
    }
  };
  function TransitionState() {
    this.pbo_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).tb8 = function (_set____db54di) {
    var this_0 = this.pbo_1;
    isRunning$factory_5();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionState).qbo = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.pbo_1;
    isRunning$factory_6();
    return this_0.c1();
  };
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var this_0 = $this.tbo_1;
    targetValue$factory_1();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_targetValue__jjlmb5($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.tbo_1;
    targetValue$factory_2();
    return this_0.c1();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var this_0 = $this.vbo_1;
    animationSpec$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var this_0 = $this.wbo_1;
    animation$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp0_safe_receiver = $this.ybo_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ub3(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.gbp_1, $this.rbo_1, initialValue, initialValue, newInstance($this.dbp_1)));
      $this.bbp_1 = true;
      $this.jbp($this.ibp().vb6());
      return Unit_instance;
    }
    var tmp;
    if (isInterrupted && !$this.fbp_1) {
      var tmp_0;
      var tmp_1 = $this.kbp();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.kbp();
      } else {
        tmp_0 = $this.gbp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.kbp();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if ($this.hbp_1.lbp().h1(new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.hbp_1.lbp());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.rbo_1, initialValue, _get_targetValue__jjlmb5($this), $this.dbp_1));
    $this.jbp($this.ibp().vb6());
    $this.bbp_1 = false;
    onChildAnimationUpdated($this.hbp_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.c1() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.pbp_1 = $outer;
    this.mbp_1 = animation;
    this.nbp_1 = transitionSpec;
    this.obp_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).qbp = function (segment) {
    var targetValue = this.obp_1(segment.p4b());
    if (this.pbp_1.xbp_1.ybp()) {
      var initialValue = this.obp_1(segment.sbp());
      this.mbp_1.tbp(initialValue, targetValue, this.nbp_1(segment));
    } else {
      this.mbp_1.rbp(targetValue, this.nbp_1(segment));
    }
  };
  protoOf(DeferredAnimationData).c1 = function () {
    this.qbp(this.pbp_1.xbp_1.zbp());
    return this.mbp_1.c1();
  };
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.ybp()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = it.i3(toLong(1));
        this$0.abq(tmp$ret$0, $durationScale);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Transition_init_$Init$(transitionState, label, $this) {
    label = label === VOID ? null : label;
    Transition.call($this, transitionState, null, label);
    return $this;
  }
  function Transition_init_$Create$(transitionState, label) {
    return Transition_init_$Init$(transitionState, label, objectCreate(protoOf(Transition)));
  }
  function Transition_init_$Init$_0(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), null, label);
    return $this;
  }
  function Transition_init_$Create$_0(initialState, label) {
    return Transition_init_$Init$_0(initialState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var this_0 = $this.dbj_1;
    segment$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var this_0 = $this.ebj_1;
    _playTimeNanos$factory();
    this_0.t3m(_set____db54di);
    return Unit_instance;
  }
  function _get__playTimeNanos__xxox8s($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.ebj_1;
    _playTimeNanos$factory_0();
    return this_0.u3m();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var this_0 = $this.gbj_1;
    updateChildrenNeeded$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.gbj_1;
    updateChildrenNeeded$factory_0();
    return this_0.c1();
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var a = maxDurationNanos;
        var b = item.bbq();
        maxDurationNanos = a.h1(b) >= 0 ? a : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var a_0 = maxDurationNanos;
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = a_0.h1(b_0) >= 0 ? a_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function resetAnimations($this) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        item.cbq();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        resetAnimations(item_0);
      }
       while (inductionVariable_0 <= last_0);
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.ybp()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this.hbj_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.u(index);
          // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
          // Inline function 'kotlin.math.max' call
          var a = maxDurationNanos;
          var b = item.bbq();
          maxDurationNanos = a.h1(b) >= 0 ? a : b;
          item.dbq($this.kbj_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState_0($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.hbp_1 = $outer;
    this.rbo_1 = typeConverter;
    this.sbo_1 = label;
    this.tbo_1 = mutableStateOf(initialValue);
    this.ubo_1 = spring();
    this.vbo_1 = mutableStateOf(this.ubo_1);
    this.wbo_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.kbp(), this.rbo_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.xbo_1 = null;
    this.ybo_1 = null;
    this.zbo_1 = mutableStateOf(true);
    this.abp_1 = mutableFloatStateOf(-1.0);
    this.bbp_1 = false;
    this.cbp_1 = mutableStateOf(initialValue);
    this.dbp_1 = initialVelocityVector;
    this.ebp_1 = mutableLongStateOf(this.ibp().vb6());
    this.fbp_1 = false;
    var tmp0_safe_receiver = get_visibilityThresholdMap().s2(this.rbo_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.rbo_1.xb2()(initialValue);
      var inductionVariable = 0;
      var last = vector.yb2();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.ab3(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.rbo_1.bb3()(vector);
    }
    var visibilityThreshold = tmp;
    this.gbp_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState_0).kbp = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.vbo_1;
    animationSpec$factory_0();
    return this_0.c1();
  };
  protoOf(TransitionAnimationState_0).ibp = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.wbo_1;
    animation$factory_0();
    return this_0.c1();
  };
  protoOf(TransitionAnimationState_0).ebq = function (_set____db54di) {
    var this_0 = this.zbo_1;
    isFinished$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState_0).fbq = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.zbo_1;
    isFinished$factory_0();
    return this_0.c1();
  };
  protoOf(TransitionAnimationState_0).gbq = function (_set____db54di) {
    var this_0 = this.abp_1;
    resetSnapValue$factory();
    this_0.n3j(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState_0).hbq = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.abp_1;
    resetSnapValue$factory_0();
    return this_0.o3j();
  };
  protoOf(TransitionAnimationState_0).sb2 = function (_set____db54di) {
    var this_0 = this.cbp_1;
    value$factory_5();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState_0).c1 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.cbp_1;
    value$factory_6();
    return this_0.c1();
  };
  protoOf(TransitionAnimationState_0).jbp = function (_set____db54di) {
    var this_0 = this.ebp_1;
    durationNanos$factory();
    this_0.t3m(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState_0).bbq = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ebp_1;
    durationNanos$factory_0();
    return this_0.u3m();
  };
  protoOf(TransitionAnimationState_0).ibq = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.ibp().vb6() : playTimeNanos;
    this.sb2(this.ibp().sb6(playTime));
    this.dbp_1 = this.ibp().xb6(playTime);
    if (this.ibp().ub6(playTime)) {
      this.ebq(true);
    }
  };
  protoOf(TransitionAnimationState_0).dbq = function (playTimeNanos) {
    if (!(this.hbq() === -1.0)) {
      return Unit_instance;
    }
    this.fbp_1 = true;
    if (equals(this.ibp().ub3(), this.ibp().qb6())) {
      this.sb2(this.ibp().ub3());
    } else {
      this.sb2(this.ibp().sb6(playTimeNanos));
      this.dbp_1 = this.ibp().xb6(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState_0).jbq = function () {
    var tmp0_elvis_lhs = this.xbo_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animState = tmp;
    var tmp1_elvis_lhs = this.ybo_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    // Inline function 'kotlin.Long.times' call
    var this_0 = animState.obk_1;
    var other = animState.lbk_1;
    var tmp$ret$0 = this_0.w3() * other;
    var initialPlayTimeNanos = roundToLong(tmp$ret$0);
    var initialValue = animation.sb6(initialPlayTimeNanos);
    if (this.bbp_1) {
      this.ibp().ob6(initialValue);
    }
    this.ibp().pb6(initialValue);
    this.jbp(this.ibp().vb6());
    if (this.hbq() === -2.0 || this.bbp_1) {
      this.sb2(initialValue);
    } else {
      this.dbq(this.hbp_1.lbp());
    }
    if (initialPlayTimeNanos.h1(animState.obk_1) >= 0) {
      this.xbo_1 = null;
      this.ybo_1 = null;
    } else {
      animState.kbk_1 = false;
    }
  };
  protoOf(TransitionAnimationState_0).cbq = function () {
    this.gbq(-2.0);
  };
  protoOf(TransitionAnimationState_0).kbq = function (fraction) {
    switch (fraction) {
      case -4.0:
      case -5.0:
        var initAnim = this.ybo_1;
        if (!(initAnim == null)) {
          this.ibp().pb6(initAnim.ub3());
          this.xbo_1 = null;
          this.ybo_1 = null;
        }

        var tmp;
        if (fraction === -4.0) {
          tmp = this.ibp().qb6();
        } else {
          tmp = this.ibp().ub3();
        }

        var animationValue = tmp;
        this.ibp().pb6(animationValue);
        this.ibp().ob6(animationValue);
        this.sb2(animationValue);
        this.jbp(this.ibp().vb6());
        break;
      default:
        this.gbq(fraction);
        break;
    }
  };
  protoOf(TransitionAnimationState_0).lbq = function (animationState) {
    if (!equals(this.ibp().ub3(), this.ibp().qb6())) {
      this.ybo_1 = this.ibp();
      this.xbo_1 = animationState;
    }
    _set_animation__pan2kh(this, TargetBasedAnimation_init_$Create$(this.gbp_1, this.rbo_1, this.c1(), this.c1(), newInstance(this.dbp_1)));
    this.jbp(this.ibp().vb6());
    this.bbp_1 = true;
  };
  protoOf(TransitionAnimationState_0).mbq = function () {
    this.ybo_1 = null;
    this.xbo_1 = null;
    this.bbp_1 = false;
  };
  protoOf(TransitionAnimationState_0).toString = function () {
    return 'current value: ' + toString_0(this.c1()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.kbp());
  };
  protoOf(TransitionAnimationState_0).rbp = function (targetValue, animationSpec) {
    var tmp;
    if (this.bbp_1) {
      var tmp0_safe_receiver = this.ybo_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ub3());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.hbq() === -1.0) {
      return Unit_instance;
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    var initialValue = this.hbq() === -3.0 ? targetValue : this.c1();
    updateAnimation(this, initialValue, !this.fbq());
    this.ebq(this.hbq() === -3.0);
    if (this.hbq() >= 0.0) {
      var duration = this.ibp().vb6();
      var tmp_0 = this.ibp();
      // Inline function 'kotlin.Long.times' call
      var other = this.hbq();
      var tmp$ret$0 = duration.v3() * other;
      this.sb2(tmp_0.sb6(numberToLong(tmp$ret$0)));
    } else if (this.hbq() === -3.0) {
      this.sb2(targetValue);
    }
    this.bbp_1 = false;
    this.gbq(-1.0);
  };
  protoOf(TransitionAnimationState_0).tbp = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.ibp().qb6(), initialValue) && equals(this.ibp().ub3(), targetValue)) {
      return Unit_instance;
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.nbq_1 = initialState;
    this.obq_1 = targetState;
  }
  protoOf(SegmentImpl).sbp = function () {
    return this.nbq_1;
  };
  protoOf(SegmentImpl).p4b = function () {
    return this.obq_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.nbq_1, other.sbp());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.obq_1, other.p4b());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.nbq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.obq_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.xbp_1 = $outer;
    this.ubp_1 = typeConverter;
    this.vbp_1 = label;
    this.wbp_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).qbq = function (_set____db54di) {
    var this_0 = this.wbp_1;
    data$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(DeferredAnimation).rbq = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.wbp_1;
    data$factory_0();
    return this_0.c1();
  };
  protoOf(DeferredAnimation).sbq = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.rbq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState_0(this.xbp_1, targetValueByState(this.xbp_1.w4b()), createZeroVectorFrom(this.ubp_1, targetValueByState(this.xbp_1.w4b())), this.ubp_1, this.vbp_1), transitionSpec, targetValueByState);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.qbq(this_0);
      this.xbp_1.tbq(this_0.mbp_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.obp_1 = targetValueByState;
    animData.nbp_1 = transitionSpec;
    animData.qbp(this.xbp_1.zbp());
    return animData;
  };
  protoOf(DeferredAnimation).ubq = function () {
    var tmp0_safe_receiver = this.rbq();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.mbp_1.tbp(tmp0_safe_receiver.obp_1(this.xbp_1.zbp().sbp()), tmp0_safe_receiver.obp_1(this.xbp_1.zbp().p4b()), tmp0_safe_receiver.nbp_1(this.xbp_1.zbp()));
    }
  };
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      return calculateTotalDurationNanos(this$0);
    };
  }
  function Transition$animateTo$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function Transition$animateTo$lambda$slambda(this$0, resultContinuation) {
    this.dbr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Transition$animateTo$lambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.fbr_1 = get_durationScale(this.ebr_1.h14());
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.ebr_1)) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.s9_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.dbr_1, this.fbr_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9_1 = 1;
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
  protoOf(Transition$animateTo$lambda$slambda).b20 = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.dbr_1, completion);
    i.ebr_1 = $this$launch;
    return i;
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).v18 = function () {
    // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Transition$animateTo$lambda_0($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0();
    };
  }
  function Transition$animateTo$lambda_1($tmp1_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.gbr($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.zbi_1 = transitionState;
    this.abj_1 = parentTransition;
    this.bbj_1 = label;
    this.cbj_1 = mutableStateOf(this.w4b());
    this.dbj_1 = mutableStateOf(new SegmentImpl(this.w4b(), this.w4b()));
    this.ebj_1 = mutableLongStateOf(new Long(0, 0));
    this.fbj_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.gbj_1 = mutableStateOf(false);
    this.hbj_1 = mutableStateListOf();
    this.ibj_1 = mutableStateListOf();
    this.jbj_1 = mutableStateOf(false);
    this.kbj_1 = new Long(0, 0);
    var tmp = this;
    tmp.lbj_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.zbi_1.lbo(this);
  }
  protoOf(Transition).w4b = function () {
    return this.zbi_1.w4b();
  };
  protoOf(Transition).obj = function (_set____db54di) {
    var this_0 = this.cbj_1;
    targetState$factory_1();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).p4b = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.cbj_1;
    targetState$factory_2();
    return this_0.c1();
  };
  protoOf(Transition).zbp = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.dbj_1;
    segment$factory_0();
    return this_0.c1();
  };
  protoOf(Transition).qb4 = function () {
    return !this.hbr().equals(new Long(0, -2147483648));
  };
  protoOf(Transition).nbj = function (value) {
    if (this.abj_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).lbp = function () {
    var tmp0_safe_receiver = this.abj_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lbp();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).ibr = function (_set____db54di) {
    var this_0 = this.fbj_1;
    startTimeNanos$factory();
    this_0.t3m(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).hbr = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.fbj_1;
    startTimeNanos$factory_0();
    return this_0.u3m();
  };
  protoOf(Transition).jbr = function () {
    return this.hbj_1;
  };
  protoOf(Transition).kbr = function (_set____db54di) {
    var this_0 = this.jbj_1;
    isSeeking$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).ybp = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.jbj_1;
    isSeeking$factory_0();
    return this_0.c1();
  };
  protoOf(Transition).lbr = function () {
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.hbj_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.u(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
          if (!(item.xbo_1 == null)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var this_1 = this.ibj_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = this_1.p() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = this_1.u(index_0);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
            if (item_0.lbr()) {
              tmp$ret$3 = true;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(Transition).rbm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.lbj_1;
    totalDurationNanos$factory();
    return this_0.c1();
  };
  protoOf(Transition).abq = function (frameTimeNanos, durationScale) {
    if (this.hbr().equals(new Long(0, -2147483648))) {
      this.mbr(frameTimeNanos);
    }
    var deltaT = frameTimeNanos.g3(this.hbr());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = deltaT.w3() / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.nbj(scaledPlayTimeNanos);
    this.nbr(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).nbr = function (scaledPlayTimeNanos, scaleToEnd) {
    if (this.hbr().equals(new Long(0, -2147483648))) {
      this.mbr(scaledPlayTimeNanos);
    } else if (!this.zbi_1.qbo()) {
      this.zbi_1.tb8(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!item.fbq()) {
          item.ibq(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.fbq()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!equals(item_0.p4b(), item_0.w4b())) {
          item_0.nbr(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.p4b(), item_0.w4b())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.gbn();
    }
  };
  protoOf(Transition).mbr = function (frameTimeNanos) {
    this.ibr(frameTimeNanos);
    this.zbi_1.tb8(true);
  };
  protoOf(Transition).obr = function () {
    this.gbn();
    this.zbi_1.mbo();
  };
  protoOf(Transition).gbn = function () {
    this.ibr(new Long(0, -2147483648));
    var tmp = this.zbi_1;
    if (tmp instanceof MutableTransitionState) {
      this.zbi_1.hbk(this.p4b());
    }
    this.nbj(new Long(0, 0));
    this.zbi_1.tb8(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.onTransitionEnd.<anonymous>' call
        item.gbn();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).pbr = function (initialState, targetState, playTimeNanos) {
    this.ibr(new Long(0, -2147483648));
    this.zbi_1.tb8(false);
    if (!this.ybp() || !equals(this.w4b(), initialState) || !equals(this.p4b(), targetState)) {
      var tmp;
      if (!equals(this.w4b(), initialState)) {
        var tmp_0 = this.zbi_1;
        tmp = tmp_0 instanceof MutableTransitionState;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.zbi_1.hbk(initialState);
      }
      this.obj(targetState);
      this.kbr(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var it = item instanceof Transition ? item : THROW_CCE();
        if (it.ybp()) {
          it.pbr(it.w4b(), it.p4b(), playTimeNanos);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        item_0.dbq(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.kbj_1 = playTimeNanos;
  };
  protoOf(Transition).qbr = function (transition) {
    return this.ibj_1.j2y(transition);
  };
  protoOf(Transition).rbr = function (transition) {
    return this.ibj_1.n3g(transition);
  };
  protoOf(Transition).tbq = function (animation) {
    return this.hbj_1.j2y(animation);
  };
  protoOf(Transition).sbr = function (animation) {
    this.hbj_1.n3g(animation);
  };
  protoOf(Transition).mbj = function (targetState) {
    if (!equals(this.p4b(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.p4b(), targetState));
      if (!equals(this.w4b(), this.p4b())) {
        this.zbi_1.hbk(this.p4b());
      }
      this.obj(targetState);
      if (!this.qb4()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      resetAnimations(this);
    }
  };
  protoOf(Transition).gbr = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1493585151);
    sourceInformation($composer_0, 'C(animateTo)1220@49879L24,1221@49959L1012,1221@49920L1051:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f2r(targetState) : $composer_0.f32(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1493585151, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo (Transition.kt:1212)');
      }
      if (!this.ybp()) {
        this.mbj(targetState);
        if (!equals(targetState, this.w4b()) || this.qb4() || _get_updateChildrenNeeded__mpvzi(this)) {
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
          var getContext = null;
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
          if (!((1 & 1) === 0)) {
            getContext = Transition$animateTo$lambda;
          }
          var composer = $composer_1;
          sourceInformationMarkerStart($composer_1, -954207516, 'CC(remember):Effects.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.w32();
          var tmp;
          if (false || it === Companion_getInstance_0().l2u_1) {
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
          var coroutineScope = tmp1_group;
          sourceInformationMarkerStart($composer_0, 335902523, 'CC(remember):Transition.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          var invalid = !!($composer_0.f32(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = this_0.w32();
          var tmp_1;
          if (invalid || it_0 === Companion_getInstance_0().l2u_1) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>' call
            var value_0 = Transition$animateTo$lambda_0(coroutineScope, this);
            this_0.h33(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          DisposableEffect_0(coroutineScope, this, tmp0_group, $composer_0, 112 & $dirty);
        }
      }
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
      tmp2_safe_receiver.n38(Transition$animateTo$lambda_1(this, targetState, $changed));
    }
  };
  protoOf(Transition).sbm = function (playTimeNanos) {
    if (this.hbr().equals(new Long(0, -2147483648))) {
      this.ibr(playTimeNanos);
    }
    this.nbj(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        item.dbq(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        if (!equals(item_0.p4b(), item_0.w4b())) {
          item_0.sbm(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).qbm = function (animationState) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item.lbq(animationState);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item_0.qbm(animationState);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).pbj = function (fraction) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item.kbq(fraction);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item_0.pbj(fraction);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).tbk = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item.mbq();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item_0.tbk();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).tbm = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.hbj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item.jbq();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.ibj_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item_0.tbm();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    // Inline function 'androidx.compose.ui.util.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.jbr();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        // Inline function 'androidx.compose.animation.core.Transition.toString.<anonymous>' call
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).tbr = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.rbq();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mbp_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.sbr(tmp1_safe_receiver);
    }
  };
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.vbr_1 = mutableStateOf(initialState);
    this.wbr_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).hbk = function (_set____db54di) {
    var this_0 = this.vbr_1;
    currentState$factory_1();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).w4b = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.vbr_1;
    currentState$factory_2();
    return this_0.c1();
  };
  protoOf(MutableTransitionState).xbr = function (_set____db54di) {
    var this_0 = this.wbr_1;
    targetState$factory_3();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).p4b = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.wbr_1;
    targetState$factory_4();
    return this_0.c1();
  };
  protoOf(MutableTransitionState).lbo = function (transition) {
  };
  protoOf(MutableTransitionState).mbo = function () {
  };
  function rememberTransition(transitionState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1643203617, 'C(rememberTransition)P(1)822@34343L94,837@35067L190,837@35038L219:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(1643203617, $changed, -1, 'androidx.compose.animation.core.rememberTransition (Transition.kt:821)');
    }
    sourceInformationMarkerStart($composer_0, 587424932, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.f2r(transitionState) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value = Transition_init_$Create$(transitionState, label_0);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    if (transitionState instanceof SeekableTransitionState) {
      $composer_0.a31(1030461252);
      sourceInformation($composer_0, '826@34574L382,826@34500L456');
      var tmp_1 = transitionState.w4b();
      var tmp_2 = transitionState.p4b();
      sourceInformationMarkerStart($composer_0, 587432612, 'CC(remember):Transition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($changed & 14 ^ 6) > 4 && $composer_0.f2r(transitionState) || ($changed & 6) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.w32();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().l2u_1) {
        // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
        var value_0 = rememberTransition$slambda_0(transitionState, null);
        $composer_0.h33(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect_0(tmp_1, tmp_2, tmp2_group, $composer_0, 0);
      $composer_0.c31();
    } else {
      $composer_0.a31(1030922811);
      sourceInformation($composer_0, '835@34989L38');
      transition.gbr(transitionState.p4b(), $composer_0, 0);
      $composer_0.c31();
    }
    sourceInformationMarkerStart($composer_0, 587448196, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_0.f2r(transition);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.w32();
    var tmp_5;
    if (invalid_1 || it_1 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value_1 = rememberTransition$lambda(transition);
      $composer_0.h33(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transition, tmp3_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function createDeferredAnimation(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1714122528, 'C(createDeferredAnimation)P(1)1781@72682L58,1782@72772L75,1782@72745L102:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = 'DeferredAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-1714122528, $changed, -1, 'androidx.compose.animation.core.createDeferredAnimation (Transition.kt:1780)');
    }
    sourceInformationMarkerStart($composer_0, -1378232737, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var lazyAnim = tmp1_group;
    sourceInformationMarkerStart($composer_0, -1378229840, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.f32(lazyAnim));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value_0 = createDeferredAnimation$lambda(_this__u8e3s4, lazyAnim);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(lazyAnim, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.ybp()) {
      lazyAnim.ubq();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return lazyAnim;
  }
  function updateTransition(targetState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2029166765, 'C(updateTransition)P(1)93@3896L51,94@3963L22,95@4019L190,95@3990L219:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(2029166765, $changed, -1, 'androidx.compose.animation.core.updateTransition (Transition.kt:92)');
    }
    sourceInformationMarkerStart($composer_0, -659286059, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value = Transition_init_$Create$_0(targetState, label_0);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    transition.gbr(targetState, $composer_0, 48 | 8 & $changed | 14 & $changed);
    sourceInformationMarkerStart($composer_0, -659281984, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value_0 = updateTransition$lambda(transition);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transition, tmp2_group, $composer_0, 54);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function createChildTransitionInternal(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -198307638, 'C(createChildTransitionInternal)P(1,2)1827@74657L116,1831@74808L112,1831@74779L141:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-198307638, $changed, -1, 'androidx.compose.animation.core.createChildTransitionInternal (Transition.kt:1826)');
    }
    sourceInformationMarkerStart($composer_0, 1039291970, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value = new Transition(new MutableTransitionState(initialState), _this__u8e3s4, '' + _this__u8e3s4.bbj_1 + ' > ' + childLabel);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    sourceInformationMarkerStart($composer_0, 1039296798, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.f2r(transition));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value_0 = createChildTransitionInternal$lambda(_this__u8e3s4, transition);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transition, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.ybp()) {
      transition.pbr(initialState, targetState, _this__u8e3s4.kbj_1);
    } else {
      transition.mbj(targetState);
      transition.kbr(false);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -304821198, 'C(createTransitionAnimation)P(1,3!1,4)1902@77723L499,1925@78606L128,1925@78568L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-304821198, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation (Transition.kt:1901)');
    }
    sourceInformationMarkerStart($composer_0, 1397691138, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>' call
      var value = new TransitionAnimationState_0(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transitionAnimation = tmp1_group;
    if (_this__u8e3s4.ybp()) {
      transitionAnimation.tbp(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.rbp(targetValue, animationSpec);
    }
    sourceInformationMarkerStart($composer_0, 1397719023, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.f2r(transitionAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().l2u_1) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>' call
      var value_0 = createTransitionAnimation$lambda(_this__u8e3s4, transitionAnimation);
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect(transitionAnimation, tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transitionAnimation;
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.obo();
    return Unit_instance;
  }
  function SeekableStateObserver$delegate$lambda() {
    _init_properties_Transition_kt__s6zoln();
    // Inline function 'kotlin.apply' call
    var this_0 = new SnapshotStateObserver(SeekableStateObserver$delegate$lambda$lambda);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.SeekableStateObserver$delegate.<anonymous>.<anonymous>' call
    this_0.v4a();
    return this_0;
  }
  function SeekableStateObserver$delegate$lambda$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it();
    return Unit_instance;
  }
  function rememberTransition$slambda($transitionState, resultContinuation) {
    this.gbs_1 = $transitionState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTransition$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(rememberTransition$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTransition$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.gbs_1.nbo();
            var tmp_0 = this;
            tmp_0.ibs_1 = this.gbs_1.rbi_1;
            var tmp_1 = this;
            tmp_1.jbs_1 = null;
            this.s9_1 = 1;
            suspendResult = this.ibs_1.i2i(this.jbs_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.gbs_1.lbi_1 = this.gbs_1.p4b();
                var tmp0_safe_receiver = this.gbs_1.qbi_1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  var value = this.gbs_1.p4b();
                  tmp0_safe_receiver.da(_Result___init__impl__xyqfz8(value));
                }
                this.gbs_1.qbi_1 = null;
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.ibs_1.k2i(this.jbs_1);
                throw t;
              }
            }
             while (false);
            this.ibs_1.k2i(this.jbs_1);
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
  protoOf(rememberTransition$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new rememberTransition$slambda(this.gbs_1, completion);
    i.hbs_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberTransition$slambda_0($transitionState, resultContinuation) {
    var i = new rememberTransition$slambda($transitionState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_1($transition) {
    this.kbs_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_1).v18 = function () {
    // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.kbs_1.obr();
  };
  function rememberTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1($transition);
    };
  }
  function _no_name_provided__qut3iv_2($this_createDeferredAnimation, $lazyAnim) {
    this.lbs_1 = $this_createDeferredAnimation;
    this.mbs_1 = $lazyAnim;
  }
  protoOf(_no_name_provided__qut3iv_2).v18 = function () {
    // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.lbs_1.tbr(this.mbs_1);
  };
  function createDeferredAnimation$lambda($this_createDeferredAnimation, $lazyAnim) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2($this_createDeferredAnimation, $lazyAnim);
    };
  }
  function _no_name_provided__qut3iv_3($transition) {
    this.nbs_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_3).v18 = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.nbs_1.obr();
  };
  function updateTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_3($transition);
    };
  }
  function _no_name_provided__qut3iv_4($this_createChildTransitionInternal, $transition) {
    this.obs_1 = $this_createChildTransitionInternal;
    this.pbs_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_4).v18 = function () {
    // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>.<anonymous>.<anonymous>' call
    this.obs_1.rbr(this.pbs_1);
  };
  function createChildTransitionInternal$lambda($this_createChildTransitionInternal, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal.qbr($transition);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_4($this_createChildTransitionInternal, $transition);
    };
  }
  function _no_name_provided__qut3iv_5($this_createTransitionAnimation, $transitionAnimation) {
    this.qbs_1 = $this_createTransitionAnimation;
    this.rbs_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv_5).v18 = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.qbs_1.sbr(this.rbs_1);
  };
  function createTransitionAnimation$lambda($this_createTransitionAnimation, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation.tbq($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_5($this_createTransitionAnimation, $transitionAnimation);
    };
  }
  function SeekableStateObserver$factory() {
    return getPropertyCallableRef('SeekableStateObserver', 0, KProperty0, function () {
      return get_SeekableStateObserver();
    }, null);
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p4b();
    }, function (receiver, value) {
      return receiver.obj(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p4b();
    }, function (receiver, value) {
      return receiver.obj(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w4b();
    }, function (receiver, value) {
      return receiver.hbk(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w4b();
    }, function (receiver, value) {
      return receiver.hbk(value);
    });
  }
  function fraction$factory() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.sbk();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function fraction$factory_0() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.sbk();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function isRunning$factory_5() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.qbo();
    }, function (receiver, value) {
      return receiver.tb8(value);
    });
  }
  function isRunning$factory_6() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.qbo();
    }, function (receiver, value) {
      return receiver.tb8(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p4b();
    }, function (receiver, value) {
      return receiver.obj(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p4b();
    }, function (receiver, value) {
      return receiver.obj(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.zbp();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.zbp();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function _playTimeNanos$factory() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function _playTimeNanos$factory_0() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.hbr();
    }, function (receiver, value) {
      return receiver.ibr(value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.hbr();
    }, function (receiver, value) {
      return receiver.ibr(value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.ybp();
    }, function (receiver, value) {
      return receiver.kbr(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.ybp();
    }, function (receiver, value) {
      return receiver.kbr(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.rbm();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.kbp();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.kbp();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.ibp();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.ibp();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.fbq();
    }, function (receiver, value) {
      return receiver.ebq(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.fbq();
    }, function (receiver, value) {
      return receiver.ebq(value);
    });
  }
  function resetSnapValue$factory() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.hbq();
    }, function (receiver, value) {
      return receiver.gbq(value);
    });
  }
  function resetSnapValue$factory_0() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.hbq();
    }, function (receiver, value) {
      return receiver.gbq(value);
    });
  }
  function value$factory_5() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function value$factory_6() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return receiver.sb2(value);
    });
  }
  function durationNanos$factory() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.bbq();
    }, function (receiver, value) {
      return receiver.jbp(value);
    });
  }
  function durationNanos$factory_0() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.bbq();
    }, function (receiver, value) {
      return receiver.jbp(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.rbq();
    }, function (receiver, value) {
      return receiver.qbq(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.rbq();
    }, function (receiver, value) {
      return receiver.qbq(value);
    });
  }
  function currentState$factory_1() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w4b();
    }, function (receiver, value) {
      return receiver.hbk(value);
    });
  }
  function currentState$factory_2() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w4b();
    }, function (receiver, value) {
      return receiver.hbk(value);
    });
  }
  function targetState$factory_3() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p4b();
    }, function (receiver, value) {
      return receiver.xbr(value);
    });
  }
  function targetState$factory_4() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p4b();
    }, function (receiver, value) {
      return receiver.xbr(value);
    });
  }
  var properties_initialized_Transition_kt_wb2qvd;
  function _init_properties_Transition_kt__s6zoln() {
    if (!properties_initialized_Transition_kt_wb2qvd) {
      properties_initialized_Transition_kt_wb2qvd = true;
      SeekableTransitionStateTotalDurationChanged = SeekableTransitionStateTotalDurationChanged$lambda;
      var tmp = LazyThreadSafetyMode_NONE_getInstance();
      SeekableStateObserver$delegate = lazy(tmp, SeekableStateObserver$delegate$lambda);
    }
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.sbs_1 = convertToVector;
    this.tbs_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).xb2 = function () {
    return this.sbs_1;
  };
  protoOf(TwoWayConverterImpl).bb3 = function () {
    return this.tbs_1;
  };
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.rb8_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.rb8_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.u5i_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.rb8_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.b5j_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.b5j_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.vb8_1;
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.wb8_1;
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.u5h_1), _Size___get_height__impl__a04p02(it.u5h_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.vb8_1, it.wb8_1));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.n5g_1), _Offset___get_y__impl__8bzhra(it.n5g_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.vb8_1, it.wb8_1));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.c5j_1), _IntOffset___get_y__impl__2avpwj(it.c5j_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.vb8_1;
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.wb8_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$3));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.o5j_1), _IntSize___get_height__impl__prv63b(it.o5j_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.vb8_1;
    var tmp$ret$1 = roundToInt(this_0);
    var tmp = coerceAtLeast(tmp$ret$1, 0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.wb8_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntSize(IntSize_0(tmp, coerceAtLeast(tmp$ret$3, 0)));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.t5g_1, it.u5g_1, it.v5g_1, it.w5g_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.cb9_1, it.db9_1, it.eb9_1, it.fb9_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    this.ubs_1 = 10000.0;
    this.vbs_1 = 1500.0;
    this.wbs_1 = 400.0;
    this.xbs_1 = 200.0;
    this.ybs_1 = 50.0;
    this.zbs_1 = 0.2;
    this.abt_1 = 0.5;
    this.bbt_1 = 0.75;
    this.cbt_1 = 1.0;
    this.dbt_1 = 0.01;
  }
  var Spring_instance;
  function Spring_getInstance() {
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.ebt_1 = dampingRatio;
    this.fbt_1 = stiffness;
    this.gbt_1 = new VectorizedFloatAnimationSpec(anims);
  }
  protoOf(VectorizedSpringSpec).rb6 = function () {
    return this.gbt_1.rb6();
  };
  protoOf(VectorizedSpringSpec).wb6 = function (initialValue, targetValue, initialVelocity) {
    return this.gbt_1.wb6(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).mb6 = function (initialValue, targetValue, initialVelocity) {
    return this.gbt_1.mb6(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).tb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.gbt_1.tb6(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).yb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.gbt_1.yb6(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.ibt_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.jbt_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.kbt_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.lbt_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).u = function (index) {
    return this.lbt_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.hbt_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).tb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.ibt_1 == null)) {
      this.ibt_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).ab3(i, this.hbt_1.u(i).vbb(playTimeNanos, initialValue.zb2(i), targetValue.zb2(i), initialVelocity.zb2(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).yb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.jbt_1 == null)) {
      this.jbt_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).ab3(i, this.hbt_1.u(i).wbb(playTimeNanos, initialValue.zb2(i), targetValue.zb2(i), initialVelocity.zb2(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).mb6 = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.kbt_1 == null)) {
      this.kbt_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).yb2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).ab3(i, this.hbt_1.u(i).xbb(initialValue.zb2(i), targetValue.zb2(i), initialVelocity.zb2(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).wb6 = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(0, initialValue.yb2());
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var it = element;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxDuration;
        var b = this.hbt_1.u(it).ybb(initialValue.zb2(it), targetValue.zb2(it), initialVelocity.zb2(it));
        maxDuration = a.h1(b) >= 0 ? a : b;
      }
       while (!(element === last));
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function repetitionPlayTimeNanos($this, playTimeNanos) {
    if (playTimeNanos.f3($this.pbt_1).h1(new Long(0, 0)) <= 0) {
      return new Long(0, 0);
    } else {
      var postOffsetPlayTimeNanos = playTimeNanos.f3($this.pbt_1);
      var repeatsCount = postOffsetPlayTimeNanos.i3($this.obt_1);
      var tmp;
      if ($this.nbt_1.equals(RepeatMode_Restart_getInstance())) {
        tmp = true;
      } else {
        // Inline function 'kotlin.Long.rem' call
        tmp = repeatsCount.j3(toLong(2)).equals(new Long(0, 0));
      }
      if (tmp) {
        return postOffsetPlayTimeNanos.g3(repeatsCount.h3($this.obt_1));
      } else {
        // Inline function 'kotlin.Long.plus' call
        return repeatsCount.f3(toLong(1)).h3($this.obt_1).g3(postOffsetPlayTimeNanos);
      }
    }
  }
  function repetitionStartVelocity($this, playTimeNanos, start, startVelocity, end) {
    var tmp;
    if (playTimeNanos.f3($this.pbt_1).h1($this.obt_1) > 0) {
      tmp = $this.mbt_1.yb6($this.obt_1.g3($this.pbt_1), start, end, startVelocity);
    } else {
      tmp = startVelocity;
    }
    return tmp;
  }
  function VectorizedInfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.mbt_1 = animation;
    this.nbt_1 = repeatMode;
    this.obt_1 = numberToLong(this.mbt_1.qbt() + this.mbt_1.rbt() | 0).h3(new Long(1000000, 0));
    this.pbt_1 = _StartOffset___get_value__impl__8sikig(initialStartOffset).h3(new Long(1000000, 0));
  }
  protoOf(VectorizedInfiniteRepeatableSpec).rb6 = function () {
    return true;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).tb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.mbt_1.tb6(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).yb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.mbt_1.yb6(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).wb6 = function (initialValue, targetValue, initialVelocity) {
    return new Long(-1, 2147483647);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _ArcMode___init__impl__iiwx98(value) {
    return value;
  }
  function _ArcMode___get_value__impl__j60x0o($this) {
    return $this;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.cb8_1 = _ArcMode___init__impl__iiwx98(5);
    this.db8_1 = _ArcMode___init__impl__iiwx98(4);
    this.eb8_1 = _ArcMode___init__impl__iiwx98(0);
  }
  var Companion_instance_4;
  function Companion_getInstance_11() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function ArcMode__toString_impl_wsn638($this) {
    return 'ArcMode(value=' + $this + ')';
  }
  function ArcMode__hashCode_impl_ghaz31($this) {
    return $this;
  }
  function ArcMode__equals_impl_alzc5j($this, other) {
    if (!(other instanceof ArcMode))
      return false;
    if (!($this === (other instanceof ArcMode ? other.sbt_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ArcMode(value) {
    Companion_getInstance_11();
    this.sbt_1 = value;
  }
  protoOf(ArcMode).toString = function () {
    return ArcMode__toString_impl_wsn638(this.sbt_1);
  };
  protoOf(ArcMode).hashCode = function () {
    return ArcMode__hashCode_impl_ghaz31(this.sbt_1);
  };
  protoOf(ArcMode).equals = function (other) {
    return ArcMode__equals_impl_alzc5j(this.sbt_1, other);
  };
  function _get_modes__e5yfrz($this) {
    var tmp = $this.zbt_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('modes');
    }
  }
  function _get_times__axs3p1($this) {
    var tmp = $this.abu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('times');
    }
  }
  function _get_valueVector__r10idf_1($this) {
    var tmp = $this.bbu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_1($this) {
    var tmp = $this.cbu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_lastInitialValue__7jbc2w($this) {
    var tmp = $this.dbu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('lastInitialValue');
    }
  }
  function _get_lastTargetValue__fdzwbr($this) {
    var tmp = $this.ebu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('lastTargetValue');
    }
  }
  function _get_posArray__xrvax2($this) {
    var tmp = $this.fbu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('posArray');
    }
  }
  function _get_slopeArray__uloc9v($this) {
    var tmp = $this.gbu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('slopeArray');
    }
  }
  function _get_arcSpline__qq9nn2($this) {
    var tmp = $this.hbu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('arcSpline');
    }
  }
  function init_0($this, initialValue, targetValue, initialVelocity) {
    var requiresArcSpline = {_v: !($this.hbu_1 == null)};
    if (!!($this.bbu_1 == null)) {
      $this.bbu_1 = newInstance(initialValue);
      $this.cbu_1 = newInstance(initialVelocity);
      var tmp = $this;
      var tmp_0 = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var tmp_1 = $this.tbt_1.vv_1;
      var tmp_2 = new Float32Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        tmp_2[tmp_3] = $this.tbt_1.u(tmp_3) / (new Long(1000, 0)).v3();
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp.abu_1 = tmp_2;
      var tmp_4 = $this;
      var tmp_5 = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var tmp_6 = $this.tbt_1.vv_1;
      var tmp_7 = new Int32Array(tmp_6);
      while (tmp_5 < tmp_6) {
        var tmp_8 = tmp_5;
        var tmp0_safe_receiver = $this.ubt_1.u($this.tbt_1.u(tmp_8));
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kbu_1;
        var tmp_9;
        var tmp_10 = tmp1_elvis_lhs;
        if ((tmp_10 == null ? null : new ArcMode(tmp_10)) == null) {
          tmp_9 = $this.ybt_1;
        } else {
          tmp_9 = tmp1_elvis_lhs;
        }
        var mode = tmp_9;
        if (!(mode === Companion_getInstance_11().eb8_1)) {
          requiresArcSpline._v = true;
        }
        tmp_7[tmp_8] = _ArcMode___get_value__impl__j60x0o(mode);
        tmp_5 = tmp_5 + 1 | 0;
      }
      tmp_4.zbt_1 = tmp_7;
    }
    if (!requiresArcSpline._v) {
      return Unit_instance;
    }
    if (!!($this.hbu_1 == null) || !equals(_get_lastInitialValue__7jbc2w($this), initialValue) || !equals(_get_lastTargetValue__fdzwbr($this), targetValue)) {
      $this.dbu_1 = initialValue;
      $this.ebu_1 = targetValue;
      var dimensionCount = (initialValue.yb2() % 2 | 0) + initialValue.yb2() | 0;
      $this.fbu_1 = new Float32Array(dimensionCount);
      $this.gbu_1 = new Float32Array(dimensionCount);
      var tmp_11 = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var tmp_12 = $this.tbt_1.vv_1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_13 = fillArrayVal(Array(tmp_12), null);
      while (tmp_11 < tmp_12) {
        var tmp_14 = tmp_11;
        var timestamp = $this.tbt_1.u(tmp_14);
        var tmp_15;
        if (timestamp === 0) {
          var tmp_16;
          // Inline function 'androidx.collection.IntObjectMap.contains' call
          if (!$this.ubt_1.sv(timestamp)) {
            var tmp_17 = 0;
            var tmp_18 = new Float32Array(dimensionCount);
            var tmp0 = AnimationVector$get$ref(initialValue);
            while (tmp_17 < dimensionCount) {
              var tmp_19 = tmp_17;
              tmp_18[tmp_19] = tmp0(tmp_19);
              tmp_17 = tmp_17 + 1 | 0;
            }
            tmp_16 = tmp_18;
          } else {
            var tmp_20 = 0;
            var tmp_21 = new Float32Array(dimensionCount);
            var tmp0_0 = AnimationVector$get$ref_0(ensureNotNull($this.ubt_1.u(timestamp)).ibu_1);
            while (tmp_20 < dimensionCount) {
              var tmp_22 = tmp_20;
              tmp_21[tmp_22] = tmp0_0(tmp_22);
              tmp_20 = tmp_20 + 1 | 0;
            }
            tmp_16 = tmp_21;
          }
          tmp_15 = tmp_16;
        } else if (timestamp === $this.vbt_1) {
          var tmp_23;
          // Inline function 'androidx.collection.IntObjectMap.contains' call
          if (!$this.ubt_1.sv(timestamp)) {
            var tmp_24 = 0;
            var tmp_25 = new Float32Array(dimensionCount);
            var tmp0_1 = AnimationVector$get$ref_1(targetValue);
            while (tmp_24 < dimensionCount) {
              var tmp_26 = tmp_24;
              tmp_25[tmp_26] = tmp0_1(tmp_26);
              tmp_24 = tmp_24 + 1 | 0;
            }
            tmp_23 = tmp_25;
          } else {
            var tmp_27 = 0;
            var tmp_28 = new Float32Array(dimensionCount);
            var tmp0_2 = AnimationVector$get$ref_2(ensureNotNull($this.ubt_1.u(timestamp)).ibu_1);
            while (tmp_27 < dimensionCount) {
              var tmp_29 = tmp_27;
              tmp_28[tmp_29] = tmp0_2(tmp_29);
              tmp_27 = tmp_27 + 1 | 0;
            }
            tmp_23 = tmp_28;
          }
          tmp_15 = tmp_23;
        } else {
          var tmp_30 = 0;
          var tmp_31 = new Float32Array(dimensionCount);
          var tmp0_3 = AnimationVector$get$ref_3(ensureNotNull($this.ubt_1.u(timestamp)).ibu_1);
          while (tmp_30 < dimensionCount) {
            var tmp_32 = tmp_30;
            tmp_31[tmp_32] = tmp0_3(tmp_32);
            tmp_30 = tmp_30 + 1 | 0;
          }
          tmp_15 = tmp_31;
        }
        tmp_13[tmp_14] = tmp_15;
        tmp_11 = tmp_11 + 1 | 0;
      }
      var values = tmp_13;
      $this.hbu_1 = new ArcSpline(_get_modes__e5yfrz($this), _get_times__axs3p1($this), values);
    }
  }
  function getEasedTime($this, timeMillis) {
    var index = findEntryForTimeMillis($this, timeMillis);
    return getEasedTimeFromIndex($this, index, timeMillis, false);
  }
  function getEasedTimeFromIndex($this, index, timeMillis, asFraction) {
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (index >= ($this.tbt_1.vv_1 - 1 | 0)) {
      return timeMillis / (new Long(1000, 0)).v3();
    }
    var timeMin = $this.tbt_1.u(index);
    var timeMax = $this.tbt_1.u(index + 1 | 0);
    if (timeMillis === timeMin) {
      return timeMin / (new Long(1000, 0)).v3();
    }
    var timeRange = timeMax - timeMin | 0;
    var tmp0_safe_receiver = $this.ubt_1.u(timeMin);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jbu_1;
    var easing = tmp1_elvis_lhs == null ? $this.xbt_1 : tmp1_elvis_lhs;
    var rawFraction = (timeMillis - timeMin | 0) / timeRange;
    var easedFraction = easing.nbb(rawFraction);
    if (asFraction) {
      return easedFraction;
    }
    return (timeRange * easedFraction + timeMin) / (new Long(1000, 0)).v3();
  }
  function findEntryForTimeMillis($this, timeMillis) {
    var index = binarySearch($this.tbt_1, timeMillis);
    return index < -1 ? -(index + 2 | 0) | 0 : index;
  }
  function AnimationVector$get$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.zb2(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.zb2(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.zb2(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_2($boundThis) {
    var l = function (p0) {
      return $boundThis.zb2(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function AnimationVector$get$ref_3($boundThis) {
    var l = function (p0) {
      return $boundThis.zb2(p0);
    };
    l.callableName = 'get';
    return l;
  }
  function VectorizedKeyframesSpec(timestamps, keyframes, durationMillis, delayMillis, defaultEasing, initialArcMode) {
    this.tbt_1 = timestamps;
    this.ubt_1 = keyframes;
    this.vbt_1 = durationMillis;
    this.wbt_1 = delayMillis;
    this.xbt_1 = defaultEasing;
    this.ybt_1 = initialArcMode;
  }
  protoOf(VectorizedKeyframesSpec).rbt = function () {
    return this.vbt_1;
  };
  protoOf(VectorizedKeyframesSpec).qbt = function () {
    return this.wbt_1;
  };
  protoOf(VectorizedKeyframesSpec).tb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.i3(new Long(1000000, 0));
    var clampedPlayTime = clampPlayTime(this, playTimeMillis).m1();
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    if (this.ubt_1.sv(clampedPlayTime)) {
      return ensureNotNull(this.ubt_1.u(clampedPlayTime)).ibu_1;
    }
    if (clampedPlayTime >= this.vbt_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0)
      return initialValue;
    init_0(this, initialValue, targetValue, initialVelocity);
    if (!(this.hbu_1 == null)) {
      var easedTime = getEasedTime(this, clampedPlayTime);
      _get_arcSpline__qq9nn2(this).xba(easedTime, _get_posArray__xrvax2(this));
      var inductionVariable = 0;
      var last = _get_posArray__xrvax2(this).length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _get_valueVector__r10idf_1(this).ab3(i, _get_posArray__xrvax2(this)[i]);
        }
         while (inductionVariable <= last);
      return _get_valueVector__r10idf_1(this);
    }
    var index = findEntryForTimeMillis(this, clampedPlayTime);
    var easedTime_0 = getEasedTimeFromIndex(this, index, clampedPlayTime, true);
    var timestampStart = this.tbt_1.u(index);
    var tmp;
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    if (this.ubt_1.sv(timestampStart)) {
      tmp = ensureNotNull(this.ubt_1.u(timestampStart)).ibu_1;
    } else {
      tmp = initialValue;
    }
    var startValue = tmp;
    var timestampEnd = this.tbt_1.u(index + 1 | 0);
    var tmp_0;
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    if (this.ubt_1.sv(timestampEnd)) {
      tmp_0 = ensureNotNull(this.ubt_1.u(timestampEnd)).ibu_1;
    } else {
      tmp_0 = targetValue;
    }
    var endValue = tmp_0;
    var inductionVariable_0 = 0;
    var last_0 = _get_valueVector__r10idf_1(this).yb2();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_valueVector__r10idf_1(this).ab3(i_0, lerp(startValue.zb2(i_0), endValue.zb2(i_0), easedTime_0));
      }
       while (inductionVariable_0 < last_0);
    return _get_valueVector__r10idf_1(this);
  };
  protoOf(VectorizedKeyframesSpec).yb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.i3(new Long(1000000, 0));
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.h1(new Long(0, 0)) < 0) {
      return initialVelocity;
    }
    init_0(this, initialValue, targetValue, initialVelocity);
    if (!(this.hbu_1 == null)) {
      var easedTime = getEasedTime(this, clampedPlayTime.m1());
      _get_arcSpline__qq9nn2(this).yba(easedTime, _get_slopeArray__uloc9v(this));
      var inductionVariable = 0;
      var last = _get_slopeArray__uloc9v(this).length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _get_velocityVector__dvxlkl_1(this).ab3(i, _get_slopeArray__uloc9v(this)[i]);
        }
         while (inductionVariable <= last);
      return _get_velocityVector__dvxlkl_1(this);
    }
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = clampedPlayTime.g3(toLong(1));
    var startNum = getValueFromMillis(this, tmp$ret$0, initialValue, targetValue, initialVelocity);
    var endNum = getValueFromMillis(this, clampedPlayTime, initialValue, targetValue, initialVelocity);
    var inductionVariable_0 = 0;
    var last_0 = startNum.yb2();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_velocityVector__dvxlkl_1(this).ab3(i_0, (startNum.zb2(i_0) - endNum.zb2(i_0)) * 1000.0);
      }
       while (inductionVariable_0 < last_0);
    return _get_velocityVector__dvxlkl_1(this);
  };
  function VectorizedKeyframeSpecElementInfo(vectorValue, easing, arcMode) {
    this.ibu_1 = vectorValue;
    this.jbu_1 = easing;
    this.kbu_1 = arcMode;
  }
  protoOf(VectorizedKeyframeSpecElementInfo).toString = function () {
    return 'VectorizedKeyframeSpecElementInfo(vectorValue=' + toString(this.ibu_1) + ', easing=' + toString(this.jbu_1) + ', arcMode=' + ArcMode__toString_impl_wsn638(this.kbu_1) + ')';
  };
  protoOf(VectorizedKeyframeSpecElementInfo).hashCode = function () {
    var result = hashCode(this.ibu_1);
    result = imul(result, 31) + hashCode(this.jbu_1) | 0;
    result = imul(result, 31) + ArcMode__hashCode_impl_ghaz31(this.kbu_1) | 0;
    return result;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VectorizedKeyframeSpecElementInfo))
      return false;
    var tmp0_other_with_cast = other instanceof VectorizedKeyframeSpecElementInfo ? other : THROW_CCE();
    if (!equals(this.ibu_1, tmp0_other_with_cast.ibu_1))
      return false;
    if (!equals(this.jbu_1, tmp0_other_with_cast.jbu_1))
      return false;
    if (!(this.kbu_1 === tmp0_other_with_cast.kbu_1))
      return false;
    return true;
  };
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.lbu_1 = durationMillis;
    this.mbu_1 = delayMillis;
    this.nbu_1 = easing;
    this.obu_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.lbu_1, this.mbu_1, this.nbu_1));
  }
  protoOf(VectorizedTweenSpec).rbt = function () {
    return this.lbu_1;
  };
  protoOf(VectorizedTweenSpec).qbt = function () {
    return this.mbu_1;
  };
  protoOf(VectorizedTweenSpec).tb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.obu_1.tb6(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).yb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.obu_1.yb6(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedSnapSpec(delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    this.pbu_1 = delayMillis;
  }
  protoOf(VectorizedSnapSpec).qbt = function () {
    return this.pbu_1;
  };
  protoOf(VectorizedSnapSpec).tb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (playTimeNanos.h1(numberToLong(this.pbu_1).h3(new Long(1000000, 0))) < 0) {
      return initialValue;
    } else {
      return targetValue;
    }
  };
  protoOf(VectorizedSnapSpec).yb6 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return initialVelocity;
  };
  protoOf(VectorizedSnapSpec).rbt = function () {
    return 0;
  };
  function clampPlayTime(_this__u8e3s4, playTime) {
    // Inline function 'kotlin.Long.minus' call
    var other = _this__u8e3s4.qbt();
    var tmp$ret$0 = playTime.g3(toLong(other));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong(_this__u8e3s4.rbt()));
  }
  function getValueFromMillis(_this__u8e3s4, playTimeMillis, start, end, startVelocity) {
    return _this__u8e3s4.tb6(playTimeMillis.h3(new Long(1000000, 0)), start, end, startVelocity);
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $visibilityThreshold.yb2());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.i1_1;
    var last = this_0.j1_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        var index = item;
        var tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.zb2(index));
        destination.e(tmp$ret$0);
      }
       while (!(item === last));
    tmp.qbu_1 = destination;
  }
  protoOf(createSpringAnimations$1).u = function (index) {
    return this.qbu_1.u(index);
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.rbu_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).u = function (index) {
    return this.rbu_1;
  };
  function get_rectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize_0(1, 1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter_0(IntCompanionObject_instance), 1.0), to(get_VectorConverter_1(Companion_getInstance_5()), 1.0), to(get_VectorConverter_2(Companion_getInstance_4()), 1.0), to(get_VectorConverter(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance()), 0.1), to(get_VectorConverter_7(Companion_getInstance_6()), 0.1)]);
    }
  }
  function binarySearch_0(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    rangeCheck(_this__u8e3s4.length, fromIndex, toIndex);
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      var cmp = compareTo(midVal, element);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function rangeCheck(size, fromIndex, toIndex) {
    if (fromIndex > toIndex)
      throw IllegalArgumentException_init_$Create$('fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    else if (fromIndex < 0)
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than zero.');
    else if (toIndex > size)
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is greater than size (' + size + ').');
  }
  function AtomicReference(value) {
    this.obf_1 = value;
  }
  protoOf(AtomicReference).dq = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.obf_1;
  };
  protoOf(AtomicReference).f1y = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.obf_1, expect)) {
        // Inline function 'androidx.compose.animation.core.AtomicReference.compareAndSet.<set-delegate>' call
        this.obf_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).ub6 = isFinishedFromNanos;
  protoOf(DecayAnimation).ub6 = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).mb6 = getEndVelocity;
  protoOf(FloatSpringSpec).zbb = vectorize;
  protoOf(FloatTweenSpec).xbb = getEndVelocity_0;
  protoOf(FloatTweenSpec).zbb = vectorize;
  protoOf(SegmentImpl).pbq = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).rb6 = get_isInfinite;
  protoOf(VectorizedInfiniteRepeatableSpec).mb6 = getEndVelocity;
  protoOf(VectorizedKeyframesSpec).wb6 = getDurationNanos;
  protoOf(VectorizedKeyframesSpec).rb6 = get_isInfinite;
  protoOf(VectorizedKeyframesSpec).mb6 = getEndVelocity;
  protoOf(VectorizedTweenSpec).wb6 = getDurationNanos;
  protoOf(VectorizedTweenSpec).rb6 = get_isInfinite;
  protoOf(VectorizedTweenSpec).mb6 = getEndVelocity;
  protoOf(VectorizedSnapSpec).wb6 = getDurationNanos;
  protoOf(VectorizedSnapSpec).rb6 = get_isInfinite;
  protoOf(VectorizedSnapSpec).mb6 = getEndVelocity;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  UNSET = 3.4028235E38;
  Spring_instance = new Spring();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_1;
  _.$_$.d = AnimationState_0;
  _.$_$.e = AnimationState;
  _.$_$.f = AnimationVector1D;
  _.$_$.g = AnimationVector2D;
  _.$_$.h = AnimationVector4D;
  _.$_$.i = CubicBezierEasing;
  _.$_$.j = get_FastOutLinearInEasing;
  _.$_$.k = get_FastOutSlowInEasing;
  _.$_$.l = get_LinearEasing;
  _.$_$.m = SeekableTransitionState;
  _.$_$.n = SnapSpec;
  _.$_$.o = SpringSpec;
  _.$_$.p = isTransitioningTo;
  _.$_$.q = Segment;
  _.$_$.r = TweenSpec;
  _.$_$.s = TwoWayConverter;
  _.$_$.t = get_VectorConverter_2;
  _.$_$.u = get_VectorConverter_6;
  _.$_$.v = get_VectorConverter_0;
  _.$_$.w = get_VectorConverter_1;
  _.$_$.x = get_VectorConverter;
  _.$_$.y = get_VisibilityThreshold_3;
  _.$_$.z = get_VisibilityThreshold_4;
  _.$_$.a1 = get_VisibilityThreshold_5;
  _.$_$.b1 = animateDpAsState;
  _.$_$.c1 = animateFloatAsState;
  _.$_$.d1 = animateFloat;
  _.$_$.e1 = animateValueAsState;
  _.$_$.f1 = animateValue;
  _.$_$.g1 = calculateTargetValue;
  _.$_$.h1 = copy;
  _.$_$.i1 = createChildTransitionInternal;
  _.$_$.j1 = createDeferredAnimation;
  _.$_$.k1 = createTransitionAnimation;
  _.$_$.l1 = generateDecayAnimationSpec;
  _.$_$.m1 = infiniteRepeatable;
  _.$_$.n1 = keyframes;
  _.$_$.o1 = rememberInfiniteTransition;
  _.$_$.p1 = rememberTransition;
  _.$_$.q1 = spring;
  _.$_$.r1 = tween;
  _.$_$.s1 = updateTransition;
  _.$_$.t1 = AnimationEndReason_Finished_getInstance;
  _.$_$.u1 = RepeatMode_Reverse_getInstance;
  _.$_$.v1 = animateDecay;
  _.$_$.w1 = animateTo;
  _.$_$.x1 = animate_0;
  _.$_$.y1 = Spring_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
