(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'));
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
    globalThis['MaterialExtension-multiplatform_material_extension'] = factory(typeof globalThis['MaterialExtension-multiplatform_material_extension'] === 'undefined' ? {} : globalThis['MaterialExtension-multiplatform_material_extension'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics) {
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
  var LanguageQualifier = kotlin_components_resources_library.$_$.c;
  var RegionQualifier = kotlin_components_resources_library.$_$.d;
  var setOf_0 = kotlin_kotlin.$_$.bd;
  var StringResource = kotlin_components_resources_library.$_$.f;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var toString = kotlin_kotlin.$_$.eq;
  var hashCode = kotlin_kotlin.$_$.bh;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var equals = kotlin_kotlin.$_$.sg;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var toString_0 = kotlin_kotlin.$_$.oi;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var ButtonDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.y;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.tb;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p2;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.q6;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sp;
  var animateDpAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var animateFloatAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.sb;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.aa;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.nb;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.sh;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x1;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.rj;
  var THROW_ISE = kotlin_kotlin.$_$.po;
  var getLocalDelegateReference = kotlin_kotlin.$_$.xg;
  var KProperty0 = kotlin_kotlin.$_$.tj;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y1;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l1;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var THROW_IAE = kotlin_kotlin.$_$.oo;
  var enumEntries = kotlin_kotlin.$_$.cg;
  var Enum = kotlin_kotlin.$_$.zn;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
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
  initMetadataForClass(Button_0, 'Button', Button_0);
  initMetadataForClass(FilledButton, 'FilledButton');
  initMetadataForClass(OutlineButton, 'OutlineButton');
  initMetadataForClass(TextButton, 'TextButton');
  initMetadataForClass(TonalButton, 'TonalButton');
  initMetadataForClass(ElevatedButton, 'ElevatedButton');
  initMetadataForObject(AppButtonStyle, 'AppButtonStyle');
  initMetadataForLambda(AppFab$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AppFab$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AppFab$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(AppFabStyle, 'AppFabStyle');
  initMetadataForObject(ToolbarStyle, 'ToolbarStyle');
  initMetadataForClass(AppToolbarStyle, 'AppToolbarStyle', AppToolbarStyle);
  initMetadataForClass(ExpandStrategy, 'ExpandStrategy', VOID, Enum);
  initMetadataForClass(IconGravity, 'IconGravity', VOID, Enum);
  initMetadataForObject(Theme, 'Theme');
  initMetadataForLambda(rememberTheme$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(rememberTheme$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  //endregion
  function _collectCommonMainDrawable0Resources(map) {
    map.put_4fpzoq_k$('ic24_mel_arrow_down', CommonMainDrawable0_getInstance().get_ic24_mel_arrow_down_hllnzx_k$());
    map.put_4fpzoq_k$('ic24_mel_calendar', CommonMainDrawable0_getInstance().get_ic24_mel_calendar_6o56n1_k$());
    map.put_4fpzoq_k$('ic24_mel_exit_circle', CommonMainDrawable0_getInstance().get_ic24_mel_exit_circle_r4zf1w_k$());
    map.put_4fpzoq_k$('ic24_mel_eye_close', CommonMainDrawable0_getInstance().get_ic24_mel_eye_close_zawc2t_k$());
    map.put_4fpzoq_k$('ic24_mel_eye_open', CommonMainDrawable0_getInstance().get_ic24_mel_eye_open_qcmzcz_k$());
    map.put_4fpzoq_k$('ic24_mel_search', CommonMainDrawable0_getInstance().get_ic24_mel_search_61s4z7_k$());
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
  function CommonMainDrawable0$ic24_mel_arrow_down$delegate$lambda() {
    return init_ic24_mel_arrow_down();
  }
  function CommonMainDrawable0$ic24_mel_calendar$delegate$lambda() {
    return init_ic24_mel_calendar();
  }
  function CommonMainDrawable0$ic24_mel_exit_circle$delegate$lambda() {
    return init_ic24_mel_exit_circle();
  }
  function CommonMainDrawable0$ic24_mel_eye_close$delegate$lambda() {
    return init_ic24_mel_eye_close();
  }
  function CommonMainDrawable0$ic24_mel_eye_open$delegate$lambda() {
    return init_ic24_mel_eye_open();
  }
  function CommonMainDrawable0$ic24_mel_search$delegate$lambda() {
    return init_ic24_mel_search();
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
    tmp.ic24_mel_arrow_down$delegate_1 = lazy(CommonMainDrawable0$ic24_mel_arrow_down$delegate$lambda);
    var tmp_0 = this;
    tmp_0.ic24_mel_calendar$delegate_1 = lazy(CommonMainDrawable0$ic24_mel_calendar$delegate$lambda);
    var tmp_1 = this;
    tmp_1.ic24_mel_exit_circle$delegate_1 = lazy(CommonMainDrawable0$ic24_mel_exit_circle$delegate$lambda);
    var tmp_2 = this;
    tmp_2.ic24_mel_eye_close$delegate_1 = lazy(CommonMainDrawable0$ic24_mel_eye_close$delegate$lambda);
    var tmp_3 = this;
    tmp_3.ic24_mel_eye_open$delegate_1 = lazy(CommonMainDrawable0$ic24_mel_eye_open$delegate$lambda);
    var tmp_4 = this;
    tmp_4.ic24_mel_search$delegate_1 = lazy(CommonMainDrawable0$ic24_mel_search$delegate$lambda);
    var tmp_5 = this;
    tmp_5.mel_arrow_left$delegate_1 = lazy(CommonMainDrawable0$mel_arrow_left$delegate$lambda);
    var tmp_6 = this;
    tmp_6.mel_arrow_right$delegate_1 = lazy(CommonMainDrawable0$mel_arrow_right$delegate$lambda);
    var tmp_7 = this;
    tmp_7.mel_broom$delegate_1 = lazy(CommonMainDrawable0$mel_broom$delegate$lambda);
    var tmp_8 = this;
    tmp_8.mel_hide_password$delegate_1 = lazy(CommonMainDrawable0$mel_hide_password$delegate$lambda);
    var tmp_9 = this;
    tmp_9.mel_ic_calendar$delegate_1 = lazy(CommonMainDrawable0$mel_ic_calendar$delegate$lambda);
    var tmp_10 = this;
    tmp_10.mel_ic_clear$delegate_1 = lazy(CommonMainDrawable0$mel_ic_clear$delegate$lambda);
    var tmp_11 = this;
    tmp_11.mel_ic_down$delegate_1 = lazy(CommonMainDrawable0$mel_ic_down$delegate$lambda);
    var tmp_12 = this;
    tmp_12.mel_ic_search$delegate_1 = lazy(CommonMainDrawable0$mel_ic_search$delegate$lambda);
    var tmp_13 = this;
    tmp_13.mel_show_password$delegate_1 = lazy(CommonMainDrawable0$mel_show_password$delegate$lambda);
    var tmp_14 = this;
    tmp_14.moon$delegate_1 = lazy(CommonMainDrawable0$moon$delegate$lambda);
    var tmp_15 = this;
    tmp_15.sun$delegate_1 = lazy(CommonMainDrawable0$sun$delegate$lambda);
  }
  protoOf(CommonMainDrawable0).get_ic24_mel_arrow_down_hllnzx_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ic24_mel_arrow_down$delegate_1;
    ic24_mel_arrow_down$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_ic24_mel_calendar_6o56n1_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ic24_mel_calendar$delegate_1;
    ic24_mel_calendar$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_ic24_mel_exit_circle_r4zf1w_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ic24_mel_exit_circle$delegate_1;
    ic24_mel_exit_circle$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_ic24_mel_eye_close_zawc2t_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ic24_mel_eye_close$delegate_1;
    ic24_mel_eye_close$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_ic24_mel_eye_open_qcmzcz_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ic24_mel_eye_open$delegate_1;
    ic24_mel_eye_open$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(CommonMainDrawable0).get_ic24_mel_search_61s4z7_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ic24_mel_search$delegate_1;
    ic24_mel_search$factory();
    return this_0.get_value_j01efc_k$();
  };
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
  function init_ic24_mel_arrow_down() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic24_mel_arrow_down', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/ic24_mel_arrow_down.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_ic24_mel_calendar() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic24_mel_calendar', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/ic24_mel_calendar.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_ic24_mel_exit_circle() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic24_mel_exit_circle', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/ic24_mel_exit_circle.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_ic24_mel_eye_close() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic24_mel_eye_close', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/ic24_mel_eye_close.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_ic24_mel_eye_open() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic24_mel_eye_open', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/ic24_mel_eye_open.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function init_ic24_mel_search() {
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic24_mel_search', setOf(new ResourceItem(tmp$ret$0, 'composeResources/materialextension.multiplatform_material_extension.generated.resources/drawable/ic24_mel_search.xml', new Long(-1, -1), new Long(-1, -1))));
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
  function ic24_mel_arrow_down$factory() {
    return getPropertyCallableRef('ic24_mel_arrow_down', 1, KProperty1, function (receiver) {
      return receiver.get_ic24_mel_arrow_down_hllnzx_k$();
    }, null);
  }
  function ic24_mel_calendar$factory() {
    return getPropertyCallableRef('ic24_mel_calendar', 1, KProperty1, function (receiver) {
      return receiver.get_ic24_mel_calendar_6o56n1_k$();
    }, null);
  }
  function ic24_mel_exit_circle$factory() {
    return getPropertyCallableRef('ic24_mel_exit_circle', 1, KProperty1, function (receiver) {
      return receiver.get_ic24_mel_exit_circle_r4zf1w_k$();
    }, null);
  }
  function ic24_mel_eye_close$factory() {
    return getPropertyCallableRef('ic24_mel_eye_close', 1, KProperty1, function (receiver) {
      return receiver.get_ic24_mel_eye_close_zawc2t_k$();
    }, null);
  }
  function ic24_mel_eye_open$factory() {
    return getPropertyCallableRef('ic24_mel_eye_open', 1, KProperty1, function (receiver) {
      return receiver.get_ic24_mel_eye_open_qcmzcz_k$();
    }, null);
  }
  function ic24_mel_search$factory() {
    return getPropertyCallableRef('ic24_mel_search', 1, KProperty1, function (receiver) {
      return receiver.get_ic24_mel_search_61s4z7_k$();
    }, null);
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
  var team_platforma_multiplatform_material_extension_bottom_sheet_style_CommonBottomSheetStyle$stable;
  var team_platforma_multiplatform_material_extension_bottom_sheet_utils_CommonBottomSheetState$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_Button$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_FilledButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_OutlineButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_TextButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_TonalButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle_ElevatedButton$stable;
  var team_platforma_multiplatform_material_extension_button_style_AppButtonStyle$stable;
  function _set_mButton__xfcgpm($this, _set____db54di) {
    $this.mButton_1 = _set____db54di;
  }
  function _get_mButton__bzjawi($this) {
    return $this.mButton_1;
  }
  function _set_mFilledButton__j88wf8($this, _set____db54di) {
    $this.mFilledButton_1 = _set____db54di;
  }
  function _get_mFilledButton__40hdww($this) {
    return $this.mFilledButton_1;
  }
  function _set_mOutlineButton__2b9du8($this, _set____db54di) {
    $this.mOutlineButton_1 = _set____db54di;
  }
  function _get_mOutlineButton__ructvo($this) {
    return $this.mOutlineButton_1;
  }
  function _set_mTextButton__yco5mh($this, _set____db54di) {
    $this.mTextButton_1 = _set____db54di;
  }
  function _get_mTextButton__6e1q0r($this) {
    return $this.mTextButton_1;
  }
  function _set_mTonalButton__g5h92k($this, _set____db54di) {
    $this.mTonalButton_1 = _set____db54di;
  }
  function _get_mTonalButton__lqiig($this) {
    return $this.mTonalButton_1;
  }
  function _set_mElevatedButton__fplb30($this, _set____db54di) {
    $this.mElevatedButton_1 = _set____db54di;
  }
  function _get_mElevatedButton__ptbilk($this) {
    return $this.mElevatedButton_1;
  }
  function Button_0(shape, colors, elevation, border) {
    shape = shape === VOID ? null : shape;
    colors = colors === VOID ? null : colors;
    elevation = elevation === VOID ? null : elevation;
    border = border === VOID ? null : border;
    this.shape_1 = shape;
    this.colors_1 = colors;
    this.elevation_1 = elevation;
    this.border_1 = border;
  }
  protoOf(Button_0).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(Button_0).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(Button_0).get_elevation_8fwyb8_k$ = function () {
    return this.elevation_1;
  };
  protoOf(Button_0).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(Button_0).component1_7eebsc_k$ = function () {
    return this.shape_1;
  };
  protoOf(Button_0).component2_7eebsb_k$ = function () {
    return this.colors_1;
  };
  protoOf(Button_0).component3_7eebsa_k$ = function () {
    return this.elevation_1;
  };
  protoOf(Button_0).component4_7eebs9_k$ = function () {
    return this.border_1;
  };
  protoOf(Button_0).copy_ecy40o_k$ = function (shape, colors, elevation, border) {
    return new Button_0(shape, colors, elevation, border);
  };
  protoOf(Button_0).copy$default_pxs04j_k$ = function (shape, colors, elevation, border, $super) {
    shape = shape === VOID ? this.shape_1 : shape;
    colors = colors === VOID ? this.colors_1 : colors;
    elevation = elevation === VOID ? this.elevation_1 : elevation;
    border = border === VOID ? this.border_1 : border;
    return $super === VOID ? this.copy_ecy40o_k$(shape, colors, elevation, border) : $super.copy_ecy40o_k$.call(this, shape, colors, elevation, border);
  };
  protoOf(Button_0).toString = function () {
    return 'Button(shape=' + toString(this.shape_1) + ', colors=' + toString(this.colors_1) + ', elevation=' + toString(this.elevation_1) + ', border=' + toString(this.border_1) + ')';
  };
  protoOf(Button_0).hashCode = function () {
    var result = this.shape_1 == null ? 0 : hashCode(this.shape_1);
    result = imul(result, 31) + (this.colors_1 == null ? 0 : this.colors_1.hashCode()) | 0;
    result = imul(result, 31) + (this.elevation_1 == null ? 0 : this.elevation_1.hashCode()) | 0;
    result = imul(result, 31) + (this.border_1 == null ? 0 : this.border_1.hashCode()) | 0;
    return result;
  };
  protoOf(Button_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Button_0))
      return false;
    var tmp0_other_with_cast = other instanceof Button_0 ? other : THROW_CCE();
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!equals(this.colors_1, tmp0_other_with_cast.colors_1))
      return false;
    if (!equals(this.elevation_1, tmp0_other_with_cast.elevation_1))
      return false;
    if (!equals(this.border_1, tmp0_other_with_cast.border_1))
      return false;
    return true;
  };
  function FilledButton(shape, colors, elevation, border) {
    this.shape_1 = shape;
    this.colors_1 = colors;
    this.elevation_1 = elevation;
    this.border_1 = border;
  }
  protoOf(FilledButton).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(FilledButton).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(FilledButton).get_elevation_8fwyb8_k$ = function () {
    return this.elevation_1;
  };
  protoOf(FilledButton).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(FilledButton).component1_7eebsc_k$ = function () {
    return this.shape_1;
  };
  protoOf(FilledButton).component2_7eebsb_k$ = function () {
    return this.colors_1;
  };
  protoOf(FilledButton).component3_7eebsa_k$ = function () {
    return this.elevation_1;
  };
  protoOf(FilledButton).component4_7eebs9_k$ = function () {
    return this.border_1;
  };
  protoOf(FilledButton).copy_pqcxwr_k$ = function (shape, colors, elevation, border) {
    return new FilledButton(shape, colors, elevation, border);
  };
  protoOf(FilledButton).copy$default_fgyhqq_k$ = function (shape, colors, elevation, border, $super) {
    shape = shape === VOID ? this.shape_1 : shape;
    colors = colors === VOID ? this.colors_1 : colors;
    elevation = elevation === VOID ? this.elevation_1 : elevation;
    border = border === VOID ? this.border_1 : border;
    return $super === VOID ? this.copy_pqcxwr_k$(shape, colors, elevation, border) : $super.copy_pqcxwr_k$.call(this, shape, colors, elevation, border);
  };
  protoOf(FilledButton).toString = function () {
    return 'FilledButton(shape=' + toString_0(this.shape_1) + ', colors=' + toString_0(this.colors_1) + ', elevation=' + toString_0(this.elevation_1) + ', border=' + toString(this.border_1) + ')';
  };
  protoOf(FilledButton).hashCode = function () {
    var result = hashCode(this.shape_1);
    result = imul(result, 31) + this.colors_1.hashCode() | 0;
    result = imul(result, 31) + this.elevation_1.hashCode() | 0;
    result = imul(result, 31) + (this.border_1 == null ? 0 : this.border_1.hashCode()) | 0;
    return result;
  };
  protoOf(FilledButton).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FilledButton))
      return false;
    var tmp0_other_with_cast = other instanceof FilledButton ? other : THROW_CCE();
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!this.colors_1.equals(tmp0_other_with_cast.colors_1))
      return false;
    if (!this.elevation_1.equals(tmp0_other_with_cast.elevation_1))
      return false;
    if (!equals(this.border_1, tmp0_other_with_cast.border_1))
      return false;
    return true;
  };
  function OutlineButton(shape, colors, elevation, border) {
    this.shape_1 = shape;
    this.colors_1 = colors;
    this.elevation_1 = elevation;
    this.border_1 = border;
  }
  protoOf(OutlineButton).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(OutlineButton).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(OutlineButton).get_elevation_8fwyb8_k$ = function () {
    return this.elevation_1;
  };
  protoOf(OutlineButton).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(OutlineButton).component1_7eebsc_k$ = function () {
    return this.shape_1;
  };
  protoOf(OutlineButton).component2_7eebsb_k$ = function () {
    return this.colors_1;
  };
  protoOf(OutlineButton).component3_7eebsa_k$ = function () {
    return this.elevation_1;
  };
  protoOf(OutlineButton).component4_7eebs9_k$ = function () {
    return this.border_1;
  };
  protoOf(OutlineButton).copy_nvftif_k$ = function (shape, colors, elevation, border) {
    return new OutlineButton(shape, colors, elevation, border);
  };
  protoOf(OutlineButton).copy$default_pr0p0g_k$ = function (shape, colors, elevation, border, $super) {
    shape = shape === VOID ? this.shape_1 : shape;
    colors = colors === VOID ? this.colors_1 : colors;
    elevation = elevation === VOID ? this.elevation_1 : elevation;
    border = border === VOID ? this.border_1 : border;
    return $super === VOID ? this.copy_nvftif_k$(shape, colors, elevation, border) : $super.copy_nvftif_k$.call(this, shape, colors, elevation, border);
  };
  protoOf(OutlineButton).toString = function () {
    return 'OutlineButton(shape=' + toString_0(this.shape_1) + ', colors=' + toString_0(this.colors_1) + ', elevation=' + toString(this.elevation_1) + ', border=' + this.border_1.toString() + ')';
  };
  protoOf(OutlineButton).hashCode = function () {
    var result = hashCode(this.shape_1);
    result = imul(result, 31) + this.colors_1.hashCode() | 0;
    result = imul(result, 31) + (this.elevation_1 == null ? 0 : this.elevation_1.hashCode()) | 0;
    result = imul(result, 31) + this.border_1.hashCode() | 0;
    return result;
  };
  protoOf(OutlineButton).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OutlineButton))
      return false;
    var tmp0_other_with_cast = other instanceof OutlineButton ? other : THROW_CCE();
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!this.colors_1.equals(tmp0_other_with_cast.colors_1))
      return false;
    if (!equals(this.elevation_1, tmp0_other_with_cast.elevation_1))
      return false;
    if (!this.border_1.equals(tmp0_other_with_cast.border_1))
      return false;
    return true;
  };
  function TextButton(shape, colors, elevation, border) {
    this.shape_1 = shape;
    this.colors_1 = colors;
    this.elevation_1 = elevation;
    this.border_1 = border;
  }
  protoOf(TextButton).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(TextButton).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(TextButton).get_elevation_8fwyb8_k$ = function () {
    return this.elevation_1;
  };
  protoOf(TextButton).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(TextButton).component1_7eebsc_k$ = function () {
    return this.shape_1;
  };
  protoOf(TextButton).component2_7eebsb_k$ = function () {
    return this.colors_1;
  };
  protoOf(TextButton).component3_7eebsa_k$ = function () {
    return this.elevation_1;
  };
  protoOf(TextButton).component4_7eebs9_k$ = function () {
    return this.border_1;
  };
  protoOf(TextButton).copy_gfr9la_k$ = function (shape, colors, elevation, border) {
    return new TextButton(shape, colors, elevation, border);
  };
  protoOf(TextButton).copy$default_9eadls_k$ = function (shape, colors, elevation, border, $super) {
    shape = shape === VOID ? this.shape_1 : shape;
    colors = colors === VOID ? this.colors_1 : colors;
    elevation = elevation === VOID ? this.elevation_1 : elevation;
    border = border === VOID ? this.border_1 : border;
    return $super === VOID ? this.copy_gfr9la_k$(shape, colors, elevation, border) : $super.copy_gfr9la_k$.call(this, shape, colors, elevation, border);
  };
  protoOf(TextButton).toString = function () {
    return 'TextButton(shape=' + toString_0(this.shape_1) + ', colors=' + toString_0(this.colors_1) + ', elevation=' + toString(this.elevation_1) + ', border=' + toString(this.border_1) + ')';
  };
  protoOf(TextButton).hashCode = function () {
    var result = hashCode(this.shape_1);
    result = imul(result, 31) + this.colors_1.hashCode() | 0;
    result = imul(result, 31) + (this.elevation_1 == null ? 0 : this.elevation_1.hashCode()) | 0;
    result = imul(result, 31) + (this.border_1 == null ? 0 : this.border_1.hashCode()) | 0;
    return result;
  };
  protoOf(TextButton).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextButton))
      return false;
    var tmp0_other_with_cast = other instanceof TextButton ? other : THROW_CCE();
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!this.colors_1.equals(tmp0_other_with_cast.colors_1))
      return false;
    if (!equals(this.elevation_1, tmp0_other_with_cast.elevation_1))
      return false;
    if (!equals(this.border_1, tmp0_other_with_cast.border_1))
      return false;
    return true;
  };
  function TonalButton(shape, colors, elevation, border) {
    this.shape_1 = shape;
    this.colors_1 = colors;
    this.elevation_1 = elevation;
    this.border_1 = border;
  }
  protoOf(TonalButton).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(TonalButton).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(TonalButton).get_elevation_8fwyb8_k$ = function () {
    return this.elevation_1;
  };
  protoOf(TonalButton).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(TonalButton).component1_7eebsc_k$ = function () {
    return this.shape_1;
  };
  protoOf(TonalButton).component2_7eebsb_k$ = function () {
    return this.colors_1;
  };
  protoOf(TonalButton).component3_7eebsa_k$ = function () {
    return this.elevation_1;
  };
  protoOf(TonalButton).component4_7eebs9_k$ = function () {
    return this.border_1;
  };
  protoOf(TonalButton).copy_pqcxwr_k$ = function (shape, colors, elevation, border) {
    return new TonalButton(shape, colors, elevation, border);
  };
  protoOf(TonalButton).copy$default_98u29m_k$ = function (shape, colors, elevation, border, $super) {
    shape = shape === VOID ? this.shape_1 : shape;
    colors = colors === VOID ? this.colors_1 : colors;
    elevation = elevation === VOID ? this.elevation_1 : elevation;
    border = border === VOID ? this.border_1 : border;
    return $super === VOID ? this.copy_pqcxwr_k$(shape, colors, elevation, border) : $super.copy_pqcxwr_k$.call(this, shape, colors, elevation, border);
  };
  protoOf(TonalButton).toString = function () {
    return 'TonalButton(shape=' + toString_0(this.shape_1) + ', colors=' + toString_0(this.colors_1) + ', elevation=' + toString_0(this.elevation_1) + ', border=' + toString(this.border_1) + ')';
  };
  protoOf(TonalButton).hashCode = function () {
    var result = hashCode(this.shape_1);
    result = imul(result, 31) + this.colors_1.hashCode() | 0;
    result = imul(result, 31) + this.elevation_1.hashCode() | 0;
    result = imul(result, 31) + (this.border_1 == null ? 0 : this.border_1.hashCode()) | 0;
    return result;
  };
  protoOf(TonalButton).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TonalButton))
      return false;
    var tmp0_other_with_cast = other instanceof TonalButton ? other : THROW_CCE();
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!this.colors_1.equals(tmp0_other_with_cast.colors_1))
      return false;
    if (!this.elevation_1.equals(tmp0_other_with_cast.elevation_1))
      return false;
    if (!equals(this.border_1, tmp0_other_with_cast.border_1))
      return false;
    return true;
  };
  function ElevatedButton(shape, colors, elevation, border) {
    this.shape_1 = shape;
    this.colors_1 = colors;
    this.elevation_1 = elevation;
    this.border_1 = border;
  }
  protoOf(ElevatedButton).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(ElevatedButton).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(ElevatedButton).get_elevation_8fwyb8_k$ = function () {
    return this.elevation_1;
  };
  protoOf(ElevatedButton).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(ElevatedButton).component1_7eebsc_k$ = function () {
    return this.shape_1;
  };
  protoOf(ElevatedButton).component2_7eebsb_k$ = function () {
    return this.colors_1;
  };
  protoOf(ElevatedButton).component3_7eebsa_k$ = function () {
    return this.elevation_1;
  };
  protoOf(ElevatedButton).component4_7eebs9_k$ = function () {
    return this.border_1;
  };
  protoOf(ElevatedButton).copy_pqcxwr_k$ = function (shape, colors, elevation, border) {
    return new ElevatedButton(shape, colors, elevation, border);
  };
  protoOf(ElevatedButton).copy$default_3tj3za_k$ = function (shape, colors, elevation, border, $super) {
    shape = shape === VOID ? this.shape_1 : shape;
    colors = colors === VOID ? this.colors_1 : colors;
    elevation = elevation === VOID ? this.elevation_1 : elevation;
    border = border === VOID ? this.border_1 : border;
    return $super === VOID ? this.copy_pqcxwr_k$(shape, colors, elevation, border) : $super.copy_pqcxwr_k$.call(this, shape, colors, elevation, border);
  };
  protoOf(ElevatedButton).toString = function () {
    return 'ElevatedButton(shape=' + toString_0(this.shape_1) + ', colors=' + toString_0(this.colors_1) + ', elevation=' + toString_0(this.elevation_1) + ', border=' + toString(this.border_1) + ')';
  };
  protoOf(ElevatedButton).hashCode = function () {
    var result = hashCode(this.shape_1);
    result = imul(result, 31) + this.colors_1.hashCode() | 0;
    result = imul(result, 31) + this.elevation_1.hashCode() | 0;
    result = imul(result, 31) + (this.border_1 == null ? 0 : this.border_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElevatedButton).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElevatedButton))
      return false;
    var tmp0_other_with_cast = other instanceof ElevatedButton ? other : THROW_CCE();
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!this.colors_1.equals(tmp0_other_with_cast.colors_1))
      return false;
    if (!this.elevation_1.equals(tmp0_other_with_cast.elevation_1))
      return false;
    if (!equals(this.border_1, tmp0_other_with_cast.border_1))
      return false;
    return true;
  };
  function AppButtonStyle$define$lambda($tmp0_rcvr, $button, $filledButton, $outlineButton, $textButton, $tonalButton, $elevatedButton, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.define_mxmch6_k$($button._v, $filledButton._v, $outlineButton._v, $textButton._v, $tonalButton._v, $elevatedButton._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AppButtonStyle() {
    AppButtonStyle_instance = this;
    this.mButton_1 = new Button_0();
    this.mFilledButton_1 = null;
    this.mOutlineButton_1 = null;
    this.mTextButton_1 = null;
    this.mTonalButton_1 = null;
    this.mElevatedButton_1 = null;
  }
  protoOf(AppButtonStyle).define_mxmch6_k$ = function (button, filledButton, outlineButton, textButton, tonalButton, elevatedButton, $composer, $changed, $default) {
    var button_0 = {_v: button};
    var filledButton_0 = {_v: filledButton};
    var outlineButton_0 = {_v: outlineButton};
    var textButton_0 = {_v: textButton};
    var tonalButton_0 = {_v: tonalButton};
    var elevatedButton_0 = {_v: elevatedButton};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-129876463);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.changed_ga7h3f_k$(button_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(filledButton_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(outlineButton_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(textButton_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tonalButton_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(elevatedButton_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          button_0._v = new Button_0();
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          filledButton_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          outlineButton_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          textButton_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          tonalButton_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          elevatedButton_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-129876463, $dirty, -1, 'team.platforma.multiplatform_material_extension.button.style.AppButtonStyle.define (AppButtonStyle.kt:25)');
      }
      this.mButton_1 = button_0._v;
      this.mFilledButton_1 = filledButton_0._v;
      this.mOutlineButton_1 = outlineButton_0._v;
      this.mTextButton_1 = textButton_0._v;
      this.mTonalButton_1 = tonalButton_0._v;
      this.mElevatedButton_1 = elevatedButton_0._v;
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(AppButtonStyle$define$lambda(this, button_0, filledButton_0, outlineButton_0, textButton_0, tonalButton_0, elevatedButton_0, $changed, $default));
    }
  };
  protoOf(AppButtonStyle).filledButton_9v6ubf_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1654376442);
    if (isTraceInProgress()) {
      traceEventStart(1654376442, $changed, -1, 'team.platforma.multiplatform_material_extension.button.style.AppButtonStyle.filledButton (AppButtonStyle.kt:49)');
    }
    var tmp0_safe_receiver = this.mFilledButton_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.shape_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.mButton_1.shape_1 : tmp1_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(272214411);
    var tmp1_group = tmp2_elvis_lhs == null ? ButtonDefaults_getInstance().get_shape_guimrj_k$($composer_0, 0) : tmp2_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp3_safe_receiver = this.mFilledButton_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.colors_1;
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.mButton_1.colors_1 : tmp4_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(272217110);
    var tmp2_group = tmp5_elvis_lhs == null ? ButtonDefaults_getInstance().buttonColors_bduh13_k$($composer_0, 0) : tmp5_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp6_safe_receiver = this.mFilledButton_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.elevation_1;
    var tmp8_elvis_lhs = tmp7_elvis_lhs == null ? this.mButton_1.elevation_1 : tmp7_elvis_lhs;
    var tmp;
    if (tmp8_elvis_lhs == null) {
      var tmp_0 = ButtonDefaults_getInstance();
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      tmp = tmp_0.buttonElevation_slxcmt_k$(tmp_1, tmp_2, tmp_3, tmp_4, _Dp___init__impl__ms3zkb(0.0), $composer_0, 0, 31);
    } else {
      tmp = tmp8_elvis_lhs;
    }
    var tmp3_group = tmp;
    var tmp9_safe_receiver = this.mFilledButton_1;
    var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.border_1;
    var tmp0 = new FilledButton(tmp1_group, tmp2_group, tmp3_group, tmp10_elvis_lhs == null ? this.mButton_1.border_1 : tmp10_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(AppButtonStyle).outlineButton_jl5qn9_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(55972932);
    if (isTraceInProgress()) {
      traceEventStart(55972932, $changed, -1, 'team.platforma.multiplatform_material_extension.button.style.AppButtonStyle.outlineButton (AppButtonStyle.kt:66)');
    }
    var tmp0_safe_receiver = this.mOutlineButton_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.shape_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.mButton_1.shape_1 : tmp1_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(-784860448);
    var tmp1_group = tmp2_elvis_lhs == null ? ButtonDefaults_getInstance().get_outlinedShape_hipzr7_k$($composer_0, 0) : tmp2_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp3_safe_receiver = this.mOutlineButton_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.colors_1;
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.mButton_1.colors_1 : tmp4_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(-784857460);
    var tmp2_group = tmp5_elvis_lhs == null ? ButtonDefaults_getInstance().outlinedButtonColors_ong4mt_k$($composer_0, 0) : tmp5_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp6_safe_receiver = this.mOutlineButton_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.elevation_1;
    var tmp = tmp7_elvis_lhs == null ? this.mButton_1.elevation_1 : tmp7_elvis_lhs;
    var tmp8_safe_receiver = this.mOutlineButton_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.border_1;
    var tmp10_elvis_lhs = tmp9_elvis_lhs == null ? this.mButton_1.border_1 : tmp9_elvis_lhs;
    var tmp3_group = tmp10_elvis_lhs == null ? ButtonDefaults_getInstance().outlinedButtonBorder_58hxk4_k$(true, $composer_0, 6, 0) : tmp10_elvis_lhs;
    var tmp0 = new OutlineButton(tmp1_group, tmp2_group, tmp, tmp3_group);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(AppButtonStyle).textButton_ms7v4q_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1965865756);
    if (isTraceInProgress()) {
      traceEventStart(-1965865756, $changed, -1, 'team.platforma.multiplatform_material_extension.button.style.AppButtonStyle.textButton (AppButtonStyle.kt:82)');
    }
    var tmp0_safe_receiver = this.mTextButton_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.shape_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.mButton_1.shape_1 : tmp1_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(2025548408);
    var tmp1_group = tmp2_elvis_lhs == null ? ButtonDefaults_getInstance().get_textShape_bivzda_k$($composer_0, 0) : tmp2_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp3_safe_receiver = this.mTextButton_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.colors_1;
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.mButton_1.colors_1 : tmp4_elvis_lhs;
    var tmp2_group = tmp5_elvis_lhs == null ? ButtonDefaults_getInstance().textButtonColors_2xxudm_k$($composer_0, 0) : tmp5_elvis_lhs;
    var tmp6_safe_receiver = this.mTextButton_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.elevation_1;
    var tmp = tmp7_elvis_lhs == null ? this.mButton_1.elevation_1 : tmp7_elvis_lhs;
    var tmp8_safe_receiver = this.mTextButton_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.border_1;
    var tmp0 = new TextButton(tmp1_group, tmp2_group, tmp, tmp9_elvis_lhs == null ? this.mButton_1.border_1 : tmp9_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(AppButtonStyle).tonalButton_xcxy3b_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1132059908);
    if (isTraceInProgress()) {
      traceEventStart(1132059908, $changed, -1, 'team.platforma.multiplatform_material_extension.button.style.AppButtonStyle.tonalButton (AppButtonStyle.kt:98)');
    }
    var tmp0_safe_receiver = this.mTonalButton_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.shape_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.mButton_1.shape_1 : tmp1_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(-811377411);
    var tmp1_group = tmp2_elvis_lhs == null ? ButtonDefaults_getInstance().get_filledTonalShape_2xw3l7_k$($composer_0, 0) : tmp2_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp3_safe_receiver = this.mTonalButton_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.colors_1;
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.mButton_1.colors_1 : tmp4_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(-811374392);
    var tmp2_group = tmp5_elvis_lhs == null ? ButtonDefaults_getInstance().filledTonalButtonColors_ug2aj_k$($composer_0, 0) : tmp5_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp6_safe_receiver = this.mTonalButton_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.elevation_1;
    var tmp8_elvis_lhs = tmp7_elvis_lhs == null ? this.mButton_1.elevation_1 : tmp7_elvis_lhs;
    var tmp;
    if (tmp8_elvis_lhs == null) {
      var tmp_0 = ButtonDefaults_getInstance();
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      tmp = tmp_0.filledTonalButtonElevation_1x8twn_k$(tmp_1, tmp_2, tmp_3, tmp_4, _Dp___init__impl__ms3zkb(0.0), $composer_0, 0, 31);
    } else {
      tmp = tmp8_elvis_lhs;
    }
    var tmp3_group = tmp;
    var tmp9_safe_receiver = this.mTonalButton_1;
    var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.border_1;
    var tmp0 = new TonalButton(tmp1_group, tmp2_group, tmp3_group, tmp10_elvis_lhs == null ? this.mButton_1.border_1 : tmp10_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(AppButtonStyle).elevatedButton_op1qrh_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1893578326);
    if (isTraceInProgress()) {
      traceEventStart(-1893578326, $changed, -1, 'team.platforma.multiplatform_material_extension.button.style.AppButtonStyle.elevatedButton (AppButtonStyle.kt:114)');
    }
    var tmp0_safe_receiver = this.mElevatedButton_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.shape_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.mButton_1.shape_1 : tmp1_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(-426353475);
    var tmp1_group = tmp2_elvis_lhs == null ? ButtonDefaults_getInstance().get_elevatedShape_8w69aj_k$($composer_0, 0) : tmp2_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp3_safe_receiver = this.mElevatedButton_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.colors_1;
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.mButton_1.colors_1 : tmp4_elvis_lhs;
    $composer_0.startReplaceGroup_5hh8aj_k$(-426350456);
    var tmp2_group = tmp5_elvis_lhs == null ? ButtonDefaults_getInstance().elevatedButtonColors_7vj8b7_k$($composer_0, 0) : tmp5_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp6_safe_receiver = this.mElevatedButton_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.elevation_1;
    var tmp8_elvis_lhs = tmp7_elvis_lhs == null ? this.mButton_1.elevation_1 : tmp7_elvis_lhs;
    var tmp;
    if (tmp8_elvis_lhs == null) {
      var tmp_0 = ButtonDefaults_getInstance();
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      tmp = tmp_0.elevatedButtonElevation_gyw5jp_k$(tmp_1, tmp_2, tmp_3, tmp_4, _Dp___init__impl__ms3zkb(0.0), $composer_0, 0, 31);
    } else {
      tmp = tmp8_elvis_lhs;
    }
    var tmp3_group = tmp;
    var tmp9_safe_receiver = this.mElevatedButton_1;
    var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.border_1;
    var tmp0 = new ElevatedButton(tmp1_group, tmp2_group, tmp3_group, tmp10_elvis_lhs == null ? this.mButton_1.border_1 : tmp10_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1035285987);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(expand_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(expandStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(iconGravity_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(text_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(icon) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(enabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(hide_0._v) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | (($default & 256) === 0 && $composer_0.changed_ga7h3f_k$(shape_0._v) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | (($default & 512) === 0 && $composer_0.changed_ga7h3f_k$(colors_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | (($default & 2048) === 0 && $composer_0.changed_ga7h3f_k$(elevation_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(expandDuration_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(shrinkDuration_0._v) ? 2048 : 1024);
    if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | (($default & 16384) === 0 && $composer_0.changed_ga7h3f_k$(border_0._v) ? 16384 : 8192);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          expand_0._v = false;
        }
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
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
          shape_0._v = AppFabStyle_getInstance().fabButton_iuwips_k$($composer_0, 0).get_shape_iyi9a0_k$();
          $dirty = $dirty & -234881025;
        }
        if (!(($default & 512) === 0)) {
          colors_0._v = AppFabStyle_getInstance().fabButton_iuwips_k$($composer_0, 0).get_colors_c05661_k$();
          $dirty = $dirty & -1879048193;
        }
        if (!(($default & 2048) === 0)) {
          elevation_0._v = AppFabStyle_getInstance().fabButton_iuwips_k$($composer_0, 0).get_elevation_8fwyb8_k$();
          $dirty1 = $dirty1 & -113;
        }
        if (!(($default & 4096) === 0)) {
          expandDuration_0._v = null;
        }
        if (!(($default & 8192) === 0)) {
          shrinkDuration_0._v = null;
        }
        if (!(($default & 16384) === 0)) {
          border_0._v = AppFabStyle_getInstance().fabButton_iuwips_k$($composer_0, 0).get_border_bj7585_k$();
          $dirty1 = $dirty1 & -57345;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
        if (!(($default & 512) === 0))
          $dirty = $dirty & -1879048193;
        if (!(($default & 2048) === 0))
          $dirty1 = $dirty1 & -113;
        if (!(($default & 16384) === 0))
          $dirty1 = $dirty1 & -57345;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1035285987, $dirty, $dirty1, 'team.platforma.multiplatform_material_extension.fab.AppFab (AppFab.kt:56)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(257922642);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mExpand$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(257924401);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_0 = mutableStateOf(true);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mEnabled$delegate = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(257926033);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_1 = mutableStateOf(true);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var mHide$delegate = tmp2_group;
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_3 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_3);
      sourceInformationMarkerEnd($composer_1);
      var density = tmp0;
      var tmp_5 = expand_0._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(257929296);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_4.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_2 = AppFab$slambda_0(expand_0, mExpand$delegate, null);
        this_4.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(tmp_5, tmp3_group, $composer_0, 14 & $dirty);
      var tmp_8 = enabled_0._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(257931282);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      var invalid_0 = ($dirty & 3670016) === 1048576;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_5.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_3 = AppFab$slambda_2(enabled_0, mEnabled$delegate, null);
        this_5.updateRememberedValue_l1wh71_k$(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp4_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(tmp_8, tmp4_group, $composer_0, 14 & $dirty >> 18);
      var tmp_11 = hide_0._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(257933228);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      var invalid_1 = ($dirty & 29360128) === 8388608;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_6.rememberedValue_4dg93v_k$();
      var tmp_12;
      if (invalid_1 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_4 = AppFab$slambda_4(hide_0, mHide$delegate, null);
        this_6.updateRememberedValue_l1wh71_k$(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp5_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(tmp_11, tmp5_group, $composer_0, 14 & $dirty >> 21);
      $composer_0.startReplaceGroup_5hh8aj_k$(257936559);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_7.rememberedValue_4dg93v_k$();
      var tmp_14;
      if (false || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
        var value_5 = mutableStateOf(0.0);
        this_7.updateRememberedValue_l1wh71_k$(value_5);
        tmp_14 = value_5;
      } else {
        tmp_14 = it_5;
      }
      var tmp_15 = tmp_14;
      var tmp6_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var maxWidth$delegate = tmp6_group;
      var tmp_16;
      if (AppFab$lambda(mExpand$delegate)) {
        var tmp_17;
        if (!(text_0._v == null)) {
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
          tmp_17 = density.toDp_hs0w0_k$(AppFab$lambda_5(maxWidth$delegate));
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
        switch (expandStrategy_0._v.get_ordinal_ip24qg_k$()) {
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
      $composer_0.startReplaceGroup_5hh8aj_k$(257967881);
      if (expandStrategy_0._v.equals(ExpandStrategy_MaxWidth_getInstance())) {
        var tmp_24 = fillMaxWidth(Companion_getInstance());
        $composer_0.startReplaceGroup_5hh8aj_k$(257972949);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_8 = $composer_0;
        var invalid_2 = ($dirty & 57344) === 16384;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = this_8.rememberedValue_4dg93v_k$();
        var tmp_25;
        if (invalid_2 || it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
          var value_6 = AppFab$lambda_11(text_0, maxWidth$delegate);
          this_8.updateRememberedValue_l1wh71_k$(value_6);
          tmp_25 = value_6;
        } else {
          tmp_25 = it_6;
        }
        var tmp_26 = tmp_25;
        var tmp7_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Box(onGloballyPositioned(tmp_24, tmp7_group), $composer_0, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
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
      var tmp_32 = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$40 = _Dp___init__impl__ms3zkb(56);
      var tmp_33 = heightIn(tmp_32, tmp$ret$40);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$41 = _Dp___init__impl__ms3zkb(56);
      var modifier_1 = tmp_31.then_g5qrxq_k$(widthIn(tmp_33, tmp$ret$41));
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_getInstance();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
      var localMap = $composer_3.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_3, modifier_2);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
      var tmp_34 = $composer_4.get_applier_bupu8u_k$();
      if (!isInterface(tmp_34, Applier)) {
        invalidApplier();
      }
      $composer_4.startReusableNode_jjgeyp_k$();
      if ($composer_4.get_inserting_25mlsw_k$()) {
        $composer_4.createNode_ahrd54_k$(factory);
      } else {
        $composer_4.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
      // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_6 = $composer_5;
      var tmp0_modifier = heightIn(width(Companion_getInstance(), AppFab$lambda_10(animatedWidth$delegate)), AppFab$lambda_9(animatedHeight$delegate), AppFab$lambda_9(animatedHeight$delegate));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$44 = _Dp___init__impl__ms3zkb(0);
      var tmp1_contentPadding = PaddingValues(tmp$ret$44);
      var tmp2_enabled = AppFab$lambda_1(mEnabled$delegate);
      $composer_6.startReplaceGroup_5hh8aj_k$(-1041904836);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_6.rememberedValue_4dg93v_k$();
      var tmp_35;
      if (invalid_3 || it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>' call
        var value_7 = AppFab$lambda_12(onClick);
        $composer_6.updateRememberedValue_l1wh71_k$(value_7);
        tmp_35 = value_7;
      } else {
        tmp_35 = it_7;
      }
      var tmp_36 = tmp_35;
      var tmp0_group_0 = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
      $composer_6.endReplaceGroup_ek144q_k$();
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
      var invalid_4 = $composer_7.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_7.rememberedValue_4dg93v_k$();
      var tmp_41;
      if (invalid_4 || it_8 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>' call
        var value_8 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_7.updateRememberedValue_l1wh71_k$(value_8);
        tmp_41 = value_8;
      } else {
        tmp_41 = it_8;
      }
      var tmp_42 = tmp_41;
      var tmp0_0 = (tmp_42 == null ? true : !(tmp_42 == null)) ? tmp_42 : THROW_CCE();
      sourceInformationMarkerEnd($composer_7);
      Button(tmp0_group_0, tmp0_modifier, tmp2_enabled, tmp_37, tmp_38, tmp_39, tmp_40, tmp1_contentPadding, null, tmp0_0, $composer_6, 817889280 | 7168 & $dirty >> 15 | 57344 & $dirty >> 15 | 458752 & $dirty1 << 12 | 3670016 & $dirty1 << 6, 256);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp8_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp8_safe_receiver == null)
      null;
    else {
      tmp8_safe_receiver.updateScope_t8jcf_k$(AppFab$lambda_14(expand_0, modifier_0, expandStrategy_0, iconGravity_0, text_0, icon, enabled_0, hide_0, shape_0, colors_0, onClick, elevation_0, expandDuration_0, shrinkDuration_0, border_0, $changed, $changed1, $default));
    }
  }
  function AppFab$lambda($mExpand$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mExpand', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mExpand$delegate.get_value_j01efc_k$();
  }
  function AppFab$lambda_0($mExpand$delegate, _set____db54di) {
    getLocalDelegateReference('mExpand', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mExpand$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppFab$lambda_1($mEnabled$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mEnabled', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mEnabled$delegate.get_value_j01efc_k$();
  }
  function AppFab$lambda_2($mEnabled$delegate, _set____db54di) {
    getLocalDelegateReference('mEnabled', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mEnabled$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppFab$lambda_3($mHide$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mHide', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mHide$delegate.get_value_j01efc_k$();
  }
  function AppFab$lambda_4($mHide$delegate, _set____db54di) {
    getLocalDelegateReference('mHide', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mHide$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppFab$lambda_5($maxWidth$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('maxWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $maxWidth$delegate.get_value_j01efc_k$();
  }
  function AppFab$lambda_6($maxWidth$delegate, _set____db54di) {
    getLocalDelegateReference('maxWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $maxWidth$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppFab$lambda_7($width$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('width', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $width$delegate.get_value_j01efc_k$().value_1;
  }
  function AppFab$lambda_8($alpha$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('alpha', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $alpha$delegate.get_value_j01efc_k$();
  }
  function AppFab$lambda_9($animatedHeight$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedHeight', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animatedHeight$delegate.get_value_j01efc_k$().value_1;
  }
  function AppFab$lambda_10($animatedWidth$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedWidth', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animatedWidth$delegate.get_value_j01efc_k$().value_1;
  }
  function AppFab$slambda($expand, $mExpand$delegate, resultContinuation) {
    this.$expand_1 = $expand;
    this.$mExpand$delegate_1 = $mExpand$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppFab$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppFab$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppFab$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          AppFab$lambda_0(this.$mExpand$delegate_1, this.$expand_1._v);
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
  protoOf(AppFab$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppFab$slambda(this.$expand_1, this.$mExpand$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppFab$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppFab$slambda_0($expand, $mExpand$delegate, resultContinuation) {
    var i = new AppFab$slambda($expand, $mExpand$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppFab$slambda_1($enabled, $mEnabled$delegate, resultContinuation) {
    this.$enabled_1 = $enabled;
    this.$mEnabled$delegate_1 = $mEnabled$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppFab$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppFab$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppFab$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          AppFab$lambda_2(this.$mEnabled$delegate_1, this.$enabled_1._v);
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
  protoOf(AppFab$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppFab$slambda_1(this.$enabled_1, this.$mEnabled$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppFab$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppFab$slambda_2($enabled, $mEnabled$delegate, resultContinuation) {
    var i = new AppFab$slambda_1($enabled, $mEnabled$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppFab$slambda_3($hide, $mHide$delegate, resultContinuation) {
    this.$hide_1 = $hide;
    this.$mHide$delegate_1 = $mHide$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppFab$slambda_3).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppFab$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppFab$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          AppFab$lambda_4(this.$mHide$delegate_1, this.$hide_1._v);
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
  protoOf(AppFab$slambda_3).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppFab$slambda_3(this.$hide_1, this.$mHide$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppFab$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppFab$slambda_4($hide, $mHide$delegate, resultContinuation) {
    var i = new AppFab$slambda_3($hide, $mHide$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppFab$lambda_11($text, $maxWidth$delegate) {
    return function (coordinates) {
      var tmp;
      if (!($text._v == null)) {
        AppFab$lambda_6($maxWidth$delegate, _IntSize___get_width__impl__d9yl4o(coordinates.get_size_kd98kr_k$()));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppFab$lambda_12($onClick) {
    return function () {
      $onClick();
      return Unit_getInstance();
    };
  }
  function AppFab$lambda$lambda($expandStrategy, $maxWidth$delegate) {
    return function (layoutCoordinates) {
      var tmp;
      if ($expandStrategy._v.equals(ExpandStrategy_WrapContent_getInstance())) {
        var tmp_0 = _IntSize___get_width__impl__d9yl4o(layoutCoordinates.get_size_kd98kr_k$());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
        AppFab$lambda_6($maxWidth$delegate, tmp_0 + correction(tmp$ret$0));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppFab$lambda_13($iconGravity, $text, $expandStrategy, $icon, $maxWidth$delegate, $alpha$delegate) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1378727271, $changed, -1, 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous> (AppFab.kt:148)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = Companion_getInstance();
        var tmp_0;
        switch ($iconGravity._v.get_ordinal_ip24qg_k$()) {
          case 1:
            tmp_0 = Companion_getInstance_1().get_CenterEnd_uti4xp_k$();
            break;
          case 0:
            tmp_0 = Companion_getInstance_1().get_CenterStart_2305fg_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var modifier_0 = modifier;
        var contentAlignment = tmp_0;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_0 = Companion_getInstance();
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_getInstance();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized = materialize($composer_2, modifier_1);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_2 = fillMaxWidth(Companion_getInstance());
        var verticalArrangement = null;
        var horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier_2 = Companion_getInstance();
        if (!((2 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((2 & 4) === 0))
          horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 390 >> 3 | 112 & 390 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_3 = modifier_2;
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_3 = Companion_getInstance();
        var compositeKeyHash_0 = get_currentCompositeKeyHash($composer_7, 0);
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_0 = materialize($composer_7, modifier_3);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_2 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        if ($this$with_0.get_inserting_25mlsw_k$() || !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
          $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        ColumnScopeInstance_getInstance();
        var $composer_10 = $composer_9;
        $composer_10.startReplaceGroup_5hh8aj_k$(-670020038);
        if (!($text._v == null)) {
          // Inline function 'androidx.compose.foundation.layout.Box' call
          var tmp_3 = Companion_getInstance();
          $composer_10.startReplaceGroup_5hh8aj_k$(-670015843);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_10.changed_ga7h3f_k$($expandStrategy._v);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_10.rememberedValue_4dg93v_k$();
          var tmp_4;
          if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = AppFab$lambda$lambda($expandStrategy, $maxWidth$delegate);
            $composer_10.updateRememberedValue_l1wh71_k$(value);
            tmp_4 = value;
          } else {
            tmp_4 = it;
          }
          var tmp_5 = tmp_4;
          var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_10.endReplaceGroup_ek144q_k$();
          var tmp_6 = alpha(onGloballyPositioned(tmp_3, tmp0_group), AppFab$lambda_8($alpha$delegate));
          var tmp_7;
          switch ($expandStrategy._v.get_ordinal_ip24qg_k$()) {
            case 1:
              var tmp_8;
              switch ($iconGravity._v.get_ordinal_ip24qg_k$()) {
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
          switch ($expandStrategy._v.get_ordinal_ip24qg_k$()) {
            case 1:
              var tmp_11;
              switch ($iconGravity._v.get_ordinal_ip24qg_k$()) {
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
          var modifier_4 = padding(tmp_6, tmp_9, VOID, tmp_10);
          var contentAlignment_0 = null;
          var propagateMinConstraints_0 = false;
          var $composer_11 = $composer_10;
          sourceInformationMarkerStart($composer_11, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
          if (!((6 & 1) === 0))
            modifier_4 = Companion_getInstance();
          if (!((6 & 2) === 0))
            contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
          if (!((6 & 4) === 0))
            propagateMinConstraints_0 = false;
          var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_5 = modifier_4;
          var $composer_12 = $composer_11;
          sourceInformationMarkerStart($composer_12, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_5 = Companion_getInstance();
          var compositeKeyHash_1 = get_currentCompositeKeyHash($composer_12, 0);
          var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_1 = materialize($composer_12, modifier_5);
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var factory_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          var $composer_13 = $composer_12;
          sourceInformationMarkerStart($composer_13, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
          var tmp_12 = $composer_13.get_applier_bupu8u_k$();
          if (!isInterface(tmp_12, Applier)) {
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
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block_1 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
          if ($this$with_1.get_inserting_25mlsw_k$() || !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
            $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
          var $composer_14 = $composer_13;
          sourceInformationMarkerStart($composer_14, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
          // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          BoxScopeInstance_getInstance();
          var $composer_15 = $composer_14;
          $text._v($composer_15, 0);
          sourceInformationMarkerEnd($composer_14);
          $composer_13.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_13);
          sourceInformationMarkerEnd($composer_12);
          sourceInformationMarkerEnd($composer_11);
        }
        $composer_10.endReplaceGroup_ek144q_k$();
        sourceInformationMarkerEnd($composer_9);
        $composer_8.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var tmp_13;
        switch ($iconGravity._v.get_ordinal_ip24qg_k$()) {
          case 1:
            var tmp_14 = Companion_getInstance();
            // Inline function 'androidx.compose.ui.unit.dp' call

            var tmp$ret$16 = _Dp___init__impl__ms3zkb(48);
            var tmp_15 = size(tmp_14, tmp$ret$16);
            // Inline function 'androidx.compose.ui.unit.dp' call

            var tmp$ret$17 = _Dp___init__impl__ms3zkb(8);
            tmp_13 = padding(tmp_15, VOID, VOID, tmp$ret$17);
            break;
          case 0:
            var tmp_16 = Companion_getInstance();
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
        var modifier_6 = tmp_13;
        var contentAlignment_1 = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints_1 = false;
        var $composer_16 = $composer_5;
        sourceInformationMarkerStart($composer_16, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_6 = Companion_getInstance();
        if (!((4 & 2) === 0))
          contentAlignment_1 = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_7 = modifier_6;
        var $composer_17 = $composer_16;
        sourceInformationMarkerStart($composer_17, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_7 = Companion_getInstance();
        var compositeKeyHash_2 = get_currentCompositeKeyHash($composer_17, 0);
        var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_2 = materialize($composer_17, modifier_7);
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        var $composer_18 = $composer_17;
        sourceInformationMarkerStart($composer_18, -692256719, 'CC(ReusableComposeNode)P(1,2)355@14017L9:Composables.kt#9igjgp');
        var tmp_18 = $composer_18.get_applier_bupu8u_k$();
        if (!isInterface(tmp_18, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_2 = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
        if ($this$with_2.get_inserting_25mlsw_k$() || !equals($this$with_2.rememberedValue_4dg93v_k$(), compositeKeyHash_2)) {
          $this$with_2.updateRememberedValue_l1wh71_k$(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).apply_pk82p8_k$(compositeKeyHash_2, block_2);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_19 = $composer_18;
        sourceInformationMarkerStart($composer_19, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'team.platforma.multiplatform_material_extension.fab.AppFab.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_20 = $composer_19;
        $icon($composer_20, 0);
        sourceInformationMarkerEnd($composer_19);
        $composer_18.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_18);
        sourceInformationMarkerEnd($composer_17);
        sourceInformationMarkerEnd($composer_16);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_19;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_19 = Unit_getInstance();
        }
        tmp = tmp_19;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppFab$lambda_14($expand, $modifier, $expandStrategy, $iconGravity, $text, $icon, $enabled, $hide, $shape, $colors, $onClick, $elevation, $expandDuration, $shrinkDuration, $border, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AppFab($expand._v, $modifier._v, $expandStrategy._v, $iconGravity._v, $text._v, $icon, $enabled._v, $hide._v, $shape._v, $colors._v, $onClick, $elevation._v, $expandDuration._v, $shrinkDuration._v, $border._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  var team_platforma_multiplatform_material_extension_fab_style_AppFabStyle$stable;
  function _set_mButton__xfcgpm_0($this, _set____db54di) {
    $this.mButton_1 = _set____db54di;
  }
  function _get_mButton__bzjawi_0($this) {
    return $this.mButton_1;
  }
  function AppFabStyle$define$lambda($tmp0_rcvr, $button, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.define_qa3lk0_k$($button._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AppFabStyle() {
    AppFabStyle_instance = this;
    this.mButton_1 = new Button_0();
  }
  protoOf(AppFabStyle).define_qa3lk0_k$ = function (button, $composer, $changed, $default) {
    var button_0 = {_v: button};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1078320440);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.changed_ga7h3f_k$(button_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          var tmp = ButtonDefaults_getInstance();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_0 = _Dp___init__impl__ms3zkb(2);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_1 = _Dp___init__impl__ms3zkb(0);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_2 = _Dp___init__impl__ms3zkb(2);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_3 = _Dp___init__impl__ms3zkb(2);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$4 = _Dp___init__impl__ms3zkb(0);
          button_0._v = new Button_0(VOID, VOID, tmp.buttonElevation_slxcmt_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$4, $composer_0, 28086, 0));
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1078320440, $dirty, -1, 'team.platforma.multiplatform_material_extension.fab.style.AppFabStyle.define (AppFabStyle.kt:21)');
      }
      this.mButton_1 = button_0._v;
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(AppFabStyle$define$lambda(this, button_0, $changed, $default));
    }
  };
  protoOf(AppFabStyle).fabButton_iuwips_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1306234444);
    if (isTraceInProgress()) {
      traceEventStart(1306234444, $changed, -1, 'team.platforma.multiplatform_material_extension.fab.style.AppFabStyle.fabButton (AppFabStyle.kt:26)');
    }
    var tmp0_elvis_lhs = this.mButton_1.get_shape_iyi9a0_k$();
    $composer_0.startReplaceGroup_5hh8aj_k$(1855731651);
    var tmp1_group = tmp0_elvis_lhs == null ? AppButtonStyle_getInstance().filledButton_9v6ubf_k$($composer_0, 0).get_shape_iyi9a0_k$() : tmp0_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp1_elvis_lhs = this.mButton_1.get_colors_c05661_k$();
    $composer_0.startReplaceGroup_5hh8aj_k$(1855734053);
    var tmp2_group = tmp1_elvis_lhs == null ? AppButtonStyle_getInstance().filledButton_9v6ubf_k$($composer_0, 0).get_colors_c05661_k$() : tmp1_elvis_lhs;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp2_elvis_lhs = this.mButton_1.get_elevation_8fwyb8_k$();
    $composer_0.startReplaceGroup_5hh8aj_k$(1855736830);
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
      tmp = tmp_0.buttonElevation_slxcmt_k$(tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$4, $composer_0, 28086, 0);
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var tmp3_group = tmp;
    $composer_0.endReplaceGroup_ek144q_k$();
    var tmp3_elvis_lhs = this.mButton_1.get_border_bj7585_k$();
    var tmp4_group = tmp3_elvis_lhs == null ? AppButtonStyle_getInstance().filledButton_9v6ubf_k$($composer_0, 0).get_border_bj7585_k$() : tmp3_elvis_lhs;
    var tmp0 = new FilledButton(tmp1_group, tmp2_group, tmp3_group, tmp4_group);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
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
  var team_platforma_multiplatform_material_extension_tooltips_TooltipStyle$stable;
  var ExpandStrategy_MaxWidth_instance;
  var ExpandStrategy_WrapContent_instance;
  function values() {
    return [ExpandStrategy_MaxWidth_getInstance(), ExpandStrategy_WrapContent_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MaxWidth':
        return ExpandStrategy_MaxWidth_getInstance();
      case 'WrapContent':
        return ExpandStrategy_WrapContent_getInstance();
      default:
        ExpandStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ExpandStrategy_entriesInitialized;
  function ExpandStrategy_initEntries() {
    if (ExpandStrategy_entriesInitialized)
      return Unit_getInstance();
    ExpandStrategy_entriesInitialized = true;
    ExpandStrategy_MaxWidth_instance = new ExpandStrategy('MaxWidth', 0);
    ExpandStrategy_WrapContent_instance = new ExpandStrategy('WrapContent', 1);
  }
  var $ENTRIES;
  function ExpandStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var IconGravity_Start_instance;
  var IconGravity_End_instance;
  function values_0() {
    return [IconGravity_Start_getInstance(), IconGravity_End_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Start':
        return IconGravity_Start_getInstance();
      case 'End':
        return IconGravity_End_getInstance();
      default:
        IconGravity_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var IconGravity_entriesInitialized;
  function IconGravity_initEntries() {
    if (IconGravity_entriesInitialized)
      return Unit_getInstance();
    IconGravity_entriesInitialized = true;
    IconGravity_Start_instance = new IconGravity('Start', 0);
    IconGravity_End_instance = new IconGravity('End', 1);
  }
  var $ENTRIES_0;
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
  function IconGravity_Start_getInstance() {
    IconGravity_initEntries();
    return IconGravity_Start_instance;
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
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
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
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
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
    $composer_0.startReplaceGroup_5hh8aj_k$(375608828);
    if (isTraceInProgress()) {
      traceEventStart(375608828, $changed, -1, 'team.platforma.multiplatform_material_extension.isDarkTheme (Platform.js.kt:61)');
    }
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var tmp0 = mediaQuery.matches;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
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
