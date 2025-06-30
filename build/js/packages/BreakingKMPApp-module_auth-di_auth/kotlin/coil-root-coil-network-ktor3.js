(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './coil-root-coil-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./coil-root-coil-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['coil-root-coil-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'coil-root-coil-core' was not found. Please, check whether 'coil-root-coil-core' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    globalThis['coil-root-coil-network-ktor3'] = factory(typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined' ? {} : globalThis['coil-root-coil-network-ktor3'], globalThis['kotlin-kotlin-stdlib'], globalThis['coil-root-coil-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_coil_kt_coil3_coil_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.f;
  var initMetadataForClass = kotlin_kotlin.$_$.d;
  var ServiceLoaderComponentRegistry_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.b;
  var defineProp = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KtorNetworkFetcherServiceLoaderTarget, 'KtorNetworkFetcherServiceLoaderTarget', KtorNetworkFetcherServiceLoaderTarget);
  //endregion
  function KtorNetworkFetcherServiceLoaderTarget() {
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function initHook$init$() {
    ServiceLoaderComponentRegistry_getInstance().r1(new KtorNetworkFetcherServiceLoaderTarget());
    return Unit_instance;
  }
  //region block: init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $coil3 = _.coil3 || (_.coil3 = {});
    var $coil3$network = $coil3.network || ($coil3.network = {});
    var $coil3$network$ktor3 = $coil3$network.ktor3 || ($coil3$network.ktor3 = {});
    var $coil3$network$ktor3$internal = $coil3$network$ktor3.internal || ($coil3$network$ktor3.internal = {});
    defineProp($coil3$network$ktor3$internal, 'initHook', get_initHook);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-network-ktor3.js.map
