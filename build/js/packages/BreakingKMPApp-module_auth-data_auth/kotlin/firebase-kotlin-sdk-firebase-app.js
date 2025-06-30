(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['firebase-kotlin-sdk-firebase-app'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-app']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-app.js.map
