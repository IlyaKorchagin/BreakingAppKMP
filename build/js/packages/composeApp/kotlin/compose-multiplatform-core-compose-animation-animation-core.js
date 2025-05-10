(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var equals = kotlin_kotlin.$_$.qc;
  var VOID = kotlin_kotlin.$_$.i;
  var coerceIn = kotlin_kotlin.$_$.df;
  var Long = kotlin_kotlin.$_$.wi;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var protoOf = kotlin_kotlin.$_$.he;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var KMutableProperty1 = kotlin_kotlin.$_$.lf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var KProperty0 = kotlin_kotlin.$_$.mf;
  var THROW_ISE = kotlin_kotlin.$_$.fj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.vc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var isInterface = kotlin_kotlin.$_$.qd;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.g5;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var isNaN_0 = kotlin_kotlin.$_$.ck;
  var toString = kotlin_kotlin.$_$.le;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.qi;
  var hashCode = kotlin_kotlin.$_$.zc;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nk;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.y;
  var floatFromBits = kotlin_kotlin.$_$.tc;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var coerceIn_0 = kotlin_kotlin.$_$.ff;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.g7;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var captureStack = kotlin_kotlin.$_$.hc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var isFinite = kotlin_kotlin.$_$.zj;
  var isNaN_1 = kotlin_kotlin.$_$.dk;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.e5;
  var toRawBits = kotlin_kotlin.$_$.qk;
  var toLong = kotlin_kotlin.$_$.je;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.k7;
  var roundToLong = kotlin_kotlin.$_$.se;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var until = kotlin_kotlin.$_$.if;
  var fill = kotlin_kotlin.$_$.f8;
  var intercepted = kotlin_kotlin.$_$.lb;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var returnIfSuspended = kotlin_kotlin.$_$.n;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var Companion_instance = kotlin_kotlin.$_$.s5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o3;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.l;
  var lazy = kotlin_kotlin.$_$.ek;
  var numberToInt = kotlin_kotlin.$_$.de;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var roundToInt = kotlin_kotlin.$_$.re;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var coerceAtLeast = kotlin_kotlin.$_$.xe;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var to = kotlin_kotlin.$_$.sk;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q3;
  var mapOf = kotlin_kotlin.$_$.p9;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.h1;
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
    return playTimeNanos.b1(this.zai()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(DecayAnimation, 'DecayAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec);
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec');
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.caj(this.aaj(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec);
  initMetadataForClass(AnimationState, 'AnimationState');
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector_3, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector_3);
  initMetadataForClass(ComplexDouble, 'ComplexDouble');
  initMetadataForClass(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl');
  initMetadataForClass(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec');
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.lal(this.nal(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec');
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$0, CoroutineImpl);
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
  initMetadataForCompanion(Companion);
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
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState');
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.max()) && equals(targetState, this.f45());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForClass(DeferredAnimation, 'DeferredAnimation');
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForLambda(rememberTransition$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(_no_name_provided__qut3iv_1);
  initMetadataForClass(_no_name_provided__qut3iv_2);
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl');
  initMetadataForObject(Spring, 'Spring');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedFloatAnimationSpec$1);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.eb1() + this.db1() | 0).c3(new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
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
      updateState($this$animate, this$0.wad_1);
      var clamped = clampToBounds(this$0, $this$animate.w());
      var tmp;
      if (!equals(clamped, $this$animate.w())) {
        this$0.wad_1.wae(clamped);
        $endState.wae(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.xae();
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
    var this_0 = $this.xad_1;
    isRunning$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var this_0 = $this.yad_1;
    targetValue$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.wad_1.tae_1;
    return $this.bae_1.aaf(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.fae_1, $this.dae_1) && equals($this.gae_1, $this.eae_1)) {
      return value;
    }
    var valueVector = $this.tad_1.baf()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.daf(i) < $this.fae_1.daf(i) || valueVector.daf(i) > $this.gae_1.daf(i)) {
          clamped = true;
          valueVector.eaf(i, coerceIn(valueVector.daf(i), $this.fae_1.daf(i), $this.gae_1.daf(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.tad_1.faf()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.wad_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    this_0.sae_1.gaf();
    this_0.tae_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.paf_1 = this$0;
    this.qaf_1 = $initialVelocity;
    this.raf_1 = $animation;
    this.saf_1 = $startTime;
    this.taf_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).xaf = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Animatable$runAnimation$slambda).db = function ($completion) {
    return this.xaf($completion);
  };
  protoOf(Animatable$runAnimation$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            this.paf_1.wad_1.sae_1 = this.paf_1.tad_1.baf()(this.qaf_1);
            _set_targetValue__aqsk0r(this.paf_1, this.raf_1.yaf());
            _set_isRunning__kpbg34(this.paf_1, true);
            this.vaf_1 = copy_0(this.paf_1.wad_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.waf_1 = {_v: false};
            this.n9_1 = 1;
            suspendResult = animate(this.vaf_1, this.raf_1, this.saf_1, Animatable$runAnimation$slambda$lambda(this.paf_1, this.vaf_1, this.taf_1, this.waf_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.waf_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.paf_1);
            this.uaf_1 = new AnimationResult(this.vaf_1, endReason);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.q9_1;
              var tmp_1 = this;
              endAnimation(this.paf_1);
              throw e;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return this.uaf_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 3) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).j23 = function (completion) {
    return new Animatable$runAnimation$slambda(this.paf_1, this.qaf_1, this.raf_1, this.saf_1, this.taf_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.xaf($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.hag_1 = this$0;
    this.iag_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).i23 = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Animatable$snapTo$slambda).db = function ($completion) {
    return this.i23($completion);
  };
  protoOf(Animatable$snapTo$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          endAnimation(this.hag_1);
          var clampedValue = clampToBounds(this.hag_1, this.iag_1);
          this.hag_1.wad_1.wae(clampedValue);
          _set_targetValue__aqsk0r(this.hag_1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).j23 = function (completion) {
    return new Animatable$snapTo$slambda(this.hag_1, this.iag_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.rag_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).i23 = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Animatable$stop$slambda).db = function ($completion) {
    return this.i23($completion);
  };
  protoOf(Animatable$stop$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          endAnimation(this.rag_1);
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
  protoOf(Animatable$stop$slambda).j23 = function (completion) {
    return new Animatable$stop$slambda(this.rag_1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.tad_1 = typeConverter;
    this.uad_1 = visibilityThreshold;
    this.vad_1 = label;
    this.wad_1 = new AnimationState(this.tad_1, initialValue);
    this.xad_1 = mutableStateOf(false);
    this.yad_1 = mutableStateOf(initialValue);
    this.zad_1 = null;
    this.aae_1 = null;
    this.bae_1 = new MutatorMutex();
    this.cae_1 = new SpringSpec(VOID, VOID, this.uad_1);
    var tmp = this;
    var tmp0_subject = this.sag();
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
    tmp.dae_1 = tmp_1 instanceof AnimationVector_3 ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.sag();
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
    tmp_2.eae_1 = tmp_4 instanceof AnimationVector_3 ? tmp_4 : THROW_CCE();
    this.fae_1 = this.dae_1;
    this.gae_1 = this.eae_1;
  }
  protoOf(Animatable).w = function () {
    return this.wad_1.w();
  };
  protoOf(Animatable).sag = function () {
    return this.wad_1.sae_1;
  };
  protoOf(Animatable).tag = function () {
    return this.tad_1.faf()(this.sag());
  };
  protoOf(Animatable).uag = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.xad_1;
    isRunning$factory_0();
    return this_0.w();
  };
  protoOf(Animatable).yaf = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.yad_1;
    targetValue$factory_0();
    return this_0.w();
  };
  protoOf(Animatable).vag = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.w();
    var tmp1_typeConverter = this.tad_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).wag = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.cae_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.tag() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.vag(targetValue, animationSpec, initialVelocity, block, $completion) : $super.vag.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).xag = function (targetValue, $completion) {
    return this.bae_1.aaf(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).yag = function ($completion) {
    return this.bae_1.aaf(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).zag = function () {
    return this.wad_1;
  };
  function AnimationResult(endState, endReason) {
    this.aah_1 = endState;
    this.bah_1 = endReason;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.bah_1.toString() + ', endState=' + this.aah_1.toString() + ')';
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
      return receiver.uag();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.uag();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.yaf();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.yaf();
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
  var defaultAnimation;
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
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
      var it = $composer_0.y2w();
      var tmp;
      if (false || it === Companion_getInstance().n2o_1) {
        // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
        var value = spring();
        $composer_0.j2x(value);
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
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.j2x(value_0);
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
    var it_1 = $composer_0.y2w();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.j2x(value_1);
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
      tmp_6 = !equals($this$run.eah_1, visibilityThreshold_0);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring($this$run.cah_1, $this$run.dah_1, visibilityThreshold_0);
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
    var it_2 = $composer_0.y2w();
    var tmp_8;
    if (false || it_2 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_2 = Channel(-1);
      $composer_0.j2x(value_2);
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
    var invalid = !!($composer_0.h2w(channel) | (($changed & 14 ^ 6) > 4 && $composer_0.h2w(targetValue) || ($changed & 6) === 4));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.y2w();
    var tmp_10;
    if (invalid || it_3 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_3 = animateValueAsState$lambda_1(channel, targetValue);
      $composer_0.j2x(value_3);
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
    var invalid_0 = !!(!!(!!($composer_0.h2w(channel) | $composer_0.h2w(animatable)) | $composer_0.h2l(animSpec$delegate)) | $composer_0.h2l(listener$delegate));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.y2w();
    var tmp_12;
    if (invalid_0 || it_4 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_4 = animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null);
      $composer_0.j2x(value_4);
      tmp_12 = value_4;
    } else {
      tmp_12 = it_4;
    }
    var tmp_13 = tmp_12;
    var tmp6_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(channel, tmp6_group, $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.w();
    var tmp1 = tmp0_elvis_lhs == null ? animatable.zag() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $listener$delegate.w();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animSpec$delegate.w();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.l1n($targetValue);
      return Unit_instance;
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.nah_1 = $newTarget;
    this.oah_1 = $animatable;
    this.pah_1 = $animSpec$delegate;
    this.qah_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(animateValueAsState$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (!equals(this.nah_1, this.oah_1.yaf())) {
              this.n9_1 = 1;
              suspendResult = this.oah_1.wag(this.nah_1, animateValueAsState$lambda_0(this.pah_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.qah_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.oah_1.w());
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda$slambda).f1x = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.nah_1, this.oah_1, this.pah_1, this.qah_1, completion);
    i.rah_1 = $this$launch;
    return i;
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.aai_1 = $channel;
    this.bai_1 = $animatable;
    this.cai_1 = $animSpec$delegate;
    this.dai_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(animateValueAsState$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.fai_1 = this.aai_1.g();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = this.fai_1.e1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.n9_1 = 3;
              continue $sm;
            }

            var target = this.fai_1.i();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.aai_1.p1n());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.eai_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.bai_1, this.cai_1, this.dai_1, null));
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
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
  protoOf(animateValueAsState$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.aai_1, this.bai_1, this.cai_1, this.dai_1, completion);
    i.eai_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance_0())));
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
    TargetBasedAnimation.call($this, animationSpec.gai(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this.pai_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.hai_1.qai($this.lai_1, $this.mai_1, $this.nai_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.<get-endVelocity>.<anonymous>' call
      $this.pai_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.hai_1 = animationSpec;
    this.iai_1 = typeConverter;
    this.jai_1 = targetValue;
    this.kai_1 = initialValue;
    this.lai_1 = this.iai_1.baf()(initialValue);
    this.mai_1 = this.iai_1.baf()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.nai_1 = tmp1_elvis_lhs == null ? newInstance(this.iai_1.baf()(initialValue)) : tmp1_elvis_lhs;
    this.oai_1 = new Long(-1, -1);
    this.pai_1 = null;
  }
  protoOf(TargetBasedAnimation).rai = function () {
    return this.iai_1;
  };
  protoOf(TargetBasedAnimation).sai = function (value) {
    if (!equals(this.jai_1, value)) {
      this.jai_1 = value;
      this.mai_1 = this.iai_1.baf()(value);
      this.pai_1 = null;
      this.oai_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).tai = function (value) {
    if (!equals(value, this.kai_1)) {
      this.kai_1 = value;
      this.lai_1 = this.iai_1.baf()(value);
      this.pai_1 = null;
      this.oai_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).uai = function () {
    return this.kai_1;
  };
  protoOf(TargetBasedAnimation).yaf = function () {
    return this.jai_1;
  };
  protoOf(TargetBasedAnimation).vai = function () {
    return this.hai_1.vai();
  };
  protoOf(TargetBasedAnimation).wai = function (playTimeNanos) {
    var tmp;
    if (!this.yai(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var it = this.hai_1.xai(playTimeNanos, this.lai_1, this.mai_1, this.nai_1);
      var inductionVariable = 0;
      var last = it.caf();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(it.daf(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$0);
          }
        }
         while (inductionVariable < last);
      tmp = this.iai_1.faf()(it);
    } else {
      tmp = this.yaf();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).zai = function () {
    if (this.oai_1.b1(new Long(0, 0)) < 0) {
      this.oai_1 = this.hai_1.aaj(this.lai_1, this.mai_1, this.nai_1);
    }
    return this.oai_1;
  };
  protoOf(TargetBasedAnimation).baj = function (playTimeNanos) {
    var tmp;
    if (!this.yai(playTimeNanos)) {
      tmp = this.hai_1.caj(playTimeNanos, this.lai_1, this.mai_1, this.nai_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.uai()) + ' -> ' + toString_0(this.yaf()) + ',' + ('initial velocity: ' + toString(this.nai_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.hai_1));
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.zai().d3(new Long(1000000, 0));
  }
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.baf()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.gai(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.daj_1 = animationSpec;
    this.eaj_1 = typeConverter;
    this.faj_1 = initialValue;
    this.gaj_1 = this.eaj_1.baf()(this.faj_1);
    this.haj_1 = copy_1(initialVelocityVector);
    this.jaj_1 = this.eaj_1.faf()(this.daj_1.maj(this.gaj_1, initialVelocityVector));
    this.laj_1 = false;
    this.kaj_1 = this.daj_1.naj(this.gaj_1, initialVelocityVector);
    this.iaj_1 = copy_1(this.daj_1.oaj(this.kaj_1, this.gaj_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.iaj_1.caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.iaj_1.eaf(i, coerceIn(this.iaj_1.daf(i), -this.daj_1.paj(), this.daj_1.paj()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).rai = function () {
    return this.eaj_1;
  };
  protoOf(DecayAnimation).yaf = function () {
    return this.jaj_1;
  };
  protoOf(DecayAnimation).zai = function () {
    return this.kaj_1;
  };
  protoOf(DecayAnimation).vai = function () {
    return this.laj_1;
  };
  protoOf(DecayAnimation).wai = function (playTimeNanos) {
    if (!this.yai(playTimeNanos)) {
      return this.eaj_1.faf()(this.daj_1.qaj(playTimeNanos, this.gaj_1, this.haj_1));
    } else {
      return this.jaj_1;
    }
  };
  protoOf(DecayAnimation).baj = function (playTimeNanos) {
    if (!this.yai(playTimeNanos)) {
      return this.daj_1.oaj(playTimeNanos, this.gaj_1, this.haj_1);
    } else {
      return this.iaj_1;
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
    this.cah_1 = dampingRatio;
    this.dah_1 = stiffness;
    this.eah_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).gai = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.cah_1, this.dah_1, convert(converter, this.eah_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.cah_1 === this.cah_1 && other.dah_1 === this.dah_1 && equals(other.eah_1, this.eah_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.eah_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.cah_1) | 0, 31) + getNumberHashCode(this.dah_1) | 0;
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
      return _this__u8e3s4.baf()(data);
    }
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.raj_1 = animationSpec;
    this.saj_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).gai = function (converter) {
    var vecSpec = this.raj_1.gai(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.saj_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.raj_1)) + this.saj_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return other.saj_1.equals(this.saj_1) && equals(other.raj_1, this.raj_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.taj_1 = vectorizedAnimationSpec;
    this.uaj_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).vai = function () {
    return this.taj_1.vai();
  };
  protoOf(StartDelayVectorizedAnimationSpec).aaj = function (initialValue, targetValue, initialVelocity) {
    return this.taj_1.aaj(initialValue, targetValue, initialVelocity).a3(this.uaj_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).caj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.b1(this.uaj_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.taj_1.caj(playTimeNanos.b3(this.uaj_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).xai = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.b1(this.uaj_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.taj_1.xai(playTimeNanos.b3(this.uaj_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.taj_1)) + this.uaj_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return other.uaj_1.equals(this.uaj_1) && equals(other.taj_1, this.taj_1);
  };
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.vaj_1 = durationMillis;
    this.waj_1 = delay;
    this.xaj_1 = easing;
  }
  protoOf(TweenSpec).gai = function (converter) {
    return new VectorizedTweenSpec(this.vaj_1, this.waj_1, this.xaj_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.vaj_1 === this.vaj_1 && other.waj_1 === this.waj_1 && equals(other.xaj_1, this.xaj_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.vaj_1, 31) + hashCode(this.xaj_1) | 0, 31) + this.waj_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.baf()(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.createZeroVectorFrom.<anonymous>' call
    this_0.gaf();
    return this_0;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.qae_1 = typeConverter;
    this.rae_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.sae_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.qae_1, initialValue) : tmp1_elvis_lhs;
    this.tae_1 = lastFrameTimeNanos;
    this.uae_1 = finishedTimeNanos;
    this.vae_1 = isRunning;
  }
  protoOf(AnimationState).wae = function (_set____db54di) {
    var this_0 = this.rae_1;
    value$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).w = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.rae_1;
    value$factory_0();
    return this_0.w();
  };
  protoOf(AnimationState).tag = function () {
    return this.qae_1.faf()(this.sae_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.w()) + ', ') + ('velocity=' + toString_0(this.tag()) + ', ') + ('isRunning=' + this.vae_1 + ', ') + ('lastFrameTimeNanos=' + this.tae_1.toString() + ', ') + ('finishedTimeNanos=' + this.uae_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter(FloatCompanionObject_instance), initialValue, AnimationVector(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.w() : value;
    velocity = velocity === VOID ? _this__u8e3s4.sae_1.yaj_1 : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.tae_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.uae_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.vae_1 : isRunning;
    return new AnimationState(_this__u8e3s4.qae_1, value, AnimationVector(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.hae_1 = typeConverter;
    this.iae_1 = targetValue;
    this.jae_1 = startTimeNanos;
    this.kae_1 = onCancel;
    this.lae_1 = mutableStateOf(initialValue);
    this.mae_1 = copy_1(initialVelocityVector);
    this.nae_1 = lastFrameTimeNanos;
    this.oae_1 = new Long(0, -2147483648);
    this.pae_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).wae = function (_set____db54di) {
    var this_0 = this.lae_1;
    value$factory_1();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).w = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.lae_1;
    value$factory_2();
    return this_0.w();
  };
  protoOf(AnimationScope).aak = function (_set____db54di) {
    var this_0 = this.pae_1;
    isRunning$factory_1();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).uag = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.pae_1;
    isRunning$factory_2();
    return this_0.w();
  };
  protoOf(AnimationScope).tag = function () {
    return this.hae_1.faf()(this.mae_1);
  };
  protoOf(AnimationScope).xae = function () {
    this.aak(false);
    this.kae_1();
  };
  function copy_0(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.w() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.sae_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.tae_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.uae_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.vae_1 : isRunning;
    return new AnimationState(_this__u8e3s4.qae_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState_1(typeConverter, initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(typeConverter, initialValue, typeConverter.baf()(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w();
    }, function (receiver, value) {
      return receiver.wae(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w();
    }, function (receiver, value) {
      return receiver.wae(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w();
    }, function (receiver, value) {
      return receiver.wae(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w();
    }, function (receiver, value) {
      return receiver.wae(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.uag();
    }, function (receiver, value) {
      return receiver.aak(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.uag();
    }, function (receiver, value) {
      return receiver.aak(value);
    });
  }
  function AnimationVector1D(initVal) {
    AnimationVector_3.call(this);
    this.yaj_1 = initVal;
    this.zaj_1 = 1;
  }
  protoOf(AnimationVector1D).gaf = function () {
    this.yaj_1 = 0.0;
  };
  protoOf(AnimationVector1D).bak = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).daf = function (index) {
    if (index === 0) {
      return this.yaj_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).eaf = function (index, value) {
    if (index === 0) {
      this.yaj_1 = value;
    }
  };
  protoOf(AnimationVector1D).caf = function () {
    return this.zaj_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.yaj_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.yaj_1 === this.yaj_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.yaj_1);
  };
  function AnimationVector(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector_3.call(this);
    this.cak_1 = v1;
    this.dak_1 = v2;
    this.eak_1 = 2;
  }
  protoOf(AnimationVector2D).gaf = function () {
    this.cak_1 = 0.0;
    this.dak_1 = 0.0;
  };
  protoOf(AnimationVector2D).bak = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).daf = function (index) {
    switch (index) {
      case 0:
        return this.cak_1;
      case 1:
        return this.dak_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).eaf = function (index, value) {
    if (index === 0)
      this.cak_1 = value;
    else if (index === 1)
      this.dak_1 = value;
  };
  protoOf(AnimationVector2D).caf = function () {
    return this.eak_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.cak_1 + ', v2 = ' + this.dak_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.cak_1 === this.cak_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.dak_1 === this.dak_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.cak_1), 31) + getNumberHashCode(this.dak_1) | 0;
  };
  function AnimationVector_0(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector_3.call(this);
    this.fak_1 = v1;
    this.gak_1 = v2;
    this.hak_1 = v3;
    this.iak_1 = 3;
  }
  protoOf(AnimationVector3D).gaf = function () {
    this.fak_1 = 0.0;
    this.gak_1 = 0.0;
    this.hak_1 = 0.0;
  };
  protoOf(AnimationVector3D).bak = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).daf = function (index) {
    switch (index) {
      case 0:
        return this.fak_1;
      case 1:
        return this.gak_1;
      case 2:
        return this.hak_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).eaf = function (index, value) {
    switch (index) {
      case 0:
        this.fak_1 = value;
        break;
      case 1:
        this.gak_1 = value;
        break;
      case 2:
        this.hak_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).caf = function () {
    return this.iak_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.fak_1 + ', v2 = ' + this.gak_1 + ', v3 = ' + this.hak_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.fak_1 === this.fak_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.gak_1 === this.gak_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.hak_1 === this.hak_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.fak_1), 31) + getNumberHashCode(this.gak_1) | 0, 31) + getNumberHashCode(this.hak_1) | 0;
  };
  function AnimationVector_1(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector_3.call(this);
    this.jak_1 = v1;
    this.kak_1 = v2;
    this.lak_1 = v3;
    this.mak_1 = v4;
    this.nak_1 = 4;
  }
  protoOf(AnimationVector4D).gaf = function () {
    this.jak_1 = 0.0;
    this.kak_1 = 0.0;
    this.lak_1 = 0.0;
    this.mak_1 = 0.0;
  };
  protoOf(AnimationVector4D).bak = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).daf = function (index) {
    switch (index) {
      case 0:
        return this.jak_1;
      case 1:
        return this.kak_1;
      case 2:
        return this.lak_1;
      case 3:
        return this.mak_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).eaf = function (index, value) {
    switch (index) {
      case 0:
        this.jak_1 = value;
        break;
      case 1:
        this.kak_1 = value;
        break;
      case 2:
        this.lak_1 = value;
        break;
      case 3:
        this.mak_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).caf = function () {
    return this.nak_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.jak_1 + ', v2 = ' + this.kak_1 + ', v3 = ' + this.lak_1 + ', v4 = ' + this.mak_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.jak_1 === this.jak_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.kak_1 === this.kak_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.lak_1 === this.lak_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.mak_1 === this.mak_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.jak_1), 31) + getNumberHashCode(this.kak_1) | 0, 31) + getNumberHashCode(this.lak_1) | 0, 31) + getNumberHashCode(this.mak_1) | 0;
  };
  function AnimationVector_2(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function AnimationVector_3() {
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.bak();
    return tmp instanceof AnimationVector_3 ? tmp : THROW_CCE();
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.eaf(i, _this__u8e3s4.daf(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.eaf(i, source.daf(i));
      }
       while (inductionVariable < last);
  }
  function ComplexDouble(_real, _imaginary) {
    this.oak_1 = _real;
    this.pak_1 = _imaginary;
  }
  protoOf(ComplexDouble).qak = function () {
    return this.oak_1;
  };
  protoOf(ComplexDouble).rak = function () {
    return this.pak_1;
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this.oak_1 + ', _imaginary=' + this.pak_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this.oak_1);
    result = imul(result, 31) + getNumberHashCode(this.pak_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.oak_1, tmp0_other_with_cast.oak_1))
      return false;
    if (!equals(this.pak_1, tmp0_other_with_cast.pak_1))
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
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.sak_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).gai = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.sak_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.uak_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.vak_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.wak_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.tak_1 = floatDecaySpec;
    this.xak_1 = this.tak_1.paj();
  }
  protoOf(VectorizedFloatDecaySpec).paj = function () {
    return this.xak_1;
  };
  protoOf(VectorizedFloatDecaySpec).qaj = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.uak_1 == null)) {
      this.uak_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).eaf(i, this.tak_1.yak(playTimeNanos, initialValue.daf(i), initialVelocity.daf(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).naj = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.vak_1 == null)) {
      this.vak_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxDuration;
        var b = this.tak_1.zak(initialValue.daf(i), initialVelocity.daf(i));
        maxDuration = a.b1(b) >= 0 ? a : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).oaj = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.vak_1 == null)) {
      this.vak_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).eaf(i, this.tak_1.aal(playTimeNanos, initialValue.daf(i), initialVelocity.daf(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).maj = function (initialValue, initialVelocity) {
    if (!!(this.wak_1 == null)) {
      this.wak_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).eaf(i, this.tak_1.bal(initialValue.daf(i), initialVelocity.daf(i)));
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
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.dal_1 + ', ' + $this.eal_1 + ', ' + $this.fal_1 + ', ' + $this.gal_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.dal_1 = a;
    this.eal_1 = b;
    this.fal_1 = c;
    this.gal_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!isNaN_0(this.dal_1) && !isNaN_0(this.eal_1) && !isNaN_0(this.fal_1) && !isNaN_0(this.gal_1))) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.dal_1 + ', ' + this.eal_1 + ', ' + this.fal_1 + ', ' + this.gal_1 + '.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.eal_1, this.gal_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).k3(32).g1();
    tmp.hal_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).m3(new Long(-1, 0)).g1();
    tmp_0.ial_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).cal = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      var t = findFirstCubicRoot(0.0 - fraction, this.dal_1 - fraction, this.fal_1 - fraction, 1.0 - fraction);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var this_0 = evaluateCubic(this.eal_1, this.gal_1, t);
      var minimumValue = this.hal_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_1 = this_0 < minimumValue ? minimumValue : this_0;
      var maximumValue = this.ial_1;
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
      tmp_2 = this.dal_1 === other.dal_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.eal_1 === other.eal_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.fal_1 === other.fal_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.gal_1 === other.gal_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.dal_1), 31) + getNumberHashCode(this.eal_1) | 0, 31) + getNumberHashCode(this.fal_1) | 0, 31) + getNumberHashCode(this.gal_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.dal_1 + ', b=' + this.eal_1 + ', c=' + this.fal_1 + ', d=' + this.gal_1 + ')';
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.jal_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).cal = function (fraction) {
    return this.jal_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).s3 = function () {
    return this.jal_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.s3());
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
    this.pal_1 = dampingRatio;
    this.qal_1 = stiffness;
    this.ral_1 = visibilityThreshold;
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    this_0.aam(this.pal_1);
    this_0.bam(this.qal_1);
    tmp_2.sal_1 = this_0;
  }
  protoOf(FloatSpringSpec).kal = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.d3(new Long(1000000, 0));
    this.sal_1.tal_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.sal_1.cam(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).lal = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.d3(new Long(1000000, 0));
    this.sal_1.tal_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.sal_1.cam(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).mal = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).nal = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.sal_1.dam();
    var tmp1_dampingRatio = this.sal_1.zal_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.ral_1;
    var tmp3_initialVelocity = initialVelocity / this.ral_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).c3(new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).gai = function (converter) {
    return this.oal(converter);
  };
  function clampPlayTimeNanos($this, playTimeNanos) {
    return coerceIn_0(playTimeNanos.b3($this.iam_1), new Long(0, 0), $this.ham_1);
  }
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.eam_1 = duration;
    this.fam_1 = delay;
    this.gam_1 = easing;
    this.ham_1 = numberToLong(this.eam_1).c3(new Long(1000000, 0));
    this.iam_1 = numberToLong(this.fam_1).c3(new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).kal = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    var tmp;
    if (this.eam_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = this.ham_1.q3();
      tmp = clampedPlayTimeNanos.q3() / other;
    }
    var rawFraction = tmp;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = rawFraction < 0.0 ? 0.0 : rawFraction;
    var tmp$ret$3 = this_0 > 1.0 ? 1.0 : this_0;
    var fraction = this.gam_1.cal(tmp$ret$3);
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).nal = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.fam_1 + this.eam_1 | 0).c3(new Long(1000000, 0));
  };
  protoOf(FloatTweenSpec).lal = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    if (clampedPlayTimeNanos.b1(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTimeNanos.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.kal(clampedPlayTimeNanos.b3(new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.kal(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).gai = function (converter) {
    return this.oal(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.can_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).db = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = withFrameNanos(this.can_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).j23 = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.can_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.db($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ram_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.sam_1 = this.t9().aa(Key_instance);
            if (this.sam_1 == null) {
              this.n9_1 = 2;
              suspendResult = withFrameNanos(this.ram_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = this.sam_1.dan(withInfiniteAnimationFrameNanos$slambda_0(this.ram_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.tam_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.tam_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.tam_1;
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
  function Mutator(priority, job) {
    this.ean_1 = priority;
    this.fan_1 = job;
  }
  protoOf(Mutator).gan = function (other) {
    return this.ean_1.v2(other.ean_1) >= 0;
  };
  protoOf(Mutator).han = function () {
    return this.fan_1.l15(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.yae_1.zp();
      if (oldMutator == null || mutator.gan(oldMutator)) {
        if ($this.yae_1.s1v(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.han();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.ran_1 = $priority;
    this.san_1 = this$0;
    this.tan_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).aao = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(MutatorMutex$mutate$slambda).ha = function (p1, $completion) {
    return this.aao((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            this.van_1 = new Mutator(this.ran_1, ensureNotNull(this.uan_1.b14().aa(Key_instance_0)));
            tryMutateOrCancel(this.san_1, this.van_1);
            var tmp_0 = this;
            tmp_0.wan_1 = this.san_1.zae_1;
            var tmp_1 = this;
            tmp_1.xan_1 = null;
            this.n9_1 = 1;
            suspendResult = this.wan_1.x2c(this.xan_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.yan_1 = Unit_instance;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.o9_1 = 8;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 7;
            this.n9_1 = 4;
            suspendResult = this.tan_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.zan_1 = suspendResult;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            var tmp_2 = this.zan_1;
            this.o9_1 = 8;
            this.san_1.yae_1.s1v(this.van_1, null);
            this.yan_1 = tmp_2;
            this.o9_1 = 9;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this.yan_1;
            this.o9_1 = 9;
            this.wan_1.z2c(this.xan_1);
            return tmp_3;
          case 7:
            this.o9_1 = 8;
            var t = this.q9_1;
            this.san_1.yae_1.s1v(this.van_1, null);
            throw t;
          case 8:
            this.o9_1 = 9;
            var t_0 = this.q9_1;
            this.wan_1.z2c(this.xan_1);
            throw t_0;
          case 9:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 9) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.ran_1, this.san_1, this.tan_1, completion);
    i.uan_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.aao($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.yae_1 = new AtomicReference(null);
    this.zae_1 = Mutex();
  }
  protoOf(MutatorMutex).bao = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).aaf = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.bao(priority, block, $completion) : $super.bao.call(this, priority, block, $completion);
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
    this_1.oak_1 = this_1.oak_1 + this_0;
    this_1.oak_1 = this_1.oak_1 * 0.5;
    this_1.pak_1 = this_1.pak_1 * 0.5;
    var firstRoot = this_1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.minus' call
    var this_2 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var this_3 = complexSqrt(partialRoot);
    this_3.oak_1 = this_3.oak_1 * -1;
    this_3.pak_1 = this_3.pak_1 * -1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    this_3.oak_1 = this_3.oak_1 + this_2;
    this_3.oak_1 = this_3.oak_1 * 0.5;
    this_3.pak_1 = this_3.pak_1 * 0.5;
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
    var r1 = firstRoot.qak();
    var r2 = secondRoot.qak();
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
    var r = firstRoot.qak();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.rak();
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.qak();
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
    if ($this.val_1) {
      return Unit_instance;
    }
    if ($this.tal_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.zal_1 * $this.zal_1;
    if ($this.zal_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.zal_1 * $this.ual_1;
      var tmp_1 = $this.ual_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      tmp.wal_1 = tmp_0 + tmp_1 * Math.sqrt(x);
      var tmp_2 = $this;
      var tmp_3 = -$this.zal_1 * $this.ual_1;
      var tmp_4 = $this.ual_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = dampingRatioSquared - 1;
      tmp_2.xal_1 = tmp_3 - tmp_4 * Math.sqrt(x_0);
    } else if ($this.zal_1 >= 0 && $this.zal_1 < 1) {
      var tmp_5 = $this;
      var tmp_6 = $this.ual_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = 1 - dampingRatioSquared;
      tmp_5.yal_1 = tmp_6 * Math.sqrt(x_1);
    }
    $this.val_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.tal_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.ual_1 = Math.sqrt(50.0);
    this.val_1 = false;
    this.wal_1 = 0.0;
    this.xal_1 = 0.0;
    this.yal_1 = 0.0;
    var tmp_0 = this;
    tmp_0.zal_1 = 1.0;
  }
  protoOf(SpringSimulation).bam = function (value) {
    if (this.dam() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.ual_1 = Math.sqrt(value);
    this.val_1 = false;
  };
  protoOf(SpringSimulation).dam = function () {
    return this.ual_1 * this.ual_1;
  };
  protoOf(SpringSimulation).aam = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.zal_1 = value;
    this.val_1 = false;
  };
  protoOf(SpringSimulation).cam = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.tal_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.r3() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.zal_1 > 1) {
      var coeffA = adjustedDisplacement - (this.xal_1 * adjustedDisplacement - lastVelocity) / (this.xal_1 - this.wal_1);
      var coeffB = (this.xal_1 * adjustedDisplacement - lastVelocity) / (this.xal_1 - this.wal_1);
      // Inline function 'kotlin.math.exp' call
      var x = this.xal_1 * deltaT;
      var tmp = coeffA * Math.exp(x);
      // Inline function 'kotlin.math.exp' call
      var x_0 = this.wal_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(x_0);
      var tmp_0 = coeffA * this.xal_1;
      // Inline function 'kotlin.math.exp' call
      var x_1 = this.xal_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(x_1);
      var tmp_2 = coeffB * this.wal_1;
      // Inline function 'kotlin.math.exp' call
      var x_2 = this.wal_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(x_2);
    } else if (this.zal_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.ual_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -this.ual_1 * deltaT;
      displacement = tmp_3 * Math.exp(x_3);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_4 = -this.ual_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(x_4) * -this.ual_1;
      // Inline function 'kotlin.math.exp' call
      var x_5 = -this.ual_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(x_5);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.yal_1 * (this.zal_1 * this.ual_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var x_6 = -this.zal_1 * this.ual_1 * deltaT;
      var tmp_6 = Math.exp(x_6);
      // Inline function 'kotlin.math.cos' call
      var x_7 = this.yal_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(x_7);
      // Inline function 'kotlin.math.sin' call
      var x_8 = this.yal_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(x_8));
      var tmp_8 = displacement * -this.ual_1 * this.zal_1;
      // Inline function 'kotlin.math.exp' call
      var x_9 = -this.zal_1 * this.ual_1 * deltaT;
      var tmp_9 = Math.exp(x_9);
      var tmp_10 = -this.yal_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var x_10 = this.yal_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(x_10);
      var tmp_12 = this.yal_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var x_11 = this.yal_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(x_11));
    }
    var newValue = displacement + this.tal_1;
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
    var bits = _Motion___get_packedValue__impl__qymh4n($this).k3(32).g1();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).m3(new Long(-1, 0)).g1();
    return floatFromBits(bits);
  }
  function Motion(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(value));
    var v2 = toLong(toRawBits(velocity));
    var tmp$ret$0 = v1.j3(32).n3(v2.m3(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.aa(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c7d();
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
    var tmp0_initialValue = _this__u8e3s4.w();
    var tmp1_typeConverter = _this__u8e3s4.qae_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.sae_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.tae_1 : new Long(0, -2147483648), block, $completion);
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
    tmp_0.p9_1 = Unit_instance;
    tmp_0.q9_1 = null;
    return tmp_0.v9();
  }
  function updateState(_this__u8e3s4, state) {
    state.wae(_this__u8e3s4.w());
    copyFrom(state.sae_1, _this__u8e3s4.mae_1);
    state.uae_1 = _this__u8e3s4.oae_1;
    state.tae_1 = _this__u8e3s4.nae_1;
    state.vae_1 = _this__u8e3s4.uag();
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.zai();
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = frameTimeNanos.b3(_this__u8e3s4.jae_1).q3() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.nae_1 = frameTimeNanos;
    _this__u8e3s4.wae(anim.wai(playTimeNanos));
    _this__u8e3s4.mae_1 = anim.baj(playTimeNanos);
    var isLastFrame = anim.yai(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.oae_1 = _this__u8e3s4.nae_1;
      _this__u8e3s4.aak(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
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
    var tmp0_initialValue = _this__u8e3s4.w();
    var tmp1_initialVelocityVector = _this__u8e3s4.sae_1;
    var tmp2_typeConverter = _this__u8e3s4.qae_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.tae_1 : new Long(0, -2147483648), block, $completion);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter(FloatCompanionObject_instance), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
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
      tmp = typeConverter.baf()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.baf()(initialValue)) : tmp1_elvis_lhs;
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
      $this_animate.vae_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      // Inline function 'kotlin.apply' call
      var tmp = $animation.rai();
      var tmp_0 = $animation.yaf();
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
      $this_animate.vae_1 = false;
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
      var tmp$ret$0 = it.d3(toLong(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function animateDecay$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.w(), $typeConverter.faf()($this$animate.mae_1));
      return Unit_instance;
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kao_1 = _this__u8e3s4;
    this.lao_1 = animation;
    this.mao_1 = startTimeNanos;
    this.nao_1 = block;
  }
  protoOf($animateCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            this.oao_1 = this.lao_1.wai(new Long(0, 0));
            this.pao_1 = this.lao_1.baj(new Long(0, 0));
            this.qao_1 = {_v: null};
            this.o9_1 = 6;
            if (this.mao_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.rao_1 = get_durationScale(this.t9());
              this.n9_1 = 1;
              suspendResult = callWithFrameNanos(this.lao_1, animate$lambda_0(this.qao_1, this.oao_1, this.lao_1, this.pao_1, this.rao_1, this.kao_1, this.nao_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.lao_1.rai();
              var tmp_2 = this.lao_1.yaf();
              var this_0 = new AnimationScope(this.oao_1, tmp_1, this.pao_1, this.mao_1, tmp_2, this.mao_1, true, animate$lambda_1(this.kao_1));
              doAnimationFrameWithScale(this_0, this.mao_1, get_durationScale(this.t9()), this.lao_1, this.kao_1, this.nao_1);
              this.qao_1._v = this_0;
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.qao_1._v).uag()) {
              this.n9_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.sao_1 = get_durationScale(this.t9());
            this.n9_1 = 4;
            suspendResult = callWithFrameNanos(this.lao_1, animate$lambda_2(this.qao_1, this.sao_1, this.lao_1, this.kao_1, this.nao_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n9_1 = 3;
            continue $sm;
          case 5:
            this.o9_1 = 7;
            this.n9_1 = 8;
            continue $sm;
          case 6:
            this.o9_1 = 7;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.q9_1;
              var tmp0_safe_receiver = this.qao_1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.aak(false);
              }
              var tmp1_safe_receiver = this.qao_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nae_1, this.kao_1.tae_1)) {
                this.kao_1.vae_1 = false;
              }
              throw e;
            } else {
              throw this.q9_1;
            }

          case 7:
            throw this.q9_1;
          case 8:
            this.o9_1 = 7;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 7) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bap_1 = _this__u8e3s4;
    this.cap_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (this.bap_1.vai()) {
              this.n9_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.cap_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.cap_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.dap_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.dap_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.dap_1;
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
    return this_0.w();
  }
  var SeekableStateObserver$delegate;
  function SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation) {
    this.map_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = runAnimations(this.map_1, this);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).f1x = function ($this$launch, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this.map_1, completion);
    i.nap_1 = $this$launch;
    return i;
  };
  function SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.wap_1 = $targetState;
    this.xap_1 = $oldTargetState;
    this.yap_1 = this$0;
    this.zap_1 = $transition;
    this.aaq_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).e1x = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            if (!equals(this.wap_1, this.xap_1)) {
              moveAnimationToInitialState(this.yap_1);
            } else {
              this.yap_1.paq_1 = null;
              if (equals(this.yap_1.m45(), this.wap_1)) {
                return Unit_instance;
              }
            }

            if (!equals(this.wap_1, this.xap_1)) {
              this.zap_1.gar(this.wap_1);
              this.zap_1.har(new Long(0, 0));
              this.yap_1.iar(this.wap_1);
              this.zap_1.jar(this.aaq_1);
            }

            _set_fraction__t78qnf(this.yap_1, this.aaq_1);
            if (this.yap_1.oaq_1.zy()) {
              launch(this.baq_1, VOID, VOID, SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this.yap_1, null));
            } else {
              this.yap_1.naq_1 = new Long(0, -2147483648);
            }

            this.n9_1 = 1;
            suspendResult = waitForCompositionAfterTargetStateChange(this.yap_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            seekToFraction(this.yap_1);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda(this.wap_1, this.xap_1, this.yap_1, this.zap_1, this.aaq_1, completion);
    i.baq_1 = $this$coroutineScope;
    return i;
  };
  function SeekableTransitionState$seekTo$slambda$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.e1x($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    this.sar_1 = this$0;
    this.tar_1 = $targetState;
    this.uar_1 = $transition;
    this.var_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).e1x = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.xar_1 = this.sar_1.f45();
            if (!equals(this.tar_1, this.xar_1)) {
              moveAnimationToInitialState(this.sar_1);
              _set_fraction__t78qnf(this.sar_1, 0.0);
              this.uar_1.gar(this.tar_1);
              this.uar_1.har(new Long(0, 0));
              this.sar_1.bas(this.xar_1);
              this.sar_1.iar(this.tar_1);
            }

            var tmp_0 = this;
            tmp_0.yar_1 = this.sar_1.laq_1;
            var tmp_1 = this;
            tmp_1.zar_1 = null;
            this.n9_1 = 1;
            suspendResult = this.yar_1.x2c(this.zar_1, this);
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
                tmp$ret$0 = this.sar_1.faq_1;
                break l$ret$1;
              } catch ($p) {
                var tmp_4;
                var t = $p;
                this.yar_1.z2c(this.zar_1);
                throw t;
              }
            }
             while (false);
            var tmp_5 = tmp$ret$0;
            this.yar_1.z2c(this.zar_1);
            tmp_2.aas_1 = tmp_5;
            if (!equals(this.tar_1, this.aas_1)) {
              this.n9_1 = 2;
              suspendResult = doOneFrame(this.sar_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            suspendResult = waitForCompositionAfterTargetStateChange(this.sar_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!equals(this.sar_1.m45(), this.tar_1)) {
              if (this.sar_1.mas() < 1.0) {
                var runningAnimation = this.sar_1.paq_1;
                var tmp0_safe_receiver = this.var_1;
                var newSpec = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gai(get_VectorConverter(FloatCompanionObject_instance));
                if (runningAnimation == null || !equals(newSpec, runningAnimation.das_1)) {
                  var oldSpec = runningAnimation == null ? null : runningAnimation.das_1;
                  var oldVelocity;
                  if (!(oldSpec == null)) {
                    var tmp_6 = runningAnimation.cas_1;
                    var tmp_7 = runningAnimation.gas_1;
                    var tmp_8 = Companion_getInstance_7().las_1;
                    var tmp2_elvis_lhs = runningAnimation.has_1;
                    oldVelocity = oldSpec.caj(tmp_6, tmp_7, tmp_8, tmp2_elvis_lhs == null ? Companion_getInstance_7().kas_1 : tmp2_elvis_lhs);
                  } else if (runningAnimation == null || runningAnimation.cas_1.equals(new Long(0, 0))) {
                    oldVelocity = Companion_getInstance_7().kas_1;
                  } else {
                    var oldDurationNanos = runningAnimation.ias_1;
                    var tmp_9;
                    if (oldDurationNanos.equals(new Long(0, -2147483648))) {
                      tmp_9 = this.sar_1.haq_1;
                    } else {
                      tmp_9 = oldDurationNanos;
                    }
                    var this_0 = tmp_9;
                    var other = 1000.0 * (new Long(1000000, 0)).q3();
                    var oldDuration = this_0.q3() / other;
                    if (oldDuration <= (new Long(0, 0)).q3()) {
                      oldVelocity = Companion_getInstance_7().kas_1;
                    } else {
                      oldVelocity = new AnimationVector1D(1.0 / oldDuration);
                    }
                  }
                  var newAnimation = runningAnimation == null ? new SeekingAnimationState() : runningAnimation;
                  newAnimation.das_1 = newSpec;
                  newAnimation.eas_1 = false;
                  newAnimation.fas_1 = this.sar_1.mas();
                  newAnimation.gas_1.eaf(0, this.sar_1.mas());
                  newAnimation.ias_1 = this.sar_1.haq_1;
                  newAnimation.cas_1 = new Long(0, 0);
                  newAnimation.has_1 = oldVelocity;
                  var tmp_10 = newAnimation;
                  var tmp5_elvis_lhs = newSpec == null ? null : newSpec.aaj(newAnimation.gas_1, Companion_getInstance_7().las_1, oldVelocity);
                  var tmp_11;
                  if (tmp5_elvis_lhs == null) {
                    var this_1 = this.sar_1.haq_1;
                    var other_0 = 1.0 - this.sar_1.mas();
                    tmp_11 = roundToLong(this_1.r3() * other_0);
                  } else {
                    tmp_11 = tmp5_elvis_lhs;
                  }
                  tmp_10.jas_1 = tmp_11;
                  this.sar_1.paq_1 = newAnimation;
                }
              }
              this.n9_1 = 5;
              suspendResult = runAnimations(this.sar_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 7;
              continue $sm;
            }

          case 5:
            this.sar_1.bas(this.tar_1);
            this.n9_1 = 6;
            suspendResult = waitForComposition(this.sar_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            _set_fraction__t78qnf(this.sar_1, 0.0);
            this.n9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 8) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this.sar_1, this.tar_1, this.uar_1, this.var_1, completion);
    i.war_1 = $this$coroutineScope;
    return i;
  };
  function SeekableTransitionState$animateTo$slambda$slambda_0(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.e1x($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_fraction__t78qnf($this, _set____db54di) {
    var this_0 = $this.jaq_1;
    fraction$factory();
    this_0.g3d(_set____db54di);
    return Unit_instance;
  }
  function endAllAnimations($this) {
    var tmp0_safe_receiver = $this.gaq_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.nas();
    }
    $this.oaq_1.i2();
    var current = $this.paq_1;
    if (!(current == null)) {
      $this.paq_1 = null;
      _set_fraction__t78qnf($this, 1.0);
      seekToFraction($this);
    }
  }
  function runAnimations($this, $completion) {
    var tmp = new $runAnimationsCOROUTINE$3($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function doOneFrame($this, $completion) {
    var tmp = new $doOneFrameCOROUTINE$4($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function animateOneFrame($this, $completion) {
    var tmp = new $animateOneFrameCOROUTINE$5($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function recalculateAnimationValue($this, animation, deltaPlayTimeNanos) {
    var playTimeNanos = animation.cas_1.a3(deltaPlayTimeNanos);
    animation.cas_1 = playTimeNanos;
    var durationNanos = animation.jas_1;
    if (playTimeNanos.b1(durationNanos) >= 0) {
      animation.fas_1 = 1.0;
    } else {
      var animationSpec = animation.das_1;
      if (!(animationSpec == null)) {
        var tmp = animation;
        var tmp_0 = animation.gas_1;
        var tmp_1 = Companion_getInstance_7().las_1;
        var tmp0_elvis_lhs = animation.has_1;
        tmp.fas_1 = coerceIn(animationSpec.xai(playTimeNanos, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Companion_getInstance_7().kas_1 : tmp0_elvis_lhs).daf(0), 0.0, 1.0);
      } else {
        animation.fas_1 = lerp(animation.gas_1.daf(0), 1.0, playTimeNanos.q3() / durationNanos.q3());
      }
    }
  }
  function waitForCompositionAfterTargetStateChange($this, $completion) {
    var tmp = new $waitForCompositionAfterTargetStateChangeCOROUTINE$6($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function waitForComposition($this, $completion) {
    var tmp = new $waitForCompositionCOROUTINE$7($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function moveAnimationToInitialState($this) {
    var tmp0_elvis_lhs = $this.gaq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var tmp1_elvis_lhs = $this.paq_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp_1;
      if ($this.haq_1.b1(new Long(0, 0)) <= 0 || $this.mas() === 1.0 || equals($this.m45(), $this.f45())) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = new SeekingAnimationState();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.animation.core.SeekableTransitionState.moveAnimationToInitialState.<anonymous>' call
        this_0.fas_1 = $this.mas();
        var totalDurationNanos = $this.haq_1;
        this_0.ias_1 = totalDurationNanos;
        var tmp_2 = this_0;
        // Inline function 'kotlin.Long.times' call
        var other = 1.0 - $this.mas();
        var tmp$ret$0 = totalDurationNanos.r3() * other;
        tmp_2.jas_1 = roundToLong(tmp$ret$0);
        this_0.gas_1.eaf(0, $this.mas());
        tmp_1 = this_0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    if (!(animation == null)) {
      animation.ias_1 = $this.haq_1;
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      $this.oaq_1.e(animation);
      transition.kau(animation);
    }
    $this.paq_1 = null;
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.gaq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.mas() * transition.lau().r3());
    transition.mau(playTimeNanos);
  }
  function SeekingAnimationState() {
    this.cas_1 = new Long(0, 0);
    this.das_1 = null;
    this.eas_1 = false;
    this.fas_1 = 0.0;
    this.gas_1 = new AnimationVector1D(0.0);
    this.has_1 = null;
    this.ias_1 = new Long(0, 0);
    this.jas_1 = new Long(0, 0);
  }
  protoOf(SeekingAnimationState).toString = function () {
    return 'progress nanos: ' + this.cas_1.toString() + ', animationSpec: ' + toString_0(this.das_1) + ',' + (' isComplete: ' + this.eas_1 + ', value: ' + this.fas_1 + ', start: ' + this.gas_1.toString() + ',') + (' initialVelocity: ' + toString_0(this.has_1) + ', durationNanos: ' + this.ias_1.toString() + ',') + (' animationSpecDuration: ' + this.jas_1.toString());
  };
  function Companion() {
    Companion_instance_0 = this;
    this.kas_1 = new AnimationVector1D(0.0);
    this.las_1 = new AnimationVector1D(1.0);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function SeekableTransitionState$recalculateTotalDurationNanos$lambda(this$0) {
    return function () {
      var tmp = this$0;
      var tmp0_safe_receiver = this$0.gaq_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lau();
      tmp.haq_1 = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
      return Unit_instance;
    };
  }
  function SeekableTransitionState$firstFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      this$0.naq_1 = frameTimeNanos;
      return Unit_instance;
    };
  }
  function SeekableTransitionState$animateOneFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      var delta = frameTimeNanos.b3(this$0.naq_1);
      this$0.naq_1 = frameTimeNanos;
      // Inline function 'kotlin.Long.div' call
      var other = this$0.raq_1;
      var tmp$ret$0 = delta.r3() / other;
      var deltaPlayTimeNanos = roundToLong(tmp$ret$0);
      var tmp;
      if (this$0.oaq_1.zy()) {
        // Inline function 'androidx.collection.ObjectList.forEach' call
        var this_0 = this$0.oaq_1;
        // Inline function 'kotlin.contracts.contract' call
        var content = this_0.bz_1;
        var inductionVariable = 0;
        var last = this_0.cz_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            var tmp_0 = content[i];
            var animation = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            recalculateAnimationValue(this$0, animation, deltaPlayTimeNanos);
            animation.eas_1 = true;
          }
           while (inductionVariable < last);
        var tmp0_safe_receiver = this$0.gaq_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.nau();
        }
        var this_1 = this$0.oaq_1;
        var gap = 0;
        var size = this_1.cz_1;
        var content_0 = this_1.bz_1;
        // Inline function 'androidx.collection.ObjectList.indices' call
        var progression = until(0, this_1.cz_1);
        var inductionVariable_0 = progression.c1_1;
        var last_0 = progression.d1_1;
        if (inductionVariable_0 <= last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            content_0[i_0 - gap | 0] = content_0[i_0];
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            var tmp_1 = content_0[i_0];
            if (((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE()).eas_1) {
              gap = gap + 1 | 0;
            }
          }
           while (!(i_0 === last_0));
        fill(content_0, null, size - gap | 0, size);
        this_1.cz_1 = this_1.cz_1 - gap | 0;
        tmp = Unit_instance;
      }
      var currentAnimation = this$0.paq_1;
      var tmp_2;
      if (!(currentAnimation == null)) {
        currentAnimation.ias_1 = this$0.haq_1;
        recalculateAnimationValue(this$0, currentAnimation, deltaPlayTimeNanos);
        _set_fraction__t78qnf(this$0, currentAnimation.fas_1);
        if (currentAnimation.fas_1 === 1.0) {
          this$0.paq_1 = null;
        }
        seekToFraction(this$0);
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation) {
    this.wau_1 = this$0;
    this.xau_1 = $targetState;
    this.yau_1 = $transition;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$snapTo$slambda).i23 = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SeekableTransitionState$snapTo$slambda).db = function ($completion) {
    return this.i23($completion);
  };
  protoOf(SeekableTransitionState$snapTo$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            endAllAnimations(this.wau_1);
            this.wau_1.naq_1 = new Long(0, -2147483648);
            _set_fraction__t78qnf(this.wau_1, 0.0);
            var tmp_0 = this;
            var tmp0_subject = this.xau_1;
            tmp_0.zau_1 = equals(tmp0_subject, this.wau_1.m45()) ? -4.0 : equals(tmp0_subject, this.wau_1.f45()) ? -5.0 : -3.0;
            this.yau_1.gar(this.xau_1);
            this.yau_1.har(new Long(0, 0));
            this.wau_1.iar(this.xau_1);
            _set_fraction__t78qnf(this.wau_1, 0.0);
            this.wau_1.bas(this.xau_1);
            this.yau_1.jar(this.zau_1);
            if (this.zau_1 === -3.0) {
              this.n9_1 = 1;
              suspendResult = waitForCompositionAfterTargetStateChange(this.wau_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.yau_1.aav();
            return Unit_instance;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SeekableTransitionState$snapTo$slambda).j23 = function (completion) {
    return new SeekableTransitionState$snapTo$slambda(this.wau_1, this.xau_1, this.yau_1, completion);
  };
  function SeekableTransitionState$snapTo$slambda_0(this$0, $targetState, $transition, resultContinuation) {
    var i = new SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.jav_1 = $targetState;
    this.kav_1 = $oldTargetState;
    this.lav_1 = this$0;
    this.mav_1 = $transition;
    this.nav_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda).i23 = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SeekableTransitionState$seekTo$slambda).db = function ($completion) {
    return this.i23($completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = coroutineScope(SeekableTransitionState$seekTo$slambda$slambda_0(this.jav_1, this.kav_1, this.lav_1, this.mav_1, this.nav_1, null), this);
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
  protoOf(SeekableTransitionState$seekTo$slambda).j23 = function (completion) {
    return new SeekableTransitionState$seekTo$slambda(this.jav_1, this.kav_1, this.lav_1, this.mav_1, this.nav_1, completion);
  };
  function SeekableTransitionState$seekTo$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    this.wav_1 = $transition;
    this.xav_1 = this$0;
    this.yav_1 = $targetState;
    this.zav_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda).i23 = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SeekableTransitionState$animateTo$slambda).db = function ($completion) {
    return this.i23($completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = coroutineScope(SeekableTransitionState$animateTo$slambda$slambda_0(this.xav_1, this.yav_1, this.wav_1, this.zav_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.wav_1.aav();
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
  protoOf(SeekableTransitionState$animateTo$slambda).j23 = function (completion) {
    return new SeekableTransitionState$animateTo$slambda(this.wav_1, this.xav_1, this.yav_1, this.zav_1, completion);
  };
  function SeekableTransitionState$animateTo$slambda_0($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $runAnimationsCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.was_1 = _this__u8e3s4;
  }
  protoOf($runAnimationsCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            if (this.was_1.oaq_1.q() && this.was_1.paq_1 == null) {
              return Unit_instance;
            }

            if (get_durationScale(this.t9()) === 0.0) {
              endAllAnimations(this.was_1);
              this.was_1.naq_1 = new Long(0, -2147483648);
              return Unit_instance;
            }

            if (this.was_1.naq_1.equals(new Long(0, -2147483648))) {
              this.n9_1 = 1;
              suspendResult = withFrameNanos(this.was_1.qaq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            if (!(this.was_1.oaq_1.zy() || !(this.was_1.paq_1 == null))) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.n9_1 = 4;
            suspendResult = animateOneFrame(this.was_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n9_1 = 3;
            continue $sm;
          case 5:
            this.was_1.naq_1 = new Long(0, -2147483648);
            return Unit_instance;
          case 6:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 6) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $doOneFrameCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fat_1 = _this__u8e3s4;
  }
  protoOf($doOneFrameCOROUTINE$4).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (this.fat_1.naq_1.equals(new Long(0, -2147483648))) {
              this.n9_1 = 2;
              suspendResult = withFrameNanos(this.fat_1.qaq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = animateOneFrame(this.fat_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
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
  function $animateOneFrameCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oat_1 = _this__u8e3s4;
  }
  protoOf($animateOneFrameCOROUTINE$5).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.pat_1 = get_durationScale(this.t9());
            if (this.pat_1 <= 0.0) {
              endAllAnimations(this.oat_1);
              this.n9_1 = 2;
              continue $sm;
            } else {
              this.oat_1.raq_1 = this.pat_1;
              this.n9_1 = 1;
              suspendResult = withFrameNanos(this.oat_1.saq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $waitForCompositionAfterTargetStateChangeCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yat_1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionAfterTargetStateChangeCOROUTINE$6).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.zat_1 = this.yat_1.f45();
            this.n9_1 = 1;
            suspendResult = this.yat_1.laq_1.y2c(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (equals(this.zat_1, this.yat_1.faq_1)) {
              this.yat_1.laq_1.a2d();
              this.n9_1 = 3;
              continue $sm;
            } else {
              this.n9_1 = 2;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.p19();
              this.yat_1.kaq_1 = cancellable;
              this.yat_1.laq_1.a2d();
              suspendResult = returnIfSuspended(cancellable.t16(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var state = suspendResult;
            if (!equals(state, this.zat_1)) {
              this.yat_1.naq_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('snapTo() was canceled because state was changed to ' + (toString_0(state) + ' instead of ' + toString_0(this.zat_1)));
            }

            this.n9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
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
  function $waitForCompositionCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iau_1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionCOROUTINE$7).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.jau_1 = this.iau_1.f45();
            this.n9_1 = 1;
            suspendResult = this.iau_1.laq_1.y2c(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.p19();
            this.iau_1.kaq_1 = cancellable;
            this.iau_1.laq_1.a2d();
            suspendResult = returnIfSuspended(cancellable.t16(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var state = suspendResult;
            if (!equals(state, this.jau_1)) {
              this.iau_1.naq_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('targetState while waiting for composition');
            }

            return Unit_instance;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function SeekableTransitionState(initialState) {
    Companion_getInstance_7();
    TransitionState.call(this);
    this.daq_1 = mutableStateOf(initialState);
    this.eaq_1 = mutableStateOf(initialState);
    this.faq_1 = initialState;
    this.gaq_1 = null;
    this.haq_1 = new Long(0, 0);
    var tmp = this;
    tmp.iaq_1 = SeekableTransitionState$recalculateTotalDurationNanos$lambda(this);
    this.jaq_1 = mutableFloatStateOf(0.0);
    this.kaq_1 = null;
    this.laq_1 = Mutex();
    this.maq_1 = new MutatorMutex();
    this.naq_1 = new Long(0, -2147483648);
    this.oaq_1 = new MutableObjectList();
    this.paq_1 = null;
    var tmp_0 = this;
    tmp_0.qaq_1 = SeekableTransitionState$firstFrameLambda$lambda(this);
    this.raq_1 = 0.0;
    var tmp_1 = this;
    tmp_1.saq_1 = SeekableTransitionState$animateOneFrameLambda$lambda(this);
  }
  protoOf(SeekableTransitionState).iar = function (_set____db54di) {
    var this_0 = this.daq_1;
    targetState$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(SeekableTransitionState).f45 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.daq_1;
    targetState$factory_0();
    return this_0.w();
  };
  protoOf(SeekableTransitionState).bas = function (_set____db54di) {
    var this_0 = this.eaq_1;
    currentState$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(SeekableTransitionState).m45 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.eaq_1;
    currentState$factory_0();
    return this_0.w();
  };
  protoOf(SeekableTransitionState).mas = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.jaq_1;
    fraction$factory_0();
    return this_0.h3d();
  };
  protoOf(SeekableTransitionState).aaw = function (targetState, $completion) {
    var tmp0_elvis_lhs = this.gaq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    if (equals(this.m45(), targetState) && equals(this.f45(), targetState)) {
      return Unit_instance;
    }
    return this.maq_1.aaf(VOID, SeekableTransitionState$snapTo$slambda_0(this, targetState, transition, null), $completion);
  };
  protoOf(SeekableTransitionState).baw = function (fraction, targetState, $completion) {
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= fraction ? fraction <= 1.0 : false)) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.seekTo.<anonymous>' call
      var tmp$ret$0 = 'Expecting fraction between 0 and 1. Got ' + fraction;
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp0_elvis_lhs = this.gaq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var oldTargetState = this.f45();
    return this.maq_1.aaf(VOID, SeekableTransitionState$seekTo$slambda_0(targetState, oldTargetState, this, transition, fraction, null), $completion);
  };
  protoOf(SeekableTransitionState).caw = function (fraction, targetState, $completion, $super) {
    targetState = targetState === VOID ? this.f45() : targetState;
    return $super === VOID ? this.baw(fraction, targetState, $completion) : $super.baw.call(this, fraction, targetState, $completion);
  };
  protoOf(SeekableTransitionState).daw = function (targetState, animationSpec, $completion) {
    var tmp0_elvis_lhs = this.gaq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    return this.maq_1.aaf(VOID, SeekableTransitionState$animateTo$slambda_0(transition, this, targetState, animationSpec, null), $completion);
  };
  protoOf(SeekableTransitionState).eaw = function (targetState, animationSpec, $completion, $super) {
    targetState = targetState === VOID ? this.f45() : targetState;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    return $super === VOID ? this.daw(targetState, animationSpec, $completion) : $super.daw.call(this, targetState, animationSpec, $completion);
  };
  protoOf(SeekableTransitionState).faw = function (transition) {
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.gaq_1 == null || equals(transition, this.gaq_1))) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.transitionConfigured.<anonymous>' call
      var tmp$ret$0 = 'An instance of SeekableTransitionState has been used in different Transitions. ' + ('Previous instance: ' + toString_0(this.gaq_1) + ', new instance: ' + transition.toString());
      throwIllegalStateException(tmp$ret$0);
    }
    this.gaq_1 = transition;
  };
  protoOf(SeekableTransitionState).gaw = function () {
    this.gaq_1 = null;
    get_SeekableStateObserver().j44(this);
  };
  protoOf(SeekableTransitionState).haw = function () {
    get_SeekableStateObserver().i44(this, get_SeekableTransitionStateTotalDurationChanged(), this.iaq_1);
  };
  protoOf(SeekableTransitionState).iaw = function () {
    var previousTotalDurationNanos = this.haq_1;
    this.haw();
    if (!previousTotalDurationNanos.equals(this.haq_1)) {
      var animation = this.paq_1;
      if (!(animation == null)) {
        animation.ias_1 = this.haq_1;
        if (animation.das_1 == null) {
          animation.jas_1 = roundToLong((1.0 - animation.gas_1.daf(0)) * this.haq_1.r3());
        }
      } else if (!this.haq_1.equals(new Long(0, 0))) {
        seekToFraction(this);
      }
    }
  };
  function TransitionState() {
    this.jaw_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).aak = function (_set____db54di) {
    var this_0 = this.jaw_1;
    isRunning$factory_3();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionState).kaw = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.jaw_1;
    isRunning$factory_4();
    return this_0.w();
  };
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var this_0 = $this.naw_1;
    targetValue$factory_1();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_targetValue__jjlmb5($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.naw_1;
    targetValue$factory_2();
    return this_0.w();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var this_0 = $this.paw_1;
    animationSpec$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var this_0 = $this.qaw_1;
    animation$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp0_safe_receiver = $this.saw_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yaf(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.aax_1, $this.law_1, initialValue, initialValue, newInstance($this.xaw_1)));
      $this.vaw_1 = true;
      $this.dax($this.cax().zai());
      return Unit_instance;
    }
    var tmp;
    if (isInterrupted && !$this.zaw_1) {
      var tmp_0;
      var tmp_1 = $this.eax();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.eax();
      } else {
        tmp_0 = $this.aax_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.eax();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if ($this.bax_1.fax().b1(new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.bax_1.fax());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.law_1, initialValue, _get_targetValue__jjlmb5($this), $this.xaw_1));
    $this.dax($this.cax().zai());
    $this.vaw_1 = false;
    onChildAnimationUpdated($this.bax_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.w() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.jax_1 = $outer;
    this.gax_1 = animation;
    this.hax_1 = transitionSpec;
    this.iax_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).kax = function (segment) {
    var targetValue = this.iax_1(segment.f45());
    if (this.jax_1.rax_1.sax()) {
      var initialValue = this.iax_1(segment.max());
      this.gax_1.nax(initialValue, targetValue, this.hax_1(segment));
    } else {
      this.gax_1.lax(targetValue, this.hax_1(segment));
    }
  };
  protoOf(DeferredAnimationData).w = function () {
    this.kax(this.jax_1.rax_1.tax());
    return this.gax_1.w();
  };
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.sax()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = it.d3(toLong(1));
        this$0.uax(tmp$ret$0, $durationScale);
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
  function _set_segment__77iylu($this, _set____db54di) {
    var this_0 = $this.xaq_1;
    segment$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var this_0 = $this.yaq_1;
    _playTimeNanos$factory();
    this_0.m3g(_set____db54di);
    return Unit_instance;
  }
  function _get__playTimeNanos__xxox8s($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.yaq_1;
    _playTimeNanos$factory_0();
    return this_0.n3g();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var this_0 = $this.aar_1;
    updateChildrenNeeded$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.aar_1;
    updateChildrenNeeded$factory_0();
    return this_0.w();
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var a = maxDurationNanos;
        var b = item.vax();
        maxDurationNanos = a.b1(b) >= 0 ? a : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var a_0 = maxDurationNanos;
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = a_0.b1(b_0) >= 0 ? a_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function resetAnimations($this) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        item.wax();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        resetAnimations(item_0);
      }
       while (inductionVariable_0 <= last_0);
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.sax()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this.bar_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
          // Inline function 'kotlin.math.max' call
          var a = maxDurationNanos;
          var b = item.vax();
          maxDurationNanos = a.b1(b) >= 0 ? a : b;
          item.xax($this.ear_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.bax_1 = $outer;
    this.law_1 = typeConverter;
    this.maw_1 = label;
    this.naw_1 = mutableStateOf(initialValue);
    this.oaw_1 = spring();
    this.paw_1 = mutableStateOf(this.oaw_1);
    this.qaw_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.eax(), this.law_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.raw_1 = null;
    this.saw_1 = null;
    this.taw_1 = mutableStateOf(true);
    this.uaw_1 = mutableFloatStateOf(-1.0);
    this.vaw_1 = false;
    this.waw_1 = mutableStateOf(initialValue);
    this.xaw_1 = initialVelocityVector;
    this.yaw_1 = mutableLongStateOf(this.cax().zai());
    this.zaw_1 = false;
    var tmp0_safe_receiver = get_visibilityThresholdMap().n2(this.law_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.law_1.baf()(initialValue);
      var inductionVariable = 0;
      var last = vector.caf();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.eaf(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.law_1.faf()(vector);
    }
    var visibilityThreshold = tmp;
    this.aax_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).eax = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.paw_1;
    animationSpec$factory_0();
    return this_0.w();
  };
  protoOf(TransitionAnimationState).cax = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.qaw_1;
    animation$factory_0();
    return this_0.w();
  };
  protoOf(TransitionAnimationState).yax = function (_set____db54di) {
    var this_0 = this.taw_1;
    isFinished$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).zax = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.taw_1;
    isFinished$factory_0();
    return this_0.w();
  };
  protoOf(TransitionAnimationState).aay = function (_set____db54di) {
    var this_0 = this.uaw_1;
    resetSnapValue$factory();
    this_0.g3d(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).bay = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.uaw_1;
    resetSnapValue$factory_0();
    return this_0.h3d();
  };
  protoOf(TransitionAnimationState).wae = function (_set____db54di) {
    var this_0 = this.waw_1;
    value$factory_3();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).w = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.waw_1;
    value$factory_4();
    return this_0.w();
  };
  protoOf(TransitionAnimationState).dax = function (_set____db54di) {
    var this_0 = this.yaw_1;
    durationNanos$factory();
    this_0.m3g(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).vax = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.yaw_1;
    durationNanos$factory_0();
    return this_0.n3g();
  };
  protoOf(TransitionAnimationState).cay = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.cax().zai() : playTimeNanos;
    this.wae(this.cax().wai(playTime));
    this.xaw_1 = this.cax().baj(playTime);
    if (this.cax().yai(playTime)) {
      this.yax(true);
    }
  };
  protoOf(TransitionAnimationState).xax = function (playTimeNanos) {
    if (!(this.bay() === -1.0)) {
      return Unit_instance;
    }
    this.zaw_1 = true;
    if (equals(this.cax().yaf(), this.cax().uai())) {
      this.wae(this.cax().yaf());
    } else {
      this.wae(this.cax().wai(playTimeNanos));
      this.xaw_1 = this.cax().baj(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState).day = function () {
    var tmp0_elvis_lhs = this.raw_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animState = tmp;
    var tmp1_elvis_lhs = this.saw_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    // Inline function 'kotlin.Long.times' call
    var this_0 = animState.ias_1;
    var other = animState.fas_1;
    var tmp$ret$0 = this_0.r3() * other;
    var initialPlayTimeNanos = roundToLong(tmp$ret$0);
    var initialValue = animation.wai(initialPlayTimeNanos);
    if (this.vaw_1) {
      this.cax().sai(initialValue);
    }
    this.cax().tai(initialValue);
    this.dax(this.cax().zai());
    if (this.bay() === -2.0 || this.vaw_1) {
      this.wae(initialValue);
    } else {
      this.xax(this.bax_1.fax());
    }
    if (initialPlayTimeNanos.b1(animState.ias_1) >= 0) {
      this.raw_1 = null;
      this.saw_1 = null;
    } else {
      animState.eas_1 = false;
    }
  };
  protoOf(TransitionAnimationState).wax = function () {
    this.aay(-2.0);
  };
  protoOf(TransitionAnimationState).eay = function (fraction) {
    switch (fraction) {
      case -4.0:
      case -5.0:
        var initAnim = this.saw_1;
        if (!(initAnim == null)) {
          this.cax().tai(initAnim.yaf());
          this.raw_1 = null;
          this.saw_1 = null;
        }

        var tmp;
        if (fraction === -4.0) {
          tmp = this.cax().uai();
        } else {
          tmp = this.cax().yaf();
        }

        var animationValue = tmp;
        this.cax().tai(animationValue);
        this.cax().sai(animationValue);
        this.wae(animationValue);
        this.dax(this.cax().zai());
        break;
      default:
        this.aay(fraction);
        break;
    }
  };
  protoOf(TransitionAnimationState).fay = function (animationState) {
    if (!equals(this.cax().yaf(), this.cax().uai())) {
      this.saw_1 = this.cax();
      this.raw_1 = animationState;
    }
    _set_animation__pan2kh(this, TargetBasedAnimation_init_$Create$(this.aax_1, this.law_1, this.w(), this.w(), newInstance(this.xaw_1)));
    this.dax(this.cax().zai());
    this.vaw_1 = true;
  };
  protoOf(TransitionAnimationState).gay = function () {
    this.saw_1 = null;
    this.raw_1 = null;
    this.vaw_1 = false;
  };
  protoOf(TransitionAnimationState).toString = function () {
    return 'current value: ' + toString_0(this.w()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.eax());
  };
  protoOf(TransitionAnimationState).lax = function (targetValue, animationSpec) {
    var tmp;
    if (this.vaw_1) {
      var tmp0_safe_receiver = this.saw_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yaf());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.bay() === -1.0) {
      return Unit_instance;
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    var initialValue = this.bay() === -3.0 ? targetValue : this.w();
    updateAnimation(this, initialValue, !this.zax());
    this.yax(this.bay() === -3.0);
    if (this.bay() >= 0.0) {
      var duration = this.cax().zai();
      var tmp_0 = this.cax();
      // Inline function 'kotlin.Long.times' call
      var other = this.bay();
      var tmp$ret$0 = duration.q3() * other;
      this.wae(tmp_0.wai(numberToLong(tmp$ret$0)));
    } else if (this.bay() === -3.0) {
      this.wae(targetValue);
    }
    this.vaw_1 = false;
    this.aay(-1.0);
  };
  protoOf(TransitionAnimationState).nax = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.cax().uai(), initialValue) && equals(this.cax().yaf(), targetValue)) {
      return Unit_instance;
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.hay_1 = initialState;
    this.iay_1 = targetState;
  }
  protoOf(SegmentImpl).max = function () {
    return this.hay_1;
  };
  protoOf(SegmentImpl).f45 = function () {
    return this.iay_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.hay_1, other.max());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.iay_1, other.f45());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.hay_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.iay_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.rax_1 = $outer;
    this.oax_1 = typeConverter;
    this.pax_1 = label;
    this.qax_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).kay = function (_set____db54di) {
    var this_0 = this.qax_1;
    data$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(DeferredAnimation).lay = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.qax_1;
    data$factory_0();
    return this_0.w();
  };
  protoOf(DeferredAnimation).may = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.lay();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState(this.rax_1, targetValueByState(this.rax_1.m45()), createZeroVectorFrom(this.oax_1, targetValueByState(this.rax_1.m45())), this.oax_1, this.pax_1), transitionSpec, targetValueByState);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.kay(this_0);
      this.rax_1.nay(this_0.gax_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.iax_1 = targetValueByState;
    animData.hax_1 = transitionSpec;
    animData.kax(this.rax_1.tax());
    return animData;
  };
  protoOf(DeferredAnimation).oay = function () {
    var tmp0_safe_receiver = this.lay();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.gax_1.nax(tmp0_safe_receiver.iax_1(this.rax_1.tax().max()), tmp0_safe_receiver.iax_1(this.rax_1.tax().f45()), tmp0_safe_receiver.hax_1(this.rax_1.tax()));
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
    this.xay_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Transition$animateTo$lambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.zay_1 = get_durationScale(this.yay_1.b14());
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.yay_1)) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.n9_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.xay_1, this.zay_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
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
  protoOf(Transition$animateTo$lambda$slambda).f1x = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.xay_1, completion);
    i.yay_1 = $this$launch;
    return i;
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).n18 = function () {
    // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Transition$animateTo$lambda_0($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv();
    };
  }
  function Transition$animateTo$lambda_1($tmp1_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.aaz($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.taq_1 = transitionState;
    this.uaq_1 = parentTransition;
    this.vaq_1 = label;
    this.waq_1 = mutableStateOf(this.m45());
    this.xaq_1 = mutableStateOf(new SegmentImpl(this.m45(), this.m45()));
    this.yaq_1 = mutableLongStateOf(new Long(0, 0));
    this.zaq_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.aar_1 = mutableStateOf(false);
    this.bar_1 = mutableStateListOf();
    this.car_1 = mutableStateListOf();
    this.dar_1 = mutableStateOf(false);
    this.ear_1 = new Long(0, 0);
    var tmp = this;
    tmp.far_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.taq_1.faw(this);
  }
  protoOf(Transition).m45 = function () {
    return this.taq_1.m45();
  };
  protoOf(Transition).iar = function (_set____db54di) {
    var this_0 = this.waq_1;
    targetState$factory_1();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).f45 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.waq_1;
    targetState$factory_2();
    return this_0.w();
  };
  protoOf(Transition).tax = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.xaq_1;
    segment$factory_0();
    return this_0.w();
  };
  protoOf(Transition).uag = function () {
    return !this.baz().equals(new Long(0, -2147483648));
  };
  protoOf(Transition).har = function (value) {
    if (this.uaq_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).fax = function () {
    var tmp0_safe_receiver = this.uaq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fax();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).caz = function (_set____db54di) {
    var this_0 = this.zaq_1;
    startTimeNanos$factory();
    this_0.m3g(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).baz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.zaq_1;
    startTimeNanos$factory_0();
    return this_0.n3g();
  };
  protoOf(Transition).daz = function () {
    return this.bar_1;
  };
  protoOf(Transition).eaz = function (_set____db54di) {
    var this_0 = this.dar_1;
    isSeeking$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).sax = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.dar_1;
    isSeeking$factory_0();
    return this_0.w();
  };
  protoOf(Transition).faz = function () {
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.bar_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
          if (!(item.raw_1 == null)) {
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
        var this_1 = this.car_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = this_1.j() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = this_1.o(index_0);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
            if (item_0.faz()) {
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
  protoOf(Transition).lau = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.far_1;
    totalDurationNanos$factory();
    return this_0.w();
  };
  protoOf(Transition).uax = function (frameTimeNanos, durationScale) {
    if (this.baz().equals(new Long(0, -2147483648))) {
      this.gaz(frameTimeNanos);
    }
    var deltaT = frameTimeNanos.b3(this.baz());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = deltaT.r3() / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.har(scaledPlayTimeNanos);
    this.haz(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).haz = function (scaledPlayTimeNanos, scaleToEnd) {
    if (this.baz().equals(new Long(0, -2147483648))) {
      this.gaz(scaledPlayTimeNanos);
    } else if (!this.taq_1.kaw()) {
      this.taq_1.aak(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!item.zax()) {
          item.cay(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.zax()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!equals(item_0.f45(), item_0.m45())) {
          item_0.haz(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.f45(), item_0.m45())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.aav();
    }
  };
  protoOf(Transition).gaz = function (frameTimeNanos) {
    this.caz(frameTimeNanos);
    this.taq_1.aak(true);
  };
  protoOf(Transition).iaz = function () {
    this.aav();
    this.taq_1.gaw();
  };
  protoOf(Transition).aav = function () {
    this.caz(new Long(0, -2147483648));
    var tmp = this.taq_1;
    if (tmp instanceof MutableTransitionState) {
      this.taq_1.bas(this.f45());
    }
    this.har(new Long(0, 0));
    this.taq_1.aak(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.onTransitionEnd.<anonymous>' call
        item.aav();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).jaz = function (initialState, targetState, playTimeNanos) {
    this.caz(new Long(0, -2147483648));
    this.taq_1.aak(false);
    if (!this.sax() || !equals(this.m45(), initialState) || !equals(this.f45(), targetState)) {
      var tmp;
      if (!equals(this.m45(), initialState)) {
        var tmp_0 = this.taq_1;
        tmp = tmp_0 instanceof MutableTransitionState;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.taq_1.bas(initialState);
      }
      this.iar(targetState);
      this.eaz(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var it = item instanceof Transition ? item : THROW_CCE();
        if (it.sax()) {
          it.jaz(it.m45(), it.f45(), playTimeNanos);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        item_0.xax(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.ear_1 = playTimeNanos;
  };
  protoOf(Transition).kaz = function (transition) {
    return this.car_1.l2s(transition);
  };
  protoOf(Transition).laz = function (transition) {
    return this.car_1.g3a(transition);
  };
  protoOf(Transition).nay = function (animation) {
    return this.bar_1.l2s(animation);
  };
  protoOf(Transition).maz = function (animation) {
    this.bar_1.g3a(animation);
  };
  protoOf(Transition).gar = function (targetState) {
    if (!equals(this.f45(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.f45(), targetState));
      if (!equals(this.m45(), this.f45())) {
        this.taq_1.bas(this.f45());
      }
      this.iar(targetState);
      if (!this.uag()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      resetAnimations(this);
    }
  };
  protoOf(Transition).aaz = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1493585151);
    sourceInformation($composer_0, 'C(animateTo)1220@49879L24,1221@49959L1012,1221@49920L1051:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.h2l(targetState) : $composer_0.h2w(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1493585151, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo (Transition.kt:1212)');
      }
      if (!this.sax()) {
        this.gar(targetState);
        if (!equals(targetState, this.m45()) || this.uag() || _get_updateChildrenNeeded__mpvzi(this)) {
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
          var it = $composer_1.y2w();
          var tmp;
          if (false || it === Companion_getInstance().n2o_1) {
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
          var coroutineScope = tmp1_group;
          sourceInformationMarkerStart($composer_0, 335902523, 'CC(remember):Transition.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          var invalid = !!($composer_0.h2w(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = this_0.y2w();
          var tmp_1;
          if (invalid || it_0 === Companion_getInstance().n2o_1) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>' call
            var value_0 = Transition$animateTo$lambda_0(coroutineScope, this);
            this_0.j2x(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          DisposableEffect(coroutineScope, this, tmp0_group, $composer_0, 112 & $dirty);
        }
      }
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
      tmp2_safe_receiver.r32(Transition$animateTo$lambda_1(this, targetState, $changed));
    }
  };
  protoOf(Transition).mau = function (playTimeNanos) {
    if (this.baz().equals(new Long(0, -2147483648))) {
      this.caz(playTimeNanos);
    }
    this.har(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        item.xax(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        if (!equals(item_0.f45(), item_0.m45())) {
          item_0.mau(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).kau = function (animationState) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item.fay(animationState);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item_0.kau(animationState);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).jar = function (fraction) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item.eay(fraction);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item_0.jar(fraction);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).nas = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item.gay();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item_0.nas();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).nau = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.bar_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item.day();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.car_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.o(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item_0.nau();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    // Inline function 'androidx.compose.ui.util.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.daz();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        // Inline function 'androidx.compose.animation.core.Transition.toString.<anonymous>' call
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).naz = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.lay();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gax_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.maz(tmp1_safe_receiver);
    }
  };
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.paz_1 = mutableStateOf(initialState);
    this.qaz_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).bas = function (_set____db54di) {
    var this_0 = this.paz_1;
    currentState$factory_1();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).m45 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.paz_1;
    currentState$factory_2();
    return this_0.w();
  };
  protoOf(MutableTransitionState).raz = function (_set____db54di) {
    var this_0 = this.qaz_1;
    targetState$factory_3();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).f45 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.qaz_1;
    targetState$factory_4();
    return this_0.w();
  };
  protoOf(MutableTransitionState).faw = function (transition) {
  };
  protoOf(MutableTransitionState).gaw = function () {
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
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.h2l(transitionState) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value = Transition_init_$Create$(transitionState, label_0);
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    if (transitionState instanceof SeekableTransitionState) {
      $composer_0.c2v(1030461252);
      sourceInformation($composer_0, '826@34574L382,826@34500L456');
      var tmp_1 = transitionState.m45();
      var tmp_2 = transitionState.f45();
      sourceInformationMarkerStart($composer_0, 587432612, 'CC(remember):Transition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($changed & 14 ^ 6) > 4 && $composer_0.h2l(transitionState) || ($changed & 6) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.y2w();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
        var value_0 = rememberTransition$slambda_0(transitionState, null);
        $composer_0.j2x(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect_0(tmp_1, tmp_2, tmp2_group, $composer_0, 0);
      $composer_0.e2v();
    } else {
      $composer_0.c2v(1030922811);
      sourceInformation($composer_0, '835@34989L38');
      transition.aaz(transitionState.f45(), $composer_0, 0);
      $composer_0.e2v();
    }
    sourceInformationMarkerStart($composer_0, 587448196, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_0.h2l(transition);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.y2w();
    var tmp_5;
    if (invalid_1 || it_1 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value_1 = rememberTransition$lambda(transition);
      $composer_0.j2x(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transition, tmp3_group, $composer_0, 0);
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
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.h2l(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0);
      $composer_0.j2x(value);
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
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.h2l(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.h2w(lazyAnim));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value_0 = createDeferredAnimation$lambda(_this__u8e3s4, lazyAnim);
      $composer_0.j2x(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(lazyAnim, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.sax()) {
      lazyAnim.oay();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return lazyAnim;
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
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.h2l(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value = new Transition(new MutableTransitionState(initialState), _this__u8e3s4, '' + _this__u8e3s4.vaq_1 + ' > ' + childLabel);
      $composer_0.j2x(value);
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
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.h2l(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.h2l(transition));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value_0 = createChildTransitionInternal$lambda(_this__u8e3s4, transition);
      $composer_0.j2x(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transition, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.sax()) {
      transition.jaz(initialState, targetState, _this__u8e3s4.ear_1);
    } else {
      transition.gar(targetState);
      transition.eaz(false);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.iaw();
    return Unit_instance;
  }
  function SeekableStateObserver$delegate$lambda() {
    _init_properties_Transition_kt__s6zoln();
    // Inline function 'kotlin.apply' call
    var this_0 = new SnapshotStateObserver(SeekableStateObserver$delegate$lambda$lambda);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.SeekableStateObserver$delegate.<anonymous>.<anonymous>' call
    this_0.l44();
    return this_0;
  }
  function SeekableStateObserver$delegate$lambda$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it();
    return Unit_instance;
  }
  function rememberTransition$slambda($transitionState, resultContinuation) {
    this.ab0_1 = $transitionState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTransition$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(rememberTransition$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTransition$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.ab0_1.haw();
            var tmp_0 = this;
            tmp_0.cb0_1 = this.ab0_1.laq_1;
            var tmp_1 = this;
            tmp_1.db0_1 = null;
            this.n9_1 = 1;
            suspendResult = this.cb0_1.x2c(this.db0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.ab0_1.faq_1 = this.ab0_1.f45();
                var tmp0_safe_receiver = this.ab0_1.kaq_1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  var value = this.ab0_1.f45();
                  tmp0_safe_receiver.y9(_Result___init__impl__xyqfz8(value));
                }
                this.ab0_1.kaq_1 = null;
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.cb0_1.z2c(this.db0_1);
                throw t;
              }
            }
             while (false);
            this.cb0_1.z2c(this.db0_1);
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
  protoOf(rememberTransition$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new rememberTransition$slambda(this.ab0_1, completion);
    i.bb0_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberTransition$slambda_0($transitionState, resultContinuation) {
    var i = new rememberTransition$slambda($transitionState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($transition) {
    this.eb0_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_0).n18 = function () {
    // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.eb0_1.iaz();
  };
  function rememberTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($transition);
    };
  }
  function _no_name_provided__qut3iv_1($this_createDeferredAnimation, $lazyAnim) {
    this.fb0_1 = $this_createDeferredAnimation;
    this.gb0_1 = $lazyAnim;
  }
  protoOf(_no_name_provided__qut3iv_1).n18 = function () {
    // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.fb0_1.naz(this.gb0_1);
  };
  function createDeferredAnimation$lambda($this_createDeferredAnimation, $lazyAnim) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1($this_createDeferredAnimation, $lazyAnim);
    };
  }
  function _no_name_provided__qut3iv_2($this_createChildTransitionInternal, $transition) {
    this.hb0_1 = $this_createChildTransitionInternal;
    this.ib0_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_2).n18 = function () {
    // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>.<anonymous>.<anonymous>' call
    this.hb0_1.laz(this.ib0_1);
  };
  function createChildTransitionInternal$lambda($this_createChildTransitionInternal, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal.kaz($transition);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2($this_createChildTransitionInternal, $transition);
    };
  }
  function SeekableStateObserver$factory() {
    return getPropertyCallableRef('SeekableStateObserver', 0, KProperty0, function () {
      return get_SeekableStateObserver();
    }, null);
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.f45();
    }, function (receiver, value) {
      return receiver.iar(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.f45();
    }, function (receiver, value) {
      return receiver.iar(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.m45();
    }, function (receiver, value) {
      return receiver.bas(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.m45();
    }, function (receiver, value) {
      return receiver.bas(value);
    });
  }
  function fraction$factory() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.mas();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function fraction$factory_0() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.mas();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.kaw();
    }, function (receiver, value) {
      return receiver.aak(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.kaw();
    }, function (receiver, value) {
      return receiver.aak(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.f45();
    }, function (receiver, value) {
      return receiver.iar(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.f45();
    }, function (receiver, value) {
      return receiver.iar(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.tax();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.tax();
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
      return receiver.baz();
    }, function (receiver, value) {
      return receiver.caz(value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.baz();
    }, function (receiver, value) {
      return receiver.caz(value);
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
      return receiver.sax();
    }, function (receiver, value) {
      return receiver.eaz(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.sax();
    }, function (receiver, value) {
      return receiver.eaz(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.lau();
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
      return receiver.eax();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.eax();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.cax();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.cax();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.zax();
    }, function (receiver, value) {
      return receiver.yax(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.zax();
    }, function (receiver, value) {
      return receiver.yax(value);
    });
  }
  function resetSnapValue$factory() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.bay();
    }, function (receiver, value) {
      return receiver.aay(value);
    });
  }
  function resetSnapValue$factory_0() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.bay();
    }, function (receiver, value) {
      return receiver.aay(value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w();
    }, function (receiver, value) {
      return receiver.wae(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w();
    }, function (receiver, value) {
      return receiver.wae(value);
    });
  }
  function durationNanos$factory() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.vax();
    }, function (receiver, value) {
      return receiver.dax(value);
    });
  }
  function durationNanos$factory_0() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.vax();
    }, function (receiver, value) {
      return receiver.dax(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.lay();
    }, function (receiver, value) {
      return receiver.kay(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.lay();
    }, function (receiver, value) {
      return receiver.kay(value);
    });
  }
  function currentState$factory_1() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.m45();
    }, function (receiver, value) {
      return receiver.bas(value);
    });
  }
  function currentState$factory_2() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.m45();
    }, function (receiver, value) {
      return receiver.bas(value);
    });
  }
  function targetState$factory_3() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.f45();
    }, function (receiver, value) {
      return receiver.raz(value);
    });
  }
  function targetState$factory_4() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.f45();
    }, function (receiver, value) {
      return receiver.raz(value);
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
    this.jb0_1 = convertToVector;
    this.kb0_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).baf = function () {
    return this.jb0_1;
  };
  protoOf(TwoWayConverterImpl).faf = function () {
    return this.kb0_1;
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
    return it.yaj_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.yaj_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.w5b_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.yaj_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.d5c_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.d5c_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.cak_1;
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.dak_1;
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.z5a_1), _Size___get_height__impl__a04p02(it.z5a_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.cak_1, it.dak_1));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.v59_1), _Offset___get_y__impl__8bzhra(it.v59_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.cak_1, it.dak_1));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.e5c_1), _IntOffset___get_y__impl__2avpwj(it.e5c_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.cak_1;
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.dak_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$3));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.o5c_1), _IntSize___get_height__impl__prv63b(it.o5c_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.cak_1;
    var tmp$ret$1 = roundToInt(this_0);
    var tmp = coerceAtLeast(tmp$ret$1, 0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.dak_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntSize(IntSize_0(tmp, coerceAtLeast(tmp$ret$3, 0)));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.b5a_1, it.c5a_1, it.d5a_1, it.e5a_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.jak_1, it.kak_1, it.lak_1, it.mak_1);
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
    this.lb0_1 = 10000.0;
    this.mb0_1 = 1500.0;
    this.nb0_1 = 400.0;
    this.ob0_1 = 200.0;
    this.pb0_1 = 50.0;
    this.qb0_1 = 0.2;
    this.rb0_1 = 0.5;
    this.sb0_1 = 0.75;
    this.tb0_1 = 1.0;
    this.ub0_1 = 0.01;
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
    this.vb0_1 = dampingRatio;
    this.wb0_1 = stiffness;
    this.xb0_1 = new VectorizedFloatAnimationSpec(anims);
  }
  protoOf(VectorizedSpringSpec).vai = function () {
    return this.xb0_1.vai();
  };
  protoOf(VectorizedSpringSpec).aaj = function (initialValue, targetValue, initialVelocity) {
    return this.xb0_1.aaj(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).qai = function (initialValue, targetValue, initialVelocity) {
    return this.xb0_1.qai(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).xai = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.xb0_1.xai(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).caj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.xb0_1.caj(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.zb0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.ab1_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.bb1_1;
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
    this.cb1_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).o = function (index) {
    return this.cb1_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.yb0_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).xai = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.zb0_1 == null)) {
      this.zb0_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).eaf(i, this.yb0_1.o(i).kal(playTimeNanos, initialValue.daf(i), targetValue.daf(i), initialVelocity.daf(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).caj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.ab1_1 == null)) {
      this.ab1_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).eaf(i, this.yb0_1.o(i).lal(playTimeNanos, initialValue.daf(i), targetValue.daf(i), initialVelocity.daf(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).qai = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.bb1_1 == null)) {
      this.bb1_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).caf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).eaf(i, this.yb0_1.o(i).mal(initialValue.daf(i), targetValue.daf(i), initialVelocity.daf(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).aaj = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(0, initialValue.caf());
    var inductionVariable = progression.c1_1;
    var last = progression.d1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var it = element;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxDuration;
        var b = this.yb0_1.o(it).nal(initialValue.daf(it), targetValue.daf(it), initialVelocity.daf(it));
        maxDuration = a.b1(b) >= 0 ? a : b;
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
  function VectorizedDurationBasedAnimationSpec() {
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.fb1_1 = durationMillis;
    this.gb1_1 = delayMillis;
    this.hb1_1 = easing;
    this.ib1_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.fb1_1, this.gb1_1, this.hb1_1));
  }
  protoOf(VectorizedTweenSpec).db1 = function () {
    return this.fb1_1;
  };
  protoOf(VectorizedTweenSpec).eb1 = function () {
    return this.gb1_1;
  };
  protoOf(VectorizedTweenSpec).xai = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.ib1_1.xai(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).caj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.ib1_1.caj(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $visibilityThreshold.caf());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.c1_1;
    var last = this_0.d1_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        var index = item;
        var tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.daf(index));
        destination.e(tmp$ret$0);
      }
       while (!(item === last));
    tmp.jb1_1 = destination;
  }
  protoOf(createSpringAnimations$1).o = function (index) {
    return this.jb1_1.o(index);
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.kb1_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).o = function (index) {
    return this.kb1_1;
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
      visibilityThresholdMap = mapOf([to(get_VectorConverter_0(IntCompanionObject_instance), 1.0), to(get_VectorConverter_1(Companion_getInstance_5()), 1.0), to(get_VectorConverter_2(Companion_getInstance_4()), 1.0), to(get_VectorConverter(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance_0()), 0.1), to(get_VectorConverter_7(Companion_getInstance_6()), 0.1)]);
    }
  }
  function AtomicReference(value) {
    this.ian_1 = value;
  }
  protoOf(AtomicReference).zp = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.ian_1;
  };
  protoOf(AtomicReference).s1v = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.ian_1, expect)) {
        // Inline function 'androidx.compose.animation.core.AtomicReference.compareAndSet.<set-delegate>' call
        this.ian_1 = newValue;
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
  protoOf(TargetBasedAnimation).yai = isFinishedFromNanos;
  protoOf(DecayAnimation).yai = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).qai = getEndVelocity;
  protoOf(FloatSpringSpec).oal = vectorize;
  protoOf(FloatTweenSpec).mal = getEndVelocity_0;
  protoOf(FloatTweenSpec).oal = vectorize;
  protoOf(SegmentImpl).jay = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).vai = get_isInfinite;
  protoOf(VectorizedTweenSpec).aaj = getDurationNanos;
  protoOf(VectorizedTweenSpec).vai = get_isInfinite;
  protoOf(VectorizedTweenSpec).qai = getEndVelocity;
  //endregion
  //region block: init
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
  _.$_$.n = SpringSpec;
  _.$_$.o = isTransitioningTo;
  _.$_$.p = Segment;
  _.$_$.q = TweenSpec;
  _.$_$.r = TwoWayConverter;
  _.$_$.s = get_VectorConverter_2;
  _.$_$.t = get_VectorConverter_1;
  _.$_$.u = get_VectorConverter;
  _.$_$.v = get_VisibilityThreshold_4;
  _.$_$.w = get_VisibilityThreshold_5;
  _.$_$.x = animateValueAsState;
  _.$_$.y = copy;
  _.$_$.z = createChildTransitionInternal;
  _.$_$.a1 = createDeferredAnimation;
  _.$_$.b1 = generateDecayAnimationSpec;
  _.$_$.c1 = rememberTransition;
  _.$_$.d1 = spring;
  _.$_$.e1 = tween;
  _.$_$.f1 = AnimationEndReason_Finished_getInstance;
  _.$_$.g1 = animateDecay;
  _.$_$.h1 = animateTo;
  _.$_$.i1 = animate_0;
  _.$_$.j1 = Spring_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
