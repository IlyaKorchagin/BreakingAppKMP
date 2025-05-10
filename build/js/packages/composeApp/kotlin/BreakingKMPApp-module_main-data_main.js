(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './projects-core-koin-core.js', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './firebase-kotlin-sdk-firebase-database.js', './firebase-kotlin-sdk-firebase-common-internal.js', './kotlinx-coroutines-core.js', './firebase-kotlin-sdk-firebase-app.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./projects-core-koin-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./firebase-kotlin-sdk-firebase-database.js'), require('./firebase-kotlin-sdk-firebase-common-internal.js'), require('./kotlinx-coroutines-core.js'), require('./firebase-kotlin-sdk-firebase-app.js'));
  else {
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
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
    globalThis['BreakingKMPApp-module_main-data_main'] = factory(typeof globalThis['BreakingKMPApp-module_main-data_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_main-data_main'], globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['firebase-kotlin-sdk-firebase-database'], globalThis['firebase-kotlin-sdk-firebase-common-internal'], globalThis['kotlinx-coroutines-core'], globalThis['firebase-kotlin-sdk-firebase-app']);
  }
}(function (_, kotlin_io_insert_koin_koin_core, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_dev_gitlive_firebase_database, kotlin_dev_gitlive_firebase_common_internal, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_dev_gitlive_firebase_app) {
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
  var bind = kotlin_io_insert_koin_koin_core.$_$.j;
  var VOID = kotlin_kotlin.$_$.i;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.k;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var Long = kotlin_kotlin.$_$.wi;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var throwArrayMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var DataSnapshot = kotlin_dev_gitlive_firebase_database.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var get_js = kotlin_dev_gitlive_firebase_database.$_$.c;
  var Builder = kotlin_dev_gitlive_firebase_common_internal.$_$.a;
  var buildDecodeSettings = kotlin_dev_gitlive_firebase_common_internal.$_$.b;
  var arrayOf = kotlin_kotlin.$_$.sj;
  var createKType = kotlin_kotlin.$_$.c;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var isInterface = kotlin_kotlin.$_$.qd;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var decode = kotlin_dev_gitlive_firebase_common_internal.$_$.c;
  var DatabaseException_init_$Create$ = kotlin_dev_gitlive_firebase_database.$_$.d;
  var Exception = kotlin_kotlin.$_$.si;
  var println = kotlin_kotlin.$_$.cc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var firstOrNull = kotlin_kotlin.$_$.i8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var hashCode = kotlin_kotlin.$_$.zc;
  var Firebase_instance = kotlin_dev_gitlive_firebase_app.$_$.c;
  var get_database = kotlin_dev_gitlive_firebase_database.$_$.b;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var lazy = kotlin_kotlin.$_$.fk;
  var channelFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PupilEntry, 'PupilEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForInterface(UserRepository, 'UserRepository');
  initMetadataForLambda(UserRepositotyImplementation$getUsers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUsers$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(UserRepositotyImplementation, 'UserRepositotyImplementation', UserRepositotyImplementation, VOID, [UserRepository]);
  //endregion
  var breakingkmpapp_module_main_data_main_generated_resources_Res_drawable$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_string$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_array$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_plurals$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_font$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res$stable;
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
    var scopeQualifier = Companion_getInstance().vr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(UserRepositotyImplementation), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.at(factory);
    if (false || $this$module.ts_1) {
      $this$module.dt(factory);
    }
    var this_0 = new KoinDefinition($this$module, factory);
    bind(this_0, getKClass(UserRepository));
    return Unit_instance;
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
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.korchagin.data.models.PupilEntry', this, 64);
    tmp0_serialDesc.u4l('id', false);
    tmp0_serialDesc.u4l('name', false);
    tmp0_serialDesc.u4l('email', false);
    tmp0_serialDesc.u4l('avatar', false);
    tmp0_serialDesc.u4l('born', false);
    tmp0_serialDesc.u4l('country', false);
    tmp0_serialDesc.u4l('city', false);
    tmp0_serialDesc.u4l('video', false);
    tmp0_serialDesc.u4l('status', false);
    tmp0_serialDesc.u4l('subscription', false);
    tmp0_serialDesc.u4l('subscriptionDay', false);
    tmp0_serialDesc.u4l('subscriptionMonth', false);
    tmp0_serialDesc.u4l('subscriptionYear', false);
    tmp0_serialDesc.u4l('currentTask', false);
    tmp0_serialDesc.u4l('currentTaskProgress', false);
    tmp0_serialDesc.u4l('roundsList', false);
    tmp0_serialDesc.u4l('rating', false);
    tmp0_serialDesc.u4l('freeze_rating', false);
    tmp0_serialDesc.u4l('powermove_rating', false);
    tmp0_serialDesc.u4l('ofp_rating', false);
    tmp0_serialDesc.u4l('streching_rating', false);
    tmp0_serialDesc.u4l('battle_rating', false);
    tmp0_serialDesc.u4l('battle_cur_position', false);
    tmp0_serialDesc.u4l('battle_new_position', false);
    tmp0_serialDesc.u4l('new_position', false);
    tmp0_serialDesc.u4l('current_position', false);
    tmp0_serialDesc.u4l('babyfrezze', false);
    tmp0_serialDesc.u4l('chairfrezze', false);
    tmp0_serialDesc.u4l('elbowfrezze', false);
    tmp0_serialDesc.u4l('headfrezze', false);
    tmp0_serialDesc.u4l('headhollowbackfrezze', false);
    tmp0_serialDesc.u4l('hollowbackfrezze', false);
    tmp0_serialDesc.u4l('invertfrezze', false);
    tmp0_serialDesc.u4l('onehandfrezze', false);
    tmp0_serialDesc.u4l('shoulderfrezze', false);
    tmp0_serialDesc.u4l('turtlefrezze', false);
    tmp0_serialDesc.u4l('airflare', false);
    tmp0_serialDesc.u4l('backspin', false);
    tmp0_serialDesc.u4l('cricket', false);
    tmp0_serialDesc.u4l('elbowairflare', false);
    tmp0_serialDesc.u4l('flare', false);
    tmp0_serialDesc.u4l('jackhammer', false);
    tmp0_serialDesc.u4l('halo', false);
    tmp0_serialDesc.u4l('headspin', false);
    tmp0_serialDesc.u4l('munchmill', false);
    tmp0_serialDesc.u4l('ninety_nine', false);
    tmp0_serialDesc.u4l('swipes', false);
    tmp0_serialDesc.u4l('turtle', false);
    tmp0_serialDesc.u4l('ufo', false);
    tmp0_serialDesc.u4l('web', false);
    tmp0_serialDesc.u4l('windmill', false);
    tmp0_serialDesc.u4l('wolf', false);
    tmp0_serialDesc.u4l('angle', false);
    tmp0_serialDesc.u4l('bridge', false);
    tmp0_serialDesc.u4l('finger', false);
    tmp0_serialDesc.u4l('handstand', false);
    tmp0_serialDesc.u4l('horizont', false);
    tmp0_serialDesc.u4l('pushups', false);
    tmp0_serialDesc.u4l('sit_ups', false);
    tmp0_serialDesc.u4l('press_up_handstand', false);
    tmp0_serialDesc.u4l('butterfly', false);
    tmp0_serialDesc.u4l('fold', false);
    tmp0_serialDesc.u4l('shoulders', false);
    tmp0_serialDesc.u4l('twine', false);
    this.ij4_1 = tmp0_serialDesc;
  }
  protoOf($serializer).jj4 = function (encoder, value) {
    var tmp0_desc = this.ij4_1;
    var tmp1_output = encoder.e4e(tmp0_desc);
    tmp1_output.c4f(tmp0_desc, 0, value.kj4_1);
    tmp1_output.c4f(tmp0_desc, 1, value.lj4_1);
    tmp1_output.c4f(tmp0_desc, 2, value.mj4_1);
    tmp1_output.c4f(tmp0_desc, 3, value.nj4_1);
    tmp1_output.c4f(tmp0_desc, 4, value.oj4_1);
    tmp1_output.c4f(tmp0_desc, 5, value.pj4_1);
    tmp1_output.c4f(tmp0_desc, 6, value.qj4_1);
    tmp1_output.c4f(tmp0_desc, 7, value.rj4_1);
    tmp1_output.x4e(tmp0_desc, 8, value.sj4_1);
    tmp1_output.y4e(tmp0_desc, 9, value.tj4_1);
    tmp1_output.x4e(tmp0_desc, 10, value.uj4_1);
    tmp1_output.x4e(tmp0_desc, 11, value.vj4_1);
    tmp1_output.x4e(tmp0_desc, 12, value.wj4_1);
    tmp1_output.c4f(tmp0_desc, 13, value.xj4_1);
    tmp1_output.x4e(tmp0_desc, 14, value.yj4_1);
    tmp1_output.c4f(tmp0_desc, 15, value.zj4_1);
    tmp1_output.a4f(tmp0_desc, 16, value.aj5_1);
    tmp1_output.a4f(tmp0_desc, 17, value.bj5_1);
    tmp1_output.a4f(tmp0_desc, 18, value.cj5_1);
    tmp1_output.a4f(tmp0_desc, 19, value.dj5_1);
    tmp1_output.a4f(tmp0_desc, 20, value.ej5_1);
    tmp1_output.a4f(tmp0_desc, 21, value.fj5_1);
    tmp1_output.x4e(tmp0_desc, 22, value.gj5_1);
    tmp1_output.x4e(tmp0_desc, 23, value.hj5_1);
    tmp1_output.x4e(tmp0_desc, 24, value.ij5_1);
    tmp1_output.x4e(tmp0_desc, 25, value.jj5_1);
    tmp1_output.x4e(tmp0_desc, 26, value.kj5_1);
    tmp1_output.x4e(tmp0_desc, 27, value.lj5_1);
    tmp1_output.x4e(tmp0_desc, 28, value.mj5_1);
    tmp1_output.x4e(tmp0_desc, 29, value.nj5_1);
    tmp1_output.x4e(tmp0_desc, 30, value.oj5_1);
    tmp1_output.x4e(tmp0_desc, 31, value.pj5_1);
    tmp1_output.x4e(tmp0_desc, 32, value.qj5_1);
    tmp1_output.x4e(tmp0_desc, 33, value.rj5_1);
    tmp1_output.x4e(tmp0_desc, 34, value.sj5_1);
    tmp1_output.x4e(tmp0_desc, 35, value.tj5_1);
    tmp1_output.x4e(tmp0_desc, 36, value.uj5_1);
    tmp1_output.x4e(tmp0_desc, 37, value.vj5_1);
    tmp1_output.x4e(tmp0_desc, 38, value.wj5_1);
    tmp1_output.x4e(tmp0_desc, 39, value.xj5_1);
    tmp1_output.x4e(tmp0_desc, 40, value.yj5_1);
    tmp1_output.x4e(tmp0_desc, 41, value.zj5_1);
    tmp1_output.x4e(tmp0_desc, 42, value.aj6_1);
    tmp1_output.x4e(tmp0_desc, 43, value.bj6_1);
    tmp1_output.x4e(tmp0_desc, 44, value.cj6_1);
    tmp1_output.x4e(tmp0_desc, 45, value.dj6_1);
    tmp1_output.x4e(tmp0_desc, 46, value.ej6_1);
    tmp1_output.x4e(tmp0_desc, 47, value.fj6_1);
    tmp1_output.x4e(tmp0_desc, 48, value.gj6_1);
    tmp1_output.x4e(tmp0_desc, 49, value.hj6_1);
    tmp1_output.x4e(tmp0_desc, 50, value.ij6_1);
    tmp1_output.x4e(tmp0_desc, 51, value.jj6_1);
    tmp1_output.x4e(tmp0_desc, 52, value.kj6_1);
    tmp1_output.x4e(tmp0_desc, 53, value.lj6_1);
    tmp1_output.x4e(tmp0_desc, 54, value.mj6_1);
    tmp1_output.x4e(tmp0_desc, 55, value.nj6_1);
    tmp1_output.x4e(tmp0_desc, 56, value.oj6_1);
    tmp1_output.x4e(tmp0_desc, 57, value.pj6_1);
    tmp1_output.x4e(tmp0_desc, 58, value.qj6_1);
    tmp1_output.x4e(tmp0_desc, 59, value.rj6_1);
    tmp1_output.x4e(tmp0_desc, 60, value.sj6_1);
    tmp1_output.x4e(tmp0_desc, 61, value.tj6_1);
    tmp1_output.x4e(tmp0_desc, 62, value.uj6_1);
    tmp1_output.x4e(tmp0_desc, 63, value.vj6_1);
    tmp1_output.f4e(tmp0_desc);
  };
  protoOf($serializer).z4b = function (encoder, value) {
    return this.jj4(encoder, value instanceof PupilEntry ? value : THROW_CCE());
  };
  protoOf($serializer).a4c = function (decoder) {
    var tmp0_desc = this.ij4_1;
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
    var tmp70_input = decoder.e4e(tmp0_desc);
    if (tmp70_input.x4f()) {
      tmp6_local0 = tmp70_input.i4g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp7_local1 = tmp70_input.i4g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp8_local2 = tmp70_input.i4g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp9_local3 = tmp70_input.i4g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp10_local4 = tmp70_input.i4g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp11_local5 = tmp70_input.i4g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp12_local6 = tmp70_input.i4g(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp13_local7 = tmp70_input.i4g(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp14_local8 = tmp70_input.e4g(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp15_local9 = tmp70_input.f4g(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp16_local10 = tmp70_input.e4g(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp17_local11 = tmp70_input.e4g(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp18_local12 = tmp70_input.e4g(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp19_local13 = tmp70_input.i4g(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp20_local14 = tmp70_input.e4g(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp21_local15 = tmp70_input.i4g(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp22_local16 = tmp70_input.h4g(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp23_local17 = tmp70_input.h4g(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp24_local18 = tmp70_input.h4g(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp25_local19 = tmp70_input.h4g(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp26_local20 = tmp70_input.h4g(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp27_local21 = tmp70_input.h4g(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp28_local22 = tmp70_input.e4g(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp29_local23 = tmp70_input.e4g(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp30_local24 = tmp70_input.e4g(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp31_local25 = tmp70_input.e4g(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp32_local26 = tmp70_input.e4g(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp33_local27 = tmp70_input.e4g(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp34_local28 = tmp70_input.e4g(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp35_local29 = tmp70_input.e4g(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp36_local30 = tmp70_input.e4g(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp37_local31 = tmp70_input.e4g(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp38_local32 = tmp70_input.e4g(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp39_local33 = tmp70_input.e4g(tmp0_desc, 33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp40_local34 = tmp70_input.e4g(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp41_local35 = tmp70_input.e4g(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp42_local36 = tmp70_input.e4g(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp43_local37 = tmp70_input.e4g(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp44_local38 = tmp70_input.e4g(tmp0_desc, 38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp45_local39 = tmp70_input.e4g(tmp0_desc, 39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp46_local40 = tmp70_input.e4g(tmp0_desc, 40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp47_local41 = tmp70_input.e4g(tmp0_desc, 41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp48_local42 = tmp70_input.e4g(tmp0_desc, 42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp49_local43 = tmp70_input.e4g(tmp0_desc, 43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp50_local44 = tmp70_input.e4g(tmp0_desc, 44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp51_local45 = tmp70_input.e4g(tmp0_desc, 45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
      tmp52_local46 = tmp70_input.e4g(tmp0_desc, 46);
      tmp4_bitMask1 = tmp4_bitMask1 | 16384;
      tmp53_local47 = tmp70_input.e4g(tmp0_desc, 47);
      tmp4_bitMask1 = tmp4_bitMask1 | 32768;
      tmp54_local48 = tmp70_input.e4g(tmp0_desc, 48);
      tmp4_bitMask1 = tmp4_bitMask1 | 65536;
      tmp55_local49 = tmp70_input.e4g(tmp0_desc, 49);
      tmp4_bitMask1 = tmp4_bitMask1 | 131072;
      tmp56_local50 = tmp70_input.e4g(tmp0_desc, 50);
      tmp4_bitMask1 = tmp4_bitMask1 | 262144;
      tmp57_local51 = tmp70_input.e4g(tmp0_desc, 51);
      tmp4_bitMask1 = tmp4_bitMask1 | 524288;
      tmp58_local52 = tmp70_input.e4g(tmp0_desc, 52);
      tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
      tmp59_local53 = tmp70_input.e4g(tmp0_desc, 53);
      tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
      tmp60_local54 = tmp70_input.e4g(tmp0_desc, 54);
      tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
      tmp61_local55 = tmp70_input.e4g(tmp0_desc, 55);
      tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
      tmp62_local56 = tmp70_input.e4g(tmp0_desc, 56);
      tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
      tmp63_local57 = tmp70_input.e4g(tmp0_desc, 57);
      tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
      tmp64_local58 = tmp70_input.e4g(tmp0_desc, 58);
      tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
      tmp65_local59 = tmp70_input.e4g(tmp0_desc, 59);
      tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
      tmp66_local60 = tmp70_input.e4g(tmp0_desc, 60);
      tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
      tmp67_local61 = tmp70_input.e4g(tmp0_desc, 61);
      tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
      tmp68_local62 = tmp70_input.e4g(tmp0_desc, 62);
      tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
      tmp69_local63 = tmp70_input.e4g(tmp0_desc, 63);
      tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp70_input.y4f(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp6_local0 = tmp70_input.i4g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp7_local1 = tmp70_input.i4g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp8_local2 = tmp70_input.i4g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp9_local3 = tmp70_input.i4g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp10_local4 = tmp70_input.i4g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp11_local5 = tmp70_input.i4g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp12_local6 = tmp70_input.i4g(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp13_local7 = tmp70_input.i4g(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp14_local8 = tmp70_input.e4g(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp15_local9 = tmp70_input.f4g(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp16_local10 = tmp70_input.e4g(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp17_local11 = tmp70_input.e4g(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp18_local12 = tmp70_input.e4g(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp19_local13 = tmp70_input.i4g(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp20_local14 = tmp70_input.e4g(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp21_local15 = tmp70_input.i4g(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp22_local16 = tmp70_input.h4g(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp23_local17 = tmp70_input.h4g(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp24_local18 = tmp70_input.h4g(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp25_local19 = tmp70_input.h4g(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp26_local20 = tmp70_input.h4g(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp27_local21 = tmp70_input.h4g(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp28_local22 = tmp70_input.e4g(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp29_local23 = tmp70_input.e4g(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp30_local24 = tmp70_input.e4g(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp31_local25 = tmp70_input.e4g(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp32_local26 = tmp70_input.e4g(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp33_local27 = tmp70_input.e4g(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp34_local28 = tmp70_input.e4g(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp35_local29 = tmp70_input.e4g(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp36_local30 = tmp70_input.e4g(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp37_local31 = tmp70_input.e4g(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp38_local32 = tmp70_input.e4g(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp39_local33 = tmp70_input.e4g(tmp0_desc, 33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp40_local34 = tmp70_input.e4g(tmp0_desc, 34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp41_local35 = tmp70_input.e4g(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp42_local36 = tmp70_input.e4g(tmp0_desc, 36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp43_local37 = tmp70_input.e4g(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp44_local38 = tmp70_input.e4g(tmp0_desc, 38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp45_local39 = tmp70_input.e4g(tmp0_desc, 39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp46_local40 = tmp70_input.e4g(tmp0_desc, 40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp47_local41 = tmp70_input.e4g(tmp0_desc, 41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp48_local42 = tmp70_input.e4g(tmp0_desc, 42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp49_local43 = tmp70_input.e4g(tmp0_desc, 43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp50_local44 = tmp70_input.e4g(tmp0_desc, 44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          case 45:
            tmp51_local45 = tmp70_input.e4g(tmp0_desc, 45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          case 46:
            tmp52_local46 = tmp70_input.e4g(tmp0_desc, 46);
            tmp4_bitMask1 = tmp4_bitMask1 | 16384;
            break;
          case 47:
            tmp53_local47 = tmp70_input.e4g(tmp0_desc, 47);
            tmp4_bitMask1 = tmp4_bitMask1 | 32768;
            break;
          case 48:
            tmp54_local48 = tmp70_input.e4g(tmp0_desc, 48);
            tmp4_bitMask1 = tmp4_bitMask1 | 65536;
            break;
          case 49:
            tmp55_local49 = tmp70_input.e4g(tmp0_desc, 49);
            tmp4_bitMask1 = tmp4_bitMask1 | 131072;
            break;
          case 50:
            tmp56_local50 = tmp70_input.e4g(tmp0_desc, 50);
            tmp4_bitMask1 = tmp4_bitMask1 | 262144;
            break;
          case 51:
            tmp57_local51 = tmp70_input.e4g(tmp0_desc, 51);
            tmp4_bitMask1 = tmp4_bitMask1 | 524288;
            break;
          case 52:
            tmp58_local52 = tmp70_input.e4g(tmp0_desc, 52);
            tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
            break;
          case 53:
            tmp59_local53 = tmp70_input.e4g(tmp0_desc, 53);
            tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
            break;
          case 54:
            tmp60_local54 = tmp70_input.e4g(tmp0_desc, 54);
            tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
            break;
          case 55:
            tmp61_local55 = tmp70_input.e4g(tmp0_desc, 55);
            tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
            break;
          case 56:
            tmp62_local56 = tmp70_input.e4g(tmp0_desc, 56);
            tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
            break;
          case 57:
            tmp63_local57 = tmp70_input.e4g(tmp0_desc, 57);
            tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
            break;
          case 58:
            tmp64_local58 = tmp70_input.e4g(tmp0_desc, 58);
            tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
            break;
          case 59:
            tmp65_local59 = tmp70_input.e4g(tmp0_desc, 59);
            tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
            break;
          case 60:
            tmp66_local60 = tmp70_input.e4g(tmp0_desc, 60);
            tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
            break;
          case 61:
            tmp67_local61 = tmp70_input.e4g(tmp0_desc, 61);
            tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
            break;
          case 62:
            tmp68_local62 = tmp70_input.e4g(tmp0_desc, 62);
            tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
            break;
          case 63:
            tmp69_local63 = tmp70_input.e4g(tmp0_desc, 63);
            tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp70_input.f4e(tmp0_desc);
    return PupilEntry_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, 0, tmp6_local0, tmp7_local1, tmp8_local2, tmp9_local3, tmp10_local4, tmp11_local5, tmp12_local6, tmp13_local7, tmp14_local8, tmp15_local9, tmp16_local10, tmp17_local11, tmp18_local12, tmp19_local13, tmp20_local14, tmp21_local15, tmp22_local16, tmp23_local17, tmp24_local18, tmp25_local19, tmp26_local20, tmp27_local21, tmp28_local22, tmp29_local23, tmp30_local24, tmp31_local25, tmp32_local26, tmp33_local27, tmp34_local28, tmp35_local29, tmp36_local30, tmp37_local31, tmp38_local32, tmp39_local33, tmp40_local34, tmp41_local35, tmp42_local36, tmp43_local37, tmp44_local38, tmp45_local39, tmp46_local40, tmp47_local41, tmp48_local42, tmp49_local43, tmp50_local44, tmp51_local45, tmp52_local46, tmp53_local47, tmp54_local48, tmp55_local49, tmp56_local50, tmp57_local51, tmp58_local52, tmp59_local53, tmp60_local54, tmp61_local55, tmp62_local56, tmp63_local57, tmp64_local58, tmp65_local59, tmp66_local60, tmp67_local61, tmp68_local62, tmp69_local63, null);
  };
  protoOf($serializer).y4b = function () {
    return this.ij4_1;
  };
  protoOf($serializer).j4m = function () {
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
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance().ij4_1);
    }
    $this.kj4_1 = id;
    $this.lj4_1 = name;
    $this.mj4_1 = email;
    $this.nj4_1 = avatar;
    $this.oj4_1 = born;
    $this.pj4_1 = country;
    $this.qj4_1 = city;
    $this.rj4_1 = video;
    $this.sj4_1 = status;
    $this.tj4_1 = subscription;
    $this.uj4_1 = subscriptionDay;
    $this.vj4_1 = subscriptionMonth;
    $this.wj4_1 = subscriptionYear;
    $this.xj4_1 = currentTask;
    $this.yj4_1 = currentTaskProgress;
    $this.zj4_1 = roundsList;
    $this.aj5_1 = rating;
    $this.bj5_1 = freeze_rating;
    $this.cj5_1 = powermove_rating;
    $this.dj5_1 = ofp_rating;
    $this.ej5_1 = streching_rating;
    $this.fj5_1 = battle_rating;
    $this.gj5_1 = battle_cur_position;
    $this.hj5_1 = battle_new_position;
    $this.ij5_1 = new_position;
    $this.jj5_1 = current_position;
    $this.kj5_1 = babyfrezze;
    $this.lj5_1 = chairfrezze;
    $this.mj5_1 = elbowfrezze;
    $this.nj5_1 = headfrezze;
    $this.oj5_1 = headhollowbackfrezze;
    $this.pj5_1 = hollowbackfrezze;
    $this.qj5_1 = invertfrezze;
    $this.rj5_1 = onehandfrezze;
    $this.sj5_1 = shoulderfrezze;
    $this.tj5_1 = turtlefrezze;
    $this.uj5_1 = airflare;
    $this.vj5_1 = backspin;
    $this.wj5_1 = cricket;
    $this.xj5_1 = elbowairflare;
    $this.yj5_1 = flare;
    $this.zj5_1 = jackhammer;
    $this.aj6_1 = halo;
    $this.bj6_1 = headspin;
    $this.cj6_1 = munchmill;
    $this.dj6_1 = ninety_nine;
    $this.ej6_1 = swipes;
    $this.fj6_1 = turtle;
    $this.gj6_1 = ufo;
    $this.hj6_1 = web;
    $this.ij6_1 = windmill;
    $this.jj6_1 = wolf;
    $this.kj6_1 = angle;
    $this.lj6_1 = bridge;
    $this.mj6_1 = finger;
    $this.nj6_1 = handstand;
    $this.oj6_1 = horizont;
    $this.pj6_1 = pushups;
    $this.qj6_1 = sit_ups;
    $this.rj6_1 = press_up_handstand;
    $this.sj6_1 = butterfly;
    $this.tj6_1 = fold;
    $this.uj6_1 = shoulders;
    $this.vj6_1 = twine;
    return $this;
  }
  function PupilEntry_init_$Create$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker) {
    return PupilEntry_init_$Init$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker, objectCreate(protoOf(PupilEntry)));
  }
  function PupilEntry(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine) {
    this.kj4_1 = id;
    this.lj4_1 = name;
    this.mj4_1 = email;
    this.nj4_1 = avatar;
    this.oj4_1 = born;
    this.pj4_1 = country;
    this.qj4_1 = city;
    this.rj4_1 = video;
    this.sj4_1 = status;
    this.tj4_1 = subscription;
    this.uj4_1 = subscriptionDay;
    this.vj4_1 = subscriptionMonth;
    this.wj4_1 = subscriptionYear;
    this.xj4_1 = currentTask;
    this.yj4_1 = currentTaskProgress;
    this.zj4_1 = roundsList;
    this.aj5_1 = rating;
    this.bj5_1 = freeze_rating;
    this.cj5_1 = powermove_rating;
    this.dj5_1 = ofp_rating;
    this.ej5_1 = streching_rating;
    this.fj5_1 = battle_rating;
    this.gj5_1 = battle_cur_position;
    this.hj5_1 = battle_new_position;
    this.ij5_1 = new_position;
    this.jj5_1 = current_position;
    this.kj5_1 = babyfrezze;
    this.lj5_1 = chairfrezze;
    this.mj5_1 = elbowfrezze;
    this.nj5_1 = headfrezze;
    this.oj5_1 = headhollowbackfrezze;
    this.pj5_1 = hollowbackfrezze;
    this.qj5_1 = invertfrezze;
    this.rj5_1 = onehandfrezze;
    this.sj5_1 = shoulderfrezze;
    this.tj5_1 = turtlefrezze;
    this.uj5_1 = airflare;
    this.vj5_1 = backspin;
    this.wj5_1 = cricket;
    this.xj5_1 = elbowairflare;
    this.yj5_1 = flare;
    this.zj5_1 = jackhammer;
    this.aj6_1 = halo;
    this.bj6_1 = headspin;
    this.cj6_1 = munchmill;
    this.dj6_1 = ninety_nine;
    this.ej6_1 = swipes;
    this.fj6_1 = turtle;
    this.gj6_1 = ufo;
    this.hj6_1 = web;
    this.ij6_1 = windmill;
    this.jj6_1 = wolf;
    this.kj6_1 = angle;
    this.lj6_1 = bridge;
    this.mj6_1 = finger;
    this.nj6_1 = handstand;
    this.oj6_1 = horizont;
    this.pj6_1 = pushups;
    this.qj6_1 = sit_ups;
    this.rj6_1 = press_up_handstand;
    this.sj6_1 = butterfly;
    this.tj6_1 = fold;
    this.uj6_1 = shoulders;
    this.vj6_1 = twine;
  }
  protoOf(PupilEntry).toString = function () {
    return 'PupilEntry(id=' + this.kj4_1 + ', name=' + this.lj4_1 + ', email=' + this.mj4_1 + ', avatar=' + this.nj4_1 + ', born=' + this.oj4_1 + ', country=' + this.pj4_1 + ', city=' + this.qj4_1 + ', video=' + this.rj4_1 + ', status=' + this.sj4_1 + ', subscription=' + this.tj4_1.toString() + ', subscriptionDay=' + this.uj4_1 + ', subscriptionMonth=' + this.vj4_1 + ', subscriptionYear=' + this.wj4_1 + ', currentTask=' + this.xj4_1 + ', currentTaskProgress=' + this.yj4_1 + ', roundsList=' + this.zj4_1 + ', rating=' + this.aj5_1 + ', freeze_rating=' + this.bj5_1 + ', powermove_rating=' + this.cj5_1 + ', ofp_rating=' + this.dj5_1 + ', streching_rating=' + this.ej5_1 + ', battle_rating=' + this.fj5_1 + ', battle_cur_position=' + this.gj5_1 + ', battle_new_position=' + this.hj5_1 + ', new_position=' + this.ij5_1 + ', current_position=' + this.jj5_1 + ', babyfrezze=' + this.kj5_1 + ', chairfrezze=' + this.lj5_1 + ', elbowfrezze=' + this.mj5_1 + ', headfrezze=' + this.nj5_1 + ', headhollowbackfrezze=' + this.oj5_1 + ', hollowbackfrezze=' + this.pj5_1 + ', invertfrezze=' + this.qj5_1 + ', onehandfrezze=' + this.rj5_1 + ', shoulderfrezze=' + this.sj5_1 + ', turtlefrezze=' + this.tj5_1 + ', airflare=' + this.uj5_1 + ', backspin=' + this.vj5_1 + ', cricket=' + this.wj5_1 + ', elbowairflare=' + this.xj5_1 + ', flare=' + this.yj5_1 + ', jackhammer=' + this.zj5_1 + ', halo=' + this.aj6_1 + ', headspin=' + this.bj6_1 + ', munchmill=' + this.cj6_1 + ', ninety_nine=' + this.dj6_1 + ', swipes=' + this.ej6_1 + ', turtle=' + this.fj6_1 + ', ufo=' + this.gj6_1 + ', web=' + this.hj6_1 + ', windmill=' + this.ij6_1 + ', wolf=' + this.jj6_1 + ', angle=' + this.kj6_1 + ', bridge=' + this.lj6_1 + ', finger=' + this.mj6_1 + ', handstand=' + this.nj6_1 + ', horizont=' + this.oj6_1 + ', pushups=' + this.pj6_1 + ', sit_ups=' + this.qj6_1 + ', press_up_handstand=' + this.rj6_1 + ', butterfly=' + this.sj6_1 + ', fold=' + this.tj6_1 + ', shoulders=' + this.uj6_1 + ', twine=' + this.vj6_1 + ')';
  };
  protoOf(PupilEntry).hashCode = function () {
    var result = getStringHashCode(this.kj4_1);
    result = imul(result, 31) + getStringHashCode(this.lj4_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mj4_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.nj4_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.oj4_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pj4_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qj4_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rj4_1) | 0;
    result = imul(result, 31) + this.sj4_1 | 0;
    result = imul(result, 31) + this.tj4_1.hashCode() | 0;
    result = imul(result, 31) + this.uj4_1 | 0;
    result = imul(result, 31) + this.vj4_1 | 0;
    result = imul(result, 31) + this.wj4_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.xj4_1) | 0;
    result = imul(result, 31) + this.yj4_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.zj4_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.aj5_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bj5_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.cj5_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dj5_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ej5_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.fj5_1) | 0;
    result = imul(result, 31) + this.gj5_1 | 0;
    result = imul(result, 31) + this.hj5_1 | 0;
    result = imul(result, 31) + this.ij5_1 | 0;
    result = imul(result, 31) + this.jj5_1 | 0;
    result = imul(result, 31) + this.kj5_1 | 0;
    result = imul(result, 31) + this.lj5_1 | 0;
    result = imul(result, 31) + this.mj5_1 | 0;
    result = imul(result, 31) + this.nj5_1 | 0;
    result = imul(result, 31) + this.oj5_1 | 0;
    result = imul(result, 31) + this.pj5_1 | 0;
    result = imul(result, 31) + this.qj5_1 | 0;
    result = imul(result, 31) + this.rj5_1 | 0;
    result = imul(result, 31) + this.sj5_1 | 0;
    result = imul(result, 31) + this.tj5_1 | 0;
    result = imul(result, 31) + this.uj5_1 | 0;
    result = imul(result, 31) + this.vj5_1 | 0;
    result = imul(result, 31) + this.wj5_1 | 0;
    result = imul(result, 31) + this.xj5_1 | 0;
    result = imul(result, 31) + this.yj5_1 | 0;
    result = imul(result, 31) + this.zj5_1 | 0;
    result = imul(result, 31) + this.aj6_1 | 0;
    result = imul(result, 31) + this.bj6_1 | 0;
    result = imul(result, 31) + this.cj6_1 | 0;
    result = imul(result, 31) + this.dj6_1 | 0;
    result = imul(result, 31) + this.ej6_1 | 0;
    result = imul(result, 31) + this.fj6_1 | 0;
    result = imul(result, 31) + this.gj6_1 | 0;
    result = imul(result, 31) + this.hj6_1 | 0;
    result = imul(result, 31) + this.ij6_1 | 0;
    result = imul(result, 31) + this.jj6_1 | 0;
    result = imul(result, 31) + this.kj6_1 | 0;
    result = imul(result, 31) + this.lj6_1 | 0;
    result = imul(result, 31) + this.mj6_1 | 0;
    result = imul(result, 31) + this.nj6_1 | 0;
    result = imul(result, 31) + this.oj6_1 | 0;
    result = imul(result, 31) + this.pj6_1 | 0;
    result = imul(result, 31) + this.qj6_1 | 0;
    result = imul(result, 31) + this.rj6_1 | 0;
    result = imul(result, 31) + this.sj6_1 | 0;
    result = imul(result, 31) + this.tj6_1 | 0;
    result = imul(result, 31) + this.uj6_1 | 0;
    result = imul(result, 31) + this.vj6_1 | 0;
    return result;
  };
  protoOf(PupilEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilEntry))
      return false;
    var tmp0_other_with_cast = other instanceof PupilEntry ? other : THROW_CCE();
    if (!(this.kj4_1 === tmp0_other_with_cast.kj4_1))
      return false;
    if (!(this.lj4_1 === tmp0_other_with_cast.lj4_1))
      return false;
    if (!(this.mj4_1 === tmp0_other_with_cast.mj4_1))
      return false;
    if (!(this.nj4_1 === tmp0_other_with_cast.nj4_1))
      return false;
    if (!(this.oj4_1 === tmp0_other_with_cast.oj4_1))
      return false;
    if (!(this.pj4_1 === tmp0_other_with_cast.pj4_1))
      return false;
    if (!(this.qj4_1 === tmp0_other_with_cast.qj4_1))
      return false;
    if (!(this.rj4_1 === tmp0_other_with_cast.rj4_1))
      return false;
    if (!(this.sj4_1 === tmp0_other_with_cast.sj4_1))
      return false;
    if (!this.tj4_1.equals(tmp0_other_with_cast.tj4_1))
      return false;
    if (!(this.uj4_1 === tmp0_other_with_cast.uj4_1))
      return false;
    if (!(this.vj4_1 === tmp0_other_with_cast.vj4_1))
      return false;
    if (!(this.wj4_1 === tmp0_other_with_cast.wj4_1))
      return false;
    if (!(this.xj4_1 === tmp0_other_with_cast.xj4_1))
      return false;
    if (!(this.yj4_1 === tmp0_other_with_cast.yj4_1))
      return false;
    if (!(this.zj4_1 === tmp0_other_with_cast.zj4_1))
      return false;
    if (!equals(this.aj5_1, tmp0_other_with_cast.aj5_1))
      return false;
    if (!equals(this.bj5_1, tmp0_other_with_cast.bj5_1))
      return false;
    if (!equals(this.cj5_1, tmp0_other_with_cast.cj5_1))
      return false;
    if (!equals(this.dj5_1, tmp0_other_with_cast.dj5_1))
      return false;
    if (!equals(this.ej5_1, tmp0_other_with_cast.ej5_1))
      return false;
    if (!equals(this.fj5_1, tmp0_other_with_cast.fj5_1))
      return false;
    if (!(this.gj5_1 === tmp0_other_with_cast.gj5_1))
      return false;
    if (!(this.hj5_1 === tmp0_other_with_cast.hj5_1))
      return false;
    if (!(this.ij5_1 === tmp0_other_with_cast.ij5_1))
      return false;
    if (!(this.jj5_1 === tmp0_other_with_cast.jj5_1))
      return false;
    if (!(this.kj5_1 === tmp0_other_with_cast.kj5_1))
      return false;
    if (!(this.lj5_1 === tmp0_other_with_cast.lj5_1))
      return false;
    if (!(this.mj5_1 === tmp0_other_with_cast.mj5_1))
      return false;
    if (!(this.nj5_1 === tmp0_other_with_cast.nj5_1))
      return false;
    if (!(this.oj5_1 === tmp0_other_with_cast.oj5_1))
      return false;
    if (!(this.pj5_1 === tmp0_other_with_cast.pj5_1))
      return false;
    if (!(this.qj5_1 === tmp0_other_with_cast.qj5_1))
      return false;
    if (!(this.rj5_1 === tmp0_other_with_cast.rj5_1))
      return false;
    if (!(this.sj5_1 === tmp0_other_with_cast.sj5_1))
      return false;
    if (!(this.tj5_1 === tmp0_other_with_cast.tj5_1))
      return false;
    if (!(this.uj5_1 === tmp0_other_with_cast.uj5_1))
      return false;
    if (!(this.vj5_1 === tmp0_other_with_cast.vj5_1))
      return false;
    if (!(this.wj5_1 === tmp0_other_with_cast.wj5_1))
      return false;
    if (!(this.xj5_1 === tmp0_other_with_cast.xj5_1))
      return false;
    if (!(this.yj5_1 === tmp0_other_with_cast.yj5_1))
      return false;
    if (!(this.zj5_1 === tmp0_other_with_cast.zj5_1))
      return false;
    if (!(this.aj6_1 === tmp0_other_with_cast.aj6_1))
      return false;
    if (!(this.bj6_1 === tmp0_other_with_cast.bj6_1))
      return false;
    if (!(this.cj6_1 === tmp0_other_with_cast.cj6_1))
      return false;
    if (!(this.dj6_1 === tmp0_other_with_cast.dj6_1))
      return false;
    if (!(this.ej6_1 === tmp0_other_with_cast.ej6_1))
      return false;
    if (!(this.fj6_1 === tmp0_other_with_cast.fj6_1))
      return false;
    if (!(this.gj6_1 === tmp0_other_with_cast.gj6_1))
      return false;
    if (!(this.hj6_1 === tmp0_other_with_cast.hj6_1))
      return false;
    if (!(this.ij6_1 === tmp0_other_with_cast.ij6_1))
      return false;
    if (!(this.jj6_1 === tmp0_other_with_cast.jj6_1))
      return false;
    if (!(this.kj6_1 === tmp0_other_with_cast.kj6_1))
      return false;
    if (!(this.lj6_1 === tmp0_other_with_cast.lj6_1))
      return false;
    if (!(this.mj6_1 === tmp0_other_with_cast.mj6_1))
      return false;
    if (!(this.nj6_1 === tmp0_other_with_cast.nj6_1))
      return false;
    if (!(this.oj6_1 === tmp0_other_with_cast.oj6_1))
      return false;
    if (!(this.pj6_1 === tmp0_other_with_cast.pj6_1))
      return false;
    if (!(this.qj6_1 === tmp0_other_with_cast.qj6_1))
      return false;
    if (!(this.rj6_1 === tmp0_other_with_cast.rj6_1))
      return false;
    if (!(this.sj6_1 === tmp0_other_with_cast.sj6_1))
      return false;
    if (!(this.tj6_1 === tmp0_other_with_cast.tj6_1))
      return false;
    if (!(this.uj6_1 === tmp0_other_with_cast.uj6_1))
      return false;
    if (!(this.vj6_1 === tmp0_other_with_cast.vj6_1))
      return false;
    return true;
  };
  function UserRepository() {
  }
  var com_korchagin_data_repository_UserRepositotyImplementation$stable;
  function UserRepositotyImplementation$getUsers$slambda$slambda($this_channelFlow, resultContinuation) {
    this.gj7_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).jj7 = function (event, $completion) {
    var tmp = this.kj7(event, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).ha = function (p1, $completion) {
    return this.jj7(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.hj7_1.tf2_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.g();
            while (tmp0_iterator.h()) {
              var element = tmp0_iterator.i();
              var tmp_1;
              try {
                var tmp$ret$0 = Unit_instance;
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
                destination.e(tmp0_safe_receiver);
              }
            }

            tmp_0.ij7_1 = destination;
            this.n9_1 = 1;
            suspendResult = this.gj7_1.k1n(this.ij7_1, this);
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
        var e_2 = $p;
        if (this.o9_1 === 2) {
          throw e_2;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_2;
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).kj7 = function (event, completion) {
    var i = new UserRepositotyImplementation$getUsers$slambda$slambda(this.gj7_1, completion);
    i.hj7_1 = event;
    return i;
  };
  function UserRepositotyImplementation$getUsers$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUsers$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (event, $completion) {
      return i.jj7(event, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda$slambda$slambda($this_channelFlow, resultContinuation) {
    this.tj7_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).jj7 = function (snapshot, $completion) {
    var tmp = this.kj7(snapshot, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).ha = function (p1, $completion) {
    return this.jj7(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp0_safe_receiver = firstOrNull(this.uj7_1.tf2_1);
          var tmp_0;
          if (tmp0_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$0 = Unit_instance;
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
          println('Found user: ' + (user == null ? null : user.lj4_1));
          if (!(user == null)) {
            this.tj7_1.l1n(user);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e_1 = $p;
        throw e_1;
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).kj7 = function (snapshot, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda$slambda(this.tj7_1, completion);
    i.uj7_1 = snapshot;
    return i;
  };
  function UserRepositotyImplementation$getUserById$slambda$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (snapshot, $completion) {
      return i.jj7(snapshot, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda$slambda(this$0, $id, $this_channelFlow, resultContinuation) {
    this.dj8_1 = this$0;
    this.ej8_1 = $id;
    this.fj8_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).e1x = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp_0 = _get_database__ij7wz4(this.dj8_1).lf2('email').of2(this.ej8_1).mf2();
          launchIn(onEach(tmp_0, UserRepositotyImplementation$getUserById$slambda$slambda$slambda_0(this.fj8_1, null)), this.gj8_1);
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
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda(this.dj8_1, this.ej8_1, this.fj8_1, completion);
    i.gj8_1 = $this$coroutineScope;
    return i;
  };
  function UserRepositotyImplementation$getUserById$slambda$slambda_0(this$0, $id, $this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda(this$0, $id, $this_channelFlow, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.e1x($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_database__ij7wz4($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.hj8_1;
    database$factory();
    return this_0.w();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.ij8_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1r = function (value, $completion) {
    return this.ij8_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.ij8_1;
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
  function UserRepositotyImplementation$database$delegate$lambda() {
    return get_database(Firebase_instance).qf2('Pupils');
  }
  function UserRepositotyImplementation$getUsers$slambda(this$0, resultContinuation) {
    this.rj8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUsers$slambda).tj8 = function ($this$channelFlow, $completion) {
    var tmp = this.uj8($this$channelFlow, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda).ha = function (p1, $completion) {
    return this.tj8((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = _get_database__ij7wz4(this.rj8_1).mf2();
            var tmp_1 = UserRepositotyImplementation$getUsers$slambda$slambda_0(this.sj8_1, null);
            suspendResult = tmp_0.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(UserRepositotyImplementation$getUsers$slambda).uj8 = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getUsers$slambda(this.rj8_1, completion);
    i.sj8_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getUsers$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getUsers$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.tj8($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda(this$0, $id, resultContinuation) {
    this.dj9_1 = this$0;
    this.ej9_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda).gj9 = function ($this$channelFlow, $completion) {
    var tmp = this.hj9($this$channelFlow, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda).ha = function (p1, $completion) {
    return this.gj9((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = coroutineScope(UserRepositotyImplementation$getUserById$slambda$slambda_0(this.dj9_1, this.ej9_1, this.fj9_1, null), this);
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
  protoOf(UserRepositotyImplementation$getUserById$slambda).hj9 = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda(this.dj9_1, this.ej9_1, completion);
    i.fj9_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getUserById$slambda_0(this$0, $id, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda(this$0, $id, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.gj9($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation() {
    var tmp = this;
    tmp.hj8_1 = lazy(UserRepositotyImplementation$database$delegate$lambda);
  }
  protoOf(UserRepositotyImplementation).wj6 = function () {
    return channelFlow(UserRepositotyImplementation$getUsers$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).xj6 = function (id) {
    return channelFlow(UserRepositotyImplementation$getUserById$slambda_0(this, id, null));
  };
  function database$factory() {
    return getPropertyCallableRef('database', 1, KProperty1, function (receiver) {
      return _get_database__ij7wz4(receiver);
    }, null);
  }
  //region block: post-declaration
  protoOf($serializer).k4m = typeParametersSerializers;
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
  Companion_instance = new Companion();
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
