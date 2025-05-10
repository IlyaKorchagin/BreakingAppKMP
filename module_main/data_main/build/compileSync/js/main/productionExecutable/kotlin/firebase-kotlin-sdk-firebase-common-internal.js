(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['firebase-kotlin-sdk-firebase-common-internal'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-common-internal'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-common-internal']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-common-internal.js.map
