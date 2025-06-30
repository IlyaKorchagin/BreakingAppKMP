(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-core-core-uri.js', './compose-multiplatform-core-core-core-bundle.js', './kotlinx-coroutines-core.js', './kotlinx-serialization-kotlinx-serialization-core.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-runtime.js', './compose-multiplatform-core-savedstate-savedstate.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-core-core-uri.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-runtime.js'), require('./compose-multiplatform-core-savedstate-savedstate.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-uri'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-core-core-uri' was not found. Please, check whether 'compose-multiplatform-core-core-core-uri' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-runtime' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-runtime' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-savedstate-savedstate' was not found. Please, check whether 'compose-multiplatform-core-savedstate-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-common'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-core-core-uri'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'], globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_core_core_uri, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime, kotlin_org_jetbrains_androidx_savedstate_savedstate, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var Companion_getInstance = kotlin_kotlin.$_$.v5;
  var toString = kotlin_kotlin.$_$.cm;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var checkIndexOverflow = kotlin_kotlin.$_$.p7;
  var UriUtils_instance = kotlin_org_jetbrains_androidx_core_core_uri.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.ek;
  var listOf = kotlin_kotlin.$_$.ca;
  var bundleOf = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.b;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.n1;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var take = kotlin_kotlin.$_$.kb;
  var emptyList = kotlin_kotlin.$_$.o8;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var Comparable = kotlin_kotlin.$_$.zj;
  var StringBuilder = kotlin_kotlin.$_$.eh;
  var contains = kotlin_kotlin.$_$.hh;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var firstOrNull = kotlin_kotlin.$_$.v8;
  var to = kotlin_kotlin.$_$.dm;
  var replace = kotlin_kotlin.$_$.hi;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.k;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var lazy = kotlin_kotlin.$_$.ql;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.m;
  var lazy_0 = kotlin_kotlin.$_$.pl;
  var addAll = kotlin_kotlin.$_$.g7;
  var plus = kotlin_kotlin.$_$.qa;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var hashCode = kotlin_kotlin.$_$.xd;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var emptySet = kotlin_kotlin.$_$.q8;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var plus_0 = kotlin_kotlin.$_$.ra;
  var Collection = kotlin_kotlin.$_$.q6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var lastOrNull = kotlin_kotlin.$_$.v9;
  var plus_1 = kotlin_kotlin.$_$.oa;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var minus = kotlin_kotlin.$_$.ia;
  var Enum = kotlin_kotlin.$_$.bk;
  var first = kotlin_kotlin.$_$.y8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var toMap = kotlin_kotlin.$_$.tb;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var equals = kotlin_kotlin.$_$.od;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var AbstractSavedStateViewModelFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.a;
  var AbstractSavedStateViewModelFactory_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.g;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var Companion_getInstance_0 = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.l;
  var getKClass = kotlin_kotlin.$_$.g;
  var create = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var LifecycleRegistry_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime.$_$.a;
  var Companion_instance = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.b;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var Bundle_init_$Create$_0 = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.c;
  var enableSavedStateHandles = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.f;
  var MutableCreationExtras_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var get_SAVED_STATE_REGISTRY_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.c;
  var get_VIEW_MODEL_STORE_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.d;
  var get_DEFAULT_ARGS_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.b;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  var Default_getInstance = kotlin_kotlin.$_$.s5;
  var toByte = kotlin_kotlin.$_$.gf;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var toHexString = kotlin_kotlin.$_$.aj;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var KtMap = kotlin_kotlin.$_$.y6;
  var toString_1 = kotlin_kotlin.$_$.ij;
  var generateSequence = kotlin_kotlin.$_$.vg;
  var isBlank = kotlin_kotlin.$_$.vh;
  var MutableCollection = kotlin_kotlin.$_$.z6;
  var asSequence = kotlin_kotlin.$_$.l7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.v2;
  var mapCapacity = kotlin_kotlin.$_$.ea;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var SparseArrayCompat = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.n;
  var maxOrNull = kotlin_kotlin.$_$.ga;
  var listOfNotNull = kotlin_kotlin.$_$.ba;
  var valueIterator = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.x;
  var asSequence_0 = kotlin_kotlin.$_$.rg;
  var equals_0 = kotlin_kotlin.$_$.oh;
  var Iterable = kotlin_kotlin.$_$.t6;
  var removeSuffix = kotlin_kotlin.$_$.ei;
  var asSequence_1 = kotlin_kotlin.$_$.m7;
  var map = kotlin_kotlin.$_$.yg;
  var filterNotNull = kotlin_kotlin.$_$.tg;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavType, 'NavType');
  initMetadataForClass(CollectionNavType, 'CollectionNavType', VOID, NavType);
  initMetadataForInterface(FloatingWindow, 'FloatingWindow');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ParamQuery, 'ParamQuery', ParamQuery);
  initMetadataForClass(MimeType, 'MimeType', VOID, VOID, [Comparable]);
  initMetadataForClass(Builder, 'Builder', Builder_init_$Create$);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(NavDeepLink, 'NavDeepLink');
  initMetadataForClass(PopUpToBuilder, 'PopUpToBuilder', PopUpToBuilder);
  initMetadataForClass(NavigatorState, 'NavigatorState');
  initMetadataForClass(ParamType, 'ParamType', VOID, Enum);
  initMetadataForClass(RouteBuilder, 'RouteBuilder');
  initMetadataForClass(RouteEncoder, 'RouteEncoder', VOID, AbstractEncoder);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(NavResultSavedStateFactory, 'NavResultSavedStateFactory', VOID, AbstractSavedStateViewModelFactory);
  initMetadataForClass(SavedStateViewModel, 'SavedStateViewModel', VOID, ViewModel);
  initMetadataForClass(NavBackStackEntry$defaultViewModelProviderFactory$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(NavBackStackEntry, 'NavBackStackEntry', VOID, VOID, [HasDefaultViewModelProviderFactory]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Builder_0, 'Builder');
  initMetadataForClass(NavDeepLinkRequest, 'NavDeepLinkRequest');
  initMetadataForClass(DeepLinkMatch, 'DeepLinkMatch', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(NavDestination, 'NavDestination');
  initMetadataForClass(NavDestinationBuilder, 'NavDestinationBuilder');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(NavGraph$iterator$1);
  initMetadataForClass(NavGraph, 'NavGraph', VOID, NavDestination, [NavDestination, Iterable]);
  initMetadataForClass(NavGraphBuilder, 'NavGraphBuilder', VOID, NavDestinationBuilder);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Navigator, 'Navigator');
  initMetadataForClass(NavGraphNavigator, 'NavGraphNavigator', VOID, Navigator);
  initMetadataForClass(Builder_1, 'Builder', Builder_1);
  initMetadataForClass(NavOptions, 'NavOptions');
  initMetadataForClass(NavOptionsBuilder, 'NavOptionsBuilder', NavOptionsBuilder);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(NavigatorProvider, 'NavigatorProvider', NavigatorProvider);
  initMetadataForClass(Lock, 'Lock', Lock);
  //endregion
  function CollectionNavType() {
  }
  function FloatingWindow() {
  }
  function missingRequiredArguments(_this__u8e3s4, isArgumentMissing) {
    // Inline function 'kotlin.collections.filterValues' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.a1().m();
    while (tmp0_iterator.n()) {
      var entry = tmp0_iterator.o();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      var it = entry.c1();
      var tmp;
      if (!ensureNotNull(it == null ? null : it.v50_1)) {
        tmp = !it.w50_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        result.k2(entry.b1(), entry.c1());
      }
    }
    var requiredArgumentKeys = result.o2();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_0 = requiredArgumentKeys.m();
    while (tmp0_iterator_0.n()) {
      var element = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      if (isArgumentMissing(element)) {
        destination.e(element);
      }
    }
    return destination;
  }
  function Builder_init_$Init$($this) {
    Builder.call($this);
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function _get_pathPattern__sckhty($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.e51_1;
    pathPattern$factory();
    return this_0.c1();
  }
  function _get_isParameterizedQuery__xqgc1a($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.f51_1;
    isParameterizedQuery$factory();
    return this_0.c1();
  }
  function _get_queryArgsMap__wndpo($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.g51_1;
    queryArgsMap$factory();
    return this_0.c1();
  }
  function _get_fragArgsAndRegex__re1vcc($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.i51_1;
    fragArgsAndRegex$factory();
    return this_0.c1();
  }
  function _get_fragArgs__u59k8s($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.j51_1;
    fragArgs$factory();
    return this_0.c1();
  }
  function _get_fragRegex__izdpx8($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.k51_1;
    fragRegex$factory();
    return this_0.c1();
  }
  function _get_fragPattern__jm7xn7($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.l51_1;
    fragPattern$factory();
    return this_0.c1();
  }
  function buildRegex($this, uri, args, uriRegex) {
    var result = Companion_getInstance_2().q51_1.ce(uri);
    var appendPos = 0;
    while (!(result == null)) {
      var argName = ensureNotNull(result.ve().u(1)).ie_1;
      args.e(argName);
      if (result.he().i1_1 > appendPos) {
        var tmp = Companion_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex = appendPos;
        var endIndex = result.he().i1_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = uri.substring(startIndex, endIndex);
        uriRegex.v8(tmp.xd(tmp$ret$1));
      }
      uriRegex.v8('([^/]*?|)');
      appendPos = result.he().j1_1 + 1 | 0;
      result = result.o();
    }
    if (appendPos < uri.length) {
      var tmp_0 = Companion_getInstance();
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = appendPos;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = uri.substring(startIndex_0);
      uriRegex.v8(tmp_0.xd(tmp$ret$3));
    }
  }
  function getMatchingUriFragment($this, fragment, bundle, arguments_0) {
    var tmp0_safe_receiver = _get_fragPattern__jm7xn7($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fe(toString(fragment));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var result = tmp;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = _get_fragArgs__u59k8s($this);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_safe_receiver_0 = result.ve().u(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ie_1;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingUriFragment.<anonymous>.<anonymous>' call
        tmp_0 = UriUtils_instance.x4h(tmp1_safe_receiver);
      }
      var tmp0_elvis_lhs = tmp_0;
      var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var argument = arguments_0.s2(item);
      try {
        parseArgument($this, bundle, item, value, argument);
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          return Unit_instance;
        } else {
          throw $p;
        }
      }
      destination.e(Unit_instance);
    }
  }
  function getMatchingPathArguments($this, result, bundle, arguments_0) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = $this.c51_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_safe_receiver = result.ve().u(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ie_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingPathArguments.<anonymous>.<anonymous>' call
        tmp = UriUtils_instance.x4h(tmp1_safe_receiver);
      }
      var tmp0_elvis_lhs = tmp;
      var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var argument = arguments_0.s2(item);
      try {
        parseArgument($this, bundle, item, value, argument);
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          return false;
        } else {
          throw $p;
        }
      }
      destination.e(Unit_instance);
    }
    return true;
  }
  function getMatchingQueryArguments($this, deepLink, bundle, arguments_0) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _get_queryArgsMap__wndpo($this).a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavDeepLink.getMatchingQueryArguments.<anonymous>' call
      var paramName = element.b1();
      var storedParam = element.c1();
      var inputParams = deepLink.d4i(paramName);
      if ($this.h51_1) {
        var argValue = deepLink.c4i();
        if (!(argValue == null) && !(argValue === deepLink.toString())) {
          inputParams = listOf(argValue);
        }
      }
      var parseSuccess = parseInputParams($this, inputParams, storedParam, bundle, arguments_0);
      if (!parseSuccess)
        return false;
    }
    return true;
  }
  function parseInputParams($this, inputParams, storedParam, bundle, arguments_0) {
    var tempBundle = bundleOf([]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = storedParam.u51_1.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
      var argument = arguments_0.s2(element);
      var navType = argument == null ? null : argument.u50_1;
      var tmp;
      if (navType instanceof CollectionNavType) {
        tmp = !argument.w50_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        navType.w51(tempBundle, element, navType.t50());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = inputParams.m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
      var tmp0_safe_receiver = storedParam.t51_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
        tmp_0 = Regex_init_$Create$(tmp0_safe_receiver).fe(element_0);
      }
      var argMatchResult = tmp_0;
      if (argMatchResult == null) {
        return false;
      }
      // Inline function 'kotlin.collections.mapIndexed' call
      var this_0 = storedParam.u51_1;
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var index = 0;
      var tmp0_iterator_1 = this_0.m();
      while (tmp0_iterator_1.n()) {
        var item = tmp0_iterator_1.o();
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var index_0 = checkIndexOverflow(tmp1);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_safe_receiver_0 = argMatchResult.ve().u(index_0 + 1 | 0);
        var tmp0_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ie_1;
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var argument_0 = arguments_0.s2(item);
        var tmp_1;
        try {
          var tmp_2;
          if (!tempBundle.r4c(item)) {
            parseArgument($this, tempBundle, item, value, argument_0);
            tmp_2 = Unit_instance;
          } else {
            tmp_2 = parseArgumentForRepeatedParam($this, tempBundle, item, value, argument_0);
          }
          tmp_1 = tmp_2;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof IllegalArgumentException) {
            var e = $p;
            tmp_3 = Unit_instance;
          } else {
            throw $p;
          }
          tmp_1 = tmp_3;
        }
        var tmp$ret$3 = tmp_1;
        destination.e(tmp$ret$3);
      }
    }
    bundle.u4c(tempBundle);
    return true;
  }
  function parseArgument($this, bundle, name, value, argument) {
    if (!(argument == null)) {
      var type = argument.u50_1;
      type.x51(bundle, name, value);
    } else {
      bundle.d4d(name, value);
    }
  }
  function parseArgumentForRepeatedParam($this, bundle, name, value, argument) {
    if (!bundle.r4c(name)) {
      return true;
    }
    if (!(argument == null)) {
      var type = argument.u50_1;
      var previousValue = type.y51(bundle, name);
      type.z51(bundle, name, value, previousValue);
    }
    return false;
  }
  function ParamQuery() {
    this.t51_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u51_1 = ArrayList_init_$Create$();
  }
  protoOf(ParamQuery).a52 = function (name) {
    this.u51_1.e(name);
  };
  function MimeType(mimeType) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = Regex_init_$Create$('/').ge(mimeType, 0);
      if (!this_0.j()) {
        var iterator = this_0.w(this_0.p());
        while (iterator.d5()) {
          // Inline function 'androidx.navigation.MimeType.<anonymous>' call
          // Inline function 'kotlin.text.isEmpty' call
          var this_1 = iterator.f5();
          if (!(charSequenceLength(this_1) === 0)) {
            tmp$ret$4 = take(this_0, iterator.e5() + 1 | 0);
            break $l$block;
          }
        }
      }
      tmp$ret$4 = emptyList();
    }
    var typeAndSubType = tmp$ret$4;
    this.b52_1 = typeAndSubType.u(0);
    this.c52_1 = typeAndSubType.u(1);
  }
  protoOf(MimeType).d52 = function (other) {
    var result = 0;
    if (this.b52_1 === other.b52_1) {
      result = result + 2 | 0;
    }
    if (this.c52_1 === other.c52_1) {
      result = result + 1 | 0;
    }
    return result;
  };
  protoOf(MimeType).d = function (other) {
    return this.d52(other instanceof MimeType ? other : THROW_CCE());
  };
  protoOf(Builder).h52 = function (uriPattern) {
    this.e52_1 = uriPattern;
    return this;
  };
  protoOf(Builder).a2u = function () {
    return new NavDeepLink(this.e52_1, this.f52_1, this.g52_1);
  };
  function Builder() {
    this.e52_1 = null;
    this.f52_1 = null;
    this.g52_1 = null;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.p51_1 = Regex_init_$Create$('^[a-zA-Z]+[+\\w\\-.]*:');
    this.q51_1 = Regex_init_$Create$('\\{(.+?)\\}');
    this.r51_1 = Regex_init_$Create$('^[^?#]+\\?([^#]*).*');
    this.s51_1 = '([\\s\\S]+?)?';
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function parsePath($this) {
    if ($this.z50_1 == null)
      return Unit_instance;
    var uriRegex = new StringBuilder('^');
    if (!Companion_getInstance_2().p51_1.be($this.z50_1)) {
      uriRegex.v8('http[s]?://');
    }
    var tmp0_safe_receiver = Regex_init_$Create$('(\\?|#|$)').ce($this.z50_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavDeepLink.parsePath.<anonymous>' call
      // Inline function 'kotlin.text.substring' call
      var this_0 = $this.z50_1;
      var endIndex = tmp0_safe_receiver.he().i1_1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this_0.substring(0, endIndex);
      buildRegex($this, tmp$ret$1, $this.c51_1, uriRegex);
      $this.o51_1 = (!contains(uriRegex, '.*') && !contains(uriRegex, '([^/]+?)'));
      uriRegex.v8('($|(\\?(.)*)|(#(.)*))');
    }
    $this.d51_1 = saveWildcardInRegex(uriRegex.toString(), $this);
  }
  function parseQuery($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var paramArgMap = LinkedHashMap_init_$Create$();
    if (!_get_isParameterizedQuery__xqgc1a($this))
      return paramArgMap;
    var uri = UriUtils_instance.co(ensureNotNull($this.z50_1));
    var tmp0_iterator = uri.e4i().m();
    while (tmp0_iterator.n()) {
      var paramName = tmp0_iterator.o();
      var argRegex = StringBuilder_init_$Create$();
      var queryParams = uri.d4i(paramName);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(queryParams.p() <= 1)) {
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        var message = 'Query parameter ' + paramName + ' must only be present once in ' + $this.z50_1 + '. ' + 'To support repeated query parameters, use an array type for your ' + 'argument and the pattern provided in your URI will be used to ' + 'parse each query parameter instance.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      var tmp1_elvis_lhs = firstOrNull(queryParams);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        $this.h51_1 = true;
        tmp = paramName;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var queryParam = tmp;
      var result = Companion_getInstance_2().q51_1.ce(queryParam);
      var appendPos = 0;
      var param = new ParamQuery();
      while (!(result == null)) {
        param.a52(ensureNotNull(result.ve().u(1)).ie_1);
        if (result.he().i1_1 > appendPos) {
          // Inline function 'kotlin.text.substring' call
          var startIndex = appendPos;
          var endIndex = result.he().i1_1;
          // Inline function 'kotlin.js.asDynamic' call
          var inputLiteral = queryParam.substring(startIndex, endIndex);
          argRegex.v8(Companion_getInstance().xd(inputLiteral));
        }
        argRegex.v8('([\\s\\S]+?)?');
        appendPos = result.he().j1_1 + 1 | 0;
        result = result.o();
      }
      if (appendPos < queryParam.length) {
        var tmp_0 = Companion_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = appendPos;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = queryParam.substring(startIndex_0);
        argRegex.v8(tmp_0.xd(tmp$ret$6));
      }
      argRegex.v8('$');
      param.t51_1 = saveWildcardInRegex(argRegex.toString(), $this);
      // Inline function 'kotlin.collections.set' call
      paramArgMap.k2(paramName, param);
    }
    return paramArgMap;
  }
  function parseFragment($this) {
    if ($this.z50_1 == null || UriUtils_instance.co($this.z50_1).b4i() == null)
      return null;
    // Inline function 'kotlin.collections.mutableListOf' call
    var fragArgs = ArrayList_init_$Create$();
    var fragment = UriUtils_instance.co($this.z50_1).b4i();
    var fragRegex = StringBuilder_init_$Create$();
    buildRegex($this, ensureNotNull(fragment), fragArgs, fragRegex);
    return to(fragArgs, fragRegex.toString());
  }
  function parseMime($this) {
    if ($this.b51_1 == null)
      return Unit_instance;
    var mimeTypePattern = Regex_init_$Create$('^[\\s\\S]+/[\\s\\S]+$');
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!mimeTypePattern.ae($this.b51_1)) {
      // Inline function 'androidx.navigation.NavDeepLink.parseMime.<anonymous>' call
      var message = 'The given mimeType ' + $this.b51_1 + ' does not match to required "type/subtype" format';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var splitMimeType = new MimeType($this.b51_1);
    var regex = '^(' + splitMimeType.b52_1 + '|[*]+)/(' + splitMimeType.c52_1 + '|[*]+)$';
    $this.m51_1 = replace(regex, '*|[*]', '[\\s\\S]');
  }
  function saveWildcardInRegex(_this__u8e3s4, $this) {
    return contains(_this__u8e3s4, '\\Q') && contains(_this__u8e3s4, '\\E') ? replace(_this__u8e3s4, '.*', '\\E.*\\Q') : contains(_this__u8e3s4, '\\.\\*') ? replace(_this__u8e3s4, '\\.\\*', '.*') : _this__u8e3s4;
  }
  function NavDeepLink$pathPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.d51_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.pathPattern$delegate.<anonymous>.<anonymous>' call
        tmp = Regex_init_$Create$_0(tmp0_safe_receiver, RegexOption_IGNORE_CASE_getInstance());
      }
      return tmp;
    };
  }
  function NavDeepLink$isParameterizedQuery$delegate$lambda(this$0) {
    return function () {
      return !(this$0.z50_1 == null) && Companion_getInstance_2().r51_1.ae(this$0.z50_1);
    };
  }
  function NavDeepLink$queryArgsMap$delegate$lambda(this$0) {
    return function () {
      return parseQuery(this$0);
    };
  }
  function NavDeepLink$fragArgsAndRegex$delegate$lambda(this$0) {
    return function () {
      return parseFragment(this$0);
    };
  }
  function NavDeepLink$fragArgs$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragArgsAndRegex__re1vcc(this$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jb_1;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp = ArrayList_init_$Create$();
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function NavDeepLink$fragRegex$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragArgsAndRegex__re1vcc(this$0);
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kb_1;
    };
  }
  function NavDeepLink$fragPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragRegex__izdpx8(this$0);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.fragPattern$delegate.<anonymous>.<anonymous>' call
        tmp = Regex_init_$Create$_0(tmp0_safe_receiver, RegexOption_IGNORE_CASE_getInstance());
      }
      return tmp;
    };
  }
  function NavDeepLink$mimeTypePattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.m51_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.mimeTypePattern$delegate.<anonymous>.<anonymous>' call
        tmp = Regex_init_$Create$(tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function NavDeepLink$getMatchingArguments$lambda($bundle) {
    return function (argName) {
      return !$bundle.r4c(argName);
    };
  }
  function NavDeepLink(uriPattern, action, mimeType) {
    Companion_getInstance_2();
    this.z50_1 = uriPattern;
    this.a51_1 = action;
    this.b51_1 = mimeType;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c51_1 = ArrayList_init_$Create$();
    this.d51_1 = null;
    var tmp_0 = this;
    tmp_0.e51_1 = lazy(NavDeepLink$pathPattern$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.f51_1 = lazy(NavDeepLink$isParameterizedQuery$delegate$lambda(this));
    var tmp_2 = this;
    var tmp_3 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_2.g51_1 = lazy_0(tmp_3, NavDeepLink$queryArgsMap$delegate$lambda(this));
    this.h51_1 = false;
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_4.i51_1 = lazy_0(tmp_5, NavDeepLink$fragArgsAndRegex$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_6.j51_1 = lazy_0(tmp_7, NavDeepLink$fragArgs$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_8.k51_1 = lazy_0(tmp_9, NavDeepLink$fragRegex$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.l51_1 = lazy(NavDeepLink$fragPattern$delegate$lambda(this));
    this.m51_1 = null;
    var tmp_11 = this;
    tmp_11.n51_1 = lazy(NavDeepLink$mimeTypePattern$delegate$lambda(this));
    this.o51_1 = false;
    parsePath(this);
    parseMime(this);
  }
  protoOf(NavDeepLink).i52 = function () {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = _get_queryArgsMap__wndpo(this).p2();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavDeepLink.<get-argumentsNames>.<anonymous>' call
      var list = element.u51_1;
      addAll(destination, list);
    }
    return plus(plus(this.c51_1, destination), _get_fragArgs__u59k8s(this));
  };
  protoOf(NavDeepLink).j52 = function (deepLink, arguments_0) {
    var tmp0_safe_receiver = _get_pathPattern__sckhty(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fe(deepLink.toString());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var result = tmp;
    var bundle = Bundle_init_$Create$();
    if (!getMatchingPathArguments(this, result, bundle, arguments_0))
      return null;
    if (_get_isParameterizedQuery__xqgc1a(this) && !getMatchingQueryArguments(this, deepLink, bundle, arguments_0)) {
      return null;
    }
    getMatchingUriFragment(this, deepLink.b4i(), bundle, arguments_0);
    var missingRequiredArguments_0 = missingRequiredArguments(arguments_0, NavDeepLink$getMatchingArguments$lambda(bundle));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingRequiredArguments_0.j())
      return null;
    return bundle;
  };
  protoOf(NavDeepLink).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavDeepLink);
    }
    if (tmp)
      return false;
    return this.z50_1 == other.z50_1 && this.a51_1 == other.a51_1 && this.b51_1 == other.b51_1;
  };
  protoOf(NavDeepLink).hashCode = function () {
    var result = 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.z50_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.a51_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.b51_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    return result;
  };
  function pathPattern$factory() {
    return getPropertyCallableRef('pathPattern', 1, KProperty1, function (receiver) {
      return _get_pathPattern__sckhty(receiver);
    }, null);
  }
  function isParameterizedQuery$factory() {
    return getPropertyCallableRef('isParameterizedQuery', 1, KProperty1, function (receiver) {
      return _get_isParameterizedQuery__xqgc1a(receiver);
    }, null);
  }
  function queryArgsMap$factory() {
    return getPropertyCallableRef('queryArgsMap', 1, KProperty1, function (receiver) {
      return _get_queryArgsMap__wndpo(receiver);
    }, null);
  }
  function fragArgsAndRegex$factory() {
    return getPropertyCallableRef('fragArgsAndRegex', 1, KProperty1, function (receiver) {
      return _get_fragArgsAndRegex__re1vcc(receiver);
    }, null);
  }
  function fragArgs$factory() {
    return getPropertyCallableRef('fragArgs', 1, KProperty1, function (receiver) {
      return _get_fragArgs__u59k8s(receiver);
    }, null);
  }
  function fragRegex$factory() {
    return getPropertyCallableRef('fragRegex', 1, KProperty1, function (receiver) {
      return _get_fragRegex__izdpx8(receiver);
    }, null);
  }
  function fragPattern$factory() {
    return getPropertyCallableRef('fragPattern', 1, KProperty1, function (receiver) {
      return _get_fragPattern__jm7xn7(receiver);
    }, null);
  }
  function navOptions(optionsBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavOptionsBuilder();
    // Inline function 'kotlin.contracts.contract' call
    optionsBuilder(this_0);
    return this_0.t52();
  }
  function PopUpToBuilder() {
    this.u52_1 = false;
    this.v52_1 = false;
  }
  function NavigatorState() {
    this.w52_1 = new Lock();
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.x52_1 = MutableStateFlow(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$1 = emptySet();
    tmp_0.y52_1 = MutableStateFlow(tmp$ret$1);
    this.z52_1 = false;
    this.a53_1 = asStateFlow(this.x52_1);
    this.b53_1 = asStateFlow(this.y52_1);
  }
  protoOf(NavigatorState).c53 = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.w52_1;
    this.x52_1.a1y(plus_0(this.x52_1.c1(), backStackEntry));
  };
  protoOf(NavigatorState).d53 = function (backStackEntry) {
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.y52_1.c1();
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.j();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavigatorState.pushWithTransition.<anonymous>' call
        if (element === backStackEntry) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var this_1 = this.a53_1.c1();
        var tmp_1;
        if (isInterface(this_1, Collection)) {
          tmp_1 = this_1.j();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var tmp0_iterator_0 = this_1.m();
        while (tmp0_iterator_0.n()) {
          var element_0 = tmp0_iterator_0.o();
          // Inline function 'androidx.navigation.NavigatorState.pushWithTransition.<anonymous>' call
          if (element_0 === backStackEntry) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
        }
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    var previousEntry = lastOrNull(this.a53_1.c1());
    if (!(previousEntry == null)) {
      this.y52_1.a1y(plus_1(this.y52_1.c1(), previousEntry));
    }
    this.y52_1.a1y(plus_1(this.y52_1.c1(), backStackEntry));
    this.c53(backStackEntry);
  };
  protoOf(NavigatorState).f53 = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.w52_1;
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = this.x52_1.c1();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.m();
    $l$loop: while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavigatorState.pop.<anonymous>.<anonymous>' call
      if (!!item.equals(popUpTo))
        break $l$loop;
      list.e(item);
    }
    this.x52_1.a1y(list);
  };
  protoOf(NavigatorState).g53 = function (popUpTo, saveState) {
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.y52_1.c1();
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.j();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (element === popUpTo) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var this_1 = this.a53_1.c1();
        var tmp_1;
        if (isInterface(this_1, Collection)) {
          tmp_1 = this_1.j();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
        var tmp0_iterator_0 = this_1.m();
        while (tmp0_iterator_0.n()) {
          var element_0 = tmp0_iterator_0.o();
          // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
          if (element_0 === popUpTo) {
            tmp$ret$2 = false;
            break $l$block_2;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    this.y52_1.a1y(plus_1(this.y52_1.c1(), popUpTo));
    var tmp$ret$5;
    $l$block_3: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_2 = this.a53_1.c1();
      var iterator = this_2.w(this_2.p());
      while (iterator.d5()) {
        var element_1 = iterator.f5();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (!element_1.equals(popUpTo) && this.a53_1.c1().h2(element_1) < this.a53_1.c1().h2(popUpTo)) {
          tmp$ret$5 = element_1;
          break $l$block_3;
        }
      }
      tmp$ret$5 = null;
    }
    var incomingEntry = tmp$ret$5;
    if (!(incomingEntry == null)) {
      this.y52_1.a1y(plus_1(this.y52_1.c1(), incomingEntry));
    }
    this.f53(popUpTo, saveState);
  };
  protoOf(NavigatorState).h53 = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.w52_1;
    var tempStack = toMutableList(this.a53_1.c1());
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tempStack.w(tempStack.p());
      while (iterator.d5()) {
        // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTop.<anonymous>.<anonymous>' call
        if (iterator.f5().m53_1 === backStackEntry.m53_1) {
          tmp$ret$1 = iterator.e5();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    // Inline function 'kotlin.contracts.contract' call
    var idx = tmp$ret$1;
    tempStack.v2(idx, backStackEntry);
    this.x52_1.a1y(tempStack);
  };
  protoOf(NavigatorState).u53 = function (entry) {
    this.y52_1.a1y(minus(this.y52_1.c1(), entry));
  };
  var ParamType_PATH_instance;
  var ParamType_QUERY_instance;
  var ParamType_entriesInitialized;
  function ParamType_initEntries() {
    if (ParamType_entriesInitialized)
      return Unit_instance;
    ParamType_entriesInitialized = true;
    ParamType_PATH_instance = new ParamType('PATH', 0);
    ParamType_QUERY_instance = new ParamType('QUERY', 1);
  }
  function RouteBuilder_init_$Init$(serializer, $this) {
    RouteBuilder.call($this);
    $this.v53_1 = serializer;
    $this.w53_1 = serializer.m4i().p4j();
    return $this;
  }
  function RouteBuilder_init_$Create$(serializer) {
    return RouteBuilder_init_$Init$(serializer, objectCreate(protoOf(RouteBuilder)));
  }
  function addPath($this, path) {
    $this.x53_1 = $this.x53_1 + ('/' + path);
  }
  function addQuery($this, name, value) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = $this.y53_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = '?';
    } else {
      tmp = '&';
    }
    var symbol = tmp;
    $this.y53_1 = $this.y53_1 + (symbol + name + '=' + value);
  }
  function computeParamType($this, index, type) {
    var tmp;
    var tmp_0;
    if (type instanceof CollectionNavType) {
      tmp_0 = true;
    } else {
      tmp_0 = $this.v53_1.m4i().x4j(index);
    }
    if (tmp_0) {
      tmp = ParamType_QUERY_getInstance();
    } else {
      tmp = ParamType_PATH_getInstance();
    }
    return tmp;
  }
  function ParamType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ParamType_PATH_getInstance() {
    ParamType_initEntries();
    return ParamType_PATH_instance;
  }
  function ParamType_QUERY_getInstance() {
    ParamType_initEntries();
    return ParamType_QUERY_instance;
  }
  protoOf(RouteBuilder).a2u = function () {
    return this.w53_1 + this.x53_1 + this.y53_1;
  };
  protoOf(RouteBuilder).z53 = function (index, name, type, value) {
    var paramType = computeParamType(this, index, type);
    var tmp0 = paramType.z2_1;
    if (tmp0 === 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(value.p() === 1)) {
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        var message = 'Expected one value for argument ' + name + ', found ' + value.p() + 'values instead.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      addPath(this, first(value));
    } else if (tmp0 === 1) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = value.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        addQuery(this, name, element);
      }
    }
  };
  function RouteBuilder() {
    this.x53_1 = '';
    this.y53_1 = '';
  }
  function internalEncodeValue($this, value) {
    var argName = $this.a54_1.m4i().u4j($this.e54_1);
    var navType = $this.b54_1.s2(argName);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (navType == null) {
        // Inline function 'androidx.navigation.serialization.RouteEncoder.internalEncodeValue.<anonymous>' call
        var message = 'Cannot find NavType for argument ' + argName + '. Please provide NavType through typeMap.';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var tmp;
    if (navType instanceof CollectionNavType) {
      tmp = navType.s50(value);
    } else {
      tmp = listOf(navType.f54(value));
    }
    var parsedValue = tmp;
    // Inline function 'kotlin.collections.set' call
    $this.d54_1.k2(argName, parsedValue);
  }
  function RouteEncoder(serializer, typeMap) {
    AbstractEncoder.call(this);
    this.a54_1 = serializer;
    this.b54_1 = typeMap;
    this.c54_1 = EmptySerializersModule();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d54_1 = LinkedHashMap_init_$Create$();
    this.e54_1 = -1;
  }
  protoOf(RouteEncoder).w4l = function () {
    return this.c54_1;
  };
  protoOf(RouteEncoder).g54 = function (value) {
    protoOf(AbstractEncoder).t4l.call(this, this.a54_1, !(value == null) ? value : THROW_CCE());
    return toMap(this.d54_1);
  };
  protoOf(RouteEncoder).t4l = function (serializer, value) {
    internalEncodeValue(this, value);
  };
  protoOf(RouteEncoder).u4k = function (descriptor, index) {
    this.e54_1 = index;
    return true;
  };
  protoOf(RouteEncoder).v4k = function (value) {
    internalEncodeValue(this, value);
  };
  protoOf(RouteEncoder).w4k = function () {
    internalEncodeValue(this, null);
  };
  protoOf(RouteEncoder).h4l = function (descriptor) {
    if (isValueClass(descriptor))
      this.e54_1 = 0;
    return protoOf(AbstractEncoder).h4l.call(this, descriptor);
  };
  function generateHashCode(_this__u8e3s4) {
    var hash = getStringHashCode(_this__u8e3s4.m4i().p4j());
    var inductionVariable = 0;
    var last = _this__u8e3s4.m4i().s4j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hash = imul(31, hash) + getStringHashCode(_this__u8e3s4.m4i().u4j(i)) | 0;
      }
       while (inductionVariable < last);
    return hash;
  }
  function generateRouteWithArgs(route, typeMap) {
    var serializer_0 = serializer(getKClassFromExpression(route));
    var argMap = (new RouteEncoder(serializer_0, typeMap)).g54(route);
    var builder = RouteBuilder_init_$Create$(serializer_0);
    forEachIndexed(serializer_0, typeMap, generateRouteWithArgs$lambda(argMap, builder));
    return builder.a2u();
  }
  function forEachIndexed(_this__u8e3s4, typeMap, operation) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.m4i().s4j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var argName = _this__u8e3s4.m4i().u4j(i);
        var navType = typeMap.s2(argName);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (navType == null) {
            // Inline function 'androidx.navigation.serialization.forEachIndexed.<anonymous>' call
            var message = 'Cannot locate NavType for argument [' + argName + ']';
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            break $l$block;
          }
        }
        operation(i, argName, navType);
      }
       while (inductionVariable < last);
  }
  function isValueClass(_this__u8e3s4) {
    return equals(_this__u8e3s4.q4j(), CLASS_getInstance()) && _this__u8e3s4.r4j() && _this__u8e3s4.s4j() === 1;
  }
  function generateRouteWithArgs$lambda($argMap, $builder) {
    return function (index, argName, navType) {
      var value = ensureNotNull($argMap.s2(argName));
      $builder.z53(index, argName, navType, value);
      return Unit_instance;
    };
  }
  function NavBackStackEntry_init_$Init$(entry, arguments_0, $this) {
    arguments_0 = arguments_0 === VOID ? entry.fc() : arguments_0;
    NavBackStackEntry.call($this, entry.i53_1, arguments_0, entry.k53_1, entry.l53_1, entry.m53_1, entry.n53_1);
    $this.k53_1 = entry.k53_1;
    $this.h54(entry.s53_1);
    return $this;
  }
  function NavBackStackEntry_init_$Create$(entry, arguments_0) {
    return NavBackStackEntry_init_$Init$(entry, arguments_0, objectCreate(protoOf(NavBackStackEntry)));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).i54 = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    return new NavBackStackEntry(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion_1).j54 = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState, $super) {
    arguments_0 = arguments_0 === VOID ? null : arguments_0;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? randomUUID() : id;
    savedState = savedState === VOID ? null : savedState;
    return $super === VOID ? this.i54(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) : $super.i54.call(this, destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion_1).k54 = function () {
    return randomUUID();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function NavResultSavedStateFactory(owner) {
    AbstractSavedStateViewModelFactory_init_$Init$(owner, null, this);
  }
  protoOf(NavResultSavedStateFactory).o4h = function (key, modelClass, handle) {
    var tmp = new SavedStateViewModel(handle);
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  function SavedStateViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.o54_1 = handle;
  }
  function NavBackStackEntry$savedStateHandle$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!this$0.q53_1) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message = "You cannot access the NavBackStackEntry's SavedStateHandle until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (!!this$0.j4e().w4b().equals(State_DESTROYED_getInstance())) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message_0 = "You cannot access the NavBackStackEntry's SavedStateHandle after the NavBackStackEntry is destroyed.";
        throw IllegalStateException_init_$Create$(toString_0(message_0));
      }
      return Companion_getInstance_0().q4g(this$0, new NavResultSavedStateFactory(this$0)).u4g(getKClass(SavedStateViewModel)).o54_1;
    };
  }
  function NavBackStackEntry$defaultViewModelProviderFactory$1() {
  }
  function NavBackStackEntry(destination, immutableArgs, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    immutableArgs = immutableArgs === VOID ? null : immutableArgs;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? Companion_instance_2.k54() : id;
    savedState = savedState === VOID ? null : savedState;
    this.i53_1 = destination;
    this.j53_1 = immutableArgs;
    this.k53_1 = hostLifecycleState;
    this.l53_1 = viewModelStoreProvider;
    this.m53_1 = id;
    this.n53_1 = savedState;
    this.o53_1 = LifecycleRegistry_init_$Create$(this);
    this.p53_1 = Companion_instance.e4e(this);
    this.q53_1 = false;
    var tmp = this;
    tmp.r53_1 = lazy(NavBackStackEntry$savedStateHandle$delegate$lambda(this));
    this.s53_1 = State_INITIALIZED_getInstance();
    var tmp_0 = this;
    tmp_0.t53_1 = new NavBackStackEntry$defaultViewModelProviderFactory$1();
  }
  protoOf(NavBackStackEntry).fc = function () {
    var tmp;
    if (this.j53_1 == null) {
      tmp = null;
    } else {
      tmp = Bundle_init_$Create$_0(this.j53_1);
    }
    return tmp;
  };
  protoOf(NavBackStackEntry).j4e = function () {
    return this.o53_1;
  };
  protoOf(NavBackStackEntry).h54 = function (maxState) {
    this.s53_1 = maxState;
    this.p54();
  };
  protoOf(NavBackStackEntry).p4c = function (event) {
    this.k53_1 = event.p4b();
    this.p54();
  };
  protoOf(NavBackStackEntry).p54 = function () {
    if (!this.q53_1) {
      this.p53_1.i4e();
      this.q53_1 = true;
      if (!(this.l53_1 == null)) {
        enableSavedStateHandles(this);
      }
      this.p53_1.q4e(this.n53_1);
    }
    if (this.k53_1.z2_1 < this.s53_1.z2_1) {
      this.o53_1.o4c(this.k53_1);
    } else {
      this.o53_1.o4c(this.s53_1);
    }
  };
  protoOf(NavBackStackEntry).p4g = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.q53_1) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message = "You cannot access the NavBackStackEntry's ViewModels until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.j4e().w4b().equals(State_DESTROYED_getInstance())) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message_0 = "You cannot access the NavBackStackEntry's ViewModels after the NavBackStackEntry is destroyed.";
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.l53_1 == null) {
        // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
        var message_1 = 'You must call setViewModelStore() on your NavHostController before accessing the ViewModelStore of a navigation graph.';
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      } else {
        break $l$block;
      }
    }
    return this.l53_1.q54(this.m53_1);
  };
  protoOf(NavBackStackEntry).a4f = function () {
    return this.t53_1;
  };
  protoOf(NavBackStackEntry).b4f = function () {
    var extras = MutableCreationExtras_init_$Create$();
    extras.n4f(get_SAVED_STATE_REGISTRY_OWNER_KEY(), this);
    extras.n4f(get_VIEW_MODEL_STORE_OWNER_KEY(), this);
    var tmp0_safe_receiver = this.fc();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      extras.n4f(get_DEFAULT_ARGS_KEY(), tmp0_safe_receiver);
    }
    return extras;
  };
  protoOf(NavBackStackEntry).x4g = function () {
    return this.p53_1.g4e_1;
  };
  protoOf(NavBackStackEntry).r54 = function (outBundle) {
    this.p53_1.s4e(outBundle);
  };
  protoOf(NavBackStackEntry).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavBackStackEntry);
    }
    if (tmp)
      return false;
    var tmp_0;
    if (this.m53_1 === other.m53_1 && this.i53_1.equals(other.i53_1) && equals(this.j4e(), other.j4e()) && equals(this.x4g(), other.x4g())) {
      var tmp_1;
      if (equals(this.j53_1, other.j53_1)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver = this.j53_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t4c();
        var tmp_2;
        if (tmp1_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var tmp_3;
            if (isInterface(tmp1_safe_receiver, Collection)) {
              tmp_3 = tmp1_safe_receiver.j();
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
            var tmp0_iterator = tmp1_safe_receiver.m();
            while (tmp0_iterator.n()) {
              var element = tmp0_iterator.o();
              // Inline function 'androidx.navigation.NavBackStackEntry.equals.<anonymous>' call
              var tmp_4 = this.j53_1.d4e(element);
              var tmp0_safe_receiver_0 = other.j53_1;
              if (!equals(tmp_4, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.d4e(element))) {
                tmp$ret$0 = false;
                break $l$block_0;
              }
            }
            tmp$ret$0 = true;
          }
          tmp_2 = tmp$ret$0;
        }
        tmp_1 = tmp_2 === true;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(NavBackStackEntry).hashCode = function () {
    var result = getStringHashCode(this.m53_1);
    result = imul(31, result) + this.i53_1.hashCode() | 0;
    var tmp0_safe_receiver = this.j53_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t4c();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp1_safe_receiver.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavBackStackEntry.hashCode.<anonymous>' call
        var tmp = imul(31, result);
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = this.j53_1.d4e(element);
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
    }
    result = imul(31, result) + hashCode(this.j4e()) | 0;
    result = imul(31, result) + hashCode(this.x4g()) | 0;
    return result;
  };
  protoOf(NavBackStackEntry).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.v8(getKClassFromExpression(this).pb());
    sb.v8('(' + this.m53_1 + ')');
    sb.v8(' destination=');
    sb.u8(this.i53_1);
    return sb.toString();
  };
  function randomUUID() {
    // Inline function 'kotlin.also' call
    var this_0 = Default_getInstance().sk(16);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.randomUUID.<anonymous>' call
    // Inline function 'kotlin.experimental.and' call
    var this_1 = this_0[6];
    this_0[6] = toByte(this_1 & 15);
    // Inline function 'kotlin.experimental.or' call
    var this_2 = this_0[6];
    this_0[6] = toByte(this_2 | 64);
    // Inline function 'kotlin.experimental.and' call
    var this_3 = this_0[8];
    this_0[8] = toByte(this_3 & 63);
    // Inline function 'kotlin.experimental.or' call
    var this_4 = this_0[8];
    this_0[8] = toByte(this_4 | -128);
    var bytes = this_0;
    return StringBuilder_init_$Create$_0(36).v8(toHexString(bytes, 0, 4)).w8(_Char___init__impl__6a9atx(45)).v8(toHexString(bytes, 4, 6)).w8(_Char___init__impl__6a9atx(45)).v8(toHexString(bytes, 6, 8)).w8(_Char___init__impl__6a9atx(45)).v8(toHexString(bytes, 8, 10)).w8(_Char___init__impl__6a9atx(45)).v8(toHexString(bytes, 10)).toString();
  }
  function Companion_2() {
  }
  protoOf(Companion_2).s54 = function (uri) {
    var builder = new Builder_0();
    builder.w54(uri);
    return builder;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Builder_0() {
    this.t54_1 = null;
    this.u54_1 = null;
    this.v54_1 = null;
  }
  protoOf(Builder_0).w54 = function (uri) {
    this.t54_1 = uri;
    return this;
  };
  protoOf(Builder_0).a2u = function () {
    return new NavDeepLinkRequest(this.t54_1, this.u54_1, this.v54_1);
  };
  function NavDeepLinkRequest(uri, action, mimeType) {
    this.x54_1 = uri;
    this.y54_1 = action;
    this.z54_1 = mimeType;
  }
  protoOf(NavDeepLinkRequest).a55 = function () {
    return this.x54_1;
  };
  protoOf(NavDeepLinkRequest).b55 = function () {
    return this.y54_1;
  };
  protoOf(NavDeepLinkRequest).c55 = function () {
    return this.z54_1;
  };
  protoOf(NavDeepLinkRequest).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.v8('NavDeepLinkRequest');
    sb.v8('{');
    if (!(this.a55() == null)) {
      sb.v8(' uri=');
      sb.v8(toString(this.a55()));
    }
    if (!(this.b55() == null)) {
      sb.v8(' action=');
      sb.v8(this.b55());
    }
    if (!(this.c55() == null)) {
      sb.v8(' mimetype=');
      sb.v8(this.c55());
    }
    sb.v8(' }');
    return sb.toString();
  };
  function NavDestination$Companion$_get_hierarchy_$lambda_vny2w0(it) {
    return it.e55_1;
  }
  function DeepLinkMatch(destination, matchingArgs, isExactDeepLink) {
    this.k55_1 = destination;
    this.l55_1 = matchingArgs;
    this.m55_1 = isExactDeepLink;
  }
  protoOf(DeepLinkMatch).n55 = function (other) {
    if (this.m55_1 && !other.m55_1) {
      return 1;
    } else if (!this.m55_1 && other.m55_1) {
      return -1;
    }
    if (!(this.l55_1 == null) && other.l55_1 == null) {
      return 1;
    } else if (this.l55_1 == null && !(other.l55_1 == null)) {
      return -1;
    }
    if (!(this.l55_1 == null)) {
      var sizeDifference = this.l55_1.lr() - ensureNotNull(other.l55_1).lr() | 0;
      if (sizeDifference > 0) {
        return 1;
      } else if (sizeDifference < 0) {
        return -1;
      }
    }
    return 0;
  };
  protoOf(DeepLinkMatch).d = function (other) {
    return this.n55(other instanceof DeepLinkMatch ? other : THROW_CCE());
  };
  protoOf(DeepLinkMatch).o55 = function (arguments_0) {
    if (arguments_0 == null || this.l55_1 == null)
      return false;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.l55_1.t4c().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.DeepLinkMatch.hasMatchingArgs.<anonymous>' call
      if (!arguments_0.r4c(element))
        return false;
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.k55_1.h55_1;
      var tmp0_safe_receiver = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).s2(element);
      var type = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u50_1;
      var matchingArgValue = type == null ? null : type.y51(this.l55_1, ensureNotNull(element));
      var entryArgValue = type == null ? null : type.y51(arguments_0, ensureNotNull(element));
      if ((type == null ? null : type.p55(matchingArgValue, entryArgValue)) === false) {
        return false;
      }
    }
    return true;
  };
  function NavDestination_init_$Init$(navigator, $this) {
    NavDestination.call($this, navigator.t55());
    return $this;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).u55 = function (id) {
    return '0x' + toString_1(id, 16);
  };
  protoOf(Companion_3).v55 = function (route) {
    return !(route == null) ? 'multiplatform-app://androidx.navigation/' + route : '';
  };
  protoOf(Companion_3).w55 = function (_this__u8e3s4) {
    return generateSequence(_this__u8e3s4, NavDestination$Companion$_get_hierarchy_$lambda_vny2w0);
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function NavDestination$addDeepLink$lambda($navDeepLink) {
    return function (key) {
      return !$navDeepLink.i52().v(key);
    };
  }
  function NavDestination(navigatorName) {
    this.d55_1 = navigatorName;
    this.e55_1 = null;
    this.f55_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g55_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.h55_1 = LinkedHashMap_init_$Create$();
    this.i55_1 = 0;
    this.j55_1 = null;
  }
  protoOf(NavDestination).fc = function () {
    return toMap(this.h55_1);
  };
  protoOf(NavDestination).x55 = function (route) {
    if (route == null) {
      this.i55_1 = 0;
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isBlank(route)) {
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        var message = 'Cannot have an empty route';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      var internalRoute = Companion_instance_4.v55(route);
      this.i55_1 = getStringHashCode(internalRoute);
      this.y55(internalRoute);
    }
    // Inline function 'kotlin.collections.remove' call
    var this_0 = this.g55_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.g55_1.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        if (element.z50_1 === Companion_instance_4.v55(this.j55_1)) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var element_0 = tmp$ret$3;
    (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).t2(element_0);
    this.j55_1 = route;
  };
  protoOf(NavDestination).z55 = function () {
    return this.d55_1;
  };
  protoOf(NavDestination).y55 = function (uriPattern) {
    this.a56(Builder_init_$Create$().h52(uriPattern).a2u());
  };
  protoOf(NavDestination).a56 = function (navDeepLink) {
    var tmp = this.h55_1;
    var missingRequiredArguments_0 = missingRequiredArguments(tmp, NavDestination$addDeepLink$lambda(navDeepLink));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!missingRequiredArguments_0.j()) {
      // Inline function 'androidx.navigation.NavDestination.addDeepLink.<anonymous>' call
      var message = 'Deep link ' + navDeepLink.z50_1 + " can't be used to open destination " + this.toString() + '.\n' + ('Following required arguments are missing: ' + toString_0(missingRequiredArguments_0));
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.g55_1.e(navDeepLink);
  };
  protoOf(NavDestination).b56 = function (route) {
    var request = Companion_instance_3.s54(UriUtils_instance.co(Companion_instance_4.v55(route))).a2u();
    var tmp;
    if (this instanceof NavGraph) {
      tmp = this.o56(request, false, false, this);
    } else {
      tmp = this.c56(request);
    }
    var matchingDeepLink = tmp;
    return matchingDeepLink;
  };
  protoOf(NavDestination).c56 = function (navDeepLinkRequest) {
    if (this.g55_1.j()) {
      return null;
    }
    var bestMatch = null;
    var tmp0_iterator = this.g55_1.m();
    while (tmp0_iterator.n()) {
      var deepLink = tmp0_iterator.o();
      var uri = navDeepLinkRequest.a55();
      var tmp;
      if (!(uri == null)) {
        tmp = deepLink.j52(uri, this.h55_1);
      } else {
        tmp = null;
      }
      var matchingArguments = tmp;
      if (!(matchingArguments == null)) {
        var newMatch = new DeepLinkMatch(this, matchingArguments, deepLink.o51_1);
        if (bestMatch == null || newMatch.n55(bestMatch) > 0) {
          bestMatch = newMatch;
        }
      }
    }
    return bestMatch;
  };
  protoOf(NavDestination).p56 = function (route, arguments_0) {
    if (this.j55_1 === route)
      return true;
    var matchingDeepLink = this.b56(route);
    if (!this.equals(matchingDeepLink == null ? null : matchingDeepLink.k55_1))
      return false;
    return matchingDeepLink.o55(arguments_0);
  };
  protoOf(NavDestination).q56 = function (argumentName, argument) {
    // Inline function 'kotlin.collections.set' call
    this.h55_1.k2(argumentName, argument);
  };
  protoOf(NavDestination).r56 = function (args) {
    if (args == null && this.h55_1.j()) {
      return null;
    }
    var defaultArgs = Bundle_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.h55_1.a1().m();
    while (tmp0_iterator.n()) {
      var tmp1_loop_parameter = tmp0_iterator.o();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.c1();
      value.s56(key, defaultArgs);
    }
    if (!(args == null)) {
      defaultArgs.u4c(args);
      // Inline function 'kotlin.collections.iterator' call
      var tmp2_iterator = this.h55_1.a1().m();
      while (tmp2_iterator.n()) {
        var tmp3_loop_parameter = tmp2_iterator.o();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = tmp3_loop_parameter.b1();
        // Inline function 'kotlin.collections.component2' call
        var value_0 = tmp3_loop_parameter.c1();
        if (!value_0.x50_1) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!value_0.t56(key_0, defaultArgs)) {
            // Inline function 'androidx.navigation.NavDestination.addInDefaultArgs.<anonymous>' call
            var message = "Wrong argument type for '" + key_0 + "' in argument bundle. " + value_0.u50_1.s3p() + ' ' + 'expected.';
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
        }
      }
    }
    return defaultArgs;
  };
  protoOf(NavDestination).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.v8(getKClassFromExpression(this).pb());
    // Inline function 'kotlin.text.isNullOrBlank' call
    var this_0 = this.j55_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null || isBlank(this_0))) {
      sb.v8(' route=');
      sb.v8(this.j55_1);
    }
    if (!(this.f55_1 == null)) {
      sb.v8(' label=');
      sb.f(this.f55_1);
    }
    return sb.toString();
  };
  protoOf(NavDestination).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavDestination);
    }
    if (tmp)
      return false;
    var equalDeepLinks = equals(this.g55_1, other.g55_1);
    var tmp_0;
    if (this.h55_1.p() === other.h55_1.p()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var tmp0_iterator = asSequence(this.h55_1).m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'androidx.navigation.NavDestination.equals.<anonymous>' call
          if (!(other.h55_1.q2(element.b1()) && equals(other.h55_1.s2(element.b1()), element.c1()))) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    var equalArguments = tmp_0;
    return this.i55_1 === other.i55_1 && this.j55_1 == other.j55_1 && equalDeepLinks && equalArguments;
  };
  protoOf(NavDestination).hashCode = function () {
    var result = this.i55_1;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.j55_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.g55_1.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      var tmp_0 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element.z50_1;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
      var tmp_1 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_1 = element.a51_1;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
      result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
      var tmp_2 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = element.b51_1;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.h55_1.o2().m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      result = imul(31, result) + getStringHashCode(element_0) | 0;
      var tmp_3 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = this.h55_1.s2(element_0);
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      result = tmp_3 + (tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3) | 0;
    }
    return result;
  };
  function NavDestinationBuilder_init_$Init$(navigator, route, $this) {
    NavDestinationBuilder.call($this, navigator, -1, route);
    return $this;
  }
  function NavDestinationBuilder(navigator, id, route) {
    this.u56_1 = navigator;
    this.v56_1 = id;
    this.w56_1 = route;
    this.x56_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.y56_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z56_1 = ArrayList_init_$Create$();
  }
  protoOf(NavDestinationBuilder).a57 = function (name, argument) {
    // Inline function 'kotlin.collections.set' call
    this.y56_1.k2(name, argument);
  };
  protoOf(NavDestinationBuilder).b57 = function (navDeepLink) {
    this.z56_1.e(navDeepLink);
  };
  protoOf(NavDestinationBuilder).c57 = function () {
    return this.u56_1.d57();
  };
  protoOf(NavDestinationBuilder).a2u = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.c57();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>' call
    this_0.f55_1 = this.x56_1;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.y56_1.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var argument = element.c1();
      this_0.q56(name, argument);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.z56_1.m();
    while (tmp0_iterator_0.n()) {
      var element_0 = tmp0_iterator_0.o();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      this_0.a56(element_0);
    }
    if (!(this.w56_1 == null)) {
      this_0.x55(this.w56_1);
    }
    if (!(this.v56_1 === -1)) {
      this_0.i55_1 = this.v56_1;
    }
    return this_0;
  };
  function NavGraph$Companion$childHierarchy$lambda(it) {
    var tmp;
    if (it instanceof NavGraph) {
      tmp = it.f57(it.e57());
    } else {
      tmp = null;
    }
    return tmp;
  }
  function _set_startDestinationId__488ru8($this, startDestId) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(startDestId === $this.i55_1)) {
      // Inline function 'androidx.navigation.NavGraph.<set-startDestinationId>.<anonymous>' call
      var message = 'Start destination ' + startDestId + ' cannot use the same id as the graph ' + $this.toString();
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (!($this.n56_1 == null)) {
      _set_startDestinationRoute__ih5gmw($this, null);
    }
    $this.l56_1 = startDestId;
    $this.m56_1 = null;
  }
  function _set_startDestinationRoute__ih5gmw($this, startDestRoute) {
    var tmp = $this;
    var tmp_0;
    if (startDestRoute == null) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(startDestRoute == $this.j55_1)) {
        // Inline function 'androidx.navigation.NavGraph.<set-startDestinationRoute>.<anonymous>' call
        var message = 'Start destination ' + startDestRoute + ' cannot use the same route as the graph ' + $this.toString();
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isBlank(startDestRoute)) {
        // Inline function 'androidx.navigation.NavGraph.<set-startDestinationRoute>.<anonymous>' call
        var message_0 = 'Cannot have an empty start destination route';
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
      var internalRoute = Companion_instance_4.v55(startDestRoute);
      tmp_0 = getStringHashCode(internalRoute);
    }
    tmp.l56_1 = tmp_0;
    $this.n56_1 = startDestRoute;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).g57 = function (_this__u8e3s4) {
    var tmp = _this__u8e3s4 instanceof NavDestination ? _this__u8e3s4 : THROW_CCE();
    return generateSequence(tmp, NavGraph$Companion$childHierarchy$lambda);
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function NavGraph$iterator$1(this$0) {
    this.j57_1 = this$0;
    this.h57_1 = -1;
    this.i57_1 = false;
  }
  protoOf(NavGraph$iterator$1).n = function () {
    return (this.h57_1 + 1 | 0) < this.j57_1.k56_1.lr();
  };
  protoOf(NavGraph$iterator$1).o = function () {
    if (!this.n()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.i57_1 = true;
    this.h57_1 = this.h57_1 + 1 | 0;
    return this.j57_1.k56_1.o13(this.h57_1);
  };
  protoOf(NavGraph$iterator$1).t4 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.i57_1) {
      // Inline function 'androidx.navigation.<no name provided>.remove.<anonymous>' call
      var message = 'You must call next() before you can remove an element';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = this.j57_1.k56_1;
    $this$with.o13(this.h57_1).e55_1 = null;
    $this$with.x13(this.h57_1);
    this.h57_1 = this.h57_1 - 1 | 0;
    this.i57_1 = false;
  };
  function NavGraph$setStartDestination$lambda($startDestRoute) {
    return function (startDestination) {
      // Inline function 'kotlin.collections.mapValues' call
      var this_0 = startDestination.fc();
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.p()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = this_0.a1().m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp = element.b1();
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>.<anonymous>' call
        var tmp$ret$1 = element.c1().u50_1;
        destination.k2(tmp, tmp$ret$1);
      }
      var args = destination;
      return generateRouteWithArgs($startDestRoute, args);
    };
  }
  function NavGraph(navGraphNavigator) {
    NavDestination_init_$Init$(navGraphNavigator, this);
    this.k56_1 = new SparseArrayCompat();
    this.l56_1 = 0;
    this.m56_1 = null;
    this.n56_1 = null;
  }
  protoOf(NavGraph).o56 = function (navDeepLinkRequest, searchChildren, searchParent, lastVisited) {
    var bestMatch = protoOf(NavDestination).c56.call(this, navDeepLinkRequest);
    var tmp;
    if (searchChildren) {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
        var tmp0_safe_receiver = !element.equals(lastVisited) ? element.c56(navDeepLinkRequest) : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination.e(tmp0_safe_receiver);
        }
      }
      tmp = maxOrNull(destination);
    } else {
      tmp = null;
    }
    var bestChildMatch = tmp;
    var tmp0_safe_receiver_0 = this.e55_1;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
      tmp_0 = searchParent && !tmp0_safe_receiver_0.equals(lastVisited) ? tmp0_safe_receiver_0.o56(navDeepLinkRequest, searchChildren, true, this) : null;
    }
    var bestParentMatch = tmp_0;
    return maxOrNull(listOfNotNull([bestMatch, bestChildMatch, bestParentMatch]));
  };
  protoOf(NavGraph).c56 = function (navDeepLinkRequest) {
    return this.o56(navDeepLinkRequest, true, false, this);
  };
  protoOf(NavGraph).k57 = function (node) {
    var id = node.i55_1;
    var innerRoute = node.j55_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(id === 0) || !(innerRoute == null))) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message = 'Destinations must have an id or route.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (!(this.j55_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(innerRoute == this.j55_1)) {
        // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
        var message_0 = 'Destination ' + node.toString() + ' cannot have the same route as graph ' + this.toString();
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === this.i55_1)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_1 = 'Destination ' + node.toString() + ' cannot have the same id as graph ' + this.toString();
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    var existingDestination = this.k56_1.u(id);
    if (existingDestination === node) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(node.e55_1 == null)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_2 = 'Destination already has a parent set. Call NavGraph.remove() to remove the previous parent.';
      throw IllegalStateException_init_$Create$(toString_0(message_2));
    }
    if (!(existingDestination == null)) {
      existingDestination.e55_1 = null;
    }
    node.e55_1 = this;
    this.k56_1.a14(node.i55_1, node);
  };
  protoOf(NavGraph).l57 = function (nodes) {
    var tmp0_iterator = nodes.m();
    $l$loop: while (tmp0_iterator.n()) {
      var node = tmp0_iterator.o();
      if (node == null) {
        continue $l$loop;
      }
      this.k57(node);
    }
  };
  protoOf(NavGraph).f57 = function (resId) {
    return this.m57(resId, this, false);
  };
  protoOf(NavGraph).m57 = function (resId, lastVisited, searchChildren) {
    var destination = this.k56_1.u(resId);
    if (!(destination == null))
      return destination;
    if (searchChildren) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
        var tmp0_iterator = asSequence_0(valueIterator(this.k56_1)).m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'androidx.navigation.NavGraph.findNodeComprehensive.<anonymous>' call
          var tmp;
          var tmp_0;
          if (element instanceof NavGraph) {
            tmp_0 = !element.equals(lastVisited);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp = element.m57(resId, this, true);
          } else {
            tmp = null;
          }
          var result = tmp;
          if (!(result == null)) {
            tmp$ret$1 = result;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      destination = tmp$ret$1;
    }
    var tmp0_elvis_lhs = destination;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2;
      if (!(this.e55_1 == null) && !equals(this.e55_1, lastVisited)) {
        tmp_2 = ensureNotNull(this.e55_1).m57(resId, this, searchChildren);
      } else {
        tmp_2 = null;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  };
  protoOf(NavGraph).n57 = function (route) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(route == null || isBlank(route))) {
      tmp = this.o57(route, true);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(NavGraph).o57 = function (route, searchParents) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = asSequence_0(valueIterator(this.k56_1)).m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'androidx.navigation.NavGraph.findNode.<anonymous>' call
        if (equals_0(element.j55_1, route) || !(element.b56(route) == null)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var destination = tmp$ret$1;
    return destination == null ? searchParents && !(this.e55_1 == null) ? ensureNotNull(this.e55_1).n57(route) : null : destination;
  };
  protoOf(NavGraph).m = function () {
    return new NavGraph$iterator$1(this);
  };
  protoOf(NavGraph).z55 = function () {
    return !(this.i55_1 === 0) ? protoOf(NavDestination).z55.call(this) : 'the root navigation';
  };
  protoOf(NavGraph).e57 = function () {
    return this.l56_1;
  };
  protoOf(NavGraph).p57 = function (startDestId) {
    _set_startDestinationId__488ru8(this, startDestId);
  };
  protoOf(NavGraph).q57 = function (startDestRoute) {
    _set_startDestinationRoute__ih5gmw(this, startDestRoute);
  };
  protoOf(NavGraph).r57 = function (startDestRoute) {
    var tmp = serializer(getKClassFromExpression(startDestRoute));
    this.s57(tmp, NavGraph$setStartDestination$lambda(startDestRoute));
  };
  protoOf(NavGraph).s57 = function (serializer, parseRoute) {
    var id = generateHashCode(serializer);
    var startDest = this.f57(id);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (startDest == null) {
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>' call
        var message = 'Cannot find startDestination ' + serializer.m4i().p4j() + ' from NavGraph. ' + 'Ensure the starting NavDestination was added with route from KClass.';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    _set_startDestinationRoute__ih5gmw(this, parseRoute(startDest));
    this.l56_1 = id;
  };
  protoOf(NavGraph).t57 = function () {
    if (this.m56_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.n56_1;
      tmp.m56_1 = tmp0_elvis_lhs == null ? this.l56_1.toString() : tmp0_elvis_lhs;
    }
    return ensureNotNull(this.m56_1);
  };
  protoOf(NavGraph).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.v8(protoOf(NavDestination).toString.call(this));
    var tmp0_elvis_lhs = this.n57(this.n56_1);
    var startDestination = tmp0_elvis_lhs == null ? this.f57(this.e57()) : tmp0_elvis_lhs;
    sb.v8(' startDestination=');
    if (startDestination == null) {
      if (!(this.n56_1 == null)) {
        sb.v8(this.n56_1);
      } else if (!(this.m56_1 == null)) {
        sb.v8(this.m56_1);
      } else {
        sb.v8(Companion_instance_4.u55(this.l56_1));
      }
    } else {
      sb.v8('{');
      sb.v8(startDestination.toString());
      sb.v8('}');
    }
    return sb.toString();
  };
  protoOf(NavGraph).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavGraph);
    }
    if (tmp)
      return false;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (protoOf(NavDestination).equals.call(this, other)) {
      // Inline function 'androidx.collection.size' call
      var tmp_3 = this.k56_1.lr();
      // Inline function 'androidx.collection.size' call
      tmp_2 = tmp_3 === other.k56_1.lr();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.e57() === other.e57();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var tmp0_iterator = asSequence_0(valueIterator(this.k56_1)).m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'androidx.navigation.NavGraph.equals.<anonymous>' call
          if (!element.equals(other.k56_1.u(element.i55_1))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      tmp_0 = tmp$ret$3;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(NavGraph).hashCode = function () {
    var result = this.e57();
    // Inline function 'androidx.collection.forEach' call
    var this_0 = this.k56_1;
    var inductionVariable = 0;
    var last = this_0.lr();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.navigation.NavGraph.hashCode.<anonymous>' call
        var key = this_0.v13(index);
        var value = this_0.o13(index);
        result = imul(31, result) + key | 0;
        result = imul(31, result) + value.hashCode() | 0;
      }
       while (inductionVariable < last);
    return result;
  };
  function NavGraphBuilder_init_$Init$(provider, startDestination, route, $this) {
    // Inline function 'androidx.navigation.get' call
    var clazz = getKClass(NavGraphNavigator);
    var tmp$ret$0 = provider.w57(clazz);
    NavDestinationBuilder_init_$Init$(tmp$ret$0, route, $this);
    NavGraphBuilder.call($this);
    $this.d58_1 = provider;
    $this.f58_1 = startDestination;
    return $this;
  }
  function NavGraphBuilder_init_$Create$(provider, startDestination, route) {
    return NavGraphBuilder_init_$Init$(provider, startDestination, route, objectCreate(protoOf(NavGraphBuilder)));
  }
  function NavGraphBuilder$build$lambda(it) {
    return ensureNotNull(it.j55_1);
  }
  protoOf(NavGraphBuilder).j58 = function (navDestination) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.i58_1;
    var element = navDestination.a2u();
    this_0.e(element);
  };
  protoOf(NavGraphBuilder).a2u = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(NavDestinationBuilder).a2u.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavGraphBuilder.build.<anonymous>' call
    this_0.l57(this.i58_1);
    if (this.e58_1 === 0 && this.f58_1 == null && this.g58_1 == null && this.h58_1 == null) {
      if (!(this.w56_1 == null)) {
        throw IllegalStateException_init_$Create$('You must set a start destination route');
      } else {
        throw IllegalStateException_init_$Create$('You must set a start destination id');
      }
    }
    if (!(this.f58_1 == null)) {
      this_0.q57(ensureNotNull(this.f58_1));
    } else if (!(this.g58_1 == null)) {
      var tmp = serializer(ensureNotNull(this.g58_1));
      this_0.s57(tmp, NavGraphBuilder$build$lambda);
    } else if (!(this.h58_1 == null)) {
      this_0.r57(ensureNotNull(this.h58_1));
    } else {
      this_0.p57(this.e58_1);
    }
    return this_0;
  };
  function NavGraphBuilder() {
    this.e58_1 = 0;
    this.f58_1 = null;
    this.g58_1 = null;
    this.h58_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i58_1 = ArrayList_init_$Create$();
  }
  function navigate($this, entry, navOptions, navigatorExtras) {
    var tmp = entry.i53_1;
    var destination = tmp instanceof NavGraph ? tmp : THROW_CCE();
    var args = entry.fc();
    var startId = destination.e57();
    var startRoute = destination.n56_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(startId === 0) || !(startRoute == null))) {
      // Inline function 'androidx.navigation.NavGraphNavigator.navigate.<anonymous>' call
      var message = 'no start destination defined via app:startDestination for ' + destination.z55();
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp_0;
    if (!(startRoute == null)) {
      tmp_0 = destination.o57(startRoute, false);
    } else {
      tmp_0 = destination.k56_1.u(startId);
    }
    var startDestination = tmp_0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (startDestination == null) {
        var dest = destination.t57();
        throw IllegalArgumentException_init_$Create$('navigation destination ' + dest + ' is not a direct child of this NavGraph');
      } else {
        break $l$block;
      }
    }
    if (!(startRoute == null) && !(startRoute == startDestination.j55_1)) {
      var tmp0_safe_receiver = startDestination.b56(startRoute);
      var matchingArgs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l55_1;
      if (!(matchingArgs == null) && !matchingArgs.j()) {
        var bundle = Bundle_init_$Create$();
        bundle.u4c(matchingArgs);
        var tmp1_safe_receiver = args;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          bundle.u4c(tmp1_safe_receiver);
        }
        args = bundle;
      }
    }
    var navigator = $this.n58_1.o58(startDestination.d55_1);
    var startDestinationEntry = $this.p58().e53(startDestination, startDestination.r56(args));
    navigator.q58(listOf(startDestinationEntry), navOptions, navigatorExtras);
  }
  function Companion_5() {
    this.r58_1 = 'navigation';
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function NavGraphNavigator(navigatorProvider) {
    Navigator_init_$Init$('navigation', this);
    this.n58_1 = navigatorProvider;
  }
  protoOf(NavGraphNavigator).d57 = function () {
    return new NavGraph(this);
  };
  protoOf(NavGraphNavigator).q58 = function (entries, navOptions, navigatorExtras) {
    var tmp0_iterator = entries.m();
    while (tmp0_iterator.n()) {
      var entry = tmp0_iterator.o();
      navigate(this, entry, navOptions, navigatorExtras);
    }
  };
  function NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, getStringHashCode(Companion_instance_4.v55(popUpToRoute)), popUpToInclusive, popUpToSaveState);
    $this.d59_1 = popUpToRoute;
    return $this;
  }
  function NavOptions_init_$Create$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(ensureNotNull(popUpToRouteClass))), popUpToInclusive, popUpToSaveState);
    $this.e59_1 = popUpToRouteClass;
    return $this;
  }
  function NavOptions_init_$Create$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(getKClassFromExpression(popUpToRouteObject))), popUpToInclusive, popUpToSaveState);
    $this.f59_1 = popUpToRouteObject;
    return $this;
  }
  function NavOptions_init_$Create$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function Builder_1() {
    this.g59_1 = false;
    this.h59_1 = false;
    this.i59_1 = -1;
    this.j59_1 = null;
    this.k59_1 = null;
    this.l59_1 = null;
    this.m59_1 = false;
    this.n59_1 = false;
  }
  protoOf(Builder_1).o59 = function (singleTop) {
    this.g59_1 = singleTop;
    return this;
  };
  protoOf(Builder_1).p59 = function (restoreState) {
    this.h59_1 = restoreState;
    return this;
  };
  protoOf(Builder_1).q59 = function (destinationId, inclusive, saveState) {
    this.i59_1 = destinationId;
    this.j59_1 = null;
    this.m59_1 = inclusive;
    this.n59_1 = saveState;
    return this;
  };
  protoOf(Builder_1).r59 = function (route, inclusive, saveState) {
    this.j59_1 = route;
    this.i59_1 = -1;
    this.m59_1 = inclusive;
    this.n59_1 = saveState;
    return this;
  };
  protoOf(Builder_1).s59 = function (klass, inclusive, saveState) {
    this.k59_1 = klass;
    this.i59_1 = -1;
    this.m59_1 = inclusive;
    this.n59_1 = saveState;
    return this;
  };
  protoOf(Builder_1).t59 = function (route, inclusive, saveState) {
    this.l59_1 = route;
    this.q59(generateHashCode(serializer(getKClassFromExpression(route))), inclusive, saveState);
    return this;
  };
  protoOf(Builder_1).a2u = function () {
    var tmp;
    if (!(this.j59_1 == null)) {
      tmp = NavOptions_init_$Create$(this.g59_1, this.h59_1, this.j59_1, this.m59_1, this.n59_1);
    } else if (!(this.k59_1 == null)) {
      tmp = NavOptions_init_$Create$_0(this.g59_1, this.h59_1, this.k59_1, this.m59_1, this.n59_1);
    } else if (!(this.l59_1 == null)) {
      tmp = NavOptions_init_$Create$_1(this.g59_1, this.h59_1, ensureNotNull(this.l59_1), this.m59_1, this.n59_1);
    } else {
      tmp = new NavOptions(this.g59_1, this.h59_1, this.i59_1, this.m59_1, this.n59_1);
    }
    return tmp;
  };
  function NavOptions(singleTop, restoreState, popUpToId, popUpToInclusive, popUpToSaveState) {
    this.y58_1 = singleTop;
    this.z58_1 = restoreState;
    this.a59_1 = popUpToId;
    this.b59_1 = popUpToInclusive;
    this.c59_1 = popUpToSaveState;
    this.d59_1 = null;
    this.e59_1 = null;
    this.f59_1 = null;
  }
  protoOf(NavOptions).u59 = function () {
    return this.y58_1;
  };
  protoOf(NavOptions).v59 = function () {
    return this.z58_1;
  };
  protoOf(NavOptions).w59 = function () {
    return this.b59_1;
  };
  protoOf(NavOptions).x59 = function () {
    return this.c59_1;
  };
  protoOf(NavOptions).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavOptions);
    }
    if (tmp)
      return false;
    return this.y58_1 === other.y58_1 && this.z58_1 === other.z58_1 && this.a59_1 === other.a59_1 && this.d59_1 == other.d59_1 && equals(this.e59_1, other.e59_1) && equals(this.f59_1, other.f59_1) && this.b59_1 === other.b59_1 && this.c59_1 === other.c59_1;
  };
  protoOf(NavOptions).hashCode = function () {
    var result = this.u59() ? 1 : 0;
    result = imul(31, result) + (this.v59() ? 1 : 0) | 0;
    result = imul(31, result) + this.a59_1 | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.d59_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.e59_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.f59_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    result = imul(31, result) + (this.w59() ? 1 : 0) | 0;
    result = imul(31, result) + (this.x59() ? 1 : 0) | 0;
    return result;
  };
  protoOf(NavOptions).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.v8(getKClassFromExpression(this).pb());
    sb.v8('(');
    if (this.y58_1) {
      sb.v8('launchSingleTop ');
    }
    if (this.z58_1) {
      sb.v8('restoreState ');
    }
    if (!(this.d59_1 == null) || !(this.a59_1 === -1)) {
      sb.v8('popUpTo(');
      if (!(this.d59_1 == null)) {
        sb.v8(this.d59_1);
      } else if (!(this.e59_1 == null)) {
        sb.u8(this.e59_1);
      } else if (!(this.f59_1 == null)) {
        sb.u8(this.f59_1);
      } else {
        sb.v8(Companion_instance_4.u55(this.a59_1));
      }
      if (this.b59_1) {
        sb.v8(' inclusive');
      }
      if (this.c59_1) {
        sb.v8(' saveState');
      }
      sb.v8(')');
    }
    return sb.toString();
  };
  function _set_popUpToRoute__8d6451($this, value) {
    if (!(value == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isBlank(value)) {
        // Inline function 'androidx.navigation.NavOptionsBuilder.<set-popUpToRoute>.<anonymous>' call
        var message = 'Cannot pop up to an empty route';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      $this.o52_1 = value;
      $this.p52_1 = false;
    }
  }
  function NavOptionsBuilder() {
    this.k52_1 = new Builder_1();
    this.l52_1 = false;
    this.m52_1 = false;
    this.n52_1 = -1;
    this.o52_1 = null;
    this.p52_1 = false;
    this.q52_1 = false;
    this.r52_1 = null;
    this.s52_1 = null;
  }
  protoOf(NavOptionsBuilder).y59 = function (value) {
    this.n52_1 = value;
    this.p52_1 = false;
  };
  protoOf(NavOptionsBuilder).z59 = function (id, popUpToBuilder) {
    this.y59(id);
    _set_popUpToRoute__8d6451(this, null);
    // Inline function 'kotlin.apply' call
    var this_0 = new PopUpToBuilder();
    // Inline function 'kotlin.contracts.contract' call
    popUpToBuilder(this_0);
    var builder = this_0;
    this.p52_1 = builder.u52_1;
    this.q52_1 = builder.v52_1;
  };
  protoOf(NavOptionsBuilder).a5a = function (route, popUpToBuilder) {
    _set_popUpToRoute__8d6451(this, route);
    this.y59(-1);
    // Inline function 'kotlin.apply' call
    var this_0 = new PopUpToBuilder();
    // Inline function 'kotlin.contracts.contract' call
    popUpToBuilder(this_0);
    var builder = this_0;
    this.p52_1 = builder.u52_1;
    this.q52_1 = builder.v52_1;
  };
  protoOf(NavOptionsBuilder).t52 = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.k52_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavOptionsBuilder.build.<anonymous>' call
    this_0.o59(this.l52_1);
    this_0.p59(this.m52_1);
    if (!(this.o52_1 == null)) {
      this_0.r59(this.o52_1, this.p52_1, this.q52_1);
    } else if (!(this.r52_1 == null)) {
      this_0.s59(ensureNotNull(this.r52_1), this.p52_1, this.q52_1);
    } else if (!(this.s52_1 == null)) {
      this_0.t59(ensureNotNull(this.s52_1), this.p52_1, this.q52_1);
    } else {
      this_0.q59(this.n52_1, this.p52_1, this.q52_1);
    }
    return this_0.a2u();
  };
  function NavType() {
  }
  protoOf(NavType).c5a = function (value, previousValue) {
    return this.b5a(value);
  };
  protoOf(NavType).x51 = function (bundle, key, value) {
    var parsedValue = this.b5a(value);
    this.w51(bundle, key, parsedValue);
    return parsedValue;
  };
  protoOf(NavType).z51 = function (bundle, key, value, previousValue) {
    if (!bundle.r4c(key)) {
      throw IllegalArgumentException_init_$Create$('There is no previous value in this bundle.');
    }
    if (!(value == null)) {
      var parsedCombinedValue = this.c5a(value, previousValue);
      this.w51(bundle, key, parsedCombinedValue);
      return parsedCombinedValue;
    }
    return previousValue;
  };
  protoOf(NavType).f54 = function (value) {
    return toString(value);
  };
  protoOf(NavType).s3p = function () {
    return this.v51_1;
  };
  protoOf(NavType).p55 = function (value, other) {
    return equals(value, other);
  };
  function Navigator_init_$Init$(name, $this) {
    Navigator.call($this);
    $this.q55_1 = name;
    return $this;
  }
  function Navigator$navigate$lambda(this$0, $navOptions, $navigatorExtras) {
    return function (backStackEntry) {
      var tmp = backStackEntry.i53_1;
      var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var destination = tmp_0;
      var navigatedToDestination = this$0.t58(destination, backStackEntry.fc(), $navOptions, $navigatorExtras);
      var tmp_1;
      if (navigatedToDestination == null) {
        tmp_1 = null;
      } else if (equals(navigatedToDestination, destination)) {
        tmp_1 = backStackEntry;
      } else {
        tmp_1 = this$0.p58().e53(navigatedToDestination, navigatedToDestination.r56(backStackEntry.fc()));
      }
      return tmp_1;
    };
  }
  function Navigator$onLaunchSingleTop$lambda($this$navOptions) {
    $this$navOptions.l52_1 = true;
    return Unit_instance;
  }
  protoOf(Navigator).t55 = function () {
    var tmp0_elvis_lhs = this.q55_1;
    return tmp0_elvis_lhs == null ? removeSuffix(ensureNotNull(getKClassFromExpression(this).pb()), 'Navigator') : tmp0_elvis_lhs;
  };
  protoOf(Navigator).p58 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = this.r55_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'androidx.navigation.Navigator.<get-state>.<anonymous>' call
        var message = "You cannot access the Navigator's state until the Navigator is attached";
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(Navigator).s58 = function (state) {
    this.r55_1 = state;
    this.s55_1 = true;
  };
  protoOf(Navigator).q58 = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.sequences.forEach' call
    var tmp = asSequence_1(entries);
    var tmp0_iterator = filterNotNull(map(tmp, Navigator$navigate$lambda(this, navOptions, navigatorExtras))).m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.navigation.Navigator.navigate.<anonymous>' call
      this.p58().c53(element);
    }
  };
  protoOf(Navigator).h53 = function (backStackEntry) {
    var tmp = backStackEntry.i53_1;
    var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var destination = tmp_0;
    this.t58(destination, null, navOptions(Navigator$onLaunchSingleTop$lambda), null);
    this.p58().h53(backStackEntry);
  };
  protoOf(Navigator).t58 = function (destination, args, navOptions, navigatorExtras) {
    return destination;
  };
  protoOf(Navigator).u58 = function (popUpTo, savedState) {
    var backStack = this.p58().a53_1.c1();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!backStack.v(popUpTo)) {
      // Inline function 'androidx.navigation.Navigator.popBackStack.<anonymous>' call
      var message = 'popBackStack was called with ' + popUpTo.toString() + ' which does not exist in back stack ' + toString_0(backStack);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var iterator = backStack.w(backStack.p());
    var lastPoppedEntry = null;
    $l$loop: do {
      lastPoppedEntry = iterator.f5();
    }
     while (!equals(lastPoppedEntry, popUpTo) && this.v58());
    if (!(lastPoppedEntry == null)) {
      this.p58().f53(lastPoppedEntry, savedState);
    }
  };
  protoOf(Navigator).v58 = function () {
    return true;
  };
  protoOf(Navigator).w58 = function () {
    return null;
  };
  protoOf(Navigator).x58 = function (savedState) {
  };
  function Navigator() {
    this.r55_1 = null;
    this.s55_1 = false;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).d5a = function (name) {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    return !(name == null || charSequenceLength(name) === 0);
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function NavigatorProvider() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u57_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.v57_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NavigatorProvider).e5a = function () {
    return this.v57_1;
  };
  protoOf(NavigatorProvider).w57 = function (navigatorClass) {
    var tmp0_elvis_lhs = this.u57_1.s2(navigatorClass);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with class "' + toString_0(navigatorClass) + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).o58 = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_instance_7.d5a(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.getNavigator.<anonymous>' call
      var message = 'navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var tmp0_elvis_lhs = this.v57_1.s2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with name "' + name + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).f5a = function (navigator) {
    var previousNavigator = this.u57_1.s2(getKClassFromExpression(navigator));
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!((previousNavigator == null ? null : previousNavigator.s55_1) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator ' + toString_0(navigator) + ' is replacing an already attached ' + toString(previousNavigator);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!navigator.s55_1) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString_0(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.u57_1;
    var key = getKClassFromExpression(navigator);
    this_0.k2(key, navigator);
    return this.g5a(navigator.t55(), navigator);
  };
  protoOf(NavigatorProvider).g5a = function (name, navigator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_instance_7.d5a(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var previousNavigator = this.v57_1.s2(name);
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!((previousNavigator == null ? null : previousNavigator.s55_1) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString_0(navigator) + ' is replacing an already attached ' + toString(previousNavigator);
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!navigator.s55_1) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_1 = 'Navigator ' + toString_0(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString_0(message_1));
    }
    return this.v57_1.k2(name, navigator);
  };
  function Lock() {
  }
  //region block: post-declaration
  protoOf(NavBackStackEntry$defaultViewModelProviderFactory$1).n4g = create;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = generateHashCode;
  _.$_$.b = generateRouteWithArgs;
  _.$_$.c = FloatingWindow;
  _.$_$.d = NavDestinationBuilder;
  _.$_$.e = NavDestination;
  _.$_$.f = NavGraphNavigator;
  _.$_$.g = NavGraph;
  _.$_$.h = NavigatorProvider;
  _.$_$.i = NavigatorState;
  _.$_$.j = Navigator;
  _.$_$.k = navOptions;
  _.$_$.l = NavBackStackEntry_init_$Create$;
  _.$_$.m = NavDestination_init_$Init$;
  _.$_$.n = NavDestinationBuilder_init_$Init$;
  _.$_$.o = NavGraphBuilder_init_$Create$;
  _.$_$.p = Navigator_init_$Init$;
  _.$_$.q = Companion_instance_2;
  _.$_$.r = Companion_instance_3;
  _.$_$.s = Companion_instance_4;
  _.$_$.t = Companion_instance_5;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-common.js.map
