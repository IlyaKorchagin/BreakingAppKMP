(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './kotlin-kotlin-stdlib.js', './projects-core-koin-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./kotlin-kotlin-stdlib.js'), require('./projects-core-koin-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'projects-compose-koin-compose-viewmodel'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'projects-compose-koin-compose-viewmodel'.");
    }
    globalThis['projects-compose-koin-compose-viewmodel'] = factory(typeof globalThis['projects-compose-koin-compose-viewmodel'] === 'undefined' ? {} : globalThis['projects-compose-koin-compose-viewmodel'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib'], globalThis['projects-core-koin-core']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_kotlin, kotlin_io_insert_koin_koin_core) {
  'use strict';
  //region block: imports
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Empty_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.l;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var isInterface = kotlin_kotlin.$_$.gh;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.m;
  var KoinPlatformTools_getInstance = kotlin_io_insert_koin_koin_core.$_$.c;
  var VOID = kotlin_kotlin.$_$.i;
  var protoOf = kotlin_kotlin.$_$.yh;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KoinViewModelFactory, 'KoinViewModelFactory', VOID, VOID, [Factory]);
  //endregion
  function defaultExtras(viewModelStoreOwner, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1275070669);
    if (isTraceInProgress()) {
      traceEventStart(1275070669, $changed, -1, 'org.koin.compose.viewmodel.defaultExtras (ViewModelInternals.kt:83)');
    }
    var tmp;
    if (isInterface(viewModelStoreOwner, HasDefaultViewModelProviderFactory)) {
      tmp = viewModelStoreOwner.get_defaultViewModelCreationExtras_x8sur6_k$();
    } else {
      tmp = Empty_getInstance();
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function resolveViewModel(vmClass, viewModelStore, key, extras, qualifier, scope, parameters) {
    var factory = new KoinViewModelFactory(vmClass, scope, qualifier, parameters);
    var provider = Companion_getInstance().create_ltba36_k$(viewModelStore, factory, extras);
    var vmKey = getViewModelKey(qualifier, key, KoinPlatformTools_getInstance().getClassName_sthbcr_k$(vmClass));
    return !(vmKey == null) ? provider.get_2zg3lp_k$(vmKey, vmClass) : provider.get_1zxqo7_k$(vmClass);
  }
  function _get_kClass__80op26($this) {
    return $this.kClass_1;
  }
  function _get_scope__bi2zur($this) {
    return $this.scope_1;
  }
  function _get_qualifier__m5c6jd($this) {
    return $this.qualifier_1;
  }
  function _get_params__oo7d51($this) {
    return $this.params_1;
  }
  function KoinViewModelFactory(kClass, scope, qualifier, params) {
    qualifier = qualifier === VOID ? null : qualifier;
    params = params === VOID ? null : params;
    this.kClass_1 = kClass;
    this.scope_1 = scope;
    this.qualifier_1 = qualifier;
    this.params_1 = params;
  }
  protoOf(KoinViewModelFactory).create_jhkoyr_k$ = function (modelClass, extras) {
    return this.scope_1.get_80ko8d_k$(this.kClass_1, this.qualifier_1, this.params_1);
  };
  function getViewModelKey(qualifier, key, className) {
    qualifier = qualifier === VOID ? null : qualifier;
    key = key === VOID ? null : key;
    className = className === VOID ? null : className;
    var tmp;
    if (!(key == null)) {
      tmp = key;
    } else if (!(qualifier == null)) {
      var tmp_0 = qualifier.get_value_j01efc_k$();
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
