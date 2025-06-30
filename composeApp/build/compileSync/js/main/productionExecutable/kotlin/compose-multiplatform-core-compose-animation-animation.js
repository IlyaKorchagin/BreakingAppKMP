(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.z5;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.u;
  var equals = kotlin_kotlin.$_$.od;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.oe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var VOID = kotlin_kotlin.$_$.j;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b4;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.q8;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var ParentDataModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var isTransitioningTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var Segment = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var get_lastIndex = kotlin_kotlin.$_$.s9;
  var compareTo = kotlin_kotlin.$_$.ld;
  var get_lastIndex_0 = kotlin_kotlin.$_$.r9;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Spring_instance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y1;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var Enum = kotlin_kotlin.$_$.bk;
  var updateTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s1;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i1;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var hashCode = kotlin_kotlin.$_$.xd;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var toString = kotlin_kotlin.$_$.jf;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var AnimationEndReason_Finished_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c3;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var plus = kotlin_kotlin.$_$.ma;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z3;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var emptyMap = kotlin_kotlin.$_$.p8;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var TransformOrigin__toString_impl_nn7ftd = kotlin_org_jetbrains_compose_ui_ui.$_$.l9;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.i9;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.t9;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.j9;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.k9;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var Long = kotlin_kotlin.$_$.hk;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var coerceIn = kotlin_kotlin.$_$.cg;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.s5;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ContentTransform, 'ContentTransform');
  initMetadataForClass(ChildData, 'ChildData', VOID, VOID, [ParentDataModifier]);
  initMetadataForClass(LayoutModifierWithPassThroughIntrinsics, 'LayoutModifierWithPassThroughIntrinsics', VOID, VOID, [LayoutModifier]);
  initMetadataForClass(SizeModifier, 'SizeModifier', VOID, LayoutModifierWithPassThroughIntrinsics);
  initMetadataForClass(AnimatedContentTransitionScopeImpl, 'AnimatedContentTransitionScopeImpl', VOID, VOID, [Segment]);
  initMetadataForClass(AnimatedContentScopeImpl, 'AnimatedContentScopeImpl');
  initMetadataForClass(AnimatedContentMeasurePolicy, 'AnimatedContentMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(SizeTransformImpl, 'SizeTransformImpl');
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForClass(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl');
  initMetadataForClass(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(SizeAnimationModifierElement, 'SizeAnimationModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(AnimData, 'AnimData');
  initMetadataForLambda(SizeAnimationModifierNode$animateTo$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SizeAnimationModifierNode, 'SizeAnimationModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(ChangeSize, 'ChangeSize');
  initMetadataForClass(Scale, 'Scale');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  initMetadataForClass(FlingInfo, 'FlingInfo');
  initMetadataForClass(FlingCalculator, 'FlingCalculator');
  initMetadataForClass(FlingResult, 'FlingResult');
  initMetadataForObject(AndroidFlingSpline, 'AndroidFlingSpline');
  initMetadataForClass(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec');
  //endregion
  function AnimatedContent(_this__u8e3s4, modifier, transitionSpec, contentAlignment, contentKey, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var transitionSpec_0 = {_v: transitionSpec};
    var contentAlignment_0 = {_v: contentAlignment};
    var contentKey_0 = {_v: contentKey};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-114689412);
    sourceInformation($composer_0, 'C(AnimatedContent)P(3,4,1,2)705@34084L222,711@34405L6,714@34537L7,715@34565L106,719@34759L51,720@34832L69,808@39387L58,809@39479L45,819@39798L52,810@39529L327:AnimatedContent.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f32(transitionSpec_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(contentKey_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.u30()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        sourceInformationMarkerStart($composer_0, -801919159, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.w32();
        var tmp;
        if (false || it === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
          var value = AnimatedContent$lambda;
          this_0.h33(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        transitionSpec_0._v = tmp0_group;
      }
      if (!(($default & 4) === 0)) {
        contentAlignment_0._v = Companion_getInstance_0().m7p_1;
      }
      if (!(($default & 8) === 0)) {
        sourceInformationMarkerStart($composer_0, -801909103, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_1.w32();
        var tmp_1;
        if (false || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
          var value_0 = AnimatedContent$lambda_0;
          this_1.h33(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        contentKey_0._v = tmp1_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-114689412, $dirty, -1, 'androidx.compose.animation.AnimatedContent (AnimatedContent.kt:713)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_2 = get_LocalLayoutDirection();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.n33(this_2);
      sourceInformationMarkerEnd($composer_1);
      var layoutDirection = tmp0;
      sourceInformationMarkerStart($composer_0, -801903883, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_3.w32();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_1 = new AnimatedContentTransitionScopeImpl(_this__u8e3s4, contentAlignment_0._v, layoutDirection);
        this_3.h33(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var rootScope = tmp2_group;
      sourceInformationMarkerStart($composer_0, -801897730, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_4.w32();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_2 = mutableStateListOf([_this__u8e3s4.w4b()]);
        this_4.h33(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var currentlyVisible = tmp3_group;
      sourceInformationMarkerStart($composer_0, -801895376, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_5.w32();
      var tmp_7;
      if (invalid_1 || it_3 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_3 = mutableScatterMapOf();
        this_5.h33(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var contentMap = tmp4_group;
      if (!currentlyVisible.ch(_this__u8e3s4.w4b())) {
        currentlyVisible.n2();
        currentlyVisible.j2y(_this__u8e3s4.w4b());
      }
      if (equals(_this__u8e3s4.w4b(), _this__u8e3s4.p4b())) {
        if (!(currentlyVisible.p() === 1) || !equals(currentlyVisible.u(0), _this__u8e3s4.w4b())) {
          currentlyVisible.n2();
          currentlyVisible.j2y(_this__u8e3s4.w4b());
        }
        if (!(contentMap.p() === 1) || contentMap.q2(_this__u8e3s4.w4b())) {
          contentMap.n2();
        }
        rootScope.yc9_1 = contentAlignment_0._v;
        rootScope.zc9_1 = layoutDirection;
      }
      if (!equals(_this__u8e3s4.w4b(), _this__u8e3s4.p4b()) && !currentlyVisible.ch(_this__u8e3s4.p4b())) {
        var tmp$ret$22;
        $l$block: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index = 0;
          var tmp0_iterator = currentlyVisible.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
            if (equals(contentKey_0._v(item), contentKey_0._v(_this__u8e3s4.p4b()))) {
              tmp$ret$22 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$22 = -1;
        }
        var id = tmp$ret$22;
        if (id === -1) {
          currentlyVisible.j2y(_this__u8e3s4.p4b());
        } else {
          currentlyVisible.b3t(id, _this__u8e3s4.p4b());
        }
      }
      $composer_0.a31(-801837164);
      sourceInformation($composer_0, '*756@36778L2565');
      if (!contentMap.q2(_this__u8e3s4.p4b()) || !contentMap.q2(_this__u8e3s4.w4b())) {
        contentMap.n2();
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = currentlyVisible.p() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_0 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_0 = currentlyVisible.u(index_0);
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(885640742, true, AnimatedContent$lambda_1(transitionSpec_0, rootScope, _this__u8e3s4, item_0, currentlyVisible, content), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = $composer_2.f2r(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_4 = $composer_2.w32();
            var tmp_9;
            if (invalid_2 || it_4 === Companion_getInstance().l2u_1) {
              // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>' call
              var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
              $composer_2.h33(value_4);
              tmp_9 = value_4;
            } else {
              tmp_9 = it_4;
            }
            var tmp_10 = tmp_9;
            var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            contentMap.k10(item_0, tmp0_0);
          }
           while (inductionVariable <= last);
      }
      $composer_0.c31();
      var tmp5_remember$arg$1 = _this__u8e3s4.zbp();
      sourceInformationMarkerStart($composer_0, -801749627, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      var invalid_3 = !!($composer_0.f2r(rootScope) | $composer_0.f2r(tmp5_remember$arg$1));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_6.w32();
      var tmp_11;
      if (invalid_3 || it_5 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_5 = transitionSpec_0._v(rootScope);
        this_6.h33(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var contentTransform = tmp6_group;
      var sizeModifier = rootScope.dca(contentTransform, $composer_0, 0);
      var tmp0_modifier = modifier_0._v.i7q(sizeModifier);
      sourceInformationMarkerStart($composer_0, -801736481, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = this_7.w32();
      var tmp_13;
      if (false || it_6 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_6 = new AnimatedContentMeasurePolicy(rootScope);
        this_7.h33(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = tmp0_modifier;
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
      var localMap = $composer_3.u32();
      var materialized = materialize($composer_3, modifier_1);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_15 = $composer_4.v30();
      if (!isInterface(tmp_15, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp7_group, Companion_getInstance_1().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
      // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1023567688, 'C:AnimatedContent.kt#xbi5r1');
      $composer_5.a31(-1491001814);
      sourceInformation($composer_5, '');
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = currentlyVisible.p() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_1 = currentlyVisible.u(index_1);
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>' call
          $composer_5.b2x(1908315325, contentKey_0._v(item_1));
          sourceInformation($composer_5, '815@39722L8');
          var tmp0_safe_receiver = contentMap.s2(item_1);
          tmp0_safe_receiver == null || tmp0_safe_receiver($composer_5, 0);
          $composer_5.e2x();
        }
         while (inductionVariable_0 <= last_0);
      $composer_5.c31();
      sourceInformationMarkerEnd($composer_5);
      $composer_4.u31();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp8_safe_receiver = $composer_0.w33();
    if (tmp8_safe_receiver == null)
      null;
    else {
      tmp8_safe_receiver.n38(AnimatedContent$lambda_2(_this__u8e3s4, modifier_0, transitionSpec_0, contentAlignment_0, contentKey_0, content, $changed, $default));
    }
  }
  function ContentTransform(targetContentEnter, initialContentExit, targetContentZIndex, sizeTransform) {
    targetContentZIndex = targetContentZIndex === VOID ? 0.0 : targetContentZIndex;
    sizeTransform = sizeTransform === VOID ? SizeTransform() : sizeTransform;
    this.eca_1 = targetContentEnter;
    this.fca_1 = initialContentExit;
    this.gca_1 = mutableFloatStateOf(targetContentZIndex);
    this.hca_1 = sizeTransform;
  }
  protoOf(ContentTransform).ica = function (_set____db54di) {
    var this_0 = this.gca_1;
    targetContentZIndex$factory();
    this_0.n3j(_set____db54di);
    return Unit_instance;
  };
  protoOf(ContentTransform).jca = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.gca_1;
    targetContentZIndex$factory_0();
    return this_0.o3j();
  };
  function togetherWith(_this__u8e3s4, exit) {
    return new ContentTransform(_this__u8e3s4, exit);
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this$0, this$1) {
    return function ($this$animate) {
      var tmp0_safe_receiver = this$0.bca_1.s2($this$animate.sbp());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.c1();
        tmp = tmp_0 == null ? null : tmp_0.o5j_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_2().n5j_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var initial = tmp_1;
      var tmp2_safe_receiver = this$0.bca_1.s2($this$animate.p4b());
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = tmp2_safe_receiver.c1();
        tmp_3 = tmp_4 == null ? null : tmp_4.o5j_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_2().n5j_1;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var target = tmp_5;
      var tmp4_safe_receiver = this$1.lca_1.c1();
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.nca(initial, target);
      return tmp5_elvis_lhs == null ? spring() : tmp5_elvis_lhs;
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.bca_1.s2(it);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.c1();
        tmp = tmp_0 == null ? null : tmp_0.o5j_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_2().n5j_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      return new IntSize(tmp_1);
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1(this$0, $placeable, $measuredSize) {
    return function ($this$layout) {
      var offset = this$0.yc9_1.h7q(IntSize_0($placeable.l7y_1, $placeable.m7y_1), $measuredSize, LayoutDirection_Ltr_getInstance());
      $this$layout.b97($placeable, offset);
      return Unit_instance;
    };
  }
  function ChildData(isTarget) {
    this.oca_1 = mutableStateOf(isTarget);
  }
  protoOf(ChildData).pca = function (_set____db54di) {
    var this_0 = this.oca_1;
    isTarget$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(ChildData).qca = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.oca_1;
    isTarget$factory_0();
    return this_0.c1();
  };
  protoOf(ChildData).u94 = function (_this__u8e3s4, parentData) {
    return this;
  };
  function SizeModifier($outer, sizeAnimation, sizeTransform) {
    this.mca_1 = $outer;
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.kca_1 = sizeAnimation;
    this.lca_1 = sizeTransform;
  }
  protoOf(SizeModifier).j7y = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.k7y(constraints);
    var tmp = AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this.mca_1, this);
    var size = this.kca_1.sbq(tmp, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this.mca_1));
    this.mca_1.cca_1 = size;
    var measuredSize;
    if (_this__u8e3s4.s92()) {
      measuredSize = IntSize_0(placeable.l7y_1, placeable.m7y_1);
    } else {
      measuredSize = size.c1().o5j_1;
    }
    var tmp_0 = _IntSize___get_width__impl__d9yl4o(measuredSize);
    var tmp_1 = _IntSize___get_height__impl__prv63b(measuredSize);
    return _this__u8e3s4.q7y(tmp_0, tmp_1, VOID, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1(this.mca_1, placeable, measuredSize));
  };
  function createSizeAnimationModifier$lambda($shouldAnimateSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateSize$delegate.c1();
  }
  function createSizeAnimationModifier$lambda_0($shouldAnimateSize$delegate, value) {
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $shouldAnimateSize$delegate.a1y(value);
    return Unit_instance;
  }
  function AnimatedContentTransitionScopeImpl(transition, contentAlignment, layoutDirection) {
    this.xc9_1 = transition;
    this.yc9_1 = contentAlignment;
    this.zc9_1 = layoutDirection;
    this.aca_1 = mutableStateOf(new IntSize(Companion_getInstance_2().n5j_1));
    this.bca_1 = mutableScatterMapOf();
    this.cca_1 = null;
  }
  protoOf(AnimatedContentTransitionScopeImpl).sbp = function () {
    return this.xc9_1.zbp().sbp();
  };
  protoOf(AnimatedContentTransitionScopeImpl).p4b = function () {
    return this.xc9_1.zbp().p4b();
  };
  protoOf(AnimatedContentTransitionScopeImpl).rca = function (_set____db54di) {
    var this_0 = this.aca_1;
    measuredSize$factory();
    var value = new IntSize(_set____db54di);
    this_0.a1y(value);
    return Unit_instance;
  };
  protoOf(AnimatedContentTransitionScopeImpl).sca = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.aca_1;
    measuredSize$factory_0();
    return this_0.c1().o5j_1;
  };
  protoOf(AnimatedContentTransitionScopeImpl).dca = function (contentTransform, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 93755870, 'C(createSizeAnimationModifier)574@27302L40,575@27371L52:AnimatedContent.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(93755870, $changed, -1, 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier (AnimatedContent.kt:573)');
    }
    sourceInformationMarkerStart($composer_0, -546171924, 'CC(remember):AnimatedContent.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.f2r(this);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var shouldAnimateSize$delegate = tmp1_group;
    var sizeTransform = rememberUpdatedState(contentTransform.hca_1, $composer_0, 0);
    if (equals(this.xc9_1.w4b(), this.xc9_1.p4b())) {
      createSizeAnimationModifier$lambda_0(shouldAnimateSize$delegate, false);
    } else {
      if (!(sizeTransform.c1() == null)) {
        createSizeAnimationModifier$lambda_0(shouldAnimateSize$delegate, true);
      }
    }
    $composer_0.a31(-546156510);
    sourceInformation($composer_0, '585@27840L48,586@27901L205');
    var tmp_1;
    if (createSizeAnimationModifier$lambda(shouldAnimateSize$delegate)) {
      var tmp_2 = get_VectorConverter(Companion_getInstance_2());
      var sizeAnimation = createDeferredAnimation(this.xc9_1, tmp_2, null, $composer_0, 0, 2);
      sourceInformationMarkerStart($composer_0, -546152591, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.f2r(sizeAnimation);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.w32();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier.<anonymous>' call
        var tmp_4;
        var tmp0_safe_receiver = sizeTransform.c1();
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tca()) === false) {
          tmp_4 = Companion_instance;
        } else {
          tmp_4 = clipToBounds(Companion_instance);
        }
        var value_0 = tmp_4.i7q(new SizeModifier(this, sizeAnimation, sizeTransform));
        $composer_0.h33(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_5 = tmp_3;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_1 = tmp2_group;
    } else {
      this.cca_1 = null;
      tmp_1 = Companion_instance;
    }
    var tmp3_group = tmp_1;
    $composer_0.c31();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp3_group;
  };
  function AnimatedContentScopeImpl(animatedVisibilityScope) {
    this.uca_1 = animatedVisibilityScope;
  }
  function AnimatedContentMeasurePolicy$measure$lambda($placeables, this$0, $maxWidth, $maxHeight) {
    return function ($this$layout) {
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>' call
        if (element == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var offset = this$0.vca_1.yc9_1.h7q(IntSize_0(element.l7y_1, element.m7y_1), IntSize_0($maxWidth, $maxHeight), LayoutDirection_Ltr_getInstance());
          $this$layout.z96(element, _IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset));
        }
      }
      return Unit_instance;
    };
  }
  function AnimatedContentMeasurePolicy(rootScope) {
    this.vca_1 = rootScope;
  }
  protoOf(AnimatedContentMeasurePolicy).g96 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.p();
    var placeables = fillArrayVal(Array(size), null);
    var targetSize = Companion_getInstance_2().n5j_1;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.u(index);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp = item.k93();
        var tmp0_safe_receiver = tmp instanceof ChildData ? tmp : null;
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qca()) === true) {
          // Inline function 'kotlin.also' call
          var this_0 = item.k7y(constraints);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>' call
          targetSize = IntSize_0(this_0.l7y_1, this_0.m7y_1);
          placeables[index] = this_0;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = measurables.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = measurables.u(index_0);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        if (placeables[index_0] == null) {
          placeables[index_0] = item_0.k7y(constraints);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (_this__u8e3s4.s92()) {
      tmp_0 = _IntSize___get_width__impl__d9yl4o(targetSize);
    } else {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (placeables.length === 0) {
          tmp$ret$3 = null;
          break $l$block_0;
        }
        var maxElem = placeables[0];
        var lastIndex = get_lastIndex(placeables);
        if (lastIndex === 0) {
          tmp$ret$3 = maxElem;
          break $l$block_0;
        }
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp0_safe_receiver_0 = maxElem;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.l7y_1;
        var maxValue = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var inductionVariable_1 = 1;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var e = placeables[i];
            // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
            var tmp1_elvis_lhs_0 = e == null ? null : e.l7y_1;
            var v = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === lastIndex));
        tmp$ret$3 = maxElem;
      }
      var tmp0_safe_receiver_1 = tmp$ret$3;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.l7y_1;
      tmp_0 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    }
    var maxWidth = tmp_0;
    var tmp_1;
    if (_this__u8e3s4.s92()) {
      tmp_1 = _IntSize___get_height__impl__prv63b(targetSize);
    } else {
      var tmp$ret$7;
      $l$block_2: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (placeables.length === 0) {
          tmp$ret$7 = null;
          break $l$block_2;
        }
        var maxElem_0 = placeables[0];
        var lastIndex_0 = get_lastIndex(placeables);
        if (lastIndex_0 === 0) {
          tmp$ret$7 = maxElem_0;
          break $l$block_2;
        }
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp0_safe_receiver_2 = maxElem_0;
        var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.m7y_1;
        var maxValue_0 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
        var inductionVariable_2 = 1;
        if (inductionVariable_2 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var e_0 = placeables[i_0];
            // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
            var tmp1_elvis_lhs_3 = e_0 == null ? null : e_0.m7y_1;
            var v_0 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
            if (compareTo(maxValue_0, v_0) < 0) {
              maxElem_0 = e_0;
              maxValue_0 = v_0;
            }
          }
           while (!(i_0 === lastIndex_0));
        tmp$ret$7 = maxElem_0;
      }
      var tmp2_safe_receiver = tmp$ret$7;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m7y_1;
      tmp_1 = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    }
    var maxHeight = tmp_1;
    if (!_this__u8e3s4.s92()) {
      this.vca_1.rca(IntSize_0(maxWidth, maxHeight));
    }
    return _this__u8e3s4.q7y(maxWidth, maxHeight, VOID, AnimatedContentMeasurePolicy$measure$lambda(placeables, this, maxWidth, maxHeight));
  };
  protoOf(AnimatedContentMeasurePolicy).h96 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.u(0).s7y(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicWidth.<anonymous>' call
          var v = measurables.u(i).s7y(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).i96 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.u(0).w7y(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.minIntrinsicHeight.<anonymous>' call
          var v = measurables.u(i).w7y(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).j96 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.u(0).u7y(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
          var v = measurables.u(i).u7y(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).k96 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.u(0).y7y(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
          var v = measurables.u(i).y7y(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  function SizeTransform(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    var tmp;
    if (sizeAnimationSpec === VOID) {
      tmp = SizeTransform$lambda;
    } else {
      tmp = sizeAnimationSpec;
    }
    sizeAnimationSpec = tmp;
    return new SizeTransformImpl(clip, sizeAnimationSpec);
  }
  function SizeTransformImpl(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    this.wca_1 = clip;
    this.xca_1 = sizeAnimationSpec;
  }
  protoOf(SizeTransformImpl).tca = function () {
    return this.wca_1;
  };
  protoOf(SizeTransformImpl).nca = function (initialSize, targetSize) {
    return this.xca_1(new IntSize(initialSize), new IntSize(targetSize));
  };
  function AnimatedContent$lambda($this$null) {
    var tmp = fadeIn(tween(220, 90));
    var tmp0_animationSpec = tween(220, 90);
    return togetherWith(tmp.yca(scaleIn(tmp0_animationSpec, 0.92)), fadeOut(tween(90)));
  }
  function AnimatedContent$lambda_0(it) {
    return it;
  }
  function AnimatedContent$lambda$lambda$lambda($placeable, $specOnEnter) {
    return function ($this$layout) {
      $this$layout.y96($placeable, 0, 0, $specOnEnter.jca());
      return Unit_instance;
    };
  }
  function AnimatedContent$lambda$lambda($specOnEnter) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.k7y(constraints.v5h_1);
      var tmp = placeable.l7y_1;
      var tmp_0 = placeable.m7y_1;
      return $this$layout.q7y(tmp, tmp_0, VOID, AnimatedContent$lambda$lambda$lambda(placeable, $specOnEnter));
    };
  }
  function AnimatedContent$lambda$lambda_0($stateForContent) {
    return function (it) {
      return equals(it, $stateForContent);
    };
  }
  function AnimatedContent$lambda$lambda_1($exit) {
    return function (currentState, targetState) {
      return currentState.equals(EnterExitState_PostExit_getInstance()) && targetState.equals(EnterExitState_PostExit_getInstance()) && !$exit.fcb().dcb_1;
    };
  }
  function _no_name_provided__qut3iv($currentlyVisible, $stateForContent, $rootScope) {
    this.gcb_1 = $currentlyVisible;
    this.hcb_1 = $stateForContent;
    this.icb_1 = $rootScope;
  }
  protoOf(_no_name_provided__qut3iv).v18 = function () {
    // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.gcb_1.n3g(this.hcb_1);
    this.icb_1.bca_1.l2(this.hcb_1);
  };
  function AnimatedContent$lambda$lambda$lambda_0($currentlyVisible, $stateForContent, $rootScope) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($currentlyVisible, $stateForContent, $rootScope);
    };
  }
  function AnimatedContent$lambda$lambda_2($currentlyVisible, $stateForContent, $rootScope, $content) {
    return function ($this$AnimatedEnterExitImpl, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C793@38802L230,793@38779L253,*801@39194L43,802@39265L24:AnimatedContent.kt#xbi5r1');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f2r($this$AnimatedEnterExitImpl) : $composer_0.f32($this$AnimatedEnterExitImpl)) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-616195562, $dirty, -1, 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous> (AnimatedContent.kt:793)');
        }
        sourceInformationMarkerStart($composer_0, 641996302, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!($composer_0.f2r($currentlyVisible) | $composer_0.f32($stateForContent)) | $composer_0.f32($rootScope));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.w32();
        var tmp_1;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = AnimatedContent$lambda$lambda$lambda_0($currentlyVisible, $stateForContent, $rootScope);
          $composer_0.h33(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect($this$AnimatedEnterExitImpl, tmp0_group, $composer_0, 14 & $dirty);
        $rootScope.bca_1.k10($stateForContent, ($this$AnimatedEnterExitImpl instanceof AnimatedVisibilityScopeImpl ? $this$AnimatedEnterExitImpl : THROW_CCE()).kcb_1);
        // Inline function 'kotlin.with' call
        sourceInformationMarkerStart($composer_0, 642008659, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.w32();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = new AnimatedContentScopeImpl($this$AnimatedEnterExitImpl);
          $composer_0.h33(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.contracts.contract' call
        $content(tmp1_group, $stateForContent, $composer_0, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.c2u();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function AnimatedContent$lambda_1($transitionSpec, $rootScope, $this_AnimatedContent, $stateForContent, $currentlyVisible, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C757@36814L38,761@37028L323,768@37384L125,779@37953L328,775@37761L25,786@38417L233,791@38669L660,773@37692L1637:AnimatedContent.kt#xbi5r1');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(885640742, $changed, -1, 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous> (AnimatedContent.kt:757)');
        }
        sourceInformationMarkerStart($composer_0, 1908224079, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.w32();
        var tmp_0;
        if (false || it === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = $transitionSpec._v($rootScope);
          $composer_0.h33(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var specOnEnter = tmp0_group;
        var tmp1_remember$arg$0 = equals($this_AnimatedContent.zbp().p4b(), $stateForContent);
        sourceInformationMarkerStart($composer_0, 1908231212, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.g32(tmp1_remember$arg$0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.w32();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3;
          if (equals($this_AnimatedContent.zbp().p4b(), $stateForContent)) {
            tmp_3 = Companion_getInstance_7().lcb_1;
          } else {
            tmp_3 = $transitionSpec._v($rootScope).fca_1;
          }
          var value_0 = tmp_3;
          $composer_0.h33(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_4 = tmp_2;
        var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var exit = tmp2_group;
        sourceInformationMarkerStart($composer_0, 1908242406, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.w32();
        var tmp_5;
        if (false || it_1 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = new ChildData(equals($stateForContent, $this_AnimatedContent.p4b()));
          $composer_0.h33(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var childData = tmp3_group;
        var tmp0_enter = specOnEnter.eca_1;
        var tmp_7 = Companion_instance;
        sourceInformationMarkerStart($composer_0, 1908260817, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.f32(specOnEnter);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.w32();
        var tmp_8;
        if (invalid_0 || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = AnimatedContent$lambda$lambda(specOnEnter);
          $composer_0.h33(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_10 = layout(tmp_7, tmp4_group);
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        childData.pca(equals($stateForContent, $this_AnimatedContent.p4b()));
        var tmp1_modifier = tmp_10.i7q(childData);
        sourceInformationMarkerStart($composer_0, 1908254370, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.f32($stateForContent);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.w32();
        var tmp_11;
        if (invalid_1 || it_3 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = AnimatedContent$lambda$lambda_0($stateForContent);
          $composer_0.h33(value_3);
          tmp_11 = value_3;
        } else {
          tmp_11 = it_3;
        }
        var tmp_12 = tmp_11;
        var tmp5_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        sourceInformationMarkerStart($composer_0, 1908275570, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_0.f2r(exit);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_0.w32();
        var tmp_13;
        if (invalid_2 || it_4 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = AnimatedContent$lambda$lambda_1(exit);
          $composer_0.h33(value_4);
          tmp_13 = value_4;
        } else {
          tmp_13 = it_4;
        }
        var tmp_14 = tmp_13;
        var tmp6_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-616195562, true, AnimatedContent$lambda$lambda_2($currentlyVisible, $stateForContent, $rootScope, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_1.f2r(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_1.w32();
        var tmp_15;
        if (invalid_3 || it_5 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_5 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.h33(value_5);
          tmp_15 = value_5;
        } else {
          tmp_15 = it_5;
        }
        var tmp_16 = tmp_15;
        var tmp0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        AnimatedEnterExitImpl($this_AnimatedContent, tmp5_group, tmp1_modifier, tmp0_enter, exit, tmp6_group, null, tmp0, $composer_0, 12582912, 64);
        var tmp_17;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_17 = Unit_instance;
        }
        tmp = tmp_17;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function AnimatedContent$lambda_2($this_AnimatedContent, $modifier, $transitionSpec, $contentAlignment, $contentKey, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedContent($this_AnimatedContent, $modifier._v, $transitionSpec._v, $contentAlignment._v, $contentKey._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SizeTransform$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
  }
  function targetContentZIndex$factory() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.jca();
    }, function (receiver, value) {
      return receiver.ica(value);
    });
  }
  function targetContentZIndex$factory_0() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.jca();
    }, function (receiver, value) {
      return receiver.ica(value);
    });
  }
  function measuredSize$factory() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.sca());
    }, function (receiver, value) {
      return receiver.rca(value.o5j_1);
    });
  }
  function measuredSize$factory_0() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.sca());
    }, function (receiver, value) {
      return receiver.rca(value.o5j_1);
    });
  }
  function isTarget$factory() {
    return getPropertyCallableRef('isTarget', 1, KMutableProperty1, function (receiver) {
      return receiver.qca();
    }, function (receiver, value) {
      return receiver.pca(value);
    });
  }
  function isTarget$factory_0() {
    return getPropertyCallableRef('isTarget', 1, KMutableProperty1, function (receiver) {
      return receiver.qca();
    }, function (receiver, value) {
      return receiver.pca(value);
    });
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_instance;
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedVisibility(visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(2088733774);
    sourceInformation($composer_0, 'C(AnimatedVisibility)P(5,4,1,2,3)132@6967L32,133@7039L6,133@7004L84:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(visible) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(enter_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(exit_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f2r(label_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.u30()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().yca(expandIn());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = shrinkOut().ncb(fadeOut());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(2088733774, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility (AnimatedVisibility.kt:131)');
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty | 112 & $dirty >> 9, 0);
      sourceInformationMarkerStart($composer_0, 1359532422, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibility.<anonymous>' call
        var value = AnimatedVisibility$lambda;
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedVisibilityImpl(transition, tmp0_group, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 48 | 896 & $dirty << 3 | 7168 & $dirty << 3 | 57344 & $dirty << 3 | 458752 & $dirty);
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
      tmp1_safe_receiver.n38(AnimatedVisibility$lambda_0(visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityImpl(transition, visible, modifier, enter, exit, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(429978603);
    sourceInformation($composer_0, 'C(AnimatedVisibilityImpl)P(4,5,3,1,2)697@38299L415,711@38789L62,694@38181L703:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f2r(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(429978603, $dirty, -1, 'androidx.compose.animation.AnimatedVisibilityImpl (AnimatedVisibility.kt:693)');
      }
      sourceInformationMarkerStart($composer_0, 689212639, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibilityImpl.<anonymous>' call
        var value = AnimatedVisibilityImpl$lambda(visible, transition);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_1 = layout(modifier, tmp0_group);
      sourceInformationMarkerStart($composer_0, 689227966, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibilityImpl.<anonymous>' call
        var value_0 = AnimatedVisibilityImpl$lambda_0;
        this_1.h33(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedEnterExitImpl(transition, visible, tmp_1, enter, exit, tmp1_group, null, content, $composer_0, 196608 | 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 29360128 & $dirty << 6, 64);
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
      tmp2_safe_receiver.n38(AnimatedVisibilityImpl$lambda_1(transition, visible, modifier, enter, exit, content, $changed));
    }
  }
  function AnimatedEnterExitImpl(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured, content, $composer, $changed, $default) {
    var onLookaheadMeasured_0 = {_v: onLookaheadMeasured};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-891967166);
    sourceInformation($composer_0, 'C(AnimatedEnterExitImpl)P(6,7,3,1,2,5,4)741@39659L116,745@39818L40,752@40073L399,747@39898L574,768@40570L69,773@40810L47,794@41913L50,769@40652L1325:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(transition) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(visible) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(enter) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f2r(exit) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(shouldDisposeBlock) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.f2r(onLookaheadMeasured_0._v) : $composer_0.f32(onLookaheadMeasured_0._v)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.f32(content) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.u30()) {
      if (!(($default & 64) === 0)) {
        onLookaheadMeasured_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-891967166, $dirty, -1, 'androidx.compose.animation.AnimatedEnterExitImpl (AnimatedVisibility.kt:737)');
      }
      if (visible(transition.p4b()) || visible(transition.w4b()) || transition.ybp() || transition.lbr()) {
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var $changed_0 = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1215497572, 'CC(createChildTransition)1814@74186L36,1815@74246L74,1816@74343L39,1817@74394L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 272028789, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.f2r(transition) || ($changed_0 & 6) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.w32();
        var tmp;
        if (invalid || it === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.core.createChildTransition.<anonymous>' call
          var value = transition.w4b();
          $composer_1.h33(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var it_0 = transition.ybp() ? transition.w4b() : initialParentState;
        var $changed_1 = 112 & $changed_0 >> 3;
        var $composer_2 = $composer_1;
        $composer_2.a31(-466616829);
        sourceInformation($composer_2, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_1, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0 = targetEnterExit(transition, visible, it_0, $composer_2, 14 & $dirty | 112 & $dirty | 896 & $changed_1 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_2.c31();
        var initialState = tmp0;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var it_1 = transition.p4b();
        var $changed_2 = 112 & $changed_0 >> 3;
        var $composer_3 = $composer_1;
        $composer_3.a31(-466616829);
        sourceInformation($composer_3, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_2, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0_0 = targetEnterExit(transition, visible, it_1, $composer_3, 14 & $dirty | 112 & $dirty | 896 & $changed_2 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_3.c31();
        var targetState = tmp0_0;
        var tmp0_1 = createChildTransitionInternal(transition, initialState, targetState, label, $composer_1, 14 & $changed_0 | 7168 & $changed_0 << 6);
        sourceInformationMarkerEnd($composer_1);
        var childTransition = tmp0_1;
        var shouldDisposeBlockUpdated$delegate = rememberUpdatedState(shouldDisposeBlock, $composer_0, 14 & $dirty >> 15);
        var tmp_1 = shouldDisposeBlock(childTransition.w4b(), childTransition.p4b());
        sourceInformationMarkerStart($composer_0, 1581710007, 'CC(remember):AnimatedVisibility.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid_0 = !!($composer_0.f2r(childTransition) | $composer_0.f2r(shouldDisposeBlockUpdated$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = this_0.w32();
        var tmp_2;
        if (invalid_0 || it_2 === Companion_getInstance().l2u_1) {
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var value_0 = AnimatedEnterExitImpl$slambda_0(childTransition, shouldDisposeBlockUpdated$delegate, null);
          this_0.h33(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_2;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var shouldDisposeAfterExit$delegate = produceState(tmp_1, tmp0_group, $composer_0, 0);
        if (!get_exitFinished(childTransition) || !AnimatedEnterExitImpl$lambda_0(shouldDisposeAfterExit$delegate)) {
          sourceInformationMarkerStart($composer_0, 1581725581, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_1 = $composer_0;
          var invalid_1 = ($dirty & 14) === 4;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_3 = this_1.w32();
          var tmp_4;
          if (invalid_1 || it_3 === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_1 = new AnimatedVisibilityScopeImpl(childTransition);
            this_1.h33(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_3;
          }
          var tmp_5 = tmp_4;
          var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          var scope = tmp1_group_0;
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var tmp_6 = createModifier(childTransition, enter, exit, null, 'Built-in', $composer_0, 24576 | 112 & $dirty >> 6 | 896 & $dirty >> 6, 4);
          $composer_0.a31(1581736656);
          sourceInformation($composer_0, '775@40967L849');
          var tmp_7;
          if (!(onLookaheadMeasured_0._v == null)) {
            var tmp_8 = Companion_instance;
            sourceInformationMarkerStart($composer_0, 1581739065, 'CC(remember):AnimatedVisibility.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var this_2 = $composer_0;
            var invalid_2 = ($dirty & 3670016) === 1048576 || (!(($dirty & 2097152) === 0) && $composer_0.f32(onLookaheadMeasured_0._v));
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_4 = this_2.w32();
            var tmp_9;
            if (invalid_2 || it_4 === Companion_getInstance().l2u_1) {
              // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
              var value_2 = AnimatedEnterExitImpl$lambda_1(onLookaheadMeasured_0);
              this_2.h33(value_2);
              tmp_9 = value_2;
            } else {
              tmp_9 = it_4;
            }
            var tmp_10 = tmp_9;
            var tmp2_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_0);
            tmp_7 = layout(tmp_8, tmp2_group);
          } else {
            tmp_7 = Companion_instance;
          }
          var tmp3_group = tmp_7;
          $composer_0.c31();
          var modifier_0 = modifier.i7q(tmp_6.i7q(tmp3_group));
          sourceInformationMarkerStart($composer_0, 1581768538, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_3 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_5 = this_3.w32();
          var tmp_11;
          if (false || it_5 === Companion_getInstance().l2u_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_3 = new AnimatedEnterExitMeasurePolicy(scope);
            this_3.h33(value_3);
            tmp_11 = value_3;
          } else {
            tmp_11 = it_5;
          }
          var tmp_12 = tmp_11;
          var tmp4_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          var modifier_1 = modifier_0;
          var $composer_4 = $composer_0;
          sourceInformationMarkerStart($composer_4, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_1 = Companion_instance;
          var compositeKeyHash = get_currentCompositeKeyHash($composer_4, 0);
          var localMap = $composer_4.u32();
          var materialized = materialize($composer_4, modifier_1);
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var factory = Companion_getInstance_1().s9e_1;
          var $composer_5 = $composer_4;
          sourceInformationMarkerStart($composer_5, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
          var tmp_13 = $composer_5.v30();
          if (!isInterface(tmp_13, Applier)) {
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
          Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp4_group, Companion_getInstance_1().x9e_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().w9e_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block = Companion_getInstance_1().a9f_1;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
          if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
            $this$with.h33(compositeKeyHash);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().u9e_1);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var $composer_6 = $composer_5;
          sourceInformationMarkerStart($composer_6, 254461613, 'C770@40694L9:AnimatedVisibility.kt#xbi5r1');
          content(scope, $composer_6, 112 & $dirty >> 18);
          sourceInformationMarkerEnd($composer_6);
          $composer_5.u31();
          sourceInformationMarkerEnd($composer_5);
          sourceInformationMarkerEnd($composer_4);
        }
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
      tmp5_safe_receiver.n38(AnimatedEnterExitImpl$lambda_2(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured_0, content, $changed, $default));
    }
  }
  function targetEnterExit(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 361571134, 'C(targetEnterExit)P(1):AnimatedVisibility.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(361571134, $changed, -1, 'androidx.compose.animation.targetEnterExit (AnimatedVisibility.kt:855)');
    }
    $composer_0.b2x(-902048200, _this__u8e3s4);
    sourceInformation($composer_0, '868@44365L34');
    var tmp;
    if (_this__u8e3s4.ybp()) {
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.w4b())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      sourceInformationMarkerStart($composer_0, -902039492, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_2;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.targetEnterExit.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_0.h33(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp2_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var hasBeenVisible = tmp2_group;
      if (visible(_this__u8e3s4.w4b())) {
        hasBeenVisible.a1y(true);
      }
      var tmp_4;
      if (visible(targetState)) {
        tmp_4 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_5;
        if (hasBeenVisible.c1()) {
          tmp_5 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_5 = EnterExitState_PreEnter_getInstance();
        }
        tmp_4 = tmp_5;
      }
      tmp = tmp_4;
    }
    var tmp1 = tmp;
    $composer_0.e2x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function get_exitFinished(_this__u8e3s4) {
    return _this__u8e3s4.w4b().equals(EnterExitState_PostExit_getInstance()) && _this__u8e3s4.p4b().equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.jcb_1 = transition;
    this.kcb_1 = mutableStateOf(new IntSize(Companion_getInstance_2().n5j_1));
  }
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      var this_0 = $placeables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.p() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.u(index);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>.<anonymous>' call
          $this$layout.z96(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.ocb_1 = scope;
    this.pcb_1 = false;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).g96 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(measurables.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.u(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
        var element = item.k7y(constraints);
        target.e(element);
      }
       while (inductionVariable <= last);
    var placeables = target;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.j()) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var maxElem = placeables.u(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue = maxElem.l7y_1;
      var inductionVariable_0 = 1;
      var last_0 = get_lastIndex_0(placeables);
      if (inductionVariable_0 <= last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var e = placeables.u(i);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v = e.l7y_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === last_0));
      tmp$ret$2 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l7y_1;
    var maxWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.j()) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var maxElem_0 = placeables.u(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue_0 = maxElem_0.m7y_1;
      var inductionVariable_1 = 1;
      var last_1 = get_lastIndex_0(placeables);
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var e_0 = placeables.u(i_0);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v_0 = e_0.m7y_1;
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (!(i_0 === last_1));
      tmp$ret$5 = maxElem_0;
    }
    var tmp2_safe_receiver = tmp$ret$5;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m7y_1;
    var maxHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    if (_this__u8e3s4.s92()) {
      this.pcb_1 = true;
      this.ocb_1.kcb_1.a1y(new IntSize(IntSize_0(maxWidth, maxHeight)));
    } else if (!this.pcb_1) {
      this.ocb_1.kcb_1.a1y(new IntSize(IntSize_0(maxWidth, maxHeight)));
    }
    return _this__u8e3s4.q7y(maxWidth, maxHeight, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  protoOf(AnimatedEnterExitMeasurePolicy).h96 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.u(0).s7y(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicWidth.<anonymous>' call
          var v = measurables.u(i).s7y(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).i96 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.u(0).w7y(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.minIntrinsicHeight.<anonymous>' call
          var v = measurables.u(i).w7y(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).j96 = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
      var maxValue = measurables.u(0).u7y(height);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicWidth.<anonymous>' call
          var v = measurables.u(i).u7y(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).k96 = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (measurables.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
      var maxValue = measurables.u(0).y7y(width);
      var inductionVariable = 1;
      var last = get_lastIndex_0(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.maxIntrinsicHeight.<anonymous>' call
          var v = measurables.u(i).y7y(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  function AnimatedEnterExitImpl$lambda($shouldDisposeBlockUpdated$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeBlockUpdated', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeBlockUpdated$delegate.c1();
  }
  function AnimatedEnterExitImpl$lambda_0($shouldDisposeAfterExit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeAfterExit', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeAfterExit$delegate.c1();
  }
  function AnimatedVisibility$lambda(it) {
    return it;
  }
  function AnimatedVisibility$lambda_0($visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility($visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function AnimatedVisibilityImpl$lambda$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.z96($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function AnimatedVisibilityImpl$lambda($visible, $transition) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.k7y(constraints.v5h_1);
      var tmp;
      if ($this$layout.s92() && !$visible($transition.p4b())) {
        tmp = Companion_getInstance_2().n5j_1;
      } else {
        tmp = IntSize_0(placeable.l7y_1, placeable.m7y_1);
      }
      var tmp0_container = tmp;
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      var w = _IntSize___get_width__impl__d9yl4o(tmp0_container);
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      var h = _IntSize___get_height__impl__prv63b(tmp0_container);
      return $this$layout.q7y(w, h, VOID, AnimatedVisibilityImpl$lambda$lambda(placeable));
    };
  }
  function AnimatedVisibilityImpl$lambda_0(current, target) {
    return current.equals(target) && target.equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityImpl$lambda_1($transition, $visible, $modifier, $enter, $exit, $content, $$changed) {
    return function ($composer, $force) {
      AnimatedVisibilityImpl($transition, $visible, $modifier, $enter, $exit, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.qcb_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.qcb_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.qcb_1;
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
  function AnimatedEnterExitImpl$slambda$lambda($childTransition) {
    return function () {
      return get_exitFinished($childTransition);
    };
  }
  function AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.zcb_1 = $this_produceState;
    this.acc_1 = $childTransition;
    this.bcc_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda$slambda).dcc = function (it, $completion) {
    var tmp = this.ecc(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).ma = function (p1, $completion) {
    return this.dcc((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp_0;
          if (this.ccc_1) {
            tmp_0 = AnimatedEnterExitImpl$lambda(this.bcc_1)(this.acc_1.w4b(), this.acc_1.p4b());
          } else {
            tmp_0 = false;
          }
          this.zcb_1.a1y(tmp_0);
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
  protoOf(AnimatedEnterExitImpl$slambda$slambda).ecc = function (it, completion) {
    var i = new AnimatedEnterExitImpl$slambda$slambda(this.zcb_1, this.acc_1, this.bcc_1, completion);
    i.ccc_1 = it;
    return i;
  };
  function AnimatedEnterExitImpl$slambda$slambda_0($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.dcc(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.ncc_1 = $childTransition;
    this.occ_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda).qcc = function ($this$produceState, $completion) {
    var tmp = this.rcc($this$produceState, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AnimatedEnterExitImpl$slambda).ma = function (p1, $completion) {
    return this.qcc((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$slambda$lambda(this.ncc_1));
            var tmp_1 = AnimatedEnterExitImpl$slambda$slambda_0(this.pcc_1, this.ncc_1, this.occ_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(AnimatedEnterExitImpl$slambda).rcc = function ($this$produceState, completion) {
    var i = new AnimatedEnterExitImpl$slambda(this.ncc_1, this.occ_1, completion);
    i.pcc_1 = $this$produceState;
    return i;
  };
  function AnimatedEnterExitImpl$slambda_0($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.qcc($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$lambda$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.z96($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function AnimatedEnterExitImpl$lambda_1($onLookaheadMeasured) {
    return function ($this$layout, measurable, constraints) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = measurable.k7y(constraints.v5h_1);
      if ($this$layout.s92()) {
        $onLookaheadMeasured._v.scc(IntSize_0($this$run.l7y_1, $this$run.m7y_1));
      }
      var tmp = $this$run.l7y_1;
      var tmp_0 = $this$run.m7y_1;
      return $this$layout.q7y(tmp, tmp_0, VOID, AnimatedEnterExitImpl$lambda$lambda($this$run));
    };
  }
  function AnimatedEnterExitImpl$lambda_2($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).r7y = function (_this__u8e3s4, measurable, height) {
    return measurable.s7y(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).v7y = function (_this__u8e3s4, measurable, width) {
    return measurable.w7y(width);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).t7y = function (_this__u8e3s4, measurable, height) {
    return measurable.u7y(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).x7y = function (_this__u8e3s4, measurable, width) {
    return measurable.y7y(width);
  };
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(_this__u8e3s4, get_InvalidSize());
  }
  function animateContentSize(_this__u8e3s4, animationSpec, finishedListener) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    finishedListener = finishedListener === VOID ? null : finishedListener;
    _init_properties_AnimationModifier_kt__u6vzef();
    return clipToBounds(_this__u8e3s4).i7q(new SizeAnimationModifierElement(animationSpec, Companion_getInstance_0().m7p_1, finishedListener));
  }
  function SizeAnimationModifierElement(animationSpec, alignment, finishedListener) {
    ModifierNodeElement.call(this);
    this.hcd_1 = animationSpec;
    this.icd_1 = alignment;
    this.jcd_1 = finishedListener;
  }
  protoOf(SizeAnimationModifierElement).k39 = function () {
    return new SizeAnimationModifierNode(this.hcd_1, this.icd_1, this.jcd_1);
  };
  protoOf(SizeAnimationModifierElement).kcd = function (node) {
    node.ycd_1 = this.hcd_1;
    node.ace_1 = this.jcd_1;
    node.zcd_1 = this.icd_1;
  };
  protoOf(SizeAnimationModifierElement).v7t = function (node) {
    return this.kcd(node instanceof SizeAnimationModifierNode ? node : THROW_CCE());
  };
  protoOf(SizeAnimationModifierElement).toString = function () {
    return 'SizeAnimationModifierElement(animationSpec=' + toString(this.hcd_1) + ', alignment=' + toString(this.icd_1) + ', finishedListener=' + toString_0(this.jcd_1) + ')';
  };
  protoOf(SizeAnimationModifierElement).hashCode = function () {
    var result = hashCode(this.hcd_1);
    result = imul(result, 31) + hashCode(this.icd_1) | 0;
    result = imul(result, 31) + (this.jcd_1 == null ? 0 : hashCode(this.jcd_1)) | 0;
    return result;
  };
  protoOf(SizeAnimationModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeAnimationModifierElement))
      return false;
    var tmp0_other_with_cast = other instanceof SizeAnimationModifierElement ? other : THROW_CCE();
    if (!equals(this.hcd_1, tmp0_other_with_cast.hcd_1))
      return false;
    if (!equals(this.icd_1, tmp0_other_with_cast.icd_1))
      return false;
    if (!equals(this.jcd_1, tmp0_other_with_cast.jcd_1))
      return false;
    return true;
  };
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.cce_1 = value;
    $this.dce_1 = true;
  }
  function targetConstraints($this, default_0) {
    var tmp;
    if ($this.dce_1) {
      tmp = $this.cce_1;
    } else {
      tmp = default_0;
    }
    return tmp;
  }
  function AnimData(anim, startSize) {
    this.fce_1 = anim;
    this.gce_1 = startSize;
  }
  protoOf(AnimData).toString = function () {
    return 'AnimData(anim=' + toString(this.fce_1) + ', startSize=' + IntSize__toString_impl_54w9zl(this.gce_1) + ')';
  };
  protoOf(AnimData).hashCode = function () {
    var result = hashCode(this.fce_1);
    result = imul(result, 31) + IntSize__hashCode_impl_gm9mta(this.gce_1) | 0;
    return result;
  };
  protoOf(AnimData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnimData))
      return false;
    var tmp0_other_with_cast = other instanceof AnimData ? other : THROW_CCE();
    if (!equals(this.fce_1, tmp0_other_with_cast.fce_1))
      return false;
    if (!equals(this.gce_1, tmp0_other_with_cast.gce_1))
      return false;
    return true;
  };
  function SizeAnimationModifierNode$measure$lambda(this$0, $measuredSize, $width, $height, $this_measure, $placeable) {
    return function ($this$layout) {
      var offset = this$0.zcd_1.h7q($measuredSize, IntSize_0($width, $height), $this_measure.r6k());
      $this$layout.b97($placeable, offset);
      return Unit_instance;
    };
  }
  function SizeAnimationModifierNode$animateTo$slambda($$this$apply, $targetSize, this$0, resultContinuation) {
    this.pce_1 = $$this$apply;
    this.qce_1 = $targetSize;
    this.rce_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SizeAnimationModifierNode$animateTo$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SizeAnimationModifierNode$animateTo$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SizeAnimationModifierNode$animateTo$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.pce_1.fce_1.sb4(new IntSize(this.qce_1), this.rce_1.ycd_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (result.xb4_1.equals(AnimationEndReason_Finished_getInstance())) {
              var tmp0_safe_receiver = this.rce_1.ace_1;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver(new IntSize(this.pce_1.gce_1), result.wb4_1.c1());
            }

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
  protoOf(SizeAnimationModifierNode$animateTo$slambda).b20 = function ($this$launch, completion) {
    var i = new SizeAnimationModifierNode$animateTo$slambda(this.pce_1, this.qce_1, this.rce_1, completion);
    i.sce_1 = $this$launch;
    return i;
  };
  function SizeAnimationModifierNode$animateTo$slambda_0($$this$apply, $targetSize, this$0, resultContinuation) {
    var i = new SizeAnimationModifierNode$animateTo$slambda($$this$apply, $targetSize, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SizeAnimationModifierNode(animationSpec, alignment, listener) {
    alignment = alignment === VOID ? Companion_getInstance_0().m7p_1 : alignment;
    listener = listener === VOID ? null : listener;
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.ycd_1 = animationSpec;
    this.zcd_1 = alignment;
    this.ace_1 = listener;
    this.bce_1 = get_InvalidSize();
    this.cce_1 = Constraints();
    this.dce_1 = false;
    this.ece_1 = mutableStateOf(null);
  }
  protoOf(SizeAnimationModifierNode).tce = function (_set____db54di) {
    var this_0 = this.ece_1;
    animData$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(SizeAnimationModifierNode).uce = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ece_1;
    animData$factory_0();
    return this_0.c1();
  };
  protoOf(SizeAnimationModifierNode).m7r = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).m7r.call(this);
    this.tce(null);
  };
  protoOf(SizeAnimationModifierNode).h7r = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).h7r.call(this);
    this.bce_1 = get_InvalidSize();
    this.dce_1 = false;
  };
  protoOf(SizeAnimationModifierNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (_this__u8e3s4.s92()) {
      _set_lookaheadConstraints__uusx37(this, constraints);
      tmp = measurable.k7y(constraints);
    } else {
      tmp = measurable.k7y(targetConstraints(this, constraints));
    }
    var placeable = tmp;
    var measuredSize = IntSize_0(placeable.l7y_1, placeable.m7y_1);
    var tmp_0;
    if (_this__u8e3s4.s92()) {
      this.bce_1 = measuredSize;
      tmp_0 = measuredSize;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.SizeAnimationModifierNode.measure.<anonymous>' call
      var it = this.vce(get_isValid(this.bce_1) ? this.bce_1 : measuredSize);
      tmp_0 = constrain(constraints, it);
    }
    var tmp0_container = tmp_0;
    // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
    var width = _IntSize___get_width__impl__d9yl4o(tmp0_container);
    // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
    var height = _IntSize___get_height__impl__prv63b(tmp0_container);
    return _this__u8e3s4.q7y(width, height, VOID, SizeAnimationModifierNode$measure$lambda(this, measuredSize, width, height, _this__u8e3s4, placeable));
  };
  protoOf(SizeAnimationModifierNode).vce = function (targetSize) {
    var tmp0_safe_receiver = this.uce();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.SizeAnimationModifierNode.animateTo.<anonymous>' call
      var wasInterrupted = !equals(new IntSize(targetSize), tmp0_safe_receiver.fce_1.c1()) && !tmp0_safe_receiver.fce_1.qb4();
      if (!equals(new IntSize(targetSize), tmp0_safe_receiver.fce_1.ub3()) || wasInterrupted) {
        tmp0_safe_receiver.gce_1 = tmp0_safe_receiver.fce_1.c1().o5j_1;
        var tmp_0 = this.c7r();
        launch(tmp_0, VOID, VOID, SizeAnimationModifierNode$animateTo$slambda_0(tmp0_safe_receiver, targetSize, this, null));
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    var data = tmp1_elvis_lhs == null ? new AnimData(new Animatable(new IntSize(targetSize), get_VectorConverter(Companion_getInstance_2()), new IntSize(IntSize_0(1, 1))), targetSize) : tmp1_elvis_lhs;
    this.tce(data);
    return data.fce_1.c1().o5j_1;
  };
  function LayoutModifierWithPassThroughIntrinsics() {
  }
  protoOf(LayoutModifierWithPassThroughIntrinsics).r7y = function (_this__u8e3s4, measurable, height) {
    return measurable.s7y(height);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).v7y = function (_this__u8e3s4, measurable, width) {
    return measurable.w7y(width);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).t7y = function (_this__u8e3s4, measurable, height) {
    return measurable.u7y(height);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).x7y = function (_this__u8e3s4, measurable, width) {
    return measurable.y7y(width);
  };
  function animData$factory() {
    return getPropertyCallableRef('animData', 1, KMutableProperty1, function (receiver) {
      return receiver.uce();
    }, function (receiver, value) {
      return receiver.tce(value);
    });
  }
  function animData$factory_0() {
    return getPropertyCallableRef('animData', 1, KMutableProperty1, function (receiver) {
      return receiver.uce();
    }, function (receiver, value) {
      return receiver.tce(value);
    });
  }
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      InvalidSize = IntSize_0(-2147483648, -2147483648);
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp0_container = Color__convert_impl_so5m8t(color.p6b_1, ColorSpaces_getInstance().g6b_1);
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(tmp0_container);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(tmp0_container);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.db9_1;
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_2 = vector.eb9_1;
      var this_3 = this_2 < -0.5 ? -0.5 : this_2;
      var tmp_0 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.fb9_1;
      var this_5 = this_4 < -0.5 ? -0.5 : this_4;
      var tmp_1 = this_5 > 0.5 ? 0.5 : this_5;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_6 = vector.cb9_1;
      var this_7 = this_6 < 0.0 ? 0.0 : this_6;
      var tmp$ret$11 = this_7 > 1.0 ? 1.0 : this_7;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$11, ColorSpaces_getInstance().g6b_1), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function Companion() {
    Companion_instance_0 = this;
    this.wce_1 = new EnterTransitionImpl(new TransitionData());
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function EnterTransition() {
    Companion_getInstance_6();
  }
  protoOf(EnterTransition).yca = function (enter) {
    var tmp0_elvis_lhs = enter.fcb().zca_1;
    var tmp = tmp0_elvis_lhs == null ? this.fcb().zca_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.fcb().acb_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.fcb().acb_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.fcb().bcb_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.fcb().bcb_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.fcb().ccb_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.fcb().ccb_1 : tmp3_elvis_lhs, VOID, plus(this.fcb().ecb_1, enter.fcb().ecb_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_6().wce_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var $this$run = this.fcb();
      var tmp3_safe_receiver = $this$run.zca_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.acb_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.bcb_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.ccb_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.fcb().equals(this.fcb());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.fcb().hashCode();
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.lcb_1 = new ExitTransitionImpl(new TransitionData());
    this.mcb_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, true));
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ExitTransition() {
    Companion_getInstance_7();
  }
  protoOf(ExitTransition).ncb = function (exit) {
    var tmp0_elvis_lhs = exit.fcb().zca_1;
    var tmp = tmp0_elvis_lhs == null ? this.fcb().zca_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.fcb().acb_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.fcb().acb_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.fcb().bcb_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.fcb().bcb_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.fcb().ccb_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.fcb().ccb_1 : tmp3_elvis_lhs, exit.fcb().dcb_1 || this.fcb().dcb_1, plus(this.fcb().ecb_1, exit.fcb().ecb_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.fcb().equals(this.fcb());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_7().lcb_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_7().mcb_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var $this$run = this.fcb();
      var tmp3_safe_receiver = $this$run.zca_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.acb_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.bcb_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.ccb_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.dcb_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.fcb().hashCode();
  };
  function fadeIn(animationSpec, initialAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function createModifier(_this__u8e3s4, enter, exit, isEnabled, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var isEnabled_0 = {_v: isEnabled};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 28261782, 'C(createModifier)867@38160L8,870@38224L31,871@38277L28,896@39249L56,898@39349L58:EnterExitTransition.kt#xbi5r1');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, -165056410, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value = createModifier$lambda;
        $composer_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      isEnabled_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(28261782, $changed, -1, 'androidx.compose.animation.createModifier (EnterExitTransition.kt:869)');
    }
    var activeEnter = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
    var activeExit = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
    var shouldAnimateSlide = !(activeEnter.fcb().acb_1 == null) || !(activeExit.fcb().acb_1 == null);
    var shouldAnimateSizeChange = !(activeEnter.fcb().bcb_1 == null) || !(activeExit.fcb().bcb_1 == null);
    $composer_0.a31(-165044049);
    sourceInformation($composer_0, '878@38627L27,878@38576L79');
    var tmp_1;
    if (shouldAnimateSlide) {
      var tmp_2 = get_VectorConverter_0(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, -165041447, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.w32();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_0 = label + ' slide';
        $composer_0.h33(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_1 = createDeferredAnimation(_this__u8e3s4, tmp_2, tmp2_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_1 = null;
    }
    var tmp3_group = tmp_1;
    $composer_0.c31();
    var slideAnimation = tmp3_group;
    $composer_0.a31(-165038614);
    sourceInformation($composer_0, '883@38800L35,883@38751L85');
    var tmp_5;
    if (shouldAnimateSizeChange) {
      var tmp_6 = get_VectorConverter(Companion_getInstance_2());
      sourceInformationMarkerStart($composer_0, -165035903, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.w32();
      var tmp_7;
      if (false || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_1 = label + ' shrink/expand';
        $composer_0.h33(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_5 = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp4_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_5 = null;
    }
    var tmp5_group = tmp_5;
    $composer_0.c31();
    var sizeAnimation = tmp5_group;
    $composer_0.a31(-165033189);
    sourceInformation($composer_0, '889@38995L48,887@38919L134');
    var tmp_9;
    if (shouldAnimateSizeChange) {
      var tmp_10 = get_VectorConverter_0(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, -165029650, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.w32();
      var tmp_11;
      if (false || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.h33(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_9 = createDeferredAnimation(_this__u8e3s4, tmp_10, tmp6_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_9 = null;
    }
    var tmp7_group = tmp_9;
    $composer_0.c31();
    var offsetAnimation = tmp7_group;
    var tmp_13;
    var tmp_14;
    var tmp0_safe_receiver = activeEnter.fcb().bcb_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.acf_1) === false) {
      tmp_14 = true;
    } else {
      var tmp1_safe_receiver = activeExit.fcb().bcb_1;
      tmp_14 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.acf_1) === false;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_13;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, label, $composer_0, 14 & $changed | 7168 & $changed >> 3);
    var tmp_15 = Companion_instance;
    sourceInformationMarkerStart($composer_0, -165018312, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.g32(disableClip) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.f2r(isEnabled_0._v) || ($changed & 3072) === 2048));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.w32();
    var tmp_16;
    if (invalid || it_3 === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
      var value_3 = createModifier$lambda_0(disableClip, isEnabled_0);
      $composer_0.h33(value_3);
      tmp_16 = value_3;
    } else {
      tmp_16 = it_3;
    }
    var tmp_17 = tmp_16;
    var tmp8_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var tmp1 = graphicsLayer(tmp_15, tmp8_group).i7q(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, isEnabled_0._v, graphicsLayerBlock));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function TransitionData(fade, slide, changeSize, scale, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.zca_1 = fade;
    this.acb_1 = slide;
    this.bcb_1 = changeSize;
    this.ccb_1 = scale;
    this.dcb_1 = hold;
    this.ecb_1 = effectsMap;
  }
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString_0(this.zca_1) + ', slide=' + toString_0(this.acb_1) + ', changeSize=' + toString_0(this.bcb_1) + ', scale=' + toString_0(this.ccb_1) + ', hold=' + this.dcb_1 + ', effectsMap=' + toString(this.ecb_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.zca_1 == null ? 0 : this.zca_1.hashCode();
    result = imul(result, 31) + (this.acb_1 == null ? 0 : this.acb_1.hashCode()) | 0;
    result = imul(result, 31) + (this.bcb_1 == null ? 0 : this.bcb_1.hashCode()) | 0;
    result = imul(result, 31) + (this.ccb_1 == null ? 0 : this.ccb_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.dcb_1) | 0;
    result = imul(result, 31) + hashCode(this.ecb_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.zca_1, tmp0_other_with_cast.zca_1))
      return false;
    if (!equals(this.acb_1, tmp0_other_with_cast.acb_1))
      return false;
    if (!equals(this.bcb_1, tmp0_other_with_cast.bcb_1))
      return false;
    if (!equals(this.ccb_1, tmp0_other_with_cast.ccb_1))
      return false;
    if (!(this.dcb_1 === tmp0_other_with_cast.dcb_1))
      return false;
    if (!equals(this.ecb_1, tmp0_other_with_cast.ecb_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.bcf_1 = data;
  }
  protoOf(EnterTransitionImpl).fcb = function () {
    return this.bcf_1;
  };
  function Fade(alpha, animationSpec) {
    this.ccf_1 = alpha;
    this.dcf_1 = animationSpec;
  }
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.ccf_1 + ', animationSpec=' + toString(this.dcf_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.ccf_1);
    result = imul(result, 31) + hashCode(this.dcf_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.ccf_1, tmp0_other_with_cast.ccf_1))
      return false;
    if (!equals(this.dcf_1, tmp0_other_with_cast.dcf_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.xce_1 = alignment;
    this.yce_1 = size;
    this.zce_1 = animationSpec;
    this.acf_1 = clip;
  }
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + toString(this.xce_1) + ', size=' + toString(this.yce_1) + ', animationSpec=' + toString(this.zce_1) + ', clip=' + this.acf_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.xce_1);
    result = imul(result, 31) + hashCode(this.yce_1) | 0;
    result = imul(result, 31) + hashCode(this.zce_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.acf_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.xce_1, tmp0_other_with_cast.xce_1))
      return false;
    if (!equals(this.yce_1, tmp0_other_with_cast.yce_1))
      return false;
    if (!equals(this.zce_1, tmp0_other_with_cast.zce_1))
      return false;
    if (!(this.acf_1 === tmp0_other_with_cast.acf_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.ecf_1 = scale;
    this.fcf_1 = transformOrigin;
    this.gcf_1 = animationSpec;
  }
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.ecf_1 + ', transformOrigin=' + TransformOrigin__toString_impl_nn7ftd(this.fcf_1) + ', animationSpec=' + toString(this.gcf_1) + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.ecf_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.fcf_1) | 0;
    result = imul(result, 31) + hashCode(this.gcf_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.ecf_1, tmp0_other_with_cast.ecf_1))
      return false;
    if (!equals(this.fcf_1, tmp0_other_with_cast.fcf_1))
      return false;
    if (!equals(this.gcf_1, tmp0_other_with_cast.gcf_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.hcf_1 = data;
  }
  protoOf(ExitTransitionImpl).fcb = function () {
    return this.hcf_1;
  };
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 21614502, 'C(trackActiveEnter)915@40149L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(21614502, $changed, -1, 'androidx.compose.animation.trackActiveEnter (EnterExitTransition.kt:910)');
    }
    sourceInformationMarkerStart($composer_0, -1583278438, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.animation.trackActiveEnter.<anonymous>' call
      var value = mutableStateOf(enter);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeEnter$delegate = tmp1_group;
    if (_this__u8e3s4.w4b().equals(_this__u8e3s4.p4b()) && _this__u8e3s4.w4b().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.ybp()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_6().wce_1);
      }
    } else if (_this__u8e3s4.p4b().equals(EnterExitState_Visible_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).yca(enter));
    }
    var tmp0 = trackActiveEnter$lambda(activeEnter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1363864804, 'C(trackActiveExit)935@41130L39:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1363864804, $changed, -1, 'androidx.compose.animation.trackActiveExit (EnterExitTransition.kt:930)');
    }
    sourceInformationMarkerStart($composer_0, 1483140299, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.animation.trackActiveExit.<anonymous>' call
      var value = mutableStateOf(exit);
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeExit$delegate = tmp1_group;
    if (_this__u8e3s4.w4b().equals(_this__u8e3s4.p4b()) && _this__u8e3s4.w4b().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.ybp()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_7().lcb_1);
      }
    } else if (!_this__u8e3s4.p4b().equals(EnterExitState_Visible_getInstance())) {
      trackActiveExit$lambda_0(activeExit$delegate, trackActiveExit$lambda(activeExit$delegate).ncb(exit));
    }
    var tmp0 = trackActiveExit$lambda(activeExit$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 642253525, 'C(createGraphicsLayerBlock)985@42946L2853:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(642253525, $changed, -1, 'androidx.compose.animation.createGraphicsLayerBlock (EnterExitTransition.kt:958)');
    }
    var shouldAnimateAlpha = !(enter.fcb().zca_1 == null) || !(exit.fcb().zca_1 == null);
    var shouldAnimateScale = !(enter.fcb().ccb_1 == null) || !(exit.fcb().ccb_1 == null);
    $composer_0.a31(-1545808136);
    sourceInformation($composer_0, '968@42460L27,967@42377L120');
    var tmp;
    if (shouldAnimateAlpha) {
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_instance);
      sourceInformationMarkerStart($composer_0, -1545804535, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_1;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value = label + ' alpha';
        $composer_0.h33(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp1_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp = null;
    }
    var tmp2_group = tmp;
    $composer_0.c31();
    var alphaAnimation = tmp2_group;
    $composer_0.a31(-1545801832);
    sourceInformation($composer_0, '974@42657L27,973@42574L120');
    var tmp_3;
    if (shouldAnimateScale) {
      var tmp_4 = get_VectorConverter_1(FloatCompanionObject_instance);
      sourceInformationMarkerStart($composer_0, -1545798231, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.w32();
      var tmp_5;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value_0 = label + ' scale';
        $composer_0.h33(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_3 = createDeferredAnimation(_this__u8e3s4, tmp_4, tmp3_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_3 = null;
    }
    var tmp4_group = tmp_3;
    $composer_0.c31();
    var scaleAnimation = tmp4_group;
    $composer_0.a31(-1545795192);
    sourceInformation($composer_0, '979@42781L136');
    var tmp_7;
    if (shouldAnimateScale) {
      tmp_7 = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_7 = null;
    }
    var tmp5_group = tmp_7;
    $composer_0.c31();
    var transformOriginAnimation = tmp5_group;
    sourceInformationMarkerStart($composer_0, -1545786157, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.f32(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.f2r(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.f2r(exit) || ($changed & 384) === 256)) | $composer_0.f32(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.f2r(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.f32(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.w32();
    var tmp_8;
    if (invalid || it_1 === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
      var tmp_9 = createGraphicsLayerBlock$lambda(alphaAnimation, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_9);
      $composer_0.h33(value_1);
      tmp_8 = value_1;
    } else {
      tmp_8 = it_1;
    }
    var tmp_10 = tmp_8;
    var tmp6_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp6_group;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.jcf_1 = transition;
    this.kcf_1 = sizeAnimation;
    this.lcf_1 = offsetAnimation;
    this.mcf_1 = slideAnimation;
    this.ncf_1 = enter;
    this.ocf_1 = exit;
    this.pcf_1 = isEnabled;
    this.qcf_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).k39 = function () {
    return new EnterExitTransitionModifierNode(this.jcf_1, this.kcf_1, this.lcf_1, this.mcf_1, this.ncf_1, this.ocf_1, this.pcf_1, this.qcf_1);
  };
  protoOf(EnterExitTransitionElement).rcf = function (node) {
    node.fcg_1 = this.jcf_1;
    node.gcg_1 = this.kcf_1;
    node.hcg_1 = this.lcf_1;
    node.icg_1 = this.mcf_1;
    node.jcg_1 = this.ncf_1;
    node.kcg_1 = this.ocf_1;
    node.lcg_1 = this.pcf_1;
    node.mcg_1 = this.qcf_1;
  };
  protoOf(EnterExitTransitionElement).v7t = function (node) {
    return this.rcf(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).toString = function () {
    return 'EnterExitTransitionElement(transition=' + this.jcf_1.toString() + ', sizeAnimation=' + toString_0(this.kcf_1) + ', offsetAnimation=' + toString_0(this.lcf_1) + ', slideAnimation=' + toString_0(this.mcf_1) + ', enter=' + this.ncf_1.toString() + ', exit=' + this.ocf_1.toString() + ', isEnabled=' + toString(this.pcf_1) + ', graphicsLayerBlock=' + toString(this.qcf_1) + ')';
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var result = hashCode(this.jcf_1);
    result = imul(result, 31) + (this.kcf_1 == null ? 0 : hashCode(this.kcf_1)) | 0;
    result = imul(result, 31) + (this.lcf_1 == null ? 0 : hashCode(this.lcf_1)) | 0;
    result = imul(result, 31) + (this.mcf_1 == null ? 0 : hashCode(this.mcf_1)) | 0;
    result = imul(result, 31) + this.ncf_1.hashCode() | 0;
    result = imul(result, 31) + this.ocf_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.pcf_1) | 0;
    result = imul(result, 31) + hashCode(this.qcf_1) | 0;
    return result;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnterExitTransitionElement))
      return false;
    var tmp0_other_with_cast = other instanceof EnterExitTransitionElement ? other : THROW_CCE();
    if (!equals(this.jcf_1, tmp0_other_with_cast.jcf_1))
      return false;
    if (!equals(this.kcf_1, tmp0_other_with_cast.kcf_1))
      return false;
    if (!equals(this.lcf_1, tmp0_other_with_cast.lcf_1))
      return false;
    if (!equals(this.mcf_1, tmp0_other_with_cast.mcf_1))
      return false;
    if (!this.ncf_1.equals(tmp0_other_with_cast.ncf_1))
      return false;
    if (!this.ocf_1.equals(tmp0_other_with_cast.ocf_1))
      return false;
    if (!equals(this.pcf_1, tmp0_other_with_cast.pcf_1))
      return false;
    if (!equals(this.qcf_1, tmp0_other_with_cast.qcf_1))
      return false;
    return true;
  };
  function _set_lookaheadConstraints__uusx37_0($this, value) {
    $this.ncg_1 = true;
    $this.pcg_1 = value;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.pbq(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.jcg_1.fcb().bcb_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zce_1;
      } else if ($this$null.pbq(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.kcg_1.fcb().bcb_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zce_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.z96($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.tcg(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.ucg(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.vcg(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4($placeable, $offset, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      $this$layout.i97($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.z96($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.pbq(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.jcg_1.fcb().acb_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xcg_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$null.pbq(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.kcg_1.fcb().acb_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.xcg_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.fcg_1 = transition;
    this.gcg_1 = sizeAnimation;
    this.hcg_1 = offsetAnimation;
    this.icg_1 = slideAnimation;
    this.jcg_1 = enter;
    this.kcg_1 = exit;
    this.lcg_1 = isEnabled;
    this.mcg_1 = graphicsLayerBlock;
    this.ncg_1 = false;
    this.ocg_1 = get_InvalidSize();
    this.pcg_1 = Constraints();
    this.qcg_1 = null;
    var tmp = this;
    tmp.rcg_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.scg_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).n60 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.<get-alignment>.<anonymous>' call
    var tmp;
    if (this.fcg_1.zbp().pbq(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.jcg_1.fcb().bcb_1;
      var tmp2_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xce_1;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        var tmp1_safe_receiver = this.kcg_1.fcb().bcb_1;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xce_1;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.kcg_1.fcb().bcb_1;
      var tmp5_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.xce_1;
      var tmp_1;
      if (tmp5_elvis_lhs == null) {
        var tmp4_safe_receiver = this.jcg_1.fcb().bcb_1;
        tmp_1 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.xce_1;
      } else {
        tmp_1 = tmp5_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).tcg = function (targetState, fullSize) {
    var tmp;
    switch (targetState.z2_1) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.jcg_1.fcb().bcb_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yce_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.o5j_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.kcg_1.fcb().bcb_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.yce_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.o5j_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).h7r = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).h7r.call(this);
    this.ncg_1 = false;
    this.ocg_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).ucg = function (targetState, fullSize) {
    var tmp;
    if (this.qcg_1 == null) {
      tmp = Companion_getInstance_3().e5j_1;
    } else if (this.n60() == null) {
      tmp = Companion_getInstance_3().e5j_1;
    } else if (equals(this.qcg_1, this.n60())) {
      tmp = Companion_getInstance_3().e5j_1;
    } else {
      var tmp_0;
      switch (targetState.z2_1) {
        case 1:
          tmp_0 = Companion_getInstance_3().e5j_1;
          break;
        case 0:
          tmp_0 = Companion_getInstance_3().e5j_1;
          break;
        case 2:
          var tmp1_safe_receiver = this.kcg_1.fcb().bcb_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.targetOffsetByState.<anonymous>' call
            var endSize = tmp1_safe_receiver.yce_1(new IntSize(fullSize)).o5j_1;
            var targetOffset = ensureNotNull(this.n60()).h7q(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.qcg_1).h7q(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_3().e5j_1;
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    if (this.fcg_1.w4b().equals(this.fcg_1.p4b())) {
      this.qcg_1 = null;
    } else if (this.qcg_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.n60();
      tmp.qcg_1 = tmp0_elvis_lhs == null ? Companion_getInstance_0().m7p_1 : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.s92()) {
      var placeable = measurable.k7y(constraints);
      var measuredSize = IntSize_0(placeable.l7y_1, placeable.m7y_1);
      this.ocg_1 = measuredSize;
      _set_lookaheadConstraints__uusx37_0(this, constraints);
      var tmp_0 = _IntSize___get_width__impl__d9yl4o(measuredSize);
      var tmp_1 = _IntSize___get_height__impl__prv63b(measuredSize);
      return _this__u8e3s4.q7y(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.lcg_1()) {
      var layerBlock = this.mcg_1.jr();
      var placeable_0 = measurable.k7y(constraints);
      var measuredSize_0 = IntSize_0(placeable_0.l7y_1, placeable_0.m7y_1);
      var target = get_isValid(this.ocg_1) ? this.ocg_1 : measuredSize_0;
      var tmp1_safe_receiver = this.gcg_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.sbq(this.rcg_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.c1();
        tmp_3 = tmp_4 == null ? null : tmp_4.o5j_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.hcg_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.sbq(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.c1();
        tmp_9 = tmp_10 == null ? null : tmp_10.c5j_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_3().e5j_1;
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.icg_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        tmp_13 = tmp7_safe_receiver.sbq(this.scg_1, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var tmp8_safe_receiver = tmp_13;
      var tmp_14;
      if (tmp8_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp8_safe_receiver.c1();
        tmp_14 = tmp_15 == null ? null : tmp_15.c5j_1;
      }
      var tmp9_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp9_elvis_lhs;
      if ((tmp_17 == null ? null : new IntOffset(tmp_17)) == null) {
        tmp_16 = Companion_getInstance_3().e5j_1;
      } else {
        tmp_16 = tmp9_elvis_lhs;
      }
      var slideOffset = tmp_16;
      var tmp10_safe_receiver = this.qcg_1;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.h7q(target, currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_18;
      var tmp_19 = tmp11_elvis_lhs;
      if ((tmp_19 == null ? null : new IntOffset(tmp_19)) == null) {
        tmp_18 = Companion_getInstance_3().e5j_1;
      } else {
        tmp_18 = tmp11_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_18, slideOffset);
      var tmp_20 = _IntSize___get_width__impl__d9yl4o(currentSize);
      var tmp_21 = _IntSize___get_height__impl__prv63b(currentSize);
      return _this__u8e3s4.q7y(tmp_20, tmp_21, VOID, EnterExitTransitionModifierNode$measure$lambda_4(placeable_0, offset, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.measure.<anonymous>' call
      var $this$run = measurable.k7y(constraints);
      var tmp_22 = $this$run.l7y_1;
      var tmp_23 = $this$run.m7y_1;
      return _this__u8e3s4.q7y(tmp_22, tmp_23, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).vcg = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.jcg_1.fcb().acb_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wcg_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.c5j_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_3().e5j_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.kcg_1.fcb().acb_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.wcg_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.c5j_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_3().e5j_1;
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.z2_1) {
      case 1:
        tmp_7 = Companion_getInstance_3().e5j_1;
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().u7p_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (targetSize === VOID) {
      tmp_0 = shrinkOut$lambda;
    } else {
      tmp_0 = targetSize;
    }
    targetSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().u7p_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (initialSize === VOID) {
      tmp_0 = expandIn$lambda;
    } else {
      tmp_0 = initialSize;
    }
    initialSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function scaleIn(animationSpec, initialScale, transformOrigin) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialScale = initialScale === VOID ? 0.0 : initialScale;
    transformOrigin = transformOrigin === VOID ? Companion_getInstance_4().m88_1 : transformOrigin;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, VOID, new Scale(initialScale, transformOrigin, animationSpec)));
  }
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.ycg_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).jr = function () {
    return this.ycg_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).x3 = function () {
    return this.ycg_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
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
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeEnter$delegate.c1();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeEnter$delegate.a1y(value);
    return Unit_instance;
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeExit$delegate.c1();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeExit$delegate.a1y(value);
    return Unit_instance;
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.n8c_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.n8c_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin_0(TransformOrigin(it.vb8_1, it.wb8_1));
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.b6v(!$disableClip && $isEnabled._v());
      return Unit_instance;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.pbq(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.fcb().zca_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dcf_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.pbq(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.fcb().zca_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.dcf_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.z2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.fcb().zca_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ccf_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.fcb().zca_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ccf_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.pbq(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.fcb().ccb_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gcf_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.pbq(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.fcb().ccb_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.gcf_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.z2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.fcb().ccb_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ecf_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.fcb().ccb_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ecf_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.z2_1) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.fcb().ccb_1;
          var tmp3_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.fcf_1;
          var tmp_0;
          var tmp_1 = tmp3_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin_0(tmp_1)) == null) {
            var tmp2_safe_receiver = $exit.fcb().ccb_1;
            tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.fcf_1;
          } else {
            tmp_0 = tmp3_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.fcb().ccb_1;
          var tmp6_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.fcf_1;
          var tmp_2;
          var tmp_3 = tmp6_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin_0(tmp_3)) == null) {
            var tmp5_safe_receiver = $enter.fcb().ccb_1;
            tmp_2 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.fcf_1;
          } else {
            tmp_2 = tmp6_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp7_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_4().m88_1;
      } else {
        tmp_4 = tmp7_elvis_lhs;
      }
      return new TransformOrigin_0(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($alpha, $scale, $transformOrigin) {
    return function ($this$null) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1();
      $this$null.o68(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs);
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.c1();
      $this$null.q6u(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      var tmp4_safe_receiver = $scale;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.c1();
      $this$null.r6u(tmp5_elvis_lhs == null ? 1.0 : tmp5_elvis_lhs);
      var tmp6_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp6_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp6_safe_receiver.c1();
        tmp = tmp_0 == null ? null : tmp_0.n8c_1;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp7_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin_0(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_4().m88_1;
      } else {
        tmp_1 = tmp7_elvis_lhs;
      }
      $this$null.f8b(tmp_1);
      return Unit_instance;
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        tmp = tmp0_safe_receiver.sbq(tmp_0, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp_2 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        tmp_1 = tmp1_safe_receiver.sbq(tmp_2, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit));
      }
      var scale = tmp_1;
      var tmp_3;
      if ($this_createGraphicsLayerBlock.w4b().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.fcb().ccb_1;
        var tmp4_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.fcf_1;
        var tmp_4;
        var tmp_5 = tmp4_elvis_lhs;
        if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
          var tmp3_safe_receiver = $exit.fcb().ccb_1;
          tmp_4 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.fcf_1;
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }
        tmp_3 = tmp_4;
      } else {
        var tmp5_safe_receiver = $exit.fcb().ccb_1;
        var tmp7_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.fcf_1;
        var tmp_6;
        var tmp_7 = tmp7_elvis_lhs;
        if ((tmp_7 == null ? null : new TransformOrigin_0(tmp_7)) == null) {
          var tmp6_safe_receiver = $enter.fcb().ccb_1;
          tmp_6 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.fcf_1;
        } else {
          tmp_6 = tmp7_elvis_lhs;
        }
        tmp_3 = tmp_6;
      }
      var transformOriginWhenVisible = tmp_3;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_8;
      if (tmp8_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp_9 = createGraphicsLayerBlock$lambda$lambda_3;
        tmp_8 = tmp8_safe_receiver.sbq(tmp_9, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit));
      }
      var transformOrigin = tmp_8;
      var block = createGraphicsLayerBlock$lambda$lambda_5(alpha, scale, transformOrigin);
      return block;
    };
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_3())));
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.d5i());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().fch(velocity, $this.zcg_1 * $this.bch_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.gch_1 = initialVelocity;
    this.hch_1 = distance;
    this.ich_1 = duration;
  }
  protoOf(FlingInfo).jch = function (time) {
    var tmp;
    if (this.ich_1.h1(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.ich_1.v3();
      tmp = time.v3() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.gch_1;
    var tmp$ret$1 = sign(x);
    return this.hch_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().mch(splinePos).kch_1;
  };
  protoOf(FlingInfo).nch = function (time) {
    var tmp;
    if (this.ich_1.h1(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.ich_1.v3();
      tmp = time.v3() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().mch(splinePos).lch_1;
    // Inline function 'kotlin.math.sign' call
    var x = this.gch_1;
    return tmp_0 * sign(x) * this.hch_1 / this.ich_1.v3() * 1000.0;
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.gch_1 + ', distance=' + this.hch_1 + ', duration=' + this.ich_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.gch_1);
    result = imul(result, 31) + getNumberHashCode(this.hch_1) | 0;
    result = imul(result, 31) + this.ich_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.gch_1, tmp0_other_with_cast.gch_1))
      return false;
    if (!equals(this.hch_1, tmp0_other_with_cast.hch_1))
      return false;
    if (!this.ich_1.equals(tmp0_other_with_cast.ich_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.zcg_1 = friction;
    this.ach_1 = density;
    this.bch_1 = computeDeceleration(this, this.ach_1);
  }
  protoOf(FlingCalculator).och = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).pch = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.zcg_1 * this.bch_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).qch = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.zcg_1 * this.bch_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -451899108, 'C(animateColorAsState)P(3:c#ui.graphics.Color!1,2)62@2847L96,65@2955L124:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-451899108, $changed, -1, 'androidx.compose.animation.animateColorAsState (SingleValueAnimation.kt:61)');
    }
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    sourceInformationMarkerStart($composer_0, -1018619694, 'CC(remember):SingleValueAnimation.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.f2r(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.animation.animateColorAsState.<anonymous>' call
      var value = get_VectorConverter_2(Companion_getInstance_5())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var converter = tmp2_group;
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function splineBasedDecay(density) {
    return generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.kch_1 = distanceCoefficient;
    this.lch_1 = velocityCoefficient;
  }
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.kch_1 + ', velocityCoefficient=' + this.lch_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.kch_1);
    result = imul(result, 31) + getNumberHashCode(this.lch_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.kch_1, tmp0_other_with_cast.kch_1))
      return false;
    if (!equals(this.lch_1, tmp0_other_with_cast.lch_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.cch_1 = 100;
    this.dch_1 = new Float32Array(101);
    this.ech_1 = new Float32Array(101);
    computeSplineInfo(this.dch_1, this.ech_1, 100);
  }
  protoOf(AndroidFlingSpline).mch = function (time) {
    var clampedTime = coerceIn(time, 0.0, 1.0);
    var index = numberToInt(100 * clampedTime);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.dch_1[index];
      var dSup = this.dch_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (clampedTime - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).fch = function (velocity, friction) {
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.rch_1.pch(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.rch_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).lb7 = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).mbb = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).jbb = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.i3(new Long(1000000, 0));
    return initialValue + this.rch_1.qch(initialVelocity).jch(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).kbb = function (initialValue, initialVelocity) {
    return this.rch_1.och(initialVelocity).h3(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).lbb = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.i3(new Long(1000000, 0));
    return this.rch_1.qch(initialVelocity).nch(playTimeMillis);
  };
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1977478709, 'C(rememberSplineBasedDecay)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1977478709, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    var tmp1_remember$arg$0 = density.d5i();
    sourceInformationMarkerStart($composer_0, 2068402978, 'CC(remember):SplineBasedDecayAnimationSpec.js.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.h32(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay.<anonymous>' call
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  //region block: post-declaration
  protoOf(ChildData).m7q = foldIn;
  protoOf(ChildData).n7q = all;
  protoOf(ChildData).i7q = then;
  protoOf(LayoutModifierWithPassThroughIntrinsics).m7q = foldIn;
  protoOf(LayoutModifierWithPassThroughIntrinsics).n7q = all;
  protoOf(LayoutModifierWithPassThroughIntrinsics).i7q = then;
  protoOf(AnimatedContentTransitionScopeImpl).pbq = isTransitioningTo;
  //endregion
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedContent;
  _.$_$.b = AnimatedVisibility;
  _.$_$.c = ContentTransform;
  _.$_$.d = SplineBasedFloatDecayAnimationSpec;
  _.$_$.e = get_VectorConverter_2;
  _.$_$.f = animateColorAsState;
  _.$_$.g = animateContentSize;
  _.$_$.h = fadeIn;
  _.$_$.i = fadeOut;
  _.$_$.j = rememberSplineBasedDecay;
  _.$_$.k = splineBasedDecay;
  _.$_$.l = togetherWith;
  _.$_$.m = Companion_getInstance_6;
  _.$_$.n = Companion_getInstance_7;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
