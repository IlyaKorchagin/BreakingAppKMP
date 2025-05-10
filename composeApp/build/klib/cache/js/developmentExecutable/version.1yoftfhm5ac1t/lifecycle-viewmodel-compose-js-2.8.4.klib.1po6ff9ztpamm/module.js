(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-compose-ui-ui']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.i;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var protoOf = kotlin_kotlin.$_$.yh;
  var initMetadataForObject = kotlin_kotlin.$_$.wg;
  var toString = kotlin_kotlin.$_$.ci;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var Empty_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.l;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var isInterface = kotlin_kotlin.$_$.gh;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.m;
  var findComposeDefaultViewModelStoreOwner = kotlin_org_jetbrains_compose_ui_ui.$_$.z6;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(LocalViewModelStoreOwner, 'LocalViewModelStoreOwner');
  //endregion
  function _get_LocalViewModelStoreOwner__83z6o0($this) {
    return $this.LocalViewModelStoreOwner_1;
  }
  function LocalViewModelStoreOwner$LocalViewModelStoreOwner$lambda() {
    return null;
  }
  function LocalViewModelStoreOwner() {
    LocalViewModelStoreOwner_instance = this;
    var tmp = this;
    tmp.LocalViewModelStoreOwner_1 = compositionLocalOf(VOID, LocalViewModelStoreOwner$LocalViewModelStoreOwner$lambda);
  }
  protoOf(LocalViewModelStoreOwner).get_current_2iudd5_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-584162872);
    sourceInformation($composer_0, 'C38@1480L7,38@1491L33:LocalViewModelStoreOwner.kt#3tja67');
    if (isTraceInProgress()) {
      traceEventStart(-584162872, $changed, -1, 'androidx.lifecycle.viewmodel.compose.LocalViewModelStoreOwner.<get-current> (LocalViewModelStoreOwner.kt:38)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = this.LocalViewModelStoreOwner_1;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0 == null ? findViewTreeViewModelStoreOwner($composer_0, 0) : tmp0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  };
  protoOf(LocalViewModelStoreOwner).provides_p68z91_k$ = function (viewModelStoreOwner) {
    return this.LocalViewModelStoreOwner_1.provides_3agxel_k$(viewModelStoreOwner);
  };
  var LocalViewModelStoreOwner_instance;
  function LocalViewModelStoreOwner_getInstance() {
    if (LocalViewModelStoreOwner_instance == null)
      new LocalViewModelStoreOwner();
    return LocalViewModelStoreOwner_instance;
  }
  var androidx_lifecycle_viewmodel_compose_LocalViewModelStoreOwner$stable;
  function viewModel(modelClass, viewModelStoreOwner, key, factory, extras, $composer, $changed, $default) {
    var viewModelStoreOwner_0 = viewModelStoreOwner;
    var key_0 = key;
    var factory_0 = factory;
    var extras_0 = extras;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1673618944);
    sourceInformation($composer_0, 'C(viewModel)P(3,4,2,1)*94@4345L7:ViewModel.kt#3tja67');
    if (!(($default & 2) === 0)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var value = LocalViewModelStoreOwner_getInstance().get_current_2iudd5_k$($composer_0, 6);
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.lifecycle.viewmodel.compose.viewModel.<anonymous>' call
          var message = 'No ViewModelStoreOwner was provided via LocalViewModelStoreOwner';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      viewModelStoreOwner_0 = tmp$ret$1;
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (!(($default & 8) === 0))
      factory_0 = null;
    if (!(($default & 16) === 0)) {
      var tmp;
      if (isInterface(viewModelStoreOwner_0, HasDefaultViewModelProviderFactory)) {
        tmp = viewModelStoreOwner_0.get_defaultViewModelCreationExtras_x8sur6_k$();
      } else {
        tmp = Empty_getInstance();
      }
      extras_0 = tmp;
    }
    if (isTraceInProgress()) {
      traceEventStart(1673618944, $changed, -1, 'androidx.lifecycle.viewmodel.compose.viewModel (ViewModel.kt:104)');
    }
    var tmp0 = get(viewModelStoreOwner_0, modelClass, key_0, factory_0, extras_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function get(_this__u8e3s4, modelClass, key, factory, extras) {
    key = key === VOID ? null : key;
    factory = factory === VOID ? null : factory;
    var tmp;
    if (extras === VOID) {
      var tmp_0;
      if (isInterface(_this__u8e3s4, HasDefaultViewModelProviderFactory)) {
        tmp_0 = _this__u8e3s4.get_defaultViewModelCreationExtras_x8sur6_k$();
      } else {
        tmp_0 = Empty_getInstance();
      }
      tmp = tmp_0;
    } else {
      tmp = extras;
    }
    extras = tmp;
    var tmp_1;
    if (!(factory == null)) {
      tmp_1 = Companion_getInstance().create_ltba36_k$(_this__u8e3s4.get_viewModelStore_ryk6ka_k$(), factory, extras);
    } else {
      if (isInterface(_this__u8e3s4, HasDefaultViewModelProviderFactory)) {
        tmp_1 = Companion_getInstance().create_ltba36_k$(_this__u8e3s4.get_viewModelStore_ryk6ka_k$(), _this__u8e3s4.get_defaultViewModelProviderFactory_kajob7_k$(), extras);
      } else {
        tmp_1 = Companion_getInstance().create$default_kyfkyv_k$(_this__u8e3s4);
      }
    }
    var provider = tmp_1;
    var tmp_2;
    if (!(key == null)) {
      tmp_2 = provider.get_2zg3lp_k$(key, modelClass);
    } else {
      tmp_2 = provider.get_1zxqo7_k$(modelClass);
    }
    return tmp_2;
  }
  function findViewTreeViewModelStoreOwner($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1455378108);
    sourceInformation($composer_0, 'C(findViewTreeViewModelStoreOwner)26@1006L39:LocalViewModelStoreOwner.jb.kt#3tja67');
    if (isTraceInProgress()) {
      traceEventStart(-1455378108, $changed, -1, 'androidx.lifecycle.viewmodel.compose.findViewTreeViewModelStoreOwner (LocalViewModelStoreOwner.jb.kt:26)');
    }
    var tmp0 = findComposeDefaultViewModelStoreOwner($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  //region block: init
  androidx_lifecycle_viewmodel_compose_LocalViewModelStoreOwner$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = viewModel;
  _.$_$.b = LocalViewModelStoreOwner_getInstance;
  //endregion
  return _;
}));
