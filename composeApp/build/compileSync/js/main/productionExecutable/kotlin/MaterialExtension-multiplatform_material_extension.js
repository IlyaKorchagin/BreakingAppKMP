(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    globalThis['MaterialExtension-multiplatform_material_extension'] = factory(typeof globalThis['MaterialExtension-multiplatform_material_extension'] === 'undefined' ? {} : globalThis['MaterialExtension-multiplatform_material_extension'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var VOID = kotlin_kotlin.$_$.i;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var toString = kotlin_kotlin.$_$.rk;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var isInterface = kotlin_kotlin.$_$.qd;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ToolbarStyle, 'ToolbarStyle');
  initMetadataForClass(AppToolbarStyle, 'AppToolbarStyle', AppToolbarStyle);
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
  var team_platforma_multiplatform_material_extension_model_FieldValidateState$stable;
  var team_platforma_multiplatform_material_extension_model_RequiredField$stable;
  var team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stable;
  var team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stable;
  function ToolbarStyle$define$lambda($tmp0_rcvr, $toolbarStyle, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.mjr($toolbarStyle, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ToolbarStyle() {
    ToolbarStyle_instance = this;
    this.ljr_1 = new AppToolbarStyle();
  }
  protoOf(ToolbarStyle).mjr = function (toolbarStyle, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-1576086802);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(toolbarStyle) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h2w(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-1576086802, $dirty, -1, 'team.platforma.multiplatform_material_extension.toolbar.ToolbarStyle.define (AppToolbar.kt:44)');
      }
      this.ljr_1 = toolbarStyle;
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
      tmp1_safe_receiver.r32(ToolbarStyle$define$lambda(this, toolbarStyle, $changed));
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
    this.njr_1 = containerColor;
    this.ojr_1 = scrolledContainerColor;
    this.pjr_1 = navigationIconContentColor;
    this.qjr_1 = titleContentColor;
    this.rjr_1 = actionIconContentColor;
  }
  protoOf(AppToolbarStyle).toString = function () {
    var tmp = this.njr_1;
    var tmp_0 = toString(tmp == null ? null : new Color(tmp));
    var tmp_1 = this.ojr_1;
    var tmp_2 = toString(tmp_1 == null ? null : new Color(tmp_1));
    var tmp_3 = this.pjr_1;
    var tmp_4 = toString(tmp_3 == null ? null : new Color(tmp_3));
    var tmp_5 = this.qjr_1;
    var tmp_6 = toString(tmp_5 == null ? null : new Color(tmp_5));
    var tmp_7 = this.rjr_1;
    return 'AppToolbarStyle(containerColor=' + tmp_0 + ', scrolledContainerColor=' + tmp_2 + ', navigationIconContentColor=' + tmp_4 + ', titleContentColor=' + tmp_6 + ', actionIconContentColor=' + toString(tmp_7 == null ? null : new Color(tmp_7)) + ')';
  };
  protoOf(AppToolbarStyle).hashCode = function () {
    var tmp;
    var tmp_0 = this.njr_1;
    if ((tmp_0 == null ? null : new Color(tmp_0)) == null) {
      tmp = 0;
    } else {
      tmp = Color__hashCode_impl_vjyivj(this.njr_1);
    }
    var result = tmp;
    var tmp_1 = imul(result, 31);
    var tmp_2;
    var tmp_3 = this.ojr_1;
    if ((tmp_3 == null ? null : new Color(tmp_3)) == null) {
      tmp_2 = 0;
    } else {
      tmp_2 = Color__hashCode_impl_vjyivj(this.ojr_1);
    }
    result = tmp_1 + tmp_2 | 0;
    var tmp_4 = imul(result, 31);
    var tmp_5;
    var tmp_6 = this.pjr_1;
    if ((tmp_6 == null ? null : new Color(tmp_6)) == null) {
      tmp_5 = 0;
    } else {
      tmp_5 = Color__hashCode_impl_vjyivj(this.pjr_1);
    }
    result = tmp_4 + tmp_5 | 0;
    var tmp_7 = imul(result, 31);
    var tmp_8;
    var tmp_9 = this.qjr_1;
    if ((tmp_9 == null ? null : new Color(tmp_9)) == null) {
      tmp_8 = 0;
    } else {
      tmp_8 = Color__hashCode_impl_vjyivj(this.qjr_1);
    }
    result = tmp_7 + tmp_8 | 0;
    var tmp_10 = imul(result, 31);
    var tmp_11;
    var tmp_12 = this.rjr_1;
    if ((tmp_12 == null ? null : new Color(tmp_12)) == null) {
      tmp_11 = 0;
    } else {
      tmp_11 = Color__hashCode_impl_vjyivj(this.rjr_1);
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
    var tmp = this.njr_1;
    var tmp_0 = tmp == null ? null : new Color(tmp);
    var tmp_1 = tmp0_other_with_cast.njr_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Color(tmp_1)))
      return false;
    var tmp_2 = this.ojr_1;
    var tmp_3 = tmp_2 == null ? null : new Color(tmp_2);
    var tmp_4 = tmp0_other_with_cast.ojr_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new Color(tmp_4)))
      return false;
    var tmp_5 = this.pjr_1;
    var tmp_6 = tmp_5 == null ? null : new Color(tmp_5);
    var tmp_7 = tmp0_other_with_cast.pjr_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new Color(tmp_7)))
      return false;
    var tmp_8 = this.qjr_1;
    var tmp_9 = tmp_8 == null ? null : new Color(tmp_8);
    var tmp_10 = tmp0_other_with_cast.qjr_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Color(tmp_10)))
      return false;
    var tmp_11 = this.rjr_1;
    var tmp_12 = tmp_11 == null ? null : new Color(tmp_11);
    var tmp_13 = tmp0_other_with_cast.rjr_1;
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
  var team_platforma_multiplatform_material_extension_ui_drop_down_DropdownField$stable;
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
    this.sjr_1 = MutableStateFlow(false);
    this.tjr_1 = this.sjr_1;
  }
  protoOf(Theme).ujr = function (isDarkTheme) {
    this.sjr_1.n1v(isDarkTheme);
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
    $composer_0.c2v(95699876);
    if (!(($default & 1) === 0))
      autoSwitch_0 = false;
    if (isTraceInProgress()) {
      traceEventStart(95699876, $changed, -1, 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme (Theme.kt:28)');
    }
    var initDarkTheme = isDarkTheme($composer_0, 0);
    if (autoSwitch_0) {
      $composer_0.c2v(-2008350853);
      $composer_0.c2v(-1727352263);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.i2w(initDarkTheme);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y2w();
      var tmp;
      if (invalid || it === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme.<anonymous>' call
        var value = rememberTheme$slambda_0(initDarkTheme, null);
        $composer_0.j2x(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(initDarkTheme, tmp1_group, $composer_0, 0);
      $composer_0.e2v();
    } else {
      $composer_0.c2v(-2008243004);
      $composer_0.c2v(-1727349063);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.i2w(initDarkTheme);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.y2w();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().n2o_1) {
        // Inline function 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme.<anonymous>' call
        var value_0 = rememberTheme$slambda_2(initDarkTheme, null);
        $composer_0.j2x(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.e2v();
      LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
      $composer_0.e2v();
    }
    var tmp0 = Theme_getInstance();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  }
  function isDark(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-194825026);
    if (isTraceInProgress()) {
      traceEventStart(-194825026, $changed, -1, 'team.platforma.multiplatform_material_extension.ui.theme.isDark (Theme.kt:23)');
    }
    var tmp0 = collectAsState(_this__u8e3s4.tjr_1, null, $composer_0, 0, 1).w();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  }
  function rememberTheme$slambda($initDarkTheme, resultContinuation) {
    this.djs_1 = $initDarkTheme;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTheme$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(rememberTheme$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTheme$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          Theme_getInstance().ujr(this.djs_1);
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
  protoOf(rememberTheme$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new rememberTheme$slambda(this.djs_1, completion);
    i.ejs_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberTheme$slambda_0($initDarkTheme, resultContinuation) {
    var i = new rememberTheme$slambda($initDarkTheme, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberTheme$slambda_1($initDarkTheme, resultContinuation) {
    this.njs_1 = $initDarkTheme;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTheme$slambda_1).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(rememberTheme$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTheme$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          Theme_getInstance().ujr(this.njs_1);
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
  protoOf(rememberTheme$slambda_1).f1x = function ($this$LaunchedEffect, completion) {
    var i = new rememberTheme$slambda_1(this.njs_1, completion);
    i.ojs_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberTheme$slambda_2($initDarkTheme, resultContinuation) {
    var i = new rememberTheme$slambda_1($initDarkTheme, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var team_platforma_multiplatform_material_extension_util_DeferredJob$stable;
  var team_platforma_multiplatform_material_extension_util_FormValidator$stable;
  var team_platforma_multiplatform_material_extension_util_PhoneValidator$stable;
  var team_platforma_multiplatform_material_extension_util_StringValidator$stable;
  var team_platforma_multiplatform_material_extension_util_forms_FocusState$stable;
  var team_platforma_multiplatform_material_extension_util_forms_FormProperties$stable;
  var team_platforma_multiplatform_material_extension_util_forms_Forms$stable;
  var team_platforma_multiplatform_material_extension_util_IndicatorPadding$stable;
  var team_platforma_multiplatform_material_extension_util_visual_transformation_CodeVisualTransformation$stable;
  var team_platforma_multiplatform_material_extension_util_visual_transformation_IndexBasedTransformation$stable;
  var team_platforma_multiplatform_material_extension_util_visual_transformation_MaskVisualTransformation$stable;
  var team_platforma_multiplatform_material_extension_JsFullScreenIframe$stable;
  function isDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(375608828);
    if (isTraceInProgress()) {
      traceEventStart(375608828, $changed, -1, 'team.platforma.multiplatform_material_extension.isDarkTheme (Platform.js.kt:58)');
    }
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var tmp0 = mediaQuery.matches;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  }
  //region block: init
  materialextension_multiplatform_material_extension_generated_resources_Res_drawable$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_string$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_array$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_plurals$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res_font$stable = 0;
  materialextension_multiplatform_material_extension_generated_resources_Res$stable = 0;
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
  team_platforma_multiplatform_material_extension_model_FieldValidateState$stable = 0;
  team_platforma_multiplatform_material_extension_model_RequiredField$stable = 0;
  team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stable = 8;
  team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stable = 0;
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
  team_platforma_multiplatform_material_extension_ui_drop_down_DropdownField$stable = 0;
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
  team_platforma_multiplatform_material_extension_util_StringValidator$stable = 0;
  team_platforma_multiplatform_material_extension_util_forms_FocusState$stable = 8;
  team_platforma_multiplatform_material_extension_util_forms_FormProperties$stable = 8;
  team_platforma_multiplatform_material_extension_util_forms_Forms$stable = 8;
  team_platforma_multiplatform_material_extension_util_IndicatorPadding$stable = 8;
  team_platforma_multiplatform_material_extension_util_visual_transformation_CodeVisualTransformation$stable = 0;
  team_platforma_multiplatform_material_extension_util_visual_transformation_IndexBasedTransformation$stable = 0;
  team_platforma_multiplatform_material_extension_util_visual_transformation_MaskVisualTransformation$stable = 0;
  team_platforma_multiplatform_material_extension_JsFullScreenIframe$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ToolbarStyle_getInstance;
  _.$_$.b = AppToolbarStyle;
  _.$_$.c = team_platforma_multiplatform_material_extension_toolbar_AppToolbarStyle$stableprop_getter;
  _.$_$.d = team_platforma_multiplatform_material_extension_toolbar_ToolbarStyle$stableprop_getter;
  _.$_$.e = isDark;
  _.$_$.f = rememberTheme;
  //endregion
  return _;
}));

//# sourceMappingURL=MaterialExtension-multiplatform_material_extension.js.map
