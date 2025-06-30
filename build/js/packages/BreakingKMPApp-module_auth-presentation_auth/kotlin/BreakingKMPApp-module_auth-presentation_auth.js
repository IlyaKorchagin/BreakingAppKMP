(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './coil-root-coil-network-ktor3.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./coil-root-coil-network-ktor3.js'));
  else {
    if (typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp.module_auth:presentation_auth'. Its dependency 'coil-root-coil-network-ktor3' was not found. Please, check whether 'coil-root-coil-network-ktor3' is loaded prior to 'BreakingKMPApp.module_auth:presentation_auth'.");
    }
    globalThis['BreakingKMPApp.module_auth:presentation_auth'] = factory(typeof globalThis['BreakingKMPApp.module_auth:presentation_auth'] === 'undefined' ? {} : globalThis['BreakingKMPApp.module_auth:presentation_auth'], globalThis['coil-root-coil-network-ktor3']);
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

//# sourceMappingURL=BreakingKMPApp-module_auth-presentation_auth.js.map
