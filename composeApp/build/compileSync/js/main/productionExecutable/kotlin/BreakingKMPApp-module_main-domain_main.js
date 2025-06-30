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
  var toString = kotlin_kotlin.$_$.jf;
  var protoOf = kotlin_kotlin.$_$.ff;
  var hashCode = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.o8;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var UserRepository = kotlin_BreakingKMPApp_module_main_data_main.$_$.b;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var isInterface = kotlin_kotlin.$_$.oe;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(MainUseCase, 'MainUseCase');
  initMetadataForClass(BboyDomainModel, 'BboyDomainModel');
  initMetadataForClass(ElementDomainModel, 'ElementDomainModel', ElementDomainModel);
  initMetadataForClass(PupilDomainModel, 'PupilDomainModel');
  initMetadataForClass(CreateNewPupil, 'CreateNewPupil', VOID, VOID, VOID, [2]);
  initMetadataForLambda(GetAllPupils$getAllPupils$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetAllPupils, 'GetAllPupils', VOID, VOID, VOID, [0]);
  initMetadataForLambda(GetBboysList$getBboysList$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetBboysList, 'GetBboysList');
  initMetadataForLambda(GetFreezeElements$getFreezeElements$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetFreezeElements, 'GetFreezeElements');
  initMetadataForLambda(GetOfpElements$getOfpElements$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_2, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetOfpElements, 'GetOfpElements');
  initMetadataForLambda(GetPowerElements$getPowerElements$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_3, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetPowerElements, 'GetPowerElements');
  initMetadataForLambda(GetPupilById$getAllPupils$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$5, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_4, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetPupilById, 'GetPupilById', VOID, VOID, VOID, [1]);
  initMetadataForLambda(GetStretchElements$getStretchElements$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$6, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_5, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_5, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(GetStretchElements, 'GetStretchElements');
  initMetadataForClass(UploadAvatar, 'UploadAvatar', VOID, VOID, VOID, [2]);
  //endregion
  function MainUseCase(getAllPupils, getPupilById, getFreezeElements, getPowerElements, getOfpElements, getStretchElements, getBboysList, createNewPupil, uploadAvatar) {
    this.env_1 = getAllPupils;
    this.fnv_1 = getPupilById;
    this.gnv_1 = getFreezeElements;
    this.hnv_1 = getPowerElements;
    this.inv_1 = getOfpElements;
    this.jnv_1 = getStretchElements;
    this.knv_1 = getBboysList;
    this.lnv_1 = createNewPupil;
    this.mnv_1 = uploadAvatar;
  }
  protoOf(MainUseCase).toString = function () {
    return 'MainUseCase(getAllPupils=' + toString(this.env_1) + ', getPupilById=' + toString(this.fnv_1) + ', getFreezeElements=' + toString(this.gnv_1) + ', getPowerElements=' + toString(this.hnv_1) + ', getOfpElements=' + toString(this.inv_1) + ', getStretchElements=' + toString(this.jnv_1) + ', getBboysList=' + toString(this.knv_1) + ', createNewPupil=' + toString(this.lnv_1) + ', uploadAvatar=' + toString(this.mnv_1) + ')';
  };
  protoOf(MainUseCase).hashCode = function () {
    var result = hashCode(this.env_1);
    result = imul(result, 31) + hashCode(this.fnv_1) | 0;
    result = imul(result, 31) + hashCode(this.gnv_1) | 0;
    result = imul(result, 31) + hashCode(this.hnv_1) | 0;
    result = imul(result, 31) + hashCode(this.inv_1) | 0;
    result = imul(result, 31) + hashCode(this.jnv_1) | 0;
    result = imul(result, 31) + hashCode(this.knv_1) | 0;
    result = imul(result, 31) + hashCode(this.lnv_1) | 0;
    result = imul(result, 31) + hashCode(this.mnv_1) | 0;
    return result;
  };
  protoOf(MainUseCase).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MainUseCase))
      return false;
    var tmp0_other_with_cast = other instanceof MainUseCase ? other : THROW_CCE();
    if (!equals(this.env_1, tmp0_other_with_cast.env_1))
      return false;
    if (!equals(this.fnv_1, tmp0_other_with_cast.fnv_1))
      return false;
    if (!equals(this.gnv_1, tmp0_other_with_cast.gnv_1))
      return false;
    if (!equals(this.hnv_1, tmp0_other_with_cast.hnv_1))
      return false;
    if (!equals(this.inv_1, tmp0_other_with_cast.inv_1))
      return false;
    if (!equals(this.jnv_1, tmp0_other_with_cast.jnv_1))
      return false;
    if (!equals(this.knv_1, tmp0_other_with_cast.knv_1))
      return false;
    if (!equals(this.lnv_1, tmp0_other_with_cast.lnv_1))
      return false;
    if (!equals(this.mnv_1, tmp0_other_with_cast.mnv_1))
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
    var scopeQualifier = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(MainUseCase), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.ft(factory);
    if (false || $this$module.ys_1) {
      $this$module.it(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_instance;
  }
  function mainDomainModule$lambda$lambda($this$single, it) {
    _init_properties_mainDomainDi_kt__ae0e6a();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp = new GetAllPupils(tmp$ret$0);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$1 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp_0 = new GetPupilById(tmp$ret$1);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$2 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp_1 = new GetFreezeElements(tmp$ret$2);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$3 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp_2 = new GetPowerElements(tmp$ret$3);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$4 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp_3 = new GetOfpElements(tmp$ret$4);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$5 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp_4 = new GetStretchElements(tmp$ret$5);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$6 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp_5 = new GetBboysList(tmp$ret$6);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$7 = $this$single.gu(getKClass(UserRepository), null, null);
    var tmp_6 = new CreateNewPupil(tmp$ret$7);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$8 = $this$single.gu(getKClass(UserRepository), null, null);
    return new MainUseCase(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, new UploadAvatar(tmp$ret$8));
  }
  var properties_initialized_mainDomainDi_kt_d44dss;
  function _init_properties_mainDomainDi_kt__ae0e6a() {
    if (!properties_initialized_mainDomainDi_kt_d44dss) {
      properties_initialized_mainDomainDi_kt_d44dss = true;
      mainDomainModule = module_0(VOID, mainDomainModule$lambda);
    }
  }
  function BboyDomainModel(name, born, rating, avatar, country, video, description, shortDescription) {
    this.nnv_1 = name;
    this.onv_1 = born;
    this.pnv_1 = rating;
    this.qnv_1 = avatar;
    this.rnv_1 = country;
    this.snv_1 = video;
    this.tnv_1 = description;
    this.unv_1 = shortDescription;
  }
  protoOf(BboyDomainModel).toString = function () {
    return 'BboyDomainModel(name=' + this.nnv_1 + ', born=' + this.onv_1 + ', rating=' + this.pnv_1 + ', avatar=' + this.qnv_1 + ', country=' + this.rnv_1 + ', video=' + this.snv_1 + ', description=' + this.tnv_1 + ', shortDescription=' + this.unv_1 + ')';
  };
  protoOf(BboyDomainModel).hashCode = function () {
    var result = getStringHashCode(this.nnv_1);
    result = imul(result, 31) + getStringHashCode(this.onv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pnv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qnv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rnv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.snv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.tnv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.unv_1) | 0;
    return result;
  };
  protoOf(BboyDomainModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BboyDomainModel))
      return false;
    var tmp0_other_with_cast = other instanceof BboyDomainModel ? other : THROW_CCE();
    if (!(this.nnv_1 === tmp0_other_with_cast.nnv_1))
      return false;
    if (!(this.onv_1 === tmp0_other_with_cast.onv_1))
      return false;
    if (!(this.pnv_1 === tmp0_other_with_cast.pnv_1))
      return false;
    if (!(this.qnv_1 === tmp0_other_with_cast.qnv_1))
      return false;
    if (!(this.rnv_1 === tmp0_other_with_cast.rnv_1))
      return false;
    if (!(this.snv_1 === tmp0_other_with_cast.snv_1))
      return false;
    if (!(this.tnv_1 === tmp0_other_with_cast.tnv_1))
      return false;
    if (!(this.unv_1 === tmp0_other_with_cast.unv_1))
      return false;
    return true;
  };
  function toBboyDomainModel(_this__u8e3s4) {
    return new BboyDomainModel(_this__u8e3s4.rni_1, _this__u8e3s4.sni_1, _this__u8e3s4.tni_1, _this__u8e3s4.uni_1, _this__u8e3s4.vni_1, _this__u8e3s4.wni_1, _this__u8e3s4.xni_1, _this__u8e3s4.yni_1);
  }
  function ElementDomainModel(title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl) {
    title = title === VOID ? '' : title;
    image = image === VOID ? '' : image;
    description = description === VOID ? '' : description;
    blockDescription = blockDescription === VOID ? '' : blockDescription;
    progress10 = progress10 === VOID ? '' : progress10;
    progress20 = progress20 === VOID ? '' : progress20;
    progress30 = progress30 === VOID ? '' : progress30;
    progress40 = progress40 === VOID ? '' : progress40;
    progress50 = progress50 === VOID ? '' : progress50;
    progress60 = progress60 === VOID ? '' : progress60;
    progress70 = progress70 === VOID ? '' : progress70;
    progress80 = progress80 === VOID ? '' : progress80;
    progress90 = progress90 === VOID ? '' : progress90;
    progress100 = progress100 === VOID ? '' : progress100;
    videoUrl = videoUrl === VOID ? '' : videoUrl;
    this.vnv_1 = title;
    this.wnv_1 = image;
    this.xnv_1 = description;
    this.ynv_1 = blockDescription;
    this.znv_1 = progress10;
    this.anw_1 = progress20;
    this.bnw_1 = progress30;
    this.cnw_1 = progress40;
    this.dnw_1 = progress50;
    this.enw_1 = progress60;
    this.fnw_1 = progress70;
    this.gnw_1 = progress80;
    this.hnw_1 = progress90;
    this.inw_1 = progress100;
    this.jnw_1 = videoUrl;
  }
  protoOf(ElementDomainModel).toString = function () {
    return 'ElementDomainModel(title=' + this.vnv_1 + ', image=' + this.wnv_1 + ', description=' + this.xnv_1 + ', blockDescription=' + this.ynv_1 + ', progress10=' + this.znv_1 + ', progress20=' + this.anw_1 + ', progress30=' + this.bnw_1 + ', progress40=' + this.cnw_1 + ', progress50=' + this.dnw_1 + ', progress60=' + this.enw_1 + ', progress70=' + this.fnw_1 + ', progress80=' + this.gnw_1 + ', progress90=' + this.hnw_1 + ', progress100=' + this.inw_1 + ', videoUrl=' + this.jnw_1 + ')';
  };
  protoOf(ElementDomainModel).hashCode = function () {
    var result = getStringHashCode(this.vnv_1);
    result = imul(result, 31) + getStringHashCode(this.wnv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xnv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ynv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.znv_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.anw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.bnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.cnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.dnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.enw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.fnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.gnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.hnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.inw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.jnw_1) | 0;
    return result;
  };
  protoOf(ElementDomainModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDomainModel))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDomainModel ? other : THROW_CCE();
    if (!(this.vnv_1 === tmp0_other_with_cast.vnv_1))
      return false;
    if (!(this.wnv_1 === tmp0_other_with_cast.wnv_1))
      return false;
    if (!(this.xnv_1 === tmp0_other_with_cast.xnv_1))
      return false;
    if (!(this.ynv_1 === tmp0_other_with_cast.ynv_1))
      return false;
    if (!(this.znv_1 === tmp0_other_with_cast.znv_1))
      return false;
    if (!(this.anw_1 === tmp0_other_with_cast.anw_1))
      return false;
    if (!(this.bnw_1 === tmp0_other_with_cast.bnw_1))
      return false;
    if (!(this.cnw_1 === tmp0_other_with_cast.cnw_1))
      return false;
    if (!(this.dnw_1 === tmp0_other_with_cast.dnw_1))
      return false;
    if (!(this.enw_1 === tmp0_other_with_cast.enw_1))
      return false;
    if (!(this.fnw_1 === tmp0_other_with_cast.fnw_1))
      return false;
    if (!(this.gnw_1 === tmp0_other_with_cast.gnw_1))
      return false;
    if (!(this.hnw_1 === tmp0_other_with_cast.hnw_1))
      return false;
    if (!(this.inw_1 === tmp0_other_with_cast.inw_1))
      return false;
    if (!(this.jnw_1 === tmp0_other_with_cast.jnw_1))
      return false;
    return true;
  };
  function toElementDomainModel(_this__u8e3s4) {
    return new ElementDomainModel(_this__u8e3s4.bnj_1, _this__u8e3s4.cnj_1, _this__u8e3s4.dnj_1, _this__u8e3s4.enj_1, _this__u8e3s4.fnj_1, _this__u8e3s4.gnj_1, _this__u8e3s4.hnj_1, _this__u8e3s4.inj_1, _this__u8e3s4.jnj_1, _this__u8e3s4.knj_1, _this__u8e3s4.lnj_1, _this__u8e3s4.mnj_1, _this__u8e3s4.nnj_1, _this__u8e3s4.onj_1, _this__u8e3s4.pnj_1);
  }
  function PupilDomainModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, pressUpHandstand, butterfly, fold, shoulders, twine) {
    this.knw_1 = id;
    this.lnw_1 = name;
    this.mnw_1 = email;
    this.nnw_1 = avatar;
    this.onw_1 = born;
    this.pnw_1 = country;
    this.qnw_1 = city;
    this.rnw_1 = video;
    this.snw_1 = status;
    this.tnw_1 = subscription;
    this.unw_1 = subscriptionDay;
    this.vnw_1 = subscriptionMonth;
    this.wnw_1 = subscriptionYear;
    this.xnw_1 = currentTask;
    this.ynw_1 = currentTaskProgress;
    this.znw_1 = roundsList;
    this.anx_1 = rating;
    this.bnx_1 = freezeRating;
    this.cnx_1 = powermoveRating;
    this.dnx_1 = ofpRating;
    this.enx_1 = strechingRating;
    this.fnx_1 = battleRating;
    this.gnx_1 = battleCurPosition;
    this.hnx_1 = battleNewPosition;
    this.inx_1 = newPosition;
    this.jnx_1 = currentPosition;
    this.knx_1 = babyfrezze;
    this.lnx_1 = chairfrezze;
    this.mnx_1 = elbowfrezze;
    this.nnx_1 = headfrezze;
    this.onx_1 = headhollowbackfrezze;
    this.pnx_1 = hollowbackfrezze;
    this.qnx_1 = invertfrezze;
    this.rnx_1 = onehandfrezze;
    this.snx_1 = shoulderfrezze;
    this.tnx_1 = turtlefrezze;
    this.unx_1 = airflare;
    this.vnx_1 = backspin;
    this.wnx_1 = cricket;
    this.xnx_1 = elbowairflare;
    this.ynx_1 = flare;
    this.znx_1 = jackhammer;
    this.any_1 = halo;
    this.bny_1 = headspin;
    this.cny_1 = munchmill;
    this.dny_1 = ninetyNine;
    this.eny_1 = swipes;
    this.fny_1 = turtle;
    this.gny_1 = ufo;
    this.hny_1 = web;
    this.iny_1 = windmill;
    this.jny_1 = wolf;
    this.kny_1 = angle;
    this.lny_1 = bridge;
    this.mny_1 = finger;
    this.nny_1 = handstand;
    this.ony_1 = horizont;
    this.pny_1 = pushups;
    this.qny_1 = sit_ups;
    this.rny_1 = pressUpHandstand;
    this.sny_1 = butterfly;
    this.tny_1 = fold;
    this.uny_1 = shoulders;
    this.vny_1 = twine;
  }
  protoOf(PupilDomainModel).toString = function () {
    return 'PupilDomainModel(id=' + this.knw_1 + ', name=' + this.lnw_1 + ', email=' + this.mnw_1 + ', avatar=' + this.nnw_1 + ', born=' + this.onw_1 + ', country=' + this.pnw_1 + ', city=' + this.qnw_1 + ', video=' + this.rnw_1 + ', status=' + this.snw_1 + ', subscription=' + this.tnw_1.toString() + ', subscriptionDay=' + this.unw_1 + ', subscriptionMonth=' + this.vnw_1 + ', subscriptionYear=' + this.wnw_1 + ', currentTask=' + this.xnw_1 + ', currentTaskProgress=' + this.ynw_1 + ', roundsList=' + this.znw_1 + ', rating=' + this.anx_1 + ', freezeRating=' + this.bnx_1 + ', powermoveRating=' + this.cnx_1 + ', ofpRating=' + this.dnx_1 + ', strechingRating=' + this.enx_1 + ', battleRating=' + this.fnx_1 + ', battleCurPosition=' + this.gnx_1 + ', battleNewPosition=' + this.hnx_1 + ', newPosition=' + this.inx_1 + ', currentPosition=' + this.jnx_1 + ', babyfrezze=' + this.knx_1 + ', chairfrezze=' + this.lnx_1 + ', elbowfrezze=' + this.mnx_1 + ', headfrezze=' + this.nnx_1 + ', headhollowbackfrezze=' + this.onx_1 + ', hollowbackfrezze=' + this.pnx_1 + ', invertfrezze=' + this.qnx_1 + ', onehandfrezze=' + this.rnx_1 + ', shoulderfrezze=' + this.snx_1 + ', turtlefrezze=' + this.tnx_1 + ', airflare=' + this.unx_1 + ', backspin=' + this.vnx_1 + ', cricket=' + this.wnx_1 + ', elbowairflare=' + this.xnx_1 + ', flare=' + this.ynx_1 + ', jackhammer=' + this.znx_1 + ', halo=' + this.any_1 + ', headspin=' + this.bny_1 + ', munchmill=' + this.cny_1 + ', ninetyNine=' + this.dny_1 + ', swipes=' + this.eny_1 + ', turtle=' + this.fny_1 + ', ufo=' + this.gny_1 + ', web=' + this.hny_1 + ', windmill=' + this.iny_1 + ', wolf=' + this.jny_1 + ', angle=' + this.kny_1 + ', bridge=' + this.lny_1 + ', finger=' + this.mny_1 + ', handstand=' + this.nny_1 + ', horizont=' + this.ony_1 + ', pushups=' + this.pny_1 + ', sit_ups=' + this.qny_1 + ', pressUpHandstand=' + this.rny_1 + ', butterfly=' + this.sny_1 + ', fold=' + this.tny_1 + ', shoulders=' + this.uny_1 + ', twine=' + this.vny_1 + ')';
  };
  protoOf(PupilDomainModel).hashCode = function () {
    var result = getStringHashCode(this.knw_1);
    result = imul(result, 31) + getStringHashCode(this.lnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.nnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.onw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qnw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rnw_1) | 0;
    result = imul(result, 31) + this.snw_1 | 0;
    result = imul(result, 31) + this.tnw_1.hashCode() | 0;
    result = imul(result, 31) + this.unw_1 | 0;
    result = imul(result, 31) + this.vnw_1 | 0;
    result = imul(result, 31) + this.wnw_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.xnw_1) | 0;
    result = imul(result, 31) + this.ynw_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.znw_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.anx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bnx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.cnx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dnx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.enx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.fnx_1) | 0;
    result = imul(result, 31) + this.gnx_1 | 0;
    result = imul(result, 31) + this.hnx_1 | 0;
    result = imul(result, 31) + this.inx_1 | 0;
    result = imul(result, 31) + this.jnx_1 | 0;
    result = imul(result, 31) + this.knx_1 | 0;
    result = imul(result, 31) + this.lnx_1 | 0;
    result = imul(result, 31) + this.mnx_1 | 0;
    result = imul(result, 31) + this.nnx_1 | 0;
    result = imul(result, 31) + this.onx_1 | 0;
    result = imul(result, 31) + this.pnx_1 | 0;
    result = imul(result, 31) + this.qnx_1 | 0;
    result = imul(result, 31) + this.rnx_1 | 0;
    result = imul(result, 31) + this.snx_1 | 0;
    result = imul(result, 31) + this.tnx_1 | 0;
    result = imul(result, 31) + this.unx_1 | 0;
    result = imul(result, 31) + this.vnx_1 | 0;
    result = imul(result, 31) + this.wnx_1 | 0;
    result = imul(result, 31) + this.xnx_1 | 0;
    result = imul(result, 31) + this.ynx_1 | 0;
    result = imul(result, 31) + this.znx_1 | 0;
    result = imul(result, 31) + this.any_1 | 0;
    result = imul(result, 31) + this.bny_1 | 0;
    result = imul(result, 31) + this.cny_1 | 0;
    result = imul(result, 31) + this.dny_1 | 0;
    result = imul(result, 31) + this.eny_1 | 0;
    result = imul(result, 31) + this.fny_1 | 0;
    result = imul(result, 31) + this.gny_1 | 0;
    result = imul(result, 31) + this.hny_1 | 0;
    result = imul(result, 31) + this.iny_1 | 0;
    result = imul(result, 31) + this.jny_1 | 0;
    result = imul(result, 31) + this.kny_1 | 0;
    result = imul(result, 31) + this.lny_1 | 0;
    result = imul(result, 31) + this.mny_1 | 0;
    result = imul(result, 31) + this.nny_1 | 0;
    result = imul(result, 31) + this.ony_1 | 0;
    result = imul(result, 31) + this.pny_1 | 0;
    result = imul(result, 31) + this.qny_1 | 0;
    result = imul(result, 31) + this.rny_1 | 0;
    result = imul(result, 31) + this.sny_1 | 0;
    result = imul(result, 31) + this.tny_1 | 0;
    result = imul(result, 31) + this.uny_1 | 0;
    result = imul(result, 31) + this.vny_1 | 0;
    return result;
  };
  protoOf(PupilDomainModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilDomainModel))
      return false;
    var tmp0_other_with_cast = other instanceof PupilDomainModel ? other : THROW_CCE();
    if (!(this.knw_1 === tmp0_other_with_cast.knw_1))
      return false;
    if (!(this.lnw_1 === tmp0_other_with_cast.lnw_1))
      return false;
    if (!(this.mnw_1 === tmp0_other_with_cast.mnw_1))
      return false;
    if (!(this.nnw_1 === tmp0_other_with_cast.nnw_1))
      return false;
    if (!(this.onw_1 === tmp0_other_with_cast.onw_1))
      return false;
    if (!(this.pnw_1 === tmp0_other_with_cast.pnw_1))
      return false;
    if (!(this.qnw_1 === tmp0_other_with_cast.qnw_1))
      return false;
    if (!(this.rnw_1 === tmp0_other_with_cast.rnw_1))
      return false;
    if (!(this.snw_1 === tmp0_other_with_cast.snw_1))
      return false;
    if (!this.tnw_1.equals(tmp0_other_with_cast.tnw_1))
      return false;
    if (!(this.unw_1 === tmp0_other_with_cast.unw_1))
      return false;
    if (!(this.vnw_1 === tmp0_other_with_cast.vnw_1))
      return false;
    if (!(this.wnw_1 === tmp0_other_with_cast.wnw_1))
      return false;
    if (!(this.xnw_1 === tmp0_other_with_cast.xnw_1))
      return false;
    if (!(this.ynw_1 === tmp0_other_with_cast.ynw_1))
      return false;
    if (!(this.znw_1 === tmp0_other_with_cast.znw_1))
      return false;
    if (!equals(this.anx_1, tmp0_other_with_cast.anx_1))
      return false;
    if (!equals(this.bnx_1, tmp0_other_with_cast.bnx_1))
      return false;
    if (!equals(this.cnx_1, tmp0_other_with_cast.cnx_1))
      return false;
    if (!equals(this.dnx_1, tmp0_other_with_cast.dnx_1))
      return false;
    if (!equals(this.enx_1, tmp0_other_with_cast.enx_1))
      return false;
    if (!equals(this.fnx_1, tmp0_other_with_cast.fnx_1))
      return false;
    if (!(this.gnx_1 === tmp0_other_with_cast.gnx_1))
      return false;
    if (!(this.hnx_1 === tmp0_other_with_cast.hnx_1))
      return false;
    if (!(this.inx_1 === tmp0_other_with_cast.inx_1))
      return false;
    if (!(this.jnx_1 === tmp0_other_with_cast.jnx_1))
      return false;
    if (!(this.knx_1 === tmp0_other_with_cast.knx_1))
      return false;
    if (!(this.lnx_1 === tmp0_other_with_cast.lnx_1))
      return false;
    if (!(this.mnx_1 === tmp0_other_with_cast.mnx_1))
      return false;
    if (!(this.nnx_1 === tmp0_other_with_cast.nnx_1))
      return false;
    if (!(this.onx_1 === tmp0_other_with_cast.onx_1))
      return false;
    if (!(this.pnx_1 === tmp0_other_with_cast.pnx_1))
      return false;
    if (!(this.qnx_1 === tmp0_other_with_cast.qnx_1))
      return false;
    if (!(this.rnx_1 === tmp0_other_with_cast.rnx_1))
      return false;
    if (!(this.snx_1 === tmp0_other_with_cast.snx_1))
      return false;
    if (!(this.tnx_1 === tmp0_other_with_cast.tnx_1))
      return false;
    if (!(this.unx_1 === tmp0_other_with_cast.unx_1))
      return false;
    if (!(this.vnx_1 === tmp0_other_with_cast.vnx_1))
      return false;
    if (!(this.wnx_1 === tmp0_other_with_cast.wnx_1))
      return false;
    if (!(this.xnx_1 === tmp0_other_with_cast.xnx_1))
      return false;
    if (!(this.ynx_1 === tmp0_other_with_cast.ynx_1))
      return false;
    if (!(this.znx_1 === tmp0_other_with_cast.znx_1))
      return false;
    if (!(this.any_1 === tmp0_other_with_cast.any_1))
      return false;
    if (!(this.bny_1 === tmp0_other_with_cast.bny_1))
      return false;
    if (!(this.cny_1 === tmp0_other_with_cast.cny_1))
      return false;
    if (!(this.dny_1 === tmp0_other_with_cast.dny_1))
      return false;
    if (!(this.eny_1 === tmp0_other_with_cast.eny_1))
      return false;
    if (!(this.fny_1 === tmp0_other_with_cast.fny_1))
      return false;
    if (!(this.gny_1 === tmp0_other_with_cast.gny_1))
      return false;
    if (!(this.hny_1 === tmp0_other_with_cast.hny_1))
      return false;
    if (!(this.iny_1 === tmp0_other_with_cast.iny_1))
      return false;
    if (!(this.jny_1 === tmp0_other_with_cast.jny_1))
      return false;
    if (!(this.kny_1 === tmp0_other_with_cast.kny_1))
      return false;
    if (!(this.lny_1 === tmp0_other_with_cast.lny_1))
      return false;
    if (!(this.mny_1 === tmp0_other_with_cast.mny_1))
      return false;
    if (!(this.nny_1 === tmp0_other_with_cast.nny_1))
      return false;
    if (!(this.ony_1 === tmp0_other_with_cast.ony_1))
      return false;
    if (!(this.pny_1 === tmp0_other_with_cast.pny_1))
      return false;
    if (!(this.qny_1 === tmp0_other_with_cast.qny_1))
      return false;
    if (!(this.rny_1 === tmp0_other_with_cast.rny_1))
      return false;
    if (!(this.sny_1 === tmp0_other_with_cast.sny_1))
      return false;
    if (!(this.tny_1 === tmp0_other_with_cast.tny_1))
      return false;
    if (!(this.uny_1 === tmp0_other_with_cast.uny_1))
      return false;
    if (!(this.vny_1 === tmp0_other_with_cast.vny_1))
      return false;
    return true;
  };
  function toPupilDomainModel(_this__u8e3s4) {
    return new PupilDomainModel(_this__u8e3s4.snj_1, _this__u8e3s4.tnj_1, _this__u8e3s4.unj_1, _this__u8e3s4.vnj_1, _this__u8e3s4.wnj_1, _this__u8e3s4.xnj_1, _this__u8e3s4.ynj_1, _this__u8e3s4.znj_1, _this__u8e3s4.ank_1, _this__u8e3s4.bnk_1, _this__u8e3s4.cnk_1, _this__u8e3s4.dnk_1, _this__u8e3s4.enk_1, _this__u8e3s4.fnk_1, _this__u8e3s4.gnk_1, _this__u8e3s4.hnk_1, _this__u8e3s4.ink_1, _this__u8e3s4.jnk_1, _this__u8e3s4.knk_1, _this__u8e3s4.lnk_1, _this__u8e3s4.mnk_1, _this__u8e3s4.nnk_1, _this__u8e3s4.onk_1, _this__u8e3s4.pnk_1, _this__u8e3s4.qnk_1, _this__u8e3s4.rnk_1, _this__u8e3s4.snk_1, _this__u8e3s4.tnk_1, _this__u8e3s4.unk_1, _this__u8e3s4.vnk_1, _this__u8e3s4.wnk_1, _this__u8e3s4.xnk_1, _this__u8e3s4.ynk_1, _this__u8e3s4.znk_1, _this__u8e3s4.anl_1, _this__u8e3s4.bnl_1, _this__u8e3s4.cnl_1, _this__u8e3s4.dnl_1, _this__u8e3s4.enl_1, _this__u8e3s4.fnl_1, _this__u8e3s4.gnl_1, _this__u8e3s4.hnl_1, _this__u8e3s4.inl_1, _this__u8e3s4.jnl_1, _this__u8e3s4.knl_1, _this__u8e3s4.lnl_1, _this__u8e3s4.mnl_1, _this__u8e3s4.nnl_1, _this__u8e3s4.onl_1, _this__u8e3s4.pnl_1, _this__u8e3s4.qnl_1, _this__u8e3s4.rnl_1, _this__u8e3s4.snl_1, _this__u8e3s4.tnl_1, _this__u8e3s4.unl_1, _this__u8e3s4.vnl_1, _this__u8e3s4.wnl_1, _this__u8e3s4.xnl_1, _this__u8e3s4.ynl_1, _this__u8e3s4.znl_1, _this__u8e3s4.anm_1, _this__u8e3s4.bnm_1, _this__u8e3s4.cnm_1, _this__u8e3s4.dnm_1);
  }
  function CreateNewPupil(repository) {
    this.wny_1 = repository;
  }
  protoOf(CreateNewPupil).lnm = function (email, name, $completion) {
    return this.wny_1.lnm(email, name, $completion);
  };
  function GetAllPupils$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.fnz_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.hnz_1 = this.fnz_1;
            var tmp_1 = this;
            tmp_1.inz_1 = this.gnz_1;
            this.s9_1 = 1;
            var this_0 = this.inz_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var item = tmp0_iterator.o();
              destination.e(toPupilDomainModel(item));
            }

            suspendResult = this.hnz_1.y1r(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(GetAllPupils$getAllPupils$o$collect$slambda).h2c = function (value, completion) {
    var i = new GetAllPupils$getAllPupils$o$collect$slambda(this.fnz_1, completion);
    i.gnz_1 = value;
    return i;
  };
  function GetAllPupils$getAllPupils$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetAllPupils$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rnz_1 = _this__u8e3s4;
    this.snz_1 = collector;
  }
  protoOf($collectCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.tnz_1 = this.snz_1;
            this.s9_1 = 1;
            var tmp_1 = GetAllPupils$getAllPupils$o$collect$slambda_0(this.tnz_1, null);
            suspendResult = this.rnz_1.unz_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.vnz_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.vnz_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.vnz_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
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
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv($this) {
    this.unz_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function GetAllPupils(repository) {
    this.wnz_1 = repository;
  }
  protoOf(GetAllPupils).xnz = function ($completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.wnz_1.enm();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(this_0);
  };
  function GetBboysList$getBboysList$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.go0_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetBboysList$getBboysList$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(GetBboysList$getBboysList$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetBboysList$getBboysList$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.io0_1 = this.go0_1;
            var tmp_1 = this;
            tmp_1.jo0_1 = this.ho0_1;
            this.s9_1 = 1;
            var this_0 = this.jo0_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var item = tmp0_iterator.o();
              destination.e(toBboyDomainModel(item));
            }

            suspendResult = this.io0_1.y1r(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(GetBboysList$getBboysList$o$collect$slambda).h2c = function (value, completion) {
    var i = new GetBboysList$getBboysList$o$collect$slambda(this.go0_1, completion);
    i.ho0_1 = value;
    return i;
  };
  function GetBboysList$getBboysList$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetBboysList$getBboysList$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.so0_1 = _this__u8e3s4;
    this.to0_1 = collector;
  }
  protoOf($collectCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.uo0_1 = this.to0_1;
            this.s9_1 = 1;
            var tmp_1 = GetBboysList$getBboysList$o$collect$slambda_0(this.uo0_1, null);
            suspendResult = this.so0_1.vo0_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.wo0_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).y1r = function (value, $completion) {
    return this.wo0_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x3 = function () {
    return this.wo0_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
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
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv_0($this) {
    this.vo0_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_0).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_0).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function GetBboysList(repository) {
    this.xo0_1 = repository;
  }
  protoOf(GetBboysList).knm = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.xo0_1.knm();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(this_0);
  };
  function GetFreezeElements$getFreezeElements$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.go1_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetFreezeElements$getFreezeElements$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(GetFreezeElements$getFreezeElements$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetFreezeElements$getFreezeElements$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.io1_1 = this.go1_1;
            var tmp_1 = this;
            tmp_1.jo1_1 = this.ho1_1;
            this.s9_1 = 1;
            var this_0 = this.jo1_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var item = tmp0_iterator.o();
              destination.e(toElementDomainModel(item));
            }

            suspendResult = this.io1_1.y1r(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(GetFreezeElements$getFreezeElements$o$collect$slambda).h2c = function (value, completion) {
    var i = new GetFreezeElements$getFreezeElements$o$collect$slambda(this.go1_1, completion);
    i.ho1_1 = value;
    return i;
  };
  function GetFreezeElements$getFreezeElements$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetFreezeElements$getFreezeElements$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.so1_1 = _this__u8e3s4;
    this.to1_1 = collector;
  }
  protoOf($collectCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.uo1_1 = this.to1_1;
            this.s9_1 = 1;
            var tmp_1 = GetFreezeElements$getFreezeElements$o$collect$slambda_0(this.uo1_1, null);
            suspendResult = this.so1_1.vo1_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.wo1_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).y1r = function (value, $completion) {
    return this.wo1_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).x3 = function () {
    return this.wo1_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv_1($this) {
    this.vo1_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_1).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_1).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function GetFreezeElements(repository) {
    this.xo1_1 = repository;
  }
  protoOf(GetFreezeElements).gnm = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.xo1_1.gnm();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_1(this_0);
  };
  function GetOfpElements$getOfpElements$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.go2_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetOfpElements$getOfpElements$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(GetOfpElements$getOfpElements$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetOfpElements$getOfpElements$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.io2_1 = this.go2_1;
            var tmp_1 = this;
            tmp_1.jo2_1 = this.ho2_1;
            this.s9_1 = 1;
            var this_0 = this.jo2_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var item = tmp0_iterator.o();
              destination.e(toElementDomainModel(item));
            }

            suspendResult = this.io2_1.y1r(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(GetOfpElements$getOfpElements$o$collect$slambda).h2c = function (value, completion) {
    var i = new GetOfpElements$getOfpElements$o$collect$slambda(this.go2_1, completion);
    i.ho2_1 = value;
    return i;
  };
  function GetOfpElements$getOfpElements$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetOfpElements$getOfpElements$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.so2_1 = _this__u8e3s4;
    this.to2_1 = collector;
  }
  protoOf($collectCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.uo2_1 = this.to2_1;
            this.s9_1 = 1;
            var tmp_1 = GetOfpElements$getOfpElements$o$collect$slambda_0(this.uo2_1, null);
            suspendResult = this.so2_1.vo2_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.wo2_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).y1r = function (value, $completion) {
    return this.wo2_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).x3 = function () {
    return this.wo2_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).hashCode = function () {
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv_2($this) {
    this.vo2_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_2).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_2).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function GetOfpElements(repository) {
    this.xo2_1 = repository;
  }
  protoOf(GetOfpElements).inm = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.xo2_1.inm();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_2(this_0);
  };
  function GetPowerElements$getPowerElements$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.go3_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetPowerElements$getPowerElements$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(GetPowerElements$getPowerElements$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetPowerElements$getPowerElements$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.io3_1 = this.go3_1;
            var tmp_1 = this;
            tmp_1.jo3_1 = this.ho3_1;
            this.s9_1 = 1;
            var this_0 = this.jo3_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var item = tmp0_iterator.o();
              destination.e(toElementDomainModel(item));
            }

            suspendResult = this.io3_1.y1r(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(GetPowerElements$getPowerElements$o$collect$slambda).h2c = function (value, completion) {
    var i = new GetPowerElements$getPowerElements$o$collect$slambda(this.go3_1, completion);
    i.ho3_1 = value;
    return i;
  };
  function GetPowerElements$getPowerElements$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetPowerElements$getPowerElements$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.so3_1 = _this__u8e3s4;
    this.to3_1 = collector;
  }
  protoOf($collectCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.uo3_1 = this.to3_1;
            this.s9_1 = 1;
            var tmp_1 = GetPowerElements$getPowerElements$o$collect$slambda_0(this.uo3_1, null);
            suspendResult = this.so3_1.vo3_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.wo3_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).y1r = function (value, $completion) {
    return this.wo3_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).x3 = function () {
    return this.wo3_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).hashCode = function () {
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv_3($this) {
    this.vo3_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_3).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$4(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_3).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function GetPowerElements(repository) {
    this.xo3_1 = repository;
  }
  protoOf(GetPowerElements).hnm = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.xo3_1.hnm();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_3(this_0);
  };
  function GetPupilById$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.go4_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.io4_1 = this.go4_1;
            var tmp_1 = this;
            tmp_1.jo4_1 = this.ho4_1;
            this.s9_1 = 1;
            var pupil = this.jo4_1;
            suspendResult = this.io4_1.y1r(toPupilDomainModel(pupil), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(GetPupilById$getAllPupils$o$collect$slambda).h2c = function (value, completion) {
    var i = new GetPupilById$getAllPupils$o$collect$slambda(this.go4_1, completion);
    i.ho4_1 = value;
    return i;
  };
  function GetPupilById$getAllPupils$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetPupilById$getAllPupils$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.so4_1 = _this__u8e3s4;
    this.to4_1 = collector;
  }
  protoOf($collectCOROUTINE$5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.uo4_1 = this.to4_1;
            this.s9_1 = 1;
            var tmp_1 = GetPupilById$getAllPupils$o$collect$slambda_0(this.uo4_1, null);
            suspendResult = this.so4_1.vo4_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.wo4_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).y1r = function (value, $completion) {
    return this.wo4_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).x3 = function () {
    return this.wo4_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).hashCode = function () {
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv_4($this) {
    this.vo4_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_4).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$5(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_4).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function GetPupilById(repository) {
    this.xo4_1 = repository;
  }
  protoOf(GetPupilById).yo4 = function (email, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.xo4_1.fnm(email);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_4(this_0);
  };
  function GetStretchElements$getStretchElements$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.ho5_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GetStretchElements$getStretchElements$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(GetStretchElements$getStretchElements$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GetStretchElements$getStretchElements$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.jo5_1 = this.ho5_1;
            var tmp_1 = this;
            tmp_1.ko5_1 = this.io5_1;
            this.s9_1 = 1;
            var this_0 = this.ko5_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var item = tmp0_iterator.o();
              destination.e(toElementDomainModel(item));
            }

            suspendResult = this.jo5_1.y1r(destination, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(GetStretchElements$getStretchElements$o$collect$slambda).h2c = function (value, completion) {
    var i = new GetStretchElements$getStretchElements$o$collect$slambda(this.ho5_1, completion);
    i.io5_1 = value;
    return i;
  };
  function GetStretchElements$getStretchElements$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new GetStretchElements$getStretchElements$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.to5_1 = _this__u8e3s4;
    this.uo5_1 = collector;
  }
  protoOf($collectCOROUTINE$6).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.vo5_1 = this.uo5_1;
            this.s9_1 = 1;
            var tmp_1 = GetStretchElements$getStretchElements$o$collect$slambda_0(this.vo5_1, null);
            suspendResult = this.to5_1.wo5_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_5(function_0) {
    this.xo5_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).y1r = function (value, $completion) {
    return this.xo5_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).x3 = function () {
    return this.xo5_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).hashCode = function () {
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv_5($this) {
    this.wo5_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_5).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$6(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_5).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function GetStretchElements(repository) {
    this.yo5_1 = repository;
  }
  protoOf(GetStretchElements).jnm = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.yo5_1.jnm();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_5(this_0);
  };
  function UploadAvatar(repository) {
    this.zo5_1 = repository;
  }
  protoOf(UploadAvatar).ao6 = function (email, avatar, $completion) {
    return this.zo5_1.mnm(email, avatar, $completion);
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
