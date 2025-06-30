(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['firebase-kotlin-sdk-firebase-firestore'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-firestore'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-firestore']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
