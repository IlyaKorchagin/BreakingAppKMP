(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['compose-multiplatform-core-navigation-navigation-runtime'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-runtime']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-runtime.js.map
