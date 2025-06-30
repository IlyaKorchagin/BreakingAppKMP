(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['firebase-kotlin-sdk-firebase-database'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-database'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-database']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-database.js.map
