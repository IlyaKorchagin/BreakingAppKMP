(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-material3-material3.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'AvatarCropper-imagecropper2'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'AvatarCropper-imagecropper2'.");
    }
    globalThis['AvatarCropper-imagecropper2'] = factory(typeof globalThis['AvatarCropper-imagecropper2'] === 'undefined' ? {} : globalThis['AvatarCropper-imagecropper2'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var lazy = kotlin_kotlin.$_$.ql;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var emptySet = kotlin_kotlin.$_$.q8;
  var Long = kotlin_kotlin.$_$.hk;
  var ResourceItem = kotlin_components_resources_library.$_$.c;
  var setOf = kotlin_kotlin.$_$.bb;
  var DrawableResource = kotlin_components_resources_library.$_$.a;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var VOID = kotlin_kotlin.$_$.j;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var toString = kotlin_kotlin.$_$.cm;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var to = kotlin_kotlin.$_$.dm;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.oe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s1;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var aspectRatio = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.r9;
  var blur = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r1;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u1;
  var Canvas = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q1;
  var animateDpAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var animateFloatAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var wrapContentHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m1;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w1;
  var painterResource = kotlin_components_resources_library.$_$.e;
  var graphicsLayer_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u1;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var IconButton = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var coerceIn = kotlin_kotlin.$_$.cg;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var Enum = kotlin_kotlin.$_$.bk;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c3;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var coerceIn_0 = kotlin_kotlin.$_$.dg;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForClass(CropperColors, 'CropperColors', CropperColors);
  initMetadataForClass(CropperIcons, 'CropperIcons', CropperIcons);
  initMetadataForClass(Instruments, 'Instruments', VOID, Enum);
  //endregion
  function CommonMainDrawable0$compose_multiplatform$delegate$lambda() {
    return init_compose_multiplatform();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.opd_1 = lazy(CommonMainDrawable0$compose_multiplatform$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).ppd = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.opd_1;
    compose_multiplatform$factory();
    return this_0.c1();
  };
  var CommonMainDrawable0_instance;
  function CommonMainDrawable0_getInstance() {
    if (CommonMainDrawable0_instance == null)
      new CommonMainDrawable0();
    return CommonMainDrawable0_instance;
  }
  function init_compose_multiplatform() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/avatarcropper.imagecropper2.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function get_compose_multiplatform(_this__u8e3s4) {
    return CommonMainDrawable0_getInstance().ppd();
  }
  function compose_multiplatform$factory() {
    return getPropertyCallableRef('compose_multiplatform', 1, KProperty1, function (receiver) {
      return receiver.ppd();
    }, null);
  }
  var avatarcropper_imagecropper2_generated_resources_Res_drawable$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_string$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_array$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_plurals$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_font$stable;
  var avatarcropper_imagecropper2_generated_resources_Res$stable;
  function drawable() {
  }
  var drawable_instance;
  function drawable_getInstance() {
    return drawable_instance;
  }
  var team_platforma_imagecropper2_CropperColors$stable;
  function CropperColors(instruments, icons) {
    instruments = instruments === VOID ? Companion_getInstance().z67_1 : instruments;
    icons = icons === VOID ? Companion_getInstance().d68_1 : icons;
    this.qpd_1 = instruments;
    this.rpd_1 = icons;
  }
  protoOf(CropperColors).toString = function () {
    return 'CropperColors(instruments=' + Color__toString_impl_hpzmaq(this.qpd_1) + ', icons=' + Color__toString_impl_hpzmaq(this.rpd_1) + ')';
  };
  protoOf(CropperColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.qpd_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.rpd_1) | 0;
    return result;
  };
  protoOf(CropperColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropperColors))
      return false;
    var tmp0_other_with_cast = other instanceof CropperColors ? other : THROW_CCE();
    if (!equals(this.qpd_1, tmp0_other_with_cast.qpd_1))
      return false;
    if (!equals(this.rpd_1, tmp0_other_with_cast.rpd_1))
      return false;
    return true;
  };
  var team_platforma_imagecropper2_CropperIcons$stable;
  function CropperIcons(size, noSize, pan, noPan, rotate, noRotate, instruments) {
    size = size === VOID ? null : size;
    noSize = noSize === VOID ? null : noSize;
    pan = pan === VOID ? null : pan;
    noPan = noPan === VOID ? null : noPan;
    rotate = rotate === VOID ? null : rotate;
    noRotate = noRotate === VOID ? null : noRotate;
    instruments = instruments === VOID ? null : instruments;
    this.spd_1 = size;
    this.tpd_1 = noSize;
    this.upd_1 = pan;
    this.vpd_1 = noPan;
    this.wpd_1 = rotate;
    this.xpd_1 = noRotate;
    this.ypd_1 = instruments;
  }
  protoOf(CropperIcons).toString = function () {
    return 'CropperIcons(size=' + toString(this.spd_1) + ', noSize=' + toString(this.tpd_1) + ', pan=' + toString(this.upd_1) + ', noPan=' + toString(this.vpd_1) + ', rotate=' + toString(this.wpd_1) + ', noRotate=' + toString(this.xpd_1) + ', instruments=' + toString(this.ypd_1) + ')';
  };
  protoOf(CropperIcons).hashCode = function () {
    var result = this.spd_1 == null ? 0 : this.spd_1.hashCode();
    result = imul(result, 31) + (this.tpd_1 == null ? 0 : this.tpd_1.hashCode()) | 0;
    result = imul(result, 31) + (this.upd_1 == null ? 0 : this.upd_1.hashCode()) | 0;
    result = imul(result, 31) + (this.vpd_1 == null ? 0 : this.vpd_1.hashCode()) | 0;
    result = imul(result, 31) + (this.wpd_1 == null ? 0 : this.wpd_1.hashCode()) | 0;
    result = imul(result, 31) + (this.xpd_1 == null ? 0 : this.xpd_1.hashCode()) | 0;
    result = imul(result, 31) + (this.ypd_1 == null ? 0 : this.ypd_1.hashCode()) | 0;
    return result;
  };
  protoOf(CropperIcons).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropperIcons))
      return false;
    var tmp0_other_with_cast = other instanceof CropperIcons ? other : THROW_CCE();
    if (!equals(this.spd_1, tmp0_other_with_cast.spd_1))
      return false;
    if (!equals(this.tpd_1, tmp0_other_with_cast.tpd_1))
      return false;
    if (!equals(this.upd_1, tmp0_other_with_cast.upd_1))
      return false;
    if (!equals(this.vpd_1, tmp0_other_with_cast.vpd_1))
      return false;
    if (!equals(this.wpd_1, tmp0_other_with_cast.wpd_1))
      return false;
    if (!equals(this.xpd_1, tmp0_other_with_cast.xpd_1))
      return false;
    if (!equals(this.ypd_1, tmp0_other_with_cast.ypd_1))
      return false;
    return true;
  };
  function ImageCropper(image, ratio, shape, greedCells, cropFraction, icons, colors, cropButton, onImageCrop, $composer, $changed, $default) {
    var ratio_0 = {_v: ratio};
    var shape_0 = {_v: shape};
    var greedCells_0 = {_v: greedCells};
    var cropFraction_0 = {_v: cropFraction};
    var icons_0 = {_v: icons};
    var colors_0 = {_v: colors};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(581257338);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f32(image) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h32(ratio_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.f2r(shape_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.j32(greedCells_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h32(cropFraction_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.f2r(icons_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.f2r(colors_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.f32(cropButton) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.f32(onImageCrop) ? 67108864 : 33554432);
    if (!(($dirty & 38347923) === 38347922) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
        if (!(($default & 2) === 0)) {
          ratio_0._v = 1.0;
        }
        if (!(($default & 4) === 0)) {
          shape_0._v = RoundedCornerShape(100);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          greedCells_0._v = 3;
        }
        if (!(($default & 16) === 0)) {
          cropFraction_0._v = 0.6;
        }
        if (!(($default & 32) === 0)) {
          icons_0._v = new CropperIcons();
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colors_0._v = new CropperColors();
          $dirty = $dirty & -3670017;
        }
      } else {
        $composer_0.c2u();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.e31();
      if (isTraceInProgress()) {
        traceEventStart(581257338, $dirty, -1, 'team.platforma.imagecropper2.ImageCropper (ImageCropper.kt:65)');
      }
      $composer_0.a31(1859977231);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value = mutableStateOf(0);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var imageWidth$delegate = tmp0_group;
      $composer_0.a31(1859978959);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_0 = mutableStateOf(0);
        this_1.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var imageHeight$delegate = tmp1_group;
      $composer_0.a31(1859980560);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_1 = mutableStateOf(1.0);
        this_2.h33(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.c31();
      var scale$delegate = tmp2_group;
      $composer_0.a31(1859982169);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.w32();
      var tmp_5;
      if (false || it_2 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_2 = mutableStateOf(new Offset(Companion_getInstance_1().p5g_1));
        this_3.h33(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.c31();
      var offset$delegate = tmp3_group;
      $composer_0.a31(1859984112);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_4.w32();
      var tmp_7;
      if (false || it_3 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_3 = mutableStateOf(0.0);
        this_4.h33(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.c31();
      var rotation$delegate = tmp4_group;
      $composer_0.a31(1859986035);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_5.w32();
      var tmp_9;
      if (false || it_4 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_4 = mutableStateOf(false);
        this_5.h33(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.c31();
      var showInstruments$delegate = tmp5_group;
      $composer_0.a31(1859988224);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_6.w32();
      var tmp_11;
      if (false || it_5 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_5 = mutableStateMapOf([to(Instruments_Zoom_getInstance(), true), to(Instruments_Pan_getInstance(), true), to(Instruments_Rotate_getInstance(), true)]);
        this_6.h33(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.c31();
      var settingInstruments = tmp6_group;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = null;
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((7 & 1) === 0))
        modifier = Companion_instance;
      if (!((7 & 2) === 0))
        contentAlignment = Companion_getInstance_2().m7p_1;
      if (!((7 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_13 = $composer_3.v30();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
      var $changed_0 = 6 | 112 & 0 >> 6;
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var tmp_14 = fillMaxSize(Companion_instance);
      $composer_5.a31(313330984);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_5.w32();
      var tmp_15;
      if (false || it_6 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>' call
        var value_6 = ImageCropper$lambda_11(settingInstruments, scale$delegate, offset$delegate, rotation$delegate);
        $composer_5.h33(value_6);
        tmp_15 = value_6;
      } else {
        tmp_15 = it_6;
      }
      var tmp_16 = tmp_15;
      var tmp0_group_0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_5.c31();
      var modifier_1 = transformGestures(tmp_14, true, tmp0_group_0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().y7p_1;
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_3().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_17 = $composer_8.v30();
      if (!isInterface(tmp_17, Applier)) {
        invalidApplier();
      }
      $composer_8.o31();
      if ($composer_8.j31()) {
        $composer_8.p31(factory_0);
      } else {
        $composer_8.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_18 = aspectRatio(fillMaxWidth(Companion_instance), ratio_0._v);
      $composer_10.a31(266162517);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_10.w32();
      var tmp_19;
      if (false || it_7 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>' call
        var value_7 = ImageCropper$lambda_12(imageWidth$delegate, imageHeight$delegate);
        $composer_10.h33(value_7);
        tmp_19 = value_7;
      } else {
        tmp_19 = it_7;
      }
      var tmp_20 = tmp_19;
      var tmp0_group_1 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_10.c31();
      var modifier_3 = onGloballyPositioned(tmp_18, tmp0_group_1);
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_2().m7p_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.u32();
      var materialized_1 = materialize($composer_12, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_3().s9e_1;
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_21 = $composer_13.v30();
      if (!isInterface(tmp_21, Applier)) {
        invalidApplier();
      }
      $composer_13.o31();
      if ($composer_13.j31()) {
        $composer_13.p31(factory_1);
      } else {
        $composer_13.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
        $this$with_1.h33(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_15 = $composer_14;
      var tmp_22 = toBitmap(image);
      var tmp_23 = graphicsLayer(fillMaxSize(Companion_instance), ImageCropper$lambda_3(scale$delegate), ImageCropper$lambda_3(scale$delegate), VOID, _Offset___get_x__impl__xvi35n(ImageCropper$lambda_5(offset$delegate)), _Offset___get_y__impl__8bzhra(ImageCropper$lambda_5(offset$delegate)), VOID, VOID, VOID, ImageCropper$lambda_7(rotation$delegate));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$42 = _Dp___init__impl__ms3zkb(5);
      var tmp_24 = blur(tmp_23, tmp$ret$42, Companion_getInstance_4().n7s_1);
      Image(tmp_22, null, tmp_24, null, null, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_15, 48, 248);
      Box(background(fillMaxSize(Companion_instance), Color__copy$default_impl_ectz3s(Companion_getInstance().c68_1, 0.5)), $composer_15, 6);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp0_$receiver = clip(aspectRatio(fillMaxSize(Companion_instance, cropFraction_0._v), ratio_0._v), shape_0._v);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1_width = _Dp___init__impl__ms3zkb(1);
      var tmp2_color = Color__copy$default_impl_ectz3s(Companion_getInstance().d68_1, 0.6);
      var modifier_5 = BoxScopeInstance_instance.kby(background(border(tmp0_$receiver, tmp1_width, tmp2_color, shape_0._v), Companion_getInstance().k68_1), Companion_getInstance_2().q7p_1);
      var contentAlignment_1 = null;
      var propagateMinConstraints_1 = false;
      var $composer_16 = $composer_15;
      sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_5 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_2().m7p_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      sourceInformationMarkerStart($composer_17, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_instance;
      var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_17, 0);
      var localMap_2 = $composer_17.u32();
      var materialized_2 = materialize($composer_17, modifier_6);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_2 = Companion_getInstance_3().s9e_1;
      var $composer_18 = $composer_17;
      sourceInformationMarkerStart($composer_18, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_25 = $composer_18.v30();
      if (!isInterface(tmp_25, Applier)) {
        invalidApplier();
      }
      $composer_18.o31();
      if ($composer_18.j31()) {
        $composer_18.p31(factory_2);
      } else {
        $composer_18.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
        $this$with_2.h33(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_19 = $composer_18;
      sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_20 = $composer_19;
      var tmp_26 = toBitmap(image);
      var tmp_27 = graphicsLayer(fillMaxSize(Companion_instance), ImageCropper$lambda_3(scale$delegate) * calculateScaleFraction(cropFraction_0._v), ImageCropper$lambda_3(scale$delegate) * calculateScaleFraction(cropFraction_0._v), VOID, _Offset___get_x__impl__xvi35n(ImageCropper$lambda_5(offset$delegate)), _Offset___get_y__impl__8bzhra(ImageCropper$lambda_5(offset$delegate)), VOID, VOID, VOID, ImageCropper$lambda_7(rotation$delegate));
      Image(tmp_26, null, tmp_27, null, null, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_20, 48, 248);
      var tmp_28 = fillMaxSize(Companion_instance);
      $composer_20.a31(-1953105730);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_20.w32();
      var tmp_29;
      if (invalid || it_8 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_8 = ImageCropper$lambda_13(greedCells_0);
        $composer_20.h33(value_8);
        tmp_29 = value_8;
      } else {
        tmp_29 = it_8;
      }
      var tmp_30 = tmp_29;
      var tmp0_group_2 = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
      $composer_20.c31();
      Canvas(tmp_28, tmp0_group_2, $composer_20, 6);
      sourceInformationMarkerEnd($composer_19);
      $composer_18.u31();
      sourceInformationMarkerEnd($composer_18);
      sourceInformationMarkerEnd($composer_17);
      sourceInformationMarkerEnd($composer_16);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.u31();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      Box(background(ColumnScopeInstance_instance.jbz(fillMaxWidth(Companion_instance), 1.0), Color__copy$default_impl_ectz3s(Companion_getInstance().c68_1, 0.5)), $composer_10, 0);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u31();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_31 = ImageCropper$lambda_9(showInstruments$delegate);
      var tmp_32 = cropFraction_0._v;
      var tmp_33 = ImageCropper$lambda_3(scale$delegate);
      var tmp_34 = ImageCropper$lambda_7(rotation$delegate);
      var tmp_35 = ImageCropper$lambda_5(offset$delegate);
      $composer_5.a31(313476996);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_5.w32();
      var tmp_36;
      if (false || it_9 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>' call
        var value_9 = ImageCropper$lambda_14(showInstruments$delegate);
        $composer_5.h33(value_9);
        tmp_36 = value_9;
      } else {
        tmp_36 = it_9;
      }
      var tmp_37 = tmp_36;
      var tmp1_group_0 = (tmp_37 == null ? true : !(tmp_37 == null)) ? tmp_37 : THROW_CCE();
      $composer_5.c31();
      MobileInstruments(BoxScopeInstance_instance, tmp_31, tmp_32, image, tmp_33, tmp_34, tmp_35, tmp1_group_0, ImageCropper$lambda(imageWidth$delegate), ImageCropper$lambda_1(imageHeight$delegate), settingInstruments, icons_0._v, colors_0._v, cropButton, onImageCrop, $composer_5, 12582912 | 14 & $changed_0 | 896 & $dirty >> 6 | 7168 & $dirty << 9, 6 | 112 & $dirty >> 12 | 896 & $dirty >> 12 | 7168 & $dirty >> 12 | 57344 & $dirty >> 12);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp7_safe_receiver = $composer_0.w33();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.n38(ImageCropper$lambda_15(image, ratio_0, shape_0, greedCells_0, cropFraction_0, icons_0, colors_0, cropButton, onImageCrop, $changed, $default));
    }
  }
  function calculateScaleFraction(cropFraction) {
    return 0.5 / cropFraction * 2.0;
  }
  function MobileInstruments(_this__u8e3s4, showInstruments, cropFraction, imageByteArray, scale, rotation, offset, onShowInstrumentsChange, imageWidth, imageHeight, settingInstruments, icons, colors, cropButton, onImageCrop, $composer, $changed, $changed1) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1631545238);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g32(showInstruments) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h32(cropFraction) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f32(imageByteArray) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.h32(scale) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h32(rotation) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.i32(_Offset___get_packedValue__impl__xh2k8q(offset)) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.f32(onShowInstrumentsChange) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.j32(imageWidth) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.j32(imageHeight) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.f2r(settingInstruments) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.f2r(icons) ? 32 : 16);
    if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.f2r(colors) ? 256 : 128);
    if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.f32(cropButton) ? 2048 : 1024);
    if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.f32(onImageCrop) ? 16384 : 8192);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 9363) === 9362) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1631545238, $dirty, $dirty1, 'team.platforma.imagecropper2.MobileInstruments (ImageCropper.kt:237)');
      }
      var tmp;
      if (showInstruments) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp = _Dp___init__impl__ms3zkb(72);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp = _Dp___init__impl__ms3zkb(0);
      }
      var tmp_0 = tmp;
      var tmp_1 = showInstruments ? spring(0.5, 200.0) : tween(200);
      var animatedHeight$delegate = animateDpAsState(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
      var tmp_2 = showInstruments ? 180.0 : 0.0;
      var tmp_3 = showInstruments ? spring(0.5, 200.0) : tween(200);
      var rotationAngle$delegate = animateFloatAsState(tmp_2, tmp_3, 0.0, null, null, $composer_0, 0, 28);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = _this__u8e3s4.kby(wrapContentHeight(fillMaxWidth(Companion_instance)), Companion_getInstance_2().t7p_1);
      var contentAlignment = Companion_getInstance_2().t7p_1;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_2().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.u32();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_3().s9e_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_4 = $composer_3.v30();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_3.o31();
      if ($composer_3.j31()) {
        $composer_3.p31(factory);
      } else {
        $composer_3.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_modifier = fillMaxWidth(Companion_instance);
      var tmp1_horizontalAlignment = Companion_getInstance_2().z7p_1;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().xbv_1;
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().wbv_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().y7p_1;
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.u32();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_3().s9e_1;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_5 = $composer_8.v30();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_8.o31();
      if ($composer_8.j31()) {
        $composer_8.p31(factory_0);
      } else {
        $composer_8.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
        $this$with_0.h33(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>' call
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = wrapContentHeight(fillMaxWidth(Companion_instance));
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_2().m7p_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.u32();
      var materialized_1 = materialize($composer_12, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_3().s9e_1;
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_6 = $composer_13.v30();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_13.o31();
      if ($composer_13.j31()) {
        $composer_13.p31(factory_1);
      } else {
        $composer_13.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
        $this$with_1.h33(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>' call
      var $changed_0 = 6 | 112 & 6 >> 6;
      var $composer_15 = $composer_14;
      $composer_15.a31(1468114185);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(!!(!!($composer_0.f32(imageByteArray) | ($dirty & 234881024) === 67108864) | ($dirty & 1879048192) === 536870912) | ($dirty & 57344) === 16384) | ($dirty & 896) === 256) | ($dirty & 3670016) === 1048576) | ($dirty & 458752) === 131072) | ($dirty1 & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_15.w32();
      var tmp_7;
      if (invalid || it === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = MobileInstruments$lambda_1(imageByteArray, imageWidth, imageHeight, scale, cropFraction, offset, rotation, onImageCrop);
        $composer_15.h33(value);
        tmp_7 = value;
      } else {
        tmp_7 = it;
      }
      var tmp_8 = tmp_7;
      var tmp0_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_15.c31();
      cropButton(BoxScopeInstance_instance, tmp0_group, $composer_15, 14 & $changed_0 | 896 & $dirty1 >> 3);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_9 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(32);
      var tmp_10 = height(tmp_9, tmp$ret$12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(96);
      var tmp_11 = BoxScopeInstance_instance.kby(width(tmp_10, tmp$ret$13), Companion_getInstance_2().t7p_1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_12 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(8);
      var tmp_13 = clip(tmp_11, RoundedCornerShape_0(tmp_12, tmp$ret$15));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_14 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(8);
      var tmp_15 = background(tmp_13, colors.qpd_1, RoundedCornerShape_0(tmp_14, tmp$ret$17));
      $composer_15.a31(1468206889);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 29360128) === 8388608 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_15.w32();
      var tmp_16;
      if (invalid_0 || it_0 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = MobileInstruments$lambda_2(onShowInstrumentsChange, showInstruments);
        $composer_15.h33(value_0);
        tmp_16 = value_0;
      } else {
        tmp_16 = it_0;
      }
      var tmp_17 = tmp_16;
      var tmp1_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      $composer_15.c31();
      var modifier_5 = clickable(tmp_15, VOID, VOID, VOID, tmp1_group);
      var contentAlignment_1 = Companion_getInstance_2().q7p_1;
      var propagateMinConstraints_1 = false;
      var $composer_16 = $composer_15;
      sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_5 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_2().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      sourceInformationMarkerStart($composer_17, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_instance;
      var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_17, 0);
      var localMap_2 = $composer_17.u32();
      var materialized_2 = materialize($composer_17, modifier_6);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_2 = Companion_getInstance_3().s9e_1;
      var $composer_18 = $composer_17;
      sourceInformationMarkerStart($composer_18, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_18 = $composer_18.v30();
      if (!isInterface(tmp_18, Applier)) {
        invalidApplier();
      }
      $composer_18.o31();
      if ($composer_18.j31()) {
        $composer_18.p31(factory_2);
      } else {
        $composer_18.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
        $this$with_2.h33(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_19 = $composer_18;
      sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_20 = $composer_19;
      var tmp0_elvis_lhs = icons.ypd_1;
      var tmp1_painter = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_instance) : tmp0_elvis_lhs, $composer_20, 0);
      var tmp2_tint = colors.rpd_1;
      var tmp_19 = Companion_instance;
      $composer_20.a31(-428500648);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_20.f2r(rotationAngle$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_20.w32();
      var tmp_20;
      if (invalid_1 || it_1 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = MobileInstruments$lambda_3(rotationAngle$delegate);
        $composer_20.h33(value_1);
        tmp_20 = value_1;
      } else {
        tmp_20 = it_1;
      }
      var tmp_21 = tmp_20;
      var tmp0_group_0 = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
      $composer_20.c31();
      var tmp3_modifier = graphicsLayer_0(tmp_19, tmp0_group_0);
      Icon(tmp1_painter, null, tmp3_modifier, tmp2_tint, $composer_20, 48, 0);
      sourceInformationMarkerEnd($composer_19);
      $composer_18.u31();
      sourceInformationMarkerEnd($composer_18);
      sourceInformationMarkerEnd($composer_17);
      sourceInformationMarkerEnd($composer_16);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.u31();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_22 = height(fillMaxWidth(Companion_instance), MobileInstruments$lambda(animatedHeight$delegate));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_23 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$29 = _Dp___init__impl__ms3zkb(8);
      var tmp_24 = clip(tmp_22, RoundedCornerShape_0(tmp_23, tmp$ret$29));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_25 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$31 = _Dp___init__impl__ms3zkb(8);
      var modifier_7 = background(tmp_24, colors.qpd_1, RoundedCornerShape_0(tmp_25, tmp$ret$31));
      var contentAlignment_2 = Companion_getInstance_2().q7p_1;
      var propagateMinConstraints_2 = false;
      var $composer_21 = $composer_10;
      sourceInformationMarkerStart($composer_21, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_7 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment_2 = Companion_getInstance_2().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints_2 = false;
      var measurePolicy_3 = maybeCachedBoxMeasurePolicy(contentAlignment_2, propagateMinConstraints_2);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      sourceInformationMarkerStart($composer_22, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_8 = Companion_instance;
      var compositeKeyHash_3 = get_currentCompositeKeyHash($composer_22, 0);
      var localMap_3 = $composer_22.u32();
      var materialized_3 = materialize($composer_22, modifier_8);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_3 = Companion_getInstance_3().s9e_1;
      var $composer_23 = $composer_22;
      sourceInformationMarkerStart($composer_23, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_26 = $composer_23.v30();
      if (!isInterface(tmp_26, Applier)) {
        invalidApplier();
      }
      $composer_23.o31();
      if ($composer_23.j31()) {
        $composer_23.p31(factory_3);
      } else {
        $composer_23.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_3 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_3 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3);
      if ($this$with_3.j31() || !equals($this$with_3.w32(), compositeKeyHash_3)) {
        $this$with_3.h33(compositeKeyHash_3);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3).z31(compositeKeyHash_3, block_3);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_24 = $composer_23;
      sourceInformationMarkerStart($composer_24, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_25 = $composer_24;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var tmp_27 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_28 = _Dp___init__impl__ms3zkb(50);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$35 = _Dp___init__impl__ms3zkb(16);
      var modifier_9 = fillMaxWidth(padding(tmp_27, tmp_28, tmp$ret$35));
      var horizontalArrangement = Arrangement_getInstance().abw_1;
      var verticalAlignment = Companion_getInstance_2().w7p_1;
      var $composer_26 = $composer_25;
      sourceInformationMarkerStart($composer_26, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_9 = Companion_instance;
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().ubv_1;
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_2().v7p_1;
      var measurePolicy_4 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_26, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      sourceInformationMarkerStart($composer_27, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_10 = Companion_instance;
      var compositeKeyHash_4 = get_currentCompositeKeyHash($composer_27, 0);
      var localMap_4 = $composer_27.u32();
      var materialized_4 = materialize($composer_27, modifier_10);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_4 = Companion_getInstance_3().s9e_1;
      var $composer_28 = $composer_27;
      sourceInformationMarkerStart($composer_28, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_29 = $composer_28.v30();
      if (!isInterface(tmp_29, Applier)) {
        invalidApplier();
      }
      $composer_28.o31();
      if ($composer_28.j31()) {
        $composer_28.p31(factory_4);
      } else {
        $composer_28.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_3().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_3().w9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_4 = Companion_getInstance_3().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_4 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4);
      if ($this$with_4.j31() || !equals($this$with_4.w32(), compositeKeyHash_4)) {
        $this$with_4.h33(compositeKeyHash_4);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4).z31(compositeKeyHash_4, block_4);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_3().u9e_1);
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_29 = $composer_28;
      sourceInformationMarkerStart($composer_29, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var $composer_30 = $composer_29;
      $composer_30.a31(-428472755);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_30.w32();
      var tmp_30;
      if (invalid_2 || it_2 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = MobileInstruments$lambda_4(settingInstruments);
        $composer_30.h33(value_2);
        tmp_30 = value_2;
      } else {
        tmp_30 = it_2;
      }
      var tmp_31 = tmp_30;
      var tmp0_group_1 = (tmp_31 == null ? true : !(tmp_31 == null)) ? tmp_31 : THROW_CCE();
      $composer_30.c31();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(517248368, true, MobileInstruments$lambda_5(settingInstruments, icons, colors), $composer_30, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_31 = $composer_30;
      sourceInformationMarkerStart($composer_31, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_31.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_31.w32();
      var tmp_32;
      if (invalid_3 || it_3 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_31.h33(value_3);
        tmp_32 = value_3;
      } else {
        tmp_32 = it_3;
      }
      var tmp_33 = tmp_32;
      var tmp0 = (tmp_33 == null ? true : !(tmp_33 == null)) ? tmp_33 : THROW_CCE();
      sourceInformationMarkerEnd($composer_31);
      IconButton(tmp0_group_1, null, false, null, null, tmp0, $composer_30, 196608, 30);
      $composer_30.a31(-428449429);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_30.w32();
      var tmp_34;
      if (invalid_4 || it_4 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = MobileInstruments$lambda_6(settingInstruments);
        $composer_30.h33(value_4);
        tmp_34 = value_4;
      } else {
        tmp_34 = it_4;
      }
      var tmp_35 = tmp_34;
      var tmp1_group_0 = (tmp_35 == null ? true : !(tmp_35 == null)) ? tmp_35 : THROW_CCE();
      $composer_30.c31();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-762627047, true, MobileInstruments$lambda_7(settingInstruments, icons, colors), $composer_30, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_32 = $composer_30;
      sourceInformationMarkerStart($composer_32, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = $composer_32.f2r(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_32.w32();
      var tmp_36;
      if (invalid_5 || it_5 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_5 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
        $composer_32.h33(value_5);
        tmp_36 = value_5;
      } else {
        tmp_36 = it_5;
      }
      var tmp_37 = tmp_36;
      var tmp0_0 = (tmp_37 == null ? true : !(tmp_37 == null)) ? tmp_37 : THROW_CCE();
      sourceInformationMarkerEnd($composer_32);
      IconButton(tmp1_group_0, null, false, null, null, tmp0_0, $composer_30, 196608, 30);
      $composer_30.a31(-428425359);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_30.w32();
      var tmp_38;
      if (invalid_6 || it_6 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_6 = MobileInstruments$lambda_8(settingInstruments);
        $composer_30.h33(value_6);
        tmp_38 = value_6;
      } else {
        tmp_38 = it_6;
      }
      var tmp_39 = tmp_38;
      var tmp2_group = (tmp_39 == null ? true : !(tmp_39 == null)) ? tmp_39 : THROW_CCE();
      $composer_30.c31();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-2008534984, true, MobileInstruments$lambda_9(settingInstruments, icons, colors), $composer_30, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_33 = $composer_30;
      sourceInformationMarkerStart($composer_33, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_7 = $composer_33.f2r(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_33.w32();
      var tmp_40;
      if (invalid_7 || it_7 === Companion_getInstance_0().l2u_1) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_7 = ComposableLambda$invoke$ref_1(dispatchReceiver_1);
        $composer_33.h33(value_7);
        tmp_40 = value_7;
      } else {
        tmp_40 = it_7;
      }
      var tmp_41 = tmp_40;
      var tmp0_1 = (tmp_41 == null ? true : !(tmp_41 == null)) ? tmp_41 : THROW_CCE();
      sourceInformationMarkerEnd($composer_33);
      IconButton(tmp2_group, null, false, null, null, tmp0_1, $composer_30, 196608, 30);
      sourceInformationMarkerEnd($composer_29);
      $composer_28.u31();
      sourceInformationMarkerEnd($composer_28);
      sourceInformationMarkerEnd($composer_27);
      sourceInformationMarkerEnd($composer_26);
      sourceInformationMarkerEnd($composer_24);
      $composer_23.u31();
      sourceInformationMarkerEnd($composer_23);
      sourceInformationMarkerEnd($composer_22);
      sourceInformationMarkerEnd($composer_21);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u31();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.u31();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp0_safe_receiver = $composer_0.w33();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n38(MobileInstruments$lambda_10(_this__u8e3s4, showInstruments, cropFraction, imageByteArray, scale, rotation, offset, onShowInstrumentsChange, imageWidth, imageHeight, settingInstruments, icons, colors, cropButton, onImageCrop, $changed, $changed1));
    }
  }
  function ImageCropper$lambda($imageWidth$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $imageWidth$delegate.c1();
  }
  function ImageCropper$lambda_0($imageWidth$delegate, _set____db54di) {
    getLocalDelegateReference('imageWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $imageWidth$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function ImageCropper$lambda_1($imageHeight$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageHeight', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $imageHeight$delegate.c1();
  }
  function ImageCropper$lambda_2($imageHeight$delegate, _set____db54di) {
    getLocalDelegateReference('imageHeight', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $imageHeight$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function ImageCropper$lambda_3($scale$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scale$delegate.c1();
  }
  function ImageCropper$lambda_4($scale$delegate, _set____db54di) {
    getLocalDelegateReference('scale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $scale$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function ImageCropper$lambda_5($offset$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('offset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offset$delegate.c1().n5g_1;
  }
  function ImageCropper$lambda_6($offset$delegate, _set____db54di) {
    getLocalDelegateReference('offset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var value = new Offset(_set____db54di);
    $offset$delegate.a1y(value);
    return Unit_instance;
  }
  function ImageCropper$lambda_7($rotation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('rotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $rotation$delegate.c1();
  }
  function ImageCropper$lambda_8($rotation$delegate, _set____db54di) {
    getLocalDelegateReference('rotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $rotation$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function ImageCropper$lambda_9($showInstruments$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showInstruments', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $showInstruments$delegate.c1();
  }
  function ImageCropper$lambda_10($showInstruments$delegate, _set____db54di) {
    getLocalDelegateReference('showInstruments', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $showInstruments$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function MobileInstruments$lambda($animatedHeight$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedHeight', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animatedHeight$delegate.c1().u5i_1;
  }
  function MobileInstruments$lambda_0($rotationAngle$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('rotationAngle', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $rotationAngle$delegate.c1();
  }
  function ImageCropper$lambda_11($settingInstruments, $scale$delegate, $offset$delegate, $rotation$delegate) {
    return function (zoom, pan, rotate) {
      var tmp;
      if ($settingInstruments.s2(Instruments_Zoom_getInstance()) === true) {
        ImageCropper$lambda_4($scale$delegate, coerceIn(ImageCropper$lambda_3($scale$delegate) * zoom, 0.2, 10.0));
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($settingInstruments.s2(Instruments_Pan_getInstance()) === true) {
        ImageCropper$lambda_6($offset$delegate, Offset__plus_impl_c78cg0(ImageCropper$lambda_5($offset$delegate), pan.n5g_1));
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if ($settingInstruments.s2(Instruments_Rotate_getInstance()) === true) {
        ImageCropper$lambda_8($rotation$delegate, ImageCropper$lambda_7($rotation$delegate) + rotate);
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ImageCropper$lambda_12($imageWidth$delegate, $imageHeight$delegate) {
    return function (layoutCoordinates) {
      ImageCropper$lambda_0($imageWidth$delegate, _IntSize___get_width__impl__d9yl4o(layoutCoordinates.r7w()));
      ImageCropper$lambda_2($imageHeight$delegate, _IntSize___get_height__impl__prv63b(layoutCoordinates.r7w()));
      return Unit_instance;
    };
  }
  function ImageCropper$lambda_13($greedCells) {
    return function ($this$Canvas) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var strokeWidth = $this$Canvas.e5i(tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
      var padding = $this$Canvas.e5i(tmp$ret$1);
      var width = _Size___get_width__impl__58y75t($this$Canvas.z5g()) - 2 * padding;
      var height = _Size___get_height__impl__a04p02($this$Canvas.z5g()) - 2 * padding;
      var stepX = width / $greedCells._v;
      var stepY = height / $greedCells._v;
      var lineColor = Color__copy$default_impl_ectz3s(Companion_getInstance().d68_1, 0.6);
      var inductionVariable = 1;
      var last = $greedCells._v;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var x = padding + stepX * i;
          $this$Canvas.x6k(lineColor, Offset_0(x, padding), Offset_0(x, _Size___get_height__impl__a04p02($this$Canvas.z5g()) - padding), strokeWidth);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      var inductionVariable_0 = 1;
      var last_0 = $greedCells._v;
      var tmp_0;
      if (inductionVariable_0 < last_0) {
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var y = padding + stepY * i_0;
          $this$Canvas.x6k(lineColor, Offset_0(padding, y), Offset_0(_Size___get_width__impl__58y75t($this$Canvas.z5g()) - padding, y), strokeWidth);
        }
         while (inductionVariable_0 < last_0);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ImageCropper$lambda_14($showInstruments$delegate) {
    return function (it) {
      ImageCropper$lambda_10($showInstruments$delegate, it);
      return Unit_instance;
    };
  }
  function ImageCropper$lambda_15($image, $ratio, $shape, $greedCells, $cropFraction, $icons, $colors, $cropButton, $onImageCrop, $$changed, $$default) {
    return function ($composer, $force) {
      ImageCropper($image, $ratio._v, $shape._v, $greedCells._v, $cropFraction._v, $icons._v, $colors._v, $cropButton, $onImageCrop, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda$lambda($onImageCrop) {
    return function (byteArray) {
      $onImageCrop(byteArray);
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda_1($imageByteArray, $imageWidth, $imageHeight, $scale, $cropFraction, $offset, $rotation, $onImageCrop) {
    return function () {
      var tmp = $scale * calculateScaleFraction($cropFraction);
      var tmp_0 = Offset_0(_Offset___get_x__impl__xvi35n($offset) * calculateScaleFraction($cropFraction), _Offset___get_y__impl__8bzhra($offset) * calculateScaleFraction($cropFraction));
      var tmp_1 = Companion_getInstance().z67_1;
      cropImage($imageByteArray, $imageWidth, $imageHeight, tmp, tmp_0, $rotation, tmp_1, MobileInstruments$lambda$lambda($onImageCrop));
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda_2($onShowInstrumentsChange, $showInstruments) {
    return function () {
      $onShowInstrumentsChange(!$showInstruments);
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda_3($rotationAngle$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.x6u(MobileInstruments$lambda_0($rotationAngle$delegate));
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda_4($settingInstruments) {
    return function () {
      var this_0 = $settingInstruments;
      var key = Instruments_Zoom_getInstance();
      var value = !ensureNotNull($settingInstruments.s2(Instruments_Zoom_getInstance()));
      this_0.k2(key, value);
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda_5($settingInstruments, $icons, $colors) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(517248368, $changed, -1, 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ImageCropper.kt:359)');
        }
        var tmp_0;
        if ($settingInstruments.s2(Instruments_Zoom_getInstance()) === true) {
          $composer_0.a31(-1340834715);
          var tmp0_elvis_lhs = $icons.spd_1;
          var tmp0_group = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_instance) : tmp0_elvis_lhs, $composer_0, 0);
          $composer_0.c31();
          tmp_0 = tmp0_group;
        } else {
          $composer_0.a31(-1340830519);
          var tmp1_elvis_lhs = $icons.tpd_1;
          var tmp1_group = painterResource(tmp1_elvis_lhs == null ? get_compose_multiplatform(drawable_instance) : tmp1_elvis_lhs, $composer_0, 0);
          $composer_0.c31();
          tmp_0 = tmp1_group;
        }
        var tmp_1 = tmp_0;
        Icon(tmp_1, null, null, $colors.rpd_1, $composer_0, 48, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function MobileInstruments$lambda_6($settingInstruments) {
    return function () {
      var this_0 = $settingInstruments;
      var key = Instruments_Pan_getInstance();
      var value = !ensureNotNull($settingInstruments.s2(Instruments_Pan_getInstance()));
      this_0.k2(key, value);
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda_7($settingInstruments, $icons, $colors) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-762627047, $changed, -1, 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ImageCropper.kt:373)');
        }
        var tmp_0;
        if ($settingInstruments.s2(Instruments_Pan_getInstance()) === true) {
          $composer_0.a31(-1340811484);
          var tmp0_elvis_lhs = $icons.upd_1;
          var tmp0_group = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_instance) : tmp0_elvis_lhs, $composer_0, 0);
          $composer_0.c31();
          tmp_0 = tmp0_group;
        } else {
          $composer_0.a31(-1340806424);
          var tmp1_elvis_lhs = $icons.vpd_1;
          var tmp1_group = painterResource(tmp1_elvis_lhs == null ? get_compose_multiplatform(drawable_instance) : tmp1_elvis_lhs, $composer_0, 0);
          $composer_0.c31();
          tmp_0 = tmp1_group;
        }
        var tmp_1 = tmp_0;
        Icon(tmp_1, null, null, $colors.rpd_1, $composer_0, 48, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
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
  function MobileInstruments$lambda_8($settingInstruments) {
    return function () {
      var this_0 = $settingInstruments;
      var key = Instruments_Rotate_getInstance();
      var value = !ensureNotNull($settingInstruments.s2(Instruments_Rotate_getInstance()));
      this_0.k2(key, value);
      return Unit_instance;
    };
  }
  function MobileInstruments$lambda_9($settingInstruments, $icons, $colors) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(-2008534984, $changed, -1, 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ImageCropper.kt:388)');
        }
        var tmp_0;
        if ($settingInstruments.s2(Instruments_Rotate_getInstance()) === true) {
          $composer_0.a31(-1340787129);
          var tmp0_elvis_lhs = $icons.wpd_1;
          var tmp0_group = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_instance) : tmp0_elvis_lhs, $composer_0, 0);
          $composer_0.c31();
          tmp_0 = tmp0_group;
        } else {
          $composer_0.a31(-1340782869);
          var tmp1_elvis_lhs = $icons.xpd_1;
          var tmp1_group = painterResource(tmp1_elvis_lhs == null ? get_compose_multiplatform(drawable_instance) : tmp1_elvis_lhs, $composer_0, 0);
          $composer_0.c31();
          tmp_0 = tmp1_group;
        }
        var tmp_1 = tmp_0;
        Icon(tmp_1, null, null, $colors.rpd_1, $composer_0, 48, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.s30(p0, p1);
    };
  }
  function MobileInstruments$lambda_10($this_MobileInstruments, $showInstruments, $cropFraction, $imageByteArray, $scale, $rotation, $offset, $onShowInstrumentsChange, $imageWidth, $imageHeight, $settingInstruments, $icons, $colors, $cropButton, $onImageCrop, $$changed, $$changed1) {
    return function ($composer, $force) {
      MobileInstruments($this_MobileInstruments, $showInstruments, $cropFraction, $imageByteArray, $scale, $rotation, $offset, $onShowInstrumentsChange, $imageWidth, $imageHeight, $settingInstruments, $icons, $colors, $cropButton, $onImageCrop, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  var Instruments_Zoom_instance;
  var Instruments_Pan_instance;
  var Instruments_Rotate_instance;
  var Instruments_entriesInitialized;
  function Instruments_initEntries() {
    if (Instruments_entriesInitialized)
      return Unit_instance;
    Instruments_entriesInitialized = true;
    Instruments_Zoom_instance = new Instruments('Zoom', 0);
    Instruments_Pan_instance = new Instruments('Pan', 1);
    Instruments_Rotate_instance = new Instruments('Rotate', 2);
  }
  function Instruments(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Instruments_Zoom_getInstance() {
    Instruments_initEntries();
    return Instruments_Zoom_instance;
  }
  function Instruments_Pan_getInstance() {
    Instruments_initEntries();
    return Instruments_Pan_instance;
  }
  function Instruments_Rotate_getInstance() {
    Instruments_initEntries();
    return Instruments_Rotate_instance;
  }
  function toBitmap(_this__u8e3s4) {
    return toComposeImageBitmap(Companion_getInstance_5().w5r(_this__u8e3s4));
  }
  function cropImage(imageBytes, width, height, imageScale, imageOffset, imageRotation, background, callback) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [imageBytes];
    // Inline function 'org.w3c.files.BlobPropertyBag' call
    var type = 'image/jpeg';
    var o = {};
    o['type'] = type;
    var blob = new Blob(tmp, o);
    var url = URL.createObjectURL(blob);
    var tmp_0 = document.createElement('img');
    var img = tmp_0 instanceof HTMLImageElement ? tmp_0 : THROW_CCE();
    img.src = url;
    img.onload = cropImage$lambda(url, img, width, height, imageScale, background, imageRotation, imageOffset, callback);
  }
  function colorToCssRgba(color) {
    var r = coerceIn_0(numberToInt(_Color___get_red__impl__cwrsk6(color) * 255), 0, 255);
    var g = coerceIn_0(numberToInt(_Color___get_green__impl__bta9rs(color) * 255), 0, 255);
    var b = coerceIn_0(numberToInt(_Color___get_blue__impl__xwez13(color) * 255), 0, 255);
    var a = coerceIn(_Color___get_alpha__impl__wcfyv1(color), 0.0, 1.0);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  }
  function cropImage$lambda$lambda$lambda($reader, $callback) {
    return function (it) {
      var tmp = $reader.result;
      var result = tmp instanceof ArrayBuffer ? tmp : THROW_CCE();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var byteArray = new Int8Array(result);
      $callback(byteArray);
      return Unit_instance;
    };
  }
  function cropImage$lambda$lambda($callback) {
    return function (blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(ensureNotNull(blob));
      reader.onloadend = cropImage$lambda$lambda$lambda(reader, $callback);
      return Unit_instance;
    };
  }
  function cropImage$lambda($url, $img, $width, $height, $imageScale, $background, $imageRotation, $imageOffset, $callback) {
    return function (it) {
      URL.revokeObjectURL($url);
      var originalWidth = $img.width;
      var originalHeight = $img.height;
      var targetWidth = $width;
      var targetHeight = $height;
      var imageAspectRatio = originalWidth / originalHeight;
      var canvasAspectRatio = targetWidth / targetHeight;
      var baseDrawWidth;
      var baseDrawHeight;
      var tmp;
      if (imageAspectRatio > canvasAspectRatio) {
        baseDrawWidth = targetWidth;
        baseDrawHeight = baseDrawWidth / imageAspectRatio;
        tmp = Unit_instance;
      } else {
        baseDrawHeight = targetHeight;
        baseDrawWidth = baseDrawHeight * imageAspectRatio;
        tmp = Unit_instance;
      }
      var drawWidth = baseDrawWidth * $imageScale;
      var drawHeight = baseDrawHeight * $imageScale;
      var tmp_0 = document.createElement('canvas');
      var canvas = tmp_0 instanceof HTMLCanvasElement ? tmp_0 : THROW_CCE();
      canvas.width = $width;
      canvas.height = $height;
      var tmp_1 = canvas.getContext('2d');
      var ctx = tmp_1 instanceof CanvasRenderingContext2D ? tmp_1 : THROW_CCE();
      ctx.clearRect(0.0, 0.0, $width, $height);
      ctx.fillStyle = 'white';
      ctx.fillRect(0.0, 0.0, canvas.width, canvas.height);
      ctx.fillStyle = colorToCssRgba($background);
      ctx.fillRect(0.0, 0.0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2 | 0, canvas.height / 2 | 0);
      ctx.rotate($imageRotation * 3.141592653589793 / 180.0);
      ctx.drawImage($img, -drawWidth / 2 + _Offset___get_x__impl__xvi35n($imageOffset), -drawHeight / 2 + _Offset___get_y__impl__8bzhra($imageOffset), drawWidth, drawHeight);
      ctx.restore();
      canvas.toBlob(cropImage$lambda$lambda($callback), 'image/jpeg', 1.0);
      return Unit_instance;
    };
  }
  function transformGestures(_this__u8e3s4, enabled, transform) {
    enabled = enabled === VOID ? true : enabled;
    return Companion_instance;
  }
  //region block: init
  avatarcropper_imagecropper2_generated_resources_Res_drawable$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_string$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_array$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_plurals$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_font$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res$stable = 0;
  drawable_instance = new drawable();
  team_platforma_imagecropper2_CropperColors$stable = 0;
  team_platforma_imagecropper2_CropperIcons$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CropperColors;
  _.$_$.b = CropperIcons;
  _.$_$.c = ImageCropper;
  //endregion
  return _;
}));

//# sourceMappingURL=AvatarCropper-imagecropper2.js.map
