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
  var lazy = kotlin_kotlin.$_$.rp;
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var emptySet = kotlin_kotlin.$_$.ga;
  var Long = kotlin_kotlin.$_$.fo;
  var ResourceItem = kotlin_components_resources_library.$_$.e;
  var setOf = kotlin_kotlin.$_$.ad;
  var DrawableResource = kotlin_components_resources_library.$_$.b;
  var KProperty1 = kotlin_kotlin.$_$.uj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zg;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r4;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var equals = kotlin_kotlin.$_$.sg;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var toString = kotlin_kotlin.$_$.eq;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var to = kotlin_kotlin.$_$.fq;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.tb;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.sb;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.aa;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.nb;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.sh;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x1;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var aspectRatio = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.ab;
  var blur = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i4;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t1;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w1;
  var Canvas = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v1;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u1;
  var animateDpAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var animateFloatAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  var wrapContentHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r1;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p1;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y1;
  var painterResource = kotlin_components_resources_library.$_$.h;
  var graphicsLayer_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z1;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var IconButton = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.rj;
  var THROW_ISE = kotlin_kotlin.$_$.po;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xg;
  var KProperty0 = kotlin_kotlin.$_$.tj;
  var coerceIn = kotlin_kotlin.$_$.jj;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var ensureNotNull = kotlin_kotlin.$_$.jp;
  var THROW_IAE = kotlin_kotlin.$_$.oo;
  var enumEntries = kotlin_kotlin.$_$.cg;
  var Enum = kotlin_kotlin.$_$.zn;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var numberToInt = kotlin_kotlin.$_$.gi;
  var coerceIn_0 = kotlin_kotlin.$_$.kj;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForClass(CropperColors, 'CropperColors', CropperColors);
  initMetadataForClass(CropperIcons, 'CropperIcons', CropperIcons);
  initMetadataForClass(Instruments, 'Instruments', VOID, Enum);
  //endregion
  function _collectCommonMainDrawable0Resources(map) {
    map.put_4fpzoq_k$('compose_multiplatform', CommonMainDrawable0_getInstance().get_compose_multiplatform_u35ml2_k$());
  }
  function CommonMainDrawable0$compose_multiplatform$delegate$lambda() {
    return init_compose_multiplatform();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.compose_multiplatform$delegate_1 = lazy(CommonMainDrawable0$compose_multiplatform$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).get_compose_multiplatform_u35ml2_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.compose_multiplatform$delegate_1;
    compose_multiplatform$factory();
    return this_0.get_value_j01efc_k$();
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
    return CommonMainDrawable0_getInstance().get_compose_multiplatform_u35ml2_k$();
  }
  function compose_multiplatform$factory() {
    return getPropertyCallableRef('compose_multiplatform', 1, KProperty1, function (receiver) {
      return receiver.get_compose_multiplatform_u35ml2_k$();
    }, null);
  }
  var avatarcropper_imagecropper2_generated_resources_Res_drawable$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_string$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_array$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_plurals$stable;
  var avatarcropper_imagecropper2_generated_resources_Res_font$stable;
  var avatarcropper_imagecropper2_generated_resources_Res$stable;
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function array() {
    array_instance = this;
  }
  var array_instance;
  function array_getInstance() {
    if (array_instance == null)
      new array();
    return array_instance;
  }
  function plurals() {
    plurals_instance = this;
  }
  var plurals_instance;
  function plurals_getInstance() {
    if (plurals_instance == null)
      new plurals();
    return plurals_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes('composeResources/avatarcropper.imagecropper2.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/avatarcropper.imagecropper2.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function get_allDrawableResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allDrawableResources$delegate;
    allDrawableResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allDrawableResources$delegate;
  function get_allStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringResources$delegate;
    allStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringResources$delegate;
  function get_allStringArrayResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringArrayResources$delegate;
    allStringArrayResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringArrayResources$delegate;
  function get_allPluralStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allPluralStringResources$delegate;
    allPluralStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allPluralStringResources$delegate;
  function get_allFontResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allFontResources$delegate;
    allFontResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allFontResources$delegate;
  function allDrawableResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    _collectCommonMainDrawable0Resources(map);
    return map;
  }
  function allStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allStringArrayResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allPluralStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allFontResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allDrawableResources$factory() {
    return getPropertyCallableRef('allDrawableResources', 1, KProperty1, function (receiver) {
      return get_allDrawableResources(receiver);
    }, null);
  }
  function allStringResources$factory() {
    return getPropertyCallableRef('allStringResources', 1, KProperty1, function (receiver) {
      return get_allStringResources(receiver);
    }, null);
  }
  function allStringArrayResources$factory() {
    return getPropertyCallableRef('allStringArrayResources', 1, KProperty1, function (receiver) {
      return get_allStringArrayResources(receiver);
    }, null);
  }
  function allPluralStringResources$factory() {
    return getPropertyCallableRef('allPluralStringResources', 1, KProperty1, function (receiver) {
      return get_allPluralStringResources(receiver);
    }, null);
  }
  function allFontResources$factory() {
    return getPropertyCallableRef('allFontResources', 1, KProperty1, function (receiver) {
      return get_allFontResources(receiver);
    }, null);
  }
  var properties_initialized_ActualResourceCollectors_kt_vf8u04;
  function _init_properties_ActualResourceCollectors_kt__u9rwji() {
    if (!properties_initialized_ActualResourceCollectors_kt_vf8u04) {
      properties_initialized_ActualResourceCollectors_kt_vf8u04 = true;
      allDrawableResources$delegate = lazy(allDrawableResources$delegate$lambda);
      allStringResources$delegate = lazy(allStringResources$delegate$lambda);
      allStringArrayResources$delegate = lazy(allStringArrayResources$delegate$lambda);
      allPluralStringResources$delegate = lazy(allPluralStringResources$delegate$lambda);
      allFontResources$delegate = lazy(allFontResources$delegate$lambda);
    }
  }
  var team_platforma_imagecropper2_CropperColors$stable;
  function CropperColors(instruments, icons) {
    instruments = instruments === VOID ? Companion_getInstance().get_Black_t4k9fh_k$() : instruments;
    icons = icons === VOID ? Companion_getInstance().get_White_xpp3qf_k$() : icons;
    this.instruments_1 = instruments;
    this.icons_1 = icons;
  }
  protoOf(CropperColors).get_instruments_64t2ga_k$ = function () {
    return this.instruments_1;
  };
  protoOf(CropperColors).get_icons_s1sl9k_k$ = function () {
    return this.icons_1;
  };
  protoOf(CropperColors).component1_9lkot7_k$ = function () {
    return this.instruments_1;
  };
  protoOf(CropperColors).component2_ekm1j8_k$ = function () {
    return this.icons_1;
  };
  protoOf(CropperColors).copy_u9gp3j_k$ = function (instruments, icons) {
    return new CropperColors(instruments, icons);
  };
  protoOf(CropperColors).copy$default_66vw5o_k$ = function (instruments, icons, $super) {
    instruments = instruments === VOID ? this.instruments_1 : instruments;
    icons = icons === VOID ? this.icons_1 : icons;
    return $super === VOID ? this.copy_u9gp3j_k$(instruments, icons) : $super.copy_u9gp3j_k$.call(this, new Color(instruments), new Color(icons));
  };
  protoOf(CropperColors).toString = function () {
    return 'CropperColors(instruments=' + Color__toString_impl_hpzmaq(this.instruments_1) + ', icons=' + Color__toString_impl_hpzmaq(this.icons_1) + ')';
  };
  protoOf(CropperColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.instruments_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.icons_1) | 0;
    return result;
  };
  protoOf(CropperColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropperColors))
      return false;
    var tmp0_other_with_cast = other instanceof CropperColors ? other : THROW_CCE();
    if (!equals(this.instruments_1, tmp0_other_with_cast.instruments_1))
      return false;
    if (!equals(this.icons_1, tmp0_other_with_cast.icons_1))
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
    this.size_1 = size;
    this.noSize_1 = noSize;
    this.pan_1 = pan;
    this.noPan_1 = noPan;
    this.rotate_1 = rotate;
    this.noRotate_1 = noRotate;
    this.instruments_1 = instruments;
  }
  protoOf(CropperIcons).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(CropperIcons).get_noSize_h76xkb_k$ = function () {
    return this.noSize_1;
  };
  protoOf(CropperIcons).get_pan_18iymk_k$ = function () {
    return this.pan_1;
  };
  protoOf(CropperIcons).get_noPan_ivve9f_k$ = function () {
    return this.noPan_1;
  };
  protoOf(CropperIcons).get_rotate_j3ybms_k$ = function () {
    return this.rotate_1;
  };
  protoOf(CropperIcons).get_noRotate_ll1i2j_k$ = function () {
    return this.noRotate_1;
  };
  protoOf(CropperIcons).get_instruments_j0ygw3_k$ = function () {
    return this.instruments_1;
  };
  protoOf(CropperIcons).component1_7eebsc_k$ = function () {
    return this.size_1;
  };
  protoOf(CropperIcons).component2_7eebsb_k$ = function () {
    return this.noSize_1;
  };
  protoOf(CropperIcons).component3_7eebsa_k$ = function () {
    return this.pan_1;
  };
  protoOf(CropperIcons).component4_7eebs9_k$ = function () {
    return this.noPan_1;
  };
  protoOf(CropperIcons).component5_7eebs8_k$ = function () {
    return this.rotate_1;
  };
  protoOf(CropperIcons).component6_7eebs7_k$ = function () {
    return this.noRotate_1;
  };
  protoOf(CropperIcons).component7_7eebs6_k$ = function () {
    return this.instruments_1;
  };
  protoOf(CropperIcons).copy_d4s5rz_k$ = function (size, noSize, pan, noPan, rotate, noRotate, instruments) {
    return new CropperIcons(size, noSize, pan, noPan, rotate, noRotate, instruments);
  };
  protoOf(CropperIcons).copy$default_70atql_k$ = function (size, noSize, pan, noPan, rotate, noRotate, instruments, $super) {
    size = size === VOID ? this.size_1 : size;
    noSize = noSize === VOID ? this.noSize_1 : noSize;
    pan = pan === VOID ? this.pan_1 : pan;
    noPan = noPan === VOID ? this.noPan_1 : noPan;
    rotate = rotate === VOID ? this.rotate_1 : rotate;
    noRotate = noRotate === VOID ? this.noRotate_1 : noRotate;
    instruments = instruments === VOID ? this.instruments_1 : instruments;
    return $super === VOID ? this.copy_d4s5rz_k$(size, noSize, pan, noPan, rotate, noRotate, instruments) : $super.copy_d4s5rz_k$.call(this, size, noSize, pan, noPan, rotate, noRotate, instruments);
  };
  protoOf(CropperIcons).toString = function () {
    return 'CropperIcons(size=' + toString(this.size_1) + ', noSize=' + toString(this.noSize_1) + ', pan=' + toString(this.pan_1) + ', noPan=' + toString(this.noPan_1) + ', rotate=' + toString(this.rotate_1) + ', noRotate=' + toString(this.noRotate_1) + ', instruments=' + toString(this.instruments_1) + ')';
  };
  protoOf(CropperIcons).hashCode = function () {
    var result = this.size_1 == null ? 0 : this.size_1.hashCode();
    result = imul(result, 31) + (this.noSize_1 == null ? 0 : this.noSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.pan_1 == null ? 0 : this.pan_1.hashCode()) | 0;
    result = imul(result, 31) + (this.noPan_1 == null ? 0 : this.noPan_1.hashCode()) | 0;
    result = imul(result, 31) + (this.rotate_1 == null ? 0 : this.rotate_1.hashCode()) | 0;
    result = imul(result, 31) + (this.noRotate_1 == null ? 0 : this.noRotate_1.hashCode()) | 0;
    result = imul(result, 31) + (this.instruments_1 == null ? 0 : this.instruments_1.hashCode()) | 0;
    return result;
  };
  protoOf(CropperIcons).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CropperIcons))
      return false;
    var tmp0_other_with_cast = other instanceof CropperIcons ? other : THROW_CCE();
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.noSize_1, tmp0_other_with_cast.noSize_1))
      return false;
    if (!equals(this.pan_1, tmp0_other_with_cast.pan_1))
      return false;
    if (!equals(this.noPan_1, tmp0_other_with_cast.noPan_1))
      return false;
    if (!equals(this.rotate_1, tmp0_other_with_cast.rotate_1))
      return false;
    if (!equals(this.noRotate_1, tmp0_other_with_cast.noRotate_1))
      return false;
    if (!equals(this.instruments_1, tmp0_other_with_cast.instruments_1))
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(581257338);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(image) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(ratio_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.changed_ga7h3f_k$(shape_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(greedCells_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(cropFraction_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.changed_ga7h3f_k$(icons_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.changed_ga7h3f_k$(colors_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(cropButton) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onImageCrop) ? 67108864 : 33554432);
    if (!(($dirty & 38347923) === 38347922) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
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
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(581257338, $dirty, -1, 'team.platforma.imagecropper2.ImageCropper (ImageCropper.kt:65)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1859977231);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value = mutableStateOf(0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var imageWidth$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1859978959);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_0 = mutableStateOf(0);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var imageHeight$delegate = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1859980560);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_1 = mutableStateOf(1.0);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var scale$delegate = tmp2_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1859982169);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_2 = mutableStateOf(new Offset(Companion_getInstance_1().get_Zero_k6n73t_k$()));
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var offset$delegate = tmp3_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1859984112);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_4.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_3 = mutableStateOf(0.0);
        this_4.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var rotation$delegate = tmp4_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1859986035);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_5.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (false || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_4 = mutableStateOf(false);
        this_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var showInstruments$delegate = tmp5_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1859988224);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_6.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
        var value_5 = mutableStateMapOf([to(Instruments_Zoom_getInstance(), true), to(Instruments_Pan_getInstance(), true), to(Instruments_Rotate_getInstance(), true)]);
        this_6.updateRememberedValue_l1wh71_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var settingInstruments = tmp6_group;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = null;
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((7 & 1) === 0))
        modifier = Companion_getInstance_2();
      if (!((7 & 2) === 0))
        contentAlignment = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!((7 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_2();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_13 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>' call
      var $this$Box = BoxScopeInstance_getInstance();
      var $changed_0 = 6 | 112 & 0 >> 6;
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var tmp_14 = fillMaxSize(Companion_getInstance_2());
      $composer_5.startReplaceGroup_5hh8aj_k$(313330984);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (false || it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>' call
        var value_6 = ImageCropper$lambda_11(settingInstruments, scale$delegate, offset$delegate, rotation$delegate);
        $composer_5.updateRememberedValue_l1wh71_k$(value_6);
        tmp_15 = value_6;
      } else {
        tmp_15 = it_6;
      }
      var tmp_16 = tmp_15;
      var tmp0_group_0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      var modifier_1 = transformGestures(tmp_14, true, tmp0_group_0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_2();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_3().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_2();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_17 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_17, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>' call
      var $this$Column = ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_18 = aspectRatio(fillMaxWidth(Companion_getInstance_2()), ratio_0._v);
      $composer_10.startReplaceGroup_5hh8aj_k$(266162517);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_19;
      if (false || it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>' call
        var value_7 = ImageCropper$lambda_12(imageWidth$delegate, imageHeight$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_7);
        tmp_19 = value_7;
      } else {
        tmp_19 = it_7;
      }
      var tmp_20 = tmp_19;
      var tmp0_group_1 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_10.endReplaceGroup_ek144q_k$();
      var modifier_3 = onGloballyPositioned(tmp_18, tmp0_group_1);
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_2();
      if (!((6 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_2();
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_21 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_21, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(factory_1);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.get_inserting_25mlsw_k$() || !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
        $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>' call
      var $this$Box_0 = BoxScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      var tmp_22 = toBitmap(image);
      var tmp_23 = graphicsLayer(fillMaxSize(Companion_getInstance_2()), ImageCropper$lambda_3(scale$delegate), ImageCropper$lambda_3(scale$delegate), VOID, _Offset___get_x__impl__xvi35n(ImageCropper$lambda_5(offset$delegate)), _Offset___get_y__impl__8bzhra(ImageCropper$lambda_5(offset$delegate)), VOID, VOID, VOID, ImageCropper$lambda_7(rotation$delegate));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$42 = _Dp___init__impl__ms3zkb(5);
      var tmp_24 = blur(tmp_23, tmp$ret$42, Companion_getInstance_5().get_Unbounded_h84q0t_k$());
      Image(tmp_22, null, tmp_24, null, null, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_15, 48, 248);
      Box(background(fillMaxSize(Companion_getInstance_2()), Color__copy$default_impl_ectz3s(Companion_getInstance().get_LightGray_9g8v13_k$(), 0.5)), $composer_15, 6);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp0_$receiver = clip(aspectRatio(fillMaxSize(Companion_getInstance_2(), cropFraction_0._v), ratio_0._v), shape_0._v);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1_width = _Dp___init__impl__ms3zkb(1);
      var tmp2_color = Color__copy$default_impl_ectz3s(Companion_getInstance().get_White_xpp3qf_k$(), 0.6);
      var modifier_5 = $this$Box_0.align_uxv7cf_k$(background(border(tmp0_$receiver, tmp1_width, tmp2_color, shape_0._v), Companion_getInstance().get_Transparent_if5ln4_k$()), Companion_getInstance_3().get_Center_3arb0i_k$());
      var contentAlignment_1 = null;
      var propagateMinConstraints_1 = false;
      var $composer_16 = $composer_15;
      sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_5 = Companion_getInstance_2();
      if (!((6 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      sourceInformationMarkerStart($composer_17, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_2();
      var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_17, 0);
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_2 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_18 = $composer_17;
      sourceInformationMarkerStart($composer_18, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_25 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_25, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(factory_2);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      if ($this$with_2.get_inserting_25mlsw_k$() || !equals($this$with_2.rememberedValue_4dg93v_k$(), compositeKeyHash_2)) {
        $this$with_2.updateRememberedValue_l1wh71_k$(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).apply_pk82p8_k$(compositeKeyHash_2, block_2);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_19 = $composer_18;
      sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      var tmp_26 = toBitmap(image);
      var tmp_27 = graphicsLayer(fillMaxSize(Companion_getInstance_2()), ImageCropper$lambda_3(scale$delegate) * calculateScaleFraction(cropFraction_0._v), ImageCropper$lambda_3(scale$delegate) * calculateScaleFraction(cropFraction_0._v), VOID, _Offset___get_x__impl__xvi35n(ImageCropper$lambda_5(offset$delegate)), _Offset___get_y__impl__8bzhra(ImageCropper$lambda_5(offset$delegate)), VOID, VOID, VOID, ImageCropper$lambda_7(rotation$delegate));
      Image(tmp_26, null, tmp_27, null, null, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_20, 48, 248);
      var tmp_28 = fillMaxSize(Companion_getInstance_2());
      $composer_20.startReplaceGroup_5hh8aj_k$(-1953105730);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_20.rememberedValue_4dg93v_k$();
      var tmp_29;
      if (invalid || it_8 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_8 = ImageCropper$lambda_13(greedCells_0);
        $composer_20.updateRememberedValue_l1wh71_k$(value_8);
        tmp_29 = value_8;
      } else {
        tmp_29 = it_8;
      }
      var tmp_30 = tmp_29;
      var tmp0_group_2 = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
      $composer_20.endReplaceGroup_ek144q_k$();
      Canvas(tmp_28, tmp0_group_2, $composer_20, 6);
      sourceInformationMarkerEnd($composer_19);
      $composer_18.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_18);
      sourceInformationMarkerEnd($composer_17);
      sourceInformationMarkerEnd($composer_16);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      Box(background($this$Column.weight$default_gbkz97_k$(fillMaxWidth(Companion_getInstance_2()), 1.0), Color__copy$default_impl_ectz3s(Companion_getInstance().get_LightGray_9g8v13_k$(), 0.5)), $composer_10, 0);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_31 = ImageCropper$lambda_9(showInstruments$delegate);
      var tmp_32 = cropFraction_0._v;
      var tmp_33 = ImageCropper$lambda_3(scale$delegate);
      var tmp_34 = ImageCropper$lambda_7(rotation$delegate);
      var tmp_35 = ImageCropper$lambda_5(offset$delegate);
      $composer_5.startReplaceGroup_5hh8aj_k$(313476996);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_36;
      if (false || it_9 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.ImageCropper.<anonymous>.<anonymous>' call
        var value_9 = ImageCropper$lambda_14(showInstruments$delegate);
        $composer_5.updateRememberedValue_l1wh71_k$(value_9);
        tmp_36 = value_9;
      } else {
        tmp_36 = it_9;
      }
      var tmp_37 = tmp_36;
      var tmp1_group_0 = (tmp_37 == null ? true : !(tmp_37 == null)) ? tmp_37 : THROW_CCE();
      $composer_5.endReplaceGroup_ek144q_k$();
      MobileInstruments($this$Box, tmp_31, tmp_32, image, tmp_33, tmp_34, tmp_35, tmp1_group_0, ImageCropper$lambda(imageWidth$delegate), ImageCropper$lambda_1(imageHeight$delegate), settingInstruments, icons_0._v, colors_0._v, cropButton, onImageCrop, $composer_5, 12582912 | 14 & $changed_0 | 896 & $dirty >> 6 | 7168 & $dirty << 9, 6 | 112 & $dirty >> 12 | 896 & $dirty >> 12 | 7168 & $dirty >> 12 | 57344 & $dirty >> 12);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp7_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.updateScope_t8jcf_k$(ImageCropper$lambda_15(image, ratio_0, shape_0, greedCells_0, cropFraction_0, icons_0, colors_0, cropButton, onImageCrop, $changed, $default));
    }
  }
  function calculateScaleFraction(cropFraction) {
    return 0.5 / cropFraction * 2.0;
  }
  function MobileInstruments(_this__u8e3s4, showInstruments, cropFraction, imageByteArray, scale, rotation, offset, onShowInstrumentsChange, imageWidth, imageHeight, settingInstruments, icons, colors, cropButton, onImageCrop, $composer, $changed, $changed1) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1631545238);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(showInstruments) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(cropFraction) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(imageByteArray) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(scale) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(rotation) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_j54hty_k$(_Offset___get_packedValue__impl__xh2k8q(offset)) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onShowInstrumentsChange) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(imageWidth) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(imageHeight) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(settingInstruments) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(icons) ? 32 : 16);
    if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(colors) ? 256 : 128);
    if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(cropButton) ? 2048 : 1024);
    if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onImageCrop) ? 16384 : 8192);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
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
      var modifier = _this__u8e3s4.align_uxv7cf_k$(wrapContentHeight(fillMaxWidth(Companion_getInstance_2())), Companion_getInstance_3().get_BottomCenter_yatb1z_k$());
      var contentAlignment = Companion_getInstance_3().get_BottomCenter_yatb1z_k$();
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_getInstance_2();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_2();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_4 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp0_modifier = fillMaxWidth(Companion_getInstance_2());
      var tmp1_horizontalAlignment = Companion_getInstance_3().get_CenterHorizontally_97ab0v_k$();
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().get_Bottom_3m75bg_k$();
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_2();
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_3().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_2();
      var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_0 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_5 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = wrapContentHeight(fillMaxWidth(Companion_getInstance_2()));
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_2();
      if (!((6 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_2();
      var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_1 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_6 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(factory_1);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      if ($this$with_1.get_inserting_25mlsw_k$() || !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
        $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>' call
      var $this$Box = BoxScopeInstance_getInstance();
      var $changed_0 = 6 | 112 & 6 >> 6;
      var $composer_15 = $composer_14;
      $composer_15.startReplaceGroup_5hh8aj_k$(1468114185);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(imageByteArray) | ($dirty & 234881024) === 67108864) | ($dirty & 1879048192) === 536870912) | ($dirty & 57344) === 16384) | ($dirty & 896) === 256) | ($dirty & 3670016) === 1048576) | ($dirty & 458752) === 131072) | ($dirty1 & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_15.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = MobileInstruments$lambda_1(imageByteArray, imageWidth, imageHeight, scale, cropFraction, offset, rotation, onImageCrop);
        $composer_15.updateRememberedValue_l1wh71_k$(value);
        tmp_7 = value;
      } else {
        tmp_7 = it;
      }
      var tmp_8 = tmp_7;
      var tmp0_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_15.endReplaceGroup_ek144q_k$();
      cropButton($this$Box, tmp0_group, $composer_15, 14 & $changed_0 | 896 & $dirty1 >> 3);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_9 = Companion_getInstance_2();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(32);
      var tmp_10 = height(tmp_9, tmp$ret$12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(96);
      var tmp_11 = $this$Box.align_uxv7cf_k$(width(tmp_10, tmp$ret$13), Companion_getInstance_3().get_BottomCenter_yatb1z_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_12 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(8);
      var tmp_13 = clip(tmp_11, RoundedCornerShape_0(tmp_12, tmp$ret$15));
      var tmp_14 = colors.get_instruments_64t2ga_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_15 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(8);
      var tmp_16 = background(tmp_13, tmp_14, RoundedCornerShape_0(tmp_15, tmp$ret$17));
      $composer_15.startReplaceGroup_5hh8aj_k$(1468206889);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 29360128) === 8388608 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_15.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = MobileInstruments$lambda_2(onShowInstrumentsChange, showInstruments);
        $composer_15.updateRememberedValue_l1wh71_k$(value_0);
        tmp_17 = value_0;
      } else {
        tmp_17 = it_0;
      }
      var tmp_18 = tmp_17;
      var tmp1_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_15.endReplaceGroup_ek144q_k$();
      var modifier_5 = clickable(tmp_16, VOID, VOID, VOID, tmp1_group);
      var contentAlignment_1 = Companion_getInstance_3().get_Center_3arb0i_k$();
      var propagateMinConstraints_1 = false;
      var $composer_16 = $composer_15;
      sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_5 = Companion_getInstance_2();
      if (!((4 & 2) === 0))
        contentAlignment_1 = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      sourceInformationMarkerStart($composer_17, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_2();
      var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_17, 0);
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_2 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_18 = $composer_17;
      sourceInformationMarkerStart($composer_18, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_19 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_19, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(factory_2);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      if ($this$with_2.get_inserting_25mlsw_k$() || !equals($this$with_2.rememberedValue_4dg93v_k$(), compositeKeyHash_2)) {
        $this$with_2.updateRememberedValue_l1wh71_k$(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).apply_pk82p8_k$(compositeKeyHash_2, block_2);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_19 = $composer_18;
      sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      var tmp0_elvis_lhs = icons.get_instruments_j0ygw3_k$();
      var tmp1_painter = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_getInstance()) : tmp0_elvis_lhs, $composer_20, 0);
      var tmp2_tint = colors.get_icons_s1sl9k_k$();
      var tmp_20 = Companion_getInstance_2();
      $composer_20.startReplaceGroup_5hh8aj_k$(-428500648);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_20.changed_ga7h3f_k$(rotationAngle$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_20.rememberedValue_4dg93v_k$();
      var tmp_21;
      if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = MobileInstruments$lambda_3(rotationAngle$delegate);
        $composer_20.updateRememberedValue_l1wh71_k$(value_1);
        tmp_21 = value_1;
      } else {
        tmp_21 = it_1;
      }
      var tmp_22 = tmp_21;
      var tmp0_group_0 = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      $composer_20.endReplaceGroup_ek144q_k$();
      var tmp3_modifier = graphicsLayer_0(tmp_20, tmp0_group_0);
      Icon(tmp1_painter, null, tmp3_modifier, tmp2_tint, $composer_20, 48, 0);
      sourceInformationMarkerEnd($composer_19);
      $composer_18.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_18);
      sourceInformationMarkerEnd($composer_17);
      sourceInformationMarkerEnd($composer_16);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_13);
      sourceInformationMarkerEnd($composer_12);
      sourceInformationMarkerEnd($composer_11);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_23 = height(fillMaxWidth(Companion_getInstance_2()), MobileInstruments$lambda(animatedHeight$delegate));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_24 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$29 = _Dp___init__impl__ms3zkb(8);
      var tmp_25 = clip(tmp_23, RoundedCornerShape_0(tmp_24, tmp$ret$29));
      var tmp_26 = colors.get_instruments_64t2ga_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_27 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$31 = _Dp___init__impl__ms3zkb(8);
      var modifier_7 = background(tmp_25, tmp_26, RoundedCornerShape_0(tmp_27, tmp$ret$31));
      var contentAlignment_2 = Companion_getInstance_3().get_Center_3arb0i_k$();
      var propagateMinConstraints_2 = false;
      var $composer_21 = $composer_10;
      sourceInformationMarkerStart($composer_21, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_7 = Companion_getInstance_2();
      if (!((4 & 2) === 0))
        contentAlignment_2 = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints_2 = false;
      var measurePolicy_3 = maybeCachedBoxMeasurePolicy(contentAlignment_2, propagateMinConstraints_2);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      sourceInformationMarkerStart($composer_22, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_2();
      var compositeKeyHash_3 = get_currentCompositeKeyHash($composer_22, 0);
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_3 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_23 = $composer_22;
      sourceInformationMarkerStart($composer_23, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_28 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_28, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(factory_3);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_3 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_3 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3);
      if ($this$with_3.get_inserting_25mlsw_k$() || !equals($this$with_3.rememberedValue_4dg93v_k$(), compositeKeyHash_3)) {
        $this$with_3.updateRememberedValue_l1wh71_k$(compositeKeyHash_3);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3).apply_pk82p8_k$(compositeKeyHash_3, block_3);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_24 = $composer_23;
      sourceInformationMarkerStart($composer_24, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var tmp_29 = Companion_getInstance_2();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_30 = _Dp___init__impl__ms3zkb(50);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$35 = _Dp___init__impl__ms3zkb(16);
      var modifier_9 = fillMaxWidth(padding(tmp_29, tmp_30, tmp$ret$35));
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_3().get_CenterVertically_dmkbbz_k$();
      var $composer_26 = $composer_25;
      sourceInformationMarkerStart($composer_26, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_9 = Companion_getInstance_2();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_3().get_Top_18jj1w_k$();
      var measurePolicy_4 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_26, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      sourceInformationMarkerStart($composer_27, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_2();
      var compositeKeyHash_4 = get_currentCompositeKeyHash($composer_27, 0);
      var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_4 = materialize($composer_27, modifier_10);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory_4 = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var $composer_28 = $composer_27;
      sourceInformationMarkerStart($composer_28, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_31 = $composer_28.get_applier_bupu8u_k$();
      if (!isInterface(tmp_31, Applier)) {
        invalidApplier();
      }
      $composer_28.startReusableNode_jjgeyp_k$();
      if ($composer_28.get_inserting_25mlsw_k$()) {
        $composer_28.createNode_ahrd54_k$(factory_4);
      } else {
        $composer_28.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_4 = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_4 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4);
      if ($this$with_4.get_inserting_25mlsw_k$() || !equals($this$with_4.rememberedValue_4dg93v_k$(), compositeKeyHash_4)) {
        $this$with_4.updateRememberedValue_l1wh71_k$(compositeKeyHash_4);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4).apply_pk82p8_k$(compositeKeyHash_4, block_4);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_4().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
      var $composer_29 = $composer_28;
      sourceInformationMarkerStart($composer_29, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      RowScopeInstance_getInstance();
      var $composer_30 = $composer_29;
      $composer_30.startReplaceGroup_5hh8aj_k$(-428472755);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_30.rememberedValue_4dg93v_k$();
      var tmp_32;
      if (invalid_2 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = MobileInstruments$lambda_4(settingInstruments);
        $composer_30.updateRememberedValue_l1wh71_k$(value_2);
        tmp_32 = value_2;
      } else {
        tmp_32 = it_2;
      }
      var tmp_33 = tmp_32;
      var tmp0_group_1 = (tmp_33 == null ? true : !(tmp_33 == null)) ? tmp_33 : THROW_CCE();
      $composer_30.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(517248368, true, MobileInstruments$lambda_5(settingInstruments, icons, colors), $composer_30, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_31 = $composer_30;
      sourceInformationMarkerStart($composer_31, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_31.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_31.rememberedValue_4dg93v_k$();
      var tmp_34;
      if (invalid_3 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_31.updateRememberedValue_l1wh71_k$(value_3);
        tmp_34 = value_3;
      } else {
        tmp_34 = it_3;
      }
      var tmp_35 = tmp_34;
      var tmp0 = (tmp_35 == null ? true : !(tmp_35 == null)) ? tmp_35 : THROW_CCE();
      sourceInformationMarkerEnd($composer_31);
      IconButton(tmp0_group_1, null, false, null, null, tmp0, $composer_30, 196608, 30);
      $composer_30.startReplaceGroup_5hh8aj_k$(-428449429);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_30.rememberedValue_4dg93v_k$();
      var tmp_36;
      if (invalid_4 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = MobileInstruments$lambda_6(settingInstruments);
        $composer_30.updateRememberedValue_l1wh71_k$(value_4);
        tmp_36 = value_4;
      } else {
        tmp_36 = it_4;
      }
      var tmp_37 = tmp_36;
      var tmp1_group_0 = (tmp_37 == null ? true : !(tmp_37 == null)) ? tmp_37 : THROW_CCE();
      $composer_30.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-762627047, true, MobileInstruments$lambda_7(settingInstruments, icons, colors), $composer_30, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_32 = $composer_30;
      sourceInformationMarkerStart($composer_32, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = $composer_32.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_32.rememberedValue_4dg93v_k$();
      var tmp_38;
      if (invalid_5 || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_5 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
        $composer_32.updateRememberedValue_l1wh71_k$(value_5);
        tmp_38 = value_5;
      } else {
        tmp_38 = it_5;
      }
      var tmp_39 = tmp_38;
      var tmp0_0 = (tmp_39 == null ? true : !(tmp_39 == null)) ? tmp_39 : THROW_CCE();
      sourceInformationMarkerEnd($composer_32);
      IconButton(tmp1_group_0, null, false, null, null, tmp0_0, $composer_30, 196608, 30);
      $composer_30.startReplaceGroup_5hh8aj_k$(-428425359);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_30.rememberedValue_4dg93v_k$();
      var tmp_40;
      if (invalid_6 || it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_6 = MobileInstruments$lambda_8(settingInstruments);
        $composer_30.updateRememberedValue_l1wh71_k$(value_6);
        tmp_40 = value_6;
      } else {
        tmp_40 = it_6;
      }
      var tmp_41 = tmp_40;
      var tmp2_group = (tmp_41 == null ? true : !(tmp_41 == null)) ? tmp_41 : THROW_CCE();
      $composer_30.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-2008534984, true, MobileInstruments$lambda_9(settingInstruments, icons, colors), $composer_30, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_33 = $composer_30;
      sourceInformationMarkerStart($composer_33, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_7 = $composer_33.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_33.rememberedValue_4dg93v_k$();
      var tmp_42;
      if (invalid_7 || it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_7 = ComposableLambda$invoke$ref_1(dispatchReceiver_1);
        $composer_33.updateRememberedValue_l1wh71_k$(value_7);
        tmp_42 = value_7;
      } else {
        tmp_42 = it_7;
      }
      var tmp_43 = tmp_42;
      var tmp0_1 = (tmp_43 == null ? true : !(tmp_43 == null)) ? tmp_43 : THROW_CCE();
      sourceInformationMarkerEnd($composer_33);
      IconButton(tmp2_group, null, false, null, null, tmp0_1, $composer_30, 196608, 30);
      sourceInformationMarkerEnd($composer_29);
      $composer_28.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_28);
      sourceInformationMarkerEnd($composer_27);
      sourceInformationMarkerEnd($composer_26);
      sourceInformationMarkerEnd($composer_24);
      $composer_23.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_23);
      sourceInformationMarkerEnd($composer_22);
      sourceInformationMarkerEnd($composer_21);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MobileInstruments$lambda_10(_this__u8e3s4, showInstruments, cropFraction, imageByteArray, scale, rotation, offset, onShowInstrumentsChange, imageWidth, imageHeight, settingInstruments, icons, colors, cropButton, onImageCrop, $changed, $changed1));
    }
  }
  function ImageCropper$lambda($imageWidth$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $imageWidth$delegate.get_value_j01efc_k$();
  }
  function ImageCropper$lambda_0($imageWidth$delegate, _set____db54di) {
    getLocalDelegateReference('imageWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $imageWidth$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ImageCropper$lambda_1($imageHeight$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageHeight', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $imageHeight$delegate.get_value_j01efc_k$();
  }
  function ImageCropper$lambda_2($imageHeight$delegate, _set____db54di) {
    getLocalDelegateReference('imageHeight', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $imageHeight$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ImageCropper$lambda_3($scale$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scale$delegate.get_value_j01efc_k$();
  }
  function ImageCropper$lambda_4($scale$delegate, _set____db54di) {
    getLocalDelegateReference('scale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $scale$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ImageCropper$lambda_5($offset$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('offset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offset$delegate.get_value_j01efc_k$().packedValue_1;
  }
  function ImageCropper$lambda_6($offset$delegate, _set____db54di) {
    getLocalDelegateReference('offset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var value = new Offset(_set____db54di);
    $offset$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function ImageCropper$lambda_7($rotation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('rotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $rotation$delegate.get_value_j01efc_k$();
  }
  function ImageCropper$lambda_8($rotation$delegate, _set____db54di) {
    getLocalDelegateReference('rotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $rotation$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ImageCropper$lambda_9($showInstruments$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showInstruments', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $showInstruments$delegate.get_value_j01efc_k$();
  }
  function ImageCropper$lambda_10($showInstruments$delegate, _set____db54di) {
    getLocalDelegateReference('showInstruments', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $showInstruments$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function MobileInstruments$lambda($animatedHeight$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedHeight', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animatedHeight$delegate.get_value_j01efc_k$().value_1;
  }
  function MobileInstruments$lambda_0($rotationAngle$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('rotationAngle', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $rotationAngle$delegate.get_value_j01efc_k$();
  }
  function ImageCropper$lambda_11($settingInstruments, $scale$delegate, $offset$delegate, $rotation$delegate) {
    return function (zoom, pan, rotate) {
      var tmp;
      if ($settingInstruments.get_wei43m_k$(Instruments_Zoom_getInstance()) === true) {
        ImageCropper$lambda_4($scale$delegate, coerceIn(ImageCropper$lambda_3($scale$delegate) * zoom, 0.2, 10.0));
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($settingInstruments.get_wei43m_k$(Instruments_Pan_getInstance()) === true) {
        ImageCropper$lambda_6($offset$delegate, Offset__plus_impl_c78cg0(ImageCropper$lambda_5($offset$delegate), pan.packedValue_1));
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if ($settingInstruments.get_wei43m_k$(Instruments_Rotate_getInstance()) === true) {
        ImageCropper$lambda_8($rotation$delegate, ImageCropper$lambda_7($rotation$delegate) + rotate);
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ImageCropper$lambda_12($imageWidth$delegate, $imageHeight$delegate) {
    return function (layoutCoordinates) {
      ImageCropper$lambda_0($imageWidth$delegate, _IntSize___get_width__impl__d9yl4o(layoutCoordinates.get_size_kd98kr_k$()));
      ImageCropper$lambda_2($imageHeight$delegate, _IntSize___get_height__impl__prv63b(layoutCoordinates.get_size_kd98kr_k$()));
      return Unit_getInstance();
    };
  }
  function ImageCropper$lambda_13($greedCells) {
    return function ($this$Canvas) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      var strokeWidth = $this$Canvas.toPx_mycba2_k$(tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
      var padding = $this$Canvas.toPx_mycba2_k$(tmp$ret$1);
      var width = _Size___get_width__impl__58y75t($this$Canvas.get_size_cxx1ym_k$()) - 2 * padding;
      var height = _Size___get_height__impl__a04p02($this$Canvas.get_size_cxx1ym_k$()) - 2 * padding;
      var stepX = width / $greedCells._v;
      var stepY = height / $greedCells._v;
      var lineColor = Color__copy$default_impl_ectz3s(Companion_getInstance().get_White_xpp3qf_k$(), 0.6);
      var inductionVariable = 1;
      var last = $greedCells._v;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var x = padding + stepX * i;
          $this$Canvas.drawLine$default_457gsp_k$(lineColor, Offset_0(x, padding), Offset_0(x, _Size___get_height__impl__a04p02($this$Canvas.get_size_cxx1ym_k$()) - padding), strokeWidth);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      var inductionVariable_0 = 1;
      var last_0 = $greedCells._v;
      var tmp_0;
      if (inductionVariable_0 < last_0) {
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var y = padding + stepY * i_0;
          $this$Canvas.drawLine$default_457gsp_k$(lineColor, Offset_0(padding, y), Offset_0(_Size___get_width__impl__58y75t($this$Canvas.get_size_cxx1ym_k$()) - padding, y), strokeWidth);
        }
         while (inductionVariable_0 < last_0);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ImageCropper$lambda_14($showInstruments$delegate) {
    return function (it) {
      ImageCropper$lambda_10($showInstruments$delegate, it);
      return Unit_getInstance();
    };
  }
  function ImageCropper$lambda_15($image, $ratio, $shape, $greedCells, $cropFraction, $icons, $colors, $cropButton, $onImageCrop, $$changed, $$default) {
    return function ($composer, $force) {
      ImageCropper($image, $ratio._v, $shape._v, $greedCells._v, $cropFraction._v, $icons._v, $colors._v, $cropButton, $onImageCrop, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda$lambda($onImageCrop) {
    return function (byteArray) {
      $onImageCrop(byteArray);
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda_1($imageByteArray, $imageWidth, $imageHeight, $scale, $cropFraction, $offset, $rotation, $onImageCrop) {
    return function () {
      var tmp = $scale * calculateScaleFraction($cropFraction);
      var tmp_0 = Offset_0(_Offset___get_x__impl__xvi35n($offset) * calculateScaleFraction($cropFraction), _Offset___get_y__impl__8bzhra($offset) * calculateScaleFraction($cropFraction));
      var tmp_1 = Companion_getInstance().get_Black_t4k9fh_k$();
      cropImage($imageByteArray, $imageWidth, $imageHeight, tmp, tmp_0, $rotation, tmp_1, MobileInstruments$lambda$lambda($onImageCrop));
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda_2($onShowInstrumentsChange, $showInstruments) {
    return function () {
      $onShowInstrumentsChange(!$showInstruments);
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda_3($rotationAngle$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_rotationZ_lyeks7_k$(MobileInstruments$lambda_0($rotationAngle$delegate));
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda_4($settingInstruments) {
    return function () {
      var this_0 = $settingInstruments;
      var key = Instruments_Zoom_getInstance();
      var value = !ensureNotNull($settingInstruments.get_wei43m_k$(Instruments_Zoom_getInstance()));
      this_0.put_4fpzoq_k$(key, value);
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda_5($settingInstruments, $icons, $colors) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(517248368, $changed, -1, 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ImageCropper.kt:359)');
        }
        var tmp_0;
        if ($settingInstruments.get_wei43m_k$(Instruments_Zoom_getInstance()) === true) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1340834715);
          var tmp0_elvis_lhs = $icons.get_size_woubt6_k$();
          var tmp0_group = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_getInstance()) : tmp0_elvis_lhs, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = tmp0_group;
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1340830519);
          var tmp1_elvis_lhs = $icons.get_noSize_h76xkb_k$();
          var tmp1_group = painterResource(tmp1_elvis_lhs == null ? get_compose_multiplatform(drawable_getInstance()) : tmp1_elvis_lhs, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = tmp1_group;
        }
        var tmp_1 = tmp_0;
        Icon(tmp_1, null, null, $colors.get_icons_s1sl9k_k$(), $composer_0, 48, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function MobileInstruments$lambda_6($settingInstruments) {
    return function () {
      var this_0 = $settingInstruments;
      var key = Instruments_Pan_getInstance();
      var value = !ensureNotNull($settingInstruments.get_wei43m_k$(Instruments_Pan_getInstance()));
      this_0.put_4fpzoq_k$(key, value);
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda_7($settingInstruments, $icons, $colors) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-762627047, $changed, -1, 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ImageCropper.kt:373)');
        }
        var tmp_0;
        if ($settingInstruments.get_wei43m_k$(Instruments_Pan_getInstance()) === true) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1340811484);
          var tmp0_elvis_lhs = $icons.get_pan_18iymk_k$();
          var tmp0_group = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_getInstance()) : tmp0_elvis_lhs, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = tmp0_group;
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1340806424);
          var tmp1_elvis_lhs = $icons.get_noPan_ivve9f_k$();
          var tmp1_group = painterResource(tmp1_elvis_lhs == null ? get_compose_multiplatform(drawable_getInstance()) : tmp1_elvis_lhs, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = tmp1_group;
        }
        var tmp_1 = tmp_0;
        Icon(tmp_1, null, null, $colors.get_icons_s1sl9k_k$(), $composer_0, 48, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function MobileInstruments$lambda_8($settingInstruments) {
    return function () {
      var this_0 = $settingInstruments;
      var key = Instruments_Rotate_getInstance();
      var value = !ensureNotNull($settingInstruments.get_wei43m_k$(Instruments_Rotate_getInstance()));
      this_0.put_4fpzoq_k$(key, value);
      return Unit_getInstance();
    };
  }
  function MobileInstruments$lambda_9($settingInstruments, $icons, $colors) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-2008534984, $changed, -1, 'team.platforma.imagecropper2.MobileInstruments.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ImageCropper.kt:388)');
        }
        var tmp_0;
        if ($settingInstruments.get_wei43m_k$(Instruments_Rotate_getInstance()) === true) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1340787129);
          var tmp0_elvis_lhs = $icons.get_rotate_j3ybms_k$();
          var tmp0_group = painterResource(tmp0_elvis_lhs == null ? get_compose_multiplatform(drawable_getInstance()) : tmp0_elvis_lhs, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = tmp0_group;
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1340782869);
          var tmp1_elvis_lhs = $icons.get_noRotate_ll1i2j_k$();
          var tmp1_group = painterResource(tmp1_elvis_lhs == null ? get_compose_multiplatform(drawable_getInstance()) : tmp1_elvis_lhs, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = tmp1_group;
        }
        var tmp_1 = tmp_0;
        Icon(tmp_1, null, null, $colors.get_icons_s1sl9k_k$(), $composer_0, 48, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function MobileInstruments$lambda_10($this_MobileInstruments, $showInstruments, $cropFraction, $imageByteArray, $scale, $rotation, $offset, $onShowInstrumentsChange, $imageWidth, $imageHeight, $settingInstruments, $icons, $colors, $cropButton, $onImageCrop, $$changed, $$changed1) {
    return function ($composer, $force) {
      MobileInstruments($this_MobileInstruments, $showInstruments, $cropFraction, $imageByteArray, $scale, $rotation, $offset, $onShowInstrumentsChange, $imageWidth, $imageHeight, $settingInstruments, $icons, $colors, $cropButton, $onImageCrop, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_getInstance();
    };
  }
  var Instruments_Zoom_instance;
  var Instruments_Pan_instance;
  var Instruments_Rotate_instance;
  function values() {
    return [Instruments_Zoom_getInstance(), Instruments_Pan_getInstance(), Instruments_Rotate_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Zoom':
        return Instruments_Zoom_getInstance();
      case 'Pan':
        return Instruments_Pan_getInstance();
      case 'Rotate':
        return Instruments_Rotate_getInstance();
      default:
        Instruments_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Instruments_entriesInitialized;
  function Instruments_initEntries() {
    if (Instruments_entriesInitialized)
      return Unit_getInstance();
    Instruments_entriesInitialized = true;
    Instruments_Zoom_instance = new Instruments('Zoom', 0);
    Instruments_Pan_instance = new Instruments('Pan', 1);
    Instruments_Rotate_instance = new Instruments('Rotate', 2);
  }
  var $ENTRIES;
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
    return toComposeImageBitmap(Companion_getInstance_6().makeFromEncoded_99p5hy_k$(_this__u8e3s4));
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
      return Unit_getInstance();
    };
  }
  function cropImage$lambda$lambda($callback) {
    return function (blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(ensureNotNull(blob));
      reader.onloadend = cropImage$lambda$lambda$lambda(reader, $callback);
      return Unit_getInstance();
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
        tmp = Unit_getInstance();
      } else {
        baseDrawHeight = targetHeight;
        baseDrawWidth = baseDrawHeight * imageAspectRatio;
        tmp = Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function transformGestures(_this__u8e3s4, enabled, transform) {
    enabled = enabled === VOID ? true : enabled;
    return Companion_getInstance_2();
  }
  //region block: init
  avatarcropper_imagecropper2_generated_resources_Res_drawable$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_string$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_array$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_plurals$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res_font$stable = 0;
  avatarcropper_imagecropper2_generated_resources_Res$stable = 0;
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
