(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './coil-root-coil-network-ktor3.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./coil-root-coil-network-ktor3.js'));
  else {
    if (typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp.module_main:domain_main'. Its dependency 'coil-root-coil-network-ktor3' was not found. Please, check whether 'coil-root-coil-network-ktor3' is loaded prior to 'BreakingKMPApp.module_main:domain_main'.");
    }
    globalThis['BreakingKMPApp.module_main:domain_main'] = factory(typeof globalThis['BreakingKMPApp.module_main:domain_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp.module_main:domain_main'], globalThis['coil-root-coil-network-ktor3']);
  }
}(function (_, kotlin_io_coil_kt_coil3_coil_network_ktor3) {
  'use strict';
  //region block: pre-declaration
  //endregion
  //region block: exports
  kotlin_io_coil_kt_coil3_coil_network_ktor3.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-domain_main.js.map
