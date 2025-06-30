(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil-core'.");
    }
    globalThis['coil-root-coil-core'] = factory(typeof globalThis['coil-root-coil-core'] === 'undefined' ? {} : globalThis['coil-root-coil-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.b;
  var protoOf = kotlin_kotlin.$_$.f;
  var initMetadataForObject = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ServiceLoaderComponentRegistry, 'ServiceLoaderComponentRegistry');
  //endregion
  function ServiceLoaderComponentRegistry() {
    ServiceLoaderComponentRegistry_instance = this;
    this.o1_1 = new Object();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p1_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.q1_1 = ArrayList_init_$Create$();
  }
  protoOf(ServiceLoaderComponentRegistry).r1 = function (fetcher) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1_1;
    ServiceLoaderComponentRegistry_getInstance().p1_1.t(fetcher);
    return Unit_instance;
  };
  var ServiceLoaderComponentRegistry_instance;
  function ServiceLoaderComponentRegistry_getInstance() {
    if (ServiceLoaderComponentRegistry_instance == null)
      new ServiceLoaderComponentRegistry();
    return ServiceLoaderComponentRegistry_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ServiceLoaderComponentRegistry_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-core.js.map
