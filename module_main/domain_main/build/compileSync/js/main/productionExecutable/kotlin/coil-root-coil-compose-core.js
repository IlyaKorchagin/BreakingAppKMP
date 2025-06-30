(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['coil-root-coil-compose-core'] = factory(typeof globalThis['coil-root-coil-compose-core'] === 'undefined' ? {} : globalThis['coil-root-coil-compose-core']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var coil3_compose_AsyncImagePainter_Input$stable;
  var coil3_compose_AsyncImagePainter_State_Empty$stable;
  var coil3_compose_AsyncImagePainter_State_Loading$stable;
  var coil3_compose_AsyncImagePainter_State_Success$stable;
  var coil3_compose_AsyncImagePainter_State_Error$stable;
  var coil3_compose_AsyncImagePainter$stable;
  var coil3_compose_ConstraintsSizeResolver$stable;
  var coil3_compose_ImagePainter$stable;
  var coil3_compose_internal_ContentPainterElement$stable;
  var coil3_compose_internal_ContentPainterNode$stable;
  var coil3_compose_internal_CrossfadePainter$stable;
  //region block: init
  coil3_compose_AsyncImagePainter_Input$stable = 0;
  coil3_compose_AsyncImagePainter_State_Empty$stable = 0;
  coil3_compose_AsyncImagePainter_State_Loading$stable = 8;
  coil3_compose_AsyncImagePainter_State_Success$stable = 8;
  coil3_compose_AsyncImagePainter_State_Error$stable = 8;
  coil3_compose_AsyncImagePainter$stable = 0;
  coil3_compose_ConstraintsSizeResolver$stable = 0;
  coil3_compose_ImagePainter$stable = 8;
  coil3_compose_internal_ContentPainterElement$stable = 0;
  coil3_compose_internal_ContentPainterNode$stable = 8;
  coil3_compose_internal_CrossfadePainter$stable = 0;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-compose-core.js.map
