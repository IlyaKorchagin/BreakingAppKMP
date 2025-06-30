(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './coil-root-coil-network-ktor3.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./coil-root-coil-network-ktor3.js'));
  else {
    if (typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp.module_main:data_main'. Its dependency 'coil-root-coil-network-ktor3' was not found. Please, check whether 'coil-root-coil-network-ktor3' is loaded prior to 'BreakingKMPApp.module_main:data_main'.");
    }
    globalThis['BreakingKMPApp.module_main:data_main'] = factory(typeof globalThis['BreakingKMPApp.module_main:data_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp.module_main:data_main'], globalThis['coil-root-coil-network-ktor3']);
  }
}(function (_, kotlin_io_coil_kt_coil3_coil_network_ktor3) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var breakingkmpapp_module_main_data_main_generated_resources_Res_drawable$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_string$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_array$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_plurals$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res_font$stable;
  var breakingkmpapp_module_main_data_main_generated_resources_Res$stable;
  var com_korchagin_data_models_BboyEntry_$serializer$stable;
  var com_korchagin_data_models_BboyEntry$stable;
  var com_korchagin_data_models_ElementEntry_$serializer$stable;
  var com_korchagin_data_models_ElementEntry$stable;
  var com_korchagin_data_models_PupilEntry_$serializer$stable;
  var com_korchagin_data_models_PupilEntry$stable;
  var com_korchagin_data_repository_UserRepositotyImplementation$stable;
  //region block: init
  breakingkmpapp_module_main_data_main_generated_resources_Res_drawable$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_string$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_array$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_plurals$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res_font$stable = 0;
  breakingkmpapp_module_main_data_main_generated_resources_Res$stable = 0;
  com_korchagin_data_models_BboyEntry_$serializer$stable = 8;
  com_korchagin_data_models_BboyEntry$stable = 0;
  com_korchagin_data_models_ElementEntry_$serializer$stable = 8;
  com_korchagin_data_models_ElementEntry$stable = 8;
  com_korchagin_data_models_PupilEntry_$serializer$stable = 8;
  com_korchagin_data_models_PupilEntry$stable = 8;
  com_korchagin_data_repository_UserRepositotyImplementation$stable = 8;
  //endregion
  //region block: exports
  kotlin_io_coil_kt_coil3_coil_network_ktor3.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-data_main.js.map
