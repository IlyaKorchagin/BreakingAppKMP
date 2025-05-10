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
  var toString = kotlin_kotlin.$_$.le;
  var protoOf = kotlin_kotlin.$_$.he;
  var hashCode = kotlin_kotlin.$_$.zc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var emptyList = kotlin_kotlin.$_$.a8;
  var getKClass = kotlin_kotlin.$_$.f;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var UserRepository = kotlin_BreakingKMPApp_module_main_data_main.$_$.b;
  var VOID = kotlin_kotlin.$_$.i;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var isInterface = kotlin_kotlin.$_$.qd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(MainUseCase, 'MainUseCase');
  initMetadataForClass(PupilDomainModel, 'PupilDomainModel');
  initMetadataForLambda(GetAllPupils$getAllPupils$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetAllPupils, 'GetAllPupils', VOID, VOID, VOID, [0]);
  initMetadataForLambda(GetPupilById$getAllPupils$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetPupilById, 'GetPupilById', VOID, VOID, VOID, [1]);
  //endregion
  function MainUseCase(getAllPupils, getPupilById) {
    this.ij9_1 = getAllPupils;
    this.jj9_1 = getPupilById;
  }
  protoOf(MainUseCase).toString = function () {
    return 'MainUseCase(getAllPupils=' + toString(this.ij9_1) + ', getPupilById=' + toString(this.jj9_1) + ')';
  };
  protoOf(MainUseCase).hashCode = function () {
    var result = hashCode(this.ij9_1);
    result = imul(result, 31) + hashCode(this.jj9_1) | 0;
    return result;
  };
  protoOf(MainUseCase).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MainUseCase))
      return false;
    var tmp0_other_with_cast = other instanceof MainUseCase ? other : THROW_CCE();
    if (!equals(this.ij9_1, tmp0_other_with_cast.ij9_1))
      return false;
    if (!equals(this.jj9_1, tmp0_other_with_cast.jj9_1))
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
    var scopeQualifier = Companion_getInstance().vr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(MainUseCase), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.at(factory);
    if (false || $this$module.ts_1) {
      $this$module.dt(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = mainDomainModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance().vr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(GetAllPupils), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.at(factory_0);
    if (false || $this$module.ts_1) {
      $this$module.dt(factory_0);
    }
    new KoinDefinition($this$module, factory_0);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_1 = mainDomainModule$lambda$lambda_1;
    var scopeQualifier_1 = Companion_getInstance().vr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_1 = Kind_Singleton_getInstance();
    var secondaryTypes_1 = emptyList();
    var def_1 = new BeanDefinition(scopeQualifier_1, getKClass(GetPupilById), null, definition_1, kind_1, secondaryTypes_1);
    var factory_1 = new SingleInstanceFactory(def_1);
    $this$module.at(factory_1);
    if (false || $this$module.ts_1) {
      $this$module.dt(factory_1);
    }
    new KoinDefinition($this$module, factory_1);
    return Unit_instance;
  }
  function mainDomainModule$lambda$lambda($this$single, it) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.bu(getKClass(UserRepository), null, null);
    var tmp = new GetAllPupils(tmp$ret$0);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$1 = $this$single.bu(getKClass(UserRepository), null, null);
    return new MainUseCase(tmp, new GetPupilById(tmp$ret$1));
  }
  function mainDomainModule$lambda$lambda_0($this$single, it) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.bu(getKClass(UserRepository), null, null);
    return new GetAllPupils(tmp$ret$0);
  }
  function mainDomainModule$lambda$lambda_1($this$single, it) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.bu(getKClass(UserRepository), null, null);
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
    this.kj9_1 = id;
    this.lj9_1 = name;
    this.mj9_1 = email;
    this.nj9_1 = avatar;
    this.oj9_1 = born;
    this.pj9_1 = country;
    this.qj9_1 = city;
    this.rj9_1 = video;
    this.sj9_1 = status;
    this.tj9_1 = subscription;
    this.uj9_1 = subscriptionDay;
    this.vj9_1 = subscriptionMonth;
    this.wj9_1 = subscriptionYear;
    this.xj9_1 = currentTask;
    this.yj9_1 = currentTaskProgress;
    this.zj9_1 = roundsList;
    this.aja_1 = rating;
    this.bja_1 = freezeRating;
    this.cja_1 = powermoveRating;
    this.dja_1 = ofpRating;
    this.eja_1 = strechingRating;
    this.fja_1 = battleRating;
    this.gja_1 = battleCurPosition;
    this.hja_1 = battleNewPosition;
    this.ija_1 = newPosition;
    this.jja_1 = currentPosition;
    this.kja_1 = babyfrezze;
    this.lja_1 = chairfrezze;
    this.mja_1 = elbowfrezze;
    this.nja_1 = headfrezze;
    this.oja_1 = headhollowbackfrezze;
    this.pja_1 = hollowbackfrezze;
    this.qja_1 = invertfrezze;
    this.rja_1 = onehandfrezze;
    this.sja_1 = shoulderfrezze;
    this.tja_1 = turtlefrezze;
    this.uja_1 = airflare;
    this.vja_1 = backspin;
    this.wja_1 = cricket;
    this.xja_1 = elbowairflare;
    this.yja_1 = flare;
    this.zja_1 = jackhammer;
    this.ajb_1 = halo;
    this.bjb_1 = headspin;
    this.cjb_1 = munchmill;
    this.djb_1 = ninetyNine;
    this.ejb_1 = swipes;
    this.fjb_1 = turtle;
    this.gjb_1 = ufo;
    this.hjb_1 = web;
    this.ijb_1 = windmill;
    this.jjb_1 = wolf;
    this.kjb_1 = angle;
    this.ljb_1 = bridge;
    this.mjb_1 = finger;
    this.njb_1 = handstand;
    this.ojb_1 = horizont;
    this.pjb_1 = pushups;
    this.qjb_1 = sit_ups;
    this.rjb_1 = pressUpHandstand;
    this.sjb_1 = butterfly;
    this.tjb_1 = fold;
    this.ujb_1 = shoulders;
    this.vjb_1 = twine;
  }
  protoOf(PupilDomainModel).toString = function () {
    return 'PupilDomainModel(id=' + this.kj9_1 + ', name=' + this.lj9_1 + ', email=' + this.mj9_1 + ', avatar=' + this.nj9_1 + ', born=' + this.oj9_1 + ', country=' + this.pj9_1 + ', city=' + this.qj9_1 + ', video=' + this.rj9_1 + ', status=' + this.sj9_1 + ', subscription=' + this.tj9_1.toString() + ', subscriptionDay=' + this.uj9_1 + ', subscriptionMonth=' + this.vj9_1 + ', subscriptionYear=' + this.wj9_1 + ', currentTask=' + this.xj9_1 + ', currentTaskProgress=' + this.yj9_1 + ', roundsList=' + this.zj9_1 + ', rating=' + this.aja_1 + ', freezeRating=' + this.bja_1 + ', powermoveRating=' + this.cja_1 + ', ofpRating=' + this.dja_1 + ', strechingRating=' + this.eja_1 + ', battleRating=' + this.fja_1 + ', battleCurPosition=' + this.gja_1 + ', battleNewPosition=' + this.hja_1 + ', newPosition=' + this.ija_1 + ', currentPosition=' + this.jja_1 + ', babyfrezze=' + this.kja_1 + ', chairfrezze=' + this.lja_1 + ', elbowfrezze=' + this.mja_1 + ', headfrezze=' + this.nja_1 + ', headhollowbackfrezze=' + this.oja_1 + ', hollowbackfrezze=' + this.pja_1 + ', invertfrezze=' + this.qja_1 + ', onehandfrezze=' + this.rja_1 + ', shoulderfrezze=' + this.sja_1 + ', turtlefrezze=' + this.tja_1 + ', airflare=' + this.uja_1 + ', backspin=' + this.vja_1 + ', cricket=' + this.wja_1 + ', elbowairflare=' + this.xja_1 + ', flare=' + this.yja_1 + ', jackhammer=' + this.zja_1 + ', halo=' + this.ajb_1 + ', headspin=' + this.bjb_1 + ', munchmill=' + this.cjb_1 + ', ninetyNine=' + this.djb_1 + ', swipes=' + this.ejb_1 + ', turtle=' + this.fjb_1 + ', ufo=' + this.gjb_1 + ', web=' + this.hjb_1 + ', windmill=' + this.ijb_1 + ', wolf=' + this.jjb_1 + ', angle=' + this.kjb_1 + ', bridge=' + this.ljb_1 + ', finger=' + this.mjb_1 + ', handstand=' + this.njb_1 + ', horizont=' + this.ojb_1 + ', pushups=' + this.pjb_1 + ', sit_ups=' + this.qjb_1 + ', pressUpHandstand=' + this.rjb_1 + ', butterfly=' + this.sjb_1 + ', fold=' + this.tjb_1 + ', shoulders=' + this.ujb_1 + ', twine=' + this.vjb_1 + ')';
  };
  protoOf(PupilDomainModel).hashCode = function () {
    var result = getStringHashCode(this.kj9_1);
    result = imul(result, 31) + getStringHashCode(this.lj9_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mj9_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.nj9_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.oj9_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pj9_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qj9_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rj9_1) | 0;
    result = imul(result, 31) + this.sj9_1 | 0;
    result = imul(result, 31) + this.tj9_1.hashCode() | 0;
    result = imul(result, 31) + this.uj9_1 | 0;
    result = imul(result, 31) + this.vj9_1 | 0;
    result = imul(result, 31) + this.wj9_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.xj9_1) | 0;
    result = imul(result, 31) + this.yj9_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.zj9_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.aja_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bja_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.cja_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dja_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.eja_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.fja_1) | 0;
    result = imul(result, 31) + this.gja_1 | 0;
    result = imul(result, 31) + this.hja_1 | 0;
    result = imul(result, 31) + this.ija_1 | 0;
    result = imul(result, 31) + this.jja_1 | 0;
    result = imul(result, 31) + this.kja_1 | 0;
    result = imul(result, 31) + this.lja_1 | 0;
    result = imul(result, 31) + this.mja_1 | 0;
    result = imul(result, 31) + this.nja_1 | 0;
    result = imul(result, 31) + this.oja_1 | 0;
    result = imul(result, 31) + this.pja_1 | 0;
    result = imul(result, 31) + this.qja_1 | 0;
    result = imul(result, 31) + this.rja_1 | 0;
    result = imul(result, 31) + this.sja_1 | 0;
    result = imul(result, 31) + this.tja_1 | 0;
    result = imul(result, 31) + this.uja_1 | 0;
    result = imul(result, 31) + this.vja_1 | 0;
    result = imul(result, 31) + this.wja_1 | 0;
    result = imul(result, 31) + this.xja_1 | 0;
    result = imul(result, 31) + this.yja_1 | 0;
    result = imul(result, 31) + this.zja_1 | 0;
    result = imul(result, 31) + this.ajb_1 | 0;
    result = imul(result, 31) + this.bjb_1 | 0;
    result = imul(result, 31) + this.cjb_1 | 0;
    result = imul(result, 31) + this.djb_1 | 0;
    result = imul(result, 31) + this.ejb_1 | 0;
    result = imul(result, 31) + this.fjb_1 | 0;
    result = imul(result, 31) + this.gjb_1 | 0;
    result = imul(result, 31) + this.hjb_1 | 0;
    result = imul(result, 31) + this.ijb_1 | 0;
    result = imul(result, 31) + this.jjb_1 | 0;
    result = imul(result, 31) + this.kjb_1 | 0;
    result = imul(result, 31) + this.ljb_1 | 0;
    result = imul(result, 31) + this.mjb_1 | 0;
    result = imul(result, 31) + this.njb_1 | 0;
    result = imul(result, 31) + this.ojb_1 | 0;
    result = imul(result, 31) + this.pjb_1 | 0;
    result = imul(result, 31) + this.qjb_1 | 0;
    result = imul(result, 31) + this.rjb_1 | 0;
    result = imul(result, 31) + this.sjb_1 | 0;
    result = imul(result, 31) + this.tjb_1 | 0;
    result = imul(result, 31) + this.ujb_1 | 0;
    result = imul(result, 31) + this.vjb_1 | 0;
    return result;
  };
  protoOf(PupilDomainModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilDomainModel))
      return false;
    var tmp0_other_with_cast = other instanceof PupilDomainModel ? other : THROW_CCE();
    if (!(this.kj9_1 === tmp0_other_with_cast.kj9_1))
      return false;
    if (!(this.lj9_1 === tmp0_other_with_cast.lj9_1))
      return false;
    if (!(this.mj9_1 === tmp0_other_with_cast.mj9_1))
      return false;
    if (!(this.nj9_1 === tmp0_other_with_cast.nj9_1))
      return false;
    if (!(this.oj9_1 === tmp0_other_with_cast.oj9_1))
      return false;
    if (!(this.pj9_1 === tmp0_other_with_cast.pj9_1))
      return false;
    if (!(this.qj9_1 === tmp0_other_with_cast.qj9_1))
      return false;
    if (!(this.rj9_1 === tmp0_other_with_cast.rj9_1))
      return false;
    if (!(this.sj9_1 === tmp0_other_with_cast.sj9_1))
      return false;
    if (!this.tj9_1.equals(tmp0_other_with_cast.tj9_1))
      return false;
    if (!(this.uj9_1 === tmp0_other_with_cast.uj9_1))
      return false;
    if (!(this.vj9_1 === tmp0_other_with_cast.vj9_1))
      return false;
    if (!(this.wj9_1 === tmp0_other_with_cast.wj9_1))
      return false;
    if (!(this.xj9_1 === tmp0_other_with_cast.xj9_1))
      return false;
    if (!(this.yj9_1 === tmp0_other_with_cast.yj9_1))
      return false;
    if (!(this.zj9_1 === tmp0_other_with_cast.zj9_1))
      return false;
    if (!equals(this.aja_1, tmp0_other_with_cast.aja_1))
      return false;
    if (!equals(this.bja_1, tmp0_other_with_cast.bja_1))
      return false;
    if (!equals(this.cja_1, tmp0_other_with_cast.cja_1))
      return false;
    if (!equals(this.dja_1, tmp0_other_with_cast.dja_1))
      return false;
    if (!equals(this.eja_1, tmp0_other_with_cast.eja_1))
      return false;
    if (!equals(this.fja_1, tmp0_other_with_cast.fja_1))
      return false;
    if (!(this.gja_1 === tmp0_other_with_cast.gja_1))
      return false;
    if (!(this.hja_1 === tmp0_other_with_cast.hja_1))
      return false;
    if (!(this.ija_1 === tmp0_other_with_cast.ija_1))
      return false;
    if (!(this.jja_1 === tmp0_other_with_cast.jja_1))
      return false;
    if (!(this.kja_1 === tmp0_other_with_cast.kja_1))
      return false;
    if (!(this.lja_1 === tmp0_other_with_cast.lja_1))
      return false;
    if (!(this.mja_1 === tmp0_other_with_cast.mja_1))
      return false;
    if (!(this.nja_1 === tmp0_other_with_cast.nja_1))
      return false;
    if (!(this.oja_1 === tmp0_other_with_cast.oja_1))
      return false;
    if (!(this.pja_1 === tmp0_other_with_cast.pja_1))
      return false;
    if (!(this.qja_1 === tmp0_other_with_cast.qja_1))
      return false;
    if (!(this.rja_1 === tmp0_other_with_cast.rja_1))
      return false;
    if (!(this.sja_1 === tmp0_other_with_cast.sja_1))
      return false;
    if (!(this.tja_1 === tmp0_other_with_cast.tja_1))
      return false;
    if (!(this.uja_1 === tmp0_other_with_cast.uja_1))
      return false;
    if (!(this.vja_1 === tmp0_other_with_cast.vja_1))
      return false;
    if (!(this.wja_1 === tmp0_other_with_cast.wja_1))
      return false;
    if (!(this.xja_1 === tmp0_other_with_cast.xja_1))
      return false;
    if (!(this.yja_1 === tmp0_other_with_cast.yja_1))
      return false;
    if (!(this.zja_1 === tmp0_other_with_cast.zja_1))
      return false;
    if (!(this.ajb_1 === tmp0_other_with_cast.ajb_1))
      return false;
    if (!(this.bjb_1 === tmp0_other_with_cast.bjb_1))
      return false;
    if (!(this.cjb_1 === tmp0_other_with_cast.cjb_1))
      return false;
    if (!(this.djb_1 === tmp0_other_with_cast.djb_1))
      return false;
    if (!(this.ejb_1 === tmp0_other_with_cast.ejb_1))
      return false;
    if (!(this.fjb_1 === tmp0_other_with_cast.fjb_1))
      return false;
    if (!(this.gjb_1 === tmp0_other_with_cast.gjb_1))
      return false;
    if (!(this.hjb_1 === tmp0_other_with_cast.hjb_1))
      return false;
    if (!(this.ijb_1 === tmp0_other_with_cast.ijb_1))
      return false;
    if (!(this.jjb_1 === tmp0_other_with_cast.jjb_1))
      return false;
    if (!(this.kjb_1 === tmp0_other_with_cast.kjb_1))
      return false;
    if (!(this.ljb_1 === tmp0_other_with_cast.ljb_1))
      return false;
    if (!(this.mjb_1 === tmp0_other_with_cast.mjb_1))
      return false;
    if (!(this.njb_1 === tmp0_other_with_cast.njb_1))
      return false;
    if (!(this.ojb_1 === tmp0_other_with_cast.ojb_1))
      return false;
    if (!(this.pjb_1 === tmp0_other_with_cast.pjb_1))
      return false;
    if (!(this.qjb_1 === tmp0_other_with_cast.qjb_1))
      return false;
    if (!(this.rjb_1 === tmp0_other_with_cast.rjb_1))
      return false;
    if (!(this.sjb_1 === tmp0_other_with_cast.sjb_1))
      return false;
    if (!(this.tjb_1 === tmp0_other_with_cast.tjb_1))
      return false;
    if (!(this.ujb_1 === tmp0_other_with_cast.ujb_1))
      return false;
    if (!(this.vjb_1 === tmp0_other_with_cast.vjb_1))
      return false;
    return true;
  };
  function toPupilDomainModel(_this__u8e3s4) {
    return new PupilDomainModel(_this__u8e3s4.kj4_1, _this__u8e3s4.lj4_1, _this__u8e3s4.mj4_1, _this__u8e3s4.nj4_1, _this__u8e3s4.oj4_1, _this__u8e3s4.pj4_1, _this__u8e3s4.qj4_1, _this__u8e3s4.rj4_1, _this__u8e3s4.sj4_1, _this__u8e3s4.tj4_1, _this__u8e3s4.uj4_1, _this__u8e3s4.vj4_1, _this__u8e3s4.wj4_1, _this__u8e3s4.xj4_1, _this__u8e3s4.yj4_1, _this__u8e3s4.zj4_1, _this__u8e3s4.aj5_1, _this__u8e3s4.bj5_1, _this__u8e3s4.cj5_1, _this__u8e3s4.dj5_1, _this__u8e3s4.ej5_1, _this__u8e3s4.fj5_1, _this__u8e3s4.gj5_1, _this__u8e3s4.hj5_1, _this__u8e3s4.ij5_1, _this__u8e3s4.jj5_1, _this__u8e3s4.kj5_1, _this__u8e3s4.lj5_1, _this__u8e3s4.mj5_1, _this__u8e3s4.nj5_1, _this__u8e3s4.oj5_1, _this__u8e3s4.pj5_1, _this__u8e3s4.qj5_1, _this__u8e3s4.rj5_1, _this__u8e3s4.sj5_1, _this__u8e3s4.tj5_1, _this__u8e3s4.uj5_1, _this__u8e3s4.vj5_1, _this__u8e3s4.wj5_1, _this__u8e3s4.xj5_1, _this__u8e3s4.yj5_1, _this__u8e3s4.zj5_1, _this__u8e3s4.aj6_1, _this__u8e3s4.bj6_1, _this__u8e3s4.cj6_1, _this__u8e3s4.dj6_1, _this__u8e3s4.ej6_1, _this__u8e3s4.fj6_1, _this__u8e3s4.gj6_1, _this__u8e3s4.hj6_1, _this__u8e3s4.ij6_1, _this__u8e3s4.jj6_1, _this__u8e3s4.kj6_1, _this__u8e3s4.lj6_1, _this__u8e3s4.mj6_1, _this__u8e3s4.nj6_1, _this__u8e3s4.oj6_1, _this__u8e3s4.pj6_1, _this__u8e3s4.qj6_1, _this__u8e3s4.rj6_1, _this__u8e3s4.sj6_1, _this__u8e3s4.tj6_1, _this__u8e3s4.uj6_1, _this__u8e3s4.vj6_1);
  }
  function GetAllPupils$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.ejc_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).h27 = function (value, $completion) {
    var tmp = this.i27(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).ha = function (p1, $completion) {
    return this.h27((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.gjc_1 = this.ejc_1;
            var tmp_1 = this;
            tmp_1.hjc_1 = this.fjc_1;
            this.n9_1 = 1;
            var this_0 = this.hjc_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.g();
            while (tmp0_iterator.h()) {
              var item = tmp0_iterator.i();
              destination.e(toPupilDomainModel(item));
            }

            suspendResult = this.gjc_1.x1r(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).i27 = function (value, completion) {
    var i = new GetAllPupils$getAllPupils$o$collect$slambda(this.ejc_1, completion);
    i.fjc_1 = value;
    return i;
  };
  function GetAllPupils$getAllPupils$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetAllPupils$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.h27(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qjc_1 = _this__u8e3s4;
    this.rjc_1 = collector;
  }
  protoOf($collectCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.sjc_1 = this.rjc_1;
            this.n9_1 = 1;
            var tmp_1 = GetAllPupils$getAllPupils$o$collect$slambda_0(this.sjc_1, null);
            suspendResult = this.qjc_1.tjc_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.ujc_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1r = function (value, $completion) {
    return this.ujc_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.ujc_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function _no_name_provided__qut3iv($this) {
    this.tjc_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).b20 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_no_name_provided__qut3iv).z1p = function (collector, $completion) {
    return this.b20(collector, $completion);
  };
  function GetAllPupils(repository) {
    this.vjc_1 = repository;
  }
  protoOf(GetAllPupils).wjc = function ($completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.vjc_1.wj6();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(this_0);
  };
  function GetPupilById$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.fjd_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).h27 = function (value, $completion) {
    var tmp = this.i27(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).ha = function (p1, $completion) {
    return this.h27((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.hjd_1 = this.fjd_1;
            var tmp_1 = this;
            tmp_1.ijd_1 = this.gjd_1;
            this.n9_1 = 1;
            var pupil = this.ijd_1;
            suspendResult = this.hjd_1.x1r(toPupilDomainModel(pupil), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).i27 = function (value, completion) {
    var i = new GetPupilById$getAllPupils$o$collect$slambda(this.fjd_1, completion);
    i.gjd_1 = value;
    return i;
  };
  function GetPupilById$getAllPupils$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetPupilById$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.h27(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rjd_1 = _this__u8e3s4;
    this.sjd_1 = collector;
  }
  protoOf($collectCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.tjd_1 = this.sjd_1;
            this.n9_1 = 1;
            var tmp_1 = GetPupilById$getAllPupils$o$collect$slambda_0(this.tjd_1, null);
            suspendResult = this.rjd_1.ujd_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.vjd_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x1r = function (value, $completion) {
    return this.vjd_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).s3 = function () {
    return this.vjd_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function _no_name_provided__qut3iv_0($this) {
    this.ujd_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_0).b20 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_no_name_provided__qut3iv_0).z1p = function (collector, $completion) {
    return this.b20(collector, $completion);
  };
  function GetPupilById(repository) {
    this.wjd_1 = repository;
  }
  protoOf(GetPupilById).xjd = function (email, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.wjd_1.xj6(email);
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

//# sourceMappingURL=BreakingKMPApp-module_main-domain_main.js.map
