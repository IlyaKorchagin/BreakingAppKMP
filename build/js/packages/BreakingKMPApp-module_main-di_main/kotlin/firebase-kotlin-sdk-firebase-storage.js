(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['firebase-kotlin-sdk-firebase-storage'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-storage'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-storage']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-storage.js.map
