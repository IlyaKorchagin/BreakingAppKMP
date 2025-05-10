(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-core-core-uri.js', './compose-multiplatform-core-core-core-bundle.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-runtime.js', './compose-multiplatform-core-savedstate-savedstate.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-core-core-uri.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-runtime.js'), require('./compose-multiplatform-core-savedstate-savedstate.js'), require('./compose-multiplatform-core-collection-collection.js'));
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
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
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
    globalThis['compose-multiplatform-core-navigation-navigation-common'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-core-core-uri'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'], globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_core_core_uri, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime, kotlin_org_jetbrains_androidx_savedstate_savedstate, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.yh;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForInterface = kotlin_kotlin.$_$.ug;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var toString = kotlin_kotlin.$_$.ci;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var ClassCastException = kotlin_kotlin.$_$.gn;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var toString_0 = kotlin_kotlin.$_$.op;
  var equals = kotlin_kotlin.$_$.gg;
  var hashCode = kotlin_kotlin.$_$.pg;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var ensureNotNull = kotlin_kotlin.$_$.to;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var objectCreate = kotlin_kotlin.$_$.xh;
  var charSequenceLength = kotlin_kotlin.$_$.bg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.rg;
  var Companion_getInstance = kotlin_kotlin.$_$.f6;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var checkIndexOverflow = kotlin_kotlin.$_$.r8;
  var UriUtils_getInstance = kotlin_org_jetbrains_androidx_core_core_uri.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.mn;
  var listOf = kotlin_kotlin.$_$.qb;
  var bundleOf = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.b;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.p1;
  var take = kotlin_kotlin.$_$.jd;
  var emptyList = kotlin_kotlin.$_$.z9;
  var Comparable = kotlin_kotlin.$_$.hn;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var emptyMap = kotlin_kotlin.$_$.aa;
  var StringBuilder = kotlin_kotlin.$_$.dk;
  var contains = kotlin_kotlin.$_$.hk;
  var firstOrNull = kotlin_kotlin.$_$.ia;
  var to = kotlin_kotlin.$_$.pp;
  var replace = kotlin_kotlin.$_$.ll;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.j;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var lazy = kotlin_kotlin.$_$.bp;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.n;
  var lazy_0 = kotlin_kotlin.$_$.ap;
  var addAll = kotlin_kotlin.$_$.b8;
  var plus = kotlin_kotlin.$_$.gc;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var intersect = kotlin_kotlin.$_$.ab;
  var KProperty1 = kotlin_kotlin.$_$.hj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ng;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var Annotation = kotlin_kotlin.$_$.bn;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var emptySet = kotlin_kotlin.$_$.ba;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var plus_0 = kotlin_kotlin.$_$.hc;
  var Collection = kotlin_kotlin.$_$.a7;
  var isInterface = kotlin_kotlin.$_$.gh;
  var lastOrNull = kotlin_kotlin.$_$.kb;
  var plus_1 = kotlin_kotlin.$_$.ec;
  var toMutableList = kotlin_kotlin.$_$.ae;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z2;
  var minus = kotlin_kotlin.$_$.yb;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var initMetadataForObject = kotlin_kotlin.$_$.wg;
  var THROW_IAE = kotlin_kotlin.$_$.yn;
  var enumEntries = kotlin_kotlin.$_$.qf;
  var Enum = kotlin_kotlin.$_$.jn;
  var startsWith = kotlin_kotlin.$_$.ql;
  var toDouble = kotlin_kotlin.$_$.gm;
  var Long = kotlin_kotlin.$_$.pn;
  var isArray = kotlin_kotlin.$_$.yg;
  var contentDeepEquals = kotlin_kotlin.$_$.w8;
  var copyToArray = kotlin_kotlin.$_$.v9;
  var KtList = kotlin_kotlin.$_$.j7;
  var toList = kotlin_kotlin.$_$.wd;
  var isDoubleArray = kotlin_kotlin.$_$.dh;
  var primitiveArrayConcat = kotlin_kotlin.$_$.h;
  var toTypedArray = kotlin_kotlin.$_$.le;
  var toList_0 = kotlin_kotlin.$_$.sd;
  var first = kotlin_kotlin.$_$.ma;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var toMap = kotlin_kotlin.$_$.yd;
  var getStringHashCode = kotlin_kotlin.$_$.og;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var get_capturedKClass = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var AbstractSavedStateViewModelFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.a;
  var AbstractSavedStateViewModelFactory_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.g;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var Companion_getInstance_0 = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.m;
  var getKClass = kotlin_kotlin.$_$.f;
  var create = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var LifecycleRegistry_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime.$_$.a;
  var Companion_getInstance_1 = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.c;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var Bundle_init_$Create$_0 = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.c;
  var enableSavedStateHandles = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.f;
  var MutableCreationExtras_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var get_SAVED_STATE_REGISTRY_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.c;
  var get_VIEW_MODEL_STORE_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.d;
  var get_DEFAULT_ARGS_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.b;
  var LifecycleOwner = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.b;
  var ViewModelStoreOwner = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var SavedStateRegistryOwner = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.b;
  var Default_getInstance = kotlin_kotlin.$_$.c6;
  var toByte = kotlin_kotlin.$_$.zh;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var toHexString = kotlin_kotlin.$_$.hm;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y3;
  var KtMap = kotlin_kotlin.$_$.m7;
  var toString_1 = kotlin_kotlin.$_$.pm;
  var generateSequence = kotlin_kotlin.$_$.sj;
  var isBlank = kotlin_kotlin.$_$.wk;
  var MutableCollection = kotlin_kotlin.$_$.n7;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.r;
  var toList_1 = kotlin_kotlin.$_$.ud;
  var asSequence = kotlin_kotlin.$_$.m8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.kp;
  var last = kotlin_kotlin.$_$.uj;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.x2;
  var MutableIterator = kotlin_kotlin.$_$.o7;
  var mapCapacity = kotlin_kotlin.$_$.sb;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var SparseArrayCompat = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.n;
  var maxOrNull = kotlin_kotlin.$_$.vb;
  var listOfNotNull = kotlin_kotlin.$_$.pb;
  var valueIterator = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c1;
  var asSequence_0 = kotlin_kotlin.$_$.nj;
  var equals_0 = kotlin_kotlin.$_$.pk;
  var Iterable = kotlin_kotlin.$_$.d7;
  var toInt = kotlin_kotlin.$_$.jm;
  var toInt_0 = kotlin_kotlin.$_$.km;
  var isIntArray = kotlin_kotlin.$_$.fh;
  var toTypedArray_0 = kotlin_kotlin.$_$.ge;
  var toList_2 = kotlin_kotlin.$_$.pd;
  var toIntArray = kotlin_kotlin.$_$.nd;
  var endsWith = kotlin_kotlin.$_$.ok;
  var toLong = kotlin_kotlin.$_$.mm;
  var toLong_0 = kotlin_kotlin.$_$.nm;
  var isLongArray = kotlin_kotlin.$_$.hh;
  var longArrayOf = kotlin_kotlin.$_$.oh;
  var toTypedArray_1 = kotlin_kotlin.$_$.je;
  var toList_3 = kotlin_kotlin.$_$.qd;
  var toLongArray = kotlin_kotlin.$_$.xd;
  var isFloatArray = kotlin_kotlin.$_$.eh;
  var toTypedArray_2 = kotlin_kotlin.$_$.ie;
  var toList_4 = kotlin_kotlin.$_$.td;
  var toFloatArray = kotlin_kotlin.$_$.ld;
  var isBooleanArray = kotlin_kotlin.$_$.zg;
  var booleanArrayOf = kotlin_kotlin.$_$.vf;
  var toTypedArray_3 = kotlin_kotlin.$_$.he;
  var toList_5 = kotlin_kotlin.$_$.vd;
  var toBooleanArray = kotlin_kotlin.$_$.kd;
  var removeSuffix = kotlin_kotlin.$_$.il;
  var asSequence_1 = kotlin_kotlin.$_$.n8;
  var map = kotlin_kotlin.$_$.wj;
  var filterNotNull = kotlin_kotlin.$_$.qj;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavType, 'NavType');
  initMetadataForClass(CollectionNavType, 'CollectionNavType', VOID, NavType);
  initMetadataForInterface(FloatingWindow, 'FloatingWindow');
  initMetadataForClass(NamedNavArgument, 'NamedNavArgument');
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(NavArgument, 'NavArgument');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ParamQuery, 'ParamQuery', ParamQuery);
  initMetadataForClass(MimeType, 'MimeType', VOID, VOID, [Comparable]);
  initMetadataForClass(Builder_0, 'Builder', Builder_init_$Create$);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(NavDeepLink, 'NavDeepLink');
  initMetadataForClass(NavDeepLinkDslBuilder, 'NavDeepLinkDslBuilder', NavDeepLinkDslBuilder_init_$Create$);
  initMetadataForClass(NavDeepLinkDsl, 'NavDeepLinkDsl', VOID, VOID, [Annotation]);
  initMetadataForClass(NavDestinationDsl, 'NavDestinationDsl', VOID, VOID, [Annotation]);
  initMetadataForClass(NavArgumentBuilder, 'NavArgumentBuilder', NavArgumentBuilder);
  initMetadataForClass(PopUpToBuilder, 'PopUpToBuilder', PopUpToBuilder);
  initMetadataForClass(NavOptionsDsl, 'NavOptionsDsl', VOID, VOID, [Annotation]);
  initMetadataForInterface(NavViewModelStoreProvider, 'NavViewModelStoreProvider');
  initMetadataForClass(NavigatorState, 'NavigatorState');
  initMetadataForObject(UNKNOWN, 'UNKNOWN', VOID, NavType);
  initMetadataForClass(InternalType, 'InternalType', VOID, Enum);
  initMetadataForClass(InternalNavType$IntNullableType$1, VOID, VOID, NavType);
  initMetadataForClass(InternalNavType$BoolNullableType$1, VOID, VOID, NavType);
  initMetadataForClass(InternalNavType$DoubleType$1, VOID, VOID, NavType);
  initMetadataForClass(InternalNavType$DoubleNullableType$1, VOID, VOID, NavType);
  initMetadataForClass(InternalNavType$FloatNullableType$1, VOID, VOID, NavType);
  initMetadataForClass(InternalNavType$LongNullableType$1, VOID, VOID, NavType);
  initMetadataForClass(InternalNavType$StringNonNullableType$1, VOID, VOID, NavType);
  initMetadataForClass(InternalNavType$StringNullableArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(InternalNavType$StringNullableListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(InternalNavType$DoubleArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForObject(InternalNavType, 'InternalNavType');
  initMetadataForClass(ParamType, 'ParamType', VOID, Enum);
  initMetadataForClass(RouteBuilder, 'RouteBuilder');
  initMetadataForClass(RouteEncoder, 'RouteEncoder', VOID, AbstractEncoder);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(NavResultSavedStateFactory, 'NavResultSavedStateFactory', VOID, AbstractSavedStateViewModelFactory);
  initMetadataForClass(SavedStateViewModel, 'SavedStateViewModel', VOID, ViewModel);
  initMetadataForClass(NavBackStackEntry$defaultViewModelProviderFactory$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(NavBackStackEntry, 'NavBackStackEntry', VOID, VOID, [LifecycleOwner, ViewModelStoreOwner, HasDefaultViewModelProviderFactory, SavedStateRegistryOwner]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Builder_1, 'Builder');
  initMetadataForClass(NavDeepLinkRequest, 'NavDeepLinkRequest');
  initMetadataForClass(DeepLinkMatch, 'DeepLinkMatch', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(NavDestination, 'NavDestination');
  initMetadataForClass(NavDestinationBuilder, 'NavDestinationBuilder');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(NavGraph$iterator$1, VOID, VOID, VOID, [MutableIterator]);
  initMetadataForClass(NavGraph, 'NavGraph', VOID, NavDestination, [NavDestination, Iterable]);
  initMetadataForClass(NavGraphBuilder, 'NavGraphBuilder', VOID, NavDestinationBuilder);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Navigator, 'Navigator');
  initMetadataForClass(NavGraphNavigator, 'NavGraphNavigator', VOID, Navigator);
  initMetadataForClass(Builder_2, 'Builder', Builder_2);
  initMetadataForClass(NavOptions, 'NavOptions');
  initMetadataForClass(NavOptionsBuilder, 'NavOptionsBuilder', NavOptionsBuilder);
  initMetadataForClass(NavType$Companion$IntType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$IntArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$IntListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$LongType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$LongArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$LongListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$FloatType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$FloatArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$FloatListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$BoolType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$BoolArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$BoolListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$StringType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$StringArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$StringListType$1, VOID, VOID, CollectionNavType);
  initMetadataForCompanion(Companion_6);
  initMetadataForInterface(Extras, 'Extras');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(NavigatorProvider, 'NavigatorProvider', NavigatorProvider);
  initMetadataForClass(Lock, 'Lock', Lock);
  //endregion
  function CollectionNavType(isNullableAllowed) {
    NavType.call(this, isNullableAllowed);
  }
  function FloatingWindow() {
  }
  function NamedNavArgument(name, argument) {
    this.name_1 = name;
    this.argument_1 = argument;
  }
  protoOf(NamedNavArgument).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(NamedNavArgument).get_argument_cxpwg6_k$ = function () {
    return this.argument_1;
  };
  protoOf(NamedNavArgument).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(NamedNavArgument).component2_7eebsb_k$ = function () {
    return this.argument_1;
  };
  function navArgument(name, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavArgumentBuilder();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return new NamedNavArgument(name, this_0.build_1k0s4u_k$());
  }
  function _set_type__9uqan1($this, _set____db54di) {
    $this.type_1 = _set____db54di;
  }
  function _get_type__deia8h($this) {
    return $this.type_1;
  }
  function _set_isNullable__kmooy4($this, _set____db54di) {
    $this.isNullable_1 = _set____db54di;
  }
  function _get_isNullable__5kg3sw($this) {
    return $this.isNullable_1;
  }
  function _set_defaultValue__2m9zyx($this, _set____db54di) {
    $this.defaultValue_1 = _set____db54di;
  }
  function _get_defaultValue__cxgql7($this) {
    return $this.defaultValue_1;
  }
  function _set_defaultValuePresent__e4146y($this, _set____db54di) {
    $this.defaultValuePresent_1 = _set____db54di;
  }
  function _get_defaultValuePresent__rerd3a($this) {
    return $this.defaultValuePresent_1;
  }
  function _set_unknownDefaultValuePresent__89s4ui($this, _set____db54di) {
    $this.unknownDefaultValuePresent_1 = _set____db54di;
  }
  function _get_unknownDefaultValuePresent__6uyefq($this) {
    return $this.unknownDefaultValuePresent_1;
  }
  function Builder() {
    this.type_1 = null;
    this.isNullable_1 = false;
    this.defaultValue_1 = null;
    this.defaultValuePresent_1 = false;
    this.unknownDefaultValuePresent_1 = false;
  }
  protoOf(Builder).setType_4r56wm_k$ = function (type) {
    var tmp = this;
    tmp.type_1 = type instanceof NavType ? type : THROW_CCE();
    return this;
  };
  protoOf(Builder).setIsNullable_l1x27c_k$ = function (isNullable) {
    this.isNullable_1 = isNullable;
    return this;
  };
  protoOf(Builder).setDefaultValue_5qital_k$ = function (defaultValue) {
    this.defaultValue_1 = defaultValue;
    this.defaultValuePresent_1 = true;
    return this;
  };
  protoOf(Builder).setUnknownDefaultValuePresent_ouzuey_k$ = function (unknownDefaultValuePresent) {
    this.unknownDefaultValuePresent_1 = unknownDefaultValuePresent;
    return this;
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    var tmp0_elvis_lhs = this.type_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = Companion_getInstance_9().inferFromValueType_ybxbho_k$(this.defaultValue_1);
      tmp = tmp_0 instanceof NavType ? tmp_0 : THROW_CCE();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var finalType = tmp;
    return new NavArgument(finalType, this.isNullable_1, this.defaultValue_1, this.defaultValuePresent_1, this.unknownDefaultValuePresent_1);
  };
  function NavArgument(type, isNullable, defaultValue, defaultValuePresent, unknownDefaultValuePresent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!type.get_isNullableAllowed_8t4dsk_k$() && isNullable)) {
      // Inline function 'androidx.navigation.NavArgument.<anonymous>' call
      var message = type.get_name_woqyms_k$() + ' does not allow nullable values';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!isNullable && defaultValuePresent && defaultValue == null)) {
      // Inline function 'androidx.navigation.NavArgument.<anonymous>' call
      var message_0 = 'Argument with type ' + type.get_name_woqyms_k$() + ' has null value but is not nullable.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.type_1 = type;
    this.isNullable_1 = isNullable;
    this.defaultValue_1 = defaultValue;
    this.isDefaultValuePresent_1 = defaultValuePresent || unknownDefaultValuePresent;
    this.isDefaultValueUnknown_1 = unknownDefaultValuePresent;
  }
  protoOf(NavArgument).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(NavArgument).get_isNullable_67sy7o_k$ = function () {
    return this.isNullable_1;
  };
  protoOf(NavArgument).get_isDefaultValuePresent_kgob7s_k$ = function () {
    return this.isDefaultValuePresent_1;
  };
  protoOf(NavArgument).get_isDefaultValueUnknown_skf517_k$ = function () {
    return this.isDefaultValueUnknown_1;
  };
  protoOf(NavArgument).get_defaultValue_6cv1mv_k$ = function () {
    return this.defaultValue_1;
  };
  protoOf(NavArgument).putDefaultValue_uymh5e_k$ = function (name, bundle) {
    if (this.isDefaultValuePresent_1 && !(this.defaultValue_1 == null)) {
      this.type_1.put_qb1i4t_k$(bundle, name, this.defaultValue_1);
    }
  };
  protoOf(NavArgument).verify_efceyk_k$ = function (name, bundle) {
    if (!this.isNullable_1 && bundle.containsKey_1fhnt3_k$(name) && bundle.get_jl1mi9_k$(name) == null) {
      return false;
    }
    try {
      this.type_1.get_jen0mr_k$(bundle, name);
    } catch ($p) {
      if ($p instanceof ClassCastException) {
        var e = $p;
        return false;
      } else {
        throw $p;
      }
    }
    return true;
  };
  protoOf(NavArgument).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_22ad7x_k$(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
    sb.append_22ad7x_k$(' Type: ' + this.type_1.toString());
    sb.append_22ad7x_k$(' Nullable: ' + this.isNullable_1);
    if (this.isDefaultValuePresent_1) {
      sb.append_22ad7x_k$(' DefaultValue: ' + toString_0(this.defaultValue_1));
    }
    return sb.toString();
  };
  protoOf(NavArgument).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    var that = other instanceof NavArgument ? other : THROW_CCE();
    if (!(this.isNullable_1 === that.isNullable_1))
      return false;
    if (!(this.isDefaultValuePresent_1 === that.isDefaultValuePresent_1))
      return false;
    if (!equals(this.type_1, that.type_1))
      return false;
    var tmp;
    if (!(this.defaultValue_1 == null)) {
      tmp = equals(this.defaultValue_1, that.defaultValue_1);
    } else {
      tmp = that.defaultValue_1 == null;
    }
    return tmp;
  };
  protoOf(NavArgument).hashCode = function () {
    var result = hashCode(this.type_1);
    result = imul(31, result) + (this.isNullable_1 ? 1 : 0) | 0;
    result = imul(31, result) + (this.isDefaultValuePresent_1 ? 1 : 0) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.defaultValue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function missingRequiredArguments(_this__u8e3s4, isArgumentMissing) {
    // Inline function 'kotlin.collections.filterValues' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var entry = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      var it = entry.get_value_j01efc_k$();
      var tmp;
      if (!ensureNotNull(it == null ? null : it.isNullable_1)) {
        tmp = !it.isDefaultValuePresent_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        result.put_4fpzoq_k$(entry.get_key_18j28a_k$(), entry.get_value_j01efc_k$());
      }
    }
    var requiredArgumentKeys = result.get_keys_wop4xp_k$();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator_0 = requiredArgumentKeys.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      if (isArgumentMissing(element)) {
        destination.add_utx5q5_k$(element);
      }
    }
    return destination;
  }
  function Builder_init_$Init$($this) {
    Builder_0.call($this);
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder_0)));
  }
  function _set_uriPattern__jmiijx($this, _set____db54di) {
    $this.uriPattern_1 = _set____db54di;
  }
  function _get_uriPattern__yor3p5($this) {
    return $this.uriPattern_1;
  }
  function _set_action__h46obl($this, _set____db54di) {
    $this.action_1 = _set____db54di;
  }
  function _get_action__ikx8yd($this) {
    return $this.action_1;
  }
  function _set_mimeType__xwgky1($this, _set____db54di) {
    $this.mimeType_1 = _set____db54di;
  }
  function _get_mimeType__l3k9h9($this) {
    return $this.mimeType_1;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fromUriPattern_d7ciz8_k$ = function (uriPattern) {
    var builder = Builder_init_$Create$();
    builder.setUriPattern_p4evnw_k$(uriPattern);
    return builder;
  };
  protoOf(Companion).fromAction_u7xn2e_k$ = function (action) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(action) > 0)) {
      // Inline function 'androidx.navigation.Companion.fromAction.<anonymous>' call
      var message = 'The NavDeepLink cannot have an empty action.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var builder = Builder_init_$Create$();
    builder.setAction_fb866a_k$(action);
    return builder;
  };
  protoOf(Companion).fromMimeType_aeg2ce_k$ = function (mimeType) {
    var builder = Builder_init_$Create$();
    builder.setMimeType_8xoas6_k$(mimeType);
    return builder;
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _get_SCHEME_PATTERN__mbp59x($this) {
    return $this.SCHEME_PATTERN_1;
  }
  function _get_FILL_IN_PATTERN__445f7l($this) {
    return $this.FILL_IN_PATTERN_1;
  }
  function _get_QUERY_PATTERN__287ch4($this) {
    return $this.QUERY_PATTERN_1;
  }
  function _get_ANY_SYMBOLS_IN_THE_TAIL__byof5c($this) {
    return $this.ANY_SYMBOLS_IN_THE_TAIL_1;
  }
  function _get_pathArgs__hswort($this) {
    return $this.pathArgs_1;
  }
  function _set_pathRegex__x84hr7($this, _set____db54di) {
    $this.pathRegex_1 = _set____db54di;
  }
  function _get_pathRegex__8i53td($this) {
    return $this.pathRegex_1;
  }
  function _get_pathPattern__sckhty($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.pathPattern$delegate_1;
    pathPattern$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_isParameterizedQuery__xqgc1a($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.isParameterizedQuery$delegate_1;
    isParameterizedQuery$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_queryArgsMap__wndpo($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.queryArgsMap$delegate_1;
    queryArgsMap$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _set_isSingleQueryParamValueOnly__cyzt7j($this, _set____db54di) {
    $this.isSingleQueryParamValueOnly_1 = _set____db54di;
  }
  function _get_isSingleQueryParamValueOnly__eaii1h($this) {
    return $this.isSingleQueryParamValueOnly_1;
  }
  function _get_fragArgsAndRegex__re1vcc($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.fragArgsAndRegex$delegate_1;
    fragArgsAndRegex$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_fragArgs__u59k8s($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.fragArgs$delegate_1;
    fragArgs$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_fragRegex__izdpx8($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.fragRegex$delegate_1;
    fragRegex$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_fragPattern__jm7xn7($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.fragPattern$delegate_1;
    fragPattern$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _set_mimeTypeRegex__xr7ci4($this, _set____db54di) {
    $this.mimeTypeRegex_1 = _set____db54di;
  }
  function _get_mimeTypeRegex__ijftzs($this) {
    return $this.mimeTypeRegex_1;
  }
  function _get_mimeTypePattern__k9axpr($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.mimeTypePattern$delegate_1;
    mimeTypePattern$factory();
    return this_0.get_value_j01efc_k$();
  }
  function NavDeepLink_init_$Init$(uri, $this) {
    NavDeepLink.call($this, uri, null, null);
    return $this;
  }
  function NavDeepLink_init_$Create$(uri) {
    return NavDeepLink_init_$Init$(uri, objectCreate(protoOf(NavDeepLink)));
  }
  function buildRegex($this, uri, args, uriRegex) {
    var result = Companion_getInstance_3().FILL_IN_PATTERN_1.find$default_xakyli_k$(uri);
    var appendPos = 0;
    while (!(result == null)) {
      var argName = ensureNotNull(result.get_groups_dy12vx_k$().get_c1px32_k$(1)).get_value_j01efc_k$();
      args.add_utx5q5_k$(argName);
      if (result.get_range_ixu978_k$().get_first_irdx8n_k$() > appendPos) {
        var tmp = Companion_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex = appendPos;
        var endIndex = result.get_range_ixu978_k$().get_first_irdx8n_k$();
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = uri.substring(startIndex, endIndex);
        uriRegex.append_22ad7x_k$(tmp.escape_984trb_k$(tmp$ret$1));
      }
      uriRegex.append_22ad7x_k$('([^/]*?|)');
      appendPos = result.get_range_ixu978_k$().get_last_wopotb_k$() + 1 | 0;
      result = result.next_20eer_k$();
    }
    if (appendPos < uri.length) {
      var tmp_0 = Companion_getInstance();
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = appendPos;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = uri.substring(startIndex_0);
      uriRegex.append_22ad7x_k$(tmp_0.escape_984trb_k$(tmp$ret$3));
    }
  }
  function matchUri($this, uri) {
    var tmp;
    if (uri == null === !(_get_pathPattern__sckhty($this) == null)) {
      tmp = false;
    } else {
      tmp = uri == null || ensureNotNull(_get_pathPattern__sckhty($this)).matches_evli6i_k$(uri.toString());
    }
    return tmp;
  }
  function matchAction($this, action) {
    var tmp;
    if (action == null === !($this.action_1 == null)) {
      tmp = false;
    } else {
      tmp = action == null || $this.action_1 == action;
    }
    return tmp;
  }
  function matchMimeType($this, mimeType) {
    var tmp;
    if (mimeType == null === !($this.mimeType_1 == null)) {
      tmp = false;
    } else {
      tmp = mimeType == null || ensureNotNull(_get_mimeTypePattern__k9axpr($this)).matches_evli6i_k$(mimeType);
    }
    return tmp;
  }
  function getMatchingUriFragment($this, fragment, bundle, arguments_0) {
    var tmp0_safe_receiver = _get_fragPattern__jm7xn7($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchEntire_6100vb_k$(toString_0(fragment));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var result = tmp;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = _get_fragArgs__u59k8s($this);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_safe_receiver_0 = result.get_groups_dy12vx_k$().get_c1px32_k$(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_value_j01efc_k$();
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingUriFragment.<anonymous>.<anonymous>' call
        tmp_0 = UriUtils_getInstance().decode_gmof1w_k$(tmp1_safe_receiver);
      }
      var tmp0_elvis_lhs = tmp_0;
      var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var argument = arguments_0.get_wei43m_k$(item);
      try {
        parseArgument($this, bundle, item, value, argument);
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          return Unit_getInstance();
        } else {
          throw $p;
        }
      }
      destination.add_utx5q5_k$(Unit_getInstance());
    }
  }
  function getMatchingPathArguments($this, result, bundle, arguments_0) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = $this.pathArgs_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_safe_receiver = result.get_groups_dy12vx_k$().get_c1px32_k$(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingPathArguments.<anonymous>.<anonymous>' call
        tmp = UriUtils_getInstance().decode_gmof1w_k$(tmp1_safe_receiver);
      }
      var tmp0_elvis_lhs = tmp;
      var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var argument = arguments_0.get_wei43m_k$(item);
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
      destination.add_utx5q5_k$(Unit_getInstance());
    }
    return true;
  }
  function getMatchingQueryArguments($this, deepLink, bundle, arguments_0) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _get_queryArgsMap__wndpo($this).get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDeepLink.getMatchingQueryArguments.<anonymous>' call
      var paramName = element.get_key_18j28a_k$();
      var storedParam = element.get_value_j01efc_k$();
      var inputParams = deepLink.getQueryParameters_43opsy_k$(paramName);
      if ($this.isSingleQueryParamValueOnly_1) {
        var argValue = deepLink.getQuery_wh6ec2_k$();
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
    var tmp0_iterator = storedParam.arguments_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
      var argument = arguments_0.get_wei43m_k$(element);
      var navType = argument == null ? null : argument.get_type_wovaf7_k$();
      var tmp;
      if (navType instanceof CollectionNavType) {
        tmp = !argument.get_isDefaultValuePresent_kgob7s_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        navType.put_qb1i4t_k$(tempBundle, element, navType.emptyCollection_7s8w1h_k$());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = inputParams.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
      var tmp0_safe_receiver = storedParam.paramRegex_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
        tmp_0 = Regex_init_$Create$(tmp0_safe_receiver).matchEntire_6100vb_k$(element_0);
      }
      var argMatchResult = tmp_0;
      if (argMatchResult == null) {
        return false;
      }
      // Inline function 'kotlin.collections.mapIndexed' call
      var this_0 = storedParam.arguments_1;
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var index = 0;
      var tmp0_iterator_1 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var index_0 = checkIndexOverflow(tmp1);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_safe_receiver_0 = argMatchResult.get_groups_dy12vx_k$().get_c1px32_k$(index_0 + 1 | 0);
        var tmp0_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_value_j01efc_k$();
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var argument_0 = arguments_0.get_wei43m_k$(item);
        var tmp_1;
        try {
          var tmp_2;
          if (!tempBundle.containsKey_1fhnt3_k$(item)) {
            parseArgument($this, tempBundle, item, value, argument_0);
            tmp_2 = Unit_getInstance();
          } else {
            tmp_2 = parseArgumentForRepeatedParam($this, tempBundle, item, value, argument_0);
          }
          tmp_1 = tmp_2;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof IllegalArgumentException) {
            var e = $p;
            tmp_3 = Unit_getInstance();
          } else {
            throw $p;
          }
          tmp_1 = tmp_3;
        }
        var tmp$ret$3 = tmp_1;
        destination.add_utx5q5_k$(tmp$ret$3);
      }
    }
    bundle.putAll_w596ud_k$(tempBundle);
    return true;
  }
  function parseArgument($this, bundle, name, value, argument) {
    if (!(argument == null)) {
      var type = argument.get_type_wovaf7_k$();
      type.parseAndPut_qefbji_k$(bundle, name, value);
    } else {
      bundle.putString_rtcuxu_k$(name, value);
    }
  }
  function parseArgumentForRepeatedParam($this, bundle, name, value, argument) {
    if (!bundle.containsKey_1fhnt3_k$(name)) {
      return true;
    }
    if (!(argument == null)) {
      var type = argument.get_type_wovaf7_k$();
      var previousValue = type.get_jen0mr_k$(bundle, name);
      type.parseAndPut_5m0pua_k$(bundle, name, value, previousValue);
    }
    return false;
  }
  function ParamQuery() {
    this.paramRegex_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.arguments_1 = ArrayList_init_$Create$();
  }
  protoOf(ParamQuery).set_paramRegex_zdn5ls_k$ = function (_set____db54di) {
    this.paramRegex_1 = _set____db54di;
  };
  protoOf(ParamQuery).get_paramRegex_cvuegt_k$ = function () {
    return this.paramRegex_1;
  };
  protoOf(ParamQuery).get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  protoOf(ParamQuery).addArgumentName_v3ym8v_k$ = function (name) {
    this.arguments_1.add_utx5q5_k$(name);
  };
  protoOf(ParamQuery).getArgumentName_abdpza_k$ = function (index) {
    return this.arguments_1.get_c1px32_k$(index);
  };
  protoOf(ParamQuery).size_23och_k$ = function () {
    return this.arguments_1.get_size_woubt6_k$();
  };
  function MimeType(mimeType) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = Regex_init_$Create$('/').split_p7ck23_k$(mimeType, 0);
      if (!this_0.isEmpty_y1axqb_k$()) {
        var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
        while (iterator.hasPrevious_qh0629_k$()) {
          // Inline function 'androidx.navigation.MimeType.<anonymous>' call
          // Inline function 'kotlin.text.isEmpty' call
          var this_1 = iterator.previous_l2dfd5_k$();
          if (!(charSequenceLength(this_1) === 0)) {
            tmp$ret$4 = take(this_0, iterator.nextIndex_jshxun_k$() + 1 | 0);
            break $l$block;
          }
        }
      }
      tmp$ret$4 = emptyList();
    }
    var typeAndSubType = tmp$ret$4;
    this.type_1 = typeAndSubType.get_c1px32_k$(0);
    this.subType_1 = typeAndSubType.get_c1px32_k$(1);
  }
  protoOf(MimeType).set_type_8p3jgz_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(MimeType).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(MimeType).set_subType_zgui19_k$ = function (_set____db54di) {
    this.subType_1 = _set____db54di;
  };
  protoOf(MimeType).get_subType_tmwy1b_k$ = function () {
    return this.subType_1;
  };
  protoOf(MimeType).compareTo_7u8trv_k$ = function (other) {
    var result = 0;
    if (this.type_1 === other.type_1) {
      result = result + 2 | 0;
    }
    if (this.subType_1 === other.subType_1) {
      result = result + 1 | 0;
    }
    return result;
  };
  protoOf(MimeType).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_7u8trv_k$(other instanceof MimeType ? other : THROW_CCE());
  };
  protoOf(Builder_0).setUriPattern_p4evnw_k$ = function (uriPattern) {
    this.uriPattern_1 = uriPattern;
    return this;
  };
  protoOf(Builder_0).setUriPattern_uvviyq_k$ = function (basePath, route, typeMap) {
    this.uriPattern_1 = generateRoutePattern(serializer(route), typeMap, basePath);
    return this;
  };
  protoOf(Builder_0).setUriPattern$default_pxh5ca_k$ = function (basePath, route, typeMap, $super) {
    typeMap = typeMap === VOID ? emptyMap() : typeMap;
    return $super === VOID ? this.setUriPattern_uvviyq_k$(basePath, route, typeMap) : $super.setUriPattern_uvviyq_k$.call(this, basePath, route, typeMap);
  };
  protoOf(Builder_0).setAction_fb866a_k$ = function (action) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(action) > 0)) {
      // Inline function 'androidx.navigation.Builder.setAction.<anonymous>' call
      var message = 'The NavDeepLink cannot have an empty action.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.action_1 = action;
    return this;
  };
  protoOf(Builder_0).setMimeType_8xoas6_k$ = function (mimeType) {
    this.mimeType_1 = mimeType;
    return this;
  };
  protoOf(Builder_0).build_1k0s4u_k$ = function () {
    return new NavDeepLink(this.uriPattern_1, this.action_1, this.mimeType_1);
  };
  function Builder_0() {
    Companion_getInstance_2();
    this.uriPattern_1 = null;
    this.action_1 = null;
    this.mimeType_1 = null;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.SCHEME_PATTERN_1 = Regex_init_$Create$('^[a-zA-Z]+[+\\w\\-.]*:');
    this.FILL_IN_PATTERN_1 = Regex_init_$Create$('\\{(.+?)\\}');
    this.QUERY_PATTERN_1 = Regex_init_$Create$('^[^?#]+\\?([^#]*).*');
    this.ANY_SYMBOLS_IN_THE_TAIL_1 = '([\\s\\S]+?)?';
  }
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function parsePath($this) {
    if ($this.uriPattern_1 == null)
      return Unit_getInstance();
    var uriRegex = new StringBuilder('^');
    if (!Companion_getInstance_3().SCHEME_PATTERN_1.containsMatchIn_gpzk5u_k$($this.uriPattern_1)) {
      uriRegex.append_22ad7x_k$('http[s]?://');
    }
    var tmp0_safe_receiver = Regex_init_$Create$('(\\?|#|$)').find$default_xakyli_k$($this.uriPattern_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavDeepLink.parsePath.<anonymous>' call
      // Inline function 'kotlin.text.substring' call
      var this_0 = $this.uriPattern_1;
      var endIndex = tmp0_safe_receiver.get_range_ixu978_k$().get_first_irdx8n_k$();
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this_0.substring(0, endIndex);
      buildRegex($this, tmp$ret$1, $this.pathArgs_1, uriRegex);
      $this.isExactDeepLink_1 = (!contains(uriRegex, '.*') && !contains(uriRegex, '([^/]+?)'));
      uriRegex.append_22ad7x_k$('($|(\\?(.)*)|(#(.)*))');
    }
    $this.pathRegex_1 = saveWildcardInRegex(uriRegex.toString(), $this);
  }
  function parseQuery($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var paramArgMap = LinkedHashMap_init_$Create$();
    if (!_get_isParameterizedQuery__xqgc1a($this))
      return paramArgMap;
    var uri = UriUtils_getInstance().parse_pc1q8p_k$(ensureNotNull($this.uriPattern_1));
    var tmp0_iterator = uri.getQueryParameterNames_ip5h67_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var paramName = tmp0_iterator.next_20eer_k$();
      var argRegex = StringBuilder_init_$Create$();
      var queryParams = uri.getQueryParameters_43opsy_k$(paramName);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(queryParams.get_size_woubt6_k$() <= 1)) {
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        var message = 'Query parameter ' + paramName + ' must only be present once in ' + $this.uriPattern_1 + '. ' + 'To support repeated query parameters, use an array type for your ' + 'argument and the pattern provided in your URI will be used to ' + 'parse each query parameter instance.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp1_elvis_lhs = firstOrNull(queryParams);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        $this.isSingleQueryParamValueOnly_1 = true;
        tmp = paramName;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var queryParam = tmp;
      var result = Companion_getInstance_3().FILL_IN_PATTERN_1.find$default_xakyli_k$(queryParam);
      var appendPos = 0;
      var param = new ParamQuery();
      while (!(result == null)) {
        param.addArgumentName_v3ym8v_k$(ensureNotNull(result.get_groups_dy12vx_k$().get_c1px32_k$(1)).get_value_j01efc_k$());
        if (result.get_range_ixu978_k$().get_first_irdx8n_k$() > appendPos) {
          // Inline function 'kotlin.text.substring' call
          var startIndex = appendPos;
          var endIndex = result.get_range_ixu978_k$().get_first_irdx8n_k$();
          // Inline function 'kotlin.js.asDynamic' call
          var inputLiteral = queryParam.substring(startIndex, endIndex);
          argRegex.append_22ad7x_k$(Companion_getInstance().escape_984trb_k$(inputLiteral));
        }
        argRegex.append_22ad7x_k$('([\\s\\S]+?)?');
        appendPos = result.get_range_ixu978_k$().get_last_wopotb_k$() + 1 | 0;
        result = result.next_20eer_k$();
      }
      if (appendPos < queryParam.length) {
        var tmp_0 = Companion_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = appendPos;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = queryParam.substring(startIndex_0);
        argRegex.append_22ad7x_k$(tmp_0.escape_984trb_k$(tmp$ret$6));
      }
      argRegex.append_22ad7x_k$('$');
      param.paramRegex_1 = saveWildcardInRegex(argRegex.toString(), $this);
      // Inline function 'kotlin.collections.set' call
      paramArgMap.put_4fpzoq_k$(paramName, param);
    }
    return paramArgMap;
  }
  function parseFragment($this) {
    if ($this.uriPattern_1 == null || UriUtils_getInstance().parse_pc1q8p_k$($this.uriPattern_1).getFragment_72llty_k$() == null)
      return null;
    // Inline function 'kotlin.collections.mutableListOf' call
    var fragArgs = ArrayList_init_$Create$();
    var fragment = UriUtils_getInstance().parse_pc1q8p_k$($this.uriPattern_1).getFragment_72llty_k$();
    var fragRegex = StringBuilder_init_$Create$();
    buildRegex($this, ensureNotNull(fragment), fragArgs, fragRegex);
    return to(fragArgs, fragRegex.toString());
  }
  function parseMime($this) {
    if ($this.mimeType_1 == null)
      return Unit_getInstance();
    var mimeTypePattern = Regex_init_$Create$('^[\\s\\S]+/[\\s\\S]+$');
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!mimeTypePattern.matches_evli6i_k$($this.mimeType_1)) {
      // Inline function 'androidx.navigation.NavDeepLink.parseMime.<anonymous>' call
      var message = 'The given mimeType ' + $this.mimeType_1 + ' does not match to required "type/subtype" format';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var splitMimeType = new MimeType($this.mimeType_1);
    var regex = '^(' + splitMimeType.type_1 + '|[*]+)/(' + splitMimeType.subType_1 + '|[*]+)$';
    $this.mimeTypeRegex_1 = replace(regex, '*|[*]', '[\\s\\S]');
  }
  function saveWildcardInRegex(_this__u8e3s4, $this) {
    return contains(_this__u8e3s4, '\\Q') && contains(_this__u8e3s4, '\\E') ? replace(_this__u8e3s4, '.*', '\\E.*\\Q') : contains(_this__u8e3s4, '\\.\\*') ? replace(_this__u8e3s4, '\\.\\*', '.*') : _this__u8e3s4;
  }
  function NavDeepLink$pathPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.pathRegex_1;
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
      return !(this$0.uriPattern_1 == null) && Companion_getInstance_3().QUERY_PATTERN_1.matches_evli6i_k$(this$0.uriPattern_1);
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
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_first_irdx8n_k$();
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
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_second_jf7fjx_k$();
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
      var tmp0_safe_receiver = this$0.mimeTypeRegex_1;
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
      return !$bundle.containsKey_1fhnt3_k$(argName);
    };
  }
  function NavDeepLink(uriPattern, action, mimeType) {
    Companion_getInstance_3();
    this.uriPattern_1 = uriPattern;
    this.action_1 = action;
    this.mimeType_1 = mimeType;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.pathArgs_1 = ArrayList_init_$Create$();
    this.pathRegex_1 = null;
    var tmp_0 = this;
    tmp_0.pathPattern$delegate_1 = lazy(NavDeepLink$pathPattern$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.isParameterizedQuery$delegate_1 = lazy(NavDeepLink$isParameterizedQuery$delegate$lambda(this));
    var tmp_2 = this;
    var tmp_3 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_2.queryArgsMap$delegate_1 = lazy_0(tmp_3, NavDeepLink$queryArgsMap$delegate$lambda(this));
    this.isSingleQueryParamValueOnly_1 = false;
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_4.fragArgsAndRegex$delegate_1 = lazy_0(tmp_5, NavDeepLink$fragArgsAndRegex$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_6.fragArgs$delegate_1 = lazy_0(tmp_7, NavDeepLink$fragArgs$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_8.fragRegex$delegate_1 = lazy_0(tmp_9, NavDeepLink$fragRegex$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.fragPattern$delegate_1 = lazy(NavDeepLink$fragPattern$delegate$lambda(this));
    this.mimeTypeRegex_1 = null;
    var tmp_11 = this;
    tmp_11.mimeTypePattern$delegate_1 = lazy(NavDeepLink$mimeTypePattern$delegate$lambda(this));
    this.isExactDeepLink_1 = false;
    parsePath(this);
    parseMime(this);
  }
  protoOf(NavDeepLink).get_uriPattern_e307il_k$ = function () {
    return this.uriPattern_1;
  };
  protoOf(NavDeepLink).get_action_avldmn_k$ = function () {
    return this.action_1;
  };
  protoOf(NavDeepLink).get_mimeType_g7ccbb_k$ = function () {
    return this.mimeType_1;
  };
  protoOf(NavDeepLink).get_argumentsNames_afppnd_k$ = function () {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = _get_queryArgsMap__wndpo(this).get_values_ksazhn_k$();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDeepLink.<get-argumentsNames>.<anonymous>' call
      var list = element.arguments_1;
      addAll(destination, list);
    }
    return plus(plus(this.pathArgs_1, destination), _get_fragArgs__u59k8s(this));
  };
  protoOf(NavDeepLink).set_isExactDeepLink_2t512p_k$ = function (_set____db54di) {
    this.isExactDeepLink_1 = _set____db54di;
  };
  protoOf(NavDeepLink).get_isExactDeepLink_7vjg2_k$ = function () {
    return this.isExactDeepLink_1;
  };
  protoOf(NavDeepLink).matches_2dkvsk_k$ = function (uri) {
    return this.matches_7838m0_k$(new NavDeepLinkRequest(uri, null, null));
  };
  protoOf(NavDeepLink).matches_7838m0_k$ = function (deepLinkRequest) {
    if (!matchUri(this, deepLinkRequest.get_uri_18iuil_k$())) {
      return false;
    }
    var tmp;
    if (!matchAction(this, deepLinkRequest.get_action_avldmn_k$())) {
      tmp = false;
    } else {
      tmp = matchMimeType(this, deepLinkRequest.get_mimeType_g7ccbb_k$());
    }
    return tmp;
  };
  protoOf(NavDeepLink).getMimeTypeMatchRating_i4pc9w_k$ = function (mimeType) {
    var tmp;
    if (this.mimeType_1 == null || !ensureNotNull(_get_mimeTypePattern__k9axpr(this)).matches_evli6i_k$(mimeType)) {
      tmp = -1;
    } else {
      tmp = (new MimeType(this.mimeType_1)).compareTo_7u8trv_k$(new MimeType(mimeType));
    }
    return tmp;
  };
  protoOf(NavDeepLink).getMatchingArguments_frzh00_k$ = function (deepLink, arguments_0) {
    var tmp0_safe_receiver = _get_pathPattern__sckhty(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchEntire_6100vb_k$(deepLink.toString());
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
    getMatchingUriFragment(this, deepLink.getFragment_72llty_k$(), bundle, arguments_0);
    var missingRequiredArguments_0 = missingRequiredArguments(arguments_0, NavDeepLink$getMatchingArguments$lambda(bundle));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingRequiredArguments_0.isEmpty_y1axqb_k$())
      return null;
    return bundle;
  };
  protoOf(NavDeepLink).getMatchingPathAndQueryArgs_bl0osw_k$ = function (deepLink, arguments_0) {
    var bundle = Bundle_init_$Create$();
    if (deepLink == null)
      return bundle;
    var tmp0_safe_receiver = _get_pathPattern__sckhty(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchEntire_6100vb_k$(deepLink.toString());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return bundle;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var result = tmp;
    getMatchingPathArguments(this, result, bundle, arguments_0);
    if (_get_isParameterizedQuery__xqgc1a(this)) {
      getMatchingQueryArguments(this, deepLink, bundle, arguments_0);
    }
    return bundle;
  };
  protoOf(NavDeepLink).calculateMatchingPathSegments_yg4c66_k$ = function (requestedLink) {
    if (requestedLink == null || this.uriPattern_1 == null)
      return 0;
    var requestedPathSegments = requestedLink.getPathSegments_oqw8kb_k$();
    var uriPathSegments = UriUtils_getInstance().parse_pc1q8p_k$(this.uriPattern_1).getPathSegments_oqw8kb_k$();
    var matches = intersect(requestedPathSegments, uriPathSegments);
    return matches.get_size_woubt6_k$();
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
    return this.uriPattern_1 == other.uriPattern_1 && this.action_1 == other.action_1 && this.mimeType_1 == other.mimeType_1;
  };
  protoOf(NavDeepLink).hashCode = function () {
    var result = 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.uriPattern_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.action_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.mimeType_1;
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
  function mimeTypePattern$factory() {
    return getPropertyCallableRef('mimeTypePattern', 1, KProperty1, function (receiver) {
      return _get_mimeTypePattern__k9axpr(receiver);
    }, null);
  }
  function _get_builder__bi005y($this) {
    return $this.builder_1;
  }
  function _set_route__k8pa8s($this, _set____db54di) {
    $this.route_1 = _set____db54di;
  }
  function _get_route__bsf68o($this) {
    return $this.route_1;
  }
  function _set_typeMap__lfwid9($this, _set____db54di) {
    $this.typeMap_1 = _set____db54di;
  }
  function _get_typeMap__nyz98v($this) {
    return $this.typeMap_1;
  }
  function NavDeepLinkDslBuilder_init_$Init$($this) {
    NavDeepLinkDslBuilder.call($this);
    return $this;
  }
  function NavDeepLinkDslBuilder_init_$Create$() {
    return NavDeepLinkDslBuilder_init_$Init$(objectCreate(protoOf(NavDeepLinkDslBuilder)));
  }
  function NavDeepLinkDslBuilder_init_$Init$_0(basePath, route, typeMap, $this) {
    NavDeepLinkDslBuilder.call($this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(basePath) > 0)) {
      // Inline function 'androidx.navigation.NavDeepLinkDslBuilder.<init>.<anonymous>' call
      var message = 'The basePath for NavDeepLink from KClass cannot be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.uriPattern_1 = generateRoutePattern(serializer(route), typeMap, basePath);
    $this.route_1 = route;
    $this.typeMap_1 = typeMap;
    return $this;
  }
  function NavDeepLinkDslBuilder_init_$Create$_0(basePath, route, typeMap) {
    return NavDeepLinkDslBuilder_init_$Init$_0(basePath, route, typeMap, objectCreate(protoOf(NavDeepLinkDslBuilder)));
  }
  protoOf(NavDeepLinkDslBuilder).set_uriPattern_ifh48a_k$ = function (_set____db54di) {
    this.uriPattern_1 = _set____db54di;
  };
  protoOf(NavDeepLinkDslBuilder).get_uriPattern_e307il_k$ = function () {
    return this.uriPattern_1;
  };
  protoOf(NavDeepLinkDslBuilder).set_action_goi58_k$ = function (p) {
    var tmp;
    if (!(p == null)) {
      // Inline function 'kotlin.text.isEmpty' call
      tmp = charSequenceLength(p) === 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('The NavDeepLink cannot have an empty action.');
    }
    this.action_1 = p;
  };
  protoOf(NavDeepLinkDslBuilder).get_action_avldmn_k$ = function () {
    return this.action_1;
  };
  protoOf(NavDeepLinkDslBuilder).set_mimeType_dxwu8c_k$ = function (_set____db54di) {
    this.mimeType_1 = _set____db54di;
  };
  protoOf(NavDeepLinkDslBuilder).get_mimeType_g7ccbb_k$ = function () {
    return this.mimeType_1;
  };
  protoOf(NavDeepLinkDslBuilder).build_e29v9o_k$ = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.builder_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavDeepLinkDslBuilder.build.<anonymous>' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.uriPattern_1 == null && this.action_1 == null && this.mimeType_1 == null)) {
      // Inline function 'androidx.navigation.NavDeepLinkDslBuilder.build.<anonymous>.<anonymous>' call
      var message = 'The NavDeepLink must have an uri, action, and/or mimeType.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_safe_receiver = this.uriPattern_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavDeepLinkDslBuilder.build.<anonymous>.<anonymous>' call
      this_0.setUriPattern_p4evnw_k$(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.action_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavDeepLinkDslBuilder.build.<anonymous>.<anonymous>' call
      this_0.setAction_fb866a_k$(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = this.mimeType_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this_0.setMimeType_8xoas6_k$(tmp2_safe_receiver);
    }
    return this_0.build_1k0s4u_k$();
  };
  function NavDeepLinkDslBuilder() {
    this.builder_1 = Builder_init_$Create$();
    this.route_1 = null;
    this.typeMap_1 = emptyMap();
    this.uriPattern_1 = null;
    this.action_1 = null;
    this.mimeType_1 = null;
  }
  function navDeepLink(basePath, route, typeMap, deepLinkBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = NavDeepLinkDslBuilder_init_$Create$_0(basePath, route, typeMap);
    // Inline function 'kotlin.contracts.contract' call
    deepLinkBuilder(this_0);
    return this_0.build_e29v9o_k$();
  }
  function NavDeepLinkDsl() {
  }
  protoOf(NavDeepLinkDsl).equals = function (other) {
    if (!(other instanceof NavDeepLinkDsl))
      return false;
    other instanceof NavDeepLinkDsl || THROW_CCE();
    return true;
  };
  protoOf(NavDeepLinkDsl).hashCode = function () {
    return 0;
  };
  protoOf(NavDeepLinkDsl).toString = function () {
    return '@androidx.navigation.NavDeepLinkDsl(' + ')';
  };
  function NavDestinationDsl() {
  }
  protoOf(NavDestinationDsl).equals = function (other) {
    if (!(other instanceof NavDestinationDsl))
      return false;
    other instanceof NavDestinationDsl || THROW_CCE();
    return true;
  };
  protoOf(NavDestinationDsl).hashCode = function () {
    return 0;
  };
  protoOf(NavDestinationDsl).toString = function () {
    return '@androidx.navigation.NavDestinationDsl(' + ')';
  };
  function _get_builder__bi005y_0($this) {
    return $this.builder_1;
  }
  function _set__type__bbnwp8($this, _set____db54di) {
    $this._type_1 = _set____db54di;
  }
  function _get__type__kpgjs8($this) {
    return $this._type_1;
  }
  function NavArgumentBuilder() {
    this.builder_1 = new Builder();
    this._type_1 = null;
    this.nullable_1 = false;
    this.defaultValue_1 = null;
    this.unknownDefaultValuePresent_1 = false;
  }
  protoOf(NavArgumentBuilder).set_type_6my2xp_k$ = function (value) {
    this._type_1 = value;
    this.builder_1.setType_4r56wm_k$(value);
  };
  protoOf(NavArgumentBuilder).get_type_wovaf7_k$ = function () {
    var tmp0_elvis_lhs = this._type_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('NavType has not been set on this builder.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(NavArgumentBuilder).set_nullable_91xh55_k$ = function (value) {
    this.nullable_1 = value;
    this.builder_1.setIsNullable_l1x27c_k$(value);
  };
  protoOf(NavArgumentBuilder).get_nullable_7petka_k$ = function () {
    return this.nullable_1;
  };
  protoOf(NavArgumentBuilder).set_defaultValue_3wyxu_k$ = function (value) {
    this.defaultValue_1 = value;
    this.builder_1.setDefaultValue_5qital_k$(value);
  };
  protoOf(NavArgumentBuilder).get_defaultValue_6cv1mv_k$ = function () {
    return this.defaultValue_1;
  };
  protoOf(NavArgumentBuilder).set_unknownDefaultValuePresent_dln6i9_k$ = function (value) {
    this.unknownDefaultValuePresent_1 = value;
    this.builder_1.setUnknownDefaultValuePresent_ouzuey_k$(value);
  };
  protoOf(NavArgumentBuilder).get_unknownDefaultValuePresent_4rvwd4_k$ = function () {
    return this.unknownDefaultValuePresent_1;
  };
  protoOf(NavArgumentBuilder).build_1k0s4u_k$ = function () {
    return this.builder_1.build_1k0s4u_k$();
  };
  function navigation(_this__u8e3s4, startDestination, route, builder) {
    route = route === VOID ? null : route;
    // Inline function 'kotlin.apply' call
    var this_0 = NavGraphBuilder_init_$Create$(_this__u8e3s4, startDestination, route);
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function navOptions(optionsBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavOptionsBuilder();
    // Inline function 'kotlin.contracts.contract' call
    optionsBuilder(this_0);
    return this_0.build_e29v9o_k$();
  }
  function PopUpToBuilder() {
    this.inclusive_1 = false;
    this.saveState_1 = false;
  }
  protoOf(PopUpToBuilder).set_inclusive_s1r61y_k$ = function (_set____db54di) {
    this.inclusive_1 = _set____db54di;
  };
  protoOf(PopUpToBuilder).get_inclusive_g8fo3h_k$ = function () {
    return this.inclusive_1;
  };
  protoOf(PopUpToBuilder).set_saveState_v4k43m_k$ = function (_set____db54di) {
    this.saveState_1 = _set____db54di;
  };
  protoOf(PopUpToBuilder).get_saveState_bdjsdn_k$ = function () {
    return this.saveState_1;
  };
  function NavOptionsDsl() {
  }
  protoOf(NavOptionsDsl).equals = function (other) {
    if (!(other instanceof NavOptionsDsl))
      return false;
    other instanceof NavOptionsDsl || THROW_CCE();
    return true;
  };
  protoOf(NavOptionsDsl).hashCode = function () {
    return 0;
  };
  protoOf(NavOptionsDsl).toString = function () {
    return '@androidx.navigation.NavOptionsDsl(' + ')';
  };
  function NavViewModelStoreProvider() {
  }
  function get(_this__u8e3s4, name) {
    return _this__u8e3s4.getNavigator_ip43px_k$(name);
  }
  function _get_backStackLock__7aoq05($this) {
    return $this.backStackLock_1;
  }
  function _get__backStack__qcsnzd($this) {
    return $this._backStack_1;
  }
  function _get__transitionsInProgress__o300bq($this) {
    return $this._transitionsInProgress_1;
  }
  function NavigatorState() {
    this.backStackLock_1 = new Lock();
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp._backStack_1 = MutableStateFlow(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$1 = emptySet();
    tmp_0._transitionsInProgress_1 = MutableStateFlow(tmp$ret$1);
    this.isNavigating_1 = false;
    this.backStack_1 = asStateFlow(this._backStack_1);
    this.transitionsInProgress_1 = asStateFlow(this._transitionsInProgress_1);
  }
  protoOf(NavigatorState).set_isNavigating_86yy9s_k$ = function (_set____db54di) {
    this.isNavigating_1 = _set____db54di;
  };
  protoOf(NavigatorState).get_isNavigating_85k3l_k$ = function () {
    return this.isNavigating_1;
  };
  protoOf(NavigatorState).get_backStack_ueublk_k$ = function () {
    return this.backStack_1;
  };
  protoOf(NavigatorState).get_transitionsInProgress_j2ad2f_k$ = function () {
    return this.transitionsInProgress_1;
  };
  protoOf(NavigatorState).push_37rtb5_k$ = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.backStackLock_1;
    this._backStack_1.set_value_v1vabv_k$(plus_0(this._backStack_1.get_value_j01efc_k$(), backStackEntry));
  };
  protoOf(NavigatorState).pushWithTransition_nh5tju_k$ = function (backStackEntry) {
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this._transitionsInProgress_1.get_value_j01efc_k$();
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
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
        var this_1 = this.backStack_1.get_value_j01efc_k$();
        var tmp_1;
        if (isInterface(this_1, Collection)) {
          tmp_1 = this_1.isEmpty_y1axqb_k$();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
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
      return Unit_getInstance();
    }
    var previousEntry = lastOrNull(this.backStack_1.get_value_j01efc_k$());
    if (!(previousEntry == null)) {
      this._transitionsInProgress_1.set_value_v1vabv_k$(plus_1(this._transitionsInProgress_1.get_value_j01efc_k$(), previousEntry));
    }
    this._transitionsInProgress_1.set_value_v1vabv_k$(plus_1(this._transitionsInProgress_1.get_value_j01efc_k$(), backStackEntry));
    this.push_37rtb5_k$(backStackEntry);
  };
  protoOf(NavigatorState).pop_fb5htn_k$ = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.backStackLock_1;
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = this._backStack_1.get_value_j01efc_k$();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavigatorState.pop.<anonymous>.<anonymous>' call
      if (!!item.equals(popUpTo))
        break $l$loop;
      list.add_utx5q5_k$(item);
    }
    this._backStack_1.set_value_v1vabv_k$(list);
  };
  protoOf(NavigatorState).popWithTransition_rhyr6y_k$ = function (popUpTo, saveState) {
    var tmp;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this._transitionsInProgress_1.get_value_j01efc_k$();
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
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
        var this_1 = this.backStack_1.get_value_j01efc_k$();
        var tmp_1;
        if (isInterface(this_1, Collection)) {
          tmp_1 = this_1.isEmpty_y1axqb_k$();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
        var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
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
      return Unit_getInstance();
    }
    this._transitionsInProgress_1.set_value_v1vabv_k$(plus_1(this._transitionsInProgress_1.get_value_j01efc_k$(), popUpTo));
    var tmp$ret$5;
    $l$block_3: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var this_2 = this.backStack_1.get_value_j01efc_k$();
      var iterator = this_2.listIterator_70e65o_k$(this_2.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element_1 = iterator.previous_l2dfd5_k$();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (!element_1.equals(popUpTo) && this.backStack_1.get_value_j01efc_k$().lastIndexOf_v2p1fv_k$(element_1) < this.backStack_1.get_value_j01efc_k$().lastIndexOf_v2p1fv_k$(popUpTo)) {
          tmp$ret$5 = element_1;
          break $l$block_3;
        }
      }
      tmp$ret$5 = null;
    }
    var incomingEntry = tmp$ret$5;
    if (!(incomingEntry == null)) {
      this._transitionsInProgress_1.set_value_v1vabv_k$(plus_1(this._transitionsInProgress_1.get_value_j01efc_k$(), incomingEntry));
    }
    this.pop_fb5htn_k$(popUpTo, saveState);
  };
  protoOf(NavigatorState).onLaunchSingleTop_gcgugw_k$ = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.backStackLock_1;
    var tempStack = toMutableList(this.backStack_1.get_value_j01efc_k$());
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tempStack.listIterator_70e65o_k$(tempStack.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTop.<anonymous>.<anonymous>' call
        if (iterator.previous_l2dfd5_k$().get_id_kntnx8_k$() === backStackEntry.get_id_kntnx8_k$()) {
          tmp$ret$1 = iterator.nextIndex_jshxun_k$();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    // Inline function 'kotlin.contracts.contract' call
    var idx = tmp$ret$1;
    tempStack.set_82063s_k$(idx, backStackEntry);
    this._backStack_1.set_value_v1vabv_k$(tempStack);
  };
  protoOf(NavigatorState).onLaunchSingleTopWithTransition_bjt5s5_k$ = function (backStackEntry) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.last' call
      var this_0 = this.backStack_1.get_value_j01efc_k$();
      var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element = iterator.previous_l2dfd5_k$();
        // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTopWithTransition.<anonymous>' call
        if (element.get_id_kntnx8_k$() === backStackEntry.get_id_kntnx8_k$()) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('List contains no element matching the predicate.');
    }
    var oldEntry = tmp$ret$1;
    this._transitionsInProgress_1.set_value_v1vabv_k$(plus_1(plus_1(this._transitionsInProgress_1.get_value_j01efc_k$(), oldEntry), backStackEntry));
    this.onLaunchSingleTop_gcgugw_k$(backStackEntry);
  };
  protoOf(NavigatorState).markTransitionComplete_lzljb4_k$ = function (entry) {
    this._transitionsInProgress_1.set_value_v1vabv_k$(minus(this._transitionsInProgress_1.get_value_j01efc_k$(), entry));
  };
  protoOf(NavigatorState).prepareForTransition_gt6e1w_k$ = function (entry) {
    this._transitionsInProgress_1.set_value_v1vabv_k$(plus_1(this._transitionsInProgress_1.get_value_j01efc_k$(), entry));
  };
  function withLock(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    return block();
  }
  function matchKType(_this__u8e3s4, kType) {
    if (!(_this__u8e3s4.get_isNullable_67sy7o_k$() === kType.get_isMarkedNullable_4el8ow_k$()))
      return false;
    var kTypeSerializer = serializerOrNull(kType);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (kTypeSerializer == null) {
        // Inline function 'androidx.navigation.serialization.matchKType.<anonymous>' call
        var message = 'Custom serializers declared directly on a class field via @Serializable(with = ...) is currently not supported by safe args for both custom types and third-party types. Please use @Serializable or @Serializable(with = ...) on the class or object declaration.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    return equals(_this__u8e3s4, kTypeSerializer.get_descriptor_wjt6a0_k$());
  }
  function getNavType(_this__u8e3s4) {
    var tmp;
    switch (toInternalType(_this__u8e3s4).get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = Companion_getInstance_9().get_IntType_9uzfpc_k$();
        break;
      case 1:
        tmp = InternalNavType_getInstance().IntNullableType_1;
        break;
      case 2:
        tmp = Companion_getInstance_9().get_BoolType_2fmckt_k$();
        break;
      case 3:
        tmp = InternalNavType_getInstance().BoolNullableType_1;
        break;
      case 4:
        tmp = InternalNavType_getInstance().DoubleType_1;
        break;
      case 5:
        tmp = InternalNavType_getInstance().DoubleNullableType_1;
        break;
      case 6:
        tmp = Companion_getInstance_9().get_FloatType_6qlkod_k$();
        break;
      case 7:
        tmp = InternalNavType_getInstance().FloatNullableType_1;
        break;
      case 8:
        tmp = Companion_getInstance_9().get_LongType_5zm9xb_k$();
        break;
      case 9:
        tmp = InternalNavType_getInstance().LongNullableType_1;
        break;
      case 10:
        tmp = InternalNavType_getInstance().StringNonNullableType_1;
        break;
      case 11:
        tmp = Companion_getInstance_9().get_StringType_d7yf70_k$();
        break;
      case 12:
        tmp = Companion_getInstance_9().get_IntArrayType_4gr4od_k$();
        break;
      case 13:
        tmp = Companion_getInstance_9().get_BoolArrayType_v1vcv4_k$();
        break;
      case 14:
        tmp = InternalNavType_getInstance().DoubleArrayType_1;
        break;
      case 15:
        tmp = Companion_getInstance_9().get_FloatArrayType_up1a3k_k$();
        break;
      case 16:
        tmp = Companion_getInstance_9().get_LongArrayType_xlv2gi_k$();
        break;
      case 17:
        var typeParameter = toInternalType(_this__u8e3s4.getElementDescriptor_ncda77_k$(0));
        tmp = typeParameter.equals(InternalType_STRING_getInstance()) ? Companion_getInstance_9().get_StringArrayType_drkiqv_k$() : UNKNOWN_getInstance();
        break;
      case 18:
        var typeParameter_0 = toInternalType(_this__u8e3s4.getElementDescriptor_ncda77_k$(0));
        switch (typeParameter_0.get_ordinal_ip24qg_k$()) {
          case 0:
            tmp = Companion_getInstance_9().get_IntListType_9estj2_k$();
            break;
          case 2:
            tmp = Companion_getInstance_9().get_BoolListType_svxx0r_k$();
            break;
          case 6:
            tmp = Companion_getInstance_9().get_FloatListType_5oaazv_k$();
            break;
          case 8:
            tmp = Companion_getInstance_9().get_LongListType_a5b9j7_k$();
            break;
          case 10:
            tmp = Companion_getInstance_9().get_StringListType_fp3adu_k$();
            break;
          default:
            tmp = UNKNOWN_getInstance();
            break;
        }

        break;
      default:
        tmp = UNKNOWN_getInstance();
        break;
    }
    var type = tmp;
    return type;
  }
  function UNKNOWN() {
    UNKNOWN_instance = this;
    NavType.call(this, false);
  }
  protoOf(UNKNOWN).get_name_woqyms_k$ = function () {
    return 'unknown';
  };
  protoOf(UNKNOWN).put_co8s3m_k$ = function (bundle, key, value) {
  };
  protoOf(UNKNOWN).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_co8s3m_k$(bundle, key, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(UNKNOWN).get_jen0mr_k$ = function (bundle, key) {
    return null;
  };
  protoOf(UNKNOWN).parseValue_fn9a6c_k$ = function (value) {
    return 'null';
  };
  var UNKNOWN_instance;
  function UNKNOWN_getInstance() {
    if (UNKNOWN_instance == null)
      new UNKNOWN();
    return UNKNOWN_instance;
  }
  var InternalType_INT_instance;
  var InternalType_INT_NULLABLE_instance;
  var InternalType_BOOL_instance;
  var InternalType_BOOL_NULLABLE_instance;
  var InternalType_DOUBLE_instance;
  var InternalType_DOUBLE_NULLABLE_instance;
  var InternalType_FLOAT_instance;
  var InternalType_FLOAT_NULLABLE_instance;
  var InternalType_LONG_instance;
  var InternalType_LONG_NULLABLE_instance;
  var InternalType_STRING_instance;
  var InternalType_STRING_NULLABLE_instance;
  var InternalType_INT_ARRAY_instance;
  var InternalType_BOOL_ARRAY_instance;
  var InternalType_DOUBLE_ARRAY_instance;
  var InternalType_FLOAT_ARRAY_instance;
  var InternalType_LONG_ARRAY_instance;
  var InternalType_ARRAY_instance;
  var InternalType_LIST_instance;
  var InternalType_UNKNOWN_instance;
  function values() {
    return [InternalType_INT_getInstance(), InternalType_INT_NULLABLE_getInstance(), InternalType_BOOL_getInstance(), InternalType_BOOL_NULLABLE_getInstance(), InternalType_DOUBLE_getInstance(), InternalType_DOUBLE_NULLABLE_getInstance(), InternalType_FLOAT_getInstance(), InternalType_FLOAT_NULLABLE_getInstance(), InternalType_LONG_getInstance(), InternalType_LONG_NULLABLE_getInstance(), InternalType_STRING_getInstance(), InternalType_STRING_NULLABLE_getInstance(), InternalType_INT_ARRAY_getInstance(), InternalType_BOOL_ARRAY_getInstance(), InternalType_DOUBLE_ARRAY_getInstance(), InternalType_FLOAT_ARRAY_getInstance(), InternalType_LONG_ARRAY_getInstance(), InternalType_ARRAY_getInstance(), InternalType_LIST_getInstance(), InternalType_UNKNOWN_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'INT':
        return InternalType_INT_getInstance();
      case 'INT_NULLABLE':
        return InternalType_INT_NULLABLE_getInstance();
      case 'BOOL':
        return InternalType_BOOL_getInstance();
      case 'BOOL_NULLABLE':
        return InternalType_BOOL_NULLABLE_getInstance();
      case 'DOUBLE':
        return InternalType_DOUBLE_getInstance();
      case 'DOUBLE_NULLABLE':
        return InternalType_DOUBLE_NULLABLE_getInstance();
      case 'FLOAT':
        return InternalType_FLOAT_getInstance();
      case 'FLOAT_NULLABLE':
        return InternalType_FLOAT_NULLABLE_getInstance();
      case 'LONG':
        return InternalType_LONG_getInstance();
      case 'LONG_NULLABLE':
        return InternalType_LONG_NULLABLE_getInstance();
      case 'STRING':
        return InternalType_STRING_getInstance();
      case 'STRING_NULLABLE':
        return InternalType_STRING_NULLABLE_getInstance();
      case 'INT_ARRAY':
        return InternalType_INT_ARRAY_getInstance();
      case 'BOOL_ARRAY':
        return InternalType_BOOL_ARRAY_getInstance();
      case 'DOUBLE_ARRAY':
        return InternalType_DOUBLE_ARRAY_getInstance();
      case 'FLOAT_ARRAY':
        return InternalType_FLOAT_ARRAY_getInstance();
      case 'LONG_ARRAY':
        return InternalType_LONG_ARRAY_getInstance();
      case 'ARRAY':
        return InternalType_ARRAY_getInstance();
      case 'LIST':
        return InternalType_LIST_getInstance();
      case 'UNKNOWN':
        return InternalType_UNKNOWN_getInstance();
      default:
        InternalType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var InternalType_entriesInitialized;
  function InternalType_initEntries() {
    if (InternalType_entriesInitialized)
      return Unit_getInstance();
    InternalType_entriesInitialized = true;
    InternalType_INT_instance = new InternalType('INT', 0);
    InternalType_INT_NULLABLE_instance = new InternalType('INT_NULLABLE', 1);
    InternalType_BOOL_instance = new InternalType('BOOL', 2);
    InternalType_BOOL_NULLABLE_instance = new InternalType('BOOL_NULLABLE', 3);
    InternalType_DOUBLE_instance = new InternalType('DOUBLE', 4);
    InternalType_DOUBLE_NULLABLE_instance = new InternalType('DOUBLE_NULLABLE', 5);
    InternalType_FLOAT_instance = new InternalType('FLOAT', 6);
    InternalType_FLOAT_NULLABLE_instance = new InternalType('FLOAT_NULLABLE', 7);
    InternalType_LONG_instance = new InternalType('LONG', 8);
    InternalType_LONG_NULLABLE_instance = new InternalType('LONG_NULLABLE', 9);
    InternalType_STRING_instance = new InternalType('STRING', 10);
    InternalType_STRING_NULLABLE_instance = new InternalType('STRING_NULLABLE', 11);
    InternalType_INT_ARRAY_instance = new InternalType('INT_ARRAY', 12);
    InternalType_BOOL_ARRAY_instance = new InternalType('BOOL_ARRAY', 13);
    InternalType_DOUBLE_ARRAY_instance = new InternalType('DOUBLE_ARRAY', 14);
    InternalType_FLOAT_ARRAY_instance = new InternalType('FLOAT_ARRAY', 15);
    InternalType_LONG_ARRAY_instance = new InternalType('LONG_ARRAY', 16);
    InternalType_ARRAY_instance = new InternalType('ARRAY', 17);
    InternalType_LIST_instance = new InternalType('LIST', 18);
    InternalType_UNKNOWN_instance = new InternalType('UNKNOWN', 19);
  }
  var $ENTRIES;
  function InternalType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toInternalType(_this__u8e3s4) {
    var serialName = replace(_this__u8e3s4.get_serialName_u2rqhk_k$(), '?', '');
    return serialName === 'kotlin.Int' ? _this__u8e3s4.get_isNullable_67sy7o_k$() ? InternalType_INT_NULLABLE_getInstance() : InternalType_INT_getInstance() : serialName === 'kotlin.Boolean' ? _this__u8e3s4.get_isNullable_67sy7o_k$() ? InternalType_BOOL_NULLABLE_getInstance() : InternalType_BOOL_getInstance() : serialName === 'kotlin.Double' ? _this__u8e3s4.get_isNullable_67sy7o_k$() ? InternalType_DOUBLE_NULLABLE_getInstance() : InternalType_DOUBLE_getInstance() : serialName === 'kotlin.Double' ? InternalType_DOUBLE_getInstance() : serialName === 'kotlin.Float' ? _this__u8e3s4.get_isNullable_67sy7o_k$() ? InternalType_FLOAT_NULLABLE_getInstance() : InternalType_FLOAT_getInstance() : serialName === 'kotlin.Long' ? _this__u8e3s4.get_isNullable_67sy7o_k$() ? InternalType_LONG_NULLABLE_getInstance() : InternalType_LONG_getInstance() : serialName === 'kotlin.String' ? _this__u8e3s4.get_isNullable_67sy7o_k$() ? InternalType_STRING_NULLABLE_getInstance() : InternalType_STRING_getInstance() : serialName === 'kotlin.IntArray' ? InternalType_INT_ARRAY_getInstance() : serialName === 'kotlin.DoubleArray' ? InternalType_DOUBLE_ARRAY_getInstance() : serialName === 'kotlin.BooleanArray' ? InternalType_BOOL_ARRAY_getInstance() : serialName === 'kotlin.FloatArray' ? InternalType_FLOAT_ARRAY_getInstance() : serialName === 'kotlin.LongArray' ? InternalType_LONG_ARRAY_getInstance() : serialName === 'kotlin.Array' ? InternalType_ARRAY_getInstance() : startsWith(serialName, 'kotlin.collections.ArrayList') ? InternalType_LIST_getInstance() : InternalType_UNKNOWN_getInstance();
  }
  function InternalNavType$IntNullableType$1() {
    NavType.call(this, true);
  }
  protoOf(InternalNavType$IntNullableType$1).get_name_woqyms_k$ = function () {
    return 'integer_nullable';
  };
  protoOf(InternalNavType$IntNullableType$1).put_a1so4v_k$ = function (bundle, key, value) {
    if (value == null) {
      bundle.putBundle_yus54s_k$(key, null);
    } else {
      Companion_getInstance_9().get_IntType_9uzfpc_k$().put_qb1i4t_k$(bundle, key, value);
    }
  };
  protoOf(InternalNavType$IntNullableType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_a1so4v_k$(bundle, key, (value == null ? true : typeof value === 'number') ? value : THROW_CCE());
  };
  protoOf(InternalNavType$IntNullableType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
  };
  protoOf(InternalNavType$IntNullableType$1).parseValue_fn9a6c_k$ = function (value) {
    return value === 'null' ? null : Companion_getInstance_9().get_IntType_9uzfpc_k$().parseValue_fn9a6c_k$(value);
  };
  function InternalNavType$BoolNullableType$1() {
    NavType.call(this, true);
  }
  protoOf(InternalNavType$BoolNullableType$1).get_name_woqyms_k$ = function () {
    return 'boolean_nullable';
  };
  protoOf(InternalNavType$BoolNullableType$1).put_wmbvjo_k$ = function (bundle, key, value) {
    if (value == null) {
      bundle.putBundle_yus54s_k$(key, null);
    } else {
      Companion_getInstance_9().get_BoolType_2fmckt_k$().put_qb1i4t_k$(bundle, key, value);
    }
  };
  protoOf(InternalNavType$BoolNullableType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_wmbvjo_k$(bundle, key, (value == null ? true : typeof value === 'boolean') ? value : THROW_CCE());
  };
  protoOf(InternalNavType$BoolNullableType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
  };
  protoOf(InternalNavType$BoolNullableType$1).parseValue_fn9a6c_k$ = function (value) {
    return value === 'null' ? null : Companion_getInstance_9().get_BoolType_2fmckt_k$().parseValue_fn9a6c_k$(value);
  };
  function InternalNavType$DoubleType$1() {
    NavType.call(this, false);
  }
  protoOf(InternalNavType$DoubleType$1).get_name_woqyms_k$ = function () {
    return 'double';
  };
  protoOf(InternalNavType$DoubleType$1).put_h8qabu_k$ = function (bundle, key, value) {
    bundle.putDouble_uddzq5_k$(key, value);
  };
  protoOf(InternalNavType$DoubleType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_h8qabu_k$(bundle, key, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$DoubleType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(InternalNavType$DoubleType$1).parseValue_fn9a6c_k$ = function (value) {
    return toDouble(value);
  };
  function InternalNavType$DoubleNullableType$1() {
    NavType.call(this, true);
  }
  protoOf(InternalNavType$DoubleNullableType$1).get_name_woqyms_k$ = function () {
    return 'double_nullable';
  };
  protoOf(InternalNavType$DoubleNullableType$1).put_6ue9y9_k$ = function (bundle, key, value) {
    if (value == null) {
      bundle.putBundle_yus54s_k$(key, null);
    } else {
      InternalNavType_getInstance().DoubleType_1.put_qb1i4t_k$(bundle, key, value);
    }
  };
  protoOf(InternalNavType$DoubleNullableType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_6ue9y9_k$(bundle, key, (value == null ? true : typeof value === 'number') ? value : THROW_CCE());
  };
  protoOf(InternalNavType$DoubleNullableType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
  };
  protoOf(InternalNavType$DoubleNullableType$1).parseValue_fn9a6c_k$ = function (value) {
    return value === 'null' ? null : InternalNavType_getInstance().DoubleType_1.parseValue_fn9a6c_k$(value);
  };
  function InternalNavType$FloatNullableType$1() {
    NavType.call(this, true);
  }
  protoOf(InternalNavType$FloatNullableType$1).get_name_woqyms_k$ = function () {
    return 'float_nullable';
  };
  protoOf(InternalNavType$FloatNullableType$1).put_2dlwcp_k$ = function (bundle, key, value) {
    if (value == null) {
      bundle.putBundle_yus54s_k$(key, null);
    } else {
      Companion_getInstance_9().get_FloatType_6qlkod_k$().put_qb1i4t_k$(bundle, key, value);
    }
  };
  protoOf(InternalNavType$FloatNullableType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_2dlwcp_k$(bundle, key, (value == null ? true : typeof value === 'number') ? value : THROW_CCE());
  };
  protoOf(InternalNavType$FloatNullableType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
  };
  protoOf(InternalNavType$FloatNullableType$1).parseValue_fn9a6c_k$ = function (value) {
    return value === 'null' ? null : Companion_getInstance_9().get_FloatType_6qlkod_k$().parseValue_fn9a6c_k$(value);
  };
  function InternalNavType$LongNullableType$1() {
    NavType.call(this, true);
  }
  protoOf(InternalNavType$LongNullableType$1).get_name_woqyms_k$ = function () {
    return 'long_nullable';
  };
  protoOf(InternalNavType$LongNullableType$1).put_p4jpi9_k$ = function (bundle, key, value) {
    if (value == null) {
      bundle.putBundle_yus54s_k$(key, null);
    } else {
      Companion_getInstance_9().get_LongType_5zm9xb_k$().put_qb1i4t_k$(bundle, key, value);
    }
  };
  protoOf(InternalNavType$LongNullableType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_p4jpi9_k$(bundle, key, (value == null ? true : value instanceof Long) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$LongNullableType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return tmp instanceof Long ? tmp : null;
  };
  protoOf(InternalNavType$LongNullableType$1).parseValue_fn9a6c_k$ = function (value) {
    return value === 'null' ? null : Companion_getInstance_9().get_LongType_5zm9xb_k$().parseValue_fn9a6c_k$(value);
  };
  function InternalNavType$StringNonNullableType$1() {
    NavType.call(this, false);
  }
  protoOf(InternalNavType$StringNonNullableType$1).get_name_woqyms_k$ = function () {
    return 'string_non_nullable';
  };
  protoOf(InternalNavType$StringNonNullableType$1).put_co8s3m_k$ = function (bundle, key, value) {
    bundle.putString_rtcuxu_k$(key, value);
  };
  protoOf(InternalNavType$StringNonNullableType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_co8s3m_k$(bundle, key, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$StringNonNullableType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp0_elvis_lhs = bundle.getString_au6gao_k$(key);
    return tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs;
  };
  protoOf(InternalNavType$StringNonNullableType$1).parseValue_fn9a6c_k$ = function (value) {
    return value;
  };
  protoOf(InternalNavType$StringNonNullableType$1).serializeAsValue_fygwjf_k$ = function (value) {
    return UriUtils_getInstance().encode$default_wfiqom_k$(value);
  };
  protoOf(InternalNavType$StringNonNullableType$1).serializeAsValue_g70rjk_k$ = function (value) {
    return this.serializeAsValue_fygwjf_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  function InternalNavType$StringNullableArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(InternalNavType$StringNullableArrayType$1).get_name_woqyms_k$ = function () {
    return 'string_nullable[]';
  };
  protoOf(InternalNavType$StringNullableArrayType$1).put_sblu9a_k$ = function (bundle, key, value) {
    bundle.putStringArray_rzbsdw_k$(key, value);
  };
  protoOf(InternalNavType$StringNullableArrayType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_sblu9a_k$(bundle, key, (value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableArrayType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(InternalNavType$StringNullableArrayType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_9().get_StringType_d7yf70_k$().parseValue_fn9a6c_k$(value)];
  };
  protoOf(InternalNavType$StringNullableArrayType$1).parseValue_5jy4k2_k$ = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.parseValue_fn9a6c_k$(value);
      // Inline function 'kotlin.js.asDynamic' call
      tmp = previousValue.concat(elements);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(InternalNavType$StringNullableArrayType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_5jy4k2_k$(value, (previousValue == null ? true : isArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableArrayType$1).valueEquals_l7h5cg_k$ = function (value, other) {
    return contentDeepEquals(value, other);
  };
  protoOf(InternalNavType$StringNullableArrayType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isArray(value)) ? value : THROW_CCE();
    return this.valueEquals_l7h5cg_k$(tmp, (other == null ? true : isArray(other)) ? other : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableArrayType$1).serializeAsValues_2s1k4m_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(value.length);
      var inductionVariable = 0;
      var last = value.length;
      while (inductionVariable < last) {
        var item = value[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.navigation.serialization.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp_0 = UriUtils_getInstance();
        // Inline function 'kotlin.text.orEmpty' call
        var tmp$ret$0 = item == null ? '' : item;
        var tmp$ret$1 = tmp_0.encode$default_wfiqom_k$(tmp$ret$0);
        destination.add_utx5q5_k$(tmp$ret$1);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(InternalNavType$StringNullableArrayType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_2s1k4m_k$((value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableArrayType$1).emptyCollection_7s8w1h_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [];
  };
  function InternalNavType$StringNullableListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(InternalNavType$StringNullableListType$1).get_name_woqyms_k$ = function () {
    return 'List<String?>';
  };
  protoOf(InternalNavType$StringNullableListType$1).put_grin62_k$ = function (bundle, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    bundle.putStringArray_rzbsdw_k$(key, tmp);
  };
  protoOf(InternalNavType$StringNullableListType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_grin62_k$(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableListType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList(tmp0_safe_receiver);
  };
  protoOf(InternalNavType$StringNullableListType$1).parseValue_fn9a6c_k$ = function (value) {
    return listOf(Companion_getInstance_9().get_StringType_d7yf70_k$().parseValue_fn9a6c_k$(value));
  };
  protoOf(InternalNavType$StringNullableListType$1).parseValue_tmp4iy_k$ = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus(previousValue, this.parseValue_fn9a6c_k$(value));
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(InternalNavType$StringNullableListType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_tmp4iy_k$(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableListType$1).valueEquals_36f2o4_k$ = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(InternalNavType$StringNullableListType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.valueEquals_36f2o4_k$(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableListType$1).serializeAsValues_iailwy_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var tmp0_iterator = value.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.serialization.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp_0 = UriUtils_getInstance();
        // Inline function 'kotlin.text.orEmpty' call
        var tmp$ret$0 = item == null ? '' : item;
        var tmp$ret$1 = tmp_0.encode$default_wfiqom_k$(tmp$ret$0);
        destination.add_utx5q5_k$(tmp$ret$1);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(InternalNavType$StringNullableListType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_iailwy_k$((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$StringNullableListType$1).emptyCollection_7s8w1h_k$ = function () {
    return emptyList();
  };
  function InternalNavType$DoubleArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(InternalNavType$DoubleArrayType$1).get_name_woqyms_k$ = function () {
    return 'double[]';
  };
  protoOf(InternalNavType$DoubleArrayType$1).put_zduugu_k$ = function (bundle, key, value) {
    bundle.putDoubleArray_bjfpms_k$(key, value);
  };
  protoOf(InternalNavType$DoubleArrayType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_zduugu_k$(bundle, key, (value == null ? true : isDoubleArray(value)) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$DoubleArrayType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : isDoubleArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(InternalNavType$DoubleArrayType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.doubleArrayOf' call
    return new Float64Array([InternalNavType_getInstance().DoubleType_1.parseValue_fn9a6c_k$(value)]);
  };
  protoOf(InternalNavType$DoubleArrayType$1).parseValue_53h7su_k$ = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.parseValue_fn9a6c_k$(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(InternalNavType$DoubleArrayType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_53h7su_k$(value, (previousValue == null ? true : isDoubleArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(InternalNavType$DoubleArrayType$1).valueEquals_79a11s_k$ = function (value, other) {
    var valueArray = value == null ? null : toTypedArray(value);
    var otherArray = other == null ? null : toTypedArray(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(InternalNavType$DoubleArrayType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isDoubleArray(value)) ? value : THROW_CCE();
    return this.valueEquals_79a11s_k$(tmp, (other == null ? true : isDoubleArray(other)) ? other : THROW_CCE());
  };
  protoOf(InternalNavType$DoubleArrayType$1).serializeAsValues_onw32i_k$ = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_0(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.serialization.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(InternalNavType$DoubleArrayType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_onw32i_k$((value == null ? true : isDoubleArray(value)) ? value : THROW_CCE());
  };
  protoOf(InternalNavType$DoubleArrayType$1).emptyCollection_7s8w1h_k$ = function () {
    // Inline function 'kotlin.doubleArrayOf' call
    return new Float64Array([]);
  };
  function InternalNavType() {
    InternalNavType_instance = this;
    var tmp = this;
    tmp.IntNullableType_1 = new InternalNavType$IntNullableType$1();
    var tmp_0 = this;
    tmp_0.BoolNullableType_1 = new InternalNavType$BoolNullableType$1();
    var tmp_1 = this;
    tmp_1.DoubleType_1 = new InternalNavType$DoubleType$1();
    var tmp_2 = this;
    tmp_2.DoubleNullableType_1 = new InternalNavType$DoubleNullableType$1();
    var tmp_3 = this;
    tmp_3.FloatNullableType_1 = new InternalNavType$FloatNullableType$1();
    var tmp_4 = this;
    tmp_4.LongNullableType_1 = new InternalNavType$LongNullableType$1();
    var tmp_5 = this;
    tmp_5.StringNonNullableType_1 = new InternalNavType$StringNonNullableType$1();
    var tmp_6 = this;
    tmp_6.StringNullableArrayType_1 = new InternalNavType$StringNullableArrayType$1();
    var tmp_7 = this;
    tmp_7.StringNullableListType_1 = new InternalNavType$StringNullableListType$1();
    var tmp_8 = this;
    tmp_8.DoubleArrayType_1 = new InternalNavType$DoubleArrayType$1();
  }
  protoOf(InternalNavType).get_IntNullableType_nqvp6n_k$ = function () {
    return this.IntNullableType_1;
  };
  protoOf(InternalNavType).get_BoolNullableType_q9846m_k$ = function () {
    return this.BoolNullableType_1;
  };
  protoOf(InternalNavType).get_DoubleType_po9ob8_k$ = function () {
    return this.DoubleType_1;
  };
  protoOf(InternalNavType).get_DoubleNullableType_efcyaz_k$ = function () {
    return this.DoubleNullableType_1;
  };
  protoOf(InternalNavType).get_FloatNullableType_f72eqa_k$ = function () {
    return this.FloatNullableType_1;
  };
  protoOf(InternalNavType).get_LongNullableType_pjxz5s_k$ = function () {
    return this.LongNullableType_1;
  };
  protoOf(InternalNavType).get_StringNonNullableType_20g1de_k$ = function () {
    return this.StringNonNullableType_1;
  };
  protoOf(InternalNavType).get_StringNullableArrayType_duoevc_k$ = function () {
    return this.StringNullableArrayType_1;
  };
  protoOf(InternalNavType).get_StringNullableListType_9iddf1_k$ = function () {
    return this.StringNullableListType_1;
  };
  protoOf(InternalNavType).get_DoubleArrayType_pdsyhz_k$ = function () {
    return this.DoubleArrayType_1;
  };
  var InternalNavType_instance;
  function InternalNavType_getInstance() {
    if (InternalNavType_instance == null)
      new InternalNavType();
    return InternalNavType_instance;
  }
  function InternalType_INT_getInstance() {
    InternalType_initEntries();
    return InternalType_INT_instance;
  }
  function InternalType_INT_NULLABLE_getInstance() {
    InternalType_initEntries();
    return InternalType_INT_NULLABLE_instance;
  }
  function InternalType_BOOL_getInstance() {
    InternalType_initEntries();
    return InternalType_BOOL_instance;
  }
  function InternalType_BOOL_NULLABLE_getInstance() {
    InternalType_initEntries();
    return InternalType_BOOL_NULLABLE_instance;
  }
  function InternalType_DOUBLE_getInstance() {
    InternalType_initEntries();
    return InternalType_DOUBLE_instance;
  }
  function InternalType_DOUBLE_NULLABLE_getInstance() {
    InternalType_initEntries();
    return InternalType_DOUBLE_NULLABLE_instance;
  }
  function InternalType_FLOAT_getInstance() {
    InternalType_initEntries();
    return InternalType_FLOAT_instance;
  }
  function InternalType_FLOAT_NULLABLE_getInstance() {
    InternalType_initEntries();
    return InternalType_FLOAT_NULLABLE_instance;
  }
  function InternalType_LONG_getInstance() {
    InternalType_initEntries();
    return InternalType_LONG_instance;
  }
  function InternalType_LONG_NULLABLE_getInstance() {
    InternalType_initEntries();
    return InternalType_LONG_NULLABLE_instance;
  }
  function InternalType_STRING_getInstance() {
    InternalType_initEntries();
    return InternalType_STRING_instance;
  }
  function InternalType_STRING_NULLABLE_getInstance() {
    InternalType_initEntries();
    return InternalType_STRING_NULLABLE_instance;
  }
  function InternalType_INT_ARRAY_getInstance() {
    InternalType_initEntries();
    return InternalType_INT_ARRAY_instance;
  }
  function InternalType_BOOL_ARRAY_getInstance() {
    InternalType_initEntries();
    return InternalType_BOOL_ARRAY_instance;
  }
  function InternalType_DOUBLE_ARRAY_getInstance() {
    InternalType_initEntries();
    return InternalType_DOUBLE_ARRAY_instance;
  }
  function InternalType_FLOAT_ARRAY_getInstance() {
    InternalType_initEntries();
    return InternalType_FLOAT_ARRAY_instance;
  }
  function InternalType_LONG_ARRAY_getInstance() {
    InternalType_initEntries();
    return InternalType_LONG_ARRAY_instance;
  }
  function InternalType_ARRAY_getInstance() {
    InternalType_initEntries();
    return InternalType_ARRAY_instance;
  }
  function InternalType_LIST_getInstance() {
    InternalType_initEntries();
    return InternalType_LIST_instance;
  }
  function InternalType_UNKNOWN_getInstance() {
    InternalType_initEntries();
    return InternalType_UNKNOWN_instance;
  }
  var ParamType_PATH_instance;
  var ParamType_QUERY_instance;
  function values_0() {
    return [ParamType_PATH_getInstance(), ParamType_QUERY_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'PATH':
        return ParamType_PATH_getInstance();
      case 'QUERY':
        return ParamType_QUERY_getInstance();
      default:
        ParamType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ParamType_entriesInitialized;
  function ParamType_initEntries() {
    if (ParamType_entriesInitialized)
      return Unit_getInstance();
    ParamType_entriesInitialized = true;
    ParamType_PATH_instance = new ParamType('PATH', 0);
    ParamType_QUERY_instance = new ParamType('QUERY', 1);
  }
  var $ENTRIES_0;
  function _get_serializer__hdpyrd($this) {
    return $this.serializer_1;
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_pathArgs__ult08l($this, _set____db54di) {
    $this.pathArgs_1 = _set____db54di;
  }
  function _get_pathArgs__hswort_0($this) {
    return $this.pathArgs_1;
  }
  function _set_queryArgs__gv07fk($this, _set____db54di) {
    $this.queryArgs_1 = _set____db54di;
  }
  function _get_queryArgs__ov9e50($this) {
    return $this.queryArgs_1;
  }
  function RouteBuilder_init_$Init$(serializer, $this) {
    RouteBuilder.call($this);
    $this.serializer_1 = serializer;
    $this.path_1 = serializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
    return $this;
  }
  function RouteBuilder_init_$Create$(serializer) {
    return RouteBuilder_init_$Init$(serializer, objectCreate(protoOf(RouteBuilder)));
  }
  function RouteBuilder_init_$Init$_0(path, serializer, $this) {
    RouteBuilder.call($this);
    $this.serializer_1 = serializer;
    $this.path_1 = path;
    return $this;
  }
  function RouteBuilder_init_$Create$_0(path, serializer) {
    return RouteBuilder_init_$Init$_0(path, serializer, objectCreate(protoOf(RouteBuilder)));
  }
  function addPath($this, path) {
    $this.pathArgs_1 = $this.pathArgs_1 + ('/' + path);
  }
  function addQuery($this, name, value) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = $this.queryArgs_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = '?';
    } else {
      tmp = '&';
    }
    var symbol = tmp;
    $this.queryArgs_1 = $this.queryArgs_1 + (symbol + name + '=' + value);
  }
  function computeParamType($this, index, type) {
    var tmp;
    var tmp_0;
    if (type instanceof CollectionNavType) {
      tmp_0 = true;
    } else {
      tmp_0 = $this.serializer_1.get_descriptor_wjt6a0_k$().isElementOptional_heqq56_k$(index);
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
  protoOf(RouteBuilder).build_1k0s4u_k$ = function () {
    return this.path_1 + this.pathArgs_1 + this.queryArgs_1;
  };
  protoOf(RouteBuilder).appendPattern_3v8xa2_k$ = function (index, name, type) {
    var paramType = computeParamType(this, index, type);
    var tmp0 = paramType.get_ordinal_ip24qg_k$();
    if (tmp0 === 0) {
      addPath(this, '{' + name + '}');
    } else if (tmp0 === 1) {
      addQuery(this, name, '{' + name + '}');
    }
  };
  protoOf(RouteBuilder).appendArg_mcf5mq_k$ = function (index, name, type, value) {
    var paramType = computeParamType(this, index, type);
    var tmp0 = paramType.get_ordinal_ip24qg_k$();
    if (tmp0 === 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(value.get_size_woubt6_k$() === 1)) {
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        var message = 'Expected one value for argument ' + name + ', found ' + value.get_size_woubt6_k$() + 'values instead.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      addPath(this, first(value));
    } else if (tmp0 === 1) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = value.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        addQuery(this, name, element);
      }
    }
  };
  function RouteBuilder() {
    this.pathArgs_1 = '';
    this.queryArgs_1 = '';
  }
  function _get_serializer__hdpyrd_0($this) {
    return $this.serializer_1;
  }
  function _get_typeMap__nyz98v_0($this) {
    return $this.typeMap_1;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _set_elementIndex__uxj84h($this, _set____db54di) {
    $this.elementIndex_1 = _set____db54di;
  }
  function _get_elementIndex__oju3aj($this) {
    return $this.elementIndex_1;
  }
  function internalEncodeValue($this, value) {
    var argName = $this.serializer_1.get_descriptor_wjt6a0_k$().getElementName_u4sqmf_k$($this.elementIndex_1);
    var navType = $this.typeMap_1.get_wei43m_k$(argName);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (navType == null) {
        // Inline function 'androidx.navigation.serialization.RouteEncoder.internalEncodeValue.<anonymous>' call
        var message = 'Cannot find NavType for argument ' + argName + '. Please provide NavType through typeMap.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var tmp;
    if (navType instanceof CollectionNavType) {
      tmp = navType.serializeAsValues_rg3iw5_k$(value);
    } else {
      tmp = listOf(navType.serializeAsValue_g70rjk_k$(value));
    }
    var parsedValue = tmp;
    // Inline function 'kotlin.collections.set' call
    $this.map_1.put_4fpzoq_k$(argName, parsedValue);
  }
  function RouteEncoder(serializer, typeMap) {
    AbstractEncoder.call(this);
    this.serializer_1 = serializer;
    this.typeMap_1 = typeMap;
    this.serializersModule_1 = EmptySerializersModule();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.map_1 = LinkedHashMap_init_$Create$();
    this.elementIndex_1 = -1;
  }
  protoOf(RouteEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(RouteEncoder).encodeToArgMap_bwlqx_k$ = function (value) {
    protoOf(AbstractEncoder).encodeSerializableValue_3uuzip_k$.call(this, this.serializer_1, !(value == null) ? value : THROW_CCE());
    return toMap(this.map_1);
  };
  protoOf(RouteEncoder).encodeSerializableValue_3uuzip_k$ = function (serializer, value) {
    internalEncodeValue(this, value);
  };
  protoOf(RouteEncoder).encodeElement_5v7eyb_k$ = function (descriptor, index) {
    this.elementIndex_1 = index;
    return true;
  };
  protoOf(RouteEncoder).encodeValue_g68i1f_k$ = function (value) {
    internalEncodeValue(this, value);
  };
  protoOf(RouteEncoder).encodeNull_ejiosz_k$ = function () {
    internalEncodeValue(this, null);
  };
  protoOf(RouteEncoder).encodeInline_wxp5pu_k$ = function (descriptor) {
    if (isValueClass(descriptor))
      this.elementIndex_1 = 0;
    return protoOf(AbstractEncoder).encodeInline_wxp5pu_k$.call(this, descriptor);
  };
  function generateHashCode(_this__u8e3s4) {
    var hash = getStringHashCode(_this__u8e3s4.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_descriptor_wjt6a0_k$().get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hash = imul(31, hash) + getStringHashCode(_this__u8e3s4.get_descriptor_wjt6a0_k$().getElementName_u4sqmf_k$(i)) | 0;
      }
       while (inductionVariable < last);
    return hash;
  }
  function generateRouteWithArgs(route, typeMap) {
    var serializer_0 = serializer(getKClassFromExpression(route));
    var argMap = (new RouteEncoder(serializer_0, typeMap)).encodeToArgMap_bwlqx_k$(route);
    var builder = RouteBuilder_init_$Create$(serializer_0);
    forEachIndexed(serializer_0, typeMap, generateRouteWithArgs$lambda(argMap, builder));
    return builder.build_1k0s4u_k$();
  }
  function forEachIndexed(_this__u8e3s4, typeMap, operation) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_descriptor_wjt6a0_k$().get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var argName = _this__u8e3s4.get_descriptor_wjt6a0_k$().getElementName_u4sqmf_k$(i);
        var navType = typeMap.get_wei43m_k$(argName);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (navType == null) {
            // Inline function 'androidx.navigation.serialization.forEachIndexed.<anonymous>' call
            var message = 'Cannot locate NavType for argument [' + argName + ']';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            break $l$block;
          }
        }
        operation(i, argName, navType);
      }
       while (inductionVariable < last);
  }
  function generateRoutePattern(_this__u8e3s4, typeMap, path) {
    typeMap = typeMap === VOID ? emptyMap() : typeMap;
    path = path === VOID ? null : path;
    assertNotAbstractClass(_this__u8e3s4, generateRoutePattern$lambda(_this__u8e3s4));
    var tmp;
    if (!(path == null)) {
      tmp = RouteBuilder_init_$Create$_0(path, _this__u8e3s4);
    } else {
      tmp = RouteBuilder_init_$Create$(_this__u8e3s4);
    }
    var builder = tmp;
    forEachIndexed_0(_this__u8e3s4, typeMap, generateRoutePattern$lambda_0(builder));
    return builder.build_1k0s4u_k$();
  }
  function generateNavArguments(_this__u8e3s4, typeMap) {
    typeMap = typeMap === VOID ? emptyMap() : typeMap;
    assertNotAbstractClass(_this__u8e3s4, generateNavArguments$lambda(_this__u8e3s4));
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = _this__u8e3s4.get_descriptor_wjt6a0_k$().get_elementsCount_288r0x_k$();
    var list = ArrayList_init_$Create$_0(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.navigation.serialization.generateNavArguments.<anonymous>' call
        var name = _this__u8e3s4.get_descriptor_wjt6a0_k$().getElementName_u4sqmf_k$(index);
        var tmp$ret$0 = navArgument(name, generateNavArguments$lambda_0(_this__u8e3s4, index, typeMap, name));
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    return list;
  }
  function isValueClass(_this__u8e3s4) {
    return equals(_this__u8e3s4.get_kind_wop7ml_k$(), CLASS_getInstance()) && _this__u8e3s4.get_isInline_usk17w_k$() && _this__u8e3s4.get_elementsCount_288r0x_k$() === 1;
  }
  function assertNotAbstractClass(_this__u8e3s4, handler) {
    if (_this__u8e3s4 instanceof PolymorphicSerializer) {
      handler();
    }
  }
  function forEachIndexed_0(_this__u8e3s4, typeMap, operation) {
    typeMap = typeMap === VOID ? emptyMap() : typeMap;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_descriptor_wjt6a0_k$().get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var argName = _this__u8e3s4.get_descriptor_wjt6a0_k$().getElementName_u4sqmf_k$(i);
        var tmp1_elvis_lhs = computeNavType(_this__u8e3s4.get_descriptor_wjt6a0_k$().getElementDescriptor_ncda77_k$(i), typeMap);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$(unknownNavTypeErrorMessage(argName, _this__u8e3s4.get_descriptor_wjt6a0_k$().getElementDescriptor_ncda77_k$(i).get_serialName_u2rqhk_k$(), _this__u8e3s4.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$(), toString(typeMap)));
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var navType = tmp;
        operation(i, argName, navType);
      }
       while (inductionVariable < last);
  }
  function computeNavType(_this__u8e3s4, typeMap) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = typeMap.get_keys_wop4xp_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.serialization.computeNavType.<anonymous>' call
        if (matchKType(_this__u8e3s4, element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.serialization.computeNavType.<anonymous>' call
      tmp = typeMap.get_wei43m_k$(tmp0_safe_receiver);
    }
    var tmp_0 = tmp;
    var customType = tmp_0 instanceof NavType ? tmp_0 : null;
    var result = customType == null ? getNavType(_this__u8e3s4) : customType;
    var tmp_1;
    if (equals(result, UNKNOWN_getInstance())) {
      tmp_1 = null;
    } else {
      tmp_1 = result instanceof NavType ? result : THROW_CCE();
    }
    return tmp_1;
  }
  function unknownNavTypeErrorMessage(fieldName, fieldType, className, typeMap) {
    return 'Route ' + className + ' could not find any NavType for argument ' + fieldName + ' ' + ('of type ' + fieldType + ' - typeMap received was ' + typeMap);
  }
  function generateRouteWithArgs$lambda($argMap, $builder) {
    return function (index, argName, navType) {
      var value = ensureNotNull($argMap.get_wei43m_k$(argName));
      $builder.appendArg_mcf5mq_k$(index, argName, navType, value);
      return Unit_getInstance();
    };
  }
  function generateRoutePattern$lambda($this_generateRoutePattern) {
    return function () {
      var tmp0_safe_receiver = get_capturedKClass($this_generateRoutePattern.get_descriptor_wjt6a0_k$());
      throw IllegalArgumentException_init_$Create$('Cannot generate route pattern from polymorphic class ' + ('' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_simpleName_r6f8py_k$()) + '. Routes can only be generated from ') + 'concrete classes or objects.');
    };
  }
  function generateRoutePattern$lambda_0($builder) {
    return function (index, argName, navType) {
      $builder.appendPattern_3v8xa2_k$(index, argName, navType);
      return Unit_getInstance();
    };
  }
  function generateNavArguments$lambda($this_generateNavArguments) {
    return function () {
      throw IllegalArgumentException_init_$Create$('Cannot generate NavArguments for polymorphic serializer ' + toString($this_generateNavArguments) + '. Arguments ' + 'can only be generated from concrete classes or objects.');
    };
  }
  function generateNavArguments$lambda_0($this_generateNavArguments, $index, $typeMap, $name) {
    return function ($this$navArgument) {
      var element = $this_generateNavArguments.get_descriptor_wjt6a0_k$().getElementDescriptor_ncda77_k$($index);
      var isNullable = element.get_isNullable_67sy7o_k$();
      var tmp0_elvis_lhs = computeNavType(element, $typeMap);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$(unknownNavTypeErrorMessage($name, element.get_serialName_u2rqhk_k$(), $this_generateNavArguments.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$(), toString($typeMap)));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      $this$navArgument.set_type_6my2xp_k$(tmp);
      $this$navArgument.set_nullable_91xh55_k$(isNullable);
      var tmp_0;
      if ($this_generateNavArguments.get_descriptor_wjt6a0_k$().isElementOptional_heqq56_k$($index)) {
        $this$navArgument.set_unknownDefaultValuePresent_dln6i9_k$(true);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_immutableArgs__k86n8y($this) {
    return $this.immutableArgs_1;
  }
  function _set_hostLifecycleState__bedlrc($this, _set____db54di) {
    $this.hostLifecycleState_1 = _set____db54di;
  }
  function _get_hostLifecycleState__mjhpd0($this) {
    return $this.hostLifecycleState_1;
  }
  function _get_viewModelStoreProvider__rjwjk3($this) {
    return $this.viewModelStoreProvider_1;
  }
  function _get_savedState__u2bo1r($this) {
    return $this.savedState_1;
  }
  function NavBackStackEntry_init_$Init$(entry, arguments_0, $this) {
    arguments_0 = arguments_0 === VOID ? entry.get_arguments_p5ddub_k$() : arguments_0;
    NavBackStackEntry.call($this, entry.destination_1, arguments_0, entry.hostLifecycleState_1, entry.viewModelStoreProvider_1, entry.id_1, entry.savedState_1);
    $this.hostLifecycleState_1 = entry.hostLifecycleState_1;
    $this.set_maxLifecycle_cmkd09_k$(entry.maxLifecycle_1);
    return $this;
  }
  function NavBackStackEntry_init_$Create$(entry, arguments_0) {
    return NavBackStackEntry_init_$Init$(entry, arguments_0, objectCreate(protoOf(NavBackStackEntry)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).create_5hjegv_k$ = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    return new NavBackStackEntry(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion_1).create$default_lx1myn_k$ = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState, $super) {
    arguments_0 = arguments_0 === VOID ? null : arguments_0;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? randomUUID() : id;
    savedState = savedState === VOID ? null : savedState;
    return $super === VOID ? this.create_5hjegv_k$(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) : $super.create_5hjegv_k$.call(this, destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion_1).randomId_452x4u_k$ = function () {
    return randomUUID();
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _set__lifecycle__b2ibjo($this, _set____db54di) {
    $this._lifecycle_1 = _set____db54di;
  }
  function _get__lifecycle__q4qwow($this) {
    return $this._lifecycle_1;
  }
  function _get_savedStateRegistryController__f88lqg($this) {
    return $this.savedStateRegistryController_1;
  }
  function _set_savedStateRegistryAttached__qfp2lw($this, _set____db54di) {
    $this.savedStateRegistryAttached_1 = _set____db54di;
  }
  function _get_savedStateRegistryAttached__p0vc74($this) {
    return $this.savedStateRegistryAttached_1;
  }
  function NavResultSavedStateFactory(owner) {
    AbstractSavedStateViewModelFactory_init_$Init$(owner, null, this);
  }
  protoOf(NavResultSavedStateFactory).create_xim7zc_k$ = function (key, modelClass, handle) {
    var tmp = new SavedStateViewModel(handle);
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  function SavedStateViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.handle_1 = handle;
  }
  protoOf(SavedStateViewModel).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  function NavBackStackEntry$savedStateHandle$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!this$0.savedStateRegistryAttached_1) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message = "You cannot access the NavBackStackEntry's SavedStateHandle until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (!!this$0.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().equals(State_DESTROYED_getInstance())) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message_0 = "You cannot access the NavBackStackEntry's SavedStateHandle after the NavBackStackEntry is destroyed.";
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      return Companion_getInstance_0().create$default_kyfkyv_k$(this$0, new NavResultSavedStateFactory(this$0)).get_1zxqo7_k$(getKClass(SavedStateViewModel)).handle_1;
    };
  }
  function NavBackStackEntry$defaultViewModelProviderFactory$1() {
  }
  function NavBackStackEntry(destination, immutableArgs, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    Companion_getInstance_4();
    immutableArgs = immutableArgs === VOID ? null : immutableArgs;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? Companion_getInstance_4().randomId_452x4u_k$() : id;
    savedState = savedState === VOID ? null : savedState;
    this.destination_1 = destination;
    this.immutableArgs_1 = immutableArgs;
    this.hostLifecycleState_1 = hostLifecycleState;
    this.viewModelStoreProvider_1 = viewModelStoreProvider;
    this.id_1 = id;
    this.savedState_1 = savedState;
    this._lifecycle_1 = LifecycleRegistry_init_$Create$(this);
    this.savedStateRegistryController_1 = Companion_getInstance_1().create_vgrzy2_k$(this);
    this.savedStateRegistryAttached_1 = false;
    var tmp = this;
    tmp.savedStateHandle$delegate_1 = lazy(NavBackStackEntry$savedStateHandle$delegate$lambda(this));
    this.maxLifecycle_1 = State_INITIALIZED_getInstance();
    var tmp_0 = this;
    tmp_0.defaultViewModelProviderFactory_1 = new NavBackStackEntry$defaultViewModelProviderFactory$1();
  }
  protoOf(NavBackStackEntry).set_destination_qh5d5x_k$ = function (_set____db54di) {
    this.destination_1 = _set____db54di;
  };
  protoOf(NavBackStackEntry).get_destination_9r3c63_k$ = function () {
    return this.destination_1;
  };
  protoOf(NavBackStackEntry).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBackStackEntry).get_arguments_p5ddub_k$ = function () {
    var tmp;
    if (this.immutableArgs_1 == null) {
      tmp = null;
    } else {
      tmp = Bundle_init_$Create$_0(this.immutableArgs_1);
    }
    return tmp;
  };
  protoOf(NavBackStackEntry).get_savedStateHandle_xtsxet_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.savedStateHandle$delegate_1;
    savedStateHandle$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(NavBackStackEntry).get_lifecycle_3iiym9_k$ = function () {
    return this._lifecycle_1;
  };
  protoOf(NavBackStackEntry).set_maxLifecycle_cmkd09_k$ = function (maxState) {
    this.maxLifecycle_1 = maxState;
    this.updateState_jtl854_k$();
  };
  protoOf(NavBackStackEntry).get_maxLifecycle_nztmq9_k$ = function () {
    return this.maxLifecycle_1;
  };
  protoOf(NavBackStackEntry).handleLifecycleEvent_yoinvo_k$ = function (event) {
    this.hostLifecycleState_1 = event.get_targetState_kri3mx_k$();
    this.updateState_jtl854_k$();
  };
  protoOf(NavBackStackEntry).updateState_jtl854_k$ = function () {
    if (!this.savedStateRegistryAttached_1) {
      this.savedStateRegistryController_1.performAttach_s69gp6_k$();
      this.savedStateRegistryAttached_1 = true;
      if (!(this.viewModelStoreProvider_1 == null)) {
        enableSavedStateHandles(this);
      }
      this.savedStateRegistryController_1.performRestore_70bz3t_k$(this.savedState_1);
    }
    if (this.hostLifecycleState_1.get_ordinal_ip24qg_k$() < this.maxLifecycle_1.get_ordinal_ip24qg_k$()) {
      this._lifecycle_1.set_currentState_4q36uf_k$(this.hostLifecycleState_1);
    } else {
      this._lifecycle_1.set_currentState_4q36uf_k$(this.maxLifecycle_1);
    }
  };
  protoOf(NavBackStackEntry).get_viewModelStore_ryk6ka_k$ = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.savedStateRegistryAttached_1) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message = "You cannot access the NavBackStackEntry's ViewModels until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().equals(State_DESTROYED_getInstance())) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message_0 = "You cannot access the NavBackStackEntry's ViewModels after the NavBackStackEntry is destroyed.";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.viewModelStoreProvider_1 == null) {
        // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
        var message_1 = 'You must call setViewModelStore() on your NavHostController before accessing the ViewModelStore of a navigation graph.';
        throw IllegalStateException_init_$Create$(toString(message_1));
      } else {
        break $l$block;
      }
    }
    return this.viewModelStoreProvider_1.getViewModelStore_jsqiop_k$(this.id_1);
  };
  protoOf(NavBackStackEntry).get_defaultViewModelProviderFactory_kajob7_k$ = function () {
    return this.defaultViewModelProviderFactory_1;
  };
  protoOf(NavBackStackEntry).get_defaultViewModelCreationExtras_x8sur6_k$ = function () {
    var extras = MutableCreationExtras_init_$Create$();
    extras.set_ccm2re_k$(get_SAVED_STATE_REGISTRY_OWNER_KEY(), this);
    extras.set_ccm2re_k$(get_VIEW_MODEL_STORE_OWNER_KEY(), this);
    var tmp0_safe_receiver = this.get_arguments_p5ddub_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      extras.set_ccm2re_k$(get_DEFAULT_ARGS_KEY(), tmp0_safe_receiver);
    }
    return extras;
  };
  protoOf(NavBackStackEntry).get_savedStateRegistry_c47b5c_k$ = function () {
    return this.savedStateRegistryController_1.get_savedStateRegistry_c47b5c_k$();
  };
  protoOf(NavBackStackEntry).saveState_8an50n_k$ = function (outBundle) {
    this.savedStateRegistryController_1.performSave_vf2er3_k$(outBundle);
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
    if (this.id_1 === other.id_1 && this.destination_1.equals(other.destination_1) && equals(this.get_lifecycle_3iiym9_k$(), other.get_lifecycle_3iiym9_k$()) && equals(this.get_savedStateRegistry_c47b5c_k$(), other.get_savedStateRegistry_c47b5c_k$())) {
      var tmp_1;
      if (equals(this.immutableArgs_1, other.immutableArgs_1)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver = this.immutableArgs_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.keySet_irk8e5_k$();
        var tmp_2;
        if (tmp1_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var tmp_3;
            if (isInterface(tmp1_safe_receiver, Collection)) {
              tmp_3 = tmp1_safe_receiver.isEmpty_y1axqb_k$();
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
            var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              // Inline function 'androidx.navigation.NavBackStackEntry.equals.<anonymous>' call
              var tmp_4 = this.immutableArgs_1.get_jl1mi9_k$(element);
              var tmp0_safe_receiver_0 = other.immutableArgs_1;
              if (!equals(tmp_4, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_jl1mi9_k$(element))) {
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
    var result = getStringHashCode(this.id_1);
    result = imul(31, result) + this.destination_1.hashCode() | 0;
    var tmp0_safe_receiver = this.immutableArgs_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.keySet_irk8e5_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavBackStackEntry.hashCode.<anonymous>' call
        var tmp = imul(31, result);
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = this.immutableArgs_1.get_jl1mi9_k$(element);
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
    }
    result = imul(31, result) + hashCode(this.get_lifecycle_3iiym9_k$()) | 0;
    result = imul(31, result) + hashCode(this.get_savedStateRegistry_c47b5c_k$()) | 0;
    return result;
  };
  protoOf(NavBackStackEntry).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_22ad7x_k$(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
    sb.append_22ad7x_k$('(' + this.id_1 + ')');
    sb.append_22ad7x_k$(' destination=');
    sb.append_t8pm91_k$(this.destination_1);
    return sb.toString();
  };
  function randomUUID() {
    // Inline function 'kotlin.also' call
    var this_0 = Default_getInstance().nextBytes_dtk0kg_k$(16);
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
    return StringBuilder_init_$Create$_0(36).append_22ad7x_k$(toHexString(bytes, 0, 4)).append_am5a4z_k$(_Char___init__impl__6a9atx(45)).append_22ad7x_k$(toHexString(bytes, 4, 6)).append_am5a4z_k$(_Char___init__impl__6a9atx(45)).append_22ad7x_k$(toHexString(bytes, 6, 8)).append_am5a4z_k$(_Char___init__impl__6a9atx(45)).append_22ad7x_k$(toHexString(bytes, 8, 10)).append_am5a4z_k$(_Char___init__impl__6a9atx(45)).append_22ad7x_k$(toHexString(bytes, 10)).toString();
  }
  function savedStateHandle$factory() {
    return getPropertyCallableRef('savedStateHandle', 1, KProperty1, function (receiver) {
      return receiver.get_savedStateHandle_xtsxet_k$();
    }, null);
  }
  function _set_uri__4wfj89($this, _set____db54di) {
    $this.uri_1 = _set____db54di;
  }
  function _get_uri__e6i4dh($this) {
    return $this.uri_1;
  }
  function _set_action__h46obl_0($this, _set____db54di) {
    $this.action_1 = _set____db54di;
  }
  function _get_action__ikx8yd_0($this) {
    return $this.action_1;
  }
  function _set_mimeType__xwgky1_0($this, _set____db54di) {
    $this.mimeType_1 = _set____db54di;
  }
  function _get_mimeType__l3k9h9_0($this) {
    return $this.mimeType_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).fromUri_usevr5_k$ = function (uri) {
    var builder = new Builder_1();
    builder.setUri_hbbmd5_k$(uri);
    return builder;
  };
  protoOf(Companion_2).fromAction_u7xn2e_k$ = function (action) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(action) > 0)) {
      // Inline function 'androidx.navigation.Companion.fromAction.<anonymous>' call
      var message = 'The NavDeepLinkRequest cannot have an empty action.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var builder = new Builder_1();
    builder.setAction_fb866a_k$(action);
    return builder;
  };
  protoOf(Companion_2).fromMimeType_aeg2ce_k$ = function (mimeType) {
    var builder = new Builder_1();
    builder.setMimeType_8xoas6_k$(mimeType);
    return builder;
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Builder_1() {
    Companion_getInstance_5();
    this.uri_1 = null;
    this.action_1 = null;
    this.mimeType_1 = null;
  }
  protoOf(Builder_1).setUri_hbbmd5_k$ = function (uri) {
    this.uri_1 = uri;
    return this;
  };
  protoOf(Builder_1).setAction_fb866a_k$ = function (action) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(action) > 0)) {
      // Inline function 'androidx.navigation.Builder.setAction.<anonymous>' call
      var message = 'The NavDeepLinkRequest cannot have an empty action.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.action_1 = action;
    return this;
  };
  protoOf(Builder_1).setMimeType_8xoas6_k$ = function (mimeType) {
    // Inline function 'kotlin.text.matches' call
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^[-\\w*.]+/[-\\w+*.]+$';
    var mimeTypeMatcher = Regex_init_$Create$(this_0).matches_evli6i_k$(mimeType);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!mimeTypeMatcher) {
      // Inline function 'androidx.navigation.Builder.setMimeType.<anonymous>' call
      var message = 'The given mimeType ' + mimeType + ' does not match to required "type/subtype" format';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.mimeType_1 = mimeType;
    return this;
  };
  protoOf(Builder_1).build_1k0s4u_k$ = function () {
    return new NavDeepLinkRequest(this.uri_1, this.action_1, this.mimeType_1);
  };
  function NavDeepLinkRequest(uri, action, mimeType) {
    this.uri_1 = uri;
    this.action_1 = action;
    this.mimeType_1 = mimeType;
  }
  protoOf(NavDeepLinkRequest).get_uri_18iuil_k$ = function () {
    return this.uri_1;
  };
  protoOf(NavDeepLinkRequest).get_action_avldmn_k$ = function () {
    return this.action_1;
  };
  protoOf(NavDeepLinkRequest).get_mimeType_g7ccbb_k$ = function () {
    return this.mimeType_1;
  };
  protoOf(NavDeepLinkRequest).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_22ad7x_k$('NavDeepLinkRequest');
    sb.append_22ad7x_k$('{');
    if (!(this.get_uri_18iuil_k$() == null)) {
      sb.append_22ad7x_k$(' uri=');
      sb.append_22ad7x_k$(toString_0(this.get_uri_18iuil_k$()));
    }
    if (!(this.get_action_avldmn_k$() == null)) {
      sb.append_22ad7x_k$(' action=');
      sb.append_22ad7x_k$(this.get_action_avldmn_k$());
    }
    if (!(this.get_mimeType_g7ccbb_k$() == null)) {
      sb.append_22ad7x_k$(' mimetype=');
      sb.append_22ad7x_k$(this.get_mimeType_g7ccbb_k$());
    }
    sb.append_22ad7x_k$(' }');
    return sb.toString();
  };
  function _get_isExactDeepLink__kubas6($this) {
    return $this.isExactDeepLink_1;
  }
  function NavDestination$Companion$_get_hierarchy_$lambda_vny2w0(it) {
    return it.parent_1;
  }
  function DeepLinkMatch(destination, matchingArgs, isExactDeepLink) {
    this.destination_1 = destination;
    this.matchingArgs_1 = matchingArgs;
    this.isExactDeepLink_1 = isExactDeepLink;
  }
  protoOf(DeepLinkMatch).get_destination_9r3c63_k$ = function () {
    return this.destination_1;
  };
  protoOf(DeepLinkMatch).get_matchingArgs_vawzb7_k$ = function () {
    return this.matchingArgs_1;
  };
  protoOf(DeepLinkMatch).compareTo_mwbiu3_k$ = function (other) {
    if (this.isExactDeepLink_1 && !other.isExactDeepLink_1) {
      return 1;
    } else if (!this.isExactDeepLink_1 && other.isExactDeepLink_1) {
      return -1;
    }
    if (!(this.matchingArgs_1 == null) && other.matchingArgs_1 == null) {
      return 1;
    } else if (this.matchingArgs_1 == null && !(other.matchingArgs_1 == null)) {
      return -1;
    }
    if (!(this.matchingArgs_1 == null)) {
      var sizeDifference = this.matchingArgs_1.size_23och_k$() - ensureNotNull(other.matchingArgs_1).size_23och_k$() | 0;
      if (sizeDifference > 0) {
        return 1;
      } else if (sizeDifference < 0) {
        return -1;
      }
    }
    return 0;
  };
  protoOf(DeepLinkMatch).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_mwbiu3_k$(other instanceof DeepLinkMatch ? other : THROW_CCE());
  };
  protoOf(DeepLinkMatch).hasMatchingArgs_l2vfc2_k$ = function (arguments_0) {
    if (arguments_0 == null || this.matchingArgs_1 == null)
      return false;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.matchingArgs_1.keySet_irk8e5_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.DeepLinkMatch.hasMatchingArgs.<anonymous>' call
      if (!arguments_0.containsKey_1fhnt3_k$(element))
        return false;
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.destination_1._arguments_1;
      var tmp0_safe_receiver = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).get_wei43m_k$(element);
      var type = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_type_wovaf7_k$();
      var matchingArgValue = type == null ? null : type.get_jen0mr_k$(this.matchingArgs_1, ensureNotNull(element));
      var entryArgValue = type == null ? null : type.get_jen0mr_k$(arguments_0, ensureNotNull(element));
      if ((type == null ? null : type.valueEquals_sywqj2_k$(matchingArgValue, entryArgValue)) === false) {
        return false;
      }
    }
    return true;
  };
  function _get_deepLinks__jexxhg($this) {
    return $this.deepLinks_1;
  }
  function _set__arguments__nr3nvk($this, _set____db54di) {
    $this._arguments_1 = _set____db54di;
  }
  function _get__arguments__8ov2qc($this) {
    return $this._arguments_1;
  }
  function NavDestination_init_$Init$(navigator, $this) {
    NavDestination.call($this, navigator.get_name_75finm_k$());
    return $this;
  }
  function NavDestination_init_$Create$(navigator) {
    return NavDestination_init_$Init$(navigator, objectCreate(protoOf(NavDestination)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).getDisplayName_ut2bi7_k$ = function (id) {
    return '0x' + toString_1(id, 16);
  };
  protoOf(Companion_3).createRoute_kxyyqi_k$ = function (route) {
    return !(route == null) ? 'multiplatform-app://androidx.navigation/' + route : '';
  };
  protoOf(Companion_3).get_hierarchy_lptggy_k$ = function (_this__u8e3s4) {
    return generateSequence(_this__u8e3s4, NavDestination$Companion$_get_hierarchy_$lambda_vny2w0);
  };
  protoOf(Companion_3).hasRoute_gpb9bc_k$ = function (_this__u8e3s4, route) {
    return generateHashCode(serializer(route)) === _this__u8e3s4.id_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function NavDestination$addDeepLink$lambda($navDeepLink) {
    return function (key) {
      return !$navDeepLink.get_argumentsNames_afppnd_k$().contains_aljjnj_k$(key);
    };
  }
  function NavDestination(navigatorName) {
    Companion_getInstance_6();
    this.navigatorName_1 = navigatorName;
    this.parent_1 = null;
    this.label_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.deepLinks_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0._arguments_1 = LinkedHashMap_init_$Create$();
    this.id_1 = 0;
    this.route_1 = null;
  }
  protoOf(NavDestination).get_navigatorName_2u2qav_k$ = function () {
    return this.navigatorName_1;
  };
  protoOf(NavDestination).set_parent_tbcc6z_k$ = function (_set____db54di) {
    this.parent_1 = _set____db54di;
  };
  protoOf(NavDestination).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(NavDestination).set_label_o2t6i7_k$ = function (_set____db54di) {
    this.label_1 = _set____db54di;
  };
  protoOf(NavDestination).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(NavDestination).get_arguments_p5ddub_k$ = function () {
    return toMap(this._arguments_1);
  };
  protoOf(NavDestination).set_id_kpjn9s_k$ = function (_set____db54di) {
    this.id_1 = _set____db54di;
  };
  protoOf(NavDestination).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavDestination).set_route_5utmi3_k$ = function (route) {
    if (route == null) {
      this.id_1 = 0;
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isBlank(route)) {
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        var message = 'Cannot have an empty route';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var internalRoute = Companion_getInstance_6().createRoute_kxyyqi_k$(route);
      this.id_1 = getStringHashCode(internalRoute);
      this.addDeepLink_oo45tv_k$(internalRoute);
    }
    // Inline function 'kotlin.collections.remove' call
    var this_0 = this.deepLinks_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.deepLinks_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        if (element.get_uriPattern_e307il_k$() === Companion_getInstance_6().createRoute_kxyyqi_k$(this.route_1)) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var element_0 = tmp$ret$3;
    (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).remove_cedx0m_k$(element_0);
    this.route_1 = route;
  };
  protoOf(NavDestination).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  protoOf(NavDestination).get_displayName_sscnb0_k$ = function () {
    return this.navigatorName_1;
  };
  protoOf(NavDestination).hasDeepLink_tg53mr_k$ = function (deepLink) {
    return this.hasDeepLink_mqmu15_k$(new NavDeepLinkRequest(deepLink, null, null));
  };
  protoOf(NavDestination).hasDeepLink_mqmu15_k$ = function (deepLinkRequest) {
    return !(this.matchDeepLink_ipr7ck_k$(deepLinkRequest) == null);
  };
  protoOf(NavDestination).addDeepLink_oo45tv_k$ = function (uriPattern) {
    this.addDeepLink_t1mmtz_k$(Builder_init_$Create$().setUriPattern_p4evnw_k$(uriPattern).build_1k0s4u_k$());
  };
  protoOf(NavDestination).addDeepLink_t1mmtz_k$ = function (navDeepLink) {
    var tmp = this._arguments_1;
    var missingRequiredArguments_0 = missingRequiredArguments(tmp, NavDestination$addDeepLink$lambda(navDeepLink));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!missingRequiredArguments_0.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.navigation.NavDestination.addDeepLink.<anonymous>' call
      var message = 'Deep link ' + navDeepLink.get_uriPattern_e307il_k$() + " can't be used to open destination " + this.toString() + '.\n' + ('Following required arguments are missing: ' + toString(missingRequiredArguments_0));
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.deepLinks_1.add_utx5q5_k$(navDeepLink);
  };
  protoOf(NavDestination).matchDeepLink_pg8xpr_k$ = function (route) {
    var request = Companion_getInstance_5().fromUri_usevr5_k$(UriUtils_getInstance().parse_pc1q8p_k$(Companion_getInstance_6().createRoute_kxyyqi_k$(route))).build_1k0s4u_k$();
    var tmp;
    if (this instanceof NavGraph) {
      tmp = this.matchDeepLinkComprehensive_x7qz1m_k$(request, false, false, this);
    } else {
      tmp = this.matchDeepLink_ipr7ck_k$(request);
    }
    var matchingDeepLink = tmp;
    return matchingDeepLink;
  };
  protoOf(NavDestination).matchDeepLink_ipr7ck_k$ = function (navDeepLinkRequest) {
    if (this.deepLinks_1.isEmpty_y1axqb_k$()) {
      return null;
    }
    var bestMatch = null;
    var tmp0_iterator = this.deepLinks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var deepLink = tmp0_iterator.next_20eer_k$();
      var uri = navDeepLinkRequest.get_uri_18iuil_k$();
      var tmp;
      if (!(uri == null)) {
        tmp = deepLink.getMatchingArguments_frzh00_k$(uri, this._arguments_1);
      } else {
        tmp = null;
      }
      var matchingArguments = tmp;
      if (!(matchingArguments == null)) {
        var newMatch = new DeepLinkMatch(this, matchingArguments, deepLink.get_isExactDeepLink_7vjg2_k$());
        if (bestMatch == null || newMatch.compareTo_mwbiu3_k$(bestMatch) > 0) {
          bestMatch = newMatch;
        }
      }
    }
    return bestMatch;
  };
  protoOf(NavDestination).buildDeepLinkDestinations_61tsty_k$ = function (previousDestination) {
    var hierarchy = ArrayDeque_init_$Create$();
    var current = this;
    $l$loop_0: do {
      var parent = ensureNotNull(current).parent_1;
      var tmp;
      if (!((previousDestination == null ? null : previousDestination.parent_1) == null)) {
        tmp = ensureNotNull(previousDestination.parent_1).findNode_u34ja5_k$(current.id_1) === current;
      } else {
        tmp = false;
      }
      if (tmp) {
        hierarchy.addFirst_7io6zl_k$(current);
        break $l$loop_0;
      }
      if (parent == null || !(parent.get_startDestinationId_mcy68g_k$() === current.id_1)) {
        hierarchy.addFirst_7io6zl_k$(current);
      }
      if (equals(parent, previousDestination)) {
        break $l$loop_0;
      }
      current = parent;
    }
     while (!(current == null));
    return toList_1(hierarchy);
  };
  protoOf(NavDestination).buildDeepLinkDestinations$default_1z6r75_k$ = function (previousDestination, $super) {
    previousDestination = previousDestination === VOID ? null : previousDestination;
    return $super === VOID ? this.buildDeepLinkDestinations_61tsty_k$(previousDestination) : $super.buildDeepLinkDestinations_61tsty_k$.call(this, previousDestination);
  };
  protoOf(NavDestination).hasRoute_h24xfv_k$ = function (route, arguments_0) {
    if (this.route_1 === route)
      return true;
    var matchingDeepLink = this.matchDeepLink_pg8xpr_k$(route);
    if (!this.equals(matchingDeepLink == null ? null : matchingDeepLink.destination_1))
      return false;
    return matchingDeepLink.hasMatchingArgs_l2vfc2_k$(arguments_0);
  };
  protoOf(NavDestination).addArgument_zavm39_k$ = function (argumentName, argument) {
    // Inline function 'kotlin.collections.set' call
    this._arguments_1.put_4fpzoq_k$(argumentName, argument);
  };
  protoOf(NavDestination).removeArgument_fvqyjb_k$ = function (argumentName) {
    this._arguments_1.remove_gppy8k_k$(argumentName);
  };
  protoOf(NavDestination).addInDefaultArgs_5c4oma_k$ = function (args) {
    if (args == null && this._arguments_1.isEmpty_y1axqb_k$()) {
      return null;
    }
    var defaultArgs = Bundle_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this._arguments_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.get_value_j01efc_k$();
      value.putDefaultValue_uymh5e_k$(key, defaultArgs);
    }
    if (!(args == null)) {
      defaultArgs.putAll_w596ud_k$(args);
      // Inline function 'kotlin.collections.iterator' call
      var tmp2_iterator = this._arguments_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp2_iterator.hasNext_bitz1p_k$()) {
        var tmp3_loop_parameter = tmp2_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = tmp3_loop_parameter.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value_0 = tmp3_loop_parameter.get_value_j01efc_k$();
        if (!value_0.get_isDefaultValueUnknown_skf517_k$()) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!value_0.verify_efceyk_k$(key_0, defaultArgs)) {
            // Inline function 'androidx.navigation.NavDestination.addInDefaultArgs.<anonymous>' call
            var message = "Wrong argument type for '" + key_0 + "' in argument bundle. " + value_0.get_type_wovaf7_k$().get_name_woqyms_k$() + ' ' + 'expected.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
        }
      }
    }
    return defaultArgs;
  };
  protoOf(NavDestination).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_22ad7x_k$(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
    // Inline function 'kotlin.text.isNullOrBlank' call
    var this_0 = this.route_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null || isBlank(this_0))) {
      sb.append_22ad7x_k$(' route=');
      sb.append_22ad7x_k$(this.route_1);
    }
    if (!(this.label_1 == null)) {
      sb.append_22ad7x_k$(' label=');
      sb.append_jgojdo_k$(this.label_1);
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
    var equalDeepLinks = equals(this.deepLinks_1, other.deepLinks_1);
    var tmp_0;
    if (this._arguments_1.get_size_woubt6_k$() === other._arguments_1.get_size_woubt6_k$()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var tmp0_iterator = asSequence(this._arguments_1).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'androidx.navigation.NavDestination.equals.<anonymous>' call
          if (!(other._arguments_1.containsKey_aw81wo_k$(element.get_key_18j28a_k$()) && equals(other._arguments_1.get_wei43m_k$(element.get_key_18j28a_k$()), element.get_value_j01efc_k$()))) {
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
    return this.id_1 === other.id_1 && this.route_1 == other.route_1 && equalDeepLinks && equalArguments;
  };
  protoOf(NavDestination).hashCode = function () {
    var result = this.id_1;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.route_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.deepLinks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      var tmp_0 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element.get_uriPattern_e307il_k$();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
      var tmp_1 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_1 = element.get_action_avldmn_k$();
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
      result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
      var tmp_2 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = element.get_mimeType_g7ccbb_k$();
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this._arguments_1.get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      result = imul(31, result) + getStringHashCode(element_0) | 0;
      var tmp_3 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = this._arguments_1.get_wei43m_k$(element_0);
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      result = tmp_3 + (tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3) | 0;
    }
    return result;
  };
  function NavDestinationBuilder_init_$Init$(navigator, route, $this) {
    NavDestinationBuilder.call($this, navigator, -1, route);
    return $this;
  }
  function NavDestinationBuilder_init_$Create$(navigator, route) {
    return NavDestinationBuilder_init_$Init$(navigator, route, objectCreate(protoOf(NavDestinationBuilder)));
  }
  function NavDestinationBuilder_init_$Init$_0(navigator, route, typeMap, $this) {
    var tmp1_safe_receiver = route == null ? null : serializer(route);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : generateHashCode(tmp1_safe_receiver);
    var tmp = tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
    var tmp4_safe_receiver = route == null ? null : serializer(route);
    NavDestinationBuilder.call($this, navigator, tmp, tmp4_safe_receiver == null ? null : generateRoutePattern(tmp4_safe_receiver, typeMap));
    if (route == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavDestinationBuilder.<init>.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = generateNavArguments(serializer(route), typeMap).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavDestinationBuilder.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var this_0 = $this.arguments_1;
        var key = element.get_name_woqyms_k$();
        var value = element.get_argument_cxpwg6_k$();
        this_0.put_4fpzoq_k$(key, value);
      }
    }
    $this.typeMap_1 = typeMap;
    return $this;
  }
  function NavDestinationBuilder_init_$Create$_0(navigator, route, typeMap) {
    return NavDestinationBuilder_init_$Init$_0(navigator, route, typeMap, objectCreate(protoOf(NavDestinationBuilder)));
  }
  function _set_typeMap__lfwid9_0($this, _set____db54di) {
    $this.typeMap_1 = _set____db54di;
  }
  function _get_typeMap__nyz98v_1($this) {
    var tmp = $this.typeMap_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('typeMap');
    }
  }
  function _set_arguments__t1huc1($this, _set____db54di) {
    $this.arguments_1 = _set____db54di;
  }
  function _get_arguments__9cm2j($this) {
    return $this.arguments_1;
  }
  function _set_deepLinks__9vwix4($this, _set____db54di) {
    $this.deepLinks_1 = _set____db54di;
  }
  function _get_deepLinks__jexxhg_0($this) {
    return $this.deepLinks_1;
  }
  function NavDestinationBuilder(navigator, id, route) {
    this.navigator_1 = navigator;
    this.id_1 = id;
    this.route_1 = route;
    this.label_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.arguments_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.deepLinks_1 = ArrayList_init_$Create$();
  }
  protoOf(NavDestinationBuilder).get_navigator_kyqf1q_k$ = function () {
    return this.navigator_1;
  };
  protoOf(NavDestinationBuilder).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavDestinationBuilder).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  protoOf(NavDestinationBuilder).set_label_o2t6i7_k$ = function (_set____db54di) {
    this.label_1 = _set____db54di;
  };
  protoOf(NavDestinationBuilder).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(NavDestinationBuilder).argument_dg962m_k$ = function (name, argumentBuilder) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.arguments_1;
    // Inline function 'kotlin.apply' call
    var this_1 = new NavArgumentBuilder();
    // Inline function 'kotlin.contracts.contract' call
    argumentBuilder(this_1);
    var value = this_1.build_1k0s4u_k$();
    this_0.put_4fpzoq_k$(name, value);
  };
  protoOf(NavDestinationBuilder).argument_wnm9au_k$ = function (name, argument) {
    // Inline function 'kotlin.collections.set' call
    this.arguments_1.put_4fpzoq_k$(name, argument);
  };
  protoOf(NavDestinationBuilder).deepLink_17ytb8_k$ = function (uriPattern) {
    this.deepLinks_1.add_utx5q5_k$(NavDeepLink_init_$Create$(uriPattern));
  };
  protoOf(NavDestinationBuilder).deepLink_li2fll_k$ = function (navDeepLink) {
    var tmp = this.deepLinks_1;
    // Inline function 'kotlin.apply' call
    var this_0 = NavDeepLinkDslBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    navDeepLink(this_0);
    tmp.add_utx5q5_k$(this_0.build_e29v9o_k$());
  };
  protoOf(NavDestinationBuilder).deepLink_9r63ou_k$ = function (basePath, route, navDeepLink_0) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.typeMap_1 == null)) {
      // Inline function 'androidx.navigation.NavDestinationBuilder.deepLink.<anonymous>' call
      var message = 'Cannot add deeplink from KClass [' + toString(route) + ']. Use the NavDestinationBuilder ' + 'constructor that takes a KClass with the same arguments.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var deepLinkArgs = generateNavArguments(serializer(route), _get_typeMap__nyz98v_1(this));
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = deepLinkArgs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDestinationBuilder.deepLink.<anonymous>' call
      var arg = this.arguments_1.get_wei43m_k$(element.get_name_woqyms_k$());
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(!(arg == null) && equals(arg.get_type_wovaf7_k$(), element.get_argument_cxpwg6_k$().get_type_wovaf7_k$()))) {
        // Inline function 'androidx.navigation.NavDestinationBuilder.deepLink.<anonymous>.<anonymous>' call
        var message_0 = 'Cannot add deeplink from KClass [' + toString(route) + ']. DeepLink contains unknown argument ' + ('[' + element.get_name_woqyms_k$() + "]. Ensure deeplink arguments matches the destination's ") + 'route from KClass';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    this.deepLink_31mcg8_k$(navDeepLink(basePath, route, _get_typeMap__nyz98v_1(this), navDeepLink_0));
  };
  protoOf(NavDestinationBuilder).deepLink_31mcg8_k$ = function (navDeepLink) {
    this.deepLinks_1.add_utx5q5_k$(navDeepLink);
  };
  protoOf(NavDestinationBuilder).instantiateDestination_eu87cs_k$ = function () {
    return this.navigator_1.createDestination_b4lkem_k$();
  };
  protoOf(NavDestinationBuilder).build_1k0s4u_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.instantiateDestination_eu87cs_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>' call
    this_0.set_label_o2t6i7_k$(this.label_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.arguments_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var argument = element.get_value_j01efc_k$();
      this_0.addArgument_zavm39_k$(name, argument);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.deepLinks_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      this_0.addDeepLink_t1mmtz_k$(element_0);
    }
    if (!(this.route_1 == null)) {
      this_0.set_route_5utmi3_k$(this.route_1);
    }
    if (!(this.id_1 === -1)) {
      this_0.set_id_kpjn9s_k$(this.id_1);
    }
    return this_0;
  };
  function NavGraph$Companion$childHierarchy$lambda(it) {
    var tmp;
    if (it instanceof NavGraph) {
      tmp = it.findNode_u34ja5_k$(it.get_startDestinationId_mcy68g_k$());
    } else {
      tmp = null;
    }
    return tmp;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function _set_wentToNext__ibduad($this, _set____db54di) {
    $this.wentToNext_1 = _set____db54di;
  }
  function _get_wentToNext__395955($this) {
    return $this.wentToNext_1;
  }
  function _set_startDestId__klly86($this, _set____db54di) {
    $this.startDestId_1 = _set____db54di;
  }
  function _get_startDestId__k53xf2($this) {
    return $this.startDestId_1;
  }
  function _set_startDestIdName__6vzk8r($this, _set____db54di) {
    $this.startDestIdName_1 = _set____db54di;
  }
  function _get_startDestIdName__gzprrb($this) {
    return $this.startDestIdName_1;
  }
  function _set_startDestinationId__488ru8($this, startDestId) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(startDestId === $this.get_id_kntnx8_k$())) {
      // Inline function 'androidx.navigation.NavGraph.<set-startDestinationId>.<anonymous>' call
      var message = 'Start destination ' + startDestId + ' cannot use the same id as the graph ' + $this.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!($this.startDestinationRoute_1 == null)) {
      _set_startDestinationRoute__ih5gmw($this, null);
    }
    $this.startDestId_1 = startDestId;
    $this.startDestIdName_1 = null;
  }
  function _set_startDestinationRoute__ih5gmw($this, startDestRoute) {
    var tmp = $this;
    var tmp_0;
    if (startDestRoute == null) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(startDestRoute == $this.get_route_iy3cio_k$())) {
        // Inline function 'androidx.navigation.NavGraph.<set-startDestinationRoute>.<anonymous>' call
        var message = 'Start destination ' + startDestRoute + ' cannot use the same route as the graph ' + $this.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isBlank(startDestRoute)) {
        // Inline function 'androidx.navigation.NavGraph.<set-startDestinationRoute>.<anonymous>' call
        var message_0 = 'Cannot have an empty start destination route';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var internalRoute = Companion_getInstance_6().createRoute_kxyyqi_k$(startDestRoute);
      tmp_0 = getStringHashCode(internalRoute);
    }
    tmp.startDestId_1 = tmp_0;
    $this.startDestinationRoute_1 = startDestRoute;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).findStartDestination_enre8g_k$ = function (_this__u8e3s4) {
    return last(this.childHierarchy_uxwzx8_k$(_this__u8e3s4));
  };
  protoOf(Companion_4).childHierarchy_uxwzx8_k$ = function (_this__u8e3s4) {
    var tmp = _this__u8e3s4 instanceof NavDestination ? _this__u8e3s4 : THROW_CCE();
    return generateSequence(tmp, NavGraph$Companion$childHierarchy$lambda);
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function NavGraph$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.index_1 = -1;
    this.wentToNext_1 = false;
  }
  protoOf(NavGraph$iterator$1).hasNext_bitz1p_k$ = function () {
    return (this.index_1 + 1 | 0) < this.this$0__1.nodes_1.size_23och_k$();
  };
  protoOf(NavGraph$iterator$1).next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.wentToNext_1 = true;
    this.index_1 = this.index_1 + 1 | 0;
    return this.this$0__1.nodes_1.valueAt_sbdne4_k$(this.index_1);
  };
  protoOf(NavGraph$iterator$1).remove_ldkf9o_k$ = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.wentToNext_1) {
      // Inline function 'androidx.navigation.<no name provided>.remove.<anonymous>' call
      var message = 'You must call next() before you can remove an element';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = this.this$0__1.nodes_1;
    $this$with.valueAt_sbdne4_k$(this.index_1).set_parent_tbcc6z_k$(null);
    $this$with.removeAt_rql1ap_k$(this.index_1);
    this.index_1 = this.index_1 - 1 | 0;
    this.wentToNext_1 = false;
  };
  function NavGraph$setStartDestination$lambda($startDestRoute) {
    return function (startDestination) {
      // Inline function 'kotlin.collections.mapValues' call
      var this_0 = startDestination.get_arguments_p5ddub_k$();
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.get_size_woubt6_k$()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp = element.get_key_18j28a_k$();
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>.<anonymous>' call
        var tmp$ret$1 = element.get_value_j01efc_k$().get_type_wovaf7_k$();
        destination.put_4fpzoq_k$(tmp, tmp$ret$1);
      }
      var args = destination;
      return generateRouteWithArgs($startDestRoute, args);
    };
  }
  function NavGraph(navGraphNavigator) {
    Companion_getInstance_7();
    NavDestination_init_$Init$(navGraphNavigator, this);
    this.nodes_1 = new SparseArrayCompat();
    this.startDestId_1 = 0;
    this.startDestIdName_1 = null;
    this.startDestinationRoute_1 = null;
  }
  protoOf(NavGraph).get_nodes_ivvt6w_k$ = function () {
    return this.nodes_1;
  };
  protoOf(NavGraph).matchDeepLinkComprehensive_x7qz1m_k$ = function (navDeepLinkRequest, searchChildren, searchParent, lastVisited) {
    var bestMatch = protoOf(NavDestination).matchDeepLink_ipr7ck_k$.call(this, navDeepLinkRequest);
    var tmp;
    if (searchChildren) {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
        var tmp0_safe_receiver = !element.equals(lastVisited) ? element.matchDeepLink_ipr7ck_k$(navDeepLinkRequest) : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination.add_utx5q5_k$(tmp0_safe_receiver);
        }
      }
      tmp = maxOrNull(destination);
    } else {
      tmp = null;
    }
    var bestChildMatch = tmp;
    var tmp0_safe_receiver_0 = this.get_parent_hy4reb_k$();
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
      tmp_0 = searchParent && !tmp0_safe_receiver_0.equals(lastVisited) ? tmp0_safe_receiver_0.matchDeepLinkComprehensive_x7qz1m_k$(navDeepLinkRequest, searchChildren, true, this) : null;
    }
    var bestParentMatch = tmp_0;
    return maxOrNull(listOfNotNull([bestMatch, bestChildMatch, bestParentMatch]));
  };
  protoOf(NavGraph).matchDeepLink_ipr7ck_k$ = function (navDeepLinkRequest) {
    return this.matchDeepLinkComprehensive_x7qz1m_k$(navDeepLinkRequest, true, false, this);
  };
  protoOf(NavGraph).addDestination_r87w81_k$ = function (node) {
    var id = node.get_id_kntnx8_k$();
    var innerRoute = node.get_route_iy3cio_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(id === 0) || !(innerRoute == null))) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message = 'Destinations must have an id or route.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(this.get_route_iy3cio_k$() == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(innerRoute == this.get_route_iy3cio_k$())) {
        // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
        var message_0 = 'Destination ' + node.toString() + ' cannot have the same route as graph ' + this.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === this.get_id_kntnx8_k$())) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_1 = 'Destination ' + node.toString() + ' cannot have the same id as graph ' + this.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var existingDestination = this.nodes_1.get_c1px32_k$(id);
    if (existingDestination === node) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(node.get_parent_hy4reb_k$() == null)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_2 = 'Destination already has a parent set. Call NavGraph.remove() to remove the previous parent.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    if (!(existingDestination == null)) {
      existingDestination.set_parent_tbcc6z_k$(null);
    }
    node.set_parent_tbcc6z_k$(this);
    this.nodes_1.put_ipd03f_k$(node.get_id_kntnx8_k$(), node);
  };
  protoOf(NavGraph).addDestinations_5xennl_k$ = function (nodes) {
    var tmp0_iterator = nodes.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var node = tmp0_iterator.next_20eer_k$();
      if (node == null) {
        continue $l$loop;
      }
      this.addDestination_r87w81_k$(node);
    }
  };
  protoOf(NavGraph).addDestinations_s4trha_k$ = function (nodes) {
    var inductionVariable = 0;
    var last = nodes.length;
    while (inductionVariable < last) {
      var node = nodes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.addDestination_r87w81_k$(node);
    }
  };
  protoOf(NavGraph).findNode_u34ja5_k$ = function (resId) {
    return this.findNodeComprehensive_xe6rwh_k$(resId, this, false);
  };
  protoOf(NavGraph).findNodeComprehensive_xe6rwh_k$ = function (resId, lastVisited, searchChildren) {
    var destination = this.nodes_1.get_c1px32_k$(resId);
    if (!(destination == null))
      return destination;
    if (searchChildren) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
        var tmp0_iterator = asSequence_0(valueIterator(this.nodes_1)).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'androidx.navigation.NavGraph.findNodeComprehensive.<anonymous>' call
          var tmp;
          var tmp_0;
          if (element instanceof NavGraph) {
            tmp_0 = !element.equals(lastVisited);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp = element.findNodeComprehensive_xe6rwh_k$(resId, this, true);
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
      if (!(this.get_parent_hy4reb_k$() == null) && !equals(this.get_parent_hy4reb_k$(), lastVisited)) {
        tmp_2 = ensureNotNull(this.get_parent_hy4reb_k$()).findNodeComprehensive_xe6rwh_k$(resId, this, searchChildren);
      } else {
        tmp_2 = null;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  };
  protoOf(NavGraph).findNode_dxx770_k$ = function (route) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(route == null || isBlank(route))) {
      tmp = this.findNode_viwu62_k$(route, true);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(NavGraph).findNode_ng54v5_k$ = function (route) {
    var tmp;
    if (route == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.NavGraph.findNode.<anonymous>' call
      tmp = this.findNode_u34ja5_k$(generateHashCode(serializer(getKClassFromExpression(route))));
    }
    return tmp;
  };
  protoOf(NavGraph).findNode_viwu62_k$ = function (route, searchParents) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = asSequence_0(valueIterator(this.nodes_1)).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.NavGraph.findNode.<anonymous>' call
        if (equals_0(element.get_route_iy3cio_k$(), route) || !(element.matchDeepLink_pg8xpr_k$(route) == null)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var destination = tmp$ret$1;
    return destination == null ? searchParents && !(this.get_parent_hy4reb_k$() == null) ? ensureNotNull(this.get_parent_hy4reb_k$()).findNode_dxx770_k$(route) : null : destination;
  };
  protoOf(NavGraph).iterator_jk1svi_k$ = function () {
    return new NavGraph$iterator$1(this);
  };
  protoOf(NavGraph).addAll_8jngab_k$ = function (other) {
    var iterator = other.iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var destination = iterator.next_20eer_k$();
      iterator.remove_ldkf9o_k$();
      this.addDestination_r87w81_k$(destination);
    }
  };
  protoOf(NavGraph).remove_v62bg8_k$ = function (node) {
    var index = this.nodes_1.indexOfKey_cl51du_k$(node.get_id_kntnx8_k$());
    if (index >= 0) {
      this.nodes_1.valueAt_sbdne4_k$(index).set_parent_tbcc6z_k$(null);
      this.nodes_1.removeAt_rql1ap_k$(index);
    }
  };
  protoOf(NavGraph).clear_j9egeb_k$ = function () {
    var iterator = this.iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      iterator.next_20eer_k$();
      iterator.remove_ldkf9o_k$();
    }
  };
  protoOf(NavGraph).get_displayName_sscnb0_k$ = function () {
    return !(this.get_id_kntnx8_k$() === 0) ? protoOf(NavDestination).get_displayName_sscnb0_k$.call(this) : 'the root navigation';
  };
  protoOf(NavGraph).get_startDestinationId_mcy68g_k$ = function () {
    return this.startDestId_1;
  };
  protoOf(NavGraph).setStartDestination_jx6ygq_k$ = function (startDestId) {
    _set_startDestinationId__488ru8(this, startDestId);
  };
  protoOf(NavGraph).setStartDestination_gyofmk_k$ = function (startDestRoute) {
    _set_startDestinationRoute__ih5gmw(this, startDestRoute);
  };
  protoOf(NavGraph).setStartDestination_k76nan_k$ = function (startDestRoute) {
    var tmp = serializer(getKClassFromExpression(startDestRoute));
    this.setStartDestination_ycaq6t_k$(tmp, NavGraph$setStartDestination$lambda(startDestRoute));
  };
  protoOf(NavGraph).setStartDestination_ycaq6t_k$ = function (serializer, parseRoute) {
    var id = generateHashCode(serializer);
    var startDest = this.findNode_u34ja5_k$(id);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (startDest == null) {
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>' call
        var message = 'Cannot find startDestination ' + serializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$() + ' from NavGraph. ' + 'Ensure the starting NavDestination was added with route from KClass.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    _set_startDestinationRoute__ih5gmw(this, parseRoute(startDest));
    this.startDestId_1 = id;
  };
  protoOf(NavGraph).get_startDestinationRoute_9ttmmk_k$ = function () {
    return this.startDestinationRoute_1;
  };
  protoOf(NavGraph).get_startDestDisplayName_vuqia6_k$ = function () {
    if (this.startDestIdName_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.startDestinationRoute_1;
      tmp.startDestIdName_1 = tmp0_elvis_lhs == null ? this.startDestId_1.toString() : tmp0_elvis_lhs;
    }
    return ensureNotNull(this.startDestIdName_1);
  };
  protoOf(NavGraph).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_22ad7x_k$(protoOf(NavDestination).toString.call(this));
    var tmp0_elvis_lhs = this.findNode_dxx770_k$(this.startDestinationRoute_1);
    var startDestination = tmp0_elvis_lhs == null ? this.findNode_u34ja5_k$(this.get_startDestinationId_mcy68g_k$()) : tmp0_elvis_lhs;
    sb.append_22ad7x_k$(' startDestination=');
    if (startDestination == null) {
      if (!(this.startDestinationRoute_1 == null)) {
        sb.append_22ad7x_k$(this.startDestinationRoute_1);
      } else if (!(this.startDestIdName_1 == null)) {
        sb.append_22ad7x_k$(this.startDestIdName_1);
      } else {
        sb.append_22ad7x_k$(Companion_getInstance_6().getDisplayName_ut2bi7_k$(this.startDestId_1));
      }
    } else {
      sb.append_22ad7x_k$('{');
      sb.append_22ad7x_k$(startDestination.toString());
      sb.append_22ad7x_k$('}');
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
      var tmp_3 = this.nodes_1.size_23och_k$();
      // Inline function 'androidx.collection.size' call
      tmp_2 = tmp_3 === other.nodes_1.size_23och_k$();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.get_startDestinationId_mcy68g_k$() === other.get_startDestinationId_mcy68g_k$();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var tmp0_iterator = asSequence_0(valueIterator(this.nodes_1)).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'androidx.navigation.NavGraph.equals.<anonymous>' call
          if (!element.equals(other.nodes_1.get_c1px32_k$(element.get_id_kntnx8_k$()))) {
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
    var result = this.get_startDestinationId_mcy68g_k$();
    // Inline function 'androidx.collection.forEach' call
    var this_0 = this.nodes_1;
    var inductionVariable = 0;
    var last = this_0.size_23och_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.navigation.NavGraph.hashCode.<anonymous>' call
        var key = this_0.keyAt_v5apcq_k$(index);
        var value = this_0.valueAt_sbdne4_k$(index);
        result = imul(31, result) + key | 0;
        result = imul(31, result) + value.hashCode() | 0;
      }
       while (inductionVariable < last);
    return result;
  };
  function _set_startDestinationId__488ru8_0($this, _set____db54di) {
    $this.startDestinationId_1 = _set____db54di;
  }
  function _get_startDestinationId__tpmja4($this) {
    return $this.startDestinationId_1;
  }
  function _set_startDestinationRoute__ih5gmw_0($this, _set____db54di) {
    $this.startDestinationRoute_1 = _set____db54di;
  }
  function _get_startDestinationRoute__omrt2k($this) {
    return $this.startDestinationRoute_1;
  }
  function _set_startDestinationClass__pmtyh3($this, _set____db54di) {
    $this.startDestinationClass_1 = _set____db54di;
  }
  function _get_startDestinationClass__vsgawr($this) {
    return $this.startDestinationClass_1;
  }
  function _set_startDestinationObject__g57wss($this, _set____db54di) {
    $this.startDestinationObject_1 = _set____db54di;
  }
  function _get_startDestinationObject__wmsoqo($this) {
    return $this.startDestinationObject_1;
  }
  function NavGraphBuilder_init_$Init$(provider, startDestination, route, $this) {
    // Inline function 'androidx.navigation.get' call
    var clazz = getKClass(NavGraphNavigator);
    var tmp$ret$0 = provider.getNavigator_zialjt_k$(clazz);
    NavDestinationBuilder_init_$Init$(tmp$ret$0, route, $this);
    NavGraphBuilder.call($this);
    $this.provider_1 = provider;
    $this.startDestinationRoute_1 = startDestination;
    return $this;
  }
  function NavGraphBuilder_init_$Create$(provider, startDestination, route) {
    return NavGraphBuilder_init_$Init$(provider, startDestination, route, objectCreate(protoOf(NavGraphBuilder)));
  }
  function NavGraphBuilder_init_$Init$_0(provider, startDestination, route, typeMap, $this) {
    // Inline function 'androidx.navigation.get' call
    var clazz = getKClass(NavGraphNavigator);
    var tmp$ret$0 = provider.getNavigator_zialjt_k$(clazz);
    NavDestinationBuilder_init_$Init$_0(tmp$ret$0, route, typeMap, $this);
    NavGraphBuilder.call($this);
    $this.provider_1 = provider;
    $this.startDestinationClass_1 = startDestination;
    return $this;
  }
  function NavGraphBuilder_init_$Create$_0(provider, startDestination, route, typeMap) {
    return NavGraphBuilder_init_$Init$_0(provider, startDestination, route, typeMap, objectCreate(protoOf(NavGraphBuilder)));
  }
  function NavGraphBuilder_init_$Init$_1(provider, startDestination, route, typeMap, $this) {
    // Inline function 'androidx.navigation.get' call
    var clazz = getKClass(NavGraphNavigator);
    var tmp$ret$0 = provider.getNavigator_zialjt_k$(clazz);
    NavDestinationBuilder_init_$Init$_0(tmp$ret$0, route, typeMap, $this);
    NavGraphBuilder.call($this);
    $this.provider_1 = provider;
    $this.startDestinationObject_1 = startDestination;
    return $this;
  }
  function NavGraphBuilder_init_$Create$_1(provider, startDestination, route, typeMap) {
    return NavGraphBuilder_init_$Init$_1(provider, startDestination, route, typeMap, objectCreate(protoOf(NavGraphBuilder)));
  }
  function _get_destinations__rmgg6($this) {
    return $this.destinations_1;
  }
  function NavGraphBuilder$build$lambda(it) {
    return ensureNotNull(it.get_route_iy3cio_k$());
  }
  protoOf(NavGraphBuilder).get_provider_mw8vcq_k$ = function () {
    return this.provider_1;
  };
  protoOf(NavGraphBuilder).destination_z5tf93_k$ = function (navDestination) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.destinations_1;
    var element = navDestination.build_1k0s4u_k$();
    this_0.add_utx5q5_k$(element);
  };
  protoOf(NavGraphBuilder).unaryPlus_xn1y0b_k$ = function (_this__u8e3s4) {
    this.addDestination_r87w81_k$(_this__u8e3s4);
  };
  protoOf(NavGraphBuilder).addDestination_r87w81_k$ = function (destination) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.destinations_1.add_utx5q5_k$(destination);
  };
  protoOf(NavGraphBuilder).build_1k0s4u_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(NavDestinationBuilder).build_1k0s4u_k$.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavGraphBuilder.build.<anonymous>' call
    this_0.addDestinations_5xennl_k$(this.destinations_1);
    if (this.startDestinationId_1 === 0 && this.startDestinationRoute_1 == null && this.startDestinationClass_1 == null && this.startDestinationObject_1 == null) {
      if (!(this.get_route_iy3cio_k$() == null)) {
        throw IllegalStateException_init_$Create$('You must set a start destination route');
      } else {
        throw IllegalStateException_init_$Create$('You must set a start destination id');
      }
    }
    if (!(this.startDestinationRoute_1 == null)) {
      this_0.setStartDestination_gyofmk_k$(ensureNotNull(this.startDestinationRoute_1));
    } else if (!(this.startDestinationClass_1 == null)) {
      var tmp = serializer(ensureNotNull(this.startDestinationClass_1));
      this_0.setStartDestination_ycaq6t_k$(tmp, NavGraphBuilder$build$lambda);
    } else if (!(this.startDestinationObject_1 == null)) {
      this_0.setStartDestination_k76nan_k$(ensureNotNull(this.startDestinationObject_1));
    } else {
      this_0.setStartDestination_jx6ygq_k$(this.startDestinationId_1);
    }
    return this_0;
  };
  function NavGraphBuilder() {
    this.startDestinationId_1 = 0;
    this.startDestinationRoute_1 = null;
    this.startDestinationClass_1 = null;
    this.startDestinationObject_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.destinations_1 = ArrayList_init_$Create$();
  }
  function _get_navigatorProvider__9bqck7($this) {
    return $this.navigatorProvider_1;
  }
  function navigate($this, entry, navOptions, navigatorExtras) {
    var tmp = entry.get_destination_9r3c63_k$();
    var destination = tmp instanceof NavGraph ? tmp : THROW_CCE();
    var args = entry.get_arguments_p5ddub_k$();
    var startId = destination.get_startDestinationId_mcy68g_k$();
    var startRoute = destination.get_startDestinationRoute_9ttmmk_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(startId === 0) || !(startRoute == null))) {
      // Inline function 'androidx.navigation.NavGraphNavigator.navigate.<anonymous>' call
      var message = 'no start destination defined via app:startDestination for ' + destination.get_displayName_sscnb0_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_0;
    if (!(startRoute == null)) {
      tmp_0 = destination.findNode_viwu62_k$(startRoute, false);
    } else {
      tmp_0 = destination.get_nodes_ivvt6w_k$().get_c1px32_k$(startId);
    }
    var startDestination = tmp_0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (startDestination == null) {
        var dest = destination.get_startDestDisplayName_vuqia6_k$();
        throw IllegalArgumentException_init_$Create$('navigation destination ' + dest + ' is not a direct child of this NavGraph');
      } else {
        break $l$block;
      }
    }
    if (!(startRoute == null) && !(startRoute == startDestination.get_route_iy3cio_k$())) {
      var tmp0_safe_receiver = startDestination.matchDeepLink_pg8xpr_k$(startRoute);
      var matchingArgs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_matchingArgs_vawzb7_k$();
      if (!(matchingArgs == null) && !matchingArgs.isEmpty_y1axqb_k$()) {
        var bundle = Bundle_init_$Create$();
        bundle.putAll_w596ud_k$(matchingArgs);
        var tmp1_safe_receiver = args;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          bundle.putAll_w596ud_k$(tmp1_safe_receiver);
        }
        args = bundle;
      }
    }
    var navigator = $this.navigatorProvider_1.getNavigator_ip43px_k$(startDestination.get_navigatorName_2u2qav_k$());
    var startDestinationEntry = $this.get_state_iypx7s_k$().createBackStackEntry_vwwajp_k$(startDestination, startDestination.addInDefaultArgs_5c4oma_k$(args));
    navigator.navigate_rlymw1_k$(listOf(startDestinationEntry), navOptions, navigatorExtras);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.NAME_1 = 'navigation';
  }
  protoOf(Companion_5).get_NAME_9mhwwe_k$ = function () {
    return this.NAME_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function NavGraphNavigator(navigatorProvider) {
    Companion_getInstance_8();
    Navigator_init_$Init$_0('navigation', this);
    this.navigatorProvider_1 = navigatorProvider;
  }
  protoOf(NavGraphNavigator).get_backStack_ueublk_k$ = function () {
    return this.get_state_iypx7s_k$().get_backStack_ueublk_k$();
  };
  protoOf(NavGraphNavigator).createDestination_b4lkem_k$ = function () {
    return new NavGraph(this);
  };
  protoOf(NavGraphNavigator).navigate_rlymw1_k$ = function (entries, navOptions, navigatorExtras) {
    var tmp0_iterator = entries.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var entry = tmp0_iterator.next_20eer_k$();
      navigate(this, entry, navOptions, navigatorExtras);
    }
  };
  function _set_singleTop__z7lv20($this, _set____db54di) {
    $this.singleTop_1 = _set____db54di;
  }
  function _get_singleTop__6inqik($this) {
    return $this.singleTop_1;
  }
  function _set_restoreState__whuyuk($this, _set____db54di) {
    $this.restoreState_1 = _set____db54di;
  }
  function _get_restoreState__gy48ag($this) {
    return $this.restoreState_1;
  }
  function _set_popUpToId__fuw6cj($this, _set____db54di) {
    $this.popUpToId_1 = _set____db54di;
  }
  function _get_popUpToId__pvdf81($this) {
    return $this.popUpToId_1;
  }
  function _set_popUpToRoute__8d6451($this, _set____db54di) {
    $this.popUpToRoute_1 = _set____db54di;
  }
  function _get_popUpToRoute__nwwup5($this) {
    return $this.popUpToRoute_1;
  }
  function _set_popUpToRouteClass__simiup($this, _set____db54di) {
    $this.popUpToRouteClass_1 = _set____db54di;
  }
  function _get_popUpToRouteClass__ksomu3($this) {
    return $this.popUpToRouteClass_1;
  }
  function _set_popUpToRouteObject__279ky2($this, _set____db54di) {
    $this.popUpToRouteObject_1 = _set____db54di;
  }
  function _get_popUpToRouteObject__yvz5wq($this) {
    return $this.popUpToRouteObject_1;
  }
  function _set_popUpToInclusive__cww0r2($this, _set____db54di) {
    $this.popUpToInclusive_1 = _set____db54di;
  }
  function _get_popUpToInclusive__g688bq($this) {
    return $this.popUpToInclusive_1;
  }
  function _set_popUpToSaveState__9cphpy($this, _set____db54di) {
    $this.popUpToSaveState_1 = _set____db54di;
  }
  function _get_popUpToSaveState__jqercu($this) {
    return $this.popUpToSaveState_1;
  }
  function _get_singleTop__6inqik_0($this) {
    return $this.singleTop_1;
  }
  function _get_restoreState__gy48ag_0($this) {
    return $this.restoreState_1;
  }
  function _get_popUpToInclusive__g688bq_0($this) {
    return $this.popUpToInclusive_1;
  }
  function _get_popUpToSaveState__jqercu_0($this) {
    return $this.popUpToSaveState_1;
  }
  function _set_popUpToRoute__8d6451_0($this, _set____db54di) {
    $this.popUpToRoute_1 = _set____db54di;
  }
  function _set_popUpToRouteClass__simiup_0($this, _set____db54di) {
    $this.popUpToRouteClass_1 = _set____db54di;
  }
  function _set_popUpToRouteObject__279ky2_0($this, _set____db54di) {
    $this.popUpToRouteObject_1 = _set____db54di;
  }
  function NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, getStringHashCode(Companion_getInstance_6().createRoute_kxyyqi_k$(popUpToRoute)), popUpToInclusive, popUpToSaveState);
    $this.popUpToRoute_1 = popUpToRoute;
    return $this;
  }
  function NavOptions_init_$Create$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(ensureNotNull(popUpToRouteClass))), popUpToInclusive, popUpToSaveState);
    $this.popUpToRouteClass_1 = popUpToRouteClass;
    return $this;
  }
  function NavOptions_init_$Create$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(getKClassFromExpression(popUpToRouteObject))), popUpToInclusive, popUpToSaveState);
    $this.popUpToRouteObject_1 = popUpToRouteObject;
    return $this;
  }
  function NavOptions_init_$Create$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function Builder_2() {
    this.singleTop_1 = false;
    this.restoreState_1 = false;
    this.popUpToId_1 = -1;
    this.popUpToRoute_1 = null;
    this.popUpToRouteClass_1 = null;
    this.popUpToRouteObject_1 = null;
    this.popUpToInclusive_1 = false;
    this.popUpToSaveState_1 = false;
  }
  protoOf(Builder_2).setLaunchSingleTop_4zbxf1_k$ = function (singleTop) {
    this.singleTop_1 = singleTop;
    return this;
  };
  protoOf(Builder_2).setRestoreState_demvhc_k$ = function (restoreState) {
    this.restoreState_1 = restoreState;
    return this;
  };
  protoOf(Builder_2).setPopUpTo_29sann_k$ = function (destinationId, inclusive, saveState) {
    this.popUpToId_1 = destinationId;
    this.popUpToRoute_1 = null;
    this.popUpToInclusive_1 = inclusive;
    this.popUpToSaveState_1 = saveState;
    return this;
  };
  protoOf(Builder_2).setPopUpTo$default_nensqf_k$ = function (destinationId, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return $super === VOID ? this.setPopUpTo_29sann_k$(destinationId, inclusive, saveState) : $super.setPopUpTo_29sann_k$.call(this, destinationId, inclusive, saveState);
  };
  protoOf(Builder_2).setPopUpTo_gk3j2a_k$ = function (route, inclusive, saveState) {
    this.popUpToRoute_1 = route;
    this.popUpToId_1 = -1;
    this.popUpToInclusive_1 = inclusive;
    this.popUpToSaveState_1 = saveState;
    return this;
  };
  protoOf(Builder_2).setPopUpTo$default_vjq2jg_k$ = function (route, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return $super === VOID ? this.setPopUpTo_gk3j2a_k$(route, inclusive, saveState) : $super.setPopUpTo_gk3j2a_k$.call(this, route, inclusive, saveState);
  };
  protoOf(Builder_2).setPopUpTo_dtn3kj_k$ = function (klass, inclusive, saveState) {
    this.popUpToRouteClass_1 = klass;
    this.popUpToId_1 = -1;
    this.popUpToInclusive_1 = inclusive;
    this.popUpToSaveState_1 = saveState;
    return this;
  };
  protoOf(Builder_2).setPopUpTo$default_sorj75_k$ = function (klass, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return $super === VOID ? this.setPopUpTo_dtn3kj_k$(klass, inclusive, saveState) : $super.setPopUpTo_dtn3kj_k$.call(this, klass, inclusive, saveState);
  };
  protoOf(Builder_2).setPopUpTo_r6abre_k$ = function (route, inclusive, saveState) {
    this.popUpToRouteObject_1 = route;
    this.setPopUpTo_29sann_k$(generateHashCode(serializer(getKClassFromExpression(route))), inclusive, saveState);
    return this;
  };
  protoOf(Builder_2).setPopUpTo$default_i5roge_k$ = function (route, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return $super === VOID ? this.setPopUpTo_r6abre_k$(route, inclusive, saveState) : $super.setPopUpTo_r6abre_k$.call(this, route, inclusive, saveState);
  };
  protoOf(Builder_2).build_1k0s4u_k$ = function () {
    var tmp;
    if (!(this.popUpToRoute_1 == null)) {
      tmp = NavOptions_init_$Create$(this.singleTop_1, this.restoreState_1, this.popUpToRoute_1, this.popUpToInclusive_1, this.popUpToSaveState_1);
    } else if (!(this.popUpToRouteClass_1 == null)) {
      tmp = NavOptions_init_$Create$_0(this.singleTop_1, this.restoreState_1, this.popUpToRouteClass_1, this.popUpToInclusive_1, this.popUpToSaveState_1);
    } else if (!(this.popUpToRouteObject_1 == null)) {
      tmp = NavOptions_init_$Create$_1(this.singleTop_1, this.restoreState_1, ensureNotNull(this.popUpToRouteObject_1), this.popUpToInclusive_1, this.popUpToSaveState_1);
    } else {
      tmp = new NavOptions(this.singleTop_1, this.restoreState_1, this.popUpToId_1, this.popUpToInclusive_1, this.popUpToSaveState_1);
    }
    return tmp;
  };
  function NavOptions(singleTop, restoreState, popUpToId, popUpToInclusive, popUpToSaveState) {
    this.singleTop_1 = singleTop;
    this.restoreState_1 = restoreState;
    this.popUpToId_1 = popUpToId;
    this.popUpToInclusive_1 = popUpToInclusive;
    this.popUpToSaveState_1 = popUpToSaveState;
    this.popUpToRoute_1 = null;
    this.popUpToRouteClass_1 = null;
    this.popUpToRouteObject_1 = null;
  }
  protoOf(NavOptions).get_popUpToId_gtrmx3_k$ = function () {
    return this.popUpToId_1;
  };
  protoOf(NavOptions).get_popUpToRoute_oc07th_k$ = function () {
    return this.popUpToRoute_1;
  };
  protoOf(NavOptions).get_popUpToRouteClass_71gh59_k$ = function () {
    return this.popUpToRouteClass_1;
  };
  protoOf(NavOptions).get_popUpToRouteObject_ap1klm_k$ = function () {
    return this.popUpToRouteObject_1;
  };
  protoOf(NavOptions).shouldLaunchSingleTop_ufl07b_k$ = function () {
    return this.singleTop_1;
  };
  protoOf(NavOptions).shouldRestoreState_cp3tai_k$ = function () {
    return this.restoreState_1;
  };
  protoOf(NavOptions).isPopUpToInclusive_tm91f5_k$ = function () {
    return this.popUpToInclusive_1;
  };
  protoOf(NavOptions).shouldPopUpToSaveState_xmvb28_k$ = function () {
    return this.popUpToSaveState_1;
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
    return this.singleTop_1 === other.singleTop_1 && this.restoreState_1 === other.restoreState_1 && this.popUpToId_1 === other.popUpToId_1 && this.popUpToRoute_1 == other.popUpToRoute_1 && equals(this.popUpToRouteClass_1, other.popUpToRouteClass_1) && equals(this.popUpToRouteObject_1, other.popUpToRouteObject_1) && this.popUpToInclusive_1 === other.popUpToInclusive_1 && this.popUpToSaveState_1 === other.popUpToSaveState_1;
  };
  protoOf(NavOptions).hashCode = function () {
    var result = this.shouldLaunchSingleTop_ufl07b_k$() ? 1 : 0;
    result = imul(31, result) + (this.shouldRestoreState_cp3tai_k$() ? 1 : 0) | 0;
    result = imul(31, result) + this.popUpToId_1 | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.popUpToRoute_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.popUpToRouteClass_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.popUpToRouteObject_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    result = imul(31, result) + (this.isPopUpToInclusive_tm91f5_k$() ? 1 : 0) | 0;
    result = imul(31, result) + (this.shouldPopUpToSaveState_xmvb28_k$() ? 1 : 0) | 0;
    return result;
  };
  protoOf(NavOptions).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.append_22ad7x_k$(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
    sb.append_22ad7x_k$('(');
    if (this.singleTop_1) {
      sb.append_22ad7x_k$('launchSingleTop ');
    }
    if (this.restoreState_1) {
      sb.append_22ad7x_k$('restoreState ');
    }
    if (!(this.popUpToRoute_1 == null) || !(this.popUpToId_1 === -1)) {
      sb.append_22ad7x_k$('popUpTo(');
      if (!(this.popUpToRoute_1 == null)) {
        sb.append_22ad7x_k$(this.popUpToRoute_1);
      } else if (!(this.popUpToRouteClass_1 == null)) {
        sb.append_t8pm91_k$(this.popUpToRouteClass_1);
      } else if (!(this.popUpToRouteObject_1 == null)) {
        sb.append_t8pm91_k$(this.popUpToRouteObject_1);
      } else {
        sb.append_22ad7x_k$(Companion_getInstance_6().getDisplayName_ut2bi7_k$(this.popUpToId_1));
      }
      if (this.popUpToInclusive_1) {
        sb.append_22ad7x_k$(' inclusive');
      }
      if (this.popUpToSaveState_1) {
        sb.append_22ad7x_k$(' saveState');
      }
      sb.append_22ad7x_k$(')');
    }
    return sb.toString();
  };
  function _get_builder__bi005y_1($this) {
    return $this.builder_1;
  }
  function _set_popUpToRoute__8d6451_1($this, value) {
    if (!(value == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isBlank(value)) {
        // Inline function 'androidx.navigation.NavOptionsBuilder.<set-popUpToRoute>.<anonymous>' call
        var message = 'Cannot pop up to an empty route';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      $this.popUpToRoute_1 = value;
      $this.inclusive_1 = false;
    }
  }
  function _set_inclusive__y875uh($this, _set____db54di) {
    $this.inclusive_1 = _set____db54di;
  }
  function _get_inclusive__7i2fq3($this) {
    return $this.inclusive_1;
  }
  function _set_saveState__x8qd3j($this, _set____db54di) {
    $this.saveState_1 = _set____db54di;
  }
  function _get_saveState__3xvwoz($this) {
    return $this.saveState_1;
  }
  function _set_popUpToRouteClass__simiup_1($this, value) {
    if (!(value == null)) {
      $this.popUpToRouteClass_1 = value;
      $this.inclusive_1 = false;
    }
  }
  function _set_popUpToRouteObject__279ky2_1($this, value) {
    if (!(value == null)) {
      $this.popUpToRouteObject_1 = value;
      $this.inclusive_1 = false;
    }
  }
  function NavOptionsBuilder$popUpTo$lambda($this$null) {
    return Unit_getInstance();
  }
  function NavOptionsBuilder$popUpTo$lambda_0($this$null) {
    return Unit_getInstance();
  }
  function NavOptionsBuilder$popUpTo$lambda_1($this$null) {
    return Unit_getInstance();
  }
  function NavOptionsBuilder() {
    this.builder_1 = new Builder_2();
    this.launchSingleTop_1 = false;
    this.restoreState_1 = false;
    this.popUpToId_1 = -1;
    this.popUpToRoute_1 = null;
    this.inclusive_1 = false;
    this.saveState_1 = false;
    this.popUpToRouteClass_1 = null;
    this.popUpToRouteObject_1 = null;
  }
  protoOf(NavOptionsBuilder).set_launchSingleTop_e6b38o_k$ = function (_set____db54di) {
    this.launchSingleTop_1 = _set____db54di;
  };
  protoOf(NavOptionsBuilder).get_launchSingleTop_ljsu4x_k$ = function () {
    return this.launchSingleTop_1;
  };
  protoOf(NavOptionsBuilder).set_restoreState_tj53sl_k$ = function (_set____db54di) {
    this.restoreState_1 = _set____db54di;
  };
  protoOf(NavOptionsBuilder).get_restoreState_vmq8rw_k$ = function () {
    return this.restoreState_1;
  };
  protoOf(NavOptionsBuilder).set_popUpToId_hwlc45_k$ = function (value) {
    this.popUpToId_1 = value;
    this.inclusive_1 = false;
  };
  protoOf(NavOptionsBuilder).get_popUpToId_gtrmx3_k$ = function () {
    return this.popUpToId_1;
  };
  protoOf(NavOptionsBuilder).get_popUpToRoute_oc07th_k$ = function () {
    return this.popUpToRoute_1;
  };
  protoOf(NavOptionsBuilder).get_popUpToRouteClass_71gh59_k$ = function () {
    return this.popUpToRouteClass_1;
  };
  protoOf(NavOptionsBuilder).get_popUpToRouteObject_ap1klm_k$ = function () {
    return this.popUpToRouteObject_1;
  };
  protoOf(NavOptionsBuilder).popUpTo_po3odn_k$ = function (id, popUpToBuilder) {
    this.set_popUpToId_hwlc45_k$(id);
    _set_popUpToRoute__8d6451_1(this, null);
    // Inline function 'kotlin.apply' call
    var this_0 = new PopUpToBuilder();
    // Inline function 'kotlin.contracts.contract' call
    popUpToBuilder(this_0);
    var builder = this_0;
    this.inclusive_1 = builder.get_inclusive_g8fo3h_k$();
    this.saveState_1 = builder.get_saveState_bdjsdn_k$();
  };
  protoOf(NavOptionsBuilder).popUpTo$default_xrdpvj_k$ = function (id, popUpToBuilder, $super) {
    var tmp;
    if (popUpToBuilder === VOID) {
      tmp = NavOptionsBuilder$popUpTo$lambda;
    } else {
      tmp = popUpToBuilder;
    }
    popUpToBuilder = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.popUpTo_po3odn_k$(id, popUpToBuilder);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.popUpTo_po3odn_k$.call(this, id, popUpToBuilder);
    }
    return tmp_0;
  };
  protoOf(NavOptionsBuilder).popUpTo_j2bdir_k$ = function (route, popUpToBuilder) {
    _set_popUpToRoute__8d6451_1(this, route);
    this.set_popUpToId_hwlc45_k$(-1);
    // Inline function 'kotlin.apply' call
    var this_0 = new PopUpToBuilder();
    // Inline function 'kotlin.contracts.contract' call
    popUpToBuilder(this_0);
    var builder = this_0;
    this.inclusive_1 = builder.get_inclusive_g8fo3h_k$();
    this.saveState_1 = builder.get_saveState_bdjsdn_k$();
  };
  protoOf(NavOptionsBuilder).popUpTo$default_r8fkv3_k$ = function (route, popUpToBuilder, $super) {
    var tmp;
    if (popUpToBuilder === VOID) {
      tmp = NavOptionsBuilder$popUpTo$lambda_0;
    } else {
      tmp = popUpToBuilder;
    }
    popUpToBuilder = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.popUpTo_j2bdir_k$(route, popUpToBuilder);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.popUpTo_j2bdir_k$.call(this, route, popUpToBuilder);
    }
    return tmp_0;
  };
  protoOf(NavOptionsBuilder).popUpTo_9zslmg_k$ = function (klass, popUpToBuilder) {
    _set_popUpToRouteClass__simiup_1(this, klass);
    this.set_popUpToId_hwlc45_k$(-1);
    _set_popUpToRoute__8d6451_1(this, null);
    // Inline function 'kotlin.apply' call
    var this_0 = new PopUpToBuilder();
    // Inline function 'kotlin.contracts.contract' call
    popUpToBuilder(this_0);
    var builder = this_0;
    this.inclusive_1 = builder.get_inclusive_g8fo3h_k$();
    this.saveState_1 = builder.get_saveState_bdjsdn_k$();
  };
  protoOf(NavOptionsBuilder).popUpTo_1xajuq_k$ = function (route, popUpToBuilder) {
    _set_popUpToRouteObject__279ky2_1(this, route);
    this.set_popUpToId_hwlc45_k$(-1);
    _set_popUpToRoute__8d6451_1(this, null);
    // Inline function 'kotlin.apply' call
    var this_0 = new PopUpToBuilder();
    // Inline function 'kotlin.contracts.contract' call
    popUpToBuilder(this_0);
    var builder = this_0;
    this.inclusive_1 = builder.get_inclusive_g8fo3h_k$();
    this.saveState_1 = builder.get_saveState_bdjsdn_k$();
  };
  protoOf(NavOptionsBuilder).popUpTo$default_vz5po6_k$ = function (route, popUpToBuilder, $super) {
    var tmp;
    if (popUpToBuilder === VOID) {
      tmp = NavOptionsBuilder$popUpTo$lambda_1;
    } else {
      tmp = popUpToBuilder;
    }
    popUpToBuilder = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.popUpTo_1xajuq_k$(route, popUpToBuilder);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.popUpTo_1xajuq_k$.call(this, route, popUpToBuilder);
    }
    return tmp_0;
  };
  protoOf(NavOptionsBuilder).build_e29v9o_k$ = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.builder_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.NavOptionsBuilder.build.<anonymous>' call
    this_0.setLaunchSingleTop_4zbxf1_k$(this.launchSingleTop_1);
    this_0.setRestoreState_demvhc_k$(this.restoreState_1);
    if (!(this.popUpToRoute_1 == null)) {
      this_0.setPopUpTo_gk3j2a_k$(this.popUpToRoute_1, this.inclusive_1, this.saveState_1);
    } else if (!(this.popUpToRouteClass_1 == null)) {
      this_0.setPopUpTo_dtn3kj_k$(ensureNotNull(this.popUpToRouteClass_1), this.inclusive_1, this.saveState_1);
    } else if (!(this.popUpToRouteObject_1 == null)) {
      this_0.setPopUpTo_r6abre_k$(ensureNotNull(this.popUpToRouteObject_1), this.inclusive_1, this.saveState_1);
    } else {
      this_0.setPopUpTo_29sann_k$(this.popUpToId_1, this.inclusive_1, this.saveState_1);
    }
    return this_0.build_1k0s4u_k$();
  };
  function NavType$Companion$IntType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$IntType$1).get_name_woqyms_k$ = function () {
    return 'integer';
  };
  protoOf(NavType$Companion$IntType$1).put_r6jusc_k$ = function (bundle, key, value) {
    bundle.putInt_bo1v9r_k$(key, value);
  };
  protoOf(NavType$Companion$IntType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_r6jusc_k$(bundle, key, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$IntType$1).parseValue_fn9a6c_k$ = function (value) {
    var tmp;
    if (startsWith(value, '0x')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = value.substring(2);
      tmp = toInt_0(tmp$ret$1, 16);
    } else {
      tmp = toInt(value);
    }
    return tmp;
  };
  function NavType$Companion$IntArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$IntArrayType$1).get_name_woqyms_k$ = function () {
    return 'integer[]';
  };
  protoOf(NavType$Companion$IntArrayType$1).put_pcl3dk_k$ = function (bundle, key, value) {
    bundle.putIntArray_mue24i_k$(key, value);
  };
  protoOf(NavType$Companion$IntArrayType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_pcl3dk_k$(bundle, key, (value == null ? true : isIntArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : isIntArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$IntArrayType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([Companion_getInstance_9().IntType_1.parseValue_fn9a6c_k$(value)]);
  };
  protoOf(NavType$Companion$IntArrayType$1).parseValue_svtjp4_k$ = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.parseValue_fn9a6c_k$(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$IntArrayType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_svtjp4_k$(value, (previousValue == null ? true : isIntArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).valueEquals_hxtczc_k$ = function (value, other) {
    var valueArray = value == null ? null : toTypedArray_0(value);
    var otherArray = other == null ? null : toTypedArray_0(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$IntArrayType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isIntArray(value)) ? value : THROW_CCE();
    return this.valueEquals_hxtczc_k$(tmp, (other == null ? true : isIntArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).serializeAsValues_ekhjrk_k$ = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_2(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$IntArrayType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_ekhjrk_k$((value == null ? true : isIntArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).emptyCollection_7s8w1h_k$ = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([]);
  };
  function NavType$Companion$IntListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$IntListType$1).get_name_woqyms_k$ = function () {
    return 'List<Int>';
  };
  protoOf(NavType$Companion$IntListType$1).put_1gcqaf_k$ = function (bundle, key, value) {
    bundle.putIntArray_mue24i_k$(key, value == null ? null : toIntArray(value));
  };
  protoOf(NavType$Companion$IntListType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_1gcqaf_k$(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isIntArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_2(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$IntListType$1).parseValue_fn9a6c_k$ = function (value) {
    return listOf(Companion_getInstance_9().IntType_1.parseValue_fn9a6c_k$(value));
  };
  protoOf(NavType$Companion$IntListType$1).parseValue_jabmtl_k$ = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus(previousValue, this.parseValue_fn9a6c_k$(value));
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$IntListType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_jabmtl_k$(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).valueEquals_wp5m7u_k$ = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$IntListType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.valueEquals_wp5m7u_k$(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).serializeAsValues_p8uz5b_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var tmp0_iterator = value.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$IntListType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_p8uz5b_k$((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).emptyCollection_7s8w1h_k$ = function () {
    return emptyList();
  };
  function NavType$Companion$LongType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$LongType$1).get_name_woqyms_k$ = function () {
    return 'long';
  };
  protoOf(NavType$Companion$LongType$1).put_apb93i_k$ = function (bundle, key, value) {
    bundle.putLong_gnrvd2_k$(key, value);
  };
  protoOf(NavType$Companion$LongType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_apb93i_k$(bundle, key, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$LongType$1).parseValue_fn9a6c_k$ = function (value) {
    var localValue = value;
    if (endsWith(value, 'L')) {
      // Inline function 'kotlin.text.substring' call
      var this_0 = localValue;
      var endIndex = value.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      localValue = this_0.substring(0, endIndex);
    }
    var tmp;
    if (startsWith(value, '0x')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = localValue.substring(2);
      tmp = toLong_0(tmp$ret$3, 16);
    } else {
      tmp = toLong(localValue);
    }
    return tmp;
  };
  function NavType$Companion$LongArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$LongArrayType$1).get_name_woqyms_k$ = function () {
    return 'long[]';
  };
  protoOf(NavType$Companion$LongArrayType$1).put_m4af0p_k$ = function (bundle, key, value) {
    bundle.putLongArray_wmcbl0_k$(key, value);
  };
  protoOf(NavType$Companion$LongArrayType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_m4af0p_k$(bundle, key, (value == null ? true : isLongArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : isLongArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$LongArrayType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.longArrayOf' call
    return longArrayOf([Companion_getInstance_9().LongType_1.parseValue_fn9a6c_k$(value)]);
  };
  protoOf(NavType$Companion$LongArrayType$1).parseValue_425wfr_k$ = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.parseValue_fn9a6c_k$(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$LongArrayType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_425wfr_k$(value, (previousValue == null ? true : isLongArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).valueEquals_j7iovk_k$ = function (value, other) {
    var valueArray = value == null ? null : toTypedArray_1(value);
    var otherArray = other == null ? null : toTypedArray_1(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$LongArrayType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isLongArray(value)) ? value : THROW_CCE();
    return this.valueEquals_j7iovk_k$(tmp, (other == null ? true : isLongArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).serializeAsValues_6lqym7_k$ = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_3(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$LongArrayType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_6lqym7_k$((value == null ? true : isLongArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).emptyCollection_7s8w1h_k$ = function () {
    // Inline function 'kotlin.longArrayOf' call
    return longArrayOf([]);
  };
  function NavType$Companion$LongListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$LongListType$1).get_name_woqyms_k$ = function () {
    return 'List<Long>';
  };
  protoOf(NavType$Companion$LongListType$1).put_lrsfpd_k$ = function (bundle, key, value) {
    bundle.putLongArray_wmcbl0_k$(key, value == null ? null : toLongArray(value));
  };
  protoOf(NavType$Companion$LongListType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_lrsfpd_k$(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isLongArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_3(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$LongListType$1).parseValue_fn9a6c_k$ = function (value) {
    return listOf(Companion_getInstance_9().LongType_1.parseValue_fn9a6c_k$(value));
  };
  protoOf(NavType$Companion$LongListType$1).parseValue_tlcinz_k$ = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus(previousValue, this.parseValue_fn9a6c_k$(value));
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$LongListType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_tlcinz_k$(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).valueEquals_igk6y8_k$ = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$LongListType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.valueEquals_igk6y8_k$(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).serializeAsValues_ai7nsp_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var tmp0_iterator = value.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$LongListType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_ai7nsp_k$((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).emptyCollection_7s8w1h_k$ = function () {
    return emptyList();
  };
  function NavType$Companion$FloatType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$FloatType$1).get_name_woqyms_k$ = function () {
    return 'float';
  };
  protoOf(NavType$Companion$FloatType$1).put_sufw70_k$ = function (bundle, key, value) {
    bundle.putFloat_be5qqm_k$(key, value);
  };
  protoOf(NavType$Companion$FloatType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_sufw70_k$(bundle, key, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$FloatType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.text.toFloat' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(value);
  };
  function NavType$Companion$FloatArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$FloatArrayType$1).get_name_woqyms_k$ = function () {
    return 'float[]';
  };
  protoOf(NavType$Companion$FloatArrayType$1).put_nqbw23_k$ = function (bundle, key, value) {
    bundle.putFloatArray_bp4x7o_k$(key, value);
  };
  protoOf(NavType$Companion$FloatArrayType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_nqbw23_k$(bundle, key, (value == null ? true : isFloatArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : isFloatArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$FloatArrayType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([Companion_getInstance_9().FloatType_1.parseValue_fn9a6c_k$(value)]);
  };
  protoOf(NavType$Companion$FloatArrayType$1).parseValue_h8q2xh_k$ = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.parseValue_fn9a6c_k$(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatArrayType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_h8q2xh_k$(value, (previousValue == null ? true : isFloatArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).valueEquals_mlkmaa_k$ = function (value, other) {
    var valueArray = value == null ? null : toTypedArray_2(value);
    var otherArray = other == null ? null : toTypedArray_2(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$FloatArrayType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isFloatArray(value)) ? value : THROW_CCE();
    return this.valueEquals_mlkmaa_k$(tmp, (other == null ? true : isFloatArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).serializeAsValues_9ep9ct_k$ = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_4(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatArrayType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_9ep9ct_k$((value == null ? true : isFloatArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).emptyCollection_7s8w1h_k$ = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([]);
  };
  function NavType$Companion$FloatListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$FloatListType$1).get_name_woqyms_k$ = function () {
    return 'List<Float>';
  };
  protoOf(NavType$Companion$FloatListType$1).put_h1xmdg_k$ = function (bundle, key, value) {
    bundle.putFloatArray_bp4x7o_k$(key, value == null ? null : toFloatArray(value));
  };
  protoOf(NavType$Companion$FloatListType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_h1xmdg_k$(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isFloatArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_4(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$FloatListType$1).parseValue_fn9a6c_k$ = function (value) {
    return listOf(Companion_getInstance_9().FloatType_1.parseValue_fn9a6c_k$(value));
  };
  protoOf(NavType$Companion$FloatListType$1).parseValue_acd3oc_k$ = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus(previousValue, this.parseValue_fn9a6c_k$(value));
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatListType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_acd3oc_k$(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).valueEquals_x80z34_k$ = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$FloatListType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.valueEquals_x80z34_k$(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).serializeAsValues_p5abj0_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var tmp0_iterator = value.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatListType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_p5abj0_k$((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).emptyCollection_7s8w1h_k$ = function () {
    return emptyList();
  };
  function NavType$Companion$BoolType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$BoolType$1).get_name_woqyms_k$ = function () {
    return 'boolean';
  };
  protoOf(NavType$Companion$BoolType$1).put_9rqyaf_k$ = function (bundle, key, value) {
    bundle.putBoolean_kf6y2l_k$(key, value);
  };
  protoOf(NavType$Companion$BoolType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_9rqyaf_k$(bundle, key, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : typeof tmp === 'boolean') ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$BoolType$1).parseValue_fn9a6c_k$ = function (value) {
    var tmp;
    switch (value) {
      case 'true':
        tmp = true;
        break;
      case 'false':
        tmp = false;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('A boolean NavType only accepts "true" or "false" values.');
    }
    return tmp;
  };
  function NavType$Companion$BoolArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$BoolArrayType$1).get_name_woqyms_k$ = function () {
    return 'boolean[]';
  };
  protoOf(NavType$Companion$BoolArrayType$1).put_se8pmp_k$ = function (bundle, key, value) {
    bundle.putBooleanArray_w8i9l8_k$(key, value);
  };
  protoOf(NavType$Companion$BoolArrayType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_se8pmp_k$(bundle, key, (value == null ? true : isBooleanArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : isBooleanArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$BoolArrayType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.booleanArrayOf' call
    return booleanArrayOf([Companion_getInstance_9().BoolType_1.parseValue_fn9a6c_k$(value)]);
  };
  protoOf(NavType$Companion$BoolArrayType$1).parseValue_dpo44f_k$ = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.parseValue_fn9a6c_k$(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolArrayType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_dpo44f_k$(value, (previousValue == null ? true : isBooleanArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).valueEquals_cy33di_k$ = function (value, other) {
    var valueArray = value == null ? null : toTypedArray_3(value);
    var otherArray = other == null ? null : toTypedArray_3(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$BoolArrayType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isBooleanArray(value)) ? value : THROW_CCE();
    return this.valueEquals_cy33di_k$(tmp, (other == null ? true : isBooleanArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).serializeAsValues_cvnrfb_k$ = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_5(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolArrayType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_cvnrfb_k$((value == null ? true : isBooleanArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).emptyCollection_7s8w1h_k$ = function () {
    // Inline function 'kotlin.booleanArrayOf' call
    return booleanArrayOf([]);
  };
  function NavType$Companion$BoolListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$BoolListType$1).get_name_woqyms_k$ = function () {
    return 'List<Boolean>';
  };
  protoOf(NavType$Companion$BoolListType$1).put_uczyq8_k$ = function (bundle, key, value) {
    bundle.putBooleanArray_w8i9l8_k$(key, value == null ? null : toBooleanArray(value));
  };
  protoOf(NavType$Companion$BoolListType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_uczyq8_k$(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isBooleanArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_5(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$BoolListType$1).parseValue_fn9a6c_k$ = function (value) {
    return listOf(Companion_getInstance_9().BoolType_1.parseValue_fn9a6c_k$(value));
  };
  protoOf(NavType$Companion$BoolListType$1).parseValue_eltx3k_k$ = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus(previousValue, this.parseValue_fn9a6c_k$(value));
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolListType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_eltx3k_k$(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).valueEquals_9fyc20_k$ = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$BoolListType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.valueEquals_9fyc20_k$(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).serializeAsValues_39nehk_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var tmp0_iterator = value.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolListType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_39nehk_k$((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).emptyCollection_7s8w1h_k$ = function () {
    return emptyList();
  };
  function NavType$Companion$StringType$1() {
    NavType.call(this, true);
  }
  protoOf(NavType$Companion$StringType$1).get_name_woqyms_k$ = function () {
    return 'string';
  };
  protoOf(NavType$Companion$StringType$1).put_rclomj_k$ = function (bundle, key, value) {
    bundle.putString_rtcuxu_k$(key, value);
  };
  protoOf(NavType$Companion$StringType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_rclomj_k$(bundle, key, (value == null ? true : typeof value === 'string') ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : typeof tmp === 'string') ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$StringType$1).parseValue_fn9a6c_k$ = function (value) {
    return value === 'null' ? null : value;
  };
  protoOf(NavType$Companion$StringType$1).serializeAsValue_52pz1k_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.navigation.<no name provided>.serializeAsValue.<anonymous>' call
      tmp = UriUtils_getInstance().encode$default_wfiqom_k$(value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringType$1).serializeAsValue_g70rjk_k$ = function (value) {
    return this.serializeAsValue_52pz1k_k$((value == null ? true : typeof value === 'string') ? value : THROW_CCE());
  };
  function NavType$Companion$StringArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$StringArrayType$1).get_name_woqyms_k$ = function () {
    return 'string[]';
  };
  protoOf(NavType$Companion$StringArrayType$1).put_t3m9xz_k$ = function (bundle, key, value) {
    bundle.putStringArray_rzbsdw_k$(key, (value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_t3m9xz_k$(bundle, key, (value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    return (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$StringArrayType$1).parseValue_fn9a6c_k$ = function (value) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [value];
  };
  protoOf(NavType$Companion$StringArrayType$1).parseValue_cjiyrt_k$ = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.parseValue_fn9a6c_k$(value);
      // Inline function 'kotlin.js.asDynamic' call
      tmp = previousValue.concat(elements);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringArrayType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_cjiyrt_k$(value, (previousValue == null ? true : isArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).valueEquals_ey1rly_k$ = function (value, other) {
    return contentDeepEquals(value, other);
  };
  protoOf(NavType$Companion$StringArrayType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isArray(value)) ? value : THROW_CCE();
    return this.valueEquals_ey1rly_k$(tmp, (other == null ? true : isArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).serializeAsValues_o9n3dd_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(value.length);
      var inductionVariable = 0;
      var last = value.length;
      while (inductionVariable < last) {
        var item = value[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = UriUtils_getInstance().encode$default_wfiqom_k$(item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringArrayType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_o9n3dd_k$((value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).emptyCollection_7s8w1h_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [];
  };
  function NavType$Companion$StringListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$StringListType$1).get_name_woqyms_k$ = function () {
    return 'List<String>';
  };
  protoOf(NavType$Companion$StringListType$1).put_vm1pyl_k$ = function (bundle, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    bundle.putStringArray_rzbsdw_k$(key, tmp);
  };
  protoOf(NavType$Companion$StringListType$1).put_qb1i4t_k$ = function (bundle, key, value) {
    return this.put_vm1pyl_k$(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).get_jen0mr_k$ = function (bundle, key) {
    var tmp = bundle.get_jl1mi9_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$StringListType$1).parseValue_fn9a6c_k$ = function (value) {
    return listOf(value);
  };
  protoOf(NavType$Companion$StringListType$1).parseValue_ftfxd9_k$ = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus(previousValue, this.parseValue_fn9a6c_k$(value));
    return tmp1_elvis_lhs == null ? this.parseValue_fn9a6c_k$(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringListType$1).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_ftfxd9_k$(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).valueEquals_lm8eq8_k$ = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$StringListType$1).valueEquals_sywqj2_k$ = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.valueEquals_lm8eq8_k$(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).serializeAsValues_ix1cbf_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var tmp0_iterator = value.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = UriUtils_getInstance().encode$default_wfiqom_k$(item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringListType$1).serializeAsValues_rg3iw5_k$ = function (value) {
    return this.serializeAsValues_ix1cbf_k$((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).emptyCollection_7s8w1h_k$ = function () {
    return emptyList();
  };
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    tmp.IntType_1 = new NavType$Companion$IntType$1();
    var tmp_0 = this;
    tmp_0.IntArrayType_1 = new NavType$Companion$IntArrayType$1();
    var tmp_1 = this;
    tmp_1.IntListType_1 = new NavType$Companion$IntListType$1();
    var tmp_2 = this;
    tmp_2.LongType_1 = new NavType$Companion$LongType$1();
    var tmp_3 = this;
    tmp_3.LongArrayType_1 = new NavType$Companion$LongArrayType$1();
    var tmp_4 = this;
    tmp_4.LongListType_1 = new NavType$Companion$LongListType$1();
    var tmp_5 = this;
    tmp_5.FloatType_1 = new NavType$Companion$FloatType$1();
    var tmp_6 = this;
    tmp_6.FloatArrayType_1 = new NavType$Companion$FloatArrayType$1();
    var tmp_7 = this;
    tmp_7.FloatListType_1 = new NavType$Companion$FloatListType$1();
    var tmp_8 = this;
    tmp_8.BoolType_1 = new NavType$Companion$BoolType$1();
    var tmp_9 = this;
    tmp_9.BoolArrayType_1 = new NavType$Companion$BoolArrayType$1();
    var tmp_10 = this;
    tmp_10.BoolListType_1 = new NavType$Companion$BoolListType$1();
    var tmp_11 = this;
    tmp_11.StringType_1 = new NavType$Companion$StringType$1();
    var tmp_12 = this;
    tmp_12.StringArrayType_1 = new NavType$Companion$StringArrayType$1();
    var tmp_13 = this;
    tmp_13.StringListType_1 = new NavType$Companion$StringListType$1();
  }
  protoOf(Companion_6).fromArgType_n2k6w8_k$ = function (type, packageName) {
    var tmp;
    if (type === this.IntType_1.get_name_woqyms_k$()) {
      tmp = this.IntType_1;
    } else if (type === this.IntArrayType_1.get_name_woqyms_k$()) {
      tmp = this.IntArrayType_1;
    } else if (type === this.IntListType_1.get_name_woqyms_k$()) {
      tmp = this.IntListType_1;
    } else if (type === this.LongType_1.get_name_woqyms_k$()) {
      tmp = this.LongType_1;
    } else if (type === this.LongArrayType_1.get_name_woqyms_k$()) {
      tmp = this.LongArrayType_1;
    } else if (type === this.LongListType_1.get_name_woqyms_k$()) {
      tmp = this.LongListType_1;
    } else if (type === this.BoolType_1.get_name_woqyms_k$()) {
      tmp = this.BoolType_1;
    } else if (type === this.BoolArrayType_1.get_name_woqyms_k$()) {
      tmp = this.BoolArrayType_1;
    } else if (type === this.BoolListType_1.get_name_woqyms_k$()) {
      tmp = this.BoolListType_1;
    } else if (type === this.StringType_1.get_name_woqyms_k$()) {
      tmp = this.StringType_1;
    } else if (type === this.StringArrayType_1.get_name_woqyms_k$()) {
      tmp = this.StringArrayType_1;
    } else if (type === this.StringListType_1.get_name_woqyms_k$()) {
      tmp = this.StringListType_1;
    } else if (type === this.FloatType_1.get_name_woqyms_k$()) {
      tmp = this.FloatType_1;
    } else if (type === this.FloatArrayType_1.get_name_woqyms_k$()) {
      tmp = this.FloatArrayType_1;
    } else if (type === this.FloatListType_1.get_name_woqyms_k$()) {
      tmp = this.FloatListType_1;
    } else {
      // Inline function 'kotlin.text.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(type == null || charSequenceLength(type) === 0)) {
        throw IllegalArgumentException_init_$Create$('Object of type ' + type + ' is not supported for navigation arguments.');
      }
      tmp = this.StringType_1;
    }
    return tmp;
  };
  protoOf(Companion_6).inferFromValue_fnvuxr_k$ = function (value) {
    try {
      this.IntType_1.parseValue_fn9a6c_k$(value);
      var tmp = this.IntType_1;
      return tmp instanceof NavType ? tmp : THROW_CCE();
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    try {
      this.LongType_1.parseValue_fn9a6c_k$(value);
      var tmp_0 = this.LongType_1;
      return tmp_0 instanceof NavType ? tmp_0 : THROW_CCE();
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_0 = $p;
      } else {
        throw $p;
      }
    }
    try {
      this.FloatType_1.parseValue_fn9a6c_k$(value);
      var tmp_1 = this.FloatType_1;
      return tmp_1 instanceof NavType ? tmp_1 : THROW_CCE();
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_1 = $p;
      } else {
        throw $p;
      }
    }
    try {
      this.BoolType_1.parseValue_fn9a6c_k$(value);
      var tmp_2 = this.BoolType_1;
      return tmp_2 instanceof NavType ? tmp_2 : THROW_CCE();
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_2 = $p;
      } else {
        throw $p;
      }
    }
    var tmp_3 = this.StringType_1;
    return tmp_3 instanceof NavType ? tmp_3 : THROW_CCE();
  };
  protoOf(Companion_6).inferFromValueType_ybxbho_k$ = function (value) {
    var tmp;
    if (!(value == null) ? typeof value === 'number' : false) {
      var tmp_0 = this.IntType_1;
      tmp = tmp_0 instanceof NavType ? tmp_0 : THROW_CCE();
    } else {
      if (!(value == null) ? isIntArray(value) : false) {
        var tmp_1 = this.IntArrayType_1;
        tmp = tmp_1 instanceof NavType ? tmp_1 : THROW_CCE();
      } else {
        if (value instanceof Long) {
          var tmp_2 = this.LongType_1;
          tmp = tmp_2 instanceof NavType ? tmp_2 : THROW_CCE();
        } else {
          if (!(value == null) ? isLongArray(value) : false) {
            var tmp_3 = this.LongArrayType_1;
            tmp = tmp_3 instanceof NavType ? tmp_3 : THROW_CCE();
          } else {
            if (!(value == null) ? typeof value === 'number' : false) {
              var tmp_4 = this.FloatType_1;
              tmp = tmp_4 instanceof NavType ? tmp_4 : THROW_CCE();
            } else {
              if (!(value == null) ? isFloatArray(value) : false) {
                var tmp_5 = this.FloatArrayType_1;
                tmp = tmp_5 instanceof NavType ? tmp_5 : THROW_CCE();
              } else {
                if (!(value == null) ? typeof value === 'boolean' : false) {
                  var tmp_6 = this.BoolType_1;
                  tmp = tmp_6 instanceof NavType ? tmp_6 : THROW_CCE();
                } else {
                  if (!(value == null) ? isBooleanArray(value) : false) {
                    var tmp_7 = this.BoolArrayType_1;
                    tmp = tmp_7 instanceof NavType ? tmp_7 : THROW_CCE();
                  } else {
                    var tmp_8;
                    if (!(value == null) ? typeof value === 'string' : false) {
                      tmp_8 = true;
                    } else {
                      tmp_8 = value == null;
                    }
                    if (tmp_8) {
                      var tmp_9 = this.StringType_1;
                      tmp = tmp_9 instanceof NavType ? tmp_9 : THROW_CCE();
                    } else {
                      if (!(value == null) ? isArray(value) : false) {
                        var tmp_10 = this.StringArrayType_1;
                        tmp = tmp_10 instanceof NavType ? tmp_10 : THROW_CCE();
                      } else {
                        throw IllegalArgumentException_init_$Create$(toString_0(value) + ' is not supported for navigation arguments.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(Companion_6).get_IntType_9uzfpc_k$ = function () {
    return this.IntType_1;
  };
  protoOf(Companion_6).get_IntArrayType_4gr4od_k$ = function () {
    return this.IntArrayType_1;
  };
  protoOf(Companion_6).get_IntListType_9estj2_k$ = function () {
    return this.IntListType_1;
  };
  protoOf(Companion_6).get_LongType_5zm9xb_k$ = function () {
    return this.LongType_1;
  };
  protoOf(Companion_6).get_LongArrayType_xlv2gi_k$ = function () {
    return this.LongArrayType_1;
  };
  protoOf(Companion_6).get_LongListType_a5b9j7_k$ = function () {
    return this.LongListType_1;
  };
  protoOf(Companion_6).get_FloatType_6qlkod_k$ = function () {
    return this.FloatType_1;
  };
  protoOf(Companion_6).get_FloatArrayType_up1a3k_k$ = function () {
    return this.FloatArrayType_1;
  };
  protoOf(Companion_6).get_FloatListType_5oaazv_k$ = function () {
    return this.FloatListType_1;
  };
  protoOf(Companion_6).get_BoolType_2fmckt_k$ = function () {
    return this.BoolType_1;
  };
  protoOf(Companion_6).get_BoolArrayType_v1vcv4_k$ = function () {
    return this.BoolArrayType_1;
  };
  protoOf(Companion_6).get_BoolListType_svxx0r_k$ = function () {
    return this.BoolListType_1;
  };
  protoOf(Companion_6).get_StringType_d7yf70_k$ = function () {
    return this.StringType_1;
  };
  protoOf(Companion_6).get_StringArrayType_drkiqv_k$ = function () {
    return this.StringArrayType_1;
  };
  protoOf(Companion_6).get_StringListType_fp3adu_k$ = function () {
    return this.StringListType_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function NavType(isNullableAllowed) {
    Companion_getInstance_9();
    this.isNullableAllowed_1 = isNullableAllowed;
    this.name_1 = 'nav_type';
  }
  protoOf(NavType).get_isNullableAllowed_8t4dsk_k$ = function () {
    return this.isNullableAllowed_1;
  };
  protoOf(NavType).parseValue_xt06dv_k$ = function (value, previousValue) {
    return this.parseValue_fn9a6c_k$(value);
  };
  protoOf(NavType).parseAndPut_qefbji_k$ = function (bundle, key, value) {
    var parsedValue = this.parseValue_fn9a6c_k$(value);
    this.put_qb1i4t_k$(bundle, key, parsedValue);
    return parsedValue;
  };
  protoOf(NavType).parseAndPut_5m0pua_k$ = function (bundle, key, value, previousValue) {
    if (!bundle.containsKey_1fhnt3_k$(key)) {
      throw IllegalArgumentException_init_$Create$('There is no previous value in this bundle.');
    }
    if (!(value == null)) {
      var parsedCombinedValue = this.parseValue_xt06dv_k$(value, previousValue);
      this.put_qb1i4t_k$(bundle, key, parsedCombinedValue);
      return parsedCombinedValue;
    }
    return previousValue;
  };
  protoOf(NavType).serializeAsValue_g70rjk_k$ = function (value) {
    return toString_0(value);
  };
  protoOf(NavType).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(NavType).valueEquals_sywqj2_k$ = function (value, other) {
    return equals(value, other);
  };
  protoOf(NavType).toString = function () {
    return this.get_name_woqyms_k$();
  };
  function Navigator_init_$Init$($this) {
    Navigator.call($this);
    $this._name_1 = null;
    return $this;
  }
  function Navigator_init_$Create$() {
    return Navigator_init_$Init$(objectCreate(protoOf(Navigator)));
  }
  function Navigator_init_$Init$_0(name, $this) {
    Navigator.call($this);
    $this._name_1 = name;
    return $this;
  }
  function Navigator_init_$Create$_0(name) {
    return Navigator_init_$Init$_0(name, objectCreate(protoOf(Navigator)));
  }
  function _get__name__kt6p95($this) {
    return $this._name_1;
  }
  function _set__state__4o0y7v($this, _set____db54di) {
    $this._state_1 = _set____db54di;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function _set_isAttached__4ke6c7($this, _set____db54di) {
    $this.isAttached_1 = _set____db54di;
  }
  function Extras() {
  }
  function Navigator$navigate$lambda(this$0, $navOptions, $navigatorExtras) {
    return function (backStackEntry) {
      var tmp = backStackEntry.get_destination_9r3c63_k$();
      var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var destination = tmp_0;
      var navigatedToDestination = this$0.navigate_zdmmbb_k$(destination, backStackEntry.get_arguments_p5ddub_k$(), $navOptions, $navigatorExtras);
      var tmp_1;
      if (navigatedToDestination == null) {
        tmp_1 = null;
      } else if (equals(navigatedToDestination, destination)) {
        tmp_1 = backStackEntry;
      } else {
        tmp_1 = this$0.get_state_iypx7s_k$().createBackStackEntry_vwwajp_k$(navigatedToDestination, navigatedToDestination.addInDefaultArgs_5c4oma_k$(backStackEntry.get_arguments_p5ddub_k$()));
      }
      return tmp_1;
    };
  }
  function Navigator$onLaunchSingleTop$lambda($this$navOptions) {
    $this$navOptions.set_launchSingleTop_e6b38o_k$(true);
    return Unit_getInstance();
  }
  protoOf(Navigator).get_name_75finm_k$ = function () {
    var tmp0_elvis_lhs = this._name_1;
    return tmp0_elvis_lhs == null ? removeSuffix(ensureNotNull(getKClassFromExpression(this).get_simpleName_r6f8py_k$()), 'Navigator') : tmp0_elvis_lhs;
  };
  protoOf(Navigator).get_state_iypx7s_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = this._state_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'androidx.navigation.Navigator.<get-state>.<anonymous>' call
        var message = "You cannot access the Navigator's state until the Navigator is attached";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(Navigator).get_isAttached_odsl1l_k$ = function () {
    return this.isAttached_1;
  };
  protoOf(Navigator).onAttach_c14cnd_k$ = function (state) {
    this._state_1 = state;
    this.isAttached_1 = true;
  };
  protoOf(Navigator).navigate_rlymw1_k$ = function (entries, navOptions, navigatorExtras) {
    // Inline function 'kotlin.sequences.forEach' call
    var tmp = asSequence_1(entries);
    var tmp0_iterator = filterNotNull(map(tmp, Navigator$navigate$lambda(this, navOptions, navigatorExtras))).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.navigation.Navigator.navigate.<anonymous>' call
      this.get_state_iypx7s_k$().push_37rtb5_k$(element);
    }
  };
  protoOf(Navigator).onLaunchSingleTop_gcgugw_k$ = function (backStackEntry) {
    var tmp = backStackEntry.get_destination_9r3c63_k$();
    var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var destination = tmp_0;
    this.navigate_zdmmbb_k$(destination, null, navOptions(Navigator$onLaunchSingleTop$lambda), null);
    this.get_state_iypx7s_k$().onLaunchSingleTop_gcgugw_k$(backStackEntry);
  };
  protoOf(Navigator).navigate_zdmmbb_k$ = function (destination, args, navOptions, navigatorExtras) {
    return destination;
  };
  protoOf(Navigator).popBackStack_5zx69y_k$ = function (popUpTo, savedState) {
    var backStack = this.get_state_iypx7s_k$().get_backStack_ueublk_k$().get_value_j01efc_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!backStack.contains_aljjnj_k$(popUpTo)) {
      // Inline function 'androidx.navigation.Navigator.popBackStack.<anonymous>' call
      var message = 'popBackStack was called with ' + popUpTo.toString() + ' which does not exist in back stack ' + toString(backStack);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var iterator = backStack.listIterator_70e65o_k$(backStack.get_size_woubt6_k$());
    var lastPoppedEntry = null;
    $l$loop: do {
      lastPoppedEntry = iterator.previous_l2dfd5_k$();
    }
     while (!equals(lastPoppedEntry, popUpTo) && this.popBackStack_u4z59s_k$());
    if (!(lastPoppedEntry == null)) {
      this.get_state_iypx7s_k$().pop_fb5htn_k$(lastPoppedEntry, savedState);
    }
  };
  protoOf(Navigator).popBackStack_u4z59s_k$ = function () {
    return true;
  };
  protoOf(Navigator).onSaveState_2cp4ad_k$ = function () {
    return null;
  };
  protoOf(Navigator).onRestoreState_v9wbnv_k$ = function (savedState) {
  };
  function Navigator() {
    this._state_1 = null;
    this.isAttached_1 = false;
  }
  function _get__typeNavigators__4eva6c($this) {
    return $this._typeNavigators_1;
  }
  function _get__namedNavigators__ia66ob($this) {
    return $this._namedNavigators_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).validateName_z367i2_k$ = function (name) {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    return !(name == null || charSequenceLength(name) === 0);
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function NavigatorProvider() {
    Companion_getInstance_10();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp._typeNavigators_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0._namedNavigators_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NavigatorProvider).get_navigators_amqgsl_k$ = function () {
    return this._namedNavigators_1;
  };
  protoOf(NavigatorProvider).getNavigator_zialjt_k$ = function (navigatorClass) {
    var tmp0_elvis_lhs = this._typeNavigators_1.get_wei43m_k$(navigatorClass);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with class "' + toString(navigatorClass) + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).getNavigator_ip43px_k$ = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_10().validateName_z367i2_k$(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.getNavigator.<anonymous>' call
      var message = 'navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this._namedNavigators_1.get_wei43m_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with name "' + name + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).addNavigator_m2hk62_k$ = function (navigator) {
    var previousNavigator = this._typeNavigators_1.get_wei43m_k$(getKClassFromExpression(navigator));
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!((previousNavigator == null ? null : previousNavigator.get_isAttached_odsl1l_k$()) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator ' + toString(navigator) + ' is replacing an already attached ' + toString_0(previousNavigator);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!navigator.get_isAttached_odsl1l_k$()) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this._typeNavigators_1;
    var key = getKClassFromExpression(navigator);
    this_0.put_4fpzoq_k$(key, navigator);
    return this.addNavigator_3hfol0_k$(navigator.get_name_75finm_k$(), navigator);
  };
  protoOf(NavigatorProvider).addNavigator_3hfol0_k$ = function (name, navigator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_10().validateName_z367i2_k$(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var previousNavigator = this._namedNavigators_1.get_wei43m_k$(name);
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!((previousNavigator == null ? null : previousNavigator.get_isAttached_odsl1l_k$()) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString(navigator) + ' is replacing an already attached ' + toString_0(previousNavigator);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!navigator.get_isAttached_odsl1l_k$()) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_1 = 'Navigator ' + toString(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    return this._namedNavigators_1.put_4fpzoq_k$(name, navigator);
  };
  function get_0(_this__u8e3s4, clazz) {
    return _this__u8e3s4.getNavigator_zialjt_k$(clazz);
  }
  function Lock() {
  }
  protoOf(Lock).withLockImpl_gl9v0b_k$ = function (block) {
    return block();
  };
  //region block: post-declaration
  protoOf(NavBackStackEntry$defaultViewModelProviderFactory$1).create_jhkoyr_k$ = create;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = generateHashCode;
  _.$_$.b = generateRouteWithArgs;
  _.$_$.c = FloatingWindow;
  _.$_$.d = NavDeepLinkRequest;
  _.$_$.e = NavDestinationBuilder;
  _.$_$.f = NavDestination;
  _.$_$.g = NavGraphNavigator;
  _.$_$.h = NavGraph;
  _.$_$.i = NavViewModelStoreProvider;
  _.$_$.j = NavigatorProvider;
  _.$_$.k = NavigatorState;
  _.$_$.l = Navigator;
  _.$_$.m = navOptions;
  _.$_$.n = NavBackStackEntry_init_$Create$;
  _.$_$.o = NavDestination_init_$Init$;
  _.$_$.p = NavDestinationBuilder_init_$Init$_0;
  _.$_$.q = NavDestinationBuilder_init_$Init$;
  _.$_$.r = NavGraphBuilder_init_$Create$;
  _.$_$.s = Navigator_init_$Init$_0;
  _.$_$.t = Companion_getInstance_4;
  _.$_$.u = Companion_getInstance_5;
  _.$_$.v = Companion_getInstance_6;
  _.$_$.w = Companion_getInstance_7;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-common.js.map
