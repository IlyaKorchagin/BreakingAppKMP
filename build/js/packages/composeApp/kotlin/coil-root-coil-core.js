(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js', './okio-parent-okio.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'), require('./okio-parent-okio.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'coil-root-coil-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'coil-root-coil-core'.");
    }
    if (typeof globalThis['okio-parent-okio'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-core'. Its dependency 'okio-parent-okio' was not found. Please, check whether 'okio-parent-okio' is loaded prior to 'coil-root-coil-core'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-core'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'coil-root-coil-core'.");
    }
    globalThis['coil-root-coil-core'] = factory(typeof globalThis['coil-root-coil-core'] === 'undefined' ? {} : globalThis['coil-root-coil-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu'], globalThis['okio-parent-okio'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_com_squareup_okio_okio, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var toMutableList = kotlin_kotlin.$_$.ab;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var listOf = kotlin_kotlin.$_$.m9;
  var to = kotlin_kotlin.$_$.sk;
  var emptyList = kotlin_kotlin.$_$.a8;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var addAll = kotlin_kotlin.$_$.v6;
  var lazy = kotlin_kotlin.$_$.fk;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var isInterface = kotlin_kotlin.$_$.qd;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var equals = kotlin_kotlin.$_$.qc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var toString = kotlin_kotlin.$_$.le;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p2;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var Path = kotlin_com_squareup_okio_okio.$_$.e;
  var getKClass = kotlin_kotlin.$_$.f;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.nb;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Element = kotlin_kotlin.$_$.wb;
  var sortedWith = kotlin_kotlin.$_$.pa;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var Comparator = kotlin_kotlin.$_$.pi;
  var compareValues = kotlin_kotlin.$_$.fb;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var startsWith = kotlin_kotlin.$_$.jh;
  var joinToString = kotlin_kotlin.$_$.y8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var indexOf = kotlin_kotlin.$_$.ug;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var Companion_getInstance = kotlin_com_squareup_okio_okio.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var replace = kotlin_kotlin.$_$.eh;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var toInt = kotlin_kotlin.$_$.yh;
  var toByte = kotlin_kotlin.$_$.ie;
  var NumberFormatException = kotlin_kotlin.$_$.aj;
  var decodeToString = kotlin_kotlin.$_$.kg;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var Enum = kotlin_kotlin.$_$.qi;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var coerceAtMost = kotlin_kotlin.$_$.bf;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var buffer = kotlin_com_squareup_okio_okio.$_$.f;
  var isByteArray = kotlin_kotlin.$_$.kd;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.b;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var emptyMap = kotlin_kotlin.$_$.b8;
  var Long = kotlin_kotlin.$_$.wi;
  var abs = kotlin_kotlin.$_$.ne;
  var toMutableMap = kotlin_kotlin.$_$.bb;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.q1;
  var KtMap = kotlin_kotlin.$_$.o6;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var RuntimeException = kotlin_kotlin.$_$.dj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var Exception = kotlin_kotlin.$_$.si;
  var first = kotlin_kotlin.$_$.l8;
  var toLong = kotlin_kotlin.$_$.je;
  var substringAfterLast = kotlin_kotlin.$_$.lh;
  var isBlank = kotlin_kotlin.$_$.vg;
  var substringBeforeLast = kotlin_kotlin.$_$.nh;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var FileSystem = kotlin_com_squareup_okio_okio.$_$.c;
  var coerceAtLeast = kotlin_kotlin.$_$.we;
  var Companion_getInstance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.j5;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.o5;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var addSuppressed = kotlin_kotlin.$_$.rj;
  var Companion_getInstance_1 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var Companion_getInstance_2 = kotlin_org_jetbrains_skiko_skiko.$_$.i4;
  var coerceAtMost_0 = kotlin_kotlin.$_$.ze;
  var numberToInt = kotlin_kotlin.$_$.de;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var Entry = kotlin_kotlin.$_$.n6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.e1;
  var KtList = kotlin_kotlin.$_$.m6;
  var MutableEntry = kotlin_kotlin.$_$.r6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Builder, 'Builder', Builder_init_$Create$);
  initMetadataForClass(ComponentRegistry, 'ComponentRegistry', ComponentRegistry_init_$Create$);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(Builder_0, 'Builder', Builder_init_$Create$_1);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Extras, 'Extras');
  initMetadataForClass(Builder_1, 'Builder');
  initMetadataForInterface(ImageLoader, 'ImageLoader', VOID, VOID, VOID, [1]);
  initMetadataForLambda(RealImageLoader$execute$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Options, 'Options');
  initMetadataForLambda(RealImageLoader$execute$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RealImageLoader$execute$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($executeCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(RealImageLoader, 'RealImageLoader', VOID, VOID, [ImageLoader], [1, 2]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Uri, 'Uri');
  initMetadataForClass(DataSource, 'DataSource', VOID, Enum);
  initMetadataForClass(DecodeResult, 'DecodeResult');
  initMetadataForObject(DecodeUtils, 'DecodeUtils');
  initMetadataForClass(FileImageSource, 'FileImageSource');
  initMetadataForClass(SourceImageSource, 'SourceImageSource');
  initMetadataForInterface(Factory_0, 'Factory');
  initMetadataForClass(Factory, 'Factory', Factory, VOID, [Factory_0]);
  initMetadataForClass(ByteArrayFetcher, 'ByteArrayFetcher', VOID, VOID, VOID, [0]);
  initMetadataForClass(SourceFetchResult, 'SourceFetchResult');
  initMetadataForClass(ImageFetchResult, 'ImageFetchResult');
  initMetadataForClass(Factory_1, 'Factory', Factory_1, VOID, [Factory_0]);
  initMetadataForClass(FileUriFetcher, 'FileUriFetcher', VOID, VOID, VOID, [0]);
  initMetadataForClass(ExecuteResult, 'ExecuteResult');
  initMetadataForCompanion(Companion_1);
  initMetadataForLambda(EngineInterceptor$intercept$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(EngineInterceptor$execute$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($interceptCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($executeCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($fetchCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($decodeCOROUTINE$5, CoroutineImpl);
  initMetadataForClass(EngineInterceptor, 'EngineInterceptor', VOID, VOID, VOID, [1, 4, 5, 6]);
  initMetadataForCoroutine($proceedCOROUTINE$6, CoroutineImpl);
  initMetadataForClass(RealInterceptorChain, 'RealInterceptorChain', VOID, VOID, VOID, [0]);
  initMetadataForInterface(Keyer, 'Keyer');
  initMetadataForClass(FileUriKeyer, 'FileUriKeyer', FileUriKeyer, VOID, [Keyer]);
  initMetadataForClass(UriKeyer, 'UriKeyer', UriKeyer, VOID, [Keyer]);
  initMetadataForInterface(Mapper, 'Mapper');
  initMetadataForClass(PathMapper, 'PathMapper', PathMapper, VOID, [Mapper]);
  initMetadataForClass(StringMapper, 'StringMapper', StringMapper, VOID, [Mapper]);
  initMetadataForClass(Key_0, 'Key');
  initMetadataForClass(Value, 'Value');
  initMetadataForClass(Builder_2, 'Builder', Builder_2);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(MemoryCacheService, 'MemoryCacheService');
  initMetadataForClass(RealMemoryCache, 'RealMemoryCache');
  initMetadataForClass(InternalValue, 'InternalValue');
  initMetadataForClass(LruCache, 'LruCache');
  initMetadataForClass(RealStrongMemoryCache$cache$1, VOID, VOID, LruCache);
  initMetadataForClass(RealStrongMemoryCache, 'RealStrongMemoryCache');
  initMetadataForClass(EmptyStrongMemoryCache, 'EmptyStrongMemoryCache');
  initMetadataForClass(InternalValue_0, 'InternalValue');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(RealWeakMemoryCache, 'RealWeakMemoryCache', RealWeakMemoryCache);
  initMetadataForClass(EmptyWeakMemoryCache, 'EmptyWeakMemoryCache', EmptyWeakMemoryCache);
  initMetadataForClass(CachePolicy, 'CachePolicy', VOID, Enum);
  initMetadataForClass(OneShotDisposable, 'OneShotDisposable');
  initMetadataForCompanion(Companion_4);
  function onStart(request) {
  }
  function onCancel(request) {
  }
  function onError(request, result) {
  }
  function onSuccess(request, result) {
  }
  initMetadataForInterface(Listener, 'Listener');
  initMetadataForClass(Defined, 'Defined');
  initMetadataForClass(Defaults, 'Defaults', Defaults);
  initMetadataForClass(Builder_3, 'Builder');
  initMetadataForClass(ImageRequest, 'ImageRequest');
  initMetadataForClass(ErrorResult, 'ErrorResult');
  initMetadataForClass(SuccessResult, 'SuccessResult');
  initMetadataForObject(NullRequestData, 'NullRequestData');
  initMetadataForClass(NullRequestDataException, 'NullRequestDataException', NullRequestDataException, RuntimeException);
  initMetadataForClass(Options_0, 'Options');
  function assertActive() {
  }
  function start() {
  }
  function awaitStarted($completion) {
    return Unit_instance;
  }
  function complete() {
  }
  initMetadataForInterface(RequestDelegate, 'RequestDelegate', VOID, VOID, VOID, [0]);
  initMetadataForClass(BaseRequestDelegate, 'BaseRequestDelegate', VOID, VOID, [RequestDelegate], [0]);
  initMetadataForClass(Pixels, 'Pixels');
  initMetadataForObject(Undefined, 'Undefined');
  initMetadataForClass(Precision, 'Precision', VOID, Enum);
  initMetadataForClass(RealSizeResolver, 'RealSizeResolver', VOID, VOID, VOID, [0]);
  initMetadataForClass(Scale, 'Scale', VOID, Enum);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Size, 'Size');
  initMetadataForCompanion(Companion_6);
  function onStart_0(placeholder) {
  }
  function onError_0(error) {
  }
  function onSuccess_0(result) {
  }
  initMetadataForInterface(Target, 'Target');
  function priority() {
    return 0;
  }
  initMetadataForInterface(FetcherServiceLoaderTarget, 'FetcherServiceLoaderTarget');
  function priority_0() {
    return 0;
  }
  initMetadataForInterface(DecoderServiceLoaderTarget, 'DecoderServiceLoaderTarget');
  initMetadataForClass(Level, 'Level', VOID, Enum);
  initMetadataForObject(MimeTypeMap, 'MimeTypeMap');
  initMetadataForObject(ThrowingFileSystem, 'ThrowingFileSystem', VOID, FileSystem);
  initMetadataForClass(WeakReference, 'WeakReference');
  initMetadataForInterface(Factory_2, 'Factory');
  initMetadataForClass(sam$coil3_EventListener_Factory$0, 'sam$coil3_EventListener_Factory$0', VOID, VOID, [Factory_2, FunctionAdapter]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(EventListener, 'EventListener', VOID, VOID, [Listener]);
  initMetadataForClass(EventListener$Companion$NONE$1, VOID, VOID, EventListener);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(BitmapImage, 'BitmapImage');
  initMetadataForClass(PlatformContext, 'PlatformContext');
  initMetadataForClass(PlatformContext$Companion$INSTANCE$1, VOID, VOID, PlatformContext);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Factory_3, 'Factory', Factory_3);
  initMetadataForClass(SkiaImageDecoder, 'SkiaImageDecoder', VOID, VOID, VOID, [0]);
  initMetadataForClass(NonAndroidRequestService, 'NonAndroidRequestService');
  initMetadataForClass(NoopSystemCallbacks, 'NoopSystemCallbacks', NoopSystemCallbacks);
  initMetadataForObject(ServiceLoaderComponentRegistry, 'ServiceLoaderComponentRegistry');
  initMetadataForClass(ImmutableEntry, 'ImmutableEntry', VOID, VOID, [Entry]);
  initMetadataForClass(ImmutableMap, 'ImmutableMap', VOID, VOID, [KtMap]);
  initMetadataForClass(ImmutableIterator, 'ImmutableIterator');
  initMetadataForClass(ImmutableListIterator, 'ImmutableListIterator');
  initMetadataForClass(ImmutableList, 'ImmutableList', VOID, VOID, [KtList]);
  initMetadataForClass(MutableEntry_0, 'MutableEntry', VOID, VOID, [MutableEntry]);
  initMetadataForClass(LruMutableMap_0, 'LruMutableMap', VOID, VOID, [KtMutableMap]);
  //endregion
  function Builder_init_$Init$($this) {
    Builder.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.bh5_1 = ArrayList_init_$Create$();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.ch5_1 = ArrayList_init_$Create$();
    var tmp_1 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.dh5_1 = ArrayList_init_$Create$();
    var tmp_2 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.eh5_1 = ArrayList_init_$Create$();
    var tmp_3 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.fh5_1 = ArrayList_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(registry, $this) {
    Builder.call($this);
    $this.bh5_1 = toMutableList(registry.gh5_1);
    $this.ch5_1 = toMutableList(registry.hh5_1);
    $this.dh5_1 = toMutableList(registry.ih5_1);
    var tmp = $this;
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = registry.nh5();
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'coil3.Builder.<init>.<anonymous>' call
      var tmp$ret$1 = ComponentRegistry$Builder$_init_$lambda_dk7m6y(item);
      destination.e(tmp$ret$1);
    }
    tmp.eh5_1 = destination;
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mapTo' call
    var this_1 = registry.oh5();
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.g();
    while (tmp0_iterator_0.h()) {
      var item_0 = tmp0_iterator_0.i();
      // Inline function 'coil3.Builder.<init>.<anonymous>' call
      var tmp$ret$4 = ComponentRegistry$Builder$_init_$lambda_dk7m6y_0(item_0);
      destination_0.e(tmp$ret$4);
    }
    tmp_0.fh5_1 = destination_0;
    return $this;
  }
  function Builder_init_$Create$_0(registry) {
    return Builder_init_$Init$_0(registry, objectCreate(protoOf(Builder)));
  }
  function ComponentRegistry$Builder$_init_$lambda_dk7m6y($it) {
    return function () {
      return listOf($it);
    };
  }
  function ComponentRegistry$Builder$_init_$lambda_dk7m6y_0($it) {
    return function () {
      return listOf($it);
    };
  }
  function ComponentRegistry$Builder$add$lambda($factory, $type) {
    return function () {
      return listOf(to($factory, $type));
    };
  }
  function ComponentRegistry$Builder$add$lambda_0($factory) {
    return function () {
      return listOf($factory);
    };
  }
  function ComponentRegistry_init_$Init$($this) {
    ComponentRegistry.call($this, emptyList(), emptyList(), emptyList(), emptyList(), emptyList());
    return $this;
  }
  function ComponentRegistry_init_$Create$() {
    return ComponentRegistry_init_$Init$(objectCreate(protoOf(ComponentRegistry)));
  }
  protoOf(Builder).ph5 = function (interceptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.bh5_1.e(interceptor);
    return this;
  };
  protoOf(Builder).qh5 = function (mapper, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.ch5_1;
    var element = to(mapper, type);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).rh5 = function (keyer, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.dh5_1;
    var element = to(keyer, type);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).sh5 = function (factory, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.eh5_1;
    var element = ComponentRegistry$Builder$add$lambda(factory, type);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).th5 = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.addFetcherFactories.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.eh5_1.e(factory);
    return this;
  };
  protoOf(Builder).uh5 = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.fh5_1;
    var element = ComponentRegistry$Builder$add$lambda_0(factory);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).vh5 = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.addDecoderFactories.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.fh5_1.e(factory);
    return this;
  };
  protoOf(Builder).c2o = function () {
    return new ComponentRegistry(toImmutableList(this.bh5_1), toImmutableList(this.ch5_1), toImmutableList(this.dh5_1), toImmutableList(this.eh5_1), toImmutableList(this.fh5_1));
  };
  function Builder() {
  }
  function ComponentRegistry$fetcherFactories$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      // Inline function 'coil3.util.flatMapIndices' call
      var this_0 = this$0.jh5_1;
      // Inline function 'kotlin.collections.mutableListOf' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'coil3.ComponentRegistry.fetcherFactories$delegate.<anonymous>.<anonymous>' call
          var elements = this_0.o(i)();
          addAll(destination, elements);
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.ComponentRegistry.fetcherFactories$delegate.<anonymous>.<anonymous>' call
      this$0.jh5_1 = emptyList();
      return destination;
    };
  }
  function ComponentRegistry$decoderFactories$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      // Inline function 'coil3.util.flatMapIndices' call
      var this_0 = this$0.kh5_1;
      // Inline function 'kotlin.collections.mutableListOf' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'coil3.ComponentRegistry.decoderFactories$delegate.<anonymous>.<anonymous>' call
          var elements = this_0.o(i)();
          addAll(destination, elements);
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.ComponentRegistry.decoderFactories$delegate.<anonymous>.<anonymous>' call
      this$0.kh5_1 = emptyList();
      return destination;
    };
  }
  function ComponentRegistry(interceptors, mappers, keyers, lazyFetcherFactories, lazyDecoderFactories) {
    this.gh5_1 = interceptors;
    this.hh5_1 = mappers;
    this.ih5_1 = keyers;
    this.jh5_1 = lazyFetcherFactories;
    this.kh5_1 = lazyDecoderFactories;
    var tmp = this;
    tmp.lh5_1 = lazy(ComponentRegistry$fetcherFactories$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.mh5_1 = lazy(ComponentRegistry$decoderFactories$delegate$lambda(this));
  }
  protoOf(ComponentRegistry).nh5 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lh5_1;
    fetcherFactories$factory();
    return this_0.w();
  };
  protoOf(ComponentRegistry).oh5 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mh5_1;
    decoderFactories$factory();
    return this_0.w();
  };
  protoOf(ComponentRegistry).wh5 = function (data, options) {
    var mappedData = data;
    // Inline function 'coil3.util.forEachIndices' call
    var this_0 = this.hh5_1;
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.ComponentRegistry.map.<anonymous>' call
        var destruct = this_0.o(i);
        var mapper = destruct.gb();
        var type = destruct.hb();
        if (type.lb(mappedData)) {
          var tmp0_safe_receiver = (isInterface(mapper, Mapper) ? mapper : THROW_CCE()).xh5(mappedData, options);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            mappedData = tmp0_safe_receiver;
          }
        }
      }
       while (inductionVariable <= last);
    return mappedData;
  };
  protoOf(ComponentRegistry).yh5 = function (data, options) {
    // Inline function 'coil3.util.forEachIndices' call
    var this_0 = this.ih5_1;
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.ComponentRegistry.key.<anonymous>' call
        var destruct = this_0.o(i);
        var keyer = destruct.gb();
        var type = destruct.hb();
        if (type.lb(data)) {
          var tmp0_safe_receiver = (isInterface(keyer, Keyer) ? keyer : THROW_CCE()).zh5(data, options);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            return tmp0_safe_receiver;
          }
        }
      }
       while (inductionVariable <= last);
    return null;
  };
  protoOf(ComponentRegistry).ah6 = function (data, options, imageLoader, startIndex) {
    var inductionVariable = startIndex;
    var last = this.nh5().j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var _destruct__k2r9zo = this.nh5().o(index);
        var factory = _destruct__k2r9zo.gb();
        var type = _destruct__k2r9zo.hb();
        if (type.lb(data)) {
          var fetcher = (isInterface(factory, Factory_0) ? factory : THROW_CCE()).bh6(data, options, imageLoader);
          if (!(fetcher == null))
            return to(fetcher, index);
        }
      }
       while (inductionVariable < last);
    return null;
  };
  protoOf(ComponentRegistry).ch6 = function (result, options, imageLoader, startIndex) {
    var inductionVariable = startIndex;
    var last = this.oh5().j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var factory = this.oh5().o(index);
        var decoder = factory.dh6(result, options, imageLoader);
        if (!(decoder == null))
          return to(decoder, index);
      }
       while (inductionVariable < last);
    return null;
  };
  protoOf(ComponentRegistry).eh6 = function () {
    return Builder_init_$Create$_0(this);
  };
  function fetcherFactories$factory() {
    return getPropertyCallableRef('fetcherFactories', 1, KProperty1, function (receiver) {
      return receiver.nh5();
    }, null);
  }
  function decoderFactories$factory() {
    return getPropertyCallableRef('decoderFactories', 1, KProperty1, function (receiver) {
      return receiver.oh5();
    }, null);
  }
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_3() {
    return Companion_instance_0;
  }
  function Builder_init_$Init$_1($this) {
    Builder_0.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.fh6_1 = LinkedHashMap_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$_1() {
    return Builder_init_$Init$_1(objectCreate(protoOf(Builder_0)));
  }
  function Key(default_0) {
    this.gh6_1 = default_0;
  }
  protoOf(Builder_0).hh6 = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.set.<anonymous>' call
    if (!(value == null)) {
      // Inline function 'kotlin.collections.set' call
      this.fh6_1.f2(key, value);
    } else {
      // Inline function 'kotlin.collections.minusAssign' call
      this.fh6_1.g2(key);
    }
    return this;
  };
  protoOf(Builder_0).c2o = function () {
    return new Extras(toImmutableMap(this.fh6_1));
  };
  function Builder_0() {
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.ih6_1 = Builder_init_$Create$_1().c2o();
  }
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function Extras(data) {
    Companion_getInstance_4();
    this.jh6_1 = data;
  }
  protoOf(Extras).kh6 = function (key) {
    var tmp = this.jh6_1.n2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(Extras).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Extras))
      return false;
    if (!equals(this.jh6_1, other.jh6_1))
      return false;
    return true;
  };
  protoOf(Extras).hashCode = function () {
    return hashCode(this.jh6_1);
  };
  protoOf(Extras).toString = function () {
    return 'Extras(data=' + toString(this.jh6_1) + ')';
  };
  function getOrDefault(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.kh6(key);
    return tmp0_elvis_lhs == null ? key.gh6_1 : tmp0_elvis_lhs;
  }
  function getExtra(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.uh6_1.kh6(key);
    return tmp0_elvis_lhs == null ? key.gh6_1 : tmp0_elvis_lhs;
  }
  function getExtra_0(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.sh7_1.kh6(key);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.uh7_1.ih8_1.kh6(key) : tmp0_elvis_lhs;
    return tmp1_elvis_lhs == null ? key.gh6_1 : tmp1_elvis_lhs;
  }
  function Builder_init_$Init$_2(context, $this) {
    Builder_1.call($this);
    $this.jh8_1 = get_application(context);
    $this.kh8_1 = Companion_getInstance_8().rh8_1;
    $this.lh8_1 = null;
    $this.mh8_1 = null;
    $this.nh8_1 = null;
    $this.oh8_1 = null;
    $this.ph8_1 = null;
    $this.qh8_1 = Builder_init_$Create$_1();
    return $this;
  }
  function Builder_init_$Create$_2(context) {
    return Builder_init_$Init$_2(context, objectCreate(protoOf(Builder_1)));
  }
  function ImageLoader$Builder$build$lambda(this$0) {
    return function () {
      return (new Builder_2()).vh8(this$0.jh8_1).c2o();
    };
  }
  function ImageLoader$Builder$build$lambda_0() {
    return singletonDiskCache();
  }
  protoOf(Builder_1).c2o = function () {
    var tmp = this.kh8_1.wh8(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, this.qh8_1.c2o());
    var tmp0_elvis_lhs = this.lh8_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      tmp_0 = lazy(ImageLoader$Builder$build$lambda(this));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    var tmp1_elvis_lhs = this.mh8_1;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      tmp_2 = lazy(ImageLoader$Builder$build$lambda_0);
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    var tmp2_elvis_lhs = this.nh8_1;
    var tmp_4 = tmp2_elvis_lhs == null ? Companion_getInstance_11().xh8_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.oh8_1;
    var options = new Options(this.jh8_1, tmp, tmp_1, tmp_3, tmp_4, tmp3_elvis_lhs == null ? ComponentRegistry_init_$Create$() : tmp3_elvis_lhs, this.ph8_1);
    return new RealImageLoader(options);
  };
  function Builder_1() {
  }
  function ImageLoader() {
  }
  function RealImageLoader$execute$slambda$slambda(this$0, $request, resultContinuation) {
    this.lh9_1 = this$0;
    this.mh9_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda$slambda).oh9 = function ($this$async, $completion) {
    var tmp = this.f1x($this$async, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RealImageLoader$execute$slambda$slambda).ha = function (p1, $completion) {
    return this.oh9((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = execute(this.lh9_1, this.mh9_1, 1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda$slambda).f1x = function ($this$async, completion) {
    var i = new RealImageLoader$execute$slambda$slambda(this.lh9_1, this.mh9_1, completion);
    i.nh9_1 = $this$async;
    return i;
  };
  function RealImageLoader$execute$slambda$slambda_0(this$0, $request, resultContinuation) {
    var i = new RealImageLoader$execute$slambda$slambda(this$0, $request, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.oh9($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function execute($this, initialRequest, type, $completion) {
    var tmp = new $executeCOROUTINE$1($this, initialRequest, type, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function onSuccess_1($this, result, target, eventListener) {
    var request = result.jha_1;
    var dataSource = result.kha_1;
    var tmp0_safe_receiver = $this.wha_1.vha_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var level = Level_Info_getInstance();
      if (tmp0_safe_receiver.fhb().v2(level) <= 0) {
        // Inline function 'coil3.RealImageLoader.onSuccess.<anonymous>' call
        var tmp$ret$0 = get_emoji(dataSource) + ' Successful (' + dataSource.t2_1 + ') - ' + toString(request.wh6_1);
        tmp0_safe_receiver.ehb(tag, level, tmp$ret$0, null);
      }
    }
    // Inline function 'coil3.transition' call
    if (target == null)
      null;
    else {
      target.ghb(result.iha_1);
    }
    eventListener.hhb(request, result);
    var tmp1_safe_receiver = request.yh6_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.hhb(request, result);
    }
  }
  function onError_1($this, result, target, eventListener) {
    var request = result.jhb_1;
    var tmp0_safe_receiver = $this.wha_1.vha_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var throwable = result.khb_1;
      if (tmp0_safe_receiver.fhb().v2(Level_Error_getInstance()) <= 0) {
        var tmp = Level_Error_getInstance();
        // Inline function 'coil3.RealImageLoader.onError.<anonymous>' call
        var tmp$ret$0 = '\uD83D\uDEA8 Failed - ' + toString(request.wh6_1);
        tmp0_safe_receiver.ehb(tag, tmp, tmp$ret$0, throwable);
      }
    }
    // Inline function 'coil3.transition' call
    if (target == null)
      null;
    else {
      target.lhb(result.ihb_1);
    }
    eventListener.mhb(request, result);
    var tmp1_safe_receiver = request.yh6_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.mhb(request, result);
    }
  }
  function onCancel_0($this, request, eventListener) {
    var tmp0_safe_receiver = $this.wha_1.vha_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var level = Level_Info_getInstance();
      if (tmp0_safe_receiver.fhb().v2(level) <= 0) {
        // Inline function 'coil3.RealImageLoader.onCancel.<anonymous>' call
        var tmp$ret$0 = '\uD83C\uDFD7 Cancelled - ' + toString(request.wh6_1);
        tmp0_safe_receiver.ehb(tag, level, tmp$ret$0, null);
      }
    }
    eventListener.nhb(request);
    var tmp1_safe_receiver = request.yh6_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.nhb(request);
    }
  }
  function Options(application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger) {
    this.pha_1 = application;
    this.qha_1 = defaults;
    this.rha_1 = memoryCacheLazy;
    this.sha_1 = diskCacheLazy;
    this.tha_1 = eventListenerFactory;
    this.uha_1 = componentRegistry;
    this.vha_1 = logger;
  }
  protoOf(Options).toString = function () {
    return 'Options(application=' + toString(this.pha_1) + ', defaults=' + this.qha_1.toString() + ', memoryCacheLazy=' + toString(this.rha_1) + ', diskCacheLazy=' + toString(this.sha_1) + ', eventListenerFactory=' + toString(this.tha_1) + ', componentRegistry=' + toString(this.uha_1) + ', logger=' + toString_0(this.vha_1) + ')';
  };
  protoOf(Options).hashCode = function () {
    var result = hashCode(this.pha_1);
    result = imul(result, 31) + this.qha_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.rha_1) | 0;
    result = imul(result, 31) + hashCode(this.sha_1) | 0;
    result = imul(result, 31) + hashCode(this.tha_1) | 0;
    result = imul(result, 31) + hashCode(this.uha_1) | 0;
    result = imul(result, 31) + (this.vha_1 == null ? 0 : hashCode(this.vha_1)) | 0;
    return result;
  };
  protoOf(Options).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options))
      return false;
    var tmp0_other_with_cast = other instanceof Options ? other : THROW_CCE();
    if (!equals(this.pha_1, tmp0_other_with_cast.pha_1))
      return false;
    if (!this.qha_1.equals(tmp0_other_with_cast.qha_1))
      return false;
    if (!equals(this.rha_1, tmp0_other_with_cast.rha_1))
      return false;
    if (!equals(this.sha_1, tmp0_other_with_cast.sha_1))
      return false;
    if (!equals(this.tha_1, tmp0_other_with_cast.tha_1))
      return false;
    if (!equals(this.uha_1, tmp0_other_with_cast.uha_1))
      return false;
    if (!equals(this.vha_1, tmp0_other_with_cast.vha_1))
      return false;
    return true;
  };
  function RealImageLoader$execute$slambda($request, this$0, resultContinuation) {
    this.whb_1 = $request;
    this.xhb_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda).oh9 = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RealImageLoader$execute$slambda).ha = function (p1, $completion) {
    return this.oh9((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var tmp_1 = Dispatchers_getInstance().n1g().h1g();
            tmp_0.zhb_1 = async(this.yhb_1, tmp_1, VOID, RealImageLoader$execute$slambda$slambda_0(this.xhb_1, this.whb_1, null));
            this.n9_1 = 1;
            suspendResult = getDisposable(this.whb_1, this.zhb_1).w1a().r17(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new RealImageLoader$execute$slambda(this.whb_1, this.xhb_1, completion);
    i.yhb_1 = $this$coroutineScope;
    return i;
  };
  function RealImageLoader$execute$slambda_0($request, this$0, resultContinuation) {
    var i = new RealImageLoader$execute$slambda($request, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.oh9($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RealImageLoader$execute$slambda_1($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation) {
    this.ihc_1 = $request;
    this.jhc_1 = this$0;
    this.khc_1 = $size;
    this.lhc_1 = $eventListener;
    this.mhc_1 = $cachedPlaceholder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda_1).oh9 = function ($this$withContext, $completion) {
    var tmp = this.f1x($this$withContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RealImageLoader$execute$slambda_1).ha = function (p1, $completion) {
    return this.oh9((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = (new RealInterceptorChain(this.ihc_1, this.jhc_1.chb_1.gh5_1, 0, this.ihc_1, this.khc_1, this.lhc_1, !(this.mhc_1 == null))).vhc(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda_1).f1x = function ($this$withContext, completion) {
    var i = new RealImageLoader$execute$slambda_1(this.ihc_1, this.jhc_1, this.khc_1, this.lhc_1, this.mhc_1, completion);
    i.nhc_1 = $this$withContext;
    return i;
  };
  function RealImageLoader$execute$slambda_2($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation) {
    var i = new RealImageLoader$execute$slambda_1($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.oh9($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ehd_1 = _this__u8e3s4;
    this.fhd_1 = request;
  }
  protoOf($executeCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (needsExecuteOnMainDispatcher(this.fhd_1)) {
              this.n9_1 = 2;
              suspendResult = coroutineScope(RealImageLoader$execute$slambda_0(this.fhd_1, this.ehd_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = execute(this.ehd_1, this.fhd_1, 1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            return suspendResult;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $executeCOROUTINE$1(_this__u8e3s4, initialRequest, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xh9_1 = _this__u8e3s4;
    this.yh9_1 = initialRequest;
    this.zh9_1 = type;
  }
  protoOf($executeCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 11;
            var tmp_0 = this;
            var this_0 = this.xh9_1.zha_1.ghd(this.yh9_1, get_job(this.t9()), this.zh9_1 === 0);
            this_0.hhd();
            tmp_0.aha_1 = this_0;
            this.bha_1 = this.xh9_1.zha_1.ihd(this.yh9_1);
            this.cha_1 = this.xh9_1.wha_1.tha_1.jhd(this.bha_1);
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.o9_1 = 10;
            this.o9_1 = 7;
            if (equals(this.bha_1.wh6_1, NullRequestData_instance)) {
              throw new NullRequestDataException();
            }

            this.aha_1.l44();
            if (this.zh9_1 === 0) {
              this.n9_1 = 3;
              suspendResult = this.aha_1.khd(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            var tmp_1 = this;
            var tmp0_safe_receiver = this.bha_1.lh7_1;
            var tmp_2;
            if (tmp0_safe_receiver == null) {
              tmp_2 = null;
            } else {
              var tmp0_safe_receiver_0 = this.xh9_1.ah9();
              var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.lhd(tmp0_safe_receiver);
              tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.mhd_1;
            }

            tmp_1.fha_1 = tmp_2;
            var tmp1_safe_receiver_0 = this.bha_1.xh6_1;
            if (tmp1_safe_receiver_0 == null)
              null;
            else {
              var tmp2_elvis_lhs = this.fha_1;
              tmp1_safe_receiver_0.phd(tmp2_elvis_lhs == null ? this.bha_1.ohd() : tmp2_elvis_lhs);
            }

            this.cha_1.qhd(this.bha_1);
            var tmp3_safe_receiver = this.bha_1.yh6_1;
            if (tmp3_safe_receiver == null)
              null;
            else {
              tmp3_safe_receiver.qhd(this.bha_1);
            }

            this.gha_1 = this.bha_1.ph7_1;
            this.cha_1.rhd(this.bha_1, this.gha_1);
            this.n9_1 = 5;
            suspendResult = this.gha_1.shd(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.hha_1 = suspendResult;
            this.cha_1.thd(this.bha_1, this.hha_1);
            this.n9_1 = 6;
            suspendResult = withContext(this.bha_1.fh7_1, RealImageLoader$execute$slambda_2(this.bha_1, this.xh9_1, this.hha_1, this.cha_1, this.fha_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var result = suspendResult;
            if (result instanceof SuccessResult) {
              onSuccess_1(this.xh9_1, result, this.bha_1.xh6_1, this.cha_1);
            } else {
              if (result instanceof ErrorResult) {
                onError_1(this.xh9_1, result, this.bha_1.xh6_1, this.cha_1);
              } else {
                noWhenBranchMatchedException();
              }
            }

            this.eha_1 = result;
            this.o9_1 = 11;
            this.n9_1 = 8;
            var tmp_3 = this;
            continue $sm;
          case 7:
            this.o9_1 = 10;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var throwable = this.q9_1;
              if (throwable instanceof CancellationException) {
                onCancel_0(this.xh9_1, this.bha_1, this.cha_1);
                throw throwable;
              } else {
                var result_0 = ErrorResult_0(this.bha_1, throwable);
                onError_1(this.xh9_1, result_0, this.bha_1.xh6_1, this.cha_1);
                this.eha_1 = result_0;
                this.o9_1 = 11;
                this.n9_1 = 8;
                continue $sm;
              }
            } else {
              throw this.q9_1;
            }

          case 8:
            var tmp_5 = this.eha_1;
            this.o9_1 = 11;
            this.aha_1.uhd();
            return tmp_5;
          case 9:
            this.dha_1 = Unit_instance;
            this.o9_1 = 11;
            this.n9_1 = 12;
            continue $sm;
          case 10:
            this.o9_1 = 11;
            var t = this.q9_1;
            this.aha_1.uhd();
            throw t;
          case 11:
            throw this.q9_1;
          case 12:
            this.o9_1 = 11;
            this.aha_1.uhd();
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 11) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function RealImageLoader(options) {
    this.wha_1 = options;
    this.xha_1 = CoroutineScope_1(this.wha_1.vha_1);
    this.yha_1 = SystemCallbacks(this);
    this.zha_1 = RequestService(this, this.yha_1, this.wha_1.vha_1);
    this.ahb_1 = this.wha_1.rha_1;
    this.bhb_1 = this.wha_1.sha_1;
    this.chb_1 = addCommonComponents(addAppleComponents(addJvmComponents(addAndroidComponents(addServiceLoaderComponents(this.wha_1.uha_1.eh6(), this.wha_1), this.wha_1), this.wha_1), this.wha_1)).ph5(new EngineInterceptor(this, this.yha_1, this.zha_1, this.wha_1.vha_1)).c2o();
    this.dhb_1 = atomic$boolean$1(false);
  }
  protoOf(RealImageLoader).yh8 = function () {
    return this.wha_1.qha_1;
  };
  protoOf(RealImageLoader).ah9 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ahb_1;
    memoryCache$factory();
    return this_0.w();
  };
  protoOf(RealImageLoader).bh9 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.bhb_1;
    diskCache$factory();
    return this_0.w();
  };
  protoOf(RealImageLoader).zh8 = function () {
    return this.chb_1;
  };
  protoOf(RealImageLoader).ch9 = function (request, $completion) {
    var tmp = new $executeCOROUTINE$0(this, request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function CoroutineScope_1(logger) {
    var tmp = SupervisorJob().hj(Dispatchers_getInstance().n1g().h1g());
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new _no_name_provided__qut3iv(logger);
    var context = tmp.hj(tmp$ret$0);
    return CoroutineScope_0(context);
  }
  function addCommonComponents(_this__u8e3s4) {
    // Inline function 'coil3.Builder.add' call
    // Inline function 'coil3.Builder.add' call
    // Inline function 'coil3.Builder.add' call
    // Inline function 'coil3.Builder.add' call
    // Inline function 'coil3.Builder.add' call
    // Inline function 'coil3.Builder.add' call
    var mapper = new StringMapper();
    var this_0 = _this__u8e3s4.qh5(mapper, PrimitiveClasses_getInstance().qc());
    var mapper_0 = new PathMapper();
    var this_1 = this_0.qh5(mapper_0, getKClass(Path));
    var keyer = new FileUriKeyer();
    var this_2 = this_1.rh5(keyer, getKClass(Uri));
    var keyer_0 = new UriKeyer();
    var this_3 = this_2.rh5(keyer_0, getKClass(Uri));
    var factory = new Factory_1();
    var this_4 = this_3.sh5(factory, getKClass(Uri));
    var factory_0 = new Factory();
    return this_4.sh5(factory_0, PrimitiveClasses_getInstance().uc());
  }
  function addServiceLoaderComponents(_this__u8e3s4, options) {
    if (get_serviceLoaderEnabled(options)) {
      _this__u8e3s4.th5(addServiceLoaderComponents$lambda);
      _this__u8e3s4.vh5(addServiceLoaderComponents$lambda_0);
    }
    return _this__u8e3s4;
  }
  function _no_name_provided__qut3iv($logger) {
    this.whd_1 = $logger;
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).z1b = function (context, exception) {
    var tmp0_safe_receiver = this.whd_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      log(tmp0_safe_receiver, 'RealImageLoader', exception);
    }
    return Unit_instance;
  };
  function addServiceLoaderComponents$lambda() {
    // Inline function 'coil3.util.mapNotNullIndices' call
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = ServiceLoaderComponentRegistry_getInstance().ahe();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = addServiceLoaderComponents$lambda$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var this_1 = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_1.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
          var target = this_1.o(i);
          if (!isInterface(target, FetcherServiceLoaderTarget))
            THROW_CCE();
          var tmp0_elvis_lhs = target.bhe();
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$3 = null;
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var factory = tmp_0;
          var tmp1_elvis_lhs = target.che();
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            tmp$ret$3 = null;
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var type = tmp_1;
          tmp$ret$3 = to(factory, type);
        }
        var value = tmp$ret$3;
        if (!(value == null)) {
          // Inline function 'kotlin.collections.plusAssign' call
          destination.e(value);
        }
      }
       while (inductionVariable <= last);
    return destination;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.dhe_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.dhe_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.dhe_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.s3(), other.s3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function addServiceLoaderComponents$lambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp = b.ehe();
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.ehe();
    return compareValues(tmp, tmp$ret$1);
  }
  function addServiceLoaderComponents$lambda_0() {
    // Inline function 'coil3.util.mapNotNullIndices' call
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = ServiceLoaderComponentRegistry_getInstance().fhe();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = addServiceLoaderComponents$lambda$lambda_0;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var this_1 = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_1.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
        var value = this_1.o(i).bhe();
        if (!(value == null)) {
          // Inline function 'kotlin.collections.plusAssign' call
          destination.e(value);
        }
      }
       while (inductionVariable <= last);
    return destination;
  }
  function addServiceLoaderComponents$lambda$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp = b.ehe();
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.ehe();
    return compareValues(tmp, tmp$ret$1);
  }
  function memoryCache$factory() {
    return getPropertyCallableRef('memoryCache', 1, KProperty1, function (receiver) {
      return receiver.ah9();
    }, null);
  }
  function diskCache$factory() {
    return getPropertyCallableRef('diskCache', 1, KProperty1, function (receiver) {
      return receiver.bh9();
    }, null);
  }
  function Uri(data, separator, scheme, authority, path, query, fragment) {
    this.ghe_1 = data;
    this.hhe_1 = separator;
    this.ihe_1 = scheme;
    this.jhe_1 = authority;
    this.khe_1 = path;
    this.lhe_1 = query;
    this.mhe_1 = fragment;
  }
  protoOf(Uri).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof Uri) {
      tmp = other.ghe_1 === this.ghe_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Uri).hashCode = function () {
    return getStringHashCode(this.ghe_1);
  };
  protoOf(Uri).toString = function () {
    return this.ghe_1;
  };
  function get_filePath(_this__u8e3s4) {
    var pathSegments = get_pathSegments(_this__u8e3s4);
    if (pathSegments.q()) {
      return null;
    } else {
      var prefix = startsWith(ensureNotNull(_this__u8e3s4.khe_1), _this__u8e3s4.hhe_1) ? _this__u8e3s4.hhe_1 : '';
      var tmp0_separator = _this__u8e3s4.hhe_1;
      return joinToString(pathSegments, tmp0_separator, prefix);
    }
  }
  function get_pathSegments(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.khe_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var path = tmp;
    // Inline function 'kotlin.collections.mutableListOf' call
    var segments = ArrayList_init_$Create$();
    var index = -1;
    while (index < path.length) {
      var startIndex = index + 1 | 0;
      index = indexOf(path, _Char___init__impl__6a9atx(47), startIndex);
      if (index === -1) {
        index = path.length;
      }
      // Inline function 'kotlin.text.substring' call
      var endIndex = index;
      // Inline function 'kotlin.js.asDynamic' call
      var segment = path.substring(startIndex, endIndex);
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(segment) > 0) {
        // Inline function 'kotlin.collections.plusAssign' call
        segments.e(segment);
      }
    }
    return segments;
  }
  function Uri_0(scheme, authority, path, query, fragment, separator) {
    scheme = scheme === VOID ? null : scheme;
    authority = authority === VOID ? null : authority;
    path = path === VOID ? null : path;
    query = query === VOID ? null : query;
    fragment = fragment === VOID ? null : fragment;
    separator = separator === VOID ? Companion_getInstance().dh2_1 : separator;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(scheme == null) || !(authority == null) || !(path == null) || !(query == null) || !(fragment == null))) {
      // Inline function 'coil3.Uri.<anonymous>' call
      var message = 'At least one of scheme, authority, path, query, or fragment must be non-null.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new Uri(buildData(scheme, authority, path, query, fragment), separator, scheme, authority, path, query, fragment);
  }
  function toUri(_this__u8e3s4, separator) {
    separator = separator === VOID ? Companion_getInstance().dh2_1 : separator;
    var data = _this__u8e3s4;
    if (!(separator === '/')) {
      data = replace(data, separator, '/');
    }
    return parseUri(data, _this__u8e3s4, separator);
  }
  function buildData(scheme, authority, path, query, fragment) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.buildData.<anonymous>' call
    if (!(scheme == null)) {
      this_0.p8(scheme);
      this_0.q8(_Char___init__impl__6a9atx(58));
    }
    if (!(authority == null)) {
      this_0.p8('//');
      this_0.p8(authority);
    }
    if (!(path == null)) {
      this_0.p8(path);
    }
    if (!(query == null)) {
      this_0.q8(_Char___init__impl__6a9atx(63));
      this_0.p8(query);
    }
    if (!(fragment == null)) {
      this_0.q8(_Char___init__impl__6a9atx(35));
      this_0.p8(fragment);
    }
    return this_0.toString();
  }
  function parseUri(data, original, separator) {
    var openScheme = true;
    var schemeEndIndex = -1;
    var authorityStartIndex = -1;
    var pathStartIndex = -1;
    var queryStartIndex = -1;
    var fragmentStartIndex = -1;
    var index = 0;
    while (index < data.length) {
      var tmp0_subject = charSequenceGet(data, index);
      if (tmp0_subject === _Char___init__impl__6a9atx(58)) {
        if (openScheme && queryStartIndex === -1 && fragmentStartIndex === -1) {
          if ((index + 2 | 0) < original.length && charSequenceGet(original, index + 1 | 0) === _Char___init__impl__6a9atx(47) && charSequenceGet(original, index + 2 | 0) === _Char___init__impl__6a9atx(47)) {
            openScheme = false;
            schemeEndIndex = index;
            authorityStartIndex = index + 3 | 0;
            index = index + 2 | 0;
          } else if (data === original) {
            schemeEndIndex = index;
            authorityStartIndex = index + 1 | 0;
            pathStartIndex = index + 1 | 0;
            index = index + 1 | 0;
          }
        }
      } else if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
        if (pathStartIndex === -1 && queryStartIndex === -1 && fragmentStartIndex === -1) {
          openScheme = false;
          pathStartIndex = authorityStartIndex === -1 ? 0 : index;
        }
      } else if (tmp0_subject === _Char___init__impl__6a9atx(63)) {
        if (queryStartIndex === -1 && fragmentStartIndex === -1) {
          queryStartIndex = index + 1 | 0;
        }
      } else if (tmp0_subject === _Char___init__impl__6a9atx(35)) {
        if (fragmentStartIndex === -1) {
          fragmentStartIndex = index + 1 | 0;
        }
      }
      index = index + 1 | 0;
    }
    var scheme = null;
    var authority = null;
    var path = null;
    var query = null;
    var fragment = null;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fragmentStartIndex === -1 ? 2147483647 : fragmentStartIndex - 1 | 0;
    var b = data.length;
    var queryEndIndex = Math.min(a, b);
    // Inline function 'kotlin.comparisons.minOf' call
    var a_0 = queryStartIndex === -1 ? 2147483647 : queryStartIndex - 1 | 0;
    var pathEndIndex = Math.min(a_0, queryEndIndex);
    if (!(authorityStartIndex === -1)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = schemeEndIndex;
      // Inline function 'kotlin.js.asDynamic' call
      scheme = data.substring(0, endIndex);
      // Inline function 'kotlin.comparisons.minOf' call
      var a_1 = pathStartIndex === -1 ? 2147483647 : pathStartIndex;
      var authorityEndIndex = Math.min(a_1, pathEndIndex);
      // Inline function 'kotlin.text.substring' call
      var startIndex = authorityStartIndex;
      // Inline function 'kotlin.js.asDynamic' call
      authority = data.substring(startIndex, authorityEndIndex);
    }
    if (!(pathStartIndex === -1)) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = pathStartIndex;
      // Inline function 'kotlin.js.asDynamic' call
      path = data.substring(startIndex_0, pathEndIndex);
    }
    if (!(queryStartIndex === -1)) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_1 = queryStartIndex;
      // Inline function 'kotlin.js.asDynamic' call
      query = data.substring(startIndex_1, queryEndIndex);
    }
    if (!(fragmentStartIndex === -1)) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_2 = fragmentStartIndex;
      var endIndex_0 = data.length;
      // Inline function 'kotlin.js.asDynamic' call
      fragment = data.substring(startIndex_2, endIndex_0);
    }
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_2 = get_length(scheme);
    var b_0 = get_length(authority);
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_3 = get_length(path);
    var b_1 = get_length(query);
    var c = get_length(fragment);
    var c_0 = Math.max(a_3, b_1, c);
    var b_2 = Math.max(a_2, b_0, c_0) - 2 | 0;
    var maxLength = Math.max(0, b_2);
    var bytes = new Int8Array(maxLength);
    var tmp1_safe_receiver = scheme;
    var tmp = tmp1_safe_receiver == null ? null : percentDecode(tmp1_safe_receiver, bytes);
    var tmp2_safe_receiver = authority;
    var tmp_0 = tmp2_safe_receiver == null ? null : percentDecode(tmp2_safe_receiver, bytes);
    var tmp3_safe_receiver = path;
    var tmp_1 = tmp3_safe_receiver == null ? null : percentDecode(tmp3_safe_receiver, bytes);
    var tmp4_safe_receiver = query;
    var tmp_2 = tmp4_safe_receiver == null ? null : percentDecode(tmp4_safe_receiver, bytes);
    var tmp5_safe_receiver = fragment;
    return new Uri(data, separator, tmp, tmp_0, tmp_1, tmp_2, tmp5_safe_receiver == null ? null : percentDecode(tmp5_safe_receiver, bytes));
  }
  function get_length(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.length;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  function percentDecode(_this__u8e3s4, bytes) {
    var size = 0;
    var index = 0;
    var length = _this__u8e3s4.length;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = length - 2 | 0;
    var searchLength = Math.max(0, b);
    $l$loop: while (true) {
      if (index >= searchLength) {
        if (index === size) {
          return _this__u8e3s4;
        } else if (index >= length) {
          return decodeToString(bytes, VOID, size);
        }
      } else if (charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(37)) {
        try {
          // Inline function 'kotlin.text.substring' call
          var startIndex = index + 1 | 0;
          var endIndex = index + 3 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var hex = _this__u8e3s4.substring(startIndex, endIndex);
          bytes[size] = toByte(toInt(hex, 16));
          size = size + 1 | 0;
          index = index + 3 | 0;
          continue $l$loop;
        } catch ($p) {
          if ($p instanceof NumberFormatException) {
            var _unused_var__etf5q3 = $p;
          } else {
            throw $p;
          }
        }
      }
      var tmp = size;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(_this__u8e3s4, index);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_0);
      bytes[tmp] = toByte(tmp$ret$3);
      size = size + 1 | 0;
      index = index + 1 | 0;
    }
  }
  var DataSource_MEMORY_CACHE_instance;
  var DataSource_MEMORY_instance;
  var DataSource_DISK_instance;
  var DataSource_NETWORK_instance;
  var DataSource_entriesInitialized;
  function DataSource_initEntries() {
    if (DataSource_entriesInitialized)
      return Unit_instance;
    DataSource_entriesInitialized = true;
    DataSource_MEMORY_CACHE_instance = new DataSource('MEMORY_CACHE', 0);
    DataSource_MEMORY_instance = new DataSource('MEMORY', 1);
    DataSource_DISK_instance = new DataSource('DISK', 2);
    DataSource_NETWORK_instance = new DataSource('NETWORK', 3);
  }
  function DataSource(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DataSource_MEMORY_CACHE_getInstance() {
    DataSource_initEntries();
    return DataSource_MEMORY_CACHE_instance;
  }
  function DataSource_MEMORY_getInstance() {
    DataSource_initEntries();
    return DataSource_MEMORY_instance;
  }
  function DataSource_DISK_getInstance() {
    DataSource_initEntries();
    return DataSource_DISK_instance;
  }
  function DataSource_NETWORK_getInstance() {
    DataSource_initEntries();
    return DataSource_NETWORK_instance;
  }
  function DecodeResult(image, isSampled) {
    this.nhe_1 = image;
    this.ohe_1 = isSampled;
  }
  protoOf(DecodeResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeResult))
      return false;
    if (!equals(this.nhe_1, other.nhe_1))
      return false;
    if (!(this.ohe_1 === other.ohe_1))
      return false;
    return true;
  };
  protoOf(DecodeResult).hashCode = function () {
    var result = hashCode(this.nhe_1);
    result = imul(result, 31) + getBooleanHashCode(this.ohe_1) | 0;
    return result;
  };
  protoOf(DecodeResult).toString = function () {
    return 'DecodeResult(image=' + toString(this.nhe_1) + ', isSampled=' + this.ohe_1 + ')';
  };
  function toPx(_this__u8e3s4, $this, scale) {
    // Inline function 'coil3.size.pxOrElse' call
    var tmp;
    if (_this__u8e3s4 instanceof Pixels) {
      tmp = _Pixels___get_px__impl__uix9dv(_this__u8e3s4.phe_1);
    } else {
      // Inline function 'coil3.decode.DecodeUtils.toPx.<anonymous>' call
      var tmp_0;
      switch (scale.u2_1) {
        case 0:
          tmp_0 = -2147483648;
          break;
        case 1:
          tmp_0 = 2147483647;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function DecodeUtils() {
  }
  protoOf(DecodeUtils).qhe = function (srcWidth, srcHeight, dstWidth, dstHeight, scale) {
    var widthPercent = dstWidth / srcWidth;
    var heightPercent = dstHeight / srcHeight;
    var tmp;
    switch (scale.u2_1) {
      case 0:
        // Inline function 'kotlin.comparisons.maxOf' call

        tmp = Math.max(widthPercent, heightPercent);
        break;
      case 1:
        // Inline function 'kotlin.comparisons.minOf' call

        tmp = Math.min(widthPercent, heightPercent);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(DecodeUtils).rhe = function (srcWidth, srcHeight, targetSize, scale, maxSize) {
    var dstWidth;
    var dstHeight;
    if (get_isOriginal(targetSize)) {
      dstWidth = srcWidth;
      dstHeight = srcHeight;
    } else {
      dstWidth = toPx(targetSize.she_1, this, scale);
      dstHeight = toPx(targetSize.the_1, this, scale);
    }
    var tmp;
    var tmp_0 = maxSize.she_1;
    if (tmp_0 instanceof Pixels) {
      tmp = !isMinOrMax(dstWidth);
    } else {
      tmp = false;
    }
    if (tmp) {
      dstWidth = coerceAtMost(dstWidth, _Pixels___get_px__impl__uix9dv(maxSize.she_1.phe_1));
    }
    var tmp_1;
    var tmp_2 = maxSize.the_1;
    if (tmp_2 instanceof Pixels) {
      tmp_1 = !isMinOrMax(dstHeight);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      dstHeight = coerceAtMost(dstHeight, _Pixels___get_px__impl__uix9dv(maxSize.the_1.phe_1));
    }
    return _IntPair___init__impl__vp9xsg_0(dstWidth, dstHeight);
  };
  var DecodeUtils_instance;
  function DecodeUtils_getInstance() {
    return DecodeUtils_instance;
  }
  function assertNotClosed($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.ahf_1) {
      // Inline function 'coil3.decode.FileImageSource.assertNotClosed.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function FileImageSource(file, fileSystem, diskCacheKey, closeable, metadata) {
    this.uhe_1 = file;
    this.vhe_1 = fileSystem;
    this.whe_1 = diskCacheKey;
    this.xhe_1 = closeable;
    this.yhe_1 = metadata;
    this.zhe_1 = new Object();
    this.ahf_1 = false;
    this.bhf_1 = null;
  }
  protoOf(FileImageSource).chf = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.zhe_1;
    assertNotClosed(this);
    var tmp0_safe_receiver = this.bhf_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    // Inline function 'kotlin.also' call
    var this_0 = buffer(this.vhe_1.sh2(this.uhe_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.decode.FileImageSource.source.<anonymous>.<anonymous>' call
    this.bhf_1 = this_0;
    return this_0;
  };
  protoOf(FileImageSource).l4 = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.zhe_1;
    this.ahf_1 = true;
    var tmp0_safe_receiver = this.bhf_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      closeQuietly_0(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.xhe_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      closeQuietly(tmp1_safe_receiver);
    }
    return Unit_instance;
  };
  function ImageSource(source, fileSystem, metadata) {
    metadata = metadata === VOID ? null : metadata;
    return new SourceImageSource(source, fileSystem, metadata);
  }
  function ImageSource_0(file, fileSystem, diskCacheKey, closeable, metadata) {
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    closeable = closeable === VOID ? null : closeable;
    metadata = metadata === VOID ? null : metadata;
    return new FileImageSource(file, fileSystem, diskCacheKey, closeable, metadata);
  }
  function assertNotClosed_0($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.ghf_1) {
      // Inline function 'coil3.decode.SourceImageSource.assertNotClosed.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function close$delete(receiver, p0) {
    receiver.vh2(p0);
  }
  function SourceImageSource(source, fileSystem, metadata) {
    this.dhf_1 = fileSystem;
    this.ehf_1 = metadata;
    this.fhf_1 = new Object();
    this.ghf_1 = false;
    this.hhf_1 = source;
    this.ihf_1 = null;
  }
  protoOf(SourceImageSource).chf = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.fhf_1;
    assertNotClosed_0(this);
    var tmp0_safe_receiver = this.hhf_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    // Inline function 'kotlin.also' call
    var this_0 = buffer(this.dhf_1.sh2(ensureNotNull(this.ihf_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.decode.SourceImageSource.source.<anonymous>.<anonymous>' call
    this.hhf_1 = this_0;
    return this_0;
  };
  protoOf(SourceImageSource).l4 = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.fhf_1;
    this.ghf_1 = true;
    var tmp0_safe_receiver = this.hhf_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      closeQuietly_0(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.ihf_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp1_let_receiver = this.dhf_1;
      // Inline function 'kotlin.contracts.contract' call
      close$delete(tmp1_let_receiver, tmp1_safe_receiver);
    }
    return Unit_instance;
  };
  function Factory() {
  }
  protoOf(Factory).jhf = function (data, options, imageLoader) {
    return new ByteArrayFetcher(data, options);
  };
  protoOf(Factory).bh6 = function (data, options, imageLoader) {
    return this.jhf(isByteArray(data) ? data : THROW_CCE(), options, imageLoader);
  };
  function ByteArrayFetcher(byteArray, options) {
    this.khf_1 = byteArray;
    this.lhf_1 = options;
  }
  protoOf(ByteArrayFetcher).mhf = function ($completion) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.fetch.ByteArrayFetcher.fetch.<anonymous>' call
    this_0.jh4(this.khf_1);
    return new SourceFetchResult(ImageSource(this_0, this.lhf_1.qh6_1), null, DataSource_MEMORY_getInstance());
  };
  protoOf(ByteArrayFetcher).nhf = function ($completion) {
    return this.mhf($completion);
  };
  function SourceFetchResult(source, mimeType, dataSource) {
    this.ohf_1 = source;
    this.phf_1 = mimeType;
    this.qhf_1 = dataSource;
  }
  protoOf(SourceFetchResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SourceFetchResult))
      return false;
    if (!equals(this.ohf_1, other.ohf_1))
      return false;
    if (!(this.phf_1 == other.phf_1))
      return false;
    if (!this.qhf_1.equals(other.qhf_1))
      return false;
    return true;
  };
  protoOf(SourceFetchResult).hashCode = function () {
    var result = hashCode(this.ohf_1);
    result = imul(result, 31) + (this.phf_1 == null ? 0 : getStringHashCode(this.phf_1)) | 0;
    result = imul(result, 31) + this.qhf_1.hashCode() | 0;
    return result;
  };
  protoOf(SourceFetchResult).toString = function () {
    return 'SourceFetchResult(source=' + toString(this.ohf_1) + ', mimeType=' + this.phf_1 + ', dataSource=' + this.qhf_1.toString() + ')';
  };
  function ImageFetchResult() {
  }
  function Factory_0() {
  }
  function Factory_1() {
  }
  protoOf(Factory_1).rhf = function (data, options, imageLoader) {
    if (!isFileUri(data))
      return null;
    return new FileUriFetcher(data, options);
  };
  protoOf(Factory_1).bh6 = function (data, options, imageLoader) {
    return this.rhf(data instanceof Uri ? data : THROW_CCE(), options, imageLoader);
  };
  function FileUriFetcher(uri, options) {
    this.shf_1 = uri;
    this.thf_1 = options;
  }
  protoOf(FileUriFetcher).mhf = function ($completion) {
    var tmp = Companion_getInstance();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = get_filePath(this.shf_1);
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'coil3.fetch.FileUriFetcher.fetch.<anonymous>' call
        var message = 'filePath == null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var path = tmp.qh2(tmp$ret$1);
    return new SourceFetchResult(ImageSource_0(path, this.thf_1.qh6_1), MimeTypeMap_instance.uhf(get_extension(path)), DataSource_DISK_getInstance());
  };
  protoOf(FileUriFetcher).nhf = function ($completion) {
    return this.mhf($completion);
  };
  function get_serviceLoaderEnabledKey() {
    _init_properties_imageLoaders_kt__fgbxt1();
    return serviceLoaderEnabledKey;
  }
  var serviceLoaderEnabledKey;
  function get_serviceLoaderEnabled(_this__u8e3s4) {
    _init_properties_imageLoaders_kt__fgbxt1();
    return getOrDefault(_this__u8e3s4.qha_1.ih8_1, get_serviceLoaderEnabledKey());
  }
  var properties_initialized_imageLoaders_kt_u99cbr;
  function _init_properties_imageLoaders_kt__fgbxt1() {
    if (!properties_initialized_imageLoaders_kt_u99cbr) {
      properties_initialized_imageLoaders_kt_u99cbr = true;
      serviceLoaderEnabledKey = new Key(true);
    }
  }
  function execute_0($this, request, mappedData, options, eventListener, $completion) {
    var tmp = new $executeCOROUTINE$3($this, request, mappedData, options, eventListener, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function fetch($this, components, request, mappedData, options, eventListener, $completion) {
    var tmp = new $fetchCOROUTINE$4($this, components, request, mappedData, options, eventListener, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function decode($this, fetchResult, components, request, mappedData, options, eventListener, $completion) {
    var tmp = new $decodeCOROUTINE$5($this, fetchResult, components, request, mappedData, options, eventListener, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function ExecuteResult(image, isSampled, dataSource, diskCacheKey) {
    this.chi_1 = image;
    this.dhi_1 = isSampled;
    this.ehi_1 = dataSource;
    this.fhi_1 = diskCacheKey;
  }
  protoOf(ExecuteResult).toString = function () {
    return 'ExecuteResult(image=' + toString(this.chi_1) + ', isSampled=' + this.dhi_1 + ', dataSource=' + this.ehi_1.toString() + ', diskCacheKey=' + this.fhi_1 + ')';
  };
  protoOf(ExecuteResult).hashCode = function () {
    var result = hashCode(this.chi_1);
    result = imul(result, 31) + getBooleanHashCode(this.dhi_1) | 0;
    result = imul(result, 31) + this.ehi_1.hashCode() | 0;
    result = imul(result, 31) + (this.fhi_1 == null ? 0 : getStringHashCode(this.fhi_1)) | 0;
    return result;
  };
  protoOf(ExecuteResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExecuteResult))
      return false;
    var tmp0_other_with_cast = other instanceof ExecuteResult ? other : THROW_CCE();
    if (!equals(this.chi_1, tmp0_other_with_cast.chi_1))
      return false;
    if (!(this.dhi_1 === tmp0_other_with_cast.dhi_1))
      return false;
    if (!this.ehi_1.equals(tmp0_other_with_cast.ehi_1))
      return false;
    if (!(this.fhi_1 == tmp0_other_with_cast.fhi_1))
      return false;
    return true;
  };
  function Companion_1() {
    this.ghi_1 = 'EngineInterceptor';
  }
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function EngineInterceptor$intercept$slambda(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation) {
    this.phi_1 = this$0;
    this.qhi_1 = $request;
    this.rhi_1 = $mappedData;
    this.shi_1 = $options;
    this.thi_1 = $eventListener;
    this.uhi_1 = $cacheKey;
    this.vhi_1 = $chain;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(EngineInterceptor$intercept$slambda).xhi = function ($this$withContext, $completion) {
    var tmp = this.f1x($this$withContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(EngineInterceptor$intercept$slambda).ha = function (p1, $completion) {
    return this.xhi((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(EngineInterceptor$intercept$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = execute_0(this.phi_1, this.qhi_1, this.rhi_1, this.shi_1, this.thi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            this.phi_1.zhi_1.dhj();
            var isCached = this.phi_1.chj_1.hhj(this.uhi_1, this.qhi_1, result);
            var this_0 = this.uhi_1;
            var tmp_0;
            if (isCached) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            return new SuccessResult(result.chi_1, this.qhi_1, result.ehi_1, tmp_0, result.fhi_1, result.dhi_1, get_isPlaceholderCached(this.vhi_1));
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(EngineInterceptor$intercept$slambda).f1x = function ($this$withContext, completion) {
    var i = new EngineInterceptor$intercept$slambda(this.phi_1, this.qhi_1, this.rhi_1, this.shi_1, this.thi_1, this.uhi_1, this.vhi_1, completion);
    i.whi_1 = $this$withContext;
    return i;
  };
  function EngineInterceptor$intercept$slambda_0(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation) {
    var i = new EngineInterceptor$intercept$slambda(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.xhi($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function EngineInterceptor$execute$slambda(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation) {
    this.qhj_1 = this$0;
    this.rhj_1 = $fetchResult;
    this.shj_1 = $components;
    this.thj_1 = $request;
    this.uhj_1 = $mappedData;
    this.vhj_1 = $options;
    this.whj_1 = $eventListener;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(EngineInterceptor$execute$slambda).yhj = function ($this$withContext, $completion) {
    var tmp = this.f1x($this$withContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(EngineInterceptor$execute$slambda).ha = function (p1, $completion) {
    return this.yhj((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(EngineInterceptor$execute$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = decode(this.qhj_1, this.rhj_1._v, this.shj_1._v, this.thj_1, this.uhj_1, this.vhj_1._v, this.whj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(EngineInterceptor$execute$slambda).f1x = function ($this$withContext, completion) {
    var i = new EngineInterceptor$execute$slambda(this.qhj_1, this.rhj_1, this.shj_1, this.thj_1, this.uhj_1, this.vhj_1, this.whj_1, completion);
    i.xhj_1 = $this$withContext;
    return i;
  };
  function EngineInterceptor$execute$slambda_0(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation) {
    var i = new EngineInterceptor$execute$slambda(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.yhj($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $interceptCOROUTINE$2(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hhk_1 = _this__u8e3s4;
    this.ihk_1 = chain;
  }
  protoOf($interceptCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            this.jhk_1 = this.ihk_1.tg1();
            this.khk_1 = this.jhk_1.wh6_1;
            this.lhk_1 = this.ihk_1.j();
            this.mhk_1 = get_eventListener(this.ihk_1);
            this.nhk_1 = this.hhk_1.ahj_1.shk(this.jhk_1, this.lhk_1);
            this.ohk_1 = this.nhk_1.nh6_1;
            this.mhk_1.thk(this.jhk_1, this.khk_1);
            this.phk_1 = this.hhk_1.yhi_1.zh8().wh5(this.khk_1, this.nhk_1);
            this.mhk_1.uhk(this.jhk_1, this.phk_1);
            this.qhk_1 = this.hhk_1.chj_1.vhk(this.jhk_1, this.phk_1, this.nhk_1, this.mhk_1);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.qhk_1;
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = this.hhk_1.chj_1.whk(this.jhk_1, tmp0_safe_receiver, this.lhk_1, this.ohk_1);
            }

            tmp_0.rhk_1 = tmp_1;
            if (!(this.rhk_1 == null)) {
              return this.hhk_1.chj_1.xhk(this.ihk_1, this.jhk_1, this.qhk_1, this.rhk_1);
            }

            this.n9_1 = 1;
            suspendResult = withContext(this.jhk_1.gh7_1, EngineInterceptor$intercept$slambda_0(this.hhk_1, this.jhk_1, this.phk_1, this.nhk_1, this.mhk_1, this.qhk_1, this.ihk_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.o9_1 = 3;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof Error) {
              var throwable = this.q9_1;
              if (throwable instanceof CancellationException) {
                throw throwable;
              } else {
                return ErrorResult_0(this.ihk_1.tg1(), throwable);
              }
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $executeCOROUTINE$3(_this__u8e3s4, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dhg_1 = _this__u8e3s4;
    this.ehg_1 = request;
    this.fhg_1 = mappedData;
    this.ghg_1 = options;
    this.hhg_1 = eventListener;
  }
  protoOf($executeCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.ihg_1 = {_v: this.ghg_1};
            this.jhg_1 = {_v: this.dhg_1.yhi_1.zh8()};
            this.khg_1 = {_v: null};
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 7;
            this.ihg_1._v = this.dhg_1.ahj_1.yhk(this.ihg_1._v);
            if (!(this.ehg_1.dh7_1 == null) || !(this.ehg_1.eh7_1 == null)) {
              this.jhg_1._v = addFirst(addFirst_0(this.jhg_1._v.eh6(), this.ehg_1.dh7_1), this.ehg_1.eh7_1).c2o();
            }

            this.n9_1 = 2;
            suspendResult = fetch(this.dhg_1, this.jhg_1._v, this.ehg_1, this.fhg_1, this.ihg_1._v, this.hhg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.mhg_1 = suspendResult;
            this.khg_1._v = this.mhg_1;
            this.nhg_1 = this.khg_1._v;
            var tmp_0 = this.nhg_1;
            if (tmp_0 instanceof SourceFetchResult) {
              this.n9_1 = 3;
              suspendResult = withContext(this.ehg_1.hh7_1, EngineInterceptor$execute$slambda_0(this.dhg_1, this.khg_1, this.jhg_1, this.ehg_1, this.fhg_1, this.ihg_1, this.hhg_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.nhg_1;
              if (tmp_1 instanceof ImageFetchResult) {
                var tmp_2 = this;
                tmp_2.ohg_1 = new ExecuteResult(this.khg_1._v.zhk_1, this.khg_1._v.ahl_1, this.khg_1._v.bhl_1, null);
                this.n9_1 = 4;
                continue $sm;
              } else {
                var tmp_3 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 3:
            this.ohg_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.lhg_1 = this.ohg_1;
            this.o9_1 = 8;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.phg_1 = this.lhg_1;
            this.o9_1 = 8;
            var tmp_4 = this.khg_1._v;
            var tmp1_safe_receiver = tmp_4 instanceof SourceFetchResult ? tmp_4 : null;
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ohf_1;
            if (tmp2_safe_receiver == null)
              null;
            else {
              closeQuietly(tmp2_safe_receiver);
            }

            this.qhg_1 = this.phg_1;
            this.n9_1 = 6;
            suspendResult = transform(this.qhg_1, this.ehg_1, this.ihg_1._v, this.hhg_1, this.dhg_1.bhj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var finalResult = suspendResult;
            prepareToDraw(finalResult.chi_1);
            return finalResult;
          case 7:
            this.o9_1 = 8;
            var t = this.q9_1;
            var tmp_5 = this.khg_1._v;
            var tmp1_safe_receiver_0 = tmp_5 instanceof SourceFetchResult ? tmp_5 : null;
            var tmp2_safe_receiver_0 = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.ohf_1;
            if (tmp2_safe_receiver_0 == null)
              null;
            else {
              closeQuietly(tmp2_safe_receiver_0);
            }

            throw t;
          case 8:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 8) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $fetchCOROUTINE$4(_this__u8e3s4, components, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zhg_1 = _this__u8e3s4;
    this.ahh_1 = components;
    this.bhh_1 = request;
    this.chh_1 = mappedData;
    this.dhh_1 = options;
    this.ehh_1 = eventListener;
  }
  protoOf($fetchCOROUTINE$4).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.ghh_1 = 0;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n9_1 = 7;
              continue $sm;
            }

            this.hhh_1 = this.ahh_1.ah6(this.chh_1, this.dhh_1, this.zhg_1.yhi_1, this.ghh_1);
            l$ret$1: do {
              if (this.hhh_1 == null) {
                var message = 'Unable to create a fetcher that supports: ' + toString(this.chh_1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else {
                break l$ret$1;
              }
            }
             while (false);
            this.ihh_1 = this.hhh_1.eb_1;
            this.ghh_1 = this.hhh_1.fb_1 + 1 | 0;
            this.ehh_1.chl(this.bhh_1, this.ihh_1, this.dhh_1);
            this.n9_1 = 2;
            suspendResult = this.ihh_1.nhf(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            this.o9_1 = 3;
            this.ehh_1.dhl(this.bhh_1, this.ihh_1, this.dhh_1, result);
            this.o9_1 = 6;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.o9_1 = 6;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              var throwable = this.q9_1;
              var tmp0_safe_receiver = result instanceof SourceFetchResult ? result : null;
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ohf_1;
              if (tmp1_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp1_safe_receiver);
              }
              throw throwable;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 6;
            if (!(result == null)) {
              this.fhh_1 = result;
              this.n9_1 = 7;
              continue $sm;
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 5:
            this.n9_1 = 1;
            continue $sm;
          case 6:
            throw this.q9_1;
          case 7:
            return this.fhh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 6) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $decodeCOROUTINE$5(_this__u8e3s4, fetchResult, components, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rhh_1 = _this__u8e3s4;
    this.shh_1 = fetchResult;
    this.thh_1 = components;
    this.uhh_1 = request;
    this.vhh_1 = mappedData;
    this.whh_1 = options;
    this.xhh_1 = eventListener;
  }
  protoOf($decodeCOROUTINE$5).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.zhh_1 = 0;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.ahi_1 = this.thh_1.ch6(this.shh_1, this.whh_1, this.rhh_1.yhi_1, this.zhh_1);
            l$ret$1: do {
              if (this.ahi_1 == null) {
                var message = 'Unable to create a decoder that supports: ' + toString(this.vhh_1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else {
                break l$ret$1;
              }
            }
             while (false);
            this.bhi_1 = this.ahi_1.eb_1;
            this.zhh_1 = this.ahi_1.fb_1 + 1 | 0;
            this.xhh_1.ehl(this.uhh_1, this.bhi_1, this.whh_1);
            this.n9_1 = 2;
            suspendResult = this.bhi_1.fhl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            this.xhh_1.ghl(this.uhh_1, this.bhi_1, this.whh_1, result);
            if (!(result == null)) {
              this.yhh_1 = result;
              this.n9_1 = 4;
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            this.n9_1 = 1;
            continue $sm;
          case 4:
            var tmp_0 = this.shh_1.ohf_1;
            var tmp0_safe_receiver = tmp_0 instanceof FileImageSource ? tmp_0 : null;
            return new ExecuteResult(this.yhh_1.nhe_1, this.yhh_1.ohe_1, this.shh_1.qhf_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.whe_1);
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 5) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function EngineInterceptor(imageLoader, systemCallbacks, requestService, logger) {
    this.yhi_1 = imageLoader;
    this.zhi_1 = systemCallbacks;
    this.ahj_1 = requestService;
    this.bhj_1 = logger;
    this.chj_1 = new MemoryCacheService(this.yhi_1, this.ahj_1, this.bhj_1);
  }
  protoOf(EngineInterceptor).hhl = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$2(this, chain, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function checkRequest($this, request, interceptor) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.vh6_1 === $this.ohc_1.vh6_1)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message = "Interceptor '" + toString(interceptor) + "' cannot modify the request's context.";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(request.wh6_1 === NullRequestData_instance)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_0 = "Interceptor '" + toString(interceptor) + "' cannot set the request's data to null.";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.xh6_1 === $this.ohc_1.xh6_1)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_1 = "Interceptor '" + toString(interceptor) + "' cannot modify the request's target.";
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.ph7_1 === $this.ohc_1.ph7_1)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_2 = "Interceptor '" + toString(interceptor) + "' cannot modify the request's size resolver. " + 'Use `Interceptor.Chain.withSize` instead.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
  }
  function copy($this, index, request, size) {
    return new RealInterceptorChain($this.ohc_1, $this.phc_1, index, request, size, $this.thc_1, $this.uhc_1);
  }
  function copy$default($this, index, request, size, $super) {
    index = index === VOID ? $this.qhc_1 : index;
    request = request === VOID ? $this.rhc_1 : request;
    size = size === VOID ? $this.shc_1 : size;
    return copy($this, index, request, size);
  }
  function $proceedCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qhl_1 = _this__u8e3s4;
  }
  protoOf($proceedCOROUTINE$6).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.rhl_1 = this.qhl_1.phc_1.o(this.qhl_1.qhc_1);
            this.shl_1 = copy$default(this.qhl_1, this.qhl_1.qhc_1 + 1 | 0);
            this.n9_1 = 1;
            suspendResult = this.rhl_1.hhl(this.shl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            checkRequest(this.qhl_1, result.tg1(), this.rhl_1);
            return result;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function RealInterceptorChain(initialRequest, interceptors, index, request, size, eventListener, isPlaceholderCached) {
    this.ohc_1 = initialRequest;
    this.phc_1 = interceptors;
    this.qhc_1 = index;
    this.rhc_1 = request;
    this.shc_1 = size;
    this.thc_1 = eventListener;
    this.uhc_1 = isPlaceholderCached;
  }
  protoOf(RealInterceptorChain).tg1 = function () {
    return this.rhc_1;
  };
  protoOf(RealInterceptorChain).j = function () {
    return this.shc_1;
  };
  protoOf(RealInterceptorChain).vhc = function ($completion) {
    var tmp = new $proceedCOROUTINE$6(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function FileUriKeyer() {
  }
  protoOf(FileUriKeyer).thl = function (data, options) {
    if (isFileUri(data) && get_addLastModifiedToFileCacheKey(options)) {
      var path = get_filePath(data);
      if (!(path == null)) {
        var timestamp = options.qh6_1.rh2(Companion_getInstance().qh2(path)).zhl_1;
        return data.toString() + '-' + toString_0(timestamp);
      }
    }
    return null;
  };
  protoOf(FileUriKeyer).zh5 = function (data, options) {
    return this.thl(data instanceof Uri ? data : THROW_CCE(), options);
  };
  function Keyer() {
  }
  function UriKeyer() {
  }
  protoOf(UriKeyer).thl = function (data, options) {
    return data.toString();
  };
  protoOf(UriKeyer).zh5 = function (data, options) {
    return this.thl(data instanceof Uri ? data : THROW_CCE(), options);
  };
  function Mapper() {
  }
  function PathMapper() {
  }
  protoOf(PathMapper).chm = function (data, options) {
    return Uri_0('file', VOID, data.toString());
  };
  protoOf(PathMapper).xh5 = function (data, options) {
    return this.chm(data instanceof Path ? data : THROW_CCE(), options);
  };
  function StringMapper() {
  }
  protoOf(StringMapper).dhm = function (data, options) {
    return toUri(data);
  };
  protoOf(StringMapper).xh5 = function (data, options) {
    return this.dhm(typeof data === 'string' ? data : THROW_CCE(), options);
  };
  function MemoryCache$Builder$maxSizePercent$lambda($percent, $context) {
    return function () {
      return numberToLong($percent * totalAvailableMemoryBytes($context).r3());
    };
  }
  function Key_0(key, extras) {
    extras = extras === VOID ? emptyMap() : extras;
    this.ehm_1 = key;
    this.fhm_1 = toImmutableMap(extras);
  }
  protoOf(Key_0).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof Key_0) {
      tmp_0 = this.ehm_1 === other.ehm_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.fhm_1, other.fhm_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Key_0).hashCode = function () {
    var result = getStringHashCode(this.ehm_1);
    result = imul(31, result) + hashCode(this.fhm_1) | 0;
    return result;
  };
  protoOf(Key_0).toString = function () {
    return 'Key(key=' + this.ehm_1 + ', extras=' + toString(this.fhm_1) + ')';
  };
  function Value(image, extras) {
    extras = extras === VOID ? emptyMap() : extras;
    this.mhd_1 = image;
    this.nhd_1 = toImmutableMap(extras);
  }
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof Value) {
      tmp_0 = equals(this.mhd_1, other.mhd_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.nhd_1, other.nhd_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Value).hashCode = function () {
    var result = hashCode(this.mhd_1);
    result = imul(31, result) + hashCode(this.nhd_1) | 0;
    return result;
  };
  protoOf(Value).toString = function () {
    return 'Value(image=' + toString(this.mhd_1) + ', extras=' + toString(this.nhd_1) + ')';
  };
  function Builder_2() {
    this.sh8_1 = null;
    this.th8_1 = true;
    this.uh8_1 = true;
  }
  protoOf(Builder_2).ghm = function (context, percent) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.memory.Builder.maxSizePercent.<anonymous>' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= percent ? percent <= 1.0 : false)) {
      // Inline function 'coil3.memory.Builder.maxSizePercent.<anonymous>.<anonymous>' call
      var message = 'percent must be in the range [0.0, 1.0].';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    tmp.sh8_1 = MemoryCache$Builder$maxSizePercent$lambda(percent, context);
    return this;
  };
  protoOf(Builder_2).vh8 = function (context, percent, $super) {
    percent = percent === VOID ? defaultMemoryCacheSizePercent(context) : percent;
    return $super === VOID ? this.ghm(context, percent) : $super.ghm.call(this, context, percent);
  };
  protoOf(Builder_2).c2o = function () {
    var tmp;
    if (this.uh8_1) {
      tmp = new RealWeakMemoryCache();
    } else {
      tmp = new EmptyWeakMemoryCache();
    }
    var weakMemoryCache = tmp;
    var tmp_0;
    if (this.th8_1) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var value = this.sh8_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'coil3.memory.Builder.build.<anonymous>' call
          var message = 'maxSizeBytesFactory == null';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      var maxSizeBytesFactory = tmp$ret$1;
      var maxSizeBytes = maxSizeBytesFactory();
      var tmp_1;
      if (maxSizeBytes.b1(new Long(0, 0)) > 0) {
        tmp_1 = new RealStrongMemoryCache(maxSizeBytes, weakMemoryCache);
      } else {
        tmp_1 = new EmptyStrongMemoryCache(weakMemoryCache);
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = new EmptyStrongMemoryCache(weakMemoryCache);
    }
    var strongMemoryCache = tmp_0;
    return new RealMemoryCache(strongMemoryCache, weakMemoryCache);
  };
  function isCacheValueValidForSize($this, request, cacheKey, cacheValue, size, scale) {
    var cacheKeySize = cacheKey.fhm_1.n2('coil#size');
    if (!(cacheKeySize == null)) {
      if (cacheKeySize === size.toString()) {
        return true;
      } else {
        var tmp0_safe_receiver = $this.ghj_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'coil3.util.log' call
          var tag = 'MemoryCacheService';
          var level = Level_Debug_getInstance();
          if (tmp0_safe_receiver.fhb().v2(level) <= 0) {
            // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
            var tmp$ret$0 = toString(request.wh6_1) + ": Memory cached image's size " + ('(' + cacheKeySize + ') does not exactly match the target size ') + ('(' + size.toString() + ').');
            tmp0_safe_receiver.ehb(tag, level, tmp$ret$0, null);
          }
        }
        return false;
      }
    }
    if (!_get_isSampled__22pfz3(cacheValue, $this) && (get_isOriginal(size) || request.rh7_1.equals(Precision_INEXACT_getInstance()))) {
      return true;
    }
    var srcWidth = cacheValue.mhd_1.f5a();
    var srcHeight = cacheValue.mhd_1.g5a();
    var tmp;
    var tmp_0 = cacheValue.mhd_1;
    if (tmp_0 instanceof BitmapImage) {
      tmp = get_maxBitmapSize(request);
    } else {
      tmp = Companion_getInstance_9().hhm_1;
    }
    var maxSize = tmp;
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'coil3.size.pxOrElse' call
    var this_0 = size.she_1;
    var tmp_1;
    if (this_0 instanceof Pixels) {
      tmp_1 = _Pixels___get_px__impl__uix9dv(this_0.phe_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_1 = 2147483647;
    }
    var a = tmp_1;
    // Inline function 'coil3.size.pxOrElse' call
    var this_1 = maxSize.she_1;
    var tmp_2;
    if (this_1 instanceof Pixels) {
      tmp_2 = _Pixels___get_px__impl__uix9dv(this_1.phe_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_2 = 2147483647;
    }
    var b = tmp_2;
    var dstWidth = Math.min(a, b);
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'coil3.size.pxOrElse' call
    var this_2 = size.the_1;
    var tmp_3;
    if (this_2 instanceof Pixels) {
      tmp_3 = _Pixels___get_px__impl__uix9dv(this_2.phe_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_3 = 2147483647;
    }
    var a_0 = tmp_3;
    // Inline function 'coil3.size.pxOrElse' call
    var this_3 = maxSize.the_1;
    var tmp_4;
    if (this_3 instanceof Pixels) {
      tmp_4 = _Pixels___get_px__impl__uix9dv(this_3.phe_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_4 = 2147483647;
    }
    var b_0 = tmp_4;
    var dstHeight = Math.min(a_0, b_0);
    var multiplier;
    var difference;
    var widthPercent = dstWidth / srcWidth;
    var heightPercent = dstHeight / srcHeight;
    var tmp_5;
    if (!(dstWidth === 2147483647) && !(dstHeight === 2147483647)) {
      tmp_5 = scale;
    } else {
      tmp_5 = Scale_FIT_getInstance();
    }
    switch (tmp_5.u2_1) {
      case 0:
        if (widthPercent > heightPercent) {
          multiplier = widthPercent;
          difference = abs(dstWidth - srcWidth | 0);
        } else {
          multiplier = heightPercent;
          difference = abs(dstHeight - srcHeight | 0);
        }

        break;
      case 1:
        if (widthPercent < heightPercent) {
          multiplier = widthPercent;
          difference = abs(dstWidth - srcWidth | 0);
        } else {
          multiplier = heightPercent;
          difference = abs(dstHeight - srcHeight | 0);
        }

        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    if (difference <= 1) {
      return true;
    }
    switch (request.rh7_1.u2_1) {
      case 0:
        if (multiplier === 1.0) {
          return true;
        } else {
          var tmp3_safe_receiver = $this.ghj_1;
          if (tmp3_safe_receiver == null)
            null;
          else {
            // Inline function 'coil3.util.log' call
            var tag_0 = 'MemoryCacheService';
            var level_0 = Level_Debug_getInstance();
            if (tmp3_safe_receiver.fhb().v2(level_0) <= 0) {
              // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
              var tmp$ret$11 = toString(request.wh6_1) + ": Memory cached image's size " + ('(' + srcWidth + ', ' + srcHeight + ') does not exactly match the target size ') + ('(' + dstWidth + ', ' + dstHeight + ').');
              tmp3_safe_receiver.ehb(tag_0, level_0, tmp$ret$11, null);
            }
          }
          return false;
        }

      case 1:
        if (multiplier <= 1.0) {
          return true;
        } else {
          var tmp4_safe_receiver = $this.ghj_1;
          if (tmp4_safe_receiver == null)
            null;
          else {
            // Inline function 'coil3.util.log' call
            var tag_1 = 'MemoryCacheService';
            var level_1 = Level_Debug_getInstance();
            if (tmp4_safe_receiver.fhb().v2(level_1) <= 0) {
              // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
              var tmp$ret$12 = toString(request.wh6_1) + ": Memory cached image's size " + ('(' + srcWidth + ', ' + srcHeight + ') is smaller than the target size ') + ('(' + dstWidth + ', ' + dstHeight + ').');
              tmp4_safe_receiver.ehb(tag_1, level_1, tmp$ret$12, null);
            }
          }
          return false;
        }

      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function _get_isSampled__22pfz3(_this__u8e3s4, $this) {
    var tmp = _this__u8e3s4.nhd_1.n2('coil#is_sampled');
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  }
  function _get_diskCacheKey__t0sb73(_this__u8e3s4, $this) {
    var tmp = _this__u8e3s4.nhd_1.n2('coil#disk_cache_key');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
  }
  function Companion_2() {
    this.ihm_1 = 'MemoryCacheService';
    this.jhm_1 = 'coil#size';
    this.khm_1 = 'coil#is_sampled';
    this.lhm_1 = 'coil#disk_cache_key';
  }
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function MemoryCacheService(imageLoader, requestService, logger) {
    this.ehj_1 = imageLoader;
    this.fhj_1 = requestService;
    this.ghj_1 = logger;
  }
  protoOf(MemoryCacheService).vhk = function (request, mappedData, options, eventListener) {
    if (!(request.zh6_1 == null)) {
      return new Key_0(request.zh6_1, request.ah7_1);
    }
    eventListener.mhm(request, mappedData);
    var key = this.ehj_1.zh8().yh5(mappedData, options);
    eventListener.nhm(request, key);
    if (key == null) {
      return null;
    }
    var extras = toMutableMap(request.ah7_1);
    if (needsSizeInCacheKey(request)) {
      // Inline function 'kotlin.collections.set' call
      var key_0 = 'coil#size';
      var value = options.mh6_1.toString();
      extras.f2(key_0, value);
    }
    return new Key_0(key, extras);
  };
  protoOf(MemoryCacheService).whk = function (request, cacheKey, size, scale) {
    if (!request.ih7_1.qhm_1)
      return null;
    var tmp0_safe_receiver = this.ehj_1.ah9();
    var cacheValue = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lhd(cacheKey);
    var tmp;
    if (cacheValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'coil3.memory.MemoryCacheService.getCacheValue.<anonymous>' call
      if (this.shm(request, cacheKey, cacheValue, size, scale)) {
        tmp_0 = cacheValue;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MemoryCacheService).shm = function (request, cacheKey, cacheValue, size, scale) {
    if (!this.fhj_1.thm(request, cacheValue)) {
      var tmp0_safe_receiver = this.ghj_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'coil3.util.log' call
        var tag = 'MemoryCacheService';
        var level = Level_Debug_getInstance();
        if (tmp0_safe_receiver.fhb().v2(level) <= 0) {
          // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValid.<anonymous>' call
          var tmp$ret$0 = toString(request.wh6_1) + ': Cached bitmap is hardware-backed, ' + 'which is incompatible with the request.';
          tmp0_safe_receiver.ehb(tag, level, tmp$ret$0, null);
        }
      }
      return false;
    }
    return isCacheValueValidForSize(this, request, cacheKey, cacheValue, size, scale);
  };
  protoOf(MemoryCacheService).hhj = function (cacheKey, request, result) {
    if (cacheKey == null || !request.ih7_1.rhm_1 || !result.chi_1.uhm()) {
      return false;
    }
    var tmp0_elvis_lhs = this.ehj_1.ah9();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var memoryCache = tmp;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var extras = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.set' call
    var key = 'coil#is_sampled';
    var value = result.dhi_1;
    extras.f2(key, value);
    var tmp1_safe_receiver = result.fhi_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var key_0 = 'coil#disk_cache_key';
      extras.f2(key_0, tmp1_safe_receiver);
    }
    memoryCache.vhm(cacheKey, new Value(result.chi_1, extras));
    return true;
  };
  protoOf(MemoryCacheService).xhk = function (chain, request, cacheKey, cacheValue) {
    return new SuccessResult(cacheValue.mhd_1, request, DataSource_MEMORY_CACHE_getInstance(), cacheKey, _get_diskCacheKey__t0sb73(cacheValue, this), _get_isSampled__22pfz3(cacheValue, this), get_isPlaceholderCached(chain));
  };
  function RealMemoryCache(strongMemoryCache, weakMemoryCache) {
    this.whm_1 = strongMemoryCache;
    this.xhm_1 = weakMemoryCache;
    this.yhm_1 = new Object();
  }
  protoOf(RealMemoryCache).lhd = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yhm_1;
    var tmp0_elvis_lhs = this.whm_1.lhd(key);
    var value = tmp0_elvis_lhs == null ? this.xhm_1.lhd(key) : tmp0_elvis_lhs;
    if (!(value == null) && !value.mhd_1.uhm()) {
      this.zhm(key);
    }
    return value;
  };
  protoOf(RealMemoryCache).vhm = function (key, value) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yhm_1;
    var size = value.mhd_1.j();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'coil3.memory.RealMemoryCache.set.<anonymous>.<anonymous>' call
      var message = 'Image size must be non-negative: ' + size.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.whm_1.ahn(key, value.mhd_1, value.nhd_1, size);
    return Unit_instance;
  };
  protoOf(RealMemoryCache).zhm = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yhm_1;
    var removedStrong = this.whm_1.zhm(key);
    var removedWeak = this.xhm_1.zhm(key);
    return removedStrong || removedWeak;
  };
  function InternalValue(image, extras, size) {
    this.bhn_1 = image;
    this.chn_1 = extras;
    this.dhn_1 = size;
  }
  function RealStrongMemoryCache$cache$1($maxSize, this$0) {
    this.hhn_1 = this$0;
    LruCache.call(this, $maxSize);
  }
  protoOf(RealStrongMemoryCache$cache$1).ihn = function (key, value) {
    return value.dhn_1;
  };
  protoOf(RealStrongMemoryCache$cache$1).jhn = function (key, value) {
    var tmp = key instanceof Key_0 ? key : THROW_CCE();
    return this.ihn(tmp, value instanceof InternalValue ? value : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache$cache$1).khn = function (key, oldValue, newValue) {
    return this.hhn_1.lhn_1.ahn(key, oldValue.bhn_1, oldValue.chn_1, oldValue.dhn_1);
  };
  protoOf(RealStrongMemoryCache$cache$1).nhn = function (key, oldValue, newValue) {
    var tmp = key instanceof Key_0 ? key : THROW_CCE();
    var tmp_0 = oldValue instanceof InternalValue ? oldValue : THROW_CCE();
    return this.khn(tmp, tmp_0, (newValue == null ? true : newValue instanceof InternalValue) ? newValue : THROW_CCE());
  };
  function RealStrongMemoryCache(maxSize, weakMemoryCache) {
    this.lhn_1 = weakMemoryCache;
    var tmp = this;
    tmp.mhn_1 = new RealStrongMemoryCache$cache$1(maxSize, this);
  }
  protoOf(RealStrongMemoryCache).uhn = function () {
    return this.mhn_1.ohn_1;
  };
  protoOf(RealStrongMemoryCache).lhd = function (key) {
    var tmp0_safe_receiver = this.mhn_1.yfg(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.memory.RealStrongMemoryCache.get.<anonymous>' call
      tmp = new Value(tmp0_safe_receiver.bhn_1, tmp0_safe_receiver.chn_1);
    }
    return tmp;
  };
  protoOf(RealStrongMemoryCache).ahn = function (key, image, extras, size) {
    if (size.b1(this.uhn()) <= 0) {
      this.mhn_1.rhn(key, new InternalValue(image, extras, size));
    } else {
      this.mhn_1.shn(key);
      this.lhn_1.ahn(key, image, extras, size);
    }
  };
  protoOf(RealStrongMemoryCache).zhm = function (key) {
    return !(this.mhn_1.shn(key) == null);
  };
  function EmptyStrongMemoryCache(weakMemoryCache) {
    this.vhn_1 = weakMemoryCache;
  }
  protoOf(EmptyStrongMemoryCache).lhd = function (key) {
    return null;
  };
  protoOf(EmptyStrongMemoryCache).ahn = function (key, image, extras, size) {
    this.vhn_1.ahn(key, image, extras, size);
  };
  protoOf(EmptyStrongMemoryCache).zhm = function (key) {
    return false;
  };
  function cleanUpIfNecessary($this) {
    var _unary__edvuaz = $this.xhn_1;
    $this.xhn_1 = _unary__edvuaz + 1 | 0;
    if (_unary__edvuaz >= 10) {
      $this.yhn();
    }
  }
  function InternalValue_0(image, extras, size) {
    this.zhn_1 = image;
    this.aho_1 = extras;
    this.bho_1 = size;
  }
  function Companion_3() {
    this.cho_1 = 10;
  }
  var Companion_instance_4;
  function Companion_getInstance_7() {
    return Companion_instance_4;
  }
  function RealWeakMemoryCache() {
    this.whn_1 = LinkedHashMap_init_$Create$();
    this.xhn_1 = 0;
  }
  protoOf(RealWeakMemoryCache).lhd = function (key) {
    var tmp0_elvis_lhs = this.whn_1.n2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var values = tmp;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'coil3.util.firstNotNullOfOrNullIndices' call
      var inductionVariable = 0;
      var last = values.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'coil3.memory.RealWeakMemoryCache.get.<anonymous>' call
          var value = values.o(i);
          var tmp0_safe_receiver = value.zhn_1.zp();
          var tmp_0;
          if (tmp0_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'coil3.memory.RealWeakMemoryCache.get.<anonymous>.<anonymous>' call
            tmp_0 = new Value(tmp0_safe_receiver, value.aho_1);
          }
          var tmp0_safe_receiver_0 = tmp_0;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            tmp$ret$3 = tmp0_safe_receiver_0;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$3 = null;
    }
    var value_0 = tmp$ret$3;
    cleanUpIfNecessary(this);
    return value_0;
  };
  protoOf(RealWeakMemoryCache).ahn = function (key, image, extras, size) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.whn_1;
    var value = this_0.n2(key);
    var tmp;
    if (value == null) {
      // Inline function 'coil3.memory.RealWeakMemoryCache.set.<anonymous>' call
      // Inline function 'kotlin.collections.arrayListOf' call
      var answer = ArrayList_init_$Create$();
      this_0.f2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var values = tmp;
    var newValue = new InternalValue_0(new WeakReference(image), extras, size);
    if (values.q()) {
      // Inline function 'kotlin.collections.plusAssign' call
      values.e(newValue);
    } else {
      var inductionVariable = 0;
      var last = values.j() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop: do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value_0 = values.o(index);
          if (size.b1(value_0.bho_1) >= 0) {
            if (value_0.zhn_1.zp() === image) {
              values.q2(index, newValue);
            } else {
              values.r2(index, newValue);
            }
            break $l$loop;
          }
        }
         while (inductionVariable <= last);
    }
    cleanUpIfNecessary(this);
  };
  protoOf(RealWeakMemoryCache).zhm = function (key) {
    return !(this.whn_1.g2(key) == null);
  };
  protoOf(RealWeakMemoryCache).yhn = function () {
    this.xhn_1 = 0;
    var iterator = this.whn_1.k2().g();
    while (iterator.h()) {
      var list = iterator.i();
      if (list.j() <= 1) {
        var tmp0_safe_receiver = firstOrNull(list);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zhn_1;
        if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zp()) == null) {
          iterator.o4();
        }
      } else {
        // Inline function 'coil3.util.removeIfIndices' call
        var numDeleted = 0;
        var inductionVariable = 0;
        var last = list.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var rawIndex = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var index = rawIndex - numDeleted | 0;
            // Inline function 'coil3.memory.RealWeakMemoryCache.cleanUp.<anonymous>' call
            if (list.o(index).zhn_1.zp() == null) {
              list.s2(index);
              numDeleted = numDeleted + 1 | 0;
            }
          }
           while (inductionVariable <= last);
        if (list.q()) {
          iterator.o4();
        }
      }
    }
  };
  function EmptyWeakMemoryCache() {
  }
  protoOf(EmptyWeakMemoryCache).lhd = function (key) {
    return null;
  };
  protoOf(EmptyWeakMemoryCache).ahn = function (key, image, extras, size) {
  };
  protoOf(EmptyWeakMemoryCache).zhm = function (key) {
    return false;
  };
  var CachePolicy_ENABLED_instance;
  var CachePolicy_READ_ONLY_instance;
  var CachePolicy_WRITE_ONLY_instance;
  var CachePolicy_DISABLED_instance;
  var CachePolicy_entriesInitialized;
  function CachePolicy_initEntries() {
    if (CachePolicy_entriesInitialized)
      return Unit_instance;
    CachePolicy_entriesInitialized = true;
    CachePolicy_ENABLED_instance = new CachePolicy('ENABLED', 0, true, true);
    CachePolicy_READ_ONLY_instance = new CachePolicy('READ_ONLY', 1, true, false);
    CachePolicy_WRITE_ONLY_instance = new CachePolicy('WRITE_ONLY', 2, false, true);
    CachePolicy_DISABLED_instance = new CachePolicy('DISABLED', 3, false, false);
  }
  function CachePolicy(name, ordinal, readEnabled, writeEnabled) {
    Enum.call(this, name, ordinal);
    this.qhm_1 = readEnabled;
    this.rhm_1 = writeEnabled;
  }
  function CachePolicy_ENABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_ENABLED_instance;
  }
  function OneShotDisposable(job) {
    this.eho_1 = job;
  }
  protoOf(OneShotDisposable).w1a = function () {
    return this.eho_1;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    this.rh8_1 = new Defaults();
  }
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function Builder_init_$Init$_3(context, $this) {
    Builder_3.call($this);
    $this.fho_1 = context;
    $this.gho_1 = Companion_getInstance_8().rh8_1;
    $this.hho_1 = null;
    $this.iho_1 = null;
    $this.jho_1 = null;
    $this.kho_1 = null;
    $this.mho_1 = emptyMap();
    $this.nho_1 = null;
    $this.oho_1 = null;
    $this.pho_1 = null;
    $this.qho_1 = null;
    $this.rho_1 = null;
    $this.sho_1 = null;
    $this.tho_1 = null;
    $this.uho_1 = null;
    $this.vho_1 = null;
    $this.who_1 = null;
    $this.xho_1 = null;
    $this.yho_1 = get_EMPTY_IMAGE_FACTORY();
    $this.zho_1 = get_EMPTY_IMAGE_FACTORY();
    $this.ahp_1 = get_EMPTY_IMAGE_FACTORY();
    $this.bhp_1 = null;
    $this.chp_1 = null;
    $this.dhp_1 = null;
    $this.ehp_1 = Companion_getInstance_4().ih6_1;
    return $this;
  }
  function Builder_init_$Create$_3(context) {
    return Builder_init_$Init$_3(context, objectCreate(protoOf(Builder_3)));
  }
  function Builder_init_$Init$_4(request, context, $this) {
    context = context === VOID ? request.vh6_1 : context;
    Builder_3.call($this);
    $this.fho_1 = context;
    $this.gho_1 = request.uh7_1;
    $this.hho_1 = request.wh6_1;
    $this.iho_1 = request.xh6_1;
    $this.jho_1 = request.yh6_1;
    $this.kho_1 = request.zh6_1;
    $this.mho_1 = request.ah7_1;
    $this.nho_1 = request.bh7_1;
    $this.oho_1 = request.th7_1.fhp_1;
    $this.pho_1 = request.dh7_1;
    $this.qho_1 = request.eh7_1;
    $this.rho_1 = request.th7_1.ghp_1;
    $this.sho_1 = request.th7_1.hhp_1;
    $this.tho_1 = request.th7_1.ihp_1;
    $this.uho_1 = request.th7_1.jhp_1;
    $this.vho_1 = request.th7_1.khp_1;
    $this.who_1 = request.th7_1.lhp_1;
    $this.xho_1 = request.lh7_1;
    $this.yho_1 = request.th7_1.mhp_1;
    $this.zho_1 = request.th7_1.nhp_1;
    $this.ahp_1 = request.th7_1.ohp_1;
    $this.bhp_1 = request.th7_1.php_1;
    $this.chp_1 = request.th7_1.qhp_1;
    $this.dhp_1 = request.th7_1.rhp_1;
    $this.ehp_1 = request.sh7_1;
    return $this;
  }
  function Builder_init_$Create$_4(request, context) {
    return Builder_init_$Init$_4(request, context, objectCreate(protoOf(Builder_3)));
  }
  function Listener() {
  }
  function Defined(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision) {
    this.fhp_1 = fileSystem;
    this.ghp_1 = interceptorCoroutineContext;
    this.hhp_1 = fetcherCoroutineContext;
    this.ihp_1 = decoderCoroutineContext;
    this.jhp_1 = memoryCachePolicy;
    this.khp_1 = diskCachePolicy;
    this.lhp_1 = networkCachePolicy;
    this.mhp_1 = placeholderFactory;
    this.nhp_1 = errorFactory;
    this.ohp_1 = fallbackFactory;
    this.php_1 = sizeResolver;
    this.qhp_1 = scale;
    this.rhp_1 = precision;
  }
  protoOf(Defined).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Defined))
      return false;
    if (!equals(this.fhp_1, other.fhp_1))
      return false;
    if (!equals(this.ghp_1, other.ghp_1))
      return false;
    if (!equals(this.hhp_1, other.hhp_1))
      return false;
    if (!equals(this.ihp_1, other.ihp_1))
      return false;
    if (!equals(this.jhp_1, other.jhp_1))
      return false;
    if (!equals(this.khp_1, other.khp_1))
      return false;
    if (!equals(this.lhp_1, other.lhp_1))
      return false;
    if (!equals(this.mhp_1, other.mhp_1))
      return false;
    if (!equals(this.nhp_1, other.nhp_1))
      return false;
    if (!equals(this.ohp_1, other.ohp_1))
      return false;
    if (!equals(this.php_1, other.php_1))
      return false;
    if (!equals(this.qhp_1, other.qhp_1))
      return false;
    if (!equals(this.rhp_1, other.rhp_1))
      return false;
    return true;
  };
  protoOf(Defined).hashCode = function () {
    var result = this.fhp_1 == null ? 0 : hashCode(this.fhp_1);
    result = imul(result, 31) + (this.ghp_1 == null ? 0 : hashCode(this.ghp_1)) | 0;
    result = imul(result, 31) + (this.hhp_1 == null ? 0 : hashCode(this.hhp_1)) | 0;
    result = imul(result, 31) + (this.ihp_1 == null ? 0 : hashCode(this.ihp_1)) | 0;
    result = imul(result, 31) + (this.jhp_1 == null ? 0 : this.jhp_1.hashCode()) | 0;
    result = imul(result, 31) + (this.khp_1 == null ? 0 : this.khp_1.hashCode()) | 0;
    result = imul(result, 31) + (this.lhp_1 == null ? 0 : this.lhp_1.hashCode()) | 0;
    result = imul(result, 31) + (this.mhp_1 == null ? 0 : hashCode(this.mhp_1)) | 0;
    result = imul(result, 31) + (this.nhp_1 == null ? 0 : hashCode(this.nhp_1)) | 0;
    result = imul(result, 31) + (this.ohp_1 == null ? 0 : hashCode(this.ohp_1)) | 0;
    result = imul(result, 31) + (this.php_1 == null ? 0 : hashCode(this.php_1)) | 0;
    result = imul(result, 31) + (this.qhp_1 == null ? 0 : this.qhp_1.hashCode()) | 0;
    result = imul(result, 31) + (this.rhp_1 == null ? 0 : this.rhp_1.hashCode()) | 0;
    return result;
  };
  protoOf(Defined).toString = function () {
    return 'Defined(fileSystem=' + toString_0(this.fhp_1) + ', interceptorCoroutineContext=' + toString_0(this.ghp_1) + ', fetcherCoroutineContext=' + toString_0(this.hhp_1) + ', decoderCoroutineContext=' + toString_0(this.ihp_1) + ', memoryCachePolicy=' + toString_0(this.jhp_1) + ', diskCachePolicy=' + toString_0(this.khp_1) + ', networkCachePolicy=' + toString_0(this.lhp_1) + ', placeholderFactory=' + toString_0(this.mhp_1) + ', errorFactory=' + toString_0(this.nhp_1) + ', fallbackFactory=' + toString_0(this.ohp_1) + ', sizeResolver=' + toString_0(this.php_1) + ', scale=' + toString_0(this.qhp_1) + ', precision=' + toString_0(this.rhp_1) + ')';
  };
  function Defaults(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) {
    Companion_getInstance_8();
    fileSystem = fileSystem === VOID ? defaultFileSystem() : fileSystem;
    interceptorCoroutineContext = interceptorCoroutineContext === VOID ? EmptyCoroutineContext_getInstance() : interceptorCoroutineContext;
    fetcherCoroutineContext = fetcherCoroutineContext === VOID ? ioCoroutineDispatcher() : fetcherCoroutineContext;
    decoderCoroutineContext = decoderCoroutineContext === VOID ? ioCoroutineDispatcher() : decoderCoroutineContext;
    memoryCachePolicy = memoryCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : networkCachePolicy;
    placeholderFactory = placeholderFactory === VOID ? get_EMPTY_IMAGE_FACTORY() : placeholderFactory;
    errorFactory = errorFactory === VOID ? get_EMPTY_IMAGE_FACTORY() : errorFactory;
    fallbackFactory = fallbackFactory === VOID ? get_EMPTY_IMAGE_FACTORY() : fallbackFactory;
    sizeResolver = sizeResolver === VOID ? Companion_getInstance_10().shp_1 : sizeResolver;
    scale = scale === VOID ? Scale_FIT_getInstance() : scale;
    precision = precision === VOID ? Precision_EXACT_getInstance() : precision;
    extras = extras === VOID ? Companion_getInstance_4().ih6_1 : extras;
    this.vh7_1 = fileSystem;
    this.wh7_1 = interceptorCoroutineContext;
    this.xh7_1 = fetcherCoroutineContext;
    this.yh7_1 = decoderCoroutineContext;
    this.zh7_1 = memoryCachePolicy;
    this.ah8_1 = diskCachePolicy;
    this.bh8_1 = networkCachePolicy;
    this.ch8_1 = placeholderFactory;
    this.dh8_1 = errorFactory;
    this.eh8_1 = fallbackFactory;
    this.fh8_1 = sizeResolver;
    this.gh8_1 = scale;
    this.hh8_1 = precision;
    this.ih8_1 = extras;
  }
  protoOf(Defaults).thp = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) {
    return new Defaults(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras);
  };
  protoOf(Defaults).wh8 = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras, $super) {
    fileSystem = fileSystem === VOID ? this.vh7_1 : fileSystem;
    interceptorCoroutineContext = interceptorCoroutineContext === VOID ? this.wh7_1 : interceptorCoroutineContext;
    fetcherCoroutineContext = fetcherCoroutineContext === VOID ? this.xh7_1 : fetcherCoroutineContext;
    decoderCoroutineContext = decoderCoroutineContext === VOID ? this.yh7_1 : decoderCoroutineContext;
    memoryCachePolicy = memoryCachePolicy === VOID ? this.zh7_1 : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? this.ah8_1 : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? this.bh8_1 : networkCachePolicy;
    placeholderFactory = placeholderFactory === VOID ? this.ch8_1 : placeholderFactory;
    errorFactory = errorFactory === VOID ? this.dh8_1 : errorFactory;
    fallbackFactory = fallbackFactory === VOID ? this.eh8_1 : fallbackFactory;
    sizeResolver = sizeResolver === VOID ? this.fh8_1 : sizeResolver;
    scale = scale === VOID ? this.gh8_1 : scale;
    precision = precision === VOID ? this.hh8_1 : precision;
    extras = extras === VOID ? this.ih8_1 : extras;
    return $super === VOID ? this.thp(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) : $super.thp.call(this, fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras);
  };
  protoOf(Defaults).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Defaults))
      return false;
    if (!equals(this.vh7_1, other.vh7_1))
      return false;
    if (!equals(this.wh7_1, other.wh7_1))
      return false;
    if (!equals(this.xh7_1, other.xh7_1))
      return false;
    if (!equals(this.yh7_1, other.yh7_1))
      return false;
    if (!this.zh7_1.equals(other.zh7_1))
      return false;
    if (!this.ah8_1.equals(other.ah8_1))
      return false;
    if (!this.bh8_1.equals(other.bh8_1))
      return false;
    if (!equals(this.ch8_1, other.ch8_1))
      return false;
    if (!equals(this.dh8_1, other.dh8_1))
      return false;
    if (!equals(this.eh8_1, other.eh8_1))
      return false;
    if (!equals(this.fh8_1, other.fh8_1))
      return false;
    if (!this.gh8_1.equals(other.gh8_1))
      return false;
    if (!this.hh8_1.equals(other.hh8_1))
      return false;
    if (!this.ih8_1.equals(other.ih8_1))
      return false;
    return true;
  };
  protoOf(Defaults).hashCode = function () {
    var result = hashCode(this.vh7_1);
    result = imul(result, 31) + hashCode(this.wh7_1) | 0;
    result = imul(result, 31) + hashCode(this.xh7_1) | 0;
    result = imul(result, 31) + hashCode(this.yh7_1) | 0;
    result = imul(result, 31) + this.zh7_1.hashCode() | 0;
    result = imul(result, 31) + this.ah8_1.hashCode() | 0;
    result = imul(result, 31) + this.bh8_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.ch8_1) | 0;
    result = imul(result, 31) + hashCode(this.dh8_1) | 0;
    result = imul(result, 31) + hashCode(this.eh8_1) | 0;
    result = imul(result, 31) + hashCode(this.fh8_1) | 0;
    result = imul(result, 31) + this.gh8_1.hashCode() | 0;
    result = imul(result, 31) + this.hh8_1.hashCode() | 0;
    result = imul(result, 31) + this.ih8_1.hashCode() | 0;
    return result;
  };
  protoOf(Defaults).toString = function () {
    return 'Defaults(fileSystem=' + toString(this.vh7_1) + ', interceptorCoroutineContext=' + toString(this.wh7_1) + ', fetcherCoroutineContext=' + toString(this.xh7_1) + ', decoderCoroutineContext=' + toString(this.yh7_1) + ', memoryCachePolicy=' + this.zh7_1.toString() + ', diskCachePolicy=' + this.ah8_1.toString() + ', networkCachePolicy=' + this.bh8_1.toString() + ', placeholderFactory=' + toString(this.ch8_1) + ', errorFactory=' + toString(this.dh8_1) + ', fallbackFactory=' + toString(this.eh8_1) + ', sizeResolver=' + toString(this.fh8_1) + ', scale=' + this.gh8_1.toString() + ', precision=' + this.hh8_1.toString() + ', extras=' + this.ih8_1.toString() + ')';
  };
  protoOf(Builder_3).uhp = function (data) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.data.<anonymous>' call
    this.hho_1 = data;
    return this;
  };
  protoOf(Builder_3).vhp = function (target) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    this.iho_1 = target;
    return this;
  };
  protoOf(Builder_3).whp = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.coroutineContext.<anonymous>' call
    this.rho_1 = context;
    this.sho_1 = context;
    this.tho_1 = context;
    return this;
  };
  protoOf(Builder_3).xhp = function (resolver) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.size.<anonymous>' call
    this.bhp_1 = resolver;
    return this;
  };
  protoOf(Builder_3).yhp = function (scale) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.scale.<anonymous>' call
    this.chp_1 = scale;
    return this;
  };
  protoOf(Builder_3).zhp = function (precision) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.precision.<anonymous>' call
    this.dhp_1 = precision;
    return this;
  };
  protoOf(Builder_3).ahq = function (defaults) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.defaults.<anonymous>' call
    this.gho_1 = defaults;
    return this;
  };
  protoOf(Builder_3).c2o = function () {
    var tmp27_context = this.fho_1;
    var tmp0_elvis_lhs = this.hho_1;
    var tmp28_data = tmp0_elvis_lhs == null ? NullRequestData_instance : tmp0_elvis_lhs;
    var tmp29_target = this.iho_1;
    var tmp30_listener = this.jho_1;
    var tmp31_memoryCacheKey = this.kho_1;
    var memoryCacheKeyExtras = this.mho_1;
    var tmp;
    if (equals(memoryCacheKeyExtras, this.lho_1)) {
      tmp = toImmutableMap(isInterface(memoryCacheKeyExtras, KtMutableMap) ? memoryCacheKeyExtras : THROW_CCE());
    } else {
      if (isInterface(memoryCacheKeyExtras, KtMap)) {
        tmp = memoryCacheKeyExtras;
      } else {
        throw AssertionError_init_$Create$();
      }
    }
    var tmp_0 = tmp;
    var tmp32_memoryCacheKeyExtras = isInterface(tmp_0, KtMap) ? tmp_0 : THROW_CCE();
    var tmp33_diskCacheKey = this.nho_1;
    var tmp1_elvis_lhs = this.oho_1;
    var tmp34_fileSystem = tmp1_elvis_lhs == null ? this.gho_1.vh7_1 : tmp1_elvis_lhs;
    var tmp35_fetcherFactory = this.pho_1;
    var tmp36_decoderFactory = this.qho_1;
    var tmp2_elvis_lhs = this.uho_1;
    var tmp37_memoryCachePolicy = tmp2_elvis_lhs == null ? this.gho_1.zh7_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.vho_1;
    var tmp38_diskCachePolicy = tmp3_elvis_lhs == null ? this.gho_1.ah8_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = this.who_1;
    var tmp39_networkCachePolicy = tmp4_elvis_lhs == null ? this.gho_1.bh8_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.rho_1;
    var tmp40_interceptorCoroutineContext = tmp5_elvis_lhs == null ? this.gho_1.wh7_1 : tmp5_elvis_lhs;
    var tmp6_elvis_lhs = this.sho_1;
    var tmp41_fetcherCoroutineContext = tmp6_elvis_lhs == null ? this.gho_1.xh7_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = this.tho_1;
    var tmp42_decoderCoroutineContext = tmp7_elvis_lhs == null ? this.gho_1.yh7_1 : tmp7_elvis_lhs;
    var tmp43_placeholderMemoryCacheKey = this.xho_1;
    var tmp8_elvis_lhs = this.yho_1;
    var tmp44_placeholderFactory = tmp8_elvis_lhs == null ? this.gho_1.ch8_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = this.zho_1;
    var tmp45_errorFactory = tmp9_elvis_lhs == null ? this.gho_1.dh8_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = this.ahp_1;
    var tmp46_fallbackFactory = tmp10_elvis_lhs == null ? this.gho_1.eh8_1 : tmp10_elvis_lhs;
    var tmp11_elvis_lhs = this.bhp_1;
    var tmp47_sizeResolver = tmp11_elvis_lhs == null ? this.gho_1.fh8_1 : tmp11_elvis_lhs;
    var tmp12_elvis_lhs = this.chp_1;
    var tmp48_scale = tmp12_elvis_lhs == null ? this.gho_1.gh8_1 : tmp12_elvis_lhs;
    var tmp13_elvis_lhs = this.dhp_1;
    var tmp49_precision = tmp13_elvis_lhs == null ? this.gho_1.hh8_1 : tmp13_elvis_lhs;
    var extras = this.ehp_1;
    var tmp_1;
    if (extras instanceof Builder_0) {
      tmp_1 = extras.c2o();
    } else {
      if (extras instanceof Extras) {
        tmp_1 = extras;
      } else {
        throw AssertionError_init_$Create$();
      }
    }
    var tmp50_extras = tmp_1;
    var tmp14_fileSystem = this.oho_1;
    var tmp15_interceptorCoroutineContext = this.rho_1;
    var tmp16_fetcherCoroutineContext = this.sho_1;
    var tmp17_decoderCoroutineContext = this.tho_1;
    var tmp18_placeholderFactory = this.yho_1;
    var tmp19_errorFactory = this.zho_1;
    var tmp20_fallbackFactory = this.ahp_1;
    var tmp21_memoryCachePolicy = this.uho_1;
    var tmp22_diskCachePolicy = this.vho_1;
    var tmp23_networkCachePolicy = this.who_1;
    var tmp24_sizeResolver = this.bhp_1;
    var tmp25_scale = this.chp_1;
    var tmp26_precision = this.dhp_1;
    var tmp51_defined = new Defined(tmp14_fileSystem, tmp15_interceptorCoroutineContext, tmp16_fetcherCoroutineContext, tmp17_decoderCoroutineContext, tmp21_memoryCachePolicy, tmp22_diskCachePolicy, tmp23_networkCachePolicy, tmp18_placeholderFactory, tmp19_errorFactory, tmp20_fallbackFactory, tmp24_sizeResolver, tmp25_scale, tmp26_precision);
    var tmp52_defaults = this.gho_1;
    return new ImageRequest(tmp27_context, tmp28_data, tmp29_target, tmp30_listener, tmp31_memoryCacheKey, tmp32_memoryCacheKeyExtras, tmp33_diskCacheKey, tmp34_fileSystem, tmp35_fetcherFactory, tmp36_decoderFactory, tmp40_interceptorCoroutineContext, tmp41_fetcherCoroutineContext, tmp42_decoderCoroutineContext, tmp37_memoryCachePolicy, tmp38_diskCachePolicy, tmp39_networkCachePolicy, tmp43_placeholderMemoryCacheKey, tmp44_placeholderFactory, tmp45_errorFactory, tmp46_fallbackFactory, tmp47_sizeResolver, tmp48_scale, tmp49_precision, tmp50_extras, tmp51_defined, tmp52_defaults);
  };
  function Builder_3() {
    this.lho_1 = false;
  }
  function ImageRequest(context, data, target, listener, memoryCacheKey, memoryCacheKeyExtras, diskCacheKey, fileSystem, fetcherFactory, decoderFactory, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderMemoryCacheKey, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras, defined, defaults) {
    this.vh6_1 = context;
    this.wh6_1 = data;
    this.xh6_1 = target;
    this.yh6_1 = listener;
    this.zh6_1 = memoryCacheKey;
    this.ah7_1 = memoryCacheKeyExtras;
    this.bh7_1 = diskCacheKey;
    this.ch7_1 = fileSystem;
    this.dh7_1 = fetcherFactory;
    this.eh7_1 = decoderFactory;
    this.fh7_1 = interceptorCoroutineContext;
    this.gh7_1 = fetcherCoroutineContext;
    this.hh7_1 = decoderCoroutineContext;
    this.ih7_1 = memoryCachePolicy;
    this.jh7_1 = diskCachePolicy;
    this.kh7_1 = networkCachePolicy;
    this.lh7_1 = placeholderMemoryCacheKey;
    this.mh7_1 = placeholderFactory;
    this.nh7_1 = errorFactory;
    this.oh7_1 = fallbackFactory;
    this.ph7_1 = sizeResolver;
    this.qh7_1 = scale;
    this.rh7_1 = precision;
    this.sh7_1 = extras;
    this.th7_1 = defined;
    this.uh7_1 = defaults;
  }
  protoOf(ImageRequest).ohd = function () {
    var tmp0_elvis_lhs = this.mh7_1(this);
    return tmp0_elvis_lhs == null ? this.uh7_1.ch8_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).bhq = function () {
    var tmp0_elvis_lhs = this.nh7_1(this);
    return tmp0_elvis_lhs == null ? this.uh7_1.dh8_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).chq = function () {
    var tmp0_elvis_lhs = this.oh7_1(this);
    return tmp0_elvis_lhs == null ? this.uh7_1.eh8_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).dhq = function (context) {
    return Builder_init_$Create$_4(this, context);
  };
  protoOf(ImageRequest).ehq = function (context, $super) {
    context = context === VOID ? this.vh6_1 : context;
    return $super === VOID ? this.dhq(context) : $super.dhq.call(this, context);
  };
  protoOf(ImageRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageRequest))
      return false;
    if (!equals(this.vh6_1, other.vh6_1))
      return false;
    if (!equals(this.wh6_1, other.wh6_1))
      return false;
    if (!equals(this.xh6_1, other.xh6_1))
      return false;
    if (!equals(this.yh6_1, other.yh6_1))
      return false;
    if (!(this.zh6_1 == other.zh6_1))
      return false;
    if (!equals(this.ah7_1, other.ah7_1))
      return false;
    if (!(this.bh7_1 == other.bh7_1))
      return false;
    if (!equals(this.ch7_1, other.ch7_1))
      return false;
    if (!equals(this.dh7_1, other.dh7_1))
      return false;
    if (!equals(this.eh7_1, other.eh7_1))
      return false;
    if (!equals(this.fh7_1, other.fh7_1))
      return false;
    if (!equals(this.gh7_1, other.gh7_1))
      return false;
    if (!equals(this.hh7_1, other.hh7_1))
      return false;
    if (!this.ih7_1.equals(other.ih7_1))
      return false;
    if (!this.jh7_1.equals(other.jh7_1))
      return false;
    if (!this.kh7_1.equals(other.kh7_1))
      return false;
    if (!equals(this.lh7_1, other.lh7_1))
      return false;
    if (!equals(this.mh7_1, other.mh7_1))
      return false;
    if (!equals(this.nh7_1, other.nh7_1))
      return false;
    if (!equals(this.oh7_1, other.oh7_1))
      return false;
    if (!equals(this.ph7_1, other.ph7_1))
      return false;
    if (!this.qh7_1.equals(other.qh7_1))
      return false;
    if (!this.rh7_1.equals(other.rh7_1))
      return false;
    if (!this.sh7_1.equals(other.sh7_1))
      return false;
    if (!this.th7_1.equals(other.th7_1))
      return false;
    if (!this.uh7_1.equals(other.uh7_1))
      return false;
    return true;
  };
  protoOf(ImageRequest).hashCode = function () {
    var result = hashCode(this.vh6_1);
    result = imul(result, 31) + hashCode(this.wh6_1) | 0;
    result = imul(result, 31) + (this.xh6_1 == null ? 0 : hashCode(this.xh6_1)) | 0;
    result = imul(result, 31) + (this.yh6_1 == null ? 0 : hashCode(this.yh6_1)) | 0;
    result = imul(result, 31) + (this.zh6_1 == null ? 0 : getStringHashCode(this.zh6_1)) | 0;
    result = imul(result, 31) + hashCode(this.ah7_1) | 0;
    result = imul(result, 31) + (this.bh7_1 == null ? 0 : getStringHashCode(this.bh7_1)) | 0;
    result = imul(result, 31) + hashCode(this.ch7_1) | 0;
    result = imul(result, 31) + (this.dh7_1 == null ? 0 : this.dh7_1.hashCode()) | 0;
    result = imul(result, 31) + (this.eh7_1 == null ? 0 : hashCode(this.eh7_1)) | 0;
    result = imul(result, 31) + hashCode(this.fh7_1) | 0;
    result = imul(result, 31) + hashCode(this.gh7_1) | 0;
    result = imul(result, 31) + hashCode(this.hh7_1) | 0;
    result = imul(result, 31) + this.ih7_1.hashCode() | 0;
    result = imul(result, 31) + this.jh7_1.hashCode() | 0;
    result = imul(result, 31) + this.kh7_1.hashCode() | 0;
    result = imul(result, 31) + (this.lh7_1 == null ? 0 : this.lh7_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.mh7_1) | 0;
    result = imul(result, 31) + hashCode(this.nh7_1) | 0;
    result = imul(result, 31) + hashCode(this.oh7_1) | 0;
    result = imul(result, 31) + hashCode(this.ph7_1) | 0;
    result = imul(result, 31) + this.qh7_1.hashCode() | 0;
    result = imul(result, 31) + this.rh7_1.hashCode() | 0;
    result = imul(result, 31) + this.sh7_1.hashCode() | 0;
    result = imul(result, 31) + this.th7_1.hashCode() | 0;
    result = imul(result, 31) + this.uh7_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageRequest).toString = function () {
    return 'ImageRequest(context=' + toString(this.vh6_1) + ', data=' + toString(this.wh6_1) + ', target=' + toString_0(this.xh6_1) + ', listener=' + toString_0(this.yh6_1) + ', memoryCacheKey=' + this.zh6_1 + ', memoryCacheKeyExtras=' + toString(this.ah7_1) + ', diskCacheKey=' + this.bh7_1 + ', fileSystem=' + toString(this.ch7_1) + ', fetcherFactory=' + toString_0(this.dh7_1) + ', decoderFactory=' + toString_0(this.eh7_1) + ', interceptorCoroutineContext=' + toString(this.fh7_1) + ', fetcherCoroutineContext=' + toString(this.gh7_1) + ', decoderCoroutineContext=' + toString(this.hh7_1) + ', memoryCachePolicy=' + this.ih7_1.toString() + ', diskCachePolicy=' + this.jh7_1.toString() + ', networkCachePolicy=' + this.kh7_1.toString() + ', placeholderMemoryCacheKey=' + toString_0(this.lh7_1) + ', placeholderFactory=' + toString(this.mh7_1) + ', errorFactory=' + toString(this.nh7_1) + ', fallbackFactory=' + toString(this.oh7_1) + ', sizeResolver=' + toString(this.ph7_1) + ', scale=' + this.qh7_1.toString() + ', precision=' + this.rh7_1.toString() + ', extras=' + this.sh7_1.toString() + ', defined=' + this.th7_1.toString() + ', defaults=' + this.uh7_1.toString() + ')';
  };
  function ErrorResult(image, request, throwable) {
    this.ihb_1 = image;
    this.jhb_1 = request;
    this.khb_1 = throwable;
  }
  protoOf(ErrorResult).tg1 = function () {
    return this.jhb_1;
  };
  protoOf(ErrorResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ErrorResult))
      return false;
    if (!equals(this.ihb_1, other.ihb_1))
      return false;
    if (!this.jhb_1.equals(other.jhb_1))
      return false;
    if (!equals(this.khb_1, other.khb_1))
      return false;
    return true;
  };
  protoOf(ErrorResult).hashCode = function () {
    var result = this.ihb_1 == null ? 0 : hashCode(this.ihb_1);
    result = imul(result, 31) + this.jhb_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.khb_1) | 0;
    return result;
  };
  protoOf(ErrorResult).toString = function () {
    return 'ErrorResult(image=' + toString_0(this.ihb_1) + ', request=' + this.jhb_1.toString() + ', throwable=' + this.khb_1.toString() + ')';
  };
  function SuccessResult(image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached) {
    dataSource = dataSource === VOID ? DataSource_MEMORY_getInstance() : dataSource;
    memoryCacheKey = memoryCacheKey === VOID ? null : memoryCacheKey;
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    isSampled = isSampled === VOID ? false : isSampled;
    isPlaceholderCached = isPlaceholderCached === VOID ? false : isPlaceholderCached;
    this.iha_1 = image;
    this.jha_1 = request;
    this.kha_1 = dataSource;
    this.lha_1 = memoryCacheKey;
    this.mha_1 = diskCacheKey;
    this.nha_1 = isSampled;
    this.oha_1 = isPlaceholderCached;
  }
  protoOf(SuccessResult).tg1 = function () {
    return this.jha_1;
  };
  protoOf(SuccessResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuccessResult))
      return false;
    if (!equals(this.iha_1, other.iha_1))
      return false;
    if (!this.jha_1.equals(other.jha_1))
      return false;
    if (!this.kha_1.equals(other.kha_1))
      return false;
    if (!equals(this.lha_1, other.lha_1))
      return false;
    if (!(this.mha_1 == other.mha_1))
      return false;
    if (!(this.nha_1 === other.nha_1))
      return false;
    if (!(this.oha_1 === other.oha_1))
      return false;
    return true;
  };
  protoOf(SuccessResult).hashCode = function () {
    var result = hashCode(this.iha_1);
    result = imul(result, 31) + this.jha_1.hashCode() | 0;
    result = imul(result, 31) + this.kha_1.hashCode() | 0;
    result = imul(result, 31) + (this.lha_1 == null ? 0 : this.lha_1.hashCode()) | 0;
    result = imul(result, 31) + (this.mha_1 == null ? 0 : getStringHashCode(this.mha_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.nha_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.oha_1) | 0;
    return result;
  };
  protoOf(SuccessResult).toString = function () {
    return 'SuccessResult(image=' + toString(this.iha_1) + ', request=' + this.jha_1.toString() + ', dataSource=' + this.kha_1.toString() + ', memoryCacheKey=' + toString_0(this.lha_1) + ', diskCacheKey=' + this.mha_1 + ', isSampled=' + this.nha_1 + ', isPlaceholderCached=' + this.oha_1 + ')';
  };
  function NullRequestData() {
  }
  protoOf(NullRequestData).toString = function () {
    return 'NullRequestData';
  };
  protoOf(NullRequestData).hashCode = function () {
    return 2113961193;
  };
  protoOf(NullRequestData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NullRequestData))
      return false;
    other instanceof NullRequestData || THROW_CCE();
    return true;
  };
  var NullRequestData_instance;
  function NullRequestData_getInstance() {
    return NullRequestData_instance;
  }
  function NullRequestDataException() {
    RuntimeException_init_$Init$("The request's data is null.", this);
    captureStack(this, NullRequestDataException);
  }
  function Options_0(context, size, scale, precision, diskCacheKey, fileSystem, memoryCachePolicy, diskCachePolicy, networkCachePolicy, extras) {
    size = size === VOID ? Companion_getInstance_9().hhm_1 : size;
    scale = scale === VOID ? Scale_FIT_getInstance() : scale;
    precision = precision === VOID ? Precision_EXACT_getInstance() : precision;
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    fileSystem = fileSystem === VOID ? defaultFileSystem() : fileSystem;
    memoryCachePolicy = memoryCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : networkCachePolicy;
    extras = extras === VOID ? Companion_getInstance_4().ih6_1 : extras;
    this.lh6_1 = context;
    this.mh6_1 = size;
    this.nh6_1 = scale;
    this.oh6_1 = precision;
    this.ph6_1 = diskCacheKey;
    this.qh6_1 = fileSystem;
    this.rh6_1 = memoryCachePolicy;
    this.sh6_1 = diskCachePolicy;
    this.th6_1 = networkCachePolicy;
    this.uh6_1 = extras;
  }
  protoOf(Options_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options_0))
      return false;
    if (!equals(this.lh6_1, other.lh6_1))
      return false;
    if (!this.mh6_1.equals(other.mh6_1))
      return false;
    if (!this.nh6_1.equals(other.nh6_1))
      return false;
    if (!this.oh6_1.equals(other.oh6_1))
      return false;
    if (!(this.ph6_1 == other.ph6_1))
      return false;
    if (!equals(this.qh6_1, other.qh6_1))
      return false;
    if (!this.rh6_1.equals(other.rh6_1))
      return false;
    if (!this.sh6_1.equals(other.sh6_1))
      return false;
    if (!this.th6_1.equals(other.th6_1))
      return false;
    if (!this.uh6_1.equals(other.uh6_1))
      return false;
    return true;
  };
  protoOf(Options_0).hashCode = function () {
    var result = hashCode(this.lh6_1);
    result = imul(result, 31) + this.mh6_1.hashCode() | 0;
    result = imul(result, 31) + this.nh6_1.hashCode() | 0;
    result = imul(result, 31) + this.oh6_1.hashCode() | 0;
    result = imul(result, 31) + (this.ph6_1 == null ? 0 : getStringHashCode(this.ph6_1)) | 0;
    result = imul(result, 31) + hashCode(this.qh6_1) | 0;
    result = imul(result, 31) + this.rh6_1.hashCode() | 0;
    result = imul(result, 31) + this.sh6_1.hashCode() | 0;
    result = imul(result, 31) + this.th6_1.hashCode() | 0;
    result = imul(result, 31) + this.uh6_1.hashCode() | 0;
    return result;
  };
  protoOf(Options_0).toString = function () {
    return 'Options(context=' + toString(this.lh6_1) + ', size=' + this.mh6_1.toString() + ', scale=' + this.nh6_1.toString() + ', precision=' + this.oh6_1.toString() + ', diskCacheKey=' + this.ph6_1 + ', fileSystem=' + toString(this.qh6_1) + ', memoryCachePolicy=' + this.rh6_1.toString() + ', diskCachePolicy=' + this.sh6_1.toString() + ', networkCachePolicy=' + this.th6_1.toString() + ', extras=' + this.uh6_1.toString() + ')';
  };
  function RequestDelegate() {
  }
  function _BaseRequestDelegate___init__impl__wreley(job) {
    return job;
  }
  function BaseRequestDelegate__toString_impl_2jbf6m($this) {
    return 'BaseRequestDelegate(job=' + toString($this) + ')';
  }
  function BaseRequestDelegate__hashCode_impl_j7uhm9($this) {
    return hashCode($this);
  }
  function BaseRequestDelegate__equals_impl_k3lysr($this, other) {
    if (!(other instanceof BaseRequestDelegate))
      return false;
    var tmp0_other_with_cast = other instanceof BaseRequestDelegate ? other.fhq_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaseRequestDelegate(job) {
    this.fhq_1 = job;
  }
  protoOf(BaseRequestDelegate).toString = function () {
    return BaseRequestDelegate__toString_impl_2jbf6m(this.fhq_1);
  };
  protoOf(BaseRequestDelegate).hashCode = function () {
    return BaseRequestDelegate__hashCode_impl_j7uhm9(this.fhq_1);
  };
  protoOf(BaseRequestDelegate).equals = function (other) {
    return BaseRequestDelegate__equals_impl_k3lysr(this.fhq_1, other);
  };
  function get_maxBitmapSizeKey() {
    _init_properties_imageRequests_kt__vz1wml();
    return maxBitmapSizeKey;
  }
  var maxBitmapSizeKey;
  function get_addLastModifiedToFileCacheKeyKey() {
    _init_properties_imageRequests_kt__vz1wml();
    return addLastModifiedToFileCacheKeyKey;
  }
  var addLastModifiedToFileCacheKeyKey;
  function get_addLastModifiedToFileCacheKey(_this__u8e3s4) {
    _init_properties_imageRequests_kt__vz1wml();
    return getExtra(_this__u8e3s4, get_addLastModifiedToFileCacheKeyKey());
  }
  function get_maxBitmapSize(_this__u8e3s4) {
    _init_properties_imageRequests_kt__vz1wml();
    return getExtra_0(_this__u8e3s4, get_maxBitmapSizeKey());
  }
  function get_maxBitmapSize_0(_this__u8e3s4) {
    _init_properties_imageRequests_kt__vz1wml();
    return getExtra(_this__u8e3s4, get_maxBitmapSizeKey());
  }
  var properties_initialized_imageRequests_kt_62wmpb;
  function _init_properties_imageRequests_kt__vz1wml() {
    if (!properties_initialized_imageRequests_kt_62wmpb) {
      properties_initialized_imageRequests_kt_62wmpb = true;
      maxBitmapSizeKey = new Key(Size_0(4096, 4096));
      addLastModifiedToFileCacheKeyKey = new Key(false);
    }
  }
  function _Pixels___init__impl__qgjjfw(px) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Pixels___get_px__impl__uix9dv(px) > 0)) {
      // Inline function 'coil3.size.Pixels.<anonymous>' call
      var message = 'px must be > 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return px;
  }
  function _Pixels___get_px__impl__uix9dv($this) {
    return $this;
  }
  function Pixels__toString_impl_9ua830($this) {
    return 'Pixels(px=' + $this + ')';
  }
  function Pixels__hashCode_impl_vlg4vv($this) {
    return $this;
  }
  function Pixels__equals_impl_g64au9($this, other) {
    if (!(other instanceof Pixels))
      return false;
    if (!($this === (other instanceof Pixels ? other.phe_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Pixels(px) {
    this.phe_1 = px;
  }
  protoOf(Pixels).toString = function () {
    return Pixels__toString_impl_9ua830(this.phe_1);
  };
  protoOf(Pixels).hashCode = function () {
    return Pixels__hashCode_impl_vlg4vv(this.phe_1);
  };
  protoOf(Pixels).equals = function (other) {
    return Pixels__equals_impl_g64au9(this.phe_1, other);
  };
  function Undefined() {
  }
  protoOf(Undefined).toString = function () {
    return 'Undefined';
  };
  protoOf(Undefined).hashCode = function () {
    return -2093724603;
  };
  protoOf(Undefined).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Undefined))
      return false;
    other instanceof Undefined || THROW_CCE();
    return true;
  };
  var Undefined_instance;
  function Undefined_getInstance() {
    return Undefined_instance;
  }
  function Dimension(px) {
    return _Pixels___init__impl__qgjjfw(px);
  }
  var Precision_EXACT_instance;
  var Precision_INEXACT_instance;
  var Precision_entriesInitialized;
  function Precision_initEntries() {
    if (Precision_entriesInitialized)
      return Unit_instance;
    Precision_entriesInitialized = true;
    Precision_EXACT_instance = new Precision('EXACT', 0);
    Precision_INEXACT_instance = new Precision('INEXACT', 1);
  }
  function Precision(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Precision_EXACT_getInstance() {
    Precision_initEntries();
    return Precision_EXACT_instance;
  }
  function Precision_INEXACT_getInstance() {
    Precision_initEntries();
    return Precision_INEXACT_instance;
  }
  function RealSizeResolver(size) {
    this.ghq_1 = size;
  }
  protoOf(RealSizeResolver).shd = function ($completion) {
    return this.ghq_1;
  };
  protoOf(RealSizeResolver).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RealSizeResolver))
      return false;
    if (!this.ghq_1.equals(other.ghq_1))
      return false;
    return true;
  };
  protoOf(RealSizeResolver).hashCode = function () {
    return this.ghq_1.hashCode();
  };
  protoOf(RealSizeResolver).toString = function () {
    return 'RealSizeResolver(size=' + this.ghq_1.toString() + ')';
  };
  var Scale_FILL_instance;
  var Scale_FIT_instance;
  var Scale_entriesInitialized;
  function Scale_initEntries() {
    if (Scale_entriesInitialized)
      return Unit_instance;
    Scale_entriesInitialized = true;
    Scale_FILL_instance = new Scale('FILL', 0);
    Scale_FIT_instance = new Scale('FIT', 1);
  }
  function Scale(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Scale_FILL_getInstance() {
    Scale_initEntries();
    return Scale_FILL_instance;
  }
  function Scale_FIT_getInstance() {
    Scale_initEntries();
    return Scale_FIT_instance;
  }
  function Companion_5() {
    Companion_instance_6 = this;
    this.hhm_1 = new Size(Undefined_instance, Undefined_instance);
  }
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function Size(width, height) {
    Companion_getInstance_9();
    this.she_1 = width;
    this.the_1 = height;
  }
  protoOf(Size).toString = function () {
    return 'Size(width=' + toString(this.she_1) + ', height=' + toString(this.the_1) + ')';
  };
  protoOf(Size).hashCode = function () {
    var result = hashCode(this.she_1);
    result = imul(result, 31) + hashCode(this.the_1) | 0;
    return result;
  };
  protoOf(Size).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other : THROW_CCE();
    if (!equals(this.she_1, tmp0_other_with_cast.she_1))
      return false;
    if (!equals(this.the_1, tmp0_other_with_cast.the_1))
      return false;
    return true;
  };
  function Size_0(width, height) {
    return new Size(new Pixels(Dimension(width)), new Pixels(Dimension(height)));
  }
  function get_isOriginal(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_9().hhm_1);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.shp_1 = SizeResolver(Companion_getInstance_9().hhm_1);
  }
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SizeResolver(size) {
    return new RealSizeResolver(size);
  }
  function Target() {
  }
  function recomputeSize($this) {
    // Inline function 'kotlin.collections.sumOf' call
    var this_0 = $this.phn_1.u();
    var sum = new Long(0, 0);
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp = sum;
      // Inline function 'coil3.util.LruCache.recomputeSize.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.v();
      // Inline function 'kotlin.collections.component2' call
      var value = element.w();
      var tmp$ret$2 = safeSizeOf($this, key, value);
      sum = tmp.a3(tmp$ret$2);
    }
    return sum;
  }
  function safeSizeOf($this, key, value) {
    try {
      var size = $this.jhn(key, value);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(size.b1(new Long(0, 0)) >= 0)) {
        // Inline function 'coil3.util.LruCache.safeSizeOf.<anonymous>' call
        var message = 'sizeOf(' + toString(key) + ', ' + toString(value) + ') returned a negative value: ' + size.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return size;
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        $this.qhn_1 = new Long(-1, -1);
        throw e;
      } else {
        throw $p;
      }
    }
  }
  function LruCache(maxSize) {
    this.ohn_1 = maxSize;
    this.phn_1 = LruMutableMap();
    this.qhn_1 = new Long(0, 0);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.ohn_1.b1(new Long(0, 0)) > 0)) {
      // Inline function 'coil3.util.LruCache.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(LruCache).j = function () {
    if (this.qhn_1.equals(new Long(-1, -1))) {
      this.qhn_1 = recomputeSize(this);
    }
    return this.qhn_1;
  };
  protoOf(LruCache).jhn = function (key, value) {
    return new Long(1, 0);
  };
  protoOf(LruCache).nhn = function (key, oldValue, newValue) {
  };
  protoOf(LruCache).rhn = function (key, value) {
    var oldValue = this.phn_1.f2(key, value);
    this.qhn_1 = this.j().a3(safeSizeOf(this, key, value));
    if (!(oldValue == null)) {
      this.qhn_1 = this.j().b3(safeSizeOf(this, key, oldValue));
      this.nhn(key, oldValue, value);
    }
    this.thn(this.ohn_1);
    return oldValue;
  };
  protoOf(LruCache).yfg = function (key) {
    return this.phn_1.n2(key);
  };
  protoOf(LruCache).shn = function (key) {
    var oldValue = this.phn_1.g2(key);
    if (!(oldValue == null)) {
      this.qhn_1 = this.j().b3(safeSizeOf(this, key, oldValue));
      this.nhn(key, oldValue, null);
    }
    return oldValue;
  };
  protoOf(LruCache).thn = function (size) {
    $l$loop: while (this.j().b1(size) > 0) {
      if (this.phn_1.q()) {
        if (!this.j().equals(new Long(0, 0))) {
          // Inline function 'kotlin.error' call
          var message = 'sizeOf() is returning inconsistent values';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        break $l$loop;
      }
      var _destruct__k2r9zo = first(this.phn_1.u());
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.v();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.w();
      this.phn_1.g2(key);
      this.qhn_1 = this.j().b3(safeSizeOf(this, key, value));
      this.nhn(key, value, null);
    }
  };
  function FetcherServiceLoaderTarget() {
  }
  function DecoderServiceLoaderTarget() {
  }
  function _IntPair___init__impl__vp9xsg(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _IntPair___init__impl__vp9xsg_0(first, second) {
    return _IntPair___init__impl__vp9xsg(toLong(first).j3(32).n3(toLong(second).m3(new Long(-1, 0))));
  }
  function _IntPair___get_first__impl__dvuucb($this) {
    return _get_value__a43j40($this).k3(32).g1();
  }
  function _IntPair___get_second__impl__vrxpzp($this) {
    return _get_value__a43j40($this).m3(new Long(-1, 0)).g1();
  }
  function get_extension(_this__u8e3s4) {
    return substringAfterLast(_this__u8e3s4.h3j(), _Char___init__impl__6a9atx(46), '');
  }
  var Level_Verbose_instance;
  var Level_Debug_instance;
  var Level_Info_instance;
  var Level_Warn_instance;
  var Level_Error_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_Verbose_instance = new Level('Verbose', 0);
    Level_Debug_instance = new Level('Debug', 1);
    Level_Info_instance = new Level('Info', 2);
    Level_Warn_instance = new Level('Warn', 3);
    Level_Error_instance = new Level('Error', 4);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Level_Debug_getInstance() {
    Level_initEntries();
    return Level_Debug_instance;
  }
  function Level_Info_getInstance() {
    Level_initEntries();
    return Level_Info_instance;
  }
  function Level_Error_getInstance() {
    Level_initEntries();
    return Level_Error_instance;
  }
  function log(_this__u8e3s4, tag, throwable) {
    if (_this__u8e3s4.fhb().v2(Level_Error_getInstance()) <= 0) {
      _this__u8e3s4.ehb(tag, Level_Error_getInstance(), null, throwable);
    }
  }
  function get_mimeTypeData() {
    _init_properties_mimeTypes_kt__qozbkj();
    return mimeTypeData;
  }
  var mimeTypeData;
  function MimeTypeMap() {
  }
  protoOf(MimeTypeMap).hhq = function (url) {
    if (isBlank(url)) {
      return null;
    }
    var extension = substringAfterLast(substringAfterLast(substringBeforeLast(substringBeforeLast(url, _Char___init__impl__6a9atx(35)), _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(47)), _Char___init__impl__6a9atx(46), '');
    return this.uhf(extension);
  };
  protoOf(MimeTypeMap).uhf = function (extension) {
    if (isBlank(extension)) {
      return null;
    }
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var lowerExtension = extension.toLowerCase();
    var tmp0_elvis_lhs = get_mimeTypeData().n2(lowerExtension);
    return tmp0_elvis_lhs == null ? extensionFromMimeTypeMap(lowerExtension) : tmp0_elvis_lhs;
  };
  var MimeTypeMap_instance;
  function MimeTypeMap_getInstance() {
    return MimeTypeMap_instance;
  }
  var properties_initialized_mimeTypes_kt_afkqqz;
  function _init_properties_mimeTypes_kt__qozbkj() {
    if (!properties_initialized_mimeTypes_kt_afkqqz) {
      properties_initialized_mimeTypes_kt_afkqqz = true;
      // Inline function 'kotlin.collections.buildMap' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.buildMapInternal' call
      // Inline function 'kotlin.apply' call
      var this_0 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.util.mimeTypeData.<anonymous>' call
      this_0.f2('bin', 'application/octet-stream');
      this_0.f2('gz', 'application/gzip');
      this_0.f2('json', 'application/json');
      this_0.f2('pdf', 'application/pdf');
      this_0.f2('yaml', 'application/yaml');
      this_0.f2('avif', 'image/avif');
      this_0.f2('avifs', 'image/avif');
      this_0.f2('bmp', 'image/bmp');
      this_0.f2('cgm', 'image/cgm');
      this_0.f2('g3', 'image/g3fax');
      this_0.f2('gif', 'image/gif');
      this_0.f2('heif', 'image/heic');
      this_0.f2('heic', 'image/heic');
      this_0.f2('ief', 'image/ief');
      this_0.f2('jpe', 'image/jpeg');
      this_0.f2('jpeg', 'image/jpeg');
      this_0.f2('jpg', 'image/jpeg');
      this_0.f2('pjpg', 'image/jpeg');
      this_0.f2('jfif', 'image/jpeg');
      this_0.f2('jfif-tbnl', 'image/jpeg');
      this_0.f2('jif', 'image/jpeg');
      this_0.f2('png', 'image/png');
      this_0.f2('btif', 'image/prs.btif');
      this_0.f2('svg', 'image/svg+xml');
      this_0.f2('svgz', 'image/svg+xml');
      this_0.f2('tif', 'image/tiff');
      this_0.f2('tiff', 'image/tiff');
      this_0.f2('psd', 'image/vnd.adobe.photoshop');
      this_0.f2('djv', 'image/vnd.djvu');
      this_0.f2('djvu', 'image/vnd.djvu');
      this_0.f2('dwg', 'image/vnd.dwg');
      this_0.f2('dxf', 'image/vnd.dxf');
      this_0.f2('fbs', 'image/vnd.fastbidsheet');
      this_0.f2('fpx', 'image/vnd.fpx');
      this_0.f2('fst', 'image/vnd.fst');
      this_0.f2('mmr', 'image/vnd.fujixerox.edmics-mmr');
      this_0.f2('rlc', 'image/vnd.fujixerox.edmics-rlc');
      this_0.f2('mdi', 'image/vnd.ms-modi');
      this_0.f2('npx', 'image/vnd.net-fpx');
      this_0.f2('wbmp', 'image/vnd.wap.wbmp');
      this_0.f2('xif', 'image/vnd.xiff');
      this_0.f2('webp', 'image/webp');
      this_0.f2('dng', 'image/x-adobe-dng');
      this_0.f2('cr2', 'image/x-canon-cr2');
      this_0.f2('crw', 'image/x-canon-crw');
      this_0.f2('ras', 'image/x-cmu-raster');
      this_0.f2('cmx', 'image/x-cmx');
      this_0.f2('erf', 'image/x-epson-erf');
      this_0.f2('fh', 'image/x-freehand');
      this_0.f2('fh4', 'image/x-freehand');
      this_0.f2('fh5', 'image/x-freehand');
      this_0.f2('fh7', 'image/x-freehand');
      this_0.f2('fhc', 'image/x-freehand');
      this_0.f2('raf', 'image/x-fuji-raf');
      this_0.f2('icns', 'image/x-icns');
      this_0.f2('ico', 'image/x-icon');
      this_0.f2('dcr', 'image/x-kodak-dcr');
      this_0.f2('k25', 'image/x-kodak-k25');
      this_0.f2('kdc', 'image/x-kodak-kdc');
      this_0.f2('mrw', 'image/x-minolta-mrw');
      this_0.f2('nef', 'image/x-nikon-nef');
      this_0.f2('orf', 'image/x-olympus-orf');
      this_0.f2('raw', 'image/x-panasonic-raw');
      this_0.f2('rw2', 'image/x-panasonic-raw');
      this_0.f2('rwl', 'image/x-panasonic-raw');
      this_0.f2('pcx', 'image/x-pcx');
      this_0.f2('pef', 'image/x-pentax-pef');
      this_0.f2('ptx', 'image/x-pentax-pef');
      this_0.f2('pct', 'image/x-pict');
      this_0.f2('pic', 'image/x-pict');
      this_0.f2('pnm', 'image/x-portable-anymap');
      this_0.f2('pbm', 'image/x-portable-bitmap');
      this_0.f2('pgm', 'image/x-portable-graymap');
      this_0.f2('ppm', 'image/x-portable-pixmap');
      this_0.f2('rgb', 'image/x-rgb');
      this_0.f2('x3f', 'image/x-sigma-x3f');
      this_0.f2('arw', 'image/x-sony-arw');
      this_0.f2('sr2', 'image/x-sony-sr2');
      this_0.f2('srf', 'image/x-sony-srf');
      this_0.f2('xbm', 'image/x-xbitmap');
      this_0.f2('xpm', 'image/x-xpixmap');
      this_0.f2('xwd', 'image/x-xwindowdump');
      this_0.f2('css', 'text/css');
      this_0.f2('csv', 'text/csv');
      this_0.f2('htm', 'text/html');
      this_0.f2('html', 'text/html');
      this_0.f2('ics', 'text/calendar');
      this_0.f2('js', 'text/javascript');
      this_0.f2('mjs', 'text/javascript');
      this_0.f2('md', 'text/markdown');
      this_0.f2('txt', 'text/plain');
      this_0.f2('xml', 'text/xml');
      this_0.f2('3gp', 'video/3gpp');
      this_0.f2('3g2', 'video/3gpp2');
      this_0.f2('h261', 'video/h261');
      this_0.f2('h263', 'video/h263');
      this_0.f2('h264', 'video/h264');
      this_0.f2('jpgv', 'video/jpeg');
      this_0.f2('jpgm', 'video/jpm');
      this_0.f2('jpm', 'video/jpm');
      this_0.f2('mj2', 'video/mj2');
      this_0.f2('mjp2', 'video/mj2');
      this_0.f2('ts', 'video/mp2t');
      this_0.f2('mp4', 'video/mp4');
      this_0.f2('mp4v', 'video/mp4');
      this_0.f2('mpg4', 'video/mp4');
      this_0.f2('m1v', 'video/mpeg');
      this_0.f2('m2v', 'video/mpeg');
      this_0.f2('mpa', 'video/mpeg');
      this_0.f2('mpe', 'video/mpeg');
      this_0.f2('mpeg', 'video/mpeg');
      this_0.f2('mpg', 'video/mpeg');
      this_0.f2('ogv', 'video/ogg');
      this_0.f2('mov', 'video/quicktime');
      this_0.f2('qt', 'video/quicktime');
      this_0.f2('fvt', 'video/vnd.fvt');
      this_0.f2('m4u', 'video/vnd.mpegurl');
      this_0.f2('mxu', 'video/vnd.mpegurl');
      this_0.f2('pyv', 'video/vnd.ms-playready.media.pyv');
      this_0.f2('viv', 'video/vnd.vivo');
      this_0.f2('webm', 'video/webm');
      this_0.f2('f4v', 'video/x-f4v');
      this_0.f2('fli', 'video/x-fli');
      this_0.f2('flv', 'video/x-flv');
      this_0.f2('m4v', 'video/x-m4v');
      this_0.f2('mkv', 'video/x-matroska');
      this_0.f2('asf', 'video/x-ms-asf');
      this_0.f2('asx', 'video/x-ms-asf');
      this_0.f2('wm', 'video/x-ms-wm');
      this_0.f2('wmv', 'video/x-ms-wmv');
      this_0.f2('wmx', 'video/x-ms-wmx');
      this_0.f2('wvx', 'video/x-ms-wvx');
      this_0.f2('avi', 'video/x-msvideo');
      this_0.f2('movie', 'video/x-sgi-movie');
      mimeTypeData = this_0.c9();
    }
  }
  function get_EMPTY_IMAGE_FACTORY() {
    _init_properties_utils_kt__i7zv1b();
    return EMPTY_IMAGE_FACTORY;
  }
  var EMPTY_IMAGE_FACTORY;
  function ErrorResult_0(request, throwable) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    if (throwable instanceof NullRequestDataException) {
      var tmp0_elvis_lhs = request.chq();
      tmp = tmp0_elvis_lhs == null ? request.bhq() : tmp0_elvis_lhs;
    } else {
      tmp = request.bhq();
    }
    return new ErrorResult(tmp, request, throwable);
  }
  function get_emoji(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    switch (_this__u8e3s4.u2_1) {
      case 0:
      case 1:
        tmp = '\uD83E\uDDE0';
        break;
      case 2:
        tmp = '\uD83D\uDCBE';
        break;
      case 3:
        tmp = '\u2601\uFE0F';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function closeQuietly(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    try {
      _this__u8e3s4.l4();
    } catch ($p) {
      if ($p instanceof RuntimeException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var _unused_var__etf5q3 = $p;
        } else {
          throw $p;
        }
      }
    }
  }
  function get_eventListener(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    if (_this__u8e3s4 instanceof RealInterceptorChain) {
      tmp = _this__u8e3s4.thc_1;
    } else {
      tmp = Companion_getInstance_12().ihq_1;
    }
    return tmp;
  }
  function get_isPlaceholderCached(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    if (_this__u8e3s4 instanceof RealInterceptorChain) {
      tmp = _this__u8e3s4.uhc_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function addFirst(_this__u8e3s4, factory) {
    _init_properties_utils_kt__i7zv1b();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.util.addFirst.<anonymous>' call
    if (!(factory == null)) {
      _this__u8e3s4.fh5_1.r2(0, addFirst$lambda(factory));
    }
    return _this__u8e3s4;
  }
  function addFirst_0(_this__u8e3s4, pair) {
    _init_properties_utils_kt__i7zv1b();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.util.addFirst.<anonymous>' call
    if (!(pair == null)) {
      _this__u8e3s4.eh5_1.r2(0, addFirst$lambda_0(pair));
    }
    return _this__u8e3s4;
  }
  function isFileUri(uri) {
    _init_properties_utils_kt__i7zv1b();
    return (uri.ihe_1 == null || uri.ihe_1 === 'file') && !(uri.khe_1 == null) && !isAssetUri(uri);
  }
  function closeQuietly_0(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    try {
      _this__u8e3s4.l4();
    } catch ($p) {
      if ($p instanceof RuntimeException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var _unused_var__etf5q3 = $p;
        } else {
          throw $p;
        }
      }
    }
  }
  function isMinOrMax(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    return _this__u8e3s4 === -2147483648 || _this__u8e3s4 === 2147483647;
  }
  function EMPTY_IMAGE_FACTORY$lambda(it) {
    _init_properties_utils_kt__i7zv1b();
    return null;
  }
  function addFirst$lambda($factory) {
    return function () {
      return listOf($factory);
    };
  }
  function addFirst$lambda_0($pair) {
    return function () {
      return listOf($pair);
    };
  }
  var properties_initialized_utils_kt_wt0odb;
  function _init_properties_utils_kt__i7zv1b() {
    if (!properties_initialized_utils_kt_wt0odb) {
      properties_initialized_utils_kt_wt0odb = true;
      EMPTY_IMAGE_FACTORY = EMPTY_IMAGE_FACTORY$lambda;
    }
  }
  function singletonDiskCache() {
    return null;
  }
  function ioCoroutineDispatcher() {
    return Dispatchers_getInstance().j1g_1;
  }
  function defaultFileSystem() {
    return ThrowingFileSystem_getInstance();
  }
  function throwReadWriteIsUnsupported($this) {
    throw UnsupportedOperationException_init_$Create$("Javascript does not have access to the device's file system and cannot read from or write to it. If you are running on Node.js use 'NodeJsFileSystem' instead.");
  }
  function ThrowingFileSystem() {
    ThrowingFileSystem_instance = this;
    FileSystem.call(this);
  }
  protoOf(ThrowingFileSystem).uh2 = function (path, mustExist) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).xh1 = function (path) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).th2 = function (file, mustCreate) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).sh2 = function (file) {
    throwReadWriteIsUnsupported(this);
  };
  var ThrowingFileSystem_instance;
  function ThrowingFileSystem_getInstance() {
    if (ThrowingFileSystem_instance == null)
      new ThrowingFileSystem();
    return ThrowingFileSystem_instance;
  }
  function WeakReference(referred) {
    this.dho_1 = new WeakRef(referred);
  }
  protoOf(WeakReference).zp = function () {
    var tmp0_safe_receiver = this.dho_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.deref();
  };
  function sam$coil3_EventListener_Factory$0(function_0) {
    this.jhq_1 = function_0;
  }
  protoOf(sam$coil3_EventListener_Factory$0).jhd = function (request) {
    return this.jhq_1(request);
  };
  protoOf(sam$coil3_EventListener_Factory$0).s3 = function () {
    return this.jhq_1;
  };
  protoOf(sam$coil3_EventListener_Factory$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Factory_2) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.s3(), other.s3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$coil3_EventListener_Factory$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function EventListener$Factory$Companion$NONE$lambda(it) {
    return Companion_getInstance_12().ihq_1;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = EventListener$Factory$Companion$NONE$lambda;
    tmp.xh8_1 = new sam$coil3_EventListener_Factory$0(tmp_0);
  }
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function EventListener$Companion$NONE$1() {
    EventListener.call(this);
  }
  function Factory_2() {
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    tmp.ihq_1 = new EventListener$Companion$NONE$1();
  }
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function EventListener() {
    Companion_getInstance_12();
  }
  protoOf(EventListener).qhd = function (request) {
  };
  protoOf(EventListener).rhd = function (request, sizeResolver) {
  };
  protoOf(EventListener).thd = function (request, size) {
  };
  protoOf(EventListener).thk = function (request, input) {
  };
  protoOf(EventListener).uhk = function (request, output) {
  };
  protoOf(EventListener).mhm = function (request, input) {
  };
  protoOf(EventListener).nhm = function (request, output) {
  };
  protoOf(EventListener).chl = function (request, fetcher, options) {
  };
  protoOf(EventListener).dhl = function (request, fetcher, options, result) {
  };
  protoOf(EventListener).ehl = function (request, decoder, options) {
  };
  protoOf(EventListener).ghl = function (request, decoder, options, result) {
  };
  protoOf(EventListener).nhb = function (request) {
  };
  protoOf(EventListener).mhb = function (request, result) {
  };
  protoOf(EventListener).hhb = function (request, result) {
  };
  function BitmapImage(bitmap, shareable) {
    this.khq_1 = bitmap;
    this.lhq_1 = shareable;
  }
  protoOf(BitmapImage).uhm = function () {
    return this.lhq_1;
  };
  protoOf(BitmapImage).j = function () {
    var size = toLong(this.khq_1.k5d().b5l());
    if (size.b1(new Long(0, 0)) <= 0) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(4, 0);
      var other = this.khq_1.f5a();
      var this_1 = this_0.c3(toLong(other));
      var other_0 = this.khq_1.g5a();
      size = this_1.c3(toLong(other_0));
    }
    return coerceAtLeast(size, new Long(0, 0));
  };
  protoOf(BitmapImage).f5a = function () {
    return this.khq_1.f5a();
  };
  protoOf(BitmapImage).g5a = function () {
    return this.khq_1.g5a();
  };
  protoOf(BitmapImage).mhq = function (canvas) {
    canvas.x5g(this.khq_1, 0, 0);
  };
  protoOf(BitmapImage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapImage))
      return false;
    if (!this.khq_1.equals(other.khq_1))
      return false;
    if (!(this.lhq_1 === other.lhq_1))
      return false;
    return true;
  };
  protoOf(BitmapImage).hashCode = function () {
    var result = this.khq_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.lhq_1) | 0;
    return result;
  };
  protoOf(BitmapImage).toString = function () {
    return 'BitmapImage(bitmap=' + this.khq_1.toString() + ', shareable=' + this.lhq_1 + ')';
  };
  function asImage(_this__u8e3s4, shareable) {
    shareable = shareable === VOID ? true : shareable;
    return new BitmapImage(_this__u8e3s4, shareable);
  }
  function toBitmap(_this__u8e3s4, width, height) {
    width = width === VOID ? _this__u8e3s4.f5a() : width;
    height = height === VOID ? _this__u8e3s4.g5a() : height;
    var colorType;
    var colorAlphaType;
    var colorSpace;
    if (_this__u8e3s4 instanceof BitmapImage) {
      colorType = _this__u8e3s4.khq_1.g5e();
      colorAlphaType = _this__u8e3s4.khq_1.k5d().z5k();
      colorSpace = _this__u8e3s4.khq_1.h5e();
    } else {
      colorType = Companion_getInstance_0().q5h_1;
      colorAlphaType = ColorAlphaType_PREMUL_getInstance();
      colorSpace = null;
    }
    return toBitmap_0(_this__u8e3s4, width, height, colorType, colorAlphaType, colorSpace);
  }
  function toBitmap_0(_this__u8e3s4, width, height, colorType, colorAlphaType, colorSpace) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    if (_this__u8e3s4 instanceof BitmapImage) {
      tmp_3 = _this__u8e3s4.khq_1.f5a() === width;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = _this__u8e3s4.khq_1.g5a() === height;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = _this__u8e3s4.khq_1.g5e().equals(colorType);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = _this__u8e3s4.khq_1.k5d().z5k().equals(colorAlphaType);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(_this__u8e3s4.khq_1.h5e(), colorSpace);
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4.khq_1;
    }
    var bitmap = Bitmap_init_$Create$();
    var imageInfo = new ImageInfo(new ColorInfo(colorType, colorAlphaType, colorSpace), width, height);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!bitmap.o5d(imageInfo)) {
      // Inline function 'coil3.toBitmap.<anonymous>' call
      var message = 'allocPixels(' + imageInfo.toString() + ') failed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.apply' call
    var this_0 = Canvas_init_$Create$(bitmap);
    // Inline function 'kotlin.contracts.contract' call
    _this__u8e3s4.mhq(this_0);
    var canvas = this_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!canvas.w5g(bitmap, 0, 0)) {
      // Inline function 'coil3.toBitmap.<anonymous>' call
      var message_0 = 'readPixels(' + bitmap.toString() + ') failed';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return bitmap;
  }
  function PlatformContext$Companion$INSTANCE$1() {
    PlatformContext.call(this);
  }
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    tmp.nhq_1 = new PlatformContext$Companion$INSTANCE$1();
  }
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PlatformContext() {
    Companion_getInstance_13();
  }
  function addAndroidComponents(_this__u8e3s4, options) {
    return _this__u8e3s4.uh5(new Factory_3());
  }
  function getDisposable(request, job) {
    return new OneShotDisposable(job);
  }
  function needsExecuteOnMainDispatcher(request) {
    return false;
  }
  function Factory_3() {
  }
  protoOf(Factory_3).dh6 = function (result, options, imageLoader) {
    return new SkiaImageDecoder(result.ohf_1, options);
  };
  function SkiaImageDecoder(source, options) {
    this.ohq_1 = source;
    this.phq_1 = options;
  }
  protoOf(SkiaImageDecoder).qhq = function ($completion) {
    // Inline function 'okio.use' call
    var this_0 = this.ohq_1.chf();
    var thrown = null;
    var tmp;
    try {
      // Inline function 'coil3.decode.SkiaImageDecoder.decode.<anonymous>' call
      tmp = this_0.dh4();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    finally {
      try {
        if (this_0 == null)
          null;
        else {
          this_0.l4();
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var t_0 = $p;
          if (thrown == null) {
            thrown = t_0;
          } else {
            addSuppressed(thrown, t_0);
          }
        } else {
          throw $p;
        }
      }
    }
    var result = tmp;
    if (!(thrown == null))
      throw thrown;
    var bytes = (result == null ? true : !(result == null)) ? result : THROW_CCE();
    var image = Companion_getInstance_1().u5k(bytes);
    var isSampled;
    var bitmap;
    try {
      bitmap = makeFromImage(Companion_getInstance_2(), image, this.phq_1);
      bitmap.u5d();
      isSampled = bitmap.f5a() < image.f5a() || bitmap.g5a() < image.g5a();
    }finally {
      image.l4();
    }
    return new DecodeResult(asImage(bitmap), isSampled);
  };
  protoOf(SkiaImageDecoder).fhl = function ($completion) {
    return this.qhq($completion);
  };
  function transform(result, request, options, eventListener, logger, $completion) {
    return result;
  }
  function needsSizeInCacheKey(_this__u8e3s4) {
    return false;
  }
  function RequestService(imageLoader, systemCallbacks, logger) {
    return new NonAndroidRequestService(imageLoader);
  }
  function NonAndroidRequestService(imageLoader) {
    this.rhq_1 = imageLoader;
  }
  protoOf(NonAndroidRequestService).ghd = function (request, job, findLifecycle) {
    return new BaseRequestDelegate(_BaseRequestDelegate___init__impl__wreley(job));
  };
  protoOf(NonAndroidRequestService).ihd = function (request) {
    return request.ehq().ahq(this.rhq_1.yh8()).c2o();
  };
  protoOf(NonAndroidRequestService).shk = function (request, size) {
    return new Options_0(request.vh6_1, size, request.qh7_1, request.rh7_1, request.bh7_1, request.ch7_1, request.ih7_1, request.jh7_1, request.kh7_1, request.sh7_1);
  };
  protoOf(NonAndroidRequestService).yhk = function (options) {
    return options;
  };
  protoOf(NonAndroidRequestService).thm = function (request, cacheValue) {
    return true;
  };
  function get_crossfadeMillisKey() {
    _init_properties_imageRequests_nonAndroid_kt__ajkwf();
    return crossfadeMillisKey;
  }
  var crossfadeMillisKey;
  function get_crossfadeMillis(_this__u8e3s4) {
    _init_properties_imageRequests_nonAndroid_kt__ajkwf();
    return getExtra_0(_this__u8e3s4, get_crossfadeMillisKey());
  }
  var properties_initialized_imageRequests_nonAndroid_kt_c4j4qb;
  function _init_properties_imageRequests_nonAndroid_kt__ajkwf() {
    if (!properties_initialized_imageRequests_nonAndroid_kt_c4j4qb) {
      properties_initialized_imageRequests_nonAndroid_kt_c4j4qb = true;
      crossfadeMillisKey = new Key(0);
    }
  }
  function SystemCallbacks(imageLoader) {
    return new NoopSystemCallbacks();
  }
  function NoopSystemCallbacks() {
  }
  protoOf(NoopSystemCallbacks).dhj = function () {
  };
  function defaultMemoryCacheSizePercent(_this__u8e3s4) {
    return 0.15;
  }
  function totalAvailableMemoryBytes(_this__u8e3s4) {
    return new Long(536870912, 0);
  }
  function get_application(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function extensionFromMimeTypeMap(extension) {
    return null;
  }
  function prepareToDraw(_this__u8e3s4) {
  }
  function makeFromImage(_this__u8e3s4, image, options) {
    var srcWidth = image.f5a();
    var srcHeight = image.g5a();
    var _destruct__k2r9zo = DecodeUtils_instance.rhe(srcWidth, srcHeight, options.mh6_1, options.nh6_1, get_maxBitmapSize_0(options));
    // Inline function 'coil3.util.component1' call
    var dstWidth = _IntPair___get_first__impl__dvuucb(_destruct__k2r9zo);
    // Inline function 'coil3.util.component2' call
    var dstHeight = _IntPair___get_second__impl__vrxpzp(_destruct__k2r9zo);
    var multiplier = DecodeUtils_instance.qhe(srcWidth, srcHeight, dstWidth, dstHeight, options.nh6_1);
    if (options.oh6_1.equals(Precision_INEXACT_getInstance())) {
      multiplier = coerceAtMost_0(multiplier, 1.0);
    }
    var outWidth = numberToInt(multiplier * srcWidth);
    var outHeight = numberToInt(multiplier * srcHeight);
    var bitmap = Bitmap_init_$Create$();
    bitmap.f5e(outWidth, outHeight);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Canvas_init_$Create$(bitmap);
    var tmp;
    try {
      // Inline function 'coil3.util.makeFromImage.<anonymous>' call
      tmp = this_0.f5g(image, Companion_instance.p5o(srcWidth, srcHeight), Companion_instance.p5o(outWidth, outHeight));
    }finally {
      this_0.l4();
    }
    return bitmap;
  }
  function isAssetUri(uri) {
    return false;
  }
  function addJvmComponents(_this__u8e3s4, options) {
    return _this__u8e3s4;
  }
  function ServiceLoaderComponentRegistry() {
    ServiceLoaderComponentRegistry_instance = this;
    this.xhd_1 = new Object();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.yhd_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.zhd_1 = ArrayList_init_$Create$();
  }
  protoOf(ServiceLoaderComponentRegistry).ahe = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.xhd_1;
    // Inline function 'coil3.util.ServiceLoaderComponentRegistry.<get-fetchers>.<anonymous>' call
    return toImmutableList(ServiceLoaderComponentRegistry_getInstance().yhd_1);
  };
  protoOf(ServiceLoaderComponentRegistry).fhe = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.xhd_1;
    // Inline function 'coil3.util.ServiceLoaderComponentRegistry.<get-decoders>.<anonymous>' call
    return toImmutableList(ServiceLoaderComponentRegistry_getInstance().zhd_1);
  };
  protoOf(ServiceLoaderComponentRegistry).shq = function (fetcher) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.xhd_1;
    ServiceLoaderComponentRegistry_getInstance().yhd_1.e(fetcher);
    return Unit_instance;
  };
  var ServiceLoaderComponentRegistry_instance;
  function ServiceLoaderComponentRegistry_getInstance() {
    if (ServiceLoaderComponentRegistry_instance == null)
      new ServiceLoaderComponentRegistry();
    return ServiceLoaderComponentRegistry_instance;
  }
  function toImmutableMap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.q()) {
      tmp = emptyMap();
    } else {
      if (_this__u8e3s4 instanceof ImmutableMap) {
        tmp = _this__u8e3s4;
      } else {
        tmp = new ImmutableMap(LinkedHashMap_init_$Create$_0(_this__u8e3s4));
      }
    }
    return tmp;
  }
  function ImmutableEntry(delegate) {
    this.thq_1 = delegate;
  }
  protoOf(ImmutableEntry).equals = function (other) {
    return equals(this.thq_1, other);
  };
  protoOf(ImmutableEntry).hashCode = function () {
    return hashCode(this.thq_1);
  };
  protoOf(ImmutableEntry).toString = function () {
    return toString(this.thq_1);
  };
  protoOf(ImmutableEntry).v = function () {
    return this.thq_1.v();
  };
  protoOf(ImmutableEntry).w = function () {
    return this.thq_1.w();
  };
  function ImmutableMap(delegate) {
    this.uhq_1 = delegate;
  }
  protoOf(ImmutableMap).u = function () {
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = this.uhq_1.u();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var destination = LinkedHashSet_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$1 = new ImmutableEntry(item);
      destination.e(tmp$ret$1);
    }
    return destination;
  };
  protoOf(ImmutableMap).equals = function (other) {
    return equals(this.uhq_1, other);
  };
  protoOf(ImmutableMap).hashCode = function () {
    return hashCode(this.uhq_1);
  };
  protoOf(ImmutableMap).toString = function () {
    return toString(this.uhq_1);
  };
  protoOf(ImmutableMap).l2 = function (key) {
    return this.uhq_1.l2(key);
  };
  protoOf(ImmutableMap).n2 = function (key) {
    return this.uhq_1.n2(key);
  };
  protoOf(ImmutableMap).q = function () {
    return this.uhq_1.q();
  };
  protoOf(ImmutableMap).j2 = function () {
    return this.uhq_1.j2();
  };
  protoOf(ImmutableMap).j = function () {
    return this.uhq_1.j();
  };
  protoOf(ImmutableMap).k2 = function () {
    return this.uhq_1.k2();
  };
  function toImmutableList(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.q()) {
      tmp = emptyList();
    } else {
      if (_this__u8e3s4 instanceof ImmutableList) {
        tmp = _this__u8e3s4;
      } else {
        tmp = new ImmutableList(ArrayList_init_$Create$_0(_this__u8e3s4));
      }
    }
    return tmp;
  }
  function LruMutableMap(initialCapacity, loadFactor) {
    initialCapacity = initialCapacity === VOID ? 0 : initialCapacity;
    loadFactor = loadFactor === VOID ? 0.75 : loadFactor;
    return new LruMutableMap_0(LinkedHashMap_init_$Create$_1(initialCapacity, loadFactor));
  }
  function ImmutableIterator(delegate) {
    this.vhq_1 = delegate;
  }
  protoOf(ImmutableIterator).equals = function (other) {
    return equals(this.vhq_1, other);
  };
  protoOf(ImmutableIterator).hashCode = function () {
    return hashCode(this.vhq_1);
  };
  protoOf(ImmutableIterator).toString = function () {
    return toString(this.vhq_1);
  };
  protoOf(ImmutableIterator).h = function () {
    return this.vhq_1.h();
  };
  protoOf(ImmutableIterator).i = function () {
    return this.vhq_1.i();
  };
  function ImmutableListIterator(delegate) {
    this.whq_1 = delegate;
  }
  protoOf(ImmutableListIterator).equals = function (other) {
    return equals(this.whq_1, other);
  };
  protoOf(ImmutableListIterator).hashCode = function () {
    return hashCode(this.whq_1);
  };
  protoOf(ImmutableListIterator).toString = function () {
    return toString(this.whq_1);
  };
  protoOf(ImmutableListIterator).h = function () {
    return this.whq_1.h();
  };
  protoOf(ImmutableListIterator).y4 = function () {
    return this.whq_1.y4();
  };
  protoOf(ImmutableListIterator).i = function () {
    return this.whq_1.i();
  };
  protoOf(ImmutableListIterator).z4 = function () {
    return this.whq_1.z4();
  };
  protoOf(ImmutableListIterator).a5 = function () {
    return this.whq_1.a5();
  };
  protoOf(ImmutableListIterator).b5 = function () {
    return this.whq_1.b5();
  };
  function ImmutableList(delegate) {
    this.xhq_1 = delegate;
  }
  protoOf(ImmutableList).g = function () {
    return new ImmutableIterator(this.xhq_1.g());
  };
  protoOf(ImmutableList).d2 = function (index) {
    return new ImmutableListIterator(this.xhq_1.d2(index));
  };
  protoOf(ImmutableList).equals = function (other) {
    return equals(this.xhq_1, other);
  };
  protoOf(ImmutableList).hashCode = function () {
    return hashCode(this.xhq_1);
  };
  protoOf(ImmutableList).toString = function () {
    return toString(this.xhq_1);
  };
  protoOf(ImmutableList).ch = function (element) {
    return this.xhq_1.p(element);
  };
  protoOf(ImmutableList).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ch((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).dh = function (elements) {
    return this.xhq_1.a2(elements);
  };
  protoOf(ImmutableList).a2 = function (elements) {
    return this.dh(elements);
  };
  protoOf(ImmutableList).o = function (index) {
    return this.xhq_1.o(index);
  };
  protoOf(ImmutableList).m3m = function (element) {
    return this.xhq_1.r(element);
  };
  protoOf(ImmutableList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.m3m((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).q = function () {
    return this.xhq_1.q();
  };
  protoOf(ImmutableList).n3m = function (element) {
    return this.xhq_1.b2(element);
  };
  protoOf(ImmutableList).b2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.n3m((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).e2 = function (fromIndex, toIndex) {
    return this.xhq_1.e2(fromIndex, toIndex);
  };
  protoOf(ImmutableList).j = function () {
    return this.xhq_1.j();
  };
  function MutableEntry_0($outer, delegate) {
    this.zhq_1 = $outer;
    this.yhq_1 = delegate;
  }
  protoOf(MutableEntry_0).v = function () {
    return this.yhq_1.v();
  };
  protoOf(MutableEntry_0).w = function () {
    return this.yhq_1.w();
  };
  function LruMutableMap_0(delegate) {
    this.ahr_1 = delegate;
  }
  protoOf(LruMutableMap_0).u = function () {
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = this.ahr_1.u();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var destination = LinkedHashSet_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      var tmp$ret$1 = new MutableEntry_0(this, item);
      destination.e(tmp$ret$1);
    }
    return destination;
  };
  protoOf(LruMutableMap_0).yfg = function (key) {
    var item = this.ahr_1.g2(key);
    if (!(item == null)) {
      // Inline function 'kotlin.collections.set' call
      this.ahr_1.f2(key, item);
    }
    return item;
  };
  protoOf(LruMutableMap_0).n2 = function (key) {
    if (!!(key == null))
      return null;
    return this.yfg(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).rhn = function (key, value) {
    var item = this.ahr_1.g2(key);
    // Inline function 'kotlin.collections.set' call
    this.ahr_1.f2(key, value);
    return item;
  };
  protoOf(LruMutableMap_0).f2 = function (key, value) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.rhn(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(LruMutableMap_0).h2 = function (from) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.u().g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.v();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.w();
      this.rhn(key, value);
    }
  };
  protoOf(LruMutableMap_0).i2 = function () {
    this.ahr_1.i2();
  };
  protoOf(LruMutableMap_0).shn = function (key) {
    return this.ahr_1.g2(key);
  };
  protoOf(LruMutableMap_0).g2 = function (key) {
    if (!!(key == null))
      return null;
    return this.shn(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).j2 = function () {
    return this.ahr_1.j2();
  };
  protoOf(LruMutableMap_0).k2 = function () {
    return this.ahr_1.k2();
  };
  protoOf(LruMutableMap_0).bhr = function (key) {
    return this.ahr_1.l2(key);
  };
  protoOf(LruMutableMap_0).l2 = function (key) {
    if (!!(key == null))
      return false;
    return this.bhr(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).q = function () {
    return this.ahr_1.q();
  };
  protoOf(LruMutableMap_0).j = function () {
    return this.ahr_1.j();
  };
  function addAppleComponents(_this__u8e3s4, options) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  protoOf(BaseRequestDelegate).hhd = assertActive;
  protoOf(BaseRequestDelegate).l44 = start;
  protoOf(BaseRequestDelegate).khd = awaitStarted;
  protoOf(BaseRequestDelegate).uhd = complete;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  DecodeUtils_instance = new DecodeUtils();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  NullRequestData_instance = new NullRequestData();
  Undefined_instance = new Undefined();
  MimeTypeMap_instance = new MimeTypeMap();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ImageSource;
  _.$_$.b = ImageSource_0;
  _.$_$.c = Factory_0;
  _.$_$.d = SourceFetchResult;
  _.$_$.e = ErrorResult;
  _.$_$.f = Builder_3;
  _.$_$.g = ImageRequest;
  _.$_$.h = SuccessResult;
  _.$_$.i = get_crossfadeMillis;
  _.$_$.j = Pixels;
  _.$_$.k = Dimension;
  _.$_$.l = Size;
  _.$_$.m = Target;
  _.$_$.n = FetcherServiceLoaderTarget;
  _.$_$.o = BitmapImage;
  _.$_$.p = Key;
  _.$_$.q = ImageLoader;
  _.$_$.r = Uri;
  _.$_$.s = getExtra;
  _.$_$.t = toBitmap;
  _.$_$.u = DataSource_DISK_getInstance;
  _.$_$.v = DataSource_MEMORY_CACHE_getInstance;
  _.$_$.w = DataSource_NETWORK_getInstance;
  _.$_$.x = Precision_INEXACT_getInstance;
  _.$_$.y = Scale_FILL_getInstance;
  _.$_$.z = Scale_FIT_getInstance;
  _.$_$.a1 = Builder_init_$Create$_3;
  _.$_$.b1 = Builder_init_$Create$_2;
  _.$_$.c1 = Undefined_instance;
  _.$_$.d1 = Companion_getInstance_10;
  _.$_$.e1 = MimeTypeMap_instance;
  _.$_$.f1 = ServiceLoaderComponentRegistry_getInstance;
  _.$_$.g1 = Companion_getInstance_13;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-core.js.map
