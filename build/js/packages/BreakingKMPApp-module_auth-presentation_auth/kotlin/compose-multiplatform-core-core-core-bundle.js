(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['compose-multiplatform-core-core-core-bundle'] = factory(typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-core-core-bundle']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-core-core-bundle.js.map
