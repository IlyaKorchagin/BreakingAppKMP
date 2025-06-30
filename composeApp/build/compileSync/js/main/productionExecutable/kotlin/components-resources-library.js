(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'components-resources-library'.");
    }
    globalThis['components-resources-library'] = factory(typeof globalThis['components-resources-library'] === 'undefined' ? {} : globalThis['components-resources-library'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var protoOf = kotlin_kotlin.$_$.ff;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.oe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var VOID = kotlin_kotlin.$_$.j;
  var CoroutineStart_LAZY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var endsWith = kotlin_kotlin.$_$.nh;
  var rememberVectorPainter = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.s5;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var lazy = kotlin_kotlin.$_$.ql;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var Enum = kotlin_kotlin.$_$.bk;
  var enumEntries = kotlin_kotlin.$_$.zc;
  var toString = kotlin_kotlin.$_$.jf;
  var hashCode = kotlin_kotlin.$_$.xd;
  var equals = kotlin_kotlin.$_$.od;
  var toList = kotlin_kotlin.$_$.rb;
  var first = kotlin_kotlin.$_$.y8;
  var joinToString = kotlin_kotlin.$_$.n9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var emptyList = kotlin_kotlin.$_$.o8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var sortedWith = kotlin_kotlin.$_$.ib;
  var Collection = kotlin_kotlin.$_$.q6;
  var minus = kotlin_kotlin.$_$.ha;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var Comparator = kotlin_kotlin.$_$.ak;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b3;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z1;
  var compareValues = kotlin_kotlin.$_$.cc;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Exception = kotlin_kotlin.$_$.dk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b2;
  var captureStack = kotlin_kotlin.$_$.fd;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var split = kotlin_kotlin.$_$.li;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var mapCapacity = kotlin_kotlin.$_$.ea;
  var coerceAtLeast = kotlin_kotlin.$_$.vf;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var substringBefore = kotlin_kotlin.$_$.ti;
  var substringAfter = kotlin_kotlin.$_$.qi;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var Default_getInstance = kotlin_kotlin.$_$.k5;
  var decodeToString = kotlin_kotlin.$_$.jh;
  var to = kotlin_kotlin.$_$.dm;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var charArrayOf = kotlin_kotlin.$_$.gd;
  var split_0 = kotlin_kotlin.$_$.ki;
  var last = kotlin_kotlin.$_$.x9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.n1;
  var equals_0 = kotlin_kotlin.$_$.oh;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i3;
  var removeSuffix = kotlin_kotlin.$_$.ei;
  var toDouble = kotlin_kotlin.$_$.zi;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g4;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j4;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k4;
  var startsWith = kotlin_kotlin.$_$.mi;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var toUInt = kotlin_kotlin.$_$.jj;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.k4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l4;
  var isBlank = kotlin_kotlin.$_$.vh;
  var filter = kotlin_kotlin.$_$.ug;
  var Sequence = kotlin_kotlin.$_$.qg;
  var sequence = kotlin_kotlin.$_$.ah;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n1;
  var get_DefaultRotation = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var get_DefaultPivotX = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var get_DefaultPivotY = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var get_DefaultScaleX = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var get_DefaultScaleY = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var get_DefaultTranslationX = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var get_DefaultTranslationY = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var removeLastOrNull = kotlin_kotlin.$_$.xa;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var toList_0 = kotlin_kotlin.$_$.ch;
  var checkIndexOverflow = kotlin_kotlin.$_$.p7;
  var get_lastIndex = kotlin_kotlin.$_$.r9;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var copyToArray = kotlin_kotlin.$_$.k8;
  var SequenceScope = kotlin_kotlin.$_$.pg;
  var until = kotlin_kotlin.$_$.ig;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e4;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var Companion_instance_1 = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.a5;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.x4;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.k5;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x3;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var Long = kotlin_kotlin.$_$.hk;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(AsyncCache$getOrLoad$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncCache$getOrLoad$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(AsyncCache, 'AsyncCache', AsyncCache, VOID, VOID, [2]);
  initMetadataForClass(Bitmap, 'Bitmap');
  initMetadataForClass(Vector, 'Vector');
  initMetadataForClass(Svg, 'Svg');
  initMetadataForClass(Resource, 'Resource');
  initMetadataForClass(DrawableResource, 'DrawableResource', VOID, Resource);
  initMetadataForLambda(vectorResource$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(svgPainter$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(imageResource$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(loadImage$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(LanguageQualifier, 'LanguageQualifier');
  initMetadataForClass(RegionQualifier, 'RegionQualifier');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ThemeQualifier, 'ThemeQualifier', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DensityQualifier, 'DensityQualifier', VOID, Enum);
  initMetadataForClass(ResourceItem, 'ResourceItem');
  initMetadataForClass(ResourceEnvironment, 'ResourceEnvironment');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(DefaultComposeEnvironment$1);
  initMetadataForClass(MissingResourceException, 'MissingResourceException', VOID, Exception);
  initMetadataForClass(StringResource, 'StringResource', VOID, Resource);
  initMetadataForLambda(stringResource$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadStringCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(Value, 'Value');
  initMetadataForClass(Plurals, 'Plurals');
  initMetadataForClass(Array_0, 'Array');
  initMetadataForLambda(getStringItem$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PluralCategory, 'PluralCategory', VOID, Enum);
  initMetadataForClass(Group, 'Group', VOID, Enum);
  initMetadataForClass(BuildContext, 'BuildContext', BuildContext);
  initMetadataForLambda(_get_childrenSequence_$slambda_9jpw3j, CoroutineImpl, VOID, [1]);
  initMetadataForInterface(Element_0, 'Element');
  initMetadataForClass(MalformedXMLException, 'MalformedXMLException', VOID, Exception);
  initMetadataForCoroutine($readCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($readPartCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($readAsBlobCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($asByteArrayCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(getPlatformResourceReader$1, VOID, VOID, VOID, VOID, [1, 3, 0]);
  initMetadataForClass(NodeImpl, 'NodeImpl');
  initMetadataForClass(ElementImpl, 'ElementImpl', VOID, NodeImpl, [NodeImpl, Element_0]);
  initMetadataForClass(NodeImpl$childNodes$2$1);
  initMetadataForClass(DrawCache, 'DrawCache', DrawCache);
  initMetadataForClass(SvgElement, 'SvgElement');
  initMetadataForClass(SvgPainter, 'SvgPainter', VOID, Painter);
  initMetadataForObject(WebResourcesConfiguration, 'WebResourcesConfiguration');
  initMetadataForLambda(rememberResourceState$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(rememberResourceState$slambda_1, CoroutineImpl, VOID, [1]);
  //endregion
  function AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation) {
    this.lhs_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda$slambda).nhs = function ($this$async, $completion) {
    var tmp = this.b20($this$async, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).ma = function (p1, $completion) {
    return this.nhs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.lhs_1(this);
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
  protoOf(AsyncCache$getOrLoad$slambda$slambda).b20 = function ($this$async, completion) {
    var i = new AsyncCache$getOrLoad$slambda$slambda(this.lhs_1, completion);
    i.mhs_1 = $this$async;
    return i;
  };
  function AsyncCache$getOrLoad$slambda$slambda_0($load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.nhs($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation) {
    this.whs_1 = this$0;
    this.xhs_1 = $key;
    this.yhs_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda).nhs = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AsyncCache$getOrLoad$slambda).ma = function (p1, $completion) {
    return this.nhs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            var tmp_0 = this;
            tmp_0.aht_1 = this.whs_1.dht_1;
            var tmp_1 = this;
            tmp_1.bht_1 = null;
            this.s9_1 = 1;
            suspendResult = this.aht_1.i2i(this.bht_1, this);
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
                var cached = this.whs_1.eht_1.s2(this.xhs_1);
                if (cached == null || cached.e15()) {
                  var tmp_4 = CoroutineStart_LAZY_getInstance();
                  cached = async(this.zhs_1, VOID, tmp_4, AsyncCache$getOrLoad$slambda$slambda_0(this.yhs_1, null));
                  var this_0 = this.whs_1.eht_1;
                  var key = this.xhs_1;
                  var value = cached;
                  this_0.k2(key, value);
                }
                tmp$ret$0 = cached;
                break l$ret$1;
              } catch ($p) {
                var tmp_5;
                var t = $p;
                this.aht_1.k2i(this.bht_1);
                throw t;
              }
            }
             while (false);
            var tmp_6 = tmp$ret$0;
            this.aht_1.k2i(this.bht_1);
            tmp_2.cht_1 = tmp_6;
            this.s9_1 = 2;
            suspendResult = this.cht_1.y17(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(AsyncCache$getOrLoad$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new AsyncCache$getOrLoad$slambda(this.whs_1, this.xhs_1, this.yhs_1, completion);
    i.zhs_1 = $this$coroutineScope;
    return i;
  };
  function AsyncCache$getOrLoad$slambda_0(this$0, $key, $load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.nhs($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache() {
    this.dht_1 = Mutex();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.eht_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AsyncCache).fht = function (key, load, $completion) {
    return coroutineScope(AsyncCache$getOrLoad$slambda_0(this, key, load, null), $completion);
  };
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageBitmap$delegate;
    emptyImageBitmap$factory();
    return this_0.c1();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageVector$delegate;
    emptyImageVector$factory();
    return this_0.c1();
  }
  var emptyImageVector$delegate;
  function get_emptySvgPainter() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptySvgPainter$delegate;
    emptySvgPainter$factory();
    return this_0.c1();
  }
  var emptySvgPainter$delegate;
  function get_imageCache() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCache;
  }
  var imageCache;
  function Bitmap(bitmap) {
    this.ght_1 = bitmap;
  }
  function Vector(vector) {
    this.hht_1 = vector;
  }
  function Svg(painter) {
    this.iht_1 = painter;
  }
  function DrawableResource(id, items) {
    Resource.call(this, id, items);
  }
  function painterResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.a31(-1508925367);
    if (isTraceInProgress()) {
      traceEventStart(-1508925367, $changed, -1, 'org.jetbrains.compose.resources.painterResource (ImageResources.kt:35)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.jht($composer_0, 0);
    $composer_0.a31(-1389301971);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(resource) || ($changed & 6) === 4) | $composer_0.f2r(environment));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.painterResource.<anonymous>' call
      var value = getResourceItemByEnvironment(resource, environment).lht_1;
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    var filePath = tmp0_group;
    if (endsWith(filePath, '.xml', true)) {
      $composer_0.a31(-118556854);
      var tmp1_return = rememberVectorPainter(vectorResource(resource, $composer_0, 14 & $changed), $composer_0, 0);
      $composer_0.c31();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.c31();
      return tmp1_return;
    } else if (endsWith(filePath, '.svg', true)) {
      $composer_0.a31(-118445595);
      var tmp2_return = svgPainter(resource, $composer_0, 14 & $changed);
      $composer_0.c31();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.c31();
      return tmp2_return;
    } else {
      $composer_0.a31(-118396429);
      var tmp3_return = new BitmapPainter(imageResource(resource, $composer_0, 14 & $changed));
      $composer_0.c31();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.c31();
      return tmp3_return;
    }
  }
  function vectorResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.a31(-1394399862);
    if (isTraceInProgress()) {
      traceEventStart(-1394399862, $changed, -1, 'org.jetbrains.compose.resources.vectorResource (ImageResources.kt:86)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.a31(1002149100);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.vectorResource.<anonymous>' call
      var value = vectorResource$lambda_0;
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    var imageVector$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, vectorResource$slambda_0(resource, resourceReader, density, null), $composer_0, 35840 | 14 & $changed);
    var tmp0_0 = vectorResource$lambda(imageVector$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0_0;
  }
  function svgPainter(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.a31(1371694195);
    if (isTraceInProgress()) {
      traceEventStart(1371694195, $changed, -1, 'org.jetbrains.compose.resources.svgPainter (ImageResources.kt:106)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.a31(-946511423);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.svgPainter.<anonymous>' call
      var value = svgPainter$lambda_0;
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    var svgPainter$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, svgPainter$slambda_0(resource, resourceReader, density, null), $composer_0, 35840 | 14 & $changed);
    var tmp0_0 = svgPainter$lambda(svgPainter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0_0;
  }
  function imageResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.a31(1838739546);
    if (isTraceInProgress()) {
      traceEventStart(1838739546, $changed, -1, 'org.jetbrains.compose.resources.imageResource (ImageResources.kt:56)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    var resourceEnvironment = rememberResourceEnvironment($composer_0, 0);
    $composer_0.a31(1334344470);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.imageResource.<anonymous>' call
      var value = imageResource$lambda_0;
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    var imageBitmap$delegate = rememberResourceState(resource, resourceReader, resourceEnvironment, tmp1_group, imageResource$slambda_0(resource, resourceEnvironment, resourceReader, null), $composer_0, 35840 | 14 & $changed);
    var tmp0 = imageResource$lambda(imageBitmap$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function loadImage(path, cacheKey, resourceReader, decode, $completion) {
    var tmp = get_imageCache();
    return tmp.fht(cacheKey, loadImage$slambda_0(decode, resourceReader, path, null), $completion);
  }
  function vectorResource$lambda($imageVector$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageVector', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $imageVector$delegate.c1();
  }
  function svgPainter$lambda($svgPainter$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('svgPainter', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $svgPainter$delegate.c1();
  }
  function imageResource$lambda($imageBitmap$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageBitmap', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $imageBitmap$delegate.c1();
  }
  function emptyImageBitmap$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return ImageBitmap(1, 1);
  }
  function emptyImageVector$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).a2u();
  }
  function emptySvgPainter$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return new BitmapPainter(get_emptyImageBitmap());
  }
  function vectorResource$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptyImageVector();
  }
  function vectorResource$slambda$lambda($density) {
    return function (it) {
      return new Vector(toImageVector(toXmlElement(it), $density));
    };
  }
  function vectorResource$slambda($resource, $resourceReader, $density, resultContinuation) {
    this.wht_1 = $resource;
    this.xht_1 = $resourceReader;
    this.yht_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(vectorResource$slambda).bhu = function (env, $completion) {
    var tmp = this.chu(env, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(vectorResource$slambda).ma = function (p1, $completion) {
    return this.bhu(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(vectorResource$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.ahu_1 = getResourceItemByEnvironment(this.wht_1, this.zht_1).lht_1;
            this.s9_1 = 1;
            suspendResult = loadImage(this.ahu_1, this.ahu_1, this.xht_1, vectorResource$slambda$lambda(this.yht_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Vector ? suspendResult : THROW_CCE();
            return cached.hht_1;
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
  protoOf(vectorResource$slambda).chu = function (env, completion) {
    var i = new vectorResource$slambda(this.wht_1, this.xht_1, this.yht_1, completion);
    i.zht_1 = env;
    return i;
  };
  function vectorResource$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new vectorResource$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.bhu(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function svgPainter$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptySvgPainter();
  }
  function svgPainter$slambda$lambda($density) {
    return function (it) {
      return new Svg(toSvgPainter(toSvgElement(it), $density));
    };
  }
  function svgPainter$slambda($resource, $resourceReader, $density, resultContinuation) {
    this.lhu_1 = $resource;
    this.mhu_1 = $resourceReader;
    this.nhu_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(svgPainter$slambda).qhu = function (env, $completion) {
    var tmp = this.chu(env, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(svgPainter$slambda).ma = function (p1, $completion) {
    return this.qhu(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(svgPainter$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.phu_1 = getResourceItemByEnvironment(this.lhu_1, this.ohu_1).lht_1;
            this.s9_1 = 1;
            suspendResult = loadImage(this.phu_1, this.phu_1, this.mhu_1, svgPainter$slambda$lambda(this.nhu_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Svg ? suspendResult : THROW_CCE();
            return cached.iht_1;
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
  protoOf(svgPainter$slambda).chu = function (env, completion) {
    var i = new svgPainter$slambda(this.lhu_1, this.mhu_1, this.nhu_1, completion);
    i.ohu_1 = env;
    return i;
  };
  function svgPainter$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new svgPainter$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.qhu(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function imageResource$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptyImageBitmap();
  }
  function imageResource$slambda$lambda($resourceDensity, $screenDensity) {
    return function (it) {
      return new Bitmap(toImageBitmap(it, $resourceDensity, $screenDensity));
    };
  }
  function imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    this.zhu_1 = $resource;
    this.ahv_1 = $resourceEnvironment;
    this.bhv_1 = $resourceReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(imageResource$slambda).ihv = function (env, $completion) {
    var tmp = this.chu(env, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(imageResource$slambda).ma = function (p1, $completion) {
    return this.ihv(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(imageResource$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.dhv_1 = getResourceItemByEnvironment(this.zhu_1, this.chv_1);
            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = this.dhv_1.kht_1.m();
              while (tmp0_iterator.n()) {
                var element = tmp0_iterator.o();
                if (element instanceof DensityQualifier) {
                  tmp$ret$0 = element;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = null;
            }
             while (false);
            var tmp_1 = tmp$ret$0;
            tmp_0.ehv_1 = tmp_1 instanceof DensityQualifier ? tmp_1 : null;
            var tmp_2 = this;
            var tmp0_safe_receiver = this.ehv_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lhv_1;
            tmp_2.fhv_1 = tmp1_elvis_lhs == null ? DensityQualifier_MDPI_getInstance().lhv_1 : tmp1_elvis_lhs;
            this.ghv_1 = this.ahv_1.phv_1.lhv_1;
            this.hhv_1 = this.dhv_1.lht_1;
            this.s9_1 = 1;
            var tmp_3 = this.hhv_1 + '-' + this.ghv_1 + 'dpi';
            suspendResult = loadImage(this.hhv_1, tmp_3, this.bhv_1, imageResource$slambda$lambda(this.fhv_1, this.ghv_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Bitmap ? suspendResult : THROW_CCE();
            return cached.ght_1;
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
  protoOf(imageResource$slambda).chu = function (env, completion) {
    var i = new imageResource$slambda(this.zhu_1, this.ahv_1, this.bhv_1, completion);
    i.chv_1 = env;
    return i;
  };
  function imageResource$slambda_0($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    var i = new imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation);
    var l = function (env, $completion) {
      return i.ihv(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadImage$slambda($decode, $resourceReader, $path, resultContinuation) {
    this.yhv_1 = $decode;
    this.zhv_1 = $resourceReader;
    this.ahw_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImage$slambda).bhw = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(loadImage$slambda).ib = function ($completion) {
    return this.bhw($completion);
  };
  protoOf(loadImage$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.zhv_1.chw(this.ahw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.yhv_1(ARGUMENT);
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
  protoOf(loadImage$slambda).z25 = function (completion) {
    return new loadImage$slambda(this.yhv_1, this.zhv_1, this.ahw_1, completion);
  };
  function loadImage$slambda_0($decode, $resourceReader, $path, resultContinuation) {
    var i = new loadImage$slambda($decode, $resourceReader, $path, resultContinuation);
    var l = function ($completion) {
      return i.bhw($completion);
    };
    l.$arity = 0;
    return l;
  }
  function emptyImageBitmap$factory() {
    return getPropertyCallableRef('emptyImageBitmap', 0, KProperty0, function () {
      return get_emptyImageBitmap();
    }, null);
  }
  function emptyImageVector$factory() {
    return getPropertyCallableRef('emptyImageVector', 0, KProperty0, function () {
      return get_emptyImageVector();
    }, null);
  }
  function emptySvgPainter$factory() {
    return getPropertyCallableRef('emptySvgPainter', 0, KProperty0, function () {
      return get_emptySvgPainter();
    }, null);
  }
  var properties_initialized_ImageResources_kt_9gvoi4;
  function _init_properties_ImageResources_kt__6e1y7e() {
    if (!properties_initialized_ImageResources_kt_9gvoi4) {
      properties_initialized_ImageResources_kt_9gvoi4 = true;
      emptyImageBitmap$delegate = lazy(emptyImageBitmap$delegate$lambda);
      emptyImageVector$delegate = lazy(emptyImageVector$delegate$lambda);
      emptySvgPainter$delegate = lazy(emptySvgPainter$delegate$lambda);
      imageCache = new AsyncCache();
    }
  }
  function LanguageQualifier(language) {
    this.dhw_1 = language;
  }
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof LanguageQualifier))
      THROW_CCE();
    return this.dhw_1 === other.dhw_1;
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.dhw_1);
  };
  protoOf(LanguageQualifier).toString = function () {
    return "LanguageQualifier(language='" + this.dhw_1 + "')";
  };
  function RegionQualifier(region) {
    this.ehw_1 = region;
  }
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof RegionQualifier))
      THROW_CCE();
    return this.ehw_1 === other.ehw_1;
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.ehw_1);
  };
  protoOf(RegionQualifier).toString = function () {
    return "RegionQualifier(region='" + this.ehw_1 + "')";
  };
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
  }
  protoOf(Companion).fhw = function (isDark) {
    return isDark ? ThemeQualifier_DARK_getInstance() : ThemeQualifier_LIGHT_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_13() {
    return Companion_instance_2;
  }
  var ThemeQualifier_entriesInitialized;
  function ThemeQualifier_initEntries() {
    if (ThemeQualifier_entriesInitialized)
      return Unit_instance;
    ThemeQualifier_entriesInitialized = true;
    ThemeQualifier_LIGHT_instance = new ThemeQualifier('LIGHT', 0);
    ThemeQualifier_DARK_instance = new ThemeQualifier('DARK', 1);
  }
  function ThemeQualifier(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DensityQualifier_LDPI_instance;
  var DensityQualifier_MDPI_instance;
  var DensityQualifier_HDPI_instance;
  var DensityQualifier_XHDPI_instance;
  var DensityQualifier_XXHDPI_instance;
  var DensityQualifier_XXXHDPI_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).ghw = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().lhv_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().lhv_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().lhv_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().lhv_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().lhv_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).hhw = function (density) {
    return density <= 0.75 ? DensityQualifier_LDPI_getInstance() : density <= 1.0 ? DensityQualifier_MDPI_getInstance() : density <= 1.5 ? DensityQualifier_HDPI_getInstance() : density <= 2.0 ? DensityQualifier_XHDPI_getInstance() : density <= 3.0 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_14() {
    return Companion_instance_3;
  }
  function values() {
    return [DensityQualifier_LDPI_getInstance(), DensityQualifier_MDPI_getInstance(), DensityQualifier_HDPI_getInstance(), DensityQualifier_XHDPI_getInstance(), DensityQualifier_XXHDPI_getInstance(), DensityQualifier_XXXHDPI_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DensityQualifier_entriesInitialized;
  function DensityQualifier_initEntries() {
    if (DensityQualifier_entriesInitialized)
      return Unit_instance;
    DensityQualifier_entriesInitialized = true;
    DensityQualifier_LDPI_instance = new DensityQualifier('LDPI', 0, 120);
    DensityQualifier_MDPI_instance = new DensityQualifier('MDPI', 1, 160);
    DensityQualifier_HDPI_instance = new DensityQualifier('HDPI', 2, 240);
    DensityQualifier_XHDPI_instance = new DensityQualifier('XHDPI', 3, 320);
    DensityQualifier_XXHDPI_instance = new DensityQualifier('XXHDPI', 4, 480);
    DensityQualifier_XXXHDPI_instance = new DensityQualifier('XXXHDPI', 5, 640);
  }
  var $ENTRIES;
  function DensityQualifier(name, ordinal, dpi) {
    Enum.call(this, name, ordinal);
    this.lhv_1 = dpi;
  }
  function ThemeQualifier_LIGHT_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_LIGHT_instance;
  }
  function ThemeQualifier_DARK_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_DARK_instance;
  }
  function DensityQualifier_LDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_LDPI_instance;
  }
  function DensityQualifier_MDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_MDPI_instance;
  }
  function DensityQualifier_HDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_HDPI_instance;
  }
  function DensityQualifier_XHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XHDPI_instance;
  }
  function DensityQualifier_XXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXHDPI_instance;
  }
  function DensityQualifier_XXXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXXHDPI_instance;
  }
  function ResourceItem(qualifiers, path, offset, size) {
    this.kht_1 = qualifiers;
    this.lht_1 = path;
    this.mht_1 = offset;
    this.nht_1 = size;
  }
  protoOf(ResourceItem).toString = function () {
    return 'ResourceItem(qualifiers=' + toString(this.kht_1) + ', path=' + this.lht_1 + ', offset=' + this.mht_1.toString() + ', size=' + this.nht_1.toString() + ')';
  };
  protoOf(ResourceItem).hashCode = function () {
    var result = hashCode(this.kht_1);
    result = imul(result, 31) + getStringHashCode(this.lht_1) | 0;
    result = imul(result, 31) + this.mht_1.hashCode() | 0;
    result = imul(result, 31) + this.nht_1.hashCode() | 0;
    return result;
  };
  protoOf(ResourceItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceItem))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceItem ? other : THROW_CCE();
    if (!equals(this.kht_1, tmp0_other_with_cast.kht_1))
      return false;
    if (!(this.lht_1 === tmp0_other_with_cast.lht_1))
      return false;
    if (!this.mht_1.equals(tmp0_other_with_cast.mht_1))
      return false;
    if (!this.nht_1.equals(tmp0_other_with_cast.nht_1))
      return false;
    return true;
  };
  function Resource(id, items) {
    this.ihw_1 = id;
    this.jhw_1 = items;
  }
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Resource))
      THROW_CCE();
    return this.ihw_1 === other.ihw_1;
  };
  protoOf(Resource).hashCode = function () {
    return getStringHashCode(this.ihw_1);
  };
  function get_DefaultComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return DefaultComposeEnvironment;
  }
  var DefaultComposeEnvironment;
  function get_LocalComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return LocalComposeEnvironment;
  }
  var LocalComposeEnvironment;
  var getResourceEnvironment;
  function ResourceEnvironment(language, region, theme, density) {
    this.mhv_1 = language;
    this.nhv_1 = region;
    this.ohv_1 = theme;
    this.phv_1 = density;
  }
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ResourceEnvironment))
      THROW_CCE();
    if (!this.mhv_1.equals(other.mhv_1))
      return false;
    if (!this.nhv_1.equals(other.nhv_1))
      return false;
    if (!this.ohv_1.equals(other.ohv_1))
      return false;
    if (!this.phv_1.equals(other.phv_1))
      return false;
    return true;
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.mhv_1.hashCode();
    result = imul(31, result) + this.nhv_1.hashCode() | 0;
    result = imul(31, result) + this.ohv_1.hashCode() | 0;
    result = imul(31, result) + this.phv_1.hashCode() | 0;
    return result;
  };
  function getResourceItemByEnvironment(_this__u8e3s4, environment) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    var this_0 = filterByLocale(toList(_this__u8e3s4.jhw_1), environment.mhv_1, environment.nhv_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    if (this_0.p() === 1)
      return first(this_0);
    var this_1 = filterBy(this_0, environment.ohv_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    if (this_1.p() === 1)
      return first(this_1);
    var this_2 = filterByDensity(this_1, environment.phv_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    if (this_2.p() === 1)
      return first(this_2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    var tmp;
    if (this_2.j()) {
      var message = "Resource with ID='" + _this__u8e3s4.ihw_1 + "' not found";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var message_0 = "Resource with ID='" + _this__u8e3s4.ihw_1 + "' has more than one file: " + joinToString(this_2, VOID, VOID, VOID, VOID, VOID, getResourceItemByEnvironment$lambda);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function rememberResourceEnvironment($composer, $changed) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var $composer_0 = $composer;
    $composer_0.a31(707674437);
    if (isTraceInProgress()) {
      traceEventStart(707674437, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceEnvironment (ResourceEnvironment.kt:73)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeEnvironment = tmp0;
    var tmp0_0 = composeEnvironment.jht($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0_0;
  }
  function filterByDensity(_this__u8e3s4, density) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var items = _this__u8e3s4;
    var withQualifier = emptyList();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = get_entries();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      if (element.lhv_1 >= density.lhv_1) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = filterByDensity$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0(tmp);
    var exactAndHigherQualifiers = sortedWith(destination, tmp$ret$3);
    var tmp0_iterator_0 = exactAndHigherQualifiers.m();
    $l$loop: while (tmp0_iterator_0.n()) {
      var qualifier = tmp0_iterator_0.o();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var tmp0_iterator_1 = items.m();
      while (tmp0_iterator_1.n()) {
        var element_0 = tmp0_iterator_1.o();
        // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var this_1 = element_0.kht_1;
          var tmp_0;
          if (isInterface(this_1, Collection)) {
            tmp_0 = this_1.j();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$5 = false;
            break $l$block_0;
          }
          var tmp0_iterator_2 = this_1.m();
          while (tmp0_iterator_2.n()) {
            var element_1 = tmp0_iterator_2.o();
            // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>.<anonymous>' call
            if (equals(element_1, qualifier)) {
              tmp$ret$5 = true;
              break $l$block_0;
            }
          }
          tmp$ret$5 = false;
        }
        if (tmp$ret$5) {
          destination_0.e(element_0);
        }
      }
      withQualifier = destination_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.j())
        break $l$loop;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.j())
      return withQualifier;
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_2 = minus(get_entries(), DensityQualifier_LDPI_getInstance());
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_3 = this_2.m();
    while (tmp0_iterator_3.n()) {
      var element_2 = tmp0_iterator_3.o();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      if (element_2.lhv_1 < density.lhv_1) {
        destination_1.e(element_2);
      }
    }
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = filterByDensity$lambda_0;
    var tmp$ret$15 = new sam$kotlin_Comparator$0(tmp_1);
    var lowQualifiers = sortedWith(destination_1, tmp$ret$15);
    var tmp1_iterator = lowQualifiers.m();
    $l$loop_0: while (tmp1_iterator.n()) {
      var qualifier_0 = tmp1_iterator.o();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_2 = ArrayList_init_$Create$();
      var tmp0_iterator_4 = items.m();
      while (tmp0_iterator_4.n()) {
        var element_3 = tmp0_iterator_4.o();
        // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
        var tmp$ret$17;
        $l$block_2: {
          // Inline function 'kotlin.collections.any' call
          var this_3 = element_3.kht_1;
          var tmp_2;
          if (isInterface(this_3, Collection)) {
            tmp_2 = this_3.j();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$17 = false;
            break $l$block_2;
          }
          var tmp0_iterator_5 = this_3.m();
          while (tmp0_iterator_5.n()) {
            var element_4 = tmp0_iterator_5.o();
            // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>.<anonymous>' call
            if (equals(element_4, qualifier_0)) {
              tmp$ret$17 = true;
              break $l$block_2;
            }
          }
          tmp$ret$17 = false;
        }
        if (tmp$ret$17) {
          destination_2.e(element_3);
        }
      }
      withQualifier = destination_2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.j())
        break $l$loop_0;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.j())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$();
    var tmp0_iterator_6 = items.m();
    while (tmp0_iterator_6.n()) {
      var element_5 = tmp0_iterator_6.o();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      var tmp$ret$24;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var this_4 = element_5.kht_1;
        var tmp_3;
        if (isInterface(this_4, Collection)) {
          tmp_3 = this_4.j();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$24 = true;
          break $l$block_4;
        }
        var tmp0_iterator_7 = this_4.m();
        while (tmp0_iterator_7.n()) {
          var element_6 = tmp0_iterator_7.o();
          // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>.<anonymous>' call
          if (element_6 instanceof DensityQualifier) {
            tmp$ret$24 = false;
            break $l$block_4;
          }
        }
        tmp$ret$24 = true;
      }
      if (tmp$ret$24) {
        destination_3.e(element_5);
      }
    }
    var withNoDensity = destination_3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withNoDensity.j())
      return withNoDensity;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = ArrayList_init_$Create$();
    var tmp0_iterator_8 = items.m();
    while (tmp0_iterator_8.n()) {
      var element_7 = tmp0_iterator_8.o();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      var tmp$ret$30;
      $l$block_6: {
        // Inline function 'kotlin.collections.any' call
        var this_5 = element_7.kht_1;
        var tmp_4;
        if (isInterface(this_5, Collection)) {
          tmp_4 = this_5.j();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp$ret$30 = false;
          break $l$block_6;
        }
        var tmp0_iterator_9 = this_5.m();
        while (tmp0_iterator_9.n()) {
          var element_8 = tmp0_iterator_9.o();
          // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>.<anonymous>' call
          if (equals(element_8, DensityQualifier_LDPI_getInstance())) {
            tmp$ret$30 = true;
            break $l$block_6;
          }
        }
        tmp$ret$30 = false;
      }
      if (tmp$ret$30) {
        destination_4.e(element_7);
      }
    }
    return destination_4;
  }
  function filterBy(_this__u8e3s4, qualifier) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.jetbrains.compose.resources.filterBy.<anonymous>' call
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = element.kht_1;
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.j();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = this_0.m();
        while (tmp0_iterator_0.n()) {
          var element_0 = tmp0_iterator_0.o();
          // Inline function 'org.jetbrains.compose.resources.filterBy.<anonymous>.<anonymous>' call
          if (equals(element_0, qualifier)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        destination.e(element);
      }
    }
    var withQualifier = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.j())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = _this__u8e3s4.m();
    while (tmp0_iterator_1.n()) {
      var element_1 = tmp0_iterator_1.o();
      // Inline function 'org.jetbrains.compose.resources.filterBy.<anonymous>' call
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var this_1 = element_1.kht_1;
        var tmp_0;
        if (isInterface(this_1, Collection)) {
          tmp_0 = this_1.j();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$6 = true;
          break $l$block_2;
        }
        var tmp0_iterator_2 = this_1.m();
        while (tmp0_iterator_2.n()) {
          var element_2 = tmp0_iterator_2.o();
          // Inline function 'org.jetbrains.compose.resources.filterBy.<anonymous>.<anonymous>' call
          if (getKClassFromExpression(element_2).equals(getKClassFromExpression(qualifier))) {
            tmp$ret$6 = false;
            break $l$block_2;
          }
        }
        tmp$ret$6 = true;
      }
      if (tmp$ret$6) {
        destination_0.e(element_1);
      }
    }
    return destination_0;
  }
  function filterByLocale(_this__u8e3s4, language, region) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = element.kht_1;
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.j();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = this_0.m();
        while (tmp0_iterator_0.n()) {
          var element_0 = tmp0_iterator_0.o();
          // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>.<anonymous>' call
          if (equals(element_0, language)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        destination.e(element);
      }
    }
    var withLanguage = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = withLanguage.m();
    while (tmp0_iterator_1.n()) {
      var element_1 = tmp0_iterator_1.o();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var this_1 = element_1.kht_1;
        var tmp_0;
        if (isInterface(this_1, Collection)) {
          tmp_0 = this_1.j();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$5 = false;
          break $l$block_2;
        }
        var tmp0_iterator_2 = this_1.m();
        while (tmp0_iterator_2.n()) {
          var element_2 = tmp0_iterator_2.o();
          // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>.<anonymous>' call
          if (equals(element_2, region)) {
            tmp$ret$5 = true;
            break $l$block_2;
          }
        }
        tmp$ret$5 = false;
      }
      if (tmp$ret$5) {
        destination_0.e(element_1);
      }
    }
    var withExactLocale = destination_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withExactLocale.j())
      return withExactLocale;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_3 = withLanguage.m();
    while (tmp0_iterator_3.n()) {
      var element_3 = tmp0_iterator_3.o();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$11;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var this_2 = element_3.kht_1;
        var tmp_1;
        if (isInterface(this_2, Collection)) {
          tmp_1 = this_2.j();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$11 = true;
          break $l$block_4;
        }
        var tmp0_iterator_4 = this_2.m();
        while (tmp0_iterator_4.n()) {
          var element_4 = tmp0_iterator_4.o();
          // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>.<anonymous>' call
          if (element_4 instanceof RegionQualifier) {
            tmp$ret$11 = false;
            break $l$block_4;
          }
        }
        tmp$ret$11 = true;
      }
      if (tmp$ret$11) {
        destination_1.e(element_3);
      }
    }
    var withDefaultRegion = destination_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withDefaultRegion.j())
      return withDefaultRegion;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var tmp0_iterator_5 = _this__u8e3s4.m();
    while (tmp0_iterator_5.n()) {
      var element_5 = tmp0_iterator_5.o();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$17;
      $l$block_6: {
        // Inline function 'kotlin.collections.none' call
        var this_3 = element_5.kht_1;
        var tmp_2;
        if (isInterface(this_3, Collection)) {
          tmp_2 = this_3.j();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp$ret$17 = true;
          break $l$block_6;
        }
        var tmp0_iterator_6 = this_3.m();
        while (tmp0_iterator_6.n()) {
          var element_6 = tmp0_iterator_6.o();
          // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>.<anonymous>' call
          var tmp_3;
          if (element_6 instanceof LanguageQualifier) {
            tmp_3 = true;
          } else {
            tmp_3 = element_6 instanceof RegionQualifier;
          }
          if (tmp_3) {
            tmp$ret$17 = false;
            break $l$block_6;
          }
        }
        tmp$ret$17 = true;
      }
      if (tmp$ret$17) {
        destination_2.e(element_5);
      }
    }
    return destination_2;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.khw_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.khw_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).x3 = function () {
    return this.khw_1;
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
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).jht = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:44)');
    }
    var composeLocale = Companion_instance.k2m();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeDensity = tmp0;
    $composer_0.a31(1697238779);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.f2r(composeLocale) | $composer_0.g32(composeTheme)) | $composer_0.f2r(composeDensity));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.<no name provided>.rememberEnvironment.<anonymous>' call
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.f7i()), new RegionQualifier(composeLocale.g7i()), Companion_instance_2.fhw(composeTheme), Companion_instance_3.hhw(composeDensity.d5i()));
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp1_group;
  };
  function LocalComposeEnvironment$lambda() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return get_DefaultComposeEnvironment();
  }
  function getSystemEnvironment$ref() {
    var l = function () {
      return getSystemEnvironment();
    };
    l.callableName = 'getSystemEnvironment';
    return l;
  }
  function getResourceItemByEnvironment$lambda(it) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return it.lht_1;
  }
  function filterByDensity$lambda(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp = a.lhv_1;
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp$ret$1 = b.lhv_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function filterByDensity$lambda_0(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp = b.lhv_1;
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp$ret$1 = a.lhv_1;
    return compareValues(tmp, tmp$ret$1);
  }
  var properties_initialized_ResourceEnvironment_kt_6hb9vv;
  function _init_properties_ResourceEnvironment_kt__2jx9u5() {
    if (!properties_initialized_ResourceEnvironment_kt_6hb9vv) {
      properties_initialized_ResourceEnvironment_kt_6hb9vv = true;
      DefaultComposeEnvironment = new DefaultComposeEnvironment$1();
      LocalComposeEnvironment = staticCompositionLocalOf(LocalComposeEnvironment$lambda);
      getResourceEnvironment = getSystemEnvironment$ref();
    }
  }
  function get_DefaultResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return DefaultResourceReader;
  }
  var DefaultResourceReader;
  function get_LocalResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return LocalResourceReader;
  }
  var LocalResourceReader;
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function LocalResourceReader$lambda() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader();
  }
  var properties_initialized_ResourceReader_kt_tqilcj;
  function _init_properties_ResourceReader_kt__hdc5sh() {
    if (!properties_initialized_ResourceReader_kt_tqilcj) {
      properties_initialized_ResourceReader_kt_tqilcj = true;
      DefaultResourceReader = getPlatformResourceReader();
      LocalResourceReader = staticCompositionLocalOf(LocalResourceReader$lambda);
    }
  }
  function StringResource(id, key, items) {
    Resource.call(this, id, items);
    this.nhw_1 = key;
  }
  function stringResource(resource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-1520244580);
    if (isTraceInProgress()) {
      traceEventStart(-1520244580, $changed, -1, 'org.jetbrains.compose.resources.stringResource (StringResources.kt:24)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    $composer_0.a31(1773673164);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.stringResource.<anonymous>' call
      var value = stringResource$lambda_0;
      $composer_0.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.c31();
    var str$delegate = rememberResourceState_0(resource, tmp1_group, stringResource$slambda_0(resource, resourceReader, null), $composer_0, 560 | 14 & $changed);
    var tmp0 = stringResource$lambda(str$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function loadString(resource, resourceReader, environment, $completion) {
    var tmp = new $loadStringCOROUTINE$0(resource, resourceReader, environment, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function stringResource$lambda($str$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('str', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $str$delegate.c1();
  }
  function stringResource$lambda_0() {
    return '';
  }
  function stringResource$slambda($resource, $resourceReader, resultContinuation) {
    this.ihx_1 = $resource;
    this.jhx_1 = $resourceReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(stringResource$slambda).lhx = function (env, $completion) {
    var tmp = this.chu(env, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(stringResource$slambda).ma = function (p1, $completion) {
    return this.lhx(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(stringResource$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = loadString(this.ihx_1, this.jhx_1, this.khx_1, this);
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
  protoOf(stringResource$slambda).chu = function (env, completion) {
    var i = new stringResource$slambda(this.ihx_1, this.jhx_1, completion);
    i.khx_1 = env;
    return i;
  };
  function stringResource$slambda_0($resource, $resourceReader, resultContinuation) {
    var i = new stringResource$slambda($resource, $resourceReader, resultContinuation);
    var l = function (env, $completion) {
      return i.lhx(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadStringCOROUTINE$0(resource, resourceReader, environment, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.whw_1 = resource;
    this.xhw_1 = resourceReader;
    this.yhw_1 = environment;
  }
  protoOf($loadStringCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.zhw_1 = getResourceItemByEnvironment(this.whw_1, this.yhw_1);
            this.s9_1 = 1;
            suspendResult = getStringItem(this.zhw_1, this.xhw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var item = suspendResult instanceof Value ? suspendResult : THROW_CCE();
            return item.mhx_1;
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
  var SimpleStringFormatRegex;
  function get_stringItemsCache() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return stringItemsCache;
  }
  var stringItemsCache;
  function Value(text) {
    this.mhx_1 = text;
  }
  protoOf(Value).toString = function () {
    return 'Value(text=' + this.mhx_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return getStringHashCode(this.mhx_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!(this.mhx_1 === tmp0_other_with_cast.mhx_1))
      return false;
    return true;
  };
  function Plurals(items) {
    this.nhx_1 = items;
  }
  protoOf(Plurals).toString = function () {
    return 'Plurals(items=' + toString(this.nhx_1) + ')';
  };
  protoOf(Plurals).hashCode = function () {
    return hashCode(this.nhx_1);
  };
  protoOf(Plurals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plurals))
      return false;
    var tmp0_other_with_cast = other instanceof Plurals ? other : THROW_CCE();
    if (!equals(this.nhx_1, tmp0_other_with_cast.nhx_1))
      return false;
    return true;
  };
  function Array_0(items) {
    this.ohx_1 = items;
  }
  protoOf(Array_0).toString = function () {
    return 'Array(items=' + toString(this.ohx_1) + ')';
  };
  protoOf(Array_0).hashCode = function () {
    return hashCode(this.ohx_1);
  };
  protoOf(Array_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Array_0))
      return false;
    var tmp0_other_with_cast = other instanceof Array_0 ? other : THROW_CCE();
    if (!equals(this.ohx_1, tmp0_other_with_cast.ohx_1))
      return false;
    return true;
  };
  function getStringItem(resourceItem, resourceReader, $completion) {
    var tmp = get_stringItemsCache();
    var tmp_0 = resourceItem.lht_1 + '/' + resourceItem.mht_1.toString() + '-' + resourceItem.nht_1.toString();
    return tmp.fht(tmp_0, getStringItem$slambda_0(resourceReader, resourceItem, null), $completion);
  }
  function decodeAsPlural(_this__u8e3s4) {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    // Inline function 'kotlin.collections.associate' call
    var this_0 = split(_this__u8e3s4, [',']);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'org.jetbrains.compose.resources.decodeAsPlural.<anonymous>' call
      var category = substringBefore(element, _Char___init__impl__6a9atx(58));
      var valueBase64 = substringAfter(element, _Char___init__impl__6a9atx(58));
      var pair = to(ensureNotNull(Companion_instance_4.o5p(category)), decodeToString(Default_getInstance().jk(valueBase64)));
      destination.k2(pair.jb_1, pair.kb_1);
    }
    return new Plurals(destination);
  }
  function decodeAsArray(_this__u8e3s4) {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(_this__u8e3s4, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'org.jetbrains.compose.resources.decodeAsArray.<anonymous>' call
      var tmp$ret$0 = decodeToString(Default_getInstance().jk(item));
      destination.e(tmp$ret$0);
    }
    return new Array_0(destination);
  }
  function decodeAsString(_this__u8e3s4) {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return new Value(decodeToString(Default_getInstance().jk(_this__u8e3s4)));
  }
  function getStringItem$slambda($resourceReader, $resourceItem, resultContinuation) {
    this.xhx_1 = $resourceReader;
    this.yhx_1 = $resourceItem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getStringItem$slambda).zhx = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(getStringItem$slambda).ib = function ($completion) {
    return this.zhx($completion);
  };
  protoOf(getStringItem$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.xhx_1.ahy(this.yhx_1.lht_1, this.yhx_1.mht_1, this.yhx_1.nht_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var record = decodeToString(ARGUMENT);
            var recordItems = split_0(record, charArrayOf([_Char___init__impl__6a9atx(124)]));
            var recordType = first(recordItems);
            var recordData = last(recordItems);
            switch (recordType) {
              case 'plurals':
                return decodeAsPlural(recordData);
              case 'string-array':
                return decodeAsArray(recordData);
              default:
                return decodeAsString(recordData);
            }

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
  protoOf(getStringItem$slambda).z25 = function (completion) {
    return new getStringItem$slambda(this.xhx_1, this.yhx_1, completion);
  };
  function getStringItem$slambda_0($resourceReader, $resourceItem, resultContinuation) {
    var i = new getStringItem$slambda($resourceReader, $resourceItem, resultContinuation);
    var l = function ($completion) {
      return i.zhx($completion);
    };
    l.$arity = 0;
    return l;
  }
  var properties_initialized_StringResourcesUtils_kt_tq6hb5;
  function _init_properties_StringResourcesUtils_kt__ckiot9() {
    if (!properties_initialized_StringResourcesUtils_kt_tq6hb5) {
      properties_initialized_StringResourcesUtils_kt_tq6hb5 = true;
      SimpleStringFormatRegex = Regex_init_$Create$('%(\\d)\\$[ds]');
      stringItemsCache = new AsyncCache();
    }
  }
  var PluralCategory_ZERO_instance;
  var PluralCategory_ONE_instance;
  var PluralCategory_TWO_instance;
  var PluralCategory_FEW_instance;
  var PluralCategory_MANY_instance;
  var PluralCategory_OTHER_instance;
  function Companion_1() {
  }
  protoOf(Companion_1).o5p = function (name) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = get_entries_0().m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'org.jetbrains.compose.resources.plural.Companion.fromString.<anonymous>' call
        if (equals_0(element.y2_1, name, true)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_4;
  function Companion_getInstance_15() {
    return Companion_instance_4;
  }
  function values_0() {
    return [PluralCategory_ZERO_getInstance(), PluralCategory_ONE_getInstance(), PluralCategory_TWO_getInstance(), PluralCategory_FEW_getInstance(), PluralCategory_MANY_getInstance(), PluralCategory_OTHER_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var PluralCategory_entriesInitialized;
  function PluralCategory_initEntries() {
    if (PluralCategory_entriesInitialized)
      return Unit_instance;
    PluralCategory_entriesInitialized = true;
    PluralCategory_ZERO_instance = new PluralCategory('ZERO', 0);
    PluralCategory_ONE_instance = new PluralCategory('ONE', 1);
    PluralCategory_TWO_instance = new PluralCategory('TWO', 2);
    PluralCategory_FEW_instance = new PluralCategory('FEW', 3);
    PluralCategory_MANY_instance = new PluralCategory('MANY', 4);
    PluralCategory_OTHER_instance = new PluralCategory('OTHER', 5);
  }
  var $ENTRIES_0;
  function PluralCategory(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PluralCategory_ZERO_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_ZERO_instance;
  }
  function PluralCategory_ONE_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_ONE_instance;
  }
  function PluralCategory_TWO_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_TWO_instance;
  }
  function PluralCategory_FEW_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_FEW_instance;
  }
  function PluralCategory_MANY_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_MANY_instance;
  }
  function PluralCategory_OTHER_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_OTHER_instance;
  }
  function parseDp(_this__u8e3s4, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (_this__u8e3s4 == null) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0.0);
    } else if (endsWith(_this__u8e3s4, 'dp')) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'kotlin.text.toFloat' call
      var this_0 = removeSuffix(_this__u8e3s4, 'dp');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var this_1 = toDouble(this_0);
      tmp = _Dp___init__impl__ms3zkb(this_1);
    } else if (endsWith(_this__u8e3s4, 'px')) {
      // Inline function 'kotlin.text.toFloat' call
      var this_2 = removeSuffix(_this__u8e3s4, 'px');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = toDouble(this_2);
      tmp = density.m5i(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_0().m6f_1;
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_0().n6f_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown fillType: ' + fillType);
    }
    return tmp;
  }
  function parseStrokeCap(strokeCap) {
    var tmp;
    switch (strokeCap) {
      case 'butt':
        tmp = Companion_getInstance_1().z6f_1;
        break;
      case 'round':
        tmp = Companion_getInstance_1().a6g_1;
        break;
      case 'square':
        tmp = Companion_getInstance_1().b6g_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeCap: ' + strokeCap);
    }
    return tmp;
  }
  function parseStrokeJoin(strokeJoin) {
    var tmp;
    switch (strokeJoin) {
      case 'miter':
        tmp = Companion_getInstance_2().d6g_1;
        break;
      case 'round':
        tmp = Companion_getInstance_2().e6g_1;
        break;
      case 'bevel':
        tmp = Companion_getInstance_2().f6g_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeJoin: ' + strokeJoin);
    }
    return tmp;
  }
  function parseColorValue(color) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!startsWith(color, '#')) {
      // Inline function 'org.jetbrains.compose.resources.vector.parseColorValue.<anonymous>' call
      var message = 'Invalid color value ' + color;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (color.length) {
      case 7:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$2 = color.substring(1);
        var this_0 = toUInt(tmp$ret$2, 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_0) | -16777216;
        break;
      case 9:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$5 = color.substring(1);
        var this_1 = toUInt(tmp$ret$5, 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_1);
        break;
      case 4:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$8 = color.substring(1);
        var this_2 = toUInt(tmp$ret$8, 16);
        var v = _UInt___get_data__impl__f0vqqw(this_2);
        var k = imul(v >> 8 & 15, 1114112);
        k = k | imul(v >> 4 & 15, 4352);
        k = k | imul(v & 15, 17);
        tmp = k | -16777216;
        break;
      case 5:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$11 = color.substring(1);
        var this_3 = toUInt(tmp$ret$11, 16);
        var v_0 = _UInt___get_data__impl__f0vqqw(this_3);
        var k_0 = imul(v_0 >> 12 & 15, 285212672);
        k_0 = k_0 | imul(v_0 >> 8 & 15, 1114112);
        k_0 = k_0 | imul(v_0 >> 4 & 15, 4352);
        k_0 = k_0 | imul(v_0 & 15, 17);
        tmp = k_0 | -16777216;
        break;
      default:
        tmp = -16777216;
        break;
    }
    return tmp;
  }
  function parseTileMode(tileMode) {
    var tmp;
    switch (tileMode) {
      case 'clamp':
        tmp = Companion_getInstance_3().j67_1;
        break;
      case 'repeated':
        tmp = Companion_getInstance_3().k67_1;
        break;
      case 'mirror':
        tmp = Companion_getInstance_3().l67_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown tileMode: ' + tileMode);
    }
    return tmp;
  }
  function toImageVector(_this__u8e3s4, density) {
    var context = new BuildContext();
    var tmp = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'width'), density);
    var tmp_0 = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'height'), density);
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportWidth');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportHeight');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var builder = new Builder(VOID, tmp, tmp_0, tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    parseVectorNodes(_this__u8e3s4, builder, context);
    return builder.a2u();
  }
  var Group_Real_instance;
  var Group_Virtual_instance;
  var Group_entriesInitialized;
  function Group_initEntries() {
    if (Group_entriesInitialized)
      return Unit_instance;
    Group_entriesInitialized = true;
    Group_Real_instance = new Group('Real', 0);
    Group_Virtual_instance = new Group('Virtual', 1);
  }
  function Group(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Group_Real_getInstance() {
    Group_initEntries();
    return Group_Real_instance;
  }
  function Group_Virtual_getInstance() {
    Group_initEntries();
    return Group_Virtual_instance;
  }
  function BuildContext() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.bhy_1 = ArrayList_init_$Create$();
  }
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.chy(namespace, name);
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp = value;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function parseVectorNodes(_this__u8e3s4, builder, context) {
    // Inline function 'kotlin.sequences.forEach' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseVectorNodes$lambda);
    var tmp0_iterator = (isInterface(tmp, Sequence) ? tmp : THROW_CCE()).m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'org.jetbrains.compose.resources.vector.parseVectorNodes.<anonymous>' call
      parseVectorNode(element, builder, context);
    }
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.dhy()) {
      case 'path':
        parsePath(_this__u8e3s4, builder);
        break;
      case 'clip-path':
        parseClipPath(_this__u8e3s4, builder, context);
        break;
      case 'group':
        parseGroup(_this__u8e3s4, builder, context);
        break;
    }
  }
  function get_childrenSequence(_this__u8e3s4) {
    return sequence(_get_childrenSequence_$slambda_9jpw3j_0(_this__u8e3s4, null));
  }
  function parsePath(_this__u8e3s4, builder) {
    var tmp = addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData'));
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillType');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_0 = parseFillType(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new PathFillType(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_0().m6f_1;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_1;
    var tmp2_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
    var tmp_5;
    if (tmp3_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_5 = parseStringBrush(tmp3_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6;
    if (tmp5_elvis_lhs == null) {
      var tmp4_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_7 = parseElementBrush(tmp4_safe_receiver);
      }
      tmp_6 = tmp_7;
    } else {
      tmp_6 = tmp5_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillAlpha');
    var tmp_9;
    if (tmp6_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_9 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_9;
    var tmp_10 = tmp7_elvis_lhs == null ? 1.0 : tmp7_elvis_lhs;
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
    var tmp_11;
    if (tmp8_safe_receiver == null) {
      tmp_11 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_11 = parseStringBrush(tmp8_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_11;
    var tmp_12;
    if (tmp10_elvis_lhs == null) {
      var tmp9_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
      var tmp_13;
      if (tmp9_safe_receiver == null) {
        tmp_13 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_13 = parseElementBrush(tmp9_safe_receiver);
      }
      tmp_12 = tmp_13;
    } else {
      tmp_12 = tmp10_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeAlpha');
    var tmp_15;
    if (tmp11_safe_receiver == null) {
      tmp_15 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_15 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_15;
    var tmp_16 = tmp12_elvis_lhs == null ? 1.0 : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeWidth');
    var tmp_17;
    if (tmp13_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_17 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_17;
    var tmp_18 = tmp14_elvis_lhs == null ? 1.0 : tmp14_elvis_lhs;
    var tmp15_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineCap');
    var tmp_19;
    if (tmp15_safe_receiver == null) {
      tmp_19 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_19 = parseStrokeCap(tmp15_safe_receiver);
    }
    var tmp16_elvis_lhs = tmp_19;
    var tmp_20;
    var tmp_21 = tmp16_elvis_lhs;
    if ((tmp_21 == null ? null : new StrokeCap(tmp_21)) == null) {
      tmp_20 = Companion_getInstance_1().z6f_1;
    } else {
      tmp_20 = tmp16_elvis_lhs;
    }
    var tmp_22 = tmp_20;
    var tmp17_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineJoin');
    var tmp_23;
    if (tmp17_safe_receiver == null) {
      tmp_23 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_23 = parseStrokeJoin(tmp17_safe_receiver);
    }
    var tmp18_elvis_lhs = tmp_23;
    var tmp_24;
    var tmp_25 = tmp18_elvis_lhs;
    if ((tmp_25 == null ? null : new StrokeJoin(tmp_25)) == null) {
      tmp_24 = Companion_getInstance_2().d6g_1;
    } else {
      tmp_24 = tmp18_elvis_lhs;
    }
    var tmp_26 = tmp_24;
    var tmp19_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeMiterLimit');
    var tmp_27;
    if (tmp19_safe_receiver == null) {
      tmp_27 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_27 = toDouble(tmp19_safe_receiver);
    }
    var tmp20_elvis_lhs = tmp_27;
    var tmp_28 = tmp20_elvis_lhs == null ? 1.0 : tmp20_elvis_lhs;
    var tmp21_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathStart');
    var tmp_29;
    if (tmp21_safe_receiver == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_29 = toDouble(tmp21_safe_receiver);
    }
    var tmp22_elvis_lhs = tmp_29;
    var tmp_30 = tmp22_elvis_lhs == null ? 0.0 : tmp22_elvis_lhs;
    var tmp23_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathEnd');
    var tmp_31;
    if (tmp23_safe_receiver == null) {
      tmp_31 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_31 = toDouble(tmp23_safe_receiver);
    }
    var tmp24_elvis_lhs = tmp_31;
    var tmp_32 = tmp24_elvis_lhs == null ? 1.0 : tmp24_elvis_lhs;
    var tmp25_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathOffset');
    var tmp_33;
    if (tmp25_safe_receiver == null) {
      tmp_33 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_33 = toDouble(tmp25_safe_receiver);
    }
    var tmp26_elvis_lhs = tmp_33;
    builder.v8d(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.t8d(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.bhy_1.e(Group_Virtual_getInstance());
  }
  function parseGroup(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'rotation');
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = toDouble(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_1 = tmp2_elvis_lhs == null ? get_DefaultRotation() : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotX');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_2;
    var tmp_3 = tmp4_elvis_lhs == null ? get_DefaultPivotX() : tmp4_elvis_lhs;
    var tmp5_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotY');
    var tmp_4;
    if (tmp5_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp5_safe_receiver);
    }
    var tmp6_elvis_lhs = tmp_4;
    var tmp_5 = tmp6_elvis_lhs == null ? get_DefaultPivotY() : tmp6_elvis_lhs;
    var tmp7_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleX');
    var tmp_6;
    if (tmp7_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_6 = toDouble(tmp7_safe_receiver);
    }
    var tmp8_elvis_lhs = tmp_6;
    var tmp_7 = tmp8_elvis_lhs == null ? get_DefaultScaleX() : tmp8_elvis_lhs;
    var tmp9_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleY');
    var tmp_8;
    if (tmp9_safe_receiver == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_8 = toDouble(tmp9_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_8;
    var tmp_9 = tmp10_elvis_lhs == null ? get_DefaultScaleY() : tmp10_elvis_lhs;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateX');
    var tmp_10;
    if (tmp11_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_10 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_10;
    var tmp_11 = tmp12_elvis_lhs == null ? get_DefaultTranslationX() : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateY');
    var tmp_12;
    if (tmp13_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_12 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_12;
    builder.s8d(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? get_DefaultTranslationY() : tmp14_elvis_lhs, get_EmptyPath());
    context.bhy_1.e(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.bhy_1);
      builder.u8d();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var prefix = _this__u8e3s4.ehy(namespace);
    // Inline function 'kotlin.sequences.find' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, apptAttr$lambda);
    var this_1 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = this_1.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'org.jetbrains.compose.resources.vector.apptAttr.<anonymous>' call
        if (element.fhy() === 'http://schemas.android.com/aapt' && element.ghy() === 'attr' && element.hhy('name') === prefix + ':' + name) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    return tmp$ret$2;
  }
  function parseElementBrush(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.find' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseElementBrush$lambda);
    var this_1 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = this_1.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'org.jetbrains.compose.resources.vector.parseElementBrush.<anonymous>' call
        if (element.dhy() === 'gradient') {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    return tmp0_safe_receiver == null ? null : parseGradient(tmp0_safe_receiver);
  }
  function parseGradient(_this__u8e3s4) {
    switch (attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'type')) {
      case 'linear':
        return parseLinearGradient(_this__u8e3s4);
      case 'radial':
        return parseRadialGradient(_this__u8e3s4);
      case 'sweep':
        return parseSweepGradient(_this__u8e3s4);
      default:
        return null;
    }
  }
  function parseLinearGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var tmp_4 = Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endX');
    var tmp_5;
    if (tmp4_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endY');
    var tmp_7;
    if (tmp6_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_7 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_7;
    var tmp_8 = Offset(tmp_6, tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs);
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_9;
    if (tmp8_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_9 = parseTileMode(tmp8_safe_receiver);
    }
    var tmp9_elvis_lhs = tmp_9;
    var tmp_10;
    var tmp_11 = tmp9_elvis_lhs;
    if ((tmp_11 == null ? null : new TileMode(tmp_11)) == null) {
      tmp_10 = Companion_getInstance_3().j67_1;
    } else {
      tmp_10 = tmp9_elvis_lhs;
    }
    return tmp.g67(tmp_0, tmp_4, tmp_8, tmp_10);
  }
  function parseRadialGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var tmp_4 = Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'gradientRadius');
    var tmp_5;
    if (tmp4_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_7;
    if (tmp6_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_7 = parseTileMode(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_7;
    var tmp_8;
    var tmp_9 = tmp7_elvis_lhs;
    if ((tmp_9 == null ? null : new TileMode(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_3().j67_1;
    } else {
      tmp_8 = tmp7_elvis_lhs;
    }
    return tmp.r67(tmp_0, tmp_4, tmp_6, tmp_8);
  }
  function parseSweepGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    return tmp.s67(tmp_0, Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs));
  }
  function parseColorStops(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseColorStops$lambda);
    var tmp_0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var items = toList_0(filter(tmp_0, parseColorStops$lambda_0));
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = items.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      // Inline function 'org.jetbrains.compose.resources.vector.parseColorStops.<anonymous>' call
      var index_0 = checkIndexOverflow(tmp1);
      var tmp0_safe_receiver = parseColorStop(item, index_0 / coerceAtLeast(get_lastIndex(items), 1));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.e(tmp0_safe_receiver);
      }
    }
    var colorStops = destination;
    if (colorStops.j()) {
      var tmp0_safe_receiver_0 = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startColor');
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_1 = parseColorValue(tmp0_safe_receiver_0);
      }
      var startColor = tmp_1;
      var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerColor');
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_2 = parseColorValue(tmp1_safe_receiver);
      }
      var centerColor = tmp_2;
      var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endColor');
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_3 = parseColorValue(tmp2_safe_receiver);
      }
      var endColor = tmp_3;
      if (!(startColor == null)) {
        colorStops.e(to(0.0, new Color_0(Color(startColor))));
      }
      if (!(centerColor == null)) {
        colorStops.e(to(0.5, new Color_0(Color(centerColor))));
      }
      if (!(endColor == null)) {
        colorStops.e(to(1.0, new Color_0(Color(endColor))));
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(colorStops);
  }
  function parseColorStop(_this__u8e3s4, defaultOffset) {
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'offset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var offset = tmp1_elvis_lhs == null ? defaultOffset : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'color');
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_0 = parseColorValue(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var color = tmp_1;
    return to(offset, new Color_0(Color(color)));
  }
  function parseVectorNodes$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation) {
    this.qhy_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).uhy = function ($this$sequence, $completion) {
    var tmp = this.vhy($this$sequence, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).ma = function (p1, $completion) {
    return this.uhy(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.shy_1 = until(0, this.qhy_1.why().a()).m();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!this.shy_1.n()) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.thy_1 = this.shy_1.o();
            this.s9_1 = 2;
            suspendResult = this.rhy_1.wh(this.qhy_1.why().xhy(this.thy_1), this);
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).vhy = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.qhy_1, completion);
    i.rhy_1 = $this$sequence;
    return i;
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.uhy($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function apptAttr$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseElementBrush$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda_0(it) {
    return it.dhy() === 'item';
  }
  function Element_0() {
  }
  function MalformedXMLException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedXMLException);
  }
  function toXmlElement(_this__u8e3s4) {
    var xmlString = decodeToString(_this__u8e3s4);
    var xmlDom = (new DOMParser()).parseFromString(xmlString, 'application/xml');
    var tmp0_elvis_lhs = xmlDom.documentElement;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MalformedXMLException('missing documentElement');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var domElement = tmp;
    return new ElementImpl(domElement);
  }
  function getSystemEnvironment() {
    var locale = new Intl.Locale(window.navigator.language);
    var isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dpi = numberToInt(window.devicePixelRatio * 96);
    return new ResourceEnvironment(new LanguageQualifier(locale.language), new RegionQualifier(locale.region), Companion_instance_2.fhw(isDarkTheme), Companion_instance_3.ghw(dpi));
  }
  function getPlatformResourceReader() {
    return new getPlatformResourceReader$1();
  }
  function readAsBlob($this, path, $completion) {
    var tmp = new $readAsBlobCOROUTINE$3($this, path, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function asByteArray(_this__u8e3s4, $this, $completion) {
    var tmp = new $asByteArrayCOROUTINE$4($this, _this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function $readCOROUTINE$1(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.di0_1 = _this__u8e3s4;
    this.ei0_1 = path;
  }
  protoOf($readCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = readAsBlob(this.di0_1, this.ei0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.fi0_1 = suspendResult;
            this.s9_1 = 2;
            suspendResult = asByteArray(this.fi0_1, this.di0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readPartCOROUTINE$2(_this__u8e3s4, path, offset, size, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oi0_1 = _this__u8e3s4;
    this.pi0_1 = path;
    this.qi0_1 = offset;
    this.ri0_1 = size;
  }
  protoOf($readPartCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = readAsBlob(this.oi0_1, this.pi0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.si0_1 = suspendResult;
            this.ti0_1 = this.si0_1.slice(this.qi0_1.m1(), this.qi0_1.f3(this.ri0_1).m1());
            this.s9_1 = 2;
            suspendResult = asByteArray(this.ti0_1, this.oi0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readAsBlobCOROUTINE$3(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ghz_1 = _this__u8e3s4;
    this.hhz_1 = path;
  }
  protoOf($readAsBlobCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.ihz_1 = WebResourcesConfiguration_getInstance().ui0_1(this.hhz_1);
            this.s9_1 = 1;
            suspendResult = await_0(window.fetch(this.ihz_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.jhz_1 = suspendResult;
            if (!this.jhz_1.ok) {
              throw new MissingResourceException(this.ihz_1);
            }

            this.s9_1 = 2;
            suspendResult = await_0(this.jhz_1.blob(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $asByteArrayCOROUTINE$4(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.shz_1 = _this__u8e3s4;
    this.thz_1 = _this__u8e3s4_0;
  }
  protoOf($asByteArrayCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var tmp_1 = this.thz_1.arrayBuffer();
            tmp_0.uhz_1 = tmp_1 instanceof Promise ? tmp_1 : THROW_CCE();
            this.s9_1 = 1;
            suspendResult = await_0(this.uhz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Int8Array(ARGUMENT);
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
  function getPlatformResourceReader$1() {
  }
  protoOf(getPlatformResourceReader$1).chw = function (path, $completion) {
    var tmp = new $readCOROUTINE$1(this, path, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(getPlatformResourceReader$1).ahy = function (path, offset, size, $completion) {
    var tmp = new $readPartCOROUTINE$2(this, path, offset, size, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function ElementImpl(element) {
    NodeImpl.call(this, element);
    this.zi0_1 = element;
  }
  protoOf(ElementImpl).ghy = function () {
    return this.zi0_1.localName;
  };
  protoOf(ElementImpl).fhy = function () {
    var tmp0_elvis_lhs = this.zi0_1.namespaceURI;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).chy = function (nameSpaceURI, localName) {
    var tmp0_elvis_lhs = this.zi0_1.getAttributeNS(nameSpaceURI, localName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).hhy = function (name) {
    var tmp0_elvis_lhs = this.zi0_1.getAttribute(name);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function NodeImpl$childNodes$2$1(this$0) {
    this.fi1_1 = this$0;
    this.ei1_1 = this$0.ai1_1.childNodes.length;
  }
  protoOf(NodeImpl$childNodes$2$1).xhy = function (i) {
    var tmp0_elvis_lhs = this.fi1_1.ai1_1.childNodes.item(i);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$('no child node accessible at index=' + i);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var child = tmp;
    var tmp_0;
    if (child instanceof Element) {
      tmp_0 = new ElementImpl(child);
    } else {
      tmp_0 = new NodeImpl(child);
    }
    return tmp_0;
  };
  protoOf(NodeImpl$childNodes$2$1).a = function () {
    return this.ei1_1;
  };
  function NodeImpl$childNodes$delegate$lambda(this$0) {
    return function () {
      return new NodeImpl$childNodes$2$1(this$0);
    };
  }
  function NodeImpl(n) {
    this.ai1_1 = n;
    this.bi1_1 = '';
    this.ci1_1 = '';
    var tmp = this;
    tmp.di1_1 = lazy(NodeImpl$childNodes$delegate$lambda(this));
  }
  protoOf(NodeImpl).dhy = function () {
    return this.ai1_1.nodeName;
  };
  protoOf(NodeImpl).why = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.di1_1;
    childNodes$factory();
    return this_0.c1();
  };
  protoOf(NodeImpl).ehy = function (namespaceURI) {
    var tmp0_elvis_lhs = this.ai1_1.lookupPrefix(namespaceURI);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function childNodes$factory() {
    return getPropertyCallableRef('childNodes', 1, KProperty1, function (receiver) {
      return receiver.why();
    }, null);
  }
  function clear(_this__u8e3s4, $this) {
    _this__u8e3s4.z6k(Companion_getInstance_4().z67_1, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_5().c66_1);
  }
  function DrawCache() {
    this.gi1_1 = null;
    this.hi1_1 = null;
    this.ii1_1 = null;
    this.ji1_1 = LayoutDirection_Ltr_getInstance();
    this.ki1_1 = Companion_getInstance_6().n5j_1;
    this.li1_1 = Companion_getInstance_7().i6d_1;
    this.mi1_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).v8c = function (config, size, density, layoutDirection, block) {
    this.ii1_1 = density;
    this.ji1_1 = layoutDirection;
    var targetImage = this.gi1_1;
    var targetCanvas = this.hi1_1;
    if (targetImage == null || targetCanvas == null || _IntSize___get_width__impl__d9yl4o(size) > targetImage.x5g() || _IntSize___get_height__impl__prv63b(size) > targetImage.y5g() || !(this.li1_1 === config)) {
      targetImage = ImageBitmap(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size), config);
      targetCanvas = Canvas(targetImage);
      this.gi1_1 = targetImage;
      this.hi1_1 = targetCanvas;
      this.li1_1 = config;
    }
    this.ki1_1 = size;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var this_0 = this.mi1_1;
    var canvas = targetCanvas;
    var size_0 = toSize(size);
    var tmp0_container = this_0.h6j_1;
    var prevDensity = tmp0_container.lb();
    var prevLayoutDirection = tmp0_container.mb();
    var prevCanvas = tmp0_container.tn();
    var prevSize = tmp0_container.j6k();
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.h6j_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_1.f6k_1 = density;
    this_1.g6k_1 = layoutDirection;
    this_1.h6k_1 = canvas;
    this_1.i6k_1 = size_0;
    canvas.n69();
    // Inline function 'org.jetbrains.compose.resources.DrawCache.drawCachedImage.<anonymous>' call
    clear(this_0, this);
    block(this_0);
    canvas.o69();
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.h6j_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_2.f6k_1 = prevDensity;
    this_2.g6k_1 = prevLayoutDirection;
    this_2.h6k_1 = prevCanvas;
    this_2.i6k_1 = prevSize;
    targetImage.h6d();
  };
  protoOf(DrawCache).w8c = function (target, alpha, colorFilter) {
    var targetImage = this.gi1_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(targetImage == null)) {
      // Inline function 'org.jetbrains.compose.resources.DrawCache.drawInto.<anonymous>' call
      var message = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.b6l(targetImage, VOID, this.ki1_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  function toSvgPainter(_this__u8e3s4, density) {
    return new SvgPainter(_this__u8e3s4.ni1_1, density);
  }
  function SvgElement(svgdom) {
    this.ni1_1 = svgdom;
  }
  function toSvgElement(_this__u8e3s4) {
    return new SvgElement(SVGDOM_init_$Create$(Companion_getInstance_8().x5o(_this__u8e3s4)));
  }
  function toImageBitmap(_this__u8e3s4, resourceDensity, targetDensity) {
    var image = Companion_getInstance_9().w5r(_this__u8e3s4);
    var targetImage;
    if (resourceDensity > targetDensity) {
      var scale = targetDensity / resourceDensity;
      var targetH = image.y5g() * scale;
      var targetW = image.x5g() * scale;
      var srcRect = Companion_instance_1.y5v(image.x5g(), image.y5g());
      var dstRect = Companion_instance_1.y5v(targetW, targetH);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.resources.toImageBitmap.<anonymous>' call
      var $this$run = Companion_getInstance_10().l5w(numberToInt(targetW), numberToInt(targetH));
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.resources.toImageBitmap.<anonymous>.<anonymous>' call
      this_0.y5s(true);
      var paint = this_0;
      $this$run.q5w().l5n(image, srcRect, dstRect, Companion_getInstance_11().i5n_1, paint, true);
      targetImage = $this$run.r5w();
    } else {
      targetImage = image;
    }
    return toComposeImageBitmap(targetImage);
  }
  function get_currentOrPreview(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-193451530);
    if (isTraceInProgress()) {
      traceEventStart(-193451530, $changed, -1, 'org.jetbrains.compose.resources.<get-currentOrPreview> (ResourceReader.skiko.kt:6)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(_this__u8e3s4);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function drawSvg(_this__u8e3s4, $this, size) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.v6k().q5w();
    var tmp0_safe_receiver = $this.wi1_1;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.j63(new SVGLength(_Size___get_width__impl__58y75t(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.wi1_1;
    if (tmp1_safe_receiver != null) {
      tmp1_safe_receiver.k63(new SVGLength(_Size___get_height__impl__a04p02(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.wi1_1;
    if (tmp2_safe_receiver != null) {
      tmp2_safe_receiver.l63(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.ui1_1.u62(get_nativeCanvas(canvas));
  }
  function SvgPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg($this$drawCachedImage, this$0, $this$drawCachedImage.z5g());
      return Unit_instance;
    };
  }
  function SvgPainter(dom, density) {
    Painter.call(this);
    this.ui1_1 = dom;
    this.vi1_1 = density;
    this.wi1_1 = this.ui1_1.t62();
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.SvgPainter.defaultSizePx.<anonymous>' call
    var tmp0_safe_receiver = this.wi1_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x5g();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y62(SVGLengthUnit_PX_getInstance());
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.w62_1;
    var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = this.wi1_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.y5g();
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.y62(SVGLengthUnit_PX_getInstance());
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.w62_1;
    var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp_0;
    if (width === 0.0 && height === 0.0) {
      tmp_0 = Companion_getInstance_12().t5h_1;
    } else {
      tmp_0 = Size(width, height);
    }
    tmp.xi1_1 = tmp_0;
    var tmp_1;
    var tmp0_safe_receiver_0 = this.wi1_1;
    if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.n63()) == null) {
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_0 = this.xi1_1;
      tmp_1 = !_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp1_safe_receiver_0 = this.wi1_1;
      if (tmp1_safe_receiver_0 != null) {
        tmp1_safe_receiver_0.m63(Companion_instance_1.z5v(0.0, 0.0, _Size___get_width__impl__58y75t(this.xi1_1), _Size___get_height__impl__a04p02(this.xi1_1)));
      }
    }
    this.yi1_1 = Companion_getInstance_12().t5h_1;
    this.zi1_1 = 1.0;
    this.ai2_1 = null;
    this.bi2_1 = new DrawCache();
  }
  protoOf(SvgPainter).i6o = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.xi1_1;
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      tmp = Size__times_impl_fnp4nc(this.xi1_1, this.vi1_1.d5i());
    } else {
      tmp = Companion_getInstance_12().t5h_1;
    }
    return tmp;
  };
  protoOf(SvgPainter).j6o = function (alpha) {
    this.zi1_1 = alpha;
    return true;
  };
  protoOf(SvgPainter).k6o = function (colorFilter) {
    this.ai2_1 = colorFilter;
    return true;
  };
  protoOf(SvgPainter).h6o = function (_this__u8e3s4) {
    if (!equals(this.yi1_1, _this__u8e3s4.z5g())) {
      var tmp = Companion_getInstance_7().i6d_1;
      // Inline function 'kotlin.math.ceil' call
      var x = _Size___get_width__impl__58y75t(_this__u8e3s4.z5g());
      var tmp$ret$0 = Math.ceil(x);
      var tmp_0 = numberToInt(tmp$ret$0);
      // Inline function 'kotlin.math.ceil' call
      var x_0 = _Size___get_height__impl__a04p02(_this__u8e3s4.z5g());
      var tmp$ret$1 = Math.ceil(x_0);
      var tmp_1 = IntSize(tmp_0, numberToInt(tmp$ret$1));
      var tmp_2 = _this__u8e3s4.r6k();
      this.bi2_1.v8c(tmp, tmp_1, _this__u8e3s4, tmp_2, SvgPainter$onDraw$lambda(this));
    }
    this.bi2_1.w8c(_this__u8e3s4, this.zi1_1, this.ai2_1);
  };
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.ui0_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  function rememberResourceState(key1, key2, key3, getDefault, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(1947629696);
    if (isTraceInProgress()) {
      traceEventStart(1947629696, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceState (ResourceState.web.kt:52)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.jht($composer_0, 0);
    // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
    var getContext = null;
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
    if (!((1 & 1) === 0)) {
      getContext = rememberResourceState$lambda;
    }
    var composer = $composer_2;
    sourceInformationMarkerStart($composer_2, -954207516, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_2.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_2);
    var scope = tmp1_group;
    $composer_0.a31(406079416);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.f2r(key1) | $composer_0.f2r(key2)) | $composer_0.f2r(key3));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberResourceState.<anonymous>' call
      var mutableState = mutableStateOf(getDefault());
      var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
      launch(scope, VOID, tmp_2, rememberResourceState$slambda_0(mutableState, block, environment, null));
      var value_0 = mutableState;
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.c31();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp1_group_0;
  }
  function rememberResourceState_0(key1, getDefault, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(1147816128);
    if (isTraceInProgress()) {
      traceEventStart(1147816128, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceState (ResourceState.web.kt:15)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.jht($composer_0, 0);
    // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
    var getContext = null;
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)556@25344L68:Effects.kt#9igjgp');
    if (!((1 & 1) === 0)) {
      getContext = rememberResourceState$lambda_0;
    }
    var composer = $composer_2;
    sourceInformationMarkerStart($composer_2, -954207516, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.w32();
    var tmp;
    if (false || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_2.h33(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_2);
    var scope = tmp1_group;
    $composer_0.a31(406045004);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.f2r(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.w32();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().l2u_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberResourceState.<anonymous>' call
      var mutableState = mutableStateOf(getDefault());
      var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
      launch(scope, VOID, tmp_2, rememberResourceState$slambda_2(mutableState, block, environment, null));
      var value_0 = mutableState;
      $composer_0.h33(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.c31();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp1_group_0;
  }
  function rememberResourceState$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation) {
    this.ki2_1 = $mutableState;
    this.li2_1 = $block;
    this.mi2_1 = $environment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberResourceState$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(rememberResourceState$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberResourceState$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.li2_1(this.mi2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.ki2_1.a1y(ARGUMENT);
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
  protoOf(rememberResourceState$slambda).b20 = function ($this$launch, completion) {
    var i = new rememberResourceState$slambda(this.ki2_1, this.li2_1, this.mi2_1, completion);
    i.ni2_1 = $this$launch;
    return i;
  };
  function rememberResourceState$slambda_0($mutableState, $block, $environment, resultContinuation) {
    var i = new rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberResourceState$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberResourceState$slambda_1($mutableState, $block, $environment, resultContinuation) {
    this.wi2_1 = $mutableState;
    this.xi2_1 = $block;
    this.yi2_1 = $environment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberResourceState$slambda_1).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(rememberResourceState$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberResourceState$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.xi2_1(this.yi2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.wi2_1.a1y(ARGUMENT);
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
  protoOf(rememberResourceState$slambda_1).b20 = function ($this$launch, completion) {
    var i = new rememberResourceState$slambda_1(this.wi2_1, this.xi2_1, this.yi2_1, completion);
    i.zi2_1 = $this$launch;
    return i;
  };
  function rememberResourceState$slambda_2($mutableState, $block, $environment, resultContinuation) {
    var i = new rememberResourceState$slambda_1($mutableState, $block, $environment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  //region block: init
  Companion_instance_2 = new Companion();
  Companion_instance_3 = new Companion_0();
  Companion_instance_4 = new Companion_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DrawableResource;
  _.$_$.b = LanguageQualifier;
  _.$_$.c = ResourceItem;
  _.$_$.d = StringResource;
  _.$_$.e = painterResource;
  _.$_$.f = stringResource;
  //endregion
  return _;
}));

//# sourceMappingURL=components-resources-library.js.map
