(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['coil-root-coil'] = factory(typeof globalThis['coil-root-coil'] === 'undefined' ? {} : globalThis['coil-root-coil']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil.js.map
