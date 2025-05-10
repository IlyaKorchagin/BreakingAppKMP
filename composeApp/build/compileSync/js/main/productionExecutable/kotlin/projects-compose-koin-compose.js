(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './projects-core-koin-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./projects-core-koin-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'projects-compose-koin-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'projects-compose-koin-compose'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-compose-koin-compose'.");
    }
    globalThis['projects-compose-koin-compose'] = factory(typeof globalThis['projects-compose-koin-compose'] === 'undefined' ? {} : globalThis['projects-compose-koin-compose'], globalThis['projects-core-koin-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var KoinPlatformTools_instance = kotlin_io_insert_koin_koin_core.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var VOID = kotlin_kotlin.$_$.i;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  //endregion
  //region block: pre-declaration
  //endregion
  var LocalKoinApplication;
  function get_LocalKoinScope() {
    _init_properties_KoinApplication_kt__lzwtrf();
    return LocalKoinScope;
  }
  var LocalKoinScope;
  function warnNoContext(_this__u8e3s4) {
    _init_properties_KoinApplication_kt__lzwtrf();
    _this__u8e3s4.nq_1.ps('[Warning] - No Koin context defined in Compose, fallback to default Koin context.Use KoinContext(), KoinAndroidContext() or KoinApplication() to setup or create Koin context with Compose and avoid such message.');
  }
  function getDefaultKoinContext() {
    _init_properties_KoinApplication_kt__lzwtrf();
    return KoinPlatformTools_instance.kr().zp();
  }
  function currentKoinScope($composer, $changed) {
    _init_properties_KoinApplication_kt__lzwtrf();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1668867238, $changed, -1, 'org.koin.compose.currentKoinScope (KoinApplication.kt:72)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalKoinScope();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function LocalKoinApplication$lambda() {
    _init_properties_KoinApplication_kt__lzwtrf();
    // Inline function 'kotlin.apply' call
    var this_0 = getDefaultKoinContext();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.compose.LocalKoinApplication.<anonymous>.<anonymous>' call
    warnNoContext(this_0);
    return this_0;
  }
  function LocalKoinScope$lambda() {
    _init_properties_KoinApplication_kt__lzwtrf();
    // Inline function 'kotlin.apply' call
    var this_0 = getDefaultKoinContext();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.compose.LocalKoinScope.<anonymous>.<anonymous>' call
    warnNoContext(this_0);
    return this_0.jq_1.wq_1;
  }
  var properties_initialized_KoinApplication_kt_xwamuh;
  function _init_properties_KoinApplication_kt__lzwtrf() {
    if (!properties_initialized_KoinApplication_kt_xwamuh) {
      properties_initialized_KoinApplication_kt_xwamuh = true;
      LocalKoinApplication = compositionLocalOf(VOID, LocalKoinApplication$lambda);
      LocalKoinScope = compositionLocalOf(VOID, LocalKoinScope$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = currentKoinScope;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-compose-koin-compose.js.map
