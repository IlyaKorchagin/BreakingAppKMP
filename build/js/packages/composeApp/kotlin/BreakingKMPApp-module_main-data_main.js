(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './projects-core-koin-core.js', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './firebase-kotlin-sdk-firebase-database.js', './firebase-kotlin-sdk-firebase-common-internal.js', './kotlinx-coroutines-core.js', './firebase-kotlin-sdk-firebase-app.js', './firebase-kotlin-sdk-firebase-storage.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./projects-core-koin-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./firebase-kotlin-sdk-firebase-database.js'), require('./firebase-kotlin-sdk-firebase-common-internal.js'), require('./kotlinx-coroutines-core.js'), require('./firebase-kotlin-sdk-firebase-app.js'), require('./firebase-kotlin-sdk-firebase-storage.js'));
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
    if (typeof globalThis['firebase-kotlin-sdk-firebase-storage'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-data_main'. Its dependency 'firebase-kotlin-sdk-firebase-storage' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-storage' is loaded prior to 'BreakingKMPApp-module_main-data_main'.");
    }
    globalThis['BreakingKMPApp-module_main-data_main'] = factory(typeof globalThis['BreakingKMPApp-module_main-data_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_main-data_main'], globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['firebase-kotlin-sdk-firebase-database'], globalThis['firebase-kotlin-sdk-firebase-common-internal'], globalThis['kotlinx-coroutines-core'], globalThis['firebase-kotlin-sdk-firebase-app'], globalThis['firebase-kotlin-sdk-firebase-storage']);
  }
}(function (_, kotlin_io_insert_koin_koin_core, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_dev_gitlive_firebase_database, kotlin_dev_gitlive_firebase_common_internal, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_dev_gitlive_firebase_app, kotlin_dev_gitlive_firebase_storage) {
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
  var bind = kotlin_io_insert_koin_koin_core.$_$.l;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Long = kotlin_kotlin.$_$.hk;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var throwArrayMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var DataSnapshot = kotlin_dev_gitlive_firebase_database.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var get_js = kotlin_dev_gitlive_firebase_database.$_$.c;
  var Builder = kotlin_dev_gitlive_firebase_common_internal.$_$.a;
  var buildDecodeSettings = kotlin_dev_gitlive_firebase_common_internal.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.dl;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.oe;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var decode = kotlin_dev_gitlive_firebase_common_internal.$_$.i;
  var DatabaseException_init_$Create$ = kotlin_dev_gitlive_firebase_database.$_$.d;
  var Exception = kotlin_kotlin.$_$.dk;
  var println = kotlin_kotlin.$_$.ad;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var firstOrNull = kotlin_kotlin.$_$.w8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var hashCode = kotlin_kotlin.$_$.xd;
  var Firebase_instance = kotlin_dev_gitlive_firebase_app.$_$.e;
  var get_database = kotlin_dev_gitlive_firebase_database.$_$.b;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var trim = kotlin_kotlin.$_$.nj;
  var toString = kotlin_kotlin.$_$.jf;
  var Builder_0 = kotlin_dev_gitlive_firebase_common_internal.$_$.b;
  var buildEncodeSettings = kotlin_dev_gitlive_firebase_common_internal.$_$.h;
  var FirebaseEncoder = kotlin_dev_gitlive_firebase_common_internal.$_$.c;
  var ValueWithSerializer = kotlin_dev_gitlive_firebase_common_internal.$_$.f;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.il;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.x3;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var FirebaseListSerializer = kotlin_dev_gitlive_firebase_common_internal.$_$.d;
  var KtSet = kotlin_kotlin.$_$.f7;
  var KtList = kotlin_kotlin.$_$.w6;
  var FirebaseMapSerializer = kotlin_dev_gitlive_firebase_common_internal.$_$.e;
  var KtMap = kotlin_kotlin.$_$.y6;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.a4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var replace = kotlin_kotlin.$_$.hi;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var lazy = kotlin_kotlin.$_$.ql;
  var get_storage = kotlin_dev_gitlive_firebase_storage.$_$.b;
  var channelFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var toByte = kotlin_kotlin.$_$.gf;
  var Data = kotlin_dev_gitlive_firebase_storage.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BboyEntry, 'BboyEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ElementEntry, 'ElementEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PupilEntry, 'PupilEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForInterface(UserRepository, 'UserRepository', VOID, VOID, VOID, [2]);
  initMetadataForLambda(UserRepositotyImplementation$getUsers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getFreezeElements$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getPowerElements$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getOfpElements$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getStretchElements$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getBboysList$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUsers$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getUserById$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getFreezeElements$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getPowerElements$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getOfpElements$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getStretchElements$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserRepositotyImplementation$getBboysList$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($createNewPupilCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($updateAvatarCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(UserRepositotyImplementation, 'UserRepositotyImplementation', UserRepositotyImplementation, VOID, [UserRepository], [2]);
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
    var scopeQualifier = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(UserRepositotyImplementation), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.ft(factory);
    if (false || $this$module.ys_1) {
      $this$module.it(factory);
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
  var com_korchagin_data_models_BboyEntry_$serializer$stable;
  var com_korchagin_data_models_BboyEntry$stable;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.korchagin.data.models.BboyEntry', this, 8);
    tmp0_serialDesc.k4s('name', false);
    tmp0_serialDesc.k4s('born', false);
    tmp0_serialDesc.k4s('rating', false);
    tmp0_serialDesc.k4s('avatar', false);
    tmp0_serialDesc.k4s('country', false);
    tmp0_serialDesc.k4s('video', false);
    tmp0_serialDesc.k4s('description', false);
    tmp0_serialDesc.k4s('shortdescription', false);
    this.pni_1 = tmp0_serialDesc;
  }
  protoOf($serializer).qni = function (encoder, value) {
    var tmp0_desc = this.pni_1;
    var tmp1_output = encoder.s4k(tmp0_desc);
    tmp1_output.q4l(tmp0_desc, 0, value.rni_1);
    tmp1_output.q4l(tmp0_desc, 1, value.sni_1);
    tmp1_output.q4l(tmp0_desc, 2, value.tni_1);
    tmp1_output.q4l(tmp0_desc, 3, value.uni_1);
    tmp1_output.q4l(tmp0_desc, 4, value.vni_1);
    tmp1_output.q4l(tmp0_desc, 5, value.wni_1);
    tmp1_output.q4l(tmp0_desc, 6, value.xni_1);
    tmp1_output.q4l(tmp0_desc, 7, value.yni_1);
    tmp1_output.t4k(tmp0_desc);
  };
  protoOf($serializer).n4i = function (encoder, value) {
    return this.qni(encoder, value instanceof BboyEntry ? value : THROW_CCE());
  };
  protoOf($serializer).o4i = function (decoder) {
    var tmp0_desc = this.pni_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.s4k(tmp0_desc);
    if (tmp12_input.n4m()) {
      tmp4_local0 = tmp12_input.y4m(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.y4m(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.y4m(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.y4m(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.y4m(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.y4m(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.y4m(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.y4m(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.o4m(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.y4m(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.y4m(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.y4m(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.y4m(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.y4m(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.y4m(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.y4m(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.y4m(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.t4k(tmp0_desc);
    return BboyEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer).m4i = function () {
    return this.pni_1;
  };
  protoOf($serializer).z4s = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function BboyEntry_init_$Init$(seen0, name, born, rating, avatar, country, video, description, shortDescription, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen0))) {
      throwMissingFieldException(seen0, 255, $serializer_getInstance().pni_1);
    }
    $this.rni_1 = name;
    $this.sni_1 = born;
    $this.tni_1 = rating;
    $this.uni_1 = avatar;
    $this.vni_1 = country;
    $this.wni_1 = video;
    $this.xni_1 = description;
    $this.yni_1 = shortDescription;
    return $this;
  }
  function BboyEntry_init_$Create$(seen0, name, born, rating, avatar, country, video, description, shortDescription, serializationConstructorMarker) {
    return BboyEntry_init_$Init$(seen0, name, born, rating, avatar, country, video, description, shortDescription, serializationConstructorMarker, objectCreate(protoOf(BboyEntry)));
  }
  function BboyEntry(name, born, rating, avatar, country, video, description, shortDescription) {
    this.rni_1 = name;
    this.sni_1 = born;
    this.tni_1 = rating;
    this.uni_1 = avatar;
    this.vni_1 = country;
    this.wni_1 = video;
    this.xni_1 = description;
    this.yni_1 = shortDescription;
  }
  protoOf(BboyEntry).toString = function () {
    return 'BboyEntry(name=' + this.rni_1 + ', born=' + this.sni_1 + ', rating=' + this.tni_1 + ', avatar=' + this.uni_1 + ', country=' + this.vni_1 + ', video=' + this.wni_1 + ', description=' + this.xni_1 + ', shortDescription=' + this.yni_1 + ')';
  };
  protoOf(BboyEntry).hashCode = function () {
    var result = getStringHashCode(this.rni_1);
    result = imul(result, 31) + getStringHashCode(this.sni_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.tni_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.uni_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.vni_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.wni_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xni_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.yni_1) | 0;
    return result;
  };
  protoOf(BboyEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BboyEntry))
      return false;
    var tmp0_other_with_cast = other instanceof BboyEntry ? other : THROW_CCE();
    if (!(this.rni_1 === tmp0_other_with_cast.rni_1))
      return false;
    if (!(this.sni_1 === tmp0_other_with_cast.sni_1))
      return false;
    if (!(this.tni_1 === tmp0_other_with_cast.tni_1))
      return false;
    if (!(this.uni_1 === tmp0_other_with_cast.uni_1))
      return false;
    if (!(this.vni_1 === tmp0_other_with_cast.vni_1))
      return false;
    if (!(this.wni_1 === tmp0_other_with_cast.wni_1))
      return false;
    if (!(this.xni_1 === tmp0_other_with_cast.xni_1))
      return false;
    if (!(this.yni_1 === tmp0_other_with_cast.yni_1))
      return false;
    return true;
  };
  var com_korchagin_data_models_ElementEntry_$serializer$stable;
  var com_korchagin_data_models_ElementEntry$stable;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.korchagin.data.models.ElementEntry', this, 15);
    tmp0_serialDesc.k4s('title', false);
    tmp0_serialDesc.k4s('image', false);
    tmp0_serialDesc.k4s('description', false);
    tmp0_serialDesc.k4s('blockDescription', false);
    tmp0_serialDesc.k4s('progress10', false);
    tmp0_serialDesc.k4s('progress20', false);
    tmp0_serialDesc.k4s('progress30', false);
    tmp0_serialDesc.k4s('progress40', false);
    tmp0_serialDesc.k4s('progress50', false);
    tmp0_serialDesc.k4s('progress60', false);
    tmp0_serialDesc.k4s('progress70', false);
    tmp0_serialDesc.k4s('progress80', false);
    tmp0_serialDesc.k4s('progress90', false);
    tmp0_serialDesc.k4s('progress100', false);
    tmp0_serialDesc.k4s('videoUrl', false);
    this.zni_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).anj = function (encoder, value) {
    var tmp0_desc = this.zni_1;
    var tmp1_output = encoder.s4k(tmp0_desc);
    tmp1_output.q4l(tmp0_desc, 0, value.bnj_1);
    tmp1_output.q4l(tmp0_desc, 1, value.cnj_1);
    tmp1_output.q4l(tmp0_desc, 2, value.dnj_1);
    tmp1_output.q4l(tmp0_desc, 3, value.enj_1);
    tmp1_output.q4l(tmp0_desc, 4, value.fnj_1);
    tmp1_output.q4l(tmp0_desc, 5, value.gnj_1);
    tmp1_output.q4l(tmp0_desc, 6, value.hnj_1);
    tmp1_output.q4l(tmp0_desc, 7, value.inj_1);
    tmp1_output.q4l(tmp0_desc, 8, value.jnj_1);
    tmp1_output.q4l(tmp0_desc, 9, value.knj_1);
    tmp1_output.q4l(tmp0_desc, 10, value.lnj_1);
    tmp1_output.q4l(tmp0_desc, 11, value.mnj_1);
    tmp1_output.q4l(tmp0_desc, 12, value.nnj_1);
    tmp1_output.q4l(tmp0_desc, 13, value.onj_1);
    tmp1_output.q4l(tmp0_desc, 14, value.pnj_1);
    tmp1_output.t4k(tmp0_desc);
  };
  protoOf($serializer_0).n4i = function (encoder, value) {
    return this.anj(encoder, value instanceof ElementEntry ? value : THROW_CCE());
  };
  protoOf($serializer_0).o4i = function (decoder) {
    var tmp0_desc = this.zni_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_input = decoder.s4k(tmp0_desc);
    if (tmp19_input.n4m()) {
      tmp4_local0 = tmp19_input.y4m(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp19_input.y4m(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp19_input.y4m(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp19_input.y4m(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp19_input.y4m(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp19_input.y4m(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp19_input.y4m(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp19_input.y4m(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp19_input.y4m(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp19_input.y4m(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp19_input.y4m(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp19_input.y4m(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp19_input.y4m(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp19_input.y4m(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp19_input.y4m(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp19_input.o4m(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp19_input.y4m(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp19_input.y4m(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp19_input.y4m(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp19_input.y4m(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp19_input.y4m(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp19_input.y4m(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp19_input.y4m(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp19_input.y4m(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp19_input.y4m(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp19_input.y4m(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp19_input.y4m(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp19_input.y4m(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp19_input.y4m(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp19_input.y4m(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp19_input.y4m(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp19_input.t4k(tmp0_desc);
    return ElementEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, null);
  };
  protoOf($serializer_0).m4i = function () {
    return this.zni_1;
  };
  protoOf($serializer_0).z4s = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function ElementEntry_init_$Init$(seen0, title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl, serializationConstructorMarker, $this) {
    if (!(32767 === (32767 & seen0))) {
      throwMissingFieldException(seen0, 32767, $serializer_getInstance_0().zni_1);
    }
    $this.bnj_1 = title;
    $this.cnj_1 = image;
    $this.dnj_1 = description;
    $this.enj_1 = blockDescription;
    $this.fnj_1 = progress10;
    $this.gnj_1 = progress20;
    $this.hnj_1 = progress30;
    $this.inj_1 = progress40;
    $this.jnj_1 = progress50;
    $this.knj_1 = progress60;
    $this.lnj_1 = progress70;
    $this.mnj_1 = progress80;
    $this.nnj_1 = progress90;
    $this.onj_1 = progress100;
    $this.pnj_1 = videoUrl;
    return $this;
  }
  function ElementEntry_init_$Create$(seen0, title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl, serializationConstructorMarker) {
    return ElementEntry_init_$Init$(seen0, title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl, serializationConstructorMarker, objectCreate(protoOf(ElementEntry)));
  }
  function ElementEntry(title, image, description, blockDescription, progress10, progress20, progress30, progress40, progress50, progress60, progress70, progress80, progress90, progress100, videoUrl) {
    this.bnj_1 = title;
    this.cnj_1 = image;
    this.dnj_1 = description;
    this.enj_1 = blockDescription;
    this.fnj_1 = progress10;
    this.gnj_1 = progress20;
    this.hnj_1 = progress30;
    this.inj_1 = progress40;
    this.jnj_1 = progress50;
    this.knj_1 = progress60;
    this.lnj_1 = progress70;
    this.mnj_1 = progress80;
    this.nnj_1 = progress90;
    this.onj_1 = progress100;
    this.pnj_1 = videoUrl;
  }
  protoOf(ElementEntry).toString = function () {
    return 'ElementEntry(title=' + this.bnj_1 + ', image=' + this.cnj_1 + ', description=' + this.dnj_1 + ', blockDescription=' + this.enj_1 + ', progress10=' + this.fnj_1 + ', progress20=' + this.gnj_1 + ', progress30=' + this.hnj_1 + ', progress40=' + this.inj_1 + ', progress50=' + this.jnj_1 + ', progress60=' + this.knj_1 + ', progress70=' + this.lnj_1 + ', progress80=' + this.mnj_1 + ', progress90=' + this.nnj_1 + ', progress100=' + this.onj_1 + ', videoUrl=' + this.pnj_1 + ')';
  };
  protoOf(ElementEntry).hashCode = function () {
    var result = getStringHashCode(this.bnj_1);
    result = imul(result, 31) + getStringHashCode(this.cnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.dnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.enj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.fnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.gnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.hnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.inj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.jnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.knj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.lnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.nnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.onj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pnj_1) | 0;
    return result;
  };
  protoOf(ElementEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementEntry))
      return false;
    var tmp0_other_with_cast = other instanceof ElementEntry ? other : THROW_CCE();
    if (!(this.bnj_1 === tmp0_other_with_cast.bnj_1))
      return false;
    if (!(this.cnj_1 === tmp0_other_with_cast.cnj_1))
      return false;
    if (!(this.dnj_1 === tmp0_other_with_cast.dnj_1))
      return false;
    if (!(this.enj_1 === tmp0_other_with_cast.enj_1))
      return false;
    if (!(this.fnj_1 === tmp0_other_with_cast.fnj_1))
      return false;
    if (!(this.gnj_1 === tmp0_other_with_cast.gnj_1))
      return false;
    if (!(this.hnj_1 === tmp0_other_with_cast.hnj_1))
      return false;
    if (!(this.inj_1 === tmp0_other_with_cast.inj_1))
      return false;
    if (!(this.jnj_1 === tmp0_other_with_cast.jnj_1))
      return false;
    if (!(this.knj_1 === tmp0_other_with_cast.knj_1))
      return false;
    if (!(this.lnj_1 === tmp0_other_with_cast.lnj_1))
      return false;
    if (!(this.mnj_1 === tmp0_other_with_cast.mnj_1))
      return false;
    if (!(this.nnj_1 === tmp0_other_with_cast.nnj_1))
      return false;
    if (!(this.onj_1 === tmp0_other_with_cast.onj_1))
      return false;
    if (!(this.pnj_1 === tmp0_other_with_cast.pnj_1))
      return false;
    return true;
  };
  var com_korchagin_data_models_PupilEntry_$serializer$stable;
  var com_korchagin_data_models_PupilEntry$stable;
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.korchagin.data.models.PupilEntry', this, 64);
    tmp0_serialDesc.k4s('id', false);
    tmp0_serialDesc.k4s('name', false);
    tmp0_serialDesc.k4s('email', false);
    tmp0_serialDesc.k4s('avatar', false);
    tmp0_serialDesc.k4s('born', false);
    tmp0_serialDesc.k4s('country', false);
    tmp0_serialDesc.k4s('city', false);
    tmp0_serialDesc.k4s('video', false);
    tmp0_serialDesc.k4s('status', false);
    tmp0_serialDesc.k4s('subscription', false);
    tmp0_serialDesc.k4s('subscriptionDay', false);
    tmp0_serialDesc.k4s('subscriptionMonth', false);
    tmp0_serialDesc.k4s('subscriptionYear', false);
    tmp0_serialDesc.k4s('currentTask', false);
    tmp0_serialDesc.k4s('currentTaskProgress', false);
    tmp0_serialDesc.k4s('roundsList', false);
    tmp0_serialDesc.k4s('rating', false);
    tmp0_serialDesc.k4s('freeze_rating', false);
    tmp0_serialDesc.k4s('powermove_rating', false);
    tmp0_serialDesc.k4s('ofp_rating', false);
    tmp0_serialDesc.k4s('streching_rating', false);
    tmp0_serialDesc.k4s('battle_rating', false);
    tmp0_serialDesc.k4s('battle_cur_position', false);
    tmp0_serialDesc.k4s('battle_new_position', false);
    tmp0_serialDesc.k4s('new_position', false);
    tmp0_serialDesc.k4s('current_position', false);
    tmp0_serialDesc.k4s('babyfrezze', false);
    tmp0_serialDesc.k4s('chairfrezze', false);
    tmp0_serialDesc.k4s('elbowfrezze', false);
    tmp0_serialDesc.k4s('headfrezze', false);
    tmp0_serialDesc.k4s('headhollowbackfrezze', false);
    tmp0_serialDesc.k4s('hollowbackfrezze', false);
    tmp0_serialDesc.k4s('invertfrezze', false);
    tmp0_serialDesc.k4s('onehandfrezze', false);
    tmp0_serialDesc.k4s('shoulderfrezze', false);
    tmp0_serialDesc.k4s('turtlefrezze', false);
    tmp0_serialDesc.k4s('airflare', false);
    tmp0_serialDesc.k4s('backspin', false);
    tmp0_serialDesc.k4s('cricket', false);
    tmp0_serialDesc.k4s('elbowairflare', false);
    tmp0_serialDesc.k4s('flare', false);
    tmp0_serialDesc.k4s('jackhammer', false);
    tmp0_serialDesc.k4s('halo', false);
    tmp0_serialDesc.k4s('headspin', false);
    tmp0_serialDesc.k4s('munchmill', false);
    tmp0_serialDesc.k4s('ninety_nine', false);
    tmp0_serialDesc.k4s('swipes', false);
    tmp0_serialDesc.k4s('turtle', false);
    tmp0_serialDesc.k4s('ufo', false);
    tmp0_serialDesc.k4s('web', false);
    tmp0_serialDesc.k4s('windmill', false);
    tmp0_serialDesc.k4s('wolf', false);
    tmp0_serialDesc.k4s('angle', false);
    tmp0_serialDesc.k4s('bridge', false);
    tmp0_serialDesc.k4s('finger', false);
    tmp0_serialDesc.k4s('handstand', false);
    tmp0_serialDesc.k4s('horizont', false);
    tmp0_serialDesc.k4s('pushups', false);
    tmp0_serialDesc.k4s('sit_ups', false);
    tmp0_serialDesc.k4s('press_up_handstand', false);
    tmp0_serialDesc.k4s('butterfly', false);
    tmp0_serialDesc.k4s('fold', false);
    tmp0_serialDesc.k4s('shoulders', false);
    tmp0_serialDesc.k4s('twine', false);
    this.qnj_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).rnj = function (encoder, value) {
    var tmp0_desc = this.qnj_1;
    var tmp1_output = encoder.s4k(tmp0_desc);
    tmp1_output.q4l(tmp0_desc, 0, value.snj_1);
    tmp1_output.q4l(tmp0_desc, 1, value.tnj_1);
    tmp1_output.q4l(tmp0_desc, 2, value.unj_1);
    tmp1_output.q4l(tmp0_desc, 3, value.vnj_1);
    tmp1_output.q4l(tmp0_desc, 4, value.wnj_1);
    tmp1_output.q4l(tmp0_desc, 5, value.xnj_1);
    tmp1_output.q4l(tmp0_desc, 6, value.ynj_1);
    tmp1_output.q4l(tmp0_desc, 7, value.znj_1);
    tmp1_output.l4l(tmp0_desc, 8, value.ank_1);
    tmp1_output.m4l(tmp0_desc, 9, value.bnk_1);
    tmp1_output.l4l(tmp0_desc, 10, value.cnk_1);
    tmp1_output.l4l(tmp0_desc, 11, value.dnk_1);
    tmp1_output.l4l(tmp0_desc, 12, value.enk_1);
    tmp1_output.q4l(tmp0_desc, 13, value.fnk_1);
    tmp1_output.l4l(tmp0_desc, 14, value.gnk_1);
    tmp1_output.q4l(tmp0_desc, 15, value.hnk_1);
    tmp1_output.o4l(tmp0_desc, 16, value.ink_1);
    tmp1_output.o4l(tmp0_desc, 17, value.jnk_1);
    tmp1_output.o4l(tmp0_desc, 18, value.knk_1);
    tmp1_output.o4l(tmp0_desc, 19, value.lnk_1);
    tmp1_output.o4l(tmp0_desc, 20, value.mnk_1);
    tmp1_output.o4l(tmp0_desc, 21, value.nnk_1);
    tmp1_output.l4l(tmp0_desc, 22, value.onk_1);
    tmp1_output.l4l(tmp0_desc, 23, value.pnk_1);
    tmp1_output.l4l(tmp0_desc, 24, value.qnk_1);
    tmp1_output.l4l(tmp0_desc, 25, value.rnk_1);
    tmp1_output.l4l(tmp0_desc, 26, value.snk_1);
    tmp1_output.l4l(tmp0_desc, 27, value.tnk_1);
    tmp1_output.l4l(tmp0_desc, 28, value.unk_1);
    tmp1_output.l4l(tmp0_desc, 29, value.vnk_1);
    tmp1_output.l4l(tmp0_desc, 30, value.wnk_1);
    tmp1_output.l4l(tmp0_desc, 31, value.xnk_1);
    tmp1_output.l4l(tmp0_desc, 32, value.ynk_1);
    tmp1_output.l4l(tmp0_desc, 33, value.znk_1);
    tmp1_output.l4l(tmp0_desc, 34, value.anl_1);
    tmp1_output.l4l(tmp0_desc, 35, value.bnl_1);
    tmp1_output.l4l(tmp0_desc, 36, value.cnl_1);
    tmp1_output.l4l(tmp0_desc, 37, value.dnl_1);
    tmp1_output.l4l(tmp0_desc, 38, value.enl_1);
    tmp1_output.l4l(tmp0_desc, 39, value.fnl_1);
    tmp1_output.l4l(tmp0_desc, 40, value.gnl_1);
    tmp1_output.l4l(tmp0_desc, 41, value.hnl_1);
    tmp1_output.l4l(tmp0_desc, 42, value.inl_1);
    tmp1_output.l4l(tmp0_desc, 43, value.jnl_1);
    tmp1_output.l4l(tmp0_desc, 44, value.knl_1);
    tmp1_output.l4l(tmp0_desc, 45, value.lnl_1);
    tmp1_output.l4l(tmp0_desc, 46, value.mnl_1);
    tmp1_output.l4l(tmp0_desc, 47, value.nnl_1);
    tmp1_output.l4l(tmp0_desc, 48, value.onl_1);
    tmp1_output.l4l(tmp0_desc, 49, value.pnl_1);
    tmp1_output.l4l(tmp0_desc, 50, value.qnl_1);
    tmp1_output.l4l(tmp0_desc, 51, value.rnl_1);
    tmp1_output.l4l(tmp0_desc, 52, value.snl_1);
    tmp1_output.l4l(tmp0_desc, 53, value.tnl_1);
    tmp1_output.l4l(tmp0_desc, 54, value.unl_1);
    tmp1_output.l4l(tmp0_desc, 55, value.vnl_1);
    tmp1_output.l4l(tmp0_desc, 56, value.wnl_1);
    tmp1_output.l4l(tmp0_desc, 57, value.xnl_1);
    tmp1_output.l4l(tmp0_desc, 58, value.ynl_1);
    tmp1_output.l4l(tmp0_desc, 59, value.znl_1);
    tmp1_output.l4l(tmp0_desc, 60, value.anm_1);
    tmp1_output.l4l(tmp0_desc, 61, value.bnm_1);
    tmp1_output.l4l(tmp0_desc, 62, value.cnm_1);
    tmp1_output.l4l(tmp0_desc, 63, value.dnm_1);
    tmp1_output.t4k(tmp0_desc);
  };
  protoOf($serializer_1).n4i = function (encoder, value) {
    return this.rnj(encoder, value instanceof PupilEntry ? value : THROW_CCE());
  };
  protoOf($serializer_1).o4i = function (decoder) {
    var tmp0_desc = this.qnj_1;
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
    var tmp70_input = decoder.s4k(tmp0_desc);
    if (tmp70_input.n4m()) {
      tmp6_local0 = tmp70_input.y4m(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp7_local1 = tmp70_input.y4m(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp8_local2 = tmp70_input.y4m(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp9_local3 = tmp70_input.y4m(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp10_local4 = tmp70_input.y4m(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp11_local5 = tmp70_input.y4m(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp12_local6 = tmp70_input.y4m(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp13_local7 = tmp70_input.y4m(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp14_local8 = tmp70_input.u4m(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp15_local9 = tmp70_input.v4m(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp16_local10 = tmp70_input.u4m(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp17_local11 = tmp70_input.u4m(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp18_local12 = tmp70_input.u4m(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp19_local13 = tmp70_input.y4m(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp20_local14 = tmp70_input.u4m(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp21_local15 = tmp70_input.y4m(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp22_local16 = tmp70_input.x4m(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp23_local17 = tmp70_input.x4m(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp24_local18 = tmp70_input.x4m(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp25_local19 = tmp70_input.x4m(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp26_local20 = tmp70_input.x4m(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp27_local21 = tmp70_input.x4m(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp28_local22 = tmp70_input.u4m(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp29_local23 = tmp70_input.u4m(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp30_local24 = tmp70_input.u4m(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp31_local25 = tmp70_input.u4m(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp32_local26 = tmp70_input.u4m(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp33_local27 = tmp70_input.u4m(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp34_local28 = tmp70_input.u4m(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp35_local29 = tmp70_input.u4m(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp36_local30 = tmp70_input.u4m(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp37_local31 = tmp70_input.u4m(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp38_local32 = tmp70_input.u4m(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp39_local33 = tmp70_input.u4m(tmp0_desc, 33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp40_local34 = tmp70_input.u4m(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp41_local35 = tmp70_input.u4m(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp42_local36 = tmp70_input.u4m(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp43_local37 = tmp70_input.u4m(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp44_local38 = tmp70_input.u4m(tmp0_desc, 38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp45_local39 = tmp70_input.u4m(tmp0_desc, 39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp46_local40 = tmp70_input.u4m(tmp0_desc, 40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp47_local41 = tmp70_input.u4m(tmp0_desc, 41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp48_local42 = tmp70_input.u4m(tmp0_desc, 42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp49_local43 = tmp70_input.u4m(tmp0_desc, 43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp50_local44 = tmp70_input.u4m(tmp0_desc, 44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp51_local45 = tmp70_input.u4m(tmp0_desc, 45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
      tmp52_local46 = tmp70_input.u4m(tmp0_desc, 46);
      tmp4_bitMask1 = tmp4_bitMask1 | 16384;
      tmp53_local47 = tmp70_input.u4m(tmp0_desc, 47);
      tmp4_bitMask1 = tmp4_bitMask1 | 32768;
      tmp54_local48 = tmp70_input.u4m(tmp0_desc, 48);
      tmp4_bitMask1 = tmp4_bitMask1 | 65536;
      tmp55_local49 = tmp70_input.u4m(tmp0_desc, 49);
      tmp4_bitMask1 = tmp4_bitMask1 | 131072;
      tmp56_local50 = tmp70_input.u4m(tmp0_desc, 50);
      tmp4_bitMask1 = tmp4_bitMask1 | 262144;
      tmp57_local51 = tmp70_input.u4m(tmp0_desc, 51);
      tmp4_bitMask1 = tmp4_bitMask1 | 524288;
      tmp58_local52 = tmp70_input.u4m(tmp0_desc, 52);
      tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
      tmp59_local53 = tmp70_input.u4m(tmp0_desc, 53);
      tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
      tmp60_local54 = tmp70_input.u4m(tmp0_desc, 54);
      tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
      tmp61_local55 = tmp70_input.u4m(tmp0_desc, 55);
      tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
      tmp62_local56 = tmp70_input.u4m(tmp0_desc, 56);
      tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
      tmp63_local57 = tmp70_input.u4m(tmp0_desc, 57);
      tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
      tmp64_local58 = tmp70_input.u4m(tmp0_desc, 58);
      tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
      tmp65_local59 = tmp70_input.u4m(tmp0_desc, 59);
      tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
      tmp66_local60 = tmp70_input.u4m(tmp0_desc, 60);
      tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
      tmp67_local61 = tmp70_input.u4m(tmp0_desc, 61);
      tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
      tmp68_local62 = tmp70_input.u4m(tmp0_desc, 62);
      tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
      tmp69_local63 = tmp70_input.u4m(tmp0_desc, 63);
      tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp70_input.o4m(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp6_local0 = tmp70_input.y4m(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp7_local1 = tmp70_input.y4m(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp8_local2 = tmp70_input.y4m(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp9_local3 = tmp70_input.y4m(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp10_local4 = tmp70_input.y4m(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp11_local5 = tmp70_input.y4m(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp12_local6 = tmp70_input.y4m(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp13_local7 = tmp70_input.y4m(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp14_local8 = tmp70_input.u4m(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp15_local9 = tmp70_input.v4m(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp16_local10 = tmp70_input.u4m(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp17_local11 = tmp70_input.u4m(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp18_local12 = tmp70_input.u4m(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp19_local13 = tmp70_input.y4m(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp20_local14 = tmp70_input.u4m(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp21_local15 = tmp70_input.y4m(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp22_local16 = tmp70_input.x4m(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp23_local17 = tmp70_input.x4m(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp24_local18 = tmp70_input.x4m(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp25_local19 = tmp70_input.x4m(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp26_local20 = tmp70_input.x4m(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp27_local21 = tmp70_input.x4m(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp28_local22 = tmp70_input.u4m(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp29_local23 = tmp70_input.u4m(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp30_local24 = tmp70_input.u4m(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp31_local25 = tmp70_input.u4m(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp32_local26 = tmp70_input.u4m(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp33_local27 = tmp70_input.u4m(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp34_local28 = tmp70_input.u4m(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp35_local29 = tmp70_input.u4m(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp36_local30 = tmp70_input.u4m(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp37_local31 = tmp70_input.u4m(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp38_local32 = tmp70_input.u4m(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp39_local33 = tmp70_input.u4m(tmp0_desc, 33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp40_local34 = tmp70_input.u4m(tmp0_desc, 34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp41_local35 = tmp70_input.u4m(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp42_local36 = tmp70_input.u4m(tmp0_desc, 36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp43_local37 = tmp70_input.u4m(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp44_local38 = tmp70_input.u4m(tmp0_desc, 38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp45_local39 = tmp70_input.u4m(tmp0_desc, 39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp46_local40 = tmp70_input.u4m(tmp0_desc, 40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp47_local41 = tmp70_input.u4m(tmp0_desc, 41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp48_local42 = tmp70_input.u4m(tmp0_desc, 42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp49_local43 = tmp70_input.u4m(tmp0_desc, 43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp50_local44 = tmp70_input.u4m(tmp0_desc, 44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          case 45:
            tmp51_local45 = tmp70_input.u4m(tmp0_desc, 45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          case 46:
            tmp52_local46 = tmp70_input.u4m(tmp0_desc, 46);
            tmp4_bitMask1 = tmp4_bitMask1 | 16384;
            break;
          case 47:
            tmp53_local47 = tmp70_input.u4m(tmp0_desc, 47);
            tmp4_bitMask1 = tmp4_bitMask1 | 32768;
            break;
          case 48:
            tmp54_local48 = tmp70_input.u4m(tmp0_desc, 48);
            tmp4_bitMask1 = tmp4_bitMask1 | 65536;
            break;
          case 49:
            tmp55_local49 = tmp70_input.u4m(tmp0_desc, 49);
            tmp4_bitMask1 = tmp4_bitMask1 | 131072;
            break;
          case 50:
            tmp56_local50 = tmp70_input.u4m(tmp0_desc, 50);
            tmp4_bitMask1 = tmp4_bitMask1 | 262144;
            break;
          case 51:
            tmp57_local51 = tmp70_input.u4m(tmp0_desc, 51);
            tmp4_bitMask1 = tmp4_bitMask1 | 524288;
            break;
          case 52:
            tmp58_local52 = tmp70_input.u4m(tmp0_desc, 52);
            tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
            break;
          case 53:
            tmp59_local53 = tmp70_input.u4m(tmp0_desc, 53);
            tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
            break;
          case 54:
            tmp60_local54 = tmp70_input.u4m(tmp0_desc, 54);
            tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
            break;
          case 55:
            tmp61_local55 = tmp70_input.u4m(tmp0_desc, 55);
            tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
            break;
          case 56:
            tmp62_local56 = tmp70_input.u4m(tmp0_desc, 56);
            tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
            break;
          case 57:
            tmp63_local57 = tmp70_input.u4m(tmp0_desc, 57);
            tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
            break;
          case 58:
            tmp64_local58 = tmp70_input.u4m(tmp0_desc, 58);
            tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
            break;
          case 59:
            tmp65_local59 = tmp70_input.u4m(tmp0_desc, 59);
            tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
            break;
          case 60:
            tmp66_local60 = tmp70_input.u4m(tmp0_desc, 60);
            tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
            break;
          case 61:
            tmp67_local61 = tmp70_input.u4m(tmp0_desc, 61);
            tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
            break;
          case 62:
            tmp68_local62 = tmp70_input.u4m(tmp0_desc, 62);
            tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
            break;
          case 63:
            tmp69_local63 = tmp70_input.u4m(tmp0_desc, 63);
            tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp70_input.t4k(tmp0_desc);
    return PupilEntry_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, 0, tmp6_local0, tmp7_local1, tmp8_local2, tmp9_local3, tmp10_local4, tmp11_local5, tmp12_local6, tmp13_local7, tmp14_local8, tmp15_local9, tmp16_local10, tmp17_local11, tmp18_local12, tmp19_local13, tmp20_local14, tmp21_local15, tmp22_local16, tmp23_local17, tmp24_local18, tmp25_local19, tmp26_local20, tmp27_local21, tmp28_local22, tmp29_local23, tmp30_local24, tmp31_local25, tmp32_local26, tmp33_local27, tmp34_local28, tmp35_local29, tmp36_local30, tmp37_local31, tmp38_local32, tmp39_local33, tmp40_local34, tmp41_local35, tmp42_local36, tmp43_local37, tmp44_local38, tmp45_local39, tmp46_local40, tmp47_local41, tmp48_local42, tmp49_local43, tmp50_local44, tmp51_local45, tmp52_local46, tmp53_local47, tmp54_local48, tmp55_local49, tmp56_local50, tmp57_local51, tmp58_local52, tmp59_local53, tmp60_local54, tmp61_local55, tmp62_local56, tmp63_local57, tmp64_local58, tmp65_local59, tmp66_local60, tmp67_local61, tmp68_local62, tmp69_local63, null);
  };
  protoOf($serializer_1).m4i = function () {
    return this.qnj_1;
  };
  protoOf($serializer_1).z4s = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), LongSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function PupilEntry_init_$Init$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker, $this) {
    if (!!(!!(!(-1 === (-1 & seen0)) | !(-1 === (-1 & seen1))) | !(0 === (0 & seen2)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1, seen2]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, -1, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_1().qnj_1);
    }
    $this.snj_1 = id;
    $this.tnj_1 = name;
    $this.unj_1 = email;
    $this.vnj_1 = avatar;
    $this.wnj_1 = born;
    $this.xnj_1 = country;
    $this.ynj_1 = city;
    $this.znj_1 = video;
    $this.ank_1 = status;
    $this.bnk_1 = subscription;
    $this.cnk_1 = subscriptionDay;
    $this.dnk_1 = subscriptionMonth;
    $this.enk_1 = subscriptionYear;
    $this.fnk_1 = currentTask;
    $this.gnk_1 = currentTaskProgress;
    $this.hnk_1 = roundsList;
    $this.ink_1 = rating;
    $this.jnk_1 = freeze_rating;
    $this.knk_1 = powermove_rating;
    $this.lnk_1 = ofp_rating;
    $this.mnk_1 = streching_rating;
    $this.nnk_1 = battle_rating;
    $this.onk_1 = battle_cur_position;
    $this.pnk_1 = battle_new_position;
    $this.qnk_1 = new_position;
    $this.rnk_1 = current_position;
    $this.snk_1 = babyfrezze;
    $this.tnk_1 = chairfrezze;
    $this.unk_1 = elbowfrezze;
    $this.vnk_1 = headfrezze;
    $this.wnk_1 = headhollowbackfrezze;
    $this.xnk_1 = hollowbackfrezze;
    $this.ynk_1 = invertfrezze;
    $this.znk_1 = onehandfrezze;
    $this.anl_1 = shoulderfrezze;
    $this.bnl_1 = turtlefrezze;
    $this.cnl_1 = airflare;
    $this.dnl_1 = backspin;
    $this.enl_1 = cricket;
    $this.fnl_1 = elbowairflare;
    $this.gnl_1 = flare;
    $this.hnl_1 = jackhammer;
    $this.inl_1 = halo;
    $this.jnl_1 = headspin;
    $this.knl_1 = munchmill;
    $this.lnl_1 = ninety_nine;
    $this.mnl_1 = swipes;
    $this.nnl_1 = turtle;
    $this.onl_1 = ufo;
    $this.pnl_1 = web;
    $this.qnl_1 = windmill;
    $this.rnl_1 = wolf;
    $this.snl_1 = angle;
    $this.tnl_1 = bridge;
    $this.unl_1 = finger;
    $this.vnl_1 = handstand;
    $this.wnl_1 = horizont;
    $this.xnl_1 = pushups;
    $this.ynl_1 = sit_ups;
    $this.znl_1 = press_up_handstand;
    $this.anm_1 = butterfly;
    $this.bnm_1 = fold;
    $this.cnm_1 = shoulders;
    $this.dnm_1 = twine;
    return $this;
  }
  function PupilEntry_init_$Create$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker) {
    return PupilEntry_init_$Init$(seen0, seen1, seen2, id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine, serializationConstructorMarker, objectCreate(protoOf(PupilEntry)));
  }
  function PupilEntry(id, name, email, avatar, born, country, city, video, status, subscription, subscriptionDay, subscriptionMonth, subscriptionYear, currentTask, currentTaskProgress, roundsList, rating, freeze_rating, powermove_rating, ofp_rating, streching_rating, battle_rating, battle_cur_position, battle_new_position, new_position, current_position, babyfrezze, chairfrezze, elbowfrezze, headfrezze, headhollowbackfrezze, hollowbackfrezze, invertfrezze, onehandfrezze, shoulderfrezze, turtlefrezze, airflare, backspin, cricket, elbowairflare, flare, jackhammer, halo, headspin, munchmill, ninety_nine, swipes, turtle, ufo, web, windmill, wolf, angle, bridge, finger, handstand, horizont, pushups, sit_ups, press_up_handstand, butterfly, fold, shoulders, twine) {
    this.snj_1 = id;
    this.tnj_1 = name;
    this.unj_1 = email;
    this.vnj_1 = avatar;
    this.wnj_1 = born;
    this.xnj_1 = country;
    this.ynj_1 = city;
    this.znj_1 = video;
    this.ank_1 = status;
    this.bnk_1 = subscription;
    this.cnk_1 = subscriptionDay;
    this.dnk_1 = subscriptionMonth;
    this.enk_1 = subscriptionYear;
    this.fnk_1 = currentTask;
    this.gnk_1 = currentTaskProgress;
    this.hnk_1 = roundsList;
    this.ink_1 = rating;
    this.jnk_1 = freeze_rating;
    this.knk_1 = powermove_rating;
    this.lnk_1 = ofp_rating;
    this.mnk_1 = streching_rating;
    this.nnk_1 = battle_rating;
    this.onk_1 = battle_cur_position;
    this.pnk_1 = battle_new_position;
    this.qnk_1 = new_position;
    this.rnk_1 = current_position;
    this.snk_1 = babyfrezze;
    this.tnk_1 = chairfrezze;
    this.unk_1 = elbowfrezze;
    this.vnk_1 = headfrezze;
    this.wnk_1 = headhollowbackfrezze;
    this.xnk_1 = hollowbackfrezze;
    this.ynk_1 = invertfrezze;
    this.znk_1 = onehandfrezze;
    this.anl_1 = shoulderfrezze;
    this.bnl_1 = turtlefrezze;
    this.cnl_1 = airflare;
    this.dnl_1 = backspin;
    this.enl_1 = cricket;
    this.fnl_1 = elbowairflare;
    this.gnl_1 = flare;
    this.hnl_1 = jackhammer;
    this.inl_1 = halo;
    this.jnl_1 = headspin;
    this.knl_1 = munchmill;
    this.lnl_1 = ninety_nine;
    this.mnl_1 = swipes;
    this.nnl_1 = turtle;
    this.onl_1 = ufo;
    this.pnl_1 = web;
    this.qnl_1 = windmill;
    this.rnl_1 = wolf;
    this.snl_1 = angle;
    this.tnl_1 = bridge;
    this.unl_1 = finger;
    this.vnl_1 = handstand;
    this.wnl_1 = horizont;
    this.xnl_1 = pushups;
    this.ynl_1 = sit_ups;
    this.znl_1 = press_up_handstand;
    this.anm_1 = butterfly;
    this.bnm_1 = fold;
    this.cnm_1 = shoulders;
    this.dnm_1 = twine;
  }
  protoOf(PupilEntry).toString = function () {
    return 'PupilEntry(id=' + this.snj_1 + ', name=' + this.tnj_1 + ', email=' + this.unj_1 + ', avatar=' + this.vnj_1 + ', born=' + this.wnj_1 + ', country=' + this.xnj_1 + ', city=' + this.ynj_1 + ', video=' + this.znj_1 + ', status=' + this.ank_1 + ', subscription=' + this.bnk_1.toString() + ', subscriptionDay=' + this.cnk_1 + ', subscriptionMonth=' + this.dnk_1 + ', subscriptionYear=' + this.enk_1 + ', currentTask=' + this.fnk_1 + ', currentTaskProgress=' + this.gnk_1 + ', roundsList=' + this.hnk_1 + ', rating=' + this.ink_1 + ', freeze_rating=' + this.jnk_1 + ', powermove_rating=' + this.knk_1 + ', ofp_rating=' + this.lnk_1 + ', streching_rating=' + this.mnk_1 + ', battle_rating=' + this.nnk_1 + ', battle_cur_position=' + this.onk_1 + ', battle_new_position=' + this.pnk_1 + ', new_position=' + this.qnk_1 + ', current_position=' + this.rnk_1 + ', babyfrezze=' + this.snk_1 + ', chairfrezze=' + this.tnk_1 + ', elbowfrezze=' + this.unk_1 + ', headfrezze=' + this.vnk_1 + ', headhollowbackfrezze=' + this.wnk_1 + ', hollowbackfrezze=' + this.xnk_1 + ', invertfrezze=' + this.ynk_1 + ', onehandfrezze=' + this.znk_1 + ', shoulderfrezze=' + this.anl_1 + ', turtlefrezze=' + this.bnl_1 + ', airflare=' + this.cnl_1 + ', backspin=' + this.dnl_1 + ', cricket=' + this.enl_1 + ', elbowairflare=' + this.fnl_1 + ', flare=' + this.gnl_1 + ', jackhammer=' + this.hnl_1 + ', halo=' + this.inl_1 + ', headspin=' + this.jnl_1 + ', munchmill=' + this.knl_1 + ', ninety_nine=' + this.lnl_1 + ', swipes=' + this.mnl_1 + ', turtle=' + this.nnl_1 + ', ufo=' + this.onl_1 + ', web=' + this.pnl_1 + ', windmill=' + this.qnl_1 + ', wolf=' + this.rnl_1 + ', angle=' + this.snl_1 + ', bridge=' + this.tnl_1 + ', finger=' + this.unl_1 + ', handstand=' + this.vnl_1 + ', horizont=' + this.wnl_1 + ', pushups=' + this.xnl_1 + ', sit_ups=' + this.ynl_1 + ', press_up_handstand=' + this.znl_1 + ', butterfly=' + this.anm_1 + ', fold=' + this.bnm_1 + ', shoulders=' + this.cnm_1 + ', twine=' + this.dnm_1 + ')';
  };
  protoOf(PupilEntry).hashCode = function () {
    var result = getStringHashCode(this.snj_1);
    result = imul(result, 31) + getStringHashCode(this.tnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.unj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.vnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.wnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xnj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ynj_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.znj_1) | 0;
    result = imul(result, 31) + this.ank_1 | 0;
    result = imul(result, 31) + this.bnk_1.hashCode() | 0;
    result = imul(result, 31) + this.cnk_1 | 0;
    result = imul(result, 31) + this.dnk_1 | 0;
    result = imul(result, 31) + this.enk_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.fnk_1) | 0;
    result = imul(result, 31) + this.gnk_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.hnk_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ink_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.jnk_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.knk_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.lnk_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.mnk_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.nnk_1) | 0;
    result = imul(result, 31) + this.onk_1 | 0;
    result = imul(result, 31) + this.pnk_1 | 0;
    result = imul(result, 31) + this.qnk_1 | 0;
    result = imul(result, 31) + this.rnk_1 | 0;
    result = imul(result, 31) + this.snk_1 | 0;
    result = imul(result, 31) + this.tnk_1 | 0;
    result = imul(result, 31) + this.unk_1 | 0;
    result = imul(result, 31) + this.vnk_1 | 0;
    result = imul(result, 31) + this.wnk_1 | 0;
    result = imul(result, 31) + this.xnk_1 | 0;
    result = imul(result, 31) + this.ynk_1 | 0;
    result = imul(result, 31) + this.znk_1 | 0;
    result = imul(result, 31) + this.anl_1 | 0;
    result = imul(result, 31) + this.bnl_1 | 0;
    result = imul(result, 31) + this.cnl_1 | 0;
    result = imul(result, 31) + this.dnl_1 | 0;
    result = imul(result, 31) + this.enl_1 | 0;
    result = imul(result, 31) + this.fnl_1 | 0;
    result = imul(result, 31) + this.gnl_1 | 0;
    result = imul(result, 31) + this.hnl_1 | 0;
    result = imul(result, 31) + this.inl_1 | 0;
    result = imul(result, 31) + this.jnl_1 | 0;
    result = imul(result, 31) + this.knl_1 | 0;
    result = imul(result, 31) + this.lnl_1 | 0;
    result = imul(result, 31) + this.mnl_1 | 0;
    result = imul(result, 31) + this.nnl_1 | 0;
    result = imul(result, 31) + this.onl_1 | 0;
    result = imul(result, 31) + this.pnl_1 | 0;
    result = imul(result, 31) + this.qnl_1 | 0;
    result = imul(result, 31) + this.rnl_1 | 0;
    result = imul(result, 31) + this.snl_1 | 0;
    result = imul(result, 31) + this.tnl_1 | 0;
    result = imul(result, 31) + this.unl_1 | 0;
    result = imul(result, 31) + this.vnl_1 | 0;
    result = imul(result, 31) + this.wnl_1 | 0;
    result = imul(result, 31) + this.xnl_1 | 0;
    result = imul(result, 31) + this.ynl_1 | 0;
    result = imul(result, 31) + this.znl_1 | 0;
    result = imul(result, 31) + this.anm_1 | 0;
    result = imul(result, 31) + this.bnm_1 | 0;
    result = imul(result, 31) + this.cnm_1 | 0;
    result = imul(result, 31) + this.dnm_1 | 0;
    return result;
  };
  protoOf(PupilEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PupilEntry))
      return false;
    var tmp0_other_with_cast = other instanceof PupilEntry ? other : THROW_CCE();
    if (!(this.snj_1 === tmp0_other_with_cast.snj_1))
      return false;
    if (!(this.tnj_1 === tmp0_other_with_cast.tnj_1))
      return false;
    if (!(this.unj_1 === tmp0_other_with_cast.unj_1))
      return false;
    if (!(this.vnj_1 === tmp0_other_with_cast.vnj_1))
      return false;
    if (!(this.wnj_1 === tmp0_other_with_cast.wnj_1))
      return false;
    if (!(this.xnj_1 === tmp0_other_with_cast.xnj_1))
      return false;
    if (!(this.ynj_1 === tmp0_other_with_cast.ynj_1))
      return false;
    if (!(this.znj_1 === tmp0_other_with_cast.znj_1))
      return false;
    if (!(this.ank_1 === tmp0_other_with_cast.ank_1))
      return false;
    if (!this.bnk_1.equals(tmp0_other_with_cast.bnk_1))
      return false;
    if (!(this.cnk_1 === tmp0_other_with_cast.cnk_1))
      return false;
    if (!(this.dnk_1 === tmp0_other_with_cast.dnk_1))
      return false;
    if (!(this.enk_1 === tmp0_other_with_cast.enk_1))
      return false;
    if (!(this.fnk_1 === tmp0_other_with_cast.fnk_1))
      return false;
    if (!(this.gnk_1 === tmp0_other_with_cast.gnk_1))
      return false;
    if (!(this.hnk_1 === tmp0_other_with_cast.hnk_1))
      return false;
    if (!equals(this.ink_1, tmp0_other_with_cast.ink_1))
      return false;
    if (!equals(this.jnk_1, tmp0_other_with_cast.jnk_1))
      return false;
    if (!equals(this.knk_1, tmp0_other_with_cast.knk_1))
      return false;
    if (!equals(this.lnk_1, tmp0_other_with_cast.lnk_1))
      return false;
    if (!equals(this.mnk_1, tmp0_other_with_cast.mnk_1))
      return false;
    if (!equals(this.nnk_1, tmp0_other_with_cast.nnk_1))
      return false;
    if (!(this.onk_1 === tmp0_other_with_cast.onk_1))
      return false;
    if (!(this.pnk_1 === tmp0_other_with_cast.pnk_1))
      return false;
    if (!(this.qnk_1 === tmp0_other_with_cast.qnk_1))
      return false;
    if (!(this.rnk_1 === tmp0_other_with_cast.rnk_1))
      return false;
    if (!(this.snk_1 === tmp0_other_with_cast.snk_1))
      return false;
    if (!(this.tnk_1 === tmp0_other_with_cast.tnk_1))
      return false;
    if (!(this.unk_1 === tmp0_other_with_cast.unk_1))
      return false;
    if (!(this.vnk_1 === tmp0_other_with_cast.vnk_1))
      return false;
    if (!(this.wnk_1 === tmp0_other_with_cast.wnk_1))
      return false;
    if (!(this.xnk_1 === tmp0_other_with_cast.xnk_1))
      return false;
    if (!(this.ynk_1 === tmp0_other_with_cast.ynk_1))
      return false;
    if (!(this.znk_1 === tmp0_other_with_cast.znk_1))
      return false;
    if (!(this.anl_1 === tmp0_other_with_cast.anl_1))
      return false;
    if (!(this.bnl_1 === tmp0_other_with_cast.bnl_1))
      return false;
    if (!(this.cnl_1 === tmp0_other_with_cast.cnl_1))
      return false;
    if (!(this.dnl_1 === tmp0_other_with_cast.dnl_1))
      return false;
    if (!(this.enl_1 === tmp0_other_with_cast.enl_1))
      return false;
    if (!(this.fnl_1 === tmp0_other_with_cast.fnl_1))
      return false;
    if (!(this.gnl_1 === tmp0_other_with_cast.gnl_1))
      return false;
    if (!(this.hnl_1 === tmp0_other_with_cast.hnl_1))
      return false;
    if (!(this.inl_1 === tmp0_other_with_cast.inl_1))
      return false;
    if (!(this.jnl_1 === tmp0_other_with_cast.jnl_1))
      return false;
    if (!(this.knl_1 === tmp0_other_with_cast.knl_1))
      return false;
    if (!(this.lnl_1 === tmp0_other_with_cast.lnl_1))
      return false;
    if (!(this.mnl_1 === tmp0_other_with_cast.mnl_1))
      return false;
    if (!(this.nnl_1 === tmp0_other_with_cast.nnl_1))
      return false;
    if (!(this.onl_1 === tmp0_other_with_cast.onl_1))
      return false;
    if (!(this.pnl_1 === tmp0_other_with_cast.pnl_1))
      return false;
    if (!(this.qnl_1 === tmp0_other_with_cast.qnl_1))
      return false;
    if (!(this.rnl_1 === tmp0_other_with_cast.rnl_1))
      return false;
    if (!(this.snl_1 === tmp0_other_with_cast.snl_1))
      return false;
    if (!(this.tnl_1 === tmp0_other_with_cast.tnl_1))
      return false;
    if (!(this.unl_1 === tmp0_other_with_cast.unl_1))
      return false;
    if (!(this.vnl_1 === tmp0_other_with_cast.vnl_1))
      return false;
    if (!(this.wnl_1 === tmp0_other_with_cast.wnl_1))
      return false;
    if (!(this.xnl_1 === tmp0_other_with_cast.xnl_1))
      return false;
    if (!(this.ynl_1 === tmp0_other_with_cast.ynl_1))
      return false;
    if (!(this.znl_1 === tmp0_other_with_cast.znl_1))
      return false;
    if (!(this.anm_1 === tmp0_other_with_cast.anm_1))
      return false;
    if (!(this.bnm_1 === tmp0_other_with_cast.bnm_1))
      return false;
    if (!(this.cnm_1 === tmp0_other_with_cast.cnm_1))
      return false;
    if (!(this.dnm_1 === tmp0_other_with_cast.dnm_1))
      return false;
    return true;
  };
  function UserRepository() {
  }
  var com_korchagin_data_repository_UserRepositotyImplementation$stable;
  function UserRepositotyImplementation$getUsers$slambda$slambda($this_channelFlow, resultContinuation) {
    this.vnm_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).ynm = function (pupil, $completion) {
    var tmp = this.wi8(pupil, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).ma = function (p1, $completion) {
    return this.ynm(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.wnm_1.xi5_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
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

            tmp_0.xnm_1 = destination;
            this.s9_1 = 1;
            suspendResult = this.vnm_1.z1n(this.xnm_1, this);
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
        var e_2 = $p;
        if (this.t9_1 === 2) {
          throw e_2;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_2;
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda$slambda).wi8 = function (pupil, completion) {
    var i = new UserRepositotyImplementation$getUsers$slambda$slambda(this.vnm_1, completion);
    i.wnm_1 = pupil;
    return i;
  };
  function UserRepositotyImplementation$getUsers$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUsers$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (pupil, $completion) {
      return i.ynm(pupil, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda$slambda$slambda($this_channelFlow, resultContinuation) {
    this.hnn_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).ynm = function (snapshot, $completion) {
    var tmp = this.wi8(snapshot, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).ma = function (p1, $completion) {
    return this.ynm(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp0_safe_receiver = firstOrNull(this.inn_1.xi5_1);
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
          println('Found user: ' + (user == null ? null : user.tnj_1));
          if (!(user == null)) {
            this.hnn_1.a1o(user);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e_1 = $p;
        throw e_1;
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda$slambda).wi8 = function (snapshot, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda$slambda(this.hnn_1, completion);
    i.inn_1 = snapshot;
    return i;
  };
  function UserRepositotyImplementation$getUserById$slambda$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (snapshot, $completion) {
      return i.ynm(snapshot, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda$slambda(this$0, $id, $this_channelFlow, resultContinuation) {
    this.rnn_1 = this$0;
    this.snn_1 = $id;
    this.tnn_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).a20 = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp_0 = _get_pupilsDB__vkeqxk(this.rnn_1).pi5('email').si5(this.snn_1).qi5();
          launchIn(onEach(tmp_0, UserRepositotyImplementation$getUserById$slambda$slambda$slambda_0(this.tnn_1, null)), this.unn_1);
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
  protoOf(UserRepositotyImplementation$getUserById$slambda$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda(this.rnn_1, this.snn_1, this.tnn_1, completion);
    i.unn_1 = $this$coroutineScope;
    return i;
  };
  function UserRepositotyImplementation$getUserById$slambda$slambda_0(this$0, $id, $this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda$slambda(this$0, $id, $this_channelFlow, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.a20($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getFreezeElements$slambda$slambda($this_channelFlow, resultContinuation) {
    this.dno_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda$slambda).ynm = function (freeze, $completion) {
    var tmp = this.wi8(freeze, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda$slambda).ma = function (p1, $completion) {
    return this.ynm(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.eno_1.xi5_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              var tmp_1;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  try {
                    var value = get_js(element).val();
                    var this_1 = new Builder();
                    var decodeSettings = buildDecodeSettings(this_1);
                    var this_2 = serializer(createKType(getKClass(ElementEntry), arrayOf([]), false));
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

            tmp_0.fno_1 = destination;
            this.s9_1 = 1;
            suspendResult = this.dno_1.z1n(this.fno_1, this);
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
        var e_2 = $p;
        if (this.t9_1 === 2) {
          throw e_2;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_2;
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda$slambda).wi8 = function (freeze, completion) {
    var i = new UserRepositotyImplementation$getFreezeElements$slambda$slambda(this.dno_1, completion);
    i.eno_1 = freeze;
    return i;
  };
  function UserRepositotyImplementation$getFreezeElements$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getFreezeElements$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (freeze, $completion) {
      return i.ynm(freeze, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getPowerElements$slambda$slambda($this_channelFlow, resultContinuation) {
    this.ono_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getPowerElements$slambda$slambda).ynm = function (power, $completion) {
    var tmp = this.wi8(power, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getPowerElements$slambda$slambda).ma = function (p1, $completion) {
    return this.ynm(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getPowerElements$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.pno_1.xi5_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              var tmp_1;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  try {
                    var value = get_js(element).val();
                    var this_1 = new Builder();
                    var decodeSettings = buildDecodeSettings(this_1);
                    var this_2 = serializer(createKType(getKClass(ElementEntry), arrayOf([]), false));
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

            tmp_0.qno_1 = destination;
            this.s9_1 = 1;
            suspendResult = this.ono_1.z1n(this.qno_1, this);
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
        var e_2 = $p;
        if (this.t9_1 === 2) {
          throw e_2;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_2;
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getPowerElements$slambda$slambda).wi8 = function (power, completion) {
    var i = new UserRepositotyImplementation$getPowerElements$slambda$slambda(this.ono_1, completion);
    i.pno_1 = power;
    return i;
  };
  function UserRepositotyImplementation$getPowerElements$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getPowerElements$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (power, $completion) {
      return i.ynm(power, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getOfpElements$slambda$slambda($this_channelFlow, resultContinuation) {
    this.zno_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getOfpElements$slambda$slambda).ynm = function (ofp, $completion) {
    var tmp = this.wi8(ofp, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getOfpElements$slambda$slambda).ma = function (p1, $completion) {
    return this.ynm(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getOfpElements$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.anp_1.xi5_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              var tmp_1;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  try {
                    var value = get_js(element).val();
                    var this_1 = new Builder();
                    var decodeSettings = buildDecodeSettings(this_1);
                    var this_2 = serializer(createKType(getKClass(ElementEntry), arrayOf([]), false));
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

            tmp_0.bnp_1 = destination;
            this.s9_1 = 1;
            suspendResult = this.zno_1.z1n(this.bnp_1, this);
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
        var e_2 = $p;
        if (this.t9_1 === 2) {
          throw e_2;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_2;
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getOfpElements$slambda$slambda).wi8 = function (ofp, completion) {
    var i = new UserRepositotyImplementation$getOfpElements$slambda$slambda(this.zno_1, completion);
    i.anp_1 = ofp;
    return i;
  };
  function UserRepositotyImplementation$getOfpElements$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getOfpElements$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (ofp, $completion) {
      return i.ynm(ofp, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getStretchElements$slambda$slambda($this_channelFlow, resultContinuation) {
    this.knp_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getStretchElements$slambda$slambda).ynm = function (stretch, $completion) {
    var tmp = this.wi8(stretch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getStretchElements$slambda$slambda).ma = function (p1, $completion) {
    return this.ynm(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getStretchElements$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.lnp_1.xi5_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              var tmp_1;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  try {
                    var value = get_js(element).val();
                    var this_1 = new Builder();
                    var decodeSettings = buildDecodeSettings(this_1);
                    var this_2 = serializer(createKType(getKClass(ElementEntry), arrayOf([]), false));
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

            tmp_0.mnp_1 = destination;
            this.s9_1 = 1;
            suspendResult = this.knp_1.z1n(this.mnp_1, this);
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
        var e_2 = $p;
        if (this.t9_1 === 2) {
          throw e_2;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_2;
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getStretchElements$slambda$slambda).wi8 = function (stretch, completion) {
    var i = new UserRepositotyImplementation$getStretchElements$slambda$slambda(this.knp_1, completion);
    i.lnp_1 = stretch;
    return i;
  };
  function UserRepositotyImplementation$getStretchElements$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getStretchElements$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (stretch, $completion) {
      return i.ynm(stretch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getBboysList$slambda$slambda($this_channelFlow, resultContinuation) {
    this.vnp_1 = $this_channelFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getBboysList$slambda$slambda).ynm = function (bboys, $completion) {
    var tmp = this.wi8(bboys, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getBboysList$slambda$slambda).ma = function (p1, $completion) {
    return this.ynm(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getBboysList$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.wnp_1.xi5_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              var tmp_1;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  try {
                    var value = get_js(element).val();
                    var this_1 = new Builder();
                    var decodeSettings = buildDecodeSettings(this_1);
                    var this_2 = serializer(createKType(getKClass(BboyEntry), arrayOf([]), false));
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

            tmp_0.xnp_1 = destination;
            this.s9_1 = 1;
            suspendResult = this.vnp_1.z1n(this.xnp_1, this);
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
        var e_2 = $p;
        if (this.t9_1 === 2) {
          throw e_2;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_2;
        }
      }
     while (true);
  };
  protoOf(UserRepositotyImplementation$getBboysList$slambda$slambda).wi8 = function (bboys, completion) {
    var i = new UserRepositotyImplementation$getBboysList$slambda$slambda(this.vnp_1, completion);
    i.wnp_1 = bboys;
    return i;
  };
  function UserRepositotyImplementation$getBboysList$slambda$slambda_0($this_channelFlow, resultContinuation) {
    var i = new UserRepositotyImplementation$getBboysList$slambda$slambda($this_channelFlow, resultContinuation);
    var l = function (bboys, $completion) {
      return i.ynm(bboys, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_pupilsDB__vkeqxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.enq_1;
    pupilsDB$factory();
    return this_0.c1();
  }
  function _get_freezeDB__hqqm8m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.fnq_1;
    freezeDB$factory();
    return this_0.c1();
  }
  function _get_powerDB__lo6ymq($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.gnq_1;
    powerDB$factory();
    return this_0.c1();
  }
  function _get_ofpDB__dcme4m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.hnq_1;
    ofpDB$factory();
    return this_0.c1();
  }
  function _get_stretchDB__wj98r6($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.inq_1;
    stretchDB$factory();
    return this_0.c1();
  }
  function _get_bboysDB__jskr3e($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.jnq_1;
    bboysDB$factory();
    return this_0.c1();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.lnq_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.lnq_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.lnq_1;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.mnq_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).y1r = function (value, $completion) {
    return this.mnq_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x3 = function () {
    return this.mnq_1;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.nnq_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).y1r = function (value, $completion) {
    return this.nnq_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).x3 = function () {
    return this.nnq_1;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.onq_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).y1r = function (value, $completion) {
    return this.onq_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).x3 = function () {
    return this.onq_1;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.pnq_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).y1r = function (value, $completion) {
    return this.pnq_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).x3 = function () {
    return this.pnq_1;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.qnq_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).y1r = function (value, $completion) {
    return this.qnq_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).x3 = function () {
    return this.qnq_1;
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
  function UserRepositotyImplementation$pupilsDB$delegate$lambda(this$0) {
    return function () {
      return get_database(Firebase_instance).ui5(this$0.dnq_1);
    };
  }
  function UserRepositotyImplementation$freezeDB$delegate$lambda(this$0) {
    return function () {
      return get_database(Firebase_instance).ui5(this$0.ynp_1);
    };
  }
  function UserRepositotyImplementation$powerDB$delegate$lambda(this$0) {
    return function () {
      return get_database(Firebase_instance).ui5(this$0.znp_1);
    };
  }
  function UserRepositotyImplementation$ofpDB$delegate$lambda(this$0) {
    return function () {
      return get_database(Firebase_instance).ui5(this$0.anq_1);
    };
  }
  function UserRepositotyImplementation$stretchDB$delegate$lambda(this$0) {
    return function () {
      return get_database(Firebase_instance).ui5(this$0.bnq_1);
    };
  }
  function UserRepositotyImplementation$bboysDB$delegate$lambda(this$0) {
    return function () {
      return get_database(Firebase_instance).ui5(this$0.cnq_1);
    };
  }
  function UserRepositotyImplementation$getUsers$slambda(this$0, resultContinuation) {
    this.znq_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUsers$slambda).bnr = function ($this$channelFlow, $completion) {
    var tmp = this.cnr($this$channelFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda).ma = function (p1, $completion) {
    return this.bnr((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUsers$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = _get_pupilsDB__vkeqxk(this.znq_1).qi5();
            var tmp_1 = UserRepositotyImplementation$getUsers$slambda$slambda_0(this.anr_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(UserRepositotyImplementation$getUsers$slambda).cnr = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getUsers$slambda(this.znq_1, completion);
    i.anr_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getUsers$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getUsers$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.bnr($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getUserById$slambda(this$0, $id, resultContinuation) {
    this.lnr_1 = this$0;
    this.mnr_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getUserById$slambda).onr = function ($this$channelFlow, $completion) {
    var tmp = this.pnr($this$channelFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda).ma = function (p1, $completion) {
    return this.onr((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getUserById$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = coroutineScope(UserRepositotyImplementation$getUserById$slambda$slambda_0(this.lnr_1, this.mnr_1, this.nnr_1, null), this);
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
  protoOf(UserRepositotyImplementation$getUserById$slambda).pnr = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getUserById$slambda(this.lnr_1, this.mnr_1, completion);
    i.nnr_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getUserById$slambda_0(this$0, $id, resultContinuation) {
    var i = new UserRepositotyImplementation$getUserById$slambda(this$0, $id, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.onr($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getFreezeElements$slambda(this$0, resultContinuation) {
    this.ynr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda).ans = function ($this$channelFlow, $completion) {
    var tmp = this.bns($this$channelFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda).ma = function (p1, $completion) {
    return this.ans((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = _get_freezeDB__hqqm8m(this.ynr_1).qi5();
            var tmp_1 = UserRepositotyImplementation$getFreezeElements$slambda$slambda_0(this.znr_1, null);
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
  protoOf(UserRepositotyImplementation$getFreezeElements$slambda).bns = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getFreezeElements$slambda(this.ynr_1, completion);
    i.znr_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getFreezeElements$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getFreezeElements$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.ans($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getPowerElements$slambda(this$0, resultContinuation) {
    this.kns_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getPowerElements$slambda).ans = function ($this$channelFlow, $completion) {
    var tmp = this.bns($this$channelFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getPowerElements$slambda).ma = function (p1, $completion) {
    return this.ans((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getPowerElements$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = _get_powerDB__lo6ymq(this.kns_1).qi5();
            var tmp_1 = UserRepositotyImplementation$getPowerElements$slambda$slambda_0(this.lns_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
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
  protoOf(UserRepositotyImplementation$getPowerElements$slambda).bns = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getPowerElements$slambda(this.kns_1, completion);
    i.lns_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getPowerElements$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getPowerElements$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.ans($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getOfpElements$slambda(this$0, resultContinuation) {
    this.uns_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getOfpElements$slambda).ans = function ($this$channelFlow, $completion) {
    var tmp = this.bns($this$channelFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getOfpElements$slambda).ma = function (p1, $completion) {
    return this.ans((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getOfpElements$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = _get_ofpDB__dcme4m(this.uns_1).qi5();
            var tmp_1 = UserRepositotyImplementation$getOfpElements$slambda$slambda_0(this.vns_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
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
  protoOf(UserRepositotyImplementation$getOfpElements$slambda).bns = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getOfpElements$slambda(this.uns_1, completion);
    i.vns_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getOfpElements$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getOfpElements$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.ans($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getStretchElements$slambda(this$0, resultContinuation) {
    this.ent_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getStretchElements$slambda).ans = function ($this$channelFlow, $completion) {
    var tmp = this.bns($this$channelFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getStretchElements$slambda).ma = function (p1, $completion) {
    return this.ans((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getStretchElements$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = _get_stretchDB__wj98r6(this.ent_1).qi5();
            var tmp_1 = UserRepositotyImplementation$getStretchElements$slambda$slambda_0(this.fnt_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_1), this);
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
  protoOf(UserRepositotyImplementation$getStretchElements$slambda).bns = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getStretchElements$slambda(this.ent_1, completion);
    i.fnt_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getStretchElements$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getStretchElements$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.ans($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserRepositotyImplementation$getBboysList$slambda(this$0, resultContinuation) {
    this.ont_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserRepositotyImplementation$getBboysList$slambda).qnt = function ($this$channelFlow, $completion) {
    var tmp = this.rnt($this$channelFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation$getBboysList$slambda).ma = function (p1, $completion) {
    return this.qnt((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserRepositotyImplementation$getBboysList$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = _get_bboysDB__jskr3e(this.ont_1).qi5();
            var tmp_1 = UserRepositotyImplementation$getBboysList$slambda$slambda_0(this.pnt_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_1), this);
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
  protoOf(UserRepositotyImplementation$getBboysList$slambda).rnt = function ($this$channelFlow, completion) {
    var i = new UserRepositotyImplementation$getBboysList$slambda(this.ont_1, completion);
    i.pnt_1 = $this$channelFlow;
    return i;
  };
  function UserRepositotyImplementation$getBboysList$slambda_0(this$0, resultContinuation) {
    var i = new UserRepositotyImplementation$getBboysList$slambda(this$0, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.qnt($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $createNewPupilCOROUTINE$0(_this__u8e3s4, email, name, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.anu_1 = _this__u8e3s4;
    this.bnu_1 = email;
    this.cnu_1 = name;
  }
  protoOf($createNewPupilCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            var tmp_0 = this;
            var this_0 = this.bnu_1;
            tmp_0.dnu_1 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())).toLowerCase();
            this.enu_1 = _get_pupilsDB__vkeqxk(this.anu_1).ji5().fi5_1;
            if (!(this.enu_1 == null)) {
              this.fnu_1 = new PupilEntry(this.enu_1, this.cnu_1, this.dnu_1, '', '', '', '', '', 0, new Long(0, 0), 0, 0, 0, '', 0, '', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
              var tmp_1 = this;
              tmp_1.gnu_1 = _get_pupilsDB__vkeqxk(this.anu_1).ki5(this.enu_1);
              var tmp_2 = this;
              tmp_2.hnu_1 = this.fnu_1;
              this.s9_1 = 1;
              var value = this.hnu_1;
              var this_1 = new Builder_0();
              var encodeSettings = buildEncodeSettings(this_1);
              var tmp_3;
              if (value == null) {
                tmp_3 = null;
              } else {
                var this_2 = new FirebaseEncoder(encodeSettings);
                var tmp_4;
                if (value instanceof ValueWithSerializer) {
                  var tmp_5 = value.inu_1;
                  tmp_4 = tmp_5 == null ? true : tmp_5 instanceof PupilEntry;
                } else {
                  tmp_4 = false;
                }
                if (tmp_4) {
                  var it = value instanceof ValueWithSerializer ? value : THROW_CCE();
                  this_2.t4l(it.jnu_1, it.inu_1);
                } else {
                  var tmp_6;
                  try {
                    var this_3 = serializer(createKType(getKClass(PupilEntry), arrayOf([]), false));
                    var value_0 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
                    tmp_6 = _Result___init__impl__xyqfz8(value_0);
                  } catch ($p) {
                    var tmp_7;
                    if ($p instanceof Error) {
                      var e = $p;
                      tmp_7 = _Result___init__impl__xyqfz8(createFailure(e));
                    } else {
                      throw $p;
                    }
                    tmp_6 = tmp_7;
                  }
                  var this_4 = tmp_6;
                  var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
                  var tmp_8;
                  if (exception == null) {
                    var tmp_9 = _Result___get_value__impl__bjfvqg(this_4);
                    tmp_8 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
                  } else {
                    var tmp_10;
                    if (isInterface(value, KtMap)) {
                      tmp_10 = new FirebaseMapSerializer();
                    } else {
                      if (isInterface(value, KtList)) {
                        tmp_10 = new FirebaseListSerializer();
                      } else {
                        if (isInterface(value, KtSet)) {
                          tmp_10 = new FirebaseListSerializer();
                        } else {
                          tmp_10 = serializer_0(getKClassFromExpression(value));
                        }
                      }
                    }
                    var tmp_11 = tmp_10;
                    tmp_8 = isInterface(tmp_11, SerializationStrategy) ? tmp_11 : THROW_CCE();
                  }
                  this_2.t4l(tmp_8, value);
                }
                tmp_3 = this_2.fi4_1;
              }
              suspendResult = this.gnu_1.li5(tmp_3, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              println('\u274C \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C UID \u0434\u043B\u044F \u0443\u0447\u0435\u043D\u0438\u043A\u0430');
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $updateAvatarCOROUTINE$1(_this__u8e3s4, email, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.snu_1 = _this__u8e3s4;
    this.tnu_1 = email;
    this.unu_1 = data;
  }
  protoOf($updateAvatarCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 7;
            var tmp_0 = this;
            var this_0 = this.tnu_1;
            tmp_0.vnu_1 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())).toLowerCase();
            this.wnu_1 = this.snu_1.knq_1.ui5('ImageDB').ki5(replace(this.vnu_1, '.', '_') + '-avatar.jpg');
            this.xnu_1 = toFirebaseData(this.unu_1);
            this.s9_1 = 1;
            suspendResult = this.wnu_1.lle(this.xnu_1, null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s9_1 = 2;
            suspendResult = this.wnu_1.kle(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ynu_1 = suspendResult;
            println('\u2705 Avatar uploaded to: ' + this.ynu_1);
            this.s9_1 = 3;
            suspendResult = first(_get_pupilsDB__vkeqxk(this.snu_1).pi5('email').si5(this.vnu_1).qi5(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.znu_1 = suspendResult;
            this.anv_1 = firstOrNull(this.znu_1.xi5_1);
            if (!(this.anv_1 == null)) {
              this.bnv_1 = this.anv_1.b1();
              if (!(this.bnv_1 == null)) {
                var tmp_1 = this;
                tmp_1.cnv_1 = _get_pupilsDB__vkeqxk(this.snu_1).ki5(this.bnv_1).ki5('avatar');
                var tmp_2 = this;
                tmp_2.dnv_1 = this.ynu_1;
                this.s9_1 = 4;
                var value = this.dnv_1;
                var this_1 = new Builder_0();
                var encodeSettings = buildEncodeSettings(this_1);
                var tmp_3;
                if (value == null) {
                  tmp_3 = null;
                } else {
                  var this_2 = new FirebaseEncoder(encodeSettings);
                  var tmp_4;
                  if (value instanceof ValueWithSerializer) {
                    var tmp_5 = value.inu_1;
                    tmp_4 = tmp_5 == null ? true : typeof tmp_5 === 'string';
                  } else {
                    tmp_4 = false;
                  }
                  if (tmp_4) {
                    var it = value instanceof ValueWithSerializer ? value : THROW_CCE();
                    this_2.t4l(it.jnu_1, it.inu_1);
                  } else {
                    var tmp_6;
                    try {
                      var this_3 = serializer(createKType(PrimitiveClasses_getInstance().vc(), arrayOf([]), false));
                      var value_0 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
                      tmp_6 = _Result___init__impl__xyqfz8(value_0);
                    } catch ($p) {
                      var tmp_7;
                      if ($p instanceof Error) {
                        var e = $p;
                        tmp_7 = _Result___init__impl__xyqfz8(createFailure(e));
                      } else {
                        throw $p;
                      }
                      tmp_6 = tmp_7;
                    }
                    var this_4 = tmp_6;
                    var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
                    var tmp_8;
                    if (exception == null) {
                      var tmp_9 = _Result___get_value__impl__bjfvqg(this_4);
                      tmp_8 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
                    } else {
                      var tmp_10;
                      if (isInterface(value, KtMap)) {
                        tmp_10 = new FirebaseMapSerializer();
                      } else {
                        if (isInterface(value, KtList)) {
                          tmp_10 = new FirebaseListSerializer();
                        } else {
                          if (isInterface(value, KtSet)) {
                            tmp_10 = new FirebaseListSerializer();
                          } else {
                            tmp_10 = serializer_0(PrimitiveClasses_getInstance().vc());
                          }
                        }
                      }
                      var tmp_11 = tmp_10;
                      tmp_8 = isInterface(tmp_11, SerializationStrategy) ? tmp_11 : THROW_CCE();
                    }
                    this_2.t4l(tmp_8, value);
                  }
                  tmp_3 = this_2.fi4_1;
                }
                suspendResult = this.cnv_1.li5(tmp_3, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                println('\u274C UID is null for email: ' + this.tnu_1);
                this.s9_1 = 5;
                continue $sm;
              }
            } else {
              println('\u274C User with email ' + this.tnu_1 + ' not found in database');
              this.s9_1 = 6;
              continue $sm;
            }

          case 4:
            println('\u2705 Avatar URL updated in database for user: ' + this.tnu_1);
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.s9_1 = 6;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 7) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function UserRepositotyImplementation() {
    this.ynp_1 = 'Freeze';
    this.znp_1 = 'PowerMove';
    this.anq_1 = 'OFP';
    this.bnq_1 = 'Stretch';
    this.cnq_1 = 'Bio';
    this.dnq_1 = 'Pupils';
    var tmp = this;
    tmp.enq_1 = lazy(UserRepositotyImplementation$pupilsDB$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.fnq_1 = lazy(UserRepositotyImplementation$freezeDB$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.gnq_1 = lazy(UserRepositotyImplementation$powerDB$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.hnq_1 = lazy(UserRepositotyImplementation$ofpDB$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.inq_1 = lazy(UserRepositotyImplementation$stretchDB$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.jnq_1 = lazy(UserRepositotyImplementation$bboysDB$delegate$lambda(this));
    this.knq_1 = get_storage(Firebase_instance);
  }
  protoOf(UserRepositotyImplementation).enm = function () {
    return channelFlow(UserRepositotyImplementation$getUsers$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).fnm = function (id) {
    return channelFlow(UserRepositotyImplementation$getUserById$slambda_0(this, id, null));
  };
  protoOf(UserRepositotyImplementation).gnm = function () {
    return channelFlow(UserRepositotyImplementation$getFreezeElements$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).hnm = function () {
    return channelFlow(UserRepositotyImplementation$getPowerElements$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).inm = function () {
    return channelFlow(UserRepositotyImplementation$getOfpElements$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).jnm = function () {
    return channelFlow(UserRepositotyImplementation$getStretchElements$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).knm = function () {
    return channelFlow(UserRepositotyImplementation$getBboysList$slambda_0(this, null));
  };
  protoOf(UserRepositotyImplementation).lnm = function (email, name, $completion) {
    var tmp = new $createNewPupilCOROUTINE$0(this, email, name, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UserRepositotyImplementation).mnm = function (email, data, $completion) {
    var tmp = new $updateAvatarCOROUTINE$1(this, email, data, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function pupilsDB$factory() {
    return getPropertyCallableRef('pupilsDB', 1, KProperty1, function (receiver) {
      return _get_pupilsDB__vkeqxk(receiver);
    }, null);
  }
  function freezeDB$factory() {
    return getPropertyCallableRef('freezeDB', 1, KProperty1, function (receiver) {
      return _get_freezeDB__hqqm8m(receiver);
    }, null);
  }
  function powerDB$factory() {
    return getPropertyCallableRef('powerDB', 1, KProperty1, function (receiver) {
      return _get_powerDB__lo6ymq(receiver);
    }, null);
  }
  function ofpDB$factory() {
    return getPropertyCallableRef('ofpDB', 1, KProperty1, function (receiver) {
      return _get_ofpDB__dcme4m(receiver);
    }, null);
  }
  function stretchDB$factory() {
    return getPropertyCallableRef('stretchDB', 1, KProperty1, function (receiver) {
      return _get_stretchDB__wj98r6(receiver);
    }, null);
  }
  function bboysDB$factory() {
    return getPropertyCallableRef('bboysDB', 1, KProperty1, function (receiver) {
      return _get_bboysDB__jskr3e(receiver);
    }, null);
  }
  function toFirebaseData(_this__u8e3s4) {
    var uint8Array = new Uint8Array(_this__u8e3s4.length);
    var inductionVariable = 0;
    var last = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        uint8Array[i] = toByte(_this__u8e3s4[i] & 255);
      }
       while (inductionVariable <= last);
    return new Data(uint8Array);
  }
  //region block: post-declaration
  protoOf($serializer).a4t = typeParametersSerializers;
  protoOf($serializer_0).a4t = typeParametersSerializers;
  protoOf($serializer_1).a4t = typeParametersSerializers;
  //endregion
  //region block: init
  breakingkmpapp_module_main_data_main_generated_resources_Res_drawable$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_string$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_array$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_plurals$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_font$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res$stable = 0;
  com_korchagin_data_models_BboyEntry_$serializer$stable = 8;
  com_korchagin_data_models_BboyEntry$stable = 0;
  Companion_instance_0 = new Companion();
  com_korchagin_data_models_ElementEntry_$serializer$stable = 8;
  com_korchagin_data_models_ElementEntry$stable = 8;
  Companion_instance_1 = new Companion_0();
  com_korchagin_data_models_PupilEntry_$serializer$stable = 8;
  com_korchagin_data_models_PupilEntry$stable = 8;
  Companion_instance_2 = new Companion_1();
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
