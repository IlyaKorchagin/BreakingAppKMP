(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './projects-core-koin-core.js', './kotlin-kotlin-stdlib.js', './BreakingKMPApp-module_main-domain_main.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./projects-core-koin-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./BreakingKMPApp-module_main-domain_main.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
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
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-presentation_main'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'BreakingKMPApp-module_main-presentation_main'.");
    }
    globalThis['BreakingKMPApp-module_main-presentation_main'] = factory(typeof globalThis['BreakingKMPApp-module_main-presentation_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_main-presentation_main'], globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['BreakingKMPApp-module_main-domain_main'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_io_insert_koin_koin_core, kotlin_kotlin, kotlin_BreakingKMPApp_module_main_domain_main, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.o8;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var onOptions = kotlin_io_insert_koin_koin_core.$_$.j;
  var MainUseCase = kotlin_BreakingKMPApp_module_main_domain_main.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var protoOf = kotlin_kotlin.$_$.ff;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var equals = kotlin_kotlin.$_$.od;
  var Enum = kotlin_kotlin.$_$.bk;
  var toString = kotlin_kotlin.$_$.jf;
  var hashCode = kotlin_kotlin.$_$.xd;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var PupilDomainModel = kotlin_BreakingKMPApp_module_main_domain_main.$_$.b;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var println = kotlin_kotlin.$_$.ad;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var compareValues = kotlin_kotlin.$_$.cc;
  var KtList = kotlin_kotlin.$_$.w6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var sortedWith = kotlin_kotlin.$_$.ib;
  var toInt = kotlin_kotlin.$_$.cj;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Comparator = kotlin_kotlin.$_$.ak;
  var listOf = kotlin_kotlin.$_$.da;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(BboyModel, 'BboyModel', BboyModel);
  initMetadataForClass(ElementModel, 'ElementModel', ElementModel);
  initMetadataForClass(Elements, 'Elements');
  initMetadataForClass(ElementsTab, 'ElementsTab', VOID, Enum);
  initMetadataForClass(ImageWithText, 'ImageWithText');
  initMetadataForClass(PupilModel, 'PupilModel');
  initMetadataForLambda(MainViewModel$loadCurrentUser$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_7, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_9, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_7, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_9, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(MainViewModel$uploadNewUserAvatar$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MainViewModel$loadCurrentUser$slambda, CoroutineImpl, VOID, [1]);
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
    var scopeQualifier = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(MainViewModel), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.ft(factory);
    if (false || $this$module.ys_1) {
      $this$module.it(factory);
    }
    var tmp$ret$2 = new KoinDefinition($this$module, factory);
    onOptions(tmp$ret$2, null);
    return Unit_instance;
  }
  function mainPresentationModule$lambda$lambda($this$single, it) {
    _init_properties_mainPresentationDi_kt__hu50x4();
    // Inline function 'org.koin.core.module.dsl.new' call
    // Inline function 'org.koin.core.scope.Scope.get' call
    var p0 = $this$single.gu(getKClass(MainUseCase), null, null);
    return new MainViewModel(p0);
  }
  var properties_initialized_mainPresentationDi_kt_pkgdh6;
  function _init_properties_mainPresentationDi_kt__hu50x4() {
    if (!properties_initialized_mainPresentationDi_kt_pkgdh6) {
      properties_initialized_mainPresentationDi_kt_pkgdh6 = true;
      mainPresentationModule = module_0(VOID, mainPresentationModule$lambda);
    }
  }
  var com_korchagin_presentation_models_BboyModel$stable;
  function BboyModel(name, born, rating, avatar, country, video, description, shortDescription) {
    name = name === VOID ? '' : name;
    born = born === VOID ? '' : born;
    rating = rating === VOID ? '' : rating;
    avatar = avatar === VOID ? '' : avatar;
    country = country === VOID ? '' : country;
    video = video === VOID ? '' : video;
    description = description === VOID ? '' : description;
    shortDescription = shortDescription === VOID ? '' : shortDescription;
    this.bo6_1 = name;
    this.co6_1 = born;
    this.do6_1 = rating;
    this.eo6_1 = avatar;
    this.fo6_1 = country;
    this.go6_1 = video;
    this.ho6_1 = description;
    this.io6_1 = shortDescription;
  }
  protoOf(BboyModel).toString = function () {
    return 'BboyModel(name=' + this.bo6_1 + ', born=' + this.co6_1 + ', rating=' + this.do6_1 + ', avatar=' + this.eo6_1 + ', country=' + this.fo6_1 + ', video=' + this.go6_1 + ', description=' + this.ho6_1 + ', shortDescription=' + this.io6_1 + ')';
  };
  protoOf(BboyModel).hashCode = function () {
    var result = getStringHashCode(this.bo6_1);
    result = imul(result, 31) + getStringHashCode(this.co6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.do6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.eo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.fo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.go6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ho6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.io6_1) | 0;
    return result;
  };
  protoOf(BboyModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BboyModel))
      return false;
    var tmp0_other_with_cast = other instanceof BboyModel ? other : THROW_CCE();
    if (!(this.bo6_1 === tmp0_other_with_cast.bo6_1))
      return false;
    if (!(this.co6_1 === tmp0_other_with_cast.co6_1))
      return false;
    if (!(this.do6_1 === tmp0_other_with_cast.do6_1))
      return false;
    if (!(this.eo6_1 === tmp0_other_with_cast.eo6_1))
      return false;
    if (!(this.fo6_1 === tmp0_other_with_cast.fo6_1))
      return false;
    if (!(this.go6_1 === tmp0_other_with_cast.go6_1))
      return false;
    if (!(this.ho6_1 === tmp0_other_with_cast.ho6_1))
      return false;
    if (!(this.io6_1 === tmp0_other_with_cast.io6_1))
      return false;
    return true;
  };
  function toBboyModel(_this__u8e3s4) {
    return new BboyModel(_this__u8e3s4.nnv_1, _this__u8e3s4.onv_1, _this__u8e3s4.pnv_1, _this__u8e3s4.qnv_1, _this__u8e3s4.rnv_1, _this__u8e3s4.snv_1, _this__u8e3s4.tnv_1, _this__u8e3s4.unv_1);
  }
  var com_korchagin_presentation_models_ElementModel$stable;
  function ElementModel(title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl) {
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
    this.jo6_1 = title;
    this.ko6_1 = image;
    this.lo6_1 = description;
    this.mo6_1 = blockDescription;
    this.no6_1 = progress10;
    this.oo6_1 = progress20;
    this.po6_1 = progress30;
    this.qo6_1 = progress40;
    this.ro6_1 = progress50;
    this.so6_1 = progress60;
    this.to6_1 = progress70;
    this.uo6_1 = progress80;
    this.vo6_1 = progress90;
    this.wo6_1 = progress100;
    this.xo6_1 = videoUrl;
  }
  protoOf(ElementModel).toString = function () {
    return 'ElementModel(title=' + this.jo6_1 + ', image=' + this.ko6_1 + ', description=' + this.lo6_1 + ', blockDescription=' + this.mo6_1 + ', progress10=' + this.no6_1 + ', progress20=' + this.oo6_1 + ', progress30=' + this.po6_1 + ', progress40=' + this.qo6_1 + ', progress50=' + this.ro6_1 + ', progress60=' + this.so6_1 + ', progress70=' + this.to6_1 + ', progress80=' + this.uo6_1 + ', progress90=' + this.vo6_1 + ', progress100=' + this.wo6_1 + ', videoUrl=' + this.xo6_1 + ')';
  };
  protoOf(ElementModel).hashCode = function () {
    var result = getStringHashCode(this.jo6_1);
    result = imul(result, 31) + getStringHashCode(this.ko6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.lo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.no6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.oo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.po6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ro6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.so6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.to6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.uo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.vo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.wo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xo6_1) | 0;
    return result;
  };
  protoOf(ElementModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementModel))
      return false;
    var tmp0_other_with_cast = other instanceof ElementModel ? other : THROW_CCE();
    if (!(this.jo6_1 === tmp0_other_with_cast.jo6_1))
      return false;
    if (!(this.ko6_1 === tmp0_other_with_cast.ko6_1))
      return false;
    if (!(this.lo6_1 === tmp0_other_with_cast.lo6_1))
      return false;
    if (!(this.mo6_1 === tmp0_other_with_cast.mo6_1))
      return false;
    if (!(this.no6_1 === tmp0_other_with_cast.no6_1))
      return false;
    if (!(this.oo6_1 === tmp0_other_with_cast.oo6_1))
      return false;
    if (!(this.po6_1 === tmp0_other_with_cast.po6_1))
      return false;
    if (!(this.qo6_1 === tmp0_other_with_cast.qo6_1))
      return false;
    if (!(this.ro6_1 === tmp0_other_with_cast.ro6_1))
      return false;
    if (!(this.so6_1 === tmp0_other_with_cast.so6_1))
      return false;
    if (!(this.to6_1 === tmp0_other_with_cast.to6_1))
      return false;
    if (!(this.uo6_1 === tmp0_other_with_cast.uo6_1))
      return false;
    if (!(this.vo6_1 === tmp0_other_with_cast.vo6_1))
      return false;
    if (!(this.wo6_1 === tmp0_other_with_cast.wo6_1))
      return false;
    if (!(this.xo6_1 === tmp0_other_with_cast.xo6_1))
      return false;
    return true;
  };
  function toElementModel(_this__u8e3s4) {
    return new ElementModel(_this__u8e3s4.vnv_1, _this__u8e3s4.wnv_1, _this__u8e3s4.xnv_1, _this__u8e3s4.ynv_1, _this__u8e3s4.znv_1, _this__u8e3s4.anw_1, _this__u8e3s4.bnw_1, _this__u8e3s4.cnw_1, _this__u8e3s4.dnw_1, _this__u8e3s4.enw_1, _this__u8e3s4.fnw_1, _this__u8e3s4.gnw_1, _this__u8e3s4.hnw_1, _this__u8e3s4.inw_1, _this__u8e3s4.jnw_1);
  }
  var com_korchagin_presentation_models_Elements$stable;
  function Elements(icon, title, block_description, progress) {
    this.yo6_1 = icon;
    this.zo6_1 = title;
    this.ao7_1 = block_description;
    this.bo7_1 = progress;
  }
  protoOf(Elements).toString = function () {
    return 'Elements(icon=' + this.yo6_1 + ', title=' + this.zo6_1 + ', block_description=' + this.ao7_1 + ', progress=' + this.bo7_1 + ')';
  };
  protoOf(Elements).hashCode = function () {
    var result = this.yo6_1 == null ? 0 : getStringHashCode(this.yo6_1);
    result = imul(result, 31) + getStringHashCode(this.zo6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ao7_1) | 0;
    result = imul(result, 31) + (this.bo7_1 == null ? 0 : getNumberHashCode(this.bo7_1)) | 0;
    return result;
  };
  protoOf(Elements).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Elements))
      return false;
    var tmp0_other_with_cast = other instanceof Elements ? other : THROW_CCE();
    if (!(this.yo6_1 == tmp0_other_with_cast.yo6_1))
      return false;
    if (!(this.zo6_1 === tmp0_other_with_cast.zo6_1))
      return false;
    if (!(this.ao7_1 === tmp0_other_with_cast.ao7_1))
      return false;
    if (!equals(this.bo7_1, tmp0_other_with_cast.bo7_1))
      return false;
    return true;
  };
  var ElementsTab_FREEZE_instance;
  var ElementsTab_POWER_instance;
  var ElementsTab_OFP_instance;
  var ElementsTab_STRETCH_instance;
  var ElementsTab_entriesInitialized;
  function ElementsTab_initEntries() {
    if (ElementsTab_entriesInitialized)
      return Unit_instance;
    ElementsTab_entriesInitialized = true;
    ElementsTab_FREEZE_instance = new ElementsTab('FREEZE', 0);
    ElementsTab_POWER_instance = new ElementsTab('POWER', 1);
    ElementsTab_OFP_instance = new ElementsTab('OFP', 2);
    ElementsTab_STRETCH_instance = new ElementsTab('STRETCH', 3);
  }
  function ElementsTab(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ElementsTab_FREEZE_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_FREEZE_instance;
  }
  function ElementsTab_POWER_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_POWER_instance;
  }
  function ElementsTab_OFP_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_OFP_instance;
  }
  function ElementsTab_STRETCH_getInstance() {
    ElementsTab_initEntries();
    return ElementsTab_STRETCH_instance;
  }
  var com_korchagin_presentation_models_ImageWithText$stable;
  function ImageWithText(image, text) {
    this.co7_1 = image;
    this.do7_1 = text;
  }
  protoOf(ImageWithText).toString = function () {
    return 'ImageWithText(image=' + toString(this.co7_1) + ', text=' + this.do7_1 + ')';
  };
  protoOf(ImageWithText).hashCode = function () {
    var result = hashCode(this.co7_1);
    result = imul(result, 31) + getStringHashCode(this.do7_1) | 0;
    return result;
  };
  protoOf(ImageWithText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageWithText))
      return false;
    var tmp0_other_with_cast = other instanceof ImageWithText ? other : THROW_CCE();
    if (!equals(this.co7_1, tmp0_other_with_cast.co7_1))
      return false;
    if (!(this.do7_1 === tmp0_other_with_cast.do7_1))
      return false;
    return true;
  };
  var com_korchagin_presentation_models_PupilModel$stable;
  function PupilModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushUps, sitUps, pressUpHandstand, butterfly, fold, shoulders, twine) {
    this.eo7_1 = id;
    this.fo7_1 = name;
    this.go7_1 = email;
    this.ho7_1 = avatar;
    this.io7_1 = born;
    this.jo7_1 = country;
    this.ko7_1 = city;
    this.lo7_1 = video;
    this.mo7_1 = status;
    this.no7_1 = subscription;
    this.oo7_1 = subscriptionDay;
    this.po7_1 = subscriptionMonth;
    this.qo7_1 = subscriptionYear;
    this.ro7_1 = currentTask;
    this.so7_1 = currentTaskProgress;
    this.to7_1 = roundsList;
    this.uo7_1 = rating;
    this.vo7_1 = freezeRating;
    this.wo7_1 = powermoveRating;
    this.xo7_1 = ofpRating;
    this.yo7_1 = strechingRating;
    this.zo7_1 = battleRating;
    this.ao8_1 = battleCurPosition;
    this.bo8_1 = battleNewPosition;
    this.co8_1 = newPosition;
    this.do8_1 = currentPosition;
    this.eo8_1 = babyfrezze;
    this.fo8_1 = chairfrezze;
    this.go8_1 = elbowfrezze;
    this.ho8_1 = headfrezze;
    this.io8_1 = headhollowbackfrezze;
    this.jo8_1 = hollowbackfrezze;
    this.ko8_1 = invertfrezze;
    this.lo8_1 = onehandfrezze;
    this.mo8_1 = shoulderfrezze;
    this.no8_1 = turtlefrezze;
    this.oo8_1 = airflare;
    this.po8_1 = backspin;
    this.qo8_1 = cricket;
    this.ro8_1 = elbowairflare;
    this.so8_1 = flare;
    this.to8_1 = jackhammer;
    this.uo8_1 = halo;
    this.vo8_1 = headspin;
    this.wo8_1 = munchmill;
    this.xo8_1 = ninetyNine;
    this.yo8_1 = swipes;
    this.zo8_1 = turtle;
    this.ao9_1 = ufo;
    this.bo9_1 = web;
    this.co9_1 = windmill;
    this.do9_1 = wolf;
    this.eo9_1 = angle;
    this.fo9_1 = bridge;
    this.go9_1 = finger;
    this.ho9_1 = handstand;
    this.io9_1 = horizont;
    this.jo9_1 = pushUps;
    this.ko9_1 = sitUps;
    this.lo9_1 = pressUpHandstand;
    this.mo9_1 = butterfly;
    this.no9_1 = fold;
    this.oo9_1 = shoulders;
    this.po9_1 = twine;
  }
  protoOf(PupilModel).toString = function () {
    return 'PupilModel(id=' + this.eo7_1 + ', name=' + this.fo7_1 + ', email=' + this.go7_1 + ', avatar=' + this.ho7_1 + ', born=' + this.io7_1 + ', country=' + this.jo7_1 + ', city=' + this.ko7_1 + ', video=' + this.lo7_1 + ', status=' + this.mo7_1 + ', subscription=' + this.no7_1.toString() + ', subscriptionDay=' + this.oo7_1 + ', subscriptionMonth=' + this.po7_1 + ', subscriptionYear=' + this.qo7_1 + ', currentTask=' + this.ro7_1 + ', currentTaskProgress=' + this.so7_1 + ', roundsList=' + this.to7_1 + ', rating=' + this.uo7_1 + ', freezeRating=' + this.vo7_1 + ', powermoveRating=' + this.wo7_1 + ', ofpRating=' + this.xo7_1 + ', strechingRating=' + this.yo7_1 + ', battleRating=' + this.zo7_1 + ', battleCurPosition=' + this.ao8_1 + ', battleNewPosition=' + this.bo8_1 + ', newPosition=' + this.co8_1 + ', currentPosition=' + this.do8_1 + ', babyfrezze=' + this.eo8_1 + ', chairfrezze=' + this.fo8_1 + ', elbowfrezze=' + this.go8_1 + ', headfrezze=' + this.ho8_1 + ', headhollowbackfrezze=' + this.io8_1 + ', hollowbackfrezze=' + this.jo8_1 + ', invertfrezze=' + this.ko8_1 + ', onehandfrezze=' + this.lo8_1 + ', shoulderfrezze=' + this.mo8_1 + ', turtlefrezze=' + this.no8_1 + ', airflare=' + this.oo8_1 + ', backspin=' + this.po8_1 + ', cricket=' + this.qo8_1 + ', elbowairflare=' + this.ro8_1 + ', flare=' + this.so8_1 + ', jackhammer=' + this.to8_1 + ', halo=' + this.uo8_1 + ', headspin=' + this.vo8_1 + ', munchmill=' + this.wo8_1 + ', ninetyNine=' + this.xo8_1 + ', swipes=' + this.yo8_1 + ', turtle=' + this.zo8_1 + ', ufo=' + this.ao9_1 + ', web=' + this.bo9_1 + ', windmill=' + this.co9_1 + ', wolf=' + this.do9_1 + ', angle=' + this.eo9_1 + ', bridge=' + this.fo9_1 + ', finger=' + this.go9_1 + ', handstand=' + this.ho9_1 + ', horizont=' + this.io9_1 + ', pushUps=' + this.jo9_1 + ', sitUps=' + this.ko9_1 + ', pressUpHandstand=' + this.lo9_1 + ', butterfly=' + this.mo9_1 + ', fold=' + this.no9_1 + ', shoulders=' + this.oo9_1 + ', twine=' + this.po9_1 + ')';
  };
  protoOf(PupilModel).hashCode = function () {
    var result = getStringHashCode(this.eo7_1);
    result = imul(result, 31) + getStringHashCode(this.fo7_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.go7_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ho7_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.io7_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.jo7_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ko7_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.lo7_1) | 0;
    result = imul(result, 31) + this.mo7_1 | 0;
    result = imul(result, 31) + this.no7_1.hashCode() | 0;
    result = imul(result, 31) + this.oo7_1 | 0;
    result = imul(result, 31) + this.po7_1 | 0;
    result = imul(result, 31) + this.qo7_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.ro7_1) | 0;
    result = imul(result, 31) + this.so7_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.to7_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.uo7_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.vo7_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.wo7_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.xo7_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.yo7_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.zo7_1) | 0;
    result = imul(result, 31) + this.ao8_1 | 0;
    result = imul(result, 31) + this.bo8_1 | 0;
    result = imul(result, 31) + this.co8_1 | 0;
    result = imul(result, 31) + this.do8_1 | 0;
    result = imul(result, 31) + this.eo8_1 | 0;
    result = imul(result, 31) + this.fo8_1 | 0;
    result = imul(result, 31) + this.go8_1 | 0;
    result = imul(result, 31) + this.ho8_1 | 0;
    result = imul(result, 31) + this.io8_1 | 0;
    result = imul(result, 31) + this.jo8_1 | 0;
    result = imul(result, 31) + this.ko8_1 | 0;
    result = imul(result, 31) + this.lo8_1 | 0;
    result = imul(result, 31) + this.mo8_1 | 0;
    result = imul(result, 31) + this.no8_1 | 0;
    result = imul(result, 31) + this.oo8_1 | 0;
    result = imul(result, 31) + this.po8_1 | 0;
    result = imul(result, 31) + this.qo8_1 | 0;
    result = imul(result, 31) + this.ro8_1 | 0;
    result = imul(result, 31) + this.so8_1 | 0;
    result = imul(result, 31) + this.to8_1 | 0;
    result = imul(result, 31) + this.uo8_1 | 0;
    result = imul(result, 31) + this.vo8_1 | 0;
    result = imul(result, 31) + this.wo8_1 | 0;
    result = imul(result, 31) + this.xo8_1 | 0;
    result = imul(result, 31) + this.yo8_1 | 0;
    result = imul(result, 31) + this.zo8_1 | 0;
    result = imul(result, 31) + this.ao9_1 | 0;
    result = imul(result, 31) + this.bo9_1 | 0;
    result = imul(result, 31) + this.co9_1 | 0;
    result = imul(result, 31) + this.do9_1 | 0;
    result = imul(result, 31) + this.eo9_1 | 0;
    result = imul(result, 31) + this.fo9_1 | 0;
    result = imul(result, 31) + this.go9_1 | 0;
    result = imul(result, 31) + this.ho9_1 | 0;
    result = imul(result, 31) + this.io9_1 | 0;
    result = imul(result, 31) + this.jo9_1 | 0;
    result = imul(result, 31) + this.ko9_1 | 0;
    result = imul(result, 31) + this.lo9_1 | 0;
    result = imul(result, 31) + this.mo9_1 | 0;
    result = imul(result, 31) + this.no9_1 | 0;
    result = imul(result, 31) + this.oo9_1 | 0;
    result = imul(result, 31) + this.po9_1 | 0;
    return result;
  };
  protoOf(PupilModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilModel))
      return false;
    var tmp0_other_with_cast = other instanceof PupilModel ? other : THROW_CCE();
    if (!(this.eo7_1 === tmp0_other_with_cast.eo7_1))
      return false;
    if (!(this.fo7_1 === tmp0_other_with_cast.fo7_1))
      return false;
    if (!(this.go7_1 === tmp0_other_with_cast.go7_1))
      return false;
    if (!(this.ho7_1 === tmp0_other_with_cast.ho7_1))
      return false;
    if (!(this.io7_1 === tmp0_other_with_cast.io7_1))
      return false;
    if (!(this.jo7_1 === tmp0_other_with_cast.jo7_1))
      return false;
    if (!(this.ko7_1 === tmp0_other_with_cast.ko7_1))
      return false;
    if (!(this.lo7_1 === tmp0_other_with_cast.lo7_1))
      return false;
    if (!(this.mo7_1 === tmp0_other_with_cast.mo7_1))
      return false;
    if (!this.no7_1.equals(tmp0_other_with_cast.no7_1))
      return false;
    if (!(this.oo7_1 === tmp0_other_with_cast.oo7_1))
      return false;
    if (!(this.po7_1 === tmp0_other_with_cast.po7_1))
      return false;
    if (!(this.qo7_1 === tmp0_other_with_cast.qo7_1))
      return false;
    if (!(this.ro7_1 === tmp0_other_with_cast.ro7_1))
      return false;
    if (!(this.so7_1 === tmp0_other_with_cast.so7_1))
      return false;
    if (!(this.to7_1 === tmp0_other_with_cast.to7_1))
      return false;
    if (!equals(this.uo7_1, tmp0_other_with_cast.uo7_1))
      return false;
    if (!equals(this.vo7_1, tmp0_other_with_cast.vo7_1))
      return false;
    if (!equals(this.wo7_1, tmp0_other_with_cast.wo7_1))
      return false;
    if (!equals(this.xo7_1, tmp0_other_with_cast.xo7_1))
      return false;
    if (!equals(this.yo7_1, tmp0_other_with_cast.yo7_1))
      return false;
    if (!equals(this.zo7_1, tmp0_other_with_cast.zo7_1))
      return false;
    if (!(this.ao8_1 === tmp0_other_with_cast.ao8_1))
      return false;
    if (!(this.bo8_1 === tmp0_other_with_cast.bo8_1))
      return false;
    if (!(this.co8_1 === tmp0_other_with_cast.co8_1))
      return false;
    if (!(this.do8_1 === tmp0_other_with_cast.do8_1))
      return false;
    if (!(this.eo8_1 === tmp0_other_with_cast.eo8_1))
      return false;
    if (!(this.fo8_1 === tmp0_other_with_cast.fo8_1))
      return false;
    if (!(this.go8_1 === tmp0_other_with_cast.go8_1))
      return false;
    if (!(this.ho8_1 === tmp0_other_with_cast.ho8_1))
      return false;
    if (!(this.io8_1 === tmp0_other_with_cast.io8_1))
      return false;
    if (!(this.jo8_1 === tmp0_other_with_cast.jo8_1))
      return false;
    if (!(this.ko8_1 === tmp0_other_with_cast.ko8_1))
      return false;
    if (!(this.lo8_1 === tmp0_other_with_cast.lo8_1))
      return false;
    if (!(this.mo8_1 === tmp0_other_with_cast.mo8_1))
      return false;
    if (!(this.no8_1 === tmp0_other_with_cast.no8_1))
      return false;
    if (!(this.oo8_1 === tmp0_other_with_cast.oo8_1))
      return false;
    if (!(this.po8_1 === tmp0_other_with_cast.po8_1))
      return false;
    if (!(this.qo8_1 === tmp0_other_with_cast.qo8_1))
      return false;
    if (!(this.ro8_1 === tmp0_other_with_cast.ro8_1))
      return false;
    if (!(this.so8_1 === tmp0_other_with_cast.so8_1))
      return false;
    if (!(this.to8_1 === tmp0_other_with_cast.to8_1))
      return false;
    if (!(this.uo8_1 === tmp0_other_with_cast.uo8_1))
      return false;
    if (!(this.vo8_1 === tmp0_other_with_cast.vo8_1))
      return false;
    if (!(this.wo8_1 === tmp0_other_with_cast.wo8_1))
      return false;
    if (!(this.xo8_1 === tmp0_other_with_cast.xo8_1))
      return false;
    if (!(this.yo8_1 === tmp0_other_with_cast.yo8_1))
      return false;
    if (!(this.zo8_1 === tmp0_other_with_cast.zo8_1))
      return false;
    if (!(this.ao9_1 === tmp0_other_with_cast.ao9_1))
      return false;
    if (!(this.bo9_1 === tmp0_other_with_cast.bo9_1))
      return false;
    if (!(this.co9_1 === tmp0_other_with_cast.co9_1))
      return false;
    if (!(this.do9_1 === tmp0_other_with_cast.do9_1))
      return false;
    if (!(this.eo9_1 === tmp0_other_with_cast.eo9_1))
      return false;
    if (!(this.fo9_1 === tmp0_other_with_cast.fo9_1))
      return false;
    if (!(this.go9_1 === tmp0_other_with_cast.go9_1))
      return false;
    if (!(this.ho9_1 === tmp0_other_with_cast.ho9_1))
      return false;
    if (!(this.io9_1 === tmp0_other_with_cast.io9_1))
      return false;
    if (!(this.jo9_1 === tmp0_other_with_cast.jo9_1))
      return false;
    if (!(this.ko9_1 === tmp0_other_with_cast.ko9_1))
      return false;
    if (!(this.lo9_1 === tmp0_other_with_cast.lo9_1))
      return false;
    if (!(this.mo9_1 === tmp0_other_with_cast.mo9_1))
      return false;
    if (!(this.no9_1 === tmp0_other_with_cast.no9_1))
      return false;
    if (!(this.oo9_1 === tmp0_other_with_cast.oo9_1))
      return false;
    if (!(this.po9_1 === tmp0_other_with_cast.po9_1))
      return false;
    return true;
  };
  function toPupilModel(_this__u8e3s4) {
    return new PupilModel(_this__u8e3s4.knw_1, _this__u8e3s4.lnw_1, _this__u8e3s4.mnw_1, _this__u8e3s4.nnw_1, _this__u8e3s4.onw_1, _this__u8e3s4.pnw_1, _this__u8e3s4.qnw_1, _this__u8e3s4.rnw_1, _this__u8e3s4.snw_1, _this__u8e3s4.tnw_1, _this__u8e3s4.unw_1, _this__u8e3s4.vnw_1, _this__u8e3s4.wnw_1, _this__u8e3s4.xnw_1, _this__u8e3s4.ynw_1, _this__u8e3s4.znw_1, _this__u8e3s4.anx_1, _this__u8e3s4.bnx_1, _this__u8e3s4.cnx_1, _this__u8e3s4.dnx_1, _this__u8e3s4.enx_1, _this__u8e3s4.fnx_1, _this__u8e3s4.gnx_1, _this__u8e3s4.hnx_1, _this__u8e3s4.inx_1, _this__u8e3s4.jnx_1, _this__u8e3s4.knx_1, _this__u8e3s4.lnx_1, _this__u8e3s4.mnx_1, _this__u8e3s4.nnx_1, _this__u8e3s4.onx_1, _this__u8e3s4.pnx_1, _this__u8e3s4.qnx_1, _this__u8e3s4.rnx_1, _this__u8e3s4.snx_1, _this__u8e3s4.tnx_1, _this__u8e3s4.unx_1, _this__u8e3s4.vnx_1, _this__u8e3s4.wnx_1, _this__u8e3s4.xnx_1, _this__u8e3s4.ynx_1, _this__u8e3s4.znx_1, _this__u8e3s4.any_1, _this__u8e3s4.bny_1, _this__u8e3s4.cny_1, _this__u8e3s4.dny_1, _this__u8e3s4.eny_1, _this__u8e3s4.fny_1, _this__u8e3s4.gny_1, _this__u8e3s4.hny_1, _this__u8e3s4.iny_1, _this__u8e3s4.jny_1, _this__u8e3s4.kny_1, _this__u8e3s4.lny_1, _this__u8e3s4.mny_1, _this__u8e3s4.nny_1, _this__u8e3s4.ony_1, _this__u8e3s4.pny_1, _this__u8e3s4.qny_1, _this__u8e3s4.rny_1, _this__u8e3s4.sny_1, _this__u8e3s4.tny_1, _this__u8e3s4.uny_1, _this__u8e3s4.vny_1);
  }
  function getElementRating(_this__u8e3s4, title) {
    switch (title) {
      case 'Baby':
        return _this__u8e3s4.eo8_1;
      case 'Chair':
        return _this__u8e3s4.fo8_1;
      case 'Elbow':
        return _this__u8e3s4.go8_1;
      case 'Head':
        return _this__u8e3s4.ho8_1;
      case 'HeadHollowback':
        return _this__u8e3s4.io8_1;
      case 'Hollowback':
        return _this__u8e3s4.jo8_1;
      case 'Invert':
        return _this__u8e3s4.ko8_1;
      case 'OneHand':
        return _this__u8e3s4.lo8_1;
      case 'Shoulder':
        return _this__u8e3s4.mo8_1;
      case 'Turtle':
        return _this__u8e3s4.no8_1;
      case 'Airflare':
        return _this__u8e3s4.oo8_1;
      case 'Backspin':
        return _this__u8e3s4.po8_1;
      case 'Cricket':
        return _this__u8e3s4.qo8_1;
      case 'ElbowAirflare':
        return _this__u8e3s4.ro8_1;
      case 'Flare':
        return _this__u8e3s4.so8_1;
      case 'Jackhammer':
        return _this__u8e3s4.to8_1;
      case 'Muchmill':
        return _this__u8e3s4.wo8_1;
      case 'Ninetynine':
        return _this__u8e3s4.xo8_1;
      case 'Web':
        return _this__u8e3s4.bo9_1;
      case 'Swipes':
        return _this__u8e3s4.yo8_1;
      case 'TurtleMove':
        return _this__u8e3s4.zo8_1;
      case 'Ufo':
        return _this__u8e3s4.ao9_1;
      case 'Windmill':
        return _this__u8e3s4.co9_1;
      case 'Halo':
        return _this__u8e3s4.uo8_1;
      case 'Wolf':
        return _this__u8e3s4.do9_1;
      case 'HeadSpin':
        return _this__u8e3s4.vo8_1;
      case 'Angle':
        return _this__u8e3s4.eo9_1;
      case 'Bridge':
        return _this__u8e3s4.fo9_1;
      case 'Fingers':
        return _this__u8e3s4.go9_1;
      case 'Handstand':
        return _this__u8e3s4.ho9_1;
      case 'PressToHandstand':
        return _this__u8e3s4.lo9_1;
      case 'PushUps':
        return _this__u8e3s4.jo9_1;
      case 'SitUps':
        return _this__u8e3s4.ko9_1;
      case 'Horizont':
        return _this__u8e3s4.io9_1;
      case 'Butterfly':
        return _this__u8e3s4.mo9_1;
      case 'Fold':
        return _this__u8e3s4.no9_1;
      case 'Shoulders':
        return _this__u8e3s4.oo9_1;
      case 'Twine':
        return _this__u8e3s4.po9_1;
      default:
        return 0;
    }
  }
  function setProgress(_this__u8e3s4, elementTitle) {
    switch (elementTitle) {
      case 'Baby':
        return _this__u8e3s4.eo8_1;
      case 'Shoulder':
        return _this__u8e3s4.mo8_1;
      case 'Turtle':
        return _this__u8e3s4.no8_1;
      case 'Head':
        return _this__u8e3s4.ho8_1;
      case 'Chair':
        return _this__u8e3s4.fo8_1;
      case 'Elbow':
        return _this__u8e3s4.go8_1;
      case 'HeadHollowback':
        return _this__u8e3s4.io8_1;
      case 'OneHand':
        return _this__u8e3s4.lo8_1;
      case 'Invert':
        return _this__u8e3s4.ko8_1;
      case 'Hollowback':
        return _this__u8e3s4.jo8_1;
      case 'Backspin':
        return _this__u8e3s4.po8_1;
      case 'TurtleMove':
        return _this__u8e3s4.zo8_1;
      case 'HeadSpin':
        return _this__u8e3s4.vo8_1;
      case 'Windmill':
        return _this__u8e3s4.co9_1;
      case 'Muchmill':
        return _this__u8e3s4.wo8_1;
      case 'Halo':
        return _this__u8e3s4.uo8_1;
      case 'Flare':
        return _this__u8e3s4.so8_1;
      case 'Wolf':
        return _this__u8e3s4.do9_1;
      case 'Web':
        return _this__u8e3s4.bo9_1;
      case 'Cricket':
        return _this__u8e3s4.qo8_1;
      case 'Airflare':
        return _this__u8e3s4.oo8_1;
      case 'Ninetynine':
        return _this__u8e3s4.xo8_1;
      case 'Ufo':
        return _this__u8e3s4.ao9_1;
      case 'ElbowAirflare':
        return _this__u8e3s4.ro8_1;
      case 'Jackhammer':
        return _this__u8e3s4.to8_1;
      case 'Swipes':
        return _this__u8e3s4.yo8_1;
      case 'Angle':
        return _this__u8e3s4.eo9_1;
      case 'Bridge':
        return _this__u8e3s4.fo9_1;
      case 'Fingers':
        return _this__u8e3s4.go9_1;
      case 'PushUps':
        return _this__u8e3s4.jo9_1;
      case 'SitUps':
        return _this__u8e3s4.ko9_1;
      case 'Handstand':
        return _this__u8e3s4.ho9_1;
      case 'Horizont':
        return _this__u8e3s4.io9_1;
      case 'PressToHandstand':
        return _this__u8e3s4.lo9_1;
      case 'Twine':
        return _this__u8e3s4.po9_1;
      case 'Butterfly':
        return _this__u8e3s4.mo9_1;
      case 'Fold':
        return _this__u8e3s4.no9_1;
      case 'Shoulders':
        return _this__u8e3s4.oo9_1;
      default:
        return 0.0;
    }
  }
  var com_korchagin_presentation_viewModel_MainViewModel$stable;
  function MainViewModel$loadCurrentUser$slambda$slambda(this$0, resultContinuation) {
    this.yo9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).aoa = function (it, $completion) {
    var tmp = this.boa(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).ma = function (p1, $completion) {
    return this.aoa(p1 instanceof PupilDomainModel ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          this.yo9_1.roa_1.a1y(toPupilModel(this.zo9_1));
          println('pupil: ' + toString_0(this.yo9_1.roa_1.c1()));
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
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).boa = function (it, completion) {
    var i = new MainViewModel$loadCurrentUser$slambda$slambda(this.yo9_1, completion);
    i.zo9_1 = it;
    return i;
  };
  function MainViewModel$loadCurrentUser$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadCurrentUser$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.aoa(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp = b.uo7_1;
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.uo7_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function MainViewModel$loadData$slambda$slambda$slambda(this$0, resultContinuation) {
    this.oob_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).qob = function (pupilsList, $completion) {
    var tmp = this.rob(pupilsList, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).ma = function (p1, $completion) {
    return this.qob((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var this_0 = this.pob_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            destination.e(toPupilModel(item));
          }
          var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda$lambda;
          this.oob_1.foa_1.a1y(sortedWith(destination, new sam$kotlin_Comparator$0(tmp_0)));
          println('pupils: ' + toString(this.oob_1.foa_1.c1()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda).rob = function (pupilsList, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda(this.oob_1, completion);
    i.pob_1 = pupilsList;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda(this$0, resultContinuation);
    var l = function (pupilsList, $completion) {
      return i.qob(pupilsList, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_1(this$0, resultContinuation) {
    this.aoc_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).coc = function (freezeElements, $completion) {
    var tmp = this.doc(freezeElements, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).ma = function (p1, $completion) {
    return this.coc((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var this_0 = this.boc_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            destination.e(toElementModel(item));
          }
          this.aoc_1.hoa_1.a1y(destination);
          println('elements: ' + toString(this.aoc_1.hoa_1.c1()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).doc = function (freezeElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this.aoc_1, completion);
    i.boc_1 = freezeElements;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this$0, resultContinuation);
    var l = function (freezeElements, $completion) {
      return i.coc(freezeElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_3(this$0, resultContinuation) {
    this.moc_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).coc = function (powerElements, $completion) {
    var tmp = this.doc(powerElements, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).ma = function (p1, $completion) {
    return this.coc((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var this_0 = this.noc_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            destination.e(toElementModel(item));
          }
          this.moc_1.joa_1.a1y(destination);
          println('elements: ' + toString(this.moc_1.joa_1.c1()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).doc = function (powerElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_3(this.moc_1, completion);
    i.noc_1 = powerElements;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_4(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_3(this$0, resultContinuation);
    var l = function (powerElements, $completion) {
      return i.coc(powerElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_5(this$0, resultContinuation) {
    this.woc_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).coc = function (ofpElements, $completion) {
    var tmp = this.doc(ofpElements, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).ma = function (p1, $completion) {
    return this.coc((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var this_0 = this.xoc_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            destination.e(toElementModel(item));
          }
          this.woc_1.loa_1.a1y(destination);
          println('elements: ' + toString(this.woc_1.loa_1.c1()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).doc = function (ofpElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_5(this.woc_1, completion);
    i.xoc_1 = ofpElements;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_6(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_5(this$0, resultContinuation);
    var l = function (ofpElements, $completion) {
      return i.coc(ofpElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_7(this$0, resultContinuation) {
    this.god_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).coc = function (stretchElements, $completion) {
    var tmp = this.doc(stretchElements, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).ma = function (p1, $completion) {
    return this.coc((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var this_0 = this.hod_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            destination.e(toElementModel(item));
          }
          this.god_1.noa_1.a1y(destination);
          println('elements: ' + toString(this.god_1.noa_1.c1()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).doc = function (stretchElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_7(this.god_1, completion);
    i.hod_1 = stretchElements;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_8(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_7(this$0, resultContinuation);
    var l = function (stretchElements, $completion) {
      return i.coc(stretchElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp = toInt(a.do6_1);
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp$ret$1 = toInt(b.do6_1);
    return compareValues(tmp, tmp$ret$1);
  }
  function MainViewModel$loadData$slambda$slambda$slambda_9(this$0, resultContinuation) {
    this.qod_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).sod = function (bboysList, $completion) {
    var tmp = this.tod(bboysList, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).ma = function (p1, $completion) {
    return this.sod((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var this_0 = this.rod_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            destination.e(toBboyModel(item));
          }
          var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda$lambda_0;
          this.qod_1.poa_1.a1y(sortedWith(destination, new sam$kotlin_Comparator$0(tmp_0)));
          println('elements: ' + toString(this.qod_1.poa_1.c1()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).tod = function (bboysList, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_9(this.qod_1, completion);
    i.rod_1 = bboysList;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda$slambda_10(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_9(this$0, resultContinuation);
    var l = function (bboysList, $completion) {
      return i.sod(bboysList, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda(this$0, resultContinuation) {
    this.coe_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = this.coe_1.doa_1.env_1.xnz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eoe_1 = suspendResult;
            this.s9_1 = 2;
            var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda_0(this.coe_1, null);
            suspendResult = this.eoe_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 3) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MainViewModel$loadData$slambda$slambda).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda(this.coe_1, completion);
    i.doe_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_1(this$0, resultContinuation) {
    this.noe_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_1).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = this.noe_1.doa_1.gnv_1.gnm();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_2(this.noe_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_1).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_1(this.noe_1, completion);
    i.ooe_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_3(this$0, resultContinuation) {
    this.xoe_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_3).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_3).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = this.xoe_1.doa_1.hnv_1.hnm();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_4(this.xoe_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_3).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_3(this.xoe_1, completion);
    i.yoe_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_4(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_5(this$0, resultContinuation) {
    this.hof_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_5).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_5).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = this.hof_1.doa_1.inv_1.inm();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_6(this.hof_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_5).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_5(this.hof_1, completion);
    i.iof_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_6(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_5(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_7(this$0, resultContinuation) {
    this.rof_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_7).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_7).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_7).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = this.rof_1.doa_1.jnv_1.jnm();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_8(this.rof_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_7).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_7(this.rof_1, completion);
    i.sof_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_8(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_7(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_9(this$0, resultContinuation) {
    this.bog_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_9).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_9).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_9).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = this.bog_1.doa_1.knv_1.knm();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_10(this.bog_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_9).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_9(this.bog_1, completion);
    i.cog_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda$slambda_10(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_9(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_element__ae2pkn($this, _set____db54di) {
    var this_0 = $this.cob_1;
    element$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _set_elementRating__jlpq5o($this, _set____db54di) {
    var this_0 = $this.dob_1;
    elementRating$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _set_bboy__9kfazx($this, _set____db54di) {
    var this_0 = $this.eob_1;
    bboy$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _set_checkedState__z3kc4t($this, _set____db54di) {
    var this_0 = $this.fob_1;
    checkedState$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function loadData($this) {
    launch($this.eoa_1, VOID, VOID, MainViewModel$loadData$slambda_0($this, null));
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.dog_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.dog_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.dog_1;
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
  function sam$kotlin_Comparator$0(function_0) {
    this.eog_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.eog_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).x3 = function () {
    return this.eog_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.fog_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).y1r = function (value, $completion) {
    return this.fog_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x3 = function () {
    return this.fog_1;
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
  function MainViewModel$uploadNewUserAvatar$slambda(this$0, $email, $bytes, resultContinuation) {
    this.oog_1 = this$0;
    this.pog_1 = $email;
    this.qog_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.oog_1.doa_1.mnv_1.ao6(this.pog_1, this.qog_1, this);
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
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$uploadNewUserAvatar$slambda(this.oog_1, this.pog_1, this.qog_1, completion);
    i.rog_1 = $this$launch;
    return i;
  };
  function MainViewModel$uploadNewUserAvatar$slambda_0(this$0, $email, $bytes, resultContinuation) {
    var i = new MainViewModel$uploadNewUserAvatar$slambda(this$0, $email, $bytes, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadCurrentUser$slambda(this$0, $currentUser, resultContinuation) {
    this.aoh_1 = this$0;
    this.boh_1 = $currentUser;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadCurrentUser$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadCurrentUser$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadCurrentUser$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = this.aoh_1.doa_1.fnv_1.yo4(this.boh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.doh_1 = suspendResult;
            this.s9_1 = 2;
            var tmp_0 = MainViewModel$loadCurrentUser$slambda$slambda_0(this.aoh_1, null);
            suspendResult = this.doh_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 3) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MainViewModel$loadCurrentUser$slambda).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadCurrentUser$slambda(this.aoh_1, this.boh_1, completion);
    i.coh_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadCurrentUser$slambda_0(this$0, $currentUser, resultContinuation) {
    var i = new MainViewModel$loadCurrentUser$slambda(this$0, $currentUser, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda(this$0, resultContinuation) {
    this.moh_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MainViewModel$loadData$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.ooh_1 = launch(this.moh_1.eoa_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_0(this.moh_1, null));
            var tmp_1 = this;
            tmp_1.poh_1 = launch(this.moh_1.eoa_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_2(this.moh_1, null));
            var tmp_2 = this;
            tmp_2.qoh_1 = launch(this.moh_1.eoa_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_4(this.moh_1, null));
            var tmp_3 = this;
            tmp_3.roh_1 = launch(this.moh_1.eoa_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_6(this.moh_1, null));
            var tmp_4 = this;
            tmp_4.soh_1 = launch(this.moh_1.eoa_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_8(this.moh_1, null));
            var tmp_5 = this;
            tmp_5.toh_1 = launch(this.moh_1.eoa_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_10(this.moh_1, null));
            this.uoh_1 = listOf([this.ooh_1, this.poh_1, this.qoh_1, this.roh_1, this.soh_1, this.toh_1]);
            this.voh_1 = this.uoh_1;
            var tmp0_iterator = this.voh_1.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              element.f15();
            }

            this.s9_1 = 1;
            suspendResult = joinAll(this.voh_1, this);
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
  protoOf(MainViewModel$loadData$slambda).b20 = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda(this.moh_1, completion);
    i.noh_1 = $this$launch;
    return i;
  };
  function MainViewModel$loadData$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel(mainUseCase) {
    ViewModel_init_$Init$(this);
    this.doa_1 = mainUseCase;
    this.eoa_1 = CoroutineScope_0(Dispatchers_getInstance().e1h().hj(SupervisorJob()));
    this.foa_1 = MutableStateFlow(emptyList());
    this.goa_1 = this.foa_1;
    this.hoa_1 = MutableStateFlow(emptyList());
    this.ioa_1 = this.hoa_1;
    this.joa_1 = MutableStateFlow(emptyList());
    this.koa_1 = this.joa_1;
    this.loa_1 = MutableStateFlow(emptyList());
    this.moa_1 = this.loa_1;
    this.noa_1 = MutableStateFlow(emptyList());
    this.ooa_1 = this.noa_1;
    this.poa_1 = MutableStateFlow(emptyList());
    this.qoa_1 = this.poa_1;
    this.roa_1 = MutableStateFlow(null);
    this.soa_1 = this.roa_1;
    this.toa_1 = MutableStateFlow(null);
    this.uoa_1 = this.toa_1;
    this.voa_1 = MutableStateFlow(false);
    this.woa_1 = this.voa_1;
    this.xoa_1 = MutableStateFlow(379);
    this.yoa_1 = this.xoa_1;
    this.zoa_1 = MutableStateFlow(640);
    this.aob_1 = this.zoa_1;
    this.bob_1 = mutableStateOf(0);
    this.cob_1 = mutableStateOf(new ElementModel());
    this.dob_1 = mutableStateOf(0);
    this.eob_1 = mutableStateOf(new BboyModel());
    this.fob_1 = mutableStateOf(true);
    loadData(this);
  }
  protoOf(MainViewModel).woh = function (width) {
    this.xoa_1.a1y(width);
  };
  protoOf(MainViewModel).xoh = function (height) {
    this.zoa_1.a1y(height);
  };
  protoOf(MainViewModel).yoh = function (_set____db54di) {
    var this_0 = this.bob_1;
    elementTabPosition$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  };
  protoOf(MainViewModel).zoh = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.bob_1;
    elementTabPosition$factory_0();
    return this_0.c1();
  };
  protoOf(MainViewModel).aoi = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.cob_1;
    element$factory_0();
    return this_0.c1();
  };
  protoOf(MainViewModel).boi = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.dob_1;
    elementRating$factory_0();
    return this_0.c1();
  };
  protoOf(MainViewModel).coi = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.eob_1;
    bboy$factory_0();
    return this_0.c1();
  };
  protoOf(MainViewModel).doi = function (bboy) {
    _set_bboy__9kfazx(this, bboy);
  };
  protoOf(MainViewModel).eoi = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.fob_1;
    checkedState$factory_0();
    return this_0.c1();
  };
  protoOf(MainViewModel).foi = function () {
    _set_checkedState__z3kc4t(this, !this.eoi());
  };
  protoOf(MainViewModel).goi = function (currentElement) {
    _set_element__ae2pkn(this, currentElement);
  };
  protoOf(MainViewModel).hoi = function (rating) {
    _set_elementRating__jlpq5o(this, rating);
  };
  protoOf(MainViewModel).ioi = function (email, bytes) {
    this.voa_1.a1y(true);
    println(' uploadNewUserAvatar bytes: ' + toString(bytes));
    launch(this.eoa_1, VOID, VOID, MainViewModel$uploadNewUserAvatar$slambda_0(this, email, bytes, null));
  };
  protoOf(MainViewModel).joi = function (pupil) {
    this.toa_1.a1y(pupil);
    println('clicked pupil: ' + toString_0(this.toa_1.c1()));
  };
  protoOf(MainViewModel).koi = function (currentUser) {
    launch(this.eoa_1, VOID, VOID, MainViewModel$loadCurrentUser$slambda_0(this, currentUser, null));
  };
  function com_korchagin_presentation_viewModel_MainViewModel$stableprop_getter() {
    return com_korchagin_presentation_viewModel_MainViewModel$stable;
  }
  function elementTabPosition$factory() {
    return getPropertyCallableRef('elementTabPosition', 1, KMutableProperty1, function (receiver) {
      return receiver.zoh();
    }, function (receiver, value) {
      return receiver.yoh(value);
    });
  }
  function elementTabPosition$factory_0() {
    return getPropertyCallableRef('elementTabPosition', 1, KMutableProperty1, function (receiver) {
      return receiver.zoh();
    }, function (receiver, value) {
      return receiver.yoh(value);
    });
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KMutableProperty1, function (receiver) {
      return receiver.aoi();
    }, function (receiver, value) {
      return _set_element__ae2pkn(receiver, value);
    });
  }
  function element$factory_0() {
    return getPropertyCallableRef('element', 1, KMutableProperty1, function (receiver) {
      return receiver.aoi();
    }, function (receiver, value) {
      return _set_element__ae2pkn(receiver, value);
    });
  }
  function elementRating$factory() {
    return getPropertyCallableRef('elementRating', 1, KMutableProperty1, function (receiver) {
      return receiver.boi();
    }, function (receiver, value) {
      return _set_elementRating__jlpq5o(receiver, value);
    });
  }
  function elementRating$factory_0() {
    return getPropertyCallableRef('elementRating', 1, KMutableProperty1, function (receiver) {
      return receiver.boi();
    }, function (receiver, value) {
      return _set_elementRating__jlpq5o(receiver, value);
    });
  }
  function bboy$factory() {
    return getPropertyCallableRef('bboy', 1, KMutableProperty1, function (receiver) {
      return receiver.coi();
    }, function (receiver, value) {
      return _set_bboy__9kfazx(receiver, value);
    });
  }
  function bboy$factory_0() {
    return getPropertyCallableRef('bboy', 1, KMutableProperty1, function (receiver) {
      return receiver.coi();
    }, function (receiver, value) {
      return _set_bboy__9kfazx(receiver, value);
    });
  }
  function checkedState$factory() {
    return getPropertyCallableRef('checkedState', 1, KMutableProperty1, function (receiver) {
      return receiver.eoi();
    }, function (receiver, value) {
      return _set_checkedState__z3kc4t(receiver, value);
    });
  }
  function checkedState$factory_0() {
    return getPropertyCallableRef('checkedState', 1, KMutableProperty1, function (receiver) {
      return receiver.eoi();
    }, function (receiver, value) {
      return _set_checkedState__z3kc4t(receiver, value);
    });
  }
  //region block: init
  com_korchagin_presentation_models_BboyModel$stable = 0;
  com_korchagin_presentation_models_ElementModel$stable = 8;
  com_korchagin_presentation_models_Elements$stable = 0;
  com_korchagin_presentation_models_ImageWithText$stable = 8;
  com_korchagin_presentation_models_PupilModel$stable = 8;
  com_korchagin_presentation_viewModel_MainViewModel$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_mainPresentationModule;
  _.$_$.b = Elements;
  _.$_$.c = ImageWithText;
  _.$_$.d = getElementRating;
  _.$_$.e = setProgress;
  _.$_$.f = MainViewModel;
  _.$_$.g = com_korchagin_presentation_viewModel_MainViewModel$stableprop_getter;
  _.$_$.h = ElementsTab_FREEZE_getInstance;
  _.$_$.i = ElementsTab_OFP_getInstance;
  _.$_$.j = ElementsTab_POWER_getInstance;
  _.$_$.k = ElementsTab_STRETCH_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-presentation_main.js.map
