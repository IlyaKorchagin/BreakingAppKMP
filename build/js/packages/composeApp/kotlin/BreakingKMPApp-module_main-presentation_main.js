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
  var emptyList = kotlin_kotlin.$_$.a8;
  var getKClass = kotlin_kotlin.$_$.f;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var onOptions = kotlin_io_insert_koin_koin_core.$_$.h;
  var MainUseCase = kotlin_BreakingKMPApp_module_main_domain_main.$_$.c;
  var VOID = kotlin_kotlin.$_$.i;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.k;
  var protoOf = kotlin_kotlin.$_$.he;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var compareValues = kotlin_kotlin.$_$.fb;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var KtList = kotlin_kotlin.$_$.m6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var sortedWith = kotlin_kotlin.$_$.pa;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var PupilDomainModel = kotlin_BreakingKMPApp_module_main_domain_main.$_$.b;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var Comparator = kotlin_kotlin.$_$.pi;
  var hashCode = kotlin_kotlin.$_$.zc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var listOf = kotlin_kotlin.$_$.n9;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(PupilModel, 'PupilModel');
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda, CoroutineImpl, VOID, [1]);
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
    var scopeQualifier = Companion_getInstance().vr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(MainViewModel), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.at(factory);
    if (false || $this$module.ts_1) {
      $this$module.dt(factory);
    }
    var tmp$ret$2 = new KoinDefinition($this$module, factory);
    onOptions(tmp$ret$2, null);
    return Unit_instance;
  }
  function mainPresentationModule$lambda$lambda($this$single, it) {
    _init_properties_mainPresentationDi_kt__hu50x4();
    // Inline function 'org.koin.core.module.dsl.new' call
    // Inline function 'org.koin.core.scope.Scope.get' call
    var p0 = $this$single.bu(getKClass(MainUseCase), null, null);
    return new MainViewModel(p0);
  }
  var properties_initialized_mainPresentationDi_kt_pkgdh6;
  function _init_properties_mainPresentationDi_kt__hu50x4() {
    if (!properties_initialized_mainPresentationDi_kt_pkgdh6) {
      properties_initialized_mainPresentationDi_kt_pkgdh6 = true;
      mainPresentationModule = module_0(VOID, mainPresentationModule$lambda);
    }
  }
  function PupilModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine) {
    this.yjd_1 = id;
    this.zjd_1 = name;
    this.aje_1 = email;
    this.bje_1 = avatar;
    this.cje_1 = born;
    this.dje_1 = country;
    this.eje_1 = city;
    this.fje_1 = video;
    this.gje_1 = status;
    this.hje_1 = subscription;
    this.ije_1 = subscriptionDay;
    this.jje_1 = subscriptionMonth;
    this.kje_1 = subscriptionYear;
    this.lje_1 = currentTask;
    this.mje_1 = currentTaskProgress;
    this.nje_1 = roundsList;
    this.oje_1 = rating;
    this.pje_1 = freezeRating;
    this.qje_1 = powermoveRating;
    this.rje_1 = ofpRating;
    this.sje_1 = strechingRating;
    this.tje_1 = battleRating;
    this.uje_1 = battleCurPosition;
    this.vje_1 = battleNewPosition;
    this.wje_1 = newPosition;
    this.xje_1 = currentPosition;
    this.yje_1 = babyfrezze;
    this.zje_1 = chairfrezze;
    this.ajf_1 = elbowfrezze;
    this.bjf_1 = headfrezze;
    this.cjf_1 = headhollowbackfrezze;
    this.djf_1 = hollowbackfrezze;
    this.ejf_1 = invertfrezze;
    this.fjf_1 = onehandfrezze;
    this.gjf_1 = shoulderfrezze;
    this.hjf_1 = turtlefrezze;
    this.ijf_1 = airflare;
    this.jjf_1 = backspin;
    this.kjf_1 = cricket;
    this.ljf_1 = elbowairflare;
    this.mjf_1 = flare;
    this.njf_1 = jackhammer;
    this.ojf_1 = halo;
    this.pjf_1 = headspin;
    this.qjf_1 = munchmill;
    this.rjf_1 = ninetyNine;
    this.sjf_1 = swipes;
    this.tjf_1 = turtle;
    this.ujf_1 = ufo;
    this.vjf_1 = web;
    this.wjf_1 = windmill;
    this.xjf_1 = wolf;
    this.yjf_1 = angle;
    this.zjf_1 = bridge;
    this.ajg_1 = finger;
    this.bjg_1 = handstand;
    this.cjg_1 = horizont;
    this.djg_1 = pushups;
    this.ejg_1 = sit_ups;
    this.fjg_1 = pressUpHandstand;
    this.gjg_1 = butterfly;
    this.hjg_1 = fold;
    this.ijg_1 = shoulders;
    this.jjg_1 = twine;
  }
  protoOf(PupilModel).toString = function () {
    return 'PupilModel(id=' + this.yjd_1 + ', name=' + this.zjd_1 + ', email=' + this.aje_1 + ', avatar=' + this.bje_1 + ', born=' + this.cje_1 + ', country=' + this.dje_1 + ', city=' + this.eje_1 + ', video=' + this.fje_1 + ', status=' + this.gje_1 + ', subscription=' + this.hje_1.toString() + ', subscriptionDay=' + this.ije_1 + ', subscriptionMonth=' + this.jje_1 + ', subscriptionYear=' + this.kje_1 + ', currentTask=' + this.lje_1 + ', currentTaskProgress=' + this.mje_1 + ', roundsList=' + this.nje_1 + ', rating=' + this.oje_1 + ', freezeRating=' + this.pje_1 + ', powermoveRating=' + this.qje_1 + ', ofpRating=' + this.rje_1 + ', strechingRating=' + this.sje_1 + ', battleRating=' + this.tje_1 + ', battleCurPosition=' + this.uje_1 + ', battleNewPosition=' + this.vje_1 + ', newPosition=' + this.wje_1 + ', currentPosition=' + this.xje_1 + ', babyfrezze=' + this.yje_1 + ', chairfrezze=' + this.zje_1 + ', elbowfrezze=' + this.ajf_1 + ', headfrezze=' + this.bjf_1 + ', headhollowbackfrezze=' + this.cjf_1 + ', hollowbackfrezze=' + this.djf_1 + ', invertfrezze=' + this.ejf_1 + ', onehandfrezze=' + this.fjf_1 + ', shoulderfrezze=' + this.gjf_1 + ', turtlefrezze=' + this.hjf_1 + ', airflare=' + this.ijf_1 + ', backspin=' + this.jjf_1 + ', cricket=' + this.kjf_1 + ', elbowairflare=' + this.ljf_1 + ', flare=' + this.mjf_1 + ', jackhammer=' + this.njf_1 + ', halo=' + this.ojf_1 + ', headspin=' + this.pjf_1 + ', munchmill=' + this.qjf_1 + ', ninetyNine=' + this.rjf_1 + ', swipes=' + this.sjf_1 + ', turtle=' + this.tjf_1 + ', ufo=' + this.ujf_1 + ', web=' + this.vjf_1 + ', windmill=' + this.wjf_1 + ', wolf=' + this.xjf_1 + ', angle=' + this.yjf_1 + ', bridge=' + this.zjf_1 + ', finger=' + this.ajg_1 + ', handstand=' + this.bjg_1 + ', horizont=' + this.cjg_1 + ', pushups=' + this.djg_1 + ', sit_ups=' + this.ejg_1 + ', pressUpHandstand=' + this.fjg_1 + ', butterfly=' + this.gjg_1 + ', fold=' + this.hjg_1 + ', shoulders=' + this.ijg_1 + ', twine=' + this.jjg_1 + ')';
  };
  protoOf(PupilModel).hashCode = function () {
    var result = getStringHashCode(this.yjd_1);
    result = imul(result, 31) + getStringHashCode(this.zjd_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.aje_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.bje_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.cje_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.dje_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.eje_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.fje_1) | 0;
    result = imul(result, 31) + this.gje_1 | 0;
    result = imul(result, 31) + this.hje_1.hashCode() | 0;
    result = imul(result, 31) + this.ije_1 | 0;
    result = imul(result, 31) + this.jje_1 | 0;
    result = imul(result, 31) + this.kje_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.lje_1) | 0;
    result = imul(result, 31) + this.mje_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.nje_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.oje_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.pje_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.qje_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.rje_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.sje_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.tje_1) | 0;
    result = imul(result, 31) + this.uje_1 | 0;
    result = imul(result, 31) + this.vje_1 | 0;
    result = imul(result, 31) + this.wje_1 | 0;
    result = imul(result, 31) + this.xje_1 | 0;
    result = imul(result, 31) + this.yje_1 | 0;
    result = imul(result, 31) + this.zje_1 | 0;
    result = imul(result, 31) + this.ajf_1 | 0;
    result = imul(result, 31) + this.bjf_1 | 0;
    result = imul(result, 31) + this.cjf_1 | 0;
    result = imul(result, 31) + this.djf_1 | 0;
    result = imul(result, 31) + this.ejf_1 | 0;
    result = imul(result, 31) + this.fjf_1 | 0;
    result = imul(result, 31) + this.gjf_1 | 0;
    result = imul(result, 31) + this.hjf_1 | 0;
    result = imul(result, 31) + this.ijf_1 | 0;
    result = imul(result, 31) + this.jjf_1 | 0;
    result = imul(result, 31) + this.kjf_1 | 0;
    result = imul(result, 31) + this.ljf_1 | 0;
    result = imul(result, 31) + this.mjf_1 | 0;
    result = imul(result, 31) + this.njf_1 | 0;
    result = imul(result, 31) + this.ojf_1 | 0;
    result = imul(result, 31) + this.pjf_1 | 0;
    result = imul(result, 31) + this.qjf_1 | 0;
    result = imul(result, 31) + this.rjf_1 | 0;
    result = imul(result, 31) + this.sjf_1 | 0;
    result = imul(result, 31) + this.tjf_1 | 0;
    result = imul(result, 31) + this.ujf_1 | 0;
    result = imul(result, 31) + this.vjf_1 | 0;
    result = imul(result, 31) + this.wjf_1 | 0;
    result = imul(result, 31) + this.xjf_1 | 0;
    result = imul(result, 31) + this.yjf_1 | 0;
    result = imul(result, 31) + this.zjf_1 | 0;
    result = imul(result, 31) + this.ajg_1 | 0;
    result = imul(result, 31) + this.bjg_1 | 0;
    result = imul(result, 31) + this.cjg_1 | 0;
    result = imul(result, 31) + this.djg_1 | 0;
    result = imul(result, 31) + this.ejg_1 | 0;
    result = imul(result, 31) + this.fjg_1 | 0;
    result = imul(result, 31) + this.gjg_1 | 0;
    result = imul(result, 31) + this.hjg_1 | 0;
    result = imul(result, 31) + this.ijg_1 | 0;
    result = imul(result, 31) + this.jjg_1 | 0;
    return result;
  };
  protoOf(PupilModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilModel))
      return false;
    var tmp0_other_with_cast = other instanceof PupilModel ? other : THROW_CCE();
    if (!(this.yjd_1 === tmp0_other_with_cast.yjd_1))
      return false;
    if (!(this.zjd_1 === tmp0_other_with_cast.zjd_1))
      return false;
    if (!(this.aje_1 === tmp0_other_with_cast.aje_1))
      return false;
    if (!(this.bje_1 === tmp0_other_with_cast.bje_1))
      return false;
    if (!(this.cje_1 === tmp0_other_with_cast.cje_1))
      return false;
    if (!(this.dje_1 === tmp0_other_with_cast.dje_1))
      return false;
    if (!(this.eje_1 === tmp0_other_with_cast.eje_1))
      return false;
    if (!(this.fje_1 === tmp0_other_with_cast.fje_1))
      return false;
    if (!(this.gje_1 === tmp0_other_with_cast.gje_1))
      return false;
    if (!this.hje_1.equals(tmp0_other_with_cast.hje_1))
      return false;
    if (!(this.ije_1 === tmp0_other_with_cast.ije_1))
      return false;
    if (!(this.jje_1 === tmp0_other_with_cast.jje_1))
      return false;
    if (!(this.kje_1 === tmp0_other_with_cast.kje_1))
      return false;
    if (!(this.lje_1 === tmp0_other_with_cast.lje_1))
      return false;
    if (!(this.mje_1 === tmp0_other_with_cast.mje_1))
      return false;
    if (!(this.nje_1 === tmp0_other_with_cast.nje_1))
      return false;
    if (!equals(this.oje_1, tmp0_other_with_cast.oje_1))
      return false;
    if (!equals(this.pje_1, tmp0_other_with_cast.pje_1))
      return false;
    if (!equals(this.qje_1, tmp0_other_with_cast.qje_1))
      return false;
    if (!equals(this.rje_1, tmp0_other_with_cast.rje_1))
      return false;
    if (!equals(this.sje_1, tmp0_other_with_cast.sje_1))
      return false;
    if (!equals(this.tje_1, tmp0_other_with_cast.tje_1))
      return false;
    if (!(this.uje_1 === tmp0_other_with_cast.uje_1))
      return false;
    if (!(this.vje_1 === tmp0_other_with_cast.vje_1))
      return false;
    if (!(this.wje_1 === tmp0_other_with_cast.wje_1))
      return false;
    if (!(this.xje_1 === tmp0_other_with_cast.xje_1))
      return false;
    if (!(this.yje_1 === tmp0_other_with_cast.yje_1))
      return false;
    if (!(this.zje_1 === tmp0_other_with_cast.zje_1))
      return false;
    if (!(this.ajf_1 === tmp0_other_with_cast.ajf_1))
      return false;
    if (!(this.bjf_1 === tmp0_other_with_cast.bjf_1))
      return false;
    if (!(this.cjf_1 === tmp0_other_with_cast.cjf_1))
      return false;
    if (!(this.djf_1 === tmp0_other_with_cast.djf_1))
      return false;
    if (!(this.ejf_1 === tmp0_other_with_cast.ejf_1))
      return false;
    if (!(this.fjf_1 === tmp0_other_with_cast.fjf_1))
      return false;
    if (!(this.gjf_1 === tmp0_other_with_cast.gjf_1))
      return false;
    if (!(this.hjf_1 === tmp0_other_with_cast.hjf_1))
      return false;
    if (!(this.ijf_1 === tmp0_other_with_cast.ijf_1))
      return false;
    if (!(this.jjf_1 === tmp0_other_with_cast.jjf_1))
      return false;
    if (!(this.kjf_1 === tmp0_other_with_cast.kjf_1))
      return false;
    if (!(this.ljf_1 === tmp0_other_with_cast.ljf_1))
      return false;
    if (!(this.mjf_1 === tmp0_other_with_cast.mjf_1))
      return false;
    if (!(this.njf_1 === tmp0_other_with_cast.njf_1))
      return false;
    if (!(this.ojf_1 === tmp0_other_with_cast.ojf_1))
      return false;
    if (!(this.pjf_1 === tmp0_other_with_cast.pjf_1))
      return false;
    if (!(this.qjf_1 === tmp0_other_with_cast.qjf_1))
      return false;
    if (!(this.rjf_1 === tmp0_other_with_cast.rjf_1))
      return false;
    if (!(this.sjf_1 === tmp0_other_with_cast.sjf_1))
      return false;
    if (!(this.tjf_1 === tmp0_other_with_cast.tjf_1))
      return false;
    if (!(this.ujf_1 === tmp0_other_with_cast.ujf_1))
      return false;
    if (!(this.vjf_1 === tmp0_other_with_cast.vjf_1))
      return false;
    if (!(this.wjf_1 === tmp0_other_with_cast.wjf_1))
      return false;
    if (!(this.xjf_1 === tmp0_other_with_cast.xjf_1))
      return false;
    if (!(this.yjf_1 === tmp0_other_with_cast.yjf_1))
      return false;
    if (!(this.zjf_1 === tmp0_other_with_cast.zjf_1))
      return false;
    if (!(this.ajg_1 === tmp0_other_with_cast.ajg_1))
      return false;
    if (!(this.bjg_1 === tmp0_other_with_cast.bjg_1))
      return false;
    if (!(this.cjg_1 === tmp0_other_with_cast.cjg_1))
      return false;
    if (!(this.djg_1 === tmp0_other_with_cast.djg_1))
      return false;
    if (!(this.ejg_1 === tmp0_other_with_cast.ejg_1))
      return false;
    if (!(this.fjg_1 === tmp0_other_with_cast.fjg_1))
      return false;
    if (!(this.gjg_1 === tmp0_other_with_cast.gjg_1))
      return false;
    if (!(this.hjg_1 === tmp0_other_with_cast.hjg_1))
      return false;
    if (!(this.ijg_1 === tmp0_other_with_cast.ijg_1))
      return false;
    if (!(this.jjg_1 === tmp0_other_with_cast.jjg_1))
      return false;
    return true;
  };
  function toPupilModel(_this__u8e3s4) {
    return new PupilModel(_this__u8e3s4.kj9_1, _this__u8e3s4.lj9_1, _this__u8e3s4.mj9_1, _this__u8e3s4.nj9_1, _this__u8e3s4.oj9_1, _this__u8e3s4.pj9_1, _this__u8e3s4.qj9_1, _this__u8e3s4.rj9_1, _this__u8e3s4.sj9_1, _this__u8e3s4.tj9_1, _this__u8e3s4.uj9_1, _this__u8e3s4.vj9_1, _this__u8e3s4.wj9_1, _this__u8e3s4.xj9_1, _this__u8e3s4.yj9_1, _this__u8e3s4.zj9_1, _this__u8e3s4.aja_1, _this__u8e3s4.bja_1, _this__u8e3s4.cja_1, _this__u8e3s4.dja_1, _this__u8e3s4.eja_1, _this__u8e3s4.fja_1, _this__u8e3s4.gja_1, _this__u8e3s4.hja_1, _this__u8e3s4.ija_1, _this__u8e3s4.jja_1, _this__u8e3s4.kja_1, _this__u8e3s4.lja_1, _this__u8e3s4.mja_1, _this__u8e3s4.nja_1, _this__u8e3s4.oja_1, _this__u8e3s4.pja_1, _this__u8e3s4.qja_1, _this__u8e3s4.rja_1, _this__u8e3s4.sja_1, _this__u8e3s4.tja_1, _this__u8e3s4.uja_1, _this__u8e3s4.vja_1, _this__u8e3s4.wja_1, _this__u8e3s4.xja_1, _this__u8e3s4.yja_1, _this__u8e3s4.zja_1, _this__u8e3s4.ajb_1, _this__u8e3s4.bjb_1, _this__u8e3s4.cjb_1, _this__u8e3s4.djb_1, _this__u8e3s4.ejb_1, _this__u8e3s4.fjb_1, _this__u8e3s4.gjb_1, _this__u8e3s4.hjb_1, _this__u8e3s4.ijb_1, _this__u8e3s4.jjb_1, _this__u8e3s4.kjb_1, _this__u8e3s4.ljb_1, _this__u8e3s4.mjb_1, _this__u8e3s4.njb_1, _this__u8e3s4.ojb_1, _this__u8e3s4.pjb_1, _this__u8e3s4.qjb_1, _this__u8e3s4.rjb_1, _this__u8e3s4.sjb_1, _this__u8e3s4.tjb_1, _this__u8e3s4.ujb_1, _this__u8e3s4.vjb_1);
  }
  function MainViewModel$loadData$slambda$slambda$slambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp = b.oje_1;
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.oje_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function MainViewModel$loadData$slambda$slambda$slambda(this$0, resultContinuation) {
    this.sjg_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).ujg = function (pupilsList, $completion) {
    var tmp = this.vjg(pupilsList, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).ha = function (p1, $completion) {
    return this.ujg((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var this_0 = this.tjg_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.g();
          while (tmp0_iterator.h()) {
            var item = tmp0_iterator.i();
            destination.e(toPupilModel(item));
          }
          var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda$lambda;
          this.sjg_1.zjg_1.n1v(sortedWith(destination, new sam$kotlin_Comparator$0(tmp_0)));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).vjg = function (pupilsList, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda(this.sjg_1, completion);
    i.tjg_1 = pupilsList;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda(this$0, resultContinuation);
    var l = function (pupilsList, $completion) {
      return i.ujg(pupilsList, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_1(this$0, resultContinuation) {
    this.pjh_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).rjh = function (it, $completion) {
    var tmp = this.sjh(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).ha = function (p1, $completion) {
    return this.rjh(p1 instanceof PupilDomainModel ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          this.pjh_1.bjh_1.n1v(toPupilModel(this.qjh_1));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).sjh = function (it, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this.pjh_1, completion);
    i.qjh_1 = it;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.rjh(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda(this$0, resultContinuation) {
    this.bji_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(MainViewModel$loadData$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bji_1.xjg_1.ij9_1.wjc(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dji_1 = suspendResult;
            this.n9_1 = 2;
            var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda_0(this.bji_1, null);
            suspendResult = this.dji_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MainViewModel$loadData$slambda$slambda).f1x = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda(this.bji_1, completion);
    i.cji_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_1(this$0, resultContinuation) {
    this.mji_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_1).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.mji_1.xjg_1.jj9_1.xjd('hustleril@yandex.ru', this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.oji_1 = suspendResult;
            this.n9_1 = 2;
            var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda_2(this.mji_1, null);
            suspendResult = this.oji_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).f1x = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_1(this.mji_1, completion);
    i.nji_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadData($this) {
    launch($this.yjg_1, VOID, VOID, MainViewModel$loadData$slambda_0($this, null));
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.pji_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.pji_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.pji_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.qji_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1r = function (value, $completion) {
    return this.qji_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.qji_1;
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
  function MainViewModel$loadData$slambda(this$0, resultContinuation) {
    this.zji_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(MainViewModel$loadData$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.bjj_1 = launch(this.zji_1.yjg_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_0(this.zji_1, null));
            var tmp_1 = this;
            tmp_1.cjj_1 = launch(this.zji_1.yjg_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_2(this.zji_1, null));
            this.djj_1 = listOf([this.bjj_1, this.cjj_1]);
            this.ejj_1 = this.djj_1;
            var tmp0_iterator = this.ejj_1.g();
            while (tmp0_iterator.h()) {
              var element = tmp0_iterator.i();
              element.z14();
            }

            this.n9_1 = 1;
            suspendResult = joinAll(this.ejj_1, this);
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
  protoOf(MainViewModel$loadData$slambda).f1x = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda(this.zji_1, completion);
    i.ajj_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel(mainUseCase) {
    ViewModel_init_$Init$(this);
    this.xjg_1 = mainUseCase;
    this.yjg_1 = CoroutineScope_0(Dispatchers_getInstance().n1g().hj(SupervisorJob()));
    this.zjg_1 = MutableStateFlow(emptyList());
    this.ajh_1 = this.zjg_1;
    this.bjh_1 = MutableStateFlow(null);
    this.cjh_1 = this.bjh_1;
    this.djh_1 = MutableStateFlow(379);
    this.ejh_1 = this.djh_1;
    this.fjh_1 = MutableStateFlow(640);
    this.gjh_1 = this.fjh_1;
    loadData(this);
  }
  protoOf(MainViewModel).fjj = function (width) {
    this.djh_1.n1v(width);
  };
  protoOf(MainViewModel).gjj = function (height) {
    this.fjh_1.n1v(height);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_mainPresentationModule;
  _.$_$.b = MainViewModel;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-presentation_main.js.map
