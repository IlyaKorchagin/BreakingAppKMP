(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './projects-core-koin-core.js', './BreakingKMPApp-module_main-data_main.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./projects-core-koin-core.js'), require('./BreakingKMPApp-module_main-data_main.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-domain_main'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_main-domain_main'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-domain_main'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp-module_main-domain_main'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-data_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-domain_main'. Its dependency 'BreakingKMPApp-module_main-data_main' was not found. Please, check whether 'BreakingKMPApp-module_main-data_main' is loaded prior to 'BreakingKMPApp-module_main-domain_main'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-domain_main'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'BreakingKMPApp-module_main-domain_main'.");
    }
    globalThis['BreakingKMPApp-module_main-domain_main'] = factory(typeof globalThis['BreakingKMPApp-module_main-domain_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_main-domain_main'], globalThis['kotlin-kotlin-stdlib'], globalThis['projects-core-koin-core'], globalThis['BreakingKMPApp-module_main-data_main'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_insert_koin_koin_core, kotlin_BreakingKMPApp_module_main_data_main, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.yh;
  var VOID = kotlin_kotlin.$_$.i;
  var toString = kotlin_kotlin.$_$.ci;
  var hashCode = kotlin_kotlin.$_$.pg;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var equals = kotlin_kotlin.$_$.gg;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var emptyList = kotlin_kotlin.$_$.z9;
  var getKClass = kotlin_kotlin.$_$.f;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var UserRepository = kotlin_BreakingKMPApp_module_main_data_main.$_$.b;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.og;
  var getNumberHashCode = kotlin_kotlin.$_$.mg;
  var CoroutineImpl = kotlin_kotlin.$_$.if;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.re;
  var initMetadataForLambda = kotlin_kotlin.$_$.vg;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.sg;
  var FunctionAdapter = kotlin_kotlin.$_$.sf;
  var isInterface = kotlin_kotlin.$_$.gh;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var SuspendFunction1 = kotlin_kotlin.$_$.kf;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(MainUseCase, 'MainUseCase');
  initMetadataForClass(PupilDomainModel, 'PupilDomainModel');
  initMetadataForLambda(GetAllPupils$getAllPupils$o$collect$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($collectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForClass(GetAllPupils, 'GetAllPupils', VOID, VOID, VOID, [0]);
  initMetadataForLambda(GetPupilById$getAllPupils$o$collect$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($collectCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForClass(GetPupilById, 'GetPupilById', VOID, VOID, VOID, [1]);
  //endregion
  function MainUseCase(getAllPupils, getPupilById) {
    this.getAllPupils_1 = getAllPupils;
    this.getPupilById_1 = getPupilById;
  }
  protoOf(MainUseCase).get_getAllPupils_45ntlz_k$ = function () {
    return this.getAllPupils_1;
  };
  protoOf(MainUseCase).get_getPupilById_jbgp2r_k$ = function () {
    return this.getPupilById_1;
  };
  protoOf(MainUseCase).component1_7eebsc_k$ = function () {
    return this.getAllPupils_1;
  };
  protoOf(MainUseCase).component2_7eebsb_k$ = function () {
    return this.getPupilById_1;
  };
  protoOf(MainUseCase).copy_euajdr_k$ = function (getAllPupils, getPupilById) {
    return new MainUseCase(getAllPupils, getPupilById);
  };
  protoOf(MainUseCase).copy$default_qkd3bp_k$ = function (getAllPupils, getPupilById, $super) {
    getAllPupils = getAllPupils === VOID ? this.getAllPupils_1 : getAllPupils;
    getPupilById = getPupilById === VOID ? this.getPupilById_1 : getPupilById;
    return $super === VOID ? this.copy_euajdr_k$(getAllPupils, getPupilById) : $super.copy_euajdr_k$.call(this, getAllPupils, getPupilById);
  };
  protoOf(MainUseCase).toString = function () {
    return 'MainUseCase(getAllPupils=' + toString(this.getAllPupils_1) + ', getPupilById=' + toString(this.getPupilById_1) + ')';
  };
  protoOf(MainUseCase).hashCode = function () {
    var result = hashCode(this.getAllPupils_1);
    result = imul(result, 31) + hashCode(this.getPupilById_1) | 0;
    return result;
  };
  protoOf(MainUseCase).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MainUseCase))
      return false;
    var tmp0_other_with_cast = other instanceof MainUseCase ? other : THROW_CCE();
    if (!equals(this.getAllPupils_1, tmp0_other_with_cast.getAllPupils_1))
      return false;
    if (!equals(this.getPupilById_1, tmp0_other_with_cast.getPupilById_1))
      return false;
    return true;
  };
  function get_mainDomainModule() {
    _init_properties_mainDomainDi_kt__ae0e6a();
    return mainDomainModule;
  }
  var mainDomainModule;
  function mainDomainModule$lambda($this$module) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = mainDomainModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(MainUseCase), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.indexPrimaryType_bfm8x4_k$(factory);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = mainDomainModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(GetAllPupils), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.indexPrimaryType_bfm8x4_k$(factory_0);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory_0);
    }
    new KoinDefinition($this$module, factory_0);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_1 = mainDomainModule$lambda$lambda_1;
    var scopeQualifier_1 = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_1 = Kind_Singleton_getInstance();
    var secondaryTypes_1 = emptyList();
    var def_1 = new BeanDefinition(scopeQualifier_1, getKClass(GetPupilById), null, definition_1, kind_1, secondaryTypes_1);
    var factory_1 = new SingleInstanceFactory(def_1);
    $this$module.indexPrimaryType_bfm8x4_k$(factory_1);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory_1);
    }
    new KoinDefinition($this$module, factory_1);
    return Unit_getInstance();
  }
  function mainDomainModule$lambda$lambda($this$single, it) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.get_80ko8d_k$(getKClass(UserRepository), null, null);
    var tmp = new GetAllPupils(tmp$ret$0);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$1 = $this$single.get_80ko8d_k$(getKClass(UserRepository), null, null);
    return new MainUseCase(tmp, new GetPupilById(tmp$ret$1));
  }
  function mainDomainModule$lambda$lambda_0($this$single, it) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.get_80ko8d_k$(getKClass(UserRepository), null, null);
    return new GetAllPupils(tmp$ret$0);
  }
  function mainDomainModule$lambda$lambda_1($this$single, it) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.get_80ko8d_k$(getKClass(UserRepository), null, null);
    return new GetPupilById(tmp$ret$0);
  }
  var properties_initialized_mainDomainDi_kt_d44dss;
  function _init_properties_mainDomainDi_kt__ae0e6a() {
    if (!properties_initialized_mainDomainDi_kt_d44dss) {
      properties_initialized_mainDomainDi_kt_d44dss = true;
      mainDomainModule = module_0(VOID, mainDomainModule$lambda);
    }
  }
  function PupilDomainModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine) {
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
  protoOf(PupilDomainModel).set_id_36n2qa_k$ = function (_set____db54di) {
    this.id_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(PupilDomainModel).set_name_aqnlwe_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PupilDomainModel).set_email_h0qb79_k$ = function (_set____db54di) {
    this.email_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(PupilDomainModel).set_avatar_jv91xw_k$ = function (_set____db54di) {
    this.avatar_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_avatar_b5pjz6_k$ = function () {
    return this.avatar_1;
  };
  protoOf(PupilDomainModel).set_born_sh3pr0_k$ = function (_set____db54di) {
    this.born_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_born_wojlaq_k$ = function () {
    return this.born_1;
  };
  protoOf(PupilDomainModel).set_country_gg4t67_k$ = function (_set____db54di) {
    this.country_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_country_h3tl7x_k$ = function () {
    return this.country_1;
  };
  protoOf(PupilDomainModel).set_city_50dk72_k$ = function (_set____db54di) {
    this.city_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_city_wok3w4_k$ = function () {
    return this.city_1;
  };
  protoOf(PupilDomainModel).set_video_owtx8s_k$ = function (_set____db54di) {
    this.video_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_video_j06c0i_k$ = function () {
    return this.video_1;
  };
  protoOf(PupilDomainModel).set_status_dpzsuf_k$ = function (_set____db54di) {
    this.status_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(PupilDomainModel).set_subscription_e833b8_k$ = function (_set____db54di) {
    this.subscription_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_subscription_a6pgti_k$ = function () {
    return this.subscription_1;
  };
  protoOf(PupilDomainModel).set_subscriptionDay_22l4va_k$ = function (_set____db54di) {
    this.subscriptionDay_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_subscriptionDay_gjomdy_k$ = function () {
    return this.subscriptionDay_1;
  };
  protoOf(PupilDomainModel).set_subscriptionMonth_pkim0y_k$ = function (_set____db54di) {
    this.subscriptionMonth_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_subscriptionMonth_9brqdi_k$ = function () {
    return this.subscriptionMonth_1;
  };
  protoOf(PupilDomainModel).set_subscriptionYear_it2cnj_k$ = function (_set____db54di) {
    this.subscriptionYear_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_subscriptionYear_fqsddv_k$ = function () {
    return this.subscriptionYear_1;
  };
  protoOf(PupilDomainModel).get_currentTask_nu5nat_k$ = function () {
    return this.currentTask_1;
  };
  protoOf(PupilDomainModel).get_currentTaskProgress_oh2d8i_k$ = function () {
    return this.currentTaskProgress_1;
  };
  protoOf(PupilDomainModel).get_roundsList_maupw4_k$ = function () {
    return this.roundsList_1;
  };
  protoOf(PupilDomainModel).set_rating_wdgycc_k$ = function (_set____db54di) {
    this.rating_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_rating_iw9d46_k$ = function () {
    return this.rating_1;
  };
  protoOf(PupilDomainModel).set_freezeRating_yq67wb_k$ = function (_set____db54di) {
    this.freezeRating_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_freezeRating_hx7vq5_k$ = function () {
    return this.freezeRating_1;
  };
  protoOf(PupilDomainModel).set_powermoveRating_cf4ngg_k$ = function (_set____db54di) {
    this.powermoveRating_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_powermoveRating_pqg11y_k$ = function () {
    return this.powermoveRating_1;
  };
  protoOf(PupilDomainModel).set_ofpRating_2msio3_k$ = function (_set____db54di) {
    this.ofpRating_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_ofpRating_yvr5tf_k$ = function () {
    return this.ofpRating_1;
  };
  protoOf(PupilDomainModel).set_strechingRating_ehcj3h_k$ = function (_set____db54di) {
    this.strechingRating_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_strechingRating_pjs2g3_k$ = function () {
    return this.strechingRating_1;
  };
  protoOf(PupilDomainModel).set_battleRating_bmhcfw_k$ = function (_set____db54di) {
    this.battleRating_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_battleRating_uwfp6q_k$ = function () {
    return this.battleRating_1;
  };
  protoOf(PupilDomainModel).set_battleCurPosition_h80sgc_k$ = function (_set____db54di) {
    this.battleCurPosition_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_battleCurPosition_yuwtfs_k$ = function () {
    return this.battleCurPosition_1;
  };
  protoOf(PupilDomainModel).set_battleNewPosition_4x0ivo_k$ = function (_set____db54di) {
    this.battleNewPosition_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_battleNewPosition_ycjhy0_k$ = function () {
    return this.battleNewPosition_1;
  };
  protoOf(PupilDomainModel).set_newPosition_1r4upo_k$ = function (_set____db54di) {
    this.newPosition_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_newPosition_nzgbcw_k$ = function () {
    return this.newPosition_1;
  };
  protoOf(PupilDomainModel).set_currentPosition_nvjmkj_k$ = function (_set____db54di) {
    this.currentPosition_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_currentPosition_ic997d_k$ = function () {
    return this.currentPosition_1;
  };
  protoOf(PupilDomainModel).set_babyfrezze_om30tl_k$ = function (_set____db54di) {
    this.babyfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_babyfrezze_82x48l_k$ = function () {
    return this.babyfrezze_1;
  };
  protoOf(PupilDomainModel).set_chairfrezze_vzhlos_k$ = function (_set____db54di) {
    this.chairfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_chairfrezze_4mnfns_k$ = function () {
    return this.chairfrezze_1;
  };
  protoOf(PupilDomainModel).set_elbowfrezze_3wgp56_k$ = function (_set____db54di) {
    this.elbowfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_elbowfrezze_6kbw5i_k$ = function () {
    return this.elbowfrezze_1;
  };
  protoOf(PupilDomainModel).set_headfrezze_94541_k$ = function (_set____db54di) {
    this.headfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_headfrezze_d0gxxx_k$ = function () {
    return this.headfrezze_1;
  };
  protoOf(PupilDomainModel).set_headhollowbackfrezze_hm8o21_k$ = function (_set____db54di) {
    this.headhollowbackfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_headhollowbackfrezze_j16lbf_k$ = function () {
    return this.headhollowbackfrezze_1;
  };
  protoOf(PupilDomainModel).set_hollowbackfrezze_n8t9gp_k$ = function (_set____db54di) {
    this.hollowbackfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_hollowbackfrezze_5synt7_k$ = function () {
    return this.hollowbackfrezze_1;
  };
  protoOf(PupilDomainModel).set_invertfrezze_8a97t_k$ = function (_set____db54di) {
    this.invertfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_invertfrezze_g829zf_k$ = function () {
    return this.invertfrezze_1;
  };
  protoOf(PupilDomainModel).set_onehandfrezze_azkdp8_k$ = function (_set____db54di) {
    this.onehandfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_onehandfrezze_8vzd0o_k$ = function () {
    return this.onehandfrezze_1;
  };
  protoOf(PupilDomainModel).set_shoulderfrezze_7s1skf_k$ = function (_set____db54di) {
    this.shoulderfrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_shoulderfrezze_uv4etx_k$ = function () {
    return this.shoulderfrezze_1;
  };
  protoOf(PupilDomainModel).set_turtlefrezze_o8c96r_k$ = function (_set____db54di) {
    this.turtlefrezze_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_turtlefrezze_2dd91r_k$ = function () {
    return this.turtlefrezze_1;
  };
  protoOf(PupilDomainModel).set_airflare_gfpcpl_k$ = function (_set____db54di) {
    this.airflare_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_airflare_rvlnyl_k$ = function () {
    return this.airflare_1;
  };
  protoOf(PupilDomainModel).set_backspin_dx6sri_k$ = function (_set____db54di) {
    this.backspin_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_backspin_3adc36_k$ = function () {
    return this.backspin_1;
  };
  protoOf(PupilDomainModel).set_cricket_10npbo_k$ = function (_set____db54di) {
    this.cricket_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_cricket_ic5pfs_k$ = function () {
    return this.cricket_1;
  };
  protoOf(PupilDomainModel).set_elbowairflare_4kxmfy_k$ = function (_set____db54di) {
    this.elbowairflare_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_elbowairflare_pjyvy_k$ = function () {
    return this.elbowairflare_1;
  };
  protoOf(PupilDomainModel).set_flare_9u8mrt_k$ = function (_set____db54di) {
    this.flare_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_flare_irfhk5_k$ = function () {
    return this.flare_1;
  };
  protoOf(PupilDomainModel).set_jackhammer_e79tra_k$ = function (_set____db54di) {
    this.jackhammer_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_jackhammer_31ddri_k$ = function () {
    return this.jackhammer_1;
  };
  protoOf(PupilDomainModel).set_halo_2w3ekx_k$ = function (_set____db54di) {
    this.halo_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_halo_won4p1_k$ = function () {
    return this.halo_1;
  };
  protoOf(PupilDomainModel).set_headspin_w14u5z_k$ = function (_set____db54di) {
    this.headspin_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_headspin_ksfch7_k$ = function () {
    return this.headspin_1;
  };
  protoOf(PupilDomainModel).set_munchmill_ac88ki_k$ = function (_set____db54di) {
    this.munchmill_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_munchmill_9uura6_k$ = function () {
    return this.munchmill_1;
  };
  protoOf(PupilDomainModel).set_ninetyNine_lxg7uq_k$ = function (_set____db54di) {
    this.ninetyNine_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_ninetyNine_e2uhri_k$ = function () {
    return this.ninetyNine_1;
  };
  protoOf(PupilDomainModel).set_swipes_ocidaq_k$ = function (_set____db54di) {
    this.swipes_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_swipes_jp7koy_k$ = function () {
    return this.swipes_1;
  };
  protoOf(PupilDomainModel).set_turtle_qry5yn_k$ = function (_set____db54di) {
    this.turtle_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_turtle_k5bfwl_k$ = function () {
    return this.turtle_1;
  };
  protoOf(PupilDomainModel).set_ufo_4uwwcn_k$ = function (_set____db54di) {
    this.ufo_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_ufo_18iusr_k$ = function () {
    return this.ufo_1;
  };
  protoOf(PupilDomainModel).set_web_8g4cwf_k$ = function (_set____db54di) {
    this.web_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_web_18itcl_k$ = function () {
    return this.web_1;
  };
  protoOf(PupilDomainModel).set_windmill_fkxn21_k$ = function (_set____db54di) {
    this.windmill_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_windmill_ks2bjh_k$ = function () {
    return this.windmill_1;
  };
  protoOf(PupilDomainModel).set_wolf_ag7uqv_k$ = function (_set____db54di) {
    this.wolf_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_wolf_wowzvf_k$ = function () {
    return this.wolf_1;
  };
  protoOf(PupilDomainModel).set_angle_51nze6_k$ = function (_set____db54di) {
    this.angle_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_angle_iopwve_k$ = function () {
    return this.angle_1;
  };
  protoOf(PupilDomainModel).set_bridge_def6wy_k$ = function (_set____db54di) {
    this.bridge_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_bridge_bkos5u_k$ = function () {
    return this.bridge_1;
  };
  protoOf(PupilDomainModel).set_finger_iclm1u_k$ = function (_set____db54di) {
    this.finger_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_finger_dc0diq_k$ = function () {
    return this.finger_1;
  };
  protoOf(PupilDomainModel).set_handstand_8zu0gy_k$ = function (_set____db54di) {
    this.handstand_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_handstand_9otdsu_k$ = function () {
    return this.handstand_1;
  };
  protoOf(PupilDomainModel).set_horizont_8mfaky_k$ = function (_set____db54di) {
    this.horizont_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_horizont_xmt2pu_k$ = function () {
    return this.horizont_1;
  };
  protoOf(PupilDomainModel).set_pushups_2qx8rd_k$ = function (_set____db54di) {
    this.pushups_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_pushups_2dajuz_k$ = function () {
    return this.pushups_1;
  };
  protoOf(PupilDomainModel).set_sit_ups_ob0fg2_k$ = function (_set____db54di) {
    this.sit_ups_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_sit_ups_z1d66q_k$ = function () {
    return this.sit_ups_1;
  };
  protoOf(PupilDomainModel).set_pressUpHandstand_oxlgv2_k$ = function (_set____db54di) {
    this.pressUpHandstand_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_pressUpHandstand_vxm0pa_k$ = function () {
    return this.pressUpHandstand_1;
  };
  protoOf(PupilDomainModel).set_butterfly_zerc36_k$ = function (_set____db54di) {
    this.butterfly_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_butterfly_8jzp3e_k$ = function () {
    return this.butterfly_1;
  };
  protoOf(PupilDomainModel).set_fold_smp5vu_k$ = function (_set____db54di) {
    this.fold_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_fold_wom53e_k$ = function () {
    return this.fold_1;
  };
  protoOf(PupilDomainModel).set_shoulders_8ot8j2_k$ = function (_set____db54di) {
    this.shoulders_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_shoulders_npwbfa_k$ = function () {
    return this.shoulders_1;
  };
  protoOf(PupilDomainModel).set_twine_tb4iso_k$ = function (_set____db54di) {
    this.twine_1 = _set____db54di;
  };
  protoOf(PupilDomainModel).get_twine_izbsk4_k$ = function () {
    return this.twine_1;
  };
  protoOf(PupilDomainModel).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(PupilDomainModel).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(PupilDomainModel).component3_7eebsa_k$ = function () {
    return this.email_1;
  };
  protoOf(PupilDomainModel).component4_7eebs9_k$ = function () {
    return this.avatar_1;
  };
  protoOf(PupilDomainModel).component5_7eebs8_k$ = function () {
    return this.born_1;
  };
  protoOf(PupilDomainModel).component6_7eebs7_k$ = function () {
    return this.country_1;
  };
  protoOf(PupilDomainModel).component7_7eebs6_k$ = function () {
    return this.city_1;
  };
  protoOf(PupilDomainModel).component8_7eebs5_k$ = function () {
    return this.video_1;
  };
  protoOf(PupilDomainModel).component9_7eebs4_k$ = function () {
    return this.status_1;
  };
  protoOf(PupilDomainModel).component10_gazzfo_k$ = function () {
    return this.subscription_1;
  };
  protoOf(PupilDomainModel).component11_gazzfn_k$ = function () {
    return this.subscriptionDay_1;
  };
  protoOf(PupilDomainModel).component12_gazzfm_k$ = function () {
    return this.subscriptionMonth_1;
  };
  protoOf(PupilDomainModel).component13_gazzfl_k$ = function () {
    return this.subscriptionYear_1;
  };
  protoOf(PupilDomainModel).component14_gazzfk_k$ = function () {
    return this.currentTask_1;
  };
  protoOf(PupilDomainModel).component15_gazzfj_k$ = function () {
    return this.currentTaskProgress_1;
  };
  protoOf(PupilDomainModel).component16_gazzfi_k$ = function () {
    return this.roundsList_1;
  };
  protoOf(PupilDomainModel).component17_gazzfh_k$ = function () {
    return this.rating_1;
  };
  protoOf(PupilDomainModel).component18_gazzfg_k$ = function () {
    return this.freezeRating_1;
  };
  protoOf(PupilDomainModel).component19_gazzff_k$ = function () {
    return this.powermoveRating_1;
  };
  protoOf(PupilDomainModel).component20_gazzet_k$ = function () {
    return this.ofpRating_1;
  };
  protoOf(PupilDomainModel).component21_gazzes_k$ = function () {
    return this.strechingRating_1;
  };
  protoOf(PupilDomainModel).component22_gazzer_k$ = function () {
    return this.battleRating_1;
  };
  protoOf(PupilDomainModel).component23_gazzeq_k$ = function () {
    return this.battleCurPosition_1;
  };
  protoOf(PupilDomainModel).component24_gazzep_k$ = function () {
    return this.battleNewPosition_1;
  };
  protoOf(PupilDomainModel).component25_gazzeo_k$ = function () {
    return this.newPosition_1;
  };
  protoOf(PupilDomainModel).component26_gazzen_k$ = function () {
    return this.currentPosition_1;
  };
  protoOf(PupilDomainModel).component27_gazzem_k$ = function () {
    return this.babyfrezze_1;
  };
  protoOf(PupilDomainModel).component28_gazzel_k$ = function () {
    return this.chairfrezze_1;
  };
  protoOf(PupilDomainModel).component29_gazzek_k$ = function () {
    return this.elbowfrezze_1;
  };
  protoOf(PupilDomainModel).component30_gazzdy_k$ = function () {
    return this.headfrezze_1;
  };
  protoOf(PupilDomainModel).component31_gazzdx_k$ = function () {
    return this.headhollowbackfrezze_1;
  };
  protoOf(PupilDomainModel).component32_gazzdw_k$ = function () {
    return this.hollowbackfrezze_1;
  };
  protoOf(PupilDomainModel).component33_gazzdv_k$ = function () {
    return this.invertfrezze_1;
  };
  protoOf(PupilDomainModel).component34_gazzdu_k$ = function () {
    return this.onehandfrezze_1;
  };
  protoOf(PupilDomainModel).component35_gazzdt_k$ = function () {
    return this.shoulderfrezze_1;
  };
  protoOf(PupilDomainModel).component36_gazzds_k$ = function () {
    return this.turtlefrezze_1;
  };
  protoOf(PupilDomainModel).component37_gazzdr_k$ = function () {
    return this.airflare_1;
  };
  protoOf(PupilDomainModel).component38_gazzdq_k$ = function () {
    return this.backspin_1;
  };
  protoOf(PupilDomainModel).component39_gazzdp_k$ = function () {
    return this.cricket_1;
  };
  protoOf(PupilDomainModel).component40_gazzd3_k$ = function () {
    return this.elbowairflare_1;
  };
  protoOf(PupilDomainModel).component41_gazzd2_k$ = function () {
    return this.flare_1;
  };
  protoOf(PupilDomainModel).component42_gazzd1_k$ = function () {
    return this.jackhammer_1;
  };
  protoOf(PupilDomainModel).component43_gazzd0_k$ = function () {
    return this.halo_1;
  };
  protoOf(PupilDomainModel).component44_gazzcz_k$ = function () {
    return this.headspin_1;
  };
  protoOf(PupilDomainModel).component45_gazzcy_k$ = function () {
    return this.munchmill_1;
  };
  protoOf(PupilDomainModel).component46_gazzcx_k$ = function () {
    return this.ninetyNine_1;
  };
  protoOf(PupilDomainModel).component47_gazzcw_k$ = function () {
    return this.swipes_1;
  };
  protoOf(PupilDomainModel).component48_gazzcv_k$ = function () {
    return this.turtle_1;
  };
  protoOf(PupilDomainModel).component49_gazzcu_k$ = function () {
    return this.ufo_1;
  };
  protoOf(PupilDomainModel).component50_gazzc8_k$ = function () {
    return this.web_1;
  };
  protoOf(PupilDomainModel).component51_gazzc7_k$ = function () {
    return this.windmill_1;
  };
  protoOf(PupilDomainModel).component52_gazzc6_k$ = function () {
    return this.wolf_1;
  };
  protoOf(PupilDomainModel).component53_gazzc5_k$ = function () {
    return this.angle_1;
  };
  protoOf(PupilDomainModel).component54_gazzc4_k$ = function () {
    return this.bridge_1;
  };
  protoOf(PupilDomainModel).component55_gazzc3_k$ = function () {
    return this.finger_1;
  };
  protoOf(PupilDomainModel).component56_gazzc2_k$ = function () {
    return this.handstand_1;
  };
  protoOf(PupilDomainModel).component57_gazzc1_k$ = function () {
    return this.horizont_1;
  };
  protoOf(PupilDomainModel).component58_gazzc0_k$ = function () {
    return this.pushups_1;
  };
  protoOf(PupilDomainModel).component59_gazzbz_k$ = function () {
    return this.sit_ups_1;
  };
  protoOf(PupilDomainModel).component60_gazzbd_k$ = function () {
    return this.pressUpHandstand_1;
  };
  protoOf(PupilDomainModel).component61_gazzbc_k$ = function () {
    return this.butterfly_1;
  };
  protoOf(PupilDomainModel).component62_gazzbb_k$ = function () {
    return this.fold_1;
  };
  protoOf(PupilDomainModel).component63_gazzba_k$ = function () {
    return this.shoulders_1;
  };
  protoOf(PupilDomainModel).component64_gazzb9_k$ = function () {
    return this.twine_1;
  };
  protoOf(PupilDomainModel).copy_psg3in_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine) {
    return new PupilDomainModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine);
  };
  protoOf(PupilDomainModel).copy$default_iay8sl_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine, $super) {
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
  protoOf(PupilDomainModel).toString = function () {
    return 'PupilDomainModel(id=' + this.id_1 + ', name=' + this.name_1 + ', email=' + this.email_1 + ', avatar=' + this.avatar_1 + ', born=' + this.born_1 + ', country=' + this.country_1 + ', city=' + this.city_1 + ', video=' + this.video_1 + ', status=' + this.status_1 + ', subscription=' + this.subscription_1.toString() + ', subscriptionDay=' + this.subscriptionDay_1 + ', subscriptionMonth=' + this.subscriptionMonth_1 + ', subscriptionYear=' + this.subscriptionYear_1 + ', currentTask=' + this.currentTask_1 + ', currentTaskProgress=' + this.currentTaskProgress_1 + ', roundsList=' + this.roundsList_1 + ', rating=' + this.rating_1 + ', freezeRating=' + this.freezeRating_1 + ', powermoveRating=' + this.powermoveRating_1 + ', ofpRating=' + this.ofpRating_1 + ', strechingRating=' + this.strechingRating_1 + ', battleRating=' + this.battleRating_1 + ', battleCurPosition=' + this.battleCurPosition_1 + ', battleNewPosition=' + this.battleNewPosition_1 + ', newPosition=' + this.newPosition_1 + ', currentPosition=' + this.currentPosition_1 + ', babyfrezze=' + this.babyfrezze_1 + ', chairfrezze=' + this.chairfrezze_1 + ', elbowfrezze=' + this.elbowfrezze_1 + ', headfrezze=' + this.headfrezze_1 + ', headhollowbackfrezze=' + this.headhollowbackfrezze_1 + ', hollowbackfrezze=' + this.hollowbackfrezze_1 + ', invertfrezze=' + this.invertfrezze_1 + ', onehandfrezze=' + this.onehandfrezze_1 + ', shoulderfrezze=' + this.shoulderfrezze_1 + ', turtlefrezze=' + this.turtlefrezze_1 + ', airflare=' + this.airflare_1 + ', backspin=' + this.backspin_1 + ', cricket=' + this.cricket_1 + ', elbowairflare=' + this.elbowairflare_1 + ', flare=' + this.flare_1 + ', jackhammer=' + this.jackhammer_1 + ', halo=' + this.halo_1 + ', headspin=' + this.headspin_1 + ', munchmill=' + this.munchmill_1 + ', ninetyNine=' + this.ninetyNine_1 + ', swipes=' + this.swipes_1 + ', turtle=' + this.turtle_1 + ', ufo=' + this.ufo_1 + ', web=' + this.web_1 + ', windmill=' + this.windmill_1 + ', wolf=' + this.wolf_1 + ', angle=' + this.angle_1 + ', bridge=' + this.bridge_1 + ', finger=' + this.finger_1 + ', handstand=' + this.handstand_1 + ', horizont=' + this.horizont_1 + ', pushups=' + this.pushups_1 + ', sit_ups=' + this.sit_ups_1 + ', pressUpHandstand=' + this.pressUpHandstand_1 + ', butterfly=' + this.butterfly_1 + ', fold=' + this.fold_1 + ', shoulders=' + this.shoulders_1 + ', twine=' + this.twine_1 + ')';
  };
  protoOf(PupilDomainModel).hashCode = function () {
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
  protoOf(PupilDomainModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilDomainModel))
      return false;
    var tmp0_other_with_cast = other instanceof PupilDomainModel ? other : THROW_CCE();
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
  function toPupilDomainModel(_this__u8e3s4) {
    return new PupilDomainModel(_this__u8e3s4.get_id_kntnx8_k$(), _this__u8e3s4.get_name_woqyms_k$(), _this__u8e3s4.get_email_iqwbqr_k$(), _this__u8e3s4.get_avatar_b5pjz6_k$(), _this__u8e3s4.get_born_wojlaq_k$(), _this__u8e3s4.get_country_h3tl7x_k$(), _this__u8e3s4.get_city_wok3w4_k$(), _this__u8e3s4.get_video_j06c0i_k$(), _this__u8e3s4.get_status_jnf6d7_k$(), _this__u8e3s4.get_subscription_a6pgti_k$(), _this__u8e3s4.get_subscriptionDay_gjomdy_k$(), _this__u8e3s4.get_subscriptionMonth_9brqdi_k$(), _this__u8e3s4.get_subscriptionYear_fqsddv_k$(), _this__u8e3s4.get_currentTask_nu5nat_k$(), _this__u8e3s4.get_currentTaskProgress_oh2d8i_k$(), _this__u8e3s4.get_roundsList_maupw4_k$(), _this__u8e3s4.get_rating_iw9d46_k$(), _this__u8e3s4.get_freeze_rating_r5s6hw_k$(), _this__u8e3s4.get_powermove_rating_uy8d5d_k$(), _this__u8e3s4.get_ofp_rating_ued8wk_k$(), _this__u8e3s4.get_streching_rating_p7lkbo_k$(), _this__u8e3s4.get_battle_rating_lze0nv_k$(), _this__u8e3s4.get_battle_cur_position_7020au_k$(), _this__u8e3s4.get_battle_new_position_7hm5ay_k$(), _this__u8e3s4.get_new_position_9p6g9b_k$(), _this__u8e3s4.get_current_position_ntt9mg_k$(), _this__u8e3s4.get_babyfrezze_82x48l_k$(), _this__u8e3s4.get_chairfrezze_4mnfns_k$(), _this__u8e3s4.get_elbowfrezze_6kbw5i_k$(), _this__u8e3s4.get_headfrezze_d0gxxx_k$(), _this__u8e3s4.get_headhollowbackfrezze_j16lbf_k$(), _this__u8e3s4.get_hollowbackfrezze_5synt7_k$(), _this__u8e3s4.get_invertfrezze_g829zf_k$(), _this__u8e3s4.get_onehandfrezze_8vzd0o_k$(), _this__u8e3s4.get_shoulderfrezze_uv4etx_k$(), _this__u8e3s4.get_turtlefrezze_2dd91r_k$(), _this__u8e3s4.get_airflare_rvlnyl_k$(), _this__u8e3s4.get_backspin_3adc36_k$(), _this__u8e3s4.get_cricket_ic5pfs_k$(), _this__u8e3s4.get_elbowairflare_pjyvy_k$(), _this__u8e3s4.get_flare_irfhk5_k$(), _this__u8e3s4.get_jackhammer_31ddri_k$(), _this__u8e3s4.get_halo_won4p1_k$(), _this__u8e3s4.get_headspin_ksfch7_k$(), _this__u8e3s4.get_munchmill_9uura6_k$(), _this__u8e3s4.get_ninety_nine_a05d7z_k$(), _this__u8e3s4.get_swipes_jp7koy_k$(), _this__u8e3s4.get_turtle_k5bfwl_k$(), _this__u8e3s4.get_ufo_18iusr_k$(), _this__u8e3s4.get_web_18itcl_k$(), _this__u8e3s4.get_windmill_ks2bjh_k$(), _this__u8e3s4.get_wolf_wowzvf_k$(), _this__u8e3s4.get_angle_iopwve_k$(), _this__u8e3s4.get_bridge_bkos5u_k$(), _this__u8e3s4.get_finger_dc0diq_k$(), _this__u8e3s4.get_handstand_9otdsu_k$(), _this__u8e3s4.get_horizont_xmt2pu_k$(), _this__u8e3s4.get_pushups_2dajuz_k$(), _this__u8e3s4.get_sit_ups_z1d66q_k$(), _this__u8e3s4.get_press_up_handstand_391ujc_k$(), _this__u8e3s4.get_butterfly_8jzp3e_k$(), _this__u8e3s4.get_fold_wom53e_k$(), _this__u8e3s4.get_shoulders_npwbfa_k$(), _this__u8e3s4.get_twine_izbsk4_k$());
  }
  function GetAllPupils$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).invoke_e0ttvm_k$ = function (value, $completion) {
    var tmp = this.create_wyq9v6_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_e0ttvm_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$transform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var this_0 = this.value1__1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              destination.add_utx5q5_k$(toPupilDomainModel(item));
            }

            suspendResult = this.$this$transform0__1.emit_t92u1f_k$(destination, this);
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
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    var i = new GetAllPupils$getAllPupils$o$collect$slambda(this.$$this$unsafeFlow_1, completion);
    i.value_1 = value;
    return i;
  };
  function GetAllPupils$getAllPupils$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetAllPupils$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_e0ttvm_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = GetAllPupils$getAllPupils$o$collect$slambda_0(this.$this$unsafeFlow0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function _get_repository__phhg8v($this) {
    return $this.repository_1;
  }
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
  function _no_name_provided__qut3iv($this) {
    this.$this_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).collect_ooju95_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  };
  function GetAllPupils(repository) {
    this.repository_1 = repository;
  }
  protoOf(GetAllPupils).getAllPupils_29h0ns_k$ = function ($completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.repository_1.getUsers_wjcaqa_k$();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(this_0);
  };
  function GetPupilById$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).invoke_e0ttvm_k$ = function (value, $completion) {
    var tmp = this.create_wyq9v6_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_e0ttvm_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$transform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var pupil = this.value1__1;
            suspendResult = this.$this$transform0__1.emit_t92u1f_k$(toPupilDomainModel(pupil), this);
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
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    var i = new GetPupilById$getAllPupils$o$collect$slambda(this.$$this$unsafeFlow_1, completion);
    i.value_1 = value;
    return i;
  };
  function GetPupilById$getAllPupils$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetPupilById$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_e0ttvm_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = GetPupilById$getAllPupils$o$collect$slambda_0(this.$this$unsafeFlow0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function _get_repository__phhg8v_0($this) {
    return $this.repository_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function _no_name_provided__qut3iv_0($this) {
    this.$this_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_ooju95_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_0).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  };
  function GetPupilById(repository) {
    this.repository_1 = repository;
  }
  protoOf(GetPupilById).getAllPupils_4ssv9c_k$ = function (email, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.repository_1.getUserById_sbow6f_k$(email);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(this_0);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_mainDomainModule;
  _.$_$.b = PupilDomainModel;
  _.$_$.c = MainUseCase;
  //endregion
  return _;
}));
