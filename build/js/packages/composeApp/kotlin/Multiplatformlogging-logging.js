(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['Multiplatformlogging-logging'] = factory(typeof globalThis['Multiplatformlogging-logging'] === 'undefined' ? {} : globalThis['Multiplatformlogging-logging']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Multiplatformlogging-logging.js.map
