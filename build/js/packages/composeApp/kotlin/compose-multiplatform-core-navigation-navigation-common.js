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
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var toString = kotlin_kotlin.$_$.rk;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var checkIndexOverflow = kotlin_kotlin.$_$.e7;
  var UriUtils_instance = kotlin_org_jetbrains_androidx_core_core_uri.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.ti;
  var listOf = kotlin_kotlin.$_$.m9;
  var bundleOf = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.b;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var take = kotlin_kotlin.$_$.qa;
  var emptyList = kotlin_kotlin.$_$.a8;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var Comparable = kotlin_kotlin.$_$.oi;
  var StringBuilder = kotlin_kotlin.$_$.eg;
  var contains = kotlin_kotlin.$_$.hg;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var toString_0 = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var to = kotlin_kotlin.$_$.sk;
  var replace = kotlin_kotlin.$_$.eh;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.j;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var lazy = kotlin_kotlin.$_$.fk;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.l;
  var lazy_0 = kotlin_kotlin.$_$.ek;
  var addAll = kotlin_kotlin.$_$.v6;
  var plus = kotlin_kotlin.$_$.aa;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var hashCode = kotlin_kotlin.$_$.zc;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var emptySet = kotlin_kotlin.$_$.c8;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var plus_0 = kotlin_kotlin.$_$.ba;
  var Collection = kotlin_kotlin.$_$.h6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var lastOrNull = kotlin_kotlin.$_$.g9;
  var plus_1 = kotlin_kotlin.$_$.y9;
  var toMutableList = kotlin_kotlin.$_$.ab;
  var minus = kotlin_kotlin.$_$.s9;
  var Enum = kotlin_kotlin.$_$.qi;
  var first = kotlin_kotlin.$_$.k8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toMap = kotlin_kotlin.$_$.ya;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var equals = kotlin_kotlin.$_$.qc;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var AbstractSavedStateViewModelFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.a;
  var AbstractSavedStateViewModelFactory_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.g;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var Companion_getInstance_0 = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var getKClass = kotlin_kotlin.$_$.f;
  var create = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var LifecycleRegistry_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime.$_$.a;
  var Companion_instance = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.b;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var Bundle_init_$Create$_0 = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.c;
  var enableSavedStateHandles = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.f;
  var MutableCreationExtras_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var get_SAVED_STATE_REGISTRY_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.c;
  var get_VIEW_MODEL_STORE_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.d;
  var get_DEFAULT_ARGS_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.b;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  var Default_getInstance = kotlin_kotlin.$_$.j5;
  var toByte = kotlin_kotlin.$_$.ie;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var toHexString = kotlin_kotlin.$_$.vh;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var KtMap = kotlin_kotlin.$_$.o6;
  var toString_1 = kotlin_kotlin.$_$.ci;
  var generateSequence = kotlin_kotlin.$_$.vf;
  var isBlank = kotlin_kotlin.$_$.vg;
  var MutableCollection = kotlin_kotlin.$_$.p6;
  var asSequence = kotlin_kotlin.$_$.a7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var mapCapacity = kotlin_kotlin.$_$.o9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var SparseArrayCompat = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.n;
  var maxOrNull = kotlin_kotlin.$_$.q9;
  var listOfNotNull = kotlin_kotlin.$_$.l9;
  var valueIterator = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.w;
  var asSequence_0 = kotlin_kotlin.$_$.rf;
  var equals_0 = kotlin_kotlin.$_$.og;
  var removeSuffix = kotlin_kotlin.$_$.ch;
  var asSequence_1 = kotlin_kotlin.$_$.b7;
  var map = kotlin_kotlin.$_$.yf;
  var filterNotNull = kotlin_kotlin.$_$.tf;
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
  initMetadataForClass(NavGraph, 'NavGraph', VOID, NavDestination);
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
    var tmp0_iterator = _this__u8e3s4.u().g();
    while (tmp0_iterator.h()) {
      var entry = tmp0_iterator.i();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      var it = entry.w();
      var tmp;
      if (!ensureNotNull(it == null ? null : it.f4u_1)) {
        tmp = !it.g4u_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        result.f2(entry.v(), entry.w());
      }
    }
    var requiredArgumentKeys = result.j2();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_0 = requiredArgumentKeys.g();
    while (tmp0_iterator_0.h()) {
      var element = tmp0_iterator_0.i();
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
    var this_0 = $this.o4u_1;
    pathPattern$factory();
    return this_0.w();
  }
  function _get_isParameterizedQuery__xqgc1a($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.p4u_1;
    isParameterizedQuery$factory();
    return this_0.w();
  }
  function _get_queryArgsMap__wndpo($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.q4u_1;
    queryArgsMap$factory();
    return this_0.w();
  }
  function _get_fragArgsAndRegex__re1vcc($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.s4u_1;
    fragArgsAndRegex$factory();
    return this_0.w();
  }
  function _get_fragArgs__u59k8s($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.t4u_1;
    fragArgs$factory();
    return this_0.w();
  }
  function _get_fragRegex__izdpx8($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.u4u_1;
    fragRegex$factory();
    return this_0.w();
  }
  function _get_fragPattern__jm7xn7($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.v4u_1;
    fragPattern$factory();
    return this_0.w();
  }
  function buildRegex($this, uri, args, uriRegex) {
    var result = Companion_getInstance_2().a4v_1.xd(uri);
    var appendPos = 0;
    while (!(result == null)) {
      var argName = ensureNotNull(result.ve().o(1)).ie_1;
      args.e(argName);
      if (result.ce().c1_1 > appendPos) {
        var tmp = Companion_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex = appendPos;
        var endIndex = result.ce().c1_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = uri.substring(startIndex, endIndex);
        uriRegex.p8(tmp.sd(tmp$ret$1));
      }
      uriRegex.p8('([^/]*?|)');
      appendPos = result.ce().d1_1 + 1 | 0;
      result = result.i();
    }
    if (appendPos < uri.length) {
      var tmp_0 = Companion_getInstance();
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = appendPos;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = uri.substring(startIndex_0);
      uriRegex.p8(tmp_0.sd(tmp$ret$3));
    }
  }
  function getMatchingUriFragment($this, fragment, bundle, arguments_0) {
    var tmp0_safe_receiver = _get_fragPattern__jm7xn7($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ae(toString(fragment));
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
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_safe_receiver_0 = result.ve().o(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ie_1;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingUriFragment.<anonymous>.<anonymous>' call
        tmp_0 = UriUtils_instance.j4b(tmp1_safe_receiver);
      }
      var tmp0_elvis_lhs = tmp_0;
      var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var argument = arguments_0.n2(item);
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
    var this_0 = $this.m4u_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_safe_receiver = result.ve().o(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ie_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingPathArguments.<anonymous>.<anonymous>' call
        tmp = UriUtils_instance.j4b(tmp1_safe_receiver);
      }
      var tmp0_elvis_lhs = tmp;
      var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var argument = arguments_0.n2(item);
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
    var tmp0_iterator = _get_queryArgsMap__wndpo($this).u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavDeepLink.getMatchingQueryArguments.<anonymous>' call
      var paramName = element.v();
      var storedParam = element.w();
      var inputParams = deepLink.p4b(paramName);
      if ($this.r4u_1) {
        var argValue = deepLink.o4b();
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
    var tmp0_iterator = storedParam.e4v_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
      var argument = arguments_0.n2(element);
      var navType = argument == null ? null : argument.e4u_1;
      var tmp;
      if (navType instanceof CollectionNavType) {
        tmp = !argument.g4u_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        navType.g4v(tempBundle, element, navType.d4u());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = inputParams.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
      var tmp0_safe_receiver = storedParam.d4v_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
        tmp_0 = Regex_init_$Create$(tmp0_safe_receiver).ae(element_0);
      }
      var argMatchResult = tmp_0;
      if (argMatchResult == null) {
        return false;
      }
      // Inline function 'kotlin.collections.mapIndexed' call
      var this_0 = storedParam.e4v_1;
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var index = 0;
      var tmp0_iterator_1 = this_0.g();
      while (tmp0_iterator_1.h()) {
        var item = tmp0_iterator_1.i();
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var index_0 = checkIndexOverflow(tmp1);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_safe_receiver_0 = argMatchResult.ve().o(index_0 + 1 | 0);
        var tmp0_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ie_1;
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var argument_0 = arguments_0.n2(item);
        var tmp_1;
        try {
          var tmp_2;
          if (!tempBundle.h46(item)) {
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
    bundle.k46(tempBundle);
    return true;
  }
  function parseArgument($this, bundle, name, value, argument) {
    if (!(argument == null)) {
      var type = argument.e4u_1;
      type.h4v(bundle, name, value);
    } else {
      bundle.t46(name, value);
    }
  }
  function parseArgumentForRepeatedParam($this, bundle, name, value, argument) {
    if (!bundle.h46(name)) {
      return true;
    }
    if (!(argument == null)) {
      var type = argument.e4u_1;
      var previousValue = type.i4v(bundle, name);
      type.j4v(bundle, name, value, previousValue);
    }
    return false;
  }
  function ParamQuery() {
    this.d4v_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e4v_1 = ArrayList_init_$Create$();
  }
  protoOf(ParamQuery).k4v = function (name) {
    this.e4v_1.e(name);
  };
  function MimeType(mimeType) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = Regex_init_$Create$('/').be(mimeType, 0);
      if (!this_0.q()) {
        var iterator = this_0.d2(this_0.j());
        while (iterator.y4()) {
          // Inline function 'androidx.navigation.MimeType.<anonymous>' call
          // Inline function 'kotlin.text.isEmpty' call
          var this_1 = iterator.a5();
          if (!(charSequenceLength(this_1) === 0)) {
            tmp$ret$4 = take(this_0, iterator.z4() + 1 | 0);
            break $l$block;
          }
        }
      }
      tmp$ret$4 = emptyList();
    }
    var typeAndSubType = tmp$ret$4;
    this.l4v_1 = typeAndSubType.o(0);
    this.m4v_1 = typeAndSubType.o(1);
  }
  protoOf(MimeType).n4v = function (other) {
    var result = 0;
    if (this.l4v_1 === other.l4v_1) {
      result = result + 2 | 0;
    }
    if (this.m4v_1 === other.m4v_1) {
      result = result + 1 | 0;
    }
    return result;
  };
  protoOf(MimeType).d = function (other) {
    return this.n4v(other instanceof MimeType ? other : THROW_CCE());
  };
  protoOf(Builder).r4v = function (uriPattern) {
    this.o4v_1 = uriPattern;
    return this;
  };
  protoOf(Builder).c2o = function () {
    return new NavDeepLink(this.o4v_1, this.p4v_1, this.q4v_1);
  };
  function Builder() {
    this.o4v_1 = null;
    this.p4v_1 = null;
    this.q4v_1 = null;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.z4u_1 = Regex_init_$Create$('^[a-zA-Z]+[+\\w\\-.]*:');
    this.a4v_1 = Regex_init_$Create$('\\{(.+?)\\}');
    this.b4v_1 = Regex_init_$Create$('^[^?#]+\\?([^#]*).*');
    this.c4v_1 = '([\\s\\S]+?)?';
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function parsePath($this) {
    if ($this.j4u_1 == null)
      return Unit_instance;
    var uriRegex = new StringBuilder('^');
    if (!Companion_getInstance_2().z4u_1.wd($this.j4u_1)) {
      uriRegex.p8('http[s]?://');
    }
    var tmp0_safe_receiver = Regex_init_$Create$('(\\?|#|$)').xd($this.j4u_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavDeepLink.parsePath.<anonymous>' call
      // Inline function 'kotlin.text.substring' call
      var this_0 = $this.j4u_1;
      var endIndex = tmp0_safe_receiver.ce().c1_1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this_0.substring(0, endIndex);
      buildRegex($this, tmp$ret$1, $this.m4u_1, uriRegex);
      $this.y4u_1 = (!contains(uriRegex, '.*') && !contains(uriRegex, '([^/]+?)'));
      uriRegex.p8('($|(\\?(.)*)|(#(.)*))');
    }
    $this.n4u_1 = saveWildcardInRegex(uriRegex.toString(), $this);
  }
  function parseQuery($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var paramArgMap = LinkedHashMap_init_$Create$();
    if (!_get_isParameterizedQuery__xqgc1a($this))
      return paramArgMap;
    var uri = UriUtils_instance.yn(ensureNotNull($this.j4u_1));
    var tmp0_iterator = uri.q4b().g();
    while (tmp0_iterator.h()) {
      var paramName = tmp0_iterator.i();
      var argRegex = StringBuilder_init_$Create$();
      var queryParams = uri.p4b(paramName);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(queryParams.j() <= 1)) {
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        var message = 'Query parameter ' + paramName + ' must only be present once in ' + $this.j4u_1 + '. ' + 'To support repeated query parameters, use an array type for your ' + 'argument and the pattern provided in your URI will be used to ' + 'parse each query parameter instance.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      var tmp1_elvis_lhs = firstOrNull(queryParams);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        $this.r4u_1 = true;
        tmp = paramName;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var queryParam = tmp;
      var result = Companion_getInstance_2().a4v_1.xd(queryParam);
      var appendPos = 0;
      var param = new ParamQuery();
      while (!(result == null)) {
        param.k4v(ensureNotNull(result.ve().o(1)).ie_1);
        if (result.ce().c1_1 > appendPos) {
          // Inline function 'kotlin.text.substring' call
          var startIndex = appendPos;
          var endIndex = result.ce().c1_1;
          // Inline function 'kotlin.js.asDynamic' call
          var inputLiteral = queryParam.substring(startIndex, endIndex);
          argRegex.p8(Companion_getInstance().sd(inputLiteral));
        }
        argRegex.p8('([\\s\\S]+?)?');
        appendPos = result.ce().d1_1 + 1 | 0;
        result = result.i();
      }
      if (appendPos < queryParam.length) {
        var tmp_0 = Companion_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = appendPos;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = queryParam.substring(startIndex_0);
        argRegex.p8(tmp_0.sd(tmp$ret$6));
      }
      argRegex.p8('$');
      param.d4v_1 = saveWildcardInRegex(argRegex.toString(), $this);
      // Inline function 'kotlin.collections.set' call
      paramArgMap.f2(paramName, param);
    }
    return paramArgMap;
  }
  function parseFragment($this) {
    if ($this.j4u_1 == null || UriUtils_instance.yn($this.j4u_1).n4b() == null)
      return null;
    // Inline function 'kotlin.collections.mutableListOf' call
    var fragArgs = ArrayList_init_$Create$();
    var fragment = UriUtils_instance.yn($this.j4u_1).n4b();
    var fragRegex = StringBuilder_init_$Create$();
    buildRegex($this, ensureNotNull(fragment), fragArgs, fragRegex);
    return to(fragArgs, fragRegex.toString());
  }
  function parseMime($this) {
    if ($this.l4u_1 == null)
      return Unit_instance;
    var mimeTypePattern = Regex_init_$Create$('^[\\s\\S]+/[\\s\\S]+$');
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!mimeTypePattern.vd($this.l4u_1)) {
      // Inline function 'androidx.navigation.NavDeepLink.parseMime.<anonymous>' call
      var message = 'The given mimeType ' + $this.l4u_1 + ' does not match to required "type/subtype" format';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var splitMimeType = new MimeType($this.l4u_1);
    var regex = '^(' + splitMimeType.l4v_1 + '|[*]+)/(' + splitMimeType.m4v_1 + '|[*]+)$';
    $this.w4u_1 = replace(regex, '*|[*]', '[\\s\\S]');
  }
  function saveWildcardInRegex(_this__u8e3s4, $this) {
    return contains(_this__u8e3s4, '\\Q') && contains(_this__u8e3s4, '\\E') ? replace(_this__u8e3s4, '.*', '\\E.*\\Q') : contains(_this__u8e3s4, '\\.\\*') ? replace(_this__u8e3s4, '\\.\\*', '.*') : _this__u8e3s4;
  }
  function NavDeepLink$pathPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.n4u_1;
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
      return !(this$0.j4u_1 == null) && Companion_getInstance_2().b4v_1.vd(this$0.j4u_1);
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
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.eb_1;
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
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fb_1;
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
      var tmp0_safe_receiver = this$0.w4u_1;
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
      return !$bundle.h46(argName);
    };
  }
  function NavDeepLink(uriPattern, action, mimeType) {
    Companion_getInstance_2();
    this.j4u_1 = uriPattern;
    this.k4u_1 = action;
    this.l4u_1 = mimeType;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m4u_1 = ArrayList_init_$Create$();
    this.n4u_1 = null;
    var tmp_0 = this;
    tmp_0.o4u_1 = lazy(NavDeepLink$pathPattern$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.p4u_1 = lazy(NavDeepLink$isParameterizedQuery$delegate$lambda(this));
    var tmp_2 = this;
    var tmp_3 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_2.q4u_1 = lazy_0(tmp_3, NavDeepLink$queryArgsMap$delegate$lambda(this));
    this.r4u_1 = false;
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_4.s4u_1 = lazy_0(tmp_5, NavDeepLink$fragArgsAndRegex$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_6.t4u_1 = lazy_0(tmp_7, NavDeepLink$fragArgs$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_8.u4u_1 = lazy_0(tmp_9, NavDeepLink$fragRegex$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.v4u_1 = lazy(NavDeepLink$fragPattern$delegate$lambda(this));
    this.w4u_1 = null;
    var tmp_11 = this;
    tmp_11.x4u_1 = lazy(NavDeepLink$mimeTypePattern$delegate$lambda(this));
    this.y4u_1 = false;
    parsePath(this);
    parseMime(this);
  }
  protoOf(NavDeepLink).s4v = function () {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = _get_queryArgsMap__wndpo(this).k2();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavDeepLink.<get-argumentsNames>.<anonymous>' call
      var list = element.e4v_1;
      addAll(destination, list);
    }
    return plus(plus(this.m4u_1, destination), _get_fragArgs__u59k8s(this));
  };
  protoOf(NavDeepLink).t4v = function (deepLink, arguments_0) {
    var tmp0_safe_receiver = _get_pathPattern__sckhty(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ae(deepLink.toString());
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
    getMatchingUriFragment(this, deepLink.n4b(), bundle, arguments_0);
    var missingRequiredArguments_0 = missingRequiredArguments(arguments_0, NavDeepLink$getMatchingArguments$lambda(bundle));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingRequiredArguments_0.q())
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
    return this.j4u_1 == other.j4u_1 && this.k4u_1 == other.k4u_1 && this.l4u_1 == other.l4u_1;
  };
  protoOf(NavDeepLink).hashCode = function () {
    var result = 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.j4u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.k4u_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.l4u_1;
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
    return this_0.d4w();
  }
  function PopUpToBuilder() {
    this.e4w_1 = false;
    this.f4w_1 = false;
  }
  function NavigatorState() {
    this.g4w_1 = new Lock();
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.h4w_1 = MutableStateFlow(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$1 = emptySet();
    tmp_0.i4w_1 = MutableStateFlow(tmp$ret$1);
    this.j4w_1 = false;
    this.k4w_1 = asStateFlow(this.h4w_1);
    this.l4w_1 = asStateFlow(this.i4w_1);
  }
  protoOf(NavigatorState).m4w = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.g4w_1;
    this.h4w_1.n1v(plus_0(this.h4w_1.w(), backStackEntry));
  };
  protoOf(NavigatorState).n4w = function (backStackEntry) {
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.i4w_1.w();
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
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
        var this_1 = this.k4w_1.w();
        var tmp_1;
        if (isInterface(this_1, Collection)) {
          tmp_1 = this_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var tmp0_iterator_0 = this_1.g();
        while (tmp0_iterator_0.h()) {
          var element_0 = tmp0_iterator_0.i();
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
    var previousEntry = lastOrNull(this.k4w_1.w());
    if (!(previousEntry == null)) {
      this.i4w_1.n1v(plus_1(this.i4w_1.w(), previousEntry));
    }
    this.i4w_1.n1v(plus_1(this.i4w_1.w(), backStackEntry));
    this.m4w(backStackEntry);
  };
  protoOf(NavigatorState).p4w = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.g4w_1;
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = this.h4w_1.w();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    $l$loop: while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavigatorState.pop.<anonymous>.<anonymous>' call
      if (!!item.equals(popUpTo))
        break $l$loop;
      list.e(item);
    }
    this.h4w_1.n1v(list);
  };
  protoOf(NavigatorState).q4w = function (popUpTo, saveState) {
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.i4w_1.w();
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
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
        var this_1 = this.k4w_1.w();
        var tmp_1;
        if (isInterface(this_1, Collection)) {
          tmp_1 = this_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
        var tmp0_iterator_0 = this_1.g();
        while (tmp0_iterator_0.h()) {
          var element_0 = tmp0_iterator_0.i();
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
    this.i4w_1.n1v(plus_1(this.i4w_1.w(), popUpTo));
    var tmp$ret$5;
    $l$block_3: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_2 = this.k4w_1.w();
      var iterator = this_2.d2(this_2.j());
      while (iterator.y4()) {
        var element_1 = iterator.a5();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (!element_1.equals(popUpTo) && this.k4w_1.w().b2(element_1) < this.k4w_1.w().b2(popUpTo)) {
          tmp$ret$5 = element_1;
          break $l$block_3;
        }
      }
      tmp$ret$5 = null;
    }
    var incomingEntry = tmp$ret$5;
    if (!(incomingEntry == null)) {
      this.i4w_1.n1v(plus_1(this.i4w_1.w(), incomingEntry));
    }
    this.p4w(popUpTo, saveState);
  };
  protoOf(NavigatorState).r4w = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.g4w_1;
    var tempStack = toMutableList(this.k4w_1.w());
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tempStack.d2(tempStack.j());
      while (iterator.y4()) {
        // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTop.<anonymous>.<anonymous>' call
        if (iterator.a5().w4w_1 === backStackEntry.w4w_1) {
          tmp$ret$1 = iterator.z4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    // Inline function 'kotlin.contracts.contract' call
    var idx = tmp$ret$1;
    tempStack.q2(idx, backStackEntry);
    this.h4w_1.n1v(tempStack);
  };
  protoOf(NavigatorState).e4x = function (entry) {
    this.i4w_1.n1v(minus(this.i4w_1.w(), entry));
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
    $this.f4x_1 = serializer;
    $this.g4x_1 = serializer.y4b().b4d();
    return $this;
  }
  function RouteBuilder_init_$Create$(serializer) {
    return RouteBuilder_init_$Init$(serializer, objectCreate(protoOf(RouteBuilder)));
  }
  function addPath($this, path) {
    $this.h4x_1 = $this.h4x_1 + ('/' + path);
  }
  function addQuery($this, name, value) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = $this.i4x_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = '?';
    } else {
      tmp = '&';
    }
    var symbol = tmp;
    $this.i4x_1 = $this.i4x_1 + (symbol + name + '=' + value);
  }
  function computeParamType($this, index, type) {
    var tmp;
    var tmp_0;
    if (type instanceof CollectionNavType) {
      tmp_0 = true;
    } else {
      tmp_0 = $this.f4x_1.y4b().j4d(index);
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
  protoOf(RouteBuilder).c2o = function () {
    return this.g4x_1 + this.h4x_1 + this.i4x_1;
  };
  protoOf(RouteBuilder).j4x = function (index, name, type, value) {
    var paramType = computeParamType(this, index, type);
    var tmp0 = paramType.u2_1;
    if (tmp0 === 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(value.j() === 1)) {
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        var message = 'Expected one value for argument ' + name + ', found ' + value.j() + 'values instead.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      addPath(this, first(value));
    } else if (tmp0 === 1) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = value.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        addQuery(this, name, element);
      }
    }
  };
  function RouteBuilder() {
    this.h4x_1 = '';
    this.i4x_1 = '';
  }
  function internalEncodeValue($this, value) {
    var argName = $this.k4x_1.y4b().g4d($this.o4x_1);
    var navType = $this.l4x_1.n2(argName);
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
      tmp = navType.c4u(value);
    } else {
      tmp = listOf(navType.p4x(value));
    }
    var parsedValue = tmp;
    // Inline function 'kotlin.collections.set' call
    $this.n4x_1.f2(argName, parsedValue);
  }
  function RouteEncoder(serializer, typeMap) {
    AbstractEncoder.call(this);
    this.k4x_1 = serializer;
    this.l4x_1 = typeMap;
    this.m4x_1 = EmptySerializersModule();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n4x_1 = LinkedHashMap_init_$Create$();
    this.o4x_1 = -1;
  }
  protoOf(RouteEncoder).g4f = function () {
    return this.m4x_1;
  };
  protoOf(RouteEncoder).q4x = function (value) {
    protoOf(AbstractEncoder).f4f.call(this, this.k4x_1, !(value == null) ? value : THROW_CCE());
    return toMap(this.n4x_1);
  };
  protoOf(RouteEncoder).f4f = function (serializer, value) {
    internalEncodeValue(this, value);
  };
  protoOf(RouteEncoder).g4e = function (descriptor, index) {
    this.o4x_1 = index;
    return true;
  };
  protoOf(RouteEncoder).h4e = function (value) {
    internalEncodeValue(this, value);
  };
  protoOf(RouteEncoder).i4e = function () {
    internalEncodeValue(this, null);
  };
  protoOf(RouteEncoder).t4e = function (descriptor) {
    if (isValueClass(descriptor))
      this.o4x_1 = 0;
    return protoOf(AbstractEncoder).t4e.call(this, descriptor);
  };
  function generateHashCode(_this__u8e3s4) {
    var hash = getStringHashCode(_this__u8e3s4.y4b().b4d());
    var inductionVariable = 0;
    var last = _this__u8e3s4.y4b().e4d();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hash = imul(31, hash) + getStringHashCode(_this__u8e3s4.y4b().g4d(i)) | 0;
      }
       while (inductionVariable < last);
    return hash;
  }
  function generateRouteWithArgs(route, typeMap) {
    var serializer_0 = serializer(getKClassFromExpression(route));
    var argMap = (new RouteEncoder(serializer_0, typeMap)).q4x(route);
    var builder = RouteBuilder_init_$Create$(serializer_0);
    forEachIndexed(serializer_0, typeMap, generateRouteWithArgs$lambda(argMap, builder));
    return builder.c2o();
  }
  function forEachIndexed(_this__u8e3s4, typeMap, operation) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.y4b().e4d();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var argName = _this__u8e3s4.y4b().g4d(i);
        var navType = typeMap.n2(argName);
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
    return equals(_this__u8e3s4.c4d(), CLASS_getInstance()) && _this__u8e3s4.d4d() && _this__u8e3s4.e4d() === 1;
  }
  function generateRouteWithArgs$lambda($argMap, $builder) {
    return function (index, argName, navType) {
      var value = ensureNotNull($argMap.n2(argName));
      $builder.j4x(index, argName, navType, value);
      return Unit_instance;
    };
  }
  function NavBackStackEntry_init_$Init$(entry, arguments_0, $this) {
    arguments_0 = arguments_0 === VOID ? entry.ac() : arguments_0;
    NavBackStackEntry.call($this, entry.s4w_1, arguments_0, entry.u4w_1, entry.v4w_1, entry.w4w_1, entry.x4w_1);
    $this.u4w_1 = entry.u4w_1;
    $this.r4x(entry.c4x_1);
    return $this;
  }
  function NavBackStackEntry_init_$Create$(entry, arguments_0) {
    return NavBackStackEntry_init_$Init$(entry, arguments_0, objectCreate(protoOf(NavBackStackEntry)));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).s4x = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    return new NavBackStackEntry(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion_1).t4x = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState, $super) {
    arguments_0 = arguments_0 === VOID ? null : arguments_0;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? randomUUID() : id;
    savedState = savedState === VOID ? null : savedState;
    return $super === VOID ? this.s4x(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) : $super.s4x.call(this, destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion_1).u4x = function () {
    return randomUUID();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function NavResultSavedStateFactory(owner) {
    AbstractSavedStateViewModelFactory_init_$Init$(owner, null, this);
  }
  protoOf(NavResultSavedStateFactory).a4b = function (key, modelClass, handle) {
    var tmp = new SavedStateViewModel(handle);
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  function SavedStateViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.y4x_1 = handle;
  }
  function NavBackStackEntry$savedStateHandle$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!this$0.a4x_1) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message = "You cannot access the NavBackStackEntry's SavedStateHandle until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (!!this$0.y47().m45().equals(State_DESTROYED_getInstance())) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message_0 = "You cannot access the NavBackStackEntry's SavedStateHandle after the NavBackStackEntry is destroyed.";
        throw IllegalStateException_init_$Create$(toString_0(message_0));
      }
      return Companion_getInstance_0().c4a(this$0, new NavResultSavedStateFactory(this$0)).g4a(getKClass(SavedStateViewModel)).y4x_1;
    };
  }
  function NavBackStackEntry$defaultViewModelProviderFactory$1() {
  }
  function NavBackStackEntry(destination, immutableArgs, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    immutableArgs = immutableArgs === VOID ? null : immutableArgs;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? Companion_instance_2.u4x() : id;
    savedState = savedState === VOID ? null : savedState;
    this.s4w_1 = destination;
    this.t4w_1 = immutableArgs;
    this.u4w_1 = hostLifecycleState;
    this.v4w_1 = viewModelStoreProvider;
    this.w4w_1 = id;
    this.x4w_1 = savedState;
    this.y4w_1 = LifecycleRegistry_init_$Create$(this);
    this.z4w_1 = Companion_instance.t47(this);
    this.a4x_1 = false;
    var tmp = this;
    tmp.b4x_1 = lazy(NavBackStackEntry$savedStateHandle$delegate$lambda(this));
    this.c4x_1 = State_INITIALIZED_getInstance();
    var tmp_0 = this;
    tmp_0.d4x_1 = new NavBackStackEntry$defaultViewModelProviderFactory$1();
  }
  protoOf(NavBackStackEntry).ac = function () {
    var tmp;
    if (this.t4w_1 == null) {
      tmp = null;
    } else {
      tmp = Bundle_init_$Create$_0(this.t4w_1);
    }
    return tmp;
  };
  protoOf(NavBackStackEntry).y47 = function () {
    return this.y4w_1;
  };
  protoOf(NavBackStackEntry).r4x = function (maxState) {
    this.c4x_1 = maxState;
    this.z4x();
  };
  protoOf(NavBackStackEntry).f46 = function (event) {
    this.u4w_1 = event.f45();
    this.z4x();
  };
  protoOf(NavBackStackEntry).z4x = function () {
    if (!this.a4x_1) {
      this.z4w_1.x47();
      this.a4x_1 = true;
      if (!(this.v4w_1 == null)) {
        enableSavedStateHandles(this);
      }
      this.z4w_1.f48(this.x4w_1);
    }
    if (this.u4w_1.u2_1 < this.c4x_1.u2_1) {
      this.y4w_1.e46(this.u4w_1);
    } else {
      this.y4w_1.e46(this.c4x_1);
    }
  };
  protoOf(NavBackStackEntry).b4a = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.a4x_1) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message = "You cannot access the NavBackStackEntry's ViewModels until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.y47().m45().equals(State_DESTROYED_getInstance())) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message_0 = "You cannot access the NavBackStackEntry's ViewModels after the NavBackStackEntry is destroyed.";
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.v4w_1 == null) {
        // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
        var message_1 = 'You must call setViewModelStore() on your NavHostController before accessing the ViewModelStore of a navigation graph.';
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      } else {
        break $l$block;
      }
    }
    return this.v4w_1.a4y(this.w4w_1);
  };
  protoOf(NavBackStackEntry).p48 = function () {
    return this.d4x_1;
  };
  protoOf(NavBackStackEntry).q48 = function () {
    var extras = MutableCreationExtras_init_$Create$();
    extras.a49(get_SAVED_STATE_REGISTRY_OWNER_KEY(), this);
    extras.a49(get_VIEW_MODEL_STORE_OWNER_KEY(), this);
    var tmp0_safe_receiver = this.ac();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      extras.a49(get_DEFAULT_ARGS_KEY(), tmp0_safe_receiver);
    }
    return extras;
  };
  protoOf(NavBackStackEntry).j4a = function () {
    return this.z4w_1.v47_1;
  };
  protoOf(NavBackStackEntry).b4y = function (outBundle) {
    this.z4w_1.h48(outBundle);
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
    if (this.w4w_1 === other.w4w_1 && this.s4w_1.equals(other.s4w_1) && equals(this.y47(), other.y47()) && equals(this.j4a(), other.j4a())) {
      var tmp_1;
      if (equals(this.t4w_1, other.t4w_1)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver = this.t4w_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j46();
        var tmp_2;
        if (tmp1_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var tmp_3;
            if (isInterface(tmp1_safe_receiver, Collection)) {
              tmp_3 = tmp1_safe_receiver.q();
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
            var tmp0_iterator = tmp1_safe_receiver.g();
            while (tmp0_iterator.h()) {
              var element = tmp0_iterator.i();
              // Inline function 'androidx.navigation.NavBackStackEntry.equals.<anonymous>' call
              var tmp_4 = this.t4w_1.s47(element);
              var tmp0_safe_receiver_0 = other.t4w_1;
              if (!equals(tmp_4, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.s47(element))) {
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
    var result = getStringHashCode(this.w4w_1);
    result = imul(31, result) + this.s4w_1.hashCode() | 0;
    var tmp0_safe_receiver = this.t4w_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j46();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp1_safe_receiver.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.navigation.NavBackStackEntry.hashCode.<anonymous>' call
        var tmp = imul(31, result);
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = this.t4w_1.s47(element);
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
    }
    result = imul(31, result) + hashCode(this.y47()) | 0;
    result = imul(31, result) + hashCode(this.j4a()) | 0;
    return result;
  };
  protoOf(NavBackStackEntry).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.p8(getKClassFromExpression(this).kb());
    sb.p8('(' + this.w4w_1 + ')');
    sb.p8(' destination=');
    sb.o8(this.s4w_1);
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
    return StringBuilder_init_$Create$_0(36).p8(toHexString(bytes, 0, 4)).q8(_Char___init__impl__6a9atx(45)).p8(toHexString(bytes, 4, 6)).q8(_Char___init__impl__6a9atx(45)).p8(toHexString(bytes, 6, 8)).q8(_Char___init__impl__6a9atx(45)).p8(toHexString(bytes, 8, 10)).q8(_Char___init__impl__6a9atx(45)).p8(toHexString(bytes, 10)).toString();
  }
  function Companion_2() {
  }
  protoOf(Companion_2).c4y = function (uri) {
    var builder = new Builder_0();
    builder.g4y(uri);
    return builder;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Builder_0() {
    this.d4y_1 = null;
    this.e4y_1 = null;
    this.f4y_1 = null;
  }
  protoOf(Builder_0).g4y = function (uri) {
    this.d4y_1 = uri;
    return this;
  };
  protoOf(Builder_0).c2o = function () {
    return new NavDeepLinkRequest(this.d4y_1, this.e4y_1, this.f4y_1);
  };
  function NavDeepLinkRequest(uri, action, mimeType) {
    this.h4y_1 = uri;
    this.i4y_1 = action;
    this.j4y_1 = mimeType;
  }
  protoOf(NavDeepLinkRequest).k4y = function () {
    return this.h4y_1;
  };
  protoOf(NavDeepLinkRequest).l4y = function () {
    return this.i4y_1;
  };
  protoOf(NavDeepLinkRequest).m4y = function () {
    return this.j4y_1;
  };
  protoOf(NavDeepLinkRequest).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.p8('NavDeepLinkRequest');
    sb.p8('{');
    if (!(this.k4y() == null)) {
      sb.p8(' uri=');
      sb.p8(toString(this.k4y()));
    }
    if (!(this.l4y() == null)) {
      sb.p8(' action=');
      sb.p8(this.l4y());
    }
    if (!(this.m4y() == null)) {
      sb.p8(' mimetype=');
      sb.p8(this.m4y());
    }
    sb.p8(' }');
    return sb.toString();
  };
  function NavDestination$Companion$_get_hierarchy_$lambda_vny2w0(it) {
    return it.o4y_1;
  }
  function DeepLinkMatch(destination, matchingArgs, isExactDeepLink) {
    this.u4y_1 = destination;
    this.v4y_1 = matchingArgs;
    this.w4y_1 = isExactDeepLink;
  }
  protoOf(DeepLinkMatch).x4y = function (other) {
    if (this.w4y_1 && !other.w4y_1) {
      return 1;
    } else if (!this.w4y_1 && other.w4y_1) {
      return -1;
    }
    if (!(this.v4y_1 == null) && other.v4y_1 == null) {
      return 1;
    } else if (this.v4y_1 == null && !(other.v4y_1 == null)) {
      return -1;
    }
    if (!(this.v4y_1 == null)) {
      var sizeDifference = this.v4y_1.hr() - ensureNotNull(other.v4y_1).hr() | 0;
      if (sizeDifference > 0) {
        return 1;
      } else if (sizeDifference < 0) {
        return -1;
      }
    }
    return 0;
  };
  protoOf(DeepLinkMatch).d = function (other) {
    return this.x4y(other instanceof DeepLinkMatch ? other : THROW_CCE());
  };
  protoOf(DeepLinkMatch).y4y = function (arguments_0) {
    if (arguments_0 == null || this.v4y_1 == null)
      return false;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.v4y_1.j46().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.DeepLinkMatch.hasMatchingArgs.<anonymous>' call
      if (!arguments_0.h46(element))
        return false;
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.u4y_1.r4y_1;
      var tmp0_safe_receiver = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).n2(element);
      var type = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e4u_1;
      var matchingArgValue = type == null ? null : type.i4v(this.v4y_1, ensureNotNull(element));
      var entryArgValue = type == null ? null : type.i4v(arguments_0, ensureNotNull(element));
      if ((type == null ? null : type.z4y(matchingArgValue, entryArgValue)) === false) {
        return false;
      }
    }
    return true;
  };
  function NavDestination_init_$Init$(navigator, $this) {
    NavDestination.call($this, navigator.d4z());
    return $this;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).e4z = function (id) {
    return '0x' + toString_1(id, 16);
  };
  protoOf(Companion_3).f4z = function (route) {
    return !(route == null) ? 'multiplatform-app://androidx.navigation/' + route : '';
  };
  protoOf(Companion_3).g4z = function (_this__u8e3s4) {
    return generateSequence(_this__u8e3s4, NavDestination$Companion$_get_hierarchy_$lambda_vny2w0);
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function NavDestination$addDeepLink$lambda($navDeepLink) {
    return function (key) {
      return !$navDeepLink.s4v().p(key);
    };
  }
  function NavDestination(navigatorName) {
    this.n4y_1 = navigatorName;
    this.o4y_1 = null;
    this.p4y_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q4y_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.r4y_1 = LinkedHashMap_init_$Create$();
    this.s4y_1 = 0;
    this.t4y_1 = null;
  }
  protoOf(NavDestination).ac = function () {
    return toMap(this.r4y_1);
  };
  protoOf(NavDestination).h4z = function (route) {
    if (route == null) {
      this.s4y_1 = 0;
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isBlank(route)) {
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        var message = 'Cannot have an empty route';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      var internalRoute = Companion_instance_4.f4z(route);
      this.s4y_1 = getStringHashCode(internalRoute);
      this.i4z(internalRoute);
    }
    // Inline function 'kotlin.collections.remove' call
    var this_0 = this.q4y_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.q4y_1.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        if (element.j4u_1 === Companion_instance_4.f4z(this.t4y_1)) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var element_0 = tmp$ret$3;
    (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).o2(element_0);
    this.t4y_1 = route;
  };
  protoOf(NavDestination).j4z = function () {
    return this.n4y_1;
  };
  protoOf(NavDestination).i4z = function (uriPattern) {
    this.k4z(Builder_init_$Create$().r4v(uriPattern).c2o());
  };
  protoOf(NavDestination).k4z = function (navDeepLink) {
    var tmp = this.r4y_1;
    var missingRequiredArguments_0 = missingRequiredArguments(tmp, NavDestination$addDeepLink$lambda(navDeepLink));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!missingRequiredArguments_0.q()) {
      // Inline function 'androidx.navigation.NavDestination.addDeepLink.<anonymous>' call
      var message = 'Deep link ' + navDeepLink.j4u_1 + " can't be used to open destination " + this.toString() + '.\n' + ('Following required arguments are missing: ' + toString_0(missingRequiredArguments_0));
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.q4y_1.e(navDeepLink);
  };
  protoOf(NavDestination).l4z = function (route) {
    var request = Companion_instance_3.c4y(UriUtils_instance.yn(Companion_instance_4.f4z(route))).c2o();
    var tmp;
    if (this instanceof NavGraph) {
      tmp = this.y4z(request, false, false, this);
    } else {
      tmp = this.m4z(request);
    }
    var matchingDeepLink = tmp;
    return matchingDeepLink;
  };
  protoOf(NavDestination).m4z = function (navDeepLinkRequest) {
    if (this.q4y_1.q()) {
      return null;
    }
    var bestMatch = null;
    var tmp0_iterator = this.q4y_1.g();
    while (tmp0_iterator.h()) {
      var deepLink = tmp0_iterator.i();
      var uri = navDeepLinkRequest.k4y();
      var tmp;
      if (!(uri == null)) {
        tmp = deepLink.t4v(uri, this.r4y_1);
      } else {
        tmp = null;
      }
      var matchingArguments = tmp;
      if (!(matchingArguments == null)) {
        var newMatch = new DeepLinkMatch(this, matchingArguments, deepLink.y4u_1);
        if (bestMatch == null || newMatch.x4y(bestMatch) > 0) {
          bestMatch = newMatch;
        }
      }
    }
    return bestMatch;
  };
  protoOf(NavDestination).z4z = function (route, arguments_0) {
    if (this.t4y_1 === route)
      return true;
    var matchingDeepLink = this.l4z(route);
    if (!this.equals(matchingDeepLink == null ? null : matchingDeepLink.u4y_1))
      return false;
    return matchingDeepLink.y4y(arguments_0);
  };
  protoOf(NavDestination).a50 = function (argumentName, argument) {
    // Inline function 'kotlin.collections.set' call
    this.r4y_1.f2(argumentName, argument);
  };
  protoOf(NavDestination).b50 = function (args) {
    if (args == null && this.r4y_1.q()) {
      return null;
    }
    var defaultArgs = Bundle_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.r4y_1.u().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.v();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.w();
      value.c50(key, defaultArgs);
    }
    if (!(args == null)) {
      defaultArgs.k46(args);
      // Inline function 'kotlin.collections.iterator' call
      var tmp2_iterator = this.r4y_1.u().g();
      while (tmp2_iterator.h()) {
        var tmp3_loop_parameter = tmp2_iterator.i();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = tmp3_loop_parameter.v();
        // Inline function 'kotlin.collections.component2' call
        var value_0 = tmp3_loop_parameter.w();
        if (!value_0.h4u_1) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!value_0.d50(key_0, defaultArgs)) {
            // Inline function 'androidx.navigation.NavDestination.addInDefaultArgs.<anonymous>' call
            var message = "Wrong argument type for '" + key_0 + "' in argument bundle. " + value_0.e4u_1.h3j() + ' ' + 'expected.';
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
        }
      }
    }
    return defaultArgs;
  };
  protoOf(NavDestination).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.p8(getKClassFromExpression(this).kb());
    // Inline function 'kotlin.text.isNullOrBlank' call
    var this_0 = this.t4y_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null || isBlank(this_0))) {
      sb.p8(' route=');
      sb.p8(this.t4y_1);
    }
    if (!(this.p4y_1 == null)) {
      sb.p8(' label=');
      sb.f(this.p4y_1);
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
    var equalDeepLinks = equals(this.q4y_1, other.q4y_1);
    var tmp_0;
    if (this.r4y_1.j() === other.r4y_1.j()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var tmp0_iterator = asSequence(this.r4y_1).g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.navigation.NavDestination.equals.<anonymous>' call
          if (!(other.r4y_1.l2(element.v()) && equals(other.r4y_1.n2(element.v()), element.w()))) {
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
    return this.s4y_1 === other.s4y_1 && this.t4y_1 == other.t4y_1 && equalDeepLinks && equalArguments;
  };
  protoOf(NavDestination).hashCode = function () {
    var result = this.s4y_1;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.t4y_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.q4y_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      var tmp_0 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element.j4u_1;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
      var tmp_1 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_1 = element.k4u_1;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
      result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
      var tmp_2 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = element.l4u_1;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.r4y_1.j2().g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      result = imul(31, result) + getStringHashCode(element_0) | 0;
      var tmp_3 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = this.r4y_1.n2(element_0);
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
    this.e50_1 = navigator;
    this.f50_1 = id;
    this.g50_1 = route;
    this.h50_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.i50_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.j50_1 = ArrayList_init_$Create$();
  }
  protoOf(NavDestinationBuilder).k50 = function (name, argument) {
    // Inline function 'kotlin.collections.set' call
    this.i50_1.f2(name, argument);
  };
  protoOf(NavDestinationBuilder).l50 = function (navDeepLink) {
    this.j50_1.e(navDeepLink);
  };
  protoOf(NavDestinationBuilder).m50 = function () {
    return this.e50_1.n50();
  };
  protoOf(NavDestinationBuilder).c2o = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.m50();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>' call
    this_0.p4y_1 = this.h50_1;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.i50_1.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.v();
      // Inline function 'kotlin.collections.component2' call
      var argument = element.w();
      this_0.a50(name, argument);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.j50_1.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      this_0.k4z(element_0);
    }
    if (!(this.g50_1 == null)) {
      this_0.h4z(this.g50_1);
    }
    if (!(this.f50_1 === -1)) {
      this_0.s4y_1 = this.f50_1;
    }
    return this_0;
  };
  function NavGraph$Companion$childHierarchy$lambda(it) {
    var tmp;
    if (it instanceof NavGraph) {
      tmp = it.p50(it.o50());
    } else {
      tmp = null;
    }
    return tmp;
  }
  function _set_startDestinationId__488ru8($this, startDestId) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(startDestId === $this.s4y_1)) {
      // Inline function 'androidx.navigation.NavGraph.<set-startDestinationId>.<anonymous>' call
      var message = 'Start destination ' + startDestId + ' cannot use the same id as the graph ' + $this.toString();
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (!($this.x4z_1 == null)) {
      _set_startDestinationRoute__ih5gmw($this, null);
    }
    $this.v4z_1 = startDestId;
    $this.w4z_1 = null;
  }
  function _set_startDestinationRoute__ih5gmw($this, startDestRoute) {
    var tmp = $this;
    var tmp_0;
    if (startDestRoute == null) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(startDestRoute == $this.t4y_1)) {
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
      var internalRoute = Companion_instance_4.f4z(startDestRoute);
      tmp_0 = getStringHashCode(internalRoute);
    }
    tmp.v4z_1 = tmp_0;
    $this.x4z_1 = startDestRoute;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).q50 = function (_this__u8e3s4) {
    var tmp = _this__u8e3s4 instanceof NavDestination ? _this__u8e3s4 : THROW_CCE();
    return generateSequence(tmp, NavGraph$Companion$childHierarchy$lambda);
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function NavGraph$iterator$1(this$0) {
    this.t50_1 = this$0;
    this.r50_1 = -1;
    this.s50_1 = false;
  }
  protoOf(NavGraph$iterator$1).h = function () {
    return (this.r50_1 + 1 | 0) < this.t50_1.u4z_1.hr();
  };
  protoOf(NavGraph$iterator$1).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.s50_1 = true;
    this.r50_1 = this.r50_1 + 1 | 0;
    return this.t50_1.u4z_1.i13(this.r50_1);
  };
  protoOf(NavGraph$iterator$1).o4 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.s50_1) {
      // Inline function 'androidx.navigation.<no name provided>.remove.<anonymous>' call
      var message = 'You must call next() before you can remove an element';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = this.t50_1.u4z_1;
    $this$with.i13(this.r50_1).o4y_1 = null;
    $this$with.r13(this.r50_1);
    this.r50_1 = this.r50_1 - 1 | 0;
    this.s50_1 = false;
  };
  function NavGraph$setStartDestination$lambda($startDestRoute) {
    return function (startDestination) {
      // Inline function 'kotlin.collections.mapValues' call
      var this_0 = startDestination.ac();
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.j()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = this_0.u().g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp = element.v();
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>.<anonymous>' call
        var tmp$ret$1 = element.w().e4u_1;
        destination.f2(tmp, tmp$ret$1);
      }
      var args = destination;
      return generateRouteWithArgs($startDestRoute, args);
    };
  }
  function NavGraph(navGraphNavigator) {
    NavDestination_init_$Init$(navGraphNavigator, this);
    this.u4z_1 = new SparseArrayCompat();
    this.v4z_1 = 0;
    this.w4z_1 = null;
    this.x4z_1 = null;
  }
  protoOf(NavGraph).y4z = function (navDeepLinkRequest, searchChildren, searchParent, lastVisited) {
    var bestMatch = protoOf(NavDestination).m4z.call(this, navDeepLinkRequest);
    var tmp;
    if (searchChildren) {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
        var tmp0_safe_receiver = !element.equals(lastVisited) ? element.m4z(navDeepLinkRequest) : null;
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
    var tmp0_safe_receiver_0 = this.o4y_1;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
      tmp_0 = searchParent && !tmp0_safe_receiver_0.equals(lastVisited) ? tmp0_safe_receiver_0.y4z(navDeepLinkRequest, searchChildren, true, this) : null;
    }
    var bestParentMatch = tmp_0;
    return maxOrNull(listOfNotNull([bestMatch, bestChildMatch, bestParentMatch]));
  };
  protoOf(NavGraph).m4z = function (navDeepLinkRequest) {
    return this.y4z(navDeepLinkRequest, true, false, this);
  };
  protoOf(NavGraph).u50 = function (node) {
    var id = node.s4y_1;
    var innerRoute = node.t4y_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(id === 0) || !(innerRoute == null))) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message = 'Destinations must have an id or route.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (!(this.t4y_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(innerRoute == this.t4y_1)) {
        // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
        var message_0 = 'Destination ' + node.toString() + ' cannot have the same route as graph ' + this.toString();
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === this.s4y_1)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_1 = 'Destination ' + node.toString() + ' cannot have the same id as graph ' + this.toString();
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    var existingDestination = this.u4z_1.o(id);
    if (existingDestination === node) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(node.o4y_1 == null)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_2 = 'Destination already has a parent set. Call NavGraph.remove() to remove the previous parent.';
      throw IllegalStateException_init_$Create$(toString_0(message_2));
    }
    if (!(existingDestination == null)) {
      existingDestination.o4y_1 = null;
    }
    node.o4y_1 = this;
    this.u4z_1.u13(node.s4y_1, node);
  };
  protoOf(NavGraph).v50 = function (nodes) {
    var tmp0_iterator = nodes.g();
    $l$loop: while (tmp0_iterator.h()) {
      var node = tmp0_iterator.i();
      if (node == null) {
        continue $l$loop;
      }
      this.u50(node);
    }
  };
  protoOf(NavGraph).p50 = function (resId) {
    return this.w50(resId, this, false);
  };
  protoOf(NavGraph).w50 = function (resId, lastVisited, searchChildren) {
    var destination = this.u4z_1.o(resId);
    if (!(destination == null))
      return destination;
    if (searchChildren) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
        var tmp0_iterator = asSequence_0(valueIterator(this.u4z_1)).g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.navigation.NavGraph.findNodeComprehensive.<anonymous>' call
          var tmp;
          var tmp_0;
          if (element instanceof NavGraph) {
            tmp_0 = !element.equals(lastVisited);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp = element.w50(resId, this, true);
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
      if (!(this.o4y_1 == null) && !equals(this.o4y_1, lastVisited)) {
        tmp_2 = ensureNotNull(this.o4y_1).w50(resId, this, searchChildren);
      } else {
        tmp_2 = null;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  };
  protoOf(NavGraph).x50 = function (route) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(route == null || isBlank(route))) {
      tmp = this.y50(route, true);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(NavGraph).y50 = function (route, searchParents) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = asSequence_0(valueIterator(this.u4z_1)).g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.navigation.NavGraph.findNode.<anonymous>' call
        if (equals_0(element.t4y_1, route) || !(element.l4z(route) == null)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var destination = tmp$ret$1;
    return destination == null ? searchParents && !(this.o4y_1 == null) ? ensureNotNull(this.o4y_1).x50(route) : null : destination;
  };
  protoOf(NavGraph).g = function () {
    return new NavGraph$iterator$1(this);
  };
  protoOf(NavGraph).j4z = function () {
    return !(this.s4y_1 === 0) ? protoOf(NavDestination).j4z.call(this) : 'the root navigation';
  };
  protoOf(NavGraph).o50 = function () {
    return this.v4z_1;
  };
  protoOf(NavGraph).z50 = function (startDestId) {
    _set_startDestinationId__488ru8(this, startDestId);
  };
  protoOf(NavGraph).a51 = function (startDestRoute) {
    _set_startDestinationRoute__ih5gmw(this, startDestRoute);
  };
  protoOf(NavGraph).b51 = function (startDestRoute) {
    var tmp = serializer(getKClassFromExpression(startDestRoute));
    this.c51(tmp, NavGraph$setStartDestination$lambda(startDestRoute));
  };
  protoOf(NavGraph).c51 = function (serializer, parseRoute) {
    var id = generateHashCode(serializer);
    var startDest = this.p50(id);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (startDest == null) {
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>' call
        var message = 'Cannot find startDestination ' + serializer.y4b().b4d() + ' from NavGraph. ' + 'Ensure the starting NavDestination was added with route from KClass.';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    _set_startDestinationRoute__ih5gmw(this, parseRoute(startDest));
    this.v4z_1 = id;
  };
  protoOf(NavGraph).d51 = function () {
    if (this.w4z_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.x4z_1;
      tmp.w4z_1 = tmp0_elvis_lhs == null ? this.v4z_1.toString() : tmp0_elvis_lhs;
    }
    return ensureNotNull(this.w4z_1);
  };
  protoOf(NavGraph).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.p8(protoOf(NavDestination).toString.call(this));
    var tmp0_elvis_lhs = this.x50(this.x4z_1);
    var startDestination = tmp0_elvis_lhs == null ? this.p50(this.o50()) : tmp0_elvis_lhs;
    sb.p8(' startDestination=');
    if (startDestination == null) {
      if (!(this.x4z_1 == null)) {
        sb.p8(this.x4z_1);
      } else if (!(this.w4z_1 == null)) {
        sb.p8(this.w4z_1);
      } else {
        sb.p8(Companion_instance_4.e4z(this.v4z_1));
      }
    } else {
      sb.p8('{');
      sb.p8(startDestination.toString());
      sb.p8('}');
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
      var tmp_3 = this.u4z_1.hr();
      // Inline function 'androidx.collection.size' call
      tmp_2 = tmp_3 === other.u4z_1.hr();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.o50() === other.o50();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var tmp0_iterator = asSequence_0(valueIterator(this.u4z_1)).g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.navigation.NavGraph.equals.<anonymous>' call
          if (!element.equals(other.u4z_1.o(element.s4y_1))) {
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
    var result = this.o50();
    // Inline function 'androidx.collection.forEach' call
    var this_0 = this.u4z_1;
    var inductionVariable = 0;
    var last = this_0.hr();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.navigation.NavGraph.hashCode.<anonymous>' call
        var key = this_0.p13(index);
        var value = this_0.i13(index);
        result = imul(31, result) + key | 0;
        result = imul(31, result) + value.hashCode() | 0;
      }
       while (inductionVariable < last);
    return result;
  };
  function NavGraphBuilder_init_$Init$(provider, startDestination, route, $this) {
    // Inline function 'androidx.navigation.get' call
    var clazz = getKClass(NavGraphNavigator);
    var tmp$ret$0 = provider.g51(clazz);
    NavDestinationBuilder_init_$Init$(tmp$ret$0, route, $this);
    NavGraphBuilder.call($this);
    $this.n51_1 = provider;
    $this.p51_1 = startDestination;
    return $this;
  }
  function NavGraphBuilder_init_$Create$(provider, startDestination, route) {
    return NavGraphBuilder_init_$Init$(provider, startDestination, route, objectCreate(protoOf(NavGraphBuilder)));
  }
  function NavGraphBuilder$build$lambda(it) {
    return ensureNotNull(it.t4y_1);
  }
  protoOf(NavGraphBuilder).t51 = function (navDestination) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.s51_1;
    var element = navDestination.c2o();
    this_0.e(element);
  };
  protoOf(NavGraphBuilder).c2o = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(NavDestinationBuilder).c2o.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavGraphBuilder.build.<anonymous>' call
    this_0.v50(this.s51_1);
    if (this.o51_1 === 0 && this.p51_1 == null && this.q51_1 == null && this.r51_1 == null) {
      if (!(this.g50_1 == null)) {
        throw IllegalStateException_init_$Create$('You must set a start destination route');
      } else {
        throw IllegalStateException_init_$Create$('You must set a start destination id');
      }
    }
    if (!(this.p51_1 == null)) {
      this_0.a51(ensureNotNull(this.p51_1));
    } else if (!(this.q51_1 == null)) {
      var tmp = serializer(ensureNotNull(this.q51_1));
      this_0.c51(tmp, NavGraphBuilder$build$lambda);
    } else if (!(this.r51_1 == null)) {
      this_0.b51(ensureNotNull(this.r51_1));
    } else {
      this_0.z50(this.o51_1);
    }
    return this_0;
  };
  function NavGraphBuilder() {
    this.o51_1 = 0;
    this.p51_1 = null;
    this.q51_1 = null;
    this.r51_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s51_1 = ArrayList_init_$Create$();
  }
  function navigate($this, entry, navOptions, navigatorExtras) {
    var tmp = entry.s4w_1;
    var destination = tmp instanceof NavGraph ? tmp : THROW_CCE();
    var args = entry.ac();
    var startId = destination.o50();
    var startRoute = destination.x4z_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(startId === 0) || !(startRoute == null))) {
      // Inline function 'androidx.navigation.NavGraphNavigator.navigate.<anonymous>' call
      var message = 'no start destination defined via app:startDestination for ' + destination.j4z();
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp_0;
    if (!(startRoute == null)) {
      tmp_0 = destination.y50(startRoute, false);
    } else {
      tmp_0 = destination.u4z_1.o(startId);
    }
    var startDestination = tmp_0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (startDestination == null) {
        var dest = destination.d51();
        throw IllegalArgumentException_init_$Create$('navigation destination ' + dest + ' is not a direct child of this NavGraph');
      } else {
        break $l$block;
      }
    }
    if (!(startRoute == null) && !(startRoute == startDestination.t4y_1)) {
      var tmp0_safe_receiver = startDestination.l4z(startRoute);
      var matchingArgs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v4y_1;
      if (!(matchingArgs == null) && !matchingArgs.q()) {
        var bundle = Bundle_init_$Create$();
        bundle.k46(matchingArgs);
        var tmp1_safe_receiver = args;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          bundle.k46(tmp1_safe_receiver);
        }
        args = bundle;
      }
    }
    var navigator = $this.x51_1.y51(startDestination.n4y_1);
    var startDestinationEntry = $this.z51().o4w(startDestination, startDestination.b50(args));
    navigator.a52(listOf(startDestinationEntry), navOptions, navigatorExtras);
  }
  function Companion_5() {
    this.b52_1 = 'navigation';
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function NavGraphNavigator(navigatorProvider) {
    Navigator_init_$Init$('navigation', this);
    this.x51_1 = navigatorProvider;
  }
  protoOf(NavGraphNavigator).n50 = function () {
    return new NavGraph(this);
  };
  protoOf(NavGraphNavigator).a52 = function (entries, navOptions, navigatorExtras) {
    var tmp0_iterator = entries.g();
    while (tmp0_iterator.h()) {
      var entry = tmp0_iterator.i();
      navigate(this, entry, navOptions, navigatorExtras);
    }
  };
  function NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, getStringHashCode(Companion_instance_4.f4z(popUpToRoute)), popUpToInclusive, popUpToSaveState);
    $this.n52_1 = popUpToRoute;
    return $this;
  }
  function NavOptions_init_$Create$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(ensureNotNull(popUpToRouteClass))), popUpToInclusive, popUpToSaveState);
    $this.o52_1 = popUpToRouteClass;
    return $this;
  }
  function NavOptions_init_$Create$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(getKClassFromExpression(popUpToRouteObject))), popUpToInclusive, popUpToSaveState);
    $this.p52_1 = popUpToRouteObject;
    return $this;
  }
  function NavOptions_init_$Create$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function Builder_1() {
    this.q52_1 = false;
    this.r52_1 = false;
    this.s52_1 = -1;
    this.t52_1 = null;
    this.u52_1 = null;
    this.v52_1 = null;
    this.w52_1 = false;
    this.x52_1 = false;
  }
  protoOf(Builder_1).y52 = function (singleTop) {
    this.q52_1 = singleTop;
    return this;
  };
  protoOf(Builder_1).z52 = function (restoreState) {
    this.r52_1 = restoreState;
    return this;
  };
  protoOf(Builder_1).a53 = function (destinationId, inclusive, saveState) {
    this.s52_1 = destinationId;
    this.t52_1 = null;
    this.w52_1 = inclusive;
    this.x52_1 = saveState;
    return this;
  };
  protoOf(Builder_1).b53 = function (route, inclusive, saveState) {
    this.t52_1 = route;
    this.s52_1 = -1;
    this.w52_1 = inclusive;
    this.x52_1 = saveState;
    return this;
  };
  protoOf(Builder_1).c53 = function (klass, inclusive, saveState) {
    this.u52_1 = klass;
    this.s52_1 = -1;
    this.w52_1 = inclusive;
    this.x52_1 = saveState;
    return this;
  };
  protoOf(Builder_1).d53 = function (route, inclusive, saveState) {
    this.v52_1 = route;
    this.a53(generateHashCode(serializer(getKClassFromExpression(route))), inclusive, saveState);
    return this;
  };
  protoOf(Builder_1).c2o = function () {
    var tmp;
    if (!(this.t52_1 == null)) {
      tmp = NavOptions_init_$Create$(this.q52_1, this.r52_1, this.t52_1, this.w52_1, this.x52_1);
    } else if (!(this.u52_1 == null)) {
      tmp = NavOptions_init_$Create$_0(this.q52_1, this.r52_1, this.u52_1, this.w52_1, this.x52_1);
    } else if (!(this.v52_1 == null)) {
      tmp = NavOptions_init_$Create$_1(this.q52_1, this.r52_1, ensureNotNull(this.v52_1), this.w52_1, this.x52_1);
    } else {
      tmp = new NavOptions(this.q52_1, this.r52_1, this.s52_1, this.w52_1, this.x52_1);
    }
    return tmp;
  };
  function NavOptions(singleTop, restoreState, popUpToId, popUpToInclusive, popUpToSaveState) {
    this.i52_1 = singleTop;
    this.j52_1 = restoreState;
    this.k52_1 = popUpToId;
    this.l52_1 = popUpToInclusive;
    this.m52_1 = popUpToSaveState;
    this.n52_1 = null;
    this.o52_1 = null;
    this.p52_1 = null;
  }
  protoOf(NavOptions).e53 = function () {
    return this.i52_1;
  };
  protoOf(NavOptions).f53 = function () {
    return this.j52_1;
  };
  protoOf(NavOptions).g53 = function () {
    return this.l52_1;
  };
  protoOf(NavOptions).h53 = function () {
    return this.m52_1;
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
    return this.i52_1 === other.i52_1 && this.j52_1 === other.j52_1 && this.k52_1 === other.k52_1 && this.n52_1 == other.n52_1 && equals(this.o52_1, other.o52_1) && equals(this.p52_1, other.p52_1) && this.l52_1 === other.l52_1 && this.m52_1 === other.m52_1;
  };
  protoOf(NavOptions).hashCode = function () {
    var result = this.e53() ? 1 : 0;
    result = imul(31, result) + (this.f53() ? 1 : 0) | 0;
    result = imul(31, result) + this.k52_1 | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.n52_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.o52_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.p52_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    result = imul(31, result) + (this.g53() ? 1 : 0) | 0;
    result = imul(31, result) + (this.h53() ? 1 : 0) | 0;
    return result;
  };
  protoOf(NavOptions).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.p8(getKClassFromExpression(this).kb());
    sb.p8('(');
    if (this.i52_1) {
      sb.p8('launchSingleTop ');
    }
    if (this.j52_1) {
      sb.p8('restoreState ');
    }
    if (!(this.n52_1 == null) || !(this.k52_1 === -1)) {
      sb.p8('popUpTo(');
      if (!(this.n52_1 == null)) {
        sb.p8(this.n52_1);
      } else if (!(this.o52_1 == null)) {
        sb.o8(this.o52_1);
      } else if (!(this.p52_1 == null)) {
        sb.o8(this.p52_1);
      } else {
        sb.p8(Companion_instance_4.e4z(this.k52_1));
      }
      if (this.l52_1) {
        sb.p8(' inclusive');
      }
      if (this.m52_1) {
        sb.p8(' saveState');
      }
      sb.p8(')');
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
      $this.y4v_1 = value;
      $this.z4v_1 = false;
    }
  }
  function NavOptionsBuilder() {
    this.u4v_1 = new Builder_1();
    this.v4v_1 = false;
    this.w4v_1 = false;
    this.x4v_1 = -1;
    this.y4v_1 = null;
    this.z4v_1 = false;
    this.a4w_1 = false;
    this.b4w_1 = null;
    this.c4w_1 = null;
  }
  protoOf(NavOptionsBuilder).i53 = function (value) {
    this.x4v_1 = value;
    this.z4v_1 = false;
  };
  protoOf(NavOptionsBuilder).j53 = function (route, popUpToBuilder) {
    _set_popUpToRoute__8d6451(this, route);
    this.i53(-1);
    // Inline function 'kotlin.apply' call
    var this_0 = new PopUpToBuilder();
    // Inline function 'kotlin.contracts.contract' call
    popUpToBuilder(this_0);
    var builder = this_0;
    this.z4v_1 = builder.e4w_1;
    this.a4w_1 = builder.f4w_1;
  };
  protoOf(NavOptionsBuilder).d4w = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.u4v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavOptionsBuilder.build.<anonymous>' call
    this_0.y52(this.v4v_1);
    this_0.z52(this.w4v_1);
    if (!(this.y4v_1 == null)) {
      this_0.b53(this.y4v_1, this.z4v_1, this.a4w_1);
    } else if (!(this.b4w_1 == null)) {
      this_0.c53(ensureNotNull(this.b4w_1), this.z4v_1, this.a4w_1);
    } else if (!(this.c4w_1 == null)) {
      this_0.d53(ensureNotNull(this.c4w_1), this.z4v_1, this.a4w_1);
    } else {
      this_0.a53(this.x4v_1, this.z4v_1, this.a4w_1);
    }
    return this_0.c2o();
  };
  function NavType() {
  }
  protoOf(NavType).l53 = function (value, previousValue) {
    return this.k53(value);
  };
  protoOf(NavType).h4v = function (bundle, key, value) {
    var parsedValue = this.k53(value);
    this.g4v(bundle, key, parsedValue);
    return parsedValue;
  };
  protoOf(NavType).j4v = function (bundle, key, value, previousValue) {
    if (!bundle.h46(key)) {
      throw IllegalArgumentException_init_$Create$('There is no previous value in this bundle.');
    }
    if (!(value == null)) {
      var parsedCombinedValue = this.l53(value, previousValue);
      this.g4v(bundle, key, parsedCombinedValue);
      return parsedCombinedValue;
    }
    return previousValue;
  };
  protoOf(NavType).p4x = function (value) {
    return toString(value);
  };
  protoOf(NavType).h3j = function () {
    return this.f4v_1;
  };
  protoOf(NavType).z4y = function (value, other) {
    return equals(value, other);
  };
  function Navigator_init_$Init$(name, $this) {
    Navigator.call($this);
    $this.a4z_1 = name;
    return $this;
  }
  function Navigator$navigate$lambda(this$0, $navOptions, $navigatorExtras) {
    return function (backStackEntry) {
      var tmp = backStackEntry.s4w_1;
      var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var destination = tmp_0;
      var navigatedToDestination = this$0.d52(destination, backStackEntry.ac(), $navOptions, $navigatorExtras);
      var tmp_1;
      if (navigatedToDestination == null) {
        tmp_1 = null;
      } else if (equals(navigatedToDestination, destination)) {
        tmp_1 = backStackEntry;
      } else {
        tmp_1 = this$0.z51().o4w(navigatedToDestination, navigatedToDestination.b50(backStackEntry.ac()));
      }
      return tmp_1;
    };
  }
  function Navigator$onLaunchSingleTop$lambda($this$navOptions) {
    $this$navOptions.v4v_1 = true;
    return Unit_instance;
  }
  protoOf(Navigator).d4z = function () {
    var tmp0_elvis_lhs = this.a4z_1;
    return tmp0_elvis_lhs == null ? removeSuffix(ensureNotNull(getKClassFromExpression(this).kb()), 'Navigator') : tmp0_elvis_lhs;
  };
  protoOf(Navigator).z51 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = this.b4z_1;
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
  protoOf(Navigator).c52 = function (state) {
    this.b4z_1 = state;
    this.c4z_1 = true;
  };
  protoOf(Navigator).a52 = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.sequences.forEach' call
    var tmp = asSequence_1(entries);
    var tmp0_iterator = filterNotNull(map(tmp, Navigator$navigate$lambda(this, navOptions, navigatorExtras))).g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.navigation.Navigator.navigate.<anonymous>' call
      this.z51().m4w(element);
    }
  };
  protoOf(Navigator).r4w = function (backStackEntry) {
    var tmp = backStackEntry.s4w_1;
    var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var destination = tmp_0;
    this.d52(destination, null, navOptions(Navigator$onLaunchSingleTop$lambda), null);
    this.z51().r4w(backStackEntry);
  };
  protoOf(Navigator).d52 = function (destination, args, navOptions, navigatorExtras) {
    return destination;
  };
  protoOf(Navigator).e52 = function (popUpTo, savedState) {
    var backStack = this.z51().k4w_1.w();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!backStack.p(popUpTo)) {
      // Inline function 'androidx.navigation.Navigator.popBackStack.<anonymous>' call
      var message = 'popBackStack was called with ' + popUpTo.toString() + ' which does not exist in back stack ' + toString_0(backStack);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var iterator = backStack.d2(backStack.j());
    var lastPoppedEntry = null;
    $l$loop: do {
      lastPoppedEntry = iterator.a5();
    }
     while (!equals(lastPoppedEntry, popUpTo) && this.f52());
    if (!(lastPoppedEntry == null)) {
      this.z51().p4w(lastPoppedEntry, savedState);
    }
  };
  protoOf(Navigator).f52 = function () {
    return true;
  };
  protoOf(Navigator).g52 = function () {
    return null;
  };
  protoOf(Navigator).h52 = function (savedState) {
  };
  function Navigator() {
    this.b4z_1 = null;
    this.c4z_1 = false;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).m53 = function (name) {
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
    tmp.e51_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.f51_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NavigatorProvider).n53 = function () {
    return this.f51_1;
  };
  protoOf(NavigatorProvider).g51 = function (navigatorClass) {
    var tmp0_elvis_lhs = this.e51_1.n2(navigatorClass);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with class "' + toString_0(navigatorClass) + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).y51 = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_instance_7.m53(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.getNavigator.<anonymous>' call
      var message = 'navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var tmp0_elvis_lhs = this.f51_1.n2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with name "' + name + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).o53 = function (navigator) {
    var previousNavigator = this.e51_1.n2(getKClassFromExpression(navigator));
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!((previousNavigator == null ? null : previousNavigator.c4z_1) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator ' + toString_0(navigator) + ' is replacing an already attached ' + toString(previousNavigator);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!navigator.c4z_1) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString_0(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.e51_1;
    var key = getKClassFromExpression(navigator);
    this_0.f2(key, navigator);
    return this.p53(navigator.d4z(), navigator);
  };
  protoOf(NavigatorProvider).p53 = function (name, navigator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_instance_7.m53(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var previousNavigator = this.f51_1.n2(name);
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!((previousNavigator == null ? null : previousNavigator.c4z_1) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString_0(navigator) + ' is replacing an already attached ' + toString(previousNavigator);
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!navigator.c4z_1) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_1 = 'Navigator ' + toString_0(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString_0(message_1));
    }
    return this.f51_1.f2(name, navigator);
  };
  function Lock() {
  }
  //region block: post-declaration
  protoOf(NavBackStackEntry$defaultViewModelProviderFactory$1).z49 = create;
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
