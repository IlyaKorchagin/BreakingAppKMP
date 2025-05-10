(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './projects-core-koin-core.js', './kotlin-kotlin-stdlib.js', './BreakingKMPApp-module_main-domain_main.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./projects-core-koin-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./BreakingKMPApp-module_main-domain_main.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'));
  else {
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-presentation_main'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp-module_main-presentation_main'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-presentation_main'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_main-presentation_main'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-domain_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-presentation_main'. Its dependency 'BreakingKMPApp-module_main-domain_main' was not found. Please, check whether 'BreakingKMPApp-module_main-domain_main' is loaded prior to 'BreakingKMPApp-module_main-presentation_main'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-presentation_main'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'BreakingKMPApp-module_main-presentation_main'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-presentation_main'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'BreakingKMPApp-module_main-presentation_main'.");
    }
    globalThis['BreakingKMPApp-module_main-presentation_main'] = factory(typeof globalThis['BreakingKMPApp-module_main-presentation_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_main-presentation_main'], globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['BreakingKMPApp-module_main-domain_main'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel']);
  }
}(function (_, kotlin_io_insert_koin_koin_core, kotlin_kotlin, kotlin_BreakingKMPApp_module_main_domain_main, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var emptyList = kotlin_kotlin.$_$.z9;
  var getKClass = kotlin_kotlin.$_$.f;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var onOptions = kotlin_io_insert_koin_koin_core.$_$.h;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var MainUseCase = kotlin_BreakingKMPApp_module_main_domain_main.$_$.c;
  var VOID = kotlin_kotlin.$_$.i;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.k;
  var protoOf = kotlin_kotlin.$_$.yh;
  var getStringHashCode = kotlin_kotlin.$_$.og;
  var getNumberHashCode = kotlin_kotlin.$_$.mg;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var equals = kotlin_kotlin.$_$.gg;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var compareValues = kotlin_kotlin.$_$.ne;
  var CoroutineImpl = kotlin_kotlin.$_$.if;
  var KtList = kotlin_kotlin.$_$.j7;
  var isInterface = kotlin_kotlin.$_$.gh;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var sortedWith = kotlin_kotlin.$_$.dd;
  var initMetadataForLambda = kotlin_kotlin.$_$.vg;
  var PupilDomainModel = kotlin_BreakingKMPApp_module_main_domain_main.$_$.b;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.re;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g3;
  var FunctionAdapter = kotlin_kotlin.$_$.sf;
  var Comparator = kotlin_kotlin.$_$.in;
  var hashCode = kotlin_kotlin.$_$.pg;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var listOf = kotlin_kotlin.$_$.rb;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var SuspendFunction1 = kotlin_kotlin.$_$.kf;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(PupilModel, 'PupilModel');
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(MainViewModel, 'MainViewModel', VOID, ViewModel);
  //endregion
  function get_mainPresentationModule() {
    _init_properties_mainPresentationDi_kt__hu50x4();
    return mainPresentationModule;
  }
  var mainPresentationModule;
  function mainPresentationModule$lambda($this$module) {
    _init_properties_mainPresentationDi_kt__hu50x4();
    // Inline function 'org.koin.core.module.dsl.singleOf' call
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = mainPresentationModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(MainViewModel), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.indexPrimaryType_bfm8x4_k$(factory);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory);
    }
    var tmp$ret$2 = new KoinDefinition($this$module, factory);
    onOptions(tmp$ret$2, null);
    return Unit_getInstance();
  }
  function mainPresentationModule$lambda$lambda($this$single, it) {
    _init_properties_mainPresentationDi_kt__hu50x4();
    // Inline function 'org.koin.core.module.dsl.new' call
    // Inline function 'org.koin.core.scope.Scope.get' call
    var p0 = $this$single.get_80ko8d_k$(getKClass(MainUseCase), null, null);
    return new MainViewModel(p0);
  }
  var properties_initialized_mainPresentationDi_kt_pkgdh6;
  function _init_properties_mainPresentationDi_kt__hu50x4() {
    if (!properties_initialized_mainPresentationDi_kt_pkgdh6) {
      properties_initialized_mainPresentationDi_kt_pkgdh6 = true;
      mainPresentationModule = module_0(VOID, mainPresentationModule$lambda);
    }
  }
  function toPupilModel(_this__u8e3s4) {
    return new PupilModel(_this__u8e3s4.get_id_kntnx8_k$(), _this__u8e3s4.get_name_woqyms_k$(), _this__u8e3s4.get_email_iqwbqr_k$(), _this__u8e3s4.get_avatar_b5pjz6_k$(), _this__u8e3s4.get_born_wojlaq_k$(), _this__u8e3s4.get_country_h3tl7x_k$(), _this__u8e3s4.get_city_wok3w4_k$(), _this__u8e3s4.get_video_j06c0i_k$(), _this__u8e3s4.get_status_jnf6d7_k$(), _this__u8e3s4.get_subscription_a6pgti_k$(), _this__u8e3s4.get_subscriptionDay_gjomdy_k$(), _this__u8e3s4.get_subscriptionMonth_9brqdi_k$(), _this__u8e3s4.get_subscriptionYear_fqsddv_k$(), _this__u8e3s4.get_currentTask_nu5nat_k$(), _this__u8e3s4.get_currentTaskProgress_oh2d8i_k$(), _this__u8e3s4.get_roundsList_maupw4_k$(), _this__u8e3s4.get_rating_iw9d46_k$(), _this__u8e3s4.get_freezeRating_hx7vq5_k$(), _this__u8e3s4.get_powermoveRating_pqg11y_k$(), _this__u8e3s4.get_ofpRating_yvr5tf_k$(), _this__u8e3s4.get_strechingRating_pjs2g3_k$(), _this__u8e3s4.get_battleRating_uwfp6q_k$(), _this__u8e3s4.get_battleCurPosition_yuwtfs_k$(), _this__u8e3s4.get_battleNewPosition_ycjhy0_k$(), _this__u8e3s4.get_newPosition_nzgbcw_k$(), _this__u8e3s4.get_currentPosition_ic997d_k$(), _this__u8e3s4.get_babyfrezze_82x48l_k$(), _this__u8e3s4.get_chairfrezze_4mnfns_k$(), _this__u8e3s4.get_elbowfrezze_6kbw5i_k$(), _this__u8e3s4.get_headfrezze_d0gxxx_k$(), _this__u8e3s4.get_headhollowbackfrezze_j16lbf_k$(), _this__u8e3s4.get_hollowbackfrezze_5synt7_k$(), _this__u8e3s4.get_invertfrezze_g829zf_k$(), _this__u8e3s4.get_onehandfrezze_8vzd0o_k$(), _this__u8e3s4.get_shoulderfrezze_uv4etx_k$(), _this__u8e3s4.get_turtlefrezze_2dd91r_k$(), _this__u8e3s4.get_airflare_rvlnyl_k$(), _this__u8e3s4.get_backspin_3adc36_k$(), _this__u8e3s4.get_cricket_ic5pfs_k$(), _this__u8e3s4.get_elbowairflare_pjyvy_k$(), _this__u8e3s4.get_flare_irfhk5_k$(), _this__u8e3s4.get_jackhammer_31ddri_k$(), _this__u8e3s4.get_halo_won4p1_k$(), _this__u8e3s4.get_headspin_ksfch7_k$(), _this__u8e3s4.get_munchmill_9uura6_k$(), _this__u8e3s4.get_ninetyNine_e2uhri_k$(), _this__u8e3s4.get_swipes_jp7koy_k$(), _this__u8e3s4.get_turtle_k5bfwl_k$(), _this__u8e3s4.get_ufo_18iusr_k$(), _this__u8e3s4.get_web_18itcl_k$(), _this__u8e3s4.get_windmill_ks2bjh_k$(), _this__u8e3s4.get_wolf_wowzvf_k$(), _this__u8e3s4.get_angle_iopwve_k$(), _this__u8e3s4.get_bridge_bkos5u_k$(), _this__u8e3s4.get_finger_dc0diq_k$(), _this__u8e3s4.get_handstand_9otdsu_k$(), _this__u8e3s4.get_horizont_xmt2pu_k$(), _this__u8e3s4.get_pushups_2dajuz_k$(), _this__u8e3s4.get_sit_ups_z1d66q_k$(), _this__u8e3s4.get_pressUpHandstand_vxm0pa_k$(), _this__u8e3s4.get_butterfly_8jzp3e_k$(), _this__u8e3s4.get_fold_wom53e_k$(), _this__u8e3s4.get_shoulders_npwbfa_k$(), _this__u8e3s4.get_twine_izbsk4_k$());
  }
  function PupilModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine) {
    this.id_1 = id;
    this.name_1 = name;
    this.email_1 = email;
    this.avatar_1 = avatar;
    this.born_1 = born;
    this.country_1 = country;
    this.city_1 = city;
    this.video_1 = video;
    this.status_1 = status;
    this.subscription_1 = subscription;
    this.subscriptionDay_1 = subscriptionDay;
    this.subscriptionMonth_1 = subscriptionMonth;
    this.subscriptionYear_1 = subscriptionYear;
    this.currentTask_1 = currentTask;
    this.currentTaskProgress_1 = currentTaskProgress;
    this.roundsList_1 = roundsList;
    this.rating_1 = rating;
    this.freezeRating_1 = freezeRating;
    this.powermoveRating_1 = powermoveRating;
    this.ofpRating_1 = ofpRating;
    this.strechingRating_1 = strechingRating;
    this.battleRating_1 = battleRating;
    this.battleCurPosition_1 = battleCurPosition;
    this.battleNewPosition_1 = battleNewPosition;
    this.newPosition_1 = newPosition;
    this.currentPosition_1 = currentPosition;
    this.babyfrezze_1 = babyfrezze;
    this.chairfrezze_1 = chairfrezze;
    this.elbowfrezze_1 = elbowfrezze;
    this.headfrezze_1 = headfrezze;
    this.headhollowbackfrezze_1 = headhollowbackfrezze;
    this.hollowbackfrezze_1 = hollowbackfrezze;
    this.invertfrezze_1 = invertfrezze;
    this.onehandfrezze_1 = onehandfrezze;
    this.shoulderfrezze_1 = shoulderfrezze;
    this.turtlefrezze_1 = turtlefrezze;
    this.airflare_1 = airflare;
    this.backspin_1 = backspin;
    this.cricket_1 = cricket;
    this.elbowairflare_1 = elbowairflare;
    this.flare_1 = flare;
    this.jackhammer_1 = jackhammer;
    this.halo_1 = halo;
    this.headspin_1 = headspin;
    this.munchmill_1 = munchmill;
    this.ninetyNine_1 = ninetyNine;
    this.swipes_1 = swipes;
    this.turtle_1 = turtle;
    this.ufo_1 = ufo;
    this.web_1 = web;
    this.windmill_1 = windmill;
    this.wolf_1 = wolf;
    this.angle_1 = angle;
    this.bridge_1 = bridge;
    this.finger_1 = finger;
    this.handstand_1 = handstand;
    this.horizont_1 = horizont;
    this.pushups_1 = pushups;
    this.sit_ups_1 = sit_ups;
    this.pressUpHandstand_1 = pressUpHandstand;
    this.butterfly_1 = butterfly;
    this.fold_1 = fold;
    this.shoulders_1 = shoulders;
    this.twine_1 = twine;
  }
  protoOf(PupilModel).set_id_36n2qa_k$ = function (_set____db54di) {
    this.id_1 = _set____db54di;
  };
  protoOf(PupilModel).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(PupilModel).set_name_aqnlwe_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(PupilModel).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PupilModel).set_email_h0qb79_k$ = function (_set____db54di) {
    this.email_1 = _set____db54di;
  };
  protoOf(PupilModel).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(PupilModel).set_avatar_jv91xw_k$ = function (_set____db54di) {
    this.avatar_1 = _set____db54di;
  };
  protoOf(PupilModel).get_avatar_b5pjz6_k$ = function () {
    return this.avatar_1;
  };
  protoOf(PupilModel).set_born_sh3pr0_k$ = function (_set____db54di) {
    this.born_1 = _set____db54di;
  };
  protoOf(PupilModel).get_born_wojlaq_k$ = function () {
    return this.born_1;
  };
  protoOf(PupilModel).set_country_gg4t67_k$ = function (_set____db54di) {
    this.country_1 = _set____db54di;
  };
  protoOf(PupilModel).get_country_h3tl7x_k$ = function () {
    return this.country_1;
  };
  protoOf(PupilModel).set_city_50dk72_k$ = function (_set____db54di) {
    this.city_1 = _set____db54di;
  };
  protoOf(PupilModel).get_city_wok3w4_k$ = function () {
    return this.city_1;
  };
  protoOf(PupilModel).set_video_owtx8s_k$ = function (_set____db54di) {
    this.video_1 = _set____db54di;
  };
  protoOf(PupilModel).get_video_j06c0i_k$ = function () {
    return this.video_1;
  };
  protoOf(PupilModel).set_status_dpzsuf_k$ = function (_set____db54di) {
    this.status_1 = _set____db54di;
  };
  protoOf(PupilModel).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(PupilModel).set_subscription_e833b8_k$ = function (_set____db54di) {
    this.subscription_1 = _set____db54di;
  };
  protoOf(PupilModel).get_subscription_a6pgti_k$ = function () {
    return this.subscription_1;
  };
  protoOf(PupilModel).set_subscriptionDay_22l4va_k$ = function (_set____db54di) {
    this.subscriptionDay_1 = _set____db54di;
  };
  protoOf(PupilModel).get_subscriptionDay_gjomdy_k$ = function () {
    return this.subscriptionDay_1;
  };
  protoOf(PupilModel).set_subscriptionMonth_pkim0y_k$ = function (_set____db54di) {
    this.subscriptionMonth_1 = _set____db54di;
  };
  protoOf(PupilModel).get_subscriptionMonth_9brqdi_k$ = function () {
    return this.subscriptionMonth_1;
  };
  protoOf(PupilModel).set_subscriptionYear_it2cnj_k$ = function (_set____db54di) {
    this.subscriptionYear_1 = _set____db54di;
  };
  protoOf(PupilModel).get_subscriptionYear_fqsddv_k$ = function () {
    return this.subscriptionYear_1;
  };
  protoOf(PupilModel).get_currentTask_nu5nat_k$ = function () {
    return this.currentTask_1;
  };
  protoOf(PupilModel).get_currentTaskProgress_oh2d8i_k$ = function () {
    return this.currentTaskProgress_1;
  };
  protoOf(PupilModel).get_roundsList_maupw4_k$ = function () {
    return this.roundsList_1;
  };
  protoOf(PupilModel).set_rating_wdgycc_k$ = function (_set____db54di) {
    this.rating_1 = _set____db54di;
  };
  protoOf(PupilModel).get_rating_iw9d46_k$ = function () {
    return this.rating_1;
  };
  protoOf(PupilModel).set_freezeRating_yq67wb_k$ = function (_set____db54di) {
    this.freezeRating_1 = _set____db54di;
  };
  protoOf(PupilModel).get_freezeRating_hx7vq5_k$ = function () {
    return this.freezeRating_1;
  };
  protoOf(PupilModel).set_powermoveRating_cf4ngg_k$ = function (_set____db54di) {
    this.powermoveRating_1 = _set____db54di;
  };
  protoOf(PupilModel).get_powermoveRating_pqg11y_k$ = function () {
    return this.powermoveRating_1;
  };
  protoOf(PupilModel).set_ofpRating_2msio3_k$ = function (_set____db54di) {
    this.ofpRating_1 = _set____db54di;
  };
  protoOf(PupilModel).get_ofpRating_yvr5tf_k$ = function () {
    return this.ofpRating_1;
  };
  protoOf(PupilModel).set_strechingRating_ehcj3h_k$ = function (_set____db54di) {
    this.strechingRating_1 = _set____db54di;
  };
  protoOf(PupilModel).get_strechingRating_pjs2g3_k$ = function () {
    return this.strechingRating_1;
  };
  protoOf(PupilModel).set_battleRating_bmhcfw_k$ = function (_set____db54di) {
    this.battleRating_1 = _set____db54di;
  };
  protoOf(PupilModel).get_battleRating_uwfp6q_k$ = function () {
    return this.battleRating_1;
  };
  protoOf(PupilModel).set_battleCurPosition_h80sgc_k$ = function (_set____db54di) {
    this.battleCurPosition_1 = _set____db54di;
  };
  protoOf(PupilModel).get_battleCurPosition_yuwtfs_k$ = function () {
    return this.battleCurPosition_1;
  };
  protoOf(PupilModel).set_battleNewPosition_4x0ivo_k$ = function (_set____db54di) {
    this.battleNewPosition_1 = _set____db54di;
  };
  protoOf(PupilModel).get_battleNewPosition_ycjhy0_k$ = function () {
    return this.battleNewPosition_1;
  };
  protoOf(PupilModel).set_newPosition_1r4upo_k$ = function (_set____db54di) {
    this.newPosition_1 = _set____db54di;
  };
  protoOf(PupilModel).get_newPosition_nzgbcw_k$ = function () {
    return this.newPosition_1;
  };
  protoOf(PupilModel).set_currentPosition_nvjmkj_k$ = function (_set____db54di) {
    this.currentPosition_1 = _set____db54di;
  };
  protoOf(PupilModel).get_currentPosition_ic997d_k$ = function () {
    return this.currentPosition_1;
  };
  protoOf(PupilModel).set_babyfrezze_om30tl_k$ = function (_set____db54di) {
    this.babyfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_babyfrezze_82x48l_k$ = function () {
    return this.babyfrezze_1;
  };
  protoOf(PupilModel).set_chairfrezze_vzhlos_k$ = function (_set____db54di) {
    this.chairfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_chairfrezze_4mnfns_k$ = function () {
    return this.chairfrezze_1;
  };
  protoOf(PupilModel).set_elbowfrezze_3wgp56_k$ = function (_set____db54di) {
    this.elbowfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_elbowfrezze_6kbw5i_k$ = function () {
    return this.elbowfrezze_1;
  };
  protoOf(PupilModel).set_headfrezze_94541_k$ = function (_set____db54di) {
    this.headfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_headfrezze_d0gxxx_k$ = function () {
    return this.headfrezze_1;
  };
  protoOf(PupilModel).set_headhollowbackfrezze_hm8o21_k$ = function (_set____db54di) {
    this.headhollowbackfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_headhollowbackfrezze_j16lbf_k$ = function () {
    return this.headhollowbackfrezze_1;
  };
  protoOf(PupilModel).set_hollowbackfrezze_n8t9gp_k$ = function (_set____db54di) {
    this.hollowbackfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_hollowbackfrezze_5synt7_k$ = function () {
    return this.hollowbackfrezze_1;
  };
  protoOf(PupilModel).set_invertfrezze_8a97t_k$ = function (_set____db54di) {
    this.invertfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_invertfrezze_g829zf_k$ = function () {
    return this.invertfrezze_1;
  };
  protoOf(PupilModel).set_onehandfrezze_azkdp8_k$ = function (_set____db54di) {
    this.onehandfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_onehandfrezze_8vzd0o_k$ = function () {
    return this.onehandfrezze_1;
  };
  protoOf(PupilModel).set_shoulderfrezze_7s1skf_k$ = function (_set____db54di) {
    this.shoulderfrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_shoulderfrezze_uv4etx_k$ = function () {
    return this.shoulderfrezze_1;
  };
  protoOf(PupilModel).set_turtlefrezze_o8c96r_k$ = function (_set____db54di) {
    this.turtlefrezze_1 = _set____db54di;
  };
  protoOf(PupilModel).get_turtlefrezze_2dd91r_k$ = function () {
    return this.turtlefrezze_1;
  };
  protoOf(PupilModel).set_airflare_gfpcpl_k$ = function (_set____db54di) {
    this.airflare_1 = _set____db54di;
  };
  protoOf(PupilModel).get_airflare_rvlnyl_k$ = function () {
    return this.airflare_1;
  };
  protoOf(PupilModel).set_backspin_dx6sri_k$ = function (_set____db54di) {
    this.backspin_1 = _set____db54di;
  };
  protoOf(PupilModel).get_backspin_3adc36_k$ = function () {
    return this.backspin_1;
  };
  protoOf(PupilModel).set_cricket_10npbo_k$ = function (_set____db54di) {
    this.cricket_1 = _set____db54di;
  };
  protoOf(PupilModel).get_cricket_ic5pfs_k$ = function () {
    return this.cricket_1;
  };
  protoOf(PupilModel).set_elbowairflare_4kxmfy_k$ = function (_set____db54di) {
    this.elbowairflare_1 = _set____db54di;
  };
  protoOf(PupilModel).get_elbowairflare_pjyvy_k$ = function () {
    return this.elbowairflare_1;
  };
  protoOf(PupilModel).set_flare_9u8mrt_k$ = function (_set____db54di) {
    this.flare_1 = _set____db54di;
  };
  protoOf(PupilModel).get_flare_irfhk5_k$ = function () {
    return this.flare_1;
  };
  protoOf(PupilModel).set_jackhammer_e79tra_k$ = function (_set____db54di) {
    this.jackhammer_1 = _set____db54di;
  };
  protoOf(PupilModel).get_jackhammer_31ddri_k$ = function () {
    return this.jackhammer_1;
  };
  protoOf(PupilModel).set_halo_2w3ekx_k$ = function (_set____db54di) {
    this.halo_1 = _set____db54di;
  };
  protoOf(PupilModel).get_halo_won4p1_k$ = function () {
    return this.halo_1;
  };
  protoOf(PupilModel).set_headspin_w14u5z_k$ = function (_set____db54di) {
    this.headspin_1 = _set____db54di;
  };
  protoOf(PupilModel).get_headspin_ksfch7_k$ = function () {
    return this.headspin_1;
  };
  protoOf(PupilModel).set_munchmill_ac88ki_k$ = function (_set____db54di) {
    this.munchmill_1 = _set____db54di;
  };
  protoOf(PupilModel).get_munchmill_9uura6_k$ = function () {
    return this.munchmill_1;
  };
  protoOf(PupilModel).set_ninetyNine_lxg7uq_k$ = function (_set____db54di) {
    this.ninetyNine_1 = _set____db54di;
  };
  protoOf(PupilModel).get_ninetyNine_e2uhri_k$ = function () {
    return this.ninetyNine_1;
  };
  protoOf(PupilModel).set_swipes_ocidaq_k$ = function (_set____db54di) {
    this.swipes_1 = _set____db54di;
  };
  protoOf(PupilModel).get_swipes_jp7koy_k$ = function () {
    return this.swipes_1;
  };
  protoOf(PupilModel).set_turtle_qry5yn_k$ = function (_set____db54di) {
    this.turtle_1 = _set____db54di;
  };
  protoOf(PupilModel).get_turtle_k5bfwl_k$ = function () {
    return this.turtle_1;
  };
  protoOf(PupilModel).set_ufo_4uwwcn_k$ = function (_set____db54di) {
    this.ufo_1 = _set____db54di;
  };
  protoOf(PupilModel).get_ufo_18iusr_k$ = function () {
    return this.ufo_1;
  };
  protoOf(PupilModel).set_web_8g4cwf_k$ = function (_set____db54di) {
    this.web_1 = _set____db54di;
  };
  protoOf(PupilModel).get_web_18itcl_k$ = function () {
    return this.web_1;
  };
  protoOf(PupilModel).set_windmill_fkxn21_k$ = function (_set____db54di) {
    this.windmill_1 = _set____db54di;
  };
  protoOf(PupilModel).get_windmill_ks2bjh_k$ = function () {
    return this.windmill_1;
  };
  protoOf(PupilModel).set_wolf_ag7uqv_k$ = function (_set____db54di) {
    this.wolf_1 = _set____db54di;
  };
  protoOf(PupilModel).get_wolf_wowzvf_k$ = function () {
    return this.wolf_1;
  };
  protoOf(PupilModel).set_angle_51nze6_k$ = function (_set____db54di) {
    this.angle_1 = _set____db54di;
  };
  protoOf(PupilModel).get_angle_iopwve_k$ = function () {
    return this.angle_1;
  };
  protoOf(PupilModel).set_bridge_def6wy_k$ = function (_set____db54di) {
    this.bridge_1 = _set____db54di;
  };
  protoOf(PupilModel).get_bridge_bkos5u_k$ = function () {
    return this.bridge_1;
  };
  protoOf(PupilModel).set_finger_iclm1u_k$ = function (_set____db54di) {
    this.finger_1 = _set____db54di;
  };
  protoOf(PupilModel).get_finger_dc0diq_k$ = function () {
    return this.finger_1;
  };
  protoOf(PupilModel).set_handstand_8zu0gy_k$ = function (_set____db54di) {
    this.handstand_1 = _set____db54di;
  };
  protoOf(PupilModel).get_handstand_9otdsu_k$ = function () {
    return this.handstand_1;
  };
  protoOf(PupilModel).set_horizont_8mfaky_k$ = function (_set____db54di) {
    this.horizont_1 = _set____db54di;
  };
  protoOf(PupilModel).get_horizont_xmt2pu_k$ = function () {
    return this.horizont_1;
  };
  protoOf(PupilModel).set_pushups_2qx8rd_k$ = function (_set____db54di) {
    this.pushups_1 = _set____db54di;
  };
  protoOf(PupilModel).get_pushups_2dajuz_k$ = function () {
    return this.pushups_1;
  };
  protoOf(PupilModel).set_sit_ups_ob0fg2_k$ = function (_set____db54di) {
    this.sit_ups_1 = _set____db54di;
  };
  protoOf(PupilModel).get_sit_ups_z1d66q_k$ = function () {
    return this.sit_ups_1;
  };
  protoOf(PupilModel).set_pressUpHandstand_oxlgv2_k$ = function (_set____db54di) {
    this.pressUpHandstand_1 = _set____db54di;
  };
  protoOf(PupilModel).get_pressUpHandstand_vxm0pa_k$ = function () {
    return this.pressUpHandstand_1;
  };
  protoOf(PupilModel).set_butterfly_zerc36_k$ = function (_set____db54di) {
    this.butterfly_1 = _set____db54di;
  };
  protoOf(PupilModel).get_butterfly_8jzp3e_k$ = function () {
    return this.butterfly_1;
  };
  protoOf(PupilModel).set_fold_smp5vu_k$ = function (_set____db54di) {
    this.fold_1 = _set____db54di;
  };
  protoOf(PupilModel).get_fold_wom53e_k$ = function () {
    return this.fold_1;
  };
  protoOf(PupilModel).set_shoulders_8ot8j2_k$ = function (_set____db54di) {
    this.shoulders_1 = _set____db54di;
  };
  protoOf(PupilModel).get_shoulders_npwbfa_k$ = function () {
    return this.shoulders_1;
  };
  protoOf(PupilModel).set_twine_tb4iso_k$ = function (_set____db54di) {
    this.twine_1 = _set____db54di;
  };
  protoOf(PupilModel).get_twine_izbsk4_k$ = function () {
    return this.twine_1;
  };
  protoOf(PupilModel).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(PupilModel).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(PupilModel).component3_7eebsa_k$ = function () {
    return this.email_1;
  };
  protoOf(PupilModel).component4_7eebs9_k$ = function () {
    return this.avatar_1;
  };
  protoOf(PupilModel).component5_7eebs8_k$ = function () {
    return this.born_1;
  };
  protoOf(PupilModel).component6_7eebs7_k$ = function () {
    return this.country_1;
  };
  protoOf(PupilModel).component7_7eebs6_k$ = function () {
    return this.city_1;
  };
  protoOf(PupilModel).component8_7eebs5_k$ = function () {
    return this.video_1;
  };
  protoOf(PupilModel).component9_7eebs4_k$ = function () {
    return this.status_1;
  };
  protoOf(PupilModel).component10_gazzfo_k$ = function () {
    return this.subscription_1;
  };
  protoOf(PupilModel).component11_gazzfn_k$ = function () {
    return this.subscriptionDay_1;
  };
  protoOf(PupilModel).component12_gazzfm_k$ = function () {
    return this.subscriptionMonth_1;
  };
  protoOf(PupilModel).component13_gazzfl_k$ = function () {
    return this.subscriptionYear_1;
  };
  protoOf(PupilModel).component14_gazzfk_k$ = function () {
    return this.currentTask_1;
  };
  protoOf(PupilModel).component15_gazzfj_k$ = function () {
    return this.currentTaskProgress_1;
  };
  protoOf(PupilModel).component16_gazzfi_k$ = function () {
    return this.roundsList_1;
  };
  protoOf(PupilModel).component17_gazzfh_k$ = function () {
    return this.rating_1;
  };
  protoOf(PupilModel).component18_gazzfg_k$ = function () {
    return this.freezeRating_1;
  };
  protoOf(PupilModel).component19_gazzff_k$ = function () {
    return this.powermoveRating_1;
  };
  protoOf(PupilModel).component20_gazzet_k$ = function () {
    return this.ofpRating_1;
  };
  protoOf(PupilModel).component21_gazzes_k$ = function () {
    return this.strechingRating_1;
  };
  protoOf(PupilModel).component22_gazzer_k$ = function () {
    return this.battleRating_1;
  };
  protoOf(PupilModel).component23_gazzeq_k$ = function () {
    return this.battleCurPosition_1;
  };
  protoOf(PupilModel).component24_gazzep_k$ = function () {
    return this.battleNewPosition_1;
  };
  protoOf(PupilModel).component25_gazzeo_k$ = function () {
    return this.newPosition_1;
  };
  protoOf(PupilModel).component26_gazzen_k$ = function () {
    return this.currentPosition_1;
  };
  protoOf(PupilModel).component27_gazzem_k$ = function () {
    return this.babyfrezze_1;
  };
  protoOf(PupilModel).component28_gazzel_k$ = function () {
    return this.chairfrezze_1;
  };
  protoOf(PupilModel).component29_gazzek_k$ = function () {
    return this.elbowfrezze_1;
  };
  protoOf(PupilModel).component30_gazzdy_k$ = function () {
    return this.headfrezze_1;
  };
  protoOf(PupilModel).component31_gazzdx_k$ = function () {
    return this.headhollowbackfrezze_1;
  };
  protoOf(PupilModel).component32_gazzdw_k$ = function () {
    return this.hollowbackfrezze_1;
  };
  protoOf(PupilModel).component33_gazzdv_k$ = function () {
    return this.invertfrezze_1;
  };
  protoOf(PupilModel).component34_gazzdu_k$ = function () {
    return this.onehandfrezze_1;
  };
  protoOf(PupilModel).component35_gazzdt_k$ = function () {
    return this.shoulderfrezze_1;
  };
  protoOf(PupilModel).component36_gazzds_k$ = function () {
    return this.turtlefrezze_1;
  };
  protoOf(PupilModel).component37_gazzdr_k$ = function () {
    return this.airflare_1;
  };
  protoOf(PupilModel).component38_gazzdq_k$ = function () {
    return this.backspin_1;
  };
  protoOf(PupilModel).component39_gazzdp_k$ = function () {
    return this.cricket_1;
  };
  protoOf(PupilModel).component40_gazzd3_k$ = function () {
    return this.elbowairflare_1;
  };
  protoOf(PupilModel).component41_gazzd2_k$ = function () {
    return this.flare_1;
  };
  protoOf(PupilModel).component42_gazzd1_k$ = function () {
    return this.jackhammer_1;
  };
  protoOf(PupilModel).component43_gazzd0_k$ = function () {
    return this.halo_1;
  };
  protoOf(PupilModel).component44_gazzcz_k$ = function () {
    return this.headspin_1;
  };
  protoOf(PupilModel).component45_gazzcy_k$ = function () {
    return this.munchmill_1;
  };
  protoOf(PupilModel).component46_gazzcx_k$ = function () {
    return this.ninetyNine_1;
  };
  protoOf(PupilModel).component47_gazzcw_k$ = function () {
    return this.swipes_1;
  };
  protoOf(PupilModel).component48_gazzcv_k$ = function () {
    return this.turtle_1;
  };
  protoOf(PupilModel).component49_gazzcu_k$ = function () {
    return this.ufo_1;
  };
  protoOf(PupilModel).component50_gazzc8_k$ = function () {
    return this.web_1;
  };
  protoOf(PupilModel).component51_gazzc7_k$ = function () {
    return this.windmill_1;
  };
  protoOf(PupilModel).component52_gazzc6_k$ = function () {
    return this.wolf_1;
  };
  protoOf(PupilModel).component53_gazzc5_k$ = function () {
    return this.angle_1;
  };
  protoOf(PupilModel).component54_gazzc4_k$ = function () {
    return this.bridge_1;
  };
  protoOf(PupilModel).component55_gazzc3_k$ = function () {
    return this.finger_1;
  };
  protoOf(PupilModel).component56_gazzc2_k$ = function () {
    return this.handstand_1;
  };
  protoOf(PupilModel).component57_gazzc1_k$ = function () {
    return this.horizont_1;
  };
  protoOf(PupilModel).component58_gazzc0_k$ = function () {
    return this.pushups_1;
  };
  protoOf(PupilModel).component59_gazzbz_k$ = function () {
    return this.sit_ups_1;
  };
  protoOf(PupilModel).component60_gazzbd_k$ = function () {
    return this.pressUpHandstand_1;
  };
  protoOf(PupilModel).component61_gazzbc_k$ = function () {
    return this.butterfly_1;
  };
  protoOf(PupilModel).component62_gazzbb_k$ = function () {
    return this.fold_1;
  };
  protoOf(PupilModel).component63_gazzba_k$ = function () {
    return this.shoulders_1;
  };
  protoOf(PupilModel).component64_gazzb9_k$ = function () {
    return this.twine_1;
  };
  protoOf(PupilModel).copy_psg3in_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine) {
    return new PupilModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine);
  };
  protoOf(PupilModel).copy$default_isy8p3_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    email = email === VOID ? this.email_1 : email;
    avatar = avatar === VOID ? this.avatar_1 : avatar;
    born = born === VOID ? this.born_1 : born;
    country = country === VOID ? this.country_1 : country;
    city = city === VOID ? this.city_1 : city;
    video = video === VOID ? this.video_1 : video;
    status = status === VOID ? this.status_1 : status;
    subscription = subscription === VOID ? this.subscription_1 : subscription;
    subscriptionDay = subscriptionDay === VOID ? this.subscriptionDay_1 : subscriptionDay;
    subscriptionMonth = subscriptionMonth === VOID ? this.subscriptionMonth_1 : subscriptionMonth;
    subscriptionYear = subscriptionYear === VOID ? this.subscriptionYear_1 : subscriptionYear;
    currentTask = currentTask === VOID ? this.currentTask_1 : currentTask;
    currentTaskProgress = currentTaskProgress === VOID ? this.currentTaskProgress_1 : currentTaskProgress;
    roundsList = roundsList === VOID ? this.roundsList_1 : roundsList;
    rating = rating === VOID ? this.rating_1 : rating;
    freezeRating = freezeRating === VOID ? this.freezeRating_1 : freezeRating;
    powermoveRating = powermoveRating === VOID ? this.powermoveRating_1 : powermoveRating;
    ofpRating = ofpRating === VOID ? this.ofpRating_1 : ofpRating;
    strechingRating = strechingRating === VOID ? this.strechingRating_1 : strechingRating;
    battleRating = battleRating === VOID ? this.battleRating_1 : battleRating;
    battleCurPosition = battleCurPosition === VOID ? this.battleCurPosition_1 : battleCurPosition;
    battleNewPosition = battleNewPosition === VOID ? this.battleNewPosition_1 : battleNewPosition;
    newPosition = newPosition === VOID ? this.newPosition_1 : newPosition;
    currentPosition = currentPosition === VOID ? this.currentPosition_1 : currentPosition;
    babyfrezze = babyfrezze === VOID ? this.babyfrezze_1 : babyfrezze;
    chairfrezze = chairfrezze === VOID ? this.chairfrezze_1 : chairfrezze;
    elbowfrezze = elbowfrezze === VOID ? this.elbowfrezze_1 : elbowfrezze;
    headfrezze = headfrezze === VOID ? this.headfrezze_1 : headfrezze;
    headhollowbackfrezze = headhollowbackfrezze === VOID ? this.headhollowbackfrezze_1 : headhollowbackfrezze;
    hollowbackfrezze = hollowbackfrezze === VOID ? this.hollowbackfrezze_1 : hollowbackfrezze;
    invertfrezze = invertfrezze === VOID ? this.invertfrezze_1 : invertfrezze;
    onehandfrezze = onehandfrezze === VOID ? this.onehandfrezze_1 : onehandfrezze;
    shoulderfrezze = shoulderfrezze === VOID ? this.shoulderfrezze_1 : shoulderfrezze;
    turtlefrezze = turtlefrezze === VOID ? this.turtlefrezze_1 : turtlefrezze;
    airflare = airflare === VOID ? this.airflare_1 : airflare;
    backspin = backspin === VOID ? this.backspin_1 : backspin;
    cricket = cricket === VOID ? this.cricket_1 : cricket;
    elbowairflare = elbowairflare === VOID ? this.elbowairflare_1 : elbowairflare;
    flare = flare === VOID ? this.flare_1 : flare;
    jackhammer = jackhammer === VOID ? this.jackhammer_1 : jackhammer;
    halo = halo === VOID ? this.halo_1 : halo;
    headspin = headspin === VOID ? this.headspin_1 : headspin;
    munchmill = munchmill === VOID ? this.munchmill_1 : munchmill;
    ninetyNine = ninetyNine === VOID ? this.ninetyNine_1 : ninetyNine;
    swipes = swipes === VOID ? this.swipes_1 : swipes;
    turtle = turtle === VOID ? this.turtle_1 : turtle;
    ufo = ufo === VOID ? this.ufo_1 : ufo;
    web = web === VOID ? this.web_1 : web;
    windmill = windmill === VOID ? this.windmill_1 : windmill;
    wolf = wolf === VOID ? this.wolf_1 : wolf;
    angle = angle === VOID ? this.angle_1 : angle;
    bridge = bridge === VOID ? this.bridge_1 : bridge;
    finger = finger === VOID ? this.finger_1 : finger;
    handstand = handstand === VOID ? this.handstand_1 : handstand;
    horizont = horizont === VOID ? this.horizont_1 : horizont;
    pushups = pushups === VOID ? this.pushups_1 : pushups;
    sit_ups = sit_ups === VOID ? this.sit_ups_1 : sit_ups;
    pressUpHandstand = pressUpHandstand === VOID ? this.pressUpHandstand_1 : pressUpHandstand;
    butterfly = butterfly === VOID ? this.butterfly_1 : butterfly;
    fold = fold === VOID ? this.fold_1 : fold;
    shoulders = shoulders === VOID ? this.shoulders_1 : shoulders;
    twine = twine === VOID ? this.twine_1 : twine;
    return $super === VOID ? this.copy_psg3in_k$(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine) : $super.copy_psg3in_k$.call(this, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine);
  };
  protoOf(PupilModel).toString = function () {
    return 'PupilModel(id=' + this.id_1 + ', name=' + this.name_1 + ', email=' + this.email_1 + ', avatar=' + this.avatar_1 + ', born=' + this.born_1 + ', country=' + this.country_1 + ', city=' + this.city_1 + ', video=' + this.video_1 + ', status=' + this.status_1 + ', subscription=' + this.subscription_1.toString() + ', subscriptionDay=' + this.subscriptionDay_1 + ', subscriptionMonth=' + this.subscriptionMonth_1 + ', subscriptionYear=' + this.subscriptionYear_1 + ', currentTask=' + this.currentTask_1 + ', currentTaskProgress=' + this.currentTaskProgress_1 + ', roundsList=' + this.roundsList_1 + ', rating=' + this.rating_1 + ', freezeRating=' + this.freezeRating_1 + ', powermoveRating=' + this.powermoveRating_1 + ', ofpRating=' + this.ofpRating_1 + ', strechingRating=' + this.strechingRating_1 + ', battleRating=' + this.battleRating_1 + ', battleCurPosition=' + this.battleCurPosition_1 + ', battleNewPosition=' + this.battleNewPosition_1 + ', newPosition=' + this.newPosition_1 + ', currentPosition=' + this.currentPosition_1 + ', babyfrezze=' + this.babyfrezze_1 + ', chairfrezze=' + this.chairfrezze_1 + ', elbowfrezze=' + this.elbowfrezze_1 + ', headfrezze=' + this.headfrezze_1 + ', headhollowbackfrezze=' + this.headhollowbackfrezze_1 + ', hollowbackfrezze=' + this.hollowbackfrezze_1 + ', invertfrezze=' + this.invertfrezze_1 + ', onehandfrezze=' + this.onehandfrezze_1 + ', shoulderfrezze=' + this.shoulderfrezze_1 + ', turtlefrezze=' + this.turtlefrezze_1 + ', airflare=' + this.airflare_1 + ', backspin=' + this.backspin_1 + ', cricket=' + this.cricket_1 + ', elbowairflare=' + this.elbowairflare_1 + ', flare=' + this.flare_1 + ', jackhammer=' + this.jackhammer_1 + ', halo=' + this.halo_1 + ', headspin=' + this.headspin_1 + ', munchmill=' + this.munchmill_1 + ', ninetyNine=' + this.ninetyNine_1 + ', swipes=' + this.swipes_1 + ', turtle=' + this.turtle_1 + ', ufo=' + this.ufo_1 + ', web=' + this.web_1 + ', windmill=' + this.windmill_1 + ', wolf=' + this.wolf_1 + ', angle=' + this.angle_1 + ', bridge=' + this.bridge_1 + ', finger=' + this.finger_1 + ', handstand=' + this.handstand_1 + ', horizont=' + this.horizont_1 + ', pushups=' + this.pushups_1 + ', sit_ups=' + this.sit_ups_1 + ', pressUpHandstand=' + this.pressUpHandstand_1 + ', butterfly=' + this.butterfly_1 + ', fold=' + this.fold_1 + ', shoulders=' + this.shoulders_1 + ', twine=' + this.twine_1 + ')';
  };
  protoOf(PupilModel).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.email_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.avatar_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.born_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.country_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.city_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.video_1) | 0;
    result = imul(result, 31) + this.status_1 | 0;
    result = imul(result, 31) + this.subscription_1.hashCode() | 0;
    result = imul(result, 31) + this.subscriptionDay_1 | 0;
    result = imul(result, 31) + this.subscriptionMonth_1 | 0;
    result = imul(result, 31) + this.subscriptionYear_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.currentTask_1) | 0;
    result = imul(result, 31) + this.currentTaskProgress_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.roundsList_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.rating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.freezeRating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.powermoveRating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ofpRating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.strechingRating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.battleRating_1) | 0;
    result = imul(result, 31) + this.battleCurPosition_1 | 0;
    result = imul(result, 31) + this.battleNewPosition_1 | 0;
    result = imul(result, 31) + this.newPosition_1 | 0;
    result = imul(result, 31) + this.currentPosition_1 | 0;
    result = imul(result, 31) + this.babyfrezze_1 | 0;
    result = imul(result, 31) + this.chairfrezze_1 | 0;
    result = imul(result, 31) + this.elbowfrezze_1 | 0;
    result = imul(result, 31) + this.headfrezze_1 | 0;
    result = imul(result, 31) + this.headhollowbackfrezze_1 | 0;
    result = imul(result, 31) + this.hollowbackfrezze_1 | 0;
    result = imul(result, 31) + this.invertfrezze_1 | 0;
    result = imul(result, 31) + this.onehandfrezze_1 | 0;
    result = imul(result, 31) + this.shoulderfrezze_1 | 0;
    result = imul(result, 31) + this.turtlefrezze_1 | 0;
    result = imul(result, 31) + this.airflare_1 | 0;
    result = imul(result, 31) + this.backspin_1 | 0;
    result = imul(result, 31) + this.cricket_1 | 0;
    result = imul(result, 31) + this.elbowairflare_1 | 0;
    result = imul(result, 31) + this.flare_1 | 0;
    result = imul(result, 31) + this.jackhammer_1 | 0;
    result = imul(result, 31) + this.halo_1 | 0;
    result = imul(result, 31) + this.headspin_1 | 0;
    result = imul(result, 31) + this.munchmill_1 | 0;
    result = imul(result, 31) + this.ninetyNine_1 | 0;
    result = imul(result, 31) + this.swipes_1 | 0;
    result = imul(result, 31) + this.turtle_1 | 0;
    result = imul(result, 31) + this.ufo_1 | 0;
    result = imul(result, 31) + this.web_1 | 0;
    result = imul(result, 31) + this.windmill_1 | 0;
    result = imul(result, 31) + this.wolf_1 | 0;
    result = imul(result, 31) + this.angle_1 | 0;
    result = imul(result, 31) + this.bridge_1 | 0;
    result = imul(result, 31) + this.finger_1 | 0;
    result = imul(result, 31) + this.handstand_1 | 0;
    result = imul(result, 31) + this.horizont_1 | 0;
    result = imul(result, 31) + this.pushups_1 | 0;
    result = imul(result, 31) + this.sit_ups_1 | 0;
    result = imul(result, 31) + this.pressUpHandstand_1 | 0;
    result = imul(result, 31) + this.butterfly_1 | 0;
    result = imul(result, 31) + this.fold_1 | 0;
    result = imul(result, 31) + this.shoulders_1 | 0;
    result = imul(result, 31) + this.twine_1 | 0;
    return result;
  };
  protoOf(PupilModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilModel))
      return false;
    var tmp0_other_with_cast = other instanceof PupilModel ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.email_1 === tmp0_other_with_cast.email_1))
      return false;
    if (!(this.avatar_1 === tmp0_other_with_cast.avatar_1))
      return false;
    if (!(this.born_1 === tmp0_other_with_cast.born_1))
      return false;
    if (!(this.country_1 === tmp0_other_with_cast.country_1))
      return false;
    if (!(this.city_1 === tmp0_other_with_cast.city_1))
      return false;
    if (!(this.video_1 === tmp0_other_with_cast.video_1))
      return false;
    if (!(this.status_1 === tmp0_other_with_cast.status_1))
      return false;
    if (!this.subscription_1.equals(tmp0_other_with_cast.subscription_1))
      return false;
    if (!(this.subscriptionDay_1 === tmp0_other_with_cast.subscriptionDay_1))
      return false;
    if (!(this.subscriptionMonth_1 === tmp0_other_with_cast.subscriptionMonth_1))
      return false;
    if (!(this.subscriptionYear_1 === tmp0_other_with_cast.subscriptionYear_1))
      return false;
    if (!(this.currentTask_1 === tmp0_other_with_cast.currentTask_1))
      return false;
    if (!(this.currentTaskProgress_1 === tmp0_other_with_cast.currentTaskProgress_1))
      return false;
    if (!(this.roundsList_1 === tmp0_other_with_cast.roundsList_1))
      return false;
    if (!equals(this.rating_1, tmp0_other_with_cast.rating_1))
      return false;
    if (!equals(this.freezeRating_1, tmp0_other_with_cast.freezeRating_1))
      return false;
    if (!equals(this.powermoveRating_1, tmp0_other_with_cast.powermoveRating_1))
      return false;
    if (!equals(this.ofpRating_1, tmp0_other_with_cast.ofpRating_1))
      return false;
    if (!equals(this.strechingRating_1, tmp0_other_with_cast.strechingRating_1))
      return false;
    if (!equals(this.battleRating_1, tmp0_other_with_cast.battleRating_1))
      return false;
    if (!(this.battleCurPosition_1 === tmp0_other_with_cast.battleCurPosition_1))
      return false;
    if (!(this.battleNewPosition_1 === tmp0_other_with_cast.battleNewPosition_1))
      return false;
    if (!(this.newPosition_1 === tmp0_other_with_cast.newPosition_1))
      return false;
    if (!(this.currentPosition_1 === tmp0_other_with_cast.currentPosition_1))
      return false;
    if (!(this.babyfrezze_1 === tmp0_other_with_cast.babyfrezze_1))
      return false;
    if (!(this.chairfrezze_1 === tmp0_other_with_cast.chairfrezze_1))
      return false;
    if (!(this.elbowfrezze_1 === tmp0_other_with_cast.elbowfrezze_1))
      return false;
    if (!(this.headfrezze_1 === tmp0_other_with_cast.headfrezze_1))
      return false;
    if (!(this.headhollowbackfrezze_1 === tmp0_other_with_cast.headhollowbackfrezze_1))
      return false;
    if (!(this.hollowbackfrezze_1 === tmp0_other_with_cast.hollowbackfrezze_1))
      return false;
    if (!(this.invertfrezze_1 === tmp0_other_with_cast.invertfrezze_1))
      return false;
    if (!(this.onehandfrezze_1 === tmp0_other_with_cast.onehandfrezze_1))
      return false;
    if (!(this.shoulderfrezze_1 === tmp0_other_with_cast.shoulderfrezze_1))
      return false;
    if (!(this.turtlefrezze_1 === tmp0_other_with_cast.turtlefrezze_1))
      return false;
    if (!(this.airflare_1 === tmp0_other_with_cast.airflare_1))
      return false;
    if (!(this.backspin_1 === tmp0_other_with_cast.backspin_1))
      return false;
    if (!(this.cricket_1 === tmp0_other_with_cast.cricket_1))
      return false;
    if (!(this.elbowairflare_1 === tmp0_other_with_cast.elbowairflare_1))
      return false;
    if (!(this.flare_1 === tmp0_other_with_cast.flare_1))
      return false;
    if (!(this.jackhammer_1 === tmp0_other_with_cast.jackhammer_1))
      return false;
    if (!(this.halo_1 === tmp0_other_with_cast.halo_1))
      return false;
    if (!(this.headspin_1 === tmp0_other_with_cast.headspin_1))
      return false;
    if (!(this.munchmill_1 === tmp0_other_with_cast.munchmill_1))
      return false;
    if (!(this.ninetyNine_1 === tmp0_other_with_cast.ninetyNine_1))
      return false;
    if (!(this.swipes_1 === tmp0_other_with_cast.swipes_1))
      return false;
    if (!(this.turtle_1 === tmp0_other_with_cast.turtle_1))
      return false;
    if (!(this.ufo_1 === tmp0_other_with_cast.ufo_1))
      return false;
    if (!(this.web_1 === tmp0_other_with_cast.web_1))
      return false;
    if (!(this.windmill_1 === tmp0_other_with_cast.windmill_1))
      return false;
    if (!(this.wolf_1 === tmp0_other_with_cast.wolf_1))
      return false;
    if (!(this.angle_1 === tmp0_other_with_cast.angle_1))
      return false;
    if (!(this.bridge_1 === tmp0_other_with_cast.bridge_1))
      return false;
    if (!(this.finger_1 === tmp0_other_with_cast.finger_1))
      return false;
    if (!(this.handstand_1 === tmp0_other_with_cast.handstand_1))
      return false;
    if (!(this.horizont_1 === tmp0_other_with_cast.horizont_1))
      return false;
    if (!(this.pushups_1 === tmp0_other_with_cast.pushups_1))
      return false;
    if (!(this.sit_ups_1 === tmp0_other_with_cast.sit_ups_1))
      return false;
    if (!(this.pressUpHandstand_1 === tmp0_other_with_cast.pressUpHandstand_1))
      return false;
    if (!(this.butterfly_1 === tmp0_other_with_cast.butterfly_1))
      return false;
    if (!(this.fold_1 === tmp0_other_with_cast.fold_1))
      return false;
    if (!(this.shoulders_1 === tmp0_other_with_cast.shoulders_1))
      return false;
    if (!(this.twine_1 === tmp0_other_with_cast.twine_1))
      return false;
    return true;
  };
  function MainViewModel$loadData$slambda$slambda$slambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp = b.get_rating_iw9d46_k$();
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.get_rating_iw9d46_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function MainViewModel$loadData$slambda$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).invoke_ww677_k$ = function (pupilsList, $completion) {
    var tmp = this.create_gvilw1_k$(pupilsList, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ww677_k$((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.pupilsList_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            destination.add_utx5q5_k$(toPupilModel(item));
          }
          var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda$lambda;
          this.this$0__1._pupils_1.set_value_v1vabv_k$(sortedWith(destination, new sam$kotlin_Comparator$0(tmp_0)));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).create_gvilw1_k$ = function (pupilsList, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda(this.this$0__1, completion);
    i.pupilsList_1 = pupilsList;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_gvilw1_k$((!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda(this$0, resultContinuation);
    var l = function (pupilsList, $completion) {
      return i.invoke_ww677_k$(pupilsList, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).invoke_8djpn5_k$ = function (it, $completion) {
    var tmp = this.create_7nlvl7_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_8djpn5_k$(p1 instanceof PupilDomainModel ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.this$0__1._currentPupil_1.set_value_v1vabv_k$(toPupilModel(this.it_1));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).create_7nlvl7_k$ = function (it, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_7nlvl7_k$(value instanceof PupilDomainModel ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_8djpn5_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.mainUseCase_1.get_getAllPupils_45ntlz_k$().getAllPupils_29h0ns_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda_0(this.this$0__1, null);
            suspendResult = this.ARGUMENT0__1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MainViewModel$loadData$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.mainUseCase_1.get_getPupilById_jbgp2r_k$().getAllPupils_4ssv9c_k$('hustleril@yandex.ru', this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda_2(this.this$0__1, null);
            suspendResult = this.ARGUMENT0__1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_1(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_mainUseCase__5bjlsd($this) {
    return $this.mainUseCase_1;
  }
  function _get_singletonMainScope__cpbop1($this) {
    return $this.singletonMainScope_1;
  }
  function _get__pupils__jsqxf($this) {
    return $this._pupils_1;
  }
  function _get__currentPupil__vfbg8t($this) {
    return $this._currentPupil_1;
  }
  function _get__screenWidth__5wavg0($this) {
    return $this._screenWidth_1;
  }
  function _get__screenHeight__vuv3b3($this) {
    return $this._screenHeight_1;
  }
  function loadData($this) {
    launch($this.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda_0($this, null));
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
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
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function MainViewModel$loadData$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.pupils0__1 = launch(this.this$0__1.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_0(this.this$0__1, null));
            var tmp_1 = this;
            tmp_1.currentPupil1__1 = launch(this.this$0__1.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_2(this.this$0__1, null));
            this.list2__1 = listOf([this.pupils0__1, this.currentPupil1__1]);
            this.collection3__1 = this.list2__1;
            var tmp0_iterator = this.collection3__1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              element.start_1tchgi_k$();
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = joinAll(this.collection3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MainViewModel$loadData$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel(mainUseCase) {
    ViewModel_init_$Init$(this);
    this.mainUseCase_1 = mainUseCase;
    this.singletonMainScope_1 = CoroutineScope_0(Dispatchers_getInstance().get_Main_wo5vz6_k$().plus_s13ygv_k$(SupervisorJob()));
    this._pupils_1 = MutableStateFlow(emptyList());
    this.pupils_1 = this._pupils_1;
    this._currentPupil_1 = MutableStateFlow(null);
    this.currentPupil_1 = this._currentPupil_1;
    this._screenWidth_1 = MutableStateFlow(379);
    this.screenWidth_1 = this._screenWidth_1;
    this._screenHeight_1 = MutableStateFlow(640);
    this.screenHeight_1 = this._screenHeight_1;
    loadData(this);
  }
  protoOf(MainViewModel).get_pupils_i93g7i_k$ = function () {
    return this.pupils_1;
  };
  protoOf(MainViewModel).get_currentPupil_slw1q6_k$ = function () {
    return this.currentPupil_1;
  };
  protoOf(MainViewModel).get_screenWidth_d1ygk1_k$ = function () {
    return this.screenWidth_1;
  };
  protoOf(MainViewModel).setScreenWidth_p97c0g_k$ = function (width) {
    this._screenWidth_1.set_value_v1vabv_k$(width);
  };
  protoOf(MainViewModel).get_screenHeight_snsnic_k$ = function () {
    return this.screenHeight_1;
  };
  protoOf(MainViewModel).setScreenHeight_x3nr1v_k$ = function (height) {
    this._screenHeight_1.set_value_v1vabv_k$(height);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_mainPresentationModule;
  _.$_$.b = MainViewModel;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-presentation_main.js.map
