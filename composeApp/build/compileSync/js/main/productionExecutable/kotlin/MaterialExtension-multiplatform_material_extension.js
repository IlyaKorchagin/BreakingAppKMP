(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    globalThis['MaterialExtension-multiplatform_material_extension'] = factory(typeof globalThis['MaterialExtension-multiplatform_material_extension'] === 'undefined' ? {} : globalThis['MaterialExtension-multiplatform_material_extension'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.cm;
  var protoOf = kotlin_kotlin.$_$.ff;
  var hashCode = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var ButtonDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.y;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.s5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var animateDpAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var animateFloatAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.oe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s1;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var THROW_ISE = kotlin_kotlin.$_$.qk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.td;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t1;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var Enum = kotlin_kotlin.$_$.bk;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Button_0, 'Button', Button_0);
  initMetadataForClass(FilledButton, 'FilledButton');
  initMetadataForObject(AppButtonStyle, 'AppButtonStyle');
  initMetadataForLambda(AppFab$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AppFab$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AppFab$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForObject(AppFabStyle, 'AppFabStyle');
  initMetadataForObject(ToolbarStyle, 'ToolbarStyle');
  initMetadataForClass(AppToolbarStyle, 'AppToolbarStyle', AppToolbarStyle);
  initMetadataForClass(ExpandStrategy, 'ExpandStrategy', VOID, Enum);
  initMetadataForClass(IconGravity, 'IconGravity', VOID, Enum);
  initMetadataForObject(Theme, 'Theme');
  initMetadataForLambda(rememberTheme$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(rememberTheme$slambda_1, CoroutineImpl, VOID, [1]);
  //endregion
  var materialextension_multiplatform_material_extension_generated_resources_Res_drawable$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_string$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_array$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_plurals$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_font$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res$stable;
  var team_platforma_multiplatform_material_extension_bottom_sheet_style_CommonBottomSheetStyle$stable;
  var team_platforma_multiplatform_material_extension_bottom_sheet_utils_CommonBottomSheetState$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_Button$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_FilledButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_OutlineButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_TextButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_TonalButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_ElevatedButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle$stable;
  function Button_0(shape, colors, elevation, border) {
    shape = shape === VOID ? null : shape;
    colors = colors === VOID ? null : colors;
    elevation = elevation === VOID ? null : elevation;
    border = border === VOID ? null : border;
    this.joz_1 = shape;
    this.koz_1 = colors;
    this.loz_1 = elevation;
    this.moz_1 = border;
  }
  protoOf(Button_0).toString = function () {
    return 'Button(shape=' + toString(this.joz_1) + ', colors=' + toString(this.koz_1) + ', elevation=' + toString(this.loz_1) + ', border=' + toString(this.moz_1) + ')';
  };
  protoOf(Button_0).hashCode = function () {
    var result = this.joz_1 == null ? 0 : hashCode(this.joz_1);
    result = imul(result, 31) + (this.koz_1 == null ? 0 : this.koz_1.hashCode()) | 0;
    result = imul(result, 31) + (this.loz_1 == null ? 0 : this.loz_1.hashCode()) | 0;
    result = imul(result, 31) + (this.moz_1 == null ? 0 : this.moz_1.hashCode()) | 0;
    return result;
  };
  protoOf(Button_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Button_0))
      return false;
    var tmp0_other_with_cast = other instanceof Button_0 ? other : THROW_CCE();
    if (!equals(this.joz_1, tmp0_other_with_cast.joz_1))
      return false;
    if (!equals(this.koz_1, tmp0_other_with_cast.koz_1))
      return false;
    if (!equals(this.loz_1, tmp0_other_with_cast.loz_1))
      return false;
    if (!equals(this.moz_1, tmp0_other_with_cast.moz_1))
      return false;
    return true;
  };
  function FilledButton(shape, colors, elevation, border) {
    this.noz_1 = shape;
    this.ooz_1 = colors;
    this.poz_1 = elevation;
    this.qoz_1 = border;
  }
  protoOf(FilledButton).toString = function () {
    return 'FilledButton(shape=' + toString_0(this.noz_1) + ', colors=' + toString_0(this.ooz_1) + ', elevation=' + toString_0(this.poz_1) + ', border=' + toString(this.qoz_1) + ')';
  };
  protoOf(FilledButton).hashCode = function () {
    var result = hashCode(this.noz_1);
    result = imul(result, 31) + this.ooz_1.hashCode() | 0;
    result = imul(result, 31) + this.poz_1.hashCode() | 0;
    result = imul(result, 31) + (this.qoz_1 == null ? 0 : this.qoz_1.hashCode()) | 0;
    return result;
  };
  protoOf(FilledButton).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FilledButton))
      return false;
    var tmp0_other_with_cast = other instanceof FilledButton ? other : THROW_CCE();
    if (!equals(this.noz_1, tmp0_other_with_cast.noz_1))
      return false;
    if (!this.ooz_1.equals(tmp0_other_with_cast.ooz_1))
      return false;
    if (!this.poz_1.equals(tmp0_other_with_cast.poz_1))
      return false;
    if (!equals(this.qoz_1, tmp0_other_with_cast.qoz_1))
      return false;
    return true;
  };
  function AppButtonStyle() {
    AppButtonStyle_instance = this;
    this.roz_1 = new Button_0();
    this.soz_1 = null;
    this.toz_1 = null;
    this.uoz_1 = null;
    this.voz_1 = null;
    this.woz_1 = null;
  }
  protoOf(AppButtonStyle).xoz = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(1654376442);
    if (isTraceInProgress()) {
      traceEventStart(1654376442, $changed, -1, 'team.platforma.multiplatform_material_extension.button.style.AppButtonStyle.filledButton (AppButtonStyle.kt:49)');
    }
    var tmp0_safe_receiver = this.soz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.joz_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.roz_1.joz_1 : tmp1_elvis_lhs;
    $composer_0.a31(272214411);
    var tmp1_group = tmp2_elvis_lhs == null ? ButtonDefaults_getInstance().nmd($composer_0, 0) : tmp2_elvis_lhs;
    $composer_0.c31();
    var tmp3_safe_receiver = this.soz_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.koz_1;
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.roz_1.koz_1 : tmp4_elvis_lhs;
    $composer_0.a31(272217110);
    var tmp2_group = tmp5_elvis_lhs == null ? ButtonDefaults_getInstance().omd($composer_0, 0) : tmp5_elvis_lhs;
    $composer_0.c31();
    var tmp6_safe_receiver = this.soz_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.loz_1;
    var tmp8_elvis_lhs = tmp7_elvis_lhs == null ? this.roz_1.loz_1 : tmp7_elvis_lhs;
    var tmp;
    if (tmp8_elvis_lhs == null) {
      var tmp_0 = ButtonDefaults_getInstance();
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      tmp = tmp_0.pmd(tmp_1, tmp_2, tmp_3, tmp_4, _Dp___init__impl__ms3zkb(0.0), $composer_0, 0, 31);
    } else {
      tmp = tmp8_elvis_lhs;
    }
    var tmp3_group = tmp;
    var tmp9_safe_receiver = this.soz_1;
    var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.moz_1;
    var tmp0 = new FilledButton(tmp1_group, tmp2_group, tmp3_group, tmp10_elvis_lhs == null ? this.roz_1.moz_1 : tmp10_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  var AppButtonStyle_instance;
  function AppButtonStyle_getInstance() {
    if (AppButtonStyle_instance == null)
      new AppButtonStyle();
    return AppButtonStyle_instance;
  }
  var team_platforma_multiplatform_material_extension_calendar_core_CalendarImpl$stable;
  var team_platforma_multiplatform_material_extension_calendar_core_CalendarMonths$stable;
  var team_platforma_multiplatform_material_extension_calendar_properties_CalendarViewProperties$stable;
  var team_platforma_multiplatform_material_extension_calendar_properties_DatePikerProperties$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_CalendarViewStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_DateStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalDateStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_CellPadding$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_PeriodStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_StartPeriod$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_EndPeriod$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_TrackPeriod$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_PeriodPadding$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalPeriodStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalStartPeriod$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalEndPeriod$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalTrackPeriod$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_BadgeStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalBadgeStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_MonthStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalMonthStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_PickerStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_PikerButton$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalPickerStyle$stable;
  var team_platforma_multiplatform_material_extension_calendar_style_GlobalPikerButton$stable;
  var team_platforma_multiplatform_material_extension_calendar_utils_CalendarRange$stable;
  function AppFab(expand, modifier, expandStrategy, iconGravity, text, icon, enabled, hide, shape, colors, onClick, elevation, expandDuration, shrinkDuration, border, $composer, $changed, $changed1, $default) {
    var expand_0 = {_v: expand};
    var modifier_0 = {_v: modifier};
    var expandStrategy_0 = {_v: expandStrategy};
    var iconGravity_0 = {_v: iconGravity};
    var text_0 = {_v: text};
    var enabled_0 = {_v: enabled};
    var hide_0 = {_v: hide};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var expandDuration_0 = {_v: expandDuration};
    var shrinkDuration_0 = {_v: shrinkDuration};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1035285987);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g32(expand_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f2r(expandStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f2r(iconGravity_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f32(text_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f32(icon) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.g32(enabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.g32(hide_0._v) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | (($default & 256) === 0 && $composer_0.f2r(shape_0._v) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | (($default & 512) === 0 && $composer_0.f2r(colors_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.f32(onClick) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | (($default & 2048) === 0 && $composer_0.f2r(elevation_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.f2r(expandDuration_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.f2r(shrinkDuration_0._v) ? 2048 : 1024);
    if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | (($default & 16384) === 0 && $composer_0.f2r(border_0._v) ? 16384 : 8192);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 9363) === 9362) || !$composer_0.u30()) {
      $composer_0.d31();
      if (($changed & 1) === 0 || $composer_0.h31()) {
        if (!(($default & 1) === 0)) {
          expand_0._v = false;
        }
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          expandStrategy_0._v = ExpandStrategy_WrapContent_getInstance();
        }
        if (!(($default & 8) === 0)) {
          iconGravity_0._v = IconGravity_End_getInstance();
        }
        if (!(($default & 16) === 0)) {
          text_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 128) === 0)) {
          hide_0._v = true;
        }
        if (!(($default & 256) === 0)) {
          shape_0._v = AppFabStyle_getInstance().zoz($composer_0, 0).noz_1;
          $dirty = $dirty & -234881025;
        }
        if (!(($default & 512) === 0)) {
          colors_0._v = AppFabStyle_getInstance().zoz($composer_0, 0).ooz_1;
          $dirty = $dirty & -1879048193;
        }
        if (!(($default & 2048) === 0)) {
          elevation_0._v = AppFabStyle_getInstance().zoz($composer_0, 0).poz_1;
          $dirty1 = $dirty1 & -113;
        }
        if (!(($default & 4096) === 0)) {
          expandDuration_0._v = null;
        }
        if (!(($default & 8192) === 0)) {
          shrinkDuration_0._v = null;
        }
        if (!(($default & 16384) === 0)) {
          border_0._v = AppFabStyle_getInstance().zoz($composer_0, 0).qoz_1;
          $dirty1 = $dirty1 & -57345;
        }
      } else {
        $composer_0.c2u();
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
        if (!(($default & 512) === 0))
          $dirty = $dirty & -1879048193;
        if (!(($default & 2048) === 0))
          $dirty1 = $dirty1 & -113;
        if (!(($default & 16384) === 0))
          $dirty1 = $dirty1 & -57345;
      }
      $composer_0.e31();
      if (isTraceInProgress()) {
        traceEventStart(-1035285987, $dirty, $dirty1, 'team.platforma.multiplatform_material_extension.fab.AppFab (AppFab.kt:56)');
      }
      $composer_0.a31(257922642);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.w32();
      var tmp;
      if (false || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      var mExpand$delegate = tmp0_group;
      $composer_0.a31(257924401);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.w32();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_0 = mutableStateOf(true);
        this_1.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      var mEnabled$delegate = tmp1_group;
      $composer_0.a31(257926033);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.w32();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_1 = mutableStateOf(true);
        this_2.h33(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.c31();
      var mHide$delegate = tmp2_group;
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_3 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.n33(this_3);
      sourceInformationMarkerEnd($composer_1);
      var density = tmp0;
      var tmp_5 = expand_0._v;
      $composer_0.a31(257929296);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_4.w32();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_2 = AppFab$slambda_0(expand_0, mExpand$delegate, null);
        this_4.h33(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(tmp_5, tmp3_group, $composer_0, 14 & $dirty);
      var tmp_8 = enabled_0._v;
      $composer_0.a31(257931282);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      var invalid_0 = ($dirty & 3670016) === 1048576;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_5.w32();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_3 = AppFab$slambda_2(enabled_0, mEnabled$delegate, null);
        this_5.h33(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp4_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(tmp_8, tmp4_group, $composer_0, 14 & $dirty >> 18);
      var tmp_11 = hide_0._v;
      $composer_0.a31(257933228);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      var invalid_1 = ($dirty & 29360128) === 8388608;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_6.w32();
      var tmp_12;
      if (invalid_1 || it_4 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_4 = AppFab$slambda_4(hide_0, mHide$delegate, null);
        this_6.h33(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp5_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(tmp_11, tmp5_group, $composer_0, 14 & $dirty >> 21);
      $composer_0.a31(257936559);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_7.w32();
      var tmp_14;
      if (false || it_5 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_5 = mutableStateOf(0.0);
        this_7.h33(value_5);
        tmp_14 = value_5;
      } else {
        tmp_14 = it_5;
      }
      var tmp_15 = tmp_14;
      var tmp6_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      $composer_0.c31();
      var maxWidth$delegate = tmp6_group;
      var tmp_16;
      if (AppFab$lambda(mExpand$delegate)) {
        var tmp_17;
        if (!(text_0._v == null)) {
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
          tmp_17 = density.m5i(AppFab$lambda_5(maxWidth$delegate));
        } else {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_17 = _Dp___init__impl__ms3zkb(56);
        }
        tmp_16 = tmp_17;
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_16 = _Dp___init__impl__ms3zkb(56);
      }
      var tmp_18 = tmp_16;
      var tmp_19;
      if (AppFab$lambda(mExpand$delegate)) {
        var tmp_20;
        switch (expandStrategy_0._v.z2_1) {
          case 0:
            var tmp1_elvis_lhs = expandDuration_0._v;
            tmp_20 = tween(tmp1_elvis_lhs == null ? 200 : tmp1_elvis_lhs);
            break;
          case 1:
            var tmp2_elvis_lhs = expandDuration_0._v;
            tmp_20 = tween(tmp2_elvis_lhs == null ? 60 : tmp2_elvis_lhs);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp_19 = tmp_20;
      } else {
        var tmp3_elvis_lhs = shrinkDuration_0._v;
        tmp_19 = tween(tmp3_elvis_lhs == null ? 120 : tmp3_elvis_lhs);
      }
      var tmp_21 = tmp_19;
      var width$delegate = animateDpAsState(tmp_18, tmp_21, null, null, $composer_0, 0, 12);
      var tmp_22 = AppFab$lambda(mExpand$delegate) ? 1.0 : 0.0;
      var tmp_23 = AppFab$lambda(mExpand$delegate) ? tween(120) : tween(60);
      var alpha$delegate = animateFloatAsState(tmp_22, tmp_23, 0.0, null, null, $composer_0, 0, 28);
      $composer_0.a31(257967881);
      if (expandStrategy_0._v.equals(ExpandStrategy_MaxWidth_getInstance())) {
        var tmp_24 = fillMaxWidth(Companion_instance);
        $composer_0.a31(257972949);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_8 = $composer_0;
        var invalid_2 = ($dirty & 57344) === 16384;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = this_8.w32();
        var tmp_25;
        if (invalid_2 || it_6 === Companion_getInstance().l2u_1) {
          // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
          var value_6 = AppFab$lambda_11(text_0, maxWidth$delegate);
          this_8.h33(value_6);
          tmp_25 = value_6;
        } else {
          tmp_25 = it_6;
        }
        var tmp_26 = tmp_25;
        var tmp7_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
        $composer_0.c31();
        Box(onGloballyPositioned(tmp_24, tmp7_group), $composer_0, 0);
      }
      $composer_0.c31();
      var tmp_27;
      if (AppFab$lambda_3(mHide$delegate)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_27 = _Dp___init__impl__ms3zkb(0);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_27 = _Dp___init__impl__ms3zkb(56);
      }
      var tmp_28 = tmp_27;
      var animatedHeight$delegate = animateDpAsState(tmp_28, null, null, null, $composer_0, 0, 14);
      var tmp_29;
      if (AppFab$lambda_3(mHide$delegate)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_29 = _Dp___init__impl__ms3zkb(0);
      } else {
        tmp_29 = AppFab$lambda_7(width$delegate);
      }
      var tmp_30 = tmp_29;
      var animatedWidth$delegate = animateDpAsState(tmp_30, null, null, null, $composer_0, 0, 14);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var tmp_31 = modifier_0._v;
      var tmp_32 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$40 = _Dp___init__impl__ms3zkb(56);
      var tmp_33 = heightIn(tmp_32, tmp$ret$40);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$41 = _Dp___init__impl__ms3zkb(56);
      var modifier_1 = tmp_31.i7q(widthIn(tmp_33, tmp$ret$41));
      var contentAlignment = Companion_getInstance_0().q7p_1;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_0().m7p_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
      var localMap = $composer_3.u32();
      var materialized = materialize($composer_3, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().s9e_1;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_34 = $composer_4.v30();
      if (!isInterface(tmp_34, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
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
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
      var $composer_6 = $composer_5;
      var tmp0_modifier = heightIn(width(Companion_instance, AppFab$lambda_10(animatedWidth$delegate)), AppFab$lambda_9(animatedHeight$delegate), AppFab$lambda_9(animatedHeight$delegate));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$44 = _Dp___init__impl__ms3zkb(0);
      var tmp1_contentPadding = PaddingValues(tmp$ret$44);
      var tmp2_enabled = AppFab$lambda_1(mEnabled$delegate);
      $composer_6.a31(-1041904836);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_6.w32();
      var tmp_35;
      if (invalid_3 || it_7 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>' call
        var value_7 = AppFab$lambda_12(onClick);
        $composer_6.h33(value_7);
        tmp_35 = value_7;
      } else {
        tmp_35 = it_7;
      }
      var tmp_36 = tmp_35;
      var tmp0_group_0 = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
      $composer_6.c31();
      var tmp_37 = shape_0._v;
      var tmp_38 = colors_0._v;
      var tmp_39 = elevation_0._v;
      var tmp_40 = border_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1378727271, true, AppFab$lambda_13(iconGravity_0, text_0, expandStrategy_0, icon, maxWidth$delegate, alpha$delegate), $composer_6, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = $composer_7.f2r(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_7.w32();
      var tmp_41;
      if (invalid_4 || it_8 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>' call
        var value_8 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_7.h33(value_8);
        tmp_41 = value_8;
      } else {
        tmp_41 = it_8;
      }
      var tmp_42 = tmp_41;
      var tmp0_0 = (tmp_42 == null ? true : !(tmp_42 == null)) ? tmp_42 : THROW_CCE();
      sourceInformationMarkerEnd($composer_7);
      Button(tmp0_group_0, tmp0_modifier, tmp2_enabled, tmp_37, tmp_38, tmp_39, tmp_40, tmp1_contentPadding, null, tmp0_0, $composer_6, 817889280 | 7168 & $dirty >> 15 | 57344 & $dirty >> 15 | 458752 & $dirty1 << 12 | 3670016 & $dirty1 << 6, 256);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.u31();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
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
      tmp8_safe_receiver.n38(AppFab$lambda_14(expand_0, modifier_0, expandStrategy_0, iconGravity_0, text_0, icon, enabled_0, hide_0, shape_0, colors_0, onClick, elevation_0, expandDuration_0, shrinkDuration_0, border_0, $changed, $changed1, $default));
    }
  }
  function AppFab$lambda($mExpand$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mExpand', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mExpand$delegate.c1();
  }
  function AppFab$lambda_0($mExpand$delegate, _set____db54di) {
    getLocalDelegateReference('mExpand', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mExpand$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function AppFab$lambda_1($mEnabled$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mEnabled', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mEnabled$delegate.c1();
  }
  function AppFab$lambda_2($mEnabled$delegate, _set____db54di) {
    getLocalDelegateReference('mEnabled', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mEnabled$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function AppFab$lambda_3($mHide$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mHide', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mHide$delegate.c1();
  }
  function AppFab$lambda_4($mHide$delegate, _set____db54di) {
    getLocalDelegateReference('mHide', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mHide$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function AppFab$lambda_5($maxWidth$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('maxWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $maxWidth$delegate.c1();
  }
  function AppFab$lambda_6($maxWidth$delegate, _set____db54di) {
    getLocalDelegateReference('maxWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $maxWidth$delegate.a1y(_set____db54di);
    return Unit_instance;
  }
  function AppFab$lambda_7($width$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('width', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $width$delegate.c1().u5i_1;
  }
  function AppFab$lambda_8($alpha$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('alpha', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $alpha$delegate.c1();
  }
  function AppFab$lambda_9($animatedHeight$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedHeight', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animatedHeight$delegate.c1().u5i_1;
  }
  function AppFab$lambda_10($animatedWidth$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedWidth', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animatedWidth$delegate.c1().u5i_1;
  }
  function AppFab$slambda($expand, $mExpand$delegate, resultContinuation) {
    this.ip0_1 = $expand;
    this.jp0_1 = $mExpand$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppFab$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AppFab$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppFab$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          AppFab$lambda_0(this.jp0_1, this.ip0_1._v);
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
  protoOf(AppFab$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new AppFab$slambda(this.ip0_1, this.jp0_1, completion);
    i.kp0_1 = $this$LaunchedEffect;
    return i;
  };
  function AppFab$slambda_0($expand, $mExpand$delegate, resultContinuation) {
    var i = new AppFab$slambda($expand, $mExpand$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppFab$slambda_1($enabled, $mEnabled$delegate, resultContinuation) {
    this.tp0_1 = $enabled;
    this.up0_1 = $mEnabled$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppFab$slambda_1).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AppFab$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppFab$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          AppFab$lambda_2(this.up0_1, this.tp0_1._v);
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
  protoOf(AppFab$slambda_1).b20 = function ($this$LaunchedEffect, completion) {
    var i = new AppFab$slambda_1(this.tp0_1, this.up0_1, completion);
    i.vp0_1 = $this$LaunchedEffect;
    return i;
  };
  function AppFab$slambda_2($enabled, $mEnabled$delegate, resultContinuation) {
    var i = new AppFab$slambda_1($enabled, $mEnabled$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppFab$slambda_3($hide, $mHide$delegate, resultContinuation) {
    this.ep1_1 = $hide;
    this.fp1_1 = $mHide$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppFab$slambda_3).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AppFab$slambda_3).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppFab$slambda_3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          AppFab$lambda_4(this.fp1_1, this.ep1_1._v);
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
  protoOf(AppFab$slambda_3).b20 = function ($this$LaunchedEffect, completion) {
    var i = new AppFab$slambda_3(this.ep1_1, this.fp1_1, completion);
    i.gp1_1 = $this$LaunchedEffect;
    return i;
  };
  function AppFab$slambda_4($hide, $mHide$delegate, resultContinuation) {
    var i = new AppFab$slambda_3($hide, $mHide$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppFab$lambda_11($text, $maxWidth$delegate) {
    return function (coordinates) {
      var tmp;
      if (!($text._v == null)) {
        AppFab$lambda_6($maxWidth$delegate, _IntSize___get_width__impl__d9yl4o(coordinates.r7w()));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AppFab$lambda_12($onClick) {
    return function () {
      $onClick();
      return Unit_instance;
    };
  }
  function AppFab$lambda$lambda($expandStrategy, $maxWidth$delegate) {
    return function (layoutCoordinates) {
      var tmp;
      if ($expandStrategy._v.equals(ExpandStrategy_WrapContent_getInstance())) {
        var tmp_0 = _IntSize___get_width__impl__d9yl4o(layoutCoordinates.r7w());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
        AppFab$lambda_6($maxWidth$delegate, tmp_0 + correction(tmp$ret$0));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AppFab$lambda_13($iconGravity, $text, $expandStrategy, $icon, $maxWidth$delegate, $alpha$delegate) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.u30()) {
        if (isTraceInProgress()) {
          traceEventStart(1378727271, $changed, -1, 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous> (AppFab.kt:148)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_0;
        switch ($iconGravity._v.z2_1) {
          case 1:
            tmp_0 = Companion_getInstance_0().r7p_1;
            break;
          case 0:
            tmp_0 = Companion_getInstance_0().p7p_1;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var modifier = Companion_instance;
        var contentAlignment = tmp_0;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_0().m7p_1;
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
        var factory = Companion_getInstance_1().s9e_1;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.v30();
        if (!isInterface(tmp_1, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().x9e_1);
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
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_1 = fillMaxWidth(Companion_instance);
        var verticalArrangement = null;
        var horizontalAlignment = Companion_getInstance_0().z7p_1;
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((2 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().wbv_1;
        if (!((2 & 4) === 0))
          horizontalAlignment = Companion_getInstance_0().y7p_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 390 >> 3 | 112 & 390 >> 3);
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
        var factory_0 = Companion_getInstance_1().s9e_1;
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_8.v30();
        if (!isInterface(tmp_2, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.j31() || !equals($this$with_0.w32(), compositeKeyHash_0)) {
          $this$with_0.h33(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).z31(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        $composer_10.a31(-670020038);
        if (!($text._v == null)) {
          // Inline function 'androidx.compose.foundation.layout.Box' call
          var tmp_3 = Companion_instance;
          $composer_10.a31(-670015843);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_10.f2r($expandStrategy._v);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_10.w32();
          var tmp_4;
          if (invalid || it === Companion_getInstance().l2u_1) {
            // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = AppFab$lambda$lambda($expandStrategy, $maxWidth$delegate);
            $composer_10.h33(value);
            tmp_4 = value;
          } else {
            tmp_4 = it;
          }
          var tmp_5 = tmp_4;
          var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_10.c31();
          var tmp_6 = alpha(onGloballyPositioned(tmp_3, tmp0_group), AppFab$lambda_8($alpha$delegate));
          var tmp_7;
          switch ($expandStrategy._v.z2_1) {
            case 1:
              var tmp_8;
              switch ($iconGravity._v.z2_1) {
                case 0:
                  // Inline function 'androidx.compose.ui.unit.dp' call

                  tmp_8 = _Dp___init__impl__ms3zkb(24);
                  break;
                case 1:
                  // Inline function 'androidx.compose.ui.unit.dp' call

                  tmp_8 = _Dp___init__impl__ms3zkb(0);
                  break;
                default:
                  noWhenBranchMatchedException();
                  break;
              }

              tmp_7 = tmp_8;
              break;
            case 0:
              // Inline function 'androidx.compose.ui.unit.dp' call

              tmp_7 = _Dp___init__impl__ms3zkb(0);
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          var tmp_9 = tmp_7;
          var tmp_10;
          switch ($expandStrategy._v.z2_1) {
            case 1:
              var tmp_11;
              switch ($iconGravity._v.z2_1) {
                case 0:
                  // Inline function 'androidx.compose.ui.unit.dp' call

                  tmp_11 = _Dp___init__impl__ms3zkb(0);
                  break;
                case 1:
                  // Inline function 'androidx.compose.ui.unit.dp' call

                  tmp_11 = _Dp___init__impl__ms3zkb(24);
                  break;
                default:
                  noWhenBranchMatchedException();
                  break;
              }

              tmp_10 = tmp_11;
              break;
            case 0:
              // Inline function 'androidx.compose.ui.unit.dp' call

              tmp_10 = _Dp___init__impl__ms3zkb(0);
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          var modifier_3 = padding(tmp_6, tmp_9, VOID, tmp_10);
          var contentAlignment_0 = null;
          var propagateMinConstraints_0 = false;
          var $composer_11 = $composer_10;
          sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
          if (!((6 & 1) === 0))
            modifier_3 = Companion_instance;
          if (!((6 & 2) === 0))
            contentAlignment_0 = Companion_getInstance_0().m7p_1;
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
          var factory_1 = Companion_getInstance_1().s9e_1;
          var $composer_13 = $composer_12;
          sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
          var tmp_12 = $composer_13.v30();
          if (!isInterface(tmp_12, Applier)) {
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
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_1().x9e_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_1().w9e_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block_1 = Companion_getInstance_1().a9f_1;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
          if ($this$with_1.j31() || !equals($this$with_1.w32(), compositeKeyHash_1)) {
            $this$with_1.h33(compositeKeyHash_1);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).z31(compositeKeyHash_1, block_1);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_1().u9e_1);
          // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
          var $composer_14 = $composer_13;
          sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
          // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var $composer_15 = $composer_14;
          $text._v($composer_15, 0);
          sourceInformationMarkerEnd($composer_14);
          $composer_13.u31();
          sourceInformationMarkerEnd($composer_13);
          sourceInformationMarkerEnd($composer_12);
          sourceInformationMarkerEnd($composer_11);
        }
        $composer_10.c31();
        sourceInformationMarkerEnd($composer_9);
        $composer_8.u31();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_13;
        switch ($iconGravity._v.z2_1) {
          case 1:
            var tmp_14 = Companion_instance;
            // Inline function 'androidx.compose.ui.unit.dp' call

            var tmp$ret$16 = _Dp___init__impl__ms3zkb(48);
            var tmp_15 = size(tmp_14, tmp$ret$16);
            // Inline function 'androidx.compose.ui.unit.dp' call

            var tmp$ret$17 = _Dp___init__impl__ms3zkb(8);
            tmp_13 = padding(tmp_15, VOID, VOID, tmp$ret$17);
            break;
          case 0:
            var tmp_16 = Companion_instance;
            // Inline function 'androidx.compose.ui.unit.dp' call

            var tmp$ret$18 = _Dp___init__impl__ms3zkb(48);
            var tmp_17 = size(tmp_16, tmp$ret$18);
            // Inline function 'androidx.compose.ui.unit.dp' call

            var tmp$ret$19 = _Dp___init__impl__ms3zkb(8);
            tmp_13 = padding(tmp_17, tmp$ret$19);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var modifier_5 = tmp_13;
        var contentAlignment_1 = Companion_getInstance_0().q7p_1;
        var propagateMinConstraints_1 = false;
        var $composer_16 = $composer_5;
        sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_5 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment_1 = Companion_getInstance_0().m7p_1;
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
        var factory_2 = Companion_getInstance_1().s9e_1;
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_1().x9e_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_1().w9e_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_2 = Companion_getInstance_1().a9f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
        if ($this$with_2.j31() || !equals($this$with_2.w32(), compositeKeyHash_2)) {
          $this$with_2.h33(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).z31(compositeKeyHash_2, block_2);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_1().u9e_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_19 = $composer_18;
        sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_20 = $composer_19;
        $icon($composer_20, 0);
        sourceInformationMarkerEnd($composer_19);
        $composer_18.u31();
        sourceInformationMarkerEnd($composer_18);
        sourceInformationMarkerEnd($composer_17);
        sourceInformationMarkerEnd($composer_16);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.u31();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_19;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_19 = Unit_instance;
        }
        tmp = tmp_19;
      } else {
        $composer_0.c2u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o40(p0, p1, p2);
    };
  }
  function AppFab$lambda_14($expand, $modifier, $expandStrategy, $iconGravity, $text, $icon, $enabled, $hide, $shape, $colors, $onClick, $elevation, $expandDuration, $shrinkDuration, $border, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AppFab($expand._v, $modifier._v, $expandStrategy._v, $iconGravity._v, $text._v, $icon, $enabled._v, $hide._v, $shape._v, $colors._v, $onClick, $elevation._v, $expandDuration._v, $shrinkDuration._v, $border._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  var team_platforma_multiplatform_material_extension_fab_style_AppFabStyle$stable;
  function AppFabStyle() {
    AppFabStyle_instance = this;
    this.yoz_1 = new Button_0();
  }
  protoOf(AppFabStyle).zoz = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(1306234444);
    if (isTraceInProgress()) {
      traceEventStart(1306234444, $changed, -1, 'team.platforma.multiplatform_material_extension.fab.style.AppFabStyle.fabButton (AppFabStyle.kt:26)');
    }
    var tmp0_elvis_lhs = this.yoz_1.joz_1;
    $composer_0.a31(1855731651);
    var tmp1_group = tmp0_elvis_lhs == null ? AppButtonStyle_getInstance().xoz($composer_0, 0).noz_1 : tmp0_elvis_lhs;
    $composer_0.c31();
    var tmp1_elvis_lhs = this.yoz_1.koz_1;
    $composer_0.a31(1855734053);
    var tmp2_group = tmp1_elvis_lhs == null ? AppButtonStyle_getInstance().xoz($composer_0, 0).ooz_1 : tmp1_elvis_lhs;
    $composer_0.c31();
    var tmp2_elvis_lhs = this.yoz_1.loz_1;
    $composer_0.a31(1855736830);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = ButtonDefaults_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_1 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_2 = _Dp___init__impl__ms3zkb(0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_3 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_4 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(0);
      tmp = tmp_0.pmd(tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$4, $composer_0, 28086, 0);
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var tmp3_group = tmp;
    $composer_0.c31();
    var tmp3_elvis_lhs = this.yoz_1.moz_1;
    var tmp4_group = tmp3_elvis_lhs == null ? AppButtonStyle_getInstance().xoz($composer_0, 0).qoz_1 : tmp3_elvis_lhs;
    var tmp0 = new FilledButton(tmp1_group, tmp2_group, tmp3_group, tmp4_group);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  var AppFabStyle_instance;
  function AppFabStyle_getInstance() {
    if (AppFabStyle_instance == null)
      new AppFabStyle();
    return AppFabStyle_instance;
  }
  var team_platforma_multiplatform_material_extension_model_FieldValidateState$stable;
  var team_platforma_multiplatform_material_extension_model_RequiredField$stable;
  var team_platforma_multiplatform_material_extension_scrollbar_style_ScrollIndicatorStyle$stable;
  var team_platforma_multiplatform_material_extension_tab_row_style_AdaptiveTabRowStyle$stable;
  var team_platforma_multiplatform_material_extension_tab_row_style_Tab$stable;
  var team_platforma_multiplatform_material_extension_tab_row_style_TabRow$stable;
  var team_platforma_multiplatform_material_extension_text_input_style_TextInput$stable;
  var team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stable;
  var team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stable;
  function ToolbarStyle$define$lambda($tmp0_rcvr, $toolbarStyle, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.ip1($toolbarStyle, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ToolbarStyle() {
    ToolbarStyle_instance = this;
    this.hp1_1 = new AppToolbarStyle();
  }
  protoOf(ToolbarStyle).ip1 = function (toolbarStyle, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-1576086802);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(toolbarStyle) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f32(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-1576086802, $dirty, -1, 'team.platforma.multiplatform_material_extension.toolbar.ToolbarStyle.define (AppToolbar.kt:44)');
      }
      this.hp1_1 = toolbarStyle;
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
      tmp1_safe_receiver.n38(ToolbarStyle$define$lambda(this, toolbarStyle, $changed));
    }
  };
  var ToolbarStyle_instance;
  function ToolbarStyle_getInstance() {
    if (ToolbarStyle_instance == null)
      new ToolbarStyle();
    return ToolbarStyle_instance;
  }
  function AppToolbarStyle(containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor) {
    containerColor = containerColor === VOID ? null : containerColor;
    scrolledContainerColor = scrolledContainerColor === VOID ? null : scrolledContainerColor;
    navigationIconContentColor = navigationIconContentColor === VOID ? null : navigationIconContentColor;
    titleContentColor = titleContentColor === VOID ? null : titleContentColor;
    actionIconContentColor = actionIconContentColor === VOID ? null : actionIconContentColor;
    this.jp1_1 = containerColor;
    this.kp1_1 = scrolledContainerColor;
    this.lp1_1 = navigationIconContentColor;
    this.mp1_1 = titleContentColor;
    this.np1_1 = actionIconContentColor;
  }
  protoOf(AppToolbarStyle).toString = function () {
    var tmp = this.jp1_1;
    var tmp_0 = toString(tmp == null ? null : new Color(tmp));
    var tmp_1 = this.kp1_1;
    var tmp_2 = toString(tmp_1 == null ? null : new Color(tmp_1));
    var tmp_3 = this.lp1_1;
    var tmp_4 = toString(tmp_3 == null ? null : new Color(tmp_3));
    var tmp_5 = this.mp1_1;
    var tmp_6 = toString(tmp_5 == null ? null : new Color(tmp_5));
    var tmp_7 = this.np1_1;
    return 'AppToolbarStyle(containerColor=' + tmp_0 + ', scrolledContainerColor=' + tmp_2 + ', navigationIconContentColor=' + tmp_4 + ', titleContentColor=' + tmp_6 + ', actionIconContentColor=' + toString(tmp_7 == null ? null : new Color(tmp_7)) + ')';
  };
  protoOf(AppToolbarStyle).hashCode = function () {
    var tmp;
    var tmp_0 = this.jp1_1;
    if ((tmp_0 == null ? null : new Color(tmp_0)) == null) {
      tmp = 0;
    } else {
      tmp = Color__hashCode_impl_vjyivj(this.jp1_1);
    }
    var result = tmp;
    var tmp_1 = imul(result, 31);
    var tmp_2;
    var tmp_3 = this.kp1_1;
    if ((tmp_3 == null ? null : new Color(tmp_3)) == null) {
      tmp_2 = 0;
    } else {
      tmp_2 = Color__hashCode_impl_vjyivj(this.kp1_1);
    }
    result = tmp_1 + tmp_2 | 0;
    var tmp_4 = imul(result, 31);
    var tmp_5;
    var tmp_6 = this.lp1_1;
    if ((tmp_6 == null ? null : new Color(tmp_6)) == null) {
      tmp_5 = 0;
    } else {
      tmp_5 = Color__hashCode_impl_vjyivj(this.lp1_1);
    }
    result = tmp_4 + tmp_5 | 0;
    var tmp_7 = imul(result, 31);
    var tmp_8;
    var tmp_9 = this.mp1_1;
    if ((tmp_9 == null ? null : new Color(tmp_9)) == null) {
      tmp_8 = 0;
    } else {
      tmp_8 = Color__hashCode_impl_vjyivj(this.mp1_1);
    }
    result = tmp_7 + tmp_8 | 0;
    var tmp_10 = imul(result, 31);
    var tmp_11;
    var tmp_12 = this.np1_1;
    if ((tmp_12 == null ? null : new Color(tmp_12)) == null) {
      tmp_11 = 0;
    } else {
      tmp_11 = Color__hashCode_impl_vjyivj(this.np1_1);
    }
    result = tmp_10 + tmp_11 | 0;
    return result;
  };
  protoOf(AppToolbarStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AppToolbarStyle))
      return false;
    var tmp0_other_with_cast = other instanceof AppToolbarStyle ? other : THROW_CCE();
    var tmp = this.jp1_1;
    var tmp_0 = tmp == null ? null : new Color(tmp);
    var tmp_1 = tmp0_other_with_cast.jp1_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Color(tmp_1)))
      return false;
    var tmp_2 = this.kp1_1;
    var tmp_3 = tmp_2 == null ? null : new Color(tmp_2);
    var tmp_4 = tmp0_other_with_cast.kp1_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new Color(tmp_4)))
      return false;
    var tmp_5 = this.lp1_1;
    var tmp_6 = tmp_5 == null ? null : new Color(tmp_5);
    var tmp_7 = tmp0_other_with_cast.lp1_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new Color(tmp_7)))
      return false;
    var tmp_8 = this.mp1_1;
    var tmp_9 = tmp_8 == null ? null : new Color(tmp_8);
    var tmp_10 = tmp0_other_with_cast.mp1_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Color(tmp_10)))
      return false;
    var tmp_11 = this.np1_1;
    var tmp_12 = tmp_11 == null ? null : new Color(tmp_11);
    var tmp_13 = tmp0_other_with_cast.np1_1;
    if (!equals(tmp_12, tmp_13 == null ? null : new Color(tmp_13)))
      return false;
    return true;
  };
  function team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter() {
    return team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stable;
  }
  function team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter() {
    return team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stable;
  }
  var team_platforma_multiplatform_material_extension_tooltips_TooltipStyle$stable;
  var ExpandStrategy_MaxWidth_instance;
  var ExpandStrategy_WrapContent_instance;
  var ExpandStrategy_entriesInitialized;
  function ExpandStrategy_initEntries() {
    if (ExpandStrategy_entriesInitialized)
      return Unit_instance;
    ExpandStrategy_entriesInitialized = true;
    ExpandStrategy_MaxWidth_instance = new ExpandStrategy('MaxWidth', 0);
    ExpandStrategy_WrapContent_instance = new ExpandStrategy('WrapContent', 1);
  }
  function ExpandStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var IconGravity_Start_instance;
  var IconGravity_End_instance;
  var IconGravity_entriesInitialized;
  function IconGravity_initEntries() {
    if (IconGravity_entriesInitialized)
      return Unit_instance;
    IconGravity_entriesInitialized = true;
    IconGravity_Start_instance = new IconGravity('Start', 0);
    IconGravity_End_instance = new IconGravity('End', 1);
  }
  function IconGravity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ExpandStrategy_MaxWidth_getInstance() {
    ExpandStrategy_initEntries();
    return ExpandStrategy_MaxWidth_instance;
  }
  function ExpandStrategy_WrapContent_getInstance() {
    ExpandStrategy_initEntries();
    return ExpandStrategy_WrapContent_instance;
  }
  function IconGravity_End_getInstance() {
    IconGravity_initEntries();
    return IconGravity_End_instance;
  }
  var team_platforma_multiplatform_material_extension_ui_buttons_utils_ButtonIcon$stable;
  var team_platforma_multiplatform_material_extension_ui_buttons_utils_ButtonText$stable;
  var team_platforma_multiplatform_material_extension_ui_chip_style_ExtraInputChipStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_chip_style_InputChipColors$stable;
  var team_platforma_multiplatform_material_extension_ui_chip_style_InputChipElevation$stable;
  var team_platforma_multiplatform_material_extension_ui_chip_style_InputChipBorder$stable;
  var team_platforma_multiplatform_material_extension_ui_core_InputFieldProperties$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_CheckBoxColorScheme$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_ElevatedButtonColorScheme$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_ExtraFabStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_FilledButtonColorScheme$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_OutlineButtonColorScheme$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_TextButtonColorScheme$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_TextFieldColorScheme$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_TonalButtonColorScheme$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_area_TextFieldCommon$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_shape_FilledTextFieldShape$stable;
  var team_platforma_multiplatform_material_extension_ui_core_global_style_shape_OutlineTextFieldShape$stable;
  var team_platforma_multiplatform_material_extension_ui_date_DateField$stable;
  var team_platforma_multiplatform_material_extension_ui_date_DateInputMessage$stable;
  var team_platforma_multiplatform_material_extension_ui_date_DateFieldPeriod$stable;
  var team_platforma_multiplatform_material_extension_ui_dialog_style_CommonDialogStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_dialog_style_DialogStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_dialog_style_GlobalDialogStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_dialog_utils_CommonDialogViewState$stable;
  var team_platforma_multiplatform_material_extension_ui_drop_down_DropdownField$stable;
  var team_platforma_multiplatform_material_extension_ui_drop_down_DropDownFieldStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_drop_down_DropDownListStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_drop_down_DropDownItemStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_drop_down_DropDownTextFieldStyle$stable;
  var team_platforma_multiplatform_material_extension_ui_drop_down_SearchField$stable;
  var team_platforma_multiplatform_material_extension_ui_drop_down_model_ListItem$stable;
  var team_platforma_multiplatform_material_extension_ui_email_EmailField$stable;
  var team_platforma_multiplatform_material_extension_ui_email_EmailInputMessages$stable;
  var team_platforma_multiplatform_material_extension_ui_flexbox_InputChipItem$stable;
  var team_platforma_multiplatform_material_extension_ui_full_name_FullNameField$stable;
  var team_platforma_multiplatform_material_extension_ui_full_name_FullNameMessage$stable;
  var team_platforma_multiplatform_material_extension_ui_password_PasswordField$stable;
  var team_platforma_multiplatform_material_extension_ui_phone_PhoneField$stable;
  var team_platforma_multiplatform_material_extension_ui_referral_code_ReferralCodeField$stable;
  var team_platforma_multiplatform_material_extension_ui_theme_Theme$stable;
  function Theme() {
    Theme_instance = this;
    this.op1_1 = MutableStateFlow(false);
    this.pp1_1 = this.op1_1;
  }
  protoOf(Theme).qp1 = function (isDarkTheme) {
    this.op1_1.a1y(isDarkTheme);
  };
  var Theme_instance;
  function Theme_getInstance() {
    if (Theme_instance == null)
      new Theme();
    return Theme_instance;
  }
  function rememberTheme(autoSwitch, $composer, $changed, $default) {
    var autoSwitch_0 = autoSwitch;
    var $composer_0 = $composer;
    $composer_0.a31(95699876);
    if (!(($default & 1) === 0))
      autoSwitch_0 = false;
    if (isTraceInProgress()) {
      traceEventStart(95699876, $changed, -1, 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme (Theme.kt:28)');
    }
    var initDarkTheme = isDarkTheme($composer_0, 0);
    if (autoSwitch_0) {
      $composer_0.a31(-2008350853);
      $composer_0.a31(-1727352263);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.g32(initDarkTheme);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp;
      if (invalid || it === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme.<anonymous>' call
        var value = rememberTheme$slambda_0(initDarkTheme, null);
        $composer_0.h33(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(initDarkTheme, tmp1_group, $composer_0, 0);
      $composer_0.c31();
    } else {
      $composer_0.a31(-2008243004);
      $composer_0.a31(-1727349063);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.g32(initDarkTheme);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.w32();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().l2u_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme.<anonymous>' call
        var value_0 = rememberTheme$slambda_2(initDarkTheme, null);
        $composer_0.h33(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.c31();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
      $composer_0.c31();
    }
    var tmp0 = Theme_getInstance();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function isDark(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-194825026);
    if (isTraceInProgress()) {
      traceEventStart(-194825026, $changed, -1, 'team.platforma.multiplatform_material_extension.ui.theme.isDark (Theme.kt:23)');
    }
    var tmp0 = collectAsState(_this__u8e3s4.pp1_1, null, $composer_0, 0, 1).c1();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function rememberTheme$slambda($initDarkTheme, resultContinuation) {
    this.zp1_1 = $initDarkTheme;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTheme$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(rememberTheme$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTheme$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          Theme_getInstance().qp1(this.zp1_1);
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
  protoOf(rememberTheme$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new rememberTheme$slambda(this.zp1_1, completion);
    i.ap2_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberTheme$slambda_0($initDarkTheme, resultContinuation) {
    var i = new rememberTheme$slambda($initDarkTheme, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberTheme$slambda_1($initDarkTheme, resultContinuation) {
    this.jp2_1 = $initDarkTheme;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTheme$slambda_1).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(rememberTheme$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTheme$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          Theme_getInstance().qp1(this.jp2_1);
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
  protoOf(rememberTheme$slambda_1).b20 = function ($this$LaunchedEffect, completion) {
    var i = new rememberTheme$slambda_1(this.jp2_1, completion);
    i.kp2_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberTheme$slambda_2($initDarkTheme, resultContinuation) {
    var i = new rememberTheme$slambda_1($initDarkTheme, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var team_platforma_multiplatform_material_extension_util_DeferredJob$stable;
  var team_platforma_multiplatform_material_extension_util_FormValidator$stable;
  var team_platforma_multiplatform_material_extension_util_PhoneValidator$stable;
  var team_platforma_multiplatform_material_extension_util_ScreenPaddingValues$stable;
  var team_platforma_multiplatform_material_extension_util_StringValidator$stable;
  var team_platforma_multiplatform_material_extension_util_forms_FocusState$stable;
  var team_platforma_multiplatform_material_extension_util_forms_FormProperties$stable;
  var team_platforma_multiplatform_material_extension_util_forms_Forms$stable;
  var team_platforma_multiplatform_material_extension_util_IndicatorPadding$stable;
  var team_platforma_multiplatform_material_extension_util_visual_transformation_CodeVisualTransformation$stable;
  var team_platforma_multiplatform_material_extension_util_visual_transformation_IndexBasedTransformation$stable;
  var team_platforma_multiplatform_material_extension_util_visual_transformation_MaskVisualTransformation$stable;
  var system_component_style_SystemStyle$stable;
  var team_platforma_multiplatform_material_extension_JsFullScreenIframe$stable;
  function isDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(375608828);
    if (isTraceInProgress()) {
      traceEventStart(375608828, $changed, -1, 'team.platforma.multiplatform_material_extension.isDarkTheme (Platform.js.kt:61)');
    }
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var tmp0 = mediaQuery.matches;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  }
  function correction(dp) {
    return _Dp___get_value__impl__geb1vb(dp) * 2;
  }
  //region block: init
  materialextension_multiplatform_material_extension_generated_resources_Res_drawable$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_string$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_array$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_plurals$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_font$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res$stable = 0;
  team_platforma_multiplatform_material_extension_bottom_sheet_style_CommonBottomSheetStyle$stable = 8;
  team_platforma_multiplatform_material_extension_bottom_sheet_utils_CommonBottomSheetState$stable = 8;
  team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_Button$stable = 0;
  team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_FilledButton$stable = 0;
  team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_OutlineButton$stable = 0;
  team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_TextButton$stable = 0;
  team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_TonalButton$stable = 0;
  team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_ElevatedButton$stable = 0;
  team_platforma_multiplatform_material_extension_button_style_AppButtonStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_core_CalendarImpl$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_core_CalendarMonths$stable = 0;
  team_platforma_multiplatform_material_extension_calendar_properties_CalendarViewProperties$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_properties_DatePikerProperties$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_CalendarViewStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_DateStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalDateStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_CellPadding$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_PeriodStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_StartPeriod$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_EndPeriod$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_TrackPeriod$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_PeriodPadding$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalPeriodStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalStartPeriod$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalEndPeriod$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalTrackPeriod$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_BadgeStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalBadgeStyle$stable = 0;
  team_platforma_multiplatform_material_extension_calendar_style_MonthStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalMonthStyle$stable = 0;
  team_platforma_multiplatform_material_extension_calendar_style_PickerStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_PikerButton$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalPickerStyle$stable = 8;
  team_platforma_multiplatform_material_extension_calendar_style_GlobalPikerButton$stable = 0;
  team_platforma_multiplatform_material_extension_calendar_utils_CalendarRange$stable = 8;
  team_platforma_multiplatform_material_extension_fab_style_AppFabStyle$stable = 8;
  team_platforma_multiplatform_material_extension_model_FieldValidateState$stable = 0;
  team_platforma_multiplatform_material_extension_model_RequiredField$stable = 0;
  team_platforma_multiplatform_material_extension_scrollbar_style_ScrollIndicatorStyle$stable = 8;
  team_platforma_multiplatform_material_extension_tab_row_style_AdaptiveTabRowStyle$stable = 8;
  team_platforma_multiplatform_material_extension_tab_row_style_Tab$stable = 0;
  team_platforma_multiplatform_material_extension_tab_row_style_TabRow$stable = 0;
  team_platforma_multiplatform_material_extension_text_input_style_TextInput$stable = 8;
  team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stable = 8;
  team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stable = 0;
  team_platforma_multiplatform_material_extension_tooltips_TooltipStyle$stable = 8;
  team_platforma_multiplatform_material_extension_ui_buttons_utils_ButtonIcon$stable = 8;
  team_platforma_multiplatform_material_extension_ui_buttons_utils_ButtonText$stable = 8;
  team_platforma_multiplatform_material_extension_ui_chip_style_ExtraInputChipStyle$stable = 8;
  team_platforma_multiplatform_material_extension_ui_chip_style_InputChipColors$stable = 8;
  team_platforma_multiplatform_material_extension_ui_chip_style_InputChipElevation$stable = 8;
  team_platforma_multiplatform_material_extension_ui_chip_style_InputChipBorder$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_InputFieldProperties$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_CheckBoxColorScheme$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_ElevatedButtonColorScheme$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_ExtraFabStyle$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_FilledButtonColorScheme$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_OutlineButtonColorScheme$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_TextButtonColorScheme$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_TextFieldColorScheme$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_TonalButtonColorScheme$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_area_TextFieldCommon$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_shape_FilledTextFieldShape$stable = 8;
  team_platforma_multiplatform_material_extension_ui_core_global_style_shape_OutlineTextFieldShape$stable = 8;
  team_platforma_multiplatform_material_extension_ui_date_DateField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_date_DateInputMessage$stable = 0;
  team_platforma_multiplatform_material_extension_ui_date_DateFieldPeriod$stable = 0;
  team_platforma_multiplatform_material_extension_ui_dialog_style_CommonDialogStyle$stable = 8;
  team_platforma_multiplatform_material_extension_ui_dialog_style_DialogStyle$stable = 8;
  team_platforma_multiplatform_material_extension_ui_dialog_style_GlobalDialogStyle$stable = 8;
  team_platforma_multiplatform_material_extension_ui_dialog_utils_CommonDialogViewState$stable = 8;
  team_platforma_multiplatform_material_extension_ui_drop_down_DropdownField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_drop_down_DropDownFieldStyle$stable = 8;
  team_platforma_multiplatform_material_extension_ui_drop_down_DropDownListStyle$stable = 0;
  team_platforma_multiplatform_material_extension_ui_drop_down_DropDownItemStyle$stable = 0;
  team_platforma_multiplatform_material_extension_ui_drop_down_DropDownTextFieldStyle$stable = 0;
  team_platforma_multiplatform_material_extension_ui_drop_down_SearchField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_drop_down_model_ListItem$stable = 8;
  team_platforma_multiplatform_material_extension_ui_email_EmailField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_email_EmailInputMessages$stable = 8;
  team_platforma_multiplatform_material_extension_ui_flexbox_InputChipItem$stable = 0;
  team_platforma_multiplatform_material_extension_ui_full_name_FullNameField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_full_name_FullNameMessage$stable = 0;
  team_platforma_multiplatform_material_extension_ui_password_PasswordField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_phone_PhoneField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_referral_code_ReferralCodeField$stable = 0;
  team_platforma_multiplatform_material_extension_ui_theme_Theme$stable = 8;
  team_platforma_multiplatform_material_extension_util_DeferredJob$stable = 8;
  team_platforma_multiplatform_material_extension_util_FormValidator$stable = 8;
  team_platforma_multiplatform_material_extension_util_PhoneValidator$stable = 0;
  team_platforma_multiplatform_material_extension_util_ScreenPaddingValues$stable = 8;
  team_platforma_multiplatform_material_extension_util_StringValidator$stable = 0;
  team_platforma_multiplatform_material_extension_util_forms_FocusState$stable = 8;
  team_platforma_multiplatform_material_extension_util_forms_FormProperties$stable = 8;
  team_platforma_multiplatform_material_extension_util_forms_Forms$stable = 8;
  team_platforma_multiplatform_material_extension_util_IndicatorPadding$stable = 8;
  team_platforma_multiplatform_material_extension_util_visual_transformation_CodeVisualTransformation$stable = 0;
  team_platforma_multiplatform_material_extension_util_visual_transformation_IndexBasedTransformation$stable = 0;
  team_platforma_multiplatform_material_extension_util_visual_transformation_MaskVisualTransformation$stable = 0;
  system_component_style_SystemStyle$stable = 0;
  team_platforma_multiplatform_material_extension_JsFullScreenIframe$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ToolbarStyle_getInstance;
  _.$_$.b = AppFab;
  _.$_$.c = AppToolbarStyle;
  _.$_$.d = team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter;
  _.$_$.e = team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter;
  _.$_$.f = isDark;
  _.$_$.g = rememberTheme;
  //endregion
  return _;
}));

//# sourceMappingURL=MaterialExtension-multiplatform_material_extension.js.map
