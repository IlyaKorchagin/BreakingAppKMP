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
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var protoOf = kotlin_kotlin.$_$.he;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var isInterface = kotlin_kotlin.$_$.qd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var VOID = kotlin_kotlin.$_$.i;
  var CoroutineStart_LAZY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var endsWith = kotlin_kotlin.$_$.ng;
  var rememberVectorPainter = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var KProperty0 = kotlin_kotlin.$_$.mf;
  var THROW_ISE = kotlin_kotlin.$_$.fj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.vc;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var lazy = kotlin_kotlin.$_$.fk;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var Enum = kotlin_kotlin.$_$.qi;
  var enumEntries = kotlin_kotlin.$_$.bc;
  var toString = kotlin_kotlin.$_$.le;
  var hashCode = kotlin_kotlin.$_$.zc;
  var equals = kotlin_kotlin.$_$.qc;
  var toList = kotlin_kotlin.$_$.wa;
  var first = kotlin_kotlin.$_$.k8;
  var joinToString = kotlin_kotlin.$_$.y8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var emptyList = kotlin_kotlin.$_$.a8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var sortedWith = kotlin_kotlin.$_$.pa;
  var Collection = kotlin_kotlin.$_$.h6;
  var minus = kotlin_kotlin.$_$.r9;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var Comparator = kotlin_kotlin.$_$.pi;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var compareValues = kotlin_kotlin.$_$.fb;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Exception = kotlin_kotlin.$_$.si;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.hc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var split = kotlin_kotlin.$_$.ih;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var mapCapacity = kotlin_kotlin.$_$.o9;
  var coerceAtLeast = kotlin_kotlin.$_$.xe;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var substringBefore = kotlin_kotlin.$_$.oh;
  var substringAfter = kotlin_kotlin.$_$.mh;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var Default_getInstance = kotlin_kotlin.$_$.b5;
  var decodeToString = kotlin_kotlin.$_$.jg;
  var to = kotlin_kotlin.$_$.sk;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var charArrayOf = kotlin_kotlin.$_$.ic;
  var split_0 = kotlin_kotlin.$_$.hh;
  var last = kotlin_kotlin.$_$.i9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.m1;
  var equals_0 = kotlin_kotlin.$_$.og;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var removeSuffix = kotlin_kotlin.$_$.ch;
  var toDouble = kotlin_kotlin.$_$.uh;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d4;
  var startsWith = kotlin_kotlin.$_$.jh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var toUInt = kotlin_kotlin.$_$.di;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.b4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e4;
  var isBlank = kotlin_kotlin.$_$.vg;
  var filter = kotlin_kotlin.$_$.uf;
  var Sequence = kotlin_kotlin.$_$.qf;
  var sequence = kotlin_kotlin.$_$.ag;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var get_DefaultRotation = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var get_DefaultPivotX = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var get_DefaultPivotY = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var get_DefaultScaleX = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var get_DefaultScaleY = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var get_DefaultTranslationX = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var get_DefaultTranslationY = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var removeLastOrNull = kotlin_kotlin.$_$.ga;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var toList_0 = kotlin_kotlin.$_$.cg;
  var checkIndexOverflow = kotlin_kotlin.$_$.e7;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var copyToArray = kotlin_kotlin.$_$.y7;
  var SequenceScope = kotlin_kotlin.$_$.pf;
  var until = kotlin_kotlin.$_$.if;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var numberToInt = kotlin_kotlin.$_$.de;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var Companion_instance_1 = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.i5;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x3;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Long = kotlin_kotlin.$_$.wi;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
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
    this.oeq_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda$slambda).qeq = function ($this$async, $completion) {
    var tmp = this.f1x($this$async, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).ha = function (p1, $completion) {
    return this.qeq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.oeq_1(this);
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
  protoOf(AsyncCache$getOrLoad$slambda$slambda).f1x = function ($this$async, completion) {
    var i = new AsyncCache$getOrLoad$slambda$slambda(this.oeq_1, completion);
    i.peq_1 = $this$async;
    return i;
  };
  function AsyncCache$getOrLoad$slambda$slambda_0($load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.qeq($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation) {
    this.zeq_1 = this$0;
    this.aer_1 = $key;
    this.ber_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda).qeq = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AsyncCache$getOrLoad$slambda).ha = function (p1, $completion) {
    return this.qeq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.der_1 = this.zeq_1.ger_1;
            var tmp_1 = this;
            tmp_1.eer_1 = null;
            this.n9_1 = 1;
            suspendResult = this.der_1.x2c(this.eer_1, this);
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
                var cached = this.zeq_1.her_1.n2(this.aer_1);
                if (cached == null || cached.y14()) {
                  var tmp_4 = CoroutineStart_LAZY_getInstance();
                  cached = async(this.cer_1, VOID, tmp_4, AsyncCache$getOrLoad$slambda$slambda_0(this.ber_1, null));
                  var this_0 = this.zeq_1.her_1;
                  var key = this.aer_1;
                  var value = cached;
                  this_0.f2(key, value);
                }
                tmp$ret$0 = cached;
                break l$ret$1;
              } catch ($p) {
                var tmp_5;
                var t = $p;
                this.der_1.z2c(this.eer_1);
                throw t;
              }
            }
             while (false);
            var tmp_6 = tmp$ret$0;
            this.der_1.z2c(this.eer_1);
            tmp_2.fer_1 = tmp_6;
            this.n9_1 = 2;
            suspendResult = this.fer_1.r17(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(AsyncCache$getOrLoad$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new AsyncCache$getOrLoad$slambda(this.zeq_1, this.aer_1, this.ber_1, completion);
    i.cer_1 = $this$coroutineScope;
    return i;
  };
  function AsyncCache$getOrLoad$slambda_0(this$0, $key, $load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.qeq($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache() {
    this.ger_1 = Mutex();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.her_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AsyncCache).ier = function (key, load, $completion) {
    return coroutineScope(AsyncCache$getOrLoad$slambda_0(this, key, load, null), $completion);
  };
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageBitmap$delegate;
    emptyImageBitmap$factory();
    return this_0.w();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageVector$delegate;
    emptyImageVector$factory();
    return this_0.w();
  }
  var emptyImageVector$delegate;
  function get_emptySvgPainter() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptySvgPainter$delegate;
    emptySvgPainter$factory();
    return this_0.w();
  }
  var emptySvgPainter$delegate;
  function get_imageCache() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCache;
  }
  var imageCache;
  function Bitmap(bitmap) {
    this.jer_1 = bitmap;
  }
  function Vector(vector) {
    this.ker_1 = vector;
  }
  function Svg(painter) {
    this.ler_1 = painter;
  }
  function DrawableResource(id, items) {
    Resource.call(this, id, items);
  }
  function painterResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.c2v(-1508925367);
    if (isTraceInProgress()) {
      traceEventStart(-1508925367, $changed, -1, 'org.jetbrains.compose.resources.painterResource (ImageResources.kt:35)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.mer($composer_0, 0);
    $composer_0.c2v(-1389301971);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.h2l(resource) || ($changed & 6) === 4) | $composer_0.h2l(environment));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.painterResource.<anonymous>' call
      var value = getResourceItemByEnvironment(resource, environment).oer_1;
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    var filePath = tmp0_group;
    if (endsWith(filePath, '.xml', true)) {
      $composer_0.c2v(-118556854);
      var tmp1_return = rememberVectorPainter(vectorResource(resource, $composer_0, 14 & $changed), $composer_0, 0);
      $composer_0.e2v();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.e2v();
      return tmp1_return;
    } else if (endsWith(filePath, '.svg', true)) {
      $composer_0.c2v(-118445595);
      var tmp2_return = svgPainter(resource, $composer_0, 14 & $changed);
      $composer_0.e2v();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.e2v();
      return tmp2_return;
    } else {
      $composer_0.c2v(-118396429);
      var tmp3_return = new BitmapPainter(imageResource(resource, $composer_0, 14 & $changed));
      $composer_0.e2v();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.e2v();
      return tmp3_return;
    }
  }
  function vectorResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.c2v(-1394399862);
    if (isTraceInProgress()) {
      traceEventStart(-1394399862, $changed, -1, 'org.jetbrains.compose.resources.vectorResource (ImageResources.kt:86)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.c2v(1002149100);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.vectorResource.<anonymous>' call
      var value = vectorResource$lambda_0;
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    var imageVector$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, vectorResource$slambda_0(resource, resourceReader, density, null), $composer_0, 35840 | 14 & $changed);
    var tmp0_0 = vectorResource$lambda(imageVector$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0_0;
  }
  function svgPainter(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.c2v(1371694195);
    if (isTraceInProgress()) {
      traceEventStart(1371694195, $changed, -1, 'org.jetbrains.compose.resources.svgPainter (ImageResources.kt:106)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.c2v(-946511423);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.svgPainter.<anonymous>' call
      var value = svgPainter$lambda_0;
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    var svgPainter$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, svgPainter$slambda_0(resource, resourceReader, density, null), $composer_0, 35840 | 14 & $changed);
    var tmp0_0 = svgPainter$lambda(svgPainter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0_0;
  }
  function imageResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.c2v(1838739546);
    if (isTraceInProgress()) {
      traceEventStart(1838739546, $changed, -1, 'org.jetbrains.compose.resources.imageResource (ImageResources.kt:56)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    var resourceEnvironment = rememberResourceEnvironment($composer_0, 0);
    $composer_0.c2v(1334344470);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.imageResource.<anonymous>' call
      var value = imageResource$lambda_0;
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    var imageBitmap$delegate = rememberResourceState(resource, resourceReader, resourceEnvironment, tmp1_group, imageResource$slambda_0(resource, resourceEnvironment, resourceReader, null), $composer_0, 35840 | 14 & $changed);
    var tmp0 = imageResource$lambda(imageBitmap$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  }
  function loadImage(path, cacheKey, resourceReader, decode, $completion) {
    var tmp = get_imageCache();
    return tmp.ier(cacheKey, loadImage$slambda_0(decode, resourceReader, path, null), $completion);
  }
  function vectorResource$lambda($imageVector$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageVector', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $imageVector$delegate.w();
  }
  function svgPainter$lambda($svgPainter$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('svgPainter', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $svgPainter$delegate.w();
  }
  function imageResource$lambda($imageBitmap$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageBitmap', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $imageBitmap$delegate.w();
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
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).c2o();
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
    this.zer_1 = $resource;
    this.aes_1 = $resourceReader;
    this.bes_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(vectorResource$slambda).ees = function (env, $completion) {
    var tmp = this.fes(env, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(vectorResource$slambda).ha = function (p1, $completion) {
    return this.ees(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(vectorResource$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.des_1 = getResourceItemByEnvironment(this.zer_1, this.ces_1).oer_1;
            this.n9_1 = 1;
            suspendResult = loadImage(this.des_1, this.des_1, this.aes_1, vectorResource$slambda$lambda(this.bes_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Vector ? suspendResult : THROW_CCE();
            return cached.ker_1;
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
  protoOf(vectorResource$slambda).fes = function (env, completion) {
    var i = new vectorResource$slambda(this.zer_1, this.aes_1, this.bes_1, completion);
    i.ces_1 = env;
    return i;
  };
  function vectorResource$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new vectorResource$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.ees(env, $completion);
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
    this.oes_1 = $resource;
    this.pes_1 = $resourceReader;
    this.qes_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(svgPainter$slambda).tes = function (env, $completion) {
    var tmp = this.fes(env, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(svgPainter$slambda).ha = function (p1, $completion) {
    return this.tes(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(svgPainter$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.ses_1 = getResourceItemByEnvironment(this.oes_1, this.res_1).oer_1;
            this.n9_1 = 1;
            suspendResult = loadImage(this.ses_1, this.ses_1, this.pes_1, svgPainter$slambda$lambda(this.qes_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Svg ? suspendResult : THROW_CCE();
            return cached.ler_1;
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
  protoOf(svgPainter$slambda).fes = function (env, completion) {
    var i = new svgPainter$slambda(this.oes_1, this.pes_1, this.qes_1, completion);
    i.res_1 = env;
    return i;
  };
  function svgPainter$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new svgPainter$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.tes(env, $completion);
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
    this.cet_1 = $resource;
    this.det_1 = $resourceEnvironment;
    this.eet_1 = $resourceReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(imageResource$slambda).let = function (env, $completion) {
    var tmp = this.fes(env, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(imageResource$slambda).ha = function (p1, $completion) {
    return this.let(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(imageResource$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.get_1 = getResourceItemByEnvironment(this.cet_1, this.fet_1);
            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator = this.get_1.ner_1.g();
              while (tmp0_iterator.h()) {
                var element = tmp0_iterator.i();
                if (element instanceof DensityQualifier) {
                  tmp$ret$0 = element;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = null;
            }
             while (false);
            var tmp_1 = tmp$ret$0;
            tmp_0.het_1 = tmp_1 instanceof DensityQualifier ? tmp_1 : null;
            var tmp_2 = this;
            var tmp0_safe_receiver = this.het_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oet_1;
            tmp_2.iet_1 = tmp1_elvis_lhs == null ? DensityQualifier_MDPI_getInstance().oet_1 : tmp1_elvis_lhs;
            this.jet_1 = this.det_1.set_1.oet_1;
            this.ket_1 = this.get_1.oer_1;
            this.n9_1 = 1;
            var tmp_3 = this.ket_1 + '-' + this.jet_1 + 'dpi';
            suspendResult = loadImage(this.ket_1, tmp_3, this.eet_1, imageResource$slambda$lambda(this.iet_1, this.jet_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Bitmap ? suspendResult : THROW_CCE();
            return cached.jer_1;
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
  protoOf(imageResource$slambda).fes = function (env, completion) {
    var i = new imageResource$slambda(this.cet_1, this.det_1, this.eet_1, completion);
    i.fet_1 = env;
    return i;
  };
  function imageResource$slambda_0($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    var i = new imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation);
    var l = function (env, $completion) {
      return i.let(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadImage$slambda($decode, $resourceReader, $path, resultContinuation) {
    this.beu_1 = $decode;
    this.ceu_1 = $resourceReader;
    this.deu_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImage$slambda).eeu = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(loadImage$slambda).db = function ($completion) {
    return this.eeu($completion);
  };
  protoOf(loadImage$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ceu_1.feu(this.deu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.beu_1(ARGUMENT);
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
  protoOf(loadImage$slambda).j23 = function (completion) {
    return new loadImage$slambda(this.beu_1, this.ceu_1, this.deu_1, completion);
  };
  function loadImage$slambda_0($decode, $resourceReader, $path, resultContinuation) {
    var i = new loadImage$slambda($decode, $resourceReader, $path, resultContinuation);
    var l = function ($completion) {
      return i.eeu($completion);
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
    this.geu_1 = language;
  }
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof LanguageQualifier))
      THROW_CCE();
    return this.geu_1 === other.geu_1;
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.geu_1);
  };
  protoOf(LanguageQualifier).toString = function () {
    return "LanguageQualifier(language='" + this.geu_1 + "')";
  };
  function RegionQualifier(region) {
    this.heu_1 = region;
  }
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof RegionQualifier))
      THROW_CCE();
    return this.heu_1 === other.heu_1;
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.heu_1);
  };
  protoOf(RegionQualifier).toString = function () {
    return "RegionQualifier(region='" + this.heu_1 + "')";
  };
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
  }
  protoOf(Companion).ieu = function (isDark) {
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
  protoOf(Companion_0).jeu = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().oet_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().oet_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().oet_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().oet_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().oet_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).keu = function (density) {
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
    this.oet_1 = dpi;
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
    this.ner_1 = qualifiers;
    this.oer_1 = path;
    this.per_1 = offset;
    this.qer_1 = size;
  }
  protoOf(ResourceItem).toString = function () {
    return 'ResourceItem(qualifiers=' + toString(this.ner_1) + ', path=' + this.oer_1 + ', offset=' + this.per_1.toString() + ', size=' + this.qer_1.toString() + ')';
  };
  protoOf(ResourceItem).hashCode = function () {
    var result = hashCode(this.ner_1);
    result = imul(result, 31) + getStringHashCode(this.oer_1) | 0;
    result = imul(result, 31) + this.per_1.hashCode() | 0;
    result = imul(result, 31) + this.qer_1.hashCode() | 0;
    return result;
  };
  protoOf(ResourceItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceItem))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceItem ? other : THROW_CCE();
    if (!equals(this.ner_1, tmp0_other_with_cast.ner_1))
      return false;
    if (!(this.oer_1 === tmp0_other_with_cast.oer_1))
      return false;
    if (!this.per_1.equals(tmp0_other_with_cast.per_1))
      return false;
    if (!this.qer_1.equals(tmp0_other_with_cast.qer_1))
      return false;
    return true;
  };
  function Resource(id, items) {
    this.leu_1 = id;
    this.meu_1 = items;
  }
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Resource))
      THROW_CCE();
    return this.leu_1 === other.leu_1;
  };
  protoOf(Resource).hashCode = function () {
    return getStringHashCode(this.leu_1);
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
    this.pet_1 = language;
    this.qet_1 = region;
    this.ret_1 = theme;
    this.set_1 = density;
  }
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ResourceEnvironment))
      THROW_CCE();
    if (!this.pet_1.equals(other.pet_1))
      return false;
    if (!this.qet_1.equals(other.qet_1))
      return false;
    if (!this.ret_1.equals(other.ret_1))
      return false;
    if (!this.set_1.equals(other.set_1))
      return false;
    return true;
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.pet_1.hashCode();
    result = imul(31, result) + this.qet_1.hashCode() | 0;
    result = imul(31, result) + this.ret_1.hashCode() | 0;
    result = imul(31, result) + this.set_1.hashCode() | 0;
    return result;
  };
  function getResourceItemByEnvironment(_this__u8e3s4, environment) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    var this_0 = filterByLocale(toList(_this__u8e3s4.meu_1), environment.pet_1, environment.qet_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    if (this_0.j() === 1)
      return first(this_0);
    var this_1 = filterBy(this_0, environment.ret_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    if (this_1.j() === 1)
      return first(this_1);
    var this_2 = filterByDensity(this_1, environment.set_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    if (this_2.j() === 1)
      return first(this_2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.getResourceItemByEnvironment.<anonymous>' call
    var tmp;
    if (this_2.q()) {
      var message = "Resource with ID='" + _this__u8e3s4.leu_1 + "' not found";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var message_0 = "Resource with ID='" + _this__u8e3s4.leu_1 + "' has more than one file: " + joinToString(this_2, VOID, VOID, VOID, VOID, VOID, getResourceItemByEnvironment$lambda);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function rememberResourceEnvironment($composer, $changed) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var $composer_0 = $composer;
    $composer_0.c2v(707674437);
    if (isTraceInProgress()) {
      traceEventStart(707674437, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceEnvironment (ResourceEnvironment.kt:73)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeEnvironment = tmp0;
    var tmp0_0 = composeEnvironment.mer($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
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
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      if (element.oet_1 >= density.oet_1) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = filterByDensity$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0(tmp);
    var exactAndHigherQualifiers = sortedWith(destination, tmp$ret$3);
    var tmp0_iterator_0 = exactAndHigherQualifiers.g();
    $l$loop: while (tmp0_iterator_0.h()) {
      var qualifier = tmp0_iterator_0.i();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var tmp0_iterator_1 = items.g();
      while (tmp0_iterator_1.h()) {
        var element_0 = tmp0_iterator_1.i();
        // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var this_1 = element_0.ner_1;
          var tmp_0;
          if (isInterface(this_1, Collection)) {
            tmp_0 = this_1.q();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$5 = false;
            break $l$block_0;
          }
          var tmp0_iterator_2 = this_1.g();
          while (tmp0_iterator_2.h()) {
            var element_1 = tmp0_iterator_2.i();
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
      if (!withQualifier.q())
        break $l$loop;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.q())
      return withQualifier;
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_2 = minus(get_entries(), DensityQualifier_LDPI_getInstance());
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_3 = this_2.g();
    while (tmp0_iterator_3.h()) {
      var element_2 = tmp0_iterator_3.i();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      if (element_2.oet_1 < density.oet_1) {
        destination_1.e(element_2);
      }
    }
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = filterByDensity$lambda_0;
    var tmp$ret$15 = new sam$kotlin_Comparator$0(tmp_1);
    var lowQualifiers = sortedWith(destination_1, tmp$ret$15);
    var tmp1_iterator = lowQualifiers.g();
    $l$loop_0: while (tmp1_iterator.h()) {
      var qualifier_0 = tmp1_iterator.i();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_2 = ArrayList_init_$Create$();
      var tmp0_iterator_4 = items.g();
      while (tmp0_iterator_4.h()) {
        var element_3 = tmp0_iterator_4.i();
        // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
        var tmp$ret$17;
        $l$block_2: {
          // Inline function 'kotlin.collections.any' call
          var this_3 = element_3.ner_1;
          var tmp_2;
          if (isInterface(this_3, Collection)) {
            tmp_2 = this_3.q();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$17 = false;
            break $l$block_2;
          }
          var tmp0_iterator_5 = this_3.g();
          while (tmp0_iterator_5.h()) {
            var element_4 = tmp0_iterator_5.i();
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
      if (!withQualifier.q())
        break $l$loop_0;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.q())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$();
    var tmp0_iterator_6 = items.g();
    while (tmp0_iterator_6.h()) {
      var element_5 = tmp0_iterator_6.i();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      var tmp$ret$24;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var this_4 = element_5.ner_1;
        var tmp_3;
        if (isInterface(this_4, Collection)) {
          tmp_3 = this_4.q();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$24 = true;
          break $l$block_4;
        }
        var tmp0_iterator_7 = this_4.g();
        while (tmp0_iterator_7.h()) {
          var element_6 = tmp0_iterator_7.i();
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
    if (!withNoDensity.q())
      return withNoDensity;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = ArrayList_init_$Create$();
    var tmp0_iterator_8 = items.g();
    while (tmp0_iterator_8.h()) {
      var element_7 = tmp0_iterator_8.i();
      // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
      var tmp$ret$30;
      $l$block_6: {
        // Inline function 'kotlin.collections.any' call
        var this_5 = element_7.ner_1;
        var tmp_4;
        if (isInterface(this_5, Collection)) {
          tmp_4 = this_5.q();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp$ret$30 = false;
          break $l$block_6;
        }
        var tmp0_iterator_9 = this_5.g();
        while (tmp0_iterator_9.h()) {
          var element_8 = tmp0_iterator_9.i();
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
    var tmp0_iterator = _this__u8e3s4.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.jetbrains.compose.resources.filterBy.<anonymous>' call
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = element.ner_1;
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.q();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = this_0.g();
        while (tmp0_iterator_0.h()) {
          var element_0 = tmp0_iterator_0.i();
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
    if (!withQualifier.q())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = _this__u8e3s4.g();
    while (tmp0_iterator_1.h()) {
      var element_1 = tmp0_iterator_1.i();
      // Inline function 'org.jetbrains.compose.resources.filterBy.<anonymous>' call
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var this_1 = element_1.ner_1;
        var tmp_0;
        if (isInterface(this_1, Collection)) {
          tmp_0 = this_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$6 = true;
          break $l$block_2;
        }
        var tmp0_iterator_2 = this_1.g();
        while (tmp0_iterator_2.h()) {
          var element_2 = tmp0_iterator_2.i();
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
    var tmp0_iterator = _this__u8e3s4.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = element.ner_1;
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.q();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = this_0.g();
        while (tmp0_iterator_0.h()) {
          var element_0 = tmp0_iterator_0.i();
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
    var tmp0_iterator_1 = withLanguage.g();
    while (tmp0_iterator_1.h()) {
      var element_1 = tmp0_iterator_1.i();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var this_1 = element_1.ner_1;
        var tmp_0;
        if (isInterface(this_1, Collection)) {
          tmp_0 = this_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$5 = false;
          break $l$block_2;
        }
        var tmp0_iterator_2 = this_1.g();
        while (tmp0_iterator_2.h()) {
          var element_2 = tmp0_iterator_2.i();
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
    if (!withExactLocale.q())
      return withExactLocale;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_3 = withLanguage.g();
    while (tmp0_iterator_3.h()) {
      var element_3 = tmp0_iterator_3.i();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$11;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var this_2 = element_3.ner_1;
        var tmp_1;
        if (isInterface(this_2, Collection)) {
          tmp_1 = this_2.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$11 = true;
          break $l$block_4;
        }
        var tmp0_iterator_4 = this_2.g();
        while (tmp0_iterator_4.h()) {
          var element_4 = tmp0_iterator_4.i();
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
    if (!withDefaultRegion.q())
      return withDefaultRegion;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var tmp0_iterator_5 = _this__u8e3s4.g();
    while (tmp0_iterator_5.h()) {
      var element_5 = tmp0_iterator_5.i();
      // Inline function 'org.jetbrains.compose.resources.filterByLocale.<anonymous>' call
      var tmp$ret$17;
      $l$block_6: {
        // Inline function 'kotlin.collections.none' call
        var this_3 = element_5.ner_1;
        var tmp_2;
        if (isInterface(this_3, Collection)) {
          tmp_2 = this_3.q();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp$ret$17 = true;
          break $l$block_6;
        }
        var tmp0_iterator_6 = this_3.g();
        while (tmp0_iterator_6.h()) {
          var element_6 = tmp0_iterator_6.i();
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
    this.neu_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.neu_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.neu_1;
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
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).mer = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:44)');
    }
    var composeLocale = Companion_instance.o2g();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeDensity = tmp0;
    $composer_0.c2v(1697238779);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.h2l(composeLocale) | $composer_0.i2w(composeTheme)) | $composer_0.h2l(composeDensity));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.<no name provided>.rememberEnvironment.<anonymous>' call
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.k73()), new RegionQualifier(composeLocale.l73()), Companion_instance_2.ieu(composeTheme), Companion_instance_3.keu(composeDensity.g5b()));
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
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
    return it.oer_1;
  }
  function filterByDensity$lambda(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp = a.oet_1;
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp$ret$1 = b.oet_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function filterByDensity$lambda_0(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp = b.oet_1;
    // Inline function 'org.jetbrains.compose.resources.filterByDensity.<anonymous>' call
    var tmp$ret$1 = a.oet_1;
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
    this.qeu_1 = key;
  }
  function stringResource(resource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-1520244580);
    if (isTraceInProgress()) {
      traceEventStart(-1520244580, $changed, -1, 'org.jetbrains.compose.resources.stringResource (StringResources.kt:24)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    $composer_0.c2v(1773673164);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.stringResource.<anonymous>' call
      var value = stringResource$lambda_0;
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.e2v();
    var str$delegate = rememberResourceState_0(resource, tmp1_group, stringResource$slambda_0(resource, resourceReader, null), $composer_0, 560 | 14 & $changed);
    var tmp0 = stringResource$lambda(str$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  }
  function loadString(resource, resourceReader, environment, $completion) {
    var tmp = new $loadStringCOROUTINE$0(resource, resourceReader, environment, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function stringResource$lambda($str$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('str', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $str$delegate.w();
  }
  function stringResource$lambda_0() {
    return '';
  }
  function stringResource$slambda($resource, $resourceReader, resultContinuation) {
    this.lev_1 = $resource;
    this.mev_1 = $resourceReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(stringResource$slambda).oev = function (env, $completion) {
    var tmp = this.fes(env, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(stringResource$slambda).ha = function (p1, $completion) {
    return this.oev(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(stringResource$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = loadString(this.lev_1, this.mev_1, this.nev_1, this);
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
  protoOf(stringResource$slambda).fes = function (env, completion) {
    var i = new stringResource$slambda(this.lev_1, this.mev_1, completion);
    i.nev_1 = env;
    return i;
  };
  function stringResource$slambda_0($resource, $resourceReader, resultContinuation) {
    var i = new stringResource$slambda($resource, $resourceReader, resultContinuation);
    var l = function (env, $completion) {
      return i.oev(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadStringCOROUTINE$0(resource, resourceReader, environment, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zeu_1 = resource;
    this.aev_1 = resourceReader;
    this.bev_1 = environment;
  }
  protoOf($loadStringCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.cev_1 = getResourceItemByEnvironment(this.zeu_1, this.bev_1);
            this.n9_1 = 1;
            suspendResult = getStringItem(this.cev_1, this.aev_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var item = suspendResult instanceof Value ? suspendResult : THROW_CCE();
            return item.pev_1;
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
  var SimpleStringFormatRegex;
  function get_stringItemsCache() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return stringItemsCache;
  }
  var stringItemsCache;
  function Value(text) {
    this.pev_1 = text;
  }
  protoOf(Value).toString = function () {
    return 'Value(text=' + this.pev_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return getStringHashCode(this.pev_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!(this.pev_1 === tmp0_other_with_cast.pev_1))
      return false;
    return true;
  };
  function Plurals(items) {
    this.qev_1 = items;
  }
  protoOf(Plurals).toString = function () {
    return 'Plurals(items=' + toString(this.qev_1) + ')';
  };
  protoOf(Plurals).hashCode = function () {
    return hashCode(this.qev_1);
  };
  protoOf(Plurals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plurals))
      return false;
    var tmp0_other_with_cast = other instanceof Plurals ? other : THROW_CCE();
    if (!equals(this.qev_1, tmp0_other_with_cast.qev_1))
      return false;
    return true;
  };
  function Array_0(items) {
    this.rev_1 = items;
  }
  protoOf(Array_0).toString = function () {
    return 'Array(items=' + toString(this.rev_1) + ')';
  };
  protoOf(Array_0).hashCode = function () {
    return hashCode(this.rev_1);
  };
  protoOf(Array_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Array_0))
      return false;
    var tmp0_other_with_cast = other instanceof Array_0 ? other : THROW_CCE();
    if (!equals(this.rev_1, tmp0_other_with_cast.rev_1))
      return false;
    return true;
  };
  function getStringItem(resourceItem, resourceReader, $completion) {
    var tmp = get_stringItemsCache();
    var tmp_0 = resourceItem.oer_1 + '/' + resourceItem.per_1.toString() + '-' + resourceItem.qer_1.toString();
    return tmp.ier(tmp_0, getStringItem$slambda_0(resourceReader, resourceItem, null), $completion);
  }
  function decodeAsPlural(_this__u8e3s4) {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    // Inline function 'kotlin.collections.associate' call
    var this_0 = split(_this__u8e3s4, [',']);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'org.jetbrains.compose.resources.decodeAsPlural.<anonymous>' call
      var category = substringBefore(element, _Char___init__impl__6a9atx(58));
      var valueBase64 = substringAfter(element, _Char___init__impl__6a9atx(58));
      var pair = to(ensureNotNull(Companion_instance_4.m5i(category)), decodeToString(Default_getInstance().jk(valueBase64)));
      destination.f2(pair.eb_1, pair.fb_1);
    }
    return new Plurals(destination);
  }
  function decodeAsArray(_this__u8e3s4) {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(_this__u8e3s4, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
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
    this.aew_1 = $resourceReader;
    this.bew_1 = $resourceItem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getStringItem$slambda).cew = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(getStringItem$slambda).db = function ($completion) {
    return this.cew($completion);
  };
  protoOf(getStringItem$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.aew_1.dew(this.bew_1.oer_1, this.bew_1.per_1, this.bew_1.qer_1, this);
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
  protoOf(getStringItem$slambda).j23 = function (completion) {
    return new getStringItem$slambda(this.aew_1, this.bew_1, completion);
  };
  function getStringItem$slambda_0($resourceReader, $resourceItem, resultContinuation) {
    var i = new getStringItem$slambda($resourceReader, $resourceItem, resultContinuation);
    var l = function ($completion) {
      return i.cew($completion);
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
  protoOf(Companion_1).m5i = function (name) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = get_entries_0().g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'org.jetbrains.compose.resources.plural.Companion.fromString.<anonymous>' call
        if (equals_0(element.t2_1, name, true)) {
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
      tmp = density.p5b(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_0().o67_1;
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_0().p67_1;
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
        tmp = Companion_getInstance_1().b68_1;
        break;
      case 'round':
        tmp = Companion_getInstance_1().c68_1;
        break;
      case 'square':
        tmp = Companion_getInstance_1().d68_1;
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
        tmp = Companion_getInstance_2().f68_1;
        break;
      case 'round':
        tmp = Companion_getInstance_2().g68_1;
        break;
      case 'bevel':
        tmp = Companion_getInstance_2().h68_1;
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
        tmp = Companion_getInstance_3().r5z_1;
        break;
      case 'repeated':
        tmp = Companion_getInstance_3().s5z_1;
        break;
      case 'mirror':
        tmp = Companion_getInstance_3().t5z_1;
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
    return builder.c2o();
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
    tmp.eew_1 = ArrayList_init_$Create$();
  }
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.few(namespace, name);
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
    var tmp0_iterator = (isInterface(tmp, Sequence) ? tmp : THROW_CCE()).g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.jetbrains.compose.resources.vector.parseVectorNodes.<anonymous>' call
      parseVectorNode(element, builder, context);
    }
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.gew()) {
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
      tmp_1 = Companion_getInstance_0().o67_1;
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
      tmp_20 = Companion_getInstance_1().b68_1;
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
      tmp_24 = Companion_getInstance_2().f68_1;
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
    builder.v7w(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.t7w(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.eew_1.e(Group_Virtual_getInstance());
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
    builder.s7w(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? get_DefaultTranslationY() : tmp14_elvis_lhs, get_EmptyPath());
    context.eew_1.e(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.eew_1);
      builder.u7w();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var prefix = _this__u8e3s4.hew(namespace);
    // Inline function 'kotlin.sequences.find' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, apptAttr$lambda);
    var this_1 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = this_1.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'org.jetbrains.compose.resources.vector.apptAttr.<anonymous>' call
        if (element.iew() === 'http://schemas.android.com/aapt' && element.jew() === 'attr' && element.kew('name') === prefix + ':' + name) {
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
      var tmp0_iterator = this_1.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'org.jetbrains.compose.resources.vector.parseElementBrush.<anonymous>' call
        if (element.gew() === 'gradient') {
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
      tmp_10 = Companion_getInstance_3().r5z_1;
    } else {
      tmp_10 = tmp9_elvis_lhs;
    }
    return tmp.n5z(tmp_0, tmp_4, tmp_8, tmp_10);
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
      tmp_8 = Companion_getInstance_3().r5z_1;
    } else {
      tmp_8 = tmp7_elvis_lhs;
    }
    return tmp.v5z(tmp_0, tmp_4, tmp_6, tmp_8);
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
    return tmp.w5z(tmp_0, Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs));
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
    var tmp0_iterator = items.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
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
    if (colorStops.q()) {
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
    this.tew_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).xew = function ($this$sequence, $completion) {
    var tmp = this.yew($this$sequence, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).ha = function (p1, $completion) {
    return this.xew(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.vew_1 = until(0, this.tew_1.zew().a()).g();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.vew_1.h()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.wew_1 = this.vew_1.i();
            this.n9_1 = 2;
            suspendResult = this.uew_1.wh(this.tew_1.zew().aex(this.wew_1), this);
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).yew = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.tew_1, completion);
    i.uew_1 = $this$sequence;
    return i;
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.xew($this$sequence, $completion);
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
    return it.gew() === 'item';
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
    return new ResourceEnvironment(new LanguageQualifier(locale.language), new RegionQualifier(locale.region), Companion_instance_2.ieu(isDarkTheme), Companion_instance_3.jeu(dpi));
  }
  function getPlatformResourceReader() {
    return new getPlatformResourceReader$1();
  }
  function readAsBlob($this, path, $completion) {
    var tmp = new $readAsBlobCOROUTINE$3($this, path, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function asByteArray(_this__u8e3s4, $this, $completion) {
    var tmp = new $asByteArrayCOROUTINE$4($this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $readCOROUTINE$1(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gey_1 = _this__u8e3s4;
    this.hey_1 = path;
  }
  protoOf($readCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = readAsBlob(this.gey_1, this.hey_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.iey_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = asByteArray(this.iey_1, this.gey_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readPartCOROUTINE$2(_this__u8e3s4, path, offset, size, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rey_1 = _this__u8e3s4;
    this.sey_1 = path;
    this.tey_1 = offset;
    this.uey_1 = size;
  }
  protoOf($readPartCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = readAsBlob(this.rey_1, this.sey_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.vey_1 = suspendResult;
            this.wey_1 = this.vey_1.slice(this.tey_1.g1(), this.tey_1.a3(this.uey_1).g1());
            this.n9_1 = 2;
            suspendResult = asByteArray(this.wey_1, this.rey_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readAsBlobCOROUTINE$3(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jex_1 = _this__u8e3s4;
    this.kex_1 = path;
  }
  protoOf($readAsBlobCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.lex_1 = WebResourcesConfiguration_getInstance().xey_1(this.kex_1);
            this.n9_1 = 1;
            suspendResult = await_0(window.fetch(this.lex_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.mex_1 = suspendResult;
            if (!this.mex_1.ok) {
              throw new MissingResourceException(this.lex_1);
            }

            this.n9_1 = 2;
            suspendResult = await_0(this.mex_1.blob(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $asByteArrayCOROUTINE$4(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vex_1 = _this__u8e3s4;
    this.wex_1 = _this__u8e3s4_0;
  }
  protoOf($asByteArrayCOROUTINE$4).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var tmp_1 = this.wex_1.arrayBuffer();
            tmp_0.xex_1 = tmp_1 instanceof Promise ? tmp_1 : THROW_CCE();
            this.n9_1 = 1;
            suspendResult = await_0(this.xex_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Int8Array(ARGUMENT);
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
  function getPlatformResourceReader$1() {
  }
  protoOf(getPlatformResourceReader$1).feu = function (path, $completion) {
    var tmp = new $readCOROUTINE$1(this, path, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(getPlatformResourceReader$1).dew = function (path, offset, size, $completion) {
    var tmp = new $readPartCOROUTINE$2(this, path, offset, size, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function ElementImpl(element) {
    NodeImpl.call(this, element);
    this.cez_1 = element;
  }
  protoOf(ElementImpl).jew = function () {
    return this.cez_1.localName;
  };
  protoOf(ElementImpl).iew = function () {
    var tmp0_elvis_lhs = this.cez_1.namespaceURI;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).few = function (nameSpaceURI, localName) {
    var tmp0_elvis_lhs = this.cez_1.getAttributeNS(nameSpaceURI, localName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).kew = function (name) {
    var tmp0_elvis_lhs = this.cez_1.getAttribute(name);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function NodeImpl$childNodes$2$1(this$0) {
    this.iez_1 = this$0;
    this.hez_1 = this$0.dez_1.childNodes.length;
  }
  protoOf(NodeImpl$childNodes$2$1).aex = function (i) {
    var tmp0_elvis_lhs = this.iez_1.dez_1.childNodes.item(i);
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
    return this.hez_1;
  };
  function NodeImpl$childNodes$delegate$lambda(this$0) {
    return function () {
      return new NodeImpl$childNodes$2$1(this$0);
    };
  }
  function NodeImpl(n) {
    this.dez_1 = n;
    this.eez_1 = '';
    this.fez_1 = '';
    var tmp = this;
    tmp.gez_1 = lazy(NodeImpl$childNodes$delegate$lambda(this));
  }
  protoOf(NodeImpl).gew = function () {
    return this.dez_1.nodeName;
  };
  protoOf(NodeImpl).zew = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.gez_1;
    childNodes$factory();
    return this_0.w();
  };
  protoOf(NodeImpl).hew = function (namespaceURI) {
    var tmp0_elvis_lhs = this.dez_1.lookupPrefix(namespaceURI);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function childNodes$factory() {
    return getPropertyCallableRef('childNodes', 1, KProperty1, function (receiver) {
      return receiver.zew();
    }, null);
  }
  function clear(_this__u8e3s4, $this) {
    _this__u8e3s4.c6d(Companion_getInstance_4().d60_1, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_5().j5y_1);
  }
  function DrawCache() {
    this.jez_1 = null;
    this.kez_1 = null;
    this.lez_1 = null;
    this.mez_1 = LayoutDirection_Ltr_getInstance();
    this.nez_1 = Companion_getInstance_6().n5c_1;
    this.oez_1 = Companion_getInstance_7().k65_1;
    this.pez_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).v7v = function (config, size, density, layoutDirection, block) {
    this.lez_1 = density;
    this.mez_1 = layoutDirection;
    var targetImage = this.jez_1;
    var targetCanvas = this.kez_1;
    if (targetImage == null || targetCanvas == null || _IntSize___get_width__impl__d9yl4o(size) > targetImage.f5a() || _IntSize___get_height__impl__prv63b(size) > targetImage.g5a() || !(this.oez_1 === config)) {
      targetImage = ImageBitmap(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size), config);
      targetCanvas = Canvas(targetImage);
      this.jez_1 = targetImage;
      this.kez_1 = targetCanvas;
      this.oez_1 = config;
    }
    this.nez_1 = size;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var this_0 = this.pez_1;
    var canvas = targetCanvas;
    var size_0 = toSize(size);
    var tmp0_container = this_0.j6b_1;
    var prevDensity = tmp0_container.gb();
    var prevLayoutDirection = tmp0_container.hb();
    var prevCanvas = tmp0_container.l6c();
    var prevSize = tmp0_container.m6c();
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.j6b_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_1.h6c_1 = density;
    this_1.i6c_1 = layoutDirection;
    this_1.j6c_1 = canvas;
    this_1.k6c_1 = size_0;
    canvas.r61();
    // Inline function 'org.jetbrains.compose.resources.DrawCache.drawCachedImage.<anonymous>' call
    clear(this_0, this);
    block(this_0);
    canvas.s61();
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.j6b_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_2.h6c_1 = prevDensity;
    this_2.i6c_1 = prevLayoutDirection;
    this_2.j6c_1 = prevCanvas;
    this_2.k6c_1 = prevSize;
    targetImage.j65();
  };
  protoOf(DrawCache).w7v = function (target, alpha, colorFilter) {
    var targetImage = this.jez_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(targetImage == null)) {
      // Inline function 'org.jetbrains.compose.resources.DrawCache.drawInto.<anonymous>' call
      var message = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.e6d(targetImage, VOID, this.nez_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  function toSvgPainter(_this__u8e3s4, density) {
    return new SvgPainter(_this__u8e3s4.qez_1, density);
  }
  function SvgElement(svgdom) {
    this.qez_1 = svgdom;
  }
  function toSvgElement(_this__u8e3s4) {
    return new SvgElement(SVGDOM_init_$Create$(Companion_getInstance_8().v5h(_this__u8e3s4)));
  }
  function toImageBitmap(_this__u8e3s4, resourceDensity, targetDensity) {
    var image = Companion_getInstance_9().u5k(_this__u8e3s4);
    var targetImage;
    if (resourceDensity > targetDensity) {
      var scale = targetDensity / resourceDensity;
      var targetH = image.g5a() * scale;
      var targetW = image.f5a() * scale;
      var srcRect = Companion_instance_1.p5o(image.f5a(), image.g5a());
      var dstRect = Companion_instance_1.p5o(targetW, targetH);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.resources.toImageBitmap.<anonymous>' call
      var $this$run = Companion_getInstance_10().c5p(numberToInt(targetW), numberToInt(targetH));
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.resources.toImageBitmap.<anonymous>.<anonymous>' call
      this_0.p5l(true);
      var paint = this_0;
      $this$run.h5p().k5g(image, srcRect, dstRect, Companion_getInstance_11().h5g_1, paint, true);
      targetImage = $this$run.i5p();
    } else {
      targetImage = image;
    }
    return toComposeImageBitmap(targetImage);
  }
  function get_currentOrPreview(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-193451530);
    if (isTraceInProgress()) {
      traceEventStart(-193451530, $changed, -1, 'org.jetbrains.compose.resources.<get-currentOrPreview> (ResourceReader.skiko.kt:6)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(_this__u8e3s4);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  }
  function drawSvg(_this__u8e3s4, $this, size) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.y6c().h5p();
    var tmp0_safe_receiver = $this.zez_1;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.v5v(new SVGLength(_Size___get_width__impl__58y75t(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.zez_1;
    if (tmp1_safe_receiver != null) {
      tmp1_safe_receiver.w5v(new SVGLength(_Size___get_height__impl__a04p02(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.zez_1;
    if (tmp2_safe_receiver != null) {
      tmp2_safe_receiver.x5v(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.xez_1.g5v(get_nativeCanvas(canvas));
  }
  function SvgPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg($this$drawCachedImage, this$0, $this$drawCachedImage.h5a());
      return Unit_instance;
    };
  }
  function SvgPainter(dom, density) {
    Painter.call(this);
    this.xez_1 = dom;
    this.yez_1 = density;
    this.zez_1 = this.xez_1.f5v();
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.resources.SvgPainter.defaultSizePx.<anonymous>' call
    var tmp0_safe_receiver = this.zez_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f5a();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k5v(SVGLengthUnit_PX_getInstance());
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i5v_1;
    var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = this.zez_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.g5a();
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.k5v(SVGLengthUnit_PX_getInstance());
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.i5v_1;
    var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp_0;
    if (width === 0.0 && height === 0.0) {
      tmp_0 = Companion_getInstance_12().y5a_1;
    } else {
      tmp_0 = Size(width, height);
    }
    tmp.af0_1 = tmp_0;
    var tmp_1;
    var tmp0_safe_receiver_0 = this.zez_1;
    if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.z5v()) == null) {
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_0 = this.af0_1;
      tmp_1 = !_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp1_safe_receiver_0 = this.zez_1;
      if (tmp1_safe_receiver_0 != null) {
        tmp1_safe_receiver_0.y5v(Companion_instance_1.q5o(0.0, 0.0, _Size___get_width__impl__58y75t(this.af0_1), _Size___get_height__impl__a04p02(this.af0_1)));
      }
    }
    this.bf0_1 = Companion_getInstance_12().y5a_1;
    this.cf0_1 = 1.0;
    this.df0_1 = null;
    this.ef0_1 = new DrawCache();
  }
  protoOf(SvgPainter).g6g = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.af0_1;
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(new Long(2143289344, 2143289344))) {
      tmp = Size__times_impl_fnp4nc(this.af0_1, this.yez_1.g5b());
    } else {
      tmp = Companion_getInstance_12().y5a_1;
    }
    return tmp;
  };
  protoOf(SvgPainter).h6g = function (alpha) {
    this.cf0_1 = alpha;
    return true;
  };
  protoOf(SvgPainter).i6g = function (colorFilter) {
    this.df0_1 = colorFilter;
    return true;
  };
  protoOf(SvgPainter).f6g = function (_this__u8e3s4) {
    if (!equals(this.bf0_1, _this__u8e3s4.h5a())) {
      var tmp = Companion_getInstance_7().k65_1;
      // Inline function 'kotlin.math.ceil' call
      var x = _Size___get_width__impl__58y75t(_this__u8e3s4.h5a());
      var tmp$ret$0 = Math.ceil(x);
      var tmp_0 = numberToInt(tmp$ret$0);
      // Inline function 'kotlin.math.ceil' call
      var x_0 = _Size___get_height__impl__a04p02(_this__u8e3s4.h5a());
      var tmp$ret$1 = Math.ceil(x_0);
      var tmp_1 = IntSize(tmp_0, numberToInt(tmp$ret$1));
      var tmp_2 = _this__u8e3s4.u6c();
      this.ef0_1.v7v(tmp, tmp_1, _this__u8e3s4, tmp_2, SvgPainter$onDraw$lambda(this));
    }
    this.ef0_1.w7v(_this__u8e3s4, this.cf0_1, this.df0_1);
  };
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.xey_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  function rememberResourceState(key1, key2, key3, getDefault, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(1947629696);
    if (isTraceInProgress()) {
      traceEventStart(1947629696, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceState (ResourceState.web.kt:52)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.mer($composer_0, 0);
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
    var it = $composer_2.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_2.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_2);
    var scope = tmp1_group;
    $composer_0.c2v(406079416);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.h2l(key1) | $composer_0.h2l(key2)) | $composer_0.h2l(key3));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberResourceState.<anonymous>' call
      var mutableState = mutableStateOf(getDefault());
      var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
      launch(scope, VOID, tmp_2, rememberResourceState$slambda_0(mutableState, block, environment, null));
      var value_0 = mutableState;
      $composer_0.j2x(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.e2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp1_group_0;
  }
  function rememberResourceState_0(key1, getDefault, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(1147816128);
    if (isTraceInProgress()) {
      traceEventStart(1147816128, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceState (ResourceState.web.kt:15)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.mer($composer_0, 0);
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
    var it = $composer_2.y2w();
    var tmp;
    if (false || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_2.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_2);
    var scope = tmp1_group;
    $composer_0.c2v(406045004);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.h2l(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y2w();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().n2o_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberResourceState.<anonymous>' call
      var mutableState = mutableStateOf(getDefault());
      var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
      launch(scope, VOID, tmp_2, rememberResourceState$slambda_2(mutableState, block, environment, null));
      var value_0 = mutableState;
      $composer_0.j2x(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.e2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp1_group_0;
  }
  function rememberResourceState$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation) {
    this.nf0_1 = $mutableState;
    this.of0_1 = $block;
    this.pf0_1 = $environment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberResourceState$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(rememberResourceState$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberResourceState$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.of0_1(this.pf0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.nf0_1.n1v(ARGUMENT);
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
  protoOf(rememberResourceState$slambda).f1x = function ($this$launch, completion) {
    var i = new rememberResourceState$slambda(this.nf0_1, this.of0_1, this.pf0_1, completion);
    i.qf0_1 = $this$launch;
    return i;
  };
  function rememberResourceState$slambda_0($mutableState, $block, $environment, resultContinuation) {
    var i = new rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberResourceState$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberResourceState$slambda_1($mutableState, $block, $environment, resultContinuation) {
    this.zf0_1 = $mutableState;
    this.af1_1 = $block;
    this.bf1_1 = $environment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberResourceState$slambda_1).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(rememberResourceState$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberResourceState$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.af1_1(this.bf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.zf0_1.n1v(ARGUMENT);
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
  protoOf(rememberResourceState$slambda_1).f1x = function ($this$launch, completion) {
    var i = new rememberResourceState$slambda_1(this.zf0_1, this.af1_1, this.bf1_1, completion);
    i.cf1_1 = $this$launch;
    return i;
  };
  function rememberResourceState$slambda_2($mutableState, $block, $environment, resultContinuation) {
    var i = new rememberResourceState$slambda_1($mutableState, $block, $environment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
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
