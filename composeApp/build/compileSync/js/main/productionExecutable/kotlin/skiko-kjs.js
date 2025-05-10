(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'skiko-kjs'.");
    }
    globalThis['skiko-kjs'] = factory(typeof globalThis['skiko-kjs'] === 'undefined' ? {} : globalThis['skiko-kjs'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var VOID = kotlin_kotlin.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.w2;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var Enum = kotlin_kotlin.$_$.qi;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var toShort = kotlin_kotlin.$_$.ke;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var equals = kotlin_kotlin.$_$.qc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var toBits = kotlin_kotlin.$_$.ok;
  var compareTo = kotlin_kotlin.$_$.nc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var isCharSequence = kotlin_kotlin.$_$.md;
  var trim = kotlin_kotlin.$_$.gi;
  var split = kotlin_kotlin.$_$.ih;
  var getOrNull = kotlin_kotlin.$_$.p8;
  var toIntOrNull = kotlin_kotlin.$_$.wh;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a4;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var splitToSequence = kotlin_kotlin.$_$.gh;
  var mapNotNull = kotlin_kotlin.$_$.xf;
  var toList = kotlin_kotlin.$_$.cg;
  var copyToArray = kotlin_kotlin.$_$.y7;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.b4;
  var uintCompare = kotlin_kotlin.$_$.tk;
  var UInt = kotlin_kotlin.$_$.kj;
  var isNaN_0 = kotlin_kotlin.$_$.ck;
  var numberToChar = kotlin_kotlin.$_$.be;
  var charArrayOf = kotlin_kotlin.$_$.ic;
  var concatToString = kotlin_kotlin.$_$.fg;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var decodeToString = kotlin_kotlin.$_$.jg;
  var contentEquals = kotlin_kotlin.$_$.i7;
  var contentHashCode = kotlin_kotlin.$_$.l7;
  var contentHashCode_0 = kotlin_kotlin.$_$.k7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var NotImplementedError = kotlin_kotlin.$_$.yi;
  var last = kotlin_kotlin.$_$.k9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var floatFromBits = kotlin_kotlin.$_$.tc;
  var joinToString = kotlin_kotlin.$_$.x8;
  var Error_init_$Create$ = kotlin_kotlin.$_$.u1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var until = kotlin_kotlin.$_$.if;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var toBits_0 = kotlin_kotlin.$_$.pk;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var RuntimeException = kotlin_kotlin.$_$.dj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.x2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var toIntArray = kotlin_kotlin.$_$.ua;
  var defineProp = kotlin_kotlin.$_$.oc;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var lazy = kotlin_kotlin.$_$.fk;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var plus = kotlin_kotlin.$_$.hk;
  var toString_1 = kotlin_kotlin.$_$.ci;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var contains = kotlin_kotlin.$_$.hg;
  var encodeToByteArray = kotlin_kotlin.$_$.mg;
  var copyOf = kotlin_kotlin.$_$.t7;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Native, 'Native');
  initMetadataForClass(Managed, 'Managed', VOID, Native);
  initMetadataForClass(BBHFactory, 'BBHFactory', VOID, Managed);
  initMetadataForClass(RTreeFactory, 'RTreeFactory', RTreeFactory_init_$Create$, BBHFactory);
  initMetadataForObject(_FinalizerHolder, '_FinalizerHolder');
  initMetadataForCompanion(Companion);
  initMetadataForObject(_FinalizerHolder_0, '_FinalizerHolder');
  initMetadataForClass(BackendRenderTarget, 'BackendRenderTarget', VOID, Managed);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(_FinalizerHolder_1, '_FinalizerHolder');
  function get_width() {
    return this.k5d().x5d_1;
  }
  function get_height() {
    return this.k5d().y5d_1;
  }
  function get_colorType() {
    return this.k5d().w5d_1.z5d_1;
  }
  function get_colorSpace() {
    return this.k5d().w5d_1.b5e_1;
  }
  function get_isOpaque() {
    return this.k5d().w5d_1.i5e();
  }
  initMetadataForInterface(IHasImageInfo, 'IHasImageInfo');
  initMetadataForClass(Bitmap, 'Bitmap', Bitmap_init_$Create$, Managed, [Managed, IHasImageInfo]);
  initMetadataForClass(BlendMode, 'BlendMode', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject(_FinalizerHolder_2, '_FinalizerHolder');
  initMetadataForClass(BreakIterator, 'BreakIterator', VOID, Managed);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject(_FinalizerHolder_3, '_FinalizerHolder');
  initMetadataForClass(Canvas, 'Canvas', VOID, Managed);
  initMetadataForClass(ClipMode, 'ClipMode', VOID, Enum);
  initMetadataForClass(ColorAlphaType, 'ColorAlphaType', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(RefCnt, 'RefCnt', VOID, Managed);
  initMetadataForClass(ColorFilter, 'ColorFilter', VOID, RefCnt);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ColorInfo, 'ColorInfo');
  initMetadataForCompanion(Companion_5);
  initMetadataForObject(_FinalizerHolder_4, '_FinalizerHolder');
  initMetadataForClass(ColorSpace, 'ColorSpace', VOID, Managed);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ColorType, 'ColorType', VOID, Enum);
  initMetadataForClass(CubicResampler, 'CubicResampler');
  initMetadataForCompanion(Companion_7);
  initMetadataForObject(_FinalizerHolder_5, '_FinalizerHolder');
  initMetadataForClass(Data, 'Data', VOID, Managed);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(DirectContext, 'DirectContext', VOID, RefCnt);
  initMetadataForClass(FilterMipmap, 'FilterMipmap');
  initMetadataForClass(FilterMode, 'FilterMode', VOID, Enum);
  initMetadataForClass(FilterTileMode, 'FilterTileMode', VOID, Enum);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject(_FinalizerHolder_6, '_FinalizerHolder');
  initMetadataForClass(Font, 'Font', Font_init_$Create$, Managed);
  initMetadataForClass(FontEdging, 'FontEdging', VOID, Enum);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(FontFeature, 'FontFeature');
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(FontMetrics, 'FontMetrics');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(FontMgr, 'FontMgr', VOID, RefCnt);
  initMetadataForClass(FontMgrWithFallback, 'FontMgrWithFallback', VOID, FontMgr);
  initMetadataForClass(FontSlant, 'FontSlant', VOID, Enum);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(GradientStyle, 'GradientStyle');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(IRange, 'IRange');
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(Image, 'Image', VOID, RefCnt, [RefCnt, IHasImageInfo]);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(ImageInfo, 'ImageInfo');
  initMetadataForCompanion(Companion_19);
  initMetadataForObject(_FinalizerHolder_7, '_FinalizerHolder');
  initMetadataForClass(ManagedString, 'ManagedString', VOID, Managed);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(Matrix33, 'Matrix33');
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(Matrix44, 'Matrix44');
  initMetadataForClass(MipmapMode, 'MipmapMode', VOID, Enum);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject(_FinalizerHolder_8, '_FinalizerHolder');
  initMetadataForClass(Paint, 'Paint', Paint_init_$Create$, Managed);
  initMetadataForClass(PaintMode, 'PaintMode', VOID, Enum);
  initMetadataForClass(PaintStrokeCap, 'PaintStrokeCap', VOID, Enum);
  initMetadataForClass(PaintStrokeJoin, 'PaintStrokeJoin', VOID, Enum);
  initMetadataForCompanion(Companion_23);
  initMetadataForObject(_FinalizerHolder_9, '_FinalizerHolder');
  initMetadataForClass(Path, 'Path', Path_init_$Create$, Managed);
  initMetadataForClass(PathDirection, 'PathDirection', VOID, Enum);
  initMetadataForClass(PathFillMode, 'PathFillMode', VOID, Enum);
  initMetadataForCompanion(Companion_24);
  initMetadataForObject(_FinalizerHolder_10, '_FinalizerHolder');
  initMetadataForClass(PathMeasure, 'PathMeasure', PathMeasure_init_$Create$, Managed);
  initMetadataForClass(PathOp, 'PathOp', VOID, Enum);
  initMetadataForClass(PathSegment, 'PathSegment', PathSegment);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(PathSegmentIterator, 'PathSegmentIterator', VOID, Managed);
  initMetadataForClass(PathVerb, 'PathVerb', VOID, Enum);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(Picture, 'Picture', VOID, RefCnt);
  initMetadataForCompanion(Companion_27);
  initMetadataForObject(_FinalizerHolder_11, '_FinalizerHolder');
  initMetadataForClass(PictureRecorder, 'PictureRecorder', PictureRecorder_init_$Create$, Managed);
  initMetadataForClass(PixelGeometry, 'PixelGeometry', VOID, Enum);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(Point, 'Point');
  initMetadataForClass(Point3, 'Point3');
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForClass(RRect, 'RRect', VOID, Rect);
  initMetadataForCompanion(Companion_30);
  initMetadataForCompanion(Companion_31);
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(Shader, 'Shader', VOID, RefCnt);
  initMetadataForObject(ShadowUtils, 'ShadowUtils');
  initMetadataForClass(ArrayDecoder, 'ArrayDecoder');
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(Surface, 'Surface', VOID, RefCnt);
  initMetadataForClass(SurfaceColorFormat, 'SurfaceColorFormat', VOID, Enum);
  initMetadataForClass(SurfaceOrigin, 'SurfaceOrigin', VOID, Enum);
  initMetadataForClass(SurfaceProps, 'SurfaceProps', SurfaceProps);
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(Typeface, 'Typeface', VOID, RefCnt);
  initMetadataForCompanion(Companion_35);
  initMetadataForObject(_FinalizerHolder_12, '_FinalizerHolder');
  initMetadataForClass(U16String, 'U16String', VOID, Managed);
  initMetadataForObject(CharDirection, 'CharDirection');
  initMetadataForClass(Alignment, 'Alignment', VOID, Enum);
  initMetadataForClass(BaselineMode, 'BaselineMode', VOID, Enum);
  initMetadataForClass(DecorationLineStyle, 'DecorationLineStyle', VOID, Enum);
  initMetadataForCompanion(Companion_36);
  initMetadataForClass(DecorationStyle, 'DecorationStyle');
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForCompanion(Companion_37);
  initMetadataForClass(FontCollection, 'FontCollection', FontCollection_init_$Create$, RefCnt);
  initMetadataForClass(FontRastrSettings, 'FontRastrSettings');
  initMetadataForClass(HeightMode, 'HeightMode', VOID, Enum);
  initMetadataForCompanion(Companion_38);
  initMetadataForClass(LineMetrics, 'LineMetrics');
  initMetadataForCompanion(Companion_39);
  initMetadataForObject(_FinalizerHolder_13, '_FinalizerHolder');
  initMetadataForClass(Paragraph, 'Paragraph', VOID, Managed);
  initMetadataForCompanion(Companion_40);
  initMetadataForObject(_FinalizerHolder_14, '_FinalizerHolder');
  initMetadataForClass(ParagraphBuilder, 'ParagraphBuilder', VOID, Managed);
  initMetadataForCompanion(Companion_41);
  initMetadataForObject(_FinalizerHolder_15, '_FinalizerHolder');
  initMetadataForClass(ParagraphStyle, 'ParagraphStyle', ParagraphStyle, Managed);
  initMetadataForClass(PlaceholderAlignment, 'PlaceholderAlignment', VOID, Enum);
  initMetadataForClass(PlaceholderStyle, 'PlaceholderStyle');
  initMetadataForClass(RectHeightMode, 'RectHeightMode', VOID, Enum);
  initMetadataForClass(RectWidthMode, 'RectWidthMode', VOID, Enum);
  initMetadataForCompanion(Companion_42);
  initMetadataForClass(Shadow, 'Shadow');
  initMetadataForCompanion(Companion_43);
  initMetadataForClass(TextBox, 'TextBox');
  initMetadataForClass(TextIndent, 'TextIndent', TextIndent);
  initMetadataForCompanion(Companion_44);
  initMetadataForObject(_FinalizerHolder_16, '_FinalizerHolder');
  initMetadataForClass(TextStyle, 'TextStyle', TextStyle_init_$Create$, Managed);
  initMetadataForCompanion(Companion_45);
  initMetadataForClass(TypefaceFontProvider, 'TypefaceFontProvider', TypefaceFontProvider_init_$Create$, FontMgr);
  initMetadataForCompanion(Companion_46);
  initMetadataForClass(TypefaceFontProviderWithFallback, 'TypefaceFontProviderWithFallback', TypefaceFontProviderWithFallback_init_$Create$, TypefaceFontProvider);
  initMetadataForCompanion(Companion_47);
  initMetadataForClass(SVGNode, 'SVGNode', VOID, RefCnt);
  initMetadataForClass(SVGTransformableNode, 'SVGTransformableNode', VOID, SVGNode);
  initMetadataForClass(SVGContainer, 'SVGContainer', VOID, SVGTransformableNode);
  initMetadataForCompanion(Companion_48);
  initMetadataForClass(SVGDOM, 'SVGDOM', VOID, RefCnt);
  initMetadataForCompanion(Companion_49);
  initMetadataForClass(SVGLength, 'SVGLength');
  initMetadataForClass(SVGLengthUnit, 'SVGLengthUnit', VOID, Enum);
  initMetadataForCompanion(Companion_50);
  initMetadataForCompanion(Companion_51);
  initMetadataForClass(SVGPreserveAspectRatio, 'SVGPreserveAspectRatio', SVGPreserveAspectRatio_init_$Create$);
  initMetadataForCompanion(Companion_52);
  initMetadataForClass(SVGPreserveAspectRatioAlign, 'SVGPreserveAspectRatioAlign', VOID, Enum);
  initMetadataForClass(SVGPreserveAspectRatioScale, 'SVGPreserveAspectRatioScale', VOID, Enum);
  initMetadataForCompanion(Companion_53);
  initMetadataForClass(SVGSVG, 'SVGSVG', VOID, SVGContainer);
  initMetadataForCompanion(Companion_54);
  initMetadataForClass(GraphicsApi, 'GraphicsApi', VOID, Enum);
  initMetadataForClass(OS, 'OS', VOID, Enum);
  initMetadataForClass(Arch, 'Arch', VOID, Enum);
  initMetadataForClass(ClipboardManager, 'ClipboardManager', ClipboardManager);
  initMetadataForClass(URIManager, 'URIManager', URIManager);
  initMetadataForClass(RenderException, 'RenderException', RenderException, RuntimeException);
  initMetadataForClass(SystemTheme, 'SystemTheme', VOID, Enum);
  initMetadataForClass(InteropScope, 'InteropScope', InteropScope);
  initMetadataForClass(createWebGLContext$contextAttributes$1);
  initMetadataForClass(Pattern, 'Pattern');
  initMetadataForCompanion(Companion_55);
  initMetadataForClass(FinalizationThunk, 'FinalizationThunk');
  initMetadataForCompanion(Companion_56);
  initMetadataForClass(NativePointerArray, 'NativePointerArray');
  initMetadataForCompanion(Companion_57);
  initMetadataForObject(_FinalizerHolder_17, '_FinalizerHolder');
  initMetadataForObject(Stats, 'Stats');
  initMetadataForClass(CanvasRenderer, 'CanvasRenderer');
  initMetadataForClass(SkiaLayer$attachTo$1, VOID, VOID, CanvasRenderer);
  initMetadataForClass(SkiaLayer, 'SkiaLayer', SkiaLayer);
  //endregion
  function RTreeFactory_init_$Init$($this) {
    BBHFactory.call($this, org_jetbrains_skia_RTreeFactory__1nMake());
    RTreeFactory.call($this);
    Stats_instance.w5c();
    return $this;
  }
  function RTreeFactory_init_$Create$() {
    return RTreeFactory_init_$Init$(objectCreate(protoOf(RTreeFactory)));
  }
  function RTreeFactory() {
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.b5d_1 = org_jetbrains_skia_BBHFactory__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BBHFactory(ptr) {
    Managed.call(this, ptr, _FinalizerHolder_getInstance().b5d_1);
  }
  function Companion() {
    Companion_instance = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion).d5d = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_instance.w5c();
    var ptr = org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat);
    if (ptr === Companion_instance_57.e5d())
      throw new RenderException("Can't create OpenGL BackendRenderTarget");
    return new BackendRenderTarget(ptr);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.f5d_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().f5d_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_0).g5d = function (image) {
    var bitmap = Bitmap_init_$Create$();
    bitmap.o5d(image.k5d());
    var tmp;
    if (image.p5d(bitmap)) {
      tmp = bitmap;
    } else {
      bitmap.l4();
      throw RuntimeException_init_$Create$('Failed to readPixels from ' + image.toString());
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_instance.w5c();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.q5d_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().q5d_1);
    this.n5d_1 = null;
  }
  protoOf(Bitmap).k5d = function () {
    var tmp;
    try {
      if (this.n5d_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this.z5c_1;
        tmp_0.n5d_1 = tmp_1.s5d(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.n5d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).t5d = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).u5d = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_Bitmap__1nSetImmutable(this.z5c_1);
    return this;
  };
  protoOf(Bitmap).v5d = function (info, rowBytes) {
    var tmp;
    try {
      this.n5d_1 = null;
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.z5c_1, info.x5d_1, info.y5d_1, info.w5d_1.z5d_1.u2_1, info.w5d_1.a5e_1.u2_1, getPtr(info.w5d_1.b5e_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.w5d_1.b5e_1);
    }
    return tmp;
  };
  protoOf(Bitmap).o5d = function (imageInfo) {
    return this.v5d(imageInfo, imageInfo.c5e());
  };
  protoOf(Bitmap).d5e = function (width, height, opaque) {
    return this.o5d(Companion_getInstance_18().e5e(width, height, opaque ? ColorAlphaType_OPAQUE_getInstance() : ColorAlphaType_PREMUL_getInstance()));
  };
  protoOf(Bitmap).f5e = function (width, height, opaque, $super) {
    opaque = opaque === VOID ? false : opaque;
    return $super === VOID ? this.d5e(width, height, opaque) : $super.d5e.call(this, width, height, opaque);
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_instance;
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.l5e($locale), it);
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.m5e_1 = -1;
    this.n5e_1 = 0;
    this.o5e_1 = 100;
    this.p5e_1 = 100;
    this.q5e_1 = 200;
    this.r5e_1 = 200;
    this.s5e_1 = 300;
    this.t5e_1 = 300;
    this.u5e_1 = 400;
    this.v5e_1 = 400;
    this.w5e_1 = 500;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_1).x5e = function (locale) {
    Stats_instance.w5c();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_1).y5e = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.x5e(locale) : $super.x5e.call(this, locale);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.z5e_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.z5c_1;
      var tmp_0;
      if ($text == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.skia.BreakIterator.setText.<anonymous>.<anonymous>' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = charSequenceGet($text, tmp_4);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_3[tmp_4] = toShort(tmp$ret$0);
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0 = tmp_3;
      }
      var tmp_5 = $this$withErrorGuard.a5f(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_2().z5e_1);
    this.d5f_1 = null;
  }
  protoOf(BreakIterator).l4 = function () {
    protoOf(Managed).l4.call(this);
    var tmp0_safe_receiver = this.d5f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l4();
    }
  };
  protoOf(BreakIterator).e5f = function (offset) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.z5c_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).f5f = function (offset) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.z5c_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).g5f = function (text) {
    try {
      Stats_instance.w5c();
      var tmp0_safe_receiver = this.d5f_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.l4();
      }
      var tmp = this;
      tmp.d5f_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.d5f_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.withErrorGuard.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.h5f(errorCode);
        var res = block($this$interopScope, handle);
        $this$interopScope.i5f(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + toString(errorCode));
        }
        if (res === Companion_instance_57.e5d()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return res;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.z5c_1, surfaceProps.l5f(), surfaceProps.k5f_1.u2_1), true, bitmap);
    Stats_instance.w5c();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.m5f_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().m5f_1, managed);
    this.p5f_1 = _owner;
  }
  protoOf(Canvas).q5f = function (x0, y0, x1, y1, paint) {
    Stats_instance.w5c();
    try {
      org_jetbrains_skia_Canvas__1nDrawLine(this.z5c_1, x0, y0, x1, y1, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).r5f = function (r, paint) {
    Stats_instance.w5c();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.z5c_1, r.s5f_1, r.t5f_1, r.u5f_1, r.v5f_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).w5f = function (x, y, radius, paint) {
    Stats_instance.w5c();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.z5c_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).x5f = function (r, paint) {
    Stats_instance.w5c();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.z5c_1, r.s5f_1, r.t5f_1, r.u5f_1, r.v5f_1, $this$interopScope.d5g(r.c5g_1), r.c5g_1.length, getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).e5g = function (path, paint) {
    Stats_instance.w5c();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.z5c_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).f5g = function (image, src, dst) {
    return this.k5g(image, src, dst, Companion_getInstance_31().g5g_1, null, true);
  };
  protoOf(Canvas).k5g = function (image, src, dst, samplingMode, paint, strict) {
    Stats_instance.w5c();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.z5c_1, getPtr(image), src.s5f_1, src.t5f_1, src.u5f_1, src.v5f_1, dst.s5f_1, dst.t5f_1, dst.u5f_1, dst.v5f_1, samplingMode.l5g(), samplingMode.m5g(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).n5g = function (picture, matrix, paint) {
    Stats_instance.w5c();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var tmp = this.z5c_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, $this$interopScope.d5g(matrix == null ? null : matrix.o5g_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).l2z = function (color) {
    Stats_instance.w5c();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.z5c_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).p5g = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.z5c_1);
    return this;
  };
  protoOf(Canvas).q5g = function (r, mode, antiAlias) {
    Stats_instance.w5c();
    org_jetbrains_skia_Canvas__1nClipRect(this.z5c_1, r.s5f_1, r.t5f_1, r.u5f_1, r.v5f_1, mode.u2_1, antiAlias);
    return this;
  };
  protoOf(Canvas).r5g = function (r, mode, antiAlias) {
    Stats_instance.w5c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_Canvas__1nClipRRect(this.z5c_1, r.s5f_1, r.t5f_1, r.u5f_1, r.v5f_1, $this$interopScope.d5g(r.c5g_1), r.c5g_1.length, mode.u2_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).s5g = function (p, mode, antiAlias) {
    Stats_instance.w5c();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.z5c_1, getPtr(p), mode.u2_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).j5a = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.w5c();
        org_jetbrains_skia_Canvas__1nTranslate(this.z5c_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).t5g = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.w5c();
        org_jetbrains_skia_Canvas__1nScale(this.z5c_1, sx, sy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).u5g = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.w5c();
        org_jetbrains_skia_Canvas__1nConcat44(this.z5c_1, $this$interopScope.d5g(matrix.v5g_1));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).w5g = function (bitmap, srcX, srcY) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Canvas__1nReadPixels(this.z5c_1, getPtr(bitmap), srcX, srcY);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  protoOf(Canvas).x5g = function (bitmap, x, y) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Canvas__1nWritePixels(this.z5c_1, getPtr(bitmap), x, y);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  protoOf(Canvas).y5g = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).z5g = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.z5c_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).a5h = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_Canvas__1nRestore(this.z5c_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_instance;
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_instance;
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    Companion_instance_55.c5d();
    this.b5h_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.c5h_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_3).d5h = function (color, mode) {
    Stats_instance.w5c();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.u2_1));
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_3();
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.h5h_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_4();
    this.z5d_1 = colorType;
    this.a5e_1 = alphaType;
    this.b5e_1 = colorSpace;
  }
  protoOf(ColorInfo).i5e = function () {
    return this.a5e_1.equals(ColorAlphaType_OPAQUE_getInstance()) || this.z5d_1.k5h();
  };
  protoOf(ColorInfo).l5h = function () {
    return this.z5d_1.l5h();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.z5d_1.equals(other.z5d_1))
      return false;
    if (!this.a5e_1.equals(other.a5e_1))
      return false;
    return equals(this.b5e_1, other.b5e_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.z5d_1.hashCode() | 0;
    result = imul(result, prime) + this.a5e_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.b5e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.z5d_1.toString() + ', _alphaType=' + this.a5e_1.toString() + ', _colorSpace=' + toString_0(this.b5e_1) + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    Companion_instance_55.c5d();
    this.m5h_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.n5h_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.o5h_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().p5h_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().p5h_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.p5h_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function ColorSpace() {
    Companion_getInstance_5();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_BGR_101010X_XR_instance;
  var ColorType_BGRA_10101010_XR_instance;
  var ColorType_RGBA_10x6_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_6() {
    Companion_instance_6 = this;
    this.q5h_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    ColorType_initEntries();
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_BGR_101010X_XR_getInstance(), ColorType_BGRA_10101010_XR_getInstance(), ColorType_RGBA_10x6_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_instance;
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_BGR_101010X_XR_instance = new ColorType('BGR_101010X_XR', 11);
    ColorType_BGRA_10101010_XR_instance = new ColorType('BGRA_10101010_XR', 12);
    ColorType_RGBA_10x6_instance = new ColorType('RGBA_10x6', 13);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 14);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 15);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 16);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 17);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 18);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 19);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 20);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 21);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 22);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 23);
    Companion_getInstance_6();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).l5h = function () {
    var tmp;
    switch (this.u2_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 4;
        break;
      case 12:
        tmp = 4;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 1;
        break;
      case 15:
        tmp = 8;
        break;
      case 16:
        tmp = 8;
        break;
      case 17:
        tmp = 16;
        break;
      case 18:
        tmp = 2;
        break;
      case 21:
        tmp = 2;
        break;
      case 22:
        tmp = 4;
        break;
      case 19:
        tmp = 2;
        break;
      case 20:
        tmp = 4;
        break;
      case 23:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).k5h = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.u2_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_BGR_101010X_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_XR_instance;
  }
  function ColorType_BGRA_10101010_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_10101010_XR_instance;
  }
  function ColorType_RGBA_10x6_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_10x6_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.r5h_1 = b;
    this.s5h_1 = c;
  }
  protoOf(CubicResampler).l5g = function () {
    return toBits(this.r5h_1) | -2147483648;
  };
  protoOf(CubicResampler).m5g = function () {
    return toBits(this.s5h_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.r5h_1, other.r5h_1) === 0))
      return false;
    return compareTo(this.s5h_1, other.s5h_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.r5h_1) | 0;
    result = imul(result, PRIME) + toBits(this.s5h_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.r5h_1 + ', _C=' + this.s5h_1 + ')';
  };
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_7).t5h = function (bytes, offset, length) {
    Stats_instance.w5c();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes($this$interopScope.u5h(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_7).v5h = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.t5h(bytes, offset, length) : $super.t5h.call(this, bytes, offset, length);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.w5h_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function Data(ptr) {
    Companion_getInstance_7();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().w5h_1);
    this.z5h_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.a5d(otherData);
  };
  protoOf(Data).a5d = function (other) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Data__1nEquals(this.z5c_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_8).a5i = function () {
    Stats_instance.w5c();
    loadOpenGLLibrary();
    var ptr = org_jetbrains_skia_DirectContext__1nMakeGL();
    if (ptr === Companion_instance_57.e5d())
      throw new RenderException("Can't create OpenGL DirectContext");
    return new DirectContext(ptr);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function DirectContext(ptr) {
    Companion_getInstance_8();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).d5i = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_DirectContext__1nFlushDefault(this.z5c_1);
    return this;
  };
  protoOf(DirectContext).e5i = function (surface, syncCpu) {
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_DirectContext__1nFlushAndSubmit(this.z5c_1, surface.z5c_1, syncCpu);
    }finally {
      reachabilityBarrier(this);
    }
  };
  protoOf(DirectContext).f5i = function (surface, syncCpu, $super) {
    syncCpu = syncCpu === VOID ? false : syncCpu;
    var tmp;
    if ($super === VOID) {
      this.e5i(surface, syncCpu);
      tmp = Unit_instance;
    } else {
      tmp = $super.e5i.call(this, surface, syncCpu);
    }
    return tmp;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.g5i_1 = filterMode;
    this.h5i_1 = mipmapMode;
  }
  protoOf(FilterMipmap).l5g = function () {
    return this.g5i_1.u2_1;
  };
  protoOf(FilterMipmap).m5g = function () {
    return this.h5i_1.u2_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.g5i_1.equals(other.g5i_1))
      return false;
    return this.h5i_1.equals(other.h5i_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.g5i_1.hashCode() | 0;
    result = imul(result, PRIME) + this.h5i_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.g5i_1.toString() + ', _mipmapMode=' + this.h5i_1.toString() + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_instance;
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  var FilterTileMode_CLAMP_instance;
  var FilterTileMode_REPEAT_instance;
  var FilterTileMode_MIRROR_instance;
  var FilterTileMode_DECAL_instance;
  var FilterTileMode_entriesInitialized;
  function FilterTileMode_initEntries() {
    if (FilterTileMode_entriesInitialized)
      return Unit_instance;
    FilterTileMode_entriesInitialized = true;
    FilterTileMode_CLAMP_instance = new FilterTileMode('CLAMP', 0);
    FilterTileMode_REPEAT_instance = new FilterTileMode('REPEAT', 1);
    FilterTileMode_MIRROR_instance = new FilterTileMode('MIRROR', 2);
    FilterTileMode_DECAL_instance = new FilterTileMode('DECAL', 3);
  }
  function FilterTileMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterTileMode_CLAMP_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_CLAMP_instance;
  }
  function FilterTileMode_REPEAT_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_REPEAT_instance;
  }
  function FilterTileMode_MIRROR_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_MIRROR_instance;
  }
  function FilterTileMode_DECAL_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_DECAL_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_6().i5i_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0($this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeDefault(), $this);
    Stats_instance.w5c();
    return $this;
  }
  function Font_init_$Create$() {
    return Font_init_$Init$_0(objectCreate(protoOf(Font)));
  }
  function Font_init_$Init$_1(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_instance.w5c();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$_0(typeface, size) {
    return Font_init_$Init$_1(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.i5i_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.z5c_1, it);
      return Unit_instance;
    };
  }
  protoOf(Font).a5d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.z5c_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).l5i = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_9();
  }
  var FontEdging_ALIAS_instance;
  var FontEdging_ANTI_ALIAS_instance;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  var FontEdging_entriesInitialized;
  function FontEdging_initEntries() {
    if (FontEdging_entriesInitialized)
      return Unit_instance;
    FontEdging_entriesInitialized = true;
    FontEdging_ALIAS_instance = new FontEdging('ALIAS', 0);
    FontEdging_ANTI_ALIAS_instance = new FontEdging('ANTI_ALIAS', 1);
    FontEdging_SUBPIXEL_ANTI_ALIAS_instance = new FontEdging('SUBPIXEL_ANTI_ALIAS', 2);
  }
  function FontEdging(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontEdging_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ALIAS_instance;
  }
  function FontEdging_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ANTI_ALIAS_instance;
  }
  function FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.o(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    FontFeature.call($this, Companion_instance_14.m5i(feature), value, _UInt___init__impl__l7qpdl(0), _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.n5i_1 = _UInt___init__impl__l7qpdl(0);
    this.o5i_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.p5i_1 = fillArrayVal(Array(0), null);
    this.q5i_1 = compilePattern('\\s+');
    this.r5i_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.s5i_1 = 1;
    this.t5i_1 = 2;
    this.u5i_1 = 3;
    this.v5i_1 = 4;
    this.w5i_1 = 5;
  }
  protoOf(Companion_10).x5i = function (str) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence(str, [',']);
    var this_0 = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(this_0);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_10();
    this.y5i_1 = _tag;
    this.z5i_1 = value;
    this.a5j_1 = start;
    this.b5j_1 = end;
  }
  protoOf(FontFeature).c5j = function () {
    return Companion_instance_14.d5j(this.y5i_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    // Inline function 'kotlin.UInt.compareTo' call
    var this_0 = this.a5j_1;
    var other = _UInt___init__impl__l7qpdl(0);
    if (uintCompare(_UInt___get_data__impl__f0vqqw(this_0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.UInt.compareTo' call
      var this_1 = this.b5j_1;
      var other_0 = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(this_1), _UInt___get_data__impl__f0vqqw(other_0)) < 0;
    }
    if (tmp) {
      var tmp_0;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_2 = this.a5j_1;
      var other_1 = _UInt___init__impl__l7qpdl(0);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_2), _UInt___get_data__impl__f0vqqw(other_1)) > 0) {
        tmp_0 = new UInt(this.a5j_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_3 = this.b5j_1;
      var other_2 = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_3), _UInt___get_data__impl__f0vqqw(other_2)) < 0) {
        tmp_2 = new UInt(this.b5j_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.z5i_1 === 0)
      valuePrefix = '-';
    else if (this.z5i_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.z5i_1;
    return 'FontFeature(' + valuePrefix + this.y5i_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.c5j() === other.c5j()))
      return false;
    if (!(this.z5i_1 === other.z5i_1))
      return false;
    if (!(this.a5j_1 === other.a5j_1))
      return false;
    return this.b5j_1 === other.b5j_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.y5i_1 | 0;
    result = imul(result, PRIME) + this.z5i_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = this.a5j_1;
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    var other = this.a5j_1;
    var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) ^ _UInt___get_data__impl__f0vqqw(other));
    result = tmp + _UInt___get_data__impl__f0vqqw(this_2) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_3 = this.b5j_1;
    var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) >>> 16 | 0);
    var other_0 = this.b5j_1;
    var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) ^ _UInt___get_data__impl__f0vqqw(other_0));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(this_5) | 0;
    return result;
  };
  var FontHinting_NONE_instance;
  var FontHinting_SLIGHT_instance;
  var FontHinting_NORMAL_instance;
  var FontHinting_FULL_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_NONE_instance = new FontHinting('NONE', 0);
    FontHinting_SLIGHT_instance = new FontHinting('SLIGHT', 1);
    FontHinting_NORMAL_instance = new FontHinting('NORMAL', 2);
    FontHinting_FULL_instance = new FontHinting('FULL', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontHinting_NONE_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NONE_instance;
  }
  function FontHinting_SLIGHT_getInstance() {
    FontHinting_initEntries();
    return FontHinting_SLIGHT_instance;
  }
  function FontHinting_NORMAL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NORMAL_instance;
  }
  function FontHinting_FULL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_FULL_instance;
  }
  function Companion_11() {
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    this.e5j_1 = top;
    this.f5j_1 = ascent;
    this.g5j_1 = descent;
    this.h5j_1 = bottom;
    this.i5j_1 = leading;
    this.j5j_1 = avgCharWidth;
    this.k5j_1 = maxCharWidth;
    this.l5j_1 = xMin;
    this.m5j_1 = xMax;
    this.n5j_1 = xHeight;
    this.o5j_1 = capHeight;
    this.p5j_1 = underlineThickness;
    this.q5j_1 = underlinePosition;
    this.r5j_1 = strikeoutThickness;
    this.s5j_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.e5j_1, other.e5j_1) === 0))
      return false;
    if (!(compareTo(this.f5j_1, other.f5j_1) === 0))
      return false;
    if (!(compareTo(this.g5j_1, other.g5j_1) === 0))
      return false;
    if (!(compareTo(this.h5j_1, other.h5j_1) === 0))
      return false;
    if (!(compareTo(this.i5j_1, other.i5j_1) === 0))
      return false;
    if (!(compareTo(this.j5j_1, other.j5j_1) === 0))
      return false;
    if (!(compareTo(this.k5j_1, other.k5j_1) === 0))
      return false;
    if (!(compareTo(this.l5j_1, other.l5j_1) === 0))
      return false;
    if (!(compareTo(this.m5j_1, other.m5j_1) === 0))
      return false;
    if (!(compareTo(this.n5j_1, other.n5j_1) === 0))
      return false;
    if (!(compareTo(this.o5j_1, other.o5j_1) === 0))
      return false;
    if (this.p5j_1 == null ? !(other.p5j_1 == null) : !(this.p5j_1 == other.p5j_1))
      return false;
    if (this.q5j_1 == null ? !(other.q5j_1 == null) : !(this.q5j_1 == other.q5j_1))
      return false;
    if (this.r5j_1 == null ? !(other.r5j_1 == null) : !(this.r5j_1 == other.r5j_1))
      return false;
    return !(this.s5j_1 == null ? !(other.s5j_1 == null) : !(this.s5j_1 == other.s5j_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.e5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.f5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.g5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.h5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.i5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.j5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.k5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.l5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.m5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.n5j_1) | 0;
    result = imul(result, PRIME) + toBits(this.o5j_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.p5j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.q5j_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.r5j_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.s5j_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.e5j_1 + ', _ascent=' + this.f5j_1 + ', _descent=' + this.g5j_1 + ', _bottom=' + this.h5j_1 + ', _leading=' + this.i5j_1 + ', _avgCharWidth=' + this.j5j_1 + ', _maxCharWidth=' + this.k5j_1 + ', _xMin=' + this.l5j_1 + ', _xMax=' + this.m5j_1 + ', _xHeight=' + this.n5j_1 + ', _capHeight=' + this.o5j_1 + ', _underlineThickness=' + this.p5j_1 + ', _underlinePosition=' + this.q5j_1 + ', _strikeoutThickness=' + this.r5j_1 + ', _strikeoutPosition=' + this.s5j_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.t5j(result);
        block($this$interopScope, handle);
        $this$interopScope.u5j(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return fromRawData(_this__u8e3s4, result);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_0 = rawData[11];
    var tmp_10 = isNaN_0(this_0) ? null : this_0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_1 = rawData[12];
    var tmp_11 = isNaN_0(this_1) ? null : this_1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_2 = rawData[13];
    var tmp_12 = isNaN_0(this_2) ? null : this_2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_3 = rawData[14];
    var tmp$ret$3 = isNaN_0(this_3) ? null : this_3;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    Companion_instance_55.c5d();
    this.v5j_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  protoOf(FontMgr).y5j = function (data, ttcIndex) {
    var tmp;
    try {
      Stats_instance.w5c();
      var ptr = org_jetbrains_skia_FontMgr__1nMakeFromData(this.z5c_1, getPtr(data), ttcIndex);
      tmp = ptr === Companion_instance_57.e5d() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(FontMgr).z5j = function (data, ttcIndex, $super) {
    ttcIndex = ttcIndex === VOID ? 0 : ttcIndex;
    return $super === VOID ? this.y5j(data, ttcIndex) : $super.y5j.call(this, data, ttcIndex);
  };
  protoOf(FontMgr).a5k = function (name, style) {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.FontMgr.legacyMakeTypeface.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          tmp$ret$1 = org_jetbrains_skia_FontMgr__1nLegacyMakeTypeface(this.z5c_1, $this$interopScope.l5e(name), style.b5k_1);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_57.e5d() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontMgr() {
    Companion_getInstance_12();
  }
  function FontMgrWithFallback(fallbackProvider) {
    FontMgr_init_$Init$(org_jetbrains_skia_FontMgrWithFallback__1nDefaultWithFallbackFontProvider(fallbackProvider.z5c_1), this);
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_instance;
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.b5k_1 = weight & 65535 | (width & 255) << 16 | slant.u2_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.b5k_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.c5k_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    this.d5k_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    this.e5k_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    this.f5k_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  protoOf(FontStyle).g5k = function () {
    return this.b5k_1 & 65535;
  };
  protoOf(FontStyle).h5k = function (weight) {
    return FontStyle_init_$Create$(weight, this.f5a(), this.i5k());
  };
  protoOf(FontStyle).f5a = function () {
    return this.b5k_1 >> 16 & 255;
  };
  protoOf(FontStyle).i5k = function () {
    return values_2()[this.b5k_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.g5k() + ', width=' + this.f5a() + ', slant=' + this.i5k().toString() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.b5k_1 === other.b5k_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.b5k_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_13();
  }
  function Companion_14() {
  }
  protoOf(Companion_14).m5i = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(name.length === 4)) {
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(name, 0);
    var tmp = (Char__toInt_impl_vasixd(this_0) & 255) << 24;
    // Inline function 'kotlin.code' call
    var this_1 = charSequenceGet(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(this_1) & 255) << 16;
    // Inline function 'kotlin.code' call
    var this_2 = charSequenceGet(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(this_2) & 255) << 8;
    // Inline function 'kotlin.code' call
    var this_3 = charSequenceGet(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(this_3) & 255;
  };
  protoOf(Companion_14).d5j = function (tag) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.j5k_1 = 1;
    this.k5k_1 = new GradientStyle(FilterTileMode_CLAMP_getInstance(), true, null);
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function GradientStyle(tileMode, isPremul, localMatrix) {
    Companion_getInstance_15();
    this.l5k_1 = tileMode;
    this.m5k_1 = isPremul;
    this.n5k_1 = localMatrix;
  }
  protoOf(GradientStyle).o5k = function () {
    return 0 | (this.m5k_1 ? Companion_getInstance_15().j5k_1 : 0);
  };
  protoOf(GradientStyle).p5k = function () {
    var tmp0_safe_receiver = this.n5k_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o5g_1;
  };
  protoOf(GradientStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof GradientStyle))
      return false;
    if (!(this.m5k_1 === other.m5k_1))
      return false;
    if (!this.l5k_1.equals(other.l5k_1))
      return false;
    return !(this.n5k_1 == null ? !(other.n5k_1 == null) : !equals(this.n5k_1, other.n5k_1));
  };
  protoOf(GradientStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.m5k_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.l5k_1.hashCode() | 0;
    var tmp = imul(result, PRIME);
    var tmp0_safe_receiver = this.n5k_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 43 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(GradientStyle).toString = function () {
    return 'GradientStyle(_tileMode=' + this.l5k_1.toString() + ', _premul=' + this.m5k_1 + ', _localMatrix=' + toString_0(this.n5k_1) + ')';
  };
  function IHasImageInfo() {
  }
  function Companion_16() {
  }
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function IRange(start, end) {
    this.q5k_1 = start;
    this.r5k_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.q5k_1 === other.q5k_1))
      return false;
    return this.r5k_1 === other.r5k_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.q5k_1 | 0;
    result = imul(result, PRIME) + this.r5k_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.q5k_1 + ', _end=' + this.r5k_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.s5k(result);
        block($this$interopScope, handle);
        $this$interopScope.i5f(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    var result_0 = result;
    return new IRange(result_0[0], result_0[1]);
  }
  function Companion_17() {
    Companion_instance_17 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_17).t5k = function (bitmap) {
    var tmp;
    try {
      Stats_instance.w5c();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_instance_57.e5d())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap.toString());
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  protoOf(Companion_17).u5k = function (bytes) {
    Stats_instance.w5c();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromEncoded.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = org_jetbrains_skia_Image__1nMakeFromEncoded($this$interopScope.u5h(bytes), bytes.length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    var ptr = tmp$ret$1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(ptr === Companion_instance_57.e5d())) {
      // Inline function 'org.jetbrains.skia.Companion.makeFromEncoded.<anonymous>' call
      var message = 'Failed to Image::makeFromEncoded';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new Image(ptr);
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.j5d_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this$0.z5c_1;
        tmp_0.j5d_1 = tmp_1.s5d(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image(ptr) {
    Companion_getInstance_17();
    RefCnt_init_$Init$(ptr, this);
    this.j5d_1 = null;
  }
  protoOf(Image).k5d = function () {
    var tmp;
    try {
      if (this.j5d_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.j5d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Image).p5d = function (dst) {
    return this.v5k(null, dst, 0, 0, false);
  };
  protoOf(Image).v5k = function (context, dst, srcX, srcY, cache) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Image__1nReadPixelsBitmap(this.z5c_1, getPtr(context), getPtr(dst), srcX, srcY, cache);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(context);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_instance_57.e5d() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.r5d_1 = new ImageInfo(Companion_getInstance_4().h5h_1, 0, 0);
  }
  protoOf(Companion_18).e5e = function (width, height, alphaType) {
    return new ImageInfo(new ColorInfo(Companion_getInstance_6().q5h_1, alphaType, null), width, height);
  };
  protoOf(Companion_18).s5d = function (_ptr, _nGetImageInfo) {
    Stats_instance.w5c();
    var colorSpacePtr = null;
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.s5k(result);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var result_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var handle_0 = $this$interopScope_0.w5k(result_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            $this$interopScope_0.x5k(handle_0, result_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
            }
          }
        }
        colorSpacePtr = result_0.o(0);
        $this$interopScope.i5f(handle, result);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    return ImageInfo_init_$Create$(result[0], result[1], result[2], result[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_18();
    this.w5d_1 = colorInfo;
    this.x5d_1 = width;
    this.y5d_1 = height;
  }
  protoOf(ImageInfo).c5e = function () {
    return imul(this.x5d_1, this.l5h());
  };
  protoOf(ImageInfo).z5k = function () {
    return this.w5d_1.a5e_1;
  };
  protoOf(ImageInfo).l5h = function () {
    return this.w5d_1.l5h();
  };
  protoOf(ImageInfo).a5l = function (rowBytes) {
    return 0 === this.y5d_1 ? 0 : imul(this.y5d_1 - 1 | 0, rowBytes) + imul(this.x5d_1, this.l5h()) | 0;
  };
  protoOf(ImageInfo).b5l = function () {
    return this.a5l(this.c5e());
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.x5d_1 === other.x5d_1))
      return false;
    if (!(this.y5d_1 === other.y5d_1))
      return false;
    return this.w5d_1.equals(other.w5d_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.x5d_1 | 0;
    result = imul(result, PRIME) + this.y5d_1 | 0;
    result = imul(result, PRIME) + this.w5d_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.w5d_1.toString() + ', _width=' + this.x5d_1 + ', _height=' + this.y5d_1 + ')';
  };
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake($this$interopScope.l5e(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_instance.w5c();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.c5l_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_19();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().c5l_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.z5c_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var handle = $this$interopScope.d5l(result);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.z5c_1, handle, size);
          $this$interopScope.e5l(handle, result);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      tmp = decodeToString(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).h5l = function (s) {
    Stats_instance.w5c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_ManagedString__1nAppend(this.z5c_1, $this$interopScope.l5e(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return this;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    this.i5l_1 = this.j5l(0.0, 0.0);
  }
  protoOf(Companion_20).j5l = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Matrix33(mat) {
    Companion_getInstance_20();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 9)) {
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o5g_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.o5g_1, other.o5g_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.o5g_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + toString(this.o5g_1) + ')';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    this.k5l_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Matrix44(mat) {
    Companion_getInstance_21();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 16)) {
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v5g_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.v5g_1, other.v5g_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.v5g_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + toString(this.v5g_1) + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_instance;
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.l5l_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_8().l5l_1);
    Paint.call($this);
    Stats_instance.w5c();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).a5d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.z5c_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).o5l = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_Paint__1nReset(this.z5c_1);
    return this;
  };
  protoOf(Paint).p5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetAntiAlias(this.z5c_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).q5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetMode(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).r5l = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = values_3()[org_jetbrains_skia_Paint__1nGetMode(this.z5c_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).s5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetColor(this.z5c_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).t5l = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).u5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.z5c_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).v5l = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).w5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.z5c_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).x5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).y5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).z5l = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetShader(this.z5c_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).a5m = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var shaderPtr = org_jetbrains_skia_Paint__1nGetShader(this.z5c_1);
      tmp = shaderPtr === Companion_instance_57.e5d() ? null : new Shader(shaderPtr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).b5m = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.z5c_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).c5m = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).d5m = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.z5c_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).e5m = function () {
    return this.d5m().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).f5m = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.z5c_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).g5m = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.z5c_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_22();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  function values_3() {
    return [PaintMode_FILL_getInstance(), PaintMode_STROKE_getInstance(), PaintMode_STROKE_AND_FILL_getInstance()];
  }
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_instance;
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  function PaintMode_STROKE_AND_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_AND_FILL_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_instance;
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_instance;
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_23() {
    Companion_instance_23 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_23).h5m = function (one, two, op) {
    var tmp;
    try {
      Stats_instance.w5c();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.u2_1);
      tmp = ptr === Companion_instance_57.e5d() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.i5m_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_instance.w5c();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.z5c_1, it);
      return Unit_instance;
    };
  }
  function Path(ptr) {
    Companion_getInstance_23();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().i5m_1);
  }
  protoOf(Path).a5d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.z5c_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).l5m = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Path__1nSetFillMode(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).m5m = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = values_4()[org_jetbrains_skia_Path__1nGetFillMode(this.z5c_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).o5l = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nReset(this.z5c_1);
    return this;
  };
  protoOf(Path).n5m = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nRewind(this.z5c_1);
    return this;
  };
  protoOf(Path).k2q = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).o5m = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp_0 = Companion_instance_30;
      tmp = tmp_0.p5m(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).q5m = function (x, y) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nMoveTo(this.z5c_1, x, y);
    return this;
  };
  protoOf(Path).r5m = function (dx, dy) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nRMoveTo(this.z5c_1, dx, dy);
    return this;
  };
  protoOf(Path).s5m = function (x, y) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nLineTo(this.z5c_1, x, y);
    return this;
  };
  protoOf(Path).t5m = function (dx, dy) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nRLineTo(this.z5c_1, dx, dy);
    return this;
  };
  protoOf(Path).u5m = function (x1, y1, x2, y2) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nQuadTo(this.z5c_1, x1, y1, x2, y2);
    return this;
  };
  protoOf(Path).v5m = function (dx1, dy1, dx2, dy2) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nRQuadTo(this.z5c_1, dx1, dy1, dx2, dy2);
    return this;
  };
  protoOf(Path).w5m = function (x1, y1, x2, y2, x3, y3) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nCubicTo(this.z5c_1, x1, y1, x2, y2, x3, y3);
    return this;
  };
  protoOf(Path).x5m = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nRCubicTo(this.z5c_1, dx1, dy1, dx2, dy2, dx3, dy3);
    return this;
  };
  protoOf(Path).y5m = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nClosePath(this.z5c_1);
    return this;
  };
  protoOf(Path).z5m = function (rect, dir, start) {
    Stats_instance.w5c();
    org_jetbrains_skia_Path__1nAddRect(this.z5c_1, rect.s5f_1, rect.t5f_1, rect.u5f_1, rect.v5f_1, dir.u2_1, start);
    return this;
  };
  protoOf(Path).a5n = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.z5m(rect, dir, start) : $super.z5m.call(this, rect, dir, start);
  };
  protoOf(Path).b5n = function (rrect, dir, start) {
    Stats_instance.w5c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_Path__1nAddRRect(this.z5c_1, rrect.s5f_1, rrect.t5f_1, rrect.u5f_1, rrect.v5f_1, $this$interopScope.d5g(rrect.c5g_1), rrect.c5g_1.length, dir.u2_1, start);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return this;
  };
  protoOf(Path).c5n = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.b5n(rrect, dir, start) : $super.b5n.call(this, rrect, dir, start);
  };
  protoOf(Path).d5n = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_Path__1nAddPathOffset(this.z5c_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).e5n = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.d5n(src, dx, dy, extend) : $super.d5n.call(this, src, dx, dy, extend);
  };
  protoOf(Path).f5n = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_instance.w5c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_Path__1nTransform(this.z5c_1, $this$interopScope.d5g(matrix.o5g_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).g5n = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.f5n(matrix, dst, applyPerspectiveClip) : $super.f5n.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).g = function () {
    return this.h5n(false);
  };
  protoOf(Path).h5n = function (forceClose) {
    return Companion_getInstance_25().i5n(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_instance;
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_4() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_instance;
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(objectCreate(protoOf(PathMeasure)));
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.j5n_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_24();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().j5n_1);
  }
  protoOf(PathMeasure).m5n = function (path, forceClosed) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.z5c_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
    }
    return tmp;
  };
  protoOf(PathMeasure).a = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathMeasure).n5n = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.z5c_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_instance;
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_5()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().u2_1 || verbOrdinal === PathVerb_CLOSE_getInstance().u2_1)) {
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      var message = 'Expected MOVE or CLOSE, got ' + values_5()[verbOrdinal].toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.o5n_1 = verb;
    this.p5n_1 = p0;
    this.q5n_1 = p1;
    this.r5n_1 = p2;
    this.s5n_1 = p3;
    this.t5n_1 = conicWeight;
    this.u5n_1 = isCloseLine;
    this.v5n_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.o5n_1.toString() + (!this.o5n_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + toString_0(this.p5n_1) : '') + (this.o5n_1.equals(PathVerb_LINE_getInstance()) || this.o5n_1.equals(PathVerb_QUAD_getInstance()) || this.o5n_1.equals(PathVerb_CONIC_getInstance()) || this.o5n_1.equals(PathVerb_CUBIC_getInstance()) ? ', p1=' + toString_0(this.q5n_1) : '') + (this.o5n_1.equals(PathVerb_QUAD_getInstance()) || this.o5n_1.equals(PathVerb_CONIC_getInstance()) || this.o5n_1.equals(PathVerb_CUBIC_getInstance()) ? ', p2=' + toString_0(this.r5n_1) : '') + (this.o5n_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + toString_0(this.s5n_1) : '') + (this.o5n_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.t5n_1 : '') + (this.o5n_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.u5n_1 : '') + (!this.o5n_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.v5n_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return this.o5n_1.equals(other.o5n_1) && (!this.o5n_1.equals(PathVerb_DONE_getInstance()) ? equals(this.p5n_1, other.p5n_1) : true) && (this.o5n_1.equals(PathVerb_LINE_getInstance()) || this.o5n_1.equals(PathVerb_QUAD_getInstance()) || this.o5n_1.equals(PathVerb_CONIC_getInstance()) || this.o5n_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.q5n_1, other.q5n_1) : true) && (this.o5n_1.equals(PathVerb_QUAD_getInstance()) || this.o5n_1.equals(PathVerb_CONIC_getInstance()) || this.o5n_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.r5n_1, other.r5n_1) : true) && (this.o5n_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.s5n_1, other.s5n_1) : true) && (this.o5n_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.t5n_1, this.t5n_1) === 0 : true) && (this.o5n_1.equals(PathVerb_LINE_getInstance()) ? this.u5n_1 === other.u5n_1 : true) && (!this.o5n_1.equals(PathVerb_DONE_getInstance()) ? this.v5n_1 === other.v5n_1 : true);
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.o5n_1.u2_1) {
      case 6:
        tmp = objectHashes([this.o5n_1]);
        break;
      case 0:
        tmp = objectHashes([this.o5n_1, this.p5n_1, this.v5n_1]);
        break;
      case 1:
        tmp = objectHashes([this.o5n_1, this.p5n_1, this.q5n_1, this.u5n_1, this.v5n_1]);
        break;
      case 2:
        tmp = objectHashes([this.o5n_1, this.p5n_1, this.q5n_1, this.r5n_1, this.v5n_1]);
        break;
      case 3:
        tmp = objectHashes([this.o5n_1, this.p5n_1, this.q5n_1, this.r5n_1, this.t5n_1, this.v5n_1]);
        break;
      case 4:
        tmp = objectHashes([this.o5n_1, this.p5n_1, this.q5n_1, this.r5n_1, this.s5n_1, this.v5n_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_25).i5n = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.z5n_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.s5k(result);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.z5c_1, handle);
        $this$interopScope.i5f(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return pathSegmentFromIntArray(result);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_25();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.y5n_1 = _path;
    this.z5n_1 = null;
    Stats_instance.w5c();
  }
  protoOf(PathSegmentIterator).i = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.z5n_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o5n_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.z5n_1;
      this.z5n_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).h = function () {
    var tmp0_safe_receiver = this.z5n_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o5n_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).o4 = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_5()[verb].u2_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        var bits = points[0];
        var tmp_0 = floatFromBits(bits);
        // Inline function 'kotlin.fromBits' call

        var bits_0 = points[1];
        var tmp$ret$1 = floatFromBits(bits_0);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        var bits_1 = points[0];
        var tmp_1 = floatFromBits(bits_1);
        // Inline function 'kotlin.fromBits' call

        var bits_2 = points[1];
        var tmp_2 = floatFromBits(bits_2);
        // Inline function 'kotlin.fromBits' call

        var bits_3 = points[2];
        var tmp_3 = floatFromBits(bits_3);
        // Inline function 'kotlin.fromBits' call

        var bits_4 = points[3];
        var tmp$ret$5 = floatFromBits(bits_4);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        var bits_5 = points[0];
        var tmp_4 = floatFromBits(bits_5);
        // Inline function 'kotlin.fromBits' call

        var bits_6 = points[1];
        var tmp_5 = floatFromBits(bits_6);
        // Inline function 'kotlin.fromBits' call

        var bits_7 = points[2];
        var tmp_6 = floatFromBits(bits_7);
        // Inline function 'kotlin.fromBits' call

        var bits_8 = points[3];
        var tmp_7 = floatFromBits(bits_8);
        // Inline function 'kotlin.fromBits' call

        var bits_9 = points[4];
        var tmp_8 = floatFromBits(bits_9);
        // Inline function 'kotlin.fromBits' call

        var bits_10 = points[5];
        var tmp$ret$11 = floatFromBits(bits_10);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        var bits_11 = points[0];
        var tmp_9 = floatFromBits(bits_11);
        // Inline function 'kotlin.fromBits' call

        var bits_12 = points[1];
        var tmp_10 = floatFromBits(bits_12);
        // Inline function 'kotlin.fromBits' call

        var bits_13 = points[2];
        var tmp_11 = floatFromBits(bits_13);
        // Inline function 'kotlin.fromBits' call

        var bits_14 = points[3];
        var tmp_12 = floatFromBits(bits_14);
        // Inline function 'kotlin.fromBits' call

        var bits_15 = points[4];
        var tmp_13 = floatFromBits(bits_15);
        // Inline function 'kotlin.fromBits' call

        var bits_16 = points[5];
        var tmp_14 = floatFromBits(bits_16);
        // Inline function 'kotlin.fromBits' call

        var bits_17 = points[8];
        var tmp$ret$18 = floatFromBits(bits_17);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        var bits_18 = points[0];
        var tmp_15 = floatFromBits(bits_18);
        // Inline function 'kotlin.fromBits' call

        var bits_19 = points[1];
        var tmp_16 = floatFromBits(bits_19);
        // Inline function 'kotlin.fromBits' call

        var bits_20 = points[2];
        var tmp_17 = floatFromBits(bits_20);
        // Inline function 'kotlin.fromBits' call

        var bits_21 = points[3];
        var tmp_18 = floatFromBits(bits_21);
        // Inline function 'kotlin.fromBits' call

        var bits_22 = points[4];
        var tmp_19 = floatFromBits(bits_22);
        // Inline function 'kotlin.fromBits' call

        var bits_23 = points[5];
        var tmp_20 = floatFromBits(bits_23);
        // Inline function 'kotlin.fromBits' call

        var bits_24 = points[6];
        var tmp_21 = floatFromBits(bits_24);
        // Inline function 'kotlin.fromBits' call

        var bits_25 = points[7];
        var tmp$ret$26 = floatFromBits(bits_25);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_5() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_instance;
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Picture(ptr) {
    Companion_getInstance_26();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_instance.w5c();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.a5o_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_27();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_11().a5o_1);
  }
  protoOf(PictureRecorder).d5o = function (bounds, bbh) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.z5c_1, bounds.s5f_1, bounds.t5f_1, bounds.u5f_1, bounds.v5f_1, getPtr(bbh)), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).e5o = function (bounds, bbh, $super) {
    bbh = bbh === VOID ? null : bbh;
    return $super === VOID ? this.d5o(bounds, bbh) : $super.d5o.call(this, bounds, bbh);
  };
  protoOf(PictureRecorder).f5o = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.z5c_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_instance;
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.g5o_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Point(x, y) {
    Companion_getInstance_28();
    this.h5o_1 = x;
    this.i5o_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.h5o_1, other.h5o_1) === 0))
      return false;
    return compareTo(this.i5o_1, other.i5o_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.h5o_1) | 0;
    result = imul(result, PRIME) + toBits(this.i5o_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.h5o_1 + ', _y=' + this.i5o_1 + ')';
  };
  function Point3(x, y, z) {
    this.j5o_1 = x;
    this.k5o_1 = y;
    this.l5o_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.j5o_1, other.j5o_1) === 0))
      return false;
    if (!(compareTo(this.k5o_1, other.k5o_1) === 0))
      return false;
    return compareTo(this.l5o_1, other.l5o_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.j5o_1) | 0;
    result = imul(result, PRIME) + toBits(this.k5o_1) | 0;
    result = imul(result, PRIME) + toBits(this.l5o_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.j5o_1 + ', _y=' + this.k5o_1 + ', _z=' + this.l5o_1 + ')';
  };
  function Companion_29() {
  }
  protoOf(Companion_29).m5o = function (l, t, r, b, xRad, yRad) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_29).n5o = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function RRect(l, t, r, b, radii) {
    Rect.call(this, l, t, r, b);
    this.c5g_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.s5f_1 + ', _top=' + this.t5f_1 + ', _right=' + this.u5f_1 + ', _bottom=' + this.v5f_1 + ', _radii=' + joinToString(this.c5g_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.c5g_1.length === other.c5g_1.length) {
      tmp = contentEquals(this.c5g_1, other.c5g_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.c5g_1), normalizeRadii(other.c5g_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.c5g_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Rect$Companion$fromInteropPointerNullable$lambda($result, $block) {
    return function ($this$fromInteropPointer, it) {
      $result._v = $block(it);
      return Unit_instance;
    };
  }
  function Companion_30() {
  }
  protoOf(Companion_30).o5o = function (l, t, r, b) {
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_30).p5o = function (w, h) {
    return new Rect(0.0, 0.0, w, h);
  };
  protoOf(Companion_30).q5o = function (l, t, w, h) {
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_30).p5m = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.t5j(result);
        block($this$interopScope, handle);
        $this$interopScope.u5j(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    var result_0 = result;
    return new Rect(result_0[0], result_0[1], result_0[2], result_0[3]);
  };
  protoOf(Companion_30).r5o = function (block) {
    var result = {_v: true};
    var rect = this.p5m(Rect$Companion$fromInteropPointerNullable$lambda(result, block));
    var tmp;
    if (result._v) {
      tmp = rect;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  function Rect(left, top, right, bottom) {
    this.s5f_1 = left;
    this.t5f_1 = top;
    this.u5f_1 = right;
    this.v5f_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.s5f_1, other.s5f_1) === 0))
      return false;
    if (!(compareTo(this.t5f_1, other.t5f_1) === 0))
      return false;
    if (!(compareTo(this.u5f_1, other.u5f_1) === 0))
      return false;
    return compareTo(this.v5f_1, other.v5f_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.s5f_1) | 0;
    result = imul(result, PRIME) + toBits(this.t5f_1) | 0;
    result = imul(result, PRIME) + toBits(this.u5f_1) | 0;
    result = imul(result, PRIME) + toBits(this.v5f_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.s5f_1 + ', _top=' + this.t5f_1 + ', _right=' + this.u5f_1 + ', _bottom=' + this.v5f_1 + ')';
  };
  function Companion_31() {
    Companion_instance_31 = this;
    this.g5g_1 = new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
    this.h5g_1 = new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance());
    this.i5g_1 = new CubicResampler(0.33333334, 0.33333334);
    this.j5g_1 = new CubicResampler(0.0, 0.5);
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Companion_32() {
    Companion_instance_32 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_32).s5o = function (x0, y0, x1, y1, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null || colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.w5c();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeLinearGradient(x0, y0, x1, y1, $this$interopScope.h5f(colors), $this$interopScope.d5g(positions), colors.length, style.l5k_1.u2_1, style.o5k(), $this$interopScope.d5g(style.p5k()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_32).t5o = function (x, y, r, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null || colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeRadialGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.w5c();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeRadialGradient.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeRadialGradient(x, y, r, $this$interopScope.h5f(colors), $this$interopScope.d5g(positions), colors.length, style.l5k_1.u2_1, style.o5k(), $this$interopScope.d5g(style.p5k()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_32).u5o = function (x, y, colors, positions) {
    return this.v5o(x, y, 0.0, 360.0, colors, positions, Companion_getInstance_15().k5k_1);
  };
  protoOf(Companion_32).v5o = function (x, y, startAngle, endAngle, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null || colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeSweepGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.w5c();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeSweepGradient.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeSweepGradient(x, y, startAngle, endAngle, $this$interopScope.h5f(colors), $this$interopScope.d5g(positions), colors.length, style.l5k_1.u2_1, style.o5k(), $this$interopScope.d5g(style.p5k()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function Shader(ptr) {
    Companion_getInstance_32();
    RefCnt_init_$Init$(ptr, this);
  }
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_instance_55.c5d();
  }
  protoOf(ShadowUtils).w5o = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_instance.w5c();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.j5o_1, zPlaneParams.k5o_1, zPlaneParams.l5o_1, lightPos.j5o_1, lightPos.k5o_1, lightPos.l5o_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.x5o_1 = ptr;
    this.y5o_1 = disposePtr;
  }
  protoOf(ArrayDecoder).n18 = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.x5o_1, this.y5o_1);
  };
  protoOf(ArrayDecoder).z5o = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.x5o_1, index);
  };
  protoOf(ArrayDecoder).j = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.x5o_1);
  };
  function Companion_33() {
    Companion_instance_33 = this;
    Companion_instance_55.c5d();
  }
  protoOf(Companion_33).a5p = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.u2_1, colorFormat.u2_1, tmp_2, $this$interopScope.h5f(surfaceProps == null ? null : surfaceProps.b5p()));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_57.e5d() ? null : Surface_init_$Create$_0(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  protoOf(Companion_33).c5p = function (width, height) {
    Stats_instance.w5c();
    var ptr = org_jetbrains_skia_Surface__1nMakeRasterN32Premul(width, height);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(ptr === Companion_instance_57.e5d())) {
      // Inline function 'org.jetbrains.skia.Companion.makeRasterN32Premul.<anonymous>' call
      var message = 'Failed Surface.makeRasterN32Premul(' + width + ', ' + height + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return Surface_init_$Create$(ptr);
  };
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Surface_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.f5p_1 = null;
    $this.g5p_1 = null;
    return $this;
  }
  function Surface_init_$Create$(ptr) {
    return Surface_init_$Init$(ptr, objectCreate(protoOf(Surface)));
  }
  function Surface_init_$Init$_0(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.f5p_1 = context;
    $this.g5p_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$_0(ptr, context, renderTarget) {
    return Surface_init_$Init$_0(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).h5p = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.z5c_1);
      var tmp_0;
      if (ptr === Companion_instance_57.e5d()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).i5p = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = new Image(org_jetbrains_skia_Surface__1nMakeImageSnapshot(this.z5c_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).j5p = function () {
    var tmp0_safe_receiver = this.f5p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f5i(this);
    }
  };
  function Surface() {
    Companion_getInstance_33();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_instance;
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_instance;
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.k5f_1.u2_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.j5f_1 = isDeviceIndependentFonts;
    this.k5f_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).l5f = function () {
    return 0 | (this.j5f_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.j5f_1 === other.j5f_1))
      return false;
    return this.k5f_1.equals(other.k5f_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.j5f_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.k5f_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.j5f_1 + ', _pixelGeometry=' + this.k5f_1.toString() + ')';
  };
  protoOf(SurfaceProps).b5p = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.l5f(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_34() {
    Companion_instance_34 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function Typeface(ptr) {
    Companion_getInstance_34();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).m5p = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.z5c_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).n5p = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).a5d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.z5c_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).o5p = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      // Inline function 'org.jetbrains.skia.impl.use' call
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      var tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.z5c_1);
      var this_0 = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp_0 = this_0.toString();
      }finally {
        this_0.l4();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.o5p() + "', fontStyle=" + this.m5p().toString() + ', uniqueId=' + this.n5p() + ')';
  };
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_35;
  function Companion_getInstance_35() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.p5p_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function U16String(ptr) {
    Companion_getInstance_35();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().p5p_1);
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_instance_55.c5d();
    this.q5p_1 = 0;
    this.r5p_1 = 1;
    this.s5p_1 = 2;
    this.t5p_1 = 3;
    this.u5p_1 = 4;
    this.v5p_1 = 5;
    this.w5p_1 = 6;
    this.x5p_1 = 7;
    this.y5p_1 = 8;
    this.z5p_1 = 9;
    this.a5q_1 = 10;
    this.b5q_1 = 11;
    this.c5q_1 = 12;
    this.d5q_1 = 13;
    this.e5q_1 = 14;
    this.f5q_1 = 15;
    this.g5q_1 = 16;
    this.h5q_1 = 17;
    this.i5q_1 = 18;
    this.j5q_1 = 19;
    this.k5q_1 = 20;
    this.l5q_1 = 21;
    this.m5q_1 = 22;
  }
  protoOf(CharDirection).n5q = function (codePoint) {
    return org_jetbrains_skia_icu_Unicode_charDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.z5c_1;
    return tmp1_elvis_lhs == null ? Companion_instance_57.e5d() : tmp1_elvis_lhs;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_instance;
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_instance;
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_instance;
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function DecorationLineStyle_DOUBLE_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOUBLE_instance;
  }
  function DecorationLineStyle_DOTTED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOTTED_instance;
  }
  function DecorationLineStyle_DASHED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DASHED_instance;
  }
  function DecorationLineStyle_WAVY_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_WAVY_instance;
  }
  function Companion_36() {
    Companion_instance_36 = this;
    this.o5q_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_36;
  function Companion_getInstance_36() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_36();
    this.p5q_1 = _underline;
    this.q5q_1 = _overline;
    this.r5q_1 = _lineThrough;
    this.s5q_1 = _gaps;
    this.t5q_1 = color;
    this.u5q_1 = lineStyle;
    this.v5q_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).w5q = function () {
    return this.u5q_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.p5q_1 === other.p5q_1))
      return false;
    if (!(this.q5q_1 === other.q5q_1))
      return false;
    if (!(this.r5q_1 === other.r5q_1))
      return false;
    if (!(this.s5q_1 === other.s5q_1))
      return false;
    if (!(this.t5q_1 === other.t5q_1))
      return false;
    if (!(compareTo(this.v5q_1, other.v5q_1) === 0))
      return false;
    return this.w5q().equals(other.w5q());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.p5q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.q5q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.r5q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.s5q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.t5q_1 | 0;
    result = imul(result, PRIME) + toBits(this.v5q_1) | 0;
    result = imul(result, PRIME) + this.w5q().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.p5q_1 + ', _overline=' + this.q5q_1 + ', _lineThrough=' + this.r5q_1 + ', _gaps=' + this.s5q_1 + ', _color=' + this.t5q_1 + ', _lineStyle=' + this.w5q().toString() + ', _thicknessMultiplier=' + this.v5q_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_6() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_instance.w5c();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_37();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).z5q = function (fontMgr) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.z5c_1, getPtr(fontMgr), Companion_instance_57.e5d());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).a5r = function (fontMgr) {
    return this.b5r(fontMgr, null);
  };
  protoOf(FontCollection).b5r = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_instance.w5c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.z5c_1, getPtr(fontMgr), $this$interopScope.l5e(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).c5r = function (familyNames, style) {
    var tmp;
    try {
      Stats_instance.w5c();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var tmp_1 = this.z5c_1;
            var tmp_2 = $this$interopScope.d5r(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.b5k_1);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var arrayDecoder_0 = arrayDecoder;
        // Inline function 'kotlin.collections.toTypedArray' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, arrayDecoder_0.j());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var inductionVariable = this_0.c1_1;
        var last = this_0.d1_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var i = item;
            var tmp$ret$3 = new Typeface(arrayDecoder_0.z5o(i));
            destination.e(tmp$ret$3);
          }
           while (!(item === last));
        tmp_0 = copyToArray(destination);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.n18();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontRastrSettings(edging, hinting, subpixel) {
    this.e5r_1 = edging;
    this.f5r_1 = hinting;
    this.g5r_1 = subpixel;
  }
  protoOf(FontRastrSettings).toString = function () {
    return 'FontRastrSettings(edging=' + this.e5r_1.toString() + ', hinting=' + this.f5r_1.toString() + ', subpixel=' + this.g5r_1 + ')';
  };
  protoOf(FontRastrSettings).hashCode = function () {
    var result = this.e5r_1.hashCode();
    result = imul(result, 31) + this.f5r_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g5r_1) | 0;
    return result;
  };
  protoOf(FontRastrSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontRastrSettings))
      return false;
    var tmp0_other_with_cast = other instanceof FontRastrSettings ? other : THROW_CCE();
    if (!this.e5r_1.equals(tmp0_other_with_cast.e5r_1))
      return false;
    if (!this.f5r_1.equals(tmp0_other_with_cast.f5r_1))
      return false;
    if (!(this.g5r_1 === tmp0_other_with_cast.g5r_1))
      return false;
    return true;
  };
  var HeightMode_ALL_instance;
  var HeightMode_DISABLE_FIRST_ASCENT_instance;
  var HeightMode_DISABLE_LAST_DESCENT_instance;
  var HeightMode_DISABLE_ALL_instance;
  var HeightMode_entriesInitialized;
  function HeightMode_initEntries() {
    if (HeightMode_entriesInitialized)
      return Unit_instance;
    HeightMode_entriesInitialized = true;
    HeightMode_ALL_instance = new HeightMode('ALL', 0);
    HeightMode_DISABLE_FIRST_ASCENT_instance = new HeightMode('DISABLE_FIRST_ASCENT', 1);
    HeightMode_DISABLE_LAST_DESCENT_instance = new HeightMode('DISABLE_LAST_DESCENT', 2);
    HeightMode_DISABLE_ALL_instance = new HeightMode('DISABLE_ALL', 3);
  }
  function HeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HeightMode_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_ALL_instance;
  }
  function HeightMode_DISABLE_FIRST_ASCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_FIRST_ASCENT_instance;
  }
  function HeightMode_DISABLE_LAST_DESCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_LAST_DESCENT_instance;
  }
  function HeightMode_DISABLE_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_ALL_instance;
  }
  function Companion_38() {
  }
  protoOf(Companion_38).h5r = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_38).i5r = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_38).j5r = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.s5k(intArray);
        // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var handle_0 = $this$interopScope_0.k5r(doubleArray);
            // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>.<anonymous>' call
            org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, handle, handle_0);
            $this$interopScope_0.l5r(handle_0, doubleArray);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
            }
          }
        }
        $this$interopScope.i5f(handle, intArray);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_38;
  function Companion_getInstance_38() {
    return Companion_instance_38;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    this.m5r_1 = startIndex;
    this.n5r_1 = endIndex;
    this.o5r_1 = endExcludingWhitespaces;
    this.p5r_1 = endIncludingNewline;
    this.q5r_1 = isHardBreak;
    this.r5r_1 = ascent;
    this.s5r_1 = descent;
    this.t5r_1 = unscaledAscent;
    this.u5r_1 = height;
    this.v5r_1 = width;
    this.w5r_1 = left;
    this.x5r_1 = baseline;
    this.y5r_1 = lineNumber;
  }
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.m5r_1 === other.m5r_1))
      return false;
    if (!(this.n5r_1 === other.n5r_1))
      return false;
    if (!(this.o5r_1 === other.o5r_1))
      return false;
    if (!(this.p5r_1 === other.p5r_1))
      return false;
    if (!(this.q5r_1 === other.q5r_1))
      return false;
    if (!(compareTo(this.r5r_1, other.r5r_1) === 0))
      return false;
    if (!(compareTo(this.s5r_1, other.s5r_1) === 0))
      return false;
    if (!(compareTo(this.t5r_1, other.t5r_1) === 0))
      return false;
    if (!(compareTo(this.u5r_1, other.u5r_1) === 0))
      return false;
    if (!(compareTo(this.v5r_1, other.v5r_1) === 0))
      return false;
    if (!(compareTo(this.w5r_1, other.w5r_1) === 0))
      return false;
    if (!(compareTo(this.x5r_1, other.x5r_1) === 0))
      return false;
    return this.y5r_1 === other.y5r_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.m5r_1 | 0;
    result = imul(result, PRIME) + this.n5r_1 | 0;
    result = imul(result, PRIME) + this.o5r_1 | 0;
    result = imul(result, PRIME) + this.p5r_1 | 0;
    result = imul(result, PRIME) + (this.q5r_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.r5r_1).g1() | 0;
    result = imul(result, PRIME) + toBits_0(this.s5r_1).g1() | 0;
    result = imul(result, PRIME) + toBits_0(this.t5r_1).g1() | 0;
    result = imul(result, PRIME) + toBits_0(this.u5r_1).g1() | 0;
    result = imul(result, PRIME) + toBits_0(this.v5r_1).g1() | 0;
    result = imul(result, PRIME) + toBits_0(this.w5r_1).g1() | 0;
    result = imul(result, PRIME) + toBits_0(this.x5r_1).g1() | 0;
    result = imul(result, PRIME) + this.y5r_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.m5r_1 + ', _endIndex=' + this.n5r_1 + ', _endExcludingWhitespaces=' + this.o5r_1 + ', _endIncludingNewline=' + this.p5r_1 + ', _hardBreak=' + this.q5r_1 + ', _ascent=' + this.r5r_1 + ', _descent=' + this.s5r_1 + ', _unscaledAscent=' + this.t5r_1 + ', _height=' + this.u5r_1 + ', _width=' + this.v5r_1 + ', _left=' + this.w5r_1 + ', _baseline=' + this.x5r_1 + ', _lineNumber=' + this.y5r_1 + ')';
  };
  function Companion_39() {
    Companion_instance_39 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.z5r_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.z5c_1, $offset, it);
      return Unit_instance;
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_39();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_13().z5r_1);
    Stats_instance.w5c();
    this.c5s_1 = text;
  }
  protoOf(Paragraph).l4 = function () {
    if (!(this.c5s_1 == null)) {
      ensureNotNull(this.c5s_1).l4();
      this.c5s_1 = null;
    }
    protoOf(Managed).l4.call(this);
  };
  protoOf(Paragraph).g5a = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).d5s = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).e5s = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).f5s = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).g5s = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).h5s = function (width) {
    Stats_instance.w5c();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.z5c_1, width);
    return this;
  };
  protoOf(Paragraph).i5s = function (canvas, x, y) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.z5c_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).j5s = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_instance.w5c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.z5c_1, start, end, rectHeightMode.u2_1, rectWidthMode.u2_1);
          var size = Companion_instance_43.h5r(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_43.j5r(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_43.i5r(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).k5s = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.z5c_1);
          var size = Companion_instance_43.h5r(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_43.j5r(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_43.i5r(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).l5s = function (offset) {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp_0 = Companion_instance_16;
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).m5s = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.c5s_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_instance.w5c();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.z5c_1, getPtr(this.c5s_1));
            var size = Companion_instance_38.h5r(this_0);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = fillArrayVal(Array(size), null);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = Companion_instance_38.j5r(this_0, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            Companion_instance_38.i5r(this_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.c5s_1);
    }
    return tmp;
  };
  protoOf(Paragraph).n5s = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.z5c_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).o5s = function () {
    Stats_instance.w5c();
    org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty(this.z5c_1);
    return this;
  };
  protoOf(Paragraph).p5s = function (from, to, paint) {
    var tmp;
    try {
      if (!(this.c5s_1 == null)) {
        Stats_instance.w5c();
        org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint(this.z5c_1, from, to, getPtr(paint), getPtr(this.c5s_1));
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
      reachabilityBarrier(this.c5s_1);
    }
    return tmp;
  };
  function Companion_40() {
    Companion_instance_40 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_40;
  function Companion_getInstance_40() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.q5s_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_40();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_14().q5s_1);
    this.t5s_1 = null;
  }
  protoOf(ParagraphBuilder).u5s = function (style) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.z5c_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).v5s = function (text) {
    Stats_instance.w5c();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.z5c_1, $this$interopScope.l5e(text));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.t5s_1 == null)
      this.t5s_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.t5s_1).h5l(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).w5s = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(style.x5s_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(style.y5s_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(style.b5t_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.z5c_1, style.x5s_1, style.y5s_1, style.c5t().u2_1, style.d5t().u2_1, style.b5t_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(ParagraphBuilder).c2o = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.z5c_1), this.t5s_1);
      this.t5s_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_instance.w5c();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.e5t_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function ParagraphStyle() {
    Companion_getInstance_41();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_15().e5t_1);
    Stats_instance.w5c();
  }
  protoOf(ParagraphStyle).a5d = function (other) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.z5c_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).h5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.z5c_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).i5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).j5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).k5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.z5c_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).l5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.z5c_1, $this$interopScope.l5e(value));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).m5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode(this.z5c_1, value.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).n5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings(this.z5c_1, value.e5r_1.u2_1, value.f5r_1.u2_1, value.g5r_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).o5t = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.z5c_1, value.p5t_1, value.q5t_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_instance;
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.x5s_1 = width;
    this.y5s_1 = height;
    this.z5s_1 = alignment;
    this.a5t_1 = baselineMode;
    this.b5t_1 = baseline;
  }
  protoOf(PlaceholderStyle).c5t = function () {
    return this.z5s_1;
  };
  protoOf(PlaceholderStyle).d5t = function () {
    return this.a5t_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.x5s_1, other.x5s_1) === 0))
      return false;
    if (!(compareTo(this.y5s_1, other.y5s_1) === 0))
      return false;
    if (!(compareTo(this.b5t_1, other.b5t_1) === 0))
      return false;
    if (!this.c5t().equals(other.c5t()))
      return false;
    return this.d5t().equals(other.d5t());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.x5s_1) | 0;
    result = imul(result, PRIME) + toBits(this.y5s_1) | 0;
    result = imul(result, PRIME) + toBits(this.b5t_1) | 0;
    result = imul(result, PRIME) + this.c5t().hashCode() | 0;
    result = imul(result, PRIME) + this.d5t().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.x5s_1 + ', _height=' + this.y5s_1 + ', _alignment=' + this.c5t().toString() + ', _baselineMode=' + this.d5t().toString() + ', _baseline=' + this.b5t_1 + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_instance;
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_instance;
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_42() {
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    return Companion_instance_42;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    this.r5t_1 = color;
    this.s5t_1 = offsetX;
    this.t5t_1 = offsetY;
    this.u5t_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.r5t_1 === other.r5t_1))
      return false;
    if (!(compareTo(this.s5t_1, other.s5t_1) === 0))
      return false;
    if (!(compareTo(this.t5t_1, other.t5t_1) === 0))
      return false;
    return compareTo(this.u5t_1, other.u5t_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.r5t_1 | 0;
    result = imul(result, PRIME) + toBits(this.s5t_1) | 0;
    result = imul(result, PRIME) + toBits(this.t5t_1) | 0;
    var blurSigma = toBits_0(this.u5t_1);
    result = imul(result, PRIME) + blurSigma.l3(32).o3(blurSigma).g1() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.r5t_1 + ', _offsetX=' + this.s5t_1 + ', _offsetY=' + this.t5t_1 + ', _blurSigma=' + this.u5t_1 + ')';
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_instance_30.o5o(l, t, r, b), values_6()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_43() {
  }
  protoOf(Companion_43).j5r = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var rectPtr = $this$interopScope.d5g(rect);
        var directionPtr = $this$interopScope.h5f(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        $this$interopScope.u5j(rectPtr, rect);
        $this$interopScope.i5f(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_43).h5r = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_43).i5r = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_43;
  function Companion_getInstance_43() {
    return Companion_instance_43;
  }
  function TextBox(rect, direction) {
    this.v5t_1 = rect;
    this.w5t_1 = direction;
  }
  protoOf(TextBox).x5t = function () {
    return this.w5t_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.v5t_1.equals(other.v5t_1))
      return false;
    return this.x5t().equals(other.x5t());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.v5t_1.hashCode() | 0;
    result = imul(result, PRIME) + this.x5t().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.v5t_1.toString() + ', _direction=' + this.x5t().toString() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.p5t_1 = firstLine;
    this.q5t_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.p5t_1 + ', restLine=' + this.q5t_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.p5t_1);
    result = imul(result, 31) + getNumberHashCode(this.q5t_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.p5t_1, tmp0_other_with_cast.p5t_1))
      return false;
    if (!equals(this.q5t_1, tmp0_other_with_cast.q5t_1))
      return false;
    return true;
  };
  function Companion_44() {
    Companion_instance_44 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_instance.w5c();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_16() {
    _FinalizerHolder_instance_16 = this;
    this.y5t_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_16;
  function _FinalizerHolder_getInstance_16() {
    if (_FinalizerHolder_instance_16 == null)
      new _FinalizerHolder_16();
    return _FinalizerHolder_instance_16;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.z5c_1, it);
      return Unit_instance;
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_44();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_16().y5t_1);
  }
  protoOf(TextStyle).a5d = function (other) {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.z5c_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).s5l = function (value) {
    this.b5u(value);
  };
  protoOf(TextStyle).b5u = function (color) {
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.z5c_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).c5u = function (value) {
    this.d5u(value);
  };
  protoOf(TextStyle).d5u = function (paint) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.z5c_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).e5u = function (value) {
    this.f5u(value);
  };
  protoOf(TextStyle).f5u = function (paint) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.z5c_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).g5u = function (value) {
    this.h5u(value);
  };
  protoOf(TextStyle).h5u = function (d) {
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.z5c_1, d.p5q_1, d.q5q_1, d.r5q_1, d.s5q_1, d.t5q_1, d.u5q_1.u2_1, d.v5q_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).i5u = function (value) {
    this.j5u(value);
  };
  protoOf(TextStyle).m5p = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.z5c_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).j5u = function (s) {
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.z5c_1, s.b5k_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).k5u = function (s) {
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.z5c_1, s.r5t_1, s.s5t_1, s.t5t_1, s.u5t_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).l5u = function (f) {
    try {
      Stats_instance.w5c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.z5c_1, $this$interopScope.l5e(f.c5j()), f.z5i_1);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).m5u = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.l5u(s);
    }
    return this;
  };
  protoOf(TextStyle).n5u = function (value) {
    this.o5u(value);
  };
  protoOf(TextStyle).o5u = function (size) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(size)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.z5c_1, size);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).p5u = function (value) {
    this.q5u(value);
  };
  protoOf(TextStyle).q5u = function (families) {
    Stats_instance.w5c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var tmp = this.z5c_1;
        var tmp_0 = $this$interopScope.d5r(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).r5u = function (value) {
    this.s5u(value);
  };
  protoOf(TextStyle).s5u = function (height) {
    if (height == null) {
      try {
        Stats_instance.w5c();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.z5c_1, false, 0.0);
      }finally {
        reachabilityBarrier(this);
      }
    } else {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isNaN_0(height)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      try {
        Stats_instance.w5c();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.z5c_1, true, height);
      }finally {
        reachabilityBarrier(this);
      }
    }
    return this;
  };
  protoOf(TextStyle).t5u = function (value) {
    this.u5u(value);
  };
  protoOf(TextStyle).u5u = function (letterSpacing) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(letterSpacing)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.z5c_1, letterSpacing);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).v5u = function (value) {
    this.w5u(value);
  };
  protoOf(TextStyle).w5u = function (baselineShift) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(baselineShift)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.z5c_1, baselineShift);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).x5u = function (value) {
    this.y5u(value);
  };
  protoOf(TextStyle).y5u = function (typeface) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface(this.z5c_1, getPtr(typeface));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  protoOf(TextStyle).z5u = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function TypefaceFontProvider_init_$Init$($this) {
    TypefaceFontProvider.call($this, org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake());
    return $this;
  }
  function TypefaceFontProvider_init_$Create$() {
    return TypefaceFontProvider_init_$Init$(objectCreate(protoOf(TypefaceFontProvider)));
  }
  function Companion_45() {
    Companion_instance_45 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function TypefaceFontProvider(ptr) {
    Companion_getInstance_45();
    FontMgr_init_$Init$(ptr, this);
    Stats_instance.w5c();
  }
  function TypefaceFontProviderWithFallback_init_$Init$($this) {
    TypefaceFontProviderWithFallback.call($this, org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nMakeAsFallbackProvider());
    return $this;
  }
  function TypefaceFontProviderWithFallback_init_$Create$() {
    return TypefaceFontProviderWithFallback_init_$Init$(objectCreate(protoOf(TypefaceFontProviderWithFallback)));
  }
  function Companion_46() {
    Companion_instance_46 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_46;
  function Companion_getInstance_46() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function TypefaceFontProviderWithFallback(ptr) {
    Companion_getInstance_46();
    TypefaceFontProvider.call(this, ptr);
    Stats_instance.w5c();
  }
  protoOf(TypefaceFontProviderWithFallback).c5v = function (typeface, alias) {
    var tmp;
    try {
      Stats_instance.w5c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.TypefaceFontProviderWithFallback.registerTypeface.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nRegisterTypefaceForFallback(this.z5c_1, getPtr(typeface), $this$interopScope.l5e(alias));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function Companion_47() {
    Companion_instance_47 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_47;
  function Companion_getInstance_47() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function SVGContainer(ptr) {
    Companion_getInstance_47();
    SVGTransformableNode.call(this, ptr);
  }
  function Companion_48() {
    Companion_instance_48 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_48;
  function Companion_getInstance_48() {
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function SVGDOM_init_$Init$(data, $this) {
    SVGDOM.call($this, makeSVGDOM(data));
    return $this;
  }
  function SVGDOM_init_$Create$(data) {
    return SVGDOM_init_$Init$(data, objectCreate(protoOf(SVGDOM)));
  }
  function SVGDOM(ptr) {
    Companion_getInstance_48();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(SVGDOM).f5v = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var ptr = org_jetbrains_skia_svg_SVGDOM__1nGetRoot(this.z5c_1);
      tmp = ptr === Companion_instance_57.e5d() ? null : new SVGSVG(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGDOM).g5v = function (canvas) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_svg_SVGDOM__1nRender(this.z5c_1, getPtr(canvas));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  function makeSVGDOM(data) {
    Stats_instance.w5c();
    var tmp;
    try {
      tmp = org_jetbrains_skia_svg_SVGDOM__1nMakeFromData(getPtr(data));
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  }
  function Companion_49() {
  }
  protoOf(Companion_49).h5v = function (block) {
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.s5k(result);
        block($this$interopScope, handle);
        $this$interopScope.i5f(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().c2e();
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skia.svg.Companion.fromInterop.<anonymous>' call
    // Inline function 'kotlin.fromBits' call
    var bits = result[0];
    var tmp$ret$3 = floatFromBits(bits);
    return SVGLength_init_$Create$(tmp$ret$3, result[1]);
  };
  var Companion_instance_49;
  function Companion_getInstance_49() {
    return Companion_instance_49;
  }
  function SVGLength_init_$Init$(value, unit, $this) {
    SVGLength.call($this, value, values_7()[unit]);
    return $this;
  }
  function SVGLength_init_$Create$(value, unit) {
    return SVGLength_init_$Init$(value, unit, objectCreate(protoOf(SVGLength)));
  }
  function SVGLength(value, unit) {
    this.i5v_1 = value;
    this.j5v_1 = unit;
  }
  protoOf(SVGLength).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGLength))
      return false;
    if (!(compareTo(this.i5v_1, other.i5v_1) === 0))
      return false;
    return this.j5v_1.equals(other.j5v_1);
  };
  protoOf(SVGLength).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.i5v_1) | 0;
    result = imul(result, PRIME) + this.j5v_1.hashCode() | 0;
    return result;
  };
  protoOf(SVGLength).toString = function () {
    return 'SVGLength(_value=' + this.i5v_1 + ', _unit=' + this.j5v_1.toString() + ')';
  };
  protoOf(SVGLength).k5v = function (_unit) {
    return this.j5v_1 === _unit ? this : new SVGLength(this.i5v_1, _unit);
  };
  var SVGLengthUnit_UNKNOWN_instance;
  var SVGLengthUnit_NUMBER_instance;
  var SVGLengthUnit_PERCENTAGE_instance;
  var SVGLengthUnit_EMS_instance;
  var SVGLengthUnit_EXS_instance;
  var SVGLengthUnit_PX_instance;
  var SVGLengthUnit_CM_instance;
  var SVGLengthUnit_MM_instance;
  var SVGLengthUnit_IN_instance;
  var SVGLengthUnit_PT_instance;
  var SVGLengthUnit_PC_instance;
  function values_7() {
    return [SVGLengthUnit_UNKNOWN_getInstance(), SVGLengthUnit_NUMBER_getInstance(), SVGLengthUnit_PERCENTAGE_getInstance(), SVGLengthUnit_EMS_getInstance(), SVGLengthUnit_EXS_getInstance(), SVGLengthUnit_PX_getInstance(), SVGLengthUnit_CM_getInstance(), SVGLengthUnit_MM_getInstance(), SVGLengthUnit_IN_getInstance(), SVGLengthUnit_PT_getInstance(), SVGLengthUnit_PC_getInstance()];
  }
  var SVGLengthUnit_entriesInitialized;
  function SVGLengthUnit_initEntries() {
    if (SVGLengthUnit_entriesInitialized)
      return Unit_instance;
    SVGLengthUnit_entriesInitialized = true;
    SVGLengthUnit_UNKNOWN_instance = new SVGLengthUnit('UNKNOWN', 0);
    SVGLengthUnit_NUMBER_instance = new SVGLengthUnit('NUMBER', 1);
    SVGLengthUnit_PERCENTAGE_instance = new SVGLengthUnit('PERCENTAGE', 2);
    SVGLengthUnit_EMS_instance = new SVGLengthUnit('EMS', 3);
    SVGLengthUnit_EXS_instance = new SVGLengthUnit('EXS', 4);
    SVGLengthUnit_PX_instance = new SVGLengthUnit('PX', 5);
    SVGLengthUnit_CM_instance = new SVGLengthUnit('CM', 6);
    SVGLengthUnit_MM_instance = new SVGLengthUnit('MM', 7);
    SVGLengthUnit_IN_instance = new SVGLengthUnit('IN', 8);
    SVGLengthUnit_PT_instance = new SVGLengthUnit('PT', 9);
    SVGLengthUnit_PC_instance = new SVGLengthUnit('PC', 10);
  }
  function SVGLengthUnit(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGLengthUnit_UNKNOWN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_UNKNOWN_instance;
  }
  function SVGLengthUnit_NUMBER_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_NUMBER_instance;
  }
  function SVGLengthUnit_PERCENTAGE_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PERCENTAGE_instance;
  }
  function SVGLengthUnit_EMS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EMS_instance;
  }
  function SVGLengthUnit_EXS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EXS_instance;
  }
  function SVGLengthUnit_PX_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PX_instance;
  }
  function SVGLengthUnit_CM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_CM_instance;
  }
  function SVGLengthUnit_MM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_MM_instance;
  }
  function SVGLengthUnit_IN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_IN_instance;
  }
  function SVGLengthUnit_PT_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PT_instance;
  }
  function SVGLengthUnit_PC_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PC_instance;
  }
  function Companion_50() {
    Companion_instance_50 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_50;
  function Companion_getInstance_50() {
    if (Companion_instance_50 == null)
      new Companion_50();
    return Companion_instance_50;
  }
  function SVGNode(ptr) {
    Companion_getInstance_50();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_51() {
  }
  var Companion_instance_51;
  function Companion_getInstance_51() {
    return Companion_instance_51;
  }
  function SVGPreserveAspectRatio_init_$Init$($this) {
    SVGPreserveAspectRatio.call($this, SVGPreserveAspectRatioAlign_XMID_YMID_getInstance(), SVGPreserveAspectRatioScale_MEET_getInstance());
    return $this;
  }
  function SVGPreserveAspectRatio_init_$Create$() {
    return SVGPreserveAspectRatio_init_$Init$(objectCreate(protoOf(SVGPreserveAspectRatio)));
  }
  function SVGPreserveAspectRatio_init_$Init$_0(align, $this) {
    SVGPreserveAspectRatio.call($this, align, SVGPreserveAspectRatioScale_MEET_getInstance());
    return $this;
  }
  function SVGPreserveAspectRatio_init_$Create$_0(align) {
    return SVGPreserveAspectRatio_init_$Init$_0(align, objectCreate(protoOf(SVGPreserveAspectRatio)));
  }
  function SVGPreserveAspectRatio(align, scale) {
    this.l5v_1 = align;
    this.m5v_1 = scale;
  }
  protoOf(SVGPreserveAspectRatio).n5v = function () {
    return this.l5v_1;
  };
  protoOf(SVGPreserveAspectRatio).o5v = function () {
    return this.m5v_1;
  };
  protoOf(SVGPreserveAspectRatio).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGPreserveAspectRatio))
      return false;
    if (!this.n5v().equals(other.n5v()))
      return false;
    return this.o5v().equals(other.o5v());
  };
  protoOf(SVGPreserveAspectRatio).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.n5v().hashCode() | 0;
    result = imul(result, PRIME) + this.o5v().hashCode() | 0;
    return result;
  };
  protoOf(SVGPreserveAspectRatio).toString = function () {
    return 'SVGPreserveAspectRatio(_align=' + this.n5v().toString() + ', _scale=' + this.o5v().toString() + ')';
  };
  var SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  var SVGPreserveAspectRatioAlign_NONE_instance;
  function Companion_52() {
  }
  protoOf(Companion_52).p5v = function (value) {
    var tmp;
    switch (value) {
      case 0:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance();
        break;
      case 1:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance();
        break;
      case 2:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance();
        break;
      case 4:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance();
        break;
      case 5:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMID_getInstance();
        break;
      case 6:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance();
        break;
      case 8:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance();
        break;
      case 9:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance();
        break;
      case 10:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance();
        break;
      case 16:
        tmp = SVGPreserveAspectRatioAlign_NONE_getInstance();
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Unknown SVGPreserveAspectRatioAlign value: ' + value);
    }
    return tmp;
  };
  var Companion_instance_52;
  function Companion_getInstance_52() {
    return Companion_instance_52;
  }
  var SVGPreserveAspectRatioAlign_entriesInitialized;
  function SVGPreserveAspectRatioAlign_initEntries() {
    if (SVGPreserveAspectRatioAlign_entriesInitialized)
      return Unit_instance;
    SVGPreserveAspectRatioAlign_entriesInitialized = true;
    SVGPreserveAspectRatioAlign_XMIN_YMIN_instance = new SVGPreserveAspectRatioAlign('XMIN_YMIN', 0, 0);
    SVGPreserveAspectRatioAlign_XMID_YMIN_instance = new SVGPreserveAspectRatioAlign('XMID_YMIN', 1, 1);
    SVGPreserveAspectRatioAlign_XMAX_YMIN_instance = new SVGPreserveAspectRatioAlign('XMAX_YMIN', 2, 2);
    SVGPreserveAspectRatioAlign_XMIN_YMID_instance = new SVGPreserveAspectRatioAlign('XMIN_YMID', 3, 4);
    SVGPreserveAspectRatioAlign_XMID_YMID_instance = new SVGPreserveAspectRatioAlign('XMID_YMID', 4, 5);
    SVGPreserveAspectRatioAlign_XMAX_YMID_instance = new SVGPreserveAspectRatioAlign('XMAX_YMID', 5, 6);
    SVGPreserveAspectRatioAlign_XMIN_YMAX_instance = new SVGPreserveAspectRatioAlign('XMIN_YMAX', 6, 8);
    SVGPreserveAspectRatioAlign_XMID_YMAX_instance = new SVGPreserveAspectRatioAlign('XMID_YMAX', 7, 9);
    SVGPreserveAspectRatioAlign_XMAX_YMAX_instance = new SVGPreserveAspectRatioAlign('XMAX_YMAX', 8, 10);
    SVGPreserveAspectRatioAlign_NONE_instance = new SVGPreserveAspectRatioAlign('NONE', 9, 16);
  }
  function SVGPreserveAspectRatioAlign(name, ordinal, _value) {
    Enum.call(this, name, ordinal);
    this.s5v_1 = _value;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_NONE_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_NONE_instance;
  }
  var SVGPreserveAspectRatioScale_MEET_instance;
  var SVGPreserveAspectRatioScale_SLICE_instance;
  var SVGPreserveAspectRatioScale_entriesInitialized;
  function SVGPreserveAspectRatioScale_initEntries() {
    if (SVGPreserveAspectRatioScale_entriesInitialized)
      return Unit_instance;
    SVGPreserveAspectRatioScale_entriesInitialized = true;
    SVGPreserveAspectRatioScale_MEET_instance = new SVGPreserveAspectRatioScale('MEET', 0);
    SVGPreserveAspectRatioScale_SLICE_instance = new SVGPreserveAspectRatioScale('SLICE', 1);
  }
  function SVGPreserveAspectRatioScale(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGPreserveAspectRatioScale_MEET_getInstance() {
    SVGPreserveAspectRatioScale_initEntries();
    return SVGPreserveAspectRatioScale_MEET_instance;
  }
  function Companion_53() {
    Companion_instance_53 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_53;
  function Companion_getInstance_53() {
    if (Companion_instance_53 == null)
      new Companion_53();
    return Companion_instance_53;
  }
  function SVGSVG$_get_width_$lambda_z81obo(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetWidth(this$0.z5c_1, it);
      return Unit_instance;
    };
  }
  function SVGSVG$_get_height_$lambda_1cq2rn(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetHeight(this$0.z5c_1, it);
      return Unit_instance;
    };
  }
  function SVGSVG$_get_viewBox_$lambda_hsbx38(this$0) {
    return function (it) {
      return org_jetbrains_skia_svg_SVGSVG__1nGetViewBox(this$0.z5c_1, it);
    };
  }
  function SVGSVG(ptr) {
    Companion_getInstance_53();
    SVGContainer.call(this, ptr);
  }
  protoOf(SVGSVG).v5v = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_svg_SVGSVG__1nSetWidth(this.z5c_1, value.i5v_1, value.j5v_1.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).f5a = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp_0 = Companion_instance_49;
      tmp = tmp_0.h5v(SVGSVG$_get_width_$lambda_z81obo(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).w5v = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_svg_SVGSVG__1nSetHeight(this.z5c_1, value.i5v_1, value.j5v_1.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).g5a = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp_0 = Companion_instance_49;
      tmp = tmp_0.h5v(SVGSVG$_get_height_$lambda_1cq2rn(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).x5v = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio(this.z5c_1, value.l5v_1.s5v_1, value.m5v_1.u2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).y5v = function (value) {
    var tmp;
    try {
      Stats_instance.w5c();
      org_jetbrains_skia_svg_SVGSVG__1nSetViewBox(this.z5c_1, ensureNotNull(value).s5f_1, value.t5f_1, value.u5f_1, value.v5f_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).z5v = function () {
    var tmp;
    try {
      Stats_instance.w5c();
      var tmp_0 = Companion_instance_30;
      tmp = tmp_0.r5o(SVGSVG$_get_viewBox_$lambda_hsbx38(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_54() {
    Companion_instance_54 = this;
    Companion_instance_55.c5d();
  }
  var Companion_instance_54;
  function Companion_getInstance_54() {
    if (Companion_instance_54 == null)
      new Companion_54();
    return Companion_instance_54;
  }
  function SVGTransformableNode(ptr) {
    Companion_getInstance_54();
    SVGNode.call(this, ptr);
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_instance;
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_Tvos_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_instance;
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_Tvos_instance = new OS('Tvos', 5, 'tvos');
    OS_JS_instance = new OS('JS', 6, 'js');
    OS_Unknown_instance = new OS('Unknown', 7, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.c5w_1 = id;
  }
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.f5w_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_instance;
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.i5w();
    return Unit_instance;
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.j5e_1.e(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 2));
      $this.j5e_1.e(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.j5e_1.e(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.j5e_1.e(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.j5e_1.e(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_4($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) && array.j() > 0) {
      var data = _malloc(imul(array.j(), 4));
      $this.j5e_1.e(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array.y5k_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j5e_1 = ArrayList_init_$Create$_0();
    this.k5e_1 = false;
  }
  protoOf(InteropScope).l5e = function (string) {
    var tmp;
    if (!(string == null)) {
      tmp = this.u5h(convertToZeroTerminatedString(string));
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).u5h = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).d5l = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).a5f = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).i5f = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).h5f = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).s5k = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).u5j = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).d5g = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).t5j = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).l5r = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).k5r = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).e5l = function (_this__u8e3s4, result) {
    fromWasm_2(_this__u8e3s4, result);
  };
  protoOf(InteropScope).w5k = function (array) {
    return toInterop_4(this, array, false);
  };
  protoOf(InteropScope).x5k = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.y5k_1);
  };
  protoOf(InteropScope).d5r = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(stringArray.length);
      var inductionVariable = 0;
      var last = stringArray.length;
      while (inductionVariable < last) {
        var item = stringArray[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        var tmp$ret$2 = this.l5e(item);
        destination.e(tmp$ret$2);
      }
      var ptrs = toIntArray(destination);
      tmp = this.h5f(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).c2e = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.j5e_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.j5e_1.i2();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.k5e_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.k5e_1 = false;
    }
  };
  function toWasm(dest, src) {
    return HEAPU8.set(src, dest);
  }
  function toWasm_0(dest, src) {
    return HEAPU16.set(src, dest / 2 | 0);
  }
  function fromWasm(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_2(dest, src) {
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function fromWasm_1(src, result) {
    var startIndex = src / 8 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF64.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_3(dest, src) {
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_2(src, result) {
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    return _releaseLocalCallbackScope();
  }
  function getNavigatorInfo() {
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function makeGLContextCurrent(contextPointer) {
    GL.makeContextCurrent(contextPointer);
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.j5w_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.k5w_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.l5w_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.m5w_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.n5w_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.o5w_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.p5w_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.q5w_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.r5w_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.s5w_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.t5w_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.u5w_1 = tmp1_elvis_lhs_10 == null ? 2 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).v5w = function () {
    return this.j5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).w5w = function () {
    return this.k5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).x5w = function () {
    return this.l5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).y5w = function () {
    return this.m5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).z5w = function () {
    return this.n5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).a5x = function () {
    return this.o5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).b5x = function () {
    return this.p5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).c5x = function () {
    return this.q5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).d5x = function () {
    return this.r5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).e5x = function () {
    return this.s5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).f5x = function () {
    return this.t5w_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).g5x = function () {
    return this.u5w_1;
  };
  var LANG$delegate;
  function Pattern(regex) {
    this.h5x_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_55() {
  }
  protoOf(Companion_55).c5d = function () {
  };
  var Companion_instance_55;
  function Companion_getInstance_55() {
    return Companion_instance_55;
  }
  function FinalizationThunk(finalizer, obj) {
    this.g5w_1 = finalizer;
    this.h5w_1 = obj;
  }
  protoOf(FinalizationThunk).i5w = function () {
    if (!(this.h5w_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.g5w_1, this.h5w_1);
    }
    this.h5w_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.y5c_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(finalizer === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.y5c_1 = thunk;
    }
  }
  protoOf(Managed).l4 = function () {
    if (Companion_instance_57.e5d() === this.z5c_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).kb() + ', _ptr=' + this.z5c_1);
    else if (null == this.y5c_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).kb() + ', _ptr=' + this.z5c_1);
    else {
      unregister(this);
      ensureNotNull(this.y5c_1).i5w();
      this.y5c_1 = null;
      this.z5c_1 = 0;
    }
  };
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function Companion_56() {
  }
  var Companion_instance_56;
  function Companion_getInstance_56() {
    return Companion_instance_56;
  }
  function NativePointerArray(size) {
    this.y5k_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).o = function (index) {
    return this.y5k_1[index];
  };
  protoOf(NativePointerArray).j = function () {
    return this.y5k_1.length;
  };
  function Companion_57() {
  }
  protoOf(Companion_57).e5d = function () {
    return 0;
  };
  var Companion_instance_57;
  function Companion_getInstance_57() {
    return Companion_instance_57;
  }
  function Native(ptr) {
    if (ptr === Companion_instance_57.e5d())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.z5c_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.z5c_1 === other.z5c_1 ? true : this.a5d(other);
  };
  protoOf(Native).hashCode = function () {
    return this.z5c_1;
  };
  protoOf(Native).a5d = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).kb(), '(_ptr=0x') + toString_1(this.z5c_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function _set_interopScopeCounter_$accessor$14q3g08_7yblxt(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$14q3g08_y31ph7() {
    _init_properties_Native_js_kt__80argu();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi() {
    _init_properties_Native_js_kt__80argu();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().i5x_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().i5x_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).g5h = function () {
    Stats_instance.w5c();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.z5c_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    // Inline function 'kotlin.text.substring' call
    var endIndex = s.length - 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return s.substring(0, endIndex) + ', refCount=' + this.g5h() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_17() {
    _FinalizerHolder_instance_17 = this;
    this.i5x_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_17;
  function _FinalizerHolder_getInstance_17() {
    if (_FinalizerHolder_instance_17 == null)
      new _FinalizerHolder_17();
    return _FinalizerHolder_instance_17;
  }
  function Stats() {
  }
  protoOf(Stats).w5c = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function loadOpenGLLibrary() {
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.n5x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l4();
    }
    $this.n5x_1 = null;
    var tmp1_safe_receiver = $this.o5x_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l4();
    }
    $this.o5x_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.q5x_1 = false;
      makeGLContextCurrent(this$0.j5x_1);
      var tmp0_safe_receiver = this$0.p5x_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.l2z(-1);
      var tmp1_safe_receiver = this$0.p5x_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.p5g();
      this$0.r5x(timestamp);
      var tmp2_safe_receiver = this$0.n5x_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.j5p();
      }
      this$0.m5x_1.d5i();
      return Unit_instance;
    };
  }
  function CanvasRenderer(contextPointer, width, height) {
    this.j5x_1 = contextPointer;
    this.k5x_1 = width;
    this.l5x_1 = height;
    this.n5x_1 = null;
    this.o5x_1 = null;
    this.p5x_1 = null;
    makeGLContextCurrent(this.j5x_1);
    this.m5x_1 = Companion_getInstance_8().a5i();
    this.s5x();
    this.q5x_1 = false;
  }
  protoOf(CanvasRenderer).s5x = function () {
    disposeCanvas(this);
    this.o5x_1 = Companion_getInstance().d5d(this.k5x_1, this.l5x_1, 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_33().a5p(this.m5x_1, ensureNotNull(this.o5x_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_5().m5h_1, new SurfaceProps());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.n5x_1 = tmp_0;
    this.p5x_1 = ensureNotNull(this.n5x_1).h5p();
  };
  protoOf(CanvasRenderer).t5x = function () {
    if (this.q5x_1) {
      return Unit_instance;
    }
    this.q5x_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var this_0 = getNavigatorInfo();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.jetbrains.skiko.detectHostOs.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().c5w_1 + '-' + get_hostArch().f5w_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  function attachTo($this, htmlCanvas) {
    $this.x5x_1 = htmlCanvas;
    var tmp = $this;
    tmp.u5x_1 = new SkiaLayer$attachTo$1(htmlCanvas, $this);
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.g5y_1 = this$0;
    CanvasRenderer.call(this, createWebGLContext($htmlCanvas), $htmlCanvas.width, $htmlCanvas.height);
  }
  protoOf(SkiaLayer$attachTo$1).r5x = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.g5y_1.w5x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h5y(ensureNotNull(this.p5x_1), this.k5x_1, this.l5x_1, numberToLong(currentNanos));
    }
  };
  function SkiaLayer() {
    this.u5x_1 = null;
    this.v5x_1 = GraphicsApi_WEBGL_getInstance();
    this.w5x_1 = null;
    this.x5x_1 = null;
  }
  protoOf(SkiaLayer).t5x = function () {
    var tmp0_safe_receiver = this.u5x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t5x();
    }
  };
  protoOf(SkiaLayer).i5y = function (container) {
    attachTo(this, container instanceof HTMLCanvasElement ? container : THROW_CCE());
  };
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function convertToZeroTerminatedString(string) {
    var utf8 = encodeToByteArray(string);
    return copyOf(utf8, utf8.length + 1 | 0);
  }
  //region block: post-declaration
  protoOf(Bitmap).f5a = get_width;
  protoOf(Bitmap).g5a = get_height;
  protoOf(Bitmap).g5e = get_colorType;
  protoOf(Bitmap).h5e = get_colorSpace;
  protoOf(Bitmap).i5e = get_isOpaque;
  protoOf(Image).f5a = get_width;
  protoOf(Image).g5a = get_height;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.v5w();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.w5w();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.x5w();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.y5w();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.z5w();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.a5x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.b5x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.c5x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.d5x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.e5x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.f5x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.g5x();
  });
  //endregion
  //region block: init
  Companion_instance_11 = new Companion_11();
  Companion_instance_14 = new Companion_14();
  Companion_instance_16 = new Companion_16();
  Companion_instance_29 = new Companion_29();
  Companion_instance_30 = new Companion_30();
  Companion_instance_38 = new Companion_38();
  Companion_instance_42 = new Companion_42();
  Companion_instance_43 = new Companion_43();
  Companion_instance_49 = new Companion_49();
  Companion_instance_51 = new Companion_51();
  Companion_instance_52 = new Companion_52();
  Companion_instance_55 = new Companion_55();
  Companion_instance_56 = new Companion_56();
  Companion_instance_57 = new Companion_57();
  Stats_instance = new Stats();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_DASHED_getInstance;
  _.$_$.i = DecorationLineStyle_DOTTED_getInstance;
  _.$_$.j = DecorationLineStyle_DOUBLE_getInstance;
  _.$_$.k = DecorationLineStyle_SOLID_getInstance;
  _.$_$.l = DecorationLineStyle_WAVY_getInstance;
  _.$_$.m = Direction_LTR_getInstance;
  _.$_$.n = Direction_RTL_getInstance;
  _.$_$.o = HeightMode_ALL_getInstance;
  _.$_$.p = HeightMode_DISABLE_ALL_getInstance;
  _.$_$.q = HeightMode_DISABLE_FIRST_ASCENT_getInstance;
  _.$_$.r = HeightMode_DISABLE_LAST_DESCENT_getInstance;
  _.$_$.s = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.t = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.u = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.v = PlaceholderAlignment_TOP_getInstance;
  _.$_$.w = RectHeightMode_MAX_getInstance;
  _.$_$.x = RectHeightMode_STRUT_getInstance;
  _.$_$.y = RectWidthMode_TIGHT_getInstance;
  _.$_$.z = SVGLengthUnit_PX_getInstance;
  _.$_$.a1 = SVGPreserveAspectRatioAlign_NONE_getInstance;
  _.$_$.b1 = BlendMode_CLEAR_getInstance;
  _.$_$.c1 = BlendMode_COLOR_BURN_getInstance;
  _.$_$.d1 = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.e1 = BlendMode_COLOR_getInstance;
  _.$_$.f1 = BlendMode_DARKEN_getInstance;
  _.$_$.g1 = BlendMode_DIFFERENCE_getInstance;
  _.$_$.h1 = BlendMode_DST_ATOP_getInstance;
  _.$_$.i1 = BlendMode_DST_IN_getInstance;
  _.$_$.j1 = BlendMode_DST_OUT_getInstance;
  _.$_$.k1 = BlendMode_DST_OVER_getInstance;
  _.$_$.l1 = BlendMode_DST_getInstance;
  _.$_$.m1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.n1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.o1 = BlendMode_HUE_getInstance;
  _.$_$.p1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.q1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.r1 = BlendMode_MODULATE_getInstance;
  _.$_$.s1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.t1 = BlendMode_OVERLAY_getInstance;
  _.$_$.u1 = BlendMode_PLUS_getInstance;
  _.$_$.v1 = BlendMode_SATURATION_getInstance;
  _.$_$.w1 = BlendMode_SCREEN_getInstance;
  _.$_$.x1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.y1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.z1 = BlendMode_SRC_IN_getInstance;
  _.$_$.a2 = BlendMode_SRC_OUT_getInstance;
  _.$_$.b2 = BlendMode_SRC_OVER_getInstance;
  _.$_$.c2 = BlendMode_SRC_getInstance;
  _.$_$.d2 = BlendMode_XOR_getInstance;
  _.$_$.e2 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.f2 = ClipMode_INTERSECT_getInstance;
  _.$_$.g2 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.h2 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.i2 = ColorType_ALPHA_8_getInstance;
  _.$_$.j2 = ColorType_RGBA_F16_getInstance;
  _.$_$.k2 = ColorType_RGB_565_getInstance;
  _.$_$.l2 = FilterMode_LINEAR_getInstance;
  _.$_$.m2 = FilterMode_NEAREST_getInstance;
  _.$_$.n2 = FilterTileMode_CLAMP_getInstance;
  _.$_$.o2 = FilterTileMode_DECAL_getInstance;
  _.$_$.p2 = FilterTileMode_MIRROR_getInstance;
  _.$_$.q2 = FilterTileMode_REPEAT_getInstance;
  _.$_$.r2 = FontEdging_ALIAS_getInstance;
  _.$_$.s2 = FontEdging_ANTI_ALIAS_getInstance;
  _.$_$.t2 = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance;
  _.$_$.u2 = FontHinting_FULL_getInstance;
  _.$_$.v2 = FontHinting_NONE_getInstance;
  _.$_$.w2 = FontHinting_NORMAL_getInstance;
  _.$_$.x2 = FontHinting_SLIGHT_getInstance;
  _.$_$.y2 = FontSlant_ITALIC_getInstance;
  _.$_$.z2 = FontSlant_UPRIGHT_getInstance;
  _.$_$.a3 = MipmapMode_NEAREST_getInstance;
  _.$_$.b3 = MipmapMode_NONE_getInstance;
  _.$_$.c3 = PaintMode_FILL_getInstance;
  _.$_$.d3 = PaintMode_STROKE_getInstance;
  _.$_$.e3 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.f3 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.g3 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.h3 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.i3 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.j3 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.k3 = PathDirection_CLOCKWISE_getInstance;
  _.$_$.l3 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.m3 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.n3 = PathFillMode_WINDING_getInstance;
  _.$_$.o3 = PathOp_DIFFERENCE_getInstance;
  _.$_$.p3 = PathOp_INTERSECT_getInstance;
  _.$_$.q3 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.r3 = PathOp_UNION_getInstance;
  _.$_$.s3 = PathOp_XOR_getInstance;
  _.$_$.t3 = FontCollection_init_$Create$;
  _.$_$.u3 = TextStyle_init_$Create$;
  _.$_$.v3 = TypefaceFontProviderWithFallback_init_$Create$;
  _.$_$.w3 = SVGDOM_init_$Create$;
  _.$_$.x3 = SVGPreserveAspectRatio_init_$Create$_0;
  _.$_$.y3 = Bitmap_init_$Create$;
  _.$_$.z3 = Canvas_init_$Create$;
  _.$_$.a4 = Font_init_$Create$_0;
  _.$_$.b4 = FontStyle_init_$Create$;
  _.$_$.c4 = Paint_init_$Create$;
  _.$_$.d4 = Path_init_$Create$;
  _.$_$.e4 = PathMeasure_init_$Create$;
  _.$_$.f4 = PictureRecorder_init_$Create$;
  _.$_$.g4 = RTreeFactory_init_$Create$;
  _.$_$.h4 = CharDirection_getInstance;
  _.$_$.i4 = Companion_getInstance_0;
  _.$_$.j4 = Companion_getInstance_1;
  _.$_$.k4 = Companion_getInstance_3;
  _.$_$.l4 = Companion_getInstance_5;
  _.$_$.m4 = Companion_getInstance_6;
  _.$_$.n4 = Companion_getInstance_7;
  _.$_$.o4 = Companion_getInstance_10;
  _.$_$.p4 = Companion_getInstance_12;
  _.$_$.q4 = Companion_getInstance_13;
  _.$_$.r4 = Companion_getInstance_17;
  _.$_$.s4 = Companion_getInstance_20;
  _.$_$.t4 = Companion_getInstance_23;
  _.$_$.u4 = Companion_instance_29;
  _.$_$.v4 = Companion_instance_30;
  _.$_$.w4 = Companion_getInstance_31;
  _.$_$.x4 = Companion_getInstance_32;
  _.$_$.y4 = ShadowUtils_getInstance;
  _.$_$.z4 = Companion_getInstance_33;
  _.$_$.a5 = DecorationStyle;
  _.$_$.b5 = FontRastrSettings;
  _.$_$.c5 = LineMetrics;
  _.$_$.d5 = ParagraphBuilder;
  _.$_$.e5 = ParagraphStyle;
  _.$_$.f5 = PlaceholderStyle;
  _.$_$.g5 = Shadow;
  _.$_$.h5 = TextIndent;
  _.$_$.i5 = SVGLength;
  _.$_$.j5 = ColorInfo;
  _.$_$.k5 = CubicResampler;
  _.$_$.l5 = FilterMipmap;
  _.$_$.m5 = FontMgrWithFallback;
  _.$_$.n5 = GradientStyle;
  _.$_$.o5 = ImageInfo;
  _.$_$.p5 = Matrix33;
  _.$_$.q5 = Matrix44;
  _.$_$.r5 = Point3;
  _.$_$.s5 = ClipboardManager;
  _.$_$.t5 = SkiaLayer;
  _.$_$.u5 = URIManager;
  _.$_$.v5 = currentNanoTime;
  _.$_$.w5 = get_currentSystemTheme;
  _.$_$.x5 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
