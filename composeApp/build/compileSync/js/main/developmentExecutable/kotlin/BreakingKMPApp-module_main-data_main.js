(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './projects-core-koin-core.js', './kotlinx-serialization-kotlinx-serialization-core.js', './firebase-kotlin-sdk-firebase-database.js', './firebase-kotlin-sdk-firebase-common-internal.js', './kotlinx-coroutines-core.js', './firebase-kotlin-sdk-firebase-app.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./projects-core-koin-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./firebase-kotlin-sdk-firebase-database.js'), require('./firebase-kotlin-sdk-firebase-common-internal.js'), require('./kotlinx-coroutines-core.js'), require('./firebase-kotlin-sdk-firebase-app.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-database'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'firebase-kotlin-sdk-firebase-database' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-database' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-common-internal'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'firebase-kotlin-sdk-firebase-common-internal' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-common-internal' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'firebase-kotlin-sdk-firebase-app' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-app' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    globalThis['BreakingKMPApp-module_main-data_main'] = factory(typeof globalThis['BreakingKMPApp-module_main-data_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_main-data_main'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['projects-core-koin-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['firebase-kotlin-sdk-firebase-database'], globalThis['firebase-kotlin-sdk-firebase-common-internal'], globalThis['kotlinx-coroutines-core'], globalThis['firebase-kotlin-sdk-firebase-app']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_dev_gitlive_firebase_database, kotlin_dev_gitlive_firebase_common_internal, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_dev_gitlive_firebase_app) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.yh;
  var initMetadataForObject = kotlin_kotlin.$_$.wg;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var KProperty1 = kotlin_kotlin.$_$.hj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ng;
  var lazy = kotlin_kotlin.$_$.bp;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var emptyList = kotlin_kotlin.$_$.z9;
  var getKClass = kotlin_kotlin.$_$.f;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var bind = kotlin_io_insert_koin_koin_core.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.k;
  var initMetadataForCompanion = kotlin_kotlin.$_$.rg;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var Long = kotlin_kotlin.$_$.pn;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var throwArrayMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var objectCreate = kotlin_kotlin.$_$.xh;
  var getStringHashCode = kotlin_kotlin.$_$.og;
  var getNumberHashCode = kotlin_kotlin.$_$.mg;
  var equals = kotlin_kotlin.$_$.gg;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var initMetadataForInterface = kotlin_kotlin.$_$.ug;
  var CoroutineImpl = kotlin_kotlin.$_$.if;
  var DataSnapshot = kotlin_dev_gitlive_firebase_database.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var get_js = kotlin_dev_gitlive_firebase_database.$_$.c;
  var Builder = kotlin_dev_gitlive_firebase_common_internal.$_$.a;
  var buildDecodeSettings = kotlin_dev_gitlive_firebase_common_internal.$_$.j;
  var arrayOf = kotlin_kotlin.$_$.mo;
  var createKType = kotlin_kotlin.$_$.c;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var isInterface = kotlin_kotlin.$_$.gh;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var decode = kotlin_dev_gitlive_firebase_common_internal.$_$.l;
  var DatabaseException_init_$Create$ = kotlin_dev_gitlive_firebase_database.$_$.d;
  var Exception = kotlin_kotlin.$_$.ln;
  var println = kotlin_kotlin.$_$.rf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.re;
  var initMetadataForLambda = kotlin_kotlin.$_$.vg;
  var firstOrNull = kotlin_kotlin.$_$.ka;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var FunctionAdapter = kotlin_kotlin.$_$.sf;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var hashCode = kotlin_kotlin.$_$.pg;
  var Firebase_getInstance = kotlin_dev_gitlive_firebase_app.$_$.c;
  var get_database = kotlin_dev_gitlive_firebase_database.$_$.b;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var channelFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var SuspendFunction1 = kotlin_kotlin.$_$.kf;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PupilEntry, 'PupilEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForInterface(UserRepository, 'UserRepository');
  initMetadataForLambda(UserRepositotyImplementation$getUsers$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUsers$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(UserRepositotyImplementation, 'UserRepositotyImplementation', UserRepositotyImplementation, VOID, [UserRepository]);
  //endregion
  var breakingkmpapp_module_main_data_main_generated_resources_Res_drawable$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_string$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_array$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_plurals$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_font$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res$stable;
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
    return readResourceBytes('composeResources/breakingkmpapp.module_main.data_main.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/breakingkmpapp.module_main.data_main.generated.resources/' + path);
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
    return map;
  }
  function allStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
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
  function get_mainDataRepositoryModule() {
    _init_properties_MainDataKoinModule_kt__jlq3s();
    return mainDataRepositoryModule;
  }
  var mainDataRepositoryModule;
  function mainDataRepositoryModule$lambda($this$module) {
    _init_properties_MainDataKoinModule_kt__jlq3s();
    // Inline function 'org.koin.dsl.bind' call
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = mainDataRepositoryModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(UserRepositotyImplementation), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.indexPrimaryType_bfm8x4_k$(factory);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory);
    }
    var this_0 = new KoinDefinition($this$module, factory);
    bind(this_0, getKClass(UserRepository));
    return Unit_getInstance();
  }
  function mainDataRepositoryModule$lambda$lambda($this$single, it) {
    _init_properties_MainDataKoinModule_kt__jlq3s();
    return new UserRepositotyImplementation();
  }
  var properties_initialized_MainDataKoinModule_kt_9cxtmu;
  function _init_properties_MainDataKoinModule_kt__jlq3s() {
    if (!properties_initialized_MainDataKoinModule_kt_9cxtmu) {
      properties_initialized_MainDataKoinModule_kt_9cxtmu = true;
      mainDataRepositoryModule = module_0(VOID, mainDataRepositoryModule$lambda);
    }
  }
  var com_korchagin_data_models_PupilEntry_$serializer$stable;
  var com_korchagin_data_models_PupilEntry$stable;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.korchagin.data.models.PupilEntry', this, 64);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('email', false);
    tmp0_serialDesc.addElement_5pzumi_k$('avatar', false);
    tmp0_serialDesc.addElement_5pzumi_k$('born', false);
    tmp0_serialDesc.addElement_5pzumi_k$('country', false);
    tmp0_serialDesc.addElement_5pzumi_k$('city', false);
    tmp0_serialDesc.addElement_5pzumi_k$('video', false);
    tmp0_serialDesc.addElement_5pzumi_k$('status', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subscription', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subscriptionDay', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subscriptionMonth', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subscriptionYear', false);
    tmp0_serialDesc.addElement_5pzumi_k$('currentTask', false);
    tmp0_serialDesc.addElement_5pzumi_k$('currentTaskProgress', false);
    tmp0_serialDesc.addElement_5pzumi_k$('roundsList', false);
    tmp0_serialDesc.addElement_5pzumi_k$('rating', false);
    tmp0_serialDesc.addElement_5pzumi_k$('freeze_rating', false);
    tmp0_serialDesc.addElement_5pzumi_k$('powermove_rating', false);
    tmp0_serialDesc.addElement_5pzumi_k$('ofp_rating', false);
    tmp0_serialDesc.addElement_5pzumi_k$('streching_rating', false);
    tmp0_serialDesc.addElement_5pzumi_k$('battle_rating', false);
    tmp0_serialDesc.addElement_5pzumi_k$('battle_cur_position', false);
    tmp0_serialDesc.addElement_5pzumi_k$('battle_new_position', false);
    tmp0_serialDesc.addElement_5pzumi_k$('new_position', false);
    tmp0_serialDesc.addElement_5pzumi_k$('current_position', false);
    tmp0_serialDesc.addElement_5pzumi_k$('babyfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('chairfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('elbowfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('headfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('headhollowbackfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('hollowbackfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('invertfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('onehandfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('shoulderfrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('turtlefrezze', false);
    tmp0_serialDesc.addElement_5pzumi_k$('airflare', false);
    tmp0_serialDesc.addElement_5pzumi_k$('backspin', false);
    tmp0_serialDesc.addElement_5pzumi_k$('cricket', false);
    tmp0_serialDesc.addElement_5pzumi_k$('elbowairflare', false);
    tmp0_serialDesc.addElement_5pzumi_k$('flare', false);
    tmp0_serialDesc.addElement_5pzumi_k$('jackhammer', false);
    tmp0_serialDesc.addElement_5pzumi_k$('halo', false);
    tmp0_serialDesc.addElement_5pzumi_k$('headspin', false);
    tmp0_serialDesc.addElement_5pzumi_k$('munchmill', false);
    tmp0_serialDesc.addElement_5pzumi_k$('ninety_nine', false);
    tmp0_serialDesc.addElement_5pzumi_k$('swipes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('turtle', false);
    tmp0_serialDesc.addElement_5pzumi_k$('ufo', false);
    tmp0_serialDesc.addElement_5pzumi_k$('web', false);
    tmp0_serialDesc.addElement_5pzumi_k$('windmill', false);
    tmp0_serialDesc.addElement_5pzumi_k$('wolf', false);
    tmp0_serialDesc.addElement_5pzumi_k$('angle', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bridge', false);
    tmp0_serialDesc.addElement_5pzumi_k$('finger', false);
    tmp0_serialDesc.addElement_5pzumi_k$('handstand', false);
    tmp0_serialDesc.addElement_5pzumi_k$('horizont', false);
    tmp0_serialDesc.addElement_5pzumi_k$('pushups', false);
    tmp0_serialDesc.addElement_5pzumi_k$('sit_ups', false);
    tmp0_serialDesc.addElement_5pzumi_k$('press_up_handstand', false);
    tmp0_serialDesc.addElement_5pzumi_k$('butterfly', false);
    tmp0_serialDesc.addElement_5pzumi_k$('fold', false);
    tmp0_serialDesc.addElement_5pzumi_k$('shoulders', false);
    tmp0_serialDesc.addElement_5pzumi_k$('twine', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_lahi0y_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.name_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.email_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 3, value.avatar_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.born_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 5, value.country_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 6, value.city_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 7, value.video_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 8, value.status_1);
    tmp1_output.encodeLongElement_cega27_k$(tmp0_desc, 9, value.subscription_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 10, value.subscriptionDay_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 11, value.subscriptionMonth_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 12, value.subscriptionYear_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 13, value.currentTask_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 14, value.currentTaskProgress_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 15, value.roundsList_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 16, value.rating_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 17, value.freeze_rating_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 18, value.powermove_rating_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 19, value.ofp_rating_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 20, value.streching_rating_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 21, value.battle_rating_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 22, value.battle_cur_position_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 23, value.battle_new_position_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 24, value.new_position_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 25, value.current_position_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 26, value.babyfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 27, value.chairfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 28, value.elbowfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 29, value.headfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 30, value.headhollowbackfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 31, value.hollowbackfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 32, value.invertfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 33, value.onehandfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 34, value.shoulderfrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 35, value.turtlefrezze_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 36, value.airflare_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 37, value.backspin_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 38, value.cricket_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 39, value.elbowairflare_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 40, value.flare_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 41, value.jackhammer_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 42, value.halo_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 43, value.headspin_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 44, value.munchmill_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 45, value.ninety_nine_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 46, value.swipes_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 47, value.turtle_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 48, value.ufo_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 49, value.web_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 50, value.windmill_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 51, value.wolf_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 52, value.angle_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 53, value.bridge_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 54, value.finger_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 55, value.handstand_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 56, value.horizont_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 57, value.pushups_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 58, value.sit_ups_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 59, value.press_up_handstand_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 60, value.butterfly_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 61, value.fold_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 62, value.shoulders_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 63, value.twine_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_lahi0y_k$(encoder, value instanceof PupilEntry ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp6_local0 = null;
    var tmp7_local1 = null;
    var tmp8_local2 = null;
    var tmp9_local3 = null;
    var tmp10_local4 = null;
    var tmp11_local5 = null;
    var tmp12_local6 = null;
    var tmp13_local7 = null;
    var tmp14_local8 = 0;
    var tmp15_local9 = new Long(0, 0);
    var tmp16_local10 = 0;
    var tmp17_local11 = 0;
    var tmp18_local12 = 0;
    var tmp19_local13 = null;
    var tmp20_local14 = 0;
    var tmp21_local15 = null;
    var tmp22_local16 = 0.0;
    var tmp23_local17 = 0.0;
    var tmp24_local18 = 0.0;
    var tmp25_local19 = 0.0;
    var tmp26_local20 = 0.0;
    var tmp27_local21 = 0.0;
    var tmp28_local22 = 0;
    var tmp29_local23 = 0;
    var tmp30_local24 = 0;
    var tmp31_local25 = 0;
    var tmp32_local26 = 0;
    var tmp33_local27 = 0;
    var tmp34_local28 = 0;
    var tmp35_local29 = 0;
    var tmp36_local30 = 0;
    var tmp37_local31 = 0;
    var tmp38_local32 = 0;
    var tmp39_local33 = 0;
    var tmp40_local34 = 0;
    var tmp41_local35 = 0;
    var tmp42_local36 = 0;
    var tmp43_local37 = 0;
    var tmp44_local38 = 0;
    var tmp45_local39 = 0;
    var tmp46_local40 = 0;
    var tmp47_local41 = 0;
    var tmp48_local42 = 0;
    var tmp49_local43 = 0;
    var tmp50_local44 = 0;
    var tmp51_local45 = 0;
    var tmp52_local46 = 0;
    var tmp53_local47 = 0;
    var tmp54_local48 = 0;
    var tmp55_local49 = 0;
    var tmp56_local50 = 0;
    var tmp57_local51 = 0;
    var tmp58_local52 = 0;
    var tmp59_local53 = 0;
    var tmp60_local54 = 0;
    var tmp61_local55 = 0;
    var tmp62_local56 = 0;
    var tmp63_local57 = 0;
    var tmp64_local58 = 0;
    var tmp65_local59 = 0;
    var tmp66_local60 = 0;
    var tmp67_local61 = 0;
    var tmp68_local62 = 0;
    var tmp69_local63 = 0;
    var tmp70_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp70_input.decodeSequentially_xlblqy_k$()) {
      tmp6_local0 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp7_local1 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp8_local2 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp9_local3 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp10_local4 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp11_local5 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp12_local6 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp13_local7 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp14_local8 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp15_local9 = tmp70_input.decodeLongElement_994anb_k$(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp16_local10 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp17_local11 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp18_local12 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp19_local13 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp20_local14 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp21_local15 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp22_local16 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp23_local17 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp24_local18 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp25_local19 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp26_local20 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp27_local21 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp28_local22 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp29_local23 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp30_local24 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp31_local25 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp32_local26 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp33_local27 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp34_local28 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp35_local29 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp36_local30 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp37_local31 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp38_local32 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp39_local33 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp40_local34 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp41_local35 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp42_local36 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp43_local37 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp44_local38 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp45_local39 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp46_local40 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp47_local41 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp48_local42 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp49_local43 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp50_local44 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp51_local45 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
      tmp52_local46 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 46);
      tmp4_bitMask1 = tmp4_bitMask1 | 16384;
      tmp53_local47 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 47);
      tmp4_bitMask1 = tmp4_bitMask1 | 32768;
      tmp54_local48 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 48);
      tmp4_bitMask1 = tmp4_bitMask1 | 65536;
      tmp55_local49 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 49);
      tmp4_bitMask1 = tmp4_bitMask1 | 131072;
      tmp56_local50 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 50);
      tmp4_bitMask1 = tmp4_bitMask1 | 262144;
      tmp57_local51 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 51);
      tmp4_bitMask1 = tmp4_bitMask1 | 524288;
      tmp58_local52 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 52);
      tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
      tmp59_local53 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 53);
      tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
      tmp60_local54 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 54);
      tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
      tmp61_local55 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 55);
      tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
      tmp62_local56 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 56);
      tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
      tmp63_local57 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 57);
      tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
      tmp64_local58 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 58);
      tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
      tmp65_local59 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 59);
      tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
      tmp66_local60 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 60);
      tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
      tmp67_local61 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 61);
      tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
      tmp68_local62 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 62);
      tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
      tmp69_local63 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 63);
      tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp70_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp6_local0 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp7_local1 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp8_local2 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp9_local3 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp10_local4 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp11_local5 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp12_local6 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp13_local7 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp14_local8 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp15_local9 = tmp70_input.decodeLongElement_994anb_k$(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp16_local10 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp17_local11 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp18_local12 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp19_local13 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp20_local14 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp21_local15 = tmp70_input.decodeStringElement_3oenpg_k$(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp22_local16 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp23_local17 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp24_local18 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp25_local19 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp26_local20 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp27_local21 = tmp70_input.decodeDoubleElement_isei84_k$(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp28_local22 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp29_local23 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp30_local24 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp31_local25 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp32_local26 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp33_local27 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp34_local28 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp35_local29 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp36_local30 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp37_local31 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp38_local32 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp39_local33 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp40_local34 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp41_local35 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp42_local36 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp43_local37 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp44_local38 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp45_local39 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp46_local40 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp47_local41 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp48_local42 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp49_local43 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp50_local44 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          case 45:
            tmp51_local45 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          case 46:
            tmp52_local46 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 46);
            tmp4_bitMask1 = tmp4_bitMask1 | 16384;
            break;
          case 47:
            tmp53_local47 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 47);
            tmp4_bitMask1 = tmp4_bitMask1 | 32768;
            break;
          case 48:
            tmp54_local48 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 48);
            tmp4_bitMask1 = tmp4_bitMask1 | 65536;
            break;
          case 49:
            tmp55_local49 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 49);
            tmp4_bitMask1 = tmp4_bitMask1 | 131072;
            break;
          case 50:
            tmp56_local50 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 50);
            tmp4_bitMask1 = tmp4_bitMask1 | 262144;
            break;
          case 51:
            tmp57_local51 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 51);
            tmp4_bitMask1 = tmp4_bitMask1 | 524288;
            break;
          case 52:
            tmp58_local52 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 52);
            tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
            break;
          case 53:
            tmp59_local53 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 53);
            tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
            break;
          case 54:
            tmp60_local54 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 54);
            tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
            break;
          case 55:
            tmp61_local55 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 55);
            tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
            break;
          case 56:
            tmp62_local56 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 56);
            tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
            break;
          case 57:
            tmp63_local57 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 57);
            tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
            break;
          case 58:
            tmp64_local58 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 58);
            tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
            break;
          case 59:
            tmp65_local59 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 59);
            tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
            break;
          case 60:
            tmp66_local60 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 60);
            tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
            break;
          case 61:
            tmp67_local61 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 61);
            tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
            break;
          case 62:
            tmp68_local62 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 62);
            tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
            break;
          case 63:
            tmp69_local63 = tmp70_input.decodeIntElement_941u6a_k$(tmp0_desc, 63);
            tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp70_input.endStructure_1xqz0n_k$(tmp0_desc);
    return PupilEntry_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, 0, tmp6_local0, tmp7_local1, tmp8_local2, tmp9_local3, tmp10_local4, tmp11_local5, tmp12_local6, tmp13_local7, tmp14_local8, tmp15_local9, tmp16_local10, tmp17_local11, tmp18_local12, tmp19_local13, tmp20_local14, tmp21_local15, tmp22_local16, tmp23_local17, tmp24_local18, tmp25_local19, tmp26_local20, tmp27_local21, tmp28_local22, tmp29_local23, tmp30_local24, tmp31_local25, tmp32_local26, tmp33_local27, tmp34_local28, tmp35_local29, tmp36_local30, tmp37_local31, tmp38_local32, tmp39_local33, tmp40_local34, tmp41_local35, tmp42_local36, tmp43_local37, tmp44_local38, tmp45_local39, tmp46_local40, tmp47_local41, tmp48_local42, tmp49_local43, tmp50_local44, tmp51_local45, tmp52_local46, tmp53_local47, tmp54_local48, tmp55_local49, tmp56_local50, tmp57_local51, tmp58_local52, tmp59_local53, tmp60_local54, tmp61_local55, tmp62_local56, tmp63_local57, tmp64_local58, tmp65_local59, tmp66_local60, tmp67_local61, tmp68_local62, tmp69_local63, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), LongSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function PupilEntry_init_$Init$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker, $this) {
    if (!!(!!(!(-1 === (-1 & seen0)) | !(-1 === (-1 & seen1))) | !(0 === (0 & seen2)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1, seen2]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, -1, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance().descriptor_1);
    }
    $this.id_1 = id;
    $this.name_1 = name;
    $this.email_1 = email;
    $this.avatar_1 = avatar;
    $this.born_1 = born;
    $this.country_1 = country;
    $this.city_1 = city;
    $this.video_1 = video;
    $this.status_1 = status;
    $this.subscription_1 = subscription;
    $this.subscriptionDay_1 = subscriptionDay;
    $this.subscriptionMonth_1 = subscriptionMonth;
    $this.subscriptionYear_1 = subscriptionYear;
    $this.currentTask_1 = currentTask;
    $this.currentTaskProgress_1 = currentTaskProgress;
    $this.roundsList_1 = roundsList;
    $this.rating_1 = rating;
    $this.freeze_rating_1 = freeze_rating;
    $this.powermove_rating_1 = powermove_rating;
    $this.ofp_rating_1 = ofp_rating;
    $this.streching_rating_1 = streching_rating;
    $this.battle_rating_1 = battle_rating;
    $this.battle_cur_position_1 = battle_cur_position;
    $this.battle_new_position_1 = battle_new_position;
    $this.new_position_1 = new_position;
    $this.current_position_1 = current_position;
    $this.babyfrezze_1 = babyfrezze;
    $this.chairfrezze_1 = chairfrezze;
    $this.elbowfrezze_1 = elbowfrezze;
    $this.headfrezze_1 = headfrezze;
    $this.headhollowbackfrezze_1 = headhollowbackfrezze;
    $this.hollowbackfrezze_1 = hollowbackfrezze;
    $this.invertfrezze_1 = invertfrezze;
    $this.onehandfrezze_1 = onehandfrezze;
    $this.shoulderfrezze_1 = shoulderfrezze;
    $this.turtlefrezze_1 = turtlefrezze;
    $this.airflare_1 = airflare;
    $this.backspin_1 = backspin;
    $this.cricket_1 = cricket;
    $this.elbowairflare_1 = elbowairflare;
    $this.flare_1 = flare;
    $this.jackhammer_1 = jackhammer;
    $this.halo_1 = halo;
    $this.headspin_1 = headspin;
    $this.munchmill_1 = munchmill;
    $this.ninety_nine_1 = ninety_nine;
    $this.swipes_1 = swipes;
    $this.turtle_1 = turtle;
    $this.ufo_1 = ufo;
    $this.web_1 = web;
    $this.windmill_1 = windmill;
    $this.wolf_1 = wolf;
    $this.angle_1 = angle;
    $this.bridge_1 = bridge;
    $this.finger_1 = finger;
    $this.handstand_1 = handstand;
    $this.horizont_1 = horizont;
    $this.pushups_1 = pushups;
    $this.sit_ups_1 = sit_ups;
    $this.press_up_handstand_1 = press_up_handstand;
    $this.butterfly_1 = butterfly;
    $this.fold_1 = fold;
    $this.shoulders_1 = shoulders;
    $this.twine_1 = twine;
    return $this;
  }
  function PupilEntry_init_$Create$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker) {
    return PupilEntry_init_$Init$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker, objectCreate(protoOf(PupilEntry)));
  }
  function PupilEntry(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine) {
    Companion_getInstance_0();
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
    this.freeze_rating_1 = freeze_rating;
    this.powermove_rating_1 = powermove_rating;
    this.ofp_rating_1 = ofp_rating;
    this.streching_rating_1 = streching_rating;
    this.battle_rating_1 = battle_rating;
    this.battle_cur_position_1 = battle_cur_position;
    this.battle_new_position_1 = battle_new_position;
    this.new_position_1 = new_position;
    this.current_position_1 = current_position;
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
    this.ninety_nine_1 = ninety_nine;
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
    this.press_up_handstand_1 = press_up_handstand;
    this.butterfly_1 = butterfly;
    this.fold_1 = fold;
    this.shoulders_1 = shoulders;
    this.twine_1 = twine;
  }
  protoOf(PupilEntry).set_id_36n2qa_k$ = function (_set____db54di) {
    this.id_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(PupilEntry).set_name_aqnlwe_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PupilEntry).set_email_h0qb79_k$ = function (_set____db54di) {
    this.email_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(PupilEntry).set_avatar_jv91xw_k$ = function (_set____db54di) {
    this.avatar_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_avatar_b5pjz6_k$ = function () {
    return this.avatar_1;
  };
  protoOf(PupilEntry).set_born_sh3pr0_k$ = function (_set____db54di) {
    this.born_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_born_wojlaq_k$ = function () {
    return this.born_1;
  };
  protoOf(PupilEntry).set_country_gg4t67_k$ = function (_set____db54di) {
    this.country_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_country_h3tl7x_k$ = function () {
    return this.country_1;
  };
  protoOf(PupilEntry).set_city_50dk72_k$ = function (_set____db54di) {
    this.city_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_city_wok3w4_k$ = function () {
    return this.city_1;
  };
  protoOf(PupilEntry).set_video_owtx8s_k$ = function (_set____db54di) {
    this.video_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_video_j06c0i_k$ = function () {
    return this.video_1;
  };
  protoOf(PupilEntry).set_status_dpzsuf_k$ = function (_set____db54di) {
    this.status_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(PupilEntry).set_subscription_e833b8_k$ = function (_set____db54di) {
    this.subscription_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_subscription_a6pgti_k$ = function () {
    return this.subscription_1;
  };
  protoOf(PupilEntry).set_subscriptionDay_22l4va_k$ = function (_set____db54di) {
    this.subscriptionDay_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_subscriptionDay_gjomdy_k$ = function () {
    return this.subscriptionDay_1;
  };
  protoOf(PupilEntry).set_subscriptionMonth_pkim0y_k$ = function (_set____db54di) {
    this.subscriptionMonth_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_subscriptionMonth_9brqdi_k$ = function () {
    return this.subscriptionMonth_1;
  };
  protoOf(PupilEntry).set_subscriptionYear_it2cnj_k$ = function (_set____db54di) {
    this.subscriptionYear_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_subscriptionYear_fqsddv_k$ = function () {
    return this.subscriptionYear_1;
  };
  protoOf(PupilEntry).get_currentTask_nu5nat_k$ = function () {
    return this.currentTask_1;
  };
  protoOf(PupilEntry).get_currentTaskProgress_oh2d8i_k$ = function () {
    return this.currentTaskProgress_1;
  };
  protoOf(PupilEntry).get_roundsList_maupw4_k$ = function () {
    return this.roundsList_1;
  };
  protoOf(PupilEntry).set_rating_wdgycc_k$ = function (_set____db54di) {
    this.rating_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_rating_iw9d46_k$ = function () {
    return this.rating_1;
  };
  protoOf(PupilEntry).set_freeze_rating_lfhg26_k$ = function (_set____db54di) {
    this.freeze_rating_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_freeze_rating_r5s6hw_k$ = function () {
    return this.freeze_rating_1;
  };
  protoOf(PupilEntry).set_powermove_rating_8nipfx_k$ = function (_set____db54di) {
    this.powermove_rating_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_powermove_rating_uy8d5d_k$ = function () {
    return this.powermove_rating_1;
  };
  protoOf(PupilEntry).set_ofp_rating_lwpehi_k$ = function (_set____db54di) {
    this.ofp_rating_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_ofp_rating_ued8wk_k$ = function () {
    return this.ofp_rating_1;
  };
  protoOf(PupilEntry).set_streching_rating_fruil6_k$ = function (_set____db54di) {
    this.streching_rating_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_streching_rating_p7lkbo_k$ = function () {
    return this.streching_rating_1;
  };
  protoOf(PupilEntry).set_battle_rating_rarzfz_k$ = function (_set____db54di) {
    this.battle_rating_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_battle_rating_lze0nv_k$ = function () {
    return this.battle_rating_1;
  };
  protoOf(PupilEntry).set_battle_cur_position_3c6ed2_k$ = function (_set____db54di) {
    this.battle_cur_position_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_battle_cur_position_7020au_k$ = function () {
    return this.battle_cur_position_1;
  };
  protoOf(PupilEntry).set_battle_new_position_kmte22_k$ = function (_set____db54di) {
    this.battle_new_position_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_battle_new_position_7hm5ay_k$ = function () {
    return this.battle_new_position_1;
  };
  protoOf(PupilEntry).set_new_position_fk4f5p_k$ = function (_set____db54di) {
    this.new_position_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_new_position_9p6g9b_k$ = function () {
    return this.new_position_1;
  };
  protoOf(PupilEntry).set_current_position_uyl2n0_k$ = function (_set____db54di) {
    this.current_position_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_current_position_ntt9mg_k$ = function () {
    return this.current_position_1;
  };
  protoOf(PupilEntry).set_babyfrezze_om30tl_k$ = function (_set____db54di) {
    this.babyfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_babyfrezze_82x48l_k$ = function () {
    return this.babyfrezze_1;
  };
  protoOf(PupilEntry).set_chairfrezze_vzhlos_k$ = function (_set____db54di) {
    this.chairfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_chairfrezze_4mnfns_k$ = function () {
    return this.chairfrezze_1;
  };
  protoOf(PupilEntry).set_elbowfrezze_3wgp56_k$ = function (_set____db54di) {
    this.elbowfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_elbowfrezze_6kbw5i_k$ = function () {
    return this.elbowfrezze_1;
  };
  protoOf(PupilEntry).set_headfrezze_94541_k$ = function (_set____db54di) {
    this.headfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_headfrezze_d0gxxx_k$ = function () {
    return this.headfrezze_1;
  };
  protoOf(PupilEntry).set_headhollowbackfrezze_hm8o21_k$ = function (_set____db54di) {
    this.headhollowbackfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_headhollowbackfrezze_j16lbf_k$ = function () {
    return this.headhollowbackfrezze_1;
  };
  protoOf(PupilEntry).set_hollowbackfrezze_n8t9gp_k$ = function (_set____db54di) {
    this.hollowbackfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_hollowbackfrezze_5synt7_k$ = function () {
    return this.hollowbackfrezze_1;
  };
  protoOf(PupilEntry).set_invertfrezze_8a97t_k$ = function (_set____db54di) {
    this.invertfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_invertfrezze_g829zf_k$ = function () {
    return this.invertfrezze_1;
  };
  protoOf(PupilEntry).set_onehandfrezze_azkdp8_k$ = function (_set____db54di) {
    this.onehandfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_onehandfrezze_8vzd0o_k$ = function () {
    return this.onehandfrezze_1;
  };
  protoOf(PupilEntry).set_shoulderfrezze_7s1skf_k$ = function (_set____db54di) {
    this.shoulderfrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_shoulderfrezze_uv4etx_k$ = function () {
    return this.shoulderfrezze_1;
  };
  protoOf(PupilEntry).set_turtlefrezze_o8c96r_k$ = function (_set____db54di) {
    this.turtlefrezze_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_turtlefrezze_2dd91r_k$ = function () {
    return this.turtlefrezze_1;
  };
  protoOf(PupilEntry).set_airflare_gfpcpl_k$ = function (_set____db54di) {
    this.airflare_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_airflare_rvlnyl_k$ = function () {
    return this.airflare_1;
  };
  protoOf(PupilEntry).set_backspin_dx6sri_k$ = function (_set____db54di) {
    this.backspin_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_backspin_3adc36_k$ = function () {
    return this.backspin_1;
  };
  protoOf(PupilEntry).set_cricket_10npbo_k$ = function (_set____db54di) {
    this.cricket_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_cricket_ic5pfs_k$ = function () {
    return this.cricket_1;
  };
  protoOf(PupilEntry).set_elbowairflare_4kxmfy_k$ = function (_set____db54di) {
    this.elbowairflare_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_elbowairflare_pjyvy_k$ = function () {
    return this.elbowairflare_1;
  };
  protoOf(PupilEntry).set_flare_9u8mrt_k$ = function (_set____db54di) {
    this.flare_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_flare_irfhk5_k$ = function () {
    return this.flare_1;
  };
  protoOf(PupilEntry).set_jackhammer_e79tra_k$ = function (_set____db54di) {
    this.jackhammer_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_jackhammer_31ddri_k$ = function () {
    return this.jackhammer_1;
  };
  protoOf(PupilEntry).set_halo_2w3ekx_k$ = function (_set____db54di) {
    this.halo_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_halo_won4p1_k$ = function () {
    return this.halo_1;
  };
  protoOf(PupilEntry).set_headspin_w14u5z_k$ = function (_set____db54di) {
    this.headspin_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_headspin_ksfch7_k$ = function () {
    return this.headspin_1;
  };
  protoOf(PupilEntry).set_munchmill_ac88ki_k$ = function (_set____db54di) {
    this.munchmill_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_munchmill_9uura6_k$ = function () {
    return this.munchmill_1;
  };
  protoOf(PupilEntry).set_ninety_nine_n8vcad_k$ = function (_set____db54di) {
    this.ninety_nine_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_ninety_nine_a05d7z_k$ = function () {
    return this.ninety_nine_1;
  };
  protoOf(PupilEntry).set_swipes_ocidaq_k$ = function (_set____db54di) {
    this.swipes_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_swipes_jp7koy_k$ = function () {
    return this.swipes_1;
  };
  protoOf(PupilEntry).set_turtle_qry5yn_k$ = function (_set____db54di) {
    this.turtle_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_turtle_k5bfwl_k$ = function () {
    return this.turtle_1;
  };
  protoOf(PupilEntry).set_ufo_4uwwcn_k$ = function (_set____db54di) {
    this.ufo_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_ufo_18iusr_k$ = function () {
    return this.ufo_1;
  };
  protoOf(PupilEntry).set_web_8g4cwf_k$ = function (_set____db54di) {
    this.web_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_web_18itcl_k$ = function () {
    return this.web_1;
  };
  protoOf(PupilEntry).set_windmill_fkxn21_k$ = function (_set____db54di) {
    this.windmill_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_windmill_ks2bjh_k$ = function () {
    return this.windmill_1;
  };
  protoOf(PupilEntry).set_wolf_ag7uqv_k$ = function (_set____db54di) {
    this.wolf_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_wolf_wowzvf_k$ = function () {
    return this.wolf_1;
  };
  protoOf(PupilEntry).set_angle_51nze6_k$ = function (_set____db54di) {
    this.angle_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_angle_iopwve_k$ = function () {
    return this.angle_1;
  };
  protoOf(PupilEntry).set_bridge_def6wy_k$ = function (_set____db54di) {
    this.bridge_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_bridge_bkos5u_k$ = function () {
    return this.bridge_1;
  };
  protoOf(PupilEntry).set_finger_iclm1u_k$ = function (_set____db54di) {
    this.finger_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_finger_dc0diq_k$ = function () {
    return this.finger_1;
  };
  protoOf(PupilEntry).set_handstand_8zu0gy_k$ = function (_set____db54di) {
    this.handstand_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_handstand_9otdsu_k$ = function () {
    return this.handstand_1;
  };
  protoOf(PupilEntry).set_horizont_8mfaky_k$ = function (_set____db54di) {
    this.horizont_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_horizont_xmt2pu_k$ = function () {
    return this.horizont_1;
  };
  protoOf(PupilEntry).set_pushups_2qx8rd_k$ = function (_set____db54di) {
    this.pushups_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_pushups_2dajuz_k$ = function () {
    return this.pushups_1;
  };
  protoOf(PupilEntry).set_sit_ups_ob0fg2_k$ = function (_set____db54di) {
    this.sit_ups_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_sit_ups_z1d66q_k$ = function () {
    return this.sit_ups_1;
  };
  protoOf(PupilEntry).set_press_up_handstand_pzijdg_k$ = function (_set____db54di) {
    this.press_up_handstand_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_press_up_handstand_391ujc_k$ = function () {
    return this.press_up_handstand_1;
  };
  protoOf(PupilEntry).set_butterfly_zerc36_k$ = function (_set____db54di) {
    this.butterfly_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_butterfly_8jzp3e_k$ = function () {
    return this.butterfly_1;
  };
  protoOf(PupilEntry).set_fold_smp5vu_k$ = function (_set____db54di) {
    this.fold_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_fold_wom53e_k$ = function () {
    return this.fold_1;
  };
  protoOf(PupilEntry).set_shoulders_8ot8j2_k$ = function (_set____db54di) {
    this.shoulders_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_shoulders_npwbfa_k$ = function () {
    return this.shoulders_1;
  };
  protoOf(PupilEntry).set_twine_tb4iso_k$ = function (_set____db54di) {
    this.twine_1 = _set____db54di;
  };
  protoOf(PupilEntry).get_twine_izbsk4_k$ = function () {
    return this.twine_1;
  };
  protoOf(PupilEntry).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(PupilEntry).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(PupilEntry).component3_7eebsa_k$ = function () {
    return this.email_1;
  };
  protoOf(PupilEntry).component4_7eebs9_k$ = function () {
    return this.avatar_1;
  };
  protoOf(PupilEntry).component5_7eebs8_k$ = function () {
    return this.born_1;
  };
  protoOf(PupilEntry).component6_7eebs7_k$ = function () {
    return this.country_1;
  };
  protoOf(PupilEntry).component7_7eebs6_k$ = function () {
    return this.city_1;
  };
  protoOf(PupilEntry).component8_7eebs5_k$ = function () {
    return this.video_1;
  };
  protoOf(PupilEntry).component9_7eebs4_k$ = function () {
    return this.status_1;
  };
  protoOf(PupilEntry).component10_gazzfo_k$ = function () {
    return this.subscription_1;
  };
  protoOf(PupilEntry).component11_gazzfn_k$ = function () {
    return this.subscriptionDay_1;
  };
  protoOf(PupilEntry).component12_gazzfm_k$ = function () {
    return this.subscriptionMonth_1;
  };
  protoOf(PupilEntry).component13_gazzfl_k$ = function () {
    return this.subscriptionYear_1;
  };
  protoOf(PupilEntry).component14_gazzfk_k$ = function () {
    return this.currentTask_1;
  };
  protoOf(PupilEntry).component15_gazzfj_k$ = function () {
    return this.currentTaskProgress_1;
  };
  protoOf(PupilEntry).component16_gazzfi_k$ = function () {
    return this.roundsList_1;
  };
  protoOf(PupilEntry).component17_gazzfh_k$ = function () {
    return this.rating_1;
  };
  protoOf(PupilEntry).component18_gazzfg_k$ = function () {
    return this.freeze_rating_1;
  };
  protoOf(PupilEntry).component19_gazzff_k$ = function () {
    return this.powermove_rating_1;
  };
  protoOf(PupilEntry).component20_gazzet_k$ = function () {
    return this.ofp_rating_1;
  };
  protoOf(PupilEntry).component21_gazzes_k$ = function () {
    return this.streching_rating_1;
  };
  protoOf(PupilEntry).component22_gazzer_k$ = function () {
    return this.battle_rating_1;
  };
  protoOf(PupilEntry).component23_gazzeq_k$ = function () {
    return this.battle_cur_position_1;
  };
  protoOf(PupilEntry).component24_gazzep_k$ = function () {
    return this.battle_new_position_1;
  };
  protoOf(PupilEntry).component25_gazzeo_k$ = function () {
    return this.new_position_1;
  };
  protoOf(PupilEntry).component26_gazzen_k$ = function () {
    return this.current_position_1;
  };
  protoOf(PupilEntry).component27_gazzem_k$ = function () {
    return this.babyfrezze_1;
  };
  protoOf(PupilEntry).component28_gazzel_k$ = function () {
    return this.chairfrezze_1;
  };
  protoOf(PupilEntry).component29_gazzek_k$ = function () {
    return this.elbowfrezze_1;
  };
  protoOf(PupilEntry).component30_gazzdy_k$ = function () {
    return this.headfrezze_1;
  };
  protoOf(PupilEntry).component31_gazzdx_k$ = function () {
    return this.headhollowbackfrezze_1;
  };
  protoOf(PupilEntry).component32_gazzdw_k$ = function () {
    return this.hollowbackfrezze_1;
  };
  protoOf(PupilEntry).component33_gazzdv_k$ = function () {
    return this.invertfrezze_1;
  };
  protoOf(PupilEntry).component34_gazzdu_k$ = function () {
    return this.onehandfrezze_1;
  };
  protoOf(PupilEntry).component35_gazzdt_k$ = function () {
    return this.shoulderfrezze_1;
  };
  protoOf(PupilEntry).component36_gazzds_k$ = function () {
    return this.turtlefrezze_1;
  };
  protoOf(PupilEntry).component37_gazzdr_k$ = function () {
    return this.airflare_1;
  };
  protoOf(PupilEntry).component38_gazzdq_k$ = function () {
    return this.backspin_1;
  };
  protoOf(PupilEntry).component39_gazzdp_k$ = function () {
    return this.cricket_1;
  };
  protoOf(PupilEntry).component40_gazzd3_k$ = function () {
    return this.elbowairflare_1;
  };
  protoOf(PupilEntry).component41_gazzd2_k$ = function () {
    return this.flare_1;
  };
  protoOf(PupilEntry).component42_gazzd1_k$ = function () {
    return this.jackhammer_1;
  };
  protoOf(PupilEntry).component43_gazzd0_k$ = function () {
    return this.halo_1;
  };
  protoOf(PupilEntry).component44_gazzcz_k$ = function () {
    return this.headspin_1;
  };
  protoOf(PupilEntry).component45_gazzcy_k$ = function () {
    return this.munchmill_1;
  };
  protoOf(PupilEntry).component46_gazzcx_k$ = function () {
    return this.ninety_nine_1;
  };
  protoOf(PupilEntry).component47_gazzcw_k$ = function () {
    return this.swipes_1;
  };
  protoOf(PupilEntry).component48_gazzcv_k$ = function () {
    return this.turtle_1;
  };
  protoOf(PupilEntry).component49_gazzcu_k$ = function () {
    return this.ufo_1;
  };
  protoOf(PupilEntry).component50_gazzc8_k$ = function () {
    return this.web_1;
  };
  protoOf(PupilEntry).component51_gazzc7_k$ = function () {
    return this.windmill_1;
  };
  protoOf(PupilEntry).component52_gazzc6_k$ = function () {
    return this.wolf_1;
  };
  protoOf(PupilEntry).component53_gazzc5_k$ = function () {
    return this.angle_1;
  };
  protoOf(PupilEntry).component54_gazzc4_k$ = function () {
    return this.bridge_1;
  };
  protoOf(PupilEntry).component55_gazzc3_k$ = function () {
    return this.finger_1;
  };
  protoOf(PupilEntry).component56_gazzc2_k$ = function () {
    return this.handstand_1;
  };
  protoOf(PupilEntry).component57_gazzc1_k$ = function () {
    return this.horizont_1;
  };
  protoOf(PupilEntry).component58_gazzc0_k$ = function () {
    return this.pushups_1;
  };
  protoOf(PupilEntry).component59_gazzbz_k$ = function () {
    return this.sit_ups_1;
  };
  protoOf(PupilEntry).component60_gazzbd_k$ = function () {
    return this.press_up_handstand_1;
  };
  protoOf(PupilEntry).component61_gazzbc_k$ = function () {
    return this.butterfly_1;
  };
  protoOf(PupilEntry).component62_gazzbb_k$ = function () {
    return this.fold_1;
  };
  protoOf(PupilEntry).component63_gazzba_k$ = function () {
    return this.shoulders_1;
  };
  protoOf(PupilEntry).component64_gazzb9_k$ = function () {
    return this.twine_1;
  };
  protoOf(PupilEntry).copy_psg3in_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine) {
    return new PupilEntry(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine);
  };
  protoOf(PupilEntry).copy$default_pf8onm_k$ = function (id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, $super) {
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
    freeze_rating = freeze_rating === VOID ? this.freeze_rating_1 : freeze_rating;
    powermove_rating = powermove_rating === VOID ? this.powermove_rating_1 : powermove_rating;
    ofp_rating = ofp_rating === VOID ? this.ofp_rating_1 : ofp_rating;
    streching_rating = streching_rating === VOID ? this.streching_rating_1 : streching_rating;
    battle_rating = battle_rating === VOID ? this.battle_rating_1 : battle_rating;
    battle_cur_position = battle_cur_position === VOID ? this.battle_cur_position_1 : battle_cur_position;
    battle_new_position = battle_new_position === VOID ? this.battle_new_position_1 : battle_new_position;
    new_position = new_position === VOID ? this.new_position_1 : new_position;
    current_position = current_position === VOID ? this.current_position_1 : current_position;
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
    ninety_nine = ninety_nine === VOID ? this.ninety_nine_1 : ninety_nine;
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
    press_up_handstand = press_up_handstand === VOID ? this.press_up_handstand_1 : press_up_handstand;
    butterfly = butterfly === VOID ? this.butterfly_1 : butterfly;
    fold = fold === VOID ? this.fold_1 : fold;
    shoulders = shoulders === VOID ? this.shoulders_1 : shoulders;
    twine = twine === VOID ? this.twine_1 : twine;
    return $super === VOID ? this.copy_psg3in_k$(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine) : $super.copy_psg3in_k$.call(this, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine);
  };
  protoOf(PupilEntry).toString = function () {
    return 'PupilEntry(id=' + this.id_1 + ', name=' + this.name_1 + ', email=' + this.email_1 + ', avatar=' + this.avatar_1 + ', born=' + this.born_1 + ', country=' + this.country_1 + ', city=' + this.city_1 + ', video=' + this.video_1 + ', status=' + this.status_1 + ', subscription=' + this.subscription_1.toString() + ', subscriptionDay=' + this.subscriptionDay_1 + ', subscriptionMonth=' + this.subscriptionMonth_1 + ', subscriptionYear=' + this.subscriptionYear_1 + ', currentTask=' + this.currentTask_1 + ', currentTaskProgress=' + this.currentTaskProgress_1 + ', roundsList=' + this.roundsList_1 + ', rating=' + this.rating_1 + ', freeze_rating=' + this.freeze_rating_1 + ', powermove_rating=' + this.powermove_rating_1 + ', ofp_rating=' + this.ofp_rating_1 + ', streching_rating=' + this.streching_rating_1 + ', battle_rating=' + this.battle_rating_1 + ', battle_cur_position=' + this.battle_cur_position_1 + ', battle_new_position=' + this.battle_new_position_1 + ', new_position=' + this.new_position_1 + ', current_position=' + this.current_position_1 + ', babyfrezze=' + this.babyfrezze_1 + ', chairfrezze=' + this.chairfrezze_1 + ', elbowfrezze=' + this.elbowfrezze_1 + ', headfrezze=' + this.headfrezze_1 + ', headhollowbackfrezze=' + this.headhollowbackfrezze_1 + ', hollowbackfrezze=' + this.hollowbackfrezze_1 + ', invertfrezze=' + this.invertfrezze_1 + ', onehandfrezze=' + this.onehandfrezze_1 + ', shoulderfrezze=' + this.shoulderfrezze_1 + ', turtlefrezze=' + this.turtlefrezze_1 + ', airflare=' + this.airflare_1 + ', backspin=' + this.backspin_1 + ', cricket=' + this.cricket_1 + ', elbowairflare=' + this.elbowairflare_1 + ', flare=' + this.flare_1 + ', jackhammer=' + this.jackhammer_1 + ', halo=' + this.halo_1 + ', headspin=' + this.headspin_1 + ', munchmill=' + this.munchmill_1 + ', ninety_nine=' + this.ninety_nine_1 + ', swipes=' + this.swipes_1 + ', turtle=' + this.turtle_1 + ', ufo=' + this.ufo_1 + ', web=' + this.web_1 + ', windmill=' + this.windmill_1 + ', wolf=' + this.wolf_1 + ', angle=' + this.angle_1 + ', bridge=' + this.bridge_1 + ', finger=' + this.finger_1 + ', handstand=' + this.handstand_1 + ', horizont=' + this.horizont_1 + ', pushups=' + this.pushups_1 + ', sit_ups=' + this.sit_ups_1 + ', press_up_handstand=' + this.press_up_handstand_1 + ', butterfly=' + this.butterfly_1 + ', fold=' + this.fold_1 + ', shoulders=' + this.shoulders_1 + ', twine=' + this.twine_1 + ')';
  };
  protoOf(PupilEntry).hashCode = function () {
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
    result = imul(result, 31) + getNumberHashCode(this.freeze_rating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.powermove_rating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ofp_rating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.streching_rating_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.battle_rating_1) | 0;
    result = imul(result, 31) + this.battle_cur_position_1 | 0;
    result = imul(result, 31) + this.battle_new_position_1 | 0;
    result = imul(result, 31) + this.new_position_1 | 0;
    result = imul(result, 31) + this.current_position_1 | 0;
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
    result = imul(result, 31) + this.ninety_nine_1 | 0;
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
    result = imul(result, 31) + this.press_up_handstand_1 | 0;
    result = imul(result, 31) + this.butterfly_1 | 0;
    result = imul(result, 31) + this.fold_1 | 0;
    result = imul(result, 31) + this.shoulders_1 | 0;
    result = imul(result, 31) + this.twine_1 | 0;
    return result;
  };
  protoOf(PupilEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilEntry))
      return false;
    var tmp0_other_with_cast = other instanceof PupilEntry ? other : THROW_CCE();
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
    if (!equals(this.freeze_rating_1, tmp0_other_with_cast.freeze_rating_1))
      return false;
    if (!equals(this.powermove_rating_1, tmp0_other_with_cast.powermove_rating_1))
      return false;
    if (!equals(this.ofp_rating_1, tmp0_other_with_cast.ofp_rating_1))
      return false;
    if (!equals(this.streching_rating_1, tmp0_other_with_cast.streching_rating_1))
      return false;
    if (!equals(this.battle_rating_1, tmp0_other_with_cast.battle_rating_1))
      return false;
    if (!(this.battle_cur_position_1 === tmp0_other_with_cast.battle_cur_position_1))
      return false;
    if (!(this.battle_new_position_1 === tmp0_other_with_cast.battle_new_position_1))
      return false;
    if (!(this.new_position_1 === tmp0_other_with_cast.new_position_1))
      return false;
    if (!(this.current_position_1 === tmp0_other_with_cast.current_position_1))
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
    if (!(this.ninety_nine_1 === tmp0_other_with_cast.ninety_nine_1))
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
    if (!(this.press_up_handstand_1 === tmp0_other_with_cast.press_up_handstand_1))
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
  function UserRepository() {
  }
  var com_korchagin_data_repository_UserRepositotyImplementation$stable;
  function UserRepositotyImplementation$getUsers$slambda$slambda($this_channelFlow, resultContinuation) {
    this.$this_channelFlow_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).invoke_nkcmrk_k$ = function (event, $completion) {
    var tmp = this.create_woov90_k$(event, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nkcmrk_k$(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var this_0 = this.event_1.get_children_4cwbp4_k$();
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var tmp_1;
              try {
                var tmp$ret$0 = Unit_getInstance();
                l$ret$1: do {
                  try {
                    var value = get_js(element).val();
                    var this_1 = new Builder();
                    var decodeSettings = buildDecodeSettings(this_1);
                    var this_2 = serializer(createKType(getKClass(PupilEntry), arrayOf([]), false));
                    var strategy = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
                    tmp$ret$0 = decode(isInterface(strategy, DeserializationStrategy) ? strategy : THROW_CCE(), value, decodeSettings);
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Exception) {
                      var e = $p;
                      throw e;
                    } else {
                      var e_0 = $p;
                      throw DatabaseException_init_$Create$(e_0);
                    }
                  }
                }
                 while (false);
                tmp_1 = tmp$ret$0;
              } catch ($p) {
                var tmp_2;
                if ($p instanceof Exception) {
                  var e_1 = $p;
                  println('Error decoding user: ' + e_1.message);
                  tmp_2 = null;
                } else {
                  throw $p;
                }
                tmp_1 = tmp_2;
              }
              var tmp0_safe_receiver = tmp_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination.add_utx5q5_k$(tmp0_safe_receiver);
              }
            }

            tmp_0.users0__1 = destination;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$this_channelFlow_1.send_44jogj_k$(this.users0__1, this);
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
        var e_2 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e_2;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_2);
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).create_woov90_k$ = function (event, completion) {
    var i = new UserRepositotyImplementation$getUsers$slambda$slambda(this.$this_channelFlow_1, completion);
    i.event_1 = event;
    return i;
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_woov90_k$(value instanceof DataSnapshot ? value : THROW_CCE(), completion);
  };
  function UserRepositotyImplementation$getUsers$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUsers$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (event, $completion) {
      return i.invoke_nkcmrk_k$(event, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda$slambda$slambda($this_channelFlow, resultContinuation) {
    this.$this_channelFlow_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).invoke_nkcmrk_k$ = function (snapshot, $completion) {
    var tmp = this.create_woov90_k$(snapshot, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nkcmrk_k$(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_safe_receiver = firstOrNull(this.snapshot_1.get_children_4cwbp4_k$());
          var tmp_0;
          if (tmp0_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              try {
                var value = get_js(tmp0_safe_receiver).val();
                var this_0 = new Builder();
                var decodeSettings = buildDecodeSettings(this_0);
                var this_1 = serializer(createKType(getKClass(PupilEntry), arrayOf([]), false));
                var strategy = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
                tmp$ret$0 = decode(isInterface(strategy, DeserializationStrategy) ? strategy : THROW_CCE(), value, decodeSettings);
                break l$ret$1;
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e = $p;
                  throw e;
                } else {
                  var e_0 = $p;
                  throw DatabaseException_init_$Create$(e_0);
                }
              }
            }
             while (false);
            tmp_0 = tmp$ret$0;
          }
          var user = tmp_0;
          println('Found user: ' + (user == null ? null : user.get_name_woqyms_k$()));
          if (!(user == null)) {
            this.$this_channelFlow_1.trySend_62dpg8_k$(user);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        throw e_1;
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).create_woov90_k$ = function (snapshot, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda$slambda(this.$this_channelFlow_1, completion);
    i.snapshot_1 = snapshot;
    return i;
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_woov90_k$(value instanceof DataSnapshot ? value : THROW_CCE(), completion);
  };
  function UserRepositotyImplementation$getUserById$slambda$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (snapshot, $completion) {
      return i.invoke_nkcmrk_k$(snapshot, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda$slambda(this$0, $id, $this_channelFlow, resultContinuation) {
    this.this$0__1 = this$0;
    this.$id_1 = $id;
    this.$this_channelFlow_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = _get_database__ij7wz4(this.this$0__1).orderByChild_k5k1fn_k$('email').equalTo$default_hgto8i_k$(this.$id_1).get_valueEvents_g9q9vj_k$();
          launchIn(onEach(tmp_0, UserRepositotyImplementation$getUserById$slambda$slambda$slambda_0(this.$this_channelFlow_1, null)), this.$this$coroutineScope_1);
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
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda(this.this$0__1, this.$id_1, this.$this_channelFlow_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function UserRepositotyImplementation$getUserById$slambda$slambda_0(this$0, $id, $this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda(this$0, $id, $this_channelFlow, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_database__ij7wz4($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.database$delegate_1;
    database$factory();
    return this_0.get_value_j01efc_k$();
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
  function UserRepositotyImplementation$database$delegate$lambda() {
    return get_database(Firebase_getInstance()).reference_8wmp8v_k$('Pupils');
  }
  function UserRepositotyImplementation$getUsers$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUsers$slambda).invoke_c365w9_k$ = function ($this$channelFlow, $completion) {
    var tmp = this.create_763g9x_k$($this$channelFlow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_c365w9_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = _get_database__ij7wz4(this.this$0__1).get_valueEvents_g9q9vj_k$();
            var tmp_1 = UserRepositotyImplementation$getUsers$slambda$slambda_0(this.$this$channelFlow_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(UserRepositotyImplementation$getUsers$slambda).create_763g9x_k$ = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getUsers$slambda(this.this$0__1, completion);
    i.$this$channelFlow_1 = $this$channelFlow;
    return i;
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_763g9x_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function UserRepositotyImplementation$getUsers$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getUsers$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.invoke_c365w9_k$($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda(this$0, $id, resultContinuation) {
    this.this$0__1 = this$0;
    this.$id_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda).invoke_8iopc1_k$ = function ($this$channelFlow, $completion) {
    var tmp = this.create_ma8inx_k$($this$channelFlow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_8iopc1_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(UserRepositotyImplementation$getUserById$slambda$slambda_0(this.this$0__1, this.$id_1, this.$this$channelFlow_1, null), this);
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
  protoOf(UserRepositotyImplementation$getUserById$slambda).create_ma8inx_k$ = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda(this.this$0__1, this.$id_1, completion);
    i.$this$channelFlow_1 = $this$channelFlow;
    return i;
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_ma8inx_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function UserRepositotyImplementation$getUserById$slambda_0(this$0, $id, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda(this$0, $id, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.invoke_8iopc1_k$($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation() {
    var tmp = this;
    tmp.database$delegate_1 = lazy(UserRepositotyImplementation$database$delegate$lambda);
  }
  protoOf(UserRepositotyImplementation).getUsers_wjcaqa_k$ = function () {
    return channelFlow(UserRepositotyImplementation$getUsers$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).getUserById_sbow6f_k$ = function (id) {
    return channelFlow(UserRepositotyImplementation$getUserById$slambda_0(this, id, null));
  };
  function database$factory() {
    return getPropertyCallableRef('database', 1, KProperty1, function (receiver) {
      return _get_database__ij7wz4(receiver);
    }, null);
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  breakingkmpapp_module_main_data_main_generated_resources_Res_drawable$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_string$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_array$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_plurals$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_font$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res$stable = 0;
  com_korchagin_data_models_PupilEntry_$serializer$stable = 8;
  com_korchagin_data_models_PupilEntry$stable = 8;
  com_korchagin_data_repository_UserRepositotyImplementation$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_mainDataRepositoryModule;
  _.$_$.b = UserRepository;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-data_main.js.map
