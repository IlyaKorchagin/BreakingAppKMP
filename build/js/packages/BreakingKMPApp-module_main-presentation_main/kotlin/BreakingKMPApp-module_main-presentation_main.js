(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './coil-root-coil-network-ktor3.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./coil-root-coil-network-ktor3.js'));
  else {
    if (typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp.module_main:presentation_main'. Its dependency 'coil-root-coil-network-ktor3' was not found. Please, check whether 'coil-root-coil-network-ktor3' is loaded prior to 'BreakingKMPApp.module_main:presentation_main'.");
    }
    globalThis['BreakingKMPApp.module_main:presentation_main'] = factory(typeof globalThis['BreakingKMPApp.module_main:presentation_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp.module_main:presentation_main'], globalThis['coil-root-coil-network-ktor3']);
  }
}(function (_, kotlin_io_coil_kt_coil3_coil_network_ktor3) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var com_korchagin_presentation_models_BboyModel$stable;
  var com_korchagin_presentation_models_ElementModel$stable;
  var com_korchagin_presentation_models_Elements$stable;
  var com_korchagin_presentation_models_ImageWithText$stable;
  var com_korchagin_presentation_models_PupilModel$stable;
  var com_korchagin_presentation_viewModel_MainViewModel$stable;
  //region block: init
  com_korchagin_presentation_models_BboyModel$stable = 0;
  com_korchagin_presentation_models_ElementModel$stable = 8;
  com_korchagin_presentation_models_Elements$stable = 0;
  com_korchagin_presentation_models_ImageWithText$stable = 8;
  com_korchagin_presentation_models_PupilModel$stable = 8;
  com_korchagin_presentation_viewModel_MainViewModel$stable = 8;
  //endregion
  //region block: exports
  kotlin_io_coil_kt_coil3_coil_network_ktor3.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-presentation_main.js.map
