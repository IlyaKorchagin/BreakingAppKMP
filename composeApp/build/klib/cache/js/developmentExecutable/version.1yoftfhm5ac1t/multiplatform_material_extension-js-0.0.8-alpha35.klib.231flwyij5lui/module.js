(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'MaterialExtension-multiplatform_material_extension'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'MaterialExtension-multiplatform_material_extension'.");
    }
    globalThis['MaterialExtension-multiplatform_material_extension'] = factory(typeof globalThis['MaterialExtension-multiplatform_material_extension'] === 'undefined' ? {} : globalThis['MaterialExtension-multiplatform_material_extension'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var lazy = kotlin_kotlin.$_$.bp;
  var protoOf = kotlin_kotlin.$_$.yh;
  var initMetadataForObject = kotlin_kotlin.$_$.wg;
  var emptySet = kotlin_kotlin.$_$.ba;
  var Long = kotlin_kotlin.$_$.pn;
  var ResourceItem = kotlin_components_resources_library.$_$.e;
  var setOf = kotlin_kotlin.$_$.sc;
  var DrawableResource = kotlin_components_resources_library.$_$.b;
  var KProperty1 = kotlin_kotlin.$_$.hj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ng;
  var LanguageQualifier = kotlin_components_resources_library.$_$.c;
  var RegionQualifier = kotlin_components_resources_library.$_$.d;
  var setOf_0 = kotlin_kotlin.$_$.tc;
  var StringResource = kotlin_components_resources_library.$_$.f;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var toString = kotlin_kotlin.$_$.op;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var equals = kotlin_kotlin.$_$.gg;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.if;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.gh;
  var initMetadataForLambda = kotlin_kotlin.$_$.vg;
  var SuspendFunction1 = kotlin_kotlin.$_$.kf;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CommonMainDrawable0, 'CommonMainDrawable0');
  initMetadataForObject(CommonMainString0, 'CommonMainString0');
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForObject(ToolbarStyle, 'ToolbarStyle');
  initMetadataForClass(AppToolbarStyle, 'AppToolbarStyle', AppToolbarStyle);
  initMetadataForObject(Theme, 'Theme');
  initMetadataForLambda(rememberTheme$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(rememberTheme$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  //endregion
  function _collectCommonMainDrawable0Resources(map) {
    map.put_4fpzoq_k$('mel_arrow_left', CommonMainDrawable0_getInstance().get_mel_arrow_left_bmuzov_k$());
    map.put_4fpzoq_k$('mel_arrow_right', CommonMainDrawable0_getInstance().get_mel_arrow_right_5fr4ha_k$());
    map.put_4fpzoq_k$('mel_broom', CommonMainDrawable0_getInstance().get_mel_broom_ekh209_k$());
    map.put_4fpzoq_k$('mel_hide_password', CommonMainDrawable0_getInstance().get_mel_hide_password_vokz4s_k$());
    map.put_4fpzoq_k$('mel_ic_calendar', CommonMainDrawable0_getInstance().get_mel_ic_calendar_56r9qp_k$());
    map.put_4fpzoq_k$('mel_ic_clear', CommonMainDrawable0_getInstance().get_mel_ic_clear_8dydac_k$());
    map.put_4fpzoq_k$('mel_ic_down', CommonMainDrawable0_getInstance().get_mel_ic_down_vt3r9v_k$());
    map.put_4fpzoq_k$('mel_ic_search', CommonMainDrawable0_getInstance().get_mel_ic_search_vknyjd_k$());
    map.put_4fpzoq_k$('mel_show_password', CommonMainDrawable0_getInstance().get_mel_show_password_omeabt_k$());
    map.put_4fpzoq_k$('moon', CommonMainDrawable0_getInstance().get_moon_woqm2y_k$());
    map.put_4fpzoq_k$('sun', CommonMainDrawable0_getInstance().get_sun_18ivx9_k$());
  }
  function CommonMainDrawable0$mel_arrow_left$delegate$lambda() {
    return init_mel_arrow_left();
  }
  function CommonMainDrawable0$mel_arrow_right$delegate$lambda() {
    return init_mel_arrow_right();
  }
  function CommonMainDrawable0$mel_broom$delegate$lambda() {
    return init_mel_broom();
  }
  function CommonMainDrawable0$mel_hide_password$delegate$lambda() {
    return init_mel_hide_password();
  }
  function CommonMainDrawable0$mel_ic_calendar$delegate$lambda() {
    return init_mel_ic_calendar();
  }
  function CommonMainDrawable0$mel_ic_clear$delegate$lambda() {
    return init_mel_ic_clear();
  }
  function CommonMainDrawable0$mel_ic_down$delegate$lambda() {
    return init_mel_ic_down();
  }
  function CommonMainDrawable0$mel_ic_search$delegate$lambda() {
    return init_mel_ic_search();
  }
  function CommonMainDrawable0$mel_show_password$delegate$lambda() {
    return init_mel_show_password();
  }
  function CommonMainDrawable0$moon$delegate$lambda() {
    return init_moon();
  }
  function CommonMainDrawable0$sun$delegate$lambda() {
    return init_sun();
  }
  function CommonMainDrawable0() {
    CommonMainDrawable0_instance = this;
    var tmp = this;
    tmp.mel_arrow_left$delegate_1 = lazy(CommonMainDrawable0$mel_arrow_left$delegate$lambda);
    var tmp_0 = this;
    tmp_0.mel_arrow_right$delegate_1 = lazy(CommonMainDrawable0$mel_arrow_right$delegate$lambda);
    var tmp_1 = this;
    tmp_1.mel_broom$delegate_1 = lazy(CommonMainDrawable0$mel_broom$delegate$lambda);
    var tmp_2 = this;
    tmp_2.mel_hide_password$delegate_1 = lazy(CommonMainDrawable0$mel_hide_password$delegate$lambda);
    var tmp_3 = this;
    tmp_3.mel_ic_calendar$delegate_1 = lazy(CommonMainDrawable0$mel_ic_calendar$delegate$lambda);
    var tmp_4 = this;
    tmp_4.mel_ic_clear$delegate_1 = lazy(CommonMainDrawable0$mel_ic_clear$delegate$lambda);
    var tmp_5 = this;
    tmp_5.mel_ic_down$delegate_1 = lazy(CommonMainDrawable0$mel_ic_down$delegate$lambda);
    var tmp_6 = this;
    tmp_6.mel_ic_search$delegate_1 = lazy(CommonMainDrawable0$mel_ic_search$delegate$lambda);
    var tmp_7 = this;
    tmp_7.mel_show_password$delegate_1 = lazy(CommonMainDrawable0$mel_show_password$delegate$lambda);
    var tmp_8 = this;
    tmp_8.moon$delegate_1 = lazy(CommonMainDrawable0$moon$delegate$lambda);
    var tmp_9 = this;
    tmp_9.sun$delegate_1 = lazy(CommonMainDrawable0$sun$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).get_mel_arrow_left_bmuzov_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_arrow_left$delegate_1;
    mel_arrow_left$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_arrow_right_5fr4ha_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_arrow_right$delegate_1;
    mel_arrow_right$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_broom_ekh209_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_broom$delegate_1;
    mel_broom$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_hide_password_vokz4s_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_hide_password$delegate_1;
    mel_hide_password$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_ic_calendar_56r9qp_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_ic_calendar$delegate_1;
    mel_ic_calendar$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_ic_clear_8dydac_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_ic_clear$delegate_1;
    mel_ic_clear$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_ic_down_vt3r9v_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_ic_down$delegate_1;
    mel_ic_down$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_ic_search_vknyjd_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_ic_search$delegate_1;
    mel_ic_search$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_mel_show_password_omeabt_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_show_password$delegate_1;
    mel_show_password$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_moon_woqm2y_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.moon$delegate_1;
    moon$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_sun_18ivx9_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.sun$delegate_1;
    sun$factory();
    return this_0.get_value_j01efc_k$();
  };
  var CommonMainDrawable0_instance;
  function CommonMainDrawable0_getInstance() {
    if (CommonMainDrawable0_instance == null)
      new CommonMainDrawable0();
    return CommonMainDrawable0_instance;
  }
  function init_mel_arrow_left() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_arrow_left', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel-arrow-left.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_arrow_right() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_arrow_right', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel-arrow-right.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_broom() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_broom', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel-broom.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_hide_password() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_hide_password', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel-hide-password.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_ic_calendar() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_ic_calendar', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel-ic-calendar.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_ic_clear() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_ic_clear', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel_ic_clear.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_ic_down() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_ic_down', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel-ic-down.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_ic_search() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_ic_search', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel_ic_search.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_mel_show_password() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:mel_show_password', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/mel-show-password.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_moon() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:moon', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/moon.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_sun() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:sun', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/sun.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function mel_arrow_left$factory() {
    return getPropertyCallableRef('mel_arrow_left', 1, KProperty1, function (receiver) {
      return receiver.get_mel_arrow_left_bmuzov_k$();
    }, null);
  }
  function mel_arrow_right$factory() {
    return getPropertyCallableRef('mel_arrow_right', 1, KProperty1, function (receiver) {
      return receiver.get_mel_arrow_right_5fr4ha_k$();
    }, null);
  }
  function mel_broom$factory() {
    return getPropertyCallableRef('mel_broom', 1, KProperty1, function (receiver) {
      return receiver.get_mel_broom_ekh209_k$();
    }, null);
  }
  function mel_hide_password$factory() {
    return getPropertyCallableRef('mel_hide_password', 1, KProperty1, function (receiver) {
      return receiver.get_mel_hide_password_vokz4s_k$();
    }, null);
  }
  function mel_ic_calendar$factory() {
    return getPropertyCallableRef('mel_ic_calendar', 1, KProperty1, function (receiver) {
      return receiver.get_mel_ic_calendar_56r9qp_k$();
    }, null);
  }
  function mel_ic_clear$factory() {
    return getPropertyCallableRef('mel_ic_clear', 1, KProperty1, function (receiver) {
      return receiver.get_mel_ic_clear_8dydac_k$();
    }, null);
  }
  function mel_ic_down$factory() {
    return getPropertyCallableRef('mel_ic_down', 1, KProperty1, function (receiver) {
      return receiver.get_mel_ic_down_vt3r9v_k$();
    }, null);
  }
  function mel_ic_search$factory() {
    return getPropertyCallableRef('mel_ic_search', 1, KProperty1, function (receiver) {
      return receiver.get_mel_ic_search_vknyjd_k$();
    }, null);
  }
  function mel_show_password$factory() {
    return getPropertyCallableRef('mel_show_password', 1, KProperty1, function (receiver) {
      return receiver.get_mel_show_password_omeabt_k$();
    }, null);
  }
  function moon$factory() {
    return getPropertyCallableRef('moon', 1, KProperty1, function (receiver) {
      return receiver.get_moon_woqm2y_k$();
    }, null);
  }
  function sun$factory() {
    return getPropertyCallableRef('sun', 1, KProperty1, function (receiver) {
      return receiver.get_sun_18ivx9_k$();
    }, null);
  }
  function _collectCommonMainString0Resources(map) {
    map.put_4fpzoq_k$('mel_April', CommonMainString0_getInstance().get_mel_April_e2amj6_k$());
    map.put_4fpzoq_k$('mel_August', CommonMainString0_getInstance().get_mel_August_9v19x3_k$());
    map.put_4fpzoq_k$('mel_December', CommonMainString0_getInstance().get_mel_December_lwq55l_k$());
    map.put_4fpzoq_k$('mel_February', CommonMainString0_getInstance().get_mel_February_893u3a_k$());
    map.put_4fpzoq_k$('mel_January', CommonMainString0_getInstance().get_mel_January_29xily_k$());
    map.put_4fpzoq_k$('mel_July', CommonMainString0_getInstance().get_mel_July_rycej0_k$());
    map.put_4fpzoq_k$('mel_June', CommonMainString0_getInstance().get_mel_June_rycek6_k$());
    map.put_4fpzoq_k$('mel_March', CommonMainString0_getInstance().get_mel_March_e8mkpb_k$());
    map.put_4fpzoq_k$('mel_May', CommonMainString0_getInstance().get_mel_May_gxvk35_k$());
    map.put_4fpzoq_k$('mel_November', CommonMainString0_getInstance().get_mel_November_vazuca_k$());
    map.put_4fpzoq_k$('mel_October', CommonMainString0_getInstance().get_mel_October_5o32lo_k$());
    map.put_4fpzoq_k$('mel_September', CommonMainString0_getInstance().get_mel_September_2esel9_k$());
    map.put_4fpzoq_k$('mel_cancel', CommonMainString0_getInstance().get_mel_cancel_pnomoe_k$());
    map.put_4fpzoq_k$('mel_clear', CommonMainString0_getInstance().get_mel_clear_ekwsxl_k$());
    map.put_4fpzoq_k$('mel_friday_short', CommonMainString0_getInstance().get_mel_friday_short_9vhgc0_k$());
    map.put_4fpzoq_k$('mel_monday_short', CommonMainString0_getInstance().get_mel_monday_short_qox42p_k$());
    map.put_4fpzoq_k$('mel_saturday_short', CommonMainString0_getInstance().get_mel_saturday_short_zbo79m_k$());
    map.put_4fpzoq_k$('mel_select', CommonMainString0_getInstance().get_mel_select_xakits_k$());
    map.put_4fpzoq_k$('mel_select_date', CommonMainString0_getInstance().get_mel_select_date_wi59a5_k$());
    map.put_4fpzoq_k$('mel_select_date_period', CommonMainString0_getInstance().get_mel_select_date_period_fdw0lf_k$());
    map.put_4fpzoq_k$('mel_select_month', CommonMainString0_getInstance().get_mel_select_month_dc5781_k$());
    map.put_4fpzoq_k$('mel_select_year', CommonMainString0_getInstance().get_mel_select_year_wiiqj0_k$());
    map.put_4fpzoq_k$('mel_sunday_short', CommonMainString0_getInstance().get_mel_sunday_short_393xy9_k$());
    map.put_4fpzoq_k$('mel_thursday_short', CommonMainString0_getInstance().get_mel_thursday_short_a076zv_k$());
    map.put_4fpzoq_k$('mel_tuesday_short', CommonMainString0_getInstance().get_mel_tuesday_short_ndf07e_k$());
    map.put_4fpzoq_k$('mel_wednesday_short', CommonMainString0_getInstance().get_mel_wednesday_short_g0gl8f_k$());
  }
  function CommonMainString0$mel_April$delegate$lambda() {
    return init_mel_April();
  }
  function CommonMainString0$mel_August$delegate$lambda() {
    return init_mel_August();
  }
  function CommonMainString0$mel_December$delegate$lambda() {
    return init_mel_December();
  }
  function CommonMainString0$mel_February$delegate$lambda() {
    return init_mel_February();
  }
  function CommonMainString0$mel_January$delegate$lambda() {
    return init_mel_January();
  }
  function CommonMainString0$mel_July$delegate$lambda() {
    return init_mel_July();
  }
  function CommonMainString0$mel_June$delegate$lambda() {
    return init_mel_June();
  }
  function CommonMainString0$mel_March$delegate$lambda() {
    return init_mel_March();
  }
  function CommonMainString0$mel_May$delegate$lambda() {
    return init_mel_May();
  }
  function CommonMainString0$mel_November$delegate$lambda() {
    return init_mel_November();
  }
  function CommonMainString0$mel_October$delegate$lambda() {
    return init_mel_October();
  }
  function CommonMainString0$mel_September$delegate$lambda() {
    return init_mel_September();
  }
  function CommonMainString0$mel_cancel$delegate$lambda() {
    return init_mel_cancel();
  }
  function CommonMainString0$mel_clear$delegate$lambda() {
    return init_mel_clear();
  }
  function CommonMainString0$mel_friday_short$delegate$lambda() {
    return init_mel_friday_short();
  }
  function CommonMainString0$mel_monday_short$delegate$lambda() {
    return init_mel_monday_short();
  }
  function CommonMainString0$mel_saturday_short$delegate$lambda() {
    return init_mel_saturday_short();
  }
  function CommonMainString0$mel_select$delegate$lambda() {
    return init_mel_select();
  }
  function CommonMainString0$mel_select_date$delegate$lambda() {
    return init_mel_select_date();
  }
  function CommonMainString0$mel_select_date_period$delegate$lambda() {
    return init_mel_select_date_period();
  }
  function CommonMainString0$mel_select_month$delegate$lambda() {
    return init_mel_select_month();
  }
  function CommonMainString0$mel_select_year$delegate$lambda() {
    return init_mel_select_year();
  }
  function CommonMainString0$mel_sunday_short$delegate$lambda() {
    return init_mel_sunday_short();
  }
  function CommonMainString0$mel_thursday_short$delegate$lambda() {
    return init_mel_thursday_short();
  }
  function CommonMainString0$mel_tuesday_short$delegate$lambda() {
    return init_mel_tuesday_short();
  }
  function CommonMainString0$mel_wednesday_short$delegate$lambda() {
    return init_mel_wednesday_short();
  }
  function CommonMainString0() {
    CommonMainString0_instance = this;
    var tmp = this;
    tmp.mel_April$delegate_1 = lazy(CommonMainString0$mel_April$delegate$lambda);
    var tmp_0 = this;
    tmp_0.mel_August$delegate_1 = lazy(CommonMainString0$mel_August$delegate$lambda);
    var tmp_1 = this;
    tmp_1.mel_December$delegate_1 = lazy(CommonMainString0$mel_December$delegate$lambda);
    var tmp_2 = this;
    tmp_2.mel_February$delegate_1 = lazy(CommonMainString0$mel_February$delegate$lambda);
    var tmp_3 = this;
    tmp_3.mel_January$delegate_1 = lazy(CommonMainString0$mel_January$delegate$lambda);
    var tmp_4 = this;
    tmp_4.mel_July$delegate_1 = lazy(CommonMainString0$mel_July$delegate$lambda);
    var tmp_5 = this;
    tmp_5.mel_June$delegate_1 = lazy(CommonMainString0$mel_June$delegate$lambda);
    var tmp_6 = this;
    tmp_6.mel_March$delegate_1 = lazy(CommonMainString0$mel_March$delegate$lambda);
    var tmp_7 = this;
    tmp_7.mel_May$delegate_1 = lazy(CommonMainString0$mel_May$delegate$lambda);
    var tmp_8 = this;
    tmp_8.mel_November$delegate_1 = lazy(CommonMainString0$mel_November$delegate$lambda);
    var tmp_9 = this;
    tmp_9.mel_October$delegate_1 = lazy(CommonMainString0$mel_October$delegate$lambda);
    var tmp_10 = this;
    tmp_10.mel_September$delegate_1 = lazy(CommonMainString0$mel_September$delegate$lambda);
    var tmp_11 = this;
    tmp_11.mel_cancel$delegate_1 = lazy(CommonMainString0$mel_cancel$delegate$lambda);
    var tmp_12 = this;
    tmp_12.mel_clear$delegate_1 = lazy(CommonMainString0$mel_clear$delegate$lambda);
    var tmp_13 = this;
    tmp_13.mel_friday_short$delegate_1 = lazy(CommonMainString0$mel_friday_short$delegate$lambda);
    var tmp_14 = this;
    tmp_14.mel_monday_short$delegate_1 = lazy(CommonMainString0$mel_monday_short$delegate$lambda);
    var tmp_15 = this;
    tmp_15.mel_saturday_short$delegate_1 = lazy(CommonMainString0$mel_saturday_short$delegate$lambda);
    var tmp_16 = this;
    tmp_16.mel_select$delegate_1 = lazy(CommonMainString0$mel_select$delegate$lambda);
    var tmp_17 = this;
    tmp_17.mel_select_date$delegate_1 = lazy(CommonMainString0$mel_select_date$delegate$lambda);
    var tmp_18 = this;
    tmp_18.mel_select_date_period$delegate_1 = lazy(CommonMainString0$mel_select_date_period$delegate$lambda);
    var tmp_19 = this;
    tmp_19.mel_select_month$delegate_1 = lazy(CommonMainString0$mel_select_month$delegate$lambda);
    var tmp_20 = this;
    tmp_20.mel_select_year$delegate_1 = lazy(CommonMainString0$mel_select_year$delegate$lambda);
    var tmp_21 = this;
    tmp_21.mel_sunday_short$delegate_1 = lazy(CommonMainString0$mel_sunday_short$delegate$lambda);
    var tmp_22 = this;
    tmp_22.mel_thursday_short$delegate_1 = lazy(CommonMainString0$mel_thursday_short$delegate$lambda);
    var tmp_23 = this;
    tmp_23.mel_tuesday_short$delegate_1 = lazy(CommonMainString0$mel_tuesday_short$delegate$lambda);
    var tmp_24 = this;
    tmp_24.mel_wednesday_short$delegate_1 = lazy(CommonMainString0$mel_wednesday_short$delegate$lambda);
  }
  protoOf(CommonMainString0).get_mel_April_e2amj6_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_April$delegate_1;
    mel_April$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_August_9v19x3_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_August$delegate_1;
    mel_August$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_December_lwq55l_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_December$delegate_1;
    mel_December$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_February_893u3a_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_February$delegate_1;
    mel_February$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_January_29xily_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_January$delegate_1;
    mel_January$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_July_rycej0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_July$delegate_1;
    mel_July$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_June_rycek6_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_June$delegate_1;
    mel_June$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_March_e8mkpb_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_March$delegate_1;
    mel_March$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_May_gxvk35_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_May$delegate_1;
    mel_May$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_November_vazuca_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_November$delegate_1;
    mel_November$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_October_5o32lo_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_October$delegate_1;
    mel_October$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_September_2esel9_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_September$delegate_1;
    mel_September$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_cancel_pnomoe_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_cancel$delegate_1;
    mel_cancel$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_clear_ekwsxl_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_clear$delegate_1;
    mel_clear$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_friday_short_9vhgc0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_friday_short$delegate_1;
    mel_friday_short$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_monday_short_qox42p_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_monday_short$delegate_1;
    mel_monday_short$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_saturday_short_zbo79m_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_saturday_short$delegate_1;
    mel_saturday_short$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_select_xakits_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_select$delegate_1;
    mel_select$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_select_date_wi59a5_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_select_date$delegate_1;
    mel_select_date$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_select_date_period_fdw0lf_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_select_date_period$delegate_1;
    mel_select_date_period$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_select_month_dc5781_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_select_month$delegate_1;
    mel_select_month$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_select_year_wiiqj0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_select_year$delegate_1;
    mel_select_year$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_sunday_short_393xy9_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_sunday_short$delegate_1;
    mel_sunday_short$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_thursday_short_a076zv_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_thursday_short$delegate_1;
    mel_thursday_short$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_tuesday_short_ndf07e_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_tuesday_short$delegate_1;
    mel_tuesday_short$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainString0).get_mel_wednesday_short_g0gl8f_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mel_wednesday_short$delegate_1;
    mel_wednesday_short$factory();
    return this_0.get_value_j01efc_k$();
  };
  var CommonMainString0_instance;
  function CommonMainString0_getInstance() {
    if (CommonMainString0_instance == null)
      new CommonMainString0();
    return CommonMainString0_instance;
  }
  function init_mel_April() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(10, 0), new Long(33, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_April', 'mel_April', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(10, 0), new Long(25, 0))]));
  }
  function init_mel_August() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(44, 0), new Long(34, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_August', 'mel_August', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(36, 0), new Long(26, 0))]));
  }
  function init_mel_December() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(79, 0), new Long(40, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_December', 'mel_December', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(63, 0), new Long(32, 0))]));
  }
  function init_mel_February() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(120, 0), new Long(40, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_February', 'mel_February', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(96, 0), new Long(32, 0))]));
  }
  function init_mel_January() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(161, 0), new Long(35, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_January', 'mel_January', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(129, 0), new Long(31, 0))]));
  }
  function init_mel_July() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(197, 0), new Long(28, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_July', 'mel_July', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(161, 0), new Long(24, 0))]));
  }
  function init_mel_June() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(226, 0), new Long(28, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_June', 'mel_June', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(186, 0), new Long(24, 0))]));
  }
  function init_mel_March() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(255, 0), new Long(29, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_March', 'mel_March', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(211, 0), new Long(25, 0))]));
  }
  function init_mel_May() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(285, 0), new Long(23, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_May', 'mel_May', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(237, 0), new Long(19, 0))]));
  }
  function init_mel_November() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(309, 0), new Long(36, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_November', 'mel_November', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(257, 0), new Long(32, 0))]));
  }
  function init_mel_October() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(346, 0), new Long(39, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_October', 'mel_October', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(290, 0), new Long(31, 0))]));
  }
  function init_mel_September() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(386, 0), new Long(45, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_September', 'mel_September', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(322, 0), new Long(33, 0))]));
  }
  function init_mel_cancel() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(432, 0), new Long(34, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_cancel', 'mel_cancel', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(356, 0), new Long(26, 0))]));
  }
  function init_mel_clear() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(467, 0), new Long(41, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_clear', 'mel_clear', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(383, 0), new Long(25, 0))]));
  }
  function init_mel_friday_short() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(509, 0), new Long(32, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_friday_short', 'mel_friday_short', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(409, 0), new Long(28, 0))]));
  }
  function init_mel_monday_short() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(542, 0), new Long(32, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_monday_short', 'mel_monday_short', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(438, 0), new Long(28, 0))]));
  }
  function init_mel_saturday_short() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(575, 0), new Long(34, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_saturday_short', 'mel_saturday_short', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(467, 0), new Long(30, 0))]));
  }
  function init_mel_select() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(874, 0), new Long(38, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_select', 'mel_select', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(678, 0), new Long(26, 0))]));
  }
  function init_mel_select_date() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(697, 0), new Long(59, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_select_date', 'mel_select_date', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(557, 0), new Long(39, 0))]));
  }
  function init_mel_select_date_period() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(610, 0), new Long(86, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_select_date_period', 'mel_select_date_period', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(498, 0), new Long(58, 0))]));
  }
  function init_mel_select_month() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(757, 0), new Long(60, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_select_month', 'mel_select_month', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(597, 0), new Long(40, 0))]));
  }
  function init_mel_select_year() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(818, 0), new Long(55, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_select_year', 'mel_select_year', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(638, 0), new Long(39, 0))]));
  }
  function init_mel_sunday_short() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(913, 0), new Long(32, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_sunday_short', 'mel_sunday_short', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(705, 0), new Long(28, 0))]));
  }
  function init_mel_thursday_short() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(946, 0), new Long(34, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_thursday_short', 'mel_thursday_short', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(734, 0), new Long(30, 0))]));
  }
  function init_mel_tuesday_short() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(981, 0), new Long(33, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_tuesday_short', 'mel_tuesday_short', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(765, 0), new Long(29, 0))]));
  }
  function init_mel_wednesday_short() {
    var tmp = new ResourceItem(setOf_0([new LanguageQualifier('ru'), new RegionQualifier('RU')]), 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values-ru-rRU/strings.commonMain.cvr', new Long(1015, 0), new Long(35, 0));
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new StringResource('string:mel_wednesday_short', 'mel_wednesday_short', setOf_0([tmp, new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/values/strings.commonMain.cvr', new Long(795, 0), new Long(31, 0))]));
  }
  function mel_April$factory() {
    return getPropertyCallableRef('mel_April', 1, KProperty1, function (receiver) {
      return receiver.get_mel_April_e2amj6_k$();
    }, null);
  }
  function mel_August$factory() {
    return getPropertyCallableRef('mel_August', 1, KProperty1, function (receiver) {
      return receiver.get_mel_August_9v19x3_k$();
    }, null);
  }
  function mel_December$factory() {
    return getPropertyCallableRef('mel_December', 1, KProperty1, function (receiver) {
      return receiver.get_mel_December_lwq55l_k$();
    }, null);
  }
  function mel_February$factory() {
    return getPropertyCallableRef('mel_February', 1, KProperty1, function (receiver) {
      return receiver.get_mel_February_893u3a_k$();
    }, null);
  }
  function mel_January$factory() {
    return getPropertyCallableRef('mel_January', 1, KProperty1, function (receiver) {
      return receiver.get_mel_January_29xily_k$();
    }, null);
  }
  function mel_July$factory() {
    return getPropertyCallableRef('mel_July', 1, KProperty1, function (receiver) {
      return receiver.get_mel_July_rycej0_k$();
    }, null);
  }
  function mel_June$factory() {
    return getPropertyCallableRef('mel_June', 1, KProperty1, function (receiver) {
      return receiver.get_mel_June_rycek6_k$();
    }, null);
  }
  function mel_March$factory() {
    return getPropertyCallableRef('mel_March', 1, KProperty1, function (receiver) {
      return receiver.get_mel_March_e8mkpb_k$();
    }, null);
  }
  function mel_May$factory() {
    return getPropertyCallableRef('mel_May', 1, KProperty1, function (receiver) {
      return receiver.get_mel_May_gxvk35_k$();
    }, null);
  }
  function mel_November$factory() {
    return getPropertyCallableRef('mel_November', 1, KProperty1, function (receiver) {
      return receiver.get_mel_November_vazuca_k$();
    }, null);
  }
  function mel_October$factory() {
    return getPropertyCallableRef('mel_October', 1, KProperty1, function (receiver) {
      return receiver.get_mel_October_5o32lo_k$();
    }, null);
  }
  function mel_September$factory() {
    return getPropertyCallableRef('mel_September', 1, KProperty1, function (receiver) {
      return receiver.get_mel_September_2esel9_k$();
    }, null);
  }
  function mel_cancel$factory() {
    return getPropertyCallableRef('mel_cancel', 1, KProperty1, function (receiver) {
      return receiver.get_mel_cancel_pnomoe_k$();
    }, null);
  }
  function mel_clear$factory() {
    return getPropertyCallableRef('mel_clear', 1, KProperty1, function (receiver) {
      return receiver.get_mel_clear_ekwsxl_k$();
    }, null);
  }
  function mel_friday_short$factory() {
    return getPropertyCallableRef('mel_friday_short', 1, KProperty1, function (receiver) {
      return receiver.get_mel_friday_short_9vhgc0_k$();
    }, null);
  }
  function mel_monday_short$factory() {
    return getPropertyCallableRef('mel_monday_short', 1, KProperty1, function (receiver) {
      return receiver.get_mel_monday_short_qox42p_k$();
    }, null);
  }
  function mel_saturday_short$factory() {
    return getPropertyCallableRef('mel_saturday_short', 1, KProperty1, function (receiver) {
      return receiver.get_mel_saturday_short_zbo79m_k$();
    }, null);
  }
  function mel_select$factory() {
    return getPropertyCallableRef('mel_select', 1, KProperty1, function (receiver) {
      return receiver.get_mel_select_xakits_k$();
    }, null);
  }
  function mel_select_date$factory() {
    return getPropertyCallableRef('mel_select_date', 1, KProperty1, function (receiver) {
      return receiver.get_mel_select_date_wi59a5_k$();
    }, null);
  }
  function mel_select_date_period$factory() {
    return getPropertyCallableRef('mel_select_date_period', 1, KProperty1, function (receiver) {
      return receiver.get_mel_select_date_period_fdw0lf_k$();
    }, null);
  }
  function mel_select_month$factory() {
    return getPropertyCallableRef('mel_select_month', 1, KProperty1, function (receiver) {
      return receiver.get_mel_select_month_dc5781_k$();
    }, null);
  }
  function mel_select_year$factory() {
    return getPropertyCallableRef('mel_select_year', 1, KProperty1, function (receiver) {
      return receiver.get_mel_select_year_wiiqj0_k$();
    }, null);
  }
  function mel_sunday_short$factory() {
    return getPropertyCallableRef('mel_sunday_short', 1, KProperty1, function (receiver) {
      return receiver.get_mel_sunday_short_393xy9_k$();
    }, null);
  }
  function mel_thursday_short$factory() {
    return getPropertyCallableRef('mel_thursday_short', 1, KProperty1, function (receiver) {
      return receiver.get_mel_thursday_short_a076zv_k$();
    }, null);
  }
  function mel_tuesday_short$factory() {
    return getPropertyCallableRef('mel_tuesday_short', 1, KProperty1, function (receiver) {
      return receiver.get_mel_tuesday_short_ndf07e_k$();
    }, null);
  }
  function mel_wednesday_short$factory() {
    return getPropertyCallableRef('mel_wednesday_short', 1, KProperty1, function (receiver) {
      return receiver.get_mel_wednesday_short_g0gl8f_k$();
    }, null);
  }
  var materialextension_multiplatform_material_extension_generated_resources_Res_drawable$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_string$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_array$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_plurals$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res_font$stable;
  var materialextension_multiplatform_material_extension_generated_resources_Res$stable;
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
    return readResourceBytes('composeResources/materialextension.multiplatform_material_extension.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/materialextension.multiplatform_material_extension.generated.resources/' + path);
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
    _collectCommonMainString0Resources(map);
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
      $tmp0_rcvr.define_cir3z7_k$($toolbarStyle, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ToolbarStyle() {
    ToolbarStyle_instance = this;
    this.mToolbarStyle_1 = new AppToolbarStyle();
  }
  protoOf(ToolbarStyle).set_mToolbarStyle_6e7jwy_k$ = function (_set____db54di) {
    this.mToolbarStyle_1 = _set____db54di;
  };
  protoOf(ToolbarStyle).get_mToolbarStyle_x8k2t3_k$ = function () {
    return this.mToolbarStyle_1;
  };
  protoOf(ToolbarStyle).define_cir3z7_k$ = function (toolbarStyle, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1576086802);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(toolbarStyle) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1576086802, $dirty, -1, 'team.platforma.multiplatform_material_extension.toolbar.ToolbarStyle.define (AppToolbar.kt:44)');
      }
      this.mToolbarStyle_1 = toolbarStyle;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ToolbarStyle$define$lambda(this, toolbarStyle, $changed));
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
    this.containerColor_1 = containerColor;
    this.scrolledContainerColor_1 = scrolledContainerColor;
    this.navigationIconContentColor_1 = navigationIconContentColor;
    this.titleContentColor_1 = titleContentColor;
    this.actionIconContentColor_1 = actionIconContentColor;
  }
  protoOf(AppToolbarStyle).get_containerColor_hz5ey7_k$ = function () {
    return this.containerColor_1;
  };
  protoOf(AppToolbarStyle).get_scrolledContainerColor_nciobn_k$ = function () {
    return this.scrolledContainerColor_1;
  };
  protoOf(AppToolbarStyle).get_navigationIconContentColor_2c2xy_k$ = function () {
    return this.navigationIconContentColor_1;
  };
  protoOf(AppToolbarStyle).get_titleContentColor_22lkgv_k$ = function () {
    return this.titleContentColor_1;
  };
  protoOf(AppToolbarStyle).get_actionIconContentColor_j4guiw_k$ = function () {
    return this.actionIconContentColor_1;
  };
  protoOf(AppToolbarStyle).component1_dgd56u_k$ = function () {
    return this.containerColor_1;
  };
  protoOf(AppToolbarStyle).component2_pkazqz_k$ = function () {
    return this.scrolledContainerColor_1;
  };
  protoOf(AppToolbarStyle).component3_6g4xac_k$ = function () {
    return this.navigationIconContentColor_1;
  };
  protoOf(AppToolbarStyle).component4_wkj7nh_k$ = function () {
    return this.titleContentColor_1;
  };
  protoOf(AppToolbarStyle).component5_k3am6_k$ = function () {
    return this.actionIconContentColor_1;
  };
  protoOf(AppToolbarStyle).copy_a955uj_k$ = function (containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor) {
    return new AppToolbarStyle(containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor);
  };
  protoOf(AppToolbarStyle).copy$default_joslo1_k$ = function (containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor, $super) {
    containerColor = containerColor === VOID ? this.containerColor_1 : containerColor;
    scrolledContainerColor = scrolledContainerColor === VOID ? this.scrolledContainerColor_1 : scrolledContainerColor;
    navigationIconContentColor = navigationIconContentColor === VOID ? this.navigationIconContentColor_1 : navigationIconContentColor;
    titleContentColor = titleContentColor === VOID ? this.titleContentColor_1 : titleContentColor;
    actionIconContentColor = actionIconContentColor === VOID ? this.actionIconContentColor_1 : actionIconContentColor;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_a955uj_k$(containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor);
    } else {
      var tmp_0 = $super.copy_a955uj_k$;
      var tmp_1 = containerColor;
      var tmp_2 = tmp_1 == null ? null : new Color(tmp_1);
      var tmp_3 = scrolledContainerColor;
      var tmp_4 = tmp_3 == null ? null : new Color(tmp_3);
      var tmp_5 = navigationIconContentColor;
      var tmp_6 = tmp_5 == null ? null : new Color(tmp_5);
      var tmp_7 = titleContentColor;
      var tmp_8 = tmp_7 == null ? null : new Color(tmp_7);
      var tmp_9 = actionIconContentColor;
      tmp = tmp_0.call(this, tmp_2, tmp_4, tmp_6, tmp_8, tmp_9 == null ? null : new Color(tmp_9));
    }
    return tmp;
  };
  protoOf(AppToolbarStyle).toString = function () {
    var tmp = this.containerColor_1;
    var tmp_0 = toString(tmp == null ? null : new Color(tmp));
    var tmp_1 = this.scrolledContainerColor_1;
    var tmp_2 = toString(tmp_1 == null ? null : new Color(tmp_1));
    var tmp_3 = this.navigationIconContentColor_1;
    var tmp_4 = toString(tmp_3 == null ? null : new Color(tmp_3));
    var tmp_5 = this.titleContentColor_1;
    var tmp_6 = toString(tmp_5 == null ? null : new Color(tmp_5));
    var tmp_7 = this.actionIconContentColor_1;
    return 'AppToolbarStyle(containerColor=' + tmp_0 + ', scrolledContainerColor=' + tmp_2 + ', navigationIconContentColor=' + tmp_4 + ', titleContentColor=' + tmp_6 + ', actionIconContentColor=' + toString(tmp_7 == null ? null : new Color(tmp_7)) + ')';
  };
  protoOf(AppToolbarStyle).hashCode = function () {
    var tmp;
    var tmp_0 = this.containerColor_1;
    if ((tmp_0 == null ? null : new Color(tmp_0)) == null) {
      tmp = 0;
    } else {
      tmp = Color__hashCode_impl_vjyivj(this.containerColor_1);
    }
    var result = tmp;
    var tmp_1 = imul(result, 31);
    var tmp_2;
    var tmp_3 = this.scrolledContainerColor_1;
    if ((tmp_3 == null ? null : new Color(tmp_3)) == null) {
      tmp_2 = 0;
    } else {
      tmp_2 = Color__hashCode_impl_vjyivj(this.scrolledContainerColor_1);
    }
    result = tmp_1 + tmp_2 | 0;
    var tmp_4 = imul(result, 31);
    var tmp_5;
    var tmp_6 = this.navigationIconContentColor_1;
    if ((tmp_6 == null ? null : new Color(tmp_6)) == null) {
      tmp_5 = 0;
    } else {
      tmp_5 = Color__hashCode_impl_vjyivj(this.navigationIconContentColor_1);
    }
    result = tmp_4 + tmp_5 | 0;
    var tmp_7 = imul(result, 31);
    var tmp_8;
    var tmp_9 = this.titleContentColor_1;
    if ((tmp_9 == null ? null : new Color(tmp_9)) == null) {
      tmp_8 = 0;
    } else {
      tmp_8 = Color__hashCode_impl_vjyivj(this.titleContentColor_1);
    }
    result = tmp_7 + tmp_8 | 0;
    var tmp_10 = imul(result, 31);
    var tmp_11;
    var tmp_12 = this.actionIconContentColor_1;
    if ((tmp_12 == null ? null : new Color(tmp_12)) == null) {
      tmp_11 = 0;
    } else {
      tmp_11 = Color__hashCode_impl_vjyivj(this.actionIconContentColor_1);
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
    var tmp = this.containerColor_1;
    var tmp_0 = tmp == null ? null : new Color(tmp);
    var tmp_1 = tmp0_other_with_cast.containerColor_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Color(tmp_1)))
      return false;
    var tmp_2 = this.scrolledContainerColor_1;
    var tmp_3 = tmp_2 == null ? null : new Color(tmp_2);
    var tmp_4 = tmp0_other_with_cast.scrolledContainerColor_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new Color(tmp_4)))
      return false;
    var tmp_5 = this.navigationIconContentColor_1;
    var tmp_6 = tmp_5 == null ? null : new Color(tmp_5);
    var tmp_7 = tmp0_other_with_cast.navigationIconContentColor_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new Color(tmp_7)))
      return false;
    var tmp_8 = this.titleContentColor_1;
    var tmp_9 = tmp_8 == null ? null : new Color(tmp_8);
    var tmp_10 = tmp0_other_with_cast.titleContentColor_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Color(tmp_10)))
      return false;
    var tmp_11 = this.actionIconContentColor_1;
    var tmp_12 = tmp_11 == null ? null : new Color(tmp_11);
    var tmp_13 = tmp0_other_with_cast.actionIconContentColor_1;
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
  function _get__isDarkTheme__ypix7j($this) {
    return $this._isDarkTheme_1;
  }
  function Theme() {
    Theme_instance = this;
    this._isDarkTheme_1 = MutableStateFlow(false);
    this.isDark_1 = this._isDarkTheme_1;
  }
  protoOf(Theme).get_isDark_li0mhm_k$ = function () {
    return this.isDark_1;
  };
  protoOf(Theme).setDarkTheme_y468xo_k$ = function (isDarkTheme) {
    this._isDarkTheme_1.set_value_v1vabv_k$(isDarkTheme);
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
    $composer_0.startReplaceGroup_5hh8aj_k$(95699876);
    if (!(($default & 1) === 0))
      autoSwitch_0 = false;
    if (isTraceInProgress()) {
      traceEventStart(95699876, $changed, -1, 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme (Theme.kt:28)');
    }
    var initDarkTheme = isDarkTheme($composer_0, 0);
    if (autoSwitch_0) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-2008350853);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1727352263);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_jpyyrz_k$(initDarkTheme);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme.<anonymous>' call
        var value = rememberTheme$slambda_0(initDarkTheme, null);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(initDarkTheme, tmp1_group, $composer_0, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-2008243004);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1727349063);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_jpyyrz_k$(initDarkTheme);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.ui.theme.rememberTheme.<anonymous>' call
        var value_0 = rememberTheme$slambda_2(initDarkTheme, null);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp2_group, $composer_0, 6);
      $composer_0.endReplaceGroup_ek144q_k$();
    }
    var tmp0 = Theme_getInstance();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function isDark(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-194825026);
    if (isTraceInProgress()) {
      traceEventStart(-194825026, $changed, -1, 'team.platforma.multiplatform_material_extension.ui.theme.isDark (Theme.kt:23)');
    }
    var tmp0 = collectAsState(_this__u8e3s4.isDark_1, null, $composer_0, 0, 1).get_value_j01efc_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function rememberTheme$slambda($initDarkTheme, resultContinuation) {
    this.$initDarkTheme_1 = $initDarkTheme;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTheme$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberTheme$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTheme$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          Theme_getInstance().setDarkTheme_y468xo_k$(this.$initDarkTheme_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(rememberTheme$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberTheme$slambda(this.$initDarkTheme_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberTheme$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberTheme$slambda_0($initDarkTheme, resultContinuation) {
    var i = new rememberTheme$slambda($initDarkTheme, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberTheme$slambda_1($initDarkTheme, resultContinuation) {
    this.$initDarkTheme_1 = $initDarkTheme;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTheme$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberTheme$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTheme$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          Theme_getInstance().setDarkTheme_y468xo_k$(this.$initDarkTheme_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(rememberTheme$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberTheme$slambda_1(this.$initDarkTheme_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberTheme$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberTheme$slambda_2($initDarkTheme, resultContinuation) {
    var i = new rememberTheme$slambda_1($initDarkTheme, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
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
    $composer_0.startReplaceGroup_5hh8aj_k$(375608828);
    if (isTraceInProgress()) {
      traceEventStart(375608828, $changed, -1, 'team.platforma.multiplatform_material_extension.isDarkTheme (Platform.js.kt:58)');
    }
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var tmp0 = mediaQuery.matches;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
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
