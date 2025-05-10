(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './projects-core-koin-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./projects-core-koin-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    globalThis['projects-compose-koin-compose-viewmodel'] = factory(typeof globalThis['projects-compose-koin-compose-viewmodel'] === 'undefined' ? {} : globalThis['projects-compose-koin-compose-viewmodel'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['projects-core-koin-core']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_io_insert_koin_koin_core) {
  'use strict';
  //region block: imports
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Empty_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  var isInterface = kotlin_kotlin.$_$.qd;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var KoinPlatformTools_instance = kotlin_io_insert_koin_koin_core.$_$.c;
  var VOID = kotlin_kotlin.$_$.i;
  var protoOf = kotlin_kotlin.$_$.he;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KoinViewModelFactory, 'KoinViewModelFactory', VOID, VOID, [Factory]);
  //endregion
  function defaultExtras(viewModelStoreOwner, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a2v(1275070669);
    if (isTraceInProgress()) {
      traceEventStart(1275070669, $changed, -1, 'org.koin.compose.viewmodel.defaultExtras (ViewModelInternals.kt:83)');
    }
    var tmp;
    if (isInterface(viewModelStoreOwner, HasDefaultViewModelProviderFactory)) {
      tmp = viewModelStoreOwner.q48();
    } else {
      tmp = Empty_getInstance();
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b2v();
    return tmp0;
  }
  function resolveViewModel(vmClass, viewModelStore, key, extras, qualifier, scope, parameters) {
    var factory = new KoinViewModelFactory(vmClass, scope, qualifier, parameters);
    var provider = Companion_getInstance().d4a(viewModelStore, factory, extras);
    var vmKey = getViewModelKey(qualifier, key, KoinPlatformTools_instance.du(vmClass));
    return !(vmKey == null) ? provider.h4a(vmKey, vmClass) : provider.g4a(vmClass);
  }
  function KoinViewModelFactory(kClass, scope, qualifier, params) {
    qualifier = qualifier === VOID ? null : qualifier;
    params = params === VOID ? null : params;
    this.bbq_1 = kClass;
    this.cbq_1 = scope;
    this.dbq_1 = qualifier;
    this.ebq_1 = params;
  }
  protoOf(KoinViewModelFactory).z49 = function (modelClass, extras) {
    return this.cbq_1.bu(this.bbq_1, this.dbq_1, this.ebq_1);
  };
  function getViewModelKey(qualifier, key, className) {
    qualifier = qualifier === VOID ? null : qualifier;
    key = key === VOID ? null : key;
    className = className === VOID ? null : className;
    var tmp;
    if (!(key == null)) {
      tmp = key;
    } else if (!(qualifier == null)) {
      var tmp_0 = qualifier.w();
      var tmp_1;
      if (className == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.koin.compose.viewmodel.getViewModelKey.<anonymous>' call
        tmp_1 = '_' + className;
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp = tmp_0 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    } else {
      tmp = null;
    }
    return tmp;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = defaultExtras;
  _.$_$.b = resolveViewModel;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-compose-koin-compose-viewmodel.js.map
