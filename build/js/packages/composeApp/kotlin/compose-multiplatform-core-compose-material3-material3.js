(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-compose-foundation-foundation.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-material-material-ripple.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-material-material-ripple.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-material-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-compose-material-material-ripple' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    globalThis['compose-multiplatform-core-compose-material3-material3'] = factory(typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_FastOutLinearInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var protoOf = kotlin_kotlin.$_$.he;
  var equals = kotlin_kotlin.$_$.qc;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var WindowInsetsSides__plus_impl_9q9m59 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var only = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var isNaN_0 = kotlin_kotlin.$_$.ck;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var coerceAtLeast = kotlin_kotlin.$_$.ye;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Spring_instance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var VOID = kotlin_kotlin.$_$.i;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var animateColorAsState = kotlin_org_jetbrains_compose_animation_animation.$_$.d;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Orientation_Vertical_getInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var rememberDraggableState = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var draggable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Long = kotlin_kotlin.$_$.wi;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var Velocity = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j4;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.f6;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.f7;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.qd;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var clearAndSetSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.v4;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var hashCode = kotlin_kotlin.$_$.zc;
  var KProperty0 = kotlin_kotlin.$_$.mf;
  var THROW_ISE = kotlin_kotlin.$_$.fj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.vc;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var windowInsetsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var get_layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.xe;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var roundToInt = kotlin_kotlin.$_$.re;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var AnimationState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var animateDecay = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  var animateTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h1;
  var Velocity_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var KMutableProperty1 = kotlin_kotlin.$_$.lf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var Canvas = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var get_LocalRippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var CompositionLocalProvider_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var ColorProducer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var rememberUpdatedInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var IndicationNodeFactory = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var createRippleModifierNode = kotlin_org_jetbrains_compose_material_material_ripple.$_$.c;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var rememberRipple = kotlin_org_jetbrains_compose_material_material_ripple.$_$.d;
  var onConsumedWindowInsetsChanged = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var SubcomposeLayout = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var Enum = kotlin_kotlin.$_$.qi;
  var exclude = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var asPaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var calculateStartPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var calculateEndPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var compareTo = kotlin_kotlin.$_$.nc;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g1;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.f5;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.p5;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var BasicText = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var WindowInsets = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var LineHeightStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h1;
  var get_systemBars = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(TopAppBarColors, 'TopAppBarColors');
  initMetadataForObject(ComposableSingletons$AppBarKt, 'ComposableSingletons$AppBarKt');
  initMetadataForObject(TopAppBarDefaults, 'TopAppBarDefaults');
  initMetadataForInterface(ScrolledOffset, 'ScrolledOffset');
  initMetadataForObject(BottomAppBarDefaults, 'BottomAppBarDefaults');
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  initMetadataForLambda(SingleRowTopAppBar$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(sam$androidx_compose_material3_ScrolledOffset$0, 'sam$androidx_compose_material3_ScrolledOffset$0', VOID, VOID, [ScrolledOffset, FunctionAdapter]);
  initMetadataForCoroutine($settleAppBarCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(ColorScheme, 'ColorScheme');
  initMetadataForObject(DividerDefaults, 'DividerDefaults');
  initMetadataForObject(MaterialTheme, 'MaterialTheme');
  initMetadataForClass(RippleConfiguration, 'RippleConfiguration', RippleConfiguration);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(RippleNodeFactory, 'RippleNodeFactory', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0_0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(DelegatingThemeAwareRippleNode, 'DelegatingThemeAwareRippleNode', VOID, DelegatingNode, [DelegatingNode, CompositionLocalConsumerModifierNode]);
  initMetadataForObject(RippleDefaults, 'RippleDefaults');
  initMetadataForObject(CompatRippleTheme, 'CompatRippleTheme');
  initMetadataForCompanion(Companion);
  initMetadataForClass(FabPosition, 'FabPosition');
  initMetadataForObject(ComposableSingletons$ScaffoldKt, 'ComposableSingletons$ScaffoldKt');
  initMetadataForObject(ScaffoldDefaults, 'ScaffoldDefaults');
  initMetadataForClass(ScaffoldLayoutContent, 'ScaffoldLayoutContent', VOID, Enum);
  initMetadataForClass(FabPlacement, 'FabPlacement');
  initMetadataForClass(Shapes, 'Shapes', Shapes);
  initMetadataForObject(ShapeDefaults, 'ShapeDefaults');
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Typography, 'Typography', Typography);
  initMetadataForClass(MutableWindowInsets, 'MutableWindowInsets', MutableWindowInsets);
  initMetadataForObject(ColorDarkTokens, 'ColorDarkTokens');
  initMetadataForObject(ColorLightTokens, 'ColorLightTokens');
  initMetadataForClass(ColorSchemeKeyTokens, 'ColorSchemeKeyTokens', VOID, Enum);
  initMetadataForObject(DividerTokens, 'DividerTokens');
  initMetadataForObject(ElevationTokens, 'ElevationTokens');
  initMetadataForObject(PaletteTokens, 'PaletteTokens');
  initMetadataForClass(ShapeKeyTokens, 'ShapeKeyTokens', VOID, Enum);
  initMetadataForObject(ShapeTokens, 'ShapeTokens');
  initMetadataForObject(StateTokens, 'StateTokens');
  initMetadataForObject(TopAppBarLargeTokens, 'TopAppBarLargeTokens');
  initMetadataForObject(TopAppBarMediumTokens, 'TopAppBarMediumTokens');
  initMetadataForObject(TopAppBarSmallTokens, 'TopAppBarSmallTokens');
  initMetadataForObject(TypeScaleTokens, 'TypeScaleTokens');
  initMetadataForObject(TypefaceTokens, 'TypefaceTokens');
  initMetadataForClass(TypographyKeyTokens, 'TypographyKeyTokens', VOID, Enum);
  initMetadataForObject(TypographyTokens, 'TypographyTokens');
  //endregion
  function get_BottomAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarHorizontalPadding;
  }
  var BottomAppBarHorizontalPadding;
  function get_BottomAppBarVerticalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarVerticalPadding;
  }
  var BottomAppBarVerticalPadding;
  var FABHorizontalPadding;
  var FABVerticalPadding;
  var TopTitleAlphaEasing;
  var MediumTitleBottomPadding;
  var LargeTitleBottomPadding;
  function get_TopAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarHorizontalPadding;
  }
  var TopAppBarHorizontalPadding;
  function get_TopAppBarTitleInset() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarTitleInset;
  }
  var TopAppBarTitleInset;
  function TopAppBarColors(containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor) {
    this.cii_1 = containerColor;
    this.dii_1 = scrolledContainerColor;
    this.eii_1 = navigationIconContentColor;
    this.fii_1 = titleContentColor;
    this.gii_1 = actionIconContentColor;
  }
  protoOf(TopAppBarColors).hii = function (colorTransitionFraction) {
    return lerp(this.cii_1, this.dii_1, get_FastOutLinearInEasing().cal(colorTransitionFraction));
  };
  protoOf(TopAppBarColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TopAppBarColors);
    }
    if (tmp)
      return false;
    if (!equals(this.cii_1, other.cii_1))
      return false;
    if (!equals(this.dii_1, other.dii_1))
      return false;
    if (!equals(this.eii_1, other.eii_1))
      return false;
    if (!equals(this.fii_1, other.fii_1))
      return false;
    if (!equals(this.gii_1, other.gii_1))
      return false;
    return true;
  };
  protoOf(TopAppBarColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.cii_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.dii_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.eii_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.fii_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.gii_1) | 0;
    return result;
  };
  function TopAppBar(title, modifier, navigationIcon, actions, expandedHeight, windowInsets, colors, scrollBehavior, $composer, $changed, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var navigationIcon_0 = {_v: navigationIcon};
    var actions_0 = {_v: actions};
    var expandedHeight_0 = {_v: new Dp(expandedHeight)};
    var windowInsets_0 = {_v: windowInsets};
    var colors_0 = {_v: colors};
    var scrollBehavior_0 = {_v: scrollBehavior};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(226148675);
    sourceInformation($composer_0, 'C(TopAppBar)P(6,3,4!1,2:c#ui.unit.Dp,7)204@9890L12,205@9952L17,211@10162L5,208@10031L579:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2w(title) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(navigationIcon_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(actions_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.j2w(_Dp___get_value__impl__geb1vb(expandedHeight_0._v.w5b_1)) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.h2l(windowInsets_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.h2l(colors_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.h2l(scrollBehavior_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          navigationIcon_0._v = ComposableSingletons$AppBarKt_getInstance().kii_1;
        }
        if (!(($default & 8) === 0)) {
          actions_0._v = ComposableSingletons$AppBarKt_getInstance().lii_1;
        }
        if (!(($default & 16) === 0)) {
          expandedHeight_0._v = new Dp(TopAppBarDefaults_getInstance().aij_1);
        }
        if (!(($default & 32) === 0)) {
          windowInsets_0._v = TopAppBarDefaults_getInstance().fij($composer_0, 6);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colors_0._v = TopAppBarDefaults_getInstance().gij($composer_0, 6);
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          scrollBehavior_0._v = null;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(226148675, $dirty, -1, 'androidx.compose.material3.TopAppBar (AppBar.kt:208)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = get_value_0(TopAppBarSmallTokens_getInstance().mij_1, $composer_0, 6);
      var tmp_1 = navigationIcon_0._v;
      var tmp_2 = actions_0._v;
      var tmp_3;
      if (expandedHeight_0._v.equals(new Dp(Companion_getInstance().z5b_1)) || expandedHeight_0._v.equals(new Dp(Companion_getInstance().y5b_1))) {
        tmp_3 = TopAppBarDefaults_getInstance().aij_1;
      } else {
        tmp_3 = expandedHeight_0._v.w5b_1;
      }
      SingleRowTopAppBar(tmp, title, tmp_0, false, tmp_1, tmp_2, tmp_3, windowInsets_0._v, colors_0._v, scrollBehavior_0._v, $composer_0, 3072 | 14 & $dirty >> 3 | 112 & $dirty << 3 | 57344 & $dirty << 6 | 458752 & $dirty << 6 | 29360128 & $dirty << 6 | 234881024 & $dirty << 6 | 1879048192 & $dirty << 6, 0);
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
      tmp0_safe_receiver.r32(TopAppBar$lambda(title, modifier_0, navigationIcon_0, actions_0, expandedHeight_0, windowInsets_0, colors_0, scrollBehavior_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_1$lambda_nfq8oq($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1023749866, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-1.<anonymous> (AppBar.kt:140)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_2$lambda_5dw8dh($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1394022792, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-2.<anonymous> (AppBar.kt:141)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_3$lambda_y7ipfo($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(446723454, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-3.<anonymous> (AppBar.kt:201)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_4$lambda_7zyvh9($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-877998884, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-4.<anonymous> (AppBar.kt:202)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_5$lambda_ktnlky($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1103559359, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-5.<anonymous> (AppBar.kt:267)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_6$lambda_ldtzbz($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(319435933, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-6.<anonymous> (AppBar.kt:268)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_7$lambda_7fshq8($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1421574347, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-7.<anonymous> (AppBar.kt:325)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_8$lambda_yrp36p($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-915435369, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-8.<anonymous> (AppBar.kt:326)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_9$lambda_5y2m4i($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1648696171, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-9.<anonymous> (AppBar.kt:394)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_10$lambda_btbudc($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-994959539, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-10.<anonymous> (AppBar.kt:395)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_11$lambda_h0amov($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1291062955, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-11.<anonymous> (AppBar.kt:461)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_12$lambda_p76y82($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-812441331, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-12.<anonymous> (AppBar.kt:462)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_13$lambda_3mfiu5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1044424363, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-13.<anonymous> (AppBar.kt:539)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_14$lambda_wg1zwc($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-703422839, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-14.<anonymous> (AppBar.kt:540)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_15$lambda_9rfl0l($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1013590507, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-15.<anonymous> (AppBar.kt:606)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c3u(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_16$lambda_j26w1m($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 17) === 16) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-162643127, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-16.<anonymous> (AppBar.kt:607)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_17$lambda_n5aovb($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1148172257, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-17.<anonymous> (AppBar.kt:2084)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_18$lambda_5obs6w($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(423062526, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda-18.<anonymous> (AppBar.kt:2085)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AppBarKt() {
    ComposableSingletons$AppBarKt_instance = this;
    var tmp = this;
    tmp.iii_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1023749866, false, ComposableSingletons$AppBarKt$lambda_1$lambda_nfq8oq));
    var tmp_0 = this;
    tmp_0.jii_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1394022792, false, ComposableSingletons$AppBarKt$lambda_2$lambda_5dw8dh));
    var tmp_1 = this;
    tmp_1.kii_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(446723454, false, ComposableSingletons$AppBarKt$lambda_3$lambda_y7ipfo));
    var tmp_2 = this;
    tmp_2.lii_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-877998884, false, ComposableSingletons$AppBarKt$lambda_4$lambda_7zyvh9));
    var tmp_3 = this;
    tmp_3.mii_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1103559359, false, ComposableSingletons$AppBarKt$lambda_5$lambda_ktnlky));
    var tmp_4 = this;
    tmp_4.nii_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(319435933, false, ComposableSingletons$AppBarKt$lambda_6$lambda_ldtzbz));
    var tmp_5 = this;
    tmp_5.oii_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1421574347, false, ComposableSingletons$AppBarKt$lambda_7$lambda_7fshq8));
    var tmp_6 = this;
    tmp_6.pii_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-915435369, false, ComposableSingletons$AppBarKt$lambda_8$lambda_yrp36p));
    var tmp_7 = this;
    tmp_7.qii_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1648696171, false, ComposableSingletons$AppBarKt$lambda_9$lambda_5y2m4i));
    var tmp_8 = this;
    tmp_8.rii_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-994959539, false, ComposableSingletons$AppBarKt$lambda_10$lambda_btbudc));
    var tmp_9 = this;
    tmp_9.sii_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(1291062955, false, ComposableSingletons$AppBarKt$lambda_11$lambda_h0amov));
    var tmp_10 = this;
    tmp_10.tii_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-812441331, false, ComposableSingletons$AppBarKt$lambda_12$lambda_p76y82));
    var tmp_11 = this;
    tmp_11.uii_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(1044424363, false, ComposableSingletons$AppBarKt$lambda_13$lambda_3mfiu5));
    var tmp_12 = this;
    tmp_12.vii_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-703422839, false, ComposableSingletons$AppBarKt$lambda_14$lambda_wg1zwc));
    var tmp_13 = this;
    tmp_13.wii_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(1013590507, false, ComposableSingletons$AppBarKt$lambda_15$lambda_9rfl0l));
    var tmp_14 = this;
    tmp_14.xii_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-162643127, false, ComposableSingletons$AppBarKt$lambda_16$lambda_j26w1m));
    var tmp_15 = this;
    tmp_15.yii_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1148172257, false, ComposableSingletons$AppBarKt$lambda_17$lambda_n5aovb));
    var tmp_16 = this;
    tmp_16.zii_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(423062526, false, ComposableSingletons$AppBarKt$lambda_18$lambda_5obs6w));
  }
  var ComposableSingletons$AppBarKt_instance;
  function ComposableSingletons$AppBarKt_getInstance() {
    if (ComposableSingletons$AppBarKt_instance == null)
      new ComposableSingletons$AppBarKt();
    return ComposableSingletons$AppBarKt_instance;
  }
  function TopAppBarDefaults() {
    TopAppBarDefaults_instance = this;
    this.aij_1 = TopAppBarSmallTokens_getInstance().jij_1;
    this.bij_1 = TopAppBarSmallTokens_getInstance().jij_1;
    this.cij_1 = TopAppBarMediumTokens_getInstance().vij_1;
    this.dij_1 = TopAppBarSmallTokens_getInstance().jij_1;
    this.eij_1 = TopAppBarLargeTokens_getInstance().gik_1;
  }
  protoOf(TopAppBarDefaults).gij = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1388520854, 'C(topAppBarColors)977@47193L11:AppBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1388520854, $changed, -1, 'androidx.compose.material3.TopAppBarDefaults.topAppBarColors (AppBar.kt:977)');
    }
    var tmp0 = this.qik(MaterialTheme_instance.pik($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(TopAppBarDefaults).qik = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.qim_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new TopAppBarColors(fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().hij_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().pij_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().nij_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().lij_1), fromToken(_this__u8e3s4, TopAppBarSmallTokens_getInstance().rij_1));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TopAppBarDefaults.<get-defaultTopAppBarColors>.<anonymous>' call
      _this__u8e3s4.qim_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(TopAppBarDefaults).fij = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2143182847, 'C1025@49443L29:AppBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(2143182847, $changed, -1, 'androidx.compose.material3.TopAppBarDefaults.<get-windowInsets> (AppBar.kt:1025)');
    }
    var tmp0 = only(get_systemBarsForVisualComponents(Companion_instance_0, $composer_0, 6), WindowInsetsSides__plus_impl_9q9m59(Companion_getInstance_0().hbc_1, Companion_getInstance_0().dbc_1));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var TopAppBarDefaults_instance;
  function TopAppBarDefaults_getInstance() {
    if (TopAppBarDefaults_instance == null)
      new TopAppBarDefaults();
    return TopAppBarDefaults_instance;
  }
  function SingleRowTopAppBar(modifier, title, titleTextStyle, centeredTitle, navigationIcon, actions, expandedHeight, windowInsets, colors, scrollBehavior, $composer, $changed, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-342194911);
    sourceInformation($composer_0, 'C(SingleRowTopAppBar)P(4,7,8,1,5!1,3:c#ui.unit.Dp,9)*1865@85622L7,1866@85690L284,1866@85679L295,1879@86382L321,1887@86744L178,1894@87005L197,1926@88369L1014,1926@88285L1098:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(title) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2l(titleTextStyle) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.i2w(centeredTitle) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2w(navigationIcon) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h2w(actions) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.j2w(_Dp___get_value__impl__geb1vb(expandedHeight)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.h2l(windowInsets) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.h2l(colors) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.h2l(scrollBehavior) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.w2u()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-342194911, $dirty, -1, 'androidx.compose.material3.SingleRowTopAppBar (AppBar.kt:1861)');
      }
      // Inline function 'kotlin.require' call
      var tmp;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(expandedHeight))) {
        // Inline function 'androidx.compose.ui.unit.isFinite' call
        var tmp_0 = _Dp___get_value__impl__geb1vb(expandedHeight);
        tmp = !(tmp_0 === Infinity);
      } else {
        tmp = false;
      }
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
        var message = 'The expandedHeight is expected to be specified and finite';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.p2x(this_0);
      sourceInformationMarkerEnd($composer_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
      var expandedHeightPx = coerceAtLeast(tmp0.h5b(expandedHeight), 0.0);
      sourceInformationMarkerStart($composer_0, -1193658092, 'CC(remember):AppBar.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = !!(($dirty & 1879048192) === 536870912 | $composer_0.j2w(expandedHeightPx));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_1.y2w();
      var tmp_1;
      if (invalid || it === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
        var value = SingleRowTopAppBar$lambda_1(scrollBehavior, expandedHeightPx);
        this_1.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      SideEffect(tmp0_group, $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -1193635911, 'CC(remember):AppBar.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_0 = ($dirty & 1879048192) === 536870912;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_2.y2w();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
        var value_0 = derivedStateOf(SingleRowTopAppBar$lambda_2(scrollBehavior));
        this_2.j2x(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var colorTransitionFraction$delegate = tmp1_group;
      var tmp_5 = colors.hii(SingleRowTopAppBar$lambda(colorTransitionFraction$delegate));
      var tmp_6 = spring(VOID, 400.0);
      var appBarContainerColor$delegate = animateColorAsState(tmp_5, tmp_6, null, null, $composer_0, 48, 12);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1370231018, true, SingleRowTopAppBar$lambda_3(actions), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.h2l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.y2w();
      var tmp_7;
      if (invalid_1 || it_1 === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_2.j2x(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var actionsRow = tmp0_0;
      $composer_0.c2v(-1193605157);
      sourceInformation($composer_0, '1908@87542L55,1908@87519L78,1909@87631L283');
      var tmp_9;
      if (!(scrollBehavior == null) && !scrollBehavior.qin()) {
        var tmp1_orientation = Orientation_Vertical_getInstance();
        sourceInformationMarkerStart($composer_0, -1193599057, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_3 = $composer_0;
        var invalid_2 = ($dirty & 1879048192) === 536870912;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = this_3.y2w();
        var tmp_10;
        if (invalid_2 || it_2 === Companion_getInstance_1().n2o_1) {
          // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
          var value_2 = SingleRowTopAppBar$lambda_4(scrollBehavior);
          this_3.j2x(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = it_2;
        }
        var tmp_11 = tmp_10;
        var tmp2_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp2_state = rememberDraggableState(tmp2_group, $composer_0, 0);
        sourceInformationMarkerStart($composer_0, -1193595981, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_4 = $composer_0;
        var invalid_3 = ($dirty & 1879048192) === 536870912;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = this_4.y2w();
        var tmp_12;
        if (invalid_3 || it_3 === Companion_getInstance_1().n2o_1) {
          // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
          var value_3 = SingleRowTopAppBar$slambda_0(scrollBehavior, null);
          this_4.j2x(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = it_3;
        }
        var tmp_13 = tmp_12;
        var tmp3_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        tmp_9 = draggable(Companion_instance, tmp2_state, tmp1_orientation, VOID, VOID, VOID, VOID, tmp3_group);
      } else {
        tmp_9 = Companion_instance;
      }
      var tmp4_group = tmp_9;
      $composer_0.e2v();
      var appBarDragModifier = tmp4_group;
      var tmp_14 = modifier_0._v.t7b(appBarDragModifier);
      var tmp_15 = SingleRowTopAppBar$lambda_0(appBarContainerColor$delegate);
      var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_18 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-1943739546, true, SingleRowTopAppBar$lambda_5(windowInsets, expandedHeight, scrollBehavior, colors, title, titleTextStyle, centeredTitle, navigationIcon, actionsRow), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = $composer_3.h2l(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.y2w();
      var tmp_19;
      if (invalid_4 || it_4 === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_18(dispatchReceiver_0);
        $composer_3.j2x(value_4);
        tmp_19 = value_4;
      } else {
        tmp_19 = it_4;
      }
      var tmp_20 = tmp_19;
      var tmp0_1 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Surface(tmp_14, null, tmp_15, tmp_16, tmp_17, tmp_18, null, tmp0_1, $composer_0, 12582912, 122);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp5_safe_receiver = $composer_0.y2x();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.r32(SingleRowTopAppBar$lambda_6(modifier_0, title, titleTextStyle, centeredTitle, navigationIcon, actions, expandedHeight, windowInsets, colors, scrollBehavior, $changed, $default));
    }
  }
  function settleAppBar(state, velocity, flingAnimationSpec, snapAnimationSpec, $completion) {
    var tmp = new $settleAppBarCOROUTINE$2(state, velocity, flingAnimationSpec, snapAnimationSpec, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.v9();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function TopAppBarLayout(modifier, scrolledOffset, navigationIconContentColor, titleContentColor, actionIconContentColor, title, titleTextStyle, titleAlpha, titleVerticalArrangement, titleHorizontalArrangement, titleBottomPadding, hideTitleSemantics, navigationIcon, actions, $composer, $changed, $changed1) {
    _init_properties_AppBar_kt__51suc2();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-742442296);
    sourceInformation($composer_0, 'C(TopAppBarLayout)P(3,6,5:c#ui.graphics.Color,10:c#ui.graphics.Color,0:c#ui.graphics.Color,7,12,8,13,11,9,2,4)2163@98873L5882,2135@97725L7030:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.h2l(scrolledOffset) : $composer_0.h2w(scrolledOffset)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(navigationIconContentColor))) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(titleContentColor))) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(actionIconContentColor))) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h2w(title) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.h2l(titleTextStyle) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.j2w(titleAlpha) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.h2l(titleVerticalArrangement) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.h2l(titleHorizontalArrangement) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.l2w(titleBottomPadding) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.i2w(hideTitleSemantics) ? 32 : 16);
    if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.h2w(navigationIcon) ? 256 : 128);
    if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.h2w(actions) ? 2048 : 1024);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 1171) === 1170) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-742442296, $dirty, $dirty1, 'androidx.compose.material3.TopAppBarLayout (AppBar.kt:2134)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout' call
      sourceInformationMarkerStart($composer_0, 1539011656, 'CC(remember):AppBar.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!(!!((($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.h2w(scrolledOffset))) | ($dirty & 1879048192) === 536870912) | ($dirty & 234881024) === 67108864) | ($dirty1 & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (invalid || it === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>' call
        var tmp_0 = TopAppBarLayout$lambda(scrolledOffset, titleHorizontalArrangement, titleVerticalArrangement, titleBottomPadding);
        var value = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_0);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_1 = tmp;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var localMap = $composer_1.w2w();
      var materialized = materialize($composer_1, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().i8t_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp0_group, Companion_getInstance_2().n8t_1);
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
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, 9049318, 'C2137@97755L280,2143@98048L502,2155@98563L264:AppBar.kt#uh7d8r');
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = padding(layoutId(Companion_instance, 'navigationIcon'), get_TopAppBarHorizontalPadding());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_3().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_5, 0);
      var localMap_0 = $composer_5.w2w();
      var materialized_0 = materialize($composer_5, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_2().i8t_1;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_3 = $composer_6.x2u();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_6.q2v();
      if ($composer_6.l2v()) {
        $composer_6.r2v(factory_0);
      } else {
        $composer_6.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy, Companion_getInstance_2().n8t_1);
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
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, 249765716, 'C2138@97858L163:AppBar.kt#uh7d8r');
      CompositionLocalProvider(get_LocalContentColor().k32(new Color(navigationIconContentColor)), navigationIcon, $composer_8, 8 | 112 & $dirty1 >> 3);
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.w2v();
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_4 = padding_0(layoutId(Companion_instance, 'title'), get_TopAppBarHorizontalPadding());
      $composer_3.c2v(-415337101);
      sourceInformation($composer_3, '2146@98246L2');
      var tmp_5;
      if (hideTitleSemantics) {
        var tmp_6 = Companion_instance;
        sourceInformationMarkerStart($composer_3, -415335441, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_3.y2w();
        var tmp_7;
        if (false || it_0 === Companion_getInstance_1().n2o_1) {
          // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
          var value_0 = TopAppBarLayout$lambda_0;
          $composer_3.j2x(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0_group_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        tmp_5 = clearAndSetSemantics(tmp_6, tmp0_group_0);
      } else {
        tmp_5 = Companion_instance;
      }
      var tmp1_group = tmp_5;
      $composer_3.e2v();
      var modifier_3 = graphicsLayer(tmp_4.t7b(tmp1_group), VOID, VOID, titleAlpha);
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_9 = $composer_3;
      sourceInformationMarkerStart($composer_9, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_3().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_10, 0);
      var localMap_1 = $composer_10.w2w();
      var materialized_1 = materialize($composer_10, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_2().i8t_1;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_9 = $composer_11.x2u();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_11.q2v();
      if ($composer_11.l2v()) {
        $composer_11.r2v(factory_1);
      } else {
        $composer_11.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_11);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_0, Companion_getInstance_2().n8t_1);
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
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, 250255454, 'C2149@98351L185:AppBar.kt#uh7d8r');
      ProvideContentColorTextStyle(titleContentColor, titleTextStyle, title, $composer_13, 14 & $dirty >> 9 | 112 & $dirty >> 15 | 896 & $dirty >> 9);
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      $composer_11.w2v();
      sourceInformationMarkerEnd($composer_11);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_5 = padding(layoutId(Companion_instance, 'actionIcons'), VOID, VOID, get_TopAppBarHorizontalPadding());
      var contentAlignment_1 = null;
      var propagateMinConstraints_1 = false;
      var $composer_14 = $composer_3;
      sourceInformationMarkerStart($composer_14, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_5 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_3().x7a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_instance;
      var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_15, 0);
      var localMap_2 = $composer_15.w2w();
      var materialized_2 = materialize($composer_15, modifier_6);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_2 = Companion_getInstance_2().i8t_1;
      var $composer_16 = $composer_15;
      sourceInformationMarkerStart($composer_16, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_10 = $composer_16.x2u();
      if (!isInterface(tmp_10, Applier)) {
        invalidApplier();
      }
      $composer_16.q2v();
      if ($composer_16.l2v()) {
        $composer_16.r2v(factory_2);
      } else {
        $composer_16.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_16);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_1, Companion_getInstance_2().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().m8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_2().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      if ($this$with_2.l2v() || !equals($this$with_2.y2w(), compositeKeyHash_2)) {
        $this$with_2.j2x(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).b2w(compositeKeyHash_2, block_2);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().k8t_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_17 = $composer_16;
      sourceInformationMarkerStart($composer_17, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>' call
      var $composer_18 = $composer_17;
      sourceInformationMarkerStart($composer_18, 250561951, 'C2156@98661L152:AppBar.kt#uh7d8r');
      CompositionLocalProvider(get_LocalContentColor().k32(new Color(actionIconContentColor)), actions, $composer_18, 8 | 112 & $dirty1 >> 6);
      sourceInformationMarkerEnd($composer_18);
      sourceInformationMarkerEnd($composer_17);
      $composer_16.w2v();
      sourceInformationMarkerEnd($composer_16);
      sourceInformationMarkerEnd($composer_15);
      sourceInformationMarkerEnd($composer_14);
      sourceInformationMarkerEnd($composer_3);
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
      tmp1_safe_receiver.r32(TopAppBarLayout$lambda_1(modifier, scrolledOffset, navigationIconContentColor, titleContentColor, actionIconContentColor, title, titleTextStyle, titleAlpha, titleVerticalArrangement, titleHorizontalArrangement, titleBottomPadding, hideTitleSemantics, navigationIcon, actions, $changed, $changed1));
    }
  }
  function ScrolledOffset() {
  }
  function BottomAppBarDefaults() {
    BottomAppBarDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.gio_1 = _Dp___init__impl__ms3zkb(0);
    this.hio_1 = PaddingValues(get_BottomAppBarHorizontalPadding(), get_BottomAppBarVerticalPadding(), get_BottomAppBarHorizontalPadding());
  }
  protoOf(BottomAppBarDefaults).fij = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 688896409, 'C1554@72738L29:AppBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(688896409, $changed, -1, 'androidx.compose.material3.BottomAppBarDefaults.<get-windowInsets> (AppBar.kt:1553)');
    }
    var tmp0 = only(get_systemBarsForVisualComponents(Companion_instance_0, $composer_0, 6), WindowInsetsSides__plus_impl_9q9m59(Companion_getInstance_0().hbc_1, Companion_getInstance_0().ebc_1));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var BottomAppBarDefaults_instance;
  function BottomAppBarDefaults_getInstance() {
    if (BottomAppBarDefaults_instance == null)
      new BottomAppBarDefaults();
    return BottomAppBarDefaults_instance;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.iio_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).p8l = function (_this__u8e3s4, measurables, constraints) {
    return this.iio_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).s3 = function () {
    return this.iio_1;
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
  function SingleRowTopAppBar$lambda($colorTransitionFraction$delegate) {
    _init_properties_AppBar_kt__51suc2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorTransitionFraction', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $colorTransitionFraction$delegate.w();
  }
  function SingleRowTopAppBar$lambda_0($appBarContainerColor$delegate) {
    _init_properties_AppBar_kt__51suc2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('appBarContainerColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $appBarContainerColor$delegate.w().r63_1;
  }
  function TopAppBar$lambda($title, $modifier, $navigationIcon, $actions, $expandedHeight, $windowInsets, $colors, $scrollBehavior, $$changed, $$default) {
    return function ($composer, $force) {
      TopAppBar($title, $modifier._v, $navigationIcon._v, $actions._v, $expandedHeight._v.w5b_1, $windowInsets._v, $colors._v, $scrollBehavior._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SingleRowTopAppBar$lambda_1($scrollBehavior, $expandedHeightPx) {
    return function () {
      var tmp;
      var tmp0_safe_receiver = $scrollBehavior;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z51();
      if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nio()) === -$expandedHeightPx)) {
        var tmp2_safe_receiver = $scrollBehavior;
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.z51();
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = Unit_instance;
        } else {
          tmp3_safe_receiver.mio(-$expandedHeightPx);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function SingleRowTopAppBar$lambda_2($scrollBehavior) {
    return function () {
      var tmp0_safe_receiver = $scrollBehavior;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z51();
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.oio();
      var overlappingFraction = tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
      return overlappingFraction > 0.01 ? 1.0 : 0.0;
    };
  }
  function SingleRowTopAppBar$lambda_3($actions) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1895@87019L173:AppBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(1370231018, $changed, -1, 'androidx.compose.material3.SingleRowTopAppBar.<anonymous> (AppBar.kt:1895)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = null;
        var horizontalArrangement = Arrangement_getInstance().tb1_1;
        var verticalAlignment = Companion_getInstance_3().h7b_1;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((1 & 1) === 0))
          modifier = Companion_instance;
        if (!((1 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().sb1_1;
        if (!((1 & 4) === 0))
          verticalAlignment = Companion_getInstance_3().g7b_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
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
        var tmp_0 = $composer_3.x2u();
        if (!isInterface(tmp_0, Applier)) {
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
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        $actions(RowScopeInstance_instance, $composer_4, 6 | 112 & 432 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.w2v();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function SingleRowTopAppBar$lambda_4($scrollBehavior) {
    return function (delta) {
      var tmp0_this = $scrollBehavior.z51();
      tmp0_this.qio(tmp0_this.pio() + delta);
      return Unit_instance;
    };
  }
  function SingleRowTopAppBar$slambda($scrollBehavior, resultContinuation) {
    this.zio_1 = $scrollBehavior;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SingleRowTopAppBar$slambda).ucr = function ($this$draggable, velocity, $completion) {
    var tmp = this.vcr($this$draggable, velocity, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SingleRowTopAppBar$slambda).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.ucr(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SingleRowTopAppBar$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = settleAppBar(this.zio_1.z51(), this.bip_1, this.zio_1.cip(), this.zio_1.dip(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.t5c_1;
            suspendResult = new Velocity(unboxed);
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
  protoOf(SingleRowTopAppBar$slambda).vcr = function ($this$draggable, velocity, completion) {
    var i = new SingleRowTopAppBar$slambda(this.zio_1, completion);
    i.aip_1 = $this$draggable;
    i.bip_1 = velocity;
    return i;
  };
  function SingleRowTopAppBar$slambda_0($scrollBehavior, resultContinuation) {
    var i = new SingleRowTopAppBar$slambda($scrollBehavior, resultContinuation);
    var l = function ($this$draggable, velocity, $completion) {
      return i.ucr($this$draggable, velocity, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function sam$androidx_compose_material3_ScrolledOffset$0(function_0) {
    this.eip_1 = function_0;
  }
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).fio = function () {
    return this.eip_1();
  };
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).s3 = function () {
    return this.eip_1;
  };
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ScrolledOffset) : false) {
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
  protoOf(sam$androidx_compose_material3_ScrolledOffset$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function SingleRowTopAppBar$lambda$lambda($scrollBehavior) {
    return function () {
      var tmp0_safe_receiver = $scrollBehavior;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z51();
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pio();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function SingleRowTopAppBar$lambda_5($windowInsets, $expandedHeight, $scrollBehavior, $colors, $title, $titleTextStyle, $centeredTitle, $navigationIcon, $actionsRow) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1933@88685L45,1927@88379L998:AppBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1943739546, $changed, -1, 'androidx.compose.material3.SingleRowTopAppBar.<anonymous> (AppBar.kt:1927)');
        }
        var tmp_0 = heightIn(clipToBounds(windowInsetsPadding(Companion_instance, $windowInsets)), VOID, $expandedHeight);
        sourceInformationMarkerStart($composer_0, 660708484, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.h2l($scrollBehavior);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y2w();
        var tmp_1;
        if (invalid || it === Companion_getInstance_1().n2o_1) {
          // Inline function 'androidx.compose.material3.SingleRowTopAppBar.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_2 = SingleRowTopAppBar$lambda$lambda($scrollBehavior);
          var value = new sam$androidx_compose_material3_ScrolledOffset$0(tmp_2);
          $composer_0.j2x(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_3 = tmp_1;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        TopAppBarLayout(tmp_0, tmp0_group, $colors.eii_1, $colors.fii_1, $colors.gii_1, $title, $titleTextStyle, 1.0, Arrangement_getInstance().wb1_1, $centeredTitle ? Arrangement_getInstance().wb1_1 : Arrangement_getInstance().sb1_1, 0, false, $navigationIcon, $actionsRow, $composer_0, 113246208, 3126);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function SingleRowTopAppBar$lambda_6($modifier, $title, $titleTextStyle, $centeredTitle, $navigationIcon, $actions, $expandedHeight, $windowInsets, $colors, $scrollBehavior, $$changed, $$default) {
    return function ($composer, $force) {
      SingleRowTopAppBar($modifier._v, $title, $titleTextStyle, $centeredTitle, $navigationIcon, $actions, $expandedHeight, $windowInsets, $colors, $scrollBehavior, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function settleAppBar$lambda($lastValue, $state, $remainingVelocity) {
    return function ($this$animateDecay) {
      var delta = $this$animateDecay.w() - $lastValue._v;
      var initialHeightOffset = $state.pio();
      $state.qio(initialHeightOffset + delta);
      // Inline function 'kotlin.math.abs' call
      var x = initialHeightOffset - $state.pio();
      var consumed = Math.abs(x);
      $lastValue._v = $this$animateDecay.w();
      $remainingVelocity._v = $this$animateDecay.tag();
      var tmp;
      // Inline function 'kotlin.math.abs' call
      var x_0 = delta - consumed;
      if (Math.abs(x_0) > 0.5) {
        $this$animateDecay.xae();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function settleAppBar$lambda_0($state) {
    return function ($this$animateTo) {
      $state.qio($this$animateTo.w());
      return Unit_instance;
    };
  }
  function TopAppBarLayout$lambda$lambda($navigationIconPlaceable, $layoutHeight, $titlePlaceable, $titleHorizontalArrangement, $constraints, $actionIconsPlaceable, $this_Layout, $titleVerticalArrangement, $titleBottomPadding, $titleBaseline) {
    return function ($this$layout) {
      $this$layout.y7i($navigationIconPlaceable, 0, ($layoutHeight - $navigationIconPlaceable.c7j_1 | 0) / 2 | 0);
      var tmp0_subject = $titleHorizontalArrangement;
      var tmp;
      if (equals(tmp0_subject, Arrangement_getInstance().wb1_1)) {
        var baseX = (_Constraints___get_maxWidth__impl__uuyqc($constraints) - $titlePlaceable.b7j_1 | 0) / 2 | 0;
        if (baseX < $navigationIconPlaceable.b7j_1) {
          baseX = baseX + ($navigationIconPlaceable.b7j_1 - baseX | 0) | 0;
        } else if ((baseX + $titlePlaceable.b7j_1 | 0) > (_Constraints___get_maxWidth__impl__uuyqc($constraints) - $actionIconsPlaceable.b7j_1 | 0)) {
          baseX = baseX + ((_Constraints___get_maxWidth__impl__uuyqc($constraints) - $actionIconsPlaceable.b7j_1 | 0) - (baseX + $titlePlaceable.b7j_1 | 0) | 0) | 0;
        }
        tmp = baseX;
      } else if (equals(tmp0_subject, Arrangement_getInstance().tb1_1)) {
        tmp = (_Constraints___get_maxWidth__impl__uuyqc($constraints) - $titlePlaceable.b7j_1 | 0) - $actionIconsPlaceable.b7j_1 | 0;
      } else {
        // Inline function 'kotlin.math.max' call
        var a = $this_Layout.i5b(get_TopAppBarTitleInset());
        var b = $navigationIconPlaceable.b7j_1;
        tmp = Math.max(a, b);
      }
      var tmp_0 = tmp;
      var tmp1_subject = $titleVerticalArrangement;
      var tmp_1;
      if (equals(tmp1_subject, Arrangement_getInstance().wb1_1)) {
        tmp_1 = ($layoutHeight - $titlePlaceable.c7j_1 | 0) / 2 | 0;
      } else if (equals(tmp1_subject, Arrangement_getInstance().vb1_1)) {
        var tmp_2;
        if ($titleBottomPadding === 0) {
          tmp_2 = $layoutHeight - $titlePlaceable.c7j_1 | 0;
        } else {
          var paddingFromBottom = $titleBottomPadding - ($titlePlaceable.c7j_1 - $titleBaseline | 0) | 0;
          var heightWithPadding = paddingFromBottom + $titlePlaceable.c7j_1 | 0;
          var tmp_3;
          if (heightWithPadding > _Constraints___get_maxHeight__impl__dt3e8z($constraints)) {
            tmp_3 = paddingFromBottom - (heightWithPadding - _Constraints___get_maxHeight__impl__dt3e8z($constraints) | 0) | 0;
          } else {
            tmp_3 = paddingFromBottom;
          }
          var adjustedBottomPadding = tmp_3;
          var tmp_4 = $layoutHeight - $titlePlaceable.c7j_1 | 0;
          // Inline function 'kotlin.math.max' call
          tmp_2 = tmp_4 - Math.max(0, adjustedBottomPadding) | 0;
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = 0;
      }
      $this$layout.y7i($titlePlaceable, tmp_0, tmp_1);
      $this$layout.y7i($actionIconsPlaceable, _Constraints___get_maxWidth__impl__uuyqc($constraints) - $actionIconsPlaceable.b7j_1 | 0, ($layoutHeight - $actionIconsPlaceable.c7j_1 | 0) / 2 | 0);
      return Unit_instance;
    };
  }
  function TopAppBarLayout$lambda($scrolledOffset, $titleHorizontalArrangement, $titleVerticalArrangement, $titleBottomPadding) {
    return function ($this$Layout, measurables, constraints) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastFirst' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = measurables.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = measurables.o(index);
            // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
            // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(item), 'navigationIcon')) {
              tmp$ret$1 = item;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var navigationIconPlaceable = tmp$ret$1.a7j(Constraints__copy$default_impl_f452rp(constraints.a5b_1, 0));
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastFirst' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.j() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.o(index_0);
            // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
            // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(item_0), 'actionIcons')) {
              tmp$ret$3 = item_0;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var actionIconsPlaceable = tmp$ret$3.a7j(Constraints__copy$default_impl_f452rp(constraints.a5b_1, 0));
      var tmp;
      if (_Constraints___get_maxWidth__impl__uuyqc(constraints.a5b_1) === 2147483647) {
        tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints.a5b_1);
      } else {
        tmp = coerceAtLeast_0((_Constraints___get_maxWidth__impl__uuyqc(constraints.a5b_1) - navigationIconPlaceable.b7j_1 | 0) - actionIconsPlaceable.b7j_1 | 0, 0);
      }
      var maxTitleWidth = tmp;
      var tmp$ret$5;
      $l$block_1: {
        // Inline function 'androidx.compose.ui.util.fastFirst' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = measurables.j() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_1 = measurables.o(index_1);
            // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
            // Inline function 'androidx.compose.material3.TopAppBarLayout.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(item_1), 'title')) {
              tmp$ret$5 = item_1;
              break $l$block_1;
            }
          }
           while (inductionVariable_1 <= last_1);
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var titlePlaceable = tmp$ret$5.a7j(Constraints__copy$default_impl_f452rp(constraints.a5b_1, 0, maxTitleWidth));
      var tmp_0;
      if (!(titlePlaceable.v8j(get_LastBaseline()) === -2147483648)) {
        tmp_0 = titlePlaceable.v8j(get_LastBaseline());
      } else {
        tmp_0 = 0;
      }
      var titleBaseline = tmp_0;
      var scrolledOffsetValue = $scrolledOffset.fio();
      var tmp_1;
      if (isNaN_0(scrolledOffsetValue)) {
        tmp_1 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_1 = roundToInt(scrolledOffsetValue);
      }
      var heightOffset = tmp_1;
      var tmp_2;
      if (_Constraints___get_maxHeight__impl__dt3e8z(constraints.a5b_1) === 2147483647) {
        tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints.a5b_1);
      } else {
        tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints.a5b_1) + heightOffset | 0;
      }
      var layoutHeight = tmp_2;
      var tmp_3 = _Constraints___get_maxWidth__impl__uuyqc(constraints.a5b_1);
      return $this$Layout.g7j(tmp_3, layoutHeight, VOID, TopAppBarLayout$lambda$lambda(navigationIconPlaceable, layoutHeight, titlePlaceable, $titleHorizontalArrangement, constraints.a5b_1, actionIconsPlaceable, $this$Layout, $titleVerticalArrangement, $titleBottomPadding, titleBaseline));
    };
  }
  function TopAppBarLayout$lambda_0($this$clearAndSetSemantics) {
    _init_properties_AppBar_kt__51suc2();
    return Unit_instance;
  }
  function TopAppBarLayout$lambda_1($modifier, $scrolledOffset, $navigationIconContentColor, $titleContentColor, $actionIconContentColor, $title, $titleTextStyle, $titleAlpha, $titleVerticalArrangement, $titleHorizontalArrangement, $titleBottomPadding, $hideTitleSemantics, $navigationIcon, $actions, $$changed, $$changed1) {
    return function ($composer, $force) {
      TopAppBarLayout($modifier, $scrolledOffset, $navigationIconContentColor, $titleContentColor, $actionIconContentColor, $title, $titleTextStyle, $titleAlpha, $titleVerticalArrangement, $titleHorizontalArrangement, $titleBottomPadding, $hideTitleSemantics, $navigationIcon, $actions, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  function $settleAppBarCOROUTINE$2(state, velocity, flingAnimationSpec, snapAnimationSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zin_1 = state;
    this.aio_1 = velocity;
    this.bio_1 = flingAnimationSpec;
    this.cio_1 = snapAnimationSpec;
  }
  protoOf($settleAppBarCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            if (this.zin_1.fip() < 0.01 || this.zin_1.fip() === 1.0) {
              return new Velocity(Companion_getInstance_4().v5c_1);
            }

            this.dio_1 = {_v: this.aio_1};
            var tmp_0;
            if (!(this.bio_1 == null)) {
              var x = this.aio_1;
              tmp_0 = Math.abs(x) > 1.0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.eio_1 = {_v: 0.0};
              this.n9_1 = 1;
              var tmp_1 = AnimationState(0.0, this.aio_1);
              suspendResult = animateDecay(tmp_1, this.bio_1, VOID, settleAppBar$lambda(this.eio_1, this.zin_1, this.dio_1), this);
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
            if (!(this.cio_1 == null)) {
              if (this.zin_1.pio() < 0 && this.zin_1.pio() > this.zin_1.nio()) {
                this.n9_1 = 3;
                var tmp_2 = AnimationState(this.zin_1.pio());
                var tmp_3;
                if (this.zin_1.fip() < 0.5) {
                  tmp_3 = 0.0;
                } else {
                  tmp_3 = this.zin_1.nio();
                }
                var tmp_4 = tmp_3;
                suspendResult = animateTo(tmp_2, tmp_4, this.cio_1, VOID, settleAppBar$lambda_0(this.zin_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n9_1 = 4;
                continue $sm;
              }
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return new Velocity(Velocity_0(0.0, this.dio_1._v));
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
  function heightOffsetLimit$factory() {
    return getPropertyCallableRef('heightOffsetLimit', 1, KMutableProperty1, function (receiver) {
      return receiver.nio();
    }, function (receiver, value) {
      return receiver.mio(value);
    });
  }
  function heightOffsetLimit$factory_0() {
    return getPropertyCallableRef('heightOffsetLimit', 1, KMutableProperty1, function (receiver) {
      return receiver.nio();
    }, function (receiver, value) {
      return receiver.mio(value);
    });
  }
  function contentOffset$factory() {
    return getPropertyCallableRef('contentOffset', 1, KMutableProperty1, function (receiver) {
      return receiver.gip();
    }, function (receiver, value) {
      return receiver.hip(value);
    });
  }
  function contentOffset$factory_0() {
    return getPropertyCallableRef('contentOffset', 1, KMutableProperty1, function (receiver) {
      return receiver.gip();
    }, function (receiver, value) {
      return receiver.hip(value);
    });
  }
  var properties_initialized_AppBar_kt_if00s4;
  function _init_properties_AppBar_kt__51suc2() {
    if (!properties_initialized_AppBar_kt_if00s4) {
      properties_initialized_AppBar_kt_if00s4 = true;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_0 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var other = _Dp___init__impl__ms3zkb(12);
      BottomAppBarHorizontalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) - _Dp___get_value__impl__geb1vb(other));
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_1 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var other_0 = _Dp___init__impl__ms3zkb(12);
      BottomAppBarVerticalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) - _Dp___get_value__impl__geb1vb(other_0));
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_2 = _Dp___init__impl__ms3zkb(16);
      var other_1 = get_BottomAppBarHorizontalPadding();
      FABHorizontalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_2) - _Dp___get_value__impl__geb1vb(other_1));
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_3 = _Dp___init__impl__ms3zkb(12);
      var other_2 = get_BottomAppBarVerticalPadding();
      FABVerticalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_3) - _Dp___get_value__impl__geb1vb(other_2));
      TopTitleAlphaEasing = new CubicBezierEasing(0.8, 0.0, 0.8, 0.15);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MediumTitleBottomPadding = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      LargeTitleBottomPadding = _Dp___init__impl__ms3zkb(28);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TopAppBarHorizontalPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_4 = _Dp___init__impl__ms3zkb(16);
      var other_3 = get_TopAppBarHorizontalPadding();
      TopAppBarTitleInset = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_4) - _Dp___get_value__impl__geb1vb(other_3));
    }
  }
  function get_LocalColorScheme() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalColorScheme;
  }
  var LocalColorScheme;
  function get_LocalTonalElevationEnabled() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalTonalElevationEnabled;
  }
  var LocalTonalElevationEnabled;
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest) {
    this.rik_1 = primary;
    this.sik_1 = onPrimary;
    this.tik_1 = primaryContainer;
    this.uik_1 = onPrimaryContainer;
    this.vik_1 = inversePrimary;
    this.wik_1 = secondary;
    this.xik_1 = onSecondary;
    this.yik_1 = secondaryContainer;
    this.zik_1 = onSecondaryContainer;
    this.ail_1 = tertiary;
    this.bil_1 = onTertiary;
    this.cil_1 = tertiaryContainer;
    this.dil_1 = onTertiaryContainer;
    this.eil_1 = background;
    this.fil_1 = onBackground;
    this.gil_1 = surface;
    this.hil_1 = onSurface;
    this.iil_1 = surfaceVariant;
    this.jil_1 = onSurfaceVariant;
    this.kil_1 = surfaceTint;
    this.lil_1 = inverseSurface;
    this.mil_1 = inverseOnSurface;
    this.nil_1 = error;
    this.oil_1 = onError;
    this.pil_1 = errorContainer;
    this.qil_1 = onErrorContainer;
    this.ril_1 = outline;
    this.sil_1 = outlineVariant;
    this.til_1 = scrim;
    this.uil_1 = surfaceBright;
    this.vil_1 = surfaceDim;
    this.wil_1 = surfaceContainer;
    this.xil_1 = surfaceContainerHigh;
    this.yil_1 = surfaceContainerHighest;
    this.zil_1 = surfaceContainerLow;
    this.aim_1 = surfaceContainerLowest;
    this.bim_1 = null;
    this.cim_1 = null;
    this.dim_1 = null;
    this.eim_1 = null;
    this.fim_1 = null;
    this.gim_1 = null;
    this.him_1 = null;
    this.iim_1 = null;
    this.jim_1 = null;
    this.kim_1 = null;
    this.lim_1 = null;
    this.mim_1 = null;
    this.nim_1 = null;
    this.oim_1 = null;
    this.pim_1 = null;
    this.qim_1 = null;
    this.rim_1 = null;
    this.sim_1 = null;
    this.tim_1 = null;
    this.uim_1 = null;
    this.vim_1 = null;
    this.wim_1 = null;
    this.xim_1 = null;
    this.yim_1 = null;
    this.zim_1 = null;
    this.ain_1 = null;
    this.bin_1 = null;
    this.cin_1 = null;
    this.din_1 = null;
    this.ein_1 = null;
    this.fin_1 = null;
    this.gin_1 = null;
    this.hin_1 = null;
    this.iin_1 = null;
    this.jin_1 = null;
    this.kin_1 = null;
    this.lin_1 = null;
    this.min_1 = null;
    this.nin_1 = null;
    this.oin_1 = null;
    this.pin_1 = null;
  }
  protoOf(ColorScheme).iip = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest) {
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest);
  };
  protoOf(ColorScheme).jip = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, $super) {
    primary = primary === VOID ? this.rik_1 : primary;
    onPrimary = onPrimary === VOID ? this.sik_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? this.tik_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? this.uik_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? this.vik_1 : inversePrimary;
    secondary = secondary === VOID ? this.wik_1 : secondary;
    onSecondary = onSecondary === VOID ? this.xik_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? this.yik_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? this.zik_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? this.ail_1 : tertiary;
    onTertiary = onTertiary === VOID ? this.bil_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? this.cil_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? this.dil_1 : onTertiaryContainer;
    background = background === VOID ? this.eil_1 : background;
    onBackground = onBackground === VOID ? this.fil_1 : onBackground;
    surface = surface === VOID ? this.gil_1 : surface;
    onSurface = onSurface === VOID ? this.hil_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? this.iil_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? this.jil_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? this.kil_1 : surfaceTint;
    inverseSurface = inverseSurface === VOID ? this.lil_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? this.mil_1 : inverseOnSurface;
    error = error === VOID ? this.nil_1 : error;
    onError = onError === VOID ? this.oil_1 : onError;
    errorContainer = errorContainer === VOID ? this.pil_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? this.qil_1 : onErrorContainer;
    outline = outline === VOID ? this.ril_1 : outline;
    outlineVariant = outlineVariant === VOID ? this.sil_1 : outlineVariant;
    scrim = scrim === VOID ? this.til_1 : scrim;
    surfaceBright = surfaceBright === VOID ? this.uil_1 : surfaceBright;
    surfaceDim = surfaceDim === VOID ? this.vil_1 : surfaceDim;
    surfaceContainer = surfaceContainer === VOID ? this.wil_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? this.xil_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? this.yil_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? this.zil_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? this.aim_1 : surfaceContainerLowest;
    return $super === VOID ? this.iip(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest) : $super.iip.call(this, new Color(primary), new Color(onPrimary), new Color(primaryContainer), new Color(onPrimaryContainer), new Color(inversePrimary), new Color(secondary), new Color(onSecondary), new Color(secondaryContainer), new Color(onSecondaryContainer), new Color(tertiary), new Color(onTertiary), new Color(tertiaryContainer), new Color(onTertiaryContainer), new Color(background), new Color(onBackground), new Color(surface), new Color(onSurface), new Color(surfaceVariant), new Color(onSurfaceVariant), new Color(surfaceTint), new Color(inverseSurface), new Color(inverseOnSurface), new Color(error), new Color(onError), new Color(errorContainer), new Color(onErrorContainer), new Color(outline), new Color(outlineVariant), new Color(scrim), new Color(surfaceBright), new Color(surfaceDim), new Color(surfaceContainer), new Color(surfaceContainerHigh), new Color(surfaceContainerHighest), new Color(surfaceContainerLow), new Color(surfaceContainerLowest));
  };
  protoOf(ColorScheme).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.ColorScheme.toString.<anonymous>' call
    this_0.p8('ColorScheme(');
    this_0.p8('primary=' + Color__toString_impl_hpzmaq(this.rik_1) + ', ');
    this_0.p8('onPrimary=' + Color__toString_impl_hpzmaq(this.sik_1) + ', ');
    this_0.p8('primaryContainer=' + Color__toString_impl_hpzmaq(this.tik_1) + ', ');
    this_0.p8('onPrimaryContainer=' + Color__toString_impl_hpzmaq(this.uik_1) + ', ');
    this_0.p8('inversePrimary=' + Color__toString_impl_hpzmaq(this.vik_1) + ', ');
    this_0.p8('secondary=' + Color__toString_impl_hpzmaq(this.wik_1) + ', ');
    this_0.p8('onSecondary=' + Color__toString_impl_hpzmaq(this.xik_1) + ', ');
    this_0.p8('secondaryContainer=' + Color__toString_impl_hpzmaq(this.yik_1) + ', ');
    this_0.p8('onSecondaryContainer=' + Color__toString_impl_hpzmaq(this.zik_1) + ', ');
    this_0.p8('tertiary=' + Color__toString_impl_hpzmaq(this.ail_1) + ', ');
    this_0.p8('onTertiary=' + Color__toString_impl_hpzmaq(this.bil_1) + ', ');
    this_0.p8('tertiaryContainer=' + Color__toString_impl_hpzmaq(this.cil_1) + ', ');
    this_0.p8('onTertiaryContainer=' + Color__toString_impl_hpzmaq(this.dil_1) + ', ');
    this_0.p8('background=' + Color__toString_impl_hpzmaq(this.eil_1) + ', ');
    this_0.p8('onBackground=' + Color__toString_impl_hpzmaq(this.fil_1) + ', ');
    this_0.p8('surface=' + Color__toString_impl_hpzmaq(this.gil_1) + ', ');
    this_0.p8('onSurface=' + Color__toString_impl_hpzmaq(this.hil_1) + ', ');
    this_0.p8('surfaceVariant=' + Color__toString_impl_hpzmaq(this.iil_1) + ', ');
    this_0.p8('onSurfaceVariant=' + Color__toString_impl_hpzmaq(this.jil_1) + ', ');
    this_0.p8('surfaceTint=' + Color__toString_impl_hpzmaq(this.kil_1) + ', ');
    this_0.p8('inverseSurface=' + Color__toString_impl_hpzmaq(this.lil_1) + ', ');
    this_0.p8('inverseOnSurface=' + Color__toString_impl_hpzmaq(this.mil_1) + ', ');
    this_0.p8('error=' + Color__toString_impl_hpzmaq(this.nil_1) + ', ');
    this_0.p8('onError=' + Color__toString_impl_hpzmaq(this.oil_1) + ', ');
    this_0.p8('errorContainer=' + Color__toString_impl_hpzmaq(this.pil_1) + ', ');
    this_0.p8('onErrorContainer=' + Color__toString_impl_hpzmaq(this.qil_1) + ', ');
    this_0.p8('outline=' + Color__toString_impl_hpzmaq(this.ril_1) + ', ');
    this_0.p8('outlineVariant=' + Color__toString_impl_hpzmaq(this.sil_1) + ', ');
    this_0.p8('scrim=' + Color__toString_impl_hpzmaq(this.til_1) + ', ');
    this_0.p8('surfaceBright=' + Color__toString_impl_hpzmaq(this.uil_1) + ', ');
    this_0.p8('surfaceDim=' + Color__toString_impl_hpzmaq(this.vil_1) + ', ');
    this_0.p8('surfaceContainer=' + Color__toString_impl_hpzmaq(this.wil_1) + ', ');
    this_0.p8('surfaceContainerHigh=' + Color__toString_impl_hpzmaq(this.xil_1) + ', ');
    this_0.p8('surfaceContainerHighest=' + Color__toString_impl_hpzmaq(this.yil_1) + ', ');
    this_0.p8('surfaceContainerLow=' + Color__toString_impl_hpzmaq(this.zil_1) + ', ');
    this_0.p8('surfaceContainerLowest=' + Color__toString_impl_hpzmaq(this.aim_1) + ', ');
    this_0.p8(')');
    return this_0.toString();
  };
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim) {
    primary = primary === VOID ? ColorLightTokens_getInstance().jiq_1 : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().tip_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().kiq_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().uip_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().oip_1 : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().oiq_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().xip_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().piq_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().yip_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().cir_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().diq_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().dir_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().eiq_1 : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().kip_1 : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().qip_1 : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().siq_1 : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().biq_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().bir_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().ciq_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().pip_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().nip_1 : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().lip_1 : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().rip_1 : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().mip_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().sip_1 : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().hiq_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().iiq_1 : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().niq_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorLightTokens_getInstance().tiq_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorLightTokens_getInstance().uiq_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorLightTokens_getInstance().viq_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorLightTokens_getInstance().wiq_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorLightTokens_getInstance().xiq_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorLightTokens_getInstance().yiq_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorLightTokens_getInstance().ziq_1 : surfaceDim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest);
  }
  function get_value(_this__u8e3s4, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -810780884, 'C1013@45920L11:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-810780884, $changed, -1, 'androidx.compose.material3.<get-value> (ColorScheme.kt:1013)');
    }
    var tmp0 = fromToken(MaterialTheme_instance.pik($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function fromToken(_this__u8e3s4, value) {
    _init_properties_ColorScheme_kt__xhtsty();
    switch (value.u2_1) {
      case 0:
        return _this__u8e3s4.eil_1;
      case 1:
        return _this__u8e3s4.nil_1;
      case 2:
        return _this__u8e3s4.pil_1;
      case 3:
        return _this__u8e3s4.mil_1;
      case 4:
        return _this__u8e3s4.vik_1;
      case 5:
        return _this__u8e3s4.lil_1;
      case 6:
        return _this__u8e3s4.fil_1;
      case 7:
        return _this__u8e3s4.oil_1;
      case 8:
        return _this__u8e3s4.qil_1;
      case 9:
        return _this__u8e3s4.sik_1;
      case 10:
        return _this__u8e3s4.uik_1;
      case 13:
        return _this__u8e3s4.xik_1;
      case 14:
        return _this__u8e3s4.zik_1;
      case 17:
        return _this__u8e3s4.hil_1;
      case 18:
        return _this__u8e3s4.jil_1;
      case 42:
        return _this__u8e3s4.kil_1;
      case 19:
        return _this__u8e3s4.bil_1;
      case 20:
        return _this__u8e3s4.dil_1;
      case 23:
        return _this__u8e3s4.ril_1;
      case 24:
        return _this__u8e3s4.sil_1;
      case 25:
        return _this__u8e3s4.rik_1;
      case 26:
        return _this__u8e3s4.tik_1;
      case 29:
        return _this__u8e3s4.til_1;
      case 30:
        return _this__u8e3s4.wik_1;
      case 31:
        return _this__u8e3s4.yik_1;
      case 34:
        return _this__u8e3s4.gil_1;
      case 43:
        return _this__u8e3s4.iil_1;
      case 35:
        return _this__u8e3s4.uil_1;
      case 36:
        return _this__u8e3s4.wil_1;
      case 37:
        return _this__u8e3s4.xil_1;
      case 38:
        return _this__u8e3s4.yil_1;
      case 39:
        return _this__u8e3s4.zil_1;
      case 40:
        return _this__u8e3s4.aim_1;
      case 41:
        return _this__u8e3s4.vil_1;
      case 44:
        return _this__u8e3s4.ail_1;
      case 45:
        return _this__u8e3s4.cil_1;
      default:
        return Companion_getInstance_5().p60_1;
    }
  }
  function darkColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim) {
    primary = primary === VOID ? ColorDarkTokens_getInstance().fis_1 : primary;
    onPrimary = onPrimary === VOID ? ColorDarkTokens_getInstance().pir_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorDarkTokens_getInstance().gis_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorDarkTokens_getInstance().qir_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorDarkTokens_getInstance().kir_1 : inversePrimary;
    secondary = secondary === VOID ? ColorDarkTokens_getInstance().kis_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorDarkTokens_getInstance().tir_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorDarkTokens_getInstance().lis_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorDarkTokens_getInstance().uir_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorDarkTokens_getInstance().yis_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorDarkTokens_getInstance().zir_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorDarkTokens_getInstance().zis_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorDarkTokens_getInstance().ais_1 : onTertiaryContainer;
    background = background === VOID ? ColorDarkTokens_getInstance().gir_1 : background;
    onBackground = onBackground === VOID ? ColorDarkTokens_getInstance().mir_1 : onBackground;
    surface = surface === VOID ? ColorDarkTokens_getInstance().ois_1 : surface;
    onSurface = onSurface === VOID ? ColorDarkTokens_getInstance().xir_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorDarkTokens_getInstance().xis_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorDarkTokens_getInstance().yir_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorDarkTokens_getInstance().lir_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorDarkTokens_getInstance().jir_1 : inverseOnSurface;
    error = error === VOID ? ColorDarkTokens_getInstance().hir_1 : error;
    onError = onError === VOID ? ColorDarkTokens_getInstance().nir_1 : onError;
    errorContainer = errorContainer === VOID ? ColorDarkTokens_getInstance().iir_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorDarkTokens_getInstance().oir_1 : onErrorContainer;
    outline = outline === VOID ? ColorDarkTokens_getInstance().dis_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorDarkTokens_getInstance().eis_1 : outlineVariant;
    scrim = scrim === VOID ? ColorDarkTokens_getInstance().jis_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorDarkTokens_getInstance().pis_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorDarkTokens_getInstance().qis_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorDarkTokens_getInstance().ris_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorDarkTokens_getInstance().sis_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorDarkTokens_getInstance().tis_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorDarkTokens_getInstance().uis_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorDarkTokens_getInstance().vis_1 : surfaceDim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest);
  }
  function contentColorFor(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 509589638, 'C(contentColorFor)P(0:c#ui.graphics.Color):ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(509589638, $changed, -1, 'androidx.compose.material3.contentColorFor (ColorScheme.kt:882)');
    }
    $composer_0.c2v(-1680919312);
    sourceInformation($composer_0, '*882@40066L11,883@40150L7');
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = contentColorFor_0(MaterialTheme_instance.pik($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.material3.contentColorFor.<anonymous>' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.p2x(this_1);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.r63_1;
    }
    var tmp1_group = tmp;
    $composer_0.e2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function applyTonalElevation(_this__u8e3s4, backgroundColor, elevation, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1610977682, 'C(applyTonalElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)900@41006L7:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1610977682, $changed, -1, 'androidx.compose.material3.applyTonalElevation (ColorScheme.kt:899)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTonalElevationEnabled();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tonalElevationEnabled = tmp0;
    var tmp;
    if (equals(backgroundColor, _this__u8e3s4.gil_1) && tonalElevationEnabled) {
      tmp = surfaceColorAtElevation(_this__u8e3s4, elevation);
    } else {
      tmp = backgroundColor;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function contentColorFor_0(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    return equals(backgroundColor, _this__u8e3s4.rik_1) ? _this__u8e3s4.sik_1 : equals(backgroundColor, _this__u8e3s4.wik_1) ? _this__u8e3s4.xik_1 : equals(backgroundColor, _this__u8e3s4.ail_1) ? _this__u8e3s4.bil_1 : equals(backgroundColor, _this__u8e3s4.eil_1) ? _this__u8e3s4.fil_1 : equals(backgroundColor, _this__u8e3s4.nil_1) ? _this__u8e3s4.oil_1 : equals(backgroundColor, _this__u8e3s4.tik_1) ? _this__u8e3s4.uik_1 : equals(backgroundColor, _this__u8e3s4.yik_1) ? _this__u8e3s4.zik_1 : equals(backgroundColor, _this__u8e3s4.cil_1) ? _this__u8e3s4.dil_1 : equals(backgroundColor, _this__u8e3s4.pil_1) ? _this__u8e3s4.qil_1 : equals(backgroundColor, _this__u8e3s4.lil_1) ? _this__u8e3s4.mil_1 : equals(backgroundColor, _this__u8e3s4.gil_1) ? _this__u8e3s4.hil_1 : equals(backgroundColor, _this__u8e3s4.iil_1) ? _this__u8e3s4.jil_1 : equals(backgroundColor, _this__u8e3s4.uil_1) ? _this__u8e3s4.hil_1 : equals(backgroundColor, _this__u8e3s4.wil_1) ? _this__u8e3s4.hil_1 : equals(backgroundColor, _this__u8e3s4.xil_1) ? _this__u8e3s4.hil_1 : equals(backgroundColor, _this__u8e3s4.yil_1) ? _this__u8e3s4.hil_1 : equals(backgroundColor, _this__u8e3s4.zil_1) ? _this__u8e3s4.hil_1 : equals(backgroundColor, _this__u8e3s4.aim_1) ? _this__u8e3s4.hil_1 : Companion_getInstance_5().p60_1;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(elevation, tmp$ret$0))
      return _this__u8e3s4.gil_1;
    // Inline function 'kotlin.math.ln' call
    var x = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(x) + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.kil_1, alpha), _this__u8e3s4.gil_1);
  }
  function LocalColorScheme$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return lightColorScheme();
  }
  function LocalTonalElevationEnabled$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return true;
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalColorScheme = staticCompositionLocalOf(LocalColorScheme$lambda);
      LocalTonalElevationEnabled = staticCompositionLocalOf(LocalTonalElevationEnabled$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_5().d60_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  function HorizontalDivider(modifier, thickness, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var thickness_0 = {_v: new Dp(thickness)};
    var color_0 = {_v: new Color(color)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(75144485);
    sourceInformation($composer_0, 'C(HorizontalDivider)P(1,2:c#ui.unit.Dp,0:c#ui.graphics.Color)52@2069L5,54@2134L220,54@2084L270:Divider.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j2w(_Dp___get_value__impl__geb1vb(thickness_0._v.w5b_1)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.r63_1))) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          thickness_0._v = new Dp(DividerDefaults_getInstance().cit_1);
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(DividerDefaults_getInstance().dit($composer_0, 6));
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(75144485, $dirty, -1, 'androidx.compose.material3.HorizontalDivider (Divider.kt:54)');
      }
      var tmp = height(fillMaxWidth(modifier_0._v), thickness_0._v.w5b_1);
      sourceInformationMarkerStart($composer_0, -873178642, 'CC(remember):Divider.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(($dirty & 112) === 32 | (($dirty & 896 ^ 384) > 256 && $composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.r63_1))) || ($dirty & 384) === 256));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.HorizontalDivider.<anonymous>' call
        var value = HorizontalDivider$lambda(thickness_0, color_0);
        this_0.j2x(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Canvas(tmp, tmp0_group, $composer_0, 0);
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
      tmp1_safe_receiver.r32(HorizontalDivider$lambda_0(modifier_0, thickness_0, color_0, $changed, $default));
    }
  }
  function VerticalDivider(modifier, thickness, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var thickness_0 = {_v: new Dp(thickness)};
    var color_0 = {_v: new Color(color)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1534852205);
    sourceInformation($composer_0, 'C(VerticalDivider)P(1,2:c#ui.unit.Dp,0:c#ui.graphics.Color)81@3089L5,83@3154L221,83@3104L271:Divider.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j2w(_Dp___get_value__impl__geb1vb(thickness_0._v.w5b_1)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.r63_1))) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          thickness_0._v = new Dp(DividerDefaults_getInstance().cit_1);
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(DividerDefaults_getInstance().dit($composer_0, 6));
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-1534852205, $dirty, -1, 'androidx.compose.material3.VerticalDivider (Divider.kt:83)');
      }
      var tmp = width(fillMaxHeight(modifier_0._v), thickness_0._v.w5b_1);
      sourceInformationMarkerStart($composer_0, -662977123, 'CC(remember):Divider.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(($dirty & 112) === 32 | (($dirty & 896 ^ 384) > 256 && $composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.r63_1))) || ($dirty & 384) === 256));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.VerticalDivider.<anonymous>' call
        var value = VerticalDivider$lambda(thickness_0, color_0);
        this_0.j2x(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Canvas(tmp, tmp0_group, $composer_0, 0);
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
      tmp1_safe_receiver.r32(VerticalDivider$lambda_0(modifier_0, thickness_0, color_0, $changed, $default));
    }
  }
  function DividerDefaults() {
    DividerDefaults_instance = this;
    this.cit_1 = DividerTokens_getInstance().fit_1;
  }
  protoOf(DividerDefaults).dit = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 77461041, 'C118@4183L5:Divider.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(77461041, $changed, -1, 'androidx.compose.material3.DividerDefaults.<get-color> (Divider.kt:118)');
    }
    var tmp0 = get_value(DividerTokens_getInstance().eit_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var DividerDefaults_instance;
  function DividerDefaults_getInstance() {
    if (DividerDefaults_instance == null)
      new DividerDefaults();
    return DividerDefaults_instance;
  }
  function HorizontalDivider$lambda($thickness, $color) {
    return function ($this$Canvas) {
      var tmp0_strokeWidth = $this$Canvas.h5b($thickness._v.w5b_1);
      var tmp1_start = Offset(0.0, $this$Canvas.h5b($thickness._v.w5b_1) / 2);
      var tmp2_end = Offset(_Size___get_width__impl__58y75t($this$Canvas.h5a()), $this$Canvas.h5b($thickness._v.w5b_1) / 2);
      $this$Canvas.a6d($color._v.r63_1, tmp1_start, tmp2_end, tmp0_strokeWidth);
      return Unit_instance;
    };
  }
  function HorizontalDivider$lambda_0($modifier, $thickness, $color, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider($modifier._v, $thickness._v.w5b_1, $color._v.r63_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function VerticalDivider$lambda($thickness, $color) {
    return function ($this$Canvas) {
      var tmp0_strokeWidth = $this$Canvas.h5b($thickness._v.w5b_1);
      var tmp1_start = Offset($this$Canvas.h5b($thickness._v.w5b_1) / 2, 0.0);
      var tmp2_end = Offset($this$Canvas.h5b($thickness._v.w5b_1) / 2, _Size___get_height__impl__a04p02($this$Canvas.h5a()));
      $this$Canvas.a6d($color._v.r63_1, tmp1_start, tmp2_end, tmp0_strokeWidth);
      return Unit_instance;
    };
  }
  function VerticalDivider$lambda_0($modifier, $thickness, $color, $$changed, $$default) {
    return function ($composer, $force) {
      VerticalDivider($modifier._v, $thickness._v.w5b_1, $color._v.r63_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var LocalUsingExpressiveTheme;
  function MaterialTheme() {
  }
  protoOf(MaterialTheme).pik = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -561618718, 'C83@3609L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-561618718, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-colorScheme> (MaterialTheme.kt:83)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorScheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).git = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -942794935, 'C91@3895L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-942794935, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-typography> (MaterialTheme.kt:91)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).hit = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 419509830, 'C99@4161L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(419509830, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-shapes> (MaterialTheme.kt:99)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalShapes();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    return MaterialTheme_instance;
  }
  function MaterialTheme_0(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-2127166334);
    sourceInformation($composer_0, 'C(MaterialTheme)P(!1,2,3)51@2364L11,52@2412L6,53@2463L10,56@2542L32,57@2601L40,67@3101L81,59@2681L501:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.h2l(colorScheme_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.h2l(shapes_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.h2l(typography_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(content) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.pik($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_instance.hit($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_instance.git($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-2127166334, $dirty, -1, 'androidx.compose.material3.MaterialTheme (MaterialTheme.kt:55)');
      }
      var tmp = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rippleOrFallbackImplementation(false, tmp, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors(colorScheme_0._v, $composer_0, 14 & $dirty);
      var tmp_0 = [get_LocalColorScheme().k32(colorScheme_0._v), get_LocalIndication().k32(rippleIndication), get_LocalRippleTheme().k32(CompatRippleTheme_instance), get_LocalShapes().k32(shapes_0._v), get_LocalTextSelectionColors().k32(selectionColors), get_LocalTypography().k32(typography_0._v)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.MaterialTheme.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1066563262, true, MaterialTheme$lambda(typography_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.h2l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.y2w();
      var tmp_1;
      if (invalid || it === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.MaterialTheme.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.j2x(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider_0(tmp_0, tmp0, $composer_0, 56);
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
      tmp0_safe_receiver.r32(MaterialTheme$lambda_0(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1866455512, 'C(rememberTextSelectionColors)161@6816L198:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1866455512, $changed, -1, 'androidx.compose.material3.rememberTextSelectionColors (MaterialTheme.kt:159)');
    }
    var primaryColor = colorScheme.rik_1;
    sourceInformationMarkerStart($composer_0, -1160063291, 'CC(remember):MaterialTheme.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(primaryColor)));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance_1().n2o_1) {
      // Inline function 'androidx.compose.material3.rememberTextSelectionColors.<anonymous>' call
      var value = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function LocalUsingExpressiveTheme$lambda() {
    _init_properties_MaterialTheme_kt__ccmets();
    return false;
  }
  function MaterialTheme$lambda($typography, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C68@3111L65:MaterialTheme.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1066563262, $changed, -1, 'androidx.compose.material3.MaterialTheme.<anonymous> (MaterialTheme.kt:68)');
        }
        ProvideTextStyle($typography._v.rit_1, $content, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function MaterialTheme$lambda_0($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme_0($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (!properties_initialized_MaterialTheme_kt_8j16em) {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      LocalUsingExpressiveTheme = staticCompositionLocalOf(LocalUsingExpressiveTheme$lambda);
    }
  }
  function get_LocalUseFallbackRippleImplementation() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalUseFallbackRippleImplementation;
  }
  var LocalUseFallbackRippleImplementation;
  function get_LocalRippleConfiguration() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalRippleConfiguration;
  }
  var LocalRippleConfiguration;
  function get_DefaultBoundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultBoundedRipple;
  }
  var DefaultBoundedRipple;
  function get_DefaultUnboundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultUnboundedRipple;
  }
  var DefaultUnboundedRipple;
  function RippleConfiguration(color, rippleAlpha) {
    color = color === VOID ? Companion_getInstance_5().p60_1 : color;
    rippleAlpha = rippleAlpha === VOID ? null : rippleAlpha;
    this.xit_1 = color;
    this.yit_1 = rippleAlpha;
  }
  protoOf(RippleConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleConfiguration))
      return false;
    if (!equals(this.xit_1, other.xit_1))
      return false;
    if (!equals(this.yit_1, other.yit_1))
      return false;
    return true;
  };
  protoOf(RippleConfiguration).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.xit_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.yit_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RippleConfiguration).toString = function () {
    return 'RippleConfiguration(color=' + Color__toString_impl_hpzmaq(this.xit_1) + ', rippleAlpha=' + toString_0(this.yit_1) + ')';
  };
  function RippleNodeFactory_init_$Init$(bounded, radius, color, $this) {
    RippleNodeFactory.call($this, bounded, radius, null, color);
    return $this;
  }
  function RippleNodeFactory_init_$Create$(bounded, radius, color) {
    return RippleNodeFactory_init_$Init$(bounded, radius, color, objectCreate(protoOf(RippleNodeFactory)));
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0(function_0) {
    this.zit_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).x64 = function () {
    return this.zit_1().r63_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).s3 = function () {
    return this.zit_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function RippleNodeFactory$create$lambda(this$0) {
    return function () {
      return new Color(this$0.diu_1);
    };
  }
  function RippleNodeFactory(bounded, radius, colorProducer, color) {
    this.aiu_1 = bounded;
    this.biu_1 = radius;
    this.ciu_1 = colorProducer;
    this.diu_1 = color;
  }
  protoOf(RippleNodeFactory).lbx = function (interactionSource) {
    var tmp0_elvis_lhs = this.ciu_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = RippleNodeFactory$create$lambda(this);
      tmp = new sam$androidx_compose_ui_graphics_ColorProducer$0(tmp_0);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var colorProducer = tmp;
    return new DelegatingThemeAwareRippleNode(interactionSource, this.aiu_1, this.biu_1, colorProducer);
  };
  protoOf(RippleNodeFactory).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleNodeFactory))
      return false;
    if (!(this.aiu_1 === other.aiu_1))
      return false;
    if (!equals(this.biu_1, other.biu_1))
      return false;
    if (!equals(this.ciu_1, other.ciu_1))
      return false;
    return equals(this.diu_1, other.diu_1);
  };
  protoOf(RippleNodeFactory).hashCode = function () {
    var result = getBooleanHashCode(this.aiu_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.biu_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.ciu_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.diu_1) | 0;
    return result;
  };
  function updateConfiguration($this) {
    observeReads($this, DelegatingThemeAwareRippleNode$updateConfiguration$lambda($this));
  }
  function attachNewRipple($this) {
    var tmp = DelegatingThemeAwareRippleNode$attachNewRipple$lambda($this);
    var calculateColor = new sam$androidx_compose_ui_graphics_ColorProducer$0_0(tmp);
    var calculateRippleAlpha = DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0($this);
    $this.xiu_1 = $this.b8x(createRippleModifierNode($this.tiu_1, $this.uiu_1, $this.viu_1, calculateColor, calculateRippleAlpha));
  }
  function removeRipple($this) {
    var tmp0_safe_receiver = $this.xiu_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.d8x(tmp0_safe_receiver);
    }
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0_0(function_0) {
    this.yiu_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).x64 = function () {
    return this.yiu_1().r63_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).s3 = function () {
    return this.yiu_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function DelegatingThemeAwareRippleNode$updateConfiguration$lambda(this$0) {
    return function () {
      var configuration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp;
      if (configuration == null) {
        removeRipple(this$0);
        tmp = Unit_instance;
      } else {
        var tmp_0;
        if (this$0.xiu_1 == null) {
          attachNewRipple(this$0);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda(this$0) {
    return function () {
      var userDefinedColor = this$0.wiu_1.x64();
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(userDefinedColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp = userDefinedColor;
      } else {
        var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
        var tmp_0;
        var tmp1_safe_receiver = rippleConfiguration == null ? null : rippleConfiguration.xit_1;
        var tmp_1;
        var tmp_2 = tmp1_safe_receiver;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          tmp_1 = !equals(_Color___get_value__impl__1pls5m(tmp1_safe_receiver), _ULong___init__impl__c78o9k(new Long(16, 0)));
        }
        if (tmp_1 === true) {
          tmp_0 = rippleConfiguration.xit_1;
        } else {
          tmp_0 = currentValueOf(this$0, get_LocalContentColor()).r63_1;
        }
        tmp = tmp_0;
      }
      return new Color(tmp);
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0(this$0) {
    return function () {
      var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp1_elvis_lhs = rippleConfiguration == null ? null : rippleConfiguration.yit_1;
      return tmp1_elvis_lhs == null ? RippleDefaults_getInstance().ziu_1 : tmp1_elvis_lhs;
    };
  }
  function DelegatingThemeAwareRippleNode(interactionSource, bounded, radius, color) {
    DelegatingNode.call(this);
    this.tiu_1 = interactionSource;
    this.uiu_1 = bounded;
    this.viu_1 = radius;
    this.wiu_1 = color;
    this.xiu_1 = null;
  }
  protoOf(DelegatingThemeAwareRippleNode).s7c = function () {
    updateConfiguration(this);
  };
  protoOf(DelegatingThemeAwareRippleNode).v7g = function () {
    updateConfiguration(this);
  };
  function RippleDefaults() {
    RippleDefaults_instance = this;
    var tmp = this;
    tmp.ziu_1 = new RippleAlpha(0.16, 0.1, 0.08, 0.1);
  }
  var RippleDefaults_instance;
  function RippleDefaults_getInstance() {
    if (RippleDefaults_instance == null)
      new RippleDefaults();
    return RippleDefaults_instance;
  }
  function rippleOrFallbackImplementation(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = bounded;
    var radius_0 = radius;
    var color_0 = color;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1315814667, 'C(rippleOrFallbackImplementation)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color):Ripple.kt#uh7d8r');
    if (!(($default & 1) === 0))
      bounded_0 = true;
    if (!(($default & 2) === 0))
      radius_0 = Companion_getInstance().z5b_1;
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_5().p60_1;
    if (isTraceInProgress()) {
      traceEventStart(-1315814667, $changed, -1, 'androidx.compose.material3.rippleOrFallbackImplementation (Ripple.kt:230)');
    }
    $composer_0.c2v(-1280632857);
    sourceInformation($composer_0, '231@10696L7,232@10748L38');
    var tmp;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalUseFallbackRippleImplementation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      tmp = rememberRipple(bounded_0, radius_0, color_0, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed, 0);
    } else {
      tmp = ripple(bounded_0, radius_0, color_0);
    }
    var tmp1_group = tmp;
    $composer_0.e2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function CompatRippleTheme() {
  }
  protoOf(CompatRippleTheme).pie = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-1844533201);
    sourceInformation($composer_0, 'C(defaultColor)244@11142L7:Ripple.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1844533201, $changed, -1, 'androidx.compose.material3.CompatRippleTheme.defaultColor (Ripple.kt:244)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.r63_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0_0;
  };
  protoOf(CompatRippleTheme).qie = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-290975286);
    sourceInformation($composer_0, 'C(rippleAlpha):Ripple.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-290975286, $changed, -1, 'androidx.compose.material3.CompatRippleTheme.rippleAlpha (Ripple.kt:248)');
    }
    var tmp0 = RippleDefaults_getInstance().ziu_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  var CompatRippleTheme_instance;
  function CompatRippleTheme_getInstance() {
    return CompatRippleTheme_instance;
  }
  function ripple(bounded, radius, color) {
    bounded = bounded === VOID ? true : bounded;
    radius = radius === VOID ? Companion_getInstance().z5b_1 : radius;
    color = color === VOID ? Companion_getInstance_5().p60_1 : color;
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (equals(radius, Companion_getInstance().z5b_1) && equals(color, Companion_getInstance_5().p60_1)) {
      var tmp_0;
      if (bounded) {
        return get_DefaultBoundedRipple();
      } else {
        tmp_0 = get_DefaultUnboundedRipple();
      }
      tmp = tmp_0;
    } else {
      tmp = RippleNodeFactory_init_$Create$(bounded, radius, color);
    }
    return tmp;
  }
  function LocalUseFallbackRippleImplementation$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return false;
  }
  function LocalRippleConfiguration$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return new RippleConfiguration();
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      LocalUseFallbackRippleImplementation = staticCompositionLocalOf(LocalUseFallbackRippleImplementation$lambda);
      LocalRippleConfiguration = compositionLocalOf(VOID, LocalRippleConfiguration$lambda);
      DefaultBoundedRipple = RippleNodeFactory_init_$Create$(true, Companion_getInstance().z5b_1, Companion_getInstance_5().p60_1);
      DefaultUnboundedRipple = RippleNodeFactory_init_$Create$(false, Companion_getInstance().z5b_1, Companion_getInstance_5().p60_1);
    }
  }
  function get_FabSpacing() {
    _init_properties_Scaffold_kt__o4wwkq();
    return FabSpacing;
  }
  var FabSpacing;
  function Scaffold(modifier, topBar, bottomBar, snackbarHost, floatingActionButton, floatingActionButtonPosition, containerColor, contentColor, contentWindowInsets, content, $composer, $changed, $default) {
    _init_properties_Scaffold_kt__o4wwkq();
    var modifier_0 = {_v: modifier};
    var topBar_0 = {_v: topBar};
    var bottomBar_0 = {_v: bottomBar};
    var snackbarHost_0 = {_v: snackbarHost};
    var floatingActionButton_0 = {_v: floatingActionButton};
    var floatingActionButtonPosition_0 = {_v: new FabPosition(floatingActionButtonPosition)};
    var containerColor_0 = {_v: new Color(containerColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var contentWindowInsets_0 = {_v: contentWindowInsets};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1219521777);
    sourceInformation($composer_0, 'C(Scaffold)P(7,9!1,8,5,6:c#material3.FabPosition,1:c#ui.graphics.Color,3:c#ui.graphics.Color,4)90@4654L11,91@4704L31,92@4794L19,95@4889L74,98@5047L224,104@5347L314,96@4968L693:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(topBar_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(bottomBar_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(snackbarHost_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2w(floatingActionButton_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.l2w(_get_value__a43j40(floatingActionButtonPosition_0._v.aiv_1)) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor_0._v.r63_1))) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | (($default & 128) === 0 && $composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.r63_1))) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | (($default & 256) === 0 && $composer_0.h2l(contentWindowInsets_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.h2w(content) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          topBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().biv_1;
        }
        if (!(($default & 4) === 0)) {
          bottomBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().civ_1;
        }
        if (!(($default & 8) === 0)) {
          snackbarHost_0._v = ComposableSingletons$ScaffoldKt_getInstance().div_1;
        }
        if (!(($default & 16) === 0)) {
          floatingActionButton_0._v = ComposableSingletons$ScaffoldKt_getInstance().eiv_1;
        }
        if (!(($default & 32) === 0)) {
          floatingActionButtonPosition_0._v = new FabPosition(Companion_getInstance_14().hiv_1);
        }
        if (!(($default & 64) === 0)) {
          containerColor_0._v = new Color(MaterialTheme_instance.pik($composer_0, 6).eil_1);
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          contentColor_0._v = new Color(contentColorFor(containerColor_0._v.r63_1, $composer_0, 14 & $dirty >> 18));
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentWindowInsets_0._v = ScaffoldDefaults_instance.jiv($composer_0, 6);
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-1219521777, $dirty, -1, 'androidx.compose.material3.Scaffold (Scaffold.kt:94)');
      }
      sourceInformationMarkerStart($composer_0, -1794939901, 'CC(remember):Scaffold.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 234881024 ^ 100663296) > 67108864 && $composer_0.h2l(contentWindowInsets_0._v) || ($dirty & 100663296) === 67108864;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (invalid || it === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.Scaffold.<anonymous>' call
        var value = new MutableWindowInsets(contentWindowInsets_0._v);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var safeInsets = tmp0_group;
      var tmp_1 = modifier_0._v;
      sourceInformationMarkerStart($composer_0, -1794934695, 'CC(remember):Scaffold.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid_0 = !!($composer_0.h2l(safeInsets) | (($dirty & 234881024 ^ 100663296) > 67108864 && $composer_0.h2l(contentWindowInsets_0._v) || ($dirty & 100663296) === 67108864));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y2w();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.Scaffold.<anonymous>' call
        var value_0 = Scaffold$lambda(safeInsets, contentWindowInsets_0);
        this_1.j2x(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_4 = onConsumedWindowInsetsChanged(tmp_1, tmp1_group);
      var tmp_5 = containerColor_0._v;
      var tmp_6 = contentColor_0._v;
      var tmp_7 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.Scaffold.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1979205334, true, Scaffold$lambda_0(floatingActionButtonPosition_0, topBar_0, content, snackbarHost_0, floatingActionButton_0, safeInsets, bottomBar_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.h2l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.y2w();
      var tmp_9;
      if (invalid_1 || it_1 === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.Scaffold.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.j2x(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Surface(tmp_4, null, tmp_5.r63_1, tmp_6.r63_1, tmp_7, tmp_8, null, tmp0, $composer_0, 12582912 | 896 & $dirty >> 12 | 7168 & $dirty >> 12, 114);
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
      tmp2_safe_receiver.r32(Scaffold$lambda_1(modifier_0, topBar_0, bottomBar_0, snackbarHost_0, floatingActionButton_0, floatingActionButtonPosition_0, containerColor_0, contentColor_0, contentWindowInsets_0, content, $changed, $default));
    }
  }
  function _FabPosition___init__impl__9ib2hj(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.fiv_1 = _FabPosition___init__impl__9ib2hj(0);
    this.giv_1 = _FabPosition___init__impl__9ib2hj(1);
    this.hiv_1 = _FabPosition___init__impl__9ib2hj(2);
    this.iiv_1 = _FabPosition___init__impl__9ib2hj(3);
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function FabPosition__toString_impl_vcmu5r($this) {
    return $this === Companion_getInstance_14().fiv_1 ? 'FabPosition.Start' : $this === Companion_getInstance_14().giv_1 ? 'FabPosition.Center' : $this === Companion_getInstance_14().hiv_1 ? 'FabPosition.End' : 'FabPosition.EndOverlay';
  }
  function FabPosition__hashCode_impl_hxbb0i($this) {
    return $this;
  }
  function FabPosition__equals_impl_9xsrq6($this, other) {
    if (!(other instanceof FabPosition))
      return false;
    if (!($this === (other instanceof FabPosition ? other.aiv_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FabPosition(value) {
    Companion_getInstance_14();
    this.aiv_1 = value;
  }
  protoOf(FabPosition).toString = function () {
    return FabPosition__toString_impl_vcmu5r(this.aiv_1);
  };
  protoOf(FabPosition).hashCode = function () {
    return FabPosition__hashCode_impl_hxbb0i(this.aiv_1);
  };
  protoOf(FabPosition).equals = function (other) {
    return FabPosition__equals_impl_9xsrq6(this.aiv_1, other);
  };
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_1$lambda_bni9o6($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1519764251, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-1.<anonymous> (Scaffold.kt:85)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_2$lambda_h647e1($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(836907051, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-2.<anonymous> (Scaffold.kt:86)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_3$lambda_p1ddiw($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-297736342, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-3.<anonymous> (Scaffold.kt:87)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_4$lambda_3s93jb($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(1545895435, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-4.<anonymous> (Scaffold.kt:88)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ScaffoldKt() {
    ComposableSingletons$ScaffoldKt_instance = this;
    var tmp = this;
    tmp.biv_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(1519764251, false, ComposableSingletons$ScaffoldKt$lambda_1$lambda_bni9o6));
    var tmp_0 = this;
    tmp_0.civ_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(836907051, false, ComposableSingletons$ScaffoldKt$lambda_2$lambda_h647e1));
    var tmp_1 = this;
    tmp_1.div_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-297736342, false, ComposableSingletons$ScaffoldKt$lambda_3$lambda_p1ddiw));
    var tmp_2 = this;
    tmp_2.eiv_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1545895435, false, ComposableSingletons$ScaffoldKt$lambda_4$lambda_3s93jb));
  }
  var ComposableSingletons$ScaffoldKt_instance;
  function ComposableSingletons$ScaffoldKt_getInstance() {
    if (ComposableSingletons$ScaffoldKt_instance == null)
      new ComposableSingletons$ScaffoldKt();
    return ComposableSingletons$ScaffoldKt_instance;
  }
  function ScaffoldDefaults() {
  }
  protoOf(ScaffoldDefaults).jiv = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 757124140, 'C292@13799L29:Scaffold.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(757124140, $changed, -1, 'androidx.compose.material3.ScaffoldDefaults.<get-contentWindowInsets> (Scaffold.kt:292)');
    }
    var tmp0 = get_systemBarsForVisualComponents(Companion_instance_0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var ScaffoldDefaults_instance;
  function ScaffoldDefaults_getInstance() {
    return ScaffoldDefaults_instance;
  }
  function ScaffoldLayout(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $composer, $changed) {
    _init_properties_Scaffold_kt__o4wwkq();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-975511942);
    sourceInformation($composer_0, 'C(ScaffoldLayout)P(4:c#material3.FabPosition,6,1,5,3,2)139@6582L6951,139@6565L6968:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.l2w(_get_value__a43j40(fabPosition)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(topBar) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(content) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.h2w(snackbar) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2w(fab) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h2l(contentWindowInsets) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.h2w(bottomBar) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-975511942, $dirty, -1, 'androidx.compose.material3.ScaffoldLayout (Scaffold.kt:138)');
      }
      sourceInformationMarkerStart($composer_0, 1690368138, 'CC(remember):Scaffold.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 7168) === 2048) | ($dirty & 458752) === 131072) | ($dirty & 57344) === 16384) | ($dirty & 14) === 4) | ($dirty & 3670016) === 1048576) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y2w();
      var tmp;
      if (invalid || it === Companion_getInstance_1().n2o_1) {
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>' call
        var value = ScaffoldLayout$lambda(topBar, snackbar, contentWindowInsets, fab, fabPosition, bottomBar, content);
        this_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      SubcomposeLayout(null, tmp0_group, $composer_0, 0, 1);
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
      tmp1_safe_receiver.r32(ScaffoldLayout$lambda_0(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $changed));
    }
  }
  var ScaffoldLayoutContent_TopBar_instance;
  var ScaffoldLayoutContent_MainContent_instance;
  var ScaffoldLayoutContent_Snackbar_instance;
  var ScaffoldLayoutContent_Fab_instance;
  var ScaffoldLayoutContent_BottomBar_instance;
  var ScaffoldLayoutContent_entriesInitialized;
  function ScaffoldLayoutContent_initEntries() {
    if (ScaffoldLayoutContent_entriesInitialized)
      return Unit_instance;
    ScaffoldLayoutContent_entriesInitialized = true;
    ScaffoldLayoutContent_TopBar_instance = new ScaffoldLayoutContent('TopBar', 0);
    ScaffoldLayoutContent_MainContent_instance = new ScaffoldLayoutContent('MainContent', 1);
    ScaffoldLayoutContent_Snackbar_instance = new ScaffoldLayoutContent('Snackbar', 2);
    ScaffoldLayoutContent_Fab_instance = new ScaffoldLayoutContent('Fab', 3);
    ScaffoldLayoutContent_BottomBar_instance = new ScaffoldLayoutContent('BottomBar', 4);
  }
  function ScaffoldLayoutContent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FabPlacement(left, width, height) {
    this.kiv_1 = left;
    this.liv_1 = width;
    this.miv_1 = height;
  }
  function Scaffold$lambda($safeInsets, $contentWindowInsets) {
    return function (consumedWindowInsets) {
      $safeInsets.oiv(exclude($contentWindowInsets._v, consumedWindowInsets));
      return Unit_instance;
    };
  }
  function Scaffold$lambda_0($floatingActionButtonPosition, $topBar, $content, $snackbarHost, $floatingActionButton, $safeInsets, $bottomBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C105@5357L298:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1979205334, $changed, -1, 'androidx.compose.material3.Scaffold.<anonymous> (Scaffold.kt:105)');
        }
        ScaffoldLayout($floatingActionButtonPosition._v.aiv_1, $topBar._v, $content, $snackbarHost._v, $floatingActionButton._v, $safeInsets, $bottomBar._v, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function Scaffold$lambda_1($modifier, $topBar, $bottomBar, $snackbarHost, $floatingActionButton, $floatingActionButtonPosition, $containerColor, $contentColor, $contentWindowInsets, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Scaffold($modifier._v, $topBar._v, $bottomBar._v, $snackbarHost._v, $floatingActionButton._v, $floatingActionButtonPosition._v.aiv_1, $containerColor._v.r63_1, $contentColor._v.r63_1, $contentWindowInsets._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ScaffoldLayout$lambda$lambda($bottomBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C209@10015L11:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-2146438447, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous> (Scaffold.kt:209)');
        }
        $bottomBar($composer_0, 0);
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
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  function ScaffoldLayout$lambda$lambda_0($contentWindowInsets, $this_SubcomposeLayout, $topBarPlaceables, $topBarHeight, $bottomBarPlaceables, $bottomBarHeight, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C260@12377L21:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-1213360416, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous> (Scaffold.kt:238)');
        }
        var insets = asPaddingValues($contentWindowInsets, $this_SubcomposeLayout);
        var tmp_0;
        if ($topBarPlaceables.q()) {
          tmp_0 = insets.cb5();
        } else {
          tmp_0 = $this_SubcomposeLayout.o5b($topBarHeight);
        }
        var tmp0_top = tmp_0;
        var tmp_1;
        if ($bottomBarPlaceables.q() || $bottomBarHeight == null) {
          tmp_1 = insets.db5();
        } else {
          tmp_1 = $this_SubcomposeLayout.o5b($bottomBarHeight);
        }
        var tmp1_bottom = tmp_1;
        var tmp2_start = calculateStartPadding(insets, $this_SubcomposeLayout.u6c());
        var tmp3_end = calculateEndPadding(insets, $this_SubcomposeLayout.u6c());
        var innerPadding = PaddingValues(tmp2_start, tmp0_top, tmp3_end, tmp1_bottom);
        $content(innerPadding, $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda$lambda_1($bodyContentPlaceables, $topBarPlaceables, $snackbarPlaceables, $layoutWidth, $snackbarWidth, $contentWindowInsets, $this_SubcomposeLayout, $layoutHeight, $snackbarOffsetFromBottom, $bottomBarPlaceables, $bottomBarHeight, $fabPlacement, $fabPlaceables, $fabOffsetFromBottom) {
    return function ($this$layout) {
      var this_0 = $bodyContentPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$layout.e8m(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      var this_1 = $topBarPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.j() - 1 | 0;
      var tmp_0;
      if (inductionVariable_0 <= last_0) {
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.o(index_0);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$layout.e8m(item_0, 0, 0);
        }
         while (inductionVariable_0 <= last_0);
        tmp_0 = Unit_instance;
      }
      var this_2 = $snackbarPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = this_2.j() - 1 | 0;
      var tmp_1;
      if (inductionVariable_1 <= last_1) {
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = this_2.o(index_1);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$layout.e8m(item_1, (($layoutWidth - $snackbarWidth | 0) / 2 | 0) + $contentWindowInsets.tbb($this_SubcomposeLayout, $this_SubcomposeLayout.u6c()) | 0, $layoutHeight - $snackbarOffsetFromBottom | 0);
        }
         while (inductionVariable_1 <= last_1);
        tmp_1 = Unit_instance;
      }
      var this_3 = $bottomBarPlaceables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = this_3.j() - 1 | 0;
      var tmp_2;
      if (inductionVariable_2 <= last_2) {
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_2 = this_3.o(index_2);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_elvis_lhs = $bottomBarHeight;
          $this$layout.e8m(item_2, 0, $layoutHeight - (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0);
        }
         while (inductionVariable_2 <= last_2);
        tmp_2 = Unit_instance;
      }
      var tmp0_safe_receiver = $fabPlacement;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var this_4 = $fabPlaceables;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_3 = 0;
        var last_3 = this_4.j() - 1 | 0;
        if (inductionVariable_3 <= last_3)
          do {
            var index_3 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var item_3 = this_4.o(index_3);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            $this$layout.e8m(item_3, tmp0_safe_receiver.kiv_1, $layoutHeight - ensureNotNull($fabOffsetFromBottom) | 0);
          }
           while (inductionVariable_3 <= last_3);
      }
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda($topBar, $snackbar, $contentWindowInsets, $fab, $fabPosition, $bottomBar, $content) {
    return function ($this$SubcomposeLayout, constraints) {
      var layoutWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints.a5b_1);
      var layoutHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints.a5b_1);
      var looseConstraints = Constraints__copy$default_impl_f452rp(constraints.a5b_1, 0, VOID, 0);
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var this_0 = $this$SubcomposeLayout.w8r(ScaffoldLayoutContent_TopBar_getInstance(), $topBar);
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$(this_0.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var element = item.a7j(looseConstraints);
          target.e(element);
        }
         while (inductionVariable <= last);
      var topBarPlaceables = target;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (topBarPlaceables.q()) {
          tmp$ret$2 = null;
          break $l$block;
        }
        var maxElem = topBarPlaceables.o(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue = maxElem.c7j_1;
        var inductionVariable_0 = 1;
        var last_0 = get_lastIndex(topBarPlaceables);
        if (inductionVariable_0 <= last_0)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var e = topBarPlaceables.o(i);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v = e.c7j_1;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last_0));
        tmp$ret$2 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$2;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c7j_1;
      var topBarHeight = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var this_1 = $this$SubcomposeLayout.w8r(ScaffoldLayoutContent_Snackbar_getInstance(), $snackbar);
      // Inline function 'kotlin.contracts.contract' call
      var target_0 = ArrayList_init_$Create$(this_1.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = this_1.j() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = this_1.o(index_0);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var leftInset = $contentWindowInsets.tbb($this$SubcomposeLayout, $this$SubcomposeLayout.u6c());
          var rightInset = $contentWindowInsets.vbb($this$SubcomposeLayout, $this$SubcomposeLayout.u6c());
          var bottomInset = $contentWindowInsets.wbb($this$SubcomposeLayout);
          var element_0 = item_0.a7j(offset(looseConstraints, (-leftInset | 0) - rightInset | 0, -bottomInset | 0));
          target_0.e(element_0);
        }
         while (inductionVariable_1 <= last_1);
      var snackbarPlaceables = target_0;
      var tmp$ret$7;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (snackbarPlaceables.q()) {
          tmp$ret$7 = null;
          break $l$block_0;
        }
        var maxElem_0 = snackbarPlaceables.o(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_0 = maxElem_0.c7j_1;
        var inductionVariable_2 = 1;
        var last_2 = get_lastIndex(snackbarPlaceables);
        if (inductionVariable_2 <= last_2)
          do {
            var i_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var e_0 = snackbarPlaceables.o(i_0);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v_0 = e_0.c7j_1;
            if (compareTo(maxValue_0, v_0) < 0) {
              maxElem_0 = e_0;
              maxValue_0 = v_0;
            }
          }
           while (!(i_0 === last_2));
        tmp$ret$7 = maxElem_0;
      }
      var tmp2_safe_receiver = tmp$ret$7;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.c7j_1;
      var snackbarHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var tmp$ret$10;
      $l$block_1: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (snackbarPlaceables.q()) {
          tmp$ret$10 = null;
          break $l$block_1;
        }
        var maxElem_1 = snackbarPlaceables.o(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_1 = maxElem_1.b7j_1;
        var inductionVariable_3 = 1;
        var last_3 = get_lastIndex(snackbarPlaceables);
        if (inductionVariable_3 <= last_3)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var e_1 = snackbarPlaceables.o(i_1);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v_1 = e_1.b7j_1;
            if (compareTo(maxValue_1, v_1) < 0) {
              maxElem_1 = e_1;
              maxValue_1 = v_1;
            }
          }
           while (!(i_1 === last_3));
        tmp$ret$10 = maxElem_1;
      }
      var tmp4_safe_receiver = tmp$ret$10;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.b7j_1;
      var snackbarWidth = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
      // Inline function 'androidx.compose.ui.util.fastMapNotNull' call
      var this_2 = $this$SubcomposeLayout.w8r(ScaffoldLayoutContent_Fab_getInstance(), $fab);
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$(this_2.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = this_2.j() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_1 = this_2.o(index_1);
          // Inline function 'androidx.compose.ui.util.fastMapNotNull.<anonymous>' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var leftInset_0 = $contentWindowInsets.tbb($this$SubcomposeLayout, $this$SubcomposeLayout.u6c());
          var rightInset_0 = $contentWindowInsets.vbb($this$SubcomposeLayout, $this$SubcomposeLayout.u6c());
          var bottomInset_0 = $contentWindowInsets.wbb($this$SubcomposeLayout);
          // Inline function 'kotlin.takeIf' call
          var this_3 = item_1.a7j(offset(looseConstraints, (-leftInset_0 | 0) - rightInset_0 | 0, -bottomInset_0 | 0));
          // Inline function 'kotlin.contracts.contract' call
          var tmp;
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(this_3.c7j_1 === 0) && !(this_3.b7j_1 === 0)) {
            tmp = this_3;
          } else {
            tmp = null;
          }
          var tmp0_safe_receiver_0 = tmp;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            target_1.e(tmp0_safe_receiver_0);
          }
        }
         while (inductionVariable_4 <= last_4);
      var fabPlaceables = target_1;
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!fabPlaceables.q()) {
        var tmp$ret$19;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.util.fastMaxBy' call
          // Inline function 'kotlin.contracts.contract' call
          if (fabPlaceables.q()) {
            tmp$ret$19 = null;
            break $l$block_2;
          }
          var maxElem_2 = fabPlaceables.o(0);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var maxValue_2 = maxElem_2.b7j_1;
          var inductionVariable_5 = 1;
          var last_5 = get_lastIndex(fabPlaceables);
          if (inductionVariable_5 <= last_5)
            do {
              var i_2 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + 1 | 0;
              var e_2 = fabPlaceables.o(i_2);
              // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
              var v_2 = e_2.b7j_1;
              if (compareTo(maxValue_2, v_2) < 0) {
                maxElem_2 = e_2;
                maxValue_2 = v_2;
              }
            }
             while (!(i_2 === last_5));
          tmp$ret$19 = maxElem_2;
        }
        var fabWidth = ensureNotNull(tmp$ret$19).b7j_1;
        var tmp$ret$22;
        $l$block_3: {
          // Inline function 'androidx.compose.ui.util.fastMaxBy' call
          // Inline function 'kotlin.contracts.contract' call
          if (fabPlaceables.q()) {
            tmp$ret$22 = null;
            break $l$block_3;
          }
          var maxElem_3 = fabPlaceables.o(0);
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var maxValue_3 = maxElem_3.c7j_1;
          var inductionVariable_6 = 1;
          var last_6 = get_lastIndex(fabPlaceables);
          if (inductionVariable_6 <= last_6)
            do {
              var i_3 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var e_3 = fabPlaceables.o(i_3);
              // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
              var v_3 = e_3.c7j_1;
              if (compareTo(maxValue_3, v_3) < 0) {
                maxElem_3 = e_3;
                maxValue_3 = v_3;
              }
            }
             while (!(i_3 === last_6));
          tmp$ret$22 = maxElem_3;
        }
        var fabHeight = ensureNotNull(tmp$ret$22).c7j_1;
        var tmp6_subject = $fabPosition;
        var tmp_1;
        if (tmp6_subject === Companion_getInstance_14().fiv_1) {
          var tmp_2;
          if ($this$SubcomposeLayout.u6c().equals(LayoutDirection_Ltr_getInstance())) {
            tmp_2 = $this$SubcomposeLayout.i5b(get_FabSpacing());
          } else {
            tmp_2 = (layoutWidth - $this$SubcomposeLayout.i5b(get_FabSpacing()) | 0) - fabWidth | 0;
          }
          tmp_1 = tmp_2;
        } else if (tmp6_subject === Companion_getInstance_14().hiv_1 ? true : tmp6_subject === Companion_getInstance_14().iiv_1) {
          var tmp_3;
          if ($this$SubcomposeLayout.u6c().equals(LayoutDirection_Ltr_getInstance())) {
            tmp_3 = (layoutWidth - $this$SubcomposeLayout.i5b(get_FabSpacing()) | 0) - fabWidth | 0;
          } else {
            tmp_3 = $this$SubcomposeLayout.i5b(get_FabSpacing());
          }
          tmp_1 = tmp_3;
        } else {
          tmp_1 = (layoutWidth - fabWidth | 0) / 2 | 0;
        }
        var fabLeftOffset = tmp_1;
        tmp_0 = new FabPlacement(fabLeftOffset, fabWidth, fabHeight);
      } else {
        tmp_0 = null;
      }
      var fabPlacement = tmp_0;
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var tmp_4 = ScaffoldLayoutContent_BottomBar_getInstance();
      var this_4 = $this$SubcomposeLayout.w8r(tmp_4, ComposableLambda$invoke$ref_25(composableLambdaInstance(-2146438447, true, ScaffoldLayout$lambda$lambda($bottomBar))));
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$(this_4.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_7 = 0;
      var last_7 = this_4.j() - 1 | 0;
      if (inductionVariable_7 <= last_7)
        do {
          var index_2 = inductionVariable_7;
          inductionVariable_7 = inductionVariable_7 + 1 | 0;
          var item_2 = this_4.o(index_2);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var element_1 = item_2.a7j(looseConstraints);
          target_2.e(element_1);
        }
         while (inductionVariable_7 <= last_7);
      var bottomBarPlaceables = target_2;
      var tmp$ret$27;
      $l$block_4: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (bottomBarPlaceables.q()) {
          tmp$ret$27 = null;
          break $l$block_4;
        }
        var maxElem_4 = bottomBarPlaceables.o(0);
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_4 = maxElem_4.c7j_1;
        var inductionVariable_8 = 1;
        var last_8 = get_lastIndex(bottomBarPlaceables);
        if (inductionVariable_8 <= last_8)
          do {
            var i_4 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var e_4 = bottomBarPlaceables.o(i_4);
            // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
            var v_4 = e_4.c7j_1;
            if (compareTo(maxValue_4, v_4) < 0) {
              maxElem_4 = e_4;
              maxValue_4 = v_4;
            }
          }
           while (!(i_4 === last_8));
        tmp$ret$27 = maxElem_4;
      }
      var tmp7_safe_receiver = tmp$ret$27;
      var bottomBarHeight = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.c7j_1;
      var tmp_5;
      if (fabPlacement == null) {
        tmp_5 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6;
        if (bottomBarHeight == null || $fabPosition === Companion_getInstance_14().iiv_1) {
          tmp_6 = (fabPlacement.miv_1 + $this$SubcomposeLayout.i5b(get_FabSpacing()) | 0) + $contentWindowInsets.wbb($this$SubcomposeLayout) | 0;
        } else {
          tmp_6 = (bottomBarHeight + fabPlacement.miv_1 | 0) + $this$SubcomposeLayout.i5b(get_FabSpacing()) | 0;
        }
        tmp_5 = tmp_6;
      }
      var fabOffsetFromBottom = tmp_5;
      var tmp_7;
      if (!(snackbarHeight === 0)) {
        var tmp10_elvis_lhs = fabOffsetFromBottom == null ? bottomBarHeight : fabOffsetFromBottom;
        tmp_7 = snackbarHeight + (tmp10_elvis_lhs == null ? $contentWindowInsets.wbb($this$SubcomposeLayout) : tmp10_elvis_lhs) | 0;
      } else {
        tmp_7 = 0;
      }
      var snackbarOffsetFromBottom = tmp_7;
      // Inline function 'androidx.compose.ui.util.fastMap' call
      var tmp_8 = ScaffoldLayoutContent_MainContent_getInstance();
      var this_5 = $this$SubcomposeLayout.w8r(tmp_8, ComposableLambda$invoke$ref_26(composableLambdaInstance(-1213360416, true, ScaffoldLayout$lambda$lambda_0($contentWindowInsets, $this$SubcomposeLayout, topBarPlaceables, topBarHeight, bottomBarPlaceables, bottomBarHeight, $content))));
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$(this_5.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_9 = 0;
      var last_9 = this_5.j() - 1 | 0;
      if (inductionVariable_9 <= last_9)
        do {
          var index_3 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + 1 | 0;
          var item_3 = this_5.o(index_3);
          // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous>.<anonymous>' call
          var element_2 = item_3.a7j(looseConstraints);
          target_3.e(element_2);
        }
         while (inductionVariable_9 <= last_9);
      var bodyContentPlaceables = target_3;
      return $this$SubcomposeLayout.g7j(layoutWidth, layoutHeight, VOID, ScaffoldLayout$lambda$lambda_1(bodyContentPlaceables, topBarPlaceables, snackbarPlaceables, layoutWidth, snackbarWidth, $contentWindowInsets, $this$SubcomposeLayout, layoutHeight, snackbarOffsetFromBottom, bottomBarPlaceables, bottomBarHeight, fabPlacement, fabPlaceables, fabOffsetFromBottom));
    };
  }
  function ScaffoldLayout$lambda_0($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $$changed) {
    return function ($composer, $force) {
      ScaffoldLayout($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ScaffoldLayoutContent_TopBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_TopBar_instance;
  }
  function ScaffoldLayoutContent_MainContent_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_MainContent_instance;
  }
  function ScaffoldLayoutContent_Snackbar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Snackbar_instance;
  }
  function ScaffoldLayoutContent_Fab_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Fab_instance;
  }
  function ScaffoldLayoutContent_BottomBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_BottomBar_instance;
  }
  var properties_initialized_Scaffold_kt_ayrd2w;
  function _init_properties_Scaffold_kt__o4wwkq() {
    if (!properties_initialized_Scaffold_kt_ayrd2w) {
      properties_initialized_Scaffold_kt_ayrd2w = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      FabSpacing = _Dp___init__impl__ms3zkb(16);
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function Shapes(extraSmall, small, medium, large, extraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().piv_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().qiv_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().riv_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().siv_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().tiv_1 : extraLarge;
    this.uiv_1 = extraSmall;
    this.viv_1 = small;
    this.wiv_1 = medium;
    this.xiv_1 = large;
    this.yiv_1 = extraLarge;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.uiv_1, other.uiv_1))
      return false;
    if (!equals(this.viv_1, other.viv_1))
      return false;
    if (!equals(this.wiv_1, other.wiv_1))
      return false;
    if (!equals(this.xiv_1, other.xiv_1))
      return false;
    if (!equals(this.yiv_1, other.yiv_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.uiv_1);
    result = imul(31, result) + hashCode(this.viv_1) | 0;
    result = imul(31, result) + hashCode(this.wiv_1) | 0;
    result = imul(31, result) + hashCode(this.xiv_1) | 0;
    result = imul(31, result) + hashCode(this.yiv_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + toString(this.uiv_1) + ', ') + ('small=' + toString(this.viv_1) + ', ') + ('medium=' + toString(this.wiv_1) + ', ') + ('large=' + toString(this.xiv_1) + ', ') + ('extraLarge=' + toString(this.yiv_1) + ')');
  };
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.piv_1 = ShapeTokens_getInstance().biw_1;
    this.qiv_1 = ShapeTokens_getInstance().jiw_1;
    this.riv_1 = ShapeTokens_getInstance().hiw_1;
    this.siv_1 = ShapeTokens_getInstance().eiw_1;
    this.tiv_1 = ShapeTokens_getInstance().ziv_1;
  }
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function Surface(modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -513881741, 'C(Surface)P(4,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color,7:c#ui.unit.Dp,5:c#ui.unit.Dp)96@5014L11,97@5061L22,*103@5278L7,107@5451L741,104@5307L885:Surface.kt#uh7d8r');
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 2) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 4) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.pik($composer_0, 6).gil_1);
    }
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor(color_0._v.r63_1, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 32) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 64) === 0)) {
      border_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-513881741, $changed, -1, 'androidx.compose.material3.Surface (Surface.kt:102)');
    }
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var this_1 = tmp0.w5b_1;
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().k32(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().k32(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.Surface.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(-70914509, true, Surface$lambda(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.h2l(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.y2w();
    var tmp_0;
    if (invalid || it === Companion_getInstance_1().n2o_1) {
      // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
      $composer_2.j2x(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    CompositionLocalProvider_0(tmp, tmp0_0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    var tmp;
    if (shadowElevation > 0.0) {
      tmp = graphicsLayer(Companion_instance, VOID, VOID, VOID, VOID, VOID, shadowElevation, VOID, VOID, VOID, VOID, VOID, shape, false);
    } else {
      tmp = Companion_instance;
    }
    return clip(background(_this__u8e3s4.t7b(tmp).t7b(!(border_0 == null) ? border(Companion_instance, border_0, shape) : Companion_instance), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation_0(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2079918090, 'C(surfaceColorAtElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)465@24025L11,465@24037L37:Surface.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-2079918090, $changed, -1, 'androidx.compose.material3.surfaceColorAtElevation (Surface.kt:465)');
    }
    var tmp0 = applyTonalElevation(MaterialTheme_instance.pik($composer_0, 6), color, elevation, $composer_0, 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function Surface$lambda$lambda($this$semantics) {
    _init_properties_Surface_kt__8o7unv();
    set_isContainer($this$semantics, true);
    return Unit_instance;
  }
  function Surface$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).qby = function ($this$pointerInput, $completion) {
    var tmp = this.rby($this$pointerInput, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Surface$lambda$slambda).ha = function (p1, $completion) {
    return this.qby((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
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
  protoOf(Surface$lambda$slambda).rby = function ($this$pointerInput, completion) {
    var i = new Surface$lambda$slambda(completion);
    i.siw_1 = $this$pointerInput;
    return i;
  };
  function Surface$lambda$slambda_0(resultContinuation) {
    var i = new Surface$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.qby($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C114@5653L69,*116@5825L7,118@5940L115,122@6096L2,108@5461L725:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w2u()) {
        if (isTraceInProgress()) {
          traceEventStart(-70914509, $changed, -1, 'androidx.compose.material3.Surface.<anonymous> (Surface.kt:108)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.r63_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.p2x(this_0);
        sourceInformationMarkerEnd($composer_1);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = tmp0.h5b($shadowElevation._v.w5b_1);
        var tmp_4 = surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
        sourceInformationMarkerStart($composer_0, 190720220, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y2w();
        var tmp_5;
        if (false || it === Companion_getInstance_1().n2o_1) {
          // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda;
          $composer_0.j2x(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_7 = semantics(tmp_4, false, tmp0_group);
        sourceInformationMarkerStart($composer_0, 190725099, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.y2w();
        var tmp_8;
        if (false || it_0 === Companion_getInstance_1().n2o_1) {
          // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = Surface$lambda$slambda_0(null);
          $composer_0.j2x(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp1_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var modifier = pointerInput(tmp_7, Unit_instance, tmp1_group);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_3().x7a_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
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
        var tmp_10 = $composer_4.x2u();
        if (!isInterface(tmp_10, Applier)) {
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
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -1154533166, 'C125@6167L9:Surface.kt#uh7d8r');
        $content($composer_6, 0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.w2v();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_instance;
        }
        tmp = tmp_11;
      } else {
        $composer_0.e2o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1) {
      return $boundThis.u2u(p0, p1);
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-2055108902);
    sourceInformation($composer_0, 'C(Text)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)108@5620L7,113@5732L530:Text.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.r63_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.k2w(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.s5c_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h2l(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h2l(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.h2l(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.k2w(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.s5c_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.h2l(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.h2l(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.k2w(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.s5c_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.l2w(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.j74_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.i2w(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.l2w(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.l2w(minLines_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.h2w(onTextLayout_0._v) ? 131072 : 65536);
    if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | (($default & 65536) === 0 && $composer_0.h2l(style_0._v) ? 1048576 : 524288);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 599187) === 599186) || !$composer_0.w2u()) {
      $composer_0.f2v();
      if (($changed & 1) === 0 || $composer_0.j2v()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_5().p60_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_6().q5c_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_6().q5c_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_6().q5c_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_7().g74_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = 2147483647;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          onTextLayout_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var this_0 = get_LocalTextStyle();
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.p2x(this_0);
          sourceInformationMarkerEnd($composer_1);
          style_0._v = tmp0;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.e2o();
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.g2v();
      if (isTraceInProgress()) {
        traceEventStart(-2055108902, $dirty, $dirty1, 'androidx.compose.material3.Text (Text.kt:109)');
      }
      $composer_0.c2v(-1827892941);
      sourceInformation($composer_0, '');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var this_1 = color_0._v.r63_1;
      var tmp_1;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_1 = this_1;
      } else {
        // Inline function 'androidx.compose.material3.Text.<anonymous>' call
        $composer_0.c2v(-1827892168);
        sourceInformation($composer_0, '*111@5715L7');
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var this_2 = style_0._v.r60();
        var tmp_2;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(this_2), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_2 = this_2;
        } else {
          // Inline function 'androidx.compose.material3.Text.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var this_3 = get_LocalContentColor();
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.p2x(this_3);
          sourceInformationMarkerEnd($composer_2);
          tmp_2 = tmp0_0.r63_1;
        }
        var tmp0_group = tmp_2;
        $composer_0.e2v();
        tmp_1 = tmp0_group;
      }
      var tmp0_group_0 = tmp_1;
      $composer_0.e2v();
      var textColor = tmp0_group_0;
      var tmp_3 = modifier_0._v;
      var tmp_4 = textAlign_0._v;
      var tmp0_elvis_lhs = tmp_4 == null ? null : tmp_4.l6r_1;
      var tmp_5;
      var tmp_6 = tmp0_elvis_lhs;
      if ((tmp_6 == null ? null : new TextAlign(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_8().l6q_1;
      } else {
        tmp_5 = tmp0_elvis_lhs;
      }
      var tmp1_textAlign = tmp_5;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = fontWeight_0._v;
      var tmp_10 = fontStyle_0._v;
      var tmp_11 = tmp_7.x6v(textColor, tmp_8.s5c_1, tmp_9, tmp_10 == null ? null : tmp_10.d6s_1, VOID, fontFamily_0._v, VOID, letterSpacing_0._v.s5c_1, VOID, VOID, VOID, VOID, textDecoration_0._v, VOID, VOID, tmp1_textAlign, VOID, lineHeight_0._v.s5c_1);
      var tmp_12 = onTextLayout_0._v;
      var tmp_13 = overflow_0._v;
      var tmp_14 = softWrap_0._v;
      var tmp_15 = maxLines_0._v;
      var tmp_16 = minLines_0._v;
      BasicText(text, tmp_3, tmp_11, tmp_12, tmp_13.j74_1, tmp_14, tmp_15, tmp_16, null, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 256);
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
      tmp1_safe_receiver.r32(Text$lambda(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-460300127);
    sourceInformation($composer_0, 'C(ProvideTextStyle)P(1)347@14710L7,348@14735L80:Text.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(value) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-460300127, $dirty, -1, 'androidx.compose.material3.ProvideTextStyle (Text.kt:346)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalTextStyle();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.p2x(this_0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0.v6v(value);
      CompositionLocalProvider(get_LocalTextStyle().k32(mergedStyle), content, $composer_0, 8 | 112 & $dirty);
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
      tmp0_safe_receiver.r32(ProvideTextStyle$lambda(value, content, $changed));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function Text$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v;
      var tmp_1 = $fontSize._v;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.d6s_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text($text, tmp, tmp_0.r63_1, tmp_1.s5c_1, tmp_3, tmp_4, tmp_5, tmp_6.s5c_1, tmp_7, tmp_8 == null ? null : tmp_8.l6r_1, $lineHeight._v.s5c_1, $overflow._v.j74_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function ProvideTextStyle$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().wiw_1 : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().xiw_1 : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().yiw_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().ziw_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().aix_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().bix_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().fix_1 : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().gix_1 : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().hix_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().tiw_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().uiw_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().viw_1 : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().cix_1 : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().dix_1 : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().eix_1 : labelSmall;
    this.iit_1 = displayLarge;
    this.jit_1 = displayMedium;
    this.kit_1 = displaySmall;
    this.lit_1 = headlineLarge;
    this.mit_1 = headlineMedium;
    this.nit_1 = headlineSmall;
    this.oit_1 = titleLarge;
    this.pit_1 = titleMedium;
    this.qit_1 = titleSmall;
    this.rit_1 = bodyLarge;
    this.sit_1 = bodyMedium;
    this.tit_1 = bodySmall;
    this.uit_1 = labelLarge;
    this.vit_1 = labelMedium;
    this.wit_1 = labelSmall;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.iit_1.equals(other.iit_1))
      return false;
    if (!this.jit_1.equals(other.jit_1))
      return false;
    if (!this.kit_1.equals(other.kit_1))
      return false;
    if (!this.lit_1.equals(other.lit_1))
      return false;
    if (!this.mit_1.equals(other.mit_1))
      return false;
    if (!this.nit_1.equals(other.nit_1))
      return false;
    if (!this.oit_1.equals(other.oit_1))
      return false;
    if (!this.pit_1.equals(other.pit_1))
      return false;
    if (!this.qit_1.equals(other.qit_1))
      return false;
    if (!this.rit_1.equals(other.rit_1))
      return false;
    if (!this.sit_1.equals(other.sit_1))
      return false;
    if (!this.tit_1.equals(other.tit_1))
      return false;
    if (!this.uit_1.equals(other.uit_1))
      return false;
    if (!this.vit_1.equals(other.vit_1))
      return false;
    if (!this.wit_1.equals(other.wit_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.iit_1.hashCode();
    result = imul(31, result) + this.jit_1.hashCode() | 0;
    result = imul(31, result) + this.kit_1.hashCode() | 0;
    result = imul(31, result) + this.lit_1.hashCode() | 0;
    result = imul(31, result) + this.mit_1.hashCode() | 0;
    result = imul(31, result) + this.nit_1.hashCode() | 0;
    result = imul(31, result) + this.oit_1.hashCode() | 0;
    result = imul(31, result) + this.pit_1.hashCode() | 0;
    result = imul(31, result) + this.qit_1.hashCode() | 0;
    result = imul(31, result) + this.rit_1.hashCode() | 0;
    result = imul(31, result) + this.sit_1.hashCode() | 0;
    result = imul(31, result) + this.tit_1.hashCode() | 0;
    result = imul(31, result) + this.uit_1.hashCode() | 0;
    result = imul(31, result) + this.vit_1.hashCode() | 0;
    result = imul(31, result) + this.wit_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.iit_1.toString() + ', displayMedium=' + this.jit_1.toString() + ',' + ('displaySmall=' + this.kit_1.toString() + ', ') + ('headlineLarge=' + this.lit_1.toString() + ', headlineMedium=' + this.mit_1.toString() + ',') + (' headlineSmall=' + this.nit_1.toString() + ', ') + ('titleLarge=' + this.oit_1.toString() + ', titleMedium=' + this.pit_1.toString() + ', titleSmall=' + this.qit_1.toString() + ', ') + ('bodyLarge=' + this.rit_1.toString() + ', bodyMedium=' + this.sit_1.toString() + ', bodySmall=' + this.tit_1.toString() + ', ') + ('labelLarge=' + this.uit_1.toString() + ', labelMedium=' + this.vit_1.toString() + ', labelSmall=' + this.wit_1.toString() + ')');
  };
  function get_value_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_Typography_kt__rm3fch();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1049072145, 'C209@10714L10:Typography.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1049072145, $changed, -1, 'androidx.compose.material3.<get-value> (Typography.kt:209)');
    }
    var tmp0 = fromToken_0(MaterialTheme_instance.git($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function fromToken_0(_this__u8e3s4, value) {
    _init_properties_Typography_kt__rm3fch();
    var tmp;
    switch (value.u2_1) {
      case 3:
        tmp = _this__u8e3s4.iit_1;
        break;
      case 4:
        tmp = _this__u8e3s4.jit_1;
        break;
      case 5:
        tmp = _this__u8e3s4.kit_1;
        break;
      case 6:
        tmp = _this__u8e3s4.lit_1;
        break;
      case 7:
        tmp = _this__u8e3s4.mit_1;
        break;
      case 8:
        tmp = _this__u8e3s4.nit_1;
        break;
      case 12:
        tmp = _this__u8e3s4.oit_1;
        break;
      case 13:
        tmp = _this__u8e3s4.pit_1;
        break;
      case 14:
        tmp = _this__u8e3s4.qit_1;
        break;
      case 0:
        tmp = _this__u8e3s4.rit_1;
        break;
      case 1:
        tmp = _this__u8e3s4.sit_1;
        break;
      case 2:
        tmp = _this__u8e3s4.tit_1;
        break;
      case 9:
        tmp = _this__u8e3s4.uit_1;
        break;
      case 10:
        tmp = _this__u8e3s4.vit_1;
        break;
      case 11:
        tmp = _this__u8e3s4.wit_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return new Typography();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function MutableWindowInsets(initialInsets) {
    initialInsets = initialInsets === VOID ? WindowInsets(0, 0, 0, 0) : initialInsets;
    this.niv_1 = mutableStateOf(initialInsets);
  }
  protoOf(MutableWindowInsets).oiv = function (_set____db54di) {
    var this_0 = this.niv_1;
    insets$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableWindowInsets).iix = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.niv_1;
    insets$factory_0();
    return this_0.w();
  };
  protoOf(MutableWindowInsets).tbb = function (density, layoutDirection) {
    return this.iix().tbb(density, layoutDirection);
  };
  protoOf(MutableWindowInsets).ubb = function (density) {
    return this.iix().ubb(density);
  };
  protoOf(MutableWindowInsets).vbb = function (density, layoutDirection) {
    return this.iix().vbb(density, layoutDirection);
  };
  protoOf(MutableWindowInsets).wbb = function (density) {
    return this.iix().wbb(density);
  };
  function insets$factory() {
    return getPropertyCallableRef('insets', 1, KMutableProperty1, function (receiver) {
      return receiver.iix();
    }, function (receiver, value) {
      return receiver.oiv(value);
    });
  }
  function insets$factory_0() {
    return getPropertyCallableRef('insets', 1, KMutableProperty1, function (receiver) {
      return receiver.iix();
    }, function (receiver, value) {
      return receiver.oiv(value);
    });
  }
  function ProvideContentColorTextStyle(contentColor, textStyle, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-716124955);
    sourceInformation($composer_0, 'C(ProvideContentColorTextStyle)P(1:c#ui.graphics.Color,2)39@1423L7,40@1452L151:ProvideContentColorTextStyle.kt#mqatfk');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k2w(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2l(textStyle) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h2w(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-716124955, $dirty, -1, 'androidx.compose.material3.internal.ProvideContentColorTextStyle (ProvideContentColorTextStyle.kt:38)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalTextStyle();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.p2x(this_0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0.v6v(textStyle);
      CompositionLocalProvider_0([get_LocalContentColor().k32(new Color(contentColor)), get_LocalTextStyle().k32(mergedStyle)], content, $composer_0, 8 | 112 & $dirty >> 3);
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
      tmp0_safe_receiver.r32(ProvideContentColorTextStyle$lambda(contentColor, textStyle, content, $changed));
    }
  }
  function ProvideContentColorTextStyle$lambda($contentColor, $textStyle, $content, $$changed) {
    return function ($composer, $force) {
      ProvideContentColorTextStyle($contentColor, $textStyle, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_systemBarsForVisualComponents(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1056089213, 'C23@960L31:SystemBarsDefaultInsets.kt#mqatfk');
    if (isTraceInProgress()) {
      traceEventStart(-1056089213, $changed, -1, 'androidx.compose.material3.internal.<get-systemBarsForVisualComponents> (SystemBarsDefaultInsets.kt:23)');
    }
    var tmp0 = systemBarsForVisualComponents(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function ColorDarkTokens() {
    ColorDarkTokens_instance = this;
    this.gir_1 = PaletteTokens_getInstance().jiy_1;
    this.hir_1 = PaletteTokens_getInstance().tix_1;
    this.iir_1 = PaletteTokens_getInstance().oix_1;
    this.jir_1 = PaletteTokens_getInstance().ciy_1;
    this.kir_1 = PaletteTokens_getInstance().niz_1;
    this.lir_1 = PaletteTokens_getInstance().oiy_1;
    this.mir_1 = PaletteTokens_getInstance().oiy_1;
    this.nir_1 = PaletteTokens_getInstance().nix_1;
    this.oir_1 = PaletteTokens_getInstance().uix_1;
    this.pir_1 = PaletteTokens_getInstance().liz_1;
    this.qir_1 = PaletteTokens_getInstance().siz_1;
    this.rir_1 = PaletteTokens_getInstance().jiz_1;
    this.sir_1 = PaletteTokens_getInstance().miz_1;
    this.tir_1 = PaletteTokens_getInstance().yiz_1;
    this.uir_1 = PaletteTokens_getInstance().fj0_1;
    this.vir_1 = PaletteTokens_getInstance().wiz_1;
    this.wir_1 = PaletteTokens_getInstance().ziz_1;
    this.xir_1 = PaletteTokens_getInstance().oiy_1;
    this.yir_1 = PaletteTokens_getInstance().eiz_1;
    this.zir_1 = PaletteTokens_getInstance().lj0_1;
    this.ais_1 = PaletteTokens_getInstance().sj0_1;
    this.bis_1 = PaletteTokens_getInstance().jj0_1;
    this.cis_1 = PaletteTokens_getInstance().mj0_1;
    this.dis_1 = PaletteTokens_getInstance().ciz_1;
    this.eis_1 = PaletteTokens_getInstance().ziy_1;
    this.fis_1 = PaletteTokens_getInstance().riz_1;
    this.gis_1 = PaletteTokens_getInstance().miz_1;
    this.his_1 = PaletteTokens_getInstance().siz_1;
    this.iis_1 = PaletteTokens_getInstance().riz_1;
    this.jis_1 = PaletteTokens_getInstance().xix_1;
    this.kis_1 = PaletteTokens_getInstance().ej0_1;
    this.lis_1 = PaletteTokens_getInstance().ziz_1;
    this.mis_1 = PaletteTokens_getInstance().fj0_1;
    this.nis_1 = PaletteTokens_getInstance().ej0_1;
    this.ois_1 = PaletteTokens_getInstance().jiy_1;
    this.pis_1 = PaletteTokens_getInstance().eiy_1;
    this.qis_1 = PaletteTokens_getInstance().aiy_1;
    this.ris_1 = PaletteTokens_getInstance().biy_1;
    this.sis_1 = PaletteTokens_getInstance().diy_1;
    this.tis_1 = PaletteTokens_getInstance().yix_1;
    this.uis_1 = PaletteTokens_getInstance().giy_1;
    this.vis_1 = PaletteTokens_getInstance().jiy_1;
    this.wis_1 = this.fis_1;
    this.xis_1 = PaletteTokens_getInstance().ziy_1;
    this.yis_1 = PaletteTokens_getInstance().rj0_1;
    this.zis_1 = PaletteTokens_getInstance().mj0_1;
    this.ait_1 = PaletteTokens_getInstance().sj0_1;
    this.bit_1 = PaletteTokens_getInstance().rj0_1;
  }
  var ColorDarkTokens_instance;
  function ColorDarkTokens_getInstance() {
    if (ColorDarkTokens_instance == null)
      new ColorDarkTokens();
    return ColorDarkTokens_instance;
  }
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.kip_1 = PaletteTokens_getInstance().tiy_1;
    this.lip_1 = PaletteTokens_getInstance().pix_1;
    this.mip_1 = PaletteTokens_getInstance().uix_1;
    this.nip_1 = PaletteTokens_getInstance().riy_1;
    this.oip_1 = PaletteTokens_getInstance().riz_1;
    this.pip_1 = PaletteTokens_getInstance().ciy_1;
    this.qip_1 = PaletteTokens_getInstance().yix_1;
    this.rip_1 = PaletteTokens_getInstance().mix_1;
    this.sip_1 = PaletteTokens_getInstance().lix_1;
    this.tip_1 = PaletteTokens_getInstance().kiz_1;
    this.uip_1 = PaletteTokens_getInstance().jiz_1;
    this.vip_1 = PaletteTokens_getInstance().jiz_1;
    this.wip_1 = PaletteTokens_getInstance().miz_1;
    this.xip_1 = PaletteTokens_getInstance().xiz_1;
    this.yip_1 = PaletteTokens_getInstance().wiz_1;
    this.zip_1 = PaletteTokens_getInstance().wiz_1;
    this.aiq_1 = PaletteTokens_getInstance().ziz_1;
    this.biq_1 = PaletteTokens_getInstance().yix_1;
    this.ciq_1 = PaletteTokens_getInstance().ziy_1;
    this.diq_1 = PaletteTokens_getInstance().kj0_1;
    this.eiq_1 = PaletteTokens_getInstance().jj0_1;
    this.fiq_1 = PaletteTokens_getInstance().jj0_1;
    this.giq_1 = PaletteTokens_getInstance().mj0_1;
    this.hiq_1 = PaletteTokens_getInstance().biz_1;
    this.iiq_1 = PaletteTokens_getInstance().eiz_1;
    this.jiq_1 = PaletteTokens_getInstance().niz_1;
    this.kiq_1 = PaletteTokens_getInstance().siz_1;
    this.liq_1 = PaletteTokens_getInstance().siz_1;
    this.miq_1 = PaletteTokens_getInstance().riz_1;
    this.niq_1 = PaletteTokens_getInstance().xix_1;
    this.oiq_1 = PaletteTokens_getInstance().aj0_1;
    this.piq_1 = PaletteTokens_getInstance().fj0_1;
    this.qiq_1 = PaletteTokens_getInstance().fj0_1;
    this.riq_1 = PaletteTokens_getInstance().ej0_1;
    this.siq_1 = PaletteTokens_getInstance().tiy_1;
    this.tiq_1 = PaletteTokens_getInstance().tiy_1;
    this.uiq_1 = PaletteTokens_getInstance().qiy_1;
    this.viq_1 = PaletteTokens_getInstance().piy_1;
    this.wiq_1 = PaletteTokens_getInstance().oiy_1;
    this.xiq_1 = PaletteTokens_getInstance().siy_1;
    this.yiq_1 = PaletteTokens_getInstance().zix_1;
    this.ziq_1 = PaletteTokens_getInstance().niy_1;
    this.air_1 = this.jiq_1;
    this.bir_1 = PaletteTokens_getInstance().fiz_1;
    this.cir_1 = PaletteTokens_getInstance().nj0_1;
    this.dir_1 = PaletteTokens_getInstance().sj0_1;
    this.eir_1 = PaletteTokens_getInstance().sj0_1;
    this.fir_1 = PaletteTokens_getInstance().rj0_1;
  }
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  var ColorSchemeKeyTokens_Background_instance;
  var ColorSchemeKeyTokens_Error_instance;
  var ColorSchemeKeyTokens_ErrorContainer_instance;
  var ColorSchemeKeyTokens_InverseOnSurface_instance;
  var ColorSchemeKeyTokens_InversePrimary_instance;
  var ColorSchemeKeyTokens_InverseSurface_instance;
  var ColorSchemeKeyTokens_OnBackground_instance;
  var ColorSchemeKeyTokens_OnError_instance;
  var ColorSchemeKeyTokens_OnErrorContainer_instance;
  var ColorSchemeKeyTokens_OnPrimary_instance;
  var ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixed_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSecondary_instance;
  var ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixed_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSurface_instance;
  var ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  var ColorSchemeKeyTokens_OnTertiary_instance;
  var ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixed_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance;
  var ColorSchemeKeyTokens_Outline_instance;
  var ColorSchemeKeyTokens_OutlineVariant_instance;
  var ColorSchemeKeyTokens_Primary_instance;
  var ColorSchemeKeyTokens_PrimaryContainer_instance;
  var ColorSchemeKeyTokens_PrimaryFixed_instance;
  var ColorSchemeKeyTokens_PrimaryFixedDim_instance;
  var ColorSchemeKeyTokens_Scrim_instance;
  var ColorSchemeKeyTokens_Secondary_instance;
  var ColorSchemeKeyTokens_SecondaryContainer_instance;
  var ColorSchemeKeyTokens_SecondaryFixed_instance;
  var ColorSchemeKeyTokens_SecondaryFixedDim_instance;
  var ColorSchemeKeyTokens_Surface_instance;
  var ColorSchemeKeyTokens_SurfaceBright_instance;
  var ColorSchemeKeyTokens_SurfaceContainer_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHigh_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHighest_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLow_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLowest_instance;
  var ColorSchemeKeyTokens_SurfaceDim_instance;
  var ColorSchemeKeyTokens_SurfaceTint_instance;
  var ColorSchemeKeyTokens_SurfaceVariant_instance;
  var ColorSchemeKeyTokens_Tertiary_instance;
  var ColorSchemeKeyTokens_TertiaryContainer_instance;
  var ColorSchemeKeyTokens_TertiaryFixed_instance;
  var ColorSchemeKeyTokens_TertiaryFixedDim_instance;
  var ColorSchemeKeyTokens_entriesInitialized;
  function ColorSchemeKeyTokens_initEntries() {
    if (ColorSchemeKeyTokens_entriesInitialized)
      return Unit_instance;
    ColorSchemeKeyTokens_entriesInitialized = true;
    ColorSchemeKeyTokens_Background_instance = new ColorSchemeKeyTokens('Background', 0);
    ColorSchemeKeyTokens_Error_instance = new ColorSchemeKeyTokens('Error', 1);
    ColorSchemeKeyTokens_ErrorContainer_instance = new ColorSchemeKeyTokens('ErrorContainer', 2);
    ColorSchemeKeyTokens_InverseOnSurface_instance = new ColorSchemeKeyTokens('InverseOnSurface', 3);
    ColorSchemeKeyTokens_InversePrimary_instance = new ColorSchemeKeyTokens('InversePrimary', 4);
    ColorSchemeKeyTokens_InverseSurface_instance = new ColorSchemeKeyTokens('InverseSurface', 5);
    ColorSchemeKeyTokens_OnBackground_instance = new ColorSchemeKeyTokens('OnBackground', 6);
    ColorSchemeKeyTokens_OnError_instance = new ColorSchemeKeyTokens('OnError', 7);
    ColorSchemeKeyTokens_OnErrorContainer_instance = new ColorSchemeKeyTokens('OnErrorContainer', 8);
    ColorSchemeKeyTokens_OnPrimary_instance = new ColorSchemeKeyTokens('OnPrimary', 9);
    ColorSchemeKeyTokens_OnPrimaryContainer_instance = new ColorSchemeKeyTokens('OnPrimaryContainer', 10);
    ColorSchemeKeyTokens_OnPrimaryFixed_instance = new ColorSchemeKeyTokens('OnPrimaryFixed', 11);
    ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance = new ColorSchemeKeyTokens('OnPrimaryFixedVariant', 12);
    ColorSchemeKeyTokens_OnSecondary_instance = new ColorSchemeKeyTokens('OnSecondary', 13);
    ColorSchemeKeyTokens_OnSecondaryContainer_instance = new ColorSchemeKeyTokens('OnSecondaryContainer', 14);
    ColorSchemeKeyTokens_OnSecondaryFixed_instance = new ColorSchemeKeyTokens('OnSecondaryFixed', 15);
    ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance = new ColorSchemeKeyTokens('OnSecondaryFixedVariant', 16);
    ColorSchemeKeyTokens_OnSurface_instance = new ColorSchemeKeyTokens('OnSurface', 17);
    ColorSchemeKeyTokens_OnSurfaceVariant_instance = new ColorSchemeKeyTokens('OnSurfaceVariant', 18);
    ColorSchemeKeyTokens_OnTertiary_instance = new ColorSchemeKeyTokens('OnTertiary', 19);
    ColorSchemeKeyTokens_OnTertiaryContainer_instance = new ColorSchemeKeyTokens('OnTertiaryContainer', 20);
    ColorSchemeKeyTokens_OnTertiaryFixed_instance = new ColorSchemeKeyTokens('OnTertiaryFixed', 21);
    ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance = new ColorSchemeKeyTokens('OnTertiaryFixedVariant', 22);
    ColorSchemeKeyTokens_Outline_instance = new ColorSchemeKeyTokens('Outline', 23);
    ColorSchemeKeyTokens_OutlineVariant_instance = new ColorSchemeKeyTokens('OutlineVariant', 24);
    ColorSchemeKeyTokens_Primary_instance = new ColorSchemeKeyTokens('Primary', 25);
    ColorSchemeKeyTokens_PrimaryContainer_instance = new ColorSchemeKeyTokens('PrimaryContainer', 26);
    ColorSchemeKeyTokens_PrimaryFixed_instance = new ColorSchemeKeyTokens('PrimaryFixed', 27);
    ColorSchemeKeyTokens_PrimaryFixedDim_instance = new ColorSchemeKeyTokens('PrimaryFixedDim', 28);
    ColorSchemeKeyTokens_Scrim_instance = new ColorSchemeKeyTokens('Scrim', 29);
    ColorSchemeKeyTokens_Secondary_instance = new ColorSchemeKeyTokens('Secondary', 30);
    ColorSchemeKeyTokens_SecondaryContainer_instance = new ColorSchemeKeyTokens('SecondaryContainer', 31);
    ColorSchemeKeyTokens_SecondaryFixed_instance = new ColorSchemeKeyTokens('SecondaryFixed', 32);
    ColorSchemeKeyTokens_SecondaryFixedDim_instance = new ColorSchemeKeyTokens('SecondaryFixedDim', 33);
    ColorSchemeKeyTokens_Surface_instance = new ColorSchemeKeyTokens('Surface', 34);
    ColorSchemeKeyTokens_SurfaceBright_instance = new ColorSchemeKeyTokens('SurfaceBright', 35);
    ColorSchemeKeyTokens_SurfaceContainer_instance = new ColorSchemeKeyTokens('SurfaceContainer', 36);
    ColorSchemeKeyTokens_SurfaceContainerHigh_instance = new ColorSchemeKeyTokens('SurfaceContainerHigh', 37);
    ColorSchemeKeyTokens_SurfaceContainerHighest_instance = new ColorSchemeKeyTokens('SurfaceContainerHighest', 38);
    ColorSchemeKeyTokens_SurfaceContainerLow_instance = new ColorSchemeKeyTokens('SurfaceContainerLow', 39);
    ColorSchemeKeyTokens_SurfaceContainerLowest_instance = new ColorSchemeKeyTokens('SurfaceContainerLowest', 40);
    ColorSchemeKeyTokens_SurfaceDim_instance = new ColorSchemeKeyTokens('SurfaceDim', 41);
    ColorSchemeKeyTokens_SurfaceTint_instance = new ColorSchemeKeyTokens('SurfaceTint', 42);
    ColorSchemeKeyTokens_SurfaceVariant_instance = new ColorSchemeKeyTokens('SurfaceVariant', 43);
    ColorSchemeKeyTokens_Tertiary_instance = new ColorSchemeKeyTokens('Tertiary', 44);
    ColorSchemeKeyTokens_TertiaryContainer_instance = new ColorSchemeKeyTokens('TertiaryContainer', 45);
    ColorSchemeKeyTokens_TertiaryFixed_instance = new ColorSchemeKeyTokens('TertiaryFixed', 46);
    ColorSchemeKeyTokens_TertiaryFixedDim_instance = new ColorSchemeKeyTokens('TertiaryFixedDim', 47);
  }
  function ColorSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorSchemeKeyTokens_OnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurface_instance;
  }
  function ColorSchemeKeyTokens_OnSurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  }
  function ColorSchemeKeyTokens_OutlineVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OutlineVariant_instance;
  }
  function ColorSchemeKeyTokens_Surface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Surface_instance;
  }
  function ColorSchemeKeyTokens_SurfaceContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceContainer_instance;
  }
  function ColorSchemeKeyTokens_SurfaceTint_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceTint_instance;
  }
  function DividerTokens() {
    DividerTokens_instance = this;
    this.eit_1 = ColorSchemeKeyTokens_OutlineVariant_getInstance();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.fit_1 = _Dp___init__impl__ms3zkb(1.0);
  }
  var DividerTokens_instance;
  function DividerTokens_getInstance() {
    if (DividerTokens_instance == null)
      new DividerTokens();
    return DividerTokens_instance;
  }
  function ElevationTokens() {
    ElevationTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.wj0_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.xj0_1 = _Dp___init__impl__ms3zkb(1.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.yj0_1 = _Dp___init__impl__ms3zkb(3.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.zj0_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.aj1_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.bj1_1 = _Dp___init__impl__ms3zkb(12.0);
  }
  var ElevationTokens_instance;
  function ElevationTokens_getInstance() {
    if (ElevationTokens_instance == null)
      new ElevationTokens();
    return ElevationTokens_instance;
  }
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.jix_1 = Color_0(0, 0, 0);
    this.kix_1 = Color_0(0, 0, 0);
    this.lix_1 = Color_0(65, 14, 11);
    this.mix_1 = Color_0(255, 255, 255);
    this.nix_1 = Color_0(96, 20, 16);
    this.oix_1 = Color_0(140, 29, 24);
    this.pix_1 = Color_0(179, 38, 30);
    this.qix_1 = Color_0(220, 54, 46);
    this.rix_1 = Color_0(228, 105, 98);
    this.six_1 = Color_0(236, 146, 142);
    this.tix_1 = Color_0(242, 184, 181);
    this.uix_1 = Color_0(249, 222, 220);
    this.vix_1 = Color_0(252, 238, 238);
    this.wix_1 = Color_0(255, 251, 249);
    this.xix_1 = Color_0(0, 0, 0);
    this.yix_1 = Color_0(29, 27, 32);
    this.zix_1 = Color_0(255, 255, 255);
    this.aiy_1 = Color_0(33, 31, 38);
    this.biy_1 = Color_0(43, 41, 48);
    this.ciy_1 = Color_0(50, 47, 53);
    this.diy_1 = Color_0(54, 52, 59);
    this.eiy_1 = Color_0(59, 56, 62);
    this.fiy_1 = Color_0(72, 70, 76);
    this.giy_1 = Color_0(15, 13, 19);
    this.hiy_1 = Color_0(96, 93, 100);
    this.iiy_1 = Color_0(121, 118, 125);
    this.jiy_1 = Color_0(20, 18, 24);
    this.kiy_1 = Color_0(147, 143, 150);
    this.liy_1 = Color_0(174, 169, 177);
    this.miy_1 = Color_0(202, 197, 205);
    this.niy_1 = Color_0(222, 216, 225);
    this.oiy_1 = Color_0(230, 224, 233);
    this.piy_1 = Color_0(236, 230, 240);
    this.qiy_1 = Color_0(243, 237, 247);
    this.riy_1 = Color_0(245, 239, 247);
    this.siy_1 = Color_0(247, 242, 250);
    this.tiy_1 = Color_0(254, 247, 255);
    this.uiy_1 = Color_0(255, 251, 255);
    this.viy_1 = Color_0(0, 0, 0);
    this.wiy_1 = Color_0(29, 26, 34);
    this.xiy_1 = Color_0(255, 255, 255);
    this.yiy_1 = Color_0(50, 47, 55);
    this.ziy_1 = Color_0(73, 69, 79);
    this.aiz_1 = Color_0(96, 93, 102);
    this.biz_1 = Color_0(121, 116, 126);
    this.ciz_1 = Color_0(147, 143, 153);
    this.diz_1 = Color_0(174, 169, 180);
    this.eiz_1 = Color_0(202, 196, 208);
    this.fiz_1 = Color_0(231, 224, 236);
    this.giz_1 = Color_0(245, 238, 250);
    this.hiz_1 = Color_0(255, 251, 254);
    this.iiz_1 = Color_0(0, 0, 0);
    this.jiz_1 = Color_0(33, 0, 93);
    this.kiz_1 = Color_0(255, 255, 255);
    this.liz_1 = Color_0(56, 30, 114);
    this.miz_1 = Color_0(79, 55, 139);
    this.niz_1 = Color_0(103, 80, 164);
    this.oiz_1 = Color_0(127, 103, 190);
    this.piz_1 = Color_0(154, 130, 219);
    this.qiz_1 = Color_0(182, 157, 248);
    this.riz_1 = Color_0(208, 188, 255);
    this.siz_1 = Color_0(234, 221, 255);
    this.tiz_1 = Color_0(246, 237, 255);
    this.uiz_1 = Color_0(255, 251, 254);
    this.viz_1 = Color_0(0, 0, 0);
    this.wiz_1 = Color_0(29, 25, 43);
    this.xiz_1 = Color_0(255, 255, 255);
    this.yiz_1 = Color_0(51, 45, 65);
    this.ziz_1 = Color_0(74, 68, 88);
    this.aj0_1 = Color_0(98, 91, 113);
    this.bj0_1 = Color_0(122, 114, 137);
    this.cj0_1 = Color_0(149, 141, 165);
    this.dj0_1 = Color_0(176, 167, 192);
    this.ej0_1 = Color_0(204, 194, 220);
    this.fj0_1 = Color_0(232, 222, 248);
    this.gj0_1 = Color_0(246, 237, 255);
    this.hj0_1 = Color_0(255, 251, 254);
    this.ij0_1 = Color_0(0, 0, 0);
    this.jj0_1 = Color_0(49, 17, 29);
    this.kj0_1 = Color_0(255, 255, 255);
    this.lj0_1 = Color_0(73, 37, 50);
    this.mj0_1 = Color_0(99, 59, 72);
    this.nj0_1 = Color_0(125, 82, 96);
    this.oj0_1 = Color_0(152, 105, 119);
    this.pj0_1 = Color_0(181, 131, 146);
    this.qj0_1 = Color_0(210, 157, 172);
    this.rj0_1 = Color_0(239, 184, 200);
    this.sj0_1 = Color_0(255, 216, 228);
    this.tj0_1 = Color_0(255, 236, 241);
    this.uj0_1 = Color_0(255, 251, 250);
    this.vj0_1 = Color_0(255, 255, 255);
  }
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  var ShapeKeyTokens_CornerExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLargeTop_instance;
  var ShapeKeyTokens_CornerExtraSmall_instance;
  var ShapeKeyTokens_CornerExtraSmallTop_instance;
  var ShapeKeyTokens_CornerFull_instance;
  var ShapeKeyTokens_CornerLarge_instance;
  var ShapeKeyTokens_CornerLargeEnd_instance;
  var ShapeKeyTokens_CornerLargeTop_instance;
  var ShapeKeyTokens_CornerMedium_instance;
  var ShapeKeyTokens_CornerNone_instance;
  var ShapeKeyTokens_CornerSmall_instance;
  var ShapeKeyTokens_entriesInitialized;
  function ShapeKeyTokens_initEntries() {
    if (ShapeKeyTokens_entriesInitialized)
      return Unit_instance;
    ShapeKeyTokens_entriesInitialized = true;
    ShapeKeyTokens_CornerExtraLarge_instance = new ShapeKeyTokens('CornerExtraLarge', 0);
    ShapeKeyTokens_CornerExtraLargeTop_instance = new ShapeKeyTokens('CornerExtraLargeTop', 1);
    ShapeKeyTokens_CornerExtraSmall_instance = new ShapeKeyTokens('CornerExtraSmall', 2);
    ShapeKeyTokens_CornerExtraSmallTop_instance = new ShapeKeyTokens('CornerExtraSmallTop', 3);
    ShapeKeyTokens_CornerFull_instance = new ShapeKeyTokens('CornerFull', 4);
    ShapeKeyTokens_CornerLarge_instance = new ShapeKeyTokens('CornerLarge', 5);
    ShapeKeyTokens_CornerLargeEnd_instance = new ShapeKeyTokens('CornerLargeEnd', 6);
    ShapeKeyTokens_CornerLargeTop_instance = new ShapeKeyTokens('CornerLargeTop', 7);
    ShapeKeyTokens_CornerMedium_instance = new ShapeKeyTokens('CornerMedium', 8);
    ShapeKeyTokens_CornerNone_instance = new ShapeKeyTokens('CornerNone', 9);
    ShapeKeyTokens_CornerSmall_instance = new ShapeKeyTokens('CornerSmall', 10);
  }
  function ShapeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShapeKeyTokens_CornerNone_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerNone_instance;
  }
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(28.0);
    tmp.ziv_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_1 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_2 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(0.0);
    tmp_0.aiw_1 = RoundedCornerShape_0(tmp_1, tmp_2, tmp_3, tmp$ret$4);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$5 = _Dp___init__impl__ms3zkb(4.0);
    tmp_4.biw_1 = RoundedCornerShape(tmp$ret$5);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_6 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_7 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$9 = _Dp___init__impl__ms3zkb(0.0);
    tmp_5.ciw_1 = RoundedCornerShape_0(tmp_6, tmp_7, tmp_8, tmp$ret$9);
    this.diw_1 = get_CircleShape();
    var tmp_9 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$10 = _Dp___init__impl__ms3zkb(16.0);
    tmp_9.eiw_1 = RoundedCornerShape(tmp$ret$10);
    var tmp_10 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_11 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_12 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_13 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$14 = _Dp___init__impl__ms3zkb(0.0);
    tmp_10.fiw_1 = RoundedCornerShape_0(tmp_11, tmp_12, tmp_13, tmp$ret$14);
    var tmp_14 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_15 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_16 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$18 = _Dp___init__impl__ms3zkb(0.0);
    tmp_14.giw_1 = RoundedCornerShape_0(tmp_15, tmp_16, tmp_17, tmp$ret$18);
    var tmp_18 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$19 = _Dp___init__impl__ms3zkb(12.0);
    tmp_18.hiw_1 = RoundedCornerShape(tmp$ret$19);
    this.iiw_1 = get_RectangleShape();
    var tmp_19 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$20 = _Dp___init__impl__ms3zkb(8.0);
    tmp_19.jiw_1 = RoundedCornerShape(tmp$ret$20);
  }
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  function StateTokens() {
    this.cj1_1 = 0.16;
    this.dj1_1 = 0.1;
    this.ej1_1 = 0.08;
    this.fj1_1 = 0.1;
  }
  var StateTokens_instance;
  function StateTokens_getInstance() {
    return StateTokens_instance;
  }
  function TopAppBarLargeTokens() {
    TopAppBarLargeTokens_instance = this;
    this.eik_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.fik_1 = ElevationTokens_getInstance().wj0_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.gik_1 = _Dp___init__impl__ms3zkb(152.0);
    this.hik_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.iik_1 = ColorSchemeKeyTokens_SurfaceTint_getInstance();
    this.jik_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.kik_1 = TypographyKeyTokens_HeadlineMedium_getInstance();
    this.lik_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.mik_1 = _Dp___init__impl__ms3zkb(24.0);
    this.nik_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.oik_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var TopAppBarLargeTokens_instance;
  function TopAppBarLargeTokens_getInstance() {
    if (TopAppBarLargeTokens_instance == null)
      new TopAppBarLargeTokens();
    return TopAppBarLargeTokens_instance;
  }
  function TopAppBarMediumTokens() {
    TopAppBarMediumTokens_instance = this;
    this.tij_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.uij_1 = ElevationTokens_getInstance().wj0_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.vij_1 = _Dp___init__impl__ms3zkb(112.0);
    this.wij_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.xij_1 = ColorSchemeKeyTokens_SurfaceTint_getInstance();
    this.yij_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.zij_1 = TypographyKeyTokens_HeadlineSmall_getInstance();
    this.aik_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.bik_1 = _Dp___init__impl__ms3zkb(24.0);
    this.cik_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.dik_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var TopAppBarMediumTokens_instance;
  function TopAppBarMediumTokens_getInstance() {
    if (TopAppBarMediumTokens_instance == null)
      new TopAppBarMediumTokens();
    return TopAppBarMediumTokens_instance;
  }
  function TopAppBarSmallTokens() {
    TopAppBarSmallTokens_instance = this;
    this.hij_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.iij_1 = ElevationTokens_getInstance().wj0_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.jij_1 = _Dp___init__impl__ms3zkb(64.0);
    this.kij_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.lij_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.mij_1 = TypographyKeyTokens_TitleLarge_getInstance();
    this.nij_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.oij_1 = _Dp___init__impl__ms3zkb(24.0);
    this.pij_1 = ColorSchemeKeyTokens_SurfaceContainer_getInstance();
    this.qij_1 = ElevationTokens_getInstance().yj0_1;
    this.rij_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.sij_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var TopAppBarSmallTokens_instance;
  function TopAppBarSmallTokens_getInstance() {
    if (TopAppBarSmallTokens_instance == null)
      new TopAppBarSmallTokens();
    return TopAppBarSmallTokens_instance;
  }
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.gj1_1 = TypefaceTokens_getInstance().ej4_1;
    this.hj1_1 = get_sp(24.0);
    this.ij1_1 = get_sp_0(16);
    this.jj1_1 = get_sp(0.5);
    this.kj1_1 = TypefaceTokens_getInstance().hj4_1;
    this.lj1_1 = TypefaceTokens_getInstance().ej4_1;
    this.mj1_1 = get_sp(20.0);
    this.nj1_1 = get_sp_0(14);
    this.oj1_1 = get_sp(0.2);
    this.pj1_1 = TypefaceTokens_getInstance().hj4_1;
    this.qj1_1 = TypefaceTokens_getInstance().ej4_1;
    this.rj1_1 = get_sp(16.0);
    this.sj1_1 = get_sp_0(12);
    this.tj1_1 = get_sp(0.4);
    this.uj1_1 = TypefaceTokens_getInstance().hj4_1;
    this.vj1_1 = TypefaceTokens_getInstance().dj4_1;
    this.wj1_1 = get_sp(64.0);
    this.xj1_1 = get_sp_0(57);
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var this_0 = get_sp(0.2);
    checkArithmetic(this_0);
    tmp.yj1_1 = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), -_TextUnit___get_value__impl__hpbx0k(this_0));
    this.zj1_1 = TypefaceTokens_getInstance().hj4_1;
    this.aj2_1 = TypefaceTokens_getInstance().dj4_1;
    this.bj2_1 = get_sp(52.0);
    this.cj2_1 = get_sp_0(45);
    this.dj2_1 = get_sp(0.0);
    this.ej2_1 = TypefaceTokens_getInstance().hj4_1;
    this.fj2_1 = TypefaceTokens_getInstance().dj4_1;
    this.gj2_1 = get_sp(44.0);
    this.hj2_1 = get_sp_0(36);
    this.ij2_1 = get_sp(0.0);
    this.jj2_1 = TypefaceTokens_getInstance().hj4_1;
    this.kj2_1 = TypefaceTokens_getInstance().dj4_1;
    this.lj2_1 = get_sp(40.0);
    this.mj2_1 = get_sp_0(32);
    this.nj2_1 = get_sp(0.0);
    this.oj2_1 = TypefaceTokens_getInstance().hj4_1;
    this.pj2_1 = TypefaceTokens_getInstance().dj4_1;
    this.qj2_1 = get_sp(36.0);
    this.rj2_1 = get_sp_0(28);
    this.sj2_1 = get_sp(0.0);
    this.tj2_1 = TypefaceTokens_getInstance().hj4_1;
    this.uj2_1 = TypefaceTokens_getInstance().dj4_1;
    this.vj2_1 = get_sp(32.0);
    this.wj2_1 = get_sp_0(24);
    this.xj2_1 = get_sp(0.0);
    this.yj2_1 = TypefaceTokens_getInstance().hj4_1;
    this.zj2_1 = TypefaceTokens_getInstance().ej4_1;
    this.aj3_1 = get_sp(20.0);
    this.bj3_1 = get_sp_0(14);
    this.cj3_1 = get_sp(0.1);
    this.dj3_1 = TypefaceTokens_getInstance().gj4_1;
    this.ej3_1 = TypefaceTokens_getInstance().ej4_1;
    this.fj3_1 = get_sp(16.0);
    this.gj3_1 = get_sp_0(12);
    this.hj3_1 = get_sp(0.5);
    this.ij3_1 = TypefaceTokens_getInstance().gj4_1;
    this.jj3_1 = TypefaceTokens_getInstance().ej4_1;
    this.kj3_1 = get_sp(16.0);
    this.lj3_1 = get_sp_0(11);
    this.mj3_1 = get_sp(0.5);
    this.nj3_1 = TypefaceTokens_getInstance().gj4_1;
    this.oj3_1 = TypefaceTokens_getInstance().dj4_1;
    this.pj3_1 = get_sp(28.0);
    this.qj3_1 = get_sp_0(22);
    this.rj3_1 = get_sp(0.0);
    this.sj3_1 = TypefaceTokens_getInstance().hj4_1;
    this.tj3_1 = TypefaceTokens_getInstance().ej4_1;
    this.uj3_1 = get_sp(24.0);
    this.vj3_1 = get_sp_0(16);
    this.wj3_1 = get_sp(0.2);
    this.xj3_1 = TypefaceTokens_getInstance().gj4_1;
    this.yj3_1 = TypefaceTokens_getInstance().ej4_1;
    this.zj3_1 = get_sp(20.0);
    this.aj4_1 = get_sp_0(14);
    this.bj4_1 = get_sp(0.1);
    this.cj4_1 = TypefaceTokens_getInstance().gj4_1;
  }
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.dj4_1 = Companion_getInstance_9().i6u_1;
    this.ej4_1 = Companion_getInstance_9().i6u_1;
    this.fj4_1 = Companion_getInstance_10().x6t_1;
    this.gj4_1 = Companion_getInstance_10().v6t_1;
    this.hj4_1 = Companion_getInstance_10().u6t_1;
  }
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  var TypographyKeyTokens_BodyLarge_instance;
  var TypographyKeyTokens_BodyMedium_instance;
  var TypographyKeyTokens_BodySmall_instance;
  var TypographyKeyTokens_DisplayLarge_instance;
  var TypographyKeyTokens_DisplayMedium_instance;
  var TypographyKeyTokens_DisplaySmall_instance;
  var TypographyKeyTokens_HeadlineLarge_instance;
  var TypographyKeyTokens_HeadlineMedium_instance;
  var TypographyKeyTokens_HeadlineSmall_instance;
  var TypographyKeyTokens_LabelLarge_instance;
  var TypographyKeyTokens_LabelMedium_instance;
  var TypographyKeyTokens_LabelSmall_instance;
  var TypographyKeyTokens_TitleLarge_instance;
  var TypographyKeyTokens_TitleMedium_instance;
  var TypographyKeyTokens_TitleSmall_instance;
  var TypographyKeyTokens_entriesInitialized;
  function TypographyKeyTokens_initEntries() {
    if (TypographyKeyTokens_entriesInitialized)
      return Unit_instance;
    TypographyKeyTokens_entriesInitialized = true;
    TypographyKeyTokens_BodyLarge_instance = new TypographyKeyTokens('BodyLarge', 0);
    TypographyKeyTokens_BodyMedium_instance = new TypographyKeyTokens('BodyMedium', 1);
    TypographyKeyTokens_BodySmall_instance = new TypographyKeyTokens('BodySmall', 2);
    TypographyKeyTokens_DisplayLarge_instance = new TypographyKeyTokens('DisplayLarge', 3);
    TypographyKeyTokens_DisplayMedium_instance = new TypographyKeyTokens('DisplayMedium', 4);
    TypographyKeyTokens_DisplaySmall_instance = new TypographyKeyTokens('DisplaySmall', 5);
    TypographyKeyTokens_HeadlineLarge_instance = new TypographyKeyTokens('HeadlineLarge', 6);
    TypographyKeyTokens_HeadlineMedium_instance = new TypographyKeyTokens('HeadlineMedium', 7);
    TypographyKeyTokens_HeadlineSmall_instance = new TypographyKeyTokens('HeadlineSmall', 8);
    TypographyKeyTokens_LabelLarge_instance = new TypographyKeyTokens('LabelLarge', 9);
    TypographyKeyTokens_LabelMedium_instance = new TypographyKeyTokens('LabelMedium', 10);
    TypographyKeyTokens_LabelSmall_instance = new TypographyKeyTokens('LabelSmall', 11);
    TypographyKeyTokens_TitleLarge_instance = new TypographyKeyTokens('TitleLarge', 12);
    TypographyKeyTokens_TitleMedium_instance = new TypographyKeyTokens('TitleMedium', 13);
    TypographyKeyTokens_TitleSmall_instance = new TypographyKeyTokens('TitleSmall', 14);
  }
  function TypographyKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TypographyKeyTokens_HeadlineMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineMedium_instance;
  }
  function TypographyKeyTokens_HeadlineSmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineSmall_instance;
  }
  function TypographyKeyTokens_TitleLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_TitleLarge_instance;
  }
  function get_DefaultLineHeightStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultLineHeightStyle;
  }
  var DefaultLineHeightStyle;
  function get_DefaultTextStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  function TypographyTokens() {
    TypographyTokens_instance = this;
    var tmp = this;
    var tmp0_$this = get_DefaultTextStyle();
    var tmp1_fontFamily = TypeScaleTokens_getInstance().gj1_1;
    var tmp2_fontWeight = TypeScaleTokens_getInstance().kj1_1;
    var tmp3_fontSize = TypeScaleTokens_getInstance().ij1_1;
    var tmp4_lineHeight = TypeScaleTokens_getInstance().hj1_1;
    var tmp5_letterSpacing = TypeScaleTokens_getInstance().jj1_1;
    tmp.tiw_1 = tmp0_$this.z6v(VOID, tmp3_fontSize, tmp2_fontWeight, VOID, VOID, tmp1_fontFamily, VOID, tmp5_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight);
    var tmp_0 = this;
    var tmp0_$this_0 = get_DefaultTextStyle();
    var tmp1_fontFamily_0 = TypeScaleTokens_getInstance().lj1_1;
    var tmp2_fontWeight_0 = TypeScaleTokens_getInstance().pj1_1;
    var tmp3_fontSize_0 = TypeScaleTokens_getInstance().nj1_1;
    var tmp4_lineHeight_0 = TypeScaleTokens_getInstance().mj1_1;
    var tmp5_letterSpacing_0 = TypeScaleTokens_getInstance().oj1_1;
    tmp_0.uiw_1 = tmp0_$this_0.z6v(VOID, tmp3_fontSize_0, tmp2_fontWeight_0, VOID, VOID, tmp1_fontFamily_0, VOID, tmp5_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_0);
    var tmp_1 = this;
    var tmp0_$this_1 = get_DefaultTextStyle();
    var tmp1_fontFamily_1 = TypeScaleTokens_getInstance().qj1_1;
    var tmp2_fontWeight_1 = TypeScaleTokens_getInstance().uj1_1;
    var tmp3_fontSize_1 = TypeScaleTokens_getInstance().sj1_1;
    var tmp4_lineHeight_1 = TypeScaleTokens_getInstance().rj1_1;
    var tmp5_letterSpacing_1 = TypeScaleTokens_getInstance().tj1_1;
    tmp_1.viw_1 = tmp0_$this_1.z6v(VOID, tmp3_fontSize_1, tmp2_fontWeight_1, VOID, VOID, tmp1_fontFamily_1, VOID, tmp5_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_1);
    var tmp_2 = this;
    var tmp0_$this_2 = get_DefaultTextStyle();
    var tmp1_fontFamily_2 = TypeScaleTokens_getInstance().vj1_1;
    var tmp2_fontWeight_2 = TypeScaleTokens_getInstance().zj1_1;
    var tmp3_fontSize_2 = TypeScaleTokens_getInstance().xj1_1;
    var tmp4_lineHeight_2 = TypeScaleTokens_getInstance().wj1_1;
    var tmp5_letterSpacing_2 = TypeScaleTokens_getInstance().yj1_1;
    tmp_2.wiw_1 = tmp0_$this_2.z6v(VOID, tmp3_fontSize_2, tmp2_fontWeight_2, VOID, VOID, tmp1_fontFamily_2, VOID, tmp5_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_2);
    var tmp_3 = this;
    var tmp0_$this_3 = get_DefaultTextStyle();
    var tmp1_fontFamily_3 = TypeScaleTokens_getInstance().aj2_1;
    var tmp2_fontWeight_3 = TypeScaleTokens_getInstance().ej2_1;
    var tmp3_fontSize_3 = TypeScaleTokens_getInstance().cj2_1;
    var tmp4_lineHeight_3 = TypeScaleTokens_getInstance().bj2_1;
    var tmp5_letterSpacing_3 = TypeScaleTokens_getInstance().dj2_1;
    tmp_3.xiw_1 = tmp0_$this_3.z6v(VOID, tmp3_fontSize_3, tmp2_fontWeight_3, VOID, VOID, tmp1_fontFamily_3, VOID, tmp5_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_3);
    var tmp_4 = this;
    var tmp0_$this_4 = get_DefaultTextStyle();
    var tmp1_fontFamily_4 = TypeScaleTokens_getInstance().fj2_1;
    var tmp2_fontWeight_4 = TypeScaleTokens_getInstance().jj2_1;
    var tmp3_fontSize_4 = TypeScaleTokens_getInstance().hj2_1;
    var tmp4_lineHeight_4 = TypeScaleTokens_getInstance().gj2_1;
    var tmp5_letterSpacing_4 = TypeScaleTokens_getInstance().ij2_1;
    tmp_4.yiw_1 = tmp0_$this_4.z6v(VOID, tmp3_fontSize_4, tmp2_fontWeight_4, VOID, VOID, tmp1_fontFamily_4, VOID, tmp5_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_4);
    var tmp_5 = this;
    var tmp0_$this_5 = get_DefaultTextStyle();
    var tmp1_fontFamily_5 = TypeScaleTokens_getInstance().kj2_1;
    var tmp2_fontWeight_5 = TypeScaleTokens_getInstance().oj2_1;
    var tmp3_fontSize_5 = TypeScaleTokens_getInstance().mj2_1;
    var tmp4_lineHeight_5 = TypeScaleTokens_getInstance().lj2_1;
    var tmp5_letterSpacing_5 = TypeScaleTokens_getInstance().nj2_1;
    tmp_5.ziw_1 = tmp0_$this_5.z6v(VOID, tmp3_fontSize_5, tmp2_fontWeight_5, VOID, VOID, tmp1_fontFamily_5, VOID, tmp5_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_5);
    var tmp_6 = this;
    var tmp0_$this_6 = get_DefaultTextStyle();
    var tmp1_fontFamily_6 = TypeScaleTokens_getInstance().pj2_1;
    var tmp2_fontWeight_6 = TypeScaleTokens_getInstance().tj2_1;
    var tmp3_fontSize_6 = TypeScaleTokens_getInstance().rj2_1;
    var tmp4_lineHeight_6 = TypeScaleTokens_getInstance().qj2_1;
    var tmp5_letterSpacing_6 = TypeScaleTokens_getInstance().sj2_1;
    tmp_6.aix_1 = tmp0_$this_6.z6v(VOID, tmp3_fontSize_6, tmp2_fontWeight_6, VOID, VOID, tmp1_fontFamily_6, VOID, tmp5_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_6);
    var tmp_7 = this;
    var tmp0_$this_7 = get_DefaultTextStyle();
    var tmp1_fontFamily_7 = TypeScaleTokens_getInstance().uj2_1;
    var tmp2_fontWeight_7 = TypeScaleTokens_getInstance().yj2_1;
    var tmp3_fontSize_7 = TypeScaleTokens_getInstance().wj2_1;
    var tmp4_lineHeight_7 = TypeScaleTokens_getInstance().vj2_1;
    var tmp5_letterSpacing_7 = TypeScaleTokens_getInstance().xj2_1;
    tmp_7.bix_1 = tmp0_$this_7.z6v(VOID, tmp3_fontSize_7, tmp2_fontWeight_7, VOID, VOID, tmp1_fontFamily_7, VOID, tmp5_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_7);
    var tmp_8 = this;
    var tmp0_$this_8 = get_DefaultTextStyle();
    var tmp1_fontFamily_8 = TypeScaleTokens_getInstance().zj2_1;
    var tmp2_fontWeight_8 = TypeScaleTokens_getInstance().dj3_1;
    var tmp3_fontSize_8 = TypeScaleTokens_getInstance().bj3_1;
    var tmp4_lineHeight_8 = TypeScaleTokens_getInstance().aj3_1;
    var tmp5_letterSpacing_8 = TypeScaleTokens_getInstance().cj3_1;
    tmp_8.cix_1 = tmp0_$this_8.z6v(VOID, tmp3_fontSize_8, tmp2_fontWeight_8, VOID, VOID, tmp1_fontFamily_8, VOID, tmp5_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_8);
    var tmp_9 = this;
    var tmp0_$this_9 = get_DefaultTextStyle();
    var tmp1_fontFamily_9 = TypeScaleTokens_getInstance().ej3_1;
    var tmp2_fontWeight_9 = TypeScaleTokens_getInstance().ij3_1;
    var tmp3_fontSize_9 = TypeScaleTokens_getInstance().gj3_1;
    var tmp4_lineHeight_9 = TypeScaleTokens_getInstance().fj3_1;
    var tmp5_letterSpacing_9 = TypeScaleTokens_getInstance().hj3_1;
    tmp_9.dix_1 = tmp0_$this_9.z6v(VOID, tmp3_fontSize_9, tmp2_fontWeight_9, VOID, VOID, tmp1_fontFamily_9, VOID, tmp5_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_9);
    var tmp_10 = this;
    var tmp0_$this_10 = get_DefaultTextStyle();
    var tmp1_fontFamily_10 = TypeScaleTokens_getInstance().jj3_1;
    var tmp2_fontWeight_10 = TypeScaleTokens_getInstance().nj3_1;
    var tmp3_fontSize_10 = TypeScaleTokens_getInstance().lj3_1;
    var tmp4_lineHeight_10 = TypeScaleTokens_getInstance().kj3_1;
    var tmp5_letterSpacing_10 = TypeScaleTokens_getInstance().mj3_1;
    tmp_10.eix_1 = tmp0_$this_10.z6v(VOID, tmp3_fontSize_10, tmp2_fontWeight_10, VOID, VOID, tmp1_fontFamily_10, VOID, tmp5_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_10);
    var tmp_11 = this;
    var tmp0_$this_11 = get_DefaultTextStyle();
    var tmp1_fontFamily_11 = TypeScaleTokens_getInstance().oj3_1;
    var tmp2_fontWeight_11 = TypeScaleTokens_getInstance().sj3_1;
    var tmp3_fontSize_11 = TypeScaleTokens_getInstance().qj3_1;
    var tmp4_lineHeight_11 = TypeScaleTokens_getInstance().pj3_1;
    var tmp5_letterSpacing_11 = TypeScaleTokens_getInstance().rj3_1;
    tmp_11.fix_1 = tmp0_$this_11.z6v(VOID, tmp3_fontSize_11, tmp2_fontWeight_11, VOID, VOID, tmp1_fontFamily_11, VOID, tmp5_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_11);
    var tmp_12 = this;
    var tmp0_$this_12 = get_DefaultTextStyle();
    var tmp1_fontFamily_12 = TypeScaleTokens_getInstance().tj3_1;
    var tmp2_fontWeight_12 = TypeScaleTokens_getInstance().xj3_1;
    var tmp3_fontSize_12 = TypeScaleTokens_getInstance().vj3_1;
    var tmp4_lineHeight_12 = TypeScaleTokens_getInstance().uj3_1;
    var tmp5_letterSpacing_12 = TypeScaleTokens_getInstance().wj3_1;
    tmp_12.gix_1 = tmp0_$this_12.z6v(VOID, tmp3_fontSize_12, tmp2_fontWeight_12, VOID, VOID, tmp1_fontFamily_12, VOID, tmp5_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_12);
    var tmp_13 = this;
    var tmp0_$this_13 = get_DefaultTextStyle();
    var tmp1_fontFamily_13 = TypeScaleTokens_getInstance().yj3_1;
    var tmp2_fontWeight_13 = TypeScaleTokens_getInstance().cj4_1;
    var tmp3_fontSize_13 = TypeScaleTokens_getInstance().aj4_1;
    var tmp4_lineHeight_13 = TypeScaleTokens_getInstance().zj3_1;
    var tmp5_letterSpacing_13 = TypeScaleTokens_getInstance().bj4_1;
    tmp_13.hix_1 = tmp0_$this_13.z6v(VOID, tmp3_fontSize_13, tmp2_fontWeight_13, VOID, VOID, tmp1_fontFamily_13, VOID, tmp5_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_13);
  }
  var TypographyTokens_instance;
  function TypographyTokens_getInstance() {
    if (TypographyTokens_instance == null)
      new TypographyTokens();
    return TypographyTokens_instance;
  }
  var properties_initialized_TypographyTokens_kt_gw7fqt;
  function _init_properties_TypographyTokens_kt__by6b7t() {
    if (!properties_initialized_TypographyTokens_kt_gw7fqt) {
      properties_initialized_TypographyTokens_kt_gw7fqt = true;
      DefaultLineHeightStyle = new LineHeightStyle(Companion_getInstance_11().w73_1, Companion_getInstance_12().u73_1);
      DefaultTextStyle = Companion_getInstance_13().t6v_1.z6v(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle(), get_DefaultLineHeightStyle());
    }
  }
  var nextHash;
  function defaultPlatformTextStyle() {
    return null;
  }
  function systemBarsForVisualComponents(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 106745345, 'C(systemBarsForVisualComponents):SystemBarsDefaultInsets.skiko.kt#mqatfk');
    if (isTraceInProgress()) {
      traceEventStart(106745345, $changed, -1, 'androidx.compose.material3.internal.systemBarsForVisualComponents (SystemBarsDefaultInsets.skiko.kt:25)');
    }
    var tmp0 = get_systemBars(Companion_instance_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  //region block: post-declaration
  protoOf(RippleNodeFactory).bc6 = rememberUpdatedInstance;
  //endregion
  //region block: init
  MaterialTheme_instance = new MaterialTheme();
  CompatRippleTheme_instance = new CompatRippleTheme();
  ScaffoldDefaults_instance = new ScaffoldDefaults();
  StateTokens_instance = new StateTokens();
  nextHash = 1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HorizontalDivider;
  _.$_$.b = MaterialTheme_0;
  _.$_$.c = Scaffold;
  _.$_$.d = Surface;
  _.$_$.e = Text;
  _.$_$.f = TopAppBarColors;
  _.$_$.g = TopAppBar;
  _.$_$.h = VerticalDivider;
  _.$_$.i = darkColorScheme;
  _.$_$.j = lightColorScheme;
  _.$_$.k = _FabPosition___init__impl__9ib2hj;
  _.$_$.l = BottomAppBarDefaults_getInstance;
  _.$_$.m = MaterialTheme_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material3-material3.js.map
