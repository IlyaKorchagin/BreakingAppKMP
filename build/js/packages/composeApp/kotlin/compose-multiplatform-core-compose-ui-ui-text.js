(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-util.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-text'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ff;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var VOID = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var hashCode = kotlin_kotlin.$_$.xd;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var emptyList = kotlin_kotlin.$_$.o8;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var isInterface = kotlin_kotlin.$_$.oe;
  var Comparator = kotlin_kotlin.$_$.ak;
  var compareValues = kotlin_kotlin.$_$.cc;
  var sortedWith = kotlin_kotlin.$_$.ib;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var KtList = kotlin_kotlin.$_$.w6;
  var CharSequence = kotlin_kotlin.$_$.wj;
  var coerceIn = kotlin_kotlin.$_$.dg;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var coerceAtLeast = kotlin_kotlin.$_$.vf;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.r9;
  var addAll = kotlin_kotlin.$_$.g7;
  var plus = kotlin_kotlin.$_$.qa;
  var last = kotlin_kotlin.$_$.x9;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var compareTo = kotlin_kotlin.$_$.ld;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.m;
  var lazy = kotlin_kotlin.$_$.pl;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c4;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var Enum = kotlin_kotlin.$_$.bk;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.d;
  var arrayListOf = kotlin_kotlin.$_$.i7;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i4;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var Long = kotlin_kotlin.$_$.hk;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r4;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e2;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var Saver_0 = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.c;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a2;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var toLong = kotlin_kotlin.$_$.hf;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.y2;
  var first = kotlin_kotlin.$_$.z8;
  var KtMap = kotlin_kotlin.$_$.y6;
  var KtMutableMap = kotlin_kotlin.$_$.c7;
  var MutableCollection = kotlin_kotlin.$_$.z6;
  var println = kotlin_kotlin.$_$.ad;
  var copyOf = kotlin_kotlin.$_$.j8;
  var copyOf_0 = kotlin_kotlin.$_$.i8;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var arrayCopy = kotlin_kotlin.$_$.h7;
  var ClassCastException = kotlin_kotlin.$_$.yj;
  var NullPointerException = kotlin_kotlin.$_$.kk;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var Exception = kotlin_kotlin.$_$.dk;
  var IllegalStateException = kotlin_kotlin.$_$.fk;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.r2;
  var captureStack = kotlin_kotlin.$_$.fd;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var get_indices = kotlin_kotlin.$_$.l9;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v2;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.s2;
  var CancellationException = kotlin_kotlin.$_$.fc;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.lc;
  var Element = kotlin_kotlin.$_$.uc;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var to = kotlin_kotlin.$_$.dm;
  var mutableListOf = kotlin_kotlin.$_$.ja;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.il;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.a4;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var listOf = kotlin_kotlin.$_$.da;
  var Comparable = kotlin_kotlin.$_$.zj;
  var lerp_2 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.e;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var joinTo = kotlin_kotlin.$_$.o9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.f3;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var charArray = kotlin_kotlin.$_$.hd;
  var toString_1 = kotlin_kotlin.$_$.v3;
  var repeat = kotlin_kotlin.$_$.fi;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.p3;
  var Collection = kotlin_kotlin.$_$.q6;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var lerp_3 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var isNaN_0 = kotlin_kotlin.$_$.nl;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var toList = kotlin_kotlin.$_$.sb;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h4;
  var until = kotlin_kotlin.$_$.ig;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.y5;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.z5;
  var isLowSurrogate = kotlin_kotlin.$_$.xh;
  var isHighSurrogate = kotlin_kotlin.$_$.wh;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var sequence = kotlin_kotlin.$_$.ah;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.q3;
  var SequenceScope = kotlin_kotlin.$_$.pg;
  var numberRangeToNumber = kotlin_kotlin.$_$.xe;
  var lazy_0 = kotlin_kotlin.$_$.ql;
  var FontRastrSettings = kotlin_org_jetbrains_skiko_skiko.$_$.c5;
  var FontEdging_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var FontEdging_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var FontHinting_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var FontHinting_SLIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var FontHinting_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var FontHinting_FULL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var asList = kotlin_kotlin.$_$.j7;
  var binarySearch = kotlin_kotlin.$_$.n7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.s9;
  var coerceAtMost = kotlin_kotlin.$_$.ag;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var firstOrNull = kotlin_kotlin.$_$.x8;
  var first_0 = kotlin_kotlin.$_$.a9;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.u5;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.i5;
  var get_lastIndex_1 = kotlin_kotlin.$_$.ai;
  var lastOrNull = kotlin_kotlin.$_$.w9;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.xf;
  var Rect_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var getOrNull = kotlin_kotlin.$_$.c9;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var isWhitespace = kotlin_kotlin.$_$.zh;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.d5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.o4;
  var copyToArray = kotlin_kotlin.$_$.k8;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var BlendMode__toString_impl_uuibkd = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.q4;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.b5;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.h5;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yl;
  var sortWith = kotlin_kotlin.$_$.gb;
  var asReversed = kotlin_kotlin.$_$.k7;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.f5;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.j5;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a4;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.e5;
  var charSequenceSubSequence = kotlin_kotlin.$_$.kd;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var HeightMode_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var HeightMode_DISABLE_LAST_DESCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var HeightMode_DISABLE_FIRST_ASCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var listOf_0 = kotlin_kotlin.$_$.ca;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.t3;
  var TypefaceFontProviderWithFallback_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.a1;
  var FontMgrWithFallback = kotlin_org_jetbrains_skiko_skiko.$_$.o5;
  var mapOf = kotlin_kotlin.$_$.fa;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var firstOrNull_0 = kotlin_kotlin.$_$.w8;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var coerceIn_0 = kotlin_kotlin.$_$.cg;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f4;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var setOf = kotlin_kotlin.$_$.cb;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.a6;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.p4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(MutableRange, 'MutableRange');
  initMetadataForClass(Range, 'Range');
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(AnnotatedString, 'AnnotatedString', VOID, VOID, [CharSequence]);
  initMetadataForClass(LinkAnnotation, 'LinkAnnotation');
  initMetadataForClass(Url, 'Url', VOID, LinkAnnotation);
  initMetadataForClass(Clickable, 'Clickable', VOID, LinkAnnotation);
  initMetadataForClass(MultiParagraph, 'MultiParagraph');
  initMetadataForClass(ParagraphInfo, 'ParagraphInfo');
  function get_hasStaleResolvedFonts() {
    return false;
  }
  initMetadataForInterface(ParagraphIntrinsics, 'ParagraphIntrinsics');
  initMetadataForClass(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo');
  initMetadataForClass(ParagraphStyle_0, 'ParagraphStyle');
  initMetadataForClass(Placeholder, 'Placeholder');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(AnnotationType, 'AnnotationType', VOID, Enum);
  initMetadataForInterface(NonNullValueClassSaver, 'NonNullValueClassSaver', VOID, VOID, [Saver]);
  initMetadataForClass(NonNullValueClassSaver$1, VOID, VOID, VOID, [NonNullValueClassSaver]);
  initMetadataForClass(SpanStyle, 'SpanStyle');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(TextLayoutResult, 'TextLayoutResult');
  initMetadataForClass(TextLayoutInput, 'TextLayoutInput');
  initMetadataForClass(TextLinkStyles, 'TextLinkStyles', TextLinkStyles);
  initMetadataForObject(TextPainter, 'TextPainter');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(TextRange, 'TextRange');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(TextStyle, 'TextStyle');
  initMetadataForClass(TtsAnnotation, 'TtsAnnotation');
  initMetadataForClass(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', VOID, TtsAnnotation);
  initMetadataForClass(UrlAnnotation, 'UrlAnnotation');
  initMetadataForClass(LruCache, 'LruCache');
  initMetadataForClass(SimpleArrayMap, 'SimpleArrayMap', SimpleArrayMap_init_$Create$);
  function get_loadingStrategy() {
    return Companion_getInstance_19().f78_1;
  }
  initMetadataForInterface(Font, 'Font');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FontFamily, 'FontFamily');
  initMetadataForClass(SystemFontFamily, 'SystemFontFamily', VOID, FontFamily);
  initMetadataForClass(DefaultFontFamily, 'DefaultFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(GenericFontFamily, 'GenericFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(FileBasedFontFamily, 'FileBasedFontFamily', VOID, FontFamily);
  initMetadataForClass(FontListFontFamily, 'FontListFontFamily', VOID, FileBasedFontFamily, [FileBasedFontFamily, KtList]);
  initMetadataForClass(LoadedFontFamily, 'LoadedFontFamily', VOID, FontFamily);
  initMetadataForClass(TypefaceRequestCache, 'TypefaceRequestCache', TypefaceRequestCache);
  initMetadataForClass(TypefaceRequest, 'TypefaceRequest');
  initMetadataForClass(Immutable, 'Immutable');
  initMetadataForClass(Async, 'Async');
  initMetadataForClass(FontLoadFailedException, 'FontLoadFailedException', VOID, IllegalStateException);
  initMetadataForClass(FontFamilyResolverImpl, 'FontFamilyResolverImpl', VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  initMetadataForInterface(PlatformResolveInterceptor, 'PlatformResolveInterceptor');
  initMetadataForClass(PlatformResolveInterceptor$Companion$Default$1, VOID, VOID, VOID, [PlatformResolveInterceptor]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(AsyncTypefaceResult, 'AsyncTypefaceResult');
  initMetadataForClass(Key, 'Key');
  initMetadataForCoroutine($runCachedCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(AsyncTypefaceCache, 'AsyncTypefaceCache', AsyncTypefaceCache, VOID, VOID, [4]);
  initMetadataForLambda(AsyncFontListLoader$load$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($loadWithTimeoutOrNullCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(AsyncFontListLoader, 'AsyncFontListLoader', VOID, VOID, VOID, [0]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  initMetadataForCompanion(Companion_5);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$resolve$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(FontMatcher, 'FontMatcher', FontMatcher);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(FontSynthesis, 'FontSynthesis');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(FontWeight, 'FontWeight', VOID, VOID, [Comparable]);
  initMetadataForClass(CommitTextCommand, 'CommitTextCommand');
  initMetadataForClass(SetComposingTextCommand, 'SetComposingTextCommand');
  initMetadataForClass(SetComposingRegionCommand, 'SetComposingRegionCommand');
  initMetadataForClass(DeleteSurroundingTextCommand, 'DeleteSurroundingTextCommand');
  initMetadataForClass(DeleteSurroundingTextInCodePointsCommand, 'DeleteSurroundingTextInCodePointsCommand');
  initMetadataForClass(SetSelectionCommand, 'SetSelectionCommand');
  initMetadataForClass(FinishComposingTextCommand, 'FinishComposingTextCommand', FinishComposingTextCommand);
  initMetadataForClass(BackspaceCommand, 'BackspaceCommand');
  initMetadataForClass(MoveCursorCommand, 'MoveCursorCommand');
  initMetadataForClass(DeleteAllCommand, 'DeleteAllCommand', DeleteAllCommand);
  initMetadataForClass(EditProcessor, 'EditProcessor', EditProcessor);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(EditingBuffer, 'EditingBuffer');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(PartialGapBuffer, 'PartialGapBuffer');
  initMetadataForClass(GapBuffer, 'GapBuffer');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(ImeAction, 'ImeAction');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(ImeOptions, 'ImeOptions');
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(KeyboardCapitalization, 'KeyboardCapitalization');
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(KeyboardType, 'KeyboardType');
  initMetadataForClass(OffsetMapping$Companion$Identity$1);
  initMetadataForCompanion(Companion_16);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(TextFieldValue, 'TextFieldValue', TextFieldValue_init_$Create$);
  initMetadataForClass(TextInputService, 'TextInputService');
  function notifyFocusedRect(rect) {
  }
  function updateTextLayoutResult(textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds) {
  }
  initMetadataForInterface(PlatformTextInputService, 'PlatformTextInputService');
  initMetadataForClass(TextInputSession, 'TextInputSession');
  initMetadataForInterface(VisualTransformation, 'VisualTransformation');
  initMetadataForClass(sam$androidx_compose_ui_text_input_VisualTransformation$0, 'sam$androidx_compose_ui_text_input_VisualTransformation$0', VOID, VOID, [VisualTransformation, FunctionAdapter]);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TransformedText, 'TransformedText');
  initMetadataForClass(PasswordVisualTransformation, 'PasswordVisualTransformation', PasswordVisualTransformation, VOID, [VisualTransformation]);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Locale, 'Locale');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(LocaleList, 'LocaleList', VOID, VOID, [Collection]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(BaselineShift, 'BaselineShift');
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(Hyphens, 'Hyphens');
  initMetadataForCompanion(Companion_23);
  initMetadataForCompanion(Companion_24);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(LineHeightStyle, 'LineHeightStyle');
  initMetadataForClass(ResolvedTextDirection, 'ResolvedTextDirection', VOID, Enum);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(TextDecoration, 'TextDecoration');
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(TextDirection, 'TextDirection');
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.o64();
      tmp = new BrushStyle(other.x7i_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.g74(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_instance) ? this : other();
  }
  initMetadataForInterface(TextForegroundStyle, 'TextForegroundStyle');
  initMetadataForObject(Unspecified, 'Unspecified', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(BrushStyle, 'BrushStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForClass(ColorStyle, 'ColorStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(TextGeometricTransform, 'TextGeometricTransform', TextGeometricTransform);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(TextIndent_0, 'TextIndent', TextIndent_0);
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(TextOverflow, 'TextOverflow');
  initMetadataForClass(NoCache, 'NoCache', NoCache);
  initMetadataForClass(PlatformFont, 'PlatformFont', VOID, VOID, [Font]);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(ExpireAfterAccessCache, 'ExpireAfterAccessCache');
  initMetadataForCompanion(Companion_33);
  initMetadataForLambda(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(_get_codePoints_$slambda_43x8dt, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(FontRasterizationSettings, 'FontRasterizationSettings');
  initMetadataForClass(FontSmoothing, 'FontSmoothing', VOID, Enum);
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().l68_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.r6y(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.r6y.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h6e_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.t6y(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.t6y.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  initMetadataForInterface(Paragraph_1, 'Paragraph');
  initMetadataForClass(SkiaParagraph, 'SkiaParagraph', VOID, VOID, [Paragraph_1]);
  initMetadataForCompanion(Companion_35);
  initMetadataForClass(TextDecorationLineStyle, 'TextDecorationLineStyle');
  initMetadataForCompanion(Companion_36);
  initMetadataForClass(PlatformParagraphStyle, 'PlatformParagraphStyle');
  initMetadataForCompanion(Companion_37);
  initMetadataForClass(PlatformSpanStyle, 'PlatformSpanStyle', PlatformSpanStyle_init_$Create$);
  initMetadataForClass(PlatformTextStyle, 'PlatformTextStyle');
  initMetadataForClass(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', PlatformFontFamilyTypefaceAdapter);
  initMetadataForClass(SkiaFontLoader, 'SkiaFontLoader', SkiaFontLoader, VOID, VOID, [1]);
  initMetadataForClass(ComputedStyle, 'ComputedStyle', ComputedStyle);
  initMetadataForClass(Op, 'Op');
  initMetadataForClass(StyleAdd, 'StyleAdd', VOID, Op);
  initMetadataForClass(PutPlaceholder, 'PutPlaceholder', VOID, Op);
  initMetadataForClass(EndPlaceholder, 'EndPlaceholder', VOID, Op);
  initMetadataForClass(Cut, 'Cut');
  initMetadataForClass(StyleAdd_0, 'StyleAdd', VOID, Cut);
  initMetadataForClass(StyleRemove, 'StyleRemove', VOID, Cut);
  initMetadataForClass(PutPlaceholder_0, 'PutPlaceholder', VOID, Cut);
  initMetadataForClass(EndPlaceholder_0, 'EndPlaceholder', VOID, Cut);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(ParagraphBuilder_0, 'ParagraphBuilder');
  initMetadataForClass(ParagraphLayouter, 'ParagraphLayouter');
  initMetadataForClass(FontLoadResult, 'FontLoadResult');
  initMetadataForClass(Platform, 'Platform', VOID, Enum);
  initMetadataForClass(LoadedFont, 'LoadedFont', VOID, PlatformFont);
  initMetadataForClass(FontLoader, 'FontLoader', FontLoader);
  initMetadataForClass(FontCache, 'FontCache', FontCache);
  initMetadataForClass(SystemFont, 'SystemFont', VOID, PlatformFont);
  initMetadataForClass(SkiaBackedTypeface, 'SkiaBackedTypeface');
  initMetadataForClass(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(SkiaTextPaint, 'SkiaTextPaint', SkiaTextPaint);
  initMetadataForCompanion(Companion_38);
  initMetadataForClass(LineBreak, 'LineBreak');
  initMetadataForCompanion(Companion_39);
  initMetadataForClass(TextMotion, 'TextMotion');
  initMetadataForClass(createPlatformLocaleDelegate$1);
  //endregion
  function get_EmptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return EmptyAnnotatedString;
  }
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function MutableRange(item, start, end, tag) {
    end = end === VOID ? -2147483648 : end;
    tag = tag === VOID ? '' : tag;
    this.g6v_1 = item;
    this.h6v_1 = start;
    this.i6v_1 = end;
    this.j6v_1 = tag;
  }
  protoOf(MutableRange).k6v = function (defaultEnd) {
    var end = this.i6v_1 === -2147483648 ? defaultEnd : this.i6v_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(end === -2147483648)) {
      // Inline function 'androidx.compose.ui.text.MutableRange.toRange.<anonymous>' call
      var message = 'Item.end should be set first';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new Range(this.g6v_1, this.h6v_1, end, this.j6v_1);
  };
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(item=' + toString_0(this.g6v_1) + ', start=' + this.h6v_1 + ', end=' + this.i6v_1 + ', tag=' + this.j6v_1 + ')';
  };
  protoOf(MutableRange).hashCode = function () {
    var result = this.g6v_1 == null ? 0 : hashCode(this.g6v_1);
    result = imul(result, 31) + this.h6v_1 | 0;
    result = imul(result, 31) + this.i6v_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.j6v_1) | 0;
    return result;
  };
  protoOf(MutableRange).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.g6v_1, tmp0_other_with_cast.g6v_1))
      return false;
    if (!(this.h6v_1 === tmp0_other_with_cast.h6v_1))
      return false;
    if (!(this.i6v_1 === tmp0_other_with_cast.i6v_1))
      return false;
    if (!(this.j6v_1 === tmp0_other_with_cast.j6v_1))
      return false;
    return true;
  };
  function Builder_init_$Init$(text, $this) {
    Builder.call($this);
    $this.q6v(text);
    return $this;
  }
  function Builder_init_$Create$(text) {
    return Builder_init_$Init$(text, objectCreate(protoOf(Builder)));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    if (spanStyles.j()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3;
    if (paragraphStyles.j()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_3 = null;
    } else {
      tmp_3 = paragraphStyles;
    }
    var tmp$ret$5 = tmp_3;
    AnnotatedString.call($this, text, tmp_2, tmp$ret$5, null);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.r6v_1 = item;
    this.s6v_1 = start;
    this.t6v_1 = end;
    this.u6v_1 = tag;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.s6v_1 <= this.t6v_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Range).lb = function () {
    return this.r6v_1;
  };
  protoOf(Range).mb = function () {
    return this.s6v_1;
  };
  protoOf(Range).tn = function () {
    return this.t6v_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + toString_0(this.r6v_1) + ', start=' + this.s6v_1 + ', end=' + this.t6v_1 + ', tag=' + this.u6v_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.r6v_1 == null ? 0 : hashCode(this.r6v_1);
    result = imul(result, 31) + this.s6v_1 | 0;
    result = imul(result, 31) + this.t6v_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.u6v_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.r6v_1, tmp0_other_with_cast.r6v_1))
      return false;
    if (!(this.s6v_1 === tmp0_other_with_cast.s6v_1))
      return false;
    if (!(this.t6v_1 === tmp0_other_with_cast.t6v_1))
      return false;
    if (!(this.u6v_1 === tmp0_other_with_cast.u6v_1))
      return false;
    return true;
  };
  function Builder(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    this.l6v_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m6v_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n6v_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.o6v_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.p6v_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).a = function () {
    return this.l6v_1.a();
  };
  protoOf(Builder).v6v = function (text) {
    this.l6v_1.v8(text);
  };
  protoOf(Builder).f = function (text) {
    if (text instanceof AnnotatedString) {
      this.q6v(text);
    } else {
      this.l6v_1.f(text);
    }
    return this;
  };
  protoOf(Builder).w8 = function (char) {
    this.l6v_1.w8(char);
    return this;
  };
  protoOf(Builder).q6v = function (text) {
    var start = this.l6v_1.a();
    this.l6v_1.v8(text.w6v_1);
    var tmp0_safe_receiver = text.x6v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.u(index);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.a6w(item.r6v_1, start + item.s6v_1 | 0, start + item.t6v_1 | 0);
        }
         while (inductionVariable <= last);
    }
    var tmp1_safe_receiver = text.y6v_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_safe_receiver.p() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_safe_receiver.u(index_0);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.b6w(item_0.r6v_1, start + item_0.s6v_1 | 0, start + item_0.t6v_1 | 0);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp2_safe_receiver = text.z6v_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp2_safe_receiver.p() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = tmp2_safe_receiver.u(index_1);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.o6v_1.e(new MutableRange(item_1.r6v_1, start + item_1.s6v_1 | 0, start + item_1.t6v_1 | 0, item_1.u6v_1));
        }
         while (inductionVariable_1 <= last_1);
    }
  };
  protoOf(Builder).a6w = function (style, start, end) {
    this.m6v_1.e(new MutableRange(style, start, end));
  };
  protoOf(Builder).b6w = function (style, start, end) {
    this.n6v_1.e(new MutableRange(style, start, end));
  };
  protoOf(Builder).c6w = function (tag, annotation, start, end) {
    this.o6v_1.e(new MutableRange(annotation, start, end, tag));
  };
  protoOf(Builder).d6w = function (style) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(style, this.l6v_1.a());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushStyle.<anonymous>' call
    this.p6v_1.e(this_0);
    this.m6v_1.e(this_0);
    return this.p6v_1.p() - 1 | 0;
  };
  protoOf(Builder).e6w = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.p6v_1.j()) {
      // Inline function 'androidx.compose.ui.text.Builder.pop.<anonymous>' call
      var message = 'Nothing to pop.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var item = this.p6v_1.x2(this.p6v_1.p() - 1 | 0);
    item.i6v_1 = this.l6v_1.a();
  };
  protoOf(Builder).f6w = function (index) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index < this.p6v_1.p())) {
      // Inline function 'androidx.compose.ui.text.Builder.pop.<anonymous>' call
      var message = '' + index + ' should be less than ' + this.p6v_1.p();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while ((this.p6v_1.p() - 1 | 0) >= index) {
      this.e6w();
    }
  };
  protoOf(Builder).g6w = function () {
    var tmp = this.l6v_1.toString();
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = this.m6v_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element = item.k6v(this.l6v_1.a());
        target.e(element);
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (target.j()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_0 = null;
    } else {
      tmp_0 = target;
    }
    var tmp_1 = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = this.n6v_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(this_1.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.u(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element_0 = item_0.k6v(this.l6v_1.a());
        target_0.e(element_0);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2;
    if (target_0.j()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_2 = null;
    } else {
      tmp_2 = target_0;
    }
    var tmp_3 = tmp_2;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_2 = this.o6v_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_1 = ArrayList_init_$Create$_0(this_2.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = this_2.p() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = this_2.u(index_1);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element_1 = item_1.k6v(this.l6v_1.a());
        target_1.e(element_1);
      }
       while (inductionVariable_1 <= last_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_4;
    if (target_1.j()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_4 = null;
    } else {
      tmp_4 = target_1;
    }
    var tmp$ret$11 = tmp_4;
    return new AnnotatedString(tmp, tmp_1, tmp_3, tmp$ret$11);
  };
  function Companion() {
    Companion_instance_0 = this;
    this.h6w_1 = get_AnnotatedStringSaver();
  }
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.i6w_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.i6w_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).x3 = function () {
    return this.i6w_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.s6v_1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp$ret$1 = b.s6v_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    Companion_getInstance_12();
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.w6v_1 = text;
    this.x6v_1 = spanStylesOrNull;
    this.y6v_1 = paragraphStylesOrNull;
    this.z6v_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.y6v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = AnnotatedString$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$0);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.u(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.s6v_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.t6v_1 <= this.w6v_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.s6v_1 + ', ' + item.t6v_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.t6v_1;
        }
         while (inductionVariable <= last);
    }
  }
  protoOf(AnnotatedString).j6w = function () {
    var tmp0_elvis_lhs = this.x6v_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).k6w = function () {
    var tmp0_elvis_lhs = this.y6v_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).a = function () {
    return this.w6v_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charSequenceGet(this.w6v_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 && endIndex === this.w6v_1.length)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.w6v_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.x6v_1, startIndex, endIndex), filterRanges(this.y6v_1, startIndex, endIndex), filterRanges(this.z6v_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).l6w = function (range) {
    return this.c(_TextRange___get_min__impl__uu95c4(range), _TextRange___get_max__impl__owm8m(range));
  };
  protoOf(AnnotatedString).m6w = function (other) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.plus.<anonymous>' call
    var $this$with = Builder_init_$Create$(this);
    $this$with.q6v(other);
    return $this$with.g6w();
  };
  protoOf(AnnotatedString).n6w = function (tag, start, end) {
    var tmp0_safe_receiver = this.z6v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.p());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.u(index);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.AnnotatedString.getStringAnnotations.<anonymous>' call
          var tmp_0;
          var tmp_1;
          var tmp_2 = item.r6v_1;
          if (typeof tmp_2 === 'string') {
            tmp_1 = tag === item.u6v_1;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp_0 = intersect(start, end, item.s6v_1, item.t6v_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.e(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_3 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    return isInterface(tmp_3, KtList) ? tmp_3 : THROW_CCE();
  };
  protoOf(AnnotatedString).o6w = function (tag, start, end) {
    var tmp0_safe_receiver = this.z6v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.p() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.u(index);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.AnnotatedString.hasStringAnnotations.<anonymous>' call
            var tmp_0;
            var tmp_1;
            var tmp_2 = item.r6v_1;
            if (typeof tmp_2 === 'string') {
              tmp_1 = tag === item.u6v_1;
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp_0 = intersect(start, end, item.s6v_1, item.t6v_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).p6w = function (start, end) {
    var tmp0_safe_receiver = this.z6v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.p());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.u(index);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.AnnotatedString.getLinkAnnotations.<anonymous>' call
          var tmp_0;
          var tmp_1 = item.r6v_1;
          if (tmp_1 instanceof LinkAnnotation) {
            tmp_0 = intersect(start, end, item.s6v_1, item.t6v_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.e(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    return isInterface(tmp_2, KtList) ? tmp_2 : THROW_CCE();
  };
  protoOf(AnnotatedString).q6w = function (start, end) {
    var tmp0_safe_receiver = this.z6v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.p() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.u(index);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.AnnotatedString.hasLinkAnnotations.<anonymous>' call
            var tmp_0;
            var tmp_1 = item.r6v_1;
            if (tmp_1 instanceof LinkAnnotation) {
              tmp_0 = intersect(start, end, item.s6v_1, item.t6v_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.w6v_1 === other.w6v_1))
      return false;
    if (!equals(this.x6v_1, other.x6v_1))
      return false;
    if (!equals(this.y6v_1, other.y6v_1))
      return false;
    if (!equals(this.z6v_1, other.z6v_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.w6v_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.x6v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.y6v_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.z6v_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.w6v_1;
  };
  protoOf(AnnotatedString).r6w = function (other) {
    return equals(this.z6v_1, other.z6v_1);
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      var message = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(nonNullRange.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.u(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.s6v_1, item.t6v_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.u(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = item_0.s6v_1;
        var tmp_0 = Math.max(start, b) - start | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = item_0.t6v_1;
        var tmp$ret$4 = Math.min(end, b_0);
        var element = new Range(item_0.r6v_1, tmp_0, tmp$ret$4 - start | 0, item_0.u6v_1);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    if (target_0.j()) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = target_0;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp_1 = Math.max(lStart, rStart);
    // Inline function 'kotlin.comparisons.minOf' call
    if (tmp_1 < Math.min(lEnd, rEnd)) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function getLocalSpanStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.x6v_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 && end >= _this__u8e3s4.w6v_1.length) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(spanStyles.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.u(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.s6v_1, item.t6v_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.u(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        var element = Range_init_$Create$(item_0.r6v_1, coerceIn(item_0.s6v_1, start, end) - start | 0, coerceIn(item_0.t6v_1, start, end) - start | 0);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return baseStart <= targetStart && targetEnd <= baseEnd && (!(baseEnd === targetEnd) || targetStart === targetEnd === (baseStart === baseEnd));
  }
  function emptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return get_EmptyAnnotatedString();
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.w6v_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.w6v_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.y6v_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.u(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.lb();
        var start = item.mb();
        var end = item.tn();
        if (!(start === lastOffset)) {
          result.e(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.e(Range_init_$Create$(defaultParagraphStyle.b6x(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.e(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.j()) {
      result.e(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
    }
  }
  function Url(url, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    linkInteractionListener = linkInteractionListener === VOID ? null : linkInteractionListener;
    LinkAnnotation.call(this);
    this.c6x_1 = url;
    this.d6x_1 = styles;
    this.e6x_1 = linkInteractionListener;
  }
  protoOf(Url).f6x = function () {
    return this.d6x_1;
  };
  protoOf(Url).g6x = function () {
    return this.e6x_1;
  };
  protoOf(Url).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Url))
      return false;
    if (!(this.c6x_1 === other.c6x_1))
      return false;
    if (!equals(this.d6x_1, other.d6x_1))
      return false;
    if (!equals(this.e6x_1, other.e6x_1))
      return false;
    return true;
  };
  protoOf(Url).hashCode = function () {
    var result = getStringHashCode(this.c6x_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.d6x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.e6x_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Url).toString = function () {
    return 'LinkAnnotation.Url(url=' + this.c6x_1 + ')';
  };
  function Clickable(tag, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    LinkAnnotation.call(this);
    this.h6x_1 = tag;
    this.i6x_1 = styles;
    this.j6x_1 = linkInteractionListener;
  }
  protoOf(Clickable).f6x = function () {
    return this.i6x_1;
  };
  protoOf(Clickable).g6x = function () {
    return this.j6x_1;
  };
  protoOf(Clickable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Clickable))
      return false;
    if (!(this.h6x_1 === other.h6x_1))
      return false;
    if (!equals(this.i6x_1, other.i6x_1))
      return false;
    if (!equals(this.j6x_1, other.j6x_1))
      return false;
    return true;
  };
  protoOf(Clickable).hashCode = function () {
    var result = getStringHashCode(this.h6x_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.i6x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.j6x_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Clickable).toString = function () {
    return 'LinkAnnotation.Clickable(tag=' + this.h6x_1 + ')';
  };
  function LinkAnnotation() {
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.p6x_1.k6x_1;
  }
  function requireIndexInRange($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__kqljtk($this).w6v_1) - 1 | 0) : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRange.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).w6v_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= lineIndex ? lineIndex < $this.u6x_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.u6x_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $path.h6f(paragraphInfo.g6y(paragraphInfo.x6x_1.f6y(paragraphInfo.e6y($start), paragraphInfo.e6y($end))));
      return Unit_instance;
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.p6x_1 = intrinsics;
    this.q6x_1 = maxLines;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      var message = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$();
    var infoList = this.p6x_1.o6x_1;
    var inductionVariable = 0;
    var last = infoList.p() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.u(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.h6y_1, Constraints(VOID, tmp, VOID, tmp_0), this.q6x_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.y5g();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.k6y() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.e(new ParagraphInfo(paragraph, paragraphInfo.i6y_1, paragraphInfo.j6y_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.l6y() || (endLineIndex === this.q6x_1 && !(index === get_lastIndex(this.p6x_1.o6x_1)))) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.t6x_1 = currentHeight;
    this.u6x_1 = currentLineCount;
    this.r6x_1 = didExceedMaxLines;
    this.w6x_1 = paragraphInfoList;
    this.s6x_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.u(index_0);
        // Inline function 'androidx.compose.ui.util.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.x6x_1.m6y();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$_0(this_0.p());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.p() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.u(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var element = item_0 == null ? null : item.n6y(item_0);
            target_0.e(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (target.p() < this.p6x_1.l6x_1.p()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.p6x_1.l6x_1.p() - target.p() | 0;
      var list_0 = ArrayList_init_$Create$_0(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          list_0.e(null);
        }
         while (inductionVariable_2 < size);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.v6x_1 = tmp_2;
  }
  protoOf(MultiParagraph).o6y = function () {
    var tmp;
    if (this.w6x_1.j()) {
      tmp = 0.0;
    } else {
      tmp = this.w6x_1.u(0).x6x_1.o6y();
    }
    return tmp;
  };
  protoOf(MultiParagraph).p6y = function () {
    var tmp;
    if (this.w6x_1.j()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      var $this$with = last(this.w6x_1);
      tmp = $this$with.q6y($this$with.x6x_1.p6y());
    }
    return tmp;
  };
  protoOf(MultiParagraph).r6y = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.n69();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.w6x_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.x6x_1.r6y(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.q69(0.0, item.x6x_1.y5g());
      }
       while (inductionVariable <= last);
    canvas.o69();
  };
  protoOf(MultiParagraph).s6y = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().l68_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.r6y(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.r6y.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).t6y = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).u6y = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h6e_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.t6y(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.t6y.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).f6y = function (start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= start ? start <= end : false) && end <= _get_annotatedString__kqljtk(this).w6v_1.length)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).w6v_1.length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_0(start, end);
    findParagraphsByRange(this.w6x_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).v6y = function (vertical) {
    var paragraphIndex = findParagraphByY(this.w6x_1, vertical);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.a6y_1;
    } else {
      tmp = $this$with.x6y($this$with.x6x_1.v6y($this$with.w6y(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).y6y = function (position) {
    var paragraphIndex = findParagraphByY(this.w6x_1, _Offset___get_y__impl__8bzhra(position));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.y6x_1;
    } else {
      tmp = $this$with.a6z($this$with.x6x_1.y6y($this$with.z6y(position)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).b6z = function (offset) {
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.w6x_1, offset);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBoundingBox.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.n6y($this$with.x6x_1.b6z($this$with.e6y(offset)));
  };
  protoOf(MultiParagraph).c6z = function (offset, usePrimaryDirection) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.w6x_1);
    } else {
      tmp = findParagraphByIndex(this.w6x_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getHorizontalPosition.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.x6x_1.c6z($this$with.e6y(offset), usePrimaryDirection);
  };
  protoOf(MultiParagraph).d6z = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.w6x_1);
    } else {
      tmp = findParagraphByIndex(this.w6x_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.x6x_1.d6z($this$with.e6y(offset));
  };
  protoOf(MultiParagraph).e6z = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.w6x_1);
    } else {
      tmp = findParagraphByIndex(this.w6x_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.x6x_1.e6z($this$with.e6y(offset));
  };
  protoOf(MultiParagraph).f6z = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.w6x_1);
    } else {
      tmp = findParagraphByIndex(this.w6x_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.g6z($this$with.x6x_1.f6z($this$with.e6y(offset)), false);
  };
  protoOf(MultiParagraph).i6z = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.w6x_1);
    } else {
      tmp = findParagraphByIndex(this.w6x_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getCursorRect.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.n6y($this$with.x6x_1.i6z($this$with.e6y(offset)));
  };
  protoOf(MultiParagraph).j6z = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.w6x_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.w6x_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.x6y($this$with.x6x_1.j6z($this$with.e6y(offset)));
  };
  protoOf(MultiParagraph).k6z = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.w6x_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineLeft.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.x6x_1.k6z($this$with.l6z(lineIndex));
  };
  protoOf(MultiParagraph).m6z = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.w6x_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineRight.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.x6x_1.m6z($this$with.l6z(lineIndex));
  };
  protoOf(MultiParagraph).n6z = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.w6x_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.q6y($this$with.x6x_1.n6z($this$with.l6z(lineIndex)));
  };
  protoOf(MultiParagraph).o6z = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.w6x_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineBottom.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.q6y($this$with.x6x_1.o6z($this$with.l6z(lineIndex)));
  };
  protoOf(MultiParagraph).p6z = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.w6x_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineHeight.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.x6x_1.p6z($this$with.l6z(lineIndex));
  };
  protoOf(MultiParagraph).q6z = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.w6x_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.a6z($this$with.x6x_1.q6z($this$with.l6z(lineIndex)));
  };
  protoOf(MultiParagraph).r6z = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.w6x_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    var $this$with = this.w6x_1.u(paragraphIndex);
    return $this$with.a6z($this$with.x6x_1.r6z($this$with.l6z(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.x6x_1 = paragraph;
    this.y6x_1 = startIndex;
    this.z6x_1 = endIndex;
    this.a6y_1 = startLineIndex;
    this.b6y_1 = endLineIndex;
    this.c6y_1 = top;
    this.d6y_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.z6x_1 - this.y6x_1 | 0;
  };
  protoOf(ParagraphInfo).e6y = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.y6x_1, this.z6x_1) - this.y6x_1 | 0;
  };
  protoOf(ParagraphInfo).a6z = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.y6x_1 | 0;
  };
  protoOf(ParagraphInfo).l6z = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.a6y_1 | 0;
  };
  protoOf(ParagraphInfo).x6y = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.a6y_1 | 0;
  };
  protoOf(ParagraphInfo).q6y = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.c6y_1;
  };
  protoOf(ParagraphInfo).w6y = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.c6y_1;
  };
  protoOf(ParagraphInfo).z6y = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.c6y_1);
  };
  protoOf(ParagraphInfo).n6y = function (_this__u8e3s4) {
    return _this__u8e3s4.a5h(Offset(0.0, this.c6y_1));
  };
  protoOf(ParagraphInfo).g6y = function (_this__u8e3s4) {
    _this__u8e3s4.j6f(Offset(0.0, this.c6y_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).g6z = function (_this__u8e3s4, treatZeroAsNull) {
    if (treatZeroAsNull && equals(_this__u8e3s4, Companion_getInstance_14().s6z_1)) {
      return Companion_getInstance_14().s6z_1;
    }
    return TextRange_0(this.a6z(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.a6z(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + toString(this.x6x_1) + ', startIndex=' + this.y6x_1 + ', endIndex=' + this.z6x_1 + ', startLineIndex=' + this.a6y_1 + ', endLineIndex=' + this.b6y_1 + ', top=' + this.c6y_1 + ', bottom=' + this.d6y_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.x6x_1);
    result = imul(result, 31) + this.y6x_1 | 0;
    result = imul(result, 31) + this.z6x_1 | 0;
    result = imul(result, 31) + this.a6y_1 | 0;
    result = imul(result, 31) + this.b6y_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.c6y_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d6y_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.x6x_1, tmp0_other_with_cast.x6x_1))
      return false;
    if (!(this.y6x_1 === tmp0_other_with_cast.y6x_1))
      return false;
    if (!(this.z6x_1 === tmp0_other_with_cast.z6x_1))
      return false;
    if (!(this.a6y_1 === tmp0_other_with_cast.a6y_1))
      return false;
    if (!(this.b6y_1 === tmp0_other_with_cast.b6y_1))
      return false;
    if (!equals(this.c6y_1, tmp0_other_with_cast.c6y_1))
      return false;
    if (!equals(this.d6y_1, tmp0_other_with_cast.d6y_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.p();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.u(i);
        if (paragraph.y6x_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.y6x_1 === paragraph.z6x_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    if (y <= 0)
      return 0;
    if (y >= last(paragraphInfoList).d6y_1)
      return get_lastIndex(paragraphInfoList);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.p() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.u(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.c6y_1 > y ? 1 : midVal.d6y_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.p() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.u(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.y6x_1 > index ? 1 : midVal.z6x_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.p() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.u(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.a6y_1 > lineIndex ? 1 : midVal.b6y_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function resolveTextDirection($this, style, defaultStyle) {
    return !(style.t6w_1 === Companion_getInstance_41().z6z_1) ? style : style.t6z(VOID, defaultStyle.t6w_1);
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.o6x_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.j()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.u(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.h6y_1.n5z();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.u(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.h6y_1.n5z();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h6y_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n5z();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.o6x_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.j()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.u(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.h6y_1.o5z();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.u(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.h6y_1.o5z();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h6y_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o5z();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.k6x_1 = annotatedString;
    this.l6x_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.m6x_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.n6x_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.d70();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.k6x_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_1.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.u(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(this_0, item.s6v_1, item.t6v_1);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.r6v_1, paragraphStyle);
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.w6v_1, style.e70(currentParagraphStyle), annotatedString_0.j6w(), getLocalPlaceholders(this.l6x_1, item.s6v_1, item.t6v_1), density, fontFamilyResolver), item.s6v_1, item.t6v_1);
        target.e(element);
      }
       while (inductionVariable <= last);
    tmp_3.o6x_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).n5z = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.m6x_1;
    minIntrinsicWidth$factory();
    return this_0.c1();
  };
  protoOf(MultiParagraphIntrinsics).o5z = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.n6x_1;
    maxIntrinsicWidth$factory();
    return this_0.c1();
  };
  protoOf(MultiParagraphIntrinsics).f70 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.o6x_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.u(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.h6y_1.f70()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.h6y_1 = intrinsics;
    this.i6y_1 = startIndex;
    this.j6y_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + toString(this.h6y_1) + ', startIndex=' + this.i6y_1 + ', endIndex=' + this.j6y_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.h6y_1);
    result = imul(result, 31) + this.i6y_1 | 0;
    result = imul(result, 31) + this.j6y_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.h6y_1, tmp0_other_with_cast.h6y_1))
      return false;
    if (!(this.i6y_1 === tmp0_other_with_cast.i6y_1))
      return false;
    if (!(this.j6y_1 === tmp0_other_with_cast.j6y_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.u(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.s6v_1, item.t6v_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.u(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(start <= item_0.s6v_1 && item_0.t6v_1 <= end)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var element = Range_init_$Create$(item_0.r6v_1, item_0.s6v_1 - start | 0, item_0.t6v_1 - start | 0);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.n5z();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.o5z();
    }, null);
  }
  function ceilToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph_0(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, ellipsis) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? Companion_getInstance_39().m70_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_41().z6z_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q5j_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_51().q70_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_35().t70_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.s6w_1 = textAlign;
    this.t6w_1 = textDirection;
    this.u6w_1 = lineHeight;
    this.v6w_1 = textIndent;
    this.w6w_1 = platformStyle;
    this.x6w_1 = lineHeightStyle;
    this.y6w_1 = lineBreak;
    this.z6w_1 = hyphens;
    this.a6x_1 = textMotion;
    if (!equals(this.u6w_1, Companion_getInstance_1().q5j_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.u6w_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.u6w_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(ParagraphStyle_0).b6x = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.s6w_1, other.t6w_1, other.u6w_1, other.v6w_1, other.w6w_1, other.x6w_1, other.y6w_1, other.z6w_1, other.a6x_1);
  };
  protoOf(ParagraphStyle_0).u70 = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).t6z = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.s6w_1 : textAlign;
    textDirection = textDirection === VOID ? this.t6w_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.u6w_1 : lineHeight;
    textIndent = textIndent === VOID ? this.v6w_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.w6w_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.x6w_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.y6w_1 : lineBreak;
    hyphens = hyphens === VOID ? this.z6w_1 : hyphens;
    textMotion = textMotion === VOID ? this.a6x_1 : textMotion;
    return $super === VOID ? this.u70(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.u70.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.s6w_1 === other.s6w_1))
      return false;
    if (!(this.t6w_1 === other.t6w_1))
      return false;
    if (!equals(this.u6w_1, other.u6w_1))
      return false;
    if (!equals(this.v6w_1, other.v6w_1))
      return false;
    if (!equals(this.w6w_1, other.w6w_1))
      return false;
    if (!equals(this.x6w_1, other.x6w_1))
      return false;
    if (!(this.y6w_1 === other.y6w_1))
      return false;
    if (!(this.z6w_1 === other.z6w_1))
      return false;
    if (!equals(this.a6x_1, other.a6x_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.s6w_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.t6w_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.u6w_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.v6w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.w6w_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.x6w_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.y6w_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.z6w_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.a6x_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ParagraphStyle.toString.<anonymous>' call
    this_0.v8('ParagraphStyle(');
    this_0.v8('textAlign=' + TextAlign__toString_impl_6ha6d3(this.s6w_1) + ', ');
    this_0.v8('textDirection=' + TextDirection__toString_impl_x3uh9t(this.t6w_1) + ', ');
    this_0.v8('lineHeight=' + TextUnit__toString_impl_51ghw0(this.u6w_1) + ', ');
    this_0.v8('textIndent=' + toString_0(this.v6w_1) + ', ');
    this_0.v8('platformStyle=' + toString_0(this.w6w_1) + ', ');
    this_0.v8('lineHeightStyle=' + toString_0(this.x6w_1) + ', ');
    this_0.v8('lineBreak=' + LineBreak__toString_impl_mphhli(this.y6w_1) + ', ');
    this_0.v8('hyphens=' + Hyphens__toString_impl_ck1wg0(this.z6w_1) + ', ');
    this_0.v8('textMotion=' + toString_0(this.a6x_1));
    this_0.v8(')');
    return this_0.toString();
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (!(textAlign === Companion_getInstance_39().m70_1) && !(textAlign === _this__u8e3s4.s6w_1)) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(lineHeight)) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.u6w_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = (!(textIndent == null) && !equals(textIndent, _this__u8e3s4.v6w_1));
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textDirection === Companion_getInstance_41().z6z_1) && !(textDirection === _this__u8e3s4.t6w_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.w6w_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = (!(lineHeightStyle == null) && !equals(lineHeightStyle, _this__u8e3s4.x6w_1));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(lineBreak === Companion_getInstance_51().q70_1) && !(lineBreak === _this__u8e3s4.y6w_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(hyphens === Companion_getInstance_35().t70_1) && !(hyphens === _this__u8e3s4.z6w_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(textMotion == null) && !equals(textMotion, _this__u8e3s4.a6x_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    if (get_isUnspecified(lineHeight)) {
      tmp_8 = _this__u8e3s4.u6w_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.v6w_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_39().m70_1) ? textAlign : _this__u8e3s4.s6w_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_41().z6z_1) ? textDirection : _this__u8e3s4.t6w_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.x6w_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_51().q70_1) ? lineBreak : _this__u8e3s4.y6w_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_35().t70_1) ? hyphens : _this__u8e3s4.z6w_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.a6x_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.w6w_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.w6w_1;
    return _this__u8e3s4.w6w_1.w70(other);
  }
  function lerp_4(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = lerpDiscrete(new TextAlign(start.s6w_1), new TextAlign(stop.s6w_1), fraction);
    var tmp_0 = lerpDiscrete(new TextDirection(start.t6w_1), new TextDirection(stop.t6w_1), fraction);
    var tmp_1 = lerpTextUnitInheritable(start.u6w_1, stop.u6w_1, fraction);
    var tmp0_elvis_lhs = start.v6w_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_44().x70_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.v6w_1;
    return new ParagraphStyle_0(tmp.y70_1, tmp_0.z70_1, tmp_1, lerp_11(tmp_2, tmp1_elvis_lhs == null ? Companion_getInstance_44().x70_1 : tmp1_elvis_lhs, fraction), lerpPlatformStyle(start.w6w_1, stop.w6w_1, fraction), lerpDiscrete(start.x6w_1, stop.x6w_1, fraction), lerpDiscrete(new LineBreak(start.y6w_1), new LineBreak(stop.y6w_1), fraction).a71_1, lerpDiscrete(new Hyphens(start.z6w_1), new Hyphens(stop.z6w_1), fraction).b71_1, lerpDiscrete(start.a6x_1, stop.a6x_1, fraction));
  }
  function lerpPlatformStyle(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (start == null && stop == null)
      return null;
    var startNonNull = start == null ? Companion_getInstance_49().c71_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_49().c71_1 : stop;
    return lerp_13(startNonNull, stopNonNull, fraction);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.s6w_1 === Companion_getInstance_39().m70_1 ? Companion_getInstance_39().k70_1 : style.s6w_1;
    var tmp_0 = resolveTextDirection_0(direction, style.t6w_1);
    var tmp_1 = get_isUnspecified(style.u6w_1) ? get_DefaultLineHeight() : style.u6w_1;
    var tmp0_elvis_lhs = style.v6w_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_44().x70_1 : tmp0_elvis_lhs;
    var tmp_3 = style.y6w_1 === Companion_getInstance_51().q70_1 ? Companion_getInstance_51().n70_1 : style.y6w_1;
    var tmp_4 = style.z6w_1 === Companion_getInstance_35().t70_1 ? Companion_getInstance_35().r70_1 : style.z6w_1;
    var tmp1_elvis_lhs = style.a6x_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_1, tmp_2, style.w6w_1, style.x6w_1, tmp_3, tmp_4, tmp1_elvis_lhs == null ? Companion_getInstance_52().d71_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().q5j_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.f71_1, other.f71_1))
      return false;
    if (!equals(this.g71_1, other.g71_1))
      return false;
    if (!(this.h71_1 === other.h71_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.f71_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g71_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.h71_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + TextUnit__toString_impl_51ghw0(this.f71_1) + ', ') + ('height=' + TextUnit__toString_impl_51ghw0(this.g71_1) + ', ') + ('placeholderVerticalAlign=' + PlaceholderVerticalAlign__toString_impl_kf5crp(this.h71_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_13().i71_1 ? 'AboveBaseline' : $this === Companion_getInstance_13().j71_1 ? 'Top' : $this === Companion_getInstance_13().k71_1 ? 'Bottom' : $this === Companion_getInstance_13().l71_1 ? 'Center' : $this === Companion_getInstance_13().m71_1 ? 'TextTop' : $this === Companion_getInstance_13().n71_1 ? 'TextBottom' : $this === Companion_getInstance_13().o71_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.i71_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.j71_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.k71_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.l71_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.m71_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.n71_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.o71_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance_1;
  function Companion_getInstance_13() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_AnnotatedStringSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_LinkSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LinkSaver;
  }
  var LinkSaver;
  function get_ClickableSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ClickableSaver;
  }
  var ClickableSaver;
  function get_ParagraphStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextLinkStylesSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextLinkStylesSaver;
  }
  var TextLinkStylesSaver;
  function get_TextDecorationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  function get_TextRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextRangeSaver;
  }
  var TextRangeSaver;
  function get_ShadowSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextUnitSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_OffsetSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleSaver;
  }
  var LocaleSaver;
  function save(value) {
    _init_properties_Savers_kt__o6r3ry();
    return value;
  }
  function save_0(value, saver, scope) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>.<anonymous>' call
      tmp = saver.f5f(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_Link_instance;
  var AnnotationType_Clickable_instance;
  var AnnotationType_String_instance;
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_instance;
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_Link_instance = new AnnotationType('Link', 4);
    AnnotationType_Clickable_instance = new AnnotationType('Clickable', 5);
    AnnotationType_String_instance = new AnnotationType('String', 6);
  }
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_Saver(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextIndentSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ColorSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontWeightSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_BaselineShiftSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleListSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDecorationSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ShadowSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_OffsetSaver();
  }
  function NonNullValueClassSaver() {
  }
  function NonNullValueClassSaver_0(save, restore) {
    _init_properties_Savers_kt__o6r3ry();
    return new NonNullValueClassSaver$1(save, restore);
  }
  function get_Saver_9(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleSaver();
  }
  function get_Saver_10(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextRangeSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.w6v_1), save_0(it.j6w(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.k6w(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.z6v_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(1);
      var saver = get_AnnotationRangeListSaver();
      var tmp;
      if (equals(value, false)) {
        tmp = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (value == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = saver.v5e(value);
        tmp_0 = (tmp_1 == null ? true : isInterface(tmp_1, KtList)) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var spanStylesOrNull = tmp$ret$0;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.u(2);
      var saver_0 = get_AnnotationRangeListSaver();
      var tmp_2;
      if (equals(value_0, false)) {
        tmp_2 = !isInterface(saver_0, NonNullValueClassSaver);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_3;
      if (value_0 == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_4 = saver_0.v5e(value_0);
        tmp_3 = (tmp_4 == null ? true : isInterface(tmp_4, KtList)) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var paragraphStylesOrNull = tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(0);
    var tmp_5;
    if (tmp0_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_5 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_5;
    var tmp_6 = ensureNotNull(tmp$ret$12);
    var tmp_7;
    if (spanStylesOrNull == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_8;
      if (spanStylesOrNull.j()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_8 = null;
      } else {
        tmp_8 = spanStylesOrNull;
      }
      tmp_7 = tmp_8;
    }
    var tmp_9 = tmp_7;
    var tmp_10;
    if (paragraphStylesOrNull == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_11;
      if (paragraphStylesOrNull.j()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_11 = null;
      } else {
        tmp_11 = paragraphStylesOrNull;
      }
      tmp_10 = tmp_11;
    }
    var tmp_12 = tmp_10;
    var tmp$ret$17;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_1 = list.u(3);
      var saver_1 = get_AnnotationRangeListSaver();
      var tmp_13;
      if (equals(value_1, false)) {
        tmp_13 = !isInterface(saver_1, NonNullValueClassSaver);
      } else {
        tmp_13 = false;
      }
      if (tmp_13) {
        tmp$ret$17 = null;
        break $l$block_1;
      }
      var tmp_14;
      if (value_1 == null) {
        tmp_14 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_15 = saver_1.v5e(value_1);
        tmp_14 = (tmp_15 == null ? true : isInterface(tmp_15, KtList)) ? tmp_15 : THROW_CCE();
      }
      tmp$ret$17 = tmp_14;
    }
    return new AnnotatedString(tmp_6, tmp_9, tmp_12, tmp$ret$17);
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(it.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = it.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.u(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.e(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.u(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var saver = get_AnnotationRangeSaver();
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(saver, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_1 = saver.v5e(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Range) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        var range = ensureNotNull(tmp$ret$0);
        target.e(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.r6v_1;
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            if (tmp0_subject instanceof Url) {
              tmp = AnnotationType_Link_getInstance();
            } else {
              if (tmp0_subject instanceof Clickable) {
                tmp = AnnotationType_Clickable_getInstance();
              } else {
                tmp = AnnotationType_String_getInstance();
              }
            }
          }
        }
      }
    }
    var marker = tmp;
    var tmp_0;
    switch (marker.z2_1) {
      case 0:
        var tmp_1 = it.r6v_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.r6v_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.r6v_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.r6v_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        var tmp_5 = it.r6v_1;
        tmp_0 = save_0(tmp_5 instanceof Url ? tmp_5 : THROW_CCE(), get_LinkSaver(), $this$Saver);
        break;
      case 5:
        var tmp_6 = it.r6v_1;
        tmp_0 = save_0(tmp_6 instanceof Clickable ? tmp_6 : THROW_CCE(), get_ClickableSaver(), $this$Saver);
        break;
      case 6:
        tmp_0 = save(it.r6v_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.s6v_1), save(it.t6v_1), save(it.u6v_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = tmp0_safe_receiver instanceof AnnotationType ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var marker = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.u(2);
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_0 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_0;
    var start = ensureNotNull(tmp$ret$5);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.u(3);
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = typeof tmp0_safe_receiver_1 === 'number' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp$ret$8 = tmp_1;
    var end = ensureNotNull(tmp$ret$8);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_2 = list.u(4);
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_2 = typeof tmp0_safe_receiver_2 === 'string' ? tmp0_safe_receiver_2 : THROW_CCE();
    }
    var tmp$ret$11 = tmp_2;
    var tag = ensureNotNull(tmp$ret$11);
    var tmp_3;
    switch (marker.z2_1) {
      case 0:
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value = list.u(1);
          var saver = get_ParagraphStyleSaver();
          var tmp_4;
          if (equals(value, false)) {
            tmp_4 = !isInterface(saver, NonNullValueClassSaver);
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp_5;
          if (value == null) {
            tmp_5 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_6 = saver.v5e(value);
            tmp_5 = (tmp_6 == null ? true : tmp_6 instanceof ParagraphStyle_0) ? tmp_6 : THROW_CCE();
          }
          tmp$ret$12 = tmp_5;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_0 = list.u(1);
          var saver_0 = get_SpanStyleSaver();
          var tmp_7;
          if (equals(value_0, false)) {
            tmp_7 = !isInterface(saver_0, NonNullValueClassSaver);
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp_8;
          if (value_0 == null) {
            tmp_8 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_9 = saver_0.v5e(value_0);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof SpanStyle) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$17 = tmp_8;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_1 = list.u(1);
          var saver_1 = get_VerbatimTtsAnnotationSaver();
          var tmp_10;
          if (equals(value_1, false)) {
            tmp_10 = !isInterface(saver_1, NonNullValueClassSaver);
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp_11;
          if (value_1 == null) {
            tmp_11 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_12 = saver_1.v5e(value_1);
            tmp_11 = (tmp_12 == null ? true : tmp_12 instanceof VerbatimTtsAnnotation) ? tmp_12 : THROW_CCE();
          }
          tmp$ret$22 = tmp_11;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_2 = list.u(1);
          var saver_2 = get_UrlAnnotationSaver();
          var tmp_13;
          if (equals(value_2, false)) {
            tmp_13 = !isInterface(saver_2, NonNullValueClassSaver);
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp_14;
          if (value_2 == null) {
            tmp_14 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_15 = saver_2.v5e(value_2);
            tmp_14 = (tmp_15 == null ? true : tmp_15 instanceof UrlAnnotation) ? tmp_15 : THROW_CCE();
          }
          tmp$ret$27 = tmp_14;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp$ret$32;
        $l$block_3: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_3 = list.u(1);
          var saver_3 = get_LinkSaver();
          var tmp_16;
          if (equals(value_3, false)) {
            tmp_16 = !isInterface(saver_3, NonNullValueClassSaver);
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp$ret$32 = null;
            break $l$block_3;
          }
          var tmp_17;
          if (value_3 == null) {
            tmp_17 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_18 = saver_3.v5e(value_3);
            tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof Url) ? tmp_18 : THROW_CCE();
          }
          tmp$ret$32 = tmp_17;
        }

        var item_3 = ensureNotNull(tmp$ret$32);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      case 5:
        var tmp$ret$37;
        $l$block_4: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_4 = list.u(1);
          var saver_4 = get_ClickableSaver();
          var tmp_19;
          if (equals(value_4, false)) {
            tmp_19 = !isInterface(saver_4, NonNullValueClassSaver);
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp$ret$37 = null;
            break $l$block_4;
          }
          var tmp_20;
          if (value_4 == null) {
            tmp_20 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_21 = saver_4.v5e(value_4);
            tmp_20 = (tmp_21 == null ? true : tmp_21 instanceof Clickable) ? tmp_21 : THROW_CCE();
          }
          tmp$ret$37 = tmp_20;
        }

        var item_4 = ensureNotNull(tmp$ret$37);
        tmp_3 = new Range(item_4, start, end, tag);
        break;
      case 6:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.u(1);
        var tmp_22;
        if (tmp0_safe_receiver_3 == null) {
          tmp_22 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
          tmp_22 = typeof tmp0_safe_receiver_3 === 'string' ? tmp0_safe_receiver_3 : THROW_CCE();
        }

        var tmp$ret$44 = tmp_22;
        var item_5 = ensureNotNull(tmp$ret$44);
        tmp_3 = new Range(item_5, start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.p71_1);
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$2));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.q71_1);
  }
  function UrlAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$2));
  }
  function LinkSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.c6x_1), save_0(it.d6x_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function LinkSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var url = ensureNotNull(tmp$ret$2);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(1);
      var saver = get_TextLinkStylesSaver();
      var tmp_0;
      if (equals(value, false)) {
        tmp_0 = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (value == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_2 = saver.v5e(value);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Url(url, stylesOrNull);
  }
  function ClickableSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.h6x_1), save_0(it.i6x_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function ClickableSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tag = ensureNotNull(tmp$ret$2);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(1);
      var saver = get_TextLinkStylesSaver();
      var tmp_0;
      if (equals(value, false)) {
        tmp_0 = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (value == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_2 = saver.v5e(value);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Clickable(tag, stylesOrNull, null);
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(new TextAlign(it.s6w_1)), save(new TextDirection(it.t6w_1)), save_0(new TextUnit(it.u6w_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(it.v6w_1, get_Saver_0(Companion_getInstance_44()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_0 = tmp0_safe_receiver instanceof TextAlign ? tmp0_safe_receiver.y70_1 : THROW_CCE();
      var tmp_1 = tmp_0 == null ? null : new TextAlign(tmp_0);
      tmp = tmp_1 == null ? null : tmp_1.y70_1;
    }
    var tmp_2 = tmp;
    var tmp_3 = ensureNotNull(tmp_2 == null ? null : new TextAlign(tmp_2));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.u(1);
    var tmp_4;
    if (tmp0_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_5 = tmp0_safe_receiver_0 instanceof TextDirection ? tmp0_safe_receiver_0.z70_1 : THROW_CCE();
      var tmp_6 = tmp_5 == null ? null : new TextDirection(tmp_5);
      tmp_4 = tmp_6 == null ? null : tmp_6.z70_1;
    }
    var tmp_7 = tmp_4;
    var tmp_8 = ensureNotNull(tmp_7 == null ? null : new TextDirection(tmp_7));
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(2);
      var saver = get_Saver(Companion_getInstance_1());
      var tmp_9;
      if (equals(value, false)) {
        tmp_9 = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp_9 = false;
      }
      if (tmp_9) {
        tmp$ret$6 = null;
        break $l$block;
      }
      var tmp_10;
      if (value == null) {
        tmp_10 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_11 = saver.v5e(value);
        var tmp_12;
        if (tmp_11 == null ? true : tmp_11 instanceof TextUnit) {
          var tmp_13 = tmp_11;
          tmp_12 = tmp_13 == null ? null : tmp_13.s5j_1;
        } else {
          tmp_12 = THROW_CCE();
        }
        var tmp_14 = tmp_12;
        var tmp_15 = tmp_14 == null ? null : new TextUnit(tmp_14);
        tmp_10 = tmp_15 == null ? null : tmp_15.s5j_1;
      }
      tmp$ret$6 = tmp_10;
    }
    var tmp_16 = tmp$ret$6;
    var tmp_17 = ensureNotNull(tmp_16 == null ? null : new TextUnit(tmp_16));
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.u(3);
      var saver_0 = get_Saver_0(Companion_getInstance_44());
      var tmp_18;
      if (equals(value_0, false)) {
        tmp_18 = !isInterface(saver_0, NonNullValueClassSaver);
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp$ret$11 = null;
        break $l$block_0;
      }
      var tmp_19;
      if (value_0 == null) {
        tmp_19 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_20 = saver_0.v5e(value_0);
        tmp_19 = (tmp_20 == null ? true : tmp_20 instanceof TextIndent_0) ? tmp_20 : THROW_CCE();
      }
      tmp$ret$11 = tmp_19;
    }
    return new ParagraphStyle_0(tmp_3.y70_1, tmp_8.z70_1, tmp_17.s5j_1, tmp$ret$11);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.n68()), get_Saver_1(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.s71_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.t71_1, get_Saver_2(Companion_getInstance_22()), $this$Saver);
    var tmp_2 = it.u71_1;
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.v71_1;
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.x71_1);
    var tmp_8 = save_0(new TextUnit(it.y71_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.z71_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_3(Companion_getInstance_34()), $this$Saver), save_0(it.a72_1, get_Saver_4(Companion_getInstance_43()), $this$Saver), save_0(it.b72_1, get_Saver_5(Companion_getInstance_33()), $this$Saver), save_0(new Color(it.c72_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(it.d72_1, get_Saver_6(Companion_getInstance_40()), $this$Saver), save_0(it.e72_1, get_Saver_7(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(0);
      var saver = get_Saver_1(Companion_getInstance());
      var tmp;
      if (equals(value, false)) {
        tmp = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (value == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = saver.v5e(value);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.p6b_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.p6b_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.u(1);
      var saver_0 = get_Saver(Companion_getInstance_1());
      var tmp_8;
      if (equals(value_0, false)) {
        tmp_8 = !isInterface(saver_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (value_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = saver_0.v5e(value_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.s5j_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.s5j_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_1 = list.u(2);
      var saver_1 = get_Saver_2(Companion_getInstance_22());
      var tmp_17;
      if (equals(value_1, false)) {
        tmp_17 = !isInterface(saver_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (value_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_19 = saver_1.v5e(value_1);
        tmp_18 = (tmp_19 == null ? true : tmp_19 instanceof FontWeight) ? tmp_19 : THROW_CCE();
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_20 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(3);
    var tmp_21;
    if (tmp0_safe_receiver == null) {
      tmp_21 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_22 = tmp0_safe_receiver instanceof FontStyle ? tmp0_safe_receiver.h72_1 : THROW_CCE();
      var tmp_23 = tmp_22 == null ? null : new FontStyle(tmp_22);
      tmp_21 = tmp_23 == null ? null : tmp_23.h72_1;
    }
    var tmp_24 = tmp_21;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.u(4);
    var tmp_25;
    if (tmp0_safe_receiver_0 == null) {
      tmp_25 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_26 = tmp0_safe_receiver_0 instanceof FontSynthesis ? tmp0_safe_receiver_0.i72_1 : THROW_CCE();
      var tmp_27 = tmp_26 == null ? null : new FontSynthesis(tmp_26);
      tmp_25 = tmp_27 == null ? null : tmp_27.i72_1;
    }
    var tmp_28 = tmp_25;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.u(6);
    var tmp_29;
    if (tmp0_safe_receiver_1 == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_29 = typeof tmp0_safe_receiver_1 === 'string' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp_30 = tmp_29;
    var tmp$ret$24;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_2 = list.u(7);
      var saver_2 = get_Saver(Companion_getInstance_1());
      var tmp_31;
      if (equals(value_2, false)) {
        tmp_31 = !isInterface(saver_2, NonNullValueClassSaver);
      } else {
        tmp_31 = false;
      }
      if (tmp_31) {
        tmp$ret$24 = null;
        break $l$block_2;
      }
      var tmp_32;
      if (value_2 == null) {
        tmp_32 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_33 = saver_2.v5e(value_2);
        var tmp_34;
        if (tmp_33 == null ? true : tmp_33 instanceof TextUnit) {
          var tmp_35 = tmp_33;
          tmp_34 = tmp_35 == null ? null : tmp_35.s5j_1;
        } else {
          tmp_34 = THROW_CCE();
        }
        var tmp_36 = tmp_34;
        var tmp_37 = tmp_36 == null ? null : new TextUnit(tmp_36);
        tmp_32 = tmp_37 == null ? null : tmp_37.s5j_1;
      }
      tmp$ret$24 = tmp_32;
    }
    var tmp_38 = tmp$ret$24;
    var tmp_39 = ensureNotNull(tmp_38 == null ? null : new TextUnit(tmp_38));
    var tmp$ret$29;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_3 = list.u(8);
      var saver_3 = get_Saver_3(Companion_getInstance_34());
      var tmp_40;
      if (equals(value_3, false)) {
        tmp_40 = !isInterface(saver_3, NonNullValueClassSaver);
      } else {
        tmp_40 = false;
      }
      if (tmp_40) {
        tmp$ret$29 = null;
        break $l$block_3;
      }
      var tmp_41;
      if (value_3 == null) {
        tmp_41 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_42 = saver_3.v5e(value_3);
        var tmp_43;
        if (tmp_42 == null ? true : tmp_42 instanceof BaselineShift) {
          var tmp_44 = tmp_42;
          tmp_43 = tmp_44 == null ? null : tmp_44.j72_1;
        } else {
          tmp_43 = THROW_CCE();
        }
        var tmp_45 = tmp_43;
        var tmp_46 = tmp_45 == null ? null : new BaselineShift(tmp_45);
        tmp_41 = tmp_46 == null ? null : tmp_46.j72_1;
      }
      tmp$ret$29 = tmp_41;
    }
    var tmp_47 = tmp$ret$29;
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_4 = list.u(9);
      var saver_4 = get_Saver_4(Companion_getInstance_43());
      var tmp_48;
      if (equals(value_4, false)) {
        tmp_48 = !isInterface(saver_4, NonNullValueClassSaver);
      } else {
        tmp_48 = false;
      }
      if (tmp_48) {
        tmp$ret$34 = null;
        break $l$block_4;
      }
      var tmp_49;
      if (value_4 == null) {
        tmp_49 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_50 = saver_4.v5e(value_4);
        tmp_49 = (tmp_50 == null ? true : tmp_50 instanceof TextGeometricTransform) ? tmp_50 : THROW_CCE();
      }
      tmp$ret$34 = tmp_49;
    }
    var tmp_51 = tmp$ret$34;
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_5 = list.u(10);
      var saver_5 = get_Saver_5(Companion_getInstance_33());
      var tmp_52;
      if (equals(value_5, false)) {
        tmp_52 = !isInterface(saver_5, NonNullValueClassSaver);
      } else {
        tmp_52 = false;
      }
      if (tmp_52) {
        tmp$ret$39 = null;
        break $l$block_5;
      }
      var tmp_53;
      if (value_5 == null) {
        tmp_53 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_54 = saver_5.v5e(value_5);
        tmp_53 = (tmp_54 == null ? true : tmp_54 instanceof LocaleList) ? tmp_54 : THROW_CCE();
      }
      tmp$ret$39 = tmp_53;
    }
    var tmp_55 = tmp$ret$39;
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_6 = list.u(11);
      var saver_6 = get_Saver_1(Companion_getInstance());
      var tmp_56;
      if (equals(value_6, false)) {
        tmp_56 = !isInterface(saver_6, NonNullValueClassSaver);
      } else {
        tmp_56 = false;
      }
      if (tmp_56) {
        tmp$ret$44 = null;
        break $l$block_6;
      }
      var tmp_57;
      if (value_6 == null) {
        tmp_57 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_58 = saver_6.v5e(value_6);
        var tmp_59;
        if (tmp_58 == null ? true : tmp_58 instanceof Color) {
          var tmp_60 = tmp_58;
          tmp_59 = tmp_60 == null ? null : tmp_60.p6b_1;
        } else {
          tmp_59 = THROW_CCE();
        }
        var tmp_61 = tmp_59;
        var tmp_62 = tmp_61 == null ? null : new Color(tmp_61);
        tmp_57 = tmp_62 == null ? null : tmp_62.p6b_1;
      }
      tmp$ret$44 = tmp_57;
    }
    var tmp_63 = tmp$ret$44;
    var tmp_64 = ensureNotNull(tmp_63 == null ? null : new Color(tmp_63));
    var tmp$ret$49;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_7 = list.u(12);
      var saver_7 = get_Saver_6(Companion_getInstance_40());
      var tmp_65;
      if (equals(value_7, false)) {
        tmp_65 = !isInterface(saver_7, NonNullValueClassSaver);
      } else {
        tmp_65 = false;
      }
      if (tmp_65) {
        tmp$ret$49 = null;
        break $l$block_7;
      }
      var tmp_66;
      if (value_7 == null) {
        tmp_66 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_67 = saver_7.v5e(value_7);
        tmp_66 = (tmp_67 == null ? true : tmp_67 instanceof TextDecoration) ? tmp_67 : THROW_CCE();
      }
      tmp$ret$49 = tmp_66;
    }
    var tmp_68 = tmp$ret$49;
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_8 = list.u(13);
      var saver_8 = get_Saver_7(Companion_getInstance_2());
      var tmp_69;
      if (equals(value_8, false)) {
        tmp_69 = !isInterface(saver_8, NonNullValueClassSaver);
      } else {
        tmp_69 = false;
      }
      if (tmp_69) {
        tmp$ret$54 = null;
        break $l$block_8;
      }
      var tmp_70;
      if (value_8 == null) {
        tmp_70 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_71 = saver_8.v5e(value_8);
        tmp_70 = (tmp_71 == null ? true : tmp_71 instanceof Shadow) ? tmp_71 : THROW_CCE();
      }
      tmp$ret$54 = tmp_70;
    }
    return SpanStyle_init_$Create$(tmp_7.p6b_1, tmp_16.s5j_1, tmp_20, tmp_24, tmp_28, VOID, tmp_30, tmp_39.s5j_1, tmp_47, tmp_51, tmp_55, tmp_64.p6b_1, tmp_68, tmp$ret$54);
  }
  function TextLinkStylesSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(it.k72_1, get_SpanStyleSaver(), $this$Saver), save_0(it.l72_1, get_SpanStyleSaver(), $this$Saver), save_0(it.m72_1, get_SpanStyleSaver(), $this$Saver), save_0(it.n72_1, get_SpanStyleSaver(), $this$Saver)]);
  }
  function TextLinkStylesSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(0);
      var saver = get_SpanStyleSaver();
      var tmp;
      if (equals(value, false)) {
        tmp = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (value == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = saver.v5e(value);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof SpanStyle) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var styleOrNull = tmp$ret$0;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.u(1);
      var saver_0 = get_SpanStyleSaver();
      var tmp_2;
      if (equals(value_0, false)) {
        tmp_2 = !isInterface(saver_0, NonNullValueClassSaver);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_3;
      if (value_0 == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_4 = saver_0.v5e(value_0);
        tmp_3 = (tmp_4 == null ? true : tmp_4 instanceof SpanStyle) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var focusedStyleOrNull = tmp$ret$5;
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_1 = list.u(2);
      var saver_1 = get_SpanStyleSaver();
      var tmp_5;
      if (equals(value_1, false)) {
        tmp_5 = !isInterface(saver_1, NonNullValueClassSaver);
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_6;
      if (value_1 == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_7 = saver_1.v5e(value_1);
        tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
      }
      tmp$ret$10 = tmp_6;
    }
    var hoveredStyleOrNull = tmp$ret$10;
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_2 = list.u(3);
      var saver_2 = get_SpanStyleSaver();
      var tmp_8;
      if (equals(value_2, false)) {
        tmp_8 = !isInterface(saver_2, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_9;
      if (value_2 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = saver_2.v5e(value_2);
        tmp_9 = (tmp_10 == null ? true : tmp_10 instanceof SpanStyle) ? tmp_10 : THROW_CCE();
      }
      tmp$ret$15 = tmp_9;
    }
    var pressedStyleOrNull = tmp$ret$15;
    return new TextLinkStyles(styleOrNull, focusedStyleOrNull, hoveredStyleOrNull, pressedStyleOrNull);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.o72_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.p72_1, it.q72_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    return new TextGeometricTransform(list.u(0), list.u(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.r72_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.s72_1), get_Saver(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(0);
      var saver = get_Saver(Companion_getInstance_1());
      var tmp;
      if (equals(value, false)) {
        tmp = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (value == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = saver.v5e(value);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextUnit) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.s5j_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextUnit(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.s5j_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.u(1);
      var saver_0 = get_Saver(Companion_getInstance_1());
      var tmp_8;
      if (equals(value_0, false)) {
        tmp_8 = !isInterface(saver_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (value_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = saver_0.v5e(value_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.s5j_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.s5j_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.s5j_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).s5j_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.t72_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.j72_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.h6z_1)), save(_TextRange___get_end__impl__gcdxpp(it.h6z_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.u(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_1;
    return new TextRange(TextRange_0(tmp_0, ensureNotNull(tmp$ret$5)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Color(it.w6f_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it.x6f_1), get_Saver_8(Companion_getInstance_3()), $this$Saver), save(it.y6f_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(0);
      var saver = get_Saver_1(Companion_getInstance());
      var tmp;
      if (equals(value, false)) {
        tmp = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (value == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = saver.v5e(value);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.p6b_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.p6b_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.u(1);
      var saver_0 = get_Saver_8(Companion_getInstance_3());
      var tmp_8;
      if (equals(value_0, false)) {
        tmp_8 = !isInterface(saver_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (value_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = saver_0.v5e(value_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Offset_0) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.n5g_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Offset_0(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.n5g_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset_0(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.u(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_17 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_17;
    return new Shadow(tmp_7.p6b_1, tmp_16.n5g_1, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isUnspecified' call
    var this_0 = it.p6b_1;
    if (equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = false;
    } else {
      tmp = toArgb(it.p6b_1);
    }
    return tmp;
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance().l68_1;
    } else {
      tmp = Color_0(typeof it === 'number' ? it : THROW_CCE());
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new Color(tmp_0);
  }
  function TextUnitSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new TextUnit(Companion_getInstance_1().q5j_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.s5j_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.s5j_1)))]);
    }
    return tmp;
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_1().q5j_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.u(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.u(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp_3 = tmp0_safe_receiver_0 instanceof TextUnitType ? tmp0_safe_receiver_0.r5j_1 : THROW_CCE();
        var tmp_4 = tmp_3 == null ? null : new TextUnitType(tmp_3);
        tmp_2 = tmp_4 == null ? null : tmp_4.r5j_1;
      }
      var tmp_5 = tmp_2;
      tmp = TextUnit_0(tmp_1, ensureNotNull(tmp_5 == null ? null : new TextUnitType(tmp_5)).r5j_1);
    }
    var tmp_6 = tmp;
    return tmp_6 == null ? null : new TextUnit(tmp_6);
  }
  function OffsetSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset_0(Companion_getInstance_3().r5g_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_Offset___get_x__impl__xvi35n(it.n5g_1)), save(_Offset___get_y__impl__8bzhra(it.n5g_1))]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().r5g_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.u(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.u(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_2 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
      }
      var tmp$ret$5 = tmp_2;
      tmp = Offset(tmp_1, ensureNotNull(tmp$ret$5));
    }
    var tmp_3 = tmp;
    return tmp_3 == null ? null : new Offset_0(tmp_3);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = it.u72_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var element = save_0(item, get_Saver_9(Companion_instance_20), $this$Saver);
        target.e(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.u(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var saver = get_Saver_9(Companion_instance_20);
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(saver, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_1 = saver.v5e(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Locale) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        var element = ensureNotNull(tmp$ret$0);
        target.e(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.x72();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function NonNullValueClassSaver$1($save, $restore) {
    this.y72_1 = $save;
    this.z72_1 = $restore;
  }
  protoOf(NonNullValueClassSaver$1).f5f = function (_this__u8e3s4, value) {
    return this.y72_1(_this__u8e3s4, value);
  };
  protoOf(NonNullValueClassSaver$1).v5e = function (value) {
    return this.z72_1(value);
  };
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_Link_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Link_instance;
  }
  function AnnotationType_Clickable_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Clickable_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function _init_properties_Savers_kt__o6r3ry() {
    if (!properties_initialized_Savers_kt_vjp8zk) {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver_0(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver_0(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver_0(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver_0(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver_0(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = LinkSaver$lambda;
      LinkSaver = Saver_0(tmp_4, LinkSaver$lambda_0);
      var tmp_5 = ClickableSaver$lambda;
      ClickableSaver = Saver_0(tmp_5, ClickableSaver$lambda_0);
      var tmp_6 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver_0(tmp_6, ParagraphStyleSaver$lambda_0);
      var tmp_7 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver_0(tmp_7, SpanStyleSaver$lambda_0);
      var tmp_8 = TextLinkStylesSaver$lambda;
      TextLinkStylesSaver = Saver_0(tmp_8, TextLinkStylesSaver$lambda_0);
      var tmp_9 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver_0(tmp_9, TextDecorationSaver$lambda_0);
      var tmp_10 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver_0(tmp_10, TextGeometricTransformSaver$lambda_0);
      var tmp_11 = TextIndentSaver$lambda;
      TextIndentSaver = Saver_0(tmp_11, TextIndentSaver$lambda_0);
      var tmp_12 = FontWeightSaver$lambda;
      FontWeightSaver = Saver_0(tmp_12, FontWeightSaver$lambda_0);
      var tmp_13 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver_0(tmp_13, BaselineShiftSaver$lambda_0);
      var tmp_14 = TextRangeSaver$lambda;
      TextRangeSaver = Saver_0(tmp_14, TextRangeSaver$lambda_0);
      var tmp_15 = ShadowSaver$lambda;
      ShadowSaver = Saver_0(tmp_15, ShadowSaver$lambda_0);
      var tmp_16 = ColorSaver$lambda;
      ColorSaver = NonNullValueClassSaver_0(tmp_16, ColorSaver$lambda_0);
      var tmp_17 = TextUnitSaver$lambda;
      TextUnitSaver = NonNullValueClassSaver_0(tmp_17, TextUnitSaver$lambda_0);
      var tmp_18 = OffsetSaver$lambda;
      OffsetSaver = NonNullValueClassSaver_0(tmp_18, OffsetSaver$lambda_0);
      var tmp_19 = LocaleListSaver$lambda;
      LocaleListSaver = Saver_0(tmp_19, LocaleListSaver$lambda_0);
      var tmp_20 = LocaleSaver$lambda;
      LocaleSaver = Saver_0(tmp_20, LocaleSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function get_DefaultColorForegroundStyle() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColorForegroundStyle;
  }
  var DefaultColorForegroundStyle;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().l68_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5j_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5j_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().l68_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_30.a73(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5j_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5j_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().l68_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_30.b73(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5j_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5j_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().l68_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.r71_1 = textForegroundStyle;
    this.s71_1 = fontSize;
    this.t71_1 = fontWeight;
    this.u71_1 = fontStyle;
    this.v71_1 = fontSynthesis;
    this.w71_1 = fontFamily;
    this.x71_1 = fontFeatureSettings;
    this.y71_1 = letterSpacing;
    this.z71_1 = baselineShift;
    this.a72_1 = textGeometricTransform;
    this.b72_1 = localeList;
    this.c72_1 = background;
    this.d72_1 = textDecoration;
    this.e72_1 = shadow;
    this.f72_1 = platformStyle;
    this.g72_1 = drawStyle;
  }
  protoOf(SpanStyle).n68 = function () {
    return this.r71_1.n68();
  };
  protoOf(SpanStyle).c73 = function () {
    return this.r71_1.c73();
  };
  protoOf(SpanStyle).o64 = function () {
    return this.r71_1.o64();
  };
  protoOf(SpanStyle).d73 = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.r71_1.n68(), other.r71_1.c73(), other.r71_1.o64(), other.s71_1, other.t71_1, other.u71_1, other.v71_1, other.w71_1, other.x71_1, other.y71_1, other.z71_1, other.a72_1, other.b72_1, other.c72_1, other.d72_1, other.e72_1, other.f72_1, other.g72_1);
  };
  protoOf(SpanStyle).e73 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.n68())) {
      tmp = this.r71_1;
    } else {
      tmp = Companion_instance_30.a73(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).f73 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.n68() : color;
    fontSize = fontSize === VOID ? this.s71_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.t71_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.u71_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.v71_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.w71_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.x71_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.y71_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.z71_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.a72_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.b72_1 : localeList;
    background = background === VOID ? this.c72_1 : background;
    textDecoration = textDecoration === VOID ? this.d72_1 : textDecoration;
    shadow = shadow === VOID ? this.e72_1 : shadow;
    platformStyle = platformStyle === VOID ? this.f72_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.g72_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.e73(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.e73;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.g73(other) && this.h73(other);
  };
  protoOf(SpanStyle).g73 = function (other) {
    if (this === other)
      return true;
    if (!equals(this.s71_1, other.s71_1))
      return false;
    if (!equals(this.t71_1, other.t71_1))
      return false;
    var tmp = this.u71_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.u71_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.v71_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.v71_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.w71_1, other.w71_1))
      return false;
    if (!(this.x71_1 == other.x71_1))
      return false;
    if (!equals(this.y71_1, other.y71_1))
      return false;
    var tmp_5 = this.z71_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.z71_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.a72_1, other.a72_1))
      return false;
    if (!equals(this.b72_1, other.b72_1))
      return false;
    if (!equals(this.c72_1, other.c72_1))
      return false;
    if (!equals(this.f72_1, other.f72_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).h73 = function (other) {
    if (!equals(this.r71_1, other.r71_1))
      return false;
    if (!equals(this.d72_1, other.d72_1))
      return false;
    if (!equals(this.e72_1, other.e72_1))
      return false;
    if (!equals(this.g72_1, other.g72_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.n68());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.c73();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.o64()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.s71_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.t71_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.u71_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.v71_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.w71_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.x71_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.y71_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.z71_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.a72_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.b72_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.c72_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.d72_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.e72_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.f72_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.g72_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SpanStyle.toString.<anonymous>' call
    this_0.v8('SpanStyle(');
    this_0.v8('color=' + Color__toString_impl_hpzmaq(this.n68()) + ', ');
    this_0.v8('brush=' + toString_0(this.c73()) + ', ');
    this_0.v8('alpha=' + this.o64() + ', ');
    this_0.v8('fontSize=' + TextUnit__toString_impl_51ghw0(this.s71_1) + ', ');
    this_0.v8('fontWeight=' + toString_0(this.t71_1) + ', ');
    var tmp = this.u71_1;
    this_0.v8('fontStyle=' + toString_0(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.v71_1;
    this_0.v8('fontSynthesis=' + toString_0(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.v8('fontFamily=' + toString_0(this.w71_1) + ', ');
    this_0.v8('fontFeatureSettings=' + this.x71_1 + ', ');
    this_0.v8('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.y71_1) + ', ');
    var tmp_1 = this.z71_1;
    this_0.v8('baselineShift=' + toString_0(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.v8('textGeometricTransform=' + toString_0(this.a72_1) + ', ');
    this_0.v8('localeList=' + toString_0(this.b72_1) + ', ');
    this_0.v8('background=' + Color__toString_impl_hpzmaq(this.c72_1) + ', ');
    this_0.v8('textDecoration=' + toString_0(this.d72_1) + ', ');
    this_0.v8('shadow=' + toString_0(this.e72_1) + ', ');
    this_0.v8('platformStyle=' + toString_0(this.f72_1) + ', ');
    this_0.v8('drawStyle=' + toString_0(this.g72_1));
    this_0.v8(')');
    return this_0.toString();
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(fontSize)) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.s71_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.r71_1.n68());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.u71_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = (!(fontWeight == null) && !equals(fontWeight, _this__u8e3s4.t71_1));
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = (!(fontFamily == null) && !(fontFamily === _this__u8e3s4.w71_1));
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.y71_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = (!(textDecoration == null) && !equals(textDecoration, _this__u8e3s4.d72_1));
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.r71_1.c73());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = (!(brush == null) && !(alpha === _this__u8e3s4.r71_1.o64()));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.v71_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = (!(fontFeatureSettings == null) && !(fontFeatureSettings == _this__u8e3s4.x71_1));
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.z71_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textGeometricTransform == null) && !equals(textGeometricTransform, _this__u8e3s4.a72_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(localeList == null) && !equals(localeList, _this__u8e3s4.b72_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_35 = !equals(background, _this__u8e3s4.c72_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(shadow == null) && !equals(shadow, _this__u8e3s4.e72_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.f72_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(drawStyle == null) && !equals(drawStyle, _this__u8e3s4.g72_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_30.b73(brush, alpha);
    } else {
      tmp_36 = Companion_instance_30.a73(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.r71_1.i73(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.w71_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.s71_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.t71_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.u71_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.v71_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.x71_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.y71_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.z71_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.a72_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.b72_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.c72_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.d72_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.e72_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.g72_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.f72_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.f72_1;
    return _this__u8e3s4.f72_1.k73(other);
  }
  function lerp_5(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp8_textForegroundStyle = lerp_9(start.r71_1, stop.r71_1, fraction);
    var tmp9_fontFamily = lerpDiscrete(start.w71_1, stop.w71_1, fraction);
    var tmp10_fontSize = lerpTextUnitInheritable(start.s71_1, stop.s71_1, fraction);
    var tmp0_elvis_lhs = start.t71_1;
    var tmp = tmp0_elvis_lhs == null ? Companion_getInstance_22().x73_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.t71_1;
    var tmp11_fontWeight = lerp_7(tmp, tmp1_elvis_lhs == null ? Companion_getInstance_22().x73_1 : tmp1_elvis_lhs, fraction);
    var tmp_0 = start.u71_1;
    var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
    var tmp_2 = stop.u71_1;
    var tmp_3 = lerpDiscrete(tmp_1, tmp_2 == null ? null : new FontStyle(tmp_2), fraction);
    var tmp12_fontStyle = tmp_3 == null ? null : tmp_3.h72_1;
    var tmp_4 = start.v71_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = stop.v71_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new FontSynthesis(tmp_6), fraction);
    var tmp13_fontSynthesis = tmp_7 == null ? null : tmp_7.i72_1;
    var tmp14_fontFeatureSettings = lerpDiscrete(start.x71_1, stop.x71_1, fraction);
    var tmp15_letterSpacing = lerpTextUnitInheritable(start.y71_1, stop.y71_1, fraction);
    var tmp2_elvis_lhs = start.z71_1;
    var tmp_8;
    var tmp_9 = tmp2_elvis_lhs;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null) {
      tmp_8 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp_10 = tmp_8;
    var tmp3_elvis_lhs = stop.z71_1;
    var tmp_11;
    var tmp_12 = tmp3_elvis_lhs;
    if ((tmp_12 == null ? null : new BaselineShift(tmp_12)) == null) {
      tmp_11 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    var tmp16_baselineShift = lerp_8(tmp_10, tmp_11, fraction);
    var tmp4_elvis_lhs = start.a72_1;
    var tmp_13 = tmp4_elvis_lhs == null ? Companion_getInstance_43().e74_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = stop.a72_1;
    var tmp17_textGeometricTransform = lerp_10(tmp_13, tmp5_elvis_lhs == null ? Companion_getInstance_43().e74_1 : tmp5_elvis_lhs, fraction);
    var tmp18_localeList = lerpDiscrete(start.b72_1, stop.b72_1, fraction);
    var tmp19_background = lerp(start.c72_1, stop.c72_1, fraction);
    var tmp20_textDecoration = lerpDiscrete(start.d72_1, stop.d72_1, fraction);
    var tmp6_elvis_lhs = start.e72_1;
    var tmp_14 = tmp6_elvis_lhs == null ? new Shadow() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = stop.e72_1;
    var tmp21_shadow = lerp_0(tmp_14, tmp7_elvis_lhs == null ? new Shadow() : tmp7_elvis_lhs, fraction);
    var tmp22_platformStyle = lerpPlatformStyle_0(start.f72_1, stop.f72_1, fraction);
    var tmp23_drawStyle = lerpDiscrete(start.g72_1, stop.g72_1, fraction);
    return new SpanStyle(tmp8_textForegroundStyle, tmp10_fontSize, tmp11_fontWeight, tmp12_fontStyle, tmp13_fontSynthesis, tmp9_fontFamily, tmp14_fontFeatureSettings, tmp15_letterSpacing, tmp16_baselineShift, tmp17_textGeometricTransform, tmp18_localeList, tmp19_background, tmp20_textDecoration, tmp21_shadow, tmp22_platformStyle, tmp23_drawStyle);
  }
  function lerpDiscrete(a, b, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    return fraction < 0.5 ? a : b;
  }
  function lerpTextUnitInheritable(a, b, t) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (get_isUnspecified(a) || get_isUnspecified(b))
      return lerpDiscrete(new TextUnit(a), new TextUnit(b), t).s5j_1;
    return lerp_1(a, b, t);
  }
  function lerpPlatformStyle_0(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (start == null && stop == null)
      return null;
    var startNonNull = start == null ? Companion_getInstance_50().f74_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_50().f74_1 : stop;
    return lerp_12(startNonNull, stopNonNull, fraction);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.r71_1.g74(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.s71_1) ? get_DefaultFontSize() : style.s71_1;
    var tmp0_elvis_lhs = style.t71_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_22().x73_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.u71_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_20().h74_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.v71_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_21().k74_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.w71_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_16().n74_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.x71_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.y71_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.y71_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.z71_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_34().u74_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.a72_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_43().e74_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.b72_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_33().k2m() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = style.c72_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_17 = this_0;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.d72_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_40().w74_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.e72_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().v6f_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.g72_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.f72_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return get_DefaultColorForegroundStyle();
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().k68_1;
      DefaultColor = Companion_getInstance().z67_1;
      DefaultColorForegroundStyle = Companion_instance_30.a73(get_DefaultColor());
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.z74_1 = layoutInput;
    this.a75_1 = multiParagraph;
    this.b75_1 = size;
    this.c75_1 = this.a75_1.o6y();
    this.d75_1 = this.a75_1.p6y();
    this.e75_1 = this.a75_1.v6x_1;
  }
  protoOf(TextLayoutResult).f75 = function () {
    return this.a75_1.r6x_1 || _IntSize___get_height__impl__prv63b(this.b75_1) < this.a75_1.t6x_1;
  };
  protoOf(TextLayoutResult).g75 = function () {
    return _IntSize___get_width__impl__d9yl4o(this.b75_1) < this.a75_1.s6x_1;
  };
  protoOf(TextLayoutResult).h75 = function () {
    return this.g75() || this.f75();
  };
  protoOf(TextLayoutResult).k6y = function () {
    return this.a75_1.u6x_1;
  };
  protoOf(TextLayoutResult).q6z = function (lineIndex) {
    return this.a75_1.q6z(lineIndex);
  };
  protoOf(TextLayoutResult).r6z = function (lineIndex, visibleEnd) {
    return this.a75_1.r6z(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).i75 = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.r6z(lineIndex, visibleEnd) : $super.r6z.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).n6z = function (lineIndex) {
    return this.a75_1.n6z(lineIndex);
  };
  protoOf(TextLayoutResult).o6z = function (lineIndex) {
    return this.a75_1.o6z(lineIndex);
  };
  protoOf(TextLayoutResult).k6z = function (lineIndex) {
    return this.a75_1.k6z(lineIndex);
  };
  protoOf(TextLayoutResult).m6z = function (lineIndex) {
    return this.a75_1.m6z(lineIndex);
  };
  protoOf(TextLayoutResult).j6z = function (offset) {
    return this.a75_1.j6z(offset);
  };
  protoOf(TextLayoutResult).v6y = function (vertical) {
    return this.a75_1.v6y(vertical);
  };
  protoOf(TextLayoutResult).c6z = function (offset, usePrimaryDirection) {
    return this.a75_1.c6z(offset, usePrimaryDirection);
  };
  protoOf(TextLayoutResult).d6z = function (offset) {
    return this.a75_1.d6z(offset);
  };
  protoOf(TextLayoutResult).e6z = function (offset) {
    return this.a75_1.e6z(offset);
  };
  protoOf(TextLayoutResult).y6y = function (position) {
    return this.a75_1.y6y(position);
  };
  protoOf(TextLayoutResult).b6z = function (offset) {
    return this.a75_1.b6z(offset);
  };
  protoOf(TextLayoutResult).f6z = function (offset) {
    return this.a75_1.f6z(offset);
  };
  protoOf(TextLayoutResult).i6z = function (offset) {
    return this.a75_1.i6z(offset);
  };
  protoOf(TextLayoutResult).f6y = function (start, end) {
    return this.a75_1.f6y(start, end);
  };
  protoOf(TextLayoutResult).j75 = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.a75_1, size);
  };
  protoOf(TextLayoutResult).k75 = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.z74_1 : layoutInput;
    size = size === VOID ? this.b75_1 : size;
    return $super === VOID ? this.j75(layoutInput, size) : $super.j75.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.z74_1.equals(other.z74_1))
      return false;
    if (!equals(this.a75_1, other.a75_1))
      return false;
    if (!equals(this.b75_1, other.b75_1))
      return false;
    if (!(this.c75_1 === other.c75_1))
      return false;
    if (!(this.d75_1 === other.d75_1))
      return false;
    if (!equals(this.e75_1, other.e75_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.z74_1.hashCode();
    result = imul(31, result) + hashCode(this.a75_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.b75_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.c75_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.d75_1) | 0;
    result = imul(31, result) + hashCode(this.e75_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.z74_1.toString() + ', ') + ('multiParagraph=' + toString(this.a75_1) + ', ') + ('size=' + IntSize__toString_impl_54w9zl(this.b75_1) + ', ') + ('firstBaseline=' + this.c75_1 + ', ') + ('lastBaseline=' + this.d75_1 + ', ') + ('placeholderRects=' + toString(this.e75_1)) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.l75_1 = text;
    this.m75_1 = style;
    this.n75_1 = placeholders;
    this.o75_1 = maxLines;
    this.p75_1 = softWrap;
    this.q75_1 = overflow;
    this.r75_1 = density;
    this.s75_1 = layoutDirection;
    this.t75_1 = fontFamilyResolver;
    this.u75_1 = constraints;
    this.v75_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.l75_1.equals(other.l75_1))
      return false;
    if (!this.m75_1.equals(other.m75_1))
      return false;
    if (!equals(this.n75_1, other.n75_1))
      return false;
    if (!(this.o75_1 === other.o75_1))
      return false;
    if (!(this.p75_1 === other.p75_1))
      return false;
    if (!(this.q75_1 === other.q75_1))
      return false;
    if (!equals(this.r75_1, other.r75_1))
      return false;
    if (!this.s75_1.equals(other.s75_1))
      return false;
    if (!equals(this.t75_1, other.t75_1))
      return false;
    if (!equals(this.u75_1, other.u75_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.l75_1.hashCode();
    result = imul(31, result) + this.m75_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.n75_1) | 0;
    result = imul(31, result) + this.o75_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.p75_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.q75_1) | 0;
    result = imul(31, result) + hashCode(this.r75_1) | 0;
    result = imul(31, result) + this.s75_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.t75_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.u75_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.TextLayoutInput.toString.<anonymous>' call
    this_0.v8('TextLayoutInput(');
    this_0.v8('text=' + this.l75_1.toString() + ', ');
    this_0.v8('style=' + this.m75_1.toString() + ', ');
    this_0.v8('placeholders=' + toString(this.n75_1) + ', ');
    this_0.v8('maxLines=' + this.o75_1 + ', ');
    this_0.v8('softWrap=' + this.p75_1 + ', ');
    this_0.v8('overflow=' + TextOverflow__toString_impl_10s0c2(this.q75_1) + ', ');
    this_0.v8('density=' + toString(this.r75_1) + ', ');
    this_0.v8('layoutDirection=' + this.s75_1.toString() + ', ');
    this_0.v8('fontFamilyResolver=' + toString(this.t75_1) + ', ');
    this_0.v8('constraints=' + Constraints__toString_impl_37yskr(this.u75_1));
    this_0.v8(')');
    return this_0.toString();
  };
  function TextLinkStyles(style, focusedStyle, hoveredStyle, pressedStyle) {
    style = style === VOID ? null : style;
    focusedStyle = focusedStyle === VOID ? null : focusedStyle;
    hoveredStyle = hoveredStyle === VOID ? null : hoveredStyle;
    pressedStyle = pressedStyle === VOID ? null : pressedStyle;
    this.k72_1 = style;
    this.l72_1 = focusedStyle;
    this.m72_1 = hoveredStyle;
    this.n72_1 = pressedStyle;
  }
  protoOf(TextLinkStyles).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TextLinkStyles);
    }
    if (tmp)
      return false;
    if (!equals(this.k72_1, other.k72_1))
      return false;
    if (!equals(this.l72_1, other.l72_1))
      return false;
    if (!equals(this.m72_1, other.m72_1))
      return false;
    if (!equals(this.n72_1, other.n72_1))
      return false;
    return true;
  };
  protoOf(TextLinkStyles).hashCode = function () {
    var tmp0_safe_receiver = this.k72_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.l72_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.m72_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.n72_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  var DefaultCacheSize;
  function TextPainter() {
  }
  protoOf(TextPainter).w75 = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.h75() && !(textLayoutResult.z74_1.q75_1 === Companion_getInstance_45().z75_1);
    if (needClipping) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.b75_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.b75_1);
      var bounds = Rect(Companion_getInstance_3().p5g_1, Size(width, height));
      canvas.n69();
      canvas.w69(bounds);
    }
    var style = textLayoutResult.z74_1.m75_1.a70_1;
    var tmp0_elvis_lhs = style.d72_1;
    var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_40().w74_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.e72_1;
    var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_2().v6f_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.g72_1;
    var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
    try {
      var brush = style.c73();
      if (!(brush == null)) {
        var tmp;
        if (!(style.r71_1 === Unspecified_instance)) {
          tmp = style.r71_1.o64();
        } else {
          tmp = 1.0;
        }
        var alpha = tmp;
        textLayoutResult.a75_1.u6y(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp_0;
        if (!(style.r71_1 === Unspecified_instance)) {
          tmp_0 = style.r71_1.n68();
        } else {
          tmp_0 = Companion_getInstance().z67_1;
        }
        var color = tmp_0;
        textLayoutResult.a75_1.s6y(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (needClipping) {
        canvas.o69();
      }
    }
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
    return TextPainter_instance;
  }
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _get_packedValue__aj623s($this).p3(32).m1();
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _get_packedValue__aj623s($this).r3(new Long(-1, 0)).m1();
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_end__impl__gcdxpp($this) : _TextRange___get_start__impl__ww4t90($this);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_start__impl__ww4t90($this) : _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_collapsed__impl__cilesp($this) {
    return _TextRange___get_start__impl__ww4t90($this) === _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_reversed__impl__emhnbm($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_length__impl__7qes3a($this) {
    return _TextRange___get_max__impl__owm8m($this) - _TextRange___get_min__impl__uu95c4($this) | 0;
  }
  function TextRange__intersects_impl_mhtn49($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) < _TextRange___get_max__impl__owm8m(other) && _TextRange___get_min__impl__uu95c4(other) < _TextRange___get_max__impl__owm8m($this);
  }
  function TextRange__contains_impl_ws45z2($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) <= _TextRange___get_min__impl__uu95c4(other) && _TextRange___get_max__impl__owm8m(other) <= _TextRange___get_max__impl__owm8m($this);
  }
  function TextRange__contains_impl_ws45z2_0($this, offset) {
    var containsLower = _TextRange___get_min__impl__uu95c4($this);
    return offset < _TextRange___get_max__impl__owm8m($this) ? containsLower <= offset : false;
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.s6z_1 = TextRange_1(0);
  }
  var Companion_instance_2;
  function Companion_getInstance_14() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.h6z_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_14();
    this.h6z_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.h6z_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.h6z_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.h6z_1, other);
  };
  function TextRange_0(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function TextRange_1(index) {
    return TextRange_0(index, index);
  }
  function packWithCheck(start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message = 'start cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(end >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message_0 = 'end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return toLong(start).o3(32).s3(toLong(end).r3(new Long(-1, 0)));
  }
  function coerceIn_1(_this__u8e3s4, minimumValue, maximumValue) {
    var newStart = coerceIn(_TextRange___get_start__impl__ww4t90(_this__u8e3s4), minimumValue, maximumValue);
    var newEnd = coerceIn(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4), minimumValue, maximumValue);
    if (!(newStart === _TextRange___get_start__impl__ww4t90(_this__u8e3s4)) || !(newEnd === _TextRange___get_end__impl__gcdxpp(_this__u8e3s4))) {
      return TextRange_0(newStart, newEnd);
    }
    return _this__u8e3s4;
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.f72_1, paragraphStyle.w6w_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().l68_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5j_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5j_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().l68_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_39().m70_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_41().z6z_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q5j_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_51().q70_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_35().t70_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.a76_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.b76_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.c76_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_3;
  function Companion_getInstance_15() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_15();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.a70_1 = spanStyle;
    this.b70_1 = paragraphStyle;
    this.c70_1 = platformStyle;
  }
  protoOf(TextStyle).d76 = function () {
    return this.a70_1;
  };
  protoOf(TextStyle).d70 = function () {
    return this.b70_1;
  };
  protoOf(TextStyle).e76 = function (other) {
    if (other == null || equals(other, Companion_getInstance_15().c76_1))
      return this;
    return TextStyle_init_$Create$_0(this.d76().d73(other.d76()), this.d70().b6x(other.d70()));
  };
  protoOf(TextStyle).f76 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.a70_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.a76_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.b70_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.b76_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.a70_1 === mergedSpanStyle && this.b70_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).g76 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().l68_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5j_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5j_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().l68_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_39().m70_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_41().z6z_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q5j_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_51().q70_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_35().t70_1 : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.f76(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.f76;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).e70 = function (other) {
    return TextStyle_init_$Create$_0(this.d76(), this.d70().b6x(other));
  };
  protoOf(TextStyle).h76 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.a70_1.n68())) {
      tmp = this.a70_1.r71_1;
    } else {
      tmp = Companion_instance_30.a73(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.a76_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.b76_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).i76 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.a70_1.n68() : color;
    fontSize = fontSize === VOID ? this.a70_1.s71_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.a70_1.t71_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.a70_1.u71_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.a70_1.v71_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.a70_1.w71_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.a70_1.x71_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.a70_1.y71_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.a70_1.z71_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.a70_1.a72_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.a70_1.b72_1 : localeList;
    background = background === VOID ? this.a70_1.c72_1 : background;
    textDecoration = textDecoration === VOID ? this.a70_1.d72_1 : textDecoration;
    shadow = shadow === VOID ? this.a70_1.e72_1 : shadow;
    drawStyle = drawStyle === VOID ? this.a70_1.g72_1 : drawStyle;
    textAlign = textAlign === VOID ? this.b70_1.s6w_1 : textAlign;
    textDirection = textDirection === VOID ? this.b70_1.t6w_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.b70_1.u6w_1 : lineHeight;
    textIndent = textIndent === VOID ? this.b70_1.v6w_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.c70_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.b70_1.x6w_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.b70_1.y6w_1 : lineBreak;
    hyphens = hyphens === VOID ? this.b70_1.z6w_1 : hyphens;
    textMotion = textMotion === VOID ? this.b70_1.a6x_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.h76(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.h76;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).j76 = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.a76_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.b76_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).k76 = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.a70_1.o64() : alpha;
    fontSize = fontSize === VOID ? this.a70_1.s71_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.a70_1.t71_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.a70_1.u71_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.a70_1.v71_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.a70_1.w71_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.a70_1.x71_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.a70_1.y71_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.a70_1.z71_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.a70_1.a72_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.a70_1.b72_1 : localeList;
    background = background === VOID ? this.a70_1.c72_1 : background;
    textDecoration = textDecoration === VOID ? this.a70_1.d72_1 : textDecoration;
    shadow = shadow === VOID ? this.a70_1.e72_1 : shadow;
    drawStyle = drawStyle === VOID ? this.a70_1.g72_1 : drawStyle;
    textAlign = textAlign === VOID ? this.b70_1.s6w_1 : textAlign;
    textDirection = textDirection === VOID ? this.b70_1.t6w_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.b70_1.u6w_1 : lineHeight;
    textIndent = textIndent === VOID ? this.b70_1.v6w_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.c70_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.b70_1.x6w_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.b70_1.y6w_1 : lineBreak;
    hyphens = hyphens === VOID ? this.b70_1.z6w_1 : hyphens;
    textMotion = textMotion === VOID ? this.b70_1.a6x_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.j76(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.j76;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).c73 = function () {
    return this.a70_1.c73();
  };
  protoOf(TextStyle).n68 = function () {
    return this.a70_1.n68();
  };
  protoOf(TextStyle).o64 = function () {
    return this.a70_1.o64();
  };
  protoOf(TextStyle).l76 = function () {
    return this.a70_1.s71_1;
  };
  protoOf(TextStyle).m76 = function () {
    return this.a70_1.t71_1;
  };
  protoOf(TextStyle).n76 = function () {
    return this.a70_1.u71_1;
  };
  protoOf(TextStyle).o76 = function () {
    return this.a70_1.v71_1;
  };
  protoOf(TextStyle).p76 = function () {
    return this.a70_1.w71_1;
  };
  protoOf(TextStyle).q76 = function () {
    return this.a70_1.x71_1;
  };
  protoOf(TextStyle).r76 = function () {
    return this.a70_1.y71_1;
  };
  protoOf(TextStyle).s76 = function () {
    return this.a70_1.z71_1;
  };
  protoOf(TextStyle).t76 = function () {
    return this.a70_1.a72_1;
  };
  protoOf(TextStyle).u76 = function () {
    return this.a70_1.b72_1;
  };
  protoOf(TextStyle).v76 = function () {
    return this.a70_1.c72_1;
  };
  protoOf(TextStyle).w76 = function () {
    return this.a70_1.d72_1;
  };
  protoOf(TextStyle).x76 = function () {
    return this.a70_1.e72_1;
  };
  protoOf(TextStyle).y76 = function () {
    return this.a70_1.g72_1;
  };
  protoOf(TextStyle).z76 = function () {
    return this.b70_1.s6w_1;
  };
  protoOf(TextStyle).a77 = function () {
    return this.b70_1.t6w_1;
  };
  protoOf(TextStyle).b77 = function () {
    return this.b70_1.u6w_1;
  };
  protoOf(TextStyle).c77 = function () {
    return this.b70_1.v6w_1;
  };
  protoOf(TextStyle).d77 = function () {
    return this.b70_1.x6w_1;
  };
  protoOf(TextStyle).e77 = function () {
    return this.b70_1.z6w_1;
  };
  protoOf(TextStyle).f77 = function () {
    return this.b70_1.y6w_1;
  };
  protoOf(TextStyle).g77 = function () {
    return this.b70_1.a6x_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.a70_1.equals(other.a70_1))
      return false;
    if (!this.b70_1.equals(other.b70_1))
      return false;
    if (!equals(this.c70_1, other.c70_1))
      return false;
    return true;
  };
  protoOf(TextStyle).h77 = function (other) {
    return this === other || (this.b70_1.equals(other.b70_1) && this.a70_1.g73(other.a70_1));
  };
  protoOf(TextStyle).i77 = function (other) {
    return this === other || this.a70_1.h73(other.a70_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.a70_1.hashCode();
    result = imul(31, result) + this.b70_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.c70_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.TextStyle.toString.<anonymous>' call
    this_0.v8('TextStyle(');
    this_0.v8('color=' + Color__toString_impl_hpzmaq(this.n68()) + ', ');
    this_0.v8('brush=' + toString_0(this.c73()) + ', ');
    this_0.v8('alpha=' + this.o64() + ', ');
    this_0.v8('fontSize=' + TextUnit__toString_impl_51ghw0(this.l76()) + ', ');
    this_0.v8('fontWeight=' + toString_0(this.m76()) + ', ');
    var tmp = this.n76();
    this_0.v8('fontStyle=' + toString_0(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.o76();
    this_0.v8('fontSynthesis=' + toString_0(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.v8('fontFamily=' + toString_0(this.p76()) + ', ');
    this_0.v8('fontFeatureSettings=' + this.q76() + ', ');
    this_0.v8('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.r76()) + ', ');
    var tmp_1 = this.s76();
    this_0.v8('baselineShift=' + toString_0(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.v8('textGeometricTransform=' + toString_0(this.t76()) + ', ');
    this_0.v8('localeList=' + toString_0(this.u76()) + ', ');
    this_0.v8('background=' + Color__toString_impl_hpzmaq(this.v76()) + ', ');
    this_0.v8('textDecoration=' + toString_0(this.w76()) + ', ');
    this_0.v8('shadow=' + toString_0(this.x76()) + ', ');
    this_0.v8('drawStyle=' + toString_0(this.y76()) + ', ');
    this_0.v8('textAlign=' + TextAlign__toString_impl_6ha6d3(this.z76()) + ', ');
    this_0.v8('textDirection=' + TextDirection__toString_impl_x3uh9t(this.a77()) + ', ');
    this_0.v8('lineHeight=' + TextUnit__toString_impl_51ghw0(this.b77()) + ', ');
    this_0.v8('textIndent=' + toString_0(this.c77()) + ', ');
    this_0.v8('platformStyle=' + toString_0(this.c70_1) + ', ');
    this_0.v8('lineHeightStyle=' + toString_0(this.d77()) + ', ');
    this_0.v8('lineBreak=' + LineBreak__toString_impl_mphhli(this.f77()) + ', ');
    this_0.v8('hyphens=' + Hyphens__toString_impl_ck1wg0(this.e77()) + ', ');
    this_0.v8('textMotion=' + toString_0(this.g77()));
    this_0.v8(')');
    return this_0.toString();
  };
  function lerp_6(start, stop, fraction) {
    return TextStyle_init_$Create$_0(lerp_5(start.d76(), stop.d76(), fraction), lerp_4(start.d70(), stop.d70(), fraction));
  }
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null && platformParagraphStyle == null) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.a70_1), resolveParagraphStyleDefaults(style.b70_1, direction), style.c70_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    if (textDirection === Companion_getInstance_41().w6z_1) {
      var tmp_0;
      switch (layoutDirection.z2_1) {
        case 0:
          tmp_0 = Companion_getInstance_41().x6z_1;
          break;
        case 1:
          tmp_0 = Companion_getInstance_41().y6z_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_41().z6z_1) {
      var tmp_1;
      switch (layoutDirection.z2_1) {
        case 0:
          tmp_1 = Companion_getInstance_41().u6z_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_41().v6z_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = textDirection;
    }
    return tmp;
  }
  function TtsAnnotation() {
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.p71_1 = verbatim;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.p71_1 === other.p71_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.p71_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.p71_1 + ')';
  };
  function UrlAnnotation(url) {
    this.q71_1 = url;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.q71_1 === other.q71_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.q71_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.q71_1 + ')';
  };
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.n77_1 = maxSize;
    $this.k77_1 = HashMap_init_$Create$(0, 0.75);
    $this.l77_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.t77(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + toString_0(key) + '=' + toString_0(value);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).p = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j77_1;
    return this.m77_1;
  };
  protoOf(LruCache).s2 = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j77_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.k77_1.s2(key);
    var tmp;
    if (!(mapValue == null)) {
      this.l77_1.t2(key);
      this.l77_1.e(key);
      this.r77_1 = this.r77_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.s77_1;
      this.s77_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.u77(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j77_1;
    this.p77_1 = this.p77_1 + 1 | 0;
    var previousValue = this.k77_1.k2(key, createdValue);
    this.l77_1.t2(key);
    this.l77_1.e(key);
    if (!(previousValue == null)) {
      this.k77_1.k2(key, previousValue);
      mapValue = previousValue;
    } else {
      this.m77_1 = this.p() + safeSizeOf(this, key, createdValue) | 0;
    }
    if (!(mapValue == null)) {
      this.w77(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.v77(this.n77_1);
      return createdValue;
    }
  };
  protoOf(LruCache).k2 = function (key, value) {
    if (key == null || value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j77_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.o77_1 = this.o77_1 + 1 | 0;
    this.m77_1 = this.p() + safeSizeOf(this, key, value) | 0;
    previous = this.k77_1.k2(key, value);
    if (!(previous == null)) {
      this.m77_1 = this.p() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.l77_1.v(key)) {
      this.l77_1.t2(key);
    }
    this.l77_1.e(key);
    if (!(previous == null)) {
      this.w77(false, key, ensureNotNull(previous), value);
    }
    this.v77(this.n77_1);
    return previous;
  };
  protoOf(LruCache).v77 = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.j77_1;
      if (this.p() < 0 || (this.k77_1.j() && !(this.p() === 0)) || !(this.k77_1.j() === this.l77_1.j())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      if (this.p() > maxSize && !this.k77_1.j()) {
        key = first(this.l77_1);
        // Inline function 'kotlin.collections.get' call
        var this_0 = this.k77_1;
        var key_0 = key;
        var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).s2(key_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        value = tmp;
        // Inline function 'kotlin.collections.remove' call
        var this_1 = this.k77_1;
        var key_1 = key;
        (isInterface(this_1, KtMutableMap) ? this_1 : THROW_CCE()).l2(key_1);
        // Inline function 'kotlin.collections.remove' call
        var this_2 = this.l77_1;
        var element = key;
        (isInterface(this_2, MutableCollection) ? this_2 : THROW_CCE()).t2(element);
        this.m77_1 = this.p() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.q77_1 = this.q77_1 + 1 | 0;
      }
      if (key == null && value == null) {
        break $l$loop;
      } else {
        this.w77(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).l2 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j77_1;
    previous = this.k77_1.l2(key);
    this.l77_1.t2(key);
    if (!(previous == null)) {
      this.m77_1 = this.p() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (!(previous == null)) {
      this.w77(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).w77 = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).u77 = function (key) {
    return null;
  };
  protoOf(LruCache).t77 = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j77_1;
    var accesses = this.r77_1 + this.s77_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.r77_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.n77_1 + ',hits=' + this.r77_1 + ',misses=' + this.s77_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function LruCache() {
    this.j77_1 = createSynchronizedObject();
    this.m77_1 = 0;
    this.n77_1 = 0;
    this.o77_1 = 0;
    this.p77_1 = 0;
    this.q77_1 = 0;
    this.r77_1 = 0;
    this.s77_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.x77_1 = get_EMPTY_INTS();
      $this.y77_1 = get_EMPTY_OBJECTS();
    } else {
      $this.x77_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = capacity << 1;
      tmp.y77_1 = fillArrayVal(Array(size), null);
    }
    $this.z77_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).a78 = function (key, hash) {
    var N = this.z77_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.x77_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.y77_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N && this.x77_1[end] === hash) {
      if (equals(key, this.y77_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && this.x77_1[i] === hash) {
      if (equals(key, this.y77_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).b78 = function () {
    var N = this.z77_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.x77_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.y77_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N && this.x77_1[end] === 0) {
      if (null == this.y77_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && this.x77_1[i] === 0) {
      if (null == this.y77_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).q2 = function (key) {
    return this.c78(key) >= 0;
  };
  protoOf(SimpleArrayMap).c78 = function (key) {
    return key == null ? this.b78() : this.a78(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).s2 = function (key) {
    var index = this.c78(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.y77_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).v13 = function (index) {
    var tmp = this.y77_1[index << 1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).o13 = function (index) {
    var tmp = this.y77_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).j = function () {
    return this.z77_1 <= 0;
  };
  protoOf(SimpleArrayMap).k2 = function (key, value) {
    var osize = this.z77_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.b78();
    } else {
      hash = hashCode(key);
      index = this.a78(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.y77_1[index];
      var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.y77_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.x77_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.x77_1.length + ' to ' + n);
      }
      this.x77_1 = copyOf(this.x77_1, n);
      this.y77_1 = copyOf_0(this.y77_1, n << 1);
      if (true && !(osize === this.z77_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.x77_1;
      var destination = this.x77_1;
      var destinationOffset = index + 1 | 0;
      var startIndex = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination, destinationOffset, startIndex, osize);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.y77_1;
      var destination_0 = this.y77_1;
      var destinationOffset_0 = (index + 1 | 0) << 1;
      var startIndex_0 = index << 1;
      var endIndex = this.z77_1 << 1;
      arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex);
    }
    if (!(osize === this.z77_1) || index >= this.x77_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.x77_1[index] = hash;
    this.y77_1[index << 1] = key;
    this.y77_1[(index << 1) + 1 | 0] = value;
    this.z77_1 = this.z77_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.z77_1 === map.z77_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.z77_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.v13(i);
            var mine = this.o13(i);
            var theirs = map.s2(key);
            if (mine == null) {
              if (!(theirs == null) || !map.q2(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, KtMap) : false) {
          var map_0 = other;
          if (!(this.z77_1 === map_0.p())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.z77_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.v13(i_0);
              var mine_0 = this.o13(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, KtMap) ? map_0 : THROW_CCE()).s2(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, KtMap) ? map_0 : THROW_CCE()).q2(key_0);
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
        var ignored = $p;
      } else {
        if ($p instanceof ClassCastException) {
          var ignored_0 = $p;
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).hashCode = function () {
    var hashes = this.x77_1;
    var array = this.y77_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.z77_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      i = i + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  protoOf(SimpleArrayMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$(imul(this.z77_1, 28));
    buffer.w8(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.z77_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.v8(', ');
        }
        var key = this.v13(i);
        if (!(key === this)) {
          buffer.u8(key);
        } else {
          buffer.v8('(this Map)');
        }
        buffer.w8(_Char___init__impl__6a9atx(61));
        var value = this.o13(i);
        if (!(value === this)) {
          buffer.u8(value);
        } else {
          buffer.v8('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.w8(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.z77_1 = 0;
  }
  function Font() {
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.n74_1 = new DefaultFontFamily();
    this.o74_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.p74_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.q74_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.r74_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_4;
  function Companion_getInstance_16() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_16();
    this.i78_1 = canLoadSynchronously;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.k78_1 = name;
    this.l78_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.l78_1;
  };
  function FontListFontFamily() {
  }
  function FileBasedFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m78_1;
      if (finalResult.o78()) {
        this$0.n78_1.k2($typefaceRequest, finalResult);
      } else {
        this$0.n78_1.l2($typefaceRequest);
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    this.m78_1 = createSynchronizedObject();
    this.n78_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).p78 = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m78_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.n78_1.s2(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.o78()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.n78_1.l2(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw new FontLoadFailedException(typefaceRequest.q78_1, cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m78_1;
    if (this.n78_1.s2(typefaceRequest) == null && currentTypefaceResult.o78()) {
      this.n78_1.k2(typefaceRequest, currentTypefaceResult);
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.q78_1 = fontFamily;
    this.r78_1 = fontWeight;
    this.s78_1 = fontStyle;
    this.t78_1 = fontSynthesis;
    this.u78_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).v78 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).w78 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.q78_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.r78_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.s78_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.t78_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.u78_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.v78(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.v78.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + toString_0(this.q78_1) + ', fontWeight=' + this.r78_1.toString() + ', fontStyle=' + FontStyle__toString_impl_thncxr(this.s78_1) + ', fontSynthesis=' + FontSynthesis__toString_impl_gunvr0(this.t78_1) + ', resourceLoaderCacheKey=' + toString_0(this.u78_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.q78_1 == null ? 0 : hashCode(this.q78_1);
    result = imul(result, 31) + this.r78_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.s78_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.t78_1) | 0;
    result = imul(result, 31) + (this.u78_1 == null ? 0 : hashCode(this.u78_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.q78_1, tmp0_other_with_cast.q78_1))
      return false;
    if (!this.r78_1.equals(tmp0_other_with_cast.r78_1))
      return false;
    if (!(this.s78_1 === tmp0_other_with_cast.s78_1))
      return false;
    if (!(this.t78_1 === tmp0_other_with_cast.t78_1))
      return false;
    if (!equals(this.u78_1, tmp0_other_with_cast.u78_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.x78_1 = value;
    this.y78_1 = cacheable;
  }
  protoOf(Immutable).c1 = function () {
    return this.x78_1;
  };
  protoOf(Immutable).o78 = function () {
    return this.y78_1;
  };
  function Async(current) {
    this.z78_1 = current;
  }
  protoOf(Async).c1 = function () {
    return this.z78_1.c1();
  };
  protoOf(Async).o78 = function () {
    return this.z78_1.g79_1;
  };
  function FontLoadFailedException(fontFamily, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Failed to load font ' + toString_0(fontFamily) + '. Is it installed on the system?', cause, this);
    captureStack(this, FontLoadFailedException);
  }
  function resolve($this, typefaceRequest) {
    var result = $this.j79_1.p78(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.w78(null)).c1();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.k79_1.p79($typefaceRequest, this$0.h79_1, onAsyncCompletion, this$0.m79_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.l79_1.p79($typefaceRequest, this$0.h79_1, onAsyncCompletion, this$0.m79_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw new FontLoadFailedException($typefaceRequest.q78_1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_17().q79_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.h79_1 = platformFontLoader;
    this.i79_1 = platformResolveInterceptor;
    this.j79_1 = typefaceRequestCache;
    this.k79_1 = fontListFontFamilyTypefaceAdapter;
    this.l79_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.m79_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).r79 = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.i79_1.s79(fontFamily), this.i79_1.t79(fontWeight), this.i79_1.u79(fontStyle), this.i79_1.v79(fontSynthesis), this.h79_1.w79()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.q79_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_5;
  function Companion_getInstance_17() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.x79_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.x79_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.x79_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.x79_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.x79_1, other);
  };
  function Key(font, loaderKey) {
    this.y79_1 = font;
    this.z79_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + toString(this.y79_1) + ', loaderKey=' + toString_0(this.z79_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.y79_1);
    result = imul(result, 31) + (this.z79_1 == null ? 0 : hashCode(this.z79_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.y79_1, tmp0_other_with_cast.y79_1))
      return false;
    if (!equals(this.z79_1, tmp0_other_with_cast.z79_1))
      return false;
    return true;
  };
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i7a_1 = _this__u8e3s4;
    this.j7a_1 = font;
    this.k7a_1 = platformFontLoader;
    this.l7a_1 = forever;
    this.m7a_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.n7a_1 = new Key(this.j7a_1, this.k7a_1.w79());
            this.i7a_1.r7a_1;
            var tmp0_elvis_lhs = this.i7a_1.p7a_1.s2(this.n7a_1);
            var priorResult = tmp0_elvis_lhs == null ? this.i7a_1.q7a_1.s2(this.n7a_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.x79_1);
            }

            this.s9_1 = 1;
            suspendResult = this.m7a_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.i7a_1.r7a_1;
            if (this_0 == null) {
              this.i7a_1.q7a_1.k2(this.n7a_1, new AsyncTypefaceResult(this.i7a_1.o7a_1));
            } else if (this.l7a_1) {
              this.i7a_1.q7a_1.k2(this.n7a_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.i7a_1.p7a_1.k2(this.n7a_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
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
  function AsyncTypefaceCache() {
    this.o7a_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.p7a_1 = LruCache_init_$Create$(16);
    this.q7a_1 = SimpleArrayMap_init_$Create$();
    this.r7a_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).s7a = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.w79());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r7a_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.q7a_1.k2(key, new AsyncTypefaceResult(this.o7a_1));
    } else if (forever) {
      tmp = this.q7a_1.k2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.p7a_1.k2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).t7a = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.s7a(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.s7a.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).u7a = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.w79());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r7a_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.p7a_1.s2(key);
    return tmp0_elvis_lhs == null ? this.q7a_1.s2(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).v7a = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var this_0 = $this.f79_1;
    value$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.e7b_1 = this$0;
    this.f7b_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).g7b = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncFontListLoader$load$slambda).ib = function ($completion) {
    return this.g7b($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.e7b_1.h7b(this.f7b_1, this);
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
  protoOf(AsyncFontListLoader$load$slambda).z25 = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.e7b_1, this.f7b_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.g7b($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.q7b_1 = this$0;
    this.r7b_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).t7b = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.b20($this$withTimeoutOrNull, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).ma = function (p1, $completion) {
    return this.t7b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.q7b_1.e79_1.u7b(this.r7b_1, this);
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).b20 = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.q7b_1, this.r7b_1, completion);
    i.s7b_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.t7b($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d7c_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 12;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.t9_1 = 11;
            var tmp_0 = this;
            tmp_0.g7c_1 = this.d7c_1.a79_1;
            this.h7c_1 = get_indices(this.g7c_1).m();
            this.s9_1 = 3;
            continue $sm;
          case 3:
            if (!this.h7c_1.n()) {
              this.s9_1 = 9;
              continue $sm;
            }

            this.i7c_1 = this.h7c_1.o();
            this.j7c_1 = this.g7c_1.u(this.i7c_1);
            var tmp_1 = this;
            tmp_1.k7c_1 = this.j7c_1;
            if (this.k7c_1.e78() === Companion_getInstance_19().h78_1) {
              this.s9_1 = 4;
              suspendResult = this.d7c_1.c79_1.v7a(this.k7c_1, this.d7c_1.e79_1, false, AsyncFontListLoader$load$slambda_0(this.d7c_1, this.k7c_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 7;
              continue $sm;
            }

          case 4:
            this.l7c_1 = suspendResult;
            if (!(this.l7c_1 == null)) {
              _set_value__lx0xdg(this.d7c_1, synthesizeTypeface(this.d7c_1.b79_1.t78_1, this.l7c_1, this.k7c_1, this.d7c_1.b79_1.r78_1, this.d7c_1.b79_1.s78_1));
              this.f7c_1 = Unit_instance;
              this.t9_1 = 12;
              this.s9_1 = 8;
              continue $sm;
            } else {
              this.s9_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.s9_1 = 6;
            continue $sm;
          case 6:
            this.s9_1 = 7;
            continue $sm;
          case 7:
            this.s9_1 = 3;
            continue $sm;
          case 8:
            this.t9_1 = 12;
            var shouldCache = get_isActive(this.y9());
            this.d7c_1.g79_1 = false;
            this.d7c_1.d79_1(new Immutable(this.d7c_1.c1(), shouldCache));
            return Unit_instance;
          case 9:
            this.e7c_1 = Unit_instance;
            this.t9_1 = 12;
            this.s9_1 = 10;
            continue $sm;
          case 10:
            this.t9_1 = 12;
            var shouldCache_0 = get_isActive(this.y9());
            this.d7c_1.g79_1 = false;
            this.d7c_1.d79_1(new Immutable(this.d7c_1.c1(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.t9_1 = 12;
            var t = this.v9_1;
            var shouldCache_1 = get_isActive(this.y9());
            this.d7c_1.g79_1 = false;
            this.d7c_1.d79_1(new Immutable(this.d7c_1.c1(), shouldCache_1));
            throw t;
          case 12:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 12) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u7c_1 = _this__u8e3s4;
    this.v7c_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.u7c_1, this.v7c_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w7c_1 = suspendResult;
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_1 = this.v9_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.v9_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.y9())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.w7c_1 = tmp_3;
              this.s9_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.v9_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.v9_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.y9().fa(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.h1c(this.y9(), IllegalStateException_init_$Create$_0('Unable to load font ' + toString(this.v7c_1), uncaughtFontLoadException));
                }
                tmp_5.w7c_1 = null;
                this.s9_1 = 4;
                continue $sm;
              } else {
                throw this.v9_1;
              }
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return this.w7c_1;
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
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.a79_1 = fontList;
    this.b79_1 = typefaceRequest;
    this.c79_1 = asyncTypefaceCache;
    this.d79_1 = onCompletion;
    this.e79_1 = platformFontLoader;
    this.f79_1 = mutableStateOf(initialType);
    this.g79_1 = true;
  }
  protoOf(AsyncFontListLoader).c1 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.f79_1;
    value$factory_0();
    return this_0.c1();
  };
  protoOf(AsyncFontListLoader).x7c = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncFontListLoader).h7b = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).h1c = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_instance;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    this.z7c_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.a7d_1 = new _no_name_provided__qut3iv();
  }
  var Companion_instance_6;
  function Companion_getInstance_18() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.j7d_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.j7d_1.x7c(this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).b20 = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.j7d_1, completion);
    i.k7d_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_18();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.n79_1 = asyncTypefaceCache;
    this.o79_1 = CoroutineScope_0(Companion_getInstance_18().a7d_1.hj(get_FontCacheManagementDispatcher()).hj(injectedContext).hj(SupervisorJob(injectedContext.fa(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).p79 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.q78_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_18().z7c_1.n7d(typefaceRequest.q78_1.m7d_1, typefaceRequest.r78_1, typefaceRequest.s78_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.n79_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.lb();
    var synthesizedTypeface = tmp0_container.mb();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.n79_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.o79_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.p() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.u(idx);
        var tmp1_subject = font.e78();
        if (tmp1_subject === Companion_getInstance_19().f78_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.r7a_1;
            var key = new Key(font, platformFontLoader.w79());
            var tmp0_elvis_lhs = asyncTypefaceCache.p7a_1.s2(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.q7a_1.s2(key) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.x79_1);
              break $l$block;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp;
            try {
              tmp = platformFontLoader.o7d(font);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof Exception) {
                var cause = $p;
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + toString(font), cause);
              } else {
                throw $p;
              }
            }
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.t7a(font, platformFontLoader, tmp);
            tmp$ret$0 = tmp;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_1;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + toString(font));
          } else {
            tmp_1 = tmp2_elvis_lhs;
          }
          var result = tmp_1;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.t78_1, result, font, typefaceRequest.r78_1, typefaceRequest.s78_1));
        } else if (tmp1_subject === Companion_getInstance_19().g78_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.r7a_1;
            var key_0 = new Key(font, platformFontLoader.w79());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.p7a_1.s2(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.q7a_1.s2(key_0) : tmp0_elvis_lhs_0;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.x79_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            // Inline function 'kotlin.Result.getOrNull' call
            // Inline function 'kotlin.runCatching' call
            var tmp_2;
            try {
              // Inline function 'kotlin.Companion.success' call
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              var value = platformFontLoader.o7d(font);
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }
            var this_0 = tmp_2;
            var tmp_4;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_4 = null;
            } else {
              var tmp_5 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
            }
            var this_1 = tmp_4;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.t7a(font, platformFontLoader, this_1);
            tmp$ret$5 = this_1;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.t78_1, result_0, font, typefaceRequest.r78_1, typefaceRequest.s78_1));
          }
        } else if (tmp1_subject === Companion_getInstance_19().h78_1) {
          var cacheResult = asyncTypefaceCache.u7a(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.e(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.x79_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.x79_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.t78_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.x79_1), font, typefaceRequest.r78_1, typefaceRequest.s78_1));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + toString(font));
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.c1();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_19().f78_1 ? 'Blocking' : $this === Companion_getInstance_19().g78_1 ? 'Optional' : $this === Companion_getInstance_19().h78_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.f78_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.g78_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.h78_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_7;
  function Companion_getInstance_19() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function FontMatcher() {
  }
  protoOf(FontMatcher).n7d = function (fontList, fontWeight, fontStyle) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(fontList.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.u(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.i5r().equals(fontWeight) && item.d78() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.j()) {
      return target;
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(fontList.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.p() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.u(index_0);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.d78() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.e(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (target_0.j()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp = fontList;
    } else {
      tmp = target_0;
    }
    var fontsToSearch = tmp;
    var tmp_0;
    if (fontWeight.p7d(Companion_getInstance_22().o73_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.p() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.u(index_1);
          var possibleWeight = font.i5r();
          if (!(null == null) && possibleWeight.p7d(null) < 0) {
            continue $l$loop_1;
          }
          if (!(null == null) && possibleWeight.p7d(null) > 0) {
            continue $l$loop_1;
          }
          if (possibleWeight.p7d(fontWeight) < 0) {
            if (bestWeightBelow == null || possibleWeight.p7d(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.p7d(fontWeight) > 0) {
            if (bestWeightAbove == null || possibleWeight.p7d(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_1;
      if (true) {
        var tmp1_elvis_lhs = bestWeightBelow;
        tmp_1 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove;
        tmp_1 = tmp2_elvis_lhs == null ? bestWeightBelow : tmp2_elvis_lhs;
      }
      var bestWeight = tmp_1;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.p());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.p() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.u(index_2);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.i5r().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.e(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_0 = target_1;
    } else if (fontWeight.p7d(Companion_getInstance_22().p73_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.p() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.u(index_3);
          var possibleWeight_0 = font_0.i5r();
          if (!(null == null) && possibleWeight_0.p7d(null) < 0) {
            continue $l$loop_4;
          }
          if (!(null == null) && possibleWeight_0.p7d(null) > 0) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.p7d(fontWeight) < 0) {
            if (bestWeightBelow_0 == null || possibleWeight_0.p7d(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.p7d(fontWeight) > 0) {
            if (bestWeightAbove_0 == null || possibleWeight_0.p7d(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_2;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_2 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_0;
        tmp_2 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_0 : tmp2_elvis_lhs_0;
      }
      var bestWeight_0 = tmp_2;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.p());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.p() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.u(index_4);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.i5r().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.e(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_0 = target_2;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_22().p73_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.p() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.u(index_5);
          var possibleWeight_1 = font_1.i5r();
          if (!(null == null) && possibleWeight_1.p7d(null) < 0) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) && possibleWeight_1.p7d(maxSearchRange) > 0) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.p7d(fontWeight) < 0) {
            if (bestWeightBelow_1 == null || possibleWeight_1.p7d(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.p7d(fontWeight) > 0) {
            if (bestWeightAbove_1 == null || possibleWeight_1.p7d(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_3 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_1 = bestWeightAbove_1;
        tmp_3 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_1;
      }
      var bestWeight_1 = tmp_3;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.p());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.p() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.u(index_6);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.i5r().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.e(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_4;
      if (target_3.j()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_22().p73_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.p() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.u(index_7);
            var possibleWeight_2 = font_2.i5r();
            if (!(minSearchRange == null) && possibleWeight_2.p7d(minSearchRange) < 0) {
              continue $l$loop_10;
            }
            if (!(null == null) && possibleWeight_2.p7d(null) > 0) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.p7d(fontWeight) < 0) {
              if (bestWeightBelow_2 == null || possibleWeight_2.p7d(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.p7d(fontWeight) > 0) {
              if (bestWeightAbove_2 == null || possibleWeight_2.p7d(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_5;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_5 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_2 = bestWeightAbove_2;
          tmp_5 = tmp2_elvis_lhs_2 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_2;
        }
        var bestWeight_2 = tmp_5;
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.p());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.p() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.u(index_8);
            // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.i5r().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.e(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_4 = target_4;
      } else {
        tmp_4 = target_3;
      }
      tmp_0 = tmp_4;
    }
    var result = tmp_0;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_20().h74_1 ? 'Normal' : $this === Companion_getInstance_20().i74_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.h74_1 = _FontStyle___init__impl__jcnduf(0);
    this.i74_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_20() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.h72_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_20();
    this.h72_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.h72_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.h72_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.h72_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_21().j74_1 ? 'None' : $this === Companion_getInstance_21().k74_1 ? 'All' : $this === Companion_getInstance_21().l74_1 ? 'Weight' : $this === Companion_getInstance_21().m74_1 ? 'Style' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.j74_1 = _FontSynthesis___init__impl__n397bg(0);
    this.k74_1 = _FontSynthesis___init__impl__n397bg(1);
    this.l74_1 = _FontSynthesis___init__impl__n397bg(2);
    this.m74_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  var Companion_instance_9;
  function Companion_getInstance_21() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.i72_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_21();
    this.i72_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.i72_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.i72_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.i72_1, other);
  };
  function Companion_9() {
    Companion_instance_10 = this;
    this.l73_1 = new FontWeight(100);
    this.m73_1 = new FontWeight(200);
    this.n73_1 = new FontWeight(300);
    this.o73_1 = new FontWeight(400);
    this.p73_1 = new FontWeight(500);
    this.q73_1 = new FontWeight(600);
    this.r73_1 = new FontWeight(700);
    this.s73_1 = new FontWeight(800);
    this.t73_1 = new FontWeight(900);
    this.u73_1 = this.l73_1;
    this.v73_1 = this.m73_1;
    this.w73_1 = this.n73_1;
    this.x73_1 = this.o73_1;
    this.y73_1 = this.p73_1;
    this.z73_1 = this.q73_1;
    this.a74_1 = this.r73_1;
    this.b74_1 = this.s73_1;
    this.c74_1 = this.t73_1;
    this.d74_1 = listOf([this.l73_1, this.m73_1, this.n73_1, this.o73_1, this.p73_1, this.q73_1, this.r73_1, this.s73_1, this.t73_1]);
  }
  var Companion_instance_10;
  function Companion_getInstance_22() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_22();
    this.t72_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.t72_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.t72_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(FontWeight).p7d = function (other) {
    return compareTo(this.t72_1, other.t72_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.p7d(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.t72_1 === other.t72_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.t72_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.t72_1 + ')';
  };
  function lerp_7(start, stop, fraction) {
    var weight = coerceIn(lerp_2(start.t72_1, stop.t72_1, fraction), 1, 1000);
    return new FontWeight(weight);
  }
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.q7d_1 = annotatedString;
    this.r7d_1 = newCursorPosition;
  }
  protoOf(CommitTextCommand).s7d = function () {
    return this.q7d_1.w6v_1;
  };
  protoOf(CommitTextCommand).t7d = function (buffer) {
    if (buffer.a7e()) {
      buffer.z7d(buffer.x7d_1, buffer.y7d_1, this.s7d());
    } else {
      buffer.z7d(buffer.v7d_1, buffer.w7d_1, this.s7d());
    }
    var newCursor = buffer.b7e();
    var tmp;
    if (this.r7d_1 > 0) {
      tmp = (newCursor + this.r7d_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.r7d_1 | 0) - this.s7d().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.d7e(coerceIn(newCursorInBuffer, 0, buffer.c7e()));
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.s7d() === other.s7d()))
      return false;
    if (!(this.r7d_1 === other.r7d_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.s7d());
    result = imul(31, result) + this.r7d_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.s7d() + "', newCursorPosition=" + this.r7d_1 + ')';
  };
  function SetComposingTextCommand_init_$Init$(text, newCursorPosition, $this) {
    SetComposingTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function SetComposingTextCommand_init_$Create$(text, newCursorPosition) {
    return SetComposingTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(SetComposingTextCommand)));
  }
  function SetComposingTextCommand(annotatedString, newCursorPosition) {
    this.e7e_1 = annotatedString;
    this.f7e_1 = newCursorPosition;
  }
  protoOf(SetComposingTextCommand).s7d = function () {
    return this.e7e_1.w6v_1;
  };
  protoOf(SetComposingTextCommand).t7d = function (buffer) {
    if (buffer.a7e()) {
      var compositionStart = buffer.x7d_1;
      buffer.z7d(buffer.x7d_1, buffer.y7d_1, this.s7d());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = this.s7d();
      if (charSequenceLength(this_0) > 0) {
        buffer.g7e(compositionStart, compositionStart + this.s7d().length | 0);
      }
    } else {
      var selectionStart = buffer.v7d_1;
      buffer.z7d(buffer.v7d_1, buffer.w7d_1, this.s7d());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_1 = this.s7d();
      if (charSequenceLength(this_1) > 0) {
        buffer.g7e(selectionStart, selectionStart + this.s7d().length | 0);
      }
    }
    var newCursor = buffer.b7e();
    var tmp;
    if (this.f7e_1 > 0) {
      tmp = (newCursor + this.f7e_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.f7e_1 | 0) - this.s7d().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.d7e(coerceIn(newCursorInBuffer, 0, buffer.c7e()));
  };
  protoOf(SetComposingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetComposingTextCommand))
      return false;
    if (!(this.s7d() === other.s7d()))
      return false;
    if (!(this.f7e_1 === other.f7e_1))
      return false;
    return true;
  };
  protoOf(SetComposingTextCommand).hashCode = function () {
    var result = getStringHashCode(this.s7d());
    result = imul(31, result) + this.f7e_1 | 0;
    return result;
  };
  protoOf(SetComposingTextCommand).toString = function () {
    return "SetComposingTextCommand(text='" + this.s7d() + "', newCursorPosition=" + this.f7e_1 + ')';
  };
  function SetComposingRegionCommand() {
  }
  function DeleteSurroundingTextCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.h7e_1 = lengthBeforeCursor;
    this.i7e_1 = lengthAfterCursor;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.h7e_1 >= 0 && this.i7e_1 >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.<anonymous>' call
      var message = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.h7e_1 + ' and ' + this.i7e_1 + ' respectively.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DeleteSurroundingTextCommand).t7d = function (buffer) {
    // Inline function 'androidx.compose.ui.text.input.addExactOrElse' call
    var this_0 = buffer.w7d_1;
    var right = this.i7e_1;
    var result = this_0 + right | 0;
    var tmp;
    if (((this_0 ^ result) & (right ^ result)) < 0) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.applyTo.<anonymous>' call
      tmp = buffer.c7e();
    } else {
      tmp = result;
    }
    var end = tmp;
    var tmp_0 = buffer.w7d_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = buffer.c7e();
    var tmp$ret$2 = Math.min(end, b);
    buffer.j7e(tmp_0, tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.input.subtractExactOrElse' call
    var this_1 = buffer.v7d_1;
    var right_0 = this.h7e_1;
    var result_0 = this_1 - right_0 | 0;
    var tmp_1;
    if (((this_1 ^ right_0) & (this_1 ^ result_0)) < 0) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.applyTo.<anonymous>' call
      tmp_1 = 0;
    } else {
      tmp_1 = result_0;
    }
    var start = tmp_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp$ret$5 = Math.max(0, start);
    buffer.j7e(tmp$ret$5, buffer.v7d_1);
  };
  protoOf(DeleteSurroundingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextCommand))
      return false;
    if (!(this.h7e_1 === other.h7e_1))
      return false;
    if (!(this.i7e_1 === other.i7e_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextCommand).hashCode = function () {
    var result = this.h7e_1;
    result = imul(31, result) + this.i7e_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextCommand).toString = function () {
    return 'DeleteSurroundingTextCommand(lengthBeforeCursor=' + this.h7e_1 + ', ' + ('lengthAfterCursor=' + this.i7e_1 + ')');
  };
  function DeleteSurroundingTextInCodePointsCommand() {
  }
  function SetSelectionCommand(start, end) {
    this.k7e_1 = start;
    this.l7e_1 = end;
  }
  protoOf(SetSelectionCommand).t7d = function (buffer) {
    var clampedStart = coerceIn(this.k7e_1, 0, buffer.c7e());
    var clampedEnd = coerceIn(this.l7e_1, 0, buffer.c7e());
    if (clampedStart < clampedEnd) {
      buffer.m7e(clampedStart, clampedEnd);
    } else {
      buffer.m7e(clampedEnd, clampedStart);
    }
  };
  protoOf(SetSelectionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetSelectionCommand))
      return false;
    if (!(this.k7e_1 === other.k7e_1))
      return false;
    if (!(this.l7e_1 === other.l7e_1))
      return false;
    return true;
  };
  protoOf(SetSelectionCommand).hashCode = function () {
    var result = this.k7e_1;
    result = imul(31, result) + this.l7e_1 | 0;
    return result;
  };
  protoOf(SetSelectionCommand).toString = function () {
    return 'SetSelectionCommand(start=' + this.k7e_1 + ', end=' + this.l7e_1 + ')';
  };
  function FinishComposingTextCommand() {
  }
  protoOf(FinishComposingTextCommand).t7d = function (buffer) {
    buffer.n7e();
  };
  protoOf(FinishComposingTextCommand).equals = function (other) {
    return other instanceof FinishComposingTextCommand;
  };
  protoOf(FinishComposingTextCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(FinishComposingTextCommand).toString = function () {
    return 'FinishComposingTextCommand()';
  };
  function BackspaceCommand() {
  }
  function MoveCursorCommand() {
  }
  function DeleteAllCommand() {
  }
  protoOf(DeleteAllCommand).t7d = function (buffer) {
    buffer.z7d(0, buffer.c7e(), '');
  };
  protoOf(DeleteAllCommand).equals = function (other) {
    return other instanceof DeleteAllCommand;
  };
  protoOf(DeleteAllCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(DeleteAllCommand).toString = function () {
    return 'DeleteAllCommand()';
  };
  function generateBatchErrorMessage($this, editCommands, failedCommand) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.EditProcessor.generateBatchErrorMessage.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var tmp = 'Error while applying EditCommand batch to buffer (' + ('length=' + $this.p7e_1.c7e() + ', ');
    var tmp_0 = $this.p7e_1.q7e();
    var value = tmp + ('composition=' + toString_0(tmp_0 == null ? null : new TextRange(tmp_0)) + ', ') + ('selection=' + TextRange__toString_impl_pqvlzl($this.p7e_1.r7e()) + '):');
    // Inline function 'kotlin.text.appendLine' call
    this_0.v8(value).w8(_Char___init__impl__6a9atx(10));
    joinTo(editCommands, this_0, '\n', VOID, VOID, VOID, VOID, EditProcessor$generateBatchErrorMessage$lambda(failedCommand, $this));
    return this_0.toString();
  }
  function toStringForLog(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof CommitTextCommand) {
      tmp = 'CommitTextCommand(text.length=' + _this__u8e3s4.s7d().length + ', newCursorPosition=' + _this__u8e3s4.r7d_1 + ')';
    } else {
      if (_this__u8e3s4 instanceof SetComposingTextCommand) {
        tmp = 'SetComposingTextCommand(text.length=' + _this__u8e3s4.s7d().length + ', ' + ('newCursorPosition=' + _this__u8e3s4.f7e_1 + ')');
      } else {
        if (_this__u8e3s4 instanceof SetComposingRegionCommand) {
          tmp = toString(_this__u8e3s4);
        } else {
          if (_this__u8e3s4 instanceof DeleteSurroundingTextCommand) {
            tmp = toString(_this__u8e3s4);
          } else {
            if (_this__u8e3s4 instanceof DeleteSurroundingTextInCodePointsCommand) {
              tmp = toString(_this__u8e3s4);
            } else {
              if (_this__u8e3s4 instanceof SetSelectionCommand) {
                tmp = toString(_this__u8e3s4);
              } else {
                if (_this__u8e3s4 instanceof FinishComposingTextCommand) {
                  tmp = toString(_this__u8e3s4);
                } else {
                  if (_this__u8e3s4 instanceof BackspaceCommand) {
                    tmp = toString(_this__u8e3s4);
                  } else {
                    if (_this__u8e3s4 instanceof MoveCursorCommand) {
                      tmp = toString(_this__u8e3s4);
                    } else {
                      if (_this__u8e3s4 instanceof DeleteAllCommand) {
                        tmp = toString(_this__u8e3s4);
                      } else {
                        var tmp1_elvis_lhs = getKClassFromExpression(_this__u8e3s4).pb();
                        tmp = 'Unknown EditCommand: ' + (tmp1_elvis_lhs == null ? '{anonymous EditCommand}' : tmp1_elvis_lhs);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function EditProcessor$generateBatchErrorMessage$lambda($failedCommand, this$0) {
    return function (it) {
      var prefix = $failedCommand === it ? ' > ' : '   ';
      return prefix + toStringForLog(it, this$0);
    };
  }
  function EditProcessor() {
    this.o7e_1 = new TextFieldValue(emptyAnnotatedString(), Companion_getInstance_14().s6z_1, null);
    this.p7e_1 = new EditingBuffer(this.o7e_1.s7e_1, this.o7e_1.t7e_1);
  }
  protoOf(EditProcessor).v7e = function (value, textInputSession) {
    var textChanged = false;
    var selectionChanged = false;
    var tmp = value.u7e_1;
    var tmp_0 = tmp == null ? null : new TextRange(tmp);
    var tmp_1 = this.p7e_1.q7e();
    var compositionChanged = !equals(tmp_0, tmp_1 == null ? null : new TextRange(tmp_1));
    if (!this.o7e_1.s7e_1.equals(value.s7e_1)) {
      this.p7e_1 = new EditingBuffer(value.s7e_1, value.t7e_1);
      textChanged = true;
    } else if (!equals(this.o7e_1.t7e_1, value.t7e_1)) {
      this.p7e_1.m7e(_TextRange___get_min__impl__uu95c4(value.t7e_1), _TextRange___get_max__impl__owm8m(value.t7e_1));
      selectionChanged = true;
    }
    var tmp_2 = value.u7e_1;
    if ((tmp_2 == null ? null : new TextRange(tmp_2)) == null) {
      this.p7e_1.n7e();
    } else {
      if (!_TextRange___get_collapsed__impl__cilesp(value.u7e_1)) {
        this.p7e_1.g7e(_TextRange___get_min__impl__uu95c4(value.u7e_1), _TextRange___get_max__impl__owm8m(value.u7e_1));
      }
    }
    var tmp_3;
    if (textChanged || (!selectionChanged && compositionChanged)) {
      this.p7e_1.n7e();
      tmp_3 = value.w7e(VOID, VOID, null);
    } else {
      tmp_3 = value;
    }
    var newValue = tmp_3;
    var oldValue = this.o7e_1;
    this.o7e_1 = newValue;
    if (textInputSession == null)
      null;
    else
      textInputSession.z7e(oldValue, newValue);
  };
  protoOf(EditProcessor).a7f = function (editCommands) {
    var lastCommand = null;
    try {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = editCommands.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = editCommands.u(index);
          // Inline function 'androidx.compose.ui.text.input.EditProcessor.apply.<anonymous>' call
          lastCommand = item;
          item.t7d(this.p7e_1);
        }
         while (inductionVariable <= last);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(generateBatchErrorMessage(this, editCommands, lastCommand), e);
      } else {
        throw $p;
      }
    }
    var tmp = this.p7e_1.b7f();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.EditProcessor.apply.<anonymous>' call
    var $this$run = this.p7e_1.r7e();
    // Inline function 'kotlin.takeUnless' call
    var this_0 = new TextRange($this$run);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.text.input.EditProcessor.apply.<anonymous>.<anonymous>' call
    this_0.h6z_1;
    if (!_TextRange___get_reversed__impl__emhnbm(this.o7e_1.t7e_1)) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    var tmp_1 = tmp_0;
    var tmp0_elvis_lhs = tmp_1 == null ? null : tmp_1.h6z_1;
    var tmp_2;
    var tmp_3 = tmp0_elvis_lhs;
    if ((tmp_3 == null ? null : new TextRange(tmp_3)) == null) {
      tmp_2 = TextRange_0(_TextRange___get_max__impl__owm8m($this$run), _TextRange___get_min__impl__uu95c4($this$run));
    } else {
      tmp_2 = tmp0_elvis_lhs;
    }
    var tmp$ret$3 = tmp_2;
    var newState = new TextFieldValue(tmp, tmp$ret$3, this.p7e_1.q7e());
    this.o7e_1 = newState;
    return newState;
  };
  protoOf(EditProcessor).c7f = function () {
    return this.o7e_1;
  };
  function Companion_10() {
    this.d7f_1 = -1;
  }
  var Companion_instance_11;
  function Companion_getInstance_23() {
    return Companion_instance_11;
  }
  function _set_selectionStart__65lsx($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionStart>.<anonymous>' call
      var message = 'Cannot set selectionStart to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.v7d_1 = value;
  }
  function _set_selectionEnd__2o1cag($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionEnd>.<anonymous>' call
      var message = 'Cannot set selectionEnd to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.w7d_1 = value;
  }
  function EditingBuffer(text, selection) {
    this.u7d_1 = new PartialGapBuffer(text.w6v_1);
    this.v7d_1 = _TextRange___get_min__impl__uu95c4(selection);
    this.w7d_1 = _TextRange___get_max__impl__owm8m(selection);
    this.x7d_1 = -1;
    this.y7d_1 = -1;
    var start = _TextRange___get_min__impl__uu95c4(selection);
    var end = _TextRange___get_max__impl__owm8m(selection);
    if (start < 0 || start > text.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text.a());
    }
    if (end < 0 || end > text.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
  }
  protoOf(EditingBuffer).a7e = function () {
    return !(this.x7d_1 === -1);
  };
  protoOf(EditingBuffer).q7e = function () {
    var tmp;
    if (this.a7e()) {
      tmp = TextRange_0(this.x7d_1, this.y7d_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(EditingBuffer).r7e = function () {
    return TextRange_0(this.v7d_1, this.w7d_1);
  };
  protoOf(EditingBuffer).d7e = function (cursor) {
    return this.m7e(cursor, cursor);
  };
  protoOf(EditingBuffer).b7e = function () {
    return this.v7d_1 === this.w7d_1 ? this.w7d_1 : -1;
  };
  protoOf(EditingBuffer).c7e = function () {
    return this.u7d_1.a();
  };
  protoOf(EditingBuffer).z7d = function (start, end, text) {
    if (start < 0 || start > this.u7d_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.u7d_1.a());
    }
    if (end < 0 || end > this.u7d_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.u7d_1.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.u7d_1.i7f(start, end, text);
    _set_selectionStart__65lsx(this, start + text.length | 0);
    _set_selectionEnd__2o1cag(this, start + text.length | 0);
    this.x7d_1 = -1;
    this.y7d_1 = -1;
  };
  protoOf(EditingBuffer).j7e = function (start, end) {
    var deleteRange = TextRange_0(start, end);
    this.u7d_1.i7f(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_0(this.v7d_1, this.w7d_1), deleteRange);
    _set_selectionStart__65lsx(this, _TextRange___get_min__impl__uu95c4(newSelection));
    _set_selectionEnd__2o1cag(this, _TextRange___get_max__impl__owm8m(newSelection));
    if (this.a7e()) {
      var compositionRange = TextRange_0(this.x7d_1, this.y7d_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__cilesp(newComposition)) {
        this.n7e();
      } else {
        this.x7d_1 = _TextRange___get_min__impl__uu95c4(newComposition);
        this.y7d_1 = _TextRange___get_max__impl__owm8m(newComposition);
      }
    }
  };
  protoOf(EditingBuffer).m7e = function (start, end) {
    if (start < 0 || start > this.u7d_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.u7d_1.a());
    }
    if (end < 0 || end > this.u7d_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.u7d_1.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    _set_selectionStart__65lsx(this, start);
    _set_selectionEnd__2o1cag(this, end);
  };
  protoOf(EditingBuffer).g7e = function (start, end) {
    if (start < 0 || start > this.u7d_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.u7d_1.a());
    }
    if (end < 0 || end > this.u7d_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.u7d_1.a());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.x7d_1 = start;
    this.y7d_1 = end;
  };
  protoOf(EditingBuffer).n7e = function () {
    this.x7d_1 = -1;
    this.y7d_1 = -1;
  };
  protoOf(EditingBuffer).toString = function () {
    return this.u7d_1.toString();
  };
  protoOf(EditingBuffer).b7f = function () {
    return AnnotatedString_init_$Create$(this.toString());
  };
  function updateRangeAfterDelete(target, deleted) {
    var targetMin = _TextRange___get_min__impl__uu95c4(target);
    var targetMax = _TextRange___get_max__impl__owm8m(target);
    if (TextRange__intersects_impl_mhtn49(deleted, target)) {
      if (TextRange__contains_impl_ws45z2(deleted, target)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMin;
      } else if (TextRange__contains_impl_ws45z2(target, deleted)) {
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else if (TextRange__contains_impl_ws45z2_0(deleted, targetMin)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else {
        targetMax = _TextRange___get_min__impl__uu95c4(deleted);
      }
    } else {
      if (targetMax > _TextRange___get_min__impl__uu95c4(deleted)) {
        targetMin = targetMin - _TextRange___get_length__impl__7qes3a(deleted) | 0;
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      }
    }
    return TextRange_0(targetMin, targetMax);
  }
  function Companion_11() {
    this.j7f_1 = 255;
    this.k7f_1 = 64;
    this.l7f_1 = -1;
  }
  var Companion_instance_12;
  function Companion_getInstance_24() {
    return Companion_instance_12;
  }
  function PartialGapBuffer(text) {
    this.e7f_1 = text;
    this.f7f_1 = null;
    this.g7f_1 = -1;
    this.h7f_1 = -1;
  }
  protoOf(PartialGapBuffer).a = function () {
    var tmp0_elvis_lhs = this.f7f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.e7f_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.e7f_1.length - (this.h7f_1 - this.g7f_1 | 0) | 0) + buffer.q7f() | 0;
  };
  protoOf(PartialGapBuffer).i7f = function (start, end, text) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      var message = 'start index must be less than or equal to end index: ' + start + ' > ' + end;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      var message_0 = 'start must be non-negative, but was ' + start;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var buffer = this.f7f_1;
    if (buffer == null) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = text.length + 128 | 0;
      var tmp$ret$2 = Math.max(255, b);
      var charArray_0 = charArray(tmp$ret$2);
      // Inline function 'kotlin.comparisons.minOf' call
      var leftCopyCount = Math.min(start, 64);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.e7f_1.length - end | 0;
      var rightCopyCount = Math.min(a, 64);
      toCharArray_0(this.e7f_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray_0(this.e7f_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray(text, charArray_0, leftCopyCount);
      this.f7f_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.g7f_1 = start - leftCopyCount | 0;
      this.h7f_1 = end + rightCopyCount | 0;
      return Unit_instance;
    }
    var bufferStart = start - this.g7f_1 | 0;
    var bufferEnd = end - this.g7f_1 | 0;
    if (bufferStart < 0 || bufferEnd > buffer.q7f()) {
      this.e7f_1 = this.toString();
      this.f7f_1 = null;
      this.g7f_1 = -1;
      this.h7f_1 = -1;
      return this.i7f(start, end, text);
    }
    buffer.i7f(bufferStart, bufferEnd, text);
  };
  protoOf(PartialGapBuffer).toString = function () {
    var tmp0_elvis_lhs = this.f7f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.e7f_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.gd(this.e7f_1, 0, this.g7f_1);
    b.r7f(sb);
    sb.gd(this.e7f_1, this.h7f_1, this.e7f_1.length);
    return sb.toString();
  };
  function gapLength($this) {
    return $this.p7f_1 - $this.o7f_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    if (requestSize <= gapLength($this)) {
      return Unit_instance;
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.m7f_1, 2);
    while ((newCapacity - $this.m7f_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.n7f_1;
    var endIndex = $this.o7f_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newBuffer, 0, 0, endIndex);
    var tailLength = $this.m7f_1 - $this.p7f_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.n7f_1;
    var startIndex = $this.p7f_1;
    var endIndex_0 = $this.p7f_1 + tailLength | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newBuffer, newEnd, startIndex, endIndex_0);
    $this.n7f_1 = newBuffer;
    $this.m7f_1 = newCapacity;
    $this.p7f_1 = newEnd;
  }
  function delete_0($this, start, end) {
    if (start < $this.o7f_1 && end <= $this.o7f_1) {
      var copyLen = $this.o7f_1 - end | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.n7f_1;
      var destination = $this.n7f_1;
      var destinationOffset = $this.p7f_1 - copyLen | 0;
      var endIndex = $this.o7f_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, destinationOffset, end, endIndex);
      $this.o7f_1 = start;
      $this.p7f_1 = $this.p7f_1 - copyLen | 0;
    } else if (start < $this.o7f_1 && end >= $this.o7f_1) {
      $this.p7f_1 = end + gapLength($this) | 0;
      $this.o7f_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.p7f_1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.n7f_1;
      var destination_0 = $this.n7f_1;
      var destinationOffset_0 = $this.o7f_1;
      var startIndex = $this.p7f_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination_0, destinationOffset_0, startIndex, startInBuffer);
      $this.o7f_1 = $this.o7f_1 + copyLen_0 | 0;
      $this.p7f_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    this.m7f_1 = initBuffer.length;
    this.n7f_1 = initBuffer;
    this.o7f_1 = initGapStart;
    this.p7f_1 = initGapEnd;
  }
  protoOf(GapBuffer).i7f = function (start, end, text) {
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    toCharArray(text, this.n7f_1, this.o7f_1);
    this.o7f_1 = this.o7f_1 + text.length | 0;
  };
  protoOf(GapBuffer).r7f = function (builder) {
    appendPartOfCharArray(builder, this.n7f_1, 0, this.o7f_1);
    appendPartOfCharArray(builder, this.n7f_1, this.p7f_1, this.m7f_1 - this.p7f_1 | 0);
  };
  protoOf(GapBuffer).q7f = function () {
    return this.m7f_1 - gapLength(this) | 0;
  };
  protoOf(GapBuffer).toString = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.GapBuffer.toString.<anonymous>' call
    this_0.f(this_0);
    return this_0.toString();
  };
  function toCharArray(_this__u8e3s4, destination, destinationOffset) {
    return toCharArray_0(_this__u8e3s4, destination, destinationOffset, 0, _this__u8e3s4.length);
  }
  function _ImeAction___init__impl__ucgwde(value) {
    return value;
  }
  function ImeAction__toString_impl_r8bdhy($this) {
    return $this === Companion_getInstance_25().s7f_1 ? 'Unspecified' : $this === Companion_getInstance_25().u7f_1 ? 'None' : $this === Companion_getInstance_25().t7f_1 ? 'Default' : $this === Companion_getInstance_25().v7f_1 ? 'Go' : $this === Companion_getInstance_25().w7f_1 ? 'Search' : $this === Companion_getInstance_25().x7f_1 ? 'Send' : $this === Companion_getInstance_25().y7f_1 ? 'Previous' : $this === Companion_getInstance_25().z7f_1 ? 'Next' : $this === Companion_getInstance_25().a7g_1 ? 'Done' : 'Invalid';
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.s7f_1 = _ImeAction___init__impl__ucgwde(-1);
    this.t7f_1 = _ImeAction___init__impl__ucgwde(1);
    this.u7f_1 = _ImeAction___init__impl__ucgwde(0);
    this.v7f_1 = _ImeAction___init__impl__ucgwde(2);
    this.w7f_1 = _ImeAction___init__impl__ucgwde(3);
    this.x7f_1 = _ImeAction___init__impl__ucgwde(4);
    this.y7f_1 = _ImeAction___init__impl__ucgwde(5);
    this.z7f_1 = _ImeAction___init__impl__ucgwde(6);
    this.a7g_1 = _ImeAction___init__impl__ucgwde(7);
  }
  var Companion_instance_13;
  function Companion_getInstance_25() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function ImeAction__hashCode_impl_m1mrob($this) {
    return $this;
  }
  function ImeAction__equals_impl_tgas09($this, other) {
    if (!(other instanceof ImeAction))
      return false;
    if (!($this === (other instanceof ImeAction ? other.b7g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImeAction(value) {
    Companion_getInstance_25();
    this.b7g_1 = value;
  }
  protoOf(ImeAction).toString = function () {
    return ImeAction__toString_impl_r8bdhy(this.b7g_1);
  };
  protoOf(ImeAction).hashCode = function () {
    return ImeAction__hashCode_impl_m1mrob(this.b7g_1);
  };
  protoOf(ImeAction).equals = function (other) {
    return ImeAction__equals_impl_tgas09(this.b7g_1, other);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.c7g_1 = new ImeOptions();
  }
  var Companion_instance_14;
  function Companion_getInstance_26() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, hintLocales) {
    Companion_getInstance_26();
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_27().e7g_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_28().j7g_1 : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_25().t7f_1 : imeAction;
    platformImeOptions = platformImeOptions === VOID ? null : platformImeOptions;
    hintLocales = hintLocales === VOID ? Companion_getInstance_33().v74_1 : hintLocales;
    this.s7g_1 = singleLine;
    this.t7g_1 = capitalization;
    this.u7g_1 = autoCorrect;
    this.v7g_1 = keyboardType;
    this.w7g_1 = imeAction;
    this.x7g_1 = platformImeOptions;
    this.y7g_1 = hintLocales;
  }
  protoOf(ImeOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    if (!(this.s7g_1 === other.s7g_1))
      return false;
    if (!(this.t7g_1 === other.t7g_1))
      return false;
    if (!(this.u7g_1 === other.u7g_1))
      return false;
    if (!(this.v7g_1 === other.v7g_1))
      return false;
    if (!(this.w7g_1 === other.w7g_1))
      return false;
    if (!equals(this.x7g_1, other.x7g_1))
      return false;
    if (!this.y7g_1.equals(other.y7g_1))
      return false;
    return true;
  };
  protoOf(ImeOptions).hashCode = function () {
    var result = getBooleanHashCode(this.s7g_1);
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_6ibuz5(this.t7g_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.u7g_1) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_mw6m33(this.v7g_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_m1mrob(this.w7g_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.x7g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + this.y7g_1.hashCode() | 0;
    return result;
  };
  protoOf(ImeOptions).toString = function () {
    return 'ImeOptions(singleLine=' + this.s7g_1 + ', capitalization=' + KeyboardCapitalization__toString_impl_f8u1tq(this.t7g_1) + ', ' + ('autoCorrect=' + this.u7g_1 + ', keyboardType=' + KeyboardType__toString_impl_150pa8(this.v7g_1) + ', imeAction=' + ImeAction__toString_impl_r8bdhy(this.w7g_1) + ', ') + ('platformImeOptions=' + toString_0(this.x7g_1) + ', hintLocales=' + this.y7g_1.toString() + ')');
  };
  function _KeyboardCapitalization___init__impl__fmdpvi(value) {
    return value;
  }
  function KeyboardCapitalization__toString_impl_f8u1tq($this) {
    return $this === Companion_getInstance_27().d7g_1 ? 'Unspecified' : $this === Companion_getInstance_27().e7g_1 ? 'None' : $this === Companion_getInstance_27().f7g_1 ? 'Characters' : $this === Companion_getInstance_27().g7g_1 ? 'Words' : $this === Companion_getInstance_27().h7g_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_15 = this;
    this.d7g_1 = _KeyboardCapitalization___init__impl__fmdpvi(-1);
    this.e7g_1 = _KeyboardCapitalization___init__impl__fmdpvi(0);
    this.f7g_1 = _KeyboardCapitalization___init__impl__fmdpvi(1);
    this.g7g_1 = _KeyboardCapitalization___init__impl__fmdpvi(2);
    this.h7g_1 = _KeyboardCapitalization___init__impl__fmdpvi(3);
  }
  var Companion_instance_15;
  function Companion_getInstance_27() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function KeyboardCapitalization__hashCode_impl_6ibuz5($this) {
    return $this;
  }
  function KeyboardCapitalization__equals_impl_dba8wb($this, other) {
    if (!(other instanceof KeyboardCapitalization))
      return false;
    if (!($this === (other instanceof KeyboardCapitalization ? other.z7g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    Companion_getInstance_27();
    this.z7g_1 = value;
  }
  protoOf(KeyboardCapitalization).toString = function () {
    return KeyboardCapitalization__toString_impl_f8u1tq(this.z7g_1);
  };
  protoOf(KeyboardCapitalization).hashCode = function () {
    return KeyboardCapitalization__hashCode_impl_6ibuz5(this.z7g_1);
  };
  protoOf(KeyboardCapitalization).equals = function (other) {
    return KeyboardCapitalization__equals_impl_dba8wb(this.z7g_1, other);
  };
  function _KeyboardType___init__impl__csir7k(value) {
    return value;
  }
  function KeyboardType__toString_impl_150pa8($this) {
    return $this === Companion_getInstance_28().i7g_1 ? 'Unspecified' : $this === Companion_getInstance_28().j7g_1 ? 'Text' : $this === Companion_getInstance_28().k7g_1 ? 'Ascii' : $this === Companion_getInstance_28().l7g_1 ? 'Number' : $this === Companion_getInstance_28().m7g_1 ? 'Phone' : $this === Companion_getInstance_28().n7g_1 ? 'Uri' : $this === Companion_getInstance_28().o7g_1 ? 'Email' : $this === Companion_getInstance_28().p7g_1 ? 'Password' : $this === Companion_getInstance_28().q7g_1 ? 'NumberPassword' : $this === Companion_getInstance_28().r7g_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_16 = this;
    this.i7g_1 = _KeyboardType___init__impl__csir7k(0);
    this.j7g_1 = _KeyboardType___init__impl__csir7k(1);
    this.k7g_1 = _KeyboardType___init__impl__csir7k(2);
    this.l7g_1 = _KeyboardType___init__impl__csir7k(3);
    this.m7g_1 = _KeyboardType___init__impl__csir7k(4);
    this.n7g_1 = _KeyboardType___init__impl__csir7k(5);
    this.o7g_1 = _KeyboardType___init__impl__csir7k(6);
    this.p7g_1 = _KeyboardType___init__impl__csir7k(7);
    this.q7g_1 = _KeyboardType___init__impl__csir7k(8);
    this.r7g_1 = _KeyboardType___init__impl__csir7k(9);
  }
  var Companion_instance_16;
  function Companion_getInstance_28() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function KeyboardType__hashCode_impl_mw6m33($this) {
    return $this;
  }
  function KeyboardType__equals_impl_1eug1f($this, other) {
    if (!(other instanceof KeyboardType))
      return false;
    if (!($this === (other instanceof KeyboardType ? other.a7h_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardType(value) {
    Companion_getInstance_28();
    this.a7h_1 = value;
  }
  protoOf(KeyboardType).toString = function () {
    return KeyboardType__toString_impl_150pa8(this.a7h_1);
  };
  protoOf(KeyboardType).hashCode = function () {
    return KeyboardType__hashCode_impl_mw6m33(this.a7h_1);
  };
  protoOf(KeyboardType).equals = function (other) {
    return KeyboardType__equals_impl_1eug1f(this.a7h_1, other);
  };
  function OffsetMapping$Companion$Identity$1() {
  }
  protoOf(OffsetMapping$Companion$Identity$1).b7h = function (offset) {
    return offset;
  };
  protoOf(OffsetMapping$Companion$Identity$1).c7h = function (offset) {
    return offset;
  };
  function Companion_16() {
    Companion_instance_17 = this;
    var tmp = this;
    tmp.d7h_1 = new OffsetMapping$Companion$Identity$1();
  }
  var Companion_instance_17;
  function Companion_getInstance_29() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function TextFieldValue$Companion$Saver$lambda($this$Saver, it) {
    return arrayListOf([save_0(it.s7e_1, get_AnnotatedStringSaver(), $this$Saver), save_0(new TextRange(it.t7e_1), get_Saver_10(Companion_getInstance_14()), $this$Saver)]);
  }
  function TextFieldValue$Companion$Saver$lambda_0(it) {
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.u(0);
      var saver = get_AnnotatedStringSaver();
      var tmp;
      if (equals(value, false)) {
        tmp = !isInterface(saver, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (value == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = saver.v5e(value);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof AnnotatedString) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_2 = ensureNotNull(tmp$ret$0);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.u(1);
      var saver_0 = get_Saver_10(Companion_getInstance_14());
      var tmp_3;
      if (equals(value_0, false)) {
        tmp_3 = !isInterface(saver_0, NonNullValueClassSaver);
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_4;
      if (value_0 == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_5 = saver_0.v5e(value_0);
        var tmp_6;
        if (tmp_5 == null ? true : tmp_5 instanceof TextRange) {
          var tmp_7 = tmp_5;
          tmp_6 = tmp_7 == null ? null : tmp_7.h6z_1;
        } else {
          tmp_6 = THROW_CCE();
        }
        var tmp_8 = tmp_6;
        var tmp_9 = tmp_8 == null ? null : new TextRange(tmp_8);
        tmp_4 = tmp_9 == null ? null : tmp_9.h6z_1;
      }
      tmp$ret$5 = tmp_4;
    }
    var tmp_10 = tmp$ret$5;
    return new TextFieldValue(tmp_2, ensureNotNull(tmp_10 == null ? null : new TextRange(tmp_10)).h6z_1);
  }
  function TextFieldValue_init_$Init$(text, selection, composition, $this) {
    text = text === VOID ? '' : text;
    selection = selection === VOID ? Companion_getInstance_14().s6z_1 : selection;
    composition = composition === VOID ? null : composition;
    TextFieldValue.call($this, AnnotatedString_init_$Create$(text), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(text, selection, composition) {
    return TextFieldValue_init_$Init$(text, selection, composition, objectCreate(protoOf(TextFieldValue)));
  }
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda;
    tmp.e7h_1 = Saver_0(tmp_0, TextFieldValue$Companion$Saver$lambda_0);
  }
  var Companion_instance_18;
  function Companion_getInstance_30() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    Companion_getInstance_30();
    selection = selection === VOID ? Companion_getInstance_14().s6z_1 : selection;
    composition = composition === VOID ? null : composition;
    this.s7e_1 = annotatedString;
    this.t7e_1 = coerceIn_1(selection, 0, this.s7d().length);
    var tmp = this;
    var tmp_0;
    var tmp_1 = composition;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = coerceIn_1(composition, 0, this.s7d().length);
    }
    tmp.u7e_1 = tmp_0;
  }
  protoOf(TextFieldValue).s7d = function () {
    return this.s7e_1.w6v_1;
  };
  protoOf(TextFieldValue).f7h = function (annotatedString, selection, composition) {
    return new TextFieldValue(annotatedString, selection, composition);
  };
  protoOf(TextFieldValue).w7e = function (annotatedString, selection, composition, $super) {
    annotatedString = annotatedString === VOID ? this.s7e_1 : annotatedString;
    selection = selection === VOID ? this.t7e_1 : selection;
    composition = composition === VOID ? this.u7e_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.f7h(annotatedString, selection, composition);
    } else {
      var tmp_0 = $super.f7h;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, annotatedString, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).g7h = function (text, selection, composition) {
    return new TextFieldValue(AnnotatedString_init_$Create$(text), selection, composition);
  };
  protoOf(TextFieldValue).h7h = function (text, selection, composition, $super) {
    selection = selection === VOID ? this.t7e_1 : selection;
    composition = composition === VOID ? this.u7e_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.g7h(text, selection, composition);
    } else {
      var tmp_0 = $super.g7h;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, text, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextFieldValue))
      return false;
    var tmp;
    var tmp_0;
    if (equals(this.t7e_1, other.t7e_1)) {
      var tmp_1 = this.u7e_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.u7e_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.s7e_1.equals(other.s7e_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextFieldValue).hashCode = function () {
    var result = this.s7e_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_3zpp6q(this.t7e_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.u7e_1;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = TextRange__hashCode_impl_3zpp6q(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextFieldValue).toString = function () {
    var tmp = 'TextFieldValue(' + ("text='" + this.s7e_1.toString() + "', ") + ('selection=' + TextRange__toString_impl_pqvlzl(this.t7e_1) + ', ');
    var tmp_0 = this.u7e_1;
    return tmp + ('composition=' + toString_0(tmp_0 == null ? null : new TextRange(tmp_0)) + ')');
  };
  function getSelectedText(_this__u8e3s4) {
    return _this__u8e3s4.s7e_1.l6w(_this__u8e3s4.t7e_1);
  }
  function getTextAfterSelection(_this__u8e3s4, maxChars) {
    var tmp = _TextRange___get_max__impl__owm8m(_this__u8e3s4.t7e_1);
    // Inline function 'kotlin.math.min' call
    var a = _TextRange___get_max__impl__owm8m(_this__u8e3s4.t7e_1) + maxChars | 0;
    var b = _this__u8e3s4.s7d().length;
    var tmp$ret$0 = Math.min(a, b);
    return _this__u8e3s4.s7e_1.c(tmp, tmp$ret$0);
  }
  function getTextBeforeSelection(_this__u8e3s4, maxChars) {
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_min__impl__uu95c4(_this__u8e3s4.t7e_1) - maxChars | 0;
    var tmp$ret$0 = Math.max(0, b);
    return _this__u8e3s4.s7e_1.c(tmp$ret$0, _TextRange___get_min__impl__uu95c4(_this__u8e3s4.t7e_1));
  }
  function TextInputService(platformTextInputService) {
    this.i7h_1 = platformTextInputService;
    this.j7h_1 = new AtomicReference(null);
  }
  protoOf(TextInputService).k7h = function () {
    return this.j7h_1.dq();
  };
  protoOf(TextInputService).m7h = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    this.i7h_1.n7h(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.i7h_1);
    this.j7h_1.t2e(nextSession);
    return nextSession;
  };
  protoOf(TextInputService).o7h = function (session) {
    if (this.j7h_1.f1y(session, null)) {
      this.i7h_1.p7h();
    }
  };
  protoOf(TextInputService).q7h = function () {
    if (!(this.k7h() == null)) {
      this.i7h_1.q7h();
    }
  };
  protoOf(TextInputService).r7h = function () {
    return this.i7h_1.r7h();
  };
  function PlatformTextInputService() {
  }
  function TextInputSession(textInputService, platformTextInputService) {
    this.x7e_1 = textInputService;
    this.y7e_1 = platformTextInputService;
  }
  protoOf(TextInputSession).v7h = function () {
    return equals(this.x7e_1.k7h(), this);
  };
  protoOf(TextInputSession).v18 = function () {
    this.x7e_1.o7h(this);
  };
  protoOf(TextInputSession).w7h = function (rect) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.v7h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.notifyFocusedRect.<anonymous>' call
      this.y7e_1.t7h(rect);
    }
    return this_0;
  };
  protoOf(TextInputSession).x7h = function (textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.v7h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.updateTextLayoutResult.<anonymous>' call
      this.y7e_1.u7h(textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds);
    }
    return this_0;
  };
  protoOf(TextInputSession).z7e = function (oldValue, newValue) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.v7h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.updateState.<anonymous>' call
      this.y7e_1.s7h(oldValue, newValue);
    }
    return this_0;
  };
  function sam$androidx_compose_ui_text_input_VisualTransformation$0(function_0) {
    this.y7h_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).z7h = function (text) {
    return this.y7h_1(text);
  };
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).x3 = function () {
    return this.y7h_1;
  };
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, VisualTransformation) : false) {
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
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function VisualTransformation$Companion$None$lambda(text) {
    return new TransformedText(text, Companion_getInstance_29().d7h_1);
  }
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = VisualTransformation$Companion$None$lambda;
    tmp.a7i_1 = new sam$androidx_compose_ui_text_input_VisualTransformation$0(tmp_0);
  }
  var Companion_instance_19;
  function Companion_getInstance_31() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function VisualTransformation() {
  }
  function TransformedText(text, offsetMapping) {
    this.b7i_1 = text;
    this.c7i_1 = offsetMapping;
  }
  protoOf(TransformedText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransformedText))
      return false;
    if (!this.b7i_1.equals(other.b7i_1))
      return false;
    if (!equals(this.c7i_1, other.c7i_1))
      return false;
    return true;
  };
  protoOf(TransformedText).hashCode = function () {
    var result = this.b7i_1.hashCode();
    result = imul(31, result) + hashCode(this.c7i_1) | 0;
    return result;
  };
  protoOf(TransformedText).toString = function () {
    return 'TransformedText(text=' + this.b7i_1.toString() + ', offsetMapping=' + toString(this.c7i_1) + ')';
  };
  function PasswordVisualTransformation(mask) {
    mask = mask === VOID ? _Char___init__impl__6a9atx(8226) : mask;
    this.d7i_1 = mask;
  }
  protoOf(PasswordVisualTransformation).z7h = function (text) {
    return new TransformedText(AnnotatedString_init_$Create$(repeat(toString_1(this.d7i_1), text.w6v_1.length)), Companion_getInstance_29().d7h_1);
  };
  protoOf(PasswordVisualTransformation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PasswordVisualTransformation))
      return false;
    if (!(this.d7i_1 === other.d7i_1))
      return false;
    return true;
  };
  protoOf(PasswordVisualTransformation).hashCode = function () {
    return Char__hashCode_impl_otmys(this.d7i_1);
  };
  function Companion_19() {
  }
  protoOf(Companion_19).k2m = function () {
    return get_platformLocaleDelegate().k2m().u(0);
  };
  var Companion_instance_20;
  function Companion_getInstance_32() {
    return Companion_instance_20;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().e7i(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    this.w72_1 = platformLocale;
  }
  protoOf(Locale).f7i = function () {
    return get_language(this.w72_1);
  };
  protoOf(Locale).g7i = function () {
    return get_region(this.w72_1);
  };
  protoOf(Locale).x72 = function () {
    return getLanguageTag(this.w72_1);
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.x72() === other.x72();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.x72());
  };
  protoOf(Locale).toString = function () {
    return this.x72();
  };
  function Companion_20() {
    Companion_instance_21 = this;
    this.v74_1 = new LocaleList(emptyList());
  }
  protoOf(Companion_20).k2m = function () {
    return get_platformLocaleDelegate().k2m();
  };
  var Companion_instance_21;
  function Companion_getInstance_33() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function LocaleList(localeList) {
    Companion_getInstance_33();
    this.u72_1 = localeList;
    this.v72_1 = this.u72_1.p();
  }
  protoOf(LocaleList).u = function (i) {
    return this.u72_1.u(i);
  };
  protoOf(LocaleList).p = function () {
    return this.v72_1;
  };
  protoOf(LocaleList).h7i = function (element) {
    return this.u72_1.v(element);
  };
  protoOf(LocaleList).v = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.h7i(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).i7i = function (elements) {
    return this.u72_1.g2(elements);
  };
  protoOf(LocaleList).g2 = function (elements) {
    return this.i7i(elements);
  };
  protoOf(LocaleList).j = function () {
    return this.u72_1.j();
  };
  protoOf(LocaleList).m = function () {
    return this.u72_1.m();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.u72_1, other.u72_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.u72_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + toString(this.u72_1) + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function get_FontCacheManagementDispatcher() {
    _init_properties_Dispatcher_kt__c4qz95();
    return FontCacheManagementDispatcher;
  }
  var FontCacheManagementDispatcher;
  var properties_initialized_Dispatcher_kt_c7cauv;
  function _init_properties_Dispatcher_kt__c4qz95() {
    if (!properties_initialized_Dispatcher_kt_c7cauv) {
      properties_initialized_Dispatcher_kt_c7cauv = true;
      FontCacheManagementDispatcher = Dispatchers_getInstance().e1h();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_21() {
    Companion_instance_22 = this;
    this.s74_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.t74_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.u74_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_22;
  function Companion_getInstance_34() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.j72_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_34();
    this.j72_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.j72_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.j72_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.j72_1, other);
  };
  function lerp_8(start, stop, fraction) {
    return _BaselineShift___init__impl__scj05g(lerp_3(_BaselineShift___get_multiplier__impl__qhmjek(start), _BaselineShift___get_multiplier__impl__qhmjek(stop), fraction));
  }
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_22() {
    Companion_instance_23 = this;
    this.r70_1 = _Hyphens___init__impl__m2cvg8(1);
    this.s70_1 = _Hyphens___init__impl__m2cvg8(2);
    this.t70_1 = _Hyphens___init__impl__m2cvg8(-2147483648);
  }
  var Companion_instance_23;
  function Companion_getInstance_35() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_35().r70_1 ? 'Hyphens.None' : $this === Companion_getInstance_35().s70_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_35().t70_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.b71_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_35();
    this.b71_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.b71_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.b71_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.b71_1, other);
  };
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40($this);
    return tmp0_subject === _get_value__a43j40(Companion_getInstance_36().l7i_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40(Companion_getInstance_36().m7i_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40(Companion_getInstance_36().n7i_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40(Companion_getInstance_36().o7i_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_24 = this;
    this.j7i_1 = 1;
    this.k7i_1 = 16;
    this.l7i_1 = _Trim___init__impl__tcc1lr(1);
    this.m7i_1 = _Trim___init__impl__tcc1lr(16);
    this.n7i_1 = _Trim___init__impl__tcc1lr(17);
    this.o7i_1 = _Trim___init__impl__tcc1lr(0);
  }
  var Companion_instance_24;
  function Companion_getInstance_36() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_get_value__a43j40($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_get_value__a43j40($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    // Inline function 'kotlin.check' call
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.text.style.Alignment.<anonymous>' call
      var message = 'topRatio should be in [0..1] range or -1';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_37().p7i_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_37().q7i_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_37().r7i_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_37().s7i_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_24() {
    Companion_instance_25 = this;
    this.p7i_1 = _Alignment___init__impl__it107q(0.0);
    this.q7i_1 = _Alignment___init__impl__it107q(0.5);
    this.r7i_1 = _Alignment___init__impl__it107q(-1.0);
    this.s7i_1 = _Alignment___init__impl__it107q(1.0);
  }
  var Companion_instance_25;
  function Companion_getInstance_37() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Companion_25() {
    Companion_instance_26 = this;
    this.t7i_1 = new LineHeightStyle(Companion_getInstance_37().r7i_1, Companion_getInstance_36().n7i_1);
  }
  var Companion_instance_26;
  function Companion_getInstance_38() {
    if (Companion_instance_26 == null)
      new Companion_25();
    return Companion_instance_26;
  }
  function LineHeightStyle(alignment, trim) {
    Companion_getInstance_38();
    this.u7i_1 = alignment;
    this.v7i_1 = trim;
  }
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.u7i_1, other.u7i_1))
      return false;
    if (!(this.v7i_1 === other.v7i_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.u7i_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.v7i_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + Alignment__toString_impl_on6yhu(this.u7i_1) + ', ') + ('trim=' + Trim__toString_impl_hxcm0x(this.v7i_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_instance;
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_39().g70_1 ? 'Left' : $this === Companion_getInstance_39().h70_1 ? 'Right' : $this === Companion_getInstance_39().i70_1 ? 'Center' : $this === Companion_getInstance_39().j70_1 ? 'Justify' : $this === Companion_getInstance_39().k70_1 ? 'Start' : $this === Companion_getInstance_39().l70_1 ? 'End' : $this === Companion_getInstance_39().m70_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_26() {
    Companion_instance_27 = this;
    this.g70_1 = _TextAlign___init__impl__99wz4v(1);
    this.h70_1 = _TextAlign___init__impl__99wz4v(2);
    this.i70_1 = _TextAlign___init__impl__99wz4v(3);
    this.j70_1 = _TextAlign___init__impl__99wz4v(4);
    this.k70_1 = _TextAlign___init__impl__99wz4v(5);
    this.l70_1 = _TextAlign___init__impl__99wz4v(6);
    this.m70_1 = _TextAlign___init__impl__99wz4v(-2147483648);
  }
  var Companion_instance_27;
  function Companion_getInstance_39() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.y70_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_39();
    this.y70_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.y70_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.y70_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.y70_1, other);
  };
  function Companion_27() {
    Companion_instance_28 = this;
    this.w74_1 = new TextDecoration(0);
    this.x74_1 = new TextDecoration(1);
    this.y74_1 = new TextDecoration(2);
  }
  var Companion_instance_28;
  function Companion_getInstance_40() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function TextDecoration(mask) {
    Companion_getInstance_40();
    this.o72_1 = mask;
  }
  protoOf(TextDecoration).w7i = function (other) {
    return (this.o72_1 | other.o72_1) === this.o72_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.o72_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.o72_1 & Companion_getInstance_40().x74_1.o72_1) === 0)) {
      values.e('Underline');
    }
    if (!((this.o72_1 & Companion_getInstance_40().y74_1.o72_1) === 0)) {
      values.e('LineThrough');
    }
    if (values.p() === 1) {
      return 'TextDecoration.' + values.u(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.o72_1 === other.o72_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.o72_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_41().u6z_1 ? 'Ltr' : $this === Companion_getInstance_41().v6z_1 ? 'Rtl' : $this === Companion_getInstance_41().w6z_1 ? 'Content' : $this === Companion_getInstance_41().x6z_1 ? 'ContentOrLtr' : $this === Companion_getInstance_41().y6z_1 ? 'ContentOrRtl' : $this === Companion_getInstance_41().z6z_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_28() {
    Companion_instance_29 = this;
    this.u6z_1 = _TextDirection___init__impl__lh8lzt(1);
    this.v6z_1 = _TextDirection___init__impl__lh8lzt(2);
    this.w6z_1 = _TextDirection___init__impl__lh8lzt(3);
    this.x6z_1 = _TextDirection___init__impl__lh8lzt(4);
    this.y6z_1 = _TextDirection___init__impl__lh8lzt(5);
    this.z6z_1 = _TextDirection___init__impl__lh8lzt(-2147483648);
  }
  var Companion_instance_29;
  function Companion_getInstance_41() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.z70_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_41();
    this.z70_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.z70_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.z70_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.z70_1, other);
  };
  function Unspecified() {
  }
  protoOf(Unspecified).n68 = function () {
    return Companion_getInstance().l68_1;
  };
  protoOf(Unspecified).c73 = function () {
    return null;
  };
  protoOf(Unspecified).o64 = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_29() {
  }
  protoOf(Companion_29).a73 = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_29).b73 = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.a73(modulate(brush.q68_1, alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_30;
  function Companion_getInstance_42() {
    return Companion_instance_30;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.o64();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.x7i_1 = value;
    this.y7i_1 = alpha;
  }
  protoOf(BrushStyle).o64 = function () {
    return this.y7i_1;
  };
  protoOf(BrushStyle).n68 = function () {
    return Companion_getInstance().l68_1;
  };
  protoOf(BrushStyle).c73 = function () {
    return this.x7i_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + toString(this.x7i_1) + ', alpha=' + this.y7i_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.x7i_1);
    result = imul(result, 31) + getNumberHashCode(this.y7i_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.x7i_1, tmp0_other_with_cast.x7i_1))
      return false;
    if (!equals(this.y7i_1, tmp0_other_with_cast.y7i_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.z7i_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.z7i_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).n68 = function () {
    return this.z7i_1;
  };
  protoOf(ColorStyle).c73 = function () {
    return null;
  };
  protoOf(ColorStyle).o64 = function () {
    return _Color___get_alpha__impl__wcfyv1(this.n68());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + Color__toString_impl_hpzmaq(this.z7i_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.z7i_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.z7i_1, tmp0_other_with_cast.z7i_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return isNaN_0(alpha) || alpha >= 1.0 ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function lerp_9(start, stop, fraction) {
    var tmp;
    var tmp_0;
    if (!(start instanceof BrushStyle)) {
      tmp_0 = !(stop instanceof BrushStyle);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = Companion_instance_30.a73(lerp(start.n68(), stop.n68(), fraction));
    } else {
      var tmp_1;
      if (start instanceof BrushStyle) {
        tmp_1 = stop instanceof BrushStyle;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = Companion_instance_30.b73(lerpDiscrete(start.c73(), stop.c73(), fraction), lerp_3(start.o64(), stop.o64(), fraction));
      } else {
        tmp = lerpDiscrete(start, stop, fraction);
      }
    }
    return tmp;
  }
  function Companion_30() {
    Companion_instance_31 = this;
    this.e74_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_31;
  function Companion_getInstance_43() {
    if (Companion_instance_31 == null)
      new Companion_30();
    return Companion_instance_31;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_43();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.p72_1 = scaleX;
    this.q72_1 = skewX;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.p72_1 === other.p72_1))
      return false;
    if (!(this.q72_1 === other.q72_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.p72_1);
    result = imul(31, result) + getNumberHashCode(this.q72_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.p72_1 + ', skewX=' + this.q72_1 + ')';
  };
  function lerp_10(start, stop, fraction) {
    return new TextGeometricTransform(lerp_3(start.p72_1, stop.p72_1, fraction), lerp_3(start.q72_1, stop.q72_1, fraction));
  }
  function Companion_31() {
    Companion_instance_32 = this;
    this.x70_1 = new TextIndent_0();
  }
  var Companion_instance_32;
  function Companion_getInstance_44() {
    if (Companion_instance_32 == null)
      new Companion_31();
    return Companion_instance_32;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_44();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.r72_1 = firstLine;
    this.s72_1 = restLine;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.r72_1, other.r72_1))
      return false;
    if (!equals(this.s72_1, other.s72_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.r72_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.s72_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + TextUnit__toString_impl_51ghw0(this.r72_1) + ', restLine=' + TextUnit__toString_impl_51ghw0(this.s72_1) + ')';
  };
  function lerp_11(start, stop, fraction) {
    return new TextIndent_0(lerpTextUnitInheritable(start.r72_1, stop.r72_1, fraction), lerpTextUnitInheritable(start.s72_1, stop.s72_1, fraction));
  }
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_45().x75_1 ? 'Clip' : $this === Companion_getInstance_45().y75_1 ? 'Ellipsis' : $this === Companion_getInstance_45().z75_1 ? 'Visible' : 'Invalid';
  }
  function Companion_32() {
    Companion_instance_33 = this;
    this.x75_1 = _TextOverflow___init__impl__obguoe(1);
    this.y75_1 = _TextOverflow___init__impl__obguoe(2);
    this.z75_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_33;
  function Companion_getInstance_45() {
    if (Companion_instance_33 == null)
      new Companion_32();
    return Companion_instance_33;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.a7j_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_45();
    this.a7j_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.a7j_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.a7j_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.a7j_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function isNeutralDirection(_this__u8e3s4) {
    switch (CharDirection_getInstance().w5x(_this__u8e3s4)) {
      case 10:
      case 9:
      case 18:
        return true;
      default:
        return false;
    }
  }
  function strongDirectionType(_this__u8e3s4) {
    switch (CharDirection_getInstance().w5x(_this__u8e3s4)) {
      case 0:
        return Companion_getInstance_46().c7j_1;
      case 1:
      case 13:
        return Companion_getInstance_46().d7j_1;
      default:
        return Companion_getInstance_46().b7j_1;
    }
  }
  function toCharArray_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(startIndex, endIndex);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.ui.text.input.toCharArray.<anonymous>' call
        var it = element;
        destination[(destinationOffset + it | 0) - startIndex | 0] = charSequenceGet(_this__u8e3s4, it);
      }
       while (!(element === last));
  }
  function NoCache() {
  }
  protoOf(NoCache).e7j = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).f7j = function (key, loader) {
    return this.e7j(!(key == null) ? key : THROW_CCE(), loader);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function appendPartOfCharArray(_this__u8e3s4, charArray, offset, len) {
    var inductionVariable = offset;
    var last = offset + len | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.w8(charArray[i]);
      }
       while (inductionVariable < last);
  }
  function PlatformFont() {
  }
  protoOf(PlatformFont).h7j = function () {
    return '' + getKClassFromExpression(this).pb() + '|' + this.g7j() + '|weight=' + this.i5r().t72_1 + '|style=' + FontStyle__toString_impl_thncxr(this.d78());
  };
  function AtomicReference(value) {
    this.l7h_1 = value;
  }
  protoOf(AtomicReference).dq = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.l7h_1;
  };
  protoOf(AtomicReference).t2e = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.ui.text.AtomicReference.set.<set-delegate>' call
    this.l7h_1 = value;
  };
  protoOf(AtomicReference).f1y = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.l7h_1, expect)) {
        // Inline function 'androidx.compose.ui.text.AtomicReference.compareAndSet.<set-delegate>' call
        this.l7h_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function checkEvicted($this, now) {
    var expireTime = now.g3($this.i7j_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = $this.l7j_1.o2();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.m();
    $l$loop: while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.l7j_1.s2(item)).h1(expireTime) < 0))
        break $l$loop;
      list.e(item);
    }
    var tmp0_iterator_0 = list.m();
    while (tmp0_iterator_0.n()) {
      var element = tmp0_iterator_0.o();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.k7j_1.l2(element);
      $this.l7j_1.l2(element);
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.i7j_1 = expireAfterNanos;
    this.j7j_1 = currentNanos;
    this.k7j_1 = HashMap_init_$Create$_0();
    this.l7j_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).f7j = function (key, loader) {
    this.l7j_1.l2(key);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.k7j_1;
    var value = this_0.s2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      this_0.k2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var this_1 = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.j7j_1();
    // Inline function 'kotlin.collections.set' call
    this.l7j_1.k2(key, now);
    checkEvicted(this, now);
    return this_1;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function Companion_33() {
    Companion_instance_34 = this;
    this.b7j_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.c7j_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.d7j_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_34;
  function Companion_getInstance_46() {
    if (Companion_instance_34 == null)
      new Companion_33();
    return Companion_instance_34;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).m();
    $l$loop: while (tmp0_iterator.n()) {
      var codePoint = tmp0_iterator.o();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_46().b7j_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_46().b7j_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) && (index + 1 | 0) < charSequenceLength(_this__u8e3s4)) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_4(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10 | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.u7j_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).e47 = function ($this$sequence, $completion) {
    var tmp = this.f47($this$sequence, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).ma = function (p1, $completion) {
    return this.e47(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.w7j_1 = 0;
            this.x7j_1 = get_codePoints(this.u7j_1).m();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!this.x7j_1.n()) {
              this.s9_1 = 4;
              continue $sm;
            }

            this.y7j_1 = this.x7j_1.o();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.i1_1;
            var containsUpper = progression.j1_1;
            var containsArg = this.y7j_1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.w7j_1 = this.w7j_1 + 1 | 0;
              this.s9_1 = 3;
              continue $sm;
            } else {
              if (this.y7j_1 === 8297) {
                if (this.w7j_1 > 0) {
                  this.w7j_1 = this.w7j_1 - 1 | 0;
                }
                this.s9_1 = 3;
                continue $sm;
              } else {
                if (this.w7j_1 === 0) {
                  this.s9_1 = 2;
                  suspendResult = this.v7j_1.wh(this.y7j_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.s9_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.s9_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.v9_1;
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
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).f47 = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.u7j_1, completion);
    i.v7j_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.e47($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.h7k_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).e47 = function ($this$sequence, $completion) {
    var tmp = this.f47($this$sequence, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).ma = function (p1, $completion) {
    return this.e47(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.j7k_1 = 0;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.j7k_1 < charSequenceLength(this.h7k_1))) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.k7k_1 = codePointAt(this.h7k_1, this.j7k_1);
            this.s9_1 = 2;
            suspendResult = this.i7k_1.wh(this.k7k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j7k_1 = this.j7k_1 + charCount(this.k7k_1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).f47 = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.h7k_1, completion);
    i.i7k_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.e47($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  function FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda() {
    var tmp;
    switch (currentPlatform().z2_1) {
      case 2:
        var tmp1_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp2_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp1_smoothing, tmp2_hinting, true, false);
        break;
      case 1:
      case 0:
        var tmp3_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp4_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp3_smoothing, tmp4_hinting, true, false);
        break;
      case 7:
        var tmp5_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp6_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp5_smoothing, tmp6_hinting, true, false);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        var tmp7_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp8_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp7_smoothing, tmp8_hinting, true, false);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Companion_34() {
    Companion_instance_35 = this;
    var tmp = this;
    tmp.l7k_1 = lazy_0(FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda);
  }
  protoOf(Companion_34).m7k = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.l7k_1;
    PlatformDefault$factory();
    return this_0.c1();
  };
  var Companion_instance_35;
  function Companion_getInstance_47() {
    if (Companion_instance_35 == null)
      new Companion_34();
    return Companion_instance_35;
  }
  function FontRasterizationSettings(smoothing, hinting, subpixelPositioning, autoHintingForced) {
    Companion_getInstance_47();
    this.n7k_1 = smoothing;
    this.o7k_1 = hinting;
    this.p7k_1 = subpixelPositioning;
    this.q7k_1 = autoHintingForced;
  }
  protoOf(FontRasterizationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof FontRasterizationSettings))
      THROW_CCE();
    if (!this.n7k_1.equals(other.n7k_1))
      return false;
    if (!this.o7k_1.equals(other.o7k_1))
      return false;
    if (!(this.p7k_1 === other.p7k_1))
      return false;
    return this.q7k_1 === other.q7k_1;
  };
  protoOf(FontRasterizationSettings).hashCode = function () {
    var result = this.n7k_1.hashCode();
    result = imul(31, result) + this.o7k_1.hashCode() | 0;
    result = imul(31, result) + getBooleanHashCode(this.p7k_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.q7k_1) | 0;
    return result;
  };
  protoOf(FontRasterizationSettings).toString = function () {
    return 'FontRasterizationSettings(smoothing=' + this.n7k_1.toString() + ', ' + ('hinting=' + this.o7k_1.toString() + ', ') + ('subpixelPositioning=' + this.p7k_1 + ', ') + ('autoHintingForced=' + this.q7k_1 + ')');
  };
  var FontSmoothing_None_instance;
  var FontSmoothing_AntiAlias_instance;
  var FontSmoothing_SubpixelAntiAlias_instance;
  var FontSmoothing_entriesInitialized;
  function FontSmoothing_initEntries() {
    if (FontSmoothing_entriesInitialized)
      return Unit_instance;
    FontSmoothing_entriesInitialized = true;
    FontSmoothing_None_instance = new FontSmoothing('None', 0);
    FontSmoothing_AntiAlias_instance = new FontSmoothing('AntiAlias', 1);
    FontSmoothing_SubpixelAntiAlias_instance = new FontSmoothing('SubpixelAntiAlias', 2);
  }
  function FontSmoothing(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var FontHinting_None_instance;
  var FontHinting_Slight_instance;
  var FontHinting_Normal_instance;
  var FontHinting_Full_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_None_instance = new FontHinting('None', 0);
    FontHinting_Slight_instance = new FontHinting('Slight', 1);
    FontHinting_Normal_instance = new FontHinting('Normal', 2);
    FontHinting_Full_instance = new FontHinting('Full', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toSkFontRastrSettings(_this__u8e3s4) {
    return new FontRastrSettings(toSkFontEdging(_this__u8e3s4.n7k_1), toSkFontHinting(_this__u8e3s4.o7k_1), _this__u8e3s4.p7k_1);
  }
  function toSkFontEdging(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.z2_1) {
      case 0:
        tmp = FontEdging_ALIAS_getInstance();
        break;
      case 1:
        tmp = FontEdging_ANTI_ALIAS_getInstance();
        break;
      case 2:
        tmp = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function toSkFontHinting(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.z2_1) {
      case 0:
        tmp = FontHinting_NONE_getInstance();
        break;
      case 1:
        tmp = FontHinting_SLIGHT_getInstance();
        break;
      case 2:
        tmp = FontHinting_NORMAL_getInstance();
        break;
      case 3:
        tmp = FontHinting_FULL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function FontSmoothing_AntiAlias_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_AntiAlias_instance;
  }
  function FontHinting_Slight_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Slight_instance;
  }
  function FontHinting_Normal_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Normal_instance;
  }
  function PlatformDefault$factory() {
    return getPropertyCallableRef('PlatformDefault', 1, KProperty1, function (receiver) {
      return receiver.m7k();
    }, null);
  }
  function Paragraph_1() {
  }
  function _set_paragraph__p1bfvb($this, value) {
    $this.y7k_1 = value;
    $this.z7k_1 = null;
  }
  function _get_text__de5ose($this) {
    return $this.t7k_1.a7l_1;
  }
  function lineMetricsForOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      var this_0 = _get_lineMetrics__5iiuki($this);
      // Inline function 'kotlin.collections.isEmpty' call
      if (this_0.length === 0) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp = asList(this_0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$lineMetricsForOffset$lambda(offset));
      tmp$ret$2 = this_0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(this_0))];
    }
    return tmp$ret$2;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      var this_0 = _get_lineMetrics__5iiuki($this);
      // Inline function 'kotlin.collections.isEmpty' call
      if (this_0.length === 0) {
        tmp$ret$1 = null;
        break $l$block;
      }
      var tmp = asList(this_0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$getLineMetricsForVerticalPosition$lambda(vertical));
      tmp$ret$1 = this_0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(this_0))];
    }
    return tmp$ret$1;
  }
  function getAlignedStartingPosition($this, isRtl) {
    var tmp0_subject = $this.x7k_1.p7l().z76();
    return tmp0_subject === Companion_getInstance_39().g70_1 ? 0.0 : tmp0_subject === Companion_getInstance_39().h70_1 ? $this.x5g() : tmp0_subject === Companion_getInstance_39().i70_1 ? $this.x5g() / 2 : tmp0_subject === Companion_getInstance_39().k70_1 ? isRtl ? $this.x5g() : 0.0 : tmp0_subject === Companion_getInstance_39().l70_1 ? isRtl ? 0.0 : $this.x5g() : 0.0;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this.z7k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      $this.z7k_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lineMetrics = tmp;
    return lineMetrics;
  }
  function receiveLineMetrics($this) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _get_text__de5ose($this);
    if (charSequenceLength(this_0) === 0) {
      tmp = $this.x7k_1.q7l($this.y7k_1);
    } else {
      tmp = $this.y7k_1.x5z();
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.r7l().n5p();
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(lineMetrics.length === 0)) {
      lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.x7k_1.p7l());
      lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.x7k_1.p7l());
    }
    return lineMetrics;
  }
  function getBoxForwardByOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.y7k_1.t5z(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var from = offset - 1 | 0;
    var isRtl = $this.t7k_1.g7l_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.y7k_1.t5z(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (charSequenceGet(_get_text__de5ose($this), from) === _Char___init__impl__6a9atx(10)) {
        var tmp;
        if (!isRtl) {
          var bottom = box.j61_1.w5m_1 + box.j61_1.w5m_1 - box.j61_1.u5m_1;
          var rect = new Rect_0(0.0, box.j61_1.w5m_1, 0.0, bottom);
          return new TextBox(rect, box.l61());
        } else {
          var tmp_0;
          if (from === get_lastIndex_1(_get_text__de5ose($this))) {
            var bottom_0 = box.j61_1.w5m_1 + box.j61_1.w5m_1 - box.j61_1.u5m_1;
            var rect_0 = new Rect_0($this.x5g(), box.j61_1.w5m_1, $this.x5g(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.l61());
          } else {
            var nextBox = first_0($this.y7k_1.t5z(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.j61_1.t5m_1, nextBox.j61_1.u5m_1, nextBox.j61_1.t5m_1, nextBox.j61_1.w5m_1);
            tmp_0 = new TextBox(rect_1, nextBox.l61());
          }
          tmp = tmp_0;
        }
        return tmp;
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $super) {
    end = end === VOID ? offset : end;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.lineMetricsForOffset.<anonymous>' call
      if ($offset < it.y5y_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph$getLineMetricsForVerticalPosition$lambda($vertical) {
    return function (it) {
      var tmp;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
      if ($vertical < it.g5z_1 + it.b5z_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    this.t7k_1 = paragraphIntrinsics;
    this.u7k_1 = maxLines;
    this.v7k_1 = constraints;
    this.w7k_1 = ellipsis ? '\u2026' : '';
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.t7k_1.s7l();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    this_0.t7l(this.u7k_1, this.w7k_1);
    tmp.x7k_1 = this_0;
    this.y7k_1 = this.x7k_1.u7l(this.x5g());
    this.x7k_1.v7l(Size(this.x5g(), this.y5g()));
    _set_paragraph__p1bfvb(this, this.x7k_1.u7l(this.x5g()));
    this.y7k_1.r5z(this.x5g());
    this.z7k_1 = null;
  }
  protoOf(SkiaParagraph).r7l = function () {
    return this.x7k_1.w7l();
  };
  protoOf(SkiaParagraph).x5g = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.v7k_1);
  };
  protoOf(SkiaParagraph).y5g = function () {
    return this.y7k_1.y5g();
  };
  protoOf(SkiaParagraph).n5z = function () {
    return this.t7k_1.i7l_1;
  };
  protoOf(SkiaParagraph).o5z = function () {
    return this.t7k_1.j7l_1;
  };
  protoOf(SkiaParagraph).o6y = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.g5z_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).p6y = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.g5z_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).l6y = function () {
    return this.y7k_1.q5z();
  };
  protoOf(SkiaParagraph).k6y = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' || this.y7k_1.y5z() < 1) {
      tmp = 1;
    } else {
      tmp = this.y7k_1.y5z();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).m6y = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.y7k_1.u5z();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      var tmp$ret$0 = toComposeRect(item.j61_1);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).f6y = function (start, end) {
    var boxes = this.y7k_1.t5z(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).j5u(b.j61_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).i6z = function (offset) {
    var horizontal = this.c6z(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    var isNewEmptyLine = (offset - 1 | 0) === line.v5y_1 && offset === _get_text__de5ose(this).length;
    var metrics = this.r7l().n5p();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var it = line.a5z_1;
    var tmp;
    if (isNewEmptyLine) {
      var ascent = -metrics.h5q_1;
      tmp = coerceAtMost_0(it, ascent);
    } else {
      tmp = it;
    }
    var asc = tmp;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var it_0 = line.b5z_1;
    var tmp_0;
    if (isNewEmptyLine) {
      var descent = metrics.i5q_1;
      tmp_0 = coerceAtMost_0(it_0, descent);
    } else {
      tmp_0 = it_0;
    }
    var desc = tmp_0;
    return new Rect_1(horizontal, line.g5z_1 - asc, horizontal, line.g5z_1 + desc);
  };
  protoOf(SkiaParagraph).k6z = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f5z_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).m6z = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i5z();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).n6z = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.g5z_1 - tmp0_safe_receiver.a5z_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).o6z = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineBottom.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.g5z_1 + tmp0_safe_receiver.b5z_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).p6z = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d5z_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).q6z = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v5y_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).r6z = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 && metrics.v5y_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].w5y_1) {
        tmp_1 = metrics.w5y_1;
      } else if (metrics.v5y_1 < _get_text__de5ose(this).length && charSequenceGet(_get_text__de5ose(this), metrics.v5y_1) === _Char___init__impl__6a9atx(10)) {
        tmp_1 = metrics.v5y_1;
      } else {
        tmp_1 = metrics.x5y_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.w5y_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).j6z = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h5z_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).v6y = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h5z_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).c6z = function (offset, usePrimaryDirection) {
    var prevBox = getBoxBackwardByOffset$default(this, offset);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.t7k_1.g7l_1.equals(ResolvedTextDirection_Rtl_getInstance());
    var isLtr = !isRtl;
    return prevBox == null && nextBox == null ? getAlignedStartingPosition(this, isRtl) : prevBox == null ? cursorHorizontalPosition(ensureNotNull(nextBox), true) : nextBox == null ? cursorHorizontalPosition(prevBox) : nextBox.l61().equals(prevBox.l61()) ? cursorHorizontalPosition(nextBox, true) : isLtr && prevBox.l61().equals(Direction_LTR_getInstance()) ? cursorHorizontalPosition(nextBox, true) : isRtl && prevBox.l61().equals(Direction_RTL_getInstance()) ? cursorHorizontalPosition(nextBox, true) : usePrimaryDirection ? cursorHorizontalPosition(prevBox) : cursorHorizontalPosition(nextBox, true);
  };
  protoOf(SkiaParagraph).d6z = function (offset) {
    return this.t7k_1.g7l_1;
  };
  protoOf(SkiaParagraph).e6z = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l61();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.z2_1) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).y6y = function (position) {
    var glyphPosition = this.y7k_1.v5z(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).c61_1;
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.v5y_1 < expectedLine.w5y_1;
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.f5z_1 && _Offset___get_x__impl__xvi35n(position) < expectedLine.i5z()) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.y7k_1.t5z(expectedLine.v5y_1, expectedLine.z5y_1 ? expectedLine.w5y_1 : expectedLine.w5y_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp2_safe_receiver = rects == null ? null : firstOrNull(rects);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j61_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.t5m_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.f5z_1 : tmp4_elvis_lhs;
    var tmp6_safe_receiver = rects == null ? null : lastOrNull(rects);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.j61_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.v5m_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.i5z() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.y7k_1.v5z(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).c61_1;
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.y7k_1.v5z(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).c61_1;
      var tmp_1;
      if (0 <= correctedGlyphPosition ? correctedGlyphPosition <= (charSequenceLength(_get_text__de5ose(this)) - 1 | 0) : false) {
        tmp_1 = isNeutralDirection(codePointAt(_get_text__de5ose(this), correctedGlyphPosition));
      } else {
        tmp_1 = false;
      }
      var isNeutralChar = tmp_1;
      var tmp_2;
      if (!isNeutralChar) {
        var tmp9_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
        tmp_2 = equals(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.l61(), Direction_RTL_getInstance());
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  protoOf(SkiaParagraph).b6z = function (offset) {
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__de5ose(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box.j61_1);
  };
  protoOf(SkiaParagraph).f6z = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose(this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (offset < _get_text__de5ose(this).length && isWhitespace(charSequenceGet(_get_text__de5ose(this), offset)) || offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 && !isWhitespace(charSequenceGet(_get_text__de5ose(this), offset - 1 | 0))) {
        tmp = toTextRange(this.y7k_1.w5z(offset - 1 | 0));
      } else {
        tmp = TextRange_0(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.y7k_1.w5z(offset));
  };
  protoOf(SkiaParagraph).r6y = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.x7k_1;
    $this$with.x7l(color);
    $this$with.y7l(shadow, textDecoration);
    $this$with.z7l(drawStyle);
    $this$with.a7m(blendMode);
    var tmp$ret$1 = $this$with.u7l(this.x5g());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.y7k_1.s5z(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).t6y = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.x7k_1;
    $this$with.b7m(brush, Size(this.x5g(), this.y5g()), alpha);
    $this$with.y7l(shadow, textDecoration);
    $this$with.z7l(drawStyle);
    $this$with.a7m(blendMode);
    var tmp$ret$1 = $this$with.u7l(this.x5g());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.y7k_1.s5z(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.b77()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.d77();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_38().t7i_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.v7i_1)) {
      tmp = -fontMetrics.h5q_1;
    } else {
      tmp = _this__u8e3s4.a5z_1;
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.b77()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.d77();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_38().t7i_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.v7i_1)) {
      tmp = fontMetrics.i5q_1;
    } else {
      tmp = _this__u8e3s4.b5z_1;
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_0(_this__u8e3s4.s5r_1, _this__u8e3s4.t5r_1);
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.v5y_1 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.w5y_1 : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.x5y_1 : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.y5y_1 : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.z5y_1 : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.a5z_1 : ascent;
    descent = descent === VOID ? _this__u8e3s4.b5z_1 : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.c5z_1 : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.d5z_1 : height;
    width = width === VOID ? _this__u8e3s4.e5z_1 : width;
    left = left === VOID ? _this__u8e3s4.f5z_1 : left;
    baseline = baseline === VOID ? _this__u8e3s4.g5z_1 : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.h5z_1 : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_48().c7m_1 ? 'Solid' : $this === Companion_getInstance_48().d7m_1 ? 'Double' : $this === Companion_getInstance_48().e7m_1 ? 'Dotted' : $this === Companion_getInstance_48().f7m_1 ? 'Dashed' : $this === Companion_getInstance_48().g7m_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_35() {
    Companion_instance_36 = this;
    this.c7m_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.d7m_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.e7m_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.f7m_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.g7m_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  var Companion_instance_36;
  function Companion_getInstance_48() {
    if (Companion_instance_36 == null)
      new Companion_35();
    return Companion_instance_36;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === (other instanceof TextDecorationLineStyle ? other.h7m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_48();
    this.h7m_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.h7m_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.h7m_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.h7m_1, other);
  };
  function Companion_36() {
    Companion_instance_37 = this;
    this.c71_1 = PlatformParagraphStyle_init_$Create$();
  }
  var Companion_instance_37;
  function Companion_getInstance_49() {
    if (Companion_instance_37 == null)
      new Companion_36();
    return Companion_instance_37;
  }
  function PlatformParagraphStyle_init_$Init$($this) {
    PlatformParagraphStyle.call($this);
    $this.v70_1 = Companion_getInstance_47().m7k();
    return $this;
  }
  function PlatformParagraphStyle_init_$Create$() {
    return PlatformParagraphStyle_init_$Init$(objectCreate(protoOf(PlatformParagraphStyle)));
  }
  protoOf(PlatformParagraphStyle).w70 = function (other) {
    if (other == null)
      return this;
    return other;
  };
  protoOf(PlatformParagraphStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    if (!this.v70_1.equals(other.v70_1))
      return false;
    return true;
  };
  protoOf(PlatformParagraphStyle).hashCode = function () {
    return this.v70_1.hashCode();
  };
  function PlatformParagraphStyle() {
    Companion_getInstance_49();
  }
  function PlatformSpanStyle_init_$Init$($this) {
    PlatformSpanStyle.call($this, null);
    return $this;
  }
  function PlatformSpanStyle_init_$Create$() {
    return PlatformSpanStyle_init_$Init$(objectCreate(protoOf(PlatformSpanStyle)));
  }
  function Companion_37() {
    Companion_instance_38 = this;
    this.f74_1 = PlatformSpanStyle_init_$Create$();
  }
  var Companion_instance_38;
  function Companion_getInstance_50() {
    if (Companion_instance_38 == null)
      new Companion_37();
    return Companion_instance_38;
  }
  function PlatformSpanStyle(textDecorationLineStyle) {
    Companion_getInstance_50();
    this.j73_1 = textDecorationLineStyle;
  }
  protoOf(PlatformSpanStyle).k73 = function (other) {
    return this;
  };
  protoOf(PlatformSpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformSpanStyle))
      return false;
    var tmp = this.j73_1;
    var tmp_0 = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp_1 = other.j73_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextDecorationLineStyle(tmp_1)))
      return false;
    return true;
  };
  protoOf(PlatformSpanStyle).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp = this.j73_1;
    var tmp0_safe_receiver = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.a76_1 = spanStyle;
    $this.b76_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.b76_1, other.b76_1))
      return false;
    if (!equals(this.a76_1, other.a76_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    var tmp0_safe_receiver = this.a76_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.b76_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function PlatformTextStyle() {
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function lerp_12(start, stop, fraction) {
    var tmp = start.j73_1;
    var tmp_0 = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp_1 = stop.j73_1;
    if (equals(tmp_0, tmp_1 == null ? null : new TextDecorationLineStyle(tmp_1)))
      return start;
    var tmp_2 = start.j73_1;
    var tmp_3 = tmp_2 == null ? null : new TextDecorationLineStyle(tmp_2);
    var tmp_4 = stop.j73_1;
    var tmp_5 = lerpDiscrete(tmp_3, tmp_4 == null ? null : new TextDecorationLineStyle(tmp_4), fraction);
    return new PlatformSpanStyle(tmp_5 == null ? null : tmp_5.h7m_1);
  }
  function lerp_13(start, stop, fraction) {
    return start;
  }
  function createFontFamilyResolver(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).p79 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.q78_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.q78_1;
    var result = skiaFontLoader.k7m(tmp0_elvis_lhs == null ? Companion_getInstance_16().n74_1 : tmp0_elvis_lhs, typefaceRequest.r78_1, typefaceRequest.s78_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.i7m_1 = fontCache;
    this.j7m_1 = this.i7m_1;
  }
  protoOf(SkiaFontLoader).l7m = function () {
    return this.i7m_1.m7m_1;
  };
  protoOf(SkiaFontLoader).o7d = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.e78() === Companion_getInstance_19().g78_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + toString(font));
      }
      return null;
    }
    var tmp0_subject = font.e78();
    var tmp;
    if (tmp0_subject === Companion_getInstance_19().f78_1) {
      tmp = this.i7m_1.q7m(font);
    } else if (tmp0_subject === Companion_getInstance_19().g78_1) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        var value = this.i7m_1.q7m(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var this_0 = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      }
      tmp = tmp_2;
    } else if (tmp0_subject === Companion_getInstance_19().h78_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + FontLoadingStrategy__toString_impl_fx0z8f(font.e78()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).k7m = function (fontFamily, fontWeight, fontStyle) {
    return this.i7m_1.k7m(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).r7m = function (font, $completion) {
    return this.o7d(font);
  };
  protoOf(SkiaFontLoader).u7b = function (font, $completion) {
    return this.r7m(font, $completion);
  };
  protoOf(SkiaFontLoader).w79 = function () {
    return this.j7m_1;
  };
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver) {
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver), maxLines, ellipsis, constraints);
  }
  function get_DefaultFontSize_0() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_5().t5h_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h6e_1 : blendMode;
    ComputedStyle.call($this);
    $this.m7n(density, spanStyle, brushSize, blendMode, lineHeight);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode, lineHeight) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, objectCreate(protoOf(ComputedStyle)));
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight) {
    textForegroundStyle = textForegroundStyle === VOID ? Unspecified_instance : textForegroundStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_5().t5h_1 : brushSize;
    var tmp;
    if (fontSize === VOID) {
      tmp = NaN;
    } else {
      tmp = fontSize;
    }
    fontSize = tmp;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? null : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().l68_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? null : textDecorationLineStyle;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h6e_1 : blendMode;
    lineHeight = lineHeight === VOID ? null : lineHeight;
    this.s7m_1 = textForegroundStyle;
    this.t7m_1 = brushSize;
    this.u7m_1 = fontSize;
    this.v7m_1 = fontWeight;
    this.w7m_1 = fontStyle;
    this.x7m_1 = fontSynthesis;
    this.y7m_1 = fontFamily;
    this.z7m_1 = fontFeatureSettings;
    this.a7n_1 = letterSpacing;
    this.b7n_1 = baselineShift;
    this.c7n_1 = textGeometricTransform;
    this.d7n_1 = localeList;
    this.e7n_1 = background;
    this.f7n_1 = textDecoration;
    this.g7n_1 = textDecorationLineStyle;
    this.h7n_1 = shadow;
    this.i7n_1 = drawStyle;
    this.j7n_1 = blendMode;
    this.k7n_1 = lineHeight;
    this.l7n_1 = new SkiaTextPaint();
  }
  protoOf(ComputedStyle).m7n = function (density, spanStyle, brushSize, blendMode, lineHeight) {
    this.s7m_1 = spanStyle.r71_1;
    this.t7m_1 = brushSize;
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.set.<anonymous>' call
    tmp.u7m_1 = density.g5i(spanStyle.s71_1);
    this.v7m_1 = spanStyle.t71_1;
    this.w7m_1 = spanStyle.u71_1;
    this.x7m_1 = spanStyle.v71_1;
    this.y7m_1 = spanStyle.w71_1;
    this.z7m_1 = spanStyle.x71_1;
    var tmp_0 = this;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = spanStyle.y71_1;
    if (!get_isUnspecified(this_0)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.set.<anonymous>' call
      tmp_1 = density.g5i(spanStyle.y71_1);
    } else {
      tmp_1 = null;
    }
    tmp_0.a7n_1 = tmp_1;
    this.b7n_1 = spanStyle.z71_1;
    this.c7n_1 = spanStyle.a72_1;
    this.d7n_1 = spanStyle.b72_1;
    this.e7n_1 = spanStyle.c72_1;
    this.f7n_1 = spanStyle.d72_1;
    var tmp_2 = this;
    var tmp0_safe_receiver = spanStyle.f72_1;
    tmp_2.g7n_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j73_1;
    this.h7n_1 = spanStyle.e72_1;
    this.i7n_1 = spanStyle.g72_1;
    this.j7n_1 = blendMode;
    var tmp_3 = this;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(lineHeight)) {
      tmp_4 = toPx(lineHeight, density, spanStyle.s71_1);
    } else {
      tmp_4 = null;
    }
    tmp_3.k7n_1 = tmp_4;
  };
  protoOf(ComputedStyle).n7n = function () {
    var paint = this.l7n_1.o6t();
    paint.x5s();
    this.l7n_1.m68(this.s7m_1.n68());
    this.l7n_1.b7m(this.s7m_1.c73(), this.t7m_1, this.s7m_1.o64());
    this.l7n_1.z7l(this.i7n_1);
    this.l7n_1.b6k(this.j7n_1);
    return paint;
  };
  protoOf(ComputedStyle).s7n = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.s7m_1.n68();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      res.b5t(toArgb(this.s7m_1.n68()));
    }
    var foreground = this.n7n();
    if (!(foreground.j5t() == null) || !foreground.a5t().equals(PaintMode_FILL_getInstance()) || !foreground.n5t()) {
      res.q61(foreground);
    }
    var tmp0_safe_receiver = this.w7m_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).h72_1;
      res.w61(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.f7n_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.u61(toSkDecorationStyle(tmp1_safe_receiver, this.s7m_1.n68(), this.g7n_1));
    }
    if (!equals(this.e7n_1, Companion_getInstance().l68_1)) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      this_1.b5t(toArgb(this.e7n_1));
      res.s61(this_1);
    }
    var tmp2_safe_receiver = this.v7m_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.w61(res.v5w().j5r(tmp2_safe_receiver.t72_1));
    }
    var tmp3_safe_receiver = this.h7n_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.y61(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.a7n_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.h62(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_6();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.z7m_1;
    var tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.a62(tmp_1.z5p(tmp$ret$8));
    res.b62(this.u7m_1);
    var tmp5_safe_receiver = this.y7m_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.v7m_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_22().x73_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.w7m_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_20().h74_1;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.x7m_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_21().j74_1;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.r79(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).c1();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.u7n_1;
      var tmp$ret$9 = copyToArray(this_2);
      res.d62(tmp$ret$9);
      res.l62(resolved.t7n_1);
    }
    var tmp6_safe_receiver = this.b7n_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).j72_1;
      var fontMetrics = res.n62();
      res.j62(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.h5q_1);
    }
    var tmp7_safe_receiver = this.k7n_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.f62(tmp7_safe_receiver / this.u7m_1);
    }
    return res;
  };
  protoOf(ComputedStyle).v7n = function (density, other) {
    var fontSize = toPx_0(other.s71_1, density, this.u7m_1);
    this.s7m_1 = this.s7m_1.i73(other.r71_1);
    var tmp0_safe_receiver = other.w71_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.y7m_1 = tmp0_safe_receiver;
    }
    this.u7m_1 = fontSize;
    var tmp1_safe_receiver = other.t71_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.v7m_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.u71_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.w7m_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).h72_1;
    }
    var tmp3_safe_receiver = other.v71_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.x7m_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).i72_1;
    }
    var tmp4_safe_receiver = other.x71_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z7m_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.y71_1)) {
      this.a7n_1 = toPx_0(other.y71_1, density, fontSize);
    }
    var tmp5_safe_receiver = other.z71_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.b7n_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).j72_1;
    }
    var tmp6_safe_receiver = other.a72_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.c7n_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.b72_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.d7n_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = other.c72_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      this.e7n_1 = other.c72_1;
    }
    var tmp8_safe_receiver = other.d72_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.f7n_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.e72_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.h7n_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.g72_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.i7n_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.f72_1;
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.j73_1;
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.contracts.contract' call
        this.g7n_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).h7m_1;
        tmp_5 = Unit_instance;
      }
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = toString(this.s7m_1);
    var tmp_0 = Size__toString_impl_o87ni8(this.t7m_1);
    var tmp_1 = this.u7m_1;
    var tmp_2 = toString_0(this.v7m_1);
    var tmp_3 = this.w7m_1;
    var tmp_4 = toString_0(tmp_3 == null ? null : new FontStyle(tmp_3));
    var tmp_5 = this.x7m_1;
    var tmp_6 = toString_0(tmp_5 == null ? null : new FontSynthesis(tmp_5));
    var tmp_7 = toString_0(this.y7m_1);
    var tmp_8 = this.z7m_1;
    var tmp_9 = this.a7n_1;
    var tmp_10 = this.b7n_1;
    var tmp_11 = toString_0(tmp_10 == null ? null : new BaselineShift(tmp_10));
    var tmp_12 = toString_0(this.c7n_1);
    var tmp_13 = toString_0(this.d7n_1);
    var tmp_14 = Color__toString_impl_hpzmaq(this.e7n_1);
    var tmp_15 = toString_0(this.f7n_1);
    var tmp_16 = this.g7n_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + tmp_11 + ', textGeometricTransform=' + tmp_12 + ', localeList=' + tmp_13 + ', background=' + tmp_14 + ', textDecoration=' + tmp_15 + ', textDecorationLineStyle=' + toString_0(tmp_16 == null ? null : new TextDecorationLineStyle(tmp_16)) + ', shadow=' + toString_0(this.h7n_1) + ', drawStyle=' + toString_0(this.i7n_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.j7n_1) + ', lineHeight=' + this.k7n_1 + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.s7m_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.t7m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u7m_1) | 0;
    result = imul(result, 31) + (this.v7m_1 == null ? 0 : this.v7m_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.w7m_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.w7m_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.x7m_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.x7m_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.y7m_1 == null ? 0 : hashCode(this.y7m_1)) | 0;
    result = imul(result, 31) + (this.z7m_1 == null ? 0 : getStringHashCode(this.z7m_1)) | 0;
    result = imul(result, 31) + (this.a7n_1 == null ? 0 : getNumberHashCode(this.a7n_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.b7n_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.b7n_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.c7n_1 == null ? 0 : this.c7n_1.hashCode()) | 0;
    result = imul(result, 31) + (this.d7n_1 == null ? 0 : this.d7n_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.e7n_1) | 0;
    result = imul(result, 31) + (this.f7n_1 == null ? 0 : this.f7n_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.g7n_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.g7n_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.h7n_1 == null ? 0 : this.h7n_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i7n_1 == null ? 0 : hashCode(this.i7n_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.j7n_1) | 0;
    result = imul(result, 31) + (this.k7n_1 == null ? 0 : getNumberHashCode(this.k7n_1)) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.s7m_1, tmp0_other_with_cast.s7m_1))
      return false;
    if (!equals(this.t7m_1, tmp0_other_with_cast.t7m_1))
      return false;
    if (!equals(this.u7m_1, tmp0_other_with_cast.u7m_1))
      return false;
    if (!equals(this.v7m_1, tmp0_other_with_cast.v7m_1))
      return false;
    var tmp = this.w7m_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.w7m_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.x7m_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.x7m_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.y7m_1, tmp0_other_with_cast.y7m_1))
      return false;
    if (!(this.z7m_1 == tmp0_other_with_cast.z7m_1))
      return false;
    if (!equals(this.a7n_1, tmp0_other_with_cast.a7n_1))
      return false;
    var tmp_5 = this.b7n_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.b7n_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.c7n_1, tmp0_other_with_cast.c7n_1))
      return false;
    if (!equals(this.d7n_1, tmp0_other_with_cast.d7n_1))
      return false;
    if (!equals(this.e7n_1, tmp0_other_with_cast.e7n_1))
      return false;
    if (!equals(this.f7n_1, tmp0_other_with_cast.f7n_1))
      return false;
    var tmp_8 = this.g7n_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = tmp0_other_with_cast.g7n_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.h7n_1, tmp0_other_with_cast.h7n_1))
      return false;
    if (!equals(this.i7n_1, tmp0_other_with_cast.i7n_1))
      return false;
    if (!(this.j7n_1 === tmp0_other_with_cast.j7n_1))
      return false;
    if (!equals(this.k7n_1, tmp0_other_with_cast.k7n_1))
      return false;
    return true;
  };
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.toPx.<anonymous>' call
    var tmp$ret$1 = density.g5i(fontSize);
    return toPx_0(_this__u8e3s4, density, tmp$ret$1);
  }
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_20().i74_1 ? Companion_getInstance_7().g5r_1 : Companion_getInstance_7().e5r_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var underline = _this__u8e3s4.w7i(Companion_getInstance_40().x74_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.w7i(Companion_getInstance_40().y74_1);
    var gaps = false;
    var tmp;
    var tmp_0 = textDecorationLineStyle;
    if ((tmp_0 == null ? null : new TextDecorationLineStyle(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = toSkDecorationLineStyle(textDecorationLineStyle);
    }
    var tmp1_elvis_lhs = tmp;
    var lineStyle = tmp1_elvis_lhs == null ? DecorationLineStyle_SOLID_getInstance() : tmp1_elvis_lhs;
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return new Shadow_0(toArgb(_this__u8e3s4.w6f_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.x6f_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.x6f_1), _this__u8e3s4.y6f_1);
  }
  function toPx_0(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = fontSize;
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      tmp = fontSize * _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(_this__u8e3s4)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.toPx.<anonymous>' call
      tmp = density.g5i(_this__u8e3s4);
    } else {
      var message = 'Unexpected size in TextUnit.toPx';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkDecorationLineStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_48().c7m_1 ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_48().d7m_1 ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_48().e7m_1 ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_48().f7m_1 ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_48().g7m_1 ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function cursorHorizontalPosition(_this__u8e3s4, opposite) {
    opposite = opposite === VOID ? false : opposite;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.l61().z2_1) {
      case 1:
        tmp = opposite ? _this__u8e3s4.j61_1.t5m_1 : _this__u8e3s4.j61_1.v5m_1;
        break;
      case 0:
        tmp = opposite ? _this__u8e3s4.j61_1.v5m_1 : _this__u8e3s4.j61_1.t5m_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.w7n_1 = position;
    this.x7n_1 = style;
  }
  protoOf(StyleAdd).y7n = function () {
    return this.w7n_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.w7n_1 + ', style=' + this.x7n_1.toString() + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.w7n_1;
    result = imul(result, 31) + this.x7n_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.w7n_1 === tmp0_other_with_cast.w7n_1))
      return false;
    if (!this.x7n_1.equals(tmp0_other_with_cast.x7n_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.z7n_1 = cut;
    this.a7o_1 = width;
    this.b7o_1 = height;
    this.c7o_1 = position$factory(this.z7n_1);
  }
  protoOf(PutPlaceholder).y7n = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.c7o_1;
    position$factory_0();
    return this_0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.z7n_1.toString() + ', width=' + this.a7o_1 + ', height=' + this.b7o_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.z7n_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.a7o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b7o_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.z7n_1.equals(tmp0_other_with_cast.z7n_1))
      return false;
    if (!equals(this.a7o_1, tmp0_other_with_cast.a7o_1))
      return false;
    if (!equals(this.b7o_1, tmp0_other_with_cast.b7o_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.d7o_1 = cut;
    this.e7o_1 = position$factory_1(this.d7o_1);
  }
  protoOf(EndPlaceholder).y7n = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.e7o_1;
    position$factory_2();
    return this_0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.d7o_1.toString() + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.d7o_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.d7o_1.equals(tmp0_other_with_cast.d7o_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.f7o_1 = position;
    this.g7o_1 = style;
  }
  protoOf(StyleAdd_0).y7n = function () {
    return this.f7o_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.f7o_1 + ', style=' + this.g7o_1.toString() + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.f7o_1;
    result = imul(result, 31) + this.g7o_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.f7o_1 === tmp0_other_with_cast.f7o_1))
      return false;
    if (!this.g7o_1.equals(tmp0_other_with_cast.g7o_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.h7o_1 = position;
    this.i7o_1 = style;
  }
  protoOf(StyleRemove).y7n = function () {
    return this.h7o_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.h7o_1 + ', style=' + this.i7o_1.toString() + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.h7o_1;
    result = imul(result, 31) + this.i7o_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.h7o_1 === tmp0_other_with_cast.h7o_1))
      return false;
    if (!this.i7o_1.equals(tmp0_other_with_cast.i7o_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.j7o_1 = position;
    this.k7o_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).y7n = function () {
    return this.j7o_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.j7o_1 + ', placeholder=' + this.k7o_1.toString() + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.j7o_1;
    result = imul(result, 31) + this.k7o_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.j7o_1 === tmp0_other_with_cast.j7o_1))
      return false;
    if (!this.k7o_1.equals(tmp0_other_with_cast.k7o_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.l7o_1 = position;
  }
  protoOf(EndPlaceholder_0).y7n = function () {
    return this.l7o_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.l7o_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.l7o_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.l7o_1 === tmp0_other_with_cast.l7o_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.z7o_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.a7p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function prepareDefaultStyle($this) {
    $this.z7o_1 = copyWithDefaultFontSize($this.o7o_1.d76(), $this.w7o_1);
    $this.y7o_1.m7n($this.u7o_1, _get_initialStyle__6to25e($this), $this.p7o_1, $this.x7o_1, $this.o7o_1.b77());
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$();
    var tmp0_iterator = spans.m();
    while (tmp0_iterator.n()) {
      var span = tmp0_iterator.o();
      cuts.e(new StyleAdd_0(span.s6v_1, span.r6v_1));
      cuts.e(new StyleRemove(span.t6v_1, span.r6v_1));
    }
    var tmp1_iterator = placeholders.m();
    while (tmp1_iterator.n()) {
      var placeholder = tmp1_iterator.o();
      cuts.e(new PutPlaceholder_0(placeholder.s6v_1, placeholder.r6v_1));
      cuts.e(new EndPlaceholder_0(placeholder.t6v_1));
    }
    var ops = mutableListOf([new StyleAdd(0, $this.y7o_1)]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.p() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.m();
    while (tmp2_iterator.n()) {
      var cut = tmp2_iterator.o();
      if (cut instanceof StyleAdd_0) {
        activeStyles.e(cut.g7o_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.y7n(), ops);
        if (prev == null) {
          var tmp_0 = cut.y7n();
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          this_0.v7n($this.u7o_1, cut.g7o_1);
          ops.e(new StyleAdd(tmp_0, this_0));
        } else {
          prev.x7n_1.v7n($this.u7o_1, cut.g7o_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.t2(cut.i7o_1);
          ops.e(new StyleAdd(cut.y7n(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, toPx_0(cut.k7o_1.f71_1, $this.u7o_1, currentStyle.u7m_1), toPx_0(cut.k7o_1.g71_1, $this.u7o_1, currentStyle.u7m_1));
            ops.e(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.e(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.u7o_1, activeStyles.u(0), $this.p7o_1, $this.x7o_1, $this.o7o_1.b77());
    var inductionVariable = 1;
    var last = activeStyles.p();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.v7n($this.u7o_1, activeStyles.u(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).m();
    while (tmp0_iterator.n()) {
      var prevOp = tmp0_iterator.o();
      if (prevOp.y7n() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function makeSkFontRasterizationSettings($this, style) {
    var tmp0_safe_receiver = style.b70_1.w6w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v70_1;
    var rasterizationSettings = tmp1_elvis_lhs == null ? Companion_getInstance_47().m7k() : tmp1_elvis_lhs;
    return toSkFontRastrSettings(rasterizationSettings);
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.y60(makeSkFontRasterizationSettings($this, style));
    pStyle.s60(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = style.z76();
    pStyle.u60(toSkAlignment(it));
    var lineHeight = computedStyle.k7n_1;
    if (!(lineHeight == null) && lineHeight > computedStyle.u7m_1) {
      var tmp0_elvis_lhs = style.d77();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_38().t7i_1 : tmp0_elvis_lhs;
      pStyle.x60(toHeightMode(lineHeightStyle.v7i_1));
    } else {
      pStyle.x60(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.t60(toSkDirection($this.v7o_1));
    var tmp1_safe_receiver = $this.o7o_1.c77();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = $this.u7o_1;
      pStyle.z60(new TextIndent($this$with.g5i(tmp1_safe_receiver.r72_1), $this$with.g5i(tmp1_safe_receiver.s72_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.e7j(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.c7p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).xe = function (a, b) {
    return this.c7p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).x3 = function () {
    return this.c7p_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.x3());
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.y7n();
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp$ret$1 = b.y7n();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.s7n(this$0.m7o_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.o7o_1, this$0.m7o_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.t7n_1, this$0.y7o_1.u7m_1);
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_5().t5h_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h6e_1 : blendMode;
    this.m7o_1 = fontFamilyResolver;
    this.n7o_1 = text;
    this.o7o_1 = textStyle;
    this.p7o_1 = brushSize;
    this.q7o_1 = ellipsis;
    this.r7o_1 = maxLines;
    this.s7o_1 = spanStyles;
    this.t7o_1 = placeholders;
    this.u7o_1 = density;
    this.v7o_1 = textDirection;
    this.w7o_1 = drawStyle;
    this.x7o_1 = blendMode;
    this.y7o_1 = new ComputedStyle();
    var tmp = this;
    tmp.b7p_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).d7p = function (paragraph) {
    if (paragraph == null)
      return Unit_instance;
    prepareDefaultStyle(this);
    var foregroundPaint = this.y7o_1.n7n();
    paragraph.a60(0, this.n7o_1.length, foregroundPaint);
  };
  protoOf(ParagraphBuilder_0).a2u = function () {
    prepareDefaultStyle(this);
    this.a7p_1 = makeOps(this, this.s7o_1, this.t7o_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.o7o_1, this.y7o_1);
    if (!(this.r7o_1 === 2147483647)) {
      ps.v60(this.r7o_1);
      ps.w60(this.q7o_1);
    }
    var tmp = this.m7o_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).h79_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.l7m();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + toString(platformFontLoader));
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).m();
    while (tmp1_iterator.n()) {
      var op = tmp1_iterator.o();
      if (addText && pos < op.y7n()) {
        pb.g60(toString(charSequenceSubSequence(this.n7o_1, pos, op.y7n())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.x7n_1.y7m_1;
        var tmp3_elvis_lhs = op.x7n_1.v7m_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_22().x73_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.x7n_1.w7m_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_20().h74_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.x7n_1.x7m_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_21().k74_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.m7o_1.r79(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.f60(makeSkTextStyle(this, op.x7n_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.a7o_1, op.b7o_1, toSkPlaceholderAlignment(op.z7n_1.k7o_1.h71_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.h60(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.y7n();
    }
    if (addText && pos < this.n7o_1.length) {
      pb.g60(toString(charSequenceSubSequence(this.n7o_1, pos, this.n7o_1.length)));
    }
    return pb.a2u();
  };
  protoOf(ParagraphBuilder_0).r7l = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.b7p_1;
    defaultFont$factory();
    return this_0.c1();
  };
  protoOf(ParagraphBuilder_0).q7l = function (paragraph) {
    var metrics = this.r7l().n5p();
    var tmp0_safe_receiver = this.y7o_1.k7n_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.emptyLineMetrics.<anonymous>' call
      tmp = tmp0_safe_receiver / this.y7o_1.u7m_1;
    }
    var tmp1_elvis_lhs = tmp;
    var heightMultiplier = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    var ascent = metrics.h5q_1 * heightMultiplier;
    var descent = metrics.i5q_1 * heightMultiplier;
    var baseline = paragraph.p5z();
    var height = descent - ascent;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [new LineMetrics(0, 0, 0, 0, true, -ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var fontSize = orDefaultFontSize(_this__u8e3s4.s71_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.y71_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.y71_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.y71_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.f73(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_13().i71_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().m71_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().n71_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().o71_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().j71_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().k71_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().l71_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_39().g70_1 ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_39().h70_1 ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_39().i70_1 ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_39().j70_1 ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_39().k70_1 ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_39().l70_1 ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_36().n7i_1 ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_36().l7i_1 ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_36().m7i_1 ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_36().o7i_1 ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.z2_1) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function resolveFontFamily(_this__u8e3s4, fontFamilyResolver) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp0_safe_receiver = _this__u8e3s4.p76();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.resolveFontFamily.<anonymous>' call
      var tmp0_elvis_lhs = _this__u8e3s4.m76();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_22().x73_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.n76();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_20().h74_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.o76();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_21().k74_1;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.r79(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).c1();
      tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var this_0 = get_DefaultFontSize_0();
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(this_0);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), _TextUnit___get_value__impl__hpbx0k(this_0) * other);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.j7o_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.y7n();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.l7o_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.y7n();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.r7l();
    }, null);
  }
  var properties_initialized_ParagraphBuilder_skiko_kt_5j6rti;
  function _init_properties_ParagraphBuilder_skiko_kt__fblzyk() {
    if (!properties_initialized_ParagraphBuilder_skiko_kt_5j6rti) {
      properties_initialized_ParagraphBuilder_skiko_kt_5j6rti = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new NoCache();
    }
  }
  function invalidateParagraph($this, onlyForeground) {
    if (onlyForeground && $this.l7l_1.s7o_1.j()) {
      $this.n7l_1 = true;
    } else {
      $this.m7l_1 = null;
    }
  }
  function invalidateParagraph$default($this, onlyForeground, $super) {
    onlyForeground = onlyForeground === VOID ? false : onlyForeground;
    return invalidateParagraph($this, onlyForeground);
  }
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.k7l_1 = text;
    this.l7l_1 = new ParagraphBuilder_0(fontFamilyResolver, this.k7l_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.m7l_1 = null;
    this.n7l_1 = false;
    var tmp = this;
    tmp.o7l_1 = NaN;
  }
  protoOf(ParagraphLayouter).w7l = function () {
    return this.l7l_1.r7l();
  };
  protoOf(ParagraphLayouter).p7l = function () {
    return this.l7l_1.o7o_1;
  };
  protoOf(ParagraphLayouter).q7l = function (paragraph) {
    return this.l7l_1.q7l(paragraph);
  };
  protoOf(ParagraphLayouter).t7l = function (maxLines, ellipsis) {
    if (!(this.l7l_1.r7o_1 === maxLines) || !(this.l7l_1.q7o_1 === ellipsis)) {
      this.l7l_1.r7o_1 = maxLines;
      this.l7l_1.q7o_1 = ellipsis;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).x7l = function (color) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setColor.<anonymous>' call
      tmp = this.l7l_1.o7o_1.n68();
    }
    var actualColor = tmp;
    if (!equals(this.l7l_1.o7o_1.n68(), actualColor)) {
      this.l7l_1.o7o_1 = this.l7l_1.o7o_1.i76(actualColor);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).b7m = function (brush, brushSize, alpha) {
    var actualSize = this.l7l_1.p7o_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!equals(this.l7l_1.o7o_1.c73(), brush)) {
      tmp_2 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_2 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(new Long(2143289344, 2143289344));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !sameValueAs(_Size___get_width__impl__58y75t(actualSize), _Size___get_width__impl__58y75t(brushSize));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !sameValueAs(_Size___get_height__impl__a04p02(actualSize), _Size___get_height__impl__a04p02(brushSize));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !sameValueAs(this.l7l_1.o7o_1.o64(), alpha);
    }
    if (tmp) {
      this.l7l_1.o7o_1 = this.l7l_1.o7o_1.k76(brush, alpha);
      this.l7l_1.p7o_1 = brushSize;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).v7l = function (brushSize) {
    if (!equals(this.l7l_1.p7o_1, brushSize)) {
      this.l7l_1.p7o_1 = brushSize;
      var tmp;
      var tmp_0 = this.l7l_1.o7o_1.c73();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = true;
      } else {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var this_0 = this.l7l_1.s7o_1;
          var tmp_1;
          if (isInterface(this_0, Collection)) {
            tmp_1 = this_0.j();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var element = tmp0_iterator.o();
            // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setBrushSize.<anonymous>' call
            var tmp_2 = element.r6v_1.c73();
            if (tmp_2 instanceof ShaderBrush) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
          }
          tmp$ret$0 = false;
        }
        tmp = tmp$ret$0;
      }
      if (tmp) {
        invalidateParagraph(this, true);
      }
    }
  };
  protoOf(ParagraphLayouter).y7l = function (shadow, textDecoration) {
    if (!equals(this.l7l_1.o7o_1.x76(), shadow) || !equals(this.l7l_1.o7o_1.w76(), textDecoration)) {
      this.l7l_1.o7o_1 = this.l7l_1.o7o_1.i76(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).z7l = function (drawStyle) {
    if (!equals(this.l7l_1.w7o_1, drawStyle)) {
      this.l7l_1.w7o_1 = drawStyle;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).a7m = function (blendMode) {
    if (!(this.l7l_1.x7o_1 === blendMode)) {
      this.l7l_1.x7o_1 = blendMode;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).u7l = function (width) {
    var paragraph = this.m7l_1;
    var tmp;
    if (!(paragraph == null)) {
      var layoutRequired = false;
      if (this.n7l_1) {
        this.l7l_1.d7p(paragraph);
        this.n7l_1 = false;
        paragraph.z5z();
        layoutRequired = true;
      }
      if (!sameValueAs(this.o7l_1, width)) {
        this.o7l_1 = width;
        layoutRequired = true;
      }
      if (layoutRequired) {
        paragraph.r5z(width);
      }
      tmp = paragraph;
    } else {
      paragraph = this.l7l_1.a2u();
      paragraph.r5z(width);
      this.m7l_1 = paragraph;
      this.n7l_1 = false;
      return paragraph;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - other;
    return Math.abs(x) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'kotlin.getValue' call
    var this_0 = GenericFontFamiliesMapping$delegate;
    GenericFontFamiliesMapping$factory();
    return this_0.c1();
  }
  var GenericFontFamiliesMapping$delegate;
  function FontLoadResult(typeface, aliases) {
    this.t7n_1 = typeface;
    this.u7n_1 = aliases;
  }
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LoadedFont() {
  }
  function FontLoader() {
    this.e7p_1 = new FontCache();
    this.f7p_1 = createFontFamilyResolver(this.e7p_1);
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.o7m_1.v(key)) {
      $this.n7m_1.q62(typeface, key);
      $this.o7m_1.e(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_0 = fontFamily.m7d_1;
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        if (element instanceof SystemFont) {
          destination.e(element);
        }
      }
      var fonts = destination;
      var tmp_0;
      if (fonts.p() === fontFamily.m7d_1.p()) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(fonts, 10));
        var tmp0_iterator_0 = fonts.m();
        while (tmp0_iterator_0.n()) {
          var item = tmp0_iterator_0.o();
          // Inline function 'androidx.compose.ui.text.platform.FontCache.ensureRegistered.<anonymous>' call
          var tmp$ret$2 = item.k7p_1;
          destination_0.e(tmp$ret$2);
        }
        tmp_0 = destination_0;
      } else {
        throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + toString(fontFamily));
      }
      tmp = tmp_0;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_1 = fontFamily.h7p_1;
        var typeface = tmp_1 instanceof SkiaBackedTypeface ? tmp_1 : THROW_CCE();
        ensureRegistered($this, typeface.i7p_1, typeface.j7p_1);
        tmp = listOf_0(typeface.j7p_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_16().o74_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + toString(fontFamily));
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.m7m_1 = FontCollection_init_$Create$();
    this.n7m_1 = TypefaceFontProviderWithFallback_init_$Create$();
    this.o7m_1 = HashSet_init_$Create$();
    this.p7m_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.m7m_1.j5y(new FontMgrWithFallback(this.n7m_1));
    this.m7m_1.i5y(this.n7m_1);
  }
  protoOf(FontCache).q7m = function (font) {
    var tmp = font.h7j();
    var typeface = this.p7m_1.f7j(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.h7j());
    return new FontLoadResult(typeface, listOf_0(font.h7j()));
  };
  protoOf(FontCache).k7m = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).j5r(fontWeight.t72_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.m7m_1.l5y(tmp$ret$0, style)), aliases);
  };
  function SystemFont() {
  }
  function SkiaBackedTypeface() {
  }
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().s2(_this__u8e3s4.k78_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + _this__u8e3s4.k78_1;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().z2_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_16().o74_1.k78_1, listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_16().p74_1.k78_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_16().q74_1.k78_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_16().r74_1.k78_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_16().o74_1.k78_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_16().p74_1.k78_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().q74_1.k78_1, listOf_0('Consolas')), to(Companion_getInstance_16().r74_1.k78_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_16().o74_1.k78_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_16().p74_1.k78_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_16().q74_1.k78_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_16().r74_1.k78_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_16().o74_1.k78_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_16().p74_1.k78_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_16().q74_1.k78_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_16().r74_1.k78_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_16().o74_1.k78_1, listOf_0('Arial')), to(Companion_getInstance_16().p74_1.k78_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().q74_1.k78_1, listOf_0('Consolas')), to(Companion_getInstance_16().r74_1.k78_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_8().f66_1 : blendMode;
    canvas.n69();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.w6x_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.u(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.x6x_1.t6y(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.q69(0.0, item.x6x_1.y5g());
      }
       while (inductionVariable <= last);
    canvas.o69();
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.a7l_1, $this.g7l_1, $this.b7l_1, $this.c7l_1, $this.d7l_1, $this.e7l_1, $this.f7l_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.a7l_1 = text;
    this.b7l_1 = style;
    this.c7l_1 = spanStyles;
    this.d7l_1 = placeholders;
    this.e7l_1 = density;
    this.f7l_1 = fontFamilyResolver;
    this.g7l_1 = resolveTextDirection_1(this.a7l_1, this.b7l_1.a77(), this.b7l_1.u76());
    this.h7l_1 = newLayouter(this);
    this.i7l_1 = 0.0;
    this.j7l_1 = 0.0;
    var tmp = ensureNotNull(this.h7l_1);
    var para = tmp.u7l(Infinity);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.n5z();
    tmp_0.i7l_1 = Math.ceil(x);
    var tmp_1 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.o5z();
    tmp_1.j7l_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).s7l = function () {
    var tmp0_elvis_lhs = this.h7l_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.h7l_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).n5z = function () {
    return this.i7l_1;
  };
  protoOf(SkiaParagraphIntrinsics).o5z = function () {
    return this.j7l_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_41().w6z_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_41().u6z_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_41().v6z_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_41().w6z_1 ? true : tmp1_subject === Companion_getInstance_41().z6z_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_41().x6z_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_41().y6z_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_46().c7j_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_46().d7j_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_instance_20.k2m() : locale).w72_1)) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  function clearShader($this) {
    $this.q7n_1 = null;
    $this.p7n_1 = null;
    $this.r7n_1 = null;
    $this.i5t(null);
  }
  function SkiaTextPaint$setBrush$lambda($brush, $size) {
    return function () {
      return $brush.y67($size);
    };
  }
  function SkiaTextPaint() {
    this.o7n_1 = Paint();
    this.p7n_1 = null;
    this.q7n_1 = null;
    this.r7n_1 = null;
  }
  protoOf(SkiaTextPaint).o68 = function (_set____db54di) {
    this.o7n_1.o68(_set____db54di);
  };
  protoOf(SkiaTextPaint).o64 = function () {
    return this.o7n_1.o64();
  };
  protoOf(SkiaTextPaint).b6k = function (_set____db54di) {
    this.o7n_1.b6k(_set____db54di);
  };
  protoOf(SkiaTextPaint).c6k = function () {
    return this.o7n_1.c6k();
  };
  protoOf(SkiaTextPaint).m68 = function (_set____db54di) {
    this.o7n_1.m68(_set____db54di);
  };
  protoOf(SkiaTextPaint).n68 = function () {
    return this.o7n_1.n68();
  };
  protoOf(SkiaTextPaint).z6j = function (_set____db54di) {
    this.o7n_1.z6j(_set____db54di);
  };
  protoOf(SkiaTextPaint).a6k = function () {
    return this.o7n_1.a6k();
  };
  protoOf(SkiaTextPaint).d6k = function (_set____db54di) {
    this.o7n_1.d6k(_set____db54di);
  };
  protoOf(SkiaTextPaint).e6k = function () {
    return this.o7n_1.e6k();
  };
  protoOf(SkiaTextPaint).y5s = function (_set____db54di) {
    this.o7n_1.y5s(_set____db54di);
  };
  protoOf(SkiaTextPaint).x6j = function (_set____db54di) {
    this.o7n_1.x6j(_set____db54di);
  };
  protoOf(SkiaTextPaint).y6j = function () {
    return this.o7n_1.y6j();
  };
  protoOf(SkiaTextPaint).i5t = function (_set____db54di) {
    this.o7n_1.i5t(_set____db54di);
  };
  protoOf(SkiaTextPaint).j5t = function () {
    return this.o7n_1.j5t();
  };
  protoOf(SkiaTextPaint).r6j = function (_set____db54di) {
    this.o7n_1.r6j(_set____db54di);
  };
  protoOf(SkiaTextPaint).s6j = function () {
    return this.o7n_1.s6j();
  };
  protoOf(SkiaTextPaint).v6j = function (_set____db54di) {
    this.o7n_1.v6j(_set____db54di);
  };
  protoOf(SkiaTextPaint).w6j = function () {
    return this.o7n_1.w6j();
  };
  protoOf(SkiaTextPaint).t6j = function (_set____db54di) {
    this.o7n_1.t6j(_set____db54di);
  };
  protoOf(SkiaTextPaint).u6j = function () {
    return this.o7n_1.u6j();
  };
  protoOf(SkiaTextPaint).d5t = function (_set____db54di) {
    this.o7n_1.d5t(_set____db54di);
  };
  protoOf(SkiaTextPaint).e5t = function () {
    return this.o7n_1.e5t();
  };
  protoOf(SkiaTextPaint).l6j = function (_set____db54di) {
    this.o7n_1.l6j(_set____db54di);
  };
  protoOf(SkiaTextPaint).o6t = function () {
    return this.o7n_1.o6t();
  };
  protoOf(SkiaTextPaint).b7m = function (brush, size, alpha) {
    if (brush == null) {
      clearShader(this);
    } else {
      if (brush instanceof SolidColor) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_0 = this.n68();
        if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          this.m68(modulate(brush.q68_1, alpha));
          clearShader(this);
        }
      } else {
        if (brush instanceof ShaderBrush) {
          var tmp;
          if (!equals(this.p7n_1, brush)) {
            tmp = true;
          } else {
            var tmp_0 = this.r7n_1;
            tmp = !equals(tmp_0 == null ? null : new Size_0(tmp_0), new Size_0(size));
          }
          if (tmp) {
            // Inline function 'androidx.compose.ui.geometry.isSpecified' call
            if (!_Size___get_packedValue__impl__7rlt1o(size).equals(new Long(2143289344, 2143289344))) {
              this.p7n_1 = brush;
              this.r7n_1 = size;
              var tmp_1 = this;
              tmp_1.q7n_1 = derivedStateOf(SkiaTextPaint$setBrush$lambda(brush, size));
            }
          }
          var tmp1_safe_receiver = this.q7n_1;
          this.i5t(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c1());
          this.o68(isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
        }
      }
    }
  };
  protoOf(SkiaTextPaint).z7l = function (drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      this.l6j(Companion_getInstance_9().p6e_1);
    } else {
      if (drawStyle instanceof Stroke) {
        this.l6j(Companion_getInstance_9().q6e_1);
        this.d5t(drawStyle.m6j_1);
        this.t6j(drawStyle.n6j_1);
        this.v6j(drawStyle.p6j_1);
        this.r6j(drawStyle.o6j_1);
        this.x6j(drawStyle.q6j_1);
      }
    }
  };
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_38() {
    Companion_instance_39 = this;
    this.n70_1 = _LineBreak___init__impl__o5i11q(1);
    this.o70_1 = _LineBreak___init__impl__o5i11q(2);
    this.p70_1 = _LineBreak___init__impl__o5i11q(3);
    this.q70_1 = _LineBreak___init__impl__o5i11q(4);
  }
  var Companion_instance_39;
  function Companion_getInstance_51() {
    if (Companion_instance_39 == null)
      new Companion_38();
    return Companion_instance_39;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === (other instanceof LineBreak ? other.a71_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_51();
    this.a71_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.a71_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.a71_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.a71_1, other);
  };
  function Companion_39() {
    Companion_instance_40 = this;
    this.d71_1 = new TextMotion();
    this.e71_1 = new TextMotion();
  }
  var Companion_instance_40;
  function Companion_getInstance_52() {
    if (Companion_instance_40 == null)
      new Companion_39();
    return Companion_instance_40;
  }
  function TextMotion() {
    Companion_getInstance_52();
  }
  function get_rtlLanguagesSet() {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  function get_language(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return _this__u8e3s4.language;
  }
  function get_region(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    var tmp0_elvis_lhs = _this__u8e3s4.region;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  }
  function getLanguageTag(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return _this__u8e3s4.baseName;
  }
  function createPlatformLocaleDelegate() {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return new createPlatformLocaleDelegate$1();
  }
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return new Intl.Locale(languageTag);
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return get_rtlLanguagesSet().v(get_language(_this__u8e3s4));
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).k2m = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      var tmp$ret$0 = new Locale(toIntlLocale(item));
      destination.e(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  protoOf(createPlatformLocaleDelegate$1).e7i = function (languageTag) {
    return toIntlLocale(languageTag);
  };
  var properties_initialized_JsPlatformLocale_web_kt_cqhywu;
  function _init_properties_JsPlatformLocale_web_kt__p8iahw() {
    if (!properties_initialized_JsPlatformLocale_web_kt_cqhywu) {
      properties_initialized_JsPlatformLocale_web_kt_cqhywu = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
    }
  }
  function currentPlatform() {
    switch (get_hostOs().z2_1) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + toString(font));
    }
    var tmp;
    if (font instanceof LoadedFont) {
      var tmp1_elvis_lhs = Companion_getInstance_10().x5q_1.b5r(Companion_getInstance_11().x5o(font.l7p_1()));
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'loadTypeface makeFromData failed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (font instanceof SystemFont) {
        var tmp2_elvis_lhs = Companion_getInstance_10().x5q_1.c5r(font.g7j(), get_skFontStyle(font));
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          var message_0 = 'loadTypeface legacyMakeTypeface failed';
          throw IllegalStateException_init_$Create$(toString(message_0));
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function get_skFontStyle(_this__u8e3s4) {
    return FontStyle_init_$Create$(_this__u8e3s4.i5r().t72_1, 5, _this__u8e3s4.d78() === Companion_getInstance_20().i74_1 ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).s79 = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).t79 = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).u79 = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).v79 = interceptFontSynthesis;
  protoOf(Unspecified).i73 = merge;
  protoOf(Unspecified).g74 = takeOrElse;
  protoOf(BrushStyle).i73 = merge;
  protoOf(BrushStyle).g74 = takeOrElse;
  protoOf(ColorStyle).i73 = merge;
  protoOf(ColorStyle).g74 = takeOrElse;
  protoOf(SkiaParagraph).r7k = paint$default;
  protoOf(SkiaParagraph).s7k = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).f70 = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultCacheSize = 8;
  TextPainter_instance = new TextPainter();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_20 = new Companion_19();
  Unspecified_instance = new Unspecified();
  Companion_instance_30 = new Companion_29();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = FontSynthesis;
  _.$_$.c = createFontFamilyResolver_0;
  _.$_$.d = CommitTextCommand;
  _.$_$.e = DeleteAllCommand;
  _.$_$.f = DeleteSurroundingTextCommand;
  _.$_$.g = EditProcessor;
  _.$_$.h = FinishComposingTextCommand;
  _.$_$.i = ImeAction;
  _.$_$.j = ImeOptions;
  _.$_$.k = KeyboardCapitalization;
  _.$_$.l = KeyboardType;
  _.$_$.m = PasswordVisualTransformation;
  _.$_$.n = notifyFocusedRect;
  _.$_$.o = updateTextLayoutResult;
  _.$_$.p = PlatformTextInputService;
  _.$_$.q = SetSelectionCommand;
  _.$_$.r = TextFieldValue;
  _.$_$.s = TextInputService;
  _.$_$.t = TransformedText;
  _.$_$.u = getSelectedText;
  _.$_$.v = getTextAfterSelection;
  _.$_$.w = getTextBeforeSelection;
  _.$_$.x = FontLoader;
  _.$_$.y = LineHeightStyle;
  _.$_$.z = TextAlign;
  _.$_$.a1 = TextOverflow;
  _.$_$.b1 = Builder;
  _.$_$.c1 = Clickable;
  _.$_$.d1 = Url;
  _.$_$.e1 = MultiParagraphIntrinsics;
  _.$_$.f1 = MultiParagraph;
  _.$_$.g1 = ParagraphIntrinsics_0;
  _.$_$.h1 = Paragraph;
  _.$_$.i1 = Paragraph_0;
  _.$_$.j1 = TextLayoutResult;
  _.$_$.k1 = TextRange_1;
  _.$_$.l1 = TextRange_0;
  _.$_$.m1 = TextRange;
  _.$_$.n1 = lerp_6;
  _.$_$.o1 = resolveDefaults;
  _.$_$.p1 = ResolvedTextDirection_Ltr_getInstance;
  _.$_$.q1 = ResolvedTextDirection_Rtl_getInstance;
  _.$_$.r1 = CommitTextCommand_init_$Create$;
  _.$_$.s1 = SetComposingTextCommand_init_$Create$;
  _.$_$.t1 = TextFieldValue_init_$Create$;
  _.$_$.u1 = AnnotatedString_init_$Create$;
  _.$_$.v1 = Builder_init_$Create$;
  _.$_$.w1 = Range_init_$Create$;
  _.$_$.x1 = SpanStyle_init_$Create$;
  _.$_$.y1 = TextLayoutInput_init_$Create$;
  _.$_$.z1 = TextStyle_init_$Create$_1;
  _.$_$.a2 = ImeAction__hashCode_impl_m1mrob;
  _.$_$.b2 = ImeAction__toString_impl_r8bdhy;
  _.$_$.c2 = KeyboardCapitalization__hashCode_impl_6ibuz5;
  _.$_$.d2 = KeyboardCapitalization__toString_impl_f8u1tq;
  _.$_$.e2 = KeyboardType__hashCode_impl_mw6m33;
  _.$_$.f2 = KeyboardType__toString_impl_150pa8;
  _.$_$.g2 = _TextOverflow___init__impl__obguoe;
  _.$_$.h2 = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.i2 = TextOverflow__toString_impl_10s0c2;
  _.$_$.j2 = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.k2 = _TextRange___get_collapsed__impl__cilesp;
  _.$_$.l2 = _TextRange___get_end__impl__gcdxpp;
  _.$_$.m2 = _TextRange___get_length__impl__7qes3a;
  _.$_$.n2 = _TextRange___get_max__impl__owm8m;
  _.$_$.o2 = _TextRange___get_min__impl__uu95c4;
  _.$_$.p2 = _TextRange___get_reversed__impl__emhnbm;
  _.$_$.q2 = _TextRange___get_start__impl__ww4t90;
  _.$_$.r2 = Companion_getInstance_16;
  _.$_$.s2 = Companion_getInstance_20;
  _.$_$.t2 = Companion_getInstance_21;
  _.$_$.u2 = Companion_getInstance_22;
  _.$_$.v2 = Companion_getInstance_25;
  _.$_$.w2 = Companion_getInstance_26;
  _.$_$.x2 = Companion_getInstance_27;
  _.$_$.y2 = Companion_getInstance_28;
  _.$_$.z2 = Companion_getInstance_29;
  _.$_$.a3 = Companion_getInstance_31;
  _.$_$.b3 = Companion_instance_20;
  _.$_$.c3 = Companion_getInstance_33;
  _.$_$.d3 = Companion_getInstance_37;
  _.$_$.e3 = Companion_getInstance_36;
  _.$_$.f3 = Companion_getInstance_39;
  _.$_$.g3 = Companion_getInstance_40;
  _.$_$.h3 = Companion_getInstance_45;
  _.$_$.i3 = TextPainter_instance;
  _.$_$.j3 = Companion_getInstance_14;
  _.$_$.k3 = Companion_getInstance_15;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-text.js.map
