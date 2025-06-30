(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['projects-compose-koin-compose'] = factory(typeof globalThis['projects-compose-koin-compose'] === 'undefined' ? {} : globalThis['projects-compose-koin-compose']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=projects-compose-koin-compose.js.map
