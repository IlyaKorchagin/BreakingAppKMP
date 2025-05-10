(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui.js', './coil-root-coil-compose-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './coil-root-coil.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui.js'), require('./coil-root-coil-compose-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./coil-root-coil.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'coil-root-coil-compose'.");
    }
    if (typeof globalThis['coil-root-coil-compose-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose'. Its dependency 'coil-root-coil-compose-core' was not found. Please, check whether 'coil-root-coil-compose-core' is loaded prior to 'coil-root-coil-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'coil-root-coil-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'coil-root-coil-compose'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil-compose'.");
    }
    if (typeof globalThis['coil-root-coil'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-compose'. Its dependency 'coil-root-coil' was not found. Please, check whether 'coil-root-coil' is loaded prior to 'coil-root-coil-compose'.");
    }
    globalThis['coil-root-coil-compose'] = factory(typeof globalThis['coil-root-coil-compose'] === 'undefined' ? {} : globalThis['coil-root-coil-compose'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['coil-root-coil-compose-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['coil-root-coil']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui, kotlin_io_coil_kt_coil3_coil_compose_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_io_coil_kt_coil3_coil) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var Companion_getInstance = kotlin_io_coil_kt_coil3_coil_compose_core.$_$.c;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.e7;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var SingletonImageLoader_getInstance = kotlin_io_coil_kt_coil3_coil.$_$.a;
  var get_LocalPlatformContext = kotlin_io_coil_kt_coil3_coil_compose_core.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var AsyncImage = kotlin_io_coil_kt_coil3_coil_compose_core.$_$.a;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  //endregion
  //region block: pre-declaration
  //endregion
  function AsyncImage_0(model, contentDescription, modifier, transform, onState, alignment, contentScale, alpha, colorFilter, filterQuality, clipToBounds, $composer, $changed, $changed1, $default) {
    var modifier_0 = modifier;
    var transform_0 = transform;
    var onState_0 = onState;
    var alignment_0 = alignment;
    var contentScale_0 = contentScale;
    var alpha_0 = alpha;
    var colorFilter_0 = colorFilter;
    var filterQuality_0 = filterQuality;
    var clipToBounds_0 = clipToBounds;
    var $composer_0 = $composer;
    $composer_0.a2v(1976030921);
    if (!(($default & 4) === 0))
      modifier_0 = Companion_instance;
    if (!(($default & 8) === 0))
      transform_0 = Companion_getInstance().ri0_1;
    if (!(($default & 16) === 0))
      onState_0 = null;
    if (!(($default & 32) === 0))
      alignment_0 = Companion_getInstance_0().b7b_1;
    if (!(($default & 64) === 0))
      contentScale_0 = Companion_getInstance_1().p7h_1;
    if (!(($default & 128) === 0))
      alpha_0 = 1.0;
    if (!(($default & 256) === 0))
      colorFilter_0 = null;
    if (!(($default & 512) === 0))
      filterQuality_0 = Companion_getInstance_2().k66_1;
    if (!(($default & 1024) === 0))
      clipToBounds_0 = true;
    if (isTraceInProgress()) {
      traceEventStart(1976030921, $changed, $changed1, 'coil3.compose.AsyncImage (SingletonAsyncImage.kt:117)');
    }
    var tmp = SingletonImageLoader_getInstance();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalPlatformContext();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    AsyncImage(model, contentDescription, tmp.pi0(tmp0), modifier_0, transform_0, onState_0, alignment_0, contentScale_0, alpha_0, colorFilter_0, filterQuality_0, clipToBounds_0, $composer_0, 14 & $changed | 112 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3 | 3670016 & $changed << 3 | 29360128 & $changed << 3 | 234881024 & $changed << 3 | 1879048192 & $changed << 3, 14 & $changed >> 27 | 112 & $changed1 << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b2v();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AsyncImage_0;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-compose.js.map
