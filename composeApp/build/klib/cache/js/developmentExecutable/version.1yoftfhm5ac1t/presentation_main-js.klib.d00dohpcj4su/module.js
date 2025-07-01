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
  var emptyList = kotlin_kotlin.$_$.ea;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var onOptions = kotlin_io_insert_koin_koin_core.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var MainUseCase = kotlin_BreakingKMPApp_module_main_domain_main.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var protoOf = kotlin_kotlin.$_$.ki;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var getNumberHashCode = kotlin_kotlin.$_$.yg;
  var equals = kotlin_kotlin.$_$.sg;
  var THROW_IAE = kotlin_kotlin.$_$.oo;
  var enumEntries = kotlin_kotlin.$_$.cg;
  var Enum = kotlin_kotlin.$_$.zn;
  var toString = kotlin_kotlin.$_$.oi;
  var hashCode = kotlin_kotlin.$_$.bh;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var PupilDomainModel = kotlin_BreakingKMPApp_module_main_domain_main.$_$.b;
  var toString_0 = kotlin_kotlin.$_$.eq;
  var println = kotlin_kotlin.$_$.dg;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var compareValues = kotlin_kotlin.$_$.ze;
  var KtList = kotlin_kotlin.$_$.m7;
  var isInterface = kotlin_kotlin.$_$.sh;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var sortedWith = kotlin_kotlin.$_$.md;
  var toInt = kotlin_kotlin.$_$.wm;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l3;
  var FunctionAdapter = kotlin_kotlin.$_$.eg;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Comparator = kotlin_kotlin.$_$.yn;
  var listOf = kotlin_kotlin.$_$.yb;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b3;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var KMutableProperty1 = kotlin_kotlin.$_$.sj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zg;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(BboyModel, 'BboyModel', BboyModel);
  initMetadataForClass(ElementModel, 'ElementModel', ElementModel);
  initMetadataForClass(Elements, 'Elements');
  initMetadataForClass(ElementsTab, 'ElementsTab', VOID, Enum);
  initMetadataForClass(ImageWithText, 'ImageWithText');
  initMetadataForClass(PupilModel, 'PupilModel');
  initMetadataForLambda(MainViewModel$loadCurrentUser$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_5, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_7, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda$slambda_9, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_5, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_7, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadData$slambda$slambda_9, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(MainViewModel$uploadNewUserAvatar$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainViewModel$loadCurrentUser$slambda, CoroutineImpl, [CoroutineImpl], [1]);
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
    this.name_1 = name;
    this.born_1 = born;
    this.rating_1 = rating;
    this.avatar_1 = avatar;
    this.country_1 = country;
    this.video_1 = video;
    this.description_1 = description;
    this.shortDescription_1 = shortDescription;
  }
  protoOf(BboyModel).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(BboyModel).get_born_wojlaq_k$ = function () {
    return this.born_1;
  };
  protoOf(BboyModel).get_rating_iw9d46_k$ = function () {
    return this.rating_1;
  };
  protoOf(BboyModel).get_avatar_b5pjz6_k$ = function () {
    return this.avatar_1;
  };
  protoOf(BboyModel).get_country_h3tl7x_k$ = function () {
    return this.country_1;
  };
  protoOf(BboyModel).get_video_j06c0i_k$ = function () {
    return this.video_1;
  };
  protoOf(BboyModel).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(BboyModel).get_shortDescription_ehpvfb_k$ = function () {
    return this.shortDescription_1;
  };
  protoOf(BboyModel).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(BboyModel).component2_7eebsb_k$ = function () {
    return this.born_1;
  };
  protoOf(BboyModel).component3_7eebsa_k$ = function () {
    return this.rating_1;
  };
  protoOf(BboyModel).component4_7eebs9_k$ = function () {
    return this.avatar_1;
  };
  protoOf(BboyModel).component5_7eebs8_k$ = function () {
    return this.country_1;
  };
  protoOf(BboyModel).component6_7eebs7_k$ = function () {
    return this.video_1;
  };
  protoOf(BboyModel).component7_7eebs6_k$ = function () {
    return this.description_1;
  };
  protoOf(BboyModel).component8_7eebs5_k$ = function () {
    return this.shortDescription_1;
  };
  protoOf(BboyModel).copy_akmpvv_k$ = function (name, born, rating, avatar, country, video, description, shortDescription) {
    return new BboyModel(name, born, rating, avatar, country, video, description, shortDescription);
  };
  protoOf(BboyModel).copy$default_ludnwx_k$ = function (name, born, rating, avatar, country, video, description, shortDescription, $super) {
    name = name === VOID ? this.name_1 : name;
    born = born === VOID ? this.born_1 : born;
    rating = rating === VOID ? this.rating_1 : rating;
    avatar = avatar === VOID ? this.avatar_1 : avatar;
    country = country === VOID ? this.country_1 : country;
    video = video === VOID ? this.video_1 : video;
    description = description === VOID ? this.description_1 : description;
    shortDescription = shortDescription === VOID ? this.shortDescription_1 : shortDescription;
    return $super === VOID ? this.copy_akmpvv_k$(name, born, rating, avatar, country, video, description, shortDescription) : $super.copy_akmpvv_k$.call(this, name, born, rating, avatar, country, video, description, shortDescription);
  };
  protoOf(BboyModel).toString = function () {
    return 'BboyModel(name=' + this.name_1 + ', born=' + this.born_1 + ', rating=' + this.rating_1 + ', avatar=' + this.avatar_1 + ', country=' + this.country_1 + ', video=' + this.video_1 + ', description=' + this.description_1 + ', shortDescription=' + this.shortDescription_1 + ')';
  };
  protoOf(BboyModel).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + getStringHashCode(this.born_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rating_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.avatar_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.country_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.video_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.description_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.shortDescription_1) | 0;
    return result;
  };
  protoOf(BboyModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BboyModel))
      return false;
    var tmp0_other_with_cast = other instanceof BboyModel ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.born_1 === tmp0_other_with_cast.born_1))
      return false;
    if (!(this.rating_1 === tmp0_other_with_cast.rating_1))
      return false;
    if (!(this.avatar_1 === tmp0_other_with_cast.avatar_1))
      return false;
    if (!(this.country_1 === tmp0_other_with_cast.country_1))
      return false;
    if (!(this.video_1 === tmp0_other_with_cast.video_1))
      return false;
    if (!(this.description_1 === tmp0_other_with_cast.description_1))
      return false;
    if (!(this.shortDescription_1 === tmp0_other_with_cast.shortDescription_1))
      return false;
    return true;
  };
  function toBboyModel(_this__u8e3s4) {
    return new BboyModel(_this__u8e3s4.get_name_woqyms_k$(), _this__u8e3s4.get_born_wojlaq_k$(), _this__u8e3s4.get_rating_iw9d46_k$(), _this__u8e3s4.get_avatar_b5pjz6_k$(), _this__u8e3s4.get_country_h3tl7x_k$(), _this__u8e3s4.get_video_j06c0i_k$(), _this__u8e3s4.get_description_emjre5_k$(), _this__u8e3s4.get_shortDescription_ehpvfb_k$());
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
    this.title_1 = title;
    this.image_1 = image;
    this.description_1 = description;
    this.blockDescription_1 = blockDescription;
    this.progress10__1 = progress10;
    this.progress20__1 = progress20;
    this.progress30__1 = progress30;
    this.progress40__1 = progress40;
    this.progress50__1 = progress50;
    this.progress60__1 = progress60;
    this.progress70__1 = progress70;
    this.progress80__1 = progress80;
    this.progress90__1 = progress90;
    this.progress100__1 = progress100;
    this.videoUrl_1 = videoUrl;
  }
  protoOf(ElementModel).set_title_apz2j3_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(ElementModel).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(ElementModel).set_image_7p6b84_k$ = function (_set____db54di) {
    this.image_1 = _set____db54di;
  };
  protoOf(ElementModel).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(ElementModel).set_description_5tkket_k$ = function (_set____db54di) {
    this.description_1 = _set____db54di;
  };
  protoOf(ElementModel).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(ElementModel).set_blockDescription_j8haym_k$ = function (_set____db54di) {
    this.blockDescription_1 = _set____db54di;
  };
  protoOf(ElementModel).get_blockDescription_1s1jig_k$ = function () {
    return this.blockDescription_1;
  };
  protoOf(ElementModel).set_progress10_c89pfl_k$ = function (_set____db54di) {
    this.progress10__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress10_jkir8r_k$ = function () {
    return this.progress10__1;
  };
  protoOf(ElementModel).set_progress20_7rojum_k$ = function (_set____db54di) {
    this.progress20__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress20_jkir7w_k$ = function () {
    return this.progress20__1;
  };
  protoOf(ElementModel).set_progress30_rrmt4t_k$ = function (_set____db54di) {
    this.progress30__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress30_jkir71_k$ = function () {
    return this.progress30__1;
  };
  protoOf(ElementModel).set_progress40_n9izk4_k$ = function (_set____db54di) {
    this.progress40__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress40_jkir66_k$ = function () {
    return this.progress40__1;
  };
  protoOf(ElementModel).set_progress50_39kq9x_k$ = function (_set____db54di) {
    this.progress50__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress50_jkir5b_k$ = function () {
    return this.progress50__1;
  };
  protoOf(ElementModel).set_progress60_gqdj0a_k$ = function (_set____db54di) {
    this.progress60__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress60_jkir4g_k$ = function () {
    return this.progress60__1;
  };
  protoOf(ElementModel).set_progress70_yas9on_k$ = function (_set____db54di) {
    this.progress70__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress70_jkir3l_k$ = function () {
    return this.progress70__1;
  };
  protoOf(ElementModel).set_progress80_eau0eg_k$ = function (_set____db54di) {
    this.progress80__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress80_jkir2q_k$ = function () {
    return this.progress80__1;
  };
  protoOf(ElementModel).set_progress90_5p48vr_k$ = function (_set____db54di) {
    this.progress90__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress90_jkir1v_k$ = function () {
    return this.progress90__1;
  };
  protoOf(ElementModel).set_progress100_tzqbct_k$ = function (_set____db54di) {
    this.progress100__1 = _set____db54di;
  };
  protoOf(ElementModel).get_progress100_wlv1a3_k$ = function () {
    return this.progress100__1;
  };
  protoOf(ElementModel).set_videoUrl_n280k9_k$ = function (_set____db54di) {
    this.videoUrl_1 = _set____db54di;
  };
  protoOf(ElementModel).get_videoUrl_crfpkz_k$ = function () {
    return this.videoUrl_1;
  };
  protoOf(ElementModel).component1_7eebsc_k$ = function () {
    return this.title_1;
  };
  protoOf(ElementModel).component2_7eebsb_k$ = function () {
    return this.image_1;
  };
  protoOf(ElementModel).component3_7eebsa_k$ = function () {
    return this.description_1;
  };
  protoOf(ElementModel).component4_7eebs9_k$ = function () {
    return this.blockDescription_1;
  };
  protoOf(ElementModel).component5_7eebs8_k$ = function () {
    return this.progress10__1;
  };
  protoOf(ElementModel).component6_7eebs7_k$ = function () {
    return this.progress20__1;
  };
  protoOf(ElementModel).component7_7eebs6_k$ = function () {
    return this.progress30__1;
  };
  protoOf(ElementModel).component8_7eebs5_k$ = function () {
    return this.progress40__1;
  };
  protoOf(ElementModel).component9_7eebs4_k$ = function () {
    return this.progress50__1;
  };
  protoOf(ElementModel).component10_gazzfo_k$ = function () {
    return this.progress60__1;
  };
  protoOf(ElementModel).component11_gazzfn_k$ = function () {
    return this.progress70__1;
  };
  protoOf(ElementModel).component12_gazzfm_k$ = function () {
    return this.progress80__1;
  };
  protoOf(ElementModel).component13_gazzfl_k$ = function () {
    return this.progress90__1;
  };
  protoOf(ElementModel).component14_gazzfk_k$ = function () {
    return this.progress100__1;
  };
  protoOf(ElementModel).component15_gazzfj_k$ = function () {
    return this.videoUrl_1;
  };
  protoOf(ElementModel).copy_fexonv_k$ = function (title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl) {
    return new ElementModel(title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl);
  };
  protoOf(ElementModel).copy$default_vueojm_k$ = function (title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl, $super) {
    title = title === VOID ? this.title_1 : title;
    image = image === VOID ? this.image_1 : image;
    description = description === VOID ? this.description_1 : description;
    blockDescription = blockDescription === VOID ? this.blockDescription_1 : blockDescription;
    progress10 = progress10 === VOID ? this.progress10__1 : progress10;
    progress20 = progress20 === VOID ? this.progress20__1 : progress20;
    progress30 = progress30 === VOID ? this.progress30__1 : progress30;
    progress40 = progress40 === VOID ? this.progress40__1 : progress40;
    progress50 = progress50 === VOID ? this.progress50__1 : progress50;
    progress60 = progress60 === VOID ? this.progress60__1 : progress60;
    progress70 = progress70 === VOID ? this.progress70__1 : progress70;
    progress80 = progress80 === VOID ? this.progress80__1 : progress80;
    progress90 = progress90 === VOID ? this.progress90__1 : progress90;
    progress100 = progress100 === VOID ? this.progress100__1 : progress100;
    videoUrl = videoUrl === VOID ? this.videoUrl_1 : videoUrl;
    return $super === VOID ? this.copy_fexonv_k$(title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl) : $super.copy_fexonv_k$.call(this, title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl);
  };
  protoOf(ElementModel).toString = function () {
    return 'ElementModel(title=' + this.title_1 + ', image=' + this.image_1 + ', description=' + this.description_1 + ', blockDescription=' + this.blockDescription_1 + ', progress10=' + this.progress10__1 + ', progress20=' + this.progress20__1 + ', progress30=' + this.progress30__1 + ', progress40=' + this.progress40__1 + ', progress50=' + this.progress50__1 + ', progress60=' + this.progress60__1 + ', progress70=' + this.progress70__1 + ', progress80=' + this.progress80__1 + ', progress90=' + this.progress90__1 + ', progress100=' + this.progress100__1 + ', videoUrl=' + this.videoUrl_1 + ')';
  };
  protoOf(ElementModel).hashCode = function () {
    var result = getStringHashCode(this.title_1);
    result = imul(result, 31) + getStringHashCode(this.image_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.description_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.blockDescription_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress10__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress20__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress30__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress40__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress50__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress60__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress70__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress80__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress90__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.progress100__1) | 0;
    result = imul(result, 31) + getStringHashCode(this.videoUrl_1) | 0;
    return result;
  };
  protoOf(ElementModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementModel))
      return false;
    var tmp0_other_with_cast = other instanceof ElementModel ? other : THROW_CCE();
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.image_1 === tmp0_other_with_cast.image_1))
      return false;
    if (!(this.description_1 === tmp0_other_with_cast.description_1))
      return false;
    if (!(this.blockDescription_1 === tmp0_other_with_cast.blockDescription_1))
      return false;
    if (!(this.progress10__1 === tmp0_other_with_cast.progress10__1))
      return false;
    if (!(this.progress20__1 === tmp0_other_with_cast.progress20__1))
      return false;
    if (!(this.progress30__1 === tmp0_other_with_cast.progress30__1))
      return false;
    if (!(this.progress40__1 === tmp0_other_with_cast.progress40__1))
      return false;
    if (!(this.progress50__1 === tmp0_other_with_cast.progress50__1))
      return false;
    if (!(this.progress60__1 === tmp0_other_with_cast.progress60__1))
      return false;
    if (!(this.progress70__1 === tmp0_other_with_cast.progress70__1))
      return false;
    if (!(this.progress80__1 === tmp0_other_with_cast.progress80__1))
      return false;
    if (!(this.progress90__1 === tmp0_other_with_cast.progress90__1))
      return false;
    if (!(this.progress100__1 === tmp0_other_with_cast.progress100__1))
      return false;
    if (!(this.videoUrl_1 === tmp0_other_with_cast.videoUrl_1))
      return false;
    return true;
  };
  function toElementModel(_this__u8e3s4) {
    return new ElementModel(_this__u8e3s4.get_title_iz32un_k$(), _this__u8e3s4.get_image_it3i2a_k$(), _this__u8e3s4.get_description_emjre5_k$(), _this__u8e3s4.get_blockDescription_1s1jig_k$(), _this__u8e3s4.get_progress10_jkir8r_k$(), _this__u8e3s4.get_progress20_jkir7w_k$(), _this__u8e3s4.get_progress30_jkir71_k$(), _this__u8e3s4.get_progress40_jkir66_k$(), _this__u8e3s4.get_progress50_jkir5b_k$(), _this__u8e3s4.get_progress60_jkir4g_k$(), _this__u8e3s4.get_progress70_jkir3l_k$(), _this__u8e3s4.get_progress80_jkir2q_k$(), _this__u8e3s4.get_progress90_jkir1v_k$(), _this__u8e3s4.get_progress100_wlv1a3_k$(), _this__u8e3s4.get_videoUrl_crfpkz_k$());
  }
  var com_korchagin_presentation_models_Elements$stable;
  function Elements(icon, title, block_description, progress) {
    this.icon_1 = icon;
    this.title_1 = title;
    this.block_description_1 = block_description;
    this.progress_1 = progress;
  }
  protoOf(Elements).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(Elements).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Elements).get_block_description_64ran5_k$ = function () {
    return this.block_description_1;
  };
  protoOf(Elements).get_progress_mo5qeu_k$ = function () {
    return this.progress_1;
  };
  protoOf(Elements).component1_7eebsc_k$ = function () {
    return this.icon_1;
  };
  protoOf(Elements).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(Elements).component3_7eebsa_k$ = function () {
    return this.block_description_1;
  };
  protoOf(Elements).component4_7eebs9_k$ = function () {
    return this.progress_1;
  };
  protoOf(Elements).copy_50av49_k$ = function (icon, title, block_description, progress) {
    return new Elements(icon, title, block_description, progress);
  };
  protoOf(Elements).copy$default_lze3ur_k$ = function (icon, title, block_description, progress, $super) {
    icon = icon === VOID ? this.icon_1 : icon;
    title = title === VOID ? this.title_1 : title;
    block_description = block_description === VOID ? this.block_description_1 : block_description;
    progress = progress === VOID ? this.progress_1 : progress;
    return $super === VOID ? this.copy_50av49_k$(icon, title, block_description, progress) : $super.copy_50av49_k$.call(this, icon, title, block_description, progress);
  };
  protoOf(Elements).toString = function () {
    return 'Elements(icon=' + this.icon_1 + ', title=' + this.title_1 + ', block_description=' + this.block_description_1 + ', progress=' + this.progress_1 + ')';
  };
  protoOf(Elements).hashCode = function () {
    var result = this.icon_1 == null ? 0 : getStringHashCode(this.icon_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.block_description_1) | 0;
    result = imul(result, 31) + (this.progress_1 == null ? 0 : getNumberHashCode(this.progress_1)) | 0;
    return result;
  };
  protoOf(Elements).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Elements))
      return false;
    var tmp0_other_with_cast = other instanceof Elements ? other : THROW_CCE();
    if (!(this.icon_1 == tmp0_other_with_cast.icon_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.block_description_1 === tmp0_other_with_cast.block_description_1))
      return false;
    if (!equals(this.progress_1, tmp0_other_with_cast.progress_1))
      return false;
    return true;
  };
  var ElementsTab_FREEZE_instance;
  var ElementsTab_POWER_instance;
  var ElementsTab_OFP_instance;
  var ElementsTab_STRETCH_instance;
  function values() {
    return [ElementsTab_FREEZE_getInstance(), ElementsTab_POWER_getInstance(), ElementsTab_OFP_getInstance(), ElementsTab_STRETCH_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FREEZE':
        return ElementsTab_FREEZE_getInstance();
      case 'POWER':
        return ElementsTab_POWER_getInstance();
      case 'OFP':
        return ElementsTab_OFP_getInstance();
      case 'STRETCH':
        return ElementsTab_STRETCH_getInstance();
      default:
        ElementsTab_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ElementsTab_entriesInitialized;
  function ElementsTab_initEntries() {
    if (ElementsTab_entriesInitialized)
      return Unit_getInstance();
    ElementsTab_entriesInitialized = true;
    ElementsTab_FREEZE_instance = new ElementsTab('FREEZE', 0);
    ElementsTab_POWER_instance = new ElementsTab('POWER', 1);
    ElementsTab_OFP_instance = new ElementsTab('OFP', 2);
    ElementsTab_STRETCH_instance = new ElementsTab('STRETCH', 3);
  }
  var $ENTRIES;
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
    this.image_1 = image;
    this.text_1 = text;
  }
  protoOf(ImageWithText).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(ImageWithText).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(ImageWithText).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(ImageWithText).component2_7eebsb_k$ = function () {
    return this.text_1;
  };
  protoOf(ImageWithText).copy_fyyfjw_k$ = function (image, text) {
    return new ImageWithText(image, text);
  };
  protoOf(ImageWithText).copy$default_j8e7bn_k$ = function (image, text, $super) {
    image = image === VOID ? this.image_1 : image;
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_fyyfjw_k$(image, text) : $super.copy_fyyfjw_k$.call(this, image, text);
  };
  protoOf(ImageWithText).toString = function () {
    return 'ImageWithText(image=' + toString(this.image_1) + ', text=' + this.text_1 + ')';
  };
  protoOf(ImageWithText).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    return result;
  };
  protoOf(ImageWithText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageWithText))
      return false;
    var tmp0_other_with_cast = other instanceof ImageWithText ? other : THROW_CCE();
    if (!equals(this.image_1, tmp0_other_with_cast.image_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  var com_korchagin_presentation_models_PupilModel$stable;
  function PupilModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushUps, sitUps, pressUpHandstand, butterfly, fold, shoulders, twine) {
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
    this.pushUps_1 = pushUps;
    this.sitUps_1 = sitUps;
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
  protoOf(PupilModel).set_pushUps_of9bax_k$ = function (_set____db54di) {
    this.pushUps_1 = _set____db54di;
  };
  protoOf(PupilModel).get_pushUps_2db7l7_k$ = function () {
    return this.pushUps_1;
  };
  protoOf(PupilModel).set_sitUps_kdjo7j_k$ = function (_set____db54di) {
    this.sitUps_1 = _set____db54di;
  };
  protoOf(PupilModel).get_sitUps_jhoxhf_k$ = function () {
    return this.sitUps_1;
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
    return this.pushUps_1;
  };
  protoOf(PupilModel).component59_gazzbz_k$ = function () {
    return this.sitUps_1;
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
  protoOf(PupilModel).copy_psg3in_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushUps, sitUps, pressUpHandstand, butterfly, fold, shoulders, twine) {
    return new PupilModel(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushUps, sitUps, pressUpHandstand, butterfly, fold, shoulders, twine);
  };
  protoOf(PupilModel).copy$default_isy8p3_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushUps, sitUps, pressUpHandstand, butterfly, fold, shoulders, twine, $super) {
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
    pushUps = pushUps === VOID ? this.pushUps_1 : pushUps;
    sitUps = sitUps === VOID ? this.sitUps_1 : sitUps;
    pressUpHandstand = pressUpHandstand === VOID ? this.pressUpHandstand_1 : pressUpHandstand;
    butterfly = butterfly === VOID ? this.butterfly_1 : butterfly;
    fold = fold === VOID ? this.fold_1 : fold;
    shoulders = shoulders === VOID ? this.shoulders_1 : shoulders;
    twine = twine === VOID ? this.twine_1 : twine;
    return $super === VOID ? this.copy_psg3in_k$(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushUps, sitUps, pressUpHandstand, butterfly, fold, shoulders, twine) : $super.copy_psg3in_k$.call(this, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freezeRating, powermoveRating, ofpRating, strechingRating, battleRating, battleCurPosition, battleNewPosition, newPosition, currentPosition, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninetyNine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushUps, sitUps, pressUpHandstand, butterfly, fold, shoulders, twine);
  };
  protoOf(PupilModel).toString = function () {
    return 'PupilModel(id=' + this.id_1 + ', name=' + this.name_1 + ', email=' + this.email_1 + ', avatar=' + this.avatar_1 + ', born=' + this.born_1 + ', country=' + this.country_1 + ', city=' + this.city_1 + ', video=' + this.video_1 + ', status=' + this.status_1 + ', subscription=' + this.subscription_1.toString() + ', subscriptionDay=' + this.subscriptionDay_1 + ', subscriptionMonth=' + this.subscriptionMonth_1 + ', subscriptionYear=' + this.subscriptionYear_1 + ', currentTask=' + this.currentTask_1 + ', currentTaskProgress=' + this.currentTaskProgress_1 + ', roundsList=' + this.roundsList_1 + ', rating=' + this.rating_1 + ', freezeRating=' + this.freezeRating_1 + ', powermoveRating=' + this.powermoveRating_1 + ', ofpRating=' + this.ofpRating_1 + ', strechingRating=' + this.strechingRating_1 + ', battleRating=' + this.battleRating_1 + ', battleCurPosition=' + this.battleCurPosition_1 + ', battleNewPosition=' + this.battleNewPosition_1 + ', newPosition=' + this.newPosition_1 + ', currentPosition=' + this.currentPosition_1 + ', babyfrezze=' + this.babyfrezze_1 + ', chairfrezze=' + this.chairfrezze_1 + ', elbowfrezze=' + this.elbowfrezze_1 + ', headfrezze=' + this.headfrezze_1 + ', headhollowbackfrezze=' + this.headhollowbackfrezze_1 + ', hollowbackfrezze=' + this.hollowbackfrezze_1 + ', invertfrezze=' + this.invertfrezze_1 + ', onehandfrezze=' + this.onehandfrezze_1 + ', shoulderfrezze=' + this.shoulderfrezze_1 + ', turtlefrezze=' + this.turtlefrezze_1 + ', airflare=' + this.airflare_1 + ', backspin=' + this.backspin_1 + ', cricket=' + this.cricket_1 + ', elbowairflare=' + this.elbowairflare_1 + ', flare=' + this.flare_1 + ', jackhammer=' + this.jackhammer_1 + ', halo=' + this.halo_1 + ', headspin=' + this.headspin_1 + ', munchmill=' + this.munchmill_1 + ', ninetyNine=' + this.ninetyNine_1 + ', swipes=' + this.swipes_1 + ', turtle=' + this.turtle_1 + ', ufo=' + this.ufo_1 + ', web=' + this.web_1 + ', windmill=' + this.windmill_1 + ', wolf=' + this.wolf_1 + ', angle=' + this.angle_1 + ', bridge=' + this.bridge_1 + ', finger=' + this.finger_1 + ', handstand=' + this.handstand_1 + ', horizont=' + this.horizont_1 + ', pushUps=' + this.pushUps_1 + ', sitUps=' + this.sitUps_1 + ', pressUpHandstand=' + this.pressUpHandstand_1 + ', butterfly=' + this.butterfly_1 + ', fold=' + this.fold_1 + ', shoulders=' + this.shoulders_1 + ', twine=' + this.twine_1 + ')';
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
    result = imul(result, 31) + this.pushUps_1 | 0;
    result = imul(result, 31) + this.sitUps_1 | 0;
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
    if (!(this.pushUps_1 === tmp0_other_with_cast.pushUps_1))
      return false;
    if (!(this.sitUps_1 === tmp0_other_with_cast.sitUps_1))
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
  function toPupilModel(_this__u8e3s4) {
    return new PupilModel(_this__u8e3s4.get_id_kntnx8_k$(), _this__u8e3s4.get_name_woqyms_k$(), _this__u8e3s4.get_email_iqwbqr_k$(), _this__u8e3s4.get_avatar_b5pjz6_k$(), _this__u8e3s4.get_born_wojlaq_k$(), _this__u8e3s4.get_country_h3tl7x_k$(), _this__u8e3s4.get_city_wok3w4_k$(), _this__u8e3s4.get_video_j06c0i_k$(), _this__u8e3s4.get_status_jnf6d7_k$(), _this__u8e3s4.get_subscription_a6pgti_k$(), _this__u8e3s4.get_subscriptionDay_gjomdy_k$(), _this__u8e3s4.get_subscriptionMonth_9brqdi_k$(), _this__u8e3s4.get_subscriptionYear_fqsddv_k$(), _this__u8e3s4.get_currentTask_nu5nat_k$(), _this__u8e3s4.get_currentTaskProgress_oh2d8i_k$(), _this__u8e3s4.get_roundsList_maupw4_k$(), _this__u8e3s4.get_rating_iw9d46_k$(), _this__u8e3s4.get_freezeRating_hx7vq5_k$(), _this__u8e3s4.get_powermoveRating_pqg11y_k$(), _this__u8e3s4.get_ofpRating_yvr5tf_k$(), _this__u8e3s4.get_strechingRating_pjs2g3_k$(), _this__u8e3s4.get_battleRating_uwfp6q_k$(), _this__u8e3s4.get_battleCurPosition_yuwtfs_k$(), _this__u8e3s4.get_battleNewPosition_ycjhy0_k$(), _this__u8e3s4.get_newPosition_nzgbcw_k$(), _this__u8e3s4.get_currentPosition_ic997d_k$(), _this__u8e3s4.get_babyfrezze_82x48l_k$(), _this__u8e3s4.get_chairfrezze_4mnfns_k$(), _this__u8e3s4.get_elbowfrezze_6kbw5i_k$(), _this__u8e3s4.get_headfrezze_d0gxxx_k$(), _this__u8e3s4.get_headhollowbackfrezze_j16lbf_k$(), _this__u8e3s4.get_hollowbackfrezze_5synt7_k$(), _this__u8e3s4.get_invertfrezze_g829zf_k$(), _this__u8e3s4.get_onehandfrezze_8vzd0o_k$(), _this__u8e3s4.get_shoulderfrezze_uv4etx_k$(), _this__u8e3s4.get_turtlefrezze_2dd91r_k$(), _this__u8e3s4.get_airflare_rvlnyl_k$(), _this__u8e3s4.get_backspin_3adc36_k$(), _this__u8e3s4.get_cricket_ic5pfs_k$(), _this__u8e3s4.get_elbowairflare_pjyvy_k$(), _this__u8e3s4.get_flare_irfhk5_k$(), _this__u8e3s4.get_jackhammer_31ddri_k$(), _this__u8e3s4.get_halo_won4p1_k$(), _this__u8e3s4.get_headspin_ksfch7_k$(), _this__u8e3s4.get_munchmill_9uura6_k$(), _this__u8e3s4.get_ninetyNine_e2uhri_k$(), _this__u8e3s4.get_swipes_jp7koy_k$(), _this__u8e3s4.get_turtle_k5bfwl_k$(), _this__u8e3s4.get_ufo_18iusr_k$(), _this__u8e3s4.get_web_18itcl_k$(), _this__u8e3s4.get_windmill_ks2bjh_k$(), _this__u8e3s4.get_wolf_wowzvf_k$(), _this__u8e3s4.get_angle_iopwve_k$(), _this__u8e3s4.get_bridge_bkos5u_k$(), _this__u8e3s4.get_finger_dc0diq_k$(), _this__u8e3s4.get_handstand_9otdsu_k$(), _this__u8e3s4.get_horizont_xmt2pu_k$(), _this__u8e3s4.get_pushups_2dajuz_k$(), _this__u8e3s4.get_sit_ups_z1d66q_k$(), _this__u8e3s4.get_pressUpHandstand_vxm0pa_k$(), _this__u8e3s4.get_butterfly_8jzp3e_k$(), _this__u8e3s4.get_fold_wom53e_k$(), _this__u8e3s4.get_shoulders_npwbfa_k$(), _this__u8e3s4.get_twine_izbsk4_k$());
  }
  function getElementRating(_this__u8e3s4, title) {
    switch (title) {
      case 'Baby':
        return _this__u8e3s4.babyfrezze_1;
      case 'Chair':
        return _this__u8e3s4.chairfrezze_1;
      case 'Elbow':
        return _this__u8e3s4.elbowfrezze_1;
      case 'Head':
        return _this__u8e3s4.headfrezze_1;
      case 'HeadHollowback':
        return _this__u8e3s4.headhollowbackfrezze_1;
      case 'Hollowback':
        return _this__u8e3s4.hollowbackfrezze_1;
      case 'Invert':
        return _this__u8e3s4.invertfrezze_1;
      case 'OneHand':
        return _this__u8e3s4.onehandfrezze_1;
      case 'Shoulder':
        return _this__u8e3s4.shoulderfrezze_1;
      case 'Turtle':
        return _this__u8e3s4.turtlefrezze_1;
      case 'Airflare':
        return _this__u8e3s4.airflare_1;
      case 'Backspin':
        return _this__u8e3s4.backspin_1;
      case 'Cricket':
        return _this__u8e3s4.cricket_1;
      case 'ElbowAirflare':
        return _this__u8e3s4.elbowairflare_1;
      case 'Flare':
        return _this__u8e3s4.flare_1;
      case 'Jackhammer':
        return _this__u8e3s4.jackhammer_1;
      case 'Muchmill':
        return _this__u8e3s4.munchmill_1;
      case 'Ninetynine':
        return _this__u8e3s4.ninetyNine_1;
      case 'Web':
        return _this__u8e3s4.web_1;
      case 'Swipes':
        return _this__u8e3s4.swipes_1;
      case 'TurtleMove':
        return _this__u8e3s4.turtle_1;
      case 'Ufo':
        return _this__u8e3s4.ufo_1;
      case 'Windmill':
        return _this__u8e3s4.windmill_1;
      case 'Halo':
        return _this__u8e3s4.halo_1;
      case 'Wolf':
        return _this__u8e3s4.wolf_1;
      case 'HeadSpin':
        return _this__u8e3s4.headspin_1;
      case 'Angle':
        return _this__u8e3s4.angle_1;
      case 'Bridge':
        return _this__u8e3s4.bridge_1;
      case 'Fingers':
        return _this__u8e3s4.finger_1;
      case 'Handstand':
        return _this__u8e3s4.handstand_1;
      case 'PressToHandstand':
        return _this__u8e3s4.pressUpHandstand_1;
      case 'PushUps':
        return _this__u8e3s4.pushUps_1;
      case 'SitUps':
        return _this__u8e3s4.sitUps_1;
      case 'Horizont':
        return _this__u8e3s4.horizont_1;
      case 'Butterfly':
        return _this__u8e3s4.butterfly_1;
      case 'Fold':
        return _this__u8e3s4.fold_1;
      case 'Shoulders':
        return _this__u8e3s4.shoulders_1;
      case 'Twine':
        return _this__u8e3s4.twine_1;
      default:
        return 0;
    }
  }
  function setProgress(_this__u8e3s4, elementTitle) {
    switch (elementTitle) {
      case 'Baby':
        return _this__u8e3s4.babyfrezze_1;
      case 'Shoulder':
        return _this__u8e3s4.shoulderfrezze_1;
      case 'Turtle':
        return _this__u8e3s4.turtlefrezze_1;
      case 'Head':
        return _this__u8e3s4.headfrezze_1;
      case 'Chair':
        return _this__u8e3s4.chairfrezze_1;
      case 'Elbow':
        return _this__u8e3s4.elbowfrezze_1;
      case 'HeadHollowback':
        return _this__u8e3s4.headhollowbackfrezze_1;
      case 'OneHand':
        return _this__u8e3s4.onehandfrezze_1;
      case 'Invert':
        return _this__u8e3s4.invertfrezze_1;
      case 'Hollowback':
        return _this__u8e3s4.hollowbackfrezze_1;
      case 'Backspin':
        return _this__u8e3s4.backspin_1;
      case 'TurtleMove':
        return _this__u8e3s4.turtle_1;
      case 'HeadSpin':
        return _this__u8e3s4.headspin_1;
      case 'Windmill':
        return _this__u8e3s4.windmill_1;
      case 'Muchmill':
        return _this__u8e3s4.munchmill_1;
      case 'Halo':
        return _this__u8e3s4.halo_1;
      case 'Flare':
        return _this__u8e3s4.flare_1;
      case 'Wolf':
        return _this__u8e3s4.wolf_1;
      case 'Web':
        return _this__u8e3s4.web_1;
      case 'Cricket':
        return _this__u8e3s4.cricket_1;
      case 'Airflare':
        return _this__u8e3s4.airflare_1;
      case 'Ninetynine':
        return _this__u8e3s4.ninetyNine_1;
      case 'Ufo':
        return _this__u8e3s4.ufo_1;
      case 'ElbowAirflare':
        return _this__u8e3s4.elbowairflare_1;
      case 'Jackhammer':
        return _this__u8e3s4.jackhammer_1;
      case 'Swipes':
        return _this__u8e3s4.swipes_1;
      case 'Angle':
        return _this__u8e3s4.angle_1;
      case 'Bridge':
        return _this__u8e3s4.bridge_1;
      case 'Fingers':
        return _this__u8e3s4.finger_1;
      case 'PushUps':
        return _this__u8e3s4.pushUps_1;
      case 'SitUps':
        return _this__u8e3s4.sitUps_1;
      case 'Handstand':
        return _this__u8e3s4.handstand_1;
      case 'Horizont':
        return _this__u8e3s4.horizont_1;
      case 'PressToHandstand':
        return _this__u8e3s4.pressUpHandstand_1;
      case 'Twine':
        return _this__u8e3s4.twine_1;
      case 'Butterfly':
        return _this__u8e3s4.butterfly_1;
      case 'Fold':
        return _this__u8e3s4.fold_1;
      case 'Shoulders':
        return _this__u8e3s4.shoulders_1;
      default:
        return 0.0;
    }
  }
  var com_korchagin_presentation_viewModel_MainViewModel$stable;
  function MainViewModel$loadCurrentUser$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).invoke_8djpn5_k$ = function (it, $completion) {
    var tmp = this.create_7nlvl7_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_8djpn5_k$(p1 instanceof PupilDomainModel ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.this$0__1._currentPupil_1.set_value_v1vabv_k$(toPupilModel(this.it_1));
          println('pupil: ' + toString_0(this.this$0__1._currentPupil_1.get_value_j01efc_k$()));
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
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).create_7nlvl7_k$ = function (it, completion) {
    var i = new MainViewModel$loadCurrentUser$slambda$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(MainViewModel$loadCurrentUser$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_7nlvl7_k$(value instanceof PupilDomainModel ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadCurrentUser$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MainViewModel$loadCurrentUser$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_8djpn5_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
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
          println('pupils: ' + toString(this.this$0__1._pupils_1.get_value_j01efc_k$()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).invoke_kdqamt_k$ = function (freezeElements, $completion) {
    var tmp = this.create_r5wvz3_k$(freezeElements, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_kdqamt_k$((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.freezeElements_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            destination.add_utx5q5_k$(toElementModel(item));
          }
          this.this$0__1._freezeElements_1.set_value_v1vabv_k$(destination);
          println('elements: ' + toString(this.this$0__1._freezeElements_1.get_value_j01efc_k$()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).create_r5wvz3_k$ = function (freezeElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this.this$0__1, completion);
    i.freezeElements_1 = freezeElements;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_r5wvz3_k$((!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_1(this$0, resultContinuation);
    var l = function (freezeElements, $completion) {
      return i.invoke_kdqamt_k$(freezeElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).invoke_kdqamt_k$ = function (powerElements, $completion) {
    var tmp = this.create_r5wvz3_k$(powerElements, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_kdqamt_k$((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.powerElements_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            destination.add_utx5q5_k$(toElementModel(item));
          }
          this.this$0__1._powerElements_1.set_value_v1vabv_k$(destination);
          println('elements: ' + toString(this.this$0__1._powerElements_1.get_value_j01efc_k$()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).create_r5wvz3_k$ = function (powerElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_3(this.this$0__1, completion);
    i.powerElements_1 = powerElements;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_r5wvz3_k$((!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda$slambda_4(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_3(this$0, resultContinuation);
    var l = function (powerElements, $completion) {
      return i.invoke_kdqamt_k$(powerElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_5(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).invoke_kdqamt_k$ = function (ofpElements, $completion) {
    var tmp = this.create_r5wvz3_k$(ofpElements, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_kdqamt_k$((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.ofpElements_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            destination.add_utx5q5_k$(toElementModel(item));
          }
          this.this$0__1._ofpElements_1.set_value_v1vabv_k$(destination);
          println('elements: ' + toString(this.this$0__1._ofpElements_1.get_value_j01efc_k$()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).create_r5wvz3_k$ = function (ofpElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_5(this.this$0__1, completion);
    i.ofpElements_1 = ofpElements;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_5).create_wyq9v6_k$ = function (value, completion) {
    return this.create_r5wvz3_k$((!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda$slambda_6(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_5(this$0, resultContinuation);
    var l = function (ofpElements, $completion) {
      return i.invoke_kdqamt_k$(ofpElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda_7(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).invoke_kdqamt_k$ = function (stretchElements, $completion) {
    var tmp = this.create_r5wvz3_k$(stretchElements, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_kdqamt_k$((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.stretchElements_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            destination.add_utx5q5_k$(toElementModel(item));
          }
          this.this$0__1._stretchElements_1.set_value_v1vabv_k$(destination);
          println('elements: ' + toString(this.this$0__1._stretchElements_1.get_value_j01efc_k$()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).create_r5wvz3_k$ = function (stretchElements, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_7(this.this$0__1, completion);
    i.stretchElements_1 = stretchElements;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_7).create_wyq9v6_k$ = function (value, completion) {
    return this.create_r5wvz3_k$((!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda$slambda_8(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_7(this$0, resultContinuation);
    var l = function (stretchElements, $completion) {
      return i.invoke_kdqamt_k$(stretchElements, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda$slambda$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp = toInt(a.get_rating_iw9d46_k$());
    // Inline function 'com.korchagin.presentation.viewModel.MainViewModel.loadData.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp$ret$1 = toInt(b.get_rating_iw9d46_k$());
    return compareValues(tmp, tmp$ret$1);
  }
  function MainViewModel$loadData$slambda$slambda$slambda_9(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).invoke_icnih7_k$ = function (bboysList, $completion) {
    var tmp = this.create_d0f08h_k$(bboysList, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_icnih7_k$((!(p1 == null) ? isInterface(p1, KtList) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.bboysList_1;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            destination.add_utx5q5_k$(toBboyModel(item));
          }
          var tmp_0 = MainViewModel$loadData$slambda$slambda$slambda$lambda_0;
          this.this$0__1._bboysList_1.set_value_v1vabv_k$(sortedWith(destination, new sam$kotlin_Comparator$0(tmp_0)));
          println('elements: ' + toString(this.this$0__1._bboysList_1.get_value_j01efc_k$()));
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
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).create_d0f08h_k$ = function (bboysList, completion) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_9(this.this$0__1, completion);
    i.bboysList_1 = bboysList;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda$slambda_9).create_wyq9v6_k$ = function (value, completion) {
    return this.create_d0f08h_k$((!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda$slambda_10(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda$slambda_9(this$0, resultContinuation);
    var l = function (bboysList, $completion) {
      return i.invoke_icnih7_k$(bboysList, $completion);
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
            suspendResult = this.ARGUMENT0__1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.this$0__1.mainUseCase_1.get_getFreezeElements_uzuvaz_k$().getFreezeElements_b3r9zw_k$();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_2(this.this$0__1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function MainViewModel$loadData$slambda$slambda_3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_3).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.this$0__1.mainUseCase_1.get_getPowerElements_s3zpkf_k$().getPowerElements_3u850m_k$();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_4(this.this$0__1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_3).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_3(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda_4(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_5(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_5).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_5).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.this$0__1.mainUseCase_1.get_getOfpElements_6lmjc3_k$().getOfpElements_qrccyu_k$();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_6(this.this$0__1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_5).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_5(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda_5).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda_6(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_5(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_7(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_7).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_7).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.this$0__1.mainUseCase_1.get_getStretchElements_t2lunj_k$().getStretchElements_2ik9uu_k$();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_8(this.this$0__1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_7).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_7(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda_7).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda_8(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_7(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadData$slambda$slambda_9(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadData$slambda$slambda_9).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadData$slambda$slambda_9).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadData$slambda$slambda_9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.this$0__1.mainUseCase_1.get_getBboysList_p8qf6i_k$().getBboysList_kp64gh_k$();
            var tmp_1 = MainViewModel$loadData$slambda$slambda$slambda_10(this.this$0__1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(MainViewModel$loadData$slambda$slambda_9).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadData$slambda$slambda_9(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadData$slambda$slambda_9).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadData$slambda$slambda_10(this$0, resultContinuation) {
    var i = new MainViewModel$loadData$slambda$slambda_9(this$0, resultContinuation);
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
  function _get__freezeElements__yw3rbw($this) {
    return $this._freezeElements_1;
  }
  function _get__powerElements__8h041e($this) {
    return $this._powerElements_1;
  }
  function _get__ofpElements__rv6zdm($this) {
    return $this._ofpElements_1;
  }
  function _get__stretchElements__7g2b9q($this) {
    return $this._stretchElements_1;
  }
  function _get__bboysList__5vkjwd($this) {
    return $this._bboysList_1;
  }
  function _get__currentPupil__vfbg8t($this) {
    return $this._currentPupil_1;
  }
  function _get__clickedPupil__9za78r($this) {
    return $this._clickedPupil_1;
  }
  function _get__userAvatarOnLoading__d063jj($this) {
    return $this._userAvatarOnLoading_1;
  }
  function _get__screenWidth__5wavg0($this) {
    return $this._screenWidth_1;
  }
  function _get__screenHeight__vuv3b3($this) {
    return $this._screenHeight_1;
  }
  function _set_element__ae2pkn($this, _set____db54di) {
    var this_0 = $this.element$delegate_1;
    element$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_elementRating__jlpq5o($this, _set____db54di) {
    var this_0 = $this.elementRating$delegate_1;
    elementRating$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_bboy__9kfazx($this, _set____db54di) {
    var this_0 = $this.bboy$delegate_1;
    bboy$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_checkedState__z3kc4t($this, _set____db54di) {
    var this_0 = $this.checkedState$delegate_1;
    checkedState$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function loadData($this) {
    launch($this.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda_0($this, null));
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
  function MainViewModel$uploadNewUserAvatar$slambda(this$0, $email, $bytes, resultContinuation) {
    this.this$0__1 = this$0;
    this.$email_1 = $email;
    this.$bytes_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.mainUseCase_1.get_uploadAvatar_vvh5vh_k$().uploadAvatar_4hue9j_k$(this.$email_1, this.$bytes_1, this);
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
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$uploadNewUserAvatar$slambda(this.this$0__1, this.$email_1, this.$bytes_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$uploadNewUserAvatar$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$uploadNewUserAvatar$slambda_0(this$0, $email, $bytes, resultContinuation) {
    var i = new MainViewModel$uploadNewUserAvatar$slambda(this$0, $email, $bytes, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainViewModel$loadCurrentUser$slambda(this$0, $currentUser, resultContinuation) {
    this.this$0__1 = this$0;
    this.$currentUser_1 = $currentUser;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainViewModel$loadCurrentUser$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainViewModel$loadCurrentUser$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainViewModel$loadCurrentUser$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.mainUseCase_1.get_getPupilById_jbgp2r_k$().getAllPupils_4ssv9c_k$(this.$currentUser_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            var tmp_0 = MainViewModel$loadCurrentUser$slambda$slambda_0(this.this$0__1, null);
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
  protoOf(MainViewModel$loadCurrentUser$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainViewModel$loadCurrentUser$slambda(this.this$0__1, this.$currentUser_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainViewModel$loadCurrentUser$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainViewModel$loadCurrentUser$slambda_0(this$0, $currentUser, resultContinuation) {
    var i = new MainViewModel$loadCurrentUser$slambda(this$0, $currentUser, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
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
            tmp_1.freezeElements1__1 = launch(this.this$0__1.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_2(this.this$0__1, null));
            var tmp_2 = this;
            tmp_2.powerElements2__1 = launch(this.this$0__1.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_4(this.this$0__1, null));
            var tmp_3 = this;
            tmp_3.ofpElements3__1 = launch(this.this$0__1.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_6(this.this$0__1, null));
            var tmp_4 = this;
            tmp_4.stretchElements4__1 = launch(this.this$0__1.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_8(this.this$0__1, null));
            var tmp_5 = this;
            tmp_5.bboysList5__1 = launch(this.this$0__1.singletonMainScope_1, VOID, VOID, MainViewModel$loadData$slambda$slambda_10(this.this$0__1, null));
            this.list6__1 = listOf([this.pupils0__1, this.freezeElements1__1, this.powerElements2__1, this.ofpElements3__1, this.stretchElements4__1, this.bboysList5__1]);
            this.collection7__1 = this.list6__1;
            var tmp0_iterator = this.collection7__1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              element.start_1tchgi_k$();
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = joinAll(this.collection7__1, this);
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
    this._freezeElements_1 = MutableStateFlow(emptyList());
    this.freezeElements_1 = this._freezeElements_1;
    this._powerElements_1 = MutableStateFlow(emptyList());
    this.powerElements_1 = this._powerElements_1;
    this._ofpElements_1 = MutableStateFlow(emptyList());
    this.ofpElements_1 = this._ofpElements_1;
    this._stretchElements_1 = MutableStateFlow(emptyList());
    this.stretchElements_1 = this._stretchElements_1;
    this._bboysList_1 = MutableStateFlow(emptyList());
    this.bboysList_1 = this._bboysList_1;
    this._currentPupil_1 = MutableStateFlow(null);
    this.currentPupil_1 = this._currentPupil_1;
    this._clickedPupil_1 = MutableStateFlow(null);
    this.clickedPupil_1 = this._clickedPupil_1;
    this._userAvatarOnLoading_1 = MutableStateFlow(false);
    this.userAvatarOnLoading_1 = this._userAvatarOnLoading_1;
    this._screenWidth_1 = MutableStateFlow(379);
    this.screenWidth_1 = this._screenWidth_1;
    this._screenHeight_1 = MutableStateFlow(640);
    this.screenHeight_1 = this._screenHeight_1;
    this.elementTabPosition$delegate_1 = mutableStateOf(0);
    this.element$delegate_1 = mutableStateOf(new ElementModel());
    this.elementRating$delegate_1 = mutableStateOf(0);
    this.bboy$delegate_1 = mutableStateOf(new BboyModel());
    this.checkedState$delegate_1 = mutableStateOf(true);
    loadData(this);
  }
  protoOf(MainViewModel).get_pupils_i93g7i_k$ = function () {
    return this.pupils_1;
  };
  protoOf(MainViewModel).get_freezeElements_r332yf_k$ = function () {
    return this.freezeElements_1;
  };
  protoOf(MainViewModel).get_powerElements_l3zkz7_k$ = function () {
    return this.powerElements_1;
  };
  protoOf(MainViewModel).get_ofpElements_29xxp5_k$ = function () {
    return this.ofpElements_1;
  };
  protoOf(MainViewModel).get_stretchElements_l47i6l_k$ = function () {
    return this.stretchElements_1;
  };
  protoOf(MainViewModel).get_bboysList_tdesri_k$ = function () {
    return this.bboysList_1;
  };
  protoOf(MainViewModel).get_currentPupil_slw1q6_k$ = function () {
    return this.currentPupil_1;
  };
  protoOf(MainViewModel).set_clickedPupil_u9tev4_k$ = function (_set____db54di) {
    this.clickedPupil_1 = _set____db54di;
  };
  protoOf(MainViewModel).get_clickedPupil_pmhxw0_k$ = function () {
    return this.clickedPupil_1;
  };
  protoOf(MainViewModel).get_userAvatarOnLoading_ama8g_k$ = function () {
    return this.userAvatarOnLoading_1;
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
  protoOf(MainViewModel).set_elementTabPosition_tjf33d_k$ = function (_set____db54di) {
    var this_0 = this.elementTabPosition$delegate_1;
    elementTabPosition$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(MainViewModel).get_elementTabPosition_o8396d_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.elementTabPosition$delegate_1;
    elementTabPosition$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MainViewModel).get_element_q8gf71_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.element$delegate_1;
    element$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MainViewModel).get_elementRating_he5i7k_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.elementRating$delegate_1;
    elementRating$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MainViewModel).get_bboy_wojblf_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.bboy$delegate_1;
    bboy$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MainViewModel).addBboy_95ma0n_k$ = function (bboy) {
    _set_bboy__9kfazx(this, bboy);
  };
  protoOf(MainViewModel).get_checkedState_fhbr77_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.checkedState$delegate_1;
    checkedState$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MainViewModel).changeCheckedState_m3hwpi_k$ = function () {
    _set_checkedState__z3kc4t(this, !this.get_checkedState_fhbr77_k$());
  };
  protoOf(MainViewModel).addElement_c6crtf_k$ = function (currentElement) {
    _set_element__ae2pkn(this, currentElement);
  };
  protoOf(MainViewModel).addElementRating_1kd98w_k$ = function (rating) {
    _set_elementRating__jlpq5o(this, rating);
  };
  protoOf(MainViewModel).uploadNewUserAvatar_99iyhl_k$ = function (email, bytes) {
    this._userAvatarOnLoading_1.set_value_v1vabv_k$(true);
    println(' uploadNewUserAvatar bytes: ' + toString(bytes));
    launch(this.singletonMainScope_1, VOID, VOID, MainViewModel$uploadNewUserAvatar$slambda_0(this, email, bytes, null));
  };
  protoOf(MainViewModel).setClickedPupil_mavf4k_k$ = function (pupil) {
    this._clickedPupil_1.set_value_v1vabv_k$(pupil);
    println('clicked pupil: ' + toString_0(this._clickedPupil_1.get_value_j01efc_k$()));
  };
  protoOf(MainViewModel).loadCurrentUser_c6wkwc_k$ = function (currentUser) {
    launch(this.singletonMainScope_1, VOID, VOID, MainViewModel$loadCurrentUser$slambda_0(this, currentUser, null));
  };
  function com_korchagin_presentation_viewModel_MainViewModel$stableprop_getter() {
    return com_korchagin_presentation_viewModel_MainViewModel$stable;
  }
  function elementTabPosition$factory() {
    return getPropertyCallableRef('elementTabPosition', 1, KMutableProperty1, function (receiver) {
      return receiver.get_elementTabPosition_o8396d_k$();
    }, function (receiver, value) {
      return receiver.set_elementTabPosition_tjf33d_k$(value);
    });
  }
  function elementTabPosition$factory_0() {
    return getPropertyCallableRef('elementTabPosition', 1, KMutableProperty1, function (receiver) {
      return receiver.get_elementTabPosition_o8396d_k$();
    }, function (receiver, value) {
      return receiver.set_elementTabPosition_tjf33d_k$(value);
    });
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KMutableProperty1, function (receiver) {
      return receiver.get_element_q8gf71_k$();
    }, function (receiver, value) {
      return _set_element__ae2pkn(receiver, value);
    });
  }
  function element$factory_0() {
    return getPropertyCallableRef('element', 1, KMutableProperty1, function (receiver) {
      return receiver.get_element_q8gf71_k$();
    }, function (receiver, value) {
      return _set_element__ae2pkn(receiver, value);
    });
  }
  function elementRating$factory() {
    return getPropertyCallableRef('elementRating', 1, KMutableProperty1, function (receiver) {
      return receiver.get_elementRating_he5i7k_k$();
    }, function (receiver, value) {
      return _set_elementRating__jlpq5o(receiver, value);
    });
  }
  function elementRating$factory_0() {
    return getPropertyCallableRef('elementRating', 1, KMutableProperty1, function (receiver) {
      return receiver.get_elementRating_he5i7k_k$();
    }, function (receiver, value) {
      return _set_elementRating__jlpq5o(receiver, value);
    });
  }
  function bboy$factory() {
    return getPropertyCallableRef('bboy', 1, KMutableProperty1, function (receiver) {
      return receiver.get_bboy_wojblf_k$();
    }, function (receiver, value) {
      return _set_bboy__9kfazx(receiver, value);
    });
  }
  function bboy$factory_0() {
    return getPropertyCallableRef('bboy', 1, KMutableProperty1, function (receiver) {
      return receiver.get_bboy_wojblf_k$();
    }, function (receiver, value) {
      return _set_bboy__9kfazx(receiver, value);
    });
  }
  function checkedState$factory() {
    return getPropertyCallableRef('checkedState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_checkedState_fhbr77_k$();
    }, function (receiver, value) {
      return _set_checkedState__z3kc4t(receiver, value);
    });
  }
  function checkedState$factory_0() {
    return getPropertyCallableRef('checkedState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_checkedState_fhbr77_k$();
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
