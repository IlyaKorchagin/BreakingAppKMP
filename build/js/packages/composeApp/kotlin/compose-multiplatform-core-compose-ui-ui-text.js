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
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var emptyList = kotlin_kotlin.$_$.a8;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var VOID = kotlin_kotlin.$_$.i;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var hashCode = kotlin_kotlin.$_$.zc;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var isInterface = kotlin_kotlin.$_$.qd;
  var Comparator = kotlin_kotlin.$_$.pi;
  var compareValues = kotlin_kotlin.$_$.fb;
  var sortedWith = kotlin_kotlin.$_$.pa;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var CharSequence = kotlin_kotlin.$_$.li;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var coerceIn = kotlin_kotlin.$_$.ef;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var coerceAtLeast = kotlin_kotlin.$_$.xe;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var addAll = kotlin_kotlin.$_$.v6;
  var plus = kotlin_kotlin.$_$.aa;
  var last = kotlin_kotlin.$_$.i9;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var compareTo = kotlin_kotlin.$_$.nc;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.l;
  var lazy = kotlin_kotlin.$_$.ek;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var numberToInt = kotlin_kotlin.$_$.de;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var Enum = kotlin_kotlin.$_$.qi;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.d;
  var arrayListOf = kotlin_kotlin.$_$.x6;
  var KtList = kotlin_kotlin.$_$.m6;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b4;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z2;
  var Long = kotlin_kotlin.$_$.wi;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Saver_0 = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.c;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var toLong = kotlin_kotlin.$_$.je;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var first = kotlin_kotlin.$_$.l8;
  var KtMap = kotlin_kotlin.$_$.o6;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var MutableCollection = kotlin_kotlin.$_$.p6;
  var println = kotlin_kotlin.$_$.cc;
  var copyOf = kotlin_kotlin.$_$.x7;
  var copyOf_0 = kotlin_kotlin.$_$.w7;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var arrayCopy = kotlin_kotlin.$_$.w6;
  var ClassCastException = kotlin_kotlin.$_$.ni;
  var NullPointerException = kotlin_kotlin.$_$.zi;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var Exception = kotlin_kotlin.$_$.si;
  var IllegalStateException = kotlin_kotlin.$_$.ui;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var get_indices = kotlin_kotlin.$_$.w8;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n2;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.nb;
  var Element = kotlin_kotlin.$_$.wb;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var to = kotlin_kotlin.$_$.sk;
  var mutableListOf = kotlin_kotlin.$_$.t9;
  var Companion_instance = kotlin_kotlin.$_$.s5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o3;
  var createFailure = kotlin_kotlin.$_$.xj;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q3;
  var KMutableProperty1 = kotlin_kotlin.$_$.lf;
  var listOf = kotlin_kotlin.$_$.n9;
  var Comparable = kotlin_kotlin.$_$.oi;
  var Collection = kotlin_kotlin.$_$.h6;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var isNaN_0 = kotlin_kotlin.$_$.ck;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var toList = kotlin_kotlin.$_$.xa;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h4;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.v5;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.q5;
  var isLowSurrogate = kotlin_kotlin.$_$.xg;
  var isHighSurrogate = kotlin_kotlin.$_$.wg;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var sequence = kotlin_kotlin.$_$.ag;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i3;
  var SequenceScope = kotlin_kotlin.$_$.pf;
  var numberRangeToNumber = kotlin_kotlin.$_$.zd;
  var lazy_0 = kotlin_kotlin.$_$.fk;
  var FontRastrSettings = kotlin_org_jetbrains_skiko_skiko.$_$.b5;
  var FontEdging_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var FontEdging_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var FontHinting_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var FontHinting_SLIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var FontHinting_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var FontHinting_FULL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var asList = kotlin_kotlin.$_$.y6;
  var binarySearch = kotlin_kotlin.$_$.c7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.d9;
  var coerceAtMost = kotlin_kotlin.$_$.bf;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var firstOrNull = kotlin_kotlin.$_$.j8;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var lastOrNull = kotlin_kotlin.$_$.h9;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d2;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q1;
  var getOrNull = kotlin_kotlin.$_$.o8;
  var isWhitespace = kotlin_kotlin.$_$.zg;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.c5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.o4;
  var copyToArray = kotlin_kotlin.$_$.y7;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var BlendMode__toString_impl_uuibkd = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.q4;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.a5;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nk;
  var sortWith = kotlin_kotlin.$_$.na;
  var asReversed = kotlin_kotlin.$_$.z6;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.e5;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.h5;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a4;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.d5;
  var charSequenceSubSequence = kotlin_kotlin.$_$.mc;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.f5;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
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
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var KProperty0 = kotlin_kotlin.$_$.mf;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var listOf_0 = kotlin_kotlin.$_$.m9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.t3;
  var TypefaceFontProviderWithFallback_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var FontMgrWithFallback = kotlin_org_jetbrains_skiko_skiko.$_$.m5;
  var first_0 = kotlin_kotlin.$_$.m8;
  var mapOf = kotlin_kotlin.$_$.p9;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var firstOrNull_0 = kotlin_kotlin.$_$.i8;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var coerceIn_0 = kotlin_kotlin.$_$.df;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var setOf = kotlin_kotlin.$_$.la;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.x5;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.p4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Range, 'Range');
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
    return Companion_getInstance_19().w6x_1;
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
  initMetadataForClass(TextInputService, 'TextInputService');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Locale, 'Locale');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(LocaleList, 'LocaleList', VOID, VOID, [Collection]);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(BaselineShift, 'BaselineShift');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(Hyphens, 'Hyphens');
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(LineHeightStyle, 'LineHeightStyle');
  initMetadataForClass(ResolvedTextDirection, 'ResolvedTextDirection', VOID, Enum);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TextDecoration, 'TextDecoration');
  initMetadataForCompanion(Companion_19);
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
      var tmp_1 = other.v5w();
      tmp = new BrushStyle(other.d74_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
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
          tmp = other.h6t(TextForegroundStyle$merge$lambda_0(this));
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
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(BrushStyle, 'BrushStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForClass(ColorStyle, 'ColorStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(TextGeometricTransform, 'TextGeometricTransform', TextGeometricTransform);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(TextIndent_0, 'TextIndent', TextIndent_0);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(TextOverflow, 'TextOverflow');
  initMetadataForClass(NoCache, 'NoCache', NoCache);
  initMetadataForClass(PlatformFont, 'PlatformFont', VOID, VOID, [Font]);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(ExpireAfterAccessCache, 'ExpireAfterAccessCache');
  initMetadataForCompanion(Companion_24);
  initMetadataForLambda(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(_get_codePoints_$slambda_43x8dt, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(FontRasterizationSettings, 'FontRasterizationSettings');
  initMetadataForClass(FontSmoothing, 'FontSmoothing', VOID, Enum);
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().p60_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().j66_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.z6o(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.z6o.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
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
    blendMode = blendMode === VOID ? Companion_getInstance_0().j66_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.b6p(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.b6p.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  initMetadataForInterface(Paragraph_1, 'Paragraph');
  initMetadataForClass(SkiaParagraph, 'SkiaParagraph', VOID, VOID, [Paragraph_1]);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(TextDecorationLineStyle, 'TextDecorationLineStyle');
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
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(LineBreak, 'LineBreak');
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(TextMotion, 'TextMotion');
  initMetadataForClass(createPlatformLocaleDelegate$1);
  //endregion
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
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
    if (spanStyles.q()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3;
    if (paragraphStyles.q()) {
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
    this.o6m_1 = item;
    this.p6m_1 = start;
    this.q6m_1 = end;
    this.r6m_1 = tag;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.p6m_1 <= this.q6m_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Range).gb = function () {
    return this.o6m_1;
  };
  protoOf(Range).hb = function () {
    return this.p6m_1;
  };
  protoOf(Range).l6c = function () {
    return this.q6m_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + toString_0(this.o6m_1) + ', start=' + this.p6m_1 + ', end=' + this.q6m_1 + ', tag=' + this.r6m_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.o6m_1 == null ? 0 : hashCode(this.o6m_1);
    result = imul(result, 31) + this.p6m_1 | 0;
    result = imul(result, 31) + this.q6m_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.r6m_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.o6m_1, tmp0_other_with_cast.o6m_1))
      return false;
    if (!(this.p6m_1 === tmp0_other_with_cast.p6m_1))
      return false;
    if (!(this.q6m_1 === tmp0_other_with_cast.q6m_1))
      return false;
    if (!(this.r6m_1 === tmp0_other_with_cast.r6m_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.s6m_1 = get_AnnotatedStringSaver();
  }
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.t6m_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.t6m_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.t6m_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.p6m_1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp$ret$1 = b.p6m_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    Companion_getInstance_12();
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.u6m_1 = text;
    this.v6m_1 = spanStylesOrNull;
    this.w6m_1 = paragraphStylesOrNull;
    this.x6m_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.w6m_1;
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
      var last = tmp1_safe_receiver.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.o(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.p6m_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.q6m_1 <= this.u6m_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.p6m_1 + ', ' + item.q6m_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.q6m_1;
        }
         while (inductionVariable <= last);
    }
  }
  protoOf(AnnotatedString).y6m = function () {
    var tmp0_elvis_lhs = this.v6m_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).z6m = function () {
    var tmp0_elvis_lhs = this.w6m_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).a = function () {
    return this.u6m_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charSequenceGet(this.u6m_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 && endIndex === this.u6m_1.length)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.u6m_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.v6m_1, startIndex, endIndex), filterRanges(this.w6m_1, startIndex, endIndex), filterRanges(this.x6m_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).a6n = function (start, end) {
    var tmp0_safe_receiver = this.x6m_1;
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
        var last = tmp0_safe_receiver.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.o(index);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.AnnotatedString.hasLinkAnnotations.<anonymous>' call
            var tmp_0;
            var tmp_1 = item.o6m_1;
            if (tmp_1 instanceof LinkAnnotation) {
              tmp_0 = intersect(start, end, item.p6m_1, item.q6m_1);
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
    if (!(this.u6m_1 === other.u6m_1))
      return false;
    if (!equals(this.v6m_1, other.v6m_1))
      return false;
    if (!equals(this.w6m_1, other.w6m_1))
      return false;
    if (!equals(this.x6m_1, other.x6m_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.u6m_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.v6m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.w6m_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.x6m_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.u6m_1;
  };
  protoOf(AnnotatedString).b6n = function (other) {
    return equals(this.x6m_1, other.x6m_1);
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
    var target = ArrayList_init_$Create$(nonNullRange.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.o(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.p6m_1, item.q6m_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.o(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = item_0.p6m_1;
        var tmp_0 = Math.max(start, b) - start | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = item_0.q6m_1;
        var tmp$ret$4 = Math.min(end, b_0);
        var element = new Range(item_0.o6m_1, tmp_0, tmp$ret$4 - start | 0, item_0.r6m_1);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    if (target_0.q()) {
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
    var tmp0_elvis_lhs = _this__u8e3s4.v6m_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 && end >= _this__u8e3s4.u6m_1.length) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(spanStyles.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.o(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.p6m_1, item.q6m_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.o(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        var element = Range_init_$Create$(item_0.o6m_1, coerceIn(item_0.p6m_1, start, end) - start | 0, coerceIn(item_0.q6m_1, start, end) - start | 0);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return baseStart <= targetStart && targetEnd <= baseEnd && (!(baseEnd === targetEnd) || targetStart === targetEnd === (baseStart === baseEnd));
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.u6m_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.u6m_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.w6m_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$_0();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.o(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.gb();
        var start = item.hb();
        var end = item.l6c();
        if (!(start === lastOffset)) {
          result.e(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.e(Range_init_$Create$(defaultParagraphStyle.l6n(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.e(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.q()) {
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
    this.m6n_1 = url;
    this.n6n_1 = styles;
    this.o6n_1 = linkInteractionListener;
  }
  protoOf(Url).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Url))
      return false;
    if (!(this.m6n_1 === other.m6n_1))
      return false;
    if (!equals(this.n6n_1, other.n6n_1))
      return false;
    if (!equals(this.o6n_1, other.o6n_1))
      return false;
    return true;
  };
  protoOf(Url).hashCode = function () {
    var result = getStringHashCode(this.m6n_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.n6n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.o6n_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Url).toString = function () {
    return 'LinkAnnotation.Url(url=' + this.m6n_1 + ')';
  };
  function Clickable(tag, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    LinkAnnotation.call(this);
    this.p6n_1 = tag;
    this.q6n_1 = styles;
    this.r6n_1 = linkInteractionListener;
  }
  protoOf(Clickable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Clickable))
      return false;
    if (!(this.p6n_1 === other.p6n_1))
      return false;
    if (!equals(this.q6n_1, other.q6n_1))
      return false;
    if (!equals(this.r6n_1, other.r6n_1))
      return false;
    return true;
  };
  protoOf(Clickable).hashCode = function () {
    var result = getStringHashCode(this.p6n_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q6n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.r6n_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Clickable).toString = function () {
    return 'LinkAnnotation.Clickable(tag=' + this.p6n_1 + ')';
  };
  function LinkAnnotation() {
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.x6n_1.s6n_1;
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).u6m_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= lineIndex ? lineIndex < $this.c6o_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.c6o_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $path.j67(paragraphInfo.o6o(paragraphInfo.f6o_1.n6o(paragraphInfo.m6o($start), paragraphInfo.m6o($end))));
      return Unit_instance;
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.x6n_1 = intrinsics;
    this.y6n_1 = maxLines;
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
    var paragraphInfoList = ArrayList_init_$Create$_0();
    var infoList = this.x6n_1.w6n_1;
    var inductionVariable = 0;
    var last = infoList.j() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.o(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.p6o_1, Constraints(VOID, tmp, VOID, tmp_0), this.y6n_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.g5a();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.s6o() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.e(new ParagraphInfo(paragraph, paragraphInfo.q6o_1, paragraphInfo.r6o_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.t6o() || (endLineIndex === this.y6n_1 && !(index === get_lastIndex(this.x6n_1.w6n_1)))) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.b6o_1 = currentHeight;
    this.c6o_1 = currentLineCount;
    this.z6n_1 = didExceedMaxLines;
    this.e6o_1 = paragraphInfoList;
    this.a6o_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(paragraphInfoList.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.o(index_0);
        // Inline function 'androidx.compose.ui.util.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.f6o_1.u6o();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$(this_0.j());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.j() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.o(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var element = item_0 == null ? null : item.v6o(item_0);
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
    if (target.j() < this.x6n_1.t6n_1.j()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.x6n_1.t6n_1.j() - target.j() | 0;
      var list_0 = ArrayList_init_$Create$(size);
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
    tmp_1.d6o_1 = tmp_2;
  }
  protoOf(MultiParagraph).w6o = function () {
    var tmp;
    if (this.e6o_1.q()) {
      tmp = 0.0;
    } else {
      tmp = this.e6o_1.o(0).f6o_1.w6o();
    }
    return tmp;
  };
  protoOf(MultiParagraph).x6o = function () {
    var tmp;
    if (this.e6o_1.q()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      var $this$with = last(this.e6o_1);
      tmp = $this$with.y6o($this$with.f6o_1.x6o());
    }
    return tmp;
  };
  protoOf(MultiParagraph).z6o = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.r61();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.e6o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.f6o_1.z6o(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.u61(0.0, item.f6o_1.g5a());
      }
       while (inductionVariable <= last);
    canvas.s61();
  };
  protoOf(MultiParagraph).a6p = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().p60_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().j66_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.z6o(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.z6o.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).b6p = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).c6p = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
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
    blendMode = blendMode === VOID ? Companion_getInstance_0().j66_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.b6p(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.b6p.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).n6o = function (start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= start ? start <= end : false) && end <= _get_annotatedString__kqljtk(this).u6m_1.length)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).u6m_1.length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_0(start, end);
    findParagraphsByRange(this.e6o_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).d6p = function (vertical) {
    var paragraphIndex = findParagraphByY(this.e6o_1, vertical);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.i6o_1;
    } else {
      tmp = $this$with.f6p($this$with.f6o_1.d6p($this$with.e6p(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).g6p = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.e6o_1);
    } else {
      tmp = findParagraphByIndex(this.e6o_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    return $this$with.f6o_1.g6p($this$with.m6o(offset));
  };
  protoOf(MultiParagraph).h6p = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.e6o_1);
    } else {
      tmp = findParagraphByIndex(this.e6o_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    return $this$with.f6o_1.h6p($this$with.m6o(offset));
  };
  protoOf(MultiParagraph).i6p = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.e6o_1);
    } else {
      tmp = findParagraphByIndex(this.e6o_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    return $this$with.j6p($this$with.f6o_1.i6p($this$with.m6o(offset)), false);
  };
  protoOf(MultiParagraph).l6p = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.e6o_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.e6o_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    return $this$with.f6p($this$with.f6o_1.l6p($this$with.m6o(offset)));
  };
  protoOf(MultiParagraph).m6p = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.e6o_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    return $this$with.y6o($this$with.f6o_1.m6p($this$with.n6p(lineIndex)));
  };
  protoOf(MultiParagraph).o6p = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.e6o_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    return $this$with.p6p($this$with.f6o_1.o6p($this$with.n6p(lineIndex)));
  };
  protoOf(MultiParagraph).q6p = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.e6o_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    var $this$with = this.e6o_1.o(paragraphIndex);
    return $this$with.p6p($this$with.f6o_1.q6p($this$with.n6p(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.f6o_1 = paragraph;
    this.g6o_1 = startIndex;
    this.h6o_1 = endIndex;
    this.i6o_1 = startLineIndex;
    this.j6o_1 = endLineIndex;
    this.k6o_1 = top;
    this.l6o_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.h6o_1 - this.g6o_1 | 0;
  };
  protoOf(ParagraphInfo).m6o = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.g6o_1, this.h6o_1) - this.g6o_1 | 0;
  };
  protoOf(ParagraphInfo).p6p = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.g6o_1 | 0;
  };
  protoOf(ParagraphInfo).n6p = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.i6o_1 | 0;
  };
  protoOf(ParagraphInfo).f6p = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.i6o_1 | 0;
  };
  protoOf(ParagraphInfo).y6o = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.k6o_1;
  };
  protoOf(ParagraphInfo).e6p = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.k6o_1;
  };
  protoOf(ParagraphInfo).v6o = function (_this__u8e3s4) {
    return _this__u8e3s4.i5a(Offset(0.0, this.k6o_1));
  };
  protoOf(ParagraphInfo).o6o = function (_this__u8e3s4) {
    _this__u8e3s4.l67(Offset(0.0, this.k6o_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).j6p = function (_this__u8e3s4, treatZeroAsNull) {
    if (treatZeroAsNull && equals(_this__u8e3s4, Companion_getInstance_14().r6p_1)) {
      return Companion_getInstance_14().r6p_1;
    }
    return TextRange_0(this.p6p(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.p6p(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + toString(this.f6o_1) + ', startIndex=' + this.g6o_1 + ', endIndex=' + this.h6o_1 + ', startLineIndex=' + this.i6o_1 + ', endLineIndex=' + this.j6o_1 + ', top=' + this.k6o_1 + ', bottom=' + this.l6o_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.f6o_1);
    result = imul(result, 31) + this.g6o_1 | 0;
    result = imul(result, 31) + this.h6o_1 | 0;
    result = imul(result, 31) + this.i6o_1 | 0;
    result = imul(result, 31) + this.j6o_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.k6o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l6o_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.f6o_1, tmp0_other_with_cast.f6o_1))
      return false;
    if (!(this.g6o_1 === tmp0_other_with_cast.g6o_1))
      return false;
    if (!(this.h6o_1 === tmp0_other_with_cast.h6o_1))
      return false;
    if (!(this.i6o_1 === tmp0_other_with_cast.i6o_1))
      return false;
    if (!(this.j6o_1 === tmp0_other_with_cast.j6o_1))
      return false;
    if (!equals(this.k6o_1, tmp0_other_with_cast.k6o_1))
      return false;
    if (!equals(this.l6o_1, tmp0_other_with_cast.l6o_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.j();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.o(i);
        if (paragraph.g6o_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.g6o_1 === paragraph.h6o_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    if (y <= 0)
      return 0;
    if (y >= last(paragraphInfoList).l6o_1)
      return get_lastIndex(paragraphInfoList);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.j() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.o(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.k6o_1 > y ? 1 : midVal.l6o_1 <= y ? -1 : 0;
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
      var high = paragraphInfoList.j() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.o(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.g6o_1 > index ? 1 : midVal.h6o_1 <= index ? -1 : 0;
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
      var high = paragraphInfoList.j() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.o(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.i6o_1 > lineIndex ? 1 : midVal.j6o_1 <= lineIndex ? -1 : 0;
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
    return !(style.d6n_1 === Companion_getInstance_32().y6p_1) ? style : style.s6p(VOID, defaultStyle.d6n_1);
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.w6n_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.q()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.o(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.p6o_1.d5s();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.o(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.p6o_1.d5s();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p6o_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d5s();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.w6n_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.q()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.o(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.p6o_1.e5s();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.o(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.p6o_1.e5s();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p6o_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e5s();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.s6n_1 = annotatedString;
    this.t6n_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.u6n_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.v6n_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.c6q();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.s6n_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(this_1.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.o(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(this_0, item.p6m_1, item.q6m_1);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.o6m_1, paragraphStyle);
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.u6m_1, style.d6q(currentParagraphStyle), annotatedString_0.y6m(), getLocalPlaceholders(this.t6n_1, item.p6m_1, item.q6m_1), density, fontFamilyResolver), item.p6m_1, item.q6m_1);
        target.e(element);
      }
       while (inductionVariable <= last);
    tmp_3.w6n_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).d5s = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.u6n_1;
    minIntrinsicWidth$factory();
    return this_0.w();
  };
  protoOf(MultiParagraphIntrinsics).e5s = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.v6n_1;
    maxIntrinsicWidth$factory();
    return this_0.w();
  };
  protoOf(MultiParagraphIntrinsics).e6q = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.w6n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.p6o_1.e6q()) {
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
    this.p6o_1 = intrinsics;
    this.q6o_1 = startIndex;
    this.r6o_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + toString(this.p6o_1) + ', startIndex=' + this.q6o_1 + ', endIndex=' + this.r6o_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.p6o_1);
    result = imul(result, 31) + this.q6o_1 | 0;
    result = imul(result, 31) + this.r6o_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.p6o_1, tmp0_other_with_cast.p6o_1))
      return false;
    if (!(this.q6o_1 === tmp0_other_with_cast.q6o_1))
      return false;
    if (!(this.r6o_1 === tmp0_other_with_cast.r6o_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.o(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.p6m_1, item.q6m_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.o(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(start <= item_0.p6m_1 && item_0.q6m_1 <= end)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var element = Range_init_$Create$(item_0.o6m_1, item_0.p6m_1 - start | 0, item_0.q6m_1 - start | 0);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.d5s();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.e5s();
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
    textAlign = textAlign === VOID ? Companion_getInstance_30().l6q_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().y6p_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q5c_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_40().p6q_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().s6q_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.c6n_1 = textAlign;
    this.d6n_1 = textDirection;
    this.e6n_1 = lineHeight;
    this.f6n_1 = textIndent;
    this.g6n_1 = platformStyle;
    this.h6n_1 = lineHeightStyle;
    this.i6n_1 = lineBreak;
    this.j6n_1 = hyphens;
    this.k6n_1 = textMotion;
    if (!equals(this.e6n_1, Companion_getInstance_1().q5c_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.e6n_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.e6n_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(ParagraphStyle_0).l6n = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.c6n_1, other.d6n_1, other.e6n_1, other.f6n_1, other.g6n_1, other.h6n_1, other.i6n_1, other.j6n_1, other.k6n_1);
  };
  protoOf(ParagraphStyle_0).t6q = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).s6p = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.c6n_1 : textAlign;
    textDirection = textDirection === VOID ? this.d6n_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.e6n_1 : lineHeight;
    textIndent = textIndent === VOID ? this.f6n_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.g6n_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.h6n_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.i6n_1 : lineBreak;
    hyphens = hyphens === VOID ? this.j6n_1 : hyphens;
    textMotion = textMotion === VOID ? this.k6n_1 : textMotion;
    return $super === VOID ? this.t6q(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.t6q.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.c6n_1 === other.c6n_1))
      return false;
    if (!(this.d6n_1 === other.d6n_1))
      return false;
    if (!equals(this.e6n_1, other.e6n_1))
      return false;
    if (!equals(this.f6n_1, other.f6n_1))
      return false;
    if (!equals(this.g6n_1, other.g6n_1))
      return false;
    if (!equals(this.h6n_1, other.h6n_1))
      return false;
    if (!(this.i6n_1 === other.i6n_1))
      return false;
    if (!(this.j6n_1 === other.j6n_1))
      return false;
    if (!equals(this.k6n_1, other.k6n_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.c6n_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.d6n_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.e6n_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.f6n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.g6n_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.h6n_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.i6n_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.j6n_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.k6n_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ParagraphStyle.toString.<anonymous>' call
    this_0.p8('ParagraphStyle(');
    this_0.p8('textAlign=' + TextAlign__toString_impl_6ha6d3(this.c6n_1) + ', ');
    this_0.p8('textDirection=' + TextDirection__toString_impl_x3uh9t(this.d6n_1) + ', ');
    this_0.p8('lineHeight=' + TextUnit__toString_impl_51ghw0(this.e6n_1) + ', ');
    this_0.p8('textIndent=' + toString_0(this.f6n_1) + ', ');
    this_0.p8('platformStyle=' + toString_0(this.g6n_1) + ', ');
    this_0.p8('lineHeightStyle=' + toString_0(this.h6n_1) + ', ');
    this_0.p8('lineBreak=' + LineBreak__toString_impl_mphhli(this.i6n_1) + ', ');
    this_0.p8('hyphens=' + Hyphens__toString_impl_ck1wg0(this.j6n_1) + ', ');
    this_0.p8('textMotion=' + toString_0(this.k6n_1));
    this_0.p8(')');
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
    if (!(textAlign === Companion_getInstance_30().l6q_1) && !(textAlign === _this__u8e3s4.c6n_1)) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(lineHeight)) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.e6n_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = (!(textIndent == null) && !equals(textIndent, _this__u8e3s4.f6n_1));
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textDirection === Companion_getInstance_32().y6p_1) && !(textDirection === _this__u8e3s4.d6n_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.g6n_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = (!(lineHeightStyle == null) && !equals(lineHeightStyle, _this__u8e3s4.h6n_1));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(lineBreak === Companion_getInstance_40().p6q_1) && !(lineBreak === _this__u8e3s4.i6n_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(hyphens === Companion_getInstance_26().s6q_1) && !(hyphens === _this__u8e3s4.j6n_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(textMotion == null) && !equals(textMotion, _this__u8e3s4.k6n_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    if (get_isUnspecified(lineHeight)) {
      tmp_8 = _this__u8e3s4.e6n_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.f6n_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_30().l6q_1) ? textAlign : _this__u8e3s4.c6n_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_32().y6p_1) ? textDirection : _this__u8e3s4.d6n_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.h6n_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_40().p6q_1) ? lineBreak : _this__u8e3s4.i6n_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_26().s6q_1) ? hyphens : _this__u8e3s4.j6n_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.k6n_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.g6n_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.g6n_1;
    return _this__u8e3s4.g6n_1.v6q(other);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.c6n_1 === Companion_getInstance_30().l6q_1 ? Companion_getInstance_30().j6q_1 : style.c6n_1;
    var tmp_0 = resolveTextDirection_0(direction, style.d6n_1);
    var tmp_1 = get_isUnspecified(style.e6n_1) ? get_DefaultLineHeight() : style.e6n_1;
    var tmp0_elvis_lhs = style.f6n_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_35().w6q_1 : tmp0_elvis_lhs;
    var tmp_3 = style.i6n_1 === Companion_getInstance_40().p6q_1 ? Companion_getInstance_40().m6q_1 : style.i6n_1;
    var tmp_4 = style.j6n_1 === Companion_getInstance_26().s6q_1 ? Companion_getInstance_26().q6q_1 : style.j6n_1;
    var tmp1_elvis_lhs = style.k6n_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_1, tmp_2, style.g6n_1, style.h6n_1, tmp_3, tmp_4, tmp1_elvis_lhs == null ? Companion_getInstance_41().x6q_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().q5c_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.z6q_1, other.z6q_1))
      return false;
    if (!equals(this.a6r_1, other.a6r_1))
      return false;
    if (!(this.b6r_1 === other.b6r_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.z6q_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.a6r_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.b6r_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + TextUnit__toString_impl_51ghw0(this.z6q_1) + ', ') + ('height=' + TextUnit__toString_impl_51ghw0(this.a6r_1) + ', ') + ('placeholderVerticalAlign=' + PlaceholderVerticalAlign__toString_impl_kf5crp(this.b6r_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_13().c6r_1 ? 'AboveBaseline' : $this === Companion_getInstance_13().d6r_1 ? 'Top' : $this === Companion_getInstance_13().e6r_1 ? 'Bottom' : $this === Companion_getInstance_13().f6r_1 ? 'Center' : $this === Companion_getInstance_13().g6r_1 ? 'TextTop' : $this === Companion_getInstance_13().h6r_1 ? 'TextBottom' : $this === Companion_getInstance_13().i6r_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.c6r_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.d6r_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.e6r_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.f6r_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.g6r_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.h6r_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.i6r_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
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
      tmp = saver.n58(scope, value);
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
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.u6m_1), save_0(it.y6m(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.z6m(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.x6m_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.o(1);
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
        var tmp_1 = saver.d58(value);
        tmp_0 = (tmp_1 == null ? true : isInterface(tmp_1, KtList)) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var spanStylesOrNull = tmp$ret$0;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.o(2);
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
        var tmp_4 = saver_0.d58(value_0);
        tmp_3 = (tmp_4 == null ? true : isInterface(tmp_4, KtList)) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var paragraphStylesOrNull = tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(0);
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
      if (spanStylesOrNull.q()) {
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
      if (paragraphStylesOrNull.q()) {
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
      var value_1 = list.o(3);
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
        var tmp_15 = saver_1.d58(value_1);
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
    var target = ArrayList_init_$Create$(it.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = it.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.o(index);
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
    var target = ArrayList_init_$Create$(list.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.o(index);
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
            var tmp_1 = saver.d58(item);
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
    var tmp0_subject = it.o6m_1;
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
    switch (marker.u2_1) {
      case 0:
        var tmp_1 = it.o6m_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.o6m_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.o6m_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.o6m_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        var tmp_5 = it.o6m_1;
        tmp_0 = save_0(tmp_5 instanceof Url ? tmp_5 : THROW_CCE(), get_LinkSaver(), $this$Saver);
        break;
      case 5:
        var tmp_6 = it.o6m_1;
        tmp_0 = save_0(tmp_6 instanceof Clickable ? tmp_6 : THROW_CCE(), get_ClickableSaver(), $this$Saver);
        break;
      case 6:
        tmp_0 = save(it.o6m_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.p6m_1), save(it.q6m_1), save(it.r6m_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(0);
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
    var tmp0_safe_receiver_0 = list.o(2);
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
    var tmp0_safe_receiver_1 = list.o(3);
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
    var tmp0_safe_receiver_2 = list.o(4);
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
    switch (marker.u2_1) {
      case 0:
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value = list.o(1);
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
            var tmp_6 = saver.d58(value);
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
          var value_0 = list.o(1);
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
            var tmp_9 = saver_0.d58(value_0);
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
          var value_1 = list.o(1);
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
            var tmp_12 = saver_1.d58(value_1);
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
          var value_2 = list.o(1);
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
            var tmp_15 = saver_2.d58(value_2);
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
          var value_3 = list.o(1);
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
            var tmp_18 = saver_3.d58(value_3);
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
          var value_4 = list.o(1);
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
            var tmp_21 = saver_4.d58(value_4);
            tmp_20 = (tmp_21 == null ? true : tmp_21 instanceof Clickable) ? tmp_21 : THROW_CCE();
          }
          tmp$ret$37 = tmp_20;
        }

        var item_4 = ensureNotNull(tmp$ret$37);
        tmp_3 = new Range(item_4, start, end, tag);
        break;
      case 6:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.o(1);
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
    return save(it.j6r_1);
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
    return save(it.k6r_1);
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
    return arrayListOf([save(it.m6n_1), save_0(it.n6n_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function LinkSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(0);
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
      var value = list.o(1);
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
        var tmp_2 = saver.d58(value);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Url(url, stylesOrNull);
  }
  function ClickableSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.p6n_1), save_0(it.q6n_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function ClickableSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(0);
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
      var value = list.o(1);
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
        var tmp_2 = saver.d58(value);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Clickable(tag, stylesOrNull, null);
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(new TextAlign(it.c6n_1)), save(new TextDirection(it.d6n_1)), save_0(new TextUnit(it.e6n_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(it.f6n_1, get_Saver_0(Companion_getInstance_35()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_0 = tmp0_safe_receiver instanceof TextAlign ? tmp0_safe_receiver.l6r_1 : THROW_CCE();
      var tmp_1 = tmp_0 == null ? null : new TextAlign(tmp_0);
      tmp = tmp_1 == null ? null : tmp_1.l6r_1;
    }
    var tmp_2 = tmp;
    var tmp_3 = ensureNotNull(tmp_2 == null ? null : new TextAlign(tmp_2));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.o(1);
    var tmp_4;
    if (tmp0_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_5 = tmp0_safe_receiver_0 instanceof TextDirection ? tmp0_safe_receiver_0.m6r_1 : THROW_CCE();
      var tmp_6 = tmp_5 == null ? null : new TextDirection(tmp_5);
      tmp_4 = tmp_6 == null ? null : tmp_6.m6r_1;
    }
    var tmp_7 = tmp_4;
    var tmp_8 = ensureNotNull(tmp_7 == null ? null : new TextDirection(tmp_7));
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.o(2);
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
        var tmp_11 = saver.d58(value);
        var tmp_12;
        if (tmp_11 == null ? true : tmp_11 instanceof TextUnit) {
          var tmp_13 = tmp_11;
          tmp_12 = tmp_13 == null ? null : tmp_13.s5c_1;
        } else {
          tmp_12 = THROW_CCE();
        }
        var tmp_14 = tmp_12;
        var tmp_15 = tmp_14 == null ? null : new TextUnit(tmp_14);
        tmp_10 = tmp_15 == null ? null : tmp_15.s5c_1;
      }
      tmp$ret$6 = tmp_10;
    }
    var tmp_16 = tmp$ret$6;
    var tmp_17 = ensureNotNull(tmp_16 == null ? null : new TextUnit(tmp_16));
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.o(3);
      var saver_0 = get_Saver_0(Companion_getInstance_35());
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
        var tmp_20 = saver_0.d58(value_0);
        tmp_19 = (tmp_20 == null ? true : tmp_20 instanceof TextIndent_0) ? tmp_20 : THROW_CCE();
      }
      tmp$ret$11 = tmp_19;
    }
    return new ParagraphStyle_0(tmp_3.l6r_1, tmp_8.m6r_1, tmp_17.s5c_1, tmp$ret$11);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.r60()), get_Saver_1(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.o6r_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.p6r_1, get_Saver_2(Companion_getInstance_22()), $this$Saver);
    var tmp_2 = it.q6r_1;
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.r6r_1;
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.t6r_1);
    var tmp_8 = save_0(new TextUnit(it.u6r_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.v6r_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_3(Companion_getInstance_25()), $this$Saver), save_0(it.w6r_1, get_Saver_4(Companion_getInstance_34()), $this$Saver), save_0(it.x6r_1, get_Saver_5(Companion_getInstance_24()), $this$Saver), save_0(new Color(it.y6r_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(it.z6r_1, get_Saver_6(Companion_getInstance_31()), $this$Saver), save_0(it.a6s_1, get_Saver_7(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.o(0);
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
        var tmp_1 = saver.d58(value);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.r63_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.r63_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.o(1);
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
        var tmp_10 = saver_0.d58(value_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.s5c_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.s5c_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_1 = list.o(2);
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
        var tmp_19 = saver_1.d58(value_1);
        tmp_18 = (tmp_19 == null ? true : tmp_19 instanceof FontWeight) ? tmp_19 : THROW_CCE();
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_20 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(3);
    var tmp_21;
    if (tmp0_safe_receiver == null) {
      tmp_21 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_22 = tmp0_safe_receiver instanceof FontStyle ? tmp0_safe_receiver.d6s_1 : THROW_CCE();
      var tmp_23 = tmp_22 == null ? null : new FontStyle(tmp_22);
      tmp_21 = tmp_23 == null ? null : tmp_23.d6s_1;
    }
    var tmp_24 = tmp_21;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.o(4);
    var tmp_25;
    if (tmp0_safe_receiver_0 == null) {
      tmp_25 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_26 = tmp0_safe_receiver_0 instanceof FontSynthesis ? tmp0_safe_receiver_0.e6s_1 : THROW_CCE();
      var tmp_27 = tmp_26 == null ? null : new FontSynthesis(tmp_26);
      tmp_25 = tmp_27 == null ? null : tmp_27.e6s_1;
    }
    var tmp_28 = tmp_25;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.o(6);
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
      var value_2 = list.o(7);
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
        var tmp_33 = saver_2.d58(value_2);
        var tmp_34;
        if (tmp_33 == null ? true : tmp_33 instanceof TextUnit) {
          var tmp_35 = tmp_33;
          tmp_34 = tmp_35 == null ? null : tmp_35.s5c_1;
        } else {
          tmp_34 = THROW_CCE();
        }
        var tmp_36 = tmp_34;
        var tmp_37 = tmp_36 == null ? null : new TextUnit(tmp_36);
        tmp_32 = tmp_37 == null ? null : tmp_37.s5c_1;
      }
      tmp$ret$24 = tmp_32;
    }
    var tmp_38 = tmp$ret$24;
    var tmp_39 = ensureNotNull(tmp_38 == null ? null : new TextUnit(tmp_38));
    var tmp$ret$29;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_3 = list.o(8);
      var saver_3 = get_Saver_3(Companion_getInstance_25());
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
        var tmp_42 = saver_3.d58(value_3);
        var tmp_43;
        if (tmp_42 == null ? true : tmp_42 instanceof BaselineShift) {
          var tmp_44 = tmp_42;
          tmp_43 = tmp_44 == null ? null : tmp_44.f6s_1;
        } else {
          tmp_43 = THROW_CCE();
        }
        var tmp_45 = tmp_43;
        var tmp_46 = tmp_45 == null ? null : new BaselineShift(tmp_45);
        tmp_41 = tmp_46 == null ? null : tmp_46.f6s_1;
      }
      tmp$ret$29 = tmp_41;
    }
    var tmp_47 = tmp$ret$29;
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_4 = list.o(9);
      var saver_4 = get_Saver_4(Companion_getInstance_34());
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
        var tmp_50 = saver_4.d58(value_4);
        tmp_49 = (tmp_50 == null ? true : tmp_50 instanceof TextGeometricTransform) ? tmp_50 : THROW_CCE();
      }
      tmp$ret$34 = tmp_49;
    }
    var tmp_51 = tmp$ret$34;
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_5 = list.o(10);
      var saver_5 = get_Saver_5(Companion_getInstance_24());
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
        var tmp_54 = saver_5.d58(value_5);
        tmp_53 = (tmp_54 == null ? true : tmp_54 instanceof LocaleList) ? tmp_54 : THROW_CCE();
      }
      tmp$ret$39 = tmp_53;
    }
    var tmp_55 = tmp$ret$39;
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_6 = list.o(11);
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
        var tmp_58 = saver_6.d58(value_6);
        var tmp_59;
        if (tmp_58 == null ? true : tmp_58 instanceof Color) {
          var tmp_60 = tmp_58;
          tmp_59 = tmp_60 == null ? null : tmp_60.r63_1;
        } else {
          tmp_59 = THROW_CCE();
        }
        var tmp_61 = tmp_59;
        var tmp_62 = tmp_61 == null ? null : new Color(tmp_61);
        tmp_57 = tmp_62 == null ? null : tmp_62.r63_1;
      }
      tmp$ret$44 = tmp_57;
    }
    var tmp_63 = tmp$ret$44;
    var tmp_64 = ensureNotNull(tmp_63 == null ? null : new Color(tmp_63));
    var tmp$ret$49;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_7 = list.o(12);
      var saver_7 = get_Saver_6(Companion_getInstance_31());
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
        var tmp_67 = saver_7.d58(value_7);
        tmp_66 = (tmp_67 == null ? true : tmp_67 instanceof TextDecoration) ? tmp_67 : THROW_CCE();
      }
      tmp$ret$49 = tmp_66;
    }
    var tmp_68 = tmp$ret$49;
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_8 = list.o(13);
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
        var tmp_71 = saver_8.d58(value_8);
        tmp_70 = (tmp_71 == null ? true : tmp_71 instanceof Shadow) ? tmp_71 : THROW_CCE();
      }
      tmp$ret$54 = tmp_70;
    }
    return SpanStyle_init_$Create$(tmp_7.r63_1, tmp_16.s5c_1, tmp_20, tmp_24, tmp_28, VOID, tmp_30, tmp_39.s5c_1, tmp_47, tmp_51, tmp_55, tmp_64.r63_1, tmp_68, tmp$ret$54);
  }
  function TextLinkStylesSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(it.g6s_1, get_SpanStyleSaver(), $this$Saver), save_0(it.h6s_1, get_SpanStyleSaver(), $this$Saver), save_0(it.i6s_1, get_SpanStyleSaver(), $this$Saver), save_0(it.j6s_1, get_SpanStyleSaver(), $this$Saver)]);
  }
  function TextLinkStylesSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.o(0);
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
        var tmp_1 = saver.d58(value);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof SpanStyle) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var styleOrNull = tmp$ret$0;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.o(1);
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
        var tmp_4 = saver_0.d58(value_0);
        tmp_3 = (tmp_4 == null ? true : tmp_4 instanceof SpanStyle) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var focusedStyleOrNull = tmp$ret$5;
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_1 = list.o(2);
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
        var tmp_7 = saver_1.d58(value_1);
        tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
      }
      tmp$ret$10 = tmp_6;
    }
    var hoveredStyleOrNull = tmp$ret$10;
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_2 = list.o(3);
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
        var tmp_10 = saver_2.d58(value_2);
        tmp_9 = (tmp_10 == null ? true : tmp_10 instanceof SpanStyle) ? tmp_10 : THROW_CCE();
      }
      tmp$ret$15 = tmp_9;
    }
    var pressedStyleOrNull = tmp$ret$15;
    return new TextLinkStyles(styleOrNull, focusedStyleOrNull, hoveredStyleOrNull, pressedStyleOrNull);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.k6s_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.l6s_1, it.m6s_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    return new TextGeometricTransform(list.o(0), list.o(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.n6s_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.o6s_1), get_Saver(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.o(0);
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
        var tmp_1 = saver.d58(value);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextUnit) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.s5c_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextUnit(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.s5c_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.o(1);
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
        var tmp_10 = saver_0.d58(value_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.s5c_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.s5c_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.s5c_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).s5c_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.p6s_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.f6s_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.k6p_1)), save(_TextRange___get_end__impl__gcdxpp(it.k6p_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(0);
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
    var tmp0_safe_receiver_0 = list.o(1);
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
    return arrayListOf([save_0(new Color(it.y67_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it.z67_1), get_Saver_8(Companion_getInstance_3()), $this$Saver), save(it.a68_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.o(0);
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
        var tmp_1 = saver.d58(value);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.r63_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.r63_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.o(1);
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
        var tmp_10 = saver_0.d58(value_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Offset_0) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.v59_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Offset_0(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.v59_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset_0(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.o(2);
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
    return new Shadow(tmp_7.r63_1, tmp_16.v59_1, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isUnspecified' call
    var this_0 = it.r63_1;
    if (equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = false;
    } else {
      tmp = toArgb(it.r63_1);
    }
    return tmp;
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance().p60_1;
    } else {
      tmp = Color_0(typeof it === 'number' ? it : THROW_CCE());
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new Color(tmp_0);
  }
  function TextUnitSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new TextUnit(Companion_getInstance_1().q5c_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.s5c_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.s5c_1)))]);
    }
    return tmp;
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_1().q5c_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.o(0);
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
      var tmp0_safe_receiver_0 = list.o(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp_3 = tmp0_safe_receiver_0 instanceof TextUnitType ? tmp0_safe_receiver_0.r5c_1 : THROW_CCE();
        var tmp_4 = tmp_3 == null ? null : new TextUnitType(tmp_3);
        tmp_2 = tmp_4 == null ? null : tmp_4.r5c_1;
      }
      var tmp_5 = tmp_2;
      tmp = TextUnit_0(tmp_1, ensureNotNull(tmp_5 == null ? null : new TextUnitType(tmp_5)).r5c_1);
    }
    var tmp_6 = tmp;
    return tmp_6 == null ? null : new TextUnit(tmp_6);
  }
  function OffsetSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset_0(Companion_getInstance_3().z59_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_Offset___get_x__impl__xvi35n(it.v59_1)), save(_Offset___get_y__impl__8bzhra(it.v59_1))]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().z59_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.o(0);
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
      var tmp0_safe_receiver_0 = list.o(1);
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
    var this_0 = it.q6s_1;
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
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var element = save_0(item, get_Saver_9(Companion_instance_11), $this$Saver);
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
    var target = ArrayList_init_$Create$(list.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.o(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var saver = get_Saver_9(Companion_instance_11);
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
            var tmp_1 = saver.d58(item);
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
    return it.t6s();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function NonNullValueClassSaver$1($save, $restore) {
    this.u6s_1 = $save;
    this.v6s_1 = $restore;
  }
  protoOf(NonNullValueClassSaver$1).n58 = function (_this__u8e3s4, value) {
    return this.u6s_1(_this__u8e3s4, value);
  };
  protoOf(NonNullValueClassSaver$1).d58 = function (value) {
    return this.v6s_1(value);
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
    color = color === VOID ? Companion_getInstance().p60_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().p60_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_21.w6s(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
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
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().p60_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_21.x6s(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().p60_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.n6r_1 = textForegroundStyle;
    this.o6r_1 = fontSize;
    this.p6r_1 = fontWeight;
    this.q6r_1 = fontStyle;
    this.r6r_1 = fontSynthesis;
    this.s6r_1 = fontFamily;
    this.t6r_1 = fontFeatureSettings;
    this.u6r_1 = letterSpacing;
    this.v6r_1 = baselineShift;
    this.w6r_1 = textGeometricTransform;
    this.x6r_1 = localeList;
    this.y6r_1 = background;
    this.z6r_1 = textDecoration;
    this.a6s_1 = shadow;
    this.b6s_1 = platformStyle;
    this.c6s_1 = drawStyle;
  }
  protoOf(SpanStyle).r60 = function () {
    return this.n6r_1.r60();
  };
  protoOf(SpanStyle).y6s = function () {
    return this.n6r_1.y6s();
  };
  protoOf(SpanStyle).v5w = function () {
    return this.n6r_1.v5w();
  };
  protoOf(SpanStyle).z6s = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.n6r_1.r60(), other.n6r_1.y6s(), other.n6r_1.v5w(), other.o6r_1, other.p6r_1, other.q6r_1, other.r6r_1, other.s6r_1, other.t6r_1, other.u6r_1, other.v6r_1, other.w6r_1, other.x6r_1, other.y6r_1, other.z6r_1, other.a6s_1, other.b6s_1, other.c6s_1);
  };
  protoOf(SpanStyle).a6t = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.r60())) {
      tmp = this.n6r_1;
    } else {
      tmp = Companion_instance_21.w6s(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).b6t = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.r60() : color;
    fontSize = fontSize === VOID ? this.o6r_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.p6r_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.q6r_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.r6r_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.s6r_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.t6r_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.u6r_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.v6r_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.w6r_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.x6r_1 : localeList;
    background = background === VOID ? this.y6r_1 : background;
    textDecoration = textDecoration === VOID ? this.z6r_1 : textDecoration;
    shadow = shadow === VOID ? this.a6s_1 : shadow;
    platformStyle = platformStyle === VOID ? this.b6s_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.c6s_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.a6t(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.a6t;
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
    return this.c6t(other) && this.d6t(other);
  };
  protoOf(SpanStyle).c6t = function (other) {
    if (this === other)
      return true;
    if (!equals(this.o6r_1, other.o6r_1))
      return false;
    if (!equals(this.p6r_1, other.p6r_1))
      return false;
    var tmp = this.q6r_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.q6r_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.r6r_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.r6r_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.s6r_1, other.s6r_1))
      return false;
    if (!(this.t6r_1 == other.t6r_1))
      return false;
    if (!equals(this.u6r_1, other.u6r_1))
      return false;
    var tmp_5 = this.v6r_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.v6r_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.w6r_1, other.w6r_1))
      return false;
    if (!equals(this.x6r_1, other.x6r_1))
      return false;
    if (!equals(this.y6r_1, other.y6r_1))
      return false;
    if (!equals(this.b6s_1, other.b6s_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).d6t = function (other) {
    if (!equals(this.n6r_1, other.n6r_1))
      return false;
    if (!equals(this.z6r_1, other.z6r_1))
      return false;
    if (!equals(this.a6s_1, other.a6s_1))
      return false;
    if (!equals(this.c6s_1, other.c6s_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.r60());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.y6s();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.v5w()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.o6r_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.p6r_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.q6r_1;
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
    var tmp4_safe_receiver = this.r6r_1;
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
    var tmp6_safe_receiver = this.s6r_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.t6r_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.u6r_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.v6r_1;
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
    var tmp12_safe_receiver = this.w6r_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.x6r_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.y6r_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.z6r_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.a6s_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.b6s_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.c6s_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SpanStyle.toString.<anonymous>' call
    this_0.p8('SpanStyle(');
    this_0.p8('color=' + Color__toString_impl_hpzmaq(this.r60()) + ', ');
    this_0.p8('brush=' + toString_0(this.y6s()) + ', ');
    this_0.p8('alpha=' + this.v5w() + ', ');
    this_0.p8('fontSize=' + TextUnit__toString_impl_51ghw0(this.o6r_1) + ', ');
    this_0.p8('fontWeight=' + toString_0(this.p6r_1) + ', ');
    var tmp = this.q6r_1;
    this_0.p8('fontStyle=' + toString_0(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.r6r_1;
    this_0.p8('fontSynthesis=' + toString_0(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.p8('fontFamily=' + toString_0(this.s6r_1) + ', ');
    this_0.p8('fontFeatureSettings=' + this.t6r_1 + ', ');
    this_0.p8('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.u6r_1) + ', ');
    var tmp_1 = this.v6r_1;
    this_0.p8('baselineShift=' + toString_0(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.p8('textGeometricTransform=' + toString_0(this.w6r_1) + ', ');
    this_0.p8('localeList=' + toString_0(this.x6r_1) + ', ');
    this_0.p8('background=' + Color__toString_impl_hpzmaq(this.y6r_1) + ', ');
    this_0.p8('textDecoration=' + toString_0(this.z6r_1) + ', ');
    this_0.p8('shadow=' + toString_0(this.a6s_1) + ', ');
    this_0.p8('platformStyle=' + toString_0(this.b6s_1) + ', ');
    this_0.p8('drawStyle=' + toString_0(this.c6s_1));
    this_0.p8(')');
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
      tmp_16 = !equals(fontSize, _this__u8e3s4.o6r_1);
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
        tmp_17 = !equals(color, _this__u8e3s4.n6r_1.r60());
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
        var tmp_23 = _this__u8e3s4.q6r_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = (!(fontWeight == null) && !equals(fontWeight, _this__u8e3s4.p6r_1));
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = (!(fontFamily == null) && !(fontFamily === _this__u8e3s4.s6r_1));
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.u6r_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = (!(textDecoration == null) && !equals(textDecoration, _this__u8e3s4.z6r_1));
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.n6r_1.y6s());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = (!(brush == null) && !(alpha === _this__u8e3s4.n6r_1.v5w()));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.r6r_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = (!(fontFeatureSettings == null) && !(fontFeatureSettings == _this__u8e3s4.t6r_1));
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.v6r_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textGeometricTransform == null) && !equals(textGeometricTransform, _this__u8e3s4.w6r_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(localeList == null) && !equals(localeList, _this__u8e3s4.x6r_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_35 = !equals(background, _this__u8e3s4.y6r_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(shadow == null) && !equals(shadow, _this__u8e3s4.a6s_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.b6s_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(drawStyle == null) && !equals(drawStyle, _this__u8e3s4.c6s_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_21.x6s(brush, alpha);
    } else {
      tmp_36 = Companion_instance_21.w6s(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.n6r_1.e6t(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.s6r_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.o6r_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.p6r_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.q6r_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.r6r_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.t6r_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.u6r_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.v6r_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.w6r_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.x6r_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.y6r_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.z6r_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.a6s_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.c6s_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.b6s_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.b6s_1;
    return _this__u8e3s4.b6s_1.g6t(other);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.n6r_1.h6t(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.o6r_1) ? get_DefaultFontSize() : style.o6r_1;
    var tmp0_elvis_lhs = style.p6r_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_22().u6t_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.q6r_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_20().b6u_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.r6r_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_21().e6u_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.s6r_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_16().h6u_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.t6r_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.u6r_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.u6r_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.v6r_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_25().o6u_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.w6r_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_34().p6u_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.x6r_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_24().o2g() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = style.y6r_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_17 = this_0;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.z6r_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_31().r6u_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.a6s_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().x67_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.c6s_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.b6s_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
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
      DefaultBackgroundColor = Companion_getInstance().o60_1;
      DefaultColor = Companion_getInstance().d60_1;
      DefaultColorForegroundStyle = Companion_instance_21.w6s(get_DefaultColor());
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.u6u_1 = layoutInput;
    this.v6u_1 = multiParagraph;
    this.w6u_1 = size;
    this.x6u_1 = this.v6u_1.w6o();
    this.y6u_1 = this.v6u_1.x6o();
    this.z6u_1 = this.v6u_1.d6o_1;
  }
  protoOf(TextLayoutResult).a6v = function () {
    return this.v6u_1.z6n_1 || _IntSize___get_height__impl__prv63b(this.w6u_1) < this.v6u_1.b6o_1;
  };
  protoOf(TextLayoutResult).b6v = function () {
    return _IntSize___get_width__impl__d9yl4o(this.w6u_1) < this.v6u_1.a6o_1;
  };
  protoOf(TextLayoutResult).c6v = function () {
    return this.b6v() || this.a6v();
  };
  protoOf(TextLayoutResult).s6o = function () {
    return this.v6u_1.c6o_1;
  };
  protoOf(TextLayoutResult).o6p = function (lineIndex) {
    return this.v6u_1.o6p(lineIndex);
  };
  protoOf(TextLayoutResult).q6p = function (lineIndex, visibleEnd) {
    return this.v6u_1.q6p(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).d6v = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.q6p(lineIndex, visibleEnd) : $super.q6p.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).m6p = function (lineIndex) {
    return this.v6u_1.m6p(lineIndex);
  };
  protoOf(TextLayoutResult).l6p = function (offset) {
    return this.v6u_1.l6p(offset);
  };
  protoOf(TextLayoutResult).d6p = function (vertical) {
    return this.v6u_1.d6p(vertical);
  };
  protoOf(TextLayoutResult).g6p = function (offset) {
    return this.v6u_1.g6p(offset);
  };
  protoOf(TextLayoutResult).h6p = function (offset) {
    return this.v6u_1.h6p(offset);
  };
  protoOf(TextLayoutResult).i6p = function (offset) {
    return this.v6u_1.i6p(offset);
  };
  protoOf(TextLayoutResult).n6o = function (start, end) {
    return this.v6u_1.n6o(start, end);
  };
  protoOf(TextLayoutResult).e6v = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.v6u_1, size);
  };
  protoOf(TextLayoutResult).f6v = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.u6u_1 : layoutInput;
    size = size === VOID ? this.w6u_1 : size;
    return $super === VOID ? this.e6v(layoutInput, size) : $super.e6v.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.u6u_1.equals(other.u6u_1))
      return false;
    if (!equals(this.v6u_1, other.v6u_1))
      return false;
    if (!equals(this.w6u_1, other.w6u_1))
      return false;
    if (!(this.x6u_1 === other.x6u_1))
      return false;
    if (!(this.y6u_1 === other.y6u_1))
      return false;
    if (!equals(this.z6u_1, other.z6u_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.u6u_1.hashCode();
    result = imul(31, result) + hashCode(this.v6u_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.w6u_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.x6u_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.y6u_1) | 0;
    result = imul(31, result) + hashCode(this.z6u_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.u6u_1.toString() + ', ') + ('multiParagraph=' + toString(this.v6u_1) + ', ') + ('size=' + IntSize__toString_impl_54w9zl(this.w6u_1) + ', ') + ('firstBaseline=' + this.x6u_1 + ', ') + ('lastBaseline=' + this.y6u_1 + ', ') + ('placeholderRects=' + toString(this.z6u_1)) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.g6v_1 = text;
    this.h6v_1 = style;
    this.i6v_1 = placeholders;
    this.j6v_1 = maxLines;
    this.k6v_1 = softWrap;
    this.l6v_1 = overflow;
    this.m6v_1 = density;
    this.n6v_1 = layoutDirection;
    this.o6v_1 = fontFamilyResolver;
    this.p6v_1 = constraints;
    this.q6v_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.g6v_1.equals(other.g6v_1))
      return false;
    if (!this.h6v_1.equals(other.h6v_1))
      return false;
    if (!equals(this.i6v_1, other.i6v_1))
      return false;
    if (!(this.j6v_1 === other.j6v_1))
      return false;
    if (!(this.k6v_1 === other.k6v_1))
      return false;
    if (!(this.l6v_1 === other.l6v_1))
      return false;
    if (!equals(this.m6v_1, other.m6v_1))
      return false;
    if (!this.n6v_1.equals(other.n6v_1))
      return false;
    if (!equals(this.o6v_1, other.o6v_1))
      return false;
    if (!equals(this.p6v_1, other.p6v_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.g6v_1.hashCode();
    result = imul(31, result) + this.h6v_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.i6v_1) | 0;
    result = imul(31, result) + this.j6v_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.k6v_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.l6v_1) | 0;
    result = imul(31, result) + hashCode(this.m6v_1) | 0;
    result = imul(31, result) + this.n6v_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.o6v_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.p6v_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.TextLayoutInput.toString.<anonymous>' call
    this_0.p8('TextLayoutInput(');
    this_0.p8('text=' + this.g6v_1.toString() + ', ');
    this_0.p8('style=' + this.h6v_1.toString() + ', ');
    this_0.p8('placeholders=' + toString(this.i6v_1) + ', ');
    this_0.p8('maxLines=' + this.j6v_1 + ', ');
    this_0.p8('softWrap=' + this.k6v_1 + ', ');
    this_0.p8('overflow=' + TextOverflow__toString_impl_10s0c2(this.l6v_1) + ', ');
    this_0.p8('density=' + toString(this.m6v_1) + ', ');
    this_0.p8('layoutDirection=' + this.n6v_1.toString() + ', ');
    this_0.p8('fontFamilyResolver=' + toString(this.o6v_1) + ', ');
    this_0.p8('constraints=' + Constraints__toString_impl_37yskr(this.p6v_1));
    this_0.p8(')');
    return this_0.toString();
  };
  function TextLinkStyles(style, focusedStyle, hoveredStyle, pressedStyle) {
    style = style === VOID ? null : style;
    focusedStyle = focusedStyle === VOID ? null : focusedStyle;
    hoveredStyle = hoveredStyle === VOID ? null : hoveredStyle;
    pressedStyle = pressedStyle === VOID ? null : pressedStyle;
    this.g6s_1 = style;
    this.h6s_1 = focusedStyle;
    this.i6s_1 = hoveredStyle;
    this.j6s_1 = pressedStyle;
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
    if (!equals(this.g6s_1, other.g6s_1))
      return false;
    if (!equals(this.h6s_1, other.h6s_1))
      return false;
    if (!equals(this.i6s_1, other.i6s_1))
      return false;
    if (!equals(this.j6s_1, other.j6s_1))
      return false;
    return true;
  };
  protoOf(TextLinkStyles).hashCode = function () {
    var tmp0_safe_receiver = this.g6s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.h6s_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.i6s_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.j6s_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  var DefaultCacheSize;
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _get_packedValue__aj623s($this).k3(32).g1();
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _get_packedValue__aj623s($this).m3(new Long(-1, 0)).g1();
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_end__impl__gcdxpp($this) : _TextRange___get_start__impl__ww4t90($this);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_start__impl__ww4t90($this) : _TextRange___get_end__impl__gcdxpp($this);
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.r6p_1 = TextRange_1(0);
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
    var tmp0_other_with_cast = other instanceof TextRange ? other.k6p_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_14();
    this.k6p_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.k6p_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.k6p_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.k6p_1, other);
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
    return toLong(start).j3(32).n3(toLong(end).m3(new Long(-1, 0)));
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.b6s_1, paragraphStyle.g6n_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().p60_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().p60_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_30().l6q_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().y6p_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q5c_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_40().p6q_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().s6q_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r6v_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s6v_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.t6v_1 = TextStyle_init_$Create$_1();
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
    this.z6p_1 = spanStyle;
    this.a6q_1 = paragraphStyle;
    this.b6q_1 = platformStyle;
  }
  protoOf(TextStyle).u6v = function () {
    return this.z6p_1;
  };
  protoOf(TextStyle).c6q = function () {
    return this.a6q_1;
  };
  protoOf(TextStyle).v6v = function (other) {
    if (other == null || equals(other, Companion_getInstance_15().t6v_1))
      return this;
    return TextStyle_init_$Create$_0(this.u6v().z6s(other.u6v()), this.c6q().l6n(other.c6q()));
  };
  protoOf(TextStyle).w6v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.z6p_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r6v_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.a6q_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s6v_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.z6p_1 === mergedSpanStyle && this.a6q_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).x6v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().p60_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q5c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q5c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().p60_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_30().l6q_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().y6p_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q5c_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_40().p6q_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().s6q_1 : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.w6v(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.w6v;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).d6q = function (other) {
    return TextStyle_init_$Create$_0(this.u6v(), this.c6q().l6n(other));
  };
  protoOf(TextStyle).y6v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.z6p_1.r60())) {
      tmp = this.z6p_1.n6r_1;
    } else {
      tmp = Companion_instance_21.w6s(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r6v_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s6v_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).z6v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.z6p_1.r60() : color;
    fontSize = fontSize === VOID ? this.z6p_1.o6r_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.z6p_1.p6r_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.z6p_1.q6r_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.z6p_1.r6r_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.z6p_1.s6r_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.z6p_1.t6r_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.z6p_1.u6r_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.z6p_1.v6r_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.z6p_1.w6r_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.z6p_1.x6r_1 : localeList;
    background = background === VOID ? this.z6p_1.y6r_1 : background;
    textDecoration = textDecoration === VOID ? this.z6p_1.z6r_1 : textDecoration;
    shadow = shadow === VOID ? this.z6p_1.a6s_1 : shadow;
    drawStyle = drawStyle === VOID ? this.z6p_1.c6s_1 : drawStyle;
    textAlign = textAlign === VOID ? this.a6q_1.c6n_1 : textAlign;
    textDirection = textDirection === VOID ? this.a6q_1.d6n_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.a6q_1.e6n_1 : lineHeight;
    textIndent = textIndent === VOID ? this.a6q_1.f6n_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.b6q_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.a6q_1.h6n_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.a6q_1.i6n_1 : lineBreak;
    hyphens = hyphens === VOID ? this.a6q_1.j6n_1 : hyphens;
    textMotion = textMotion === VOID ? this.a6q_1.k6n_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.y6v(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.y6v;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).a6w = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r6v_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s6v_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).b6w = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.z6p_1.v5w() : alpha;
    fontSize = fontSize === VOID ? this.z6p_1.o6r_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.z6p_1.p6r_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.z6p_1.q6r_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.z6p_1.r6r_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.z6p_1.s6r_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.z6p_1.t6r_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.z6p_1.u6r_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.z6p_1.v6r_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.z6p_1.w6r_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.z6p_1.x6r_1 : localeList;
    background = background === VOID ? this.z6p_1.y6r_1 : background;
    textDecoration = textDecoration === VOID ? this.z6p_1.z6r_1 : textDecoration;
    shadow = shadow === VOID ? this.z6p_1.a6s_1 : shadow;
    drawStyle = drawStyle === VOID ? this.z6p_1.c6s_1 : drawStyle;
    textAlign = textAlign === VOID ? this.a6q_1.c6n_1 : textAlign;
    textDirection = textDirection === VOID ? this.a6q_1.d6n_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.a6q_1.e6n_1 : lineHeight;
    textIndent = textIndent === VOID ? this.a6q_1.f6n_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.b6q_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.a6q_1.h6n_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.a6q_1.i6n_1 : lineBreak;
    hyphens = hyphens === VOID ? this.a6q_1.j6n_1 : hyphens;
    textMotion = textMotion === VOID ? this.a6q_1.k6n_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.a6w(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.a6w;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).y6s = function () {
    return this.z6p_1.y6s();
  };
  protoOf(TextStyle).r60 = function () {
    return this.z6p_1.r60();
  };
  protoOf(TextStyle).v5w = function () {
    return this.z6p_1.v5w();
  };
  protoOf(TextStyle).c6w = function () {
    return this.z6p_1.o6r_1;
  };
  protoOf(TextStyle).d6w = function () {
    return this.z6p_1.p6r_1;
  };
  protoOf(TextStyle).e6w = function () {
    return this.z6p_1.q6r_1;
  };
  protoOf(TextStyle).f6w = function () {
    return this.z6p_1.r6r_1;
  };
  protoOf(TextStyle).g6w = function () {
    return this.z6p_1.s6r_1;
  };
  protoOf(TextStyle).h6w = function () {
    return this.z6p_1.t6r_1;
  };
  protoOf(TextStyle).i6w = function () {
    return this.z6p_1.u6r_1;
  };
  protoOf(TextStyle).j6w = function () {
    return this.z6p_1.v6r_1;
  };
  protoOf(TextStyle).k6w = function () {
    return this.z6p_1.w6r_1;
  };
  protoOf(TextStyle).l6w = function () {
    return this.z6p_1.x6r_1;
  };
  protoOf(TextStyle).m6w = function () {
    return this.z6p_1.y6r_1;
  };
  protoOf(TextStyle).n6w = function () {
    return this.z6p_1.z6r_1;
  };
  protoOf(TextStyle).o6w = function () {
    return this.z6p_1.a6s_1;
  };
  protoOf(TextStyle).p6w = function () {
    return this.z6p_1.c6s_1;
  };
  protoOf(TextStyle).q6w = function () {
    return this.a6q_1.c6n_1;
  };
  protoOf(TextStyle).r6w = function () {
    return this.a6q_1.d6n_1;
  };
  protoOf(TextStyle).s6w = function () {
    return this.a6q_1.e6n_1;
  };
  protoOf(TextStyle).t6w = function () {
    return this.a6q_1.f6n_1;
  };
  protoOf(TextStyle).u6w = function () {
    return this.a6q_1.h6n_1;
  };
  protoOf(TextStyle).v6w = function () {
    return this.a6q_1.j6n_1;
  };
  protoOf(TextStyle).w6w = function () {
    return this.a6q_1.i6n_1;
  };
  protoOf(TextStyle).x6w = function () {
    return this.a6q_1.k6n_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.z6p_1.equals(other.z6p_1))
      return false;
    if (!this.a6q_1.equals(other.a6q_1))
      return false;
    if (!equals(this.b6q_1, other.b6q_1))
      return false;
    return true;
  };
  protoOf(TextStyle).y6w = function (other) {
    return this === other || (this.a6q_1.equals(other.a6q_1) && this.z6p_1.c6t(other.z6p_1));
  };
  protoOf(TextStyle).z6w = function (other) {
    return this === other || this.z6p_1.d6t(other.z6p_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.z6p_1.hashCode();
    result = imul(31, result) + this.a6q_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.b6q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.TextStyle.toString.<anonymous>' call
    this_0.p8('TextStyle(');
    this_0.p8('color=' + Color__toString_impl_hpzmaq(this.r60()) + ', ');
    this_0.p8('brush=' + toString_0(this.y6s()) + ', ');
    this_0.p8('alpha=' + this.v5w() + ', ');
    this_0.p8('fontSize=' + TextUnit__toString_impl_51ghw0(this.c6w()) + ', ');
    this_0.p8('fontWeight=' + toString_0(this.d6w()) + ', ');
    var tmp = this.e6w();
    this_0.p8('fontStyle=' + toString_0(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.f6w();
    this_0.p8('fontSynthesis=' + toString_0(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.p8('fontFamily=' + toString_0(this.g6w()) + ', ');
    this_0.p8('fontFeatureSettings=' + this.h6w() + ', ');
    this_0.p8('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.i6w()) + ', ');
    var tmp_1 = this.j6w();
    this_0.p8('baselineShift=' + toString_0(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.p8('textGeometricTransform=' + toString_0(this.k6w()) + ', ');
    this_0.p8('localeList=' + toString_0(this.l6w()) + ', ');
    this_0.p8('background=' + Color__toString_impl_hpzmaq(this.m6w()) + ', ');
    this_0.p8('textDecoration=' + toString_0(this.n6w()) + ', ');
    this_0.p8('shadow=' + toString_0(this.o6w()) + ', ');
    this_0.p8('drawStyle=' + toString_0(this.p6w()) + ', ');
    this_0.p8('textAlign=' + TextAlign__toString_impl_6ha6d3(this.q6w()) + ', ');
    this_0.p8('textDirection=' + TextDirection__toString_impl_x3uh9t(this.r6w()) + ', ');
    this_0.p8('lineHeight=' + TextUnit__toString_impl_51ghw0(this.s6w()) + ', ');
    this_0.p8('textIndent=' + toString_0(this.t6w()) + ', ');
    this_0.p8('platformStyle=' + toString_0(this.b6q_1) + ', ');
    this_0.p8('lineHeightStyle=' + toString_0(this.u6w()) + ', ');
    this_0.p8('lineBreak=' + LineBreak__toString_impl_mphhli(this.w6w()) + ', ');
    this_0.p8('hyphens=' + Hyphens__toString_impl_ck1wg0(this.v6w()) + ', ');
    this_0.p8('textMotion=' + toString_0(this.x6w()));
    this_0.p8(')');
    return this_0.toString();
  };
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
    return new TextStyle(resolveSpanStyleDefaults(style.z6p_1), resolveParagraphStyleDefaults(style.a6q_1, direction), style.b6q_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    if (textDirection === Companion_getInstance_32().v6p_1) {
      var tmp_0;
      switch (layoutDirection.u2_1) {
        case 0:
          tmp_0 = Companion_getInstance_32().w6p_1;
          break;
        case 1:
          tmp_0 = Companion_getInstance_32().x6p_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_32().y6p_1) {
      var tmp_1;
      switch (layoutDirection.u2_1) {
        case 0:
          tmp_1 = Companion_getInstance_32().t6p_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_32().u6p_1;
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
    this.j6r_1 = verbatim;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.j6r_1 === other.j6r_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.j6r_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.j6r_1 + ')';
  };
  function UrlAnnotation(url) {
    this.k6r_1 = url;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.k6r_1 === other.k6r_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.k6r_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.k6r_1 + ')';
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
    $this.e6x_1 = maxSize;
    $this.b6x_1 = HashMap_init_$Create$(0, 0.75);
    $this.c6x_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.k6x(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + toString_0(key) + '=' + toString_0(value);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).j = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a6x_1;
    return this.d6x_1;
  };
  protoOf(LruCache).n2 = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a6x_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.b6x_1.n2(key);
    var tmp;
    if (!(mapValue == null)) {
      this.c6x_1.o2(key);
      this.c6x_1.e(key);
      this.i6x_1 = this.i6x_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.j6x_1;
      this.j6x_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.l6x(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a6x_1;
    this.g6x_1 = this.g6x_1 + 1 | 0;
    var previousValue = this.b6x_1.f2(key, createdValue);
    this.c6x_1.o2(key);
    this.c6x_1.e(key);
    if (!(previousValue == null)) {
      this.b6x_1.f2(key, previousValue);
      mapValue = previousValue;
    } else {
      this.d6x_1 = this.j() + safeSizeOf(this, key, createdValue) | 0;
    }
    if (!(mapValue == null)) {
      this.n6x(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.m6x(this.e6x_1);
      return createdValue;
    }
  };
  protoOf(LruCache).f2 = function (key, value) {
    if (key == null || value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a6x_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.f6x_1 = this.f6x_1 + 1 | 0;
    this.d6x_1 = this.j() + safeSizeOf(this, key, value) | 0;
    previous = this.b6x_1.f2(key, value);
    if (!(previous == null)) {
      this.d6x_1 = this.j() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.c6x_1.p(key)) {
      this.c6x_1.o2(key);
    }
    this.c6x_1.e(key);
    if (!(previous == null)) {
      this.n6x(false, key, ensureNotNull(previous), value);
    }
    this.m6x(this.e6x_1);
    return previous;
  };
  protoOf(LruCache).m6x = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.a6x_1;
      if (this.j() < 0 || (this.b6x_1.q() && !(this.j() === 0)) || !(this.b6x_1.q() === this.c6x_1.q())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      if (this.j() > maxSize && !this.b6x_1.q()) {
        key = first(this.c6x_1);
        // Inline function 'kotlin.collections.get' call
        var this_0 = this.b6x_1;
        var key_0 = key;
        var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).n2(key_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        value = tmp;
        // Inline function 'kotlin.collections.remove' call
        var this_1 = this.b6x_1;
        var key_1 = key;
        (isInterface(this_1, KtMutableMap) ? this_1 : THROW_CCE()).g2(key_1);
        // Inline function 'kotlin.collections.remove' call
        var this_2 = this.c6x_1;
        var element = key;
        (isInterface(this_2, MutableCollection) ? this_2 : THROW_CCE()).o2(element);
        this.d6x_1 = this.j() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.h6x_1 = this.h6x_1 + 1 | 0;
      }
      if (key == null && value == null) {
        break $l$loop;
      } else {
        this.n6x(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).g2 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a6x_1;
    previous = this.b6x_1.g2(key);
    this.c6x_1.o2(key);
    if (!(previous == null)) {
      this.d6x_1 = this.j() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (!(previous == null)) {
      this.n6x(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).n6x = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).l6x = function (key) {
    return null;
  };
  protoOf(LruCache).k6x = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a6x_1;
    var accesses = this.i6x_1 + this.j6x_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.i6x_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.e6x_1 + ',hits=' + this.i6x_1 + ',misses=' + this.j6x_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function LruCache() {
    this.a6x_1 = createSynchronizedObject();
    this.d6x_1 = 0;
    this.e6x_1 = 0;
    this.f6x_1 = 0;
    this.g6x_1 = 0;
    this.h6x_1 = 0;
    this.i6x_1 = 0;
    this.j6x_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.o6x_1 = get_EMPTY_INTS();
      $this.p6x_1 = get_EMPTY_OBJECTS();
    } else {
      $this.o6x_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = capacity << 1;
      tmp.p6x_1 = fillArrayVal(Array(size), null);
    }
    $this.q6x_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).r6x = function (key, hash) {
    var N = this.q6x_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.o6x_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.p6x_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N && this.o6x_1[end] === hash) {
      if (equals(key, this.p6x_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && this.o6x_1[i] === hash) {
      if (equals(key, this.p6x_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).s6x = function () {
    var N = this.q6x_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.o6x_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.p6x_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N && this.o6x_1[end] === 0) {
      if (null == this.p6x_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && this.o6x_1[i] === 0) {
      if (null == this.p6x_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).l2 = function (key) {
    return this.t6x(key) >= 0;
  };
  protoOf(SimpleArrayMap).t6x = function (key) {
    return key == null ? this.s6x() : this.r6x(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).n2 = function (key) {
    var index = this.t6x(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.p6x_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).p13 = function (index) {
    var tmp = this.p6x_1[index << 1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).i13 = function (index) {
    var tmp = this.p6x_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).q = function () {
    return this.q6x_1 <= 0;
  };
  protoOf(SimpleArrayMap).f2 = function (key, value) {
    var osize = this.q6x_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.s6x();
    } else {
      hash = hashCode(key);
      index = this.r6x(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.p6x_1[index];
      var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.p6x_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.o6x_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.o6x_1.length + ' to ' + n);
      }
      this.o6x_1 = copyOf(this.o6x_1, n);
      this.p6x_1 = copyOf_0(this.p6x_1, n << 1);
      if (true && !(osize === this.q6x_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.o6x_1;
      var destination = this.o6x_1;
      var destinationOffset = index + 1 | 0;
      var startIndex = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination, destinationOffset, startIndex, osize);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.p6x_1;
      var destination_0 = this.p6x_1;
      var destinationOffset_0 = (index + 1 | 0) << 1;
      var startIndex_0 = index << 1;
      var endIndex = this.q6x_1 << 1;
      arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex);
    }
    if (!(osize === this.q6x_1) || index >= this.o6x_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.o6x_1[index] = hash;
    this.p6x_1[index << 1] = key;
    this.p6x_1[(index << 1) + 1 | 0] = value;
    this.q6x_1 = this.q6x_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.q6x_1 === map.q6x_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.q6x_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.p13(i);
            var mine = this.i13(i);
            var theirs = map.n2(key);
            if (mine == null) {
              if (!(theirs == null) || !map.l2(key)) {
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
          if (!(this.q6x_1 === map_0.j())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.q6x_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.p13(i_0);
              var mine_0 = this.i13(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, KtMap) ? map_0 : THROW_CCE()).n2(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, KtMap) ? map_0 : THROW_CCE()).l2(key_0);
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
    var hashes = this.o6x_1;
    var array = this.p6x_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.q6x_1;
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
    if (this.q()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$_0(imul(this.q6x_1, 28));
    buffer.q8(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.q6x_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.p8(', ');
        }
        var key = this.p13(i);
        if (!(key === this)) {
          buffer.o8(key);
        } else {
          buffer.p8('(this Map)');
        }
        buffer.q8(_Char___init__impl__6a9atx(61));
        var value = this.i13(i);
        if (!(value === this)) {
          buffer.o8(value);
        } else {
          buffer.p8('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.q8(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.q6x_1 = 0;
  }
  function Font() {
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.h6u_1 = new DefaultFontFamily();
    this.i6u_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.j6u_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.k6u_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.l6u_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_4;
  function Companion_getInstance_16() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_16();
    this.z6x_1 = canLoadSynchronously;
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
    this.b6y_1 = name;
    this.c6y_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.c6y_1;
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
      this$0.d6y_1;
      if (finalResult.f6y()) {
        this$0.e6y_1.f2($typefaceRequest, finalResult);
      } else {
        this$0.e6y_1.g2($typefaceRequest);
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    this.d6y_1 = createSynchronizedObject();
    this.e6y_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).g6y = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d6y_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.e6y_1.n2(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.f6y()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.e6y_1.g2(typefaceRequest);
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
        throw new FontLoadFailedException(typefaceRequest.h6y_1, cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d6y_1;
    if (this.e6y_1.n2(typefaceRequest) == null && currentTypefaceResult.f6y()) {
      this.e6y_1.f2(typefaceRequest, currentTypefaceResult);
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.h6y_1 = fontFamily;
    this.i6y_1 = fontWeight;
    this.j6y_1 = fontStyle;
    this.k6y_1 = fontSynthesis;
    this.l6y_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).m6y = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).n6y = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.h6y_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.i6y_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.j6y_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.k6y_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.l6y_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.m6y(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.m6y.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + toString_0(this.h6y_1) + ', fontWeight=' + this.i6y_1.toString() + ', fontStyle=' + FontStyle__toString_impl_thncxr(this.j6y_1) + ', fontSynthesis=' + FontSynthesis__toString_impl_gunvr0(this.k6y_1) + ', resourceLoaderCacheKey=' + toString_0(this.l6y_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.h6y_1 == null ? 0 : hashCode(this.h6y_1);
    result = imul(result, 31) + this.i6y_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.j6y_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.k6y_1) | 0;
    result = imul(result, 31) + (this.l6y_1 == null ? 0 : hashCode(this.l6y_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.h6y_1, tmp0_other_with_cast.h6y_1))
      return false;
    if (!this.i6y_1.equals(tmp0_other_with_cast.i6y_1))
      return false;
    if (!(this.j6y_1 === tmp0_other_with_cast.j6y_1))
      return false;
    if (!(this.k6y_1 === tmp0_other_with_cast.k6y_1))
      return false;
    if (!equals(this.l6y_1, tmp0_other_with_cast.l6y_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.o6y_1 = value;
    this.p6y_1 = cacheable;
  }
  protoOf(Immutable).w = function () {
    return this.o6y_1;
  };
  protoOf(Immutable).f6y = function () {
    return this.p6y_1;
  };
  function Async(current) {
    this.q6y_1 = current;
  }
  protoOf(Async).w = function () {
    return this.q6y_1.w();
  };
  protoOf(Async).f6y = function () {
    return this.q6y_1.x6y_1;
  };
  function FontLoadFailedException(fontFamily, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Failed to load font ' + toString_0(fontFamily) + '. Is it installed on the system?', cause, this);
    captureStack(this, FontLoadFailedException);
  }
  function resolve($this, typefaceRequest) {
    var result = $this.a6z_1.g6y(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.n6y(null)).w();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.b6z_1.g6z($typefaceRequest, this$0.y6y_1, onAsyncCompletion, this$0.d6z_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.c6z_1.g6z($typefaceRequest, this$0.y6y_1, onAsyncCompletion, this$0.d6z_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw new FontLoadFailedException($typefaceRequest.h6y_1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_17().h6z_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.y6y_1 = platformFontLoader;
    this.z6y_1 = platformResolveInterceptor;
    this.a6z_1 = typefaceRequestCache;
    this.b6z_1 = fontListFontFamilyTypefaceAdapter;
    this.c6z_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.d6z_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).i6z = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.z6y_1.j6z(fontFamily), this.z6y_1.k6z(fontWeight), this.z6y_1.l6z(fontStyle), this.z6y_1.m6z(fontSynthesis), this.y6y_1.n6z()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.h6z_1 = new PlatformResolveInterceptor$Companion$Default$1();
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
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.o6z_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.o6z_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.o6z_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.o6z_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.o6z_1, other);
  };
  function Key(font, loaderKey) {
    this.p6z_1 = font;
    this.q6z_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + toString(this.p6z_1) + ', loaderKey=' + toString_0(this.q6z_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.p6z_1);
    result = imul(result, 31) + (this.q6z_1 == null ? 0 : hashCode(this.q6z_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.p6z_1, tmp0_other_with_cast.p6z_1))
      return false;
    if (!equals(this.q6z_1, tmp0_other_with_cast.q6z_1))
      return false;
    return true;
  };
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z6z_1 = _this__u8e3s4;
    this.a70_1 = font;
    this.b70_1 = platformFontLoader;
    this.c70_1 = forever;
    this.d70_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.e70_1 = new Key(this.a70_1, this.b70_1.n6z());
            this.z6z_1.i70_1;
            var tmp0_elvis_lhs = this.z6z_1.g70_1.n2(this.e70_1);
            var priorResult = tmp0_elvis_lhs == null ? this.z6z_1.h70_1.n2(this.e70_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.o6z_1);
            }

            this.n9_1 = 1;
            suspendResult = this.d70_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.z6z_1.i70_1;
            if (this_0 == null) {
              this.z6z_1.h70_1.f2(this.e70_1, new AsyncTypefaceResult(this.z6z_1.f70_1));
            } else if (this.c70_1) {
              this.z6z_1.h70_1.f2(this.e70_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.z6z_1.g70_1.f2(this.e70_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
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
  function AsyncTypefaceCache() {
    this.f70_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.g70_1 = LruCache_init_$Create$(16);
    this.h70_1 = SimpleArrayMap_init_$Create$();
    this.i70_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).j70 = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.n6z());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i70_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.h70_1.f2(key, new AsyncTypefaceResult(this.f70_1));
    } else if (forever) {
      tmp = this.h70_1.f2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.g70_1.f2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).k70 = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.j70(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.j70.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).l70 = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.n6z());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i70_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.g70_1.n2(key);
    return tmp0_elvis_lhs == null ? this.h70_1.n2(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).m70 = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var this_0 = $this.w6y_1;
    value$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.v70_1 = this$0;
    this.w70_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).x70 = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncFontListLoader$load$slambda).db = function ($completion) {
    return this.x70($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.v70_1.y70(this.w70_1, this);
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
  protoOf(AsyncFontListLoader$load$slambda).j23 = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.v70_1, this.w70_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.x70($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.h71_1 = this$0;
    this.i71_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).k71 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.f1x($this$withTimeoutOrNull, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).ha = function (p1, $completion) {
    return this.k71((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.h71_1.v6y_1.l71(this.i71_1, this);
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).f1x = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.h71_1, this.i71_1, completion);
    i.j71_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.k71($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u71_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 12;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.o9_1 = 11;
            var tmp_0 = this;
            tmp_0.x71_1 = this.u71_1.r6y_1;
            this.y71_1 = get_indices(this.x71_1).g();
            this.n9_1 = 3;
            continue $sm;
          case 3:
            if (!this.y71_1.h()) {
              this.n9_1 = 9;
              continue $sm;
            }

            this.z71_1 = this.y71_1.i();
            this.a72_1 = this.x71_1.o(this.z71_1);
            var tmp_1 = this;
            tmp_1.b72_1 = this.a72_1;
            if (this.b72_1.v6x() === Companion_getInstance_19().y6x_1) {
              this.n9_1 = 4;
              suspendResult = this.u71_1.t6y_1.m70(this.b72_1, this.u71_1.v6y_1, false, AsyncFontListLoader$load$slambda_0(this.u71_1, this.b72_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 7;
              continue $sm;
            }

          case 4:
            this.c72_1 = suspendResult;
            if (!(this.c72_1 == null)) {
              _set_value__lx0xdg(this.u71_1, synthesizeTypeface(this.u71_1.s6y_1.k6y_1, this.c72_1, this.b72_1, this.u71_1.s6y_1.i6y_1, this.u71_1.s6y_1.j6y_1));
              this.w71_1 = Unit_instance;
              this.o9_1 = 12;
              this.n9_1 = 8;
              continue $sm;
            } else {
              this.n9_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.n9_1 = 6;
            continue $sm;
          case 6:
            this.n9_1 = 7;
            continue $sm;
          case 7:
            this.n9_1 = 3;
            continue $sm;
          case 8:
            this.o9_1 = 12;
            var shouldCache = get_isActive(this.t9());
            this.u71_1.x6y_1 = false;
            this.u71_1.u6y_1(new Immutable(this.u71_1.w(), shouldCache));
            return Unit_instance;
          case 9:
            this.v71_1 = Unit_instance;
            this.o9_1 = 12;
            this.n9_1 = 10;
            continue $sm;
          case 10:
            this.o9_1 = 12;
            var shouldCache_0 = get_isActive(this.t9());
            this.u71_1.x6y_1 = false;
            this.u71_1.u6y_1(new Immutable(this.u71_1.w(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.o9_1 = 12;
            var t = this.q9_1;
            var shouldCache_1 = get_isActive(this.t9());
            this.u71_1.x6y_1 = false;
            this.u71_1.u6y_1(new Immutable(this.u71_1.w(), shouldCache_1));
            throw t;
          case 12:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 12) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l72_1 = _this__u8e3s4;
    this.m72_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.l72_1, this.m72_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n72_1 = suspendResult;
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.q9_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.t9())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.n72_1 = tmp_3;
              this.n9_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.q9_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.q9_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.t9().aa(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.z1b(this.t9(), IllegalStateException_init_$Create$_0('Unable to load font ' + toString(this.m72_1), uncaughtFontLoadException));
                }
                tmp_5.n72_1 = null;
                this.n9_1 = 4;
                continue $sm;
              } else {
                throw this.q9_1;
              }
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return this.n72_1;
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
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.r6y_1 = fontList;
    this.s6y_1 = typefaceRequest;
    this.t6y_1 = asyncTypefaceCache;
    this.u6y_1 = onCompletion;
    this.v6y_1 = platformFontLoader;
    this.w6y_1 = mutableStateOf(initialType);
    this.x6y_1 = true;
  }
  protoOf(AsyncFontListLoader).w = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.w6y_1;
    value$factory_0();
    return this_0.w();
  };
  protoOf(AsyncFontListLoader).o72 = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncFontListLoader).y70 = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).z1b = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_instance;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    this.q72_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.r72_1 = new _no_name_provided__qut3iv();
  }
  var Companion_instance_6;
  function Companion_getInstance_18() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.a73_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.a73_1.o72(this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).f1x = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.a73_1, completion);
    i.b73_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_18();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.e6z_1 = asyncTypefaceCache;
    this.f6z_1 = CoroutineScope_0(Companion_getInstance_18().r72_1.hj(get_FontCacheManagementDispatcher()).hj(injectedContext).hj(SupervisorJob(injectedContext.aa(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).g6z = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.h6y_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_18().q72_1.e73(typefaceRequest.h6y_1.d73_1, typefaceRequest.i6y_1, typefaceRequest.j6y_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.e6z_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.gb();
    var synthesizedTypeface = tmp0_container.hb();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.e6z_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.f6z_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.o(idx);
        var tmp1_subject = font.v6x();
        if (tmp1_subject === Companion_getInstance_19().w6x_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.i70_1;
            var key = new Key(font, platformFontLoader.n6z());
            var tmp0_elvis_lhs = asyncTypefaceCache.g70_1.n2(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.h70_1.n2(key) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.o6z_1);
              break $l$block;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp;
            try {
              tmp = platformFontLoader.f73(font);
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
            asyncTypefaceCache.k70(font, platformFontLoader, tmp);
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
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.k6y_1, result, font, typefaceRequest.i6y_1, typefaceRequest.j6y_1));
        } else if (tmp1_subject === Companion_getInstance_19().x6x_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.i70_1;
            var key_0 = new Key(font, platformFontLoader.n6z());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.g70_1.n2(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.h70_1.n2(key_0) : tmp0_elvis_lhs_0;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.o6z_1);
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
              var value = platformFontLoader.f73(font);
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
            asyncTypefaceCache.k70(font, platformFontLoader, this_1);
            tmp$ret$5 = this_1;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.k6y_1, result_0, font, typefaceRequest.i6y_1, typefaceRequest.j6y_1));
          }
        } else if (tmp1_subject === Companion_getInstance_19().y6x_1) {
          var cacheResult = asyncTypefaceCache.l70(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.e(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.o6z_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.o6z_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.k6y_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.o6z_1), font, typefaceRequest.i6y_1, typefaceRequest.j6y_1));
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
      return receiver.w();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w();
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
    return $this === Companion_getInstance_19().w6x_1 ? 'Blocking' : $this === Companion_getInstance_19().x6x_1 ? 'Optional' : $this === Companion_getInstance_19().y6x_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.w6x_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.x6x_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.y6x_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_7;
  function Companion_getInstance_19() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function FontMatcher() {
  }
  protoOf(FontMatcher).e73 = function (fontList, fontWeight, fontStyle) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(fontList.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.o(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.g5k().equals(fontWeight) && item.u6x() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.q()) {
      return target;
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(fontList.j());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.o(index_0);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.u6x() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.e(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (target_0.q()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp = fontList;
    } else {
      tmp = target_0;
    }
    var fontsToSearch = tmp;
    var tmp_0;
    if (fontWeight.g73(Companion_getInstance_22().l6t_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.j() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.o(index_1);
          var possibleWeight = font.g5k();
          if (!(null == null) && possibleWeight.g73(null) < 0) {
            continue $l$loop_1;
          }
          if (!(null == null) && possibleWeight.g73(null) > 0) {
            continue $l$loop_1;
          }
          if (possibleWeight.g73(fontWeight) < 0) {
            if (bestWeightBelow == null || possibleWeight.g73(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.g73(fontWeight) > 0) {
            if (bestWeightAbove == null || possibleWeight.g73(bestWeightAbove) < 0) {
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
      var target_1 = ArrayList_init_$Create$(fontsToSearch.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.j() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.o(index_2);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.g5k().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.e(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_0 = target_1;
    } else if (fontWeight.g73(Companion_getInstance_22().m6t_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.j() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.o(index_3);
          var possibleWeight_0 = font_0.g5k();
          if (!(null == null) && possibleWeight_0.g73(null) < 0) {
            continue $l$loop_4;
          }
          if (!(null == null) && possibleWeight_0.g73(null) > 0) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.g73(fontWeight) < 0) {
            if (bestWeightBelow_0 == null || possibleWeight_0.g73(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.g73(fontWeight) > 0) {
            if (bestWeightAbove_0 == null || possibleWeight_0.g73(bestWeightAbove_0) < 0) {
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
      var target_2 = ArrayList_init_$Create$(fontsToSearch.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.j() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.o(index_4);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.g5k().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.e(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_0 = target_2;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_22().m6t_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.j() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.o(index_5);
          var possibleWeight_1 = font_1.g5k();
          if (!(null == null) && possibleWeight_1.g73(null) < 0) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) && possibleWeight_1.g73(maxSearchRange) > 0) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.g73(fontWeight) < 0) {
            if (bestWeightBelow_1 == null || possibleWeight_1.g73(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.g73(fontWeight) > 0) {
            if (bestWeightAbove_1 == null || possibleWeight_1.g73(bestWeightAbove_1) < 0) {
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
      var target_3 = ArrayList_init_$Create$(fontsToSearch.j());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.j() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.o(index_6);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.g5k().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.e(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_4;
      if (target_3.q()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_22().m6t_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.j() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.o(index_7);
            var possibleWeight_2 = font_2.g5k();
            if (!(minSearchRange == null) && possibleWeight_2.g73(minSearchRange) < 0) {
              continue $l$loop_10;
            }
            if (!(null == null) && possibleWeight_2.g73(null) > 0) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.g73(fontWeight) < 0) {
              if (bestWeightBelow_2 == null || possibleWeight_2.g73(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.g73(fontWeight) > 0) {
              if (bestWeightAbove_2 == null || possibleWeight_2.g73(bestWeightAbove_2) < 0) {
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
        var target_4 = ArrayList_init_$Create$(fontsToSearch.j());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.j() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.o(index_8);
            // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.g5k().equals(bestWeight_2)) {
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
    return $this === Companion_getInstance_20().b6u_1 ? 'Normal' : $this === Companion_getInstance_20().c6u_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.b6u_1 = _FontStyle___init__impl__jcnduf(0);
    this.c6u_1 = _FontStyle___init__impl__jcnduf(1);
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
    if (!($this === (other instanceof FontStyle ? other.d6s_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_20();
    this.d6s_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.d6s_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.d6s_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.d6s_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_21().d6u_1 ? 'None' : $this === Companion_getInstance_21().e6u_1 ? 'All' : $this === Companion_getInstance_21().f6u_1 ? 'Weight' : $this === Companion_getInstance_21().g6u_1 ? 'Style' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.d6u_1 = _FontSynthesis___init__impl__n397bg(0);
    this.e6u_1 = _FontSynthesis___init__impl__n397bg(1);
    this.f6u_1 = _FontSynthesis___init__impl__n397bg(2);
    this.g6u_1 = _FontSynthesis___init__impl__n397bg(3);
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
    if (!($this === (other instanceof FontSynthesis ? other.e6s_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_21();
    this.e6s_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.e6s_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.e6s_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.e6s_1, other);
  };
  function Companion_9() {
    Companion_instance_10 = this;
    this.i6t_1 = new FontWeight(100);
    this.j6t_1 = new FontWeight(200);
    this.k6t_1 = new FontWeight(300);
    this.l6t_1 = new FontWeight(400);
    this.m6t_1 = new FontWeight(500);
    this.n6t_1 = new FontWeight(600);
    this.o6t_1 = new FontWeight(700);
    this.p6t_1 = new FontWeight(800);
    this.q6t_1 = new FontWeight(900);
    this.r6t_1 = this.i6t_1;
    this.s6t_1 = this.j6t_1;
    this.t6t_1 = this.k6t_1;
    this.u6t_1 = this.l6t_1;
    this.v6t_1 = this.m6t_1;
    this.w6t_1 = this.n6t_1;
    this.x6t_1 = this.o6t_1;
    this.y6t_1 = this.p6t_1;
    this.z6t_1 = this.q6t_1;
    this.a6u_1 = listOf([this.i6t_1, this.j6t_1, this.k6t_1, this.l6t_1, this.m6t_1, this.n6t_1, this.o6t_1, this.p6t_1, this.q6t_1]);
  }
  var Companion_instance_10;
  function Companion_getInstance_22() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_22();
    this.p6s_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.p6s_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.p6s_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(FontWeight).g73 = function (other) {
    return compareTo(this.p6s_1, other.p6s_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.g73(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.p6s_1 === other.p6s_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.p6s_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.p6s_1 + ')';
  };
  function TextInputService(platformTextInputService) {
    this.h73_1 = platformTextInputService;
    this.i73_1 = new AtomicReference(null);
  }
  function Companion_10() {
  }
  protoOf(Companion_10).o2g = function () {
    return get_platformLocaleDelegate().o2g().o(0);
  };
  var Companion_instance_11;
  function Companion_getInstance_23() {
    return Companion_instance_11;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().j73(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    this.s6s_1 = platformLocale;
  }
  protoOf(Locale).k73 = function () {
    return get_language(this.s6s_1);
  };
  protoOf(Locale).l73 = function () {
    return get_region(this.s6s_1);
  };
  protoOf(Locale).t6s = function () {
    return getLanguageTag(this.s6s_1);
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.t6s() === other.t6s();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.t6s());
  };
  protoOf(Locale).toString = function () {
    return this.t6s();
  };
  function Companion_11() {
    Companion_instance_12 = this;
    this.q6u_1 = new LocaleList(emptyList());
  }
  protoOf(Companion_11).o2g = function () {
    return get_platformLocaleDelegate().o2g();
  };
  var Companion_instance_12;
  function Companion_getInstance_24() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function LocaleList(localeList) {
    Companion_getInstance_24();
    this.q6s_1 = localeList;
    this.r6s_1 = this.q6s_1.j();
  }
  protoOf(LocaleList).o = function (i) {
    return this.q6s_1.o(i);
  };
  protoOf(LocaleList).j = function () {
    return this.r6s_1;
  };
  protoOf(LocaleList).m73 = function (element) {
    return this.q6s_1.p(element);
  };
  protoOf(LocaleList).p = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.m73(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).n73 = function (elements) {
    return this.q6s_1.a2(elements);
  };
  protoOf(LocaleList).a2 = function (elements) {
    return this.n73(elements);
  };
  protoOf(LocaleList).q = function () {
    return this.q6s_1.q();
  };
  protoOf(LocaleList).g = function () {
    return this.q6s_1.g();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.q6s_1, other.q6s_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.q6s_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + toString(this.q6s_1) + ')';
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
      FontCacheManagementDispatcher = Dispatchers_getInstance().n1g();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.m6u_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.n6u_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.o6u_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_13;
  function Companion_getInstance_25() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
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
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.f6s_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_25();
    this.f6s_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.f6s_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.f6s_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.f6s_1, other);
  };
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_14 = this;
    this.q6q_1 = _Hyphens___init__impl__m2cvg8(1);
    this.r6q_1 = _Hyphens___init__impl__m2cvg8(2);
    this.s6q_1 = _Hyphens___init__impl__m2cvg8(-2147483648);
  }
  var Companion_instance_14;
  function Companion_getInstance_26() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_26().q6q_1 ? 'Hyphens.None' : $this === Companion_getInstance_26().r6q_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_26().s6q_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.o73_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_26();
    this.o73_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.o73_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.o73_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.o73_1, other);
  };
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40($this);
    return tmp0_subject === _get_value__a43j40(Companion_getInstance_27().r73_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().s73_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().t73_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().u73_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_15 = this;
    this.p73_1 = 1;
    this.q73_1 = 16;
    this.r73_1 = _Trim___init__impl__tcc1lr(1);
    this.s73_1 = _Trim___init__impl__tcc1lr(16);
    this.t73_1 = _Trim___init__impl__tcc1lr(17);
    this.u73_1 = _Trim___init__impl__tcc1lr(0);
  }
  var Companion_instance_15;
  function Companion_getInstance_27() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
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
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().v73_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().w73_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().x73_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().y73_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_15() {
    Companion_instance_16 = this;
    this.v73_1 = _Alignment___init__impl__it107q(0.0);
    this.w73_1 = _Alignment___init__impl__it107q(0.5);
    this.x73_1 = _Alignment___init__impl__it107q(-1.0);
    this.y73_1 = _Alignment___init__impl__it107q(1.0);
  }
  var Companion_instance_16;
  function Companion_getInstance_28() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Companion_16() {
    Companion_instance_17 = this;
    this.z73_1 = new LineHeightStyle(Companion_getInstance_28().x73_1, Companion_getInstance_27().t73_1);
  }
  var Companion_instance_17;
  function Companion_getInstance_29() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function LineHeightStyle(alignment, trim) {
    Companion_getInstance_29();
    this.a74_1 = alignment;
    this.b74_1 = trim;
  }
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.a74_1, other.a74_1))
      return false;
    if (!(this.b74_1 === other.b74_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.a74_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.b74_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + Alignment__toString_impl_on6yhu(this.a74_1) + ', ') + ('trim=' + Trim__toString_impl_hxcm0x(this.b74_1)) + ')';
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
    return $this === Companion_getInstance_30().f6q_1 ? 'Left' : $this === Companion_getInstance_30().g6q_1 ? 'Right' : $this === Companion_getInstance_30().h6q_1 ? 'Center' : $this === Companion_getInstance_30().i6q_1 ? 'Justify' : $this === Companion_getInstance_30().j6q_1 ? 'Start' : $this === Companion_getInstance_30().k6q_1 ? 'End' : $this === Companion_getInstance_30().l6q_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_17() {
    Companion_instance_18 = this;
    this.f6q_1 = _TextAlign___init__impl__99wz4v(1);
    this.g6q_1 = _TextAlign___init__impl__99wz4v(2);
    this.h6q_1 = _TextAlign___init__impl__99wz4v(3);
    this.i6q_1 = _TextAlign___init__impl__99wz4v(4);
    this.j6q_1 = _TextAlign___init__impl__99wz4v(5);
    this.k6q_1 = _TextAlign___init__impl__99wz4v(6);
    this.l6q_1 = _TextAlign___init__impl__99wz4v(-2147483648);
  }
  var Companion_instance_18;
  function Companion_getInstance_30() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.l6r_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_30();
    this.l6r_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.l6r_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.l6r_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.l6r_1, other);
  };
  function Companion_18() {
    Companion_instance_19 = this;
    this.r6u_1 = new TextDecoration(0);
    this.s6u_1 = new TextDecoration(1);
    this.t6u_1 = new TextDecoration(2);
  }
  var Companion_instance_19;
  function Companion_getInstance_31() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function TextDecoration(mask) {
    Companion_getInstance_31();
    this.k6s_1 = mask;
  }
  protoOf(TextDecoration).c74 = function (other) {
    return (this.k6s_1 | other.k6s_1) === this.k6s_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.k6s_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$_0();
    if (!((this.k6s_1 & Companion_getInstance_31().s6u_1.k6s_1) === 0)) {
      values.e('Underline');
    }
    if (!((this.k6s_1 & Companion_getInstance_31().t6u_1.k6s_1) === 0)) {
      values.e('LineThrough');
    }
    if (values.j() === 1) {
      return 'TextDecoration.' + values.o(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.k6s_1 === other.k6s_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.k6s_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_32().t6p_1 ? 'Ltr' : $this === Companion_getInstance_32().u6p_1 ? 'Rtl' : $this === Companion_getInstance_32().v6p_1 ? 'Content' : $this === Companion_getInstance_32().w6p_1 ? 'ContentOrLtr' : $this === Companion_getInstance_32().x6p_1 ? 'ContentOrRtl' : $this === Companion_getInstance_32().y6p_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_20 = this;
    this.t6p_1 = _TextDirection___init__impl__lh8lzt(1);
    this.u6p_1 = _TextDirection___init__impl__lh8lzt(2);
    this.v6p_1 = _TextDirection___init__impl__lh8lzt(3);
    this.w6p_1 = _TextDirection___init__impl__lh8lzt(4);
    this.x6p_1 = _TextDirection___init__impl__lh8lzt(5);
    this.y6p_1 = _TextDirection___init__impl__lh8lzt(-2147483648);
  }
  var Companion_instance_20;
  function Companion_getInstance_32() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.m6r_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_32();
    this.m6r_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.m6r_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.m6r_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.m6r_1, other);
  };
  function Unspecified() {
  }
  protoOf(Unspecified).r60 = function () {
    return Companion_getInstance().p60_1;
  };
  protoOf(Unspecified).y6s = function () {
    return null;
  };
  protoOf(Unspecified).v5w = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).w6s = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_20).x6s = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.w6s(modulate(brush.u60_1, alpha));
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
  var Companion_instance_21;
  function Companion_getInstance_33() {
    return Companion_instance_21;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.v5w();
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
    this.d74_1 = value;
    this.e74_1 = alpha;
  }
  protoOf(BrushStyle).v5w = function () {
    return this.e74_1;
  };
  protoOf(BrushStyle).r60 = function () {
    return Companion_getInstance().p60_1;
  };
  protoOf(BrushStyle).y6s = function () {
    return this.d74_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + toString(this.d74_1) + ', alpha=' + this.e74_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.d74_1);
    result = imul(result, 31) + getNumberHashCode(this.e74_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.d74_1, tmp0_other_with_cast.d74_1))
      return false;
    if (!equals(this.e74_1, tmp0_other_with_cast.e74_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.f74_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.f74_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).r60 = function () {
    return this.f74_1;
  };
  protoOf(ColorStyle).y6s = function () {
    return null;
  };
  protoOf(ColorStyle).v5w = function () {
    return _Color___get_alpha__impl__wcfyv1(this.r60());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + Color__toString_impl_hpzmaq(this.f74_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.f74_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.f74_1, tmp0_other_with_cast.f74_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return isNaN_0(alpha) || alpha >= 1.0 ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function Companion_21() {
    Companion_instance_22 = this;
    this.p6u_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_22;
  function Companion_getInstance_34() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_34();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.l6s_1 = scaleX;
    this.m6s_1 = skewX;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.l6s_1 === other.l6s_1))
      return false;
    if (!(this.m6s_1 === other.m6s_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.l6s_1);
    result = imul(31, result) + getNumberHashCode(this.m6s_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.l6s_1 + ', skewX=' + this.m6s_1 + ')';
  };
  function Companion_22() {
    Companion_instance_23 = this;
    this.w6q_1 = new TextIndent_0();
  }
  var Companion_instance_23;
  function Companion_getInstance_35() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_35();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.n6s_1 = firstLine;
    this.o6s_1 = restLine;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.n6s_1, other.n6s_1))
      return false;
    if (!equals(this.o6s_1, other.o6s_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.n6s_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.o6s_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + TextUnit__toString_impl_51ghw0(this.n6s_1) + ', restLine=' + TextUnit__toString_impl_51ghw0(this.o6s_1) + ')';
  };
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_36().g74_1 ? 'Clip' : $this === Companion_getInstance_36().h74_1 ? 'Ellipsis' : $this === Companion_getInstance_36().i74_1 ? 'Visible' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_24 = this;
    this.g74_1 = _TextOverflow___init__impl__obguoe(1);
    this.h74_1 = _TextOverflow___init__impl__obguoe(2);
    this.i74_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_24;
  function Companion_getInstance_36() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.j74_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_36();
    this.j74_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.j74_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.j74_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.j74_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function strongDirectionType(_this__u8e3s4) {
    switch (CharDirection_getInstance().n5q(_this__u8e3s4)) {
      case 0:
        return Companion_getInstance_37().l74_1;
      case 1:
      case 13:
        return Companion_getInstance_37().m74_1;
      default:
        return Companion_getInstance_37().k74_1;
    }
  }
  function NoCache() {
  }
  protoOf(NoCache).n74 = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).o74 = function (key, loader) {
    return this.n74(!(key == null) ? key : THROW_CCE(), loader);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function PlatformFont() {
  }
  protoOf(PlatformFont).q74 = function () {
    return '' + getKClassFromExpression(this).kb() + '|' + this.p74() + '|weight=' + this.g5k().p6s_1 + '|style=' + FontStyle__toString_impl_thncxr(this.u6x());
  };
  function AtomicReference(value) {
    this.r74_1 = value;
  }
  function checkEvicted($this, now) {
    var expireTime = now.b3($this.s74_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = $this.v74_1.j2();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.g();
    $l$loop: while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.v74_1.n2(item)).b1(expireTime) < 0))
        break $l$loop;
      list.e(item);
    }
    var tmp0_iterator_0 = list.g();
    while (tmp0_iterator_0.h()) {
      var element = tmp0_iterator_0.i();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.u74_1.g2(element);
      $this.v74_1.g2(element);
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
    this.s74_1 = expireAfterNanos;
    this.t74_1 = currentNanos;
    this.u74_1 = HashMap_init_$Create$_0();
    this.v74_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).o74 = function (key, loader) {
    this.v74_1.g2(key);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.u74_1;
    var value = this_0.n2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      this_0.f2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var this_1 = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.t74_1();
    // Inline function 'kotlin.collections.set' call
    this.v74_1.f2(key, now);
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
  function Companion_24() {
    Companion_instance_25 = this;
    this.k74_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.l74_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.m74_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_25;
  function Companion_getInstance_37() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).g();
    $l$loop: while (tmp0_iterator.h()) {
      var codePoint = tmp0_iterator.i();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_37().k74_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_37().k74_1;
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
    this.e75_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).q40 = function ($this$sequence, $completion) {
    var tmp = this.r40($this$sequence, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).ha = function (p1, $completion) {
    return this.q40(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.g75_1 = 0;
            this.h75_1 = get_codePoints(this.e75_1).g();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.h75_1.h()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.i75_1 = this.h75_1.i();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.c1_1;
            var containsUpper = progression.d1_1;
            var containsArg = this.i75_1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.g75_1 = this.g75_1 + 1 | 0;
              this.n9_1 = 3;
              continue $sm;
            } else {
              if (this.i75_1 === 8297) {
                if (this.g75_1 > 0) {
                  this.g75_1 = this.g75_1 - 1 | 0;
                }
                this.n9_1 = 3;
                continue $sm;
              } else {
                if (this.g75_1 === 0) {
                  this.n9_1 = 2;
                  suspendResult = this.f75_1.wh(this.i75_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n9_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 5) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).r40 = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.e75_1, completion);
    i.f75_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.q40($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.r75_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).q40 = function ($this$sequence, $completion) {
    var tmp = this.r40($this$sequence, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).ha = function (p1, $completion) {
    return this.q40(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.t75_1 = 0;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.t75_1 < charSequenceLength(this.r75_1))) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.u75_1 = codePointAt(this.r75_1, this.t75_1);
            this.n9_1 = 2;
            suspendResult = this.s75_1.wh(this.u75_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t75_1 = this.t75_1 + charCount(this.u75_1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).r40 = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.r75_1, completion);
    i.s75_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.q40($this$sequence, $completion);
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
    switch (currentPlatform().u2_1) {
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
  function Companion_25() {
    Companion_instance_26 = this;
    var tmp = this;
    tmp.v75_1 = lazy_0(FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda);
  }
  protoOf(Companion_25).w75 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.v75_1;
    PlatformDefault$factory();
    return this_0.w();
  };
  var Companion_instance_26;
  function Companion_getInstance_38() {
    if (Companion_instance_26 == null)
      new Companion_25();
    return Companion_instance_26;
  }
  function FontRasterizationSettings(smoothing, hinting, subpixelPositioning, autoHintingForced) {
    Companion_getInstance_38();
    this.x75_1 = smoothing;
    this.y75_1 = hinting;
    this.z75_1 = subpixelPositioning;
    this.a76_1 = autoHintingForced;
  }
  protoOf(FontRasterizationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof FontRasterizationSettings))
      THROW_CCE();
    if (!this.x75_1.equals(other.x75_1))
      return false;
    if (!this.y75_1.equals(other.y75_1))
      return false;
    if (!(this.z75_1 === other.z75_1))
      return false;
    return this.a76_1 === other.a76_1;
  };
  protoOf(FontRasterizationSettings).hashCode = function () {
    var result = this.x75_1.hashCode();
    result = imul(31, result) + this.y75_1.hashCode() | 0;
    result = imul(31, result) + getBooleanHashCode(this.z75_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.a76_1) | 0;
    return result;
  };
  protoOf(FontRasterizationSettings).toString = function () {
    return 'FontRasterizationSettings(smoothing=' + this.x75_1.toString() + ', ' + ('hinting=' + this.y75_1.toString() + ', ') + ('subpixelPositioning=' + this.z75_1 + ', ') + ('autoHintingForced=' + this.a76_1 + ')');
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
    return new FontRastrSettings(toSkFontEdging(_this__u8e3s4.x75_1), toSkFontHinting(_this__u8e3s4.y75_1), _this__u8e3s4.z75_1);
  }
  function toSkFontEdging(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.u2_1) {
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
    switch (_this__u8e3s4.u2_1) {
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
      return receiver.w75();
    }, null);
  }
  function Paragraph_1() {
  }
  function _set_paragraph__p1bfvb($this, value) {
    $this.i76_1 = value;
    $this.j76_1 = null;
  }
  function _get_text__de5ose($this) {
    return $this.d76_1.k76_1;
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
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this.j76_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      $this.j76_1 = this_0;
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
      tmp = $this.h76_1.z76($this.i76_1);
    } else {
      tmp = $this.i76_1.m5s();
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.a77().l5i();
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(lineMetrics.length === 0)) {
      lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.h76_1.b77());
      lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.h76_1.b77());
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
      var box = firstOrNull($this.i76_1.j5s(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.lineMetricsForOffset.<anonymous>' call
      if ($offset < it.p5r_1) {
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
      if ($vertical < it.x5r_1 + it.s5r_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    this.d76_1 = paragraphIntrinsics;
    this.e76_1 = maxLines;
    this.f76_1 = constraints;
    this.g76_1 = ellipsis ? '\u2026' : '';
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.d76_1.c77();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    this_0.d77(this.e76_1, this.g76_1);
    tmp.h76_1 = this_0;
    this.i76_1 = this.h76_1.e77(this.f5a());
    this.h76_1.f77(Size(this.f5a(), this.g5a()));
    _set_paragraph__p1bfvb(this, this.h76_1.e77(this.f5a()));
    this.i76_1.h5s(this.f5a());
    this.j76_1 = null;
  }
  protoOf(SkiaParagraph).a77 = function () {
    return this.h76_1.g77();
  };
  protoOf(SkiaParagraph).f5a = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.f76_1);
  };
  protoOf(SkiaParagraph).g5a = function () {
    return this.i76_1.g5a();
  };
  protoOf(SkiaParagraph).e5s = function () {
    return this.d76_1.t76_1;
  };
  protoOf(SkiaParagraph).w6o = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.x5r_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).x6o = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.x5r_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).t6o = function () {
    return this.i76_1.g5s();
  };
  protoOf(SkiaParagraph).s6o = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' || this.i76_1.n5s() < 1) {
      tmp = 1;
    } else {
      tmp = this.i76_1.n5s();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).u6o = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.i76_1.k5s();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      var tmp$ret$0 = toComposeRect(item.v5t_1);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).n6o = function (start, end) {
    var boxes = this.i76_1.j5s(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).a5n(b.v5t_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).m6p = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.x5r_1 - tmp0_safe_receiver.r5r_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).o6p = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m5r_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).q6p = function (lineIndex, visibleEnd) {
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
      if (lineIndex > 0 && metrics.m5r_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].n5r_1) {
        tmp_1 = metrics.n5r_1;
      } else if (metrics.m5r_1 < _get_text__de5ose(this).length && charSequenceGet(_get_text__de5ose(this), metrics.m5r_1) === _Char___init__impl__6a9atx(10)) {
        tmp_1 = metrics.m5r_1;
      } else {
        tmp_1 = metrics.o5r_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.n5r_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).l6p = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y5r_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).d6p = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y5r_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).g6p = function (offset) {
    return this.d76_1.q76_1;
  };
  protoOf(SkiaParagraph).h6p = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x5t();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.u2_1) {
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
  protoOf(SkiaParagraph).i6p = function (offset) {
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
        tmp = toTextRange(this.i76_1.l5s(offset - 1 | 0));
      } else {
        tmp = TextRange_0(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.i76_1.l5s(offset));
  };
  protoOf(SkiaParagraph).z6o = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.h76_1;
    $this$with.h77(color);
    $this$with.i77(shadow, textDecoration);
    $this$with.j77(drawStyle);
    $this$with.k77(blendMode);
    var tmp$ret$1 = $this$with.e77(this.f5a());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.i76_1.i5s(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).b6p = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.h76_1;
    $this$with.l77(brush, Size(this.f5a(), this.g5a()), alpha);
    $this$with.i77(shadow, textDecoration);
    $this$with.j77(drawStyle);
    $this$with.k77(blendMode);
    var tmp$ret$1 = $this$with.e77(this.f5a());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.i76_1.i5s(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.s6w()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.u6w();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_29().z73_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.b74_1)) {
      tmp = -fontMetrics.f5j_1;
    } else {
      tmp = _this__u8e3s4.r5r_1;
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.s6w()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.u6w();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_29().z73_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.b74_1)) {
      tmp = fontMetrics.g5j_1;
    } else {
      tmp = _this__u8e3s4.s5r_1;
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_0(_this__u8e3s4.q5k_1, _this__u8e3s4.r5k_1);
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.m5r_1 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.n5r_1 : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.o5r_1 : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.p5r_1 : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.q5r_1 : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.r5r_1 : ascent;
    descent = descent === VOID ? _this__u8e3s4.s5r_1 : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.t5r_1 : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.u5r_1 : height;
    width = width === VOID ? _this__u8e3s4.v5r_1 : width;
    left = left === VOID ? _this__u8e3s4.w5r_1 : left;
    baseline = baseline === VOID ? _this__u8e3s4.x5r_1 : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.y5r_1 : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_39().m77_1 ? 'Solid' : $this === Companion_getInstance_39().n77_1 ? 'Double' : $this === Companion_getInstance_39().o77_1 ? 'Dotted' : $this === Companion_getInstance_39().p77_1 ? 'Dashed' : $this === Companion_getInstance_39().q77_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_26() {
    Companion_instance_27 = this;
    this.m77_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.n77_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.o77_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.p77_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.q77_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  var Companion_instance_27;
  function Companion_getInstance_39() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === (other instanceof TextDecorationLineStyle ? other.r77_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_39();
    this.r77_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.r77_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.r77_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.r77_1, other);
  };
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.r6v_1 = spanStyle;
    $this.s6v_1 = paragraphStyle;
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
    if (!equals(this.s6v_1, other.s6v_1))
      return false;
    if (!equals(this.r6v_1, other.r6v_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    var tmp0_safe_receiver = this.r6v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.s6v_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function PlatformTextStyle() {
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function createFontFamilyResolver(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).g6z = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.h6y_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.h6y_1;
    var result = skiaFontLoader.u77(tmp0_elvis_lhs == null ? Companion_getInstance_16().h6u_1 : tmp0_elvis_lhs, typefaceRequest.i6y_1, typefaceRequest.j6y_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.s77_1 = fontCache;
    this.t77_1 = this.s77_1;
  }
  protoOf(SkiaFontLoader).v77 = function () {
    return this.s77_1.w77_1;
  };
  protoOf(SkiaFontLoader).f73 = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.v6x() === Companion_getInstance_19().x6x_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + toString(font));
      }
      return null;
    }
    var tmp0_subject = font.v6x();
    var tmp;
    if (tmp0_subject === Companion_getInstance_19().w6x_1) {
      tmp = this.s77_1.a78(font);
    } else if (tmp0_subject === Companion_getInstance_19().x6x_1) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        var value = this.s77_1.a78(font);
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
    } else if (tmp0_subject === Companion_getInstance_19().y6x_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + FontLoadingStrategy__toString_impl_fx0z8f(font.v6x()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).u77 = function (fontFamily, fontWeight, fontStyle) {
    return this.s77_1.u77(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).b78 = function (font, $completion) {
    return this.f73(font);
  };
  protoOf(SkiaFontLoader).l71 = function (font, $completion) {
    return this.b78(font, $completion);
  };
  protoOf(SkiaFontLoader).n6z = function () {
    return this.t77_1;
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
    brushSize = brushSize === VOID ? Companion_getInstance_5().y5a_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().j66_1 : blendMode;
    ComputedStyle.call($this);
    $this.w78(density, spanStyle, brushSize, blendMode, lineHeight);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode, lineHeight) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, objectCreate(protoOf(ComputedStyle)));
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight) {
    textForegroundStyle = textForegroundStyle === VOID ? Unspecified_instance : textForegroundStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_5().y5a_1 : brushSize;
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
    background = background === VOID ? Companion_getInstance().p60_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? null : textDecorationLineStyle;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().j66_1 : blendMode;
    lineHeight = lineHeight === VOID ? null : lineHeight;
    this.c78_1 = textForegroundStyle;
    this.d78_1 = brushSize;
    this.e78_1 = fontSize;
    this.f78_1 = fontWeight;
    this.g78_1 = fontStyle;
    this.h78_1 = fontSynthesis;
    this.i78_1 = fontFamily;
    this.j78_1 = fontFeatureSettings;
    this.k78_1 = letterSpacing;
    this.l78_1 = baselineShift;
    this.m78_1 = textGeometricTransform;
    this.n78_1 = localeList;
    this.o78_1 = background;
    this.p78_1 = textDecoration;
    this.q78_1 = textDecorationLineStyle;
    this.r78_1 = shadow;
    this.s78_1 = drawStyle;
    this.t78_1 = blendMode;
    this.u78_1 = lineHeight;
    this.v78_1 = new SkiaTextPaint();
  }
  protoOf(ComputedStyle).w78 = function (density, spanStyle, brushSize, blendMode, lineHeight) {
    this.c78_1 = spanStyle.n6r_1;
    this.d78_1 = brushSize;
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.set.<anonymous>' call
    tmp.e78_1 = density.j5b(spanStyle.o6r_1);
    this.f78_1 = spanStyle.p6r_1;
    this.g78_1 = spanStyle.q6r_1;
    this.h78_1 = spanStyle.r6r_1;
    this.i78_1 = spanStyle.s6r_1;
    this.j78_1 = spanStyle.t6r_1;
    var tmp_0 = this;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = spanStyle.u6r_1;
    if (!get_isUnspecified(this_0)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.set.<anonymous>' call
      tmp_1 = density.j5b(spanStyle.u6r_1);
    } else {
      tmp_1 = null;
    }
    tmp_0.k78_1 = tmp_1;
    this.l78_1 = spanStyle.v6r_1;
    this.m78_1 = spanStyle.w6r_1;
    this.n78_1 = spanStyle.x6r_1;
    this.o78_1 = spanStyle.y6r_1;
    this.p78_1 = spanStyle.z6r_1;
    var tmp_2 = this;
    var tmp0_safe_receiver = spanStyle.b6s_1;
    tmp_2.q78_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f6t_1;
    this.r78_1 = spanStyle.a6s_1;
    this.s78_1 = spanStyle.c6s_1;
    this.t78_1 = blendMode;
    var tmp_3 = this;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(lineHeight)) {
      tmp_4 = toPx(lineHeight, density, spanStyle.o6r_1);
    } else {
      tmp_4 = null;
    }
    tmp_3.u78_1 = tmp_4;
  };
  protoOf(ComputedStyle).x78 = function () {
    var paint = this.v78_1.e6l();
    paint.o5l();
    this.v78_1.q60(this.c78_1.r60());
    this.v78_1.l77(this.c78_1.y6s(), this.d78_1, this.c78_1.v5w());
    this.v78_1.j77(this.s78_1);
    this.v78_1.d6c(this.t78_1);
    return paint;
  };
  protoOf(ComputedStyle).c79 = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.c78_1.r60();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      res.s5l(toArgb(this.c78_1.r60()));
    }
    var foreground = this.x78();
    if (!(foreground.a5m() == null) || !foreground.r5l().equals(PaintMode_FILL_getInstance()) || !foreground.e5m()) {
      res.c5u(foreground);
    }
    var tmp0_safe_receiver = this.g78_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).d6s_1;
      res.i5u(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.p78_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.g5u(toSkDecorationStyle(tmp1_safe_receiver, this.c78_1.r60(), this.q78_1));
    }
    if (!equals(this.o78_1, Companion_getInstance().p60_1)) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      this_1.s5l(toArgb(this.o78_1));
      res.e5u(this_1);
    }
    var tmp2_safe_receiver = this.f78_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.i5u(res.m5p().h5k(tmp2_safe_receiver.p6s_1));
    }
    var tmp3_safe_receiver = this.r78_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.k5u(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.k78_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.t5u(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_6();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.j78_1;
    var tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.m5u(tmp_1.x5i(tmp$ret$8));
    res.n5u(this.e78_1);
    var tmp5_safe_receiver = this.i78_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.f78_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_22().u6t_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.g78_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_20().b6u_1;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.h78_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_21().d6u_1;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.i6z(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).w();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.e79_1;
      var tmp$ret$9 = copyToArray(this_2);
      res.p5u(tmp$ret$9);
      res.x5u(resolved.d79_1);
    }
    var tmp6_safe_receiver = this.l78_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).f6s_1;
      var fontMetrics = res.z5u();
      res.v5u(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.f5j_1);
    }
    var tmp7_safe_receiver = this.u78_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.r5u(tmp7_safe_receiver / this.e78_1);
    }
    return res;
  };
  protoOf(ComputedStyle).f79 = function (density, other) {
    var fontSize = toPx_0(other.o6r_1, density, this.e78_1);
    this.c78_1 = this.c78_1.e6t(other.n6r_1);
    var tmp0_safe_receiver = other.s6r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.i78_1 = tmp0_safe_receiver;
    }
    this.e78_1 = fontSize;
    var tmp1_safe_receiver = other.p6r_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.f78_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.q6r_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.g78_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).d6s_1;
    }
    var tmp3_safe_receiver = other.r6r_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.h78_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).e6s_1;
    }
    var tmp4_safe_receiver = other.t6r_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.j78_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.u6r_1)) {
      this.k78_1 = toPx_0(other.u6r_1, density, fontSize);
    }
    var tmp5_safe_receiver = other.v6r_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.l78_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).f6s_1;
    }
    var tmp6_safe_receiver = other.w6r_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.m78_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.x6r_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.n78_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = other.y6r_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      this.o78_1 = other.y6r_1;
    }
    var tmp8_safe_receiver = other.z6r_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.p78_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.a6s_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.r78_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.c6s_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.s78_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.b6s_1;
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.f6t_1;
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.contracts.contract' call
        this.q78_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).r77_1;
        tmp_5 = Unit_instance;
      }
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = toString(this.c78_1);
    var tmp_0 = Size__toString_impl_o87ni8(this.d78_1);
    var tmp_1 = this.e78_1;
    var tmp_2 = toString_0(this.f78_1);
    var tmp_3 = this.g78_1;
    var tmp_4 = toString_0(tmp_3 == null ? null : new FontStyle(tmp_3));
    var tmp_5 = this.h78_1;
    var tmp_6 = toString_0(tmp_5 == null ? null : new FontSynthesis(tmp_5));
    var tmp_7 = toString_0(this.i78_1);
    var tmp_8 = this.j78_1;
    var tmp_9 = this.k78_1;
    var tmp_10 = this.l78_1;
    var tmp_11 = toString_0(tmp_10 == null ? null : new BaselineShift(tmp_10));
    var tmp_12 = toString_0(this.m78_1);
    var tmp_13 = toString_0(this.n78_1);
    var tmp_14 = Color__toString_impl_hpzmaq(this.o78_1);
    var tmp_15 = toString_0(this.p78_1);
    var tmp_16 = this.q78_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + tmp_11 + ', textGeometricTransform=' + tmp_12 + ', localeList=' + tmp_13 + ', background=' + tmp_14 + ', textDecoration=' + tmp_15 + ', textDecorationLineStyle=' + toString_0(tmp_16 == null ? null : new TextDecorationLineStyle(tmp_16)) + ', shadow=' + toString_0(this.r78_1) + ', drawStyle=' + toString_0(this.s78_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.t78_1) + ', lineHeight=' + this.u78_1 + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.c78_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.d78_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e78_1) | 0;
    result = imul(result, 31) + (this.f78_1 == null ? 0 : this.f78_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.g78_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.g78_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.h78_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.h78_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.i78_1 == null ? 0 : hashCode(this.i78_1)) | 0;
    result = imul(result, 31) + (this.j78_1 == null ? 0 : getStringHashCode(this.j78_1)) | 0;
    result = imul(result, 31) + (this.k78_1 == null ? 0 : getNumberHashCode(this.k78_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.l78_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.l78_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.m78_1 == null ? 0 : this.m78_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n78_1 == null ? 0 : this.n78_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.o78_1) | 0;
    result = imul(result, 31) + (this.p78_1 == null ? 0 : this.p78_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.q78_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.q78_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.r78_1 == null ? 0 : this.r78_1.hashCode()) | 0;
    result = imul(result, 31) + (this.s78_1 == null ? 0 : hashCode(this.s78_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.t78_1) | 0;
    result = imul(result, 31) + (this.u78_1 == null ? 0 : getNumberHashCode(this.u78_1)) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.c78_1, tmp0_other_with_cast.c78_1))
      return false;
    if (!equals(this.d78_1, tmp0_other_with_cast.d78_1))
      return false;
    if (!equals(this.e78_1, tmp0_other_with_cast.e78_1))
      return false;
    if (!equals(this.f78_1, tmp0_other_with_cast.f78_1))
      return false;
    var tmp = this.g78_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.g78_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.h78_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.h78_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.i78_1, tmp0_other_with_cast.i78_1))
      return false;
    if (!(this.j78_1 == tmp0_other_with_cast.j78_1))
      return false;
    if (!equals(this.k78_1, tmp0_other_with_cast.k78_1))
      return false;
    var tmp_5 = this.l78_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.l78_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.m78_1, tmp0_other_with_cast.m78_1))
      return false;
    if (!equals(this.n78_1, tmp0_other_with_cast.n78_1))
      return false;
    if (!equals(this.o78_1, tmp0_other_with_cast.o78_1))
      return false;
    if (!equals(this.p78_1, tmp0_other_with_cast.p78_1))
      return false;
    var tmp_8 = this.q78_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = tmp0_other_with_cast.q78_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.r78_1, tmp0_other_with_cast.r78_1))
      return false;
    if (!equals(this.s78_1, tmp0_other_with_cast.s78_1))
      return false;
    if (!(this.t78_1 === tmp0_other_with_cast.t78_1))
      return false;
    if (!equals(this.u78_1, tmp0_other_with_cast.u78_1))
      return false;
    return true;
  };
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.toPx.<anonymous>' call
    var tmp$ret$1 = density.j5b(fontSize);
    return toPx_0(_this__u8e3s4, density, tmp$ret$1);
  }
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_20().c6u_1 ? Companion_getInstance_7().e5k_1 : Companion_getInstance_7().c5k_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var underline = _this__u8e3s4.c74(Companion_getInstance_31().s6u_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.c74(Companion_getInstance_31().t6u_1);
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
    return new Shadow_0(toArgb(_this__u8e3s4.y67_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.z67_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.z67_1), _this__u8e3s4.a68_1);
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
      tmp = density.j5b(_this__u8e3s4);
    } else {
      var message = 'Unexpected size in TextUnit.toPx';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkDecorationLineStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_39().m77_1 ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_39().n77_1 ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_39().o77_1 ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_39().p77_1 ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_39().q77_1 ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.g79_1 = position;
    this.h79_1 = style;
  }
  protoOf(StyleAdd).i79 = function () {
    return this.g79_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.g79_1 + ', style=' + this.h79_1.toString() + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.g79_1;
    result = imul(result, 31) + this.h79_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.g79_1 === tmp0_other_with_cast.g79_1))
      return false;
    if (!this.h79_1.equals(tmp0_other_with_cast.h79_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.j79_1 = cut;
    this.k79_1 = width;
    this.l79_1 = height;
    this.m79_1 = position$factory(this.j79_1);
  }
  protoOf(PutPlaceholder).i79 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.m79_1;
    position$factory_0();
    return this_0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.j79_1.toString() + ', width=' + this.k79_1 + ', height=' + this.l79_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.j79_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.k79_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l79_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.j79_1.equals(tmp0_other_with_cast.j79_1))
      return false;
    if (!equals(this.k79_1, tmp0_other_with_cast.k79_1))
      return false;
    if (!equals(this.l79_1, tmp0_other_with_cast.l79_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.n79_1 = cut;
    this.o79_1 = position$factory_1(this.n79_1);
  }
  protoOf(EndPlaceholder).i79 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.o79_1;
    position$factory_2();
    return this_0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.n79_1.toString() + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.n79_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.n79_1.equals(tmp0_other_with_cast.n79_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.p79_1 = position;
    this.q79_1 = style;
  }
  protoOf(StyleAdd_0).i79 = function () {
    return this.p79_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.p79_1 + ', style=' + this.q79_1.toString() + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.p79_1;
    result = imul(result, 31) + this.q79_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.p79_1 === tmp0_other_with_cast.p79_1))
      return false;
    if (!this.q79_1.equals(tmp0_other_with_cast.q79_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.r79_1 = position;
    this.s79_1 = style;
  }
  protoOf(StyleRemove).i79 = function () {
    return this.r79_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.r79_1 + ', style=' + this.s79_1.toString() + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.r79_1;
    result = imul(result, 31) + this.s79_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.r79_1 === tmp0_other_with_cast.r79_1))
      return false;
    if (!this.s79_1.equals(tmp0_other_with_cast.s79_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.t79_1 = position;
    this.u79_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).i79 = function () {
    return this.t79_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.t79_1 + ', placeholder=' + this.u79_1.toString() + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.t79_1;
    result = imul(result, 31) + this.u79_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.t79_1 === tmp0_other_with_cast.t79_1))
      return false;
    if (!this.u79_1.equals(tmp0_other_with_cast.u79_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.v79_1 = position;
  }
  protoOf(EndPlaceholder_0).i79 = function () {
    return this.v79_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.v79_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.v79_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.v79_1 === tmp0_other_with_cast.v79_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.j7a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.k7a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function prepareDefaultStyle($this) {
    $this.j7a_1 = copyWithDefaultFontSize($this.y79_1.u6v(), $this.g7a_1);
    $this.i7a_1.w78($this.e7a_1, _get_initialStyle__6to25e($this), $this.z79_1, $this.h7a_1, $this.y79_1.s6w());
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$_0();
    var tmp0_iterator = spans.g();
    while (tmp0_iterator.h()) {
      var span = tmp0_iterator.i();
      cuts.e(new StyleAdd_0(span.p6m_1, span.o6m_1));
      cuts.e(new StyleRemove(span.q6m_1, span.o6m_1));
    }
    var tmp1_iterator = placeholders.g();
    while (tmp1_iterator.h()) {
      var placeholder = tmp1_iterator.i();
      cuts.e(new PutPlaceholder_0(placeholder.p6m_1, placeholder.o6m_1));
      cuts.e(new EndPlaceholder_0(placeholder.q6m_1));
    }
    var ops = mutableListOf([new StyleAdd(0, $this.i7a_1)]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.j() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.g();
    while (tmp2_iterator.h()) {
      var cut = tmp2_iterator.i();
      if (cut instanceof StyleAdd_0) {
        activeStyles.e(cut.q79_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.i79(), ops);
        if (prev == null) {
          var tmp_0 = cut.i79();
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          this_0.f79($this.e7a_1, cut.q79_1);
          ops.e(new StyleAdd(tmp_0, this_0));
        } else {
          prev.h79_1.f79($this.e7a_1, cut.q79_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.o2(cut.s79_1);
          ops.e(new StyleAdd(cut.i79(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, toPx_0(cut.u79_1.z6q_1, $this.e7a_1, currentStyle.e78_1), toPx_0(cut.u79_1.a6r_1, $this.e7a_1, currentStyle.e78_1));
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
    var style = ComputedStyle_init_$Create$($this.e7a_1, activeStyles.o(0), $this.z79_1, $this.h7a_1, $this.y79_1.s6w());
    var inductionVariable = 1;
    var last = activeStyles.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.f79($this.e7a_1, activeStyles.o(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).g();
    while (tmp0_iterator.h()) {
      var prevOp = tmp0_iterator.i();
      if (prevOp.i79() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function makeSkFontRasterizationSettings($this, style) {
    var tmp0_safe_receiver = style.a6q_1.g6n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u6q_1;
    var rasterizationSettings = tmp1_elvis_lhs == null ? Companion_getInstance_38().w75() : tmp1_elvis_lhs;
    return toSkFontRastrSettings(rasterizationSettings);
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.n5t(makeSkFontRasterizationSettings($this, style));
    pStyle.h5t(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = style.q6w();
    pStyle.j5t(toSkAlignment(it));
    var lineHeight = computedStyle.u78_1;
    if (!(lineHeight == null) && lineHeight > computedStyle.e78_1) {
      var tmp0_elvis_lhs = style.u6w();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_29().z73_1 : tmp0_elvis_lhs;
      pStyle.m5t(toHeightMode(lineHeightStyle.b74_1));
    } else {
      pStyle.m5t(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.i5t(toSkDirection($this.f7a_1));
    var tmp1_safe_receiver = $this.y79_1.t6w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = $this.e7a_1;
      pStyle.o5t(new TextIndent($this$with.j5b(tmp1_safe_receiver.n6s_1), $this$with.j5b(tmp1_safe_receiver.o6s_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.n74(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.m7a_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).xe = function (a, b) {
    return this.m7a_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).s3 = function () {
    return this.m7a_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.i79();
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp$ret$1 = b.i79();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.c79(this$0.w79_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.y79_1, this$0.w79_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.d79_1, this$0.i7a_1.e78_1);
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_5().y5a_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().j66_1 : blendMode;
    this.w79_1 = fontFamilyResolver;
    this.x79_1 = text;
    this.y79_1 = textStyle;
    this.z79_1 = brushSize;
    this.a7a_1 = ellipsis;
    this.b7a_1 = maxLines;
    this.c7a_1 = spanStyles;
    this.d7a_1 = placeholders;
    this.e7a_1 = density;
    this.f7a_1 = textDirection;
    this.g7a_1 = drawStyle;
    this.h7a_1 = blendMode;
    this.i7a_1 = new ComputedStyle();
    var tmp = this;
    tmp.l7a_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).n7a = function (paragraph) {
    if (paragraph == null)
      return Unit_instance;
    prepareDefaultStyle(this);
    var foregroundPaint = this.i7a_1.x78();
    paragraph.p5s(0, this.x79_1.length, foregroundPaint);
  };
  protoOf(ParagraphBuilder_0).c2o = function () {
    prepareDefaultStyle(this);
    this.k7a_1 = makeOps(this, this.c7a_1, this.d7a_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.y79_1, this.i7a_1);
    if (!(this.b7a_1 === 2147483647)) {
      ps.k5t(this.b7a_1);
      ps.l5t(this.a7a_1);
    }
    var tmp = this.w79_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).y6y_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.v77();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + toString(platformFontLoader));
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).g();
    while (tmp1_iterator.h()) {
      var op = tmp1_iterator.i();
      if (addText && pos < op.i79()) {
        pb.v5s(toString(charSequenceSubSequence(this.x79_1, pos, op.i79())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.h79_1.i78_1;
        var tmp3_elvis_lhs = op.h79_1.f78_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_22().u6t_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.h79_1.g78_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_20().b6u_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.h79_1.h78_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_21().e6u_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.w79_1.i6z(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.u5s(makeSkTextStyle(this, op.h79_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.k79_1, op.l79_1, toSkPlaceholderAlignment(op.j79_1.u79_1.b6r_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.w5s(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.i79();
    }
    if (addText && pos < this.x79_1.length) {
      pb.v5s(toString(charSequenceSubSequence(this.x79_1, pos, this.x79_1.length)));
    }
    return pb.c2o();
  };
  protoOf(ParagraphBuilder_0).a77 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.l7a_1;
    defaultFont$factory();
    return this_0.w();
  };
  protoOf(ParagraphBuilder_0).z76 = function (paragraph) {
    var metrics = this.a77().l5i();
    var tmp0_safe_receiver = this.i7a_1.u78_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.emptyLineMetrics.<anonymous>' call
      tmp = tmp0_safe_receiver / this.i7a_1.e78_1;
    }
    var tmp1_elvis_lhs = tmp;
    var heightMultiplier = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    var ascent = metrics.f5j_1 * heightMultiplier;
    var descent = metrics.g5j_1 * heightMultiplier;
    var baseline = paragraph.f5s();
    var height = descent - ascent;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [new LineMetrics(0, 0, 0, 0, true, -ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var fontSize = orDefaultFontSize(_this__u8e3s4.o6r_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.u6r_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.u6r_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.u6r_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.b6t(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_13().c6r_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().g6r_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().h6r_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().i6r_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().d6r_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().e6r_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().f6r_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_30().f6q_1 ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_30().g6q_1 ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_30().h6q_1 ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_30().i6q_1 ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_30().j6q_1 ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_30().k6q_1 ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_27().t73_1 ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_27().r73_1 ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().s73_1 ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().u73_1 ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.u2_1) {
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
    var tmp0_safe_receiver = _this__u8e3s4.g6w();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.resolveFontFamily.<anonymous>' call
      var tmp0_elvis_lhs = _this__u8e3s4.d6w();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_22().u6t_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.e6w();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_20().b6u_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.f6w();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_21().e6u_1;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.i6z(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).w();
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
      return $b0.t79_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.i79();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.v79_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.i79();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.a77();
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
    if (onlyForeground && $this.v76_1.c7a_1.q()) {
      $this.x76_1 = true;
    } else {
      $this.w76_1 = null;
    }
  }
  function invalidateParagraph$default($this, onlyForeground, $super) {
    onlyForeground = onlyForeground === VOID ? false : onlyForeground;
    return invalidateParagraph($this, onlyForeground);
  }
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.u76_1 = text;
    this.v76_1 = new ParagraphBuilder_0(fontFamilyResolver, this.u76_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.w76_1 = null;
    this.x76_1 = false;
    var tmp = this;
    tmp.y76_1 = NaN;
  }
  protoOf(ParagraphLayouter).g77 = function () {
    return this.v76_1.a77();
  };
  protoOf(ParagraphLayouter).b77 = function () {
    return this.v76_1.y79_1;
  };
  protoOf(ParagraphLayouter).z76 = function (paragraph) {
    return this.v76_1.z76(paragraph);
  };
  protoOf(ParagraphLayouter).d77 = function (maxLines, ellipsis) {
    if (!(this.v76_1.b7a_1 === maxLines) || !(this.v76_1.a7a_1 === ellipsis)) {
      this.v76_1.b7a_1 = maxLines;
      this.v76_1.a7a_1 = ellipsis;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).h77 = function (color) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setColor.<anonymous>' call
      tmp = this.v76_1.y79_1.r60();
    }
    var actualColor = tmp;
    if (!equals(this.v76_1.y79_1.r60(), actualColor)) {
      this.v76_1.y79_1 = this.v76_1.y79_1.z6v(actualColor);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).l77 = function (brush, brushSize, alpha) {
    var actualSize = this.v76_1.z79_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!equals(this.v76_1.y79_1.y6s(), brush)) {
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
      tmp = !sameValueAs(this.v76_1.y79_1.v5w(), alpha);
    }
    if (tmp) {
      this.v76_1.y79_1 = this.v76_1.y79_1.b6w(brush, alpha);
      this.v76_1.z79_1 = brushSize;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).f77 = function (brushSize) {
    if (!equals(this.v76_1.z79_1, brushSize)) {
      this.v76_1.z79_1 = brushSize;
      var tmp;
      var tmp_0 = this.v76_1.y79_1.y6s();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = true;
      } else {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var this_0 = this.v76_1.c7a_1;
          var tmp_1;
          if (isInterface(this_0, Collection)) {
            tmp_1 = this_0.q();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var tmp0_iterator = this_0.g();
          while (tmp0_iterator.h()) {
            var element = tmp0_iterator.i();
            // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setBrushSize.<anonymous>' call
            var tmp_2 = element.o6m_1.y6s();
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
  protoOf(ParagraphLayouter).i77 = function (shadow, textDecoration) {
    if (!equals(this.v76_1.y79_1.o6w(), shadow) || !equals(this.v76_1.y79_1.n6w(), textDecoration)) {
      this.v76_1.y79_1 = this.v76_1.y79_1.z6v(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).j77 = function (drawStyle) {
    if (!equals(this.v76_1.g7a_1, drawStyle)) {
      this.v76_1.g7a_1 = drawStyle;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).k77 = function (blendMode) {
    if (!(this.v76_1.h7a_1 === blendMode)) {
      this.v76_1.h7a_1 = blendMode;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).e77 = function (width) {
    var paragraph = this.w76_1;
    var tmp;
    if (!(paragraph == null)) {
      var layoutRequired = false;
      if (this.x76_1) {
        this.v76_1.n7a(paragraph);
        this.x76_1 = false;
        paragraph.o5s();
        layoutRequired = true;
      }
      if (!sameValueAs(this.y76_1, width)) {
        this.y76_1 = width;
        layoutRequired = true;
      }
      if (layoutRequired) {
        paragraph.h5s(width);
      }
      tmp = paragraph;
    } else {
      paragraph = this.v76_1.c2o();
      paragraph.h5s(width);
      this.w76_1 = paragraph;
      this.x76_1 = false;
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
    return this_0.w();
  }
  var GenericFontFamiliesMapping$delegate;
  function FontLoadResult(typeface, aliases) {
    this.d79_1 = typeface;
    this.e79_1 = aliases;
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
    this.o7a_1 = new FontCache();
    this.p7a_1 = createFontFamilyResolver(this.o7a_1);
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.y77_1.p(key)) {
      $this.x77_1.c5v(typeface, key);
      $this.y77_1.e(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_0 = fontFamily.d73_1;
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        if (element instanceof SystemFont) {
          destination.e(element);
        }
      }
      var fonts = destination;
      var tmp_0;
      if (fonts.j() === fontFamily.d73_1.j()) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(fonts, 10));
        var tmp0_iterator_0 = fonts.g();
        while (tmp0_iterator_0.h()) {
          var item = tmp0_iterator_0.i();
          // Inline function 'androidx.compose.ui.text.platform.FontCache.ensureRegistered.<anonymous>' call
          var tmp$ret$2 = item.u7a_1;
          destination_0.e(tmp$ret$2);
        }
        tmp_0 = destination_0;
      } else {
        throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + toString(fontFamily));
      }
      tmp = tmp_0;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_1 = fontFamily.r7a_1;
        var typeface = tmp_1 instanceof SkiaBackedTypeface ? tmp_1 : THROW_CCE();
        ensureRegistered($this, typeface.s7a_1, typeface.t7a_1);
        tmp = listOf_0(typeface.t7a_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_16().i6u_1);
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
    this.w77_1 = FontCollection_init_$Create$();
    this.x77_1 = TypefaceFontProviderWithFallback_init_$Create$();
    this.y77_1 = HashSet_init_$Create$();
    this.z77_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.w77_1.a5r(new FontMgrWithFallback(this.x77_1));
    this.w77_1.z5q(this.x77_1);
  }
  protoOf(FontCache).a78 = function (font) {
    var tmp = font.q74();
    var typeface = this.z77_1.o74(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.q74());
    return new FontLoadResult(typeface, listOf_0(font.q74()));
  };
  protoOf(FontCache).u77 = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).h5k(fontWeight.p6s_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.w77_1.c5r(tmp$ret$0, style)), aliases);
  };
  function SystemFont() {
  }
  function SkiaBackedTypeface() {
  }
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().n2(_this__u8e3s4.b6y_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + _this__u8e3s4.b6y_1;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().u2_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_16().i6u_1.b6y_1, listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_16().j6u_1.b6y_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_16().k6u_1.b6y_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_16().l6u_1.b6y_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_16().i6u_1.b6y_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_16().j6u_1.b6y_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().k6u_1.b6y_1, listOf_0('Consolas')), to(Companion_getInstance_16().l6u_1.b6y_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_16().i6u_1.b6y_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_16().j6u_1.b6y_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_16().k6u_1.b6y_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_16().l6u_1.b6y_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_16().i6u_1.b6y_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_16().j6u_1.b6y_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_16().k6u_1.b6y_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_16().l6u_1.b6y_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_16().i6u_1.b6y_1, listOf_0('Arial')), to(Companion_getInstance_16().j6u_1.b6y_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().k6u_1.b6y_1, listOf_0('Consolas')), to(Companion_getInstance_16().l6u_1.b6y_1, listOf_0('Comic Sans MS'))]);
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
    blendMode = blendMode === VOID ? Companion_getInstance_8().m5y_1 : blendMode;
    canvas.r61();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.e6o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.f6o_1.b6p(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.u61(0.0, item.f6o_1.g5a());
      }
       while (inductionVariable <= last);
    canvas.s61();
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.k76_1, $this.q76_1, $this.l76_1, $this.m76_1, $this.n76_1, $this.o76_1, $this.p76_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.k76_1 = text;
    this.l76_1 = style;
    this.m76_1 = spanStyles;
    this.n76_1 = placeholders;
    this.o76_1 = density;
    this.p76_1 = fontFamilyResolver;
    this.q76_1 = resolveTextDirection_1(this.k76_1, this.l76_1.r6w(), this.l76_1.l6w());
    this.r76_1 = newLayouter(this);
    this.s76_1 = 0.0;
    this.t76_1 = 0.0;
    var tmp = ensureNotNull(this.r76_1);
    var para = tmp.e77(Infinity);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.d5s();
    tmp_0.s76_1 = Math.ceil(x);
    var tmp_1 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.e5s();
    tmp_1.t76_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).c77 = function () {
    var tmp0_elvis_lhs = this.r76_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.r76_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).d5s = function () {
    return this.s76_1;
  };
  protoOf(SkiaParagraphIntrinsics).e5s = function () {
    return this.t76_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_32().v6p_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_32().t6p_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_32().u6p_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_32().v6p_1 ? true : tmp1_subject === Companion_getInstance_32().y6p_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_32().w6p_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_32().x6p_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_37().l74_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_37().m74_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_instance_11.o2g() : locale).s6s_1)) {
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
    $this.a79_1 = null;
    $this.z78_1 = null;
    $this.b79_1 = null;
    $this.z5l(null);
  }
  function SkiaTextPaint$setBrush$lambda($brush, $size) {
    return function () {
      return $brush.c60($size);
    };
  }
  function SkiaTextPaint() {
    this.y78_1 = Paint();
    this.z78_1 = null;
    this.a79_1 = null;
    this.b79_1 = null;
  }
  protoOf(SkiaTextPaint).s60 = function (_set____db54di) {
    this.y78_1.s60(_set____db54di);
  };
  protoOf(SkiaTextPaint).v5w = function () {
    return this.y78_1.v5w();
  };
  protoOf(SkiaTextPaint).d6c = function (_set____db54di) {
    this.y78_1.d6c(_set____db54di);
  };
  protoOf(SkiaTextPaint).e6c = function () {
    return this.y78_1.e6c();
  };
  protoOf(SkiaTextPaint).q60 = function (_set____db54di) {
    this.y78_1.q60(_set____db54di);
  };
  protoOf(SkiaTextPaint).r60 = function () {
    return this.y78_1.r60();
  };
  protoOf(SkiaTextPaint).b6c = function (_set____db54di) {
    this.y78_1.b6c(_set____db54di);
  };
  protoOf(SkiaTextPaint).c6c = function () {
    return this.y78_1.c6c();
  };
  protoOf(SkiaTextPaint).f6c = function (_set____db54di) {
    this.y78_1.f6c(_set____db54di);
  };
  protoOf(SkiaTextPaint).g6c = function () {
    return this.y78_1.g6c();
  };
  protoOf(SkiaTextPaint).z6b = function (_set____db54di) {
    this.y78_1.z6b(_set____db54di);
  };
  protoOf(SkiaTextPaint).a6c = function () {
    return this.y78_1.a6c();
  };
  protoOf(SkiaTextPaint).z5l = function (_set____db54di) {
    this.y78_1.z5l(_set____db54di);
  };
  protoOf(SkiaTextPaint).a5m = function () {
    return this.y78_1.a5m();
  };
  protoOf(SkiaTextPaint).t6b = function (_set____db54di) {
    this.y78_1.t6b(_set____db54di);
  };
  protoOf(SkiaTextPaint).u6b = function () {
    return this.y78_1.u6b();
  };
  protoOf(SkiaTextPaint).x6b = function (_set____db54di) {
    this.y78_1.x6b(_set____db54di);
  };
  protoOf(SkiaTextPaint).y6b = function () {
    return this.y78_1.y6b();
  };
  protoOf(SkiaTextPaint).v6b = function (_set____db54di) {
    this.y78_1.v6b(_set____db54di);
  };
  protoOf(SkiaTextPaint).w6b = function () {
    return this.y78_1.w6b();
  };
  protoOf(SkiaTextPaint).u5l = function (_set____db54di) {
    this.y78_1.u5l(_set____db54di);
  };
  protoOf(SkiaTextPaint).v5l = function () {
    return this.y78_1.v5l();
  };
  protoOf(SkiaTextPaint).n6b = function (_set____db54di) {
    this.y78_1.n6b(_set____db54di);
  };
  protoOf(SkiaTextPaint).e6l = function () {
    return this.y78_1.e6l();
  };
  protoOf(SkiaTextPaint).l77 = function (brush, size, alpha) {
    if (brush == null) {
      clearShader(this);
    } else {
      if (brush instanceof SolidColor) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_0 = this.r60();
        if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          this.q60(modulate(brush.u60_1, alpha));
          clearShader(this);
        }
      } else {
        if (brush instanceof ShaderBrush) {
          var tmp;
          if (!equals(this.z78_1, brush)) {
            tmp = true;
          } else {
            var tmp_0 = this.b79_1;
            tmp = !equals(tmp_0 == null ? null : new Size_0(tmp_0), new Size_0(size));
          }
          if (tmp) {
            // Inline function 'androidx.compose.ui.geometry.isSpecified' call
            if (!_Size___get_packedValue__impl__7rlt1o(size).equals(new Long(2143289344, 2143289344))) {
              this.z78_1 = brush;
              this.b79_1 = size;
              var tmp_1 = this;
              tmp_1.a79_1 = derivedStateOf(SkiaTextPaint$setBrush$lambda(brush, size));
            }
          }
          var tmp1_safe_receiver = this.a79_1;
          this.z5l(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w());
          this.s60(isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
        }
      }
    }
  };
  protoOf(SkiaTextPaint).j77 = function (drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      this.n6b(Companion_getInstance_9().r66_1);
    } else {
      if (drawStyle instanceof Stroke) {
        this.n6b(Companion_getInstance_9().s66_1);
        this.u5l(drawStyle.o6b_1);
        this.v6b(drawStyle.p6b_1);
        this.x6b(drawStyle.r6b_1);
        this.t6b(drawStyle.q6b_1);
        this.z6b(drawStyle.s6b_1);
      }
    }
  };
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_27() {
    Companion_instance_28 = this;
    this.m6q_1 = _LineBreak___init__impl__o5i11q(1);
    this.n6q_1 = _LineBreak___init__impl__o5i11q(2);
    this.o6q_1 = _LineBreak___init__impl__o5i11q(3);
    this.p6q_1 = _LineBreak___init__impl__o5i11q(4);
  }
  var Companion_instance_28;
  function Companion_getInstance_40() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
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
    if (!($this === (other instanceof LineBreak ? other.v7a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_40();
    this.v7a_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.v7a_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.v7a_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.v7a_1, other);
  };
  function Companion_28() {
    Companion_instance_29 = this;
    this.x6q_1 = new TextMotion();
    this.y6q_1 = new TextMotion();
  }
  var Companion_instance_29;
  function Companion_getInstance_41() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function TextMotion() {
    Companion_getInstance_41();
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
    return get_rtlLanguagesSet().p(get_language(_this__u8e3s4));
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).o2g = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      var tmp$ret$0 = new Locale(toIntlLocale(item));
      destination.e(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  protoOf(createPlatformLocaleDelegate$1).j73 = function (languageTag) {
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
    switch (get_hostOs().u2_1) {
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
      var tmp1_elvis_lhs = Companion_getInstance_10().v5j_1.z5j(Companion_getInstance_11().v5h(font.w7a_1()));
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
        var tmp2_elvis_lhs = Companion_getInstance_10().v5j_1.a5k(font.p74(), get_skFontStyle(font));
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
    return FontStyle_init_$Create$(_this__u8e3s4.g5k().p6s_1, 5, _this__u8e3s4.u6x() === Companion_getInstance_20().c6u_1 ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).j6z = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).k6z = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).l6z = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).m6z = interceptFontSynthesis;
  protoOf(Unspecified).e6t = merge;
  protoOf(Unspecified).h6t = takeOrElse;
  protoOf(BrushStyle).e6t = merge;
  protoOf(BrushStyle).h6t = takeOrElse;
  protoOf(ColorStyle).e6t = merge;
  protoOf(ColorStyle).h6t = takeOrElse;
  protoOf(SkiaParagraph).b76 = paint$default;
  protoOf(SkiaParagraph).c76 = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).e6q = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultCacheSize = 8;
  Companion_instance_11 = new Companion_10();
  Unspecified_instance = new Unspecified();
  Companion_instance_21 = new Companion_20();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = createFontFamilyResolver_0;
  _.$_$.c = TextInputService;
  _.$_$.d = FontLoader;
  _.$_$.e = LineHeightStyle;
  _.$_$.f = TextAlign;
  _.$_$.g = TextOverflow;
  _.$_$.h = MultiParagraphIntrinsics;
  _.$_$.i = MultiParagraph;
  _.$_$.j = ParagraphIntrinsics_0;
  _.$_$.k = Paragraph;
  _.$_$.l = Paragraph_0;
  _.$_$.m = TextLayoutResult;
  _.$_$.n = TextRange_0;
  _.$_$.o = TextRange;
  _.$_$.p = resolveDefaults;
  _.$_$.q = AnnotatedString_init_$Create$;
  _.$_$.r = TextLayoutInput_init_$Create$;
  _.$_$.s = TextStyle_init_$Create$_1;
  _.$_$.t = _TextOverflow___init__impl__obguoe;
  _.$_$.u = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.v = TextOverflow__toString_impl_10s0c2;
  _.$_$.w = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.x = _TextRange___get_end__impl__gcdxpp;
  _.$_$.y = _TextRange___get_start__impl__ww4t90;
  _.$_$.z = Companion_getInstance_16;
  _.$_$.a1 = Companion_getInstance_22;
  _.$_$.b1 = Companion_instance_11;
  _.$_$.c1 = Companion_getInstance_28;
  _.$_$.d1 = Companion_getInstance_27;
  _.$_$.e1 = Companion_getInstance_30;
  _.$_$.f1 = Companion_getInstance_31;
  _.$_$.g1 = Companion_getInstance_36;
  _.$_$.h1 = Companion_getInstance_15;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-text.js.map
