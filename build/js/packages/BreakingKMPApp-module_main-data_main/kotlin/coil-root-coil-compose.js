(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['coil-root-coil-compose'] = factory(typeof globalThis['coil-root-coil-compose'] === 'undefined' ? {} : globalThis['coil-root-coil-compose']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-compose.js.map
