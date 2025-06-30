(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['okio-parent-okio'] = factory(typeof globalThis['okio-parent-okio'] === 'undefined' ? {} : globalThis['okio-parent-okio']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=okio-parent-okio.js.map
