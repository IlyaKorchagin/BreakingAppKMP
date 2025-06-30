(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-util.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './skiko-kjs.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./skiko-kjs.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['skiko-kjs'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.j;
  var _FloatFloatPair___init__impl__2q1dd3 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.y;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var isNaN_0 = kotlin_kotlin.$_$.nl;
  var fastCbrt = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x1;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var equals = kotlin_kotlin.$_$.od;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var hashCode = kotlin_kotlin.$_$.xd;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var Offset__toString_impl_4ffbou = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var get_isFinite = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var toString = kotlin_kotlin.$_$.jf;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var isFinite = kotlin_kotlin.$_$.ll;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var Long = kotlin_kotlin.$_$.hk;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s4;
  var floatFromBits = kotlin_kotlin.$_$.rd;
  var ulongToDouble = kotlin_kotlin.$_$.gm;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.t4;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var toLong = kotlin_kotlin.$_$.hf;
  var toRawBits = kotlin_kotlin.$_$.bm;
  var toShort = kotlin_kotlin.$_$.if;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var trimIndent = kotlin_kotlin.$_$.kj;
  var get_PI = kotlin_kotlin.$_$.kf;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Enum = kotlin_kotlin.$_$.bk;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var compareTo = kotlin_kotlin.$_$.ld;
  var withSign = kotlin_kotlin.$_$.tf;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var isInterface = kotlin_kotlin.$_$.oe;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var mutableIntObjectMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.p;
  var arrayCopy = kotlin_kotlin.$_$.h7;
  var coerceIn = kotlin_kotlin.$_$.bg;
  var contentEquals = kotlin_kotlin.$_$.u7;
  var contentHashCode = kotlin_kotlin.$_$.x7;
  var toBits = kotlin_kotlin.$_$.zl;
  var isNaN_1 = kotlin_kotlin.$_$.ol;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.h3;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var roundToInt = kotlin_kotlin.$_$.pf;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var IntOffset__hashCode_impl_w5rrxs = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var IntOffset__toString_impl_h46d8h = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.q3;
  var numberToChar = kotlin_kotlin.$_$.ze;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var ulongCompare = kotlin_kotlin.$_$.fm;
  var toDouble = kotlin_kotlin.$_$.zi;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.w4;
  var countLeadingZeroBits = kotlin_kotlin.$_$.fl;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.n5;
  var doubleFromBits = kotlin_kotlin.$_$.nd;
  var longArrayOf = kotlin_kotlin.$_$.ve;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.v4;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var toString_1 = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.o3;
  var emptyList = kotlin_kotlin.$_$.o8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.i4;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.r5;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.s5;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.n5;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.m5;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i3;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h3;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var coerceIn_0 = kotlin_kotlin.$_$.cg;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.t4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var PathDirection_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.k4;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.l5;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.q5;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.l4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.y4;
  var toFloatArray = kotlin_kotlin.$_$.nb;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.p5;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Point3 = kotlin_org_jetbrains_skiko_skiko.$_$.t5;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var ShadowUtils_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var Unit = kotlin_kotlin.$_$.al;
  var SnapshotMutationPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var PictureRecorder_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(BlendMode, 'BlendMode');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Brush, 'Brush');
  initMetadataForClass(ShaderBrush, 'ShaderBrush', VOID, Brush);
  initMetadataForClass(SolidColor, 'SolidColor', VOID, Brush);
  initMetadataForClass(LinearGradient, 'LinearGradient', VOID, ShaderBrush);
  initMetadataForClass(RadialGradient, 'RadialGradient', VOID, ShaderBrush);
  initMetadataForClass(SweepGradient, 'SweepGradient', VOID, ShaderBrush);
  function clipRect(rect, clipOp) {
    return this.v69(rect.t5g_1, rect.u5g_1, rect.v5g_1, rect.w5g_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().y69_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.u69(rect, clipOp);
      tmp = Unit_instance;
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().y69_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.v69(left, top, right, bottom, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.v69.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().y69_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.a6a(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.a6a.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.e6a(rect.t5g_1, rect.u5g_1, rect.v5g_1, rect.w5g_1, paint);
  }
  initMetadataForInterface(Canvas, 'Canvas');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ClipOp, 'ClipOp');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Color, 'Color');
  initMetadataForInterface(ColorProducer, 'ColorProducer');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ColorFilter, 'ColorFilter');
  initMetadataForClass(BlendModeColorFilter, 'BlendModeColorFilter', VOID, ColorFilter);
  initMetadataForCompanion(Companion_4);
  initMetadataForInterface(ImageBitmap, 'ImageBitmap');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ImageBitmapConfig, 'ImageBitmapConfig');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Matrix, 'Matrix');
  initMetadataForClass(Outline, 'Outline');
  initMetadataForClass(Rectangle, 'Rectangle', VOID, Outline);
  initMetadataForClass(Rounded, 'Rounded', VOID, Outline);
  initMetadataForClass(Generic, 'Generic', VOID, Outline);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  function quadraticTo(x1, y1, x2, y2) {
    this.x6e(x1, y1, x2, y2);
  }
  function relativeQuadraticTo(dx1, dy1, dx2, dy2) {
    this.z6e(dx1, dy1, dx2, dy2);
  }
  function addRect$default(rect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.d6f(rect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.d6f.call(this, rect, direction);
    }
    return tmp;
  }
  function addRoundRect$default(roundRect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.f6f(roundRect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.f6f.call(this, roundRect, direction);
    }
    return tmp;
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance().p5g_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.g6f(path, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.g6f.call(this, path, new Offset(offset));
    }
    return tmp;
  }
  function rewind() {
    this.v3h();
  }
  initMetadataForInterface(Path, 'Path');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PathFillType, 'PathFillType');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(RectangleShape$1);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Shadow, 'Shadow', Shadow);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(StrokeCap, 'StrokeCap');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(StrokeJoin, 'StrokeJoin');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(TileMode, 'TileMode');
  initMetadataForClass(Adaptation, 'Adaptation');
  initMetadataForClass(Adaptation$Companion$Bradford$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$VonKries$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$Ciecat02$1, VOID, VOID, Adaptation);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(ColorSpace, 'ColorSpace');
  initMetadataForInterface(DoubleFunction, 'DoubleFunction');
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForObject(ColorSpaces, 'ColorSpaces');
  initMetadataForClass(Connector, 'Connector');
  initMetadataForClass(Connector$Companion$identity$1, VOID, VOID, Connector);
  initMetadataForClass(RgbConnector, 'RgbConnector', VOID, Connector);
  initMetadataForCompanion(Companion_17);
  initMetadataForObject(Illuminant, 'Illuminant');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(Lab, 'Lab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Oklab, 'Oklab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(Rgb, 'Rgb', VOID, ColorSpace);
  initMetadataForClass(TransferParameters, 'TransferParameters');
  initMetadataForClass(WhitePoint, 'WhitePoint');
  initMetadataForClass(Xyz, 'Xyz', VOID, ColorSpace);
  initMetadataForClass(DrawParams, 'DrawParams', DrawParams);
  function set_canvas(_anonymous_parameter_0__qggqh8) {
  }
  function get_canvas() {
    return new EmptyCanvas();
  }
  function set_layoutDirection(_anonymous_parameter_0__qggqh8) {
  }
  function get_layoutDirection() {
    return LayoutDirection_Ltr_getInstance();
  }
  function set_density(_anonymous_parameter_0__qggqh8) {
  }
  function get_density() {
    return get_DefaultDensity();
  }
  function set_graphicsLayer(_anonymous_parameter_0__qggqh8) {
  }
  function get_graphicsLayer() {
    return null;
  }
  initMetadataForInterface(DrawContext, 'DrawContext');
  initMetadataForClass(CanvasDrawScope$drawContext$1, VOID, VOID, VOID, [DrawContext]);
  function get_center_0() {
    return get_center(this.v6k().z5g());
  }
  function get_size() {
    return this.v6k().z5g();
  }
  function drawLine$default(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    var tmp;
    if (strokeWidth === VOID) {
      Companion_getInstance_37();
      tmp = 0.0;
    } else {
      tmp = strokeWidth;
    }
    strokeWidth = tmp;
    cap = cap === VOID ? Companion_getInstance_37().u6l_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.w6k(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.w6k.call(this, new Color(color), new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().p5g_1 : topLeft;
    size = size === VOID ? offsetSize(this.z5g(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.o6e(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.o6e.call(this, brush, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().p5g_1 : topLeft;
    size = size === VOID ? offsetSize(this.z5g(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.l6e(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.l6e.call(this, new Color(color), new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.b6l(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().e5j_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.x5g(), image.y5g()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().e5j_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_36().i6e_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.a6l(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().p5g_1 : topLeft;
    size = size === VOID ? offsetSize(this.z5g(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().f5g_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.n6e(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.n6e.call(this, brush, new Offset(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(brush, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.z5g()) / 2.0 : radius;
    center = center === VOID ? this.l6l() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.d6l(brush, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.d6l.call(this, brush, radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default_0(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.z5g()) / 2.0 : radius;
    center = center === VOID ? this.l6l() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.f6l(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.f6l.call(this, new Color(color), radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().p5g_1 : topLeft;
    size = size === VOID ? offsetSize(this.z5g(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.h6l(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.h6l.call(this, new Color(color), startAngle, sweepAngle, useCenter, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.j6e(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.j6e.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.m6e(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.m6e.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(DrawScope, 'DrawScope', VOID, VOID, [Density_0]);
  initMetadataForClass(CanvasDrawScope, 'CanvasDrawScope', CanvasDrawScope, VOID, [DrawScope]);
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().y69_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.a6a(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.a6a.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  initMetadataForInterface(DrawTransform, 'DrawTransform');
  initMetadataForClass(asDrawTransform$1, VOID, VOID, VOID, [DrawTransform]);
  initMetadataForClass(DrawStyle, 'DrawStyle');
  initMetadataForCompanion(Companion_22);
  initMetadataForObject(Fill, 'Fill', VOID, DrawStyle);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(Stroke, 'Stroke', Stroke, DrawStyle);
  initMetadataForClass(EmptyCanvas, 'EmptyCanvas', EmptyCanvas, VOID, [Canvas]);
  initMetadataForClass(ChildLayerDependenciesTracker, 'ChildLayerDependenciesTracker', ChildLayerDependenciesTracker);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Painter, 'Painter');
  initMetadataForClass(BitmapPainter, 'BitmapPainter', VOID, Painter);
  initMetadataForClass(PathBuilder, 'PathBuilder', PathBuilder);
  initMetadataForClass(PathNode, 'PathNode');
  initMetadataForObject(Close, 'Close', VOID, PathNode);
  initMetadataForClass(RelativeMoveTo, 'RelativeMoveTo', VOID, PathNode);
  initMetadataForClass(MoveTo, 'MoveTo', VOID, PathNode);
  initMetadataForClass(RelativeLineTo, 'RelativeLineTo', VOID, PathNode);
  initMetadataForClass(LineTo, 'LineTo', VOID, PathNode);
  initMetadataForClass(RelativeHorizontalTo, 'RelativeHorizontalTo', VOID, PathNode);
  initMetadataForClass(HorizontalTo, 'HorizontalTo', VOID, PathNode);
  initMetadataForClass(RelativeVerticalTo, 'RelativeVerticalTo', VOID, PathNode);
  initMetadataForClass(VerticalTo, 'VerticalTo', VOID, PathNode);
  initMetadataForClass(RelativeCurveTo, 'RelativeCurveTo', VOID, PathNode);
  initMetadataForClass(CurveTo, 'CurveTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(ReflectiveCurveTo, 'ReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(RelativeQuadTo, 'RelativeQuadTo', VOID, PathNode);
  initMetadataForClass(QuadTo, 'QuadTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(ReflectiveQuadTo, 'ReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(RelativeArcTo, 'RelativeArcTo', VOID, PathNode);
  initMetadataForClass(ArcTo, 'ArcTo', VOID, PathNode);
  initMetadataForClass(PathParser, 'PathParser', PathParser);
  initMetadataForClass(SkiaBackedCanvas, 'SkiaBackedCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(SkiaBackedPaint, 'SkiaBackedPaint', SkiaBackedPaint);
  initMetadataForClass(SkiaBackedPath, 'SkiaBackedPath', SkiaBackedPath, VOID, [Path]);
  initMetadataForClass(SkiaBackedPathEffect, 'SkiaBackedPathEffect');
  initMetadataForClass(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', SkiaBackedPathMeasure);
  initMetadataForClass(RenderEffect, 'RenderEffect');
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(BlurEffect_0, 'BlurEffect', VOID, RenderEffect);
  initMetadataForClass(SkiaGraphicsContext, 'SkiaGraphicsContext', SkiaGraphicsContext);
  initMetadataForClass(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', VOID, VOID, [ImageBitmap]);
  initMetadataForClass(GraphicsLayer$drawState$1, VOID, VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(GraphicsLayer, 'GraphicsLayer', VOID, VOID, VOID, [0]);
  //endregion
  function computeCubicVerticalBounds(p0y, p1y, p2y, p3y, roots, index) {
    index = index === VOID ? 0 : index;
    var d0 = 3.0 * (p1y - p0y);
    var d1 = 3.0 * (p2y - p1y);
    var d2 = 3.0 * (p3y - p2y);
    var count = findQuadraticRoots(d0, d1, d2, roots, index);
    var dd0 = 2.0 * (d1 - d0);
    var dd1 = 2.0 * (d2 - d1);
    var tmp = count;
    // Inline function 'androidx.compose.ui.graphics.findLineRoot' call
    var index_0 = index + count | 0;
    count = tmp + writeValidRootInUnitRange$accessor$jgd96e(-dd0 / (dd1 - dd0), roots, index_0) | 0;
    // Inline function 'kotlin.math.min' call
    var minY = Math.min(p0y, p3y);
    // Inline function 'kotlin.math.max' call
    var maxY = Math.max(p0y, p3y);
    var inductionVariable = 0;
    var last = count;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = roots[i];
        var y = evaluateCubic_0(p0y, p1y, p2y, p3y, t);
        // Inline function 'kotlin.math.min' call
        var a = minY;
        minY = Math.min(a, y);
        // Inline function 'kotlin.math.max' call
        var a_0 = maxY;
        maxY = Math.max(a_0, y);
      }
       while (inductionVariable < last);
    return _FloatFloatPair___init__impl__2q1dd3(minY, maxY);
  }
  function findFirstCubicRoot(p0, p1, p2, p3) {
    var a = 3.0 * (p0 - 2.0 * p1 + p2);
    var b = 3.0 * (p1 - p0);
    var c = p0;
    var d = -p0 + 3.0 * (p1 - p2) + p3;
    // Inline function 'androidx.compose.ui.graphics.closeTo' call
    // Inline function 'kotlin.math.abs' call
    var x = d - 0.0;
    if (Math.abs(x) < _get_Epsilon_$accessor$jgd96e_9t7vfj()) {
      // Inline function 'androidx.compose.ui.graphics.closeTo' call
      // Inline function 'kotlin.math.abs' call
      var x_0 = a - 0.0;
      if (Math.abs(x_0) < _get_Epsilon_$accessor$jgd96e_9t7vfj()) {
        // Inline function 'androidx.compose.ui.graphics.closeTo' call
        // Inline function 'kotlin.math.abs' call
        var x_1 = b - 0.0;
        if (Math.abs(x_1) < _get_Epsilon_$accessor$jgd96e_9t7vfj()) {
          return NaN;
        }
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r = -c / b;
        var tmp;
        if (r < 0.0) {
          var tmp_0;
          if (r >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
            tmp_0 = 0.0;
          } else {
            tmp_0 = NaN;
          }
          tmp = tmp_0;
        } else if (r > 1.0) {
          var tmp_1;
          if (r <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
            tmp_1 = 1.0;
          } else {
            tmp_1 = NaN;
          }
          tmp = tmp_1;
        } else {
          tmp = r;
        }
        return tmp;
      } else {
        // Inline function 'kotlin.math.sqrt' call
        var x_2 = b * b - 4.0 * a * c;
        var q = Math.sqrt(x_2);
        var a2 = 2.0 * a;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_0 = (q - b) / a2;
        var tmp_2;
        if (r_0 < 0.0) {
          var tmp_3;
          if (r_0 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
            tmp_3 = 0.0;
          } else {
            tmp_3 = NaN;
          }
          tmp_2 = tmp_3;
        } else if (r_0 > 1.0) {
          var tmp_4;
          if (r_0 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
            tmp_4 = 1.0;
          } else {
            tmp_4 = NaN;
          }
          tmp_2 = tmp_4;
        } else {
          tmp_2 = r_0;
        }
        var root = tmp_2;
        if (!isNaN_0(root))
          return root;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_1 = (-b - q) / a2;
        var tmp_5;
        if (r_1 < 0.0) {
          var tmp_6;
          if (r_1 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
            tmp_6 = 0.0;
          } else {
            tmp_6 = NaN;
          }
          tmp_5 = tmp_6;
        } else if (r_1 > 1.0) {
          var tmp_7;
          if (r_1 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
            tmp_7 = 1.0;
          } else {
            tmp_7 = NaN;
          }
          tmp_5 = tmp_7;
        } else {
          tmp_5 = r_1;
        }
        return tmp_5;
      }
    }
    a = a / d;
    b = b / d;
    c = c / d;
    var o3 = (3.0 * b - a * a) / 9.0;
    var q2 = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
    var discriminant = q2 * q2 + o3 * o3 * o3;
    var a3 = a / 3.0;
    if (discriminant < 0.0) {
      var mp33 = -(o3 * o3 * o3);
      // Inline function 'kotlin.math.sqrt' call
      var r_2 = Math.sqrt(mp33);
      var t = -q2 / r_2;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = t < -1.0 ? -1.0 : t;
      var cosPhi = this_0 > 1.0 ? 1.0 : this_0;
      // Inline function 'kotlin.math.acos' call
      var phi = Math.acos(cosPhi);
      var t1 = 2.0 * fastCbrt(r_2);
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      // Inline function 'kotlin.math.cos' call
      var x_3 = phi / 3.0;
      var r_3 = t1 * Math.cos(x_3) - a3;
      var tmp_8;
      if (r_3 < 0.0) {
        var tmp_9;
        if (r_3 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_9 = 0.0;
        } else {
          tmp_9 = NaN;
        }
        tmp_8 = tmp_9;
      } else if (r_3 > 1.0) {
        var tmp_10;
        if (r_3 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_10 = 1.0;
        } else {
          tmp_10 = NaN;
        }
        tmp_8 = tmp_10;
      } else {
        tmp_8 = r_3;
      }
      var root_0 = tmp_8;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      // Inline function 'kotlin.math.cos' call
      var x_4 = (phi + 6.283185307179586) / 3.0;
      var r_4 = t1 * Math.cos(x_4) - a3;
      var tmp_11;
      if (r_4 < 0.0) {
        var tmp_12;
        if (r_4 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_12 = 0.0;
        } else {
          tmp_12 = NaN;
        }
        tmp_11 = tmp_12;
      } else if (r_4 > 1.0) {
        var tmp_13;
        if (r_4 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_13 = 1.0;
        } else {
          tmp_13 = NaN;
        }
        tmp_11 = tmp_13;
      } else {
        tmp_11 = r_4;
      }
      root_0 = tmp_11;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      // Inline function 'kotlin.math.cos' call
      var x_5 = (phi + 2.0 * 6.283185307179586) / 3.0;
      var r_5 = t1 * Math.cos(x_5) - a3;
      var tmp_14;
      if (r_5 < 0.0) {
        var tmp_15;
        if (r_5 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_15 = 0.0;
        } else {
          tmp_15 = NaN;
        }
        tmp_14 = tmp_15;
      } else if (r_5 > 1.0) {
        var tmp_16;
        if (r_5 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_16 = 1.0;
        } else {
          tmp_16 = NaN;
        }
        tmp_14 = tmp_16;
      } else {
        tmp_14 = r_5;
      }
      return tmp_14;
    } else if (discriminant === 0.0) {
      var u1 = -fastCbrt(q2);
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_6 = 2.0 * u1 - a3;
      var tmp_17;
      if (r_6 < 0.0) {
        var tmp_18;
        if (r_6 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_18 = 0.0;
        } else {
          tmp_18 = NaN;
        }
        tmp_17 = tmp_18;
      } else if (r_6 > 1.0) {
        var tmp_19;
        if (r_6 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_19 = 1.0;
        } else {
          tmp_19 = NaN;
        }
        tmp_17 = tmp_19;
      } else {
        tmp_17 = r_6;
      }
      var root_1 = tmp_17;
      if (!isNaN_0(root_1))
        return root_1;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_7 = -u1 - a3;
      var tmp_20;
      if (r_7 < 0.0) {
        var tmp_21;
        if (r_7 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_21 = 0.0;
        } else {
          tmp_21 = NaN;
        }
        tmp_20 = tmp_21;
      } else if (r_7 > 1.0) {
        var tmp_22;
        if (r_7 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
          tmp_22 = 1.0;
        } else {
          tmp_22 = NaN;
        }
        tmp_20 = tmp_22;
      } else {
        tmp_20 = r_7;
      }
      return tmp_20;
    }
    // Inline function 'kotlin.math.sqrt' call
    var sd = Math.sqrt(discriminant);
    var u1_0 = fastCbrt(-q2 + sd);
    var v1 = fastCbrt(q2 + sd);
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var r_8 = u1_0 - v1 - a3;
    var tmp_23;
    if (r_8 < 0.0) {
      var tmp_24;
      if (r_8 >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
        tmp_24 = 0.0;
      } else {
        tmp_24 = NaN;
      }
      tmp_23 = tmp_24;
    } else if (r_8 > 1.0) {
      var tmp_25;
      if (r_8 <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
        tmp_25 = 1.0;
      } else {
        tmp_25 = NaN;
      }
      tmp_23 = tmp_25;
    } else {
      tmp_23 = r_8;
    }
    return tmp_23;
  }
  function evaluateCubic(p1, p2, t) {
    var a = 1.0 / 3.0 + (p1 - p2);
    var b = p2 - 2.0 * p1;
    var c = p1;
    return 3.0 * ((a * t + b) * t + c) * t;
  }
  function findQuadraticRoots(p0, p1, p2, roots, index) {
    index = index === VOID ? 0 : index;
    var a = p0;
    var b = p1;
    var c = p2;
    var d = a - 2.0 * b + c;
    var rootCount = 0;
    if (!(d === 0.0)) {
      // Inline function 'kotlin.math.sqrt' call
      var x = b * b - a * c;
      var v1 = -Math.sqrt(x);
      var v2 = -a + b;
      rootCount = rootCount + writeValidRootInUnitRange$accessor$jgd96e(-(v1 + v2) / d, roots, index) | 0;
      rootCount = rootCount + writeValidRootInUnitRange$accessor$jgd96e((v1 - v2) / d, roots, index + rootCount | 0) | 0;
      if (rootCount > 1) {
        var s = roots[index];
        var t = roots[index + 1 | 0];
        if (s > t) {
          roots[index] = t;
          roots[index + 1 | 0] = s;
        } else if (s === t) {
          rootCount = rootCount - 1 | 0;
        }
      }
    } else if (!(b === c)) {
      rootCount = rootCount + writeValidRootInUnitRange$accessor$jgd96e((2.0 * b - c) / (2.0 * b - 2.0 * c), roots, index) | 0;
    }
    return rootCount;
  }
  function evaluateCubic_0(p0, p1, p2, p3, t) {
    var a = p3 + 3.0 * (p1 - p2) - p0;
    var b = 3.0 * (p2 - 2.0 * p1 + p0);
    var c = 3.0 * (p1 - p0);
    return ((a * t + b) * t + c) * t + p0;
  }
  function writeValidRootInUnitRange(r, roots, index) {
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var tmp;
    if (r < 0.0) {
      var tmp_0;
      if (r >= -_get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
        tmp_0 = 0.0;
      } else {
        tmp_0 = NaN;
      }
      tmp = tmp_0;
    } else if (r > 1.0) {
      var tmp_1;
      if (r <= 1.0 + _get_FloatEpsilon_$accessor$jgd96e_fx7xxz()) {
        tmp_1 = 1.0;
      } else {
        tmp_1 = NaN;
      }
      tmp = tmp_1;
    } else {
      tmp = r;
    }
    var v = tmp;
    roots[index] = v;
    return isNaN_0(v) ? 0 : 1;
  }
  function writeValidRootInUnitRange$accessor$jgd96e(r, roots, index) {
    return writeValidRootInUnitRange(r, roots, index);
  }
  function _get_Epsilon_$accessor$jgd96e_9t7vfj() {
    return 1.0E-7;
  }
  function _get_FloatEpsilon_$accessor$jgd96e_fx7xxz() {
    return 8.34465E-7;
  }
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.c66_1 = _BlendMode___init__impl__q6jalh(0);
    this.d66_1 = _BlendMode___init__impl__q6jalh(1);
    this.e66_1 = _BlendMode___init__impl__q6jalh(2);
    this.f66_1 = _BlendMode___init__impl__q6jalh(3);
    this.g66_1 = _BlendMode___init__impl__q6jalh(4);
    this.h66_1 = _BlendMode___init__impl__q6jalh(5);
    this.i66_1 = _BlendMode___init__impl__q6jalh(6);
    this.j66_1 = _BlendMode___init__impl__q6jalh(7);
    this.k66_1 = _BlendMode___init__impl__q6jalh(8);
    this.l66_1 = _BlendMode___init__impl__q6jalh(9);
    this.m66_1 = _BlendMode___init__impl__q6jalh(10);
    this.n66_1 = _BlendMode___init__impl__q6jalh(11);
    this.o66_1 = _BlendMode___init__impl__q6jalh(12);
    this.p66_1 = _BlendMode___init__impl__q6jalh(13);
    this.q66_1 = _BlendMode___init__impl__q6jalh(14);
    this.r66_1 = _BlendMode___init__impl__q6jalh(15);
    this.s66_1 = _BlendMode___init__impl__q6jalh(16);
    this.t66_1 = _BlendMode___init__impl__q6jalh(17);
    this.u66_1 = _BlendMode___init__impl__q6jalh(18);
    this.v66_1 = _BlendMode___init__impl__q6jalh(19);
    this.w66_1 = _BlendMode___init__impl__q6jalh(20);
    this.x66_1 = _BlendMode___init__impl__q6jalh(21);
    this.y66_1 = _BlendMode___init__impl__q6jalh(22);
    this.z66_1 = _BlendMode___init__impl__q6jalh(23);
    this.a67_1 = _BlendMode___init__impl__q6jalh(24);
    this.b67_1 = _BlendMode___init__impl__q6jalh(25);
    this.c67_1 = _BlendMode___init__impl__q6jalh(26);
    this.d67_1 = _BlendMode___init__impl__q6jalh(27);
    this.e67_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance_1;
  function Companion_getInstance_13() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_13().c66_1 ? 'Clear' : $this === Companion_getInstance_13().d66_1 ? 'Src' : $this === Companion_getInstance_13().e66_1 ? 'Dst' : $this === Companion_getInstance_13().f66_1 ? 'SrcOver' : $this === Companion_getInstance_13().g66_1 ? 'DstOver' : $this === Companion_getInstance_13().h66_1 ? 'SrcIn' : $this === Companion_getInstance_13().i66_1 ? 'DstIn' : $this === Companion_getInstance_13().j66_1 ? 'SrcOut' : $this === Companion_getInstance_13().k66_1 ? 'DstOut' : $this === Companion_getInstance_13().l66_1 ? 'SrcAtop' : $this === Companion_getInstance_13().m66_1 ? 'DstAtop' : $this === Companion_getInstance_13().n66_1 ? 'Xor' : $this === Companion_getInstance_13().o66_1 ? 'Plus' : $this === Companion_getInstance_13().p66_1 ? 'Modulate' : $this === Companion_getInstance_13().q66_1 ? 'Screen' : $this === Companion_getInstance_13().r66_1 ? 'Overlay' : $this === Companion_getInstance_13().s66_1 ? 'Darken' : $this === Companion_getInstance_13().t66_1 ? 'Lighten' : $this === Companion_getInstance_13().u66_1 ? 'ColorDodge' : $this === Companion_getInstance_13().v66_1 ? 'ColorBurn' : $this === Companion_getInstance_13().w66_1 ? 'HardLight' : $this === Companion_getInstance_13().x66_1 ? 'Softlight' : $this === Companion_getInstance_13().y66_1 ? 'Difference' : $this === Companion_getInstance_13().z66_1 ? 'Exclusion' : $this === Companion_getInstance_13().a67_1 ? 'Multiply' : $this === Companion_getInstance_13().b67_1 ? 'Hue' : $this === Companion_getInstance_13().c67_1 ? 'Saturation' : $this === Companion_getInstance_13().d67_1 ? 'Color' : $this === Companion_getInstance_13().e67_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.f67_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_13();
    this.f67_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.f67_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.f67_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.f67_1, other);
  };
  function Companion_0() {
  }
  protoOf(Companion_0).g67 = function (colorStops, start, end, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].kb_1;
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].jb_1;
        list_0.e(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).h67 = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  protoOf(Companion_0).i67 = function (colors, start, end, tileMode, $super) {
    start = start === VOID ? Companion_getInstance().p5g_1 : start;
    end = end === VOID ? Companion_getInstance().q5g_1 : end;
    tileMode = tileMode === VOID ? Companion_getInstance_27().j67_1 : tileMode;
    return $super === VOID ? this.h67(colors, start, end, tileMode) : $super.h67.call(this, colors, new Offset(start), new Offset(end), new TileMode(tileMode));
  };
  protoOf(Companion_0).n67 = function (colors, startX, endX, tileMode) {
    return this.h67(colors, Offset_0(startX, 0.0), Offset_0(endX, 0.0), tileMode);
  };
  protoOf(Companion_0).o67 = function (colors, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    var tmp;
    if (endX === VOID) {
      tmp = Infinity;
    } else {
      tmp = endX;
    }
    endX = tmp;
    tileMode = tileMode === VOID ? Companion_getInstance_27().j67_1 : tileMode;
    return $super === VOID ? this.n67(colors, startX, endX, tileMode) : $super.n67.call(this, colors, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).p67 = function (colors, startY, endY, tileMode) {
    return this.h67(colors, Offset_0(0.0, startY), Offset_0(0.0, endY), tileMode);
  };
  protoOf(Companion_0).q67 = function (colors, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    var tmp;
    if (endY === VOID) {
      tmp = Infinity;
    } else {
      tmp = endY;
    }
    endY = tmp;
    tileMode = tileMode === VOID ? Companion_getInstance_27().j67_1 : tileMode;
    return $super === VOID ? this.p67(colors, startY, endY, tileMode) : $super.p67.call(this, colors, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).r67 = function (colorStops, center, radius, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].kb_1;
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].jb_1;
        list_0.e(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).s67 = function (colorStops, center) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].kb_1;
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].jb_1;
        list_0.e(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new SweepGradient(center, list, list_0);
  };
  var Companion_instance_2;
  function Companion_getInstance_14() {
    return Companion_instance_2;
  }
  function Brush() {
    this.t67_1 = Companion_getInstance_0().t5h_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.w67_1 = null;
    this.x67_1 = Companion_getInstance_0().t5h_1;
  }
  protoOf(ShaderBrush).u67 = function (size, p, alpha) {
    var shader = this.w67_1;
    if (shader == null || !equals(this.x67_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        shader = null;
        this.w67_1 = null;
        this.x67_1 = Companion_getInstance_0().t5h_1;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = this.y67(size);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
        this.w67_1 = this_0;
        shader = this_0;
        this.x67_1 = size;
      }
    }
    if (!equals(p.n68(), Companion_getInstance_16().z67_1)) {
      p.m68(Companion_getInstance_16().z67_1);
    }
    if (!equals(p.j5t(), shader)) {
      p.i5t(shader);
    }
    if (!(p.o64() === alpha)) {
      p.o68(alpha);
    }
  };
  function SolidColor(value) {
    Brush.call(this);
    this.q68_1 = value;
  }
  protoOf(SolidColor).u67 = function (size, p, alpha) {
    p.o68(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      tmp = Color__copy$default_impl_ectz3s(this.q68_1, _Color___get_alpha__impl__wcfyv1(this.q68_1) * alpha);
    } else {
      tmp = this.q68_1;
    }
    p.m68(tmp);
    if (!(p.j5t() == null)) {
      p.i5t(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.q68_1, other.q68_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.q68_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + Color__toString_impl_hpzmaq(this.q68_1) + ')';
  };
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_27().j67_1 : tileMode;
    ShaderBrush.call(this);
    this.u68_1 = colors;
    this.v68_1 = stops;
    this.w68_1 = start;
    this.x68_1 = end;
    this.y68_1 = tileMode;
  }
  protoOf(LinearGradient).y67 = function (size) {
    var tmp;
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.w68_1);
    if (tmp_0 === Infinity) {
      tmp = _Size___get_width__impl__58y75t(size);
    } else {
      tmp = _Offset___get_x__impl__xvi35n(this.w68_1);
    }
    var startX = tmp;
    var tmp_1;
    var tmp_2 = _Offset___get_y__impl__8bzhra(this.w68_1);
    if (tmp_2 === Infinity) {
      tmp_1 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_1 = _Offset___get_y__impl__8bzhra(this.w68_1);
    }
    var startY = tmp_1;
    var tmp_3;
    var tmp_4 = _Offset___get_x__impl__xvi35n(this.x68_1);
    if (tmp_4 === Infinity) {
      tmp_3 = _Size___get_width__impl__58y75t(size);
    } else {
      tmp_3 = _Offset___get_x__impl__xvi35n(this.x68_1);
    }
    var endX = tmp_3;
    var tmp_5;
    var tmp_6 = _Offset___get_y__impl__8bzhra(this.x68_1);
    if (tmp_6 === Infinity) {
      tmp_5 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_5 = _Offset___get_y__impl__8bzhra(this.x68_1);
    }
    var endY = tmp_5;
    var tmp0_colors = this.u68_1;
    var tmp1_colorStops = this.v68_1;
    var tmp2_from = Offset_0(startX, startY);
    var tmp3_to = Offset_0(endX, endY);
    var tmp4_tileMode = this.y68_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.u68_1, other.u68_1))
      return false;
    if (!equals(this.v68_1, other.v68_1))
      return false;
    if (!equals(this.w68_1, other.w68_1))
      return false;
    if (!equals(this.x68_1, other.x68_1))
      return false;
    if (!(this.y68_1 === other.y68_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.u68_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.v68_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.w68_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.x68_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.y68_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var startValue = get_isFinite(this.w68_1) ? 'start=' + Offset__toString_impl_4ffbou(this.w68_1) + ', ' : '';
    var endValue = get_isFinite(this.x68_1) ? 'end=' + Offset__toString_impl_4ffbou(this.x68_1) + ', ' : '';
    return 'LinearGradient(colors=' + toString(this.u68_1) + ', ' + ('stops=' + toString_0(this.v68_1) + ', ') + startValue + endValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.y68_1) + ')');
  };
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_27().j67_1 : tileMode;
    ShaderBrush.call(this);
    this.c69_1 = colors;
    this.d69_1 = stops;
    this.e69_1 = center;
    this.f69_1 = radius;
    this.g69_1 = tileMode;
  }
  protoOf(RadialGradient).y67 = function (size) {
    var centerX;
    var centerY;
    if (get_isUnspecified(this.e69_1)) {
      var drawCenter = get_center(size);
      centerX = _Offset___get_x__impl__xvi35n(drawCenter);
      centerY = _Offset___get_y__impl__8bzhra(drawCenter);
    } else {
      var tmp;
      var tmp_0 = _Offset___get_x__impl__xvi35n(this.e69_1);
      if (tmp_0 === Infinity) {
        tmp = _Size___get_width__impl__58y75t(size);
      } else {
        tmp = _Offset___get_x__impl__xvi35n(this.e69_1);
      }
      centerX = tmp;
      var tmp_1;
      var tmp_2 = _Offset___get_y__impl__8bzhra(this.e69_1);
      if (tmp_2 === Infinity) {
        tmp_1 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_1 = _Offset___get_y__impl__8bzhra(this.e69_1);
      }
      centerY = tmp_1;
    }
    var tmp0_colors = this.c69_1;
    var tmp1_colorStops = this.d69_1;
    var tmp2_center = Offset_0(centerX, centerY);
    var tmp_3;
    if (this.f69_1 === Infinity) {
      tmp_3 = _Size___get_minDimension__impl__4iso0r(size) / 2;
    } else {
      tmp_3 = this.f69_1;
    }
    var tmp3_radius = tmp_3;
    var tmp4_tileMode = this.g69_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.c69_1, other.c69_1))
      return false;
    if (!equals(this.d69_1, other.d69_1))
      return false;
    if (!equals(this.e69_1, other.e69_1))
      return false;
    if (!(this.f69_1 === other.f69_1))
      return false;
    if (!(this.g69_1 === other.g69_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.c69_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.d69_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.e69_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.f69_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.g69_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var centerValue = get_isSpecified(this.e69_1) ? 'center=' + Offset__toString_impl_4ffbou(this.e69_1) + ', ' : '';
    var radiusValue = isFinite(this.f69_1) ? 'radius=' + this.f69_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + toString(this.c69_1) + ', ') + ('stops=' + toString_0(this.d69_1) + ', ') + centerValue + radiusValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.g69_1) + ')');
  };
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.k69_1 = center;
    this.l69_1 = colors;
    this.m69_1 = stops;
  }
  protoOf(SweepGradient).y67 = function (size) {
    var tmp;
    if (get_isUnspecified(this.k69_1)) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      var tmp_1 = _Offset___get_x__impl__xvi35n(this.k69_1);
      if (tmp_1 === Infinity) {
        tmp_0 = _Size___get_width__impl__58y75t(size);
      } else {
        tmp_0 = _Offset___get_x__impl__xvi35n(this.k69_1);
      }
      var tmp_2 = tmp_0;
      var tmp_3;
      var tmp_4 = _Offset___get_y__impl__8bzhra(this.k69_1);
      if (tmp_4 === Infinity) {
        tmp_3 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(this.k69_1);
      }
      tmp = Offset_0(tmp_2, tmp_3);
    }
    return SweepGradientShader(tmp, this.l69_1, this.m69_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.k69_1, other.k69_1))
      return false;
    if (!equals(this.l69_1, other.l69_1))
      return false;
    if (!equals(this.m69_1, other.m69_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.k69_1);
    result = imul(31, result) + hashCode(this.l69_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.m69_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var centerValue = get_isSpecified(this.k69_1) ? 'center=' + Offset__toString_impl_4ffbou(this.k69_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + toString(this.l69_1) + ', stops=' + toString_0(this.m69_1) + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.x69_1 = _ClipOp___init__impl__pqwwy8(0);
    this.y69_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_3;
  function Companion_getInstance_15() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_15().x69_1 ? 'Difference' : $this === Companion_getInstance_15().y69_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.k6a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_15();
    this.k6a_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.k6a_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.k6a_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.k6a_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var this_0 = ColorSpaces_getInstance();
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.and' call
    var this_1 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).r3(_ULong___get_data__impl__fggpzb(other)));
    var id = _ULong___get_data__impl__fggpzb(this_2).m1();
    return this_0.h6b_1[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var connector = connect(_Color___get_colorSpace__impl__jqqozk($this), colorSpace);
    return connector.o6b($this);
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).r3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).q3(48));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).r3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        // Inline function 'kotlin.ULong.toShort' call
        // Inline function 'kotlin.ULong.and' call
        // Inline function 'kotlin.ULong.shr' call
        var this_4 = _Color___get_value__impl__1pls5m($this);
        var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).q3(48));
        var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
        var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).r3(_ULong___get_data__impl__fggpzb(other_1)));
        var bits = _ULong___get_data__impl__fggpzb(this_6).u3() & 65535;
        var s = bits & _get_Fp16SignMask_$accessor$nir07s_uyx27z();
        var e = (bits >>> _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | 0) & _get_Fp16ExponentMask_$accessor$nir07s_tfqh1r();
        var m = bits & _get_Fp16SignificandMask_$accessor$nir07s_vgv0yn();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = _get_Fp32DenormalMagic_$accessor$nir07s_vsdkf1() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - _get_Fp32DenormalFloat_$accessor$nir07s_jwvuz8();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | _get_Fp32QNaNMask_$accessor$nir07s_czh4rq();
            }
          } else {
            outE = (e - _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0) + _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0;
          }
        }
        var out = s << 16 | outE << _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).r3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).q3(40));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).r3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        // Inline function 'kotlin.ULong.toShort' call
        // Inline function 'kotlin.ULong.and' call
        // Inline function 'kotlin.ULong.shr' call
        var this_4 = _Color___get_value__impl__1pls5m($this);
        var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).q3(32));
        var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
        var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).r3(_ULong___get_data__impl__fggpzb(other_1)));
        var bits = _ULong___get_data__impl__fggpzb(this_6).u3() & 65535;
        var s = bits & _get_Fp16SignMask_$accessor$nir07s_uyx27z();
        var e = (bits >>> _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | 0) & _get_Fp16ExponentMask_$accessor$nir07s_tfqh1r();
        var m = bits & _get_Fp16SignificandMask_$accessor$nir07s_vgv0yn();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = _get_Fp32DenormalMagic_$accessor$nir07s_vsdkf1() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - _get_Fp32DenormalFloat_$accessor$nir07s_jwvuz8();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | _get_Fp32QNaNMask_$accessor$nir07s_czh4rq();
            }
          } else {
            outE = (e - _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0) + _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0;
          }
        }
        var out = s << 16 | outE << _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).r3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).q3(32));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).r3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        // Inline function 'kotlin.ULong.toShort' call
        // Inline function 'kotlin.ULong.and' call
        // Inline function 'kotlin.ULong.shr' call
        var this_4 = _Color___get_value__impl__1pls5m($this);
        var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).q3(16));
        var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
        var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).r3(_ULong___get_data__impl__fggpzb(other_1)));
        var bits = _ULong___get_data__impl__fggpzb(this_6).u3() & 65535;
        var s = bits & _get_Fp16SignMask_$accessor$nir07s_uyx27z();
        var e = (bits >>> _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | 0) & _get_Fp16ExponentMask_$accessor$nir07s_tfqh1r();
        var m = bits & _get_Fp16SignificandMask_$accessor$nir07s_vgv0yn();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = _get_Fp32DenormalMagic_$accessor$nir07s_vsdkf1() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - _get_Fp32DenormalFloat_$accessor$nir07s_jwvuz8();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | _get_Fp32QNaNMask_$accessor$nir07s_czh4rq();
            }
          } else {
            outE = (e - _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0) + _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0;
          }
        }
        var out = s << 16 | outE << _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).r3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).q3(56));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).r3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).q3(6));
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).r3(_ULong___get_data__impl__fggpzb(other_1)));
      // Inline function 'kotlin.ulongToFloat' call
      var value_0 = _ULong___get_data__impl__fggpzb(this_6);
      tmp = ulongToDouble(value_0) / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).q6b.call(new Color($this), alpha, red, green, blue).p6b_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).r6b_1 + ')';
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.z67_1 = Color_1(new Long(-16777216, 0));
    this.a68_1 = Color_1(new Long(-12303292, 0));
    this.b68_1 = Color_1(new Long(-7829368, 0));
    this.c68_1 = Color_1(new Long(-3355444, 0));
    this.d68_1 = Color_1(new Long(-1, 0));
    this.e68_1 = Color_1(new Long(-65536, 0));
    this.f68_1 = Color_1(new Long(-16711936, 0));
    this.g68_1 = Color_1(new Long(-16776961, 0));
    this.h68_1 = Color_1(new Long(-256, 0));
    this.i68_1 = Color_1(new Long(-16711681, 0));
    this.j68_1 = Color_1(new Long(-65281, 0));
    this.k68_1 = Color_2(0);
    this.l68_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().f6b_1);
  }
  var Companion_instance_4;
  function Companion_getInstance_16() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.p6b_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_16();
    this.p6b_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.p6b_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.p6b_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.p6b_1, other);
  };
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().p6a_1 : colorSpace;
    if (colorSpace.u6b()) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = alpha < 0.0 ? 0.0 : alpha;
      var tmp$ret$2 = this_0 > 1.0 ? 1.0 : this_0;
      var tmp = numberToInt(tmp$ret$2 * 255.0 + 0.5) << 24;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_1 = red < 0.0 ? 0.0 : red;
      var tmp$ret$5 = this_1 > 1.0 ? 1.0 : this_1;
      var tmp_0 = tmp | numberToInt(tmp$ret$5 * 255.0 + 0.5) << 16;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_2 = green < 0.0 ? 0.0 : green;
      var tmp$ret$8 = this_2 > 1.0 ? 1.0 : this_2;
      var tmp_1 = tmp_0 | numberToInt(tmp$ret$8 * 255.0 + 0.5) << 8;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_3 = blue < 0.0 ? 0.0 : blue;
      var tmp$ret$11 = this_3 > 1.0 ? 1.0 : this_3;
      var argb = tmp_1 | numberToInt(tmp$ret$11 * 255.0 + 0.5);
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.toULong' call
      var this_4 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).o3(32));
      return _Color___init__impl__r6cqi2(tmp$ret$13);
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.v6b() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var tmp$ret$14 = 'Color only works with ColorSpaces with 3 components';
      throwIllegalArgumentException(tmp$ret$14);
    }
    var id = colorSpace.t6b_1;
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === -1)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var tmp$ret$15 = 'Unknown color space, please use a color space in ColorSpaces';
      throwIllegalArgumentException(tmp$ret$15);
    }
    var tmp$ret$19;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var minimumValue = colorSpace.w6b(0);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_5 = red < minimumValue ? minimumValue : red;
      var maximumValue = colorSpace.x6b(0);
      var f = this_5 > maximumValue ? maximumValue : this_5;
      var bits = toRawBits(f);
      var s = bits >>> _get_Fp32SignShift_$accessor$nir07s_kvowoz() | 0;
      var e = (bits >>> _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | 0) & _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf();
      var m = bits & _get_Fp32SignificandMask_$accessor$nir07s_38ybzb();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0) + _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM;
            out = out + 1 | 0;
            tmp$ret$19 = toShort(out | s << _get_Fp16SignShift_$accessor$nir07s_lvzj61());
            break $l$block;
          }
        }
      }
      tmp$ret$19 = toShort(s << _get_Fp16SignShift_$accessor$nir07s_lvzj61() | outE << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM);
    }
    var r = tmp$ret$19;
    var tmp$ret$23;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var minimumValue_0 = colorSpace.w6b(1);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_6 = green < minimumValue_0 ? minimumValue_0 : green;
      var maximumValue_0 = colorSpace.x6b(1);
      var f_0 = this_6 > maximumValue_0 ? maximumValue_0 : this_6;
      var bits_0 = toRawBits(f_0);
      var s_0 = bits_0 >>> _get_Fp32SignShift_$accessor$nir07s_kvowoz() | 0;
      var e_0 = (bits_0 >>> _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | 0) & _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf();
      var m_0 = bits_0 & _get_Fp32SignificandMask_$accessor$nir07s_38ybzb();
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0) + _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$23 = toShort(out_0 | s_0 << _get_Fp16SignShift_$accessor$nir07s_lvzj61());
            break $l$block_0;
          }
        }
      }
      tmp$ret$23 = toShort(s_0 << _get_Fp16SignShift_$accessor$nir07s_lvzj61() | outE_0 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_0);
    }
    var g = tmp$ret$23;
    var tmp$ret$27;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var minimumValue_1 = colorSpace.w6b(2);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_7 = blue < minimumValue_1 ? minimumValue_1 : blue;
      var maximumValue_1 = colorSpace.x6b(2);
      var f_1 = this_7 > maximumValue_1 ? maximumValue_1 : this_7;
      var bits_1 = toRawBits(f_1);
      var s_1 = bits_1 >>> _get_Fp32SignShift_$accessor$nir07s_kvowoz() | 0;
      var e_1 = (bits_1 >>> _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | 0) & _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf();
      var m_1 = bits_1 & _get_Fp32SignificandMask_$accessor$nir07s_38ybzb();
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0) + _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$27 = toShort(out_1 | s_1 << _get_Fp16SignShift_$accessor$nir07s_lvzj61());
            break $l$block_1;
          }
        }
      }
      tmp$ret$27 = toShort(s_1 << _get_Fp16SignShift_$accessor$nir07s_lvzj61() | outE_1 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_1);
    }
    var b = tmp$ret$27;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_8 = alpha < 0.0 ? 0.0 : alpha;
    var tmp$ret$30 = this_8 > 1.0 ? 1.0 : this_8;
    var a = numberToInt(tmp$ret$30 * 1023.0 + 0.5);
    // Inline function 'kotlin.toULong' call
    var this_9 = toLong(r).r3(new Long(65535, 0)).o3(48).s3(toLong(g).r3(new Long(65535, 0)).o3(32)).s3(toLong(b).r3(new Long(65535, 0)).o3(16)).s3(toLong(a).r3(new Long(1023, 0)).o3(6)).s3(toLong(id).r3(new Long(63, 0)));
    var tmp$ret$31 = _ULong___init__impl__c78o9k(this_9);
    return _Color___init__impl__r6cqi2(tmp$ret$31);
  }
  function Color_1(color) {
    // Inline function 'kotlin.toULong' call
    var this_0 = color.o3(32);
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    return _Color___init__impl__r6cqi2(tmp$ret$0);
  }
  function Color_2(color) {
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).o3(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().p6a_1));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).q3(32));
    return _ULong___get_data__impl__fggpzb(this_1).m1();
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(colorSpace.s6b_1, Companion_getInstance_29().y6b_1)) {
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      var tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + ColorModel__toString_impl_msukd7(colorSpace.s6b_1));
      throwIllegalArgumentException(tmp$ret$0);
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).r6c_1;
    var r = eotf.u6c(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.u6c(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.u6c(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    return this_1 > 1.0 ? 1.0 : this_1;
  }
  function ColorProducer() {
  }
  function Color_3(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_2(color);
  }
  function lerp_1(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().g6b_1;
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = fraction < 0.0 ? 0.0 : fraction;
    var t = this_0 > 1.0 ? 1.0 : this_0;
    var interpolated = UncheckedColor(lerp(startL, endL, t), lerp(startA, endA, t), lerp(startB, endB, t), lerp(startAlpha, endAlpha, t), colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function UncheckedColor(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().p6a_1 : colorSpace;
    if (colorSpace.u6b()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.toULong' call
      var this_0 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).o3(32));
      return _Color___init__impl__r6cqi2(tmp$ret$1);
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(red);
      var s = bits >>> _get_Fp32SignShift_$accessor$nir07s_kvowoz() | 0;
      var e = (bits >>> _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | 0) & _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf();
      var m = bits & _get_Fp32SignificandMask_$accessor$nir07s_38ybzb();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0) + _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM;
            out = out + 1 | 0;
            tmp$ret$2 = toShort(out | s << _get_Fp16SignShift_$accessor$nir07s_lvzj61());
            break $l$block;
          }
        }
      }
      tmp$ret$2 = toShort(s << _get_Fp16SignShift_$accessor$nir07s_lvzj61() | outE << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM);
    }
    var r = tmp$ret$2;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(green);
      var s_0 = bits_0 >>> _get_Fp32SignShift_$accessor$nir07s_kvowoz() | 0;
      var e_0 = (bits_0 >>> _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | 0) & _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf();
      var m_0 = bits_0 & _get_Fp32SignificandMask_$accessor$nir07s_38ybzb();
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0) + _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$3 = toShort(out_0 | s_0 << _get_Fp16SignShift_$accessor$nir07s_lvzj61());
            break $l$block_0;
          }
        }
      }
      tmp$ret$3 = toShort(s_0 << _get_Fp16SignShift_$accessor$nir07s_lvzj61() | outE_0 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_0);
    }
    var g = tmp$ret$3;
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(blue);
      var s_1 = bits_1 >>> _get_Fp32SignShift_$accessor$nir07s_kvowoz() | 0;
      var e_1 = (bits_1 >>> _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | 0) & _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf();
      var m_1 = bits_1 & _get_Fp32SignificandMask_$accessor$nir07s_38ybzb();
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0) + _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$4 = toShort(out_1 | s_1 << _get_Fp16SignShift_$accessor$nir07s_lvzj61());
            break $l$block_1;
          }
        }
      }
      tmp$ret$4 = toShort(s_1 << _get_Fp16SignShift_$accessor$nir07s_lvzj61() | outE_1 << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM_1);
    }
    var b = tmp$ret$4;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.min' call
    var b_0 = Math.min(alpha, 1.0);
    var tmp$ret$6 = Math.max(0.0, b_0);
    var a = numberToInt(tmp$ret$6 * 1023.0 + 0.5);
    var id = colorSpace.t6b_1;
    // Inline function 'kotlin.toULong' call
    var this_1 = toLong(r).r3(new Long(65535, 0)).o3(48).s3(toLong(g).r3(new Long(65535, 0)).o3(32)).s3(toLong(b).r3(new Long(65535, 0)).o3(16)).s3(toLong(a).r3(new Long(1023, 0)).o3(6)).s3(toLong(id).r3(new Long(63, 0)));
    var tmp$ret$7 = _ULong___init__impl__c78o9k(this_1);
    return _Color___init__impl__r6cqi2(tmp$ret$7);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var fgC = _Color___get_red__impl__cwrsk6(fg);
    var bgC = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (fgC * fgA + bgC * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var fgC_0 = _Color___get_green__impl__bta9rs(fg);
    var bgC_0 = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (fgC_0 * fgA + bgC_0 * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var fgC_1 = _Color___get_blue__impl__xwez13(fg);
    var bgC_1 = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (fgC_1 * fgA + bgC_1 * bgA * (1.0 - fgA)) / a;
    return UncheckedColor(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).w6c = function (color, blendMode) {
    return BlendModeColorFilter_init_$Create$(color, blendMode);
  };
  protoOf(Companion_3).x6c = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_13().h66_1 : blendMode;
    return $super === VOID ? this.w6c(color, blendMode) : $super.w6c.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_5;
  function Companion_getInstance_17() {
    return Companion_instance_5;
  }
  function ColorFilter(nativeColorFilter) {
    this.y6c_1 = nativeColorFilter;
  }
  function BlendModeColorFilter_init_$Init$(color, blendMode, $this) {
    BlendModeColorFilter.call($this, color, blendMode, actualTintColorFilter(color, blendMode));
    return $this;
  }
  function BlendModeColorFilter_init_$Create$(color, blendMode) {
    return BlendModeColorFilter_init_$Init$(color, blendMode, objectCreate(protoOf(BlendModeColorFilter)));
  }
  function BlendModeColorFilter(color, blendMode, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.a6d_1 = color;
    this.b6d_1 = blendMode;
  }
  protoOf(BlendModeColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlendModeColorFilter))
      return false;
    if (!equals(this.a6d_1, other.a6d_1))
      return false;
    if (!(this.b6d_1 === other.b6d_1))
      return false;
    return true;
  };
  protoOf(BlendModeColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.a6d_1);
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.b6d_1) | 0;
    return result;
  };
  protoOf(BlendModeColorFilter).toString = function () {
    return 'BlendModeColorFilter(color=' + Color__toString_impl_hpzmaq(this.a6d_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.b6d_1) + ')';
  };
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function _FilterQuality___get_value__impl__vmx58a($this) {
    return $this;
  }
  function Companion_4() {
    Companion_instance_6 = this;
    this.c6d_1 = _FilterQuality___init__impl__nv51aq(0);
    this.d6d_1 = _FilterQuality___init__impl__nv51aq(1);
    this.e6d_1 = _FilterQuality___init__impl__nv51aq(2);
    this.f6d_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_6;
  function Companion_getInstance_18() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_18().c6d_1 ? 'None' : $this === Companion_getInstance_18().d6d_1 ? 'Low' : $this === Companion_getInstance_18().e6d_1 ? 'Medium' : $this === Companion_getInstance_18().f6d_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  var One;
  var NegativeOne;
  function get_Fp32DenormalFloat() {
    _init_properties_Float16_kt__eyzj8x();
    return Fp32DenormalFloat;
  }
  var Fp32DenormalFloat;
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___init__impl__fckrew_0(value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(value);
      var s = bits >>> _get_Fp32SignShift_$accessor$nir07s_kvowoz() | 0;
      var e = (bits >>> _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() | 0) & _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf();
      var m = bits & _get_Fp32SignificandMask_$accessor$nir07s_38ybzb();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() | 0) + _get_Fp16ExponentBias_$accessor$nir07s_enu0da() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM;
            out = out + 1 | 0;
            tmp$ret$0 = toShort(out | s << _get_Fp16SignShift_$accessor$nir07s_lvzj61());
            break $l$block;
          }
        }
      }
      tmp$ret$0 = toShort(s << _get_Fp16SignShift_$accessor$nir07s_lvzj61() | outE << _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() | outM);
    }
    return _Float16___init__impl__fckrew(tmp$ret$0);
  }
  function _get_Fp32SignShift_$accessor$nir07s_kvowoz() {
    _init_properties_Float16_kt__eyzj8x();
    return 31;
  }
  function _get_Fp32ExponentMask_$accessor$nir07s_uqm1bf() {
    _init_properties_Float16_kt__eyzj8x();
    return 255;
  }
  function _get_Fp32SignificandMask_$accessor$nir07s_38ybzb() {
    _init_properties_Float16_kt__eyzj8x();
    return 8388607;
  }
  function _get_Fp16SignShift_$accessor$nir07s_lvzj61() {
    _init_properties_Float16_kt__eyzj8x();
    return 15;
  }
  function _get_Fp16ExponentShift_$accessor$nir07s_nbscsl() {
    _init_properties_Float16_kt__eyzj8x();
    return 10;
  }
  function _get_Fp16ExponentMask_$accessor$nir07s_tfqh1r() {
    _init_properties_Float16_kt__eyzj8x();
    return 31;
  }
  function _get_Fp16SignificandMask_$accessor$nir07s_vgv0yn() {
    _init_properties_Float16_kt__eyzj8x();
    return 1023;
  }
  function _get_Fp32DenormalMagic_$accessor$nir07s_vsdkf1() {
    _init_properties_Float16_kt__eyzj8x();
    return 1056964608;
  }
  function _get_Fp32DenormalFloat_$accessor$nir07s_jwvuz8() {
    _init_properties_Float16_kt__eyzj8x();
    return get_Fp32DenormalFloat();
  }
  function _get_Fp32QNaNMask_$accessor$nir07s_czh4rq() {
    _init_properties_Float16_kt__eyzj8x();
    return 4194304;
  }
  function _get_Fp16ExponentBias_$accessor$nir07s_enu0da() {
    _init_properties_Float16_kt__eyzj8x();
    return 15;
  }
  function _get_Fp32ExponentBias_$accessor$nir07s_3t2grc() {
    _init_properties_Float16_kt__eyzj8x();
    return 127;
  }
  function _get_Fp32ExponentShift_$accessor$nir07s_t1hb79() {
    _init_properties_Float16_kt__eyzj8x();
    return 23;
  }
  function _get_Fp16SignMask_$accessor$nir07s_uyx27z() {
    _init_properties_Float16_kt__eyzj8x();
    return 32768;
  }
  var properties_initialized_Float16_kt_xeo1ox;
  function _init_properties_Float16_kt__eyzj8x() {
    if (!properties_initialized_Float16_kt_xeo1ox) {
      properties_initialized_Float16_kt_xeo1ox = true;
      One = _Float16___init__impl__fckrew_0(1.0);
      NegativeOne = _Float16___init__impl__fckrew_0(-1.0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = _get_Fp32DenormalMagic_$accessor$nir07s_vsdkf1();
      Fp32DenormalFloat = floatFromBits(bits);
    }
  }
  function ImageBitmap() {
  }
  function ImageBitmap_0(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_19().i6d_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().p6a_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_5() {
    Companion_instance_7 = this;
    this.i6d_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.j6d_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.k6d_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.l6d_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.m6d_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_7;
  function Companion_getInstance_19() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_19().i6d_1 ? 'Argb8888' : $this === Companion_getInstance_19().j6d_1 ? 'Alpha8' : $this === Companion_getInstance_19().k6d_1 ? 'Rgb565' : $this === Companion_getInstance_19().l6d_1 ? 'F16' : $this === Companion_getInstance_19().m6d_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.n6d_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_19();
    this.n6d_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.n6d_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.n6d_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.n6d_1, other);
  };
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var z = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = pZ * (tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0]);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    return Offset_0(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset_0(rect.h5g_1, rect.i5g_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset_0(rect.h5g_1, rect.k5g_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset_0(rect.j5g_1, rect.i5g_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset_0(rect.j5g_1, rect.k5g_1));
    var tmp = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a = _Offset___get_x__impl__xvi35n(p0);
    var b = _Offset___get_x__impl__xvi35n(p1);
    var a_0 = Math.min(a, b);
    // Inline function 'kotlin.math.min' call
    var a_1 = _Offset___get_x__impl__xvi35n(p3);
    var b_0 = _Offset___get_x__impl__xvi35n(p4);
    var b_1 = Math.min(a_1, b_0);
    tmp.h5g_1 = Math.min(a_0, b_1);
    var tmp_0 = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a_2 = _Offset___get_y__impl__8bzhra(p0);
    var b_2 = _Offset___get_y__impl__8bzhra(p1);
    var a_3 = Math.min(a_2, b_2);
    // Inline function 'kotlin.math.min' call
    var a_4 = _Offset___get_y__impl__8bzhra(p3);
    var b_3 = _Offset___get_y__impl__8bzhra(p4);
    var b_4 = Math.min(a_4, b_3);
    tmp_0.i5g_1 = Math.min(a_3, b_4);
    var tmp_1 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_5 = _Offset___get_x__impl__xvi35n(p0);
    var b_5 = _Offset___get_x__impl__xvi35n(p1);
    var a_6 = Math.max(a_5, b_5);
    // Inline function 'kotlin.math.max' call
    var a_7 = _Offset___get_x__impl__xvi35n(p3);
    var b_6 = _Offset___get_x__impl__xvi35n(p4);
    var b_7 = Math.max(a_7, b_6);
    tmp_1.j5g_1 = Math.max(a_6, b_7);
    var tmp_2 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_8 = _Offset___get_y__impl__8bzhra(p0);
    var b_8 = _Offset___get_y__impl__8bzhra(p1);
    var a_9 = Math.max(a_8, b_8);
    // Inline function 'kotlin.math.max' call
    var a_10 = _Offset___get_y__impl__8bzhra(p3);
    var b_9 = _Offset___get_y__impl__8bzhra(p4);
    var b_10 = Math.max(a_10, b_9);
    tmp_2.k5g_1 = Math.max(a_9, b_10);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var v = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = v;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).p6d.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).q6d.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_6() {
    this.r6d_1 = 0;
    this.s6d_1 = 1;
    this.t6d_1 = 3;
    this.u6d_1 = 4;
    this.v6d_1 = 5;
    this.w6d_1 = 7;
    this.x6d_1 = 10;
    this.y6d_1 = 12;
    this.z6d_1 = 13;
    this.a6e_1 = 14;
    this.b6e_1 = 15;
  }
  var Companion_instance_8;
  function Companion_getInstance_20() {
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.o6d_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    this.o6d_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.o6d_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.o6d_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.o6d_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[imul(0, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[imul(1, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[imul(2, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[imul(3, 4) + column | 0];
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            if (!(_Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0] === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.c6e_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.c6e_1.equals(other.c6e_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.c6e_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.d6e_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!get_isSimple(this.d6e_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      this_0.f6e(this.d6e_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.e6e_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.d6e_1.equals(other.d6e_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.d6e_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.g6e_1 = path;
  }
  function Outline() {
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.c6e_1;
      _this__u8e3s4.l6e(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.e6e_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.j6e(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.d6e_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.q5h_1);
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.k6e(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.g6e_1;
          _this__u8e3s4.j6e(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset_0(_this__u8e3s4.t5g_1, _this__u8e3s4.u5g_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.x5g(), _this__u8e3s4.y5g());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset_0(_this__u8e3s4.j5h_1, _this__u8e3s4.k5h_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.x5g(), _this__u8e3s4.y5g());
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().h6e_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.c6e_1;
      _this__u8e3s4.o6e(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.e6e_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.m6e(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.d6e_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.q5h_1);
          _this__u8e3s4.n6e(brush, topLeft_0(rrect), size_0(rrect), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.g6e_1;
          _this__u8e3s4.m6e(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_7() {
    Companion_instance_9 = this;
    this.p6e_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.q6e_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_21() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  var Direction_CounterClockwise_instance;
  var Direction_Clockwise_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_CounterClockwise_instance = new Direction('CounterClockwise', 0);
    Direction_Clockwise_instance = new Direction('Clockwise', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_CounterClockwise_getInstance() {
    Direction_initEntries();
    return Direction_CounterClockwise_instance;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.m6f_1 = _PathFillType___init__impl__d59lzz(0);
    this.n6f_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_10;
  function Companion_getInstance_22() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_22().m6f_1 ? 'NonZero' : $this === Companion_getInstance_22().n6f_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === (other instanceof PathFillType ? other.o6f_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_22();
    this.o6f_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.o6f_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.o6f_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.o6f_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_11 = this;
    this.p6f_1 = _PathOperation___init__impl__8ddeif(0);
    this.q6f_1 = _PathOperation___init__impl__8ddeif(1);
    this.r6f_1 = _PathOperation___init__impl__8ddeif(2);
    this.s6f_1 = _PathOperation___init__impl__8ddeif(3);
    this.t6f_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_11;
  function Companion_getInstance_23() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).u6f = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function BlurEffect(radiusX, radiusY, edgeTreatment) {
    edgeTreatment = edgeTreatment === VOID ? Companion_getInstance_27().j67_1 : edgeTreatment;
    return new BlurEffect_0(null, radiusX, radiusY, edgeTreatment);
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_27().j67_1 : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_27().j67_1 : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_10() {
    Companion_instance_12 = this;
    this.v6f_1 = new Shadow();
  }
  var Companion_instance_12;
  function Companion_getInstance_24() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_24();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance().p5g_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.w6f_1 = color;
    this.x6f_1 = offset;
    this.y6f_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.w6f_1, other.w6f_1))
      return false;
    if (!equals(this.x6f_1, other.x6f_1))
      return false;
    if (!(this.y6f_1 === other.y6f_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.w6f_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.x6f_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.y6f_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + Color__toString_impl_hpzmaq(this.w6f_1) + ', offset=' + Offset__toString_impl_4ffbou(this.x6f_1) + ', blurRadius=' + this.y6f_1 + ')';
  };
  function lerp_2(start, stop, fraction) {
    return new Shadow(lerp_1(start.w6f_1, stop.w6f_1, fraction), lerp_0(start.x6f_1, stop.x6f_1, fraction), lerp(start.y6f_1, stop.y6f_1, fraction));
  }
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_11() {
    Companion_instance_13 = this;
    this.z6f_1 = _StrokeCap___init__impl__kfgr27(0);
    this.a6g_1 = _StrokeCap___init__impl__kfgr27(1);
    this.b6g_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_13;
  function Companion_getInstance_25() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_25().z6f_1 ? 'Butt' : $this === Companion_getInstance_25().a6g_1 ? 'Round' : $this === Companion_getInstance_25().b6g_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.c6g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_25();
    this.c6g_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.c6g_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.c6g_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.c6g_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_14 = this;
    this.d6g_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.e6g_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.f6g_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_14;
  function Companion_getInstance_26() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_26().d6g_1 ? 'Miter' : $this === Companion_getInstance_26().e6g_1 ? 'Round' : $this === Companion_getInstance_26().f6g_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.g6g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_26();
    this.g6g_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.g6g_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.g6g_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.g6g_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_15 = this;
    this.j67_1 = _TileMode___init__impl__syhjao(0);
    this.k67_1 = _TileMode___init__impl__syhjao(1);
    this.l67_1 = _TileMode___init__impl__syhjao(2);
    this.m67_1 = _TileMode___init__impl__syhjao(3);
  }
  var Companion_instance_15;
  function Companion_getInstance_27() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_27().j67_1 ? 'Clamp' : $this === Companion_getInstance_27().k67_1 ? 'Repeated' : $this === Companion_getInstance_27().l67_1 ? 'Mirror' : $this === Companion_getInstance_27().m67_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === (other instanceof TileMode ? other.h6g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_27();
    this.h6g_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.h6g_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.h6g_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.h6g_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_14() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp.i6g_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.j6g_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.k6g_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_16;
  function Companion_getInstance_28() {
    if (Companion_instance_16 == null)
      new Companion_14();
    return Companion_instance_16;
  }
  function Adaptation(transform) {
    Companion_getInstance_28();
    this.l6g_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).p3(32).m1();
  }
  function Companion_15() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(3).o3(32).s3(toLong(0).r3(new Long(-1, 0)));
    tmp.y6b_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = toLong(3).o3(32).s3(toLong(1).r3(new Long(-1, 0)));
    tmp_0.z6b_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = toLong(3).o3(32).s3(toLong(2).r3(new Long(-1, 0)));
    tmp_1.a6c_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = toLong(4).o3(32).s3(toLong(3).r3(new Long(-1, 0)));
    tmp_2.b6c_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_17;
  function Companion_getInstance_29() {
    if (Companion_instance_17 == null)
      new Companion_15();
    return Companion_instance_17;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_29().y6b_1) ? 'Rgb' : equals($this, Companion_getInstance_29().z6b_1) ? 'Xyz' : equals($this, Companion_getInstance_29().a6c_1) ? 'Lab' : equals($this, Companion_getInstance_29().b6c_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function Companion_16() {
    this.m6g_1 = -1;
    this.n6g_1 = 63;
  }
  var Companion_instance_18;
  function Companion_getInstance_30() {
    return Companion_instance_18;
  }
  function ColorSpace(name, model, id) {
    this.r6b_1 = name;
    this.s6b_1 = model;
    this.t6b_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.r6b_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.t6b_1 < -1 || this.t6b_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).v6b = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.s6b_1);
  };
  protoOf(ColorSpace).u6b = function () {
    return false;
  };
  protoOf(ColorSpace).o6g = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.p6g(tmp$ret$0);
  };
  protoOf(ColorSpace).q6g = function (v0, v1, v2) {
    var xyz = this.o6g(v0, v1, v2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = xyz[0];
    var val2 = xyz[1];
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.o3(32).s3(v2_0.r3(new Long(-1, 0)));
  };
  protoOf(ColorSpace).r6g = function (v0, v1, v2) {
    var xyz = this.o6g(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).s6g = function (x, y, z, a, colorSpace) {
    var colors = this.t6g(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).t6g = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.s6b_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.u6g(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.r6b_1 + ' (id=' + this.t6b_1 + ', model=' + ColorModel__toString_impl_msukd7(this.s6b_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.t6b_1 === that.t6b_1))
      return false;
    return !(this.r6b_1 === that.r6b_1) ? false : equals(this.s6b_1, that.s6b_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.r6b_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.s6b_1) | 0;
    result = imul(31, result) + this.t6b_1 | 0;
    return result;
  };
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_28().i6g_1 : adaptation;
    if (equals(_this__u8e3s4.s6b_1, Companion_getInstance_29().y6b_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare(rgb.f6c_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.x6g();
      var adaptationTransform = chromaticAdaptation(adaptation.l6g_1, rgb.f6c_1.x6g(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.k6c_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.v6g_1 - b.v6g_1;
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.w6g_1 - b.w6g_1;
      tmp = Math.abs(x_0) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(x, x_0) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x - e;
      var x_0 = 1.0 / g;
      tmp = (Math.pow(this_0, x_0) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var x = a[i] - b[i];
          tmp = Math.abs(x) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().p6a_1 : destination;
    intent = intent === VOID ? Companion_getInstance_34().y6g_1 : intent;
    var srcId = _this__u8e3s4.t6b_1;
    var dstId = destination.t6b_1;
    var tmp;
    if ((srcId | dstId) < 0) {
      tmp = createConnector(_this__u8e3s4, destination, intent);
    } else {
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var this_0 = get_Connectors();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var key = srcId | dstId << 6 | _RenderIntent___get_value__impl__ip9mbh(intent) << 12;
      var tmp0_elvis_lhs = this_0.u(key);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.ui.graphics.colorspace.connect.<anonymous>' call
        var this_1 = createConnector(_this__u8e3s4, destination, intent);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        this_0.ow(key, this_1);
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function createConnector(source, destination, intent) {
    var tmp;
    if (source === destination) {
      tmp = Companion_instance_19.c6h(source);
    } else if (equals(source.s6b_1, Companion_getInstance_29().y6b_1) && equals(destination.s6b_1, Companion_getInstance_29().y6b_1)) {
      var tmp_0 = source instanceof Rgb ? source : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(source, destination, intent);
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.d6h_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).u6c = function (double) {
    return this.d6h_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).x3 = function () {
    return this.d6h_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.l6a_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.m6a_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.n6a_1 = new TransferParameters(2.4, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.o6a_1 = new TransferParameters(2.2, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.p6a_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.l6a_1, Illuminant_getInstance().k6h_1, this.n6a_1, 0);
    this.q6a_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.l6a_1, Illuminant_getInstance().k6h_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().k6h_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.r6a_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.l6a_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.n6a_1, 2);
    this.s6a_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.l6a_1, Illuminant_getInstance().k6h_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.t6a_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().k6h_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 4);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.u6a_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().k6h_1, new TransferParameters(1 / 0.45, 1 / 1.0993, 0.0993 / 1.0993, 1 / 4.5, 0.08145), 5);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.v6a_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.w6a_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().k6h_1, this.n6a_1, 7);
    this.x6a_1 = Rgb_init_$Create$('NTSC (1953)', this.m6a_1, Illuminant_getInstance().g6h_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 8);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.y6a_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().k6h_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 9);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.z6a_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().k6h_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.a6b_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().h6h_1, new TransferParameters(1.8, 1.0, 0.0, 1 / 16.0, 0.031248), 11);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.b6b_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().j6h_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.c6b_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().j6h_1, 1.0, -65504.0, 65504.0, 13);
    this.d6b_1 = new Xyz('Generic XYZ', 14);
    this.e6b_1 = new Lab('Generic L*a*b*', 15);
    this.f6b_1 = Rgb_init_$Create$('None', this.l6a_1, Illuminant_getInstance().k6h_1, this.o6a_1, 16);
    this.g6b_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.h6b_1 = [this.p6a_1, this.q6a_1, this.r6a_1, this.s6a_1, this.t6a_1, this.u6a_1, this.v6a_1, this.w6a_1, this.x6a_1, this.y6a_1, this.z6a_1, this.a6b_1, this.b6b_1, this.c6b_1, this.d6b_1, this.e6b_1, this.f6b_1, this.g6b_1];
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function get_Connectors() {
    _init_properties_Connector_kt__swbf17();
    return Connectors;
  }
  var Connectors;
  function computeTransform($this, source, destination, intent) {
    if (compare(source.f6c_1, destination.f6c_1)) {
      return mul3x3(destination.l6c_1, source.k6c_1);
    } else {
      var transform = source.k6c_1;
      var inverseTransform = destination.l6c_1;
      var srcXYZ = source.f6c_1.x6g();
      var dstXYZ = destination.f6c_1.x6g();
      if (!compare(source.f6c_1, Illuminant_getInstance().h6h_1)) {
        var tmp = Companion_getInstance_28().i6g_1.l6g_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = Illuminant_getInstance().n6h_1.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.k6c_1);
      }
      if (!compare(destination.f6c_1, Illuminant_getInstance().h6h_1)) {
        var tmp_0 = Companion_getInstance_28().i6g_1.l6g_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = Illuminant_getInstance().n6h_1.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.k6c_1));
      }
      if (intent === Companion_getInstance_34().b6h_1) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_34().b6h_1))
      return null;
    var srcRGB = equals(source.s6b_1, Companion_getInstance_29().y6b_1);
    var dstRGB = equals(destination.s6b_1, Companion_getInstance_29().y6b_1);
    if (srcRGB && dstRGB)
      return null;
    if (srcRGB || dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.f6c_1.x6g() : Illuminant_getInstance().n6h_1;
      var dstXYZ = dstRGB ? rgb.f6c_1.x6g() : Illuminant_getInstance().n6h_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_34().z6g_1, this);
  }
  protoOf(Connector$Companion$identity$1).o6b = function (color) {
    return color;
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.s6b_1, Companion_getInstance_29().y6b_1) ? adapt(source, Illuminant_getInstance().h6h_1) : source;
    var tmp_0;
    if (equals(destination.s6b_1, Companion_getInstance_29().y6b_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().h6h_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_instance_19, source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.a6i_1 = mSource;
    this.b6i_1 = mDestination;
    this.c6i_1 = computeTransform(this, this.a6i_1, this.b6i_1, intent);
  }
  protoOf(RgbConnector).o6b = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var v0 = this.a6i_1.r6c_1.u6c(r);
    var v1 = this.a6i_1.r6c_1.u6c(g);
    var v2 = this.a6i_1.r6c_1.u6c(b);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.c6i_1;
    var v01 = lhs[0] * v0 + lhs[3] * v1 + lhs[6] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.c6i_1;
    var v11 = lhs_0[1] * v0 + lhs_0[4] * v1 + lhs_0[7] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.c6i_1;
    var v21 = lhs_1[2] * v0 + lhs_1[5] * v1 + lhs_1[8] * v2;
    var v02 = this.b6i_1.o6c_1.u6c(v01);
    var v12 = this.b6i_1.o6c_1.u6c(v11);
    var v22 = this.b6i_1.o6c_1.u6c(v21);
    return Color_0(v02, v12, v22, a, this.b6i_1);
  };
  function Companion_17() {
  }
  protoOf(Companion_17).c6h = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_19;
  function Companion_getInstance_31() {
    return Companion_instance_19;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    this.i6b_1 = source;
    this.j6b_1 = destination;
    this.k6b_1 = transformSource;
    this.l6b_1 = transformDestination;
    this.m6b_1 = renderIntent;
    this.n6b_1 = transform;
  }
  protoOf(Connector).o6b = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var packed = this.k6b_1.q6g(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = packed.p3(32).m1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = packed.r3(new Long(-1, 0)).m1();
    var y = floatFromBits(bits_0);
    var z = this.k6b_1.r6g(r, g, b);
    if (!(this.n6b_1 == null)) {
      x = x * this.n6b_1[0];
      y = y * this.n6b_1[1];
      z = z * this.n6b_1[2];
    }
    return this.l6b_1.s6g(x, y, z, a, this.j6b_1);
  };
  var properties_initialized_Connector_kt_5j9z4t;
  function _init_properties_Connector_kt__swbf17() {
    if (!properties_initialized_Connector_kt_5j9z4t) {
      properties_initialized_Connector_kt_5j9z4t = true;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var src = ColorSpaces_getInstance().p6a_1.t6b_1;
      var dst = ColorSpaces_getInstance().p6a_1.t6b_1;
      var renderIntent = Companion_getInstance_34().y6g_1;
      var tmp = src | dst << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent) << 12;
      var tmp_0 = Companion_instance_19.c6h(ColorSpaces_getInstance().p6a_1);
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var src_0 = ColorSpaces_getInstance().p6a_1.t6b_1;
      var dst_0 = ColorSpaces_getInstance().g6b_1.t6b_1;
      var renderIntent_0 = Companion_getInstance_34().y6g_1;
      var tmp_1 = src_0 | dst_0 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_0) << 12;
      var tmp_2 = Connector_init_$Create$(ColorSpaces_getInstance().p6a_1, ColorSpaces_getInstance().g6b_1, Companion_getInstance_34().y6g_1);
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var src_1 = ColorSpaces_getInstance().g6b_1.t6b_1;
      var dst_1 = ColorSpaces_getInstance().p6a_1.t6b_1;
      var renderIntent_1 = Companion_getInstance_34().y6g_1;
      var tmp$ret$2 = src_1 | dst_1 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_1) << 12;
      Connectors = mutableIntObjectMapOf(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$2, Connector_init_$Create$(ColorSpaces_getInstance().g6b_1, ColorSpaces_getInstance().p6a_1, Companion_getInstance_34().y6g_1));
    }
  }
  function Illuminant() {
    Illuminant_instance = this;
    this.e6h_1 = new WhitePoint(0.44757, 0.40745);
    this.f6h_1 = new WhitePoint(0.34842, 0.35161);
    this.g6h_1 = new WhitePoint(0.31006, 0.31616);
    this.h6h_1 = new WhitePoint(0.34567, 0.3585);
    this.i6h_1 = new WhitePoint(0.33242, 0.34743);
    this.j6h_1 = new WhitePoint(0.32168, 0.33767);
    this.k6h_1 = new WhitePoint(0.31271, 0.32902);
    this.l6h_1 = new WhitePoint(0.29902, 0.31485);
    this.m6h_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.n6h_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_18() {
    this.d6i_1 = 0.008856452;
    this.e6i_1 = 7.787037;
    this.f6i_1 = 0.13793103;
    this.g6i_1 = 0.20689656;
  }
  var Companion_instance_20;
  function Companion_getInstance_32() {
    return Companion_instance_20;
  }
  function Lab(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_29().a6c_1, id);
  }
  protoOf(Lab).w6b = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).x6b = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).p6g = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 100.0 ? 100.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    var this_3 = this_2 < -128.0 ? -128.0 : this_2;
    v[1] = this_3 > 128.0 ? 128.0 : this_3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    var this_5 = this_4 < -128.0 ? -128.0 : this_4;
    v[2] = this_5 > 128.0 ? 128.0 : this_5;
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      var tmp_2 = 1.0 / 7.787037;
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      var tmp_4 = 1.0 / 7.787037;
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().n6h_1[0];
    v[1] = y * Illuminant_getInstance().n6h_1[1];
    v[2] = z * Illuminant_getInstance().n6h_1[2];
    return v;
  };
  protoOf(Lab).q6g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = v1 < -128.0 ? -128.0 : v1;
    var v10 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var tmp;
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      var tmp_2 = 1.0 / 7.787037;
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = x * Illuminant_getInstance().n6h_1[0];
    var val2 = y * Illuminant_getInstance().n6h_1[1];
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.o3(32).s3(v2_0.r3(new Long(-1, 0)));
  };
  protoOf(Lab).r6g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = v2 < -128.0 ? -128.0 : v2;
    var v20 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var tmp;
    if (fz > 0.20689656) {
      tmp = fz * fz * fz;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fz - 0.13793103);
    }
    var z = tmp;
    return z * Illuminant_getInstance().n6h_1[2];
  };
  protoOf(Lab).s6g = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().n6h_1[0];
    var y1 = y / Illuminant_getInstance().n6h_1[1];
    var z1 = z / Illuminant_getInstance().n6h_1[2];
    var tmp;
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x1);
    } else {
      var tmp_0 = 7.787037 * x1;
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(y1);
    } else {
      var tmp_2 = 7.787037 * y1;
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_3 = Math.cbrt(z1);
    } else {
      var tmp_4 = 7.787037 * z1;
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = l < 0.0 ? 0.0 : l;
    var tmp_5 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = a1 < -128.0 ? -128.0 : a1;
    var tmp_6 = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = b < -128.0 ? -128.0 : b;
    var tmp$ret$11 = this_2 > 128.0 ? 128.0 : this_2;
    return Color_0(tmp_5, tmp_6, tmp$ret$11, a, colorSpace);
  };
  protoOf(Lab).u6g = function (v) {
    var x = v[0] / Illuminant_getInstance().n6h_1[0];
    var y = v[1] / Illuminant_getInstance().n6h_1[1];
    var z = v[2] / Illuminant_getInstance().n6h_1[2];
    var tmp;
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x);
    } else {
      var tmp_0 = 7.787037 * x;
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(y);
    } else {
      var tmp_2 = 7.787037 * y;
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_3 = Math.cbrt(z);
    } else {
      var tmp_4 = 7.787037 * z;
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = l < 0.0 ? 0.0 : l;
    v[0] = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = a < -128.0 ? -128.0 : a;
    v[1] = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = b < -128.0 ? -128.0 : b;
    v[2] = this_2 > 128.0 ? 128.0 : this_2;
    return v;
  };
  function Companion_19() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.k6i_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_28().i6g_1.l6g_1, Illuminant_getInstance().h6h_1.x6g(), Illuminant_getInstance().k6h_1.x6g()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.l6i_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.m6i_1 = inverse3x3(this.k6i_1);
    this.n6i_1 = inverse3x3(this.l6i_1);
  }
  var Companion_instance_21;
  function Companion_getInstance_33() {
    if (Companion_instance_21 == null)
      new Companion_19();
    return Companion_instance_21;
  }
  function Oklab(name, id) {
    Companion_getInstance_33();
    ColorSpace.call(this, name, Companion_getInstance_29().a6c_1, id);
  }
  protoOf(Oklab).w6b = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).x6b = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).p6g = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 1.0 ? 1.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    var this_3 = this_2 < -0.5 ? -0.5 : this_2;
    v[1] = this_3 > 0.5 ? 0.5 : this_3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    var this_5 = this_4 < -0.5 ? -0.5 : this_4;
    v[2] = this_5 > 0.5 ? 0.5 : this_5;
    mul3x3Float3(Companion_getInstance_33().n6i_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_33().m6i_1, v);
    return v;
  };
  protoOf(Oklab).q6g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = v1 < -0.5 ? -0.5 : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v2 < -0.5 ? -0.5 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_33().n6i_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_33().n6i_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_33().n6i_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs_2 = Companion_getInstance_33().m6i_1;
    var v03 = lhs_2[0] * v02 + lhs_2[3] * v12 + lhs_2[6] * v22;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_3 = Companion_getInstance_33().m6i_1;
    var v13 = lhs_3[1] * v02 + lhs_3[4] * v12 + lhs_3[7] * v22;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(v03));
    var v2_0 = toLong(toRawBits(v13));
    return v1_0.o3(32).s3(v2_0.r3(new Long(-1, 0)));
  };
  protoOf(Oklab).r6g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = v1 < -0.5 ? -0.5 : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v2 < -0.5 ? -0.5 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_33().n6i_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_33().n6i_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_33().n6i_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_2 = Companion_getInstance_33().m6i_1;
    var v23 = lhs_2[2] * v02 + lhs_2[5] * v12 + lhs_2[8] * v22;
    return v23;
  };
  protoOf(Oklab).s6g = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_33().k6i_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_33().k6i_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_33().k6i_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = fastCbrt(v0);
    v1 = fastCbrt(v1);
    v2 = fastCbrt(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs_2 = Companion_getInstance_33().l6i_1;
    var r0 = v0;
    var r1 = v1;
    var r2 = v2;
    var v01 = lhs_2[0] * r0 + lhs_2[3] * r1 + lhs_2[6] * r2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_3 = Companion_getInstance_33().l6i_1;
    var r0_0 = v0;
    var r1_0 = v1;
    var r2_0 = v2;
    var v11 = lhs_3[1] * r0_0 + lhs_3[4] * r1_0 + lhs_3[7] * r2_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_4 = Companion_getInstance_33().l6i_1;
    var r0_1 = v0;
    var r1_1 = v1;
    var r2_1 = v2;
    var v21 = lhs_4[2] * r0_1 + lhs_4[5] * r1_1 + lhs_4[8] * r2_1;
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).u6g = function (v) {
    mul3x3Float3(Companion_getInstance_33().k6i_1, v);
    v[0] = fastCbrt(v[0]);
    v[1] = fastCbrt(v[1]);
    v[2] = fastCbrt(v[2]);
    mul3x3Float3(Companion_getInstance_33().l6i_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _RenderIntent___get_value__impl__ip9mbh($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_22 = this;
    this.y6g_1 = _RenderIntent___init__impl__jceahd(0);
    this.z6g_1 = _RenderIntent___init__impl__jceahd(1);
    this.a6h_1 = _RenderIntent___init__impl__jceahd(2);
    this.b6h_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_22;
  function Companion_getInstance_34() {
    if (Companion_instance_22 == null)
      new Companion_20();
    return Companion_instance_22;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare_0(primaries, ColorSpaces_getInstance().l6a_1)) {
      return false;
    }
    if (!compare(whitePoint, Illuminant_getInstance().k6h_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().p6a_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.m6c_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.p6c_1))
        return false;
      x = x + 1 / 255.0;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.u6c(point);
    var rB = b.u6c(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return area($this, primaries) / area($this, ColorSpaces_getInstance().m6a_1) > 0.9 && contains($this, primaries, ColorSpaces_getInstance().l6a_1) || (min < 0.0 && max > 1.0);
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 || cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 || cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 || cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.v6g_1;
    var wy = whitePoint.w6g_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.r6i_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).u6c = function (double) {
    return this.r6i_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).x3 = function () {
    return this.r6i_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).hashCode = function () {
    return hashCode(this.x3());
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.x6i_1 === 0.0 && function_0.y6i_1 === 0.0) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.x6i_1 === 0.0 && function_0.y6i_1 === 0.0) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_35().z6i_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_35().z6i_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.r6b_1, colorSpace.j6c_1, whitePoint, transform, colorSpace.m6c_1, colorSpace.p6c_1, colorSpace.g6c_1, colorSpace.h6c_1, colorSpace.i6c_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_21() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.z6i_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_23;
  function Companion_getInstance_35() {
    if (Companion_instance_23 == null)
      new Companion_21();
    return Companion_instance_23;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.a6j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).u6c = function (double) {
    return this.a6j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).x3 = function () {
    return this.a6j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).hashCode = function () {
    return hashCode(this.x3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.b6j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).u6c = function (double) {
    return this.b6j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).x3 = function () {
    return this.b6j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).hashCode = function () {
    return hashCode(this.x3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.c6j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).u6c = function (double) {
    return this.c6j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).x3 = function () {
    return this.c6j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).hashCode = function () {
    return hashCode(this.x3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.d6j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).u6c = function (double) {
    return this.d6j_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).x3 = function () {
    return this.d6j_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).hashCode = function () {
    return hashCode(this.x3());
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.m6c_1.u6c(x), this$0.g6c_1, this$0.h6c_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.m6c_1.u6c(x), this$0.g6c_1, this$0.h6c_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.p6c_1.u6c(coerceIn(x, this$0.g6c_1, this$0.h6c_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.p6c_1.u6c(coerceIn(x, this$0.g6c_1, this$0.h6c_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.t6i_1, $function.u6i_1, $function.v6i_1, $function.w6i_1, $function.s6i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.t6i_1, $function.u6i_1, $function.v6i_1, $function.w6i_1, $function.x6i_1, $function.y6i_1, $function.s6i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.t6i_1, $function.u6i_1, $function.v6i_1, $function.w6i_1, $function.s6i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.t6i_1, $function.u6i_1, $function.v6i_1, $function.w6i_1, $function.x6i_1, $function.y6i_1, $function.s6i_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = 1.0 / $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_35();
    ColorSpace.call(this, name, Companion_getInstance_29().y6b_1, id);
    this.f6c_1 = whitePoint;
    this.g6c_1 = min;
    this.h6c_1 = max;
    this.i6c_1 = transferParameters;
    this.m6c_1 = oetf;
    var tmp = this;
    tmp.n6c_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.o6c_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.p6c_1 = eotf;
    var tmp_2 = this;
    tmp_2.q6c_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.r6c_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) && !(primaries.length === 9)) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.g6c_1 >= this.h6c_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.g6c_1 + ', max=' + this.h6c_1 + '; min must be strictly < max');
    }
    this.j6c_1 = xyPrimaries(Companion_getInstance_35(), primaries);
    if (transform == null) {
      this.k6c_1 = computeXYZMatrix(Companion_getInstance_35(), this.j6c_1, this.f6c_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + transform.length);
      }
      this.k6c_1 = transform;
    }
    this.l6c_1 = inverse3x3(this.k6c_1);
    this.s6c_1 = isWideGamut(Companion_getInstance_35(), this.j6c_1, this.g6c_1, this.h6c_1);
    this.t6c_1 = isSrgb(Companion_getInstance_35(), this.j6c_1, this.f6c_1, oetf, eotf, this.g6c_1, this.h6c_1, id);
  }
  protoOf(Rgb).u6b = function () {
    return this.t6c_1;
  };
  protoOf(Rgb).w6b = function (component) {
    return this.g6c_1;
  };
  protoOf(Rgb).x6b = function (component) {
    return this.h6c_1;
  };
  protoOf(Rgb).p6g = function (v) {
    v[0] = this.r6c_1.u6c(v[0]);
    v[1] = this.r6c_1.u6c(v[1]);
    v[2] = this.r6c_1.u6c(v[2]);
    return mul3x3Float3(this.k6c_1, v);
  };
  protoOf(Rgb).q6g = function (v0, v1, v2) {
    var v00 = this.r6c_1.u6c(v0);
    var v10 = this.r6c_1.u6c(v1);
    var v20 = this.r6c_1.u6c(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.k6c_1;
    var x = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.k6c_1;
    var y = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(x));
    var v2_0 = toLong(toRawBits(y));
    return v1_0.o3(32).s3(v2_0.r3(new Long(-1, 0)));
  };
  protoOf(Rgb).r6g = function (v0, v1, v2) {
    var v00 = this.r6c_1.u6c(v0);
    var v10 = this.r6c_1.u6c(v1);
    var v20 = this.r6c_1.u6c(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs = this.k6c_1;
    var z = lhs[2] * v00 + lhs[5] * v10 + lhs[8] * v20;
    return z;
  };
  protoOf(Rgb).s6g = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.l6c_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.l6c_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.l6c_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = this.o6c_1.u6c(v0);
    v1 = this.o6c_1.u6c(v1);
    v2 = this.o6c_1.u6c(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).u6g = function (v) {
    mul3x3Float3(this.l6c_1, v);
    v[0] = this.o6c_1.u6c(v[0]);
    v[1] = this.o6c_1.u6c(v[1]);
    v[2] = this.o6c_1.u6c(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.g6c_1, this.g6c_1) === 0))
      return false;
    if (!(compareTo(rgb.h6c_1, this.h6c_1) === 0))
      return false;
    if (!this.f6c_1.equals(rgb.f6c_1))
      return false;
    if (!contentEquals(this.j6c_1, rgb.j6c_1))
      return false;
    if (!(this.i6c_1 == null)) {
      return equals(this.i6c_1, rgb.i6c_1);
    } else if (rgb.i6c_1 == null) {
      return true;
    }
    return !equals(this.m6c_1, rgb.m6c_1) ? false : equals(this.p6c_1, rgb.p6c_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.f6c_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.j6c_1) | 0;
    result = imul(31, result) + (!(this.g6c_1 === 0.0) ? toBits(this.g6c_1) : 0) | 0;
    result = imul(31, result) + (!(this.h6c_1 === 0.0) ? toBits(this.h6c_1) : 0) | 0;
    result = imul(31, result) + (!(this.i6c_1 == null) ? this.i6c_1.hashCode() : 0) | 0;
    if (this.i6c_1 == null) {
      result = imul(31, result) + hashCode(this.m6c_1) | 0;
      result = imul(31, result) + hashCode(this.p6c_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.s6i_1 = gamma;
    this.t6i_1 = a;
    this.u6i_1 = b;
    this.v6i_1 = c;
    this.w6i_1 = d;
    this.x6i_1 = e;
    this.y6i_1 = f;
    if (isNaN_1(this.t6i_1) || isNaN_1(this.u6i_1) || isNaN_1(this.v6i_1) || isNaN_1(this.w6i_1) || isNaN_1(this.x6i_1) || isNaN_1(this.y6i_1) || isNaN_1(this.s6i_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.w6i_1 >= 0.0 && this.w6i_1 <= 1.0)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.w6i_1));
    }
    if (this.w6i_1 === 0.0 && (this.t6i_1 === 0.0 || this.s6i_1 === 0.0)) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.w6i_1 >= 1.0 && this.v6i_1 === 0.0) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.t6i_1 === 0.0 || this.s6i_1 === 0.0) && this.v6i_1 === 0.0) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.v6i_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.t6i_1 < 0.0 || this.s6i_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.s6i_1 + ', a=' + this.t6i_1 + ', b=' + this.u6i_1 + ', c=' + this.v6i_1 + ', d=' + this.w6i_1 + ', e=' + this.x6i_1 + ', f=' + this.y6i_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.s6i_1);
    result = imul(result, 31) + getNumberHashCode(this.t6i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u6i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v6i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w6i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x6i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y6i_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.s6i_1, tmp0_other_with_cast.s6i_1))
      return false;
    if (!equals(this.t6i_1, tmp0_other_with_cast.t6i_1))
      return false;
    if (!equals(this.u6i_1, tmp0_other_with_cast.u6i_1))
      return false;
    if (!equals(this.v6i_1, tmp0_other_with_cast.v6i_1))
      return false;
    if (!equals(this.w6i_1, tmp0_other_with_cast.w6i_1))
      return false;
    if (!equals(this.x6i_1, tmp0_other_with_cast.x6i_1))
      return false;
    if (!equals(this.y6i_1, tmp0_other_with_cast.y6i_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.v6g_1 = x;
    this.w6g_1 = y;
  }
  protoOf(WhitePoint).x6g = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.v6g_1 / this.w6g_1, 1.0, (1.0 - this.v6g_1 - this.w6g_1) / this.w6g_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.v6g_1 + ', y=' + this.w6g_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.v6g_1);
    result = imul(result, 31) + getNumberHashCode(this.w6g_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.v6g_1, tmp0_other_with_cast.v6g_1))
      return false;
    if (!equals(this.w6g_1, tmp0_other_with_cast.w6g_1))
      return false;
    return true;
  };
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_29().z6b_1, id);
  }
  protoOf(Xyz).w6b = function (component) {
    return -2.0;
  };
  protoOf(Xyz).x6b = function (component) {
    return 2.0;
  };
  protoOf(Xyz).p6g = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    var this_1 = this_0 < -2.0 ? -2.0 : this_0;
    v[0] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    var this_3 = this_2 < -2.0 ? -2.0 : this_2;
    v[1] = this_3 > 2.0 ? 2.0 : this_3;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    var this_5 = this_4 < -2.0 ? -2.0 : this_4;
    v[2] = this_5 > 2.0 ? 2.0 : this_5;
    return v;
  };
  protoOf(Xyz).q6g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v0 < -2.0 ? -2.0 : v0;
    var val1 = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = v1 < -2.0 ? -2.0 : v1;
    var val2 = this_1 > 2.0 ? 2.0 : this_1;
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.o3(32).s3(v2_0.r3(new Long(-1, 0)));
  };
  protoOf(Xyz).r6g = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v2 < -2.0 ? -2.0 : v2;
    return this_0 > 2.0 ? 2.0 : this_0;
  };
  protoOf(Xyz).s6g = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = x < -2.0 ? -2.0 : x;
    var tmp = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = y < -2.0 ? -2.0 : y;
    var tmp_0 = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = z < -2.0 ? -2.0 : z;
    var tmp$ret$11 = this_2 > 2.0 ? 2.0 : this_2;
    return Color_0(tmp, tmp_0, tmp$ret$11, a, colorSpace);
  };
  protoOf(Xyz).u6g = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    var this_1 = this_0 < -2.0 ? -2.0 : this_0;
    v[0] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    var this_3 = this_2 < -2.0 ? -2.0 : this_2;
    v[1] = this_3 > 2.0 ? 2.0 : this_3;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    var this_5 = this_4 < -2.0 ? -2.0 : this_4;
    v[2] = this_5 > 2.0 ? 2.0 : this_5;
    return v;
  };
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.j6j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      this_0.l6j(Companion_getInstance_21().p6e_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.j6j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.k6j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      this_0.l6j(Companion_getInstance_21().q6e_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.k6j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(this_0.e5t() === drawStyle.m6j_1)) {
          this_0.d5t(drawStyle.m6j_1);
        }
        if (!(this_0.s6j() === drawStyle.o6j_1)) {
          this_0.r6j(drawStyle.o6j_1);
        }
        if (!(this_0.u6j() === drawStyle.n6j_1)) {
          this_0.t6j(drawStyle.n6j_1);
        }
        if (!(this_0.w6j() === drawStyle.p6j_1)) {
          this_0.v6j(drawStyle.p6j_1);
        }
        if (!equals(this_0.y6j(), drawStyle.q6j_1)) {
          this_0.x6j(drawStyle.q6j_1);
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.u67($this.z5g(), this_0, alpha);
    } else {
      if (!(this_0.j5t() == null)) {
        this_0.i5t(null);
      }
      if (!equals(this_0.n68(), Companion_getInstance_16().z67_1)) {
        this_0.m68(Companion_getInstance_16().z67_1);
      }
      if (!(this_0.o64() === alpha)) {
        this_0.o68(alpha);
      }
    }
    if (!equals(this_0.a6k(), colorFilter)) {
      this_0.z6j(colorFilter);
    }
    if (!(this_0.c6k() === blendMode)) {
      this_0.b6k(blendMode);
    }
    if (!(this_0.e6k() === filterQuality)) {
      this_0.d6k(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_36().i6e_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.n68(), targetColor)) {
      this_0.m68(targetColor);
    }
    if (!(this_0.j5t() == null)) {
      this_0.i5t(null);
    }
    if (!equals(this_0.a6k(), colorFilter)) {
      this_0.z6j(colorFilter);
    }
    if (!(this_0.c6k() === blendMode)) {
      this_0.b6k(blendMode);
    }
    if (!(this_0.e6k() === filterQuality)) {
      this_0.d6k(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_36().i6e_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.n68(), targetColor)) {
      this_0.m68(targetColor);
    }
    if (!(this_0.j5t() == null)) {
      this_0.i5t(null);
    }
    if (!equals(this_0.a6k(), colorFilter)) {
      this_0.z6j(colorFilter);
    }
    if (!(this_0.c6k() === blendMode)) {
      this_0.b6k(blendMode);
    }
    if (!(this_0.e5t() === strokeWidth)) {
      this_0.d5t(strokeWidth);
    }
    if (!(this_0.u6j() === miter)) {
      this_0.t6j(miter);
    }
    if (!(this_0.s6j() === cap)) {
      this_0.r6j(cap);
    }
    if (!(this_0.w6j() === join)) {
      this_0.v6j(join);
    }
    if (!equals(this_0.y6j(), pathEffect)) {
      this_0.x6j(pathEffect);
    }
    if (!(this_0.e6k() === filterQuality)) {
      this_0.d6k(filterQuality);
    }
    return this_0;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_36().i6e_1 : filterQuality;
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance_0().s5h_1 : size;
    this.f6k_1 = density;
    this.g6k_1 = layoutDirection;
    this.h6k_1 = canvas;
    this.i6k_1 = size;
  }
  protoOf(DrawParams).lb = function () {
    return this.f6k_1;
  };
  protoOf(DrawParams).mb = function () {
    return this.g6k_1;
  };
  protoOf(DrawParams).tn = function () {
    return this.h6k_1;
  };
  protoOf(DrawParams).j6k = function () {
    return this.i6k_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + toString(this.f6k_1) + ', layoutDirection=' + this.g6k_1.toString() + ', canvas=' + toString(this.h6k_1) + ', size=' + Size__toString_impl_o87ni8(this.i6k_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.f6k_1);
    result = imul(result, 31) + this.g6k_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.h6k_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.i6k_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.f6k_1, tmp0_other_with_cast.f6k_1))
      return false;
    if (!this.g6k_1.equals(tmp0_other_with_cast.g6k_1))
      return false;
    if (!equals(this.h6k_1, tmp0_other_with_cast.h6k_1))
      return false;
    if (!equals(this.i6k_1, tmp0_other_with_cast.i6k_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.m6k_1 = this$0;
    this.k6k_1 = asDrawTransform(this);
    this.l6k_1 = null;
  }
  protoOf(CanvasDrawScope$drawContext$1).n6k = function (value) {
    this.m6k_1.h6j_1.h6k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).q5w = function () {
    return this.m6k_1.h6j_1.h6k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).o6k = function (value) {
    this.m6k_1.h6j_1.i6k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).z5g = function () {
    return this.m6k_1.h6j_1.i6k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).p6k = function () {
    return this.k6k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).q6k = function (value) {
    this.m6k_1.h6j_1.g6k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).r6k = function () {
    return this.m6k_1.h6j_1.g6k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).s6k = function (value) {
    this.m6k_1.h6j_1.f6k_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).d5i = function () {
    return this.m6k_1.h6j_1.f6k_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).t6k = function (_set____db54di) {
    this.l6k_1 = _set____db54di;
  };
  protoOf(CanvasDrawScope$drawContext$1).u6k = function () {
    return this.l6k_1;
  };
  function CanvasDrawScope() {
    this.h6j_1 = new DrawParams();
    var tmp = this;
    tmp.i6j_1 = new CanvasDrawScope$drawContext$1(this);
    this.j6j_1 = null;
    this.k6j_1 = null;
  }
  protoOf(CanvasDrawScope).r6k = function () {
    return this.h6j_1.g6k_1;
  };
  protoOf(CanvasDrawScope).d5i = function () {
    return this.h6j_1.f6k_1.d5i();
  };
  protoOf(CanvasDrawScope).o5i = function () {
    return this.h6j_1.f6k_1.o5i();
  };
  protoOf(CanvasDrawScope).v6k = function () {
    return this.i6j_1;
  };
  protoOf(CanvasDrawScope).w6k = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.h6j_1.h6k_1;
    Companion_getInstance_37();
    return tmp.c6a(start, end, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, Companion_getInstance_26().d6g_1, pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).o6e = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.e6a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).l6e = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.e6a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).a6l = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.h6j_1.h6k_1.j6a(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).n6e = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.f6a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).k6e = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.f6a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).d6l = function (brush, radius, center, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.g6a(center, radius, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).f6l = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.g6a(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).h6l = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.h6a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).j6e = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.i6a(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).m6e = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.h6j_1.h6k_1.i6a(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.m6l_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).z5g = function () {
    return this.m6l_1.z5g();
  };
  protoOf(asDrawTransform$1).n6l = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = this.m6l_1.q5w();
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.z5g()) - (left + right), _Size___get_height__impl__a04p02(this.z5g()) - (top + bottom));
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Size___get_width__impl__58y75t(updatedSize) >= 0 && _Size___get_height__impl__a04p02(updatedSize) >= 0)) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Width and height must be greater than or equal to zero';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.m6l_1.o6k(updatedSize);
    it.q69(left, top);
  };
  protoOf(asDrawTransform$1).v69 = function (left, top, right, bottom, clipOp) {
    this.m6l_1.q5w().v69(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).a6a = function (path, clipOp) {
    this.m6l_1.q5w().a6a(path, clipOp);
  };
  protoOf(asDrawTransform$1).q69 = function (left, top) {
    this.m6l_1.q5w().q69(left, top);
  };
  protoOf(asDrawTransform$1).p6l = function (degrees, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.m6l_1.q5w();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.rotate.<anonymous>' call
    this_0.q69(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    this_0.s69(degrees);
    this_0.q69(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  protoOf(asDrawTransform$1).q6l = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.m6l_1.q5w();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    this_0.q69(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    this_0.r69(scaleX, scaleY);
    this_0.q69(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  protoOf(asDrawTransform$1).r6l = function (matrix) {
    this.m6l_1.q5w().t69(matrix);
  };
  function get_DefaultDensity() {
    _init_properties_DrawContext_kt__bfvdzt();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawContext() {
  }
  var properties_initialized_DrawContext_kt_nwly1n;
  function _init_properties_DrawContext_kt__bfvdzt() {
    if (!properties_initialized_DrawContext_kt_nwly1n) {
      properties_initialized_DrawContext_kt_nwly1n = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_22() {
    Companion_instance_24 = this;
    this.h6e_1 = Companion_getInstance_13().f66_1;
    this.i6e_1 = Companion_getInstance_18().d6d_1;
  }
  var Companion_instance_24;
  function Companion_getInstance_36() {
    if (Companion_instance_24 == null)
      new Companion_22();
    return Companion_instance_24;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_23() {
    Companion_instance_25 = this;
    this.s6l_1 = 0.0;
    this.t6l_1 = 4.0;
    this.u6l_1 = Companion_getInstance_25().z6f_1;
    this.v6l_1 = Companion_getInstance_26().d6g_1;
  }
  var Companion_instance_25;
  function Companion_getInstance_37() {
    if (Companion_instance_25 == null)
      new Companion_23();
    return Companion_instance_25;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_37();
    width = width === VOID ? 0.0 : width;
    var tmp;
    if (miter === VOID) {
      Companion_getInstance_37();
      tmp = 4.0;
    } else {
      tmp = miter;
    }
    miter = tmp;
    cap = cap === VOID ? Companion_getInstance_37().u6l_1 : cap;
    join = join === VOID ? Companion_getInstance_37().v6l_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.m6j_1 = width;
    this.n6j_1 = miter;
    this.o6j_1 = cap;
    this.p6j_1 = join;
    this.q6j_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.m6j_1 === other.m6j_1))
      return false;
    if (!(this.n6j_1 === other.n6j_1))
      return false;
    if (!(this.o6j_1 === other.o6j_1))
      return false;
    if (!(this.p6j_1 === other.p6j_1))
      return false;
    if (!equals(this.q6j_1, other.q6j_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.m6j_1);
    result = imul(31, result) + getNumberHashCode(this.n6j_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.o6j_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.p6j_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q6j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.m6j_1 + ', miter=' + this.n6j_1 + ', cap=' + StrokeCap__toString_impl_3xn0rd(this.o6j_1) + ', join=' + StrokeJoin__toString_impl_ph4e1r(this.p6j_1) + ', pathEffect=' + toString_0(this.q6j_1) + ')';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).n69 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).o69 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).p69 = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).q69 = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).r69 = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).s69 = function (degrees) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).t69 = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).v69 = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).a6a = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).c6a = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).e6a = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).f6a = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).g6a = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).h6a = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).i6a = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).j6a = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function ChildLayerDependenciesTracker() {
    this.w6l_1 = null;
    this.x6l_1 = null;
    this.y6l_1 = null;
    this.z6l_1 = null;
    this.a6m_1 = false;
  }
  protoOf(ChildLayerDependenciesTracker).b6m = function (graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.a6m_1) {
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.onDependencyAdded.<anonymous>' call
      var tmp$ret$0 = 'Only add dependencies during a tracking';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (!(this.y6l_1 == null)) {
      ensureNotNull(this.y6l_1).e(graphicsLayer);
    } else if (!(this.w6l_1 == null)) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.onDependencyAdded.<anonymous>' call
      this_0.e(ensureNotNull(this.w6l_1));
      this_0.e(graphicsLayer);
      tmp.y6l_1 = this_0;
      this.w6l_1 = null;
    } else {
      this.w6l_1 = graphicsLayer;
    }
    if (!(this.z6l_1 == null)) {
      return !ensureNotNull(this.z6l_1).t2(graphicsLayer);
    } else {
      if (!(this.x6l_1 === graphicsLayer)) {
        return true;
      } else {
        this.x6l_1 = null;
        return false;
      }
    }
  };
  function _CompositingStrategy___init__impl__pgr8e(value) {
    return value;
  }
  function Companion_24() {
    Companion_instance_26 = this;
    this.c6m_1 = _CompositingStrategy___init__impl__pgr8e(0);
    this.d6m_1 = _CompositingStrategy___init__impl__pgr8e(1);
    this.e6m_1 = _CompositingStrategy___init__impl__pgr8e(2);
  }
  var Companion_instance_26;
  function Companion_getInstance_38() {
    if (Companion_instance_26 == null)
      new Companion_24();
    return Companion_instance_26;
  }
  function drawLayer(_this__u8e3s4, graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.v6k().q5w();
    graphicsLayer.q6n(canvas, _this__u8e3s4.v6k().u6k());
  }
  function get_DefaultCameraDistance() {
    return DefaultCameraDistance;
  }
  var DefaultCameraDistance;
  function setOutline(_this__u8e3s4, outline) {
    if (outline instanceof Rectangle) {
      _this__u8e3s4.t6n(Offset_0(outline.c6e_1.t5g_1, outline.c6e_1.u5g_1), Size(outline.c6e_1.x5g(), outline.c6e_1.y5g()));
    } else {
      if (outline instanceof Generic) {
        _this__u8e3s4.s6n(outline.g6e_1);
      } else {
        if (outline instanceof Rounded) {
          if (!(outline.e6e_1 == null)) {
            _this__u8e3s4.s6n(outline.e6e_1);
          } else {
            var rr = outline.d6e_1;
            _this__u8e3s4.r6n(Offset_0(rr.j5h_1, rr.k5h_1), Size(rr.x5g(), rr.y5g()), _CornerRadius___get_x__impl__1594cn(rr.q5h_1));
          }
        }
      }
    }
  }
  function validateSize($this, srcOffset, srcSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_IntOffset___get_x__impl__qiqr5o(srcOffset) >= 0 && _IntOffset___get_y__impl__2avpwj(srcOffset) >= 0 && _IntSize___get_width__impl__d9yl4o(srcSize) >= 0 && _IntSize___get_height__impl__prv63b(srcSize) >= 0 && _IntSize___get_width__impl__d9yl4o(srcSize) <= $this.a6o_1.x5g() && _IntSize___get_height__impl__prv63b(srcSize) <= $this.a6o_1.y5g())) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return srcSize;
  }
  function BitmapPainter(image, srcOffset, srcSize) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().e5j_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.x5g(), image.y5g()) : srcSize;
    Painter.call(this);
    this.a6o_1 = image;
    this.b6o_1 = srcOffset;
    this.c6o_1 = srcSize;
    this.d6o_1 = Companion_getInstance_18().d6d_1;
    this.e6o_1 = validateSize(this, this.b6o_1, this.c6o_1);
    this.f6o_1 = 1.0;
    this.g6o_1 = null;
  }
  protoOf(BitmapPainter).h6o = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _Size___get_width__impl__58y75t(_this__u8e3s4.z5g());
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = _Size___get_height__impl__a04p02(_this__u8e3s4.z5g());
    var tmp$ret$3 = roundToInt(this_1);
    _this__u8e3s4.b6l(this.a6o_1, this.b6o_1, this.c6o_1, VOID, IntSize(tmp, tmp$ret$3), this.f6o_1, VOID, this.g6o_1, VOID, this.d6o_1);
  };
  protoOf(BitmapPainter).i6o = function () {
    return toSize_0(this.e6o_1);
  };
  protoOf(BitmapPainter).j6o = function (alpha) {
    this.f6o_1 = alpha;
    return true;
  };
  protoOf(BitmapPainter).k6o = function (colorFilter) {
    this.g6o_1 = colorFilter;
    return true;
  };
  protoOf(BitmapPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapPainter))
      return false;
    if (!equals(this.a6o_1, other.a6o_1))
      return false;
    if (!equals(this.b6o_1, other.b6o_1))
      return false;
    if (!equals(this.c6o_1, other.c6o_1))
      return false;
    if (!(this.d6o_1 === other.d6o_1))
      return false;
    return true;
  };
  protoOf(BitmapPainter).hashCode = function () {
    var result = hashCode(this.a6o_1);
    result = imul(31, result) + IntOffset__hashCode_impl_w5rrxs(this.b6o_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.c6o_1) | 0;
    result = imul(31, result) + FilterQuality__hashCode_impl_v4lpcb(this.d6o_1) | 0;
    return result;
  };
  protoOf(BitmapPainter).toString = function () {
    return 'BitmapPainter(image=' + toString(this.a6o_1) + ', srcOffset=' + IntOffset__toString_impl_h46d8h(this.b6o_1) + ', srcSize=' + IntSize__toString_impl_54w9zl(this.c6o_1) + ', ' + ('filterQuality=' + FilterQuality__toString_impl_i5cfty(this.d6o_1) + ')');
  };
  function BitmapPainter_0(image, srcOffset, srcSize, filterQuality) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().e5j_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.x5g(), image.y5g()) : srcSize;
    filterQuality = filterQuality === VOID ? Companion_getInstance_18().d6d_1 : filterQuality;
    // Inline function 'kotlin.apply' call
    var this_0 = new BitmapPainter(image, srcOffset, srcSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.painter.BitmapPainter.<anonymous>' call
    this_0.d6o_1 = filterQuality;
    return this_0;
  }
  function obtainPaint($this) {
    var target = $this.l6o_1;
    if (target == null) {
      target = Paint();
      $this.l6o_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.n6o_1, colorFilter)) {
      var consumedColorFilter = $this.k6o(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.l6o_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.z6j(null);
          }
          $this.m6o_1 = false;
        } else {
          obtainPaint($this).z6j(colorFilter);
          $this.m6o_1 = true;
        }
      }
      $this.n6o_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.o6o_1 === alpha)) {
      var consumed = $this.j6o(alpha);
      if (!consumed) {
        if (alpha === get_DefaultAlpha()) {
          var tmp0_safe_receiver = $this.l6o_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.o68(alpha);
          }
          $this.m6o_1 = false;
        } else {
          obtainPaint($this).o68(alpha);
          $this.m6o_1 = true;
        }
      }
      $this.o6o_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.p6o_1.equals(rtl)) {
      $this.r6o(rtl);
      $this.p6o_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function ($this$null) {
      this$0.h6o($this$null);
      return Unit_instance;
    };
  }
  function Painter() {
    this.l6o_1 = null;
    this.m6o_1 = false;
    this.n6o_1 = null;
    this.o6o_1 = get_DefaultAlpha();
    this.p6o_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.q6o_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).j6o = function (alpha) {
    return false;
  };
  protoOf(Painter).k6o = function (colorFilter) {
    return false;
  };
  protoOf(Painter).r6o = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).s6o = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.r6k());
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var right = _Size___get_width__impl__58y75t(_this__u8e3s4.z5g()) - _Size___get_width__impl__58y75t(size);
    var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.z5g()) - _Size___get_height__impl__a04p02(size);
    _this__u8e3s4.v6k().p6k().n6l(0.0, 0.0, right, bottom);
    try {
      // Inline function 'androidx.compose.ui.graphics.painter.Painter.draw.<anonymous>' call
      if (alpha > 0.0 && _Size___get_width__impl__58y75t(size) > 0 && _Size___get_height__impl__a04p02(size) > 0) {
        if (this.m6o_1) {
          var layerRect = Rect(Companion_getInstance().p5g_1, Size(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size)));
          // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
          var this_0 = _this__u8e3s4.v6k().q5w();
          var paint = obtainPaint(this);
          var tmp;
          try {
            this_0.p69(layerRect, paint);
            this.h6o(_this__u8e3s4);
            tmp = Unit_instance;
          }finally {
            this_0.o69();
          }
        } else {
          this.h6o(_this__u8e3s4);
        }
      }
    }finally {
      _this__u8e3s4.v6k().p6k().n6l(-0.0, -0.0, -right, -bottom);
    }
  };
  function get_PowersOfTen() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return PowersOfTen;
  }
  var PowersOfTen;
  function get_Mantissa64() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return Mantissa64;
  }
  var Mantissa64;
  function nextFloat(s, start, end) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    if (start === end) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      return toLong(start).o3(32).s3(toLong(toRawBits(NaN)).r3(new Long(-1, 0)));
    }
    var index = start;
    var c = charSequenceGet(s, index);
    var isNegative = c === _Char___init__impl__6a9atx(45);
    if (isNegative) {
      index = index + 1 | 0;
      if (index === end) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_0 = index;
        return toLong(index_0).o3(32).s3(toLong(toRawBits(NaN)).r3(new Long(-1, 0)));
      }
      c = charSequenceGet(s, index);
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
      var this_0 = c;
      // Inline function 'kotlin.code' call
      var this_1 = numberToChar(Char__minus_impl_a2frrh(this_0, _Char___init__impl__6a9atx(48)));
      if (!(Char__toInt_impl_vasixd(this_1) < 10)) {
        tmp = !(c === _Char___init__impl__6a9atx(46));
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_1 = index;
        return toLong(index_1).o3(32).s3(toLong(toRawBits(NaN)).r3(new Long(-1, 0)));
      }
    }
    var significand = new Long(0, 0);
    var significandStartIndex = index;
    var dataLength = s.length;
    $l$loop: while (true) {
      var tmp_0;
      if (!(index === end)) {
        // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
        var this_2 = c;
        // Inline function 'kotlin.code' call
        var this_3 = numberToChar(Char__minus_impl_a2frrh(this_2, _Char___init__impl__6a9atx(48)));
        tmp_0 = Char__toInt_impl_vasixd(this_3) < 10;
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      var tmp_1 = (new Long(10, 0)).h3(significand);
      // Inline function 'kotlin.code' call
      var this_4 = c;
      var tmp_2 = Char__toInt_impl_vasixd(this_4);
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(48);
      var tmp$ret$8 = Char__toInt_impl_vasixd(this_5);
      significand = tmp_1.f3(toLong(tmp_2 - tmp$ret$8 | 0));
      index = index + 1 | 0;
      c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
    }
    var significandEndIndex = index;
    var digitCount = index - significandStartIndex | 0;
    var exponent = 0;
    var exponentStartIndex = index;
    var exponentEndIndex = index;
    if (!(index === end) && c === _Char___init__impl__6a9atx(46)) {
      index = index + 1 | 0;
      exponentStartIndex = index;
      $l$loop_0: while ((end - index | 0) >= 4) {
        // Inline function 'androidx.compose.ui.graphics.vector.parseFourDigits' call
        var offset = index;
        // Inline function 'kotlin.code' call
        var this_6 = charSequenceGet(s, offset);
        var tmp$ret$9 = Char__toInt_impl_vasixd(this_6);
        var tmp_3 = toLong(tmp$ret$9);
        // Inline function 'kotlin.code' call
        var this_7 = charSequenceGet(s, offset + 1 | 0);
        var tmp$ret$10 = Char__toInt_impl_vasixd(this_7);
        var tmp_4 = tmp_3.s3(toLong(tmp$ret$10).o3(16));
        // Inline function 'kotlin.code' call
        var this_8 = charSequenceGet(s, offset + 2 | 0);
        var tmp$ret$11 = Char__toInt_impl_vasixd(this_8);
        var tmp_5 = tmp_4.s3(toLong(tmp$ret$11).o3(32));
        // Inline function 'kotlin.code' call
        var this_9 = charSequenceGet(s, offset + 3 | 0);
        var tmp$ret$12 = Char__toInt_impl_vasixd(this_9);
        var v = tmp_5.s3(toLong(tmp$ret$12).o3(48));
        var base = v.g3(new Long(3145776, 3145776));
        var predicate = v.f3(new Long(4587590, 4587590)).s3(base);
        var tmp_6;
        // Inline function 'kotlin.ULong.toLong' call
        var this_10 = _ULong___init__impl__c78o9k(new Long(-8323200, -8323200));
        var tmp$ret$13 = _ULong___get_data__impl__fggpzb(this_10);
        if (!predicate.r3(tmp$ret$13).equals(new Long(0, 0))) {
          tmp_6 = -1;
        } else {
          tmp_6 = base.h3(new Long(655361, 65536100)).q3(48).m1();
        }
        var digits = tmp_6;
        if (digits < 0)
          break $l$loop_0;
        significand = (new Long(10000, 0)).h3(significand).f3(toLong(digits));
        index = index + 4 | 0;
      }
      c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      $l$loop_1: while (true) {
        var tmp_7;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_11 = c;
          // Inline function 'kotlin.code' call
          var this_12 = numberToChar(Char__minus_impl_a2frrh(this_11, _Char___init__impl__6a9atx(48)));
          tmp_7 = Char__toInt_impl_vasixd(this_12) < 10;
        } else {
          tmp_7 = false;
        }
        if (!tmp_7) {
          break $l$loop_1;
        }
        var tmp_8 = (new Long(10, 0)).h3(significand);
        // Inline function 'kotlin.code' call
        var this_13 = c;
        var tmp_9 = Char__toInt_impl_vasixd(this_13);
        // Inline function 'kotlin.code' call
        var this_14 = _Char___init__impl__6a9atx(48);
        var tmp$ret$18 = Char__toInt_impl_vasixd(this_14);
        significand = tmp_8.f3(toLong(tmp_9 - tmp$ret$18 | 0));
        index = index + 1 | 0;
        c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      }
      exponent = exponentStartIndex - index | 0;
      exponentEndIndex = index;
      digitCount = digitCount - exponent | 0;
    }
    if (digitCount === 0) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_2 = index;
      return toLong(index_2).o3(32).s3(toLong(toRawBits(NaN)).r3(new Long(-1, 0)));
    }
    var exponentNumber = 0;
    // Inline function 'kotlin.code' call
    var this_15 = c;
    var tmp_10 = Char__toInt_impl_vasixd(this_15) | 32;
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(101);
    if (tmp_10 === Char__toInt_impl_vasixd(this_16)) {
      index = index + 1 | 0;
      c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      var isExponentNegative = c === _Char___init__impl__6a9atx(45);
      if (isExponentNegative || c === _Char___init__impl__6a9atx(43)) {
        index = index + 1 | 0;
      }
      c = charSequenceGet(s, index);
      $l$loop_2: while (true) {
        var tmp_11;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_17 = c;
          // Inline function 'kotlin.code' call
          var this_18 = numberToChar(Char__minus_impl_a2frrh(this_17, _Char___init__impl__6a9atx(48)));
          tmp_11 = Char__toInt_impl_vasixd(this_18) < 10;
        } else {
          tmp_11 = false;
        }
        if (!tmp_11) {
          break $l$loop_2;
        }
        if (exponentNumber < 1024) {
          var tmp_12 = imul(10, exponentNumber);
          // Inline function 'kotlin.code' call
          var this_19 = c;
          var tmp_13 = Char__toInt_impl_vasixd(this_19);
          // Inline function 'kotlin.code' call
          var this_20 = _Char___init__impl__6a9atx(48);
          exponentNumber = tmp_12 + (tmp_13 - Char__toInt_impl_vasixd(this_20) | 0) | 0;
        }
        index = index + 1 | 0;
        c = index < dataLength ? charSequenceGet(s, index) : _Char___init__impl__6a9atx(0);
      }
      if (isExponentNegative)
        exponentNumber = -exponentNumber | 0;
      exponent = exponent + exponentNumber | 0;
    }
    var tooManyDigits = false;
    if (digitCount > 19) {
      var retryIndex = significandStartIndex;
      c = charSequenceGet(s, retryIndex);
      while (!(index === end) && (c === _Char___init__impl__6a9atx(48) || c === _Char___init__impl__6a9atx(46))) {
        if (c === _Char___init__impl__6a9atx(48)) {
          digitCount = digitCount - 1 | 0;
        }
        retryIndex = retryIndex + 1 | 0;
        c = retryIndex < dataLength ? charSequenceGet(s, retryIndex) : _Char___init__impl__6a9atx(0);
      }
      if (digitCount > 19) {
        tooManyDigits = true;
        significand = new Long(0, 0);
        retryIndex = significandStartIndex;
        c = charSequenceGet(s, retryIndex);
        $l$loop_3: while (true) {
          var tmp_14;
          if (!(retryIndex === significandEndIndex)) {
            // Inline function 'kotlin.ULong.compareTo' call
            // Inline function 'kotlin.toULong' call
            var this_21 = significand;
            var this_22 = _ULong___init__impl__c78o9k(this_21);
            var other = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
            tmp_14 = ulongCompare(_ULong___get_data__impl__fggpzb(this_22), _ULong___get_data__impl__fggpzb(other)) < 0;
          } else {
            tmp_14 = false;
          }
          if (!tmp_14) {
            break $l$loop_3;
          }
          var tmp_15 = (new Long(10, 0)).h3(significand);
          // Inline function 'kotlin.code' call
          var this_23 = c;
          var tmp_16 = Char__toInt_impl_vasixd(this_23);
          // Inline function 'kotlin.code' call
          var this_24 = _Char___init__impl__6a9atx(48);
          var tmp$ret$29 = Char__toInt_impl_vasixd(this_24);
          significand = tmp_15.f3(toLong(tmp_16 - tmp$ret$29 | 0));
          retryIndex = retryIndex + 1 | 0;
          c = retryIndex < dataLength ? charSequenceGet(s, retryIndex) : _Char___init__impl__6a9atx(0);
        }
        // Inline function 'kotlin.ULong.compareTo' call
        // Inline function 'kotlin.toULong' call
        var this_25 = significand;
        var this_26 = _ULong___init__impl__c78o9k(this_25);
        var other_0 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
        if (ulongCompare(_ULong___get_data__impl__fggpzb(this_26), _ULong___get_data__impl__fggpzb(other_0)) >= 0) {
          exponent = (significandEndIndex - retryIndex | 0) + exponentNumber | 0;
        } else {
          retryIndex = exponentStartIndex;
          c = charSequenceGet(s, retryIndex);
          $l$loop_4: while (true) {
            var tmp_17;
            if (!(retryIndex === exponentEndIndex)) {
              // Inline function 'kotlin.ULong.compareTo' call
              // Inline function 'kotlin.toULong' call
              var this_27 = significand;
              var this_28 = _ULong___init__impl__c78o9k(this_27);
              var other_1 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
              tmp_17 = ulongCompare(_ULong___get_data__impl__fggpzb(this_28), _ULong___get_data__impl__fggpzb(other_1)) < 0;
            } else {
              tmp_17 = false;
            }
            if (!tmp_17) {
              break $l$loop_4;
            }
            var tmp_18 = (new Long(10, 0)).h3(significand);
            // Inline function 'kotlin.code' call
            var this_29 = c;
            var tmp_19 = Char__toInt_impl_vasixd(this_29);
            // Inline function 'kotlin.code' call
            var this_30 = _Char___init__impl__6a9atx(48);
            var tmp$ret$35 = Char__toInt_impl_vasixd(this_30);
            significand = tmp_18.f3(toLong(tmp_19 - tmp$ret$35 | 0));
            retryIndex = retryIndex + 1 | 0;
            c = retryIndex < dataLength ? charSequenceGet(s, retryIndex) : _Char___init__impl__6a9atx(0);
          }
          exponent = (exponentStartIndex - retryIndex | 0) + exponentNumber | 0;
        }
      }
    }
    var tmp_20;
    if ((-10 <= exponent ? exponent <= 10 : false) && !tooManyDigits) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.toULong' call
      var this_31 = significand;
      var this_32 = _ULong___init__impl__c78o9k(this_31);
      // Inline function 'kotlin.ULong.shl' call
      var this_33 = _ULong___init__impl__c78o9k(new Long(1, 0));
      var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_33).o3(24));
      tmp_20 = ulongCompare(_ULong___get_data__impl__fggpzb(this_32), _ULong___get_data__impl__fggpzb(other_2)) <= 0;
    } else {
      tmp_20 = false;
    }
    if (tmp_20) {
      var f = significand.v3();
      if (exponent < 0) {
        f = f / get_PowersOfTen()[-exponent | 0];
      } else {
        f = f * get_PowersOfTen()[exponent];
      }
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_3 = index;
      var value = isNegative ? -f : f;
      return toLong(index_3).o3(32).s3(toLong(toRawBits(value)).r3(new Long(-1, 0)));
    }
    if (significand.equals(new Long(0, 0))) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_4 = index;
      var value_0 = isNegative ? -0.0 : 0.0;
      return toLong(index_4).o3(32).s3(toLong(toRawBits(value_0)).r3(new Long(-1, 0)));
    }
    if (!(-126 <= exponent ? exponent <= 127 : false)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_5 = index;
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.text.substring' call
      var endIndex = index;
      // Inline function 'kotlin.js.asDynamic' call
      var this_34 = s.substring(start, endIndex);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var value_1 = toDouble(this_34);
      return toLong(index_5).o3(32).s3(toLong(toRawBits(value_1)).r3(new Long(-1, 0)));
    }
    // Inline function 'kotlin.ULong.toLong' call
    var this_35 = ULongArray__get_impl_pr71q9(get_Mantissa64(), exponent - -325 | 0);
    var significandFactor = _ULong___get_data__impl__fggpzb(this_35);
    var lz = countLeadingZeroBits(significand);
    significand = significand.o3(lz);
    // Inline function 'androidx.compose.ui.graphics.vector.fullMultiplicationHighBits' call
    var x = significand;
    var xLo = x.r3(new Long(-1, 0));
    var xHi = x.q3(32);
    var yLo = significandFactor.r3(new Long(-1, 0));
    var yHi = significandFactor.q3(32);
    var xTimesYHi = xHi.h3(yHi);
    var xTimesYMid = xLo.h3(yHi);
    var yTimesXMid = xHi.h3(yLo);
    var xTimesYLo = xLo.h3(yLo);
    var carry = yTimesXMid.f3(xTimesYLo.q3(32)).f3(xTimesYMid.r3(new Long(-1, 0)));
    var upper = xTimesYHi.f3(carry.q3(32)).f3(xTimesYMid.q3(32));
    var upperBit = upper.q3(63).m1();
    var mantissa = upper.q3(upperBit + 9 | 0);
    lz = lz + (1 ^ upperBit) | 0;
    if (upper.r3(new Long(511, 0)).equals(new Long(511, 0)) || (upper.r3(new Long(511, 0)).equals(new Long(0, 0)) && mantissa.r3(new Long(3, 0)).equals(new Long(1, 0)))) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_6 = index;
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.text.substring' call
      var endIndex_0 = index;
      // Inline function 'kotlin.js.asDynamic' call
      var this_36 = s.substring(start, endIndex_0);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var value_2 = toDouble(this_36);
      return toLong(index_6).o3(32).s3(toLong(toRawBits(value_2)).r3(new Long(-1, 0)));
    }
    // Inline function 'kotlin.Long.plus' call
    mantissa = mantissa.f3(toLong(1));
    mantissa = mantissa.q3(1);
    if (mantissa.h1(new Long(0, 2097152)) >= 0) {
      mantissa = new Long(0, 1048576);
      lz = lz - 1 | 0;
    }
    mantissa = mantissa.r3(new Long(-1, -1048577));
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_37 = new Long(217706, 0);
    var other_3 = exponent;
    var adjustedExponent = this_37.h3(toLong(other_3)).p3(16).f3(toLong(1024)).f3(toLong(63));
    // Inline function 'kotlin.Long.minus' call
    var other_4 = lz;
    var realExponent = adjustedExponent.g3(toLong(other_4));
    if (realExponent.h1(new Long(1, 0)) < 0 || realExponent.h1(new Long(2046, 0)) > 0) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_7 = index;
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.text.substring' call
      var endIndex_1 = index;
      // Inline function 'kotlin.js.asDynamic' call
      var this_38 = s.substring(start, endIndex_1);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var value_3 = toDouble(this_38);
      return toLong(index_7).o3(32).s3(toLong(toRawBits(value_3)).r3(new Long(-1, 0)));
    }
    mantissa = mantissa.s3(realExponent.o3(52));
    mantissa = mantissa.s3(isNegative ? new Long(0, -2147483648) : new Long(0, 0));
    // Inline function 'androidx.compose.ui.graphics.vector.pack' call
    var index_8 = index;
    // Inline function 'androidx.compose.ui.util.doubleFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = mantissa;
    var value_4 = doubleFromBits(bits);
    return toLong(index_8).o3(32).s3(toLong(toRawBits(value_4)).r3(new Long(-1, 0)));
  }
  var properties_initialized_FastFloatParser_kt_wcdbov;
  function _init_properties_FastFloatParser_kt__fk9z4j() {
    if (!properties_initialized_FastFloatParser_kt_wcdbov) {
      properties_initialized_FastFloatParser_kt_wcdbov = true;
      // Inline function 'kotlin.floatArrayOf' call
      PowersOfTen = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
      // Inline function 'kotlin.ulongArrayOf' call
      Mantissa64 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2118029704, -1513171909)), _ULong___init__impl__c78o9k(new Long(1573795306, -817723062)), _ULong___init__impl__c78o9k(new Long(2057363890, -2121689650)), _ULong___init__impl__c78o9k(new Long(424221215, -1578370238)), _ULong___init__impl__c78o9k(new Long(-1617207130, -899220974)), _ULong___init__impl__c78o9k(new Long(1199716560, -50284393)), _ULong___init__impl__c78o9k(new Long(-1934531710, -1642040482)), _ULong___init__impl__c78o9k(new Long(803060834, -978808778)), _ULong___init__impl__c78o9k(new Long(-1143657605, -149769149)), _ULong___init__impl__c78o9k(new Long(1432697645, -1704218454)), _ULong___init__impl__c78o9k(new Long(-356611592, -1056531244)), _ULong___init__impl__c78o9k(new Long(627977334, -246922230)), _ULong___init__impl__c78o9k(new Long(1466227658, -1764939130)), _ULong___init__impl__c78o9k(new Long(-314699076, -1132432089)), _ULong___init__impl__c78o9k(new Long(-393373845, -341798287)), _ULong___init__impl__c78o9k(new Long(827883171, -1824236665)), _ULong___init__impl__c78o9k(new Long(-38887860, -1206554008)), _ULong___init__impl__c78o9k(new Long(1025131999, -434450685)), _ULong___init__impl__c78o9k(new Long(103836587, -1882144414)), _ULong___init__impl__c78o9k(new Long(-2017687914, -1278938694)), _ULong___init__impl__c78o9k(new Long(699115580, -524931543)), _ULong___init__impl__c78o9k(new Long(-1173665499, -1938694951)), _ULong___init__impl__c78o9k(new Long(680401775, -1349626864)), _ULong___init__impl__c78o9k(new Long(850502218, -613291756)), _ULong___init__impl__c78o9k(new Long(-1615919762, -1993920084)), _ULong___init__impl__c78o9k(new Long(-946157878, -1418658281)), _ULong___init__impl__c78o9k(new Long(-1182697347, -699581027)), _ULong___init__impl__c78o9k(new Long(-1812927666, -2047850878)), _ULong___init__impl__c78o9k(new Long(955065889, -1486071773)), _ULong___init__impl__c78o9k(new Long(120090538, -783847892)), _ULong___init__impl__c78o9k(new Long(-2072427062, -2100517669)), _ULong___init__impl__c78o9k(new Long(1704433468, -1551905262)), _ULong___init__impl__c78o9k(new Long(-16941812, -866139754)), _ULong___init__impl__c78o9k(new Long(-1094919089, -8932868)), _ULong___init__impl__c78o9k(new Long(-147453519, -1616195779)), _ULong___init__impl__c78o9k(new Long(1963166749, -946502899)), _ULong___init__impl__c78o9k(new Long(-767267035, -109386800)), _ULong___init__impl__c78o9k(new Long(-2090154633, -1678979486)), _ULong___init__impl__c78o9k(new Long(608532181, -1024982533)), _ULong___init__impl__c78o9k(new Long(-313076598, -207486343)), _ULong___init__impl__c78o9k(new Long(878068950, -1740291700)), _ULong___init__impl__c78o9k(new Long(1097586188, -1101622801)), _ULong___init__impl__c78o9k(new Long(298240911, -303286677)), _ULong___init__impl__c78o9k(new Long(-350470343, -1800166910)), _ULong___init__impl__c78o9k(new Long(-1511829753, -1176466813)), _ULong___init__impl__c78o9k(new Long(-1889787191, -396841692)), _ULong___init__impl__c78o9k(new Long(-644246082, -1858638794)), _ULong___init__impl__c78o9k(new Long(-1879049427, -1249556668)), _ULong___init__impl__c78o9k(new Long(-1275069959, -488204011)), _ULong___init__impl__c78o9k(new Long(-1870660549, -1915740243)), _ULong___init__impl__c78o9k(new Long(-190842038, -1320933480)), _ULong___init__impl__c78o9k(new Long(835189277, -577425025)), _ULong___init__impl__c78o9k(new Long(2132606034, -1971503377)), _ULong___init__impl__c78o9k(new Long(1592015718, -1390637397)), _ULong___init__impl__c78o9k(new Long(916277824, -664554922)), _ULong___init__impl__c78o9k(new Long(-501068184, -2025959563)), _ULong___init__impl__c78o9k(new Long(1521148418, -1458707629)), _ULong___init__impl__c78o9k(new Long(827693699, -749642712)), _ULong___init__impl__c78o9k(new Long(517308561, -2079139431)), _ULong___init__impl__c78o9k(new Long(1720377526, -1525182465)), _ULong___init__impl__c78o9k(new Long(1076730083, -832736257)), _ULong___init__impl__c78o9k(new Long(-2011398258, -2131072897)), _ULong___init__impl__c78o9k(new Long(1780719474, -1590099297)), _ULong___init__impl__c78o9k(new Long(1152157518, -913882297)), _ULong___init__impl__c78o9k(new Long(366455074, -68611047)), _ULong___init__impl__c78o9k(new Long(-1381578315, -1653494641)), _ULong___init__impl__c78o9k(new Long(-1726972894, -993126477)), _ULong___init__impl__c78o9k(new Long(2136251179, -167666272)), _ULong___init__impl__c78o9k(new Long(1335156987, -1715404156)), _ULong___init__impl__c78o9k(new Long(1668946233, -1070513371)), _ULong___init__impl__c78o9k(new Long(-1135042680, -264399890)), _ULong___init__impl__c78o9k(new Long(901211061, -1775862667)), _ULong___init__impl__c78o9k(new Long(-2094711646, -1146086510)), _ULong___init__impl__c78o9k(new Long(602835915, -358866313)), _ULong___init__impl__c78o9k(new Long(1987385183, -1834904182)), _ULong___init__impl__c78o9k(new Long(336747830, -1219888403)), _ULong___init__impl__c78o9k(new Long(1494676612, -451118680)), _ULong___init__impl__c78o9k(new Long(934172882, -1892561911)), _ULong___init__impl__c78o9k(new Long(-2053509369, -1291960565)), _ULong___init__impl__c78o9k(new Long(1728080585, -541208882)), _ULong___init__impl__c78o9k(new Long(6308541, -1948868287)), _ULong___init__impl__c78o9k(new Long(1081627501, -1362343535)), _ULong___init__impl__c78o9k(new Long(-1869191096, -629187595)), _ULong___init__impl__c78o9k(new Long(2052981037, -2003854983)), _ULong___init__impl__c78o9k(new Long(-654999176, -1431076905)), _ULong___init__impl__c78o9k(new Long(-818748970, -715104307)), _ULong___init__impl__c78o9k(new Long(-1585459930, -2057552928)), _ULong___init__impl__c78o9k(new Long(-908083089, -1498199336)), _ULong___init__impl__c78o9k(new Long(-61362037, -799007346)), _ULong___init__impl__c78o9k(new Long(1572261463, -2109992327)), _ULong___init__impl__c78o9k(new Long(-1255898643, -1563748585)), _ULong___init__impl__c78o9k(new Long(-1569873304, -880943907)), _ULong___init__impl__c78o9k(new Long(185142018, -27438059)), _ULong___init__impl__c78o9k(new Long(652584673, -1627761523)), _ULong___init__impl__c78o9k(new Long(1889472666, -960960080)), _ULong___init__impl__c78o9k(new Long(-1933126464, -127458276)), _ULong___init__impl__c78o9k(new Long(-671333128, -1690274159)), _ULong___init__impl__c78o9k(new Long(1308317238, -1039100874)), _ULong___init__impl__c78o9k(new Long(-512087100, -225134269)), _ULong___init__impl__c78o9k(new Long(1827429210, -1751321654)), _ULong___init__impl__c78o9k(new Long(136802865, -1115410243)), _ULong___init__impl__c78o9k(new Long(1244745405, -320520980)), _ULong___init__impl__c78o9k(new Long(-1369517770, -1810938349)), _ULong___init__impl__c78o9k(new Long(-1711897212, -1189931112)), _ULong___init__impl__c78o9k(new Long(-1066129691, -413672066)), _ULong___init__impl__c78o9k(new Long(944281679, -1869157777)), _ULong___init__impl__c78o9k(new Long(106610275, -1262705397)), _ULong___init__impl__c78o9k(new Long(-940478981, -504639923)), _ULong___init__impl__c78o9k(new Long(-1661541187, -1926012688)), _ULong___init__impl__c78o9k(new Long(-1003184660, -1333774036)), _ULong___init__impl__c78o9k(new Long(-180239001, -593475721)), _ULong___init__impl__c78o9k(new Long(-112649376, -1981535062)), _ULong___init__impl__c78o9k(new Long(-1214553543, -1403177003)), _ULong___init__impl__c78o9k(new Long(629291719, -680229429)), _ULong___init__impl__c78o9k(new Long(-143563588, -2035756130)), _ULong___init__impl__c78o9k(new Long(-1253196309, -1470953338)), _ULong___init__impl__c78o9k(new Long(1654730086, -764949848)), _ULong___init__impl__c78o9k(new Long(1034206304, -2088706391)), _ULong___init__impl__c78o9k(new Long(-1928467592, -1537141165)), _ULong___init__impl__c78o9k(new Long(1884382806, -847684632)), _ULong___init__impl__c78o9k(new Long(1177739254, -2140415631)), _ULong___init__impl__c78o9k(new Long(-1749051405, -1601777715)), _ULong___init__impl__c78o9k(new Long(-38830608, -928480320)), _ULong___init__impl__c78o9k(new Long(1025203564, -86858575)), _ULong___init__impl__c78o9k(new Long(-969860509, -1664899346)), _ULong___init__impl__c78o9k(new Long(2008899836, -1007382358)), _ULong___init__impl__c78o9k(new Long(363641147, -185486123)), _ULong___init__impl__c78o9k(new Long(764146629, -1726541563)), _ULong___init__impl__c78o9k(new Long(2028925110, -1084435130)), _ULong___init__impl__c78o9k(new Long(388672740, -281802088)), _ULong___init__impl__c78o9k(new Long(242920462, -1786739041)), _ULong___init__impl__c78o9k(new Long(-770091246, -1159681978)), _ULong___init__impl__c78o9k(new Long(-2036355881, -375860648)), _ULong___init__impl__c78o9k(new Long(1411632134, -1845525641)), _ULong___init__impl__c78o9k(new Long(690798344, -1233165227)), _ULong___init__impl__c78o9k(new Long(1937239754, -467714710)), _ULong___init__impl__c78o9k(new Long(-2010450626, -1902934430)), _ULong___init__impl__c78o9k(new Long(708162189, -1304926213)), _ULong___init__impl__c78o9k(new Long(-188539087, -557415943)), _ULong___init__impl__c78o9k(new Long(955904894, -1958997700)), _ULong___init__impl__c78o9k(new Long(1194881118, -1375005301)), _ULong___init__impl__c78o9k(new Long(419859574, -645014802)), _ULong___init__impl__c78o9k(new Long(-811329591, -2013746988)), _ULong___init__impl__c78o9k(new Long(59579836, -1443441910)), _ULong___init__impl__c78o9k(new Long(-2073008853, -730560564)), _ULong___init__impl__c78o9k(new Long(-758759621, -2067213089)), _ULong___init__impl__c78o9k(new Long(-948449527, -1510274537)), _ULong___init__impl__c78o9k(new Long(-1185561908, -814101347)), _ULong___init__impl__c78o9k(new Long(-1814718017, -2119426078)), _ULong___init__impl__c78o9k(new Long(952827951, -1575540773)), _ULong___init__impl__c78o9k(new Long(117293115, -895684142)), _ULong___init__impl__c78o9k(new Long(-2000867254, -45863354)), _ULong___init__impl__c78o9k(new Long(360070702, -1639277332)), _ULong___init__impl__c78o9k(new Long(450088378, -975354841)), _ULong___init__impl__c78o9k(new Long(-511131352, -145451728)), _ULong___init__impl__c78o9k(new Long(-1930069831, -1701520066)), _ULong___init__impl__c78o9k(new Long(808638183, -1053158258)), _ULong___init__impl__c78o9k(new Long(-1136685919, -242705999)), _ULong___init__impl__c78o9k(new Long(363313125, -1762303985)), _ULong___init__impl__c78o9k(new Long(-619600418, -1129138158)), _ULong___init__impl__c78o9k(new Long(-1848242346, -337680873)), _ULong___init__impl__c78o9k(new Long(-1155151467, -1821663282)), _ULong___init__impl__c78o9k(new Long(1777286139, -1203337278)), _ULong___init__impl__c78o9k(new Long(74124026, -430429773)), _ULong___init__impl__c78o9k(new Long(-490543396, -1879631345)), _ULong___init__impl__c78o9k(new Long(-613179245, -1275797357)), _ULong___init__impl__c78o9k(new Long(-766474056, -521004872)), _ULong___init__impl__c78o9k(new Long(-2089659021, -1936240781)), _ULong___init__impl__c78o9k(new Long(1682893519, -1346559152)), _ULong___init__impl__c78o9k(new Long(2103616899, -609457116)), _ULong___init__impl__c78o9k(new Long(-832723086, -1991523434)), _ULong___init__impl__c78o9k(new Long(-2114645681, -1415662468)), _ULong___init__impl__c78o9k(new Long(-1569565278, -695836261)), _ULong___init__impl__c78o9k(new Long(1166505349, -2045510399)), _ULong___init__impl__c78o9k(new Long(-1763093785, -1483146175)), _ULong___init__impl__c78o9k(new Long(-56383584, -780190895)), _ULong___init__impl__c78o9k(new Long(1038502084, -2098232045)), _ULong___init__impl__c78o9k(new Long(224385781, -1549048232)), _ULong___init__impl__c78o9k(new Long(280482227, -862568466)), _ULong___init__impl__c78o9k(new Long(-1796880865, -4468759)), _ULong___init__impl__c78o9k(new Long(-49308717, -1613405711)), _ULong___init__impl__c78o9k(new Long(2085847752, -943015314)), _ULong___init__impl__c78o9k(new Long(459826043, -105027318)), _ULong___init__impl__c78o9k(new Long(1361133101, -1676254810)), _ULong___init__impl__c78o9k(new Long(-446067272, -1021576689)), _ULong___init__impl__c78o9k(new Long(-557584090, -203229037)), _ULong___init__impl__c78o9k(new Long(1798993591, -1737630884)), _ULong___init__impl__c78o9k(new Long(-2046225307, -1098296781)), _ULong___init__impl__c78o9k(new Long(1737185663, -299129152)), _ULong___init__impl__c78o9k(new Long(1085741039, -1797568456)), _ULong___init__impl__c78o9k(new Long(1357176299, -1173218746)), _ULong___init__impl__c78o9k(new Long(-451013274, -392781609)), _ULong___init__impl__c78o9k(new Long(-281883296, -1856101242)), _ULong___init__impl__c78o9k(new Long(-1426095944, -1246384728)), _ULong___init__impl__c78o9k(new Long(-708878106, -484239086)), _ULong___init__impl__c78o9k(new Long(-979919729, -1913262165)), _ULong___init__impl__c78o9k(new Long(-1224899661, -1317835882)), _ULong___init__impl__c78o9k(new Long(1690100896, -573553028)), _ULong___init__impl__c78o9k(new Long(-1091170588, -1969083379)), _ULong___init__impl__c78o9k(new Long(783520413, -1387612399)), _ULong___init__impl__c78o9k(new Long(2053142340, -660773675)), _ULong___init__impl__c78o9k(new Long(1820084875, -2023596283)), _ULong___init__impl__c78o9k(new Long(-946119379, -1455753530)), _ULong___init__impl__c78o9k(new Long(2038576249, -745950088)), _ULong___init__impl__c78o9k(new Long(1274110155, -2076831541)), _ULong___init__impl__c78o9k(new Long(518895870, -1522297602)), _ULong___init__impl__c78o9k(new Long(-1498863810, -829130179)), _ULong___init__impl__c78o9k(new Long(-2010531705, -2128819098)), _ULong___init__impl__c78o9k(new Long(708060840, -1587282048)), _ULong___init__impl__c78o9k(new Long(885076050, -910360736)), _ULong___init__impl__c78o9k(new Long(1106345063, -64209096)), _ULong___init__impl__c78o9k(new Long(691465664, -1650743421)), _ULong___init__impl__c78o9k(new Long(-209409743, -989687453)), _ULong___init__impl__c78o9k(new Long(-261762179, -163367492)), _ULong___init__impl__c78o9k(new Long(373269550, -1712717418)), _ULong___init__impl__c78o9k(new Long(-1680896711, -1067154949)), _ULong___init__impl__c78o9k(new Long(-2101120888, -260201862)), _ULong___init__impl__c78o9k(new Long(-1850071467, -1773238900)), _ULong___init__impl__c78o9k(new Long(-1238847510, -1142806801)), _ULong___init__impl__c78o9k(new Long(-1548559387, -354766677)), _ULong___init__impl__c78o9k(new Long(1179634031, -1832341909)), _ULong___init__impl__c78o9k(new Long(400800715, -1216685562)), _ULong___init__impl__c78o9k(new Long(-1646482755, -447115129)), _ULong___init__impl__c78o9k(new Long(-1029051722, -1890059692)), _ULong___init__impl__c78o9k(new Long(-212572828, -1288832791)), _ULong___init__impl__c78o9k(new Long(1881767613, -537299164)), _ULong___init__impl__c78o9k(new Long(-971378890, -1946424714)), _ULong___init__impl__c78o9k(new Long(2007001859, -1359289068)), _ULong___init__impl__c78o9k(new Long(-1786214972, -625369511)), _ULong___init__impl__c78o9k(new Long(-42642533, -2001468681)), _ULong___init__impl__c78o9k(new Long(-53303167, -1428094027)), _ULong___init__impl__c78o9k(new Long(2080854690, -711375709)), _ULong___init__impl__c78o9k(new Long(763663269, -2055222554)), _ULong___init__impl__c78o9k(new Long(-1192904562, -1495286369)), _ULong___init__impl__c78o9k(new Long(-1491130702, -795366137)), _ULong___init__impl__c78o9k(new Long(-931956689, -2107716572)), _ULong___init__impl__c78o9k(new Long(-91204037, -1560903891)), _ULong___init__impl__c78o9k(new Long(2033478602, -877388039)), _ULong___init__impl__c78o9k(new Long(-679377220, -22993225)), _ULong___init__impl__c78o9k(new Long(-424610762, -1624983502)), _ULong___init__impl__c78o9k(new Long(-1604505277, -957487553)), _ULong___init__impl__c78o9k(new Long(-2005631596, -123117617)), _ULong___init__impl__c78o9k(new Long(-1253519748, -1687561247)), _ULong___init__impl__c78o9k(new Long(580583963, -1035709734)), _ULong___init__impl__c78o9k(new Long(-1421753694, -220895344)), _ULong___init__impl__c78o9k(new Long(1795758501, -1748672326)), _ULong___init__impl__c78o9k(new Long(97214479, -1112098583)), _ULong___init__impl__c78o9k(new Long(1195259923, -316381405)), _ULong___init__impl__c78o9k(new Long(210166539, -1808351114)), _ULong___init__impl__c78o9k(new Long(-1884775474, -1186697069)), _ULong___init__impl__c78o9k(new Long(1938997954, -409629512)), _ULong___init__impl__c78o9k(new Long(1211873721, -1866631181)), _ULong___init__impl__c78o9k(new Long(441100328, -1259547152)), _ULong___init__impl__c78o9k(new Long(551375410, -500692116)), _ULong___init__impl__c78o9k(new Long(-1802874017, -1923545309)), _ULong___init__impl__c78o9k(new Long(2041374775, -1330689812)), _ULong___init__impl__c78o9k(new Long(-1743248828, -589620441)), _ULong___init__impl__c78o9k(new Long(-1089530517, -1979125512)), _ULong___init__impl__c78o9k(new Long(-288171323, -1400165066)), _ULong___init__impl__c78o9k(new Long(-1433955977, -676464508)), _ULong___init__impl__c78o9k(new Long(-359351574, -2033403054)), _ULong___init__impl__c78o9k(new Long(-1522931291, -1468011993)), _ULong___init__impl__c78o9k(new Long(-1903664114, -761273167)), _ULong___init__impl__c78o9k(new Long(-116048247, -2086408466)), _ULong___init__impl__c78o9k(new Long(-1218802133, -1534268758)), _ULong___init__impl__c78o9k(new Long(1697722806, -844094123)), _ULong___init__impl__c78o9k(new Long(1597947665, -2138171563)), _ULong___init__impl__c78o9k(new Long(-1223790890, -1598972630)), _ULong___init__impl__c78o9k(new Long(1691486859, -924973963)), _ULong___init__impl__c78o9k(new Long(-1106866898, -82475630)), _ULong___init__impl__c78o9k(new Long(-1228662723, -1662160005)), _ULong___init__impl__c78o9k(new Long(-1535828404, -1003958182)), _ULong___init__impl__c78o9k(new Long(1301439967, -181205903)), _ULong___init__impl__c78o9k(new Long(-797212757, -1723866426)), _ULong___init__impl__c78o9k(new Long(-2070257770, -1081091208)), _ULong___init__impl__c78o9k(new Long(-1514080388, -277622186)), _ULong___init__impl__c78o9k(new Long(664312493, -1784126602)), _ULong___init__impl__c78o9k(new Long(-1317093031, -1156416429)), _ULong___init__impl__c78o9k(new Long(-1646366289, -371778712)), _ULong___init__impl__c78o9k(new Long(1655375629, -1842974431)), _ULong___init__impl__c78o9k(new Long(-1152005935, -1229976215)), _ULong___init__impl__c78o9k(new Long(707476229, -463728444)), _ULong___init__impl__c78o9k(new Long(-1705311005, -1900443014)), _ULong___init__impl__c78o9k(new Long(1089586716, -1301811943)), _ULong___init__impl__c78o9k(new Long(-1859242077, -553523105)), _ULong___init__impl__c78o9k(new Long(-1162026298, -1956564677)), _ULong___init__impl__c78o9k(new Long(-1452532873, -1371964022)), _ULong___init__impl__c78o9k(new Long(1405559381, -641213203)), _ULong___init__impl__c78o9k(new Long(1415345525, -2011370988)), _ULong___init__impl__c78o9k(new Long(1769181906, -1440471911)), _ULong___init__impl__c78o9k(new Long(-1009748089, -726848065)), _ULong___init__impl__c78o9k(new Long(-631092556, -2064892777)), _ULong___init__impl__c78o9k(new Long(-788865695, -1507374147)), _ULong___init__impl__c78o9k(new Long(1161401530, -810475859)), _ULong___init__impl__c78o9k(new Long(1262746868, -2117160148)), _ULong___init__impl__c78o9k(new Long(1578433585, -1572708361)), _ULong___init__impl__c78o9k(new Long(899300158, -892143627)), _ULong___init__impl__c78o9k(new Long(-2097100275, -41437710)), _ULong___init__impl__c78o9k(new Long(-1847558584, -1636511305)), _ULong___init__impl__c78o9k(new Long(1985519066, -971897307)), _ULong___init__impl__c78o9k(new Long(-739326639, -141129810)), _ULong___init__impl__c78o9k(new Long(1148533586, -1698818867)), _ULong___init__impl__c78o9k(new Long(-1785558489, -1049781760)), _ULong___init__impl__c78o9k(new Long(-1158206287, -238485376)), _ULong___init__impl__c78o9k(new Long(1960475630, -1759666096)), _ULong___init__impl__c78o9k(new Long(-1844372758, -1125840796)), _ULong___init__impl__c78o9k(new Long(-1231724123, -333559171)), _ULong___init__impl__c78o9k(new Long(-1843569401, -1819087218)), _ULong___init__impl__c78o9k(new Long(916763721, -1200117198)), _ULong___init__impl__c78o9k(new Long(-1001528997, -426404674)), _ULong___init__impl__c78o9k(new Long(984657113, -1877115657)), _ULong___init__impl__c78o9k(new Long(157079567, -1272652747)), _ULong___init__impl__c78o9k(new Long(1270091283, -517074110)), _ULong___init__impl__c78o9k(new Long(1867548875, -1933784055)), _ULong___init__impl__c78o9k(new Long(-886789378, -1343488245)), _ULong___init__impl__c78o9k(new Long(-1108486722, -605618482)), _ULong___init__impl__c78o9k(new Long(917808535, -1989124287)), _ULong___init__impl__c78o9k(new Long(-2073964804, -1412663535)), _ULong___init__impl__c78o9k(new Long(-444972356, -692087595)), _ULong___init__impl__c78o9k(new Long(-1351849547, -2043167483)), _ULong___init__impl__c78o9k(new Long(457671715, -1480217529)), _ULong___init__impl__c78o9k(new Long(-501652181, -776530088)), _ULong___init__impl__c78o9k(new Long(-1924145349, -2095944041)), _ULong___init__impl__c78o9k(new Long(1889785610, -1546188227)), _ULong___init__impl__c78o9k(new Long(-858993460, -858993460)), _ULong___init__impl__c78o9k(new Long(0, -2147483648)), _ULong___init__impl__c78o9k(new Long(0, -1610612736)), _ULong___init__impl__c78o9k(new Long(0, -939524096)), _ULong___init__impl__c78o9k(new Long(0, -100663296)), _ULong___init__impl__c78o9k(new Long(0, -1673527296)), _ULong___init__impl__c78o9k(new Long(0, -1018167296)), _ULong___init__impl__c78o9k(new Long(0, -198967296)), _ULong___init__impl__c78o9k(new Long(0, -1734967296)), _ULong___init__impl__c78o9k(new Long(0, -1094967296)), _ULong___init__impl__c78o9k(new Long(0, -294967296)), _ULong___init__impl__c78o9k(new Long(0, -1794967296)), _ULong___init__impl__c78o9k(new Long(0, -1169967296)), _ULong___init__impl__c78o9k(new Long(0, -388717296)), _ULong___init__impl__c78o9k(new Long(0, -1853561046)), _ULong___init__impl__c78o9k(new Long(-2147483648, -1243209484)), _ULong___init__impl__c78o9k(new Long(-1610612736, -480270031)), _ULong___init__impl__c78o9k(new Long(67108864, -1910781505)), _ULong___init__impl__c78o9k(new Long(-989855744, -1314735058)), _ULong___init__impl__c78o9k(new Long(1983905792, -569676998)), _ULong___init__impl__c78o9k(new Long(-1981284352, -1966660860)), _ULong___init__impl__c78o9k(new Long(-1402863616, -1384584251)), _ULong___init__impl__c78o9k(new Long(393904128, -656988489)), _ULong___init__impl__c78o9k(new Long(1856802816, -2021230542)), _ULong___init__impl__c78o9k(new Long(173519872, -1452796353)), _ULong___init__impl__c78o9k(new Long(-856841984, -742253618)), _ULong___init__impl__c78o9k(new Long(1075086496, -2074521247)), _ULong___init__impl__c78o9k(new Long(-1877367352, -1519409735)), _ULong___init__impl__c78o9k(new Long(-199225542, -825520345)), _ULong___init__impl__c78o9k(new Long(-124515964, -2126562952)), _ULong___init__impl__c78o9k(new Long(918096869, -1584461865)), _ULong___init__impl__c78o9k(new Long(73879262, -906835507)), _ULong___init__impl__c78o9k(new Long(1166090902, -59802560)), _ULong___init__impl__c78o9k(new Long(728806813, -1647989336)), _ULong___init__impl__c78o9k(new Long(911008517, -986244846)), _ULong___init__impl__c78o9k(new Long(-1008723002, -159064234)), _ULong___init__impl__c78o9k(new Long(980160860, -1710027882)), _ULong___init__impl__c78o9k(new Long(-922282573, -1063793029)), _ULong___init__impl__c78o9k(new Long(-1152853216, -255999462)), _ULong___init__impl__c78o9k(new Long(-1257404172, -1770612400)), _ULong___init__impl__c78o9k(new Long(-498013391, -1139523676)), _ULong___init__impl__c78o9k(new Long(451225085, -350662770)), _ULong___init__impl__c78o9k(new Long(-791726146, -1829776968)), _ULong___init__impl__c78o9k(new Long(84084141, -1213479385)), _ULong___init__impl__c78o9k(new Long(-968636647, -443107408)), _ULong___init__impl__c78o9k(new Long(2078956655, -1887554866)), _ULong___init__impl__c78o9k(new Long(451212171, -1285701758)), _ULong___init__impl__c78o9k(new Long(-1583468434, -533385374)), _ULong___init__impl__c78o9k(new Long(-1526538683, -1943978595)), _ULong___init__impl__c78o9k(new Long(239310294, -1356231419)), _ULong___init__impl__c78o9k(new Long(1372879692, -621547450)), _ULong___init__impl__c78o9k(new Long(-215692017, -1999079893)), _ULong___init__impl__c78o9k(new Long(-269615021, -1425108042)), _ULong___init__impl__c78o9k(new Long(-1410760600, -707643228)), _ULong___init__impl__c78o9k(new Long(-344854463, -2052889754)), _ULong___init__impl__c78o9k(new Long(-1504809903, -1492370368)), _ULong___init__impl__c78o9k(new Long(-807270555, -791721136)), _ULong___init__impl__c78o9k(new Long(-2115156833, -2105438446)), _ULong___init__impl__c78o9k(new Long(577279431, -1558056233)), _ULong___init__impl__c78o9k(new Long(-352142535, -873828468)), _ULong___init__impl__c78o9k(new Long(633563656, -18543760)), _ULong___init__impl__c78o9k(new Long(395977285, -1622202586)), _ULong___init__impl__c78o9k(new Long(-1652512042, -954011409)), _ULong___init__impl__c78o9k(new Long(-2065640053, -118772437)), _ULong___init__impl__c78o9k(new Long(856458615, -1684845509)), _ULong___init__impl__c78o9k(new Long(-3168555, -1032315063)), _ULong___init__impl__c78o9k(new Long(2143522954, -216652004)), _ULong___init__impl__c78o9k(new Long(-807781802, -1746020239)), _ULong___init__impl__c78o9k(new Long(1137756396, -1108783474)), _ULong___init__impl__c78o9k(new Long(-725288153, -312237519)), _ULong___init__impl__c78o9k(new Long(620436728, -1805761185)), _ULong___init__impl__c78o9k(new Long(-298195914, -1183459658)), _ULong___init__impl__c78o9k(new Long(-1446486716, -405582748)), _ULong___init__impl__c78o9k(new Long(-367183286, -1864101954)), _ULong___init__impl__c78o9k(new Long(-1532720931, -1256385618)), _ULong___init__impl__c78o9k(new Long(1305324308, -496740198)), _ULong___init__impl__c78o9k(new Long(1889569516, -1921075360)), _ULong___init__impl__c78o9k(new Long(-1933005400, -1327602376)), _ULong___init__impl__c78o9k(new Long(-1342514926, -585761146)), _ULong___init__impl__c78o9k(new Long(771540907, -1976713452)), _ULong___init__impl__c78o9k(new Long(964426134, -1397149991)), _ULong___init__impl__c78o9k(new Long(-2015692805, -672695665)), _ULong___init__impl__c78o9k(new Long(-1259808003, -2031047527)), _ULong___init__impl__c78o9k(new Long(572723644, -1465067584)), _ULong___init__impl__c78o9k(new Long(715904555, -757592656)), _ULong___init__impl__c78o9k(new Long(447440347, -2084108146)), _ULong___init__impl__c78o9k(new Long(-1588183214, -1531393359)), _ULong___init__impl__c78o9k(new Long(162254630, -840499874)), _ULong___init__impl__c78o9k(new Long(-972332680, -2135925158)), _ULong___init__impl__c78o9k(new Long(2005809622, -1596164623)), _ULong___init__impl__c78o9k(new Long(-713963444, -921463955)), _ULong___init__impl__c78o9k(new Long(1255029343, -78088119)), _ULong___init__impl__c78o9k(new Long(-826219397, -1659417811)), _ULong___init__impl__c78o9k(new Long(1114709402, -1000530439)), _ULong___init__impl__c78o9k(new Long(-1827838720, -176921225)), _ULong___init__impl__c78o9k(new Long(-1142399200, -1721188502)), _ULong___init__impl__c78o9k(new Long(1793226472, -1077743803)), _ULong___init__impl__c78o9k(new Long(-979692382, -273437930)), _ULong___init__impl__c78o9k(new Long(998304997, -1781511442)), _ULong___init__impl__c78o9k(new Long(-899602401, -1153147479)), _ULong___init__impl__c78o9k(new Long(1022980646, -367692524)), _ULong___init__impl__c78o9k(new Long(-1508120744, -1840420564)), _ULong___init__impl__c78o9k(new Long(-811409106, -1226783881)), _ULong___init__impl__c78o9k(new Long(-1014261382, -459738027)), _ULong___init__impl__c78o9k(new Long(-1707655188, -1897949003)), _ULong___init__impl__c78o9k(new Long(12914663, -1298694429)), _ULong___init__impl__c78o9k(new Long(-1057598495, -549626213)), _ULong___init__impl__c78o9k(new Long(1486484588, -1954129119)), _ULong___init__impl__c78o9k(new Long(-1363119737, -1368919575)), _ULong___init__impl__c78o9k(new Long(443583977, -637407644)), _ULong___init__impl__c78o9k(new Long(-1870243662, -2008992514)), _ULong___init__impl__c78o9k(new Long(883420894, -1437498818)), _ULong___init__impl__c78o9k(new Long(-1043207530, -723131699)), _ULong___init__impl__c78o9k(new Long(-1725746530, -2062570048)), _ULong___init__impl__c78o9k(new Long(-1083441339, -1504470736)), _ULong___init__impl__c78o9k(new Long(-280559850, -806846596)), _ULong___init__impl__c78o9k(new Long(361521006, -2114891858)), _ULong___init__impl__c78o9k(new Long(-1695582391, -1569872999)), _ULong___init__impl__c78o9k(new Long(28005660, -888599424)), _ULong___init__impl__c78o9k(new Long(35007075, -37007456)), _ULong___init__impl__c78o9k(new Long(21879422, -1633742396)), _ULong___init__impl__c78o9k(new Long(27349277, -968436171)), _ULong___init__impl__c78o9k(new Long(1107928421, -136803390)), _ULong___init__impl__c78o9k(new Long(1766197087, -1696114855)), _ULong___init__impl__c78o9k(new Long(-1013479113, -1046401745)), _ULong___init__impl__c78o9k(new Long(-1266848892, -234260357)), _ULong___init__impl__c78o9k(new Long(1355703090, -1757025459)), _ULong___init__impl__c78o9k(new Long(-1526596609, -1122540000)), _ULong___init__impl__c78o9k(new Long(-834503937, -329433176)), _ULong___init__impl__c78o9k(new Long(-2132177697, -1816508471)), _ULong___init__impl__c78o9k(new Long(-517738473, -1196893765)), _ULong___init__impl__c78o9k(new Long(-647173091, -422375382)), _ULong___init__impl__c78o9k(new Long(-941354094, -1874597350)), _ULong___init__impl__c78o9k(new Long(2044532855, -1269504863)), _ULong___init__impl__c78o9k(new Long(-665559404, -513139255)), _ULong___init__impl__c78o9k(new Long(657767197, -1931324770)), _ULong___init__impl__c78o9k(new Long(-1325274652, -1340414139)), _ULong___init__impl__c78o9k(new Long(490890333, -601775849)), _ULong___init__impl__c78o9k(new Long(1917419194, -1986722642)), _ULong___init__impl__c78o9k(new Long(249290345, -1409661478)), _ULong___init__impl__c78o9k(new Long(-1835870717, -688335024)), _ULong___init__impl__c78o9k(new Long(1536935362, -2040822126)), _ULong___init__impl__c78o9k(new Long(-226314446, -1477285834)), _ULong___init__impl__c78o9k(new Long(-1356634881, -772865468)), _ULong___init__impl__c78o9k(new Long(-311025889, -2093653654)), _ULong___init__impl__c78o9k(new Long(-1462524185, -1543325243)), _ULong___init__impl__c78o9k(new Long(319328417, -855414729)), _ULong___init__impl__c78o9k(new Long(1810192996, -2145246942)), _ULong___init__impl__c78o9k(new Long(115257597, -1607816853)), _ULong___init__impl__c78o9k(new Long(-929669827, -936029243)), _ULong___init__impl__c78o9k(new Long(985396364, -96294729)), _ULong___init__impl__c78o9k(new Long(-2068481833, -1670796942)), _ULong___init__impl__c78o9k(new Long(635623181, -1014754353)), _ULong___init__impl__c78o9k(new Long(-279212847, -194701118)), _ULong___init__impl__c78o9k(new Long(-711378942, -1732300935)), _ULong___init__impl__c78o9k(new Long(1258259971, -1091634344)), _ULong___init__impl__c78o9k(new Long(1572824964, -290801106)), _ULong___init__impl__c78o9k(new Long(-90726222, -1792363428)), _ULong___init__impl__c78o9k(new Long(960334047, -1166712460)), _ULong___init__impl__c78o9k(new Long(1200417559, -384648751)), _ULong___init__impl__c78o9k(new Long(-860351762, -1851018206)), _ULong___init__impl__c78o9k(new Long(2145785770, -1240030933)), _ULong___init__impl__c78o9k(new Long(1608490388, -476296842)), _ULong___init__impl__c78o9k(new Long(-68435331, -1908298263)), _ULong___init__impl__c78o9k(new Long(2061939484, -1311631004)), _ULong___init__impl__c78o9k(new Long(-1717542941, -565796931)), _ULong___init__impl__c78o9k(new Long(-2147206162, -1964235818)), _ULong___init__impl__c78o9k(new Long(537217769, -1381552948)), _ULong___init__impl__c78o9k(new Long(671522212, -653199361)), _ULong___init__impl__c78o9k(new Long(2030314118, -2018862337)), _ULong___init__impl__c78o9k(new Long(1464150824, -1449836097)), _ULong___init__impl__c78o9k(new Long(756446706, -738553297)), _ULong___init__impl__c78o9k(new Long(2083391927, -2072208547)), _ULong___init__impl__c78o9k(new Long(-616985563, -1516518860)), _ULong___init__impl__c78o9k(new Long(302509870, -821906750)), _ULong___init__impl__c78o9k(new Long(1262810493, -2124304455)), _ULong___init__impl__c78o9k(new Long(-1642712356, -1581638745)), _ULong___init__impl__c78o9k(new Long(-2053390445, -903306607)), _ULong___init__impl__c78o9k(new Long(-419254408, -55391435)), _ULong___init__impl__c78o9k(new Long(-1335775829, -1645232383)), _ULong___init__impl__c78o9k(new Long(477763862, -982798654)), _ULong___init__impl__c78o9k(new Long(-1550278821, -154756494)), _ULong___init__impl__c78o9k(new Long(-1505795175, -1707335545)), _ULong___init__impl__c78o9k(new Long(-1882243969, -1060427607)), _ULong___init__impl__c78o9k(new Long(-205321313, -251792685)), _ULong___init__impl__c78o9k(new Long(2019157827, -1767983164)), _ULong___init__impl__c78o9k(new Long(-1771020012, -1136237131)), _ULong___init__impl__c78o9k(new Long(-66291367, -346554590)), _ULong___init__impl__c78o9k(new Long(-578303016, -1827209355)), _ULong___init__impl__c78o9k(new Long(1424604878, -1210269869)), _ULong___init__impl__c78o9k(new Long(707014273, -439095512)), _ULong___init__impl__c78o9k(new Long(441883920, -1885047431)), _ULong___init__impl__c78o9k(new Long(1626096725, -1282567465)), _ULong___init__impl__c78o9k(new Long(958879082, -529467507)), _ULong___init__impl__c78o9k(new Long(1136170338, -1941529928)), _ULong___init__impl__c78o9k(new Long(1420212923, -1353170586)), _ULong___init__impl__c78o9k(new Long(-372217494, -617721409)), _ULong___init__impl__c78o9k(new Long(-232635934, -1996688617)), _ULong___init__impl__c78o9k(new Long(-290794918, -1422118947)), _ULong___init__impl__c78o9k(new Long(1783990001, -703906859)), _ULong___init__impl__c78o9k(new Long(1651864662, -2050554523)), _ULong___init__impl__c78o9k(new Long(-1156394644, -1489451330)), _ULong___init__impl__c78o9k(new Long(1775732167, -788072338)), _ULong___init__impl__c78o9k(new Long(36090780, -2103157947)), _ULong___init__impl__c78o9k(new Long(1118855300, -1555205610)), _ULong___init__impl__c78o9k(new Long(-748914523, -870265189)), _ULong___init__impl__c78o9k(new Long(-936143154, -14089662)), _ULong___init__impl__c78o9k(new Long(-1121960383, -1619418775)), _ULong___init__impl__c78o9k(new Long(745033169, -950531644)), _ULong___init__impl__c78o9k(new Long(931291461, -114422731)), _ULong___init__impl__c78o9k(new Long(1118928075, -1682126943)), _ULong___init__impl__c78o9k(new Long(-1822565378, -1028916855)), _ULong___init__impl__c78o9k(new Long(-130723074, -212404245)), _ULong___init__impl__c78o9k(new Long(2065781726, -1743365389)), _ULong___init__impl__c78o9k(new Long(1508485334, -1105464912)), _ULong___init__impl__c78o9k(new Long(1885606668, -308089316)), _ULong___init__impl__c78o9k(new Long(-968979481, -1803168559)), _ULong___init__impl__c78o9k(new Long(936259297, -1180218874)), _ULong___init__impl__c78o9k(new Long(-977159527, -401531769)), _ULong___init__impl__c78o9k(new Long(-610724704, -1861570092)), _ULong___init__impl__c78o9k(new Long(310335944, -1253220790)), _ULong___init__impl__c78o9k(new Long(-1759563718, -492784164)), _ULong___init__impl__c78o9k(new Long(-562856412, -1918602839)), _ULong___init__impl__c78o9k(new Long(1443913133, -1324511724)), _ULong___init__impl__c78o9k(new Long(1804891416, -581897831)), _ULong___init__impl__c78o9k(new Long(-482555601, -1974298881)), _ULong___init__impl__c78o9k(new Long(-603194501, -1394131777)), _ULong___init__impl__c78o9k(new Long(-753993126, -668922897)), _ULong___init__impl__c78o9k(new Long(-471245704, -2028689547)), _ULong___init__impl__c78o9k(new Long(1558426518, -1462120109)), _ULong___init__impl__c78o9k(new Long(874291324, -753908312)), _ULong___init__impl__c78o9k(new Long(546432077, -2081805431)), _ULong___init__impl__c78o9k(new Long(1756781920, -1528514965)), _ULong___init__impl__c78o9k(new Long(1122235577, -836901882)), _ULong___init__impl__c78o9k(new Long(-372344589, -2133676413)), _ULong___init__impl__c78o9k(new Long(-465430736, -1593353692)), _ULong___init__impl__c78o9k(new Long(491953404, -917950290)), _ULong___init__impl__c78o9k(new Long(-1532541892, -73696039)), _ULong___init__impl__c78o9k(new Long(115903141, -1656672760)), _ULong___init__impl__c78o9k(new Long(144878926, -997099126)), _ULong___init__impl__c78o9k(new Long(-1966384990, -172632084)), _ULong___init__impl__c78o9k(new Long(-692119707, -1718507789)), _ULong___init__impl__c78o9k(new Long(-865149633, -1074392912)), _ULong___init__impl__c78o9k(new Long(-7695218, -269249316)), _ULong___init__impl__c78o9k(new Long(532061401, -1778893558)), _ULong___init__impl__c78o9k(new Long(-1482406897, -1149875124)), _ULong___init__impl__c78o9k(new Long(-779266797, -363602081)), _ULong___init__impl__c78o9k(new Long(-487041748, -1837864037)), _ULong___init__impl__c78o9k(new Long(-608802185, -1223588222)), _ULong___init__impl__c78o9k(new Long(-1834744555, -455743453)), _ULong___init__impl__c78o9k(new Long(1000768301, -1895452394)), _ULong___init__impl__c78o9k(new Long(-896523272, -1295573669)), _ULong___init__impl__c78o9k(new Long(-1120654090, -545725262)), _ULong___init__impl__c78o9k(new Long(-1237279718, -1951691025)), _ULong___init__impl__c78o9k(new Long(-1546599648, -1365871957)), _ULong___init__impl__c78o9k(new Long(-1933249560, -633598122)), _ULong___init__impl__c78o9k(new Long(402331761, -2006611562)), _ULong___init__impl__c78o9k(new Long(-1644568947, -1434522629)), _ULong___init__impl__c78o9k(new Long(-2055711183, -719411462)), _ULong___init__impl__c78o9k(new Long(-1821690402, -2060244900)), _ULong___init__impl__c78o9k(new Long(-1203371178, -1501564301)), _ULong___init__impl__c78o9k(new Long(-1504213972, -803213552)), _ULong___init__impl__c78o9k(new Long(1744220827, -2112621206)), _ULong___init__impl__c78o9k(new Long(32792386, -1567034683)), _ULong___init__impl__c78o9k(new Long(1114732307, -885051530)), _ULong___init__impl__c78o9k(new Long(-754068265, -32572589)), _ULong___init__impl__c78o9k(new Long(1676190982, -1630970604)), _ULong___init__impl__c78o9k(new Long(2095238728, -964971431)), _ULong___init__impl__c78o9k(new Long(-602177062, -132472465)), _ULong___init__impl__c78o9k(new Long(-376360664, -1693408027)), _ULong___init__impl__c78o9k(new Long(1677032818, -1043018209)), _ULong___init__impl__c78o9k(new Long(1022549199, -230030937)), _ULong___init__impl__c78o9k(new Long(-2045261311, -1754382072)), _ULong___init__impl__c78o9k(new Long(-1482834814, -1119235766)), _ULong___init__impl__c78o9k(new Long(1367681954, -325302883)), _ULong___init__impl__c78o9k(new Long(1391672133, -1813927038)), _ULong___init__impl__c78o9k(new Long(-407893481, -1193666974)), _ULong___init__impl__c78o9k(new Long(-1583608675, -418341893)), _ULong___init__impl__c78o9k(new Long(1157728226, -1872076419)), _ULong___init__impl__c78o9k(new Long(-1774065190, -1266353700)), _ULong___init__impl__c78o9k(new Long(-1143839663, -509200301)), _ULong___init__impl__c78o9k(new Long(1432583858, -1928862924)), _ULong___init__impl__c78o9k(new Long(1790729823, -1337336831)), _ULong___init__impl__c78o9k(new Long(-982813193, -597929215)), _ULong___init__impl__c78o9k(new Long(459483578, -1984318495)), _ULong___init__impl__c78o9k(new Long(1648096297, -1406656295)), _ULong___init__impl__c78o9k(new Long(-1161105101, -684578545)), _ULong___init__impl__c78o9k(new Long(-725690688, -2038474327)), _ULong___init__impl__c78o9k(new Long(1240370288, -1474351084)), _ULong___init__impl__c78o9k(new Long(1550462860, -769197031)), _ULong___init__impl__c78o9k(new Long(-641573449, -2091360881)), _ULong___init__impl__c78o9k(new Long(-801966811, -1540459277)), _ULong___init__impl__c78o9k(new Long(-1002458513, -851832272)), _ULong___init__impl__c78o9k(new Long(2057817989, -2143007906)), _ULong___init__impl__c78o9k(new Long(424788838, -1605018058)), _ULong___init__impl__c78o9k(new Long(-1616497600, -932530749)), _ULong___init__impl__c78o9k(new Long(-2020622000, -91921612)), _ULong___init__impl__c78o9k(new Long(-726017838, -1668063744)), _ULong___init__impl__c78o9k(new Long(166219527, -1011337855)), _ULong___init__impl__c78o9k(new Long(1281516232, -190430495)), _ULong___init__impl__c78o9k(new Long(-809665091, -1729631796)), _ULong___init__impl__c78o9k(new Long(61660460, -1088297920)), _ULong___init__impl__c78o9k(new Long(77075576, -286630576)), _ULong___init__impl__c78o9k(new Long(48172235, -1789756846)), _ULong___init__impl__c78o9k(new Long(-2087268355, -1163454234)), _ULong___init__impl__c78o9k(new Long(612140029, -380575968)), _ULong___init__impl__c78o9k(new Long(382587518, -1848472716)), _ULong___init__impl__c78o9k(new Long(478234397, -1236849071)), _ULong___init__impl__c78o9k(new Long(1671534821, -472319515)), _ULong___init__impl__c78o9k(new Long(1581580175, -1905812433))]));
    }
  }
  function PathBuilder() {
    this.t6o_1 = ArrayList_init_$Create$(32);
  }
  protoOf(PathBuilder).u6o = function () {
    return this.t6o_1;
  };
  protoOf(PathBuilder).v6o = function () {
    this.t6o_1.e(Close_getInstance());
    return this;
  };
  protoOf(PathBuilder).z5t = function (x, y) {
    this.t6o_1.e(new MoveTo(x, y));
    return this;
  };
  protoOf(PathBuilder).b5u = function (x, y) {
    this.t6o_1.e(new LineTo(x, y));
    return this;
  };
  protoOf(PathBuilder).w6o = function (dx, dy) {
    this.t6o_1.e(new RelativeLineTo(dx, dy));
    return this;
  };
  protoOf(PathBuilder).x6o = function (dx) {
    this.t6o_1.e(new RelativeHorizontalTo(dx));
    return this;
  };
  protoOf(PathBuilder).y6o = function (y) {
    this.t6o_1.e(new VerticalTo(y));
    return this;
  };
  protoOf(PathBuilder).z6o = function (dy) {
    this.t6o_1.e(new RelativeVerticalTo(dy));
    return this;
  };
  protoOf(PathBuilder).a6p = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.t6o_1.e(new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
    return this;
  };
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.d6p_1 = dx;
    this.e6p_1 = dy;
  }
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.d6p_1 + ', dy=' + this.e6p_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.d6p_1);
    result = imul(result, 31) + getNumberHashCode(this.e6p_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.d6p_1, tmp0_other_with_cast.d6p_1))
      return false;
    if (!equals(this.e6p_1, tmp0_other_with_cast.e6p_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.h6p_1 = x;
    this.i6p_1 = y;
  }
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.h6p_1 + ', y=' + this.i6p_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.h6p_1);
    result = imul(result, 31) + getNumberHashCode(this.i6p_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.h6p_1, tmp0_other_with_cast.h6p_1))
      return false;
    if (!equals(this.i6p_1, tmp0_other_with_cast.i6p_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.l6p_1 = dx;
    this.m6p_1 = dy;
  }
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.l6p_1 + ', dy=' + this.m6p_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.l6p_1);
    result = imul(result, 31) + getNumberHashCode(this.m6p_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.l6p_1, tmp0_other_with_cast.l6p_1))
      return false;
    if (!equals(this.m6p_1, tmp0_other_with_cast.m6p_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.p6p_1 = x;
    this.q6p_1 = y;
  }
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.p6p_1 + ', y=' + this.q6p_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.p6p_1);
    result = imul(result, 31) + getNumberHashCode(this.q6p_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.p6p_1, tmp0_other_with_cast.p6p_1))
      return false;
    if (!equals(this.q6p_1, tmp0_other_with_cast.q6p_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.t6p_1 = dx;
  }
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.t6p_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.t6p_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.t6p_1, tmp0_other_with_cast.t6p_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.w6p_1 = x;
  }
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.w6p_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.w6p_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.w6p_1, tmp0_other_with_cast.w6p_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.z6p_1 = dy;
  }
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.z6p_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.z6p_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.z6p_1, tmp0_other_with_cast.z6p_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.c6q_1 = y;
  }
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.c6q_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.c6q_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.c6q_1, tmp0_other_with_cast.c6q_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.f6q_1 = dx1;
    this.g6q_1 = dy1;
    this.h6q_1 = dx2;
    this.i6q_1 = dy2;
    this.j6q_1 = dx3;
    this.k6q_1 = dy3;
  }
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.f6q_1 + ', dy1=' + this.g6q_1 + ', dx2=' + this.h6q_1 + ', dy2=' + this.i6q_1 + ', dx3=' + this.j6q_1 + ', dy3=' + this.k6q_1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.f6q_1);
    result = imul(result, 31) + getNumberHashCode(this.g6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k6q_1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.f6q_1, tmp0_other_with_cast.f6q_1))
      return false;
    if (!equals(this.g6q_1, tmp0_other_with_cast.g6q_1))
      return false;
    if (!equals(this.h6q_1, tmp0_other_with_cast.h6q_1))
      return false;
    if (!equals(this.i6q_1, tmp0_other_with_cast.i6q_1))
      return false;
    if (!equals(this.j6q_1, tmp0_other_with_cast.j6q_1))
      return false;
    if (!equals(this.k6q_1, tmp0_other_with_cast.k6q_1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.n6q_1 = x1;
    this.o6q_1 = y1;
    this.p6q_1 = x2;
    this.q6q_1 = y2;
    this.r6q_1 = x3;
    this.s6q_1 = y3;
  }
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.n6q_1 + ', y1=' + this.o6q_1 + ', x2=' + this.p6q_1 + ', y2=' + this.q6q_1 + ', x3=' + this.r6q_1 + ', y3=' + this.s6q_1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.n6q_1);
    result = imul(result, 31) + getNumberHashCode(this.o6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s6q_1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.n6q_1, tmp0_other_with_cast.n6q_1))
      return false;
    if (!equals(this.o6q_1, tmp0_other_with_cast.o6q_1))
      return false;
    if (!equals(this.p6q_1, tmp0_other_with_cast.p6q_1))
      return false;
    if (!equals(this.q6q_1, tmp0_other_with_cast.q6q_1))
      return false;
    if (!equals(this.r6q_1, tmp0_other_with_cast.r6q_1))
      return false;
    if (!equals(this.s6q_1, tmp0_other_with_cast.s6q_1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.v6q_1 = dx1;
    this.w6q_1 = dy1;
    this.x6q_1 = dx2;
    this.y6q_1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.v6q_1 + ', dy1=' + this.w6q_1 + ', dx2=' + this.x6q_1 + ', dy2=' + this.y6q_1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.v6q_1);
    result = imul(result, 31) + getNumberHashCode(this.w6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x6q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y6q_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.v6q_1, tmp0_other_with_cast.v6q_1))
      return false;
    if (!equals(this.w6q_1, tmp0_other_with_cast.w6q_1))
      return false;
    if (!equals(this.x6q_1, tmp0_other_with_cast.x6q_1))
      return false;
    if (!equals(this.y6q_1, tmp0_other_with_cast.y6q_1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.b6r_1 = x1;
    this.c6r_1 = y1;
    this.d6r_1 = x2;
    this.e6r_1 = y2;
  }
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.b6r_1 + ', y1=' + this.c6r_1 + ', x2=' + this.d6r_1 + ', y2=' + this.e6r_1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.b6r_1);
    result = imul(result, 31) + getNumberHashCode(this.c6r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d6r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e6r_1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.b6r_1, tmp0_other_with_cast.b6r_1))
      return false;
    if (!equals(this.c6r_1, tmp0_other_with_cast.c6r_1))
      return false;
    if (!equals(this.d6r_1, tmp0_other_with_cast.d6r_1))
      return false;
    if (!equals(this.e6r_1, tmp0_other_with_cast.e6r_1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.h6r_1 = dx1;
    this.i6r_1 = dy1;
    this.j6r_1 = dx2;
    this.k6r_1 = dy2;
  }
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.h6r_1 + ', dy1=' + this.i6r_1 + ', dx2=' + this.j6r_1 + ', dy2=' + this.k6r_1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.h6r_1);
    result = imul(result, 31) + getNumberHashCode(this.i6r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j6r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k6r_1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.h6r_1, tmp0_other_with_cast.h6r_1))
      return false;
    if (!equals(this.i6r_1, tmp0_other_with_cast.i6r_1))
      return false;
    if (!equals(this.j6r_1, tmp0_other_with_cast.j6r_1))
      return false;
    if (!equals(this.k6r_1, tmp0_other_with_cast.k6r_1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.n6r_1 = x1;
    this.o6r_1 = y1;
    this.p6r_1 = x2;
    this.q6r_1 = y2;
  }
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.n6r_1 + ', y1=' + this.o6r_1 + ', x2=' + this.p6r_1 + ', y2=' + this.q6r_1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.n6r_1);
    result = imul(result, 31) + getNumberHashCode(this.o6r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p6r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q6r_1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.n6r_1, tmp0_other_with_cast.n6r_1))
      return false;
    if (!equals(this.o6r_1, tmp0_other_with_cast.o6r_1))
      return false;
    if (!equals(this.p6r_1, tmp0_other_with_cast.p6r_1))
      return false;
    if (!equals(this.q6r_1, tmp0_other_with_cast.q6r_1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.t6r_1 = dx;
    this.u6r_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.t6r_1 + ', dy=' + this.u6r_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.t6r_1);
    result = imul(result, 31) + getNumberHashCode(this.u6r_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.t6r_1, tmp0_other_with_cast.t6r_1))
      return false;
    if (!equals(this.u6r_1, tmp0_other_with_cast.u6r_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.x6r_1 = x;
    this.y6r_1 = y;
  }
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.x6r_1 + ', y=' + this.y6r_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x6r_1);
    result = imul(result, 31) + getNumberHashCode(this.y6r_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.x6r_1, tmp0_other_with_cast.x6r_1))
      return false;
    if (!equals(this.y6r_1, tmp0_other_with_cast.y6r_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.b6s_1 = horizontalEllipseRadius;
    this.c6s_1 = verticalEllipseRadius;
    this.d6s_1 = theta;
    this.e6s_1 = isMoreThanHalf;
    this.f6s_1 = isPositiveArc;
    this.g6s_1 = arcStartDx;
    this.h6s_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.b6s_1 + ', verticalEllipseRadius=' + this.c6s_1 + ', theta=' + this.d6s_1 + ', isMoreThanHalf=' + this.e6s_1 + ', isPositiveArc=' + this.f6s_1 + ', arcStartDx=' + this.g6s_1 + ', arcStartDy=' + this.h6s_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.b6s_1);
    result = imul(result, 31) + getNumberHashCode(this.c6s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d6s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e6s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f6s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g6s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h6s_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.b6s_1, tmp0_other_with_cast.b6s_1))
      return false;
    if (!equals(this.c6s_1, tmp0_other_with_cast.c6s_1))
      return false;
    if (!equals(this.d6s_1, tmp0_other_with_cast.d6s_1))
      return false;
    if (!(this.e6s_1 === tmp0_other_with_cast.e6s_1))
      return false;
    if (!(this.f6s_1 === tmp0_other_with_cast.f6s_1))
      return false;
    if (!equals(this.g6s_1, tmp0_other_with_cast.g6s_1))
      return false;
    if (!equals(this.h6s_1, tmp0_other_with_cast.h6s_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.k6s_1 = horizontalEllipseRadius;
    this.l6s_1 = verticalEllipseRadius;
    this.m6s_1 = theta;
    this.n6s_1 = isMoreThanHalf;
    this.o6s_1 = isPositiveArc;
    this.p6s_1 = arcStartX;
    this.q6s_1 = arcStartY;
  }
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.k6s_1 + ', verticalEllipseRadius=' + this.l6s_1 + ', theta=' + this.m6s_1 + ', isMoreThanHalf=' + this.n6s_1 + ', isPositiveArc=' + this.o6s_1 + ', arcStartX=' + this.p6s_1 + ', arcStartY=' + this.q6s_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.k6s_1);
    result = imul(result, 31) + getNumberHashCode(this.l6s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m6s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n6s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.o6s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p6s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q6s_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.k6s_1, tmp0_other_with_cast.k6s_1))
      return false;
    if (!equals(this.l6s_1, tmp0_other_with_cast.l6s_1))
      return false;
    if (!equals(this.m6s_1, tmp0_other_with_cast.m6s_1))
      return false;
    if (!(this.n6s_1 === tmp0_other_with_cast.n6s_1))
      return false;
    if (!(this.o6s_1 === tmp0_other_with_cast.o6s_1))
      return false;
    if (!equals(this.p6s_1, tmp0_other_with_cast.p6s_1))
      return false;
    if (!equals(this.q6s_1, tmp0_other_with_cast.q6s_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.r6s_1 = isCurve;
    this.s6s_1 = isQuad;
  }
  function addPathNodes(_this__u8e3s4, nodes, args, count) {
    if (_this__u8e3s4 === _Char___init__impl__6a9atx(122) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(90)) {
      nodes.e(Close_getInstance());
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(109)) {
      pathRelativeMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(77)) {
      pathMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(108)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end = count - 2 | 0;
      var index = 0;
      while (index <= end) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start = index;
        var tmp$ret$0 = new RelativeLineTo(args[start], args[start + 1 | 0]);
        nodes.e(tmp$ret$0);
        index = index + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(76)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_0 = count - 2 | 0;
      var index_0 = 0;
      while (index_0 <= end_0) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_0 = index_0;
        var tmp$ret$1 = new LineTo(args[start_0], args[start_0 + 1 | 0]);
        nodes.e(tmp$ret$1);
        index_0 = index_0 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(104)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_1 = count - 1 | 0;
      var index_1 = 0;
      while (index_1 <= end_1) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_1 = index_1;
        var tmp$ret$2 = new RelativeHorizontalTo(args[start_1]);
        nodes.e(tmp$ret$2);
        index_1 = index_1 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(72)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_2 = count - 1 | 0;
      var index_2 = 0;
      while (index_2 <= end_2) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_2 = index_2;
        var tmp$ret$3 = new HorizontalTo(args[start_2]);
        nodes.e(tmp$ret$3);
        index_2 = index_2 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(118)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_3 = count - 1 | 0;
      var index_3 = 0;
      while (index_3 <= end_3) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_3 = index_3;
        var tmp$ret$4 = new RelativeVerticalTo(args[start_3]);
        nodes.e(tmp$ret$4);
        index_3 = index_3 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(86)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_4 = count - 1 | 0;
      var index_4 = 0;
      while (index_4 <= end_4) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_4 = index_4;
        var tmp$ret$5 = new VerticalTo(args[start_4]);
        nodes.e(tmp$ret$5);
        index_4 = index_4 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(99)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_5 = count - 6 | 0;
      var index_5 = 0;
      while (index_5 <= end_5) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_5 = index_5;
        var tmp$ret$6 = new RelativeCurveTo(args[start_5], args[start_5 + 1 | 0], args[start_5 + 2 | 0], args[start_5 + 3 | 0], args[start_5 + 4 | 0], args[start_5 + 5 | 0]);
        nodes.e(tmp$ret$6);
        index_5 = index_5 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(67)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_6 = count - 6 | 0;
      var index_6 = 0;
      while (index_6 <= end_6) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_6 = index_6;
        var tmp$ret$7 = new CurveTo(args[start_6], args[start_6 + 1 | 0], args[start_6 + 2 | 0], args[start_6 + 3 | 0], args[start_6 + 4 | 0], args[start_6 + 5 | 0]);
        nodes.e(tmp$ret$7);
        index_6 = index_6 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(115)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_7 = count - 4 | 0;
      var index_7 = 0;
      while (index_7 <= end_7) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_7 = index_7;
        var tmp$ret$8 = new RelativeReflectiveCurveTo(args[start_7], args[start_7 + 1 | 0], args[start_7 + 2 | 0], args[start_7 + 3 | 0]);
        nodes.e(tmp$ret$8);
        index_7 = index_7 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(83)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_8 = count - 4 | 0;
      var index_8 = 0;
      while (index_8 <= end_8) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_8 = index_8;
        var tmp$ret$9 = new ReflectiveCurveTo(args[start_8], args[start_8 + 1 | 0], args[start_8 + 2 | 0], args[start_8 + 3 | 0]);
        nodes.e(tmp$ret$9);
        index_8 = index_8 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(113)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_9 = count - 4 | 0;
      var index_9 = 0;
      while (index_9 <= end_9) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_9 = index_9;
        var tmp$ret$10 = new RelativeQuadTo(args[start_9], args[start_9 + 1 | 0], args[start_9 + 2 | 0], args[start_9 + 3 | 0]);
        nodes.e(tmp$ret$10);
        index_9 = index_9 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(81)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_10 = count - 4 | 0;
      var index_10 = 0;
      while (index_10 <= end_10) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_10 = index_10;
        var tmp$ret$11 = new QuadTo(args[start_10], args[start_10 + 1 | 0], args[start_10 + 2 | 0], args[start_10 + 3 | 0]);
        nodes.e(tmp$ret$11);
        index_10 = index_10 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(116)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_11 = count - 2 | 0;
      var index_11 = 0;
      while (index_11 <= end_11) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_11 = index_11;
        var tmp$ret$12 = new RelativeReflectiveQuadTo(args[start_11], args[start_11 + 1 | 0]);
        nodes.e(tmp$ret$12);
        index_11 = index_11 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(84)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_12 = count - 2 | 0;
      var index_12 = 0;
      while (index_12 <= end_12) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_12 = index_12;
        var tmp$ret$13 = new ReflectiveQuadTo(args[start_12], args[start_12 + 1 | 0]);
        nodes.e(tmp$ret$13);
        index_12 = index_12 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(97)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_13 = count - 7 | 0;
      var index_13 = 0;
      while (index_13 <= end_13) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_13 = index_13;
        var tmp$ret$14 = new RelativeArcTo(args[start_13], args[start_13 + 1 | 0], args[start_13 + 2 | 0], !(compareTo(args[start_13 + 3 | 0], 0.0) === 0), !(compareTo(args[start_13 + 4 | 0], 0.0) === 0), args[start_13 + 5 | 0], args[start_13 + 6 | 0]);
        nodes.e(tmp$ret$14);
        index_13 = index_13 + 7 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(65)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_14 = count - 7 | 0;
      var index_14 = 0;
      while (index_14 <= end_14) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_14 = index_14;
        var tmp$ret$15 = new ArcTo(args[start_14], args[start_14 + 1 | 0], args[start_14 + 2 | 0], !(compareTo(args[start_14 + 3 | 0], 0.0) === 0), !(compareTo(args[start_14 + 4 | 0], 0.0) === 0), args[start_14 + 5 | 0], args[start_14 + 6 | 0]);
        nodes.e(tmp$ret$15);
        index_14 = index_14 + 7 | 0;
      }
    } else
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + toString_1(_this__u8e3s4));
  }
  function pathRelativeMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.e(new RelativeMoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.e(new RelativeLineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  function pathMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.e(new MoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.e(new LineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  var EmptyArray;
  function PathParser() {
    this.t6s_1 = null;
    this.u6s_1 = new Float32Array(64);
  }
  protoOf(PathParser).v6s = function (pathData) {
    var dstNodes = this.t6s_1;
    if (dstNodes == null) {
      dstNodes = ArrayList_init_$Create$_0();
      this.t6s_1 = dstNodes;
    } else {
      dstNodes.n2();
    }
    this.w6s(pathData, dstNodes);
    return this;
  };
  protoOf(PathParser).w6s = function (pathData, nodes) {
    var start = 0;
    var end = pathData.length;
    var dataCount = 0;
    while (start < end && Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, start), _Char___init__impl__6a9atx(32)) <= 0) {
      start = start + 1 | 0;
    }
    while (end > start && Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, end - 1 | 0), _Char___init__impl__6a9atx(32)) <= 0) {
      end = end - 1 | 0;
    }
    var index = start;
    while (index < end) {
      var c;
      var command = _Char___init__impl__6a9atx(0);
      $l$loop: do {
        var tmp2 = index;
        index = tmp2 + 1 | 0;
        c = charSequenceGet(pathData, tmp2);
        // Inline function 'kotlin.code' call
        var lowerChar = Char__toInt_impl_vasixd(c) | 32;
        var tmp;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(97);
        var tmp_0 = lowerChar - Char__toInt_impl_vasixd(this_0) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(122);
        var tmp$ret$2 = Char__toInt_impl_vasixd(this_1);
        if (imul(tmp_0, lowerChar - tmp$ret$2 | 0) <= 0) {
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(101);
          tmp = !(lowerChar === Char__toInt_impl_vasixd(this_2));
        } else {
          tmp = false;
        }
        if (tmp) {
          command = c;
          break $l$loop;
        }
      }
       while (index < end);
      if (!(command === _Char___init__impl__6a9atx(0))) {
        // Inline function 'kotlin.code' call
        var this_3 = command;
        var tmp_1 = Char__toInt_impl_vasixd(this_3) | 32;
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(122);
        if (!(tmp_1 === Char__toInt_impl_vasixd(this_4))) {
          dataCount = 0;
          do {
            while (index < end && Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, index), _Char___init__impl__6a9atx(32)) <= 0) {
              index = index + 1 | 0;
            }
            var result = nextFloat(pathData, index, end);
            // Inline function 'androidx.compose.ui.graphics.vector.index' call
            index = result.q3(32).m1();
            // Inline function 'androidx.compose.ui.graphics.vector.floatValue' call
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits = result.r3(new Long(-1, 0)).m1();
            var value = floatFromBits(bits);
            if (!isNaN_0(value)) {
              var tmp_2 = this.u6s_1;
              var tmp4 = dataCount;
              dataCount = tmp4 + 1 | 0;
              tmp_2[tmp4] = value;
              // Inline function 'androidx.compose.ui.graphics.vector.PathParser.resizeNodeData' call
              var dataCount_0 = dataCount;
              if (dataCount_0 >= this.u6s_1.length) {
                var src = this.u6s_1;
                this.u6s_1 = new Float32Array(imul(dataCount_0, 2));
                // Inline function 'kotlin.collections.copyInto' call
                var destination = this.u6s_1;
                var endIndex = src.length;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = src;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, destination, 0, 0, endIndex);
              }
            }
            while (index < end && charSequenceGet(pathData, index) === _Char___init__impl__6a9atx(44)) {
              index = index + 1 | 0;
            }
          }
           while (index < end && !isNaN_0(value));
        }
        addPathNodes(command, nodes, this.u6s_1, dataCount);
      }
    }
    return nodes;
  };
  protoOf(PathParser).x6s = function () {
    var tmp0_elvis_lhs = this.t6s_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  function toPath(_this__u8e3s4, target) {
    target = target === VOID ? Path_0() : target;
    _init_properties_PathParser_kt__xn6mis();
    var fillType = target.s6e();
    target.i6f();
    target.r6e(fillType);
    var currentX = 0.0;
    var currentY = 0.0;
    var ctrlX = 0.0;
    var ctrlY = 0.0;
    var segmentX = 0.0;
    var segmentY = 0.0;
    var reflectiveCtrlX;
    var reflectiveCtrlY;
    var previousNode = _this__u8e3s4.j() ? Close_getInstance() : _this__u8e3s4.u(0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.u(index);
        // Inline function 'androidx.compose.ui.graphics.vector.toPath.<anonymous>' call
        if (item instanceof Close) {
          currentX = segmentX;
          currentY = segmentY;
          ctrlX = segmentX;
          ctrlY = segmentY;
          target.q4();
        } else {
          if (item instanceof RelativeMoveTo) {
            currentX = currentX + item.d6p_1;
            currentY = currentY + item.e6p_1;
            target.u6e(item.d6p_1, item.e6p_1);
            segmentX = currentX;
            segmentY = currentY;
          } else {
            if (item instanceof MoveTo) {
              currentX = item.h6p_1;
              currentY = item.i6p_1;
              target.t6e(item.h6p_1, item.i6p_1);
              segmentX = currentX;
              segmentY = currentY;
            } else {
              if (item instanceof RelativeLineTo) {
                target.w6e(item.l6p_1, item.m6p_1);
                currentX = currentX + item.l6p_1;
                currentY = currentY + item.m6p_1;
              } else {
                if (item instanceof LineTo) {
                  target.v6e(item.p6p_1, item.q6p_1);
                  currentX = item.p6p_1;
                  currentY = item.q6p_1;
                } else {
                  if (item instanceof RelativeHorizontalTo) {
                    target.w6e(item.t6p_1, 0.0);
                    currentX = currentX + item.t6p_1;
                  } else {
                    if (item instanceof HorizontalTo) {
                      target.v6e(item.w6p_1, currentY);
                      currentX = item.w6p_1;
                    } else {
                      if (item instanceof RelativeVerticalTo) {
                        target.w6e(0.0, item.z6p_1);
                        currentY = currentY + item.z6p_1;
                      } else {
                        if (item instanceof VerticalTo) {
                          target.v6e(currentX, item.c6q_1);
                          currentY = item.c6q_1;
                        } else {
                          if (item instanceof RelativeCurveTo) {
                            target.c6f(item.f6q_1, item.g6q_1, item.h6q_1, item.i6q_1, item.j6q_1, item.k6q_1);
                            ctrlX = currentX + item.h6q_1;
                            ctrlY = currentY + item.i6q_1;
                            currentX = currentX + item.j6q_1;
                            currentY = currentY + item.k6q_1;
                          } else {
                            if (item instanceof CurveTo) {
                              target.b6f(item.n6q_1, item.o6q_1, item.p6q_1, item.q6q_1, item.r6q_1, item.s6q_1);
                              ctrlX = item.p6q_1;
                              ctrlY = item.q6q_1;
                              currentX = item.r6q_1;
                              currentY = item.s6q_1;
                            } else {
                              if (item instanceof RelativeReflectiveCurveTo) {
                                if (previousNode.r6s_1) {
                                  reflectiveCtrlX = currentX - ctrlX;
                                  reflectiveCtrlY = currentY - ctrlY;
                                } else {
                                  reflectiveCtrlX = 0.0;
                                  reflectiveCtrlY = 0.0;
                                }
                                target.c6f(reflectiveCtrlX, reflectiveCtrlY, item.v6q_1, item.w6q_1, item.x6q_1, item.y6q_1);
                                ctrlX = currentX + item.v6q_1;
                                ctrlY = currentY + item.w6q_1;
                                currentX = currentX + item.x6q_1;
                                currentY = currentY + item.y6q_1;
                              } else {
                                if (item instanceof ReflectiveCurveTo) {
                                  if (previousNode.r6s_1) {
                                    reflectiveCtrlX = 2 * currentX - ctrlX;
                                    reflectiveCtrlY = 2 * currentY - ctrlY;
                                  } else {
                                    reflectiveCtrlX = currentX;
                                    reflectiveCtrlY = currentY;
                                  }
                                  target.b6f(reflectiveCtrlX, reflectiveCtrlY, item.b6r_1, item.c6r_1, item.d6r_1, item.e6r_1);
                                  ctrlX = item.b6r_1;
                                  ctrlY = item.c6r_1;
                                  currentX = item.d6r_1;
                                  currentY = item.e6r_1;
                                } else {
                                  if (item instanceof RelativeQuadTo) {
                                    target.a6f(item.h6r_1, item.i6r_1, item.j6r_1, item.k6r_1);
                                    ctrlX = currentX + item.h6r_1;
                                    ctrlY = currentY + item.i6r_1;
                                    currentX = currentX + item.j6r_1;
                                    currentY = currentY + item.k6r_1;
                                  } else {
                                    if (item instanceof QuadTo) {
                                      target.y6e(item.n6r_1, item.o6r_1, item.p6r_1, item.q6r_1);
                                      ctrlX = item.n6r_1;
                                      ctrlY = item.o6r_1;
                                      currentX = item.p6r_1;
                                      currentY = item.q6r_1;
                                    } else {
                                      if (item instanceof RelativeReflectiveQuadTo) {
                                        if (previousNode.s6s_1) {
                                          reflectiveCtrlX = currentX - ctrlX;
                                          reflectiveCtrlY = currentY - ctrlY;
                                        } else {
                                          reflectiveCtrlX = 0.0;
                                          reflectiveCtrlY = 0.0;
                                        }
                                        target.a6f(reflectiveCtrlX, reflectiveCtrlY, item.t6r_1, item.u6r_1);
                                        ctrlX = currentX + reflectiveCtrlX;
                                        ctrlY = currentY + reflectiveCtrlY;
                                        currentX = currentX + item.t6r_1;
                                        currentY = currentY + item.u6r_1;
                                      } else {
                                        if (item instanceof ReflectiveQuadTo) {
                                          if (previousNode.s6s_1) {
                                            reflectiveCtrlX = 2 * currentX - ctrlX;
                                            reflectiveCtrlY = 2 * currentY - ctrlY;
                                          } else {
                                            reflectiveCtrlX = currentX;
                                            reflectiveCtrlY = currentY;
                                          }
                                          target.y6e(reflectiveCtrlX, reflectiveCtrlY, item.x6r_1, item.y6r_1);
                                          ctrlX = reflectiveCtrlX;
                                          ctrlY = reflectiveCtrlY;
                                          currentX = item.x6r_1;
                                          currentY = item.y6r_1;
                                        } else {
                                          if (item instanceof RelativeArcTo) {
                                            var arcStartX = item.g6s_1 + currentX;
                                            var arcStartY = item.h6s_1 + currentY;
                                            drawArc(target, currentX, currentY, arcStartX, arcStartY, item.b6s_1, item.c6s_1, item.d6s_1, item.e6s_1, item.f6s_1);
                                            currentX = arcStartX;
                                            currentY = arcStartY;
                                            ctrlX = currentX;
                                            ctrlY = currentY;
                                          } else {
                                            if (item instanceof ArcTo) {
                                              drawArc(target, currentX, currentY, item.p6s_1, item.q6s_1, item.k6s_1, item.l6s_1, item.m6s_1, item.n6s_1, item.o6s_1);
                                              currentX = item.p6s_1;
                                              currentY = item.q6s_1;
                                              ctrlX = currentX;
                                              ctrlY = currentY;
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
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  }
  function drawArc(p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    _init_properties_PathParser_kt__xn6mis();
    // Inline function 'androidx.compose.ui.graphics.vector.toRadians' call
    var thetaD = theta / 180 * get_PI();
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(thetaD);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(thetaD);
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_instance;
    }
    var disc = 1.0 / dsq - 1.0 / 4.0;
    if (disc < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      var adjust = Math.sqrt(dsq) / 1.99999;
      drawArc(p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_instance;
    }
    // Inline function 'kotlin.math.sqrt' call
    var s = Math.sqrt(disc);
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    // Inline function 'kotlin.math.atan2' call
    var y = y0p - cy;
    var x = x0p - cx;
    var eta0 = Math.atan2(y, x);
    // Inline function 'kotlin.math.atan2' call
    var y_0 = y1p - cy;
    var x_0 = x1p - cx;
    var eta1 = Math.atan2(y_0, x_0);
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0)) {
      if (sweep > 0) {
        sweep = sweep - 2 * get_PI();
      } else {
        sweep = sweep + 2 * get_PI();
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier(p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier(p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    _init_properties_PathParser_kt__xn6mis();
    var eta1x = e1x;
    var eta1y = e1y;
    // Inline function 'kotlin.math.ceil' call
    // Inline function 'kotlin.math.abs' call
    var x = sweep * 4 / get_PI();
    var x_0 = Math.abs(x);
    var tmp$ret$1 = Math.ceil(x_0);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(theta);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(theta);
    // Inline function 'kotlin.math.cos' call
    var x_1 = eta1;
    var cosEta1 = Math.cos(x_1);
    // Inline function 'kotlin.math.sin' call
    var x_2 = eta1;
    var sinEta1 = Math.sin(x_2);
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        // Inline function 'kotlin.math.sin' call
        var sinEta2 = Math.sin(eta2);
        // Inline function 'kotlin.math.cos' call
        var cosEta2 = Math.cos(eta2);
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        // Inline function 'kotlin.math.tan' call
        var x_3 = (eta2 - eta1) / 2;
        var tanDiff2 = Math.tan(x_3);
        // Inline function 'kotlin.math.sin' call
        var x_4 = eta2 - eta1;
        var tmp = Math.sin(x_4);
        // Inline function 'kotlin.math.sqrt' call
        var x_5 = 4 + 3.0 * tanDiff2 * tanDiff2;
        var alpha = tmp * (Math.sqrt(x_5) - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.b6f(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  var properties_initialized_PathParser_kt_mzars6;
  function _init_properties_PathParser_kt__xn6mis() {
    if (!properties_initialized_PathParser_kt_mzars6) {
      properties_initialized_PathParser_kt_mzars6 = true;
      EmptyArray = new Float32Array(0);
    }
  }
  function toBitmap(_this__u8e3s4) {
    var bitmap = Companion_getInstance_3().g5k(_this__u8e3s4);
    bitmap.u5k();
    return bitmap;
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_13().c66_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().d66_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_13().e66_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_13().f66_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_13().g66_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_13().h66_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().i66_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().j66_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().k66_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().l66_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_13().m66_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_13().n66_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().o66_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_13().p66_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().q66_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().r66_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_13().s66_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().t66_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().u66_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().v66_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().w66_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().x66_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().y66_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().z66_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_13().a67_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_13().b67_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().c67_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_13().d67_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().e67_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function prepareTransformationMatrix(matrix, pivotX, pivotY, translationX, translationY, rotationX, rotationY, rotationZ, scaleX, scaleY, cameraDistance) {
    Matrix__reset_impl_4l49i7(matrix);
    Matrix__translate$default_impl_10t8ql(matrix, -pivotX, -pivotY);
    // Inline function 'kotlin.apply' call
    var this_0 = new Matrix(_Matrix___init__impl__q3kp4w());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
    var $this$apply = this_0.o6d_1;
    Matrix__rotateZ_impl_2g2pf5($this$apply, rotationZ);
    Matrix__rotateY_impl_2x4btc($this$apply, rotationY);
    Matrix__rotateX_impl_3e5y7j($this$apply, rotationX);
    Matrix__scale$default_impl_snaws9($this$apply, scaleX, scaleY);
    var tmp$ret$0 = this_0.o6d_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$0);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isZero' call
    // Inline function 'kotlin.math.abs' call
    if (!(Math.abs(rotationX) <= _get_NON_ZERO_EPSILON_$accessor$1shojdc_xw9e69())) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.graphics.isZero' call
      // Inline function 'kotlin.math.abs' call
      tmp = !(Math.abs(rotationY) <= _get_NON_ZERO_EPSILON_$accessor$1shojdc_xw9e69());
    }
    if (tmp) {
      // Inline function 'kotlin.apply' call
      var this_1 = new Matrix(_Matrix___init__impl__q3kp4w());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
      var depth = cameraDistance * 72.0;
      // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
      var this_2 = this_1.o6d_1;
      var v = -1.0 / depth;
      _Matrix___get_values__impl__fblr7b(this_2)[imul(2, 4) + 3 | 0] = v;
      var tmp$ret$5 = this_1.o6d_1;
      Matrix__timesAssign_impl_oas521(matrix, tmp$ret$5);
    }
    // Inline function 'kotlin.apply' call
    var this_3 = new Matrix(_Matrix___init__impl__q3kp4w());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
    var $this$apply_0 = this_3.o6d_1;
    Matrix__translate$default_impl_10t8ql($this$apply_0, pivotX + translationX, pivotY + translationY);
    var tmp$ret$6 = this_3.o6d_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$6);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(0, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(1, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(3, 4) + 2 | 0] = 0.0;
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function _get_NON_ZERO_EPSILON_$accessor$1shojdc_xw9e69() {
    return 0.001;
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_instance.x5v(_this__u8e3s4.t5g_1, _this__u8e3s4.u5g_1, _this__u8e3s4.v5g_1, _this__u8e3s4.w5g_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.n5h_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.o5h_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.o5h_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.p5h_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.p5h_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.q5h_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.q5h_1);
    return Companion_instance_0.w5v(_this__u8e3s4.j5h_1, _this__u8e3s4.k5h_1, _this__u8e3s4.l5h_1, _this__u8e3s4.m5h_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect_0(_this__u8e3s4.t5m_1, _this__u8e3s4.u5m_1, _this__u8e3s4.v5m_1, _this__u8e3s4.w5m_1);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).y6s_1;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    this_0.l6t($this.z6s_1);
    return this_0.a6t_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_4().v5r(bitmap);
    var tmp;
    try {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp = $this.y6s_1.l5n(this_0, Companion_instance.z5v(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_instance.z5v(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.e6k(), $this), _get_skia__ddpejf(paint, $this), true);
    }finally {
      this_0.q4();
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_15().x69_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_15().y69_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 3 | 0];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_18().d6d_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_18().e6d_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_18().f6d_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.y6s_1 = skia;
    this.z6s_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).n69 = function () {
    this.y6s_1.a5o();
  };
  protoOf(SkiaBackedCanvas).o69 = function () {
    this.y6s_1.c5o();
  };
  protoOf(SkiaBackedCanvas).p69 = function (bounds, paint) {
    this.y6s_1.b5o(bounds.t5g_1, bounds.u5g_1, bounds.v5g_1, bounds.w5g_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).q69 = function (dx, dy) {
    this.y6s_1.b5h(dx, dy);
  };
  protoOf(SkiaBackedCanvas).r69 = function (sx, sy) {
    this.y6s_1.u5n(sx, sy);
  };
  protoOf(SkiaBackedCanvas).s69 = function (degrees) {
    this.y6s_1.v5n(degrees);
  };
  protoOf(SkiaBackedCanvas).t69 = function (matrix) {
    if (!isIdentity(matrix)) {
      this.y6s_1.w5n(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).v69 = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.y6s_1.r5n(Companion_instance.x5v(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).a6a = function (path, clipOp) {
    var antiAlias = true;
    this.y6s_1.t5n(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).m6t = function (rect, clipOp) {
    var antiAlias = true;
    get_nativeCanvas(this).s5n(toSkiaRRect(rect), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).n6t = function (rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().y69_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.m6t(rect, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.m6t.call(this, rect, new ClipOp(clipOp));
    }
    return tmp;
  };
  protoOf(SkiaBackedCanvas).c6a = function (p1, p2, paint) {
    this.y6s_1.q5m(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).e6a = function (left, top, right, bottom, paint) {
    this.y6s_1.s5m(Companion_instance.x5v(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).f6a = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.y6s_1.y5m(Companion_instance_0.v5v(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).g6a = function (center, radius, paint) {
    this.y6s_1.x5m(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).h6a = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.y6s_1.r5m(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).i6a = function (path, paint) {
    this.y6s_1.f5n(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).j6a = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset_0(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset_0(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!skiaBitmap.t5k()) {
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).z6s_1 = value;
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.a6t_1.b5t(toArgb(Color__copy$default_impl_ectz3s(Color_2($this.a6t_1.c5t()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.o64() : alpha;
    multiplier = multiplier === VOID ? $this.b6t_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_21().p6e_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_21().q6e_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_25().z6f_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_25().a6g_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_25().b6g_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_26().d6g_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_26().e6g_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_26().f6g_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.a6t_1 = skia;
    this.b6t_1 = 1.0;
    this.c6t_1 = Companion_getInstance_13().f66_1;
    this.d6t_1 = Companion_getInstance_21().p6e_1;
    this.e6t_1 = Companion_getInstance_25().z6f_1;
    this.f6t_1 = Companion_getInstance_26().e6g_1;
    this.g6t_1 = 0.0;
    this.h6t_1 = Companion_getInstance_18().e6d_1;
    this.i6t_1 = null;
    this.j6t_1 = null;
    this.k6t_1 = null;
  }
  protoOf(SkiaBackedPaint).o6t = function () {
    return this.a6t_1;
  };
  protoOf(SkiaBackedPaint).l6t = function (value) {
    var multiplier = coerceIn_0(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.b6t_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).o68 = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).o64 = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_2(this.a6t_1.c5t()));
  };
  protoOf(SkiaBackedPaint).y5s = function (value) {
    this.a6t_1.y5s(value);
  };
  protoOf(SkiaBackedPaint).m68 = function (color) {
    this.a6t_1.b5t(toArgb(color));
  };
  protoOf(SkiaBackedPaint).n68 = function () {
    return Color_2(this.a6t_1.c5t());
  };
  protoOf(SkiaBackedPaint).b6k = function (value) {
    this.a6t_1.l5t(toSkia(value));
    this.c6t_1 = value;
  };
  protoOf(SkiaBackedPaint).c6k = function () {
    return this.c6t_1;
  };
  protoOf(SkiaBackedPaint).l6j = function (value) {
    this.a6t_1.z5s(toSkia_3(value, this));
    this.d6t_1 = value;
  };
  protoOf(SkiaBackedPaint).d5t = function (value) {
    this.a6t_1.d5t(value);
  };
  protoOf(SkiaBackedPaint).e5t = function () {
    return this.a6t_1.e5t();
  };
  protoOf(SkiaBackedPaint).r6j = function (value) {
    this.a6t_1.g5t(toSkia_4(value, this));
    this.e6t_1 = value;
  };
  protoOf(SkiaBackedPaint).s6j = function () {
    return this.e6t_1;
  };
  protoOf(SkiaBackedPaint).v6j = function (value) {
    this.a6t_1.h5t(toSkia_5(value, this));
    this.f6t_1 = value;
  };
  protoOf(SkiaBackedPaint).w6j = function () {
    return this.f6t_1;
  };
  protoOf(SkiaBackedPaint).t6j = function (value) {
    this.a6t_1.f5t(value);
    this.g6t_1 = value;
  };
  protoOf(SkiaBackedPaint).u6j = function () {
    return this.g6t_1;
  };
  protoOf(SkiaBackedPaint).d6k = function (_set____db54di) {
    this.h6t_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).e6k = function () {
    return this.h6t_1;
  };
  protoOf(SkiaBackedPaint).i5t = function (value) {
    this.a6t_1.i5t(value);
    this.i6t_1 = value;
  };
  protoOf(SkiaBackedPaint).j5t = function () {
    return this.i6t_1;
  };
  protoOf(SkiaBackedPaint).z6j = function (value) {
    this.a6t_1.k5t(value == null ? null : asSkiaColorFilter(value));
    this.j6t_1 = value;
  };
  protoOf(SkiaBackedPaint).a6k = function () {
    return this.j6t_1;
  };
  protoOf(SkiaBackedPaint).x6j = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.a6t_1.o5t(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.k6t_1 = value;
  };
  protoOf(SkiaBackedPaint).y6j = function () {
    return this.k6t_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_23().p6f_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_23().q6f_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_23().r6f_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_23().s6f_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_23().t6f_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.p6t_1 = internalPath;
  }
  protoOf(SkiaBackedPath).r6e = function (value) {
    var tmp = this.p6t_1;
    var tmp_0;
    if (value === Companion_getInstance_22().n6f_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.u5t(tmp_0);
  };
  protoOf(SkiaBackedPath).s6e = function () {
    var tmp;
    if (this.p6t_1.v5t().equals(PathFillMode_EVEN_ODD_getInstance())) {
      tmp = Companion_getInstance_22().n6f_1;
    } else {
      tmp = Companion_getInstance_22().m6f_1;
    }
    return tmp;
  };
  protoOf(SkiaBackedPath).t6e = function (x, y) {
    this.p6t_1.z5t(x, y);
  };
  protoOf(SkiaBackedPath).u6e = function (dx, dy) {
    this.p6t_1.a5u(dx, dy);
  };
  protoOf(SkiaBackedPath).v6e = function (x, y) {
    this.p6t_1.b5u(x, y);
  };
  protoOf(SkiaBackedPath).w6e = function (dx, dy) {
    this.p6t_1.c5u(dx, dy);
  };
  protoOf(SkiaBackedPath).x6e = function (x1, y1, x2, y2) {
    this.p6t_1.d5u(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).y6e = function (x1, y1, x2, y2) {
    this.p6t_1.d5u(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).z6e = function (dx1, dy1, dx2, dy2) {
    this.p6t_1.e5u(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).a6f = function (dx1, dy1, dx2, dy2) {
    this.p6t_1.e5u(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).b6f = function (x1, y1, x2, y2, x3, y3) {
    this.p6t_1.f5u(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).c6f = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.p6t_1.g5u(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).d6f = function (rect, direction) {
    this.p6t_1.j5u(toSkiaRect(rect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).f6f = function (roundRect, direction) {
    this.p6t_1.l5u(toSkiaRRect(roundRect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).g6f = function (path, offset) {
    this.p6t_1.n5u(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).q4 = function () {
    this.p6t_1.h5u();
  };
  protoOf(SkiaBackedPath).v3h = function () {
    var fillType = this.s6e();
    this.p6t_1.x5s();
    this.r6e(fillType);
  };
  protoOf(SkiaBackedPath).i6f = function () {
    this.p6t_1.w5t();
  };
  protoOf(SkiaBackedPath).j6f = function (offset) {
    this.p6t_1.p5u(Companion_getInstance_5().s5s(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).k6f = function () {
    var bounds = this.p6t_1.x5t();
    return new Rect_0(bounds.t5m_1, bounds.u5m_1, bounds.v5m_1, bounds.w5m_1);
  };
  protoOf(SkiaBackedPath).l6f = function (path1, path2, operation) {
    var path = Companion_getInstance_6().q5t(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.p6t_1 = path == null ? this.p6t_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).i2w = function () {
    return this.p6t_1.i2w();
  };
  function toSkiaPathDirection(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.z2_1) {
      case 0:
        tmp = PathDirection_COUNTER_CLOCKWISE_getInstance();
        break;
      case 1:
        tmp = PathDirection_CLOCKWISE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.p6t_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).q6t_1;
  }
  function PathMeasure() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.r6t_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).s6t = function (path, forceClosed) {
    this.r6t_1.v5u(path == null ? null : asSkiaPath(path), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).t6t = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.r6t_1.w5u(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).a = function () {
    return this.r6t_1.a();
  };
  function RenderEffect() {
    this.u6t_1 = null;
  }
  protoOf(RenderEffect).v6t = function () {
    var tmp0_elvis_lhs = this.u6t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.w6t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.RenderEffect.asSkiaImageFilter.<anonymous>' call
      this.u6t_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function Companion_25() {
    this.x6t_1 = 0.57735;
  }
  protoOf(Companion_25).y6t = function (radius) {
    var tmp;
    if (radius > 0) {
      tmp = this.x6t_1 * radius + 0.5;
    } else {
      tmp = 0.0;
    }
    return tmp;
  };
  var Companion_instance_27;
  function Companion_getInstance_39() {
    return Companion_instance_27;
  }
  function BlurEffect_0(renderEffect, radiusX, radiusY, edgeTreatment) {
    radiusY = radiusY === VOID ? radiusX : radiusY;
    edgeTreatment = edgeTreatment === VOID ? Companion_getInstance_27().j67_1 : edgeTreatment;
    RenderEffect.call(this);
    this.a6u_1 = renderEffect;
    this.b6u_1 = radiusX;
    this.c6u_1 = radiusY;
    this.d6u_1 = edgeTreatment;
  }
  protoOf(BlurEffect_0).w6t = function () {
    var tmp;
    if (this.a6u_1 == null) {
      tmp = Companion_getInstance_7().e5s(Companion_instance_27.y6t(this.b6u_1), Companion_instance_27.y6t(this.c6u_1), toSkiaTileMode(this.d6u_1));
    } else {
      tmp = Companion_getInstance_7().y5r(Companion_instance_27.y6t(this.b6u_1), Companion_instance_27.y6t(this.c6u_1), toSkiaTileMode(this.d6u_1), this.a6u_1.v6t(), null);
    }
    return tmp;
  };
  protoOf(BlurEffect_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlurEffect_0))
      return false;
    if (!(this.b6u_1 === other.b6u_1))
      return false;
    if (!(this.c6u_1 === other.c6u_1))
      return false;
    if (!(this.d6u_1 === other.d6u_1))
      return false;
    if (!equals(this.a6u_1, other.a6u_1))
      return false;
    return true;
  };
  protoOf(BlurEffect_0).hashCode = function () {
    var tmp0_safe_receiver = this.a6u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + getNumberHashCode(this.b6u_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.c6u_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.d6u_1) | 0;
    return result;
  };
  protoOf(BlurEffect_0).toString = function () {
    return 'BlurEffect(renderEffect=' + toString_0(this.a6u_1) + ', radiusX=' + this.b6u_1 + ', radiusY=' + this.c6u_1 + ', ' + ('edgeTreatment=' + TileMode__toString_impl_tlb7f4(this.d6u_1) + ')');
  };
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.y6c_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return Companion_getInstance_8().f5o(toArgb(color), toSkia(blendMode));
  }
  function SkiaGraphicsContext$snapshotObserver$lambda(command) {
    command();
    return Unit_instance;
  }
  function SkiaGraphicsContext() {
    var tmp = this;
    tmp.e6u_1 = new SnapshotStateObserver(SkiaGraphicsContext$snapshotObserver$lambda);
    this.f6u_1 = 0;
    this.e6u_1.v4a();
  }
  protoOf(SkiaGraphicsContext).v18 = function () {
    this.e6u_1.w4a();
    this.e6u_1.n2();
  };
  protoOf(SkiaGraphicsContext).g6u = function () {
    this.f6u_1 = this.f6u_1 + 1 | 0;
    return new GraphicsLayer(this.e6u_1);
  };
  protoOf(SkiaGraphicsContext).h6u = function (layer) {
    if (!layer.n6n_1) {
      this.f6u_1 = this.f6u_1 - 1 | 0;
      layer.i6u();
    }
  };
  function asComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(_this__u8e3s4);
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.o5k(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.j6u_1 = bitmap;
    this.k6u_1 = toComposeColorSpace(this.j6u_1.h5l());
    this.l6u_1 = toComposeConfig(this.j6u_1.g5l());
    this.m6u_1 = !this.j6u_1.i5l();
  }
  protoOf(SkiaBackedImageBitmap).g6d = function () {
    return this.l6u_1;
  };
  protoOf(SkiaBackedImageBitmap).y5g = function () {
    return this.j6u_1.y5g();
  };
  protoOf(SkiaBackedImageBitmap).x5g = function () {
    return this.j6u_1.x5g();
  };
  protoOf(SkiaBackedImageBitmap).h6d = function () {
    return Unit_instance;
  };
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_19().i6d_1 ? Companion_getInstance_9().s5o_1 : _this__u8e3s4 === Companion_getInstance_19().j6d_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_19().k6d_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_19().l6d_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_9().s5o_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().p6a_1) ? Companion_getInstance_10().o5o_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().q6a_1) ? Companion_getInstance_10().p5o_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().w6a_1) ? Companion_getInstance_10().q5o_1 : Companion_getInstance_10().o5o_1;
  }
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_10().o5o_1) ? ColorSpaces_getInstance().p6a_1 : equals(_this__u8e3s4, Companion_getInstance_10().p5o_1) ? ColorSpaces_getInstance().q6a_1 : equals(_this__u8e3s4, Companion_getInstance_10().q5o_1) ? ColorSpaces_getInstance().w6a_1 : ColorSpaces_getInstance().p6a_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_9().s5o_1) ? Companion_getInstance_19().i6d_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_19().j6d_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_19().k6d_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_19().l6d_1 : Companion_getInstance_19().i6d_1;
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.j6u_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function toComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(toBitmap(_this__u8e3s4));
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_11();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    return tmp.b5w(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_11();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.c5w(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_11();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.d5w(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.p() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.p() === colorStops.p())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.p();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.u(tmp_2).p6b_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_27().j67_1 ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_27().k67_1 ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().l67_1 ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_27().m67_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function invalidateMatrix($this, requestDraw_0) {
    $this.k6m_1 = true;
    if (requestDraw_0) {
      requestDraw($this);
    }
  }
  function invalidateMatrix$default($this, requestDraw, $super) {
    requestDraw = requestDraw === VOID ? true : requestDraw;
    return invalidateMatrix($this, requestDraw);
  }
  function requestDraw($this) {
    $this.j6m_1.a1y(Unit_instance);
  }
  function updateLayerConfiguration($this, requestDraw) {
    $this.o6m_1 = true;
    invalidateMatrix($this, requestDraw);
  }
  function updateLayerConfiguration$default($this, requestDraw, $super) {
    requestDraw = requestDraw === VOID ? true : requestDraw;
    return updateLayerConfiguration($this, requestDraw);
  }
  function trackRecord($this, block) {
    // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking' call
    var this_0 = $this.u6m_1;
    this_0.x6l_1 = this_0.w6l_1;
    var tmp0_safe_receiver = this_0.y6l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_safe_receiver.fz()) {
        var tmp0_elvis_lhs = this_0.z6l_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          var this_1 = mutableScatterSetOf();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking.<anonymous>.<anonymous>' call
          this_0.z6l_1 = this_1;
          tmp = this_1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var oldSet = tmp;
        oldSet.f13(tmp0_safe_receiver);
        tmp0_safe_receiver.n2();
      }
    }
    this_0.a6m_1 = true;
    // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
    $this.f6m_1.s4a($this, GraphicsLayer$trackRecord$lambda, block);
    this_0.a6m_1 = false;
    var tmp1_safe_receiver = this_0.x6l_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      onRemovedFromParentLayer(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = this_0.z6l_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp2_safe_receiver.fz()) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var elements = tmp2_safe_receiver.o11_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp2_safe_receiver.n11_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot;
              if (!this_2.r3(this_2.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
                      var tmp_0 = elements[index];
                      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      onRemovedFromParentLayer(it);
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
        tmp2_safe_receiver.n2();
      }
    }
  }
  function addSubLayer($this, graphicsLayer) {
    if ($this.u6m_1.b6m(graphicsLayer)) {
      onAddedToParentLayer(graphicsLayer);
    }
  }
  function configureOutline($this) {
    var tmpOutline = $this.n6m_1;
    if ($this.o6m_1 || tmpOutline == null) {
      var tmpPath = $this.s6m_1;
      var tmp;
      if (!(tmpPath == null)) {
        tmp = new Generic(tmpPath);
      } else {
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.createOutlineWithPosition' call
        var outlineTopLeft = $this.p6m_1;
        var outlineSize = $this.q6m_1;
        var tmp_0;
        // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
        if (_Size___get_packedValue__impl__7rlt1o(outlineSize).equals(new Long(2143289344, 2143289344))) {
          tmp_0 = toSize_0($this.w6m_1);
        } else {
          tmp_0 = outlineSize;
        }
        var targetSize = tmp_0;
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.configureOutline.<anonymous>' call
        var tmp_1;
        if ($this.r6m_1 > 0.0) {
          tmp_1 = new Rounded(RoundRect(_Offset___get_x__impl__xvi35n(outlineTopLeft), _Offset___get_y__impl__8bzhra(outlineTopLeft), _Offset___get_x__impl__xvi35n(outlineTopLeft) + _Size___get_width__impl__58y75t(targetSize), _Offset___get_y__impl__8bzhra(outlineTopLeft) + _Size___get_height__impl__a04p02(targetSize), CornerRadius($this.r6m_1)));
        } else {
          tmp_1 = new Rectangle(new Rect_0(_Offset___get_x__impl__xvi35n(outlineTopLeft), _Offset___get_y__impl__8bzhra(outlineTopLeft), _Offset___get_x__impl__xvi35n(outlineTopLeft) + _Size___get_width__impl__58y75t(targetSize), _Offset___get_y__impl__8bzhra(outlineTopLeft) + _Size___get_height__impl__a04p02(targetSize)));
        }
        tmp = tmp_1;
      }
      tmpOutline = tmp;
      $this.n6m_1 = tmpOutline;
      $this.o6m_1 = false;
    }
    return tmpOutline;
  }
  function onAddedToParentLayer($this) {
    $this.t6m_1 = $this.t6m_1 + 1 | 0;
  }
  function onRemovedFromParentLayer($this) {
    $this.t6m_1 = $this.t6m_1 - 1 | 0;
    discardContentIfReleasedAndHaveNoParentLayerUsages($this);
  }
  function resetOutlineParams($this) {
    $this.n6m_1 = null;
    $this.s6m_1 = null;
    $this.q6m_1 = Companion_getInstance_0().t5h_1;
    $this.p6m_1 = Companion_getInstance().p5g_1;
    $this.r6m_1 = 0.0;
    $this.o6m_1 = true;
  }
  function updateMatrix($this) {
    if (!$this.k6m_1)
      return Unit_instance;
    var pivotX;
    var pivotY;
    if (get_isUnspecified($this.k6n_1)) {
      pivotX = _IntSize___get_width__impl__d9yl4o($this.w6m_1) / 2.0;
      pivotY = _IntSize___get_height__impl__prv63b($this.w6m_1) / 2.0;
    } else {
      pivotX = _Offset___get_x__impl__xvi35n($this.k6n_1);
      pivotY = _Offset___get_y__impl__8bzhra($this.k6n_1);
    }
    prepareTransformationMatrix($this.l6m_1, pivotX, pivotY, $this.a6n_1, $this.b6n_1, $this.d6n_1, $this.e6n_1, $this.f6n_1, $this.y6m_1, $this.z6m_1, $this.g6n_1);
    $this.k6m_1 = false;
  }
  function discardContentIfReleasedAndHaveNoParentLayerUsages($this) {
    if ($this.n6n_1 && $this.t6m_1 === 0) {
      var tmp0_safe_receiver = $this.i6m_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.q4();
      }
      $this.h6m_1.q4();
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies' call
      var this_0 = $this.u6m_1;
      var tmp0_safe_receiver_0 = this_0.w6l_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.discardContentIfReleasedAndHaveNoParentLayerUsages.<anonymous>' call
        onRemovedFromParentLayer(tmp0_safe_receiver_0);
        this_0.w6l_1 = null;
      }
      var tmp1_safe_receiver = this_0.y6l_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var elements = tmp1_safe_receiver.o11_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp1_safe_receiver.n11_1;
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
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.discardContentIfReleasedAndHaveNoParentLayerUsages.<anonymous>' call
                      var tmp = elements[index];
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      onRemovedFromParentLayer(it);
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
        tmp1_safe_receiver.n2();
      }
      $this.f6m_1.t4a($this);
    }
  }
  function requiresLayer($this) {
    var alphaNeedsLayer = $this.x6m_1 < 1.0 && !($this.m6m_1 === Companion_getInstance_38().e6m_1);
    var hasColorFilter = !($this.m6n_1 == null);
    var hasBlendMode = !($this.l6n_1 === Companion_getInstance_13().f66_1);
    var hasRenderEffect = !($this.h6n_1 == null);
    var offscreenBufferRequested = $this.m6m_1 === Companion_getInstance_38().d6m_1;
    return alphaNeedsLayer || hasColorFilter || hasBlendMode || hasRenderEffect || offscreenBufferRequested;
  }
  function drawShadow($this, canvas) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = $this.i6n_1;
    var tmpOutline = $this.n6m_1;
    var tmp;
    if (tmpOutline instanceof Rectangle) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>.<anonymous>' call
      this_0.e6f(tmpOutline.c6e_1);
      tmp = this_0;
    } else {
      if (tmpOutline instanceof Rounded) {
        // Inline function 'kotlin.apply' call
        var this_1 = Path_0();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>.<anonymous>' call
        this_1.f6e(tmpOutline.d6e_1);
        tmp = this_1;
      } else {
        if (tmpOutline instanceof Generic) {
          tmp = tmpOutline.g6e_1;
        } else {
          return Unit_instance;
        }
      }
    }
    var path = tmp;
    var zParams = new Point3(0.0, 0.0, $this.c6n_1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(300);
    var tmp_0 = -$this$with.e5i(tmp$ret$2);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(600);
    var lightPos = new Point3(0.0, tmp_0, $this$with.e5i(tmp$ret$3));
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(800);
    var lightRad = $this$with.e5i(tmp$ret$4);
    var ambientAlpha = 0.039 * $this.x6m_1;
    var spotAlpha = 0.19 * $this.x6m_1;
    var ambientColor = Color__copy$default_impl_ectz3s($this.o6n_1, ambientAlpha);
    var spotColor = Color__copy$default_impl_ectz3s($this.p6n_1, spotAlpha);
    ShadowUtils_getInstance().f5w(get_nativeCanvas(canvas), asSkiaPath(path), zParams, lightPos, lightRad, toArgb(ambientColor), toArgb(spotColor), $this.x6m_1 < 1.0, false);
    return Unit_instance;
  }
  function GraphicsLayer$drawState$1() {
  }
  protoOf(GraphicsLayer$drawState$1).n6u = function (a, b) {
    return false;
  };
  protoOf(GraphicsLayer$drawState$1).a3a = function (a, b) {
    var tmp = a instanceof Unit ? a : THROW_CCE();
    return this.n6u(tmp, b instanceof Unit ? b : THROW_CCE());
  };
  protoOf(GraphicsLayer$drawState$1).o6u = function (previous, current, applied) {
    return current;
  };
  protoOf(GraphicsLayer$drawState$1).a3n = function (previous, current, applied) {
    var tmp = previous instanceof Unit ? previous : THROW_CCE();
    var tmp_0 = current instanceof Unit ? current : THROW_CCE();
    this.o6u(tmp, tmp_0, applied instanceof Unit ? applied : THROW_CCE());
    return Unit_instance;
  };
  function GraphicsLayer$record$lambda(this$0, $density, $layoutDirection, $skiaCanvas, $size, $block) {
    return function () {
      var this_0 = this$0.g6m_1;
      var density = $density;
      var layoutDirection = $layoutDirection;
      var canvas = $skiaCanvas;
      var size = toSize_0($size);
      var graphicsLayer = this$0;
      var prevDensity = this_0.v6k().d5i();
      var prevLayoutDirection = this_0.v6k().r6k();
      var prevCanvas = this_0.v6k().q5w();
      var prevSize = this_0.v6k().z5g();
      var prevLayer = this_0.v6k().u6k();
      // Inline function 'kotlin.apply' call
      var this_1 = this_0.v6k();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.draw.<anonymous>' call
      this_1.s6k(density);
      this_1.q6k(layoutDirection);
      this_1.n6k(canvas);
      this_1.o6k(size);
      this_1.t6k(graphicsLayer);
      canvas.n69();
      var tmp;
      try {
        tmp = $block(this_0);
      }finally {
        canvas.o69();
        // Inline function 'kotlin.apply' call
        var this_2 = this_0.v6k();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.draw.<anonymous>' call
        this_2.s6k(prevDensity);
        this_2.q6k(prevLayoutDirection);
        this_2.n6k(prevCanvas);
        this_2.o6k(prevSize);
        this_2.t6k(prevLayer);
      }
      return Unit_instance;
    };
  }
  function GraphicsLayer$trackRecord$lambda(it) {
    requestDraw(it);
    return Unit_instance;
  }
  function GraphicsLayer(snapshotObserver) {
    this.f6m_1 = snapshotObserver;
    this.g6m_1 = new CanvasDrawScope();
    this.h6m_1 = PictureRecorder_init_$Create$();
    this.i6m_1 = null;
    var tmp = this;
    tmp.j6m_1 = mutableStateOf(Unit_instance, new GraphicsLayer$drawState$1());
    this.k6m_1 = true;
    this.l6m_1 = _Matrix___init__impl__q3kp4w();
    this.m6m_1 = Companion_getInstance_38().c6m_1;
    this.n6m_1 = null;
    this.o6m_1 = true;
    this.p6m_1 = Companion_getInstance().p5g_1;
    this.q6m_1 = Companion_getInstance_0().t5h_1;
    this.r6m_1 = 0.0;
    this.s6m_1 = null;
    this.t6m_1 = 0;
    this.u6m_1 = new ChildLayerDependenciesTracker();
    this.v6m_1 = Companion_getInstance_1().e5j_1;
    this.w6m_1 = Companion_getInstance_12().n5j_1;
    this.x6m_1 = 1.0;
    this.y6m_1 = 1.0;
    this.z6m_1 = 1.0;
    this.a6n_1 = 0.0;
    this.b6n_1 = 0.0;
    this.c6n_1 = 0.0;
    this.d6n_1 = 0.0;
    this.e6n_1 = 0.0;
    this.f6n_1 = 0.0;
    this.g6n_1 = get_DefaultCameraDistance();
    this.h6n_1 = null;
    this.i6n_1 = Density(1.0);
    this.j6n_1 = false;
    this.k6n_1 = Companion_getInstance().r5g_1;
    this.l6n_1 = Companion_getInstance_13().f66_1;
    this.m6n_1 = null;
    this.n6n_1 = false;
    this.o6n_1 = Companion_getInstance_16().z67_1;
    this.p6n_1 = Companion_getInstance_16().z67_1;
  }
  protoOf(GraphicsLayer).p6u = function (value) {
    if (!equals(this.v6m_1, value)) {
      this.v6m_1 = value;
      updateLayerConfiguration$default(this);
    }
  };
  protoOf(GraphicsLayer).o68 = function (value) {
    this.x6m_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).q6u = function (value) {
    this.y6m_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).r6u = function (value) {
    this.z6m_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).s6u = function (value) {
    this.a6n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).t6u = function (value) {
    this.b6n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).u6u = function (value) {
    this.c6n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).v6u = function (value) {
    this.d6n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).w6u = function (value) {
    this.e6n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).x6u = function (value) {
    this.f6n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).y6u = function (value) {
    this.g6n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).z6u = function (value) {
    this.h6n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).a6v = function (density, layoutDirection, size, block) {
    var tmp0_safe_receiver = this.i6m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q4();
    }
    this.i6m_1 = null;
    this.i6n_1 = density;
    this.w6m_1 = size;
    updateLayerConfiguration(this, false);
    var bounds = toSkiaRect(toRect(toSize_0(size)));
    var canvas = this.h6m_1.n5v(bounds);
    var tmp = asComposeCanvas(canvas);
    var skiaCanvas = tmp instanceof SkiaBackedCanvas ? tmp : THROW_CCE();
    var tmp_0 = skiaCanvas;
    var tmp_1;
    if (this.m6m_1 === Companion_getInstance_38().e6m_1) {
      tmp_1 = this.x6m_1;
    } else {
      tmp_1 = 1.0;
    }
    tmp_0.z6s_1 = tmp_1;
    trackRecord(this, GraphicsLayer$record$lambda(this, density, layoutDirection, skiaCanvas, size, block));
    this.i6m_1 = this.h6m_1.o5v();
  };
  protoOf(GraphicsLayer).b6v = function (value) {
    this.j6n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).q6n = function (canvas, parentLayer) {
    if (this.n6n_1)
      return Unit_instance;
    var restoreCount = 0;
    if (parentLayer == null)
      null;
    else {
      addSubLayer(parentLayer, this);
    }
    this.j6m_1.c1();
    var tmp1_safe_receiver = this.i6m_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      configureOutline(this);
      updateMatrix(this);
      canvas.n69();
      restoreCount = restoreCount + 1 | 0;
      canvas.t69(this.l6m_1);
      canvas.q69(_IntOffset___get_x__impl__qiqr5o(this.v6m_1), _IntOffset___get_y__impl__2avpwj(this.v6m_1));
      if (this.c6n_1 > 0) {
        drawShadow(this, canvas);
      }
      if (this.j6n_1 || this.c6n_1 > 0.0) {
        canvas.n69();
        restoreCount = restoreCount + 1 | 0;
        var outline = this.n6m_1;
        if (outline instanceof Rectangle) {
          canvas.w69(outline.c6e_1);
        } else {
          if (outline instanceof Rounded) {
            (canvas instanceof SkiaBackedCanvas ? canvas : THROW_CCE()).n6t(outline.d6e_1);
          } else {
            if (outline instanceof Generic) {
              canvas.b6a(outline.g6e_1);
            } else {
              if (outline == null) {
                canvas.z69(0.0, 0.0, _IntSize___get_width__impl__d9yl4o(this.w6m_1), _IntSize___get_height__impl__prv63b(this.w6m_1));
              }
            }
          }
        }
      }
      var useLayer = requiresLayer(this);
      if (useLayer) {
        var tmp = new Rect_0(0.0, 0.0, _IntSize___get_width__impl__d9yl4o(this.w6m_1), _IntSize___get_height__impl__prv63b(this.w6m_1));
        // Inline function 'kotlin.apply' call
        var this_0 = Paint();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.draw.<anonymous>.<anonymous>' call
        this_0.o68(this.x6m_1);
        // Inline function 'kotlin.apply' call
        var this_1 = this_0.o6t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.draw.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = this.h6n_1;
        this_1.p5t(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v6t());
        var tmp1_safe_receiver_0 = this.m6n_1;
        this_1.k5t(tmp1_safe_receiver_0 == null ? null : asSkiaColorFilter(tmp1_safe_receiver_0));
        this_1.l5t(toSkia(this.l6n_1));
        canvas.p69(tmp, this_0);
        restoreCount = restoreCount + 1 | 0;
      } else {
        canvas.n69();
        restoreCount = restoreCount + 1 | 0;
      }
      get_nativeCanvas(canvas).o5n(tmp1_safe_receiver, null, null);
      // Inline function 'kotlin.repeat' call
      var times = restoreCount;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.draw.<anonymous>.<anonymous>' call
          canvas.o69();
        }
         while (inductionVariable < times);
    }
  };
  protoOf(GraphicsLayer).i6u = function () {
    if (!this.n6n_1) {
      this.n6n_1 = true;
      discardContentIfReleasedAndHaveNoParentLayerUsages(this);
    }
  };
  protoOf(GraphicsLayer).c6v = function (value) {
    this.k6n_1 = value;
    invalidateMatrix$default(this);
  };
  protoOf(GraphicsLayer).r6n = function (topLeft, size, cornerRadius) {
    resetOutlineParams(this);
    this.p6m_1 = topLeft;
    this.q6m_1 = size;
    this.r6m_1 = cornerRadius;
  };
  protoOf(GraphicsLayer).s6n = function (path) {
    resetOutlineParams(this);
    this.s6m_1 = path;
  };
  protoOf(GraphicsLayer).d6v = function () {
    return configureOutline(this);
  };
  protoOf(GraphicsLayer).t6n = function (topLeft, size) {
    this.r6n(topLeft, size, 0.0);
  };
  protoOf(GraphicsLayer).e6v = function (value) {
    this.o6n_1 = value;
    requestDraw(this);
  };
  protoOf(GraphicsLayer).f6v = function (value) {
    this.p6n_1 = value;
    requestDraw(this);
  };
  //region block: post-declaration
  protoOf(CanvasDrawScope).x6k = drawLine$default;
  protoOf(CanvasDrawScope).y6k = drawRect$default;
  protoOf(CanvasDrawScope).z6k = drawRect$default_0;
  protoOf(CanvasDrawScope).b6l = drawImage$default;
  protoOf(CanvasDrawScope).c6l = drawRoundRect$default;
  protoOf(CanvasDrawScope).e6l = drawCircle$default;
  protoOf(CanvasDrawScope).g6l = drawCircle$default_0;
  protoOf(CanvasDrawScope).i6l = drawArc$default;
  protoOf(CanvasDrawScope).j6l = drawPath$default;
  protoOf(CanvasDrawScope).k6l = drawPath$default_0;
  protoOf(CanvasDrawScope).l6l = get_center_0;
  protoOf(CanvasDrawScope).z5g = get_size;
  protoOf(CanvasDrawScope).e5i = toPx;
  protoOf(CanvasDrawScope).g5i = toPx_0;
  protoOf(CanvasDrawScope).f5i = roundToPx;
  protoOf(CanvasDrawScope).l5i = toDp;
  protoOf(CanvasDrawScope).m5i = toDp_0;
  protoOf(CanvasDrawScope).k5i = toDp_1;
  protoOf(CanvasDrawScope).n5i = toSize;
  protoOf(asDrawTransform$1).o6l = clipPath$default_0;
  protoOf(EmptyCanvas).z69 = clipRect$default_0;
  protoOf(EmptyCanvas).b6a = clipPath$default;
  protoOf(EmptyCanvas).u69 = clipRect;
  protoOf(EmptyCanvas).w69 = clipRect$default;
  protoOf(EmptyCanvas).d6a = drawRect;
  protoOf(SkiaBackedCanvas).z69 = clipRect$default_0;
  protoOf(SkiaBackedCanvas).b6a = clipPath$default;
  protoOf(SkiaBackedCanvas).u69 = clipRect;
  protoOf(SkiaBackedCanvas).w69 = clipRect$default;
  protoOf(SkiaBackedCanvas).d6a = drawRect;
  protoOf(SkiaBackedPath).e6f = addRect$default;
  protoOf(SkiaBackedPath).f6e = addRoundRect$default;
  protoOf(SkiaBackedPath).h6f = addPath$default;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_0();
  Companion_instance_5 = new Companion_3();
  Companion_instance_8 = new Companion_6();
  DefaultAlpha = 1.0;
  Companion_instance_18 = new Companion_16();
  Companion_instance_19 = new Companion_17();
  Companion_instance_20 = new Companion_18();
  DefaultCameraDistance = 8.0;
  Companion_instance_27 = new Companion_25();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = drawLayer;
  _.$_$.e = setOutline;
  _.$_$.f = BitmapPainter_0;
  _.$_$.g = BitmapPainter;
  _.$_$.h = Painter;
  _.$_$.i = PathBuilder;
  _.$_$.j = PathParser;
  _.$_$.k = toPath;
  _.$_$.l = BlendModeColorFilter;
  _.$_$.m = BlendMode;
  _.$_$.n = BlurEffect;
  _.$_$.o = Canvas_0;
  _.$_$.p = ColorProducer;
  _.$_$.q = Color_3;
  _.$_$.r = Color_2;
  _.$_$.s = Color_0;
  _.$_$.t = Color_1;
  _.$_$.u = Color;
  _.$_$.v = get_DefaultAlpha;
  _.$_$.w = ImageBitmapConfig;
  _.$_$.x = ImageBitmap_0;
  _.$_$.y = ImageBitmap;
  _.$_$.z = Matrix;
  _.$_$.a1 = Generic;
  _.$_$.b1 = Rectangle;
  _.$_$.c1 = Rounded;
  _.$_$.d1 = Paint;
  _.$_$.e1 = PathFillType;
  _.$_$.f1 = PathMeasure;
  _.$_$.g1 = Path_0;
  _.$_$.h1 = get_RectangleShape;
  _.$_$.i1 = ShaderBrush;
  _.$_$.j1 = Shadow;
  _.$_$.k1 = SkiaGraphicsContext;
  _.$_$.l1 = SolidColor;
  _.$_$.m1 = StrokeCap;
  _.$_$.n1 = StrokeJoin;
  _.$_$.o1 = TileMode;
  _.$_$.p1 = set_alphaMultiplier;
  _.$_$.q1 = asComposeCanvas;
  _.$_$.r1 = asComposeImageBitmap;
  _.$_$.s1 = asSkiaPath;
  _.$_$.t1 = compositeOver;
  _.$_$.u1 = computeCubicVerticalBounds;
  _.$_$.v1 = drawOutline;
  _.$_$.w1 = drawOutline_0;
  _.$_$.x1 = evaluateCubic;
  _.$_$.y1 = findFirstCubicRoot;
  _.$_$.z1 = lerp_2;
  _.$_$.a2 = lerp_1;
  _.$_$.b2 = luminance;
  _.$_$.c2 = get_nativeCanvas;
  _.$_$.d2 = prepareTransformationMatrix;
  _.$_$.e2 = toArgb;
  _.$_$.f2 = toComposeImageBitmap;
  _.$_$.g2 = toComposeRect;
  _.$_$.h2 = toSkiaRRect;
  _.$_$.i2 = toSkiaRect;
  _.$_$.j2 = drawArc$default;
  _.$_$.k2 = drawCircle$default;
  _.$_$.l2 = drawCircle$default_0;
  _.$_$.m2 = drawImage$default;
  _.$_$.n2 = drawLine$default;
  _.$_$.o2 = drawPath$default_0;
  _.$_$.p2 = drawPath$default;
  _.$_$.q2 = drawRect$default;
  _.$_$.r2 = drawRect$default_0;
  _.$_$.s2 = drawRoundRect$default;
  _.$_$.t2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.u2 = BlendMode__toString_impl_uuibkd;
  _.$_$.v2 = _Color___init__impl__r6cqi2;
  _.$_$.w2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.x2 = _Color___get_blue__impl__xwez13;
  _.$_$.y2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.z2 = Color__convert_impl_so5m8t;
  _.$_$.a3 = _Color___get_green__impl__bta9rs;
  _.$_$.b3 = Color__hashCode_impl_vjyivj;
  _.$_$.c3 = _Color___get_red__impl__cwrsk6;
  _.$_$.d3 = Color__toString_impl_hpzmaq;
  _.$_$.e3 = _Color___get_value__impl__1pls5m;
  _.$_$.f3 = _FilterQuality___init__impl__nv51aq;
  _.$_$.g3 = _FilterQuality___get_value__impl__vmx58a;
  _.$_$.h3 = _Matrix___init__impl__q3kp4w;
  _.$_$.i3 = Matrix__map_impl_7meu7m;
  _.$_$.j3 = Matrix__map_impl_7meu7m_0;
  _.$_$.k3 = Matrix__reset_impl_4l49i7;
  _.$_$.l3 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.m3 = Matrix__scale_impl_6w89a4;
  _.$_$.n3 = Matrix__timesAssign_impl_oas521;
  _.$_$.o3 = _Matrix___get_values__impl__fblr7b;
  _.$_$.p3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.q3 = _StrokeCap___init__impl__kfgr27;
  _.$_$.r3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.s3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.t3 = Color__copy$default_impl_ectz3s;
  _.$_$.u3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.v3 = ColorSpaces_getInstance;
  _.$_$.w3 = Companion_getInstance_36;
  _.$_$.x3 = Fill_getInstance;
  _.$_$.y3 = Companion_getInstance_38;
  _.$_$.z3 = Companion_getInstance_13;
  _.$_$.a4 = Companion_instance_2;
  _.$_$.b4 = Companion_getInstance_15;
  _.$_$.c4 = Companion_getInstance_16;
  _.$_$.d4 = Companion_instance_5;
  _.$_$.e4 = Companion_getInstance_19;
  _.$_$.f4 = Companion_getInstance_21;
  _.$_$.g4 = Companion_getInstance_22;
  _.$_$.h4 = Companion_getInstance_23;
  _.$_$.i4 = Companion_getInstance_24;
  _.$_$.j4 = Companion_getInstance_25;
  _.$_$.k4 = Companion_getInstance_26;
  _.$_$.l4 = Companion_getInstance_27;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
