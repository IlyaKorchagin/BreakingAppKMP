(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './BreakingKMPApp-module_main-presentation_main.js', './BreakingKMPApp-module_main-data_main.js', './BreakingKMPApp-module_main-domain_main.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./BreakingKMPApp-module_main-presentation_main.js'), require('./BreakingKMPApp-module_main-data_main.js'), require('./BreakingKMPApp-module_main-domain_main.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['BreakingKMPApp-module_main-presentation_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-di_main'. Its dependency 'BreakingKMPApp-module_main-presentation_main' was not found. Please, check whether 'BreakingKMPApp-module_main-presentation_main' is loaded prior to 'BreakingKMPApp-module_main-di_main'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-data_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-di_main'. Its dependency 'BreakingKMPApp-module_main-data_main' was not found. Please, check whether 'BreakingKMPApp-module_main-data_main' is loaded prior to 'BreakingKMPApp-module_main-di_main'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-domain_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-di_main'. Its dependency 'BreakingKMPApp-module_main-domain_main' was not found. Please, check whether 'BreakingKMPApp-module_main-domain_main' is loaded prior to 'BreakingKMPApp-module_main-di_main'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_main-di_main'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_main-di_main'.");
    }
    globalThis['BreakingKMPApp-module_main-di_main'] = factory(typeof globalThis['BreakingKMPApp-module_main-di_main'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_main-di_main'], globalThis['BreakingKMPApp-module_main-presentation_main'], globalThis['BreakingKMPApp-module_main-data_main'], globalThis['BreakingKMPApp-module_main-domain_main'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_BreakingKMPApp_module_main_presentation_main, kotlin_BreakingKMPApp_module_main_data_main, kotlin_BreakingKMPApp_module_main_domain_main, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var get_mainPresentationModule = kotlin_BreakingKMPApp_module_main_presentation_main.$_$.a;
  var get_mainDataRepositoryModule = kotlin_BreakingKMPApp_module_main_data_main.$_$.a;
  var get_mainDomainModule = kotlin_BreakingKMPApp_module_main_domain_main.$_$.a;
  var listOf = kotlin_kotlin.$_$.da;
  //endregion
  //region block: pre-declaration
  //endregion
  function getMainModules() {
    return listOf([get_mainPresentationModule(), get_mainDataRepositoryModule(), get_mainDomainModule()]);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getMainModules;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_main-di_main.js.map
