(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './BreakingKMPApp-module_auth-presentation_auth.js', './BreakingKMPApp-module_auth-data_auth.js', './BreakingKMPApp-module_auth-domain_auth.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./BreakingKMPApp-module_auth-presentation_auth.js'), require('./BreakingKMPApp-module_auth-data_auth.js'), require('./BreakingKMPApp-module_auth-domain_auth.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['BreakingKMPApp-module_auth-presentation_auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-di_auth'. Its dependency 'BreakingKMPApp-module_auth-presentation_auth' was not found. Please, check whether 'BreakingKMPApp-module_auth-presentation_auth' is loaded prior to 'BreakingKMPApp-module_auth-di_auth'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_auth-data_auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-di_auth'. Its dependency 'BreakingKMPApp-module_auth-data_auth' was not found. Please, check whether 'BreakingKMPApp-module_auth-data_auth' is loaded prior to 'BreakingKMPApp-module_auth-di_auth'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_auth-domain_auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-di_auth'. Its dependency 'BreakingKMPApp-module_auth-domain_auth' was not found. Please, check whether 'BreakingKMPApp-module_auth-domain_auth' is loaded prior to 'BreakingKMPApp-module_auth-di_auth'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-di_auth'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_auth-di_auth'.");
    }
    globalThis['BreakingKMPApp-module_auth-di_auth'] = factory(typeof globalThis['BreakingKMPApp-module_auth-di_auth'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_auth-di_auth'], globalThis['BreakingKMPApp-module_auth-presentation_auth'], globalThis['BreakingKMPApp-module_auth-data_auth'], globalThis['BreakingKMPApp-module_auth-domain_auth'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_BreakingKMPApp_module_auth_presentation_auth, kotlin_BreakingKMPApp_module_auth_data_auth, kotlin_BreakingKMPApp_module_auth_domain_auth, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var get_authPresentationModule = kotlin_BreakingKMPApp_module_auth_presentation_auth.$_$.a;
  var get_authDataRepositoryModule = kotlin_BreakingKMPApp_module_auth_data_auth.$_$.a;
  var get_authDomainModule = kotlin_BreakingKMPApp_module_auth_domain_auth.$_$.a;
  var listOf = kotlin_kotlin.$_$.da;
  //endregion
  //region block: pre-declaration
  //endregion
  function getAuthModules() {
    return listOf([get_authPresentationModule(), get_authDataRepositoryModule(), get_authDomainModule()]);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getAuthModules;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_auth-di_auth.js.map
